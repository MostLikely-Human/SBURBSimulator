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
a[c]=function(){a[c]=function(){H.IH(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.vA"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.vA"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.vA(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={uu:function uu(a){this.a=a},
rV:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ve:function(a,b,c,d){var t=new H.pa(a,b,c,[d])
t.fk(a,b,c,d)
return t},
dm:function(a,b,c,d){if(!!J.am(a).$isr)return new H.f1(a,b,[c,d])
return new H.hA(a,b,[c,d])},
hr:function(){return new P.dc("No element")},
FV:function(){return new P.dc("Too many elements")},
xb:function(){return new P.dc("Too few elements")},
jW:function(a,b,c,d){if(c-b<=32)H.H4(a,b,c,d)
else H.H3(a,b,c,d)},
H4:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bh(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cu(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
H3:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.aq(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.aq(a3+a4,2)
p=q-t
o=q+t
n=J.bh(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cu(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cu(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cu(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cu(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cu(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cu(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cu(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cu(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cu(a5.$2(j,i),0)){h=i
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
b=J.am(c)
if(b.U(c,0))continue
if(b.a1(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dr(c)
if(b.aC(c,0)){--f
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
if(J.eQ(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cu(a5.$2(d,j),0))for(;!0;)if(J.cu(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eQ(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.jW(a2,a3,g-2,a5)
H.jW(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.b_(a5.$2(n.n(a2,g),l),0);)++g
for(;J.b_(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.b_(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.b_(a5.$2(d,j),0))for(;!0;)if(J.b_(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eQ(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jW(a2,g,f,a5)}else H.jW(a2,g,f,a5)},
l7:function l7(a){this.a=a},
r:function r(){},
eq:function eq(){},
pa:function pa(a,b,c,$ti){var _=this
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
hA:function hA(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
f1:function f1(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jC:function jC(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
es:function es(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
e9:function e9(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
k7:function k7(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iG:function iG(){},
pD:function pD(){},
hW:function hW(){},
kt:function(a,b){var t=a.bB(b)
if(!u.globalState.d.cy)u.globalState.f.bK()
return t},
yL:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.am(s).$isp)throw H.j(P.dD("Arguments to main must be a List: "+H.x(s)))
u.globalState=new H.qV(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$wy()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qs(P.uz(null,H.eN),0)
r=P.C
s.z=new H.w(0,null,null,null,null,null,0,[r,H.fA])
s.ch=new H.w(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qU()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.AS,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.Hr)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a0(null,null,null,r)
p=new H.fq(0,null,!1)
o=new H.fA(s,new H.w(0,null,null,null,null,null,0,[r,H.fq]),q,u.createNewIsolate(),p,new H.dF(H.ta()),new H.dF(H.ta()),!1,!1,[],P.a0(null,null,null,null),null,null,!1,!0,P.a0(null,null,null,null))
q.h(0,0)
o.ds(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fG(a,{func:1,args:[,]}))o.bB(new H.td(t,a))
else if(H.fG(a,{func:1,args:[,,]}))o.bB(new H.te(t,a))
else o.bB(a)
u.globalState.f.bK()},
Hr:function(a){var t=P.hw(["command","print","msg",a])
return new H.dA(!0,P.i4(null,P.C)).aD(t)},
AU:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.AV()
return},
AV:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.j(new P.S("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.j(new P.S('Cannot extract URI from "'+t+'"'))},
AS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eM(!0,[]).b5(b.data)
s=J.bh(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eM(!0,[]).b5(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eM(!0,[]).b5(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.C
j=P.a0(null,null,null,k)
i=new H.fq(0,null,!1)
h=new H.fA(s,new H.w(0,null,null,null,null,null,0,[k,H.fq]),j,u.createNewIsolate(),i,new H.dF(H.ta()),new H.dF(H.ta()),!1,!1,[],P.a0(null,null,null,null),null,null,!1,!0,P.a0(null,null,null,null))
j.h(0,0)
h.ds(0,i)
u.globalState.f.a.aS(0,new H.eN(h,new H.mD(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bK()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fK(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bK()
break
case"close":u.globalState.ch.an(0,$.$get$wz().n(0,a))
a.terminate()
u.globalState.f.bK()
break
case"log":H.AR(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hw(["command","print","msg",t])
k=new H.dA(!0,P.i4(null,P.C)).aD(k)
s.toString
self.postMessage(k)}else P.fH(s.n(t,"msg"))
break
case"error":throw H.j(s.n(t,"msg"))}},
AR:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hw(["command","log","msg",a])
r=new H.dA(!0,P.i4(null,P.C)).aD(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.bG(q)
t=H.cn(q)
s=P.lF(t)
throw H.j(s)}},
AT:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.xp=$.xp+("_"+s)
$.xq=$.xq+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fK(f,["spawned",new H.fB(s,r),q,t.r])
r=new H.mE(a,b,c,d,t)
if(e===!0){t.e9(q,q)
u.globalState.f.a.aS(0,new H.eN(t,r,"start isolate"))}else r.$0()},
Ha:function(a,b){var t=new H.pv(!0,!1,null)
t.fl(a,b)
return t},
HK:function(a){return new H.eM(!0,[]).b5(new H.dA(!1,P.i4(null,P.C)).aD(a))},
td:function td(a,b){this.a=a
this.b=b},
te:function te(a,b){this.a=a
this.b=b},
qV:function qV(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
qQ:function qQ(a,b){this.a=a
this.b=b},
qs:function qs(a,b){this.a=a
this.b=b},
qt:function qt(a){this.a=a},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
qU:function qU(){},
mD:function mD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mE:function mE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qe:function qe(){},
fB:function fB(b,a){this.b=b
this.a=a},
qX:function qX(a,b){this.a=a
this.b=b},
i8:function i8(b,c,a){this.b=b
this.c=c
this.a=a},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
pv:function pv(a,b,c){this.a=a
this.b=b
this.c=c},
pw:function pw(a,b){this.a=a
this.b=b},
px:function px(a,b){this.a=a
this.b=b},
dF:function dF(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
zT:function(){throw H.j(new P.S("Cannot modify unmodifiable Map"))},
Ih:function(a){return u.types[a]},
yE:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.am(a).$isaE},
x:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cv(a)
if(typeof t!=="string")throw H.j(H.bx(a))
return t},
GD:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.oi(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eu:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
uW:function(a,b){if(b==null)throw H.j(new P.bM(a,null,null))
return b.$1(a)},
fo:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.uW(a,c)
if(3>=t.length)return H.u(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.uW(a,c)}if(b<2||b>36)throw H.j(P.bw(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a5(q,o)|32)>r)return H.uW(a,c)}return parseInt(a,b)},
xn:function(a,b){return b.$1(a)},
xr:function(a,b){var t,s
H.yw(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.xn(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.tn(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.xn(a,b)}return t},
oc:function(a){var t,s,r,q,p,o,n,m
t=J.am(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.S||!!J.am(a).$iseG){p=C.z(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a5(q,0)===36)q=C.c.ag(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.t4(H.ky(a),0,null),u.mangledGlobalNames)},
ob:function(a){return"Instance of '"+H.oc(a)+"'"},
Gh:function(){if(!!self.location)return self.location.href
return},
xm:function(a){var t,s,r,q,p
t=J.c0(a)
if(typeof t!=="number")return t.eW()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Gm:function(a){var t,s,r,q
t=H.a([],[P.C])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bF)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.j(H.bx(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.b2(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.j(H.bx(q))}return H.xm(t)},
xt:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bF)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.j(H.bx(q))
if(q<0)throw H.j(H.bx(q))
if(q>65535)return H.Gm(a)}return H.xm(a)},
Gn:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eW()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hK:function(a){var t
if(typeof a!=="number")return H.a6(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.b2(t,10))>>>0,56320|t&1023)}}throw H.j(P.bw(a,0,1114111,null,null))},
cX:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
xo:function(a){return a.b?H.cX(a).getUTCFullYear()+0:H.cX(a).getFullYear()+0},
uY:function(a){return a.b?H.cX(a).getUTCMonth()+1:H.cX(a).getMonth()+1},
uX:function(a){return a.b?H.cX(a).getUTCDate()+0:H.cX(a).getDate()+0},
Gi:function(a){return a.b?H.cX(a).getUTCHours()+0:H.cX(a).getHours()+0},
Gk:function(a){return a.b?H.cX(a).getUTCMinutes()+0:H.cX(a).getMinutes()+0},
Gl:function(a){return a.b?H.cX(a).getUTCSeconds()+0:H.cX(a).getSeconds()+0},
Gj:function(a){return a.b?H.cX(a).getUTCMilliseconds()+0:H.cX(a).getMilliseconds()+0},
uZ:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.j(H.bx(a))
return a[b]},
xs:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.j(H.bx(a))
a[b]=c},
a6:function(a){throw H.j(H.bx(a))},
u:function(a,b){if(a==null)J.c0(a)
throw H.j(H.c8(a,b))},
c8:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cU(!0,b,"index",null)
t=J.c0(a)
if(!(b<0)){if(typeof t!=="number")return H.a6(t)
s=b>=t}else s=!0
if(s)return P.bA(b,a,"index",null,t)
return P.jS(b,"index",null)},
I8:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cU(!0,a,"start",null)
if(a<0||a>c)return new P.ez(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cU(!0,b,"end",null)
if(b<a||b>c)return new P.ez(a,c,!0,b,"end","Invalid value")}return new P.cU(!0,b,"end",null)},
bx:function(a){return new P.cU(!0,a,null,null)},
kv:function(a){if(typeof a!=="number")throw H.j(H.bx(a))
return a},
vz:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(H.bx(a))
return a},
yw:function(a){if(typeof a!=="string")throw H.j(H.bx(a))
return a},
j:function(a){var t
if(a==null)a=new P.fl()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.yP})
t.name=""}else t.toString=H.yP
return t},
yP:function(){return J.cv(this.dartException)},
aY:function(a){throw H.j(a)},
bF:function(a){throw H.j(new P.by(a))},
dR:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
xM:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
uw:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mX(a,s,t?null:b.receiver)},
bG:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.tf(a)
if(a==null)return
if(a instanceof H.h9)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.b2(r,16)&8191)===10)switch(q){case 438:return t.$1(H.uw(H.x(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return t.$1(new H.jK(p,null))}}if(a instanceof TypeError){o=$.$get$xG()
n=$.$get$xH()
m=$.$get$xI()
l=$.$get$xJ()
k=$.$get$xN()
j=$.$get$xO()
i=$.$get$xL()
$.$get$xK()
h=$.$get$xQ()
g=$.$get$xP()
f=o.aN(s)
if(f!=null)return t.$1(H.uw(s,f))
else{f=n.aN(s)
if(f!=null){f.method="call"
return t.$1(H.uw(s,f))}else{f=m.aN(s)
if(f==null){f=l.aN(s)
if(f==null){f=k.aN(s)
if(f==null){f=j.aN(s)
if(f==null){f=i.aN(s)
if(f==null){f=l.aN(s)
if(f==null){f=h.aN(s)
if(f==null){f=g.aN(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jK(s,f==null?null:f.method))}}return t.$1(new H.pC(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.k_()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cU(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.k_()
return a},
cn:function(a){var t
if(a instanceof H.h9)return a.b
if(a==null)return new H.ko(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.ko(a,null)},
It:function(a){if(a==null||typeof a!='object')return J.dC(a)
else return H.eu(a)},
yB:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
Io:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kt(b,new H.t_(a))
case 1:return H.kt(b,new H.t0(a,d))
case 2:return H.kt(b,new H.t1(a,d,e))
case 3:return H.kt(b,new H.t2(a,d,e,f))
case 4:return H.kt(b,new H.t3(a,d,e,f,g))}throw H.j(P.lF("Unsupported number of arguments for wrapped closure"))},
dq:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.Io)
a.$identity=t
return t},
zP:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.am(c).$isp){t.$reflectionInfo=c
r=H.GD(t).r}else r=c
q=d?Object.create(new H.oJ().constructor.prototype):Object.create(new H.fR(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dG
$.dG=J.ea(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.w4(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Ih,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.w1:H.tr
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.j("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.w4(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
zM:function(a,b,c,d){var t=H.tr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
w4:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.zO(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.zM(s,!q,t,b)
if(s===0){q=$.dG
$.dG=J.ea(q,1)
o="self"+H.x(q)
q="return function(){var "+o+" = this."
p=$.fS
if(p==null){p=H.l_("self")
$.fS=p}return new Function(q+H.x(p)+";return "+o+"."+H.x(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dG
$.dG=J.ea(q,1)
n+=H.x(q)
q="return function("+n+"){return this."
p=$.fS
if(p==null){p=H.l_("self")
$.fS=p}return new Function(q+H.x(p)+"."+H.x(t)+"("+n+");}")()},
zN:function(a,b,c,d){var t,s
t=H.tr
s=H.w1
switch(b?-1:a){case 0:throw H.j(new H.on("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
zO:function(a,b){var t,s,r,q,p,o,n,m
t=H.zL()
s=$.w0
if(s==null){s=H.l_("receiver")
$.w0=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.zN(q,!o,r,b)
if(q===1){s="return function(){return this."+H.x(t)+"."+H.x(r)+"(this."+H.x(s)+");"
o=$.dG
$.dG=J.ea(o,1)
return new Function(s+H.x(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.x(t)+"."+H.x(r)+"(this."+H.x(s)+", "+m+");"
o=$.dG
$.dG=J.ea(o,1)
return new Function(s+H.x(o)+"}")()},
vA:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.am(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.zP(a,b,t,!!d,e,f)},
tr:function(a){return a.a},
w1:function(a){return a.c},
zL:function(){var t=$.fS
if(t==null){t=H.l_("self")
$.fS=t}return t},
l_:function(a){var t,s,r,q,p
t=new H.fR("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Iw:function(a,b){var t=J.bh(b)
throw H.j(H.w3(H.oc(a),t.L(b,3,t.gm(b))))},
kA:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.am(a)[b]
else t=!0
if(t)return a
H.Iw(a,b)},
yA:function(a){var t=J.am(a)
return"$S" in t?t.$S():null},
fG:function(a,b){var t
if(a==null)return!1
t=H.yA(a)
return t==null?!1:H.vD(t,b)},
w3:function(a,b){return new H.l4("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
IH:function(a){throw H.j(new P.lo(a))},
ta:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
yC:function(a){return u.getIsolateTag(a)},
c_:function(a){return new H.dS(a,null)},
a:function(a,b){a.$ti=b
return a},
ky:function(a){if(a==null)return
return a.$ti},
yD:function(a,b){return H.vG(a["$as"+H.x(b)],H.ky(a))},
an:function(a,b,c){var t=H.yD(a,b)
return t==null?null:t[c]},
M:function(a,b){var t=H.ky(a)
return t==null?null:t[b]},
dB:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.t4(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.x(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dB(t,b)
return H.HO(a,b)}return"unknown-reified-type"},
HO:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dB(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dB(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dB(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.If(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dB(l[j],b)+(" "+H.x(j))}q+="}"}return"("+q+") => "+t},
t4:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.cd("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.O=p+", "
o=a[s]
if(o!=null)q=!1
p=t.O+=H.dB(o,c)}return q?"":"<"+t.C(0)+">"},
kz:function(a){var t,s
if(a instanceof H.eY){t=H.yA(a)
if(t!=null)return H.dB(t,null)}s=J.am(a).constructor.builtin$cls
if(a==null)return s
return s+H.t4(a.$ti,0,null)},
vG:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dW:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ky(a)
s=J.am(a)
if(s[b]==null)return!1
return H.yu(H.vG(s[d],t),c)},
ID:function(a,b,c,d){if(a==null)return a
if(H.dW(a,b,c,d))return a
throw H.j(H.w3(H.oc(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.t4(c,0,null),u.mangledGlobalNames)))},
yu:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d2(a[s],b[s]))return!1
return!0},
eP:function(a,b,c){return a.apply(b,H.yD(b,c))},
I3:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ab"||b.builtin$cls==="cB"
if(b==null)return!0
t=H.ky(a)
a=J.am(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.vD(r.apply(a,null),b)}return H.d2(s,b)},
d2:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="cB")return!0
if('func' in b)return H.vD(a,b)
if('func' in a)return b.builtin$cls==="IN"||b.builtin$cls==="ab"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dB(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.yu(H.vG(o,t),r)},
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
if(!(H.d2(t,p)||H.d2(p,t)))return!1}return!0},
HV:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d2(p,o)||H.d2(o,p)))return!1}return!0},
vD:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d2(t,s)||H.d2(s,t)))return!1}r=a.args
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
if(!(H.d2(i,h)||H.d2(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d2(i,h)||H.d2(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d2(i,h)||H.d2(h,i)))return!1}}return H.HV(a.named,b.named)},
IX:function(a){var t=$.vB
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
IW:function(a){return H.eu(a)},
IV:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Iq:function(a){var t,s,r,q,p,o
t=$.vB.$1(a)
s=$.rS[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rZ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.ys.$2(a,t)
if(t!=null){s=$.rS[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rZ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.vF(r)
$.rS[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rZ[t]=r
return r}if(p==="-"){o=H.vF(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.yG(a,r)
if(p==="*")throw H.j(new P.eF(t))
if(u.leafTags[t]===true){o=H.vF(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.yG(a,r)},
yG:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.t6(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
vF:function(a){return J.t6(a,!1,null,!!a.$isaE)},
Ir:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.t6(t,!1,null,!!t.$isaE)
else return J.t6(t,c,null,null)},
Im:function(){if(!0===$.vC)return
$.vC=!0
H.In()},
In:function(){var t,s,r,q,p,o,n,m
$.rS=Object.create(null)
$.rZ=Object.create(null)
H.Il()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.yH.$1(p)
if(o!=null){n=H.Ir(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
Il:function(){var t,s,r,q,p,o,n
t=C.T()
t=H.fF(C.U,H.fF(C.V,H.fF(C.y,H.fF(C.y,H.fF(C.X,H.fF(C.W,H.fF(C.Y(C.z),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.vB=new H.rW(p)
$.ys=new H.rX(o)
$.yH=new H.rY(n)},
fF:function(a,b){return a(b)||b},
ur:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.j(new P.bM("Illegal RegExp pattern ("+String(q)+")",a,null))},
IB:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
yM:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hs){q=b.gdS()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.aY(H.bx(b))
throw H.j("String.replaceAll(Pattern) UNIMPLEMENTED")}},
HT:function(a){return a},
IC:function(a,b,c,d){var t,s,r,q,p,o
t=J.am(b)
if(!t.$isuS)throw H.j(P.dE(b,"pattern","is not a Pattern"))
for(t=t.aV(b,a),t=new H.kb(t.a,t.b,t.c,null),s=0,r="";t.E();){q=t.d
p=q.b
o=p.index
r=r+H.x(H.yj().$1(C.c.L(a,s,o)))+H.x(c.$1(q))
s=o+p[0].length}t=r+H.x(H.yj().$1(C.c.ag(a,s)))
return t.charCodeAt(0)==0?t:t},
la:function la(){},
lb:function lb(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
oi:function oi(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pA:function pA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jK:function jK(a,b){this.a=a
this.b=b},
mX:function mX(a,b,c){this.a=a
this.b=b
this.c=c},
pC:function pC(a){this.a=a},
h9:function h9(a,b){this.a=a
this.b=b},
tf:function tf(a){this.a=a},
ko:function ko(a,b){this.a=a
this.b=b},
t_:function t_(a){this.a=a},
t0:function t0(a,b){this.a=a
this.b=b},
t1:function t1(a,b,c){this.a=a
this.b=b
this.c=c},
t2:function t2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t3:function t3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eY:function eY(){},
pg:function pg(){},
oJ:function oJ(){},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l4:function l4(a){this.a=a},
on:function on(a){this.a=a},
dS:function dS(a,b){this.a=a
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
mW:function mW(a){this.a=a},
mV:function mV(a){this.a=a},
n8:function n8(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
n9:function n9(a,$ti){this.a=a
this.$ti=$ti},
na:function na(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rW:function rW(a){this.a=a},
rX:function rX(a){this.a=a},
rY:function rY(a){this.a=a},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
km:function km(a,b){this.a=a
this.b=b},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
rf:function rf(a,b,c){this.a=a
this.b=b
this.c=c},
rg:function rg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cD:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.dD("Invalid length "+H.x(a)))
return a},
yf:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dD("Invalid view offsetInBytes "+H.x(b)))},
yi:function(a){return a},
Gf:function(a){return new Int8Array(H.yi(a))},
cI:function(a,b,c){H.yf(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
HJ:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aC()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.j(H.I8(a,b,c))
return b},
fj:function fj(){},
et:function et(){},
nA:function nA(){},
jF:function jF(){},
hE:function hE(){},
hG:function hG(){},
hI:function hI(){},
hF:function hF(){},
hH:function hH(){},
hJ:function hJ(){},
nB:function nB(){},
nC:function nC(){},
nD:function nD(){},
nE:function nE(){},
nF:function nF(){},
nG:function nG(){},
nH:function nH(){},
jG:function jG(){},
fk:function fk(){},
If:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
Iv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
am:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jy.prototype
return J.jx.prototype}if(typeof a=="string")return J.eo.prototype
if(a==null)return J.mT.prototype
if(typeof a=="boolean")return J.mS.prototype
if(a.constructor==Array)return J.en.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ab)return a
return J.rT(a)},
t6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rT:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.vC==null){H.Im()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.j(new P.eF("Return interceptor for "+H.x(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$uv()]
if(p!=null)return p
p=H.Iq(a)
if(p!=null)return p
if(typeof a=="function")return C.Z
s=Object.getPrototypeOf(a)
if(s==null)return C.K
if(s===Object.prototype)return C.K
if(typeof q=="function"){Object.defineProperty(q,$.$get$uv(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
xc:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
FW:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a5(a,b)
if(s!==32&&s!==13&&!J.xc(s))break;++b}return b},
uq:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.a_(a,t)
if(s!==32&&s!==13&&!J.xc(s))break}return b},
bh:function(a){if(typeof a=="string")return J.eo.prototype
if(a==null)return a
if(a.constructor==Array)return J.en.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ab)return a
return J.rT(a)},
dh:function(a){if(a==null)return a
if(a.constructor==Array)return J.en.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ab)return a
return J.rT(a)},
dr:function(a){if(typeof a=="number")return J.fi.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eG.prototype
return a},
kx:function(a){if(typeof a=="number")return J.fi.prototype
if(typeof a=="string")return J.eo.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eG.prototype
return a},
d1:function(a){if(typeof a=="string")return J.eo.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eG.prototype
return a},
aq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ab)return a
return J.rT(a)},
ea:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kx(a).W(a,b)},
b_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.am(a).U(a,b)},
vI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dr(a).ax(a,b)},
cu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dr(a).aC(a,b)},
eQ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dr(a).a1(a,b)},
th:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kx(a).aw(a,b)},
fI:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.yE(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bh(a).n(a,b)},
kC:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.yE(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dh(a).i(a,b,c)},
yS:function(a,b){return J.dh(a).h(a,b)},
yT:function(a,b,c,d){return J.aq(a).hk(a,b,c,d)},
yU:function(a,b){return J.d1(a).aV(a,b)},
dX:function(a,b){return J.aq(a).hn(a,b)},
vJ:function(a){return J.aq(a).hp(a)},
ti:function(a,b,c){return J.dr(a).ac(a,b,c)},
yV:function(a){return J.aq(a).ef(a)},
yW:function(a,b){return J.kx(a).aE(a,b)},
yX:function(a,b){return J.aq(a).aF(a,b)},
yY:function(a,b){return J.bh(a).Z(a,b)},
kD:function(a,b,c){return J.bh(a).eh(a,b,c)},
yZ:function(a,b){return J.aq(a).hz(a,b)},
vK:function(a,b){return J.dh(a).T(a,b)},
z_:function(a,b,c,d){return J.dh(a).bC(a,b,c,d)},
kE:function(a){return J.dr(a).am(a)},
vL:function(a,b){return J.dh(a).a9(a,b)},
vM:function(a){return J.aq(a).geb(a)},
vN:function(a){return J.aq(a).ged(a)},
vO:function(a){return J.aq(a).gee(a)},
z0:function(a){return J.aq(a).gbA(a)},
fJ:function(a){return J.aq(a).gau(a)},
vP:function(a){return J.aq(a).gcU(a)},
dC:function(a){return J.am(a).ga6(a)},
kF:function(a){return J.bh(a).gX(a)},
vQ:function(a){return J.aq(a).gY(a)},
cT:function(a){return J.dh(a).gS(a)},
z1:function(a){return J.aq(a).gai(a)},
c0:function(a){return J.bh(a).gm(a)},
z2:function(a){return J.aq(a).gH(a)},
z3:function(a){return J.aq(a).gi8(a)},
vR:function(a){return J.aq(a).gcZ(a)},
vS:function(a){return J.aq(a).geB(a)},
z4:function(a){return J.aq(a).gd3(a)},
z5:function(a){return J.aq(a).gix(a)},
z6:function(a){return J.aq(a).giy(a)},
vT:function(a){return J.am(a).gab(a)},
tj:function(a){return J.aq(a).gaR(a)},
z7:function(a){return J.aq(a).giB(a)},
z8:function(a){return J.aq(a).gaI(a)},
tk:function(a){return J.aq(a).giF(a)},
z9:function(a){return J.aq(a).gbd(a)},
za:function(a){return J.aq(a).br(a)},
zb:function(a,b){return J.aq(a).av(a,b)},
zc:function(a,b){return J.aq(a).bO(a,b)},
zd:function(a,b){return J.bh(a).bn(a,b)},
vU:function(a,b,c,d,e){return J.aq(a).ev(a,b,c,d,e)},
vV:function(a,b){return J.dh(a).aB(a,b)},
ze:function(a,b,c){return J.d1(a).ez(a,b,c)},
vW:function(a,b){return J.aq(a).ie(a,b)},
zf:function(a){return J.dh(a).is(a)},
zg:function(a,b,c,d){return J.aq(a).iu(a,b,c,d)},
kG:function(a,b,c){return J.d1(a).d8(a,b,c)},
tl:function(a,b,c){return J.d1(a).iw(a,b,c)},
fK:function(a,b){return J.aq(a).bf(a,b)},
vX:function(a,b){return J.aq(a).sbA(a,b)},
zh:function(a,b){return J.aq(a).sa7(a,b)},
zi:function(a,b){return J.aq(a).saj(a,b)},
vY:function(a,b){return J.aq(a).dg(a,b)},
zj:function(a,b){return J.dh(a).di(a,b)},
dY:function(a,b){return J.d1(a).f7(a,b)},
zk:function(a,b){return J.d1(a).ag(a,b)},
tm:function(a){return J.dr(a).l(a)},
zl:function(a){return J.dh(a).ar(a)},
zm:function(a){return J.d1(a).iD(a)},
zn:function(a,b){return J.dr(a).bL(a,b)},
cv:function(a){return J.am(a).C(a)},
zo:function(a){return J.d1(a).iE(a)},
tn:function(a){return J.d1(a).bq(a)},
zp:function(a){return J.d1(a).eP(a)},
f:function f(){},
mS:function mS(){},
mT:function mT(){},
ht:function ht(){},
o6:function o6(){},
eG:function eG(){},
ep:function ep(){},
en:function en($ti){this.$ti=$ti},
ut:function ut($ti){this.$ti=$ti},
ie:function ie(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fi:function fi(){},
jy:function jy(){},
jx:function jx(){},
eo:function eo(){}},P={
Hg:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.HW()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dq(new P.qa(t),1)).observe(s,{childList:true})
return new P.q9(t,s,r)}else if(self.setImmediate!=null)return P.HX()
return P.HY()},
Hh:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dq(new P.qb(a),0))},
Hi:function(a){++u.globalState.f.b
self.setImmediate(H.dq(new P.qc(a),0))},
Hj:function(a){P.vj(C.o,a)},
bf:function(a,b){P.yd(null,a)
return b.ghO()},
bP:function(a,b){P.yd(a,b)},
be:function(a,b){J.yX(b,a)},
bd:function(a,b){b.cQ(H.bG(a),H.cn(a))},
yd:function(a,b){var t,s,r,q
t=new P.ry(b)
s=new P.rz(b)
r=J.am(a)
if(!!r.$isbp)a.cJ(t,s)
else if(!!r.$isc4)a.cc(t,s)
else{q=new P.bp(0,$.ap,null,[null])
q.a=4
q.c=a
q.cJ(t,null)}},
bg:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.ap.toString
return new P.rJ(t)},
yk:function(a,b){if(H.fG(a,{func:1,args:[P.cB,P.cB]})){b.toString
return a}else{b.toString
return a}},
Ay:function(a,b){var t=new P.bp(0,$.ap,null,[b])
P.xF(C.o,new P.rL(a,t))
return t},
tU:function(a,b,c){var t
if(a==null)a=new P.fl()
t=$.ap
if(t!==C.e)t.toString
t=new P.bp(0,t,null,[c])
t.du(a,b)
return t},
Az:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bp(0,$.ap,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.mj(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bF)(a),++l){q=a[l]
p=t.b
q.cc(new P.mi(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bp(0,$.ap,null,[null])
m.dt(C.D)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.bG(j)
n=H.cn(j)
if(t.b===0||!1)return P.tU(o,n,null)
else{t.c=o
t.d=n}}return s},
bc:function(a){return new P.kq(new P.bp(0,$.ap,null,[a]),[a])},
yh:function(a,b,c){$.ap.toString
a.ap(b,c)},
Hm:function(a,b){var t=new P.bp(0,$.ap,null,[b])
t.a=4
t.c=a
return t},
y2:function(a,b){var t,s,r
b.a=1
try{a.cc(new P.qB(b),new P.qC(b))}catch(r){t=H.bG(r)
s=H.cn(r)
P.yJ(new P.qD(b,t,s))}},
qA:function(a,b){var t,s,r
for(;a.gfZ();)a=a.c
t=a.gcB()
s=b.c
if(t){b.c=null
r=b.bX(s)
b.a=a.a
b.c=a.c
P.fz(b,r)}else{b.a=2
b.c=a
a.dW(s)}},
fz:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fJ(p)
n=p.gaQ()
s.toString
P.ku(null,null,s,o,n)}return}for(;b.gcE()!=null;b=m){m=b.a
b.a=null
P.fz(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.geo()||b.gen()){k=b.ghh()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fJ(p)
n=p.gaQ()
s.toString
P.ku(null,null,s,o,n)
return}j=$.ap
if(j==null?k!=null:j!==k)$.ap=k
else j=null
if(b.gen())new P.qI(t,r,q,b).$0()
else if(s){if(b.geo())new P.qH(r,b,l).$0()}else if(b.ghV())new P.qG(t,r,b).$0()
if(j!=null)$.ap=j
s=r.b
if(!!J.am(s).$isc4){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bX(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qA(s,i)
return}}i=b.b
b=i.bW()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
HQ:function(){var t,s
for(;t=$.fD,t!=null;){$.ia=null
s=t.b
$.fD=s
if(s==null)$.i9=null
t.a.$0()}},
HS:function(){$.vx=!0
try{P.HQ()}finally{$.ia=null
$.vx=!1
if($.fD!=null)$.$get$vs().$1(P.yv())}},
yr:function(a){var t=new P.kc(a,null)
if($.fD==null){$.i9=t
$.fD=t
if(!$.vx)$.$get$vs().$1(P.yv())}else{$.i9.b=t
$.i9=t}},
HR:function(a){var t,s,r
t=$.fD
if(t==null){P.yr(a)
$.ia=$.i9
return}s=new P.kc(a,null)
r=$.ia
if(r==null){s.b=t
$.ia=s
$.fD=s}else{s.b=r.b
r.b=s
$.ia=s
if(s.b==null)$.i9=s}},
yJ:function(a){var t=$.ap
if(C.e===t){P.fE(null,null,C.e,a)
return}t.toString
P.fE(null,null,t,t.cO(a,!0))},
IR:function(a,b){return new P.re(null,a,!1,[b])},
yo:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.bG(o)
s=H.cn(o)
$.ap.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fJ(r)
q=n
p=r.gaQ()
c.$2(q,p)}}},
HI:function(a,b,c,d){var t=a.c3(0)
if(!!J.am(t).$isc4&&t!==$.$get$hj())t.cf(new P.rB(b,c,d))
else b.ap(c,d)},
ye:function(a,b){return new P.rA(a,b)},
vw:function(a,b,c){var t=a.c3(0)
if(!!J.am(t).$isc4&&t!==$.$get$hj())t.cf(new P.rC(b,c))
else b.aK(c)},
Hl:function(a,b,c,d,e,f,g){var t,s
t=$.ap
s=e?1:0
s=new P.i1(a,null,null,null,null,t,s,null,null,[f,g])
s.fo(b,c,d,e,g)
s.fs(a,b,c,d,e,f,g)
return s},
HH:function(a,b,c){$.ap.toString
a.bQ(b,c)},
xF:function(a,b){var t=$.ap
if(t===C.e){t.toString
return P.vj(a,b)}return P.vj(a,t.cO(b,!0))},
vj:function(a,b){var t=C.a.aq(a.a,1000)
return H.Ha(t<0?0:t,b)},
ku:function(a,b,c,d,e){var t={}
t.a=d
P.HR(new P.rI(t,e))},
yl:function(a,b,c,d){var t,s
s=$.ap
if(s===c)return d.$0()
$.ap=c
t=s
try{s=d.$0()
return s}finally{$.ap=t}},
yn:function(a,b,c,d,e){var t,s
s=$.ap
if(s===c)return d.$1(e)
$.ap=c
t=s
try{s=d.$1(e)
return s}finally{$.ap=t}},
ym:function(a,b,c,d,e,f){var t,s
s=$.ap
if(s===c)return d.$2(e,f)
$.ap=c
t=s
try{s=d.$2(e,f)
return s}finally{$.ap=t}},
fE:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cO(d,!(!t||!1))
P.yr(d)},
qa:function qa(a){this.a=a},
q9:function q9(a,b,c){this.a=a
this.b=b
this.c=c},
qb:function qb(a){this.a=a},
qc:function qc(a){this.a=a},
ry:function ry(a){this.a=a},
rz:function rz(a){this.a=a},
rJ:function rJ(a){this.a=a},
c4:function c4(){},
rL:function rL(a,b){this.a=a
this.b=b},
mj:function mj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mi:function mi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eZ:function eZ(){},
kd:function kd(){},
dU:function dU(a,$ti){this.a=a
this.$ti=$ti},
kq:function kq(a,$ti){this.a=a
this.$ti=$ti},
ki:function ki(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bp:function bp(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qx:function qx(a,b){this.a=a
this.b=b},
qF:function qF(a,b){this.a=a
this.b=b},
qB:function qB(a){this.a=a},
qC:function qC(a){this.a=a},
qD:function qD(a,b,c){this.a=a
this.b=b
this.c=c},
qz:function qz(a,b){this.a=a
this.b=b},
qE:function qE(a,b){this.a=a
this.b=b},
qy:function qy(a,b,c){this.a=a
this.b=b
this.c=c},
qI:function qI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qJ:function qJ(a){this.a=a},
qH:function qH(a,b,c){this.a=a
this.b=b
this.c=c},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
kc:function kc(a,b){this.a=a
this.b=b},
dn:function dn(){},
oP:function oP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oN:function oN(a,b){this.a=a
this.b=b},
oO:function oO(a,b){this.a=a
this.b=b},
oQ:function oQ(a){this.a=a},
oV:function oV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oT:function oT(a,b){this.a=a
this.b=b},
oU:function oU(){},
oW:function oW(a){this.a=a},
oZ:function oZ(a){this.a=a},
p_:function p_(a,b){this.a=a
this.b=b},
oX:function oX(a,b){this.a=a
this.b=b},
oY:function oY(a){this.a=a},
p0:function p0(a,b){this.a=a
this.b=b},
p1:function p1(a,b){this.a=a
this.b=b},
oR:function oR(a,b,c){this.a=a
this.b=b
this.c=c},
oS:function oS(a){this.a=a},
oM:function oM(){},
dp:function dp(){},
qg:function qg(a,b,c){this.a=a
this.b=b
this.c=c},
qf:function qf(a){this.a=a},
kf:function kf(){},
ql:function ql(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qn:function qn(b,c,a){this.b=b
this.c=c
this.a=a},
qm:function qm(){},
qY:function qY(){},
qZ:function qZ(a,b){this.a=a
this.b=b},
rd:function rd(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
re:function re(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
rB:function rB(a,b,c){this.a=a
this.b=b
this.c=c},
rA:function rA(a,b){this.a=a
this.b=b},
rC:function rC(a,b){this.a=a
this.b=b},
i0:function i0(){},
i1:function i1(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
qW:function qW(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eS:function eS(a,b){this.a=a
this.b=b},
rx:function rx(){},
rI:function rI(a,b){this.a=a
this.b=b},
r1:function r1(){},
r2:function r2(a,b){this.a=a
this.b=b},
r3:function r3(a,b){this.a=a
this.b=b},
r4:function r4(a,b){this.a=a
this.b=b},
Hn:function(a,b){var t=a[b]
return t===a?null:t},
vu:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vt:function(){var t=Object.create(null)
P.vu(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
xd:function(a,b,c){return H.yB(a,new H.w(0,null,null,null,null,null,0,[b,c]))},
bZ:function(a,b){return new H.w(0,null,null,null,null,null,0,[a,b])},
jz:function(){return new H.w(0,null,null,null,null,null,0,[null,null])},
hw:function(a){return H.yB(a,new H.w(0,null,null,null,null,null,0,[null,null]))},
i4:function(a,b){return new P.kl(0,null,null,null,null,null,0,[a,b])},
Hq:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
E:function(a,b,c,d,e){return new P.qL(0,null,null,null,null,[d,e])},
un:function(a,b,c){var t,s
if(P.vy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ib()
s.push(a)
try{P.HP(a,t)}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=P.xB(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jv:function(a,b,c){var t,s,r
if(P.vy(a))return b+"..."+c
t=new P.cd(b)
s=$.$get$ib()
s.push(a)
try{r=t
r.O=P.xB(r.gO(),a,", ")}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=t
s.O=s.gO()+c
s=t.gO()
return s.charCodeAt(0)==0?s:s},
vy:function(a){var t,s
for(t=0;s=$.$get$ib(),t<s.length;++t)if(a===s[t])return!0
return!1},
HP:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cT(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.E())return
q=H.x(t.gI())
b.push(q)
s+=q.length+2;++r}if(!t.E()){if(r<=5)return
if(0>=b.length)return H.u(b,-1)
p=b.pop()
if(0>=b.length)return H.u(b,-1)
o=b.pop()}else{n=t.gI();++r
if(!t.E()){if(r<=4){b.push(H.x(n))
return}p=H.x(n)
if(0>=b.length)return H.u(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gI();++r
for(;t.E();n=m,m=l){l=t.gI();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.u(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.x(n)
p=H.x(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.u(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a0:function(a,b,c,d){return new P.kk(0,null,null,null,null,null,0,[d])},
jA:function(a,b){var t,s
t=P.a0(null,null,null,b)
for(s=J.cT(a);s.E();)t.h(0,s.gI())
return t},
xi:function(a){var t,s,r
t={}
if(P.vy(a))return"{...}"
s=new P.cd("")
try{$.$get$ib().push(a)
r=s
r.O=r.gO()+"{"
t.a=!0
a.a9(0,new P.no(t,s))
t=s
t.O=t.gO()+"}"}finally{t=$.$get$ib()
if(0>=t.length)return H.u(t,-1)
t.pop()}t=s.gO()
return t.charCodeAt(0)==0?t:t},
uz:function(a,b){var t=new P.nb(null,0,0,0,[b])
t.fj(a,b)
return t},
qL:function qL(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qO:function qO(a){this.a=a},
qM:function qM(a,$ti){this.a=a
this.$ti=$ti},
qN:function qN(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kl:function kl(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kk:function kk(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qS:function qS(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qP:function qP(){},
fh:function fh(){},
hq:function hq(){},
hx:function hx(){},
fn:function fn(){},
aN:function aN(){},
ro:function ro(){},
nn:function nn(){},
hX:function hX(a,$ti){this.a=a
this.$ti=$ti},
no:function no(a,b){this.a=a
this.b=b},
nb:function nb(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qT:function qT(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
ox:function ox(){},
ow:function ow(){},
w_:function(a,b,c,d,e,f){if(C.d.bP(f,4)!==0)throw H.j(new P.bM("Invalid base64 padding, padded length must be multiple of four, is "+H.x(f),a,c))
if(d+e!==f)throw H.j(new P.bM("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.j(new P.bM("Invalid base64 padding, more than two '=' characters",a,b))},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
fW:function fW(){},
fY:function fY(){},
lz:function lz(){},
pM:function pM(a){this.a=a},
pN:function pN(a){this.a=a},
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
H8:function(a,b,c){var t,s,r,q
if(b<0)throw H.j(P.bw(b,0,J.c0(a),null,null))
t=c==null
if(!t&&c<b)throw H.j(P.bw(c,b,J.c0(a),null,null))
s=J.cT(a)
for(r=0;r<b;++r)if(!s.E())throw H.j(P.bw(b,0,r,null,null))
q=[]
if(t)for(;s.E();)q.push(s.gI())
else for(r=b;r<c;++r){if(!s.E())throw H.j(P.bw(c,b,r,null,null))
q.push(s.gI())}return H.xt(q)},
xB:function(a,b,c){var t=J.cT(b)
if(!t.E())return a
if(c.length===0){do a+=H.x(t.gI())
while(t.E())}else{a+=H.x(t.gI())
for(;t.E();)a=a+c+H.x(t.gI())}return a},
zS:function(a,b){return J.yW(a,b)},
zV:function(a,b){var t=new P.dZ(a,b)
t.dq(a,b)
return t},
zW:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.x(t)
if(t>=10)return s+"00"+H.x(t)
return s+"000"+H.x(t)},
zX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
im:function(a){if(a>=10)return""+a
return"0"+a},
wh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cv(a)
if(typeof a==="string")return JSON.stringify(a)
return P.Af(a)},
Af:function(a){var t=J.am(a)
if(!!t.$iseY)return t.C(a)
return H.ob(a)},
dD:function(a){return new P.cU(!1,null,null,a)},
dE:function(a,b,c){return new P.cU(!0,a,b,c)},
zq:function(a){return new P.cU(!1,null,a,"Must not be null")},
xx:function(a){return new P.ez(null,null,!1,null,null,a)},
jS:function(a,b,c){return new P.ez(null,null,!0,a,b,"Value not in range")},
bw:function(a,b,c,d,e){return new P.ez(b,c,!0,a,d,"Invalid value")},
da:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a6(a)
if(!(0>a)){if(typeof c!=="number")return H.a6(c)
t=a>c}else t=!0
if(t)throw H.j(P.bw(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a6(b)
if(!(a>b)){if(typeof c!=="number")return H.a6(c)
t=b>c}else t=!0
if(t)throw H.j(P.bw(b,a,c,"end",f))
return b}return c},
bA:function(a,b,c,d,e){var t=e!=null?e:J.c0(b)
return new P.mA(b,t,!0,a,c,"Index out of range")},
lF:function(a){return new P.qw(a)},
d7:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cT(a);s.E();)t.push(s.gI())
if(b)return t
t.fixed$length=Array
return t},
FX:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.d7(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fH:function(a){H.Iv(H.x(a))},
db:function(a,b,c){return new H.hs(a,H.ur(a,!1,!0,!1),null,null)},
p6:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.da(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a1()
s=c<t}else s=!0
return H.xt(s?C.b.cl(a,b,c):a)}if(!!J.am(a).$isfk)return H.Gn(a,b,P.da(b,c,a.length,null,null,null))
return P.H8(a,b,c)},
xS:function(){var t=H.Gh()
if(t!=null)return P.xT(t,0,null)
throw H.j(new P.S("'Uri.base' is not supported"))},
xT:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a5(a,b+4)^58)*3|C.c.a5(a,b)^100|C.c.a5(a,b+1)^97|C.c.a5(a,b+2)^116|C.c.a5(a,b+3)^97)>>>0
if(s===0)return P.xR(b>0||c<c?C.c.L(a,b,c):a,5,null).geR()
else if(s===32)return P.xR(C.c.L(a,t,c),0,null).geR()}r=H.a(new Array(8),[P.C])
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
if(typeof p!=="number")return p.ax()
if(p>=b)if(P.yp(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.W()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a1()
if(typeof l!=="number")return H.a6(l)
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
k-=b}return new P.rc(a,p,o,n,m,l,k,i,null)}return P.Ht(a,b,c,p,o,n,m,l,k,i)},
xV:function(a,b){return C.b.hL(a.split("&"),P.jz(),new P.pI(b))},
Hb:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pF(a)
s=H.cD(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.a_(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fo(C.c.L(a,p,q),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.u(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fo(C.c.L(a,p,c),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.u(r,o)
r[o]=m
return r},
xU:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pG(a)
s=new P.pH(a,t)
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
k=J.b_(C.b.gbh(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Hb(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.az()
h=j[1]
if(typeof h!=="number")return H.a6(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.az()
i=j[3]
if(typeof i!=="number")return H.a6(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.am(e).U(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.u(g,f)
g[f]=0
i=f+1
if(i>=16)return H.u(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.dh()
i=C.d.b2(e,8)
if(f<0||f>=16)return H.u(g,f)
g[f]=i
i=f+1
if(i>=16)return H.u(g,i)
g[i]=e&255
f+=2}}return g},
Ht:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.HB(a,b,d)
else{if(d===b)P.i7(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.HC(a,t,e-1):""
r=P.Hx(a,e,f,!1)
if(typeof f!=="number")return f.W()
q=f+1
if(typeof g!=="number")return H.a6(g)
p=q<g?P.Hz(H.fo(C.c.L(a,q,g),null,new P.rM(a,f)),j):null}else{s=""
r=null
p=null}o=P.Hy(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a1()
n=h<i?P.HA(a,h+1,i,null):null
return new P.kr(j,s,r,p,o,n,i<c?P.Hw(a,i+1,c):null,null,null,null,null,null)},
y7:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i7:function(a,b,c){throw H.j(new P.bM(c,a,b))},
Hz:function(a,b){if(a!=null&&J.b_(a,P.y7(b)))return
return a},
Hx:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.a_(a,b)===91){if(typeof c!=="number")return c.ak()
t=c-1
if(C.c.a_(a,t)!==93)P.i7(a,b,"Missing end `]` to match `[` in host")
P.xU(a,b+1,t)
return C.c.L(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a6(c)
s=b
for(;s<c;++s)if(C.c.a_(a,s)===58){P.xU(a,b,c)
return"["+a+"]"}return P.HE(a,b,c)},
HE:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a6(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.a_(a,t)
if(p===37){o=P.yc(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.cd("")
m=C.c.L(a,s,t)
l=r.O+=!q?m.toLowerCase():m
if(n){o=C.c.L(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.O=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.u(C.G,n)
n=(C.G[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.cd("")
if(s<t){r.O+=C.c.L(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.u(C.k,n)
n=(C.k[n]&1<<(p&15))!==0}else n=!1
if(n)P.i7(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.a_(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.cd("")
m=C.c.L(a,s,t)
r.O+=!q?m.toLowerCase():m
r.O+=P.y8(p)
t+=k
s=t}}}}if(r==null)return C.c.L(a,b,c)
if(s<c){m=C.c.L(a,s,c)
r.O+=!q?m.toLowerCase():m}n=r.O
return n.charCodeAt(0)==0?n:n},
HB:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.ya(C.c.a5(a,b)))P.i7(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a5(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.u(C.m,q)
q=(C.m[q]&1<<(r&15))!==0}else q=!1
if(!q)P.i7(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.L(a,b,c)
return P.Hu(s?a.toLowerCase():a)},
Hu:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
HC:function(a,b,c){var t=P.fC(a,b,c,C.a4,!1)
return t==null?C.c.L(a,b,c):t},
Hy:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fC(a,b,c,C.I,!1)
if(r==null)r=C.c.L(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.af(r,"/"))r="/"+r
return P.HD(r,e,f)},
HD:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.af(a,"/"))return P.HF(a,!t||c)
return P.HG(a)},
HA:function(a,b,c,d){var t=P.fC(a,b,c,C.l,!1)
return t==null?C.c.L(a,b,c):t},
Hw:function(a,b,c){var t=P.fC(a,b,c,C.l,!1)
return t==null?C.c.L(a,b,c):t},
yc:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.a_(a,b+1)
r=C.c.a_(a,t)
q=H.rV(s)
p=H.rV(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.b2(o,4)
if(t>=8)return H.u(C.F,t)
t=(C.F[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hK(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.L(a,b,b+3).toUpperCase()
return},
y8:function(a){var t,s,r,q,p,o,n,m
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
for(p=0;--r,r>=0;s=128){o=C.a.hd(a,6*r)&63|s
if(p>=q)return H.u(t,p)
t[p]=37
n=p+1
m=C.c.a5("0123456789ABCDEF",o>>>4)
if(n>=q)return H.u(t,n)
t[n]=m
m=p+2
n=C.c.a5("0123456789ABCDEF",o&15)
if(m>=q)return H.u(t,m)
t[m]=n
p+=3}}return P.p6(t,0,null)},
fC:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.d1(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a1()
if(typeof c!=="number")return H.a6(c)
if(!(r<c))break
c$0:{o=s.a_(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.u(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.yc(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.u(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.i7(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.a_(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.y8(o)}}if(p==null)p=new P.cd("")
p.O+=C.c.L(a,q,r)
p.O+=H.x(m)
if(typeof l!=="number")return H.a6(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a1()
if(q<c)p.O+=s.L(a,q,c)
t=p.O
return t.charCodeAt(0)==0?t:t},
yb:function(a){if(C.c.af(a,"."))return!0
return C.c.bn(a,"/.")!==-1},
HG:function(a){var t,s,r,q,p,o,n
if(!P.yb(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bF)(s),++p){o=s[p]
if(J.b_(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.u(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.aL(t,"/")},
HF:function(a,b){var t,s,r,q,p,o
if(!P.yb(a))return!b?P.y9(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bF)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.b_(C.b.gbh(t),"..")){if(0>=t.length)return H.u(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.u(t,0)
s=J.kF(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.b_(C.b.gbh(t),".."))t.push("")
if(!b){if(0>=t.length)return H.u(t,0)
s=P.y9(t[0])
if(0>=t.length)return H.u(t,0)
t[0]=s}return C.b.aL(t,"/")},
y9:function(a){var t,s,r,q
t=J.bh(a)
s=t.gm(a)
if(typeof s!=="number")return s.ax()
if(s>=2&&P.ya(t.a_(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a6(s)
if(!(r<s))break
q=t.a_(a,r)
if(q===58)return C.c.L(a,0,r)+"%3A"+C.c.ag(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.u(C.m,s)
s=(C.m[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Hv:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.a_(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.j(P.dD("Invalid URL encoding"))}}return t},
rp:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a6(c)
t=J.d1(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.a_(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.L(a,b,c)
else o=new H.l7(t.L(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.a_(a,s)
if(q>127)throw H.j(P.dD("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.j(P.dD("Truncated URI"))
o.push(P.Hv(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pN(!1).hw(o)},
ya:function(a){var t=a|32
return 97<=t&&t<=122},
xR:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bh(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a6(o)
if(!(r<o))break
c$0:{p=s.a_(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.j(new P.bM("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.j(new P.bM("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a6(o)
if(!(r<o))break
p=s.a_(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbh(t)
if(p!==44||r!==m+7||!s.aJ(a,"base64",m+1))throw H.j(new P.bM("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.M.i9(0,a,o,s.gm(a))
else{l=P.fC(a,o,s.gm(a),C.l,!0)
if(l!=null)a=s.aH(a,o,s.gm(a),l)}return new P.pE(a,t,c)},
HM:function(){var t,s,r,q,p
t=P.FX(22,new P.rF(),!0,P.df)
s=new P.rE(t)
r=new P.rG()
q=new P.rH()
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
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.u(t,d)
r=t[d]
q=C.c.a5(a,s)^96
p=J.fI(r,q>95?31:q)
if(typeof p!=="number")return p.aP()
d=p&31
o=C.d.b2(p,5)
if(o>=8)return H.u(e,o)
e[o]=s}return d},
cS:function cS(){},
bI:function bI(){},
dZ:function dZ(a,b){this.a=a
this.b=b},
V:function V(){},
dI:function dI(a){this.a=a},
lw:function lw(){},
lx:function lx(){},
ee:function ee(){},
fl:function fl(){},
cU:function cU(a,b,c,d){var _=this
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
mA:function mA(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a){this.a=a},
eF:function eF(a){this.a=a},
dc:function dc(a){this.a=a},
by:function by(a){this.a=a},
nU:function nU(){},
k_:function k_(){},
lo:function lo(a){this.a=a},
qw:function qw(a){this.a=a},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
lG:function lG(a,bT,$ti){this.a=a
this.bT=bT
this.$ti=$ti},
C:function C(){},
n:function n(){},
jw:function jw(){},
p:function p(){},
bn:function bn(){},
cB:function cB(){},
ds:function ds(){},
ab:function ab(){},
d8:function d8(){},
eA:function eA(){},
dQ:function dQ(){},
y:function y(){},
cd:function cd(O){this.O=O},
eH:function eH(){},
pI:function pI(a){this.a=a},
pF:function pF(a){this.a=a},
pG:function pG(a){this.a=a},
pH:function pH(a,b){this.a=a
this.b=b},
kr:function kr(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
rM:function rM(a,b){this.a=a
this.b=b},
pE:function pE(a,b,c){this.a=a
this.b=b
this.c=c},
rF:function rF(){},
rE:function rE(a){this.a=a},
rG:function rG(){},
rH:function rH(){},
rc:function rc(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qk:function qk(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yx:function(a){var t,s,r,q,p
if(a==null)return
t=P.jz()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bF)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
I4:function(a,b){var t
if(a==null)return
t={}
J.vL(a,new P.rO(t))
return t},
I5:function(a){var t,s
t=new P.bp(0,$.ap,null,[null])
s=new P.dU(t,[null])
a.then(H.dq(new P.rP(s),1))["catch"](H.dq(new P.rQ(s),1))
return t},
ty:function(){var t=$.wc
if(t==null){t=J.kD(window.navigator.userAgent,"Opera",0)
$.wc=t}return t},
we:function(){var t=$.wd
if(t==null){t=P.ty()!==!0&&J.kD(window.navigator.userAgent,"WebKit",0)
$.wd=t}return t},
zY:function(){var t,s
t=$.w9
if(t!=null)return t
s=$.wa
if(s==null){s=J.kD(window.navigator.userAgent,"Firefox",0)
$.wa=s}if(s)t="-moz-"
else{s=$.wb
if(s==null){s=P.ty()!==!0&&J.kD(window.navigator.userAgent,"Trident/",0)
$.wb=s}if(s)t="-ms-"
else t=P.ty()===!0?"-o-":"-webkit-"}$.w9=t
return t},
rh:function rh(){},
rj:function rj(a,b){this.a=a
this.b=b},
q6:function q6(){},
q7:function q7(a,b){this.a=a
this.b=b},
rO:function rO(a){this.a=a},
ri:function ri(a,b){this.a=a
this.b=b},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
rP:function rP(a){this.a=a},
rQ:function rQ(a){this.a=a},
le:function le(){},
lf:function lf(a){this.a=a},
yg:function(a){var t,s,r
t=new P.bp(0,$.ap,null,[null])
s=new P.kq(t,[null])
a.toString
r=W.N
W.dg(a,"success",new P.rD(a,s),!1,r)
W.dg(a,"error",s.geg(),!1,r)
return t},
lq:function lq(){},
rD:function rD(a,b){this.a=a
this.b=b},
mz:function mz(){},
nQ:function nQ(){},
hM:function hM(){},
py:function py(){},
Hs:function(a){var t=new P.r_(0,0)
t.fu(a)
return t},
qR:function qR(){},
r_:function r_(a,b){this.a=a
this.b=b},
r0:function r0(){},
bV:function bV(){},
kH:function kH(){},
eb:function eb(){},
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
lV:function lV(){},
lW:function lW(){},
mc:function mc(){},
cp:function cp(){},
mx:function mx(){},
d6:function d6(){},
n4:function n4(){},
iV:function iV(){},
je:function je(){},
np:function np(){},
nq:function nq(){},
d9:function d9(){},
nM:function nM(){},
iW:function iW(){},
jf:function jf(){},
o3:function o3(){},
o8:function o8(){},
hO:function hO(){},
p5:function p5(){},
iX:function iX(){},
jg:function jg(){},
p8:function p8(){},
kO:function kO(a){this.a=a},
c7:function c7(){},
pb:function pb(){},
pd:function pd(){},
eE:function eE(){},
po:function po(){},
de:function de(){},
pz:function pz(){},
iY:function iY(){},
jh:function jh(){},
pL:function pL(){},
pP:function pP(){},
pQ:function pQ(){},
i2:function i2(){},
r5:function r5(){},
r6:function r6(){},
r7:function r7(){},
bi:function bi(){},
df:function df(){},
fP:function fP(){},
eT:function eT(){},
fQ:function fQ(){},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
bH:function bH(){},
eV:function eV(){},
kY:function kY(){},
lc:function lc(){},
jN:function jN(){},
kJ:function kJ(){},
ok:function ok(){},
ru:function ru(){},
jZ:function jZ(){},
iZ:function iZ(){},
ji:function ji(){}},W={
zJ:function(a){if(a!=null)return new Audio(a)
return new Audio()},
zK:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
zU:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Hk:function(a){var t=new W.qi(a,null)
t.fp(a)
return t},
zZ:function(a,b,c){var t,s
t=document.body
s=(t&&C.v).aG(t,a,b,c)
s.toString
t=new H.e9(new W.d_(s),new W.rK(),[W.af])
return t.gbi(t)},
h1:function(a){var t,s,r
t="element tag unavailable"
try{s=J.z7(a)
if(typeof s==="string")t=a.tagName}catch(r){H.bG(r)}return t},
wv:function(a,b,c){return W.ww(a,null,null,b,null,null,null,c).ba(new W.ms())},
ww:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e2
s=new P.bp(0,$.ap,null,[t])
r=new P.dU(s,[t])
q=new XMLHttpRequest()
C.R.ib(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.Go
W.dg(q,"load",new W.mt(r,q),!1,t)
W.dg(q,"error",r.geg(),!1,t)
q.send()
return s},
wx:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
AA:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.zi(t,a)}catch(r){H.bG(r)}return t},
eO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
y5:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dg:function(a,b,c,d,e){var t=W.HU(new W.qv(c))
t=new W.qu(0,a,b,t,!1,[e])
t.fq(a,b,c,!1,e)
return t},
y3:function(a){var t,s
t=document.createElement("a")
s=new W.r8(t,window.location)
s=new W.i3(s)
s.ft(a)
return s},
Ho:function(a,b,c,d){return!0},
Hp:function(a,b,c,d){var t,s,r,q,p
t=d.geS()
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
y6:function(){var t=P.y
t=new W.rl(P.jA(C.p,t),P.a0(null,null,null,t),P.a0(null,null,null,t),P.a0(null,null,null,t),null)
t.fv(null,new H.es(C.p,new W.rm(),[H.M(C.p,0),null]),["TEMPLATE"],null)
return t},
HL:function(a){var t
if(!!J.am(a).$ised)return a
t=new P.ka([],[],!1)
t.c=!0
return t.bc(a)},
HU:function(a){var t=$.ap
if(t===C.e)return a
return t.hr(a,!0)},
aL:function aL(){},
eR:function eR(){},
kK:function kK(){},
eU:function eU(){},
cN:function cN(){},
kS:function kS(){},
h3:function h3(){},
h6:function h6(){},
kW:function kW(){},
eW:function eW(){},
eX:function eX(){},
fV:function fV(){},
ec:function ec(){},
l5:function l5(){},
l9:function l9(){},
ii:function ii(){},
fZ:function fZ(){},
ld:function ld(){},
lg:function lg(){},
lh:function lh(){},
h_:function h_(){},
h0:function h0(){},
li:function li(){},
bL:function bL(){},
f_:function f_(){},
iN:function iN(){},
qi:function qi(a,b){this.a=a
this.b=b},
jL:function jL(){},
qj:function qj(){},
ik:function ik(){},
lj:function lj(){},
lk:function lk(){},
lp:function lp(){},
f0:function f0(){},
il:function il(){},
ed:function ed(){},
io:function io(){},
ip:function ip(){},
ls:function ls(){},
iq:function iq(){},
ir:function ir(){},
iO:function iO(){},
j7:function j7(){},
is:function is(){},
it:function it(){},
kh:function kh(a,$ti){this.a=a
this.$ti=$ti},
cw:function cw(){},
rK:function rK(){},
ly:function ly(){},
h2:function h2(){},
lE:function lE(){},
N:function N(){},
aF:function aF(){},
m6:function m6(){},
cg:function cg(){},
f9:function f9(){},
iP:function iP(){},
j8:function j8(){},
iF:function iF(){},
ma:function ma(){},
mb:function mb(){},
md:function md(){},
me:function me(){},
mg:function mg(){},
iJ:function iJ(){},
co:function co(){},
mp:function mp(){},
fb:function fb(){},
iQ:function iQ(){},
j9:function j9(){},
iL:function iL(){},
e2:function e2(){},
ms:function ms(){},
mt:function mt(a,b){this.a=a
this.b=b},
hk:function hk(){},
mw:function mw(){},
hl:function hl(){},
fd:function fd(){},
mB:function mB(){},
n_:function n_(){},
n1:function n1(){},
hu:function hu(){},
hv:function hv(){},
nh:function nh(){},
nm:function nm(){},
hC:function hC(){},
jD:function jD(){},
nr:function nr(){},
ns:function ns(){},
nt:function nt(){},
nu:function nu(){},
nv:function nv(){},
hD:function hD(){},
cq:function cq(){},
jE:function jE(){},
j_:function j_(){},
jj:function jj(){},
nI:function nI(){},
nJ:function nJ(){},
d_:function d_(a){this.a=a},
af:function af(){},
jH:function jH(){},
jI:function jI(){},
j0:function j0(){},
jk:function jk(){},
nO:function nO(){},
nP:function nP(){},
nT:function nT(){},
nV:function nV(){},
nZ:function nZ(){},
o0:function o0(){},
e5:function e5(){},
o5:function o5(){},
ci:function ci(){},
jR:function jR(){},
j1:function j1(){},
jl:function jl(){},
oa:function oa(){},
oe:function oe(){},
jT:function jT(){},
jU:function jU(){},
fr:function fr(){},
jV:function jV(){},
ov:function ov(){},
oy:function oy(){},
oz:function oz(){},
oA:function oA(){},
cr:function cr(){},
jX:function jX(){},
h4:function h4(){},
h7:function h7(){},
oD:function oD(){},
hP:function hP(){},
cs:function cs(){},
jY:function jY(){},
j2:function j2(){},
jm:function jm(){},
fs:function fs(){},
oF:function oF(){},
ck:function ck(){},
oG:function oG(){},
oH:function oH(){},
oL:function oL(){},
p7:function p7(){},
p9:function p9(){},
cm:function cm(){},
e7:function e7(){},
k1:function k1(){},
pe:function pe(){},
pf:function pf(){},
hU:function hU(){},
pj:function pj(){},
cR:function cR(){},
cL:function cL(){},
pp:function pp(){},
j3:function j3(){},
jn:function jn(){},
pq:function pq(){},
h5:function h5(){},
h8:function h8(){},
pu:function pu(){},
ct:function ct(){},
k2:function k2(){},
j4:function j4(){},
jo:function jo(){},
fw:function fw(){},
k3:function k3(){},
e8:function e8(){},
k4:function k4(){},
pJ:function pJ(){},
pK:function pK(){},
pO:function pO(){},
fx:function fx(){},
k5:function k5(){},
pT:function pT(){},
k8:function k8(){},
q_:function q_(){},
eK:function eK(){},
fy:function fy(){},
qh:function qh(){},
i_:function i_(){},
j5:function j5(){},
jp:function jp(){},
ke:function ke(){},
j6:function j6(){},
jq:function jq(){},
qo:function qo(){},
qp:function qp(){},
kj:function kj(){},
iR:function iR(){},
ja:function ja(){},
qK:function qK(){},
i5:function i5(){},
iS:function iS(){},
jb:function jb(){},
r9:function r9(){},
kn:function kn(){},
iT:function iT(){},
jc:function jc(){},
kp:function kp(){},
iU:function iU(){},
jd:function jd(){},
rv:function rv(){},
rw:function rw(){},
qd:function qd(){},
qq:function qq(a){this.a=a},
qr:function qr(a){this.a=a},
kg:function kg(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dV:function dV(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qu:function qu(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qv:function qv(a){this.a=a},
i3:function i3(a){this.a=a},
bu:function bu(){},
jJ:function jJ(a){this.a=a},
nL:function nL(a){this.a=a},
nK:function nK(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(){},
ra:function ra(){},
rb:function rb(){},
rl:function rl(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
rm:function rm(){},
rk:function rk(){},
iH:function iH(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
e4:function e4(){},
rn:function rn(){},
r8:function r8(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
rt:function rt(a){this.a=a}},T={
tY:function(a,b,c,d){var t
H.ID(a,"$isp",[P.C],"$asp")
t=new T.hm(a,null,d,b,null)
t.fi(a,b,c,d)
return t},
xl:function(a,b){return new T.nW(0,a,new Uint8Array(H.cD(b==null?32768:b)))},
He:function(a){var t=new T.q2(-1,0,0,0,0,null,null,"",[])
t.fm(a)
return t},
Hf:function(a,b){var t=new T.q3(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.fn(a,b)
return t},
fc:function(a){var t=new T.mu(null,0,2147483647)
t.fh(a)
return t},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
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
di:function di(a){this.a=a},
hm:function hm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nW:function nW(a,b,c){this.a=a
this.b=b
this.c=c},
q2:function q2(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
q3:function q3(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
q4:function q4(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
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
q1:function q1(a){this.a=a},
mu:function mu(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kZ:function kZ(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
_.R=R
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
l0:function l0(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
_.R=R
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
lr:function lr(){},
mn:function mn(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
_.R=R
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
GF:function(a,b,c,d,e){var t,s
t=[P.y]
s=H.a([],t)
t=new T.hN("Glitch",0.01,0.01,0.01,s,0.5,a,new H.w(0,null,null,null,null,null,0,[X.F,P.V]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.I(null,null,A.a2),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.O]),H.a([],[A.fT]),1)
t.a8(a,b,c,d,e)
return t},
hN:function hN(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
c6:function c6(a,b){this.a=a
this.b=b},
A2:function(a,b,c,d){var t,s,r,q
t=new B.du(new P.cd(""),0,0)
t.ah(a,8)
c.toString
s=H.cI(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ah(s[q],8)
return t.bb(b)},
A1:function(a,b,c,d){var t,s,r,q,p
t=H.cD(c)
s=new Uint8Array(t)
r=new B.dj(null,0)
r.a=J.dX(a,b)
for(q=0;q<c;++q){p=r.aa(8)
if(q>=t)return H.u(s,q)
s[q]=p}return s},
A0:function(a,b,c,d){var t,s,r,q,p
t=new B.du(new P.cd(""),0,0)
t.ah(a,8)
s=d.gd_()
r=C.f.am(Math.log(H.kv(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cI(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ah(q[p],r)
return t.bb(b)},
A_:function(a,b,c,d){var t,s,r,q,p,o
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dj(null,0)
p.a=J.dX(a,b)
for(o=0;o<c;++o){r=p.aa(q)
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
_.ch=ch},bJ:function bJ(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ih:function ih(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mr:function mr(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},n0:function n0(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nk:function nk(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ou:function ou(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},fm:function fm(){},vk:function vk(){},vl:function vl(){},vm:function vm(){},tF:function tF(){},tI:function tI(){},tu:function tu(){},v2:function v2(){},vo:function vo(){},vp:function vp(){},l3:function l3(){},uT:function uT(){},uN:function uN(){},n7:function n7(){},tz:function tz(){},tp:function tp(){},lm:function lm(){},uy:function uy(){},ln:function ln(){},o_:function o_(){},v9:function v9(){},v6:function v6(){},va:function va(){},to:function to(){},mk:function mk(){},l1:function l1(){},tt:function tt(){},ts:function ts(){},uU:function uU(){},vb:function vb(){},uV:function uV(){},tH:function tH(){},tG:function tG(){},v8:function v8(){},v7:function v7(){},pr:function pr(){},vf:function vf(){},tw:function tw(){},tx:function tx(){},vn:function vn(){},hB:function hB(){},uE:function uE(){},uF:function uF(){},uG:function uG(){},uH:function uH(){},v3:function v3(){},v4:function v4(){},v5:function v5(){},uD:function uD(){},uK:function uK(){},uL:function uL(){},tV:function tV(){},tW:function tW(){},tX:function tX(){},uM:function uM(){},uI:function uI(){},tq:function tq(){},vh:function vh(){},vi:function vi(){},vg:function vg(){},
t5:function(){var t=0,s=P.bc(),r,q
var $async$t5=P.bg(function(a,b){if(a===1)return P.bd(b,s)
while(true)switch(t){case 0:A.rU()
W.wv(C.c.aw("../",N.uR())+"navbar.txt",null,null).ba(O.Is())
A.uB()
t=2
return P.bP(A.jB(),$async$t5)
case 2:r=document
r.querySelector("#loader").appendChild(O.An(H.a([$.wt],[O.c2]),S.IF(),"Load Word List",!1))
q=J.vS(r.querySelector("#generate"))
W.dg(q.a,q.b,S.IE(),!1,H.M(q,0))
q=J.vS(r.querySelector("#reset"))
W.dg(q.a,q.b,S.IG(),!1,H.M(q,0))
$.tb=r.querySelector("#seed")
$.tg=r.querySelector("#useseed")
$.yy=r.querySelector("#count")
$.yF=r.querySelector("#list")
$.vE=r.querySelector("#loadedlists")
$.vH=r.querySelector("#text")
r=J.vR($.tb)
W.dg(r.a,r.b,S.yO(),!1,H.M(r,0))
r=J.vR($.tg)
W.dg(r.a,r.b,S.yO(),!1,H.M(r,0))
return P.be(null,s)}})
return P.bf($async$t5,s)},
Ip:function(a,b){var t,s,r
t=b.split(".")
s=t.length
r=s-1
P.da(0,r,s,null,null,null)
b=H.ve(t,0,r,H.M(t,0)).aL(0,".")
$.$get$ic().h(0,b)
A.xe("wordlists/"+b+".words").b=a
$.rR=!0
S.yQ()},
yQ:function(){var t,s,r,q
J.vY($.vE,"")
for(t=$.$get$ic(),s=new P.d0(t,t.r,null,null,[null]),s.c=t.e;s.E();){r=s.d
t=$.vE
q=document.createElement("div")
q.textContent=H.x(r)+".words"
t.appendChild(q)}},
yR:function(a){var t,s,r
t=$.kB
s=J.vN($.tg)===!0?J.tk($.tb):null
t.toString
r=new A.ey(null,null)
r.bs(s)
t.e=r},
yI:function(a){var t,s
for(t=$.$get$ic(),s=new P.d0(t,t.r,null,null,[null]),s.c=t.e;s.E();)A.FZ("wordlists/"+H.x(s.d)+".words")
$.$get$ic().b4(0)
$.rR=!0
S.yQ()},
tc:function(){var t=0,s=P.bc(),r,q=2,p,o=[],n,m,l,k,j
var $async$tc=P.bg(function(a,b){if(a===1){p=b
t=q}while(true)switch(t){case 0:if(!$.rR){t=1
break}$.rR=!1
m=P.y
l=B.eI
l=new B.pk(P.a0(null,null,null,m),P.bZ(m,l),P.bZ(m,l),!1,null)
m=new A.ey(null,null)
m.bs(null)
l.e=m
$.kB=l
m=$.$get$ic(),l=new P.d0(m,m.r,null,null,[null]),l.c=m.e
case 3:if(!l.E()){t=4
break}n=l.d
q=6
t=9
return P.bP($.kB.bo(n),$async$tc)
case 9:q=2
t=8
break
case 6:q=5
j=p
H.bG(j)
$.$get$n2().aM(C.h,"Unable to load wordlist '"+H.x(n)+"'")
t=8
break
case 5:t=2
break
case 8:t=3
break
case 4:$.$get$n2().by("Setup completed")
case 1:return P.be(r,s)
case 2:return P.bd(p,s)}})
return P.bf($async$tc,s)},
kw:function(a){var t=0,s=P.bc(),r,q,p,o,n,m,l
var $async$kw=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)$async$outer:switch(t){case 0:t=3
return P.bP(S.tc(),$async$kw)
case 3:J.vY($.vH,"")
q=$.kB
p=J.vN($.tg)===!0?J.tk($.tb):null
q.toString
o=new A.ey(null,null)
o.bs(p)
q.e=o
n=J.z8($.yF)
if(J.kF(n)){$.$get$n2().aM(C.h,"Initial list name cannot be length 0")
t=1
break}m=0
while(!0){q=J.tk($.yy)
if(typeof q!=="number"){r=H.a6(q)
t=1
break $async$outer}if(!(m<q))break
l=$.kB.ig(n)
q=$.vH
p=document.createElement("div")
p.textContent=l
q.appendChild(p);++m}case 1:return P.be(r,s)}})
return P.bf($async$kw,s)}},K={bW:function bW(a,b){this.a=a
this.b=b},n5:function n5(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
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
_.x2=x2},oq:function oq(y1,y2,p,q,t,u,v,w,A,B,D,J,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
s=A.dH
r=P.C
r=new L.aS(P.E(null,null,null,t,s),P.E(null,null,null,r,s),P.E(null,null,null,t,r),P.E(null,null,null,r,t))
r.j(0,$.b0,L.e("#FF9B00"),!0)
r.j(0,$.b2,L.e("#FF9B00"),!0)
r.j(0,$.b1,L.e("#FF8700"),!0)
r.j(0,$.bb,L.e("#7F7F7F"),!0)
r.j(0,$.ba,L.e("#727272"),!0)
r.j(0,$.b4,L.e("#A3A3A3"),!0)
r.j(0,$.b5,L.e("#999999"),!0)
r.j(0,$.b3,L.e("#898989"),!0)
r.j(0,$.b9,L.e("#EFEFEF"),!0)
r.j(0,$.b8,L.e("#DBDBDB"),!0)
r.j(0,$.b7,L.e("#C6C6C6"),!0)
r.j(0,$.b6,L.e("#ADADAD"),!0)
s=[t]
t=new L.fN(0.01,0.01,0.01,0.5,a,new H.w(0,null,null,null,null,null,0,[X.F,P.V]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.O]),H.a([],[A.fT]),Q.I(null,null,A.a2))
t.al(a,b,c,d,e)
return t},
e:function(a){if(C.c.af(a,"#"))return A.w5(C.c.ag(a,1))
else return A.w5(a)},
fN:function fN(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
os:function os(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},M={kN:function kN(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fU:function fU(a,b){this.a=a
this.b=b},ll:function ll(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ha:function ha(){},bD:function bD(a,b){this.a=a
this.b=b},oI:function oI(a){this.a=a},pW:function pW(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},U={kR:function kR(){},nj:function nj(a){this.a=a},nS:function nS(a){this.a=a},p2:function p2(){},p3:function p3(a){this.a=a},p4:function p4(a){this.a=a},lu:function lu(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,ad,ek,el,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
_.R=R
_.ad=ad
_.ek=ek
_.el=el
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},lX:function lX(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nl:function nl(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
this.a=a},ah:function ah(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},ps:function ps(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
Hc:function(a){if(J.d1(a).af(a," "))return C.c.ag(a,1)
return a},
pX:function pX(a){this.a=a},
pY:function pY(a,b){this.a=a
this.b=b},
pZ:function pZ(a,b){this.a=a
this.b=b}},O={kT:function kT(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
An:function(a,b,c,d){var t,s,r,q,p,o
t=document
s=t.createElement("div")
r=W.AA("file")
q=r.style
q.display="none"
q=J.aq(r)
q.seA(r,!1)
p=P.a0(null,null,null,P.y)
for(o=0;o<1;++o)p.at(0,Z.Ap(a[o]))
if(p.a!==0)q.shi(r,new H.f1(p,new O.m7(),[H.M(p,0),null]).aL(0,","))
q=q.gcZ(r)
W.dg(q.a,q.b,new O.m8(a,b,r),!1,H.M(q,0))
s.appendChild(r)
t=t.createElement("button")
t.textContent=c
W.dg(t,"click",new O.m9(r),!1,W.uJ)
s.appendChild(t)
return s},
c2:function c2(){},
m7:function m7(){},
m8:function m8(a,b,c){this.a=a
this.b=b
this.c=c},
m9:function m9(a){this.a=a},
dt:function dt(){},
kX:function kX(a){this.a=a},
eD:function eD(){},
iu:function iu(){},
Iu:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.uR()
a=J.tl(a,P.db("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.t8(t))
s=document
J.vU(s.querySelector("#navbar"),"beforeend",a,C.w,null)
if(J.b_(O.Ig("seerOfVoid",null),"true"))P.Ay(new O.t9(),P.cB)
r=new P.dZ(Date.now(),!1)
if(H.uY(r)===4&&H.uX(r)===1)J.vO(s.querySelector("body")).h(0,"voidbody")
q=H.uY(r)
p=H.uX(r)
o=C.a.C(H.xo(r))
n=C.a.C(q)
m=C.a.C(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.ey(null,null)
k.bs(H.fo(l,null,null))
k.i7()
if($.H2||k.a.c7()>0.99)H.kA(s.querySelector("#today"),"$iseR").href=C.c.aw("../",t)+"dead_index.html?seed="+l
else H.kA(s.querySelector("#today"),"$iseR").href=C.c.aw("../",t)+"index2.html?seed="+l},
Ig:function(a,b){var t,s,r,q
t=P.xS().gd6().n(0,a)
if(t!=null)t=P.rp(t,0,J.c0(t),C.n,!1)
if(t!=null)return t
s=$.yK
if(s.length!==0){r=J.zk(window.location.href,J.zd(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.xT(H.yM(s,q,"")+"?"+$.yK,0,null).gd6().n(0,a)}return},
II:function(){var t,s,r,q
t=document
J.vO(t.querySelector("body")).h(0,"voidbody")
s=new W.kh(t.querySelectorAll(".void"),[null])
for(t=new H.dN(s,s.gm(s),0,null,[null]);t.E();){r=t.d
q=J.z0(J.tj(r))
if(q==="none"||q.length===0)O.Iz(r)
else O.Ii(r)}},
Iz:function(a){var t,s
if(a==null)return
t=J.aq(a)
s=t.gaR(a)
J.vX(s,!!t.$ishP?"inline":"block")},
Ii:function(a){if(a==null)return
J.vX(J.tj(a),"none")},
IA:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fH("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.dY(s,",")
if(!J.yY(r,a))window.localStorage.setItem(t,H.x(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.bG(q)
P.fH("Saving isn't possible....you don't have local storage")}},
t8:function t8(a){this.a=a},
t9:function t9(){},
t7:function t7(){},
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
_.z=z}},Y={pn:function pn(a){this.a=a},oh:function oh(a){this.a=a},l2:function l2(a){this.a=a},ml:function ml(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mm:function mm(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nN:function nN(b,a){this.b=b
this.a=a},dP:function dP(a,b){this.a=a
this.b=b},ad:function ad(a,b){this.a=a
this.b=b},d3:function d3(r,c,d,e,f,a,b){var _=this
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
_.b=b},U:function U(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ij:function ij(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bE:function bE(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cY:function cY(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},l6:function l6(c,a,b){this.c=c
this.a=a
this.b=b},bz:function bz(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jO:function jO(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iI:function iI(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jQ:function jQ(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},or:function or(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oB:function oB(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
nz:function(){var t=0,s=P.bc(),r,q
var $async$nz=P.bg(function(a,b){if(a===1)return P.bd(b,s)
while(true)switch(t){case 0:P.fH("loading big bads")
r=$
q=J
t=2
return P.bP(A.e3("BigBadLists/bigBads.txt",!1,!1,null),$async$nz)
case 2:r.xk=q.dY(b,"\n")
return P.be(null,s)}})
return P.bf($async$nz,s)},
I2:function(a){var t,s,r,q,p,o
t=J.dY(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bF)(t),++q){p=t[q]
o=J.bh(p)
r+=" "+(J.zo(o.n(p,0))+o.ag(p,1))}return r}},A={l8:function l8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
i:function(a,b,c,d,e){var t=new A.a2(c,e,null,a,!1,P.a0(null,null,null,G.a1),0,3)
t.M(a,b,c,!1,e)
return t},
a2:function a2(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mR:function mR(){},
mQ:function mQ(){},
fT:function fT(){},
fX:function(a,b,c,d){var t=new A.dH(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.fg(a,b,c,d)
return t},
tv:function(a,b,c,d){var t=A.fX(0,0,0,255)
t.b=C.a.ac(C.d.am(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ac(C.d.am(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ac(C.d.am(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ac(C.d.am(d*255),0,255)
return t},
zQ:function(a,b){if(b){if(typeof a!=="number")return a.aP()
return A.fX((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aP()
return A.fX((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
w5:function(a){return A.zQ(H.fo(a,16,new A.rN()),a.length>=8)},
dH:function dH(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
rN:function rN(){},
uB:function(){if($.xg)return
$.xg=!0
Z.Aq()},
e3:function(a,b,c,d){var t=0,s=P.bc(),r,q,p,o,n
var $async$e3=P.bg(function(e,f){if(e===1)return P.bd(f,s)
while(true)switch(t){case 0:A.uB()
t=$.$get$cA().V(0,a)?3:5
break
case 3:q=$.$get$cA().n(0,a)
p=J.am(q)
if(!!p.$isdO){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cL(q)
t=1
break}}else throw H.j("Requested resource ("+a+") is an unexpected type: "+H.x(J.vT(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.uC==null?8:9
break
case 8:t=10
return P.bP(A.jB(),$async$e3)
case 10:case 9:n=$.uC.eV(a)
t=n!=null?11:12
break
case 11:t=13
return P.bP(A.nc(n),$async$e3)
case 13:if(!$.$get$cA().V(0,a))$.$get$cA().i(0,a,new Y.dO(a,null,H.a([],[[P.eZ,,]]),[null]))
r=$.$get$cA().n(0,a).b
t=1
break
case 12:case 7:r=A.FY(a,!1,d)
t=1
break
case 4:case 1:return P.be(r,s)}})
return P.bf($async$e3,s)},
jB:function(){var t=0,s=P.bc(),r
var $async$jB=P.bg(function(a,b){if(a===1)return P.bd(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.bP(A.e3("manifest/manifest.txt",!1,!0,$.wr),$async$jB)
case 2:r.uC=b
return P.be(null,s)}})
return P.bf($async$jB,s)},
xe:function(a){if(!$.$get$cA().V(0,a))$.$get$cA().i(0,a,new Y.dO(a,null,H.a([],[[P.eZ,,]]),[null]))
return $.$get$cA().n(0,a)},
FY:function(a,b,c){var t
if($.$get$cA().V(0,a))throw H.j("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.wq(C.b.gbh(a.split("."))).a
t=A.xe(a)
c.b9(A.xf(a,!1)).ba(new A.nf(t))
return t.cL(0)},
FZ:function(a){var t,s,r,q
if($.$get$cA().V(0,a))for(t=$.$get$cA().n(0,a).c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bF)(t),++r){q=t[r]
if(!q.gi_())q.bl("Resource purged")}$.$get$cA().an(0,a)},
nc:function(a){var t=0,s=P.bc(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$nc=P.bg(function(b,a0){if(b===1)return P.bd(a0,s)
while(true)switch(t){case 0:t=3
return P.bP(A.e3(a+".bundle",!1,!0,null),$async$nc)
case 3:q=a0
p=C.c.L(a,0,C.c.ew(a,$.$get$xh()))
o=P.cB
n=new P.dU(new P.bp(0,$.ap,null,[o]),[o])
m=H.a([],[P.c4])
for(o=J.vP(q),l=o.length,k=[[P.eZ,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bF)(o),++i){h=o[i]
g=J.aq(h)
f=Z.wq(C.b.gbh(J.dY(g.gH(h),"."))).a
e=p+"/"+H.x(g.gH(h))
if($.$get$cA().V(0,e)){m.push(A.e3(e,!1,!1,null))
continue}d=H.kA(g.gbm(h),"$isdf")
if(!$.$get$cA().V(0,e))$.$get$cA().i(0,e,new Y.dO(e,null,H.a([],k),j))
c=$.$get$cA().n(0,e)
m.push(c.cL(0))
f.bg(d.buffer).ba(new A.nd(f,c))}P.Az(m,null,!1).ba(new A.ne(n))
r=n.a
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$nc,s)},
hy:function(a,b){var t=0,s=P.bc(),r,q,p,o,n
var $async$hy=P.bg(function(c,d){if(c===1)return P.bd(d,s)
while(true)switch(t){case 0:if($.$get$uA().V(0,a)){r=$.$get$uA().n(0,a)
t=1
break}q=W.fr
p=new P.bp(0,$.ap,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.dg(n,"load",new A.ng(new P.dU(p,[q]),n),!1,W.N)
n.src=A.xf(a,!1)
r=p
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$hy,s)},
xf:function(a,b){if(C.c.af(a,"/")){a=C.c.ag(a,1)
b=!0}else b=!1
if(b)return H.x(window.location.protocol)+"//"+H.x(window.location.host)+"/"+a
return C.c.aw("../",N.uR())+a},
nf:function nf(a){this.a=a},
nd:function nd(a,b){this.a=a
this.b=b},
ne:function ne(a){this.a=a},
ng:function ng(a,b){this.a=a
this.b=b},
nY:function nY(){},
jM:function jM(){},
ey:function ey(a,b){this.a=a
this.b=b},
rU:function(){var t=0,s=P.bc(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$rU=P.bg(function(a0,a1){if(a0===1)return P.bd(a1,s)
while(true)switch(t){case 0:if($.yz){t=1
break}$.yz=!0
D.H7()
q=P.y
p=[q]
o=H.a(["metal"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,0.3)
$.$get$b().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.aa
H.a([],p)
o=new G.bK(n,o,0.6)
$.$get$b().h(0,o)
$.wI=o
o=H.a(["ceramic"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$b().h(0,o)
$.bR=o
o=H.a(["bone"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,0.2)
$.$get$b().h(0,o)
$.aZ=o
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
$.cc=o
o=H.a(["paper"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$b().h(0,o)
$.K=o
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
$.aU=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$b().h(0,o)
$.bX=o
o=H.a(["flesh","meat","muscle"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$b().h(0,o)
$.bo=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.G
H.a([],p)
o=new G.bK(n,o,3.1)
$.$get$b().h(0,o)
$.bs=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$b().h(0,o)
$.ch=o
o=H.a(["plant","leaf","vine"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$b().h(0,o)
$.aR=o
o=H.a(["feathery"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$b().h(0,o)
$.bB=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.H
H.a([],p)
o=new G.bK(n,o,0.1)
$.$get$b().h(0,o)
$.bT=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.H
H.a([],p)
o=new G.bK(n,o,-13)
$.$get$b().h(0,o)
$.bS=o
o=H.a(["stone","rock","concrete"],p)
n=$.v
H.a([],p)
o=new G.bK(n,o,0.3)
$.$get$b().h(0,o)
$.aw=o
o=H.a(["legendary"],p)
n=$.mP
H.a([],p)
o=new G.bK(n,o,13)
$.$get$b().h(0,o)
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.mP
H.a([],p)
o=new G.bK(n,o,40.37)
$.$get$b().h(0,o)
$.FE=o
o=$.H
H.a([],p)
o=new G.aI(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$b().h(0,o)
$.av=o
o=$.um
H.a([],p)
o=new G.aI(o,["glowing","bright","illuminated"],0.1)
$.$get$b().h(0,o)
$.aQ=o
o=$.um
H.a([],p)
o=new G.aI(o,["obscuring","dark","shadowy"],0.1)
$.$get$b().h(0,o)
$.ak=o
o=$.H
H.a([],p)
o=new G.aI(o,["calming","pale","placating","shooshing"],0.1)
$.$get$b().h(0,o)
$.bq=o
o=$.G
H.a([],p)
o=new G.aI(o,["nuclear","radioactive","irradiated"],1)
$.$get$b().h(0,o)
$.c5=o
o=$.H
H.a([],p)
o=new G.aI(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$b().h(0,o)
$.aX=o
o=$.H
H.a([],p)
o=new G.aI(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$b().h(0,o)
$.bY=o
o=$.H
H.a([],p)
o=new G.aI(o,["doomed","cursed","unlucky"],-0.3)
$.$get$b().h(0,o)
$.aD=o
o=$.G
H.a([],p)
o=new G.aI(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$b().h(0,o)
$.aM=o
o=$.q
H.a([],p)
o=new G.aI(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$b().h(0,o)
$.bt=o
o=$.q
H.a([],p)
o=new G.aI(o,["electrical","zap","lightning","shock"],0.6)
$.$get$b().h(0,o)
$.a7=o
o=$.q
H.a([],p)
o=new G.aI(o,["restraining","imprisoning","restricting"],0.3)
$.$get$b().h(0,o)
$.bl=o
o=$.H
H.a([],p)
o=new G.aI(o,["expensive","valuable","bling","money"],0.1)
$.$get$b().h(0,o)
$.bm=o
o=$.H
H.a([],p)
o=new G.aI(o,["edible","tasty","delicious","savory"],0.1)
$.$get$b().h(0,o)
$.ar=o
o=$.H
H.a([],p)
o=new G.aI(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$b().h(0,o)
$.aj=o
o=$.H
H.a([],p)
o=new G.aI(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$b().h(0,o)
$.ao=o
o=$.H
H.a([],p)
o=new G.aI(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$b().h(0,o)
$.Y=o
o=$.G
H.a([],p)
o=new G.aI(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$b().h(0,o)
$.at=o
o=$.H
H.a([],p)
o=new G.aI(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$b().h(0,o)
$.aB=o
o=$.H
H.a([],p)
o=new G.aI(o,["funny","hilarious","comedy"],0.1)
$.$get$b().h(0,o)
$.aT=o
o=$.H
H.a([],p)
o=new G.aI(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$b().h(0,o)
$.bv=o
o=$.H
H.a([],p)
o=new G.aI(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$b().h(0,o)
$.a3=o
o=$.mP
H.a([],p)
o=new G.aI(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$b().h(0,o)
$.T=o
o=$.mP
H.a([],p)
o=new G.aI(o,["class-related","appropriate","themed"],1.3)
$.$get$b().h(0,o)
$.P=o
o=$.H
H.a([],p)
o=new G.aI(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$b().h(0,o)
$.ay=o
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
$.aW=o
o=$.H
H.a([],p)
o=new G.aI(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$b().h(0,o)
$.bN=o
o=$.H
H.a([],p)
o=new G.aI(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$b().h(0,o)
$.br=o
o=$.H
H.a([],p)
o=new G.aI(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$b().h(0,o)
$.cb=o
o=$.H
H.a([],p)
o=new G.aI(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$b().h(0,o)
$.as=o
o=$.H
H.a([],p)
o=new G.aI(o,["blunt","bludgeoning","dull"],0.3)
$.$get$b().h(0,o)
$.ae=o
o=$.q
H.a([],p)
o=new G.aI(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$b().h(0,o)
$.aK=o
o=$.H
H.a([],p)
o=new G.aI(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$b().h(0,o)
$.a9=o
o=$.H
H.a([],p)
o=new G.aI(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$b().h(0,o)
$.aV=o
o=$.H
H.a([],p)
o=new G.aI(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$b().h(0,o)
$.aP=o
o=$.H
H.a([],p)
o=new G.aI(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$b().h(0,o)
$.bk=o
o=H.a(["perfectly generic"],p)
n=$.H
H.a([],p)
o=new G.ag(n,o,0.1)
$.$get$b().h(0,o)
$.wM=o
o=H.a(["a sword"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.fg=o
o=H.a(["a hammer"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u7=o
o=H.a(["a rifle"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.uh=o
o=H.a(["a pistol"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.ue=o
o=H.a(["a blade"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wC=o
o=H.a(["a dagger"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u2=o
o=H.a(["a santa"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.hp=o
o=H.a(["a fist"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wK=o
o=H.a(["claws"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.mH=o
o=H.a(["a grenade"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.mI=o
o=H.a(["a freaking safe"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.x_=o
o=H.a(["a ball"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.el=o
o=H.a(["a trident"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.x7=o
o=H.a(["a card"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.mG=o
o=H.a(["a frying pan"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u4=o
o=H.a(["a pillow"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.em=o
o=H.a(["a machinegun"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.ua=o
o=H.a(["a shuriken"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.x3=o
o=H.a(["a sling"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.x5=o
o=H.a(["a yoyo"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.x9=o
o=H.a(["a cane"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wE=o
o=H.a(["a shield"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.ff=o
o=H.a(["a lance"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wU=o
o=H.a(["a ax"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.tZ=o
o=H.a(["a sign"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wZ=o
o=H.a(["a book"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.ax=o
o=H.a(["a broom"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.jr=o
o=H.a(["a club"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.jt=o
o=H.a(["a bow"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u_=o
o=H.a(["a whip"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.x8=o
o=H.a(["a staff"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.x6=o
o=H.a(["a needle"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.uc=o
o=H.a(["dice"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u3=o
o=H.a(["a fork"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wL=o
o=H.a(["a pigeon???"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,1.3)
$.$get$b().h(0,o)
$.ud=o
o=H.a(["a chainsaw"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wF=o
o=H.a(["a sickle"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.x4=o
o=H.a(["a shotgun"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.x1=o
o=H.a(["a stick"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.dy=o
o=H.a(["a chain"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.ho=o
o=H.a(["a wrench"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.uk=o
o=H.a(["a shovel"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.x2=o
o=H.a(["a rolling pin"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.uj=o
o=H.a(["a puppet"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.uf=o
o=H.a(["a razor"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.ug=o
o=H.a(["a pen"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.mK=o
o=H.a(["a bust"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.js=o
o=H.a(["a bowling ball"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.Bf=o
o=H.a(["a golf club"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wO=o
o=H.a(["a knife"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wT=o
o=H.a(["scissors"],p)
n=$.a4
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.x0=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.G
m=G.a1
l=[m]
k=H.a([$.D,$.av,$.aM],l)
H.a([],p)
o=new G.d("Forged",k,n,o,0)
$.$get$b().h(0,o)
$.Cz=o
o=H.a([],p)
n=$.v
k=H.a([$.ae,$.av],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.C4=o
o=H.a(["fossilized"],p)
n=$.G
k=H.a([$.aZ,$.aw],l)
H.a([],p)
o=new G.d("Fossilized",k,n,o,0)
$.$get$b().h(0,o)
$.CA=o
o=H.a(["adamantium"],p)
n=$.G
k=H.a([$.aZ,$.D],l)
H.a([],p)
o=new G.d("Adamantium",k,n,o,0)
$.$get$b().h(0,o)
$.wA=o
o=H.a([],p)
n=$.v
k=H.a([$.aW,$.aG],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.Fd=o
o=H.a(["tatami"],p)
n=$.v
k=H.a([$.Q,$.W],l)
H.a([],p)
o=new G.d("Tatami",k,n,o,0)
$.$get$b().h(0,o)
$.Fs=o
o=H.a(["mesh","chain link"],p)
n=$.v
k=H.a([$.Q,$.D],l)
H.a([],p)
o=new G.d("Mesh",k,n,o,0)
$.$get$b().h(0,o)
$.DA=o
o=H.a(["foil"],p)
n=$.v
k=H.a([$.K,$.D],l)
H.a([],p)
o=new G.d("Foil",k,n,o,0)
$.$get$b().h(0,o)
$.Cv=o
o=H.a(["beanbag"],p)
n=$.v
k=H.a([$.Q,$.aw],l)
H.a([],p)
o=new G.d("Beanbag",k,n,o,0)
$.$get$b().h(0,o)
$.B9=o
o=H.a(["pleather","faux fur"],p)
n=$.v
k=H.a([$.ch,$.aA],l)
H.a([],p)
o=new G.d("Faux Fur",k,n,o,0)
$.$get$b().h(0,o)
$.Ea=o
o=H.a(["plywood"],p)
n=$.v
k=H.a([$.W,$.K],l)
H.a([],p)
o=new G.d("Plywood",k,n,o,0)
$.$get$b().h(0,o)
$.mM=o
o=H.a(["colossus"],p)
n=$.v
k=H.a([$.D,$.bo],l)
H.a([],p)
o=new G.d("Colossus",k,n,o,0)
$.$get$b().h(0,o)
$.wG=o
o=H.a(["rotting","zombie"],p)
n=$.G
k=H.a([$.bT,$.bo],l)
H.a([],p)
o=new G.d("Rotting",k,n,o,0)
$.$get$b().h(0,o)
$.EA=o
o=H.a(["draugr","white walker"],p)
n=$.G
k=H.a([$.bT,$.bo,$.br],l)
H.a([],p)
o=new G.d("Draugr",k,n,o,0)
$.$get$b().h(0,o)
$.C1=o
o=H.a(["Ultraviolet"],p)
n=$.ul
k=H.a([$.aQ,$.ak],l)
H.a([],p)
o=new G.d("Ultraviolet",k,n,o,0)
$.$get$b().h(0,o)
$.Dj=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aQ,$.ak,$.av],l)
H.a([],p)
o=new G.d("Ultraviolence",k,n,o,0)
$.$get$b().h(0,o)
$.FD=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.bY],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.C_=o
o=H.a(["candy"],p)
n=$.v
k=H.a([$.ar,$.aU],l)
H.a([],p)
o=new G.d("Candy",k,n,o,0)
$.$get$b().h(0,o)
$.u0=o
o=H.a(["cotton candy"],p)
n=$.v
k=H.a([$.ar,$.Q],l)
H.a([],p)
o=new G.d("Cotton Candy",k,n,o,0)
$.$get$b().h(0,o)
$.BL=o
o=H.a(["gummy"],p)
n=$.v
k=H.a([$.ar,$.cc],l)
H.a([],p)
o=new G.d("Gum",k,n,o,0)
$.$get$b().h(0,o)
$.CM=o
o=H.a(["marrow"],p)
n=$.v
k=H.a([$.ar,$.aZ],l)
H.a([],p)
o=new G.d("Marrow",k,n,o,0)
$.$get$b().h(0,o)
$.Dt=o
o=H.a(["toothy"],p)
n=$.a4
k=H.a([$.aZ,$.bR],l)
H.a([],p)
o=new G.d("Toothy",k,n,o,0)
$.$get$b().h(0,o)
$.FA=o
o=H.a(["Frost"],p)
n=$.v
k=H.a([$.aw,$.aU,$.bo],l)
H.a([],p)
o=new G.d("Frost",k,n,o,0)
$.$get$b().h(0,o)
$.CB=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ar,$.bN],l)
H.a([],p)
o=new G.d("Arsenic",k,n,o,0)
$.$get$b().h(0,o)
$.C9=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.v
k=H.a([$.aw,$.aU],l)
H.a([],p)
o=new G.d("Crystal",k,n,o,0)
$.$get$b().h(0,o)
$.u1=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.H
k=H.a([$.ay,$.aB,$.aT,$.Y,$.aj,$.bY,$.a3],l)
H.a([],p)
o=new G.d("Mary Sue",k,n,o,0)
$.$get$b().h(0,o)
$.Du=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.H
k=H.a([$.aX,$.ak,$.av,$.a_,$.aD,$.Y,$.aj,$.ao],l)
H.a([],p)
o=new G.d("Edge Lord",k,n,o,0)
$.$get$b().h(0,o)
$.C7=o
o=H.a(["deadpool"],p)
n=$.a4
k=H.a([$.bT,$.aJ,$.ao,$.aT],l)
H.a([],p)
o=new G.d("Deadpool",k,n,o,0)
$.$get$b().h(0,o)
$.BR=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.H
k=H.a([$.aX,$.ao],l)
H.a([],p)
o=new G.d("Spoopy",k,n,o,0)
$.$get$b().h(0,o)
$.Fg=o
o=H.a(["wolverine"],p)
n=$.a4
k=H.a([$.aZ,$.av,$.aM],l)
H.a([],p)
o=new G.d("Wolverine",k,n,o,0)
$.$get$b().h(0,o)
$.FP=o
o=H.a(["rabbit's foot"],p)
n=$.a4
k=H.a([$.bY,$.ch],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,n,o,0)
$.$get$b().h(0,o)
$.wY=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.G
k=H.a([$.aM,$.W],l)
H.a([],p)
o=new G.d("Tipped",k,n,o,0)
$.$get$b().h(0,o)
$.B2=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a4
k=H.a([$.aM,$.aK,$.W],l)
H.a([],p)
o=new G.d("Arrow",k,n,o,0)
$.$get$b().h(0,o)
$.wB=o
o=H.a(["training sword","bokken"],p)
n=$.a4
k=H.a([$.W,$.av],l)
H.a([],p)
o=new G.d("Bokken",k,n,o,0)
$.$get$b().h(0,o)
$.Dc=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.aP,$.ao],l)
H.a([],p)
o=new G.d("Irony Type1",k,n,o,0)
$.$get$b().h(0,o)
$.u8=o
o=H.a(["netted","webbed"],p)
n=$.a4
k=H.a([$.bl,$.Q],l)
H.a([],p)
o=new G.d("Netted",k,n,o,0)
$.$get$b().h(0,o)
$.DP=o
o=H.a(["barbed wire"],p)
n=$.a4
k=H.a([$.aM,$.bl,$.D,$.Q],l)
H.a([],p)
o=new G.d("Barbed Wire",k,n,o,0)
$.$get$b().h(0,o)
$.B6=o
o=H.a(["morning star"],p)
n=$.a4
k=H.a([$.aM,$.ae],l)
H.a([],p)
o=new G.d("Morning Star",k,n,o,0)
$.$get$b().h(0,o)
$.DJ=o
o=H.a(["decadent"],p)
n=$.H
k=H.a([$.aW,$.bm],l)
H.a([],p)
o=new G.d("Decadent",k,n,o,0)
$.$get$b().h(0,o)
$.BU=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bS,$.ao],l)
H.a([],p)
o=new G.d("SBAHJ",k,n,o,0)
$.$get$b().h(0,o)
$.EK=o
o=H.a(["bayonet"],p)
n=$.a4
k=H.a([$.aM,$.aK],l)
H.a([],p)
o=new G.d("Bayonet",k,n,o,0)
$.$get$b().h(0,o)
$.B8=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.v
k=H.a([$.br,$.ao,$.av],l)
H.a([],p)
o=new G.d("Snoop",k,n,o,0)
$.$get$b().h(0,o)
$.Fc=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aQ,$.as,$.av],l)
H.a([],p)
o=new G.d("Light Saber",k,n,o,0)
$.$get$b().h(0,o)
$.Di=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.H
k=H.a([$.a3,$.aP],l)
H.a([],p)
o=new G.d("Fakey Fake",k,n,o,0)
$.$get$b().h(0,o)
$.Cg=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.H
k=H.a([$.a3,$.bk],l)
H.a([],p)
o=new G.d("Real As Shit",k,n,o,0)
$.$get$b().h(0,o)
$.Eu=o
o=H.a(["skeletal"],p)
n=$.a4
k=H.a([$.aX,$.aD,$.aZ],l)
H.a([],p)
o=new G.d("Skeletal",k,n,o,0)
$.$get$b().h(0,o)
$.F6=o
o=H.a(["green sun"],p)
n=$.um
k=H.a([$.as,$.c5,$.aQ],l)
H.a([],p)
o=new G.d("Green Sun",k,n,o,0)
$.$get$b().h(0,o)
$.u6=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.ul
k=H.a([$.ak,$.aj],l)
H.a([],p)
o=new G.d("Midnight",k,n,o,0)
$.$get$b().h(0,o)
$.DE=o
o=H.a(["radiant","dazzling"],p)
n=$.H
k=H.a([$.a3,$.aQ],l)
H.a([],p)
o=new G.d("Radiant",k,n,o,0)
$.$get$b().h(0,o)
$.Er=o
o=H.a(["edgy"],p)
n=$.H
k=H.a([$.av,$.ak,$.ao],l)
H.a([],p)
o=new G.d("Edgy",k,n,o,0)
$.$get$b().h(0,o)
$.C8=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c5,$.bt],l)
H.a([],p)
o=new G.d("Warhead",k,n,o,0)
$.$get$b().h(0,o)
$.AW=o
o=H.a(["living"],p)
n=$.G
k=H.a([$.aZ,$.bo,$.at],l)
H.a([],p)
o=new G.d("Living",k,n,o,0)
$.$get$b().h(0,o)
$.Dm=o
o=H.a(["dead","corpse","deceased"],p)
n=$.G
k=H.a([$.aZ,$.bo],l)
H.a([],p)
o=new G.d("Dead",k,n,o,0)
$.$get$b().h(0,o)
$.BQ=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a7,$.bl,$.aK],l)
H.a([],p)
o=new G.d("Taser",k,n,o,0)
$.$get$b().h(0,o)
$.Fr=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.ak,$.a9],l)
H.a([],p)
o=new G.d("Nocturn",k,n,o,0)
$.$get$b().h(0,o)
$.DS=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aD,$.a9],l)
H.a([],p)
o=new G.d("Dirge",k,n,o,0)
$.$get$b().h(0,o)
$.BX=o
o=H.a(["Snobbish","Noble"],p)
n=$.H
k=H.a([$.aj,$.bm],l)
H.a([],p)
o=new G.d("Snobbish",k,n,o,0)
$.$get$b().h(0,o)
$.Fb=o
o=H.a(["flat"],p)
n=$.H
k=H.a([$.ae,$.a9],l)
H.a([],p)
o=new G.d("Flat(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.Cq=o
o=H.a(["sharp"],p)
n=$.H
k=H.a([$.av,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.ET=o
o=H.a(["sharp"],p)
n=$.H
k=H.a([$.aj,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,n,o,0)
$.$get$b().h(0,o)
$.ES=o
o=H.a(["Bach's"],p)
n=$.aa
k=H.a([$.Y,$.a9],l)
H.a([],p)
o=new G.d("Bach's",k,n,o,0)
$.$get$b().h(0,o)
$.B4=o
o=H.a(["Mozart's"],p)
n=$.aa
k=H.a([$.a3,$.a9],l)
H.a([],p)
o=new G.d("Mozart's",k,n,o,0)
$.$get$b().h(0,o)
$.DL=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.aa
k=H.a([$.Y,$.c5],l)
H.a([],p)
o=new G.d("Einstein's",k,n,o,0)
$.$get$b().h(0,o)
$.Ca=o
o=H.a(["Feynman's"],p)
n=$.aa
k=H.a([$.Y,$.aT],l)
H.a([],p)
o=new G.d("Feynman's",k,n,o,0)
$.$get$b().h(0,o)
$.Ck=o
o=H.a(["Ziptie"],p)
n=$.aa
k=H.a([$.aA,$.bl],l)
H.a([],p)
o=new G.d("Ziptie",k,n,o,0)
$.$get$b().h(0,o)
$.FT=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.D,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,n,o,0)
$.$get$b().h(0,o)
$.ju=o
o=H.a(["Sassacre"],p)
n=$.aa
k=H.a([$.cb,$.aT],l)
H.a([],p)
o=new G.d("Sassacre",k,n,o,0)
$.$get$b().h(0,o)
$.EI=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ae,$.cb],l)
H.a([],p)
o=new G.d("Sledge",k,n,o,0)
$.$get$b().h(0,o)
$.F9=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.bl,$.K],l)
H.a([],p)
o=new G.d("Legal",k,n,o,0)
$.$get$b().h(0,o)
$.mJ=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aT,$.aV],l)
H.a([],p)
o=new G.d("Clown",k,n,o,0)
$.$get$b().h(0,o)
$.BF=o
o=H.a(["passionate"],p)
n=$.H
k=H.a([$.as,$.aB],l)
H.a([],p)
o=new G.d("Passionate",k,n,o,0)
$.$get$b().h(0,o)
$.E1=o
o=H.a(["pinata"],p)
n=$.a4
k=H.a([$.K,$.ar],l)
H.a([],p)
o=new G.d("Pinata",k,n,o,0)
$.$get$b().h(0,o)
$.E5=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ae,$.cb,$.D],l)
H.a([],p)
o=new G.d("Anvil",k,n,o,0)
$.$get$b().h(0,o)
$.B1=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aQ,$.bt],l)
H.a([],p)
o=new G.d("Flashbang",k,n,o,0)
$.$get$b().h(0,o)
$.Cp=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.ak,$.bt],l)
H.a([],p)
o=new G.d("Smokebomb",k,n,o,0)
$.$get$b().h(0,o)
$.Fa=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.ak,$.av],l)
H.a([],p)
o=new G.d("Ninja",k,n,o,0)
$.$get$b().h(0,o)
$.DR=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a7,$.a9],l)
H.a([],p)
o=new G.d("Techno",k,n,o,0)
$.$get$b().h(0,o)
$.Fu=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.aw,$.a9],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,n,o,0)
$.$get$b().h(0,o)
$.Ew=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a4
k=H.a([$.at,$.bo,$.aK],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,n,o,0)
$.$get$b().h(0,o)
$.E6=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aT,$.a9,$.aV,$.aX],l)
H.a([],p)
o=new G.d("Juggalo",k,n,o,0)
$.$get$b().h(0,o)
$.wS=o
o=H.a(["shocksauce"],p)
n=$.H
k=H.a([$.ao,$.a7],l)
H.a([],p)
o=new G.d("Shock Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.EW=o
o=H.a(["weaksauce"],p)
n=$.H
k=H.a([$.ae,$.ao,$.bS],l)
H.a([],p)
o=new G.d("Weak Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.FJ=o
o=H.a(["spicy","picante"],p)
n=$.H
k=H.a([$.as,$.ar],l)
H.a([],p)
o=new G.d("Spicy",k,n,o,0)
$.$get$b().h(0,o)
$.Ff=o
o=H.a(["ice cream","popsicle"],p)
n=$.v
k=H.a([$.br,$.ar],l)
H.a([],p)
o=new G.d("Popsicle",k,n,o,0)
$.$get$b().h(0,o)
$.D_=o
o=H.a(["popsickle"],p)
n=$.v
k=H.a([$.br,$.ar,$.av],l)
H.a([],p)
o=new G.d("Popsickle",k,n,o,0)
$.$get$b().h(0,o)
$.Ei=o
o=H.a(["icepick"],p)
n=$.v
k=H.a([$.br,$.aM],l)
H.a([],p)
o=new G.d("Icepick",k,n,o,0)
$.$get$b().h(0,o)
$.D0=o
o=H.a(["schezwan"],p)
n=$.H
k=H.a([$.ao,$.ar],l)
H.a([],p)
o=new G.d("Schezwan",k,n,o,0)
$.$get$b().h(0,o)
$.EL=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.ak,$.a9,$.ao,$.a7],l)
H.a([],p)
o=new G.d("Vaporwave",k,n,o,0)
$.$get$b().h(0,o)
$.FH=o
o=H.a(["mallet"],p)
n=$.a4
k=H.a([$.W,$.ae],l)
H.a([],p)
o=new G.d("Mallet",k,n,o,0)
$.$get$b().h(0,o)
$.Ds=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aA,$.ao],l)
H.a([],p)
o=new G.d("Fidget",k,n,o,0)
$.$get$b().h(0,o)
$.Cm=o
o=H.a(["gold foil"],p)
n=$.v
k=H.a([$.D,$.K,$.bm],l)
H.a([],p)
o=new G.d("Gold Foil",k,n,o,0)
$.$get$b().h(0,o)
$.CJ=o
o=H.a(["caviar"],p)
n=$.v
k=H.a([$.ar,$.bm],l)
H.a([],p)
o=new G.d("Caviar",k,n,o,0)
$.$get$b().h(0,o)
$.Bv=o
o=H.a(["RADioactive"],p)
n=$.H
k=H.a([$.c5,$.ao],l)
H.a([],p)
o=new G.d("RADioactive",k,n,o,0)
$.$get$b().h(0,o)
$.Es=o
o=H.a(["glam"],p)
n=$.H
k=H.a([$.aw,$.a9,$.ay],l)
H.a([],p)
o=new G.d("Glam",k,n,o,0)
$.$get$b().h(0,o)
$.CH=o
o=H.a(["hair metal"],p)
n=$.H
k=H.a([$.D,$.a9,$.ay],l)
H.a([],p)
o=new G.d("Hair Metal",k,n,o,0)
$.$get$b().h(0,o)
$.CO=o
o=H.a(["elven","fae","sylvan"],p)
n=$.H
k=H.a([$.a3,$.ay],l)
H.a([],p)
o=new G.d("Elven",k,n,o,0)
$.$get$b().h(0,o)
$.Cc=o
o=H.a(["shiny"],p)
n=$.H
k=H.a([$.D,$.ay],l)
H.a([],p)
o=new G.d("Shiny",k,n,o,0)
$.$get$b().h(0,o)
$.EV=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.H
k=H.a([$.bm,$.ay,$.aj],l)
H.a([],p)
o=new G.d("Bespoke",k,n,o,0)
$.$get$b().h(0,o)
$.fe=o
o=H.a(["operatic"],p)
n=$.H
k=H.a([$.bm,$.a9,$.aj],l)
H.a([],p)
o=new G.d("Operatic",k,n,o,0)
$.$get$b().h(0,o)
$.DW=o
o=H.a(["ice","diamond"],p)
n=$.v
k=H.a([$.bm,$.br],l)
H.a([],p)
o=new G.d("Diamond",k,n,o,0)
$.$get$b().h(0,o)
$.wR=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.H
k=H.a([$.as,$.br],l)
H.a([],p)
o=new G.d("Icy Hot",k,n,o,0)
$.$get$b().h(0,o)
$.D1=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.H
k=H.a([$.ao,$.br],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,n,o,0)
$.$get$b().h(0,o)
$.CZ=o
o=H.a(["winter's","season's"],p)
n=$.aa
k=H.a([$.bq,$.br],l)
H.a([],p)
o=new G.d("Winter's",k,n,o,0)
$.$get$b().h(0,o)
$.FM=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.aa
k=H.a([$.a3,$.br],l)
H.a([],p)
o=new G.d("Christmas",k,n,o,0)
$.$get$b().h(0,o)
$.BB=o
o=H.a(["Santa Saws"],p)
n=$.aa
k=H.a([$.a3,$.br,$.av],l)
H.a([],p)
o=new G.d("Santa Saws",k,n,o,0)
$.$get$b().h(0,o)
$.EG=o
o=H.a(["Santa Sleighs"],p)
n=$.aa
k=H.a([$.hp,$.av],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,n,o,0)
$.$get$b().h(0,o)
$.EH=o
o=H.a(["Santa Claws"],p)
n=$.aa
k=H.a([$.hp,$.mH],l)
H.a([],p)
o=new G.d("Santa Claws",k,n,o,0)
$.$get$b().h(0,o)
$.EF=o
o=H.a(["Sandy Claws"],p)
n=$.aa
k=H.a([$.hp,$.mH,$.aw],l)
H.a([],p)
o=new G.d("Sandy Claws",k,n,o,0)
$.$get$b().h(0,o)
$.EE=o
o=H.a(["Silent Night"],p)
n=$.aa
k=H.a([$.hp,$.ak],l)
H.a([],p)
o=new G.d("Silent Night",k,n,o,0)
$.$get$b().h(0,o)
$.F2=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.aa
k=H.a([$.aX,$.bX],l)
H.a([],p)
o=new G.d("Ghost's",k,n,o,0)
$.$get$b().h(0,o)
$.CP=o
o=H.a(["ghoul","mutant"],p)
n=$.v
k=H.a([$.bo,$.c5,$.bT],l)
H.a([],p)
o=new G.d("Mutant",k,n,o,0)
$.$get$b().h(0,o)
$.DM=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.ao,$.D],l)
H.a([],p)
o=new G.d("Skateboard",k,n,o,0)
$.$get$b().h(0,o)
$.F5=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c5,$.a7,$.ar],l)
H.a([],p)
o=new G.d("Microwave",k,n,o,0)
$.$get$b().h(0,o)
$.DD=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c5,$.a7,$.ar,$.aK],l)
H.a([],p)
o=new G.d("Orbital",k,n,o,0)
$.$get$b().h(0,o)
$.DX=o
o=H.a([],p)
n=$.q
k=H.a([$.ae,$.Y],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.C5=o
o=H.a(["uranium"],p)
n=$.v
k=H.a([$.c5,$.aw],l)
H.a([],p)
o=new G.d("Uranium",k,n,o,0)
$.$get$b().h(0,o)
$.FG=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.K,$.cc],l)
H.a([],p)
o=new G.d("Mousepad",k,n,o,0)
$.$get$b().h(0,o)
$.DK=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.av,$.aw],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,n,o,0)
$.$get$b().h(0,o)
$.Cs=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.aM,$.aw],l)
H.a([],p)
o=new G.d("Pointed Flint",k,n,o,0)
$.$get$b().h(0,o)
$.Ct=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aA,$.aM],l)
H.a([],p)
o=new G.d("Picnic",k,n,o,0)
$.$get$b().h(0,o)
$.E4=o
o=H.a(["xtreme xplosion"],p)
n=$.H
k=H.a([$.ao,$.bt],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,n,o,0)
$.$get$b().h(0,o)
$.FS=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aA,$.aW],l)
H.a([],p)
o=new G.d("Lawn",k,n,o,0)
$.$get$b().h(0,o)
$.Dg=o
o=H.a(["upholstered"],p)
n=$.v
k=H.a([$.Q,$.aW],l)
H.a([],p)
o=new G.d("Upholstered",k,n,o,0)
$.$get$b().h(0,o)
$.FF=o
o=H.a(["leather"],p)
n=$.v
k=H.a([$.bo,$.aW],l)
H.a([],p)
o=new G.d("Leather",k,n,o,0)
$.$get$b().h(0,o)
$.wW=o
o=H.a(["shag"],p)
n=$.v
k=H.a([$.ch,$.aW],l)
H.a([],p)
o=new G.d("Shag",k,n,o,0)
$.$get$b().h(0,o)
$.ER=o
o=H.a(["loyal"],p)
n=$.H
k=H.a([$.ae,$.aB],l)
H.a([],p)
o=new G.d("Loyal",k,n,o,0)
$.$get$b().h(0,o)
$.Dq=o
o=H.a(["porcelain"],p)
n=$.v
k=H.a([$.ay,$.bR],l)
H.a([],p)
o=new G.d("Porcelain",k,n,o,0)
$.$get$b().h(0,o)
$.mN=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a4
k=H.a([$.bm,$.bR],l)
H.a([],p)
o=new G.d("Pork Hollow",k,n,o,0)
$.$get$b().h(0,o)
$.Ek=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.ao,$.av],l)
H.a([],p)
o=new G.d("Katana",k,n,o,0)
$.$get$b().h(0,o)
$.Da=o
o=H.a(["chocolate"],p)
n=$.v
k=H.a([$.aB,$.ar],l)
H.a([],p)
o=new G.d("Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.BA=o
o=H.a(["wrapped chocolate"],p)
n=$.v
k=H.a([$.aB,$.ar,$.K,$.D],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.Cw=o
o=H.a(["scratch-n-sniff"],p)
n=$.v
k=H.a([$.ao,$.K],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,n,o,0)
$.$get$b().h(0,o)
$.EN=o
o=H.a(["mythril","orichalcum"],p)
n=$.v
k=H.a([$.a3,$.D],l)
H.a([],p)
o=new G.d("Mythril",k,n,o,0)
$.$get$b().h(0,o)
$.DN=o
o=H.a(["titanium","steel"],p)
n=$.v
k=H.a([$.ae,$.D],l)
H.a([],p)
o=new G.d("Titanium",k,n,o,0)
$.$get$b().h(0,o)
$.Fz=o
o=H.a(["lead"],p)
n=$.v
k=H.a([$.cb,$.D],l)
H.a([],p)
o=new G.d("Lead",k,n,o,0)
$.$get$b().h(0,o)
$.wV=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aP,$.aT],l)
H.a([],p)
o=new G.d("Satire",k,n,o,0)
$.$get$b().h(0,o)
$.DV=o
o=H.a(["comedy gold"],p)
n=$.H
k=H.a([$.bm,$.aT],l)
H.a([],p)
o=new G.d("Comedy Gold",k,n,o,0)
$.$get$b().h(0,o)
$.BH=o
o=H.a(["dry","sensible chuckle"],p)
n=$.H
k=H.a([$.aj,$.aT],l)
H.a([],p)
o=new G.d("Dry",k,n,o,0)
$.$get$b().h(0,o)
$.C2=o
o=H.a(["polite"],p)
n=$.H
k=H.a([$.aW,$.aP],l)
H.a([],p)
o=new G.d("Polite",k,n,o,0)
$.$get$b().h(0,o)
$.Eg=o
o=H.a(["stradivarius"],p)
n=$.aa
k=H.a([$.aj,$.bm,$.W,$.a9],l)
H.a([],p)
o=new G.d("Stradivarius",k,n,o,0)
$.$get$b().h(0,o)
$.Fm=o
o=H.a(["scientistic"],p)
n=$.H
k=H.a([$.Y,$.aP],l)
H.a([],p)
o=new G.d("Scientistic",k,n,o,0)
$.$get$b().h(0,o)
$.EM=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a7,$.at],l)
H.a([],p)
o=new G.d("AI",k,n,o,0)
$.$get$b().h(0,o)
$.mF=o
o=H.a(["robotic"],p)
n=$.G
k=H.a([$.D,$.a7,$.at],l)
H.a([],p)
o=new G.d("Robotic",k,n,o,0)
$.$get$b().h(0,o)
$.ui=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.W,$.bt],l)
H.a([],p)
o=new G.d("Shrapnel",k,n,o,0)
$.$get$b().h(0,o)
$.EY=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.at,$.a7,$.a9],l)
H.a([],p)
o=new G.d("Vocaloid",k,n,o,0)
$.$get$b().h(0,o)
$.FI=o
o=H.a(["*Hyun-ae"],p)
n=$.aa
k=H.a([$.at,$.a7,$.aB],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,n,o,0)
$.$get$b().h(0,o)
$.CY=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.W,$.aK],l)
H.a([],p)
o=new G.d("Buckshot",k,n,o,0)
$.$get$b().h(0,o)
$.Bj=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.cb,$.aK],l)
H.a([],p)
o=new G.d("Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.Bs=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.aj,$.K],l)
H.a([],p)
o=new G.d("Stationary",k,n,o,0)
$.$get$b().h(0,o)
$.Fk=o
o=H.a([],p)
n=$.q
k=H.a([$.ax,$.K],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.DZ=o
o=H.a([],p)
n=$.q
k=H.a([$.D,$.aK],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.DB=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.av,$.K],l)
H.a([],p)
o=new G.d("Papercut",k,n,o,0)
$.$get$b().h(0,o)
$.E_=o
o=H.a(["squeaky"],p)
n=$.G
k=H.a([$.ae,$.cc],l)
H.a([],p)
o=new G.d("Squeaky",k,n,o,0)
$.$get$b().h(0,o)
$.Fh=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aP,$.a9],l)
H.a([],p)
o=new G.d("Kazoo",k,n,o,0)
$.$get$b().h(0,o)
$.Db=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aJ,$.K],l)
H.a([],p)
o=new G.d("Bandaid",k,n,o,0)
$.$get$b().h(0,o)
$.B5=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aJ,$.ar],l)
H.a([],p)
o=new G.d("Gushers",k,n,o,0)
$.$get$b().h(0,o)
$.CN=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aJ,$.aK],l)
H.a([],p)
o=new G.d("Medic",k,n,o,0)
$.$get$b().h(0,o)
$.Dz=o
o=H.a(["sick nasty","ill"],p)
n=$.G
k=H.a([$.ao,$.bN],l)
H.a([],p)
o=new G.d("Sick Nasty",k,n,o,0)
$.$get$b().h(0,o)
$.F_=o
o=H.a(["gilded","gold leaf"],p)
n=$.v
k=H.a([$.D,$.W],l)
H.a([],p)
o=new G.d("Gilded",k,n,o,0)
$.$get$b().h(0,o)
$.CG=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aA,$.a7],l)
H.a([],p)
o=new G.d("Charging",k,n,o,0)
$.$get$b().h(0,o)
$.Bz=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.cc,$.av],l)
H.a([],p)
o=new G.d("Rubber Safety",k,n,o,0)
$.$get$b().h(0,o)
$.EC=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aA,$.av],l)
H.a([],p)
o=new G.d("Plastic Safety",k,n,o,0)
$.$get$b().h(0,o)
$.ED=o
o=H.a(["thunderous","thor's"],p)
n=$.H
k=H.a([$.aV,$.a7],l)
H.a([],p)
o=new G.d("Thunderous",k,n,o,0)
$.$get$b().h(0,o)
$.Fx=o
o=H.a(["screeching","dial up"],p)
n=$.H
k=H.a([$.aV,$.a7,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,n,o,0)
$.$get$b().h(0,o)
$.EP=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aU,$.D],l)
H.a([],p)
o=new G.d("Mirrored",k,n,o,0)
$.$get$b().h(0,o)
$.ub=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aU,$.aw,$.a3],l)
H.a([],p)
o=new G.d("Far Seeing",k,n,o,0)
$.$get$b().h(0,o)
$.wH=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.cc,$.aK],l)
H.a([],p)
o=new G.d("Nonlethal",k,n,o,0)
$.$get$b().h(0,o)
$.BY=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.ay,$.aj],l)
H.a([],p)
o=new G.d("Fashionable",k,n,o,0)
$.$get$b().h(0,o)
$.wJ=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.aT,$.ao],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,n,o,0)
$.$get$b().h(0,o)
$.D5=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.bS,$.aT],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,n,o,0)
$.$get$b().h(0,o)
$.u9=o
o=H.a(["post-ironic"],p)
n=$.H
k=H.a([$.aP,$.ao,$.aj],l)
H.a([],p)
o=new G.d("Post Ironic",k,n,o,0)
$.$get$b().h(0,o)
$.Em=o
o=H.a(["monstrous"],p)
n=$.H
k=H.a([$.bT,$.aV,$.aX],l)
H.a([],p)
o=new G.d("Monstrous",k,n,o,0)
$.$get$b().h(0,o)
$.DI=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aK,$.ao,$.aj],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$b().h(0,o)
$.Ey=o
o=H.a(["golden"],p)
n=$.v
k=H.a([$.D,$.bm],l)
H.a([],p)
o=new G.d("Golden",k,n,o,0)
$.$get$b().h(0,o)
$.u5=o
o=H.a(["platinum"],p)
n=$.v
k=H.a([$.aQ,$.D],l)
H.a([],p)
o=new G.d("Platinum",k,n,o,0)
$.$get$b().h(0,o)
$.mL=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bY,$.D],l)
H.a([],p)
o=new G.d("Horseshoe",k,n,o,0)
$.$get$b().h(0,o)
$.wQ=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.Q,$.ch],l)
H.a([],p)
o=new G.d("Felt",k,n,o,0)
$.$get$b().h(0,o)
$.Ci=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.aw,$.aj],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.wX=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.aw,$.cb],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.CL=o
o=H.a(["glitched"],p)
n=$.G
k=H.a([$.bs,$.a7],l)
H.a([],p)
o=new G.d("Glitched",k,n,o,0)
$.$get$b().h(0,o)
$.wN=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aJ,$.a7],l)
H.a([],p)
o=new G.d("Debugging",k,n,o,0)
$.$get$b().h(0,o)
$.BT=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.D,$.aV,$.a9],l)
H.a([],p)
o=new G.d("Metalic",k,n,o,0)
$.$get$b().h(0,o)
$.DC=o
o=H.a(["Simulacrum"],p)
n=$.H
k=H.a([$.at,$.aP],l)
H.a([],p)
o=new G.d("Simulacrum",k,n,o,0)
$.$get$b().h(0,o)
$.F4=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ar,$.aP],l)
H.a([],p)
o=new G.d("Imitation",k,n,o,0)
$.$get$b().h(0,o)
$.D2=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aJ,$.aP],l)
H.a([],p)
o=new G.d("Placebo",k,n,o,0)
$.$get$b().h(0,o)
$.E8=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bm,$.aP],l)
H.a([],p)
o=new G.d("Counterfeit",k,n,o,0)
$.$get$b().h(0,o)
$.BM=o
o=H.a(["Surreal"],p)
n=$.H
k=H.a([$.ao,$.aG,$.aT],l)
H.a([],p)
o=new G.d("Surreal1",k,n,o,0)
$.$get$b().h(0,o)
$.Fo=o
o=H.a(["Brainy"],p)
n=$.H
k=H.a([$.Y,$.bo],l)
H.a([],p)
o=new G.d("Brainy",k,n,o,0)
$.$get$b().h(0,o)
$.Bg=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.as,$.bt],l)
H.a([],p)
o=new G.d("Incendiary",k,n,o,0)
$.$get$b().h(0,o)
$.D3=o
o=H.a(["C-4"],p)
n=$.v
k=H.a([$.bt,$.aA],l)
H.a([],p)
o=new G.d("C-4",k,n,o,0)
$.$get$b().h(0,o)
$.Bn=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a3,$.aQ,$.bs],l)
H.a([],p)
o=new G.d("Fae",k,n,o,0)
$.$get$b().h(0,o)
$.Cf=o
o=H.a(["Plutonium"],p)
n=$.v
k=H.a([$.D,$.c5],l)
H.a([],p)
o=new G.d("Plutonium",k,n,o,0)
$.$get$b().h(0,o)
$.Ec=o
o=H.a(["Lithium"],p)
n=$.v
k=H.a([$.D,$.a7],l)
H.a([],p)
o=new G.d("Lithium",k,n,o,0)
$.$get$b().h(0,o)
$.Dl=o
o=H.a(["Molten"],p)
n=$.v
k=H.a([$.D,$.as],l)
H.a([],p)
o=new G.d("Molten",k,n,o,0)
$.$get$b().h(0,o)
$.DH=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.v
k=H.a([$.aw,$.as],l)
H.a([],p)
o=new G.d("Magma",k,n,o,0)
$.$get$b().h(0,o)
$.Dr=o
o=H.a(["Rusty"],p)
n=$.G
k=H.a([$.D,$.bS],l)
H.a([],p)
o=new G.d("Rusty",k,n,o,0)
$.$get$b().h(0,o)
$.EB=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.av,$.ao,$.aj],l)
H.a([],p)
o=new G.d("Fonzie",k,n,o,0)
$.$get$b().h(0,o)
$.Cx=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aB,$.aT],l)
H.a([],p)
o=new G.d("Romcom",k,n,o,0)
$.$get$b().h(0,o)
$.Ex=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.ay,$.aQ],l)
H.a([],p)
o=new G.d("Alluring",k,n,o,0)
$.$get$b().h(0,o)
$.AZ=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.ay,$.ak],l)
H.a([],p)
o=new G.d("Masquerade",k,n,o,0)
$.$get$b().h(0,o)
$.Dv=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.aw,$.bo],l)
H.a([],p)
o=new G.d("Stoneskin",k,n,o,0)
$.$get$b().h(0,o)
$.Fl=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a3,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,n,o,0)
$.$get$b().h(0,o)
$.Ep=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a3,$.aw],l)
H.a([],p)
o=new G.d("Dwarven",k,n,o,0)
$.$get$b().h(0,o)
$.C6=o
o=H.a(["Elemental","Animated"],p)
n=$.v
k=H.a([$.a3,$.at],l)
H.a([],p)
o=new G.d("Elemental",k,n,o,0)
$.$get$b().h(0,o)
$.Cb=o
o=H.a(["Gourmet"],p)
n=$.H
k=H.a([$.ar,$.aj],l)
H.a([],p)
o=new G.d("Gourmet",k,n,o,0)
$.$get$b().h(0,o)
$.CK=o
o=H.a(["Stained Glass"],p)
n=$.v
k=H.a([$.aU,$.ay,$.bm],l)
H.a([],p)
o=new G.d("Stained Glass",k,n,o,0)
$.$get$b().h(0,o)
$.Fi=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aJ,$.Q],l)
H.a([],p)
o=new G.d("Gauze",k,n,o,0)
$.$get$b().h(0,o)
$.CD=o
o=H.a(["Locked"],p)
n=$.G
k=H.a([$.bl,$.bv],l)
H.a([],p)
o=new G.d("Locked",k,n,o,0)
$.$get$b().h(0,o)
$.Dn=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.aw,$.K],l)
H.a([],p)
o=new G.d("Etched",k,n,o,0)
$.$get$b().h(0,o)
$.Ce=o
o=H.a(["Papyrus"],p)
n=$.v
k=H.a([$.K,$.aR],l)
H.a([],p)
o=new G.d("Papyrus",k,n,o,0)
$.$get$b().h(0,o)
$.E0=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.K,$.aA],l)
H.a([],p)
o=new G.d("Film",k,n,o,0)
$.$get$b().h(0,o)
$.Cn=o
o=H.a(["Saucey"],p)
n=$.v
k=H.a([$.bs,$.bv,$.bT],l)
H.a([],p)
o=new G.d("Saucey",k,n,o,0)
$.$get$b().h(0,o)
$.EJ=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.K,$.bY],l)
H.a([],p)
o=new G.d("Lottery",k,n,o,0)
$.$get$b().h(0,o)
$.Dp=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.ak,$.Q],l)
H.a([],p)
o=new G.d("Blindfolded",k,n,o,0)
$.$get$b().h(0,o)
$.wD=o
o=H.a(["Possessed"],p)
n=$.G
k=H.a([$.bX,$.bo],l)
H.a([],p)
o=new G.d("Possessed",k,n,o,0)
$.$get$b().h(0,o)
$.El=o
o=H.a(["Infernal"],p)
n=$.H
k=H.a([$.bX,$.as],l)
H.a([],p)
o=new G.d("Infernal",k,n,o,0)
$.$get$b().h(0,o)
$.D4=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.W,$.bk,$.uf,$.at],l)
H.a([],p)
o=new G.d("Geppetto",k,n,o,0)
$.$get$b().h(0,o)
$.CE=o
o=H.a(["Abominable"],p)
n=$.H
k=H.a([$.bo,$.bs],l)
H.a([],p)
o=new G.d("Abominable",k,n,o,0)
$.$get$b().h(0,o)
$.AX=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aB,$.aD],l)
H.a([],p)
o=new G.d("Ashen",k,n,o,0)
$.$get$b().h(0,o)
$.B3=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aB,$.bq],l)
H.a([],p)
o=new G.d("Pale",k,n,o,0)
$.$get$b().h(0,o)
$.DY=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aB,$.bv],l)
H.a([],p)
o=new G.d("Pitch",k,n,o,0)
$.$get$b().h(0,o)
$.E7=o
o=H.a(["Lit"],p)
n=$.H
k=H.a([$.ao,$.as],l)
H.a([],p)
o=new G.d("Lit",k,n,o,0)
$.$get$b().h(0,o)
$.Dk=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a3,$.bq],l)
H.a([],p)
o=new G.d("Hypnotizing",k,n,o,0)
$.$get$b().h(0,o)
$.CW=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bq,$.bl],l)
H.a([],p)
o=new G.d("Tranquilizing",k,n,o,0)
$.$get$b().h(0,o)
$.FC=o
o=H.a([],p)
n=$.q
k=H.a([$.bq,$.bv],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.Bq=o
o=H.a(["Ghost Rider's"],p)
n=$.aa
k=H.a([$.ho,$.as,$.bX],l)
H.a([],p)
o=new G.d("Ghost Rider",k,n,o,0)
$.$get$b().h(0,o)
$.CF=o
o=H.a(["Logical"],p)
n=$.H
k=H.a([$.Y,$.br],l)
H.a([],p)
o=new G.d("Logical",k,n,o,0)
$.$get$b().h(0,o)
$.Do=o
o=H.a(["Duelist's"],p)
n=$.aa
k=H.a([$.aK,$.aj],l)
H.a([],p)
o=new G.d("Duelist's",k,n,o,0)
$.$get$b().h(0,o)
$.C3=o
o=H.a(["Silenced"],p)
n=$.G
k=H.a([$.aK,$.ak],l)
H.a([],p)
o=new G.d("Silenced",k,n,o,0)
$.$get$b().h(0,o)
$.F1=o
o=H.a(["Deudly"],p)
n=$.G
k=H.a([$.aK,$.bS],l)
H.a([],p)
o=new G.d("Deudly",k,n,o,0)
$.$get$b().h(0,o)
$.BS=o
o=H.a(["Screaming"],p)
n=$.G
k=H.a([$.aV,$.aX],l)
H.a([],p)
o=new G.d("Screaming",k,n,o,0)
$.$get$b().h(0,o)
$.EO=o
o=H.a(["Cacophonous"],p)
n=$.H
k=H.a([$.bT,$.a9],l)
H.a([],p)
o=new G.d("Cacophonous",k,n,o,0)
$.$get$b().h(0,o)
$.Bo=o
o=H.a(["Sublime"],p)
n=$.H
k=H.a([$.bT,$.ay],l)
H.a([],p)
o=new G.d("Sublime",k,n,o,0)
$.$get$b().h(0,o)
$.Fn=o
o=H.a(["Masterwork"],p)
n=$.v
k=H.a([$.bk,$.bm],l)
H.a([],p)
o=new G.d("Masterwork",k,n,o,0)
$.$get$b().h(0,o)
$.Dx=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.at,$.aX,$.bs,$.a3],l)
H.a([],p)
o=new G.d("BroodFester",k,n,o,0)
$.$get$b().h(0,o)
$.Bi=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bs,$.ak],l)
H.a([],p)
o=new G.d("[REDACTED]",k,n,o,0)
$.$get$b().h(0,o)
$.Ev=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ar,$.bt],l)
H.a([],p)
o=new G.d("Pop Rocks",k,n,o,0)
$.$get$b().h(0,o)
$.Eh=o
o=H.a(["Disguised"],p)
n=$.G
k=H.a([$.ak,$.aP],l)
H.a([],p)
o=new G.d("Disguised",k,n,o,0)
$.$get$b().h(0,o)
$.BZ=o
o=H.a(["Haunted"],p)
n=$.G
k=H.a([$.aG,$.bX],l)
H.a([],p)
o=new G.d("Haunted",k,n,o,0)
$.$get$b().h(0,o)
$.CQ=o
o=H.a(["Cognitohazardous"],p)
n=$.G
k=H.a([$.bs,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,n,o,0)
$.$get$b().h(0,o)
$.BG=o
o=H.a(["Staticy"],p)
n=$.G
k=H.a([$.aG,$.a7],l)
H.a([],p)
o=new G.d("Staticy",k,n,o,0)
$.$get$b().h(0,o)
$.Fj=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aU,$.c5],l)
H.a([],p)
o=new G.d("Jadite",k,n,o,0)
$.$get$b().h(0,o)
$.D8=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aT,$.aG],l)
H.a([],p)
o=new G.d("Tickling",k,n,o,0)
$.$get$b().h(0,o)
$.Fy=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.D,$.bR],l)
H.a([],p)
o=new G.d("Composite",k,n,o,0)
$.$get$b().h(0,o)
$.BI=o
o=H.a(["High-Powered"],p)
n=$.G
k=H.a([$.bt,$.aK],l)
H.a([],p)
o=new G.d("High-Powered",k,n,o,0)
$.$get$b().h(0,o)
$.CR=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bt,$.ae],l)
H.a([],p)
o=new G.d("Concussive",k,n,o,0)
$.$get$b().h(0,o)
$.BJ=o
o=H.a(["Down"],p)
n=$.v
k=H.a([$.aW,$.bB],l)
H.a([],p)
o=new G.d("Down",k,n,o,0)
$.$get$b().h(0,o)
$.C0=o
o=H.a(["Prickly"],p)
n=$.v
k=H.a([$.aG,$.aM],l)
H.a([],p)
o=new G.d("Prickly",k,n,o,0)
$.$get$b().h(0,o)
$.Eo=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aG,$.ak,$.a7],l)
H.a([],p)
o=new G.d("Deep-Web",k,n,o,0)
$.$get$b().h(0,o)
$.BV=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.v
k=H.a([$.aM,$.av],l)
H.a([],p)
o=new G.d("Jagged",k,n,o,0)
$.$get$b().h(0,o)
$.D9=o
o=H.a(["Nanofiber"],p)
n=$.v
k=H.a([$.Q,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,n,o,0)
$.$get$b().h(0,o)
$.DO=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.D,$.aV],l)
H.a([],p)
o=new G.d("Clanging",k,n,o,0)
$.$get$b().h(0,o)
$.BC=o
o=H.a(["Silver"],p)
n=$.v
k=H.a([$.D,$.aj],l)
H.a([],p)
o=new G.d("Silver",k,n,o,0)
$.$get$b().h(0,o)
$.F3=o
o=H.a(["Withered"],p)
n=$.G
k=H.a([$.aD,$.aR],l)
H.a([],p)
o=new G.d("Withered",k,n,o,0)
$.$get$b().h(0,o)
$.FO=o
o=H.a(["Shattered"],p)
n=$.G
k=H.a([$.aU,$.bS],l)
H.a([],p)
o=new G.d("Shattered",k,n,o,0)
$.$get$b().h(0,o)
$.EU=o
o=H.a(["Miner's"],p)
n=$.aa
k=H.a([$.aw,$.D],l)
H.a([],p)
o=new G.d("Miner's",k,n,o,0)
$.$get$b().h(0,o)
$.DF=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a9,$.at],l)
H.a([],p)
o=new G.d("Singing",k,n,o,0)
$.$get$b().h(0,o)
$.F0=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bo,$.a7],l)
H.a([],p)
o=new G.d("Mitochondrial",k,n,o,0)
$.$get$b().h(0,o)
$.DG=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.ak,$.a7],l)
H.a([],p)
o=new G.d("Blackout",k,n,o,0)
$.$get$b().h(0,o)
$.Bb=o
o=H.a(["Asbestos"],p)
n=$.v
k=H.a([$.aw,$.bN],l)
H.a([],p)
o=new G.d("Asbestos",k,n,o,0)
$.$get$b().h(0,o)
$.AY=o
o=H.a(["Mercurial"],p)
n=$.v
k=H.a([$.bN,$.D],l)
H.a([],p)
o=new G.d("Mercurial",k,n,o,0)
$.$get$b().h(0,o)
$.Dy=o
o=H.a(["Bulletproof"],p)
n=$.v
k=H.a([$.Q,$.ae],l)
H.a([],p)
o=new G.d("Bulletproof",k,n,o,0)
$.$get$b().h(0,o)
$.Bl=o
o=H.a(["Cotton"],p)
n=$.v
k=H.a([$.aR,$.Q],l)
H.a([],p)
o=new G.d("Cotton",k,n,o,0)
$.$get$b().h(0,o)
$.BK=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bv,$.aQ],l)
H.a([],p)
o=new G.d("Blinding",k,n,o,0)
$.$get$b().h(0,o)
$.Bc=o
o=H.a(["Brilliant"],p)
n=$.H
k=H.a([$.aQ,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,n,o,0)
$.$get$b().h(0,o)
$.Bh=o
o=H.a(["Offensive"],p)
n=$.H
k=H.a([$.bv,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,n,o,0)
$.$get$b().h(0,o)
$.DU=o
o=H.a(["Poached"],p)
n=$.G
k=H.a([$.bo,$.bm],l)
H.a([],p)
o=new G.d("Poached",k,n,o,0)
$.$get$b().h(0,o)
$.Ed=o
o=H.a(["Tapestry"],p)
n=$.v
k=H.a([$.Q,$.ay],l)
H.a([],p)
o=new G.d("Tapestry",k,n,o,0)
$.$get$b().h(0,o)
$.Fq=o
o=H.a(["Itchy"],p)
n=$.H
k=H.a([$.Q,$.aG],l)
H.a([],p)
o=new G.d("Itchy",k,n,o,0)
$.$get$b().h(0,o)
$.D6=o
o=H.a(["Wishbone"],p)
n=$.v
k=H.a([$.bY,$.aZ],l)
H.a([],p)
o=new G.d("Wishbone",k,n,o,0)
$.$get$b().h(0,o)
$.FN=o
o=H.a(["Rattling"],p)
n=$.G
k=H.a([$.aV,$.aZ],l)
H.a([],p)
o=new G.d("Rattling",k,n,o,0)
$.$get$b().h(0,o)
$.Et=o
o=H.a(["Cranial"],p)
n=$.v
k=H.a([$.Y,$.aZ],l)
H.a([],p)
o=new G.d("Cranial",k,n,o,0)
$.$get$b().h(0,o)
$.BO=o
o=H.a(["Humerus"],p)
n=$.v
k=H.a([$.aT,$.aZ],l)
H.a([],p)
o=new G.d("Humerus",k,n,o,0)
$.$get$b().h(0,o)
$.CU=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aJ,$.aW],l)
H.a([],p)
o=new G.d("Massage",k,n,o,0)
$.$get$b().h(0,o)
$.Dw=o
o=H.a(["Pestersome","Irksome"],p)
n=$.H
k=H.a([$.aV,$.bv],l)
H.a([],p)
o=new G.d("Pestersome",k,n,o,0)
$.$get$b().h(0,o)
$.E2=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aV,$.bt],l)
H.a([],p)
o=new G.d("Shockwave",k,n,o,0)
$.$get$b().h(0,o)
$.EX=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bN,$.aJ],l)
H.a([],p)
o=new G.d("Antivenom",k,n,o,0)
$.$get$b().h(0,o)
$.B0=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.v
k=H.a([$.as,$.a3],l)
H.a([],p)
o=new G.d("Will O Wisp",k,n,o,0)
$.$get$b().h(0,o)
$.FK=o
o=H.a(["Fiberglass"],p)
n=$.v
k=H.a([$.Q,$.aU],l)
H.a([],p)
o=new G.d("Fiberglass",k,n,o,0)
$.$get$b().h(0,o)
$.Cl=o
o=H.a(["Skull"],p)
n=$.v
k=H.a([$.aZ,$.aX],l)
H.a([],p)
o=new G.d("Skull",k,n,o,0)
$.$get$b().h(0,o)
$.F7=o
o=H.a(["Enchanted"],p)
n=$.G
k=H.a([$.a3,$.bY],l)
H.a([],p)
o=new G.d("Enchanted",k,n,o,0)
$.$get$b().h(0,o)
$.Cd=o
o=H.a(["Berserker's"],p)
n=$.aa
k=H.a([$.a3,$.bv],l)
H.a([],p)
o=new G.d("Berserker's",k,n,o,0)
$.$get$b().h(0,o)
$.Ba=o
o=H.a(["Clerical"],p)
n=$.aa
k=H.a([$.a3,$.aJ],l)
H.a([],p)
o=new G.d("Clerical",k,n,o,0)
$.$get$b().h(0,o)
$.BD=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aJ,$.as],l)
H.a([],p)
o=new G.d("Cauterizing",k,n,o,0)
$.$get$b().h(0,o)
$.Bu=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c5,$.aQ],l)
H.a([],p)
o=new G.d("X-Ray",k,n,o,0)
$.$get$b().h(0,o)
$.FR=o
o=H.a(["Clever"],p)
n=$.H
k=H.a([$.Y,$.bY],l)
H.a([],p)
o=new G.d("Clever",k,n,o,0)
$.$get$b().h(0,o)
$.BE=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.aW,$.as],l)
H.a([],p)
o=new G.d("Fireplace",k,n,o,0)
$.$get$b().h(0,o)
$.Co=o
o=H.a(["Crackling"],p)
n=$.G
k=H.a([$.aV,$.as],l)
H.a([],p)
o=new G.d("Crackling",k,n,o,0)
$.$get$b().h(0,o)
$.BN=o
o=H.a(["Thumping"],p)
n=$.G
k=H.a([$.aV,$.cb],l)
H.a([],p)
o=new G.d("Thumping",k,n,o,0)
$.$get$b().h(0,o)
$.Fw=o
o=H.a(["Shrieking","Banshee"],p)
n=$.G
k=H.a([$.bX,$.aV],l)
H.a([],p)
o=new G.d("Banshee",k,n,o,0)
$.$get$b().h(0,o)
$.EZ=o
o=H.a(["Surreal"],p)
n=$.H
k=H.a([$.aT,$.bs],l)
H.a([],p)
o=new G.d("Surreal2",k,n,o,0)
$.$get$b().h(0,o)
$.Fp=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aJ,$.aR],l)
H.a([],p)
o=new G.d("Aloe",k,n,o,0)
$.$get$b().h(0,o)
$.B_=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aB,$.aR],l)
H.a([],p)
o=new G.d("Rose",k,n,o,0)
$.$get$b().h(0,o)
$.Ez=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aT,$.ae],l)
H.a([],p)
o=new G.d("Knock Knock",k,n,o,0)
$.$get$b().h(0,o)
$.De=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a3,$.bN],l)
H.a([],p)
o=new G.d("Lifesteal",k,n,o,0)
$.$get$b().h(0,o)
$.Dh=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.ay,$.aD],l)
H.a([],p)
o=new G.d("Tragic",k,n,o,0)
$.$get$b().h(0,o)
$.FB=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.av,$.aT],l)
H.a([],p)
o=new G.d("Slapstick",k,n,o,0)
$.$get$b().h(0,o)
$.F8=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bT,$.aT],l)
H.a([],p)
o=new G.d("Gross Out",k,n,o,0)
$.$get$b().h(0,o)
$.wP=o
o=H.a(["Flowery"],p)
n=$.v
k=H.a([$.ay,$.aR],l)
H.a([],p)
o=new G.d("Flowery",k,n,o,0)
$.$get$b().h(0,o)
$.Cu=o
o=H.a(["Poison Ivy"],p)
n=$.v
k=H.a([$.bN,$.aR],l)
H.a([],p)
o=new G.d("Poison Ivy",k,n,o,0)
$.$get$b().h(0,o)
$.Ef=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.G
k=H.a([$.a3,$.bB],l)
H.a([],p)
o=new G.d("Winged",k,n,o,0)
$.$get$b().h(0,o)
$.FL=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aR,$.ar,$.aD],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,n,o,0)
$.$get$b().h(0,o)
$.Cy=o
o=H.a(["Lawful"],p)
n=$.H
k=H.a([$.bl,$.at],l)
H.a([],p)
o=new G.d("Lawful",k,n,o,0)
$.$get$b().h(0,o)
$.Df=o
o=H.a(["Chaotic"],p)
n=$.H
k=H.a([$.bv,$.at],l)
H.a([],p)
o=new G.d("Chaotic",k,n,o,0)
$.$get$b().h(0,o)
$.By=o
o=H.a(["Hypothermic"],p)
n=$.G
k=H.a([$.aD,$.br],l)
H.a([],p)
o=new G.d("Hypothermic",k,n,o,0)
$.$get$b().h(0,o)
$.CX=o
o=H.a(["Hyperthermic"],p)
n=$.G
k=H.a([$.aD,$.as],l)
H.a([],p)
o=new G.d("Hyperthermic",k,n,o,0)
$.$get$b().h(0,o)
$.CV=o
o=H.a(["Shackled"],p)
n=$.G
k=H.a([$.bl,$.cb],l)
H.a([],p)
o=new G.d("Shackled",k,n,o,0)
$.$get$b().h(0,o)
$.EQ=o
o=H.a(["Poetic"],p)
n=$.H
k=H.a([$.Y,$.aB],l)
H.a([],p)
o=new G.d("Poetic",k,n,o,0)
$.$get$b().h(0,o)
$.Ee=o
o=H.a(["Holographic"],p)
n=$.v
k=H.a([$.aQ,$.Y,$.aU,$.a7],l)
H.a([],p)
o=new G.d("Holographic",k,n,o,0)
$.$get$b().h(0,o)
$.CS=o
o=H.a(["Casket","Coffin"],p)
n=$.v
k=H.a([$.W,$.aD],l)
H.a([],p)
o=new G.d("Casket",k,n,o,0)
$.$get$b().h(0,o)
$.Bt=o
o=H.a(["Spectral"],p)
n=$.v
k=H.a([$.bX,$.a3],l)
H.a([],p)
o=new G.d("Spectral",k,n,o,0)
$.$get$b().h(0,o)
$.Fe=o
o=H.a(["Phoenix"],p)
n=$.v
k=H.a([$.as,$.bB],l)
H.a([],p)
o=new G.d("Phoenix",k,n,o,0)
$.$get$b().h(0,o)
$.E3=o
o=H.a(["Tattered"],p)
n=$.G
k=H.a([$.Q,$.aD],l)
H.a([],p)
o=new G.d("Tattered",k,n,o,0)
$.$get$b().h(0,o)
$.Ft=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a9,$.W],l)
H.a([],p)
o=new G.d("Woodwind",k,n,o,0)
$.$get$b().h(0,o)
$.FQ=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aG,$.aZ],l)
H.a([],p)
o=new G.d("Bone Hurting",k,n,o,0)
$.$get$b().h(0,o)
$.Be=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aJ,$.aZ],l)
H.a([],p)
o=new G.d("Bone Healing:",k,n,o,0)
$.$get$b().h(0,o)
$.Bd=o
o=H.a(["Calcium"],p)
n=$.v
k=H.a([$.aZ,$.aJ,$.ar],l)
H.a([],p)
o=new G.d("Calcium",k,n,o,0)
$.$get$b().h(0,o)
$.Bp=o
o=H.a(["Fleece"],p)
n=$.v
k=H.a([$.Q,$.as],l)
H.a([],p)
o=new G.d("Fleece",k,n,o,0)
$.$get$b().h(0,o)
$.Cr=o
o=H.a(["Potted"],p)
n=$.v
k=H.a([$.bR,$.aR],l)
H.a([],p)
o=new G.d("Potted",k,n,o,0)
$.$get$b().h(0,o)
$.En=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.v
k=H.a([$.D,$.ar],l)
H.a([],p)
o=new G.d("Canned",k,n,o,0)
$.$get$b().h(0,o)
$.Br=o
o=H.a(["Diseased"],p)
n=$.G
k=H.a([$.aD,$.bo],l)
H.a([],p)
o=new G.d("Diseased",k,n,o,0)
$.$get$b().h(0,o)
$.BW=o
o=H.a(["Porcupine"],p)
n=$.v
k=H.a([$.aM,$.ch],l)
H.a([],p)
o=new G.d("Porcupine",k,n,o,0)
$.$get$b().h(0,o)
$.Ej=o
o=H.a(["Fanged"],p)
n=$.G
k=H.a([$.aZ,$.aM],l)
H.a([],p)
o=new G.d("Fanged",k,n,o,0)
$.$get$b().h(0,o)
$.Ch=o
o=H.a(["Basalt"],p)
n=$.v
k=H.a([$.aw,$.ak],l)
H.a([],p)
o=new G.d("Basalt",k,n,o,0)
$.$get$b().h(0,o)
$.B7=o
o=H.a(["Obsidian"],p)
n=$.v
k=H.a([$.aU,$.ak],l)
H.a([],p)
o=new G.d("Obsidian",k,n,o,0)
$.$get$b().h(0,o)
$.DT=o
o=H.a(["Fenestrated"],p)
n=$.v
k=H.a([$.aU,$.W],l)
H.a([],p)
o=new G.d("Fenestrated",k,n,o,0)
$.$get$b().h(0,o)
$.Cj=o
o=H.a(["Plexiglass"],p)
n=$.v
k=H.a([$.aU,$.aA],l)
H.a([],p)
o=new G.d("Plexiglass",k,n,o,0)
$.$get$b().h(0,o)
$.Eb=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bR,$.K],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,n,o,0)
$.$get$b().h(0,o)
$.Bx=o
o=H.a(["Fungal"],p)
n=$.v
k=H.a([$.aR,$.bT],l)
H.a([],p)
o=new G.d("Fungal",k,n,o,0)
$.$get$b().h(0,o)
$.CC=o
o=H.a(["Thorny"],p)
n=$.G
k=H.a([$.aR,$.aM],l)
H.a([],p)
o=new G.d("Thorny",k,n,o,0)
$.$get$b().h(0,o)
$.Fv=o
o=H.a(["Bulbed"],p)
n=$.G
k=H.a([$.aR,$.ae],l)
H.a([],p)
o=new G.d("Bulbed",k,n,o,0)
$.$get$b().h(0,o)
$.Bk=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aU,$.aK],l)
H.a([],p)
o=new G.d("Glass Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.CI=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aR,$.cc],l)
H.a([],p)
o=new G.d("Caoutchouc",k,n,o,0)
$.$get$b().h(0,o)
$.E9=o
o=H.a(["Cellulose"],p)
n=$.v
k=H.a([$.aR,$.aA],l)
H.a([],p)
o=new G.d("Cellulose",k,n,o,0)
$.$get$b().h(0,o)
$.Bw=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a9,$.aX],l)
H.a([],p)
o=new G.d("Horrorcore",k,n,o,0)
$.$get$b().h(0,o)
$.CT=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bs,$.a9],l)
H.a([],p)
o=new G.d("Nightcore",k,n,o,0)
$.$get$b().h(0,o)
$.DQ=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bs,$.a7,$.a9],l)
H.a([],p)
o=new G.d("Crazy Bus",k,n,o,0)
$.$get$b().h(0,o)
$.BP=o
o=H.a(["Burdock"],p)
n=$.v
k=H.a([$.aR,$.ch],l)
H.a([],p)
o=new G.d("Burdock",k,n,o,0)
$.$get$b().h(0,o)
$.Bm=o
o=H.a(["Necrotic"],p)
n=$.G
k=H.a([$.aZ,$.bX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.v
k=H.a([$.aZ,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.G
k=H.a([$.aZ,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.aZ,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.v
k=H.a([$.aZ,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.aZ,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.H
k=H.a([$.W,$.aV],l)
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
n=$.G
k=H.a([$.W,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.v
k=H.a([$.W,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.v
k=H.a([$.W,$.bq],l)
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
k=H.a([$.W,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.aa
k=H.a([$.W,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.v
k=H.a([$.W,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.v
k=H.a([$.W,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.v
k=H.a([$.W,$.bo],l)
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
k=H.a([$.K,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.v
k=H.a([$.K,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.K,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.Q,$.bX],l)
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
k=H.a([$.aw,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.v
k=H.a([$.aw,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.v
k=H.a([$.aw,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.v
k=H.a([$.aw,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.v
k=H.a([$.aw,$.bt],l)
H.a([],p)
$.$get$b().h(0,new G.d("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.v
k=H.a([$.aw,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.G
k=H.a([$.aw,$.ch],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.G
k=H.a([$.Y,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.G
k=H.a([$.Q,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.Q,$.bB],l)
H.a([],p)
$.$get$b().h(0,new G.d("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.H
k=H.a([$.Q,$.bT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.Q,$.av],l)
H.a([],p)
$.$get$b().h(0,new G.d("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.Q,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.H
k=H.a([$.Q,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.G
k=H.a([$.Q,$.cb],l)
H.a([],p)
$.$get$b().h(0,new G.d("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.H
k=H.a([$.Q,$.bY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.H
k=H.a([$.Q,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.v
k=H.a([$.Q,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.v
k=H.a([$.Q,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.Q,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.v
k=H.a([$.Q,$.bN],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.v
k=H.a([$.Q,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.v
k=H.a([$.Q,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.v
k=H.a([$.Q,$.bv],l)
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
k=H.a([$.Q,$.a3],l)
H.a([],p)
$.$get$b().h(0,new G.d("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.v
k=H.a([$.Q,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.v
k=H.a([$.Q,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.aa
k=H.a([$.Y,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.v
k=H.a([$.a3,$.W],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.v
k=H.a([$.aR,$.aK],l)
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
n=$.H
k=H.a([$.Y,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.H
k=H.a([$.bk,$.aP,$.a3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.v
k=H.a([$.bs,$.bB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bs,$.K],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.aa
k=H.a([$.bs,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.aa
k=H.a([$.a_,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.aa
k=H.a([$.Y,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.v
k=H.a([$.a_,$.aA,$.bq,$.ae],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a_,$.dy,$.W,$.K],l)
H.a([],p)
$.$get$b().h(0,new G.d("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.aa
k=H.a([$.ak,$.a3,$.bk,$.aG,$.aX],l)
H.a([],p)
o=new G.d("Queenly",k,n,o,0)
$.$get$b().h(0,o)
$.Eq=o
o=H.a(["Kingly"],p)
n=$.aa
k=H.a([$.aX,$.ae,$.cb,$.a3,$.bk],l)
H.a([],p)
o=new G.d("Kingly",k,n,o,0)
$.$get$b().h(0,o)
$.Dd=o
o=H.a(["Jack"],p)
n=$.aa
k=H.a([$.aM,$.av,$.D,$.ak],l)
H.a([],p)
o=new G.d("Jack",k,n,o,0)
$.$get$b().h(0,o)
$.D7=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a_,$.aP,$.W,$.P,$.Q],l)
H.a([],p)
$.$get$b().h(0,new G.d("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a_,$.ax,$.K,$.D,$.Y,$.P],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a_,$.ax,$.K,$.Y,$.P,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a_,$.aD,$.K,$.Y,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.aa
k=H.a([$.a_,$.aQ,$.D,$.aM,$.av,$.fg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.aa
k=H.a([$.a_,$.K,$.bv,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.aa
k=H.a([$.a_,$.a3,$.Q,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.aa
k=H.a([$.a_,$.aG,$.aZ,$.D,$.ff,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.aa
k=H.a([$.a_,$.aw,$.aj,$.js,$.ae],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.G
k=H.a([$.a_,$.Q,$.bm,$.ay,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a_,$.D,$.bm,$.ay,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a_,$.aA,$.a7,$.ak,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a_,$.Q,$.Y,$.a3,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a_,$.Q,$.Y,$.ay,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.G
k=$.a_
j=$.K
i=$.Y
i=H.a([k,j,i,$.ax,i,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.v
i=H.a([$.a_,$.ay,$.bR,$.ae,$.el,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.aa
i=H.a([$.a_,$.ax,$.K,$.bv,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.aa
i=H.a([$.a3,$.K],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.K,$.Y,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a_,$.D,$.ak,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.G
i=H.a([$.a_,$.D,$.aU,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a_,$.aP,$.W,$.ao,$.bq,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a_,$.as,$.D,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a_,$.a7,$.K,$.ax,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a_,$.W,$.at,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.aa
i=H.a([$.a_,$.bk,$.bB,$.aQ,$.a9,$.a3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.v
i=H.a([$.a_,$.aJ,$.aU,$.a3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.v
i=H.a([$.a_,$.aQ,$.bY,$.aw,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.aa
i=H.a([$.a_,$.aG,$.aw,$.aj,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.aa
i=H.a([$.a_,$.ar,$.bv,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.aa
i=H.a([$.a_,$.D,$.a9,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.H
i=H.a([$.a_,$.aU,$.c5,$.aQ,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.v
i=H.a([$.D,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.aa
i=H.a([$.D,$.bB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.v
i=H.a([$.D,$.bT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.v
i=H.a([$.D,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.G
i=H.a([$.D,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.G
i=H.a([$.D,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.v
i=H.a([$.D,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.v
i=H.a([$.bR,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.v
i=H.a([$.bR,$.cc],l)
H.a([],p)
$.$get$b().h(0,new G.d("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.H
i=H.a([$.bR,$.bT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.v
i=H.a([$.bR,$.ae],l)
H.a([],p)
$.$get$b().h(0,new G.d("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.v
i=H.a([$.bR,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.v
i=H.a([$.bR,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.v
i=H.a([$.bR,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.G
i=H.a([$.bR,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.v
i=H.a([$.bR,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.G
i=H.a([$.bR,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.H
i=H.a([$.bS,$.K],l)
H.a([],p)
$.$get$b().h(0,new G.d("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.G
i=H.a([$.bS,$.Q],l)
H.a([],p)
$.$get$b().h(0,new G.d("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.H
i=H.a([$.bS,$.bT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.G
i=H.a([$.bS,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.v
i=H.a([$.bS,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.G
i=H.a([$.bS,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.aa
i=H.a([$.bS,$.bv],l)
H.a([],p)
$.$get$b().h(0,new G.d("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.v
i=H.a([$.bS,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.v
i=H.a([$.bS,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.v
i=H.a([$.bS,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.aa
i=H.a([$.W,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.v
i=H.a([$.W,$.bX],l)
H.a([],p)
$.$get$b().h(0,new G.d("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.v
i=H.a([$.W,$.cc],l)
H.a([],p)
$.$get$b().h(0,new G.d("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.v
i=H.a([$.aA,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.cc,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.G
i=H.a([$.cc,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.cc,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.K,$.Q],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.K,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.v
i=H.a([$.aw,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.v
i=H.a([$.aw,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.H
i=H.a([$.aw,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.H
i=H.a([$.bX,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.v
i=H.a([$.bX,$.bB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.H
i=H.a([$.bX,$.bT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.v
i=H.a([$.bX,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.v
i=H.a([$.bX,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.v
i=H.a([$.bX,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.H
i=H.a([$.bX,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.v
i=H.a([$.bo,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.v
i=H.a([$.bo,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.v
i=H.a([$.bo,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.G
i=H.a([$.bo,$.bB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bs,$.a3],l)
H.a([],p)
$.$get$b().h(0,new G.d("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.v
i=H.a([$.bs,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.G
i=H.a([$.bs,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bs,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.G
i=H.a([$.ch,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.v
i=H.a([$.ch,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.aa
i=H.a([$.ch,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.v
i=H.a([$.ch,$.bB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.v
i=H.a([$.aR,$.bB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.G
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
i=H.a([$.aR,$.bt],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.v
i=H.a([$.aR,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.v
i=H.a([$.aR,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.v
i=H.a([$.aR,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.G
i=H.a([$.aR,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.G
i=H.a([$.bB,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.v
i=H.a([$.bB,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.v
i=H.a([$.bB,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.v
i=H.a([$.bB,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.v
i=H.a([$.bB,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.v
i=H.a([$.bB,$.bN],l)
H.a([],p)
$.$get$b().h(0,new G.d("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.v
i=H.a([$.bB,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.ul
i=H.a([$.bB,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.G
i=H.a([$.bB,$.bT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.H
i=H.a([$.bT,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.av,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.av,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.H
i=H.a([$.aX,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aJ,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.H
i=H.a([$.ar,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.v
i=H.a([$.ar,$.aM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.H
i=H.a([$.ar,$.ae],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.cb,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.cb,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aK,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aK,$.a3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.aa
i=H.a([$.aK,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.aa
i=H.a([$.aK,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.G
i=H.a([$.aK,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.G
i=H.a([$.aK,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.aa
i=H.a([$.aK,$.bv],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aK,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aK,$.c5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aK,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.G
i=H.a([$.aK,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.v
i=H.a([$.aQ,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.v
i=H.a([$.a9,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.v
i=H.a([$.bY,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.v
i=H.a([$.bY,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.aa
i=H.a([$.bY,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.aa
i=H.a([$.aQ,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.G
i=H.a([$.aQ,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.H
i=H.a([$.aQ,$.aT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.G
i=H.a([$.aQ,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.aa
i=H.a([$.ak,$.a3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.ak,$.a3,$.Q],l)
H.a([],p)
$.$get$b().h(0,new G.d("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.G
i=H.a([$.ak,$.aT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.H
i=H.a([$.ak,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.ak,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.aa
i=H.a([$.ak,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.aa
i=H.a([$.bq,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bq,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bq,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aJ,$.c5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.G
i=H.a([$.bN,$.c5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.G
i=H.a([$.aD,$.c5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aD,$.bt],l)
H.a([],p)
$.$get$b().h(0,new G.d("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.G
i=H.a([$.a7,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aD,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.G
i=H.a([$.aD,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.H
i=H.a([$.aD,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bt,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bt,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bt,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aD,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bt,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a7,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bt,$.bv],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bt,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.G
i=H.a([$.bt,$.bN],l)
H.a([],p)
$.$get$b().h(0,new G.d("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bt,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.br,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a3,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.G
i=H.a([$.a7,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bv,$.bN],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bN,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bN,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bN,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.G
i=H.a([$.bN,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.G
i=H.a([$.bN,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bN,$.aT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.G
i=H.a([$.a9,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a9,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.a9,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.a9,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.aa
i=H.a([$.a9,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a9,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a9,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a9,$.bv],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a9,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bv,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bv,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.aa
i=H.a([$.Y,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.bl,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.bl,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.bl,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.G
i=H.a([$.bl,$.a3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.H
i=H.a([$.ay,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.G
i=H.a([$.aW,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.aW,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.H
i=H.a([$.ar,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.H
i=H.a([$.aB,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.H
i=H.a([$.aB,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.G
i=H.a([$.at,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
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
n=$.aa
i=H.a([$.aB,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.G
i=H.a([$.aB,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.G
i=H.a([$.aB,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.G
i=H.a([$.aB,$.aV,$.ax,$.jt],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.G
i=H.a([$.ar,$.aT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.G
i=H.a([$.ar,$.a3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.G
i=H.a([$.ar,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.G
i=H.a([$.a3,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.G
i=H.a([$.ar,$.aT,$.a7,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.v
i=H.a([$.D,$.bX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.aZ,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.G
i=H.a([$.bS,$.as],l)
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
n=$.G
i=H.a([$.cc,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.v
i=H.a([$.K,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.G
i=H.a([$.K,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.aa
i=H.a([$.aU,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.G
i=H.a([$.bo,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.G
i=H.a([$.as,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.v
i=H.a([$.aB,$.ch],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.aa
i=H.a([$.aR,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.G
i=H.a([$.aJ,$.bT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.H
i=H.a([$.bk,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.aa
i=H.a([$.bY,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.G
i=H.a([$.ak,$.as],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.G
i=H.a([$.as,$.a7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.G
i=H.a([$.as,$.bN],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.G
i=H.a([$.as,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.G
i=H.a([$.aD,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.G
i=H.a([$.bm,$.ay],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.G
i=H.a([$.bm,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.G
i=H.a([$.bm,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.G
i=H.a([$.aG,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.G
i=H.a([$.aV,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.G
i=H.a([$.aB,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.G
i=H.a([$.a3,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.G
i=H.a([$.P,$.T,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.G
i=H.a([$.P,$.T,$.bk,$.aP,$.Q],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.G
i=H.a([$.P,$.T,$.bk,$.ch],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.G
i=H.a([$.aw,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.G
i=H.a([$.bB,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.G
i=H.a([$.aR,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.G
i=H.a([$.a3,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.G
i=H.a([$.aX,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.G
l=H.a([$.bR,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chipped",l,n,o,0))
if($.xy==null){o=$.mH
n=$.aM
l=$.av
k=$.aZ
j=new U.ah(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a0(null,null,null,m),0,3)
j.M("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.xy=j}o=$.$get$al();(o&&C.b).sm(o,0)
o=$.$get$al()
n=$.Q
l=$.wP
k=new U.ah(n,null,null,null,"Speedo",!1,P.a0(null,null,null,m),0,3)
k.M("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$al()
o=$.fg
n=$.av
l=$.D
j=$.aM
i=new U.ah(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a0(null,null,null,m),0,3)
i.M("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$al()
k=$.u7
o=$.ae
j=$.D
l=new U.ah(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a0(null,null,null,m),0,3)
l.M("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$al()
i=$.uh
k=$.aK
j=$.D
o=new U.ah(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a0(null,null,null,m),0,3)
o.M("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$al()
l=$.ue
i=$.aK
j=$.D
k=new U.ah(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a0(null,null,null,m),0,3)
k.M("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$al()
o=$.x1
l=$.aK
j=$.D
i=new U.ah(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a0(null,null,null,m),0,3)
i.M("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$al()
k=$.wC
o=$.aM
j=$.av
l=$.D
n=new U.ah(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a0(null,null,null,m),0,3)
n.M("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$al()
i=$.u2
k=$.aM
l=$.av
j=$.D
o=new U.ah(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a0(null,null,null,m),0,3)
o.M("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$al()
n=$.hp
i=$.ae
j=$.bR
l=new U.ah(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a0(null,null,null,m),0,3)
l.M("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$al()
o=$.x4
n=$.av
j=$.D
i=new U.ah(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a0(null,null,null,m),0,3)
i.M("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$al()
l=$.wF
o=$.av
j=$.D
n=new U.ah(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a0(null,null,null,m),0,3)
n.M("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$al()
i=$.wL
l=$.aM
j=$.D
o=new U.ah(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a0(null,null,null,m),0,3)
o.M("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$al()
n=$.ud
i=$.bB
j=$.bs
l=new U.ah(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a0(null,null,null,m),0,3)
l.M("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$al()
o=$.el
n=$.cb
j=$.aw
i=$.ae
k=new U.ah(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a0(null,null,null,m),0,3)
k.M("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$al()
l=$.u3
o=$.aA
i=$.bY
j=new U.ah(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a0(null,null,null,m),0,3)
j.M("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$al()
k=$.uc
l=$.D
i=$.aM
o=new U.ah(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a0(null,null,null,m),0,3)
o.M("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$al()
j=$.x6
k=$.W
i=$.ae
l=new U.ah(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a0(null,null,null,m),0,3)
l.M("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$al()
o=$.x8
j=$.bl
i=$.Q
k=new U.ah(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a0(null,null,null,m),0,3)
k.M("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$al()
l=$.u_
o=$.aK
i=$.aw
j=$.Q
n=$.aM
h=new U.ah(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a0(null,null,null,m),0,3)
h.M("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$al()
k=$.jt
l=$.W
n=$.ae
j=new U.ah(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a0(null,null,null,m),0,3)
j.M("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$al()
h=$.jr
k=$.W
n=new U.ah(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a0(null,null,null,m),0,3)
n.M("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$al()
j=$.ax
h=$.K
k=$.ae
l=new U.ah(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a0(null,null,null,m),0,3)
l.M("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$al()
n=$.wZ
j=$.D
k=$.ae
h=new U.ah(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a0(null,null,null,m),0,3)
h.M("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$al()
l=$.tZ
n=$.av
k=$.D
j=$.ae
i=new U.ah(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a0(null,null,null,m),0,3)
i.M("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.wU
l=$.W
j=$.aM
k=new U.ah(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a0(null,null,null,m),0,3)
k.M("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.ff
h=$.D
j=$.ae
l=new U.ah(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a0(null,null,null,m),0,3)
l.M("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.wE
i=$.W
j=$.ae
h=new U.ah(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a0(null,null,null,m),0,3)
h.M("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.x9
k=$.aA
j=$.ae
i=new U.ah(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a0(null,null,null,m),0,3)
i.M("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.x5
l=$.W
j=$.aK
k=new U.ah(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a0(null,null,null,m),0,3)
k.M("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.x3
h=$.D
j=$.av
l=new U.ah(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a0(null,null,null,m),0,3)
l.M("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.ua
i=$.D
j=$.aK
h=new U.ah(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a0(null,null,null,m),0,3)
h.M("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.mI
k=$.D
j=$.bt
i=new U.ah(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a0(null,null,null,m),0,3)
i.M("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.el
l=$.cc
j=$.ae
k=new U.ah(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a0(null,null,null,m),0,3)
k.M("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.x7
h=$.D
j=$.aM
l=new U.ah(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a0(null,null,null,m),0,3)
l.M("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.mG
i=$.K
j=$.av
h=new U.ah(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a0(null,null,null,m),0,3)
h.M("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.u4
k=$.D
j=$.ae
i=new U.ah(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a0(null,null,null,m),0,3)
i.M("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.em
l=$.aW
j=$.Q
k=new U.ah(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a0(null,null,null,m),0,3)
k.M("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.ho
h=$.D
j=$.bl
l=new U.ah(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a0(null,null,null,m),0,3)
l.M("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.uk
i=$.D
j=$.ae
h=new U.ah(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a0(null,null,null,m),0,3)
h.M("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.x2
k=$.D
j=$.ae
i=new U.ah(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a0(null,null,null,m),0,3)
i.M("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.uj
l=$.W
j=$.ae
k=new U.ah(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a0(null,null,null,m),0,3)
k.M("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.uf
h=$.W
j=$.aD
l=new U.ah(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a0(null,null,null,m),0,3)
l.M("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.ug
i=$.D
j=$.av
h=new U.ah(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a0(null,null,null,m),0,3)
h.M("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.mK
k=$.D
j=$.Y
i=new U.ah(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a0(null,null,null,m),0,3)
i.M("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.js
l=$.aw
j=$.cb
k=new U.ah(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a0(null,null,null,m),0,3)
k.M("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.wO
h=$.W
j=$.ae
l=new U.ah(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a0(null,null,null,m),0,3)
l.M("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.wT
i=$.D
j=$.av
h=new U.ah(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a0(null,null,null,m),0,3)
h.M("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.x0
k=$.D
j=$.av
i=new U.ah(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a0(null,null,null,m),0,3)
i.M("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.x_
l=$.D
j=$.cb
k=new U.ah(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a0(null,null,null,m),0,3)
k.M("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.dy
h=$.W
j=$.ae
m=new U.ah(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a0(null,null,null,m),0,3)
m.M("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bJ("Duttle","Dut",null,null)
$.$get$bQ().push(m)
$.wk=m
m=new S.bJ("Salamander","GLUB",null,null)
$.$get$bQ().push(m)
$.tP=m
m=new S.bJ("Crocodile","NAK",null,null)
$.$get$bQ().push(m)
$.e0=m
m=new S.bJ("Iguana","thip",null,null)
$.$get$bQ().push(m)
$.ei=m
m=new S.bJ("Turtle","click",null,null)
$.$get$bQ().push(m)
$.f7=m
m=new S.bJ("Skeleton","rattle",null,null)
$.$get$bQ().push(m)
$.dM=m
m=new S.bJ("Robot","BEEP",null,null)
$.$get$bQ().push(m)
$.f5=m
m=new S.bJ("Chameleon","BLEP",null,null)
$.$get$bQ().push(m)
$.iy=m
m=new S.bJ("Axolotl","BARP",null,null)
$.$get$bQ().push(m)
$.tJ=m
m=new S.bJ("Lizard","bleb",null,null)
$.$get$bQ().push(m)
$.m_=m
m=new S.bJ("Snake","hiss",null,null)
$.$get$bQ().push(m)
$.tR=m
m=new S.bJ("Alligator","nak",null,null)
$.$get$bQ().push(m)
$.ix=m
m=new S.bJ("Mole","snuff",null,null)
$.$get$bQ().push(m)
$.wl=m
m=new S.bJ("Bird","tweet",null,null)
$.$get$bQ().push(m)
$.lZ=m
m=new S.bJ("Wolf","howl",null,null)
$.$get$bQ().push(m)
$.m5=m
m=new S.bJ("Newt","skitter",null,null)
$.$get$bQ().push(m)
$.wm=m
m=new S.bJ("Spider","skitter",null,null)
$.$get$bQ().push(m)
$.iE=m
m=new S.bJ("Cupid","flappa",null,null)
$.$get$bQ().push(m)
$.iz=m
m=new S.bJ("Dragon","roar",null,null)
$.$get$bQ().push(m)
$.hb=m
m=new S.ih("Prospitian","murmur",null,null)
$.$get$bQ().push(m)
$.Aj=m
m=new S.ih("Dersite","mutter",null,null)
$.$get$bQ().push(m)
$.Ag=m
m=new S.mr("Horror Terror","a;lkjdf",null,null)
$.$get$bQ().push(m)
$.Ai=m
$.Ak=H.a([$.tR,$.ix,$.wm,$.tP,$.ei,$.e0,$.f7,$.iy,$.tJ,$.m_],[S.bJ])
$.hg=new T.c6(0,"spices")
m=$.Am
$.f2=new T.c6(m,"fresh baked bread")
$.cz=new T.c6(m,"sweetness")
$.ca=new T.c6(m,"nature")
$.m4=new T.c6(0,"salt")
k=$.Al
$.d4=new T.c6(k,"rot")
$.Ah=new T.c6(k,"feet")
$.f4=new T.c6(0,"oil")
$.tL=new T.c6(0,"chlorine")
$.he=new T.c6(0,"nothing in particular")
$.eh=new T.c6(0,"gunpowder")
$.hd=new T.c6(0,"must")
$.cH=new T.c6(m,"zoo animals")
$.e1=new T.c6(k,"sweat")
$.iD=new T.c6(0,"ozone")
$.c9=new T.c6(0,"deceit")
$.dk=new T.c6(k,"blood")
$.f6=new T.c6(k,"smoke")
$.c1=new K.bW(k,"creepy")
$.aO=new K.bW(m,"calm")
$.cf=new K.bW(k,"frantic")
$.m1=new K.bW(0,"like nothing")
$.ce=new K.bW(m,"energizing")
$.cG=new K.bW(0,"studious")
$.dw=new K.bW(0,"dangerous")
$.dJ=new K.bW(0,"glamorous")
$.hf=new K.bW(0,"romantic")
$.dv=new K.bW(m,"creative")
$.m0=new K.bW(0,"lucky")
$.dx=new K.bW(0,"happy")
$.dK=new K.bW(0,"heroic")
$.d5=new K.bW(k,"stupid")
$.m0=new K.bW(0,"lucky")
$.wj=new K.bW(0,"claustrophobic")
$.m2=new K.bW(0,"overheated")
$.eg=new K.bW(k,"confusing")
$.cx=new K.bW(0,"contemplatative")
$.cV=new M.bD(0,"clanking")
$.cy=new M.bD(0,"laughing")
$.bj=new M.bD(m,"rustling")
$.ek=new M.bD(k,"screaming")
$.iB=new M.bD(k,"foot steps")
$.f3=new M.bD(k,"beeping")
$.wo=new M.bD(k,"whispering")
$.ef=new M.bD(0,"clacking")
$.cE=new M.bD(0,"applause")
$.ej=new M.bD(0,"jazz")
$.tN=new M.bD(0,"disco")
$.hc=new M.bD(0,"drums")
$.iA=new M.bD(0,"echoing")
$.m3=new M.bD(k,"roaring")
$.iC=new M.bD(k,"gunfire")
$.cF=new M.bD(0,"music")
$.tQ=new M.bD(0,"singing")
$.tK=new M.bD(0,"chanting")
$.f8=new M.bD(0,"whistling")
$.dl=new M.bD(m,"nature")
$.tM=new M.bD(0,"croaking")
$.dL=new M.bD(0,"silence")
$.tO=new M.bD(0,"pulsing")
$.wn=new M.bD(0,"ticking")
m=H.a([],p)
o=[X.F,P.V]
n=A.a2
l=E.O
k=[l]
j=[A.fT]
m=new S.n0(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.w(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Knight",3,!0,!1,!1)
$.GL=m
m=P.l(H.a([new E.O($.cl,0.4,!1)],k),l)
i=H.a([],p)
m=new S.ou(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.w(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Seer",6,!0,!1,!1)
$.GX=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kT("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.w(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Bard",9,!0,!1,!1)
$.GG=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.mo("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.w(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Heir",8,!0,!1,!1)
$.GJ=m
m=H.a([],p)
m=new U.nl(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.w(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Maid",0,!0,!1,!1)
$.GO=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.ol(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.w(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Rogue",4,!0,!1,!1)
$.GT=m
m=H.a([],p)
m=new V.nX(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.w(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Page",1,!0,!1,!1)
$.GR=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.ps(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.w(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Thief",7,!0,!1,!1)
$.H_=m
m=P.l(H.a([new E.O($.cl,0.1,!1)],k),l)
i=H.a([],p)
m=new R.pc(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.w(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Sylph",5,!0,!1,!1)
$.GZ=m
m=H.a([],p)
m=new N.od("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.w(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Prince",10,!0,!1,!1)
$.GS=m
m=P.l(H.a([new E.O($.cl,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pW("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.w(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Witch",11,!0,!1,!1)
$.H1=m
m=P.l(H.a([new E.O($.cl,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nk("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.w(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Mage",2,!0,!1,!1)
$.GN=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.O($.cl,3,!1),new E.O($.vc,-2,!1)],k),l)
e=H.a([],p)
m=new E.pS("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.w(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Waste",12,!1,!1,!1)
$.H0=m
m=H.a([],p)
m=new Y.or("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.w(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Scout",13,!1,!1,!1)
$.GV=m
m=P.l(H.a([new E.O($.cl,0.5,!1)],k),l)
i=H.a([],p)
m=new L.os("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.w(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Scribe",15,!1,!1,!1)
$.GW=m
m=P.l(H.a([new E.O($.cl,0.5,!1)],k),l)
i=H.a([],p)
m=new E.op(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.w(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Sage",14,!1,!1,!1)
$.GU=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.mm("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.w(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Guide",16,!1,!1,!1)
$.GI=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.O($.cl,3,!1)],k),l)
g=H.a([],p)
m=new Y.ml(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.w(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Grace",17,!1,!1,!1)
$.GH=m
m=P.l(H.a([new E.O($.cl,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nx("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.w(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Muse",18,!1,!1,!1)
$.GP=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.I(null,null,n)
h=P.l(H.a([new E.O($.cl,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.ni("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.w(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Lord",19,!1,!1,!1)
$.GM=m
m=P.l(H.a([new E.O($.cl,-0.1,!1),new E.O($.dz,1,!1)],k),l)
i=H.a([],p)
m=new Y.oB("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.w(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Smith",20,!1,!1,!1)
$.GY=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.l(H.a([new E.O($.cl,4,!1),new E.O($.vc,-3,!1)],k),l)
e=H.a([],p)
m=new X.mv("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.w(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a8("Human",21,!1,!1,!0)
$.GK=m
$.GQ=T.GF("Null",255,!1,!0,!1)
m=A.dH
i=P.C
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#00ff00"),!0)
h.j(0,$.b2,L.e("#EFEFEF"),!0)
h.j(0,$.b1,L.e("#DEDEDE"),!0)
h.j(0,$.bb,L.e("#FF2106"),!0)
h.j(0,$.ba,L.e("#B01200"),!0)
h.j(0,$.b4,L.e("#2F2F30"),!0)
h.j(0,$.b5,L.e("#1D1D1D"),!0)
h.j(0,$.b3,L.e("#080808"),!0)
h.j(0,$.b9,L.e("#030303"),!0)
h.j(0,$.b8,L.e("#242424"),!0)
h.j(0,$.b7,L.e("#333333"),!0)
h.j(0,$.b6,L.e("#141414"),!0)
g=P.l(H.a(["Frogs"],p),q)
f=P.l(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.l(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.l(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.l(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.l(H.a([new E.O($.dz,2,!0),new E.O($.eB,1,!0),new E.O($.hS,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new N.oE(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.al(0,"Space",!0,!1,!1)
$.zG=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#ff0000"),!0)
a.j(0,$.b2,L.e("#FF2106"),!0)
a.j(0,$.b1,L.e("#AD1604"),!0)
a.j(0,$.bb,L.e("#030303"),!0)
a.j(0,$.ba,L.e("#242424"),!0)
a.j(0,$.b4,L.e("#510606"),!0)
a.j(0,$.b5,L.e("#3C0404"),!0)
a.j(0,$.b3,L.e("#1F0000"),!0)
a.j(0,$.b9,L.e("#B70D0E"),!0)
a.j(0,$.b8,L.e("#970203"),!0)
a.j(0,$.b7,L.e("#8E1516"),!0)
a.j(0,$.b6,L.e("#640707"),!0)
b=P.l(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.l(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.l(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.l(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.l(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.l(H.a([new E.O($.hR,2,!0),new E.O($.hS,1,!0),new E.O($.ft,-2,!0)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new N.pt(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.al(1,"Time",!0,!1,!1)
$.zH=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#3399ff"),!0)
h.j(0,$.b2,L.e("#10E0FF"),!0)
h.j(0,$.b1,L.e("#00A4BB"),!0)
h.j(0,$.bb,L.e("#FEFD49"),!0)
h.j(0,$.ba,L.e("#D6D601"),!0)
h.j(0,$.b4,L.e("#0052F3"),!0)
h.j(0,$.b5,L.e("#0046D1"),!0)
h.j(0,$.b3,L.e("#003396"),!0)
h.j(0,$.b9,L.e("#0087EB"),!0)
h.j(0,$.b8,L.e("#0070ED"),!0)
h.j(0,$.b7,L.e("#006BE1"),!0)
h.j(0,$.b6,L.e("#0054B0"),!0)
g=P.l(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.l(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.l(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.l(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.l(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.l(H.a([new E.O($.hS,2,!0),new E.O($.dd,1,!0),new E.O($.eB,-1,!0),new E.O($.eC,-1,!0),new E.O($.cl,0.05,!1)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new T.l0(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.al(2,"Breath",!0,!1,!1)
$.zt=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#003300"),!0)
a.j(0,$.b2,L.e("#0F0F0F"),!0)
a.j(0,$.b1,L.e("#010101"),!0)
a.j(0,$.bb,L.e("#E8C15E"),!0)
a.j(0,$.ba,L.e("#C7A140"),!0)
a.j(0,$.b4,L.e("#1E211E"),!0)
a.j(0,$.b5,L.e("#141614"),!0)
a.j(0,$.b3,L.e("#0B0D0B"),!0)
a.j(0,$.b9,L.e("#204020"),!0)
a.j(0,$.b8,L.e("#11200F"),!0)
a.j(0,$.b7,L.e("#192C16"),!0)
a.j(0,$.b6,L.e("#121F10"),!0)
b=P.l(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.l(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.l(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.l(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.l(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.l(H.a([new E.O($.dz,2,!0),new E.O($.ft,1,!0),new E.O($.hR,-1,!0),new E.O($.eB,-1,!0),new E.O($.cl,0.01,!1)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new U.lu(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.al(3,"Doom",!0,!1,!1)
$.zu=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#993300"),!0)
h.j(0,$.b2,L.e("#BA1016"),!0)
h.j(0,$.b1,L.e("#820B0F"),!0)
h.j(0,$.bb,L.e("#381B76"),!0)
h.j(0,$.ba,L.e("#1E0C47"),!0)
h.j(0,$.b4,L.e("#290704"),!0)
h.j(0,$.b5,L.e("#230200"),!0)
h.j(0,$.b3,L.e("#110000"),!0)
h.j(0,$.b9,L.e("#3D190A"),!0)
h.j(0,$.b8,L.e("#2C1207"),!0)
h.j(0,$.b7,L.e("#5C2913"),!0)
h.j(0,$.b6,L.e("#4C1F0D"),!0)
g=P.l(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.l(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.l(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.l(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.l(H.a([new E.O($.eC,2,!0),new E.O($.dd,1,!0),new E.O($.dz,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new T.kZ(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.al(4,"Blood",!0,!1,!1)
$.zs=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#ff3399"),!0)
a.j(0,$.b2,L.e("#BD1864"),!0)
a.j(0,$.b1,L.e("#780F3F"),!0)
a.j(0,$.bb,L.e("#1D572E"),!0)
a.j(0,$.ba,L.e("#11371D"),!0)
a.j(0,$.b4,L.e("#4C1026"),!0)
a.j(0,$.b5,L.e("#3C0D1F"),!0)
a.j(0,$.b3,L.e("#260914"),!0)
a.j(0,$.b9,L.e("#6B0829"),!0)
a.j(0,$.b8,L.e("#4A0818"),!0)
a.j(0,$.b7,L.e("#55142A"),!0)
a.j(0,$.b6,L.e("#3D0E1E"),!0)
b=P.l(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.l(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.l(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.l(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.l(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.l(H.a([new E.O($.eC,1,!0),new E.kM(null,1,!0)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new T.mn(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.al(5,"Heart",!0,!1,!1)
$.zw=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#3da35a"),!0)
h.j(0,$.b2,L.e("#06FFC9"),!0)
h.j(0,$.b1,L.e("#04A885"),!0)
h.j(0,$.bb,L.e("#6E0E2E"),!0)
h.j(0,$.ba,L.e("#4A0818"),!0)
h.j(0,$.b4,L.e("#1D572E"),!0)
h.j(0,$.b5,L.e("#164524"),!0)
h.j(0,$.b3,L.e("#11371D"),!0)
h.j(0,$.b9,L.e("#3DA35A"),!0)
h.j(0,$.b8,L.e("#2E7A43"),!0)
h.j(0,$.b7,L.e("#3B7E4F"),!0)
h.j(0,$.b6,L.e("#265133"),!0)
g=P.l(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.l(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.l(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.l(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.l(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.l(H.a([new E.O($.ft,2,!0),new E.O($.hR,1,!0),new E.O($.dz,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new V.nw(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.al(6,"Mind",!0,!1,!1)
$.zC=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#ff9933"),!0)
a.j(0,$.b2,L.e("#FEFD49"),!0)
a.j(0,$.b1,L.e("#FEC910"),!0)
a.j(0,$.bb,L.e("#10E0FF"),!0)
a.j(0,$.ba,L.e("#00A4BB"),!0)
a.j(0,$.b4,L.e("#FA4900"),!0)
a.j(0,$.b5,L.e("#E94200"),!0)
a.j(0,$.b3,L.e("#C33700"),!0)
a.j(0,$.b9,L.e("#FF8800"),!0)
a.j(0,$.b8,L.e("#D66E04"),!0)
a.j(0,$.b7,L.e("#E76700"),!0)
a.j(0,$.b6,L.e("#CA5B00"),!0)
b=P.l(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.l(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.l(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.l(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.l(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.l(H.a([new E.O($.hQ,2,!0),new E.O($.ft,1,!0),new E.O($.dd,-1,!0),new E.O($.eB,-1,!0),new E.O($.cl,0.2,!1)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new G.n6(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.al(7,"Light",!0,!1,!1)
$.zB=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#000066"),!0)
h.j(0,$.b2,L.e("#0B1030"),!0)
h.j(0,$.b1,L.e("#04091A"),!0)
h.j(0,$.bb,L.e("#CCC4B5"),!0)
h.j(0,$.ba,L.e("#A89F8D"),!0)
h.j(0,$.b4,L.e("#00164F"),!0)
h.j(0,$.b5,L.e("#00103C"),!0)
h.j(0,$.b3,L.e("#00071A"),!0)
h.j(0,$.b9,L.e("#033476"),!0)
h.j(0,$.b8,L.e("#02285B"),!0)
h.j(0,$.b7,L.e("#004CB2"),!0)
h.j(0,$.b6,L.e("#003E91"),!0)
g=P.l(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.l(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.l(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.l(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.l(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.l(H.a([new E.fO(D.vd(),null,3,!0),new E.fO(D.vd(),null,-1,!0),new E.O($.hR,-1,!0),new E.O($.cl,0.2,!1)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new Q.pR(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.al(8,"Void",!0,!1,!1)
$.zI=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#9900cc"),!0)
a.j(0,$.b2,L.e("#974AA7"),!0)
a.j(0,$.b1,L.e("#6B347D"),!0)
a.j(0,$.bb,L.e("#3D190A"),!0)
a.j(0,$.ba,L.e("#2C1207"),!0)
a.j(0,$.b4,L.e("#7C3FBA"),!0)
a.j(0,$.b5,L.e("#6D34A6"),!0)
a.j(0,$.b3,L.e("#592D86"),!0)
a.j(0,$.b9,L.e("#381B76"),!0)
a.j(0,$.b8,L.e("#1E0C47"),!0)
a.j(0,$.b7,L.e("#281D36"),!0)
a.j(0,$.b6,L.e("#1D1526"),!0)
b=P.l(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.l(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.l(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.l(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.O($.hT,2,!0),new E.O($.hS,1,!0),new E.O($.dd,-1,!0),new E.O($.eC,-1,!0),new E.O($.cl,0.01,!1)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new E.og(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.al(9,"Rage",!0,!1,!1)
$.zE=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#ffcc66"),!0)
h.j(0,$.b2,L.e("#FDF9EC"),!0)
h.j(0,$.b1,L.e("#D6C794"),!0)
h.j(0,$.bb,L.e("#164524"),!0)
h.j(0,$.ba,L.e("#06280C"),!0)
h.j(0,$.b4,L.e("#FFC331"),!0)
h.j(0,$.b5,L.e("#F7BB2C"),!0)
h.j(0,$.b3,L.e("#DBA523"),!0)
h.j(0,$.b9,L.e("#FFE094"),!0)
h.j(0,$.b8,L.e("#E8C15E"),!0)
h.j(0,$.b7,L.e("#F6C54A"),!0)
h.j(0,$.b6,L.e("#EDAF0C"),!0)
g=P.l(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.l(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.l(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.l(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.l(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.l(H.a([new E.O($.dd,2,!0),new E.O($.hQ,1,!0),new E.fO(D.vd(),null,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new X.mq(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.al(10,"Hope",!0,!1,!1)
$.zx=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#494132"),!0)
a.j(0,$.b2,L.e("#76C34E"),!0)
a.j(0,$.b1,L.e("#4F8234"),!0)
a.j(0,$.bb,L.e("#00164F"),!0)
a.j(0,$.ba,L.e("#00071A"),!0)
a.j(0,$.b4,L.e("#605542"),!0)
a.j(0,$.b5,L.e("#494132"),!0)
a.j(0,$.b3,L.e("#2D271E"),!0)
a.j(0,$.b9,L.e("#CCC4B5"),!0)
a.j(0,$.b8,L.e("#A89F8D"),!0)
a.j(0,$.b7,L.e("#A29989"),!0)
a.j(0,$.b6,L.e("#918673"),!0)
b=P.l(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.l(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.l(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.l(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.l(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.l(H.a([new E.O($.eB,2,!0),new E.O($.hT,1,!0),new E.O($.dz,-2,!0)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new K.n5(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.al(11,"Life",!0,!1,!1)
$.zA=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#9630BF"),!0)
h.j(0,$.b2,L.e("#cc87e8"),!0)
h.j(0,$.b1,L.e("#9545b7"),!0)
h.j(0,$.bb,L.e("#ae769b"),!0)
h.j(0,$.ba,L.e("#8f577c"),!0)
h.j(0,$.b4,L.e("#9630bf"),!0)
h.j(0,$.b5,L.e("#693773"),!0)
h.j(0,$.b3,L.e("#4c2154"),!0)
h.j(0,$.b9,L.e("#fcf9bd"),!0)
h.j(0,$.b8,L.e("#e0d29e"),!0)
h.j(0,$.b7,L.e("#bdb968"),!0)
h.j(0,$.b6,L.e("#ab9b55"),!0)
g=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.l(H.a([new E.O($.dz,3,!0),new E.O($.dd,-2,!0)],k),l)
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#FF9B00"),!0)
a.j(0,$.b2,L.e("#FF9B00"),!0)
a.j(0,$.b1,L.e("#FF8700"),!0)
a.j(0,$.bb,L.e("#7F7F7F"),!0)
a.j(0,$.ba,L.e("#727272"),!0)
a.j(0,$.b4,L.e("#A3A3A3"),!0)
a.j(0,$.b5,L.e("#999999"),!0)
a.j(0,$.b3,L.e("#898989"),!0)
a.j(0,$.b9,L.e("#EFEFEF"),!0)
a.j(0,$.b8,L.e("#DBDBDB"),!0)
a.j(0,$.b7,L.e("#C6C6C6"),!0)
a.j(0,$.b6,L.e("#ADADAD"),!0)
a=new Z.lv(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.al(12,"Dream",!1,!1,!1)
$.zv=a
a=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b0,L.e("#9630BF"),!0)
a.j(0,$.b2,L.e("#cc87e8"),!0)
a.j(0,$.b1,L.e("#9545b7"),!0)
a.j(0,$.bb,L.e("#ae769b"),!0)
a.j(0,$.ba,L.e("#8f577c"),!0)
a.j(0,$.b4,L.e("#9630bf"),!0)
a.j(0,$.b5,L.e("#693773"),!0)
a.j(0,$.b3,L.e("#4c2154"),!0)
a.j(0,$.b9,L.e("#fcf9bd"),!0)
a.j(0,$.b8,L.e("#e0d29e"),!0)
a.j(0,$.b7,L.e("#bdb968"),!0)
a.j(0,$.b6,L.e("#ab9b55"),!0)
b=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.l(H.a([new E.O($.dz,3,!0),new E.O($.dd,-2,!0)],k),l)
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#FF9B00"),!0)
h.j(0,$.b2,L.e("#FF9B00"),!0)
h.j(0,$.b1,L.e("#FF8700"),!0)
h.j(0,$.bb,L.e("#7F7F7F"),!0)
h.j(0,$.ba,L.e("#727272"),!0)
h.j(0,$.b4,L.e("#A3A3A3"),!0)
h.j(0,$.b5,L.e("#999999"),!0)
h.j(0,$.b3,L.e("#898989"),!0)
h.j(0,$.b9,L.e("#EFEFEF"),!0)
h.j(0,$.b8,L.e("#DBDBDB"),!0)
h.j(0,$.b7,L.e("#C6C6C6"),!0)
h.j(0,$.b6,L.e("#ADADAD"),!0)
h=new Q.n3(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.al(13,"Law",!1,!1,!0)
$.zz=h
h=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b0,L.e("#ffff00"),!0)
h.j(0,$.b2,L.e("#ffff00"),!0)
h.j(0,$.b1,L.e("#ffff00"),!0)
h.j(0,$.bb,L.e("#508b2d"),!0)
h.j(0,$.ba,L.e("#316c0d"),!0)
h.j(0,$.b4,L.e("#dddd00"),!0)
h.j(0,$.b5,L.e("#afaf00"),!0)
h.j(0,$.b3,L.e("#8f8f00"),!0)
h.j(0,$.b9,L.e("#ff0000"),!0)
h.j(0,$.b8,L.e("#a8000a"),!0)
h.j(0,$.b7,L.e("#b8151f"),!0)
h.j(0,$.b6,L.e("#8c1d1d"),!0)
g=P.l(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
f=P.l(H.a(["Juice","Joke","Jespacito"],p),q)
e=P.l(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
d=P.l(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
c=P.l(H.a([new E.O($.cl,13,!0)],k),l)
b=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b0,L.e("#FF9B00"),!0)
b.j(0,$.b2,L.e("#FF9B00"),!0)
b.j(0,$.b1,L.e("#FF8700"),!0)
b.j(0,$.bb,L.e("#7F7F7F"),!0)
b.j(0,$.ba,L.e("#727272"),!0)
b.j(0,$.b4,L.e("#A3A3A3"),!0)
b.j(0,$.b5,L.e("#999999"),!0)
b.j(0,$.b3,L.e("#898989"),!0)
b.j(0,$.b9,L.e("#EFEFEF"),!0)
b.j(0,$.b8,L.e("#DBDBDB"),!0)
b.j(0,$.b7,L.e("#C6C6C6"),!0)
b.j(0,$.b6,L.e("#ADADAD"),!0)
b=new Z.mY(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
b.al(14,"Juice",!1,!1,!0)
$.zy=b
b=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
b.j(0,$.b0,L.e("#00ff00"),!0)
b.j(0,$.b2,L.e("#00ff00"),!0)
b.j(0,$.b1,L.e("#00ff00"),!0)
b.j(0,$.bb,L.e("#00ff00"),!0)
b.j(0,$.ba,L.e("#00cf00"),!0)
b.j(0,$.b4,L.e("#171717"),!0)
b.j(0,$.b5,L.e("#080808"),!0)
b.j(0,$.b3,L.e("#080808"),!0)
b.j(0,$.b9,L.e("#616161"),!0)
b.j(0,$.b8,L.e("#3b3b3b"),!0)
b.j(0,$.b7,L.e("#4a4a4a"),!0)
b.j(0,$.b6,L.e("#292929"),!0)
c=P.l(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
d=P.l(H.a(["Shogun"],p),q)
e=P.l(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.O($.hT,13,!0)],k),l)
m=new L.aS(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
m.j(0,$.b0,L.e("#FF9B00"),!0)
m.j(0,$.b2,L.e("#FF9B00"),!0)
m.j(0,$.b1,L.e("#FF8700"),!0)
m.j(0,$.bb,L.e("#7F7F7F"),!0)
m.j(0,$.ba,L.e("#727272"),!0)
m.j(0,$.b4,L.e("#A3A3A3"),!0)
m.j(0,$.b5,L.e("#999999"),!0)
m.j(0,$.b3,L.e("#898989"),!0)
m.j(0,$.b9,L.e("#EFEFEF"),!0)
m.j(0,$.b8,L.e("#DBDBDB"),!0)
m.j(0,$.b7,L.e("#C6C6C6"),!0)
m.j(0,$.b6,L.e("#ADADAD"),!0)
j=new K.oq(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
j.al(15,"Sauce",!1,!0,!1)
$.zF=j
$.zD=L.zr(255,"Null",!1,!0,!1)
j=P.l(H.a([new E.O($.dd,1,!0),new E.O($.hQ,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
g=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
f=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
e=H.a(["nobody"],p)
d=P.l(H.a([],k),l)
c=H.a(["Nobody"],p)
b=H.a(["Nobody"],p)
q=new F.ny(j,q,m,g,f,!1,e,d,c,b,1,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"loud","musical","Music")
q.F()
q.G()
B.cP(q)
$.AI=q
q=P.l(H.a([new E.O($.ft,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kI(q,m,j,i,h,!1,g,f,e,d,13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"nerdy","smart","Academic")
q.F()
q.G()
B.cP(q)
$.AB=q
q=P.l(H.a([new E.O($.hT,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kN(q,m,j,i,h,!1,g,f,e,d,4,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"dumb","athletic","Athletic")
q.F()
q.G()
B.cP(q)
$.AC=q
q=P.l(H.a([new E.O($.hR,-1,!0),new E.O($.hQ,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.l8(q,m,j,i,h,!1,g,f,e,d,0,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"dorky","funny","Comedy")
q.F()
q.G()
B.cP(q)
$.AD=q
q=P.l(H.a([new E.O($.dd,-1,!0),new E.O($.eB,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.ll(q,m,j,i,h,!1,g,f,e,d,2,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"pretentious","cultured","Culture")
q.F()
q.G()
B.cP(q)
$.AE=q
q=P.l(H.a([new E.O($.dd,1,!0),new E.O($.eC,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lt(q,m,j,i,h,!1,g,f,e,d,8,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"boring","domestic","Domestic")
q.F()
q.G()
B.cP(q)
$.AF=q
q=P.l(H.a([new E.O($.hQ,1,!0),new E.O($.dz,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lX(q,m,j,i,h,!1,g,f,e,d,7,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"whimpy","imaginative","Fantasy")
q.F()
q.G()
B.cP(q)
$.AG=q
q=P.l(H.a([new E.O($.hT,1,!0),new E.O($.eB,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mZ(q,m,j,i,h,!1,g,f,e,d,6,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"harsh","fair-minded","Justice")
q.F()
q.G()
B.cP(q)
$.AH=q
q=P.l(H.a([new E.O($.hS,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.o9(q,m,j,i,h,!1,g,f,e,d,9,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"frivolous","geeky","PopCulture")
q.F()
q.G()
B.cP(q)
$.AK=q
q=P.l(H.a([new E.O($.eC,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.om(q,m,j,i,h,!1,g,f,e,d,12,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"obsessive","romantic","Romantic")
q.F()
q.G()
B.cP(q)
$.AL=q
q=P.l(H.a([new E.O($.dd,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.oC(q,m,j,i,h,!1,g,f,e,d,11,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"shallow","extroverted","Social")
q.F()
q.G()
B.cP(q)
$.AM=q
q=P.l(H.a([new E.O($.eC,-1,!0),new E.O($.dd,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.pi(q,m,j,i,h,!1,g,f,e,d,5,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"terrible","honest","Terrible")
q.F()
q.G()
B.cP(q)
$.AO=q
q=P.l(H.a([new E.O($.ft,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.q0(q,m,j,i,h,!1,g,f,e,d,3,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"wordy","lettered","Writing")
q.F()
q.G()
B.cP(q)
$.AP=q
q=P.l(H.a([new E.O($.dz,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.ph(q,m,j,i,h,!1,g,f,e,d,10,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"awkward","techy","Technology")
q.F()
q.G()
B.cP(q)
$.AN=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hn(!0,q,l,k,p,-13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"","","Null")
q.F()
q.G()
B.cP(q)
$.AJ=q
A.uB()
t=3
return P.bP(Y.nz(),$async$rU)
case 3:case 1:return P.be(r,s)}})
return P.bf($async$rU,s)}},V={lt:function lt(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},mf:function mf(a){this.a=a},nw:function nw(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
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
_.x2=x2},nX:function nX(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},pi:function pi(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Ae:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.du(new P.cd(""),0,0)
t.ah(a,8)
s=Math.pow(256,e)
c.toString
r=H.cI(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.u(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.u(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ah(n-1,p)
t.ah(a,8)}return t.bb(b)},
Ad:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cD(c)
s=new Uint8Array(t)
r=new B.dj(null,0)
r.a=J.dX(a,b)
for(q=e*8,p=0;p<c;){o=r.aa(q)+1
n=r.aa(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.u(s,l)
s[l]=n}p+=o}return s},
tE:function(a){return new V.lD(a)},
tD:function(a){return new V.lC(a)},
Aa:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.du(new P.cd(""),0,0)
t.ah(a,8)
s=d.gd_()
r=C.f.am(Math.log(H.kv(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cI(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.u(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.u(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ah(m-1,o)
t.ah(a,r)}return t.bb(b)},
A9:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dj(null,0)
p.a=J.dX(a,b)
for(r=e*8,o=0;o<c;){n=p.aa(r)+1
m=p.aa(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.u(s,k)
s[k]=m}o+=n}return s},
tC:function(a){return new V.lB(a)},
tB:function(a){return new V.lA(a)},
Ac:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.du(new P.cd(""),0,0)
t.ah(a,8)
s=d.gd_()
r=C.f.am(Math.log(H.kv(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cI(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.u(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.u(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.am(Math.log(n)/0.6931471805599453)+1
t.ah(k-1,5)
t.ah(n-1,k)
t.ah(a,r)}return t.bb(b)},
Ab:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dj(null,0)
p.a=J.dX(a,b)
for(o=0;o<c;){n=p.aa(p.aa(5)+1)+1
m=p.aa(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
lD:function lD(a){this.a=a},
lC:function lC(a){this.a=a},
lB:function lB(a){this.a=a},
lA:function lA(a){this.a=a}},Z={lv:function lv(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
_.R=R
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
Aq:function(){var t,s
if(!$.wp)$.wp=!0
else return
t=[P.y]
s=new Y.pn(H.a([],t))
$.tT=s
Z.cO(s,"txt",null)
Z.cO($.tT,"vert","x-shader/x-vertex")
Z.cO($.tT,"frag","x-shader/x-fragment")
$.Ao=new Y.oh(H.a([],t))
$.wr=new Y.l2(H.a([],t))
s=new B.q5(H.a([],t))
$.wu=s
Z.cO(s,"zip",null)
Z.cO($.wu,"bundle",null)
s=new U.pX(H.a([],t))
$.wt=s
Z.cO(s,"words",null)
s=new Q.o7(H.a([],t))
$.ws=s
Z.cO(s,"png",null)
Z.cO($.ws,"jpg","image/jpeg")
$.Aw=new Q.o4(H.a([],t))
s=new M.oI(H.a([],t))
$.Ax=s
Z.cO(s,"psprite",null)
s=new V.mf(H.a([],t))
$.tS=s
Z.cO(s,"ttf",null)
Z.cO($.tS,"otf",null)
Z.cO($.tS,"woff",null)
s=new Y.nN(null,H.a([],t))
$.At=s
Z.cO(s,"obj",null)
s=new U.nj(H.a([],t))
$.Ar=s
Z.cO(s,"mp3",null)
$.As=new U.p3(H.a([],t))
s=new U.nS(H.a([],t))
$.Au=s
Z.cO(s,"ogg",null)
$.Av=new U.p4(H.a([],t))},
cO:function(a,b,c){$.$get$hi().i(0,b,new Z.iv(a,c,[null,null]))
a.a.push(b)},
wq:function(a){var t
if($.$get$hi().V(0,a)){t=$.$get$hi().n(0,a)
if(t.a instanceof O.c2)return t
throw H.j("File format for extension ."+H.x(a)+" does not match expected types.")}throw H.j("No file format found for extension ."+H.x(a))},
Ap:function(a){var t=$.$get$hi()
t=t.gai(t)
return new H.e9(t,new Z.mh(a),[H.an(t,"n",0)])},
mh:function mh(a){this.a=a},
iv:function iv(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mY:function mY(y1,y2,p,q,t,u,v,w,A,B,D,J,N,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
ni:function ni(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.J=J
_.N=N
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
us:function us(){},
uo:function uo(){},
up:function up(){}},X={iw:function iw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},ig:function ig(){},mq:function mq(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
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
_.r2=r2},F:function F(a,b,c){this.a=a
this.b=b
this.c=c}},N={a8:function a8(){},mZ:function mZ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},od:function od(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ol:function ol(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oC:function oC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oE:function oE(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
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
_.x2=x2},pt:function pt(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
_.R=R
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
Gg:function(a){var t,s,r,q,p,o,n,m,l
t=J.cv(a)
s=new W.kh(document.querySelectorAll("link"),[null])
for(r=new H.dN(s,s.gm(s),0,null,[null]);r.E();){q=r.d
p=J.am(q)
if(!!p.$ishv&&q.rel==="stylesheet"){o=$.$get$o2()
H.x(p.ga7(q))
o.toString
o=t.length
n=Math.min(o,J.c0(p.ga7(q)))
for(m=0;m<n;++m){if(m>=o)return H.u(t,m)
if(t[m]!==J.fI(p.ga7(q),m)){l=C.c.ag(t,m)
$.$get$o2().toString
return l.split("/").length-1}continue}}}$.$get$o2().aM(C.h,"Didn't find a css link to derive relative path")
return 0},
uR:function(){var t=P.xS()
if(!$.$get$o1().V(0,t))$.$get$o1().i(0,t,N.Gg(t))
return $.$get$o1().n(0,t)}},E={iK:function iK(){},nR:function nR(){},O:function O(a,b,c){this.a=a
this.b=b
this.c=c},fO:function fO(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kM:function kM(a,b,c){this.a=a
this.b=b
this.c=c},nx:function nx(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},og:function og(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
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
_.x2=x2},op:function op(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},pS:function pS(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},B={mo:function mo(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
cP:function(a){var t=a.f
if($.$get$mC().V(0,t))throw H.j("Duplicate aspect id for "+a.C(0)+": "+t+" is already registered for "+J.cv($.$get$mC().n(0,t))+".")
$.$get$mC().i(0,t,a)},
hn:function hn(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
q5:function q5(a){this.a=a},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a,b){this.a=a
this.b=b},
HN:function(a){return a.b_(0)},
Hd:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=P.y
s=P.bZ(t,P.V)
r=B.cZ
q=new B.eI(s,P.bZ(t,t),J.z2(a),!1,null,null)
q.cn(null,null,r)
for(p=J.z1(a.gcW()),p=p.gS(p);p.E();){o=p.gI()
s.i(0,o,J.fI(a.gcW(),o))}for(s=a.ghB(),s=s.gai(s),s=s.gS(s),p=q.d,n=a.d;s.E();){o=s.gI()
p.i(0,o,n.n(0,o))}for(s=a.b,p=s.length,r=[r],m=0;m<s.length;s.length===p||(0,H.bF)(s),++m){l=s[m]
n=J.aq(l)
k=n.gY(l)
j=J.za(k)
k=k.gbZ()
i=new B.cZ(k)
if(k==null){k=P.bZ(t,t)
i.a=k}k.i(0,"MAIN",j)
n=n.gbd(l)
C.b.h(q.b,new Q.h(i,n,r))}return q},
pk:function pk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pm:function pm(a){this.a=a},
pl:function pl(a,b){this.a=a
this.b=b},
cZ:function cZ(a){this.a=a},
eI:function eI(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
eJ:function eJ(a,b){this.a=a
this.b=b}},Q={my:function my(){},o7:function o7(a){this.a=a},o4:function o4(a){this.a=a},n3:function n3(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
_.R=R
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},om:function om(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pR:function pR(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
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
_.x2=x2},jP:function jP(){},
I:function(a,b,c){var t=new Q.dT(null,null,[c])
t.cn(a,b,c)
return t},
vq:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.I(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dW(a,"$isn",[e],"$asn"))if(H.dW(a,"$iscC",[e],"$ascC"))for(s=J.cT(a.gbp()),r=0;s.E();){q=s.gI()
p=t.b
o=p.length
if(r>=o)return H.u(p,r)
p[r]=q;++r}else for(s=a.gS(a),p=[H.M(t,0)],r=0;s.E();){n=s.gI()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.u(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gS(a),p=[e],o=[H.M(t,0)];s.E();){l=s.gI()
if(H.I3(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.u(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dW(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.u(m,0)
m[0]=l}else throw H.j("Invalid entry type "+H.x(J.vT(l))+" for WeightedList<"+H.x(H.c_(H.dB(e)))+">. Should be "+H.x(H.c_(H.dB(e)))+" or WeightPair<"+H.x(H.c_(H.dB(e)))+">.")}return t},
vr:function(a,b,c,d){return new Q.k6(J.vV(a.gbp(),new Q.pV(c,d,b)),null,[c,d])},
cC:function cC(){},
dT:function dT(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hZ:function hZ(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eL:function eL(){},
hY:function hY(){},
pU:function pU(a,$ti){this.a=a
this.$ti=$ti},
k6:function k6(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pV:function pV(a,b,c){this.a=a
this.b=b
this.c=c},
ot:function(){var t=0,s=P.bc(),r
var $async$ot=P.bg(function(a,b){if(a===1)return P.bd(b,s)
while(true)switch(t){case 0:t=3
return P.bP(A.hy("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$ot)
case 3:r=A.hy("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$ot,s)}},G={n6:function n6(y1,y2,p,q,t,u,v,w,A,B,D,J,N,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.N=N
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
_.x2=x2},o9:function o9(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
zR:function(a){var t,s,r,q,p,o,n,m,l
t=G.a1
s=P.jA(a,t)
r=P.a0(null,null,null,t)
q=H.a([],[G.d])
for(t=G.FU(),p=J.cT(t.a),t=new H.k7(p,t.b,[H.M(t,0)]);t.E();){o=p.gI()
if(o.eO(s))q.push(o)}C.b.f6(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bF)(q),++n){o=q[n]
if(o.eO(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bF)(p),++l)s.an(0,p[l])}}if(s.a!==0)r.at(0,s)
return r},
FU:function(){var t=$.$get$b()
t.toString
return new H.e9(t,new G.mO(),[H.M(t,0)])},
a1:function a1(){},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a,b,c){this.a=a
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
mO:function mO(){}},F={ny:function ny(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},q0:function q0(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
G_:function(a){if(a===C.i){window
return C.j.gau(C.j)}if(a===C.h){window
return C.j.giG()}if(a===C.a5){window
return C.j.ghW()}return P.I7()},
hz:function hz(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
ux:function ux(){},
A8:function(a,b,c,d){var t,s,r,q
t=new B.du(new P.cd(""),0,0)
t.ah(a,8)
c.toString
s=H.cI(c,0,null)
for(r=s.length,q=0;q<r;++q)t.c0(s[q])
return t.bb(b)},
A7:function(a,b,c,d){var t,s,r,q,p
t=H.cD(c)
s=new Uint8Array(t)
r=new B.dj(null,0)
r.a=J.dX(a,b)
for(q=0;q<c;++q){p=r.c9()
if(q>=t)return H.u(s,q)
s[q]=p}return s},
A6:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.du(new P.cd(""),0,0)
t.ah(a,8)
s=d.gd_()
r=C.f.am(Math.log(H.kv(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cI(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.u(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.u(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.c0(o-1)
t.ah(a,r)}return t.bb(b)},
A5:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cD(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dj(null,0)
p.a=J.dX(a,b)
for(o=0;o<c;){n=p.c9()+1
m=p.aa(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
A4:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.du(new P.cd(""),0,0)
t.ah(a,8)
c.toString
s=H.cI(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.u(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.u(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.c0(p-1)
t.c0(a)}return t.bb(b)},
A3:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cD(c)
s=new Uint8Array(t)
r=new B.dj(null,0)
r.a=J.dX(a,b)
for(q=0;q<c;){p=r.c9()+1
o=r.c9()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.u(s,m)
s[m]=o}q+=p}return s}},R={
GB:function(a){var t,s
if(a.gm(a).aC(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.giN(s).giY().eu("checking for two players, ps is "+H.x(a)+", ret is "+t)
return t},
Gp:function(a){a.gae(a).gc1()
return!1},
GA:function(a){a.gae(a).gc1()
return!1},
Gz:function(a){a.gae(a).gc1()
return!1},
Gy:function(a){return a.gae(a).gbx().giX()},
Gw:function(a){return a.gae(a).gbx().giV()},
Gv:function(a){return a.gae(a).gbx().giU()},
Gs:function(a){return a.gae(a).gbx().giS()},
Gu:function(a){return a.gae(a).gbx().giT()},
Gx:function(a){return a.gae(a).gbx().giW()},
Gt:function(a){var t=a.gae(a)
t.gc1()
t.gc1()
return!1},
Gq:function(a){return!0},
Gr:function(a){a.gae(a).giP()
return!1},
of:function of(){},
Z:function Z(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
bC:function bC(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
pc:function pc(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
uQ:function uQ(){},
uP:function uP(){}},D={ph:function ph(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
H7:function(){if($.xA)return
$.xA=!0
var t=new D.cK("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=0
$.vc=t
t=new D.cK("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.H6=t
t=new D.k9(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=2.5
t.Q=1
$.hT=t
t=new D.k9(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=2.5
$.eB=t
t=new D.cK("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.H5=t
t=new D.cK("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.hS=t
t=new D.oj("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.eC=t
t=new D.cK("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.dd=t
t=new D.cK("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.ft=t
t=new D.cK("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.hQ=t
t=new D.cK("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.hR=t
t=new D.cK("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.dz=t
t=new D.cK("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.cl=t},
vd:function(){var t=$.$get$cQ()
return new H.e9(t,new D.oK(),[H.M(t,0)])},
oK:function oK(){},
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
k9:function k9(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
oj:function oj(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
H.uu.prototype={}
J.f.prototype={
U:function(a,b){return a===b},
ga6:function(a){return H.eu(a)},
C:function(a){return H.ob(a)},
gab:function(a){return new H.dS(H.kz(a),null)},
$ishh:1,
$isab:1,
$isfm:1,
$isab:1,
$ismU:1,
$isf:1,
$ismU:1,
$isf:1,
$ishB:1,
$isab:1}
J.mS.prototype={
C:function(a){return String(a)},
ga6:function(a){return a?519018:218159},
gab:function(a){return C.al},
$iscS:1}
J.mT.prototype={
U:function(a,b){return null==b},
C:function(a){return"null"},
ga6:function(a){return 0},
gab:function(a){return C.af},
$iscB:1}
J.ht.prototype={
ga6:function(a){return 0},
gab:function(a){return C.ae},
C:function(a){return String(a)},
$ismU:1,
h:function(a,b){return a.add(b)},
an:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gc6:function(a){return a.left},
gcd:function(a){return a.top},
geb:function(a){return a.attributes},
saj:function(a,b){return a.type=b},
gbe:function(a){return a.width},
gb7:function(a){return a.height},
gaI:function(a){return a.value},
ie:function(a,b){return a.parse(b)},
f4:function(a,b){return a.setLogging(b)},
f5:function(a,b){return a.setMaterials(b)}}
J.o6.prototype={}
J.eG.prototype={}
J.ep.prototype={
C:function(a){var t=a[$.$get$w7()]
return t==null?this.fb(a):J.cv(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.en.prototype={
c4:function(a,b){if(!!a.immutable$list)throw H.j(new P.S(b))},
cP:function(a,b){if(!!a.fixed$length)throw H.j(new P.S(b))},
h:function(a,b){this.cP(a,"add")
a.push(b)},
a9:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.j(new P.by(a))}},
aB:function(a,b){return new H.es(a,b,[H.M(a,0),null])},
aL:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.x(a[r])
if(r>=t)return H.u(s,r)
s[r]=q}return s.join(b)},
di:function(a,b){return H.ve(a,b,null,H.M(a,0))},
hL:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.j(new P.by(a))}return s},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
cl:function(a,b,c){if(b<0||b>a.length)throw H.j(P.bw(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.j(H.bx(c))
if(c<b||c>a.length)throw H.j(P.bw(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.M(a,0)])
return H.a(a.slice(b,c),[H.M(a,0)])},
gae:function(a){if(a.length>0)return a[0]
throw H.j(H.hr())},
gbh:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.j(H.hr())},
a4:function(a,b,c,d,e){var t,s,r
this.c4(a,"setRange")
P.da(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aY(P.bw(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.j(H.xb())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}},
ay:function(a,b,c,d){return this.a4(a,b,c,d,0)},
bC:function(a,b,c,d){var t
this.c4(a,"fill range")
P.da(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aH:function(a,b,c,d){var t,s,r,q,p,o
this.cP(a,"replaceRange")
P.da(b,c,a.length,null,null,null)
d=C.c.ar(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.ay(a,b,r,d)
if(p!==0){this.a4(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a4(a,r,o,a,c)
this.ay(a,b,r,d)}},
ea:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.j(new P.by(a))}return!1},
hJ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.j(new P.by(a))}return!0},
dj:function(a,b){var t
this.c4(a,"sort")
t=b==null?P.I6():b
H.jW(a,0,a.length-1,t)},
f6:function(a){return this.dj(a,null)},
b8:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.b_(a[t],b))return t
return-1},
bn:function(a,b){return this.b8(a,b,0)},
Z:function(a,b){var t
for(t=0;t<a.length;++t)if(J.b_(a[t],b))return!0
return!1},
gX:function(a){return a.length===0},
C:function(a){return P.jv(a,"[","]")},
a3:function(a,b){var t=H.a(a.slice(0),[H.M(a,0)])
return t},
ar:function(a){return this.a3(a,!0)},
gS:function(a){return new J.ie(a,a.length,0,null,[H.M(a,0)])},
ga6:function(a){return H.eu(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cP(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dE(b,"newLength",null))
if(b<0)throw H.j(P.bw(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c8(a,b))
if(b>=a.length||b<0)throw H.j(H.c8(a,b))
return a[b]},
i:function(a,b,c){this.c4(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c8(a,b))
if(b>=a.length||b<0)throw H.j(H.c8(a,b))
a[b]=c},
$isaz:1,
$asaz:function(){},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
J.ut.prototype={}
J.ie.prototype={
gI:function(){return this.d},
E:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.j(H.bF(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fi.prototype={
aE:function(a,b){var t
if(typeof b!=="number")throw H.j(H.bx(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcX(b)
if(this.gcX(a)===t)return 0
if(this.gcX(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcX:function(a){return a===0?1/a<0:a<0},
am:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.j(new P.S(""+a+".floor()"))},
bJ:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(new P.S(""+a+".round()"))},
ac:function(a,b,c){if(C.a.aE(b,c)>0)throw H.j(H.bx(b))
if(this.aE(a,b)<0)return b
if(this.aE(a,c)>0)return c
return a},
l:function(a){return a},
bL:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.j(P.bw(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.a_(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aY(new P.S("Unexpected toString result: "+t))
r=J.bh(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.aw("0",q)},
C:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga6:function(a){return a&0x1FFFFFFF},
de:function(a){return-a},
W:function(a,b){if(typeof b!=="number")throw H.j(H.bx(b))
return a+b},
aw:function(a,b){if(typeof b!=="number")throw H.j(H.bx(b))
return a*b},
bP:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
dn:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e4(a,b)},
aq:function(a,b){return(a|0)===a?a/b|0:this.e4(a,b)},
e4:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.j(new P.S("Result of truncating division is "+H.x(t)+": "+H.x(a)+" ~/ "+H.x(b)))},
az:function(a,b){if(typeof b!=="number")throw H.j(H.bx(b))
if(b<0)throw H.j(H.bx(b))
return b>31?0:a<<b>>>0},
as:function(a,b){return b>31?0:a<<b>>>0},
b2:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
hd:function(a,b){if(b<0)throw H.j(H.bx(b))
return b>31?0:a>>>b},
e3:function(a,b){return b>31?0:a>>>b},
a1:function(a,b){if(typeof b!=="number")throw H.j(H.bx(b))
return a<b},
aC:function(a,b){if(typeof b!=="number")throw H.j(H.bx(b))
return a>b},
ax:function(a,b){if(typeof b!=="number")throw H.j(H.bx(b))
return a>=b},
gab:function(a){return C.ao},
$isds:1}
J.jy.prototype={
gab:function(a){return C.an},
$isV:1,
$isds:1,
$isC:1}
J.jx.prototype={
gab:function(a){return C.am},
$isV:1,
$isds:1}
J.eo.prototype={
a_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c8(a,b))
if(b<0)throw H.j(H.c8(a,b))
if(b>=a.length)H.aY(H.c8(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(b>=a.length)throw H.j(H.c8(a,b))
return a.charCodeAt(b)},
cM:function(a,b,c){if(c>b.length)throw H.j(P.bw(c,0,b.length,null,null))
return new H.rf(b,a,c)},
aV:function(a,b){return this.cM(a,b,0)},
ez:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.j(P.bw(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.a_(b,c+s)!==this.a5(a,s))return
return new H.k0(c,b,a)},
W:function(a,b){if(typeof b!=="string")throw H.j(P.dE(b,null,null))
return a+b},
hI:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ag(a,s-t)},
d8:function(a,b,c){return H.yM(a,b,c)},
iw:function(a,b,c){return H.IC(a,b,c,null)},
f7:function(a,b){if(b==null)H.aY(H.bx(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hs&&b.gdR().exec("").length-2===0)return a.split(b.gh0())
else return this.fJ(a,b)},
aH:function(a,b,c,d){var t,s
H.vz(b)
c=P.da(b,c,a.length,null,null,null)
H.vz(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fJ:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.y])
for(s=J.yU(b,a),s=s.gS(s),r=0,q=1;s.E();){p=s.gI()
o=p.gdk(p)
n=p.gej(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.L(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ag(a,r))
return t},
aJ:function(a,b,c){var t
H.vz(c)
if(typeof c!=="number")return c.a1()
if(c<0||c>a.length)throw H.j(P.bw(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.ze(b,a,c)!=null},
af:function(a,b){return this.aJ(a,b,0)},
L:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.aY(H.bx(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aY(H.bx(c))
if(typeof b!=="number")return b.a1()
if(b<0)throw H.j(P.jS(b,null,null))
if(typeof c!=="number")return H.a6(c)
if(b>c)throw H.j(P.jS(b,null,null))
if(c>a.length)throw H.j(P.jS(c,null,null))
return a.substring(b,c)},
ag:function(a,b){return this.L(a,b,null)},
iD:function(a){return a.toLowerCase()},
iE:function(a){return a.toUpperCase()},
bq:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a5(t,0)===133){r=J.FW(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.a_(t,q)===133?J.uq(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eP:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.a_(t,r)===133)s=J.uq(t,r)}else{s=J.uq(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
aw:function(a,b){var t,s
if(typeof b!=="number")return H.a6(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.O)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b8:function(a,b,c){var t
if(c<0||c>a.length)throw H.j(P.bw(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bn:function(a,b){return this.b8(a,b,0)},
i2:function(a,b,c){var t
if(b==null)H.aY(H.bx(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.aY(P.bw(t,0,c,null,null))
if(b.cw(a,t)!=null)return t}return-1},
ew:function(a,b){return this.i2(a,b,null)},
eh:function(a,b,c){if(c>a.length)throw H.j(P.bw(c,0,a.length,null,null))
return H.IB(a,b,c)},
Z:function(a,b){return this.eh(a,b,0)},
gX:function(a){return a.length===0},
aE:function(a,b){var t
if(typeof b!=="string")throw H.j(H.bx(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
C:function(a){return a},
ga6:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gab:function(a){return C.ag},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c8(a,b))
if(b>=a.length||b<0)throw H.j(H.c8(a,b))
return a[b]},
$isaz:1,
$asaz:function(){},
$isy:1,
$isuS:1}
H.l7.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.a_(this.a,b)},
$ashW:function(){return[P.C]},
$ashx:function(){return[P.C]},
$asfn:function(){return[P.C]},
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]}}
H.r.prototype={$asr:null}
H.eq.prototype={
gS:function(a){return new H.dN(this,this.gm(this),0,null,[H.an(this,"eq",0)])},
a9:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.T(0,s))
if(t!==this.gm(this))throw H.j(new P.by(this))}},
gX:function(a){return this.gm(this)===0},
gae:function(a){if(this.gm(this)===0)throw H.j(H.hr())
return this.T(0,0)},
Z:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.b_(this.T(0,s),b))return!0
if(t!==this.gm(this))throw H.j(new P.by(this))}return!1},
aL:function(a,b){var t,s,r,q
t=this.gm(this)
if(b.length!==0){if(t===0)return""
s=H.x(this.T(0,0))
if(t!==this.gm(this))throw H.j(new P.by(this))
for(r=s,q=1;q<t;++q){r=r+b+H.x(this.T(0,q))
if(t!==this.gm(this))throw H.j(new P.by(this))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<t;++q){r+=H.x(this.T(0,q))
if(t!==this.gm(this))throw H.j(new P.by(this))}return r.charCodeAt(0)==0?r:r}},
cg:function(a,b){return this.fa(0,b)},
aB:function(a,b){return new H.es(this,b,[H.an(this,"eq",0),null])},
a3:function(a,b){var t,s,r
t=H.a([],[H.an(this,"eq",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.T(0,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
ar:function(a){return this.a3(a,!0)}}
H.pa.prototype={
gfK:function(){var t,s
t=J.c0(this.a)
s=this.c
if(s==null||s>t)return t
return s},
ghe:function(){var t,s
t=J.c0(this.a)
s=this.b
if(J.cu(s,t))return t
return s},
gm:function(a){var t,s,r
t=J.c0(this.a)
s=this.b
if(J.vI(s,t))return 0
r=this.c
if(r==null||r>=t){if(typeof s!=="number")return H.a6(s)
return t-s}if(typeof r!=="number")return r.ak()
if(typeof s!=="number")return H.a6(s)
return r-s},
T:function(a,b){var t=J.ea(this.ghe(),b)
if(J.eQ(b,0)||J.vI(t,this.gfK()))throw H.j(P.bA(b,this,"index",null,null))
return J.vK(this.a,t)},
a3:function(a,b){var t,s,r,q,p,o,n,m,l
t=this.b
s=this.a
r=J.bh(s)
q=r.gm(s)
p=this.c
if(p!=null&&p<q)q=p
if(typeof q!=="number")return q.ak()
if(typeof t!=="number")return H.a6(t)
o=q-t
if(o<0)o=0
n=this.$ti
if(b){m=H.a([],n)
C.b.sm(m,o)}else m=H.a(new Array(o),n)
for(l=0;l<o;++l){n=r.T(s,t+l)
if(l>=m.length)return H.u(m,l)
m[l]=n
if(r.gm(s)<q)throw H.j(new P.by(this))}return m},
ar:function(a){return this.a3(a,!0)},
fk:function(a,b,c,d){var t,s,r
t=this.b
s=J.dr(t)
if(s.a1(t,0))H.aY(P.bw(t,0,null,"start",null))
r=this.c
if(r!=null){if(r<0)H.aY(P.bw(r,0,null,"end",null))
if(s.aC(t,r))throw H.j(P.bw(t,0,r,"start",null))}}}
H.dN.prototype={
gI:function(){return this.d},
E:function(){var t,s,r,q
t=this.a
s=J.bh(t)
r=s.gm(t)
if(this.b!==r)throw H.j(new P.by(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.T(t,q);++this.c
return!0}}
H.hA.prototype={
gS:function(a){return new H.jC(null,J.cT(this.a),this.b,this.$ti)},
gm:function(a){return J.c0(this.a)},
gX:function(a){return J.kF(this.a)},
$asn:function(a,b){return[b]}}
H.f1.prototype={$isr:1,
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jC.prototype={
E:function(){var t=this.b
if(t.E()){this.a=this.c.$1(t.gI())
return!0}this.a=null
return!1},
gI:function(){return this.a},
$asjw:function(a,b){return[b]}}
H.es.prototype={
gm:function(a){return J.c0(this.a)},
T:function(a,b){return this.b.$1(J.vK(this.a,b))},
$aseq:function(a,b){return[b]},
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.e9.prototype={
gS:function(a){return new H.k7(J.cT(this.a),this.b,this.$ti)},
aB:function(a,b){return new H.hA(this,b,[H.M(this,0),null])}}
H.k7.prototype={
E:function(){var t,s
for(t=this.a,s=this.b;t.E();)if(s.$1(t.gI())===!0)return!0
return!1},
gI:function(){return this.a.gI()}}
H.iG.prototype={
sm:function(a,b){throw H.j(new P.S("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.j(new P.S("Cannot add to a fixed-length list"))},
aH:function(a,b,c,d){throw H.j(new P.S("Cannot remove from a fixed-length list"))}}
H.pD.prototype={
i:function(a,b,c){throw H.j(new P.S("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.j(new P.S("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.j(new P.S("Cannot add to an unmodifiable list"))},
a4:function(a,b,c,d,e){throw H.j(new P.S("Cannot modify an unmodifiable list"))},
ay:function(a,b,c,d){return this.a4(a,b,c,d,0)},
aH:function(a,b,c,d){throw H.j(new P.S("Cannot remove from an unmodifiable list"))},
bC:function(a,b,c,d){throw H.j(new P.S("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
H.hW.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
H.td.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.te.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qV.prototype={}
H.fA.prototype={
e9:function(a,b){if(!this.f.U(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cK()},
iv:function(a){var t,s,r,q,p,o
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
if(q===s.c)s.dJ();++s.d}this.y=!1}this.cK()},
hj:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.am(a),s=0;r=this.ch,s<r.length;s+=2)if(t.U(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.u(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
it:function(a){var t,s,r
if(this.ch==null)return
for(t=J.am(a),s=0;r=this.ch,s<r.length;s+=2)if(t.U(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aY(new P.S("removeRange"))
P.da(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
f3:function(a,b){if(!this.r.U(0,a))return
this.db=b},
hR:function(a,b,c){var t=J.am(b)
if(!t.U(b,0))t=t.U(b,1)&&!this.cy
else t=!0
if(t){J.fK(a,c)
return}t=this.cx
if(t==null){t=P.uz(null,null)
this.cx=t}t.aS(0,new H.qQ(a,c))},
hQ:function(a,b){var t
if(!this.r.U(0,a))return
t=J.am(b)
if(!t.U(b,0))t=t.U(b,1)&&!this.cy
else t=!0
if(t){this.c5()
return}t=this.cx
if(t==null){t=P.uz(null,null)
this.cx=t}t.aS(0,this.gi1())},
hS:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fH(a)
if(b!=null)P.fH(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cv(a)
s[1]=b==null?null:J.cv(b)
for(r=new P.d0(t,t.r,null,null,[null]),r.c=t.e;r.E();)J.fK(r.d,s)},
bB:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.bG(o)
p=H.cn(o)
this.hS(q,p)
if(this.db===!0){this.c5()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gi0()
if(this.cx!=null)for(;n=this.cx,!n.gX(n);)this.cx.eI().$0()}return s},
cY:function(a){return this.b.n(0,a)},
ds:function(a,b){var t=this.b
if(t.V(0,a))throw H.j(P.lF("Registry: ports must be registered only once."))
t.i(0,a,b)},
cK:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.c5()},
c5:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.b4(0)
for(t=this.b,s=t.gce(t),s=s.gS(s);s.E();)s.gI().fC()
t.b4(0)
this.c.b4(0)
u.globalState.z.an(0,this.a)
this.dx.b4(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.u(t,p)
J.fK(q,t[p])}this.ch=null}},
gi0:function(){return this.d},
ghv:function(){return this.e}}
H.qQ.prototype={
$0:function(){J.fK(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qs.prototype={
hC:function(){var t=this.a
if(t.b===t.c)return
return t.eI()},
eN:function(){var t,s,r
t=this.hC()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.V(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gX(s)}else s=!1
else s=!1
else s=!1
if(s)H.aY(P.lF("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gX(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hw(["command","close"])
r=new H.dA(!0,new P.kl(0,null,null,null,null,null,0,[null,P.C])).aD(r)
s.toString
self.postMessage(r)}return!1}t.im()
return!0},
dZ:function(){if(self.window!=null)new H.qt(this).$0()
else for(;this.eN(););},
bK:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dZ()
else try{this.dZ()}catch(r){t=H.bG(r)
s=H.cn(r)
q=u.globalState.Q
p=P.hw(["command","error","msg",H.x(t)+"\n"+H.x(s)])
p=new H.dA(!0,P.i4(null,P.C)).aD(p)
q.toString
self.postMessage(p)}}}
H.qt.prototype={
$0:function(){if(!this.a.eN())return
P.xF(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.eN.prototype={
im:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bB(this.b)}}
H.qU.prototype={}
H.mD.prototype={
$0:function(){H.AT(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mE.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fG(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fG(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cK()},
$S:function(){return{func:1,v:true}}}
H.qe.prototype={}
H.fB.prototype={
bf:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdP())return
r=H.HK(b)
if(t.ghv()===s){s=J.bh(r)
switch(s.n(r,0)){case"pause":t.e9(s.n(r,1),s.n(r,2))
break
case"resume":t.iv(s.n(r,1))
break
case"add-ondone":t.hj(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.it(s.n(r,1))
break
case"set-errors-fatal":t.f3(s.n(r,1),s.n(r,2))
break
case"ping":t.hR(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hQ(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.an(0,s)
break}return}u.globalState.f.a.aS(0,new H.eN(t,new H.qX(this,r),"receive"))},
U:function(a,b){if(b==null)return!1
return b instanceof H.fB&&J.b_(this.b,b.b)},
ga6:function(a){return this.b.gcA()}}
H.qX.prototype={
$0:function(){var t=this.a.b
if(!t.gdP())t.fw(0,this.b)},
$S:function(){return{func:1}}}
H.i8.prototype={
bf:function(a,b){var t,s,r
t=P.hw(["command","message","port",this,"msg",b])
s=new H.dA(!0,P.i4(null,P.C)).aD(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
U:function(a,b){if(b==null)return!1
return b instanceof H.i8&&J.b_(this.b,b.b)&&J.b_(this.a,b.a)&&J.b_(this.c,b.c)},
ga6:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.az()
s=this.a
if(typeof s!=="number")return s.az()
r=this.c
if(typeof r!=="number")return H.a6(r)
return(t<<16^s<<8^r)>>>0}}
H.fq.prototype={
fC:function(){this.c=!0
this.b=null},
fw:function(a,b){if(this.c)return
this.b.$1(b)},
$isGC:1,
gcA:function(){return this.a},
gdP:function(){return this.c}}
H.pv.prototype={
fl:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aS(0,new H.eN(s,new H.pw(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dq(new H.px(this,b),0),a)}else throw H.j(new P.S("Timer greater than 0."))}}
H.pw.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.px.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dF.prototype={
ga6:function(a){var t=this.a
if(typeof t!=="number")return t.dh()
t=C.d.b2(t,0)^C.d.aq(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
U:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dF){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcA:function(){return this.a}}
H.dA.prototype={
aD:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.am(a)
if(!!t.$isfj)return["buffer",a]
if(!!t.$iset)return["typed",a]
if(!!t.$isaz)return this.f_(a)
if(!!t.$isAQ){r=this.geX()
q=t.gai(a)
q=H.dm(q,r,H.an(q,"n",0),null)
q=P.d7(q,!0,H.an(q,"n",0))
t=t.gce(a)
t=H.dm(t,r,H.an(t,"n",0),null)
return["map",q,P.d7(t,!0,H.an(t,"n",0))]}if(!!t.$ismU)return this.f0(a)
if(!!t.$isf)this.eQ(a)
if(!!t.$isGC)this.bN(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfB)return this.f1(a)
if(!!t.$isi8)return this.f2(a)
if(!!t.$iseY){p=a.$static_name
if(p==null)this.bN(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdF)return["capability",a.a]
if(!(a instanceof P.ab))this.eQ(a)
return["dart",u.classIdExtractor(a),this.eZ(u.classFieldsExtractor(a))]},
bN:function(a,b){throw H.j(new P.S((b==null?"Can't transmit:":b)+" "+H.x(a)))},
eQ:function(a){return this.bN(a,null)},
f_:function(a){var t=this.eY(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bN(a,"Can't serialize indexable: ")},
eY:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.aD(a[s])
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
eZ:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aD(a[t]))
return a},
f0:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bN(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.aD(a[t[r]])
if(r>=s.length)return H.u(s,r)
s[r]=q}return["js-object",t,s]},
f2:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
f1:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcA()]
return["raw sendport",a]}}
H.eM.prototype={
b5:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.j(P.dD("Bad serialized message: "+H.x(a)))
switch(C.b.gae(a)){case"ref":if(1>=a.length)return H.u(a,1)
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
s=H.a(this.bz(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bz(r),[null])
case"mutable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return this.bz(r)
case"const":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bz(r),[null])
s.fixed$length=Array
return s
case"map":return this.hG(a)
case"sendport":return this.hH(a)
case"raw sendport":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.hF(a)
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
this.bz(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.j("couldn't deserialize: "+H.x(a))}},
bz:function(a){var t,s,r
t=J.bh(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
if(!(s<r))break
t.i(a,s,this.b5(t.n(a,s)));++s}return a},
hG:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q=P.jz()
this.b.push(q)
s=J.zl(J.vV(s,this.ghE()))
for(t=J.bh(s),p=J.bh(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.b5(p.n(r,o)))
return q},
hH:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
if(3>=t)return H.u(a,3)
q=a[3]
if(J.b_(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cY(q)
if(o==null)return
n=new H.fB(o,r)}else n=new H.i8(s,q,r)
this.b.push(n)
return n},
hF:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bh(s)
p=J.bh(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a6(n)
if(!(o<n))break
q[t.n(s,o)]=this.b5(p.n(r,o));++o}return q}}
H.la.prototype={
gX:function(a){return this.gm(this)===0},
C:function(a){return P.xi(this)},
i:function(a,b,c){return H.zT()},
$isbn:1,
$asbn:null}
H.lb.prototype={
gm:function(a){return this.a},
V:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.V(0,b))return
return this.dH(b)},
dH:function(a){return this.b[a]},
a9:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dH(q))}}}
H.oi.prototype={}
H.pA.prototype={
aN:function(a){var t,s,r
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
H.jK.prototype={
C:function(a){var t=this.b
if(t==null)return"NullError: "+H.x(this.a)
return"NullError: method not found: '"+H.x(t)+"' on null"}}
H.mX.prototype={
C:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.x(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.x(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.x(this.a)+")"}}
H.pC.prototype={
C:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h9.prototype={
gaQ:function(){return this.b}}
H.tf.prototype={
$1:function(a){if(!!J.am(a).$isee)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.ko.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.t_.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.t0.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.t1.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.t2.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.t3.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eY.prototype={
C:function(a){return"Closure '"+H.oc(this).trim()+"'"},
giL:function(){return this},
$D:null}
H.pg.prototype={}
H.oJ.prototype={
C:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fR.prototype={
U:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fR))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga6:function(a){var t,s
t=this.c
if(t==null)s=H.eu(this.a)
else s=typeof t!=="object"?J.dC(t):H.eu(t)
t=H.eu(this.b)
if(typeof s!=="number")return s.iO()
return(s^t)>>>0},
C:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.x(this.d)+"' of "+H.ob(t)}}
H.l4.prototype={
C:function(a){return this.a}}
H.on.prototype={
C:function(a){return"RuntimeError: "+H.x(this.a)}}
H.dS.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga6:function(a){return J.dC(this.a)},
U:function(a,b){if(b==null)return!1
return b instanceof H.dS&&J.b_(this.a,b.a)}}
H.w.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gai:function(a){return new H.n9(this,[H.M(this,0)])},
gce:function(a){return H.dm(this.gai(this),new H.mW(this),H.M(this,0),H.M(this,1))},
V:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dC(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dC(s,b)}else return this.hX(b)},
hX:function(a){var t=this.d
if(t==null)return!1
return this.bF(this.bS(t,this.bE(a)),a)>=0},
at:function(a,b){b.a9(0,new H.mV(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bv(t,b)
return s==null?null:s.gb6()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bv(r,b)
return s==null?null:s.gb6()}else return this.hY(b)},
hY:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bS(t,this.bE(a))
r=this.bF(s,a)
if(r<0)return
return s[r].gb6()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.cC()
this.b=t}this.dr(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cC()
this.c=s}this.dr(s,b,c)}else{r=this.d
if(r==null){r=this.cC()
this.d=r}q=this.bE(b)
p=this.bS(r,q)
if(p==null)this.cI(r,q,[this.cD(b,c)])
else{o=this.bF(p,b)
if(o>=0)p[o].sb6(c)
else p.push(this.cD(b,c))}}},
an:function(a,b){if(typeof b==="string")return this.dY(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dY(this.c,b)
else return this.hZ(b)},
hZ:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bS(t,this.bE(a))
r=this.bF(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.e6(q)
return q.gb6()},
b4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a9:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.j(new P.by(this))
t=t.c}},
dr:function(a,b,c){var t=this.bv(a,b)
if(t==null)this.cI(a,b,this.cD(b,c))
else t.sb6(c)},
dY:function(a,b){var t
if(a==null)return
t=this.bv(a,b)
if(t==null)return
this.e6(t)
this.dF(a,b)
return t.gb6()},
cD:function(a,b){var t,s
t=new H.n8(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
e6:function(a){var t,s
t=a.gh5()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bE:function(a){return J.dC(a)&0x3ffffff},
bF:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].ges(),b))return s
return-1},
C:function(a){return P.xi(this)},
bv:function(a,b){return a[b]},
bS:function(a,b){return a[b]},
cI:function(a,b,c){a[b]=c},
dF:function(a,b){delete a[b]},
dC:function(a,b){return this.bv(a,b)!=null},
cC:function(){var t=Object.create(null)
this.cI(t,"<non-identifier-key>",t)
this.dF(t,"<non-identifier-key>")
return t},
$isAQ:1,
$isbn:1,
$asbn:null}
H.mW.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mV.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eP(function(a,b){return{func:1,args:[a,b]}},this.a,"w")}}
H.n8.prototype={
ges:function(){return this.a},
gb6:function(){return this.b},
gh5:function(){return this.d},
sb6:function(a){return this.b=a}}
H.n9.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gS:function(a){var t,s
t=this.a
s=new H.na(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
Z:function(a,b){return this.a.V(0,b)},
a9:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.j(new P.by(t))
s=s.c}}}
H.na.prototype={
gI:function(){return this.d},
E:function(){var t=this.a
if(this.b!==t.r)throw H.j(new P.by(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rW.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rX.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.y]}}}
H.rY.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.y]}}}
H.hs.prototype={
C:function(a){return"RegExp/"+this.a+"/"},
gdS:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.ur(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdR:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.ur(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cM:function(a,b,c){var t
H.yw(b)
t=J.c0(b)
if(typeof t!=="number")return H.a6(t)
t=c>t
if(t)throw H.j(P.bw(c,0,J.c0(b),null,null))
return new H.q8(this,b,c)},
aV:function(a,b){return this.cM(a,b,0)},
fL:function(a,b){var t,s
t=this.gdS()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.km(this,s)},
cw:function(a,b){var t,s
t=this.gdR()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.u(s,-1)
if(s.pop()!=null)return
return new H.km(this,s)},
ez:function(a,b,c){if(c<0||c>b.length)throw H.j(P.bw(c,0,b.length,null,null))
return this.cw(b,c)},
$isGE:1,
$isuS:1,
gh0:function(){return this.b}}
H.km.prototype={
gdk:function(a){return this.b.index},
gej:function(a){var t=this.b
return t.index+t[0].length},
b_:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.u(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$isd8:1}
H.q8.prototype={
gS:function(a){return new H.kb(this.a,this.b,this.c,null)},
$ashq:function(){return[P.d8]},
$asn:function(){return[P.d8]}}
H.kb.prototype={
gI:function(){return this.d},
E:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
t=J.c0(t)
if(typeof t!=="number")return H.a6(t)
if(s<=t){r=this.a.fL(this.b,this.c)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.k0.prototype={
gej:function(a){return this.a+this.c.length},
n:function(a,b){return this.b_(b)},
b_:function(a){if(a!==0)throw H.j(P.jS(a,null,null))
return this.c},
$isd8:1,
gdk:function(a){return this.a}}
H.rf.prototype={
gS:function(a){return new H.rg(this.a,this.b,this.c,null)},
$asn:function(){return[P.d8]}}
H.rg.prototype={
E:function(){var t,s,r,q,p,o,n
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
this.d=new H.k0(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gI:function(){return this.d}}
H.fj.prototype={
gab:function(a){return C.a7},
hq:function(a,b,c){return H.cI(a,b,c)},
hp:function(a){return this.hq(a,0,null)},
ho:function(a,b,c){var t
H.yf(a,b,c)
t=new DataView(a,b)
return t},
hn:function(a,b){return this.ho(a,b,null)},
$isfj:1,
$isbi:1,
gex:function(a){return a.byteLength}}
H.et.prototype={
fY:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dE(b,d,"Invalid list position"))
else throw H.j(P.bw(b,0,c,d,null))},
dv:function(a,b,c,d){if(b>>>0!==b||b>c)this.fY(a,b,c,d)},
$iset:1,
gc2:function(a){return a.buffer},
gex:function(a){return a.byteLength}}
H.nA.prototype={
gab:function(a){return C.a8}}
H.jF.prototype={
gm:function(a){return a.length},
e2:function(a,b,c,d,e){var t,s,r
t=a.length
this.dv(a,b,t,"start")
this.dv(a,c,t,"end")
if(typeof b!=="number")return b.aC()
if(typeof c!=="number")return H.a6(c)
if(b>c)throw H.j(P.bw(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a1()
if(e<0)throw H.j(P.dD(e))
r=d.length
if(r-e<s)throw H.j(new P.dc("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaE:1,
$asaE:function(){},
$isaz:1,
$asaz:function(){}}
H.hE.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.c8(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aY(H.c8(a,b))
a[b]=c},
a4:function(a,b,c,d,e){if(!!J.am(d).$ishE){this.e2(a,b,c,d,e)
return}this.dm(a,b,c,d,e)},
ay:function(a,b,c,d){return this.a4(a,b,c,d,0)}}
H.hG.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.V]},
$asr:function(){return[P.V]},
$asn:function(){return[P.V]},
$isp:1,
$isr:1,
$isn:1}
H.hI.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.V]},
$asr:function(){return[P.V]},
$asn:function(){return[P.V]}}
H.hF.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aY(H.c8(a,b))
a[b]=c},
a4:function(a,b,c,d,e){if(!!J.am(d).$ishF){this.e2(a,b,c,d,e)
return}this.dm(a,b,c,d,e)},
ay:function(a,b,c,d){return this.a4(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.hH.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]},
$isp:1,
$isr:1,
$isn:1}
H.hJ.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]}}
H.nB.prototype={
gab:function(a){return C.a9},
$isp:1,
$asp:function(){return[P.V]},
$isr:1,
$asr:function(){return[P.V]},
$isn:1,
$asn:function(){return[P.V]}}
H.nC.prototype={
gab:function(a){return C.aa},
$isp:1,
$asp:function(){return[P.V]},
$isr:1,
$asr:function(){return[P.V]},
$isn:1,
$asn:function(){return[P.V]}}
H.nD.prototype={
gab:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nE.prototype={
gab:function(a){return C.ac},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nF.prototype={
gab:function(a){return C.ad},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nG.prototype={
gab:function(a){return C.ah},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nH.prototype={
gab:function(a){return C.ai},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.jG.prototype={
gab:function(a){return C.aj},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.c8(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.fk.prototype={
gab:function(a){return C.ak},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aY(H.c8(a,b))
return a[b]},
cl:function(a,b,c){return new Uint8Array(a.subarray(b,H.HJ(b,c,a.length)))},
$isfk:1,
$isdf:1,
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.qa.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.q9.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.qb.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qc.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.ry.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rz.prototype={
$2:function(a,b){this.a.$2(1,new H.h9(a,b))},
$S:function(){return{func:1,args:[,P.dQ]}}}
P.rJ.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.C,,]}}}
P.c4.prototype={}
P.rL.prototype={
$0:function(){var t,s,r
try{this.b.aK(this.a.$0())}catch(r){t=H.bG(r)
s=H.cn(r)
P.yh(this.b,t,s)}},
$S:function(){return{func:1}}}
P.mj.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.ap(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.ap(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.mi.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.u(r,t)
r[t]=a
if(s===0)this.d.dB(r)}else if(t.b===0&&!this.b)this.d.ap(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eZ.prototype={}
P.kd.prototype={
cQ:function(a,b){if(a==null)a=new P.fl()
if(this.a.a!==0)throw H.j(new P.dc("Future already completed"))
$.ap.toString
this.ap(a,b)},
bl:function(a){return this.cQ(a,null)},
gi_:function(){return this.a.a!==0},
$iseZ:1,
ghO:function(){return this.a}}
P.dU.prototype={
aF:function(a,b){var t=this.a
if(t.a!==0)throw H.j(new P.dc("Future already completed"))
t.dt(b)},
ht:function(a){return this.aF(a,null)},
ap:function(a,b){this.a.du(a,b)}}
P.kq.prototype={
aF:function(a,b){var t=this.a
if(t.a!==0)throw H.j(new P.dc("Future already completed"))
t.aK(b)},
ap:function(a,b){this.a.ap(a,b)}}
P.ki.prototype={
ghh:function(){return this.b.b},
geo:function(){return(this.c&1)!==0},
ghV:function(){return(this.c&2)!==0},
gen:function(){return this.c===8},
hT:function(a){return this.b.b.d9(this.d,a)},
i4:function(a){if(this.c!==6)return!0
return this.b.b.d9(this.d,J.fJ(a))},
hP:function(a){var t,s,r
t=this.e
s=J.aq(a)
r=this.b.b
if(H.fG(t,{func:1,args:[,,]}))return r.iz(t,s.gau(a),a.gaQ())
else return r.d9(t,s.gau(a))},
hU:function(){return this.b.b.eL(this.d)},
gcE:function(){return this.a}}
P.bp.prototype={
gfZ:function(){return this.a===2},
gcB:function(){return this.a>=4},
cc:function(a,b){var t=$.ap
if(t!==C.e){t.toString
if(b!=null)b=P.yk(b,t)}return this.cJ(a,b)},
ba:function(a){return this.cc(a,null)},
cJ:function(a,b){var t,s
t=new P.bp(0,$.ap,null,[null])
s=b==null?1:3
this.co(new P.ki(null,t,s,a,b,[H.M(this,0),null]))
return t},
cf:function(a){var t,s
t=$.ap
s=new P.bp(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.M(this,0)
this.co(new P.ki(null,s,8,a,null,[t,t]))
return s},
co:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcB()){s.co(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fE(null,null,t,new P.qx(this,a))}},
dW:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcE()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcB()){p.dW(a)
return}this.a=p.a
this.c=p.c}t.a=this.bX(a)
s=this.b
s.toString
P.fE(null,null,s,new P.qF(t,this))}},
bW:function(){var t=this.c
this.c=null
return this.bX(t)},
bX:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcE()
t.a=s}return s},
aK:function(a){var t,s
t=this.$ti
if(H.dW(a,"$isc4",t,"$asc4"))if(H.dW(a,"$isbp",t,null))P.qA(a,this)
else P.y2(a,this)
else{s=this.bW()
this.a=4
this.c=a
P.fz(this,s)}},
dB:function(a){var t=this.bW()
this.a=4
this.c=a
P.fz(this,t)},
ap:function(a,b){var t=this.bW()
this.a=8
this.c=new P.eS(a,b)
P.fz(this,t)},
fE:function(a){return this.ap(a,null)},
dt:function(a){var t
if(H.dW(a,"$isc4",this.$ti,"$asc4")){this.fB(a)
return}this.a=1
t=this.b
t.toString
P.fE(null,null,t,new P.qz(this,a))},
fB:function(a){var t
if(H.dW(a,"$isbp",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fE(null,null,t,new P.qE(this,a))}else P.qA(a,this)
return}P.y2(a,this)},
du:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fE(null,null,t,new P.qy(this,a,b))},
$isc4:1,
gbY:function(){return this.a},
gh8:function(){return this.c}}
P.qx.prototype={
$0:function(){P.fz(this.a,this.b)},
$S:function(){return{func:1}}}
P.qF.prototype={
$0:function(){P.fz(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qB.prototype={
$1:function(a){var t=this.a
t.a=0
t.aK(a)},
$S:function(){return{func:1,args:[,]}}}
P.qC.prototype={
$2:function(a,b){this.a.ap(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qD.prototype={
$0:function(){this.a.ap(this.b,this.c)},
$S:function(){return{func:1}}}
P.qz.prototype={
$0:function(){this.a.dB(this.b)},
$S:function(){return{func:1}}}
P.qE.prototype={
$0:function(){P.qA(this.b,this.a)},
$S:function(){return{func:1}}}
P.qy.prototype={
$0:function(){this.a.ap(this.b,this.c)},
$S:function(){return{func:1}}}
P.qI.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hU()}catch(q){s=H.bG(q)
r=H.cn(q)
if(this.c){p=J.fJ(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eS(s,r)
o.a=!0
return}if(!!J.am(t).$isc4){if(t instanceof P.bp&&t.gbY()>=4){if(t.gbY()===8){p=this.b
p.b=t.gh8()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.ba(new P.qJ(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qJ.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qH.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hT(this.c)}catch(r){t=H.bG(r)
s=H.cn(r)
q=this.a
q.b=new P.eS(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qG.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.i4(t)===!0&&q.e!=null){p=this.b
p.b=q.hP(t)
p.a=!1}}catch(o){s=H.bG(o)
r=H.cn(o)
q=this.a
p=J.fJ(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eS(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.kc.prototype={}
P.dn.prototype={
aB:function(a,b){return new P.qW(b,this,[H.an(this,"dn",0),null])},
Z:function(a,b){var t,s
t={}
s=new P.bp(0,$.ap,null,[P.cS])
t.a=null
t.a=this.aW(new P.oP(t,this,b,s),!0,new P.oQ(s),s.gbj())
return s},
a9:function(a,b){var t,s
t={}
s=new P.bp(0,$.ap,null,[null])
t.a=null
t.a=this.aW(new P.oV(t,this,b,s),!0,new P.oW(s),s.gbj())
return s},
gm:function(a){var t,s
t={}
s=new P.bp(0,$.ap,null,[P.C])
t.a=0
this.aW(new P.oZ(t),!0,new P.p_(t,s),s.gbj())
return s},
gX:function(a){var t,s
t={}
s=new P.bp(0,$.ap,null,[P.cS])
t.a=null
t.a=this.aW(new P.oX(t,s),!0,new P.oY(s),s.gbj())
return s},
ar:function(a){var t,s,r
t=H.an(this,"dn",0)
s=H.a([],[t])
r=new P.bp(0,$.ap,null,[[P.p,t]])
this.aW(new P.p0(this,s),!0,new P.p1(s,r),r.gbj())
return r},
gae:function(a){var t,s
t={}
s=new P.bp(0,$.ap,null,[H.an(this,"dn",0)])
t.a=null
t.a=this.aW(new P.oR(t,this,s),!0,new P.oS(s),s.gbj())
return s}}
P.oP.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.yo(new P.oN(this.c,a),new P.oO(t,s),P.ye(t.a,s))},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.oN.prototype={
$0:function(){return J.b_(this.b,this.a)},
$S:function(){return{func:1}}}
P.oO.prototype={
$1:function(a){if(a===!0)P.vw(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cS]}}}
P.oQ.prototype={
$0:function(){this.a.aK(!1)},
$S:function(){return{func:1}}}
P.oV.prototype={
$1:function(a){P.yo(new P.oT(this.c,a),new P.oU(),P.ye(this.a.a,this.d))},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.oT.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oU.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oW.prototype={
$0:function(){this.a.aK(null)},
$S:function(){return{func:1}}}
P.oZ.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.p_.prototype={
$0:function(){this.b.aK(this.a.a)},
$S:function(){return{func:1}}}
P.oX.prototype={
$1:function(a){P.vw(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oY.prototype={
$0:function(){this.a.aK(!0)},
$S:function(){return{func:1}}}
P.p0.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.a,"dn")}}
P.p1.prototype={
$0:function(){this.b.aK(this.a)},
$S:function(){return{func:1}}}
P.oR.prototype={
$1:function(a){P.vw(this.a.a,this.c,a)},
$S:function(){return H.eP(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.oS.prototype={
$0:function(){var t,s,r,q
try{r=H.hr()
throw H.j(r)}catch(q){t=H.bG(q)
s=H.cn(q)
P.yh(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oM.prototype={}
P.dp.prototype={
d0:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.ec()
if((t&4)===0&&(this.e&32)===0)this.dK(this.gdU())},
eE:function(a){return this.d0(a,null)},
eK:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gX(t)}else t=!1
if(t)this.r.cj(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dK(this.gdV())}}}},
c3:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cq()
t=this.f
return t==null?$.$get$hj():t},
cq:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.ec()
if((this.e&32)===0)this.r=null
this.f=this.dT()},
bR:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e_(b)
else this.cp(new P.ql(b,null,[H.an(this,"dp",0)]))},
bQ:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e1(a,b)
else this.cp(new P.qn(a,b,null))},
fA:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.e0()
else this.cp(C.P)},
bU:function(){},
bV:function(){},
dT:function(){return},
cp:function(a){var t,s
t=this.r
if(t==null){t=new P.rd(null,null,0,[H.an(this,"dp",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.cj(this)}},
e_:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.da(this.a,a)
this.e=(this.e&4294967263)>>>0
this.cr((t&4)!==0)},
e1:function(a,b){var t,s
t=this.e
s=new P.qg(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cq()
t=this.f
if(!!J.am(t).$isc4&&t!==$.$get$hj())t.cf(s)
else s.$0()}else{s.$0()
this.cr((t&4)!==0)}},
e0:function(){var t,s
t=new P.qf(this)
this.cq()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.am(s).$isc4&&s!==$.$get$hj())s.cf(t)
else t.$0()},
dK:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.cr((t&4)!==0)},
cr:function(a){var t,s
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
if(s)this.bU()
else this.bV()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.cj(this)},
fo:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.yk(b,t)
this.c=c},
gbY:function(){return this.e}}
P.qg.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fG(s,{func:1,args:[P.ab,P.dQ]})
q=t.d
p=this.b
o=t.b
if(r)q.iA(o,p,this.c)
else q.da(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.qf.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eM(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.kf.prototype={
gbG:function(a){return this.a},
sbG:function(a,b){return this.a=b}}
P.ql.prototype={
d1:function(a){a.e_(this.b)}}
P.qn.prototype={
d1:function(a){a.e1(this.b,this.c)},
$askf:function(){},
gau:function(a){return this.b},
gaQ:function(){return this.c}}
P.qm.prototype={
d1:function(a){a.e0()},
gbG:function(a){return},
sbG:function(a,b){throw H.j(new P.dc("No events after a done."))}}
P.qY.prototype={
cj:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.yJ(new P.qZ(this,a))
this.a=1},
ec:function(){if(this.a===1)this.a=3},
gbY:function(){return this.a}}
P.qZ.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbG(r)
t.b=q
if(q==null)t.c=null
r.d1(this.b)},
$S:function(){return{func:1}}}
P.rd.prototype={
gX:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbG(0,b)
this.c=b}}}
P.re.prototype={}
P.rB.prototype={
$0:function(){return this.a.ap(this.b,this.c)},
$S:function(){return{func:1}}}
P.rA.prototype={
$2:function(a,b){P.HI(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dQ]}}}
P.rC.prototype={
$0:function(){return this.a.aK(this.b)},
$S:function(){return{func:1}}}
P.i0.prototype={
aW:function(a,b,c,d){return this.fH(a,d,c,!0===b)},
ey:function(a,b,c){return this.aW(a,null,b,c)},
fH:function(a,b,c,d){return P.Hl(this,a,b,c,d,H.an(this,"i0",0),H.an(this,"i0",1))},
dL:function(a,b){b.bR(0,a)},
fW:function(a,b,c){c.bQ(a,b)},
$asdn:function(a,b){return[b]}}
P.i1.prototype={
bR:function(a,b){if((this.e&2)!==0)return
this.fd(0,b)},
bQ:function(a,b){if((this.e&2)!==0)return
this.fe(a,b)},
bU:function(){var t=this.y
if(t==null)return
t.eE(0)},
bV:function(){var t=this.y
if(t==null)return
t.eK(0)},
dT:function(){var t=this.y
if(t!=null){this.y=null
return t.c3(0)}return},
fR:function(a){this.x.dL(a,this)},
fV:function(a,b){this.x.fW(a,b,this)},
fT:function(){this.fA()},
fs:function(a,b,c,d,e,f,g){this.y=this.x.a.ey(this.gfQ(),this.gfS(),this.gfU())},
$asdp:function(a,b){return[b]}}
P.qW.prototype={
dL:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.bG(q)
r=H.cn(q)
P.HH(b,s,r)
return}b.bR(0,t)}}
P.eS.prototype={
C:function(a){return H.x(this.a)},
$isee:1,
gau:function(a){return this.a},
gaQ:function(){return this.b}}
P.rx.prototype={}
P.rI.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fl()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.j(t)
r=H.j(t)
r.stack=J.cv(s)
throw r},
$S:function(){return{func:1}}}
P.r1.prototype={
eM:function(a){var t,s,r,q
try{if(C.e===$.ap){r=a.$0()
return r}r=P.yl(null,null,this,a)
return r}catch(q){t=H.bG(q)
s=H.cn(q)
r=P.ku(null,null,this,t,s)
return r}},
da:function(a,b){var t,s,r,q
try{if(C.e===$.ap){r=a.$1(b)
return r}r=P.yn(null,null,this,a,b)
return r}catch(q){t=H.bG(q)
s=H.cn(q)
r=P.ku(null,null,this,t,s)
return r}},
iA:function(a,b,c){var t,s,r,q
try{if(C.e===$.ap){r=a.$2(b,c)
return r}r=P.ym(null,null,this,a,b,c)
return r}catch(q){t=H.bG(q)
s=H.cn(q)
r=P.ku(null,null,this,t,s)
return r}},
cO:function(a,b){if(b)return new P.r2(this,a)
else return new P.r3(this,a)},
hr:function(a,b){return new P.r4(this,a)},
n:function(a,b){return},
eL:function(a){if($.ap===C.e)return a.$0()
return P.yl(null,null,this,a)},
d9:function(a,b){if($.ap===C.e)return a.$1(b)
return P.yn(null,null,this,a,b)},
iz:function(a,b,c){if($.ap===C.e)return a.$2(b,c)
return P.ym(null,null,this,a,b,c)}}
P.r2.prototype={
$0:function(){return this.a.eM(this.b)},
$S:function(){return{func:1}}}
P.r3.prototype={
$0:function(){return this.a.eL(this.b)},
$S:function(){return{func:1}}}
P.r4.prototype={
$1:function(a){return this.a.da(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qL.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gce:function(a){var t=H.M(this,0)
return H.dm(new P.qM(this,[t]),new P.qO(this),t,H.M(this,1))},
V:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fG(b)},
fG:function(a){var t=this.d
if(t==null)return!1
return this.aU(t[this.aT(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fO(0,b)},
fO:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aT(b)]
r=this.aU(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.vt()
this.b=t}this.dz(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.vt()
this.c=s}this.dz(s,b,c)}else this.hb(b,c)},
hb:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.vt()
this.d=t}s=this.aT(a)
r=t[s]
if(r==null){P.vu(t,s,[a,b]);++this.a
this.e=null}else{q=this.aU(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bt(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bt(this.c,b)
else return this.cH(0,b)},
cH:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aT(b)]
r=this.aU(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a9:function(a,b){var t,s,r,q
t=this.ct()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.j(new P.by(this))}},
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
dz:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.vu(a,b,c)},
bt:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Hn(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aT:function(a){return J.dC(a)&0x3ffffff},
aU:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.b_(a[s],b))return s
return-1},
$isbn:1,
$asbn:null}
P.qO.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qM.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gS:function(a){var t=this.a
return new P.qN(t,t.ct(),0,null,this.$ti)},
Z:function(a,b){return this.a.V(0,b)},
a9:function(a,b){var t,s,r,q
t=this.a
s=t.ct()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.j(new P.by(t))}}}
P.qN.prototype={
gI:function(){return this.d},
E:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.j(new P.by(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.kl.prototype={
bE:function(a){return H.It(a)&0x3ffffff},
bF:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ges()
if(r==null?b==null:r===b)return s}return-1}}
P.kk.prototype={
gS:function(a){var t=new P.d0(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gX:function(a){return this.a===0},
Z:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.fF(b)},
fF:function(a){var t=this.d
if(t==null)return!1
return this.aU(t[this.aT(a)],a)>=0},
cY:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.Z(0,a)?a:null
else return this.h_(a)},
h_:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aT(a)]
r=this.aU(s,a)
if(r<0)return
return J.fI(s,r).gdG()},
a9:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.j(new P.by(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dw(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dw(r,b)}else return this.aS(0,b)},
aS:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.Hq()
this.d=t}s=this.aT(b)
r=t[s]
if(r==null)t[s]=[this.cs(b)]
else{if(this.aU(r,b)>=0)return!1
r.push(this.cs(b))}return!0},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bt(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bt(this.c,b)
else return this.cH(0,b)},
cH:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aT(b)]
r=this.aU(s,b)
if(r<0)return!1
this.dA(s.splice(r,1)[0])
return!0},
b4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dw:function(a,b){if(a[b]!=null)return!1
a[b]=this.cs(b)
return!0},
bt:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dA(t)
delete a[b]
return!0},
cs:function(a){var t,s
t=new P.qS(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dA:function(a){var t,s
t=a.gfD()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aT:function(a){return J.dC(a)&0x3ffffff},
aU:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].gdG(),b))return s
return-1},
$iseA:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.qS.prototype={
gdG:function(){return this.a},
gfD:function(){return this.c}}
P.d0.prototype={
gI:function(){return this.d},
E:function(){var t=this.a
if(this.b!==t.r)throw H.j(new P.by(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qP.prototype={}
P.fh.prototype={
aB:function(a,b){return H.dm(this,b,H.an(this,"fh",0),null)},
Z:function(a,b){var t
for(t=this.gS(this);t.E();)if(J.b_(t.gI(),b))return!0
return!1},
a9:function(a,b){var t
for(t=this.gS(this);t.E();)b.$1(t.gI())},
a3:function(a,b){return P.d7(this,!0,H.an(this,"fh",0))},
ar:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gS(this)
for(s=0;t.E();)++s
return s},
gX:function(a){return!this.gS(this).E()},
C:function(a){return P.un(this,"(",")")},
$isn:1,
$asn:null}
P.hq.prototype={}
P.hx.prototype={}
P.fn.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
P.aN.prototype={
gS:function(a){return new H.dN(a,this.gm(a),0,null,[H.an(a,"aN",0)])},
T:function(a,b){return this.n(a,b)},
a9:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.j(new P.by(a))}},
gX:function(a){return this.gm(a)===0},
Z:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.b_(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.j(new P.by(a))}return!1},
aB:function(a,b){return new H.es(a,b,[H.an(a,"aN",0),null])},
di:function(a,b){return H.ve(a,b,null,H.an(a,"aN",0))},
a3:function(a,b){var t,s,r
t=H.a([],[H.an(a,"aN",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
ar:function(a){return this.a3(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bC:function(a,b,c,d){var t
P.da(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a4:function(a,b,c,d,e){var t,s,r,q,p,o
P.da(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.ak()
if(typeof b!=="number")return H.a6(b)
t=c-b
if(t===0)return
if(J.eQ(e,0))H.aY(P.bw(e,0,null,"skipCount",null))
if(H.dW(d,"$isp",[H.an(a,"aN",0)],"$asp")){s=e
r=d}else{r=J.zj(d,e).a3(0,!1)
s=0}q=J.kx(s)
p=J.bh(r)
if(J.cu(q.W(s,t),p.gm(r)))throw H.j(H.xb())
if(q.a1(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.W(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.W(s,o)))},
ay:function(a,b,c,d){return this.a4(a,b,c,d,0)},
aH:function(a,b,c,d){var t,s,r,q,p
P.da(b,c,this.gm(a),null,null,null)
d=C.c.ar(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.ay(a,b,r,d)
if(q!==0){this.a4(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a4(a,r,p,a,c)
this.ay(a,b,r,d)}},
b8:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.b_(this.n(a,t),b))return t
return-1},
bn:function(a,b){return this.b8(a,b,0)},
C:function(a){return P.jv(a,"[","]")},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.ro.prototype={
i:function(a,b,c){throw H.j(new P.S("Cannot modify unmodifiable map"))},
$isbn:1,
$asbn:null}
P.nn.prototype={
n:function(a,b){return J.fI(this.a,b)},
i:function(a,b,c){J.kC(this.a,b,c)},
a9:function(a,b){J.vL(this.a,b)},
gX:function(a){return J.kF(this.a)},
gm:function(a){return J.c0(this.a)},
C:function(a){return J.cv(this.a)},
$isbn:1,
$asbn:null}
P.hX.prototype={$asbn:null,$isbn:1}
P.no.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.O+=", "
t.a=!1
t=this.b
s=t.O+=H.x(a)
t.O=s+": "
t.O+=H.x(b)},
$S:function(){return{func:1,args:[,,]}}}
P.nb.prototype={
gS:function(a){return new P.qT(this,this.c,this.d,this.b,null,this.$ti)},
a9:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.u(r,s)
b.$1(r[s])
if(t!==this.d)H.aY(new P.by(this))}},
gX:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
T:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a6(b)
if(0>b||b>=t)H.aY(P.bA(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.u(s,q)
return s[q]},
a3:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.hg(t)
return t},
ar:function(a){return this.a3(a,!0)},
h:function(a,b){this.aS(0,b)},
b4:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.u(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
C:function(a){return P.jv(this,"{","}")},
eI:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.j(H.hr());++this.d
s=this.a
r=s.length
if(t>=r)return H.u(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aS:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.u(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dJ();++this.d},
dJ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a4(s,0,q,t,r)
C.b.a4(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
hg:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a4(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a4(a,0,p,r,t)
C.b.a4(a,p,p+this.c,this.a,0)
return this.c+p}},
fj:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asr:null,
$asn:null}
P.qT.prototype={
gI:function(){return this.e},
E:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aY(new P.by(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.u(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.ox.prototype={
gX:function(a){return this.a===0},
at:function(a,b){var t
for(t=J.cT(b);t.E();)this.h(0,t.gI())},
a3:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.d0(this,this.r,null,null,[null]),s.c=this.e,r=0;s.E();r=p){q=s.d
p=r+1
if(r>=t.length)return H.u(t,r)
t[r]=q}return t},
ar:function(a){return this.a3(a,!0)},
aB:function(a,b){return new H.f1(this,b,[H.M(this,0),null])},
C:function(a){return P.jv(this,"{","}")},
a9:function(a,b){var t
for(t=new P.d0(this,this.r,null,null,[null]),t.c=this.e;t.E();)b.$1(t.d)},
aL:function(a,b){var t,s
t=new P.d0(this,this.r,null,null,[null])
t.c=this.e
if(!t.E())return""
if(b===""){s=""
do s+=H.x(t.d)
while(t.E())}else{s=H.x(t.d)
for(;t.E();)s=s+b+H.x(t.d)}return s.charCodeAt(0)==0?s:s},
$iseA:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.ow.prototype={}
P.kU.prototype={
i9:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bh(b)
a1=P.da(a0,a1,t.gm(b),null,null,null)
s=$.$get$y1()
if(typeof a1!=="number")return H.a6(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.a_(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rV(C.c.a5(b,l))
h=H.rV(C.c.a5(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.u(s,g)
f=s[g]
if(f>=0){g=C.c.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.O.length
if(e==null)e=0
if(typeof e!=="number")return e.W()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.cd("")
p.O+=C.c.L(b,q,r)
p.O+=H.hK(k)
q=l
continue}}throw H.j(new P.bM("Invalid base64 data",b,r))}if(p!=null){t=p.O+=t.L(b,q,a1)
e=t.length
if(o>=0)P.w_(b,n,a1,o,m,e)
else{d=C.a.bP(e-1,4)+1
if(d===1)throw H.j(new P.bM("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.O=t;++d}}t=p.O
return C.c.aH(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.w_(b,n,a1,o,m,c)
else{d=C.d.bP(c,4)
if(d===1)throw H.j(new P.bM("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aH(b,a1,a1,d===2?"==":"=")}return b},
$asfW:function(){return[[P.p,P.C],P.y]}}
P.kV.prototype={
$asfY:function(){return[[P.p,P.C],P.y]}}
P.fW.prototype={}
P.fY.prototype={}
P.lz.prototype={
$asfW:function(){return[P.y,[P.p,P.C]]}}
P.pM.prototype={
gH:function(a){return"utf-8"}}
P.pN.prototype={
cR:function(a,b,c){var t,s,r,q
t=J.c0(a)
P.da(b,c,t,null,null,null)
s=new P.cd("")
r=new P.rq(!1,s,!0,0,0,0)
r.cR(a,b,t)
r.hK(0,a,t)
q=s.O
return q.charCodeAt(0)==0?q:q},
hw:function(a){return this.cR(a,0,null)},
$asfY:function(){return[[P.p,P.C],P.y]}}
P.rq.prototype={
hK:function(a,b,c){if(this.e>0)throw H.j(new P.bM("Unfinished UTF-8 octet sequence",b,c))},
cR:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.rs(c)
p=new P.rr(this,a,b,c)
$loop$0:for(o=J.bh(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aP()
if((l&192)!==128){k=new P.bM("Bad UTF-8 encoding 0x"+C.d.bL(l,16),a,m)
throw H.j(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.u(C.A,k)
if(t<=C.A[k]){k=new P.bM("Overlong encoding of 0x"+C.a.bL(t,16),a,m-r-1)
throw H.j(k)}if(t>1114111){k=new P.bM("Character outside valid Unicode range: 0x"+C.a.bL(t,16),a,m-r-1)
throw H.j(k)}if(!this.c||t!==65279)n.O+=H.hK(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cu(j,0)){this.c=!1
if(typeof j!=="number")return H.a6(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dr(l)
if(g.a1(l,0)){g=new P.bM("Negative UTF-8 code unit: -0x"+J.zn(g.de(l),16),a,h-1)
throw H.j(g)}else{if(typeof l!=="number")return l.aP()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bM("Bad UTF-8 encoding 0x"+C.d.bL(l,16),a,h-1)
throw H.j(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.rs.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bh(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aP()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.C,args:[,P.C]}}}
P.rr.prototype={
$2:function(a,b){this.a.b.O+=P.p6(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.C,P.C]}}}
P.cS.prototype={}
P.bI.prototype={}
P.dZ.prototype={
U:function(a,b){if(b==null)return!1
if(!(b instanceof P.dZ))return!1
return this.a===b.a&&this.b===b.b},
aE:function(a,b){return C.a.aE(this.a,b.ghf())},
ga6:function(a){var t=this.a
return(t^C.a.b2(t,30))&1073741823},
C:function(a){var t,s,r,q,p,o,n
t=P.zW(H.xo(this))
s=P.im(H.uY(this))
r=P.im(H.uX(this))
q=P.im(H.Gi(this))
p=P.im(H.Gk(this))
o=P.im(H.Gl(this))
n=P.zX(H.Gj(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.zV(C.a.W(this.a,b.giR()),this.b)},
gi5:function(){return this.a},
dq:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.j(P.dD(this.gi5()))},
$isbI:1,
$asbI:function(){return[P.dZ]},
ghf:function(){return this.a}}
P.V.prototype={$isbI:1,
$asbI:function(){return[P.ds]}}
P.dI.prototype={
W:function(a,b){return new P.dI(this.a+b.gbu())},
aw:function(a,b){if(typeof b!=="number")return H.a6(b)
return new P.dI(C.d.bJ(this.a*b))},
a1:function(a,b){return C.a.a1(this.a,b.gbu())},
aC:function(a,b){return C.a.aC(this.a,b.gbu())},
ax:function(a,b){return C.a.ax(this.a,b.gbu())},
U:function(a,b){if(b==null)return!1
if(!(b instanceof P.dI))return!1
return this.a===b.a},
ga6:function(a){return this.a&0x1FFFFFFF},
aE:function(a,b){return C.a.aE(this.a,b.gbu())},
C:function(a){var t,s,r,q,p
t=new P.lx()
s=this.a
if(s<0)return"-"+new P.dI(0-s).C(0)
r=t.$1(C.a.aq(s,6e7)%60)
q=t.$1(C.a.aq(s,1e6)%60)
p=new P.lw().$1(s%1e6)
return""+C.a.aq(s,36e8)+":"+H.x(r)+":"+H.x(q)+"."+H.x(p)},
de:function(a){return new P.dI(0-this.a)},
$isbI:1,
$asbI:function(){return[P.dI]},
gbu:function(){return this.a}}
P.lw.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.y,args:[P.C]}}}
P.lx.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.y,args:[P.C]}}}
P.ee.prototype={
gaQ:function(){return H.cn(this.$thrownJsError)}}
P.fl.prototype={
C:function(a){return"Throw of null."}}
P.cU.prototype={
gcv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcu:function(){return""},
C:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.x(t)
q=this.gcv()+s+r
if(!this.a)return q
p=this.gcu()
o=P.wh(this.b)
return q+p+": "+H.x(o)},
gH:function(a){return this.c}}
P.ez.prototype={
gcv:function(){return"RangeError"},
gcu:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.x(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.x(t)
else{if(typeof r!=="number")return r.aC()
if(r>t)s=": Not in range "+H.x(t)+".."+H.x(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.x(t)}}return s}}
P.mA.prototype={
gcv:function(){return"RangeError"},
gcu:function(){if(J.eQ(this.b,0))return": index must not be negative"
var t=this.f
if(J.b_(t,0))return": no indices are valid"
return": index should be less than "+H.x(t)},
gm:function(a){return this.f}}
P.S.prototype={
C:function(a){return"Unsupported operation: "+this.a}}
P.eF.prototype={
C:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.x(t):"UnimplementedError"}}
P.dc.prototype={
C:function(a){return"Bad state: "+this.a}}
P.by.prototype={
C:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.x(P.wh(t))+"."}}
P.nU.prototype={
C:function(a){return"Out of Memory"},
gaQ:function(){return},
$isee:1}
P.k_.prototype={
C:function(a){return"Stack Overflow"},
gaQ:function(){return},
$isee:1}
P.lo.prototype={
C:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.x(t)+"' during its initialization"}}
P.qw.prototype={
C:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.x(t)}}
P.bM.prototype={
C:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.x(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a1()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.L(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a6(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a5(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.x(r-o+1)+")\n"):s+(" (at character "+H.x(r+1)+")\n")
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
g=""}f=C.c.L(q,i,j)
return s+h+f+g+"\n"+C.c.aw(" ",r-i+h.length)+"^\n"}}
P.lG.prototype={
C:function(a){return"Expando:"+H.x(this.a)},
n:function(a,b){var t,s
t=this.bT
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aY(P.dE(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.uZ(b,"expando$values")
return s==null?null:H.uZ(s,t)},
i:function(a,b,c){var t,s
t=this.bT
if(typeof t!=="string")t.set(b,c)
else{s=H.uZ(b,"expando$values")
if(s==null){s=new P.ab()
H.xs(b,"expando$values",s)}H.xs(s,t,c)}},
gH:function(a){return this.a}}
P.C.prototype={$isbI:1,
$asbI:function(){return[P.ds]}}
P.n.prototype={
aB:function(a,b){return H.dm(this,b,H.an(this,"n",0),null)},
cg:function(a,b){return new H.e9(this,b,[H.an(this,"n",0)])},
Z:function(a,b){var t
for(t=this.gS(this);t.E();)if(J.b_(t.gI(),b))return!0
return!1},
a9:function(a,b){var t
for(t=this.gS(this);t.E();)b.$1(t.gI())},
aL:function(a,b){var t,s
t=this.gS(this)
if(!t.E())return""
if(b===""){s=""
do s+=H.x(t.gI())
while(t.E())}else{s=H.x(t.gI())
for(;t.E();)s=s+b+H.x(t.gI())}return s.charCodeAt(0)==0?s:s},
a3:function(a,b){return P.d7(this,!0,H.an(this,"n",0))},
ar:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gS(this)
for(s=0;t.E();)++s
return s},
gX:function(a){return!this.gS(this).E()},
gbi:function(a){var t,s
t=this.gS(this)
if(!t.E())throw H.j(H.hr())
s=t.gI()
if(t.E())throw H.j(H.FV())
return s},
T:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.zq("index"))
if(b<0)H.aY(P.bw(b,0,null,"index",null))
for(t=this.gS(this),s=0;t.E();){r=t.gI()
if(b===s)return r;++s}throw H.j(P.bA(b,this,"index",null,s))},
C:function(a){return P.un(this,"(",")")},
$asn:null}
P.jw.prototype={}
P.p.prototype={$asp:null,$isr:1,$asr:null,$isn:1,$asn:null}
P.bn.prototype={$asbn:null}
P.cB.prototype={
ga6:function(a){return P.ab.prototype.ga6.call(this,this)},
C:function(a){return"null"}}
P.ds.prototype={$isbI:1,
$asbI:function(){return[P.ds]}}
P.ab.prototype={constructor:P.ab,$isab:1,
U:function(a,b){return this===b},
ga6:function(a){return H.eu(this)},
C:function(a){return H.ob(this)},
gab:function(a){return new H.dS(H.kz(this),null)},
toString:function(){return this.C(this)}}
P.d8.prototype={}
P.eA.prototype={}
P.dQ.prototype={}
P.y.prototype={$isbI:1,
$asbI:function(){return[P.y]},
$isuS:1}
P.cd.prototype={
gm:function(a){return this.O.length},
gX:function(a){return this.O.length===0},
C:function(a){var t=this.O
return t.charCodeAt(0)==0?t:t},
gO:function(){return this.O}}
P.eH.prototype={}
P.pI.prototype={
$2:function(a,b){var t,s,r,q
t=J.bh(b)
s=t.bn(b,"=")
if(s===-1){if(!t.U(b,""))J.kC(a,P.rp(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.L(b,0,s)
q=C.c.ag(b,s+1)
t=this.a
J.kC(a,P.rp(r,0,r.length,t,!0),P.rp(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pF.prototype={
$2:function(a,b){throw H.j(new P.bM("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.y,P.C]}}}
P.pG.prototype={
$2:function(a,b){throw H.j(new P.bM("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.y],opt:[,]}}}
P.pH.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fo(C.c.L(this.a,a,b),16,null)
s=J.dr(t)
if(s.a1(t,0)||s.aC(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.C,args:[P.C,P.C]}}}
P.kr.prototype={
geT:function(){return this.b},
gcV:function(a){var t=this.c
if(t==null)return""
if(C.c.af(t,"["))return C.c.L(t,1,t.length-1)
return t},
gd2:function(a){var t=this.d
if(t==null)return P.y7(this.a)
return t},
gd5:function(a){var t=this.f
return t==null?"":t},
gem:function(){var t=this.r
return t==null?"":t},
gd6:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.y
s=new P.hX(P.xV(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
gep:function(){return this.c!=null},
ger:function(){return this.f!=null},
geq:function(){return this.r!=null},
C:function(a){var t=this.y
if(t==null){t=this.dO()
this.y=t}return t},
dO:function(){var t,s,r,q
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
U:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.am(b)
if(!!t.$iseH){if(this.a===b.gdf())if(this.c!=null===b.gep()){s=this.b
r=b.geT()
if(s==null?r==null:s===r){s=this.gcV(this)
r=t.gcV(b)
if(s==null?r==null:s===r)if(J.b_(this.gd2(this),t.gd2(b)))if(J.b_(this.e,t.geD(b))){s=this.f
r=s==null
if(!r===b.ger()){if(r)s=""
if(s===t.gd5(b)){t=this.r
s=t==null
if(!s===b.geq()){if(s)t=""
t=t===b.gem()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga6:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dO()
this.y=t}t=C.c.ga6(t)
this.z=t}return t},
$iseH:1,
gdf:function(){return this.a},
geD:function(a){return this.e}}
P.rM.prototype={
$1:function(a){throw H.j(new P.bM("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pE.prototype={
geR:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
t=t[0]+1
r=J.bh(s)
q=r.b8(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fC(s,o,p,C.l,!1)
if(n==null)n=r.L(s,o,p)
p=q}else n=null
m=P.fC(s,t,p,C.I,!1)
t=new P.qk(this,"data",null,null,null,m==null?r.L(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
C:function(a){var t,s
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
return t[0]===-1?"data:"+H.x(s):s}}
P.rF.prototype={
$1:function(a){return new Uint8Array(H.cD(96))},
$S:function(){return{func:1,args:[,]}}}
P.rE.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.u(t,a)
t=t[a]
J.z_(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.df,args:[,,]}}}
P.rG.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dh(a),r=0;r<t;++r)s.i(a,C.c.a5(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.df,P.y,P.C]}}}
P.rH.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a5(b,0),s=C.c.a5(b,1),r=J.dh(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.df,P.y,P.C]}}}
P.rc.prototype={
gep:function(){return this.c>0},
ger:function(){var t=this.f
if(typeof t!=="number")return t.a1()
return t<this.r},
geq:function(){return this.r<this.a.length},
gdf:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.af(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.af(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.af(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.af(this.a,"package")){this.x="package"
t="package"}else{t=C.c.L(this.a,0,t)
this.x=t}return t},
geT:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.L(this.a,s,t-1):""},
gcV:function(a){var t=this.c
return t>0?C.c.L(this.a,t,this.d):""},
gd2:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.W()
s=this.e
if(typeof s!=="number")return H.a6(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.W()
return H.fo(C.c.L(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.af(this.a,"http"))return 80
if(t===5&&C.c.af(this.a,"https"))return 443
return 0},
geD:function(a){return C.c.L(this.a,this.e,this.f)},
gd5:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a1()
return t<s?C.c.L(this.a,t+1,s):""},
gem:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ag(s,t+1):""},
gd6:function(){var t=this.f
if(typeof t!=="number")return t.a1()
if(t>=this.r)return C.a6
t=P.y
return new P.hX(P.xV(this.gd5(this),C.n),[t,t])},
ga6:function(a){var t=this.y
if(t==null){t=C.c.ga6(this.a)
this.y=t}return t},
U:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.am(b)
if(!!t.$iseH)return this.a===t.C(b)
return!1},
C:function(a){return this.a},
$iseH:1}
P.qk.prototype={}
W.aL.prototype={}
W.eR.prototype={
C:function(a){return String(a)},
$iseR:1,
$isf:1,
ga7:function(a){return a.href},
saj:function(a,b){return a.type=b},
sa7:function(a,b){return a.href=b}}
W.kK.prototype={
C:function(a){return String(a)},
$isf:1,
ga7:function(a){return a.href},
sa7:function(a,b){return a.href=b}}
W.eU.prototype={$iseU:1,$iscw:1,$isaf:1,$isab:1}
W.cN.prototype={$isab:1}
W.kS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cN]},
$isr:1,
$asr:function(){return[W.cN]},
$isn:1,
$asn:function(){return[W.cN]},
$isaE:1,
$asaE:function(){return[W.cN]},
$isaz:1,
$asaz:function(){return[W.cN]}}
W.h3.prototype={
$asp:function(){return[W.cN]},
$asr:function(){return[W.cN]},
$asn:function(){return[W.cN]},
$isp:1,
$isr:1,
$isn:1}
W.h6.prototype={
$asp:function(){return[W.cN]},
$asr:function(){return[W.cN]},
$asn:function(){return[W.cN]},
$isp:1,
$isr:1,
$isn:1}
W.kW.prototype={
ga7:function(a){return a.href},
sa7:function(a,b){return a.href=b}}
W.eW.prototype={$iseW:1}
W.eX.prototype={$iseX:1,$isf:1}
W.fV.prototype={$isfV:1,
gH:function(a){return a.name},
gaI:function(a){return a.value},
saj:function(a,b){return a.type=b}}
W.ec.prototype={$isf:1,
gm:function(a){return a.length}}
W.l5.prototype={
av:function(a,b){return a.get(b)}}
W.l9.prototype={$isf:1}
W.ii.prototype={
cT:function(a,b){return typeof console!="undefined"?console.error(b):null},
b_:function(a){return typeof console!="undefined"?console.group(a):null},
eu:function(a){return typeof console!="undefined"?console.info(a):null},
iH:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fZ.prototype={
gH:function(a){return a.name}}
W.ld.prototype={
av:function(a,b){if(b!=null)return a.get(P.I4(b,null))
return a.get()},
br:function(a){return this.av(a,null)}}
W.lg.prototype={
gaR:function(a){return a.style}}
W.lh.prototype={
ga7:function(a){return a.href}}
W.h_.prototype={
gaR:function(a){return a.style}}
W.h0.prototype={
gH:function(a){return a.name}}
W.li.prototype={
gaR:function(a){return a.style}}
W.bL.prototype={$isbL:1,$isab:1}
W.f_.prototype={
bO:function(a,b){var t=this.fP(a,b)
return t!=null?t:""},
fP:function(a,b){if(W.zU(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.zY()+b)},
K:function(a,b){return a.item(b)},
gbm:function(a){return a.content},
gbA:function(a){return a.display},
sbA:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iN.prototype={}
W.qi.prototype={
bO:function(a,b){var t=this.b
return J.zc(t.gae(t),b)},
hc:function(a,b){var t
for(t=this.a,t=new H.dN(t,t.gm(t),0,null,[H.M(t,0)]);t.E();)t.d.style[a]=b},
sbA:function(a,b){this.hc("display",b)},
fp:function(a){var t=P.d7(this.a,!0,null)
this.b=new H.es(t,new W.qj(),[H.M(t,0),null])}}
W.jL.prototype={}
W.qj.prototype={
$1:function(a){return J.tj(a)},
$S:function(){return{func:1,args:[,]}}}
W.ik.prototype={
gbm:function(a){return this.bO(a,"content")},
gbA:function(a){return this.bO(a,"display")}}
W.lj.prototype={
gaR:function(a){return a.style}}
W.lk.prototype={
gaR:function(a){return a.style}}
W.lp.prototype={
gcU:function(a){return a.files}}
W.f0.prototype={$isf0:1,$isab:1}
W.il.prototype={
c_:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
K:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.ed.prototype={$ised:1}
W.io.prototype={$isf:1}
W.ip.prototype={
gH:function(a){return a.name}}
W.ls.prototype={
gH:function(a){var t=a.name
if(P.we()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.we()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
C:function(a){return String(a)}}
W.iq.prototype={
C:function(a){return"Rectangle ("+H.x(a.left)+", "+H.x(a.top)+") "+H.x(this.gbe(a))+" x "+H.x(this.gb7(a))},
U:function(a,b){var t
if(b==null)return!1
t=J.am(b)
if(!t.$isbV)return!1
return a.left===t.gc6(b)&&a.top===t.gcd(b)&&this.gbe(a)===t.gbe(b)&&this.gb7(a)===t.gb7(b)},
ga6:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gbe(a)
q=this.gb7(a)
return W.y5(W.eO(W.eO(W.eO(W.eO(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gb7:function(a){return a.height},
gc6:function(a){return a.left},
gcd:function(a){return a.top},
gbe:function(a){return a.width},
$isbV:1,
$asbV:function(){}}
W.ir.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.y]},
$isr:1,
$asr:function(){return[P.y]},
$isn:1,
$asn:function(){return[P.y]},
$isaE:1,
$asaE:function(){return[P.y]},
$isaz:1,
$asaz:function(){return[P.y]}}
W.iO.prototype={
$asp:function(){return[P.y]},
$asr:function(){return[P.y]},
$asn:function(){return[P.y]},
$isp:1,
$isr:1,
$isn:1}
W.j7.prototype={
$asp:function(){return[P.y]},
$asr:function(){return[P.y]},
$asn:function(){return[P.y]},
$isp:1,
$isr:1,
$isn:1}
W.is.prototype={
K:function(a,b){return a.item(b)}}
W.it.prototype={
h:function(a,b){return a.add(b)},
Z:function(a,b){return a.contains(b)},
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.kh.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot modify list"))},
sm:function(a,b){throw H.j(new P.S("Cannot modify list"))},
gaR:function(a){return W.Hk(this)},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.cw.prototype={
geb:function(a){return new W.qq(a)},
gee:function(a){return new W.qr(a)},
C:function(a){return a.localName},
ev:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
aG:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.wg
if(t==null){t=H.a([],[W.e4])
s=new W.jJ(t)
t.push(W.y3(null))
t.push(W.y6())
$.wg=s
d=s}else d=t
t=$.wf
if(t==null){t=new W.ks(d)
$.wf=t
c=t}else{t.a=d
c=t}}if($.e_==null){t=document
s=t.implementation.createHTMLDocument("")
$.e_=s
$.tA=s.createRange()
s=$.e_
s.toString
r=s.createElement("base")
J.zh(r,t.baseURI)
$.e_.head.appendChild(r)}t=$.e_
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.e_
if(!!this.$iseX)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.e_.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.Z(C.a2,a.tagName)){$.tA.selectNodeContents(q)
p=$.tA.createContextualFragment(b)}else{q.innerHTML=b
p=$.e_.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.e_.body
if(q==null?t!=null:q!==t)J.zf(q)
c.ci(p)
document.adoptNode(p)
return p},
hy:function(a,b,c){return this.aG(a,b,c,null)},
ck:function(a,b,c,d){a.textContent=null
a.appendChild(this.aG(a,b,c,d))},
dg:function(a,b){return this.ck(a,b,null,null)},
ef:function(a){return a.click()},
gcZ:function(a){return new W.dV(a,"change",!1,[W.N])},
geB:function(a){return new W.dV(a,"click",!1,[W.uJ])},
$iscw:1,
$isaf:1,
$isab:1,
$isf:1,
gaR:function(a){return a.style},
gdQ:function(a){return a.namespaceURI},
giB:function(a){return a.tagName}}
W.rK.prototype={
$1:function(a){return!!J.am(a).$iscw},
$S:function(){return{func:1,args:[,]}}}
W.ly.prototype={
gH:function(a){return a.name},
saj:function(a,b){return a.type=b}}
W.h2.prototype={
gH:function(a){return a.name}}
W.lE.prototype={
gau:function(a){return a.error}}
W.N.prototype={$isN:1,$isab:1}
W.aF.prototype={
hk:function(a,b,c,d){if(c!=null)this.fz(a,b,c,!1)},
iu:function(a,b,c,d){if(c!=null)this.h7(a,b,c,!1)},
fz:function(a,b,c,d){return a.addEventListener(b,H.dq(c,1),!1)},
h7:function(a,b,c,d){return a.removeEventListener(b,H.dq(c,1),!1)}}
W.m6.prototype={
gH:function(a){return a.name}}
W.cg.prototype={$iscg:1,$isab:1,
gH:function(a){return a.name}}
W.f9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isf9:1,
$isaE:1,
$asaE:function(){return[W.cg]},
$isaz:1,
$asaz:function(){return[W.cg]},
$isp:1,
$asp:function(){return[W.cg]},
$isr:1,
$asr:function(){return[W.cg]},
$isn:1,
$asn:function(){return[W.cg]}}
W.iP.prototype={
$asp:function(){return[W.cg]},
$asr:function(){return[W.cg]},
$asn:function(){return[W.cg]},
$isp:1,
$isr:1,
$isn:1}
W.j8.prototype={
$asp:function(){return[W.cg]},
$asr:function(){return[W.cg]},
$asn:function(){return[W.cg]},
$isp:1,
$isr:1,
$isn:1}
W.iF.prototype={
geJ:function(a){var t=a.result
if(!!J.am(t).$isbi)return H.cI(t,0,null)
return t},
gau:function(a){return a.error}}
W.ma.prototype={
gH:function(a){return a.name}}
W.mb.prototype={
gau:function(a){return a.error},
gm:function(a){return a.length}}
W.md.prototype={
gaR:function(a){return a.style},
gbd:function(a){return a.weight}}
W.me.prototype={
h:function(a,b){return a.add(b)},
iQ:function(a,b,c){return a.forEach(H.dq(b,3),c)},
a9:function(a,b){b=H.dq(b,3)
return a.forEach(b)}}
W.mg.prototype={
av:function(a,b){return a.get(b)}}
W.iJ.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gH:function(a){return a.name}}
W.co.prototype={$isco:1,$isab:1}
W.mp.prototype={
gm:function(a){return a.length}}
W.fb.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isaE:1,
$asaE:function(){return[W.af]},
$isaz:1,
$asaz:function(){return[W.af]}}
W.iQ.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.j9.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.iL.prototype={
K:function(a,b){return a.item(b)}}
W.e2.prototype={
iZ:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
ib:function(a,b,c,d){return a.open(b,c,d)},
gix:function(a){return W.HL(a.response)},
bf:function(a,b){return a.send(b)},
$ise2:1,
$isab:1,
giy:function(a){return a.responseText}}
W.ms.prototype={
$1:function(a){return J.z6(a)},
$S:function(){return{func:1,args:[W.e2]}}}
W.mt.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.ax()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aF(0,t)
else p.bl(a)},
$S:function(){return{func:1,args:[,]}}}
W.hk.prototype={}
W.mw.prototype={
gH:function(a){return a.name}}
W.hl.prototype={$ishl:1}
W.fd.prototype={$isfd:1,$iscw:1,$isaf:1,$isab:1,
aF:function(a,b){return a.complete.$1(b)}}
W.mB.prototype={$iscw:1,$isf:1,$isaf:1,
ged:function(a){return a.checked},
gcU:function(a){return a.files},
gH:function(a){return a.name},
gaI:function(a){return a.value},
giF:function(a){return a.valueAsNumber},
shi:function(a,b){return a.accept=b},
seA:function(a,b){return a.multiple=b},
saj:function(a,b){return a.type=b}}
W.n_.prototype={
gH:function(a){return a.name}}
W.n1.prototype={
gaI:function(a){return a.value}}
W.hu.prototype={
h:function(a,b){return a.add(b)}}
W.hv.prototype={$ishv:1,
ga7:function(a){return a.href},
sa7:function(a,b){return a.href=b},
saj:function(a,b){return a.type=b}}
W.nh.prototype={
C:function(a){return String(a)},
ga7:function(a){return a.href}}
W.nm.prototype={
gH:function(a){return a.name}}
W.hC.prototype={
gau:function(a){return a.error}}
W.jD.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nr.prototype={
saj:function(a,b){return a.type=b}}
W.ns.prototype={
ged:function(a){return a.checked},
saj:function(a,b){return a.type=b}}
W.nt.prototype={
gbm:function(a){return a.content},
gH:function(a){return a.name}}
W.nu.prototype={
gaI:function(a){return a.value}}
W.nv.prototype={
iM:function(a,b,c){return a.send(b,c)},
bf:function(a,b){return a.send(b)}}
W.hD.prototype={
gH:function(a){return a.name}}
W.cq.prototype={$iscq:1,$isab:1}
W.jE.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cq]},
$isaz:1,
$asaz:function(){return[W.cq]},
$isp:1,
$asp:function(){return[W.cq]},
$isr:1,
$asr:function(){return[W.cq]},
$isn:1,
$asn:function(){return[W.cq]}}
W.j_.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.jj.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.nI.prototype={$isf:1}
W.nJ.prototype={
gH:function(a){return a.name}}
W.d_.prototype={
gbi:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.j(new P.dc("No elements"))
if(s>1)throw H.j(new P.dc("More than one element"))
return t.firstChild},
h:function(a,b){this.a.appendChild(b)},
at:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.u(s,b)
t.replaceChild(c,s[b])},
gS:function(a){var t=this.a.childNodes
return new W.iH(t,t.length,-1,null,[H.an(t,"bu",0)])},
a4:function(a,b,c,d,e){throw H.j(new P.S("Cannot setRange on Node list"))},
ay:function(a,b,c,d){return this.a4(a,b,c,d,0)},
bC:function(a,b,c,d){throw H.j(new P.S("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
sm:function(a,b){throw H.j(new P.S("Cannot set length on immutable List."))},
n:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$ashx:function(){return[W.af]},
$asfn:function(){return[W.af]},
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]}}
W.af.prototype={
gi8:function(a){return new W.d_(a)},
is:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
C:function(a){var t=a.nodeValue
return t==null?this.f9(a):t},
Z:function(a,b){return a.contains(b)},
$isaf:1,
$isab:1,
gc8:function(a){return a.parentNode},
gd3:function(a){return a.previousSibling}}
W.jH.prototype={
d4:function(a){return a.previousNode()}}
W.jI.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
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
W.nO.prototype={
saj:function(a,b){return a.type=b}}
W.nP.prototype={
gH:function(a){return a.name},
saj:function(a,b){return a.type=b}}
W.nT.prototype={
gaI:function(a){return a.value}}
W.nV.prototype={
gH:function(a){return a.name},
gaI:function(a){return a.value}}
W.nZ.prototype={
gH:function(a){return a.name},
gaI:function(a){return a.value}}
W.o0.prototype={$isf:1}
W.e5.prototype={
gH:function(a){return a.name}}
W.o5.prototype={
gm:function(a){return a.length}}
W.ci.prototype={
K:function(a,b){return a.item(b)},
$isci:1,
$isab:1,
gm:function(a){return a.length},
gH:function(a){return a.name}}
W.jR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ci]},
$isr:1,
$asr:function(){return[W.ci]},
$isn:1,
$asn:function(){return[W.ci]},
$isaE:1,
$asaE:function(){return[W.ci]},
$isaz:1,
$asaz:function(){return[W.ci]}}
W.j1.prototype={
$asp:function(){return[W.ci]},
$asr:function(){return[W.ci]},
$asn:function(){return[W.ci]},
$isp:1,
$isr:1,
$isn:1}
W.jl.prototype={
$asp:function(){return[W.ci]},
$asr:function(){return[W.ci]},
$asn:function(){return[W.ci]},
$isp:1,
$isr:1,
$isn:1}
W.oa.prototype={
bf:function(a,b){return a.send(b)}}
W.oe.prototype={
gaI:function(a){return a.value}}
W.jT.prototype={
bf:function(a,b){return a.send(b)}}
W.jU.prototype={
saj:function(a,b){return a.type=b}}
W.fr.prototype={$isfr:1,$iscw:1,$isaf:1,$isab:1,
saj:function(a,b){return a.type=b}}
W.jV.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gH:function(a){return a.name},
gaI:function(a){return a.value},
seA:function(a,b){return a.multiple=b}}
W.ov.prototype={
gH:function(a){return a.name}}
W.oy.prototype={$isf:1}
W.oz.prototype={
gH:function(a){return a.name}}
W.oA.prototype={
gH:function(a){return a.name}}
W.cr.prototype={$iscr:1,$isab:1}
W.jX.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cr]},
$isr:1,
$asr:function(){return[W.cr]},
$isn:1,
$asn:function(){return[W.cr]},
$isaE:1,
$asaE:function(){return[W.cr]},
$isaz:1,
$asaz:function(){return[W.cr]}}
W.h4.prototype={
$asp:function(){return[W.cr]},
$asr:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isp:1,
$isr:1,
$isn:1}
W.h7.prototype={
$asp:function(){return[W.cr]},
$asr:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isp:1,
$isr:1,
$isn:1}
W.oD.prototype={
saj:function(a,b){return a.type=b}}
W.hP.prototype={$ishP:1}
W.cs.prototype={$iscs:1,$isab:1,
gbd:function(a){return a.weight}}
W.jY.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cs]},
$isr:1,
$asr:function(){return[W.cs]},
$isn:1,
$asn:function(){return[W.cs]},
$isaE:1,
$asaE:function(){return[W.cs]},
$isaz:1,
$asaz:function(){return[W.cs]}}
W.j2.prototype={
$asp:function(){return[W.cs]},
$asr:function(){return[W.cs]},
$asn:function(){return[W.cs]},
$isp:1,
$isr:1,
$isn:1}
W.jm.prototype={
$asp:function(){return[W.cs]},
$asr:function(){return[W.cs]},
$asn:function(){return[W.cs]},
$isp:1,
$isr:1,
$isn:1}
W.fs.prototype={$isfs:1,$isab:1}
W.oF.prototype={
gau:function(a){return a.error}}
W.ck.prototype={
K:function(a,b){return a.item(b)},
$isck:1,
$isab:1,
gm:function(a){return a.length}}
W.oG.prototype={
gH:function(a){return a.name}}
W.oH.prototype={
gH:function(a){return a.name}}
W.oL.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a9:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gX:function(a){return a.key(0)==null},
$isbn:1,
$asbn:function(){return[P.y,P.y]}}
W.p7.prototype={
saj:function(a,b){return a.type=b}}
W.p9.prototype={
av:function(a,b){return a.get(b)}}
W.cm.prototype={$iscm:1,$isab:1,
ga7:function(a){return a.href}}
W.e7.prototype={}
W.k1.prototype={
aG:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.cm(a,b,c,d)
t=W.zZ("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.d_(s).at(0,J.z3(t))
return s}}
W.pe.prototype={
aG:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.cm(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.L.aG(t.createElement("table"),b,c,d)
t.toString
t=new W.d_(t)
r=t.gbi(t)
r.toString
t=new W.d_(r)
q=t.gbi(t)
s.toString
q.toString
new W.d_(s).at(0,new W.d_(q))
return s}}
W.pf.prototype={
aG:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cm(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.L.aG(t.createElement("table"),b,c,d)
t.toString
t=new W.d_(t)
r=t.gbi(t)
s.toString
r.toString
new W.d_(s).at(0,new W.d_(r))
return s}}
W.hU.prototype={
ck:function(a,b,c,d){var t
a.textContent=null
t=this.aG(a,b,c,d)
a.content.appendChild(t)},
dg:function(a,b){return this.ck(a,b,null,null)},
$ishU:1,
gbm:function(a){return a.content}}
W.pj.prototype={
gH:function(a){return a.name},
gaI:function(a){return a.value}}
W.cR.prototype={$isab:1}
W.cL.prototype={$isab:1}
W.pp.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaE:1,
$asaE:function(){return[W.cL]},
$isaz:1,
$asaz:function(){return[W.cL]},
$isp:1,
$asp:function(){return[W.cL]},
$isr:1,
$asr:function(){return[W.cL]},
$isn:1,
$asn:function(){return[W.cL]}}
W.j3.prototype={
$asp:function(){return[W.cL]},
$asr:function(){return[W.cL]},
$asn:function(){return[W.cL]},
$isp:1,
$isr:1,
$isn:1}
W.jn.prototype={
$asp:function(){return[W.cL]},
$asr:function(){return[W.cL]},
$asn:function(){return[W.cL]},
$isp:1,
$isr:1,
$isn:1}
W.pq.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaE:1,
$asaE:function(){return[W.cR]},
$isaz:1,
$asaz:function(){return[W.cR]},
$isp:1,
$asp:function(){return[W.cR]},
$isr:1,
$asr:function(){return[W.cR]},
$isn:1,
$asn:function(){return[W.cR]}}
W.h5.prototype={
$asp:function(){return[W.cR]},
$asr:function(){return[W.cR]},
$asn:function(){return[W.cR]},
$isp:1,
$isr:1,
$isn:1}
W.h8.prototype={
$asp:function(){return[W.cR]},
$asr:function(){return[W.cR]},
$asn:function(){return[W.cR]},
$isp:1,
$isr:1,
$isn:1}
W.pu.prototype={
gm:function(a){return a.length}}
W.ct.prototype={$isct:1,$isab:1}
W.k2.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ct]},
$isr:1,
$asr:function(){return[W.ct]},
$isn:1,
$asn:function(){return[W.ct]},
$isaE:1,
$asaE:function(){return[W.ct]},
$isaz:1,
$asaz:function(){return[W.ct]}}
W.j4.prototype={
$asp:function(){return[W.ct]},
$asr:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isp:1,
$isr:1,
$isn:1}
W.jo.prototype={
$asp:function(){return[W.ct]},
$asr:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isp:1,
$isr:1,
$isn:1}
W.fw.prototype={$isfw:1,$isab:1}
W.k3.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.e8.prototype={}
W.k4.prototype={
ic:function(a){return a.parentNode()},
d4:function(a){return a.previousNode()}}
W.pJ.prototype={
C:function(a){return String(a)},
$isf:1,
ga7:function(a){return a.href}}
W.pK.prototype={
av:function(a,b){return a.get(b)}}
W.pO.prototype={
gm:function(a){return a.length}}
W.fx.prototype={$isfx:1,$isab:1}
W.k5.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pT.prototype={
bf:function(a,b){return a.send(b)}}
W.k8.prototype={$isf:1,
gH:function(a){return a.name}}
W.q_.prototype={$isf:1}
W.eK.prototype={$isf:1}
W.fy.prototype={$isfy:1,$isaf:1,$isab:1,
gH:function(a){return a.name},
gdQ:function(a){return a.namespaceURI}}
W.qh.prototype={
C:function(a){return"Rectangle ("+H.x(a.left)+", "+H.x(a.top)+") "+H.x(a.width)+" x "+H.x(a.height)},
U:function(a,b){var t,s,r
if(b==null)return!1
t=J.am(b)
if(!t.$isbV)return!1
s=a.left
r=t.gc6(b)
if(s==null?r==null:s===r){s=a.top
r=t.gcd(b)
if(s==null?r==null:s===r){s=a.width
r=t.gbe(b)
if(s==null?r==null:s===r){s=a.height
t=t.gb7(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga6:function(a){var t,s,r,q
t=J.dC(a.left)
s=J.dC(a.top)
r=J.dC(a.width)
q=J.dC(a.height)
return W.y5(W.eO(W.eO(W.eO(W.eO(0,t),s),r),q))},
$isbV:1,
$asbV:function(){},
gb7:function(a){return a.height},
gc6:function(a){return a.left},
gcd:function(a){return a.top},
gbe:function(a){return a.width}}
W.i_.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[P.bV]},
$isaz:1,
$asaz:function(){return[P.bV]},
$isp:1,
$asp:function(){return[P.bV]},
$isr:1,
$asr:function(){return[P.bV]},
$isn:1,
$asn:function(){return[P.bV]}}
W.j5.prototype={
$asp:function(){return[P.bV]},
$asr:function(){return[P.bV]},
$asn:function(){return[P.bV]},
$isp:1,
$isr:1,
$isn:1}
W.jp.prototype={
$asp:function(){return[P.bV]},
$asr:function(){return[P.bV]},
$asn:function(){return[P.bV]},
$isp:1,
$isr:1,
$isn:1}
W.ke.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bL]},
$isr:1,
$asr:function(){return[W.bL]},
$isn:1,
$asn:function(){return[W.bL]},
$isaE:1,
$asaE:function(){return[W.bL]},
$isaz:1,
$asaz:function(){return[W.bL]}}
W.j6.prototype={
$asp:function(){return[W.bL]},
$asr:function(){return[W.bL]},
$asn:function(){return[W.bL]},
$isp:1,
$isr:1,
$isn:1}
W.jq.prototype={
$asp:function(){return[W.bL]},
$asr:function(){return[W.bL]},
$asn:function(){return[W.bL]},
$isp:1,
$isr:1,
$isn:1}
W.qo.prototype={$isf:1}
W.qp.prototype={
gb7:function(a){return a.height},
gbe:function(a){return a.width}}
W.kj.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.co]},
$isaz:1,
$asaz:function(){return[W.co]},
$isp:1,
$asp:function(){return[W.co]},
$isr:1,
$asr:function(){return[W.co]},
$isn:1,
$asn:function(){return[W.co]}}
W.iR.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.ja.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.qK.prototype={$isf:1}
W.i5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isaE:1,
$asaE:function(){return[W.af]},
$isaz:1,
$asaz:function(){return[W.af]}}
W.iS.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.jb.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.r9.prototype={$isf:1}
W.kn.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ck]},
$isr:1,
$asr:function(){return[W.ck]},
$isn:1,
$asn:function(){return[W.ck]},
$isaE:1,
$asaE:function(){return[W.ck]},
$isaz:1,
$asaz:function(){return[W.ck]}}
W.iT.prototype={
$asp:function(){return[W.ck]},
$asr:function(){return[W.ck]},
$asn:function(){return[W.ck]},
$isp:1,
$isr:1,
$isn:1}
W.jc.prototype={
$asp:function(){return[W.ck]},
$asr:function(){return[W.ck]},
$asn:function(){return[W.ck]},
$isp:1,
$isr:1,
$isn:1}
W.kp.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cm]},
$isaz:1,
$asaz:function(){return[W.cm]},
$isp:1,
$asp:function(){return[W.cm]},
$isr:1,
$asr:function(){return[W.cm]},
$isn:1,
$asn:function(){return[W.cm]}}
W.iU.prototype={
$asp:function(){return[W.cm]},
$asr:function(){return[W.cm]},
$asn:function(){return[W.cm]},
$isp:1,
$isr:1,
$isn:1}
W.jd.prototype={
$asp:function(){return[W.cm]},
$asr:function(){return[W.cm]},
$asn:function(){return[W.cm]},
$isp:1,
$isr:1,
$isn:1}
W.rv.prototype={$isf:1}
W.rw.prototype={$isf:1}
W.qd.prototype={
a9:function(a,b){var t,s,r,q,p
for(t=this.gai(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.bF)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gai:function(a){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.y])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.u(t,q)
p=t[q]
o=J.aq(p)
if(o.gdQ(p)==null)s.push(o.gH(p))}return s},
gX:function(a){return this.gai(this).length===0},
$isbn:1,
$asbn:function(){return[P.y,P.y]},
gdM:function(){return this.a}}
W.qq.prototype={
n:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gai(this).length}}
W.qr.prototype={
aO:function(){var t,s,r,q,p
t=P.a0(null,null,null,P.y)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bF)(s),++q){p=J.tn(s[q])
if(p.length!==0)t.h(0,p)}return t},
eU:function(a){this.a.className=a.aL(0," ")},
gm:function(a){return this.a.classList.length},
gX:function(a){return this.a.classList.length===0},
Z:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
gdM:function(){return this.a}}
W.kg.prototype={
aW:function(a,b,c,d){return W.dg(this.a,this.b,a,!1,H.M(this,0))},
ey:function(a,b,c){return this.aW(a,null,b,c)}}
W.dV.prototype={}
W.qu.prototype={
c3:function(a){if(this.b==null)return
this.e7()
this.b=null
this.d=null
return},
d0:function(a,b){if(this.b==null)return;++this.a
this.e7()},
eE:function(a){return this.d0(a,null)},
eK:function(a){if(this.b==null||this.a<=0)return;--this.a
this.e5()},
e5:function(){var t=this.d
if(t!=null&&this.a<=0)J.yT(this.b,this.c,t,!1)},
e7:function(){var t=this.d
if(t!=null)J.zg(this.b,this.c,t,!1)},
fq:function(a,b,c,d,e){this.e5()}}
W.qv.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.i3.prototype={
bk:function(a){return $.$get$y4().Z(0,W.h1(a))},
b3:function(a,b,c){var t,s,r
t=W.h1(a)
s=$.$get$vv()
r=s.n(0,H.x(t)+"::"+b)
if(r==null)r=s.n(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
ft:function(a){var t,s
t=$.$get$vv()
if(t.gX(t)){for(s=0;s<262;++s)t.i(0,C.a_[s],W.Ij())
for(s=0;s<12;++s)t.i(0,C.q[s],W.Ik())}},
$ise4:1,
geS:function(){return this.a}}
W.bu.prototype={
gS:function(a){return new W.iH(a,this.gm(a),-1,null,[H.an(a,"bu",0)])},
h:function(a,b){throw H.j(new P.S("Cannot add to immutable List."))},
a4:function(a,b,c,d,e){throw H.j(new P.S("Cannot setRange on immutable List."))},
ay:function(a,b,c,d){return this.a4(a,b,c,d,0)},
aH:function(a,b,c,d){throw H.j(new P.S("Cannot modify an immutable List."))},
bC:function(a,b,c,d){throw H.j(new P.S("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.jJ.prototype={
h:function(a,b){this.a.push(b)},
bk:function(a){return C.b.ea(this.a,new W.nL(a))},
b3:function(a,b,c){return C.b.ea(this.a,new W.nK(a,b,c))},
$ise4:1}
W.nL.prototype={
$1:function(a){return a.bk(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.nK.prototype={
$1:function(a){return a.b3(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.i6.prototype={
bk:function(a){return this.a.Z(0,W.h1(a))},
b3:function(a,b,c){var t,s
t=W.h1(a)
s=this.c
if(s.Z(0,H.x(t)+"::"+b))return this.d.hl(c)
else if(s.Z(0,"*::"+b))return this.d.hl(c)
else{s=this.b
if(s.Z(0,H.x(t)+"::"+b))return!0
else if(s.Z(0,"*::"+b))return!0
else if(s.Z(0,H.x(t)+"::*"))return!0
else if(s.Z(0,"*::*"))return!0}return!1},
fv:function(a,b,c,d){var t,s,r
this.a.at(0,c)
t=b.cg(0,new W.ra())
s=b.cg(0,new W.rb())
this.b.at(0,t)
r=this.c
r.at(0,C.D)
r.at(0,s)},
$ise4:1,
geS:function(){return this.d}}
W.ra.prototype={
$1:function(a){return!C.b.Z(C.q,a)},
$S:function(){return{func:1,args:[,]}}}
W.rb.prototype={
$1:function(a){return C.b.Z(C.q,a)},
$S:function(){return{func:1,args:[,]}}}
W.rl.prototype={
b3:function(a,b,c){if(this.ff(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.vM(a).a.getAttribute("template")==="")return this.e.Z(0,b)
return!1}}
W.rm.prototype={
$1:function(a){return"TEMPLATE::"+H.x(a)},
$S:function(){return{func:1,args:[,]}}}
W.rk.prototype={
bk:function(a){var t=J.am(a)
if(!!t.$ishO)return!1
t=!!t.$isc7
if(t&&W.h1(a)==="foreignObject")return!1
if(t)return!0
return!1},
b3:function(a,b,c){if(b==="is"||C.c.af(b,"on"))return!1
return this.bk(a)},
$ise4:1}
W.iH.prototype={
E:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.fI(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gI:function(){return this.d}}
W.e4.prototype={}
W.rn.prototype={
ci:function(a){}}
W.r8.prototype={}
W.ks.prototype={
ci:function(a){new W.rt(this).$2(a,null)},
bw:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
ha:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.vM(a)
r=s.gdM().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.bG(n)}p="element unprintable"
try{p=J.cv(a)}catch(n){H.bG(n)}try{o=W.h1(a)
this.h9(a,b,t,p,o,s,r)}catch(n){if(H.bG(n) instanceof P.cU)throw n
else{this.bw(a,b)
window
m="Removing corrupted element "+H.x(p)
if(typeof console!="undefined")console.warn(m)}}},
h9:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.bw(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bk(a)){this.bw(a,b)
window
t="Removing disallowed element <"+H.x(e)+"> from "+J.cv(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.b3(a,"is",g)){this.bw(a,b)
window
t="Removing disallowed type extension <"+H.x(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gai(f)
s=H.a(t.slice(0),[H.M(t,0)])
for(r=f.gai(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.u(s,r)
q=s[r]
if(!this.a.b3(a,J.zm(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.x(e)+" "+q+'="'+H.x(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.am(a).$ishU)this.ci(a.content)}}
W.rt.prototype={
$2:function(a,b){var t,s,r,q,p,o
r=this.a
switch(a.nodeType){case 1:r.ha(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.bw(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.z4(t)}catch(q){H.bG(q)
p=t
if(r){o=J.aq(p)
if(o.gc8(p)!=null){o.gc8(p)
o.gc8(p).removeChild(p)}}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.af,W.af]}}}
P.rh.prototype={
bD:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
bc:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.am(a)
if(!!s.$isdZ)return new Date(a.a)
if(!!s.$isGE)throw H.j(new P.eF("structured clone of RegExp"))
if(!!s.$iscg)return a
if(!!s.$iseW)return a
if(!!s.$isf9)return a
if(!!s.$ishl)return a
if(!!s.$isfj||!!s.$iset)return a
if(!!s.$isbn){r=this.bD(a)
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
s.a9(a,new P.rj(t,this))
return t.a}if(!!s.$isp){r=this.bD(a)
t=this.b
if(r>=t.length)return H.u(t,r)
o=t[r]
if(o!=null)return o
return this.hx(a,r)}throw H.j(new P.eF("structured clone of other type"))},
hx:function(a,b){var t,s,r,q,p
t=J.bh(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.u(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.bc(t.n(a,p))
if(p>=r.length)return H.u(r,p)
r[p]=q}return r}}
P.rj.prototype={
$2:function(a,b){this.a.a[a]=this.b.bc(b)},
$S:function(){return{func:1,args:[,,]}}}
P.q6.prototype={
bD:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
bc:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dZ(s,!0)
r.dq(s,!0)
return r}if(a instanceof RegExp)throw H.j(new P.eF("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.I5(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bD(a)
r=this.b
o=r.length
if(p>=o)return H.u(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.jz()
t.a=n
if(p>=o)return H.u(r,p)
r[p]=n
this.hM(a,new P.q7(t,this))
return t.a}if(a instanceof Array){p=this.bD(a)
r=this.b
if(p>=r.length)return H.u(r,p)
n=r[p]
if(n!=null)return n
o=J.bh(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.u(r,p)
r[p]=n
if(typeof m!=="number")return H.a6(m)
r=J.dh(n)
l=0
for(;l<m;++l)r.i(n,l,this.bc(o.n(a,l)))
return n}return a}}
P.q7.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bc(b)
J.kC(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.rO.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.y,,]}}}
P.ri.prototype={}
P.ka.prototype={
hM:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bF)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rP.prototype={
$1:function(a){return this.a.aF(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rQ.prototype={
$1:function(a){return this.a.bl(a)},
$S:function(){return{func:1,args:[,]}}}
P.le.prototype={
e8:function(a){if($.$get$w6().b.test(a))return a
throw H.j(P.dE(a,"value","Not a valid class token"))},
C:function(a){return this.aO().aL(0," ")},
gS:function(a){var t,s
t=this.aO()
s=new P.d0(t,t.r,null,null,[null])
s.c=t.e
return s},
a9:function(a,b){this.aO().a9(0,b)},
aB:function(a,b){var t=this.aO()
return new H.f1(t,b,[H.M(t,0),null])},
gX:function(a){return this.aO().a===0},
gm:function(a){return this.aO().a},
Z:function(a,b){if(typeof b!=="string")return!1
this.e8(b)
return this.aO().Z(0,b)},
cY:function(a){return this.Z(0,a)?a:null},
h:function(a,b){this.e8(b)
return this.i6(0,new P.lf(b))},
a3:function(a,b){return this.aO().a3(0,!0)},
ar:function(a){return this.a3(a,!0)},
i6:function(a,b){var t,s
t=this.aO()
s=b.$1(t)
this.eU(t)
return s},
$iseA:1,
$aseA:function(){return[P.y]},
$isr:1,
$asr:function(){return[P.y]},
$isn:1,
$asn:function(){return[P.y]}}
P.lf.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.lq.prototype={
gH:function(a){return a.name}}
P.rD.prototype={
$1:function(a){this.b.aF(0,new P.ka([],[],!1).bc(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mz.prototype={
av:function(a,b){var t,s,r,q,p
try{t=a.get(b)
q=P.yg(t)
return q}catch(p){s=H.bG(p)
r=H.cn(p)
q=P.tU(s,r,null)
return q}},
gH:function(a){return a.name}}
P.nQ.prototype={
c_:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fX(a,b,c)
q=P.yg(t)
return q}catch(p){s=H.bG(p)
r=H.cn(p)
q=P.tU(s,r,null)
return q}},
h:function(a,b){return this.c_(a,b,null)},
fX:function(a,b,c){return a.add(new P.ri([],[]).bc(b))},
gH:function(a){return a.name}}
P.hM.prototype={
gau:function(a){return a.error}}
P.py.prototype={
gau:function(a){return a.error}}
P.qR.prototype={
bH:function(a){if(a<=0||a>4294967296)throw H.j(P.xx("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
c7:function(){return Math.random()}}
P.r_.prototype={
b1:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.aq(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bH:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.j(P.xx("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.b1()
return(this.a&t)>>>0}do{this.b1()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
c7:function(){this.b1()
var t=this.a
this.b1()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
fu:function(a){var t,s,r,q,p,o,n,m
t=J.eQ(a,0)?-1:0
do{if(typeof a!=="number")return a.aP()
s=(a&4294967295)>>>0
a=C.d.aq(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.aq(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.aq(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.aq(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.aq(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.aq(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.aq(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.b1()
this.b1()
this.b1()
this.b1()}}
P.r0.prototype={}
P.bV.prototype={$asbV:null}
P.kH.prototype={$isf:1,
ga7:function(a){return a.href}}
P.eb.prototype={$isf:1}
P.lH.prototype={$isf:1}
P.lI.prototype={$isf:1}
P.lJ.prototype={$isf:1}
P.lK.prototype={$isf:1}
P.lL.prototype={$isf:1}
P.lM.prototype={$isf:1}
P.lN.prototype={$isf:1}
P.lO.prototype={$isf:1}
P.lP.prototype={$isf:1}
P.lQ.prototype={$isf:1,
ga7:function(a){return a.href}}
P.lR.prototype={$isf:1}
P.lS.prototype={$isf:1}
P.lT.prototype={$isf:1}
P.lU.prototype={$isf:1}
P.lV.prototype={$isf:1}
P.lW.prototype={$isf:1}
P.mc.prototype={$isf:1,
ga7:function(a){return a.href}}
P.cp.prototype={$isf:1}
P.mx.prototype={$isf:1,
ga7:function(a){return a.href}}
P.d6.prototype={$isab:1}
P.n4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d6]},
$isr:1,
$asr:function(){return[P.d6]},
$isn:1,
$asn:function(){return[P.d6]}}
P.iV.prototype={
$asp:function(){return[P.d6]},
$asr:function(){return[P.d6]},
$asn:function(){return[P.d6]},
$isp:1,
$isr:1,
$isn:1}
P.je.prototype={
$asp:function(){return[P.d6]},
$asr:function(){return[P.d6]},
$asn:function(){return[P.d6]},
$isp:1,
$isr:1,
$isn:1}
P.np.prototype={$isf:1}
P.nq.prototype={$isf:1}
P.d9.prototype={$isab:1}
P.nM.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d9]},
$isr:1,
$asr:function(){return[P.d9]},
$isn:1,
$asn:function(){return[P.d9]}}
P.iW.prototype={
$asp:function(){return[P.d9]},
$asr:function(){return[P.d9]},
$asn:function(){return[P.d9]},
$isp:1,
$isr:1,
$isn:1}
P.jf.prototype={
$asp:function(){return[P.d9]},
$asr:function(){return[P.d9]},
$asn:function(){return[P.d9]},
$isp:1,
$isr:1,
$isn:1}
P.o3.prototype={$isf:1,
ga7:function(a){return a.href}}
P.o8.prototype={
gm:function(a){return a.length}}
P.hO.prototype={$ishO:1,$isf:1,
ga7:function(a){return a.href},
saj:function(a,b){return a.type=b}}
P.p5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.y]},
$isr:1,
$asr:function(){return[P.y]},
$isn:1,
$asn:function(){return[P.y]}}
P.iX.prototype={
$asp:function(){return[P.y]},
$asr:function(){return[P.y]},
$asn:function(){return[P.y]},
$isp:1,
$isr:1,
$isn:1}
P.jg.prototype={
$asp:function(){return[P.y]},
$asr:function(){return[P.y]},
$asn:function(){return[P.y]},
$isp:1,
$isr:1,
$isn:1}
P.p8.prototype={
saj:function(a,b){return a.type=b}}
P.kO.prototype={
aO:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a0(null,null,null,P.y)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bF)(r),++p){o=J.tn(r[p])
if(o.length!==0)s.h(0,o)}return s},
eU:function(a){this.a.setAttribute("class",a.aL(0," "))}}
P.c7.prototype={
gee:function(a){return new P.kO(a)},
aG:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.e4])
t.push(W.y3(null))
t.push(W.y6())
t.push(new W.rk())
c=new W.ks(new W.jJ(t))}s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.v).hy(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.d_(q)
o=t.gbi(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
ev:function(a,b,c,d,e){throw H.j(new P.S("Cannot invoke insertAdjacentHtml on SVG."))},
ef:function(a){throw H.j(new P.S("Cannot invoke click SVG."))},
gcZ:function(a){return new W.dV(a,"change",!1,[W.N])},
geB:function(a){return new W.dV(a,"click",!1,[W.uJ])},
$isc7:1,
$isf:1}
P.pb.prototype={$isf:1}
P.pd.prototype={$isf:1}
P.eE.prototype={}
P.po.prototype={$isf:1,
ga7:function(a){return a.href}}
P.de.prototype={$isab:1}
P.pz.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.de]},
$isr:1,
$asr:function(){return[P.de]},
$isn:1,
$asn:function(){return[P.de]}}
P.iY.prototype={
$asp:function(){return[P.de]},
$asr:function(){return[P.de]},
$asn:function(){return[P.de]},
$isp:1,
$isr:1,
$isn:1}
P.jh.prototype={
$asp:function(){return[P.de]},
$asr:function(){return[P.de]},
$asn:function(){return[P.de]},
$isp:1,
$isr:1,
$isn:1}
P.pL.prototype={$isf:1,
ga7:function(a){return a.href}}
P.pP.prototype={$isf:1}
P.pQ.prototype={$isf:1}
P.i2.prototype={$isf:1,
ga7:function(a){return a.href}}
P.r5.prototype={$isf:1}
P.r6.prototype={$isf:1}
P.r7.prototype={$isf:1}
P.bi.prototype={}
P.df.prototype={$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.fP.prototype={$isfP:1,$isab:1,
gm:function(a){return a.length}}
P.eT.prototype={$iseT:1,$isab:1,
gc2:function(a){return a.buffer}}
P.fQ.prototype={
fI:function(a,b,c,d){return a.decodeAudioData(b,H.dq(c,1),H.dq(d,1))},
hz:function(a,b){var t,s,r
t=P.fP
s=new P.bp(0,$.ap,null,[t])
r=new P.dU(s,[t])
this.fI(a,b,new P.kP(r),new P.kQ(r))
return s}}
P.kP.prototype={
$1:function(a){this.a.aF(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kQ.prototype={
$1:function(a){var t=this.a
if(a==null)t.bl("")
else t.bl(a)},
$S:function(){return{func:1,args:[,]}}}
P.bH.prototype={}
P.eV.prototype={}
P.kY.prototype={
saj:function(a,b){return a.type=b}}
P.lc.prototype={
gc2:function(a){return a.buffer}}
P.jN.prototype={
saj:function(a,b){return a.type=b}}
P.kJ.prototype={
gH:function(a){return a.name}}
P.ok.prototype={$isf:1}
P.ru.prototype={$isf:1}
P.jZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bA(b,a,null,null,null))
return P.yx(a.item(b))},
i:function(a,b,c){throw H.j(new P.S("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.S("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
K:function(a,b){return P.yx(a.item(b))},
$isp:1,
$asp:function(){return[P.bn]},
$isr:1,
$asr:function(){return[P.bn]},
$isn:1,
$asn:function(){return[P.bn]}}
P.iZ.prototype={
$asp:function(){return[P.bn]},
$asr:function(){return[P.bn]},
$asn:function(){return[P.bn]},
$isp:1,
$isr:1,
$isn:1}
P.ji.prototype={
$asp:function(){return[P.bn]},
$asr:function(){return[P.bn]},
$asn:function(){return[P.bn]},
$isp:1,
$isr:1,
$isn:1}
T.fL.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
gX:function(a){return this.a.length===0},
gS:function(a){var t=this.a
return new J.ie(t,t.length,0,null,[H.M(t,0)])},
$ashq:function(){return[T.fM]},
$asn:function(){return[T.fM]},
gcU:function(a){return this.a}}
T.fM.prototype={
gbm:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fc(C.B)
r=T.fc(C.C)
q=T.xl(0,this.b)
new T.iM(s,q,0,0,0,t,r).dN()
r=q.c.buffer
q=q.a
r.toString
q=H.cI(r,0,q)
this.cy=q
t=q}else{t=s.bM()
this.cy=t}this.ch=0}}return t},
C:function(a){return this.a},
gH:function(a){return this.a}}
T.di.prototype={
C:function(a){return"ArchiveException: "+this.a}}
T.hm.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.a6(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
if(typeof b!=="number")return H.a6(b)
s+=b
if(s<0||s>=t.length)return H.u(t,s)
return t[s]},
b0:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a6(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.ak()
if(typeof s!=="number")return H.a6(s)
b=t-(a-s)}return T.tY(this.a,this.d,b,a)},
b8:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.W()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a6(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.u(q,s)
q[s]}return-1},
bn:function(a,b){return this.b8(a,b,0)},
d7:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.ak()
if(typeof s!=="number")return H.a6(s)
r=this.b0(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.ak()
if(typeof p!=="number")return H.a6(p)
if(typeof s!=="number")return s.W()
this.b=s+(t-(q-p))
return r},
cb:function(a){return P.p6(this.d7(a).bM(),0,null)},
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
aY:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
if(this.d===1)return(C.a.as(p,56)|C.a.as(o,48)|C.a.as(n,40)|C.a.as(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.as(i,56)|C.a.as(j,48)|C.a.as(k,40)|C.a.as(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bM:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.a6(r)
q=t-(s-r)
t=this.a
r=J.am(t)
if(!!r.$isdf){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cI(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.yi(r.cl(t,s,p>o?o:p)))},
fi:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gc2:function(a){return this.a},
gia:function(a){return this.b}}
T.nW.prototype={
iI:function(a,b){var t,s,r,q
if(b==null)b=J.c0(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cz(s-q)
C.r.ay(r,t,s,a)
this.a+=b},
dc:function(a){return this.iI(a,null)},
iK:function(a){var t,s,r,q
t=J.bh(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
this.cz(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
C.r.a4(q,s,s+r,t.gc2(a),t.gia(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.ak()
if(typeof q!=="number")return H.a6(q)
this.a=t+(r-(s-q))},
b0:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cI(t,a,b-a)},
dl:function(a){return this.b0(a,null)},
cz:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.aY(P.dD("Invalid length "+H.x(s)))
r=new Uint8Array(s)
q=this.c
C.r.ay(r,0,q.length,q)
this.c=r},
fM:function(){return this.cz(null)},
gm:function(a){return this.a}}
T.q2.prototype={
h6:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.b0(this.a-20,20)
if(s.a2()!==117853008){a.b=t
return}s.a2()
r=s.aY()
s.a2()
a.b=r
if(a.a2()!==101075792){a.b=t
return}a.aY()
a.a0()
a.a0()
q=a.a2()
p=a.a2()
o=a.aY()
n=a.aY()
m=a.aY()
l=a.aY()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fN:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.ak()
if(typeof r!=="number")return H.a6(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a2()===101010256){a.b=t
return q}}throw H.j(new T.di("Could not find End of Central Directory Record"))},
fm:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fN(a)
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
if(s>0)this.x=a.cb(s)
this.h6(a)
r=a.b0(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.W()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.ax()
if(!(p<t+o))break
if(r.a2()!==33639248)break
p=new T.q4(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
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
if(n>0)p.cy=r.cb(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.ak()
j=r.b0(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.ak()
if(typeof g!=="number")return H.a6(g)
if(typeof k!=="number")return k.W()
r.b=k+(i-(h-g))
p.db=j.bM()
f=j.a0()
e=j.a0()
if(f===1){if(e>=8)p.y=j.aY()
if(e>=16)p.x=j.aY()
if(e>=24){o=j.aY()
p.cx=o}if(e>=28)p.z=j.a2()}}if(l>0)p.dx=r.cb(l)
a.b=o
p.dy=T.Hf(a,p)
q.push(p)}}}
T.q3.prototype={
gbm:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fc(C.B)
q=T.fc(C.C)
t=T.xl(0,t)
new T.iM(s,t,0,0,0,r,q).dN()
q=t.c.buffer
t=t.a
q.toString
t=H.cI(q,0,t)
this.cy=t
this.d=0}else{t=s.bM()
this.cy=t}}return t},
C:function(a){return this.z},
fn:function(a,b){var t,s,r,q
t=a.a2()
this.a=t
if(t!==67324752)throw H.j(new T.di("Invalid Zip Signature"))
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
this.z=a.cb(s)
this.Q=a.d7(r).bM()
this.cx=a.d7(this.ch.x)
if((this.c&8)!==0){q=a.a2()
if(q===134695760)this.r=a.a2()
else this.r=q
this.x=a.a2()
this.y=a.a2()}}}
T.q4.prototype={
C:function(a){return this.cy}}
T.q1.prototype={
hA:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.He(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.C],p=0;p<t.length;t.length===r||(0,H.bF)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.dh()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fM(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dW(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.tY(k,0,null,0)}else if(k instanceof T.hm){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hm(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.hI(m,"/")
j.y=n.r
s.push(j)}return new T.fL(s,null)}}
T.mu.prototype={
fh:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.as(1,this.b)
r=H.cD(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.u(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.u(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iM.prototype={
dN:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.W()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.ax()
if(!(r<s+q))break
if(!this.h3())break}},
h3:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.W()
if(typeof s!=="number")return s.ax()
if(s>=r+q)return!1
p=this.aA(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.aA(16)
s=this.aA(16)
if(n!==0&&n!==(s^65535)>>>0)H.aY(new T.di("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.ak()
r=q-r
if(n>s-r)H.aY(new T.di("Input buffer is broken"))
m=t.b0(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.ak()
if(typeof l!=="number")return H.a6(l)
if(typeof s!=="number")return s.W()
t.b=s+(r-(q-l))
this.b.iK(m)
break
case 1:this.dE(this.f,this.r)
break
case 2:this.h4()
break
default:throw H.j(new T.di("unknown BTYPE: "+o))}return(p&1)===0},
aA:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.W()
if(typeof r!=="number")return r.ax()
if(r>=q+p)throw H.j(new T.di("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.u(q,r)
o=q[r]
this.c=(this.c|C.a.az(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.as(1,a)
this.c=C.a.e3(t,a)
this.d=s-a
return(t&r-1)>>>0},
cG:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.W()
if(typeof p!=="number")return p.ax()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.u(o,p)
m=o[p]
this.c=(this.c|C.a.az(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.as(1,s)-1)>>>0
if(p>=t.length)return H.u(t,p)
l=t[p]
k=l>>>16
this.c=C.a.e3(r,k)
this.d=q-k
return l&65535},
h4:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.aA(5)+257
s=this.aA(5)+1
r=this.aA(4)+4
q=H.cD(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.u(C.J,o)
n=C.J[o]
m=this.aA(3)
if(n>=q)return H.u(p,n)
p[n]=m}l=T.fc(p)
k=new Uint8Array(H.cD(t))
j=new Uint8Array(H.cD(s))
i=this.dD(t,l,k)
h=this.dD(s,l,j)
this.dE(T.fc(i),T.fc(h))},
dE:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cG(a)
if(s>285)throw H.j(new T.di("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fM()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.u(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.u(C.H,p)
o=C.H[p]+this.aA(C.a1[p])
n=this.cG(b)
if(n<=29){if(n>=30)return H.u(C.E,n)
m=C.E[n]+this.aA(C.a0[n])
for(r=-m;o>m;){t.dc(t.dl(r))
o-=m}if(o===m)t.dc(t.dl(r))
else t.dc(t.b0(r,o-m))}else throw H.j(new T.di("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.ak();--r
t.b=r
if(r<0)t.b=0}},
dD:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cG(b)
switch(q){case 16:p=3+this.aA(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=s}break
case 17:p=3+this.aA(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
case 18:p=11+this.aA(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.j(new T.di("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kI.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Math Book",H.a([$.K,$.Y,$.ax],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.K,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.D,$.Y,$.aU],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.K,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.K,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c5,$.aw],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hd,$.m)
q.i(0,$.bj,$.m)
q.i(0,$.f7,$.k)
q.i(0,$.aO,$.L)
q.i(0,$.cG,$.k)
p=$.o
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.t
o=o+n+" to stop "
m=$.J
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.G8
n=[U.c]
q.i(0,new R.Z("Recover the Books",!1,[new U.c(o),new U.c(l),new U.c(p)],H.a([],n),R.z(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
q.i(0,new R.Z("Shelve the Books",!1,[new U.c("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.t+" to stop "+$.J+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.xw(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
p="The "+m+" finds a massive library, filled with books. The "
l=$.t
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.A
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.Z("Research the Denizen",!1,[new U.c(p),new U.c(l),new U.c(k)],H.a([],n),R.fp(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f3,$.L)
s.i(0,$.cG,$.m)
p=$.o
o="The "+p+"  is approached by a "
l=$.t
s.i(0,new R.Z("Do the Math",!1,[new U.c(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+l+"  finds a "+l+" child "+$.J+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.t
s.i(0,new R.Z("Use the Calculator",!1,[new U.c(l),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.J+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.ev(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
s.i(0,new R.Z("Solve the Equation",!1,[new U.c("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.t+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fp(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.f3,$.L)
t.i(0,$.cG,$.m)
t.i(0,$.c1,$.L)
t.i(0,$.tL,$.L)
r=$.o
q="The "+r+"  is approached by a "
p=$.t
q=q+p+" who offers them a grant to study "
o=$.ac
t.i(0,new R.Z("Test the Hypothesis",!1,[new U.c(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.J+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fp(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.t
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.J
r=r+p+".  It is up to the "
q=$.o
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ac
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.Ge
t.i(0,new R.Z("Make the Cure",!1,[new U.c(r),new U.c(l),new U.c(q)],H.a([],n),R.e6(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
t.i(0,new R.Z("Be the Scientist",!1,[new U.c("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.J+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.t+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
K.bW.prototype={}
L.fN.prototype={
F:function(){var t,s
t=Q.I(null,null,A.a2)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.M(t,0)]))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d4,$.k)
q.i(0,$.bj,$.L)
q.i(0,$.dM,$.k)
q.i(0,$.c1,$.m)
q.i(0,$.e0,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.A
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cj+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.R("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.X(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.F(s,q,null),$.au)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f5,$.k)
s.i(0,$.ei,$.L)
s.i(0,$.f4,$.m)
s.i(0,$.cV,$.k)
s.i(0,$.cf,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.A
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.cj+". The "+p+" has won! "
s.i(0,new R.R("Produce the Goods",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(n),new U.X(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(q,s,null),$.au)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.bj,$.L)
t.i(0,$.ca,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.J
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.A
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.cj+". The "+r+" has won! "
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.v_(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
r="The "+l+" learns that all of the local "
m=$.t
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.A
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.cj+". The "+l+" has won! "
t.i(0,new R.R("Relax the Consorts",!1,[new U.c(r),new U.c(p),new U.c(m),new U.X(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(s,t,null),$.au)},
C:function(a){return this.Q},
al:function(a,b,c,d,e){var t=this.Q
this.r=new X.iw("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.ig]),H.a([],[M.ha]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.F()
this.G()
t=this.e
if($.$get$kL().V(0,t))H.aY("Duplicate aspect id for "+this.C(0)+": "+t+" is already registered for "+J.cv($.$get$kL().n(0,t))+".")
$.$get$kL().i(0,t,this)},
gH:function(a){return this.Q}}
L.aS.prototype={}
M.kN.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Barbells",H.a([$.ae,$.cb,$.D],s),null,!1,"Strength Building Metal")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.el,$.cc],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jt,$.W],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.el,$.cc],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aV,$.a7],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jt,$.W,$.dy],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.D,$.bm],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.wK,$.cc],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.cc,$.aW],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.e1,$.L)
q.i(0,$.ce,$.m)
q.i(0,$.cV,$.L)
p=$.o
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.t
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.J+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.Z("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.t
q.i(0,new R.Z("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.J+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e6(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
n="The "+m+"  wanders into a bunch of "
p=$.t
q.i(0,new R.Z("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hL(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.e1,$.m)
t.i(0,$.f8,$.m)
t.i(0,$.ce,$.m)
s=$.o
r="The "+s+" finds a team of underdog "
p=$.t
t.i(0,new R.Z("Save the Sports",!1,[new U.c(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.xw(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
s="A group of "+p+"s approach the "
r=$.o
s=s+r+". Apparently their sports team lost their coach to the "+$.A+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.J
t.i(0,new R.Z("Coach the Sports",!1,[new U.c(s),new U.c(o),new U.c(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e6(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.t
p="A group of "+k+"s approach the "
r=$.o
t.i(0,new R.Z("Win at Sports",!1,[new U.c(p+r+". Apparently their sports team lost a member to the "+$.A+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.ac+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,t,null),$.aC)}}
U.kR.prototype={
P:function(a,b){var t=0,s=P.bc(),r,q,p,o
var $async$P=P.bg(function(c,d){if(c===1)return P.bd(d,s)
while(true)switch(t){case 0:q=$.$get$vZ()
p=q.createBufferSource()
o=p
t=3
return P.bP(J.yZ(q,b),$async$P)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$P,s)},
$asdt:function(){return[P.eT]},
$asc2:function(){return[P.eT,P.bi]}}
U.nj.prototype={
aX:function(a){return"audio/mpeg"}}
U.nS.prototype={
aX:function(a){return"audio/ogg"}}
U.p2.prototype={
P:function(a,b){var t=0,s=P.bc(),r,q,p
var $async$P=P.bg(function(c,d){if(c===1)return P.bd(d,s)
while(true)switch(t){case 0:q=W.zJ(b)
p=new W.dV(q,"canplaythrough",!1,[W.N])
t=3
return P.bP(p.gae(p),$async$P)
case 3:r=q
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$P,s)},
$asiu:function(){return[W.eU]},
$asc2:function(){return[W.eU,P.y]}}
U.p3.prototype={}
U.p4.prototype={}
O.kT.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Cod Piece",H.a([$.Q,$.a_,$.aP,$.P,$.W],s),"God damn it, MI. ",!1,null)
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.u0,$.P,$.bN],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aD,$.W,$.bq,$.P,$.a9],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.Q,$.aD,$.P,$.bl],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cE,$.k)
t.i(0,$.hg,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.dx,$.k)
t.i(0,$.cF,$.k)
t.i(0,$.f2,$.k)
r="After all the bullshit the "+$.A+" has put the native "
q=$.t
r=r+q+"s through, the "
p=$.o
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aH+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.J
m=[U.c]
t.i(0,new R.a5("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.z(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.t
n="A group of jubilant "+p+"s are following the "
q=$.o
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.J
t.i(0,new R.a5("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.A+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.a5("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.A+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.z(),!1,!1,new Y.l6("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.o
q=q+r+" organizes a huge festival for all the "
p=$.t
t.i(0,new R.bC("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.F(s,t,null),$.bO)}}
Y.pn.prototype={
P:function(a,b){var t=0,s=P.bc(),r
var $async$P=P.bg(function(c,d){if(c===1)return P.bd(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$P,s)},
$aseD:function(){return[P.y]},
$asc2:function(){return[P.y,P.y]}}
Y.oh.prototype={
aX:function(a){return"application/octet-stream"},
P:function(a,b){var t=0,s=P.bc(),r
var $async$P=P.bg(function(c,d){if(c===1)return P.bd(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$P,s)},
$asdt:function(){return[P.bi]},
$asc2:function(){return[P.bi,P.bi]}}
T.kZ.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Mystical Vial of Blood",H.a([$.aU,$.bq,$.T,$.aJ],s),null,!1,"Vial of Not-ABs Oil")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.ar,$.bq,$.T,$.aT],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.Q,$.bq,$.T,$.aJ,$.ho],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.bl,$.T,$.aJ,$.ho,$.aG],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.W,$.u8,$.bq,$.aJ,$.T,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dk,$.k)
q.i(0,$.tO,$.k)
q.i(0,$.c1,$.m)
p=$.o
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.t
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ac+" and some boondollars in compensation."
n=this.x2
k=[U.c]
q.i(0,new R.Z("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.e6(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.t
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.J+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.A
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.o
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cj+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.R("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.X(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.au)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cV,$.k)
s.i(0,$.cF,$.L)
s.i(0,$.aO,$.L)
s.i(0,$.iE,$.k)
s.i(0,$.cz,$.L)
p=$.o
o="The "+p+"  and the "
m=$.ex
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.A
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.R("Learn the Power of Teamwork",!1,[new U.c(o),new U.c(l),new U.X(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.ew(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
h=$.o
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.t
i=i+m+"s explains that before  "
p=$.A
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.cj+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.G5
s.i(0,new R.R("Chain the Towers",!1,[new U.c(i),new U.c(m),new U.c(j),new U.X(l,h,o)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
o="The "+p+" learns of the "
h=$.aH
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.t
o=o+l+" explains that the "
j=$.A
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.cj+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.R("Protect the Beams",!1,[new U.c(l),new U.c(o),new U.c(m),new U.X(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.t
h=h+i+" on "+$.aH+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.fa+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a5("One Degree of Separation",!1,[new U.c(h),new U.c(m),new U.c(i)],H.a([],k),R.fp(),!1,!1,new Y.c3("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.t+" on "
m=$.aH
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.fa+" is now more popular with your friends than you are."
s.i(0,new R.a5("Steal The Friends",!1,[new U.c(i),new U.c(h),new U.c(m)],H.a([],k),R.v0(),!1,!1,new Y.c3("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
m="The "+p+"  and the "
h=$.ex
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.A
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.R("Pale Shipping Dungeon",!1,[new U.c(m),new U.X(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.t)+".",o)],H.a([],k),R.ew(),!1,!1,new Y.jO(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ai)
n.i(0,new X.F(q,s,null),$.au)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.bj,$.L)
t.i(0,$.ca,$.m)
r="In the wake of the defeat of the "+$.A+" it becomes really how isolated the individual "
q=$.t
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.o
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.fa+" to kick your ass, but luckily they have several."
t.i(0,new R.a5("Connect The Villages",!1,[new U.c(r),new U.c(p),new U.c(q)],H.a([],k),R.e6(),!1,!1,new Y.c3("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.o
q="The "+o+" learns that two prominent "
p=$.t
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.A
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.cj+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.J+"ing. "
t.i(0,new R.R("Stop the Feud",!1,[new U.c(q),new U.c(r),new U.c(m),new U.X(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.au)}}
T.l0.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Pan's Pipe",H.a([$.a9,$.W,$.bq,$.T],s),null,!1,"Smonkin Weeds Pipe")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.aZ,$.T],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a7,$.D,$.bq,$.T],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.as,$.D,$.aV,$.T,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ca,$.m)
q.i(0,$.f8,$.k)
q.i(0,$.aO,$.m)
p=$.o
o="The "+p+" tries posting a letter through the "
n=$.ac
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.A
o=o+m+" has screwed with the mail system, crippling the "
l=$.t
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cj+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.G9
i=[U.c]
q.i(0,new R.R("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.X(j,p,l)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.F(s,q,null),$.au)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.bj,$.k)
s.i(0,$.f8,$.m)
s.i(0,$.aO,$.m)
s.i(0,$.ce,$.m)
s.i(0,$.ca,$.m)
p=$.o
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ac
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.t
k=l+k+" fields. The "+k+"s "+$.J+"ing is so joyful it's literally deafening. "
l=$.A
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.cj+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.R("Thinking With Wind Power",!1,[new U.c(o),new U.c(n),new U.c(k),new U.X(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.au)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cf,$.k)
t.i(0,$.m3,$.k)
t.i(0,$.f8,$.L)
t.i(0,$.ca,$.L)
r=$.o
q="The "+r+" is chilling in a "+$.t+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.A
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ac
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aH+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.cj+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.R("The Winds of Change",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.au)}}
M.fU.prototype={
eV:function(a){var t=this.a
if(!t.V(0,a))return
return t.n(0,a)}}
Y.l2.prototype={
P:function(a,b){var t=0,s=P.bc(),r,q,p,o,n,m,l,k,j,i
var $async$P=P.bg(function(c,d){if(c===1)return P.bd(d,s)
while(true)switch(t){case 0:q=J.dY(b,"\n")
p=P.y
o=P.bZ(p,p)
n=P.bZ(p,[P.eA,P.y])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.d1(k).bq(k).length===0)m=null
else if(m==null)m=C.c.bq(k)
else{j=C.c.bq(k)
i=C.c.L(m,0,C.c.ew(m,$.$get$w2())+1)+j
o.i(0,i,m)
if(!n.V(0,m))n.i(0,m,P.a0(null,null,null,p))
J.yS(n.n(0,m),i)}}r=new M.fU(o,n)
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$P,s)},
$aseD:function(){return[M.fU]},
$asc2:function(){return[M.fU,P.y]}}
A.l8.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.K,$.ae,$.aT,$.cb],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.K,$.aT],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.aU,$.aT],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aV,$.a7,$.aT],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.ar,$.aT],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.Q,$.aT],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.D,$.aT],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.m)
q.i(0,$.cy,$.k)
q.i(0,$.ce,$.m)
p=$.o
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.t
o=o+n+"s are too scared to even "+$.J+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.A+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.Z("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e1,$.L)
s.i(0,$.ce,$.k)
s.i(0,$.cy,$.k)
s.i(0,$.cE,$.k)
o=$.o
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aH
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.t
k=k+j+"s let out a braying "+$.J+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.Gc
s.i(0,new R.Z("Win the Laughs",!1,[new U.c(n),new U.c(k),new U.c(o)],H.a([],l),R.z(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cH,$.L)
t.i(0,$.c9,$.m)
t.i(0,$.cy,$.k)
t.i(0,$.ce,$.m)
t.i(0,$.iy,$.m)
r=$.o
q="The "+r+"  is approached by a Crafty "
o=$.t
q=q+o+" who offers them a magical "
n=$.ac
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.J
t.i(0,new R.Z("Trick the Villain",!1,[new U.c(q),new U.c(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.c("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
S.bJ.prototype={
C:function(a){return H.x(new H.dS(H.kz(this),null))+": "+this.c},
gH:function(a){return this.c}}
S.ih.prototype={}
S.mr.prototype={}
M.ll.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Can of Spray Paint",H.a([$.ay,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.K,$.aj,$.aT,$.ax],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.ug,$.D,$.av],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.K,$.aj,$.ax],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.ay,$.ao,$.K],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.aj,$.K],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.aj,$.aA,$.ao],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.ay,$.aj],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.as,$.aj,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.Q,$.aj],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.K,$.aj,$.ax],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.m)
q.i(0,$.cG,$.k)
q.i(0,$.aO,$.m)
p=$.o
o="The "+p+" visits a beautiful "
n=$.ac
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.t
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.A+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.J+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.Z("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e1,$.L)
s.i(0,$.ce,$.m)
s.i(0,$.cy,$.L)
s.i(0,$.bj,$.m)
s.i(0,$.cE,$.k)
o=$.o
n="The "+o+" finds a troupe of dejected looking "
l=$.t
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aH
l=l+n+" "
k=$.ac
s.i(0,new R.Z("Perform the Play",!1,[new U.c(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.c("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.J+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hg,$.L)
t.i(0,$.cz,$.L)
t.i(0,$.f2,$.L)
t.i(0,$.c9,$.L)
t.i(0,$.bj,$.m)
t.i(0,$.aO,$.m)
r=$.o
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.J
q=q+o+"ingworth, "
n=$.t
q=q+n+" heiress to the "+$.ac+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.G2
t.i(0,new R.Z("Attend the Dinner Party",!1,[new U.c(q),new U.c(l),new U.c(n)],H.a([],p),R.z(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
T.lr.prototype={}
V.lt.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Trendy Fabric",H.a([$.ay,$.Q],s),null,!1,"Weird Tasting Candy Paper")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.ay,$.u5,$.ho],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.D,$.uc,$.aM],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jr
r=A.i("Broom",H.a([r,$.W,$.ae,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.W,$.uj,$.ae],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.Q,$.aW,$.bq,$.ay,$.em],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.ay,$.Q],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aG,$.cb,$.D,$.br],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.ay,$.K],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.br],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.D,$.as,$.ae,$.cb,$.u4],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bN],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bN],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.ay,$.bR,$.aR],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.ar,$.bo,$.aZ],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.ar,$.bo],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.ay,$.ar,$.aJ],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cE,$.m)
q.i(0,$.cF,$.m)
q.i(0,$.cz,$.L)
p=$.o
o="The "+p+" is visited by a Beautiful "
n=$.t
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ac
l=[U.c]
q.i(0,new R.Z("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.J+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.z(),!1,!1,new Y.ij("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.k)
s.i(0,$.ce,$.m)
s.i(0,$.f2,$.k)
s.i(0,$.dx,$.m)
s.i(0,$.bj,$.k)
p=$.o
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ac
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.t
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.J+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.Ga
s.i(0,new R.Z("Bake the Cake",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.z(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ef,$.k)
t.i(0,$.bj,$.m)
t.i(0,$.dv,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.iE,$.k)
r=$.o
q="The "+r+" finds a loom, and a Wizened "
p=$.t
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ac
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.J+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.Z("Weave the Cloth",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.aC)}}
U.lu.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ax,$.a7,$.K,$.aD,$.T,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aA,$.bq,$.T,$.aD],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.aZ,$.bq,$.T,$.aD],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.aU,$.T,$.bN],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.aU,$.T,$.br,$.aD,$.bl,$.bT,$.aX],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aG,$.aX,$.aD,$.K,$.T],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dM,$.k)
q.i(0,$.d4,$.m)
q.i(0,$.f8,$.L)
q.i(0,$.bj,$.L)
q.i(0,$.c1,$.m)
p=$.o
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.t
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ac
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.A
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cj+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.R("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.au)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dM,$.k)
s.i(0,$.d4,$.m)
s.i(0,$.ek,$.ai)
s.i(0,$.eh,$.m)
s.i(0,$.tL,$.m)
s.i(0,$.dk,$.m)
s.i(0,$.d4,$.m)
s.i(0,$.bj,$.L)
s.i(0,$.c1,$.m)
s.i(0,$.dw,$.m)
p=$.o
o="The "+p+" has found a group of Violent "
m=$.t
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aH
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.J+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.A
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.cj+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.R("Become the Warlord",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.ev(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ac
p=p+l+"s alike. "
l=$.t+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.A
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.cj+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.R("Make This Stupid Planet Habitable",!1,[new U.c(p),new U.c(l),new U.c(g),new U.X(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.au)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.c1,$.k)
t.i(0,$.wo,$.ai)
t.i(0,$.hd,$.L)
r=$.o
q="The "+r+" finds a small dungeon bearing the image of "
p=$.A
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.t+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.R("Learn the Prophecy",!1,[new U.c(q),new U.c(o),new U.c(m),new U.X(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.ev(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
k=$.o
p="The "+k+" learns from one of their "
r=$.t
p=p+r+"s that there is an ancient prophecy of a "
l=$.aH
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ac
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.A
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.cj+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.G1
t.i(0,new R.R("Learn the Prophecy",!1,[new U.c(p),new U.c(m),new U.c(r),new U.X(o,k,q)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.au)}}
Z.lv.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Dream Diary",H.a([$.K,$.ax,$.T],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bq,$.ae,$.T,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bq,$.T],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ef,$.m)
q.i(0,$.dv,$.k)
q.i(0,$.aO,$.m)
q.i(0,$.iE,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ac
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.A
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.xj
k=[U.c]
q.i(0,new R.R("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.F(s,q,null),$.au)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cf,$.m)
s.i(0,$.dv,$.k)
s.i(0,$.d5,$.m)
s.i(0,$.cx,$.m)
s.i(0,$.eg,$.m)
s.i(0,$.cy,$.k)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.A
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(q,s,null),$.au)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dL,$.k)
t.i(0,$.iA,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.cx,$.k)
t.i(0,$.eg,$.k)
t.i(0,$.dv,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.A
t.i(0,new R.R("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aH+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.J+"ing in reverse. Another is in a "+$.ac+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(s,t,null),$.au)}}
X.iw.prototype={}
X.ig.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.ha]]}}}
M.ha.prototype={}
U.lX.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Fluthulu Poster",H.a([$.Q,$.aW,$.aX,$.bs],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.Q,$.aW,$.aX],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aG,$.aA,$.aZ,$.ff,$.aP],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aA,$.wR,$.fg,$.aP],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aA,$.bT,$.bo,$.aX],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.ax,$.K,$.aB,$.aX],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.K,$.a3,$.ae],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.K,$.a3,$.ae],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.K,$.a3,$.bT,$.aX,$.bs],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aG,$.aw,$.a3,$.ae,$.aP],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aG,$.u1,$.a3,$.ae,$.aP],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hb,$.ai)
q.i(0,$.cF,$.m)
q.i(0,$.ca,$.m)
q.i(0,$.cH,$.L)
p=$.o
o="The "+p+" learns of a Beautiful "
n=$.t
o=o+n+" who has been kidnapped by the vial "
m=$.A
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ac
j=[U.c]
q.i(0,new R.Z("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.k)
s.i(0,$.dk,$.k)
s.i(0,$.iB,$.m)
s.i(0,$.c1,$.k)
s.i(0,$.ek,$.k)
s.i(0,$.hf,$.m)
o=$.o
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.t
s.i(0,new R.Z("Do not Drink...Wine.",!1,[new U.c(n+m+" leave, and no one can remember the last time he received guests."),new U.c("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c9,$.k)
t.i(0,$.iD,$.m)
t.i(0,$.c1,$.k)
t.i(0,$.dJ,$.m)
t.i(0,$.f3,$.m)
t.i(0,$.tO,$.m)
r=$.o
q="The "+r+" finds a group of three "
o=$.t
q=q+o+"s "
n=$.J
t.i(0,new R.Z("Expose the Conspiracy",!1,[new U.c(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
N.a8.prototype={
C:function(a){return H.x(new H.dS(H.kz(this),null))+": "+H.x(this.b)}}
O.c2.prototype={
b9:function(a){var t=0,s=P.bc(),r,q=this,p
var $async$b9=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.bP(q.aZ(a),$async$b9)
case 3:r=p.P(0,c)
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$b9,s)}}
O.m7.prototype={
$1:function(a){return"."+H.x(a)},
$S:function(){return{func:1,args:[P.y]}}}
O.m8.prototype={
$1:function(a){var t=0,s=P.bc(),r,q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$$1=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)switch(t){case 0:p=q.c
if(J.vP(p).length===0){t=1
break}o=p.files,n=o.length,m=q.a,l=q.b,k=0
case 3:if(!(k<o.length)){t=5
break}j=o[k]
i=0
case 6:if(!(i<1)){t=8
break}h=m[i]
t=9
return P.bP(h.ca(j),$async$$1)
case 9:g=c
t=g!=null?10:11
break
case 10:f=l
t=12
return P.bP(h.P(0,g),$async$$1)
case 12:f.$2(c,j.name)
t=8
break
case 11:case 7:++i
t=6
break
case 8:case 4:o.length===n||(0,H.bF)(o),++k
t=3
break
case 5:p.value=null
case 1:return P.be(r,s)}})
return P.bf($async$$1,s)},
$S:function(){return{func:1,ret:P.c4,args:[W.N]}}}
O.m9.prototype={
$1:function(a){return J.yV(this.a)},
$S:function(){return{func:1,args:[W.N]}}}
O.dt.prototype={
bg:function(a){var t=0,s=P.bc(),r
var $async$bg=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$bg,s)},
cS:function(a){var t=0,s=P.bc(),r,q=this
var $async$cS=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.zK([J.vJ(a)],q.aX(0),null))
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$cS,s)},
aZ:function(a){var t=0,s=P.bc(),r,q=this,p,o
var $async$aZ=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)switch(t){case 0:p=P.bi
o=new P.bp(0,$.ap,null,[p])
W.ww(a,null,q.aX(0),null,null,"arraybuffer",null,null).ba(new O.kX(new P.dU(o,[p])))
r=o
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$aZ,s)},
$asc2:function(a){return[a,P.bi]}}
O.kX.prototype={
$1:function(a){this.a.aF(0,H.kA(J.z5(a),"$isbi"))},
$S:function(){return{func:1,args:[W.e2]}}}
O.eD.prototype={
bg:function(a){var t=0,s=P.bc(),r,q,p,o,n
var $async$bg=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)switch(t){case 0:a.toString
q=H.cI(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hK(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$bg,s)},
ca:function(a){var t=0,s=P.bc(),r,q,p
var $async$ca=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)switch(t){case 0:q=new FileReader()
q.readAsText(a)
p=new W.kg(q,"load",!1,[W.Go])
t=3
return P.bP(p.gae(p),$async$ca)
case 3:p=C.x.geJ(q)
if(typeof p==="string"){r=C.x.geJ(q)
t=1
break}t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$ca,s)},
aZ:function(a){var t=0,s=P.bc(),r
var $async$aZ=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)switch(t){case 0:r=W.wv(a,null,null)
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$aZ,s)},
$asc2:function(a){return[a,P.y]}}
O.iu.prototype={
aZ:function(a){var t=0,s=P.bc(),r
var $async$aZ=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$aZ,s)},
bg:function(a){return H.aY("Element format doesn't read from buffers")},
$asc2:function(a){return[a,P.y]}}
V.mf.prototype={
aX:function(a){return"font/opentype"},
P:function(a,b){var t=0,s=P.bc(),r
var $async$P=P.bg(function(c,d){if(c===1)return P.bd(d,s)
while(true)switch(t){case 0:t=3
return P.bP(A.hy("scripts/Rendering/text/opentype.min.js",!1),$async$P)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$P,s)},
$asdt:function(){return[R.hh]},
$asc2:function(){return[R.hh,P.bi]}}
Z.mh.prototype={
$1:function(a){var t,s
t=$.$get$hi().n(0,a).a
s=this.a
return t==null?s==null:t===s},
$S:function(){return{func:1,args:[P.y]}}}
Z.iv.prototype={}
E.iK.prototype={}
E.nR.prototype={}
E.O.prototype={
C:function(a){var t="["+J.cv(this.a)+" x "+H.x(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fO.prototype={
C:function(a){var t="[(Random from "+P.un(this.d,"(",")")+") x "+H.x(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kM.prototype={
C:function(a){return"[Stats assigned from player Interests x"+H.x(this.b)+"]"}}
Y.ml.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.ax,$.P,$.K,$.a_,$.ju],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aA,$.P,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.Q,$.P,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.mN,$.P,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.m5,$.m)
t.i(0,$.ca,$.k)
t.i(0,$.dw,$.L)
t.i(0,$.dl,$.k)
r=$.t
q="An excited "+r+" runs up to the "
p=$.o
q=q+p+" and starts to "
o=$.J
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aH
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ac
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.A
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.R("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.X(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
t.i(0,new R.a5("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.A+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.t+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.z(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.t
j="Now that the "+o+"s are free from the reign of "+$.A+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.o
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.J
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aH+" Quest Online: The "+$.ac+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a5("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.A+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.o
p=p+o+" shows the "
r=$.t
t.i(0,new R.bC("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.J+"s in time to stop them.    ")],H.a([],i),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.F(s,t,null),$.bO)}}
Y.mm.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Sherpa Parka",H.a([$.br,$.P,$.ch],s),"Clearly the best class uses this.",!1,null)
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a_,$.br,$.ax,$.K,$.P,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.D,$.P,$.aV],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.D,$.P,$.a7,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.m5,$.k)
t.i(0,$.ca,$.k)
t.i(0,$.dw,$.m)
t.i(0,$.dl,$.k)
r="Now that the "+$.A+" is out of the way, a group of "
q=$.t
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.o
o=[U.c]
t.i(0,new R.a5("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.J+", but they are happy.")],H.a([],o),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.o
t.i(0,new R.bC("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.t+" "+$.J+"s in time to stop them.    ")],H.a([],o),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.F(s,t,null),$.bO)}}
T.mn.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Doll",H.a([$.mN,$.ay,$.at,$.T],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.W,$.at,$.T,$.a_,$.aX],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.ub,$.T],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.K,$.T,$.aB],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.ao,$.aU,$.T],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.eh,$.L)
q.i(0,$.ej,$.k)
q.i(0,$.ce,$.m)
p=$.o
o="The "+p+", guided by a "+$.t+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.A
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cj+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.R("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.X(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.o
p="The "+j+" finds a Violent "
l=$.t
p=p+l+". A Magical Talking "
k=$.ac
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.A
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.R("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.X(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.v0(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.F(s,q,null),$.au)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cy,$.k)
s.i(0,$.iB,$.k)
s.i(0,$.f8,$.m)
s.i(0,$.c1,$.k)
s.i(0,$.cz,$.m)
s.i(0,$.dw,$.L)
p=$.o
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ac
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.A
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.cj+". The "+p+" is victorious. "
s.i(0,new R.R("Confront yourself.",!1,[new U.c(o),new U.c(m),new U.c(n),new U.X(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j="Now that the "+$.A+" has been defeated, a Copy "
p=$.o
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.t
j=j+k+"s "
l=$.J
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.fa+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a5("Prove Your Identity",!1,[new U.c(j),new U.c(l),new U.c(k)],H.a([],i),R.e6(),!1,!1,new Y.c3("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.A
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.R("Shatter The Mirrors",!1,[new U.c(k),new U.c(l),new U.c(j),new U.X(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.ev(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.F(q,s,null),$.au)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iz,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.m4,$.k)
t.i(0,$.f2,$.m)
t.i(0,$.hf,$.k)
t.i(0,$.cF,$.m)
t.i(0,$.ej,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.t
t.i(0,new R.R("Ship All the Ships",!1,[new U.c(q+p+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aH+" laws put in place by "+$.A+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
p="The "+r+" finds a weeping Broken Hearted "
q=$.t
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aH
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.J
t.i(0,new R.a5("Heal The Broken Heart",!1,[new U.c(p),new U.c(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.c("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hL(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.o
m="The "+q+"  and the "
r=$.ex
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.A
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.R("Flushed Shipping Dungeon",!1,[new U.c(m),new U.X(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.t)+".",n)],H.a([],i),R.ew(),!1,!1,new Y.iI(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ai)
n=$.o
r="The "+n+"  and the "
q=$.ex
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.A
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.R("Pitched Shipping Dungeon",!1,[new U.c(r),new U.X(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.t)+".",m)],H.a([],i),R.ew(),!1,!1,new Y.jQ(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ai)
h.i(0,new X.F(s,t,null),$.aC)}}
B.mo.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Family Ashes",H.a([$.aG,$.as,$.P,$.aD,$.bX],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a_,$.K,$.P,$.aD,$.mJ],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.ax,$.P,$.aj],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.wG,$.P,$.mF,$.mJ],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.tZ,$.P,$.av,$.mJ],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cf,$.m)
r=$.A
q="With the death of the "+r+", it now falls to the "
p=$.o
o=[U.c]
t.i(0,new R.a5("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.t+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
r="The "+$.A+" has released the frogs into the "
p=$.o
t.i(0,new R.bC("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.F(s,t,null),$.bO)}}
X.mq.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Wand",H.a([$.W,$.T,$.a3,$.bk],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.bk,$.bB,$.T,$.aQ,$.a9,$.a_,$.a3],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bS,$.u8,$.T,$.a3,$.aT,$.bk],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.bk,$.aQ,$.T,$.as],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aA,$.aQ,$.T,$.bk],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.tK,$.k)
q.i(0,$.cF,$.m)
q.i(0,$.aO,$.k)
q.i(0,$.cx,$.k)
p=$.o
o="The "+p+" is just minding their own business when they see a wizened "
n=$.t
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.J+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.A
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ac
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.G4
i=[U.c]
q.i(0,new R.R("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(k,p,j)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.au)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.k)
s.i(0,$.iy,$.m)
s.i(0,$.d5,$.k)
p=$.o
o="The "+p+"  is approached by a Crafty "
m=$.t
o=o+m+" who offers them a magical "
l=$.ac
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.A
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.R("Believe the Lies",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.au)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.dx,$.L)
t.i(0,$.cG,$.k)
t.i(0,$.cx,$.k)
r=$.o
q="The "+r+" finds a grey town of despondant "
p=$.t
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.A
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ac
t.i(0,new R.R("Be the Change You Believe In",!1,[new U.c(q),new U.c(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.X("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
o="The "+r+" discovers a group of "
p=$.t
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.A
t.i(0,new R.R("The Ultimate Hope",!1,[new U.c(o),new U.c(l),new U.c(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.X("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hL(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.F(s,t,null),$.au)}}
X.mv.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Footstick",H.a([$.dy,$.P,$.mM,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Cheating Guide",H.a([$.ax,$.P,$.ju,$.K],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of Shogun",H.a([$.Q,$.P,$.em,$.u9,$.aW],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Macrobots",H.a([$.ui,$.P,$.mF],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cH,$.k)
t.i(0,$.d5,$.k)
t.i(0,$.dv,$.k)
t.i(0,$.dl,$.k)
t.i(0,$.ef,$.k)
t.i(0,$.eg,$.k)
t.i(0,$.he,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.Z("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.v1(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cj+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xu(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.Z("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.z(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.A
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
m=$.o
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.A+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.z(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.xv(),!1,!1,new Y.c3("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a5("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.A
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bC("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.F(s,t,null),$.au)}}
Q.my.prototype={
b9:function(a){var t=0,s=P.bc(),r,q,p
var $async$b9=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)switch(t){case 0:q=W.wx(null,a,null)
p=new W.dV(q,"load",!1,[W.N])
t=3
return P.bP(p.gae(p),$async$b9)
case 3:r=q
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$b9,s)},
$asdt:function(){return[W.fd]},
$asc2:function(){return[W.fd,P.bi]}}
Q.o7.prototype={
aX:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bc(),r,q=this,p,o,n
var $async$P=P.bg(function(c,d){if(c===1)return P.bd(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.bP(q.cS(b),$async$P)
case 3:p=n.wx(null,d,null)
o=new W.dV(p,"load",!1,[W.N])
t=4
return P.bP(o.gae(o),$async$P)
case 4:r=p
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$P,s)}}
Q.o4.prototype={
aX:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bc()
var $async$P=P.bg(function(c,d){if(c===1)return P.bd(d,s)
while(true)switch(t){case 0:throw H.j("Read NYI")
return P.be(null,s)}})
return P.bf($async$P,s)},
$asdt:function(){return[Q.jP]},
$asc2:function(){return[Q.jP,P.bi]}}
B.hn.prototype={
F:function(){var t,s
t=Q.I(null,null,A.a2)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.M(t,0)]))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d4,$.k)
q.i(0,$.bj,$.L)
q.i(0,$.dM,$.k)
q.i(0,$.c1,$.m)
q.i(0,$.e0,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.Z("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.z(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f5,$.k)
s.i(0,$.ei,$.L)
s.i(0,$.f4,$.m)
s.i(0,$.cV,$.k)
s.i(0,$.cf,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.Z("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.z(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.bj,$.L)
t.i(0,$.ca,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
t.i(0,new R.Z("Relax the Consorts",!1,[new U.c(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.z(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
r="The "+p+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.J
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.v_(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
n.i(0,new X.F(s,t,null),$.aC)},
C:function(a){return this.ch},
gH:function(a){return this.ch}}
A.a2.prototype={
aE:function(a,b){var t=b.gbI()-this.gbI()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bJ(t)},
ghD:function(){var t,s,r,q,p,o
t=H.a([],[P.y])
s=new A.ey(null,null)
s.bs(this.f.a)
if(this.r===0)return t
r=P.d7(G.zR(this.f),!0,G.a1)
C.b.dj(r,new A.mR())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bF)(r),++p){o=r[p]
if(!(o instanceof G.ag||o.gei().length===0))t.push(" "+Y.I2(s.eF(o.gei())))}return t},
gbI:function(){var t,s,r
for(t=this.f,s=new P.d0(t,t.r,null,null,[null]),s.c=t.e,r=0;s.E();)r+=s.d.gbI()
return r},
ghs:function(){var t=this.f
return new H.e9(t,new A.mQ(),[H.M(t,0)])},
ghN:function(){var t,s,r,q,p
for(t=this.ghD(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bF)(t),++q)r+=t[q]+" "
return r+this.d},
C:function(a){return this.ghN()},
M:function(a,b,c,d,e){var t,s,r
t=P.jA(b,null)
this.f=t
if(t.a===0)t.h(0,$.wM)
s=P.jA(this.ghs(),null)
for(t=new P.d0(s,s.r,null,null,[null]),t.c=s.e;t.E();){r=t.d
this.f.at(0,r.gf8())
this.f.an(0,r)}$.$get$xa().push(this)},
$isbI:1,
$asbI:function(){return[A.a2]}}
A.mR.prototype={
$2:function(a,b){return a.geC()-C.a.bJ(b.geC())},
$S:function(){return{func:1,args:[G.a1,G.a1]}}}
A.mQ.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
Z.mY.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Juice Box",H.a([$.K,$.T,$.bk,$.aP],s),null,!1,null)
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shogun Body Pillow",H.a([$.em,$.aW,$.T],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.eg,$.ai)
t.i(0,$.cF,$.m)
t.i(0,$.ce,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.cx,$.k)
r=$.o
q="The "+r+" sees a floating sentient "
p=$.ac
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.t+" notices it, and starts "+$.J+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.A
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.c]
t.i(0,new R.R("Talk to your Juice entity",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
r="The "+p+" is greeted by a young adolescent "
m=$.t
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.A
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.J
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.R("Be The Wingman",!1,[new U.c(r),new U.c(l),new U.c(n),new U.X(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.o
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.t
m=m+q+" informs them that "
p=$.A
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.R("Pilot The Mech",!1,[new U.c(m),new U.c(o),new U.c(n),new U.X(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.F(s,t,null),$.au)}}
N.mZ.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Gavel",H.a([$.W,$.u7],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aA,$.bl],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.Q,$.ay],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.K,$.ax],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bR,$.ar,$.br],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.K,$.ax,$.ao],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aG,$.D,$.bl],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hb,$.L)
q.i(0,$.c9,$.m)
q.i(0,$.cG,$.L)
p=$.o
o="The "+p+" finds an elaborate courtroom full of "+$.J+"ing "
n=$.t
m=[U.c]
q.i(0,new R.Z("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ac+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.k)
s.i(0,$.dw,$.m)
s.i(0,$.cV,$.m)
p=$.o
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.t
l=o+l+" yells 'Stop that thief' in betwen "+$.J+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ac+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.G0
s.i(0,new R.Z("Enforce the Law",!1,[new U.c(l),new U.c(o),new U.c(p)],H.a([],m),R.z(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c9,$.k)
t.i(0,$.cf,$.m)
t.i(0,$.dk,$.L)
t.i(0,$.ek,$.m)
t.i(0,$.eh,$.m)
t.i(0,$.f6,$.m)
t.i(0,$.iC,$.m)
r=$.o
q="The "+r+" finds a crowd of "
p=$.J
q=q+p+"ing "
o=$.t
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.Gd
t.i(0,new R.Z("Start a Revolution",!1,[new U.c(q),new U.c(r),new U.c(p)],H.a([],m),R.z(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.aC)}}
S.n0.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Shining Armor",H.a([$.aG,$.mL,$.P,$.ff],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a_,$.mL,$.P,$.aM,$.av,$.fg],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.D,$.P,$.bo,$.at],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aG,$.ff,$.P,$.mL],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.m2,$.k)
t.i(0,$.dK,$.k)
t.i(0,$.e1,$.k)
t.i(0,$.f6,$.k)
t.i(0,$.hb,$.m)
r="The "+$.A+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.o
p=[U.c]
t.i(0,new R.bC("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q=$.A
r="Now that the "+q+" is defeated, the "
o=$.t
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.o
t.i(0,new R.a5("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.aH
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.A
n=n+q+". A Learned "+$.t+" explains that it can only be defeated by the Legendary "
r=$.ac
n=n+r+" Blade. The "
m=$.o
t.i(0,new R.a5("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
r="The volcanos of the land are weirdly active after the defeat of the "+$.A+". One begins to erupt near a "
m=$.t
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.J+"s, but not really doing anything to evacuate or save anyone. The "
o=$.o
t.i(0,new R.a5("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
Q.n3.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Dream Diary",H.a([$.K,$.ax,$.T],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bq,$.ae,$.T,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bq,$.T],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ef,$.m)
q.i(0,$.dv,$.k)
q.i(0,$.aO,$.m)
q.i(0,$.iE,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ac
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.A
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.xj
k=[U.c]
q.i(0,new R.R("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.F(s,q,null),$.au)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cf,$.m)
s.i(0,$.dv,$.k)
s.i(0,$.d5,$.m)
s.i(0,$.cx,$.m)
s.i(0,$.eg,$.m)
s.i(0,$.cy,$.k)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.A
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(q,s,null),$.au)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dL,$.k)
t.i(0,$.iA,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.cx,$.k)
t.i(0,$.eg,$.k)
t.i(0,$.dv,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.A
t.i(0,new R.R("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aH+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.J+"ing in reverse. Another is in a "+$.ac+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(s,t,null),$.au)}}
K.n5.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Creeping Vine",H.a([$.W,$.T,$.aR,$.at],s),null,!1,"Sentient Plant Tentacles")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.u0,$.T,$.aJ],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aG,$.aw,$.T,$.at],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bX,$.T,$.aJ],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.aU,$.T,$.aJ,$.a_,$.a3],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bo,$.T,$.at],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ca,$.k)
q.i(0,$.bj,$.k)
q.i(0,$.hc,$.L)
q.i(0,$.aO,$.m)
q.i(0,$.m5,$.m)
q.i(0,$.cH,$.L)
p=$.o
o="The "+p+" finds a village of compliant "
n=$.t
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.J+"ing in panic. Don't upset "
m=$.A
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.R("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.X(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.au)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ca,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.cH,$.L)
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
s.i(0,new R.R("Distribute the Food",!1,[new U.c(m),new U.c(k),new U.c(l),new U.X(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.au)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.d4,$.k)
t.i(0,$.bj,$.L)
t.i(0,$.dM,$.k)
t.i(0,$.c1,$.m)
t.i(0,$.e0,$.m)
t.i(0,$.ix,$.m)
r="Drawn by wailing and "+$.J+"ing, the "
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
t.i(0,new R.R("Protect the Farms",!1,[new U.c(r),new U.c(m),new U.c(k),new U.X(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.au)}}
G.n6.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("FAQ",H.a([$.a7,$.T,$.Y,$.bY],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aA,$.T,$.aQ,$.a7,$.bY],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.T,$.aQ,$.bY,$.a_,$.u1],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.wQ,$.T,$.ae],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.wY,$.T],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.aR,$.T,$.aQ,$.bY],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.aU,$.T,$.at],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.m0,$.k)
q.i(0,$.ef,$.m)
q.i(0,$.dJ,$.k)
q.i(0,$.ej,$.k)
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
q.i(0,new R.R("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.X(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.J+"ing "+$.t+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.A
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.R("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.X(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.F(s,q,null),$.au)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ca,$.m)
s.i(0,$.aO,$.m)
s.i(0,$.dx,$.k)
s.i(0,$.m_,$.k)
s.i(0,$.ei,$.k)
s.i(0,$.iy,$.k)
p=$.o
o="The "+p+" walks into a "
n=$.t
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ac
o=o+l+", but "
k=$.A
o=o+k+" has hoarded all of the planets "
j=$.aH
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.J+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.R("The Candlestick Taker",!1,[new U.c(l),new U.c(o),new U.c(h),new U.X(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.v0(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.t
j=j+k+" explains that the "
h=$.A
s.i(0,new R.R("Shine the Light",!1,[new U.c(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.c("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.J+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.c("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.X("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.au)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.hd,$.m)
q.i(0,$.bj,$.m)
q.i(0,$.f7,$.k)
q.i(0,$.aO,$.m)
q.i(0,$.cG,$.k)
p="Now that the "+$.A+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
p=p+o+" sets up a wiki and settles in to help the "
n=$.t
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.fa+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a5("Moderate the Wiki",!1,[new U.c(p),new U.c(n),new U.c(o)],H.a([],i),R.e6(),!1,!1,new Y.c3("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.A+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.t
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.fa+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a5("Create the Wiki",!1,[new U.c(l),new U.c(n),new U.c(o)],H.a([],i),R.ev(),!1,!1,new Y.c3("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.o
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.A
q.i(0,new R.R("Shed the Light",!1,[new U.c(o),new U.c(p),new U.c(l),new U.X(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,q,null),$.au)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dJ,$.k)
t.i(0,$.m0,$.k)
t.i(0,$.ej,$.m)
t.i(0,$.cF,$.m)
t.i(0,$.tN,$.m)
t.i(0,$.c1,$.L)
t.i(0,$.e1,$.L)
t.i(0,$.ce,$.m)
t.i(0,$.cy,$.L)
t.i(0,$.bj,$.m)
t.i(0,$.cE,$.k)
s=$.o
r="The "+s+" is approached by a Fast Talking "
p=$.t
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ac
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.J+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.A
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.R("Be the Star",!1,[new U.c(r),new U.c(n),new U.c(p),new U.X(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o="After the "+$.A+", the "
s=$.o
o=o+s+" is disappointed to learn that barely any of the "
l=$.t
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.fa+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a5("Be the Biggest Star in Paradox Space",!1,[new U.c(o),new U.c(l),new U.c(s)],H.a([],i),R.e6(),!1,!1,new Y.c3("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.F(q,t,null),$.au)}}
Z.ni.prototype={
F:function(){var t,s,r,q
t=this.N
s=[G.a1]
r=A.i("Dream Bubbles Book",H.a([$.K,$.aj,$.ax,$.wI],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.M(t,0)]))
t=Q.I(null,null,A.a2)
r=A.i("Uno Reverse Card",H.a([$.mG,$.mM,$.aj],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.Q,$.P,$.aj],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.ju,$.P,$.aj],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a_,$.K,$.P,$.bv,$.ax],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dk,$.L)
q.i(0,$.ek,$.L)
q.i(0,$.c1,$.L)
q.i(0,$.cV,$.m)
p="The "+$.A+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.o
p=p+o+" comands that the "
n=$.t
m=[U.c]
q.i(0,new R.bC("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.J+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
o="As soon as the "+$.A+" is defeated, the "
n=$.t
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.o
q.i(0,new R.a5("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.x
p.i(0,new X.F(s,q,null),$.bO)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.wk,$.k)
t.i(0,$.cx,$.k)
t.i(0,$.bj,$.k)
t.i(0,$.aO,$.m)
s="The "+$.A+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.o
s=s+r+" comands that the "
o=$.t
t.i(0,new R.bC("Command Minions to Breed Frogs",!1,[new U.c(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.J+"s. "),new U.c("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
r="As soon as the "+$.A+" is defeated, the "
o=$.t
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.o
t.i(0,new R.a5("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",this.N,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,t,null),$.bO)}}
S.nk.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Alternate Costume",H.a([$.Q,$.P,$.a3,$.a_,$.ak],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.Q,$.P,$.a3],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.W,$.P,$.ae,$.a3,$.dy],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jr,$.W,$.P,$.at,$.a3,$.dy],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.f3,$.k)
t.i(0,$.f6,$.m)
t.i(0,$.cf,$.k)
t.i(0,$.f4,$.m)
t.i(0,$.d4,$.L)
r="The "+$.A+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.o
p=[U.c]
t.i(0,new R.bC("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q=$.o
t.i(0,new R.a5("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.z(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
r="The "+q+" is feeling quite pleased with their victory over the "+$.A+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aH
t.i(0,new R.a5("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.z(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="Now that the "+$.A+" has been defeated, the "
o=$.t
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.o
q=q+r+"'s help in planning the brand new city of "
n=$.aH
t.i(0,new R.a5("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.J+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.z(),!1,!1,new Y.c3(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
U.nl.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Maiden's Breath",H.a([$.aR,$.P,$.ay],s),null,!1,null)
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.W,$.P,$.dy,$.bB],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.ay,$.aG,$.D,$.P,$.a_,$.ff,$.wA],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.K,$.P,$.a9,$.ax],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.dl,$.k)
t.i(0,$.ca,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.bj,$.m)
t.i(0,$.dx,$.m)
t.i(0,$.cy,$.m)
r="The "+$.A+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.o
r=r+q+" asks local  "
p=$.t
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.c]
t.i(0,new R.bC("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q=$.o
o="The "+q+" has adopted a local "
p=$.t
t.i(0,new R.a5("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.J+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.A+". ")],H.a([],n),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
V.nw.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Puzzle Box",H.a([$.W,$.T,$.a3],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a7,$.T,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.T],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.T,$.a7,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aG,$.js,$.aw,$.aj,$.T,$.a_,$.a7],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.m)
q.i(0,$.ef,$.L)
q.i(0,$.cG,$.L)
p=$.o
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.t
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.A
k=[U.c]
q.i(0,new R.R("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fp(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.t+" explains that at the end of the Labrinth is the "
l=$.A
q.i(0,new R.R("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.X("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.au)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.hb,$.L)
s.i(0,$.c9,$.m)
s.i(0,$.cG,$.L)
s.i(0,$.cx,$.L)
p=$.A
o="The "+p+" has commited a staggering amount of crimes against the local "+$.t+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.o
s.i(0,new R.R("Face the Music",!1,[new U.c(o+m+" knows that Justice is on their side."),new U.c("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.X("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.au)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iD,$.k)
t.i(0,$.bj,$.m)
t.i(0,$.f7,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.cG,$.k)
r=$.o
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.A
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ac+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.R("Make the Connections",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.au)}}
E.nx.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Feather Pen",H.a([$.D,$.P,$.aj,$.bB],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.wX,$.P,$.js,$.ae,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.K,$.P,$.aj,$.ax],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.dl,$.k)
t.i(0,$.ca,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.bj,$.m)
t.i(0,$.dx,$.m)
t.i(0,$.cy,$.m)
r="The "+$.A+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.c]
t.i(0,new R.bC("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.A+" the "
o=$.t
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.o
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ac
t.i(0,new R.a5("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
F.ny.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Piano",H.a([$.ae,$.W,$.a9,$.aj],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.D,$.a9],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aV,$.a7],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.W,$.a9],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.K,$.a9],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aA,$.a9,$.a7,$.aV,$.ao],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aA,$.a9,$.a7,$.ao],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.W,$.a9],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cF,$.ai)
q.i(0,$.tN,$.k)
q.i(0,$.ej,$.k)
q.i(0,$.dx,$.m)
q.i(0,$.aO,$.m)
q.i(0,$.lZ,$.m)
p=$.o
o="The "+p+" meets a wise old "+$.t+" who tells that the "+$.A+" can only be awoken by the Legendary Hero playing the "
n=$.aH
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ac
k=[U.c]
q.i(0,new R.Z("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
n="The "+p+" finds an empty, trashed "
l=$.aH
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ac+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.J+"ing "+$.t+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.G6
q.i(0,new R.Z("Play the Crowd",!1,[new U.c(n),new U.c(m),new U.c(l)],H.a([],k),R.z(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.tQ,$.ai)
s.i(0,$.dw,$.m)
s.i(0,$.cV,$.m)
s.i(0,$.dx,$.k)
s.i(0,$.lZ,$.ai)
o=$.o
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aH
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.A
s.i(0,new R.Z("Sing the Song",!1,[new U.c(n+l+". "),new U.c("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.ac+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hc,$.ai)
t.i(0,$.ce,$.m)
t.i(0,$.dM,$.m)
r=$.o
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.t
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.J
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aH+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.Z("And It Don't Stop",!1,[new U.c(n),new U.c(q),new U.c(r)],H.a([],k),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
Y.nN.prototype={
P:function(a,b){var t=0,s=P.bc(),r,q=this,p,o
var $async$P=P.bg(function(c,d){if(c===1)return P.bd(d,s)
while(true)switch(t){case 0:t=3
return P.bP(A.hy("scripts/Rendering/threed/three.min.js",!1),$async$P)
case 3:t=4
return P.bP(Q.ot(),$async$P)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.aq(p)
o.f5(p,P.xd(["",$.$get$w8()],P.y,S.hB))
o.f4(p,!1)
q.b=p}J.vW(p,b)
r=J.vW(q.b,b)
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$P,s)},
$aseD:function(){return[S.fm]},
$asc2:function(){return[S.fm,P.y]}}
V.nX.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Shorts",H.a([$.Q,$.P,$.fe,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aA,$.P,$.ao],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.ar,$.P,$.a3],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.m2,$.k)
t.i(0,$.cH,$.m)
t.i(0,$.hg,$.m)
t.i(0,$.m4,$.m)
t.i(0,$.dl,$.m)
t.i(0,$.bj,$.m)
t.i(0,$.e0,$.m)
t.i(0,$.ei,$.m)
t.i(0,$.tR,$.m)
t.i(0,$.ix,$.m)
t.i(0,$.m_,$.m)
r="The "+$.A+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.c]
t.i(0,new R.bC("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q=$.o
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.t+" named Professor "
p=$.J
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ac
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.A
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.R("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.X(k,"The "+q+" whited out...",m)],H.a([],n),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m="Now that the "+$.A+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.o
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.t
t.i(0,new R.a5("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aH+" buffs. With a deafening "+$.J+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.z(),!1,!1,new Y.ij("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
G.o9.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Superhero Action Figure",H.a([$.aA,$.ao,$.aP],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aA,$.ao],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aA,$.bX],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aA,$.aT,$.br,$.ch],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aA,$.ao],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.K,$.ao],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.aR,$.ao,$.Q,$.at],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.aR,$.aK,$.ao,$.Q],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aP,$.D,$.ao,$.fg,$.av,$.bS],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.K,$.ao],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.K,$.ao],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.m)
q.i(0,$.cE,$.m)
q.i(0,$.ce,$.k)
q.i(0,$.cH,$.ai)
q.i(0,$.d5,$.ai)
p=$.o
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.t
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aH+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.J+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.G7
l=[U.c]
q.i(0,new R.Z("Become the Star",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.z(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eh,$.m)
s.i(0,$.dw,$.m)
s.i(0,$.cE,$.m)
s.i(0,$.ce,$.m)
s.i(0,$.dK,$.k)
o=$.o
n="The "+o+" runs towards an explosion in a local "
m=$.t
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aH
s.i(0,new R.Z("Stop the Villain",!1,[new U.c(n),new U.c(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.c(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cE,$.m)
t.i(0,$.dJ,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.dK,$.m)
r=$.o
q="The "+r+" gets a job at the "+$.aH+" Cinema. A new movie, The Lonely "
o=$.ac
q=q+o+" is coming out soon, and "
n=$.t
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.J+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.Z("Premiere the Movie",!1,[new U.c(q),new U.c(m),new U.c(r)],H.a([],l),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
N.od.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Feather'd Cap",H.a([$.Q,$.P,$.fe],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a_,$.u5,$.P,$.fe],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bt,$.P],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cE,$.m)
t.i(0,$.cx,$.m)
t.i(0,$.dM,$.L)
r="With the closing of the curtain, the "+$.A+" has released the frogs, and yet they are nowhere to be found. The "
q=$.o
p=[U.c]
t.i(0,new R.bC("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q=$.A
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.o
r=r+o+" to get it back to normal. They organize a team of "
n=$.t
t.i(0,new R.a5("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ac+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
U.c.prototype={}
U.X.prototype={}
R.of.prototype={
C:function(a){return H.x(new H.dS(H.kz(this),null))+": "+this.c},
gH:function(a){return this.c}}
R.Z.prototype={}
R.R.prototype={}
R.a5.prototype={}
R.bC.prototype={}
E.og.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Curtain",H.a([$.Q,$.T,$.aP],s),null,!1,"Show Ender")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.fg,$.aM,$.T,$.av,$.aX,$.aP,$.bs,$.aD],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.D,$.aV,$.a7,$.T,$.aP],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aG,$.D,$.aV,$.bv,$.cc,$.T,$.aP],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.ar,$.bv,$.aj,$.T,$.a_,$.aP],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.W,$.T,$.aX,$.as,$.bt,$.aP],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lY,$.k)
q.i(0,$.dk,$.k)
q.i(0,$.dw,$.k)
q.i(0,$.d4,$.m)
q.i(0,$.c1,$.m)
q.i(0,$.cf,$.m)
q.i(0,$.c9,$.L)
q.i(0,$.d5,$.m)
q.i(0,$.eh,$.k)
q.i(0,$.iC,$.k)
q.i(0,$.f6,$.k)
q.i(0,$.m3,$.k)
q.i(0,$.hc,$.m)
q.i(0,$.ek,$.k)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ac
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.A
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.R("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hL(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
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
q.i(0,new R.R("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.F(s,q,null),$.au)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dx,$.k)
s.i(0,$.c1,$.m)
s.i(0,$.c9,$.k)
s.i(0,$.cF,$.k)
s.i(0,$.cy,$.k)
s.i(0,$.cE,$.m)
s.i(0,$.iB,$.L)
s.i(0,$.dk,$.m)
s.i(0,$.cH,$.k)
s.i(0,$.ce,$.k)
s.i(0,$.d5,$.L)
p=$.J
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aH
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.A
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(q,s,null),$.au)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.lY,$.k)
t.i(0,$.d5,$.k)
t.i(0,$.c9,$.k)
t.i(0,$.cH,$.m)
t.i(0,$.cy,$.k)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.A+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(s,t,null),$.au)}}
Y.dP.prototype={}
Y.ad.prototype={}
Y.d3.prototype={}
Y.c3.prototype={
gH:function(a){return this.c}}
Y.U.prototype={}
Y.ij.prototype={}
Y.bE.prototype={}
Y.cY.prototype={}
Y.l6.prototype={}
Y.bz.prototype={}
Y.jO.prototype={}
Y.iI.prototype={}
Y.jQ.prototype={}
N.ol.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Domino Mask",H.a([$.Q,$.P,$.fe],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.u_,$.P,$.fe,$.wB],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a_,$.aA,$.a7,$.P,$.Y,$.ak],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.c9,$.k)
t.i(0,$.cf,$.m)
t.i(0,$.dK,$.m)
r="The "+$.A+" cannot release the frogs since the corrupt Noble "
q=$.t
r=r+q+"s have hoarded them. The "
p=$.o
o=[U.c]
t.i(0,new R.bC("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
p=$.o
q="The "+p+" learns of the extreme injustices of the "
r=$.t
q=q+r+"s who rose to power during the tyranny of "
n=$.A
t.i(0,new R.a5("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
Q.om.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Red Rose",H.a([$.aB,$.ay],s),null,!1,"Seductive Plant")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aB,$.K],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aB,$.ar],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aB,$.as],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aB,$.bt,$.D,$.aK],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.ax,$.K,$.aB],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.k)
q.i(0,$.hg,$.m)
q.i(0,$.f2,$.m)
q.i(0,$.hf,$.k)
q.i(0,$.cF,$.m)
q.i(0,$.iz,$.L)
p=$.o
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.t
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ac+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.Z("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cF,$.m)
s.i(0,$.dJ,$.k)
s.i(0,$.hf,$.k)
s.i(0,$.cz,$.m)
s.i(0,$.ej,$.L)
s.i(0,$.iz,$.L)
o=$.t
n="A Romantic "+o+" approaches the "
m=$.o
s.i(0,new R.Z("Plan the Date",!1,[new U.c(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.c("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iz,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.f2,$.m)
t.i(0,$.m4,$.k)
t.i(0,$.hf,$.k)
t.i(0,$.cF,$.m)
t.i(0,$.ej,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.t
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.A+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.G3
t.i(0,new R.Z("Ship All the Ships",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.z(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.o
r="The "+n+"  and the "
o=$.ex
t.i(0,new R.Z("Flushed Shipping Dungeon",!1,[new U.c(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.ew(),!1,!1,new Y.iI(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ai)
o=$.o
n="The "+o+"  and the "
r=$.ex
t.i(0,new R.Z("Pale Shipping Dungeon",!1,[new U.c(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.ew(),!1,!1,new Y.jO(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ai)
r=$.o
o="The "+r+"  and the "
n=$.ex
t.i(0,new R.Z("Pitched Shipping Dungeon",!1,[new U.c(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.ew(),!1,!1,new Y.jQ(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ai)
p.i(0,new X.F(s,t,null),$.aC)}}
T.hN.prototype={
F:function(){var t,s
t=Q.I(null,null,A.a2)
s=A.i("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.M(t,0)]))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d4,$.k)
q.i(0,$.bj,$.L)
q.i(0,$.dM,$.k)
q.i(0,$.c1,$.m)
q.i(0,$.e0,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.a5("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.x
n.i(0,new X.F(s,q,null),$.bO)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f5,$.k)
s.i(0,$.ei,$.L)
s.i(0,$.f4,$.m)
s.i(0,$.cV,$.k)
s.i(0,$.cf,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a5("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" learns that all of the local "
o=$.t
s.i(0,new R.a5("Do the Teamwork",!1,[new U.c(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+p+" grabs the "+$.ex+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.J+"ing in amazement. The factory is saved! ")],H.a([],m),R.ew(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.ai)
n.i(0,new X.F(q,s,null),$.bO)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.bj,$.L)
t.i(0,$.ca,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.J
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.v_(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
p="The "+l+" learns that all of the local "
r=$.t
t.i(0,new R.a5("Relax the Consorts",!1,[new U.c(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.bO)},
C:function(a){return this.r},
a8:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.iw("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.ig]),H.a([],[M.ha]))
this.F()
this.G()
t=this.Q
if($.$get$oo().V(0,t))H.aY("Duplicate class id for "+this.C(0)+": "+t+" is already registered for "+J.cv($.$get$oo().n(0,t))+".")
$.$get$oo().i(0,t,this)},
gH:function(a){return this.r}}
E.op.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Sage's Robe",H.a([$.Q,$.P,$.aW,$.Y,$.a3,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.K,$.P,$.ax,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.Q,$.P,$.em,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.hd,$.m)
t.i(0,$.bj,$.m)
t.i(0,$.f7,$.k)
t.i(0,$.aO,$.L)
t.i(0,$.cG,$.k)
r="The "+$.A+" has blocked access to the books for the duration. The "
q=$.o
p=[U.c]
t.i(0,new R.bC("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q="Now that the "+$.A+" is defeated, it is time to begin recovery efforts. The "
r=$.t
q=q+r+"s ask the "
o=$.o
t.i(0,new R.a5("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.J+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
K.oq.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Uno Reverse Card",H.a([$.mG,$.T,$.aP],s),null,!1,null)
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.em,$.aW,$.T],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lY,$.k)
q.i(0,$.dk,$.k)
q.i(0,$.dw,$.k)
q.i(0,$.d4,$.m)
q.i(0,$.c1,$.m)
q.i(0,$.cf,$.m)
q.i(0,$.c9,$.L)
q.i(0,$.d5,$.m)
q.i(0,$.eh,$.k)
q.i(0,$.iC,$.k)
q.i(0,$.f6,$.k)
q.i(0,$.m3,$.k)
q.i(0,$.hc,$.m)
q.i(0,$.ek,$.k)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ac
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.A
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.R("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hL(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
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
q.i(0,new R.R("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.F(s,q,null),$.au)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dx,$.k)
s.i(0,$.c1,$.m)
s.i(0,$.c9,$.k)
s.i(0,$.cF,$.k)
s.i(0,$.cy,$.k)
s.i(0,$.cE,$.m)
s.i(0,$.iB,$.L)
s.i(0,$.dk,$.m)
s.i(0,$.cH,$.k)
s.i(0,$.ce,$.k)
s.i(0,$.d5,$.L)
p=$.J
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aH
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.A
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(q,s,null),$.au)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.lY,$.k)
t.i(0,$.d5,$.k)
t.i(0,$.c9,$.k)
t.i(0,$.cH,$.m)
t.i(0,$.cy,$.k)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.A+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(s,t,null),$.au)}}
Y.or.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Walking Stick",H.a([$.W,$.P,$.dy],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.Q,$.P,$.wJ,$.Y,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.K,$.P,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.P,$.Y,$.a3],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p
t=[P.y]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.dl,$.k)
t.i(0,$.ca,$.k)
t.i(0,$.bj,$.k)
t.i(0,$.ce,$.L)
t.i(0,$.aO,$.L)
r="Now that the "+$.A+" has been defeated, the planet has really opened up. The "
q=$.o
p=[U.c]
t.i(0,new R.a5("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.t+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.o
t.i(0,new R.bC("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.t+" "+$.J+"s in time to stop them.   ")],H.a([],p),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.F(s,t,null),$.bO)}}
L.os.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Scroll",H.a([$.K,$.P,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.aU,$.P,$.ak,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.K,$.P,$.ax,$.Y,$.ak,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.lZ,$.k)
t.i(0,$.bj,$.k)
t.i(0,$.cG,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.cx,$.m)
r="The "+$.A+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.o
p=[U.c]
t.i(0,new R.bC("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q="Now that the "+$.A+" has been taken care of, the "
r=$.o
q=q+r+" discovers a large library of "
o=$.t
t.i(0,new R.a5("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
S.ou.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Cueball",H.a([$.el,$.mN,$.P,$.ae,$.at,$.a_],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.el,$.wH,$.P,$.aQ],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.aU,$.P,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.wD,$.P,$.aW],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.wl,$.k)
t.i(0,$.iA,$.k)
t.i(0,$.wj,$.k)
t.i(0,$.cH,$.m)
r="Now that the "+$.A+" has been defeated, the land is really starting to open up. The "
q=$.o
r=r+q+" finds a tunnel filled with Blind "
p=$.t
o=[U.c]
t.i(0,new R.a5("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.z(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.o
t.i(0,new R.bC("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
p=$.o
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.t
t.i(0,new R.a5("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.z(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
r="A group of underlings are still making trouble, even after the defeat of the "+$.A+". The "
p=$.o
r=r+p+" begins planting rumors of a huge "
q=$.ac
t.i(0,new R.a5("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.z(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
T.c6.prototype={}
Y.oB.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Meddler's Guide",H.a([$.ax,$.P,$.K,$.bv,$.a_,$.aJ],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aU,$.P,$.aJ],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.bq],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.P,$.aQ,$.ay,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.bj,$.m)
t.i(0,$.dl,$.k)
t.i(0,$.cH,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.ca,$.k)
r="The defeat of the "+$.A+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.o
p=[U.c]
t.i(0,new R.bC("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q="Now that the "+$.A+" has been taken care of, the "
r=$.o
q=q+r+" finds a long line of "
o=$.t
t.i(0,new R.a5("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
N.oC.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Fiduspawn Plush",H.a([$.ch,$.Q,$.aW],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ch,$.Q,$.aW],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dice",H.a([$.u3,$.aA],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pigeon",H.a([$.bB,$.at,$.bo,$.aZ,$.bs,$.ud],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.Q,$.aW,$.ch],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.ax,$.K],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.ax,$.K],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.aW,$.Q],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.ax,$.K,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.L)
q.i(0,$.aO,$.m)
q.i(0,$.cx,$.k)
q.i(0,$.cG,$.m)
p=$.o
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.t
m=[U.c]
q.i(0,new R.Z("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aH+" or "+$.ac+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.J+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.L)
s.i(0,$.aO,$.k)
s.i(0,$.cx,$.k)
s.i(0,$.tK,$.k)
s.i(0,$.cF,$.k)
s.i(0,$.tQ,$.k)
s.i(0,$.cG,$.m)
o=$.o
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.J
n=n+l+"ing "
k=$.t
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aH
s.i(0,new R.Z("Meditate On Frogism",!1,[new U.c(n),new U.c(j+i+"-ness. How could they miss this?"),new U.c(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cV,$.L)
t.i(0,$.dJ,$.k)
t.i(0,$.ca,$.k)
t.i(0,$.dK,$.k)
t.i(0,$.hb,$.k)
r=$.o
q="The "+r+" wanders into an entire crowd of "
o=$.t
t.i(0,new R.Z("Protect the FLARPers",!1,[new U.c(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.J+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.c("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.c("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
M.bD.prototype={}
N.oE.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Frog Statue",H.a([$.aG,$.aw,$.T],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.T],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c5,$.Y,$.a7,$.T],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.aU,$.Y,$.T],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.K,$.T,$.u6,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m
t=$.o
s=[P.y]
r=H.a(["Wherever the "+t+" goes, they find a "+$.t+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.J+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.A+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
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
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cH,$.L)
t.i(0,$.tM,$.k)
s=[U.c]
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
p=$.o
t.i(0,new R.bC("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.z(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.F(o,t,null),$.H9)}}
U.ah.prototype={
gH:function(a){return this.d+"kind"},
$isbI:1,
$asbI:function(){return[A.a2]}}
K.cJ.prototype={
gH:function(a){return this.a}}
M.oI.prototype={
aX:function(a){return"application/octet-stream"},
P:function(a6,a7){var t=0,s=P.bc(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$P=P.bg(function(a8,a9){if(a8===1)return P.bd(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dj(null,0)
q.a=J.dX(a7,0)
for(p=0,o="";p<6;++p)o+=H.hK(q.aa(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.j("Invalid header: "+n)
m=q.aa(8)
l=9+m*6
o=8*m
k=q.aa(o)
j=q.aa(o)
i=q.aa(o)
h=q.aa(o)
g=q.aa(o)
f=q.aa(o)
o=P.C
e=P.y
d=P.bZ(o,e)
c=new O.cW(k,j,null,null,null,null,null,null,d,P.bZ(e,o))
c.x=new Uint8Array(H.cD(k*j))
b=q.aa(8)
for(o=[o],p=0;p<b;++p){a=q.aa(8)
a0=q.aa(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.aa(8)
if(a2>=e){r=H.u(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.p6(a1,0,null))}a4=q.aa(8)
a5=$.$get$xz().n(0,a4)
if(a5==null)throw H.j("Sprite decoding error: Encoding id "+a4+" not supported.")
c.iJ(i,h,g,a5.c.$4(a7,l,g*f,c))
c.ir()
r=c
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$P,s)},
$asdt:function(){return[O.cW]},
$asc2:function(){return[O.cW,P.bi]}}
R.pc.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Meddler's Guide",H.a([$.ax,$.P,$.K,$.bv,$.a_,$.aJ],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aU,$.P,$.aJ],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.bq],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.P,$.aQ,$.ay,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cx,$.k)
t.i(0,$.aO,$.k)
t.i(0,$.dl,$.m)
t.i(0,$.f7,$.m)
t.i(0,$.tJ,$.m)
t.i(0,$.e0,$.m)
t.i(0,$.ix,$.m)
t.i(0,$.tP,$.m)
r=$.o
q="The "+r+" decides to take a break after defeating "+$.A+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.t
o=[U.c]
t.i(0,new R.a5("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.J+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.v1(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.t
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.o
t.i(0,new R.a5("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.t
q="The "+r+"s are so stressed after all that shit with the "+$.A+". They are yelling and "+$.J+" at each other over the slightest of insults. The "
p=$.o
t.i(0,new R.a5("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.A+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.o
p=p+r+" purifies the pools "
q=$.t
t.i(0,new R.bC("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
r="The defeat of the "+$.A+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.t
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.o
t.i(0,new R.a5("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aH+". Huh. Okay then.")],H.a([],o),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
D.ph.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Robot",H.a([$.a7,$.D,$.at,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a7,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a7,$.K],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a7,$.K,$.aD,$.ax],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aA,$.a7,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.wN,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.uk,$.D,$.ae],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a7,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.iD,$.m)
q.i(0,$.f3,$.k)
q.i(0,$.f5,$.k)
q.i(0,$.cf,$.L)
p=$.o
o="The "+p+" learns from their "
n=$.t
o=o+n+"s about the great "
m=$.aH
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.A+" destroyed it. "
o="The "+p+" searches for the "
l=$.ac
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.Gb
p=[U.c]
q.i(0,new R.Z("Fix the Machine",!1,[new U.c(n),new U.c(o),new U.c(m)],H.a([],p),R.z(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=$.o
m="The "+l+" is approached by a "
o=$.t
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.J
q.i(0,new R.Z("Decipher the Enigma",!1,[new U.c(o+m+"ing, how could they not? "),new U.c("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.A+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ac+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fp(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f5,$.k)
s.i(0,$.ei,$.L)
s.i(0,$.f4,$.m)
s.i(0,$.cV,$.k)
s.i(0,$.cf,$.L)
o=$.o
n="The "+o+" learns that all of the local "
l=$.t
s.i(0,new R.Z("Produce the Goods",!1,[new U.c(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.c("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.c("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
l="The "+o+" finds two groups of "
n=$.t
l=l+n+"s screaming and "
k=$.J
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ac
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.Z("Stop the Dispute",!1,[new U.c(l),new U.c(k),new U.c(j)],H.a([],p),R.e6(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.au)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iD,$.L)
t.i(0,$.f3,$.k)
t.i(0,$.f5,$.k)
t.i(0,$.cf,$.L)
r=$.o
q="The "+r+" learns from a mysterious "+$.t+" in a black trenchcoat about a great "
o=$.aH
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.A
t.i(0,new R.Z("Learn the Secret",!1,[new U.c(q+n+"? "),new U.c("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
V.pi.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Lighter",H.a([$.D,$.as],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.K,$.br],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.K,$.br,$.c5],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.D,$.aD,$.c5,$.bk,$.bs],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.K,$.wS],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.D,$.bm,$.bk],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.D,$.bm,$.bk],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.Q,$.fe,$.bk],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bR,$.bm],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.D,$.ue,$.aK,$.bk],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.D,$.uh,$.aK,$.bk],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.D,$.ua,$.aK,$.bk],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mI,$.av,$.D,$.bt,$.bk],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.K,$.bv,$.ax],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.cc,$.D,$.aV,$.bv],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.W,$.as],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cE,$.m)
q.i(0,$.dJ,$.k)
q.i(0,$.e1,$.k)
q.i(0,$.f6,$.k)
q.i(0,$.m2,$.k)
q.i(0,$.dK,$.m)
p=$.o
o=[U.c]
q.i(0,new R.Z("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.z(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cE,$.m)
s.i(0,$.dJ,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.dK,$.m)
n=$.o
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.t
s.i(0,new R.Z("All About the Boonies, Baby",!1,[new U.c(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ac+" underling. Tremble at the fearsome "+$.aH+" "+l+".   "),new U.c(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.z(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d4,$.k)
q.i(0,$.bj,$.L)
q.i(0,$.dM,$.k)
q.i(0,$.c1,$.m)
q.i(0,$.e0,$.L)
q.i(0,$.dk,$.L)
n=$.o
m="The "+n+" learns that all of the local "
l=$.t
q.i(0,new R.Z("Revive the Consorts",!1,[new U.c(m+l+"s are dead. This is....pretty cool, actually. "),new U.c("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c9,$.k)
t.i(0,$.dk,$.L)
t.i(0,$.eh,$.k)
t.i(0,$.iC,$.k)
t.i(0,$.cf,$.m)
t.i(0,$.ek,$.m)
s=$.o
r="The "+s+" finds a crowd of "
n=$.J
r=r+n+"ing "
m=$.t
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aH+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.Z("Stop a Rebellion",!1,[new U.c(r),new U.c(l),new U.c(s)],H.a([],o),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,t,null),$.aC)}}
X.F.prototype={
C:function(a){return"Theme: "+H.x(this.a)}}
U.ps.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Lockpick",H.a([$.D,$.P,$.ak,$.aM,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.Q,$.P,$.ak],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Dagger",H.a([$.D,$.P,$.aM,$.av,$.u2],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.c9,$.k)
t.i(0,$.dw,$.m)
t.i(0,$.ce,$.m)
t.i(0,$.cV,$.m)
r="The "+$.A+" cannot release the frogs since the corrupt "
q=$.t
r=r+q+" Cops have confiscated them. The "
p=$.o
o=[U.c]
t.i(0,new R.bC("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
p=$.o
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.A+"'s layer and slated to be returned to the "
r=$.t
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.J+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a5("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.t
p="A weeping "+r+" approaches the "
n=$.o
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.A
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aH+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.J+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a5("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
n="Now that the "+r+" has been defeated, the "
p=$.t
n=n+p+"s have recovered their precious "
q=$.ac
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.o
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.J
l=n+l+"worth, the disaffected Heir to the "+$.aH+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a5("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
N.pt.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Grandfather Clock",H.a([$.W,$.aj,$.bm,$.T],s),null,!1,"Ticking Tower of Time")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.wW,$.T,$.a9],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aG,$.bo,$.T,$.aZ,$.aX,$.aD],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.T,$.a9,$.aj],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.D,$.T,$.a9,$.a_,$.ao],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.D,$.T,$.a9],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.wn,$.ai)
q.i(0,$.cf,$.m)
q.i(0,$.cV,$.m)
q.i(0,$.f4,$.k)
p=$.A
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.o
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.c]
q.i(0,new R.a5("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.ev(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.t+"s, they set out to fix the "
m=$.ac
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.A
q.i(0,new R.R("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.X("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.F(s,q,null),$.au)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.hc,$.k)
s.i(0,$.e1,$.L)
s.i(0,$.cf,$.k)
p=$.o
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.t+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.A
s.i(0,new R.R("Synchronize the Rhythm",!1,[new U.c(o),new U.c(n),new U.X(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(q,s,null),$.au)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ca,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.cx,$.k)
t.i(0,$.dl,$.k)
r=$.A
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ac
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.o
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.t+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.R("Walk Another Path",!1,[new U.c(q),new U.c(n),new U.c(m),new U.X(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hL(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.A
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ac
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.o
t.i(0,new R.R("Destroy Timelines",!1,[new U.c(p+r+" prepares for a bullshit item collection quest. "),new U.c("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.t+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.c("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.X("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.ev(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.A+", "
k=$.o
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.t
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aH
t.i(0,new R.a5("Shatter the Timeline",!1,[new U.c(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.ev(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.o
t.i(0,new R.R("Move Forwards, Never Stop",!1,[new U.c(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.J+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.X("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.A+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(s,t,null),$.au)}}
G.a1.prototype={
C:function(a){var t=this.b
if(t.length!==0)return C.b.gae(t)
return"NULL TRAIT"},
geC:function(){return this.a},
gei:function(){return this.b},
gbI:function(){return this.c}}
G.aI.prototype={}
G.ag.prototype={}
G.bK.prototype={}
G.d.prototype={
gil:function(){return this.e.length},
gbI:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bF)(t),++q)r+=t[q].c
return r},
aE:function(a,b){return C.a.bJ(b.gil()-this.e.length)},
eO:function(a){return C.b.hJ(this.e,a.ghu(a))},
$isbI:1,
$asbI:function(){return[G.d]},
gH:function(a){return this.d},
gf8:function(){return this.e}}
G.mO.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
Q.pR.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Cardboard Box",H.a([$.K,$.T,$.ak],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.D,$.T,$.ak],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bt,$.T,$.ak,$.mI],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.aZ,$.T,$.ak,$.aX,$.bT],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aA,$.T,$.ak,$.aj],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.T,$.a_,$.u6,$.ak,$.aU],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.k)
q.i(0,$.m1,$.k)
q.i(0,$.he,$.k)
q.i(0,$.iA,$.k)
p=$.A
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.o
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.t
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.c]
q.i(0,new R.a5("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.A
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.R("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.X(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i=this.f
i.i(0,new X.F(s,q,null),$.au)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.m)
s.i(0,$.m1,$.m)
s.i(0,$.he,$.m)
s.i(0,$.c9,$.k)
p=$.o
o="Even with the victory of the "+p+" over the villainous "
n=$.A
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.t+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ac
s.i(0,new R.a5("Reveal the Tomes",!1,[new U.c(o+m+" will provide insight."),new U.c("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fp(),!1,!1,new Y.c3("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
s.i(0,new R.R("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.c("The "+m+" [REDACTED]s and it actually works! Everyone "+$.J+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.X("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.A+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.t+"s.")],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.F(q,s,null),$.au)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dL,$.k)
t.i(0,$.m1,$.k)
t.i(0,$.he,$.k)
r=$.o
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.A+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.R("Walk of Faith",!1,[new U.c(q),new U.c(p),new U.c(o),new U.c(n),new U.X(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.F(s,t,null),$.au)}}
E.pS.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Yardstick",H.a([$.dy,$.P,$.mM,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.ax,$.P,$.ju,$.K],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.Q,$.P,$.em,$.u9,$.aW],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.ui,$.P,$.mF],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cH,$.k)
t.i(0,$.d5,$.k)
t.i(0,$.dv,$.k)
t.i(0,$.dl,$.k)
t.i(0,$.ef,$.k)
t.i(0,$.eg,$.k)
t.i(0,$.he,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.Z("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.v1(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cj+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xu(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.Z("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.z(),!1,!1,new Y.dP("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.A
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
m=$.o
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.A+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.z(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.xv(),!1,!1,new Y.c3("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a5("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.A
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bC("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.F(s,t,null),$.au)}}
M.pW.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Cauldron",H.a([$.wV,$.P,$.a3],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jr,$.dy,$.P,$.W,$.a3],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.ub,$.P,$.a3,$.ak,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.c1,$.m)
t.i(0,$.hg,$.m)
t.i(0,$.d4,$.m)
t.i(0,$.cV,$.m)
t.i(0,$.cy,$.m)
t.i(0,$.tM,$.m)
r=$.A
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.t
q=q+p+" consorts. It's up to the "
o=$.o
n=[U.c]
t.i(0,new R.bC("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bU(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
o="Even with the defeat of the "+$.A+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.t
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aH
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.o
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a5("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.B)
q="A Mysterious "+$.t+" approaches the "
p=$.o
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aH
q=q+r+" was discovered amongst the "+$.A+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a5("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.t
p="A young "+r+" approaches the "
m=$.o
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aH
t.i(0,new R.a5("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ac+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.J+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.z(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bO)}}
U.pX.prototype={
P:function(a5,a6){var t=0,s=P.bc(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$P=P.bg(function(a7,a8){if(a7===1)return P.bd(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.dY(a6,$.$get$xY())
if(0>=p.length){r=H.u(p,0)
t=1
break}if(J.zp(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.u(p,0)
t=1
break}throw H.j("Invalid WordList file header: '"+H.x(p[0])+"'")}o=P.y
n=H.a([],[o])
m=P.bZ(o,B.eI)
q.a=null
l=P.bZ(o,o)
for(k=P.V,j=B.cZ,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cM()
""+i
H.x(g)
f.toString
f=J.dY(g,$.$get$xW())
if(0>=f.length){r=H.u(f,0)
t=1
break $async$outer}g=f[0]
f=J.bh(g)
if(f.gX(g)===!0){$.$get$cM().toString
continue}if(f.af(g,$.$get$xX())){$.$get$cM().toString
continue}if(C.c.af(g,"@")){e=C.c.ag(g,1)
$.$get$cM().toString
n.push(e)}else if(C.c.af(g,"?")){f=C.c.ag(g,1)
f=$.$get$hV().aV(0,f)
f=H.dm(f,B.id(),H.an(f,"n",0),null)
d=P.d7(f,!0,H.an(f,"n",0))
if(d.length<2)$.$get$cM().aM(C.i,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cM()
H.x(c)
H.x(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$xZ()
a=f.cw(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.u(f,1)
t=1
break $async$outer}a0=J.c0(f[1])
a1=C.c.ag(g,a0)
if(a1.length===0)continue
f=J.am(a0)
if(f.U(a0,0)){a1=C.c.eP(a1)
$.$get$cM().toString
f=P.bZ(o,o)
a2=new B.eI(P.bZ(o,k),f,a1,!1,null,null)
a2.cn(null,null,j)
q.a=a2
f.at(0,l)
m.i(0,a1,q.a)}else if(f.U(a0,$.y_))if(C.c.af(a1,"?")){a1=C.c.ag(a1,1)
f=$.$get$hV().aV(0,a1)
f=H.dm(f,B.id(),H.an(f,"n",0),null)
d=P.d7(f,!0,H.an(f,"n",0))
f=$.$get$cM()
f.toString
if(d.length<2)f.aM(C.i,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kG(d[0],$.$get$fu(),"")
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}b=J.kG(d[1],$.$get$fu(),"")
f=$.$get$cM()
H.x(q.a.e)
f.toString
q.a.d.i(0,c,b)}}else if(C.c.af(a1,"@")){e=C.c.ag(a1,1)
$.$get$cM().toString
f=$.$get$hV().aV(0,a1)
f=H.dm(f,B.id(),H.an(f,"n",0),null)
d=P.d7(f,!0,H.an(f,"n",0))
a3=d.length>1?H.xr(d[1],new U.pY(q,d)):1
q.a.c.i(0,C.c.d8(e,$.$get$fu(),""),a3)}else{$.$get$cM().toString
f=$.$get$hV().aV(0,g)
f=H.dm(f,B.id(),H.an(f,"n",0),null)
d=P.d7(f,!0,H.an(f,"n",0))
a3=d.length>1?H.xr(d[1],new U.pZ(q,d)):1
if(0>=d.length){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bq(J.kG(d[0],$.$get$fu(),""))
h=new B.cZ(null)
a4=P.bZ(o,o)
h.a=a4
a4.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.tm(a3)),[H.an(f,"cC",0)]))}else if(f.U(a0,$.y_*2)){$.$get$cM().toString
f=$.$get$hV().aV(0,g)
f=H.dm(f,B.id(),H.an(f,"n",0),null)
d=P.d7(f,!0,H.an(f,"n",0))
f=d.length
if(f!==2)$.$get$cM().aM(C.i,"Invalid variant for "+H.x(h.br(0))+" in "+H.x(q.a.e))
else{if(0>=f){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bq(J.kG(d[0],$.$get$fu(),""))
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}a4=C.c.d8(U.Hc(d[1]),$.$get$fu(),"")
h.a.i(0,f,a4)}}}}}r=new B.eJ(n,m)
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$P,s)},
$aseD:function(){return[B.eJ]},
$asc2:function(){return[B.eJ,P.y]}}
U.pY.prototype={
$1:function(a){var t,s,r
t=$.$get$cM()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid include weight '"+H.x(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.aM(C.h,r+H.x(s[0])+"' in list '"+H.x(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.y]}}}
U.pZ.prototype={
$1:function(a){var t,s,r
t=$.$get$cM()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid weight '"+H.x(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.aM(C.h,r+H.x(s[0])+"' in list '"+H.x(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.y]}}}
F.q0.prototype={
F:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a1]
r=A.i("Make a World Book",H.a([$.K,$.aj,$.ax],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.M(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.aW,$.Q,$.mK],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.ax,$.K,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.ax,$.K,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.ax,$.K],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.D,$.Y,$.mK,$.aj],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.ax,$.K,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.ax,$.K],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.k)
q.i(0,$.cG,$.k)
q.i(0,$.bj,$.m)
q.i(0,$.aO,$.m)
q.i(0,$.hd,$.m)
p=$.o
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.t+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.Z("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.z(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dK,$.m)
s.i(0,$.cE,$.m)
s.i(0,$.cz,$.m)
s.i(0,$.bj,$.m)
p=$.t
o="An Excited "+p+" rushes up to the "
n=$.o
s.i(0,new R.Z("Read the Fan Fiction",!1,[new U.c(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.J+"ing so much? "),new U.c("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.z(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cE,$.m)
t.i(0,$.dJ,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.dK,$.m)
t.i(0,$.dv,$.k)
r=$.o
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.t
t.i(0,new R.Z("Be the DM",!1,[new U.c(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.z(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
B.q5.prototype={
aX:function(a){return"application/x-tar"},
P:function(a,b){var t=0,s=P.bc(),r,q,p
var $async$P=P.bg(function(c,d){if(c===1)return P.bd(d,s)
while(true)switch(t){case 0:q=$.$get$y0()
p=J.vJ(b)
q.toString
r=q.hA(T.tY(p,0,null,0),!1)
t=1
break
case 1:return P.be(r,s)}})
return P.bf($async$P,s)},
$asdt:function(){return[T.fL]},
$asc2:function(){return[T.fL,P.bi]}}
A.fT.prototype={}
B.du.prototype={
cN:function(a){if(a)this.b=(this.b|C.a.as(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.O+=H.hK(this.b)
this.b=0}},
ah:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.as(1,t)
if(typeof a!=="number")return a.aP()
this.cN((a&s)>>>0>0)}},
hm:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.az(1,t-s)
if(typeof a!=="number")return a.aP()
this.cN((a&r)>>>0>0)}},
c0:function(a){var t,s
a=J.ea(a,1)
t=C.d.dn(Math.log(H.kv(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cN(!1)
this.hm(a,t+1)},
bb:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.O
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a6(r)
q+=r
p=r}else p=0
r=H.cD(q)
o=new Uint8Array(r)
if(t){n=H.cI(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.u(o,m)
o[m]=l}}t=s.O
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a5(k,m)
if(s<0||s>=r)return H.u(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.u(o,t)
o[t]=s}return o.buffer}}
B.dj.prototype={
cF:function(a){var t,s,r,q
t=C.f.am(a/8)
s=C.a.bP(a,8)
r=this.a.getUint8(t)
q=C.a.az(1,s)
if(typeof r!=="number")return r.aP()
return(r&q)>>>0>0},
aa:function(a){var t,s,r
if(a>32)throw H.j(P.dE(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cF(this.b);++this.b
if(r)t=(t|C.a.as(1,s))>>>0}return t},
iq:function(a){var t,s,r,q
if(a>32)throw H.j(P.dE(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cF(this.b);++this.b
if(q)s=(s|C.a.az(1,t-r))>>>0}return s},
c9:function(){var t,s,r
for(t=0;!0;){s=this.cF(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.iq(t+1)-1}}
A.dH.prototype={
C:function(a){return"rgb("+H.x(this.b)+", "+H.x(this.c)+", "+H.x(this.d)+", "+H.x(this.a)+")"},
iC:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.az()
s=this.c
if(typeof s!=="number")return s.az()
r=this.d
if(typeof r!=="number")return r.az()
q=this.a
if(typeof q!=="number")return H.a6(q)
return(t<<24|s<<16|r<<8|q)>>>0},
U:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dH){t=this.b
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
ga6:function(a){return this.iC(!0)},
W:function(a,b){var t,s,r,q,p,o,n,m
t=J.am(b)
if(!!t.$isdH){t=this.b
s=b.b
if(typeof t!=="number")return t.W()
if(typeof s!=="number")return H.a6(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.W()
if(typeof q!=="number")return H.a6(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.W()
if(typeof o!=="number")return H.a6(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.W()
if(typeof m!=="number")return H.a6(m)
return A.fX(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.ao()
s=this.c
if(typeof s!=="number")return s.ao()
r=this.d
if(typeof r!=="number")return r.ao()
q=this.a
if(typeof q!=="number")return q.ao()
return A.tv(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.W()
s=this.c
if(typeof s!=="number")return s.W()
r=this.d
if(typeof r!=="number")return r.W()
return A.fX(t+b,s+b,r+b,this.a)}throw H.j("Cannot add ["+H.x(t.gab(b))+" "+H.x(b)+"] to a Colour. Only Colour, double and int are valid.")},
aw:function(a,b){var t,s,r,q,p,o,n,m
t=J.am(b)
if(!!t.$isdH){t=this.b
if(typeof t!=="number")return t.ao()
s=b.b
if(typeof s!=="number")return s.ao()
r=this.c
if(typeof r!=="number")return r.ao()
q=b.c
if(typeof q!=="number")return q.ao()
p=this.d
if(typeof p!=="number")return p.ao()
o=b.d
if(typeof o!=="number")return o.ao()
n=this.a
if(typeof n!=="number")return n.ao()
m=b.a
if(typeof m!=="number")return m.ao()
return A.tv(t/255*(s/255),r/255*(q/255),p/255*(o/255),n/255*(m/255))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.ao()
s=this.c
if(typeof s!=="number")return s.ao()
r=this.d
if(typeof r!=="number")return r.ao()
q=this.a
if(typeof q!=="number")return q.ao()
return A.tv(t/255*b,s/255*b,r/255*b,q/255)}throw H.j("Cannot multiply a Colour by ["+H.x(t.gab(b))+" "+H.x(b)+"]. Only Colour, double and int are valid.")},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.j("Colour index out of range: "+H.x(b))},
i:function(a,b,c){var t,s
t=J.dr(b)
if(t.a1(b,0)||t.aC(b,3))throw H.j("Colour index out of range: "+H.x(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.U(b,0)){this.b=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else if(t.U(b,1)){this.c=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else if(t.U(b,2)){this.d=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ac(c,0,255)
else if(t.U(b,0)){this.b=C.a.ac(J.kE(J.th(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.U(b,1)){this.c=C.a.ac(J.kE(J.th(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kx(c)
if(t.U(b,2)){this.d=C.a.ac(J.kE(s.aw(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ac(J.kE(s.aw(c,255)),0,255)}},
fg:function(a,b,c,d){this.b=C.d.ac(C.d.ac(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ac(C.d.ac(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ac(C.d.ac(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ac(J.ti(d,0,255),0,255)}}
A.rN.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.y]}}}
A.nf.prototype={
$1:function(a){return this.a.eG(a)},
$S:function(){return{func:1,args:[,]}}}
A.nd.prototype={
$1:function(a){this.a.P(0,a).ba(this.b.gik())},
$S:function(){return{func:1,args:[,]}}}
A.ne.prototype={
$1:function(a){this.a.ht(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.ng.prototype={
$1:function(a){return this.a.aF(0,this.b)},
$S:function(){return{func:1,args:[W.N]}}}
F.hz.prototype={
C:function(a){return this.b}}
F.er.prototype={
aM:function(a,b){F.G_(a).$1("("+this.c+")["+H.x(C.b.gbh(a.b.split(".")))+"]: "+H.x(b))},
cT:function(a,b){this.aM(C.i,b)},
by:function(a){},
gH:function(a){return this.c}}
F.ux.prototype={}
O.t8.prototype={
$1:function(a){return H.x(a.b_(1))+" = "+H.x(a.b_(2))+C.c.aw("../",this.a)},
$S:function(){return{func:1,args:[P.d8]}}}
O.t9.prototype={
$0:function(){var t=document
J.vU(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.w,null)
t=H.kA(t.querySelector("#voidButton"),"$isfV")
t.toString
W.dg(t,"click",new O.t7(),!1,W.uJ)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.IA("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.t7.prototype={
$1:function(a){return O.II()},
$S:function(){return{func:1,args:[W.N]}}}
R.hh.prototype={}
R.uQ.prototype={}
R.uP.prototype={}
A.nY.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.V(0,b)?t.n(0,b):$.$get$uO()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.V(0,b)?t.n(0,b):$.$get$uO()}throw H.j(P.dE(b,"'name' should be a String name or int id only",null))},
gS:function(a){var t=this.a
t=t.gce(t)
return new H.jC(null,J.cT(t.a),t.b,[H.M(t,0),H.M(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.V(0,b))this.an(0,b)
s=this.h1()
if(typeof s!=="number")return s.ax()
if(s>=256)throw H.j(P.dE(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
an:function(a,b){var t,s,r
t=this.a
if(!t.V(0,b))return
s=this.c
r=s.n(0,b)
t.an(0,b)
this.b.an(0,r)
s.an(0,b)
this.d.an(0,r)},
h1:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.V(0,s))return s;++s}}}
A.jM.prototype={
$asn:function(){return[A.dH]},
$isn:1}
Q.jP.prototype={}
A.ey.prototype={
bH:function(a){if(a===0)return 0
return this.h2(a)},
i7:function(){return this.bH(4294967295)},
h2:function(a){var t,s
t=this.a
if(a>4294967295){s=t.c7()
this.b=C.d.bJ(s*4294967295)
return C.d.am(s*a)}else{s=t.bH(a)
this.b=s
return s}},
bs:function(a){var t=a==null
this.a=t?C.Q:P.Hs(a)
if(!t)this.b=J.ea(a,1)},
ii:function(a,b){var t=J.bh(a)
if(t.gX(a))return
if(!!t.$iscC)return t.av(a,this.a.c7())
return t.T(a,this.bH(t.gm(a)))},
eF:function(a){return this.ii(a,!0)}}
Y.dO.prototype={
cL:function(a){var t,s
if(this.b!=null)throw H.j("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bp(0,$.ap,null,t)
this.c.push(new P.dU(s,t))
return s},
eG:function(a){var t,s,r
if(this.b!=null)throw H.j("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bF)(t),++r)t[r].aF(0,this.b)
C.b.sm(t,0)}}
V.lD.prototype={
$4:function(a,b,c,d){return V.Ae(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bi,P.bi,O.cW]}}}
V.lC.prototype={
$4:function(a,b,c,d){return V.Ad(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.C,P.C,O.cW]}}}
V.lB.prototype={
$4:function(a,b,c,d){return V.Aa(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bi,P.bi,O.cW]}}}
V.lA.prototype={
$4:function(a,b,c,d){return V.A9(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.C,P.C,O.cW]}}}
O.cW.prototype={
ir:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
iJ:function(a,b,c,d){var t,s,r,q,p
t=J.aq(d)
s=0
while(!0){r=t.gex(d)
if(typeof r!=="number")return H.a6(r)
if(!(s<r))break
q=(C.a.dn(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.u(r,q)
r[q]=p;++s}}}
D.oK.prototype={
$1:function(a){return a.gij()},
$S:function(){return{func:1,args:[D.cK]}}}
D.cK.prototype={
C:function(a){return this.a},
gH:function(a){return this.a},
gij:function(){return this.d}}
D.k9.prototype={}
D.oj.prototype={}
B.pk.prototype={
ih:function(a,b){var t
if(!this.d)this.ip()
t=this.dI(a)
if(t==null){$.$get$fv().by("Root list '"+H.x(a)+"' not found")
return"["+H.x(a)+"]"}return this.dX(J.zb(t,b),P.bZ(P.y,B.cZ))},
ig:function(a){return this.ih(a,null)},
bo:function(a){var t=0,s=P.bc(),r,q=this,p,o,n,m
var $async$bo=P.bg(function(b,c){if(b===1)return P.bd(c,s)
while(true)switch(t){case 0:p=q.a
if(p.Z(0,a)){p=$.$get$fv()
H.x(a)
p.toString
t=1
break}p.h(0,a)
t=3
return P.bP(A.e3("wordlists/"+H.x(a)+".words",!1,!1,null),$async$bo)
case 3:o=c
q.b.at(0,o.gi3())
p=o.a,n=p.length,m=0
case 4:if(!(m<p.length)){t=6
break}t=7
return P.bP(q.bo(p[m]),$async$bo)
case 7:case 5:p.length===n||(0,H.bF)(p),++m
t=4
break
case 6:q.d=!1
case 1:return P.be(r,s)}})
return P.bf($async$bo,s)},
ip:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
$.$get$fv().by("Processing word lists")
this.d=!0
t=this.c
t.b4(0)
for(s=this.b,r=s.gai(s),r=r.gS(r);r.E();){q=r.gI()
p=B.Hd(s.n(0,q))
t.i(0,q,p)
for(o=p.d,n=o.gai(o),n=n.gS(n),m=[H.an(p,"aN",0)];n.E();){l=n.gI()
for(k=new H.dN(p,p.gm(p),0,null,m);k.E();){j=k.d
if(!j.gbZ().V(0,l)){i=o.n(0,l)
j.a.i(0,l,i)}}}}for(s=t.gai(t),s=s.gS(s);s.E();){p=t.n(0,s.gI())
p.io(t)
for(r=new H.dN(p,p.gm(p),0,null,[H.an(p,"aN",0)]),o=p.d;r.E();){h=r.d
for(n=o.gai(o),n=n.gS(n);n.E();){l=n.gI()
if(!h.gbZ().V(0,l))h.a.i(0,l,o.n(0,l))}for(n=h.gbZ(),n=n.gai(n),n=n.gS(n);n.E();){g=n.gI()
m=h.a
m.i(0,g,J.tl(m.n(0,g),$.$get$xD(),new B.pm(h)))}}}},
dI:function(a){var t,s
t=this.c
if(!t.V(0,a)){$.$get$fv().by("List '"+H.x(a)+"' not found")
return}s=t.n(0,a)
return this.e.eF(s)},
dX:function(a,b){return J.tl(a,$.$get$xC(),new B.pl(this,b))}}
B.pm.prototype={
$1:function(a){var t,s
t=a.b_(1)
s=this.a
if(!s.a.V(0,t))return"["+H.x(t)+"]"
return s.a.n(0,t)},
$S:function(){return{func:1,args:[P.d8]}}}
B.pl.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=a.b_(1)
s=$.$get$xE().aV(0,t)
s=H.dm(s,B.id(),H.an(s,"n",0),null)
r=P.d7(s,!0,H.an(s,"n",0))
if(0>=r.length)return H.u(r,0)
q=J.dY(r[0],"@")
s=q.length
p=s>1?q[1]:null
o=this.a
if(0>=s)return H.u(q,0)
n=o.dI(q[0])
s=r.length
if(s>1){for(s=this.b,m=n,l=1;k=r.length,l<k;++l){q=J.dY(r[l],"@")
if(0>=q.length)return H.u(q,0)
if(J.b_(q[0],"var")){if(q.length<2)continue
j=q[1]
if(s.V(0,j))m=s.n(0,j)
else s.i(0,j,m)}}s=k}else m=n
if(m==null){if(0>=s)return H.u(r,0)
return"["+H.x(r[0])+"]"}s=J.aq(m)
i=s.av(m,p)
if(i==null){$.$get$fv().by("Missing variant '"+H.x(p)+"' for word '"+H.x(m)+"', falling back to base")
i=s.br(m)}return o.dX(i,this.b)},
$S:function(){return{func:1,args:[P.d8]}}}
B.cZ.prototype={
av:function(a,b){if(b==null)b="MAIN"
if(this.a.V(0,b))return this.a.n(0,b)
return},
br:function(a){return this.av(a,null)},
C:function(a){return"[Word: "+H.x(this.br(0))+"]"},
gbZ:function(){return this.a}}
B.eI.prototype={
C:function(a){return"WordList '"+H.x(this.e)+"': "+this.fc(0)},
eH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
if(this.f)return
this.f=!0
b=P.a0(null,null,null,B.eI)
b.h(0,this)
for(t=this.c,s=t.gai(t),s=s.gS(s),r=this.e;s.E();){q=s.gI()
if(a.V(0,q)){p=a.n(0,q)
if(b.Z(0,p)){$.$get$fv().aM(C.h,"Include loop detected in list '"+H.x(r)+"', already visited '"+H.x(p.e)+"', ignoring")
continue}p.eH(a,b)}}for(s=t.gai(t),s=s.gS(s),r=[H.an(this,"cC",0)];s.E();){q=s.gI()
if(!a.V(0,q))continue
for(o=a.n(0,q).b,n=o.length,m=0;m<o.length;o.length===n||(0,H.bF)(o),++m){l=o[m]
k=J.aq(l)
j=k.gY(l)
k=J.th(k.gbd(l),t.n(0,q))
C.b.h(this.b,new Q.h(j,this.k(j,J.tm(k)),r))}}},
io:function(a){return this.eH(a,null)},
$isp:1,
$asp:function(){return[B.cZ]},
$asdT:function(){return[B.cZ]},
$ashZ:function(){return[B.cZ]},
$ascC:function(){return[B.cZ]},
$asn:function(){return[B.cZ]},
$asr:function(){return[B.cZ]},
gcW:function(){return this.c},
ghB:function(){return this.d},
gH:function(a){return this.e}}
B.eJ.prototype={
C:function(a){return"[WordListFile: "+this.b.C(0)+" ]"},
gcW:function(){return this.a},
gi3:function(){return this.b}}
S.fm.prototype={}
S.vk.prototype={}
S.vl.prototype={}
S.vm.prototype={}
S.tF.prototype={}
S.tI.prototype={}
S.tu.prototype={}
S.v2.prototype={}
S.vo.prototype={}
S.vp.prototype={}
S.l3.prototype={}
S.uT.prototype={}
S.uN.prototype={}
S.n7.prototype={}
S.tz.prototype={}
S.tp.prototype={}
S.lm.prototype={}
S.uy.prototype={}
S.ln.prototype={}
S.o_.prototype={}
S.v9.prototype={}
S.v6.prototype={}
S.va.prototype={}
S.to.prototype={}
S.mk.prototype={}
S.l1.prototype={}
S.tt.prototype={}
S.ts.prototype={}
S.uU.prototype={}
S.vb.prototype={}
S.uV.prototype={}
S.tH.prototype={}
S.tG.prototype={}
S.v8.prototype={}
S.v7.prototype={}
S.pr.prototype={}
S.vf.prototype={}
S.tw.prototype={}
S.tx.prototype={}
S.vn.prototype={}
S.hB.prototype={}
S.uE.prototype={}
S.uF.prototype={}
S.uG.prototype={}
S.uH.prototype={}
S.v3.prototype={}
S.v4.prototype={}
S.v5.prototype={}
S.uD.prototype={}
S.uK.prototype={}
S.uL.prototype={}
S.tV.prototype={}
S.tW.prototype={}
S.tX.prototype={}
S.uM.prototype={}
S.uI.prototype={}
S.tq.prototype={}
S.vh.prototype={}
S.vi.prototype={}
S.vg.prototype={}
Z.us.prototype={}
Z.uo.prototype={}
Z.up.prototype={}
Q.cC.prototype={
av:function(a,b){var t,s,r,q,p,o,n
t=this.dd()
s=J.ti(b,0,1)*t
for(r=J.cT(this.gbp()),q=0;r.E();){p=r.gI()
o=J.aq(p)
n=o.gbd(p)
if(typeof n!=="number")return H.a6(n)
q+=n
if(s<=q)return o.gY(p)}return},
dd:function(){var t,s,r
for(t=J.cT(this.gbp()),s=0;t.E();){r=J.z9(t.gI())
if(typeof r!=="number")return H.a6(r)
s+=r}return s},
k:function(a,b){return b},
C:function(a){return J.cv(this.gbp())},
aB:function(a,b){return Q.vr(this,b,H.an(this,"cC",0),null)},
a3:function(a,b){return Q.vq(this,!1,!0,null,H.an(this,"cC",0))},
ar:function(a){return this.a3(a,!0)},
$isn:1,
$asn:null}
Q.dT.prototype={
av:function(a,b){var t,s,r,q,p,o,n,m,l
t=this.dd()
s=J.ti(b,0,1)*t
for(r=this.b,q=r.length,p=0,o=0;o<r.length;r.length===q||(0,H.bF)(r),++o){n=r[o]
m=J.aq(n)
l=m.gbd(n)
if(typeof l!=="number")return H.a6(l)
p+=l
if(s<=p)return m.gY(n)}return},
gbp:function(){return this.b},
c_:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.tm(c)),[H.an(this,"cC",0)]))},
h:function(a,b){return this.c_(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return J.vQ(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.u(t,b)
t[b]=new Q.h(c,s,[H.an(this,"cC",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
C:function(a){return P.jv(this.b,"[","]")},
aB:function(a,b){return Q.vr(this,b,H.an(this,"dT",0),null)},
a3:function(a,b){return Q.vq(this,!1,!0,null,H.an(this,"dT",0))},
ar:function(a){return this.a3(a,!0)},
cn:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hZ.prototype={$ascC:null,$asn:null,$asp:null,$asr:null,$isp:1,$isr:1,$isn:1}
Q.h.prototype={
C:function(a){return"("+H.x(this.a)+" @ "+H.x(this.b)+")"},
gY:function(a){return this.a},
gbd:function(a){return this.b}}
Q.eL.prototype={
gbp:function(){return this.b},
gS:function(a){var t=new Q.pU(null,[H.an(this,"eL",0)])
t.a=J.cT(this.b)
return t},
gm:function(a){return J.c0(this.b)},
C:function(a){return J.cv(this.b)},
aB:function(a,b){return Q.vr(this,b,H.an(this,"eL",0),null)},
a3:function(a,b){return Q.vq(this,!1,!0,null,H.an(this,"eL",0))},
ar:function(a){return this.a3(a,!0)}}
Q.hY.prototype={$ascC:null,$asn:null,$isn:1}
Q.pU.prototype={
gI:function(){return J.vQ(this.a.gI())},
E:function(){return this.a.E()}}
Q.k6.prototype={
$aseL:function(a,b){return[b]},
$ashY:function(a,b){return[b]},
$ascC:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.pV.prototype={
$1:function(a){var t=J.aq(a)
return new Q.h(this.c.$1(t.gY(a)),t.gbd(a),[this.b])},
$S:function(){return H.eP(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"k6")}}
J.f.prototype.f9=J.f.prototype.C
J.ht.prototype.fb=J.ht.prototype.C
P.dp.prototype.fd=P.dp.prototype.bR
P.dp.prototype.fe=P.dp.prototype.bQ
P.aN.prototype.dm=P.aN.prototype.a4
P.n.prototype.fa=P.n.prototype.cg
W.cw.prototype.cm=W.cw.prototype.aG
W.i6.prototype.ff=W.i6.prototype.b3
Q.dT.prototype.fc=Q.dT.prototype.C;(function installTearOffs(){installTearOff(H.fA.prototype,"gi1",0,0,0,null,["$0"],["c5"],1)
installTearOff(H.dA.prototype,"geX",0,0,0,null,["$1"],["aD"],14)
installTearOff(H.eM.prototype,"ghE",0,0,0,null,["$1"],["b5"],14)
installTearOff(H,"yj",1,0,0,null,["$1"],["HT"],9)
installTearOff(P,"HW",1,0,0,null,["$1"],["Hh"],7)
installTearOff(P,"HX",1,0,0,null,["$1"],["Hi"],7)
installTearOff(P,"HY",1,0,0,null,["$1"],["Hj"],7)
installTearOff(P,"yv",1,0,0,null,["$0"],["HS"],1)
installTearOff(P.kd.prototype,"geg",0,0,0,null,["$2","$1"],["cQ","bl"],8)
installTearOff(P.bp.prototype,"gbj",0,0,0,null,["$2","$1"],["ap","fE"],8)
var t
installTearOff(t=P.dp.prototype,"gdU",0,0,0,null,["$0"],["bU"],1)
installTearOff(t,"gdV",0,0,0,null,["$0"],["bV"],1)
installTearOff(t=P.i1.prototype,"gdU",0,0,0,null,["$0"],["bU"],1)
installTearOff(t,"gdV",0,0,0,null,["$0"],["bV"],1)
installTearOff(t,"gfQ",0,0,0,null,["$1"],["fR"],function(){return H.eP(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"i1")})
installTearOff(t,"gfU",0,0,0,null,["$2"],["fV"],18)
installTearOff(t,"gfS",0,0,0,null,["$0"],["fT"],1)
installTearOff(P.kk.prototype,"ghu",0,1,0,null,["$1"],["Z"],33)
installTearOff(P,"I6",1,0,0,null,["$2"],["zS"],32)
installTearOff(P,"I7",1,0,0,null,["$1"],["fH"],4)
installTearOff(W,"Ij",1,0,0,null,["$4"],["Ho"],13)
installTearOff(W,"Ik",1,0,0,null,["$4"],["Hp"],13)
installTearOff(t=W.ii.prototype,"gau",0,1,0,null,["$1"],["cT"],4)
installTearOff(t,"ghW",0,0,0,null,["$1"],["eu"],4)
installTearOff(t,"giG",0,0,0,null,["$1"],["iH"],4)
installTearOff(W.f_.prototype,"gY",0,1,0,null,["$1"],["K"],5)
installTearOff(W.il.prototype,"gY",0,1,0,null,["$1"],["K"],16)
installTearOff(W.ir.prototype,"gY",0,1,0,null,["$1"],["K"],5)
installTearOff(W.is.prototype,"gY",0,1,0,null,["$1"],["K"],9)
installTearOff(W.it.prototype,"gY",0,1,0,null,["$1"],["K"],5)
installTearOff(W.f9.prototype,"gY",0,1,0,null,["$1"],["K"],17)
installTearOff(W.iJ.prototype,"gY",0,1,0,null,["$1"],["K"],10)
installTearOff(W.fb.prototype,"gY",0,1,0,null,["$1"],["K"],11)
installTearOff(W.iL.prototype,"gY",0,1,0,null,["$1"],["K"],11)
installTearOff(W.jD.prototype,"gY",0,1,0,null,["$1"],["K"],5)
installTearOff(W.jE.prototype,"gY",0,1,0,null,["$1"],["K"],12)
installTearOff(W.jH.prototype,"gd3",0,1,0,null,["$0"],["d4"],6)
installTearOff(W.ci.prototype,"gY",0,1,0,null,["$1"],["K"],12)
installTearOff(W.jR.prototype,"gY",0,1,0,null,["$1"],["K"],19)
installTearOff(W.jV.prototype,"gY",0,1,0,null,["$1"],["K"],10)
installTearOff(W.jX.prototype,"gY",0,1,0,null,["$1"],["K"],20)
installTearOff(W.jY.prototype,"gY",0,1,0,null,["$1"],["K"],21)
installTearOff(W.ck.prototype,"gY",0,1,0,null,["$1"],["K"],22)
installTearOff(W.k2.prototype,"gY",0,1,0,null,["$1"],["K"],23)
installTearOff(W.k3.prototype,"gY",0,1,0,null,["$1"],["K"],39)
installTearOff(t=W.k4.prototype,"gc8",0,1,0,null,["$0"],["ic"],6)
installTearOff(t,"gd3",0,1,0,null,["$0"],["d4"],6)
installTearOff(W.k5.prototype,"gY",0,1,0,null,["$1"],["K"],24)
installTearOff(W.i_.prototype,"gY",0,1,0,null,["$1"],["K"],25)
installTearOff(W.ke.prototype,"gY",0,1,0,null,["$1"],["K"],26)
installTearOff(W.kj.prototype,"gY",0,1,0,null,["$1"],["K"],27)
installTearOff(W.i5.prototype,"gY",0,1,0,null,["$1"],["K"],28)
installTearOff(W.kn.prototype,"gY",0,1,0,null,["$1"],["K"],35)
installTearOff(W.kp.prototype,"gY",0,1,0,null,["$1"],["K"],30)
installTearOff(P.jZ.prototype,"gY",0,1,0,null,["$1"],["K"],31)
installTearOff(R,"ew",1,0,0,null,["$1"],["GB"],0)
installTearOff(R,"xu",1,0,0,null,["$1"],["Gp"],0)
installTearOff(R,"v1",1,0,0,null,["$1"],["GA"],0)
installTearOff(R,"bU",1,0,0,null,["$1"],["Gz"],0)
installTearOff(R,"v0",1,0,0,null,["$1"],["Gy"],0)
installTearOff(R,"xw",1,0,0,null,["$1"],["Gw"],0)
installTearOff(R,"hL",1,0,0,null,["$1"],["Gv"],0)
installTearOff(R,"ev",1,0,0,null,["$1"],["Gs"],0)
installTearOff(R,"e6",1,0,0,null,["$1"],["Gu"],0)
installTearOff(R,"fp",1,0,0,null,["$1"],["Gx"],0)
installTearOff(R,"v_",1,0,0,null,["$1"],["Gt"],0)
installTearOff(R,"z",1,0,0,null,["$1"],["Gq"],0)
installTearOff(R,"xv",1,0,0,null,["$1"],["Gr"],0)
installTearOff(F.er.prototype,"gau",0,1,0,null,["$1"],["cT"],4)
installTearOff(O,"Is",1,0,0,null,["$1"],["Iu"],34)
installTearOff(Y.dO.prototype,"gik",0,0,0,null,["$1"],["eG"],function(){return H.eP(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dO")})
installTearOff(V,"Iy",1,0,0,null,["$4"],["Ac"],3)
installTearOff(V,"Ix",1,0,0,null,["$4"],["Ab"],2)
installTearOff(B,"id",1,0,0,null,["$1"],["HN"],36)
installTearOff(T,"I1",1,0,0,null,["$4"],["A2"],3)
installTearOff(T,"I0",1,0,0,null,["$4"],["A1"],2)
installTearOff(T,"I_",1,0,0,null,["$4"],["A0"],3)
installTearOff(T,"HZ",1,0,0,null,["$4"],["A_"],2)
installTearOff(F,"Ie",1,0,0,null,["$4"],["A8"],3)
installTearOff(F,"Id",1,0,0,null,["$4"],["A7"],2)
installTearOff(F,"Ic",1,0,0,null,["$4"],["A6"],3)
installTearOff(F,"Ib",1,0,0,null,["$4"],["A5"],2)
installTearOff(F,"Ia",1,0,0,null,["$4"],["A4"],3)
installTearOff(F,"I9",1,0,0,null,["$4"],["A3"],2)
installTearOff(S,"yN",1,0,0,null,["$0"],["t5"],37)
installTearOff(S,"IF",1,0,0,null,["$2"],["Ip"],38)
installTearOff(S,"yO",1,0,0,null,["$1","$0"],["yR",function(){return S.yR(null)}],15)
installTearOff(S,"IG",1,0,0,null,["$1","$0"],["yI",function(){return S.yI(null)}],15)
installTearOff(S,"IE",1,0,0,null,["$1","$0"],["kw",function(){return S.kw(null)}],29)})();(function inheritance(){inherit(P.ab,null)
var t=P.ab
inherit(H.uu,t)
inherit(J.f,t)
inherit(J.ie,t)
inherit(P.fn,t)
inherit(P.n,t)
inherit(H.dN,t)
inherit(P.jw,t)
inherit(H.iG,t)
inherit(H.pD,t)
inherit(H.eY,t)
inherit(H.qV,t)
inherit(H.fA,t)
inherit(H.qs,t)
inherit(H.eN,t)
inherit(H.qU,t)
inherit(H.qe,t)
inherit(H.fq,t)
inherit(H.pv,t)
inherit(H.dF,t)
inherit(H.dA,t)
inherit(H.eM,t)
inherit(H.la,t)
inherit(H.oi,t)
inherit(H.pA,t)
inherit(P.ee,t)
inherit(H.h9,t)
inherit(H.ko,t)
inherit(H.dS,t)
inherit(H.w,t)
inherit(H.n8,t)
inherit(H.na,t)
inherit(H.hs,t)
inherit(H.km,t)
inherit(H.kb,t)
inherit(H.k0,t)
inherit(H.rg,t)
inherit(P.c4,t)
inherit(P.eZ,t)
inherit(P.kd,t)
inherit(P.ki,t)
inherit(P.bp,t)
inherit(P.kc,t)
inherit(P.dn,t)
inherit(P.oM,t)
inherit(P.dp,t)
inherit(P.kf,t)
inherit(P.qm,t)
inherit(P.qY,t)
inherit(P.re,t)
inherit(P.eS,t)
inherit(P.rx,t)
inherit(P.qL,t)
inherit(P.qN,t)
inherit(P.ox,t)
inherit(P.qS,t)
inherit(P.d0,t)
inherit(P.fh,t)
inherit(P.aN,t)
inherit(P.ro,t)
inherit(P.nn,t)
inherit(P.qT,t)
inherit(P.fW,t)
inherit(P.fY,t)
inherit(P.rq,t)
inherit(P.cS,t)
inherit(P.bI,t)
inherit(P.dZ,t)
inherit(P.ds,t)
inherit(P.dI,t)
inherit(P.nU,t)
inherit(P.k_,t)
inherit(P.qw,t)
inherit(P.bM,t)
inherit(P.lG,t)
inherit(P.p,t)
inherit(P.bn,t)
inherit(P.cB,t)
inherit(P.d8,t)
inherit(P.dQ,t)
inherit(P.y,t)
inherit(P.cd,t)
inherit(P.eH,t)
inherit(P.kr,t)
inherit(P.pE,t)
inherit(P.rc,t)
inherit(W.ii,t)
inherit(W.jL,t)
inherit(W.ik,t)
inherit(W.qd,t)
inherit(P.le,t)
inherit(W.i3,t)
inherit(W.bu,t)
inherit(W.jJ,t)
inherit(W.i6,t)
inherit(W.rk,t)
inherit(W.iH,t)
inherit(W.e4,t)
inherit(W.rn,t)
inherit(W.r8,t)
inherit(W.ks,t)
inherit(P.rh,t)
inherit(P.q6,t)
inherit(P.qR,t)
inherit(P.r_,t)
inherit(P.r0,t)
inherit(P.bi,t)
inherit(P.df,t)
inherit(T.fM,t)
inherit(T.di,t)
inherit(T.hm,t)
inherit(T.nW,t)
inherit(T.q2,t)
inherit(T.q3,t)
inherit(T.q4,t)
inherit(T.q1,t)
inherit(T.mu,t)
inherit(T.iM,t)
inherit(B.hn,t)
inherit(N.a8,t)
inherit(L.fN,t)
inherit(A.jM,t)
inherit(O.c2,t)
inherit(T.hN,t)
inherit(M.fU,t)
inherit(X.iw,t)
inherit(X.ig,t)
inherit(M.ha,t)
inherit(Z.iv,t)
inherit(E.nR,t)
inherit(E.O,t)
inherit(A.a2,t)
inherit(U.c,t)
inherit(Y.dP,t)
inherit(K.cJ,t)
inherit(X.F,t)
inherit(G.a1,t)
inherit(A.fT,t)
inherit(B.du,t)
inherit(B.dj,t)
inherit(A.dH,t)
inherit(F.hz,t)
inherit(F.er,t)
inherit(Q.jP,t)
inherit(A.ey,t)
inherit(Y.dO,t)
inherit(O.cW,t)
inherit(D.cK,t)
inherit(B.pk,t)
inherit(B.cZ,t)
inherit(Q.cC,t)
inherit(B.eJ,t)
inherit(Q.h,t)
t=J.f
inherit(J.mS,t)
inherit(J.mT,t)
inherit(J.ht,t)
inherit(J.en,t)
inherit(J.fi,t)
inherit(J.eo,t)
inherit(H.fj,t)
inherit(H.et,t)
inherit(W.aF,t)
inherit(W.cN,t)
inherit(W.eW,t)
inherit(W.l5,t)
inherit(W.fZ,t)
inherit(W.ld,t)
inherit(W.bL,t)
inherit(W.iN,t)
inherit(W.lp,t)
inherit(W.f0,t)
inherit(W.il,t)
inherit(W.ip,t)
inherit(W.ls,t)
inherit(W.iq,t)
inherit(W.iO,t)
inherit(W.is,t)
inherit(W.it,t)
inherit(W.h2,t)
inherit(W.N,t)
inherit(W.iP,t)
inherit(W.ma,t)
inherit(W.md,t)
inherit(W.mg,t)
inherit(W.co,t)
inherit(W.mp,t)
inherit(W.iQ,t)
inherit(W.hl,t)
inherit(W.e7,t)
inherit(W.nh,t)
inherit(W.jD,t)
inherit(W.cq,t)
inherit(W.j_,t)
inherit(W.nI,t)
inherit(W.nJ,t)
inherit(W.jH,t)
inherit(W.j0,t)
inherit(W.o0,t)
inherit(W.e5,t)
inherit(W.e8,t)
inherit(W.ci,t)
inherit(W.j1,t)
inherit(W.jU,t)
inherit(W.ov,t)
inherit(W.cs,t)
inherit(W.j2,t)
inherit(W.fs,t)
inherit(W.ck,t)
inherit(W.oH,t)
inherit(W.oL,t)
inherit(W.p9,t)
inherit(W.cm,t)
inherit(W.j3,t)
inherit(W.pu,t)
inherit(W.ct,t)
inherit(W.j4,t)
inherit(W.fw,t)
inherit(W.k3,t)
inherit(W.k4,t)
inherit(W.pJ,t)
inherit(W.pK,t)
inherit(W.fx,t)
inherit(W.k5,t)
inherit(W.qh,t)
inherit(W.j5,t)
inherit(W.j6,t)
inherit(W.iR,t)
inherit(W.iS,t)
inherit(W.iT,t)
inherit(W.iU,t)
inherit(W.rv,t)
inherit(W.rw,t)
inherit(P.mz,t)
inherit(P.nQ,t)
inherit(P.d6,t)
inherit(P.iV,t)
inherit(P.d9,t)
inherit(P.iW,t)
inherit(P.o8,t)
inherit(P.iX,t)
inherit(P.de,t)
inherit(P.iY,t)
inherit(P.pQ,t)
inherit(P.fP,t)
inherit(P.kJ,t)
inherit(P.ok,t)
inherit(P.ru,t)
inherit(P.iZ,t)
t=J.ht
inherit(J.o6,t)
inherit(J.eG,t)
inherit(J.ep,t)
inherit(F.ux,t)
inherit(R.hh,t)
inherit(R.uQ,t)
inherit(R.uP,t)
inherit(S.fm,t)
inherit(S.vk,t)
inherit(S.vl,t)
inherit(S.vm,t)
inherit(S.tF,t)
inherit(S.tI,t)
inherit(S.tu,t)
inherit(S.vo,t)
inherit(S.vp,t)
inherit(S.lm,t)
inherit(S.v9,t)
inherit(S.va,t)
inherit(S.to,t)
inherit(S.mk,t)
inherit(S.l1,t)
inherit(S.tt,t)
inherit(S.ts,t)
inherit(S.tH,t)
inherit(S.pr,t)
inherit(S.tx,t)
inherit(S.hB,t)
inherit(S.uF,t)
inherit(S.uH,t)
inherit(S.v4,t)
inherit(S.v5,t)
inherit(S.uK,t)
inherit(S.uL,t)
inherit(S.tW,t)
inherit(S.tX,t)
inherit(S.uM,t)
inherit(S.uI,t)
inherit(S.tq,t)
inherit(S.vh,t)
inherit(S.vi,t)
inherit(S.vg,t)
inherit(Z.us,t)
inherit(Z.uo,t)
inherit(Z.up,t)
inherit(J.ut,J.en)
t=J.fi
inherit(J.jy,t)
inherit(J.jx,t)
inherit(P.hx,P.fn)
t=P.hx
inherit(H.hW,t)
inherit(W.kh,t)
inherit(W.d_,t)
inherit(H.l7,H.hW)
t=P.n
inherit(H.r,t)
inherit(H.hA,t)
inherit(H.e9,t)
inherit(P.hq,t)
inherit(H.rf,t)
t=H.r
inherit(H.eq,t)
inherit(H.n9,t)
inherit(P.qM,t)
inherit(P.eA,t)
t=H.eq
inherit(H.pa,t)
inherit(H.es,t)
inherit(P.nb,t)
inherit(H.f1,H.hA)
t=P.jw
inherit(H.jC,t)
inherit(H.k7,t)
inherit(Q.pU,t)
t=H.eY
inherit(H.td,t)
inherit(H.te,t)
inherit(H.qQ,t)
inherit(H.qt,t)
inherit(H.mD,t)
inherit(H.mE,t)
inherit(H.qX,t)
inherit(H.pw,t)
inherit(H.px,t)
inherit(H.tf,t)
inherit(H.t_,t)
inherit(H.t0,t)
inherit(H.t1,t)
inherit(H.t2,t)
inherit(H.t3,t)
inherit(H.pg,t)
inherit(H.mW,t)
inherit(H.mV,t)
inherit(H.rW,t)
inherit(H.rX,t)
inherit(H.rY,t)
inherit(P.qa,t)
inherit(P.q9,t)
inherit(P.qb,t)
inherit(P.qc,t)
inherit(P.ry,t)
inherit(P.rz,t)
inherit(P.rJ,t)
inherit(P.rL,t)
inherit(P.mj,t)
inherit(P.mi,t)
inherit(P.qx,t)
inherit(P.qF,t)
inherit(P.qB,t)
inherit(P.qC,t)
inherit(P.qD,t)
inherit(P.qz,t)
inherit(P.qE,t)
inherit(P.qy,t)
inherit(P.qI,t)
inherit(P.qJ,t)
inherit(P.qH,t)
inherit(P.qG,t)
inherit(P.oP,t)
inherit(P.oN,t)
inherit(P.oO,t)
inherit(P.oQ,t)
inherit(P.oV,t)
inherit(P.oT,t)
inherit(P.oU,t)
inherit(P.oW,t)
inherit(P.oZ,t)
inherit(P.p_,t)
inherit(P.oX,t)
inherit(P.oY,t)
inherit(P.p0,t)
inherit(P.p1,t)
inherit(P.oR,t)
inherit(P.oS,t)
inherit(P.qg,t)
inherit(P.qf,t)
inherit(P.qZ,t)
inherit(P.rB,t)
inherit(P.rA,t)
inherit(P.rC,t)
inherit(P.rI,t)
inherit(P.r2,t)
inherit(P.r3,t)
inherit(P.r4,t)
inherit(P.qO,t)
inherit(P.no,t)
inherit(P.rs,t)
inherit(P.rr,t)
inherit(P.lw,t)
inherit(P.lx,t)
inherit(P.pI,t)
inherit(P.pF,t)
inherit(P.pG,t)
inherit(P.pH,t)
inherit(P.rM,t)
inherit(P.rF,t)
inherit(P.rE,t)
inherit(P.rG,t)
inherit(P.rH,t)
inherit(W.qj,t)
inherit(W.rK,t)
inherit(W.ms,t)
inherit(W.mt,t)
inherit(W.qv,t)
inherit(W.nL,t)
inherit(W.nK,t)
inherit(W.ra,t)
inherit(W.rb,t)
inherit(W.rm,t)
inherit(W.rt,t)
inherit(P.rj,t)
inherit(P.q7,t)
inherit(P.rO,t)
inherit(P.rP,t)
inherit(P.rQ,t)
inherit(P.lf,t)
inherit(P.rD,t)
inherit(P.kP,t)
inherit(P.kQ,t)
inherit(O.m7,t)
inherit(O.m8,t)
inherit(O.m9,t)
inherit(O.kX,t)
inherit(Z.mh,t)
inherit(A.mR,t)
inherit(A.mQ,t)
inherit(G.mO,t)
inherit(U.pY,t)
inherit(U.pZ,t)
inherit(A.rN,t)
inherit(A.nf,t)
inherit(A.nd,t)
inherit(A.ne,t)
inherit(A.ng,t)
inherit(O.t8,t)
inherit(O.t9,t)
inherit(O.t7,t)
inherit(V.lD,t)
inherit(V.lC,t)
inherit(V.lB,t)
inherit(V.lA,t)
inherit(D.oK,t)
inherit(B.pm,t)
inherit(B.pl,t)
inherit(Q.pV,t)
t=H.qe
inherit(H.fB,t)
inherit(H.i8,t)
inherit(H.lb,H.la)
t=P.ee
inherit(H.jK,t)
inherit(H.mX,t)
inherit(H.pC,t)
inherit(H.l4,t)
inherit(H.on,t)
inherit(P.fl,t)
inherit(P.cU,t)
inherit(P.S,t)
inherit(P.eF,t)
inherit(P.dc,t)
inherit(P.by,t)
inherit(P.lo,t)
t=H.pg
inherit(H.oJ,t)
inherit(H.fR,t)
t=P.hq
inherit(H.q8,t)
inherit(T.fL,t)
t=H.et
inherit(H.nA,t)
inherit(H.jF,t)
t=H.jF
inherit(H.hG,t)
inherit(H.hH,t)
inherit(H.hI,H.hG)
inherit(H.hE,H.hI)
inherit(H.hJ,H.hH)
inherit(H.hF,H.hJ)
t=H.hE
inherit(H.nB,t)
inherit(H.nC,t)
t=H.hF
inherit(H.nD,t)
inherit(H.nE,t)
inherit(H.nF,t)
inherit(H.nG,t)
inherit(H.nH,t)
inherit(H.jG,t)
inherit(H.fk,t)
t=P.kd
inherit(P.dU,t)
inherit(P.kq,t)
t=P.kf
inherit(P.ql,t)
inherit(P.qn,t)
inherit(P.rd,P.qY)
t=P.dn
inherit(P.i0,t)
inherit(W.kg,t)
inherit(P.i1,P.dp)
inherit(P.qW,P.i0)
inherit(P.r1,P.rx)
inherit(P.kl,H.w)
inherit(P.ow,P.ox)
inherit(P.qP,P.ow)
inherit(P.kk,P.qP)
inherit(P.hX,P.nn)
t=P.fW
inherit(P.kU,t)
inherit(P.lz,t)
t=P.fY
inherit(P.kV,t)
inherit(P.pN,t)
inherit(P.pM,P.lz)
t=P.ds
inherit(P.V,t)
inherit(P.C,t)
t=P.cU
inherit(P.ez,t)
inherit(P.mA,t)
inherit(P.qk,P.kr)
t=W.aF
inherit(W.af,t)
inherit(W.h3,t)
inherit(W.l9,t)
inherit(W.iF,t)
inherit(W.mb,t)
inherit(W.me,t)
inherit(W.hk,t)
inherit(W.hD,t)
inherit(W.oa,t)
inherit(W.jT,t)
inherit(W.oy,t)
inherit(W.eK,t)
inherit(W.cr,t)
inherit(W.h4,t)
inherit(W.cR,t)
inherit(W.cL,t)
inherit(W.h5,t)
inherit(W.pO,t)
inherit(W.pT,t)
inherit(W.k8,t)
inherit(W.q_,t)
inherit(W.r9,t)
inherit(P.lq,t)
inherit(P.hM,t)
inherit(P.py,t)
inherit(P.bH,t)
inherit(P.fQ,t)
t=W.af
inherit(W.cw,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.io,t)
inherit(W.fy,t)
inherit(W.qo,t)
t=W.cw
inherit(W.aL,t)
inherit(P.c7,t)
t=W.aL
inherit(W.eR,t)
inherit(W.kK,t)
inherit(W.hC,t)
inherit(W.kW,t)
inherit(W.eX,t)
inherit(W.fV,t)
inherit(W.ly,t)
inherit(W.m6,t)
inherit(W.iJ,t)
inherit(W.mw,t)
inherit(W.fd,t)
inherit(W.mB,t)
inherit(W.n_,t)
inherit(W.n1,t)
inherit(W.hv,t)
inherit(W.nm,t)
inherit(W.nr,t)
inherit(W.ns,t)
inherit(W.nt,t)
inherit(W.nu,t)
inherit(W.nO,t)
inherit(W.nP,t)
inherit(W.nT,t)
inherit(W.nV,t)
inherit(W.nZ,t)
inherit(W.oe,t)
inherit(W.fr,t)
inherit(W.jV,t)
inherit(W.oA,t)
inherit(W.oD,t)
inherit(W.hP,t)
inherit(W.p7,t)
inherit(W.k1,t)
inherit(W.pe,t)
inherit(W.pf,t)
inherit(W.hU,t)
inherit(W.pj,t)
inherit(W.qK,t)
inherit(W.eU,W.hC)
inherit(W.h6,W.h3)
inherit(W.kS,W.h6)
t=W.bL
inherit(W.lg,t)
inherit(W.lh,t)
inherit(W.h_,t)
inherit(W.h0,t)
inherit(W.li,t)
inherit(W.lj,t)
inherit(W.lk,t)
inherit(W.f_,W.iN)
inherit(W.qi,W.jL)
inherit(W.j7,W.iO)
inherit(W.ir,W.j7)
t=W.N
inherit(W.lE,t)
inherit(W.oF,t)
inherit(W.oG,t)
inherit(W.cg,W.eW)
inherit(W.j8,W.iP)
inherit(W.f9,W.j8)
inherit(W.j9,W.iQ)
inherit(W.fb,W.j9)
inherit(W.iL,W.fb)
inherit(W.e2,W.hk)
inherit(W.hu,W.e7)
inherit(W.nv,W.hD)
inherit(W.jj,W.j_)
inherit(W.jE,W.jj)
inherit(W.jk,W.j0)
inherit(W.jI,W.jk)
inherit(W.o5,W.e8)
inherit(W.jl,W.j1)
inherit(W.jR,W.jl)
inherit(W.oz,W.eK)
inherit(W.h7,W.h4)
inherit(W.jX,W.h7)
inherit(W.jm,W.j2)
inherit(W.jY,W.jm)
inherit(W.jn,W.j3)
inherit(W.pp,W.jn)
inherit(W.h8,W.h5)
inherit(W.pq,W.h8)
inherit(W.jo,W.j4)
inherit(W.k2,W.jo)
inherit(W.jp,W.j5)
inherit(W.i_,W.jp)
inherit(W.jq,W.j6)
inherit(W.ke,W.jq)
inherit(W.qp,W.iq)
inherit(W.ja,W.iR)
inherit(W.kj,W.ja)
inherit(W.jb,W.iS)
inherit(W.i5,W.jb)
inherit(W.jc,W.iT)
inherit(W.kn,W.jc)
inherit(W.jd,W.iU)
inherit(W.kp,W.jd)
inherit(W.qq,W.qd)
t=P.le
inherit(W.qr,t)
inherit(P.kO,t)
inherit(W.dV,W.kg)
inherit(W.qu,P.oM)
inherit(W.rl,W.i6)
inherit(P.ri,P.rh)
inherit(P.ka,P.q6)
inherit(P.bV,P.r0)
t=P.c7
inherit(P.cp,t)
inherit(P.eb,t)
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
inherit(P.lV,t)
inherit(P.lW,t)
inherit(P.mc,t)
inherit(P.np,t)
inherit(P.nq,t)
inherit(P.o3,t)
inherit(P.hO,t)
inherit(P.p8,t)
inherit(P.pd,t)
inherit(P.pP,t)
inherit(P.i2,t)
inherit(P.r5,t)
inherit(P.r6,t)
inherit(P.r7,t)
t=P.cp
inherit(P.kH,t)
inherit(P.mx,t)
inherit(P.pb,t)
inherit(P.eE,t)
inherit(P.pL,t)
inherit(P.je,P.iV)
inherit(P.n4,P.je)
inherit(P.jf,P.iW)
inherit(P.nM,P.jf)
inherit(P.jg,P.iX)
inherit(P.p5,P.jg)
inherit(P.po,P.eE)
inherit(P.jh,P.iY)
inherit(P.pz,P.jh)
t=P.bH
inherit(P.eV,t)
inherit(P.kY,t)
inherit(P.lc,t)
t=P.eV
inherit(P.eT,t)
inherit(P.jN,t)
inherit(P.ji,P.iZ)
inherit(P.jZ,P.ji)
t=B.hn
inherit(S.kI,t)
inherit(M.kN,t)
inherit(A.l8,t)
inherit(M.ll,t)
inherit(V.lt,t)
inherit(U.lX,t)
inherit(N.mZ,t)
inherit(F.ny,t)
inherit(G.o9,t)
inherit(Q.om,t)
inherit(N.oC,t)
inherit(D.ph,t)
inherit(V.pi,t)
inherit(F.q0,t)
t=N.a8
inherit(T.lr,t)
inherit(R.of,t)
t=T.lr
inherit(K.bW,t)
inherit(S.bJ,t)
inherit(T.c6,t)
inherit(M.bD,t)
inherit(A.nY,A.jM)
inherit(L.aS,A.nY)
t=O.c2
inherit(O.dt,t)
inherit(O.iu,t)
inherit(O.eD,t)
t=O.dt
inherit(U.kR,t)
inherit(Y.oh,t)
inherit(V.mf,t)
inherit(Q.my,t)
inherit(Q.o4,t)
inherit(M.oI,t)
inherit(B.q5,t)
t=U.kR
inherit(U.nj,t)
inherit(U.nS,t)
inherit(U.p2,O.iu)
t=U.p2
inherit(U.p3,t)
inherit(U.p4,t)
t=T.hN
inherit(O.kT,t)
inherit(Y.ml,t)
inherit(Y.mm,t)
inherit(B.mo,t)
inherit(X.mv,t)
inherit(S.n0,t)
inherit(Z.ni,t)
inherit(S.nk,t)
inherit(U.nl,t)
inherit(E.nx,t)
inherit(V.nX,t)
inherit(N.od,t)
inherit(N.ol,t)
inherit(E.op,t)
inherit(Y.or,t)
inherit(L.os,t)
inherit(S.ou,t)
inherit(Y.oB,t)
inherit(R.pc,t)
inherit(U.ps,t)
inherit(E.pS,t)
inherit(M.pW,t)
t=O.eD
inherit(Y.pn,t)
inherit(Y.l2,t)
inherit(Y.nN,t)
inherit(U.pX,t)
t=L.fN
inherit(T.kZ,t)
inherit(T.l0,t)
inherit(U.lu,t)
inherit(Z.lv,t)
inherit(T.mn,t)
inherit(X.mq,t)
inherit(Z.mY,t)
inherit(Q.n3,t)
inherit(K.n5,t)
inherit(G.n6,t)
inherit(V.nw,t)
inherit(E.og,t)
inherit(K.oq,t)
inherit(N.oE,t)
inherit(N.pt,t)
inherit(Q.pR,t)
t=S.bJ
inherit(S.ih,t)
inherit(S.mr,t)
inherit(E.iK,E.nR)
t=E.O
inherit(E.fO,t)
inherit(E.kM,t)
inherit(Q.o7,Q.my)
inherit(U.X,U.c)
t=R.of
inherit(R.Z,t)
inherit(R.R,t)
inherit(R.a5,t)
inherit(R.bC,R.a5)
t=Y.dP
inherit(Y.ad,t)
inherit(Y.c3,t)
inherit(Y.U,t)
inherit(Y.ij,t)
inherit(Y.bE,t)
inherit(Y.cY,t)
inherit(Y.l6,t)
inherit(Y.jO,t)
inherit(Y.iI,t)
inherit(Y.jQ,t)
t=Y.c3
inherit(Y.d3,t)
inherit(Y.bz,t)
inherit(U.ah,A.a2)
t=G.a1
inherit(G.aI,t)
inherit(G.bK,t)
inherit(G.d,t)
inherit(G.ag,G.bK)
t=D.cK
inherit(D.k9,t)
inherit(D.oj,t)
t=Q.cC
inherit(Q.hZ,t)
inherit(Q.hY,t)
inherit(Q.dT,Q.hZ)
inherit(B.eI,Q.dT)
t=S.fm
inherit(S.v2,t)
inherit(S.l3,t)
inherit(S.n7,t)
inherit(S.uD,t)
inherit(S.tV,t)
t=S.l3
inherit(S.uT,t)
inherit(S.uN,t)
t=S.n7
inherit(S.tz,t)
inherit(S.tp,t)
t=S.lm
inherit(S.uy,t)
inherit(S.ln,t)
inherit(S.o_,S.ln)
inherit(S.v6,S.o_)
t=S.l1
inherit(S.uU,t)
inherit(S.v7,t)
t=S.mk
inherit(S.vb,t)
inherit(S.uV,t)
inherit(S.tG,t)
inherit(S.v8,t)
t=S.pr
inherit(S.vf,t)
inherit(S.tw,t)
inherit(S.vn,t)
t=S.hB
inherit(S.uE,t)
inherit(S.uG,t)
inherit(S.v3,t)
inherit(Q.eL,Q.hY)
inherit(Q.k6,Q.eL)
mixin(H.hW,H.pD)
mixin(H.hG,P.aN)
mixin(H.hI,H.iG)
mixin(H.hH,P.aN)
mixin(H.hJ,H.iG)
mixin(P.fn,P.aN)
mixin(P.hX,P.ro)
mixin(W.h3,P.aN)
mixin(W.h6,W.bu)
mixin(W.iN,W.ik)
mixin(W.jL,W.ik)
mixin(W.iO,P.aN)
mixin(W.j7,W.bu)
mixin(W.iP,P.aN)
mixin(W.j8,W.bu)
mixin(W.iQ,P.aN)
mixin(W.j9,W.bu)
mixin(W.j_,P.aN)
mixin(W.jj,W.bu)
mixin(W.j0,P.aN)
mixin(W.jk,W.bu)
mixin(W.j1,P.aN)
mixin(W.jl,W.bu)
mixin(W.h4,P.aN)
mixin(W.h7,W.bu)
mixin(W.j2,P.aN)
mixin(W.jm,W.bu)
mixin(W.j3,P.aN)
mixin(W.jn,W.bu)
mixin(W.h5,P.aN)
mixin(W.h8,W.bu)
mixin(W.j4,P.aN)
mixin(W.jo,W.bu)
mixin(W.j5,P.aN)
mixin(W.jp,W.bu)
mixin(W.j6,P.aN)
mixin(W.jq,W.bu)
mixin(W.iR,P.aN)
mixin(W.ja,W.bu)
mixin(W.iS,P.aN)
mixin(W.jb,W.bu)
mixin(W.iT,P.aN)
mixin(W.jc,W.bu)
mixin(W.iU,P.aN)
mixin(W.jd,W.bu)
mixin(P.iV,P.aN)
mixin(P.je,W.bu)
mixin(P.iW,P.aN)
mixin(P.jf,W.bu)
mixin(P.iX,P.aN)
mixin(P.jg,W.bu)
mixin(P.iY,P.aN)
mixin(P.jh,W.bu)
mixin(P.iZ,P.aN)
mixin(P.ji,W.bu)
mixin(A.jM,P.fh)
mixin(Q.hZ,P.aN)
mixin(Q.hY,P.fh)})();(function constants(){C.v=W.eX.prototype
C.x=W.iF.prototype
C.R=W.e2.prototype
C.S=J.f.prototype
C.b=J.en.prototype
C.f=J.jx.prototype
C.a=J.jy.prototype
C.d=J.fi.prototype
C.c=J.eo.prototype
C.Z=J.ep.prototype
C.r=H.fk.prototype
C.K=J.o6.prototype
C.L=W.k1.prototype
C.u=J.eG.prototype
C.N=new P.kV(!1)
C.M=new P.kU(C.N)
C.j=new W.ii()
C.O=new P.nU()
C.P=new P.qm()
C.Q=new P.qR()
C.e=new P.r1()
C.w=new W.rn()
C.o=new P.dI(0)
C.T=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.y=function(hooks) { return hooks; }
C.U=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.V=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.W=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.z=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.X=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.Y=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.A=H.a(makeConstList([127,2047,65535,1114111]),[P.C])
C.B=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.k=makeConstList([0,0,32776,33792,1,10240,0,0])
C.a_=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.y])
C.l=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.m=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.a0=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.C=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.a1=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.a2=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.D=makeConstList([])
C.a4=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.E=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.F=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.G=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.H=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.I=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.J=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.p=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.y])
C.q=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.y])
C.i=new F.hz(0,"LogLevel.ERROR")
C.h=new F.hz(1,"LogLevel.WARN")
C.a5=new F.hz(3,"LogLevel.VERBOSE")
C.a3=H.a(makeConstList([]),[P.y])
C.a6=new H.lb(0,{},C.a3,[P.y,P.y])
C.a7=H.c_("bi")
C.a8=H.c_("IJ")
C.t=H.c_("IK")
C.a9=H.c_("IL")
C.aa=H.c_("IM")
C.ab=H.c_("IO")
C.ac=H.c_("IP")
C.ad=H.c_("IQ")
C.ae=H.c_("mU")
C.af=H.c_("cB")
C.ag=H.c_("y")
C.ah=H.c_("IS")
C.ai=H.c_("IT")
C.aj=H.c_("IU")
C.ak=H.c_("df")
C.al=H.c_("cS")
C.am=H.c_("V")
C.an=H.c_("C")
C.ao=H.c_("ds")
C.n=new P.pM(!1)})();(function staticFields(){$.xp="$cachedFunction"
$.xq="$cachedInvocation"
$.dG=0
$.fS=null
$.w0=null
$.vB=null
$.ys=null
$.yH=null
$.rS=null
$.rZ=null
$.vC=null
$.fD=null
$.i9=null
$.ia=null
$.vx=!1
$.ap=C.e
$.wi=0
$.e_=null
$.tA=null
$.wg=null
$.wf=null
$.wc=null
$.wb=null
$.wa=null
$.wd=null
$.w9=null
$.zG=null
$.zH=null
$.zt=null
$.zu=null
$.zs=null
$.zw=null
$.zC=null
$.zB=null
$.zI=null
$.zE=null
$.zx=null
$.zA=null
$.zv=null
$.zz=null
$.zF=null
$.zy=null
$.zD=null
$.b0="accent"
$.b2="aspect1"
$.b1="aspect2"
$.bb="shoe1"
$.ba="shoe2"
$.b4="cloak1"
$.b5="cloak2"
$.b3="cloak3"
$.b9="shirt1"
$.b8="shirt2"
$.b7="pants1"
$.b6="pants2"
$.ai=1300
$.k=3
$.m=2
$.L=1
$.B=0.1
$.Am=1
$.Al=-1
$.tP=null
$.e0=null
$.wk=null
$.ei=null
$.f7=null
$.iy=null
$.tJ=null
$.m_=null
$.tR=null
$.iz=null
$.ix=null
$.wm=null
$.iE=null
$.hb=null
$.dM=null
$.wl=null
$.lZ=null
$.m5=null
$.f5=null
$.Aj=null
$.Ag=null
$.Ai=null
$.Ak=null
$.hg=null
$.f2=null
$.cz=null
$.d4=null
$.f4=null
$.m4=null
$.ca=null
$.c9=null
$.tL=null
$.he=null
$.eh=null
$.Ah=null
$.hd=null
$.cH=null
$.e1=null
$.iD=null
$.dk=null
$.f6=null
$.c1=null
$.m2=null
$.wj=null
$.aO=null
$.cG=null
$.cx=null
$.cf=null
$.m1=null
$.ce=null
$.dx=null
$.dw=null
$.dv=null
$.dJ=null
$.dK=null
$.eg=null
$.d5=null
$.hf=null
$.m0=null
$.lY=null
$.cV=null
$.cy=null
$.bj=null
$.f3=null
$.ej=null
$.m3=null
$.iA=null
$.hc=null
$.tN=null
$.cF=null
$.tQ=null
$.tK=null
$.wo=null
$.ef=null
$.cE=null
$.dL=null
$.dl=null
$.f8=null
$.tM=null
$.tO=null
$.wn=null
$.iB=null
$.iC=null
$.ek=null
$.wp=!1
$.tT=null
$.Ao=null
$.wr=null
$.wu=null
$.wt=null
$.ws=null
$.Aw=null
$.Ax=null
$.tS=null
$.At=null
$.Ar=null
$.As=null
$.Au=null
$.Av=null
$.AI=null
$.AB=null
$.AC=null
$.AD=null
$.AE=null
$.AF=null
$.AG=null
$.AH=null
$.AK=null
$.AL=null
$.AM=null
$.AN=null
$.AO=null
$.AP=null
$.AJ=null
$.G5="JACK"
$.G9="PM"
$.G6="JS"
$.G4="HP"
$.Ge="YD"
$.Gb="SI"
$.Gc="SU"
$.G7="ME"
$.Ga="RB"
$.G2="GN"
$.xj="MP"
$.G0="AR"
$.G8="PE"
$.G1="DP"
$.Gd="WV"
$.G3="HB"
$.o="PLAYER1TAG"
$.ex="PLAYER2TAG"
$.A="DENIZENTAG"
$.t="CONSORTTAG"
$.J="CONSORTSOUNDTAG"
$.aH="MCGUFFINTAG"
$.ac="TAGPHYSICALMCGUFFIN"
$.cj="TAGWEAPON"
$.GL=null
$.GX=null
$.GG=null
$.GJ=null
$.GO=null
$.GT=null
$.GR=null
$.H_=null
$.GZ=null
$.GS=null
$.H1=null
$.GN=null
$.H0=null
$.GV=null
$.GU=null
$.GW=null
$.GI=null
$.GH=null
$.GQ=null
$.GP=null
$.GM=null
$.GY=null
$.GK=null
$.yz=!1
$.H2=!1
$.xy=null
$.H9=13
$.au=3
$.bO=2
$.aC=1
$.mP=0
$.H=1
$.a4=3
$.G=4
$.ul=6
$.um=7
$.aa=8
$.v=9
$.q=10
$.wM=null
$.fg=null
$.u7=null
$.uh=null
$.ue=null
$.wC=null
$.u2=null
$.ud=null
$.hp=null
$.wK=null
$.x4=null
$.wF=null
$.wL=null
$.u3=null
$.uc=null
$.x6=null
$.x8=null
$.u_=null
$.jt=null
$.jr=null
$.ax=null
$.wZ=null
$.tZ=null
$.wU=null
$.ff=null
$.wE=null
$.x9=null
$.x5=null
$.x3=null
$.ua=null
$.mI=null
$.el=null
$.x7=null
$.mG=null
$.u4=null
$.em=null
$.x1=null
$.dy=null
$.ho=null
$.uk=null
$.x2=null
$.uj=null
$.uf=null
$.ug=null
$.mK=null
$.js=null
$.Bf=null
$.wO=null
$.wT=null
$.x0=null
$.x_=null
$.D=null
$.wI=null
$.mH=null
$.bR=null
$.aZ=null
$.bS=null
$.W=null
$.aA=null
$.cc=null
$.K=null
$.Q=null
$.aw=null
$.aU=null
$.bX=null
$.bo=null
$.bs=null
$.ch=null
$.aR=null
$.bB=null
$.bT=null
$.a_=null
$.FE=null
$.av=null
$.aX=null
$.aM=null
$.ae=null
$.cb=null
$.aK=null
$.as=null
$.bY=null
$.aQ=null
$.ak=null
$.bq=null
$.c5=null
$.aD=null
$.bt=null
$.br=null
$.a7=null
$.bN=null
$.a9=null
$.bm=null
$.bv=null
$.aJ=null
$.bl=null
$.ay=null
$.aW=null
$.aG=null
$.Y=null
$.at=null
$.aB=null
$.aT=null
$.ar=null
$.ao=null
$.a3=null
$.T=null
$.P=null
$.aj=null
$.aP=null
$.bk=null
$.aV=null
$.Cz=null
$.Fg=null
$.FP=null
$.C4=null
$.Fd=null
$.CA=null
$.wA=null
$.Fs=null
$.DA=null
$.Cv=null
$.B9=null
$.Ea=null
$.mM=null
$.wG=null
$.EA=null
$.C1=null
$.Dj=null
$.C_=null
$.u0=null
$.BL=null
$.CM=null
$.C9=null
$.Dt=null
$.FA=null
$.CB=null
$.u1=null
$.Du=null
$.C7=null
$.BR=null
$.wY=null
$.B2=null
$.wB=null
$.Dc=null
$.u8=null
$.DP=null
$.DJ=null
$.B6=null
$.BU=null
$.EK=null
$.B8=null
$.Fc=null
$.Di=null
$.Cg=null
$.Eu=null
$.F6=null
$.u6=null
$.DE=null
$.Er=null
$.C8=null
$.AW=null
$.FD=null
$.Dm=null
$.BQ=null
$.Fr=null
$.DS=null
$.BX=null
$.Fb=null
$.Cq=null
$.ES=null
$.ET=null
$.B4=null
$.DL=null
$.Ca=null
$.Ck=null
$.FT=null
$.ju=null
$.EI=null
$.F9=null
$.mJ=null
$.BF=null
$.E1=null
$.E5=null
$.B1=null
$.Cp=null
$.Fa=null
$.DR=null
$.Fu=null
$.Ew=null
$.E6=null
$.wS=null
$.EW=null
$.FJ=null
$.Ff=null
$.D_=null
$.Ei=null
$.D0=null
$.EL=null
$.FH=null
$.Ds=null
$.Cm=null
$.CJ=null
$.Bv=null
$.Es=null
$.CH=null
$.CO=null
$.Cc=null
$.EV=null
$.fe=null
$.DW=null
$.wR=null
$.D1=null
$.CZ=null
$.FM=null
$.BB=null
$.EG=null
$.EH=null
$.EF=null
$.EE=null
$.F2=null
$.CP=null
$.DM=null
$.F5=null
$.DD=null
$.DX=null
$.C5=null
$.FG=null
$.DK=null
$.Cs=null
$.Ct=null
$.E4=null
$.FS=null
$.Dg=null
$.FF=null
$.wW=null
$.ER=null
$.Dq=null
$.mN=null
$.Da=null
$.Ek=null
$.BA=null
$.Cw=null
$.EN=null
$.DN=null
$.Fz=null
$.wV=null
$.DV=null
$.BH=null
$.C2=null
$.Eg=null
$.Fm=null
$.EM=null
$.mF=null
$.ui=null
$.EY=null
$.FI=null
$.CY=null
$.Bj=null
$.Bs=null
$.Fk=null
$.DZ=null
$.DB=null
$.E_=null
$.Fh=null
$.Db=null
$.B5=null
$.CN=null
$.Dz=null
$.F_=null
$.CG=null
$.Bz=null
$.EC=null
$.ED=null
$.Fx=null
$.EP=null
$.ub=null
$.wH=null
$.BY=null
$.wJ=null
$.D5=null
$.u9=null
$.Em=null
$.DI=null
$.Ey=null
$.u5=null
$.mL=null
$.wQ=null
$.Ci=null
$.CL=null
$.wX=null
$.wN=null
$.BT=null
$.Fo=null
$.BM=null
$.E8=null
$.D2=null
$.F4=null
$.DC=null
$.Bg=null
$.D3=null
$.Cf=null
$.Ec=null
$.Dl=null
$.DH=null
$.Dr=null
$.Dv=null
$.EB=null
$.Ex=null
$.AZ=null
$.Fl=null
$.Ep=null
$.C6=null
$.Cb=null
$.CK=null
$.Fi=null
$.CD=null
$.Dn=null
$.Bn=null
$.Cx=null
$.Ce=null
$.E0=null
$.Cn=null
$.EJ=null
$.Dp=null
$.wD=null
$.El=null
$.D4=null
$.CE=null
$.AX=null
$.B3=null
$.DY=null
$.E7=null
$.Dk=null
$.CW=null
$.FC=null
$.Bq=null
$.CF=null
$.Do=null
$.C3=null
$.F1=null
$.BS=null
$.EO=null
$.Bo=null
$.Fn=null
$.Dx=null
$.Bi=null
$.Ev=null
$.Eh=null
$.BZ=null
$.CQ=null
$.BG=null
$.Fj=null
$.D8=null
$.Fy=null
$.BI=null
$.CR=null
$.BJ=null
$.C0=null
$.Eo=null
$.BV=null
$.D9=null
$.DO=null
$.BC=null
$.F3=null
$.FO=null
$.EU=null
$.DF=null
$.F0=null
$.DG=null
$.Bb=null
$.AY=null
$.Dy=null
$.Bl=null
$.BK=null
$.Bc=null
$.Bh=null
$.DU=null
$.Ed=null
$.Fq=null
$.D6=null
$.FN=null
$.Et=null
$.Eq=null
$.Dd=null
$.D7=null
$.BO=null
$.CU=null
$.Dw=null
$.E2=null
$.EX=null
$.B0=null
$.FK=null
$.Cl=null
$.F7=null
$.Cd=null
$.Ba=null
$.BD=null
$.Bu=null
$.FR=null
$.BE=null
$.Co=null
$.BN=null
$.Fw=null
$.EZ=null
$.Fp=null
$.B_=null
$.Ez=null
$.De=null
$.Dh=null
$.FB=null
$.F8=null
$.wP=null
$.Cu=null
$.Ef=null
$.FL=null
$.Cy=null
$.Df=null
$.By=null
$.CX=null
$.CV=null
$.EQ=null
$.Ee=null
$.CS=null
$.Bt=null
$.Fe=null
$.E3=null
$.Ft=null
$.FQ=null
$.Be=null
$.Bd=null
$.Bp=null
$.Cr=null
$.En=null
$.BW=null
$.Ej=null
$.Ch=null
$.B7=null
$.Br=null
$.DT=null
$.Cj=null
$.Eb=null
$.Bx=null
$.CC=null
$.Fv=null
$.Bk=null
$.CI=null
$.E9=null
$.Bw=null
$.CT=null
$.DQ=null
$.Bm=null
$.BP=null
$.y_=4
$.fa="OWNER"
$.xg=!1
$.uC=null
$.yK=""
$.vc=null
$.H6=null
$.hT=null
$.eB=null
$.H5=null
$.hS=null
$.eC=null
$.dd=null
$.ft=null
$.hQ=null
$.hR=null
$.dz=null
$.cl=null
$.xA=!1
$.rR=!0
$.kB=null
$.tb=null
$.tg=null
$.yy=null
$.yF=null
$.vE=null
$.vH=null})();(function lazyInitializers(){lazy($,"w7","$get$w7",function(){return H.yC("_$dart_dartClosure")})
lazy($,"uv","$get$uv",function(){return H.yC("_$dart_js")})
lazy($,"wy","$get$wy",function(){return H.AU()})
lazy($,"wz","$get$wz",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.wi
$.wi=t+1
t="expando$key$"+t}return new P.lG(null,t,[P.C])})
lazy($,"xG","$get$xG",function(){return H.dR(H.pB({
toString:function(){return"$receiver$"}}))})
lazy($,"xH","$get$xH",function(){return H.dR(H.pB({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"xI","$get$xI",function(){return H.dR(H.pB(null))})
lazy($,"xJ","$get$xJ",function(){return H.dR(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xN","$get$xN",function(){return H.dR(H.pB(void 0))})
lazy($,"xO","$get$xO",function(){return H.dR(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xL","$get$xL",function(){return H.dR(H.xM(null))})
lazy($,"xK","$get$xK",function(){return H.dR(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"xQ","$get$xQ",function(){return H.dR(H.xM(void 0))})
lazy($,"xP","$get$xP",function(){return H.dR(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"vs","$get$vs",function(){return P.Hg()})
lazy($,"hj","$get$hj",function(){return P.Hm(null,P.cB)})
lazy($,"ib","$get$ib",function(){return[]})
lazy($,"y1","$get$y1",function(){return H.Gf([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"yq","$get$yq",function(){return P.HM()})
lazy($,"y4","$get$y4",function(){return P.jA(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"vv","$get$vv",function(){return P.jz()})
lazy($,"w6","$get$w6",function(){return P.db("^\\S+$",!0,!1)})
lazy($,"kL","$get$kL",function(){return P.bZ(P.C,L.fN)})
lazy($,"w2","$get$w2",function(){return P.db("[\\/]",!0,!1)})
lazy($,"bQ","$get$bQ",function(){return H.a([],[S.bJ])})
lazy($,"hi","$get$hi",function(){return P.bZ(P.y,Z.iv)})
lazy($,"mC","$get$mC",function(){return P.bZ(P.C,B.hn)})
lazy($,"xa","$get$xa",function(){return H.a([],[A.a2])})
lazy($,"xk","$get$xk",function(){return H.a([],[P.y])})
lazy($,"oo","$get$oo",function(){return P.bZ(P.C,T.hN)})
lazy($,"al","$get$al",function(){return H.a([],[U.ah])})
lazy($,"xz","$get$xz",function(){return P.xd([0,new K.cJ("Pixels -> Bytes",T.I1(),T.I0()),1,new K.cJ("Pixels -> Packed bits",T.I_(),T.HZ()),2,new K.cJ("RLE 1 byte",V.tE(1),V.tD(1)),3,new K.cJ("RLE 2 bytes",V.tE(2),V.tD(2)),4,new K.cJ("RLE 3 bytes",V.tE(3),V.tD(3)),5,new K.cJ("RLE packed 1 byte",V.tC(1),V.tB(1)),6,new K.cJ("RLE packed 2 bytes",V.tC(2),V.tB(2)),7,new K.cJ("RLE packed 3 bytes",V.tC(3),V.tB(3)),8,new K.cJ("RLE dynamic",V.Iy(),V.Ix()),9,new K.cJ("Exponential-Golomb pixels",F.Ie(),F.Id()),10,new K.cJ("Exponential-Golomb run RLE",F.Ic(),F.Ib()),11,new K.cJ("Exponential-Golomb run/data RLE",F.Ia(),F.I9())],P.C,K.cJ)})
lazy($,"b","$get$b",function(){return P.a0(null,null,null,G.a1)})
lazy($,"xY","$get$xY",function(){return P.db("[\n\r]+",!0,!1)})
lazy($,"xZ","$get$xZ",function(){return P.db("( *)(.*)",!0,!1)})
lazy($,"xX","$get$xX",function(){return P.db("^s*//",!0,!1)})
lazy($,"xW","$get$xW",function(){return P.db("//",!0,!1)})
lazy($,"cM","$get$cM",function(){return new F.er(!1,!1,"WordListFileFormat")})
lazy($,"y0","$get$y0",function(){return new T.q1(null)})
lazy($,"vZ","$get$vZ",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cA","$get$cA",function(){return P.bZ(P.y,Y.dO)})
lazy($,"xh","$get$xh",function(){return P.db("[\\/]",!0,!1)})
lazy($,"uA","$get$uA",function(){return P.bZ(P.y,W.fr)})
lazy($,"uO","$get$uO",function(){return A.fX(255,0,255,255)})
lazy($,"o2","$get$o2",function(){return new F.er(!1,!1,"Path Utils")})
lazy($,"o1","$get$o1",function(){return P.bZ(P.eH,P.C)})
lazy($,"cQ","$get$cQ",function(){return H.a([],[D.cK])})
lazy($,"xE","$get$xE",function(){return P.db("([^\\\\|]|\\\\|)+",!0,!1)})
lazy($,"hV","$get$hV",function(){return P.db("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fv","$get$fv",function(){return new F.er(!1,!1,"TextEngine")})
lazy($,"xC","$get$xC",function(){return P.db("#(.*?)#",!0,!1)})
lazy($,"xD","$get$xD",function(){return P.db("\\?(.*?)\\?",!0,!1)})
lazy($,"fu","$get$fu",function(){return P.db("\\\\(?!\\\\)",!0,!1)})
lazy($,"ic","$get$ic",function(){return P.a0(null,null,null,P.y)})
lazy($,"n2","$get$n2",function(){return new F.er(!1,!1,"TextPlayground")})
lazy($,"w8","$get$w8",function(){var t={color:16711935}
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
mangledGlobalNames:{C:"int",V:"double",ds:"num",y:"String",cS:"bool",cB:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cS,args:[[P.p,E.iK]]},{func:1,v:true},{func:1,ret:P.df,args:[P.bi,P.C,P.C,O.cW]},{func:1,ret:P.bi,args:[P.C,P.bi,P.bi,O.cW]},{func:1,v:true,args:[P.ab]},{func:1,ret:P.y,args:[P.C]},{func:1,ret:W.af},{func:1,v:true,args:[{func:1,v:true}]},{func:1,v:true,args:[P.ab],opt:[P.dQ]},{func:1,ret:P.y,args:[P.y]},{func:1,ret:W.cw,args:[P.C]},{func:1,ret:W.af,args:[P.C]},{func:1,ret:W.cq,args:[P.C]},{func:1,ret:P.cS,args:[W.cw,P.y,P.y,W.i3]},{func:1,args:[,]},{func:1,v:true,opt:[W.N]},{func:1,ret:W.f0,args:[P.C]},{func:1,ret:W.cg,args:[P.C]},{func:1,v:true,args:[,P.dQ]},{func:1,ret:W.ci,args:[P.C]},{func:1,ret:W.cr,args:[P.C]},{func:1,ret:W.cs,args:[P.C]},{func:1,ret:W.fs,args:[P.C]},{func:1,ret:W.ct,args:[P.C]},{func:1,ret:W.fx,args:[P.C]},{func:1,ret:P.bV,args:[P.C]},{func:1,ret:W.bL,args:[P.C]},{func:1,ret:W.co,args:[P.C]},{func:1,ret:W.fy,args:[P.C]},{func:1,ret:[P.c4,P.cB],opt:[W.N]},{func:1,ret:W.cm,args:[P.C]},{func:1,ret:P.bn,args:[P.C]},{func:1,ret:P.C,args:[P.bI,P.bI]},{func:1,ret:P.cS,args:[P.ab]},{func:1,v:true,args:[P.y]},{func:1,ret:W.ck,args:[P.C]},{func:1,ret:P.y,args:[P.d8]},{func:1,ret:[P.c4,P.cB]},{func:1,v:true,args:[B.eJ,P.y]},{func:1,ret:W.fw,args:[P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CacheStorage:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CanvasRenderingContext2D:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceAcceleration:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,DOMPoint:J.f,DOMPointReadOnly:J.f,EffectModel:J.f,Stream:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,Range:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,SyncManager:J.f,TextMetrics:J.f,UnderlyingSourceBase:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPoint:J.f,SVGPreserveAspectRatio:J.f,SVGRect:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLRenderingContext:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fj,ArrayBufferView:H.et,DataView:H.nA,Float32Array:H.nB,Float64Array:H.nC,Int16Array:H.nD,Int32Array:H.nE,Int8Array:H.nF,Uint16Array:H.nG,Uint32Array:H.nH,Uint8ClampedArray:H.jG,CanvasPixelArray:H.jG,Uint8Array:H.fk,HTMLBRElement:W.aL,HTMLCanvasElement:W.aL,HTMLContentElement:W.aL,HTMLDListElement:W.aL,HTMLDataListElement:W.aL,HTMLDetailsElement:W.aL,HTMLDialogElement:W.aL,HTMLDivElement:W.aL,HTMLHRElement:W.aL,HTMLHeadElement:W.aL,HTMLHeadingElement:W.aL,HTMLHtmlElement:W.aL,HTMLLabelElement:W.aL,HTMLLegendElement:W.aL,HTMLModElement:W.aL,HTMLOptGroupElement:W.aL,HTMLParagraphElement:W.aL,HTMLPictureElement:W.aL,HTMLPreElement:W.aL,HTMLQuoteElement:W.aL,HTMLShadowElement:W.aL,HTMLTableCaptionElement:W.aL,HTMLTableCellElement:W.aL,HTMLTableDataCellElement:W.aL,HTMLTableHeaderCellElement:W.aL,HTMLTableColElement:W.aL,HTMLTitleElement:W.aL,HTMLTrackElement:W.aL,HTMLUListElement:W.aL,HTMLUnknownElement:W.aL,HTMLDirectoryElement:W.aL,HTMLFontElement:W.aL,HTMLFrameElement:W.aL,HTMLMarqueeElement:W.aL,HTMLElement:W.aL,HTMLAnchorElement:W.eR,HTMLAreaElement:W.kK,HTMLAudioElement:W.eU,AudioTrack:W.cN,AudioTrackList:W.kS,HTMLBaseElement:W.kW,Blob:W.eW,HTMLBodyElement:W.eX,HTMLButtonElement:W.fV,CDATASection:W.ec,CharacterData:W.ec,Comment:W.ec,ProcessingInstruction:W.ec,Text:W.ec,Clients:W.l5,CompositorWorker:W.l9,Credential:W.fZ,FederatedCredential:W.fZ,PasswordCredential:W.fZ,CredentialsContainer:W.ld,CSSFontFaceRule:W.lg,CSSImportRule:W.lh,CSSKeyframeRule:W.h_,MozCSSKeyframeRule:W.h_,WebKitCSSKeyframeRule:W.h_,CSSKeyframesRule:W.h0,MozCSSKeyframesRule:W.h0,WebKitCSSKeyframesRule:W.h0,CSSPageRule:W.li,CSSCharsetRule:W.bL,CSSGroupingRule:W.bL,CSSMediaRule:W.bL,CSSNamespaceRule:W.bL,CSSSupportsRule:W.bL,CSSRule:W.bL,CSSStyleDeclaration:W.f_,MSStyleCSSProperties:W.f_,CSS2Properties:W.f_,CSSStyleRule:W.lj,CSSViewportRule:W.lk,DataTransfer:W.lp,DataTransferItem:W.f0,DataTransferItemList:W.il,Document:W.ed,HTMLDocument:W.ed,XMLDocument:W.ed,DocumentFragment:W.io,ShadowRoot:W.io,DOMError:W.ip,FileError:W.ip,DOMException:W.ls,DOMRectReadOnly:W.iq,DOMStringList:W.ir,DOMStringMap:W.is,DOMTokenList:W.it,Element:W.cw,HTMLEmbedElement:W.ly,DirectoryEntry:W.h2,Entry:W.h2,FileEntry:W.h2,ErrorEvent:W.lE,AnimationEvent:W.N,AnimationPlayerEvent:W.N,ApplicationCacheErrorEvent:W.N,AutocompleteErrorEvent:W.N,BeforeInstallPromptEvent:W.N,BeforeUnloadEvent:W.N,BlobEvent:W.N,ClipboardEvent:W.N,CloseEvent:W.N,CompositionEvent:W.N,CustomEvent:W.N,DeviceLightEvent:W.N,DeviceMotionEvent:W.N,DeviceOrientationEvent:W.N,ExtendableEvent:W.N,ExtendableMessageEvent:W.N,FetchEvent:W.N,FocusEvent:W.N,FontFaceSetLoadEvent:W.N,GamepadEvent:W.N,GeofencingEvent:W.N,HashChangeEvent:W.N,InstallEvent:W.N,KeyboardEvent:W.N,MediaEncryptedEvent:W.N,MediaKeyMessageEvent:W.N,MediaQueryListEvent:W.N,MediaStreamEvent:W.N,MediaStreamTrackEvent:W.N,MessageEvent:W.N,MIDIConnectionEvent:W.N,MIDIMessageEvent:W.N,MouseEvent:W.N,DragEvent:W.N,NotificationEvent:W.N,PageTransitionEvent:W.N,PointerEvent:W.N,PopStateEvent:W.N,PresentationConnectionAvailableEvent:W.N,PresentationConnectionCloseEvent:W.N,ProgressEvent:W.N,PromiseRejectionEvent:W.N,PushEvent:W.N,RelatedEvent:W.N,RTCDataChannelEvent:W.N,RTCDTMFToneChangeEvent:W.N,RTCIceCandidateEvent:W.N,RTCPeerConnectionIceEvent:W.N,SecurityPolicyViolationEvent:W.N,ServicePortConnectEvent:W.N,ServiceWorkerMessageEvent:W.N,SpeechRecognitionEvent:W.N,StorageEvent:W.N,SyncEvent:W.N,TextEvent:W.N,TouchEvent:W.N,TrackEvent:W.N,TransitionEvent:W.N,WebKitTransitionEvent:W.N,UIEvent:W.N,WheelEvent:W.N,ResourceProgressEvent:W.N,USBConnectionEvent:W.N,IDBVersionChangeEvent:W.N,SVGZoomEvent:W.N,AudioProcessingEvent:W.N,OfflineAudioCompletionEvent:W.N,WebGLContextEvent:W.N,Event:W.N,InputEvent:W.N,Animation:W.aF,ApplicationCache:W.aF,DOMApplicationCache:W.aF,OfflineResourceList:W.aF,BatteryManager:W.aF,CanvasCaptureMediaStreamTrack:W.aF,CrossOriginServiceWorkerClient:W.aF,EventSource:W.aF,MediaKeySession:W.aF,MediaQueryList:W.aF,MediaRecorder:W.aF,MediaSource:W.aF,MediaStream:W.aF,MediaStreamTrack:W.aF,MessagePort:W.aF,MIDIAccess:W.aF,NetworkInformation:W.aF,Notification:W.aF,Performance:W.aF,PermissionStatus:W.aF,PresentationAvailability:W.aF,PresentationReceiver:W.aF,PresentationRequest:W.aF,RTCDTMFSender:W.aF,RTCPeerConnection:W.aF,webkitRTCPeerConnection:W.aF,mozRTCPeerConnection:W.aF,ScreenOrientation:W.aF,ServicePortCollection:W.aF,ServiceWorkerContainer:W.aF,ServiceWorkerRegistration:W.aF,SpeechRecognition:W.aF,SpeechSynthesis:W.aF,SpeechSynthesisUtterance:W.aF,WorkerPerformance:W.aF,BluetoothDevice:W.aF,BluetoothRemoteGATTCharacteristic:W.aF,USB:W.aF,EventTarget:W.aF,HTMLFieldSetElement:W.m6,File:W.cg,FileList:W.f9,FileReader:W.iF,DOMFileSystem:W.ma,FileWriter:W.mb,FontFace:W.md,FontFaceSet:W.me,FormData:W.mg,HTMLFormElement:W.iJ,Gamepad:W.co,History:W.mp,HTMLOptionsCollection:W.fb,HTMLCollection:W.fb,HTMLFormControlsCollection:W.iL,XMLHttpRequest:W.e2,XMLHttpRequestUpload:W.hk,XMLHttpRequestEventTarget:W.hk,HTMLIFrameElement:W.mw,ImageData:W.hl,HTMLImageElement:W.fd,HTMLInputElement:W.mB,HTMLKeygenElement:W.n_,HTMLLIElement:W.n1,CalcLength:W.hu,LengthValue:W.hu,SimpleLength:W.hu,HTMLLinkElement:W.hv,Location:W.nh,HTMLMapElement:W.nm,HTMLVideoElement:W.hC,HTMLMediaElement:W.hC,MediaList:W.jD,HTMLMenuElement:W.nr,HTMLMenuItemElement:W.ns,HTMLMetaElement:W.nt,HTMLMeterElement:W.nu,MIDIOutput:W.nv,MIDIInput:W.hD,MIDIPort:W.hD,MimeType:W.cq,MimeTypeArray:W.jE,Navigator:W.nI,NavigatorUserMediaError:W.nJ,Node:W.af,NodeIterator:W.jH,NodeList:W.jI,RadioNodeList:W.jI,HTMLOListElement:W.nO,HTMLObjectElement:W.nP,HTMLOptionElement:W.nT,HTMLOutputElement:W.nV,HTMLParamElement:W.nZ,Path2D:W.o0,PerformanceCompositeTiming:W.e5,PerformanceEntry:W.e5,PerformanceMark:W.e5,PerformanceMeasure:W.e5,PerformanceRenderTiming:W.e5,PerformanceResourceTiming:W.e5,Perspective:W.o5,Plugin:W.ci,PluginArray:W.jR,PresentationConnection:W.oa,HTMLProgressElement:W.oe,RTCDataChannel:W.jT,DataChannel:W.jT,RTCSessionDescription:W.jU,mozRTCSessionDescription:W.jU,HTMLScriptElement:W.fr,HTMLSelectElement:W.jV,ServicePort:W.ov,SharedWorker:W.oy,SharedWorkerGlobalScope:W.oz,HTMLSlotElement:W.oA,SourceBuffer:W.cr,SourceBufferList:W.jX,HTMLSourceElement:W.oD,HTMLSpanElement:W.hP,SpeechGrammar:W.cs,SpeechGrammarList:W.jY,SpeechRecognitionAlternative:W.fs,SpeechRecognitionError:W.oF,SpeechRecognitionResult:W.ck,SpeechSynthesisEvent:W.oG,SpeechSynthesisVoice:W.oH,Storage:W.oL,HTMLStyleElement:W.p7,StylePropertyMap:W.p9,CSSStyleSheet:W.cm,StyleSheet:W.cm,KeywordValue:W.e7,NumberValue:W.e7,PositionValue:W.e7,TransformValue:W.e7,StyleValue:W.e7,HTMLTableElement:W.k1,HTMLTableRowElement:W.pe,HTMLTableSectionElement:W.pf,HTMLTemplateElement:W.hU,HTMLTextAreaElement:W.pj,TextTrack:W.cR,TextTrackCue:W.cL,VTTCue:W.cL,TextTrackCueList:W.pp,TextTrackList:W.pq,TimeRanges:W.pu,Touch:W.ct,TouchList:W.k2,TrackDefault:W.fw,TrackDefaultList:W.k3,Matrix:W.e8,Rotation:W.e8,Skew:W.e8,Translation:W.e8,TransformComponent:W.e8,TreeWalker:W.k4,URL:W.pJ,URLSearchParams:W.pK,VideoTrackList:W.pO,VTTRegion:W.fx,VTTRegionList:W.k5,WebSocket:W.pT,Window:W.k8,DOMWindow:W.k8,Worker:W.q_,CompositorWorkerGlobalScope:W.eK,DedicatedWorkerGlobalScope:W.eK,ServiceWorkerGlobalScope:W.eK,WorkerGlobalScope:W.eK,Attr:W.fy,ClientRect:W.qh,ClientRectList:W.i_,DOMRectList:W.i_,CSSRuleList:W.ke,DocumentType:W.qo,DOMRect:W.qp,GamepadList:W.kj,HTMLFrameSetElement:W.qK,NamedNodeMap:W.i5,MozNamedAttrMap:W.i5,ServiceWorker:W.r9,SpeechRecognitionResultList:W.kn,StyleSheetList:W.kp,WorkerLocation:W.rv,WorkerNavigator:W.rw,IDBDatabase:P.lq,IDBIndex:P.mz,IDBObjectStore:P.nQ,IDBOpenDBRequest:P.hM,IDBVersionChangeRequest:P.hM,IDBRequest:P.hM,IDBTransaction:P.py,SVGAElement:P.kH,SVGAnimateElement:P.eb,SVGAnimateMotionElement:P.eb,SVGAnimateTransformElement:P.eb,SVGAnimationElement:P.eb,SVGSetElement:P.eb,SVGFEBlendElement:P.lH,SVGFEColorMatrixElement:P.lI,SVGFEComponentTransferElement:P.lJ,SVGFECompositeElement:P.lK,SVGFEConvolveMatrixElement:P.lL,SVGFEDiffuseLightingElement:P.lM,SVGFEDisplacementMapElement:P.lN,SVGFEFloodElement:P.lO,SVGFEGaussianBlurElement:P.lP,SVGFEImageElement:P.lQ,SVGFEMergeElement:P.lR,SVGFEMorphologyElement:P.lS,SVGFEOffsetElement:P.lT,SVGFESpecularLightingElement:P.lU,SVGFETileElement:P.lV,SVGFETurbulenceElement:P.lW,SVGFilterElement:P.mc,SVGCircleElement:P.cp,SVGClipPathElement:P.cp,SVGDefsElement:P.cp,SVGEllipseElement:P.cp,SVGForeignObjectElement:P.cp,SVGGElement:P.cp,SVGGeometryElement:P.cp,SVGLineElement:P.cp,SVGPathElement:P.cp,SVGPolygonElement:P.cp,SVGPolylineElement:P.cp,SVGRectElement:P.cp,SVGSwitchElement:P.cp,SVGGraphicsElement:P.cp,SVGImageElement:P.mx,SVGLength:P.d6,SVGLengthList:P.n4,SVGMarkerElement:P.np,SVGMaskElement:P.nq,SVGNumber:P.d9,SVGNumberList:P.nM,SVGPatternElement:P.o3,SVGPointList:P.o8,SVGScriptElement:P.hO,SVGStringList:P.p5,SVGStyleElement:P.p8,SVGDescElement:P.c7,SVGDiscardElement:P.c7,SVGFEDistantLightElement:P.c7,SVGFEFuncAElement:P.c7,SVGFEFuncBElement:P.c7,SVGFEFuncGElement:P.c7,SVGFEFuncRElement:P.c7,SVGFEMergeNodeElement:P.c7,SVGFEPointLightElement:P.c7,SVGFESpotLightElement:P.c7,SVGMetadataElement:P.c7,SVGStopElement:P.c7,SVGTitleElement:P.c7,SVGComponentTransferFunctionElement:P.c7,SVGElement:P.c7,SVGSVGElement:P.pb,SVGSymbolElement:P.pd,SVGTSpanElement:P.eE,SVGTextElement:P.eE,SVGTextPositioningElement:P.eE,SVGTextContentElement:P.eE,SVGTextPathElement:P.po,SVGTransform:P.de,SVGTransformList:P.pz,SVGUseElement:P.pL,SVGViewElement:P.pP,SVGViewSpec:P.pQ,SVGLinearGradientElement:P.i2,SVGRadialGradientElement:P.i2,SVGGradientElement:P.i2,SVGCursorElement:P.r5,SVGFEDropShadowElement:P.r6,SVGMPathElement:P.r7,AudioBuffer:P.fP,AudioBufferSourceNode:P.eT,AudioContext:P.fQ,webkitAudioContext:P.fQ,OfflineAudioContext:P.fQ,AnalyserNode:P.bH,RealtimeAnalyserNode:P.bH,AudioDestinationNode:P.bH,ChannelMergerNode:P.bH,AudioChannelMerger:P.bH,ChannelSplitterNode:P.bH,AudioChannelSplitter:P.bH,DelayNode:P.bH,DynamicsCompressorNode:P.bH,GainNode:P.bH,AudioGainNode:P.bH,IIRFilterNode:P.bH,MediaStreamAudioDestinationNode:P.bH,PannerNode:P.bH,AudioPannerNode:P.bH,webkitAudioPannerNode:P.bH,ScriptProcessorNode:P.bH,JavaScriptAudioNode:P.bH,StereoPannerNode:P.bH,WaveShaperNode:P.bH,AudioNode:P.bH,MediaElementAudioSourceNode:P.eV,MediaStreamAudioSourceNode:P.eV,AudioSourceNode:P.eV,BiquadFilterNode:P.kY,ConvolverNode:P.lc,OscillatorNode:P.jN,Oscillator:P.jN,WebGLActiveInfo:P.kJ,WebGL2RenderingContext:P.ok,WebGL2RenderingContextBase:P.ru,SQLResultSetRowList:P.jZ})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,SyncManager:true,TextMetrics:true,UnderlyingSourceBase:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Clients:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CredentialsContainer:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,FormData:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,HTMLProgressElement:true,RTCDataChannel:true,DataChannel:true,RTCSessionDescription:true,mozRTCSessionDescription:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,HTMLStyleElement:true,StylePropertyMap:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,TreeWalker:true,URL:true,URLSearchParams:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,AudioSourceNode:false,BiquadFilterNode:true,ConvolverNode:true,OscillatorNode:true,Oscillator:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jF.$nativeSuperclassTag="ArrayBufferView"
H.hG.$nativeSuperclassTag="ArrayBufferView"
H.hI.$nativeSuperclassTag="ArrayBufferView"
H.hE.$nativeSuperclassTag="ArrayBufferView"
H.hH.$nativeSuperclassTag="ArrayBufferView"
H.hJ.$nativeSuperclassTag="ArrayBufferView"
H.hF.$nativeSuperclassTag="ArrayBufferView"
W.h3.$nativeSuperclassTag="EventTarget"
W.h6.$nativeSuperclassTag="EventTarget"
W.h4.$nativeSuperclassTag="EventTarget"
W.h7.$nativeSuperclassTag="EventTarget"
W.h5.$nativeSuperclassTag="EventTarget"
W.h8.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.yL(S.yN(),b)},[])
else (function(b){H.yL(S.yN(),b)})([])})})()
//# sourceMappingURL=text_engine_playground.dart.js.map
