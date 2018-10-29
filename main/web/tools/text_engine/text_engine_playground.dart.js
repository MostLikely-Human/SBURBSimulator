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
a[c]=function(){a[c]=function(){H.Ja(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.vY"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.vY"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.vY(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={uT:function uT(a){this.a=a},
th:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
vC:function(a,b,c,d){var t=new H.pv(a,b,c,[d])
t.fk(a,b,c,d)
return t},
dr:function(a,b,c,d){if(!!J.aD(a).$isv)return new H.f7(a,b,[c,d])
return new H.hI(a,b,[c,d])},
hz:function(){return new P.dg("No element")},
Gm:function(){return new P.dg("Too many elements")},
xw:function(){return new P.dg("Too few elements")},
k1:function(a,b,c,d){if(c-b<=32)H.Hy(a,b,c,d)
else H.Hx(a,b,c,d)},
Hy:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bj(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cw(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
Hx:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.aq(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.aq(a3+a4,2)
p=q-t
o=q+t
n=J.bj(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cw(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cw(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cw(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cw(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cw(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cw(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cw(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cw(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cw(a5.$2(j,i),0)){h=i
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
b=J.aD(c)
if(b.U(c,0))continue
if(b.a2(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dv(c)
if(b.aC(c,0)){--f
continue}else{a=f-1
if(b.a2(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.eW(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cw(a5.$2(d,j),0))for(;!0;)if(J.cw(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eW(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.k1(a2,a3,g-2,a5)
H.k1(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.bc(a5.$2(n.n(a2,g),l),0);)++g
for(;J.bc(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.bc(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.bc(a5.$2(d,j),0))for(;!0;)if(J.bc(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eW(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.k1(a2,g,f,a5)}else H.k1(a2,g,f,a5)},
le:function le(a){this.a=a},
v:function v(){},
ew:function ew(){},
pv:function pv(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dQ:function dQ(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hI:function hI(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
f7:function f7(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jI:function jI(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ey:function ey(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ef:function ef(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
kd:function kd(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iM:function iM(){},
q_:function q_(){},
i_:function i_(){},
kz:function(a,b){var t=a.bB(b)
if(!u.globalState.d.cy)u.globalState.f.bK()
return t},
z5:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aD(s).$isq)throw H.l(P.dG("Arguments to main must be a List: "+H.y(s)))
u.globalState=new H.rh(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$wV()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qP(P.uY(null,H.eT),0)
r=P.F
s.z=new H.r(0,null,null,null,null,null,0,[r,H.fF])
s.ch=new H.r(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.rg()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.Bp,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.HV)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a2(null,null,null,r)
p=new H.fv(0,null,!1)
o=new H.fF(s,new H.r(0,null,null,null,null,null,0,[r,H.fv]),q,u.createNewIsolate(),p,new H.dI(H.tx()),new H.dI(H.tx()),!1,!1,[],P.a2(null,null,null,null),null,null,!1,!0,P.a2(null,null,null,null))
q.h(0,0)
o.ds(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fL(a,{func:1,args:[,]}))o.bB(new H.tA(t,a))
else if(H.fL(a,{func:1,args:[,,]}))o.bB(new H.tB(t,a))
else o.bB(a)
u.globalState.f.bK()},
HV:function(a){var t=P.hE(["command","print","msg",a])
return new H.dD(!0,P.i8(null,P.F)).aD(t)},
Br:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.Bs()
return},
Bs:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.l(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.l(new P.V('Cannot extract URI from "'+t+'"'))},
Bp:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eS(!0,[]).b5(b.data)
s=J.bj(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eS(!0,[]).b5(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eS(!0,[]).b5(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.F
j=P.a2(null,null,null,k)
i=new H.fv(0,null,!1)
h=new H.fF(s,new H.r(0,null,null,null,null,null,0,[k,H.fv]),j,u.createNewIsolate(),i,new H.dI(H.tx()),new H.dI(H.tx()),!1,!1,[],P.a2(null,null,null,null),null,null,!1,!0,P.a2(null,null,null,null))
j.h(0,0)
h.ds(0,i)
u.globalState.f.a.aS(0,new H.eT(h,new H.mM(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bK()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fP(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bK()
break
case"close":u.globalState.ch.an(0,$.$get$wW().n(0,a))
a.terminate()
u.globalState.f.bK()
break
case"log":H.Bo(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hE(["command","print","msg",t])
k=new H.dD(!0,P.i8(null,P.F)).aD(k)
s.toString
self.postMessage(k)}else P.fM(s.n(t,"msg"))
break
case"error":throw H.l(s.n(t,"msg"))}},
Bo:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hE(["command","log","msg",a])
r=new H.dD(!0,P.i8(null,P.F)).aD(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.bH(q)
t=H.cp(q)
s=P.lM(t)
throw H.l(s)}},
Bq:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.xK=$.xK+("_"+s)
$.xL=$.xL+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fP(f,["spawned",new H.fG(s,r),q,t.r])
r=new H.mN(a,b,c,d,t)
if(e===!0){t.e9(q,q)
u.globalState.f.a.aS(0,new H.eT(t,r,"start isolate"))}else r.$0()},
HE:function(a,b){var t=new H.pR(!0,!1,null)
t.fl(a,b)
return t},
Id:function(a){return new H.eS(!0,[]).b5(new H.dD(!1,P.i8(null,P.F)).aD(a))},
tA:function tA(a,b){this.a=a
this.b=b},
tB:function tB(a,b){this.a=a
this.b=b},
rh:function rh(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
fF:function fF(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
rc:function rc(a,b){this.a=a
this.b=b},
qP:function qP(a,b){this.a=a
this.b=b},
qQ:function qQ(a){this.a=a},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
rg:function rg(){},
mM:function mM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mN:function mN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qB:function qB(){},
fG:function fG(b,a){this.b=b
this.a=a},
rj:function rj(a,b){this.a=a
this.b=b},
ic:function ic(b,c,a){this.b=b
this.c=c
this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
pR:function pR(a,b,c){this.a=a
this.b=b
this.c=c},
pS:function pS(a,b){this.a=a
this.b=b},
pT:function pT(a,b){this.a=a
this.b=b},
dI:function dI(a){this.a=a},
dD:function dD(a,b){this.a=a
this.b=b},
eS:function eS(a,b){this.a=a
this.b=b},
Aq:function(){throw H.l(new P.V("Cannot modify unmodifiable Map"))},
IL:function(a){return u.types[a]},
yZ:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aD(a).$isaU},
y:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cx(a)
if(typeof t!=="string")throw H.l(H.bx(a))
return t},
H4:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.oy(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eA:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
vk:function(a,b){if(b==null)throw H.l(new P.bN(a,null,null))
return b.$1(a)},
ft:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.vk(a,c)
if(3>=t.length)return H.w(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.vk(a,c)}if(b<2||b>36)throw H.l(P.bw(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a7(q,o)|32)>r)return H.vk(a,c)}return parseInt(a,b)},
xI:function(a,b){return b.$1(a)},
xM:function(a,b){var t,s
H.yR(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.xI(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.tK(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.xI(a,b)}return t},
or:function(a){var t,s,r,q,p,o,n,m
t=J.aD(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.S||!!J.aD(a).$iseM){p=C.z(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a7(q,0)===36)q=C.c.ah(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.tr(H.kE(a),0,null),u.mangledGlobalNames)},
oq:function(a){return"Instance of '"+H.or(a)+"'"},
GJ:function(){if(!!self.location)return self.location.href
return},
xH:function(a){var t,s,r,q,p
t=J.c4(a)
if(typeof t!=="number")return t.eW()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
GO:function(a){var t,s,r,q
t=H.a([],[P.F])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bG)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bx(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.b2(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.l(H.bx(q))}return H.xH(t)},
xO:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bG)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bx(q))
if(q<0)throw H.l(H.bx(q))
if(q>65535)return H.GO(a)}return H.xH(a)},
GP:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eW()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hS:function(a){var t
if(typeof a!=="number")return H.a9(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.b2(t,10))>>>0,56320|t&1023)}}throw H.l(P.bw(a,0,1114111,null,null))},
cZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
xJ:function(a){return a.b?H.cZ(a).getUTCFullYear()+0:H.cZ(a).getFullYear()+0},
vm:function(a){return a.b?H.cZ(a).getUTCMonth()+1:H.cZ(a).getMonth()+1},
vl:function(a){return a.b?H.cZ(a).getUTCDate()+0:H.cZ(a).getDate()+0},
GK:function(a){return a.b?H.cZ(a).getUTCHours()+0:H.cZ(a).getHours()+0},
GM:function(a){return a.b?H.cZ(a).getUTCMinutes()+0:H.cZ(a).getMinutes()+0},
GN:function(a){return a.b?H.cZ(a).getUTCSeconds()+0:H.cZ(a).getSeconds()+0},
GL:function(a){return a.b?H.cZ(a).getUTCMilliseconds()+0:H.cZ(a).getMilliseconds()+0},
vn:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bx(a))
return a[b]},
xN:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bx(a))
a[b]=c},
a9:function(a){throw H.l(H.bx(a))},
w:function(a,b){if(a==null)J.c4(a)
throw H.l(H.cc(a,b))},
cc:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cW(!0,b,"index",null)
t=J.c4(a)
if(!(b<0)){if(typeof t!=="number")return H.a9(t)
s=b>=t}else s=!0
if(s)return P.bA(b,a,"index",null,t)
return P.jY(b,"index",null)},
IC:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cW(!0,a,"start",null)
if(a<0||a>c)return new P.eF(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cW(!0,b,"end",null)
if(b<a||b>c)return new P.eF(a,c,!0,b,"end","Invalid value")}return new P.cW(!0,b,"end",null)},
bx:function(a){return new P.cW(!0,a,null,null)},
kB:function(a){if(typeof a!=="number")throw H.l(H.bx(a))
return a},
vX:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(H.bx(a))
return a},
yR:function(a){if(typeof a!=="string")throw H.l(H.bx(a))
return a},
l:function(a){var t
if(a==null)a=new P.fq()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.z9})
t.name=""}else t.toString=H.z9
return t},
z9:function(){return J.cx(this.dartException)},
bb:function(a){throw H.l(a)},
bG:function(a){throw H.l(new P.by(a))},
dW:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
y6:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
uV:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.n8(a,s,t?null:b.receiver)},
bH:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.tC(a)
if(a==null)return
if(a instanceof H.he)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.b2(r,16)&8191)===10)switch(q){case 438:return t.$1(H.uV(H.y(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.y(s)+" (Error "+q+")"
return t.$1(new H.jQ(p,null))}}if(a instanceof TypeError){o=$.$get$y0()
n=$.$get$y1()
m=$.$get$y2()
l=$.$get$y3()
k=$.$get$y7()
j=$.$get$y8()
i=$.$get$y5()
$.$get$y4()
h=$.$get$ya()
g=$.$get$y9()
f=o.aN(s)
if(f!=null)return t.$1(H.uV(s,f))
else{f=n.aN(s)
if(f!=null){f.method="call"
return t.$1(H.uV(s,f))}else{f=m.aN(s)
if(f==null){f=l.aN(s)
if(f==null){f=k.aN(s)
if(f==null){f=j.aN(s)
if(f==null){f=i.aN(s)
if(f==null){f=l.aN(s)
if(f==null){f=h.aN(s)
if(f==null){f=g.aN(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jQ(s,f==null?null:f.method))}}return t.$1(new H.pZ(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.k5()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cW(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.k5()
return a},
cp:function(a){var t
if(a instanceof H.he)return a.b
if(a==null)return new H.ku(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.ku(a,null)},
IX:function(a){if(a==null||typeof a!='object')return J.dF(a)
else return H.eA(a)},
yW:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
IS:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kz(b,new H.tm(a))
case 1:return H.kz(b,new H.tn(a,d))
case 2:return H.kz(b,new H.to(a,d,e))
case 3:return H.kz(b,new H.tp(a,d,e,f))
case 4:return H.kz(b,new H.tq(a,d,e,f,g))}throw H.l(P.lM("Unsupported number of arguments for wrapped closure"))},
du:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.IS)
a.$identity=t
return t},
Am:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aD(c).$isq){t.$reflectionInfo=c
r=H.H4(t).r}else r=c
q=d?Object.create(new H.p2().constructor.prototype):Object.create(new H.fW(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dJ
$.dJ=J.eg(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.ws(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.IL,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.wp:H.tO
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.l("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.ws(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
Aj:function(a,b,c,d){var t=H.tO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ws:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.Al(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.Aj(s,!q,t,b)
if(s===0){q=$.dJ
$.dJ=J.eg(q,1)
o="self"+H.y(q)
q="return function(){var "+o+" = this."
p=$.fX
if(p==null){p=H.l5("self")
$.fX=p}return new Function(q+H.y(p)+";return "+o+"."+H.y(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dJ
$.dJ=J.eg(q,1)
n+=H.y(q)
q="return function("+n+"){return this."
p=$.fX
if(p==null){p=H.l5("self")
$.fX=p}return new Function(q+H.y(p)+"."+H.y(t)+"("+n+");}")()},
Ak:function(a,b,c,d){var t,s
t=H.tO
s=H.wp
switch(b?-1:a){case 0:throw H.l(new H.oE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
Al:function(a,b){var t,s,r,q,p,o,n,m
t=H.Ai()
s=$.wo
if(s==null){s=H.l5("receiver")
$.wo=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.Ak(q,!o,r,b)
if(q===1){s="return function(){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+");"
o=$.dJ
$.dJ=J.eg(o,1)
return new Function(s+H.y(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+", "+m+");"
o=$.dJ
$.dJ=J.eg(o,1)
return new Function(s+H.y(o)+"}")()},
vY:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aD(c).$isq){c.fixed$length=Array
t=c}else t=c
return H.Am(a,b,t,!!d,e,f)},
tO:function(a){return a.a},
wp:function(a){return a.c},
Ai:function(){var t=$.fX
if(t==null){t=H.l5("self")
$.fX=t}return t},
l5:function(a){var t,s,r,q,p
t=new H.fW("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
J_:function(a,b){var t=J.bj(b)
throw H.l(H.wr(H.or(a),t.N(b,3,t.gm(b))))},
kG:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aD(a)[b]
else t=!0
if(t)return a
H.J_(a,b)},
yV:function(a){var t=J.aD(a)
return"$S" in t?t.$S():null},
fL:function(a,b){var t
if(a==null)return!1
t=H.yV(a)
return t==null?!1:H.w0(t,b)},
wr:function(a,b){return new H.la("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Ja:function(a){throw H.l(new P.lv(a))},
tx:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
yX:function(a){return u.getIsolateTag(a)},
c3:function(a){return new H.dX(a,null)},
a:function(a,b){a.$ti=b
return a},
kE:function(a){if(a==null)return
return a.$ti},
yY:function(a,b){return H.w3(a["$as"+H.y(b)],H.kE(a))},
aE:function(a,b,c){var t=H.yY(a,b)
return t==null?null:t[c]},
N:function(a,b){var t=H.kE(a)
return t==null?null:t[b]},
dE:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.tr(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.y(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dE(t,b)
return H.Ih(a,b)}return"unknown-reified-type"},
Ih:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dE(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dE(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dE(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.IJ(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dE(l[j],b)+(" "+H.y(j))}q+="}"}return"("+q+") => "+t},
tr:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.ch("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.P=p+", "
o=a[s]
if(o!=null)q=!1
p=t.P+=H.dE(o,c)}return q?"":"<"+t.D(0)+">"},
kF:function(a){var t,s
if(a instanceof H.f3){t=H.yV(a)
if(t!=null)return H.dE(t,null)}s=J.aD(a).constructor.builtin$cls
if(a==null)return s
return s+H.tr(a.$ti,0,null)},
w3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
e0:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kE(a)
s=J.aD(a)
if(s[b]==null)return!1
return H.yP(H.w3(s[d],t),c)},
J6:function(a,b,c,d){if(a==null)return a
if(H.e0(a,b,c,d))return a
throw H.l(H.wr(H.or(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.tr(c,0,null),u.mangledGlobalNames)))},
yP:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d5(a[s],b[s]))return!1
return!0},
eV:function(a,b,c){return a.apply(b,H.yY(b,c))},
Ix:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ap"||b.builtin$cls==="cC"
if(b==null)return!0
t=H.kE(a)
a=J.aD(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.w0(r.apply(a,null),b)}return H.d5(s,b)},
d5:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="cC")return!0
if('func' in b)return H.w0(a,b)
if('func' in a)return b.builtin$cls==="Jg"||b.builtin$cls==="ap"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dE(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.yP(H.w3(o,t),r)},
yO:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.d5(t,p)||H.d5(p,t)))return!1}return!0},
Io:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d5(p,o)||H.d5(o,p)))return!1}return!0},
w0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d5(t,s)||H.d5(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.yO(r,q,!1))return!1
if(!H.yO(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d5(i,h)||H.d5(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d5(i,h)||H.d5(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d5(i,h)||H.d5(h,i)))return!1}}return H.Io(a.named,b.named)},
Jq:function(a){var t=$.vZ
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Jp:function(a){return H.eA(a)},
Jo:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
IU:function(a){var t,s,r,q,p,o
t=$.vZ.$1(a)
s=$.te[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.tl[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.yN.$2(a,t)
if(t!=null){s=$.te[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.tl[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.w2(r)
$.te[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.tl[t]=r
return r}if(p==="-"){o=H.w2(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.z0(a,r)
if(p==="*")throw H.l(new P.eL(t))
if(u.leafTags[t]===true){o=H.w2(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.z0(a,r)},
z0:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.tt(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
w2:function(a){return J.tt(a,!1,null,!!a.$isaU)},
IV:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.tt(t,!1,null,!!t.$isaU)
else return J.tt(t,c,null,null)},
IQ:function(){if(!0===$.w_)return
$.w_=!0
H.IR()},
IR:function(){var t,s,r,q,p,o,n,m
$.te=Object.create(null)
$.tl=Object.create(null)
H.IP()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.z1.$1(p)
if(o!=null){n=H.IV(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
IP:function(){var t,s,r,q,p,o,n
t=C.T()
t=H.fK(C.U,H.fK(C.V,H.fK(C.y,H.fK(C.y,H.fK(C.X,H.fK(C.W,H.fK(C.Y(C.z),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.vZ=new H.ti(p)
$.yN=new H.tj(o)
$.z1=new H.tk(n)},
fK:function(a,b){return a(b)||b},
uQ:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.l(new P.bN("Illegal RegExp pattern ("+String(q)+")",a,null))},
J4:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
z6:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hA){q=b.gdS()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.bb(H.bx(b))
throw H.l("String.replaceAll(Pattern) UNIMPLEMENTED")}},
Im:function(a){return a},
J5:function(a,b,c,d){var t,s,r,q,p,o
t=J.aD(b)
if(!t.$isvg)throw H.l(P.dH(b,"pattern","is not a Pattern"))
for(t=t.aV(b,a),t=new H.kh(t.a,t.b,t.c,null),s=0,r="";t.I();){q=t.d
p=q.b
o=p.index
r=r+H.y(H.yE().$1(C.c.N(a,s,o)))+H.y(c.$1(q))
s=o+p[0].length}t=r+H.y(H.yE().$1(C.c.ah(a,s)))
return t.charCodeAt(0)==0?t:t},
lh:function lh(){},
li:function li(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
oy:function oy(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pX:function pX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jQ:function jQ(a,b){this.a=a
this.b=b},
n8:function n8(a,b,c){this.a=a
this.b=b
this.c=c},
pZ:function pZ(a){this.a=a},
he:function he(a,b){this.a=a
this.b=b},
tC:function tC(a){this.a=a},
ku:function ku(a,b){this.a=a
this.b=b},
tm:function tm(a){this.a=a},
tn:function tn(a,b){this.a=a
this.b=b},
to:function to(a,b,c){this.a=a
this.b=b
this.c=c},
tp:function tp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tq:function tq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f3:function f3(){},
pC:function pC(){},
p2:function p2(){},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
la:function la(a){this.a=a},
oE:function oE(a){this.a=a},
dX:function dX(a,b){this.a=a
this.b=b},
r:function r(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
n7:function n7(a){this.a=a},
n6:function n6(a){this.a=a},
nk:function nk(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
nl:function nl(a,$ti){this.a=a
this.$ti=$ti},
nm:function nm(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ti:function ti(a){this.a=a},
tj:function tj(a){this.a=a},
tk:function tk(a){this.a=a},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ks:function ks(a,b){this.a=a
this.b=b},
qv:function qv(a,b,c){this.a=a
this.b=b
this.c=c},
kh:function kh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
rC:function rC(a,b,c){this.a=a
this.b=b
this.c=c},
rD:function rD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cE:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(P.dG("Invalid length "+H.y(a)))
return a},
yA:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dG("Invalid view offsetInBytes "+H.y(b)))},
yD:function(a){return a},
GH:function(a){return new Int8Array(H.yD(a))},
cJ:function(a,b,c){H.yA(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
Ic:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aC()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.l(H.IC(a,b,c))
return b},
fo:function fo(){},
ez:function ez(){},
nO:function nO(){},
jL:function jL(){},
hM:function hM(){},
hO:function hO(){},
hQ:function hQ(){},
hN:function hN(){},
hP:function hP(){},
hR:function hR(){},
nP:function nP(){},
nQ:function nQ(){},
nR:function nR(){},
nS:function nS(){},
nT:function nT(){},
nU:function nU(){},
nV:function nV(){},
jM:function jM(){},
fp:function fp(){},
IJ:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
IZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aD:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jE.prototype
return J.jD.prototype}if(typeof a=="string")return J.eu.prototype
if(a==null)return J.n4.prototype
if(typeof a=="boolean")return J.n3.prototype
if(a.constructor==Array)return J.et.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ev.prototype
return a}if(a instanceof P.ap)return a
return J.tf(a)},
tt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
tf:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.w_==null){H.IQ()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.l(new P.eL("Return interceptor for "+H.y(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$uU()]
if(p!=null)return p
p=H.IU(a)
if(p!=null)return p
if(typeof a=="function")return C.Z
s=Object.getPrototypeOf(a)
if(s==null)return C.K
if(s===Object.prototype)return C.K
if(typeof q=="function"){Object.defineProperty(q,$.$get$uU(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
xx:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Gn:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a7(a,b)
if(s!==32&&s!==13&&!J.xx(s))break;++b}return b},
uP:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.a0(a,t)
if(s!==32&&s!==13&&!J.xx(s))break}return b},
bj:function(a){if(typeof a=="string")return J.eu.prototype
if(a==null)return a
if(a.constructor==Array)return J.et.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ev.prototype
return a}if(a instanceof P.ap)return a
return J.tf(a)},
dl:function(a){if(a==null)return a
if(a.constructor==Array)return J.et.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ev.prototype
return a}if(a instanceof P.ap)return a
return J.tf(a)},
dv:function(a){if(typeof a=="number")return J.fn.prototype
if(a==null)return a
if(!(a instanceof P.ap))return J.eM.prototype
return a},
kD:function(a){if(typeof a=="number")return J.fn.prototype
if(typeof a=="string")return J.eu.prototype
if(a==null)return a
if(!(a instanceof P.ap))return J.eM.prototype
return a},
d4:function(a){if(typeof a=="string")return J.eu.prototype
if(a==null)return a
if(!(a instanceof P.ap))return J.eM.prototype
return a},
aG:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ev.prototype
return a}if(a instanceof P.ap)return a
return J.tf(a)},
eg:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kD(a).W(a,b)},
bc:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aD(a).U(a,b)},
w5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dv(a).ax(a,b)},
cw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dv(a).aC(a,b)},
eW:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dv(a).a2(a,b)},
tE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kD(a).aw(a,b)},
fN:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.yZ(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bj(a).n(a,b)},
kI:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.yZ(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dl(a).i(a,b,c)},
zc:function(a,b){return J.dl(a).h(a,b)},
zd:function(a,b,c,d){return J.aG(a).hk(a,b,c,d)},
ze:function(a,b){return J.d4(a).aV(a,b)},
e1:function(a,b){return J.aG(a).hn(a,b)},
w6:function(a){return J.aG(a).hp(a)},
tF:function(a,b,c){return J.dv(a).ae(a,b,c)},
zf:function(a){return J.aG(a).ef(a)},
zg:function(a,b){return J.kD(a).aE(a,b)},
zh:function(a,b){return J.aG(a).aF(a,b)},
zi:function(a,b){return J.bj(a).Z(a,b)},
kJ:function(a,b,c){return J.bj(a).eh(a,b,c)},
zj:function(a,b){return J.aG(a).hz(a,b)},
w7:function(a,b){return J.dl(a).T(a,b)},
zk:function(a,b,c,d){return J.dl(a).bC(a,b,c,d)},
kK:function(a){return J.dv(a).am(a)},
w8:function(a,b){return J.dl(a).ab(a,b)},
w9:function(a){return J.aG(a).geb(a)},
wa:function(a){return J.aG(a).ged(a)},
wb:function(a){return J.aG(a).gee(a)},
zl:function(a){return J.aG(a).gbA(a)},
fO:function(a){return J.aG(a).gau(a)},
wc:function(a){return J.aG(a).gcU(a)},
dF:function(a){return J.aD(a).ga8(a)},
kL:function(a){return J.bj(a).gX(a)},
wd:function(a){return J.aG(a).gY(a)},
cV:function(a){return J.dl(a).gS(a)},
zm:function(a){return J.aG(a).gaj(a)},
c4:function(a){return J.bj(a).gm(a)},
zn:function(a){return J.aG(a).gK(a)},
zo:function(a){return J.aG(a).gi8(a)},
we:function(a){return J.aG(a).gcZ(a)},
wf:function(a){return J.aG(a).geB(a)},
zp:function(a){return J.aG(a).gd3(a)},
zq:function(a){return J.aG(a).gix(a)},
zr:function(a){return J.aG(a).giy(a)},
wg:function(a){return J.aD(a).gad(a)},
tG:function(a){return J.aG(a).gaR(a)},
zs:function(a){return J.aG(a).giB(a)},
zt:function(a){return J.aG(a).gaI(a)},
tH:function(a){return J.aG(a).giF(a)},
zu:function(a){return J.aG(a).gbd(a)},
zv:function(a){return J.aG(a).br(a)},
zw:function(a,b){return J.aG(a).av(a,b)},
zx:function(a,b){return J.aG(a).bO(a,b)},
zy:function(a,b){return J.bj(a).bn(a,b)},
wh:function(a,b,c,d,e){return J.aG(a).ev(a,b,c,d,e)},
wi:function(a,b){return J.dl(a).aB(a,b)},
zz:function(a,b,c){return J.d4(a).ez(a,b,c)},
wj:function(a,b){return J.aG(a).ie(a,b)},
zA:function(a){return J.dl(a).is(a)},
zB:function(a,b,c,d){return J.aG(a).iu(a,b,c,d)},
kM:function(a,b,c){return J.d4(a).d8(a,b,c)},
tI:function(a,b,c){return J.d4(a).iw(a,b,c)},
fP:function(a,b){return J.aG(a).bf(a,b)},
wk:function(a,b){return J.aG(a).sbA(a,b)},
zC:function(a,b){return J.aG(a).sa9(a,b)},
zD:function(a,b){return J.aG(a).sak(a,b)},
wl:function(a,b){return J.aG(a).dg(a,b)},
zE:function(a,b){return J.dl(a).di(a,b)},
e2:function(a,b){return J.d4(a).f7(a,b)},
zF:function(a,b){return J.d4(a).ah(a,b)},
tJ:function(a){return J.dv(a).l(a)},
zG:function(a){return J.dl(a).ar(a)},
zH:function(a){return J.d4(a).iD(a)},
zI:function(a,b){return J.dv(a).bL(a,b)},
cx:function(a){return J.aD(a).D(a)},
zJ:function(a){return J.d4(a).iE(a)},
tK:function(a){return J.d4(a).bq(a)},
zK:function(a){return J.d4(a).eP(a)},
j:function j(){},
n3:function n3(){},
n4:function n4(){},
hB:function hB(){},
ok:function ok(){},
eM:function eM(){},
ev:function ev(){},
et:function et($ti){this.$ti=$ti},
uS:function uS($ti){this.$ti=$ti},
ij:function ij(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fn:function fn(){},
jE:function jE(){},
jD:function jD(){},
eu:function eu(){}},P={
HK:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.Ip()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.du(new P.qx(t),1)).observe(s,{childList:true})
return new P.qw(t,s,r)}else if(self.setImmediate!=null)return P.Iq()
return P.Ir()},
HL:function(a){++u.globalState.f.b
self.scheduleImmediate(H.du(new P.qy(a),0))},
HM:function(a){++u.globalState.f.b
self.setImmediate(H.du(new P.qz(a),0))},
HN:function(a){P.vH(C.o,a)},
bh:function(a,b){P.yy(null,a)
return b.ghO()},
bQ:function(a,b){P.yy(a,b)},
bg:function(a,b){J.zh(b,a)},
bf:function(a,b){b.cQ(H.bH(a),H.cp(a))},
yy:function(a,b){var t,s,r,q
t=new P.rV(b)
s=new P.rW(b)
r=J.aD(a)
if(!!r.$isbq)a.cJ(t,s)
else if(!!r.$isc8)a.cc(t,s)
else{q=new P.bq(0,$.aF,null,[null])
q.a=4
q.c=a
q.cJ(t,null)}},
bi:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.aF.toString
return new P.t5(t)},
yF:function(a,b){if(H.fL(a,{func:1,args:[P.cC,P.cC]})){b.toString
return a}else{b.toString
return a}},
B5:function(a,b){var t=new P.bq(0,$.aF,null,[b])
P.y_(C.o,new P.t7(a,t))
return t},
ug:function(a,b,c){var t
if(a==null)a=new P.fq()
t=$.aF
if(t!==C.e)t.toString
t=new P.bq(0,t,null,[c])
t.du(a,b)
return t},
B6:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bq(0,$.aF,null,[P.q])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.mp(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bG)(a),++l){q=a[l]
p=t.b
q.cc(new P.mo(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bq(0,$.aF,null,[null])
m.dt(C.D)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.bH(j)
n=H.cp(j)
if(t.b===0||!1)return P.ug(o,n,null)
else{t.c=o
t.d=n}}return s},
bd:function(a){return new P.kw(new P.bq(0,$.aF,null,[a]),[a])},
yC:function(a,b,c){$.aF.toString
a.ap(b,c)},
HQ:function(a,b){var t=new P.bq(0,$.aF,null,[b])
t.a=4
t.c=a
return t},
yn:function(a,b){var t,s,r
b.a=1
try{a.cc(new P.qY(b),new P.qZ(b))}catch(r){t=H.bH(r)
s=H.cp(r)
P.z3(new P.r_(b,t,s))}},
qX:function(a,b){var t,s,r
for(;a.gfZ();)a=a.c
t=a.gcB()
s=b.c
if(t){b.c=null
r=b.bX(s)
b.a=a.a
b.c=a.c
P.fE(b,r)}else{b.a=2
b.c=a
a.dW(s)}},
fE:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fO(p)
n=p.gaQ()
s.toString
P.kA(null,null,s,o,n)}return}for(;b.gcE()!=null;b=m){m=b.a
b.a=null
P.fE(t.a,b)}l=t.a.c
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
o=J.fO(p)
n=p.gaQ()
s.toString
P.kA(null,null,s,o,n)
return}j=$.aF
if(j==null?k!=null:j!==k)$.aF=k
else j=null
if(b.gen())new P.r4(t,r,q,b).$0()
else if(s){if(b.geo())new P.r3(r,b,l).$0()}else if(b.ghV())new P.r2(t,r,b).$0()
if(j!=null)$.aF=j
s=r.b
if(!!J.aD(s).$isc8){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bX(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qX(s,i)
return}}i=b.b
b=i.bW()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
Ij:function(){var t,s
for(;t=$.fI,t!=null;){$.ie=null
s=t.b
$.fI=s
if(s==null)$.id=null
t.a.$0()}},
Il:function(){$.vV=!0
try{P.Ij()}finally{$.ie=null
$.vV=!1
if($.fI!=null)$.$get$vQ().$1(P.yQ())}},
yM:function(a){var t=new P.ki(a,null)
if($.fI==null){$.id=t
$.fI=t
if(!$.vV)$.$get$vQ().$1(P.yQ())}else{$.id.b=t
$.id=t}},
Ik:function(a){var t,s,r
t=$.fI
if(t==null){P.yM(a)
$.ie=$.id
return}s=new P.ki(a,null)
r=$.ie
if(r==null){s.b=t
$.ie=s
$.fI=s}else{s.b=r.b
r.b=s
$.ie=s
if(s.b==null)$.id=s}},
z3:function(a){var t=$.aF
if(C.e===t){P.fJ(null,null,C.e,a)
return}t.toString
P.fJ(null,null,t,t.cO(a,!0))},
Jk:function(a,b){return new P.rB(null,a,!1,[b])},
yJ:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.bH(o)
s=H.cp(o)
$.aF.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fO(r)
q=n
p=r.gaQ()
c.$2(q,p)}}},
Ib:function(a,b,c,d){var t=a.c3(0)
if(!!J.aD(t).$isc8&&t!==$.$get$hp())t.cf(new P.rY(b,c,d))
else b.ap(c,d)},
yz:function(a,b){return new P.rX(a,b)},
vU:function(a,b,c){var t=a.c3(0)
if(!!J.aD(t).$isc8&&t!==$.$get$hp())t.cf(new P.rZ(b,c))
else b.aK(c)},
HP:function(a,b,c,d,e,f,g){var t,s
t=$.aF
s=e?1:0
s=new P.i5(a,null,null,null,null,t,s,null,null,[f,g])
s.fo(b,c,d,e,g)
s.fs(a,b,c,d,e,f,g)
return s},
Ia:function(a,b,c){$.aF.toString
a.bQ(b,c)},
y_:function(a,b){var t=$.aF
if(t===C.e){t.toString
return P.vH(a,b)}return P.vH(a,t.cO(b,!0))},
vH:function(a,b){var t=C.a.aq(a.a,1000)
return H.HE(t<0?0:t,b)},
kA:function(a,b,c,d,e){var t={}
t.a=d
P.Ik(new P.t4(t,e))},
yG:function(a,b,c,d){var t,s
s=$.aF
if(s===c)return d.$0()
$.aF=c
t=s
try{s=d.$0()
return s}finally{$.aF=t}},
yI:function(a,b,c,d,e){var t,s
s=$.aF
if(s===c)return d.$1(e)
$.aF=c
t=s
try{s=d.$1(e)
return s}finally{$.aF=t}},
yH:function(a,b,c,d,e,f){var t,s
s=$.aF
if(s===c)return d.$2(e,f)
$.aF=c
t=s
try{s=d.$2(e,f)
return s}finally{$.aF=t}},
fJ:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cO(d,!(!t||!1))
P.yM(d)},
qx:function qx(a){this.a=a},
qw:function qw(a,b,c){this.a=a
this.b=b
this.c=c},
qy:function qy(a){this.a=a},
qz:function qz(a){this.a=a},
rV:function rV(a){this.a=a},
rW:function rW(a){this.a=a},
t5:function t5(a){this.a=a},
c8:function c8(){},
t7:function t7(a,b){this.a=a
this.b=b},
mp:function mp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mo:function mo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f4:function f4(){},
kj:function kj(){},
dZ:function dZ(a,$ti){this.a=a
this.$ti=$ti},
kw:function kw(a,$ti){this.a=a
this.$ti=$ti},
ko:function ko(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bq:function bq(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qU:function qU(a,b){this.a=a
this.b=b},
r1:function r1(a,b){this.a=a
this.b=b},
qY:function qY(a){this.a=a},
qZ:function qZ(a){this.a=a},
r_:function r_(a,b,c){this.a=a
this.b=b
this.c=c},
qW:function qW(a,b){this.a=a
this.b=b},
r0:function r0(a,b){this.a=a
this.b=b},
qV:function qV(a,b,c){this.a=a
this.b=b
this.c=c},
r4:function r4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r5:function r5(a){this.a=a},
r3:function r3(a,b,c){this.a=a
this.b=b
this.c=c},
r2:function r2(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(a,b){this.a=a
this.b=b},
ds:function ds(){},
p9:function p9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p7:function p7(a,b){this.a=a
this.b=b},
p8:function p8(a,b){this.a=a
this.b=b},
pa:function pa(a){this.a=a},
pf:function pf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pd:function pd(a,b){this.a=a
this.b=b},
pe:function pe(){},
pg:function pg(a){this.a=a},
pj:function pj(a){this.a=a},
pk:function pk(a,b){this.a=a
this.b=b},
ph:function ph(a,b){this.a=a
this.b=b},
pi:function pi(a){this.a=a},
pl:function pl(a,b){this.a=a
this.b=b},
pm:function pm(a,b){this.a=a
this.b=b},
pb:function pb(a,b,c){this.a=a
this.b=b
this.c=c},
pc:function pc(a){this.a=a},
p6:function p6(){},
dt:function dt(){},
qD:function qD(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a){this.a=a},
kl:function kl(){},
qI:function qI(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qK:function qK(b,c,a){this.b=b
this.c=c
this.a=a},
qJ:function qJ(){},
rk:function rk(){},
rl:function rl(a,b){this.a=a
this.b=b},
rA:function rA(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
rB:function rB(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
rY:function rY(a,b,c){this.a=a
this.b=b
this.c=c},
rX:function rX(a,b){this.a=a
this.b=b},
rZ:function rZ(a,b){this.a=a
this.b=b},
i4:function i4(){},
i5:function i5(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
ri:function ri(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eY:function eY(a,b){this.a=a
this.b=b},
rU:function rU(){},
t4:function t4(a,b){this.a=a
this.b=b},
ro:function ro(){},
rp:function rp(a,b){this.a=a
this.b=b},
rq:function rq(a,b){this.a=a
this.b=b},
rr:function rr(a,b){this.a=a
this.b=b},
HR:function(a,b){var t=a[b]
return t===a?null:t},
vS:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vR:function(){var t=Object.create(null)
P.vS(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
xy:function(a,b,c){return H.yW(a,new H.r(0,null,null,null,null,null,0,[b,c]))},
c0:function(a,b){return new H.r(0,null,null,null,null,null,0,[a,b])},
jF:function(){return new H.r(0,null,null,null,null,null,0,[null,null])},
hE:function(a){return H.yW(a,new H.r(0,null,null,null,null,null,0,[null,null]))},
i8:function(a,b){return new P.kr(0,null,null,null,null,null,0,[a,b])},
HU:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
p:function(a,b,c,d,e){return new P.r7(0,null,null,null,null,[d,e])},
uM:function(a,b,c){var t,s
if(P.vW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ig()
s.push(a)
try{P.Ii(a,t)}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=P.xW(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jB:function(a,b,c){var t,s,r
if(P.vW(a))return b+"..."+c
t=new P.ch(b)
s=$.$get$ig()
s.push(a)
try{r=t
r.P=P.xW(r.gP(),a,", ")}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=t
s.P=s.gP()+c
s=t.gP()
return s.charCodeAt(0)==0?s:s},
vW:function(a){var t,s
for(t=0;s=$.$get$ig(),t<s.length;++t)if(a===s[t])return!0
return!1},
Ii:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cV(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.I())return
q=H.y(t.gL())
b.push(q)
s+=q.length+2;++r}if(!t.I()){if(r<=5)return
if(0>=b.length)return H.w(b,-1)
p=b.pop()
if(0>=b.length)return H.w(b,-1)
o=b.pop()}else{n=t.gL();++r
if(!t.I()){if(r<=4){b.push(H.y(n))
return}p=H.y(n)
if(0>=b.length)return H.w(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gL();++r
for(;t.I();n=m,m=l){l=t.gL();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.y(n)
p=H.y(m)
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
jG:function(a,b){var t,s
t=P.a2(null,null,null,b)
for(s=J.cV(a);s.I();)t.h(0,s.gL())
return t},
xD:function(a){var t,s,r
t={}
if(P.vW(a))return"{...}"
s=new P.ch("")
try{$.$get$ig().push(a)
r=s
r.P=r.gP()+"{"
t.a=!0
a.ab(0,new P.nA(t,s))
t=s
t.P=t.gP()+"}"}finally{t=$.$get$ig()
if(0>=t.length)return H.w(t,-1)
t.pop()}t=s.gP()
return t.charCodeAt(0)==0?t:t},
uY:function(a,b){var t=new P.nn(null,0,0,0,[b])
t.fj(a,b)
return t},
r7:function r7(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
ra:function ra(a){this.a=a},
r8:function r8(a,$ti){this.a=a
this.$ti=$ti},
r9:function r9(a,b,c,d,$ti){var _=this
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
re:function re(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rb:function rb(){},
fm:function fm(){},
hy:function hy(){},
hF:function hF(){},
fs:function fs(){},
b6:function b6(){},
rL:function rL(){},
nz:function nz(){},
i0:function i0(a,$ti){this.a=a
this.$ti=$ti},
nA:function nA(a,b){this.a=a
this.b=b},
nn:function nn(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rf:function rf(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oP:function oP(){},
oO:function oO(){},
wn:function(a,b,c,d,e,f){if(C.d.bP(f,4)!==0)throw H.l(new P.bN("Invalid base64 padding, padded length must be multiple of four, is "+H.y(f),a,c))
if(d+e!==f)throw H.l(new P.bN("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.l(new P.bN("Invalid base64 padding, more than two '=' characters",a,b))},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
h0:function h0(){},
h2:function h2(){},
lG:function lG(){},
q8:function q8(a){this.a=a},
q9:function q9(a){this.a=a},
rN:function rN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rP:function rP(a){this.a=a},
rO:function rO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
HC:function(a,b,c){var t,s,r,q
if(b<0)throw H.l(P.bw(b,0,J.c4(a),null,null))
t=c==null
if(!t&&c<b)throw H.l(P.bw(c,b,J.c4(a),null,null))
s=J.cV(a)
for(r=0;r<b;++r)if(!s.I())throw H.l(P.bw(b,0,r,null,null))
q=[]
if(t)for(;s.I();)q.push(s.gL())
else for(r=b;r<c;++r){if(!s.I())throw H.l(P.bw(c,b,r,null,null))
q.push(s.gL())}return H.xO(q)},
xW:function(a,b,c){var t=J.cV(b)
if(!t.I())return a
if(c.length===0){do a+=H.y(t.gL())
while(t.I())}else{a+=H.y(t.gL())
for(;t.I();)a=a+c+H.y(t.gL())}return a},
Ap:function(a,b){return J.zg(a,b)},
As:function(a,b){var t=new P.e3(a,b)
t.dq(a,b)
return t},
At:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.y(t)
if(t>=10)return s+"00"+H.y(t)
return s+"000"+H.y(t)},
Au:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
is:function(a){if(a>=10)return""+a
return"0"+a},
wF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cx(a)
if(typeof a==="string")return JSON.stringify(a)
return P.AN(a)},
AN:function(a){var t=J.aD(a)
if(!!t.$isf3)return t.D(a)
return H.oq(a)},
dG:function(a){return new P.cW(!1,null,null,a)},
dH:function(a,b,c){return new P.cW(!0,a,b,c)},
zL:function(a){return new P.cW(!1,null,a,"Must not be null")},
xS:function(a){return new P.eF(null,null,!1,null,null,a)},
jY:function(a,b,c){return new P.eF(null,null,!0,a,b,"Value not in range")},
bw:function(a,b,c,d,e){return new P.eF(b,c,!0,a,d,"Invalid value")},
de:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a9(a)
if(!(0>a)){if(typeof c!=="number")return H.a9(c)
t=a>c}else t=!0
if(t)throw H.l(P.bw(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a9(b)
if(!(a>b)){if(typeof c!=="number")return H.a9(c)
t=b>c}else t=!0
if(t)throw H.l(P.bw(b,a,c,"end",f))
return b}return c},
bA:function(a,b,c,d,e){var t=e!=null?e:J.c4(b)
return new P.mJ(b,t,!0,a,c,"Index out of range")},
lM:function(a){return new P.qT(a)},
db:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cV(a);s.I();)t.push(s.gL())
if(b)return t
t.fixed$length=Array
return t},
Go:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
f:function(a,b){var t=P.db(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fM:function(a){H.IZ(H.y(a))},
df:function(a,b,c){return new H.hA(a,H.uQ(a,!1,!0,!1),null,null)},
pr:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.de(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a2()
s=c<t}else s=!0
return H.xO(s?C.b.cl(a,b,c):a)}if(!!J.aD(a).$isfp)return H.GP(a,b,P.de(b,c,a.length,null,null,null))
return P.HC(a,b,c)},
yc:function(){var t=H.GJ()
if(t!=null)return P.yd(t,0,null)
throw H.l(new P.V("'Uri.base' is not supported"))},
yd:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a7(a,b+4)^58)*3|C.c.a7(a,b)^100|C.c.a7(a,b+1)^97|C.c.a7(a,b+2)^116|C.c.a7(a,b+3)^97)>>>0
if(s===0)return P.yb(b>0||c<c?C.c.N(a,b,c):a,5,null).geR()
else if(s===32)return P.yb(C.c.N(a,t,c),0,null).geR()}r=H.a(new Array(8),[P.F])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.yK(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.ax()
if(p>=b)if(P.yK(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.W()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a2()
if(typeof l!=="number")return H.a9(l)
if(k<l)l=k
if(typeof m!=="number")return m.a2()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a2()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a2()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aJ(a,"..",m)))h=l>m+2&&C.c.aJ(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aJ(a,"file",b)){if(o<=b){if(!C.c.aJ(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.N(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aH(a,m,l,"/");++l;++k;++c}else{a=C.c.N(a,b,m)+"/"+C.c.N(a,l,c)
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
c-=3}else{a=C.c.N(a,b,n)+C.c.N(a,m,c)
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
c-=3}else{a=C.c.N(a,b,n)+C.c.N(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.c.N(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.rz(a,p,o,n,m,l,k,i,null)}return P.HX(a,b,c,p,o,n,m,l,k,i)},
yf:function(a,b){return C.b.hL(a.split("&"),P.jF(),new P.q4(b))},
HF:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.q1(a)
s=H.cE(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.a0(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.ft(C.c.N(a,p,q),null,null)
if(J.cw(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.w(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.ft(C.c.N(a,p,c),null,null)
if(J.cw(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.w(r,o)
r[o]=m
return r},
ye:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.q2(a)
s=new P.q3(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.a0(a,q)
if(m===58){if(q===b){++q
if(C.c.a0(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.bc(C.b.gbh(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.HF(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.az()
h=j[1]
if(typeof h!=="number")return H.a9(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.az()
i=j[3]
if(typeof i!=="number")return H.a9(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aD(e).U(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.w(g,f)
g[f]=0
i=f+1
if(i>=16)return H.w(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.dh()
i=C.d.b2(e,8)
if(f<0||f>=16)return H.w(g,f)
g[f]=i
i=f+1
if(i>=16)return H.w(g,i)
g[i]=e&255
f+=2}}return g},
HX:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.I4(a,b,d)
else{if(d===b)P.ib(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.I5(a,t,e-1):""
r=P.I0(a,e,f,!1)
if(typeof f!=="number")return f.W()
q=f+1
if(typeof g!=="number")return H.a9(g)
p=q<g?P.I2(H.ft(C.c.N(a,q,g),null,new P.t8(a,f)),j):null}else{s=""
r=null
p=null}o=P.I1(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a2()
n=h<i?P.I3(a,h+1,i,null):null
return new P.kx(j,s,r,p,o,n,i<c?P.I_(a,i+1,c):null,null,null,null,null,null)},
ys:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ib:function(a,b,c){throw H.l(new P.bN(c,a,b))},
I2:function(a,b){if(a!=null&&J.bc(a,P.ys(b)))return
return a},
I0:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.a0(a,b)===91){if(typeof c!=="number")return c.al()
t=c-1
if(C.c.a0(a,t)!==93)P.ib(a,b,"Missing end `]` to match `[` in host")
P.ye(a,b+1,t)
return C.c.N(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a9(c)
s=b
for(;s<c;++s)if(C.c.a0(a,s)===58){P.ye(a,b,c)
return"["+a+"]"}return P.I7(a,b,c)},
I7:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a9(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.a0(a,t)
if(p===37){o=P.yx(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.ch("")
m=C.c.N(a,s,t)
l=r.P+=!q?m.toLowerCase():m
if(n){o=C.c.N(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.P=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.w(C.G,n)
n=(C.G[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.ch("")
if(s<t){r.P+=C.c.N(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.w(C.k,n)
n=(C.k[n]&1<<(p&15))!==0}else n=!1
if(n)P.ib(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.a0(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.ch("")
m=C.c.N(a,s,t)
r.P+=!q?m.toLowerCase():m
r.P+=P.yt(p)
t+=k
s=t}}}}if(r==null)return C.c.N(a,b,c)
if(s<c){m=C.c.N(a,s,c)
r.P+=!q?m.toLowerCase():m}n=r.P
return n.charCodeAt(0)==0?n:n},
I4:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.yv(C.c.a7(a,b)))P.ib(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a7(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.w(C.m,q)
q=(C.m[q]&1<<(r&15))!==0}else q=!1
if(!q)P.ib(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.N(a,b,c)
return P.HY(s?a.toLowerCase():a)},
HY:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
I5:function(a,b,c){var t=P.fH(a,b,c,C.a4,!1)
return t==null?C.c.N(a,b,c):t},
I1:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fH(a,b,c,C.I,!1)
if(r==null)r=C.c.N(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ag(r,"/"))r="/"+r
return P.I6(r,e,f)},
I6:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ag(a,"/"))return P.I8(a,!t||c)
return P.I9(a)},
I3:function(a,b,c,d){var t=P.fH(a,b,c,C.l,!1)
return t==null?C.c.N(a,b,c):t},
I_:function(a,b,c){var t=P.fH(a,b,c,C.l,!1)
return t==null?C.c.N(a,b,c):t},
yx:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.a0(a,b+1)
r=C.c.a0(a,t)
q=H.th(s)
p=H.th(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.b2(o,4)
if(t>=8)return H.w(C.F,t)
t=(C.F[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hS(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.N(a,b,b+3).toUpperCase()
return},
yt:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a7("0123456789ABCDEF",a>>>4)
t[2]=C.c.a7("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.hd(a,6*r)&63|s
if(p>=q)return H.w(t,p)
t[p]=37
n=p+1
m=C.c.a7("0123456789ABCDEF",o>>>4)
if(n>=q)return H.w(t,n)
t[n]=m
m=p+2
n=C.c.a7("0123456789ABCDEF",o&15)
if(m>=q)return H.w(t,m)
t[m]=n
p+=3}}return P.pr(t,0,null)},
fH:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.d4(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a2()
if(typeof c!=="number")return H.a9(c)
if(!(r<c))break
c$0:{o=s.a0(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.w(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.yx(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.w(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ib(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.a0(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.yt(o)}}if(p==null)p=new P.ch("")
p.P+=C.c.N(a,q,r)
p.P+=H.y(m)
if(typeof l!=="number")return H.a9(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a2()
if(q<c)p.P+=s.N(a,q,c)
t=p.P
return t.charCodeAt(0)==0?t:t},
yw:function(a){if(C.c.ag(a,"."))return!0
return C.c.bn(a,"/.")!==-1},
I9:function(a){var t,s,r,q,p,o,n
if(!P.yw(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bG)(s),++p){o=s[p]
if(J.bc(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.w(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.aL(t,"/")},
I8:function(a,b){var t,s,r,q,p,o
if(!P.yw(a))return!b?P.yu(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bG)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.bc(C.b.gbh(t),"..")){if(0>=t.length)return H.w(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.w(t,0)
s=J.kL(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.bc(C.b.gbh(t),".."))t.push("")
if(!b){if(0>=t.length)return H.w(t,0)
s=P.yu(t[0])
if(0>=t.length)return H.w(t,0)
t[0]=s}return C.b.aL(t,"/")},
yu:function(a){var t,s,r,q
t=J.bj(a)
s=t.gm(a)
if(typeof s!=="number")return s.ax()
if(s>=2&&P.yv(t.a0(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a9(s)
if(!(r<s))break
q=t.a0(a,r)
if(q===58)return C.c.N(a,0,r)+"%3A"+C.c.ah(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.w(C.m,s)
s=(C.m[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
HZ:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.a0(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.l(P.dG("Invalid URL encoding"))}}return t},
rM:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a9(c)
t=J.d4(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.a0(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.N(a,b,c)
else o=new H.le(t.N(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.a0(a,s)
if(q>127)throw H.l(P.dG("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.l(P.dG("Truncated URI"))
o.push(P.HZ(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.q9(!1).hw(o)},
yv:function(a){var t=a|32
return 97<=t&&t<=122},
yb:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bj(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a9(o)
if(!(r<o))break
c$0:{p=s.a0(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.l(new P.bN("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.l(new P.bN("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a9(o)
if(!(r<o))break
p=s.a0(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbh(t)
if(p!==44||r!==m+7||!s.aJ(a,"base64",m+1))throw H.l(new P.bN("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.M.i9(0,a,o,s.gm(a))
else{l=P.fH(a,o,s.gm(a),C.l,!0)
if(l!=null)a=s.aH(a,o,s.gm(a),l)}return new P.q0(a,t,c)},
If:function(){var t,s,r,q,p
t=P.Go(22,new P.t1(),!0,P.dj)
s=new P.t0(t)
r=new P.t2()
q=new P.t3()
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
yK:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$yL()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.w(t,d)
r=t[d]
q=C.c.a7(a,s)^96
p=J.fN(r,q>95?31:q)
if(typeof p!=="number")return p.aP()
d=p&31
o=C.d.b2(p,5)
if(o>=8)return H.w(e,o)
e[o]=s}return d},
cU:function cU(){},
bJ:function bJ(){},
e3:function e3(a,b){this.a=a
this.b=b},
U:function U(){},
dL:function dL(a){this.a=a},
lD:function lD(){},
lE:function lE(){},
ek:function ek(){},
fq:function fq(){},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mJ:function mJ(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a){this.a=a},
eL:function eL(a){this.a=a},
dg:function dg(a){this.a=a},
by:function by(a){this.a=a},
o7:function o7(){},
k5:function k5(){},
lv:function lv(a){this.a=a},
qT:function qT(a){this.a=a},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
lN:function lN(a,bT,$ti){this.a=a
this.bT=bT
this.$ti=$ti},
F:function F(){},
n:function n(){},
jC:function jC(){},
q:function q(){},
bo:function bo(){},
cC:function cC(){},
dw:function dw(){},
ap:function ap(){},
dc:function dc(){},
eG:function eG(){},
dT:function dT(){},
z:function z(){},
ch:function ch(P){this.P=P},
eN:function eN(){},
q4:function q4(a){this.a=a},
q1:function q1(a){this.a=a},
q2:function q2(a){this.a=a},
q3:function q3(a,b){this.a=a
this.b=b},
kx:function kx(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
t8:function t8(a,b){this.a=a
this.b=b},
q0:function q0(a,b,c){this.a=a
this.b=b
this.c=c},
t1:function t1(){},
t0:function t0(a){this.a=a},
t2:function t2(){},
t3:function t3(){},
rz:function rz(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qH:function qH(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yS:function(a){var t,s,r,q,p
if(a==null)return
t=P.jF()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bG)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
Iy:function(a,b){var t
if(a==null)return
t={}
J.w8(a,new P.ta(t))
return t},
Iz:function(a){var t,s
t=new P.bq(0,$.aF,null,[null])
s=new P.dZ(t,[null])
a.then(H.du(new P.tb(s),1))["catch"](H.du(new P.tc(s),1))
return t},
tV:function(){var t=$.wA
if(t==null){t=J.kJ(window.navigator.userAgent,"Opera",0)
$.wA=t}return t},
wC:function(){var t=$.wB
if(t==null){t=P.tV()!==!0&&J.kJ(window.navigator.userAgent,"WebKit",0)
$.wB=t}return t},
Av:function(){var t,s
t=$.wx
if(t!=null)return t
s=$.wy
if(s==null){s=J.kJ(window.navigator.userAgent,"Firefox",0)
$.wy=s}if(s)t="-moz-"
else{s=$.wz
if(s==null){s=P.tV()!==!0&&J.kJ(window.navigator.userAgent,"Trident/",0)
$.wz=s}if(s)t="-ms-"
else t=P.tV()===!0?"-o-":"-webkit-"}$.wx=t
return t},
rE:function rE(){},
rG:function rG(a,b){this.a=a
this.b=b},
qt:function qt(){},
qu:function qu(a,b){this.a=a
this.b=b},
ta:function ta(a){this.a=a},
rF:function rF(a,b){this.a=a
this.b=b},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
tb:function tb(a){this.a=a},
tc:function tc(a){this.a=a},
ll:function ll(){},
lm:function lm(a){this.a=a},
yB:function(a){var t,s,r
t=new P.bq(0,$.aF,null,[null])
s=new P.kw(t,[null])
a.toString
r=W.S
W.dk(a,"success",new P.t_(a,s),!1,r)
W.dk(a,"error",s.geg(),!1,r)
return t},
lx:function lx(){},
t_:function t_(a,b){this.a=a
this.b=b},
mI:function mI(){},
o3:function o3(){},
hU:function hU(){},
pV:function pV(){},
HW:function(a){var t=new P.rm(0,0)
t.fu(a)
return t},
rd:function rd(){},
rm:function rm(a,b){this.a=a
this.b=b},
rn:function rn(){},
bX:function bX(){},
kN:function kN(){},
eh:function eh(){},
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
m_:function m_(){},
m0:function m0(){},
m1:function m1(){},
m2:function m2(){},
mi:function mi(){},
cr:function cr(){},
mG:function mG(){},
da:function da(){},
ng:function ng(){},
j0:function j0(){},
jk:function jk(){},
nB:function nB(){},
nC:function nC(){},
dd:function dd(){},
o_:function o_(){},
j1:function j1(){},
jl:function jl(){},
oh:function oh(){},
om:function om(){},
hW:function hW(){},
pq:function pq(){},
j2:function j2(){},
jm:function jm(){},
pt:function pt(){},
kT:function kT(a){this.a=a},
cb:function cb(){},
pw:function pw(){},
py:function py(){},
eK:function eK(){},
pK:function pK(){},
di:function di(){},
pW:function pW(){},
j3:function j3(){},
jn:function jn(){},
q7:function q7(){},
qb:function qb(){},
qc:function qc(){},
i6:function i6(){},
rs:function rs(){},
rt:function rt(){},
ru:function ru(){},
bk:function bk(){},
dj:function dj(){},
fU:function fU(){},
eZ:function eZ(){},
fV:function fV(){},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
bI:function bI(){},
f0:function f0(){},
l3:function l3(){},
lj:function lj(){},
jT:function jT(){},
kP:function kP(){},
oA:function oA(){},
rR:function rR(){},
k4:function k4(){},
j4:function j4(){},
jo:function jo(){}},W={
Ag:function(a){if(a!=null)return new Audio(a)
return new Audio()},
Ah:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
Ar:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
HO:function(a){var t=new W.qF(a,null)
t.fp(a)
return t},
Aw:function(a,b,c){var t,s
t=document.body
s=(t&&C.v).aG(t,a,b,c)
s.toString
t=new H.ef(new W.d2(s),new W.t6(),[W.at])
return t.gbi(t)},
h6:function(a){var t,s,r
t="element tag unavailable"
try{s=J.zs(a)
if(typeof s==="string")t=a.tagName}catch(r){H.bH(r)}return t},
wS:function(a,b,c){return W.wT(a,null,null,b,null,null,null,c).ba(new W.mA())},
wT:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e7
s=new P.bq(0,$.aF,null,[t])
r=new P.dZ(s,[t])
q=new XMLHttpRequest()
C.R.ib(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.GQ
W.dk(q,"load",new W.mB(r,q),!1,t)
W.dk(q,"error",r.geg(),!1,t)
q.send()
return s},
wU:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
B7:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.zD(t,a)}catch(r){H.bH(r)}return t},
eU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
yq:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dk:function(a,b,c,d,e){var t=W.In(new W.qS(c))
t=new W.qR(0,a,b,t,!1,[e])
t.fq(a,b,c,!1,e)
return t},
yo:function(a){var t,s
t=document.createElement("a")
s=new W.rv(t,window.location)
s=new W.i7(s)
s.ft(a)
return s},
HS:function(a,b,c,d){return!0},
HT:function(a,b,c,d){var t,s,r,q,p
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
yr:function(){var t=P.z
t=new W.rI(P.jG(C.p,t),P.a2(null,null,null,t),P.a2(null,null,null,t),P.a2(null,null,null,t),null)
t.fv(null,new H.ey(C.p,new W.rJ(),[H.N(C.p,0),null]),["TEMPLATE"],null)
return t},
Ie:function(a){var t
if(!!J.aD(a).$isej)return a
t=new P.kg([],[],!1)
t.c=!0
return t.bc(a)},
In:function(a){var t=$.aF
if(t===C.e)return a
return t.hr(a,!0)},
b3:function b3(){},
eX:function eX(){},
kQ:function kQ(){},
f_:function f_(){},
cO:function cO(){},
kX:function kX(){},
h8:function h8(){},
hb:function hb(){},
l0:function l0(){},
f1:function f1(){},
f2:function f2(){},
h_:function h_(){},
ei:function ei(){},
lc:function lc(){},
lg:function lg(){},
io:function io(){},
h3:function h3(){},
lk:function lk(){},
ln:function ln(){},
lo:function lo(){},
h4:function h4(){},
h5:function h5(){},
lp:function lp(){},
bM:function bM(){},
f5:function f5(){},
iT:function iT(){},
qF:function qF(a,b){this.a=a
this.b=b},
jR:function jR(){},
qG:function qG(){},
iq:function iq(){},
lq:function lq(){},
lr:function lr(){},
lw:function lw(){},
f6:function f6(){},
ir:function ir(){},
ej:function ej(){},
it:function it(){},
iu:function iu(){},
lz:function lz(){},
iv:function iv(){},
iw:function iw(){},
iU:function iU(){},
jd:function jd(){},
ix:function ix(){},
iy:function iy(){},
kn:function kn(a,$ti){this.a=a
this.$ti=$ti},
cy:function cy(){},
t6:function t6(){},
lF:function lF(){},
h7:function h7(){},
lL:function lL(){},
S:function S(){},
aV:function aV(){},
mc:function mc(){},
cj:function cj(){},
fe:function fe(){},
iV:function iV(){},
je:function je(){},
iL:function iL(){},
mg:function mg(){},
mh:function mh(){},
mj:function mj(){},
mk:function mk(){},
mm:function mm(){},
iP:function iP(){},
cq:function cq(){},
mx:function mx(){},
fg:function fg(){},
iW:function iW(){},
jf:function jf(){},
iR:function iR(){},
e7:function e7(){},
mA:function mA(){},
mB:function mB(a,b){this.a=a
this.b=b},
hq:function hq(){},
mF:function mF(){},
hr:function hr(){},
fi:function fi(){},
mK:function mK(){},
nb:function nb(){},
nd:function nd(){},
hC:function hC(){},
hD:function hD(){},
nt:function nt(){},
ny:function ny(){},
hK:function hK(){},
jJ:function jJ(){},
nE:function nE(){},
nF:function nF(){},
nG:function nG(){},
nH:function nH(){},
nI:function nI(){},
hL:function hL(){},
cs:function cs(){},
jK:function jK(){},
j5:function j5(){},
jp:function jp(){},
nW:function nW(){},
nX:function nX(){},
d2:function d2(a){this.a=a},
at:function at(){},
jN:function jN(){},
jO:function jO(){},
j6:function j6(){},
jq:function jq(){},
o1:function o1(){},
o2:function o2(){},
o6:function o6(){},
o8:function o8(){},
oc:function oc(){},
oe:function oe(){},
eb:function eb(){},
oj:function oj(){},
cl:function cl(){},
jX:function jX(){},
j7:function j7(){},
jr:function jr(){},
op:function op(){},
ot:function ot(){},
jZ:function jZ(){},
k_:function k_(){},
fw:function fw(){},
k0:function k0(){},
oN:function oN(){},
oQ:function oQ(){},
oR:function oR(){},
oS:function oS(){},
ct:function ct(){},
k2:function k2(){},
h9:function h9(){},
hc:function hc(){},
oW:function oW(){},
hX:function hX(){},
cu:function cu(){},
k3:function k3(){},
j8:function j8(){},
js:function js(){},
fx:function fx(){},
oZ:function oZ(){},
cn:function cn(){},
p_:function p_(){},
p0:function p0(){},
p5:function p5(){},
ps:function ps(){},
pu:function pu(){},
co:function co(){},
ed:function ed(){},
k7:function k7(){},
pz:function pz(){},
pA:function pA(){},
hY:function hY(){},
pF:function pF(){},
cT:function cT(){},
cM:function cM(){},
pL:function pL(){},
j9:function j9(){},
jt:function jt(){},
pM:function pM(){},
ha:function ha(){},
hd:function hd(){},
pQ:function pQ(){},
cv:function cv(){},
k8:function k8(){},
ja:function ja(){},
ju:function ju(){},
fB:function fB(){},
k9:function k9(){},
ee:function ee(){},
ka:function ka(){},
q5:function q5(){},
q6:function q6(){},
qa:function qa(){},
fC:function fC(){},
kb:function kb(){},
qf:function qf(){},
ke:function ke(){},
qm:function qm(){},
eQ:function eQ(){},
fD:function fD(){},
qE:function qE(){},
i3:function i3(){},
jb:function jb(){},
jv:function jv(){},
kk:function kk(){},
jc:function jc(){},
jw:function jw(){},
qL:function qL(){},
qM:function qM(){},
kp:function kp(){},
iX:function iX(){},
jg:function jg(){},
r6:function r6(){},
i9:function i9(){},
iY:function iY(){},
jh:function jh(){},
rw:function rw(){},
kt:function kt(){},
iZ:function iZ(){},
ji:function ji(){},
kv:function kv(){},
j_:function j_(){},
jj:function jj(){},
rS:function rS(){},
rT:function rT(){},
qA:function qA(){},
qN:function qN(a){this.a=a},
qO:function qO(a){this.a=a},
km:function km(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
e_:function e_(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qR:function qR(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qS:function qS(a){this.a=a},
i7:function i7(a){this.a=a},
bv:function bv(){},
jP:function jP(a){this.a=a},
nZ:function nZ(a){this.a=a},
nY:function nY(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(){},
rx:function rx(){},
ry:function ry(){},
rI:function rI(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
rJ:function rJ(){},
rH:function rH(){},
iN:function iN(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ea:function ea(){},
rK:function rK(){},
rv:function rv(a,b){this.a=a
this.b=b},
ky:function ky(a){this.a=a},
rQ:function rQ(a){this.a=a}},T={
uk:function(a,b,c,d){var t
H.J6(a,"$isq",[P.F],"$asq")
t=new T.hs(a,null,d,b,null)
t.fi(a,b,c,d)
return t},
xG:function(a,b){return new T.o9(0,a,new Uint8Array(H.cE(b==null?32768:b)))},
HI:function(a){var t=new T.qp(-1,0,0,0,0,null,null,"",[])
t.fm(a)
return t},
HJ:function(a,b){var t=new T.qq(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.fn(a,b)
return t},
fh:function(a){var t=new T.mC(null,0,2147483647)
t.fh(a)
return t},
fQ:function fQ(a,b){this.a=a
this.b=b},
fR:function fR(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
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
dm:function dm(a){this.a=a},
hs:function hs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
o9:function o9(a,b,c){this.a=a
this.b=b
this.c=c},
qp:function qp(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qq:function qq(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
qr:function qr(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
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
qo:function qo(a){this.a=a},
mC:function mC(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
l4:function l4(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.aa=aa
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
l6:function l6(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.aa=aa
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
ly:function ly(){},
mu:function mu(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.aa=aa
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
H6:function(a,b,c,d,e){var t,s
t=[P.z]
s=H.a([],t)
t=new T.hV("Glitch",0.01,0.01,0.01,s,0.5,a,new H.r(0,null,null,null,null,null,0,[X.G,P.U]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.E(null,null,A.Y),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.I]),H.a([],[A.fY]),1)
t.a3(a,b,c,d,e)
return t},
hV:function hV(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
ca:function ca(a,b){this.a=a
this.b=b},
AA:function(a,b,c,d){var t,s,r,q
t=new B.dy(new P.ch(""),0,0)
t.ai(a,8)
c.toString
s=H.cJ(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ai(s[q],8)
return t.bb(b)},
Az:function(a,b,c,d){var t,s,r,q,p
t=H.cE(c)
s=new Uint8Array(t)
r=new B.dn(null,0)
r.a=J.e1(a,b)
for(q=0;q<c;++q){p=r.ac(8)
if(q>=t)return H.w(s,q)
s[q]=p}return s},
Ay:function(a,b,c,d){var t,s,r,q,p
t=new B.dy(new P.ch(""),0,0)
t.ai(a,8)
s=d.gd_()
r=C.f.am(Math.log(H.kB(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cJ(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ai(q[p],r)
return t.bb(b)},
Ax:function(a,b,c,d){var t,s,r,q,p,o
t=H.cE(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dn(null,0)
p.a=J.e1(a,b)
for(o=0;o<c;++o){r=p.ac(q)
if(o>=t)return H.w(s,o)
s[o]=r}return s}},S={kO:function kO(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lb:function lb(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},bK:function bK(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},im:function im(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mz:function mz(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},nc:function nc(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nw:function nw(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oM:function oM(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},fr:function fr(){},vI:function vI(){},vJ:function vJ(){},vK:function vK(){},u1:function u1(){},u4:function u4(){},tR:function tR(){},vr:function vr(){},vM:function vM(){},vN:function vN(){},l9:function l9(){},vh:function vh(){},vb:function vb(){},nj:function nj(){},tW:function tW(){},tM:function tM(){},lt:function lt(){},uX:function uX(){},lu:function lu(){},od:function od(){},vy:function vy(){},vv:function vv(){},vz:function vz(){},tL:function tL(){},mr:function mr(){},l7:function l7(){},tQ:function tQ(){},tP:function tP(){},vi:function vi(){},vA:function vA(){},vj:function vj(){},u3:function u3(){},u2:function u2(){},vx:function vx(){},vw:function vw(){},pN:function pN(){},vD:function vD(){},tT:function tT(){},tU:function tU(){},vL:function vL(){},hJ:function hJ(){},v2:function v2(){},v3:function v3(){},v4:function v4(){},v5:function v5(){},vs:function vs(){},vt:function vt(){},vu:function vu(){},v1:function v1(){},v8:function v8(){},v9:function v9(){},uh:function uh(){},ui:function ui(){},uj:function uj(){},va:function va(){},v6:function v6(){},tN:function tN(){},vF:function vF(){},vG:function vG(){},vE:function vE(){},
ts:function(){var t=0,s=P.bd(),r,q
var $async$ts=P.bi(function(a,b){if(a===1)return P.bf(b,s)
while(true)switch(t){case 0:A.tg()
W.wS(C.c.aw("../",N.vf())+"navbar.txt",null,null).ba(O.IW())
A.v_()
t=2
return P.bQ(A.jH(),$async$ts)
case 2:r=document
r.querySelector("#loader").appendChild(O.AV(H.a([$.wQ],[O.c6]),S.J8(),"Load Word List",!1))
q=J.wf(r.querySelector("#generate"))
W.dk(q.a,q.b,S.J7(),!1,H.N(q,0))
q=J.wf(r.querySelector("#reset"))
W.dk(q.a,q.b,S.J9(),!1,H.N(q,0))
$.ty=r.querySelector("#seed")
$.tD=r.querySelector("#useseed")
$.yT=r.querySelector("#count")
$.z_=r.querySelector("#list")
$.w1=r.querySelector("#loadedlists")
$.w4=r.querySelector("#text")
r=J.we($.ty)
W.dk(r.a,r.b,S.z8(),!1,H.N(r,0))
r=J.we($.tD)
W.dk(r.a,r.b,S.z8(),!1,H.N(r,0))
return P.bg(null,s)}})
return P.bh($async$ts,s)},
IT:function(a,b){var t,s,r
t=b.split(".")
s=t.length
r=s-1
P.de(0,r,s,null,null,null)
b=H.vC(t,0,r,H.N(t,0)).aL(0,".")
$.$get$ih().h(0,b)
A.xz("wordlists/"+b+".words").b=a
$.td=!0
S.za()},
za:function(){var t,s,r,q
J.wl($.w1,"")
for(t=$.$get$ih(),s=new P.d3(t,t.r,null,null,[null]),s.c=t.e;s.I();){r=s.d
t=$.w1
q=document.createElement("div")
q.textContent=H.y(r)+".words"
t.appendChild(q)}},
zb:function(a){var t,s,r
t=$.kH
s=J.wa($.tD)===!0?J.tH($.ty):null
t.toString
r=new A.eE(null,null)
r.bs(s)
t.e=r},
z2:function(a){var t,s
for(t=$.$get$ih(),s=new P.d3(t,t.r,null,null,[null]),s.c=t.e;s.I();)A.Gq("wordlists/"+H.y(s.d)+".words")
$.$get$ih().b4(0)
$.td=!0
S.za()},
tz:function(){var t=0,s=P.bd(),r,q=2,p,o=[],n,m,l,k,j
var $async$tz=P.bi(function(a,b){if(a===1){p=b
t=q}while(true)switch(t){case 0:if(!$.td){t=1
break}$.td=!1
m=P.z
l=B.eO
l=new B.pG(P.a2(null,null,null,m),P.c0(m,l),P.c0(m,l),!1,null)
m=new A.eE(null,null)
m.bs(null)
l.e=m
$.kH=l
m=$.$get$ih(),l=new P.d3(m,m.r,null,null,[null]),l.c=m.e
case 3:if(!l.I()){t=4
break}n=l.d
q=6
t=9
return P.bQ($.kH.bo(n),$async$tz)
case 9:q=2
t=8
break
case 6:q=5
j=p
H.bH(j)
$.$get$ne().aM(C.h,"Unable to load wordlist '"+H.y(n)+"'")
t=8
break
case 5:t=2
break
case 8:t=3
break
case 4:$.$get$ne().by("Setup completed")
case 1:return P.bg(r,s)
case 2:return P.bf(p,s)}})
return P.bh($async$tz,s)},
kC:function(a){var t=0,s=P.bd(),r,q,p,o,n,m,l
var $async$kC=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)$async$outer:switch(t){case 0:t=3
return P.bQ(S.tz(),$async$kC)
case 3:J.wl($.w4,"")
q=$.kH
p=J.wa($.tD)===!0?J.tH($.ty):null
q.toString
o=new A.eE(null,null)
o.bs(p)
q.e=o
n=J.zt($.z_)
if(J.kL(n)){$.$get$ne().aM(C.h,"Initial list name cannot be length 0")
t=1
break}m=0
while(!0){q=J.tH($.yT)
if(typeof q!=="number"){r=H.a9(q)
t=1
break $async$outer}if(!(m<q))break
l=$.kH.ig(n)
q=$.w4
p=document.createElement("div")
p.textContent=l
q.appendChild(p);++m}case 1:return P.bg(r,s)}})
return P.bh($async$kC,s)}},K={bY:function bY(a,b){this.a=a
this.b=b},nh:function nh(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},oI:function oI(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c}},L={
zM:function(a,b,c,d,e){var t,s,r
t=P.z
s=A.dK
r=P.F
r=new L.aa(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
r.j(0,$.ab,L.d("#FF9B00"),!0)
r.j(0,$.ad,L.d("#FF9B00"),!0)
r.j(0,$.ac,L.d("#FF8700"),!0)
r.j(0,$.am,L.d("#7F7F7F"),!0)
r.j(0,$.al,L.d("#727272"),!0)
r.j(0,$.af,L.d("#A3A3A3"),!0)
r.j(0,$.ag,L.d("#999999"),!0)
r.j(0,$.ae,L.d("#898989"),!0)
r.j(0,$.ak,L.d("#EFEFEF"),!0)
r.j(0,$.aj,L.d("#DBDBDB"),!0)
r.j(0,$.ai,L.d("#C6C6C6"),!0)
r.j(0,$.ah,L.d("#ADADAD"),!0)
s=[t]
t=new L.fS(0.01,0.01,0.01,0.5,a,new H.r(0,null,null,null,null,null,0,[X.G,P.U]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.I]),H.a([],[A.fY]),Q.E(null,null,A.Y))
t.a_(a,b,c,d,e)
return t},
d:function(a){if(C.c.ag(a,"#"))return A.wt(C.c.ah(a,1))
else return A.wt(a)},
fS:function fS(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
l1:function l1(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
oK:function oK(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
pB:function pB(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2}},M={kS:function kS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fZ:function fZ(a,b){this.a=a
this.b=b},ls:function ls(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hf:function hf(){},bD:function bD(a,b){this.a=a
this.b=b},p1:function p1(a){this.a=a},qi:function qi(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},U={kW:function kW(){},nv:function nv(a){this.a=a},o5:function o5(a){this.a=a},pn:function pn(){},po:function po(a){this.a=a},pp:function pp(a){this.a=a},lB:function lB(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,aa,ek,el,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.aa=aa
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
_.x2=x2},m3:function m3(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nx:function nx(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
this.a=a},aw:function aw(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},pO:function pO(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
HG:function(a){if(J.d4(a).ag(a," "))return C.c.ah(a,1)
return a},
qj:function qj(a){this.a=a},
qk:function qk(a,b){this.a=a
this.b=b},
ql:function ql(a,b){this.a=a
this.b=b}},O={kY:function kY(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
AV:function(a,b,c,d){var t,s,r,q,p,o
t=document
s=t.createElement("div")
r=W.B7("file")
q=r.style
q.display="none"
q=J.aG(r)
q.seA(r,!1)
p=P.a2(null,null,null,P.z)
for(o=0;o<1;++o)p.at(0,Z.AX(a[o]))
if(p.a!==0)q.shi(r,new H.f7(p,new O.md(),[H.N(p,0),null]).aL(0,","))
q=q.gcZ(r)
W.dk(q.a,q.b,new O.me(a,b,r),!1,H.N(q,0))
s.appendChild(r)
t=t.createElement("button")
t.textContent=c
W.dk(t,"click",new O.mf(r),!1,W.v7)
s.appendChild(t)
return s},
c6:function c6(){},
md:function md(){},
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
mf:function mf(a){this.a=a},
dx:function dx(){},
l2:function l2(a){this.a=a},
eJ:function eJ(){},
iz:function iz(){},
IY:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.vf()
a=J.tI(a,P.df("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.tv(t))
s=document
J.wh(s.querySelector("#navbar"),"beforeend",a,C.w,null)
if(J.bc(O.IK("seerOfVoid",null),"true"))P.B5(new O.tw(),P.cC)
r=new P.e3(Date.now(),!1)
if(H.vm(r)===4&&H.vl(r)===1)J.wb(s.querySelector("body")).h(0,"voidbody")
q=H.vm(r)
p=H.vl(r)
o=C.a.D(H.xJ(r))
n=C.a.D(q)
m=C.a.D(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.eE(null,null)
k.bs(H.ft(l,null,null))
k.i7()
if($.Hw||k.a.c7()>0.99)H.kG(s.querySelector("#today"),"$iseX").href=C.c.aw("../",t)+"dead_index.html?seed="+l
else H.kG(s.querySelector("#today"),"$iseX").href=C.c.aw("../",t)+"index2.html?seed="+l},
IK:function(a,b){var t,s,r,q
t=P.yc().gd6().n(0,a)
if(t!=null)t=P.rM(t,0,J.c4(t),C.n,!1)
if(t!=null)return t
s=$.z4
if(s.length!==0){r=J.zF(window.location.href,J.zy(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.yd(H.z6(s,q,"")+"?"+$.z4,0,null).gd6().n(0,a)}return},
Jb:function(){var t,s,r,q
t=document
J.wb(t.querySelector("body")).h(0,"voidbody")
s=new W.kn(t.querySelectorAll(".void"),[null])
for(t=new H.dQ(s,s.gm(s),0,null,[null]);t.I();){r=t.d
q=J.zl(J.tG(r))
if(q==="none"||q.length===0)O.J2(r)
else O.IM(r)}},
J2:function(a){var t,s
if(a==null)return
t=J.aG(a)
s=t.gaR(a)
J.wk(s,!!t.$ishX?"inline":"block")},
IM:function(a){if(a==null)return
J.wk(J.tG(a),"none")},
J3:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fM("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.e2(s,",")
if(!J.zi(r,a))window.localStorage.setItem(t,H.y(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.bH(q)
P.fM("Saving isn't possible....you don't have local storage")}},
tv:function tv(a){this.a=a},
tw:function tw(){},
tu:function tu(){},
cY:function cY(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={pJ:function pJ(a){this.a=a},ow:function ow(a){this.a=a},l8:function l8(a){this.a=a},ms:function ms(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mt:function mt(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},o0:function o0(b,a){this.b=b
this.a=a},dS:function dS(a,b){this.a=a
this.b=b},ar:function ar(a,b){this.a=a
this.b=b},d6:function d6(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},c7:function c7(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},T:function T(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ip:function ip(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bE:function bE(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},d_:function d_(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ld:function ld(c,a,b){this.c=c
this.a=a
this.b=b},bz:function bz(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jU:function jU(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iO:function iO(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jW:function jW(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},oH:function oH(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oJ:function oJ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oT:function oT(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},dR:function dR(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nN:function(){var t=0,s=P.bd(),r,q
var $async$nN=P.bi(function(a,b){if(a===1)return P.bf(b,s)
while(true)switch(t){case 0:P.fM("loading big bads")
r=$
q=J
t=2
return P.bQ(A.e9("BigBadLists/bigBads.txt",!1,!1,null),$async$nN)
case 2:r.xF=q.e2(b,"\n")
return P.bg(null,s)}})
return P.bh($async$nN,s)},
Iw:function(a){var t,s,r,q,p,o
t=J.e2(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bG)(t),++q){p=t[q]
o=J.bj(p)
r+=" "+(J.zJ(o.n(p,0))+o.ah(p,1))}return r}},A={lf:function lf(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
i:function(a,b,c,d,e){var t=new A.Y(c,e,null,a,!1,P.a2(null,null,null,G.W),0,3)
t.O(a,b,c,!1,e)
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
n2:function n2(){},
n1:function n1(){},
nK:function nK(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
oY:function oY(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
oo:function oo(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
oV:function oV(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
pU:function pU(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.aa=aa
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
ox:function ox(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
mq:function mq(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
fY:function fY(){},
h1:function(a,b,c,d){var t=new A.dK(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.fg(a,b,c,d)
return t},
tS:function(a,b,c,d){var t=A.h1(0,0,0,255)
t.b=C.a.ae(C.d.am(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ae(C.d.am(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ae(C.d.am(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ae(C.d.am(d*255),0,255)
return t},
An:function(a,b){if(b){if(typeof a!=="number")return a.aP()
return A.h1((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aP()
return A.h1((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
wt:function(a){return A.An(H.ft(a,16,new A.t9()),a.length>=8)},
dK:function dK(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
t9:function t9(){},
v_:function(){if($.xB)return
$.xB=!0
Z.AY()},
e9:function(a,b,c,d){var t=0,s=P.bd(),r,q,p,o,n
var $async$e9=P.bi(function(e,f){if(e===1)return P.bf(f,s)
while(true)switch(t){case 0:A.v_()
t=$.$get$cB().V(0,a)?3:5
break
case 3:q=$.$get$cB().n(0,a)
p=J.aD(q)
if(!!p.$isdR){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cL(q)
t=1
break}}else throw H.l("Requested resource ("+a+") is an unexpected type: "+H.y(J.wg(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.v0==null?8:9
break
case 8:t=10
return P.bQ(A.jH(),$async$e9)
case 10:case 9:n=$.v0.eV(a)
t=n!=null?11:12
break
case 11:t=13
return P.bQ(A.no(n),$async$e9)
case 13:if(!$.$get$cB().V(0,a))$.$get$cB().i(0,a,new Y.dR(a,null,H.a([],[[P.f4,,]]),[null]))
r=$.$get$cB().n(0,a).b
t=1
break
case 12:case 7:r=A.Gp(a,!1,d)
t=1
break
case 4:case 1:return P.bg(r,s)}})
return P.bh($async$e9,s)},
jH:function(){var t=0,s=P.bd(),r
var $async$jH=P.bi(function(a,b){if(a===1)return P.bf(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.bQ(A.e9("manifest/manifest.txt",!1,!0,$.wO),$async$jH)
case 2:r.v0=b
return P.bg(null,s)}})
return P.bh($async$jH,s)},
xz:function(a){if(!$.$get$cB().V(0,a))$.$get$cB().i(0,a,new Y.dR(a,null,H.a([],[[P.f4,,]]),[null]))
return $.$get$cB().n(0,a)},
Gp:function(a,b,c){var t
if($.$get$cB().V(0,a))throw H.l("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.wN(C.b.gbh(a.split("."))).a
t=A.xz(a)
c.b9(A.xA(a,!1)).ba(new A.nr(t))
return t.cL(0)},
Gq:function(a){var t,s,r,q
if($.$get$cB().V(0,a))for(t=$.$get$cB().n(0,a).c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bG)(t),++r){q=t[r]
if(!q.gi_())q.bl("Resource purged")}$.$get$cB().an(0,a)},
no:function(a){var t=0,s=P.bd(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$no=P.bi(function(b,a0){if(b===1)return P.bf(a0,s)
while(true)switch(t){case 0:t=3
return P.bQ(A.e9(a+".bundle",!1,!0,null),$async$no)
case 3:q=a0
p=C.c.N(a,0,C.c.ew(a,$.$get$xC()))
o=P.cC
n=new P.dZ(new P.bq(0,$.aF,null,[o]),[o])
m=H.a([],[P.c8])
for(o=J.wc(q),l=o.length,k=[[P.f4,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bG)(o),++i){h=o[i]
g=J.aG(h)
f=Z.wN(C.b.gbh(J.e2(g.gK(h),"."))).a
e=p+"/"+H.y(g.gK(h))
if($.$get$cB().V(0,e)){m.push(A.e9(e,!1,!1,null))
continue}d=H.kG(g.gbm(h),"$isdj")
if(!$.$get$cB().V(0,e))$.$get$cB().i(0,e,new Y.dR(e,null,H.a([],k),j))
c=$.$get$cB().n(0,e)
m.push(c.cL(0))
f.bg(d.buffer).ba(new A.np(f,c))}P.B6(m,null,!1).ba(new A.nq(n))
r=n.a
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$no,s)},
hG:function(a,b){var t=0,s=P.bd(),r,q,p,o,n
var $async$hG=P.bi(function(c,d){if(c===1)return P.bf(d,s)
while(true)switch(t){case 0:if($.$get$uZ().V(0,a)){r=$.$get$uZ().n(0,a)
t=1
break}q=W.fw
p=new P.bq(0,$.aF,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.dk(n,"load",new A.ns(new P.dZ(p,[q]),n),!1,W.S)
n.src=A.xA(a,!1)
r=p
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$hG,s)},
xA:function(a,b){if(C.c.ag(a,"/")){a=C.c.ah(a,1)
b=!0}else b=!1
if(b)return H.y(window.location.protocol)+"//"+H.y(window.location.host)+"/"+a
return C.c.aw("../",N.vf())+a},
nr:function nr(a){this.a=a},
np:function np(a,b){this.a=a
this.b=b},
nq:function nq(a){this.a=a},
ns:function ns(a,b){this.a=a
this.b=b},
ob:function ob(){},
jS:function jS(){},
eE:function eE(a,b){this.a=a
this.b=b},
tg:function(){var t=0,s=P.bd(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$tg=P.bi(function(a0,a1){if(a0===1)return P.bf(a1,s)
while(true)switch(t){case 0:if($.yU){t=1
break}$.yU=!0
D.HB()
q=P.z
p=[q]
o=H.a(["metal"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,0.3)
$.$get$c().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.ao
H.a([],p)
o=new G.bL(n,o,0.6)
$.$get$c().h(0,o)
$.x4=o
o=H.a(["ceramic"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.3)
$.$get$c().h(0,o)
$.bT=o
o=H.a(["bone"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,0.2)
$.$get$c().h(0,o)
$.ba=o
o=H.a(["wood"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.3)
$.$get$c().h(0,o)
$.Z=o
o=H.a(["plastic"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.3)
$.$get$c().h(0,o)
$.aP=o
o=H.a(["rubber"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.3)
$.$get$c().h(0,o)
$.c9=o
o=H.a(["paper"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.3)
$.$get$c().h(0,o)
$.O=o
o=H.a(["cloth","fabric"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.3)
$.$get$c().h(0,o)
$.Q=o
o=H.a(["glass"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.3)
$.$get$c().h(0,o)
$.b4=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.3)
$.$get$c().h(0,o)
$.bZ=o
o=H.a(["flesh","meat","muscle"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.1)
$.$get$c().h(0,o)
$.bm=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.J
H.a([],p)
o=new G.bL(n,o,3.1)
$.$get$c().h(0,o)
$.bs=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.1)
$.$get$c().h(0,o)
$.ck=o
o=H.a(["plant","leaf","vine"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.1)
$.$get$c().h(0,o)
$.b7=o
o=H.a(["feathery"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,-0.1)
$.$get$c().h(0,o)
$.bB=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.K
H.a([],p)
o=new G.bL(n,o,0.1)
$.$get$c().h(0,o)
$.bV=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.K
H.a([],p)
o=new G.bL(n,o,-13)
$.$get$c().h(0,o)
$.bU=o
o=H.a(["stone","rock","concrete"],p)
n=$.x
H.a([],p)
o=new G.bL(n,o,0.3)
$.$get$c().h(0,o)
$.aJ=o
o=H.a(["legendary"],p)
n=$.n0
H.a([],p)
o=new G.bL(n,o,13)
$.$get$c().h(0,o)
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.n0
H.a([],p)
o=new G.bL(n,o,40.37)
$.$get$c().h(0,o)
$.G5=o
o=$.K
H.a([],p)
o=new G.aY(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.aK=o
o=$.uL
H.a([],p)
o=new G.aY(o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.b_=o
o=$.uL
H.a([],p)
o=new G.aY(o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.aA=o
o=$.K
H.a([],p)
o=new G.aY(o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.br=o
o=$.J
H.a([],p)
o=new G.aY(o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c_=o
o=$.K
H.a([],p)
o=new G.aY(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.b5=o
o=$.K
H.a([],p)
o=new G.aY(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bF=o
o=$.K
H.a([],p)
o=new G.aY(o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aO=o
o=$.J
H.a([],p)
o=new G.aY(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aZ=o
o=$.t
H.a([],p)
o=new G.aY(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bu=o
o=$.t
H.a([],p)
o=new G.aY(o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a3=o
o=$.t
H.a([],p)
o=new G.aY(o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.bn=o
o=$.K
H.a([],p)
o=new G.aY(o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.be=o
o=$.K
H.a([],p)
o=new G.aY(o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.aH=o
o=$.K
H.a([],p)
o=new G.aY(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.as=o
o=$.K
H.a([],p)
o=new G.aY(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.az=o
o=$.K
H.a([],p)
o=new G.aY(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.a0=o
o=$.J
H.a([],p)
o=new G.aY(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.aB=o
o=$.K
H.a([],p)
o=new G.aY(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aQ=o
o=$.K
H.a([],p)
o=new G.aY(o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.b9=o
o=$.K
H.a([],p)
o=new G.aY(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bt=o
o=$.K
H.a([],p)
o=new G.aY(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a4=o
o=$.n0
H.a([],p)
o=new G.aY(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.H=o
o=$.n0
H.a([],p)
o=new G.aY(o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.P=o
o=$.K
H.a([],p)
o=new G.aY(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.aM=o
o=$.t
H.a([],p)
o=new G.aY(o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.b0=o
o=$.K
H.a([],p)
o=new G.aY(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aN=o
o=$.K
H.a([],p)
o=new G.aY(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b8=o
o=$.K
H.a([],p)
o=new G.aY(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bO=o
o=$.K
H.a([],p)
o=new G.aY(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bp=o
o=$.K
H.a([],p)
o=new G.aY(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.cg=o
o=$.K
H.a([],p)
o=new G.aY(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.aI=o
o=$.K
H.a([],p)
o=new G.aY(o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.an=o
o=$.t
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
$.ax=o
o=$.K
H.a([],p)
o=new G.aY(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.aW=o
o=H.a(["perfectly generic"],p)
n=$.K
H.a([],p)
o=new G.au(n,o,0.1)
$.$get$c().h(0,o)
$.fk=o
o=H.a(["a sword"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.es=o
o=H.a(["a hammer"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.uv=o
o=H.a(["a rifle"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.uG=o
o=H.a(["a pistol"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.uC=o
o=H.a(["a blade"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.wY=o
o=H.a(["a dagger"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.ur=o
o=H.a(["a santa"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.hw=o
o=H.a(["a fist"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.x6=o
o=H.a(["claws"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.mR=o
o=H.a(["a grenade"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.mU=o
o=H.a(["a freaking safe"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xj=o
o=H.a(["a ball"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.er=o
o=H.a(["a trident"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xs=o
o=H.a(["a card"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.mQ=o
o=H.a(["a frying pan"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.ut=o
o=H.a(["a pillow"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.e8=o
o=H.a(["a machinegun"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.uz=o
o=H.a(["a shuriken"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xn=o
o=H.a(["a sling"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xq=o
o=H.a(["a yoyo"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xu=o
o=H.a(["a cane"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.x_=o
o=H.a(["a shield"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.fl=o
o=H.a(["a lance"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xf=o
o=H.a(["a ax"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.um=o
o=H.a(["a sign"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xi=o
o=H.a(["a book"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.aL=o
o=H.a(["a broom"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.jx=o
o=H.a(["a club"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.jy=o
o=H.a(["a bow"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.uo=o
o=H.a(["a whip"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xt=o
o=H.a(["a staff"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xr=o
o=H.a(["a needle"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.uA=o
o=H.a(["dice"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.us=o
o=H.a(["a fork"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.x7=o
o=H.a(["a pigeon???"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,1.3)
$.$get$c().h(0,o)
$.uB=o
o=H.a(["a chainsaw"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.x0=o
o=H.a(["a sickle"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xo=o
o=H.a(["a shotgun"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xl=o
o=H.a(["a stick"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.dq=o
o=H.a(["a chain"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.hv=o
o=H.a(["a wrench"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.uJ=o
o=H.a(["a shovel"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xm=o
o=H.a(["a rolling pin"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.uI=o
o=H.a(["a puppet"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.uD=o
o=H.a(["a razor"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.uF=o
o=H.a(["a pen"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.mY=o
o=H.a(["a bust"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.hu=o
o=H.a(["a bowling ball"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["a golf club"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.x9=o
o=H.a(["a knife"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xe=o
o=H.a(["scissors"],p)
n=$.a6
H.a([],p)
o=new G.au(n,o,0.4)
$.$get$c().h(0,o)
$.xk=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.J
m=G.W
l=[m]
k=H.a([$.D,$.aK,$.aZ],l)
H.a([],p)
o=new G.e("Forged",k,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a([],p)
n=$.x
k=H.a([$.an,$.aK],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["fossilized"],p)
n=$.J
k=H.a([$.ba,$.aJ],l)
H.a([],p)
o=new G.e("Fossilized",k,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["adamantium"],p)
n=$.J
k=H.a([$.ba,$.D],l)
H.a([],p)
o=new G.e("Adamantium",k,n,o,0)
$.$get$c().h(0,o)
$.wX=o
o=H.a([],p)
n=$.x
k=H.a([$.b8,$.aN],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.FF=o
o=H.a(["tatami"],p)
n=$.x
k=H.a([$.Q,$.Z],l)
H.a([],p)
o=new G.e("Tatami",k,n,o,0)
$.$get$c().h(0,o)
$.FU=o
o=H.a(["mesh","chain link"],p)
n=$.x
k=H.a([$.Q,$.D],l)
H.a([],p)
o=new G.e("Mesh",k,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["foil"],p)
n=$.x
k=H.a([$.O,$.D],l)
H.a([],p)
o=new G.e("Foil",k,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["beanbag"],p)
n=$.x
k=H.a([$.Q,$.aJ],l)
H.a([],p)
o=new G.e("Beanbag",k,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["pleather","faux fur"],p)
n=$.x
k=H.a([$.ck,$.aP],l)
H.a([],p)
o=new G.e("Faux Fur",k,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["plywood"],p)
n=$.x
k=H.a([$.Z,$.O],l)
H.a([],p)
o=new G.e("Plywood",k,n,o,0)
$.$get$c().h(0,o)
$.jz=o
o=H.a(["colossus"],p)
n=$.x
k=H.a([$.D,$.bm],l)
H.a([],p)
o=new G.e("Colossus",k,n,o,0)
$.$get$c().h(0,o)
$.x1=o
o=H.a(["rotting","zombie"],p)
n=$.J
k=H.a([$.bV,$.bm],l)
H.a([],p)
o=new G.e("Rotting",k,n,o,0)
$.$get$c().h(0,o)
$.F2=o
o=H.a(["draugr","white walker"],p)
n=$.J
k=H.a([$.bV,$.bm,$.bp],l)
H.a([],p)
o=new G.e("Draugr",k,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["Ultraviolet"],p)
n=$.uK
k=H.a([$.b_,$.aA],l)
H.a([],p)
o=new G.e("Ultraviolet",k,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["Ultraviolence"],p)
n=$.t
k=H.a([$.b_,$.aA,$.aK],l)
H.a([],p)
o=new G.e("Ultraviolence",k,n,o,0)
$.$get$c().h(0,o)
$.G4=o
o=H.a([],p)
n=$.t
k=H.a([$.aO,$.bF],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["candy"],p)
n=$.x
k=H.a([$.aH,$.b4],l)
H.a([],p)
o=new G.e("Candy",k,n,o,0)
$.$get$c().h(0,o)
$.up=o
o=H.a(["cotton candy"],p)
n=$.x
k=H.a([$.aH,$.Q],l)
H.a([],p)
o=new G.e("Cotton Candy",k,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["gummy"],p)
n=$.x
k=H.a([$.aH,$.c9],l)
H.a([],p)
o=new G.e("Gum",k,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["marrow"],p)
n=$.x
k=H.a([$.aH,$.ba],l)
H.a([],p)
o=new G.e("Marrow",k,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["toothy"],p)
n=$.a6
k=H.a([$.ba,$.bT],l)
H.a([],p)
o=new G.e("Toothy",k,n,o,0)
$.$get$c().h(0,o)
$.G1=o
o=H.a(["Frost"],p)
n=$.x
k=H.a([$.aJ,$.b4,$.bm],l)
H.a([],p)
o=new G.e("Frost",k,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["arsenic","antifreeze"],p)
n=$.t
k=H.a([$.aH,$.bO],l)
H.a([],p)
o=new G.e("Arsenic",k,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.x
k=H.a([$.aJ,$.b4],l)
H.a([],p)
o=new G.e("Crystal",k,n,o,0)
$.$get$c().h(0,o)
$.mS=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.K
k=H.a([$.aM,$.aQ,$.b9,$.a0,$.as,$.bF,$.a4],l)
H.a([],p)
o=new G.e("Mary Sue",k,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.K
k=H.a([$.b5,$.aA,$.aK,$.a_,$.aO,$.a0,$.as,$.az],l)
H.a([],p)
o=new G.e("Edge Lord",k,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["deadpool"],p)
n=$.a6
k=H.a([$.bV,$.b0,$.az,$.b9],l)
H.a([],p)
o=new G.e("Deadpool",k,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.K
k=H.a([$.b5,$.az],l)
H.a([],p)
o=new G.e("Spoopy",k,n,o,0)
$.$get$c().h(0,o)
$.FI=o
o=H.a(["wolverine"],p)
n=$.a6
k=H.a([$.ba,$.aK,$.aZ],l)
H.a([],p)
o=new G.e("Wolverine",k,n,o,0)
$.$get$c().h(0,o)
$.Gg=o
o=H.a(["rabbit's foot"],p)
n=$.a6
k=H.a([$.bF,$.ck],l)
H.a([],p)
o=new G.e("Rabbit's Foot",k,n,o,0)
$.$get$c().h(0,o)
$.uE=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.J
k=H.a([$.aZ,$.Z],l)
H.a([],p)
o=new G.e("Tipped",k,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a6
k=H.a([$.aZ,$.b1,$.Z],l)
H.a([],p)
o=new G.e("Arrow",k,n,o,0)
$.$get$c().h(0,o)
$.ul=o
o=H.a(["training sword","bokken"],p)
n=$.a6
k=H.a([$.Z,$.aK],l)
H.a([],p)
o=new G.e("Bokken",k,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.ax,$.az],l)
H.a([],p)
o=new G.e("Irony Type1",k,n,o,0)
$.$get$c().h(0,o)
$.ux=o
o=H.a(["netted","webbed"],p)
n=$.a6
k=H.a([$.bn,$.Q],l)
H.a([],p)
o=new G.e("Netted",k,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["barbed wire"],p)
n=$.a6
k=H.a([$.aZ,$.bn,$.D,$.Q],l)
H.a([],p)
o=new G.e("Barbed Wire",k,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["morning star"],p)
n=$.a6
k=H.a([$.aZ,$.an],l)
H.a([],p)
o=new G.e("Morning Star",k,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["decadent"],p)
n=$.K
k=H.a([$.b8,$.be],l)
H.a([],p)
o=new G.e("Decadent",k,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["SBAHJ"],p)
n=$.t
k=H.a([$.bU,$.az],l)
H.a([],p)
o=new G.e("SBAHJ",k,n,o,0)
$.$get$c().h(0,o)
$.Fc=o
o=H.a(["bayonet"],p)
n=$.a6
k=H.a([$.aZ,$.b1],l)
H.a([],p)
o=new G.e("Bayonet",k,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.x
k=H.a([$.bp,$.az,$.aK],l)
H.a([],p)
o=new G.e("Snoop",k,n,o,0)
$.$get$c().h(0,o)
$.FE=o
o=H.a(["light saber"],p)
n=$.t
k=H.a([$.b_,$.aI,$.aK],l)
H.a([],p)
o=new G.e("Light Saber",k,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.K
k=H.a([$.a4,$.ax],l)
H.a([],p)
o=new G.e("Fakey Fake",k,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.K
k=H.a([$.a4,$.aW],l)
H.a([],p)
o=new G.e("Real As Shit",k,n,o,0)
$.$get$c().h(0,o)
$.EX=o
o=H.a(["skeletal"],p)
n=$.a6
k=H.a([$.b5,$.aO,$.ba],l)
H.a([],p)
o=new G.e("Skeletal",k,n,o,0)
$.$get$c().h(0,o)
$.Fy=o
o=H.a(["green sun"],p)
n=$.uL
k=H.a([$.aI,$.c_,$.b_],l)
H.a([],p)
o=new G.e("Green Sun",k,n,o,0)
$.$get$c().h(0,o)
$.mT=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.uK
k=H.a([$.aA,$.as],l)
H.a([],p)
o=new G.e("Midnight",k,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["radiant","dazzling"],p)
n=$.K
k=H.a([$.a4,$.b_],l)
H.a([],p)
o=new G.e("Radiant",k,n,o,0)
$.$get$c().h(0,o)
$.EU=o
o=H.a(["edgy"],p)
n=$.K
k=H.a([$.aK,$.aA,$.az],l)
H.a([],p)
o=new G.e("Edgy",k,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.t
k=H.a([$.c_,$.bu],l)
H.a([],p)
o=new G.e("Warhead",k,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["living"],p)
n=$.J
k=H.a([$.ba,$.bm,$.aB],l)
H.a([],p)
o=new G.e("Living",k,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["dead","corpse","deceased"],p)
n=$.J
k=H.a([$.ba,$.bm],l)
H.a([],p)
o=new G.e("Dead",k,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["taser"],p)
n=$.t
k=H.a([$.a3,$.bn,$.b1],l)
H.a([],p)
o=new G.e("Taser",k,n,o,0)
$.$get$c().h(0,o)
$.FT=o
o=H.a(["nocturn"],p)
n=$.t
k=H.a([$.aA,$.a7],l)
H.a([],p)
o=new G.e("Nocturn",k,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["dirge"],p)
n=$.t
k=H.a([$.aO,$.a7],l)
H.a([],p)
o=new G.e("Dirge",k,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["Snobbish","Noble"],p)
n=$.K
k=H.a([$.as,$.be],l)
H.a([],p)
o=new G.e("Snobbish",k,n,o,0)
$.$get$c().h(0,o)
$.FD=o
o=H.a(["flat"],p)
n=$.K
k=H.a([$.an,$.a7],l)
H.a([],p)
o=new G.e("Flat(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.aK,$.a7],l)
H.a([],p)
o=new G.e("Sharp(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.Fl=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.as,$.a7],l)
H.a([],p)
o=new G.e("Sharp(Clothes)",k,n,o,0)
$.$get$c().h(0,o)
$.Fk=o
o=H.a(["Bach's"],p)
n=$.ao
k=H.a([$.a0,$.a7],l)
H.a([],p)
o=new G.e("Bach's",k,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Mozart's"],p)
n=$.ao
k=H.a([$.a4,$.a7],l)
H.a([],p)
o=new G.e("Mozart's",k,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.ao
k=H.a([$.a0,$.c_],l)
H.a([],p)
o=new G.e("Einstein's",k,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["Feynman's"],p)
n=$.ao
k=H.a([$.a0,$.b9],l)
H.a([],p)
o=new G.e("Feynman's",k,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["Ziptie"],p)
n=$.ao
k=H.a([$.aP,$.bn],l)
H.a([],p)
o=new G.e("Ziptie",k,n,o,0)
$.$get$c().h(0,o)
$.Gk=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.t
k=H.a([$.D,$.a0],l)
H.a([],p)
o=new G.e("Mobile",k,n,o,0)
$.$get$c().h(0,o)
$.hx=o
o=H.a(["Sassacre"],p)
n=$.ao
k=H.a([$.cg,$.b9],l)
H.a([],p)
o=new G.e("Sassacre",k,n,o,0)
$.$get$c().h(0,o)
$.Fa=o
o=H.a(["Sledge"],p)
n=$.t
k=H.a([$.an,$.cg],l)
H.a([],p)
o=new G.e("Sledge",k,n,o,0)
$.$get$c().h(0,o)
$.FB=o
o=H.a(["Legal"],p)
n=$.t
k=H.a([$.bn,$.O],l)
H.a([],p)
o=new G.e("Legal",k,n,o,0)
$.$get$c().h(0,o)
$.mW=o
o=H.a(["Clown"],p)
n=$.t
k=H.a([$.b9,$.aT],l)
H.a([],p)
o=new G.e("Clown",k,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["passionate"],p)
n=$.K
k=H.a([$.aI,$.aQ],l)
H.a([],p)
o=new G.e("Passionate",k,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["pinata"],p)
n=$.a6
k=H.a([$.O,$.aH],l)
H.a([],p)
o=new G.e("Pinata",k,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a(["anvil"],p)
n=$.t
k=H.a([$.an,$.cg,$.D],l)
H.a([],p)
o=new G.e("Anvil",k,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["flashbang"],p)
n=$.t
k=H.a([$.b_,$.bu],l)
H.a([],p)
o=new G.e("Flashbang",k,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["smokebomb"],p)
n=$.t
k=H.a([$.aA,$.bu],l)
H.a([],p)
o=new G.e("Smokebomb",k,n,o,0)
$.$get$c().h(0,o)
$.FC=o
o=H.a(["ninja"],p)
n=$.t
k=H.a([$.aA,$.aK],l)
H.a([],p)
o=new G.e("Ninja",k,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["techno"],p)
n=$.t
k=H.a([$.a3,$.a7],l)
H.a([],p)
o=new G.e("Techno",k,n,o,0)
$.$get$c().h(0,o)
$.FW=o
o=H.a(["rock and roll"],p)
n=$.t
k=H.a([$.aJ,$.a7],l)
H.a([],p)
o=new G.e("Rock And/Or Roll",k,n,o,0)
$.$get$c().h(0,o)
$.EZ=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a6
k=H.a([$.aB,$.bm,$.b1],l)
H.a([],p)
o=new G.e("Pistol Shrimp",k,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["juggalo"],p)
n=$.t
k=H.a([$.b9,$.a7,$.aT,$.b5],l)
H.a([],p)
o=new G.e("Juggalo",k,n,o,0)
$.$get$c().h(0,o)
$.xd=o
o=H.a(["shocksauce"],p)
n=$.K
k=H.a([$.az,$.a3],l)
H.a([],p)
o=new G.e("Shock Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.Fo=o
o=H.a(["weaksauce"],p)
n=$.K
k=H.a([$.an,$.az,$.bU],l)
H.a([],p)
o=new G.e("Weak Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.Ga=o
o=H.a(["spicy","picante"],p)
n=$.K
k=H.a([$.aI,$.aH],l)
H.a([],p)
o=new G.e("Spicy",k,n,o,0)
$.$get$c().h(0,o)
$.FH=o
o=H.a(["ice cream","popsicle"],p)
n=$.x
k=H.a([$.bp,$.aH],l)
H.a([],p)
o=new G.e("Popsicle",k,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["popsickle"],p)
n=$.x
k=H.a([$.bp,$.aH,$.aK],l)
H.a([],p)
o=new G.e("Popsickle",k,n,o,0)
$.$get$c().h(0,o)
$.EL=o
o=H.a(["icepick"],p)
n=$.x
k=H.a([$.bp,$.aZ],l)
H.a([],p)
o=new G.e("Icepick",k,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["schezwan"],p)
n=$.K
k=H.a([$.az,$.aH],l)
H.a([],p)
o=new G.e("Schezwan",k,n,o,0)
$.$get$c().h(0,o)
$.Fd=o
o=H.a(["vaporwave"],p)
n=$.t
k=H.a([$.aA,$.a7,$.az,$.a3],l)
H.a([],p)
o=new G.e("Vaporwave",k,n,o,0)
$.$get$c().h(0,o)
$.G8=o
o=H.a(["mallet"],p)
n=$.a6
k=H.a([$.Z,$.an],l)
H.a([],p)
o=new G.e("Mallet",k,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["fidget"],p)
n=$.t
k=H.a([$.aP,$.az],l)
H.a([],p)
o=new G.e("Fidget",k,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["gold foil"],p)
n=$.x
k=H.a([$.D,$.O,$.be],l)
H.a([],p)
o=new G.e("Gold Foil",k,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["caviar"],p)
n=$.x
k=H.a([$.aH,$.be],l)
H.a([],p)
o=new G.e("Caviar",k,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["RADioactive"],p)
n=$.K
k=H.a([$.c_,$.az],l)
H.a([],p)
o=new G.e("RADioactive",k,n,o,0)
$.$get$c().h(0,o)
$.EV=o
o=H.a(["glam"],p)
n=$.K
k=H.a([$.aJ,$.a7,$.aM],l)
H.a([],p)
o=new G.e("Glam",k,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["hair metal"],p)
n=$.K
k=H.a([$.D,$.a7,$.aM],l)
H.a([],p)
o=new G.e("Hair Metal",k,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["elven","fae","sylvan"],p)
n=$.K
k=H.a([$.a4,$.aM],l)
H.a([],p)
o=new G.e("Elven",k,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["shiny"],p)
n=$.K
k=H.a([$.D,$.aM],l)
H.a([],p)
o=new G.e("Shiny",k,n,o,0)
$.$get$c().h(0,o)
$.Fn=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.K
k=H.a([$.be,$.aM,$.as],l)
H.a([],p)
o=new G.e("Bespoke",k,n,o,0)
$.$get$c().h(0,o)
$.fj=o
o=H.a(["operatic"],p)
n=$.K
k=H.a([$.be,$.a7,$.as],l)
H.a([],p)
o=new G.e("Operatic",k,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["ice","diamond"],p)
n=$.x
k=H.a([$.be,$.bp],l)
H.a([],p)
o=new G.e("Diamond",k,n,o,0)
$.$get$c().h(0,o)
$.xb=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.K
k=H.a([$.aI,$.bp],l)
H.a([],p)
o=new G.e("Icy Hot",k,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.K
k=H.a([$.az,$.bp],l)
H.a([],p)
o=new G.e("Cold As Fuck",k,n,o,0)
$.$get$c().h(0,o)
$.xc=o
o=H.a(["winter's","season's"],p)
n=$.ao
k=H.a([$.br,$.bp],l)
H.a([],p)
o=new G.e("Winter's",k,n,o,0)
$.$get$c().h(0,o)
$.Gd=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.ao
k=H.a([$.a4,$.bp],l)
H.a([],p)
o=new G.e("Christmas",k,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Santa Saws"],p)
n=$.ao
k=H.a([$.a4,$.bp,$.aK],l)
H.a([],p)
o=new G.e("Santa Saws",k,n,o,0)
$.$get$c().h(0,o)
$.F8=o
o=H.a(["Santa Sleighs"],p)
n=$.ao
k=H.a([$.hw,$.aK],l)
H.a([],p)
o=new G.e("Santa Sleighs",k,n,o,0)
$.$get$c().h(0,o)
$.F9=o
o=H.a(["Santa Claws"],p)
n=$.ao
k=H.a([$.hw,$.mR],l)
H.a([],p)
o=new G.e("Santa Claws",k,n,o,0)
$.$get$c().h(0,o)
$.F7=o
o=H.a(["Sandy Claws"],p)
n=$.ao
k=H.a([$.hw,$.mR,$.aJ],l)
H.a([],p)
o=new G.e("Sandy Claws",k,n,o,0)
$.$get$c().h(0,o)
$.F6=o
o=H.a(["Silent Night"],p)
n=$.ao
k=H.a([$.hw,$.aA],l)
H.a([],p)
o=new G.e("Silent Night",k,n,o,0)
$.$get$c().h(0,o)
$.Fu=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.ao
k=H.a([$.b5,$.bZ],l)
H.a([],p)
o=new G.e("Ghost's",k,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["ghoul","mutant"],p)
n=$.x
k=H.a([$.bm,$.c_,$.bV],l)
H.a([],p)
o=new G.e("Mutant",k,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["skate","skateboard"],p)
n=$.t
k=H.a([$.az,$.D],l)
H.a([],p)
o=new G.e("Skateboard",k,n,o,0)
$.$get$c().h(0,o)
$.Fx=o
o=H.a(["microwave"],p)
n=$.t
k=H.a([$.c_,$.a3,$.aH],l)
H.a([],p)
o=new G.e("Microwave",k,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["orbital"],p)
n=$.t
k=H.a([$.c_,$.a3,$.aH,$.b1],l)
H.a([],p)
o=new G.e("Orbital",k,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a([],p)
n=$.t
k=H.a([$.an,$.a0],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.x3=o
o=H.a(["uranium"],p)
n=$.x
k=H.a([$.c_,$.aJ],l)
H.a([],p)
o=new G.e("Uranium",k,n,o,0)
$.$get$c().h(0,o)
$.G7=o
o=H.a(["mousepad","jar opener"],p)
n=$.t
k=H.a([$.O,$.c9],l)
H.a([],p)
o=new G.e("Mousepad",k,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["flint"],p)
n=$.x
k=H.a([$.aK,$.aJ],l)
H.a([],p)
o=new G.e("Sharpened Flint",k,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["flint"],p)
n=$.x
k=H.a([$.aZ,$.aJ],l)
H.a([],p)
o=new G.e("Pointed Flint",k,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["picnic"],p)
n=$.t
k=H.a([$.aP,$.aZ],l)
H.a([],p)
o=new G.e("Picnic",k,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["xtreme xplosion"],p)
n=$.K
k=H.a([$.az,$.bu],l)
H.a([],p)
o=new G.e("Xtreme Xplosion",k,n,o,0)
$.$get$c().h(0,o)
$.Gj=o
o=H.a(["lawn"],p)
n=$.t
k=H.a([$.aP,$.b8],l)
H.a([],p)
o=new G.e("Lawn",k,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["upholstered"],p)
n=$.x
k=H.a([$.Q,$.b8],l)
H.a([],p)
o=new G.e("Upholstered",k,n,o,0)
$.$get$c().h(0,o)
$.G6=o
o=H.a(["leather"],p)
n=$.x
k=H.a([$.bm,$.b8],l)
H.a([],p)
o=new G.e("Leather",k,n,o,0)
$.$get$c().h(0,o)
$.uy=o
o=H.a(["shag"],p)
n=$.x
k=H.a([$.ck,$.b8],l)
H.a([],p)
o=new G.e("Shag",k,n,o,0)
$.$get$c().h(0,o)
$.Fj=o
o=H.a(["loyal"],p)
n=$.K
k=H.a([$.an,$.aQ],l)
H.a([],p)
o=new G.e("Loyal",k,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["porcelain"],p)
n=$.x
k=H.a([$.aM,$.bT],l)
H.a([],p)
o=new G.e("Porcelain",k,n,o,0)
$.$get$c().h(0,o)
$.jA=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a6
k=H.a([$.be,$.bT],l)
H.a([],p)
o=new G.e("Pork Hollow",k,n,o,0)
$.$get$c().h(0,o)
$.EN=o
o=H.a(["n1nj4","katana"],p)
n=$.t
k=H.a([$.az,$.aK],l)
H.a([],p)
o=new G.e("Katana",k,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["chocolate"],p)
n=$.x
k=H.a([$.aQ,$.aH],l)
H.a([],p)
o=new G.e("Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["wrapped chocolate"],p)
n=$.x
k=H.a([$.aQ,$.aH,$.O,$.D],l)
H.a([],p)
o=new G.e("Wrapped Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["scratch-n-sniff"],p)
n=$.x
k=H.a([$.az,$.O],l)
H.a([],p)
o=new G.e("Scratch-n-sniff",k,n,o,0)
$.$get$c().h(0,o)
$.Ff=o
o=H.a(["mythril","orichalcum"],p)
n=$.x
k=H.a([$.a4,$.D],l)
H.a([],p)
o=new G.e("Mythril",k,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["titanium","steel"],p)
n=$.x
k=H.a([$.an,$.D],l)
H.a([],p)
o=new G.e("Titanium",k,n,o,0)
$.$get$c().h(0,o)
$.G0=o
o=H.a(["lead"],p)
n=$.x
k=H.a([$.cg,$.D],l)
H.a([],p)
o=new G.e("Lead",k,n,o,0)
$.$get$c().h(0,o)
$.xg=o
o=H.a(["satire","parody","onion"],p)
n=$.t
k=H.a([$.ax,$.b9],l)
H.a([],p)
o=new G.e("Satire",k,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["comedy gold"],p)
n=$.K
k=H.a([$.be,$.b9],l)
H.a([],p)
o=new G.e("Comedy Gold",k,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["dry","sensible chuckle"],p)
n=$.K
k=H.a([$.as,$.b9],l)
H.a([],p)
o=new G.e("Dry",k,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["polite"],p)
n=$.K
k=H.a([$.b8,$.ax],l)
H.a([],p)
o=new G.e("Polite",k,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["stradivarius"],p)
n=$.ao
k=H.a([$.as,$.be,$.Z,$.a7],l)
H.a([],p)
o=new G.e("Stradivarius",k,n,o,0)
$.$get$c().h(0,o)
$.FO=o
o=H.a(["scientistic"],p)
n=$.K
k=H.a([$.a0,$.ax],l)
H.a([],p)
o=new G.e("Scientistic",k,n,o,0)
$.$get$c().h(0,o)
$.Fe=o
o=H.a(["AI"],p)
n=$.t
k=H.a([$.a3,$.aB],l)
H.a([],p)
o=new G.e("AI",k,n,o,0)
$.$get$c().h(0,o)
$.mO=o
o=H.a(["robotic"],p)
n=$.J
k=H.a([$.D,$.a3,$.aB],l)
H.a([],p)
o=new G.e("Robotic",k,n,o,0)
$.$get$c().h(0,o)
$.uH=o
o=H.a(["shrapnel"],p)
n=$.t
k=H.a([$.Z,$.bu],l)
H.a([],p)
o=new G.e("Shrapnel",k,n,o,0)
$.$get$c().h(0,o)
$.Fq=o
o=H.a(["vocaloid"],p)
n=$.t
k=H.a([$.aB,$.a3,$.a7],l)
H.a([],p)
o=new G.e("Vocaloid",k,n,o,0)
$.$get$c().h(0,o)
$.G9=o
o=H.a(["*Hyun-ae"],p)
n=$.ao
k=H.a([$.aB,$.a3,$.aQ],l)
H.a([],p)
o=new G.e("*Hyun-ae",k,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["buckshot"],p)
n=$.t
k=H.a([$.Z,$.b1],l)
H.a([],p)
o=new G.e("Buckshot",k,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["cannon"],p)
n=$.t
k=H.a([$.cg,$.b1],l)
H.a([],p)
o=new G.e("Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["stationary"],p)
n=$.t
k=H.a([$.as,$.O],l)
H.a([],p)
o=new G.e("Stationary",k,n,o,0)
$.$get$c().h(0,o)
$.FM=o
o=H.a([],p)
n=$.t
k=H.a([$.aL,$.O],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a([],p)
n=$.t
k=H.a([$.D,$.b1],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["papercut"],p)
n=$.t
k=H.a([$.aK,$.O],l)
H.a([],p)
o=new G.e("Papercut",k,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["squeaky"],p)
n=$.J
k=H.a([$.an,$.c9],l)
H.a([],p)
o=new G.e("Squeaky",k,n,o,0)
$.$get$c().h(0,o)
$.FJ=o
o=H.a(["kazoo"],p)
n=$.t
k=H.a([$.ax,$.a7],l)
H.a([],p)
o=new G.e("Kazoo",k,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["bandaid"],p)
n=$.t
k=H.a([$.b0,$.O],l)
H.a([],p)
o=new G.e("Bandaid",k,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["gushers"],p)
n=$.t
k=H.a([$.b0,$.aH],l)
H.a([],p)
o=new G.e("Gushers",k,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["medic"],p)
n=$.t
k=H.a([$.b0,$.b1],l)
H.a([],p)
o=new G.e("Medic",k,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["sick nasty","ill"],p)
n=$.J
k=H.a([$.az,$.bO],l)
H.a([],p)
o=new G.e("Sick Nasty",k,n,o,0)
$.$get$c().h(0,o)
$.Fs=o
o=H.a(["gilded","gold leaf"],p)
n=$.x
k=H.a([$.D,$.Z],l)
H.a([],p)
o=new G.e("Gilded",k,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["charging","power cord"],p)
n=$.t
k=H.a([$.aP,$.a3],l)
H.a([],p)
o=new G.e("Charging",k,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["safety"],p)
n=$.t
k=H.a([$.c9,$.aK],l)
H.a([],p)
o=new G.e("Rubber Safety",k,n,o,0)
$.$get$c().h(0,o)
$.F4=o
o=H.a(["safety"],p)
n=$.t
k=H.a([$.aP,$.aK],l)
H.a([],p)
o=new G.e("Plastic Safety",k,n,o,0)
$.$get$c().h(0,o)
$.F5=o
o=H.a(["thunderous","thor's"],p)
n=$.K
k=H.a([$.aT,$.a3],l)
H.a([],p)
o=new G.e("Thunderous",k,n,o,0)
$.$get$c().h(0,o)
$.FZ=o
o=H.a(["screeching","dial up"],p)
n=$.K
k=H.a([$.aT,$.a3,$.a0],l)
H.a([],p)
o=new G.e("Screeching",k,n,o,0)
$.$get$c().h(0,o)
$.Fh=o
o=H.a(["mirrored","reflective"],p)
n=$.t
k=H.a([$.b4,$.D],l)
H.a([],p)
o=new G.e("Mirrored",k,n,o,0)
$.$get$c().h(0,o)
$.mX=o
o=H.a(["far seeing","sighted"],p)
n=$.t
k=H.a([$.b4,$.aJ,$.a4],l)
H.a([],p)
o=new G.e("Far Seeing",k,n,o,0)
$.$get$c().h(0,o)
$.x2=o
o=H.a(["disabling","non lethal"],p)
n=$.t
k=H.a([$.c9,$.b1],l)
H.a([],p)
o=new G.e("Nonlethal",k,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["fashionable"],p)
n=$.t
k=H.a([$.aM,$.as],l)
H.a([],p)
o=new G.e("Fashionable",k,n,o,0)
$.$get$c().h(0,o)
$.x5=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.b9,$.az],l)
H.a([],p)
o=new G.e("Ironic Type 2",k,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.bU,$.b9],l)
H.a([],p)
o=new G.e("Ironic Type 3",k,n,o,0)
$.$get$c().h(0,o)
$.mV=o
o=H.a(["post-ironic"],p)
n=$.K
k=H.a([$.ax,$.az,$.as],l)
H.a([],p)
o=new G.e("Post Ironic",k,n,o,0)
$.$get$c().h(0,o)
$.EP=o
o=H.a(["monstrous"],p)
n=$.K
k=H.a([$.bV,$.aT,$.b5],l)
H.a([],p)
o=new G.e("Monstrous",k,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.t
k=H.a([$.b1,$.az,$.as],l)
H.a([],p)
o=new G.e("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$c().h(0,o)
$.F0=o
o=H.a(["golden"],p)
n=$.x
k=H.a([$.D,$.be],l)
H.a([],p)
o=new G.e("Golden",k,n,o,0)
$.$get$c().h(0,o)
$.uu=o
o=H.a(["platinum"],p)
n=$.x
k=H.a([$.b_,$.D],l)
H.a([],p)
o=new G.e("Platinum",k,n,o,0)
$.$get$c().h(0,o)
$.mZ=o
o=H.a(["horseshoe"],p)
n=$.t
k=H.a([$.bF,$.D],l)
H.a([],p)
o=new G.e("Horseshoe",k,n,o,0)
$.$get$c().h(0,o)
$.uw=o
o=H.a(["felt"],p)
n=$.t
k=H.a([$.Q,$.ck],l)
H.a([],p)
o=new G.e("Felt",k,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["marble"],p)
n=$.x
k=H.a([$.aJ,$.as],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.xh=o
o=H.a(["marble"],p)
n=$.x
k=H.a([$.aJ,$.cg],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["glitched"],p)
n=$.J
k=H.a([$.bs,$.a3],l)
H.a([],p)
o=new G.e("Glitched",k,n,o,0)
$.$get$c().h(0,o)
$.x8=o
o=H.a(["debugging"],p)
n=$.t
k=H.a([$.b0,$.a3],l)
H.a([],p)
o=new G.e("Debugging",k,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.t
k=H.a([$.D,$.aT,$.a7],l)
H.a([],p)
o=new G.e("Metalic",k,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["Simulacrum"],p)
n=$.K
k=H.a([$.aB,$.ax],l)
H.a([],p)
o=new G.e("Simulacrum",k,n,o,0)
$.$get$c().h(0,o)
$.Fw=o
o=H.a(["Imitation"],p)
n=$.t
k=H.a([$.aH,$.ax],l)
H.a([],p)
o=new G.e("Imitation",k,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["Placebo"],p)
n=$.t
k=H.a([$.b0,$.ax],l)
H.a([],p)
o=new G.e("Placebo",k,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["counterfeit"],p)
n=$.t
k=H.a([$.be,$.ax],l)
H.a([],p)
o=new G.e("Counterfeit",k,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.az,$.aN,$.b9],l)
H.a([],p)
o=new G.e("Surreal1",k,n,o,0)
$.$get$c().h(0,o)
$.FQ=o
o=H.a(["Brainy"],p)
n=$.K
k=H.a([$.a0,$.bm],l)
H.a([],p)
o=new G.e("Brainy",k,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["Incendiary"],p)
n=$.t
k=H.a([$.aI,$.bu],l)
H.a([],p)
o=new G.e("Incendiary",k,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["C-4"],p)
n=$.x
k=H.a([$.bu,$.aP],l)
H.a([],p)
o=new G.e("C-4",k,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["fae"],p)
n=$.t
k=H.a([$.a4,$.b_,$.bs],l)
H.a([],p)
o=new G.e("Fae",k,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["Plutonium"],p)
n=$.x
k=H.a([$.D,$.c_],l)
H.a([],p)
o=new G.e("Plutonium",k,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["Lithium"],p)
n=$.x
k=H.a([$.D,$.a3],l)
H.a([],p)
o=new G.e("Lithium",k,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["Molten"],p)
n=$.x
k=H.a([$.D,$.aI],l)
H.a([],p)
o=new G.e("Molten",k,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.x
k=H.a([$.aJ,$.aI],l)
H.a([],p)
o=new G.e("Magma",k,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["Rusty"],p)
n=$.J
k=H.a([$.D,$.bU],l)
H.a([],p)
o=new G.e("Rusty",k,n,o,0)
$.$get$c().h(0,o)
$.F3=o
o=H.a(["Fonzie"],p)
n=$.t
k=H.a([$.aK,$.az,$.as],l)
H.a([],p)
o=new G.e("Fonzie",k,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["Romcom"],p)
n=$.t
k=H.a([$.aQ,$.b9],l)
H.a([],p)
o=new G.e("Romcom",k,n,o,0)
$.$get$c().h(0,o)
$.F_=o
o=H.a(["Alluring"],p)
n=$.t
k=H.a([$.aM,$.b_],l)
H.a([],p)
o=new G.e("Alluring",k,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["Masquerade"],p)
n=$.t
k=H.a([$.aM,$.aA],l)
H.a([],p)
o=new G.e("Masquerade",k,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.t
k=H.a([$.aJ,$.bm],l)
H.a([],p)
o=new G.e("Stoneskin",k,n,o,0)
$.$get$c().h(0,o)
$.FN=o
o=H.a(["Psionic"],p)
n=$.t
k=H.a([$.a4,$.a0],l)
H.a([],p)
o=new G.e("Psionic",k,n,o,0)
$.$get$c().h(0,o)
$.ES=o
o=H.a(["Dwarven"],p)
n=$.t
k=H.a([$.a4,$.aJ],l)
H.a([],p)
o=new G.e("Dwarven",k,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["Elemental","Animated"],p)
n=$.x
k=H.a([$.a4,$.aB],l)
H.a([],p)
o=new G.e("Elemental",k,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["Gourmet"],p)
n=$.K
k=H.a([$.aH,$.as],l)
H.a([],p)
o=new G.e("Gourmet",k,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["Stained Glass"],p)
n=$.x
k=H.a([$.b4,$.aM,$.be],l)
H.a([],p)
o=new G.e("Stained Glass",k,n,o,0)
$.$get$c().h(0,o)
$.FK=o
o=H.a(["Gauze"],p)
n=$.t
k=H.a([$.b0,$.Q],l)
H.a([],p)
o=new G.e("Gauze",k,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["Locked"],p)
n=$.J
k=H.a([$.bn,$.bt],l)
H.a([],p)
o=new G.e("Locked",k,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["Etched"],p)
n=$.t
k=H.a([$.aJ,$.O],l)
H.a([],p)
o=new G.e("Etched",k,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["Papyrus"],p)
n=$.x
k=H.a([$.O,$.b7],l)
H.a([],p)
o=new G.e("Papyrus",k,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["film"],p)
n=$.t
k=H.a([$.O,$.aP],l)
H.a([],p)
o=new G.e("Film",k,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["Saucey"],p)
n=$.x
k=H.a([$.bs,$.bt,$.bV],l)
H.a([],p)
o=new G.e("Saucey",k,n,o,0)
$.$get$c().h(0,o)
$.Fb=o
o=H.a(["Lottery"],p)
n=$.t
k=H.a([$.O,$.bF],l)
H.a([],p)
o=new G.e("Lottery",k,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["Blindfolded"],p)
n=$.t
k=H.a([$.aA,$.Q],l)
H.a([],p)
o=new G.e("Blindfolded",k,n,o,0)
$.$get$c().h(0,o)
$.wZ=o
o=H.a(["Possessed"],p)
n=$.J
k=H.a([$.bZ,$.bm],l)
H.a([],p)
o=new G.e("Possessed",k,n,o,0)
$.$get$c().h(0,o)
$.EO=o
o=H.a(["Infernal"],p)
n=$.K
k=H.a([$.bZ,$.aI],l)
H.a([],p)
o=new G.e("Infernal",k,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.t
k=H.a([$.Z,$.aW,$.uD,$.aB],l)
H.a([],p)
o=new G.e("Geppetto",k,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["Abominable"],p)
n=$.K
k=H.a([$.bm,$.bs],l)
H.a([],p)
o=new G.e("Abominable",k,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Ashen"],p)
n=$.t
k=H.a([$.aQ,$.aO],l)
H.a([],p)
o=new G.e("Ashen",k,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["Pale"],p)
n=$.t
k=H.a([$.aQ,$.br],l)
H.a([],p)
o=new G.e("Pale",k,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["Pitch"],p)
n=$.t
k=H.a([$.aQ,$.bt],l)
H.a([],p)
o=new G.e("Pitch",k,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["Lit"],p)
n=$.K
k=H.a([$.az,$.aI],l)
H.a([],p)
o=new G.e("Lit",k,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["Hypnotizing"],p)
n=$.t
k=H.a([$.a4,$.br],l)
H.a([],p)
o=new G.e("Hypnotizing",k,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["Tranquilizing"],p)
n=$.t
k=H.a([$.br,$.bn],l)
H.a([],p)
o=new G.e("Tranquilizing",k,n,o,0)
$.$get$c().h(0,o)
$.G3=o
o=H.a([],p)
n=$.t
k=H.a([$.br,$.bt],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["Ghost Rider's"],p)
n=$.ao
k=H.a([$.hv,$.aI,$.bZ],l)
H.a([],p)
o=new G.e("Ghost Rider",k,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["Logical"],p)
n=$.K
k=H.a([$.a0,$.bp],l)
H.a([],p)
o=new G.e("Logical",k,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["Duelist's"],p)
n=$.ao
k=H.a([$.b1,$.as],l)
H.a([],p)
o=new G.e("Duelist's",k,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["Silenced"],p)
n=$.J
k=H.a([$.b1,$.aA],l)
H.a([],p)
o=new G.e("Silenced",k,n,o,0)
$.$get$c().h(0,o)
$.xp=o
o=H.a(["Deudly"],p)
n=$.J
k=H.a([$.b1,$.bU],l)
H.a([],p)
o=new G.e("Deudly",k,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["Screaming"],p)
n=$.J
k=H.a([$.aT,$.b5],l)
H.a([],p)
o=new G.e("Screaming",k,n,o,0)
$.$get$c().h(0,o)
$.Fg=o
o=H.a(["Cacophonous"],p)
n=$.K
k=H.a([$.bV,$.a7],l)
H.a([],p)
o=new G.e("Cacophonous",k,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["Sublime"],p)
n=$.K
k=H.a([$.bV,$.aM],l)
H.a([],p)
o=new G.e("Sublime",k,n,o,0)
$.$get$c().h(0,o)
$.FP=o
o=H.a(["Masterwork"],p)
n=$.x
k=H.a([$.aW,$.be],l)
H.a([],p)
o=new G.e("Masterwork",k,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["BroodFester"],p)
n=$.t
k=H.a([$.aB,$.b5,$.bs,$.a4],l)
H.a([],p)
o=new G.e("BroodFester",k,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["[REDACTED]"],p)
n=$.t
k=H.a([$.bs,$.aA],l)
H.a([],p)
o=new G.e("[REDACTED]",k,n,o,0)
$.$get$c().h(0,o)
$.EY=o
o=H.a(["Pop Rocks"],p)
n=$.t
k=H.a([$.aH,$.bu],l)
H.a([],p)
o=new G.e("Pop Rocks",k,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["Disguised"],p)
n=$.J
k=H.a([$.aA,$.ax],l)
H.a([],p)
o=new G.e("Disguised",k,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["Haunted"],p)
n=$.J
k=H.a([$.aN,$.bZ],l)
H.a([],p)
o=new G.e("Haunted",k,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["Cognitohazardous"],p)
n=$.J
k=H.a([$.bs,$.a0],l)
H.a([],p)
o=new G.e("Cognitohazardous",k,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["Staticy"],p)
n=$.J
k=H.a([$.aN,$.a3],l)
H.a([],p)
o=new G.e("Staticy",k,n,o,0)
$.$get$c().h(0,o)
$.FL=o
o=H.a(["Jadite"],p)
n=$.t
k=H.a([$.b4,$.c_],l)
H.a([],p)
o=new G.e("Jadite",k,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Tickling"],p)
n=$.t
k=H.a([$.b9,$.aN],l)
H.a([],p)
o=new G.e("Tickling",k,n,o,0)
$.$get$c().h(0,o)
$.G_=o
o=H.a(["Composite"],p)
n=$.t
k=H.a([$.D,$.bT],l)
H.a([],p)
o=new G.e("Composite",k,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["High-Powered"],p)
n=$.J
k=H.a([$.bu,$.b1],l)
H.a([],p)
o=new G.e("High-Powered",k,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["Concussive"],p)
n=$.t
k=H.a([$.bu,$.an],l)
H.a([],p)
o=new G.e("Concussive",k,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["Down"],p)
n=$.x
k=H.a([$.b8,$.bB],l)
H.a([],p)
o=new G.e("Down",k,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Prickly"],p)
n=$.x
k=H.a([$.aN,$.aZ],l)
H.a([],p)
o=new G.e("Prickly",k,n,o,0)
$.$get$c().h(0,o)
$.ER=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.t
k=H.a([$.aN,$.aA,$.a3],l)
H.a([],p)
o=new G.e("Deep-Web",k,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.x
k=H.a([$.aZ,$.aK],l)
H.a([],p)
o=new G.e("Jagged",k,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["Nanofiber"],p)
n=$.x
k=H.a([$.Q,$.a0],l)
H.a([],p)
o=new G.e("Nanofiber",k,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["Clanging"],p)
n=$.t
k=H.a([$.D,$.aT],l)
H.a([],p)
o=new G.e("Clanging",k,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["Silver"],p)
n=$.x
k=H.a([$.D,$.as],l)
H.a([],p)
o=new G.e("Silver",k,n,o,0)
$.$get$c().h(0,o)
$.Fv=o
o=H.a(["Withered"],p)
n=$.J
k=H.a([$.aO,$.b7],l)
H.a([],p)
o=new G.e("Withered",k,n,o,0)
$.$get$c().h(0,o)
$.Gf=o
o=H.a(["Shattered"],p)
n=$.J
k=H.a([$.b4,$.bU],l)
H.a([],p)
o=new G.e("Shattered",k,n,o,0)
$.$get$c().h(0,o)
$.Fm=o
o=H.a(["Miner's"],p)
n=$.ao
k=H.a([$.aJ,$.D],l)
H.a([],p)
o=new G.e("Miner's",k,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["Singing"],p)
n=$.t
k=H.a([$.a7,$.aB],l)
H.a([],p)
o=new G.e("Singing",k,n,o,0)
$.$get$c().h(0,o)
$.Ft=o
o=H.a(["Mitochondrial"],p)
n=$.t
k=H.a([$.bm,$.a3],l)
H.a([],p)
o=new G.e("Mitochondrial",k,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["Blackout","EMP"],p)
n=$.t
k=H.a([$.aA,$.a3],l)
H.a([],p)
o=new G.e("Blackout",k,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["Asbestos"],p)
n=$.x
k=H.a([$.aJ,$.bO],l)
H.a([],p)
o=new G.e("Asbestos",k,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["Mercurial"],p)
n=$.x
k=H.a([$.bO,$.D],l)
H.a([],p)
o=new G.e("Mercurial",k,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["Bulletproof"],p)
n=$.x
k=H.a([$.Q,$.an],l)
H.a([],p)
o=new G.e("Bulletproof",k,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["Cotton"],p)
n=$.x
k=H.a([$.b7,$.Q],l)
H.a([],p)
o=new G.e("Cotton",k,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.t
k=H.a([$.bt,$.b_],l)
H.a([],p)
o=new G.e("Blinding",k,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["Brilliant"],p)
n=$.K
k=H.a([$.b_,$.a0],l)
H.a([],p)
o=new G.e("Brilliant",k,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Offensive"],p)
n=$.K
k=H.a([$.bt,$.a0],l)
H.a([],p)
o=new G.e("Offensive",k,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["Poached"],p)
n=$.J
k=H.a([$.bm,$.be],l)
H.a([],p)
o=new G.e("Poached",k,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["Tapestry"],p)
n=$.x
k=H.a([$.Q,$.aM],l)
H.a([],p)
o=new G.e("Tapestry",k,n,o,0)
$.$get$c().h(0,o)
$.FS=o
o=H.a(["Itchy"],p)
n=$.K
k=H.a([$.Q,$.aN],l)
H.a([],p)
o=new G.e("Itchy",k,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["Wishbone"],p)
n=$.x
k=H.a([$.bF,$.ba],l)
H.a([],p)
o=new G.e("Wishbone",k,n,o,0)
$.$get$c().h(0,o)
$.Ge=o
o=H.a(["Rattling"],p)
n=$.J
k=H.a([$.aT,$.ba],l)
H.a([],p)
o=new G.e("Rattling",k,n,o,0)
$.$get$c().h(0,o)
$.EW=o
o=H.a(["Cranial"],p)
n=$.x
k=H.a([$.a0,$.ba],l)
H.a([],p)
o=new G.e("Cranial",k,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["Humerus"],p)
n=$.x
k=H.a([$.b9,$.ba],l)
H.a([],p)
o=new G.e("Humerus",k,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["Massage"],p)
n=$.t
k=H.a([$.b0,$.b8],l)
H.a([],p)
o=new G.e("Massage",k,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["Pestersome","Irksome"],p)
n=$.K
k=H.a([$.aT,$.bt],l)
H.a([],p)
o=new G.e("Pestersome",k,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["Shockwave"],p)
n=$.t
k=H.a([$.aT,$.bu],l)
H.a([],p)
o=new G.e("Shockwave",k,n,o,0)
$.$get$c().h(0,o)
$.Fp=o
o=H.a(["Antivenom"],p)
n=$.t
k=H.a([$.bO,$.b0],l)
H.a([],p)
o=new G.e("Antivenom",k,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.x
k=H.a([$.aI,$.a4],l)
H.a([],p)
o=new G.e("Will O Wisp",k,n,o,0)
$.$get$c().h(0,o)
$.Gb=o
o=H.a(["Fiberglass"],p)
n=$.x
k=H.a([$.Q,$.b4],l)
H.a([],p)
o=new G.e("Fiberglass",k,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["Skull"],p)
n=$.x
k=H.a([$.ba,$.b5],l)
H.a([],p)
o=new G.e("Skull",k,n,o,0)
$.$get$c().h(0,o)
$.Fz=o
o=H.a(["Enchanted"],p)
n=$.J
k=H.a([$.a4,$.bF],l)
H.a([],p)
o=new G.e("Enchanted",k,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["Berserker's"],p)
n=$.ao
k=H.a([$.a4,$.bt],l)
H.a([],p)
o=new G.e("Berserker's",k,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["Clerical"],p)
n=$.ao
k=H.a([$.a4,$.b0],l)
H.a([],p)
o=new G.e("Clerical",k,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["Cauterizing"],p)
n=$.t
k=H.a([$.b0,$.aI],l)
H.a([],p)
o=new G.e("Cauterizing",k,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["X-Ray"],p)
n=$.t
k=H.a([$.c_,$.b_],l)
H.a([],p)
o=new G.e("X-Ray",k,n,o,0)
$.$get$c().h(0,o)
$.Gi=o
o=H.a(["Clever"],p)
n=$.K
k=H.a([$.a0,$.bF],l)
H.a([],p)
o=new G.e("Clever",k,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["Fireplace"],p)
n=$.t
k=H.a([$.b8,$.aI],l)
H.a([],p)
o=new G.e("Fireplace",k,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["Crackling"],p)
n=$.J
k=H.a([$.aT,$.aI],l)
H.a([],p)
o=new G.e("Crackling",k,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["Thumping"],p)
n=$.J
k=H.a([$.aT,$.cg],l)
H.a([],p)
o=new G.e("Thumping",k,n,o,0)
$.$get$c().h(0,o)
$.FY=o
o=H.a(["Shrieking","Banshee"],p)
n=$.J
k=H.a([$.bZ,$.aT],l)
H.a([],p)
o=new G.e("Banshee",k,n,o,0)
$.$get$c().h(0,o)
$.Fr=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.b9,$.bs],l)
H.a([],p)
o=new G.e("Surreal2",k,n,o,0)
$.$get$c().h(0,o)
$.FR=o
o=H.a(["Aloe","Willowbark"],p)
n=$.t
k=H.a([$.b0,$.b7],l)
H.a([],p)
o=new G.e("Aloe",k,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["Rose"],p)
n=$.t
k=H.a([$.aQ,$.b7],l)
H.a([],p)
o=new G.e("Rose",k,n,o,0)
$.$get$c().h(0,o)
$.F1=o
o=H.a(["Knock Knock"],p)
n=$.t
k=H.a([$.b9,$.an],l)
H.a([],p)
o=new G.e("Knock Knock",k,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["Lifesteal"],p)
n=$.t
k=H.a([$.a4,$.bO],l)
H.a([],p)
o=new G.e("Lifesteal",k,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["Tragic"],p)
n=$.t
k=H.a([$.aM,$.aO],l)
H.a([],p)
o=new G.e("Tragic",k,n,o,0)
$.$get$c().h(0,o)
$.G2=o
o=H.a(["Slapstick"],p)
n=$.t
k=H.a([$.aK,$.b9],l)
H.a([],p)
o=new G.e("Slapstick",k,n,o,0)
$.$get$c().h(0,o)
$.FA=o
o=H.a(["Gross Out"],p)
n=$.t
k=H.a([$.bV,$.b9],l)
H.a([],p)
o=new G.e("Gross Out",k,n,o,0)
$.$get$c().h(0,o)
$.xa=o
o=H.a(["Flowery"],p)
n=$.x
k=H.a([$.aM,$.b7],l)
H.a([],p)
o=new G.e("Flowery",k,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["Poison Ivy"],p)
n=$.x
k=H.a([$.bO,$.b7],l)
H.a([],p)
o=new G.e("Poison Ivy",k,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.J
k=H.a([$.a4,$.bB],l)
H.a([],p)
o=new G.e("Winged",k,n,o,0)
$.$get$c().h(0,o)
$.Gc=o
o=H.a(["Forbidden Fruit"],p)
n=$.t
k=H.a([$.b7,$.aH,$.aO],l)
H.a([],p)
o=new G.e("Forbidden Fruit",k,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["Lawful"],p)
n=$.K
k=H.a([$.bn,$.aB],l)
H.a([],p)
o=new G.e("Lawful",k,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["Chaotic"],p)
n=$.K
k=H.a([$.bt,$.aB],l)
H.a([],p)
o=new G.e("Chaotic",k,n,o,0)
$.$get$c().h(0,o)
$.uq=o
o=H.a(["Hypothermic"],p)
n=$.J
k=H.a([$.aO,$.bp],l)
H.a([],p)
o=new G.e("Hypothermic",k,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Hyperthermic"],p)
n=$.J
k=H.a([$.aO,$.aI],l)
H.a([],p)
o=new G.e("Hyperthermic",k,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["Shackled"],p)
n=$.J
k=H.a([$.bn,$.cg],l)
H.a([],p)
o=new G.e("Shackled",k,n,o,0)
$.$get$c().h(0,o)
$.Fi=o
o=H.a(["Poetic"],p)
n=$.K
k=H.a([$.a0,$.aQ],l)
H.a([],p)
o=new G.e("Poetic",k,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["Holographic"],p)
n=$.x
k=H.a([$.b_,$.a0,$.b4,$.a3],l)
H.a([],p)
o=new G.e("Holographic",k,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["Casket","Coffin"],p)
n=$.x
k=H.a([$.Z,$.aO],l)
H.a([],p)
o=new G.e("Casket",k,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["Spectral"],p)
n=$.x
k=H.a([$.bZ,$.a4],l)
H.a([],p)
o=new G.e("Spectral",k,n,o,0)
$.$get$c().h(0,o)
$.FG=o
o=H.a(["Phoenix"],p)
n=$.x
k=H.a([$.aI,$.bB],l)
H.a([],p)
o=new G.e("Phoenix",k,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["Tattered"],p)
n=$.J
k=H.a([$.Q,$.aO],l)
H.a([],p)
o=new G.e("Tattered",k,n,o,0)
$.$get$c().h(0,o)
$.FV=o
o=H.a(["Woodwind","Reed"],p)
n=$.t
k=H.a([$.a7,$.Z],l)
H.a([],p)
o=new G.e("Woodwind",k,n,o,0)
$.$get$c().h(0,o)
$.Gh=o
o=H.a(["Bone Hurting"],p)
n=$.t
k=H.a([$.aN,$.ba],l)
H.a([],p)
o=new G.e("Bone Hurting",k,n,o,0)
$.$get$c().h(0,o)
$.mP=o
o=H.a(["Bone Healing:"],p)
n=$.t
k=H.a([$.b0,$.ba],l)
H.a([],p)
o=new G.e("Bone Healing:",k,n,o,0)
$.$get$c().h(0,o)
$.un=o
o=H.a(["Calcium"],p)
n=$.x
k=H.a([$.ba,$.b0,$.aH],l)
H.a([],p)
o=new G.e("Calcium",k,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["Fleece"],p)
n=$.x
k=H.a([$.Q,$.aI],l)
H.a([],p)
o=new G.e("Fleece",k,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["Potted"],p)
n=$.x
k=H.a([$.bT,$.b7],l)
H.a([],p)
o=new G.e("Potted",k,n,o,0)
$.$get$c().h(0,o)
$.EQ=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.x
k=H.a([$.D,$.aH],l)
H.a([],p)
o=new G.e("Canned",k,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["Diseased"],p)
n=$.J
k=H.a([$.aO,$.bm],l)
H.a([],p)
o=new G.e("Diseased",k,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Porcupine"],p)
n=$.x
k=H.a([$.aZ,$.ck],l)
H.a([],p)
o=new G.e("Porcupine",k,n,o,0)
$.$get$c().h(0,o)
$.EM=o
o=H.a(["Fanged"],p)
n=$.J
k=H.a([$.ba,$.aZ],l)
H.a([],p)
o=new G.e("Fanged",k,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["Basalt"],p)
n=$.x
k=H.a([$.aJ,$.aA],l)
H.a([],p)
o=new G.e("Basalt",k,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Obsidian"],p)
n=$.x
k=H.a([$.b4,$.aA],l)
H.a([],p)
o=new G.e("Obsidian",k,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["Fenestrated"],p)
n=$.x
k=H.a([$.b4,$.Z],l)
H.a([],p)
o=new G.e("Fenestrated",k,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["Plexiglass"],p)
n=$.x
k=H.a([$.b4,$.aP],l)
H.a([],p)
o=new G.e("Plexiglass",k,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["Ceramic Wrap"],p)
n=$.t
k=H.a([$.bT,$.O],l)
H.a([],p)
o=new G.e("Ceramic Wrap",k,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["Fungal"],p)
n=$.x
k=H.a([$.b7,$.bV],l)
H.a([],p)
o=new G.e("Fungal",k,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["Thorny"],p)
n=$.J
k=H.a([$.b7,$.aZ],l)
H.a([],p)
o=new G.e("Thorny",k,n,o,0)
$.$get$c().h(0,o)
$.FX=o
o=H.a(["Bulbed"],p)
n=$.J
k=H.a([$.b7,$.an],l)
H.a([],p)
o=new G.e("Bulbed",k,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["Glass Cannon"],p)
n=$.t
k=H.a([$.b4,$.b1],l)
H.a([],p)
o=new G.e("Glass Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["Caoutchouc"],p)
n=$.t
k=H.a([$.b7,$.c9],l)
H.a([],p)
o=new G.e("Caoutchouc",k,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["Cellulose"],p)
n=$.x
k=H.a([$.b7,$.aP],l)
H.a([],p)
o=new G.e("Cellulose",k,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["Horrorcore"],p)
n=$.t
k=H.a([$.a7,$.b5],l)
H.a([],p)
o=new G.e("Horrorcore",k,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["Nightcore"],p)
n=$.t
k=H.a([$.bs,$.a7],l)
H.a([],p)
o=new G.e("Nightcore",k,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["Crazy Bus"],p)
n=$.t
k=H.a([$.bs,$.a3,$.a7],l)
H.a([],p)
o=new G.e("Crazy Bus",k,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["Burdock"],p)
n=$.x
k=H.a([$.b7,$.ck],l)
H.a([],p)
o=new G.e("Burdock",k,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Necrotic"],p)
n=$.J
k=H.a([$.ba,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.x
k=H.a([$.ba,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.J
k=H.a([$.ba,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.t
k=H.a([$.ba,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.x
k=H.a([$.ba,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.t
k=H.a([$.ba,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.K
k=H.a([$.Z,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.x
k=H.a([$.Z,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.x
k=H.a([$.Z,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.J
k=H.a([$.Z,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.x
k=H.a([$.Z,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.x
k=H.a([$.Z,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.t
k=H.a([$.Z,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.x
k=H.a([$.Z,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.t
k=H.a([$.Z,$.bF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.t
k=H.a([$.Z,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.ao
k=H.a([$.Z,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.x
k=H.a([$.Z,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.x
k=H.a([$.Z,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.x
k=H.a([$.Z,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.t
k=H.a([$.Z,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.x
k=H.a([$.aP,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.t
k=H.a([$.O,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.x
k=H.a([$.O,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.t
k=H.a([$.O,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.t
k=H.a([$.Q,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.x
k=H.a([$.aJ,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.t
k=H.a([$.aJ,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.x
k=H.a([$.aJ,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.x
k=H.a([$.aJ,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.x
k=H.a([$.aJ,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.x
k=H.a([$.aJ,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.x
k=H.a([$.aJ,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.x
k=H.a([$.aJ,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.J
k=H.a([$.aJ,$.ck],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.J
k=H.a([$.a0,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.J
k=H.a([$.Q,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.t
k=H.a([$.Q,$.bB],l)
H.a([],p)
$.$get$c().h(0,new G.e("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.K
k=H.a([$.Q,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.t
k=H.a([$.Q,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.t
k=H.a([$.Q,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.K
k=H.a([$.Q,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.J
k=H.a([$.Q,$.cg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.K
k=H.a([$.Q,$.bF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.K
k=H.a([$.Q,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.x
k=H.a([$.Q,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.e("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.x
k=H.a([$.Q,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.e("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.t
k=H.a([$.Q,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.x
k=H.a([$.Q,$.bO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.x
k=H.a([$.Q,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.x
k=H.a([$.Q,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.x
k=H.a([$.Q,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.e("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.x
k=H.a([$.Q,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.x
k=H.a([$.Q,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.x
k=H.a([$.Q,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.x
k=H.a([$.Q,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.x
k=H.a([$.Q,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.ao
k=H.a([$.a0,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.x
k=H.a([$.a4,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.x
k=H.a([$.b7,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.x
k=H.a([$.aP,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.x
k=H.a([$.P,$.H],l)
H.a([],p)
$.$get$c().h(0,new G.e("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.K
k=H.a([$.a0,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.K
k=H.a([$.aW,$.ax,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.x
k=H.a([$.bs,$.bB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.t
k=H.a([$.bs,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.ao
k=H.a([$.bs,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.ao
k=H.a([$.a_,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.ao
k=H.a([$.a0,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.x
k=H.a([$.a_,$.aP,$.br,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.t
k=H.a([$.a_,$.dq,$.Z,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.ao
k=H.a([$.aA,$.a4,$.aW,$.aN,$.b5],l)
H.a([],p)
o=new G.e("Queenly",k,n,o,0)
$.$get$c().h(0,o)
$.ET=o
o=H.a(["Kingly"],p)
n=$.ao
k=H.a([$.b5,$.an,$.cg,$.a4,$.aW],l)
H.a([],p)
o=new G.e("Kingly",k,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["Jack"],p)
n=$.ao
k=H.a([$.aZ,$.aK,$.D,$.aA],l)
H.a([],p)
o=new G.e("Jack",k,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["Codpiece","Codtier"],p)
n=$.t
k=H.a([$.a_,$.ax,$.Z,$.P,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.t
k=H.a([$.a_,$.aL,$.O,$.D,$.a0,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.t
k=H.a([$.a_,$.aL,$.O,$.a0,$.P,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.t
k=H.a([$.a_,$.aO,$.O,$.a0,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.ao
k=H.a([$.a_,$.b_,$.D,$.aZ,$.aK,$.es],l)
H.a([],p)
$.$get$c().h(0,new G.e("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.ao
k=H.a([$.a_,$.O,$.bt,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.ao
k=H.a([$.a_,$.a4,$.Q,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.ao
k=H.a([$.a_,$.aN,$.ba,$.D,$.fl,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.ao
k=H.a([$.a_,$.aJ,$.as,$.hu,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.J
k=H.a([$.a_,$.Q,$.be,$.aM,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.t
k=H.a([$.a_,$.D,$.be,$.aM,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.t
k=H.a([$.a_,$.aP,$.a3,$.aA,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.t
k=H.a([$.a_,$.Q,$.a0,$.a4,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.t
k=H.a([$.a_,$.Q,$.a0,$.aM,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.J
k=$.a_
j=$.O
i=$.a0
i=H.a([k,j,i,$.aL,i,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.x
i=H.a([$.a_,$.aM,$.bT,$.an,$.er,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.ao
i=H.a([$.a_,$.aL,$.O,$.bt,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.ao
i=H.a([$.a4,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.t
i=H.a([$.O,$.a0,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.t
i=H.a([$.a_,$.D,$.aA,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.J
i=H.a([$.a_,$.D,$.b4,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.t
i=H.a([$.a_,$.ax,$.Z,$.az,$.br,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.t
i=H.a([$.a_,$.aI,$.D,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.t
i=H.a([$.a_,$.a3,$.O,$.aL,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.t
i=H.a([$.a_,$.Z,$.aB,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.ao
i=H.a([$.a_,$.aW,$.bB,$.b_,$.a7,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.x
i=H.a([$.a_,$.b0,$.b4,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.x
i=H.a([$.a_,$.b_,$.bF,$.aJ,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.ao
i=H.a([$.a_,$.aN,$.aJ,$.as,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.ao
i=H.a([$.a_,$.aH,$.bt,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.ao
i=H.a([$.a_,$.D,$.a7,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.K
i=H.a([$.a_,$.b4,$.c_,$.b_,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.x
i=H.a([$.D,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.ao
i=H.a([$.D,$.bB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.x
i=H.a([$.D,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.x
i=H.a([$.D,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.J
i=H.a([$.D,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.J
i=H.a([$.D,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.x
i=H.a([$.D,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.x
i=H.a([$.bT,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.x
i=H.a([$.bT,$.c9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.K
i=H.a([$.bT,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.x
i=H.a([$.bT,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.x
i=H.a([$.bT,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.x
i=H.a([$.bT,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.x
i=H.a([$.bT,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.J
i=H.a([$.bT,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.x
i=H.a([$.bT,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.J
i=H.a([$.bT,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.K
i=H.a([$.bU,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.e("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.J
i=H.a([$.bU,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.K
i=H.a([$.bU,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.J
i=H.a([$.bU,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.x
i=H.a([$.bU,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.J
i=H.a([$.bU,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.ao
i=H.a([$.bU,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.e("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.x
i=H.a([$.bU,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.x
i=H.a([$.bU,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.x
i=H.a([$.bU,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.ao
i=H.a([$.Z,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.x
i=H.a([$.Z,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.x
i=H.a([$.Z,$.c9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.x
i=H.a([$.aP,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.t
i=H.a([$.c9,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.J
i=H.a([$.c9,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.t
i=H.a([$.c9,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.t
i=H.a([$.O,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.t
i=H.a([$.O,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.x
i=H.a([$.aJ,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.x
i=H.a([$.aJ,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.K
i=H.a([$.aJ,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.K
i=H.a([$.bZ,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.x
i=H.a([$.bZ,$.bB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.K
i=H.a([$.bZ,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.x
i=H.a([$.bZ,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.x
i=H.a([$.bZ,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.x
i=H.a([$.bZ,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.K
i=H.a([$.bZ,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.x
i=H.a([$.bm,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.x
i=H.a([$.bm,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.x
i=H.a([$.bm,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.J
i=H.a([$.bm,$.bB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.t
i=H.a([$.bs,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.x
i=H.a([$.bs,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.J
i=H.a([$.bs,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.t
i=H.a([$.bs,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.J
i=H.a([$.ck,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.x
i=H.a([$.ck,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.ao
i=H.a([$.ck,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.x
i=H.a([$.ck,$.bB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.x
i=H.a([$.b7,$.bB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.J
i=H.a([$.b7,$.bF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.x
i=H.a([$.b7,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.x
i=H.a([$.b7,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.x
i=H.a([$.b7,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.x
i=H.a([$.b7,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.x
i=H.a([$.b7,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.J
i=H.a([$.b7,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.J
i=H.a([$.bB,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.x
i=H.a([$.bB,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.x
i=H.a([$.bB,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.x
i=H.a([$.bB,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.x
i=H.a([$.bB,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.x
i=H.a([$.bB,$.bO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.x
i=H.a([$.bB,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.uK
i=H.a([$.bB,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.J
i=H.a([$.bB,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.K
i=H.a([$.bV,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.t
i=H.a([$.aK,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.t
i=H.a([$.aK,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.K
i=H.a([$.b5,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.t
i=H.a([$.b0,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.K
i=H.a([$.aH,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.x
i=H.a([$.aH,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.K
i=H.a([$.aH,$.an],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.t
i=H.a([$.cg,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.t
i=H.a([$.cg,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.t
i=H.a([$.b1,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.t
i=H.a([$.b1,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.ao
i=H.a([$.b1,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.ao
i=H.a([$.b1,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.J
i=H.a([$.b1,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.J
i=H.a([$.b1,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.ao
i=H.a([$.b1,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.t
i=H.a([$.b1,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.t
i=H.a([$.b1,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.t
i=H.a([$.b1,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.J
i=H.a([$.b1,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.x
i=H.a([$.b_,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.x
i=H.a([$.a7,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.x
i=H.a([$.bF,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.x
i=H.a([$.bF,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.ao
i=H.a([$.bF,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.ao
i=H.a([$.b_,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.J
i=H.a([$.b_,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.K
i=H.a([$.b_,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.J
i=H.a([$.b_,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.ao
i=H.a([$.aA,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.t
i=H.a([$.aA,$.a4,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.J
i=H.a([$.aA,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.K
i=H.a([$.aA,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.t
i=H.a([$.aA,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.ao
i=H.a([$.aA,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.ao
i=H.a([$.br,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.t
i=H.a([$.br,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.t
i=H.a([$.br,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.t
i=H.a([$.b0,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.J
i=H.a([$.bO,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.J
i=H.a([$.aO,$.c_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.t
i=H.a([$.aO,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.J
i=H.a([$.a3,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.t
i=H.a([$.aO,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.J
i=H.a([$.aO,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.K
i=H.a([$.aO,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.t
i=H.a([$.bu,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.t
i=H.a([$.bu,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.t
i=H.a([$.bu,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.t
i=H.a([$.aO,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.t
i=H.a([$.bu,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.t
i=H.a([$.a3,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.t
i=H.a([$.bu,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.t
i=H.a([$.bu,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.J
i=H.a([$.bu,$.bO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.t
i=H.a([$.bu,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.t
i=H.a([$.bp,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.t
i=H.a([$.a4,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.J
i=H.a([$.a3,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.t
i=H.a([$.bt,$.bO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.t
i=H.a([$.bO,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.t
i=H.a([$.bO,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.t
i=H.a([$.bO,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.J
i=H.a([$.bO,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.J
i=H.a([$.bO,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.t
i=H.a([$.bO,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.J
i=H.a([$.a7,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.t
i=H.a([$.a7,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.t
i=H.a([$.a7,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.t
i=H.a([$.a7,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.ao
i=H.a([$.a7,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.t
i=H.a([$.a7,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.t
i=H.a([$.a7,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.t
i=H.a([$.a7,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.t
i=H.a([$.a7,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.t
i=H.a([$.bt,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.t
i=H.a([$.bt,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.ao
i=H.a([$.a0,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.t
i=H.a([$.bn,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.t
i=H.a([$.bn,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.t
i=H.a([$.bn,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.J
i=H.a([$.bn,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.K
i=H.a([$.aM,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.J
i=H.a([$.b8,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.t
i=H.a([$.b8,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.K
i=H.a([$.aH,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.K
i=H.a([$.aQ,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.K
i=H.a([$.aQ,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.J
i=H.a([$.aB,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.J
i=H.a([$.a0,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.t
i=H.a([$.a0,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.t
i=H.a([$.aB,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.ao
i=H.a([$.aQ,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.J
i=H.a([$.a0,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.J
i=H.a([$.aQ,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.J
i=H.a([$.aQ,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.J
i=H.a([$.aQ,$.aT,$.aL,$.jy],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.J
i=H.a([$.aH,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.J
i=H.a([$.aH,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.J
i=H.a([$.aH,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.J
i=H.a([$.a4,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.J
i=H.a([$.aH,$.b9,$.a3,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.x
i=H.a([$.D,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.t
i=H.a([$.ba,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.J
i=H.a([$.bU,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.t
i=H.a([$.Z,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.t
i=H.a([$.aP,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.J
i=H.a([$.c9,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.x
i=H.a([$.O,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.J
i=H.a([$.O,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.ao
i=H.a([$.b4,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.J
i=H.a([$.bm,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.J
i=H.a([$.aI,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.x
i=H.a([$.aQ,$.ck],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.ao
i=H.a([$.b7,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.J
i=H.a([$.b0,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.K
i=H.a([$.aW,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.ao
i=H.a([$.bF,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.J
i=H.a([$.aA,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.J
i=H.a([$.aI,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.J
i=H.a([$.aI,$.bO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.J
i=H.a([$.aI,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.J
i=H.a([$.aO,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.J
i=H.a([$.be,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.J
i=H.a([$.be,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.J
i=H.a([$.be,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.J
i=H.a([$.aN,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.J
i=H.a([$.aT,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.e("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.J
i=H.a([$.aQ,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.J
i=H.a([$.a4,$.aQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.J
i=H.a([$.P,$.H,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.J
i=H.a([$.P,$.H,$.aW,$.ax,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.J
i=H.a([$.P,$.H,$.aW,$.ck],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.J
i=H.a([$.aJ,$.bU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.J
i=H.a([$.bB,$.bU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.J
i=H.a([$.b7,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.J
i=H.a([$.a4,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.J
i=H.a([$.b5,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.J
l=H.a([$.bT,$.bU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chipped",l,n,o,0))
if($.xT==null){o=$.mR
n=$.aZ
l=$.aK
k=$.ba
j=new U.aw(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a2(null,null,null,m),0,3)
j.O("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.xT=j}o=$.$get$aC();(o&&C.b).sm(o,0)
o=$.$get$aC()
n=$.Q
l=$.xa
k=new U.aw(n,null,null,null,"Speedo",!1,P.a2(null,null,null,m),0,3)
k.O("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$aC()
o=$.es
n=$.aK
l=$.D
j=$.aZ
i=new U.aw(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a2(null,null,null,m),0,3)
i.O("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aC()
k=$.uv
o=$.an
j=$.D
l=new U.aw(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a2(null,null,null,m),0,3)
l.O("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$aC()
i=$.uG
k=$.b1
j=$.D
o=new U.aw(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a2(null,null,null,m),0,3)
o.O("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$aC()
l=$.uC
i=$.b1
j=$.D
k=new U.aw(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a2(null,null,null,m),0,3)
k.O("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$aC()
o=$.xl
l=$.b1
j=$.D
i=new U.aw(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a2(null,null,null,m),0,3)
i.O("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aC()
k=$.wY
o=$.aZ
j=$.aK
l=$.D
n=new U.aw(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a2(null,null,null,m),0,3)
n.O("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$aC()
i=$.ur
k=$.aZ
l=$.aK
j=$.D
o=new U.aw(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a2(null,null,null,m),0,3)
o.O("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aC()
n=$.hw
i=$.an
j=$.bT
l=new U.aw(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a2(null,null,null,m),0,3)
l.O("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aC()
o=$.xo
n=$.aK
j=$.D
i=new U.aw(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a2(null,null,null,m),0,3)
i.O("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$aC()
l=$.x0
o=$.aK
j=$.D
n=new U.aw(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a2(null,null,null,m),0,3)
n.O("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$aC()
i=$.x7
l=$.aZ
j=$.D
o=new U.aw(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a2(null,null,null,m),0,3)
o.O("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aC()
n=$.uB
i=$.bB
j=$.bs
l=new U.aw(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a2(null,null,null,m),0,3)
l.O("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aC()
o=$.er
n=$.cg
j=$.aJ
i=$.an
k=new U.aw(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a2(null,null,null,m),0,3)
k.O("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aC()
l=$.us
o=$.aP
i=$.bF
j=new U.aw(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a2(null,null,null,m),0,3)
j.O("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$aC()
k=$.uA
l=$.D
i=$.aZ
o=new U.aw(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a2(null,null,null,m),0,3)
o.O("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$aC()
j=$.xr
k=$.Z
i=$.an
l=new U.aw(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a2(null,null,null,m),0,3)
l.O("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$aC()
o=$.xt
j=$.bn
i=$.Q
k=new U.aw(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a2(null,null,null,m),0,3)
k.O("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aC()
l=$.uo
o=$.b1
i=$.aJ
j=$.Q
n=$.aZ
h=new U.aw(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a2(null,null,null,m),0,3)
h.O("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$aC()
k=$.jy
l=$.Z
n=$.an
j=new U.aw(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a2(null,null,null,m),0,3)
j.O("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$aC()
h=$.jx
k=$.Z
n=new U.aw(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a2(null,null,null,m),0,3)
n.O("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$aC()
j=$.aL
h=$.O
k=$.an
l=new U.aw(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a2(null,null,null,m),0,3)
l.O("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$aC()
n=$.xi
j=$.D
k=$.an
h=new U.aw(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a2(null,null,null,m),0,3)
h.O("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$aC()
l=$.um
n=$.aK
k=$.D
j=$.an
i=new U.aw(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a2(null,null,null,m),0,3)
i.O("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aC()
h=$.xf
l=$.Z
j=$.aZ
k=new U.aw(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a2(null,null,null,m),0,3)
k.O("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aC()
i=$.fl
h=$.D
j=$.an
l=new U.aw(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a2(null,null,null,m),0,3)
l.O("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aC()
k=$.x_
i=$.Z
j=$.an
h=new U.aw(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a2(null,null,null,m),0,3)
h.O("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aC()
l=$.xu
k=$.aP
j=$.an
i=new U.aw(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a2(null,null,null,m),0,3)
i.O("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aC()
h=$.xq
l=$.Z
j=$.b1
k=new U.aw(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a2(null,null,null,m),0,3)
k.O("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aC()
i=$.xn
h=$.D
j=$.aK
l=new U.aw(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a2(null,null,null,m),0,3)
l.O("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aC()
k=$.uz
i=$.D
j=$.b1
h=new U.aw(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a2(null,null,null,m),0,3)
h.O("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$aC()
l=$.mU
k=$.D
j=$.bu
i=new U.aw(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a2(null,null,null,m),0,3)
i.O("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aC()
h=$.er
l=$.c9
j=$.an
k=new U.aw(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a2(null,null,null,m),0,3)
k.O("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aC()
i=$.xs
h=$.D
j=$.aZ
l=new U.aw(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a2(null,null,null,m),0,3)
l.O("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aC()
k=$.mQ
i=$.O
j=$.aK
h=new U.aw(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a2(null,null,null,m),0,3)
h.O("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aC()
l=$.ut
k=$.D
j=$.an
i=new U.aw(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a2(null,null,null,m),0,3)
i.O("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aC()
h=$.e8
l=$.b8
j=$.Q
k=new U.aw(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a2(null,null,null,m),0,3)
k.O("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aC()
i=$.hv
h=$.D
j=$.bn
l=new U.aw(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a2(null,null,null,m),0,3)
l.O("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aC()
k=$.uJ
i=$.D
j=$.an
h=new U.aw(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a2(null,null,null,m),0,3)
h.O("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aC()
l=$.xm
k=$.D
j=$.an
i=new U.aw(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a2(null,null,null,m),0,3)
i.O("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aC()
h=$.uI
l=$.Z
j=$.an
k=new U.aw(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a2(null,null,null,m),0,3)
k.O("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aC()
i=$.uD
h=$.Z
j=$.aO
l=new U.aw(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a2(null,null,null,m),0,3)
l.O("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aC()
k=$.uF
i=$.D
j=$.aK
h=new U.aw(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a2(null,null,null,m),0,3)
h.O("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aC()
l=$.mY
k=$.D
j=$.a0
i=new U.aw(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a2(null,null,null,m),0,3)
i.O("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aC()
h=$.hu
l=$.aJ
j=$.cg
k=new U.aw(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a2(null,null,null,m),0,3)
k.O("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aC()
i=$.x9
h=$.Z
j=$.an
l=new U.aw(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a2(null,null,null,m),0,3)
l.O("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aC()
k=$.xe
i=$.D
j=$.aK
h=new U.aw(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a2(null,null,null,m),0,3)
h.O("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aC()
l=$.xk
k=$.D
j=$.aK
i=new U.aw(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a2(null,null,null,m),0,3)
i.O("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aC()
h=$.xj
l=$.D
j=$.cg
k=new U.aw(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a2(null,null,null,m),0,3)
k.O("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aC()
i=$.dq
h=$.Z
j=$.an
m=new U.aw(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a2(null,null,null,m),0,3)
m.O("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bK("Duttle","Dut",null,null)
$.$get$bR().push(m)
$.wH=m
m=new S.bK("Salamander","GLUB",null,null)
$.$get$bR().push(m)
$.ub=m
m=new S.bK("Crocodile","NAK",null,null)
$.$get$bR().push(m)
$.e5=m
m=new S.bK("Iguana","thip",null,null)
$.$get$bR().push(m)
$.en=m
m=new S.bK("Turtle","click",null,null)
$.$get$bR().push(m)
$.fc=m
m=new S.bK("Skeleton","rattle",null,null)
$.$get$bR().push(m)
$.dP=m
m=new S.bK("Robot","BEEP",null,null)
$.$get$bR().push(m)
$.fa=m
m=new S.bK("Chameleon","BLEP",null,null)
$.$get$bR().push(m)
$.iE=m
m=new S.bK("Axolotl","BARP",null,null)
$.$get$bR().push(m)
$.u5=m
m=new S.bK("Lizard","bleb",null,null)
$.$get$bR().push(m)
$.m6=m
m=new S.bK("Snake","hiss",null,null)
$.$get$bR().push(m)
$.ud=m
m=new S.bK("Alligator","nak",null,null)
$.$get$bR().push(m)
$.iC=m
m=new S.bK("Mole","snuff",null,null)
$.$get$bR().push(m)
$.wI=m
m=new S.bK("Bird","tweet",null,null)
$.$get$bR().push(m)
$.m4=m
m=new S.bK("Wolf","howl",null,null)
$.$get$bR().push(m)
$.mb=m
m=new S.bK("Newt","skitter",null,null)
$.$get$bR().push(m)
$.wJ=m
m=new S.bK("Spider","skitter",null,null)
$.$get$bR().push(m)
$.iK=m
m=new S.bK("Cupid","flappa",null,null)
$.$get$bR().push(m)
$.iF=m
m=new S.bK("Dragon","roar",null,null)
$.$get$bR().push(m)
$.hg=m
m=new S.im("Prospitian","murmur",null,null)
$.$get$bR().push(m)
$.AR=m
m=new S.im("Dersite","mutter",null,null)
$.$get$bR().push(m)
$.AO=m
m=new S.mz("Horror Terror","a;lkjdf",null,null)
$.$get$bR().push(m)
$.AQ=m
$.AS=H.a([$.ud,$.iC,$.wJ,$.ub,$.en,$.e5,$.fc,$.iE,$.u5,$.m6],[S.bK])
$.hm=new T.ca(0,"spices")
m=$.AU
$.f8=new T.ca(m,"fresh baked bread")
$.cA=new T.ca(m,"sweetness")
$.cf=new T.ca(m,"nature")
$.ma=new T.ca(0,"salt")
k=$.AT
$.d7=new T.ca(k,"rot")
$.AP=new T.ca(k,"feet")
$.ep=new T.ca(0,"oil")
$.u7=new T.ca(0,"chlorine")
$.hk=new T.ca(0,"nothing in particular")
$.em=new T.ca(0,"gunpowder")
$.hj=new T.ca(0,"must")
$.cI=new T.ca(m,"zoo animals")
$.e6=new T.ca(k,"sweat")
$.iJ=new T.ca(0,"ozone")
$.ce=new T.ca(0,"deceit")
$.cP=new T.ca(k,"blood")
$.fb=new T.ca(k,"smoke")
$.c5=new K.bY(k,"creepy")
$.b2=new K.bY(m,"calm")
$.ci=new K.bY(k,"frantic")
$.m7=new K.bY(0,"like nothing")
$.bS=new K.bY(m,"energizing")
$.cH=new K.bY(0,"studious")
$.dA=new K.bY(0,"dangerous")
$.dN=new K.bY(0,"glamorous")
$.hl=new K.bY(0,"romantic")
$.dz=new K.bY(m,"creative")
$.iI=new K.bY(0,"lucky")
$.dB=new K.bY(0,"happy")
$.dO=new K.bY(0,"heroic")
$.d9=new K.bY(k,"stupid")
$.iI=new K.bY(0,"lucky")
$.m5=new K.bY(0,"claustrophobic")
$.m8=new K.bY(0,"overheated")
$.dM=new K.bY(k,"confusing")
$.cd=new K.bY(0,"contemplatative")
$.cX=new M.bD(0,"clanking")
$.cz=new M.bD(0,"laughing")
$.bl=new M.bD(m,"rustling")
$.eq=new M.bD(k,"screaming")
$.iG=new M.bD(k,"foot steps")
$.f9=new M.bD(k,"beeping")
$.wL=new M.bD(k,"whispering")
$.el=new M.bD(0,"clacking")
$.cF=new M.bD(0,"applause")
$.eo=new M.bD(0,"jazz")
$.u9=new M.bD(0,"disco")
$.hh=new M.bD(0,"drums")
$.hi=new M.bD(0,"echoing")
$.m9=new M.bD(k,"roaring")
$.iH=new M.bD(k,"gunfire")
$.cG=new M.bD(0,"music")
$.uc=new M.bD(0,"singing")
$.u6=new M.bD(0,"chanting")
$.fd=new M.bD(0,"whistling")
$.dp=new M.bD(m,"nature")
$.u8=new M.bD(0,"croaking")
$.d8=new M.bD(0,"silence")
$.ua=new M.bD(0,"pulsing")
$.wK=new M.bD(0,"ticking")
m=H.a([],p)
o=[X.G,P.U]
n=A.Y
l=E.I
k=[l]
j=[A.fY]
m=new S.nc(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.r(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Knight",3,!0,!1,!1)
$.Hd=m
m=P.f(H.a([new E.I($.c2,0.4,!1)],k),l)
i=H.a([],p)
m=new S.oM(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.r(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Seer",6,!0,!1,!1)
$.Hq=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kY("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.r(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Bard",9,!0,!1,!1)
$.H7=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.mv("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.r(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Heir",8,!0,!1,!1)
$.Ha=m
m=H.a([],p)
m=new U.nx(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.r(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Maid",0,!0,!1,!1)
$.Hg=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.oB(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.r(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Rogue",4,!0,!1,!1)
$.Hl=m
m=H.a([],p)
m=new V.oa(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.r(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Page",1,!0,!1,!1)
$.Hj=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.pO(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.r(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Thief",7,!0,!1,!1)
$.Ht=m
m=P.f(H.a([new E.I($.c2,0.1,!1)],k),l)
i=H.a([],p)
m=new R.px(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.r(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Sylph",5,!0,!1,!1)
$.Hs=m
m=H.a([],p)
m=new N.os("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.r(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Prince",10,!0,!1,!1)
$.Hk=m
m=P.f(H.a([new E.I($.c2,0.1,!1)],k),l)
i=H.a([],p)
m=new M.qi("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.r(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Witch",11,!0,!1,!1)
$.Hv=m
m=P.f(H.a([new E.I($.c2,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nw("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.r(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Mage",2,!0,!1,!1)
$.Hf=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.f(H.a([new E.I($.c2,3,!1),new E.I($.p3,-2,!1)],k),l)
e=H.a([],p)
m=new E.qe("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.r(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Waste",12,!1,!1,!1)
$.Hu=m
m=H.a([],p)
m=new Y.oJ("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.r(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Scout",13,!1,!1,!1)
$.Ho=m
m=P.f(H.a([new E.I($.c2,0.5,!1)],k),l)
i=H.a([],p)
m=new L.oK("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.r(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Scribe",15,!1,!1,!1)
$.Hp=m
m=P.f(H.a([new E.I($.c2,0.5,!1)],k),l)
i=H.a([],p)
m=new E.oG(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.r(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Sage",14,!1,!1,!1)
$.Hm=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.mt("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.r(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Guide",16,!1,!1,!1)
$.H9=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.f(H.a([new E.I($.c2,3,!1)],k),l)
g=H.a([],p)
m=new Y.ms(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.r(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Grace",17,!1,!1,!1)
$.H8=m
m=P.f(H.a([new E.I($.c2,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nL("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.r(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Muse",18,!1,!1,!1)
$.Hh=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.E(null,null,n)
h=P.f(H.a([new E.I($.c2,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.nu("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.r(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Lord",19,!1,!1,!1)
$.He=m
m=P.f(H.a([new E.I($.c2,-0.1,!1),new E.I($.dh,1,!1)],k),l)
i=H.a([],p)
m=new Y.oT("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.r(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Smith",20,!1,!1,!1)
$.Hr=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.f(H.a([new E.I($.c2,4,!1),new E.I($.p3,-3,!1)],k),l)
e=H.a([],p)
m=new X.mD("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.r(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Human",21,!1,!1,!0)
$.Hb=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.f(H.a([new E.I($.c2,41.3,!1),new E.I($.p3,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.mE(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.r(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Hussie",22,!1,!0,!0)
$.Hc=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.oH(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.r(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Sans",23,!1,!0,!0)
$.Hn=m
$.Hi=T.H6("Null",255,!1,!0,!1)
m=A.dK
i=P.F
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#00ff00"),!0)
h.j(0,$.ad,L.d("#EFEFEF"),!0)
h.j(0,$.ac,L.d("#DEDEDE"),!0)
h.j(0,$.am,L.d("#FF2106"),!0)
h.j(0,$.al,L.d("#B01200"),!0)
h.j(0,$.af,L.d("#2F2F30"),!0)
h.j(0,$.ag,L.d("#1D1D1D"),!0)
h.j(0,$.ae,L.d("#080808"),!0)
h.j(0,$.ak,L.d("#030303"),!0)
h.j(0,$.aj,L.d("#242424"),!0)
h.j(0,$.ai,L.d("#333333"),!0)
h.j(0,$.ah,L.d("#141414"),!0)
g=P.f(H.a(["Frogs"],p),q)
f=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.f(H.a([new E.I($.dh,2,!0),new E.I($.dV,1,!0),new E.I($.d0,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new N.oX(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(0,"Space",!0,!1,!1)
$.Aa=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#ff0000"),!0)
a.j(0,$.ad,L.d("#FF2106"),!0)
a.j(0,$.ac,L.d("#AD1604"),!0)
a.j(0,$.am,L.d("#030303"),!0)
a.j(0,$.al,L.d("#242424"),!0)
a.j(0,$.af,L.d("#510606"),!0)
a.j(0,$.ag,L.d("#3C0404"),!0)
a.j(0,$.ae,L.d("#1F0000"),!0)
a.j(0,$.ak,L.d("#B70D0E"),!0)
a.j(0,$.aj,L.d("#970203"),!0)
a.j(0,$.ai,L.d("#8E1516"),!0)
a.j(0,$.ah,L.d("#640707"),!0)
b=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.f(H.a([new E.I($.eH,2,!0),new E.I($.d0,1,!0),new E.I($.dU,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new N.pP(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(1,"Time",!0,!1,!1)
$.Ad=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#3399ff"),!0)
h.j(0,$.ad,L.d("#10E0FF"),!0)
h.j(0,$.ac,L.d("#00A4BB"),!0)
h.j(0,$.am,L.d("#FEFD49"),!0)
h.j(0,$.al,L.d("#D6D601"),!0)
h.j(0,$.af,L.d("#0052F3"),!0)
h.j(0,$.ag,L.d("#0046D1"),!0)
h.j(0,$.ae,L.d("#003396"),!0)
h.j(0,$.ak,L.d("#0087EB"),!0)
h.j(0,$.aj,L.d("#0070ED"),!0)
h.j(0,$.ai,L.d("#006BE1"),!0)
h.j(0,$.ah,L.d("#0054B0"),!0)
g=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.f(H.a([new E.I($.d0,2,!0),new E.I($.c1,1,!0),new E.I($.dV,-1,!0),new E.I($.dC,-1,!0),new E.I($.c2,0.05,!1)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new T.l6(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(2,"Breath",!0,!1,!1)
$.zP=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#003300"),!0)
a.j(0,$.ad,L.d("#0F0F0F"),!0)
a.j(0,$.ac,L.d("#010101"),!0)
a.j(0,$.am,L.d("#E8C15E"),!0)
a.j(0,$.al,L.d("#C7A140"),!0)
a.j(0,$.af,L.d("#1E211E"),!0)
a.j(0,$.ag,L.d("#141614"),!0)
a.j(0,$.ae,L.d("#0B0D0B"),!0)
a.j(0,$.ak,L.d("#204020"),!0)
a.j(0,$.aj,L.d("#11200F"),!0)
a.j(0,$.ai,L.d("#192C16"),!0)
a.j(0,$.ah,L.d("#121F10"),!0)
b=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.f(H.a([new E.I($.dh,2,!0),new E.I($.dU,1,!0),new E.I($.eH,-1,!0),new E.I($.dV,-1,!0),new E.I($.c2,0.01,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new U.lB(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(3,"Doom",!0,!1,!1)
$.zR=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#993300"),!0)
h.j(0,$.ad,L.d("#BA1016"),!0)
h.j(0,$.ac,L.d("#820B0F"),!0)
h.j(0,$.am,L.d("#381B76"),!0)
h.j(0,$.al,L.d("#1E0C47"),!0)
h.j(0,$.af,L.d("#290704"),!0)
h.j(0,$.ag,L.d("#230200"),!0)
h.j(0,$.ae,L.d("#110000"),!0)
h.j(0,$.ak,L.d("#3D190A"),!0)
h.j(0,$.aj,L.d("#2C1207"),!0)
h.j(0,$.ai,L.d("#5C2913"),!0)
h.j(0,$.ah,L.d("#4C1F0D"),!0)
g=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.f(H.a([new E.I($.dC,2,!0),new E.I($.c1,1,!0),new E.I($.dh,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new T.l4(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(4,"Blood",!0,!1,!1)
$.zO=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#ff3399"),!0)
a.j(0,$.ad,L.d("#BD1864"),!0)
a.j(0,$.ac,L.d("#780F3F"),!0)
a.j(0,$.am,L.d("#1D572E"),!0)
a.j(0,$.al,L.d("#11371D"),!0)
a.j(0,$.af,L.d("#4C1026"),!0)
a.j(0,$.ag,L.d("#3C0D1F"),!0)
a.j(0,$.ae,L.d("#260914"),!0)
a.j(0,$.ak,L.d("#6B0829"),!0)
a.j(0,$.aj,L.d("#4A0818"),!0)
a.j(0,$.ai,L.d("#55142A"),!0)
a.j(0,$.ah,L.d("#3D0E1E"),!0)
b=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.f(H.a([new E.I($.dC,1,!0),new E.ik(null,1,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new T.mu(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(5,"Heart",!0,!1,!1)
$.zU=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#3da35a"),!0)
h.j(0,$.ad,L.d("#06FFC9"),!0)
h.j(0,$.ac,L.d("#04A885"),!0)
h.j(0,$.am,L.d("#6E0E2E"),!0)
h.j(0,$.al,L.d("#4A0818"),!0)
h.j(0,$.af,L.d("#1D572E"),!0)
h.j(0,$.ag,L.d("#164524"),!0)
h.j(0,$.ae,L.d("#11371D"),!0)
h.j(0,$.ak,L.d("#3DA35A"),!0)
h.j(0,$.aj,L.d("#2E7A43"),!0)
h.j(0,$.ai,L.d("#3B7E4F"),!0)
h.j(0,$.ah,L.d("#265133"),!0)
g=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.f(H.a([new E.I($.dU,2,!0),new E.I($.eH,1,!0),new E.I($.dh,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new V.nJ(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(6,"Mind",!0,!1,!1)
$.A1=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#ff9933"),!0)
a.j(0,$.ad,L.d("#FEFD49"),!0)
a.j(0,$.ac,L.d("#FEC910"),!0)
a.j(0,$.am,L.d("#10E0FF"),!0)
a.j(0,$.al,L.d("#00A4BB"),!0)
a.j(0,$.af,L.d("#FA4900"),!0)
a.j(0,$.ag,L.d("#E94200"),!0)
a.j(0,$.ae,L.d("#C33700"),!0)
a.j(0,$.ak,L.d("#FF8800"),!0)
a.j(0,$.aj,L.d("#D66E04"),!0)
a.j(0,$.ai,L.d("#E76700"),!0)
a.j(0,$.ah,L.d("#CA5B00"),!0)
b=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.f(H.a([new E.I($.fy,2,!0),new E.I($.dU,1,!0),new E.I($.c1,-1,!0),new E.I($.dV,-1,!0),new E.I($.c2,0.2,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new G.ni(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(7,"Light",!0,!1,!1)
$.A_=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#000066"),!0)
h.j(0,$.ad,L.d("#0B1030"),!0)
h.j(0,$.ac,L.d("#04091A"),!0)
h.j(0,$.am,L.d("#CCC4B5"),!0)
h.j(0,$.al,L.d("#A89F8D"),!0)
h.j(0,$.af,L.d("#00164F"),!0)
h.j(0,$.ag,L.d("#00103C"),!0)
h.j(0,$.ae,L.d("#00071A"),!0)
h.j(0,$.ak,L.d("#033476"),!0)
h.j(0,$.aj,L.d("#02285B"),!0)
h.j(0,$.ai,L.d("#004CB2"),!0)
h.j(0,$.ah,L.d("#003E91"),!0)
g=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.f(H.a([new E.fT(D.vB(),null,3,!0),new E.fT(D.vB(),null,-1,!0),new E.I($.eH,-1,!0),new E.I($.c2,0.2,!1)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new Q.qd(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(8,"Void",!0,!1,!1)
$.Af=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#9900cc"),!0)
a.j(0,$.ad,L.d("#974AA7"),!0)
a.j(0,$.ac,L.d("#6B347D"),!0)
a.j(0,$.am,L.d("#3D190A"),!0)
a.j(0,$.al,L.d("#2C1207"),!0)
a.j(0,$.af,L.d("#7C3FBA"),!0)
a.j(0,$.ag,L.d("#6D34A6"),!0)
a.j(0,$.ae,L.d("#592D86"),!0)
a.j(0,$.ak,L.d("#381B76"),!0)
a.j(0,$.aj,L.d("#1E0C47"),!0)
a.j(0,$.ai,L.d("#281D36"),!0)
a.j(0,$.ah,L.d("#1D1526"),!0)
b=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.I($.eI,2,!0),new E.I($.d0,1,!0),new E.I($.c1,-1,!0),new E.I($.dC,-1,!0),new E.I($.c2,0.01,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new E.ov(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(9,"Rage",!0,!1,!1)
$.A5=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#ffcc66"),!0)
h.j(0,$.ad,L.d("#FDF9EC"),!0)
h.j(0,$.ac,L.d("#D6C794"),!0)
h.j(0,$.am,L.d("#164524"),!0)
h.j(0,$.al,L.d("#06280C"),!0)
h.j(0,$.af,L.d("#FFC331"),!0)
h.j(0,$.ag,L.d("#F7BB2C"),!0)
h.j(0,$.ae,L.d("#DBA523"),!0)
h.j(0,$.ak,L.d("#FFE094"),!0)
h.j(0,$.aj,L.d("#E8C15E"),!0)
h.j(0,$.ai,L.d("#F6C54A"),!0)
h.j(0,$.ah,L.d("#EDAF0C"),!0)
g=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.f(H.a([new E.I($.c1,2,!0),new E.I($.fy,1,!0),new E.fT(D.vB(),null,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new X.my(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(10,"Hope",!0,!1,!1)
$.zW=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#494132"),!0)
a.j(0,$.ad,L.d("#76C34E"),!0)
a.j(0,$.ac,L.d("#4F8234"),!0)
a.j(0,$.am,L.d("#00164F"),!0)
a.j(0,$.al,L.d("#00071A"),!0)
a.j(0,$.af,L.d("#605542"),!0)
a.j(0,$.ag,L.d("#494132"),!0)
a.j(0,$.ae,L.d("#2D271E"),!0)
a.j(0,$.ak,L.d("#CCC4B5"),!0)
a.j(0,$.aj,L.d("#A89F8D"),!0)
a.j(0,$.ai,L.d("#A29989"),!0)
a.j(0,$.ah,L.d("#918673"),!0)
b=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.f(H.a([new E.I($.dV,2,!0),new E.I($.eI,1,!0),new E.I($.dh,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new K.nh(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(11,"Life",!0,!1,!1)
$.zZ=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#9630BF"),!0)
h.j(0,$.ad,L.d("#cc87e8"),!0)
h.j(0,$.ac,L.d("#9545b7"),!0)
h.j(0,$.am,L.d("#ae769b"),!0)
h.j(0,$.al,L.d("#8f577c"),!0)
h.j(0,$.af,L.d("#9630bf"),!0)
h.j(0,$.ag,L.d("#693773"),!0)
h.j(0,$.ae,L.d("#4c2154"),!0)
h.j(0,$.ak,L.d("#fcf9bd"),!0)
h.j(0,$.aj,L.d("#e0d29e"),!0)
h.j(0,$.ai,L.d("#bdb968"),!0)
h.j(0,$.ah,L.d("#ab9b55"),!0)
g=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.f(H.a([new E.I($.dh,3,!0),new E.I($.c1,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new Z.lC(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(12,"Dream",!1,!1,!1)
$.zS=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#9630BF"),!0)
a.j(0,$.ad,L.d("#cc87e8"),!0)
a.j(0,$.ac,L.d("#9545b7"),!0)
a.j(0,$.am,L.d("#ae769b"),!0)
a.j(0,$.al,L.d("#8f577c"),!0)
a.j(0,$.af,L.d("#9630bf"),!0)
a.j(0,$.ag,L.d("#693773"),!0)
a.j(0,$.ae,L.d("#4c2154"),!0)
a.j(0,$.ak,L.d("#fcf9bd"),!0)
a.j(0,$.aj,L.d("#e0d29e"),!0)
a.j(0,$.ai,L.d("#bdb968"),!0)
a.j(0,$.ah,L.d("#ab9b55"),!0)
b=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.f(H.a([new E.I($.dh,3,!0),new E.I($.c1,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new Q.nf(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(13,"Law",!1,!0,!0)
$.zY=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#ffff00"),!0)
h.j(0,$.ad,L.d("#ffff00"),!0)
h.j(0,$.ac,L.d("#ffff00"),!0)
h.j(0,$.am,L.d("#508b2d"),!0)
h.j(0,$.al,L.d("#316c0d"),!0)
h.j(0,$.af,L.d("#dddd00"),!0)
h.j(0,$.ag,L.d("#afaf00"),!0)
h.j(0,$.ae,L.d("#8f8f00"),!0)
h.j(0,$.ak,L.d("#ff0000"),!0)
h.j(0,$.aj,L.d("#a8000a"),!0)
h.j(0,$.ai,L.d("#b8151f"),!0)
h.j(0,$.ah,L.d("#8c1d1d"),!0)
g=P.f(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
f=P.f(H.a(["Juice","Joke","Jespacito"],p),q)
e=P.f(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
d=P.f(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
c=P.f(H.a([new E.I($.c2,13,!0)],k),l)
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ab,L.d("#FF9B00"),!0)
b.j(0,$.ad,L.d("#FF9B00"),!0)
b.j(0,$.ac,L.d("#FF8700"),!0)
b.j(0,$.am,L.d("#7F7F7F"),!0)
b.j(0,$.al,L.d("#727272"),!0)
b.j(0,$.af,L.d("#A3A3A3"),!0)
b.j(0,$.ag,L.d("#999999"),!0)
b.j(0,$.ae,L.d("#898989"),!0)
b.j(0,$.ak,L.d("#EFEFEF"),!0)
b.j(0,$.aj,L.d("#DBDBDB"),!0)
b.j(0,$.ai,L.d("#C6C6C6"),!0)
b.j(0,$.ah,L.d("#ADADAD"),!0)
b=new Z.n9(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
b.a_(14,"Juice",!1,!1,!0)
$.zX=b
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ab,L.d("#00ff00"),!0)
b.j(0,$.ad,L.d("#00ff00"),!0)
b.j(0,$.ac,L.d("#00ff00"),!0)
b.j(0,$.am,L.d("#00ff00"),!0)
b.j(0,$.al,L.d("#00cf00"),!0)
b.j(0,$.af,L.d("#171717"),!0)
b.j(0,$.ag,L.d("#080808"),!0)
b.j(0,$.ae,L.d("#080808"),!0)
b.j(0,$.ak,L.d("#616161"),!0)
b.j(0,$.aj,L.d("#3b3b3b"),!0)
b.j(0,$.ai,L.d("#4a4a4a"),!0)
b.j(0,$.ah,L.d("#292929"),!0)
c=P.f(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
d=P.f(H.a(["Shogun"],p),q)
e=P.f(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.I($.eI,13,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new K.oI(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(15,"Sauce",!1,!0,!1)
$.A8=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#933100"),!0)
h.j(0,$.ad,L.d("#933100"),!0)
h.j(0,$.ac,L.d("#682200"),!0)
h.j(0,$.am,L.d("#4c3a27"),!0)
h.j(0,$.al,L.d("#302418"),!0)
h.j(0,$.af,L.d("#a0562b"),!0)
h.j(0,$.ag,L.d("#723e20"),!0)
h.j(0,$.ae,L.d("#442513"),!0)
h.j(0,$.ak,L.d("#963c07"),!0)
h.j(0,$.aj,L.d("#682a06"),!0)
h.j(0,$.ai,L.d("#6d4d3a"),!0)
h.j(0,$.ah,L.d("#422e23"),!0)
g=P.f(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),q)
f=P.f(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),q)
e=P.f(H.a(["Electricity","Tazerface","Rebelions","Metaphors","Ravagers"],p),q)
d=P.f(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
c=P.f(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
b=P.f(H.a([new E.I($.d0,10,!0),new E.I($.c1,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new L.pB(2,0.7,0.7,h,g,f,e,d,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",c,["Lightning","Ice","Taserface"],["Taser"],b,0.01,0.01,0.01,0.5,16,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(16,"Taze",!1,!1,!0)
$.Ac=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#990000"),!0)
a.j(0,$.ad,L.d("#ff0200"),!0)
a.j(0,$.ac,L.d("#dd0000"),!0)
a.j(0,$.am,L.d("#25334f"),!0)
a.j(0,$.al,L.d("#07090f"),!0)
a.j(0,$.af,L.d("#c64f4f"),!0)
a.j(0,$.ag,L.d("#a33f3f"),!0)
a.j(0,$.ae,L.d("#843333"),!0)
a.j(0,$.ak,L.d("#b5c1d2"),!0)
a.j(0,$.aj,L.d("#939dac"),!0)
a.j(0,$.ai,L.d("#3c3e42"),!0)
a.j(0,$.ah,L.d("#202123"),!0)
b=P.f(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
c=P.f(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
d=P.f(H.a(["Yondu","Empathy","Arrows","Emotions","Ravagers"],p),q)
e=P.f(H.a(["Empathetic","Arrowed","Emotional","Literal","Ravaging"],p),q)
f=P.f(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
g=P.f(H.a([new E.I($.d0,2,!0),new E.I($.c1,5,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new V.oD(0.9,1.1,2,a,b,c,d,e,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",f,["Arrow","Yondu","Empathy"],["Arrow","Bow"],g,0.01,0.01,0.01,0.5,17,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(17,"Rule",!1,!1,!0)
$.A7=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#853dcc"),!0)
h.j(0,$.ad,L.d("#f76261"),!0)
h.j(0,$.ac,L.d("#913a39"),!0)
h.j(0,$.am,L.d("#ab4443"),!0)
h.j(0,$.al,L.d("#78302f"),!0)
h.j(0,$.af,L.d("#a54cff"),!0)
h.j(0,$.ag,L.d("#8c41d9"),!0)
h.j(0,$.ae,L.d("#7335b3"),!0)
h.j(0,$.ak,L.d("#853dcc"),!0)
h.j(0,$.aj,L.d("#642e99"),!0)
h.j(0,$.ai,L.d("#4c2375"),!0)
h.j(0,$.ah,L.d("#2b1442"),!0)
g=P.f(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),q)
f=P.f(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
e=P.f(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),q)
d=P.f(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),q)
c=P.f(H.a([new E.I($.d0,15,!0),new E.I($.c1,-4,!0)],k),l)
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ab,L.d("#FF9B00"),!0)
b.j(0,$.ad,L.d("#FF9B00"),!0)
b.j(0,$.ac,L.d("#FF8700"),!0)
b.j(0,$.am,L.d("#7F7F7F"),!0)
b.j(0,$.al,L.d("#727272"),!0)
b.j(0,$.af,L.d("#A3A3A3"),!0)
b.j(0,$.ag,L.d("#999999"),!0)
b.j(0,$.ae,L.d("#898989"),!0)
b.j(0,$.ak,L.d("#EFEFEF"),!0)
b.j(0,$.aj,L.d("#DBDBDB"),!0)
b.j(0,$.ai,L.d("#C6C6C6"),!0)
b.j(0,$.ah,L.d("#ADADAD"),!0)
b=new V.mw(3.1,2,0.7,h,g,f,e,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",d,["Hippo","Ranting"],["Vent"],c,0.01,0.01,0.01,0.5,18,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Hippo",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
b.a_(18,"Hippo",!1,!1,!0)
$.zV=b
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ab,L.d("#959595"),!0)
b.j(0,$.ad,L.d("#bfbfbf"),!0)
b.j(0,$.ac,L.d("#959595"),!0)
b.j(0,$.am,L.d("#805233"),!0)
b.j(0,$.al,L.d("#663c1f"),!0)
b.j(0,$.af,L.d("#805233"),!0)
b.j(0,$.ag,L.d("#737373"),!0)
b.j(0,$.ae,L.d("#664d3c"),!0)
b.j(0,$.ak,L.d("#663c1f"),!0)
b.j(0,$.aj,L.d("#4d2d17"),!0)
b.j(0,$.ai,L.d("#68594e"),!0)
b.j(0,$.ah,L.d("#4f443b"),!0)
c=P.f(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),q)
d=P.f(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),q)
e=P.f(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),q)
f=P.f(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),q)
g=P.f(H.a([new E.I($.d0,5,!0),new E.I($.c1,5,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new L.l1(0.7,2,3.1,b,c,d,e,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",f,["Bear","Thought"],["Doorway"],g,0.01,0.01,0.01,0.5,19,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Bear",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(19,"Bear",!1,!1,!0)
$.zN=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#ebd837"),!0)
h.j(0,$.ad,L.d("#ebd837"),!0)
h.j(0,$.ac,L.d("#857a1f"),!0)
h.j(0,$.am,L.d("#857a1f"),!0)
h.j(0,$.al,L.d("#524b13"),!0)
h.j(0,$.af,L.d("#d0c217"),!0)
h.j(0,$.ag,L.d("#9e9311"),!0)
h.j(0,$.ae,L.d("#6b640c"),!0)
h.j(0,$.ak,L.d("#c3c3c3"),!0)
h.j(0,$.aj,L.d("#8f8f8f"),!0)
h.j(0,$.ai,L.d("#a88e00"),!0)
h.j(0,$.ah,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
f=P.f(H.a(["STONE","Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
e=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
d=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt","Stone"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.I($.dU,2,!0),new E.I($.eH,1,!0),new E.I($.dh,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new A.nK(0.3,0.3,1,h,g,f,e,d,["stone","mind","decisions","consequences","free will","path","neurons","causality"],["stone","mind","coin","plan","mask","map","brain","circuit"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,b,0.01,0.01,0.01,0.5,20,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Mindstone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(20,"Mindstone",!1,!0,!0)
$.A2=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#74a4ff"),!0)
a.j(0,$.ad,L.d("#74a4ff"),!0)
a.j(0,$.ac,L.d("#466299"),!0)
a.j(0,$.am,L.d("#466299"),!0)
a.j(0,$.al,L.d("#2f4166"),!0)
a.j(0,$.af,L.d("#d0c217"),!0)
a.j(0,$.ag,L.d("#9e9311"),!0)
a.j(0,$.ae,L.d("#6b640c"),!0)
a.j(0,$.ak,L.d("#c3c3c3"),!0)
a.j(0,$.aj,L.d("#8f8f8f"),!0)
a.j(0,$.ai,L.d("#a88e00"),!0)
a.j(0,$.ah,L.d("#756300"),!0)
b=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
c=P.f(H.a(["Frogs","Stone"],p),q)
d=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush","Stone"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.I($.dh,2,!0),new E.I($.dV,1,!0),new E.I($.d0,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new A.oY(0.5,1,0.5,a,b,c,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",e,f,["stone","space","commitment","creation","room","stars","galaxy","black hole","super nova"],["stone","space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],g,0.01,0.01,0.01,0.5,21,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Spacestone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(21,"Spacestone",!1,!0,!0)
$.Ab=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#9846cc"),!0)
h.j(0,$.ad,L.d("#9846cc"),!0)
h.j(0,$.ac,L.d("#4c2366"),!0)
h.j(0,$.am,L.d("#4c2366"),!0)
h.j(0,$.al,L.d("#261233"),!0)
h.j(0,$.af,L.d("#d0c217"),!0)
h.j(0,$.ag,L.d("#9e9311"),!0)
h.j(0,$.ae,L.d("#6b640c"),!0)
h.j(0,$.ak,L.d("#c3c3c3"),!0)
h.j(0,$.aj,L.d("#8f8f8f"),!0)
h.j(0,$.ai,L.d("#a88e00"),!0)
h.j(0,$.ah,L.d("#756300"),!0)
g=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial","Stone"],p),q)
f=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible","Stone"],p),q)
c=P.f(H.a([new E.I($.eI,2,!0),new E.I($.d0,1,!0),new E.I($.c1,-1,!0),new E.I($.dC,-1,!0),new E.I($.c2,0.01,!1)],k),l)
b=P.f(H.a(["Paradox Space"],p),q)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new A.oo(1,1,0.01,h,g,f,e,d,["stone","rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["stone","rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,b,0.01,0.01,0.01,0.5,22,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Powerstone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(22,"Powerstone",!1,!0,!0)
$.A4=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#ffcb6f"),!0)
a.j(0,$.ad,L.d("#ffcb6f"),!0)
a.j(0,$.ac,L.d("#997a42"),!0)
a.j(0,$.am,L.d("#997a42"),!0)
a.j(0,$.al,L.d("#66512c"),!0)
a.j(0,$.af,L.d("#d0c217"),!0)
a.j(0,$.ag,L.d("#9e9311"),!0)
a.j(0,$.ae,L.d("#6b640c"),!0)
a.j(0,$.ak,L.d("#c3c3c3"),!0)
a.j(0,$.aj,L.d("#8f8f8f"),!0)
a.j(0,$.ai,L.d("#a88e00"),!0)
a.j(0,$.ah,L.d("#756300"),!0)
b=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters","Stone"],p),q)
c=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Stone","Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.I($.dC,1,!0),new E.ik(null,1,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new A.oV(0.3,0.6,0.01,a,b,c,d,e,["stone","heart","identity","emotion","core","beat","shadow"],["stone","heart","doll","locket","mirror","mask","shades","sculpture"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",f,g,0.01,0.01,0.01,0.5,23,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Soulstone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(23,"Soulstone",!1,!0,!0)
$.A9=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#7ac476"),!0)
h.j(0,$.ad,L.d("#7ac476"),!0)
h.j(0,$.ac,L.d("#3a5e39"),!0)
h.j(0,$.am,L.d("#3a5e39"),!0)
h.j(0,$.al,L.d("#1b2b1a"),!0)
h.j(0,$.af,L.d("#d0c217"),!0)
h.j(0,$.ag,L.d("#9e9311"),!0)
h.j(0,$.ae,L.d("#6b640c"),!0)
h.j(0,$.ak,L.d("#c3c3c3"),!0)
h.j(0,$.aj,L.d("#8f8f8f"),!0)
h.j(0,$.ai,L.d("#a88e00"),!0)
h.j(0,$.ah,L.d("#756300"),!0)
g=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums","Stone"],p),q)
f=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Stone","Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.I($.eH,2,!0),new E.I($.d0,1,!0),new E.I($.dU,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new A.pU(0.51,1,0.01,0.7,h,g,f,e,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,["stone","time","speed","inevitability","paradoxes","rhythm"],["stone","time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],b,0.01,0.01,0.01,0.5,24,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Timestone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(24,"Timestone",!1,!0,!0)
$.Ae=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#ed1c24"),!0)
a.j(0,$.ad,L.d("#ed1c24"),!0)
a.j(0,$.ac,L.d("#820a0f"),!0)
a.j(0,$.am,L.d("#820a0f"),!0)
a.j(0,$.al,L.d("#4f0609"),!0)
a.j(0,$.af,L.d("#d0c217"),!0)
a.j(0,$.ag,L.d("#9e9311"),!0)
a.j(0,$.ae,L.d("#6b640c"),!0)
a.j(0,$.ak,L.d("#c3c3c3"),!0)
a.j(0,$.aj,L.d("#8f8f8f"),!0)
a.j(0,$.ai,L.d("#a88e00"),!0)
a.j(0,$.ah,L.d("#756300"),!0)
b=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance","Stone"],p),q)
c=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze","Stone"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.I($.fy,2,!0),new E.I($.dU,1,!0),new E.I($.c1,-1,!0),new E.I($.dV,-1,!0),new E.I($.c2,0.2,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new A.ox(1.01,0.5,0.01,a,b,c,d,e,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["stone","light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],f,g,0.01,0.01,0.01,0.5,25,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Realitystone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(25,"Realitystone",!1,!0,!0)
$.A6=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#e19aca"),!0)
h.j(0,$.ad,L.d("#e19aca"),!0)
h.j(0,$.ac,L.d("#7a546e"),!0)
h.j(0,$.am,L.d("#7a546e"),!0)
h.j(0,$.al,L.d("#473140"),!0)
h.j(0,$.af,L.d("#d0c217"),!0)
h.j(0,$.ag,L.d("#9e9311"),!0)
h.j(0,$.ae,L.d("#6b640c"),!0)
h.j(0,$.ak,L.d("#c3c3c3"),!0)
h.j(0,$.aj,L.d("#8f8f8f"),!0)
h.j(0,$.ai,L.d("#a88e00"),!0)
h.j(0,$.ah,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Gauntlet","Infinite","Mind","Space","Power","Soul","Time","Reality"],p),q)
f=P.f(H.a(["THANOS CAR","GAUNTLET HOLDER","STONE COLLECTOR"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Stone","Infinite","Gauntlet","Thanos","Mind","Space","Power","Soul","Time","Reality"],p),q)
c=P.f(H.a([new E.I($.c1,-1,!0),new E.I($.eI,2,!0)],k),l)
b=P.f(H.a(["Paradox Space"],p),q)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#FF9B00"),!0)
a.j(0,$.ad,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF8700"),!0)
a.j(0,$.am,L.d("#7F7F7F"),!0)
a.j(0,$.al,L.d("#727272"),!0)
a.j(0,$.af,L.d("#A3A3A3"),!0)
a.j(0,$.ag,L.d("#999999"),!0)
a.j(0,$.ae,L.d("#898989"),!0)
a.j(0,$.ak,L.d("#EFEFEF"),!0)
a.j(0,$.aj,L.d("#DBDBDB"),!0)
a.j(0,$.ai,L.d("#C6C6C6"),!0)
a.j(0,$.ah,L.d("#ADADAD"),!0)
a=new A.mq(2,1.5,1,h,g,f,e,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","infinite","thanos","gauntlet"],["stone","infinite","thanos","gauntlet"],c,b,0.01,0.01,0.01,0.5,26,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Gauntlet",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.a_(26,"Gauntlet",!1,!0,!0)
$.zT=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ab,L.d("#c55555"),!0)
a.j(0,$.ad,L.d("#c55555"),!0)
a.j(0,$.ac,L.d("#090404"),!0)
a.j(0,$.am,L.d("#ba872e"),!0)
a.j(0,$.al,L.d("#8e694e"),!0)
a.j(0,$.af,L.d("#b59e5d"),!0)
a.j(0,$.ag,L.d("#837243"),!0)
a.j(0,$.ae,L.d("#4f4528"),!0)
a.j(0,$.ak,L.d("#9fbfbf"),!0)
a.j(0,$.aj,L.d("#95b5b5"),!0)
a.j(0,$.ai,L.d("#956f6f"),!0)
a.j(0,$.ah,L.d("#714b4b"),!0)
b=P.f(H.a(["MEME STEALER","THANOS CAR","AGGRESIVE MEMER"],p),q)
c=P.f(H.a(["Meme","Memetastic","Mesmerizing","Mop","Memelord","Mashedpotato"],p),q)
d=P.f(H.a(["Meme","Funny","Stealing","Despacito","Meme Stealing","Cursed"],p),q)
e=P.f(H.a(["Shogun","Memelord","Air Horn","420","Thanos Car","Luis Fonsi","Bowsette"],p),q)
f=P.f(H.a([new E.I($.c1,-1,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#FF9B00"),!0)
h.j(0,$.ad,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF8700"),!0)
h.j(0,$.am,L.d("#7F7F7F"),!0)
h.j(0,$.al,L.d("#727272"),!0)
h.j(0,$.af,L.d("#A3A3A3"),!0)
h.j(0,$.ag,L.d("#999999"),!0)
h.j(0,$.ae,L.d("#898989"),!0)
h.j(0,$.ak,L.d("#EFEFEF"),!0)
h.j(0,$.aj,L.d("#DBDBDB"),!0)
h.j(0,$.ai,L.d("#C6C6C6"),!0)
h.j(0,$.ah,L.d("#ADADAD"),!0)
h=new D.nD(2,0.5,1,a,b,c,d,"cURSED","Some cursed meme music starts to play.",e,["memes"],["memes"],f,0.01,0.01,0.01,0.5,27,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Meme",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.a_(27,"Meme",!1,!1,!0)
$.A0=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ab,L.d("#010067"),!0)
h.j(0,$.ad,L.d("#010067"),!0)
h.j(0,$.ac,L.d("#000033"),!0)
h.j(0,$.am,L.d("#000033"),!0)
h.j(0,$.al,L.d("#00000d"),!0)
h.j(0,$.af,L.d("#0052F3"),!0)
h.j(0,$.ag,L.d("#0046D1"),!0)
h.j(0,$.ae,L.d("#003396"),!0)
h.j(0,$.ak,L.d("#0b0a33"),!0)
h.j(0,$.aj,L.d("#0a0a1a"),!0)
h.j(0,$.ai,L.d("#0b0b1b"),!0)
h.j(0,$.ah,L.d("#030308"),!0)
f=P.f(H.a(["Chill","Fear","Subordinance","Cold","Solids"],p),q)
e=P.f(H.a(["SOLIDIFIER","FEAR MAKER","ABSOLUTE DESTROYER"],p),q)
d=P.f(H.a(["Child","Chimpanzee","Choler","Cauliflower","Changer","Cake","Cone"],p),q)
c=P.f(H.a(["Chill","Rock","Cold","Fearing","Solidifying"],p),q)
b=P.f(["Thanos","Phobos","Deimos","Boreas"],q)
a=P.f(H.a([new E.I($.d0,2,!0),new E.I($.c1,-1,!0),new E.I($.dC,-1,!0)],k),l)
m=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
m.j(0,$.ab,L.d("#FF9B00"),!0)
m.j(0,$.ad,L.d("#FF9B00"),!0)
m.j(0,$.ac,L.d("#FF8700"),!0)
m.j(0,$.am,L.d("#7F7F7F"),!0)
m.j(0,$.al,L.d("#727272"),!0)
m.j(0,$.af,L.d("#A3A3A3"),!0)
m.j(0,$.ag,L.d("#999999"),!0)
m.j(0,$.ae,L.d("#898989"),!0)
m.j(0,$.ak,L.d("#EFEFEF"),!0)
m.j(0,$.aj,L.d("#DBDBDB"),!0)
m.j(0,$.ai,L.d("#C6C6C6"),!0)
m.j(0,$.ah,L.d("#ADADAD"),!0)
j=new S.lb(0.5,0.7,1,h,f,e,d,c,"Fear "," A shiver of fear is sent to the ENEMY, but the OWNER is strengthened.",["chill","cold","fear","subordination"],["chill","stone","solids"],b,a,0.01,0.01,0.01,0.5,28,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Chill",null,!1,!1,!0,!1,!1,!0,1,m,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
j.a_(28,"Chill",!1,!1,!0)
$.zQ=j
$.A3=L.zM(255,"Null",!1,!0,!1)
j=P.f(H.a([new E.I($.c1,1,!0),new E.I($.fy,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
a=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
b=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
c=H.a(["nobody"],p)
d=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
f=H.a(["Nobody"],p)
q=new F.nM(j,q,m,a,b,!1,c,d,e,f,1,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"loud","musical","Music")
q.G()
q.H()
B.cR(q)
$.Bf=q
q=P.f(H.a([new E.I($.dU,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kO(q,m,j,i,h,!1,g,f,e,d,13,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"nerdy","smart","Academic")
q.G()
q.H()
B.cR(q)
$.B8=q
q=P.f(H.a([new E.I($.eI,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kS(q,m,j,i,h,!1,g,f,e,d,4,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"dumb","athletic","Athletic")
q.G()
q.H()
B.cR(q)
$.B9=q
q=P.f(H.a([new E.I($.eH,-1,!0),new E.I($.fy,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.lf(q,m,j,i,h,!1,g,f,e,d,0,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"dorky","funny","Comedy")
q.G()
q.H()
B.cR(q)
$.Ba=q
q=P.f(H.a([new E.I($.c1,-1,!0),new E.I($.dV,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.ls(q,m,j,i,h,!1,g,f,e,d,2,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"pretentious","cultured","Culture")
q.G()
q.H()
B.cR(q)
$.Bb=q
q=P.f(H.a([new E.I($.c1,1,!0),new E.I($.dC,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lA(q,m,j,i,h,!1,g,f,e,d,8,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"boring","domestic","Domestic")
q.G()
q.H()
B.cR(q)
$.Bc=q
q=P.f(H.a([new E.I($.fy,1,!0),new E.I($.dh,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.m3(q,m,j,i,h,!1,g,f,e,d,7,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"whimpy","imaginative","Fantasy")
q.G()
q.H()
B.cR(q)
$.Bd=q
q=P.f(H.a([new E.I($.eI,1,!0),new E.I($.dV,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.na(q,m,j,i,h,!1,g,f,e,d,6,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"harsh","fair-minded","Justice")
q.G()
q.H()
B.cR(q)
$.Be=q
q=P.f(H.a([new E.I($.d0,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.on(q,m,j,i,h,!1,g,f,e,d,9,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"frivolous","geeky","PopCulture")
q.G()
q.H()
B.cR(q)
$.Bh=q
q=P.f(H.a([new E.I($.dC,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.oC(q,m,j,i,h,!1,g,f,e,d,12,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"obsessive","romantic","Romantic")
q.G()
q.H()
B.cR(q)
$.Bi=q
q=P.f(H.a([new E.I($.c1,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.oU(q,m,j,i,h,!1,g,f,e,d,11,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"shallow","extroverted","Social")
q.G()
q.H()
B.cR(q)
$.Bj=q
q=P.f(H.a([new E.I($.dC,-1,!0),new E.I($.c1,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.pE(q,m,j,i,h,!1,g,f,e,d,5,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"terrible","honest","Terrible")
q.G()
q.H()
B.cR(q)
$.Bl=q
q=P.f(H.a([new E.I($.dU,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.qn(q,m,j,i,h,!1,g,f,e,d,3,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"wordy","lettered","Writing")
q.G()
q.H()
B.cR(q)
$.Bm=q
q=P.f(H.a([new E.I($.dh,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.pD(q,m,j,i,h,!1,g,f,e,d,10,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"awkward","techy","Technology")
q.G()
q.H()
B.cR(q)
$.Bk=q
q=H.a(["nobody"],p)
l=P.f(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.ht(!0,q,l,k,p,-13,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"","","Null")
q.G()
q.H()
B.cR(q)
$.Bg=q
A.v_()
t=3
return P.bQ(Y.nN(),$async$tg)
case 3:case 1:return P.bg(r,s)}})
return P.bh($async$tg,s)}},V={lA:function lA(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ml:function ml(a){this.a=a},mw:function mw(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},nJ:function nJ(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},oa:function oa(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oD:function oD(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},pE:function pE(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
AM:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dy(new P.ch(""),0,0)
t.ai(a,8)
s=Math.pow(256,e)
c.toString
r=H.cJ(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.w(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.w(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ai(n-1,p)
t.ai(a,8)}return t.bb(b)},
AL:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cE(c)
s=new Uint8Array(t)
r=new B.dn(null,0)
r.a=J.e1(a,b)
for(q=e*8,p=0;p<c;){o=r.ac(q)+1
n=r.ac(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.w(s,l)
s[l]=n}p+=o}return s},
u0:function(a){return new V.lK(a)},
u_:function(a){return new V.lJ(a)},
AI:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dy(new P.ch(""),0,0)
t.ai(a,8)
s=d.gd_()
r=C.f.am(Math.log(H.kB(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cJ(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.w(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.w(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ai(m-1,o)
t.ai(a,r)}return t.bb(b)},
AH:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cE(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dn(null,0)
p.a=J.e1(a,b)
for(r=e*8,o=0;o<c;){n=p.ac(r)+1
m=p.ac(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.w(s,k)
s[k]=m}o+=n}return s},
tZ:function(a){return new V.lI(a)},
tY:function(a){return new V.lH(a)},
AK:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dy(new P.ch(""),0,0)
t.ai(a,8)
s=d.gd_()
r=C.f.am(Math.log(H.kB(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cJ(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.w(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.w(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.am(Math.log(n)/0.6931471805599453)+1
t.ai(k-1,5)
t.ai(n-1,k)
t.ai(a,r)}return t.bb(b)},
AJ:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cE(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dn(null,0)
p.a=J.e1(a,b)
for(o=0;o<c;){n=p.ac(p.ac(5)+1)+1
m=p.ac(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
lK:function lK(a){this.a=a},
lJ:function lJ(a){this.a=a},
lI:function lI(a){this.a=a},
lH:function lH(a){this.a=a}},Z={lC:function lC(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.aa=aa
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
AY:function(){var t,s
if(!$.wM)$.wM=!0
else return
t=[P.z]
s=new Y.pJ(H.a([],t))
$.uf=s
Z.cQ(s,"txt",null)
Z.cQ($.uf,"vert","x-shader/x-vertex")
Z.cQ($.uf,"frag","x-shader/x-fragment")
$.AW=new Y.ow(H.a([],t))
$.wO=new Y.l8(H.a([],t))
s=new B.qs(H.a([],t))
$.wR=s
Z.cQ(s,"zip",null)
Z.cQ($.wR,"bundle",null)
s=new U.qj(H.a([],t))
$.wQ=s
Z.cQ(s,"words",null)
s=new Q.ol(H.a([],t))
$.wP=s
Z.cQ(s,"png",null)
Z.cQ($.wP,"jpg","image/jpeg")
$.B3=new Q.oi(H.a([],t))
s=new M.p1(H.a([],t))
$.B4=s
Z.cQ(s,"psprite",null)
s=new V.ml(H.a([],t))
$.ue=s
Z.cQ(s,"ttf",null)
Z.cQ($.ue,"otf",null)
Z.cQ($.ue,"woff",null)
s=new Y.o0(null,H.a([],t))
$.B0=s
Z.cQ(s,"obj",null)
s=new U.nv(H.a([],t))
$.AZ=s
Z.cQ(s,"mp3",null)
$.B_=new U.po(H.a([],t))
s=new U.o5(H.a([],t))
$.B1=s
Z.cQ(s,"ogg",null)
$.B2=new U.pp(H.a([],t))},
cQ:function(a,b,c){$.$get$ho().i(0,b,new Z.iA(a,c,[null,null]))
a.a.push(b)},
wN:function(a){var t
if($.$get$ho().V(0,a)){t=$.$get$ho().n(0,a)
if(t.a instanceof O.c6)return t
throw H.l("File format for extension ."+H.y(a)+" does not match expected types.")}throw H.l("No file format found for extension ."+H.y(a))},
AX:function(a){var t=$.$get$ho()
t=t.gaj(t)
return new H.ef(t,new Z.mn(a),[H.aE(t,"n",0)])},
mn:function mn(a){this.a=a},
iA:function iA(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
n9:function n9(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
nu:function nu(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
uR:function uR(){},
uN:function uN(){},
uO:function uO(){}},X={iB:function iB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},il:function il(){},my:function my(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},mD:function mD(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
this.c=c}},N={a5:function a5(){},na:function na(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},os:function os(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oB:function oB(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oU:function oU(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oX:function oX(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},pP:function pP(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.aa=aa
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
GI:function(a){var t,s,r,q,p,o,n,m,l
t=J.cx(a)
s=new W.kn(document.querySelectorAll("link"),[null])
for(r=new H.dQ(s,s.gm(s),0,null,[null]);r.I();){q=r.d
p=J.aD(q)
if(!!p.$ishD&&q.rel==="stylesheet"){o=$.$get$og()
H.y(p.ga9(q))
o.toString
o=t.length
n=Math.min(o,J.c4(p.ga9(q)))
for(m=0;m<n;++m){if(m>=o)return H.w(t,m)
if(t[m]!==J.fN(p.ga9(q),m)){l=C.c.ah(t,m)
$.$get$og().toString
return l.split("/").length-1}continue}}}$.$get$og().aM(C.h,"Didn't find a css link to derive relative path")
return 0},
vf:function(){var t=P.yc()
if(!$.$get$of().V(0,t))$.$get$of().i(0,t,N.GI(t))
return $.$get$of().n(0,t)}},E={iQ:function iQ(){},o4:function o4(){},I:function I(a,b,c){this.a=a
this.b=b
this.c=c},fT:function fT(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},nL:function nL(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ov:function ov(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},oG:function oG(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},qe:function qe(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},B={mv:function mv(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
cR:function(a){var t=a.f
if($.$get$mL().V(0,t))throw H.l("Duplicate aspect id for "+a.D(0)+": "+t+" is already registered for "+J.cx($.$get$mL().n(0,t))+".")
$.$get$mL().i(0,t,a)},
ht:function ht(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
qs:function qs(a){this.a=a},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b){this.a=a
this.b=b},
Ig:function(a){return a.b_(0)},
HH:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=P.z
s=P.c0(t,P.U)
r=B.d1
q=new B.eO(s,P.c0(t,t),J.zn(a),!1,null,null)
q.cn(null,null,r)
for(p=J.zm(a.gcW()),p=p.gS(p);p.I();){o=p.gL()
s.i(0,o,J.fN(a.gcW(),o))}for(s=a.ghB(),s=s.gaj(s),s=s.gS(s),p=q.d,n=a.d;s.I();){o=s.gL()
p.i(0,o,n.n(0,o))}for(s=a.b,p=s.length,r=[r],m=0;m<s.length;s.length===p||(0,H.bG)(s),++m){l=s[m]
n=J.aG(l)
k=n.gY(l)
j=J.zv(k)
k=k.gbZ()
i=new B.d1(k)
if(k==null){k=P.c0(t,t)
i.a=k}k.i(0,"MAIN",j)
n=n.gbd(l)
C.b.h(q.b,new Q.h(i,n,r))}return q},
pG:function pG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pI:function pI(a){this.a=a},
pH:function pH(a,b){this.a=a
this.b=b},
d1:function d1(a){this.a=a},
eO:function eO(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
eP:function eP(a,b){this.a=a
this.b=b}},Q={mE:function mE(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mH:function mH(){},ol:function ol(a){this.a=a},oi:function oi(a){this.a=a},nf:function nf(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,aa,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.J=J
_.aa=aa
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},oC:function oC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},qd:function qd(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},jV:function jV(){},
E:function(a,b,c){var t=new Q.dY(null,null,[c])
t.cn(a,b,c)
return t},
vO:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.E(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.e0(a,"$isn",[e],"$asn"))if(H.e0(a,"$iscD",[e],"$ascD"))for(s=J.cV(a.gbp()),r=0;s.I();){q=s.gL()
p=t.b
o=p.length
if(r>=o)return H.w(p,r)
p[r]=q;++r}else for(s=a.gS(a),p=[H.N(t,0)],r=0;s.I();){n=s.gL()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.w(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gS(a),p=[e],o=[H.N(t,0)];s.I();){l=s.gL()
if(H.Ix(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.w(m,0)
m[0]=new Q.h(l,k,o)}else if(H.e0(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.w(m,0)
m[0]=l}else throw H.l("Invalid entry type "+H.y(J.wg(l))+" for WeightedList<"+H.y(H.c3(H.dE(e)))+">. Should be "+H.y(H.c3(H.dE(e)))+" or WeightPair<"+H.y(H.c3(H.dE(e)))+">.")}return t},
vP:function(a,b,c,d){return new Q.kc(J.wi(a.gbp(),new Q.qh(c,d,b)),null,[c,d])},
cD:function cD(){},
dY:function dY(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
i2:function i2(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eR:function eR(){},
i1:function i1(){},
qg:function qg(a,$ti){this.a=a
this.$ti=$ti},
kc:function kc(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
oL:function(){var t=0,s=P.bd(),r
var $async$oL=P.bi(function(a,b){if(a===1)return P.bf(b,s)
while(true)switch(t){case 0:t=3
return P.bQ(A.hG("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$oL)
case 3:r=A.hG("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$oL,s)}},G={ni:function ni(y1,y2,p,q,t,u,v,w,A,B,C,E,F,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},on:function on(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Ao:function(a){var t,s,r,q,p,o,n,m,l
t=G.W
s=P.jG(a,t)
r=P.a2(null,null,null,t)
q=H.a([],[G.e])
for(t=G.Gl(),p=J.cV(t.a),t=new H.kd(p,t.b,[H.N(t,0)]);t.I();){o=p.gL()
if(o.eO(s))q.push(o)}C.b.f6(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bG)(q),++n){o=q[n]
if(o.eO(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bG)(p),++l)s.an(0,p[l])}}if(s.a!==0)r.at(0,s)
return r},
Gl:function(){var t=$.$get$c()
t.toString
return new H.ef(t,new G.n_(),[H.N(t,0)])},
W:function W(){},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
n_:function n_(){}},D={nD:function nD(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},pD:function pD(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
HB:function(){if($.xV)return
$.xV=!0
var t=new D.cL("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
t.y=0
$.p3=t
t=new D.cL("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.HA=t
t=new D.kf(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
t.y=2.5
t.Q=1
$.eI=t
t=new D.kf(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
t.y=2.5
$.dV=t
t=new D.cL("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.Hz=t
t=new D.cL("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.d0=t
t=new D.oz("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.dC=t
t=new D.cL("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.c1=t
t=new D.cL("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.dU=t
t=new D.cL("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.fy=t
t=new D.cL("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.eH=t
t=new D.cL("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.dh=t
t=new D.cL("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.c2=t},
vB:function(){var t=$.$get$cS()
return new H.ef(t,new D.p4(),[H.N(t,0)])},
p4:function p4(){},
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
_.ch=ch},
kf:function kf(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
oz:function oz(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}},F={nM:function nM(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},qn:function qn(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Gr:function(a){if(a===C.i){window
return C.j.gau(C.j)}if(a===C.h){window
return C.j.giG()}if(a===C.a5){window
return C.j.ghW()}return P.IB()},
hH:function hH(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
uW:function uW(){},
AG:function(a,b,c,d){var t,s,r,q
t=new B.dy(new P.ch(""),0,0)
t.ai(a,8)
c.toString
s=H.cJ(c,0,null)
for(r=s.length,q=0;q<r;++q)t.c0(s[q])
return t.bb(b)},
AF:function(a,b,c,d){var t,s,r,q,p
t=H.cE(c)
s=new Uint8Array(t)
r=new B.dn(null,0)
r.a=J.e1(a,b)
for(q=0;q<c;++q){p=r.c9()
if(q>=t)return H.w(s,q)
s[q]=p}return s},
AE:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dy(new P.ch(""),0,0)
t.ai(a,8)
s=d.gd_()
r=C.f.am(Math.log(H.kB(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cJ(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.w(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.w(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.c0(o-1)
t.ai(a,r)}return t.bb(b)},
AD:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cE(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dn(null,0)
p.a=J.e1(a,b)
for(o=0;o<c;){n=p.c9()+1
m=p.ac(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
AC:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dy(new P.ch(""),0,0)
t.ai(a,8)
c.toString
s=H.cJ(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.w(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.w(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.c0(p-1)
t.c0(a)}return t.bb(b)},
AB:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cE(c)
s=new Uint8Array(t)
r=new B.dn(null,0)
r.a=J.e1(a,b)
for(q=0;q<c;){p=r.c9()+1
o=r.c9()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.w(s,m)
s[m]=o}q+=p}return s}},R={
H2:function(a){var t,s
if(a.gm(a).aC(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.giN(s).giY().eu("checking for two players, ps is "+H.y(a)+", ret is "+t)
return t},
GR:function(a){a.gaf(a).gc1()
return!1},
H1:function(a){a.gaf(a).gc1()
return!1},
H0:function(a){a.gaf(a).gc1()
return!1},
H_:function(a){return a.gaf(a).gbx().giX()},
GY:function(a){return a.gaf(a).gbx().giV()},
GX:function(a){return a.gaf(a).gbx().giU()},
GU:function(a){return a.gaf(a).gbx().giS()},
GW:function(a){return a.gaf(a).gbx().giT()},
GZ:function(a){return a.gaf(a).gbx().giW()},
GV:function(a){var t=a.gaf(a)
t.gc1()
t.gc1()
return!1},
GS:function(a){return!0},
GT:function(a){a.gaf(a).giP()
return!1},
ou:function ou(){},
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
px:function px(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
hn:function hn(){},
ve:function ve(){},
vd:function vd(){}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,V,Z,X,N,E,B,Q,G,D,F,R]
setFunctionNamesIfNecessary(v)
var $={}
H.uT.prototype={}
J.j.prototype={
U:function(a,b){return a===b},
ga8:function(a){return H.eA(a)},
D:function(a){return H.oq(a)},
gad:function(a){return new H.dX(H.kF(a),null)},
$ishn:1,
$isap:1,
$isfr:1,
$isap:1,
$isn5:1,
$isj:1,
$isn5:1,
$isj:1,
$ishJ:1,
$isap:1}
J.n3.prototype={
D:function(a){return String(a)},
ga8:function(a){return a?519018:218159},
gad:function(a){return C.al},
$iscU:1}
J.n4.prototype={
U:function(a,b){return null==b},
D:function(a){return"null"},
ga8:function(a){return 0},
gad:function(a){return C.af},
$iscC:1}
J.hB.prototype={
ga8:function(a){return 0},
gad:function(a){return C.ae},
D:function(a){return String(a)},
$isn5:1,
h:function(a,b){return a.add(b)},
an:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gc6:function(a){return a.left},
gcd:function(a){return a.top},
geb:function(a){return a.attributes},
sak:function(a,b){return a.type=b},
gbe:function(a){return a.width},
gb7:function(a){return a.height},
gaI:function(a){return a.value},
ie:function(a,b){return a.parse(b)},
f4:function(a,b){return a.setLogging(b)},
f5:function(a,b){return a.setMaterials(b)}}
J.ok.prototype={}
J.eM.prototype={}
J.ev.prototype={
D:function(a){var t=a[$.$get$wv()]
return t==null?this.fb(a):J.cx(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.et.prototype={
c4:function(a,b){if(!!a.immutable$list)throw H.l(new P.V(b))},
cP:function(a,b){if(!!a.fixed$length)throw H.l(new P.V(b))},
h:function(a,b){this.cP(a,"add")
a.push(b)},
ab:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.l(new P.by(a))}},
aB:function(a,b){return new H.ey(a,b,[H.N(a,0),null])},
aL:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.y(a[r])
if(r>=t)return H.w(s,r)
s[r]=q}return s.join(b)},
di:function(a,b){return H.vC(a,b,null,H.N(a,0))},
hL:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.l(new P.by(a))}return s},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
cl:function(a,b,c){if(b<0||b>a.length)throw H.l(P.bw(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.l(H.bx(c))
if(c<b||c>a.length)throw H.l(P.bw(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.N(a,0)])
return H.a(a.slice(b,c),[H.N(a,0)])},
gaf:function(a){if(a.length>0)return a[0]
throw H.l(H.hz())},
gbh:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.l(H.hz())},
a6:function(a,b,c,d,e){var t,s,r
this.c4(a,"setRange")
P.de(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.bb(P.bw(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.l(H.xw())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}},
ay:function(a,b,c,d){return this.a6(a,b,c,d,0)},
bC:function(a,b,c,d){var t
this.c4(a,"fill range")
P.de(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aH:function(a,b,c,d){var t,s,r,q,p,o
this.cP(a,"replaceRange")
P.de(b,c,a.length,null,null,null)
d=C.c.ar(d)
if(typeof c!=="number")return c.al()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.ay(a,b,r,d)
if(p!==0){this.a6(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a6(a,r,o,a,c)
this.ay(a,b,r,d)}},
ea:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.l(new P.by(a))}return!1},
hJ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.l(new P.by(a))}return!0},
dj:function(a,b){var t
this.c4(a,"sort")
t=b==null?P.IA():b
H.k1(a,0,a.length-1,t)},
f6:function(a){return this.dj(a,null)},
b8:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.bc(a[t],b))return t
return-1},
bn:function(a,b){return this.b8(a,b,0)},
Z:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bc(a[t],b))return!0
return!1},
gX:function(a){return a.length===0},
D:function(a){return P.jB(a,"[","]")},
a5:function(a,b){var t=H.a(a.slice(0),[H.N(a,0)])
return t},
ar:function(a){return this.a5(a,!0)},
gS:function(a){return new J.ij(a,a.length,0,null,[H.N(a,0)])},
ga8:function(a){return H.eA(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cP(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dH(b,"newLength",null))
if(b<0)throw H.l(P.bw(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.cc(a,b))
if(b>=a.length||b<0)throw H.l(H.cc(a,b))
return a[b]},
i:function(a,b,c){this.c4(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.cc(a,b))
if(b>=a.length||b<0)throw H.l(H.cc(a,b))
a[b]=c},
$isaR:1,
$asaR:function(){},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
J.uS.prototype={}
J.ij.prototype={
gL:function(){return this.d},
I:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.l(H.bG(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fn.prototype={
aE:function(a,b){var t
if(typeof b!=="number")throw H.l(H.bx(b))
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
throw H.l(new P.V(""+a+".floor()"))},
bJ:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.l(new P.V(""+a+".round()"))},
ae:function(a,b,c){if(C.a.aE(b,c)>0)throw H.l(H.bx(b))
if(this.aE(a,b)<0)return b
if(this.aE(a,c)>0)return c
return a},
l:function(a){return a},
bL:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.l(P.bw(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.a0(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.bb(new P.V("Unexpected toString result: "+t))
r=J.bj(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.aw("0",q)},
D:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga8:function(a){return a&0x1FFFFFFF},
de:function(a){return-a},
W:function(a,b){if(typeof b!=="number")throw H.l(H.bx(b))
return a+b},
aw:function(a,b){if(typeof b!=="number")throw H.l(H.bx(b))
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
throw H.l(new P.V("Result of truncating division is "+H.y(t)+": "+H.y(a)+" ~/ "+H.y(b)))},
az:function(a,b){if(typeof b!=="number")throw H.l(H.bx(b))
if(b<0)throw H.l(H.bx(b))
return b>31?0:a<<b>>>0},
as:function(a,b){return b>31?0:a<<b>>>0},
b2:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
hd:function(a,b){if(b<0)throw H.l(H.bx(b))
return b>31?0:a>>>b},
e3:function(a,b){return b>31?0:a>>>b},
a2:function(a,b){if(typeof b!=="number")throw H.l(H.bx(b))
return a<b},
aC:function(a,b){if(typeof b!=="number")throw H.l(H.bx(b))
return a>b},
ax:function(a,b){if(typeof b!=="number")throw H.l(H.bx(b))
return a>=b},
gad:function(a){return C.ao},
$isdw:1}
J.jE.prototype={
gad:function(a){return C.an},
$isU:1,
$isdw:1,
$isF:1}
J.jD.prototype={
gad:function(a){return C.am},
$isU:1,
$isdw:1}
J.eu.prototype={
a0:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.cc(a,b))
if(b<0)throw H.l(H.cc(a,b))
if(b>=a.length)H.bb(H.cc(a,b))
return a.charCodeAt(b)},
a7:function(a,b){if(b>=a.length)throw H.l(H.cc(a,b))
return a.charCodeAt(b)},
cM:function(a,b,c){if(c>b.length)throw H.l(P.bw(c,0,b.length,null,null))
return new H.rC(b,a,c)},
aV:function(a,b){return this.cM(a,b,0)},
ez:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.l(P.bw(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.a0(b,c+s)!==this.a7(a,s))return
return new H.k6(c,b,a)},
W:function(a,b){if(typeof b!=="string")throw H.l(P.dH(b,null,null))
return a+b},
hI:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ah(a,s-t)},
d8:function(a,b,c){return H.z6(a,b,c)},
iw:function(a,b,c){return H.J5(a,b,c,null)},
f7:function(a,b){if(b==null)H.bb(H.bx(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hA&&b.gdR().exec("").length-2===0)return a.split(b.gh0())
else return this.fJ(a,b)},
aH:function(a,b,c,d){var t,s
H.vX(b)
c=P.de(b,c,a.length,null,null,null)
H.vX(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fJ:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.z])
for(s=J.ze(b,a),s=s.gS(s),r=0,q=1;s.I();){p=s.gL()
o=p.gdk(p)
n=p.gej(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.N(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ah(a,r))
return t},
aJ:function(a,b,c){var t
H.vX(c)
if(typeof c!=="number")return c.a2()
if(c<0||c>a.length)throw H.l(P.bw(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.zz(b,a,c)!=null},
ag:function(a,b){return this.aJ(a,b,0)},
N:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.bb(H.bx(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.bb(H.bx(c))
if(typeof b!=="number")return b.a2()
if(b<0)throw H.l(P.jY(b,null,null))
if(typeof c!=="number")return H.a9(c)
if(b>c)throw H.l(P.jY(b,null,null))
if(c>a.length)throw H.l(P.jY(c,null,null))
return a.substring(b,c)},
ah:function(a,b){return this.N(a,b,null)},
iD:function(a){return a.toLowerCase()},
iE:function(a){return a.toUpperCase()},
bq:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a7(t,0)===133){r=J.Gn(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.a0(t,q)===133?J.uP(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eP:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.a0(t,r)===133)s=J.uP(t,r)}else{s=J.uP(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
aw:function(a,b){var t,s
if(typeof b!=="number")return H.a9(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.l(C.O)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b8:function(a,b,c){var t
if(c<0||c>a.length)throw H.l(P.bw(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bn:function(a,b){return this.b8(a,b,0)},
i2:function(a,b,c){var t
if(b==null)H.bb(H.bx(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.bb(P.bw(t,0,c,null,null))
if(b.cw(a,t)!=null)return t}return-1},
ew:function(a,b){return this.i2(a,b,null)},
eh:function(a,b,c){if(c>a.length)throw H.l(P.bw(c,0,a.length,null,null))
return H.J4(a,b,c)},
Z:function(a,b){return this.eh(a,b,0)},
gX:function(a){return a.length===0},
aE:function(a,b){var t
if(typeof b!=="string")throw H.l(H.bx(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
D:function(a){return a},
ga8:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gad:function(a){return C.ag},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.cc(a,b))
if(b>=a.length||b<0)throw H.l(H.cc(a,b))
return a[b]},
$isaR:1,
$asaR:function(){},
$isz:1,
$isvg:1}
H.le.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.a0(this.a,b)},
$asi_:function(){return[P.F]},
$ashF:function(){return[P.F]},
$asfs:function(){return[P.F]},
$asq:function(){return[P.F]},
$asv:function(){return[P.F]},
$asn:function(){return[P.F]}}
H.v.prototype={$asv:null}
H.ew.prototype={
gS:function(a){return new H.dQ(this,this.gm(this),0,null,[H.aE(this,"ew",0)])},
ab:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.T(0,s))
if(t!==this.gm(this))throw H.l(new P.by(this))}},
gX:function(a){return this.gm(this)===0},
gaf:function(a){if(this.gm(this)===0)throw H.l(H.hz())
return this.T(0,0)},
Z:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.bc(this.T(0,s),b))return!0
if(t!==this.gm(this))throw H.l(new P.by(this))}return!1},
aL:function(a,b){var t,s,r,q
t=this.gm(this)
if(b.length!==0){if(t===0)return""
s=H.y(this.T(0,0))
if(t!==this.gm(this))throw H.l(new P.by(this))
for(r=s,q=1;q<t;++q){r=r+b+H.y(this.T(0,q))
if(t!==this.gm(this))throw H.l(new P.by(this))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<t;++q){r+=H.y(this.T(0,q))
if(t!==this.gm(this))throw H.l(new P.by(this))}return r.charCodeAt(0)==0?r:r}},
cg:function(a,b){return this.fa(0,b)},
aB:function(a,b){return new H.ey(this,b,[H.aE(this,"ew",0),null])},
a5:function(a,b){var t,s,r
t=H.a([],[H.aE(this,"ew",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.T(0,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ar:function(a){return this.a5(a,!0)}}
H.pv.prototype={
gfK:function(){var t,s
t=J.c4(this.a)
s=this.c
if(s==null||s>t)return t
return s},
ghe:function(){var t,s
t=J.c4(this.a)
s=this.b
if(J.cw(s,t))return t
return s},
gm:function(a){var t,s,r
t=J.c4(this.a)
s=this.b
if(J.w5(s,t))return 0
r=this.c
if(r==null||r>=t){if(typeof s!=="number")return H.a9(s)
return t-s}if(typeof r!=="number")return r.al()
if(typeof s!=="number")return H.a9(s)
return r-s},
T:function(a,b){var t=J.eg(this.ghe(),b)
if(J.eW(b,0)||J.w5(t,this.gfK()))throw H.l(P.bA(b,this,"index",null,null))
return J.w7(this.a,t)},
a5:function(a,b){var t,s,r,q,p,o,n,m,l
t=this.b
s=this.a
r=J.bj(s)
q=r.gm(s)
p=this.c
if(p!=null&&p<q)q=p
if(typeof q!=="number")return q.al()
if(typeof t!=="number")return H.a9(t)
o=q-t
if(o<0)o=0
n=this.$ti
if(b){m=H.a([],n)
C.b.sm(m,o)}else m=H.a(new Array(o),n)
for(l=0;l<o;++l){n=r.T(s,t+l)
if(l>=m.length)return H.w(m,l)
m[l]=n
if(r.gm(s)<q)throw H.l(new P.by(this))}return m},
ar:function(a){return this.a5(a,!0)},
fk:function(a,b,c,d){var t,s,r
t=this.b
s=J.dv(t)
if(s.a2(t,0))H.bb(P.bw(t,0,null,"start",null))
r=this.c
if(r!=null){if(r<0)H.bb(P.bw(r,0,null,"end",null))
if(s.aC(t,r))throw H.l(P.bw(t,0,r,"start",null))}}}
H.dQ.prototype={
gL:function(){return this.d},
I:function(){var t,s,r,q
t=this.a
s=J.bj(t)
r=s.gm(t)
if(this.b!==r)throw H.l(new P.by(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.T(t,q);++this.c
return!0}}
H.hI.prototype={
gS:function(a){return new H.jI(null,J.cV(this.a),this.b,this.$ti)},
gm:function(a){return J.c4(this.a)},
gX:function(a){return J.kL(this.a)},
$asn:function(a,b){return[b]}}
H.f7.prototype={$isv:1,
$asv:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jI.prototype={
I:function(){var t=this.b
if(t.I()){this.a=this.c.$1(t.gL())
return!0}this.a=null
return!1},
gL:function(){return this.a},
$asjC:function(a,b){return[b]}}
H.ey.prototype={
gm:function(a){return J.c4(this.a)},
T:function(a,b){return this.b.$1(J.w7(this.a,b))},
$asew:function(a,b){return[b]},
$asv:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.ef.prototype={
gS:function(a){return new H.kd(J.cV(this.a),this.b,this.$ti)},
aB:function(a,b){return new H.hI(this,b,[H.N(this,0),null])}}
H.kd.prototype={
I:function(){var t,s
for(t=this.a,s=this.b;t.I();)if(s.$1(t.gL())===!0)return!0
return!1},
gL:function(){return this.a.gL()}}
H.iM.prototype={
sm:function(a,b){throw H.l(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.l(new P.V("Cannot add to a fixed-length list"))},
aH:function(a,b,c,d){throw H.l(new P.V("Cannot remove from a fixed-length list"))}}
H.q_.prototype={
i:function(a,b,c){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.l(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.l(new P.V("Cannot add to an unmodifiable list"))},
a6:function(a,b,c,d,e){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
ay:function(a,b,c,d){return this.a6(a,b,c,d,0)},
aH:function(a,b,c,d){throw H.l(new P.V("Cannot remove from an unmodifiable list"))},
bC:function(a,b,c,d){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
H.i_.prototype={$asq:null,$asv:null,$asn:null,$isq:1,$isv:1,$isn:1}
H.tA.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.tB.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.rh.prototype={}
H.fF.prototype={
e9:function(a,b){if(!this.f.U(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cK()},
iv:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.an(0,a)
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
if(q===s.c)s.dJ();++s.d}this.y=!1}this.cK()},
hj:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aD(a),s=0;r=this.ch,s<r.length;s+=2)if(t.U(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.w(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
it:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aD(a),s=0;r=this.ch,s<r.length;s+=2)if(t.U(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.bb(new P.V("removeRange"))
P.de(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
f3:function(a,b){if(!this.r.U(0,a))return
this.db=b},
hR:function(a,b,c){var t=J.aD(b)
if(!t.U(b,0))t=t.U(b,1)&&!this.cy
else t=!0
if(t){J.fP(a,c)
return}t=this.cx
if(t==null){t=P.uY(null,null)
this.cx=t}t.aS(0,new H.rc(a,c))},
hQ:function(a,b){var t
if(!this.r.U(0,a))return
t=J.aD(b)
if(!t.U(b,0))t=t.U(b,1)&&!this.cy
else t=!0
if(t){this.c5()
return}t=this.cx
if(t==null){t=P.uY(null,null)
this.cx=t}t.aS(0,this.gi1())},
hS:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fM(a)
if(b!=null)P.fM(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cx(a)
s[1]=b==null?null:J.cx(b)
for(r=new P.d3(t,t.r,null,null,[null]),r.c=t.e;r.I();)J.fP(r.d,s)},
bB:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.bH(o)
p=H.cp(o)
this.hS(q,p)
if(this.db===!0){this.c5()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gi0()
if(this.cx!=null)for(;n=this.cx,!n.gX(n);)this.cx.eI().$0()}return s},
cY:function(a){return this.b.n(0,a)},
ds:function(a,b){var t=this.b
if(t.V(0,a))throw H.l(P.lM("Registry: ports must be registered only once."))
t.i(0,a,b)},
cK:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.c5()},
c5:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.b4(0)
for(t=this.b,s=t.gce(t),s=s.gS(s);s.I();)s.gL().fC()
t.b4(0)
this.c.b4(0)
u.globalState.z.an(0,this.a)
this.dx.b4(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.w(t,p)
J.fP(q,t[p])}this.ch=null}},
gi0:function(){return this.d},
ghv:function(){return this.e}}
H.rc.prototype={
$0:function(){J.fP(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qP.prototype={
hC:function(){var t=this.a
if(t.b===t.c)return
return t.eI()},
eN:function(){var t,s,r
t=this.hC()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.V(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gX(s)}else s=!1
else s=!1
else s=!1
if(s)H.bb(P.lM("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gX(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hE(["command","close"])
r=new H.dD(!0,new P.kr(0,null,null,null,null,null,0,[null,P.F])).aD(r)
s.toString
self.postMessage(r)}return!1}t.im()
return!0},
dZ:function(){if(self.window!=null)new H.qQ(this).$0()
else for(;this.eN(););},
bK:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dZ()
else try{this.dZ()}catch(r){t=H.bH(r)
s=H.cp(r)
q=u.globalState.Q
p=P.hE(["command","error","msg",H.y(t)+"\n"+H.y(s)])
p=new H.dD(!0,P.i8(null,P.F)).aD(p)
q.toString
self.postMessage(p)}}}
H.qQ.prototype={
$0:function(){if(!this.a.eN())return
P.y_(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.eT.prototype={
im:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bB(this.b)}}
H.rg.prototype={}
H.mM.prototype={
$0:function(){H.Bq(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mN.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fL(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fL(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cK()},
$S:function(){return{func:1,v:true}}}
H.qB.prototype={}
H.fG.prototype={
bf:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdP())return
r=H.Id(b)
if(t.ghv()===s){s=J.bj(r)
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
break}return}u.globalState.f.a.aS(0,new H.eT(t,new H.rj(this,r),"receive"))},
U:function(a,b){if(b==null)return!1
return b instanceof H.fG&&J.bc(this.b,b.b)},
ga8:function(a){return this.b.gcA()}}
H.rj.prototype={
$0:function(){var t=this.a.b
if(!t.gdP())t.fw(0,this.b)},
$S:function(){return{func:1}}}
H.ic.prototype={
bf:function(a,b){var t,s,r
t=P.hE(["command","message","port",this,"msg",b])
s=new H.dD(!0,P.i8(null,P.F)).aD(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
U:function(a,b){if(b==null)return!1
return b instanceof H.ic&&J.bc(this.b,b.b)&&J.bc(this.a,b.a)&&J.bc(this.c,b.c)},
ga8:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.az()
s=this.a
if(typeof s!=="number")return s.az()
r=this.c
if(typeof r!=="number")return H.a9(r)
return(t<<16^s<<8^r)>>>0}}
H.fv.prototype={
fC:function(){this.c=!0
this.b=null},
fw:function(a,b){if(this.c)return
this.b.$1(b)},
$isH3:1,
gcA:function(){return this.a},
gdP:function(){return this.c}}
H.pR.prototype={
fl:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aS(0,new H.eT(s,new H.pS(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.du(new H.pT(this,b),0),a)}else throw H.l(new P.V("Timer greater than 0."))}}
H.pS.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pT.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dI.prototype={
ga8:function(a){var t=this.a
if(typeof t!=="number")return t.dh()
t=C.d.b2(t,0)^C.d.aq(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
U:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dI){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcA:function(){return this.a}}
H.dD.prototype={
aD:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.aD(a)
if(!!t.$isfo)return["buffer",a]
if(!!t.$isez)return["typed",a]
if(!!t.$isaR)return this.f_(a)
if(!!t.$isBn){r=this.geX()
q=t.gaj(a)
q=H.dr(q,r,H.aE(q,"n",0),null)
q=P.db(q,!0,H.aE(q,"n",0))
t=t.gce(a)
t=H.dr(t,r,H.aE(t,"n",0),null)
return["map",q,P.db(t,!0,H.aE(t,"n",0))]}if(!!t.$isn5)return this.f0(a)
if(!!t.$isj)this.eQ(a)
if(!!t.$isH3)this.bN(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfG)return this.f1(a)
if(!!t.$isic)return this.f2(a)
if(!!t.$isf3){p=a.$static_name
if(p==null)this.bN(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdI)return["capability",a.a]
if(!(a instanceof P.ap))this.eQ(a)
return["dart",u.classIdExtractor(a),this.eZ(u.classFieldsExtractor(a))]},
bN:function(a,b){throw H.l(new P.V((b==null?"Can't transmit:":b)+" "+H.y(a)))},
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
if(s>=t.length)return H.w(t,s)
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
if(r>=s.length)return H.w(s,r)
s[r]=q}return["js-object",t,s]},
f2:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
f1:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcA()]
return["raw sendport",a]}}
H.eS.prototype={
b5:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.l(P.dG("Bad serialized message: "+H.y(a)))
switch(C.b.gaf(a)){case"ref":if(1>=a.length)return H.w(a,1)
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
s=H.a(this.bz(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bz(r),[null])
case"mutable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return this.bz(r)
case"const":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bz(r),[null])
s.fixed$length=Array
return s
case"map":return this.hG(a)
case"sendport":return this.hH(a)
case"raw sendport":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.hF(a)
case"function":if(1>=a.length)return H.w(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.w(a,1)
return new H.dI(a[1])
case"dart":s=a.length
if(1>=s)return H.w(a,1)
q=a[1]
if(2>=s)return H.w(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bz(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.l("couldn't deserialize: "+H.y(a))}},
bz:function(a){var t,s,r
t=J.bj(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
if(!(s<r))break
t.i(a,s,this.b5(t.n(a,s)));++s}return a},
hG:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q=P.jF()
this.b.push(q)
s=J.zG(J.wi(s,this.ghE()))
for(t=J.bj(s),p=J.bj(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.b5(p.n(r,o)))
return q},
hH:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
if(3>=t)return H.w(a,3)
q=a[3]
if(J.bc(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cY(q)
if(o==null)return
n=new H.fG(o,r)}else n=new H.ic(s,q,r)
this.b.push(n)
return n},
hF:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bj(s)
p=J.bj(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a9(n)
if(!(o<n))break
q[t.n(s,o)]=this.b5(p.n(r,o));++o}return q}}
H.lh.prototype={
gX:function(a){return this.gm(this)===0},
D:function(a){return P.xD(this)},
i:function(a,b,c){return H.Aq()},
$isbo:1,
$asbo:null}
H.li.prototype={
gm:function(a){return this.a},
V:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.V(0,b))return
return this.dH(b)},
dH:function(a){return this.b[a]},
ab:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dH(q))}}}
H.oy.prototype={}
H.pX.prototype={
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
H.jQ.prototype={
D:function(a){var t=this.b
if(t==null)return"NullError: "+H.y(this.a)
return"NullError: method not found: '"+H.y(t)+"' on null"}}
H.n8.prototype={
D:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.y(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.y(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.y(this.a)+")"}}
H.pZ.prototype={
D:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.he.prototype={
gaQ:function(){return this.b}}
H.tC.prototype={
$1:function(a){if(!!J.aD(a).$isek)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.ku.prototype={
D:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.tm.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.tn.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.to.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.tp.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.tq.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.f3.prototype={
D:function(a){return"Closure '"+H.or(this).trim()+"'"},
giL:function(){return this},
$D:null}
H.pC.prototype={}
H.p2.prototype={
D:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fW.prototype={
U:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fW))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga8:function(a){var t,s
t=this.c
if(t==null)s=H.eA(this.a)
else s=typeof t!=="object"?J.dF(t):H.eA(t)
t=H.eA(this.b)
if(typeof s!=="number")return s.iO()
return(s^t)>>>0},
D:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.y(this.d)+"' of "+H.oq(t)}}
H.la.prototype={
D:function(a){return this.a}}
H.oE.prototype={
D:function(a){return"RuntimeError: "+H.y(this.a)}}
H.dX.prototype={
D:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga8:function(a){return J.dF(this.a)},
U:function(a,b){if(b==null)return!1
return b instanceof H.dX&&J.bc(this.a,b.a)}}
H.r.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gaj:function(a){return new H.nl(this,[H.N(this,0)])},
gce:function(a){return H.dr(this.gaj(this),new H.n7(this),H.N(this,0),H.N(this,1))},
V:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dC(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dC(s,b)}else return this.hX(b)},
hX:function(a){var t=this.d
if(t==null)return!1
return this.bF(this.bS(t,this.bE(a)),a)>=0},
at:function(a,b){b.ab(0,new H.n6(this))},
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
ab:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.l(new P.by(this))
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
t=new H.nk(a,b,null,null,[null,null])
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
bE:function(a){return J.dF(a)&0x3ffffff},
bF:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bc(a[s].ges(),b))return s
return-1},
D:function(a){return P.xD(this)},
bv:function(a,b){return a[b]},
bS:function(a,b){return a[b]},
cI:function(a,b,c){a[b]=c},
dF:function(a,b){delete a[b]},
dC:function(a,b){return this.bv(a,b)!=null},
cC:function(){var t=Object.create(null)
this.cI(t,"<non-identifier-key>",t)
this.dF(t,"<non-identifier-key>")
return t},
$isBn:1,
$isbo:1,
$asbo:null}
H.n7.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.n6.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eV(function(a,b){return{func:1,args:[a,b]}},this.a,"r")}}
H.nk.prototype={
ges:function(){return this.a},
gb6:function(){return this.b},
gh5:function(){return this.d},
sb6:function(a){return this.b=a}}
H.nl.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gS:function(a){var t,s
t=this.a
s=new H.nm(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
Z:function(a,b){return this.a.V(0,b)},
ab:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.l(new P.by(t))
s=s.c}}}
H.nm.prototype={
gL:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.by(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.ti.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.tj.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.z]}}}
H.tk.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.z]}}}
H.hA.prototype={
D:function(a){return"RegExp/"+this.a+"/"},
gdS:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.uQ(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdR:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.uQ(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cM:function(a,b,c){var t
H.yR(b)
t=J.c4(b)
if(typeof t!=="number")return H.a9(t)
t=c>t
if(t)throw H.l(P.bw(c,0,J.c4(b),null,null))
return new H.qv(this,b,c)},
aV:function(a,b){return this.cM(a,b,0)},
fL:function(a,b){var t,s
t=this.gdS()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.ks(this,s)},
cw:function(a,b){var t,s
t=this.gdR()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.w(s,-1)
if(s.pop()!=null)return
return new H.ks(this,s)},
ez:function(a,b,c){if(c<0||c>b.length)throw H.l(P.bw(c,0,b.length,null,null))
return this.cw(b,c)},
$isH5:1,
$isvg:1,
gh0:function(){return this.b}}
H.ks.prototype={
gdk:function(a){return this.b.index},
gej:function(a){var t=this.b
return t.index+t[0].length},
b_:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.w(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
$isdc:1}
H.qv.prototype={
gS:function(a){return new H.kh(this.a,this.b,this.c,null)},
$ashy:function(){return[P.dc]},
$asn:function(){return[P.dc]}}
H.kh.prototype={
gL:function(){return this.d},
I:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
t=J.c4(t)
if(typeof t!=="number")return H.a9(t)
if(s<=t){r=this.a.fL(this.b,this.c)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.k6.prototype={
gej:function(a){return this.a+this.c.length},
n:function(a,b){return this.b_(b)},
b_:function(a){if(a!==0)throw H.l(P.jY(a,null,null))
return this.c},
$isdc:1,
gdk:function(a){return this.a}}
H.rC.prototype={
gS:function(a){return new H.rD(this.a,this.b,this.c,null)},
$asn:function(){return[P.dc]}}
H.rD.prototype={
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
this.d=new H.k6(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gL:function(){return this.d}}
H.fo.prototype={
gad:function(a){return C.a7},
hq:function(a,b,c){return H.cJ(a,b,c)},
hp:function(a){return this.hq(a,0,null)},
ho:function(a,b,c){var t
H.yA(a,b,c)
t=new DataView(a,b)
return t},
hn:function(a,b){return this.ho(a,b,null)},
$isfo:1,
$isbk:1,
gex:function(a){return a.byteLength}}
H.ez.prototype={
fY:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dH(b,d,"Invalid list position"))
else throw H.l(P.bw(b,0,c,d,null))},
dv:function(a,b,c,d){if(b>>>0!==b||b>c)this.fY(a,b,c,d)},
$isez:1,
gc2:function(a){return a.buffer},
gex:function(a){return a.byteLength}}
H.nO.prototype={
gad:function(a){return C.a8}}
H.jL.prototype={
gm:function(a){return a.length},
e2:function(a,b,c,d,e){var t,s,r
t=a.length
this.dv(a,b,t,"start")
this.dv(a,c,t,"end")
if(typeof b!=="number")return b.aC()
if(typeof c!=="number")return H.a9(c)
if(b>c)throw H.l(P.bw(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a2()
if(e<0)throw H.l(P.dG(e))
r=d.length
if(r-e<s)throw H.l(new P.dg("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaU:1,
$asaU:function(){},
$isaR:1,
$asaR:function(){}}
H.hM.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.cc(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bb(H.cc(a,b))
a[b]=c},
a6:function(a,b,c,d,e){if(!!J.aD(d).$ishM){this.e2(a,b,c,d,e)
return}this.dm(a,b,c,d,e)},
ay:function(a,b,c,d){return this.a6(a,b,c,d,0)}}
H.hO.prototype={
$asaU:function(){},
$asaR:function(){},
$asq:function(){return[P.U]},
$asv:function(){return[P.U]},
$asn:function(){return[P.U]},
$isq:1,
$isv:1,
$isn:1}
H.hQ.prototype={
$asaU:function(){},
$asaR:function(){},
$asq:function(){return[P.U]},
$asv:function(){return[P.U]},
$asn:function(){return[P.U]}}
H.hN.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bb(H.cc(a,b))
a[b]=c},
a6:function(a,b,c,d,e){if(!!J.aD(d).$ishN){this.e2(a,b,c,d,e)
return}this.dm(a,b,c,d,e)},
ay:function(a,b,c,d){return this.a6(a,b,c,d,0)},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isn:1,
$asn:function(){return[P.F]}}
H.hP.prototype={
$asaU:function(){},
$asaR:function(){},
$asq:function(){return[P.F]},
$asv:function(){return[P.F]},
$asn:function(){return[P.F]},
$isq:1,
$isv:1,
$isn:1}
H.hR.prototype={
$asaU:function(){},
$asaR:function(){},
$asq:function(){return[P.F]},
$asv:function(){return[P.F]},
$asn:function(){return[P.F]}}
H.nP.prototype={
gad:function(a){return C.a9},
$isq:1,
$asq:function(){return[P.U]},
$isv:1,
$asv:function(){return[P.U]},
$isn:1,
$asn:function(){return[P.U]}}
H.nQ.prototype={
gad:function(a){return C.aa},
$isq:1,
$asq:function(){return[P.U]},
$isv:1,
$asv:function(){return[P.U]},
$isn:1,
$asn:function(){return[P.U]}}
H.nR.prototype={
gad:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.cc(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isn:1,
$asn:function(){return[P.F]}}
H.nS.prototype={
gad:function(a){return C.ac},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.cc(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isn:1,
$asn:function(){return[P.F]}}
H.nT.prototype={
gad:function(a){return C.ad},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.cc(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isn:1,
$asn:function(){return[P.F]}}
H.nU.prototype={
gad:function(a){return C.ah},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.cc(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isn:1,
$asn:function(){return[P.F]}}
H.nV.prototype={
gad:function(a){return C.ai},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.cc(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isn:1,
$asn:function(){return[P.F]}}
H.jM.prototype={
gad:function(a){return C.aj},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.cc(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isn:1,
$asn:function(){return[P.F]}}
H.fp.prototype={
gad:function(a){return C.ak},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.cc(a,b))
return a[b]},
cl:function(a,b,c){return new Uint8Array(a.subarray(b,H.Ic(b,c,a.length)))},
$isfp:1,
$isdj:1,
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isn:1,
$asn:function(){return[P.F]}}
P.qx.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.qw.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.qy.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qz.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.rV.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rW.prototype={
$2:function(a,b){this.a.$2(1,new H.he(a,b))},
$S:function(){return{func:1,args:[,P.dT]}}}
P.t5.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.F,,]}}}
P.c8.prototype={}
P.t7.prototype={
$0:function(){var t,s,r
try{this.b.aK(this.a.$0())}catch(r){t=H.bH(r)
s=H.cp(r)
P.yC(this.b,t,s)}},
$S:function(){return{func:1}}}
P.mp.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.ap(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.ap(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.mo.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.w(r,t)
r[t]=a
if(s===0)this.d.dB(r)}else if(t.b===0&&!this.b)this.d.ap(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.f4.prototype={}
P.kj.prototype={
cQ:function(a,b){if(a==null)a=new P.fq()
if(this.a.a!==0)throw H.l(new P.dg("Future already completed"))
$.aF.toString
this.ap(a,b)},
bl:function(a){return this.cQ(a,null)},
gi_:function(){return this.a.a!==0},
$isf4:1,
ghO:function(){return this.a}}
P.dZ.prototype={
aF:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dg("Future already completed"))
t.dt(b)},
ht:function(a){return this.aF(a,null)},
ap:function(a,b){this.a.du(a,b)}}
P.kw.prototype={
aF:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dg("Future already completed"))
t.aK(b)},
ap:function(a,b){this.a.ap(a,b)}}
P.ko.prototype={
ghh:function(){return this.b.b},
geo:function(){return(this.c&1)!==0},
ghV:function(){return(this.c&2)!==0},
gen:function(){return this.c===8},
hT:function(a){return this.b.b.d9(this.d,a)},
i4:function(a){if(this.c!==6)return!0
return this.b.b.d9(this.d,J.fO(a))},
hP:function(a){var t,s,r
t=this.e
s=J.aG(a)
r=this.b.b
if(H.fL(t,{func:1,args:[,,]}))return r.iz(t,s.gau(a),a.gaQ())
else return r.d9(t,s.gau(a))},
hU:function(){return this.b.b.eL(this.d)},
gcE:function(){return this.a}}
P.bq.prototype={
gfZ:function(){return this.a===2},
gcB:function(){return this.a>=4},
cc:function(a,b){var t=$.aF
if(t!==C.e){t.toString
if(b!=null)b=P.yF(b,t)}return this.cJ(a,b)},
ba:function(a){return this.cc(a,null)},
cJ:function(a,b){var t,s
t=new P.bq(0,$.aF,null,[null])
s=b==null?1:3
this.co(new P.ko(null,t,s,a,b,[H.N(this,0),null]))
return t},
cf:function(a){var t,s
t=$.aF
s=new P.bq(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.N(this,0)
this.co(new P.ko(null,s,8,a,null,[t,t]))
return s},
co:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcB()){s.co(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fJ(null,null,t,new P.qU(this,a))}},
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
P.fJ(null,null,s,new P.r1(t,this))}},
bW:function(){var t=this.c
this.c=null
return this.bX(t)},
bX:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcE()
t.a=s}return s},
aK:function(a){var t,s
t=this.$ti
if(H.e0(a,"$isc8",t,"$asc8"))if(H.e0(a,"$isbq",t,null))P.qX(a,this)
else P.yn(a,this)
else{s=this.bW()
this.a=4
this.c=a
P.fE(this,s)}},
dB:function(a){var t=this.bW()
this.a=4
this.c=a
P.fE(this,t)},
ap:function(a,b){var t=this.bW()
this.a=8
this.c=new P.eY(a,b)
P.fE(this,t)},
fE:function(a){return this.ap(a,null)},
dt:function(a){var t
if(H.e0(a,"$isc8",this.$ti,"$asc8")){this.fB(a)
return}this.a=1
t=this.b
t.toString
P.fJ(null,null,t,new P.qW(this,a))},
fB:function(a){var t
if(H.e0(a,"$isbq",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fJ(null,null,t,new P.r0(this,a))}else P.qX(a,this)
return}P.yn(a,this)},
du:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fJ(null,null,t,new P.qV(this,a,b))},
$isc8:1,
gbY:function(){return this.a},
gh8:function(){return this.c}}
P.qU.prototype={
$0:function(){P.fE(this.a,this.b)},
$S:function(){return{func:1}}}
P.r1.prototype={
$0:function(){P.fE(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qY.prototype={
$1:function(a){var t=this.a
t.a=0
t.aK(a)},
$S:function(){return{func:1,args:[,]}}}
P.qZ.prototype={
$2:function(a,b){this.a.ap(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.r_.prototype={
$0:function(){this.a.ap(this.b,this.c)},
$S:function(){return{func:1}}}
P.qW.prototype={
$0:function(){this.a.dB(this.b)},
$S:function(){return{func:1}}}
P.r0.prototype={
$0:function(){P.qX(this.b,this.a)},
$S:function(){return{func:1}}}
P.qV.prototype={
$0:function(){this.a.ap(this.b,this.c)},
$S:function(){return{func:1}}}
P.r4.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hU()}catch(q){s=H.bH(q)
r=H.cp(q)
if(this.c){p=J.fO(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eY(s,r)
o.a=!0
return}if(!!J.aD(t).$isc8){if(t instanceof P.bq&&t.gbY()>=4){if(t.gbY()===8){p=this.b
p.b=t.gh8()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.ba(new P.r5(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.r5.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.r3.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hT(this.c)}catch(r){t=H.bH(r)
s=H.cp(r)
q=this.a
q.b=new P.eY(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.r2.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.i4(t)===!0&&q.e!=null){p=this.b
p.b=q.hP(t)
p.a=!1}}catch(o){s=H.bH(o)
r=H.cp(o)
q=this.a
p=J.fO(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eY(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ki.prototype={}
P.ds.prototype={
aB:function(a,b){return new P.ri(b,this,[H.aE(this,"ds",0),null])},
Z:function(a,b){var t,s
t={}
s=new P.bq(0,$.aF,null,[P.cU])
t.a=null
t.a=this.aW(new P.p9(t,this,b,s),!0,new P.pa(s),s.gbj())
return s},
ab:function(a,b){var t,s
t={}
s=new P.bq(0,$.aF,null,[null])
t.a=null
t.a=this.aW(new P.pf(t,this,b,s),!0,new P.pg(s),s.gbj())
return s},
gm:function(a){var t,s
t={}
s=new P.bq(0,$.aF,null,[P.F])
t.a=0
this.aW(new P.pj(t),!0,new P.pk(t,s),s.gbj())
return s},
gX:function(a){var t,s
t={}
s=new P.bq(0,$.aF,null,[P.cU])
t.a=null
t.a=this.aW(new P.ph(t,s),!0,new P.pi(s),s.gbj())
return s},
ar:function(a){var t,s,r
t=H.aE(this,"ds",0)
s=H.a([],[t])
r=new P.bq(0,$.aF,null,[[P.q,t]])
this.aW(new P.pl(this,s),!0,new P.pm(s,r),r.gbj())
return r},
gaf:function(a){var t,s
t={}
s=new P.bq(0,$.aF,null,[H.aE(this,"ds",0)])
t.a=null
t.a=this.aW(new P.pb(t,this,s),!0,new P.pc(s),s.gbj())
return s}}
P.p9.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.yJ(new P.p7(this.c,a),new P.p8(t,s),P.yz(t.a,s))},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.b,"ds")}}
P.p7.prototype={
$0:function(){return J.bc(this.b,this.a)},
$S:function(){return{func:1}}}
P.p8.prototype={
$1:function(a){if(a===!0)P.vU(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cU]}}}
P.pa.prototype={
$0:function(){this.a.aK(!1)},
$S:function(){return{func:1}}}
P.pf.prototype={
$1:function(a){P.yJ(new P.pd(this.c,a),new P.pe(),P.yz(this.a.a,this.d))},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.b,"ds")}}
P.pd.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.pe.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.pg.prototype={
$0:function(){this.a.aK(null)},
$S:function(){return{func:1}}}
P.pj.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.pk.prototype={
$0:function(){this.b.aK(this.a.a)},
$S:function(){return{func:1}}}
P.ph.prototype={
$1:function(a){P.vU(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.pi.prototype={
$0:function(){this.a.aK(!0)},
$S:function(){return{func:1}}}
P.pl.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.a,"ds")}}
P.pm.prototype={
$0:function(){this.b.aK(this.a)},
$S:function(){return{func:1}}}
P.pb.prototype={
$1:function(a){P.vU(this.a.a,this.c,a)},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.b,"ds")}}
P.pc.prototype={
$0:function(){var t,s,r,q
try{r=H.hz()
throw H.l(r)}catch(q){t=H.bH(q)
s=H.cp(q)
P.yC(this.a,t,s)}},
$S:function(){return{func:1}}}
P.p6.prototype={}
P.dt.prototype={
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
return t==null?$.$get$hp():t},
cq:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.ec()
if((this.e&32)===0)this.r=null
this.f=this.dT()},
bR:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e_(b)
else this.cp(new P.qI(b,null,[H.aE(this,"dt",0)]))},
bQ:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e1(a,b)
else this.cp(new P.qK(a,b,null))},
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
if(t==null){t=new P.rA(null,null,0,[H.aE(this,"dt",0)])
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
s=new P.qD(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cq()
t=this.f
if(!!J.aD(t).$isc8&&t!==$.$get$hp())t.cf(s)
else s.$0()}else{s.$0()
this.cr((t&4)!==0)}},
e0:function(){var t,s
t=new P.qC(this)
this.cq()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aD(s).$isc8&&s!==$.$get$hp())s.cf(t)
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
this.b=P.yF(b,t)
this.c=c},
gbY:function(){return this.e}}
P.qD.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fL(s,{func:1,args:[P.ap,P.dT]})
q=t.d
p=this.b
o=t.b
if(r)q.iA(o,p,this.c)
else q.da(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.qC.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eM(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.kl.prototype={
gbG:function(a){return this.a},
sbG:function(a,b){return this.a=b}}
P.qI.prototype={
d1:function(a){a.e_(this.b)}}
P.qK.prototype={
d1:function(a){a.e1(this.b,this.c)},
$askl:function(){},
gau:function(a){return this.b},
gaQ:function(){return this.c}}
P.qJ.prototype={
d1:function(a){a.e0()},
gbG:function(a){return},
sbG:function(a,b){throw H.l(new P.dg("No events after a done."))}}
P.rk.prototype={
cj:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.z3(new P.rl(this,a))
this.a=1},
ec:function(){if(this.a===1)this.a=3},
gbY:function(){return this.a}}
P.rl.prototype={
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
P.rA.prototype={
gX:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbG(0,b)
this.c=b}}}
P.rB.prototype={}
P.rY.prototype={
$0:function(){return this.a.ap(this.b,this.c)},
$S:function(){return{func:1}}}
P.rX.prototype={
$2:function(a,b){P.Ib(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dT]}}}
P.rZ.prototype={
$0:function(){return this.a.aK(this.b)},
$S:function(){return{func:1}}}
P.i4.prototype={
aW:function(a,b,c,d){return this.fH(a,d,c,!0===b)},
ey:function(a,b,c){return this.aW(a,null,b,c)},
fH:function(a,b,c,d){return P.HP(this,a,b,c,d,H.aE(this,"i4",0),H.aE(this,"i4",1))},
dL:function(a,b){b.bR(0,a)},
fW:function(a,b,c){c.bQ(a,b)},
$asds:function(a,b){return[b]}}
P.i5.prototype={
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
$asdt:function(a,b){return[b]}}
P.ri.prototype={
dL:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.bH(q)
r=H.cp(q)
P.Ia(b,s,r)
return}b.bR(0,t)}}
P.eY.prototype={
D:function(a){return H.y(this.a)},
$isek:1,
gau:function(a){return this.a},
gaQ:function(){return this.b}}
P.rU.prototype={}
P.t4.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fq()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.l(t)
r=H.l(t)
r.stack=J.cx(s)
throw r},
$S:function(){return{func:1}}}
P.ro.prototype={
eM:function(a){var t,s,r,q
try{if(C.e===$.aF){r=a.$0()
return r}r=P.yG(null,null,this,a)
return r}catch(q){t=H.bH(q)
s=H.cp(q)
r=P.kA(null,null,this,t,s)
return r}},
da:function(a,b){var t,s,r,q
try{if(C.e===$.aF){r=a.$1(b)
return r}r=P.yI(null,null,this,a,b)
return r}catch(q){t=H.bH(q)
s=H.cp(q)
r=P.kA(null,null,this,t,s)
return r}},
iA:function(a,b,c){var t,s,r,q
try{if(C.e===$.aF){r=a.$2(b,c)
return r}r=P.yH(null,null,this,a,b,c)
return r}catch(q){t=H.bH(q)
s=H.cp(q)
r=P.kA(null,null,this,t,s)
return r}},
cO:function(a,b){if(b)return new P.rp(this,a)
else return new P.rq(this,a)},
hr:function(a,b){return new P.rr(this,a)},
n:function(a,b){return},
eL:function(a){if($.aF===C.e)return a.$0()
return P.yG(null,null,this,a)},
d9:function(a,b){if($.aF===C.e)return a.$1(b)
return P.yI(null,null,this,a,b)},
iz:function(a,b,c){if($.aF===C.e)return a.$2(b,c)
return P.yH(null,null,this,a,b,c)}}
P.rp.prototype={
$0:function(){return this.a.eM(this.b)},
$S:function(){return{func:1}}}
P.rq.prototype={
$0:function(){return this.a.eL(this.b)},
$S:function(){return{func:1}}}
P.rr.prototype={
$1:function(a){return this.a.da(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.r7.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gce:function(a){var t=H.N(this,0)
return H.dr(new P.r8(this,[t]),new P.ra(this),t,H.N(this,1))},
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
if(t==null){t=P.vR()
this.b=t}this.dz(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.vR()
this.c=s}this.dz(s,b,c)}else this.hb(b,c)},
hb:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.vR()
this.d=t}s=this.aT(a)
r=t[s]
if(r==null){P.vS(t,s,[a,b]);++this.a
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
ab:function(a,b){var t,s,r,q
t=this.ct()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.l(new P.by(this))}},
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
this.e=null}P.vS(a,b,c)},
bt:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.HR(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aT:function(a){return J.dF(a)&0x3ffffff},
aU:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.bc(a[s],b))return s
return-1},
$isbo:1,
$asbo:null}
P.ra.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.r8.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gS:function(a){var t=this.a
return new P.r9(t,t.ct(),0,null,this.$ti)},
Z:function(a,b){return this.a.V(0,b)},
ab:function(a,b){var t,s,r,q
t=this.a
s=t.ct()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.l(new P.by(t))}}}
P.r9.prototype={
gL:function(){return this.d},
I:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.l(new P.by(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.kr.prototype={
bE:function(a){return H.IX(a)&0x3ffffff},
bF:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ges()
if(r==null?b==null:r===b)return s}return-1}}
P.kq.prototype={
gS:function(a){var t=new P.d3(this,this.r,null,null,[null])
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
return J.fN(s,r).gdG()},
ab:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.l(new P.by(this))
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
if(t==null){t=P.HU()
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
t=new P.re(a,null,null)
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
aT:function(a){return J.dF(a)&0x3ffffff},
aU:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bc(a[s].gdG(),b))return s
return-1},
$iseG:1,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
P.re.prototype={
gdG:function(){return this.a},
gfD:function(){return this.c}}
P.d3.prototype={
gL:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.by(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.rb.prototype={}
P.fm.prototype={
aB:function(a,b){return H.dr(this,b,H.aE(this,"fm",0),null)},
Z:function(a,b){var t
for(t=this.gS(this);t.I();)if(J.bc(t.gL(),b))return!0
return!1},
ab:function(a,b){var t
for(t=this.gS(this);t.I();)b.$1(t.gL())},
a5:function(a,b){return P.db(this,!0,H.aE(this,"fm",0))},
ar:function(a){return this.a5(a,!0)},
gm:function(a){var t,s
t=this.gS(this)
for(s=0;t.I();)++s
return s},
gX:function(a){return!this.gS(this).I()},
D:function(a){return P.uM(this,"(",")")},
$isn:1,
$asn:null}
P.hy.prototype={}
P.hF.prototype={}
P.fs.prototype={$asq:null,$asv:null,$asn:null,$isq:1,$isv:1,$isn:1}
P.b6.prototype={
gS:function(a){return new H.dQ(a,this.gm(a),0,null,[H.aE(a,"b6",0)])},
T:function(a,b){return this.n(a,b)},
ab:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.l(new P.by(a))}},
gX:function(a){return this.gm(a)===0},
Z:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.bc(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.l(new P.by(a))}return!1},
aB:function(a,b){return new H.ey(a,b,[H.aE(a,"b6",0),null])},
di:function(a,b){return H.vC(a,b,null,H.aE(a,"b6",0))},
a5:function(a,b){var t,s,r
t=H.a([],[H.aE(a,"b6",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ar:function(a){return this.a5(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bC:function(a,b,c,d){var t
P.de(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a6:function(a,b,c,d,e){var t,s,r,q,p,o
P.de(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.al()
if(typeof b!=="number")return H.a9(b)
t=c-b
if(t===0)return
if(J.eW(e,0))H.bb(P.bw(e,0,null,"skipCount",null))
if(H.e0(d,"$isq",[H.aE(a,"b6",0)],"$asq")){s=e
r=d}else{r=J.zE(d,e).a5(0,!1)
s=0}q=J.kD(s)
p=J.bj(r)
if(J.cw(q.W(s,t),p.gm(r)))throw H.l(H.xw())
if(q.a2(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.W(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.W(s,o)))},
ay:function(a,b,c,d){return this.a6(a,b,c,d,0)},
aH:function(a,b,c,d){var t,s,r,q,p
P.de(b,c,this.gm(a),null,null,null)
d=C.c.ar(d)
if(typeof c!=="number")return c.al()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.ay(a,b,r,d)
if(q!==0){this.a6(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a6(a,r,p,a,c)
this.ay(a,b,r,d)}},
b8:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.bc(this.n(a,t),b))return t
return-1},
bn:function(a,b){return this.b8(a,b,0)},
D:function(a){return P.jB(a,"[","]")},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
P.rL.prototype={
i:function(a,b,c){throw H.l(new P.V("Cannot modify unmodifiable map"))},
$isbo:1,
$asbo:null}
P.nz.prototype={
n:function(a,b){return J.fN(this.a,b)},
i:function(a,b,c){J.kI(this.a,b,c)},
ab:function(a,b){J.w8(this.a,b)},
gX:function(a){return J.kL(this.a)},
gm:function(a){return J.c4(this.a)},
D:function(a){return J.cx(this.a)},
$isbo:1,
$asbo:null}
P.i0.prototype={$asbo:null,$isbo:1}
P.nA.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.P+=", "
t.a=!1
t=this.b
s=t.P+=H.y(a)
t.P=s+": "
t.P+=H.y(b)},
$S:function(){return{func:1,args:[,,]}}}
P.nn.prototype={
gS:function(a){return new P.rf(this,this.c,this.d,this.b,null,this.$ti)},
ab:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.w(r,s)
b.$1(r[s])
if(t!==this.d)H.bb(new P.by(this))}},
gX:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
T:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a9(b)
if(0>b||b>=t)H.bb(P.bA(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.w(s,q)
return s[q]},
a5:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.hg(t)
return t},
ar:function(a){return this.a5(a,!0)},
h:function(a,b){this.aS(0,b)},
b4:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.w(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
D:function(a){return P.jB(this,"{","}")},
eI:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.l(H.hz());++this.d
s=this.a
r=s.length
if(t>=r)return H.w(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aS:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.w(t,s)
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
C.b.a6(s,0,q,t,r)
C.b.a6(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
hg:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a6(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a6(a,0,p,r,t)
C.b.a6(a,p,p+this.c,this.a,0)
return this.c+p}},
fj:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asv:null,
$asn:null}
P.rf.prototype={
gL:function(){return this.e},
I:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.bb(new P.by(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.w(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oP.prototype={
gX:function(a){return this.a===0},
at:function(a,b){var t
for(t=J.cV(b);t.I();)this.h(0,t.gL())},
a5:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.d3(this,this.r,null,null,[null]),s.c=this.e,r=0;s.I();r=p){q=s.d
p=r+1
if(r>=t.length)return H.w(t,r)
t[r]=q}return t},
ar:function(a){return this.a5(a,!0)},
aB:function(a,b){return new H.f7(this,b,[H.N(this,0),null])},
D:function(a){return P.jB(this,"{","}")},
ab:function(a,b){var t
for(t=new P.d3(this,this.r,null,null,[null]),t.c=this.e;t.I();)b.$1(t.d)},
aL:function(a,b){var t,s
t=new P.d3(this,this.r,null,null,[null])
t.c=this.e
if(!t.I())return""
if(b===""){s=""
do s+=H.y(t.d)
while(t.I())}else{s=H.y(t.d)
for(;t.I();)s=s+b+H.y(t.d)}return s.charCodeAt(0)==0?s:s},
$iseG:1,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
P.oO.prototype={}
P.kZ.prototype={
i9:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bj(b)
a1=P.de(a0,a1,t.gm(b),null,null,null)
s=$.$get$ym()
if(typeof a1!=="number")return H.a9(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.a0(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.th(C.c.a7(b,l))
h=H.th(C.c.a7(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.w(s,g)
f=s[g]
if(f>=0){g=C.c.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.P.length
if(e==null)e=0
if(typeof e!=="number")return e.W()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.ch("")
p.P+=C.c.N(b,q,r)
p.P+=H.hS(k)
q=l
continue}}throw H.l(new P.bN("Invalid base64 data",b,r))}if(p!=null){t=p.P+=t.N(b,q,a1)
e=t.length
if(o>=0)P.wn(b,n,a1,o,m,e)
else{d=C.a.bP(e-1,4)+1
if(d===1)throw H.l(new P.bN("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.P=t;++d}}t=p.P
return C.c.aH(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.wn(b,n,a1,o,m,c)
else{d=C.d.bP(c,4)
if(d===1)throw H.l(new P.bN("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aH(b,a1,a1,d===2?"==":"=")}return b},
$ash0:function(){return[[P.q,P.F],P.z]}}
P.l_.prototype={
$ash2:function(){return[[P.q,P.F],P.z]}}
P.h0.prototype={}
P.h2.prototype={}
P.lG.prototype={
$ash0:function(){return[P.z,[P.q,P.F]]}}
P.q8.prototype={
gK:function(a){return"utf-8"}}
P.q9.prototype={
cR:function(a,b,c){var t,s,r,q
t=J.c4(a)
P.de(b,c,t,null,null,null)
s=new P.ch("")
r=new P.rN(!1,s,!0,0,0,0)
r.cR(a,b,t)
r.hK(0,a,t)
q=s.P
return q.charCodeAt(0)==0?q:q},
hw:function(a){return this.cR(a,0,null)},
$ash2:function(){return[[P.q,P.F],P.z]}}
P.rN.prototype={
hK:function(a,b,c){if(this.e>0)throw H.l(new P.bN("Unfinished UTF-8 octet sequence",b,c))},
cR:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.rP(c)
p=new P.rO(this,a,b,c)
$loop$0:for(o=J.bj(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aP()
if((l&192)!==128){k=new P.bN("Bad UTF-8 encoding 0x"+C.d.bL(l,16),a,m)
throw H.l(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.w(C.A,k)
if(t<=C.A[k]){k=new P.bN("Overlong encoding of 0x"+C.a.bL(t,16),a,m-r-1)
throw H.l(k)}if(t>1114111){k=new P.bN("Character outside valid Unicode range: 0x"+C.a.bL(t,16),a,m-r-1)
throw H.l(k)}if(!this.c||t!==65279)n.P+=H.hS(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cw(j,0)){this.c=!1
if(typeof j!=="number")return H.a9(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dv(l)
if(g.a2(l,0)){g=new P.bN("Negative UTF-8 code unit: -0x"+J.zI(g.de(l),16),a,h-1)
throw H.l(g)}else{if(typeof l!=="number")return l.aP()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bN("Bad UTF-8 encoding 0x"+C.d.bL(l,16),a,h-1)
throw H.l(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.rP.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bj(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aP()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.F,args:[,P.F]}}}
P.rO.prototype={
$2:function(a,b){this.a.b.P+=P.pr(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.F,P.F]}}}
P.cU.prototype={}
P.bJ.prototype={}
P.e3.prototype={
U:function(a,b){if(b==null)return!1
if(!(b instanceof P.e3))return!1
return this.a===b.a&&this.b===b.b},
aE:function(a,b){return C.a.aE(this.a,b.ghf())},
ga8:function(a){var t=this.a
return(t^C.a.b2(t,30))&1073741823},
D:function(a){var t,s,r,q,p,o,n
t=P.At(H.xJ(this))
s=P.is(H.vm(this))
r=P.is(H.vl(this))
q=P.is(H.GK(this))
p=P.is(H.GM(this))
o=P.is(H.GN(this))
n=P.Au(H.GL(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.As(C.a.W(this.a,b.giR()),this.b)},
gi5:function(){return this.a},
dq:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.l(P.dG(this.gi5()))},
$isbJ:1,
$asbJ:function(){return[P.e3]},
ghf:function(){return this.a}}
P.U.prototype={$isbJ:1,
$asbJ:function(){return[P.dw]}}
P.dL.prototype={
W:function(a,b){return new P.dL(this.a+b.gbu())},
aw:function(a,b){if(typeof b!=="number")return H.a9(b)
return new P.dL(C.d.bJ(this.a*b))},
a2:function(a,b){return C.a.a2(this.a,b.gbu())},
aC:function(a,b){return C.a.aC(this.a,b.gbu())},
ax:function(a,b){return C.a.ax(this.a,b.gbu())},
U:function(a,b){if(b==null)return!1
if(!(b instanceof P.dL))return!1
return this.a===b.a},
ga8:function(a){return this.a&0x1FFFFFFF},
aE:function(a,b){return C.a.aE(this.a,b.gbu())},
D:function(a){var t,s,r,q,p
t=new P.lE()
s=this.a
if(s<0)return"-"+new P.dL(0-s).D(0)
r=t.$1(C.a.aq(s,6e7)%60)
q=t.$1(C.a.aq(s,1e6)%60)
p=new P.lD().$1(s%1e6)
return""+C.a.aq(s,36e8)+":"+H.y(r)+":"+H.y(q)+"."+H.y(p)},
de:function(a){return new P.dL(0-this.a)},
$isbJ:1,
$asbJ:function(){return[P.dL]},
gbu:function(){return this.a}}
P.lD.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.z,args:[P.F]}}}
P.lE.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.z,args:[P.F]}}}
P.ek.prototype={
gaQ:function(){return H.cp(this.$thrownJsError)}}
P.fq.prototype={
D:function(a){return"Throw of null."}}
P.cW.prototype={
gcv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcu:function(){return""},
D:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.y(t)
q=this.gcv()+s+r
if(!this.a)return q
p=this.gcu()
o=P.wF(this.b)
return q+p+": "+H.y(o)},
gK:function(a){return this.c}}
P.eF.prototype={
gcv:function(){return"RangeError"},
gcu:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.y(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.y(t)
else{if(typeof r!=="number")return r.aC()
if(r>t)s=": Not in range "+H.y(t)+".."+H.y(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.y(t)}}return s}}
P.mJ.prototype={
gcv:function(){return"RangeError"},
gcu:function(){if(J.eW(this.b,0))return": index must not be negative"
var t=this.f
if(J.bc(t,0))return": no indices are valid"
return": index should be less than "+H.y(t)},
gm:function(a){return this.f}}
P.V.prototype={
D:function(a){return"Unsupported operation: "+this.a}}
P.eL.prototype={
D:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.y(t):"UnimplementedError"}}
P.dg.prototype={
D:function(a){return"Bad state: "+this.a}}
P.by.prototype={
D:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.y(P.wF(t))+"."}}
P.o7.prototype={
D:function(a){return"Out of Memory"},
gaQ:function(){return},
$isek:1}
P.k5.prototype={
D:function(a){return"Stack Overflow"},
gaQ:function(){return},
$isek:1}
P.lv.prototype={
D:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.y(t)+"' during its initialization"}}
P.qT.prototype={
D:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.y(t)}}
P.bN.prototype={
D:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.y(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a2()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.N(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a9(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a7(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.y(r-o+1)+")\n"):s+(" (at character "+H.y(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.a0(q,m)
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
g=""}f=C.c.N(q,i,j)
return s+h+f+g+"\n"+C.c.aw(" ",r-i+h.length)+"^\n"}}
P.lN.prototype={
D:function(a){return"Expando:"+H.y(this.a)},
n:function(a,b){var t,s
t=this.bT
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.bb(P.dH(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.vn(b,"expando$values")
return s==null?null:H.vn(s,t)},
i:function(a,b,c){var t,s
t=this.bT
if(typeof t!=="string")t.set(b,c)
else{s=H.vn(b,"expando$values")
if(s==null){s=new P.ap()
H.xN(b,"expando$values",s)}H.xN(s,t,c)}},
gK:function(a){return this.a}}
P.F.prototype={$isbJ:1,
$asbJ:function(){return[P.dw]}}
P.n.prototype={
aB:function(a,b){return H.dr(this,b,H.aE(this,"n",0),null)},
cg:function(a,b){return new H.ef(this,b,[H.aE(this,"n",0)])},
Z:function(a,b){var t
for(t=this.gS(this);t.I();)if(J.bc(t.gL(),b))return!0
return!1},
ab:function(a,b){var t
for(t=this.gS(this);t.I();)b.$1(t.gL())},
aL:function(a,b){var t,s
t=this.gS(this)
if(!t.I())return""
if(b===""){s=""
do s+=H.y(t.gL())
while(t.I())}else{s=H.y(t.gL())
for(;t.I();)s=s+b+H.y(t.gL())}return s.charCodeAt(0)==0?s:s},
a5:function(a,b){return P.db(this,!0,H.aE(this,"n",0))},
ar:function(a){return this.a5(a,!0)},
gm:function(a){var t,s
t=this.gS(this)
for(s=0;t.I();)++s
return s},
gX:function(a){return!this.gS(this).I()},
gbi:function(a){var t,s
t=this.gS(this)
if(!t.I())throw H.l(H.hz())
s=t.gL()
if(t.I())throw H.l(H.Gm())
return s},
T:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.zL("index"))
if(b<0)H.bb(P.bw(b,0,null,"index",null))
for(t=this.gS(this),s=0;t.I();){r=t.gL()
if(b===s)return r;++s}throw H.l(P.bA(b,this,"index",null,s))},
D:function(a){return P.uM(this,"(",")")},
$asn:null}
P.jC.prototype={}
P.q.prototype={$asq:null,$isv:1,$asv:null,$isn:1,$asn:null}
P.bo.prototype={$asbo:null}
P.cC.prototype={
ga8:function(a){return P.ap.prototype.ga8.call(this,this)},
D:function(a){return"null"}}
P.dw.prototype={$isbJ:1,
$asbJ:function(){return[P.dw]}}
P.ap.prototype={constructor:P.ap,$isap:1,
U:function(a,b){return this===b},
ga8:function(a){return H.eA(this)},
D:function(a){return H.oq(this)},
gad:function(a){return new H.dX(H.kF(this),null)},
toString:function(){return this.D(this)}}
P.dc.prototype={}
P.eG.prototype={}
P.dT.prototype={}
P.z.prototype={$isbJ:1,
$asbJ:function(){return[P.z]},
$isvg:1}
P.ch.prototype={
gm:function(a){return this.P.length},
gX:function(a){return this.P.length===0},
D:function(a){var t=this.P
return t.charCodeAt(0)==0?t:t},
gP:function(){return this.P}}
P.eN.prototype={}
P.q4.prototype={
$2:function(a,b){var t,s,r,q
t=J.bj(b)
s=t.bn(b,"=")
if(s===-1){if(!t.U(b,""))J.kI(a,P.rM(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.N(b,0,s)
q=C.c.ah(b,s+1)
t=this.a
J.kI(a,P.rM(r,0,r.length,t,!0),P.rM(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.q1.prototype={
$2:function(a,b){throw H.l(new P.bN("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.z,P.F]}}}
P.q2.prototype={
$2:function(a,b){throw H.l(new P.bN("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.z],opt:[,]}}}
P.q3.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.ft(C.c.N(this.a,a,b),16,null)
s=J.dv(t)
if(s.a2(t,0)||s.aC(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.F,args:[P.F,P.F]}}}
P.kx.prototype={
geT:function(){return this.b},
gcV:function(a){var t=this.c
if(t==null)return""
if(C.c.ag(t,"["))return C.c.N(t,1,t.length-1)
return t},
gd2:function(a){var t=this.d
if(t==null)return P.ys(this.a)
return t},
gd5:function(a){var t=this.f
return t==null?"":t},
gem:function(){var t=this.r
return t==null?"":t},
gd6:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.z
s=new P.i0(P.yf(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
gep:function(){return this.c!=null},
ger:function(){return this.f!=null},
geq:function(){return this.r!=null},
D:function(a){var t=this.y
if(t==null){t=this.dO()
this.y=t}return t},
dO:function(){var t,s,r,q
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
U:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aD(b)
if(!!t.$iseN){if(this.a===b.gdf())if(this.c!=null===b.gep()){s=this.b
r=b.geT()
if(s==null?r==null:s===r){s=this.gcV(this)
r=t.gcV(b)
if(s==null?r==null:s===r)if(J.bc(this.gd2(this),t.gd2(b)))if(J.bc(this.e,t.geD(b))){s=this.f
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
ga8:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dO()
this.y=t}t=C.c.ga8(t)
this.z=t}return t},
$iseN:1,
gdf:function(){return this.a},
geD:function(a){return this.e}}
P.t8.prototype={
$1:function(a){throw H.l(new P.bN("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.q0.prototype={
geR:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
t=t[0]+1
r=J.bj(s)
q=r.b8(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fH(s,o,p,C.l,!1)
if(n==null)n=r.N(s,o,p)
p=q}else n=null
m=P.fH(s,t,p,C.I,!1)
t=new P.qH(this,"data",null,null,null,m==null?r.N(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
D:function(a){var t,s
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
return t[0]===-1?"data:"+H.y(s):s}}
P.t1.prototype={
$1:function(a){return new Uint8Array(H.cE(96))},
$S:function(){return{func:1,args:[,]}}}
P.t0.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.w(t,a)
t=t[a]
J.zk(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.dj,args:[,,]}}}
P.t2.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dl(a),r=0;r<t;++r)s.i(a,C.c.a7(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.dj,P.z,P.F]}}}
P.t3.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a7(b,0),s=C.c.a7(b,1),r=J.dl(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.dj,P.z,P.F]}}}
P.rz.prototype={
gep:function(){return this.c>0},
ger:function(){var t=this.f
if(typeof t!=="number")return t.a2()
return t<this.r},
geq:function(){return this.r<this.a.length},
gdf:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ag(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ag(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ag(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ag(this.a,"package")){this.x="package"
t="package"}else{t=C.c.N(this.a,0,t)
this.x=t}return t},
geT:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.N(this.a,s,t-1):""},
gcV:function(a){var t=this.c
return t>0?C.c.N(this.a,t,this.d):""},
gd2:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.W()
s=this.e
if(typeof s!=="number")return H.a9(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.W()
return H.ft(C.c.N(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ag(this.a,"http"))return 80
if(t===5&&C.c.ag(this.a,"https"))return 443
return 0},
geD:function(a){return C.c.N(this.a,this.e,this.f)},
gd5:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a2()
return t<s?C.c.N(this.a,t+1,s):""},
gem:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ah(s,t+1):""},
gd6:function(){var t=this.f
if(typeof t!=="number")return t.a2()
if(t>=this.r)return C.a6
t=P.z
return new P.i0(P.yf(this.gd5(this),C.n),[t,t])},
ga8:function(a){var t=this.y
if(t==null){t=C.c.ga8(this.a)
this.y=t}return t},
U:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aD(b)
if(!!t.$iseN)return this.a===t.D(b)
return!1},
D:function(a){return this.a},
$iseN:1}
P.qH.prototype={}
W.b3.prototype={}
W.eX.prototype={
D:function(a){return String(a)},
$iseX:1,
$isj:1,
ga9:function(a){return a.href},
sak:function(a,b){return a.type=b},
sa9:function(a,b){return a.href=b}}
W.kQ.prototype={
D:function(a){return String(a)},
$isj:1,
ga9:function(a){return a.href},
sa9:function(a,b){return a.href=b}}
W.f_.prototype={$isf_:1,$iscy:1,$isat:1,$isap:1}
W.cO.prototype={$isap:1}
W.kX.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.cO]},
$isv:1,
$asv:function(){return[W.cO]},
$isn:1,
$asn:function(){return[W.cO]},
$isaU:1,
$asaU:function(){return[W.cO]},
$isaR:1,
$asaR:function(){return[W.cO]}}
W.h8.prototype={
$asq:function(){return[W.cO]},
$asv:function(){return[W.cO]},
$asn:function(){return[W.cO]},
$isq:1,
$isv:1,
$isn:1}
W.hb.prototype={
$asq:function(){return[W.cO]},
$asv:function(){return[W.cO]},
$asn:function(){return[W.cO]},
$isq:1,
$isv:1,
$isn:1}
W.l0.prototype={
ga9:function(a){return a.href},
sa9:function(a,b){return a.href=b}}
W.f1.prototype={$isf1:1}
W.f2.prototype={$isf2:1,$isj:1}
W.h_.prototype={$ish_:1,
gK:function(a){return a.name},
gaI:function(a){return a.value},
sak:function(a,b){return a.type=b}}
W.ei.prototype={$isj:1,
gm:function(a){return a.length}}
W.lc.prototype={
av:function(a,b){return a.get(b)}}
W.lg.prototype={$isj:1}
W.io.prototype={
cT:function(a,b){return typeof console!="undefined"?console.error(b):null},
b_:function(a){return typeof console!="undefined"?console.group(a):null},
eu:function(a){return typeof console!="undefined"?console.info(a):null},
iH:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.h3.prototype={
gK:function(a){return a.name}}
W.lk.prototype={
av:function(a,b){if(b!=null)return a.get(P.Iy(b,null))
return a.get()},
br:function(a){return this.av(a,null)}}
W.ln.prototype={
gaR:function(a){return a.style}}
W.lo.prototype={
ga9:function(a){return a.href}}
W.h4.prototype={
gaR:function(a){return a.style}}
W.h5.prototype={
gK:function(a){return a.name}}
W.lp.prototype={
gaR:function(a){return a.style}}
W.bM.prototype={$isbM:1,$isap:1}
W.f5.prototype={
bO:function(a,b){var t=this.fP(a,b)
return t!=null?t:""},
fP:function(a,b){if(W.Ar(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.Av()+b)},
M:function(a,b){return a.item(b)},
gbm:function(a){return a.content},
gbA:function(a){return a.display},
sbA:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iT.prototype={}
W.qF.prototype={
bO:function(a,b){var t=this.b
return J.zx(t.gaf(t),b)},
hc:function(a,b){var t
for(t=this.a,t=new H.dQ(t,t.gm(t),0,null,[H.N(t,0)]);t.I();)t.d.style[a]=b},
sbA:function(a,b){this.hc("display",b)},
fp:function(a){var t=P.db(this.a,!0,null)
this.b=new H.ey(t,new W.qG(),[H.N(t,0),null])}}
W.jR.prototype={}
W.qG.prototype={
$1:function(a){return J.tG(a)},
$S:function(){return{func:1,args:[,]}}}
W.iq.prototype={
gbm:function(a){return this.bO(a,"content")},
gbA:function(a){return this.bO(a,"display")}}
W.lq.prototype={
gaR:function(a){return a.style}}
W.lr.prototype={
gaR:function(a){return a.style}}
W.lw.prototype={
gcU:function(a){return a.files}}
W.f6.prototype={$isf6:1,$isap:1}
W.ir.prototype={
c_:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
M:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.ej.prototype={$isej:1}
W.it.prototype={$isj:1}
W.iu.prototype={
gK:function(a){return a.name}}
W.lz.prototype={
gK:function(a){var t=a.name
if(P.wC()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.wC()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
D:function(a){return String(a)}}
W.iv.prototype={
D:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(this.gbe(a))+" x "+H.y(this.gb7(a))},
U:function(a,b){var t
if(b==null)return!1
t=J.aD(b)
if(!t.$isbX)return!1
return a.left===t.gc6(b)&&a.top===t.gcd(b)&&this.gbe(a)===t.gbe(b)&&this.gb7(a)===t.gb7(b)},
ga8:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gbe(a)
q=this.gb7(a)
return W.yq(W.eU(W.eU(W.eU(W.eU(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gb7:function(a){return a.height},
gc6:function(a){return a.left},
gcd:function(a){return a.top},
gbe:function(a){return a.width},
$isbX:1,
$asbX:function(){}}
W.iw.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[P.z]},
$isv:1,
$asv:function(){return[P.z]},
$isn:1,
$asn:function(){return[P.z]},
$isaU:1,
$asaU:function(){return[P.z]},
$isaR:1,
$asaR:function(){return[P.z]}}
W.iU.prototype={
$asq:function(){return[P.z]},
$asv:function(){return[P.z]},
$asn:function(){return[P.z]},
$isq:1,
$isv:1,
$isn:1}
W.jd.prototype={
$asq:function(){return[P.z]},
$asv:function(){return[P.z]},
$asn:function(){return[P.z]},
$isq:1,
$isv:1,
$isn:1}
W.ix.prototype={
M:function(a,b){return a.item(b)}}
W.iy.prototype={
h:function(a,b){return a.add(b)},
Z:function(a,b){return a.contains(b)},
M:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.kn.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.l(new P.V("Cannot modify list"))},
gaR:function(a){return W.HO(this)},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
W.cy.prototype={
geb:function(a){return new W.qN(a)},
gee:function(a){return new W.qO(a)},
D:function(a){return a.localName},
ev:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
aG:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.wE
if(t==null){t=H.a([],[W.ea])
s=new W.jP(t)
t.push(W.yo(null))
t.push(W.yr())
$.wE=s
d=s}else d=t
t=$.wD
if(t==null){t=new W.ky(d)
$.wD=t
c=t}else{t.a=d
c=t}}if($.e4==null){t=document
s=t.implementation.createHTMLDocument("")
$.e4=s
$.tX=s.createRange()
s=$.e4
s.toString
r=s.createElement("base")
J.zC(r,t.baseURI)
$.e4.head.appendChild(r)}t=$.e4
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.e4
if(!!this.$isf2)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.e4.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.Z(C.a2,a.tagName)){$.tX.selectNodeContents(q)
p=$.tX.createContextualFragment(b)}else{q.innerHTML=b
p=$.e4.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.e4.body
if(q==null?t!=null:q!==t)J.zA(q)
c.ci(p)
document.adoptNode(p)
return p},
hy:function(a,b,c){return this.aG(a,b,c,null)},
ck:function(a,b,c,d){a.textContent=null
a.appendChild(this.aG(a,b,c,d))},
dg:function(a,b){return this.ck(a,b,null,null)},
ef:function(a){return a.click()},
gcZ:function(a){return new W.e_(a,"change",!1,[W.S])},
geB:function(a){return new W.e_(a,"click",!1,[W.v7])},
$iscy:1,
$isat:1,
$isap:1,
$isj:1,
gaR:function(a){return a.style},
gdQ:function(a){return a.namespaceURI},
giB:function(a){return a.tagName}}
W.t6.prototype={
$1:function(a){return!!J.aD(a).$iscy},
$S:function(){return{func:1,args:[,]}}}
W.lF.prototype={
gK:function(a){return a.name},
sak:function(a,b){return a.type=b}}
W.h7.prototype={
gK:function(a){return a.name}}
W.lL.prototype={
gau:function(a){return a.error}}
W.S.prototype={$isS:1,$isap:1}
W.aV.prototype={
hk:function(a,b,c,d){if(c!=null)this.fz(a,b,c,!1)},
iu:function(a,b,c,d){if(c!=null)this.h7(a,b,c,!1)},
fz:function(a,b,c,d){return a.addEventListener(b,H.du(c,1),!1)},
h7:function(a,b,c,d){return a.removeEventListener(b,H.du(c,1),!1)}}
W.mc.prototype={
gK:function(a){return a.name}}
W.cj.prototype={$iscj:1,$isap:1,
gK:function(a){return a.name}}
W.fe.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isfe:1,
$isaU:1,
$asaU:function(){return[W.cj]},
$isaR:1,
$asaR:function(){return[W.cj]},
$isq:1,
$asq:function(){return[W.cj]},
$isv:1,
$asv:function(){return[W.cj]},
$isn:1,
$asn:function(){return[W.cj]}}
W.iV.prototype={
$asq:function(){return[W.cj]},
$asv:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isq:1,
$isv:1,
$isn:1}
W.je.prototype={
$asq:function(){return[W.cj]},
$asv:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isq:1,
$isv:1,
$isn:1}
W.iL.prototype={
geJ:function(a){var t=a.result
if(!!J.aD(t).$isbk)return H.cJ(t,0,null)
return t},
gau:function(a){return a.error}}
W.mg.prototype={
gK:function(a){return a.name}}
W.mh.prototype={
gau:function(a){return a.error},
gm:function(a){return a.length}}
W.mj.prototype={
gaR:function(a){return a.style},
gbd:function(a){return a.weight}}
W.mk.prototype={
h:function(a,b){return a.add(b)},
iQ:function(a,b,c){return a.forEach(H.du(b,3),c)},
ab:function(a,b){b=H.du(b,3)
return a.forEach(b)}}
W.mm.prototype={
av:function(a,b){return a.get(b)}}
W.iP.prototype={
M:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.cq.prototype={$iscq:1,$isap:1}
W.mx.prototype={
gm:function(a){return a.length}}
W.fg.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.at]},
$isv:1,
$asv:function(){return[W.at]},
$isn:1,
$asn:function(){return[W.at]},
$isaU:1,
$asaU:function(){return[W.at]},
$isaR:1,
$asaR:function(){return[W.at]}}
W.iW.prototype={
$asq:function(){return[W.at]},
$asv:function(){return[W.at]},
$asn:function(){return[W.at]},
$isq:1,
$isv:1,
$isn:1}
W.jf.prototype={
$asq:function(){return[W.at]},
$asv:function(){return[W.at]},
$asn:function(){return[W.at]},
$isq:1,
$isv:1,
$isn:1}
W.iR.prototype={
M:function(a,b){return a.item(b)}}
W.e7.prototype={
iZ:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
ib:function(a,b,c,d){return a.open(b,c,d)},
gix:function(a){return W.Ie(a.response)},
bf:function(a,b){return a.send(b)},
$ise7:1,
$isap:1,
giy:function(a){return a.responseText}}
W.mA.prototype={
$1:function(a){return J.zr(a)},
$S:function(){return{func:1,args:[W.e7]}}}
W.mB.prototype={
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
W.hq.prototype={}
W.mF.prototype={
gK:function(a){return a.name}}
W.hr.prototype={$ishr:1}
W.fi.prototype={$isfi:1,$iscy:1,$isat:1,$isap:1,
aF:function(a,b){return a.complete.$1(b)}}
W.mK.prototype={$iscy:1,$isj:1,$isat:1,
ged:function(a){return a.checked},
gcU:function(a){return a.files},
gK:function(a){return a.name},
gaI:function(a){return a.value},
giF:function(a){return a.valueAsNumber},
shi:function(a,b){return a.accept=b},
seA:function(a,b){return a.multiple=b},
sak:function(a,b){return a.type=b}}
W.nb.prototype={
gK:function(a){return a.name}}
W.nd.prototype={
gaI:function(a){return a.value}}
W.hC.prototype={
h:function(a,b){return a.add(b)}}
W.hD.prototype={$ishD:1,
ga9:function(a){return a.href},
sa9:function(a,b){return a.href=b},
sak:function(a,b){return a.type=b}}
W.nt.prototype={
D:function(a){return String(a)},
ga9:function(a){return a.href}}
W.ny.prototype={
gK:function(a){return a.name}}
W.hK.prototype={
gau:function(a){return a.error}}
W.jJ.prototype={
M:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nE.prototype={
sak:function(a,b){return a.type=b}}
W.nF.prototype={
ged:function(a){return a.checked},
sak:function(a,b){return a.type=b}}
W.nG.prototype={
gbm:function(a){return a.content},
gK:function(a){return a.name}}
W.nH.prototype={
gaI:function(a){return a.value}}
W.nI.prototype={
iM:function(a,b,c){return a.send(b,c)},
bf:function(a,b){return a.send(b)}}
W.hL.prototype={
gK:function(a){return a.name}}
W.cs.prototype={$iscs:1,$isap:1}
W.jK.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[W.cs]},
$isaR:1,
$asaR:function(){return[W.cs]},
$isq:1,
$asq:function(){return[W.cs]},
$isv:1,
$asv:function(){return[W.cs]},
$isn:1,
$asn:function(){return[W.cs]}}
W.j5.prototype={
$asq:function(){return[W.cs]},
$asv:function(){return[W.cs]},
$asn:function(){return[W.cs]},
$isq:1,
$isv:1,
$isn:1}
W.jp.prototype={
$asq:function(){return[W.cs]},
$asv:function(){return[W.cs]},
$asn:function(){return[W.cs]},
$isq:1,
$isv:1,
$isn:1}
W.nW.prototype={$isj:1}
W.nX.prototype={
gK:function(a){return a.name}}
W.d2.prototype={
gbi:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.l(new P.dg("No elements"))
if(s>1)throw H.l(new P.dg("More than one element"))
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
if(b>>>0!==b||b>=s.length)return H.w(s,b)
t.replaceChild(c,s[b])},
gS:function(a){var t=this.a.childNodes
return new W.iN(t,t.length,-1,null,[H.aE(t,"bv",0)])},
a6:function(a,b,c,d,e){throw H.l(new P.V("Cannot setRange on Node list"))},
ay:function(a,b,c,d){return this.a6(a,b,c,d,0)},
bC:function(a,b,c,d){throw H.l(new P.V("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
sm:function(a,b){throw H.l(new P.V("Cannot set length on immutable List."))},
n:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
$ashF:function(){return[W.at]},
$asfs:function(){return[W.at]},
$asq:function(){return[W.at]},
$asv:function(){return[W.at]},
$asn:function(){return[W.at]}}
W.at.prototype={
gi8:function(a){return new W.d2(a)},
is:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
D:function(a){var t=a.nodeValue
return t==null?this.f9(a):t},
Z:function(a,b){return a.contains(b)},
$isat:1,
$isap:1,
gc8:function(a){return a.parentNode},
gd3:function(a){return a.previousSibling}}
W.jN.prototype={
d4:function(a){return a.previousNode()}}
W.jO.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.at]},
$isv:1,
$asv:function(){return[W.at]},
$isn:1,
$asn:function(){return[W.at]},
$isaU:1,
$asaU:function(){return[W.at]},
$isaR:1,
$asaR:function(){return[W.at]}}
W.j6.prototype={
$asq:function(){return[W.at]},
$asv:function(){return[W.at]},
$asn:function(){return[W.at]},
$isq:1,
$isv:1,
$isn:1}
W.jq.prototype={
$asq:function(){return[W.at]},
$asv:function(){return[W.at]},
$asn:function(){return[W.at]},
$isq:1,
$isv:1,
$isn:1}
W.o1.prototype={
sak:function(a,b){return a.type=b}}
W.o2.prototype={
gK:function(a){return a.name},
sak:function(a,b){return a.type=b}}
W.o6.prototype={
gaI:function(a){return a.value}}
W.o8.prototype={
gK:function(a){return a.name},
gaI:function(a){return a.value}}
W.oc.prototype={
gK:function(a){return a.name},
gaI:function(a){return a.value}}
W.oe.prototype={$isj:1}
W.eb.prototype={
gK:function(a){return a.name}}
W.oj.prototype={
gm:function(a){return a.length}}
W.cl.prototype={
M:function(a,b){return a.item(b)},
$iscl:1,
$isap:1,
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.jX.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cl]},
$isv:1,
$asv:function(){return[W.cl]},
$isn:1,
$asn:function(){return[W.cl]},
$isaU:1,
$asaU:function(){return[W.cl]},
$isaR:1,
$asaR:function(){return[W.cl]}}
W.j7.prototype={
$asq:function(){return[W.cl]},
$asv:function(){return[W.cl]},
$asn:function(){return[W.cl]},
$isq:1,
$isv:1,
$isn:1}
W.jr.prototype={
$asq:function(){return[W.cl]},
$asv:function(){return[W.cl]},
$asn:function(){return[W.cl]},
$isq:1,
$isv:1,
$isn:1}
W.op.prototype={
bf:function(a,b){return a.send(b)}}
W.ot.prototype={
gaI:function(a){return a.value}}
W.jZ.prototype={
bf:function(a,b){return a.send(b)}}
W.k_.prototype={
sak:function(a,b){return a.type=b}}
W.fw.prototype={$isfw:1,$iscy:1,$isat:1,$isap:1,
sak:function(a,b){return a.type=b}}
W.k0.prototype={
M:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name},
gaI:function(a){return a.value},
seA:function(a,b){return a.multiple=b}}
W.oN.prototype={
gK:function(a){return a.name}}
W.oQ.prototype={$isj:1}
W.oR.prototype={
gK:function(a){return a.name}}
W.oS.prototype={
gK:function(a){return a.name}}
W.ct.prototype={$isct:1,$isap:1}
W.k2.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.ct]},
$isv:1,
$asv:function(){return[W.ct]},
$isn:1,
$asn:function(){return[W.ct]},
$isaU:1,
$asaU:function(){return[W.ct]},
$isaR:1,
$asaR:function(){return[W.ct]}}
W.h9.prototype={
$asq:function(){return[W.ct]},
$asv:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isq:1,
$isv:1,
$isn:1}
W.hc.prototype={
$asq:function(){return[W.ct]},
$asv:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isq:1,
$isv:1,
$isn:1}
W.oW.prototype={
sak:function(a,b){return a.type=b}}
W.hX.prototype={$ishX:1}
W.cu.prototype={$iscu:1,$isap:1,
gbd:function(a){return a.weight}}
W.k3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cu]},
$isv:1,
$asv:function(){return[W.cu]},
$isn:1,
$asn:function(){return[W.cu]},
$isaU:1,
$asaU:function(){return[W.cu]},
$isaR:1,
$asaR:function(){return[W.cu]}}
W.j8.prototype={
$asq:function(){return[W.cu]},
$asv:function(){return[W.cu]},
$asn:function(){return[W.cu]},
$isq:1,
$isv:1,
$isn:1}
W.js.prototype={
$asq:function(){return[W.cu]},
$asv:function(){return[W.cu]},
$asn:function(){return[W.cu]},
$isq:1,
$isv:1,
$isn:1}
W.fx.prototype={$isfx:1,$isap:1}
W.oZ.prototype={
gau:function(a){return a.error}}
W.cn.prototype={
M:function(a,b){return a.item(b)},
$iscn:1,
$isap:1,
gm:function(a){return a.length}}
W.p_.prototype={
gK:function(a){return a.name}}
W.p0.prototype={
gK:function(a){return a.name}}
W.p5.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
ab:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gX:function(a){return a.key(0)==null},
$isbo:1,
$asbo:function(){return[P.z,P.z]}}
W.ps.prototype={
sak:function(a,b){return a.type=b}}
W.pu.prototype={
av:function(a,b){return a.get(b)}}
W.co.prototype={$isco:1,$isap:1,
ga9:function(a){return a.href}}
W.ed.prototype={}
W.k7.prototype={
aG:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.cm(a,b,c,d)
t=W.Aw("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.d2(s).at(0,J.zo(t))
return s}}
W.pz.prototype={
aG:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.cm(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.L.aG(t.createElement("table"),b,c,d)
t.toString
t=new W.d2(t)
r=t.gbi(t)
r.toString
t=new W.d2(r)
q=t.gbi(t)
s.toString
q.toString
new W.d2(s).at(0,new W.d2(q))
return s}}
W.pA.prototype={
aG:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cm(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.L.aG(t.createElement("table"),b,c,d)
t.toString
t=new W.d2(t)
r=t.gbi(t)
s.toString
r.toString
new W.d2(s).at(0,new W.d2(r))
return s}}
W.hY.prototype={
ck:function(a,b,c,d){var t
a.textContent=null
t=this.aG(a,b,c,d)
a.content.appendChild(t)},
dg:function(a,b){return this.ck(a,b,null,null)},
$ishY:1,
gbm:function(a){return a.content}}
W.pF.prototype={
gK:function(a){return a.name},
gaI:function(a){return a.value}}
W.cT.prototype={$isap:1}
W.cM.prototype={$isap:1}
W.pL.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaU:1,
$asaU:function(){return[W.cM]},
$isaR:1,
$asaR:function(){return[W.cM]},
$isq:1,
$asq:function(){return[W.cM]},
$isv:1,
$asv:function(){return[W.cM]},
$isn:1,
$asn:function(){return[W.cM]}}
W.j9.prototype={
$asq:function(){return[W.cM]},
$asv:function(){return[W.cM]},
$asn:function(){return[W.cM]},
$isq:1,
$isv:1,
$isn:1}
W.jt.prototype={
$asq:function(){return[W.cM]},
$asv:function(){return[W.cM]},
$asn:function(){return[W.cM]},
$isq:1,
$isv:1,
$isn:1}
W.pM.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaU:1,
$asaU:function(){return[W.cT]},
$isaR:1,
$asaR:function(){return[W.cT]},
$isq:1,
$asq:function(){return[W.cT]},
$isv:1,
$asv:function(){return[W.cT]},
$isn:1,
$asn:function(){return[W.cT]}}
W.ha.prototype={
$asq:function(){return[W.cT]},
$asv:function(){return[W.cT]},
$asn:function(){return[W.cT]},
$isq:1,
$isv:1,
$isn:1}
W.hd.prototype={
$asq:function(){return[W.cT]},
$asv:function(){return[W.cT]},
$asn:function(){return[W.cT]},
$isq:1,
$isv:1,
$isn:1}
W.pQ.prototype={
gm:function(a){return a.length}}
W.cv.prototype={$iscv:1,$isap:1}
W.k8.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cv]},
$isv:1,
$asv:function(){return[W.cv]},
$isn:1,
$asn:function(){return[W.cv]},
$isaU:1,
$asaU:function(){return[W.cv]},
$isaR:1,
$asaR:function(){return[W.cv]}}
W.ja.prototype={
$asq:function(){return[W.cv]},
$asv:function(){return[W.cv]},
$asn:function(){return[W.cv]},
$isq:1,
$isv:1,
$isn:1}
W.ju.prototype={
$asq:function(){return[W.cv]},
$asv:function(){return[W.cv]},
$asn:function(){return[W.cv]},
$isq:1,
$isv:1,
$isn:1}
W.fB.prototype={$isfB:1,$isap:1}
W.k9.prototype={
M:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ee.prototype={}
W.ka.prototype={
ic:function(a){return a.parentNode()},
d4:function(a){return a.previousNode()}}
W.q5.prototype={
D:function(a){return String(a)},
$isj:1,
ga9:function(a){return a.href}}
W.q6.prototype={
av:function(a,b){return a.get(b)}}
W.qa.prototype={
gm:function(a){return a.length}}
W.fC.prototype={$isfC:1,$isap:1}
W.kb.prototype={
M:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.qf.prototype={
bf:function(a,b){return a.send(b)}}
W.ke.prototype={$isj:1,
gK:function(a){return a.name}}
W.qm.prototype={$isj:1}
W.eQ.prototype={$isj:1}
W.fD.prototype={$isfD:1,$isat:1,$isap:1,
gK:function(a){return a.name},
gdQ:function(a){return a.namespaceURI}}
W.qE.prototype={
D:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(a.width)+" x "+H.y(a.height)},
U:function(a,b){var t,s,r
if(b==null)return!1
t=J.aD(b)
if(!t.$isbX)return!1
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
ga8:function(a){var t,s,r,q
t=J.dF(a.left)
s=J.dF(a.top)
r=J.dF(a.width)
q=J.dF(a.height)
return W.yq(W.eU(W.eU(W.eU(W.eU(0,t),s),r),q))},
$isbX:1,
$asbX:function(){},
gb7:function(a){return a.height},
gc6:function(a){return a.left},
gcd:function(a){return a.top},
gbe:function(a){return a.width}}
W.i3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[P.bX]},
$isaR:1,
$asaR:function(){return[P.bX]},
$isq:1,
$asq:function(){return[P.bX]},
$isv:1,
$asv:function(){return[P.bX]},
$isn:1,
$asn:function(){return[P.bX]}}
W.jb.prototype={
$asq:function(){return[P.bX]},
$asv:function(){return[P.bX]},
$asn:function(){return[P.bX]},
$isq:1,
$isv:1,
$isn:1}
W.jv.prototype={
$asq:function(){return[P.bX]},
$asv:function(){return[P.bX]},
$asn:function(){return[P.bX]},
$isq:1,
$isv:1,
$isn:1}
W.kk.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.bM]},
$isv:1,
$asv:function(){return[W.bM]},
$isn:1,
$asn:function(){return[W.bM]},
$isaU:1,
$asaU:function(){return[W.bM]},
$isaR:1,
$asaR:function(){return[W.bM]}}
W.jc.prototype={
$asq:function(){return[W.bM]},
$asv:function(){return[W.bM]},
$asn:function(){return[W.bM]},
$isq:1,
$isv:1,
$isn:1}
W.jw.prototype={
$asq:function(){return[W.bM]},
$asv:function(){return[W.bM]},
$asn:function(){return[W.bM]},
$isq:1,
$isv:1,
$isn:1}
W.qL.prototype={$isj:1}
W.qM.prototype={
gb7:function(a){return a.height},
gbe:function(a){return a.width}}
W.kp.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[W.cq]},
$isaR:1,
$asaR:function(){return[W.cq]},
$isq:1,
$asq:function(){return[W.cq]},
$isv:1,
$asv:function(){return[W.cq]},
$isn:1,
$asn:function(){return[W.cq]}}
W.iX.prototype={
$asq:function(){return[W.cq]},
$asv:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isq:1,
$isv:1,
$isn:1}
W.jg.prototype={
$asq:function(){return[W.cq]},
$asv:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isq:1,
$isv:1,
$isn:1}
W.r6.prototype={$isj:1}
W.i9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.at]},
$isv:1,
$asv:function(){return[W.at]},
$isn:1,
$asn:function(){return[W.at]},
$isaU:1,
$asaU:function(){return[W.at]},
$isaR:1,
$asaR:function(){return[W.at]}}
W.iY.prototype={
$asq:function(){return[W.at]},
$asv:function(){return[W.at]},
$asn:function(){return[W.at]},
$isq:1,
$isv:1,
$isn:1}
W.jh.prototype={
$asq:function(){return[W.at]},
$asv:function(){return[W.at]},
$asn:function(){return[W.at]},
$isq:1,
$isv:1,
$isn:1}
W.rw.prototype={$isj:1}
W.kt.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cn]},
$isv:1,
$asv:function(){return[W.cn]},
$isn:1,
$asn:function(){return[W.cn]},
$isaU:1,
$asaU:function(){return[W.cn]},
$isaR:1,
$asaR:function(){return[W.cn]}}
W.iZ.prototype={
$asq:function(){return[W.cn]},
$asv:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isq:1,
$isv:1,
$isn:1}
W.ji.prototype={
$asq:function(){return[W.cn]},
$asv:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isq:1,
$isv:1,
$isn:1}
W.kv.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[W.co]},
$isaR:1,
$asaR:function(){return[W.co]},
$isq:1,
$asq:function(){return[W.co]},
$isv:1,
$asv:function(){return[W.co]},
$isn:1,
$asn:function(){return[W.co]}}
W.j_.prototype={
$asq:function(){return[W.co]},
$asv:function(){return[W.co]},
$asn:function(){return[W.co]},
$isq:1,
$isv:1,
$isn:1}
W.jj.prototype={
$asq:function(){return[W.co]},
$asv:function(){return[W.co]},
$asn:function(){return[W.co]},
$isq:1,
$isv:1,
$isn:1}
W.rS.prototype={$isj:1}
W.rT.prototype={$isj:1}
W.qA.prototype={
ab:function(a,b){var t,s,r,q,p
for(t=this.gaj(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.bG)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gaj:function(a){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.z])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.w(t,q)
p=t[q]
o=J.aG(p)
if(o.gdQ(p)==null)s.push(o.gK(p))}return s},
gX:function(a){return this.gaj(this).length===0},
$isbo:1,
$asbo:function(){return[P.z,P.z]},
gdM:function(){return this.a}}
W.qN.prototype={
n:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gaj(this).length}}
W.qO.prototype={
aO:function(){var t,s,r,q,p
t=P.a2(null,null,null,P.z)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bG)(s),++q){p=J.tK(s[q])
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
W.km.prototype={
aW:function(a,b,c,d){return W.dk(this.a,this.b,a,!1,H.N(this,0))},
ey:function(a,b,c){return this.aW(a,null,b,c)}}
W.e_.prototype={}
W.qR.prototype={
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
if(t!=null&&this.a<=0)J.zd(this.b,this.c,t,!1)},
e7:function(){var t=this.d
if(t!=null)J.zB(this.b,this.c,t,!1)},
fq:function(a,b,c,d,e){this.e5()}}
W.qS.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.i7.prototype={
bk:function(a){return $.$get$yp().Z(0,W.h6(a))},
b3:function(a,b,c){var t,s,r
t=W.h6(a)
s=$.$get$vT()
r=s.n(0,H.y(t)+"::"+b)
if(r==null)r=s.n(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
ft:function(a){var t,s
t=$.$get$vT()
if(t.gX(t)){for(s=0;s<262;++s)t.i(0,C.a_[s],W.IN())
for(s=0;s<12;++s)t.i(0,C.q[s],W.IO())}},
$isea:1,
geS:function(){return this.a}}
W.bv.prototype={
gS:function(a){return new W.iN(a,this.gm(a),-1,null,[H.aE(a,"bv",0)])},
h:function(a,b){throw H.l(new P.V("Cannot add to immutable List."))},
a6:function(a,b,c,d,e){throw H.l(new P.V("Cannot setRange on immutable List."))},
ay:function(a,b,c,d){return this.a6(a,b,c,d,0)},
aH:function(a,b,c,d){throw H.l(new P.V("Cannot modify an immutable List."))},
bC:function(a,b,c,d){throw H.l(new P.V("Cannot modify an immutable List."))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
W.jP.prototype={
h:function(a,b){this.a.push(b)},
bk:function(a){return C.b.ea(this.a,new W.nZ(a))},
b3:function(a,b,c){return C.b.ea(this.a,new W.nY(a,b,c))},
$isea:1}
W.nZ.prototype={
$1:function(a){return a.bk(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.nY.prototype={
$1:function(a){return a.b3(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.ia.prototype={
bk:function(a){return this.a.Z(0,W.h6(a))},
b3:function(a,b,c){var t,s
t=W.h6(a)
s=this.c
if(s.Z(0,H.y(t)+"::"+b))return this.d.hl(c)
else if(s.Z(0,"*::"+b))return this.d.hl(c)
else{s=this.b
if(s.Z(0,H.y(t)+"::"+b))return!0
else if(s.Z(0,"*::"+b))return!0
else if(s.Z(0,H.y(t)+"::*"))return!0
else if(s.Z(0,"*::*"))return!0}return!1},
fv:function(a,b,c,d){var t,s,r
this.a.at(0,c)
t=b.cg(0,new W.rx())
s=b.cg(0,new W.ry())
this.b.at(0,t)
r=this.c
r.at(0,C.D)
r.at(0,s)},
$isea:1,
geS:function(){return this.d}}
W.rx.prototype={
$1:function(a){return!C.b.Z(C.q,a)},
$S:function(){return{func:1,args:[,]}}}
W.ry.prototype={
$1:function(a){return C.b.Z(C.q,a)},
$S:function(){return{func:1,args:[,]}}}
W.rI.prototype={
b3:function(a,b,c){if(this.ff(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.w9(a).a.getAttribute("template")==="")return this.e.Z(0,b)
return!1}}
W.rJ.prototype={
$1:function(a){return"TEMPLATE::"+H.y(a)},
$S:function(){return{func:1,args:[,]}}}
W.rH.prototype={
bk:function(a){var t=J.aD(a)
if(!!t.$ishW)return!1
t=!!t.$iscb
if(t&&W.h6(a)==="foreignObject")return!1
if(t)return!0
return!1},
b3:function(a,b,c){if(b==="is"||C.c.ag(b,"on"))return!1
return this.bk(a)},
$isea:1}
W.iN.prototype={
I:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.fN(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gL:function(){return this.d}}
W.ea.prototype={}
W.rK.prototype={
ci:function(a){}}
W.rv.prototype={}
W.ky.prototype={
ci:function(a){new W.rQ(this).$2(a,null)},
bw:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
ha:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.w9(a)
r=s.gdM().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.bH(n)}p="element unprintable"
try{p=J.cx(a)}catch(n){H.bH(n)}try{o=W.h6(a)
this.h9(a,b,t,p,o,s,r)}catch(n){if(H.bH(n) instanceof P.cW)throw n
else{this.bw(a,b)
window
m="Removing corrupted element "+H.y(p)
if(typeof console!="undefined")console.warn(m)}}},
h9:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.bw(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bk(a)){this.bw(a,b)
window
t="Removing disallowed element <"+H.y(e)+"> from "+J.cx(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.b3(a,"is",g)){this.bw(a,b)
window
t="Removing disallowed type extension <"+H.y(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gaj(f)
s=H.a(t.slice(0),[H.N(t,0)])
for(r=f.gaj(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.w(s,r)
q=s[r]
if(!this.a.b3(a,J.zH(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.y(e)+" "+q+'="'+H.y(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.aD(a).$ishY)this.ci(a.content)}}
W.rQ.prototype={
$2:function(a,b){var t,s,r,q,p,o
r=this.a
switch(a.nodeType){case 1:r.ha(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.bw(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.zp(t)}catch(q){H.bH(q)
p=t
if(r){o=J.aG(p)
if(o.gc8(p)!=null){o.gc8(p)
o.gc8(p).removeChild(p)}}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.at,W.at]}}}
P.rE.prototype={
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
s=J.aD(a)
if(!!s.$ise3)return new Date(a.a)
if(!!s.$isH5)throw H.l(new P.eL("structured clone of RegExp"))
if(!!s.$iscj)return a
if(!!s.$isf1)return a
if(!!s.$isfe)return a
if(!!s.$ishr)return a
if(!!s.$isfo||!!s.$isez)return a
if(!!s.$isbo){r=this.bD(a)
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
s.ab(a,new P.rG(t,this))
return t.a}if(!!s.$isq){r=this.bD(a)
t=this.b
if(r>=t.length)return H.w(t,r)
o=t[r]
if(o!=null)return o
return this.hx(a,r)}throw H.l(new P.eL("structured clone of other type"))},
hx:function(a,b){var t,s,r,q,p
t=J.bj(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.w(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.bc(t.n(a,p))
if(p>=r.length)return H.w(r,p)
r[p]=q}return r}}
P.rG.prototype={
$2:function(a,b){this.a.a[a]=this.b.bc(b)},
$S:function(){return{func:1,args:[,,]}}}
P.qt.prototype={
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
r=new P.e3(s,!0)
r.dq(s,!0)
return r}if(a instanceof RegExp)throw H.l(new P.eL("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.Iz(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bD(a)
r=this.b
o=r.length
if(p>=o)return H.w(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.jF()
t.a=n
if(p>=o)return H.w(r,p)
r[p]=n
this.hM(a,new P.qu(t,this))
return t.a}if(a instanceof Array){p=this.bD(a)
r=this.b
if(p>=r.length)return H.w(r,p)
n=r[p]
if(n!=null)return n
o=J.bj(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.w(r,p)
r[p]=n
if(typeof m!=="number")return H.a9(m)
r=J.dl(n)
l=0
for(;l<m;++l)r.i(n,l,this.bc(o.n(a,l)))
return n}return a}}
P.qu.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bc(b)
J.kI(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.ta.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.z,,]}}}
P.rF.prototype={}
P.kg.prototype={
hM:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bG)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.tb.prototype={
$1:function(a){return this.a.aF(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.tc.prototype={
$1:function(a){return this.a.bl(a)},
$S:function(){return{func:1,args:[,]}}}
P.ll.prototype={
e8:function(a){if($.$get$wu().b.test(a))return a
throw H.l(P.dH(a,"value","Not a valid class token"))},
D:function(a){return this.aO().aL(0," ")},
gS:function(a){var t,s
t=this.aO()
s=new P.d3(t,t.r,null,null,[null])
s.c=t.e
return s},
ab:function(a,b){this.aO().ab(0,b)},
aB:function(a,b){var t=this.aO()
return new H.f7(t,b,[H.N(t,0),null])},
gX:function(a){return this.aO().a===0},
gm:function(a){return this.aO().a},
Z:function(a,b){if(typeof b!=="string")return!1
this.e8(b)
return this.aO().Z(0,b)},
cY:function(a){return this.Z(0,a)?a:null},
h:function(a,b){this.e8(b)
return this.i6(0,new P.lm(b))},
a5:function(a,b){return this.aO().a5(0,!0)},
ar:function(a){return this.a5(a,!0)},
i6:function(a,b){var t,s
t=this.aO()
s=b.$1(t)
this.eU(t)
return s},
$iseG:1,
$aseG:function(){return[P.z]},
$isv:1,
$asv:function(){return[P.z]},
$isn:1,
$asn:function(){return[P.z]}}
P.lm.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.lx.prototype={
gK:function(a){return a.name}}
P.t_.prototype={
$1:function(a){this.b.aF(0,new P.kg([],[],!1).bc(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mI.prototype={
av:function(a,b){var t,s,r,q,p
try{t=a.get(b)
q=P.yB(t)
return q}catch(p){s=H.bH(p)
r=H.cp(p)
q=P.ug(s,r,null)
return q}},
gK:function(a){return a.name}}
P.o3.prototype={
c_:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fX(a,b,c)
q=P.yB(t)
return q}catch(p){s=H.bH(p)
r=H.cp(p)
q=P.ug(s,r,null)
return q}},
h:function(a,b){return this.c_(a,b,null)},
fX:function(a,b,c){return a.add(new P.rF([],[]).bc(b))},
gK:function(a){return a.name}}
P.hU.prototype={
gau:function(a){return a.error}}
P.pV.prototype={
gau:function(a){return a.error}}
P.rd.prototype={
bH:function(a){if(a<=0||a>4294967296)throw H.l(P.xS("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
c7:function(){return Math.random()}}
P.rm.prototype={
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
if(a<=0||a>4294967296)throw H.l(P.xS("max must be in range 0 < max \u2264 2^32, was "+a))
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
t=J.eW(a,0)?-1:0
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
P.rn.prototype={}
P.bX.prototype={$asbX:null}
P.kN.prototype={$isj:1,
ga9:function(a){return a.href}}
P.eh.prototype={$isj:1}
P.lO.prototype={$isj:1}
P.lP.prototype={$isj:1}
P.lQ.prototype={$isj:1}
P.lR.prototype={$isj:1}
P.lS.prototype={$isj:1}
P.lT.prototype={$isj:1}
P.lU.prototype={$isj:1}
P.lV.prototype={$isj:1}
P.lW.prototype={$isj:1}
P.lX.prototype={$isj:1,
ga9:function(a){return a.href}}
P.lY.prototype={$isj:1}
P.lZ.prototype={$isj:1}
P.m_.prototype={$isj:1}
P.m0.prototype={$isj:1}
P.m1.prototype={$isj:1}
P.m2.prototype={$isj:1}
P.mi.prototype={$isj:1,
ga9:function(a){return a.href}}
P.cr.prototype={$isj:1}
P.mG.prototype={$isj:1,
ga9:function(a){return a.href}}
P.da.prototype={$isap:1}
P.ng.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.da]},
$isv:1,
$asv:function(){return[P.da]},
$isn:1,
$asn:function(){return[P.da]}}
P.j0.prototype={
$asq:function(){return[P.da]},
$asv:function(){return[P.da]},
$asn:function(){return[P.da]},
$isq:1,
$isv:1,
$isn:1}
P.jk.prototype={
$asq:function(){return[P.da]},
$asv:function(){return[P.da]},
$asn:function(){return[P.da]},
$isq:1,
$isv:1,
$isn:1}
P.nB.prototype={$isj:1}
P.nC.prototype={$isj:1}
P.dd.prototype={$isap:1}
P.o_.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.dd]},
$isv:1,
$asv:function(){return[P.dd]},
$isn:1,
$asn:function(){return[P.dd]}}
P.j1.prototype={
$asq:function(){return[P.dd]},
$asv:function(){return[P.dd]},
$asn:function(){return[P.dd]},
$isq:1,
$isv:1,
$isn:1}
P.jl.prototype={
$asq:function(){return[P.dd]},
$asv:function(){return[P.dd]},
$asn:function(){return[P.dd]},
$isq:1,
$isv:1,
$isn:1}
P.oh.prototype={$isj:1,
ga9:function(a){return a.href}}
P.om.prototype={
gm:function(a){return a.length}}
P.hW.prototype={$ishW:1,$isj:1,
ga9:function(a){return a.href},
sak:function(a,b){return a.type=b}}
P.pq.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.z]},
$isv:1,
$asv:function(){return[P.z]},
$isn:1,
$asn:function(){return[P.z]}}
P.j2.prototype={
$asq:function(){return[P.z]},
$asv:function(){return[P.z]},
$asn:function(){return[P.z]},
$isq:1,
$isv:1,
$isn:1}
P.jm.prototype={
$asq:function(){return[P.z]},
$asv:function(){return[P.z]},
$asn:function(){return[P.z]},
$isq:1,
$isv:1,
$isn:1}
P.pt.prototype={
sak:function(a,b){return a.type=b}}
P.kT.prototype={
aO:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a2(null,null,null,P.z)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bG)(r),++p){o=J.tK(r[p])
if(o.length!==0)s.h(0,o)}return s},
eU:function(a){this.a.setAttribute("class",a.aL(0," "))}}
P.cb.prototype={
gee:function(a){return new P.kT(a)},
aG:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.ea])
t.push(W.yo(null))
t.push(W.yr())
t.push(new W.rH())
c=new W.ky(new W.jP(t))}s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.v).hy(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.d2(q)
o=t.gbi(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
ev:function(a,b,c,d,e){throw H.l(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
ef:function(a){throw H.l(new P.V("Cannot invoke click SVG."))},
gcZ:function(a){return new W.e_(a,"change",!1,[W.S])},
geB:function(a){return new W.e_(a,"click",!1,[W.v7])},
$iscb:1,
$isj:1}
P.pw.prototype={$isj:1}
P.py.prototype={$isj:1}
P.eK.prototype={}
P.pK.prototype={$isj:1,
ga9:function(a){return a.href}}
P.di.prototype={$isap:1}
P.pW.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.di]},
$isv:1,
$asv:function(){return[P.di]},
$isn:1,
$asn:function(){return[P.di]}}
P.j3.prototype={
$asq:function(){return[P.di]},
$asv:function(){return[P.di]},
$asn:function(){return[P.di]},
$isq:1,
$isv:1,
$isn:1}
P.jn.prototype={
$asq:function(){return[P.di]},
$asv:function(){return[P.di]},
$asn:function(){return[P.di]},
$isq:1,
$isv:1,
$isn:1}
P.q7.prototype={$isj:1,
ga9:function(a){return a.href}}
P.qb.prototype={$isj:1}
P.qc.prototype={$isj:1}
P.i6.prototype={$isj:1,
ga9:function(a){return a.href}}
P.rs.prototype={$isj:1}
P.rt.prototype={$isj:1}
P.ru.prototype={$isj:1}
P.bk.prototype={}
P.dj.prototype={$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isn:1,
$asn:function(){return[P.F]}}
P.fU.prototype={$isfU:1,$isap:1,
gm:function(a){return a.length}}
P.eZ.prototype={$iseZ:1,$isap:1,
gc2:function(a){return a.buffer}}
P.fV.prototype={
fI:function(a,b,c,d){return a.decodeAudioData(b,H.du(c,1),H.du(d,1))},
hz:function(a,b){var t,s,r
t=P.fU
s=new P.bq(0,$.aF,null,[t])
r=new P.dZ(s,[t])
this.fI(a,b,new P.kU(r),new P.kV(r))
return s}}
P.kU.prototype={
$1:function(a){this.a.aF(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kV.prototype={
$1:function(a){var t=this.a
if(a==null)t.bl("")
else t.bl(a)},
$S:function(){return{func:1,args:[,]}}}
P.bI.prototype={}
P.f0.prototype={}
P.l3.prototype={
sak:function(a,b){return a.type=b}}
P.lj.prototype={
gc2:function(a){return a.buffer}}
P.jT.prototype={
sak:function(a,b){return a.type=b}}
P.kP.prototype={
gK:function(a){return a.name}}
P.oA.prototype={$isj:1}
P.rR.prototype={$isj:1}
P.k4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bA(b,a,null,null,null))
return P.yS(a.item(b))},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
M:function(a,b){return P.yS(a.item(b))},
$isq:1,
$asq:function(){return[P.bo]},
$isv:1,
$asv:function(){return[P.bo]},
$isn:1,
$asn:function(){return[P.bo]}}
P.j4.prototype={
$asq:function(){return[P.bo]},
$asv:function(){return[P.bo]},
$asn:function(){return[P.bo]},
$isq:1,
$isv:1,
$isn:1}
P.jo.prototype={
$asq:function(){return[P.bo]},
$asv:function(){return[P.bo]},
$asn:function(){return[P.bo]},
$isq:1,
$isv:1,
$isn:1}
T.fQ.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
gX:function(a){return this.a.length===0},
gS:function(a){var t=this.a
return new J.ij(t,t.length,0,null,[H.N(t,0)])},
$ashy:function(){return[T.fR]},
$asn:function(){return[T.fR]},
gcU:function(a){return this.a}}
T.fR.prototype={
gbm:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fh(C.B)
r=T.fh(C.C)
q=T.xG(0,this.b)
new T.iS(s,q,0,0,0,t,r).dN()
r=q.c.buffer
q=q.a
r.toString
q=H.cJ(r,0,q)
this.cy=q
t=q}else{t=s.bM()
this.cy=t}this.ch=0}}return t},
D:function(a){return this.a},
gK:function(a){return this.a}}
T.dm.prototype={
D:function(a){return"ArchiveException: "+this.a}}
T.hs.prototype={
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
if(typeof s!=="number")return s.W()
if(typeof b!=="number")return H.a9(b)
s+=b
if(s<0||s>=t.length)return H.w(t,s)
return t[s]},
b0:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a9(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.al()
if(typeof s!=="number")return H.a9(s)
b=t-(a-s)}return T.uk(this.a,this.d,b,a)},
b8:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.W()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a9(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.w(q,s)
q[s]}return-1},
bn:function(a,b){return this.b8(a,b,0)},
d7:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.al()
if(typeof s!=="number")return H.a9(s)
r=this.b0(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.al()
if(typeof p!=="number")return H.a9(p)
if(typeof s!=="number")return s.W()
this.b=s+(t-(q-p))
return r},
cb:function(a){return P.pr(this.d7(a).bM(),0,null)},
a1:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
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
a4:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
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
aY:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
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
if(this.d===1)return(C.a.as(p,56)|C.a.as(o,48)|C.a.as(n,40)|C.a.as(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.as(i,56)|C.a.as(j,48)|C.a.as(k,40)|C.a.as(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bM:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.al()
if(typeof r!=="number")return H.a9(r)
q=t-(s-r)
t=this.a
r=J.aD(t)
if(!!r.$isdj){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cJ(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.yD(r.cl(t,s,p>o?o:p)))},
fi:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gc2:function(a){return this.a},
gia:function(a){return this.b}}
T.o9.prototype={
iI:function(a,b){var t,s,r,q
if(b==null)b=J.c4(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cz(s-q)
C.r.ay(r,t,s,a)
this.a+=b},
dc:function(a){return this.iI(a,null)},
iK:function(a){var t,s,r,q
t=J.bj(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
this.cz(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
C.r.a6(q,s,s+r,t.gc2(a),t.gia(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.al()
if(typeof q!=="number")return H.a9(q)
this.a=t+(r-(s-q))},
b0:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cJ(t,a,b-a)},
dl:function(a){return this.b0(a,null)},
cz:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.bb(P.dG("Invalid length "+H.y(s)))
r=new Uint8Array(s)
q=this.c
C.r.ay(r,0,q.length,q)
this.c=r},
fM:function(){return this.cz(null)},
gm:function(a){return this.a}}
T.qp.prototype={
h6:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.b0(this.a-20,20)
if(s.a4()!==117853008){a.b=t
return}s.a4()
r=s.aY()
s.a4()
a.b=r
if(a.a4()!==101075792){a.b=t
return}a.aY()
a.a1()
a.a1()
q=a.a4()
p=a.a4()
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
if(typeof t!=="number")return t.al()
if(typeof r!=="number")return H.a9(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a4()===101010256){a.b=t
return q}}throw H.l(new T.dm("Could not find End of Central Directory Record"))},
fm:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fN(a)
this.a=t
a.b=t
a.a4()
this.b=a.a1()
this.c=a.a1()
this.d=a.a1()
this.e=a.a1()
this.f=a.a4()
this.r=a.a4()
s=a.a1()
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
if(r.a4()!==33639248)break
p=new T.qr(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a1()
p.b=r.a1()
p.c=r.a1()
p.d=r.a1()
p.e=r.a1()
p.f=r.a1()
p.r=r.a4()
p.x=r.a4()
p.y=r.a4()
n=r.a1()
m=r.a1()
l=r.a1()
p.z=r.a1()
p.Q=r.a1()
p.ch=r.a4()
o=r.a4()
p.cx=o
if(n>0)p.cy=r.cb(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.al()
j=r.b0(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.al()
if(typeof g!=="number")return H.a9(g)
if(typeof k!=="number")return k.W()
r.b=k+(i-(h-g))
p.db=j.bM()
f=j.a1()
e=j.a1()
if(f===1){if(e>=8)p.y=j.aY()
if(e>=16)p.x=j.aY()
if(e>=24){o=j.aY()
p.cx=o}if(e>=28)p.z=j.a4()}}if(l>0)p.dx=r.cb(l)
a.b=o
p.dy=T.HJ(a,p)
q.push(p)}}}
T.qq.prototype={
gbm:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fh(C.B)
q=T.fh(C.C)
t=T.xG(0,t)
new T.iS(s,t,0,0,0,r,q).dN()
q=t.c.buffer
t=t.a
q.toString
t=H.cJ(q,0,t)
this.cy=t
this.d=0}else{t=s.bM()
this.cy=t}}return t},
D:function(a){return this.z},
fn:function(a,b){var t,s,r,q
t=a.a4()
this.a=t
if(t!==67324752)throw H.l(new T.dm("Invalid Zip Signature"))
this.b=a.a1()
this.c=a.a1()
this.d=a.a1()
this.e=a.a1()
this.f=a.a1()
this.r=a.a4()
this.x=a.a4()
this.y=a.a4()
s=a.a1()
r=a.a1()
this.z=a.cb(s)
this.Q=a.d7(r).bM()
this.cx=a.d7(this.ch.x)
if((this.c&8)!==0){q=a.a4()
if(q===134695760)this.r=a.a4()
else this.r=q
this.x=a.a4()
this.y=a.a4()}}}
T.qr.prototype={
D:function(a){return this.cy}}
T.qo.prototype={
hA:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.HI(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.F],p=0;p<t.length;t.length===r||(0,H.bG)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.dh()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fR(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.e0(k,"$isq",q,"$asq")){j.cy=k
j.cx=T.uk(k,0,null,0)}else if(k instanceof T.hs){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hs(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.hI(m,"/")
j.y=n.r
s.push(j)}return new T.fQ(s,null)}}
T.mC.prototype={
fh:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.as(1,this.b)
r=H.cE(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.w(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.w(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iS.prototype={
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
if(n!==0&&n!==(s^65535)>>>0)H.bb(new T.dm("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.al()
r=q-r
if(n>s-r)H.bb(new T.dm("Input buffer is broken"))
m=t.b0(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.al()
if(typeof l!=="number")return H.a9(l)
if(typeof s!=="number")return s.W()
t.b=s+(r-(q-l))
this.b.iK(m)
break
case 1:this.dE(this.f,this.r)
break
case 2:this.h4()
break
default:throw H.l(new T.dm("unknown BTYPE: "+o))}return(p&1)===0},
aA:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.W()
if(typeof r!=="number")return r.ax()
if(r>=q+p)throw H.l(new T.dm("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.w(q,r)
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
if(p<0||p>=o.length)return H.w(o,p)
m=o[p]
this.c=(this.c|C.a.az(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.as(1,s)-1)>>>0
if(p>=t.length)return H.w(t,p)
l=t[p]
k=l>>>16
this.c=C.a.e3(r,k)
this.d=q-k
return l&65535},
h4:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.aA(5)+257
s=this.aA(5)+1
r=this.aA(4)+4
q=H.cE(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.w(C.J,o)
n=C.J[o]
m=this.aA(3)
if(n>=q)return H.w(p,n)
p[n]=m}l=T.fh(p)
k=new Uint8Array(H.cE(t))
j=new Uint8Array(H.cE(s))
i=this.dD(t,l,k)
h=this.dD(s,l,j)
this.dE(T.fh(i),T.fh(h))},
dE:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cG(a)
if(s>285)throw H.l(new T.dm("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fM()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.w(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.w(C.H,p)
o=C.H[p]+this.aA(C.a1[p])
n=this.cG(b)
if(n<=29){if(n>=30)return H.w(C.E,n)
m=C.E[n]+this.aA(C.a0[n])
for(r=-m;o>m;){t.dc(t.dl(r))
o-=m}if(o===m)t.dc(t.dl(r))
else t.dc(t.b0(r,o-m))}else throw H.l(new T.dm("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.al();--r
t.b=r
if(r<0)t.b=0}},
dD:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cG(b)
switch(q){case 16:p=3+this.aA(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=s}break
case 17:p=3+this.aA(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
case 18:p=11+this.aA(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.l(new T.dm("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kO.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Math Book",H.a([$.O,$.a0,$.aL],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.O,$.a0],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.D,$.a0,$.b4],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.O,$.a0],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.O,$.a0],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c_,$.aJ],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.a0],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.hj,$.m)
q.i(0,$.bl,$.m)
q.i(0,$.fc,$.k)
q.i(0,$.b2,$.L)
q.i(0,$.cH,$.k)
p=$.o
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.u
o=o+n+" to stop "
m=$.M
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.GA
n=[U.b]
q.i(0,new R.a1("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=$.o
q.i(0,new R.a1("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.u+" to stop "+$.M+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.xR(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
p="The "+m+" finds a massive library, filled with books. The "
l=$.u
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.B
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a1("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.fu(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.f9,$.L)
s.i(0,$.cH,$.m)
p=$.o
o="The "+p+"  is approached by a "
l=$.u
s.i(0,new R.a1("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.M+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.u
s.i(0,new R.a1("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.M+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.eB(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
s.i(0,new R.a1("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.u+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fu(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.f9,$.L)
t.i(0,$.cH,$.m)
t.i(0,$.c5,$.L)
t.i(0,$.u7,$.L)
r=$.o
q="The "+r+"  is approached by a "
p=$.u
q=q+p+" who offers them a grant to study "
o=$.aq
t.i(0,new R.a1("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.M+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fu(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.u
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.M
r=r+p+".  It is up to the "
q=$.o
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.aq
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.GG
t.i(0,new R.a1("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.ec(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
t.i(0,new R.a1("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.M+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.u+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,t,null),$.aS)}}
K.bY.prototype={}
L.fS.prototype={
G:function(){var t,s
t=Q.E(null,null,A.Y)
s=A.i("Perfectly Generic Object",H.a([],[G.W]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.z]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d7,$.k)
q.i(0,$.bl,$.L)
q.i(0,$.dP,$.k)
q.i(0,$.c5,$.m)
q.i(0,$.e5,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.B
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cm+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.R("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.X(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j=this.f
j.i(0,new X.G(s,q,null),$.av)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.fa,$.k)
s.i(0,$.en,$.L)
s.i(0,$.ep,$.m)
s.i(0,$.cX,$.k)
s.i(0,$.ci,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.B
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.cm+". The "+p+" has won! "
s.i(0,new R.R("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.X(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j.i(0,new X.G(q,s,null),$.av)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bl,$.L)
t.i(0,$.cf,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.M
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.B
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.cm+". The "+r+" has won! "
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.X(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.vo(),!1,!1,new Y.c7(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
r="The "+l+" learns that all of the local "
m=$.u
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.B
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.cm+". The "+l+" has won! "
t.i(0,new R.R("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.X(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j.i(0,new X.G(s,t,null),$.av)},
D:function(a){return this.Q},
a_:function(a,b,c,d,e){var t=this.Q
this.r=new X.iB("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.il]),H.a([],[M.hf]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.G()
this.H()
t=this.e
if($.$get$kR().V(0,t))H.bb("Duplicate aspect id for "+this.D(0)+": "+t+" is already registered for "+J.cx($.$get$kR().n(0,t))+".")
$.$get$kR().i(0,t,this)},
gK:function(a){return this.Q}}
L.aa.prototype={}
M.kS.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Barbells",H.a([$.an,$.cg,$.D],s),null,!1,"Strength Building Metal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.er,$.c9],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jy,$.Z],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.er,$.c9],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aT,$.a3],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jy,$.Z,$.dq],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.D,$.be],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.x6,$.c9],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.c9,$.b8],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.e6,$.L)
q.i(0,$.bS,$.m)
q.i(0,$.cX,$.L)
p=$.o
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.u
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.M+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.a1("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=$.o
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.u
q.i(0,new R.a1("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.M+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.ec(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
n="The "+m+"  wanders into a bunch of "
p=$.u
q.i(0,new R.a1("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hT(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.e6,$.m)
t.i(0,$.fd,$.m)
t.i(0,$.bS,$.m)
s=$.o
r="The "+s+" finds a team of underdog "
p=$.u
t.i(0,new R.a1("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.xR(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
s="A group of "+p+"s approach the "
r=$.o
s=s+r+". Apparently their sports team lost their coach to the "+$.B+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.M
t.i(0,new R.a1("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.ec(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.u
p="A group of "+k+"s approach the "
r=$.o
t.i(0,new R.a1("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.B+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.aq+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,t,null),$.aS)}}
U.kW.prototype={
R:function(a,b){var t=0,s=P.bd(),r,q,p,o
var $async$R=P.bi(function(c,d){if(c===1)return P.bf(d,s)
while(true)switch(t){case 0:q=$.$get$wm()
p=q.createBufferSource()
o=p
t=3
return P.bQ(J.zj(q,b),$async$R)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$R,s)},
$asdx:function(){return[P.eZ]},
$asc6:function(){return[P.eZ,P.bk]}}
U.nv.prototype={
aX:function(a){return"audio/mpeg"}}
U.o5.prototype={
aX:function(a){return"audio/ogg"}}
U.pn.prototype={
R:function(a,b){var t=0,s=P.bd(),r,q,p
var $async$R=P.bi(function(c,d){if(c===1)return P.bf(d,s)
while(true)switch(t){case 0:q=W.Ag(b)
p=new W.e_(q,"canplaythrough",!1,[W.S])
t=3
return P.bQ(p.gaf(p),$async$R)
case 3:r=q
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$R,s)},
$asiz:function(){return[W.f_]},
$asc6:function(){return[W.f_,P.z]}}
U.po.prototype={}
U.pp.prototype={}
O.kY.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Cod Piece",H.a([$.Q,$.a_,$.ax,$.P,$.Z],s),"God damn it, MI. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.up,$.P,$.bO],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aO,$.Z,$.br,$.P,$.a7],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.Q,$.aO,$.P,$.bn],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cF,$.k)
t.i(0,$.hm,$.k)
t.i(0,$.cA,$.k)
t.i(0,$.dB,$.k)
t.i(0,$.cG,$.k)
t.i(0,$.f8,$.k)
r="After all the bullshit the "+$.B+" has put the native "
q=$.u
r=r+q+"s through, the "
p=$.o
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aX+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.M
m=[U.b]
t.i(0,new R.a8("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.A(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.C)
p=$.u
n="A group of jubilant "+p+"s are following the "
q=$.o
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.M
t.i(0,new R.a8("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.B+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
q=$.o
t.i(0,new R.a8("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.B+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.A(),!1,!1,new Y.ld("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.C)
q="The "+$.B+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.o
q=q+r+" organizes a huge festival for all the "
p=$.u
t.i(0,new R.bC("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
this.x.i(0,new X.G(s,t,null),$.bP)}}
Y.pJ.prototype={
R:function(a,b){var t=0,s=P.bd(),r
var $async$R=P.bi(function(c,d){if(c===1)return P.bf(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$R,s)},
$aseJ:function(){return[P.z]},
$asc6:function(){return[P.z,P.z]}}
Y.ow.prototype={
aX:function(a){return"application/octet-stream"},
R:function(a,b){var t=0,s=P.bd(),r
var $async$R=P.bi(function(c,d){if(c===1)return P.bf(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$R,s)},
$asdx:function(){return[P.bk]},
$asc6:function(){return[P.bk,P.bk]}}
L.l1.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Bear",H.a([$.aT,$.aW,$.H],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Thought",H.a([$.mP,$.xp,$.fk],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Doorway",H.a([$.fk,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cd,$.k)
t.i(0,$.d8,$.m)
t.i(0,$.bS,$.m)
t.i(0,$.ep,$.C)
r=$.o
q="The "+r+" hears a "+$.u+" "+$.M+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.B
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.i(0,new R.R("Revenge on the Denizen",!1,[new U.b(q),new U.b(p),new U.b(n),new U.X(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.b]),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
this.f.i(0,new X.G(s,t,null),$.av)}}
T.l4.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Mystical Vial of Blood",H.a([$.b4,$.br,$.H,$.b0],s),null,!1,"Vial of Not-ABs Oil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.aH,$.br,$.H,$.b9],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.Q,$.br,$.H,$.b0,$.hv],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.bn,$.H,$.b0,$.hv,$.aN],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.Z,$.ux,$.br,$.b0,$.H,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.z]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cP,$.k)
q.i(0,$.ua,$.k)
q.i(0,$.c5,$.m)
p=$.o
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.u
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.aq+" and some boondollars in compensation."
n=this.x2
k=[U.b]
q.i(0,new R.a1("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.ec(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.C)
n=$.u
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.M+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.B
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.o
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cm+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.R("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.X(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cX,$.k)
s.i(0,$.cG,$.L)
s.i(0,$.b2,$.L)
s.i(0,$.iK,$.k)
s.i(0,$.cA,$.L)
p=$.o
o="The "+p+"  and the "
m=$.eD
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.B
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.R("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.X(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.eC(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ay)
h=$.o
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.u
i=i+m+"s explains that before  "
p=$.B
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.cm+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.Gx
s.i(0,new R.R("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.X(l,h,o)],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
o="The "+p+" learns of the "
h=$.aX
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.u
o=o+l+" explains that the "
j=$.B
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.cm+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.R("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.X(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.u
h=h+i+" on "+$.aX+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.ff+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a8("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.fu(),!1,!1,new Y.c7("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.u+" on "
m=$.aX
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.ff+" is now more popular with your friends than you are."
s.i(0,new R.a8("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.vp(),!1,!1,new Y.c7("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
m="The "+p+"  and the "
h=$.eD
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.B
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.R("Pale Shipping Dungeon",!1,[new U.b(m),new U.X(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.t)+".",o)],H.a([],k),R.eC(),!1,!1,new Y.jU(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ay)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bl,$.L)
t.i(0,$.cf,$.m)
r="In the wake of the defeat of the "+$.B+" it becomes really how isolated the individual "
q=$.u
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.o
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.ff+" to kick your ass, but luckily they have several."
t.i(0,new R.a8("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.ec(),!1,!1,new Y.c7("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.o
q="The "+o+" learns that two prominent "
p=$.u
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.B
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.cm+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.M+"ing. "
t.i(0,new R.R("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.X(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.av)}}
T.l6.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Pan's Pipe",H.a([$.a7,$.Z,$.br,$.H],s),null,!1,"Smonkin Weeds Pipe")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.ba,$.H],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a3,$.D,$.br,$.H],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.aI,$.D,$.aT,$.H,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.z]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cf,$.m)
q.i(0,$.fd,$.k)
q.i(0,$.b2,$.m)
p=$.o
o="The "+p+" tries posting a letter through the "
n=$.aq
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.B
o=o+m+" has screwed with the mail system, crippling the "
l=$.u
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cm+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.GB
i=[U.b]
q.i(0,new R.R("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.X(j,p,l)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=this.f
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.bl,$.k)
s.i(0,$.fd,$.m)
s.i(0,$.b2,$.m)
s.i(0,$.bS,$.m)
s.i(0,$.cf,$.m)
p=$.o
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.aq
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.u
k=l+k+" fields. The "+k+"s "+$.M+"ing is so joyful it's literally deafening. "
l=$.B
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.cm+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.R("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.X(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.ci,$.k)
t.i(0,$.m9,$.k)
t.i(0,$.fd,$.L)
t.i(0,$.cf,$.L)
r=$.o
q="The "+r+" is chilling in a "+$.u+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.B
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.aq
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aX+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.cm+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.R("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.X(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,t,null),$.av)}}
M.fZ.prototype={
eV:function(a){var t=this.a
if(!t.V(0,a))return
return t.n(0,a)}}
Y.l8.prototype={
R:function(a,b){var t=0,s=P.bd(),r,q,p,o,n,m,l,k,j,i
var $async$R=P.bi(function(c,d){if(c===1)return P.bf(d,s)
while(true)switch(t){case 0:q=J.e2(b,"\n")
p=P.z
o=P.c0(p,p)
n=P.c0(p,[P.eG,P.z])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.d4(k).bq(k).length===0)m=null
else if(m==null)m=C.c.bq(k)
else{j=C.c.bq(k)
i=C.c.N(m,0,C.c.ew(m,$.$get$wq())+1)+j
o.i(0,i,m)
if(!n.V(0,m))n.i(0,m,P.a2(null,null,null,p))
J.zc(n.n(0,m),i)}}r=new M.fZ(o,n)
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$R,s)},
$aseJ:function(){return[M.fZ]},
$asc6:function(){return[M.fZ,P.z]}}
S.lb.prototype={
G:function(){var t,s
t=Q.E(null,null,A.Y)
s=A.i("A Rock",H.a([$.aW,$.aJ,$.bp,$.H],[G.W]),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Chill","Stone","Cold","Fear"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.m5,$.m)
t.i(0,$.cP,$.k)
r=$.o
q="The "+r+" decides enough is enough, and that they need to fight the "
p=$.B
q=q+p+". They decide to amass an army of consorts to fight it..."
o="The "+r+" figures out that the "
n=$.u
o=o+n+"s are very disinclined to fight, so the "+r+" has to use a bit more force..."
m="The "+r+" has created an army of fearful consorts, it may fall apart during the Denizen fight though..."
l="Now that the "+r+" has amassed an army of "+n+"s, they think it's time to fight the "+p+"..."
n="The "+p+" lies slain, but the "+n+"s still lie under the power of the "+r+"."
t.i(0,new R.R("Make An Army",!1,[new U.b(q),new U.b(o),new U.b(m),new U.X(l,"The "+r+" lies dead, in a surprising twist, the "+p+" takes care of the living members of the consort army.",n)],H.a([],[U.b]),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
this.f.i(0,new X.G(s,t,null),$.av)}}
A.lf.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.O,$.an,$.b9,$.cg],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.O,$.b9],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.b4,$.b9],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aT,$.a3,$.b9],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.aH,$.b9],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.Q,$.b9],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.D,$.b9],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.cz,$.k)
q.i(0,$.bS,$.m)
p=$.o
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.u
o=o+n+"s are too scared to even "+$.M+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.B+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.a1("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.e6,$.L)
s.i(0,$.bS,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.cF,$.k)
o=$.o
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aX
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.u
k=k+j+"s let out a braying "+$.M+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.GE
s.i(0,new R.a1("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.cI,$.L)
t.i(0,$.ce,$.m)
t.i(0,$.cz,$.k)
t.i(0,$.bS,$.m)
t.i(0,$.iE,$.m)
r=$.o
q="The "+r+"  is approached by a Crafty "
o=$.u
q=q+o+" who offers them a magical "
n=$.aq
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.M
t.i(0,new R.a1("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,t,null),$.aS)}}
S.bK.prototype={
D:function(a){return H.y(new H.dX(H.kF(this),null))+": "+this.c},
gK:function(a){return this.c}}
S.im.prototype={}
S.mz.prototype={}
M.ls.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Can of Spray Paint",H.a([$.aM,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.O,$.as,$.b9,$.aL],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.uF,$.D,$.aK],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.O,$.as,$.aL],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.aM,$.az,$.O],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.as,$.O],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.as,$.aP,$.az],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.aM,$.as],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.aI,$.as,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.Q,$.as],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.O,$.as,$.aL],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d8,$.m)
q.i(0,$.cH,$.k)
q.i(0,$.b2,$.m)
p=$.o
o="The "+p+" visits a beautiful "
n=$.aq
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.u
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.B+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.M+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.a1("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.e6,$.L)
s.i(0,$.bS,$.m)
s.i(0,$.cz,$.L)
s.i(0,$.bl,$.m)
s.i(0,$.cF,$.k)
o=$.o
n="The "+o+" finds a troupe of dejected looking "
l=$.u
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aX
l=l+n+" "
k=$.aq
s.i(0,new R.a1("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.M+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.hm,$.L)
t.i(0,$.cA,$.L)
t.i(0,$.f8,$.L)
t.i(0,$.ce,$.L)
t.i(0,$.bl,$.m)
t.i(0,$.b2,$.m)
r=$.o
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.M
q=q+o+"ingworth, "
n=$.u
q=q+n+" heiress to the "+$.aq+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.Gu
t.i(0,new R.a1("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,t,null),$.aS)}}
T.ly.prototype={}
V.lA.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Trendy Fabric",H.a([$.aM,$.Q],s),null,!1,"Weird Tasting Candy Paper")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.aM,$.uu,$.hv],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.D,$.uA,$.aZ],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jx
r=A.i("Broom",H.a([r,$.Z,$.an,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.Z,$.uI,$.an],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.Q,$.b8,$.br,$.aM,$.e8],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.aM,$.Q],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aN,$.cg,$.D,$.bp],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.aM,$.O],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bp],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.D,$.aI,$.an,$.cg,$.ut],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bO],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bO],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.aM,$.bT,$.b7],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.aH,$.bm,$.ba],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.aH,$.bm],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.aM,$.aH,$.b0],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cF,$.m)
q.i(0,$.cG,$.m)
q.i(0,$.cA,$.L)
p=$.o
o="The "+p+" is visited by a Beautiful "
n=$.u
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.aq
l=[U.b]
q.i(0,new R.a1("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.M+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.A(),!1,!1,new Y.ip("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.r
n.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cA,$.k)
s.i(0,$.bS,$.m)
s.i(0,$.f8,$.k)
s.i(0,$.dB,$.m)
s.i(0,$.bl,$.k)
p=$.o
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.aq
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.u
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.M+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.GC
s.i(0,new R.a1("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.el,$.k)
t.i(0,$.bl,$.m)
t.i(0,$.dz,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.iK,$.k)
r=$.o
q="The "+r+" finds a loom, and a Wizened "
p=$.u
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.aq
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.M+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a1("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.aS)}}
U.lB.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aL,$.a3,$.O,$.aO,$.H,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aP,$.br,$.H,$.aO],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.ba,$.br,$.H,$.aO],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.b4,$.H,$.bO],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.b4,$.H,$.bp,$.aO,$.bn,$.bV,$.b5],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aN,$.b5,$.aO,$.O,$.H],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.z]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.dP,$.k)
q.i(0,$.d7,$.m)
q.i(0,$.fd,$.L)
q.i(0,$.bl,$.L)
q.i(0,$.c5,$.m)
p=$.o
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.u
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.aq
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.B
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cm+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.R("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.X(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.dP,$.k)
s.i(0,$.d7,$.m)
s.i(0,$.eq,$.ay)
s.i(0,$.em,$.m)
s.i(0,$.u7,$.m)
s.i(0,$.cP,$.m)
s.i(0,$.d7,$.m)
s.i(0,$.bl,$.L)
s.i(0,$.c5,$.m)
s.i(0,$.dA,$.m)
p=$.o
o="The "+p+" has found a group of Violent "
m=$.u
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aX
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.M+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.B
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.cm+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.R("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.eB(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.aq
p=p+l+"s alike. "
l=$.u+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.B
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.cm+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.R("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.X(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.c5,$.k)
t.i(0,$.wL,$.ay)
t.i(0,$.hj,$.L)
r=$.o
q="The "+r+" finds a small dungeon bearing the image of "
p=$.B
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.u+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.X(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.eB(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
k=$.o
p="The "+k+" learns from one of their "
r=$.u
p=p+r+"s that there is an ancient prophecy of a "
l=$.aX
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.aq
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.B
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.cm+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.Gt
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.X(o,k,q)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.av)}}
Z.lC.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Dream Diary",H.a([$.O,$.aL,$.H],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aP,$.br,$.an,$.H,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aP,$.br,$.H],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.el,$.m)
q.i(0,$.dz,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.iK,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.aq
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.B
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.M+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.xE
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.C)
l=this.f
l.i(0,new X.G(s,q,null),$.av)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.ci,$.m)
s.i(0,$.dz,$.k)
s.i(0,$.d9,$.m)
s.i(0,$.cd,$.m)
s.i(0,$.dM,$.m)
s.i(0,$.cz,$.k)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.M
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.B
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
l.i(0,new X.G(q,s,null),$.av)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.d8,$.k)
t.i(0,$.hi,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.cd,$.k)
t.i(0,$.dM,$.k)
t.i(0,$.dz,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.B
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aX+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.M+"ing in reverse. Another is in a "+$.aq+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
l.i(0,new X.G(s,t,null),$.av)}}
X.iB.prototype={}
X.il.prototype={
$S:function(){return{func:1,v:true,args:[[P.q,M.hf]]}}}
M.hf.prototype={}
U.m3.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Fluthulu Poster",H.a([$.Q,$.b8,$.b5,$.bs],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.Q,$.b8,$.b5],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aN,$.aP,$.ba,$.fl,$.ax],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aP,$.xb,$.es,$.ax],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aP,$.bV,$.bm,$.b5],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aL,$.O,$.aQ,$.b5],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.O,$.a4,$.an],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.O,$.a4,$.an],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.O,$.a4,$.bV,$.b5,$.bs],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aN,$.aJ,$.a4,$.an,$.ax],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aN,$.mS,$.a4,$.an,$.ax],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.hg,$.ay)
q.i(0,$.cG,$.m)
q.i(0,$.cf,$.m)
q.i(0,$.cI,$.L)
p=$.o
o="The "+p+" learns of a Beautiful "
n=$.u
o=o+n+" who has been kidnapped by the vial "
m=$.B
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.aq
j=[U.b]
q.i(0,new R.a1("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.k)
s.i(0,$.cP,$.k)
s.i(0,$.iG,$.m)
s.i(0,$.c5,$.k)
s.i(0,$.eq,$.k)
s.i(0,$.hl,$.m)
o=$.o
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.u
s.i(0,new R.a1("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.ce,$.k)
t.i(0,$.iJ,$.m)
t.i(0,$.c5,$.k)
t.i(0,$.dN,$.m)
t.i(0,$.f9,$.m)
t.i(0,$.ua,$.m)
r=$.o
q="The "+r+" finds a group of three "
o=$.u
q=q+o+"s "
n=$.M
t.i(0,new R.a1("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,t,null),$.aS)}}
N.a5.prototype={
D:function(a){return H.y(new H.dX(H.kF(this),null))+": "+H.y(this.b)}}
O.c6.prototype={
b9:function(a){var t=0,s=P.bd(),r,q=this,p
var $async$b9=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.bQ(q.aZ(a),$async$b9)
case 3:r=p.R(0,c)
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$b9,s)}}
O.md.prototype={
$1:function(a){return"."+H.y(a)},
$S:function(){return{func:1,args:[P.z]}}}
O.me.prototype={
$1:function(a){var t=0,s=P.bd(),r,q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$$1=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)switch(t){case 0:p=q.c
if(J.wc(p).length===0){t=1
break}o=p.files,n=o.length,m=q.a,l=q.b,k=0
case 3:if(!(k<o.length)){t=5
break}j=o[k]
i=0
case 6:if(!(i<1)){t=8
break}h=m[i]
t=9
return P.bQ(h.ca(j),$async$$1)
case 9:g=c
t=g!=null?10:11
break
case 10:f=l
t=12
return P.bQ(h.R(0,g),$async$$1)
case 12:f.$2(c,j.name)
t=8
break
case 11:case 7:++i
t=6
break
case 8:case 4:o.length===n||(0,H.bG)(o),++k
t=3
break
case 5:p.value=null
case 1:return P.bg(r,s)}})
return P.bh($async$$1,s)},
$S:function(){return{func:1,ret:P.c8,args:[W.S]}}}
O.mf.prototype={
$1:function(a){return J.zf(this.a)},
$S:function(){return{func:1,args:[W.S]}}}
O.dx.prototype={
bg:function(a){var t=0,s=P.bd(),r
var $async$bg=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$bg,s)},
cS:function(a){var t=0,s=P.bd(),r,q=this
var $async$cS=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.Ah([J.w6(a)],q.aX(0),null))
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$cS,s)},
aZ:function(a){var t=0,s=P.bd(),r,q=this,p,o
var $async$aZ=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)switch(t){case 0:p=P.bk
o=new P.bq(0,$.aF,null,[p])
W.wT(a,null,q.aX(0),null,null,"arraybuffer",null,null).ba(new O.l2(new P.dZ(o,[p])))
r=o
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$aZ,s)},
$asc6:function(a){return[a,P.bk]}}
O.l2.prototype={
$1:function(a){this.a.aF(0,H.kG(J.zq(a),"$isbk"))},
$S:function(){return{func:1,args:[W.e7]}}}
O.eJ.prototype={
bg:function(a){var t=0,s=P.bd(),r,q,p,o,n
var $async$bg=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)switch(t){case 0:a.toString
q=H.cJ(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hS(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$bg,s)},
ca:function(a){var t=0,s=P.bd(),r,q,p
var $async$ca=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)switch(t){case 0:q=new FileReader()
q.readAsText(a)
p=new W.km(q,"load",!1,[W.GQ])
t=3
return P.bQ(p.gaf(p),$async$ca)
case 3:p=C.x.geJ(q)
if(typeof p==="string"){r=C.x.geJ(q)
t=1
break}t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$ca,s)},
aZ:function(a){var t=0,s=P.bd(),r
var $async$aZ=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)switch(t){case 0:r=W.wS(a,null,null)
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$aZ,s)},
$asc6:function(a){return[a,P.z]}}
O.iz.prototype={
aZ:function(a){var t=0,s=P.bd(),r
var $async$aZ=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$aZ,s)},
bg:function(a){return H.bb("Element format doesn't read from buffers")},
$asc6:function(a){return[a,P.z]}}
V.ml.prototype={
aX:function(a){return"font/opentype"},
R:function(a,b){var t=0,s=P.bd(),r
var $async$R=P.bi(function(c,d){if(c===1)return P.bf(d,s)
while(true)switch(t){case 0:t=3
return P.bQ(A.hG("scripts/Rendering/text/opentype.min.js",!1),$async$R)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$R,s)},
$asdx:function(){return[R.hn]},
$asc6:function(){return[R.hn,P.bk]}}
Z.mn.prototype={
$1:function(a){var t,s
t=$.$get$ho().n(0,a).a
s=this.a
return t==null?s==null:t===s},
$S:function(){return{func:1,args:[P.z]}}}
Z.iA.prototype={}
E.iQ.prototype={}
E.o4.prototype={}
E.I.prototype={
D:function(a){var t="["+J.cx(this.a)+" x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fT.prototype={
D:function(a){var t="[(Random from "+P.uM(this.d,"(",")")+") x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.ik.prototype={
D:function(a){return"[Stats assigned from player Interests x"+H.y(this.b)+"]"}}
Y.ms.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aL,$.P,$.O,$.a_,$.hx],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aP,$.P,$.aO],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.Q,$.P,$.aO],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.jA,$.P,$.aO],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.z]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.mb,$.m)
t.i(0,$.cf,$.k)
t.i(0,$.dA,$.L)
t.i(0,$.dp,$.k)
r=$.u
q="An excited "+r+" runs up to the "
p=$.o
q=q+p+" and starts to "
o=$.M
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aX
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.aq
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.B
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.R("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.X(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
o=$.o
t.i(0,new R.a8("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.B+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.u+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.A(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.C)
o=$.u
j="Now that the "+o+"s are free from the reign of "+$.B+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.o
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.M
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aX+" Quest Online: The "+$.aq+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a8("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
p="The "+$.B+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.o
p=p+o+" shows the "
r=$.u
t.i(0,new R.bC("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.M+"s in time to stop them.    ")],H.a([],i),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
this.x.i(0,new X.G(s,t,null),$.bP)}}
Y.mt.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Sherpa Parka",H.a([$.bp,$.P,$.ck],s),"Clearly the best class uses this.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a_,$.bp,$.aL,$.O,$.P,$.a0],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.D,$.P,$.aT],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.D,$.P,$.a3,$.a0],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.mb,$.k)
t.i(0,$.cf,$.k)
t.i(0,$.dA,$.m)
t.i(0,$.dp,$.k)
r="Now that the "+$.B+" is out of the way, a group of "
q=$.u
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.o
o=[U.b]
t.i(0,new R.a8("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.M+", but they are happy.")],H.a([],o),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
q="The "+$.B+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.o
t.i(0,new R.bC("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.u+" "+$.M+"s in time to stop them.    ")],H.a([],o),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
this.x.i(0,new X.G(s,t,null),$.bP)}}
T.mu.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Doll",H.a([$.jA,$.aM,$.aB,$.H],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.Z,$.aB,$.H,$.a_,$.b5],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.mX,$.H],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.O,$.H,$.aQ],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.az,$.b4,$.H],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.z]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.em,$.L)
q.i(0,$.eo,$.k)
q.i(0,$.bS,$.m)
p=$.o
o="The "+p+", guided by a "+$.u+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.B
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cm+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.R("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.X(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j=$.o
p="The "+j+" finds a Violent "
l=$.u
p=p+l+". A Magical Talking "
k=$.aq
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.B
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.R("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.X(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.vp(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.k)
s.i(0,$.iG,$.k)
s.i(0,$.fd,$.m)
s.i(0,$.c5,$.k)
s.i(0,$.cA,$.m)
s.i(0,$.dA,$.L)
p=$.o
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.aq
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.B
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.cm+". The "+p+" is victorious. "
s.i(0,new R.R("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.X(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j="Now that the "+$.B+" has been defeated, a Copy "
p=$.o
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.u
j=j+k+"s "
l=$.M
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.ff+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a8("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.ec(),!1,!1,new Y.c7("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.B
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.R("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.X(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.eB(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.iF,$.k)
t.i(0,$.cA,$.k)
t.i(0,$.ma,$.k)
t.i(0,$.f8,$.m)
t.i(0,$.hl,$.k)
t.i(0,$.cG,$.m)
t.i(0,$.eo,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.u
t.i(0,new R.R("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.M+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aX+" laws put in place by "+$.B+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
r=$.o
p="The "+r+" finds a weeping Broken Hearted "
q=$.u
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aX
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.M
t.i(0,new R.a8("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hT(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.o
m="The "+q+"  and the "
r=$.eD
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.B
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.R("Flushed Shipping Dungeon",!1,[new U.b(m),new U.X(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.t)+".",n)],H.a([],i),R.eC(),!1,!1,new Y.iO(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ay)
n=$.o
r="The "+n+"  and the "
q=$.eD
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.B
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.R("Pitched Shipping Dungeon",!1,[new U.b(r),new U.X(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.t)+".",m)],H.a([],i),R.eC(),!1,!1,new Y.jW(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ay)
h.i(0,new X.G(s,t,null),$.aS)}}
B.mv.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Family Ashes",H.a([$.aN,$.aI,$.P,$.aO,$.bZ],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a_,$.O,$.P,$.aO,$.mW],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aL,$.P,$.as],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.x1,$.P,$.mO,$.mW],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.um,$.P,$.aK,$.mW],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.ci,$.m)
r=$.B
q="With the death of the "+r+", it now falls to the "
p=$.o
o=[U.b]
t.i(0,new R.a8("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.u+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
r="The "+$.B+" has released the frogs into the "
p=$.o
t.i(0,new R.bC("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
this.x.i(0,new X.G(s,t,null),$.bP)}}
V.mw.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Hippo",H.a([$.aT,$.aW,$.H],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ranting",H.a([$.mP,$.aT,$.fk],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Vent",H.a([$.D,$.uq],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dM,$.L)
t.i(0,$.d8,$.m)
t.i(0,$.m5,$.m)
t.i(0,$.hi,$.m)
r=$.o
q="The "+r+" hears the screaming voice of the "
p=$.B
q=q+p+", and when they walk into a consort village, a "
o=$.u
q=q+o+" "
n=$.M
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.R("Stop the Screamening",!1,[new U.b(q),new U.b(n),new U.b(o),new U.X(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.b]),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
this.f.i(0,new X.G(s,t,null),$.av)}}
X.my.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Wand",H.a([$.Z,$.H,$.a4,$.aW],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.aW,$.bB,$.H,$.b_,$.a7,$.a_,$.a4],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bU,$.ux,$.H,$.a4,$.b9,$.aW],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.aW,$.b_,$.H,$.aI],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aP,$.b_,$.H,$.aW],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.z]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.u6,$.k)
q.i(0,$.cG,$.m)
q.i(0,$.b2,$.k)
q.i(0,$.cd,$.k)
p=$.o
o="The "+p+" is just minding their own business when they see a wizened "
n=$.u
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.M+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.B
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.aq
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.Gw
i=[U.b]
q.i(0,new R.R("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.X(k,p,j)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.k)
s.i(0,$.iE,$.m)
s.i(0,$.d9,$.k)
p=$.o
o="The "+p+"  is approached by a Crafty "
m=$.u
o=o+m+" who offers them a magical "
l=$.aq
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.B
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.R("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.dB,$.L)
t.i(0,$.cH,$.k)
t.i(0,$.cd,$.k)
r=$.o
q="The "+r+" finds a grey town of despondant "
p=$.u
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.B
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.aq
t.i(0,new R.R("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.X("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
r=$.o
o="The "+r+" discovers a group of "
p=$.u
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.B
t.i(0,new R.R("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.X("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hT(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.G(s,t,null),$.av)}}
X.mD.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Footstick",H.a([$.dq,$.P,$.jz,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Cheating Guide",H.a([$.aL,$.P,$.hx,$.O],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of Shogun",H.a([$.Q,$.P,$.e8,$.mV,$.b8],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Macrobots",H.a([$.uH,$.P,$.mO],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cI,$.k)
t.i(0,$.d9,$.k)
t.i(0,$.dz,$.k)
t.i(0,$.dp,$.k)
t.i(0,$.el,$.k)
t.i(0,$.dM,$.k)
t.i(0,$.hk,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.vq(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.C)
r=$.B
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cm+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.M
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xP(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
q=$.o
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.A(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.C)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.B
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ay)
m=$.o
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.B+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ay)
m="A wizened "+$.u+" tells the "
r=$.o
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.A(),!1,!1,new Y.d6("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.xQ(),!1,!1,new Y.c7("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a8("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.B
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bC("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
this.x.i(0,new X.G(s,t,null),$.av)}}
Q.mE.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Yardstick",H.a([$.dq,$.P,$.jz,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURB Hacking Guide",H.a([$.aL,$.P,$.hx,$.O],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Body Pillow of Hussie",H.a([$.Q,$.P,$.e8,$.mV,$.b8],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.mH.prototype={
b9:function(a){var t=0,s=P.bd(),r,q,p
var $async$b9=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)switch(t){case 0:q=W.wU(null,a,null)
p=new W.e_(q,"load",!1,[W.S])
t=3
return P.bQ(p.gaf(p),$async$b9)
case 3:r=q
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$b9,s)},
$asdx:function(){return[W.fi]},
$asc6:function(){return[W.fi,P.bk]}}
Q.ol.prototype={
aX:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bd(),r,q=this,p,o,n
var $async$R=P.bi(function(c,d){if(c===1)return P.bf(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.bQ(q.cS(b),$async$R)
case 3:p=n.wU(null,d,null)
o=new W.e_(p,"load",!1,[W.S])
t=4
return P.bQ(o.gaf(o),$async$R)
case 4:r=p
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$R,s)}}
Q.oi.prototype={
aX:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bd()
var $async$R=P.bi(function(c,d){if(c===1)return P.bf(d,s)
while(true)switch(t){case 0:throw H.l("Read NYI")
return P.bg(null,s)}})
return P.bh($async$R,s)},
$asdx:function(){return[Q.jV]},
$asc6:function(){return[Q.jV,P.bk]}}
B.ht.prototype={
G:function(){var t,s
t=Q.E(null,null,A.Y)
s=A.i("Perfectly Generic Object",H.a([],[G.W]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d7,$.k)
q.i(0,$.bl,$.L)
q.i(0,$.dP,$.k)
q.i(0,$.c5,$.m)
q.i(0,$.e5,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.c7(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
n=this.r
n.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.fa,$.k)
s.i(0,$.en,$.L)
s.i(0,$.ep,$.m)
s.i(0,$.cX,$.k)
s.i(0,$.ci,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.c7(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bl,$.L)
t.i(0,$.cf,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
t.i(0,new R.a1("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.c7(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
r="The "+p+" learns that all of the local "
q=$.u
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.M
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.vo(),!1,!1,new Y.c7(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
n.i(0,new X.G(s,t,null),$.aS)},
D:function(a){return this.ch},
gK:function(a){return this.ch}}
A.Y.prototype={
aE:function(a,b){var t=b.gbI()-this.gbI()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bJ(t)},
ghD:function(){var t,s,r,q,p,o
t=H.a([],[P.z])
s=new A.eE(null,null)
s.bs(this.f.a)
if(this.r===0)return t
r=P.db(G.Ao(this.f),!0,G.W)
C.b.dj(r,new A.n2())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bG)(r),++p){o=r[p]
if(!(o instanceof G.au||o.gei().length===0))t.push(" "+Y.Iw(s.eF(o.gei())))}return t},
gbI:function(){var t,s,r
for(t=this.f,s=new P.d3(t,t.r,null,null,[null]),s.c=t.e,r=0;s.I();)r+=s.d.gbI()
return r},
ghs:function(){var t=this.f
return new H.ef(t,new A.n1(),[H.N(t,0)])},
ghN:function(){var t,s,r,q,p
for(t=this.ghD(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bG)(t),++q)r+=t[q]+" "
return r+this.d},
D:function(a){return this.ghN()},
O:function(a,b,c,d,e){var t,s,r
t=P.jG(b,null)
this.f=t
if(t.a===0)t.h(0,$.fk)
s=P.jG(this.ghs(),null)
for(t=new P.d3(s,s.r,null,null,[null]),t.c=s.e;t.I();){r=t.d
this.f.at(0,r.gf8())
this.f.an(0,r)}$.$get$xv().push(this)},
$isbJ:1,
$asbJ:function(){return[A.Y]}}
A.n2.prototype={
$2:function(a,b){return a.geC()-C.a.bJ(b.geC())},
$S:function(){return{func:1,args:[G.W,G.W]}}}
A.n1.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.W]}}}
Z.n9.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Juice Box",H.a([$.O,$.H,$.aW,$.ax],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shogun Body Pillow",H.a([$.e8,$.b8,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dM,$.ay)
t.i(0,$.cG,$.m)
t.i(0,$.bS,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.cd,$.k)
r=$.o
q="The "+r+" sees a floating sentient "
p=$.aq
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.u+" notices it, and starts "+$.M+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.B
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.b]
t.i(0,new R.R("Talk to your Juice entity",!1,[new U.b(q),new U.b(o),new U.b(n),new U.X(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
r="The "+p+" is greeted by a young adolescent "
m=$.u
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.B
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.M
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.R("Be The Wingman",!1,[new U.b(r),new U.b(l),new U.b(n),new U.X(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j=$.o
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.u
m=m+q+" informs them that "
p=$.B
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.R("Pilot The Mech",!1,[new U.b(m),new U.b(o),new U.b(n),new U.X(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
this.f.i(0,new X.G(s,t,null),$.av)}}
N.na.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Gavel",H.a([$.Z,$.uv],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aP,$.bn],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.Q,$.aM],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.O,$.aL],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bT,$.aH,$.bp],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.O,$.aL,$.az],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aN,$.D,$.bn],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.hg,$.L)
q.i(0,$.ce,$.m)
q.i(0,$.cH,$.L)
p=$.o
o="The "+p+" finds an elaborate courtroom full of "+$.M+"ing "
n=$.u
m=[U.b]
q.i(0,new R.a1("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.aq+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
n=this.r
n.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.k)
s.i(0,$.dA,$.m)
s.i(0,$.cX,$.m)
p=$.o
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.u
l=o+l+" yells 'Stop that thief' in betwen "+$.M+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.aq+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.Gs
s.i(0,new R.a1("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.ce,$.k)
t.i(0,$.ci,$.m)
t.i(0,$.cP,$.L)
t.i(0,$.eq,$.m)
t.i(0,$.em,$.m)
t.i(0,$.fb,$.m)
t.i(0,$.iH,$.m)
r=$.o
q="The "+r+" finds a crowd of "
p=$.M
q=q+p+"ing "
o=$.u
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.GF
t.i(0,new R.a1("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.aS)}}
S.nc.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Shining Armor",H.a([$.aN,$.mZ,$.P,$.fl],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a_,$.mZ,$.P,$.aZ,$.aK,$.es],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.D,$.P,$.bm,$.aB],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aN,$.fl,$.P,$.mZ],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.m8,$.k)
t.i(0,$.dO,$.k)
t.i(0,$.e6,$.k)
t.i(0,$.fb,$.k)
t.i(0,$.hg,$.m)
r="The "+$.B+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.o
p=[U.b]
t.i(0,new R.bC("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
q=$.B
r="Now that the "+q+" is defeated, the "
o=$.u
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.o
t.i(0,new R.a8("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
o=$.aX
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.B
n=n+q+". A Learned "+$.u+" explains that it can only be defeated by the Legendary "
r=$.aq
n=n+r+" Blade. The "
m=$.o
t.i(0,new R.a8("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
r="The volcanos of the land are weirdly active after the defeat of the "+$.B+". One begins to erupt near a "
m=$.u
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.M+"s, but not really doing anything to evacuate or save anyone. The "
o=$.o
t.i(0,new R.a8("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
Q.nf.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Dream Diary",H.a([$.O,$.aL,$.H],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aP,$.br,$.an,$.H,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aP,$.br,$.H],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.el,$.m)
q.i(0,$.dz,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.iK,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.aq
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.B
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.M+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.xE
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.C)
l=this.f
l.i(0,new X.G(s,q,null),$.av)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.ci,$.m)
s.i(0,$.dz,$.k)
s.i(0,$.d9,$.m)
s.i(0,$.cd,$.m)
s.i(0,$.dM,$.m)
s.i(0,$.cz,$.k)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.M
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.B
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
l.i(0,new X.G(q,s,null),$.av)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.d8,$.k)
t.i(0,$.hi,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.cd,$.k)
t.i(0,$.dM,$.k)
t.i(0,$.dz,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.B
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aX+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.M+"ing in reverse. Another is in a "+$.aq+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
l.i(0,new X.G(s,t,null),$.av)}}
K.nh.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Creeping Vine",H.a([$.Z,$.H,$.b7,$.aB],s),null,!1,"Sentient Plant Tentacles")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.up,$.H,$.b0],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aN,$.aJ,$.H,$.aB],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bZ,$.H,$.b0],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.b4,$.H,$.b0,$.a_,$.a4],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bm,$.H,$.aB],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.z]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cf,$.k)
q.i(0,$.bl,$.k)
q.i(0,$.hh,$.L)
q.i(0,$.b2,$.m)
q.i(0,$.mb,$.m)
q.i(0,$.cI,$.L)
p=$.o
o="The "+p+" finds a village of compliant "
n=$.u
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.M+"ing in panic. Don't upset "
m=$.B
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.R("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.X(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cf,$.k)
s.i(0,$.cA,$.k)
s.i(0,$.cI,$.L)
s.i(0,$.b2,$.m)
o=$.o
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.u
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.B
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.R("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.X(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.d7,$.k)
t.i(0,$.bl,$.L)
t.i(0,$.dP,$.k)
t.i(0,$.c5,$.m)
t.i(0,$.e5,$.m)
t.i(0,$.iC,$.m)
r="Drawn by wailing and "+$.M+"ing, the "
q=$.o
r=r+q+" enters a rotting "
o=$.u
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.B
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.R("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.X(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.av)}}
G.ni.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("FAQ",H.a([$.a3,$.H,$.a0,$.bF],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aP,$.H,$.b_,$.a3,$.bF],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.H,$.b_,$.bF,$.a_,$.mS],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.uw,$.H,$.an],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.uE,$.H],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b7,$.H,$.b_,$.bF],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.b4,$.H,$.aB],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.z]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.iI,$.k)
q.i(0,$.el,$.m)
q.i(0,$.dN,$.k)
q.i(0,$.eo,$.k)
p=$.o
o="The "+p+" is searching for the lair of "
n=$.B
o=o+n+" when some local "
m=$.u
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.R("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.X(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m=$.o
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.M+"ing "+$.u+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.B
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.R("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.X(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m=this.f
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cf,$.m)
s.i(0,$.b2,$.m)
s.i(0,$.dB,$.k)
s.i(0,$.m6,$.k)
s.i(0,$.en,$.k)
s.i(0,$.iE,$.k)
p=$.o
o="The "+p+" walks into a "
n=$.u
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.aq
o=o+l+", but "
k=$.B
o=o+k+" has hoarded all of the planets "
j=$.aX
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.M+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.R("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.X(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.vp(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.u
j=j+k+" explains that the "
h=$.B
s.i(0,new R.R("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.M+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.X("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.hj,$.m)
q.i(0,$.bl,$.m)
q.i(0,$.fc,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.cH,$.k)
p="Now that the "+$.B+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
p=p+o+" sets up a wiki and settles in to help the "
n=$.u
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.ff+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a8("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.ec(),!1,!1,new Y.c7("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.B+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.u
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.ff+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a8("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.eB(),!1,!1,new Y.c7("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.o
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.B
q.i(0,new R.R("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.X(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.dN,$.k)
t.i(0,$.iI,$.k)
t.i(0,$.eo,$.m)
t.i(0,$.cG,$.m)
t.i(0,$.u9,$.m)
t.i(0,$.c5,$.L)
t.i(0,$.e6,$.L)
t.i(0,$.bS,$.m)
t.i(0,$.cz,$.L)
t.i(0,$.bl,$.m)
t.i(0,$.cF,$.k)
s=$.o
r="The "+s+" is approached by a Fast Talking "
p=$.u
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.aq
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.M+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.B
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.R("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.X(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
o="After the "+$.B+", the "
s=$.o
o=o+s+" is disappointed to learn that barely any of the "
l=$.u
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.ff+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a8("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.ec(),!1,!1,new Y.c7("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,t,null),$.av)}}
Z.nu.prototype={
G:function(){var t,s,r,q
t=this.F
s=[G.W]
r=A.i("Dream Bubbles Book",H.a([$.O,$.as,$.aL,$.x4],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.N(t,0)]))
t=Q.E(null,null,A.Y)
r=A.i("Uno Reverse Card",H.a([$.mQ,$.jz,$.as],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.Q,$.P,$.as],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.hx,$.P,$.as],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a_,$.O,$.P,$.bt,$.aL],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cP,$.L)
q.i(0,$.eq,$.L)
q.i(0,$.c5,$.L)
q.i(0,$.cX,$.m)
p="The "+$.B+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.o
p=p+o+" comands that the "
n=$.u
m=[U.b]
q.i(0,new R.bC("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.M+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
o="As soon as the "+$.B+" is defeated, the "
n=$.u
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.o
q.i(0,new R.a8("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p=this.x
p.i(0,new X.G(s,q,null),$.bP)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.wH,$.k)
t.i(0,$.cd,$.k)
t.i(0,$.bl,$.k)
t.i(0,$.b2,$.m)
s="The "+$.B+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.o
s=s+r+" comands that the "
o=$.u
t.i(0,new R.bC("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.M+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
r="As soon as the "+$.B+" is defeated, the "
o=$.u
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.o
t.i(0,new R.a8("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",this.F,"Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,t,null),$.bP)}}
S.nw.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Alternate Costume",H.a([$.Q,$.P,$.a4,$.a_,$.aA],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.Q,$.P,$.a4],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.Z,$.P,$.an,$.a4,$.dq],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jx,$.Z,$.P,$.aB,$.a4,$.dq],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.z]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.f9,$.k)
t.i(0,$.fb,$.m)
t.i(0,$.ci,$.k)
t.i(0,$.ep,$.m)
t.i(0,$.d7,$.L)
r="The "+$.B+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.o
p=[U.b]
t.i(0,new R.bC("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
q=$.o
t.i(0,new R.a8("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.A(),!1,!1,new Y.d6("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
q=$.o
r="The "+q+" is feeling quite pleased with their victory over the "+$.B+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aX
t.i(0,new R.a8("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.A(),!1,!1,new Y.c7(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
q="Now that the "+$.B+" has been defeated, the "
o=$.u
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.o
q=q+r+"'s help in planning the brand new city of "
n=$.aX
t.i(0,new R.a8("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.M+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.A(),!1,!1,new Y.c7(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
U.nx.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Maiden's Breath",H.a([$.b7,$.P,$.aM],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.Z,$.P,$.dq,$.bB],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.aM,$.aN,$.D,$.P,$.a_,$.fl,$.wX],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.O,$.P,$.a7,$.aL],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.z]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dp,$.k)
t.i(0,$.cf,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.bl,$.m)
t.i(0,$.dB,$.m)
t.i(0,$.cz,$.m)
r="The "+$.B+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.o
r=r+q+" asks local  "
p=$.u
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bC("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
q=$.o
o="The "+q+" has adopted a local "
p=$.u
t.i(0,new R.a8("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.M+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.B+". ")],H.a([],n),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
D.nD.prototype={
G:function(){var t,s
t=Q.E(null,null,A.Y)
s=A.i("memes",H.a([$.aW,$.un,$.x3,$.uq],[G.W]),"No. Just no.",!1,";)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Memes"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.iI,$.k)
r=$.o
q="The "+r+" decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."
p="The "+r+" finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant "+$.u+"-looking dragon. They notice that it's chained up, so The "+r+" decides to free it, and it brings them to the top of the tallest tower in the castle. "
o="The dragon leads The "+r+" to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The "+r+" unveils it, they see a sleeping consort, The "+r+" yeets it out the window, and rides the Dragon towards the "
n=$.B
o=o+n+". "
m="The "+r+" rides up to the "+n+"'s lair, and they challenge it to a battle. "
l="The "+r+" wins, with the added help of the Dragon, there was no chance they would lose. "
t.i(0,new R.R("Become Shrek",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(m,"Even with the added help of the Dragon, The "+r+" wasn't enough to defeat the "+n,l)],H.a([],[U.b]),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
this.f.i(0,new X.G(s,t,null),$.av)}}
V.nJ.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Puzzle Box",H.a([$.Z,$.H,$.a4],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a3,$.H,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.H],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.H,$.a3,$.a0],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aN,$.hu,$.aJ,$.as,$.H,$.a_,$.a3],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cd,$.m)
q.i(0,$.el,$.L)
q.i(0,$.cH,$.L)
p=$.o
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.u
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.B
k=[U.b]
q.i(0,new R.R("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.X(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fu(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.u+" explains that at the end of the Labrinth is the "
l=$.B
q.i(0,new R.R("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.X("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.hg,$.L)
s.i(0,$.ce,$.m)
s.i(0,$.cH,$.L)
s.i(0,$.cd,$.L)
p=$.B
o="The "+p+" has commited a staggering amount of crimes against the local "+$.u+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.o
s.i(0,new R.R("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.X("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.iJ,$.k)
t.i(0,$.bl,$.m)
t.i(0,$.fc,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.cH,$.k)
r=$.o
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.B
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.aq+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.R("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.av)}}
E.nL.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Feather Pen",H.a([$.D,$.P,$.as,$.bB],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.xh,$.P,$.hu,$.an,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.O,$.P,$.as,$.aL],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dp,$.k)
t.i(0,$.cf,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.bl,$.m)
t.i(0,$.dB,$.m)
t.i(0,$.cz,$.m)
r="The "+$.B+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.o
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bC("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.B+" the "
o=$.u
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.o
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.aq
t.i(0,new R.a8("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
F.nM.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Piano",H.a([$.an,$.Z,$.a7,$.as],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.D,$.a7],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aT,$.a3],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.Z,$.a7],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.O,$.a7],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aP,$.a7,$.a3,$.aT,$.az],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aP,$.a7,$.a3,$.az],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.Z,$.a7],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cG,$.ay)
q.i(0,$.u9,$.k)
q.i(0,$.eo,$.k)
q.i(0,$.dB,$.m)
q.i(0,$.b2,$.m)
q.i(0,$.m4,$.m)
p=$.o
o="The "+p+" meets a wise old "+$.u+" who tells that the "+$.B+" can only be awoken by the Legendary Hero playing the "
n=$.aX
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.aq
k=[U.b]
q.i(0,new R.a1("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
n="The "+p+" finds an empty, trashed "
l=$.aX
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.aq+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.M+"ing "+$.u+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.Gy
q.i(0,new R.a1("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.uc,$.ay)
s.i(0,$.dA,$.m)
s.i(0,$.cX,$.m)
s.i(0,$.dB,$.k)
s.i(0,$.m4,$.ay)
o=$.o
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aX
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.B
s.i(0,new R.a1("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.aq+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.hh,$.ay)
t.i(0,$.bS,$.m)
t.i(0,$.dP,$.m)
r=$.o
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.u
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.M
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aX+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.a1("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,t,null),$.aS)}}
Y.o0.prototype={
R:function(a,b){var t=0,s=P.bd(),r,q=this,p,o
var $async$R=P.bi(function(c,d){if(c===1)return P.bf(d,s)
while(true)switch(t){case 0:t=3
return P.bQ(A.hG("scripts/Rendering/threed/three.min.js",!1),$async$R)
case 3:t=4
return P.bQ(Q.oL(),$async$R)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.aG(p)
o.f5(p,P.xy(["",$.$get$ww()],P.z,S.hJ))
o.f4(p,!1)
q.b=p}J.wj(p,b)
r=J.wj(q.b,b)
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$R,s)},
$aseJ:function(){return[S.fr]},
$asc6:function(){return[S.fr,P.z]}}
V.oa.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Shorts",H.a([$.Q,$.P,$.fj,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aP,$.P,$.az],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.aH,$.P,$.a4],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.z]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.m8,$.k)
t.i(0,$.cI,$.m)
t.i(0,$.hm,$.m)
t.i(0,$.ma,$.m)
t.i(0,$.dp,$.m)
t.i(0,$.bl,$.m)
t.i(0,$.e5,$.m)
t.i(0,$.en,$.m)
t.i(0,$.ud,$.m)
t.i(0,$.iC,$.m)
t.i(0,$.m6,$.m)
r="The "+$.B+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.o
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bC("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
q=$.o
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.u+" named Professor "
p=$.M
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.aq
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.B
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.R("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.X(k,"The "+q+" whited out...",m)],H.a([],n),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
m="Now that the "+$.B+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.o
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.u
t.i(0,new R.a8("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aX+" buffs. With a deafening "+$.M+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.A(),!1,!1,new Y.ip("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
G.on.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Superhero Action Figure",H.a([$.aP,$.az,$.ax],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aP,$.az],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aP,$.bZ],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aP,$.b9,$.bp,$.ck],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aP,$.az],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.O,$.az],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.b7,$.az,$.Q,$.aB],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.b7,$.b1,$.az,$.Q],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.ax,$.D,$.az,$.es,$.aK,$.bU],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.O,$.az],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.O,$.az],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.m)
q.i(0,$.cF,$.m)
q.i(0,$.bS,$.k)
q.i(0,$.cI,$.ay)
q.i(0,$.d9,$.ay)
p=$.o
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.u
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aX+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.M+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.Gz
l=[U.b]
q.i(0,new R.a1("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.em,$.m)
s.i(0,$.dA,$.m)
s.i(0,$.cF,$.m)
s.i(0,$.bS,$.m)
s.i(0,$.dO,$.k)
o=$.o
n="The "+o+" runs towards an explosion in a local "
m=$.u
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aX
s.i(0,new R.a1("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.cF,$.m)
t.i(0,$.dN,$.k)
t.i(0,$.cA,$.k)
t.i(0,$.dO,$.m)
r=$.o
q="The "+r+" gets a job at the "+$.aX+" Cinema. A new movie, The Lonely "
o=$.aq
q=q+o+" is coming out soon, and "
n=$.u
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.M+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a1("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,t,null),$.aS)}}
N.os.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Feather'd Cap",H.a([$.Q,$.P,$.fj],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a_,$.uu,$.P,$.fj],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bu,$.P],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.z]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cF,$.m)
t.i(0,$.cd,$.m)
t.i(0,$.dP,$.L)
r="With the closing of the curtain, the "+$.B+" has released the frogs, and yet they are nowhere to be found. The "
q=$.o
p=[U.b]
t.i(0,new R.bC("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
q=$.B
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.o
r=r+o+" to get it back to normal. They organize a team of "
n=$.u
t.i(0,new R.a8("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.aq+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
U.b.prototype={}
U.X.prototype={}
R.ou.prototype={
D:function(a){return H.y(new H.dX(H.kF(this),null))+": "+this.c},
gK:function(a){return this.c}}
R.a1.prototype={}
R.R.prototype={}
R.a8.prototype={}
R.bC.prototype={}
E.ov.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Curtain",H.a([$.Q,$.H,$.ax],s),null,!1,"Show Ender")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.es,$.aZ,$.H,$.aK,$.b5,$.ax,$.bs,$.aO],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.D,$.aT,$.a3,$.H,$.ax],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aN,$.D,$.aT,$.bt,$.c9,$.H,$.ax],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.aH,$.bt,$.as,$.H,$.a_,$.ax],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.Z,$.H,$.b5,$.aI,$.bu,$.ax],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.z]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.iD,$.k)
q.i(0,$.cP,$.k)
q.i(0,$.dA,$.k)
q.i(0,$.d7,$.m)
q.i(0,$.c5,$.m)
q.i(0,$.ci,$.m)
q.i(0,$.ce,$.L)
q.i(0,$.d9,$.m)
q.i(0,$.em,$.k)
q.i(0,$.iH,$.k)
q.i(0,$.fb,$.k)
q.i(0,$.m9,$.k)
q.i(0,$.hh,$.m)
q.i(0,$.eq,$.k)
p=$.o
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.aq
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.B
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hT(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.B
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.dB,$.k)
s.i(0,$.c5,$.m)
s.i(0,$.ce,$.k)
s.i(0,$.cG,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.cF,$.m)
s.i(0,$.iG,$.L)
s.i(0,$.cP,$.m)
s.i(0,$.cI,$.k)
s.i(0,$.bS,$.k)
s.i(0,$.d9,$.L)
p=$.M
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aX
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.B
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.iD,$.k)
t.i(0,$.d9,$.k)
t.i(0,$.ce,$.k)
t.i(0,$.cI,$.m)
t.i(0,$.cz,$.k)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.B+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h.i(0,new X.G(s,t,null),$.av)}}
Y.dS.prototype={}
Y.ar.prototype={}
Y.d6.prototype={}
Y.c7.prototype={
gK:function(a){return this.c}}
Y.T.prototype={}
Y.ip.prototype={}
Y.bE.prototype={}
Y.d_.prototype={}
Y.ld.prototype={}
Y.bz.prototype={}
Y.jU.prototype={}
Y.iO.prototype={}
Y.jW.prototype={}
N.oB.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Domino Mask",H.a([$.Q,$.P,$.fj],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.uo,$.P,$.fj,$.ul],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a_,$.aP,$.a3,$.P,$.a0,$.aA],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.z]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.ce,$.k)
t.i(0,$.ci,$.m)
t.i(0,$.dO,$.m)
r="The "+$.B+" cannot release the frogs since the corrupt Noble "
q=$.u
r=r+q+"s have hoarded them. The "
p=$.o
o=[U.b]
t.i(0,new R.bC("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
p=$.o
q="The "+p+" learns of the extreme injustices of the "
r=$.u
q=q+r+"s who rose to power during the tyranny of "
n=$.B
t.i(0,new R.a8("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
Q.oC.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Red Rose",H.a([$.aQ,$.aM],s),null,!1,"Seductive Plant")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aQ,$.O],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aQ,$.aH],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aQ,$.aI],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aQ,$.bu,$.D,$.b1],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aL,$.O,$.aQ],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.k)
q.i(0,$.hm,$.m)
q.i(0,$.f8,$.m)
q.i(0,$.hl,$.k)
q.i(0,$.cG,$.m)
q.i(0,$.iF,$.L)
p=$.o
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.u
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.aq+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.a1("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cG,$.m)
s.i(0,$.dN,$.k)
s.i(0,$.hl,$.k)
s.i(0,$.cA,$.m)
s.i(0,$.eo,$.L)
s.i(0,$.iF,$.L)
o=$.u
n="A Romantic "+o+" approaches the "
m=$.o
s.i(0,new R.a1("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.iF,$.k)
t.i(0,$.cA,$.k)
t.i(0,$.f8,$.m)
t.i(0,$.ma,$.k)
t.i(0,$.hl,$.k)
t.i(0,$.cG,$.m)
t.i(0,$.eo,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.u
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.M+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.B+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.Gv
t.i(0,new R.a1("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.C)
n=$.o
r="The "+n+"  and the "
o=$.eD
t.i(0,new R.a1("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.eC(),!1,!1,new Y.iO(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ay)
o=$.o
n="The "+o+"  and the "
r=$.eD
t.i(0,new R.a1("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.eC(),!1,!1,new Y.jU(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ay)
r=$.o
o="The "+r+"  and the "
n=$.eD
t.i(0,new R.a1("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.eC(),!1,!1,new Y.jW(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ay)
p.i(0,new X.G(s,t,null),$.aS)}}
V.oD.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Arrow",H.a([$.aZ,$.Z,$.ul],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bow",H.a([$.Z,$.an,$.fk],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yondu",H.a([$.ax,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Empathy",H.a([$.H,$.un,$.ax],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.b2,$.m)
t.i(0,$.d8,$.L)
t.i(0,$.bS,$.m)
t.i(0,$.cd,$.L)
r=$.o
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.B
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.R("Be the Yondu",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.b]),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
this.f.i(0,new X.G(s,t,null),$.av)}}
T.hV.prototype={
G:function(){var t,s
t=Q.E(null,null,A.Y)
s=A.i("Perfectly Generic Object",H.a([],[G.W]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d7,$.k)
q.i(0,$.bl,$.L)
q.i(0,$.dP,$.k)
q.i(0,$.c5,$.m)
q.i(0,$.e5,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a8("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
n=this.x
n.i(0,new X.G(s,q,null),$.bP)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.fa,$.k)
s.i(0,$.en,$.L)
s.i(0,$.ep,$.m)
s.i(0,$.cX,$.k)
s.i(0,$.ci,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a8("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p=$.o
l="The "+p+" learns that all of the local "
o=$.u
s.i(0,new R.a8("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.eD+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.M+"ing in amazement. The factory is saved! ")],H.a([],m),R.eC(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.ay)
n.i(0,new X.G(q,s,null),$.bP)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bl,$.L)
t.i(0,$.cf,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.M
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.vo(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
p="The "+l+" learns that all of the local "
r=$.u
t.i(0,new R.a8("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
n.i(0,new X.G(s,t,null),$.bP)},
D:function(a){return this.r},
a3:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.iB("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.il]),H.a([],[M.hf]))
this.G()
this.H()
t=this.Q
if($.$get$oF().V(0,t))H.bb("Duplicate class id for "+this.D(0)+": "+t+" is already registered for "+J.cx($.$get$oF().n(0,t))+".")
$.$get$oF().i(0,t,this)},
gK:function(a){return this.r}}
E.oG.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Sage's Robe",H.a([$.Q,$.P,$.b8,$.a0,$.a4,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.O,$.P,$.aL,$.a0],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.Q,$.P,$.e8,$.a0],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.hj,$.m)
t.i(0,$.bl,$.m)
t.i(0,$.fc,$.k)
t.i(0,$.b2,$.L)
t.i(0,$.cH,$.k)
r="The "+$.B+" has blocked access to the books for the duration. The "
q=$.o
p=[U.b]
t.i(0,new R.bC("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
q="Now that the "+$.B+" is defeated, it is time to begin recovery efforts. The "
r=$.u
q=q+r+"s ask the "
o=$.o
t.i(0,new R.a8("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.M+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
Y.oH.prototype={}
K.oI.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Uno Reverse Card",H.a([$.mQ,$.H,$.ax],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.e8,$.b8,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.z]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.iD,$.k)
q.i(0,$.cP,$.k)
q.i(0,$.dA,$.k)
q.i(0,$.d7,$.m)
q.i(0,$.c5,$.m)
q.i(0,$.ci,$.m)
q.i(0,$.ce,$.L)
q.i(0,$.d9,$.m)
q.i(0,$.em,$.k)
q.i(0,$.iH,$.k)
q.i(0,$.fb,$.k)
q.i(0,$.m9,$.k)
q.i(0,$.hh,$.m)
q.i(0,$.eq,$.k)
p=$.o
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.aq
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.B
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hT(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.B
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.dB,$.k)
s.i(0,$.c5,$.m)
s.i(0,$.ce,$.k)
s.i(0,$.cG,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.cF,$.m)
s.i(0,$.iG,$.L)
s.i(0,$.cP,$.m)
s.i(0,$.cI,$.k)
s.i(0,$.bS,$.k)
s.i(0,$.d9,$.L)
p=$.M
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aX
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.B
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.iD,$.k)
t.i(0,$.d9,$.k)
t.i(0,$.ce,$.k)
t.i(0,$.cI,$.m)
t.i(0,$.cz,$.k)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.B+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
h.i(0,new X.G(s,t,null),$.av)}}
Y.oJ.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Walking Stick",H.a([$.Z,$.P,$.dq],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.Q,$.P,$.x5,$.a0,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.O,$.P,$.a0],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.P,$.a0,$.a4],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p
t=[P.z]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dp,$.k)
t.i(0,$.cf,$.k)
t.i(0,$.bl,$.k)
t.i(0,$.bS,$.L)
t.i(0,$.b2,$.L)
r="Now that the "+$.B+" has been defeated, the planet has really opened up. The "
q=$.o
p=[U.b]
t.i(0,new R.a8("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.u+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
q="The "+$.B+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.o
t.i(0,new R.bC("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.u+" "+$.M+"s in time to stop them.   ")],H.a([],p),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
this.x.i(0,new X.G(s,t,null),$.bP)}}
L.oK.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Scroll",H.a([$.O,$.P,$.a0],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.b4,$.P,$.aA,$.a0],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.O,$.P,$.aL,$.a0,$.aA,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.m4,$.k)
t.i(0,$.bl,$.k)
t.i(0,$.cH,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.cd,$.m)
r="The "+$.B+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.o
p=[U.b]
t.i(0,new R.bC("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
q="Now that the "+$.B+" has been taken care of, the "
r=$.o
q=q+r+" discovers a large library of "
o=$.u
t.i(0,new R.a8("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
S.oM.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Cueball",H.a([$.er,$.jA,$.P,$.an,$.aB,$.a_],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.er,$.x2,$.P,$.b_],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.b4,$.P,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.wZ,$.P,$.b8],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.wI,$.k)
t.i(0,$.hi,$.k)
t.i(0,$.m5,$.k)
t.i(0,$.cI,$.m)
r="Now that the "+$.B+" has been defeated, the land is really starting to open up. The "
q=$.o
r=r+q+" finds a tunnel filled with Blind "
p=$.u
o=[U.b]
t.i(0,new R.a8("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.A(),!1,!1,new Y.d6("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
q="The "+$.B+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.o
t.i(0,new R.bC("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
p=$.o
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.u
t.i(0,new R.a8("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.A(),!1,!1,new Y.d6("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
r="A group of underlings are still making trouble, even after the defeat of the "+$.B+". The "
p=$.o
r=r+p+" begins planting rumors of a huge "
q=$.aq
t.i(0,new R.a8("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.A(),!1,!1,new Y.d6("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
T.ca.prototype={}
Y.oT.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Meddler's Guide",H.a([$.aL,$.P,$.O,$.bt,$.a_,$.b0],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b4,$.P,$.b0],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.br],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a4,$.P,$.b_,$.aM,$.O],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.bl,$.m)
t.i(0,$.dp,$.k)
t.i(0,$.cI,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.cf,$.k)
r="The defeat of the "+$.B+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.o
p=[U.b]
t.i(0,new R.bC("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
q="Now that the "+$.B+" has been taken care of, the "
r=$.o
q=q+r+" finds a long line of "
o=$.u
t.i(0,new R.a8("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
N.oU.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Fiduspawn Plush",H.a([$.ck,$.Q,$.b8],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ck,$.Q,$.b8],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dice",H.a([$.us,$.aP],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pigeon",H.a([$.bB,$.aB,$.bm,$.ba,$.bs,$.uB],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.Q,$.b8,$.ck],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aL,$.O],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aL,$.O],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.b8,$.Q],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aL,$.O,$.a0],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.z]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d8,$.L)
q.i(0,$.b2,$.m)
q.i(0,$.cd,$.k)
q.i(0,$.cH,$.m)
p=$.o
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aX+" or "+$.aq+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.M+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.d8,$.L)
s.i(0,$.b2,$.k)
s.i(0,$.cd,$.k)
s.i(0,$.u6,$.k)
s.i(0,$.cG,$.k)
s.i(0,$.uc,$.k)
s.i(0,$.cH,$.m)
o=$.o
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.M
n=n+l+"ing "
k=$.u
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aX
s.i(0,new R.a1("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.cX,$.L)
t.i(0,$.dN,$.k)
t.i(0,$.cf,$.k)
t.i(0,$.dO,$.k)
t.i(0,$.hg,$.k)
r=$.o
q="The "+r+" wanders into an entire crowd of "
o=$.u
t.i(0,new R.a1("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.M+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,t,null),$.aS)}}
M.bD.prototype={}
N.oX.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Frog Statue",H.a([$.aN,$.aJ,$.H],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.H],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c_,$.a0,$.a3,$.H],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.b4,$.a0,$.H],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.O,$.H,$.mT,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=$.o
s=[P.z]
r=H.a(["Wherever the "+t+" goes, they find a "+$.u+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.M+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.B+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.o
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.u+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.u+" tells the "
p=$.o
t=t+p+" that they must negotiate with "
o=$.B
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.o
p="The "+o+" meets with "
t=$.B
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cI,$.L)
t.i(0,$.u8,$.k)
s=[U.b]
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ay)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ay)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ay)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ay)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ay)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ay)
p=$.o
t.i(0,new R.bC("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.A(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(o,t,null),$.HD)}}
U.aw.prototype={
gK:function(a){return this.d+"kind"},
$isbJ:1,
$asbJ:function(){return[A.Y]}}
K.cK.prototype={
gK:function(a){return this.a}}
M.p1.prototype={
aX:function(a){return"application/octet-stream"},
R:function(a6,a7){var t=0,s=P.bd(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$R=P.bi(function(a8,a9){if(a8===1)return P.bf(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dn(null,0)
q.a=J.e1(a7,0)
for(p=0,o="";p<6;++p)o+=H.hS(q.ac(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.l("Invalid header: "+n)
m=q.ac(8)
l=9+m*6
o=8*m
k=q.ac(o)
j=q.ac(o)
i=q.ac(o)
h=q.ac(o)
g=q.ac(o)
f=q.ac(o)
o=P.F
e=P.z
d=P.c0(o,e)
c=new O.cY(k,j,null,null,null,null,null,null,d,P.c0(e,o))
c.x=new Uint8Array(H.cE(k*j))
b=q.ac(8)
for(o=[o],p=0;p<b;++p){a=q.ac(8)
a0=q.ac(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.ac(8)
if(a2>=e){r=H.w(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.pr(a1,0,null))}a4=q.ac(8)
a5=$.$get$xU().n(0,a4)
if(a5==null)throw H.l("Sprite decoding error: Encoding id "+a4+" not supported.")
c.iJ(i,h,g,a5.c.$4(a7,l,g*f,c))
c.ir()
r=c
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$R,s)},
$asdx:function(){return[O.cY]},
$asc6:function(){return[O.cY,P.bk]}}
A.nK.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Puzzle Box",H.a([$.Z,$.H,$.a4],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a3,$.H,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.H],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.H,$.a3,$.a0],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Janus Bust",H.a([$.aN,$.hu,$.aJ,$.as,$.H,$.a_,$.a3],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.ax],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.oY.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Frog Statue",H.a([$.aN,$.aJ,$.H],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.H],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c_,$.a0,$.a3,$.H],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.b4,$.a0,$.H],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Green Sun Poster",H.a([$.O,$.H,$.mT,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.ax],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.oo.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Curtain",H.a([$.Q,$.H,$.ax],s),null,!1,"Show Ender")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.es,$.aZ,$.H,$.aK,$.b5,$.ax,$.bs,$.aO],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.D,$.aT,$.a3,$.H,$.ax],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aN,$.D,$.aT,$.bt,$.c9,$.H,$.ax],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.aH,$.bt,$.as,$.H,$.a_,$.ax],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nightmare Fuel",H.a([$.Z,$.H,$.b5,$.aI,$.bu,$.ax],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.ax],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.oV.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Doll",H.a([$.jA,$.aM,$.aB,$.H],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.Z,$.aB,$.H,$.a_,$.b5],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.mX,$.H],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.O,$.H,$.aQ],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shades",H.a([$.az,$.b4,$.H],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.ax],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.pU.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Grandfather Clock",H.a([$.Z,$.as,$.be,$.H],s),null,!1,"Ticking Tower of Time")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.uy,$.H,$.a7],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aN,$.bm,$.H,$.ba,$.b5,$.aO],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.H,$.a7,$.as],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.D,$.H,$.a7,$.a_,$.az],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Metronome",H.a([$.D,$.H,$.a7],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.ax],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.ox.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("FAQ",H.a([$.a3,$.H,$.a0,$.bF],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aP,$.H,$.b_,$.a3,$.bF],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.H,$.b_,$.bF,$.a_,$.mS],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.uw,$.H,$.an],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.uE,$.H],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b7,$.H,$.b_,$.bF],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("8-Ball",H.a([$.b4,$.H,$.aB],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.ax],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.mq.prototype={
G:function(){var t,s
t=Q.E(null,null,A.Y)
s=A.i("Infinity Gauntlet",H.a([$.H,$.D,$.mP],[G.W]),"...",!1,"THANOS CAR THANOS CAR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Stone","Thanos","Mind","Space","Power","Soul","Time","Reality"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cd,$.m)
t.i(0,$.bS,$.L)
t.i(0,$.cP,$.L)
r=$.o
q="The "+r+" is wandering their land, when an imp goes up to them. Expecting a fight, the "+r+' raises their weapon. Surprisingly, the imp starts talking, and its eyes go black, it says "You must collect the Stones, then you can prove your worth to usssss..." the imp\'s eyes go back to normal, and then it dies. The '+r+" notices it droped a small glowing crystal... MINDSTONE COLLECTED, 1/6."
p="The "+r+' is going through a dungeon. Once they arrive in the final room, a miniboss appears. It bellows "I am the keeper of the Space Stone, fight me if you dare!" It then dissapears in a cloud of smoke. The '+r+" tries to look at some of the many mirrors in the room, to try to find the monster, but to no avail. The boss then flings itself at them from a random angle, and then the "+r+" was able to kill it, and it dropped a small blue gemstone... SPACESTONE COLLECTED, 2/6. Some time later, The "+r+' is going through another dungeon, when it encounters another miniboss, similar to the previous one, it bellows "FIGHT ME, TO COLLECT THE POWER STONE!!" It takes many hours, but the '+r+" comes out on top... POWERSTONE COLLECTED, 3/6."
o="The "+r+" is used to these shenanings by now, when they see a giant crystalline mini boss, they knock it down and take the stone... SOULSTONE COLLECTED, 4/6. When the "+r+" saw another miniboss, but encased in impenetrable gems, they threw it into an over and waited to get the stone... TIMESTONE COLLECTED, 5/6. When the "+r+" encounters yet another one, they try to attack it. But it dissapears, and a similar looking boss drops on their back, it goes on like that for awhile, but the "+r+" eventually defeats it... REALITYSTONE COLLECTED, 6/6, OBJECTIVE COMPLETE."
n="The "+r+" learns it's time to visit their denizen, but when they get there they only see "+$.B+" being [REDACTED]."
m="Paradox Space has declared the "+r+" is worthy, and lets them live."
t.i(0,new R.R("Collect The Stones",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"Paradox Space decrees that the "+r+" is not worthy.",m)],H.a([],[U.b]),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(s,t,null),$.av)}}
R.px.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Meddler's Guide",H.a([$.aL,$.P,$.O,$.bt,$.a_,$.b0],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b4,$.P,$.b0],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.br],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a4,$.P,$.b_,$.aM,$.O],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.z]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cd,$.k)
t.i(0,$.b2,$.k)
t.i(0,$.dp,$.m)
t.i(0,$.fc,$.m)
t.i(0,$.u5,$.m)
t.i(0,$.e5,$.m)
t.i(0,$.iC,$.m)
t.i(0,$.ub,$.m)
r=$.o
q="The "+r+" decides to take a break after defeating "+$.B+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.u
o=[U.b]
t.i(0,new R.a8("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.M+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.vq(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.u
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.o
t.i(0,new R.a8("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
r=$.u
q="The "+r+"s are so stressed after all that shit with the "+$.B+". They are yelling and "+$.M+" at each other over the slightest of insults. The "
p=$.o
t.i(0,new R.a8("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p="The "+$.B+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.o
p=p+r+" purifies the pools "
q=$.u
t.i(0,new R.bC("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
r="The defeat of the "+$.B+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.u
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.o
t.i(0,new R.a8("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aX+". Huh. Okay then.")],H.a([],o),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
L.pB.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Lightning",H.a([$.aT,$.aW,$.H],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice",H.a([$.bp,$.xc,$.fk],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Taserface",H.a([$.ax,$.aT],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Taser",H.a([$.aT,$.H,$.ax],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dM,$.L)
t.i(0,$.bS,$.k)
t.i(0,$.iD,$.m)
t.i(0,$.cP,$.m)
r=$.o
q="The "+r+" is walking around on their land, when a "
p=$.u
q=q+p+" walks up to them, and tells them about "
o=$.B
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.M+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.R("Rebel Against Your Land",!1,[new U.b(q),new U.b(p),new U.b(n),new U.X(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.b]),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
this.f.i(0,new X.G(s,t,null),$.av)}}
D.pD.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Robot",H.a([$.a3,$.D,$.aB,$.a0],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a3,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a3,$.O],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a3,$.O,$.aO,$.aL],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aP,$.a3,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.x8,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.uJ,$.D,$.an],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a3,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.iJ,$.m)
q.i(0,$.f9,$.k)
q.i(0,$.fa,$.k)
q.i(0,$.ci,$.L)
p=$.o
o="The "+p+" learns from their "
n=$.u
o=o+n+"s about the great "
m=$.aX
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.B+" destroyed it. "
o="The "+p+" searches for the "
l=$.aq
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.GD
p=[U.b]
q.i(0,new R.a1("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.A(),!1,!1,new Y.d_("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.C)
l=$.o
m="The "+l+" is approached by a "
o=$.u
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.M
q.i(0,new R.a1("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.B+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.aq+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fu(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.fa,$.k)
s.i(0,$.en,$.L)
s.i(0,$.ep,$.m)
s.i(0,$.cX,$.k)
s.i(0,$.ci,$.L)
o=$.o
n="The "+o+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
o=$.o
l="The "+o+" finds two groups of "
n=$.u
l=l+n+"s screaming and "
k=$.M
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.aq
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.a1("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.ec(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.iJ,$.L)
t.i(0,$.f9,$.k)
t.i(0,$.fa,$.k)
t.i(0,$.ci,$.L)
r=$.o
q="The "+r+" learns from a mysterious "+$.u+" in a black trenchcoat about a great "
o=$.aX
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.B
t.i(0,new R.a1("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,t,null),$.aS)}}
V.pE.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Lighter",H.a([$.D,$.aI],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.O,$.bp],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.O,$.bp,$.c_],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.D,$.aO,$.c_,$.aW,$.bs],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.O,$.xd],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.D,$.be,$.aW],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.D,$.be,$.aW],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.Q,$.fj,$.aW],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bT,$.be],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.D,$.uC,$.b1,$.aW],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.D,$.uG,$.b1,$.aW],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.D,$.uz,$.b1,$.aW],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mU,$.aK,$.D,$.bu,$.aW],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.O,$.bt,$.aL],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.c9,$.D,$.aT,$.bt],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.Z,$.aI],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cF,$.m)
q.i(0,$.dN,$.k)
q.i(0,$.e6,$.k)
q.i(0,$.fb,$.k)
q.i(0,$.m8,$.k)
q.i(0,$.dO,$.m)
p=$.o
o=[U.b]
q.i(0,new R.a1("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.A(),!1,!1,new Y.d6("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cF,$.m)
s.i(0,$.dN,$.k)
s.i(0,$.cA,$.k)
s.i(0,$.dO,$.m)
n=$.o
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.u
s.i(0,new R.a1("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.aq+" underling. Tremble at the fearsome "+$.aX+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.A(),!1,!1,new Y.d6("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d7,$.k)
q.i(0,$.bl,$.L)
q.i(0,$.dP,$.k)
q.i(0,$.c5,$.m)
q.i(0,$.e5,$.L)
q.i(0,$.cP,$.L)
n=$.o
m="The "+n+" learns that all of the local "
l=$.u
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.ce,$.k)
t.i(0,$.cP,$.L)
t.i(0,$.em,$.k)
t.i(0,$.iH,$.k)
t.i(0,$.ci,$.m)
t.i(0,$.eq,$.m)
s=$.o
r="The "+s+" finds a crowd of "
n=$.M
r=r+n+"ing "
m=$.u
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aX+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.a1("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.C)
p.i(0,new X.G(q,t,null),$.aS)}}
X.G.prototype={
D:function(a){return"Theme: "+H.y(this.a)}}
U.pO.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Lockpick",H.a([$.D,$.P,$.aA,$.aZ,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.Q,$.P,$.aA],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Dagger",H.a([$.D,$.P,$.aZ,$.aK,$.ur],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.ce,$.k)
t.i(0,$.dA,$.m)
t.i(0,$.bS,$.m)
t.i(0,$.cX,$.m)
r="The "+$.B+" cannot release the frogs since the corrupt "
q=$.u
r=r+q+" Cops have confiscated them. The "
p=$.o
o=[U.b]
t.i(0,new R.bC("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
p=$.o
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.B+"'s layer and slated to be returned to the "
r=$.u
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.M+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a8("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.C)
r=$.u
p="A weeping "+r+" approaches the "
n=$.o
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.B
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aX+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.M+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a8("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.C)
r=$.B
n="Now that the "+r+" has been defeated, the "
p=$.u
n=n+p+"s have recovered their precious "
q=$.aq
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.o
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.M
l=n+l+"worth, the disaffected Heir to the "+$.aX+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a8("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
N.pP.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Grandfather Clock",H.a([$.Z,$.as,$.be,$.H],s),null,!1,"Ticking Tower of Time")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.uy,$.H,$.a7],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aN,$.bm,$.H,$.ba,$.b5,$.aO],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.H,$.a7,$.as],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.D,$.H,$.a7,$.a_,$.az],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.D,$.H,$.a7],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.z]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.wK,$.ay)
q.i(0,$.ci,$.m)
q.i(0,$.cX,$.m)
q.i(0,$.ep,$.k)
p=$.B
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.o
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.b]
q.i(0,new R.a8("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.eB(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.u+"s, they set out to fix the "
m=$.aq
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.B
q.i(0,new R.R("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.X("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j=this.f
j.i(0,new X.G(s,q,null),$.av)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.hh,$.k)
s.i(0,$.e6,$.L)
s.i(0,$.ci,$.k)
p=$.o
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.u+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.B
s.i(0,new R.R("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.X(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j.i(0,new X.G(q,s,null),$.av)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.cf,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.cd,$.k)
t.i(0,$.dp,$.k)
r=$.B
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.aq
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.o
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.u+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.R("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.X(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hT(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.B
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.aq
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.o
t.i(0,new R.R("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.u+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.X("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.eB(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.B+", "
k=$.o
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.u
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aX
t.i(0,new R.a8("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.eB(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.o
t.i(0,new R.R("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.M+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.X("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.B+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
j.i(0,new X.G(s,t,null),$.av)}}
G.W.prototype={
D:function(a){var t=this.b
if(t.length!==0)return C.b.gaf(t)
return"NULL TRAIT"},
geC:function(){return this.a},
gei:function(){return this.b},
gbI:function(){return this.c}}
G.aY.prototype={}
G.au.prototype={}
G.bL.prototype={}
G.e.prototype={
gil:function(){return this.e.length},
gbI:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bG)(t),++q)r+=t[q].c
return r},
aE:function(a,b){return C.a.bJ(b.gil()-this.e.length)},
eO:function(a){return C.b.hJ(this.e,a.ghu(a))},
$isbJ:1,
$asbJ:function(){return[G.e]},
gK:function(a){return this.d},
gf8:function(){return this.e}}
G.n_.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.W]}}}
Q.qd.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Cardboard Box",H.a([$.O,$.H,$.aA],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.D,$.H,$.aA],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bu,$.H,$.aA,$.mU],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.ba,$.H,$.aA,$.b5,$.bV],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aP,$.H,$.aA,$.as],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.H,$.a_,$.mT,$.aA,$.b4],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.z]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d8,$.k)
q.i(0,$.m7,$.k)
q.i(0,$.hk,$.k)
q.i(0,$.hi,$.k)
p=$.B
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.o
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.u
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.b]
q.i(0,new R.a8("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=$.o
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.B
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.R("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.X(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
i=this.f
i.i(0,new X.G(s,q,null),$.av)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.d8,$.m)
s.i(0,$.m7,$.m)
s.i(0,$.hk,$.m)
s.i(0,$.ce,$.k)
p=$.o
o="Even with the victory of the "+p+" over the villainous "
n=$.B
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.u+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.aq
s.i(0,new R.a8("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fu(),!1,!1,new Y.c7("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
s.i(0,new R.R("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.M+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.X("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.B+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.u+"s.")],H.a([],l),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
i.i(0,new X.G(q,s,null),$.av)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.d8,$.k)
t.i(0,$.m7,$.k)
t.i(0,$.hk,$.k)
r=$.o
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.B+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.R("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.X(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
i.i(0,new X.G(s,t,null),$.av)}}
E.qe.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Yardstick",H.a([$.dq,$.P,$.jz,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aL,$.P,$.hx,$.O],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.Q,$.P,$.e8,$.mV,$.b8],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.uH,$.P,$.mO],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cI,$.k)
t.i(0,$.d9,$.k)
t.i(0,$.dz,$.k)
t.i(0,$.dp,$.k)
t.i(0,$.el,$.k)
t.i(0,$.dM,$.k)
t.i(0,$.hk,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.vq(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.C)
r=$.B
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cm+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.M
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xP(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.C)
q=$.o
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.A(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.C)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.B
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ay)
m=$.o
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.B+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.A(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ay)
m="A wizened "+$.u+" tells the "
r=$.o
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.A(),!1,!1,new Y.d6("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.xQ(),!1,!1,new Y.c7("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a8("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.B
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bC("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
this.x.i(0,new X.G(s,t,null),$.av)}}
M.qi.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Cauldron",H.a([$.xg,$.P,$.a4],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jx,$.dq,$.P,$.Z,$.a4],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.mX,$.P,$.a4,$.aA,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.z]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c5,$.m)
t.i(0,$.hm,$.m)
t.i(0,$.d7,$.m)
t.i(0,$.cX,$.m)
t.i(0,$.cz,$.m)
t.i(0,$.u8,$.m)
r=$.B
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.u
q=q+p+" consorts. It's up to the "
o=$.o
n=[U.b]
t.i(0,new R.bC("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bW(),!1,!1,new Y.bz("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ay)
o="Even with the defeat of the "+$.B+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.u
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aX
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.o
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a8("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.C)
q="A Mysterious "+$.u+" approaches the "
p=$.o
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aX
q=q+r+" was discovered amongst the "+$.B+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a8("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.C)
r=$.u
p="A young "+r+" approaches the "
m=$.o
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aX
t.i(0,new R.a8("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.aq+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.M+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.A(),!1,!1,new Y.ar("Rewards/no_reward.png",null),1,null,null),$.C)
this.x.i(0,new X.G(s,t,null),$.bP)}}
U.qj.prototype={
R:function(a5,a6){var t=0,s=P.bd(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$R=P.bi(function(a7,a8){if(a7===1)return P.bf(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.e2(a6,$.$get$yi())
if(0>=p.length){r=H.w(p,0)
t=1
break}if(J.zK(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.w(p,0)
t=1
break}throw H.l("Invalid WordList file header: '"+H.y(p[0])+"'")}o=P.z
n=H.a([],[o])
m=P.c0(o,B.eO)
q.a=null
l=P.c0(o,o)
for(k=P.U,j=B.d1,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cN()
""+i
H.y(g)
f.toString
f=J.e2(g,$.$get$yg())
if(0>=f.length){r=H.w(f,0)
t=1
break $async$outer}g=f[0]
f=J.bj(g)
if(f.gX(g)===!0){$.$get$cN().toString
continue}if(f.ag(g,$.$get$yh())){$.$get$cN().toString
continue}if(C.c.ag(g,"@")){e=C.c.ah(g,1)
$.$get$cN().toString
n.push(e)}else if(C.c.ag(g,"?")){f=C.c.ah(g,1)
f=$.$get$hZ().aV(0,f)
f=H.dr(f,B.ii(),H.aE(f,"n",0),null)
d=P.db(f,!0,H.aE(f,"n",0))
if(d.length<2)$.$get$cN().aM(C.i,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cN()
H.y(c)
H.y(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$yj()
a=f.cw(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.w(f,1)
t=1
break $async$outer}a0=J.c4(f[1])
a1=C.c.ah(g,a0)
if(a1.length===0)continue
f=J.aD(a0)
if(f.U(a0,0)){a1=C.c.eP(a1)
$.$get$cN().toString
f=P.c0(o,o)
a2=new B.eO(P.c0(o,k),f,a1,!1,null,null)
a2.cn(null,null,j)
q.a=a2
f.at(0,l)
m.i(0,a1,q.a)}else if(f.U(a0,$.yk))if(C.c.ag(a1,"?")){a1=C.c.ah(a1,1)
f=$.$get$hZ().aV(0,a1)
f=H.dr(f,B.ii(),H.aE(f,"n",0),null)
d=P.db(f,!0,H.aE(f,"n",0))
f=$.$get$cN()
f.toString
if(d.length<2)f.aM(C.i,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kM(d[0],$.$get$fz(),"")
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}b=J.kM(d[1],$.$get$fz(),"")
f=$.$get$cN()
H.y(q.a.e)
f.toString
q.a.d.i(0,c,b)}}else if(C.c.ag(a1,"@")){e=C.c.ah(a1,1)
$.$get$cN().toString
f=$.$get$hZ().aV(0,a1)
f=H.dr(f,B.ii(),H.aE(f,"n",0),null)
d=P.db(f,!0,H.aE(f,"n",0))
a3=d.length>1?H.xM(d[1],new U.qk(q,d)):1
q.a.c.i(0,C.c.d8(e,$.$get$fz(),""),a3)}else{$.$get$cN().toString
f=$.$get$hZ().aV(0,g)
f=H.dr(f,B.ii(),H.aE(f,"n",0),null)
d=P.db(f,!0,H.aE(f,"n",0))
a3=d.length>1?H.xM(d[1],new U.ql(q,d)):1
if(0>=d.length){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bq(J.kM(d[0],$.$get$fz(),""))
h=new B.d1(null)
a4=P.c0(o,o)
h.a=a4
a4.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.tJ(a3)),[H.aE(f,"cD",0)]))}else if(f.U(a0,$.yk*2)){$.$get$cN().toString
f=$.$get$hZ().aV(0,g)
f=H.dr(f,B.ii(),H.aE(f,"n",0),null)
d=P.db(f,!0,H.aE(f,"n",0))
f=d.length
if(f!==2)$.$get$cN().aM(C.i,"Invalid variant for "+H.y(h.br(0))+" in "+H.y(q.a.e))
else{if(0>=f){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bq(J.kM(d[0],$.$get$fz(),""))
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}a4=C.c.d8(U.HG(d[1]),$.$get$fz(),"")
h.a.i(0,f,a4)}}}}}r=new B.eP(n,m)
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$R,s)},
$aseJ:function(){return[B.eP]},
$asc6:function(){return[B.eP,P.z]}}
U.qk.prototype={
$1:function(a){var t,s,r
t=$.$get$cN()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid include weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.aM(C.h,r+H.y(s[0])+"' in list '"+H.y(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.z]}}}
U.ql.prototype={
$1:function(a){var t,s,r
t=$.$get$cN()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.aM(C.h,r+H.y(s[0])+"' in list '"+H.y(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.z]}}}
F.qn.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.Y)
s=[G.W]
r=A.i("Make a World Book",H.a([$.O,$.as,$.aL],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.b8,$.Q,$.mY],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aL,$.O,$.a0],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aL,$.O,$.a0],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aL,$.O],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.D,$.a0,$.mY,$.as],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aL,$.O,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aL,$.O],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.z]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d8,$.k)
q.i(0,$.cH,$.k)
q.i(0,$.bl,$.m)
q.i(0,$.b2,$.m)
q.i(0,$.hj,$.m)
p=$.o
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.u+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.a1("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.C)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.dO,$.m)
s.i(0,$.cF,$.m)
s.i(0,$.cA,$.m)
s.i(0,$.bl,$.m)
p=$.u
o="An Excited "+p+" rushes up to the "
n=$.o
s.i(0,new R.a1("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.M+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.A(),!1,!1,new Y.d6("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.cF,$.m)
t.i(0,$.dN,$.k)
t.i(0,$.cA,$.k)
t.i(0,$.dO,$.m)
t.i(0,$.dz,$.k)
r=$.o
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.u
t.i(0,new R.a1("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.A(),!1,!1,new Y.d6("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.C)
m.i(0,new X.G(s,t,null),$.aS)}}
B.qs.prototype={
aX:function(a){return"application/x-tar"},
R:function(a,b){var t=0,s=P.bd(),r,q,p
var $async$R=P.bi(function(c,d){if(c===1)return P.bf(d,s)
while(true)switch(t){case 0:q=$.$get$yl()
p=J.w6(b)
q.toString
r=q.hA(T.uk(p,0,null,0),!1)
t=1
break
case 1:return P.bg(r,s)}})
return P.bh($async$R,s)},
$asdx:function(){return[T.fQ]},
$asc6:function(){return[T.fQ,P.bk]}}
A.fY.prototype={}
B.dy.prototype={
cN:function(a){if(a)this.b=(this.b|C.a.as(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.P+=H.hS(this.b)
this.b=0}},
ai:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.as(1,t)
if(typeof a!=="number")return a.aP()
this.cN((a&s)>>>0>0)}},
hm:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.az(1,t-s)
if(typeof a!=="number")return a.aP()
this.cN((a&r)>>>0>0)}},
c0:function(a){var t,s
a=J.eg(a,1)
t=C.d.dn(Math.log(H.kB(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cN(!1)
this.hm(a,t+1)},
bb:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.P
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a9(r)
q+=r
p=r}else p=0
r=H.cE(q)
o=new Uint8Array(r)
if(t){n=H.cJ(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.w(o,m)
o[m]=l}}t=s.P
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a7(k,m)
if(s<0||s>=r)return H.w(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.w(o,t)
o[t]=s}return o.buffer}}
B.dn.prototype={
cF:function(a){var t,s,r,q
t=C.f.am(a/8)
s=C.a.bP(a,8)
r=this.a.getUint8(t)
q=C.a.az(1,s)
if(typeof r!=="number")return r.aP()
return(r&q)>>>0>0},
ac:function(a){var t,s,r
if(a>32)throw H.l(P.dH(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cF(this.b);++this.b
if(r)t=(t|C.a.as(1,s))>>>0}return t},
iq:function(a){var t,s,r,q
if(a>32)throw H.l(P.dH(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cF(this.b);++this.b
if(q)s=(s|C.a.az(1,t-r))>>>0}return s},
c9:function(){var t,s,r
for(t=0;!0;){s=this.cF(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.iq(t+1)-1}}
A.dK.prototype={
D:function(a){return"rgb("+H.y(this.b)+", "+H.y(this.c)+", "+H.y(this.d)+", "+H.y(this.a)+")"},
iC:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.az()
s=this.c
if(typeof s!=="number")return s.az()
r=this.d
if(typeof r!=="number")return r.az()
q=this.a
if(typeof q!=="number")return H.a9(q)
return(t<<24|s<<16|r<<8|q)>>>0},
U:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dK){t=this.b
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
ga8:function(a){return this.iC(!0)},
W:function(a,b){var t,s,r,q,p,o,n,m
t=J.aD(b)
if(!!t.$isdK){t=this.b
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
return A.h1(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.ao()
s=this.c
if(typeof s!=="number")return s.ao()
r=this.d
if(typeof r!=="number")return r.ao()
q=this.a
if(typeof q!=="number")return q.ao()
return A.tS(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.W()
s=this.c
if(typeof s!=="number")return s.W()
r=this.d
if(typeof r!=="number")return r.W()
return A.h1(t+b,s+b,r+b,this.a)}throw H.l("Cannot add ["+H.y(t.gad(b))+" "+H.y(b)+"] to a Colour. Only Colour, double and int are valid.")},
aw:function(a,b){var t,s,r,q,p,o,n,m
t=J.aD(b)
if(!!t.$isdK){t=this.b
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
return A.tS(t/255*(s/255),r/255*(q/255),p/255*(o/255),n/255*(m/255))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.ao()
s=this.c
if(typeof s!=="number")return s.ao()
r=this.d
if(typeof r!=="number")return r.ao()
q=this.a
if(typeof q!=="number")return q.ao()
return A.tS(t/255*b,s/255*b,r/255*b,q/255)}throw H.l("Cannot multiply a Colour by ["+H.y(t.gad(b))+" "+H.y(b)+"]. Only Colour, double and int are valid.")},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.l("Colour index out of range: "+H.y(b))},
i:function(a,b,c){var t,s
t=J.dv(b)
if(t.a2(b,0)||t.aC(b,3))throw H.l("Colour index out of range: "+H.y(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.U(b,0)){this.b=C.a.ae(c,0,255)
this.e=!0
this.y=!0}else if(t.U(b,1)){this.c=C.a.ae(c,0,255)
this.e=!0
this.y=!0}else if(t.U(b,2)){this.d=C.a.ae(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ae(c,0,255)
else if(t.U(b,0)){this.b=C.a.ae(J.kK(J.tE(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.U(b,1)){this.c=C.a.ae(J.kK(J.tE(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kD(c)
if(t.U(b,2)){this.d=C.a.ae(J.kK(s.aw(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ae(J.kK(s.aw(c,255)),0,255)}},
fg:function(a,b,c,d){this.b=C.d.ae(C.d.ae(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ae(C.d.ae(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ae(C.d.ae(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ae(J.tF(d,0,255),0,255)}}
A.t9.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.z]}}}
A.nr.prototype={
$1:function(a){return this.a.eG(a)},
$S:function(){return{func:1,args:[,]}}}
A.np.prototype={
$1:function(a){this.a.R(0,a).ba(this.b.gik())},
$S:function(){return{func:1,args:[,]}}}
A.nq.prototype={
$1:function(a){this.a.ht(0)},
$S:function(){return{func:1,args:[P.q]}}}
A.ns.prototype={
$1:function(a){return this.a.aF(0,this.b)},
$S:function(){return{func:1,args:[W.S]}}}
F.hH.prototype={
D:function(a){return this.b}}
F.ex.prototype={
aM:function(a,b){F.Gr(a).$1("("+this.c+")["+H.y(C.b.gbh(a.b.split(".")))+"]: "+H.y(b))},
cT:function(a,b){this.aM(C.i,b)},
by:function(a){},
gK:function(a){return this.c}}
F.uW.prototype={}
O.tv.prototype={
$1:function(a){return H.y(a.b_(1))+" = "+H.y(a.b_(2))+C.c.aw("../",this.a)},
$S:function(){return{func:1,args:[P.dc]}}}
O.tw.prototype={
$0:function(){var t=document
J.wh(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.w,null)
t=H.kG(t.querySelector("#voidButton"),"$ish_")
t.toString
W.dk(t,"click",new O.tu(),!1,W.v7)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.J3("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.tu.prototype={
$1:function(a){return O.Jb()},
$S:function(){return{func:1,args:[W.S]}}}
R.hn.prototype={}
R.ve.prototype={}
R.vd.prototype={}
A.ob.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.V(0,b)?t.n(0,b):$.$get$vc()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.V(0,b)?t.n(0,b):$.$get$vc()}throw H.l(P.dH(b,"'name' should be a String name or int id only",null))},
gS:function(a){var t=this.a
t=t.gce(t)
return new H.jI(null,J.cV(t.a),t.b,[H.N(t,0),H.N(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.V(0,b))this.an(0,b)
s=this.h1()
if(typeof s!=="number")return s.ax()
if(s>=256)throw H.l(P.dH(s,"Palette colour ids must be in the range 0-255",null))
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
A.jS.prototype={
$asn:function(){return[A.dK]},
$isn:1}
Q.jV.prototype={}
A.eE.prototype={
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
this.a=t?C.Q:P.HW(a)
if(!t)this.b=J.eg(a,1)},
ii:function(a,b){var t=J.bj(a)
if(t.gX(a))return
if(!!t.$iscD)return t.av(a,this.a.c7())
return t.T(a,this.bH(t.gm(a)))},
eF:function(a){return this.ii(a,!0)}}
Y.dR.prototype={
cL:function(a){var t,s
if(this.b!=null)throw H.l("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bq(0,$.aF,null,t)
this.c.push(new P.dZ(s,t))
return s},
eG:function(a){var t,s,r
if(this.b!=null)throw H.l("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bG)(t),++r)t[r].aF(0,this.b)
C.b.sm(t,0)}}
V.lK.prototype={
$4:function(a,b,c,d){return V.AM(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.F,P.bk,P.bk,O.cY]}}}
V.lJ.prototype={
$4:function(a,b,c,d){return V.AL(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bk,P.F,P.F,O.cY]}}}
V.lI.prototype={
$4:function(a,b,c,d){return V.AI(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.F,P.bk,P.bk,O.cY]}}}
V.lH.prototype={
$4:function(a,b,c,d){return V.AH(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bk,P.F,P.F,O.cY]}}}
O.cY.prototype={
ir:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
iJ:function(a,b,c,d){var t,s,r,q,p
t=J.aG(d)
s=0
while(!0){r=t.gex(d)
if(typeof r!=="number")return H.a9(r)
if(!(s<r))break
q=(C.a.dn(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.w(r,q)
r[q]=p;++s}}}
D.p4.prototype={
$1:function(a){return a.gij()},
$S:function(){return{func:1,args:[D.cL]}}}
D.cL.prototype={
D:function(a){return this.a},
gK:function(a){return this.a},
gij:function(){return this.d}}
D.kf.prototype={}
D.oz.prototype={}
B.pG.prototype={
ih:function(a,b){var t
if(!this.d)this.ip()
t=this.dI(a)
if(t==null){$.$get$fA().by("Root list '"+H.y(a)+"' not found")
return"["+H.y(a)+"]"}return this.dX(J.zw(t,b),P.c0(P.z,B.d1))},
ig:function(a){return this.ih(a,null)},
bo:function(a){var t=0,s=P.bd(),r,q=this,p,o,n,m
var $async$bo=P.bi(function(b,c){if(b===1)return P.bf(c,s)
while(true)switch(t){case 0:p=q.a
if(p.Z(0,a)){p=$.$get$fA()
H.y(a)
p.toString
t=1
break}p.h(0,a)
t=3
return P.bQ(A.e9("wordlists/"+H.y(a)+".words",!1,!1,null),$async$bo)
case 3:o=c
q.b.at(0,o.gi3())
p=o.a,n=p.length,m=0
case 4:if(!(m<p.length)){t=6
break}t=7
return P.bQ(q.bo(p[m]),$async$bo)
case 7:case 5:p.length===n||(0,H.bG)(p),++m
t=4
break
case 6:q.d=!1
case 1:return P.bg(r,s)}})
return P.bh($async$bo,s)},
ip:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
$.$get$fA().by("Processing word lists")
this.d=!0
t=this.c
t.b4(0)
for(s=this.b,r=s.gaj(s),r=r.gS(r);r.I();){q=r.gL()
p=B.HH(s.n(0,q))
t.i(0,q,p)
for(o=p.d,n=o.gaj(o),n=n.gS(n),m=[H.aE(p,"b6",0)];n.I();){l=n.gL()
for(k=new H.dQ(p,p.gm(p),0,null,m);k.I();){j=k.d
if(!j.gbZ().V(0,l)){i=o.n(0,l)
j.a.i(0,l,i)}}}}for(s=t.gaj(t),s=s.gS(s);s.I();){p=t.n(0,s.gL())
p.io(t)
for(r=new H.dQ(p,p.gm(p),0,null,[H.aE(p,"b6",0)]),o=p.d;r.I();){h=r.d
for(n=o.gaj(o),n=n.gS(n);n.I();){l=n.gL()
if(!h.gbZ().V(0,l))h.a.i(0,l,o.n(0,l))}for(n=h.gbZ(),n=n.gaj(n),n=n.gS(n);n.I();){g=n.gL()
m=h.a
m.i(0,g,J.tI(m.n(0,g),$.$get$xY(),new B.pI(h)))}}}},
dI:function(a){var t,s
t=this.c
if(!t.V(0,a)){$.$get$fA().by("List '"+H.y(a)+"' not found")
return}s=t.n(0,a)
return this.e.eF(s)},
dX:function(a,b){return J.tI(a,$.$get$xX(),new B.pH(this,b))}}
B.pI.prototype={
$1:function(a){var t,s
t=a.b_(1)
s=this.a
if(!s.a.V(0,t))return"["+H.y(t)+"]"
return s.a.n(0,t)},
$S:function(){return{func:1,args:[P.dc]}}}
B.pH.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=a.b_(1)
s=$.$get$xZ().aV(0,t)
s=H.dr(s,B.ii(),H.aE(s,"n",0),null)
r=P.db(s,!0,H.aE(s,"n",0))
if(0>=r.length)return H.w(r,0)
q=J.e2(r[0],"@")
s=q.length
p=s>1?q[1]:null
o=this.a
if(0>=s)return H.w(q,0)
n=o.dI(q[0])
s=r.length
if(s>1){for(s=this.b,m=n,l=1;k=r.length,l<k;++l){q=J.e2(r[l],"@")
if(0>=q.length)return H.w(q,0)
if(J.bc(q[0],"var")){if(q.length<2)continue
j=q[1]
if(s.V(0,j))m=s.n(0,j)
else s.i(0,j,m)}}s=k}else m=n
if(m==null){if(0>=s)return H.w(r,0)
return"["+H.y(r[0])+"]"}s=J.aG(m)
i=s.av(m,p)
if(i==null){$.$get$fA().by("Missing variant '"+H.y(p)+"' for word '"+H.y(m)+"', falling back to base")
i=s.br(m)}return o.dX(i,this.b)},
$S:function(){return{func:1,args:[P.dc]}}}
B.d1.prototype={
av:function(a,b){if(b==null)b="MAIN"
if(this.a.V(0,b))return this.a.n(0,b)
return},
br:function(a){return this.av(a,null)},
D:function(a){return"[Word: "+H.y(this.br(0))+"]"},
gbZ:function(){return this.a}}
B.eO.prototype={
D:function(a){return"WordList '"+H.y(this.e)+"': "+this.fc(0)},
eH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
if(this.f)return
this.f=!0
b=P.a2(null,null,null,B.eO)
b.h(0,this)
for(t=this.c,s=t.gaj(t),s=s.gS(s),r=this.e;s.I();){q=s.gL()
if(a.V(0,q)){p=a.n(0,q)
if(b.Z(0,p)){$.$get$fA().aM(C.h,"Include loop detected in list '"+H.y(r)+"', already visited '"+H.y(p.e)+"', ignoring")
continue}p.eH(a,b)}}for(s=t.gaj(t),s=s.gS(s),r=[H.aE(this,"cD",0)];s.I();){q=s.gL()
if(!a.V(0,q))continue
for(o=a.n(0,q).b,n=o.length,m=0;m<o.length;o.length===n||(0,H.bG)(o),++m){l=o[m]
k=J.aG(l)
j=k.gY(l)
k=J.tE(k.gbd(l),t.n(0,q))
C.b.h(this.b,new Q.h(j,this.k(j,J.tJ(k)),r))}}},
io:function(a){return this.eH(a,null)},
$isq:1,
$asq:function(){return[B.d1]},
$asdY:function(){return[B.d1]},
$asi2:function(){return[B.d1]},
$ascD:function(){return[B.d1]},
$asn:function(){return[B.d1]},
$asv:function(){return[B.d1]},
gcW:function(){return this.c},
ghB:function(){return this.d},
gK:function(a){return this.e}}
B.eP.prototype={
D:function(a){return"[WordListFile: "+this.b.D(0)+" ]"},
gcW:function(){return this.a},
gi3:function(){return this.b}}
S.fr.prototype={}
S.vI.prototype={}
S.vJ.prototype={}
S.vK.prototype={}
S.u1.prototype={}
S.u4.prototype={}
S.tR.prototype={}
S.vr.prototype={}
S.vM.prototype={}
S.vN.prototype={}
S.l9.prototype={}
S.vh.prototype={}
S.vb.prototype={}
S.nj.prototype={}
S.tW.prototype={}
S.tM.prototype={}
S.lt.prototype={}
S.uX.prototype={}
S.lu.prototype={}
S.od.prototype={}
S.vy.prototype={}
S.vv.prototype={}
S.vz.prototype={}
S.tL.prototype={}
S.mr.prototype={}
S.l7.prototype={}
S.tQ.prototype={}
S.tP.prototype={}
S.vi.prototype={}
S.vA.prototype={}
S.vj.prototype={}
S.u3.prototype={}
S.u2.prototype={}
S.vx.prototype={}
S.vw.prototype={}
S.pN.prototype={}
S.vD.prototype={}
S.tT.prototype={}
S.tU.prototype={}
S.vL.prototype={}
S.hJ.prototype={}
S.v2.prototype={}
S.v3.prototype={}
S.v4.prototype={}
S.v5.prototype={}
S.vs.prototype={}
S.vt.prototype={}
S.vu.prototype={}
S.v1.prototype={}
S.v8.prototype={}
S.v9.prototype={}
S.uh.prototype={}
S.ui.prototype={}
S.uj.prototype={}
S.va.prototype={}
S.v6.prototype={}
S.tN.prototype={}
S.vF.prototype={}
S.vG.prototype={}
S.vE.prototype={}
Z.uR.prototype={}
Z.uN.prototype={}
Z.uO.prototype={}
Q.cD.prototype={
av:function(a,b){var t,s,r,q,p,o,n
t=this.dd()
s=J.tF(b,0,1)*t
for(r=J.cV(this.gbp()),q=0;r.I();){p=r.gL()
o=J.aG(p)
n=o.gbd(p)
if(typeof n!=="number")return H.a9(n)
q+=n
if(s<=q)return o.gY(p)}return},
dd:function(){var t,s,r
for(t=J.cV(this.gbp()),s=0;t.I();){r=J.zu(t.gL())
if(typeof r!=="number")return H.a9(r)
s+=r}return s},
k:function(a,b){return b},
D:function(a){return J.cx(this.gbp())},
aB:function(a,b){return Q.vP(this,b,H.aE(this,"cD",0),null)},
a5:function(a,b){return Q.vO(this,!1,!0,null,H.aE(this,"cD",0))},
ar:function(a){return this.a5(a,!0)},
$isn:1,
$asn:null}
Q.dY.prototype={
av:function(a,b){var t,s,r,q,p,o,n,m,l
t=this.dd()
s=J.tF(b,0,1)*t
for(r=this.b,q=r.length,p=0,o=0;o<r.length;r.length===q||(0,H.bG)(r),++o){n=r[o]
m=J.aG(n)
l=m.gbd(n)
if(typeof l!=="number")return H.a9(l)
p+=l
if(s<=p)return m.gY(n)}return},
gbp:function(){return this.b},
c_:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.tJ(c)),[H.aE(this,"cD",0)]))},
h:function(a,b){return this.c_(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return J.wd(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.w(t,b)
t[b]=new Q.h(c,s,[H.aE(this,"cD",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
D:function(a){return P.jB(this.b,"[","]")},
aB:function(a,b){return Q.vP(this,b,H.aE(this,"dY",0),null)},
a5:function(a,b){return Q.vO(this,!1,!0,null,H.aE(this,"dY",0))},
ar:function(a){return this.a5(a,!0)},
cn:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.i2.prototype={$ascD:null,$asn:null,$asq:null,$asv:null,$isq:1,$isv:1,$isn:1}
Q.h.prototype={
D:function(a){return"("+H.y(this.a)+" @ "+H.y(this.b)+")"},
gY:function(a){return this.a},
gbd:function(a){return this.b}}
Q.eR.prototype={
gbp:function(){return this.b},
gS:function(a){var t=new Q.qg(null,[H.aE(this,"eR",0)])
t.a=J.cV(this.b)
return t},
gm:function(a){return J.c4(this.b)},
D:function(a){return J.cx(this.b)},
aB:function(a,b){return Q.vP(this,b,H.aE(this,"eR",0),null)},
a5:function(a,b){return Q.vO(this,!1,!0,null,H.aE(this,"eR",0))},
ar:function(a){return this.a5(a,!0)}}
Q.i1.prototype={$ascD:null,$asn:null,$isn:1}
Q.qg.prototype={
gL:function(){return J.wd(this.a.gL())},
I:function(){return this.a.I()}}
Q.kc.prototype={
$aseR:function(a,b){return[b]},
$asi1:function(a,b){return[b]},
$ascD:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.qh.prototype={
$1:function(a){var t=J.aG(a)
return new Q.h(this.c.$1(t.gY(a)),t.gbd(a),[this.b])},
$S:function(){return H.eV(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"kc")}}
J.j.prototype.f9=J.j.prototype.D
J.hB.prototype.fb=J.hB.prototype.D
P.dt.prototype.fd=P.dt.prototype.bR
P.dt.prototype.fe=P.dt.prototype.bQ
P.b6.prototype.dm=P.b6.prototype.a6
P.n.prototype.fa=P.n.prototype.cg
W.cy.prototype.cm=W.cy.prototype.aG
W.ia.prototype.ff=W.ia.prototype.b3
Q.dY.prototype.fc=Q.dY.prototype.D;(function installTearOffs(){installTearOff(H.fF.prototype,"gi1",0,0,0,null,["$0"],["c5"],1)
installTearOff(H.dD.prototype,"geX",0,0,0,null,["$1"],["aD"],14)
installTearOff(H.eS.prototype,"ghE",0,0,0,null,["$1"],["b5"],14)
installTearOff(H,"yE",1,0,0,null,["$1"],["Im"],9)
installTearOff(P,"Ip",1,0,0,null,["$1"],["HL"],7)
installTearOff(P,"Iq",1,0,0,null,["$1"],["HM"],7)
installTearOff(P,"Ir",1,0,0,null,["$1"],["HN"],7)
installTearOff(P,"yQ",1,0,0,null,["$0"],["Il"],1)
installTearOff(P.kj.prototype,"geg",0,0,0,null,["$2","$1"],["cQ","bl"],8)
installTearOff(P.bq.prototype,"gbj",0,0,0,null,["$2","$1"],["ap","fE"],8)
var t
installTearOff(t=P.dt.prototype,"gdU",0,0,0,null,["$0"],["bU"],1)
installTearOff(t,"gdV",0,0,0,null,["$0"],["bV"],1)
installTearOff(t=P.i5.prototype,"gdU",0,0,0,null,["$0"],["bU"],1)
installTearOff(t,"gdV",0,0,0,null,["$0"],["bV"],1)
installTearOff(t,"gfQ",0,0,0,null,["$1"],["fR"],function(){return H.eV(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"i5")})
installTearOff(t,"gfU",0,0,0,null,["$2"],["fV"],18)
installTearOff(t,"gfS",0,0,0,null,["$0"],["fT"],1)
installTearOff(P.kq.prototype,"ghu",0,1,0,null,["$1"],["Z"],33)
installTearOff(P,"IA",1,0,0,null,["$2"],["Ap"],32)
installTearOff(P,"IB",1,0,0,null,["$1"],["fM"],4)
installTearOff(W,"IN",1,0,0,null,["$4"],["HS"],13)
installTearOff(W,"IO",1,0,0,null,["$4"],["HT"],13)
installTearOff(t=W.io.prototype,"gau",0,1,0,null,["$1"],["cT"],4)
installTearOff(t,"ghW",0,0,0,null,["$1"],["eu"],4)
installTearOff(t,"giG",0,0,0,null,["$1"],["iH"],4)
installTearOff(W.f5.prototype,"gY",0,1,0,null,["$1"],["M"],5)
installTearOff(W.ir.prototype,"gY",0,1,0,null,["$1"],["M"],16)
installTearOff(W.iw.prototype,"gY",0,1,0,null,["$1"],["M"],5)
installTearOff(W.ix.prototype,"gY",0,1,0,null,["$1"],["M"],9)
installTearOff(W.iy.prototype,"gY",0,1,0,null,["$1"],["M"],5)
installTearOff(W.fe.prototype,"gY",0,1,0,null,["$1"],["M"],17)
installTearOff(W.iP.prototype,"gY",0,1,0,null,["$1"],["M"],10)
installTearOff(W.fg.prototype,"gY",0,1,0,null,["$1"],["M"],11)
installTearOff(W.iR.prototype,"gY",0,1,0,null,["$1"],["M"],11)
installTearOff(W.jJ.prototype,"gY",0,1,0,null,["$1"],["M"],5)
installTearOff(W.jK.prototype,"gY",0,1,0,null,["$1"],["M"],12)
installTearOff(W.jN.prototype,"gd3",0,1,0,null,["$0"],["d4"],6)
installTearOff(W.cl.prototype,"gY",0,1,0,null,["$1"],["M"],12)
installTearOff(W.jX.prototype,"gY",0,1,0,null,["$1"],["M"],19)
installTearOff(W.k0.prototype,"gY",0,1,0,null,["$1"],["M"],10)
installTearOff(W.k2.prototype,"gY",0,1,0,null,["$1"],["M"],20)
installTearOff(W.k3.prototype,"gY",0,1,0,null,["$1"],["M"],21)
installTearOff(W.cn.prototype,"gY",0,1,0,null,["$1"],["M"],22)
installTearOff(W.k8.prototype,"gY",0,1,0,null,["$1"],["M"],23)
installTearOff(W.k9.prototype,"gY",0,1,0,null,["$1"],["M"],39)
installTearOff(t=W.ka.prototype,"gc8",0,1,0,null,["$0"],["ic"],6)
installTearOff(t,"gd3",0,1,0,null,["$0"],["d4"],6)
installTearOff(W.kb.prototype,"gY",0,1,0,null,["$1"],["M"],24)
installTearOff(W.i3.prototype,"gY",0,1,0,null,["$1"],["M"],25)
installTearOff(W.kk.prototype,"gY",0,1,0,null,["$1"],["M"],26)
installTearOff(W.kp.prototype,"gY",0,1,0,null,["$1"],["M"],27)
installTearOff(W.i9.prototype,"gY",0,1,0,null,["$1"],["M"],28)
installTearOff(W.kt.prototype,"gY",0,1,0,null,["$1"],["M"],35)
installTearOff(W.kv.prototype,"gY",0,1,0,null,["$1"],["M"],30)
installTearOff(P.k4.prototype,"gY",0,1,0,null,["$1"],["M"],31)
installTearOff(R,"eC",1,0,0,null,["$1"],["H2"],0)
installTearOff(R,"xP",1,0,0,null,["$1"],["GR"],0)
installTearOff(R,"vq",1,0,0,null,["$1"],["H1"],0)
installTearOff(R,"bW",1,0,0,null,["$1"],["H0"],0)
installTearOff(R,"vp",1,0,0,null,["$1"],["H_"],0)
installTearOff(R,"xR",1,0,0,null,["$1"],["GY"],0)
installTearOff(R,"hT",1,0,0,null,["$1"],["GX"],0)
installTearOff(R,"eB",1,0,0,null,["$1"],["GU"],0)
installTearOff(R,"ec",1,0,0,null,["$1"],["GW"],0)
installTearOff(R,"fu",1,0,0,null,["$1"],["GZ"],0)
installTearOff(R,"vo",1,0,0,null,["$1"],["GV"],0)
installTearOff(R,"A",1,0,0,null,["$1"],["GS"],0)
installTearOff(R,"xQ",1,0,0,null,["$1"],["GT"],0)
installTearOff(F.ex.prototype,"gau",0,1,0,null,["$1"],["cT"],4)
installTearOff(O,"IW",1,0,0,null,["$1"],["IY"],34)
installTearOff(Y.dR.prototype,"gik",0,0,0,null,["$1"],["eG"],function(){return H.eV(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dR")})
installTearOff(V,"J1",1,0,0,null,["$4"],["AK"],3)
installTearOff(V,"J0",1,0,0,null,["$4"],["AJ"],2)
installTearOff(B,"ii",1,0,0,null,["$1"],["Ig"],36)
installTearOff(T,"Iv",1,0,0,null,["$4"],["AA"],3)
installTearOff(T,"Iu",1,0,0,null,["$4"],["Az"],2)
installTearOff(T,"It",1,0,0,null,["$4"],["Ay"],3)
installTearOff(T,"Is",1,0,0,null,["$4"],["Ax"],2)
installTearOff(F,"II",1,0,0,null,["$4"],["AG"],3)
installTearOff(F,"IH",1,0,0,null,["$4"],["AF"],2)
installTearOff(F,"IG",1,0,0,null,["$4"],["AE"],3)
installTearOff(F,"IF",1,0,0,null,["$4"],["AD"],2)
installTearOff(F,"IE",1,0,0,null,["$4"],["AC"],3)
installTearOff(F,"ID",1,0,0,null,["$4"],["AB"],2)
installTearOff(S,"z7",1,0,0,null,["$0"],["ts"],37)
installTearOff(S,"J8",1,0,0,null,["$2"],["IT"],38)
installTearOff(S,"z8",1,0,0,null,["$1","$0"],["zb",function(){return S.zb(null)}],15)
installTearOff(S,"J9",1,0,0,null,["$1","$0"],["z2",function(){return S.z2(null)}],15)
installTearOff(S,"J7",1,0,0,null,["$1","$0"],["kC",function(){return S.kC(null)}],29)})();(function inheritance(){inherit(P.ap,null)
var t=P.ap
inherit(H.uT,t)
inherit(J.j,t)
inherit(J.ij,t)
inherit(P.fs,t)
inherit(P.n,t)
inherit(H.dQ,t)
inherit(P.jC,t)
inherit(H.iM,t)
inherit(H.q_,t)
inherit(H.f3,t)
inherit(H.rh,t)
inherit(H.fF,t)
inherit(H.qP,t)
inherit(H.eT,t)
inherit(H.rg,t)
inherit(H.qB,t)
inherit(H.fv,t)
inherit(H.pR,t)
inherit(H.dI,t)
inherit(H.dD,t)
inherit(H.eS,t)
inherit(H.lh,t)
inherit(H.oy,t)
inherit(H.pX,t)
inherit(P.ek,t)
inherit(H.he,t)
inherit(H.ku,t)
inherit(H.dX,t)
inherit(H.r,t)
inherit(H.nk,t)
inherit(H.nm,t)
inherit(H.hA,t)
inherit(H.ks,t)
inherit(H.kh,t)
inherit(H.k6,t)
inherit(H.rD,t)
inherit(P.c8,t)
inherit(P.f4,t)
inherit(P.kj,t)
inherit(P.ko,t)
inherit(P.bq,t)
inherit(P.ki,t)
inherit(P.ds,t)
inherit(P.p6,t)
inherit(P.dt,t)
inherit(P.kl,t)
inherit(P.qJ,t)
inherit(P.rk,t)
inherit(P.rB,t)
inherit(P.eY,t)
inherit(P.rU,t)
inherit(P.r7,t)
inherit(P.r9,t)
inherit(P.oP,t)
inherit(P.re,t)
inherit(P.d3,t)
inherit(P.fm,t)
inherit(P.b6,t)
inherit(P.rL,t)
inherit(P.nz,t)
inherit(P.rf,t)
inherit(P.h0,t)
inherit(P.h2,t)
inherit(P.rN,t)
inherit(P.cU,t)
inherit(P.bJ,t)
inherit(P.e3,t)
inherit(P.dw,t)
inherit(P.dL,t)
inherit(P.o7,t)
inherit(P.k5,t)
inherit(P.qT,t)
inherit(P.bN,t)
inherit(P.lN,t)
inherit(P.q,t)
inherit(P.bo,t)
inherit(P.cC,t)
inherit(P.dc,t)
inherit(P.dT,t)
inherit(P.z,t)
inherit(P.ch,t)
inherit(P.eN,t)
inherit(P.kx,t)
inherit(P.q0,t)
inherit(P.rz,t)
inherit(W.io,t)
inherit(W.jR,t)
inherit(W.iq,t)
inherit(W.qA,t)
inherit(P.ll,t)
inherit(W.i7,t)
inherit(W.bv,t)
inherit(W.jP,t)
inherit(W.ia,t)
inherit(W.rH,t)
inherit(W.iN,t)
inherit(W.ea,t)
inherit(W.rK,t)
inherit(W.rv,t)
inherit(W.ky,t)
inherit(P.rE,t)
inherit(P.qt,t)
inherit(P.rd,t)
inherit(P.rm,t)
inherit(P.rn,t)
inherit(P.bk,t)
inherit(P.dj,t)
inherit(T.fR,t)
inherit(T.dm,t)
inherit(T.hs,t)
inherit(T.o9,t)
inherit(T.qp,t)
inherit(T.qq,t)
inherit(T.qr,t)
inherit(T.qo,t)
inherit(T.mC,t)
inherit(T.iS,t)
inherit(B.ht,t)
inherit(N.a5,t)
inherit(L.fS,t)
inherit(A.jS,t)
inherit(O.c6,t)
inherit(T.hV,t)
inherit(M.fZ,t)
inherit(X.iB,t)
inherit(X.il,t)
inherit(M.hf,t)
inherit(Z.iA,t)
inherit(E.o4,t)
inherit(E.I,t)
inherit(A.Y,t)
inherit(U.b,t)
inherit(Y.dS,t)
inherit(K.cK,t)
inherit(X.G,t)
inherit(G.W,t)
inherit(A.fY,t)
inherit(B.dy,t)
inherit(B.dn,t)
inherit(A.dK,t)
inherit(F.hH,t)
inherit(F.ex,t)
inherit(Q.jV,t)
inherit(A.eE,t)
inherit(Y.dR,t)
inherit(O.cY,t)
inherit(D.cL,t)
inherit(B.pG,t)
inherit(B.d1,t)
inherit(Q.cD,t)
inherit(B.eP,t)
inherit(Q.h,t)
t=J.j
inherit(J.n3,t)
inherit(J.n4,t)
inherit(J.hB,t)
inherit(J.et,t)
inherit(J.fn,t)
inherit(J.eu,t)
inherit(H.fo,t)
inherit(H.ez,t)
inherit(W.aV,t)
inherit(W.cO,t)
inherit(W.f1,t)
inherit(W.lc,t)
inherit(W.h3,t)
inherit(W.lk,t)
inherit(W.bM,t)
inherit(W.iT,t)
inherit(W.lw,t)
inherit(W.f6,t)
inherit(W.ir,t)
inherit(W.iu,t)
inherit(W.lz,t)
inherit(W.iv,t)
inherit(W.iU,t)
inherit(W.ix,t)
inherit(W.iy,t)
inherit(W.h7,t)
inherit(W.S,t)
inherit(W.iV,t)
inherit(W.mg,t)
inherit(W.mj,t)
inherit(W.mm,t)
inherit(W.cq,t)
inherit(W.mx,t)
inherit(W.iW,t)
inherit(W.hr,t)
inherit(W.ed,t)
inherit(W.nt,t)
inherit(W.jJ,t)
inherit(W.cs,t)
inherit(W.j5,t)
inherit(W.nW,t)
inherit(W.nX,t)
inherit(W.jN,t)
inherit(W.j6,t)
inherit(W.oe,t)
inherit(W.eb,t)
inherit(W.ee,t)
inherit(W.cl,t)
inherit(W.j7,t)
inherit(W.k_,t)
inherit(W.oN,t)
inherit(W.cu,t)
inherit(W.j8,t)
inherit(W.fx,t)
inherit(W.cn,t)
inherit(W.p0,t)
inherit(W.p5,t)
inherit(W.pu,t)
inherit(W.co,t)
inherit(W.j9,t)
inherit(W.pQ,t)
inherit(W.cv,t)
inherit(W.ja,t)
inherit(W.fB,t)
inherit(W.k9,t)
inherit(W.ka,t)
inherit(W.q5,t)
inherit(W.q6,t)
inherit(W.fC,t)
inherit(W.kb,t)
inherit(W.qE,t)
inherit(W.jb,t)
inherit(W.jc,t)
inherit(W.iX,t)
inherit(W.iY,t)
inherit(W.iZ,t)
inherit(W.j_,t)
inherit(W.rS,t)
inherit(W.rT,t)
inherit(P.mI,t)
inherit(P.o3,t)
inherit(P.da,t)
inherit(P.j0,t)
inherit(P.dd,t)
inherit(P.j1,t)
inherit(P.om,t)
inherit(P.j2,t)
inherit(P.di,t)
inherit(P.j3,t)
inherit(P.qc,t)
inherit(P.fU,t)
inherit(P.kP,t)
inherit(P.oA,t)
inherit(P.rR,t)
inherit(P.j4,t)
t=J.hB
inherit(J.ok,t)
inherit(J.eM,t)
inherit(J.ev,t)
inherit(F.uW,t)
inherit(R.hn,t)
inherit(R.ve,t)
inherit(R.vd,t)
inherit(S.fr,t)
inherit(S.vI,t)
inherit(S.vJ,t)
inherit(S.vK,t)
inherit(S.u1,t)
inherit(S.u4,t)
inherit(S.tR,t)
inherit(S.vM,t)
inherit(S.vN,t)
inherit(S.lt,t)
inherit(S.vy,t)
inherit(S.vz,t)
inherit(S.tL,t)
inherit(S.mr,t)
inherit(S.l7,t)
inherit(S.tQ,t)
inherit(S.tP,t)
inherit(S.u3,t)
inherit(S.pN,t)
inherit(S.tU,t)
inherit(S.hJ,t)
inherit(S.v3,t)
inherit(S.v5,t)
inherit(S.vt,t)
inherit(S.vu,t)
inherit(S.v8,t)
inherit(S.v9,t)
inherit(S.ui,t)
inherit(S.uj,t)
inherit(S.va,t)
inherit(S.v6,t)
inherit(S.tN,t)
inherit(S.vF,t)
inherit(S.vG,t)
inherit(S.vE,t)
inherit(Z.uR,t)
inherit(Z.uN,t)
inherit(Z.uO,t)
inherit(J.uS,J.et)
t=J.fn
inherit(J.jE,t)
inherit(J.jD,t)
inherit(P.hF,P.fs)
t=P.hF
inherit(H.i_,t)
inherit(W.kn,t)
inherit(W.d2,t)
inherit(H.le,H.i_)
t=P.n
inherit(H.v,t)
inherit(H.hI,t)
inherit(H.ef,t)
inherit(P.hy,t)
inherit(H.rC,t)
t=H.v
inherit(H.ew,t)
inherit(H.nl,t)
inherit(P.r8,t)
inherit(P.eG,t)
t=H.ew
inherit(H.pv,t)
inherit(H.ey,t)
inherit(P.nn,t)
inherit(H.f7,H.hI)
t=P.jC
inherit(H.jI,t)
inherit(H.kd,t)
inherit(Q.qg,t)
t=H.f3
inherit(H.tA,t)
inherit(H.tB,t)
inherit(H.rc,t)
inherit(H.qQ,t)
inherit(H.mM,t)
inherit(H.mN,t)
inherit(H.rj,t)
inherit(H.pS,t)
inherit(H.pT,t)
inherit(H.tC,t)
inherit(H.tm,t)
inherit(H.tn,t)
inherit(H.to,t)
inherit(H.tp,t)
inherit(H.tq,t)
inherit(H.pC,t)
inherit(H.n7,t)
inherit(H.n6,t)
inherit(H.ti,t)
inherit(H.tj,t)
inherit(H.tk,t)
inherit(P.qx,t)
inherit(P.qw,t)
inherit(P.qy,t)
inherit(P.qz,t)
inherit(P.rV,t)
inherit(P.rW,t)
inherit(P.t5,t)
inherit(P.t7,t)
inherit(P.mp,t)
inherit(P.mo,t)
inherit(P.qU,t)
inherit(P.r1,t)
inherit(P.qY,t)
inherit(P.qZ,t)
inherit(P.r_,t)
inherit(P.qW,t)
inherit(P.r0,t)
inherit(P.qV,t)
inherit(P.r4,t)
inherit(P.r5,t)
inherit(P.r3,t)
inherit(P.r2,t)
inherit(P.p9,t)
inherit(P.p7,t)
inherit(P.p8,t)
inherit(P.pa,t)
inherit(P.pf,t)
inherit(P.pd,t)
inherit(P.pe,t)
inherit(P.pg,t)
inherit(P.pj,t)
inherit(P.pk,t)
inherit(P.ph,t)
inherit(P.pi,t)
inherit(P.pl,t)
inherit(P.pm,t)
inherit(P.pb,t)
inherit(P.pc,t)
inherit(P.qD,t)
inherit(P.qC,t)
inherit(P.rl,t)
inherit(P.rY,t)
inherit(P.rX,t)
inherit(P.rZ,t)
inherit(P.t4,t)
inherit(P.rp,t)
inherit(P.rq,t)
inherit(P.rr,t)
inherit(P.ra,t)
inherit(P.nA,t)
inherit(P.rP,t)
inherit(P.rO,t)
inherit(P.lD,t)
inherit(P.lE,t)
inherit(P.q4,t)
inherit(P.q1,t)
inherit(P.q2,t)
inherit(P.q3,t)
inherit(P.t8,t)
inherit(P.t1,t)
inherit(P.t0,t)
inherit(P.t2,t)
inherit(P.t3,t)
inherit(W.qG,t)
inherit(W.t6,t)
inherit(W.mA,t)
inherit(W.mB,t)
inherit(W.qS,t)
inherit(W.nZ,t)
inherit(W.nY,t)
inherit(W.rx,t)
inherit(W.ry,t)
inherit(W.rJ,t)
inherit(W.rQ,t)
inherit(P.rG,t)
inherit(P.qu,t)
inherit(P.ta,t)
inherit(P.tb,t)
inherit(P.tc,t)
inherit(P.lm,t)
inherit(P.t_,t)
inherit(P.kU,t)
inherit(P.kV,t)
inherit(O.md,t)
inherit(O.me,t)
inherit(O.mf,t)
inherit(O.l2,t)
inherit(Z.mn,t)
inherit(A.n2,t)
inherit(A.n1,t)
inherit(G.n_,t)
inherit(U.qk,t)
inherit(U.ql,t)
inherit(A.t9,t)
inherit(A.nr,t)
inherit(A.np,t)
inherit(A.nq,t)
inherit(A.ns,t)
inherit(O.tv,t)
inherit(O.tw,t)
inherit(O.tu,t)
inherit(V.lK,t)
inherit(V.lJ,t)
inherit(V.lI,t)
inherit(V.lH,t)
inherit(D.p4,t)
inherit(B.pI,t)
inherit(B.pH,t)
inherit(Q.qh,t)
t=H.qB
inherit(H.fG,t)
inherit(H.ic,t)
inherit(H.li,H.lh)
t=P.ek
inherit(H.jQ,t)
inherit(H.n8,t)
inherit(H.pZ,t)
inherit(H.la,t)
inherit(H.oE,t)
inherit(P.fq,t)
inherit(P.cW,t)
inherit(P.V,t)
inherit(P.eL,t)
inherit(P.dg,t)
inherit(P.by,t)
inherit(P.lv,t)
t=H.pC
inherit(H.p2,t)
inherit(H.fW,t)
t=P.hy
inherit(H.qv,t)
inherit(T.fQ,t)
t=H.ez
inherit(H.nO,t)
inherit(H.jL,t)
t=H.jL
inherit(H.hO,t)
inherit(H.hP,t)
inherit(H.hQ,H.hO)
inherit(H.hM,H.hQ)
inherit(H.hR,H.hP)
inherit(H.hN,H.hR)
t=H.hM
inherit(H.nP,t)
inherit(H.nQ,t)
t=H.hN
inherit(H.nR,t)
inherit(H.nS,t)
inherit(H.nT,t)
inherit(H.nU,t)
inherit(H.nV,t)
inherit(H.jM,t)
inherit(H.fp,t)
t=P.kj
inherit(P.dZ,t)
inherit(P.kw,t)
t=P.kl
inherit(P.qI,t)
inherit(P.qK,t)
inherit(P.rA,P.rk)
t=P.ds
inherit(P.i4,t)
inherit(W.km,t)
inherit(P.i5,P.dt)
inherit(P.ri,P.i4)
inherit(P.ro,P.rU)
inherit(P.kr,H.r)
inherit(P.oO,P.oP)
inherit(P.rb,P.oO)
inherit(P.kq,P.rb)
inherit(P.i0,P.nz)
t=P.h0
inherit(P.kZ,t)
inherit(P.lG,t)
t=P.h2
inherit(P.l_,t)
inherit(P.q9,t)
inherit(P.q8,P.lG)
t=P.dw
inherit(P.U,t)
inherit(P.F,t)
t=P.cW
inherit(P.eF,t)
inherit(P.mJ,t)
inherit(P.qH,P.kx)
t=W.aV
inherit(W.at,t)
inherit(W.h8,t)
inherit(W.lg,t)
inherit(W.iL,t)
inherit(W.mh,t)
inherit(W.mk,t)
inherit(W.hq,t)
inherit(W.hL,t)
inherit(W.op,t)
inherit(W.jZ,t)
inherit(W.oQ,t)
inherit(W.eQ,t)
inherit(W.ct,t)
inherit(W.h9,t)
inherit(W.cT,t)
inherit(W.cM,t)
inherit(W.ha,t)
inherit(W.qa,t)
inherit(W.qf,t)
inherit(W.ke,t)
inherit(W.qm,t)
inherit(W.rw,t)
inherit(P.lx,t)
inherit(P.hU,t)
inherit(P.pV,t)
inherit(P.bI,t)
inherit(P.fV,t)
t=W.at
inherit(W.cy,t)
inherit(W.ei,t)
inherit(W.ej,t)
inherit(W.it,t)
inherit(W.fD,t)
inherit(W.qL,t)
t=W.cy
inherit(W.b3,t)
inherit(P.cb,t)
t=W.b3
inherit(W.eX,t)
inherit(W.kQ,t)
inherit(W.hK,t)
inherit(W.l0,t)
inherit(W.f2,t)
inherit(W.h_,t)
inherit(W.lF,t)
inherit(W.mc,t)
inherit(W.iP,t)
inherit(W.mF,t)
inherit(W.fi,t)
inherit(W.mK,t)
inherit(W.nb,t)
inherit(W.nd,t)
inherit(W.hD,t)
inherit(W.ny,t)
inherit(W.nE,t)
inherit(W.nF,t)
inherit(W.nG,t)
inherit(W.nH,t)
inherit(W.o1,t)
inherit(W.o2,t)
inherit(W.o6,t)
inherit(W.o8,t)
inherit(W.oc,t)
inherit(W.ot,t)
inherit(W.fw,t)
inherit(W.k0,t)
inherit(W.oS,t)
inherit(W.oW,t)
inherit(W.hX,t)
inherit(W.ps,t)
inherit(W.k7,t)
inherit(W.pz,t)
inherit(W.pA,t)
inherit(W.hY,t)
inherit(W.pF,t)
inherit(W.r6,t)
inherit(W.f_,W.hK)
inherit(W.hb,W.h8)
inherit(W.kX,W.hb)
t=W.bM
inherit(W.ln,t)
inherit(W.lo,t)
inherit(W.h4,t)
inherit(W.h5,t)
inherit(W.lp,t)
inherit(W.lq,t)
inherit(W.lr,t)
inherit(W.f5,W.iT)
inherit(W.qF,W.jR)
inherit(W.jd,W.iU)
inherit(W.iw,W.jd)
t=W.S
inherit(W.lL,t)
inherit(W.oZ,t)
inherit(W.p_,t)
inherit(W.cj,W.f1)
inherit(W.je,W.iV)
inherit(W.fe,W.je)
inherit(W.jf,W.iW)
inherit(W.fg,W.jf)
inherit(W.iR,W.fg)
inherit(W.e7,W.hq)
inherit(W.hC,W.ed)
inherit(W.nI,W.hL)
inherit(W.jp,W.j5)
inherit(W.jK,W.jp)
inherit(W.jq,W.j6)
inherit(W.jO,W.jq)
inherit(W.oj,W.ee)
inherit(W.jr,W.j7)
inherit(W.jX,W.jr)
inherit(W.oR,W.eQ)
inherit(W.hc,W.h9)
inherit(W.k2,W.hc)
inherit(W.js,W.j8)
inherit(W.k3,W.js)
inherit(W.jt,W.j9)
inherit(W.pL,W.jt)
inherit(W.hd,W.ha)
inherit(W.pM,W.hd)
inherit(W.ju,W.ja)
inherit(W.k8,W.ju)
inherit(W.jv,W.jb)
inherit(W.i3,W.jv)
inherit(W.jw,W.jc)
inherit(W.kk,W.jw)
inherit(W.qM,W.iv)
inherit(W.jg,W.iX)
inherit(W.kp,W.jg)
inherit(W.jh,W.iY)
inherit(W.i9,W.jh)
inherit(W.ji,W.iZ)
inherit(W.kt,W.ji)
inherit(W.jj,W.j_)
inherit(W.kv,W.jj)
inherit(W.qN,W.qA)
t=P.ll
inherit(W.qO,t)
inherit(P.kT,t)
inherit(W.e_,W.km)
inherit(W.qR,P.p6)
inherit(W.rI,W.ia)
inherit(P.rF,P.rE)
inherit(P.kg,P.qt)
inherit(P.bX,P.rn)
t=P.cb
inherit(P.cr,t)
inherit(P.eh,t)
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
inherit(P.m_,t)
inherit(P.m0,t)
inherit(P.m1,t)
inherit(P.m2,t)
inherit(P.mi,t)
inherit(P.nB,t)
inherit(P.nC,t)
inherit(P.oh,t)
inherit(P.hW,t)
inherit(P.pt,t)
inherit(P.py,t)
inherit(P.qb,t)
inherit(P.i6,t)
inherit(P.rs,t)
inherit(P.rt,t)
inherit(P.ru,t)
t=P.cr
inherit(P.kN,t)
inherit(P.mG,t)
inherit(P.pw,t)
inherit(P.eK,t)
inherit(P.q7,t)
inherit(P.jk,P.j0)
inherit(P.ng,P.jk)
inherit(P.jl,P.j1)
inherit(P.o_,P.jl)
inherit(P.jm,P.j2)
inherit(P.pq,P.jm)
inherit(P.pK,P.eK)
inherit(P.jn,P.j3)
inherit(P.pW,P.jn)
t=P.bI
inherit(P.f0,t)
inherit(P.l3,t)
inherit(P.lj,t)
t=P.f0
inherit(P.eZ,t)
inherit(P.jT,t)
inherit(P.jo,P.j4)
inherit(P.k4,P.jo)
t=B.ht
inherit(S.kO,t)
inherit(M.kS,t)
inherit(A.lf,t)
inherit(M.ls,t)
inherit(V.lA,t)
inherit(U.m3,t)
inherit(N.na,t)
inherit(F.nM,t)
inherit(G.on,t)
inherit(Q.oC,t)
inherit(N.oU,t)
inherit(D.pD,t)
inherit(V.pE,t)
inherit(F.qn,t)
t=N.a5
inherit(T.ly,t)
inherit(R.ou,t)
t=T.ly
inherit(K.bY,t)
inherit(S.bK,t)
inherit(T.ca,t)
inherit(M.bD,t)
inherit(A.ob,A.jS)
inherit(L.aa,A.ob)
t=O.c6
inherit(O.dx,t)
inherit(O.iz,t)
inherit(O.eJ,t)
t=O.dx
inherit(U.kW,t)
inherit(Y.ow,t)
inherit(V.ml,t)
inherit(Q.mH,t)
inherit(Q.oi,t)
inherit(M.p1,t)
inherit(B.qs,t)
t=U.kW
inherit(U.nv,t)
inherit(U.o5,t)
inherit(U.pn,O.iz)
t=U.pn
inherit(U.po,t)
inherit(U.pp,t)
t=T.hV
inherit(O.kY,t)
inherit(Y.ms,t)
inherit(Y.mt,t)
inherit(B.mv,t)
inherit(X.mD,t)
inherit(Q.mE,t)
inherit(S.nc,t)
inherit(Z.nu,t)
inherit(S.nw,t)
inherit(U.nx,t)
inherit(E.nL,t)
inherit(V.oa,t)
inherit(N.os,t)
inherit(N.oB,t)
inherit(E.oG,t)
inherit(Y.oH,t)
inherit(Y.oJ,t)
inherit(L.oK,t)
inherit(S.oM,t)
inherit(Y.oT,t)
inherit(R.px,t)
inherit(U.pO,t)
inherit(E.qe,t)
inherit(M.qi,t)
t=O.eJ
inherit(Y.pJ,t)
inherit(Y.l8,t)
inherit(Y.o0,t)
inherit(U.qj,t)
t=L.fS
inherit(L.l1,t)
inherit(T.l4,t)
inherit(T.l6,t)
inherit(S.lb,t)
inherit(U.lB,t)
inherit(Z.lC,t)
inherit(T.mu,t)
inherit(V.mw,t)
inherit(X.my,t)
inherit(Z.n9,t)
inherit(Q.nf,t)
inherit(K.nh,t)
inherit(G.ni,t)
inherit(D.nD,t)
inherit(V.nJ,t)
inherit(E.ov,t)
inherit(V.oD,t)
inherit(K.oI,t)
inherit(N.oX,t)
inherit(A.nK,t)
inherit(A.oY,t)
inherit(A.oo,t)
inherit(A.oV,t)
inherit(A.pU,t)
inherit(A.ox,t)
inherit(A.mq,t)
inherit(L.pB,t)
inherit(N.pP,t)
inherit(Q.qd,t)
t=S.bK
inherit(S.im,t)
inherit(S.mz,t)
inherit(E.iQ,E.o4)
t=E.I
inherit(E.fT,t)
inherit(E.ik,t)
inherit(Q.ol,Q.mH)
inherit(U.X,U.b)
t=R.ou
inherit(R.a1,t)
inherit(R.R,t)
inherit(R.a8,t)
inherit(R.bC,R.a8)
t=Y.dS
inherit(Y.ar,t)
inherit(Y.c7,t)
inherit(Y.T,t)
inherit(Y.ip,t)
inherit(Y.bE,t)
inherit(Y.d_,t)
inherit(Y.ld,t)
inherit(Y.jU,t)
inherit(Y.iO,t)
inherit(Y.jW,t)
t=Y.c7
inherit(Y.d6,t)
inherit(Y.bz,t)
inherit(U.aw,A.Y)
t=G.W
inherit(G.aY,t)
inherit(G.bL,t)
inherit(G.e,t)
inherit(G.au,G.bL)
t=D.cL
inherit(D.kf,t)
inherit(D.oz,t)
t=Q.cD
inherit(Q.i2,t)
inherit(Q.i1,t)
inherit(Q.dY,Q.i2)
inherit(B.eO,Q.dY)
t=S.fr
inherit(S.vr,t)
inherit(S.l9,t)
inherit(S.nj,t)
inherit(S.v1,t)
inherit(S.uh,t)
t=S.l9
inherit(S.vh,t)
inherit(S.vb,t)
t=S.nj
inherit(S.tW,t)
inherit(S.tM,t)
t=S.lt
inherit(S.uX,t)
inherit(S.lu,t)
inherit(S.od,S.lu)
inherit(S.vv,S.od)
t=S.l7
inherit(S.vi,t)
inherit(S.vw,t)
t=S.mr
inherit(S.vA,t)
inherit(S.vj,t)
inherit(S.u2,t)
inherit(S.vx,t)
t=S.pN
inherit(S.vD,t)
inherit(S.tT,t)
inherit(S.vL,t)
t=S.hJ
inherit(S.v2,t)
inherit(S.v4,t)
inherit(S.vs,t)
inherit(Q.eR,Q.i1)
inherit(Q.kc,Q.eR)
mixin(H.i_,H.q_)
mixin(H.hO,P.b6)
mixin(H.hQ,H.iM)
mixin(H.hP,P.b6)
mixin(H.hR,H.iM)
mixin(P.fs,P.b6)
mixin(P.i0,P.rL)
mixin(W.h8,P.b6)
mixin(W.hb,W.bv)
mixin(W.iT,W.iq)
mixin(W.jR,W.iq)
mixin(W.iU,P.b6)
mixin(W.jd,W.bv)
mixin(W.iV,P.b6)
mixin(W.je,W.bv)
mixin(W.iW,P.b6)
mixin(W.jf,W.bv)
mixin(W.j5,P.b6)
mixin(W.jp,W.bv)
mixin(W.j6,P.b6)
mixin(W.jq,W.bv)
mixin(W.j7,P.b6)
mixin(W.jr,W.bv)
mixin(W.h9,P.b6)
mixin(W.hc,W.bv)
mixin(W.j8,P.b6)
mixin(W.js,W.bv)
mixin(W.j9,P.b6)
mixin(W.jt,W.bv)
mixin(W.ha,P.b6)
mixin(W.hd,W.bv)
mixin(W.ja,P.b6)
mixin(W.ju,W.bv)
mixin(W.jb,P.b6)
mixin(W.jv,W.bv)
mixin(W.jc,P.b6)
mixin(W.jw,W.bv)
mixin(W.iX,P.b6)
mixin(W.jg,W.bv)
mixin(W.iY,P.b6)
mixin(W.jh,W.bv)
mixin(W.iZ,P.b6)
mixin(W.ji,W.bv)
mixin(W.j_,P.b6)
mixin(W.jj,W.bv)
mixin(P.j0,P.b6)
mixin(P.jk,W.bv)
mixin(P.j1,P.b6)
mixin(P.jl,W.bv)
mixin(P.j2,P.b6)
mixin(P.jm,W.bv)
mixin(P.j3,P.b6)
mixin(P.jn,W.bv)
mixin(P.j4,P.b6)
mixin(P.jo,W.bv)
mixin(A.jS,P.fm)
mixin(Q.i2,P.b6)
mixin(Q.i1,P.fm)})();(function constants(){C.v=W.f2.prototype
C.x=W.iL.prototype
C.R=W.e7.prototype
C.S=J.j.prototype
C.b=J.et.prototype
C.f=J.jD.prototype
C.a=J.jE.prototype
C.d=J.fn.prototype
C.c=J.eu.prototype
C.Z=J.ev.prototype
C.r=H.fp.prototype
C.K=J.ok.prototype
C.L=W.k7.prototype
C.u=J.eM.prototype
C.N=new P.l_(!1)
C.M=new P.kZ(C.N)
C.j=new W.io()
C.O=new P.o7()
C.P=new P.qJ()
C.Q=new P.rd()
C.e=new P.ro()
C.w=new W.rK()
C.o=new P.dL(0)
C.T=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.y=function(hooks) { return hooks; }
C.U=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.V=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.W=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.z=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.X=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.Y=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.A=H.a(makeConstList([127,2047,65535,1114111]),[P.F])
C.B=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.k=makeConstList([0,0,32776,33792,1,10240,0,0])
C.a_=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.z])
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
C.p=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.z])
C.q=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.z])
C.i=new F.hH(0,"LogLevel.ERROR")
C.h=new F.hH(1,"LogLevel.WARN")
C.a5=new F.hH(3,"LogLevel.VERBOSE")
C.a3=H.a(makeConstList([]),[P.z])
C.a6=new H.li(0,{},C.a3,[P.z,P.z])
C.a7=H.c3("bk")
C.a8=H.c3("Jc")
C.t=H.c3("Jd")
C.a9=H.c3("Je")
C.aa=H.c3("Jf")
C.ab=H.c3("Jh")
C.ac=H.c3("Ji")
C.ad=H.c3("Jj")
C.ae=H.c3("n5")
C.af=H.c3("cC")
C.ag=H.c3("z")
C.ah=H.c3("Jl")
C.ai=H.c3("Jm")
C.aj=H.c3("Jn")
C.ak=H.c3("dj")
C.al=H.c3("cU")
C.am=H.c3("U")
C.an=H.c3("F")
C.ao=H.c3("dw")
C.n=new P.q8(!1)})();(function staticFields(){$.xK="$cachedFunction"
$.xL="$cachedInvocation"
$.dJ=0
$.fX=null
$.wo=null
$.vZ=null
$.yN=null
$.z1=null
$.te=null
$.tl=null
$.w_=null
$.fI=null
$.id=null
$.ie=null
$.vV=!1
$.aF=C.e
$.wG=0
$.e4=null
$.tX=null
$.wE=null
$.wD=null
$.wA=null
$.wz=null
$.wy=null
$.wB=null
$.wx=null
$.Aa=null
$.Ad=null
$.zP=null
$.zR=null
$.zO=null
$.zU=null
$.A1=null
$.A_=null
$.Af=null
$.A5=null
$.zW=null
$.zZ=null
$.zS=null
$.zY=null
$.A8=null
$.zX=null
$.Ac=null
$.A7=null
$.zV=null
$.zN=null
$.A2=null
$.Ab=null
$.A4=null
$.A9=null
$.Ae=null
$.A6=null
$.zT=null
$.A0=null
$.zQ=null
$.A3=null
$.ab="accent"
$.ad="aspect1"
$.ac="aspect2"
$.am="shoe1"
$.al="shoe2"
$.af="cloak1"
$.ag="cloak2"
$.ae="cloak3"
$.ak="shirt1"
$.aj="shirt2"
$.ai="pants1"
$.ah="pants2"
$.ay=1300
$.k=3
$.m=2
$.L=1
$.C=0.1
$.AU=1
$.AT=-1
$.ub=null
$.e5=null
$.wH=null
$.en=null
$.fc=null
$.iE=null
$.u5=null
$.m6=null
$.ud=null
$.iF=null
$.iC=null
$.wJ=null
$.iK=null
$.hg=null
$.dP=null
$.wI=null
$.m4=null
$.mb=null
$.fa=null
$.AR=null
$.AO=null
$.AQ=null
$.AS=null
$.hm=null
$.f8=null
$.cA=null
$.d7=null
$.ep=null
$.ma=null
$.cf=null
$.ce=null
$.u7=null
$.hk=null
$.em=null
$.AP=null
$.hj=null
$.cI=null
$.e6=null
$.iJ=null
$.cP=null
$.fb=null
$.c5=null
$.m8=null
$.m5=null
$.b2=null
$.cH=null
$.cd=null
$.ci=null
$.m7=null
$.bS=null
$.dB=null
$.dA=null
$.dz=null
$.dN=null
$.dO=null
$.dM=null
$.d9=null
$.hl=null
$.iI=null
$.iD=null
$.cX=null
$.cz=null
$.bl=null
$.f9=null
$.eo=null
$.m9=null
$.hi=null
$.hh=null
$.u9=null
$.cG=null
$.uc=null
$.u6=null
$.wL=null
$.el=null
$.cF=null
$.d8=null
$.dp=null
$.fd=null
$.u8=null
$.ua=null
$.wK=null
$.iG=null
$.iH=null
$.eq=null
$.wM=!1
$.uf=null
$.AW=null
$.wO=null
$.wR=null
$.wQ=null
$.wP=null
$.B3=null
$.B4=null
$.ue=null
$.B0=null
$.AZ=null
$.B_=null
$.B1=null
$.B2=null
$.Bf=null
$.B8=null
$.B9=null
$.Ba=null
$.Bb=null
$.Bc=null
$.Bd=null
$.Be=null
$.Bh=null
$.Bi=null
$.Bj=null
$.Bk=null
$.Bl=null
$.Bm=null
$.Bg=null
$.Gx="JACK"
$.GB="PM"
$.Gy="JS"
$.Gw="HP"
$.GG="YD"
$.GD="SI"
$.GE="SU"
$.Gz="ME"
$.GC="RB"
$.Gu="GN"
$.xE="MP"
$.Gs="AR"
$.GA="PE"
$.Gt="DP"
$.GF="WV"
$.Gv="HB"
$.o="PLAYER1TAG"
$.eD="PLAYER2TAG"
$.B="DENIZENTAG"
$.u="CONSORTTAG"
$.M="CONSORTSOUNDTAG"
$.aX="MCGUFFINTAG"
$.aq="TAGPHYSICALMCGUFFIN"
$.cm="TAGWEAPON"
$.Hd=null
$.Hq=null
$.H7=null
$.Ha=null
$.Hg=null
$.Hl=null
$.Hj=null
$.Ht=null
$.Hs=null
$.Hk=null
$.Hv=null
$.Hf=null
$.Hu=null
$.Ho=null
$.Hm=null
$.Hp=null
$.H9=null
$.H8=null
$.Hi=null
$.Hh=null
$.He=null
$.Hr=null
$.Hb=null
$.Hc=null
$.Hn=null
$.yU=!1
$.Hw=!1
$.xT=null
$.HD=13
$.av=3
$.bP=2
$.aS=1
$.n0=0
$.K=1
$.a6=3
$.J=4
$.uK=6
$.uL=7
$.ao=8
$.x=9
$.t=10
$.fk=null
$.es=null
$.uv=null
$.uG=null
$.uC=null
$.wY=null
$.ur=null
$.uB=null
$.hw=null
$.x6=null
$.xo=null
$.x0=null
$.x7=null
$.us=null
$.uA=null
$.xr=null
$.xt=null
$.uo=null
$.jy=null
$.jx=null
$.aL=null
$.xi=null
$.um=null
$.xf=null
$.fl=null
$.x_=null
$.xu=null
$.xq=null
$.xn=null
$.uz=null
$.mU=null
$.er=null
$.xs=null
$.mQ=null
$.ut=null
$.e8=null
$.xl=null
$.dq=null
$.hv=null
$.uJ=null
$.xm=null
$.uI=null
$.uD=null
$.uF=null
$.mY=null
$.hu=null
$.BL=null
$.x9=null
$.xe=null
$.xk=null
$.xj=null
$.D=null
$.x4=null
$.mR=null
$.bT=null
$.ba=null
$.bU=null
$.Z=null
$.aP=null
$.c9=null
$.O=null
$.Q=null
$.aJ=null
$.b4=null
$.bZ=null
$.bm=null
$.bs=null
$.ck=null
$.b7=null
$.bB=null
$.bV=null
$.a_=null
$.G5=null
$.aK=null
$.b5=null
$.aZ=null
$.an=null
$.cg=null
$.b1=null
$.aI=null
$.bF=null
$.b_=null
$.aA=null
$.br=null
$.c_=null
$.aO=null
$.bu=null
$.bp=null
$.a3=null
$.bO=null
$.a7=null
$.be=null
$.bt=null
$.b0=null
$.bn=null
$.aM=null
$.b8=null
$.aN=null
$.a0=null
$.aB=null
$.aQ=null
$.b9=null
$.aH=null
$.az=null
$.a4=null
$.H=null
$.P=null
$.as=null
$.ax=null
$.aW=null
$.aT=null
$.D2=null
$.FI=null
$.Gg=null
$.Cz=null
$.FF=null
$.D3=null
$.wX=null
$.FU=null
$.E2=null
$.CZ=null
$.BH=null
$.ED=null
$.jz=null
$.x1=null
$.F2=null
$.Cw=null
$.DM=null
$.Cu=null
$.up=null
$.Cf=null
$.Df=null
$.CD=null
$.DW=null
$.G1=null
$.D4=null
$.mS=null
$.DX=null
$.CB=null
$.Cl=null
$.uE=null
$.BA=null
$.ul=null
$.DF=null
$.ux=null
$.Eh=null
$.Eb=null
$.BE=null
$.Co=null
$.Fc=null
$.BG=null
$.FE=null
$.DL=null
$.CK=null
$.EX=null
$.Fy=null
$.mT=null
$.E6=null
$.EU=null
$.CC=null
$.Bt=null
$.G4=null
$.DP=null
$.Ck=null
$.FT=null
$.Ek=null
$.Cr=null
$.FD=null
$.CU=null
$.Fk=null
$.Fl=null
$.BC=null
$.Ed=null
$.CE=null
$.CO=null
$.Gk=null
$.hx=null
$.Fa=null
$.FB=null
$.mW=null
$.C9=null
$.Eu=null
$.Ey=null
$.Bz=null
$.CT=null
$.FC=null
$.Ej=null
$.FW=null
$.EZ=null
$.Ez=null
$.xd=null
$.Fo=null
$.Ga=null
$.FH=null
$.Ds=null
$.EL=null
$.Dt=null
$.Fd=null
$.G8=null
$.DV=null
$.CQ=null
$.Dc=null
$.C0=null
$.EV=null
$.Da=null
$.Dh=null
$.CG=null
$.Fn=null
$.fj=null
$.Eo=null
$.xb=null
$.Du=null
$.xc=null
$.Gd=null
$.C5=null
$.F8=null
$.F9=null
$.F7=null
$.F6=null
$.Fu=null
$.Di=null
$.Ee=null
$.Fx=null
$.E5=null
$.Ep=null
$.x3=null
$.G7=null
$.Ec=null
$.CW=null
$.CX=null
$.Ex=null
$.Gj=null
$.DJ=null
$.G6=null
$.uy=null
$.Fj=null
$.DT=null
$.jA=null
$.DD=null
$.EN=null
$.C4=null
$.D_=null
$.Ff=null
$.Ef=null
$.G0=null
$.xg=null
$.En=null
$.Cb=null
$.Cx=null
$.EJ=null
$.FO=null
$.Fe=null
$.mO=null
$.uH=null
$.Fq=null
$.G9=null
$.Dr=null
$.BP=null
$.BY=null
$.FM=null
$.Er=null
$.E3=null
$.Es=null
$.FJ=null
$.DE=null
$.BD=null
$.Dg=null
$.E1=null
$.Fs=null
$.D9=null
$.C3=null
$.F4=null
$.F5=null
$.FZ=null
$.Fh=null
$.mX=null
$.x2=null
$.Cs=null
$.x5=null
$.Dy=null
$.mV=null
$.EP=null
$.Ea=null
$.F0=null
$.uu=null
$.mZ=null
$.uw=null
$.CM=null
$.De=null
$.xh=null
$.x8=null
$.Cn=null
$.FQ=null
$.Cg=null
$.EB=null
$.Dv=null
$.Fw=null
$.E4=null
$.BM=null
$.Dw=null
$.CJ=null
$.EF=null
$.DO=null
$.E9=null
$.DU=null
$.DY=null
$.F3=null
$.F_=null
$.Bw=null
$.FN=null
$.ES=null
$.CA=null
$.CF=null
$.Dd=null
$.FK=null
$.D6=null
$.DQ=null
$.BT=null
$.D0=null
$.CI=null
$.Et=null
$.CR=null
$.Fb=null
$.DS=null
$.wZ=null
$.EO=null
$.Dx=null
$.D7=null
$.Bu=null
$.BB=null
$.Eq=null
$.EA=null
$.DN=null
$.Dp=null
$.G3=null
$.BW=null
$.D8=null
$.DR=null
$.Cy=null
$.xp=null
$.Cm=null
$.Fg=null
$.BU=null
$.FP=null
$.E_=null
$.BO=null
$.EY=null
$.EK=null
$.Ct=null
$.Dj=null
$.Ca=null
$.FL=null
$.DB=null
$.G_=null
$.Cc=null
$.Dk=null
$.Cd=null
$.Cv=null
$.ER=null
$.Cp=null
$.DC=null
$.Eg=null
$.C6=null
$.Fv=null
$.Gf=null
$.Fm=null
$.E7=null
$.Ft=null
$.E8=null
$.BJ=null
$.Bv=null
$.E0=null
$.BR=null
$.Ce=null
$.BK=null
$.BN=null
$.Em=null
$.EG=null
$.FS=null
$.Dz=null
$.Ge=null
$.EW=null
$.ET=null
$.DG=null
$.DA=null
$.Ci=null
$.Dn=null
$.DZ=null
$.Ev=null
$.Fp=null
$.By=null
$.Gb=null
$.CP=null
$.Fz=null
$.CH=null
$.BI=null
$.C7=null
$.C_=null
$.Gi=null
$.C8=null
$.CS=null
$.Ch=null
$.FY=null
$.Fr=null
$.FR=null
$.Bx=null
$.F1=null
$.DH=null
$.DK=null
$.G2=null
$.FA=null
$.xa=null
$.CY=null
$.EI=null
$.Gc=null
$.D1=null
$.DI=null
$.uq=null
$.Dq=null
$.Do=null
$.Fi=null
$.EH=null
$.Dl=null
$.BZ=null
$.FG=null
$.Ew=null
$.FV=null
$.Gh=null
$.mP=null
$.un=null
$.BV=null
$.CV=null
$.EQ=null
$.Cq=null
$.EM=null
$.CL=null
$.BF=null
$.BX=null
$.El=null
$.CN=null
$.EE=null
$.C2=null
$.D5=null
$.FX=null
$.BQ=null
$.Db=null
$.EC=null
$.C1=null
$.Dm=null
$.Ei=null
$.BS=null
$.Cj=null
$.yk=4
$.ff="OWNER"
$.xB=!1
$.v0=null
$.z4=""
$.p3=null
$.HA=null
$.eI=null
$.dV=null
$.Hz=null
$.d0=null
$.dC=null
$.c1=null
$.dU=null
$.fy=null
$.eH=null
$.dh=null
$.c2=null
$.xV=!1
$.td=!0
$.kH=null
$.ty=null
$.tD=null
$.yT=null
$.z_=null
$.w1=null
$.w4=null})();(function lazyInitializers(){lazy($,"wv","$get$wv",function(){return H.yX("_$dart_dartClosure")})
lazy($,"uU","$get$uU",function(){return H.yX("_$dart_js")})
lazy($,"wV","$get$wV",function(){return H.Br()})
lazy($,"wW","$get$wW",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.wG
$.wG=t+1
t="expando$key$"+t}return new P.lN(null,t,[P.F])})
lazy($,"y0","$get$y0",function(){return H.dW(H.pY({
toString:function(){return"$receiver$"}}))})
lazy($,"y1","$get$y1",function(){return H.dW(H.pY({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"y2","$get$y2",function(){return H.dW(H.pY(null))})
lazy($,"y3","$get$y3",function(){return H.dW(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"y7","$get$y7",function(){return H.dW(H.pY(void 0))})
lazy($,"y8","$get$y8",function(){return H.dW(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"y5","$get$y5",function(){return H.dW(H.y6(null))})
lazy($,"y4","$get$y4",function(){return H.dW(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"ya","$get$ya",function(){return H.dW(H.y6(void 0))})
lazy($,"y9","$get$y9",function(){return H.dW(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"vQ","$get$vQ",function(){return P.HK()})
lazy($,"hp","$get$hp",function(){return P.HQ(null,P.cC)})
lazy($,"ig","$get$ig",function(){return[]})
lazy($,"ym","$get$ym",function(){return H.GH([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"yL","$get$yL",function(){return P.If()})
lazy($,"yp","$get$yp",function(){return P.jG(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"vT","$get$vT",function(){return P.jF()})
lazy($,"wu","$get$wu",function(){return P.df("^\\S+$",!0,!1)})
lazy($,"kR","$get$kR",function(){return P.c0(P.F,L.fS)})
lazy($,"wq","$get$wq",function(){return P.df("[\\/]",!0,!1)})
lazy($,"bR","$get$bR",function(){return H.a([],[S.bK])})
lazy($,"ho","$get$ho",function(){return P.c0(P.z,Z.iA)})
lazy($,"mL","$get$mL",function(){return P.c0(P.F,B.ht)})
lazy($,"xv","$get$xv",function(){return H.a([],[A.Y])})
lazy($,"xF","$get$xF",function(){return H.a([],[P.z])})
lazy($,"oF","$get$oF",function(){return P.c0(P.F,T.hV)})
lazy($,"aC","$get$aC",function(){return H.a([],[U.aw])})
lazy($,"xU","$get$xU",function(){return P.xy([0,new K.cK("Pixels -> Bytes",T.Iv(),T.Iu()),1,new K.cK("Pixels -> Packed bits",T.It(),T.Is()),2,new K.cK("RLE 1 byte",V.u0(1),V.u_(1)),3,new K.cK("RLE 2 bytes",V.u0(2),V.u_(2)),4,new K.cK("RLE 3 bytes",V.u0(3),V.u_(3)),5,new K.cK("RLE packed 1 byte",V.tZ(1),V.tY(1)),6,new K.cK("RLE packed 2 bytes",V.tZ(2),V.tY(2)),7,new K.cK("RLE packed 3 bytes",V.tZ(3),V.tY(3)),8,new K.cK("RLE dynamic",V.J1(),V.J0()),9,new K.cK("Exponential-Golomb pixels",F.II(),F.IH()),10,new K.cK("Exponential-Golomb run RLE",F.IG(),F.IF()),11,new K.cK("Exponential-Golomb run/data RLE",F.IE(),F.ID())],P.F,K.cK)})
lazy($,"c","$get$c",function(){return P.a2(null,null,null,G.W)})
lazy($,"yi","$get$yi",function(){return P.df("[\n\r]+",!0,!1)})
lazy($,"yj","$get$yj",function(){return P.df("( *)(.*)",!0,!1)})
lazy($,"yh","$get$yh",function(){return P.df("^s*//",!0,!1)})
lazy($,"yg","$get$yg",function(){return P.df("//",!0,!1)})
lazy($,"cN","$get$cN",function(){return new F.ex(!1,!1,"WordListFileFormat")})
lazy($,"yl","$get$yl",function(){return new T.qo(null)})
lazy($,"wm","$get$wm",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cB","$get$cB",function(){return P.c0(P.z,Y.dR)})
lazy($,"xC","$get$xC",function(){return P.df("[\\/]",!0,!1)})
lazy($,"uZ","$get$uZ",function(){return P.c0(P.z,W.fw)})
lazy($,"vc","$get$vc",function(){return A.h1(255,0,255,255)})
lazy($,"og","$get$og",function(){return new F.ex(!1,!1,"Path Utils")})
lazy($,"of","$get$of",function(){return P.c0(P.eN,P.F)})
lazy($,"cS","$get$cS",function(){return H.a([],[D.cL])})
lazy($,"xZ","$get$xZ",function(){return P.df("([^\\\\|]|\\\\|)+",!0,!1)})
lazy($,"hZ","$get$hZ",function(){return P.df("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fA","$get$fA",function(){return new F.ex(!1,!1,"TextEngine")})
lazy($,"xX","$get$xX",function(){return P.df("#(.*?)#",!0,!1)})
lazy($,"xY","$get$xY",function(){return P.df("\\?(.*?)\\?",!0,!1)})
lazy($,"fz","$get$fz",function(){return P.df("\\\\(?!\\\\)",!0,!1)})
lazy($,"ih","$get$ih",function(){return P.a2(null,null,null,P.z)})
lazy($,"ne","$get$ne",function(){return new F.ex(!1,!1,"TextPlayground")})
lazy($,"ww","$get$ww",function(){var t={color:16711935}
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
mangledGlobalNames:{F:"int",U:"double",dw:"num",z:"String",cU:"bool",cC:"Null",q:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cU,args:[[P.q,E.iQ]]},{func:1,v:true},{func:1,ret:P.dj,args:[P.bk,P.F,P.F,O.cY]},{func:1,ret:P.bk,args:[P.F,P.bk,P.bk,O.cY]},{func:1,v:true,args:[P.ap]},{func:1,ret:P.z,args:[P.F]},{func:1,ret:W.at},{func:1,v:true,args:[{func:1,v:true}]},{func:1,v:true,args:[P.ap],opt:[P.dT]},{func:1,ret:P.z,args:[P.z]},{func:1,ret:W.cy,args:[P.F]},{func:1,ret:W.at,args:[P.F]},{func:1,ret:W.cs,args:[P.F]},{func:1,ret:P.cU,args:[W.cy,P.z,P.z,W.i7]},{func:1,args:[,]},{func:1,v:true,opt:[W.S]},{func:1,ret:W.f6,args:[P.F]},{func:1,ret:W.cj,args:[P.F]},{func:1,v:true,args:[,P.dT]},{func:1,ret:W.cl,args:[P.F]},{func:1,ret:W.ct,args:[P.F]},{func:1,ret:W.cu,args:[P.F]},{func:1,ret:W.fx,args:[P.F]},{func:1,ret:W.cv,args:[P.F]},{func:1,ret:W.fC,args:[P.F]},{func:1,ret:P.bX,args:[P.F]},{func:1,ret:W.bM,args:[P.F]},{func:1,ret:W.cq,args:[P.F]},{func:1,ret:W.fD,args:[P.F]},{func:1,ret:[P.c8,P.cC],opt:[W.S]},{func:1,ret:W.co,args:[P.F]},{func:1,ret:P.bo,args:[P.F]},{func:1,ret:P.F,args:[P.bJ,P.bJ]},{func:1,ret:P.cU,args:[P.ap]},{func:1,v:true,args:[P.z]},{func:1,ret:W.cn,args:[P.F]},{func:1,ret:P.z,args:[P.dc]},{func:1,ret:[P.c8,P.cC]},{func:1,v:true,args:[B.eP,P.z]},{func:1,ret:W.fB,args:[P.F]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.j,AnimationEffectTiming:J.j,AnimationTimeline:J.j,AppBannerPromptResult:J.j,BarProp:J.j,Body:J.j,CacheStorage:J.j,CanvasGradient:J.j,CanvasPattern:J.j,CanvasRenderingContext2D:J.j,CHROMIUMValuebuffer:J.j,CircularGeofencingRegion:J.j,Client:J.j,CompositorProxy:J.j,ConsoleBase:J.j,Coordinates:J.j,Crypto:J.j,CryptoKey:J.j,CSS:J.j,DeprecatedStorageInfo:J.j,DeprecatedStorageQuota:J.j,DeviceAcceleration:J.j,DeviceRotationRate:J.j,DirectoryReader:J.j,DOMImplementation:J.j,Iterator:J.j,DOMMatrix:J.j,DOMMatrixReadOnly:J.j,DOMParser:J.j,DOMPoint:J.j,DOMPointReadOnly:J.j,EffectModel:J.j,Stream:J.j,GamepadButton:J.j,Geofencing:J.j,GeofencingRegion:J.j,Geolocation:J.j,Geoposition:J.j,Headers:J.j,HMDVRDevice:J.j,IdleDeadline:J.j,ImageBitmap:J.j,ImageBitmapRenderingContext:J.j,InjectedScriptHost:J.j,InputDeviceCapabilities:J.j,IntersectionObserver:J.j,IntersectionObserverEntry:J.j,KeyframeEffect:J.j,MediaDeviceInfo:J.j,MediaDevices:J.j,MediaError:J.j,MediaKeyStatusMap:J.j,MediaKeySystemAccess:J.j,MediaKeys:J.j,MediaMetadata:J.j,MediaSession:J.j,MemoryInfo:J.j,MessageChannel:J.j,Metadata:J.j,MIDIInputMap:J.j,MIDIOutputMap:J.j,MutationObserver:J.j,WebKitMutationObserver:J.j,MutationRecord:J.j,NavigatorStorageUtils:J.j,NodeFilter:J.j,NonDocumentTypeChildNode:J.j,NonElementParentNode:J.j,OffscreenCanvas:J.j,PerformanceNavigation:J.j,PerformanceObserver:J.j,PerformanceObserverEntryList:J.j,PerformanceTiming:J.j,Permissions:J.j,PositionError:J.j,PositionSensorVRDevice:J.j,Presentation:J.j,PushManager:J.j,PushMessageData:J.j,PushSubscription:J.j,Range:J.j,ReadableByteStream:J.j,ReadableByteStreamReader:J.j,ReadableStreamReader:J.j,RTCCertificate:J.j,RTCIceCandidate:J.j,mozRTCIceCandidate:J.j,RTCStatsReport:J.j,RTCStatsResponse:J.j,Screen:J.j,ScrollState:J.j,Selection:J.j,SharedArrayBuffer:J.j,SourceInfo:J.j,StorageInfo:J.j,StorageManager:J.j,StorageQuota:J.j,StyleMedia:J.j,SyncManager:J.j,TextMetrics:J.j,UnderlyingSourceBase:J.j,VRDevice:J.j,VREyeParameters:J.j,VRFieldOfView:J.j,VRPositionState:J.j,ValidityState:J.j,VideoPlaybackQuality:J.j,VideoTrack:J.j,WindowClient:J.j,WorkerConsole:J.j,XPathEvaluator:J.j,XPathExpression:J.j,XPathNSResolver:J.j,XPathResult:J.j,XMLSerializer:J.j,XSLTProcessor:J.j,Bluetooth:J.j,BluetoothAdvertisingData:J.j,BluetoothCharacteristicProperties:J.j,BluetoothRemoteGATTServer:J.j,BluetoothRemoteGATTService:J.j,BluetoothUUID:J.j,Cache:J.j,DOMFileSystemSync:J.j,DirectoryEntrySync:J.j,DirectoryReaderSync:J.j,EntrySync:J.j,FileEntrySync:J.j,FileReaderSync:J.j,FileWriterSync:J.j,HTMLAllCollection:J.j,NFC:J.j,PagePopupController:J.j,Request:J.j,Response:J.j,SubtleCrypto:J.j,USBAlternateInterface:J.j,USBConfiguration:J.j,USBDevice:J.j,USBEndpoint:J.j,USBInTransferResult:J.j,USBInterface:J.j,USBIsochronousInTransferPacket:J.j,USBIsochronousInTransferResult:J.j,USBIsochronousOutTransferPacket:J.j,USBIsochronousOutTransferResult:J.j,USBOutTransferResult:J.j,WebKitCSSMatrix:J.j,Worklet:J.j,WorkletGlobalScope:J.j,IDBCursor:J.j,IDBCursorWithValue:J.j,IDBFactory:J.j,IDBKeyRange:J.j,SVGAngle:J.j,SVGAnimatedAngle:J.j,SVGAnimatedBoolean:J.j,SVGAnimatedEnumeration:J.j,SVGAnimatedInteger:J.j,SVGAnimatedLength:J.j,SVGAnimatedLengthList:J.j,SVGAnimatedNumber:J.j,SVGAnimatedNumberList:J.j,SVGAnimatedPreserveAspectRatio:J.j,SVGAnimatedRect:J.j,SVGAnimatedString:J.j,SVGAnimatedTransformList:J.j,SVGMatrix:J.j,SVGPoint:J.j,SVGPreserveAspectRatio:J.j,SVGRect:J.j,SVGUnitTypes:J.j,AudioListener:J.j,AudioParam:J.j,PeriodicWave:J.j,ANGLEInstancedArrays:J.j,ANGLE_instanced_arrays:J.j,WebGLBuffer:J.j,CHROMIUMSubscribeUniform:J.j,WebGLCompressedTextureASTC:J.j,WebGLCompressedTextureATC:J.j,WEBGL_compressed_texture_atc:J.j,WebGLCompressedTextureETC1:J.j,WEBGL_compressed_texture_etc1:J.j,WebGLCompressedTexturePVRTC:J.j,WEBGL_compressed_texture_pvrtc:J.j,WebGLCompressedTextureS3TC:J.j,WEBGL_compressed_texture_s3tc:J.j,WebGLDebugRendererInfo:J.j,WEBGL_debug_renderer_info:J.j,WebGLDebugShaders:J.j,WEBGL_debug_shaders:J.j,WebGLDepthTexture:J.j,WEBGL_depth_texture:J.j,WebGLDrawBuffers:J.j,WEBGL_draw_buffers:J.j,EXTsRGB:J.j,EXT_sRGB:J.j,EXTBlendMinMax:J.j,EXT_blend_minmax:J.j,EXTColorBufferFloat:J.j,EXTDisjointTimerQuery:J.j,EXTFragDepth:J.j,EXT_frag_depth:J.j,EXTShaderTextureLOD:J.j,EXT_shader_texture_lod:J.j,EXTTextureFilterAnisotropic:J.j,EXT_texture_filter_anisotropic:J.j,WebGLFramebuffer:J.j,WebGLLoseContext:J.j,WebGLExtensionLoseContext:J.j,WEBGL_lose_context:J.j,OESElementIndexUint:J.j,OES_element_index_uint:J.j,OESStandardDerivatives:J.j,OES_standard_derivatives:J.j,OESTextureFloat:J.j,OES_texture_float:J.j,OESTextureFloatLinear:J.j,OES_texture_float_linear:J.j,OESTextureHalfFloat:J.j,OES_texture_half_float:J.j,OESTextureHalfFloatLinear:J.j,OES_texture_half_float_linear:J.j,OESVertexArrayObject:J.j,OES_vertex_array_object:J.j,WebGLProgram:J.j,WebGLQuery:J.j,WebGLRenderbuffer:J.j,WebGLRenderingContext:J.j,WebGLSampler:J.j,WebGLShader:J.j,WebGLShaderPrecisionFormat:J.j,WebGLSync:J.j,WebGLTexture:J.j,WebGLTimerQueryEXT:J.j,WebGLTransformFeedback:J.j,WebGLUniformLocation:J.j,WebGLVertexArrayObject:J.j,WebGLVertexArrayObjectOES:J.j,Database:J.j,SQLError:J.j,SQLResultSet:J.j,SQLTransaction:J.j,ArrayBuffer:H.fo,ArrayBufferView:H.ez,DataView:H.nO,Float32Array:H.nP,Float64Array:H.nQ,Int16Array:H.nR,Int32Array:H.nS,Int8Array:H.nT,Uint16Array:H.nU,Uint32Array:H.nV,Uint8ClampedArray:H.jM,CanvasPixelArray:H.jM,Uint8Array:H.fp,HTMLBRElement:W.b3,HTMLCanvasElement:W.b3,HTMLContentElement:W.b3,HTMLDListElement:W.b3,HTMLDataListElement:W.b3,HTMLDetailsElement:W.b3,HTMLDialogElement:W.b3,HTMLDivElement:W.b3,HTMLHRElement:W.b3,HTMLHeadElement:W.b3,HTMLHeadingElement:W.b3,HTMLHtmlElement:W.b3,HTMLLabelElement:W.b3,HTMLLegendElement:W.b3,HTMLModElement:W.b3,HTMLOptGroupElement:W.b3,HTMLParagraphElement:W.b3,HTMLPictureElement:W.b3,HTMLPreElement:W.b3,HTMLQuoteElement:W.b3,HTMLShadowElement:W.b3,HTMLTableCaptionElement:W.b3,HTMLTableCellElement:W.b3,HTMLTableDataCellElement:W.b3,HTMLTableHeaderCellElement:W.b3,HTMLTableColElement:W.b3,HTMLTitleElement:W.b3,HTMLTrackElement:W.b3,HTMLUListElement:W.b3,HTMLUnknownElement:W.b3,HTMLDirectoryElement:W.b3,HTMLFontElement:W.b3,HTMLFrameElement:W.b3,HTMLMarqueeElement:W.b3,HTMLElement:W.b3,HTMLAnchorElement:W.eX,HTMLAreaElement:W.kQ,HTMLAudioElement:W.f_,AudioTrack:W.cO,AudioTrackList:W.kX,HTMLBaseElement:W.l0,Blob:W.f1,HTMLBodyElement:W.f2,HTMLButtonElement:W.h_,CDATASection:W.ei,CharacterData:W.ei,Comment:W.ei,ProcessingInstruction:W.ei,Text:W.ei,Clients:W.lc,CompositorWorker:W.lg,Credential:W.h3,FederatedCredential:W.h3,PasswordCredential:W.h3,CredentialsContainer:W.lk,CSSFontFaceRule:W.ln,CSSImportRule:W.lo,CSSKeyframeRule:W.h4,MozCSSKeyframeRule:W.h4,WebKitCSSKeyframeRule:W.h4,CSSKeyframesRule:W.h5,MozCSSKeyframesRule:W.h5,WebKitCSSKeyframesRule:W.h5,CSSPageRule:W.lp,CSSCharsetRule:W.bM,CSSGroupingRule:W.bM,CSSMediaRule:W.bM,CSSNamespaceRule:W.bM,CSSSupportsRule:W.bM,CSSRule:W.bM,CSSStyleDeclaration:W.f5,MSStyleCSSProperties:W.f5,CSS2Properties:W.f5,CSSStyleRule:W.lq,CSSViewportRule:W.lr,DataTransfer:W.lw,DataTransferItem:W.f6,DataTransferItemList:W.ir,Document:W.ej,HTMLDocument:W.ej,XMLDocument:W.ej,DocumentFragment:W.it,ShadowRoot:W.it,DOMError:W.iu,FileError:W.iu,DOMException:W.lz,DOMRectReadOnly:W.iv,DOMStringList:W.iw,DOMStringMap:W.ix,DOMTokenList:W.iy,Element:W.cy,HTMLEmbedElement:W.lF,DirectoryEntry:W.h7,Entry:W.h7,FileEntry:W.h7,ErrorEvent:W.lL,AnimationEvent:W.S,AnimationPlayerEvent:W.S,ApplicationCacheErrorEvent:W.S,AutocompleteErrorEvent:W.S,BeforeInstallPromptEvent:W.S,BeforeUnloadEvent:W.S,BlobEvent:W.S,ClipboardEvent:W.S,CloseEvent:W.S,CompositionEvent:W.S,CustomEvent:W.S,DeviceLightEvent:W.S,DeviceMotionEvent:W.S,DeviceOrientationEvent:W.S,ExtendableEvent:W.S,ExtendableMessageEvent:W.S,FetchEvent:W.S,FocusEvent:W.S,FontFaceSetLoadEvent:W.S,GamepadEvent:W.S,GeofencingEvent:W.S,HashChangeEvent:W.S,InstallEvent:W.S,KeyboardEvent:W.S,MediaEncryptedEvent:W.S,MediaKeyMessageEvent:W.S,MediaQueryListEvent:W.S,MediaStreamEvent:W.S,MediaStreamTrackEvent:W.S,MessageEvent:W.S,MIDIConnectionEvent:W.S,MIDIMessageEvent:W.S,MouseEvent:W.S,DragEvent:W.S,NotificationEvent:W.S,PageTransitionEvent:W.S,PointerEvent:W.S,PopStateEvent:W.S,PresentationConnectionAvailableEvent:W.S,PresentationConnectionCloseEvent:W.S,ProgressEvent:W.S,PromiseRejectionEvent:W.S,PushEvent:W.S,RelatedEvent:W.S,RTCDataChannelEvent:W.S,RTCDTMFToneChangeEvent:W.S,RTCIceCandidateEvent:W.S,RTCPeerConnectionIceEvent:W.S,SecurityPolicyViolationEvent:W.S,ServicePortConnectEvent:W.S,ServiceWorkerMessageEvent:W.S,SpeechRecognitionEvent:W.S,StorageEvent:W.S,SyncEvent:W.S,TextEvent:W.S,TouchEvent:W.S,TrackEvent:W.S,TransitionEvent:W.S,WebKitTransitionEvent:W.S,UIEvent:W.S,WheelEvent:W.S,ResourceProgressEvent:W.S,USBConnectionEvent:W.S,IDBVersionChangeEvent:W.S,SVGZoomEvent:W.S,AudioProcessingEvent:W.S,OfflineAudioCompletionEvent:W.S,WebGLContextEvent:W.S,Event:W.S,InputEvent:W.S,Animation:W.aV,ApplicationCache:W.aV,DOMApplicationCache:W.aV,OfflineResourceList:W.aV,BatteryManager:W.aV,CanvasCaptureMediaStreamTrack:W.aV,CrossOriginServiceWorkerClient:W.aV,EventSource:W.aV,MediaKeySession:W.aV,MediaQueryList:W.aV,MediaRecorder:W.aV,MediaSource:W.aV,MediaStream:W.aV,MediaStreamTrack:W.aV,MessagePort:W.aV,MIDIAccess:W.aV,NetworkInformation:W.aV,Notification:W.aV,Performance:W.aV,PermissionStatus:W.aV,PresentationAvailability:W.aV,PresentationReceiver:W.aV,PresentationRequest:W.aV,RTCDTMFSender:W.aV,RTCPeerConnection:W.aV,webkitRTCPeerConnection:W.aV,mozRTCPeerConnection:W.aV,ScreenOrientation:W.aV,ServicePortCollection:W.aV,ServiceWorkerContainer:W.aV,ServiceWorkerRegistration:W.aV,SpeechRecognition:W.aV,SpeechSynthesis:W.aV,SpeechSynthesisUtterance:W.aV,WorkerPerformance:W.aV,BluetoothDevice:W.aV,BluetoothRemoteGATTCharacteristic:W.aV,USB:W.aV,EventTarget:W.aV,HTMLFieldSetElement:W.mc,File:W.cj,FileList:W.fe,FileReader:W.iL,DOMFileSystem:W.mg,FileWriter:W.mh,FontFace:W.mj,FontFaceSet:W.mk,FormData:W.mm,HTMLFormElement:W.iP,Gamepad:W.cq,History:W.mx,HTMLOptionsCollection:W.fg,HTMLCollection:W.fg,HTMLFormControlsCollection:W.iR,XMLHttpRequest:W.e7,XMLHttpRequestUpload:W.hq,XMLHttpRequestEventTarget:W.hq,HTMLIFrameElement:W.mF,ImageData:W.hr,HTMLImageElement:W.fi,HTMLInputElement:W.mK,HTMLKeygenElement:W.nb,HTMLLIElement:W.nd,CalcLength:W.hC,LengthValue:W.hC,SimpleLength:W.hC,HTMLLinkElement:W.hD,Location:W.nt,HTMLMapElement:W.ny,HTMLVideoElement:W.hK,HTMLMediaElement:W.hK,MediaList:W.jJ,HTMLMenuElement:W.nE,HTMLMenuItemElement:W.nF,HTMLMetaElement:W.nG,HTMLMeterElement:W.nH,MIDIOutput:W.nI,MIDIInput:W.hL,MIDIPort:W.hL,MimeType:W.cs,MimeTypeArray:W.jK,Navigator:W.nW,NavigatorUserMediaError:W.nX,Node:W.at,NodeIterator:W.jN,NodeList:W.jO,RadioNodeList:W.jO,HTMLOListElement:W.o1,HTMLObjectElement:W.o2,HTMLOptionElement:W.o6,HTMLOutputElement:W.o8,HTMLParamElement:W.oc,Path2D:W.oe,PerformanceCompositeTiming:W.eb,PerformanceEntry:W.eb,PerformanceMark:W.eb,PerformanceMeasure:W.eb,PerformanceRenderTiming:W.eb,PerformanceResourceTiming:W.eb,Perspective:W.oj,Plugin:W.cl,PluginArray:W.jX,PresentationConnection:W.op,HTMLProgressElement:W.ot,RTCDataChannel:W.jZ,DataChannel:W.jZ,RTCSessionDescription:W.k_,mozRTCSessionDescription:W.k_,HTMLScriptElement:W.fw,HTMLSelectElement:W.k0,ServicePort:W.oN,SharedWorker:W.oQ,SharedWorkerGlobalScope:W.oR,HTMLSlotElement:W.oS,SourceBuffer:W.ct,SourceBufferList:W.k2,HTMLSourceElement:W.oW,HTMLSpanElement:W.hX,SpeechGrammar:W.cu,SpeechGrammarList:W.k3,SpeechRecognitionAlternative:W.fx,SpeechRecognitionError:W.oZ,SpeechRecognitionResult:W.cn,SpeechSynthesisEvent:W.p_,SpeechSynthesisVoice:W.p0,Storage:W.p5,HTMLStyleElement:W.ps,StylePropertyMap:W.pu,CSSStyleSheet:W.co,StyleSheet:W.co,KeywordValue:W.ed,NumberValue:W.ed,PositionValue:W.ed,TransformValue:W.ed,StyleValue:W.ed,HTMLTableElement:W.k7,HTMLTableRowElement:W.pz,HTMLTableSectionElement:W.pA,HTMLTemplateElement:W.hY,HTMLTextAreaElement:W.pF,TextTrack:W.cT,TextTrackCue:W.cM,VTTCue:W.cM,TextTrackCueList:W.pL,TextTrackList:W.pM,TimeRanges:W.pQ,Touch:W.cv,TouchList:W.k8,TrackDefault:W.fB,TrackDefaultList:W.k9,Matrix:W.ee,Rotation:W.ee,Skew:W.ee,Translation:W.ee,TransformComponent:W.ee,TreeWalker:W.ka,URL:W.q5,URLSearchParams:W.q6,VideoTrackList:W.qa,VTTRegion:W.fC,VTTRegionList:W.kb,WebSocket:W.qf,Window:W.ke,DOMWindow:W.ke,Worker:W.qm,CompositorWorkerGlobalScope:W.eQ,DedicatedWorkerGlobalScope:W.eQ,ServiceWorkerGlobalScope:W.eQ,WorkerGlobalScope:W.eQ,Attr:W.fD,ClientRect:W.qE,ClientRectList:W.i3,DOMRectList:W.i3,CSSRuleList:W.kk,DocumentType:W.qL,DOMRect:W.qM,GamepadList:W.kp,HTMLFrameSetElement:W.r6,NamedNodeMap:W.i9,MozNamedAttrMap:W.i9,ServiceWorker:W.rw,SpeechRecognitionResultList:W.kt,StyleSheetList:W.kv,WorkerLocation:W.rS,WorkerNavigator:W.rT,IDBDatabase:P.lx,IDBIndex:P.mI,IDBObjectStore:P.o3,IDBOpenDBRequest:P.hU,IDBVersionChangeRequest:P.hU,IDBRequest:P.hU,IDBTransaction:P.pV,SVGAElement:P.kN,SVGAnimateElement:P.eh,SVGAnimateMotionElement:P.eh,SVGAnimateTransformElement:P.eh,SVGAnimationElement:P.eh,SVGSetElement:P.eh,SVGFEBlendElement:P.lO,SVGFEColorMatrixElement:P.lP,SVGFEComponentTransferElement:P.lQ,SVGFECompositeElement:P.lR,SVGFEConvolveMatrixElement:P.lS,SVGFEDiffuseLightingElement:P.lT,SVGFEDisplacementMapElement:P.lU,SVGFEFloodElement:P.lV,SVGFEGaussianBlurElement:P.lW,SVGFEImageElement:P.lX,SVGFEMergeElement:P.lY,SVGFEMorphologyElement:P.lZ,SVGFEOffsetElement:P.m_,SVGFESpecularLightingElement:P.m0,SVGFETileElement:P.m1,SVGFETurbulenceElement:P.m2,SVGFilterElement:P.mi,SVGCircleElement:P.cr,SVGClipPathElement:P.cr,SVGDefsElement:P.cr,SVGEllipseElement:P.cr,SVGForeignObjectElement:P.cr,SVGGElement:P.cr,SVGGeometryElement:P.cr,SVGLineElement:P.cr,SVGPathElement:P.cr,SVGPolygonElement:P.cr,SVGPolylineElement:P.cr,SVGRectElement:P.cr,SVGSwitchElement:P.cr,SVGGraphicsElement:P.cr,SVGImageElement:P.mG,SVGLength:P.da,SVGLengthList:P.ng,SVGMarkerElement:P.nB,SVGMaskElement:P.nC,SVGNumber:P.dd,SVGNumberList:P.o_,SVGPatternElement:P.oh,SVGPointList:P.om,SVGScriptElement:P.hW,SVGStringList:P.pq,SVGStyleElement:P.pt,SVGDescElement:P.cb,SVGDiscardElement:P.cb,SVGFEDistantLightElement:P.cb,SVGFEFuncAElement:P.cb,SVGFEFuncBElement:P.cb,SVGFEFuncGElement:P.cb,SVGFEFuncRElement:P.cb,SVGFEMergeNodeElement:P.cb,SVGFEPointLightElement:P.cb,SVGFESpotLightElement:P.cb,SVGMetadataElement:P.cb,SVGStopElement:P.cb,SVGTitleElement:P.cb,SVGComponentTransferFunctionElement:P.cb,SVGElement:P.cb,SVGSVGElement:P.pw,SVGSymbolElement:P.py,SVGTSpanElement:P.eK,SVGTextElement:P.eK,SVGTextPositioningElement:P.eK,SVGTextContentElement:P.eK,SVGTextPathElement:P.pK,SVGTransform:P.di,SVGTransformList:P.pW,SVGUseElement:P.q7,SVGViewElement:P.qb,SVGViewSpec:P.qc,SVGLinearGradientElement:P.i6,SVGRadialGradientElement:P.i6,SVGGradientElement:P.i6,SVGCursorElement:P.rs,SVGFEDropShadowElement:P.rt,SVGMPathElement:P.ru,AudioBuffer:P.fU,AudioBufferSourceNode:P.eZ,AudioContext:P.fV,webkitAudioContext:P.fV,OfflineAudioContext:P.fV,AnalyserNode:P.bI,RealtimeAnalyserNode:P.bI,AudioDestinationNode:P.bI,ChannelMergerNode:P.bI,AudioChannelMerger:P.bI,ChannelSplitterNode:P.bI,AudioChannelSplitter:P.bI,DelayNode:P.bI,DynamicsCompressorNode:P.bI,GainNode:P.bI,AudioGainNode:P.bI,IIRFilterNode:P.bI,MediaStreamAudioDestinationNode:P.bI,PannerNode:P.bI,AudioPannerNode:P.bI,webkitAudioPannerNode:P.bI,ScriptProcessorNode:P.bI,JavaScriptAudioNode:P.bI,StereoPannerNode:P.bI,WaveShaperNode:P.bI,AudioNode:P.bI,MediaElementAudioSourceNode:P.f0,MediaStreamAudioSourceNode:P.f0,AudioSourceNode:P.f0,BiquadFilterNode:P.l3,ConvolverNode:P.lj,OscillatorNode:P.jT,Oscillator:P.jT,WebGLActiveInfo:P.kP,WebGL2RenderingContext:P.oA,WebGL2RenderingContextBase:P.rR,SQLResultSetRowList:P.k4})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,SyncManager:true,TextMetrics:true,UnderlyingSourceBase:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Clients:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CredentialsContainer:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,FormData:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,HTMLProgressElement:true,RTCDataChannel:true,DataChannel:true,RTCSessionDescription:true,mozRTCSessionDescription:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,HTMLStyleElement:true,StylePropertyMap:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,TreeWalker:true,URL:true,URLSearchParams:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,AudioSourceNode:false,BiquadFilterNode:true,ConvolverNode:true,OscillatorNode:true,Oscillator:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jL.$nativeSuperclassTag="ArrayBufferView"
H.hO.$nativeSuperclassTag="ArrayBufferView"
H.hQ.$nativeSuperclassTag="ArrayBufferView"
H.hM.$nativeSuperclassTag="ArrayBufferView"
H.hP.$nativeSuperclassTag="ArrayBufferView"
H.hR.$nativeSuperclassTag="ArrayBufferView"
H.hN.$nativeSuperclassTag="ArrayBufferView"
W.h8.$nativeSuperclassTag="EventTarget"
W.hb.$nativeSuperclassTag="EventTarget"
W.h9.$nativeSuperclassTag="EventTarget"
W.hc.$nativeSuperclassTag="EventTarget"
W.ha.$nativeSuperclassTag="EventTarget"
W.hd.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.z5(S.z7(),b)},[])
else (function(b){H.z5(S.z7(),b)})([])})})()
//# sourceMappingURL=text_engine_playground.dart.js.map
