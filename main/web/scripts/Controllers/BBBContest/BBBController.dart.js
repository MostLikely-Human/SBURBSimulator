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
a[c]=function(){a[c]=function(){H.J4(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.w8"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.w8"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.w8(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={v8:function v8(a){this.a=a},
tF:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
pM:function(a,b,c,d){var t=new H.pL(a,b,c,[d])
t.fs(a,b,c,d)
return t},
dy:function(a,b,c,d){if(!!J.ai(a).$isr)return new H.h2(a,b,[c,d])
return new H.hG(a,b,[c,d])},
p7:function(a,b,c){if(!!J.ai(a).$isr)return new H.iF(a,H.tl(b),[c])
return new H.hT(a,H.tl(b),[c])},
tl:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.dI(a,"count","is not an integer"))
if(a<0)H.b2(P.bx(a,0,null,"count",null))
return a},
hv:function(){return new P.da("No element")},
Ge:function(){return new P.da("Too many elements")},
xH:function(){return new P.da("Too few elements")},
ka:function(a,b,c,d){if(c-b<=32)H.Hq(a,b,c,d)
else H.Hp(a,b,c,d)},
Hq:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bb(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cu(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
Hp:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.ar(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.ar(a3+a4,2)
p=q-t
o=q+t
n=J.bb(a2)
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
if(J.be(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.ai(c)
if(b.T(c,0))continue
if(b.a4(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dp(c)
if(b.aF(c,0)){--f
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
if(J.dH(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cu(a5.$2(d,j),0))for(;!0;)if(J.cu(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.dH(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.ka(a2,a3,g-2,a5)
H.ka(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.be(a5.$2(n.n(a2,g),l),0);)++g
for(;J.be(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.be(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.be(a5.$2(d,j),0))for(;!0;)if(J.be(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.dH(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.ka(a2,g,f,a5)}else H.ka(a2,g,f,a5)},
ln:function ln(a){this.a=a},
r:function r(){},
dP:function dP(){},
pL:function pL(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
et:function et(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hG:function hG(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
h2:function h2(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jO:function jO(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ev:function ev(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eK:function eK(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
kn:function kn(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hT:function hT(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iF:function iF(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
p8:function p8(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iR:function iR(){},
qc:function qc(){},
i1:function i1(){},
kK:function(a,b){var t=a.bE(b)
if(!u.globalState.d.cy)u.globalState.f.bM()
return t},
za:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ai(s).$isp)throw H.j(P.dg("Arguments to main must be a List: "+H.y(s)))
u.globalState=new H.rB(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$x1()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.r3(P.vd(null,H.eQ),0)
r=P.E
s.z=new H.u(0,null,null,null,null,null,0,[r,H.fF])
s.ch=new H.u(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.rA()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.Bf,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.HO)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a3(null,null,null,r)
p=new H.fu(0,null,!1)
o=new H.fF(s,new H.u(0,null,null,null,null,null,0,[r,H.fu]),q,u.createNewIsolate(),p,new H.dJ(H.tV()),new H.dJ(H.tV()),!1,!1,[],P.a3(null,null,null,null),null,null,!1,!0,P.a3(null,null,null,null))
q.h(0,0)
o.dB(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fL(a,{func:1,args:[,]}))o.bE(new H.tW(t,a))
else if(H.fL(a,{func:1,args:[,,]}))o.bE(new H.tX(t,a))
else o.bE(a)
u.globalState.f.bM()},
HO:function(a){var t=P.hB(["command","print","msg",a])
return new H.dF(!0,P.ib(null,P.E)).aG(t)},
Bh:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.Bi()
return},
Bi:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.j(new P.T("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.j(new P.T('Cannot extract URI from "'+t+'"'))},
Bf:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eN(!0,[]).b8(b.data)
s=J.bb(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eN(!0,[]).b8(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eN(!0,[]).b8(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.E
j=P.a3(null,null,null,k)
i=new H.fu(0,null,!1)
h=new H.fF(s,new H.u(0,null,null,null,null,null,0,[k,H.fu]),j,u.createNewIsolate(),i,new H.dJ(H.tV()),new H.dJ(H.tV()),!1,!1,[],P.a3(null,null,null,null),null,null,!1,!0,P.a3(null,null,null,null))
j.h(0,0)
h.dB(0,i)
u.globalState.f.a.aT(0,new H.eQ(h,new H.mW(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bM()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fN(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bM()
break
case"close":u.globalState.ch.as(0,$.$get$x2().n(0,a))
a.terminate()
u.globalState.f.bM()
break
case"log":H.Be(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hB(["command","print","msg",t])
k=new H.dF(!0,P.ib(null,P.E)).aG(k)
s.toString
self.postMessage(k)}else P.eT(s.n(t,"msg"))
break
case"error":throw H.j(s.n(t,"msg"))}},
Be:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hB(["command","log","msg",a])
r=new H.dF(!0,P.ib(null,P.E)).aG(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.bE(q)
t=H.ct(q)
s=P.lY(t)
throw H.j(s)}},
Bg:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.xU=$.xU+("_"+s)
$.xV=$.xV+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fN(f,["spawned",new H.fG(s,r),q,t.r])
r=new H.mX(a,b,c,d,t)
if(e===!0){t.ef(q,q)
u.globalState.f.a.aT(0,new H.eQ(t,r,"start isolate"))}else r.$0()},
Hw:function(a,b){var t=new H.q3(!0,!1,null)
t.ft(a,b)
return t},
I6:function(a){return new H.eN(!0,[]).b8(new H.dF(!1,P.ib(null,P.E)).aG(a))},
tW:function tW(a,b){this.a=a
this.b=b},
tX:function tX(a,b){this.a=a
this.b=b},
rB:function rB(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
rr:function rr(a,b){this.a=a
this.b=b},
r3:function r3(a,b){this.a=a
this.b=b},
r4:function r4(a){this.a=a},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},
rA:function rA(){},
mW:function mW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mX:function mX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qO:function qO(){},
fG:function fG(b,a){this.b=b
this.a=a},
rD:function rD(a,b){this.a=a
this.b=b},
ig:function ig(b,c,a){this.b=b
this.c=c
this.a=a},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
q3:function q3(a,b,c){this.a=a
this.b=b
this.c=c},
q4:function q4(a,b){this.a=a
this.b=b},
q5:function q5(a,b){this.a=a
this.b=b},
dJ:function dJ(a){this.a=a},
dF:function dF(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
Ai:function(){throw H.j(new P.T("Cannot modify unmodifiable Map"))},
II:function(a){return u.types[a]},
z4:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ai(a).$isaE},
y:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cv(a)
if(typeof t!=="string")throw H.j(H.bl(a))
return t},
GX:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.oM(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
ex:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
vw:function(a,b){if(b==null)throw H.j(new P.bJ(a,null,null))
return b.$1(a)},
fr:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.vw(a,c)
if(3>=t.length)return H.v(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.vw(a,c)}if(b<2||b>36)throw H.j(P.bx(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.aa(q,o)|32)>r)return H.vw(a,c)}return parseInt(a,b)},
xS:function(a,b){return b.$1(a)},
xW:function(a,b){var t,s
H.It(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.xS(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.u_(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.xS(a,b)}return t},
oD:function(a){var t,s,r,q,p,o,n,m
t=J.ai(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.T||!!J.ai(a).$iseI){p=C.A(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.aa(q,0)===36)q=C.c.am(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.tP(H.kO(a),0,null),u.mangledGlobalNames)},
oC:function(a){return"Instance of '"+H.oD(a)+"'"},
GB:function(){if(!!self.location)return self.location.href
return},
xR:function(a){var t,s,r,q,p
t=J.c5(a)
if(typeof t!=="number")return t.f1()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
GG:function(a){var t,s,r,q
t=H.a([],[P.E])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.c4)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.j(H.bl(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.b5(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.j(H.bl(q))}return H.xR(t)},
xY:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.c4)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.j(H.bl(q))
if(q<0)throw H.j(H.bl(q))
if(q>65535)return H.GG(a)}return H.xR(a)},
GH:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.f1()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
fs:function(a){var t
if(typeof a!=="number")return H.a6(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.b5(t,10))>>>0,56320|t&1023)}}throw H.j(P.bx(a,0,1114111,null,null))},
cY:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
xT:function(a){return a.b?H.cY(a).getUTCFullYear()+0:H.cY(a).getFullYear()+0},
vy:function(a){return a.b?H.cY(a).getUTCMonth()+1:H.cY(a).getMonth()+1},
vx:function(a){return a.b?H.cY(a).getUTCDate()+0:H.cY(a).getDate()+0},
GC:function(a){return a.b?H.cY(a).getUTCHours()+0:H.cY(a).getHours()+0},
GE:function(a){return a.b?H.cY(a).getUTCMinutes()+0:H.cY(a).getMinutes()+0},
GF:function(a){return a.b?H.cY(a).getUTCSeconds()+0:H.cY(a).getSeconds()+0},
GD:function(a){return a.b?H.cY(a).getUTCMilliseconds()+0:H.cY(a).getMilliseconds()+0},
vz:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.j(H.bl(a))
return a[b]},
xX:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.j(H.bl(a))
a[b]=c},
a6:function(a){throw H.j(H.bl(a))},
v:function(a,b){if(a==null)J.c5(a)
throw H.j(H.c3(a,b))},
c3:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cU(!0,b,"index",null)
t=J.c5(a)
if(!(b<0)){if(typeof t!=="number")return H.a6(t)
s=b>=t}else s=!0
if(s)return P.bz(b,a,"index",null,t)
return P.k6(b,"index",null)},
Iz:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cU(!0,a,"start",null)
if(a<0||a>c)return new P.eB(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cU(!0,b,"end",null)
if(b<a||b>c)return new P.eB(a,c,!0,b,"end","Invalid value")}return new P.cU(!0,b,"end",null)},
bl:function(a){return new P.cU(!0,a,null,null)},
kM:function(a){if(typeof a!=="number")throw H.j(H.bl(a))
return a},
w7:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(H.bl(a))
return a},
It:function(a){if(typeof a!=="string")throw H.j(H.bl(a))
return a},
j:function(a){var t
if(a==null)a=new P.fo()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.zc})
t.name=""}else t.toString=H.zc
return t},
zc:function(){return J.cv(this.dartException)},
b2:function(a){throw H.j(a)},
c4:function(a){throw H.j(new P.bH(a))},
dU:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.q9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
qa:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
yd:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
va:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.nf(a,s,t?null:b.receiver)},
bE:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.tY(a)
if(a==null)return
if(a instanceof H.hb)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.b5(r,16)&8191)===10)switch(q){case 438:return t.$1(H.va(H.y(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.y(s)+" (Error "+q+")"
return t.$1(new H.jX(p,null))}}if(a instanceof TypeError){o=$.$get$y7()
n=$.$get$y8()
m=$.$get$y9()
l=$.$get$ya()
k=$.$get$ye()
j=$.$get$yf()
i=$.$get$yc()
$.$get$yb()
h=$.$get$yh()
g=$.$get$yg()
f=o.aP(s)
if(f!=null)return t.$1(H.va(s,f))
else{f=n.aP(s)
if(f!=null){f.method="call"
return t.$1(H.va(s,f))}else{f=m.aP(s)
if(f==null){f=l.aP(s)
if(f==null){f=k.aP(s)
if(f==null){f=j.aP(s)
if(f==null){f=i.aP(s)
if(f==null){f=l.aP(s)
if(f==null){f=h.aP(s)
if(f==null){f=g.aP(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jX(s,f==null?null:f.method))}}return t.$1(new H.qb(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.ke()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cU(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.ke()
return a},
ct:function(a){var t
if(a instanceof H.hb)return a.b
if(a==null)return new H.kF(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kF(a,null)},
IV:function(a){if(a==null||typeof a!='object')return J.cT(a)
else return H.ex(a)},
z1:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
IP:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kK(b,new H.tK(a))
case 1:return H.kK(b,new H.tL(a,d))
case 2:return H.kK(b,new H.tM(a,d,e))
case 3:return H.kK(b,new H.tN(a,d,e,f))
case 4:return H.kK(b,new H.tO(a,d,e,f,g))}throw H.j(P.lY("Unsupported number of arguments for wrapped closure"))},
dn:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.IP)
a.$identity=t
return t},
Ae:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ai(c).$isp){t.$reflectionInfo=c
r=H.GX(t).r}else r=c
q=d?Object.create(new H.pi().constructor.prototype):Object.create(new H.fU(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dK
$.dK=J.dZ(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.wz(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.II,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.ww:H.u3
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.j("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.wz(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
Ab:function(a,b,c,d){var t=H.u3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
wz:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.Ad(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.Ab(s,!q,t,b)
if(s===0){q=$.dK
$.dK=J.dZ(q,1)
o="self"+H.y(q)
q="return function(){var "+o+" = this."
p=$.fV
if(p==null){p=H.le("self")
$.fV=p}return new Function(q+H.y(p)+";return "+o+"."+H.y(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dK
$.dK=J.dZ(q,1)
n+=H.y(q)
q="return function("+n+"){return this."
p=$.fV
if(p==null){p=H.le("self")
$.fV=p}return new Function(q+H.y(p)+"."+H.y(t)+"("+n+");}")()},
Ac:function(a,b,c,d){var t,s
t=H.u3
s=H.ww
switch(b?-1:a){case 0:throw H.j(new H.oU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
Ad:function(a,b){var t,s,r,q,p,o,n,m
t=H.Aa()
s=$.wv
if(s==null){s=H.le("receiver")
$.wv=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.Ac(q,!o,r,b)
if(q===1){s="return function(){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+");"
o=$.dK
$.dK=J.dZ(o,1)
return new Function(s+H.y(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+", "+m+");"
o=$.dK
$.dK=J.dZ(o,1)
return new Function(s+H.y(o)+"}")()},
w8:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ai(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.Ae(a,b,t,!!d,e,f)},
u3:function(a){return a.a},
ww:function(a){return a.c},
Aa:function(){var t=$.fV
if(t==null){t=H.le("self")
$.fV=t}return t},
le:function(a){var t,s,r,q,p
t=new H.fU("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
IX:function(a,b){var t=J.bb(b)
throw H.j(H.wy(H.oD(a),t.K(b,3,t.gm(b))))},
kQ:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.ai(a)[b]
else t=!0
if(t)return a
H.IX(a,b)},
z0:function(a){var t=J.ai(a)
return"$S" in t?t.$S():null},
fL:function(a,b){var t
if(a==null)return!1
t=H.z0(a)
return t==null?!1:H.wb(t,b)},
wy:function(a,b){return new H.ll("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
J4:function(a){throw H.j(new P.lF(a))},
tV:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
z2:function(a){return u.getIsolateTag(a)},
bX:function(a){return new H.dV(a,null)},
a:function(a,b){a.$ti=b
return a},
kO:function(a){if(a==null)return
return a.$ti},
z3:function(a,b){return H.wd(a["$as"+H.y(b)],H.kO(a))},
ar:function(a,b,c){var t=H.z3(a,b)
return t==null?null:t[c]},
N:function(a,b){var t=H.kO(a)
return t==null?null:t[b]},
dG:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.tP(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.y(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dG(t,b)
return H.Ic(a,b)}return"unknown-reified-type"},
Ic:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dG(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dG(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dG(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.IG(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dG(l[j],b)+(" "+H.y(j))}q+="}"}return"("+q+") => "+t},
tP:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.c2("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.N=p+", "
o=a[s]
if(o!=null)q=!1
p=t.N+=H.dG(o,c)}return q?"":"<"+t.C(0)+">"},
kP:function(a){var t,s
if(a instanceof H.f1){t=H.z0(a)
if(t!=null)return H.dG(t,null)}s=J.ai(a).constructor.builtin$cls
if(a==null)return s
return s+H.tP(a.$ti,0,null)},
wd:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dY:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kO(a)
s=J.ai(a)
if(s[b]==null)return!1
return H.yX(H.wd(s[d],t),c)},
J3:function(a,b,c,d){if(a==null)return a
if(H.dY(a,b,c,d))return a
throw H.j(H.wy(H.oD(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.tP(c,0,null),u.mangledGlobalNames)))},
yX:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d1(a[s],b[s]))return!1
return!0},
eS:function(a,b,c){return a.apply(b,H.z3(b,c))},
Iu:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="z"||b.builtin$cls==="d8"
if(b==null)return!0
t=H.kO(a)
a=J.ai(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.wb(r.apply(a,null),b)}return H.d1(s,b)},
d1:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d8")return!0
if('func' in b)return H.wb(a,b)
if('func' in a)return b.builtin$cls==="Ja"||b.builtin$cls==="z"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dG(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.yX(H.wd(o,t),r)},
yW:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.d1(t,p)||H.d1(p,t)))return!1}return!0},
Ik:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d1(p,o)||H.d1(o,p)))return!1}return!0},
wb:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d1(t,s)||H.d1(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.yW(r,q,!1))return!1
if(!H.yW(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d1(i,h)||H.d1(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d1(i,h)||H.d1(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d1(i,h)||H.d1(h,i)))return!1}}return H.Ik(a.named,b.named)},
Jl:function(a){var t=$.w9
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Jk:function(a){return H.ex(a)},
Jj:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
IQ:function(a){var t,s,r,q,p,o
t=$.w9.$1(a)
s=$.tA[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.tJ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.yV.$2(a,t)
if(t!=null){s=$.tA[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.tJ[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.wc(r)
$.tA[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.tJ[t]=r
return r}if(p==="-"){o=H.wc(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.z5(a,r)
if(p==="*")throw H.j(new P.eH(t))
if(u.leafTags[t]===true){o=H.wc(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.z5(a,r)},
z5:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.tQ(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
wc:function(a){return J.tQ(a,!1,null,!!a.$isaE)},
IS:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.tQ(t,!1,null,!!t.$isaE)
else return J.tQ(t,c,null,null)},
IN:function(){if(!0===$.wa)return
$.wa=!0
H.IO()},
IO:function(){var t,s,r,q,p,o,n,m
$.tA=Object.create(null)
$.tJ=Object.create(null)
H.IM()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.z7.$1(p)
if(o!=null){n=H.IS(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
IM:function(){var t,s,r,q,p,o,n
t=C.U()
t=H.fK(C.V,H.fK(C.W,H.fK(C.z,H.fK(C.z,H.fK(C.Y,H.fK(C.X,H.fK(C.Z(C.A),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.w9=new H.tG(p)
$.yV=new H.tH(o)
$.z7=new H.tI(n)},
fK:function(a,b){return a(b)||b},
v5:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.j(new P.bJ("Illegal RegExp pattern ("+String(q)+")",a,null))},
J1:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
zb:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hw){q=b.gdY()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.b2(H.bl(b))
throw H.j("String.replaceAll(Pattern) UNIMPLEMENTED")}},
Ii:function(a){return a},
J2:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.b6(0,a),t=new H.ks(t.a,t.b,t.c,null),s=0,r="";t.I();){q=t.d
p=q.b
o=p.index
r=r+H.y(H.yM().$1(C.c.K(a,s,o)))+H.y(c.$1(q))
s=o+p[0].length}t=r+H.y(H.yM().$1(C.c.am(a,s)))
return t.charCodeAt(0)==0?t:t},
lq:function lq(){},
lr:function lr(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qS:function qS(a,$ti){this.a=a
this.$ti=$ti},
oM:function oM(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
q9:function q9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jX:function jX(a,b){this.a=a
this.b=b},
nf:function nf(a,b,c){this.a=a
this.b=b
this.c=c},
qb:function qb(a){this.a=a},
hb:function hb(a,b){this.a=a
this.b=b},
tY:function tY(a){this.a=a},
kF:function kF(a,b){this.a=a
this.b=b},
tK:function tK(a){this.a=a},
tL:function tL(a,b){this.a=a
this.b=b},
tM:function tM(a,b,c){this.a=a
this.b=b
this.c=c},
tN:function tN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tO:function tO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f1:function f1(){},
pT:function pT(){},
pi:function pi(){},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ll:function ll(a){this.a=a},
oU:function oU(a){this.a=a},
dV:function dV(a,b){this.a=a
this.b=b},
u:function u(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
ne:function ne(a){this.a=a},
nd:function nd(a){this.a=a},
nt:function nt(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
nu:function nu(a,$ti){this.a=a
this.$ti=$ti},
nv:function nv(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
tG:function tG(a){this.a=a},
tH:function tH(a){this.a=a},
tI:function tI(a){this.a=a},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kD:function kD(a,b){this.a=a
this.b=b},
qI:function qI(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
rY:function rY(a,b,c){this.a=a
this.b=b
this.c=c},
rZ:function rZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.dg("Invalid length "+H.y(a)))
return a},
yI:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dg("Invalid view offsetInBytes "+H.y(b)))
if(c!=null&&(typeof c!=="number"||Math.floor(c)!==c))throw H.j(P.dg("Invalid view length "+H.y(c)))},
yL:function(a){return a},
Gz:function(a){return new Int8Array(H.yL(a))},
cN:function(a,b,c){H.yI(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
I5:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aF()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.j(H.Iz(a,b,c))
return b},
fm:function fm(){},
ew:function ew(){},
nY:function nY(){},
jS:function jS(){},
hJ:function hJ(){},
hL:function hL(){},
hN:function hN(){},
hK:function hK(){},
hM:function hM(){},
hO:function hO(){},
nZ:function nZ(){},
o_:function o_(){},
o0:function o0(){},
o1:function o1(){},
o2:function o2(){},
o3:function o3(){},
o4:function o4(){},
jT:function jT(){},
fn:function fn(){},
IG:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
z6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ai:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jK.prototype
return J.jJ.prototype}if(typeof a=="string")return J.er.prototype
if(a==null)return J.nb.prototype
if(typeof a=="boolean")return J.na.prototype
if(a.constructor==Array)return J.eq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.z)return a
return J.tD(a)},
tQ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
tD:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.wa==null){H.IN()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.j(new P.eH("Return interceptor for "+H.y(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$v9()]
if(p!=null)return p
p=H.IQ(a)
if(p!=null)return p
if(typeof a=="function")return C.a_
s=Object.getPrototypeOf(a)
if(s==null)return C.L
if(s===Object.prototype)return C.L
if(typeof q=="function"){Object.defineProperty(q,$.$get$v9(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
xI:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Gf:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.aa(a,b)
if(s!==32&&s!==13&&!J.xI(s))break;++b}return b},
v4:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.a0(a,t)
if(s!==32&&s!==13&&!J.xI(s))break}return b},
bb:function(a){if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(a.constructor==Array)return J.eq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.z)return a
return J.tD(a)},
de:function(a){if(a==null)return a
if(a.constructor==Array)return J.eq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.z)return a
return J.tD(a)},
dp:function(a){if(typeof a=="number")return J.fl.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.eI.prototype
return a},
kN:function(a){if(typeof a=="number")return J.fl.prototype
if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.eI.prototype
return a},
cS:function(a){if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.eI.prototype
return a},
b1:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.z)return a
return J.tD(a)},
dZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kN(a).R(a,b)},
be:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ai(a).T(a,b)},
we:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dp(a).ay(a,b)},
cu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dp(a).aF(a,b)},
dH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dp(a).a4(a,b)},
wf:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kN(a).al(a,b)},
d2:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.z4(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bb(a).n(a,b)},
il:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.z4(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.de(a).i(a,b,c)},
zd:function(a,b){return J.de(a).h(a,b)},
ze:function(a,b,c,d){return J.b1(a).ee(a,b,c,d)},
zf:function(a,b){return J.cS(a).b6(a,b)},
e_:function(a,b){return J.b1(a).hs(a,b)},
wg:function(a){return J.b1(a).hu(a)},
zg:function(a,b,c){return J.dp(a).ag(a,b,c)},
zh:function(a,b){return J.kN(a).aH(a,b)},
zi:function(a,b){return J.b1(a).aI(a,b)},
zj:function(a,b){return J.bb(a).Z(a,b)},
kS:function(a,b,c){return J.bb(a).el(a,b,c)},
zk:function(a,b){return J.b1(a).hG(a,b)},
zl:function(a,b){return J.b1(a).en(a,b)},
wh:function(a,b){return J.de(a).W(a,b)},
zm:function(a,b,c,d){return J.de(a).bF(a,b,c,d)},
kT:function(a){return J.dp(a).ap(a)},
wi:function(a,b){return J.de(a).a2(a,b)},
wj:function(a){return J.b1(a).geh(a)},
wk:function(a){return J.b1(a).gej(a)},
zn:function(a){return J.b1(a).gbD(a)},
fM:function(a){return J.b1(a).gav(a)},
zo:function(a){return J.b1(a).gcW(a)},
cT:function(a){return J.ai(a).ga5(a)},
kU:function(a){return J.bb(a).gX(a)},
wl:function(a){return J.b1(a).ga1(a)},
cJ:function(a){return J.de(a).gY(a)},
im:function(a){return J.b1(a).gak(a)},
c5:function(a){return J.bb(a).gm(a)},
zp:function(a){return J.b1(a).gii(a)},
zq:function(a){return J.b1(a).gd4(a)},
zr:function(a){return J.b1(a).giA(a)},
zs:function(a){return J.b1(a).giB(a)},
wm:function(a){return J.ai(a).gad(a)},
tZ:function(a){return J.b1(a).gaS(a)},
zt:function(a){return J.b1(a).giE(a)},
zu:function(a){return J.b1(a).gdd(a)},
zv:function(a){return J.b1(a).gaL(a)},
zw:function(a){return J.b1(a).di(a)},
zx:function(a,b){return J.b1(a).bQ(a,b)},
zy:function(a,b){return J.bb(a).br(a,b)},
wn:function(a,b,c,d,e){return J.b1(a).eB(a,b,c,d,e)},
wo:function(a,b){return J.de(a).aE(a,b)},
zz:function(a,b,c){return J.cS(a).eF(a,b,c)},
wp:function(a,b){return J.b1(a).im(a,b)},
zA:function(a){return J.de(a).iw(a)},
zB:function(a,b,c,d){return J.b1(a).eK(a,b,c,d)},
kV:function(a,b,c){return J.cS(a).d9(a,b,c)},
zC:function(a,b,c){return J.cS(a).iz(a,b,c)},
fN:function(a,b){return J.b1(a).bf(a,b)},
wq:function(a,b){return J.b1(a).sbD(a,b)},
zD:function(a,b){return J.b1(a).sab(a,b)},
zE:function(a,b){return J.b1(a).sao(a,b)},
zF:function(a,b){return J.de(a).aB(a,b)},
ed:function(a,b){return J.cS(a).fe(a,b)},
zG:function(a,b){return J.cS(a).am(a,b)},
zH:function(a,b,c){return J.cS(a).K(a,b,c)},
wr:function(a){return J.dp(a).l(a)},
zI:function(a){return J.de(a).at(a)},
zJ:function(a){return J.cS(a).iG(a)},
zK:function(a,b){return J.dp(a).bN(a,b)},
cv:function(a){return J.ai(a).C(a)},
zL:function(a){return J.cS(a).iH(a)},
u_:function(a){return J.cS(a).bv(a)},
zM:function(a){return J.cS(a).eS(a)},
i:function i(){},
na:function na(){},
nb:function nb(){},
hx:function hx(){},
ov:function ov(){},
eI:function eI(){},
es:function es(){},
eq:function eq($ti){this.$ti=$ti},
v7:function v7($ti){this.$ti=$ti},
eV:function eV(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fl:function fl(){},
jK:function jK(){},
jJ:function jJ(){},
er:function er(){}},P={
HB:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.Il()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dn(new P.qK(t),1)).observe(s,{childList:true})
return new P.qJ(t,s,r)}else if(self.setImmediate!=null)return P.Im()
return P.In()},
HC:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dn(new P.qL(a),0))},
HD:function(a){++u.globalState.f.b
self.setImmediate(H.dn(new P.qM(a),0))},
HE:function(a){P.vS(C.o,a)},
bt:function(a,b){P.yG(null,a)
return b.ghX()},
cs:function(a,b){P.yG(a,b)},
bs:function(a,b){J.zi(b,a)},
br:function(a,b){b.cS(H.bE(a),H.ct(a))},
yG:function(a,b){var t,s,r,q
t=new P.tg(b)
s=new P.th(b)
r=J.ai(a)
if(!!r.$isbk)a.cL(t,s)
else if(!!r.$iscm)a.cd(t,s)
else{q=new P.bk(0,$.ap,null,[null])
q.a=4
q.c=a
q.cL(t,null)}},
bu:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.ap.toString
return new P.tt(t)},
yN:function(a,b){if(H.fL(a,{func:1,args:[P.d8,P.d8]})){b.toString
return a}else{b.toString
return a}},
AX:function(a,b){var t=new P.bk(0,$.ap,null,[b])
P.y6(C.o,new P.tv(a,t))
return t},
wZ:function(a,b,c){var t
if(a==null)a=new P.fo()
t=$.ap
if(t!==C.e)t.toString
t=new P.bk(0,t,null,[c])
t.dD(a,b)
return t},
AY:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bk(0,$.ap,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.mB(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.c4)(a),++l){q=a[l]
p=t.b
q.cd(new P.mA(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bk(0,$.ap,null,[null])
m.dC(C.E)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.bE(j)
n=H.ct(j)
if(t.b===0||!1)return P.wZ(o,n,null)
else{t.c=o
t.d=n}}return s},
bo:function(a){return new P.kH(new P.bk(0,$.ap,null,[a]),[a])},
yJ:function(a,b,c){$.ap.toString
a.aq(b,c)},
HI:function(a,b){var t=new P.bk(0,$.ap,null,[b])
t.a=4
t.c=a
return t},
yu:function(a,b){var t,s,r
b.a=1
try{a.cd(new P.rd(b),new P.re(b))}catch(r){t=H.bE(r)
s=H.ct(r)
P.z8(new P.rf(b,t,s))}},
rc:function(a,b){var t,s,r
for(;a.gh3();)a=a.c
t=a.gcD()
s=b.c
if(t){b.c=null
r=b.bY(s)
b.a=a.a
b.c=a.c
P.fE(b,r)}else{b.a=2
b.c=a
a.e1(s)}},
fE:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fM(p)
n=p.gaR()
s.toString
P.kL(null,null,s,o,n)}return}for(;b.gcG()!=null;b=m){m=b.a
b.a=null
P.fE(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gev()||b.geu()){k=b.gho()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fM(p)
n=p.gaR()
s.toString
P.kL(null,null,s,o,n)
return}j=$.ap
if(j==null?k!=null:j!==k)$.ap=k
else j=null
if(b.geu())new P.rk(t,r,q,b).$0()
else if(s){if(b.gev())new P.rj(r,b,l).$0()}else if(b.gi3())new P.ri(t,r,b).$0()
if(j!=null)$.ap=j
s=r.b
if(!!J.ai(s).$iscm){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bY(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.rc(s,i)
return}}i=b.b
b=i.bX()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
Ie:function(){var t,s
for(;t=$.fI,t!=null;){$.ii=null
s=t.b
$.fI=s
if(s==null)$.ih=null
t.a.$0()}},
Ih:function(){$.w5=!0
try{P.Ie()}finally{$.ii=null
$.w5=!1
if($.fI!=null)$.$get$w0().$1(P.yY())}},
yU:function(a){var t=new P.kt(a,null)
if($.fI==null){$.ih=t
$.fI=t
if(!$.w5)$.$get$w0().$1(P.yY())}else{$.ih.b=t
$.ih=t}},
Ig:function(a){var t,s,r
t=$.fI
if(t==null){P.yU(a)
$.ii=$.ih
return}s=new P.kt(a,null)
r=$.ii
if(r==null){s.b=t
$.ii=s
$.fI=s}else{s.b=r.b
r.b=s
$.ii=s
if(s.b==null)$.ih=s}},
z8:function(a){var t=$.ap
if(C.e===t){P.fJ(null,null,C.e,a)
return}t.toString
P.fJ(null,null,t,t.cQ(a,!0))},
Jf:function(a,b){return new P.rX(null,a,!1,[b])},
yR:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.bE(o)
s=H.ct(o)
$.ap.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fM(r)
q=n
p=r.gaR()
c.$2(q,p)}}},
I4:function(a,b,c,d){var t=a.c4(0)
if(!!J.ai(t).$iscm&&t!==$.$get$hl())t.cf(new P.tj(b,c,d))
else b.aq(c,d)},
yH:function(a,b){return new P.ti(a,b)},
w4:function(a,b,c){var t=a.c4(0)
if(!!J.ai(t).$iscm&&t!==$.$get$hl())t.cf(new P.tk(b,c))
else b.aN(c)},
HH:function(a,b,c,d,e,f,g){var t,s
t=$.ap
s=e?1:0
s=new P.eP(a,null,null,null,null,t,s,null,null,[f,g])
s.dw(b,c,d,e,g)
s.dz(a,b,c,d,e,f,g)
return s},
I3:function(a,b,c){$.ap.toString
a.bS(b,c)},
y6:function(a,b){var t=$.ap
if(t===C.e){t.toString
return P.vS(a,b)}return P.vS(a,t.cQ(b,!0))},
vS:function(a,b){var t=C.a.ar(a.a,1000)
return H.Hw(t<0?0:t,b)},
kL:function(a,b,c,d,e){var t={}
t.a=d
P.Ig(new P.ts(t,e))},
yO:function(a,b,c,d){var t,s
s=$.ap
if(s===c)return d.$0()
$.ap=c
t=s
try{s=d.$0()
return s}finally{$.ap=t}},
yQ:function(a,b,c,d,e){var t,s
s=$.ap
if(s===c)return d.$1(e)
$.ap=c
t=s
try{s=d.$1(e)
return s}finally{$.ap=t}},
yP:function(a,b,c,d,e,f){var t,s
s=$.ap
if(s===c)return d.$2(e,f)
$.ap=c
t=s
try{s=d.$2(e,f)
return s}finally{$.ap=t}},
fJ:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cQ(d,!(!t||!1))
P.yU(d)},
qK:function qK(a){this.a=a},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(a){this.a=a},
qM:function qM(a){this.a=a},
tg:function tg(a){this.a=a},
th:function th(a){this.a=a},
tt:function tt(a){this.a=a},
cm:function cm(){},
tv:function tv(a,b){this.a=a
this.b=b},
mB:function mB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mA:function mA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f3:function f3(){},
ku:function ku(){},
dX:function dX(a,$ti){this.a=a
this.$ti=$ti},
kH:function kH(a,$ti){this.a=a
this.$ti=$ti},
ky:function ky(a,b,c,d,e,$ti){var _=this
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
r9:function r9(a,b){this.a=a
this.b=b},
rh:function rh(a,b){this.a=a
this.b=b},
rd:function rd(a){this.a=a},
re:function re(a){this.a=a},
rf:function rf(a,b,c){this.a=a
this.b=b
this.c=c},
rb:function rb(a,b){this.a=a
this.b=b},
rg:function rg(a,b){this.a=a
this.b=b},
ra:function ra(a,b,c){this.a=a
this.b=b
this.c=c},
rk:function rk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rl:function rl(a){this.a=a},
rj:function rj(a,b,c){this.a=a
this.b=b
this.c=c},
ri:function ri(a,b,c){this.a=a
this.b=b
this.c=c},
kt:function kt(a,b){this.a=a
this.b=b},
d_:function d_(){},
pq:function pq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
po:function po(a,b){this.a=a
this.b=b},
pp:function pp(a,b){this.a=a
this.b=b},
pr:function pr(a){this.a=a},
pw:function pw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pu:function pu(a,b){this.a=a
this.b=b},
pv:function pv(){},
px:function px(a){this.a=a},
pA:function pA(a){this.a=a},
pB:function pB(a,b){this.a=a
this.b=b},
py:function py(a,b){this.a=a
this.b=b},
pz:function pz(a){this.a=a},
pC:function pC(a,b){this.a=a
this.b=b},
pD:function pD(a,b){this.a=a
this.b=b},
ps:function ps(a,b,c){this.a=a
this.b=b
this.c=c},
pt:function pt(a){this.a=a},
pn:function pn(){},
dd:function dd(){},
qQ:function qQ(a,b,c){this.a=a
this.b=b
this.c=c},
qP:function qP(a){this.a=a},
kw:function kw(){},
qX:function qX(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qZ:function qZ(b,c,a){this.b=b
this.c=c
this.a=a},
qY:function qY(){},
rE:function rE(){},
rF:function rF(a,b){this.a=a
this.b=b},
rW:function rW(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
rX:function rX(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
tj:function tj(a,b,c){this.a=a
this.b=b
this.c=c},
ti:function ti(a,b){this.a=a
this.b=b},
tk:function tk(a,b){this.a=a
this.b=b},
fD:function fD(){},
eP:function eP(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
rC:function rC(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
rV:function rV(z,x,y,a,b,c,d,e,f,r,$ti){var _=this
_.z=z
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
rU:function rU(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eW:function eW(a,b){this.a=a
this.b=b},
tf:function tf(){},
ts:function ts(a,b){this.a=a
this.b=b},
rI:function rI(){},
rJ:function rJ(a,b){this.a=a
this.b=b},
rK:function rK(a,b){this.a=a
this.b=b},
rL:function rL(a,b){this.a=a
this.b=b},
HJ:function(a,b){var t=a[b]
return t===a?null:t},
w2:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
w1:function(){var t=Object.create(null)
P.w2(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
xJ:function(a,b,c){return H.z1(a,new H.u(0,null,null,null,null,null,0,[b,c]))},
cy:function(a,b){return new H.u(0,null,null,null,null,null,0,[a,b])},
jM:function(){return new H.u(0,null,null,null,null,null,0,[null,null])},
hB:function(a){return H.z1(a,new H.u(0,null,null,null,null,null,0,[null,null]))},
ib:function(a,b){return new P.kC(0,null,null,null,null,null,0,[a,b])},
HN:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
C:function(a,b,c,d,e){return new P.rn(0,null,null,null,null,[d,e])},
v0:function(a,b,c){var t,s
if(P.w6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ij()
s.push(a)
try{P.Id(a,t)}finally{if(0>=s.length)return H.v(s,-1)
s.pop()}s=P.y5(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jH:function(a,b,c){var t,s,r
if(P.w6(a))return b+"..."+c
t=new P.c2(b)
s=$.$get$ij()
s.push(a)
try{r=t
r.N=P.y5(r.gN(),a,", ")}finally{if(0>=s.length)return H.v(s,-1)
s.pop()}s=t
s.N=s.gN()+c
s=t.gN()
return s.charCodeAt(0)==0?s:s},
w6:function(a){var t,s
for(t=0;s=$.$get$ij(),t<s.length;++t)if(a===s[t])return!0
return!1},
Id:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cJ(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.I())return
q=H.y(t.gS())
b.push(q)
s+=q.length+2;++r}if(!t.I()){if(r<=5)return
if(0>=b.length)return H.v(b,-1)
p=b.pop()
if(0>=b.length)return H.v(b,-1)
o=b.pop()}else{n=t.gS();++r
if(!t.I()){if(r<=4){b.push(H.y(n))
return}p=H.y(n)
if(0>=b.length)return H.v(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gS();++r
for(;t.I();n=m,m=l){l=t.gS();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.v(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.y(n)
p=H.y(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.v(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a3:function(a,b,c,d){return new P.kB(0,null,null,null,null,null,0,[d])},
jN:function(a,b){var t,s
t=P.a3(null,null,null,b)
for(s=J.cJ(a);s.I();)t.h(0,s.gS())
return t},
nL:function(a){var t,s,r
t={}
if(P.w6(a))return"{...}"
s=new P.c2("")
try{$.$get$ij().push(a)
r=s
r.N=r.gN()+"{"
t.a=!0
J.wi(a,new P.nM(t,s))
t=s
t.N=t.gN()+"}"}finally{t=$.$get$ij()
if(0>=t.length)return H.v(t,-1)
t.pop()}t=s.gN()
return t.charCodeAt(0)==0?t:t},
vd:function(a,b){var t=new P.nw(null,0,0,0,[b])
t.fq(a,b)
return t},
rn:function rn(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
rp:function rp(a){this.a=a},
kA:function kA(a,$ti){this.a=a
this.$ti=$ti},
ro:function ro(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kC:function kC(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kB:function kB(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
ry:function ry(a,b,c){this.a=a
this.b=b
this.c=c},
dE:function dE(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rq:function rq(){},
ep:function ep(){},
hu:function hu(){},
hC:function hC(){},
fq:function fq(){},
b6:function b6(){},
nJ:function nJ(){},
t6:function t6(){},
nK:function nK(){},
i2:function i2(a,$ti){this.a=a
this.$ti=$ti},
nM:function nM(a,b){this.a=a
this.b=b},
nw:function nw(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rz:function rz(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
p4:function p4(){},
p3:function p3(){},
tn:function(a){var t
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.rt(a,Object.create(null),null)
for(t=0;t<a.length;++t)a[t]=P.tn(a[t])
return a},
wu:function(a,b,c,d,e,f){if(C.d.bR(f,4)!==0)throw H.j(new P.bJ("Invalid base64 padding, padded length must be multiple of four, is "+H.y(f),a,c))
if(d+e!==f)throw H.j(new P.bJ("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.j(new P.bJ("Invalid base64 padding, more than two '=' characters",a,b))},
If:function(a,b){var t,s,r,q
if(typeof a!=="string")throw H.j(H.bl(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.bE(r)
q=String(s)
throw H.j(new P.bJ(q,null,null))}q=P.tn(t)
return q},
Ia:function(a){return a.j4()},
HM:function(a,b,c){var t,s,r
t=new P.c2("")
s=new P.rv(t,[],P.Iw())
s.ci(a)
r=t.N
return r.charCodeAt(0)==0?r:r},
rt:function rt(a,b,c){this.a=a
this.b=b
this.c=c},
ru:function ru(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
f2:function f2(){},
eg:function eg(){},
lS:function lS(){},
hy:function hy(a,b){this.a=a
this.b=b},
nh:function nh(a,b){this.a=a
this.b=b},
ng:function ng(a,b){this.a=a
this.b=b},
nj:function nj(a,b){this.a=a
this.b=b},
ni:function ni(a){this.a=a},
rw:function rw(){},
rx:function rx(a,b){this.a=a
this.b=b},
rv:function rv(c,a,b){this.c=c
this.a=a
this.b=b},
qk:function qk(a){this.a=a},
ql:function ql(a){this.a=a},
t8:function t8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ta:function ta(a){this.a=a},
t9:function t9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Hu:function(a,b,c){var t,s,r,q,p
if(b<0)throw H.j(P.bx(b,0,J.c5(a),null,null))
t=c==null
if(!t){if(typeof c!=="number")return c.a4()
s=c<b}else s=!1
if(s)throw H.j(P.bx(c,b,J.c5(a),null,null))
r=J.cJ(a)
for(q=0;q<b;++q)if(!r.I())throw H.j(P.bx(b,0,q,null,null))
p=[]
if(t)for(;r.I();)p.push(r.gS())
else{if(typeof c!=="number")return H.a6(c)
q=b
for(;q<c;++q){if(!r.I())throw H.j(P.bx(c,b,q,null,null))
p.push(r.gS())}}return H.xY(p)},
y5:function(a,b,c){var t=J.cJ(b)
if(!t.I())return a
if(c.length===0){do a+=H.y(t.gS())
while(t.I())}else{a+=H.y(t.gS())
for(;t.I();)a=a+c+H.y(t.gS())}return a},
Ah:function(a,b){return J.zh(a,b)},
Ak:function(a,b){var t=new P.e1(a,b)
t.du(a,b)
return t},
Al:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.y(t)
if(t>=10)return s+"00"+H.y(t)
return s+"000"+H.y(t)},
Am:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
iw:function(a){if(a>=10)return""+a
return"0"+a},
wN:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cv(a)
if(typeof a==="string")return JSON.stringify(a)
return P.AF(a)},
AF:function(a){var t=J.ai(a)
if(!!t.$isf1)return t.C(a)
return H.oC(a)},
dg:function(a){return new P.cU(!1,null,null,a)},
dI:function(a,b,c){return new P.cU(!0,a,b,c)},
zN:function(a){return new P.cU(!1,null,a,"Must not be null")},
y1:function(a){return new P.eB(null,null,!1,null,null,a)},
k6:function(a,b,c){return new P.eB(null,null,!0,a,b,"Value not in range")},
bx:function(a,b,c,d,e){return new P.eB(b,c,!0,a,d,"Invalid value")},
dm:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a6(a)
if(!(0>a)){if(typeof c!=="number")return H.a6(c)
t=a>c}else t=!0
if(t)throw H.j(P.bx(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a6(b)
if(!(a>b)){if(typeof c!=="number")return H.a6(c)
t=b>c}else t=!0
if(t)throw H.j(P.bx(b,a,c,"end",f))
return b}return c},
bz:function(a,b,c,d,e){var t=e!=null?e:J.c5(b)
return new P.mU(b,t,!0,a,c,"Index out of range")},
lY:function(a){return new P.r8(a)},
dl:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cJ(a);s.I();)t.push(s.gS())
if(b)return t
t.fixed$length=Array
return t},
Gg:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
k:function(a,b){var t=P.dl(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
eT:function(a){H.z6(H.y(a))},
dQ:function(a,b,c){return new H.hw(a,H.v5(a,!1,!0,!1),null,null)},
pI:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dm(b,c,t,null,null,null)
if(!(b>0)){if(typeof c!=="number")return c.a4()
s=c<t}else s=!0
return H.xY(s?C.b.cm(a,b,c):a)}if(!!J.ai(a).$isfn)return H.GH(a,b,P.dm(b,c,a.length,null,null,null))
return P.Hu(a,b,c)},
yj:function(){var t=H.GB()
if(t!=null)return P.yk(t,0,null)
throw H.j(new P.T("'Uri.base' is not supported"))},
yk:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.aa(a,b+4)^58)*3|C.c.aa(a,b)^100|C.c.aa(a,b+1)^97|C.c.aa(a,b+2)^116|C.c.aa(a,b+3)^97)>>>0
if(s===0)return P.yi(b>0||c<c?C.c.K(a,b,c):a,5,null).geU()
else if(s===32)return P.yi(C.c.K(a,t,c),0,null).geU()}r=H.a(new Array(8),[P.E])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.yS(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.ay()
if(p>=b)if(P.yS(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.R()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a4()
if(typeof l!=="number")return H.a6(l)
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
j=!1}else{if(!(l<c&&l===m+2&&C.c.aM(a,"..",m)))h=l>m+2&&C.c.aM(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aM(a,"file",b)){if(o<=b){if(!C.c.aM(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.K(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aK(a,m,l,"/");++l;++k;++c}else{a=C.c.K(a,b,m)+"/"+C.c.K(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aM(a,"http",b)){if(q&&n+3===m&&C.c.aM(a,"80",n+1))if(b===0&&!0){a=C.c.aK(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.K(a,b,n)+C.c.K(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aM(a,"https",b)){if(q&&n+4===m&&C.c.aM(a,"443",n+1))if(b===0&&!0){a=C.c.aK(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.K(a,b,n)+C.c.K(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.c.K(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.rT(a,p,o,n,m,l,k,i,null)}return P.HQ(a,b,c,p,o,n,m,l,k,i)},
ym:function(a,b){return C.b.hU(a.split("&"),P.jM(),new P.qh(b))},
Hx:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.qe(a)
s=H.cz(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.a0(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fr(C.c.K(a,p,q),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.v(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fr(C.c.K(a,p,c),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.v(r,o)
r[o]=m
return r},
yl:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.qf(a)
s=new P.qg(a,t)
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
k=J.be(C.b.gbi(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Hx(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.aA()
h=j[1]
if(typeof h!=="number")return H.a6(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.aA()
i=j[3]
if(typeof i!=="number")return H.a6(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.ai(e).T(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.v(g,f)
g[f]=0
i=f+1
if(i>=16)return H.v(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.dm()
i=C.d.b5(e,8)
if(f<0||f>=16)return H.v(g,f)
g[f]=i
i=f+1
if(i>=16)return H.v(g,i)
g[i]=e&255
f+=2}}return g},
HQ:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.HY(a,b,d)
else{if(d===b)P.ie(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.HZ(a,t,e-1):""
r=P.HU(a,e,f,!1)
if(typeof f!=="number")return f.R()
q=f+1
if(typeof g!=="number")return H.a6(g)
p=q<g?P.HW(H.fr(C.c.K(a,q,g),null,new P.tw(a,f)),j):null}else{s=""
r=null
p=null}o=P.HV(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a4()
n=h<i?P.HX(a,h+1,i,null):null
return new P.kI(j,s,r,p,o,n,i<c?P.HT(a,i+1,c):null,null,null,null,null,null)},
yA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ie:function(a,b,c){throw H.j(new P.bJ(c,a,b))},
HW:function(a,b){if(a!=null&&J.be(a,P.yA(b)))return
return a},
HU:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.a0(a,b)===91){if(typeof c!=="number")return c.ae()
t=c-1
if(C.c.a0(a,t)!==93)P.ie(a,b,"Missing end `]` to match `[` in host")
P.yl(a,b+1,t)
return C.c.K(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a6(c)
s=b
for(;s<c;++s)if(C.c.a0(a,s)===58){P.yl(a,b,c)
return"["+a+"]"}return P.I0(a,b,c)},
I0:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a6(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.a0(a,t)
if(p===37){o=P.yF(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.c2("")
m=C.c.K(a,s,t)
l=r.N+=!q?m.toLowerCase():m
if(n){o=C.c.K(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.N=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.v(C.H,n)
n=(C.H[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.c2("")
if(s<t){r.N+=C.c.K(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.v(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.ie(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.a0(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.c2("")
m=C.c.K(a,s,t)
r.N+=!q?m.toLowerCase():m
r.N+=P.yB(p)
t+=k
s=t}}}}if(r==null)return C.c.K(a,b,c)
if(s<c){m=C.c.K(a,s,c)
r.N+=!q?m.toLowerCase():m}n=r.N
return n.charCodeAt(0)==0?n:n},
HY:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.yD(C.c.aa(a,b)))P.ie(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.aa(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.v(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.ie(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.K(a,b,c)
return P.HR(s?a.toLowerCase():a)},
HR:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
HZ:function(a,b,c){var t=P.fH(a,b,c,C.a8,!1)
return t==null?C.c.K(a,b,c):t},
HV:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fH(a,b,c,C.J,!1)
if(r==null)r=C.c.K(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ai(r,"/"))r="/"+r
return P.I_(r,e,f)},
I_:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ai(a,"/"))return P.I1(a,!t||c)
return P.I2(a)},
HX:function(a,b,c,d){var t=P.fH(a,b,c,C.k,!1)
return t==null?C.c.K(a,b,c):t},
HT:function(a,b,c){var t=P.fH(a,b,c,C.k,!1)
return t==null?C.c.K(a,b,c):t},
yF:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.a0(a,b+1)
r=C.c.a0(a,t)
q=H.tF(s)
p=H.tF(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.b5(o,4)
if(t>=8)return H.v(C.G,t)
t=(C.G[t]&1<<(o&15))!==0}else t=!1
if(t)return H.fs(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.K(a,b,b+3).toUpperCase()
return},
yB:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.aa("0123456789ABCDEF",a>>>4)
t[2]=C.c.aa("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.hj(a,6*r)&63|s
if(p>=q)return H.v(t,p)
t[p]=37
n=p+1
m=C.c.aa("0123456789ABCDEF",o>>>4)
if(n>=q)return H.v(t,n)
t[n]=m
m=p+2
n=C.c.aa("0123456789ABCDEF",o&15)
if(m>=q)return H.v(t,m)
t[m]=n
p+=3}}return P.pI(t,0,null)},
fH:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.cS(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a4()
if(typeof c!=="number")return H.a6(c)
if(!(r<c))break
c$0:{o=s.a0(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.v(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.yF(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.v(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ie(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.a0(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.yB(o)}}if(p==null)p=new P.c2("")
p.N+=C.c.K(a,q,r)
p.N+=H.y(m)
if(typeof l!=="number")return H.a6(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a4()
if(q<c)p.N+=s.K(a,q,c)
t=p.N
return t.charCodeAt(0)==0?t:t},
yE:function(a){if(C.c.ai(a,"."))return!0
return C.c.br(a,"/.")!==-1},
I2:function(a){var t,s,r,q,p,o,n
if(!P.yE(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.c4)(s),++p){o=s[p]
if(J.be(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.v(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bs(t,"/")},
I1:function(a,b){var t,s,r,q,p,o
if(!P.yE(a))return!b?P.yC(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.c4)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.be(C.b.gbi(t),"..")){if(0>=t.length)return H.v(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.v(t,0)
s=J.kU(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.be(C.b.gbi(t),".."))t.push("")
if(!b){if(0>=t.length)return H.v(t,0)
s=P.yC(t[0])
if(0>=t.length)return H.v(t,0)
t[0]=s}return C.b.bs(t,"/")},
yC:function(a){var t,s,r,q
t=J.bb(a)
s=t.gm(a)
if(typeof s!=="number")return s.ay()
if(s>=2&&P.yD(t.a0(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a6(s)
if(!(r<s))break
q=t.a0(a,r)
if(q===58)return C.c.K(a,0,r)+"%3A"+C.c.am(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.v(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
HS:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.a0(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.j(P.dg("Invalid URL encoding"))}}return t},
t7:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a6(c)
t=J.cS(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.a0(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.K(a,b,c)
else o=new H.ln(t.K(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.a0(a,s)
if(q>127)throw H.j(P.dg("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.j(P.dg("Truncated URI"))
o.push(P.HS(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.ql(!1).hB(o)},
yD:function(a){var t=a|32
return 97<=t&&t<=122},
yi:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bb(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a6(o)
if(!(r<o))break
c$0:{p=s.a0(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.j(new P.bJ("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.j(new P.bJ("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a6(o)
if(!(r<o))break
p=s.a0(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbi(t)
if(p!==44||r!==m+7||!s.aM(a,"base64",m+1))throw H.j(new P.bJ("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.N.ij(0,a,o,s.gm(a))
else{l=P.fH(a,o,s.gm(a),C.k,!0)
if(l!=null)a=s.aK(a,o,s.gm(a),l)}return new P.qd(a,t,c)},
I9:function(){var t,s,r,q,p
t=P.Gg(22,new P.tp(),!0,P.dc)
s=new P.to(t)
r=new P.tq()
q=new P.tr()
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
yS:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$yT()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.v(t,d)
r=t[d]
q=C.c.aa(a,s)^96
p=J.d2(r,q>95?31:q)
if(typeof p!=="number")return p.aQ()
d=p&31
o=C.d.b5(p,5)
if(o>=8)return H.v(e,o)
e[o]=s}return d},
cR:function cR(){},
bG:function bG(){},
e1:function e1(a,b){this.a=a
this.b=b},
V:function V(){},
dt:function dt(a){this.a=a},
lP:function lP(){},
lQ:function lQ(){},
ei:function ei(){},
fo:function fo(){},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mU:function mU(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a){this.a=a},
eH:function eH(a){this.a=a},
da:function da(a){this.a=a},
bH:function bH(a){this.a=a},
oh:function oh(){},
ke:function ke(){},
lF:function lF(a){this.a=a},
r8:function r8(a){this.a=a},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
lZ:function lZ(a,bU,$ti){this.a=a
this.bU=bU
this.$ti=$ti},
E:function E(){},
n:function n(){},
jI:function jI(){},
p:function p(){},
b0:function b0(){},
d8:function d8(){},
dq:function dq(){},
z:function z(){},
dz:function dz(){},
eC:function eC(){},
dT:function dT(){},
x:function x(){},
c2:function c2(N){this.N=N},
eJ:function eJ(){},
qh:function qh(a){this.a=a},
qe:function qe(a){this.a=a},
qf:function qf(a){this.a=a},
qg:function qg(a,b){this.a=a
this.b=b},
kI:function kI(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
tw:function tw(a,b){this.a=a
this.b=b},
qd:function qd(a,b,c){this.a=a
this.b=b
this.c=c},
tp:function tp(){},
to:function to(a){this.a=a},
tq:function tq(){},
tr:function tr(){},
rT:function rT(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qW:function qW(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yZ:function(a){var t,s,r,q,p
if(a==null)return
t=P.jM()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.c4)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
Iv:function(a){var t,s
t=new P.bk(0,$.ap,null,[null])
s=new P.dX(t,[null])
a.then(H.dn(new P.ty(s),1))["catch"](H.dn(new P.tz(s),1))
return t},
u9:function(){var t=$.wI
if(t==null){t=J.kS(window.navigator.userAgent,"Opera",0)
$.wI=t}return t},
wK:function(){var t=$.wJ
if(t==null){t=P.u9()!==!0&&J.kS(window.navigator.userAgent,"WebKit",0)
$.wJ=t}return t},
An:function(){var t,s
t=$.wF
if(t!=null)return t
s=$.wG
if(s==null){s=J.kS(window.navigator.userAgent,"Firefox",0)
$.wG=s}if(s)t="-moz-"
else{s=$.wH
if(s==null){s=P.u9()!==!0&&J.kS(window.navigator.userAgent,"Trident/",0)
$.wH=s}if(s)t="-ms-"
else t=P.u9()===!0?"-o-":"-webkit-"}$.wF=t
return t},
t_:function t_(){},
t1:function t1(a,b){this.a=a
this.b=b},
qG:function qG(){},
qH:function qH(a,b){this.a=a
this.b=b},
t0:function t0(a,b){this.a=a
this.b=b},
kr:function kr(a,b,c){this.a=a
this.b=b
this.c=c},
ty:function ty(a){this.a=a},
tz:function tz(a){this.a=a},
lv:function lv(){},
lw:function lw(a){this.a=a},
I7:function(a){var t,s,r
t=new P.bk(0,$.ap,null,[null])
s=new P.kH(t,[null])
a.toString
r=W.Z
W.eO(a,"success",new P.tm(a,s),!1,r)
W.eO(a,"error",s.gek(),!1,r)
return t},
lH:function lH(){},
tm:function tm(a,b){this.a=a
this.b=b},
mT:function mT(){},
od:function od(){},
hQ:function hQ(){},
q6:function q6(){},
HP:function(a){var t=new P.rG(0,0)
t.fB(a)
return t},
ia:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
yy:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
GW:function(a,b,c,d,e){var t,s
if(typeof c!=="number")return c.a4()
if(c<0)t=-c*0
else t=c
if(typeof d!=="number")return d.a4()
if(d<0)s=-d*0
else s=d
return new P.bL(a,b,t,s,[e])},
rs:function rs(){},
rG:function rG(a,b){this.a=a
this.b=b},
dA:function dA(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
rH:function rH(){},
bL:function bL(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kW:function kW(){},
ee:function ee(){},
m_:function m_(){},
m0:function m0(){},
m1:function m1(){},
m2:function m2(){},
m3:function m3(){},
m4:function m4(){},
m5:function m5(){},
m6:function m6(){},
m7:function m7(){},
m8:function m8(){},
m9:function m9(){},
ma:function ma(){},
mb:function mb(){},
mc:function mc(){},
md:function md(){},
me:function me(){},
mf:function mf(){},
mg:function mg(){},
mu:function mu(){},
my:function my(){},
dx:function dx(){},
e5:function e5(){},
mR:function mR(){},
d7:function d7(){},
np:function np(){},
j5:function j5(){},
jp:function jp(){},
nN:function nN(){},
nO:function nO(){},
d9:function d9(){},
o9:function o9(){},
j6:function j6(){},
jq:function jq(){},
os:function os(){},
ox:function ox(){},
oy:function oy(){},
oK:function oK(){},
oL:function oL(){},
hS:function hS(){},
pH:function pH(){},
j7:function j7(){},
jr:function jr(){},
pK:function pK(){},
l2:function l2(a){this.a=a},
ck:function ck(){},
pN:function pN(){},
pP:function pP(){},
kh:function kh(){},
pX:function pX(){},
i0:function i0(){},
db:function db(){},
q7:function q7(){},
j8:function j8(){},
js:function js(){},
qj:function qj(){},
qo:function qo(){},
qp:function qp(){},
i8:function i8(){},
rM:function rM(){},
rN:function rN(){},
rO:function rO(){},
bi:function bi(){},
dc:function dc(){},
fS:function fS(){},
eX:function eX(){},
fT:function fT(){},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
bF:function bF(){},
eZ:function eZ(){},
lc:function lc(){},
lu:function lu(){},
k0:function k0(){},
kY:function kY(){},
oO:function oO(){},
oP:function oP(){},
tc:function tc(){},
kd:function kd(){},
j9:function j9(){},
jt:function jt(){}},W={
A8:function(a){if(a!=null)return new Audio(a)
return new Audio()},
A9:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
Aj:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
HF:function(a){var t=new W.qT(a,null)
t.fw(a)
return t},
Ao:function(a,b,c){var t,s
t=document.body
s=(t&&C.w).aO(t,a,b,c)
s.toString
t=new H.eK(new W.d0(s),new W.tu(),[W.af])
return t.gbl(t)},
h3:function(a){var t,s,r
t="element tag unavailable"
try{s=J.zt(a)
if(typeof s==="string")t=a.tagName}catch(r){H.bE(r)}return t},
uz:function(a,b,c){return W.x_(a,null,null,b,null,null,null,c).b1(new W.mL())},
x_:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e6
s=new P.bk(0,$.ap,null,[t])
r=new P.dX(s,[t])
q=new XMLHttpRequest()
C.S.ik(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.Je
W.eO(q,"load",new W.mM(r,q),!1,t)
W.eO(q,"error",r.gek(),!1,t)
q.send()
return s},
x0:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
uA:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.zE(t,a)}catch(r){H.bE(r)}return t},
eR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
yx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eO:function(a,b,c,d,e){var t=W.Ij(new W.r7(c))
t=new W.r6(0,a,b,t,!1,[e])
t.fz(a,b,c,!1,e)
return t},
yv:function(a){var t,s
t=document.createElement("a")
s=new W.rP(t,window.location)
s=new W.i9(s)
s.fA(a)
return s},
HK:function(a,b,c,d){return!0},
HL:function(a,b,c,d){var t,s,r,q,p
t=d.geV()
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
yz:function(){var t=P.x
t=new W.t3(P.jN(C.q,t),P.a3(null,null,null,t),P.a3(null,null,null,t),P.a3(null,null,null,t),null)
t.fC(null,new H.ev(C.q,new W.t4(),[H.N(C.q,0),null]),["TEMPLATE"],null)
return t},
yK:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.HG(a)
if(!!J.ai(t).$isag)return t
return}else return a},
I8:function(a){var t
if(!!J.ai(a).$iseh)return a
t=new P.kr([],[],!1)
t.c=!0
return t.bd(a)},
HG:function(a){if(a===window)return a
else return new W.qV(a)},
Ij:function(a){var t=$.ap
if(t===C.e)return a
return t.hw(a,!0)},
b3:function b3(){},
eU:function eU(){},
kZ:function kZ(){},
eY:function eY(){},
cK:function cK(){},
l6:function l6(){},
h5:function h5(){},
h8:function h8(){},
la:function la(){},
f_:function f_(){},
f0:function f0(){},
fY:function fY(){},
io:function io(){},
lj:function lj(){},
lk:function lk(){},
ef:function ef(){},
lp:function lp(){},
ir:function ir(){},
h_:function h_(){},
lx:function lx(){},
ly:function ly(){},
h0:function h0(){},
h1:function h1(){},
lz:function lz(){},
bM:function bM(){},
f4:function f4(){},
iY:function iY(){},
qT:function qT(a,b){this.a=a
this.b=b},
jY:function jY(){},
qU:function qU(){},
iu:function iu(){},
lA:function lA(){},
lB:function lB(){},
lG:function lG(){},
f5:function f5(){},
iv:function iv(){},
lJ:function lJ(){},
ix:function ix(){},
eh:function eh(){},
iy:function iy(){},
iz:function iz(){},
lK:function lK(){},
lL:function lL(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
iZ:function iZ(){},
ji:function ji(){},
iD:function iD(){},
iE:function iE(){},
kx:function kx(a,$ti){this.a=a
this.$ti=$ti},
cc:function cc(){},
tu:function tu(){},
lR:function lR(){},
h4:function h4(){},
lX:function lX(){},
Z:function Z(){},
ag:function ag(){},
mq:function mq(){},
ce:function ce(){},
fd:function fd(){},
j_:function j_(){},
jj:function jj(){},
mr:function mr(){},
ms:function ms(){},
mt:function mt(){},
mv:function mv(){},
mw:function mw(){},
iU:function iU(){},
cn:function cn(){},
mI:function mI(){},
ff:function ff(){},
j0:function j0(){},
jk:function jk(){},
iW:function iW(){},
e6:function e6(){},
mL:function mL(){},
mM:function mM(a,b){this.a=a
this.b=b},
hm:function hm(){},
mQ:function mQ(){},
hn:function hn(){},
fh:function fh(){},
ho:function ho(){},
nm:function nm(){},
jL:function jL(){},
hz:function hz(){},
hA:function hA(){},
nD:function nD(){},
nI:function nI(){},
jP:function jP(){},
jQ:function jQ(){},
nP:function nP(){},
nQ:function nQ(){},
nR:function nR(){},
nS:function nS(){},
nT:function nT(){},
hI:function hI(){},
co:function co(){},
jR:function jR(){},
ja:function ja(){},
ju:function ju(){},
e8:function e8(){},
o5:function o5(){},
o6:function o6(){},
d0:function d0(a){this.a=a},
af:function af(){},
jU:function jU(){},
jV:function jV(){},
jb:function jb(){},
jv:function jv(){},
ob:function ob(){},
oc:function oc(){},
og:function og(){},
oi:function oi(){},
om:function om(){},
oo:function oo(){},
ea:function ea(){},
ou:function ou(){},
cg:function cg(){},
k4:function k4(){},
jc:function jc(){},
jw:function jw(){},
oA:function oA(){},
oB:function oB(){},
oF:function oF(){},
oI:function oI(){},
oS:function oS(){},
k7:function k7(){},
k8:function k8(){},
fv:function fv(){},
k9:function k9(){},
p2:function p2(){},
p5:function p5(){},
p6:function p6(){},
p9:function p9(){},
cp:function cp(){},
kb:function kb(){},
h6:function h6(){},
h9:function h9(){},
pc:function pc(){},
hU:function hU(){},
cq:function cq(){},
kc:function kc(){},
jd:function jd(){},
jx:function jx(){},
fw:function fw(){},
pe:function pe(){},
ci:function ci(){},
pf:function pf(){},
pg:function pg(){},
pl:function pl(){},
pm:function pm(a){this.a=a},
pJ:function pJ(){},
cj:function cj(){},
eG:function eG(){},
kg:function kg(){},
pQ:function pQ(){},
pR:function pR(){},
hY:function hY(){},
hZ:function hZ(){},
cP:function cP(){},
cH:function cH(){},
pY:function pY(){},
je:function je(){},
jy:function jy(){},
pZ:function pZ(){},
h7:function h7(){},
ha:function ha(){},
q2:function q2(){},
cr:function cr(){},
ki:function ki(){},
jf:function jf(){},
jz:function jz(){},
fz:function fz(){},
kj:function kj(){},
fA:function fA(){},
q8:function q8(){},
kk:function kk(){},
dC:function dC(){},
qi:function qi(){},
qm:function qm(){},
qn:function qn(){},
fB:function fB(){},
kl:function kl(){},
qs:function qs(){},
ko:function ko(){},
qz:function qz(){},
eL:function eL(){},
fC:function fC(){},
qR:function qR(){},
i6:function i6(){},
jg:function jg(){},
jA:function jA(){},
kv:function kv(){},
jh:function jh(){},
jB:function jB(){},
r_:function r_(){},
r0:function r0(){},
kz:function kz(){},
j1:function j1(){},
jl:function jl(){},
rm:function rm(){},
ic:function ic(){},
j2:function j2(){},
jm:function jm(){},
rQ:function rQ(){},
kE:function kE(){},
j3:function j3(){},
jn:function jn(){},
kG:function kG(){},
j4:function j4(){},
jo:function jo(){},
td:function td(){},
te:function te(){},
qN:function qN(){},
r1:function r1(a){this.a=a},
r2:function r2(a){this.a=a},
r5:function r5(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
i7:function i7(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
r6:function r6(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
r7:function r7(a){this.a=a},
i9:function i9(a){this.a=a},
bv:function bv(){},
jW:function jW(a){this.a=a},
o8:function o8(a){this.a=a},
o7:function o7(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(){},
rR:function rR(){},
rS:function rS(){},
t3:function t3(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
t4:function t4(){},
t2:function t2(){},
iS:function iS(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qV:function qV(a){this.a=a},
e9:function e9(){},
t5:function t5(){},
rP:function rP(a,b){this.a=a
this.b=b},
kJ:function kJ(a){this.a=a},
tb:function tb(a){this.a=a}},T={
uB:function(a,b,c,d){var t
H.J3(a,"$isp",[P.E],"$asp")
t=new T.hp(a,null,d,b,null)
t.fp(a,b,c,d)
return t},
xQ:function(a,b){return new T.oj(0,a,new Uint8Array(H.cz(b==null?32768:b)))},
Hz:function(a){var t=new T.qC(-1,0,0,0,0,null,null,"",[])
t.fu(a)
return t},
HA:function(a,b){var t=new T.qD(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.fv(a,b)
return t},
fg:function(a){var t=new T.mN(null,0,2147483647)
t.fo(a)
return t},
fO:function fO(a,b){this.a=a
this.b=b},
fP:function fP(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
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
df:function df(a){this.a=a},
hp:function hp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oj:function oj(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qD:function qD(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
qE:function qE(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
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
qB:function qB(a){this.a=a},
mN:function mN(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
ld:function ld(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.O=O
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
lf:function lf(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.O=O
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
lI:function lI(){},
mF:function mF(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.O=O
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
GZ:function(a,b,c,d,e){var t,s
t=[P.x]
s=H.a([],t)
t=new T.hR("Glitch",0.01,0.01,0.01,s,0.5,a,new H.u(0,null,null,null,null,null,0,[X.G,P.V]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.I(null,null,A.a2),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.O]),H.a([],[A.fW]),1)
t.a6(a,b,c,d,e)
return t},
hR:function hR(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
c1:function c1(a,b){this.a=a
this.b=b},
As:function(a,b,c,d){var t,s,r,q
t=new B.ds(new P.c2(""),0,0)
t.an(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;++q)t.an(s[q],8)
return t.bc(b)},
Ar:function(a,b,c,d){var t,s,r,q,p
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.e_(a,b)
for(q=0;q<c;++q){p=r.ac(8)
if(q>=t)return H.v(s,q)
s[q]=p}return s},
Aq:function(a,b,c,d){var t,s,r,q,p
t=new B.ds(new P.c2(""),0,0)
t.an(a,8)
s=d.gd0()
r=C.f.ap(Math.log(H.kM(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cN(c,0,null)
for(s=q.length,p=0;p<s;++p)t.an(q[p],r)
return t.bc(b)},
Ap:function(a,b,c,d){var t,s,r,q,p,o
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.e_(a,b)
for(o=0;o<c;++o){r=p.ac(q)
if(o>=t)return H.v(s,o)
s[o]=r}return s}},S={kX:function kX(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},bI:function bI(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},iq:function iq(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mK:function mK(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},v3:function v3(a){this.a=a},k_:function k_(){},nn:function nn(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nG:function nG(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},p1:function p1(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},fp:function fp(){},vT:function vT(){},vU:function vU(){},vV:function vV(){},ug:function ug(){},uj:function uj(){},u6:function u6(){},vD:function vD(){},vX:function vX(){},vY:function vY(){},li:function li(){},vt:function vt(){},vp:function vp(){},ns:function ns(){},ua:function ua(){},u1:function u1(){},lD:function lD(){},vc:function vc(){},lE:function lE(){},on:function on(){},vK:function vK(){},vH:function vH(){},vL:function vL(){},u0:function u0(){},mC:function mC(){},lg:function lg(){},u5:function u5(){},u4:function u4(){},vu:function vu(){},vM:function vM(){},vv:function vv(){},ui:function ui(){},uh:function uh(){},vJ:function vJ(){},vI:function vI(){},q_:function q_(){},vO:function vO(){},u7:function u7(){},u8:function u8(){},vW:function vW(){},hH:function hH(){},vh:function vh(){},vi:function vi(){},vj:function vj(){},vk:function vk(){},vE:function vE(){},vF:function vF(){},vG:function vG(){},vg:function vg(){},vm:function vm(){},vn:function vn(){},uw:function uw(){},ux:function ux(){},uy:function uy(){},vo:function vo(){},vl:function vl(){},u2:function u2(){},vQ:function vQ(){},vR:function vR(){},vP:function vP(){}},K={bU:function bU(a,b){this.a=a
this.b=b},nq:function nq(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x1=x1
_.x2=x2},oY:function oY(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c}},L={
zO:function(a,b,c,d,e){var t,s,r
t=P.x
s=A.e0
r=P.E
r=new L.aG(P.C(null,null,null,t,s),P.C(null,null,null,r,s),P.C(null,null,null,t,r),P.C(null,null,null,r,t))
r.j(0,$.aO,L.e("#FF9B00"),!0)
r.j(0,$.aQ,L.e("#FF9B00"),!0)
r.j(0,$.aP,L.e("#FF8700"),!0)
r.j(0,$.aZ,L.e("#7F7F7F"),!0)
r.j(0,$.aY,L.e("#727272"),!0)
r.j(0,$.aS,L.e("#A3A3A3"),!0)
r.j(0,$.aT,L.e("#999999"),!0)
r.j(0,$.aR,L.e("#898989"),!0)
r.j(0,$.aX,L.e("#EFEFEF"),!0)
r.j(0,$.aW,L.e("#DBDBDB"),!0)
r.j(0,$.aV,L.e("#C6C6C6"),!0)
r.j(0,$.aU,L.e("#ADADAD"),!0)
s=[t]
t=new L.fQ(0.01,0.01,0.01,0.5,a,new H.u(0,null,null,null,null,null,0,[X.G,P.V]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.k(H.a(["Blank","Null","Boring","Error"],s),t),P.k(H.a(["Blank","Null","Boring","Error"],s),t),P.k(H.a(["Nothing","Errors","Glitches"],s),t),P.k(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.O]),H.a([],[A.fW]),Q.I(null,null,A.a2))
t.af(a,b,c,d,e)
return t},
e:function(a){if(C.c.ai(a,"#"))return A.wB(C.c.am(a,1))
else return A.wB(a)},
fQ:function fQ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p_:function p_(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
pS:function pS(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2}},M={l1:function l1(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fX:function fX(a,b){this.a=a
this.b=b},lC:function lC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hc:function hc(){},bC:function bC(a,b){this.a=a
this.b=b},ph:function ph(a){this.a=a},qv:function qv(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},U={l5:function l5(){},nF:function nF(a){this.a=a},of:function of(a){this.a=a},pE:function pE(){},pF:function pF(a){this.a=a},pG:function pG(a){this.a=a},lN:function lN(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ah,eq,er,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.O=O
_.ah=ah
_.eq=eq
_.er=er
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},mh:function mh(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nH:function nH(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},b:function b(a){this.a=a},W:function W(b,c,a){this.b=b
this.c=c
this.a=a},aj:function aj(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},q0:function q0(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
Hy:function(a){if(J.cS(a).ai(a," "))return C.c.am(a,1)
return a},
qw:function qw(a){this.a=a},
qx:function qx(a,b){this.a=a
this.b=b},
qy:function qy(a,b){this.a=a
this.b=b}},E={
IR:function(){A.tE()
W.uz(C.c.al("../",N.oq())+"navbar.txt",null,null).b1(O.IU())
$.tB=document.querySelector("#story")
E.ik("make form to generate json datastring for entrant (easier than csv), BBName, Entrant Name, images csv, text, jrComment, shogunComment  ")
E.ik("make sample file for showing three contest entry")
E.ik("have image folder for entrants")
E.ik("slurp file")
E.ik("display contest entries")
E.ik("allow filtering (use PL's image browser code thingy)")
E.IT()
E.tC()},
ik:function(a){var t=document.createElement("li")
C.a2.cl(t,"TODO: "+a)
$.tB.appendChild(t)},
tC:function(){var t=0,s=P.bo(),r,q,p
var $async$tC=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=2
return P.cs(B.ls(),$async$tC)
case 2:r=b
P.eT("entries is "+H.y(r))
for(q=J.cJ(r);q.I();){p=q.gS()
H.z6("entry is "+H.y(p))
J.zl(p,$.tB)}return P.bs(null,s)}})
return P.bt($async$tC,s)},
IT:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=document
s=t.createElement("div")
s.textContent="For JR Use Only"
$.tB.appendChild(s)
r=W.uA("text")
r.id="bbName"
q=W.uA("text")
q.id="entrantName"
p=W.uA("text")
p.id="imagesCSV"
o=t.createElement("textarea")
o.id="text"
n=t.createElement("textarea")
n.id="jrComment"
m=t.createElement("textarea")
m.id="shogunComment"
l=t.createElement("button")
l.textContent="Submit"
k=H.a([r,q,p,o,n,m],[W.cc])
for(j=0;j<6;++j){i=k[j]
t=J.ai(i)
if(!!t.$isho){s.appendChild(i)
i.value=i.id}else if(!!t.$ishZ){s.appendChild(i)
i.value=i.id}}s.appendChild(l)
W.eO(l,"click",new E.tR(s,k),!1,W.e8)},
tR:function tR(a,b){this.a=a
this.b=b},
iV:function iV(){},
oe:function oe(){},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},
l0:function l0(a,b,c){this.a=a
this.b=b
this.c=c},
nV:function nV(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
oH:function oH(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x1=x1
_.x2=x2},
oW:function oW(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
qr:function qr(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},O={l7:function l7(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},c8:function c8(){},dr:function dr(){},lb:function lb(a){this.a=a},eF:function eF(){},iG:function iG(){},
IW:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.oq()
a=J.zC(a,P.dQ("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.tT(t))
s=document
J.wn(s.querySelector("#navbar"),"beforeend",a,C.x,null)
if(J.be(O.IH("seerOfVoid",null),"true"))P.AX(new O.tU(),P.d8)
r=new P.e1(Date.now(),!1)
if(H.vy(r)===4&&H.vx(r)===1)J.wk(s.querySelector("body")).h(0,"voidbody")
q=H.vy(r)
p=H.vx(r)
o=C.a.C(H.xT(r))
n=C.a.C(q)
m=C.a.C(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.k5(null,null)
k.dl(H.fr(l,null,null))
k.ih()
if($.Ho||k.a.d_()>0.99)H.kQ(s.querySelector("#today"),"$iseU").href=C.c.al("../",t)+"dead_index.html?seed="+l
else H.kQ(s.querySelector("#today"),"$iseU").href=C.c.al("../",t)+"index2.html?seed="+l},
IH:function(a,b){var t,s,r,q
t=P.yj().gd7().n(0,a)
if(t!=null)t=P.t7(t,0,J.c5(t),C.n,!1)
if(t!=null)return t
s=$.z9
if(s.length!==0){r=J.zG(window.location.href,J.zy(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.yk(H.zb(s,q,"")+"?"+$.z9,0,null).gd7().n(0,a)}return},
J5:function(){var t,s,r,q
t=document
J.wk(t.querySelector("body")).h(0,"voidbody")
s=new W.kx(t.querySelectorAll(".void"),[null])
for(t=new H.et(s,s.gm(s),0,null,[null]);t.I();){r=t.d
q=J.zn(J.tZ(r))
if(q==="none"||q.length===0)O.J_(r)
else O.IJ(r)}},
J_:function(a){var t,s
if(a==null)return
t=J.b1(a)
s=t.gaS(a)
J.wq(s,!!t.$ishU?"inline":"block")},
IJ:function(a){if(a==null)return
J.wq(J.tZ(a),"none")},
J0:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.eT("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.ed(s,",")
if(!J.zj(r,a))window.localStorage.setItem(t,H.y(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.bE(q)
P.eT("Saving isn't possible....you don't have local storage")}},
tT:function tT(a){this.a=a},
tU:function tU(){},
tS:function tS(){},
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
_.z=z}},Y={pW:function pW(a){this.a=a},oJ:function oJ(a){this.a=a},lh:function lh(a){this.a=a},mD:function mD(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mE:function mE(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oa:function oa(b,a){this.b=b
this.a=a},dS:function dS(a,b){this.a=a
this.b=b},ae:function ae(a,b){this.a=a
this.b=b},d3:function d3(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},c_:function c_(c,d,e,f,a,b){var _=this
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
_.b=b},is:function is(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bD:function bD(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cZ:function cZ(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},lm:function lm(c,a,b){this.c=c
this.a=a
this.b=b},by:function by(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},k1:function k1(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iT:function iT(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},k3:function k3(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},oX:function oX(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oZ:function oZ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},pa:function pa(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
nX:function(){var t=0,s=P.bo(),r,q
var $async$nX=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:P.eT("loading big bads")
r=$
q=J
t=2
return P.cs(A.eu("BigBadLists/bigBads.txt",!1,!1,null),$async$nX)
case 2:r.xP=q.ed(b,"\n")
return P.bs(null,s)}})
return P.bt($async$nX,s)},
Is:function(a){var t,s,r,q,p,o
t=J.ed(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.c4)(t),++q){p=t[q]
o=J.bb(p)
r+=" "+(J.zL(o.n(p,0))+o.am(p,1))}return r}},A={lo:function lo(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
h:function(a,b,c,d,e){var t=new A.a2(c,e,null,a,!1,P.a3(null,null,null,G.a_),0,3)
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
n9:function n9(){},
n8:function n8(){},
fW:function fW(){},
fZ:function(a,b,c,d){var t=new A.e0(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.fn(a,b,c,d)
return t},
wA:function(a,b,c,d){var t=A.fZ(0,0,0,255)
t.b=C.a.ag(C.d.ap(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ag(C.d.ap(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ag(C.d.ap(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ag(C.d.ap(d*255),0,255)
return t},
Af:function(a,b){if(b){if(typeof a!=="number")return a.aQ()
return A.fZ((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aQ()
return A.fZ((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
wB:function(a){return A.Af(H.fr(a,16,new A.tx()),a.length>=8)},
e0:function e0(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
tx:function tx(){},
xN:function(){if($.xL)return
$.xL=!0
Z.AO()},
eu:function(a,b,c,d){var t=0,s=P.bo(),r,q,p,o,n
var $async$eu=P.bu(function(e,f){if(e===1)return P.br(f,s)
while(true)switch(t){case 0:A.xN()
t=$.$get$cW().a_(0,a)?3:5
break
case 3:q=$.$get$cW().n(0,a)
p=J.ai(q)
if(!!p.$isdR){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cN(q)
t=1
break}}else throw H.j("Requested resource ("+a+") is an unexpected type: "+H.y(J.wm(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.vf==null?8:9
break
case 8:t=10
return P.cs(A.nC(),$async$eu)
case 10:case 9:n=$.vf.f0(a)
t=n!=null?11:12
break
case 11:t=13
return P.cs(A.nx(n),$async$eu)
case 13:if(!$.$get$cW().a_(0,a))$.$get$cW().i(0,a,new Y.dR(a,null,H.a([],[[P.f3,,]]),[null]))
r=$.$get$cW().n(0,a).b
t=1
break
case 12:case 7:r=A.Gi(a,!1,d)
t=1
break
case 4:case 1:return P.bs(r,s)}})
return P.bt($async$eu,s)},
nC:function(){var t=0,s=P.bo(),r
var $async$nC=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cs(A.eu("manifest/manifest.txt",!1,!0,$.wW),$async$nC)
case 2:r.vf=b
return P.bs(null,s)}})
return P.bt($async$nC,s)},
Gh:function(a){if(!$.$get$cW().a_(0,a))$.$get$cW().i(0,a,new Y.dR(a,null,H.a([],[[P.f3,,]]),[null]))
return $.$get$cW().n(0,a)},
Gi:function(a,b,c){var t
if($.$get$cW().a_(0,a))throw H.j("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.wV(C.b.gbi(a.split("."))).a
t=A.Gh(a)
c.bb(A.xK(a,!1)).b1(new A.nA(t))
return t.cN(0)},
nx:function(a){var t=0,s=P.bo(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$nx=P.bu(function(b,a0){if(b===1)return P.br(a0,s)
while(true)switch(t){case 0:t=3
return P.cs(A.eu(a+".bundle",!1,!0,null),$async$nx)
case 3:q=a0
p=C.c.K(a,0,C.c.eC(a,$.$get$xM()))
o=P.d8
n=new P.dX(new P.bk(0,$.ap,null,[o]),[o])
m=H.a([],[P.cm])
for(o=J.zo(q),l=o.length,k=[[P.f3,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.c4)(o),++i){h=o[i]
g=J.b1(h)
f=Z.wV(C.b.gbi(J.ed(g.gJ(h),"."))).a
e=p+"/"+H.y(g.gJ(h))
if($.$get$cW().a_(0,e)){m.push(A.eu(e,!1,!1,null))
continue}d=H.kQ(g.gbq(h),"$isdc")
if(!$.$get$cW().a_(0,e))$.$get$cW().i(0,e,new Y.dR(e,null,H.a([],k),j))
c=$.$get$cW().n(0,e)
m.push(c.cN(0))
f.bh(d.buffer).b1(new A.ny(f,c))}P.AY(m,null,!1).b1(new A.nz(n))
r=n.a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$nx,s)},
hD:function(a,b){var t=0,s=P.bo(),r,q,p,o,n
var $async$hD=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:if($.$get$ve().a_(0,a)){r=$.$get$ve().n(0,a)
t=1
break}q=W.fv
p=new P.bk(0,$.ap,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.eO(n,"load",new A.nB(new P.dX(p,[q]),n),!1,W.Z)
n.src=A.xK(a,!1)
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$hD,s)},
xK:function(a,b){if(C.c.ai(a,"/")){a=C.c.am(a,1)
b=!0}else b=!1
if(b)return H.y(window.location.protocol)+"//"+H.y(window.location.host)+"/"+a
return C.c.al("../",N.oq())+a},
nA:function nA(a){this.a=a},
ny:function ny(a,b){this.a=a
this.b=b},
nz:function nz(a){this.a=a},
nB:function nB(a,b){this.a=a
this.b=b},
ol:function ol(){},
jZ:function jZ(){},
k5:function k5(a,b){this.a=a
this.b=b},
tE:function(){var t=0,s=P.bo(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$tE=P.bu(function(a0,a1){if(a0===1)return P.br(a1,s)
while(true)switch(t){case 0:if($.z_){t=1
break}$.z_=!0
D.Ht()
q=P.x
p=[q]
o=H.a(["metal"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,0.3)
$.$get$c().h(0,o)
$.F=o
o=H.a(["dutton"],p)
n=$.ab
H.a([],p)
o=new G.bK(n,o,0.6)
$.$get$c().h(0,o)
$.xd=o
o=H.a(["ceramic"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$c().h(0,o)
$.bQ=o
o=H.a(["bone"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,0.2)
$.$get$c().h(0,o)
$.bc=o
o=H.a(["wood"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$c().h(0,o)
$.X=o
o=H.a(["plastic"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$c().h(0,o)
$.aA=o
o=H.a(["rubber"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$c().h(0,o)
$.ca=o
o=H.a(["paper"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$c().h(0,o)
$.M=o
o=H.a(["cloth","fabric"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$c().h(0,o)
$.Q=o
o=H.a(["glass"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$c().h(0,o)
$.b9=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.3)
$.$get$c().h(0,o)
$.bV=o
o=H.a(["flesh","meat","muscle"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$c().h(0,o)
$.bj=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.H
H.a([],p)
o=new G.bK(n,o,3.1)
$.$get$c().h(0,o)
$.bp=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$c().h(0,o)
$.cf=o
o=H.a(["plant","leaf","vine"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$c().h(0,o)
$.b5=o
o=H.a(["feathery"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,-0.1)
$.$get$c().h(0,o)
$.bA=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.J
H.a([],p)
o=new G.bK(n,o,0.1)
$.$get$c().h(0,o)
$.bS=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.J
H.a([],p)
o=new G.bK(n,o,-13)
$.$get$c().h(0,o)
$.bR=o
o=H.a(["stone","rock","concrete"],p)
n=$.w
H.a([],p)
o=new G.bK(n,o,0.3)
$.$get$c().h(0,o)
$.ax=o
o=H.a(["legendary"],p)
n=$.n7
H.a([],p)
o=new G.bK(n,o,13)
$.$get$c().h(0,o)
$.a0=o
o=H.a(["Unbeatable"],p)
n=$.n7
H.a([],p)
o=new G.bK(n,o,40.37)
$.$get$c().h(0,o)
$.FY=o
o=$.J
H.a([],p)
o=new G.aJ(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.aw=o
o=$.v_
H.a([],p)
o=new G.aJ(o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.b4=o
o=$.v_
H.a([],p)
o=new G.aJ(o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.am=o
o=$.J
H.a([],p)
o=new G.aJ(o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bm=o
o=$.H
H.a([],p)
o=new G.aJ(o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c0=o
o=$.J
H.a([],p)
o=new G.aJ(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.ba=o
o=$.J
H.a([],p)
o=new G.aJ(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bW=o
o=$.J
H.a([],p)
o=new G.aJ(o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aD=o
o=$.H
H.a([],p)
o=new G.aJ(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aM=o
o=$.q
H.a([],p)
o=new G.aJ(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bq=o
o=$.q
H.a([],p)
o=new G.aJ(o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a9=o
o=$.q
H.a([],p)
o=new G.aJ(o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.bg=o
o=$.J
H.a([],p)
o=new G.aJ(o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bh=o
o=$.J
H.a([],p)
o=new G.aJ(o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.as=o
o=$.J
H.a([],p)
o=new G.aJ(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.al=o
o=$.J
H.a([],p)
o=new G.aJ(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.aq=o
o=$.J
H.a([],p)
o=new G.aJ(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Y=o
o=$.H
H.a([],p)
o=new G.aJ(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.au=o
o=$.J
H.a([],p)
o=new G.aJ(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aB=o
o=$.J
H.a([],p)
o=new G.aJ(o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.b8=o
o=$.J
H.a([],p)
o=new G.aJ(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bw=o
o=$.J
H.a([],p)
o=new G.aJ(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a4=o
o=$.n7
H.a([],p)
o=new G.aJ(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.S=o
o=$.n7
H.a([],p)
o=new G.aJ(o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.P=o
o=$.J
H.a([],p)
o=new G.aJ(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.ay=o
o=$.q
H.a([],p)
o=new G.aJ(o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.aL=o
o=$.J
H.a([],p)
o=new G.aJ(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aF=o
o=$.J
H.a([],p)
o=new G.aJ(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b7=o
o=$.J
H.a([],p)
o=new G.aJ(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bN=o
o=$.J
H.a([],p)
o=new G.aJ(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bn=o
o=$.J
H.a([],p)
o=new G.aJ(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.c9=o
o=$.J
H.a([],p)
o=new G.aJ(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.at=o
o=$.J
H.a([],p)
o=new G.aJ(o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.ac=o
o=$.q
H.a([],p)
o=new G.aJ(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.aN=o
o=$.J
H.a([],p)
o=new G.aJ(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.aa=o
o=$.J
H.a([],p)
o=new G.aJ(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aK=o
o=$.J
H.a([],p)
o=new G.aJ(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aH=o
o=$.J
H.a([],p)
o=new G.aJ(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.bd=o
o=H.a(["perfectly generic"],p)
n=$.J
H.a([],p)
o=new G.ah(n,o,0.1)
$.$get$c().h(0,o)
$.jF=o
o=H.a(["a sword"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.fk=o
o=H.a(["a hammer"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uM=o
o=H.a(["a rifle"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uV=o
o=H.a(["a pistol"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uS=o
o=H.a(["a blade"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.x4=o
o=H.a(["a dagger"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uH=o
o=H.a(["a santa"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.hs=o
o=H.a(["a fist"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xf=o
o=H.a(["claws"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.n_=o
o=H.a(["a grenade"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.n0=o
o=H.a(["a freaking safe"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xv=o
o=H.a(["a ball"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.eo=o
o=H.a(["a trident"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xD=o
o=H.a(["a card"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.mZ=o
o=H.a(["a frying pan"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uJ=o
o=H.a(["a pillow"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.e7=o
o=H.a(["a machinegun"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uO=o
o=H.a(["a shuriken"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xz=o
o=H.a(["a sling"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xB=o
o=H.a(["a yoyo"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xF=o
o=H.a(["a cane"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.x8=o
o=H.a(["a shield"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.fj=o
o=H.a(["a lance"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xp=o
o=H.a(["a ax"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uD=o
o=H.a(["a sign"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xu=o
o=H.a(["a book"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.av=o
o=H.a(["a broom"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.jC=o
o=H.a(["a club"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.jE=o
o=H.a(["a bow"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uE=o
o=H.a(["a whip"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xE=o
o=H.a(["a staff"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xC=o
o=H.a(["a needle"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uQ=o
o=H.a(["dice"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uI=o
o=H.a(["a fork"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xg=o
o=H.a(["a pigeon???"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,1.3)
$.$get$c().h(0,o)
$.uR=o
o=H.a(["a chainsaw"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.x9=o
o=H.a(["a sickle"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xA=o
o=H.a(["a shotgun"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xx=o
o=H.a(["a stick"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.dk=o
o=H.a(["a chain"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.hr=o
o=H.a(["a wrench"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uY=o
o=H.a(["a shovel"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xy=o
o=H.a(["a rolling pin"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uX=o
o=H.a(["a puppet"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uT=o
o=H.a(["a razor"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.uU=o
o=H.a(["a pen"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.n3=o
o=H.a(["a bust"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.jD=o
o=H.a(["a bowling ball"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["a golf club"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xi=o
o=H.a(["a knife"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xo=o
o=H.a(["scissors"],p)
n=$.a5
H.a([],p)
o=new G.ah(n,o,0.4)
$.$get$c().h(0,o)
$.xw=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.H
m=G.a_
l=[m]
k=H.a([$.F,$.aw,$.aM],l)
H.a([],p)
o=new G.d("Forged",k,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a([],p)
n=$.w
k=H.a([$.ac,$.aw],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["fossilized"],p)
n=$.H
k=H.a([$.bc,$.ax],l)
H.a([],p)
o=new G.d("Fossilized",k,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["adamantium"],p)
n=$.H
k=H.a([$.bc,$.F],l)
H.a([],p)
o=new G.d("Adamantium",k,n,o,0)
$.$get$c().h(0,o)
$.x3=o
o=H.a([],p)
n=$.w
k=H.a([$.b7,$.aF],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.Fx=o
o=H.a(["tatami"],p)
n=$.w
k=H.a([$.Q,$.X],l)
H.a([],p)
o=new G.d("Tatami",k,n,o,0)
$.$get$c().h(0,o)
$.FM=o
o=H.a(["mesh","chain link"],p)
n=$.w
k=H.a([$.Q,$.F],l)
H.a([],p)
o=new G.d("Mesh",k,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["foil"],p)
n=$.w
k=H.a([$.M,$.F],l)
H.a([],p)
o=new G.d("Foil",k,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["beanbag"],p)
n=$.w
k=H.a([$.Q,$.ax],l)
H.a([],p)
o=new G.d("Beanbag",k,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["pleather","faux fur"],p)
n=$.w
k=H.a([$.cf,$.aA],l)
H.a([],p)
o=new G.d("Faux Fur",k,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["plywood"],p)
n=$.w
k=H.a([$.X,$.M],l)
H.a([],p)
o=new G.d("Plywood",k,n,o,0)
$.$get$c().h(0,o)
$.jG=o
o=H.a(["colossus"],p)
n=$.w
k=H.a([$.F,$.bj],l)
H.a([],p)
o=new G.d("Colossus",k,n,o,0)
$.$get$c().h(0,o)
$.xb=o
o=H.a(["rotting","zombie"],p)
n=$.H
k=H.a([$.bS,$.bj],l)
H.a([],p)
o=new G.d("Rotting",k,n,o,0)
$.$get$c().h(0,o)
$.EU=o
o=H.a(["draugr","white walker"],p)
n=$.H
k=H.a([$.bS,$.bj,$.bn],l)
H.a([],p)
o=new G.d("Draugr",k,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["Ultraviolet"],p)
n=$.uZ
k=H.a([$.b4,$.am],l)
H.a([],p)
o=new G.d("Ultraviolet",k,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.b4,$.am,$.aw],l)
H.a([],p)
o=new G.d("Ultraviolence",k,n,o,0)
$.$get$c().h(0,o)
$.FX=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.bW],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["candy"],p)
n=$.w
k=H.a([$.as,$.b9],l)
H.a([],p)
o=new G.d("Candy",k,n,o,0)
$.$get$c().h(0,o)
$.uF=o
o=H.a(["cotton candy"],p)
n=$.w
k=H.a([$.as,$.Q],l)
H.a([],p)
o=new G.d("Cotton Candy",k,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["gummy"],p)
n=$.w
k=H.a([$.as,$.ca],l)
H.a([],p)
o=new G.d("Gum",k,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["marrow"],p)
n=$.w
k=H.a([$.as,$.bc],l)
H.a([],p)
o=new G.d("Marrow",k,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["toothy"],p)
n=$.a5
k=H.a([$.bc,$.bQ],l)
H.a([],p)
o=new G.d("Toothy",k,n,o,0)
$.$get$c().h(0,o)
$.FU=o
o=H.a(["Frost"],p)
n=$.w
k=H.a([$.ax,$.b9,$.bj],l)
H.a([],p)
o=new G.d("Frost",k,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.as,$.bN],l)
H.a([],p)
o=new G.d("Arsenic",k,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.w
k=H.a([$.ax,$.b9],l)
H.a([],p)
o=new G.d("Crystal",k,n,o,0)
$.$get$c().h(0,o)
$.uG=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.J
k=H.a([$.ay,$.aB,$.b8,$.Y,$.al,$.bW,$.a4],l)
H.a([],p)
o=new G.d("Mary Sue",k,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.J
k=H.a([$.ba,$.am,$.aw,$.a0,$.aD,$.Y,$.al,$.aq],l)
H.a([],p)
o=new G.d("Edge Lord",k,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["deadpool"],p)
n=$.a5
k=H.a([$.bS,$.aL,$.aq,$.b8],l)
H.a([],p)
o=new G.d("Deadpool",k,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.J
k=H.a([$.ba,$.aq],l)
H.a([],p)
o=new G.d("Spoopy",k,n,o,0)
$.$get$c().h(0,o)
$.FA=o
o=H.a(["wolverine"],p)
n=$.a5
k=H.a([$.bc,$.aw,$.aM],l)
H.a([],p)
o=new G.d("Wolverine",k,n,o,0)
$.$get$c().h(0,o)
$.G8=o
o=H.a(["rabbit's foot"],p)
n=$.a5
k=H.a([$.bW,$.cf],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,n,o,0)
$.$get$c().h(0,o)
$.xt=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.H
k=H.a([$.aM,$.X],l)
H.a([],p)
o=new G.d("Tipped",k,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a5
k=H.a([$.aM,$.aN,$.X],l)
H.a([],p)
o=new G.d("Arrow",k,n,o,0)
$.$get$c().h(0,o)
$.uC=o
o=H.a(["training sword","bokken"],p)
n=$.a5
k=H.a([$.X,$.aw],l)
H.a([],p)
o=new G.d("Bokken",k,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["ironic"],p)
n=$.J
k=H.a([$.aH,$.aq],l)
H.a([],p)
o=new G.d("Irony Type1",k,n,o,0)
$.$get$c().h(0,o)
$.uN=o
o=H.a(["netted","webbed"],p)
n=$.a5
k=H.a([$.bg,$.Q],l)
H.a([],p)
o=new G.d("Netted",k,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["barbed wire"],p)
n=$.a5
k=H.a([$.aM,$.bg,$.F,$.Q],l)
H.a([],p)
o=new G.d("Barbed Wire",k,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["morning star"],p)
n=$.a5
k=H.a([$.aM,$.ac],l)
H.a([],p)
o=new G.d("Morning Star",k,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["decadent"],p)
n=$.J
k=H.a([$.b7,$.bh],l)
H.a([],p)
o=new G.d("Decadent",k,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bR,$.aq],l)
H.a([],p)
o=new G.d("SBAHJ",k,n,o,0)
$.$get$c().h(0,o)
$.F3=o
o=H.a(["bayonet"],p)
n=$.a5
k=H.a([$.aM,$.aN],l)
H.a([],p)
o=new G.d("Bayonet",k,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.w
k=H.a([$.bn,$.aq,$.aw],l)
H.a([],p)
o=new G.d("Snoop",k,n,o,0)
$.$get$c().h(0,o)
$.Fw=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.b4,$.at,$.aw],l)
H.a([],p)
o=new G.d("Light Saber",k,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.J
k=H.a([$.a4,$.aH],l)
H.a([],p)
o=new G.d("Fakey Fake",k,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.J
k=H.a([$.a4,$.bd],l)
H.a([],p)
o=new G.d("Real As Shit",k,n,o,0)
$.$get$c().h(0,o)
$.EO=o
o=H.a(["skeletal"],p)
n=$.a5
k=H.a([$.ba,$.aD,$.bc],l)
H.a([],p)
o=new G.d("Skeletal",k,n,o,0)
$.$get$c().h(0,o)
$.Fq=o
o=H.a(["green sun"],p)
n=$.v_
k=H.a([$.at,$.c0,$.b4],l)
H.a([],p)
o=new G.d("Green Sun",k,n,o,0)
$.$get$c().h(0,o)
$.uL=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.uZ
k=H.a([$.am,$.al],l)
H.a([],p)
o=new G.d("Midnight",k,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["radiant","dazzling"],p)
n=$.J
k=H.a([$.a4,$.b4],l)
H.a([],p)
o=new G.d("Radiant",k,n,o,0)
$.$get$c().h(0,o)
$.EL=o
o=H.a(["edgy"],p)
n=$.J
k=H.a([$.aw,$.am,$.aq],l)
H.a([],p)
o=new G.d("Edgy",k,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c0,$.bq],l)
H.a([],p)
o=new G.d("Warhead",k,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["living"],p)
n=$.H
k=H.a([$.bc,$.bj,$.au],l)
H.a([],p)
o=new G.d("Living",k,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["dead","corpse","deceased"],p)
n=$.H
k=H.a([$.bc,$.bj],l)
H.a([],p)
o=new G.d("Dead",k,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a9,$.bg,$.aN],l)
H.a([],p)
o=new G.d("Taser",k,n,o,0)
$.$get$c().h(0,o)
$.FL=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.am,$.aa],l)
H.a([],p)
o=new G.d("Nocturn",k,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aD,$.aa],l)
H.a([],p)
o=new G.d("Dirge",k,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["Snobbish","Noble"],p)
n=$.J
k=H.a([$.al,$.bh],l)
H.a([],p)
o=new G.d("Snobbish",k,n,o,0)
$.$get$c().h(0,o)
$.Fv=o
o=H.a(["flat"],p)
n=$.J
k=H.a([$.ac,$.aa],l)
H.a([],p)
o=new G.d("Flat(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["sharp"],p)
n=$.J
k=H.a([$.aw,$.aa],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.Fc=o
o=H.a(["sharp"],p)
n=$.J
k=H.a([$.al,$.aa],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,n,o,0)
$.$get$c().h(0,o)
$.Fb=o
o=H.a(["Bach's"],p)
n=$.ab
k=H.a([$.Y,$.aa],l)
H.a([],p)
o=new G.d("Bach's",k,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["Mozart's"],p)
n=$.ab
k=H.a([$.a4,$.aa],l)
H.a([],p)
o=new G.d("Mozart's",k,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.ab
k=H.a([$.Y,$.c0],l)
H.a([],p)
o=new G.d("Einstein's",k,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Feynman's"],p)
n=$.ab
k=H.a([$.Y,$.b8],l)
H.a([],p)
o=new G.d("Feynman's",k,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["Ziptie"],p)
n=$.ab
k=H.a([$.aA,$.bg],l)
H.a([],p)
o=new G.d("Ziptie",k,n,o,0)
$.$get$c().h(0,o)
$.Gc=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.F,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,n,o,0)
$.$get$c().h(0,o)
$.ht=o
o=H.a(["Sassacre"],p)
n=$.ab
k=H.a([$.c9,$.b8],l)
H.a([],p)
o=new G.d("Sassacre",k,n,o,0)
$.$get$c().h(0,o)
$.F1=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ac,$.c9],l)
H.a([],p)
o=new G.d("Sledge",k,n,o,0)
$.$get$c().h(0,o)
$.Ft=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.bg,$.M],l)
H.a([],p)
o=new G.d("Legal",k,n,o,0)
$.$get$c().h(0,o)
$.n2=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.b8,$.aK],l)
H.a([],p)
o=new G.d("Clown",k,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["passionate"],p)
n=$.J
k=H.a([$.at,$.aB],l)
H.a([],p)
o=new G.d("Passionate",k,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["pinata"],p)
n=$.a5
k=H.a([$.M,$.as],l)
H.a([],p)
o=new G.d("Pinata",k,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ac,$.c9,$.F],l)
H.a([],p)
o=new G.d("Anvil",k,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.b4,$.bq],l)
H.a([],p)
o=new G.d("Flashbang",k,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.am,$.bq],l)
H.a([],p)
o=new G.d("Smokebomb",k,n,o,0)
$.$get$c().h(0,o)
$.Fu=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.am,$.aw],l)
H.a([],p)
o=new G.d("Ninja",k,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a9,$.aa],l)
H.a([],p)
o=new G.d("Techno",k,n,o,0)
$.$get$c().h(0,o)
$.FO=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.ax,$.aa],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,n,o,0)
$.$get$c().h(0,o)
$.EQ=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a5
k=H.a([$.au,$.bj,$.aN],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.b8,$.aa,$.aK,$.ba],l)
H.a([],p)
o=new G.d("Juggalo",k,n,o,0)
$.$get$c().h(0,o)
$.xn=o
o=H.a(["shocksauce"],p)
n=$.J
k=H.a([$.aq,$.a9],l)
H.a([],p)
o=new G.d("Shock Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.Ff=o
o=H.a(["weaksauce"],p)
n=$.J
k=H.a([$.ac,$.aq,$.bR],l)
H.a([],p)
o=new G.d("Weak Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.G2=o
o=H.a(["spicy","picante"],p)
n=$.J
k=H.a([$.at,$.as],l)
H.a([],p)
o=new G.d("Spicy",k,n,o,0)
$.$get$c().h(0,o)
$.Fz=o
o=H.a(["ice cream","popsicle"],p)
n=$.w
k=H.a([$.bn,$.as],l)
H.a([],p)
o=new G.d("Popsicle",k,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["popsickle"],p)
n=$.w
k=H.a([$.bn,$.as,$.aw],l)
H.a([],p)
o=new G.d("Popsickle",k,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["icepick"],p)
n=$.w
k=H.a([$.bn,$.aM],l)
H.a([],p)
o=new G.d("Icepick",k,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["schezwan"],p)
n=$.J
k=H.a([$.aq,$.as],l)
H.a([],p)
o=new G.d("Schezwan",k,n,o,0)
$.$get$c().h(0,o)
$.F4=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.am,$.aa,$.aq,$.a9],l)
H.a([],p)
o=new G.d("Vaporwave",k,n,o,0)
$.$get$c().h(0,o)
$.G0=o
o=H.a(["mallet"],p)
n=$.a5
k=H.a([$.X,$.ac],l)
H.a([],p)
o=new G.d("Mallet",k,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aA,$.aq],l)
H.a([],p)
o=new G.d("Fidget",k,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["gold foil"],p)
n=$.w
k=H.a([$.F,$.M,$.bh],l)
H.a([],p)
o=new G.d("Gold Foil",k,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["caviar"],p)
n=$.w
k=H.a([$.as,$.bh],l)
H.a([],p)
o=new G.d("Caviar",k,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["RADioactive"],p)
n=$.J
k=H.a([$.c0,$.aq],l)
H.a([],p)
o=new G.d("RADioactive",k,n,o,0)
$.$get$c().h(0,o)
$.EM=o
o=H.a(["glam"],p)
n=$.J
k=H.a([$.ax,$.aa,$.ay],l)
H.a([],p)
o=new G.d("Glam",k,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["hair metal"],p)
n=$.J
k=H.a([$.F,$.aa,$.ay],l)
H.a([],p)
o=new G.d("Hair Metal",k,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["elven","fae","sylvan"],p)
n=$.J
k=H.a([$.a4,$.ay],l)
H.a([],p)
o=new G.d("Elven",k,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["shiny"],p)
n=$.J
k=H.a([$.F,$.ay],l)
H.a([],p)
o=new G.d("Shiny",k,n,o,0)
$.$get$c().h(0,o)
$.Fe=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.J
k=H.a([$.bh,$.ay,$.al],l)
H.a([],p)
o=new G.d("Bespoke",k,n,o,0)
$.$get$c().h(0,o)
$.fi=o
o=H.a(["operatic"],p)
n=$.J
k=H.a([$.bh,$.aa,$.al],l)
H.a([],p)
o=new G.d("Operatic",k,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["ice","diamond"],p)
n=$.w
k=H.a([$.bh,$.bn],l)
H.a([],p)
o=new G.d("Diamond",k,n,o,0)
$.$get$c().h(0,o)
$.xl=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.J
k=H.a([$.at,$.bn],l)
H.a([],p)
o=new G.d("Icy Hot",k,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.J
k=H.a([$.aq,$.bn],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,n,o,0)
$.$get$c().h(0,o)
$.xm=o
o=H.a(["winter's","season's"],p)
n=$.ab
k=H.a([$.bm,$.bn],l)
H.a([],p)
o=new G.d("Winter's",k,n,o,0)
$.$get$c().h(0,o)
$.G5=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.ab
k=H.a([$.a4,$.bn],l)
H.a([],p)
o=new G.d("Christmas",k,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["Santa Saws"],p)
n=$.ab
k=H.a([$.a4,$.bn,$.aw],l)
H.a([],p)
o=new G.d("Santa Saws",k,n,o,0)
$.$get$c().h(0,o)
$.F_=o
o=H.a(["Santa Sleighs"],p)
n=$.ab
k=H.a([$.hs,$.aw],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,n,o,0)
$.$get$c().h(0,o)
$.F0=o
o=H.a(["Santa Claws"],p)
n=$.ab
k=H.a([$.hs,$.n_],l)
H.a([],p)
o=new G.d("Santa Claws",k,n,o,0)
$.$get$c().h(0,o)
$.EZ=o
o=H.a(["Sandy Claws"],p)
n=$.ab
k=H.a([$.hs,$.n_,$.ax],l)
H.a([],p)
o=new G.d("Sandy Claws",k,n,o,0)
$.$get$c().h(0,o)
$.EY=o
o=H.a(["Silent Night"],p)
n=$.ab
k=H.a([$.hs,$.am],l)
H.a([],p)
o=new G.d("Silent Night",k,n,o,0)
$.$get$c().h(0,o)
$.Fm=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.ab
k=H.a([$.ba,$.bV],l)
H.a([],p)
o=new G.d("Ghost's",k,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["ghoul","mutant"],p)
n=$.w
k=H.a([$.bj,$.c0,$.bS],l)
H.a([],p)
o=new G.d("Mutant",k,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.aq,$.F],l)
H.a([],p)
o=new G.d("Skateboard",k,n,o,0)
$.$get$c().h(0,o)
$.Fp=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c0,$.a9,$.as],l)
H.a([],p)
o=new G.d("Microwave",k,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c0,$.a9,$.as,$.aN],l)
H.a([],p)
o=new G.d("Orbital",k,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a([],p)
n=$.q
k=H.a([$.ac,$.Y],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["uranium"],p)
n=$.w
k=H.a([$.c0,$.ax],l)
H.a([],p)
o=new G.d("Uranium",k,n,o,0)
$.$get$c().h(0,o)
$.G_=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.M,$.ca],l)
H.a([],p)
o=new G.d("Mousepad",k,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.aw,$.ax],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.aM,$.ax],l)
H.a([],p)
o=new G.d("Pointed Flint",k,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aA,$.aM],l)
H.a([],p)
o=new G.d("Picnic",k,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["xtreme xplosion"],p)
n=$.J
k=H.a([$.aq,$.bq],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,n,o,0)
$.$get$c().h(0,o)
$.Gb=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aA,$.b7],l)
H.a([],p)
o=new G.d("Lawn",k,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["upholstered"],p)
n=$.w
k=H.a([$.Q,$.b7],l)
H.a([],p)
o=new G.d("Upholstered",k,n,o,0)
$.$get$c().h(0,o)
$.FZ=o
o=H.a(["leather"],p)
n=$.w
k=H.a([$.bj,$.b7],l)
H.a([],p)
o=new G.d("Leather",k,n,o,0)
$.$get$c().h(0,o)
$.xr=o
o=H.a(["shag"],p)
n=$.w
k=H.a([$.cf,$.b7],l)
H.a([],p)
o=new G.d("Shag",k,n,o,0)
$.$get$c().h(0,o)
$.Fa=o
o=H.a(["loyal"],p)
n=$.J
k=H.a([$.ac,$.aB],l)
H.a([],p)
o=new G.d("Loyal",k,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["porcelain"],p)
n=$.w
k=H.a([$.ay,$.bQ],l)
H.a([],p)
o=new G.d("Porcelain",k,n,o,0)
$.$get$c().h(0,o)
$.n5=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a5
k=H.a([$.bh,$.bQ],l)
H.a([],p)
o=new G.d("Pork Hollow",k,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.aq,$.aw],l)
H.a([],p)
o=new G.d("Katana",k,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["chocolate"],p)
n=$.w
k=H.a([$.aB,$.as],l)
H.a([],p)
o=new G.d("Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["wrapped chocolate"],p)
n=$.w
k=H.a([$.aB,$.as,$.M,$.F],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["scratch-n-sniff"],p)
n=$.w
k=H.a([$.aq,$.M],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,n,o,0)
$.$get$c().h(0,o)
$.F6=o
o=H.a(["mythril","orichalcum"],p)
n=$.w
k=H.a([$.a4,$.F],l)
H.a([],p)
o=new G.d("Mythril",k,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["titanium","steel"],p)
n=$.w
k=H.a([$.ac,$.F],l)
H.a([],p)
o=new G.d("Titanium",k,n,o,0)
$.$get$c().h(0,o)
$.FT=o
o=H.a(["lead"],p)
n=$.w
k=H.a([$.c9,$.F],l)
H.a([],p)
o=new G.d("Lead",k,n,o,0)
$.$get$c().h(0,o)
$.xq=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aH,$.b8],l)
H.a([],p)
o=new G.d("Satire",k,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["comedy gold"],p)
n=$.J
k=H.a([$.bh,$.b8],l)
H.a([],p)
o=new G.d("Comedy Gold",k,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["dry","sensible chuckle"],p)
n=$.J
k=H.a([$.al,$.b8],l)
H.a([],p)
o=new G.d("Dry",k,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["polite"],p)
n=$.J
k=H.a([$.b7,$.aH],l)
H.a([],p)
o=new G.d("Polite",k,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["stradivarius"],p)
n=$.ab
k=H.a([$.al,$.bh,$.X,$.aa],l)
H.a([],p)
o=new G.d("Stradivarius",k,n,o,0)
$.$get$c().h(0,o)
$.FG=o
o=H.a(["scientistic"],p)
n=$.J
k=H.a([$.Y,$.aH],l)
H.a([],p)
o=new G.d("Scientistic",k,n,o,0)
$.$get$c().h(0,o)
$.F5=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a9,$.au],l)
H.a([],p)
o=new G.d("AI",k,n,o,0)
$.$get$c().h(0,o)
$.mY=o
o=H.a(["robotic"],p)
n=$.H
k=H.a([$.F,$.a9,$.au],l)
H.a([],p)
o=new G.d("Robotic",k,n,o,0)
$.$get$c().h(0,o)
$.uW=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.X,$.bq],l)
H.a([],p)
o=new G.d("Shrapnel",k,n,o,0)
$.$get$c().h(0,o)
$.Fh=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.au,$.a9,$.aa],l)
H.a([],p)
o=new G.d("Vocaloid",k,n,o,0)
$.$get$c().h(0,o)
$.G1=o
o=H.a(["*Hyun-ae"],p)
n=$.ab
k=H.a([$.au,$.a9,$.aB],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.X,$.aN],l)
H.a([],p)
o=new G.d("Buckshot",k,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.c9,$.aN],l)
H.a([],p)
o=new G.d("Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.al,$.M],l)
H.a([],p)
o=new G.d("Stationary",k,n,o,0)
$.$get$c().h(0,o)
$.FE=o
o=H.a([],p)
n=$.q
k=H.a([$.av,$.M],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a([],p)
n=$.q
k=H.a([$.F,$.aN],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.aw,$.M],l)
H.a([],p)
o=new G.d("Papercut",k,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["squeaky"],p)
n=$.H
k=H.a([$.ac,$.ca],l)
H.a([],p)
o=new G.d("Squeaky",k,n,o,0)
$.$get$c().h(0,o)
$.FB=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aH,$.aa],l)
H.a([],p)
o=new G.d("Kazoo",k,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aL,$.M],l)
H.a([],p)
o=new G.d("Bandaid",k,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aL,$.as],l)
H.a([],p)
o=new G.d("Gushers",k,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aL,$.aN],l)
H.a([],p)
o=new G.d("Medic",k,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["sick nasty","ill"],p)
n=$.H
k=H.a([$.aq,$.bN],l)
H.a([],p)
o=new G.d("Sick Nasty",k,n,o,0)
$.$get$c().h(0,o)
$.Fj=o
o=H.a(["gilded","gold leaf"],p)
n=$.w
k=H.a([$.F,$.X],l)
H.a([],p)
o=new G.d("Gilded",k,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aA,$.a9],l)
H.a([],p)
o=new G.d("Charging",k,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.ca,$.aw],l)
H.a([],p)
o=new G.d("Rubber Safety",k,n,o,0)
$.$get$c().h(0,o)
$.EW=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aA,$.aw],l)
H.a([],p)
o=new G.d("Plastic Safety",k,n,o,0)
$.$get$c().h(0,o)
$.EX=o
o=H.a(["thunderous","thor's"],p)
n=$.J
k=H.a([$.aK,$.a9],l)
H.a([],p)
o=new G.d("Thunderous",k,n,o,0)
$.$get$c().h(0,o)
$.FR=o
o=H.a(["screeching","dial up"],p)
n=$.J
k=H.a([$.aK,$.a9,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,n,o,0)
$.$get$c().h(0,o)
$.F8=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.b9,$.F],l)
H.a([],p)
o=new G.d("Mirrored",k,n,o,0)
$.$get$c().h(0,o)
$.uP=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.b9,$.ax,$.a4],l)
H.a([],p)
o=new G.d("Far Seeing",k,n,o,0)
$.$get$c().h(0,o)
$.xc=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.ca,$.aN],l)
H.a([],p)
o=new G.d("Nonlethal",k,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.ay,$.al],l)
H.a([],p)
o=new G.d("Fashionable",k,n,o,0)
$.$get$c().h(0,o)
$.xe=o
o=H.a(["ironic"],p)
n=$.J
k=H.a([$.b8,$.aq],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["ironic"],p)
n=$.J
k=H.a([$.bR,$.b8],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,n,o,0)
$.$get$c().h(0,o)
$.n1=o
o=H.a(["post-ironic"],p)
n=$.J
k=H.a([$.aH,$.aq,$.al],l)
H.a([],p)
o=new G.d("Post Ironic",k,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["monstrous"],p)
n=$.J
k=H.a([$.bS,$.aK,$.ba],l)
H.a([],p)
o=new G.d("Monstrous",k,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aN,$.aq,$.al],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$c().h(0,o)
$.ES=o
o=H.a(["golden"],p)
n=$.w
k=H.a([$.F,$.bh],l)
H.a([],p)
o=new G.d("Golden",k,n,o,0)
$.$get$c().h(0,o)
$.uK=o
o=H.a(["platinum"],p)
n=$.w
k=H.a([$.b4,$.F],l)
H.a([],p)
o=new G.d("Platinum",k,n,o,0)
$.$get$c().h(0,o)
$.n4=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bW,$.F],l)
H.a([],p)
o=new G.d("Horseshoe",k,n,o,0)
$.$get$c().h(0,o)
$.xk=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.Q,$.cf],l)
H.a([],p)
o=new G.d("Felt",k,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.ax,$.al],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.xs=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.ax,$.c9],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["glitched"],p)
n=$.H
k=H.a([$.bp,$.a9],l)
H.a([],p)
o=new G.d("Glitched",k,n,o,0)
$.$get$c().h(0,o)
$.xh=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aL,$.a9],l)
H.a([],p)
o=new G.d("Debugging",k,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.F,$.aK,$.aa],l)
H.a([],p)
o=new G.d("Metalic",k,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["Simulacrum"],p)
n=$.J
k=H.a([$.au,$.aH],l)
H.a([],p)
o=new G.d("Simulacrum",k,n,o,0)
$.$get$c().h(0,o)
$.Fo=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.as,$.aH],l)
H.a([],p)
o=new G.d("Imitation",k,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aL,$.aH],l)
H.a([],p)
o=new G.d("Placebo",k,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bh,$.aH],l)
H.a([],p)
o=new G.d("Counterfeit",k,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["Surreal"],p)
n=$.J
k=H.a([$.aq,$.aF,$.b8],l)
H.a([],p)
o=new G.d("Surreal1",k,n,o,0)
$.$get$c().h(0,o)
$.FI=o
o=H.a(["Brainy"],p)
n=$.J
k=H.a([$.Y,$.bj],l)
H.a([],p)
o=new G.d("Brainy",k,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.at,$.bq],l)
H.a([],p)
o=new G.d("Incendiary",k,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["C-4"],p)
n=$.w
k=H.a([$.bq,$.aA],l)
H.a([],p)
o=new G.d("C-4",k,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a4,$.b4,$.bp],l)
H.a([],p)
o=new G.d("Fae",k,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["Plutonium"],p)
n=$.w
k=H.a([$.F,$.c0],l)
H.a([],p)
o=new G.d("Plutonium",k,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["Lithium"],p)
n=$.w
k=H.a([$.F,$.a9],l)
H.a([],p)
o=new G.d("Lithium",k,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["Molten"],p)
n=$.w
k=H.a([$.F,$.at],l)
H.a([],p)
o=new G.d("Molten",k,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.w
k=H.a([$.ax,$.at],l)
H.a([],p)
o=new G.d("Magma",k,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["Rusty"],p)
n=$.H
k=H.a([$.F,$.bR],l)
H.a([],p)
o=new G.d("Rusty",k,n,o,0)
$.$get$c().h(0,o)
$.EV=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.aw,$.aq,$.al],l)
H.a([],p)
o=new G.d("Fonzie",k,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aB,$.b8],l)
H.a([],p)
o=new G.d("Romcom",k,n,o,0)
$.$get$c().h(0,o)
$.ER=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.ay,$.b4],l)
H.a([],p)
o=new G.d("Alluring",k,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.ay,$.am],l)
H.a([],p)
o=new G.d("Masquerade",k,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.ax,$.bj],l)
H.a([],p)
o=new G.d("Stoneskin",k,n,o,0)
$.$get$c().h(0,o)
$.FF=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a4,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a4,$.ax],l)
H.a([],p)
o=new G.d("Dwarven",k,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["Elemental","Animated"],p)
n=$.w
k=H.a([$.a4,$.au],l)
H.a([],p)
o=new G.d("Elemental",k,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["Gourmet"],p)
n=$.J
k=H.a([$.as,$.al],l)
H.a([],p)
o=new G.d("Gourmet",k,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["Stained Glass"],p)
n=$.w
k=H.a([$.b9,$.ay,$.bh],l)
H.a([],p)
o=new G.d("Stained Glass",k,n,o,0)
$.$get$c().h(0,o)
$.FC=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aL,$.Q],l)
H.a([],p)
o=new G.d("Gauze",k,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["Locked"],p)
n=$.H
k=H.a([$.bg,$.bw],l)
H.a([],p)
o=new G.d("Locked",k,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.ax,$.M],l)
H.a([],p)
o=new G.d("Etched",k,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["Papyrus"],p)
n=$.w
k=H.a([$.M,$.b5],l)
H.a([],p)
o=new G.d("Papyrus",k,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.M,$.aA],l)
H.a([],p)
o=new G.d("Film",k,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["Saucey"],p)
n=$.w
k=H.a([$.bp,$.bw,$.bS],l)
H.a([],p)
o=new G.d("Saucey",k,n,o,0)
$.$get$c().h(0,o)
$.F2=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.M,$.bW],l)
H.a([],p)
o=new G.d("Lottery",k,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.am,$.Q],l)
H.a([],p)
o=new G.d("Blindfolded",k,n,o,0)
$.$get$c().h(0,o)
$.x5=o
o=H.a(["Possessed"],p)
n=$.H
k=H.a([$.bV,$.bj],l)
H.a([],p)
o=new G.d("Possessed",k,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["Infernal"],p)
n=$.J
k=H.a([$.bV,$.at],l)
H.a([],p)
o=new G.d("Infernal",k,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.X,$.bd,$.uT,$.au],l)
H.a([],p)
o=new G.d("Geppetto",k,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["Abominable"],p)
n=$.J
k=H.a([$.bj,$.bp],l)
H.a([],p)
o=new G.d("Abominable",k,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aB,$.aD],l)
H.a([],p)
o=new G.d("Ashen",k,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aB,$.bm],l)
H.a([],p)
o=new G.d("Pale",k,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aB,$.bw],l)
H.a([],p)
o=new G.d("Pitch",k,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["Lit"],p)
n=$.J
k=H.a([$.aq,$.at],l)
H.a([],p)
o=new G.d("Lit",k,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a4,$.bm],l)
H.a([],p)
o=new G.d("Hypnotizing",k,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bm,$.bg],l)
H.a([],p)
o=new G.d("Tranquilizing",k,n,o,0)
$.$get$c().h(0,o)
$.FW=o
o=H.a([],p)
n=$.q
k=H.a([$.bm,$.bw],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["Ghost Rider's"],p)
n=$.ab
k=H.a([$.hr,$.at,$.bV],l)
H.a([],p)
o=new G.d("Ghost Rider",k,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["Logical"],p)
n=$.J
k=H.a([$.Y,$.bn],l)
H.a([],p)
o=new G.d("Logical",k,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["Duelist's"],p)
n=$.ab
k=H.a([$.aN,$.al],l)
H.a([],p)
o=new G.d("Duelist's",k,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["Silenced"],p)
n=$.H
k=H.a([$.aN,$.am],l)
H.a([],p)
o=new G.d("Silenced",k,n,o,0)
$.$get$c().h(0,o)
$.Fl=o
o=H.a(["Deudly"],p)
n=$.H
k=H.a([$.aN,$.bR],l)
H.a([],p)
o=new G.d("Deudly",k,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["Screaming"],p)
n=$.H
k=H.a([$.aK,$.ba],l)
H.a([],p)
o=new G.d("Screaming",k,n,o,0)
$.$get$c().h(0,o)
$.F7=o
o=H.a(["Cacophonous"],p)
n=$.J
k=H.a([$.bS,$.aa],l)
H.a([],p)
o=new G.d("Cacophonous",k,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["Sublime"],p)
n=$.J
k=H.a([$.bS,$.ay],l)
H.a([],p)
o=new G.d("Sublime",k,n,o,0)
$.$get$c().h(0,o)
$.FH=o
o=H.a(["Masterwork"],p)
n=$.w
k=H.a([$.bd,$.bh],l)
H.a([],p)
o=new G.d("Masterwork",k,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.au,$.ba,$.bp,$.a4],l)
H.a([],p)
o=new G.d("BroodFester",k,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bp,$.am],l)
H.a([],p)
o=new G.d("[REDACTED]",k,n,o,0)
$.$get$c().h(0,o)
$.EP=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.as,$.bq],l)
H.a([],p)
o=new G.d("Pop Rocks",k,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["Disguised"],p)
n=$.H
k=H.a([$.am,$.aH],l)
H.a([],p)
o=new G.d("Disguised",k,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["Haunted"],p)
n=$.H
k=H.a([$.aF,$.bV],l)
H.a([],p)
o=new G.d("Haunted",k,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["Cognitohazardous"],p)
n=$.H
k=H.a([$.bp,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["Staticy"],p)
n=$.H
k=H.a([$.aF,$.a9],l)
H.a([],p)
o=new G.d("Staticy",k,n,o,0)
$.$get$c().h(0,o)
$.FD=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.b9,$.c0],l)
H.a([],p)
o=new G.d("Jadite",k,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.b8,$.aF],l)
H.a([],p)
o=new G.d("Tickling",k,n,o,0)
$.$get$c().h(0,o)
$.FS=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.F,$.bQ],l)
H.a([],p)
o=new G.d("Composite",k,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["High-Powered"],p)
n=$.H
k=H.a([$.bq,$.aN],l)
H.a([],p)
o=new G.d("High-Powered",k,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bq,$.ac],l)
H.a([],p)
o=new G.d("Concussive",k,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["Down"],p)
n=$.w
k=H.a([$.b7,$.bA],l)
H.a([],p)
o=new G.d("Down",k,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["Prickly"],p)
n=$.w
k=H.a([$.aF,$.aM],l)
H.a([],p)
o=new G.d("Prickly",k,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aF,$.am,$.a9],l)
H.a([],p)
o=new G.d("Deep-Web",k,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.w
k=H.a([$.aM,$.aw],l)
H.a([],p)
o=new G.d("Jagged",k,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["Nanofiber"],p)
n=$.w
k=H.a([$.Q,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.F,$.aK],l)
H.a([],p)
o=new G.d("Clanging",k,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["Silver"],p)
n=$.w
k=H.a([$.F,$.al],l)
H.a([],p)
o=new G.d("Silver",k,n,o,0)
$.$get$c().h(0,o)
$.Fn=o
o=H.a(["Withered"],p)
n=$.H
k=H.a([$.aD,$.b5],l)
H.a([],p)
o=new G.d("Withered",k,n,o,0)
$.$get$c().h(0,o)
$.G7=o
o=H.a(["Shattered"],p)
n=$.H
k=H.a([$.b9,$.bR],l)
H.a([],p)
o=new G.d("Shattered",k,n,o,0)
$.$get$c().h(0,o)
$.Fd=o
o=H.a(["Miner's"],p)
n=$.ab
k=H.a([$.ax,$.F],l)
H.a([],p)
o=new G.d("Miner's",k,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.aa,$.au],l)
H.a([],p)
o=new G.d("Singing",k,n,o,0)
$.$get$c().h(0,o)
$.Fk=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bj,$.a9],l)
H.a([],p)
o=new G.d("Mitochondrial",k,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.am,$.a9],l)
H.a([],p)
o=new G.d("Blackout",k,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["Asbestos"],p)
n=$.w
k=H.a([$.ax,$.bN],l)
H.a([],p)
o=new G.d("Asbestos",k,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["Mercurial"],p)
n=$.w
k=H.a([$.bN,$.F],l)
H.a([],p)
o=new G.d("Mercurial",k,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["Bulletproof"],p)
n=$.w
k=H.a([$.Q,$.ac],l)
H.a([],p)
o=new G.d("Bulletproof",k,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["Cotton"],p)
n=$.w
k=H.a([$.b5,$.Q],l)
H.a([],p)
o=new G.d("Cotton",k,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bw,$.b4],l)
H.a([],p)
o=new G.d("Blinding",k,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["Brilliant"],p)
n=$.J
k=H.a([$.b4,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["Offensive"],p)
n=$.J
k=H.a([$.bw,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["Poached"],p)
n=$.H
k=H.a([$.bj,$.bh],l)
H.a([],p)
o=new G.d("Poached",k,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["Tapestry"],p)
n=$.w
k=H.a([$.Q,$.ay],l)
H.a([],p)
o=new G.d("Tapestry",k,n,o,0)
$.$get$c().h(0,o)
$.FK=o
o=H.a(["Itchy"],p)
n=$.J
k=H.a([$.Q,$.aF],l)
H.a([],p)
o=new G.d("Itchy",k,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Wishbone"],p)
n=$.w
k=H.a([$.bW,$.bc],l)
H.a([],p)
o=new G.d("Wishbone",k,n,o,0)
$.$get$c().h(0,o)
$.G6=o
o=H.a(["Rattling"],p)
n=$.H
k=H.a([$.aK,$.bc],l)
H.a([],p)
o=new G.d("Rattling",k,n,o,0)
$.$get$c().h(0,o)
$.EN=o
o=H.a(["Cranial"],p)
n=$.w
k=H.a([$.Y,$.bc],l)
H.a([],p)
o=new G.d("Cranial",k,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["Humerus"],p)
n=$.w
k=H.a([$.b8,$.bc],l)
H.a([],p)
o=new G.d("Humerus",k,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aL,$.b7],l)
H.a([],p)
o=new G.d("Massage",k,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["Pestersome","Irksome"],p)
n=$.J
k=H.a([$.aK,$.bw],l)
H.a([],p)
o=new G.d("Pestersome",k,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aK,$.bq],l)
H.a([],p)
o=new G.d("Shockwave",k,n,o,0)
$.$get$c().h(0,o)
$.Fg=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bN,$.aL],l)
H.a([],p)
o=new G.d("Antivenom",k,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.w
k=H.a([$.at,$.a4],l)
H.a([],p)
o=new G.d("Will O Wisp",k,n,o,0)
$.$get$c().h(0,o)
$.G3=o
o=H.a(["Fiberglass"],p)
n=$.w
k=H.a([$.Q,$.b9],l)
H.a([],p)
o=new G.d("Fiberglass",k,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["Skull"],p)
n=$.w
k=H.a([$.bc,$.ba],l)
H.a([],p)
o=new G.d("Skull",k,n,o,0)
$.$get$c().h(0,o)
$.Fr=o
o=H.a(["Enchanted"],p)
n=$.H
k=H.a([$.a4,$.bW],l)
H.a([],p)
o=new G.d("Enchanted",k,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["Berserker's"],p)
n=$.ab
k=H.a([$.a4,$.bw],l)
H.a([],p)
o=new G.d("Berserker's",k,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["Clerical"],p)
n=$.ab
k=H.a([$.a4,$.aL],l)
H.a([],p)
o=new G.d("Clerical",k,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aL,$.at],l)
H.a([],p)
o=new G.d("Cauterizing",k,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c0,$.b4],l)
H.a([],p)
o=new G.d("X-Ray",k,n,o,0)
$.$get$c().h(0,o)
$.Ga=o
o=H.a(["Clever"],p)
n=$.J
k=H.a([$.Y,$.bW],l)
H.a([],p)
o=new G.d("Clever",k,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.b7,$.at],l)
H.a([],p)
o=new G.d("Fireplace",k,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["Crackling"],p)
n=$.H
k=H.a([$.aK,$.at],l)
H.a([],p)
o=new G.d("Crackling",k,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["Thumping"],p)
n=$.H
k=H.a([$.aK,$.c9],l)
H.a([],p)
o=new G.d("Thumping",k,n,o,0)
$.$get$c().h(0,o)
$.FQ=o
o=H.a(["Shrieking","Banshee"],p)
n=$.H
k=H.a([$.bV,$.aK],l)
H.a([],p)
o=new G.d("Banshee",k,n,o,0)
$.$get$c().h(0,o)
$.Fi=o
o=H.a(["Surreal"],p)
n=$.J
k=H.a([$.b8,$.bp],l)
H.a([],p)
o=new G.d("Surreal2",k,n,o,0)
$.$get$c().h(0,o)
$.FJ=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aL,$.b5],l)
H.a([],p)
o=new G.d("Aloe",k,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aB,$.b5],l)
H.a([],p)
o=new G.d("Rose",k,n,o,0)
$.$get$c().h(0,o)
$.ET=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.b8,$.ac],l)
H.a([],p)
o=new G.d("Knock Knock",k,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a4,$.bN],l)
H.a([],p)
o=new G.d("Lifesteal",k,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.ay,$.aD],l)
H.a([],p)
o=new G.d("Tragic",k,n,o,0)
$.$get$c().h(0,o)
$.FV=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.aw,$.b8],l)
H.a([],p)
o=new G.d("Slapstick",k,n,o,0)
$.$get$c().h(0,o)
$.Fs=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bS,$.b8],l)
H.a([],p)
o=new G.d("Gross Out",k,n,o,0)
$.$get$c().h(0,o)
$.xj=o
o=H.a(["Flowery"],p)
n=$.w
k=H.a([$.ay,$.b5],l)
H.a([],p)
o=new G.d("Flowery",k,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["Poison Ivy"],p)
n=$.w
k=H.a([$.bN,$.b5],l)
H.a([],p)
o=new G.d("Poison Ivy",k,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.H
k=H.a([$.a4,$.bA],l)
H.a([],p)
o=new G.d("Winged",k,n,o,0)
$.$get$c().h(0,o)
$.G4=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.b5,$.as,$.aD],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["Lawful"],p)
n=$.J
k=H.a([$.bg,$.au],l)
H.a([],p)
o=new G.d("Lawful",k,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["Chaotic"],p)
n=$.J
k=H.a([$.bw,$.au],l)
H.a([],p)
o=new G.d("Chaotic",k,n,o,0)
$.$get$c().h(0,o)
$.xa=o
o=H.a(["Hypothermic"],p)
n=$.H
k=H.a([$.aD,$.bn],l)
H.a([],p)
o=new G.d("Hypothermic",k,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["Hyperthermic"],p)
n=$.H
k=H.a([$.aD,$.at],l)
H.a([],p)
o=new G.d("Hyperthermic",k,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["Shackled"],p)
n=$.H
k=H.a([$.bg,$.c9],l)
H.a([],p)
o=new G.d("Shackled",k,n,o,0)
$.$get$c().h(0,o)
$.F9=o
o=H.a(["Poetic"],p)
n=$.J
k=H.a([$.Y,$.aB],l)
H.a([],p)
o=new G.d("Poetic",k,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a(["Holographic"],p)
n=$.w
k=H.a([$.b4,$.Y,$.b9,$.a9],l)
H.a([],p)
o=new G.d("Holographic",k,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["Casket","Coffin"],p)
n=$.w
k=H.a([$.X,$.aD],l)
H.a([],p)
o=new G.d("Casket",k,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["Spectral"],p)
n=$.w
k=H.a([$.bV,$.a4],l)
H.a([],p)
o=new G.d("Spectral",k,n,o,0)
$.$get$c().h(0,o)
$.Fy=o
o=H.a(["Phoenix"],p)
n=$.w
k=H.a([$.at,$.bA],l)
H.a([],p)
o=new G.d("Phoenix",k,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["Tattered"],p)
n=$.H
k=H.a([$.Q,$.aD],l)
H.a([],p)
o=new G.d("Tattered",k,n,o,0)
$.$get$c().h(0,o)
$.FN=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.aa,$.X],l)
H.a([],p)
o=new G.d("Woodwind",k,n,o,0)
$.$get$c().h(0,o)
$.G9=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aF,$.bc],l)
H.a([],p)
o=new G.d("Bone Hurting",k,n,o,0)
$.$get$c().h(0,o)
$.x7=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aL,$.bc],l)
H.a([],p)
o=new G.d("Bone Healing:",k,n,o,0)
$.$get$c().h(0,o)
$.x6=o
o=H.a(["Calcium"],p)
n=$.w
k=H.a([$.bc,$.aL,$.as],l)
H.a([],p)
o=new G.d("Calcium",k,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["Fleece"],p)
n=$.w
k=H.a([$.Q,$.at],l)
H.a([],p)
o=new G.d("Fleece",k,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["Potted"],p)
n=$.w
k=H.a([$.bQ,$.b5],l)
H.a([],p)
o=new G.d("Potted",k,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.w
k=H.a([$.F,$.as],l)
H.a([],p)
o=new G.d("Canned",k,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Diseased"],p)
n=$.H
k=H.a([$.aD,$.bj],l)
H.a([],p)
o=new G.d("Diseased",k,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["Porcupine"],p)
n=$.w
k=H.a([$.aM,$.cf],l)
H.a([],p)
o=new G.d("Porcupine",k,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["Fanged"],p)
n=$.H
k=H.a([$.bc,$.aM],l)
H.a([],p)
o=new G.d("Fanged",k,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["Basalt"],p)
n=$.w
k=H.a([$.ax,$.am],l)
H.a([],p)
o=new G.d("Basalt",k,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["Obsidian"],p)
n=$.w
k=H.a([$.b9,$.am],l)
H.a([],p)
o=new G.d("Obsidian",k,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["Fenestrated"],p)
n=$.w
k=H.a([$.b9,$.X],l)
H.a([],p)
o=new G.d("Fenestrated",k,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["Plexiglass"],p)
n=$.w
k=H.a([$.b9,$.aA],l)
H.a([],p)
o=new G.d("Plexiglass",k,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bQ,$.M],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["Fungal"],p)
n=$.w
k=H.a([$.b5,$.bS],l)
H.a([],p)
o=new G.d("Fungal",k,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["Thorny"],p)
n=$.H
k=H.a([$.b5,$.aM],l)
H.a([],p)
o=new G.d("Thorny",k,n,o,0)
$.$get$c().h(0,o)
$.FP=o
o=H.a(["Bulbed"],p)
n=$.H
k=H.a([$.b5,$.ac],l)
H.a([],p)
o=new G.d("Bulbed",k,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.b9,$.aN],l)
H.a([],p)
o=new G.d("Glass Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.b5,$.ca],l)
H.a([],p)
o=new G.d("Caoutchouc",k,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["Cellulose"],p)
n=$.w
k=H.a([$.b5,$.aA],l)
H.a([],p)
o=new G.d("Cellulose",k,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.aa,$.ba],l)
H.a([],p)
o=new G.d("Horrorcore",k,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bp,$.aa],l)
H.a([],p)
o=new G.d("Nightcore",k,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bp,$.a9,$.aa],l)
H.a([],p)
o=new G.d("Crazy Bus",k,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Burdock"],p)
n=$.w
k=H.a([$.b5,$.cf],l)
H.a([],p)
o=new G.d("Burdock",k,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["Necrotic"],p)
n=$.H
k=H.a([$.bc,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.w
k=H.a([$.bc,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.H
k=H.a([$.bc,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.bc,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.w
k=H.a([$.bc,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.bc,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.J
k=H.a([$.X,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.w
k=H.a([$.X,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.w
k=H.a([$.X,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.H
k=H.a([$.X,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.w
k=H.a([$.X,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.w
k=H.a([$.X,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.X,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.w
k=H.a([$.X,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.X,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.X,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.ab
k=H.a([$.X,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.w
k=H.a([$.X,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.w
k=H.a([$.X,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.w
k=H.a([$.X,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.X,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.w
k=H.a([$.aA,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.M,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.w
k=H.a([$.M,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.M,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.Q,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.w
k=H.a([$.ax,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.ax,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.w
k=H.a([$.ax,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.w
k=H.a([$.ax,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.w
k=H.a([$.ax,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.w
k=H.a([$.ax,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.w
k=H.a([$.ax,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.w
k=H.a([$.ax,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.H
k=H.a([$.ax,$.cf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.H
k=H.a([$.Y,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.H
k=H.a([$.Q,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.Q,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.d("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.J
k=H.a([$.Q,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.Q,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.Q,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.d("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.J
k=H.a([$.Q,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.H
k=H.a([$.Q,$.c9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.J
k=H.a([$.Q,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.J
k=H.a([$.Q,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.w
k=H.a([$.Q,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.w
k=H.a([$.Q,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.Q,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.w
k=H.a([$.Q,$.bN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.w
k=H.a([$.Q,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.w
k=H.a([$.Q,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.w
k=H.a([$.Q,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.Q,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.w
k=H.a([$.Q,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.Q,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.w
k=H.a([$.Q,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.w
k=H.a([$.Q,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.ab
k=H.a([$.Y,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.w
k=H.a([$.a4,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.w
k=H.a([$.b5,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.w
k=H.a([$.aA,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.w
k=H.a([$.P,$.S],l)
H.a([],p)
$.$get$c().h(0,new G.d("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.J
k=H.a([$.Y,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.J
k=H.a([$.bd,$.aH,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.w
k=H.a([$.bp,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bp,$.M],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.ab
k=H.a([$.bp,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.ab
k=H.a([$.a0,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.ab
k=H.a([$.Y,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.w
k=H.a([$.a0,$.aA,$.bm,$.ac],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a0,$.dk,$.X,$.M],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.ab
k=H.a([$.am,$.a4,$.bd,$.aF,$.ba],l)
H.a([],p)
o=new G.d("Queenly",k,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["Kingly"],p)
n=$.ab
k=H.a([$.ba,$.ac,$.c9,$.a4,$.bd],l)
H.a([],p)
o=new G.d("Kingly",k,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["Jack"],p)
n=$.ab
k=H.a([$.aM,$.aw,$.F,$.am],l)
H.a([],p)
o=new G.d("Jack",k,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a0,$.aH,$.X,$.P,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a0,$.av,$.M,$.F,$.Y,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a0,$.av,$.M,$.Y,$.P,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a0,$.aD,$.M,$.Y,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.ab
k=H.a([$.a0,$.b4,$.F,$.aM,$.aw,$.fk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.ab
k=H.a([$.a0,$.M,$.bw,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.ab
k=H.a([$.a0,$.a4,$.Q,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.ab
k=H.a([$.a0,$.aF,$.bc,$.F,$.fj,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.ab
k=H.a([$.a0,$.ax,$.al,$.jD,$.ac],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.H
k=H.a([$.a0,$.Q,$.bh,$.ay,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a0,$.F,$.bh,$.ay,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a0,$.aA,$.a9,$.am,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a0,$.Q,$.Y,$.a4,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a0,$.Q,$.Y,$.ay,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.H
k=$.a0
j=$.M
i=$.Y
i=H.a([k,j,i,$.av,i,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.w
i=H.a([$.a0,$.ay,$.bQ,$.ac,$.eo,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.ab
i=H.a([$.a0,$.av,$.M,$.bw,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.ab
i=H.a([$.a4,$.M],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.M,$.Y,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a0,$.F,$.am,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.H
i=H.a([$.a0,$.F,$.b9,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a0,$.aH,$.X,$.aq,$.bm,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a0,$.at,$.F,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a0,$.a9,$.M,$.av,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a0,$.X,$.au,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.d("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.ab
i=H.a([$.a0,$.bd,$.bA,$.b4,$.aa,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.w
i=H.a([$.a0,$.aL,$.b9,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.w
i=H.a([$.a0,$.b4,$.bW,$.ax,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.ab
i=H.a([$.a0,$.aF,$.ax,$.al,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.ab
i=H.a([$.a0,$.as,$.bw,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.ab
i=H.a([$.a0,$.F,$.aa,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.J
i=H.a([$.a0,$.b9,$.c0,$.b4,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.w
i=H.a([$.F,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.ab
i=H.a([$.F,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.w
i=H.a([$.F,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.w
i=H.a([$.F,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.H
i=H.a([$.F,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.H
i=H.a([$.F,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.w
i=H.a([$.F,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.w
i=H.a([$.bQ,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.w
i=H.a([$.bQ,$.ca],l)
H.a([],p)
$.$get$c().h(0,new G.d("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.J
i=H.a([$.bQ,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.w
i=H.a([$.bQ,$.ac],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.w
i=H.a([$.bQ,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.w
i=H.a([$.bQ,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.w
i=H.a([$.bQ,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.H
i=H.a([$.bQ,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.w
i=H.a([$.bQ,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.H
i=H.a([$.bQ,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.J
i=H.a([$.bR,$.M],l)
H.a([],p)
$.$get$c().h(0,new G.d("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.H
i=H.a([$.bR,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.J
i=H.a([$.bR,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.H
i=H.a([$.bR,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.w
i=H.a([$.bR,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.H
i=H.a([$.bR,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.ab
i=H.a([$.bR,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.w
i=H.a([$.bR,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.w
i=H.a([$.bR,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.w
i=H.a([$.bR,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.ab
i=H.a([$.X,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.w
i=H.a([$.X,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.w
i=H.a([$.X,$.ca],l)
H.a([],p)
$.$get$c().h(0,new G.d("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.w
i=H.a([$.aA,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.ca,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.H
i=H.a([$.ca,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.ca,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.M,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.M,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.w
i=H.a([$.ax,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.w
i=H.a([$.ax,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.J
i=H.a([$.ax,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.J
i=H.a([$.bV,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.w
i=H.a([$.bV,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.J
i=H.a([$.bV,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.w
i=H.a([$.bV,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.w
i=H.a([$.bV,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.w
i=H.a([$.bV,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.J
i=H.a([$.bV,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.w
i=H.a([$.bj,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.w
i=H.a([$.bj,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.w
i=H.a([$.bj,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.H
i=H.a([$.bj,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bp,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.w
i=H.a([$.bp,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.H
i=H.a([$.bp,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bp,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.H
i=H.a([$.cf,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.w
i=H.a([$.cf,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.ab
i=H.a([$.cf,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.w
i=H.a([$.cf,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.w
i=H.a([$.b5,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.H
i=H.a([$.b5,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.w
i=H.a([$.b5,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.w
i=H.a([$.b5,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.w
i=H.a([$.b5,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.w
i=H.a([$.b5,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.w
i=H.a([$.b5,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.H
i=H.a([$.b5,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.H
i=H.a([$.bA,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.w
i=H.a([$.bA,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.w
i=H.a([$.bA,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.w
i=H.a([$.bA,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.w
i=H.a([$.bA,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.w
i=H.a([$.bA,$.bN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.w
i=H.a([$.bA,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.uZ
i=H.a([$.bA,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.d("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.H
i=H.a([$.bA,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.J
i=H.a([$.bS,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.d("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.aw,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.aw,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.J
i=H.a([$.ba,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aL,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.J
i=H.a([$.as,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.w
i=H.a([$.as,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.J
i=H.a([$.as,$.ac],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.c9,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.c9,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aN,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aN,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.ab
i=H.a([$.aN,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.ab
i=H.a([$.aN,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.H
i=H.a([$.aN,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.H
i=H.a([$.aN,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.ab
i=H.a([$.aN,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aN,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aN,$.c0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aN,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.H
i=H.a([$.aN,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.w
i=H.a([$.b4,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.w
i=H.a([$.aa,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.w
i=H.a([$.bW,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.w
i=H.a([$.bW,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.ab
i=H.a([$.bW,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.ab
i=H.a([$.b4,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.H
i=H.a([$.b4,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.J
i=H.a([$.b4,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.H
i=H.a([$.b4,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.ab
i=H.a([$.am,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.am,$.a4,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.H
i=H.a([$.am,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.J
i=H.a([$.am,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.am,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.ab
i=H.a([$.am,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.ab
i=H.a([$.bm,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bm,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bm,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aL,$.c0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.H
i=H.a([$.bN,$.c0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.H
i=H.a([$.aD,$.c0],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aD,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.H
i=H.a([$.a9,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aD,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.H
i=H.a([$.aD,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.J
i=H.a([$.aD,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bq,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bq,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bq,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aD,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bq,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a9,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bq,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bq,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.H
i=H.a([$.bq,$.bN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bq,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bn,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a4,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.H
i=H.a([$.a9,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bw,$.bN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bN,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bN,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bN,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.H
i=H.a([$.bN,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.H
i=H.a([$.bN,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bN,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.H
i=H.a([$.aa,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.aa,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.aa,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.aa,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.ab
i=H.a([$.aa,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.aa,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.aa,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.aa,$.bw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.aa,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bw,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bw,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.ab
i=H.a([$.Y,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.bg,$.aL],l)
H.a([],p)
$.$get$c().h(0,new G.d("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.bg,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.bg,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.H
i=H.a([$.bg,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.J
i=H.a([$.ay,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.H
i=H.a([$.b7,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.b7,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.J
i=H.a([$.as,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.J
i=H.a([$.aB,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.J
i=H.a([$.aB,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.H
i=H.a([$.au,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.H
i=H.a([$.Y,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Y,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.au,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.d("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.ab
i=H.a([$.aB,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.H
i=H.a([$.Y,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.H
i=H.a([$.aB,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.H
i=H.a([$.aB,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.H
i=H.a([$.aB,$.aK,$.av,$.jE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.H
i=H.a([$.as,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.H
i=H.a([$.as,$.a4],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.H
i=H.a([$.as,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.H
i=H.a([$.a4,$.al],l)
H.a([],p)
$.$get$c().h(0,new G.d("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.H
i=H.a([$.as,$.b8,$.a9,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.d("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.w
i=H.a([$.F,$.bV],l)
H.a([],p)
$.$get$c().h(0,new G.d("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.bc,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.H
i=H.a([$.bR,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.X,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.aA,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.H
i=H.a([$.ca,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.w
i=H.a([$.M,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.H
i=H.a([$.M,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.ab
i=H.a([$.b9,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.H
i=H.a([$.bj,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.H
i=H.a([$.at,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.w
i=H.a([$.aB,$.cf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.ab
i=H.a([$.b5,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.H
i=H.a([$.aL,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.J
i=H.a([$.bd,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.ab
i=H.a([$.bW,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.H
i=H.a([$.am,$.at],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.H
i=H.a([$.at,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.H
i=H.a([$.at,$.bN],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.H
i=H.a([$.at,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.H
i=H.a([$.aD,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.H
i=H.a([$.bh,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.H
i=H.a([$.bh,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.H
i=H.a([$.bh,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.H
i=H.a([$.aF,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.H
i=H.a([$.aK,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.H
i=H.a([$.aB,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.H
i=H.a([$.a4,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.H
i=H.a([$.P,$.S,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.d("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.H
i=H.a([$.P,$.S,$.bd,$.aH,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.H
i=H.a([$.P,$.S,$.bd,$.cf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.H
i=H.a([$.ax,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.H
i=H.a([$.bA,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.H
i=H.a([$.b5,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.H
i=H.a([$.a4,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.H
i=H.a([$.ba,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.H
l=H.a([$.bQ,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chipped",l,n,o,0))
if($.y2==null){o=$.n_
n=$.aM
l=$.aw
k=$.bc
j=new U.aj(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a3(null,null,null,m),0,3)
j.M("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.y2=j}o=$.$get$an();(o&&C.b).sm(o,0)
o=$.$get$an()
n=$.Q
l=$.xj
k=new U.aj(n,null,null,null,"Speedo",!1,P.a3(null,null,null,m),0,3)
k.M("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$an()
o=$.fk
n=$.aw
l=$.F
j=$.aM
i=new U.aj(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a3(null,null,null,m),0,3)
i.M("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$an()
k=$.uM
o=$.ac
j=$.F
l=new U.aj(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a3(null,null,null,m),0,3)
l.M("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$an()
i=$.uV
k=$.aN
j=$.F
o=new U.aj(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a3(null,null,null,m),0,3)
o.M("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$an()
l=$.uS
i=$.aN
j=$.F
k=new U.aj(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a3(null,null,null,m),0,3)
k.M("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$an()
o=$.xx
l=$.aN
j=$.F
i=new U.aj(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a3(null,null,null,m),0,3)
i.M("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$an()
k=$.x4
o=$.aM
j=$.aw
l=$.F
n=new U.aj(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a3(null,null,null,m),0,3)
n.M("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$an()
i=$.uH
k=$.aM
l=$.aw
j=$.F
o=new U.aj(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a3(null,null,null,m),0,3)
o.M("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$an()
n=$.hs
i=$.ac
j=$.bQ
l=new U.aj(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a3(null,null,null,m),0,3)
l.M("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$an()
o=$.xA
n=$.aw
j=$.F
i=new U.aj(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a3(null,null,null,m),0,3)
i.M("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$an()
l=$.x9
o=$.aw
j=$.F
n=new U.aj(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a3(null,null,null,m),0,3)
n.M("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$an()
i=$.xg
l=$.aM
j=$.F
o=new U.aj(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a3(null,null,null,m),0,3)
o.M("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$an()
n=$.uR
i=$.bA
j=$.bp
l=new U.aj(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a3(null,null,null,m),0,3)
l.M("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$an()
o=$.eo
n=$.c9
j=$.ax
i=$.ac
k=new U.aj(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a3(null,null,null,m),0,3)
k.M("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$an()
l=$.uI
o=$.aA
i=$.bW
j=new U.aj(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a3(null,null,null,m),0,3)
j.M("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$an()
k=$.uQ
l=$.F
i=$.aM
o=new U.aj(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a3(null,null,null,m),0,3)
o.M("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$an()
j=$.xC
k=$.X
i=$.ac
l=new U.aj(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a3(null,null,null,m),0,3)
l.M("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$an()
o=$.xE
j=$.bg
i=$.Q
k=new U.aj(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a3(null,null,null,m),0,3)
k.M("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$an()
l=$.uE
o=$.aN
i=$.ax
j=$.Q
n=$.aM
h=new U.aj(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a3(null,null,null,m),0,3)
h.M("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$an()
k=$.jE
l=$.X
n=$.ac
j=new U.aj(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a3(null,null,null,m),0,3)
j.M("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$an()
h=$.jC
k=$.X
n=new U.aj(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a3(null,null,null,m),0,3)
n.M("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$an()
j=$.av
h=$.M
k=$.ac
l=new U.aj(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a3(null,null,null,m),0,3)
l.M("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$an()
n=$.xu
j=$.F
k=$.ac
h=new U.aj(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a3(null,null,null,m),0,3)
h.M("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$an()
l=$.uD
n=$.aw
k=$.F
j=$.ac
i=new U.aj(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a3(null,null,null,m),0,3)
i.M("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.xp
l=$.X
j=$.aM
k=new U.aj(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a3(null,null,null,m),0,3)
k.M("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.fj
h=$.F
j=$.ac
l=new U.aj(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a3(null,null,null,m),0,3)
l.M("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.x8
i=$.X
j=$.ac
h=new U.aj(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a3(null,null,null,m),0,3)
h.M("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.xF
k=$.aA
j=$.ac
i=new U.aj(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a3(null,null,null,m),0,3)
i.M("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.xB
l=$.X
j=$.aN
k=new U.aj(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a3(null,null,null,m),0,3)
k.M("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.xz
h=$.F
j=$.aw
l=new U.aj(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a3(null,null,null,m),0,3)
l.M("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.uO
i=$.F
j=$.aN
h=new U.aj(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a3(null,null,null,m),0,3)
h.M("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.n0
k=$.F
j=$.bq
i=new U.aj(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a3(null,null,null,m),0,3)
i.M("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.eo
l=$.ca
j=$.ac
k=new U.aj(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a3(null,null,null,m),0,3)
k.M("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.xD
h=$.F
j=$.aM
l=new U.aj(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a3(null,null,null,m),0,3)
l.M("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.mZ
i=$.M
j=$.aw
h=new U.aj(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a3(null,null,null,m),0,3)
h.M("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.uJ
k=$.F
j=$.ac
i=new U.aj(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a3(null,null,null,m),0,3)
i.M("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.e7
l=$.b7
j=$.Q
k=new U.aj(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a3(null,null,null,m),0,3)
k.M("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.hr
h=$.F
j=$.bg
l=new U.aj(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a3(null,null,null,m),0,3)
l.M("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.uY
i=$.F
j=$.ac
h=new U.aj(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a3(null,null,null,m),0,3)
h.M("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.xy
k=$.F
j=$.ac
i=new U.aj(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a3(null,null,null,m),0,3)
i.M("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.uX
l=$.X
j=$.ac
k=new U.aj(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a3(null,null,null,m),0,3)
k.M("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.uT
h=$.X
j=$.aD
l=new U.aj(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a3(null,null,null,m),0,3)
l.M("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.uU
i=$.F
j=$.aw
h=new U.aj(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a3(null,null,null,m),0,3)
h.M("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.n3
k=$.F
j=$.Y
i=new U.aj(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a3(null,null,null,m),0,3)
i.M("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.jD
l=$.ax
j=$.c9
k=new U.aj(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a3(null,null,null,m),0,3)
k.M("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.xi
h=$.X
j=$.ac
l=new U.aj(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a3(null,null,null,m),0,3)
l.M("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$an()
k=$.xo
i=$.F
j=$.aw
h=new U.aj(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a3(null,null,null,m),0,3)
h.M("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$an()
l=$.xw
k=$.F
j=$.aw
i=new U.aj(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a3(null,null,null,m),0,3)
i.M("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$an()
h=$.xv
l=$.F
j=$.c9
k=new U.aj(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a3(null,null,null,m),0,3)
k.M("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$an()
i=$.dk
h=$.X
j=$.ac
m=new U.aj(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a3(null,null,null,m),0,3)
m.M("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bI("Duttle","Dut",null,null)
$.$get$bP().push(m)
$.wP=m
m=new S.bI("Salamander","GLUB",null,null)
$.$get$bP().push(m)
$.ur=m
m=new S.bI("Crocodile","NAK",null,null)
$.$get$bP().push(m)
$.e3=m
m=new S.bI("Iguana","thip",null,null)
$.$get$bP().push(m)
$.el=m
m=new S.bI("Turtle","click",null,null)
$.$get$bP().push(m)
$.fb=m
m=new S.bI("Skeleton","rattle",null,null)
$.$get$bP().push(m)
$.dO=m
m=new S.bI("Robot","BEEP",null,null)
$.$get$bP().push(m)
$.f9=m
m=new S.bI("Chameleon","BLEP",null,null)
$.$get$bP().push(m)
$.iL=m
m=new S.bI("Axolotl","BARP",null,null)
$.$get$bP().push(m)
$.uk=m
m=new S.bI("Lizard","bleb",null,null)
$.$get$bP().push(m)
$.mj=m
m=new S.bI("Snake","hiss",null,null)
$.$get$bP().push(m)
$.ut=m
m=new S.bI("Alligator","nak",null,null)
$.$get$bP().push(m)
$.iJ=m
m=new S.bI("Mole","snuff",null,null)
$.$get$bP().push(m)
$.wQ=m
m=new S.bI("Bird","tweet",null,null)
$.$get$bP().push(m)
$.mi=m
m=new S.bI("Wolf","howl",null,null)
$.$get$bP().push(m)
$.mp=m
m=new S.bI("Newt","skitter",null,null)
$.$get$bP().push(m)
$.wR=m
m=new S.bI("Spider","skitter",null,null)
$.$get$bP().push(m)
$.iQ=m
m=new S.bI("Cupid","flappa",null,null)
$.$get$bP().push(m)
$.iM=m
m=new S.bI("Dragon","roar",null,null)
$.$get$bP().push(m)
$.hd=m
m=new S.iq("Prospitian","murmur",null,null)
$.$get$bP().push(m)
$.AJ=m
m=new S.iq("Dersite","mutter",null,null)
$.$get$bP().push(m)
$.AG=m
m=new S.mK("Horror Terror","a;lkjdf",null,null)
$.$get$bP().push(m)
$.AI=m
$.AK=H.a([$.ut,$.iJ,$.wR,$.ur,$.el,$.e3,$.fb,$.iL,$.uk,$.mj],[S.bI])
$.hj=new T.c1(0,"spices")
m=$.AM
$.f6=new T.c1(m,"fresh baked bread")
$.cx=new T.c1(m,"sweetness")
$.c7=new T.c1(m,"nature")
$.mo=new T.c1(0,"salt")
k=$.AL
$.d5=new T.c1(k,"rot")
$.AH=new T.c1(k,"feet")
$.f8=new T.c1(0,"oil")
$.um=new T.c1(0,"chlorine")
$.hh=new T.c1(0,"nothing in particular")
$.ek=new T.c1(0,"gunpowder")
$.hg=new T.c1(0,"must")
$.cD=new T.c1(m,"zoo animals")
$.e4=new T.c1(k,"sweat")
$.iP=new T.c1(0,"ozone")
$.c6=new T.c1(0,"deceit")
$.d4=new T.c1(k,"blood")
$.fa=new T.c1(k,"smoke")
$.bY=new K.bU(k,"creepy")
$.b_=new K.bU(m,"calm")
$.cd=new K.bU(k,"frantic")
$.ml=new K.bU(0,"like nothing")
$.bZ=new K.bU(m,"energizing")
$.cC=new K.bU(0,"studious")
$.dv=new K.bU(0,"dangerous")
$.dM=new K.bU(0,"glamorous")
$.hi=new K.bU(0,"romantic")
$.du=new K.bU(m,"creative")
$.mk=new K.bU(0,"lucky")
$.dw=new K.bU(0,"happy")
$.dN=new K.bU(0,"heroic")
$.d6=new K.bU(k,"stupid")
$.mk=new K.bU(0,"lucky")
$.un=new K.bU(0,"claustrophobic")
$.mm=new K.bU(0,"overheated")
$.dL=new K.bU(k,"confusing")
$.cl=new K.bU(0,"contemplatative")
$.cV=new M.bC(0,"clanking")
$.cw=new M.bC(0,"laughing")
$.bf=new M.bC(m,"rustling")
$.en=new M.bC(k,"screaming")
$.iN=new M.bC(k,"foot steps")
$.f7=new M.bC(k,"beeping")
$.wT=new M.bC(k,"whispering")
$.ej=new M.bC(0,"clacking")
$.cA=new M.bC(0,"applause")
$.em=new M.bC(0,"jazz")
$.up=new M.bC(0,"disco")
$.he=new M.bC(0,"drums")
$.hf=new M.bC(0,"echoing")
$.mn=new M.bC(k,"roaring")
$.iO=new M.bC(k,"gunfire")
$.cB=new M.bC(0,"music")
$.us=new M.bC(0,"singing")
$.ul=new M.bC(0,"chanting")
$.fc=new M.bC(0,"whistling")
$.di=new M.bC(m,"nature")
$.uo=new M.bC(0,"croaking")
$.dj=new M.bC(0,"silence")
$.uq=new M.bC(0,"pulsing")
$.wS=new M.bC(0,"ticking")
m=H.a([],p)
o=[X.G,P.V]
n=A.a2
l=E.O
k=[l]
j=[A.fW]
m=new S.nn(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.u(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Knight",3,!0,!1,!1)
$.H5=m
m=P.k(H.a([new E.O($.cb,0.4,!1)],k),l)
i=H.a([],p)
m=new S.p1(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.u(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Seer",6,!0,!1,!1)
$.Hi=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.l7("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.u(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Bard",9,!0,!1,!1)
$.H_=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.mG("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.u(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Heir",8,!0,!1,!1)
$.H2=m
m=H.a([],p)
m=new U.nH(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.u(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Maid",0,!0,!1,!1)
$.H8=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.oQ(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.u(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Rogue",4,!0,!1,!1)
$.Hd=m
m=H.a([],p)
m=new V.ok(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.u(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Page",1,!0,!1,!1)
$.Hb=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.q0(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.u(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Thief",7,!0,!1,!1)
$.Hl=m
m=P.k(H.a([new E.O($.cb,0.1,!1)],k),l)
i=H.a([],p)
m=new R.pO(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.u(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Sylph",5,!0,!1,!1)
$.Hk=m
m=H.a([],p)
m=new N.oE("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.u(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Prince",10,!0,!1,!1)
$.Hc=m
m=P.k(H.a([new E.O($.cb,0.1,!1)],k),l)
i=H.a([],p)
m=new M.qv("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.u(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Witch",11,!0,!1,!1)
$.Hn=m
m=P.k(H.a([new E.O($.cb,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nG("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.u(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Mage",2,!0,!1,!1)
$.H7=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.k(H.a([new E.O($.cb,3,!1),new E.O($.pj,-2,!1)],k),l)
e=H.a([],p)
m=new E.qr("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.u(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Waste",12,!1,!1,!1)
$.Hm=m
m=H.a([],p)
m=new Y.oZ("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.u(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Scout",13,!1,!1,!1)
$.Hg=m
m=P.k(H.a([new E.O($.cb,0.5,!1)],k),l)
i=H.a([],p)
m=new L.p_("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.u(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Scribe",15,!1,!1,!1)
$.Hh=m
m=P.k(H.a([new E.O($.cb,0.5,!1)],k),l)
i=H.a([],p)
m=new E.oW(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.u(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Sage",14,!1,!1,!1)
$.He=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.mE("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.u(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Guide",16,!1,!1,!1)
$.H1=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.k(H.a([new E.O($.cb,3,!1)],k),l)
g=H.a([],p)
m=new Y.mD(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.u(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Grace",17,!1,!1,!1)
$.H0=m
m=P.k(H.a([new E.O($.cb,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nV("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.u(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Muse",18,!1,!1,!1)
$.H9=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.I(null,null,n)
h=P.k(H.a([new E.O($.cb,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.nE("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.u(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Lord",19,!1,!1,!1)
$.H6=m
m=P.k(H.a([new E.O($.cb,-0.1,!1),new E.O($.dB,1,!1)],k),l)
i=H.a([],p)
m=new Y.pa("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.u(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Smith",20,!1,!1,!1)
$.Hj=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.k(H.a([new E.O($.cb,4,!1),new E.O($.pj,-3,!1)],k),l)
e=H.a([],p)
m=new X.mO("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.u(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Human",21,!1,!1,!0)
$.H3=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.k(H.a([new E.O($.cb,41.3,!1),new E.O($.pj,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.mP(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.u(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Hussie",22,!1,!0,!0)
$.H4=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.oX(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.u(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a6("Sans",23,!1,!0,!0)
$.Hf=m
$.Ha=T.GZ("Null",255,!1,!0,!1)
m=A.e0
i=P.E
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#00ff00"),!0)
h.j(0,$.aQ,L.e("#EFEFEF"),!0)
h.j(0,$.aP,L.e("#DEDEDE"),!0)
h.j(0,$.aZ,L.e("#FF2106"),!0)
h.j(0,$.aY,L.e("#B01200"),!0)
h.j(0,$.aS,L.e("#2F2F30"),!0)
h.j(0,$.aT,L.e("#1D1D1D"),!0)
h.j(0,$.aR,L.e("#080808"),!0)
h.j(0,$.aX,L.e("#030303"),!0)
h.j(0,$.aW,L.e("#242424"),!0)
h.j(0,$.aV,L.e("#333333"),!0)
h.j(0,$.aU,L.e("#141414"),!0)
g=P.k(H.a(["Frogs"],p),q)
f=P.k(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.k(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.k(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.k(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.k(H.a([new E.O($.dB,2,!0),new E.O($.eD,1,!0),new E.O($.ec,-2,!0)],k),l)
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aP,L.e("#FF8700"),!0)
a.j(0,$.aZ,L.e("#7F7F7F"),!0)
a.j(0,$.aY,L.e("#727272"),!0)
a.j(0,$.aS,L.e("#A3A3A3"),!0)
a.j(0,$.aT,L.e("#999999"),!0)
a.j(0,$.aR,L.e("#898989"),!0)
a.j(0,$.aX,L.e("#EFEFEF"),!0)
a.j(0,$.aW,L.e("#DBDBDB"),!0)
a.j(0,$.aV,L.e("#C6C6C6"),!0)
a.j(0,$.aU,L.e("#ADADAD"),!0)
a=new N.pd(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.af(0,"Space",!0,!1,!1)
$.A4=a
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#ff0000"),!0)
a.j(0,$.aQ,L.e("#FF2106"),!0)
a.j(0,$.aP,L.e("#AD1604"),!0)
a.j(0,$.aZ,L.e("#030303"),!0)
a.j(0,$.aY,L.e("#242424"),!0)
a.j(0,$.aS,L.e("#510606"),!0)
a.j(0,$.aT,L.e("#3C0404"),!0)
a.j(0,$.aR,L.e("#1F0000"),!0)
a.j(0,$.aX,L.e("#B70D0E"),!0)
a.j(0,$.aW,L.e("#970203"),!0)
a.j(0,$.aV,L.e("#8E1516"),!0)
a.j(0,$.aU,L.e("#640707"),!0)
b=P.k(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.k(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.k(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.k(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.k(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.k(H.a([new E.O($.hW,2,!0),new E.O($.ec,1,!0),new E.O($.fx,-2,!0)],k),l)
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aP,L.e("#FF8700"),!0)
h.j(0,$.aZ,L.e("#7F7F7F"),!0)
h.j(0,$.aY,L.e("#727272"),!0)
h.j(0,$.aS,L.e("#A3A3A3"),!0)
h.j(0,$.aT,L.e("#999999"),!0)
h.j(0,$.aR,L.e("#898989"),!0)
h.j(0,$.aX,L.e("#EFEFEF"),!0)
h.j(0,$.aW,L.e("#DBDBDB"),!0)
h.j(0,$.aV,L.e("#C6C6C6"),!0)
h.j(0,$.aU,L.e("#ADADAD"),!0)
h=new N.q1(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.af(1,"Time",!0,!1,!1)
$.A6=h
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#3399ff"),!0)
h.j(0,$.aQ,L.e("#10E0FF"),!0)
h.j(0,$.aP,L.e("#00A4BB"),!0)
h.j(0,$.aZ,L.e("#FEFD49"),!0)
h.j(0,$.aY,L.e("#D6D601"),!0)
h.j(0,$.aS,L.e("#0052F3"),!0)
h.j(0,$.aT,L.e("#0046D1"),!0)
h.j(0,$.aR,L.e("#003396"),!0)
h.j(0,$.aX,L.e("#0087EB"),!0)
h.j(0,$.aW,L.e("#0070ED"),!0)
h.j(0,$.aV,L.e("#006BE1"),!0)
h.j(0,$.aU,L.e("#0054B0"),!0)
g=P.k(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.k(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.k(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.k(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.k(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.k(H.a([new E.O($.ec,2,!0),new E.O($.cG,1,!0),new E.O($.eD,-1,!0),new E.O($.eE,-1,!0),new E.O($.cb,0.05,!1)],k),l)
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aP,L.e("#FF8700"),!0)
a.j(0,$.aZ,L.e("#7F7F7F"),!0)
a.j(0,$.aY,L.e("#727272"),!0)
a.j(0,$.aS,L.e("#A3A3A3"),!0)
a.j(0,$.aT,L.e("#999999"),!0)
a.j(0,$.aR,L.e("#898989"),!0)
a.j(0,$.aX,L.e("#EFEFEF"),!0)
a.j(0,$.aW,L.e("#DBDBDB"),!0)
a.j(0,$.aV,L.e("#C6C6C6"),!0)
a.j(0,$.aU,L.e("#ADADAD"),!0)
a=new T.lf(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.af(2,"Breath",!0,!1,!1)
$.zQ=a
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#003300"),!0)
a.j(0,$.aQ,L.e("#0F0F0F"),!0)
a.j(0,$.aP,L.e("#010101"),!0)
a.j(0,$.aZ,L.e("#E8C15E"),!0)
a.j(0,$.aY,L.e("#C7A140"),!0)
a.j(0,$.aS,L.e("#1E211E"),!0)
a.j(0,$.aT,L.e("#141614"),!0)
a.j(0,$.aR,L.e("#0B0D0B"),!0)
a.j(0,$.aX,L.e("#204020"),!0)
a.j(0,$.aW,L.e("#11200F"),!0)
a.j(0,$.aV,L.e("#192C16"),!0)
a.j(0,$.aU,L.e("#121F10"),!0)
b=P.k(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.k(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.k(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.k(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.k(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.k(H.a([new E.O($.dB,2,!0),new E.O($.fx,1,!0),new E.O($.hW,-1,!0),new E.O($.eD,-1,!0),new E.O($.cb,0.01,!1)],k),l)
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aP,L.e("#FF8700"),!0)
h.j(0,$.aZ,L.e("#7F7F7F"),!0)
h.j(0,$.aY,L.e("#727272"),!0)
h.j(0,$.aS,L.e("#A3A3A3"),!0)
h.j(0,$.aT,L.e("#999999"),!0)
h.j(0,$.aR,L.e("#898989"),!0)
h.j(0,$.aX,L.e("#EFEFEF"),!0)
h.j(0,$.aW,L.e("#DBDBDB"),!0)
h.j(0,$.aV,L.e("#C6C6C6"),!0)
h.j(0,$.aU,L.e("#ADADAD"),!0)
h=new U.lN(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.af(3,"Doom",!0,!1,!1)
$.zR=h
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#993300"),!0)
h.j(0,$.aQ,L.e("#BA1016"),!0)
h.j(0,$.aP,L.e("#820B0F"),!0)
h.j(0,$.aZ,L.e("#381B76"),!0)
h.j(0,$.aY,L.e("#1E0C47"),!0)
h.j(0,$.aS,L.e("#290704"),!0)
h.j(0,$.aT,L.e("#230200"),!0)
h.j(0,$.aR,L.e("#110000"),!0)
h.j(0,$.aX,L.e("#3D190A"),!0)
h.j(0,$.aW,L.e("#2C1207"),!0)
h.j(0,$.aV,L.e("#5C2913"),!0)
h.j(0,$.aU,L.e("#4C1F0D"),!0)
g=P.k(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.k(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.k(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.k(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.k(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.k(H.a([new E.O($.eE,2,!0),new E.O($.cG,1,!0),new E.O($.dB,-2,!0)],k),l)
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aP,L.e("#FF8700"),!0)
a.j(0,$.aZ,L.e("#7F7F7F"),!0)
a.j(0,$.aY,L.e("#727272"),!0)
a.j(0,$.aS,L.e("#A3A3A3"),!0)
a.j(0,$.aT,L.e("#999999"),!0)
a.j(0,$.aR,L.e("#898989"),!0)
a.j(0,$.aX,L.e("#EFEFEF"),!0)
a.j(0,$.aW,L.e("#DBDBDB"),!0)
a.j(0,$.aV,L.e("#C6C6C6"),!0)
a.j(0,$.aU,L.e("#ADADAD"),!0)
a=new T.ld(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.af(4,"Blood",!0,!1,!1)
$.zP=a
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#ff3399"),!0)
a.j(0,$.aQ,L.e("#BD1864"),!0)
a.j(0,$.aP,L.e("#780F3F"),!0)
a.j(0,$.aZ,L.e("#1D572E"),!0)
a.j(0,$.aY,L.e("#11371D"),!0)
a.j(0,$.aS,L.e("#4C1026"),!0)
a.j(0,$.aT,L.e("#3C0D1F"),!0)
a.j(0,$.aR,L.e("#260914"),!0)
a.j(0,$.aX,L.e("#6B0829"),!0)
a.j(0,$.aW,L.e("#4A0818"),!0)
a.j(0,$.aV,L.e("#55142A"),!0)
a.j(0,$.aU,L.e("#3D0E1E"),!0)
b=P.k(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.k(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.k(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.k(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.k(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.k(H.a([new E.O($.eE,1,!0),new E.l0(null,1,!0)],k),l)
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aP,L.e("#FF8700"),!0)
h.j(0,$.aZ,L.e("#7F7F7F"),!0)
h.j(0,$.aY,L.e("#727272"),!0)
h.j(0,$.aS,L.e("#A3A3A3"),!0)
h.j(0,$.aT,L.e("#999999"),!0)
h.j(0,$.aR,L.e("#898989"),!0)
h.j(0,$.aX,L.e("#EFEFEF"),!0)
h.j(0,$.aW,L.e("#DBDBDB"),!0)
h.j(0,$.aV,L.e("#C6C6C6"),!0)
h.j(0,$.aU,L.e("#ADADAD"),!0)
h=new T.mF(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.af(5,"Heart",!0,!1,!1)
$.zT=h
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#3da35a"),!0)
h.j(0,$.aQ,L.e("#06FFC9"),!0)
h.j(0,$.aP,L.e("#04A885"),!0)
h.j(0,$.aZ,L.e("#6E0E2E"),!0)
h.j(0,$.aY,L.e("#4A0818"),!0)
h.j(0,$.aS,L.e("#1D572E"),!0)
h.j(0,$.aT,L.e("#164524"),!0)
h.j(0,$.aR,L.e("#11371D"),!0)
h.j(0,$.aX,L.e("#3DA35A"),!0)
h.j(0,$.aW,L.e("#2E7A43"),!0)
h.j(0,$.aV,L.e("#3B7E4F"),!0)
h.j(0,$.aU,L.e("#265133"),!0)
g=P.k(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.k(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.k(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.k(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.k(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.k(H.a([new E.O($.fx,2,!0),new E.O($.hW,1,!0),new E.O($.dB,-2,!0)],k),l)
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aP,L.e("#FF8700"),!0)
a.j(0,$.aZ,L.e("#7F7F7F"),!0)
a.j(0,$.aY,L.e("#727272"),!0)
a.j(0,$.aS,L.e("#A3A3A3"),!0)
a.j(0,$.aT,L.e("#999999"),!0)
a.j(0,$.aR,L.e("#898989"),!0)
a.j(0,$.aX,L.e("#EFEFEF"),!0)
a.j(0,$.aW,L.e("#DBDBDB"),!0)
a.j(0,$.aV,L.e("#C6C6C6"),!0)
a.j(0,$.aU,L.e("#ADADAD"),!0)
a=new V.nU(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.af(6,"Mind",!0,!1,!1)
$.A_=a
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#ff9933"),!0)
a.j(0,$.aQ,L.e("#FEFD49"),!0)
a.j(0,$.aP,L.e("#FEC910"),!0)
a.j(0,$.aZ,L.e("#10E0FF"),!0)
a.j(0,$.aY,L.e("#00A4BB"),!0)
a.j(0,$.aS,L.e("#FA4900"),!0)
a.j(0,$.aT,L.e("#E94200"),!0)
a.j(0,$.aR,L.e("#C33700"),!0)
a.j(0,$.aX,L.e("#FF8800"),!0)
a.j(0,$.aW,L.e("#D66E04"),!0)
a.j(0,$.aV,L.e("#E76700"),!0)
a.j(0,$.aU,L.e("#CA5B00"),!0)
b=P.k(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.k(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.k(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.k(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.k(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.k(H.a([new E.O($.hV,2,!0),new E.O($.fx,1,!0),new E.O($.cG,-1,!0),new E.O($.eD,-1,!0),new E.O($.cb,0.2,!1)],k),l)
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aP,L.e("#FF8700"),!0)
h.j(0,$.aZ,L.e("#7F7F7F"),!0)
h.j(0,$.aY,L.e("#727272"),!0)
h.j(0,$.aS,L.e("#A3A3A3"),!0)
h.j(0,$.aT,L.e("#999999"),!0)
h.j(0,$.aR,L.e("#898989"),!0)
h.j(0,$.aX,L.e("#EFEFEF"),!0)
h.j(0,$.aW,L.e("#DBDBDB"),!0)
h.j(0,$.aV,L.e("#C6C6C6"),!0)
h.j(0,$.aU,L.e("#ADADAD"),!0)
h=new G.nr(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.af(7,"Light",!0,!1,!1)
$.zZ=h
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#000066"),!0)
h.j(0,$.aQ,L.e("#0B1030"),!0)
h.j(0,$.aP,L.e("#04091A"),!0)
h.j(0,$.aZ,L.e("#CCC4B5"),!0)
h.j(0,$.aY,L.e("#A89F8D"),!0)
h.j(0,$.aS,L.e("#00164F"),!0)
h.j(0,$.aT,L.e("#00103C"),!0)
h.j(0,$.aR,L.e("#00071A"),!0)
h.j(0,$.aX,L.e("#033476"),!0)
h.j(0,$.aW,L.e("#02285B"),!0)
h.j(0,$.aV,L.e("#004CB2"),!0)
h.j(0,$.aU,L.e("#003E91"),!0)
g=P.k(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.k(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.k(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.k(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.k(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.k(H.a([new E.fR(D.vN(),null,3,!0),new E.fR(D.vN(),null,-1,!0),new E.O($.hW,-1,!0),new E.O($.cb,0.2,!1)],k),l)
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aP,L.e("#FF8700"),!0)
a.j(0,$.aZ,L.e("#7F7F7F"),!0)
a.j(0,$.aY,L.e("#727272"),!0)
a.j(0,$.aS,L.e("#A3A3A3"),!0)
a.j(0,$.aT,L.e("#999999"),!0)
a.j(0,$.aR,L.e("#898989"),!0)
a.j(0,$.aX,L.e("#EFEFEF"),!0)
a.j(0,$.aW,L.e("#DBDBDB"),!0)
a.j(0,$.aV,L.e("#C6C6C6"),!0)
a.j(0,$.aU,L.e("#ADADAD"),!0)
a=new Q.qq(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.af(8,"Void",!0,!1,!1)
$.A7=a
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#9900cc"),!0)
a.j(0,$.aQ,L.e("#974AA7"),!0)
a.j(0,$.aP,L.e("#6B347D"),!0)
a.j(0,$.aZ,L.e("#3D190A"),!0)
a.j(0,$.aY,L.e("#2C1207"),!0)
a.j(0,$.aS,L.e("#7C3FBA"),!0)
a.j(0,$.aT,L.e("#6D34A6"),!0)
a.j(0,$.aR,L.e("#592D86"),!0)
a.j(0,$.aX,L.e("#381B76"),!0)
a.j(0,$.aW,L.e("#1E0C47"),!0)
a.j(0,$.aV,L.e("#281D36"),!0)
a.j(0,$.aU,L.e("#1D1526"),!0)
b=P.k(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.k(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.k(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.k(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.k(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.k(H.a([new E.O($.hX,2,!0),new E.O($.ec,1,!0),new E.O($.cG,-1,!0),new E.O($.eE,-1,!0),new E.O($.cb,0.01,!1)],k),l)
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aP,L.e("#FF8700"),!0)
h.j(0,$.aZ,L.e("#7F7F7F"),!0)
h.j(0,$.aY,L.e("#727272"),!0)
h.j(0,$.aS,L.e("#A3A3A3"),!0)
h.j(0,$.aT,L.e("#999999"),!0)
h.j(0,$.aR,L.e("#898989"),!0)
h.j(0,$.aX,L.e("#EFEFEF"),!0)
h.j(0,$.aW,L.e("#DBDBDB"),!0)
h.j(0,$.aV,L.e("#C6C6C6"),!0)
h.j(0,$.aU,L.e("#ADADAD"),!0)
h=new E.oH(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.af(9,"Rage",!0,!1,!1)
$.A1=h
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#ffcc66"),!0)
h.j(0,$.aQ,L.e("#FDF9EC"),!0)
h.j(0,$.aP,L.e("#D6C794"),!0)
h.j(0,$.aZ,L.e("#164524"),!0)
h.j(0,$.aY,L.e("#06280C"),!0)
h.j(0,$.aS,L.e("#FFC331"),!0)
h.j(0,$.aT,L.e("#F7BB2C"),!0)
h.j(0,$.aR,L.e("#DBA523"),!0)
h.j(0,$.aX,L.e("#FFE094"),!0)
h.j(0,$.aW,L.e("#E8C15E"),!0)
h.j(0,$.aV,L.e("#F6C54A"),!0)
h.j(0,$.aU,L.e("#EDAF0C"),!0)
g=P.k(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.k(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.k(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.k(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.k(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.k(H.a([new E.O($.cG,2,!0),new E.O($.hV,1,!0),new E.fR(D.vN(),null,-2,!0)],k),l)
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aP,L.e("#FF8700"),!0)
a.j(0,$.aZ,L.e("#7F7F7F"),!0)
a.j(0,$.aY,L.e("#727272"),!0)
a.j(0,$.aS,L.e("#A3A3A3"),!0)
a.j(0,$.aT,L.e("#999999"),!0)
a.j(0,$.aR,L.e("#898989"),!0)
a.j(0,$.aX,L.e("#EFEFEF"),!0)
a.j(0,$.aW,L.e("#DBDBDB"),!0)
a.j(0,$.aV,L.e("#C6C6C6"),!0)
a.j(0,$.aU,L.e("#ADADAD"),!0)
a=new X.mJ(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.af(10,"Hope",!0,!1,!1)
$.zV=a
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#494132"),!0)
a.j(0,$.aQ,L.e("#76C34E"),!0)
a.j(0,$.aP,L.e("#4F8234"),!0)
a.j(0,$.aZ,L.e("#00164F"),!0)
a.j(0,$.aY,L.e("#00071A"),!0)
a.j(0,$.aS,L.e("#605542"),!0)
a.j(0,$.aT,L.e("#494132"),!0)
a.j(0,$.aR,L.e("#2D271E"),!0)
a.j(0,$.aX,L.e("#CCC4B5"),!0)
a.j(0,$.aW,L.e("#A89F8D"),!0)
a.j(0,$.aV,L.e("#A29989"),!0)
a.j(0,$.aU,L.e("#918673"),!0)
b=P.k(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.k(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.k(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.k(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.k(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.k(H.a([new E.O($.eD,2,!0),new E.O($.hX,1,!0),new E.O($.dB,-2,!0)],k),l)
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aP,L.e("#FF8700"),!0)
h.j(0,$.aZ,L.e("#7F7F7F"),!0)
h.j(0,$.aY,L.e("#727272"),!0)
h.j(0,$.aS,L.e("#A3A3A3"),!0)
h.j(0,$.aT,L.e("#999999"),!0)
h.j(0,$.aR,L.e("#898989"),!0)
h.j(0,$.aX,L.e("#EFEFEF"),!0)
h.j(0,$.aW,L.e("#DBDBDB"),!0)
h.j(0,$.aV,L.e("#C6C6C6"),!0)
h.j(0,$.aU,L.e("#ADADAD"),!0)
h=new K.nq(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.af(11,"Life",!0,!1,!1)
$.zY=h
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#9630BF"),!0)
h.j(0,$.aQ,L.e("#cc87e8"),!0)
h.j(0,$.aP,L.e("#9545b7"),!0)
h.j(0,$.aZ,L.e("#ae769b"),!0)
h.j(0,$.aY,L.e("#8f577c"),!0)
h.j(0,$.aS,L.e("#9630bf"),!0)
h.j(0,$.aT,L.e("#693773"),!0)
h.j(0,$.aR,L.e("#4c2154"),!0)
h.j(0,$.aX,L.e("#fcf9bd"),!0)
h.j(0,$.aW,L.e("#e0d29e"),!0)
h.j(0,$.aV,L.e("#bdb968"),!0)
h.j(0,$.aU,L.e("#ab9b55"),!0)
g=P.k(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.k(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.k(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.k(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.k(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.k(H.a([new E.O($.dB,3,!0),new E.O($.cG,-2,!0)],k),l)
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#FF9B00"),!0)
a.j(0,$.aQ,L.e("#FF9B00"),!0)
a.j(0,$.aP,L.e("#FF8700"),!0)
a.j(0,$.aZ,L.e("#7F7F7F"),!0)
a.j(0,$.aY,L.e("#727272"),!0)
a.j(0,$.aS,L.e("#A3A3A3"),!0)
a.j(0,$.aT,L.e("#999999"),!0)
a.j(0,$.aR,L.e("#898989"),!0)
a.j(0,$.aX,L.e("#EFEFEF"),!0)
a.j(0,$.aW,L.e("#DBDBDB"),!0)
a.j(0,$.aV,L.e("#C6C6C6"),!0)
a.j(0,$.aU,L.e("#ADADAD"),!0)
a=new Z.lO(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.af(12,"Dream",!1,!1,!1)
$.zS=a
a=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
a.j(0,$.aO,L.e("#9630BF"),!0)
a.j(0,$.aQ,L.e("#cc87e8"),!0)
a.j(0,$.aP,L.e("#9545b7"),!0)
a.j(0,$.aZ,L.e("#ae769b"),!0)
a.j(0,$.aY,L.e("#8f577c"),!0)
a.j(0,$.aS,L.e("#9630bf"),!0)
a.j(0,$.aT,L.e("#693773"),!0)
a.j(0,$.aR,L.e("#4c2154"),!0)
a.j(0,$.aX,L.e("#fcf9bd"),!0)
a.j(0,$.aW,L.e("#e0d29e"),!0)
a.j(0,$.aV,L.e("#bdb968"),!0)
a.j(0,$.aU,L.e("#ab9b55"),!0)
b=P.k(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.k(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.k(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.k(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.k(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.k(H.a([new E.O($.dB,3,!0),new E.O($.cG,-2,!0)],k),l)
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aP,L.e("#FF8700"),!0)
h.j(0,$.aZ,L.e("#7F7F7F"),!0)
h.j(0,$.aY,L.e("#727272"),!0)
h.j(0,$.aS,L.e("#A3A3A3"),!0)
h.j(0,$.aT,L.e("#999999"),!0)
h.j(0,$.aR,L.e("#898989"),!0)
h.j(0,$.aX,L.e("#EFEFEF"),!0)
h.j(0,$.aW,L.e("#DBDBDB"),!0)
h.j(0,$.aV,L.e("#C6C6C6"),!0)
h.j(0,$.aU,L.e("#ADADAD"),!0)
h=new Q.no(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.af(13,"Law",!1,!1,!0)
$.zX=h
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#ffff00"),!0)
h.j(0,$.aQ,L.e("#ffff00"),!0)
h.j(0,$.aP,L.e("#ffff00"),!0)
h.j(0,$.aZ,L.e("#508b2d"),!0)
h.j(0,$.aY,L.e("#316c0d"),!0)
h.j(0,$.aS,L.e("#dddd00"),!0)
h.j(0,$.aT,L.e("#afaf00"),!0)
h.j(0,$.aR,L.e("#8f8f00"),!0)
h.j(0,$.aX,L.e("#ff0000"),!0)
h.j(0,$.aW,L.e("#a8000a"),!0)
h.j(0,$.aV,L.e("#b8151f"),!0)
h.j(0,$.aU,L.e("#8c1d1d"),!0)
g=P.k(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
f=P.k(H.a(["Juice","Joke","Jespacito"],p),q)
e=P.k(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
d=P.k(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
c=P.k(H.a([new E.O($.cb,13,!0)],k),l)
b=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
b.j(0,$.aO,L.e("#FF9B00"),!0)
b.j(0,$.aQ,L.e("#FF9B00"),!0)
b.j(0,$.aP,L.e("#FF8700"),!0)
b.j(0,$.aZ,L.e("#7F7F7F"),!0)
b.j(0,$.aY,L.e("#727272"),!0)
b.j(0,$.aS,L.e("#A3A3A3"),!0)
b.j(0,$.aT,L.e("#999999"),!0)
b.j(0,$.aR,L.e("#898989"),!0)
b.j(0,$.aX,L.e("#EFEFEF"),!0)
b.j(0,$.aW,L.e("#DBDBDB"),!0)
b.j(0,$.aV,L.e("#C6C6C6"),!0)
b.j(0,$.aU,L.e("#ADADAD"),!0)
b=new Z.nk(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
b.af(14,"Juice",!1,!1,!0)
$.zW=b
b=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
b.j(0,$.aO,L.e("#00ff00"),!0)
b.j(0,$.aQ,L.e("#00ff00"),!0)
b.j(0,$.aP,L.e("#00ff00"),!0)
b.j(0,$.aZ,L.e("#00ff00"),!0)
b.j(0,$.aY,L.e("#00cf00"),!0)
b.j(0,$.aS,L.e("#171717"),!0)
b.j(0,$.aT,L.e("#080808"),!0)
b.j(0,$.aR,L.e("#080808"),!0)
b.j(0,$.aX,L.e("#616161"),!0)
b.j(0,$.aW,L.e("#3b3b3b"),!0)
b.j(0,$.aV,L.e("#4a4a4a"),!0)
b.j(0,$.aU,L.e("#292929"),!0)
c=P.k(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
d=P.k(H.a(["Shogun"],p),q)
e=P.k(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
f=P.k(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.k(H.a([new E.O($.hX,13,!0)],k),l)
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aP,L.e("#FF8700"),!0)
h.j(0,$.aZ,L.e("#7F7F7F"),!0)
h.j(0,$.aY,L.e("#727272"),!0)
h.j(0,$.aS,L.e("#A3A3A3"),!0)
h.j(0,$.aT,L.e("#999999"),!0)
h.j(0,$.aR,L.e("#898989"),!0)
h.j(0,$.aX,L.e("#EFEFEF"),!0)
h.j(0,$.aW,L.e("#DBDBDB"),!0)
h.j(0,$.aV,L.e("#C6C6C6"),!0)
h.j(0,$.aU,L.e("#ADADAD"),!0)
h=new K.oY(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.af(15,"Sauce",!1,!0,!1)
$.A3=h
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#933100"),!0)
h.j(0,$.aQ,L.e("#933100"),!0)
h.j(0,$.aP,L.e("#682200"),!0)
h.j(0,$.aZ,L.e("#4c3a27"),!0)
h.j(0,$.aY,L.e("#302418"),!0)
h.j(0,$.aS,L.e("#a0562b"),!0)
h.j(0,$.aT,L.e("#723e20"),!0)
h.j(0,$.aR,L.e("#442513"),!0)
h.j(0,$.aX,L.e("#963c07"),!0)
h.j(0,$.aW,L.e("#682a06"),!0)
h.j(0,$.aV,L.e("#6d4d3a"),!0)
h.j(0,$.aU,L.e("#422e23"),!0)
g=P.k(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),q)
f=P.k(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),q)
e=P.k(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
d=P.k(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
c=P.k(H.a([new E.O($.ec,10,!0),new E.O($.cG,-2,!0)],k),l)
b=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
b.j(0,$.aO,L.e("#FF9B00"),!0)
b.j(0,$.aQ,L.e("#FF9B00"),!0)
b.j(0,$.aP,L.e("#FF8700"),!0)
b.j(0,$.aZ,L.e("#7F7F7F"),!0)
b.j(0,$.aY,L.e("#727272"),!0)
b.j(0,$.aS,L.e("#A3A3A3"),!0)
b.j(0,$.aT,L.e("#999999"),!0)
b.j(0,$.aR,L.e("#898989"),!0)
b.j(0,$.aX,L.e("#EFEFEF"),!0)
b.j(0,$.aW,L.e("#DBDBDB"),!0)
b.j(0,$.aV,L.e("#C6C6C6"),!0)
b.j(0,$.aU,L.e("#ADADAD"),!0)
b=new L.pS(2,0.7,0.7,h,g,f,e,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",d,["Lightning","Ice","Taserface"],["Taser"],c,0.01,0.01,0.01,0.5,16,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,b,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
b.af(16,"Taze",!1,!1,!0)
$.A5=b
b=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
b.j(0,$.aO,L.e("#990000"),!0)
b.j(0,$.aQ,L.e("#ff0200"),!0)
b.j(0,$.aP,L.e("#dd0000"),!0)
b.j(0,$.aZ,L.e("#25334f"),!0)
b.j(0,$.aY,L.e("#07090f"),!0)
b.j(0,$.aS,L.e("#c64f4f"),!0)
b.j(0,$.aT,L.e("#a33f3f"),!0)
b.j(0,$.aR,L.e("#843333"),!0)
b.j(0,$.aX,L.e("#b5c1d2"),!0)
b.j(0,$.aW,L.e("#939dac"),!0)
b.j(0,$.aV,L.e("#3c3e42"),!0)
b.j(0,$.aU,L.e("#202123"),!0)
c=P.k(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
d=P.k(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
e=P.k(H.a(["Empathetic","Arrowed","Emotioanal","Literal","Ravaging"],p),q)
f=P.k(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
g=P.k(H.a([new E.O($.ec,2,!0),new E.O($.cG,5,!0)],k),l)
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#FF9B00"),!0)
h.j(0,$.aQ,L.e("#FF9B00"),!0)
h.j(0,$.aP,L.e("#FF8700"),!0)
h.j(0,$.aZ,L.e("#7F7F7F"),!0)
h.j(0,$.aY,L.e("#727272"),!0)
h.j(0,$.aS,L.e("#A3A3A3"),!0)
h.j(0,$.aT,L.e("#999999"),!0)
h.j(0,$.aR,L.e("#898989"),!0)
h.j(0,$.aX,L.e("#EFEFEF"),!0)
h.j(0,$.aW,L.e("#DBDBDB"),!0)
h.j(0,$.aV,L.e("#C6C6C6"),!0)
h.j(0,$.aU,L.e("#ADADAD"),!0)
h=new V.oT(0.9,1.1,2,b,c,d,e,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",f,["Arrow","Yondu","Empathy"],["Arrow","Bow"],g,0.01,0.01,0.01,0.5,17,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,h,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.af(17,"Rule",!1,!1,!0)
$.A2=h
h=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
h.j(0,$.aO,L.e("#853dcc"),!0)
h.j(0,$.aQ,L.e("#f76261"),!0)
h.j(0,$.aP,L.e("#913a39"),!0)
h.j(0,$.aZ,L.e("#ab4443"),!0)
h.j(0,$.aY,L.e("#78302f"),!0)
h.j(0,$.aS,L.e("#a54cff"),!0)
h.j(0,$.aT,L.e("#8c41d9"),!0)
h.j(0,$.aR,L.e("#7335b3"),!0)
h.j(0,$.aX,L.e("#853dcc"),!0)
h.j(0,$.aW,L.e("#642e99"),!0)
h.j(0,$.aV,L.e("#4c2375"),!0)
h.j(0,$.aU,L.e("#2b1442"),!0)
g=P.k(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),q)
f=P.k(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
e=P.k(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),q)
d=P.k(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),q)
c=P.k(H.a([new E.O($.ec,15,!0),new E.O($.cG,-4,!0)],k),l)
m=new L.aG(P.C(null,null,null,q,m),P.C(null,null,null,i,m),P.C(null,null,null,q,i),P.C(null,null,null,i,q))
m.j(0,$.aO,L.e("#FF9B00"),!0)
m.j(0,$.aQ,L.e("#FF9B00"),!0)
m.j(0,$.aP,L.e("#FF8700"),!0)
m.j(0,$.aZ,L.e("#7F7F7F"),!0)
m.j(0,$.aY,L.e("#727272"),!0)
m.j(0,$.aS,L.e("#A3A3A3"),!0)
m.j(0,$.aT,L.e("#999999"),!0)
m.j(0,$.aR,L.e("#898989"),!0)
m.j(0,$.aX,L.e("#EFEFEF"),!0)
m.j(0,$.aW,L.e("#DBDBDB"),!0)
m.j(0,$.aV,L.e("#C6C6C6"),!0)
m.j(0,$.aU,L.e("#ADADAD"),!0)
j=new V.mH(3.1,2,0.7,h,g,f,e,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",d,["Hippo","Ranting"],["Vent"],c,0.01,0.01,0.01,0.5,18,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Hippo",null,!1,!1,!0,!1,!1,!0,1,m,P.k(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.k(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Blank","Null","Boring","Error"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),P.k(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.k(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
j.af(18,"Hippo",!1,!1,!0)
$.zU=j
$.A0=L.zO(255,"Null",!1,!0,!1)
j=P.k(H.a([new E.O($.cG,1,!0),new E.O($.hV,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
c=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
d=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
e=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
g=H.a(["Nobody"],p)
h=H.a(["Nobody"],p)
q=new F.nW(j,q,m,c,d,!1,e,f,g,h,1,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"loud","musical","Music")
q.E()
q.F()
B.cM(q)
$.B5=q
q=P.k(H.a([new E.O($.fx,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kX(q,m,j,i,h,!1,g,f,e,d,13,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"nerdy","smart","Academic")
q.E()
q.F()
B.cM(q)
$.AZ=q
q=P.k(H.a([new E.O($.hX,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l1(q,m,j,i,h,!1,g,f,e,d,4,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"dumb","athletic","Athletic")
q.E()
q.F()
B.cM(q)
$.B_=q
q=P.k(H.a([new E.O($.hW,-1,!0),new E.O($.hV,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.lo(q,m,j,i,h,!1,g,f,e,d,0,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"dorky","funny","Comedy")
q.E()
q.F()
B.cM(q)
$.B0=q
q=P.k(H.a([new E.O($.cG,-1,!0),new E.O($.eD,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.lC(q,m,j,i,h,!1,g,f,e,d,2,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"pretentious","cultured","Culture")
q.E()
q.F()
B.cM(q)
$.B1=q
q=P.k(H.a([new E.O($.cG,1,!0),new E.O($.eE,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lM(q,m,j,i,h,!1,g,f,e,d,8,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"boring","domestic","Domestic")
q.E()
q.F()
B.cM(q)
$.B2=q
q=P.k(H.a([new E.O($.hV,1,!0),new E.O($.dB,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.mh(q,m,j,i,h,!1,g,f,e,d,7,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"whimpy","imaginative","Fantasy")
q.E()
q.F()
B.cM(q)
$.B3=q
q=P.k(H.a([new E.O($.hX,1,!0),new E.O($.eD,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.nl(q,m,j,i,h,!1,g,f,e,d,6,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"harsh","fair-minded","Justice")
q.E()
q.F()
B.cM(q)
$.B4=q
q=P.k(H.a([new E.O($.ec,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.oz(q,m,j,i,h,!1,g,f,e,d,9,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"frivolous","geeky","PopCulture")
q.E()
q.F()
B.cM(q)
$.B7=q
q=P.k(H.a([new E.O($.eE,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.oR(q,m,j,i,h,!1,g,f,e,d,12,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"obsessive","romantic","Romantic")
q.E()
q.F()
B.cM(q)
$.B8=q
q=P.k(H.a([new E.O($.cG,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.pb(q,m,j,i,h,!1,g,f,e,d,11,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"shallow","extroverted","Social")
q.E()
q.F()
B.cM(q)
$.B9=q
q=P.k(H.a([new E.O($.eE,-1,!0),new E.O($.cG,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.pV(q,m,j,i,h,!1,g,f,e,d,5,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"terrible","honest","Terrible")
q.E()
q.F()
B.cM(q)
$.Bb=q
q=P.k(H.a([new E.O($.fx,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.qA(q,m,j,i,h,!1,g,f,e,d,3,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"wordy","lettered","Writing")
q.E()
q.F()
B.cM(q)
$.Bc=q
q=P.k(H.a([new E.O($.dB,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.k(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.pU(q,m,j,i,h,!1,g,f,e,d,10,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"awkward","techy","Technology")
q.E()
q.F()
B.cM(q)
$.Ba=q
q=H.a(["nobody"],p)
l=P.k(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hq(!0,q,l,k,p,-13,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"","","Null")
q.E()
q.F()
B.cM(q)
$.B6=q
A.xN()
t=3
return P.cs(Y.nX(),$async$tE)
case 3:case 1:return P.bs(r,s)}})
return P.bt($async$tE,s)}},B={
ls:function(){var t=0,s=P.bo(),r
var $async$ls=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=3
return P.cs(W.uz(C.c.al("../",N.oq())+"BigBadLists/contestEntrants.txt",null,null).b1(new B.lt()),$async$ls)
case 3:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$ls,s)},
it:function it(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lt:function lt(){},
mG:function mG(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
cM:function(a){if($.$get$mV().a_(0,a.f))throw H.j("Duplicate aspect id for "+a.C(0)+": "+a.f+" is already registered for "+J.cv($.$get$mV().n(0,a.f))+".")
$.$get$mV().i(0,a.f,a)},
hq:function hq(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
qF:function qF(a){this.a=a},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a,b){this.a=a
this.b=b},
Ib:function(a){return a.bk(0)},
dD:function dD(a){this.a=a},
kp:function kp(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
i5:function i5(a,b){this.a=a
this.b=b}},V={lM:function lM(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},mx:function mx(a){this.a=a},mH:function mH(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},nU:function nU(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x1=x1
_.x2=x2},ok:function ok(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oT:function oT(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},pV:function pV(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
AE:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.ds(new P.c2(""),0,0)
t.an(a,8)
s=Math.pow(256,e)
c.toString
r=H.cN(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.v(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.v(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.an(n-1,p)
t.an(a,8)}return t.bc(b)},
AD:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.e_(a,b)
for(q=e*8,p=0;p<c;){o=r.ac(q)+1
n=r.ac(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.v(s,l)
s[l]=n}p+=o}return s},
uf:function(a){return new V.lW(a)},
ue:function(a){return new V.lV(a)},
AA:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.ds(new P.c2(""),0,0)
t.an(a,8)
s=d.gd0()
r=C.f.ap(Math.log(H.kM(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cN(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.v(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.v(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.an(m-1,o)
t.an(a,r)}return t.bc(b)},
Az:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.e_(a,b)
for(r=e*8,o=0;o<c;){n=p.ac(r)+1
m=p.ac(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.v(s,k)
s[k]=m}o+=n}return s},
ud:function(a){return new V.lU(a)},
uc:function(a){return new V.lT(a)},
AC:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.ds(new P.c2(""),0,0)
t.an(a,8)
s=d.gd0()
r=C.f.ap(Math.log(H.kM(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cN(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.v(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.v(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.ap(Math.log(n)/0.6931471805599453)+1
t.an(k-1,5)
t.an(n-1,k)
t.an(a,r)}return t.bc(b)},
AB:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.e_(a,b)
for(o=0;o<c;){n=p.ac(p.ac(5)+1)+1
m=p.ac(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.v(s,r)
s[r]=m}o+=n}return s},
lW:function lW(a){this.a=a},
lV:function lV(a){this.a=a},
lU:function lU(a){this.a=a},
lT:function lT(a){this.a=a}},Z={lO:function lO(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.O=O
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
AO:function(){var t,s
if(!$.wU)$.wU=!0
else return
t=[P.x]
s=new Y.pW(H.a([],t))
$.uv=s
Z.cL(s,"txt",null)
Z.cL($.uv,"vert","x-shader/x-vertex")
Z.cL($.uv,"frag","x-shader/x-fragment")
$.AN=new Y.oJ(H.a([],t))
$.wW=new Y.lh(H.a([],t))
s=new B.qF(H.a([],t))
$.wY=s
Z.cL(s,"zip",null)
Z.cL($.wY,"bundle",null)
s=new U.qw(H.a([],t))
$.AW=s
Z.cL(s,"words",null)
s=new Q.ow(H.a([],t))
$.wX=s
Z.cL(s,"png",null)
Z.cL($.wX,"jpg","image/jpeg")
$.AU=new Q.ot(H.a([],t))
s=new M.ph(H.a([],t))
$.AV=s
Z.cL(s,"psprite",null)
s=new V.mx(H.a([],t))
$.uu=s
Z.cL(s,"ttf",null)
Z.cL($.uu,"otf",null)
Z.cL($.uu,"woff",null)
s=new Y.oa(null,H.a([],t))
$.AR=s
Z.cL(s,"obj",null)
s=new U.nF(H.a([],t))
$.AP=s
Z.cL(s,"mp3",null)
$.AQ=new U.pF(H.a([],t))
s=new U.of(H.a([],t))
$.AS=s
Z.cL(s,"ogg",null)
$.AT=new U.pG(H.a([],t))},
cL:function(a,b,c){$.$get$mz().i(0,b,new Z.iH(a,c,[null,null]))
a.a.push(b)},
wV:function(a){var t
if($.$get$mz().a_(0,a)){t=$.$get$mz().n(0,a)
if(t.a instanceof O.c8)return t
throw H.j("File format for extension ."+H.y(a)+" does not match expected types.")}throw H.j("No file format found for extension ."+H.y(a))},
iH:function iH(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
nk:function nk(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
nE:function nE(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},
v6:function v6(){},
v1:function v1(){},
v2:function v2(){}},X={iI:function iI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},ip:function ip(){},mJ:function mJ(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x1=x1
_.x2=x2},mO:function mO(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
this.c=c}},N={a8:function a8(){},nl:function nl(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oE:function oE(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oQ:function oQ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},pb:function pb(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pd:function pd(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x1=x1
_.x2=x2},q1:function q1(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.O=O
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
GA:function(a){var t,s,r,q,p,o,n,m,l
t=J.cv(a)
s=new W.kx(document.querySelectorAll("link"),[null])
for(r=new H.et(s,s.gm(s),0,null,[null]);r.I();){q=r.d
p=J.ai(q)
if(!!p.$ishA&&q.rel==="stylesheet"){o=$.$get$or()
H.y(p.gab(q))
o.toString
o=t.length
n=Math.min(o,J.c5(p.gab(q)))
for(m=0;m<n;++m){if(m>=o)return H.v(t,m)
if(t[m]!==J.d2(p.gab(q),m)){l=C.c.am(t,m)
$.$get$or().toString
return l.split("/").length-1}continue}}}$.$get$or().bj(C.m,"Didn't find a css link to derive relative path")
return 0},
oq:function(){var t=P.yj()
if(!$.$get$op().a_(0,t))$.$get$op().i(0,t,N.GA(t))
return $.$get$op().n(0,t)}},Q={mP:function mP(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mS:function mS(){},ow:function ow(a){this.a=a},ot:function ot(a){this.a=a},no:function no(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.O=O
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
_.x2=x2},oR:function oR(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},qq:function qq(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x1=x1
_.x2=x2},k2:function k2(){},
I:function(a,b,c){var t=new Q.dW(null,null,[c])
t.dv(a,b,c)
return t},
vZ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.I(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dY(a,"$isn",[e],"$asn"))if(H.dY(a,"$iscQ",[e],"$ascQ"))for(s=J.cJ(a.gc8()),r=0;s.I();){q=s.gS()
p=t.b
o=p.length
if(r>=o)return H.v(p,r)
p[r]=q;++r}else for(s=a.gY(a),p=[H.N(t,0)],r=0;s.I();){n=s.gS()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.v(o,r)
o[r]=new Q.f(n,m,p);++r}else for(s=a.gY(a),p=[e],o=[H.N(t,0)];s.I();){l=s.gS()
if(H.Iu(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.v(m,0)
m[0]=new Q.f(l,k,o)}else if(H.dY(l,"$isf",p,null)){m=t.b
k=m.length
if(0>=k)return H.v(m,0)
m[0]=l}else throw H.j("Invalid entry type "+H.y(J.wm(l))+" for WeightedList<"+H.y(H.bX(H.dG(e)))+">. Should be "+H.y(H.bX(H.dG(e)))+" or WeightPair<"+H.y(H.bX(H.dG(e)))+">.")}return t},
w_:function(a,b,c,d){return new Q.km(J.wo(a.gc8(),new Q.qu(c,d,b)),null,[c,d])},
cQ:function cQ(){},
dW:function dW(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
i4:function i4(){},
f:function f(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eM:function eM(){},
i3:function i3(){},
qt:function qt(a,$ti){this.a=a
this.$ti=$ti},
km:function km(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qu:function qu(a,b,c){this.a=a
this.b=b
this.c=c},
p0:function(){var t=0,s=P.bo(),r
var $async$p0=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=3
return P.cs(A.hD("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$p0)
case 3:r=A.hD("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$p0,s)}},G={nr:function nr(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x1=x1
_.x2=x2},oz:function oz(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Ag:function(a){var t,s,r,q,p,o,n,m,l
t=G.a_
s=P.jN(a,t)
r=P.a3(null,null,null,t)
q=H.a([],[G.d])
for(t=G.Gd(),p=J.cJ(t.a),t=new H.kn(p,t.b,[H.N(t,0)]);t.I();){o=p.gS()
if(o.eR(s))q.push(o)}C.b.fd(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.c4)(q),++n){o=q[n]
if(o.eR(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.c4)(p),++l)s.as(0,p[l])}}if(s.a!==0)r.aD(0,s)
return r},
Gd:function(){var t=$.$get$c()
t.toString
return new H.eK(t,new G.n6(),[H.N(t,0)])},
a_:function a_(){},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
ah:function ah(a,b,c){this.a=a
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
n6:function n6(){}},F={nW:function nW(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},qA:function qA(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Gj:function(a){if(a===C.h){window
return C.i.gav(C.i)}if(a===C.m){window
return C.i.giI()}if(a===C.a9){window
return C.i.gi4()}return P.Iy()},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
vb:function vb(){},
Ay:function(a,b,c,d){var t,s,r,q
t=new B.ds(new P.c2(""),0,0)
t.an(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;++q)t.c0(s[q])
return t.bc(b)},
Ax:function(a,b,c,d){var t,s,r,q,p
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.e_(a,b)
for(q=0;q<c;++q){p=r.ca()
if(q>=t)return H.v(s,q)
s[q]=p}return s},
Aw:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.ds(new P.c2(""),0,0)
t.an(a,8)
s=d.gd0()
r=C.f.ap(Math.log(H.kM(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cN(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.v(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.v(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.c0(o-1)
t.an(a,r)}return t.bc(b)},
Av:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ap(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.e_(a,b)
for(o=0;o<c;){n=p.ca()+1
m=p.ac(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.v(s,r)
s[r]=m}o+=n}return s},
Au:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.ds(new P.c2(""),0,0)
t.an(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.v(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.v(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.c0(p-1)
t.c0(a)}return t.bc(b)},
At:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cz(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.e_(a,b)
for(q=0;q<c;){p=r.ca()+1
o=r.ca()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.v(s,m)
s[m]=o}q+=p}return s}},R={
GU:function(a){var t,s
if(a.gm(a).aF(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.giS(s).gj2().eA("checking for two players, ps is "+H.y(a)+", ret is "+t)
return t},
GI:function(a){a.gaj(a).gc1()
return!1},
GT:function(a){a.gaj(a).gc1()
return!1},
GS:function(a){a.gaj(a).gc1()
return!1},
GR:function(a){return a.gaj(a).gbA().gj1()},
GP:function(a){return a.gaj(a).gbA().gj_()},
GO:function(a){return a.gaj(a).gbA().giZ()},
GL:function(a){return a.gaj(a).gbA().giX()},
GN:function(a){return a.gaj(a).gbA().giY()},
GQ:function(a){return a.gaj(a).gbA().gj0()},
GM:function(a){var t=a.gaj(a)
t.gc1()
t.gc1()
return!1},
GJ:function(a){return!0},
GK:function(a){a.gaj(a).giU()
return!1},
oG:function oG(){},
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
a7:function a7(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
pO:function pO(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
hk:function hk(){},
vs:function vs(){},
vr:function vr(){}},D={pU:function pU(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Ht:function(){if($.y4)return
$.y4=!0
var t=new D.cF("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=0
$.pj=t
t=new D.cF("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.Hs=t
t=new D.kq(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=2.5
t.Q=1
$.hX=t
t=new D.kq(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=2.5
$.eD=t
t=new D.cF("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.Hr=t
t=new D.cF("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.ec=t
t=new D.oN("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.eE=t
t=new D.cF("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.cG=t
t=new D.cF("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.fx=t
t=new D.cF("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.hV=t
t=new D.cF("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.hW=t
t=new D.cF("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.dB=t
t=new D.cF("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.cb=t},
vN:function(){var t=$.$get$cO()
return new H.eK(t,new D.pk(),[H.N(t,0)])},
pk:function pk(){},
cF:function cF(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
kq:function kq(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
oN:function oN(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
var v=[C,H,J,P,W,T,S,K,L,M,U,E,O,Y,A,B,V,Z,X,N,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.v8.prototype={}
J.i.prototype={
T:function(a,b){return a===b},
ga5:function(a){return H.ex(a)},
C:function(a){return H.oC(a)},
gad:function(a){return new H.dV(H.kP(a),null)},
$ishk:1,
$isz:1,
$isfp:1,
$isz:1,
$isnc:1,
$isz:1,
$isi:1,
$isnc:1,
$isz:1,
$isi:1,
$ishH:1,
$isz:1}
J.na.prototype={
C:function(a){return String(a)},
ga5:function(a){return a?519018:218159},
gad:function(a){return C.ap},
$iscR:1}
J.nb.prototype={
T:function(a,b){return null==b},
C:function(a){return"null"},
ga5:function(a){return 0},
gad:function(a){return C.aj},
$isd8:1}
J.hx.prototype={
ga5:function(a){return 0},
gad:function(a){return C.ai},
C:function(a){return String(a)},
$isnc:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
en:function(a,b){return a.draw(b)},
h:function(a,b){return a.add(b)},
as:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbt:function(a){return a.left},
gcc:function(a){return a.right},
gbu:function(a){return a.top},
gc2:function(a){return a.bottom},
geh:function(a){return a.attributes},
sao:function(a,b){return a.type=b},
gb2:function(a){return a.width},
gaW:function(a){return a.height},
gaL:function(a){return a.value},
im:function(a,b){return a.parse(b)},
fb:function(a,b){return a.setLogging(b)},
fc:function(a,b){return a.setMaterials(b)}}
J.ov.prototype={}
J.eI.prototype={}
J.es.prototype={
C:function(a){var t=a[$.$get$wD()]
return t==null?this.fi(a):J.cv(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.eq.prototype={
c5:function(a,b){if(!!a.immutable$list)throw H.j(new P.T(b))},
cR:function(a,b){if(!!a.fixed$length)throw H.j(new P.T(b))},
h:function(a,b){this.cR(a,"add")
a.push(b)},
a2:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.j(new P.bH(a))}},
aE:function(a,b){return new H.ev(a,b,[H.N(a,0),null])},
bs:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.y(a[r])
if(r>=t)return H.v(s,r)
s[r]=q}return s.join(b)},
aB:function(a,b){return H.pM(a,b,null,H.N(a,0))},
hU:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.j(new P.bH(a))}return s},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
cm:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.bl(b))
if(b<0||b>a.length)throw H.j(P.bx(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.j(H.bl(c))
if(c<b||c>a.length)throw H.j(P.bx(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.N(a,0)])
return H.a(a.slice(b,c),[H.N(a,0)])},
gaj:function(a){if(a.length>0)return a[0]
throw H.j(H.hv())},
gbi:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.j(H.hv())},
a9:function(a,b,c,d,e){var t,s,r
this.c5(a,"setRange")
P.dm(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.b2(P.bx(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.j(H.xH())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.v(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.v(d,r)
a[b+s]=d[r]}},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)},
bF:function(a,b,c,d){var t
this.c5(a,"fill range")
P.dm(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aK:function(a,b,c,d){var t,s,r,q,p,o
this.cR(a,"replaceRange")
P.dm(b,c,a.length,null,null,null)
d=C.c.at(d)
if(typeof c!=="number")return c.ae()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.az(a,b,r,d)
if(p!==0){this.a9(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a9(a,r,o,a,c)
this.az(a,b,r,d)}},
eg:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.j(new P.bH(a))}return!1},
hS:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.j(new P.bH(a))}return!0},
dn:function(a,b){var t
this.c5(a,"sort")
t=b==null?P.Ix():b
H.ka(a,0,a.length-1,t)},
fd:function(a){return this.dn(a,null)},
ba:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.be(a[t],b))return t
return-1},
br:function(a,b){return this.ba(a,b,0)},
Z:function(a,b){var t
for(t=0;t<a.length;++t)if(J.be(a[t],b))return!0
return!1},
gX:function(a){return a.length===0},
C:function(a){return P.jH(a,"[","]")},
a8:function(a,b){var t=H.a(a.slice(0),[H.N(a,0)])
return t},
at:function(a){return this.a8(a,!0)},
gY:function(a){return new J.eV(a,a.length,0,null,[H.N(a,0)])},
ga5:function(a){return H.ex(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cR(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dI(b,"newLength",null))
if(b<0)throw H.j(P.bx(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c3(a,b))
if(b>=a.length||b<0)throw H.j(H.c3(a,b))
return a[b]},
i:function(a,b,c){this.c5(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c3(a,b))
if(b>=a.length||b<0)throw H.j(H.c3(a,b))
a[b]=c},
$isaz:1,
$asaz:function(){},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
J.v7.prototype={}
J.eV.prototype={
gS:function(){return this.d},
I:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.j(H.c4(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fl.prototype={
aH:function(a,b){var t
if(typeof b!=="number")throw H.j(H.bl(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcY(b)
if(this.gcY(a)===t)return 0
if(this.gcY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcY:function(a){return a===0?1/a<0:a<0},
eQ:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.j(new P.T(""+a+".toInt()"))},
ap:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.j(new P.T(""+a+".floor()"))},
b0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(new P.T(""+a+".round()"))},
ag:function(a,b,c){if(C.a.aH(b,c)>0)throw H.j(H.bl(b))
if(this.aH(a,b)<0)return b
if(this.aH(a,c)>0)return c
return a},
l:function(a){return a},
bN:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.j(P.bx(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.a0(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.b2(new P.T("Unexpected toString result: "+t))
r=J.bb(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.al("0",q)},
C:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga5:function(a){return a&0x1FFFFFFF},
dj:function(a){return-a},
R:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a+b},
ae:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a-b},
al:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a*b},
bR:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
dt:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e9(a,b)},
ar:function(a,b){return(a|0)===a?a/b|0:this.e9(a,b)},
e9:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.j(new P.T("Result of truncating division is "+H.y(t)+": "+H.y(a)+" ~/ "+H.y(b)))},
aA:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
if(b<0)throw H.j(H.bl(b))
return b>31?0:a<<b>>>0},
au:function(a,b){return b>31?0:a<<b>>>0},
b5:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
hj:function(a,b){if(b<0)throw H.j(H.bl(b))
return b>31?0:a>>>b},
e8:function(a,b){return b>31?0:a>>>b},
a4:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a<b},
aF:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a>b},
ay:function(a,b){if(typeof b!=="number")throw H.j(H.bl(b))
return a>=b},
gad:function(a){return C.as},
$isdq:1}
J.jK.prototype={
gad:function(a){return C.ar},
$isV:1,
$isdq:1,
$isE:1}
J.jJ.prototype={
gad:function(a){return C.aq},
$isV:1,
$isdq:1}
J.er.prototype={
a0:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c3(a,b))
if(b<0)throw H.j(H.c3(a,b))
if(b>=a.length)H.b2(H.c3(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.j(H.c3(a,b))
return a.charCodeAt(b)},
cO:function(a,b,c){if(c>b.length)throw H.j(P.bx(c,0,b.length,null,null))
return new H.rY(b,a,c)},
b6:function(a,b){return this.cO(a,b,0)},
eF:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.j(P.bx(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.a0(b,c+s)!==this.aa(a,s))return
return new H.kf(c,b,a)},
R:function(a,b){if(typeof b!=="string")throw H.j(P.dI(b,null,null))
return a+b},
hR:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.am(a,s-t)},
d9:function(a,b,c){return H.zb(a,b,c)},
iz:function(a,b,c){return H.J2(a,b,c,null)},
fe:function(a,b){if(b==null)H.b2(H.bl(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hw&&b.gdX().exec("").length-2===0)return a.split(b.gh5())
else return this.fO(a,b)},
aK:function(a,b,c,d){var t,s
H.w7(b)
c=P.dm(b,c,a.length,null,null,null)
H.w7(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fO:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.x])
for(s=J.zf(b,a),s=s.gY(s),r=0,q=1;s.I();){p=s.gS()
o=p.gdq(p)
n=p.gep(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.K(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.am(a,r))
return t},
aM:function(a,b,c){var t
H.w7(c)
if(typeof c!=="number")return c.a4()
if(c<0||c>a.length)throw H.j(P.bx(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.zz(b,a,c)!=null},
ai:function(a,b){return this.aM(a,b,0)},
K:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.b2(H.bl(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.b2(H.bl(c))
if(typeof b!=="number")return b.a4()
if(b<0)throw H.j(P.k6(b,null,null))
if(typeof c!=="number")return H.a6(c)
if(b>c)throw H.j(P.k6(b,null,null))
if(c>a.length)throw H.j(P.k6(c,null,null))
return a.substring(b,c)},
am:function(a,b){return this.K(a,b,null)},
iG:function(a){return a.toLowerCase()},
iH:function(a){return a.toUpperCase()},
bv:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.aa(t,0)===133){r=J.Gf(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.a0(t,q)===133?J.v4(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eS:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.a0(t,r)===133)s=J.v4(t,r)}else{s=J.v4(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
al:function(a,b){var t,s
if(typeof b!=="number")return H.a6(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.P)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
ba:function(a,b,c){var t
if(c<0||c>a.length)throw H.j(P.bx(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
br:function(a,b){return this.ba(a,b,0)},
ib:function(a,b,c){var t
if(b==null)H.b2(H.bl(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.b2(P.bx(t,0,c,null,null))
if(b.cz(a,t)!=null)return t}return-1},
eC:function(a,b){return this.ib(a,b,null)},
el:function(a,b,c){if(c>a.length)throw H.j(P.bx(c,0,a.length,null,null))
return H.J1(a,b,c)},
Z:function(a,b){return this.el(a,b,0)},
gX:function(a){return a.length===0},
aH:function(a,b){var t
if(typeof b!=="string")throw H.j(H.bl(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
C:function(a){return a},
ga5:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gad:function(a){return C.ak},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.c3(a,b))
if(b>=a.length||b<0)throw H.j(H.c3(a,b))
return a[b]},
$isaz:1,
$asaz:function(){},
$isx:1}
H.ln.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.a0(this.a,b)},
$asi1:function(){return[P.E]},
$ashC:function(){return[P.E]},
$asfq:function(){return[P.E]},
$asp:function(){return[P.E]},
$asr:function(){return[P.E]},
$asn:function(){return[P.E]}}
H.r.prototype={$asr:null}
H.dP.prototype={
gY:function(a){return new H.et(this,this.gm(this),0,null,[H.ar(this,"dP",0)])},
a2:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.W(0,s))
if(t!==this.gm(this))throw H.j(new P.bH(this))}},
gX:function(a){return this.gm(this)===0},
gaj:function(a){if(this.gm(this)===0)throw H.j(H.hv())
return this.W(0,0)},
Z:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.be(this.W(0,s),b))return!0
if(t!==this.gm(this))throw H.j(new P.bH(this))}return!1},
cg:function(a,b){return this.fh(0,b)},
aE:function(a,b){return new H.ev(this,b,[H.ar(this,"dP",0),null])},
aB:function(a,b){return H.pM(this,b,null,H.ar(this,"dP",0))},
a8:function(a,b){var t,s,r
t=H.a([],[H.ar(this,"dP",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.W(0,s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
at:function(a){return this.a8(a,!0)}}
H.pL.prototype={
gfP:function(){var t=J.c5(this.a)
return t},
ghk:function(){var t,s
t=J.c5(this.a)
s=this.b
if(J.cu(s,t))return t
return s},
gm:function(a){var t,s
t=J.c5(this.a)
s=this.b
if(J.we(s,t))return 0
if(typeof s!=="number")return H.a6(s)
return t-s},
W:function(a,b){var t=J.dZ(this.ghk(),b)
if(J.dH(b,0)||J.we(t,this.gfP()))throw H.j(P.bz(b,this,"index",null,null))
return J.wh(this.a,t)},
aB:function(a,b){var t
if(J.dH(b,0))H.b2(P.bx(b,0,null,"count",null))
t=J.dZ(this.b,b)
return H.pM(this.a,t,this.c,H.N(this,0))},
a8:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bb(s)
q=r.gm(s)
if(typeof t!=="number")return H.a6(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.W(s,t+m)
if(m>=n.length)return H.v(n,m)
n[m]=o
if(r.gm(s)<q)throw H.j(new P.bH(this))}return n},
at:function(a){return this.a8(a,!0)},
fs:function(a,b,c,d){var t=this.b
if(J.dH(t,0))H.b2(P.bx(t,0,null,"start",null))}}
H.et.prototype={
gS:function(){return this.d},
I:function(){var t,s,r,q
t=this.a
s=J.bb(t)
r=s.gm(t)
if(this.b!==r)throw H.j(new P.bH(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.W(t,q);++this.c
return!0}}
H.hG.prototype={
gY:function(a){return new H.jO(null,J.cJ(this.a),this.b,this.$ti)},
gm:function(a){return J.c5(this.a)},
gX:function(a){return J.kU(this.a)},
$asn:function(a,b){return[b]}}
H.h2.prototype={$isr:1,
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jO.prototype={
I:function(){var t=this.b
if(t.I()){this.a=this.c.$1(t.gS())
return!0}this.a=null
return!1},
gS:function(){return this.a},
$asjI:function(a,b){return[b]}}
H.ev.prototype={
gm:function(a){return J.c5(this.a)},
W:function(a,b){return this.b.$1(J.wh(this.a,b))},
$asdP:function(a,b){return[b]},
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.eK.prototype={
gY:function(a){return new H.kn(J.cJ(this.a),this.b,this.$ti)},
aE:function(a,b){return new H.hG(this,b,[H.N(this,0),null])}}
H.kn.prototype={
I:function(){var t,s
for(t=this.a,s=this.b;t.I();)if(s.$1(t.gS())===!0)return!0
return!1},
gS:function(){return this.a.gS()}}
H.hT.prototype={
aB:function(a,b){return new H.hT(this.a,this.b+H.tl(b),this.$ti)},
gY:function(a){return new H.p8(J.cJ(this.a),this.b,this.$ti)}}
H.iF.prototype={
gm:function(a){var t=J.c5(this.a)-this.b
if(t>=0)return t
return 0},
aB:function(a,b){return new H.iF(this.a,this.b+H.tl(b),this.$ti)},
$isr:1,
$asr:null,
$asn:null}
H.p8.prototype={
I:function(){var t,s
for(t=this.a,s=0;s<this.b;++s)t.I()
this.b=0
return t.I()},
gS:function(){return this.a.gS()}}
H.iR.prototype={
sm:function(a,b){throw H.j(new P.T("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.j(new P.T("Cannot add to a fixed-length list"))},
aK:function(a,b,c,d){throw H.j(new P.T("Cannot remove from a fixed-length list"))}}
H.qc.prototype={
i:function(a,b,c){throw H.j(new P.T("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.j(new P.T("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.j(new P.T("Cannot add to an unmodifiable list"))},
a9:function(a,b,c,d,e){throw H.j(new P.T("Cannot modify an unmodifiable list"))},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aK:function(a,b,c,d){throw H.j(new P.T("Cannot remove from an unmodifiable list"))},
bF:function(a,b,c,d){throw H.j(new P.T("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
H.i1.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
H.tW.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.tX.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.rB.prototype={}
H.fF.prototype={
ef:function(a,b){if(!this.f.T(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cM()},
iy:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.as(0,a)
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
if(q===s.c)s.dQ();++s.d}this.y=!1}this.cM()},
hp:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ai(a),s=0;r=this.ch,s<r.length;s+=2)if(t.T(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.v(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
ix:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ai(a),s=0;r=this.ch,s<r.length;s+=2)if(t.T(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.b2(new P.T("removeRange"))
P.dm(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
f9:function(a,b){if(!this.r.T(0,a))return
this.db=b},
i_:function(a,b,c){var t=J.ai(b)
if(!t.T(b,0))t=t.T(b,1)&&!this.cy
else t=!0
if(t){J.fN(a,c)
return}t=this.cx
if(t==null){t=P.vd(null,null)
this.cx=t}t.aT(0,new H.rr(a,c))},
hZ:function(a,b){var t
if(!this.r.T(0,a))return
t=J.ai(b)
if(!t.T(b,0))t=t.T(b,1)&&!this.cy
else t=!0
if(t){this.c6()
return}t=this.cx
if(t==null){t=P.vd(null,null)
this.cx=t}t.aT(0,this.gia())},
i0:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.eT(a)
if(b!=null)P.eT(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cv(a)
s[1]=b==null?null:J.cv(b)
for(r=new P.dE(t,t.r,null,null,[null]),r.c=t.e;r.I();)J.fN(r.d,s)},
bE:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.bE(o)
p=H.ct(o)
this.i0(q,p)
if(this.db===!0){this.c6()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gi8()
if(this.cx!=null)for(;n=this.cx,!n.gX(n);)this.cx.eL().$0()}return s},
cZ:function(a){return this.b.n(0,a)},
dB:function(a,b){var t=this.b
if(t.a_(0,a))throw H.j(P.lY("Registry: ports must be registered only once."))
t.i(0,a,b)},
cM:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.c6()},
c6:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bp(0)
for(t=this.b,s=t.gce(t),s=s.gY(s);s.I();)s.gS().fH()
t.bp(0)
this.c.bp(0)
u.globalState.z.as(0,this.a)
this.dx.bp(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.v(t,p)
J.fN(q,t[p])}this.ch=null}},
gi8:function(){return this.d},
ghA:function(){return this.e}}
H.rr.prototype={
$0:function(){J.fN(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.r3.prototype={
hJ:function(){var t=this.a
if(t.b===t.c)return
return t.eL()},
eP:function(){var t,s,r
t=this.hJ()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.a_(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gX(s)}else s=!1
else s=!1
else s=!1
if(s)H.b2(P.lY("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gX(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hB(["command","close"])
r=new H.dF(!0,new P.kC(0,null,null,null,null,null,0,[null,P.E])).aG(r)
s.toString
self.postMessage(r)}return!1}t.it()
return!0},
e3:function(){if(self.window!=null)new H.r4(this).$0()
else for(;this.eP(););},
bM:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.e3()
else try{this.e3()}catch(r){t=H.bE(r)
s=H.ct(r)
q=u.globalState.Q
p=P.hB(["command","error","msg",H.y(t)+"\n"+H.y(s)])
p=new H.dF(!0,P.ib(null,P.E)).aG(p)
q.toString
self.postMessage(p)}}}
H.r4.prototype={
$0:function(){if(!this.a.eP())return
P.y6(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.eQ.prototype={
it:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bE(this.b)}}
H.rA.prototype={}
H.mW.prototype={
$0:function(){H.Bg(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mX.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fL(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fL(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cM()},
$S:function(){return{func:1,v:true}}}
H.qO.prototype={}
H.fG.prototype={
bf:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdV())return
r=H.I6(b)
if(t.ghA()===s){s=J.bb(r)
switch(s.n(r,0)){case"pause":t.ef(s.n(r,1),s.n(r,2))
break
case"resume":t.iy(s.n(r,1))
break
case"add-ondone":t.hp(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.ix(s.n(r,1))
break
case"set-errors-fatal":t.f9(s.n(r,1),s.n(r,2))
break
case"ping":t.i_(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hZ(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.as(0,s)
break}return}u.globalState.f.a.aT(0,new H.eQ(t,new H.rD(this,r),"receive"))},
T:function(a,b){if(b==null)return!1
return b instanceof H.fG&&J.be(this.b,b.b)},
ga5:function(a){return this.b.gcC()}}
H.rD.prototype={
$0:function(){var t=this.a.b
if(!t.gdV())t.fD(0,this.b)},
$S:function(){return{func:1}}}
H.ig.prototype={
bf:function(a,b){var t,s,r
t=P.hB(["command","message","port",this,"msg",b])
s=new H.dF(!0,P.ib(null,P.E)).aG(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
T:function(a,b){if(b==null)return!1
return b instanceof H.ig&&J.be(this.b,b.b)&&J.be(this.a,b.a)&&J.be(this.c,b.c)},
ga5:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aA()
s=this.a
if(typeof s!=="number")return s.aA()
r=this.c
if(typeof r!=="number")return H.a6(r)
return(t<<16^s<<8^r)>>>0}}
H.fu.prototype={
fH:function(){this.c=!0
this.b=null},
fD:function(a,b){if(this.c)return
this.b.$1(b)},
$isGV:1,
gcC:function(){return this.a},
gdV:function(){return this.c}}
H.q3.prototype={
ft:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aT(0,new H.eQ(s,new H.q4(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dn(new H.q5(this,b),0),a)}else throw H.j(new P.T("Timer greater than 0."))}}
H.q4.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.q5.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dJ.prototype={
ga5:function(a){var t=this.a
if(typeof t!=="number")return t.dm()
t=C.d.b5(t,0)^C.d.ar(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
T:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dJ){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcC:function(){return this.a}}
H.dF.prototype={
aG:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.ai(a)
if(!!t.$isfm)return["buffer",a]
if(!!t.$isew)return["typed",a]
if(!!t.$isaz)return this.f5(a)
if(!!t.$isBd){r=this.gf2()
q=t.gak(a)
q=H.dy(q,r,H.ar(q,"n",0),null)
q=P.dl(q,!0,H.ar(q,"n",0))
t=t.gce(a)
t=H.dy(t,r,H.ar(t,"n",0),null)
return["map",q,P.dl(t,!0,H.ar(t,"n",0))]}if(!!t.$isnc)return this.f6(a)
if(!!t.$isi)this.eT(a)
if(!!t.$isGV)this.bP(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfG)return this.f7(a)
if(!!t.$isig)return this.f8(a)
if(!!t.$isf1){p=a.$static_name
if(p==null)this.bP(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdJ)return["capability",a.a]
if(!(a instanceof P.z))this.eT(a)
return["dart",u.classIdExtractor(a),this.f4(u.classFieldsExtractor(a))]},
bP:function(a,b){throw H.j(new P.T((b==null?"Can't transmit:":b)+" "+H.y(a)))},
eT:function(a){return this.bP(a,null)},
f5:function(a){var t=this.f3(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bP(a,"Can't serialize indexable: ")},
f3:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.aG(a[s])
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
f4:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aG(a[t]))
return a},
f6:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bP(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.aG(a[t[r]])
if(r>=s.length)return H.v(s,r)
s[r]=q}return["js-object",t,s]},
f8:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
f7:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcC()]
return["raw sendport",a]}}
H.eN.prototype={
b8:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.j(P.dg("Bad serialized message: "+H.y(a)))
switch(C.b.gaj(a)){case"ref":if(1>=a.length)return H.v(a,1)
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
s=H.a(this.bC(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bC(r),[null])
case"mutable":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return this.bC(r)
case"const":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bC(r),[null])
s.fixed$length=Array
return s
case"map":return this.hN(a)
case"sendport":return this.hO(a)
case"raw sendport":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.hM(a)
case"function":if(1>=a.length)return H.v(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.v(a,1)
return new H.dJ(a[1])
case"dart":s=a.length
if(1>=s)return H.v(a,1)
q=a[1]
if(2>=s)return H.v(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bC(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.j("couldn't deserialize: "+H.y(a))}},
bC:function(a){var t,s,r
t=J.bb(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
if(!(s<r))break
t.i(a,s,this.b8(t.n(a,s)));++s}return a},
hN:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
q=P.jM()
this.b.push(q)
s=J.zI(J.wo(s,this.ghL()))
for(t=J.bb(s),p=J.bb(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.b8(p.n(r,o)))
return q},
hO:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
if(3>=t)return H.v(a,3)
q=a[3]
if(J.be(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cZ(q)
if(o==null)return
n=new H.fG(o,r)}else n=new H.ig(s,q,r)
this.b.push(n)
return n},
hM:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bb(s)
p=J.bb(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a6(n)
if(!(o<n))break
q[t.n(s,o)]=this.b8(p.n(r,o));++o}return q}}
H.lq.prototype={
gX:function(a){return this.gm(this)===0},
C:function(a){return P.nL(this)},
i:function(a,b,c){return H.Ai()},
$isb0:1,
$asb0:null}
H.lr.prototype={
gm:function(a){return this.a},
a_:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.a_(0,b))return
return this.dP(b)},
dP:function(a){return this.b[a]},
a2:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dP(q))}},
gak:function(a){return new H.qS(this,[H.N(this,0)])}}
H.qS.prototype={
gY:function(a){var t=this.a.c
return new J.eV(t,t.length,0,null,[H.N(t,0)])},
gm:function(a){return this.a.c.length}}
H.oM.prototype={}
H.q9.prototype={
aP:function(a){var t,s,r
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
H.jX.prototype={
C:function(a){var t=this.b
if(t==null)return"NullError: "+H.y(this.a)
return"NullError: method not found: '"+H.y(t)+"' on null"}}
H.nf.prototype={
C:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.y(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.y(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.y(this.a)+")"}}
H.qb.prototype={
C:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hb.prototype={
gaR:function(){return this.b}}
H.tY.prototype={
$1:function(a){if(!!J.ai(a).$isei)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kF.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.tK.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.tL.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.tM.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.tN.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.tO.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.f1.prototype={
C:function(a){return"Closure '"+H.oD(this).trim()+"'"},
giQ:function(){return this},
$D:null}
H.pT.prototype={}
H.pi.prototype={
C:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fU.prototype={
T:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fU))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga5:function(a){var t,s
t=this.c
if(t==null)s=H.ex(this.a)
else s=typeof t!=="object"?J.cT(t):H.ex(t)
t=H.ex(this.b)
if(typeof s!=="number")return s.iT()
return(s^t)>>>0},
C:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.y(this.d)+"' of "+H.oC(t)}}
H.ll.prototype={
C:function(a){return this.a}}
H.oU.prototype={
C:function(a){return"RuntimeError: "+H.y(this.a)}}
H.dV.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga5:function(a){return J.cT(this.a)},
T:function(a,b){if(b==null)return!1
return b instanceof H.dV&&J.be(this.a,b.a)}}
H.u.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gak:function(a){return new H.nu(this,[H.N(this,0)])},
gce:function(a){return H.dy(this.gak(this),new H.ne(this),H.N(this,0),H.N(this,1))},
a_:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dJ(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dJ(s,b)}else return this.i5(b)},
i5:function(a){var t=this.d
if(t==null)return!1
return this.bI(this.bT(t,this.bH(a)),a)>=0},
aD:function(a,b){b.a2(0,new H.nd(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.by(t,b)
return s==null?null:s.gb9()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.by(r,b)
return s==null?null:s.gb9()}else return this.i6(b)},
i6:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bT(t,this.bH(a))
r=this.bI(s,a)
if(r<0)return
return s[r].gb9()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.cE()
this.b=t}this.dA(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cE()
this.c=s}this.dA(s,b,c)}else{r=this.d
if(r==null){r=this.cE()
this.d=r}q=this.bH(b)
p=this.bT(r,q)
if(p==null)this.cK(r,q,[this.cF(b,c)])
else{o=this.bI(p,b)
if(o>=0)p[o].sb9(c)
else p.push(this.cF(b,c))}}},
as:function(a,b){if(typeof b==="string")return this.e2(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.e2(this.c,b)
else return this.i7(b)},
i7:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bT(t,this.bH(a))
r=this.bI(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.eb(q)
return q.gb9()},
bp:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a2:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.j(new P.bH(this))
t=t.c}},
dA:function(a,b,c){var t=this.by(a,b)
if(t==null)this.cK(a,b,this.cF(b,c))
else t.sb9(c)},
e2:function(a,b){var t
if(a==null)return
t=this.by(a,b)
if(t==null)return
this.eb(t)
this.dN(a,b)
return t.gb9()},
cF:function(a,b){var t,s
t=new H.nt(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
eb:function(a){var t,s
t=a.gha()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bH:function(a){return J.cT(a)&0x3ffffff},
bI:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.be(a[s].gez(),b))return s
return-1},
C:function(a){return P.nL(this)},
by:function(a,b){return a[b]},
bT:function(a,b){return a[b]},
cK:function(a,b,c){a[b]=c},
dN:function(a,b){delete a[b]},
dJ:function(a,b){return this.by(a,b)!=null},
cE:function(){var t=Object.create(null)
this.cK(t,"<non-identifier-key>",t)
this.dN(t,"<non-identifier-key>")
return t},
$isBd:1,
$isb0:1,
$asb0:null}
H.ne.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.nd.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eS(function(a,b){return{func:1,args:[a,b]}},this.a,"u")}}
H.nt.prototype={
gez:function(){return this.a},
gb9:function(){return this.b},
gha:function(){return this.d},
sb9:function(a){return this.b=a}}
H.nu.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gY:function(a){var t,s
t=this.a
s=new H.nv(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
Z:function(a,b){return this.a.a_(0,b)},
a2:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.j(new P.bH(t))
s=s.c}}}
H.nv.prototype={
gS:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.j(new P.bH(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.tG.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.tH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.x]}}}
H.tI.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.x]}}}
H.hw.prototype={
C:function(a){return"RegExp/"+this.a+"/"},
gdY:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.v5(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdX:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.v5(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cO:function(a,b,c){if(c>b.length)throw H.j(P.bx(c,0,b.length,null,null))
return new H.qI(this,b,c)},
b6:function(a,b){return this.cO(a,b,0)},
fQ:function(a,b){var t,s
t=this.gdY()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.kD(this,s)},
cz:function(a,b){var t,s
t=this.gdX()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.v(s,-1)
if(s.pop()!=null)return
return new H.kD(this,s)},
eF:function(a,b,c){if(c<0||c>b.length)throw H.j(P.bx(c,0,b.length,null,null))
return this.cz(b,c)},
$isGY:1,
gh5:function(){return this.b}}
H.kD.prototype={
gdq:function(a){return this.b.index},
gep:function(a){var t=this.b
return t.index+t[0].length},
bk:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.v(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
$isdz:1}
H.qI.prototype={
gY:function(a){return new H.ks(this.a,this.b,this.c,null)},
$ashu:function(){return[P.dz]},
$asn:function(){return[P.dz]}}
H.ks.prototype={
gS:function(){return this.d},
I:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.fQ(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.kf.prototype={
gep:function(a){return this.a+this.c.length},
n:function(a,b){return this.bk(b)},
bk:function(a){if(!J.be(a,0))throw H.j(P.k6(a,null,null))
return this.c},
$isdz:1,
gdq:function(a){return this.a}}
H.rY.prototype={
gY:function(a){return new H.rZ(this.a,this.b,this.c,null)},
$asn:function(){return[P.dz]}}
H.rZ.prototype={
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
this.d=new H.kf(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gS:function(){return this.d}}
H.fm.prototype={
gad:function(a){return C.ab},
hv:function(a,b,c){return H.cN(a,b,c)},
hu:function(a){return this.hv(a,0,null)},
ht:function(a,b,c){var t
H.yI(a,b,c)
t=new DataView(a,b)
return t},
hs:function(a,b){return this.ht(a,b,null)},
$isfm:1,
$isbi:1,
$isz:1,
geD:function(a){return a.byteLength}}
H.ew.prototype={
h2:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dI(b,d,"Invalid list position"))
else throw H.j(P.bx(b,0,c,d,null))},
dE:function(a,b,c,d){if(b>>>0!==b||b>c)this.h2(a,b,c,d)},
$isew:1,
$isz:1,
gc3:function(a){return a.buffer},
geD:function(a){return a.byteLength}}
H.nY.prototype={
gad:function(a){return C.ac},
$isz:1}
H.jS.prototype={
gm:function(a){return a.length},
e7:function(a,b,c,d,e){var t,s,r
t=a.length
this.dE(a,b,t,"start")
this.dE(a,c,t,"end")
if(typeof b!=="number")return b.aF()
if(typeof c!=="number")return H.a6(c)
if(b>c)throw H.j(P.bx(b,0,c,null,null))
s=c-b
if(J.dH(e,0))throw H.j(P.dg(e))
r=d.length
if(typeof e!=="number")return H.a6(e)
if(r-e<s)throw H.j(new P.da("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaE:1,
$asaE:function(){},
$isaz:1,
$asaz:function(){}}
H.hJ.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b2(H.c3(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.b2(H.c3(a,b))
a[b]=c},
a9:function(a,b,c,d,e){if(!!J.ai(d).$ishJ){this.e7(a,b,c,d,e)
return}this.ds(a,b,c,d,e)},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)}}
H.hL.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.V]},
$asr:function(){return[P.V]},
$asn:function(){return[P.V]},
$isp:1,
$isr:1,
$isn:1}
H.hN.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.V]},
$asr:function(){return[P.V]},
$asn:function(){return[P.V]}}
H.hK.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.b2(H.c3(a,b))
a[b]=c},
a9:function(a,b,c,d,e){if(!!J.ai(d).$ishK){this.e7(a,b,c,d,e)
return}this.ds(a,b,c,d,e)},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.E]},
$isr:1,
$asr:function(){return[P.E]},
$isn:1,
$asn:function(){return[P.E]}}
H.hM.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.E]},
$asr:function(){return[P.E]},
$asn:function(){return[P.E]},
$isp:1,
$isr:1,
$isn:1}
H.hO.prototype={
$asaE:function(){},
$asaz:function(){},
$asp:function(){return[P.E]},
$asr:function(){return[P.E]},
$asn:function(){return[P.E]}}
H.nZ.prototype={
gad:function(a){return C.ad},
$isz:1,
$isp:1,
$asp:function(){return[P.V]},
$isr:1,
$asr:function(){return[P.V]},
$isn:1,
$asn:function(){return[P.V]}}
H.o_.prototype={
gad:function(a){return C.ae},
$isz:1,
$isp:1,
$asp:function(){return[P.V]},
$isr:1,
$asr:function(){return[P.V]},
$isn:1,
$asn:function(){return[P.V]}}
H.o0.prototype={
gad:function(a){return C.af},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b2(H.c3(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.E]},
$isr:1,
$asr:function(){return[P.E]},
$isn:1,
$asn:function(){return[P.E]}}
H.o1.prototype={
gad:function(a){return C.ag},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b2(H.c3(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.E]},
$isr:1,
$asr:function(){return[P.E]},
$isn:1,
$asn:function(){return[P.E]}}
H.o2.prototype={
gad:function(a){return C.ah},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b2(H.c3(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.E]},
$isr:1,
$asr:function(){return[P.E]},
$isn:1,
$asn:function(){return[P.E]}}
H.o3.prototype={
gad:function(a){return C.al},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b2(H.c3(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.E]},
$isr:1,
$asr:function(){return[P.E]},
$isn:1,
$asn:function(){return[P.E]}}
H.o4.prototype={
gad:function(a){return C.am},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b2(H.c3(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.E]},
$isr:1,
$asr:function(){return[P.E]},
$isn:1,
$asn:function(){return[P.E]}}
H.jT.prototype={
gad:function(a){return C.an},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b2(H.c3(a,b))
return a[b]},
$isz:1,
$isp:1,
$asp:function(){return[P.E]},
$isr:1,
$asr:function(){return[P.E]},
$isn:1,
$asn:function(){return[P.E]}}
H.fn.prototype={
gad:function(a){return C.ao},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.b2(H.c3(a,b))
return a[b]},
cm:function(a,b,c){return new Uint8Array(a.subarray(b,H.I5(b,c,a.length)))},
$isfn:1,
$isdc:1,
$isz:1,
$isp:1,
$asp:function(){return[P.E]},
$isr:1,
$asr:function(){return[P.E]},
$isn:1,
$asn:function(){return[P.E]}}
P.qK.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.qJ.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.qL.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qM.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.tg.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.th.prototype={
$2:function(a,b){this.a.$2(1,new H.hb(a,b))},
$S:function(){return{func:1,args:[,P.dT]}}}
P.tt.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.E,,]}}}
P.cm.prototype={}
P.tv.prototype={
$0:function(){var t,s,r
try{this.b.aN(this.a.$0())}catch(r){t=H.bE(r)
s=H.ct(r)
P.yJ(this.b,t,s)}},
$S:function(){return{func:1}}}
P.mB.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.aq(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.aq(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.mA.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.v(r,t)
r[t]=a
if(s===0)this.d.dI(r)}else if(t.b===0&&!this.b)this.d.aq(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.f3.prototype={}
P.ku.prototype={
cS:function(a,b){if(a==null)a=new P.fo()
if(this.a.a!==0)throw H.j(new P.da("Future already completed"))
$.ap.toString
this.aq(a,b)},
bB:function(a){return this.cS(a,null)},
$isf3:1,
ghX:function(){return this.a}}
P.dX.prototype={
aI:function(a,b){var t=this.a
if(t.a!==0)throw H.j(new P.da("Future already completed"))
t.dC(b)},
hy:function(a){return this.aI(a,null)},
aq:function(a,b){this.a.dD(a,b)}}
P.kH.prototype={
aI:function(a,b){var t=this.a
if(t.a!==0)throw H.j(new P.da("Future already completed"))
t.aN(b)},
aq:function(a,b){this.a.aq(a,b)}}
P.ky.prototype={
gho:function(){return this.b.b},
gev:function(){return(this.c&1)!==0},
gi3:function(){return(this.c&2)!==0},
geu:function(){return this.c===8},
i1:function(a){return this.b.b.da(this.d,a)},
ic:function(a){if(this.c!==6)return!0
return this.b.b.da(this.d,J.fM(a))},
hY:function(a){var t,s,r
t=this.e
s=J.b1(a)
r=this.b.b
if(H.fL(t,{func:1,args:[,,]}))return r.iC(t,s.gav(a),a.gaR())
else return r.da(t,s.gav(a))},
i2:function(){return this.b.b.eN(this.d)},
gcG:function(){return this.a}}
P.bk.prototype={
gh3:function(){return this.a===2},
gcD:function(){return this.a>=4},
cd:function(a,b){var t=$.ap
if(t!==C.e){t.toString
if(b!=null)b=P.yN(b,t)}return this.cL(a,b)},
b1:function(a){return this.cd(a,null)},
cL:function(a,b){var t,s
t=new P.bk(0,$.ap,null,[null])
s=b==null?1:3
this.co(new P.ky(null,t,s,a,b,[H.N(this,0),null]))
return t},
cf:function(a){var t,s
t=$.ap
s=new P.bk(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.N(this,0)
this.co(new P.ky(null,s,8,a,null,[t,t]))
return s},
co:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcD()){s.co(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fJ(null,null,t,new P.r9(this,a))}},
e1:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcG()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcD()){p.e1(a)
return}this.a=p.a
this.c=p.c}t.a=this.bY(a)
s=this.b
s.toString
P.fJ(null,null,s,new P.rh(t,this))}},
bX:function(){var t=this.c
this.c=null
return this.bY(t)},
bY:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcG()
t.a=s}return s},
aN:function(a){var t,s
t=this.$ti
if(H.dY(a,"$iscm",t,"$ascm"))if(H.dY(a,"$isbk",t,null))P.rc(a,this)
else P.yu(a,this)
else{s=this.bX()
this.a=4
this.c=a
P.fE(this,s)}},
dI:function(a){var t=this.bX()
this.a=4
this.c=a
P.fE(this,t)},
aq:function(a,b){var t=this.bX()
this.a=8
this.c=new P.eW(a,b)
P.fE(this,t)},
fJ:function(a){return this.aq(a,null)},
dC:function(a){var t
if(H.dY(a,"$iscm",this.$ti,"$ascm")){this.fG(a)
return}this.a=1
t=this.b
t.toString
P.fJ(null,null,t,new P.rb(this,a))},
fG:function(a){var t
if(H.dY(a,"$isbk",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fJ(null,null,t,new P.rg(this,a))}else P.rc(a,this)
return}P.yu(a,this)},
dD:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fJ(null,null,t,new P.ra(this,a,b))},
$iscm:1,
gbZ:function(){return this.a},
ghe:function(){return this.c}}
P.r9.prototype={
$0:function(){P.fE(this.a,this.b)},
$S:function(){return{func:1}}}
P.rh.prototype={
$0:function(){P.fE(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.rd.prototype={
$1:function(a){var t=this.a
t.a=0
t.aN(a)},
$S:function(){return{func:1,args:[,]}}}
P.re.prototype={
$2:function(a,b){this.a.aq(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.rf.prototype={
$0:function(){this.a.aq(this.b,this.c)},
$S:function(){return{func:1}}}
P.rb.prototype={
$0:function(){this.a.dI(this.b)},
$S:function(){return{func:1}}}
P.rg.prototype={
$0:function(){P.rc(this.b,this.a)},
$S:function(){return{func:1}}}
P.ra.prototype={
$0:function(){this.a.aq(this.b,this.c)},
$S:function(){return{func:1}}}
P.rk.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.i2()}catch(q){s=H.bE(q)
r=H.ct(q)
if(this.c){p=J.fM(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eW(s,r)
o.a=!0
return}if(!!J.ai(t).$iscm){if(t instanceof P.bk&&t.gbZ()>=4){if(t.gbZ()===8){p=this.b
p.b=t.ghe()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b1(new P.rl(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.rl.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.rj.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.i1(this.c)}catch(r){t=H.bE(r)
s=H.ct(r)
q=this.a
q.b=new P.eW(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ri.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.ic(t)===!0&&q.e!=null){p=this.b
p.b=q.hY(t)
p.a=!1}}catch(o){s=H.bE(o)
r=H.ct(o)
q=this.a
p=J.fM(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eW(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.kt.prototype={}
P.d_.prototype={
aE:function(a,b){return new P.rC(b,this,[H.ar(this,"d_",0),null])},
Z:function(a,b){var t,s
t={}
s=new P.bk(0,$.ap,null,[P.cR])
t.a=null
t.a=this.aX(new P.pq(t,this,b,s),!0,new P.pr(s),s.gbm())
return s},
a2:function(a,b){var t,s
t={}
s=new P.bk(0,$.ap,null,[null])
t.a=null
t.a=this.aX(new P.pw(t,this,b,s),!0,new P.px(s),s.gbm())
return s},
gm:function(a){var t,s
t={}
s=new P.bk(0,$.ap,null,[P.E])
t.a=0
this.aX(new P.pA(t),!0,new P.pB(t,s),s.gbm())
return s},
gX:function(a){var t,s
t={}
s=new P.bk(0,$.ap,null,[P.cR])
t.a=null
t.a=this.aX(new P.py(t,s),!0,new P.pz(s),s.gbm())
return s},
at:function(a){var t,s,r
t=H.ar(this,"d_",0)
s=H.a([],[t])
r=new P.bk(0,$.ap,null,[[P.p,t]])
this.aX(new P.pC(this,s),!0,new P.pD(s,r),r.gbm())
return r},
aB:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b||b<0)H.b2(P.dg(b))
return new P.rU(b,this,[H.ar(this,"d_",0)])},
gaj:function(a){var t,s
t={}
s=new P.bk(0,$.ap,null,[H.ar(this,"d_",0)])
t.a=null
t.a=this.aX(new P.ps(t,this,s),!0,new P.pt(s),s.gbm())
return s}}
P.pq.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.yR(new P.po(this.c,a),new P.pp(t,s),P.yH(t.a,s))},
$S:function(){return H.eS(function(a){return{func:1,args:[a]}},this.b,"d_")}}
P.po.prototype={
$0:function(){return J.be(this.b,this.a)},
$S:function(){return{func:1}}}
P.pp.prototype={
$1:function(a){if(a===!0)P.w4(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cR]}}}
P.pr.prototype={
$0:function(){this.a.aN(!1)},
$S:function(){return{func:1}}}
P.pw.prototype={
$1:function(a){P.yR(new P.pu(this.c,a),new P.pv(),P.yH(this.a.a,this.d))},
$S:function(){return H.eS(function(a){return{func:1,args:[a]}},this.b,"d_")}}
P.pu.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.pv.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.px.prototype={
$0:function(){this.a.aN(null)},
$S:function(){return{func:1}}}
P.pA.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.pB.prototype={
$0:function(){this.b.aN(this.a.a)},
$S:function(){return{func:1}}}
P.py.prototype={
$1:function(a){P.w4(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.pz.prototype={
$0:function(){this.a.aN(!0)},
$S:function(){return{func:1}}}
P.pC.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eS(function(a){return{func:1,args:[a]}},this.a,"d_")}}
P.pD.prototype={
$0:function(){this.b.aN(this.a)},
$S:function(){return{func:1}}}
P.ps.prototype={
$1:function(a){P.w4(this.a.a,this.c,a)},
$S:function(){return H.eS(function(a){return{func:1,args:[a]}},this.b,"d_")}}
P.pt.prototype={
$0:function(){var t,s,r,q
try{r=H.hv()
throw H.j(r)}catch(q){t=H.bE(q)
s=H.ct(q)
P.yJ(this.a,t,s)}},
$S:function(){return{func:1}}}
P.pn.prototype={}
P.dd.prototype={
d1:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.ei()
if((t&4)===0&&(this.e&32)===0)this.dR(this.ge_())},
eI:function(a){return this.d1(a,null)},
eM:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gX(t)}else t=!1
if(t)this.r.ck(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dR(this.ge0())}}}},
c4:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cq()
t=this.f
return t==null?$.$get$hl():t},
cq:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.ei()
if((this.e&32)===0)this.r=null
this.f=this.dZ()},
bw:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e4(b)
else this.cp(new P.qX(b,null,[H.ar(this,"dd",0)]))},
bS:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.e6(a,b)
else this.cp(new P.qZ(a,b,null))},
fF:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.e5()
else this.cp(C.Q)},
bV:function(){},
bW:function(){},
dZ:function(){return},
cp:function(a){var t,s
t=this.r
if(t==null){t=new P.rW(null,null,0,[H.ar(this,"dd",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.ck(this)}},
e4:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.dc(this.a,a)
this.e=(this.e&4294967263)>>>0
this.cs((t&4)!==0)},
e6:function(a,b){var t,s
t=this.e
s=new P.qQ(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cq()
t=this.f
if(!!J.ai(t).$iscm&&t!==$.$get$hl())t.cf(s)
else s.$0()}else{s.$0()
this.cs((t&4)!==0)}},
e5:function(){var t,s
t=new P.qP(this)
this.cq()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ai(s).$iscm&&s!==$.$get$hl())s.cf(t)
else t.$0()},
dR:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.cs((t&4)!==0)},
cs:function(a){var t,s
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
if(s)this.bV()
else this.bW()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.ck(this)},
dw:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.yN(b,t)
this.c=c},
gbZ:function(){return this.e}}
P.qQ.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fL(s,{func:1,args:[P.z,P.dT]})
q=t.d
p=this.b
o=t.b
if(r)q.iD(o,p,this.c)
else q.dc(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.qP.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eO(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.kw.prototype={
gbJ:function(a){return this.a},
sbJ:function(a,b){return this.a=b}}
P.qX.prototype={
d2:function(a){a.e4(this.b)}}
P.qZ.prototype={
d2:function(a){a.e6(this.b,this.c)},
$askw:function(){},
gav:function(a){return this.b},
gaR:function(){return this.c}}
P.qY.prototype={
d2:function(a){a.e5()},
gbJ:function(a){return},
sbJ:function(a,b){throw H.j(new P.da("No events after a done."))}}
P.rE.prototype={
ck:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.z8(new P.rF(this,a))
this.a=1},
ei:function(){if(this.a===1)this.a=3},
gbZ:function(){return this.a}}
P.rF.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbJ(r)
t.b=q
if(q==null)t.c=null
r.d2(this.b)},
$S:function(){return{func:1}}}
P.rW.prototype={
gX:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbJ(0,b)
this.c=b}}}
P.rX.prototype={}
P.tj.prototype={
$0:function(){return this.a.aq(this.b,this.c)},
$S:function(){return{func:1}}}
P.ti.prototype={
$2:function(a,b){P.I4(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dT]}}}
P.tk.prototype={
$0:function(){return this.a.aN(this.b)},
$S:function(){return{func:1}}}
P.fD.prototype={
aX:function(a,b,c,d){return this.dK(a,d,c,!0===b)},
eE:function(a,b,c){return this.aX(a,null,b,c)},
dK:function(a,b,c,d){return P.HH(this,a,b,c,d,H.ar(this,"fD",0),H.ar(this,"fD",1))},
cB:function(a,b){b.bw(0,a)},
h0:function(a,b,c){c.bS(a,b)},
$asd_:function(a,b){return[b]}}
P.eP.prototype={
bw:function(a,b){if((this.e&2)!==0)return
this.fk(0,b)},
bS:function(a,b){if((this.e&2)!==0)return
this.fl(a,b)},
bV:function(){var t=this.y
if(t==null)return
t.eI(0)},
bW:function(){var t=this.y
if(t==null)return
t.eM(0)},
dZ:function(){var t=this.y
if(t!=null){this.y=null
return t.c4(0)}return},
fW:function(a){this.x.cB(a,this)},
h_:function(a,b){this.x.h0(a,b,this)},
fY:function(){this.fF()},
dz:function(a,b,c,d,e,f,g){this.y=this.x.a.eE(this.gfV(),this.gfX(),this.gfZ())},
$asdd:function(a,b){return[b]}}
P.rC.prototype={
cB:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.bE(q)
r=H.ct(q)
P.I3(b,s,r)
return}b.bw(0,t)}}
P.rV.prototype={
gfM:function(a){return this.z},
$aseP:function(a){return[a,a]},
$asdd:null}
P.rU.prototype={
dK:function(a,b,c,d){var t,s,r
t=H.N(this,0)
s=$.ap
r=d?1:0
r=new P.rV(this.b,this,null,null,null,null,s,r,null,null,this.$ti)
r.dw(a,b,c,d,t)
r.dz(this,a,b,c,d,t,t)
return r},
cB:function(a,b){var t,s
t=b.gfM(b)
s=J.dp(t)
if(s.aF(t,0)){b.z=s.ae(t,1)
return}b.bw(0,a)},
$asfD:function(a){return[a,a]},
$asd_:null}
P.eW.prototype={
C:function(a){return H.y(this.a)},
$isei:1,
gav:function(a){return this.a},
gaR:function(){return this.b}}
P.tf.prototype={}
P.ts.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fo()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.j(t)
r=H.j(t)
r.stack=J.cv(s)
throw r},
$S:function(){return{func:1}}}
P.rI.prototype={
eO:function(a){var t,s,r,q
try{if(C.e===$.ap){r=a.$0()
return r}r=P.yO(null,null,this,a)
return r}catch(q){t=H.bE(q)
s=H.ct(q)
r=P.kL(null,null,this,t,s)
return r}},
dc:function(a,b){var t,s,r,q
try{if(C.e===$.ap){r=a.$1(b)
return r}r=P.yQ(null,null,this,a,b)
return r}catch(q){t=H.bE(q)
s=H.ct(q)
r=P.kL(null,null,this,t,s)
return r}},
iD:function(a,b,c){var t,s,r,q
try{if(C.e===$.ap){r=a.$2(b,c)
return r}r=P.yP(null,null,this,a,b,c)
return r}catch(q){t=H.bE(q)
s=H.ct(q)
r=P.kL(null,null,this,t,s)
return r}},
cQ:function(a,b){if(b)return new P.rJ(this,a)
else return new P.rK(this,a)},
hw:function(a,b){return new P.rL(this,a)},
n:function(a,b){return},
eN:function(a){if($.ap===C.e)return a.$0()
return P.yO(null,null,this,a)},
da:function(a,b){if($.ap===C.e)return a.$1(b)
return P.yQ(null,null,this,a,b)},
iC:function(a,b,c){if($.ap===C.e)return a.$2(b,c)
return P.yP(null,null,this,a,b,c)}}
P.rJ.prototype={
$0:function(){return this.a.eO(this.b)},
$S:function(){return{func:1}}}
P.rK.prototype={
$0:function(){return this.a.eN(this.b)},
$S:function(){return{func:1}}}
P.rL.prototype={
$1:function(a){return this.a.dc(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.rn.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gak:function(a){return new P.kA(this,[H.N(this,0)])},
gce:function(a){var t=H.N(this,0)
return H.dy(new P.kA(this,[t]),new P.rp(this),t,H.N(this,1))},
a_:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fL(b)},
fL:function(a){var t=this.d
if(t==null)return!1
return this.aV(t[this.aU(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fT(0,b)},
fT:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aU(b)]
r=this.aV(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.w1()
this.b=t}this.dG(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.w1()
this.c=s}this.dG(s,b,c)}else this.hh(b,c)},
hh:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.w1()
this.d=t}s=this.aU(a)
r=t[s]
if(r==null){P.w2(t,s,[a,b]);++this.a
this.e=null}else{q=this.aV(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
as:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.cJ(0,b)},
cJ:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aU(b)]
r=this.aV(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a2:function(a,b){var t,s,r,q
t=this.ct()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.j(new P.bH(this))}},
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
dG:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.w2(a,b,c)},
bx:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.HJ(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aU:function(a){return J.cT(a)&0x3ffffff},
aV:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.be(a[s],b))return s
return-1},
$isb0:1,
$asb0:null}
P.rp.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kA.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gY:function(a){var t=this.a
return new P.ro(t,t.ct(),0,null,this.$ti)},
Z:function(a,b){return this.a.a_(0,b)},
a2:function(a,b){var t,s,r,q
t=this.a
s=t.ct()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.j(new P.bH(t))}}}
P.ro.prototype={
gS:function(){return this.d},
I:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.j(new P.bH(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.kC.prototype={
bH:function(a){return H.IV(a)&0x3ffffff},
bI:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gez()
if(r==null?b==null:r===b)return s}return-1}}
P.kB.prototype={
gY:function(a){var t=new P.dE(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gX:function(a){return this.a===0},
Z:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.fK(b)},
fK:function(a){var t=this.d
if(t==null)return!1
return this.aV(t[this.aU(a)],a)>=0},
cZ:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.Z(0,a)?a:null
else return this.h4(a)},
h4:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aU(a)]
r=this.aV(s,a)
if(r<0)return
return J.d2(s,r).gdO()},
a2:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.j(new P.bH(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dF(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dF(r,b)}else return this.aT(0,b)},
aT:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.HN()
this.d=t}s=this.aU(b)
r=t[s]
if(r==null)t[s]=[this.cu(b)]
else{if(this.aV(r,b)>=0)return!1
r.push(this.cu(b))}return!0},
as:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.cJ(0,b)},
cJ:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aU(b)]
r=this.aV(s,b)
if(r<0)return!1
this.dH(s.splice(r,1)[0])
return!0},
bp:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dF:function(a,b){if(a[b]!=null)return!1
a[b]=this.cu(b)
return!0},
bx:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dH(t)
delete a[b]
return!0},
cu:function(a){var t,s
t=new P.ry(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dH:function(a){var t,s
t=a.gfI()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aU:function(a){return J.cT(a)&0x3ffffff},
aV:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.be(a[s].gdO(),b))return s
return-1},
$iseC:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.ry.prototype={
gdO:function(){return this.a},
gfI:function(){return this.c}}
P.dE.prototype={
gS:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.j(new P.bH(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.rq.prototype={}
P.ep.prototype={
aE:function(a,b){return H.dy(this,b,H.ar(this,"ep",0),null)},
Z:function(a,b){var t
for(t=this.gY(this);t.I();)if(J.be(t.gS(),b))return!0
return!1},
a2:function(a,b){var t
for(t=this.gY(this);t.I();)b.$1(t.gS())},
a8:function(a,b){return P.dl(this,!0,H.ar(this,"ep",0))},
at:function(a){return this.a8(a,!0)},
gm:function(a){var t,s
t=this.gY(this)
for(s=0;t.I();)++s
return s},
gX:function(a){return!this.gY(this).I()},
aB:function(a,b){return H.p7(this,b,H.ar(this,"ep",0))},
C:function(a){return P.v0(this,"(",")")},
$isn:1,
$asn:null}
P.hu.prototype={}
P.hC.prototype={}
P.fq.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
P.b6.prototype={
gY:function(a){return new H.et(a,this.gm(a),0,null,[H.ar(a,"b6",0)])},
W:function(a,b){return this.n(a,b)},
a2:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.j(new P.bH(a))}},
gX:function(a){return this.gm(a)===0},
Z:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.be(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.j(new P.bH(a))}return!1},
aE:function(a,b){return new H.ev(a,b,[H.ar(a,"b6",0),null])},
aB:function(a,b){return H.pM(a,b,null,H.ar(a,"b6",0))},
a8:function(a,b){var t,s,r
t=H.a([],[H.ar(a,"b6",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
at:function(a){return this.a8(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bF:function(a,b,c,d){var t
P.dm(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a9:function(a,b,c,d,e){var t,s,r,q,p,o
P.dm(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.ae()
if(typeof b!=="number")return H.a6(b)
t=c-b
if(t===0)return
if(J.dH(e,0))H.b2(P.bx(e,0,null,"skipCount",null))
if(H.dY(d,"$isp",[H.ar(a,"b6",0)],"$asp")){s=e
r=d}else{r=J.zF(d,e).a8(0,!1)
s=0}q=J.kN(s)
p=J.bb(r)
if(J.cu(q.R(s,t),p.gm(r)))throw H.j(H.xH())
if(q.a4(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.R(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.R(s,o)))},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aK:function(a,b,c,d){var t,s,r,q,p
P.dm(b,c,this.gm(a),null,null,null)
d=C.c.at(d)
if(typeof c!=="number")return c.ae()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.az(a,b,r,d)
if(q!==0){this.a9(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a9(a,r,p,a,c)
this.az(a,b,r,d)}},
ba:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.be(this.n(a,t),b))return t
return-1},
br:function(a,b){return this.ba(a,b,0)},
C:function(a){return P.jH(a,"[","]")},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.nJ.prototype={
a2:function(a,b){var t,s
for(t=J.cJ(J.im(this.a));t.I();){s=t.gS()
b.$2(s,J.d2(this.a,s))}},
gm:function(a){return J.c5(J.im(this.a))},
gX:function(a){return J.kU(J.im(this.a))},
C:function(a){return P.nL(this)},
$isb0:1,
$asb0:null}
P.t6.prototype={
i:function(a,b,c){throw H.j(new P.T("Cannot modify unmodifiable map"))},
$isb0:1,
$asb0:null}
P.nK.prototype={
n:function(a,b){return J.d2(this.a,b)},
i:function(a,b,c){J.il(this.a,b,c)},
a2:function(a,b){J.wi(this.a,b)},
gX:function(a){return J.kU(this.a)},
gm:function(a){return J.c5(this.a)},
gak:function(a){return J.im(this.a)},
C:function(a){return J.cv(this.a)},
$isb0:1,
$asb0:null}
P.i2.prototype={$asb0:null,$isb0:1}
P.nM.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.N+=", "
t.a=!1
t=this.b
s=t.N+=H.y(a)
t.N=s+": "
t.N+=H.y(b)},
$S:function(){return{func:1,args:[,,]}}}
P.nw.prototype={
gY:function(a){return new P.rz(this,this.c,this.d,this.b,null,this.$ti)},
a2:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.v(r,s)
b.$1(r[s])
if(t!==this.d)H.b2(new P.bH(this))}},
gX:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
W:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a6(b)
if(0>b||b>=t)H.b2(P.bz(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.v(s,q)
return s[q]},
a8:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.hn(t)
return t},
at:function(a){return this.a8(a,!0)},
h:function(a,b){this.aT(0,b)},
bp:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.v(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
C:function(a){return P.jH(this,"{","}")},
eL:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.j(H.hv());++this.d
s=this.a
r=s.length
if(t>=r)return H.v(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aT:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.v(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dQ();++this.d},
dQ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a9(s,0,q,t,r)
C.b.a9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
hn:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a9(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a9(a,0,p,r,t)
C.b.a9(a,p,p+this.c,this.a,0)
return this.c+p}},
fq:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asr:null,
$asn:null}
P.rz.prototype={
gS:function(){return this.e},
I:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.b2(new P.bH(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.v(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.p4.prototype={
gX:function(a){return this.a===0},
aD:function(a,b){var t
for(t=J.cJ(b);t.I();)this.h(0,t.gS())},
a8:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dE(this,this.r,null,null,[null]),s.c=this.e,r=0;s.I();r=p){q=s.d
p=r+1
if(r>=t.length)return H.v(t,r)
t[r]=q}return t},
at:function(a){return this.a8(a,!0)},
aE:function(a,b){return new H.h2(this,b,[H.N(this,0),null])},
C:function(a){return P.jH(this,"{","}")},
a2:function(a,b){var t
for(t=new P.dE(this,this.r,null,null,[null]),t.c=this.e;t.I();)b.$1(t.d)},
bs:function(a,b){var t,s
t=new P.dE(this,this.r,null,null,[null])
t.c=this.e
if(!t.I())return""
if(b===""){s=""
do s+=H.y(t.d)
while(t.I())}else{s=H.y(t.d)
for(;t.I();)s=s+b+H.y(t.d)}return s.charCodeAt(0)==0?s:s},
aB:function(a,b){return H.p7(this,b,H.N(this,0))},
$iseC:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.p3.prototype={}
P.rt.prototype={
n:function(a,b){var t,s
t=this.b
if(t==null)return this.c.n(0,b)
else if(typeof b!=="string")return
else{s=t[b]
return typeof s=="undefined"?this.hb(b):s}},
gm:function(a){var t
if(this.b==null){t=this.c
t=t.gm(t)}else t=this.bg().length
return t},
gX:function(a){var t
if(this.b==null){t=this.c
t=t.gm(t)}else t=this.bg().length
return t===0},
gak:function(a){var t
if(this.b==null){t=this.c
return t.gak(t)}return new P.ru(this)},
i:function(a,b,c){var t,s
if(this.b==null)this.c.i(0,b,c)
else if(this.a_(0,b)){t=this.b
t[b]=c
s=this.a
if(s==null?t!=null:s!==t)s[b]=null}else this.hl().i(0,b,c)},
a_:function(a,b){if(this.b==null)return this.c.a_(0,b)
if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
a2:function(a,b){var t,s,r,q
if(this.b==null)return this.c.a2(0,b)
t=this.bg()
for(s=0;s<t.length;++s){r=t[s]
q=this.b[r]
if(typeof q=="undefined"){q=P.tn(this.a[r])
this.b[r]=q}b.$2(r,q)
if(t!==this.c)throw H.j(new P.bH(this))}},
C:function(a){return P.nL(this)},
bg:function(){var t=this.c
if(t==null){t=Object.keys(this.a)
this.c=t}return t},
hl:function(){var t,s,r,q,p
if(this.b==null)return this.c
t=P.cy(P.x,null)
s=this.bg()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.i(0,p,this.n(0,p))}if(q===0)s.push(null)
else C.b.sm(s,0)
this.b=null
this.a=null
this.c=t
return t},
hb:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
t=P.tn(this.a[a])
return this.b[a]=t},
$isb0:1,
$asb0:function(){return[P.x,null]}}
P.ru.prototype={
gm:function(a){var t=this.a
if(t.b==null){t=t.c
t=t.gm(t)}else t=t.bg().length
return t},
W:function(a,b){var t=this.a
if(t.b==null)t=t.gak(t).W(0,b)
else{t=t.bg()
if(b>>>0!==b||b>=t.length)return H.v(t,b)
t=t[b]}return t},
gY:function(a){var t=this.a
if(t.b==null){t=t.gak(t)
t=t.gY(t)}else{t=t.bg()
t=new J.eV(t,t.length,0,null,[H.N(t,0)])}return t},
Z:function(a,b){return this.a.a_(0,b)},
$asdP:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]}}
P.l8.prototype={
ij:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bb(b)
a1=P.dm(a0,a1,t.gm(b),null,null,null)
s=$.$get$yt()
if(typeof a1!=="number")return H.a6(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.a0(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.tF(C.c.aa(b,l))
h=H.tF(C.c.aa(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.v(s,g)
f=s[g]
if(f>=0){g=C.c.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.N.length
if(e==null)e=0
if(typeof e!=="number")return e.R()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.c2("")
p.N+=C.c.K(b,q,r)
p.N+=H.fs(k)
q=l
continue}}throw H.j(new P.bJ("Invalid base64 data",b,r))}if(p!=null){t=p.N+=t.K(b,q,a1)
e=t.length
if(o>=0)P.wu(b,n,a1,o,m,e)
else{d=C.a.bR(e-1,4)+1
if(d===1)throw H.j(new P.bJ("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.N=t;++d}}t=p.N
return C.c.aK(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.wu(b,n,a1,o,m,c)
else{d=C.d.bR(c,4)
if(d===1)throw H.j(new P.bJ("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aK(b,a1,a1,d===2?"==":"=")}return b},
$asf2:function(){return[[P.p,P.E],P.x]}}
P.l9.prototype={
$aseg:function(){return[[P.p,P.E],P.x]}}
P.f2.prototype={}
P.eg.prototype={}
P.lS.prototype={
$asf2:function(){return[P.x,[P.p,P.E]]}}
P.hy.prototype={
C:function(a){if(this.b!=null)return"Converting object to an encodable object failed."
else return"Converting object did not return an encodable object."}}
P.nh.prototype={
C:function(a){return"Cyclic error in JSON stringify"}}
P.ng.prototype={
hF:function(a,b){var t=P.If(a,this.ghI().a)
return t},
hE:function(a){return this.hF(a,null)},
hP:function(a,b){var t=this.ghQ()
t=P.HM(a,t.b,t.a)
return t},
eo:function(a){return this.hP(a,null)},
ghQ:function(){return C.a1},
ghI:function(){return C.a0},
$asf2:function(){return[P.z,P.x]}}
P.nj.prototype={
$aseg:function(){return[P.z,P.x]}}
P.ni.prototype={
$aseg:function(){return[P.x,P.z]}}
P.rw.prototype={
eZ:function(a){var t,s,r,q,p,o
t=J.bb(a)
s=t.gm(a)
if(typeof s!=="number")return H.a6(s)
r=0
q=0
for(;q<s;++q){p=t.a0(a,q)
if(p>92)continue
if(p<32){if(q>r)this.dg(a,r,q)
r=q+1
this.ax(92)
switch(p){case 8:this.ax(98)
break
case 9:this.ax(116)
break
case 10:this.ax(110)
break
case 12:this.ax(102)
break
case 13:this.ax(114)
break
default:this.ax(117)
this.ax(48)
this.ax(48)
o=p>>>4&15
this.ax(o<10?48+o:87+o)
o=p&15
this.ax(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)this.dg(a,r,q)
r=q+1
this.ax(92)
this.ax(p)}}if(r===0)this.aw(a)
else if(r<s)this.dg(a,r,s)},
cr:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.j(new P.nh(a,null))}t.push(a)},
ci:function(a){var t,s,r,q
if(this.eY(a))return
this.cr(a)
try{t=this.b.$1(a)
if(!this.eY(t))throw H.j(new P.hy(a,null))
r=this.a
if(0>=r.length)return H.v(r,-1)
r.pop()}catch(q){s=H.bE(q)
throw H.j(new P.hy(a,s))}},
eY:function(a){var t,s
if(typeof a==="number"){if(!isFinite(a))return!1
this.iP(a)
return!0}else if(a===!0){this.aw("true")
return!0}else if(a===!1){this.aw("false")
return!0}else if(a==null){this.aw("null")
return!0}else if(typeof a==="string"){this.aw('"')
this.eZ(a)
this.aw('"')
return!0}else{t=J.ai(a)
if(!!t.$isp){this.cr(a)
this.iN(a)
t=this.a
if(0>=t.length)return H.v(t,-1)
t.pop()
return!0}else if(!!t.$isb0){this.cr(a)
s=this.iO(a)
t=this.a
if(0>=t.length)return H.v(t,-1)
t.pop()
return s}else return!1}},
iN:function(a){var t,s
this.aw("[")
t=J.bb(a)
if(t.gm(a)>0){this.ci(t.n(a,0))
for(s=1;s<t.gm(a);++s){this.aw(",")
this.ci(t.n(a,s))}}this.aw("]")},
iO:function(a){var t,s,r,q,p,o
t={}
s=J.bb(a)
if(s.gX(a)===!0){this.aw("{}")
return!0}r=s.gm(a)
if(typeof r!=="number")return r.al()
q=new Array(r*2)
t.a=0
t.b=!0
s.a2(a,new P.rx(t,q))
if(!t.b)return!1
this.aw("{")
for(s=q.length,p='"',o=0;o<s;o+=2,p=',"'){this.aw(p)
this.eZ(q[o])
this.aw('":')
r=o+1
if(r>=s)return H.v(q,r)
this.ci(q[r])}this.aw("}")
return!0}}
P.rx.prototype={
$2:function(a,b){var t,s,r,q,p
if(typeof a!=="string")this.a.b=!1
t=this.b
s=this.a
r=s.a
q=r+1
s.a=q
p=t.length
if(r>=p)return H.v(t,r)
t[r]=a
s.a=q+1
if(q>=p)return H.v(t,q)
t[q]=b},
$S:function(){return{func:1,args:[,,]}}}
P.rv.prototype={
iP:function(a){this.c.N+=C.d.C(a)},
aw:function(a){this.c.N+=H.y(a)},
dg:function(a,b,c){this.c.N+=J.zH(a,b,c)},
ax:function(a){this.c.N+=H.fs(a)}}
P.qk.prototype={
gJ:function(a){return"utf-8"}}
P.ql.prototype={
cT:function(a,b,c){var t,s,r,q
t=J.c5(a)
P.dm(b,c,t,null,null,null)
s=new P.c2("")
r=new P.t8(!1,s,!0,0,0,0)
r.cT(a,b,t)
r.hT(0,a,t)
q=s.N
return q.charCodeAt(0)==0?q:q},
hB:function(a){return this.cT(a,0,null)},
$aseg:function(){return[[P.p,P.E],P.x]}}
P.t8.prototype={
hT:function(a,b,c){if(this.e>0)throw H.j(new P.bJ("Unfinished UTF-8 octet sequence",b,c))},
cT:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.ta(c)
p=new P.t9(this,a,b,c)
$loop$0:for(o=J.bb(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aQ()
if((l&192)!==128){k=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bN(l,16),a,m)
throw H.j(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.v(C.B,k)
if(t<=C.B[k]){k=new P.bJ("Overlong encoding of 0x"+C.a.bN(t,16),a,m-r-1)
throw H.j(k)}if(t>1114111){k=new P.bJ("Character outside valid Unicode range: 0x"+C.a.bN(t,16),a,m-r-1)
throw H.j(k)}if(!this.c||t!==65279)n.N+=H.fs(t)
this.c=!1}if(typeof c!=="number")return H.a6(c)
k=m<c
for(;k;){j=q.$2(a,m)
if(J.cu(j,0)){this.c=!1
if(typeof j!=="number")return H.a6(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dp(l)
if(g.a4(l,0)){g=new P.bJ("Negative UTF-8 code unit: -0x"+J.zK(g.dj(l),16),a,h-1)
throw H.j(g)}else{if(typeof l!=="number")return l.aQ()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bN(l,16),a,h-1)
throw H.j(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.ta.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
if(typeof t!=="number")return H.a6(t)
s=J.bb(a)
r=b
for(;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aQ()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.E,args:[,P.E]}}}
P.t9.prototype={
$2:function(a,b){this.a.b.N+=P.pI(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.E,P.E]}}}
P.cR.prototype={}
P.bG.prototype={}
P.e1.prototype={
T:function(a,b){if(b==null)return!1
if(!(b instanceof P.e1))return!1
return this.a===b.a&&this.b===b.b},
aH:function(a,b){return C.a.aH(this.a,b.ghm())},
ga5:function(a){var t=this.a
return(t^C.a.b5(t,30))&1073741823},
C:function(a){var t,s,r,q,p,o,n
t=P.Al(H.xT(this))
s=P.iw(H.vy(this))
r=P.iw(H.vx(this))
q=P.iw(H.GC(this))
p=P.iw(H.GE(this))
o=P.iw(H.GF(this))
n=P.Am(H.GD(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.Ak(C.a.R(this.a,b.giW()),this.b)},
gie:function(){return this.a},
du:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.j(P.dg(this.gie()))},
$isbG:1,
$asbG:function(){return[P.e1]},
ghm:function(){return this.a}}
P.V.prototype={$isbG:1,
$asbG:function(){return[P.dq]}}
P.dt.prototype={
R:function(a,b){return new P.dt(this.a+b.gbn())},
ae:function(a,b){return new P.dt(C.a.ae(this.a,b.gbn()))},
al:function(a,b){return new P.dt(C.a.b0(this.a*b))},
a4:function(a,b){return C.a.a4(this.a,b.gbn())},
aF:function(a,b){return C.a.aF(this.a,b.gbn())},
ay:function(a,b){return C.a.ay(this.a,b.gbn())},
T:function(a,b){if(b==null)return!1
if(!(b instanceof P.dt))return!1
return this.a===b.a},
ga5:function(a){return this.a&0x1FFFFFFF},
aH:function(a,b){return C.a.aH(this.a,b.gbn())},
C:function(a){var t,s,r,q,p
t=new P.lQ()
s=this.a
if(s<0)return"-"+new P.dt(0-s).C(0)
r=t.$1(C.a.ar(s,6e7)%60)
q=t.$1(C.a.ar(s,1e6)%60)
p=new P.lP().$1(s%1e6)
return""+C.a.ar(s,36e8)+":"+H.y(r)+":"+H.y(q)+"."+H.y(p)},
dj:function(a){return new P.dt(0-this.a)},
$isbG:1,
$asbG:function(){return[P.dt]},
gbn:function(){return this.a}}
P.lP.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.x,args:[P.E]}}}
P.lQ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.x,args:[P.E]}}}
P.ei.prototype={
gaR:function(){return H.ct(this.$thrownJsError)}}
P.fo.prototype={
C:function(a){return"Throw of null."}}
P.cU.prototype={
gcw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcv:function(){return""},
C:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.y(t)
q=this.gcw()+s+r
if(!this.a)return q
p=this.gcv()
o=P.wN(this.b)
return q+p+": "+H.y(o)},
gJ:function(a){return this.c}}
P.eB.prototype={
gcw:function(){return"RangeError"},
gcv:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.y(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.y(t)
else{if(typeof r!=="number")return r.aF()
if(r>t)s=": Not in range "+H.y(t)+".."+H.y(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.y(t)}}return s}}
P.mU.prototype={
gcw:function(){return"RangeError"},
gcv:function(){if(J.dH(this.b,0))return": index must not be negative"
var t=this.f
if(J.be(t,0))return": no indices are valid"
return": index should be less than "+H.y(t)},
gm:function(a){return this.f}}
P.T.prototype={
C:function(a){return"Unsupported operation: "+this.a}}
P.eH.prototype={
C:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.y(t):"UnimplementedError"}}
P.da.prototype={
C:function(a){return"Bad state: "+this.a}}
P.bH.prototype={
C:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.y(P.wN(t))+"."}}
P.oh.prototype={
C:function(a){return"Out of Memory"},
gaR:function(){return},
$isei:1}
P.ke.prototype={
C:function(a){return"Stack Overflow"},
gaR:function(){return},
$isei:1}
P.lF.prototype={
C:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.y(t)+"' during its initialization"}}
P.r8.prototype={
C:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.y(t)}}
P.bJ.prototype={
C:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.y(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a4()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.K(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a6(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.aa(q,m)
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
g=""}f=C.c.K(q,i,j)
return s+h+f+g+"\n"+C.c.al(" ",r-i+h.length)+"^\n"},
gc7:function(a){return this.c}}
P.lZ.prototype={
C:function(a){return"Expando:"+H.y(this.a)},
n:function(a,b){var t,s
t=this.bU
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.b2(P.dI(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.vz(b,"expando$values")
return s==null?null:H.vz(s,t)},
i:function(a,b,c){var t,s
t=this.bU
if(typeof t!=="string")t.set(b,c)
else{s=H.vz(b,"expando$values")
if(s==null){s=new P.z()
H.xX(b,"expando$values",s)}H.xX(s,t,c)}},
gJ:function(a){return this.a}}
P.E.prototype={$isbG:1,
$asbG:function(){return[P.dq]}}
P.n.prototype={
aE:function(a,b){return H.dy(this,b,H.ar(this,"n",0),null)},
cg:function(a,b){return new H.eK(this,b,[H.ar(this,"n",0)])},
Z:function(a,b){var t
for(t=this.gY(this);t.I();)if(J.be(t.gS(),b))return!0
return!1},
a2:function(a,b){var t
for(t=this.gY(this);t.I();)b.$1(t.gS())},
a8:function(a,b){return P.dl(this,b,H.ar(this,"n",0))},
at:function(a){return this.a8(a,!0)},
gm:function(a){var t,s
t=this.gY(this)
for(s=0;t.I();)++s
return s},
gX:function(a){return!this.gY(this).I()},
aB:function(a,b){return H.p7(this,b,H.ar(this,"n",0))},
gbl:function(a){var t,s
t=this.gY(this)
if(!t.I())throw H.j(H.hv())
s=t.gS()
if(t.I())throw H.j(H.Ge())
return s},
W:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.zN("index"))
if(b<0)H.b2(P.bx(b,0,null,"index",null))
for(t=this.gY(this),s=0;t.I();){r=t.gS()
if(b===s)return r;++s}throw H.j(P.bz(b,this,"index",null,s))},
C:function(a){return P.v0(this,"(",")")},
$asn:null}
P.jI.prototype={}
P.p.prototype={$asp:null,$isr:1,$asr:null,$isn:1,$asn:null}
P.b0.prototype={$asb0:null}
P.d8.prototype={
ga5:function(a){return P.z.prototype.ga5.call(this,this)},
C:function(a){return"null"}}
P.dq.prototype={$isbG:1,
$asbG:function(){return[P.dq]}}
P.z.prototype={constructor:P.z,$isz:1,
T:function(a,b){return this===b},
ga5:function(a){return H.ex(this)},
C:function(a){return H.oC(this)},
gad:function(a){return new H.dV(H.kP(this),null)},
toString:function(){return this.C(this)}}
P.dz.prototype={}
P.eC.prototype={}
P.dT.prototype={}
P.x.prototype={$isbG:1,
$asbG:function(){return[P.x]}}
P.c2.prototype={
gm:function(a){return this.N.length},
gX:function(a){return this.N.length===0},
C:function(a){var t=this.N
return t.charCodeAt(0)==0?t:t},
gN:function(){return this.N}}
P.eJ.prototype={}
P.qh.prototype={
$2:function(a,b){var t,s,r,q
t=J.bb(b)
s=t.br(b,"=")
if(s===-1){if(!t.T(b,""))J.il(a,P.t7(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.K(b,0,s)
q=C.c.am(b,s+1)
t=this.a
J.il(a,P.t7(r,0,r.length,t,!0),P.t7(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.qe.prototype={
$2:function(a,b){throw H.j(new P.bJ("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.x,P.E]}}}
P.qf.prototype={
$2:function(a,b){throw H.j(new P.bJ("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.x],opt:[,]}}}
P.qg.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fr(C.c.K(this.a,a,b),16,null)
s=J.dp(t)
if(s.a4(t,0)||s.aF(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.E,args:[P.E,P.E]}}}
P.kI.prototype={
geW:function(){return this.b},
gcX:function(a){var t=this.c
if(t==null)return""
if(C.c.ai(t,"["))return C.c.K(t,1,t.length-1)
return t},
gd3:function(a){var t=this.d
if(t==null)return P.yA(this.a)
return t},
gd6:function(a){var t=this.f
return t==null?"":t},
ges:function(){var t=this.r
return t==null?"":t},
gd7:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.x
s=new P.i2(P.ym(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
gew:function(){return this.c!=null},
gey:function(){return this.f!=null},
gex:function(){return this.r!=null},
C:function(a){var t=this.y
if(t==null){t=this.dU()
this.y=t}return t},
dU:function(){var t,s,r,q
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
T:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.ai(b)
if(!!t.$iseJ){if(this.a===b.gdk())if(this.c!=null===b.gew()){s=this.b
r=b.geW()
if(s==null?r==null:s===r){s=this.gcX(this)
r=t.gcX(b)
if(s==null?r==null:s===r)if(J.be(this.gd3(this),t.gd3(b)))if(J.be(this.e,t.geH(b))){s=this.f
r=s==null
if(!r===b.gey()){if(r)s=""
if(s===t.gd6(b)){t=this.r
s=t==null
if(!s===b.gex()){if(s)t=""
t=t===b.ges()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga5:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dU()
this.y=t}t=C.c.ga5(t)
this.z=t}return t},
$iseJ:1,
gdk:function(){return this.a},
geH:function(a){return this.e}}
P.tw.prototype={
$1:function(a){throw H.j(new P.bJ("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.qd.prototype={
geU:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.v(t,0)
s=this.a
t=t[0]+1
r=J.bb(s)
q=r.ba(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fH(s,o,p,C.k,!1)
if(n==null)n=r.K(s,o,p)
p=q}else n=null
m=P.fH(s,t,p,C.J,!1)
t=new P.qW(this,"data",null,null,null,m==null?r.K(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
C:function(a){var t,s
t=this.b
if(0>=t.length)return H.v(t,0)
s=this.a
return t[0]===-1?"data:"+H.y(s):s}}
P.tp.prototype={
$1:function(a){return new Uint8Array(H.cz(96))},
$S:function(){return{func:1,args:[,]}}}
P.to.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.v(t,a)
t=t[a]
J.zm(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.dc,args:[,,]}}}
P.tq.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.de(a),r=0;r<t;++r)s.i(a,C.c.aa(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.dc,P.x,P.E]}}}
P.tr.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.aa(b,0),s=C.c.aa(b,1),r=J.de(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.dc,P.x,P.E]}}}
P.rT.prototype={
gew:function(){return this.c>0},
gey:function(){var t=this.f
if(typeof t!=="number")return t.a4()
return t<this.r},
gex:function(){return this.r<this.a.length},
gdk:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ai(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ai(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ai(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ai(this.a,"package")){this.x="package"
t="package"}else{t=C.c.K(this.a,0,t)
this.x=t}return t},
geW:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.K(this.a,s,t-1):""},
gcX:function(a){var t=this.c
return t>0?C.c.K(this.a,t,this.d):""},
gd3:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.R()
s=this.e
if(typeof s!=="number")return H.a6(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.R()
return H.fr(C.c.K(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ai(this.a,"http"))return 80
if(t===5&&C.c.ai(this.a,"https"))return 443
return 0},
geH:function(a){return C.c.K(this.a,this.e,this.f)},
gd6:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a4()
return t<s?C.c.K(this.a,t+1,s):""},
ges:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.am(s,t+1):""},
gd7:function(){var t=this.f
if(typeof t!=="number")return t.a4()
if(t>=this.r)return C.aa
t=P.x
return new P.i2(P.ym(this.gd6(this),C.n),[t,t])},
ga5:function(a){var t=this.y
if(t==null){t=C.c.ga5(this.a)
this.y=t}return t},
T:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.ai(b)
if(!!t.$iseJ)return this.a===t.C(b)
return!1},
C:function(a){return this.a},
$iseJ:1}
P.qW.prototype={}
W.b3.prototype={}
W.eU.prototype={
C:function(a){return String(a)},
$iseU:1,
$isi:1,
$isz:1,
gab:function(a){return a.href},
sao:function(a,b){return a.type=b},
sab:function(a,b){return a.href=b}}
W.kZ.prototype={
C:function(a){return String(a)},
$isi:1,
$isz:1,
gab:function(a){return a.href},
sab:function(a,b){return a.href=b}}
W.eY.prototype={$iseY:1,$iscc:1,$isaf:1,$isz:1}
W.cK.prototype={$isz:1}
W.l6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cK]},
$isr:1,
$asr:function(){return[W.cK]},
$isn:1,
$asn:function(){return[W.cK]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.cK]},
$isaz:1,
$asaz:function(){return[W.cK]}}
W.h5.prototype={
$asp:function(){return[W.cK]},
$asr:function(){return[W.cK]},
$asn:function(){return[W.cK]},
$isp:1,
$isr:1,
$isn:1}
W.h8.prototype={
$asp:function(){return[W.cK]},
$asr:function(){return[W.cK]},
$asn:function(){return[W.cK]},
$isp:1,
$isr:1,
$isn:1}
W.la.prototype={
gab:function(a){return a.href},
sab:function(a,b){return a.href=b}}
W.f_.prototype={$isf_:1}
W.f0.prototype={$isf0:1,$isag:1,$isi:1,$isz:1}
W.fY.prototype={$isfY:1,
gJ:function(a){return a.name},
gaL:function(a){return a.value},
sao:function(a,b){return a.type=b}}
W.io.prototype={
i9:function(a){return a.keys()}}
W.lj.prototype={$isz:1}
W.lk.prototype={$isz:1}
W.ef.prototype={$isi:1,$isz:1,
gm:function(a){return a.length}}
W.lp.prototype={$isag:1,$isi:1,$isz:1}
W.ir.prototype={
cV:function(a,b){return typeof console!="undefined"?console.error(b):null},
bk:function(a){return typeof console!="undefined"?console.group(a):null},
eA:function(a){return typeof console!="undefined"?console.info(a):null},
iJ:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.h_.prototype={
gJ:function(a){return a.name}}
W.lx.prototype={
gaS:function(a){return a.style}}
W.ly.prototype={
gab:function(a){return a.href}}
W.h0.prototype={
gaS:function(a){return a.style}}
W.h1.prototype={
gJ:function(a){return a.name}}
W.lz.prototype={
gaS:function(a){return a.style}}
W.bM.prototype={$isbM:1,$isz:1}
W.f4.prototype={
bQ:function(a,b){var t=this.fU(a,b)
return t!=null?t:""},
fU:function(a,b){if(W.Aj(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.An()+b)},
L:function(a,b){return a.item(b)},
gbq:function(a){return a.content},
gbD:function(a){return a.display},
sbD:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iY.prototype={}
W.qT.prototype={
bQ:function(a,b){var t=this.b
return J.zx(t.gaj(t),b)},
hi:function(a,b){var t
for(t=this.a,t=new H.et(t,t.gm(t),0,null,[H.N(t,0)]);t.I();)t.d.style[a]=b},
sbD:function(a,b){this.hi("display",b)},
fw:function(a){var t=P.dl(this.a,!0,null)
this.b=new H.ev(t,new W.qU(),[H.N(t,0),null])}}
W.jY.prototype={}
W.qU.prototype={
$1:function(a){return J.tZ(a)},
$S:function(){return{func:1,args:[,]}}}
W.iu.prototype={
gbq:function(a){return this.bQ(a,"content")},
gbD:function(a){return this.bQ(a,"display")}}
W.lA.prototype={
gaS:function(a){return a.style}}
W.lB.prototype={
gaS:function(a){return a.style}}
W.lG.prototype={
gcW:function(a){return a.files}}
W.f5.prototype={$isf5:1,$isz:1}
W.iv.prototype={
c_:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
L:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.lJ.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.ix.prototype={}
W.eh.prototype={$iseh:1}
W.iy.prototype={$isi:1,$isz:1}
W.iz.prototype={
gJ:function(a){return a.name}}
W.lK.prototype={
gJ:function(a){var t=a.name
if(P.wK()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.wK()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
C:function(a){return String(a)}}
W.lL.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.iA.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.iB.prototype={
C:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(this.gb2(a))+" x "+H.y(this.gaW(a))},
T:function(a,b){var t
if(b==null)return!1
t=J.ai(b)
if(!t.$isbL)return!1
return a.left===t.gbt(b)&&a.top===t.gbu(b)&&this.gb2(a)===t.gb2(b)&&this.gaW(a)===t.gaW(b)},
ga5:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb2(a)
q=this.gaW(a)
return W.yx(W.eR(W.eR(W.eR(W.eR(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gdd:function(a){return new P.dA(a.left,a.top,[null])},
gc2:function(a){return a.bottom},
gaW:function(a){return a.height},
gbt:function(a){return a.left},
gcc:function(a){return a.right},
gbu:function(a){return a.top},
gb2:function(a){return a.width},
gU:function(a){return a.x},
gV:function(a){return a.y},
$isbL:1,
$asbL:function(){},
$isz:1}
W.iC.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.x]},
$isr:1,
$asr:function(){return[P.x]},
$isn:1,
$asn:function(){return[P.x]},
$isz:1,
$isaE:1,
$asaE:function(){return[P.x]},
$isaz:1,
$asaz:function(){return[P.x]}}
W.iZ.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
W.ji.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
W.iD.prototype={
L:function(a,b){return a.item(b)}}
W.iE.prototype={
h:function(a,b){return a.add(b)},
Z:function(a,b){return a.contains(b)},
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.kx.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot modify list"))},
sm:function(a,b){throw H.j(new P.T("Cannot modify list"))},
gaS:function(a){return W.HF(this)},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.cc.prototype={
geh:function(a){return new W.r1(a)},
gej:function(a){return new W.r2(a)},
gc7:function(a){return P.GW(C.d.b0(a.offsetLeft),C.d.b0(a.offsetTop),C.d.b0(a.offsetWidth),C.d.b0(a.offsetHeight),null)},
C:function(a){return a.localName},
eB:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
aO:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.wM
if(t==null){t=H.a([],[W.e9])
s=new W.jW(t)
t.push(W.yv(null))
t.push(W.yz())
$.wM=s
d=s}else d=t
t=$.wL
if(t==null){t=new W.kJ(d)
$.wL=t
c=t}else{t.a=d
c=t}}if($.e2==null){t=document
s=t.implementation.createHTMLDocument("")
$.e2=s
$.ub=s.createRange()
s=$.e2
s.toString
r=s.createElement("base")
J.zD(r,t.baseURI)
$.e2.head.appendChild(r)}t=$.e2
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.e2
if(!!this.$isf0)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.e2.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.Z(C.a6,a.tagName)){$.ub.selectNodeContents(q)
p=$.ub.createContextualFragment(b)}else{q.innerHTML=b
p=$.e2.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.e2.body
if(q==null?t!=null:q!==t)J.zA(q)
c.cj(p)
document.adoptNode(p)
return p},
hD:function(a,b,c){return this.aO(a,b,c,null)},
fa:function(a,b,c,d){a.textContent=null
a.appendChild(this.aO(a,b,c,d))},
cl:function(a,b){return this.fa(a,b,null,null)},
di:function(a){return a.getBoundingClientRect()},
$iscc:1,
$isaf:1,
$isz:1,
$isi:1,
$isag:1,
gaS:function(a){return a.style},
gdW:function(a){return a.namespaceURI},
giE:function(a){return a.tagName}}
W.tu.prototype={
$1:function(a){return!!J.ai(a).$iscc},
$S:function(){return{func:1,args:[,]}}}
W.lR.prototype={
gJ:function(a){return a.name},
sao:function(a,b){return a.type=b}}
W.h4.prototype={
gJ:function(a){return a.name}}
W.lX.prototype={
gav:function(a){return a.error}}
W.Z.prototype={$isZ:1,$isz:1}
W.ag.prototype={
ee:function(a,b,c,d){if(c!=null)this.fE(a,b,c,!1)},
eK:function(a,b,c,d){if(c!=null)this.hd(a,b,c,!1)},
fE:function(a,b,c,d){return a.addEventListener(b,H.dn(c,1),!1)},
hd:function(a,b,c,d){return a.removeEventListener(b,H.dn(c,1),!1)},
$isag:1}
W.mq.prototype={
gJ:function(a){return a.name}}
W.ce.prototype={$isce:1,$isz:1,
gJ:function(a){return a.name}}
W.fd.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isfd:1,
$isaE:1,
$asaE:function(){return[W.ce]},
$isaz:1,
$asaz:function(){return[W.ce]},
$isz:1,
$isp:1,
$asp:function(){return[W.ce]},
$isr:1,
$asr:function(){return[W.ce]},
$isn:1,
$asn:function(){return[W.ce]}}
W.j_.prototype={
$asp:function(){return[W.ce]},
$asr:function(){return[W.ce]},
$asn:function(){return[W.ce]},
$isp:1,
$isr:1,
$isn:1}
W.jj.prototype={
$asp:function(){return[W.ce]},
$asr:function(){return[W.ce]},
$asn:function(){return[W.ce]},
$isp:1,
$isr:1,
$isn:1}
W.mr.prototype={
gav:function(a){return a.error}}
W.ms.prototype={
gJ:function(a){return a.name}}
W.mt.prototype={
gav:function(a){return a.error},
gm:function(a){return a.length}}
W.mv.prototype={
gaS:function(a){return a.style},
gde:function(a){return a.weight}}
W.mw.prototype={
h:function(a,b){return a.add(b)},
iV:function(a,b,c){return a.forEach(H.dn(b,3),c)},
a2:function(a,b){b=H.dn(b,3)
return a.forEach(b)}}
W.iU.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gJ:function(a){return a.name}}
W.cn.prototype={$iscn:1,$isz:1}
W.mI.prototype={$isz:1,
gm:function(a){return a.length}}
W.ff.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isz:1,
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
W.iW.prototype={
L:function(a,b){return a.item(b)}}
W.e6.prototype={
j3:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
ik:function(a,b,c,d){return a.open(b,c,d)},
giA:function(a){return W.I8(a.response)},
bf:function(a,b){return a.send(b)},
$ise6:1,
$isz:1,
giB:function(a){return a.responseText}}
W.mL.prototype={
$1:function(a){return J.zs(a)},
$S:function(){return{func:1,args:[W.e6]}}}
W.mM.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.ay()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aI(0,t)
else p.bB(a)},
$S:function(){return{func:1,args:[,]}}}
W.hm.prototype={}
W.mQ.prototype={
gJ:function(a){return a.name}}
W.hn.prototype={$ishn:1}
W.fh.prototype={$isfh:1,$iscc:1,$isaf:1,$isz:1,
aI:function(a,b){return a.complete.$1(b)}}
W.ho.prototype={$isho:1,$iscc:1,$isi:1,$isz:1,$isag:1,$isaf:1,
gcW:function(a){return a.files},
gJ:function(a){return a.name},
gaL:function(a){return a.value},
sao:function(a,b){return a.type=b}}
W.nm.prototype={
gJ:function(a){return a.name}}
W.jL.prototype={
gaL:function(a){return a.value}}
W.hz.prototype={
h:function(a,b){return a.add(b)}}
W.hA.prototype={$ishA:1,
gab:function(a){return a.href},
sab:function(a,b){return a.href=b},
sao:function(a,b){return a.type=b}}
W.nD.prototype={
C:function(a){return String(a)},
$isz:1,
gab:function(a){return a.href}}
W.nI.prototype={
gJ:function(a){return a.name}}
W.jP.prototype={
gav:function(a){return a.error}}
W.jQ.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nP.prototype={
sao:function(a,b){return a.type=b}}
W.nQ.prototype={
sao:function(a,b){return a.type=b}}
W.nR.prototype={
gbq:function(a){return a.content},
gJ:function(a){return a.name}}
W.nS.prototype={
gaL:function(a){return a.value}}
W.nT.prototype={
iR:function(a,b,c){return a.send(b,c)},
bf:function(a,b){return a.send(b)}}
W.hI.prototype={
gJ:function(a){return a.name}}
W.co.prototype={$isco:1,$isz:1}
W.jR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.co]},
$isaz:1,
$asaz:function(){return[W.co]},
$isz:1,
$isp:1,
$asp:function(){return[W.co]},
$isr:1,
$asr:function(){return[W.co]},
$isn:1,
$asn:function(){return[W.co]}}
W.ja.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.ju.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.e8.prototype={
gc7:function(a){var t,s,r,q,p
if(!!a.offsetX)return new P.dA(a.offsetX,a.offsetY,[null])
else{if(!J.ai(W.yK(a.target)).$iscc)throw H.j(new P.T("offsetX is only supported on elements"))
t=W.yK(a.target)
s=a.clientX
r=a.clientY
q=J.zu(J.zw(t))
p=q.a
if(typeof s!=="number")return s.ae()
if(typeof p!=="number")return H.a6(p)
q=q.b
if(typeof r!=="number")return r.ae()
if(typeof q!=="number")return H.a6(q)
return new P.dA(C.d.eQ(s-p),C.d.eQ(r-q),[null])}}}
W.o5.prototype={$isi:1,$isz:1}
W.o6.prototype={
gJ:function(a){return a.name}}
W.d0.prototype={
gbl:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.j(new P.da("No elements"))
if(s>1)throw H.j(new P.da("More than one element"))
return t.firstChild},
h:function(a,b){this.a.appendChild(b)},
aD:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.v(s,b)
t.replaceChild(c,s[b])},
gY:function(a){var t=this.a.childNodes
return new W.iS(t,t.length,-1,null,[H.ar(t,"bv",0)])},
a9:function(a,b,c,d,e){throw H.j(new P.T("Cannot setRange on Node list"))},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)},
bF:function(a,b,c,d){throw H.j(new P.T("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
sm:function(a,b){throw H.j(new P.T("Cannot set length on immutable List."))},
n:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
$ashC:function(){return[W.af]},
$asfq:function(){return[W.af]},
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]}}
W.af.prototype={
gii:function(a){return new W.d0(a)},
iw:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
C:function(a){var t=a.nodeValue
return t==null?this.fg(a):t},
Z:function(a,b){return a.contains(b)},
$isaf:1,
$isz:1,
gc9:function(a){return a.parentNode},
gd4:function(a){return a.previousSibling}}
W.jU.prototype={
d5:function(a){return a.previousNode()}}
W.jV.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.af]},
$isaz:1,
$asaz:function(){return[W.af]}}
W.jb.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.jv.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.ob.prototype={
sao:function(a,b){return a.type=b}}
W.oc.prototype={
gJ:function(a){return a.name},
sao:function(a,b){return a.type=b}}
W.og.prototype={
gaL:function(a){return a.value}}
W.oi.prototype={
gJ:function(a){return a.name},
gaL:function(a){return a.value}}
W.om.prototype={
gJ:function(a){return a.name},
gaL:function(a){return a.value}}
W.oo.prototype={$isi:1,$isz:1}
W.ea.prototype={
gJ:function(a){return a.name}}
W.ou.prototype={
gm:function(a){return a.length}}
W.cg.prototype={
L:function(a,b){return a.item(b)},
$iscg:1,
$isz:1,
gm:function(a){return a.length},
gJ:function(a){return a.name}}
W.k4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cg]},
$isr:1,
$asr:function(){return[W.cg]},
$isn:1,
$asn:function(){return[W.cg]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.cg]},
$isaz:1,
$asaz:function(){return[W.cg]}}
W.jc.prototype={
$asp:function(){return[W.cg]},
$asr:function(){return[W.cg]},
$asn:function(){return[W.cg]},
$isp:1,
$isr:1,
$isn:1}
W.jw.prototype={
$asp:function(){return[W.cg]},
$asr:function(){return[W.cg]},
$asn:function(){return[W.cg]},
$isp:1,
$isr:1,
$isn:1}
W.oA.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.oB.prototype={
bf:function(a,b){return a.send(b)}}
W.oF.prototype={
gaL:function(a){return a.value}}
W.oI.prototype={
di:function(a){return a.getBoundingClientRect()}}
W.oS.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.k7.prototype={
bf:function(a,b){return a.send(b)}}
W.k8.prototype={
sao:function(a,b){return a.type=b}}
W.fv.prototype={$isfv:1,$iscc:1,$isaf:1,$isz:1,
sao:function(a,b){return a.type=b}}
W.k9.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gJ:function(a){return a.name},
gaL:function(a){return a.value}}
W.p2.prototype={
gJ:function(a){return a.name}}
W.p5.prototype={$isag:1,$isi:1,$isz:1}
W.p6.prototype={
gJ:function(a){return a.name}}
W.p9.prototype={
gJ:function(a){return a.name}}
W.cp.prototype={$iscp:1,$isz:1}
W.kb.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cp]},
$isr:1,
$asr:function(){return[W.cp]},
$isn:1,
$asn:function(){return[W.cp]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.cp]},
$isaz:1,
$asaz:function(){return[W.cp]}}
W.h6.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.h9.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.pc.prototype={
sao:function(a,b){return a.type=b}}
W.hU.prototype={$ishU:1}
W.cq.prototype={$iscq:1,$isz:1,
gde:function(a){return a.weight}}
W.kc.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cq]},
$isr:1,
$asr:function(){return[W.cq]},
$isn:1,
$asn:function(){return[W.cq]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.cq]},
$isaz:1,
$asaz:function(){return[W.cq]}}
W.jd.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.jx.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.fw.prototype={$isfw:1,$isz:1}
W.pe.prototype={
gav:function(a){return a.error}}
W.ci.prototype={
L:function(a,b){return a.item(b)},
$isci:1,
$isz:1,
gm:function(a){return a.length}}
W.pf.prototype={
gJ:function(a){return a.name}}
W.pg.prototype={
gJ:function(a){return a.name}}
W.pl.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a2:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gak:function(a){var t=H.a([],[P.x])
this.a2(a,new W.pm(t))
return t},
gm:function(a){return a.length},
gX:function(a){return a.key(0)==null},
$isb0:1,
$asb0:function(){return[P.x,P.x]},
$isz:1}
W.pm.prototype={
$2:function(a,b){return this.a.push(a)},
$S:function(){return{func:1,args:[,,]}}}
W.pJ.prototype={
sao:function(a,b){return a.type=b}}
W.cj.prototype={$iscj:1,$isz:1,
gab:function(a){return a.href}}
W.eG.prototype={}
W.kg.prototype={
aO:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.cn(a,b,c,d)
t=W.Ao("<table>"+H.y(b)+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.d0(s).aD(0,J.zp(t))
return s}}
W.pQ.prototype={
aO:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.cn(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.M.aO(t.createElement("table"),b,c,d)
t.toString
t=new W.d0(t)
r=t.gbl(t)
r.toString
t=new W.d0(r)
q=t.gbl(t)
s.toString
q.toString
new W.d0(s).aD(0,new W.d0(q))
return s}}
W.pR.prototype={
aO:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cn(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.M.aO(t.createElement("table"),b,c,d)
t.toString
t=new W.d0(t)
r=t.gbl(t)
s.toString
r.toString
new W.d0(s).aD(0,new W.d0(r))
return s}}
W.hY.prototype={$ishY:1,
gbq:function(a){return a.content}}
W.hZ.prototype={$ishZ:1,
gJ:function(a){return a.name},
gaL:function(a){return a.value}}
W.cP.prototype={$isz:1}
W.cH.prototype={$isz:1}
W.pY.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isaE:1,
$asaE:function(){return[W.cH]},
$isaz:1,
$asaz:function(){return[W.cH]},
$isz:1,
$isp:1,
$asp:function(){return[W.cH]},
$isr:1,
$asr:function(){return[W.cH]},
$isn:1,
$asn:function(){return[W.cH]}}
W.je.prototype={
$asp:function(){return[W.cH]},
$asr:function(){return[W.cH]},
$asn:function(){return[W.cH]},
$isp:1,
$isr:1,
$isn:1}
W.jy.prototype={
$asp:function(){return[W.cH]},
$asr:function(){return[W.cH]},
$asn:function(){return[W.cH]},
$isp:1,
$isr:1,
$isn:1}
W.pZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isaE:1,
$asaE:function(){return[W.cP]},
$isaz:1,
$asaz:function(){return[W.cP]},
$isz:1,
$isp:1,
$asp:function(){return[W.cP]},
$isr:1,
$asr:function(){return[W.cP]},
$isn:1,
$asn:function(){return[W.cP]}}
W.h7.prototype={
$asp:function(){return[W.cP]},
$asr:function(){return[W.cP]},
$asn:function(){return[W.cP]},
$isp:1,
$isr:1,
$isn:1}
W.ha.prototype={
$asp:function(){return[W.cP]},
$asr:function(){return[W.cP]},
$asn:function(){return[W.cP]},
$isp:1,
$isr:1,
$isn:1}
W.q2.prototype={
gm:function(a){return a.length}}
W.cr.prototype={$iscr:1,$isz:1}
W.ki.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cr]},
$isr:1,
$asr:function(){return[W.cr]},
$isn:1,
$asn:function(){return[W.cr]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.cr]},
$isaz:1,
$asaz:function(){return[W.cr]}}
W.jf.prototype={
$asp:function(){return[W.cr]},
$asr:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isp:1,
$isr:1,
$isn:1}
W.jz.prototype={
$asp:function(){return[W.cr]},
$asr:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isp:1,
$isr:1,
$isn:1}
W.fz.prototype={$isfz:1,$isz:1}
W.kj.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.fA.prototype={}
W.q8.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.kk.prototype={
il:function(a){return a.parentNode()},
d5:function(a){return a.previousNode()}}
W.dC.prototype={}
W.qi.prototype={
C:function(a){return String(a)},
$isi:1,
$isz:1,
gab:function(a){return a.href}}
W.qm.prototype={$isz:1}
W.qn.prototype={
gm:function(a){return a.length}}
W.fB.prototype={$isfB:1,$isz:1}
W.kl.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.qs.prototype={
bf:function(a,b){return a.send(b)}}
W.ko.prototype={$isi:1,$isz:1,$isag:1,
gJ:function(a){return a.name}}
W.qz.prototype={$isag:1,$isi:1,$isz:1}
W.eL.prototype={$isi:1,$isz:1}
W.fC.prototype={$isfC:1,$isaf:1,$isz:1,
gJ:function(a){return a.name},
gdW:function(a){return a.namespaceURI}}
W.qR.prototype={
C:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(a.width)+" x "+H.y(a.height)},
T:function(a,b){var t,s,r
if(b==null)return!1
t=J.ai(b)
if(!t.$isbL)return!1
s=a.left
r=t.gbt(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbu(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb2(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaW(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga5:function(a){var t,s,r,q
t=J.cT(a.left)
s=J.cT(a.top)
r=J.cT(a.width)
q=J.cT(a.height)
return W.yx(W.eR(W.eR(W.eR(W.eR(0,t),s),r),q))},
gdd:function(a){return new P.dA(a.left,a.top,[null])},
$isbL:1,
$asbL:function(){},
$isz:1,
gc2:function(a){return a.bottom},
gaW:function(a){return a.height},
gbt:function(a){return a.left},
gcc:function(a){return a.right},
gbu:function(a){return a.top},
gb2:function(a){return a.width}}
W.i6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[P.bL]},
$isaz:1,
$asaz:function(){return[P.bL]},
$isz:1,
$isp:1,
$asp:function(){return[P.bL]},
$isr:1,
$asr:function(){return[P.bL]},
$isn:1,
$asn:function(){return[P.bL]}}
W.jg.prototype={
$asp:function(){return[P.bL]},
$asr:function(){return[P.bL]},
$asn:function(){return[P.bL]},
$isp:1,
$isr:1,
$isn:1}
W.jA.prototype={
$asp:function(){return[P.bL]},
$asr:function(){return[P.bL]},
$asn:function(){return[P.bL]},
$isp:1,
$isr:1,
$isn:1}
W.kv.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bM]},
$isr:1,
$asr:function(){return[W.bM]},
$isn:1,
$asn:function(){return[W.bM]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.bM]},
$isaz:1,
$asaz:function(){return[W.bM]}}
W.jh.prototype={
$asp:function(){return[W.bM]},
$asr:function(){return[W.bM]},
$asn:function(){return[W.bM]},
$isp:1,
$isr:1,
$isn:1}
W.jB.prototype={
$asp:function(){return[W.bM]},
$asr:function(){return[W.bM]},
$asn:function(){return[W.bM]},
$isp:1,
$isr:1,
$isn:1}
W.r_.prototype={$isi:1,$isz:1}
W.r0.prototype={
gaW:function(a){return a.height},
gb2:function(a){return a.width},
gU:function(a){return a.x},
gV:function(a){return a.y}}
W.kz.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cn]},
$isaz:1,
$asaz:function(){return[W.cn]},
$isz:1,
$isp:1,
$asp:function(){return[W.cn]},
$isr:1,
$asr:function(){return[W.cn]},
$isn:1,
$asn:function(){return[W.cn]}}
W.j1.prototype={
$asp:function(){return[W.cn]},
$asr:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$isr:1,
$isn:1}
W.jl.prototype={
$asp:function(){return[W.cn]},
$asr:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$isr:1,
$isn:1}
W.rm.prototype={$isag:1,$isi:1,$isz:1}
W.ic.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isn:1,
$asn:function(){return[W.af]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.af]},
$isaz:1,
$asaz:function(){return[W.af]}}
W.j2.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.jm.prototype={
$asp:function(){return[W.af]},
$asr:function(){return[W.af]},
$asn:function(){return[W.af]},
$isp:1,
$isr:1,
$isn:1}
W.rQ.prototype={$isag:1,$isi:1,$isz:1}
W.kE.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ci]},
$isr:1,
$asr:function(){return[W.ci]},
$isn:1,
$asn:function(){return[W.ci]},
$isz:1,
$isaE:1,
$asaE:function(){return[W.ci]},
$isaz:1,
$asaz:function(){return[W.ci]}}
W.j3.prototype={
$asp:function(){return[W.ci]},
$asr:function(){return[W.ci]},
$asn:function(){return[W.ci]},
$isp:1,
$isr:1,
$isn:1}
W.jn.prototype={
$asp:function(){return[W.ci]},
$asr:function(){return[W.ci]},
$asn:function(){return[W.ci]},
$isp:1,
$isr:1,
$isn:1}
W.kG.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cj]},
$isaz:1,
$asaz:function(){return[W.cj]},
$isz:1,
$isp:1,
$asp:function(){return[W.cj]},
$isr:1,
$asr:function(){return[W.cj]},
$isn:1,
$asn:function(){return[W.cj]}}
W.j4.prototype={
$asp:function(){return[W.cj]},
$asr:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$isr:1,
$isn:1}
W.jo.prototype={
$asp:function(){return[W.cj]},
$asr:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$isr:1,
$isn:1}
W.td.prototype={$isi:1,$isz:1}
W.te.prototype={$isi:1,$isz:1}
W.qN.prototype={
a2:function(a,b){var t,s,r,q,p
for(t=this.gak(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.c4)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gak:function(a){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.x])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.v(t,q)
p=t[q]
o=J.b1(p)
if(o.gdW(p)==null)s.push(o.gJ(p))}return s},
gX:function(a){return this.gak(this).length===0},
$isb0:1,
$asb0:function(){return[P.x,P.x]},
gdS:function(){return this.a}}
W.r1.prototype={
n:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gak(this).length}}
W.r2.prototype={
aJ:function(){var t,s,r,q,p
t=P.a3(null,null,null,P.x)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.c4)(s),++q){p=J.u_(s[q])
if(p.length!==0)t.h(0,p)}return t},
eX:function(a){this.a.className=a.bs(0," ")},
gm:function(a){return this.a.classList.length},
gX:function(a){return this.a.classList.length===0},
Z:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
gdS:function(){return this.a}}
W.r5.prototype={
aX:function(a,b,c,d){return W.eO(this.a,this.b,a,!1,H.N(this,0))},
eE:function(a,b,c){return this.aX(a,null,b,c)}}
W.i7.prototype={}
W.r6.prototype={
c4:function(a){if(this.b==null)return
this.ec()
this.b=null
this.d=null
return},
d1:function(a,b){if(this.b==null)return;++this.a
this.ec()},
eI:function(a){return this.d1(a,null)},
eM:function(a){if(this.b==null||this.a<=0)return;--this.a
this.ea()},
ea:function(){var t=this.d
if(t!=null&&this.a<=0)J.ze(this.b,this.c,t,!1)},
ec:function(){var t=this.d
if(t!=null)J.zB(this.b,this.c,t,!1)},
fz:function(a,b,c,d,e){this.ea()}}
W.r7.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.i9.prototype={
bo:function(a){return $.$get$yw().Z(0,W.h3(a))},
b7:function(a,b,c){var t,s,r
t=W.h3(a)
s=$.$get$w3()
r=s.n(0,H.y(t)+"::"+b)
if(r==null)r=s.n(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
fA:function(a){var t,s
t=$.$get$w3()
if(t.gX(t)){for(s=0;s<262;++s)t.i(0,C.a3[s],W.IK())
for(s=0;s<12;++s)t.i(0,C.r[s],W.IL())}},
$ise9:1,
geV:function(){return this.a}}
W.bv.prototype={
gY:function(a){return new W.iS(a,this.gm(a),-1,null,[H.ar(a,"bv",0)])},
h:function(a,b){throw H.j(new P.T("Cannot add to immutable List."))},
a9:function(a,b,c,d,e){throw H.j(new P.T("Cannot setRange on immutable List."))},
az:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aK:function(a,b,c,d){throw H.j(new P.T("Cannot modify an immutable List."))},
bF:function(a,b,c,d){throw H.j(new P.T("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.jW.prototype={
h:function(a,b){this.a.push(b)},
bo:function(a){return C.b.eg(this.a,new W.o8(a))},
b7:function(a,b,c){return C.b.eg(this.a,new W.o7(a,b,c))},
$ise9:1}
W.o8.prototype={
$1:function(a){return a.bo(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.o7.prototype={
$1:function(a){return a.b7(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.id.prototype={
bo:function(a){return this.a.Z(0,W.h3(a))},
b7:function(a,b,c){var t,s
t=W.h3(a)
s=this.c
if(s.Z(0,H.y(t)+"::"+b))return this.d.hq(c)
else if(s.Z(0,"*::"+b))return this.d.hq(c)
else{s=this.b
if(s.Z(0,H.y(t)+"::"+b))return!0
else if(s.Z(0,"*::"+b))return!0
else if(s.Z(0,H.y(t)+"::*"))return!0
else if(s.Z(0,"*::*"))return!0}return!1},
fC:function(a,b,c,d){var t,s,r
this.a.aD(0,c)
t=b.cg(0,new W.rR())
s=b.cg(0,new W.rS())
this.b.aD(0,t)
r=this.c
r.aD(0,C.E)
r.aD(0,s)},
$ise9:1,
geV:function(){return this.d}}
W.rR.prototype={
$1:function(a){return!C.b.Z(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.rS.prototype={
$1:function(a){return C.b.Z(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.t3.prototype={
b7:function(a,b,c){if(this.fm(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.wj(a).a.getAttribute("template")==="")return this.e.Z(0,b)
return!1}}
W.t4.prototype={
$1:function(a){return"TEMPLATE::"+H.y(a)},
$S:function(){return{func:1,args:[,]}}}
W.t2.prototype={
bo:function(a){var t=J.ai(a)
if(!!t.$ishS)return!1
t=!!t.$isck
if(t&&W.h3(a)==="foreignObject")return!1
if(t)return!0
return!1},
b7:function(a,b,c){if(b==="is"||C.c.ai(b,"on"))return!1
return this.bo(a)},
$ise9:1}
W.iS.prototype={
I:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.d2(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gS:function(){return this.d}}
W.qV.prototype={
ee:function(a,b,c,d){return H.b2(new P.T("You can only attach EventListeners to your own window."))},
eK:function(a,b,c,d){return H.b2(new P.T("You can only attach EventListeners to your own window."))},
$isag:1,
$isi:1}
W.e9.prototype={}
W.t5.prototype={
cj:function(a){}}
W.rP.prototype={}
W.kJ.prototype={
cj:function(a){new W.tb(this).$2(a,null)},
bz:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
hg:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.wj(a)
r=s.gdS().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.bE(n)}p="element unprintable"
try{p=J.cv(a)}catch(n){H.bE(n)}try{o=W.h3(a)
this.hf(a,b,t,p,o,s,r)}catch(n){if(H.bE(n) instanceof P.cU)throw n
else{this.bz(a,b)
window
m="Removing corrupted element "+H.y(p)
if(typeof console!="undefined")console.warn(m)}}},
hf:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.bz(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bo(a)){this.bz(a,b)
window
t="Removing disallowed element <"+H.y(e)+"> from "+J.cv(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.b7(a,"is",g)){this.bz(a,b)
window
t="Removing disallowed type extension <"+H.y(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gak(f)
s=H.a(t.slice(0),[H.N(t,0)])
for(r=f.gak(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.v(s,r)
q=s[r]
if(!this.a.b7(a,J.zJ(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.y(e)+" "+q+'="'+H.y(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.ai(a).$ishY)this.cj(a.content)}}
W.tb.prototype={
$2:function(a,b){var t,s,r,q,p,o
r=this.a
switch(a.nodeType){case 1:r.hg(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.bz(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.zq(t)}catch(q){H.bE(q)
p=t
if(r){o=J.b1(p)
if(o.gc9(p)!=null){o.gc9(p)
o.gc9(p).removeChild(p)}}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.af,W.af]}}}
P.t_.prototype={
bG:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
bd:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.ai(a)
if(!!s.$ise1)return new Date(a.a)
if(!!s.$isGY)throw H.j(new P.eH("structured clone of RegExp"))
if(!!s.$isce)return a
if(!!s.$isf_)return a
if(!!s.$isfd)return a
if(!!s.$ishn)return a
if(!!s.$isfm||!!s.$isew)return a
if(!!s.$isb0){r=this.bG(a)
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
s.a2(a,new P.t1(t,this))
return t.a}if(!!s.$isp){r=this.bG(a)
t=this.b
if(r>=t.length)return H.v(t,r)
o=t[r]
if(o!=null)return o
return this.hC(a,r)}throw H.j(new P.eH("structured clone of other type"))},
hC:function(a,b){var t,s,r,q,p
t=J.bb(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.v(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.bd(t.n(a,p))
if(p>=r.length)return H.v(r,p)
r[p]=q}return r}}
P.t1.prototype={
$2:function(a,b){this.a.a[a]=this.b.bd(b)},
$S:function(){return{func:1,args:[,,]}}}
P.qG.prototype={
bG:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
bd:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.e1(s,!0)
r.du(s,!0)
return r}if(a instanceof RegExp)throw H.j(new P.eH("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.Iv(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bG(a)
r=this.b
o=r.length
if(p>=o)return H.v(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.jM()
t.a=n
if(p>=o)return H.v(r,p)
r[p]=n
this.hV(a,new P.qH(t,this))
return t.a}if(a instanceof Array){p=this.bG(a)
r=this.b
if(p>=r.length)return H.v(r,p)
n=r[p]
if(n!=null)return n
o=J.bb(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.v(r,p)
r[p]=n
if(typeof m!=="number")return H.a6(m)
r=J.de(n)
l=0
for(;l<m;++l)r.i(n,l,this.bd(o.n(a,l)))
return n}return a}}
P.qH.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bd(b)
J.il(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.t0.prototype={}
P.kr.prototype={
hV:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.c4)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.ty.prototype={
$1:function(a){return this.a.aI(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.tz.prototype={
$1:function(a){return this.a.bB(a)},
$S:function(){return{func:1,args:[,]}}}
P.lv.prototype={
ed:function(a){if($.$get$wC().b.test(a))return a
throw H.j(P.dI(a,"value","Not a valid class token"))},
C:function(a){return this.aJ().bs(0," ")},
gY:function(a){var t,s
t=this.aJ()
s=new P.dE(t,t.r,null,null,[null])
s.c=t.e
return s},
a2:function(a,b){this.aJ().a2(0,b)},
aE:function(a,b){var t=this.aJ()
return new H.h2(t,b,[H.N(t,0),null])},
gX:function(a){return this.aJ().a===0},
gm:function(a){return this.aJ().a},
Z:function(a,b){if(typeof b!=="string")return!1
this.ed(b)
return this.aJ().Z(0,b)},
cZ:function(a){return this.Z(0,a)?a:null},
h:function(a,b){this.ed(b)
return this.ig(0,new P.lw(b))},
a8:function(a,b){return this.aJ().a8(0,!0)},
at:function(a){return this.a8(a,!0)},
aB:function(a,b){var t=this.aJ()
return H.p7(t,b,H.N(t,0))},
ig:function(a,b){var t,s
t=this.aJ()
s=b.$1(t)
this.eX(t)
return s},
$iseC:1,
$aseC:function(){return[P.x]},
$isr:1,
$asr:function(){return[P.x]},
$isn:1,
$asn:function(){return[P.x]}}
P.lw.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.lH.prototype={
gJ:function(a){return a.name}}
P.tm.prototype={
$1:function(a){this.b.aI(0,new P.kr([],[],!1).bd(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mT.prototype={
gJ:function(a){return a.name}}
P.od.prototype={
c_:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.h1(a,b,c)
q=P.I7(t)
return q}catch(p){s=H.bE(p)
r=H.ct(p)
q=P.wZ(s,r,null)
return q}},
h:function(a,b){return this.c_(a,b,null)},
h1:function(a,b,c){return a.add(new P.t0([],[]).bd(b))},
gJ:function(a){return a.name}}
P.hQ.prototype={
gav:function(a){return a.error}}
P.q6.prototype={
gav:function(a){return a.error}}
P.rs.prototype={
bK:function(a){if(a<=0||a>4294967296)throw H.j(P.y1("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
d_:function(){return Math.random()}}
P.rG.prototype={
b4:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.ar(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bK:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.j(P.y1("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.b4()
return(this.a&t)>>>0}do{this.b4()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
d_:function(){this.b4()
var t=this.a
this.b4()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
fB:function(a){var t,s,r,q,p,o,n,m
t=J.dH(a,0)?-1:0
do{if(typeof a!=="number")return a.aQ()
s=(a&4294967295)>>>0
a=C.d.ar(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.ar(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.ar(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.ar(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.ar(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.ar(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.ar(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.b4()
this.b4()
this.b4()
this.b4()}}
P.dA.prototype={
C:function(a){return"Point("+H.y(this.a)+", "+H.y(this.b)+")"},
T:function(a,b){var t,s
if(b==null)return!1
if(!(b instanceof P.dA))return!1
t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
ga5:function(a){var t,s
t=J.cT(this.a)
s=J.cT(this.b)
return P.yy(P.ia(P.ia(0,t),s))},
R:function(a,b){var t,s,r,q
t=this.a
s=J.b1(b)
r=s.gU(b)
if(typeof t!=="number")return t.R()
if(typeof r!=="number")return H.a6(r)
q=this.b
s=s.gV(b)
if(typeof q!=="number")return q.R()
if(typeof s!=="number")return H.a6(s)
return new P.dA(t+r,q+s,this.$ti)},
al:function(a,b){var t,s
t=this.a
if(typeof t!=="number")return t.al()
s=this.b
if(typeof s!=="number")return s.al()
return new P.dA(t*b,s*b,this.$ti)},
gU:function(a){return this.a},
gV:function(a){return this.b}}
P.rH.prototype={
gcc:function(a){var t=this.a
if(typeof t!=="number")return t.R()
return t+this.c},
gc2:function(a){var t=this.b
if(typeof t!=="number")return t.R()
return t+this.d},
C:function(a){return"Rectangle ("+H.y(this.a)+", "+H.y(this.b)+") "+this.c+" x "+this.d},
T:function(a,b){var t,s,r,q
if(b==null)return!1
t=J.ai(b)
if(!t.$isbL)return!1
s=this.a
r=t.gbt(b)
if(s==null?r==null:s===r){r=this.b
q=t.gbu(b)
if(r==null?q==null:r===q){if(typeof s!=="number")return s.R()
if(s+this.c===t.gcc(b)){if(typeof r!=="number")return r.R()
t=r+this.d===t.gc2(b)}else t=!1}else t=!1}else t=!1
return t},
ga5:function(a){var t,s,r,q
t=this.a
s=J.cT(t)
r=this.b
q=J.cT(r)
if(typeof t!=="number")return t.R()
if(typeof r!=="number")return r.R()
return P.yy(P.ia(P.ia(P.ia(P.ia(0,s),q),t+this.c&0x1FFFFFFF),r+this.d&0x1FFFFFFF))},
gdd:function(a){return new P.dA(this.a,this.b,this.$ti)}}
P.bL.prototype={$asbL:null,
gbt:function(a){return this.a},
gbu:function(a){return this.b},
gb2:function(a){return this.c},
gaW:function(a){return this.d}}
P.kW.prototype={$isi:1,$isz:1,
gab:function(a){return a.href}}
P.ee.prototype={$isi:1,$isz:1}
P.m_.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m0.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m1.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m2.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m3.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m4.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m5.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m6.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m7.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.m8.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
gab:function(a){return a.href}}
P.m9.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.ma.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.mb.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.mc.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.md.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.me.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.mf.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.mg.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.mu.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
gab:function(a){return a.href}}
P.my.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.dx.prototype={}
P.e5.prototype={$isi:1,$isz:1}
P.mR.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
gab:function(a){return a.href}}
P.d7.prototype={$isz:1}
P.np.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d7]},
$isr:1,
$asr:function(){return[P.d7]},
$isn:1,
$asn:function(){return[P.d7]},
$isz:1}
P.j5.prototype={
$asp:function(){return[P.d7]},
$asr:function(){return[P.d7]},
$asn:function(){return[P.d7]},
$isp:1,
$isr:1,
$isn:1}
P.jp.prototype={
$asp:function(){return[P.d7]},
$asr:function(){return[P.d7]},
$asn:function(){return[P.d7]},
$isp:1,
$isr:1,
$isn:1}
P.nN.prototype={$isi:1,$isz:1}
P.nO.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.d9.prototype={$isz:1}
P.o9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d9]},
$isr:1,
$asr:function(){return[P.d9]},
$isn:1,
$asn:function(){return[P.d9]},
$isz:1}
P.j6.prototype={
$asp:function(){return[P.d9]},
$asr:function(){return[P.d9]},
$asn:function(){return[P.d9]},
$isp:1,
$isr:1,
$isn:1}
P.jq.prototype={
$asp:function(){return[P.d9]},
$asr:function(){return[P.d9]},
$asn:function(){return[P.d9]},
$isp:1,
$isr:1,
$isn:1}
P.os.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
gab:function(a){return a.href}}
P.ox.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.oy.prototype={
gm:function(a){return a.length}}
P.oK.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.oL.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.hS.prototype={$ishS:1,$isi:1,$isz:1,
gab:function(a){return a.href},
sao:function(a,b){return a.type=b}}
P.pH.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.x]},
$isr:1,
$asr:function(){return[P.x]},
$isn:1,
$asn:function(){return[P.x]},
$isz:1}
P.j7.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
P.jr.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
P.pK.prototype={
sao:function(a,b){return a.type=b}}
P.l2.prototype={
aJ:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a3(null,null,null,P.x)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.c4)(r),++p){o=J.u_(r[p])
if(o.length!==0)s.h(0,o)}return s},
eX:function(a){this.a.setAttribute("class",a.bs(0," "))}}
P.ck.prototype={
gej:function(a){return new P.l2(a)},
aO:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.e9])
t.push(W.yv(null))
t.push(W.yz())
t.push(new W.t2())
c=new W.kJ(new W.jW(t))}s='<svg version="1.1">'+H.y(b)+"</svg>"
t=document
r=t.body
q=(r&&C.w).hD(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.d0(q)
o=t.gbl(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
eB:function(a,b,c,d,e){throw H.j(new P.T("Cannot invoke insertAdjacentHtml on SVG."))},
$isck:1,
$isag:1,
$isi:1,
$isz:1}
P.pN.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.pP.prototype={$isi:1,$isz:1}
P.kh.prototype={}
P.pX.prototype={$isi:1,$isz:1,
gab:function(a){return a.href}}
P.i0.prototype={
gU:function(a){return a.x},
gV:function(a){return a.y}}
P.db.prototype={$isz:1}
P.q7.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.db]},
$isr:1,
$asr:function(){return[P.db]},
$isn:1,
$asn:function(){return[P.db]},
$isz:1}
P.j8.prototype={
$asp:function(){return[P.db]},
$asr:function(){return[P.db]},
$asn:function(){return[P.db]},
$isp:1,
$isr:1,
$isn:1}
P.js.prototype={
$asp:function(){return[P.db]},
$asr:function(){return[P.db]},
$asn:function(){return[P.db]},
$isp:1,
$isr:1,
$isn:1}
P.qj.prototype={$isi:1,$isz:1,
gU:function(a){return a.x},
gV:function(a){return a.y},
gab:function(a){return a.href}}
P.qo.prototype={$isi:1,$isz:1}
P.qp.prototype={$isi:1,$isz:1}
P.i8.prototype={$isi:1,$isz:1,
gab:function(a){return a.href}}
P.rM.prototype={$isi:1,$isz:1}
P.rN.prototype={$isi:1,$isz:1}
P.rO.prototype={$isi:1,$isz:1}
P.bi.prototype={}
P.dc.prototype={$isp:1,
$asp:function(){return[P.E]},
$isr:1,
$asr:function(){return[P.E]},
$isn:1,
$asn:function(){return[P.E]}}
P.fS.prototype={$isfS:1,$isz:1,
gm:function(a){return a.length}}
P.eX.prototype={$iseX:1,$isz:1,
gc3:function(a){return a.buffer}}
P.fT.prototype={
fN:function(a,b,c,d){return a.decodeAudioData(b,H.dn(c,1),H.dn(d,1))},
hG:function(a,b){var t,s,r
t=P.fS
s=new P.bk(0,$.ap,null,[t])
r=new P.dX(s,[t])
this.fN(a,b,new P.l3(r),new P.l4(r))
return s}}
P.l3.prototype={
$1:function(a){this.a.aI(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.l4.prototype={
$1:function(a){var t=this.a
if(a==null)t.bB("")
else t.bB(a)},
$S:function(){return{func:1,args:[,]}}}
P.bF.prototype={}
P.eZ.prototype={}
P.lc.prototype={
sao:function(a,b){return a.type=b}}
P.lu.prototype={
gc3:function(a){return a.buffer}}
P.k0.prototype={
sao:function(a,b){return a.type=b}}
P.kY.prototype={
gJ:function(a){return a.name}}
P.oO.prototype={$isz:1}
P.oP.prototype={$isi:1,$isz:1}
P.tc.prototype={$isi:1,$isz:1}
P.kd.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bz(b,a,null,null,null))
return P.yZ(a.item(b))},
i:function(a,b,c){throw H.j(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.j(new P.T("Cannot resize immutable List."))},
W:function(a,b){return this.n(a,b)},
L:function(a,b){return P.yZ(a.item(b))},
$isp:1,
$asp:function(){return[P.b0]},
$isr:1,
$asr:function(){return[P.b0]},
$isn:1,
$asn:function(){return[P.b0]},
$isz:1}
P.j9.prototype={
$asp:function(){return[P.b0]},
$asr:function(){return[P.b0]},
$asn:function(){return[P.b0]},
$isp:1,
$isr:1,
$isn:1}
P.jt.prototype={
$asp:function(){return[P.b0]},
$asr:function(){return[P.b0]},
$asn:function(){return[P.b0]},
$isp:1,
$isr:1,
$isn:1}
T.fO.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
gX:function(a){return this.a.length===0},
gY:function(a){var t=this.a
return new J.eV(t,t.length,0,null,[H.N(t,0)])},
$ashu:function(){return[T.fP]},
$asn:function(){return[T.fP]},
gcW:function(a){return this.a}}
T.fP.prototype={
gbq:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fg(C.C)
r=T.fg(C.D)
q=T.xQ(0,this.b)
new T.iX(s,q,0,0,0,t,r).dT()
r=q.c.buffer
q=q.a
r.toString
q=H.cN(r,0,q)
this.cy=q
t=q}else{t=s.bO()
this.cy=t}this.ch=0}}return t},
C:function(a){return this.a},
gJ:function(a){return this.a}}
T.df.prototype={
C:function(a){return"ArchiveException: "+this.a}}
T.hp.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ae()
if(typeof r!=="number")return H.a6(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
if(typeof b!=="number")return H.a6(b)
s+=b
if(s>>>0!==s||s>=t.length)return H.v(t,s)
return t[s]},
b3:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a6(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.ae()
if(typeof s!=="number")return H.a6(s)
b=t-(a-s)}return T.uB(this.a,this.d,b,a)},
ba:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.R()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a6(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s>>>0!==s||s>=q.length)return H.v(q,s)
q[s]}return-1},
br:function(a,b){return this.ba(a,b,0)},
aB:function(a,b){var t=this.b
if(typeof t!=="number")return t.R()
if(typeof b!=="number")return H.a6(b)
this.b=t+b},
d8:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.ae()
if(typeof s!=="number")return H.a6(s)
r=this.b3(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.ae()
if(typeof p!=="number")return H.a6(p)
if(typeof s!=="number")return s.R()
this.b=s+(t-(q-p))
return r},
cb:function(a){return P.pI(this.d8(a).bO(),0,null)},
a3:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
r=s+1
this.b=r
q=t.length
if(s>>>0!==s||s>=q)return H.v(t,s)
p=t[s]&255
this.b=r+1
if(r>>>0!==r||r>=q)return H.v(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a7:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
r=s+1
this.b=r
q=t.length
if(s>>>0!==s||s>=q)return H.v(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.v(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.v(t,s)
n=t[s]&255
this.b=r+1
if(r>>>0!==r||r>=q)return H.v(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aZ:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.R()
r=s+1
this.b=r
q=t.length
if(s>>>0!==s||s>=q)return H.v(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.v(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.v(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.v(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.v(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r>>>0!==r||r>=q)return H.v(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s>>>0!==s||s>=q)return H.v(t,s)
j=t[s]&255
this.b=r+1
if(r>>>0!==r||r>=q)return H.v(t,r)
i=t[r]&255
if(this.d===1)return(C.a.au(p,56)|C.a.au(o,48)|C.a.au(n,40)|C.a.au(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.au(i,56)|C.a.au(j,48)|C.a.au(k,40)|C.a.au(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bO:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ae()
if(typeof r!=="number")return H.a6(r)
q=t-(s-r)
t=this.a
r=J.ai(t)
if(!!r.$isdc){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cN(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.yL(r.cm(t,s,p>o?o:p)))},
fp:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gc3:function(a){return this.a},
gc7:function(a){return this.b}}
T.oj.prototype={
iK:function(a,b){var t,s,r,q
if(b==null)b=J.c5(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cA(s-q)
C.t.az(r,t,s,a)
this.a+=b},
df:function(a){return this.iK(a,null)},
iM:function(a){var t,s,r,q
t=J.bb(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
this.cA(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a6(r)
C.t.a9(q,s,s+r,t.gc3(a),t.gc7(a))
r=this.a
t=t.gm(a)
if(typeof t!=="number")return H.a6(t)
this.a=r+t},
b3:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cN(t,a,b-a)},
dr:function(a){return this.b3(a,null)},
cA:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.b2(P.dg("Invalid length "+H.y(s)))
r=new Uint8Array(s)
q=this.c
C.t.az(r,0,q.length,q)
this.c=r},
fR:function(){return this.cA(null)},
gm:function(a){return this.a}}
T.qC.prototype={
hc:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.b3(this.a-20,20)
if(s.a7()!==117853008){a.b=t
return}s.a7()
r=s.aZ()
s.a7()
a.b=r
if(a.a7()!==101075792){a.b=t
return}a.aZ()
a.a3()
a.a3()
q=a.a7()
p=a.a7()
o=a.aZ()
n=a.aZ()
m=a.aZ()
l=a.aZ()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fS:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.ae()
if(typeof r!=="number")return H.a6(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a7()===101010256){a.b=t
return q}}throw H.j(new T.df("Could not find End of Central Directory Record"))},
fu:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fS(a)
this.a=t
a.b=t
a.a7()
this.b=a.a3()
this.c=a.a3()
this.d=a.a3()
this.e=a.a3()
this.f=a.a7()
this.r=a.a7()
s=a.a3()
if(s>0)this.x=a.cb(s)
this.hc(a)
r=a.b3(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.R()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.ay()
if(!!(p>=t+o))break
if(r.a7()!==33639248)break
p=new T.qE(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a3()
p.b=r.a3()
p.c=r.a3()
p.d=r.a3()
p.e=r.a3()
p.f=r.a3()
p.r=r.a7()
p.x=r.a7()
p.y=r.a7()
n=r.a3()
m=r.a3()
l=r.a3()
p.z=r.a3()
p.Q=r.a3()
p.ch=r.a7()
o=r.a7()
p.cx=o
if(n>0)p.cy=r.cb(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.ae()
j=r.b3(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.ae()
if(typeof g!=="number")return H.a6(g)
if(typeof k!=="number")return k.R()
r.b=k+(i-(h-g))
p.db=j.bO()
f=j.a3()
e=j.a3()
if(f===1){if(e>=8)p.y=j.aZ()
if(e>=16)p.x=j.aZ()
if(e>=24){o=j.aZ()
p.cx=o}if(e>=28)p.z=j.a7()}}if(l>0)p.dx=r.cb(l)
a.b=o
p.dy=T.HA(a,p)
q.push(p)}}}
T.qD.prototype={
gbq:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fg(C.C)
q=T.fg(C.D)
t=T.xQ(0,t)
new T.iX(s,t,0,0,0,r,q).dT()
q=t.c.buffer
t=t.a
q.toString
t=H.cN(q,0,t)
this.cy=t
this.d=0}else{t=s.bO()
this.cy=t}}return t},
C:function(a){return this.z},
fv:function(a,b){var t,s,r,q
t=a.a7()
this.a=t
if(t!==67324752)throw H.j(new T.df("Invalid Zip Signature"))
this.b=a.a3()
this.c=a.a3()
this.d=a.a3()
this.e=a.a3()
this.f=a.a3()
this.r=a.a7()
this.x=a.a7()
this.y=a.a7()
s=a.a3()
r=a.a3()
this.z=a.cb(s)
this.Q=a.d8(r).bO()
this.cx=a.d8(this.ch.x)
if((this.c&8)!==0){q=a.a7()
if(q===134695760)this.r=a.a7()
else this.r=q
this.x=a.a7()
this.y=a.a7()}}}
T.qE.prototype={
C:function(a){return this.cy}}
T.qB.prototype={
hH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.Hz(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.E],p=0;p<t.length;t.length===r||(0,H.c4)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.dm()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fP(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dY(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.uB(k,0,null,0)}else if(k instanceof T.hp){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hp(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.hR(m,"/")
j.y=n.r
s.push(j)}return new T.fO(s,null)}}
T.mN.prototype={
fo:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.au(1,this.b)
r=H.cz(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.v(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.v(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iX.prototype={
dT:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.R()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.ay()
if(!!(r>=s+q))break
if(!this.h8())break}},
h8:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.R()
if(typeof s!=="number")return s.ay()
if(s>=r+q)return!1
p=this.aC(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.aC(16)
s=this.aC(16)
if(n!==0&&n!==(s^65535)>>>0)H.b2(new T.df("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.ae()
r=q-r
if(n>s-r)H.b2(new T.df("Input buffer is broken"))
m=t.b3(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.ae()
if(typeof l!=="number")return H.a6(l)
if(typeof s!=="number")return s.R()
t.b=s+(r-(q-l))
this.b.iM(m)
break
case 1:this.dM(this.f,this.r)
break
case 2:this.h9()
break
default:throw H.j(new T.df("unknown BTYPE: "+o))}return(p&1)===0},
aC:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.R()
if(typeof r!=="number")return r.ay()
if(r>=q+p)throw H.j(new T.df("input buffer is broken"))
q=t.a
t.b=r+1
if(r>>>0!==r||r>=q.length)return H.v(q,r)
o=q[r]
this.c=(this.c|C.a.aA(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.au(1,a)
this.c=C.a.e8(t,a)
this.d=s-a
return(t&r-1)>>>0},
cI:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.R()
if(typeof p!=="number")return p.ay()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p>>>0!==p||p>=o.length)return H.v(o,p)
m=o[p]
this.c=(this.c|C.a.aA(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.au(1,s)-1)>>>0
if(p>=t.length)return H.v(t,p)
l=t[p]
k=l>>>16
this.c=C.a.e8(r,k)
this.d=q-k
return l&65535},
h9:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.aC(5)+257
s=this.aC(5)+1
r=this.aC(4)+4
q=H.cz(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.v(C.K,o)
n=C.K[o]
m=this.aC(3)
if(n>=q)return H.v(p,n)
p[n]=m}l=T.fg(p)
k=new Uint8Array(H.cz(t))
j=new Uint8Array(H.cz(s))
i=this.dL(t,l,k)
h=this.dL(s,l,j)
this.dM(T.fg(i),T.fg(h))},
dM:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cI(a)
if(s>285)throw H.j(new T.df("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fR()
r=t.c
q=t.a++
if(q>>>0!==q||q>=r.length)return H.v(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.v(C.I,p)
o=C.I[p]+this.aC(C.a5[p])
n=this.cI(b)
if(n<=29){if(n>=30)return H.v(C.F,n)
m=C.F[n]+this.aC(C.a4[n])
for(r=-m;o>m;){t.df(t.dr(r))
o-=m}if(o===m)t.df(t.dr(r))
else t.df(t.b3(r,o-m))}else throw H.j(new T.df("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.ae();--r
t.b=r
if(r<0)t.b=0}},
dL:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cI(b)
switch(q){case 16:p=3+this.aC(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=s}break
case 17:p=3+this.aC(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=0}s=0
break
case 18:p=11+this.aC(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.j(new T.df("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kX.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Math Book",H.a([$.M,$.Y,$.av],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Giant Map",H.a([$.M,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Microscope",H.a([$.F,$.Y,$.b9],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Star Chart",H.a([$.M,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("History Book",H.a([$.M,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Radioactive Rock",H.a([$.c0,$.ax],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Compass",H.a([$.F,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.hg,$.m)
q.i(0,$.bf,$.m)
q.i(0,$.fb,$.l)
q.i(0,$.b_,$.L)
q.i(0,$.cC,$.l)
p=$.o
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.t
o=o+n+" to stop "
m=$.K
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.Gs
n=[U.b]
q.i(0,new R.a1("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.D)
m=$.o
q.i(0,new R.a1("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.t+" to stop "+$.K+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.y0(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
p="The "+m+" finds a massive library, filled with books. The "
l=$.t
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.B
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a1("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.ft(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.f7,$.L)
s.i(0,$.cC,$.m)
p=$.o
o="The "+p+"  is approached by a "
l=$.t
s.i(0,new R.a1("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.K+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p=$.o
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.t
s.i(0,new R.a1("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.K+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.ey(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
s.i(0,new R.a1("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.t+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.ft(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.f7,$.L)
t.i(0,$.cC,$.m)
t.i(0,$.bY,$.L)
t.i(0,$.um,$.L)
r=$.o
q="The "+r+"  is approached by a "
p=$.t
q=q+p+" who offers them a grant to study "
o=$.ad
t.i(0,new R.a1("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.K+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.ft(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
o=$.t
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.K
r=r+p+".  It is up to the "
q=$.o
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ad
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.Gy
t.i(0,new R.a1("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.eb(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
t.i(0,new R.a1("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.K+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.t+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(s,t,null),$.aC)}}
K.bU.prototype={}
L.fQ.prototype={
E:function(){var t,s
t=Q.I(null,null,A.a2)
s=A.h("Perfectly Generic Object",H.a([],[G.a_]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d5,$.l)
q.i(0,$.bf,$.L)
q.i(0,$.dO,$.l)
q.i(0,$.bY,$.m)
q.i(0,$.e3,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.B
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.ch+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.R("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
j=this.f
j.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.f9,$.l)
s.i(0,$.el,$.L)
s.i(0,$.f8,$.m)
s.i(0,$.cV,$.l)
s.i(0,$.cd,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.B
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.ch+". The "+p+" has won! "
s.i(0,new R.R("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.W(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
j.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.bf,$.L)
t.i(0,$.c7,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.K
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.B
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.ch+". The "+r+" has won! "
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.vA(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
r="The "+l+" learns that all of the local "
m=$.t
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.B
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.ch+". The "+l+" has won! "
t.i(0,new R.R("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.W(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
j.i(0,new X.G(s,t,null),$.ao)},
C:function(a){return this.Q},
af:function(a,b,c,d,e){var t=this.Q
this.r=new X.iI("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.ip]),H.a([],[M.hc]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.E()
this.F()
t=this.e
if($.$get$l_().a_(0,t))H.b2("Duplicate aspect id for "+this.C(0)+": "+t+" is already registered for "+J.cv($.$get$l_().n(0,t))+".")
$.$get$l_().i(0,t,this)},
gJ:function(a){return this.Q}}
L.aG.prototype={}
M.l1.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Barbells",H.a([$.ac,$.c9,$.F],s),null,!1,"Strength Building Metal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Basketball",H.a([$.eo,$.ca],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Baseball Bat",H.a([$.jE,$.X],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Rubber Ball",H.a([$.eo,$.ca],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Megaphone",H.a([$.aK,$.a9],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Hockey Stick",H.a([$.jE,$.X,$.dk],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Trophy",H.a([$.F,$.bh],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Boxing Glove",H.a([$.xf,$.ca],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Yoga Mat",H.a([$.ca,$.b7],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.e4,$.L)
q.i(0,$.bZ,$.m)
q.i(0,$.cV,$.L)
p=$.o
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.t
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.K+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.a1("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.D)
m=$.o
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.t
q.i(0,new R.a1("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.K+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.eb(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
n="The "+m+"  wanders into a bunch of "
p=$.t
q.i(0,new R.a1("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hP(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.e4,$.m)
t.i(0,$.fc,$.m)
t.i(0,$.bZ,$.m)
s=$.o
r="The "+s+" finds a team of underdog "
p=$.t
t.i(0,new R.a1("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.y0(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.t
s="A group of "+p+"s approach the "
r=$.o
s=s+r+". Apparently their sports team lost their coach to the "+$.B+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.K
t.i(0,new R.a1("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.eb(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
k=$.t
p="A group of "+k+"s approach the "
r=$.o
t.i(0,new R.a1("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.B+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ad+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(q,t,null),$.aC)}}
U.l5.prototype={
P:function(a,b){var t=0,s=P.bo(),r,q,p,o
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$ws()
p=q.createBufferSource()
o=p
t=3
return P.cs(J.zk(q,b),$async$P)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdr:function(){return[P.eX]},
$asc8:function(){return[P.eX,P.bi]}}
U.nF.prototype={
aY:function(a){return"audio/mpeg"}}
U.of.prototype={
aY:function(a){return"audio/ogg"}}
U.pE.prototype={
P:function(a,b){var t=0,s=P.bo(),r,q,p
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=W.A8(b)
p=new W.i7(q,"canplaythrough",!1,[W.Z])
t=3
return P.cs(p.gaj(p),$async$P)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asiG:function(){return[W.eY]},
$asc8:function(){return[W.eY,P.x]}}
U.pF.prototype={}
U.pG.prototype={}
E.tR.prototype={
$1:function(a){var t,s,r,q
t=P.x
t=new H.u(0,null,null,null,null,null,0,[t,t])
for(s=this.b,r=0;r<6;++r){a=s[r]
t.i(0,a.id,J.zv(a))}q=document.createElement("textarea")
q.value=C.p.eo(t)
this.a.appendChild(q)},
$S:function(){return{func:1,args:[W.Z]}}}
O.l7.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Cod Piece",H.a([$.Q,$.a0,$.aH,$.P,$.X],s),"God damn it, MI. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Poisoned Candy",H.a([$.uF,$.P,$.bN],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Cursed Lyre",H.a([$.aD,$.X,$.bm,$.P,$.aa],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Snare Trap",H.a([$.Q,$.aD,$.P,$.bg],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cA,$.l)
t.i(0,$.hj,$.l)
t.i(0,$.cx,$.l)
t.i(0,$.dw,$.l)
t.i(0,$.cB,$.l)
t.i(0,$.f6,$.l)
r="After all the bullshit the "+$.B+" has put the native "
q=$.t
r=r+q+"s through, the "
p=$.o
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aI+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.K
m=[U.b]
t.i(0,new R.a7("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.A(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.D)
p=$.t
n="A group of jubilant "+p+"s are following the "
q=$.o
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.K
t.i(0,new R.a7("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.B+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
q=$.o
t.i(0,new R.a7("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.B+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.A(),!1,!1,new Y.lm("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.D)
q="The "+$.B+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.o
q=q+r+" organizes a huge festival for all the "
p=$.t
t.i(0,new R.bB("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Y.pW.prototype={
P:function(a,b){var t=0,s=P.bo(),r
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$aseF:function(){return[P.x]},
$asc8:function(){return[P.x,P.x]}}
Y.oJ.prototype={
aY:function(a){return"application/octet-stream"},
P:function(a,b){var t=0,s=P.bo(),r
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdr:function(){return[P.bi]},
$asc8:function(){return[P.bi,P.bi]}}
T.ld.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Mystical Vial of Blood",H.a([$.b9,$.bm,$.S,$.aL],s),null,!1,"Vial of Not-ABs Oil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Bananaphone",H.a([$.as,$.bm,$.S,$.b8],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Friendship Bracelet",H.a([$.Q,$.bm,$.S,$.aL,$.hr],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Bonding Manacles",H.a([$.F,$.bg,$.S,$.aL,$.hr,$.aF],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Friendship Stairs",H.a([$.X,$.uN,$.bm,$.aL,$.S,$.a0],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d4,$.l)
q.i(0,$.uq,$.l)
q.i(0,$.bY,$.m)
p=$.o
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.t
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ad+" and some boondollars in compensation."
n=this.x2
k=[U.b]
q.i(0,new R.a1("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.eb(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.D)
n=$.t
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.K+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.B
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.o
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.ch+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.R("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.W(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n=this.f
n.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cV,$.l)
s.i(0,$.cB,$.L)
s.i(0,$.b_,$.L)
s.i(0,$.iQ,$.l)
s.i(0,$.cx,$.L)
p=$.o
o="The "+p+"  and the "
m=$.eA
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.B
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.R("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.W(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.ez(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
h=$.o
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.t
i=i+m+"s explains that before  "
p=$.B
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.ch+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.Gp
s.i(0,new R.R("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.W(l,h,o)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.D)
p=$.o
o="The "+p+" learns of the "
h=$.aI
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.t
o=o+l+" explains that the "
j=$.B
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.ch+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.R("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.W(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
p=$.o
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.t
h=h+i+" on "+$.aI+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.fe+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a7("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.ft(),!1,!1,new Y.c_("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.t+" on "
m=$.aI
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.fe+" is now more popular with your friends than you are."
s.i(0,new R.a7("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.vB(),!1,!1,new Y.c_("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
m="The "+p+"  and the "
h=$.eA
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.B
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.R("Pale Shipping Dungeon",!1,[new U.b(m),new U.W(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.u)+".",o)],H.a([],k),R.ez(),!1,!1,new Y.k1(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ak)
n.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.bf,$.L)
t.i(0,$.c7,$.m)
r="In the wake of the defeat of the "+$.B+" it becomes really how isolated the individual "
q=$.t
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.o
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.fe+" to kick your ass, but luckily they have several."
t.i(0,new R.a7("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.eb(),!1,!1,new Y.c_("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
o=$.o
q="The "+o+" learns that two prominent "
p=$.t
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.B
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.ch+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.K+"ing. "
t.i(0,new R.R("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.W(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(s,t,null),$.ao)}}
T.lf.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Pan's Pipe",H.a([$.aa,$.X,$.bm,$.S],s),null,!1,"Smonkin Weeds Pipe")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Skeleton Key",H.a([$.bc,$.S],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Inspector's Fan",H.a([$.a9,$.F,$.bm,$.S],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Jet Pack",H.a([$.at,$.F,$.aK,$.S,$.a0],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.c7,$.m)
q.i(0,$.fc,$.l)
q.i(0,$.b_,$.m)
p=$.o
o="The "+p+" tries posting a letter through the "
n=$.ad
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.B
o=o+m+" has screwed with the mail system, crippling the "
l=$.t
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.ch+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.Gt
i=[U.b]
q.i(0,new R.R("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.W(j,p,l)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.D)
m=this.f
m.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.bf,$.l)
s.i(0,$.fc,$.m)
s.i(0,$.b_,$.m)
s.i(0,$.bZ,$.m)
s.i(0,$.c7,$.m)
p=$.o
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ad
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.t
k=l+k+" fields. The "+k+"s "+$.K+"ing is so joyful it's literally deafening. "
l=$.B
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.ch+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.R("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.W(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cd,$.l)
t.i(0,$.mn,$.l)
t.i(0,$.fc,$.L)
t.i(0,$.c7,$.L)
r=$.o
q="The "+r+" is chilling in a "+$.t+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.B
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ad
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aI+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.ch+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.R("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(s,t,null),$.ao)}}
M.fX.prototype={
f0:function(a){var t=this.a
if(!t.a_(0,a))return
return t.n(0,a)}}
Y.lh.prototype={
P:function(a,b){var t=0,s=P.bo(),r,q,p,o,n,m,l,k,j,i
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=J.ed(b,"\n")
p=P.x
o=P.cy(p,p)
n=P.cy(p,[P.eC,P.x])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.cS(k).bv(k).length===0)m=null
else if(m==null)m=C.c.bv(k)
else{j=C.c.bv(k)
i=C.c.K(m,0,C.c.eC(m,$.$get$wx())+1)+j
o.i(0,i,m)
if(!n.a_(0,m))n.i(0,m,P.a3(null,null,null,p))
J.zd(n.n(0,m),i)}}r=new M.fX(o,n)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$aseF:function(){return[M.fX]},
$asc8:function(){return[M.fX,P.x]}}
A.lo.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Colonel Sassacre's Daunting Text ",H.a([$.M,$.ac,$.b8,$.c9],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Wise Guy Book",H.a([$.M,$.b8],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Beagle Puss",H.a([$.b9,$.b8],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Novelty Microphone",H.a([$.aK,$.a9,$.b8],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Banana",H.a([$.as,$.b8],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Fake Flower",H.a([$.Q,$.b8],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Trick Handcuffs",H.a([$.F,$.b8],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.m)
q.i(0,$.cw,$.l)
q.i(0,$.bZ,$.m)
p=$.o
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.t
o=o+n+"s are too scared to even "+$.K+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.B+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.a1("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.D)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.e4,$.L)
s.i(0,$.bZ,$.l)
s.i(0,$.cw,$.l)
s.i(0,$.cA,$.l)
o=$.o
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aI
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.t
k=k+j+"s let out a braying "+$.K+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.Gw
s.i(0,new R.a1("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.A(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cD,$.L)
t.i(0,$.c6,$.m)
t.i(0,$.cw,$.l)
t.i(0,$.bZ,$.m)
t.i(0,$.iL,$.m)
r=$.o
q="The "+r+"  is approached by a Crafty "
o=$.t
q=q+o+" who offers them a magical "
n=$.ad
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.K
t.i(0,new R.a1("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(s,t,null),$.aC)}}
S.bI.prototype={
C:function(a){return H.y(new H.dV(H.kP(this),null))+": "+this.c},
gJ:function(a){return this.c}}
S.iq.prototype={}
S.mK.prototype={}
B.it.prototype={
en:function(a,b){var t,s,r,q,p
t=document
s=t.createElement("div")
s.classList.add("contestEntry")
r=t.createElement("div")
r.textContent=H.y(this.a)+" (by "+H.y(this.b)+")"
r.classList.add("nameHeader")
s.appendChild(r)
q=t.createElement("div")
C.y.cl(q,this.e)
q.classList.add("bodyElement")
s.appendChild(q)
p=t.createElement("div")
C.y.cl(p,"JR: "+H.y(this.d))
p.classList.add("jrNotes")
s.appendChild(p)
b.appendChild(s)}}
B.lt.prototype={
$1:function(a){var t,s,r,q,p,o,n,m
t=H.a([],[B.it])
s=J.ed(a,"\n")
for(r=s.length,q=P.x,q=[q,q],p=0;p<s.length;s.length===r||(0,H.c4)(s),++p){o=s[p]
n=new B.it(null,null,null,null,null,null)
m=new H.u(0,null,null,null,null,null,0,q)
m.i(0,"HELLO","WORLD ")
m.i(0,"GOODBYE","WORLD BUT A SECOND TIME ")
m=C.p.hE(o)
n.a=J.d2(m,"bbName")
n.b=J.d2(m,"entrantName")
n.c=J.d2(m,"imagesCSV")
n.d=J.d2(m,"jrComment")
n.e=J.d2(m,"text")
n.f=J.d2(m,"shogunComment")
t.push(n)}return t},
$S:function(){return{func:1,args:[P.x]}}}
M.lC.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Can of Spray Paint",H.a([$.ay,$.F],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Sensible Chuckles Magazine",H.a([$.M,$.al,$.b8,$.av],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Gentleman's Razor",H.a([$.uU,$.F,$.aw],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("How To Draw Manga",H.a([$.M,$.al,$.av],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Painting of a Horse Boxing a Football Player",H.a([$.ay,$.aq,$.M],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Collection of Classical Works",H.a([$.al,$.M],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Documentary on Horses",H.a([$.al,$.aA,$.aq],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Paint Set",H.a([$.ay,$.al],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Shaving Cream",H.a([$.at,$.al,$.F],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Classy Suit",H.a([$.Q,$.al],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("The Fatherly Gent's Shaving Almanac ",H.a([$.M,$.al,$.av],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.dj,$.m)
q.i(0,$.cC,$.l)
q.i(0,$.b_,$.m)
p=$.o
o="The "+p+" visits a beautiful "
n=$.ad
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.t
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.B+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.K+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.a1("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.D)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.e4,$.L)
s.i(0,$.bZ,$.m)
s.i(0,$.cw,$.L)
s.i(0,$.bf,$.m)
s.i(0,$.cA,$.l)
o=$.o
n="The "+o+" finds a troupe of dejected looking "
l=$.t
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aI
l=l+n+" "
k=$.ad
s.i(0,new R.a1("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.K+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.hj,$.L)
t.i(0,$.cx,$.L)
t.i(0,$.f6,$.L)
t.i(0,$.c6,$.L)
t.i(0,$.bf,$.m)
t.i(0,$.b_,$.m)
r=$.o
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.K
q=q+o+"ingworth, "
n=$.t
q=q+n+" heiress to the "+$.ad+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.Gm
t.i(0,new R.a1("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.A(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(s,t,null),$.aC)}}
T.lI.prototype={}
V.lM.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Trendy Fabric",H.a([$.ay,$.Q],s),null,!1,"Weird Tasting Candy Paper")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Necklace",H.a([$.ay,$.uK,$.hr],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Sewing Needle",H.a([$.F,$.uQ,$.aM],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=$.jC
r=A.h("Broom",H.a([r,$.X,$.ac,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Rolling Pin",H.a([$.X,$.uX,$.ac],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Velvet Pillow",H.a([$.Q,$.b7,$.bm,$.ay,$.e7],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Yarn Ball",H.a([$.ay,$.Q],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Refrigerator",H.a([$.aF,$.c9,$.F,$.bn],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Photo Album",H.a([$.ay,$.M],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Ice Cubes",H.a([$.bn],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Cast Iron Skillet",H.a([$.F,$.at,$.ac,$.c9,$.uJ],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Failed Dish",H.a([$.bN],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Dr Pepper BBQ Sauce",H.a([$.bN],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Potted Plant",H.a([$.ay,$.bQ,$.b5],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Chicken Leg",H.a([$.as,$.bj,$.bc],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Juicy Steak",H.a([$.as,$.bj],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Wedding Cake",H.a([$.ay,$.as,$.aL],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.cB,$.m)
q.i(0,$.cx,$.L)
p=$.o
o="The "+p+" is visited by a Beautiful "
n=$.t
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ad
l=[U.b]
q.i(0,new R.a1("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.K+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.A(),!1,!1,new Y.is("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cx,$.l)
s.i(0,$.bZ,$.m)
s.i(0,$.f6,$.l)
s.i(0,$.dw,$.m)
s.i(0,$.bf,$.l)
p=$.o
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ad
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.t
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.K+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.Gu
s.i(0,new R.a1("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.ej,$.l)
t.i(0,$.bf,$.m)
t.i(0,$.du,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.iQ,$.l)
r=$.o
q="The "+r+" finds a loom, and a Wizened "
p=$.t
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ad
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.K+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a1("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(s,t,null),$.aC)}}
U.lN.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("~ATH - A Handbook for the Imminently Deceased ",H.a([$.av,$.a9,$.M,$.aD,$.S,$.a0],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Egg Timer",H.a([$.aA,$.bm,$.S,$.aD],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Skull Timer",H.a([$.bc,$.bm,$.S,$.aD],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Poison Flask",H.a([$.b9,$.S,$.bN],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Ice Gorgon Head",H.a([$.b9,$.S,$.bn,$.aD,$.bg,$.bS,$.ba],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Obituary",H.a([$.aF,$.ba,$.aD,$.M,$.S],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.dO,$.l)
q.i(0,$.d5,$.m)
q.i(0,$.fc,$.L)
q.i(0,$.bf,$.L)
q.i(0,$.bY,$.m)
p=$.o
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.t
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ad
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.B
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.ch+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.R("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n=this.f
n.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dO,$.l)
s.i(0,$.d5,$.m)
s.i(0,$.en,$.ak)
s.i(0,$.ek,$.m)
s.i(0,$.um,$.m)
s.i(0,$.d4,$.m)
s.i(0,$.d5,$.m)
s.i(0,$.bf,$.L)
s.i(0,$.bY,$.m)
s.i(0,$.dv,$.m)
p=$.o
o="The "+p+" has found a group of Violent "
m=$.t
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aI
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.K+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.B
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.ch+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.R("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.ey(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ad
p=p+l+"s alike. "
l=$.t+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.B
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.ch+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.R("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.W(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.bY,$.l)
t.i(0,$.wT,$.ak)
t.i(0,$.hg,$.L)
r=$.o
q="The "+r+" finds a small dungeon bearing the image of "
p=$.B
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.t+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.W(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.ey(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
k=$.o
p="The "+k+" learns from one of their "
r=$.t
p=p+r+"s that there is an ancient prophecy of a "
l=$.aI
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ad
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.B
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.ch+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.Gl
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.W(o,k,q)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(s,t,null),$.ao)}}
Z.lO.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Dream Diary",H.a([$.M,$.av,$.S],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Interlocking Brick",H.a([$.aA,$.bm,$.ac,$.S,$.a0],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Art Supplies",H.a([$.aA,$.bm,$.S],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ej,$.m)
q.i(0,$.du,$.l)
q.i(0,$.b_,$.m)
q.i(0,$.iQ,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ad
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.B
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.K+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.xO
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.D)
l=this.f
l.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cd,$.m)
s.i(0,$.du,$.l)
s.i(0,$.d6,$.m)
s.i(0,$.cl,$.m)
s.i(0,$.dL,$.m)
s.i(0,$.cw,$.l)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.K
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.B
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
l.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.dj,$.l)
t.i(0,$.hf,$.m)
t.i(0,$.b_,$.m)
t.i(0,$.cl,$.l)
t.i(0,$.dL,$.l)
t.i(0,$.du,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.B
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aI+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.K+"ing in reverse. Another is in a "+$.ad+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
l.i(0,new X.G(s,t,null),$.ao)}}
X.iI.prototype={}
X.ip.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.hc]]}}}
M.hc.prototype={}
U.mh.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Fluthulu Poster",H.a([$.Q,$.b7,$.ba,$.bp],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Scalemate",H.a([$.Q,$.b7,$.ba],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Replica Bone Shield",H.a([$.aF,$.aA,$.bc,$.fj,$.aH],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Replica Ice Sword",H.a([$.aA,$.xl,$.fk,$.aH],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Zombie Mask",H.a([$.aA,$.bS,$.bj,$.ba],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Vampire Romance Novel",H.a([$.av,$.M,$.aB,$.ba],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Wizardy Herbert",H.a([$.M,$.a4,$.ac],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Complacency of the Learned",H.a([$.M,$.a4,$.ac],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Grimoire for Summoning the Zoologically Dubious ",H.a([$.M,$.a4,$.bS,$.ba,$.bp],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Wizard Statue",H.a([$.aF,$.ax,$.a4,$.ac,$.aH],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Mermaid Fountain",H.a([$.aF,$.uG,$.a4,$.ac,$.aH],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.hd,$.ak)
q.i(0,$.cB,$.m)
q.i(0,$.c7,$.m)
q.i(0,$.cD,$.L)
p=$.o
o="The "+p+" learns of a Beautiful "
n=$.t
o=o+n+" who has been kidnapped by the vial "
m=$.B
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ad
j=[U.b]
q.i(0,new R.a1("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.l)
s.i(0,$.d4,$.l)
s.i(0,$.iN,$.m)
s.i(0,$.bY,$.l)
s.i(0,$.en,$.l)
s.i(0,$.hi,$.m)
o=$.o
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.t
s.i(0,new R.a1("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.l)
t.i(0,$.iP,$.m)
t.i(0,$.bY,$.l)
t.i(0,$.dM,$.m)
t.i(0,$.f7,$.m)
t.i(0,$.uq,$.m)
r=$.o
q="The "+r+" finds a group of three "
o=$.t
q=q+o+"s "
n=$.K
t.i(0,new R.a1("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(s,t,null),$.aC)}}
N.a8.prototype={
C:function(a){return H.y(new H.dV(H.kP(this),null))+": "+H.y(this.b)}}
O.c8.prototype={
bb:function(a){var t=0,s=P.bo(),r,q=this,p
var $async$bb=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cs(q.b_(a),$async$bb)
case 3:r=p.P(0,c)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bb,s)}}
O.dr.prototype={
bh:function(a){var t=0,s=P.bo(),r
var $async$bh=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bh,s)},
cU:function(a){var t=0,s=P.bo(),r,q=this
var $async$cU=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.A9([J.wg(a)],q.aY(0),null))
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$cU,s)},
b_:function(a){var t=0,s=P.bo(),r,q=this,p,o
var $async$b_=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=P.bi
o=new P.bk(0,$.ap,null,[p])
W.x_(a,null,q.aY(0),null,null,"arraybuffer",null,null).b1(new O.lb(new P.dX(o,[p])))
r=o
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b_,s)},
$asc8:function(a){return[a,P.bi]}}
O.lb.prototype={
$1:function(a){this.a.aI(0,H.kQ(J.zr(a),"$isbi"))},
$S:function(){return{func:1,args:[W.e6]}}}
O.eF.prototype={
bh:function(a){var t=0,s=P.bo(),r,q,p,o,n
var $async$bh=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:a.toString
q=H.cN(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.fs(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bh,s)},
b_:function(a){var t=0,s=P.bo(),r
var $async$b_=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=W.uz(a,null,null)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b_,s)},
$asc8:function(a){return[a,P.x]}}
O.iG.prototype={
b_:function(a){var t=0,s=P.bo(),r
var $async$b_=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b_,s)},
bh:function(a){return H.b2("Element format doesn't read from buffers")},
$asc8:function(a){return[a,P.x]}}
V.mx.prototype={
aY:function(a){return"font/opentype"},
P:function(a,b){var t=0,s=P.bo(),r
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cs(A.hD("scripts/Rendering/text/opentype.min.js",!1),$async$P)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdr:function(){return[R.hk]},
$asc8:function(){return[R.hk,P.bi]}}
Z.iH.prototype={}
E.iV.prototype={}
E.oe.prototype={}
E.O.prototype={
C:function(a){var t="["+J.cv(this.a)+" x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fR.prototype={
C:function(a){var t="[(Random from "+P.v0(this.d,"(",")")+") x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.l0.prototype={
C:function(a){return"[Stats assigned from player Interests x"+H.y(this.b)+"]"}}
Y.mD.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("How to Teach Your Friends to Hack SBURB",H.a([$.av,$.P,$.M,$.a0,$.ht],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Unstable Domino",H.a([$.aA,$.P,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Exposed Thread",H.a([$.Q,$.P,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Teetering Plate",H.a([$.n5,$.P,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.mp,$.m)
t.i(0,$.c7,$.l)
t.i(0,$.dv,$.L)
t.i(0,$.di,$.l)
r=$.t
q="An excited "+r+" runs up to the "
p=$.o
q=q+p+" and starts to "
o=$.K
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aI
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ad
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.B
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.R("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.W(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
o=$.o
t.i(0,new R.a7("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.B+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.t+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.A(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.D)
o=$.t
j="Now that the "+o+"s are free from the reign of "+$.B+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.o
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.K
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aI+" Quest Online: The "+$.ad+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a7("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.D)
p="The "+$.B+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.o
p=p+o+" shows the "
r=$.t
t.i(0,new R.bB("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.K+"s in time to stop them.    ")],H.a([],i),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Y.mE.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Sherpa Parka",H.a([$.bn,$.P,$.cf],s),"Clearly the best class uses this.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Guide Book",H.a([$.a0,$.bn,$.av,$.M,$.P,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Whistle",H.a([$.F,$.P,$.aK],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Announcement System",H.a([$.F,$.P,$.a9,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.mp,$.l)
t.i(0,$.c7,$.l)
t.i(0,$.dv,$.m)
t.i(0,$.di,$.l)
r="Now that the "+$.B+" is out of the way, a group of "
q=$.t
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.o
o=[U.b]
t.i(0,new R.a7("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.K+", but they are happy.")],H.a([],o),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
q="The "+$.B+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.o
t.i(0,new R.bB("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.t+" "+$.K+"s in time to stop them.    ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.bO)}}
T.mF.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Doll",H.a([$.n5,$.ay,$.au,$.S],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Puppet",H.a([$.X,$.au,$.S,$.a0,$.ba],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Mirror",H.a([$.uP,$.S],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Shipping Grid",H.a([$.M,$.S,$.aB],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Shades",H.a([$.aq,$.b9,$.S],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ek,$.L)
q.i(0,$.em,$.l)
q.i(0,$.bZ,$.m)
p=$.o
o="The "+p+", guided by a "+$.t+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.B
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.ch+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.R("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.W(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
j=$.o
p="The "+j+" finds a Violent "
l=$.t
p=p+l+". A Magical Talking "
k=$.ad
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.B
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.R("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.W(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.vB(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
h=this.f
h.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cw,$.l)
s.i(0,$.iN,$.l)
s.i(0,$.fc,$.m)
s.i(0,$.bY,$.l)
s.i(0,$.cx,$.m)
s.i(0,$.dv,$.L)
p=$.o
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ad
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.B
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.ch+". The "+p+" is victorious. "
s.i(0,new R.R("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
j="Now that the "+$.B+" has been defeated, a Copy "
p=$.o
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.t
j=j+k+"s "
l=$.K
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.fe+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a7("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.eb(),!1,!1,new Y.c_("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.B
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.R("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.W(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.ey(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
h.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.iM,$.l)
t.i(0,$.cx,$.l)
t.i(0,$.mo,$.l)
t.i(0,$.f6,$.m)
t.i(0,$.hi,$.l)
t.i(0,$.cB,$.m)
t.i(0,$.em,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.t
t.i(0,new R.R("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.K+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aI+" laws put in place by "+$.B+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
r=$.o
p="The "+r+" finds a weeping Broken Hearted "
q=$.t
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aI
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.K
t.i(0,new R.a7("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hP(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
q=$.o
m="The "+q+"  and the "
r=$.eA
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.B
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.R("Flushed Shipping Dungeon",!1,[new U.b(m),new U.W(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.u)+".",n)],H.a([],i),R.ez(),!1,!1,new Y.iT(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ak)
n=$.o
r="The "+n+"  and the "
q=$.eA
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.B
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.R("Pitched Shipping Dungeon",!1,[new U.b(r),new U.W(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.u)+".",m)],H.a([],i),R.ez(),!1,!1,new Y.k3(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ak)
h.i(0,new X.G(s,t,null),$.aC)}}
B.mG.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Family Ashes",H.a([$.aF,$.at,$.P,$.aD,$.bV],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Last Will and Testament",H.a([$.a0,$.M,$.P,$.aD,$.n2],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Grooming Guide",H.a([$.av,$.P,$.al],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Powered Attorney",H.a([$.xb,$.P,$.mY,$.n2],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Executer's Ax",H.a([$.uD,$.P,$.aw,$.n2],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cd,$.m)
r=$.B
q="With the death of the "+r+", it now falls to the "
p=$.o
o=[U.b]
t.i(0,new R.a7("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.t+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
r="The "+$.B+" has released the frogs into the "
p=$.o
t.i(0,new R.bB("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.bO)}}
V.mH.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Hippo",H.a([$.aK,$.bd,$.S],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Ranting",H.a([$.x7,$.aK,$.jF],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Vent",H.a([$.F,$.xa],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.dL,$.L)
t.i(0,$.dj,$.m)
t.i(0,$.un,$.m)
t.i(0,$.hf,$.m)
r=$.o
q="The "+r+" hears the screaming voice of the "
p=$.B
q=q+p+", and when they walk into a consort village, a "
o=$.t
q=q+o+" "
n=$.K
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.R("Stop the Screamening",!1,[new U.b(q),new U.b(n),new U.b(o),new U.W(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.b]),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
this.f.i(0,new X.G(s,t,null),$.ao)}}
X.mJ.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Wand",H.a([$.X,$.S,$.a4,$.bd],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Angel Feather",H.a([$.bd,$.bA,$.S,$.b4,$.aa,$.a0,$.a4],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Never Ending Story DVD",H.a([$.bR,$.uN,$.S,$.a4,$.b8,$.bd],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Candle",H.a([$.bd,$.b4,$.S,$.at],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Fairy Figurine",H.a([$.aA,$.b4,$.S,$.bd],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ul,$.l)
q.i(0,$.cB,$.m)
q.i(0,$.b_,$.l)
q.i(0,$.cl,$.l)
p=$.o
o="The "+p+" is just minding their own business when they see a wizened "
n=$.t
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.K+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.B
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ad
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.Go
i=[U.b]
q.i(0,new R.R("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(k,p,j)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.D)
n=this.f
n.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.l)
s.i(0,$.iL,$.m)
s.i(0,$.d6,$.l)
p=$.o
o="The "+p+"  is approached by a Crafty "
m=$.t
o=o+m+" who offers them a magical "
l=$.ad
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.B
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.R("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.dw,$.L)
t.i(0,$.cC,$.l)
t.i(0,$.cl,$.l)
r=$.o
q="The "+r+" finds a grey town of despondant "
p=$.t
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.B
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ad
t.i(0,new R.R("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.W("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
r=$.o
o="The "+r+" discovers a group of "
p=$.t
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.B
t.i(0,new R.R("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.W("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hP(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n.i(0,new X.G(s,t,null),$.ao)}}
X.mO.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Footstick",H.a([$.dk,$.P,$.jG,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("SBURBSim Cheating Guide",H.a([$.av,$.P,$.ht,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Body Pillow of Shogun",H.a([$.Q,$.P,$.e7,$.n1,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Macrobots",H.a([$.uW,$.P,$.mY],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cD,$.l)
t.i(0,$.d6,$.l)
t.i(0,$.du,$.l)
t.i(0,$.di,$.l)
t.i(0,$.ej,$.l)
t.i(0,$.dL,$.l)
t.i(0,$.hh,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.vC(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.D)
r=$.B
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ch+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.K
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xZ(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
q=$.o
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.A(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.D)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.B
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
m=$.o
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.B+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a7("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.A(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a7("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y_(),!1,!1,new Y.c_("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a7("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.B
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bB("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.ao)}}
Q.mP.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Yardstick",H.a([$.dk,$.P,$.jG,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("SBURB Hacking Guide",H.a([$.av,$.P,$.ht,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Body Pillow of Hussie",H.a([$.Q,$.P,$.e7,$.n1,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.mS.prototype={
bb:function(a){var t=0,s=P.bo(),r,q,p
var $async$bb=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:q=W.x0(null,a,null)
p=new W.i7(q,"load",!1,[W.Z])
t=3
return P.cs(p.gaj(p),$async$bb)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bb,s)},
$asdr:function(){return[W.fh]},
$asc8:function(){return[W.fh,P.bi]}}
Q.ow.prototype={
aY:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bo(),r,q=this,p,o,n
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cs(q.cU(b),$async$P)
case 3:p=n.x0(null,d,null)
o=new W.i7(p,"load",!1,[W.Z])
t=4
return P.cs(o.gaj(o),$async$P)
case 4:r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)}}
Q.ot.prototype={
aY:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bo()
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:throw H.j("Read NYI")
return P.bs(null,s)}})
return P.bt($async$P,s)},
$asdr:function(){return[Q.k2]},
$asc8:function(){return[Q.k2,P.bi]}}
B.hq.prototype={
E:function(){var t,s
t=Q.I(null,null,A.a2)
s=A.h("Perfectly Generic Object",H.a([],[G.a_]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d5,$.l)
q.i(0,$.bf,$.L)
q.i(0,$.dO,$.l)
q.i(0,$.bY,$.m)
q.i(0,$.e3,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.b]
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.f9,$.l)
s.i(0,$.el,$.L)
s.i(0,$.f8,$.m)
s.i(0,$.cV,$.l)
s.i(0,$.cd,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.bf,$.L)
t.i(0,$.c7,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
t.i(0,new R.a1("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
p=$.o
r="The "+p+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.K
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.vA(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
n.i(0,new X.G(s,t,null),$.aC)},
C:function(a){return this.ch},
gJ:function(a){return this.ch}}
A.a2.prototype={
aH:function(a,b){var t=b.gbL()-this.gbL()
if(t>0)t=1
else if(t<0)t=-1
return C.d.b0(t)},
ghK:function(){var t,s,r,q,p,o
t=H.a([],[P.x])
s=new A.k5(null,null)
s.dl(this.f.a)
if(this.r===0)return t
r=P.dl(G.Ag(this.f),!0,G.a_)
C.b.dn(r,new A.n9())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.c4)(r),++p){o=r[p]
if(!(o instanceof G.ah||o.gem().length===0))t.push(" "+Y.Is(s.io(o.gem())))}return t},
gbL:function(){var t,s,r
for(t=this.f,s=new P.dE(t,t.r,null,null,[null]),s.c=t.e,r=0;s.I();)r+=s.d.gbL()
return r},
ghx:function(){var t=this.f
return new H.eK(t,new A.n8(),[H.N(t,0)])},
ghW:function(){var t,s,r,q,p
for(t=this.ghK(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.c4)(t),++q)r+=t[q]+" "
return r+this.d},
C:function(a){return this.ghW()},
M:function(a,b,c,d,e){var t,s,r
t=P.jN(b,null)
this.f=t
if(t.a===0)t.h(0,$.jF)
s=P.jN(this.ghx(),null)
for(t=new P.dE(s,s.r,null,null,[null]),t.c=s.e;t.I();){r=t.d
this.f.aD(0,r.gff())
this.f.as(0,r)}$.$get$xG().push(this)},
$isbG:1,
$asbG:function(){return[A.a2]}}
A.n9.prototype={
$2:function(a,b){return a.geG()-C.a.b0(b.geG())},
$S:function(){return{func:1,args:[G.a_,G.a_]}}}
A.n8.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a_]}}}
S.v3.prototype={
C:function(a){return C.p.eo(this.a)},
n:function(a,b){return J.d2(this.a,b)},
i:function(a,b,c){J.il(this.a,b,c)},
gak:function(a){return J.im(this.a)}}
S.k_.prototype={
$asb0:function(){return[P.x,P.x]},
$isb0:1}
Z.nk.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Juice Box",H.a([$.M,$.S,$.bd,$.aH],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Shogun Body Pillow",H.a([$.e7,$.b7,$.S],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.dL,$.ak)
t.i(0,$.cB,$.m)
t.i(0,$.bZ,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.cl,$.l)
r=$.o
q="The "+r+" sees a floating sentient "
p=$.ad
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.t+" notices it, and starts "+$.K+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.B
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.b]
t.i(0,new R.R("Talk to your Juice entity",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
p=$.o
r="The "+p+" is greeted by a young adolescent "
m=$.t
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.B
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.K
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.R("Be The Wingman",!1,[new U.b(r),new U.b(l),new U.b(n),new U.W(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
j=$.o
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.t
m=m+q+" informs them that "
p=$.B
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.R("Pilot The Mech",!1,[new U.b(m),new U.b(o),new U.b(n),new U.W(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
this.f.i(0,new X.G(s,t,null),$.ao)}}
N.nl.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Gavel",H.a([$.X,$.uM],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Caution Tape",H.a([$.aA,$.bg],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Deerstalker Hat",H.a([$.Q,$.ay],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Mystery Novel",H.a([$.M,$.av],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Dish Served Cold",H.a([$.bQ,$.as,$.bn],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Pony Pals: Detective Pony ",H.a([$.M,$.av,$.aq],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Handcuffs",H.a([$.aF,$.F,$.bg],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.hd,$.L)
q.i(0,$.c6,$.m)
q.i(0,$.cC,$.L)
p=$.o
o="The "+p+" finds an elaborate courtroom full of "+$.K+"ing "
n=$.t
m=[U.b]
q.i(0,new R.a1("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ad+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.l)
s.i(0,$.dv,$.m)
s.i(0,$.cV,$.m)
p=$.o
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.t
l=o+l+" yells 'Stop that thief' in betwen "+$.K+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ad+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.Gk
s.i(0,new R.a1("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.A(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.l)
t.i(0,$.cd,$.m)
t.i(0,$.d4,$.L)
t.i(0,$.en,$.m)
t.i(0,$.ek,$.m)
t.i(0,$.fa,$.m)
t.i(0,$.iO,$.m)
r=$.o
q="The "+r+" finds a crowd of "
p=$.K
q=q+p+"ing "
o=$.t
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.Gx
t.i(0,new R.a1("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.A(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(s,t,null),$.aC)}}
S.nn.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Shining Armor",H.a([$.aF,$.n4,$.P,$.fj],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Excalibur",H.a([$.a0,$.n4,$.P,$.aM,$.aw,$.fk],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Noble Steed",H.a([$.F,$.P,$.bj,$.au],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Hero's Shield",H.a([$.aF,$.fj,$.P,$.n4],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.mm,$.l)
t.i(0,$.dN,$.l)
t.i(0,$.e4,$.l)
t.i(0,$.fa,$.l)
t.i(0,$.hd,$.m)
r="The "+$.B+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.B
r="Now that the "+q+" is defeated, the "
o=$.t
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.o
t.i(0,new R.a7("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
o=$.aI
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.B
n=n+q+". A Learned "+$.t+" explains that it can only be defeated by the Legendary "
r=$.ad
n=n+r+" Blade. The "
m=$.o
t.i(0,new R.a7("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
r="The volcanos of the land are weirdly active after the defeat of the "+$.B+". One begins to erupt near a "
m=$.t
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.K+"s, but not really doing anything to evacuate or save anyone. The "
o=$.o
t.i(0,new R.a7("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Q.no.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Dream Diary",H.a([$.M,$.av,$.S],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Interlocking Brick",H.a([$.aA,$.bm,$.ac,$.S,$.a0],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Art Supplies",H.a([$.aA,$.bm,$.S],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ej,$.m)
q.i(0,$.du,$.l)
q.i(0,$.b_,$.m)
q.i(0,$.iQ,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ad
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.B
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.K+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.xO
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.D)
l=this.f
l.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cd,$.m)
s.i(0,$.du,$.l)
s.i(0,$.d6,$.m)
s.i(0,$.cl,$.m)
s.i(0,$.dL,$.m)
s.i(0,$.cw,$.l)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.K
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.B
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
l.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.dj,$.l)
t.i(0,$.hf,$.m)
t.i(0,$.b_,$.m)
t.i(0,$.cl,$.l)
t.i(0,$.dL,$.l)
t.i(0,$.du,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.B
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aI+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.K+"ing in reverse. Another is in a "+$.ad+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
l.i(0,new X.G(s,t,null),$.ao)}}
K.nq.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Creeping Vine",H.a([$.X,$.S,$.b5,$.au],s),null,!1,"Sentient Plant Tentacles")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Lollipop",H.a([$.uF,$.S,$.aL],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Golem",H.a([$.aF,$.ax,$.S,$.au],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Ectoplasm",H.a([$.bV,$.S,$.aL],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Aqua Vitae",H.a([$.b9,$.S,$.aL,$.a0,$.a4],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Homunculus",H.a([$.bj,$.S,$.au],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.c7,$.l)
q.i(0,$.bf,$.l)
q.i(0,$.he,$.L)
q.i(0,$.b_,$.m)
q.i(0,$.mp,$.m)
q.i(0,$.cD,$.L)
p=$.o
o="The "+p+" finds a village of compliant "
n=$.t
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.K+"ing in panic. Don't upset "
m=$.B
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.R("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.W(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n=this.f
n.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.l)
s.i(0,$.cx,$.l)
s.i(0,$.cD,$.L)
s.i(0,$.b_,$.m)
o=$.o
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.t
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.B
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.R("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.W(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.d5,$.l)
t.i(0,$.bf,$.L)
t.i(0,$.dO,$.l)
t.i(0,$.bY,$.m)
t.i(0,$.e3,$.m)
t.i(0,$.iJ,$.m)
r="Drawn by wailing and "+$.K+"ing, the "
q=$.o
r=r+q+" enters a rotting "
o=$.t
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.B
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.R("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.W(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(s,t,null),$.ao)}}
G.nr.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("FAQ",H.a([$.a9,$.S,$.Y,$.bW],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Flashlight",H.a([$.aA,$.S,$.b4,$.a9,$.bW],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Octet",H.a([$.S,$.b4,$.bW,$.a0,$.uG],s),null,!1,"D13")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Horseshoe",H.a([$.xk,$.S,$.ac],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Rabbits Foot",H.a([$.xt,$.S],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("4 Leaf Clover",H.a([$.b5,$.S,$.b4,$.bW],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("8-Ball",H.a([$.b9,$.S,$.au],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.mk,$.l)
q.i(0,$.ej,$.m)
q.i(0,$.dM,$.l)
q.i(0,$.em,$.l)
p=$.o
o="The "+p+" is searching for the lair of "
n=$.B
o=o+n+" when some local "
m=$.t
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.R("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.W(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
m=$.o
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.K+"ing "+$.t+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.B
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.R("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.W(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
m=this.f
m.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.m)
s.i(0,$.b_,$.m)
s.i(0,$.dw,$.l)
s.i(0,$.mj,$.l)
s.i(0,$.el,$.l)
s.i(0,$.iL,$.l)
p=$.o
o="The "+p+" walks into a "
n=$.t
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ad
o=o+l+", but "
k=$.B
o=o+k+" has hoarded all of the planets "
j=$.aI
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.K+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.R("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.W(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.vB(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.t
j=j+k+" explains that the "
h=$.B
s.i(0,new R.R("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.K+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.W("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.hg,$.m)
q.i(0,$.bf,$.m)
q.i(0,$.fb,$.l)
q.i(0,$.b_,$.m)
q.i(0,$.cC,$.l)
p="Now that the "+$.B+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
p=p+o+" sets up a wiki and settles in to help the "
n=$.t
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.fe+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a7("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.eb(),!1,!1,new Y.c_("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
l="Now that the "+$.B+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.t
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.fe+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a7("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.ey(),!1,!1,new Y.c_("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.t
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.o
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.B
q.i(0,new R.R("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.dM,$.l)
t.i(0,$.mk,$.l)
t.i(0,$.em,$.m)
t.i(0,$.cB,$.m)
t.i(0,$.up,$.m)
t.i(0,$.bY,$.L)
t.i(0,$.e4,$.L)
t.i(0,$.bZ,$.m)
t.i(0,$.cw,$.L)
t.i(0,$.bf,$.m)
t.i(0,$.cA,$.l)
s=$.o
r="The "+s+" is approached by a Fast Talking "
p=$.t
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ad
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.K+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.B
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.R("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.W(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
o="After the "+$.B+", the "
s=$.o
o=o+s+" is disappointed to learn that barely any of the "
l=$.t
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.fe+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a7("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.eb(),!1,!1,new Y.c_("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
m.i(0,new X.G(q,t,null),$.ao)}}
Z.nE.prototype={
E:function(){var t,s,r,q
t=this.H
s=[G.a_]
r=A.h("Dream Bubbles Book",H.a([$.M,$.al,$.av,$.xd],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),[H.N(t,0)]))
t=Q.I(null,null,A.a2)
r=A.h("Uno Reverse Card",H.a([$.mZ,$.jG,$.al],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Lord's Cape",H.a([$.Q,$.P,$.al],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Drawing Tablet",H.a([$.ht,$.P,$.al],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("How to Make Friends And Influence People",H.a([$.a0,$.M,$.P,$.bw,$.av],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d4,$.L)
q.i(0,$.en,$.L)
q.i(0,$.bY,$.L)
q.i(0,$.cV,$.m)
p="The "+$.B+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.o
p=p+o+" comands that the "
n=$.t
m=[U.b]
q.i(0,new R.bB("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.K+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
o="As soon as the "+$.B+" is defeated, the "
n=$.t
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.o
q.i(0,new R.a7("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p=this.x
p.i(0,new X.G(s,q,null),$.bO)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.wP,$.l)
t.i(0,$.cl,$.l)
t.i(0,$.bf,$.l)
t.i(0,$.b_,$.m)
s="The "+$.B+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.o
s=s+r+" comands that the "
o=$.t
t.i(0,new R.bB("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.K+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
r="As soon as the "+$.B+" is defeated, the "
o=$.t
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.o
t.i(0,new R.a7("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",this.H,"Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(q,t,null),$.bO)}}
S.nG.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Alternate Costume",H.a([$.Q,$.P,$.a4,$.a0,$.am],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Mage's Cape",H.a([$.Q,$.P,$.a4],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Mage's Staff",H.a([$.X,$.P,$.ac,$.a4,$.dk],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Walking Broom",H.a([$.jC,$.X,$.P,$.au,$.a4,$.dk],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.f7,$.l)
t.i(0,$.fa,$.m)
t.i(0,$.cd,$.l)
t.i(0,$.f8,$.m)
t.i(0,$.d5,$.L)
r="The "+$.B+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.o
t.i(0,new R.a7("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.A(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
q=$.o
r="The "+q+" is feeling quite pleased with their victory over the "+$.B+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aI
t.i(0,new R.a7("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.A(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
q="Now that the "+$.B+" has been defeated, the "
o=$.t
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.o
q=q+r+"'s help in planning the brand new city of "
n=$.aI
t.i(0,new R.a7("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.K+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.A(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
U.nH.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Maiden's Breath",H.a([$.b5,$.P,$.ay],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Feather Duster",H.a([$.X,$.P,$.dk,$.bA],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Valkyrie Shield",H.a([$.ay,$.aF,$.F,$.P,$.a0,$.fj,$.x3],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Maiden's Songbook",H.a([$.M,$.P,$.aa,$.av],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.di,$.l)
t.i(0,$.c7,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.bf,$.m)
t.i(0,$.dw,$.m)
t.i(0,$.cw,$.m)
r="The "+$.B+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.o
r=r+q+" asks local  "
p=$.t
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.b]
t.i(0,new R.bB("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.o
o="The "+q+" has adopted a local "
p=$.t
t.i(0,new R.a7("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.K+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.B+". ")],H.a([],n),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
V.nU.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Puzzle Box",H.a([$.X,$.S,$.a4],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Tesla Coil",H.a([$.a9,$.S,$.F],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Coin",H.a([$.F,$.S],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Electronic Door",H.a([$.F,$.S,$.a9,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Janus Bust",H.a([$.aF,$.jD,$.ax,$.al,$.S,$.a0,$.a9],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cl,$.m)
q.i(0,$.ej,$.L)
q.i(0,$.cC,$.L)
p=$.o
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.t
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.B
k=[U.b]
q.i(0,new R.R("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.ft(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.t+" explains that at the end of the Labrinth is the "
l=$.B
q.i(0,new R.R("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.W("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n=this.f
n.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.hd,$.L)
s.i(0,$.c6,$.m)
s.i(0,$.cC,$.L)
s.i(0,$.cl,$.L)
p=$.B
o="The "+p+" has commited a staggering amount of crimes against the local "+$.t+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.o
s.i(0,new R.R("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.W("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.iP,$.l)
t.i(0,$.bf,$.m)
t.i(0,$.fb,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.cC,$.l)
r=$.o
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.B
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ad+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.R("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(s,t,null),$.ao)}}
E.nV.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Feather Pen",H.a([$.F,$.P,$.al,$.bA],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Half Finished Bust of Snoop Dog",H.a([$.xs,$.P,$.jD,$.ac,$.a0],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Book of Poetry",H.a([$.M,$.P,$.al,$.av],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.di,$.l)
t.i(0,$.c7,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.bf,$.m)
t.i(0,$.dw,$.m)
t.i(0,$.cw,$.m)
r="The "+$.B+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.b]
t.i(0,new R.bB("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.B+" the "
o=$.t
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.o
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ad
t.i(0,new R.a7("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
F.nW.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Piano",H.a([$.ac,$.X,$.aa,$.al],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Flute",H.a([$.F,$.aa],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Microphone",H.a([$.aK,$.a9],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Violin",H.a([$.X,$.aa],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Sheet Music",H.a([$.M,$.aa],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Electric Guitar",H.a([$.aA,$.aa,$.a9,$.aK,$.aq],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Turn Tables",H.a([$.aA,$.aa,$.a9,$.aq],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Guitar",H.a([$.X,$.aa],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.ak)
q.i(0,$.up,$.l)
q.i(0,$.em,$.l)
q.i(0,$.dw,$.m)
q.i(0,$.b_,$.m)
q.i(0,$.mi,$.m)
p=$.o
o="The "+p+" meets a wise old "+$.t+" who tells that the "+$.B+" can only be awoken by the Legendary Hero playing the "
n=$.aI
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ad
k=[U.b]
q.i(0,new R.a1("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p=$.o
n="The "+p+" finds an empty, trashed "
l=$.aI
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ad+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.K+"ing "+$.t+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.Gq
q.i(0,new R.a1("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.A(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.D)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.us,$.ak)
s.i(0,$.dv,$.m)
s.i(0,$.cV,$.m)
s.i(0,$.dw,$.l)
s.i(0,$.mi,$.ak)
o=$.o
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aI
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.B
s.i(0,new R.a1("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ad+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.he,$.ak)
t.i(0,$.bZ,$.m)
t.i(0,$.dO,$.m)
r=$.o
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.t
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.K
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aI+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.a1("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(s,t,null),$.aC)}}
Y.oa.prototype={
P:function(a,b){var t=0,s=P.bo(),r,q=this,p,o
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cs(A.hD("scripts/Rendering/threed/three.min.js",!1),$async$P)
case 3:t=4
return P.cs(Q.p0(),$async$P)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.b1(p)
o.fc(p,P.xJ(["",$.$get$wE()],P.x,S.hH))
o.fb(p,!1)
q.b=p}J.wp(p,b)
r=J.wp(q.b,b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$aseF:function(){return[S.fp]},
$asc8:function(){return[S.fp,P.x]}}
V.ok.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Shorts",H.a([$.Q,$.P,$.fi,$.a0],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Sidekick Figurine",H.a([$.aA,$.P,$.aq],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Steroids",H.a([$.as,$.P,$.a4],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.mm,$.l)
t.i(0,$.cD,$.m)
t.i(0,$.hj,$.m)
t.i(0,$.mo,$.m)
t.i(0,$.di,$.m)
t.i(0,$.bf,$.m)
t.i(0,$.e3,$.m)
t.i(0,$.el,$.m)
t.i(0,$.ut,$.m)
t.i(0,$.iJ,$.m)
t.i(0,$.mj,$.m)
r="The "+$.B+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.b]
t.i(0,new R.bB("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.o
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.t+" named Professor "
p=$.K
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ad
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.B
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.R("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k,"The "+q+" whited out...",m)],H.a([],n),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
m="Now that the "+$.B+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.o
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.t
t.i(0,new R.a7("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aI+" buffs. With a deafening "+$.K+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.A(),!1,!1,new Y.is("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
G.oz.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Superhero Action Figure",H.a([$.aA,$.aq,$.aH],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Action DVD",H.a([$.aA,$.aq],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Ghost Busters DVD",H.a([$.aA,$.bV],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Snow Dogs DVD",H.a([$.aA,$.b8,$.bn,$.cf],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Skateboarding Video Game",H.a([$.aA,$.aq],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Movie Poster",H.a([$.M,$.aq],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Audrey II Plush",H.a([$.b5,$.aq,$.Q,$.au],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Peashooter Toy",H.a([$.b5,$.aN,$.aq,$.Q],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Shitty Sword",H.a([$.aH,$.F,$.aq,$.fk,$.aw,$.bR],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("GameBro Magazine",H.a([$.M,$.aq],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("GameGrl Magazine",H.a([$.M,$.aq],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.m)
q.i(0,$.cA,$.m)
q.i(0,$.bZ,$.l)
q.i(0,$.cD,$.ak)
q.i(0,$.d6,$.ak)
p=$.o
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.t
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aI+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.K+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.Gr
l=[U.b]
q.i(0,new R.a1("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.D)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.ek,$.m)
s.i(0,$.dv,$.m)
s.i(0,$.cA,$.m)
s.i(0,$.bZ,$.m)
s.i(0,$.dN,$.l)
o=$.o
n="The "+o+" runs towards an explosion in a local "
m=$.t
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aI
s.i(0,new R.a1("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cA,$.m)
t.i(0,$.dM,$.l)
t.i(0,$.cx,$.l)
t.i(0,$.dN,$.m)
r=$.o
q="The "+r+" gets a job at the "+$.aI+" Cinema. A new movie, The Lonely "
o=$.ad
q=q+o+" is coming out soon, and "
n=$.t
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.K+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a1("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(s,t,null),$.aC)}}
N.oE.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Feather'd Cap",H.a([$.Q,$.P,$.fi],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Crown",H.a([$.a0,$.uK,$.P,$.fi],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Gunpowder",H.a([$.bq,$.P],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cA,$.m)
t.i(0,$.cl,$.m)
t.i(0,$.dO,$.L)
r="With the closing of the curtain, the "+$.B+" has released the frogs, and yet they are nowhere to be found. The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q=$.B
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.o
r=r+o+" to get it back to normal. They organize a team of "
n=$.t
t.i(0,new R.a7("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ad+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
U.b.prototype={}
U.W.prototype={}
R.oG.prototype={
C:function(a){return H.y(new H.dV(H.kP(this),null))+": "+this.c},
gJ:function(a){return this.c}}
R.a1.prototype={}
R.R.prototype={}
R.a7.prototype={}
R.bB.prototype={}
E.oH.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Curtain",H.a([$.Q,$.S,$.aH],s),null,!1,"Show Ender")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Cursed Sword",H.a([$.F,$.fk,$.aM,$.S,$.aw,$.ba,$.aH,$.bp,$.aD],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Megaphone",H.a([$.F,$.aK,$.a9,$.S,$.aH],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Bike Horn",H.a([$.aF,$.F,$.aK,$.bw,$.ca,$.S,$.aH],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Bacchus Wine",H.a([$.as,$.bw,$.al,$.S,$.a0,$.aH],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Nightmare Fuel",H.a([$.X,$.S,$.ba,$.at,$.bq,$.aH],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.iK,$.l)
q.i(0,$.d4,$.l)
q.i(0,$.dv,$.l)
q.i(0,$.d5,$.m)
q.i(0,$.bY,$.m)
q.i(0,$.cd,$.m)
q.i(0,$.c6,$.L)
q.i(0,$.d6,$.m)
q.i(0,$.ek,$.l)
q.i(0,$.iO,$.l)
q.i(0,$.fa,$.l)
q.i(0,$.mn,$.l)
q.i(0,$.he,$.m)
q.i(0,$.en,$.l)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ad
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.B
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hP(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.B
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
h=this.f
h.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dw,$.l)
s.i(0,$.bY,$.m)
s.i(0,$.c6,$.l)
s.i(0,$.cB,$.l)
s.i(0,$.cw,$.l)
s.i(0,$.cA,$.m)
s.i(0,$.iN,$.L)
s.i(0,$.d4,$.m)
s.i(0,$.cD,$.l)
s.i(0,$.bZ,$.l)
s.i(0,$.d6,$.L)
p=$.K
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aI
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.B
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
h.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.iK,$.l)
t.i(0,$.d6,$.l)
t.i(0,$.c6,$.l)
t.i(0,$.cD,$.m)
t.i(0,$.cw,$.l)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.B+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
h.i(0,new X.G(s,t,null),$.ao)}}
Y.dS.prototype={}
Y.ae.prototype={}
Y.d3.prototype={}
Y.c_.prototype={
gJ:function(a){return this.c}}
Y.U.prototype={}
Y.is.prototype={}
Y.bD.prototype={}
Y.cZ.prototype={}
Y.lm.prototype={}
Y.by.prototype={}
Y.k1.prototype={}
Y.iT.prototype={}
Y.k3.prototype={}
N.oQ.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Domino Mask",H.a([$.Q,$.P,$.fi],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Archery Set",H.a([$.uE,$.P,$.fi,$.uC],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Gristtorrent Server",H.a([$.a0,$.aA,$.a9,$.P,$.Y,$.am],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.c6,$.l)
t.i(0,$.cd,$.m)
t.i(0,$.dN,$.m)
r="The "+$.B+" cannot release the frogs since the corrupt Noble "
q=$.t
r=r+q+"s have hoarded them. The "
p=$.o
o=[U.b]
t.i(0,new R.bB("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.o
q="The "+p+" learns of the extreme injustices of the "
r=$.t
q=q+r+"s who rose to power during the tyranny of "
n=$.B
t.i(0,new R.a7("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Q.oR.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Red Rose",H.a([$.aB,$.ay],s),null,!1,"Seductive Plant")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Shipping Grid",H.a([$.aB,$.M],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Chocolate Bar",H.a([$.aB,$.as],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Candelabra",H.a([$.aB,$.at],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Head Cannon",H.a([$.aB,$.bq,$.F,$.aN],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Her Pitch Passions Novel",H.a([$.av,$.M,$.aB],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.l)
q.i(0,$.hj,$.m)
q.i(0,$.f6,$.m)
q.i(0,$.hi,$.l)
q.i(0,$.cB,$.m)
q.i(0,$.iM,$.L)
p=$.o
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.t
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ad+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.a1("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.D)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cB,$.m)
s.i(0,$.dM,$.l)
s.i(0,$.hi,$.l)
s.i(0,$.cx,$.m)
s.i(0,$.em,$.L)
s.i(0,$.iM,$.L)
o=$.t
n="A Romantic "+o+" approaches the "
m=$.o
s.i(0,new R.a1("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.iM,$.l)
t.i(0,$.cx,$.l)
t.i(0,$.f6,$.m)
t.i(0,$.mo,$.l)
t.i(0,$.hi,$.l)
t.i(0,$.cB,$.m)
t.i(0,$.em,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.t
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.K+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.B+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.Gn
t.i(0,new R.a1("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.A(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.D)
n=$.o
r="The "+n+"  and the "
o=$.eA
t.i(0,new R.a1("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.ez(),!1,!1,new Y.iT(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ak)
o=$.o
n="The "+o+"  and the "
r=$.eA
t.i(0,new R.a1("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.ez(),!1,!1,new Y.k1(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ak)
r=$.o
o="The "+r+"  and the "
n=$.eA
t.i(0,new R.a1("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.ez(),!1,!1,new Y.k3(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p.i(0,new X.G(s,t,null),$.aC)}}
V.oT.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Arrow",H.a([$.aM,$.X,$.uC],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Bow",H.a([$.X,$.ac,$.jF],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Yondu",H.a([$.aH,$.S],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Empathy",H.a([$.S,$.x6,$.aH],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.b_,$.m)
t.i(0,$.dj,$.L)
t.i(0,$.bZ,$.m)
t.i(0,$.cl,$.L)
r=$.o
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.B
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.R("Be the Yondu",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.b]),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
this.f.i(0,new X.G(s,t,null),$.ao)}}
T.hR.prototype={
E:function(){var t,s
t=Q.I(null,null,A.a2)
s=A.h("Perfectly Generic Object",H.a([],[G.a_]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d5,$.l)
q.i(0,$.bf,$.L)
q.i(0,$.dO,$.l)
q.i(0,$.bY,$.m)
q.i(0,$.e3,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.b]
q.i(0,new R.a7("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
n=this.x
n.i(0,new X.G(s,q,null),$.bO)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.f9,$.l)
s.i(0,$.el,$.L)
s.i(0,$.f8,$.m)
s.i(0,$.cV,$.l)
s.i(0,$.cd,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a7("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p=$.o
l="The "+p+" learns that all of the local "
o=$.t
s.i(0,new R.a7("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.eA+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.K+"ing in amazement. The factory is saved! ")],H.a([],m),R.ez(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.ak)
n.i(0,new X.G(q,s,null),$.bO)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.bf,$.L)
t.i(0,$.c7,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.K
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.vA(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
p="The "+l+" learns that all of the local "
r=$.t
t.i(0,new R.a7("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
n.i(0,new X.G(s,t,null),$.bO)},
C:function(a){return this.r},
a6:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.iI("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.ip]),H.a([],[M.hc]))
this.E()
this.F()
if($.$get$oV().a_(0,this.Q))H.b2("Duplicate class id for "+this.C(0)+": "+this.Q+" is already registered for "+J.cv($.$get$oV().n(0,this.Q))+".")
$.$get$oV().i(0,this.Q,this)},
gJ:function(a){return this.r}}
E.oW.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Sage's Robe",H.a([$.Q,$.P,$.b7,$.Y,$.a4,$.a0],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Peer Reviewed Journal",H.a([$.M,$.P,$.av,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Guru Pillow",H.a([$.Q,$.P,$.e7,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.hg,$.m)
t.i(0,$.bf,$.m)
t.i(0,$.fb,$.l)
t.i(0,$.b_,$.L)
t.i(0,$.cC,$.l)
r="The "+$.B+" has blocked access to the books for the duration. The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q="Now that the "+$.B+" is defeated, it is time to begin recovery efforts. The "
r=$.t
q=q+r+"s ask the "
o=$.o
t.i(0,new R.a7("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.K+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
Y.oX.prototype={}
K.oY.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Uno Reverse Card",H.a([$.mZ,$.S,$.aH],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("JR Body Pillow",H.a([$.e7,$.b7,$.S],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.iK,$.l)
q.i(0,$.d4,$.l)
q.i(0,$.dv,$.l)
q.i(0,$.d5,$.m)
q.i(0,$.bY,$.m)
q.i(0,$.cd,$.m)
q.i(0,$.c6,$.L)
q.i(0,$.d6,$.m)
q.i(0,$.ek,$.l)
q.i(0,$.iO,$.l)
q.i(0,$.fa,$.l)
q.i(0,$.mn,$.l)
q.i(0,$.he,$.m)
q.i(0,$.en,$.l)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ad
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.B
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hP(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.B
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
h=this.f
h.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dw,$.l)
s.i(0,$.bY,$.m)
s.i(0,$.c6,$.l)
s.i(0,$.cB,$.l)
s.i(0,$.cw,$.l)
s.i(0,$.cA,$.m)
s.i(0,$.iN,$.L)
s.i(0,$.d4,$.m)
s.i(0,$.cD,$.l)
s.i(0,$.bZ,$.l)
s.i(0,$.d6,$.L)
p=$.K
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aI
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.B
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
h.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.iK,$.l)
t.i(0,$.d6,$.l)
t.i(0,$.c6,$.l)
t.i(0,$.cD,$.m)
t.i(0,$.cw,$.l)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.B+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
h.i(0,new X.G(s,t,null),$.ao)}}
Y.oZ.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Walking Stick",H.a([$.X,$.P,$.dk],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Adorable Girlscout Beret",H.a([$.Q,$.P,$.xe,$.Y,$.a0],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Map",H.a([$.M,$.P,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Compass",H.a([$.F,$.P,$.Y,$.a4],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p
t=[P.x]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.di,$.l)
t.i(0,$.c7,$.l)
t.i(0,$.bf,$.l)
t.i(0,$.bZ,$.L)
t.i(0,$.b_,$.L)
r="Now that the "+$.B+" has been defeated, the planet has really opened up. The "
q=$.o
p=[U.b]
t.i(0,new R.a7("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.t+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
q="The "+$.B+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.o
t.i(0,new R.bB("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.t+" "+$.K+"s in time to stop them.   ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.bO)}}
L.p_.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Scroll",H.a([$.M,$.P,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Ink Pot",H.a([$.b9,$.P,$.am,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Blank Book",H.a([$.M,$.P,$.av,$.Y,$.am,$.a0],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.mi,$.l)
t.i(0,$.bf,$.l)
t.i(0,$.cC,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.cl,$.m)
r="The "+$.B+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q="Now that the "+$.B+" has been taken care of, the "
r=$.o
q=q+r+" discovers a large library of "
o=$.t
t.i(0,new R.a7("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
S.p1.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Cueball",H.a([$.eo,$.n5,$.P,$.ac,$.au,$.a0],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Crystal Ball",H.a([$.eo,$.xc,$.P,$.b4],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Binoculars",H.a([$.b9,$.P,$.F],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Blindfold",H.a([$.x5,$.P,$.b7],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.wQ,$.l)
t.i(0,$.hf,$.l)
t.i(0,$.un,$.l)
t.i(0,$.cD,$.m)
r="Now that the "+$.B+" has been defeated, the land is really starting to open up. The "
q=$.o
r=r+q+" finds a tunnel filled with Blind "
p=$.t
o=[U.b]
t.i(0,new R.a7("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.A(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
q="The "+$.B+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.o
t.i(0,new R.bB("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.o
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.t
t.i(0,new R.a7("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.A(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
r="A group of underlings are still making trouble, even after the defeat of the "+$.B+". The "
p=$.o
r=r+p+" begins planting rumors of a huge "
q=$.ad
t.i(0,new R.a7("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.A(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
T.c1.prototype={}
Y.pa.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Meddler's Guide",H.a([$.av,$.P,$.M,$.bw,$.a0,$.aL],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("First Aid Kit",H.a([$.b9,$.P,$.aL],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.h("Cloud in a Bottle",H.a([r,r,$.bm],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Fairy Wings",H.a([$.a4,$.P,$.b4,$.ay,$.M],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.bf,$.m)
t.i(0,$.di,$.l)
t.i(0,$.cD,$.m)
t.i(0,$.b_,$.m)
t.i(0,$.c7,$.l)
r="The defeat of the "+$.B+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
q="Now that the "+$.B+" has been taken care of, the "
r=$.o
q=q+r+" finds a long line of "
o=$.t
t.i(0,new R.a7("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
N.pb.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Fiduspawn Plush",H.a([$.cf,$.Q,$.b7],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Teddy Bear",H.a([$.cf,$.Q,$.b7],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Dice",H.a([$.uI,$.aA],s),null,!1,"D113")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Pigeon",H.a([$.bA,$.au,$.bj,$.bc,$.bp,$.uR],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Cat Ears",H.a([$.Q,$.b7,$.cf],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Religious Text",H.a([$.av,$.M],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Psychology Book",H.a([$.av,$.M],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Therapy Couch",H.a([$.b7,$.Q],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("FLARP Manual",H.a([$.av,$.M,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.dj,$.L)
q.i(0,$.b_,$.m)
q.i(0,$.cl,$.l)
q.i(0,$.cC,$.m)
p=$.o
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.t
m=[U.b]
q.i(0,new R.a1("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aI+" or "+$.ad+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.K+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dj,$.L)
s.i(0,$.b_,$.l)
s.i(0,$.cl,$.l)
s.i(0,$.ul,$.l)
s.i(0,$.cB,$.l)
s.i(0,$.us,$.l)
s.i(0,$.cC,$.m)
o=$.o
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.K
n=n+l+"ing "
k=$.t
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aI
s.i(0,new R.a1("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cV,$.L)
t.i(0,$.dM,$.l)
t.i(0,$.c7,$.l)
t.i(0,$.dN,$.l)
t.i(0,$.hd,$.l)
r=$.o
q="The "+r+" wanders into an entire crowd of "
o=$.t
t.i(0,new R.a1("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.K+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(s,t,null),$.aC)}}
M.bC.prototype={}
N.pd.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Frog Statue",H.a([$.aF,$.ax,$.S],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Frog Costume",H.a([$.Q,$.S],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Nuclear Reactor",H.a([$.c0,$.Y,$.a9,$.S],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Telescope",H.a([$.F,$.b9,$.Y,$.S],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Green Sun Poster",H.a([$.M,$.S,$.uL,$.a0],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=$.o
s=[P.x]
r=H.a(["Wherever the "+t+" goes, they find a "+$.t+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.K+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.B+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.o
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.t+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.t+" tells the "
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
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cD,$.L)
t.i(0,$.uo,$.l)
s=[U.b]
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.o
t.i(0,new R.bB("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.A(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
this.f.i(0,new X.G(o,t,null),$.Hv)}}
U.aj.prototype={
gJ:function(a){return this.d+"kind"},
$isbG:1,
$asbG:function(){return[A.a2]}}
K.cE.prototype={
gJ:function(a){return this.a}}
M.ph.prototype={
aY:function(a){return"application/octet-stream"},
P:function(a6,a7){var t=0,s=P.bo(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$P=P.bu(function(a8,a9){if(a8===1)return P.br(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dh(null,0)
q.a=J.e_(a7,0)
for(p=0,o="";p<6;++p)o+=H.fs(q.ac(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.j("Invalid header: "+n)
m=q.ac(8)
l=9+m*6
o=8*m
k=q.ac(o)
j=q.ac(o)
i=q.ac(o)
h=q.ac(o)
g=q.ac(o)
f=q.ac(o)
o=P.E
e=P.x
d=P.cy(o,e)
c=new O.cX(k,j,null,null,null,null,null,null,d,P.cy(e,o))
c.x=new Uint8Array(H.cz(k*j))
b=q.ac(8)
for(o=[o],p=0;p<b;++p){a=q.ac(8)
a0=q.ac(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.ac(8)
if(a2>=e){r=H.v(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.pI(a1,0,null))}a4=q.ac(8)
a5=$.$get$y3().n(0,a4)
if(a5==null)throw H.j("Sprite decoding error: Encoding id "+a4+" not supported.")
c.iL(i,h,g,a5.c.$4(a7,l,g*f,c))
c.iv()
r=c
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdr:function(){return[O.cX]},
$asc8:function(){return[O.cX,P.bi]}}
R.pO.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Meddler's Guide",H.a([$.av,$.P,$.M,$.bw,$.a0,$.aL],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("First Aid Kit",H.a([$.b9,$.P,$.aL],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.h("Cloud in a Bottle",H.a([r,r,$.bm],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Fairy Wings",H.a([$.a4,$.P,$.b4,$.ay,$.M],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cl,$.l)
t.i(0,$.b_,$.l)
t.i(0,$.di,$.m)
t.i(0,$.fb,$.m)
t.i(0,$.uk,$.m)
t.i(0,$.e3,$.m)
t.i(0,$.iJ,$.m)
t.i(0,$.ur,$.m)
r=$.o
q="The "+r+" decides to take a break after defeating "+$.B+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.t
o=[U.b]
t.i(0,new R.a7("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.K+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.vC(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
r=$.t
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.o
t.i(0,new R.a7("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
r=$.t
q="The "+r+"s are so stressed after all that shit with the "+$.B+". They are yelling and "+$.K+" at each other over the slightest of insults. The "
p=$.o
t.i(0,new R.a7("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p="The "+$.B+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.o
p=p+r+" purifies the pools "
q=$.t
t.i(0,new R.bB("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
r="The defeat of the "+$.B+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.t
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.o
t.i(0,new R.a7("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aI+". Huh. Okay then.")],H.a([],o),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
L.pS.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Lightning",H.a([$.aK,$.bd,$.S],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Ice",H.a([$.bn,$.xm,$.jF],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Taserface",H.a([$.aH,$.aK],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Taser",H.a([$.aK,$.S,$.aH],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.dL,$.L)
t.i(0,$.bZ,$.l)
t.i(0,$.iK,$.m)
t.i(0,$.d4,$.m)
r=$.o
q="The "+r+" is walking around on their land, when a "
p=$.t
q=q+p+" walks up to them, and tells them about "
o=$.B
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.K+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.R("Rebel Against Your Land",!1,[new U.b(q),new U.b(p),new U.b(n),new U.W(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.b]),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
this.f.i(0,new X.G(s,t,null),$.ao)}}
D.pU.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Robot",H.a([$.a9,$.F,$.au,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Circuit Board",H.a([$.a9,$.F],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Datastructures for Assholes",H.a([$.a9,$.M],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a9,$.M,$.aD,$.av],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("3-D Printer",H.a([$.aA,$.a9,$.F],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Virus on a USB Stick",H.a([$.xh,$.F],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Wrench",H.a([$.uY,$.F,$.ac],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Computer",H.a([$.a9,$.F],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.iP,$.m)
q.i(0,$.f7,$.l)
q.i(0,$.f9,$.l)
q.i(0,$.cd,$.L)
p=$.o
o="The "+p+" learns from their "
n=$.t
o=o+n+"s about the great "
m=$.aI
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.B+" destroyed it. "
o="The "+p+" searches for the "
l=$.ad
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.Gv
p=[U.b]
q.i(0,new R.a1("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.A(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.D)
l=$.o
m="The "+l+" is approached by a "
o=$.t
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.K
q.i(0,new R.a1("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.B+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ad+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.ft(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.f9,$.l)
s.i(0,$.el,$.L)
s.i(0,$.f8,$.m)
s.i(0,$.cV,$.l)
s.i(0,$.cd,$.L)
o=$.o
n="The "+o+" learns that all of the local "
l=$.t
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
o=$.o
l="The "+o+" finds two groups of "
n=$.t
l=l+n+"s screaming and "
k=$.K
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ad
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.a1("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.eb(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.iP,$.L)
t.i(0,$.f7,$.l)
t.i(0,$.f9,$.l)
t.i(0,$.cd,$.L)
r=$.o
q="The "+r+" learns from a mysterious "+$.t+" in a black trenchcoat about a great "
o=$.aI
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.B
t.i(0,new R.a1("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(s,t,null),$.aC)}}
V.pV.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Lighter",H.a([$.F,$.at],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Siberia Poster",H.a([$.M,$.bn],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Nuclear Winter Poster",H.a([$.M,$.bn,$.c0],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Doomsday Device",H.a([$.F,$.aD,$.c0,$.bd,$.bp],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Juggalo Poster",H.a([$.M,$.xn],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Fancy Watch",H.a([$.F,$.bh,$.bd],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Magnificent Crown",H.a([$.F,$.bh,$.bd],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Bitching Clothes",H.a([$.Q,$.fi,$.bd],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Ceramic Pork Hollow",H.a([$.bQ,$.bh],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Shit Ton of Guns",H.a([$.F,$.uS,$.aN,$.bd],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Sniper Rifle",H.a([$.F,$.uV,$.aN,$.bd],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("AK-47",H.a([$.F,$.uO,$.aN,$.bd],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("IED",H.a([$.n0,$.aw,$.F,$.bq,$.bd],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Idiots Guide To Being An Asshole",H.a([$.M,$.bw,$.av],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Bike Horn",H.a([$.ca,$.F,$.aK,$.bw],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Matches",H.a([$.X,$.at],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.dM,$.l)
q.i(0,$.e4,$.l)
q.i(0,$.fa,$.l)
q.i(0,$.mm,$.l)
q.i(0,$.dN,$.m)
p=$.o
o=[U.b]
q.i(0,new R.a1("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.A(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cA,$.m)
s.i(0,$.dM,$.l)
s.i(0,$.cx,$.l)
s.i(0,$.dN,$.m)
n=$.o
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.t
s.i(0,new R.a1("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ad+" underling. Tremble at the fearsome "+$.aI+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.A(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d5,$.l)
q.i(0,$.bf,$.L)
q.i(0,$.dO,$.l)
q.i(0,$.bY,$.m)
q.i(0,$.e3,$.L)
q.i(0,$.d4,$.L)
n=$.o
m="The "+n+" learns that all of the local "
l=$.t
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.l)
t.i(0,$.d4,$.L)
t.i(0,$.ek,$.l)
t.i(0,$.iO,$.l)
t.i(0,$.cd,$.m)
t.i(0,$.en,$.m)
s=$.o
r="The "+s+" finds a crowd of "
n=$.K
r=r+n+"ing "
m=$.t
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aI+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.a1("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.D)
p.i(0,new X.G(q,t,null),$.aC)}}
X.G.prototype={
C:function(a){return"Theme: "+H.y(this.a)}}
U.q0.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Lockpick",H.a([$.F,$.P,$.am,$.aM,$.a0],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Sneaking Suit",H.a([$.Q,$.P,$.am],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Dagger",H.a([$.F,$.P,$.aM,$.aw,$.uH],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.c6,$.l)
t.i(0,$.dv,$.m)
t.i(0,$.bZ,$.m)
t.i(0,$.cV,$.m)
r="The "+$.B+" cannot release the frogs since the corrupt "
q=$.t
r=r+q+" Cops have confiscated them. The "
p=$.o
o=[U.b]
t.i(0,new R.bB("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
p=$.o
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.B+"'s layer and slated to be returned to the "
r=$.t
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.K+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a7("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.D)
r=$.t
p="A weeping "+r+" approaches the "
n=$.o
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.B
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aI+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.K+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a7("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.D)
r=$.B
n="Now that the "+r+" has been defeated, the "
p=$.t
n=n+p+"s have recovered their precious "
q=$.ad
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.o
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.K
l=n+l+"worth, the disaffected Heir to the "+$.aI+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a7("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
N.q1.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Grandfather Clock",H.a([$.X,$.al,$.bh,$.S],s),null,!1,"Ticking Tower of Time")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Drum",H.a([$.xr,$.S,$.aa],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Dead Doppelganger",H.a([$.aF,$.bj,$.S,$.bc,$.ba,$.aD],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Music Box",H.a([$.F,$.S,$.aa,$.al],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Turn Tables",H.a([$.F,$.S,$.aa,$.a0,$.aq],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Metronome",H.a([$.F,$.S,$.aa],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.wS,$.ak)
q.i(0,$.cd,$.m)
q.i(0,$.cV,$.m)
q.i(0,$.f8,$.l)
p=$.B
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.o
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.b]
q.i(0,new R.a7("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.ey(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.t+"s, they set out to fix the "
m=$.ad
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.B
q.i(0,new R.R("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.W("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
j=this.f
j.i(0,new X.G(s,q,null),$.ao)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.he,$.l)
s.i(0,$.e4,$.L)
s.i(0,$.cd,$.l)
p=$.o
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.t+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.B
s.i(0,new R.R("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.W(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
j.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.cl,$.l)
t.i(0,$.di,$.l)
r=$.B
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ad
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.o
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.t+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.R("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.W(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hP(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
k=$.B
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ad
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.o
t.i(0,new R.R("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.t+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.W("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.ey(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
r="With the defeat of the "+$.B+", "
k=$.o
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.t
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aI
t.i(0,new R.a7("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.ey(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.t
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.o
t.i(0,new R.R("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.K+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.W("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.B+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
j.i(0,new X.G(s,t,null),$.ao)}}
G.a_.prototype={
C:function(a){var t=this.b
if(t.length!==0)return C.b.gaj(t)
return"NULL TRAIT"},
geG:function(){return this.a},
gem:function(){return this.b},
gbL:function(){return this.c}}
G.aJ.prototype={}
G.ah.prototype={}
G.bK.prototype={}
G.d.prototype={
gis:function(){return this.e.length},
gbL:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.c4)(t),++q)r+=t[q].c
return r},
aH:function(a,b){return C.a.b0(b.gis()-this.e.length)},
eR:function(a){return C.b.hS(this.e,a.ghz(a))},
$isbG:1,
$asbG:function(){return[G.d]},
gJ:function(a){return this.d},
gff:function(){return this.e}}
G.n6.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a_]}}}
Q.qq.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Cardboard Box",H.a([$.M,$.S,$.am],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Hole Punch",H.a([$.F,$.S,$.am],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Smoke Bombs",H.a([$.bq,$.S,$.am,$.n0],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Tribal Mask",H.a([$.bc,$.S,$.am,$.ba,$.bS],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Opera Mask",H.a([$.aA,$.S,$.am,$.al],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Black Hole in a Bottle.",H.a([$.S,$.a0,$.uL,$.am,$.b9],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.dj,$.l)
q.i(0,$.ml,$.l)
q.i(0,$.hh,$.l)
q.i(0,$.hf,$.l)
p=$.B
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.o
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.t
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.b]
q.i(0,new R.a7("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.D)
m=$.o
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.B
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.R("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.W(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
i=this.f
i.i(0,new X.G(s,q,null),$.ao)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dj,$.m)
s.i(0,$.ml,$.m)
s.i(0,$.hh,$.m)
s.i(0,$.c6,$.l)
p=$.o
o="Even with the victory of the "+p+" over the villainous "
n=$.B
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.t+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ad
s.i(0,new R.a7("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.ft(),!1,!1,new Y.c_("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
s.i(0,new R.R("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.K+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.W("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.B+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.t+"s.")],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
i.i(0,new X.G(q,s,null),$.ao)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.dj,$.l)
t.i(0,$.ml,$.l)
t.i(0,$.hh,$.l)
r=$.o
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.B+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.R("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.W(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
i.i(0,new X.G(s,t,null),$.ao)}}
E.qr.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Yardstick",H.a([$.dk,$.P,$.jG,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("SBURBSim Hacking Guide",H.a([$.av,$.P,$.ht,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Body Pillow of JR",H.a([$.Q,$.P,$.e7,$.n1,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Nanobots",H.a([$.uW,$.P,$.mY],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cD,$.l)
t.i(0,$.d6,$.l)
t.i(0,$.du,$.l)
t.i(0,$.di,$.l)
t.i(0,$.ej,$.l)
t.i(0,$.dL,$.l)
t.i(0,$.hh,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.vC(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.D)
r=$.B
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ch+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.K
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xZ(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.D)
q=$.o
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.A(),!1,!1,new Y.dS("Rewards/no_reward.png",null),1,null,null),$.D)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.B
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
m=$.o
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.B+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.A(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ak)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a7("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.A(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a7("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y_(),!1,!1,new Y.c_("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a7("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.B
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bB("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
this.x.i(0,new X.G(s,t,null),$.ao)}}
M.qv.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Cauldron",H.a([$.xq,$.P,$.a4],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Flying Broom",H.a([$.jC,$.dk,$.P,$.X,$.a4],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Warped Mirror",H.a([$.uP,$.P,$.a4,$.am,$.a0],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.bY,$.m)
t.i(0,$.hj,$.m)
t.i(0,$.d5,$.m)
t.i(0,$.cV,$.m)
t.i(0,$.cw,$.m)
t.i(0,$.uo,$.m)
r=$.B
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.t
q=q+p+" consorts. It's up to the "
o=$.o
n=[U.b]
t.i(0,new R.bB("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ak)
o="Even with the defeat of the "+$.B+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.t
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aI
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.o
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a7("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.D)
q="A Mysterious "+$.t+" approaches the "
p=$.o
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aI
q=q+r+" was discovered amongst the "+$.B+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a7("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.D)
r=$.t
p="A young "+r+" approaches the "
m=$.o
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aI
t.i(0,new R.a7("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ad+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.K+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.A(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.D)
this.x.i(0,new X.G(s,t,null),$.bO)}}
U.qw.prototype={
P:function(a5,a6){var t=0,s=P.bo(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$P=P.bu(function(a7,a8){if(a7===1)return P.br(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.ed(a6,$.$get$yp())
if(0>=p.length){r=H.v(p,0)
t=1
break}if(J.zM(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.v(p,0)
t=1
break}throw H.j("Invalid WordList file header: '"+H.y(p[0])+"'")}o=P.x
n=H.a([],[o])
m=P.cy(o,B.kp)
q.a=null
l=P.cy(o,o)
for(k=P.V,j=B.dD,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cI()
""+i
H.y(g)
f.toString
f=J.ed(g,$.$get$yn())
if(0>=f.length){r=H.v(f,0)
t=1
break $async$outer}g=f[0]
f=J.bb(g)
if(f.gX(g)===!0){$.$get$cI().toString
continue}if(f.ai(g,$.$get$yo())){$.$get$cI().toString
continue}if(C.c.ai(g,"@")){e=C.c.am(g,1)
$.$get$cI().toString
n.push(e)}else if(C.c.ai(g,"?")){f=C.c.am(g,1)
f=$.$get$i_().b6(0,f)
f=H.dy(f,B.kR(),H.ar(f,"n",0),null)
d=P.dl(f,!0,H.ar(f,"n",0))
if(d.length<2)$.$get$cI().bj(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cI()
H.y(c)
H.y(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$yq()
a=f.cz(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.v(f,1)
t=1
break $async$outer}a0=J.c5(f[1])
a1=C.c.am(g,a0)
if(a1.length===0)continue
f=J.ai(a0)
if(f.T(a0,0)){a1=C.c.eS(a1)
$.$get$cI().toString
f=P.cy(o,o)
a2=new B.kp(P.cy(o,k),f,a1,!1,null,null)
a2.dv(null,null,j)
q.a=a2
f.aD(0,l)
m.i(0,a1,q.a)}else if(f.T(a0,$.yr))if(C.c.ai(a1,"?")){a1=C.c.am(a1,1)
f=$.$get$i_().b6(0,a1)
f=H.dy(f,B.kR(),H.ar(f,"n",0),null)
d=P.dl(f,!0,H.ar(f,"n",0))
f=$.$get$cI()
f.toString
if(d.length<2)f.bj(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kV(d[0],$.$get$fy(),"")
if(1>=d.length){r=H.v(d,1)
t=1
break $async$outer}b=J.kV(d[1],$.$get$fy(),"")
f=$.$get$cI()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.ai(a1,"@")){e=C.c.am(a1,1)
$.$get$cI().toString
f=$.$get$i_().b6(0,a1)
f=H.dy(f,B.kR(),H.ar(f,"n",0),null)
d=P.dl(f,!0,H.ar(f,"n",0))
a4=d.length>1?H.xW(d[1],new U.qx(q,d)):1
q.a.c.i(0,C.c.d9(e,$.$get$fy(),""),a4)}else{$.$get$cI().toString
f=$.$get$i_().b6(0,g)
f=H.dy(f,B.kR(),H.ar(f,"n",0),null)
d=P.dl(f,!0,H.ar(f,"n",0))
a4=d.length>1?H.xW(d[1],new U.qy(q,d)):1
if(0>=d.length){r=H.v(d,0)
t=1
break $async$outer}f=C.c.bv(J.kV(d[0],$.$get$fy(),""))
h=new B.dD(null)
a3=P.cy(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.f(h,f.k(h,J.wr(a4)),[H.ar(f,"cQ",0)]))}else if(f.T(a0,$.yr*2)){$.$get$cI().toString
f=$.$get$i_().b6(0,g)
f=H.dy(f,B.kR(),H.ar(f,"n",0),null)
d=P.dl(f,!0,H.ar(f,"n",0))
f=d.length
if(f!==2)$.$get$cI().bj(C.h,"Invalid variant for "+H.y(h.dh(0))+" in "+q.a.e)
else{if(0>=f){r=H.v(d,0)
t=1
break $async$outer}f=C.c.bv(J.kV(d[0],$.$get$fy(),""))
if(1>=d.length){r=H.v(d,1)
t=1
break $async$outer}a3=C.c.d9(U.Hy(d[1]),$.$get$fy(),"")
h.a.i(0,f,a3)}}}}}r=new B.i5(n,m)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$aseF:function(){return[B.i5]},
$asc8:function(){return[B.i5,P.x]}}
U.qx.prototype={
$1:function(a){var t,s,r
t=$.$get$cI()
s=this.b
if(1>=s.length)return H.v(s,1)
r="Invalid include weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.v(s,0)
t.bj(C.m,r+H.y(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.x]}}}
U.qy.prototype={
$1:function(a){var t,s,r
t=$.$get$cI()
s=this.b
if(1>=s.length)return H.v(s,1)
r="Invalid weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.v(s,0)
t.bj(C.m,r+H.y(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.x]}}}
F.qA.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a2)
s=[G.a_]
r=A.h("Make a World Book",H.a([$.M,$.al,$.av],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Quill Pen",H.a([$.b7,$.Q,$.n3],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Book On Writing",H.a([$.av,$.M,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("FLARP Manual",H.a([$.av,$.M,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Script",H.a([$.av,$.M],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Fancy Pen",H.a([$.F,$.Y,$.n3,$.al],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.h("Spiral Bound Notebook",H.a([$.av,$.M,$.F],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.h("Half Written Novel",H.a([$.av,$.M],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.dj,$.l)
q.i(0,$.cC,$.l)
q.i(0,$.bf,$.m)
q.i(0,$.b_,$.m)
q.i(0,$.hg,$.m)
p=$.o
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.t+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.a1("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.A(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.D)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dN,$.m)
s.i(0,$.cA,$.m)
s.i(0,$.cx,$.m)
s.i(0,$.bf,$.m)
p=$.t
o="An Excited "+p+" rushes up to the "
n=$.o
s.i(0,new R.a1("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.K+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.A(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cA,$.m)
t.i(0,$.dM,$.l)
t.i(0,$.cx,$.l)
t.i(0,$.dN,$.m)
t.i(0,$.du,$.l)
r=$.o
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.t
t.i(0,new R.a1("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.A(),!1,!1,new Y.d3("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.D)
m.i(0,new X.G(s,t,null),$.aC)}}
B.qF.prototype={
aY:function(a){return"application/x-tar"},
P:function(a,b){var t=0,s=P.bo(),r,q,p
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$ys()
p=J.wg(b)
q.toString
r=q.hH(T.uB(p,0,null,0),!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdr:function(){return[T.fO]},
$asc8:function(){return[T.fO,P.bi]}}
A.fW.prototype={}
B.ds.prototype={
cP:function(a){if(a)this.b=(this.b|C.a.au(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.N+=H.fs(this.b)
this.b=0}},
an:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.au(1,t)
if(typeof a!=="number")return a.aQ()
this.cP((a&s)>>>0>0)}},
hr:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.aA(1,t-s)
if(typeof a!=="number")return a.aQ()
this.cP((a&r)>>>0>0)}},
c0:function(a){var t,s
a=J.dZ(a,1)
t=C.d.dt(Math.log(H.kM(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cP(!1)
this.hr(a,t+1)},
bc:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.N
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a6(r)
q+=r
p=r}else p=0
r=H.cz(q)
o=new Uint8Array(r)
if(t){n=H.cN(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.v(o,m)
o[m]=l}}t=s.N
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.aa(k,m)
if(s<0||s>=r)return H.v(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.v(o,t)
o[t]=s}return o.buffer}}
B.dh.prototype={
cH:function(a){var t,s,r,q
t=C.f.ap(a/8)
s=C.a.bR(a,8)
r=this.a.getUint8(t)
q=C.a.aA(1,s)
if(typeof r!=="number")return r.aQ()
return(r&q)>>>0>0},
ac:function(a){var t,s,r
if(a>32)throw H.j(P.dI(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cH(this.b);++this.b
if(r)t=(t|C.a.au(1,s))>>>0}return t},
iu:function(a){var t,s,r,q
if(a>32)throw H.j(P.dI(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cH(this.b);++this.b
if(q)s=(s|C.a.aA(1,t-r))>>>0}return s},
ca:function(){var t,s,r
for(t=0;!0;){s=this.cH(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.iu(t+1)-1}}
A.e0.prototype={
C:function(a){return"rgb("+H.y(this.b)+", "+H.y(this.c)+", "+H.y(this.d)+", "+H.y(this.a)+")"},
iF:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aA()
s=this.c
if(typeof s!=="number")return s.aA()
r=this.d
if(typeof r!=="number")return r.aA()
q=this.a
if(typeof q!=="number")return H.a6(q)
return(t<<24|s<<16|r<<8|q)>>>0},
T:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.e0){t=this.b
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
ga5:function(a){return this.iF(!0)},
R:function(a,b){var t,s,r,q,p,o,n,m
t=J.ai(b)
if(!!t.$ise0){t=this.b
s=b.b
if(typeof t!=="number")return t.R()
if(typeof s!=="number")return H.a6(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.R()
if(typeof q!=="number")return H.a6(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.R()
if(typeof o!=="number")return H.a6(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.R()
if(typeof m!=="number")return H.a6(m)
return A.fZ(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.be()
s=this.c
if(typeof s!=="number")return s.be()
r=this.d
if(typeof r!=="number")return r.be()
q=this.a
if(typeof q!=="number")return q.be()
return A.wA(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.R()
s=this.c
if(typeof s!=="number")return s.R()
r=this.d
if(typeof r!=="number")return r.R()
return A.fZ(t+b,s+b,r+b,this.a)}throw H.j("Cannot add ["+H.y(t.gad(b))+" "+H.y(b)+"] to a Colour. Only Colour, double and int are valid.")},
al:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.be()
s=this.c
if(typeof s!=="number")return s.be()
r=this.d
if(typeof r!=="number")return r.be()
q=this.a
if(typeof q!=="number")return q.be()
return A.wA(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){var t=J.ai(b)
if(t.T(b,0))return this.b
if(t.T(b,1))return this.c
if(t.T(b,2))return this.d
if(t.T(b,3))return this.a
throw H.j("Colour index out of range: "+H.y(b))},
i:function(a,b,c){var t,s
t=J.dp(b)
if(t.a4(b,0)||t.aF(b,3))throw H.j("Colour index out of range: "+H.y(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.T(b,0)){this.b=C.a.ag(c,0,255)
this.e=!0
this.y=!0}else if(t.T(b,1)){this.c=C.a.ag(c,0,255)
this.e=!0
this.y=!0}else if(t.T(b,2)){this.d=C.a.ag(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ag(c,0,255)
else if(t.T(b,0)){this.b=C.a.ag(J.kT(J.wf(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.T(b,1)){this.c=C.a.ag(J.kT(J.wf(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kN(c)
if(t.T(b,2)){this.d=C.a.ag(J.kT(s.al(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ag(J.kT(s.al(c,255)),0,255)}},
fn:function(a,b,c,d){this.b=C.d.ag(C.d.ag(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ag(C.d.ag(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ag(C.d.ag(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ag(J.zg(d,0,255),0,255)}}
A.tx.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.x]}}}
A.nA.prototype={
$1:function(a){return this.a.eJ(a)},
$S:function(){return{func:1,args:[,]}}}
A.ny.prototype={
$1:function(a){this.a.P(0,a).b1(this.b.gir())},
$S:function(){return{func:1,args:[,]}}}
A.nz.prototype={
$1:function(a){this.a.hy(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.nB.prototype={
$1:function(a){return this.a.aI(0,this.b)},
$S:function(){return{func:1,args:[W.Z]}}}
F.hE.prototype={
C:function(a){return this.b}}
F.hF.prototype={
bj:function(a,b){F.Gj(a).$1("("+this.c+")["+H.y(C.b.gbi(a.b.split(".")))+"]: "+H.y(b))},
cV:function(a,b){this.bj(C.h,b)},
gJ:function(a){return this.c}}
F.vb.prototype={}
O.tT.prototype={
$1:function(a){return H.y(a.bk(1))+" = "+H.y(a.bk(2))+C.c.al("../",this.a)},
$S:function(){return{func:1,args:[P.dz]}}}
O.tU.prototype={
$0:function(){var t=document
J.wn(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.x,null)
t=H.kQ(t.querySelector("#voidButton"),"$isfY")
t.toString
W.eO(t,"click",new O.tS(),!1,W.e8)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.J0("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.tS.prototype={
$1:function(a){return O.J5()},
$S:function(){return{func:1,args:[W.Z]}}}
R.hk.prototype={}
R.vs.prototype={}
R.vr.prototype={}
A.ol.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.a_(0,b)?t.n(0,b):$.$get$vq()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.a_(0,b)?t.n(0,b):$.$get$vq()}throw H.j(P.dI(b,"'name' should be a String name or int id only",null))},
gY:function(a){var t=this.a
t=t.gce(t)
return new H.jO(null,J.cJ(t.a),t.b,[H.N(t,0),H.N(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.a_(0,b))this.as(0,b)
s=this.h6()
if(typeof s!=="number")return s.ay()
if(s>=256)throw H.j(P.dI(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
as:function(a,b){var t,s,r
t=this.a
if(!t.a_(0,b))return
s=this.c
r=s.n(0,b)
t.as(0,b)
this.b.as(0,r)
s.as(0,b)
this.d.as(0,r)},
h6:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.a_(0,s))return s;++s}}}
A.jZ.prototype={
$asn:function(){return[A.e0]},
$isn:1}
Q.k2.prototype={}
A.k5.prototype={
bK:function(a){if(a===0)return 0
return this.h7(a)},
ih:function(){return this.bK(4294967295)},
h7:function(a){var t,s
t=this.a
if(a>4294967295){s=t.d_()
this.b=C.d.b0(s*4294967295)
return C.d.ap(s*a)}else{s=t.bK(a)
this.b=s
return s}},
dl:function(a){var t=a==null
this.a=t?C.R:P.HP(a)
if(!t)this.b=J.dZ(a,1)},
ip:function(a,b){var t=a.length
if(t===0)return
t=this.bK(t)
if(t<0||t>=a.length)return H.v(a,t)
return a[t]},
io:function(a){return this.ip(a,!0)}}
Y.dR.prototype={
cN:function(a){var t,s
if(this.b!=null)throw H.j("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bk(0,$.ap,null,t)
this.c.push(new P.dX(s,t))
return s},
eJ:function(a){var t,s,r
if(this.b!=null)throw H.j("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.c4)(t),++r)t[r].aI(0,this.b)
C.b.sm(t,0)}}
V.lW.prototype={
$4:function(a,b,c,d){return V.AE(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.E,P.bi,P.bi,O.cX]}}}
V.lV.prototype={
$4:function(a,b,c,d){return V.AD(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.E,P.E,O.cX]}}}
V.lU.prototype={
$4:function(a,b,c,d){return V.AA(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.E,P.bi,P.bi,O.cX]}}}
V.lT.prototype={
$4:function(a,b,c,d){return V.Az(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.E,P.E,O.cX]}}}
O.cX.prototype={
iv:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
iL:function(a,b,c,d){var t,s,r,q,p
t=J.b1(d)
s=0
while(!0){r=t.geD(d)
if(typeof r!=="number")return H.a6(r)
if(!(s<r))break
q=(C.a.dt(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.v(r,q)
r[q]=p;++s}}}
D.pk.prototype={
$1:function(a){return a.giq()},
$S:function(){return{func:1,args:[D.cF]}}}
D.cF.prototype={
C:function(a){return this.a},
gJ:function(a){return this.a},
giq:function(){return this.d}}
D.kq.prototype={}
D.oN.prototype={}
B.dD.prototype={
f_:function(a,b){if(this.a.a_(0,"MAIN"))return this.a.n(0,"MAIN")
return},
dh:function(a){return this.f_(a,null)},
C:function(a){return"[Word: "+H.y(this.dh(0))+"]"}}
B.kp.prototype={
C:function(a){return"WordList '"+this.e+"': "+this.fj(0)},
$isp:1,
$asp:function(){return[B.dD]},
$asdW:function(){return[B.dD]},
$asi4:function(){return[B.dD]},
$ascQ:function(){return[B.dD]},
$asn:function(){return[B.dD]},
$asr:function(){return[B.dD]},
gJ:function(a){return this.e}}
B.i5.prototype={
C:function(a){return"[WordListFile: "+this.b.C(0)+" ]"}}
S.fp.prototype={}
S.vT.prototype={}
S.vU.prototype={}
S.vV.prototype={}
S.ug.prototype={}
S.uj.prototype={}
S.u6.prototype={}
S.vD.prototype={}
S.vX.prototype={}
S.vY.prototype={}
S.li.prototype={}
S.vt.prototype={}
S.vp.prototype={}
S.ns.prototype={}
S.ua.prototype={}
S.u1.prototype={}
S.lD.prototype={}
S.vc.prototype={}
S.lE.prototype={}
S.on.prototype={}
S.vK.prototype={}
S.vH.prototype={}
S.vL.prototype={}
S.u0.prototype={}
S.mC.prototype={}
S.lg.prototype={}
S.u5.prototype={}
S.u4.prototype={}
S.vu.prototype={}
S.vM.prototype={}
S.vv.prototype={}
S.ui.prototype={}
S.uh.prototype={}
S.vJ.prototype={}
S.vI.prototype={}
S.q_.prototype={}
S.vO.prototype={}
S.u7.prototype={}
S.u8.prototype={}
S.vW.prototype={}
S.hH.prototype={}
S.vh.prototype={}
S.vi.prototype={}
S.vj.prototype={}
S.vk.prototype={}
S.vE.prototype={}
S.vF.prototype={}
S.vG.prototype={}
S.vg.prototype={}
S.vm.prototype={}
S.vn.prototype={}
S.uw.prototype={}
S.ux.prototype={}
S.uy.prototype={}
S.vo.prototype={}
S.vl.prototype={}
S.u2.prototype={}
S.vQ.prototype={}
S.vR.prototype={}
S.vP.prototype={}
Z.v6.prototype={}
Z.v1.prototype={}
Z.v2.prototype={}
Q.cQ.prototype={
k:function(a,b){return b},
C:function(a){return J.cv(this.gc8())},
aE:function(a,b){return Q.w_(this,b,H.ar(this,"cQ",0),null)},
a8:function(a,b){return Q.vZ(this,!1,!0,null,H.ar(this,"cQ",0))},
at:function(a){return this.a8(a,!0)},
$isn:1,
$asn:null}
Q.dW.prototype={
gc8:function(){return this.b},
c_:function(a,b,c){C.b.h(this.b,new Q.f(b,this.k(b,J.wr(c)),[H.ar(this,"cQ",0)]))},
h:function(a,b){return this.c_(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return J.wl(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.v(t,b)
t[b]=new Q.f(c,s,[H.ar(this,"cQ",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
C:function(a){return P.jH(this.b,"[","]")},
aE:function(a,b){return Q.w_(this,b,H.ar(this,"dW",0),null)},
a8:function(a,b){return Q.vZ(this,!1,!0,null,H.ar(this,"dW",0))},
at:function(a){return this.a8(a,!0)},
dv:function(a,b,c){var t,s
this.a=a
t=[[Q.f,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.i4.prototype={$ascQ:null,$asn:null,$asp:null,$asr:null,$isp:1,$isr:1,$isn:1}
Q.f.prototype={
C:function(a){return"("+H.y(this.a)+" @ "+H.y(this.b)+")"},
ga1:function(a){return this.a},
gde:function(a){return this.b}}
Q.eM.prototype={
gc8:function(){return this.b},
gY:function(a){var t=new Q.qt(null,[H.ar(this,"eM",0)])
t.a=J.cJ(this.b)
return t},
gm:function(a){return J.c5(this.b)},
C:function(a){return J.cv(this.b)},
aE:function(a,b){return Q.w_(this,b,H.ar(this,"eM",0),null)},
a8:function(a,b){return Q.vZ(this,!1,!0,null,H.ar(this,"eM",0))},
at:function(a){return this.a8(a,!0)}}
Q.i3.prototype={$ascQ:null,$asn:null,$isn:1}
Q.qt.prototype={
gS:function(){return J.wl(this.a.gS())},
I:function(){return this.a.I()}}
Q.km.prototype={
$aseM:function(a,b){return[b]},
$asi3:function(a,b){return[b]},
$ascQ:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.qu.prototype={
$1:function(a){var t=J.b1(a)
return new Q.f(this.c.$1(t.ga1(a)),t.gde(a),[this.b])},
$S:function(){return H.eS(function(a,b){return{func:1,args:[[Q.f,a]]}},this,"km")}}
J.i.prototype.fg=J.i.prototype.C
J.hx.prototype.fi=J.hx.prototype.C
P.dd.prototype.fk=P.dd.prototype.bw
P.dd.prototype.fl=P.dd.prototype.bS
P.b6.prototype.ds=P.b6.prototype.a9
P.n.prototype.fh=P.n.prototype.cg
W.cc.prototype.cn=W.cc.prototype.aO
W.id.prototype.fm=W.id.prototype.b7
Q.dW.prototype.fj=Q.dW.prototype.C;(function installTearOffs(){installTearOff(H.fF.prototype,"gia",0,0,0,null,["$0"],["c6"],1)
installTearOff(H.dF.prototype,"gf2",0,0,0,null,["$1"],["aG"],6)
installTearOff(H.eN.prototype,"ghL",0,0,0,null,["$1"],["b8"],6)
installTearOff(H,"yM",1,0,0,null,["$1"],["Ii"],14)
installTearOff(P,"Il",1,0,0,null,["$1"],["HC"],8)
installTearOff(P,"Im",1,0,0,null,["$1"],["HD"],8)
installTearOff(P,"In",1,0,0,null,["$1"],["HE"],8)
installTearOff(P,"yY",1,0,0,null,["$0"],["Ih"],1)
installTearOff(P.ku.prototype,"gek",0,0,0,null,["$2","$1"],["cS","bB"],12)
installTearOff(P.bk.prototype,"gbm",0,0,0,null,["$2","$1"],["aq","fJ"],12)
var t
installTearOff(t=P.dd.prototype,"ge_",0,0,0,null,["$0"],["bV"],1)
installTearOff(t,"ge0",0,0,0,null,["$0"],["bW"],1)
installTearOff(t=P.eP.prototype,"ge_",0,0,0,null,["$0"],["bV"],1)
installTearOff(t,"ge0",0,0,0,null,["$0"],["bW"],1)
installTearOff(t,"gfV",0,0,0,null,["$1"],["fW"],function(){return H.eS(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"eP")})
installTearOff(t,"gfZ",0,0,0,null,["$2"],["h_"],33)
installTearOff(t,"gfX",0,0,0,null,["$0"],["fY"],1)
installTearOff(P.kB.prototype,"ghz",0,1,0,null,["$1"],["Z"],16)
installTearOff(P,"Iw",1,0,0,null,["$1"],["Ia"],6)
installTearOff(P,"Ix",1,0,0,null,["$2"],["Ah"],32)
installTearOff(P,"Iy",1,0,0,null,["$1"],["eT"],4)
installTearOff(W,"IK",1,0,0,null,["$4"],["HK"],13)
installTearOff(W,"IL",1,0,0,null,["$4"],["HL"],13)
installTearOff(W.io.prototype,"gak",0,1,0,null,["$0"],["i9"],17)
installTearOff(t=W.ir.prototype,"gav",0,1,0,null,["$1"],["cV"],4)
installTearOff(t,"gi4",0,0,0,null,["$1"],["eA"],4)
installTearOff(t,"giI",0,0,0,null,["$1"],["iJ"],4)
installTearOff(W.f4.prototype,"ga1",0,1,0,null,["$1"],["L"],5)
installTearOff(W.iv.prototype,"ga1",0,1,0,null,["$1"],["L"],35)
installTearOff(W.iC.prototype,"ga1",0,1,0,null,["$1"],["L"],5)
installTearOff(W.iD.prototype,"ga1",0,1,0,null,["$1"],["L"],14)
installTearOff(W.iE.prototype,"ga1",0,1,0,null,["$1"],["L"],5)
installTearOff(W.fd.prototype,"ga1",0,1,0,null,["$1"],["L"],15)
installTearOff(W.iU.prototype,"ga1",0,1,0,null,["$1"],["L"],10)
installTearOff(W.ff.prototype,"ga1",0,1,0,null,["$1"],["L"],9)
installTearOff(W.iW.prototype,"ga1",0,1,0,null,["$1"],["L"],9)
installTearOff(W.jQ.prototype,"ga1",0,1,0,null,["$1"],["L"],5)
installTearOff(W.jR.prototype,"ga1",0,1,0,null,["$1"],["L"],11)
installTearOff(W.jU.prototype,"gd4",0,1,0,null,["$0"],["d5"],7)
installTearOff(W.cg.prototype,"ga1",0,1,0,null,["$1"],["L"],11)
installTearOff(W.k4.prototype,"ga1",0,1,0,null,["$1"],["L"],18)
installTearOff(W.k9.prototype,"ga1",0,1,0,null,["$1"],["L"],10)
installTearOff(W.kb.prototype,"ga1",0,1,0,null,["$1"],["L"],19)
installTearOff(W.kc.prototype,"ga1",0,1,0,null,["$1"],["L"],20)
installTearOff(W.ci.prototype,"ga1",0,1,0,null,["$1"],["L"],21)
installTearOff(W.ki.prototype,"ga1",0,1,0,null,["$1"],["L"],22)
installTearOff(W.kj.prototype,"ga1",0,1,0,null,["$1"],["L"],23)
installTearOff(t=W.kk.prototype,"gc9",0,1,0,null,["$0"],["il"],7)
installTearOff(t,"gd4",0,1,0,null,["$0"],["d5"],7)
installTearOff(W.kl.prototype,"ga1",0,1,0,null,["$1"],["L"],24)
installTearOff(W.i6.prototype,"ga1",0,1,0,null,["$1"],["L"],25)
installTearOff(W.kv.prototype,"ga1",0,1,0,null,["$1"],["L"],26)
installTearOff(W.kz.prototype,"ga1",0,1,0,null,["$1"],["L"],36)
installTearOff(W.ic.prototype,"ga1",0,1,0,null,["$1"],["L"],28)
installTearOff(W.kE.prototype,"ga1",0,1,0,null,["$1"],["L"],29)
installTearOff(W.kG.prototype,"ga1",0,1,0,null,["$1"],["L"],30)
installTearOff(P.kd.prototype,"ga1",0,1,0,null,["$1"],["L"],31)
installTearOff(E,"wt",1,0,0,null,["$0"],["IR"],1)
installTearOff(R,"ez",1,0,0,null,["$1"],["GU"],0)
installTearOff(R,"xZ",1,0,0,null,["$1"],["GI"],0)
installTearOff(R,"vC",1,0,0,null,["$1"],["GT"],0)
installTearOff(R,"bT",1,0,0,null,["$1"],["GS"],0)
installTearOff(R,"vB",1,0,0,null,["$1"],["GR"],0)
installTearOff(R,"y0",1,0,0,null,["$1"],["GP"],0)
installTearOff(R,"hP",1,0,0,null,["$1"],["GO"],0)
installTearOff(R,"ey",1,0,0,null,["$1"],["GL"],0)
installTearOff(R,"eb",1,0,0,null,["$1"],["GN"],0)
installTearOff(R,"ft",1,0,0,null,["$1"],["GQ"],0)
installTearOff(R,"vA",1,0,0,null,["$1"],["GM"],0)
installTearOff(R,"A",1,0,0,null,["$1"],["GJ"],0)
installTearOff(R,"y_",1,0,0,null,["$1"],["GK"],0)
installTearOff(F.hF.prototype,"gav",0,1,0,null,["$1"],["cV"],4)
installTearOff(O,"IU",1,0,0,null,["$1"],["IW"],34)
installTearOff(Y.dR.prototype,"gir",0,0,0,null,["$1"],["eJ"],function(){return H.eS(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dR")})
installTearOff(V,"IZ",1,0,0,null,["$4"],["AC"],3)
installTearOff(V,"IY",1,0,0,null,["$4"],["AB"],2)
installTearOff(B,"kR",1,0,0,null,["$1"],["Ib"],27)
installTearOff(T,"Ir",1,0,0,null,["$4"],["As"],3)
installTearOff(T,"Iq",1,0,0,null,["$4"],["Ar"],2)
installTearOff(T,"Ip",1,0,0,null,["$4"],["Aq"],3)
installTearOff(T,"Io",1,0,0,null,["$4"],["Ap"],2)
installTearOff(F,"IF",1,0,0,null,["$4"],["Ay"],3)
installTearOff(F,"IE",1,0,0,null,["$4"],["Ax"],2)
installTearOff(F,"ID",1,0,0,null,["$4"],["Aw"],3)
installTearOff(F,"IC",1,0,0,null,["$4"],["Av"],2)
installTearOff(F,"IB",1,0,0,null,["$4"],["Au"],3)
installTearOff(F,"IA",1,0,0,null,["$4"],["At"],2)})();(function inheritance(){inherit(P.z,null)
var t=P.z
inherit(H.v8,t)
inherit(J.i,t)
inherit(J.eV,t)
inherit(P.fq,t)
inherit(P.n,t)
inherit(H.et,t)
inherit(P.jI,t)
inherit(H.iR,t)
inherit(H.qc,t)
inherit(H.f1,t)
inherit(H.rB,t)
inherit(H.fF,t)
inherit(H.r3,t)
inherit(H.eQ,t)
inherit(H.rA,t)
inherit(H.qO,t)
inherit(H.fu,t)
inherit(H.q3,t)
inherit(H.dJ,t)
inherit(H.dF,t)
inherit(H.eN,t)
inherit(H.lq,t)
inherit(H.oM,t)
inherit(H.q9,t)
inherit(P.ei,t)
inherit(H.hb,t)
inherit(H.kF,t)
inherit(H.dV,t)
inherit(H.u,t)
inherit(H.nt,t)
inherit(H.nv,t)
inherit(H.hw,t)
inherit(H.kD,t)
inherit(H.ks,t)
inherit(H.kf,t)
inherit(H.rZ,t)
inherit(P.cm,t)
inherit(P.f3,t)
inherit(P.ku,t)
inherit(P.ky,t)
inherit(P.bk,t)
inherit(P.kt,t)
inherit(P.d_,t)
inherit(P.pn,t)
inherit(P.dd,t)
inherit(P.kw,t)
inherit(P.qY,t)
inherit(P.rE,t)
inherit(P.rX,t)
inherit(P.eW,t)
inherit(P.tf,t)
inherit(P.rn,t)
inherit(P.ro,t)
inherit(P.p4,t)
inherit(P.ry,t)
inherit(P.dE,t)
inherit(P.ep,t)
inherit(P.b6,t)
inherit(P.nJ,t)
inherit(P.t6,t)
inherit(P.nK,t)
inherit(P.rz,t)
inherit(P.rt,t)
inherit(P.f2,t)
inherit(P.eg,t)
inherit(P.rw,t)
inherit(P.t8,t)
inherit(P.cR,t)
inherit(P.bG,t)
inherit(P.e1,t)
inherit(P.dq,t)
inherit(P.dt,t)
inherit(P.oh,t)
inherit(P.ke,t)
inherit(P.r8,t)
inherit(P.bJ,t)
inherit(P.lZ,t)
inherit(P.p,t)
inherit(P.b0,t)
inherit(P.d8,t)
inherit(P.dz,t)
inherit(P.dT,t)
inherit(P.x,t)
inherit(P.c2,t)
inherit(P.eJ,t)
inherit(P.kI,t)
inherit(P.qd,t)
inherit(P.rT,t)
inherit(W.ir,t)
inherit(W.jY,t)
inherit(W.iu,t)
inherit(W.qN,t)
inherit(P.lv,t)
inherit(W.i9,t)
inherit(W.bv,t)
inherit(W.jW,t)
inherit(W.id,t)
inherit(W.t2,t)
inherit(W.iS,t)
inherit(W.qV,t)
inherit(W.e9,t)
inherit(W.t5,t)
inherit(W.rP,t)
inherit(W.kJ,t)
inherit(P.t_,t)
inherit(P.qG,t)
inherit(P.rs,t)
inherit(P.rG,t)
inherit(P.dA,t)
inherit(P.rH,t)
inherit(P.bi,t)
inherit(P.dc,t)
inherit(T.fP,t)
inherit(T.df,t)
inherit(T.hp,t)
inherit(T.oj,t)
inherit(T.qC,t)
inherit(T.qD,t)
inherit(T.qE,t)
inherit(T.qB,t)
inherit(T.mN,t)
inherit(T.iX,t)
inherit(B.hq,t)
inherit(N.a8,t)
inherit(L.fQ,t)
inherit(A.jZ,t)
inherit(O.c8,t)
inherit(T.hR,t)
inherit(M.fX,t)
inherit(B.it,t)
inherit(X.iI,t)
inherit(X.ip,t)
inherit(M.hc,t)
inherit(Z.iH,t)
inherit(E.oe,t)
inherit(E.O,t)
inherit(A.a2,t)
inherit(S.k_,t)
inherit(U.b,t)
inherit(Y.dS,t)
inherit(K.cE,t)
inherit(X.G,t)
inherit(G.a_,t)
inherit(A.fW,t)
inherit(B.ds,t)
inherit(B.dh,t)
inherit(A.e0,t)
inherit(F.hE,t)
inherit(F.hF,t)
inherit(Q.k2,t)
inherit(A.k5,t)
inherit(Y.dR,t)
inherit(O.cX,t)
inherit(D.cF,t)
inherit(B.dD,t)
inherit(Q.cQ,t)
inherit(B.i5,t)
inherit(Q.f,t)
t=J.i
inherit(J.na,t)
inherit(J.nb,t)
inherit(J.hx,t)
inherit(J.eq,t)
inherit(J.fl,t)
inherit(J.er,t)
inherit(H.fm,t)
inherit(H.ew,t)
inherit(W.ag,t)
inherit(W.cK,t)
inherit(W.f_,t)
inherit(W.io,t)
inherit(W.lk,t)
inherit(W.h_,t)
inherit(W.bM,t)
inherit(W.iY,t)
inherit(W.lG,t)
inherit(W.f5,t)
inherit(W.iv,t)
inherit(W.lJ,t)
inherit(W.iz,t)
inherit(W.lK,t)
inherit(W.iA,t)
inherit(W.iB,t)
inherit(W.iZ,t)
inherit(W.iD,t)
inherit(W.iE,t)
inherit(W.h4,t)
inherit(W.Z,t)
inherit(W.j_,t)
inherit(W.ms,t)
inherit(W.mv,t)
inherit(W.cn,t)
inherit(W.mI,t)
inherit(W.j0,t)
inherit(W.hn,t)
inherit(W.eG,t)
inherit(W.nD,t)
inherit(W.jQ,t)
inherit(W.co,t)
inherit(W.ja,t)
inherit(W.o5,t)
inherit(W.o6,t)
inherit(W.jU,t)
inherit(W.jb,t)
inherit(W.oo,t)
inherit(W.ea,t)
inherit(W.fA,t)
inherit(W.cg,t)
inherit(W.jc,t)
inherit(W.oI,t)
inherit(W.k8,t)
inherit(W.p2,t)
inherit(W.cq,t)
inherit(W.jd,t)
inherit(W.fw,t)
inherit(W.ci,t)
inherit(W.pg,t)
inherit(W.pl,t)
inherit(W.cj,t)
inherit(W.je,t)
inherit(W.q2,t)
inherit(W.cr,t)
inherit(W.jf,t)
inherit(W.fz,t)
inherit(W.kj,t)
inherit(W.kk,t)
inherit(W.qi,t)
inherit(W.fB,t)
inherit(W.kl,t)
inherit(W.qR,t)
inherit(W.jg,t)
inherit(W.jh,t)
inherit(W.j1,t)
inherit(W.j2,t)
inherit(W.j3,t)
inherit(W.j4,t)
inherit(W.td,t)
inherit(W.te,t)
inherit(P.mT,t)
inherit(P.od,t)
inherit(P.d7,t)
inherit(P.j5,t)
inherit(P.d9,t)
inherit(P.j6,t)
inherit(P.ox,t)
inherit(P.oy,t)
inherit(P.oK,t)
inherit(P.j7,t)
inherit(P.db,t)
inherit(P.j8,t)
inherit(P.qp,t)
inherit(P.fS,t)
inherit(P.kY,t)
inherit(P.oO,t)
inherit(P.oP,t)
inherit(P.tc,t)
inherit(P.j9,t)
t=J.hx
inherit(J.ov,t)
inherit(J.eI,t)
inherit(J.es,t)
inherit(F.vb,t)
inherit(R.hk,t)
inherit(R.vs,t)
inherit(R.vr,t)
inherit(S.fp,t)
inherit(S.vT,t)
inherit(S.vU,t)
inherit(S.vV,t)
inherit(S.ug,t)
inherit(S.uj,t)
inherit(S.u6,t)
inherit(S.vX,t)
inherit(S.vY,t)
inherit(S.lD,t)
inherit(S.vK,t)
inherit(S.vL,t)
inherit(S.u0,t)
inherit(S.mC,t)
inherit(S.lg,t)
inherit(S.u5,t)
inherit(S.u4,t)
inherit(S.ui,t)
inherit(S.q_,t)
inherit(S.u8,t)
inherit(S.hH,t)
inherit(S.vi,t)
inherit(S.vk,t)
inherit(S.vF,t)
inherit(S.vG,t)
inherit(S.vm,t)
inherit(S.vn,t)
inherit(S.ux,t)
inherit(S.uy,t)
inherit(S.vo,t)
inherit(S.vl,t)
inherit(S.u2,t)
inherit(S.vQ,t)
inherit(S.vR,t)
inherit(S.vP,t)
inherit(Z.v6,t)
inherit(Z.v1,t)
inherit(Z.v2,t)
inherit(J.v7,J.eq)
t=J.fl
inherit(J.jK,t)
inherit(J.jJ,t)
inherit(P.hC,P.fq)
t=P.hC
inherit(H.i1,t)
inherit(W.kx,t)
inherit(W.d0,t)
inherit(H.ln,H.i1)
t=P.n
inherit(H.r,t)
inherit(H.hG,t)
inherit(H.eK,t)
inherit(H.hT,t)
inherit(H.qS,t)
inherit(P.hu,t)
inherit(H.rY,t)
t=H.r
inherit(H.dP,t)
inherit(H.nu,t)
inherit(P.kA,t)
inherit(P.eC,t)
t=H.dP
inherit(H.pL,t)
inherit(H.ev,t)
inherit(P.nw,t)
inherit(P.ru,t)
inherit(H.h2,H.hG)
t=P.jI
inherit(H.jO,t)
inherit(H.kn,t)
inherit(H.p8,t)
inherit(Q.qt,t)
inherit(H.iF,H.hT)
t=H.f1
inherit(H.tW,t)
inherit(H.tX,t)
inherit(H.rr,t)
inherit(H.r4,t)
inherit(H.mW,t)
inherit(H.mX,t)
inherit(H.rD,t)
inherit(H.q4,t)
inherit(H.q5,t)
inherit(H.tY,t)
inherit(H.tK,t)
inherit(H.tL,t)
inherit(H.tM,t)
inherit(H.tN,t)
inherit(H.tO,t)
inherit(H.pT,t)
inherit(H.ne,t)
inherit(H.nd,t)
inherit(H.tG,t)
inherit(H.tH,t)
inherit(H.tI,t)
inherit(P.qK,t)
inherit(P.qJ,t)
inherit(P.qL,t)
inherit(P.qM,t)
inherit(P.tg,t)
inherit(P.th,t)
inherit(P.tt,t)
inherit(P.tv,t)
inherit(P.mB,t)
inherit(P.mA,t)
inherit(P.r9,t)
inherit(P.rh,t)
inherit(P.rd,t)
inherit(P.re,t)
inherit(P.rf,t)
inherit(P.rb,t)
inherit(P.rg,t)
inherit(P.ra,t)
inherit(P.rk,t)
inherit(P.rl,t)
inherit(P.rj,t)
inherit(P.ri,t)
inherit(P.pq,t)
inherit(P.po,t)
inherit(P.pp,t)
inherit(P.pr,t)
inherit(P.pw,t)
inherit(P.pu,t)
inherit(P.pv,t)
inherit(P.px,t)
inherit(P.pA,t)
inherit(P.pB,t)
inherit(P.py,t)
inherit(P.pz,t)
inherit(P.pC,t)
inherit(P.pD,t)
inherit(P.ps,t)
inherit(P.pt,t)
inherit(P.qQ,t)
inherit(P.qP,t)
inherit(P.rF,t)
inherit(P.tj,t)
inherit(P.ti,t)
inherit(P.tk,t)
inherit(P.ts,t)
inherit(P.rJ,t)
inherit(P.rK,t)
inherit(P.rL,t)
inherit(P.rp,t)
inherit(P.nM,t)
inherit(P.rx,t)
inherit(P.ta,t)
inherit(P.t9,t)
inherit(P.lP,t)
inherit(P.lQ,t)
inherit(P.qh,t)
inherit(P.qe,t)
inherit(P.qf,t)
inherit(P.qg,t)
inherit(P.tw,t)
inherit(P.tp,t)
inherit(P.to,t)
inherit(P.tq,t)
inherit(P.tr,t)
inherit(W.qU,t)
inherit(W.tu,t)
inherit(W.mL,t)
inherit(W.mM,t)
inherit(W.pm,t)
inherit(W.r7,t)
inherit(W.o8,t)
inherit(W.o7,t)
inherit(W.rR,t)
inherit(W.rS,t)
inherit(W.t4,t)
inherit(W.tb,t)
inherit(P.t1,t)
inherit(P.qH,t)
inherit(P.ty,t)
inherit(P.tz,t)
inherit(P.lw,t)
inherit(P.tm,t)
inherit(P.l3,t)
inherit(P.l4,t)
inherit(E.tR,t)
inherit(B.lt,t)
inherit(O.lb,t)
inherit(A.n9,t)
inherit(A.n8,t)
inherit(G.n6,t)
inherit(U.qx,t)
inherit(U.qy,t)
inherit(A.tx,t)
inherit(A.nA,t)
inherit(A.ny,t)
inherit(A.nz,t)
inherit(A.nB,t)
inherit(O.tT,t)
inherit(O.tU,t)
inherit(O.tS,t)
inherit(V.lW,t)
inherit(V.lV,t)
inherit(V.lU,t)
inherit(V.lT,t)
inherit(D.pk,t)
inherit(Q.qu,t)
t=H.qO
inherit(H.fG,t)
inherit(H.ig,t)
inherit(H.lr,H.lq)
t=P.ei
inherit(H.jX,t)
inherit(H.nf,t)
inherit(H.qb,t)
inherit(H.ll,t)
inherit(H.oU,t)
inherit(P.hy,t)
inherit(P.fo,t)
inherit(P.cU,t)
inherit(P.T,t)
inherit(P.eH,t)
inherit(P.da,t)
inherit(P.bH,t)
inherit(P.lF,t)
t=H.pT
inherit(H.pi,t)
inherit(H.fU,t)
t=P.hu
inherit(H.qI,t)
inherit(T.fO,t)
t=H.ew
inherit(H.nY,t)
inherit(H.jS,t)
t=H.jS
inherit(H.hL,t)
inherit(H.hM,t)
inherit(H.hN,H.hL)
inherit(H.hJ,H.hN)
inherit(H.hO,H.hM)
inherit(H.hK,H.hO)
t=H.hJ
inherit(H.nZ,t)
inherit(H.o_,t)
t=H.hK
inherit(H.o0,t)
inherit(H.o1,t)
inherit(H.o2,t)
inherit(H.o3,t)
inherit(H.o4,t)
inherit(H.jT,t)
inherit(H.fn,t)
t=P.ku
inherit(P.dX,t)
inherit(P.kH,t)
t=P.kw
inherit(P.qX,t)
inherit(P.qZ,t)
inherit(P.rW,P.rE)
t=P.d_
inherit(P.fD,t)
inherit(W.r5,t)
inherit(P.eP,P.dd)
t=P.fD
inherit(P.rC,t)
inherit(P.rU,t)
inherit(P.rV,P.eP)
inherit(P.rI,P.tf)
inherit(P.kC,H.u)
inherit(P.p3,P.p4)
inherit(P.rq,P.p3)
inherit(P.kB,P.rq)
inherit(P.i2,P.nK)
t=P.f2
inherit(P.l8,t)
inherit(P.lS,t)
inherit(P.ng,t)
t=P.eg
inherit(P.l9,t)
inherit(P.nj,t)
inherit(P.ni,t)
inherit(P.ql,t)
inherit(P.nh,P.hy)
inherit(P.rv,P.rw)
inherit(P.qk,P.lS)
t=P.dq
inherit(P.V,t)
inherit(P.E,t)
t=P.cU
inherit(P.eB,t)
inherit(P.mU,t)
inherit(P.qW,P.kI)
t=W.ag
inherit(W.af,t)
inherit(W.h5,t)
inherit(W.lp,t)
inherit(W.mr,t)
inherit(W.mt,t)
inherit(W.mw,t)
inherit(W.hm,t)
inherit(W.hI,t)
inherit(W.oB,t)
inherit(W.k7,t)
inherit(W.p5,t)
inherit(W.eL,t)
inherit(W.cp,t)
inherit(W.h6,t)
inherit(W.cP,t)
inherit(W.cH,t)
inherit(W.h7,t)
inherit(W.qn,t)
inherit(W.qs,t)
inherit(W.ko,t)
inherit(W.qz,t)
inherit(W.rQ,t)
inherit(P.lH,t)
inherit(P.hQ,t)
inherit(P.q6,t)
inherit(P.bF,t)
inherit(P.fT,t)
t=W.af
inherit(W.cc,t)
inherit(W.ef,t)
inherit(W.eh,t)
inherit(W.iy,t)
inherit(W.fC,t)
inherit(W.r_,t)
t=W.cc
inherit(W.b3,t)
inherit(P.ck,t)
t=W.b3
inherit(W.eU,t)
inherit(W.kZ,t)
inherit(W.jP,t)
inherit(W.la,t)
inherit(W.f0,t)
inherit(W.fY,t)
inherit(W.lj,t)
inherit(W.ix,t)
inherit(W.lR,t)
inherit(W.mq,t)
inherit(W.iU,t)
inherit(W.mQ,t)
inherit(W.fh,t)
inherit(W.ho,t)
inherit(W.nm,t)
inherit(W.jL,t)
inherit(W.hA,t)
inherit(W.nI,t)
inherit(W.nP,t)
inherit(W.nQ,t)
inherit(W.nR,t)
inherit(W.nS,t)
inherit(W.ob,t)
inherit(W.oc,t)
inherit(W.og,t)
inherit(W.oi,t)
inherit(W.om,t)
inherit(W.oF,t)
inherit(W.fv,t)
inherit(W.k9,t)
inherit(W.p9,t)
inherit(W.pc,t)
inherit(W.hU,t)
inherit(W.pJ,t)
inherit(W.kg,t)
inherit(W.pQ,t)
inherit(W.pR,t)
inherit(W.hY,t)
inherit(W.hZ,t)
inherit(W.rm,t)
t=W.jP
inherit(W.eY,t)
inherit(W.qm,t)
inherit(W.h8,W.h5)
inherit(W.l6,W.h8)
t=W.bM
inherit(W.lx,t)
inherit(W.ly,t)
inherit(W.h0,t)
inherit(W.h1,t)
inherit(W.lz,t)
inherit(W.lA,t)
inherit(W.lB,t)
inherit(W.f4,W.iY)
inherit(W.qT,W.jY)
inherit(W.lL,W.iA)
inherit(W.ji,W.iZ)
inherit(W.iC,W.ji)
t=W.Z
inherit(W.lX,t)
inherit(W.dC,t)
inherit(W.pe,t)
inherit(W.pf,t)
inherit(W.ce,W.f_)
inherit(W.jj,W.j_)
inherit(W.fd,W.jj)
inherit(W.jk,W.j0)
inherit(W.ff,W.jk)
inherit(W.iW,W.ff)
inherit(W.e6,W.hm)
t=W.eG
inherit(W.hz,t)
inherit(W.oA,t)
inherit(W.nT,W.hI)
inherit(W.ju,W.ja)
inherit(W.jR,W.ju)
inherit(W.e8,W.dC)
inherit(W.jv,W.jb)
inherit(W.jV,W.jv)
t=W.fA
inherit(W.ou,t)
inherit(W.oS,t)
inherit(W.q8,t)
inherit(W.jw,W.jc)
inherit(W.k4,W.jw)
inherit(W.p6,W.eL)
inherit(W.h9,W.h6)
inherit(W.kb,W.h9)
inherit(W.jx,W.jd)
inherit(W.kc,W.jx)
inherit(W.jy,W.je)
inherit(W.pY,W.jy)
inherit(W.ha,W.h7)
inherit(W.pZ,W.ha)
inherit(W.jz,W.jf)
inherit(W.ki,W.jz)
inherit(W.jA,W.jg)
inherit(W.i6,W.jA)
inherit(W.jB,W.jh)
inherit(W.kv,W.jB)
inherit(W.r0,W.iB)
inherit(W.jl,W.j1)
inherit(W.kz,W.jl)
inherit(W.jm,W.j2)
inherit(W.ic,W.jm)
inherit(W.jn,W.j3)
inherit(W.kE,W.jn)
inherit(W.jo,W.j4)
inherit(W.kG,W.jo)
inherit(W.r1,W.qN)
t=P.lv
inherit(W.r2,t)
inherit(P.l2,t)
inherit(W.i7,W.r5)
inherit(W.r6,P.pn)
inherit(W.t3,W.id)
inherit(P.t0,P.t_)
inherit(P.kr,P.qG)
inherit(P.bL,P.rH)
t=P.ck
inherit(P.e5,t)
inherit(P.ee,t)
inherit(P.m_,t)
inherit(P.m0,t)
inherit(P.m1,t)
inherit(P.m2,t)
inherit(P.m3,t)
inherit(P.m4,t)
inherit(P.m5,t)
inherit(P.m6,t)
inherit(P.m7,t)
inherit(P.m8,t)
inherit(P.m9,t)
inherit(P.ma,t)
inherit(P.mb,t)
inherit(P.mc,t)
inherit(P.md,t)
inherit(P.me,t)
inherit(P.mf,t)
inherit(P.mg,t)
inherit(P.mu,t)
inherit(P.nN,t)
inherit(P.nO,t)
inherit(P.os,t)
inherit(P.hS,t)
inherit(P.pK,t)
inherit(P.pP,t)
inherit(P.qo,t)
inherit(P.i8,t)
inherit(P.rM,t)
inherit(P.rN,t)
inherit(P.rO,t)
t=P.e5
inherit(P.kW,t)
inherit(P.my,t)
inherit(P.dx,t)
inherit(P.mR,t)
inherit(P.pN,t)
inherit(P.kh,t)
inherit(P.qj,t)
inherit(P.jp,P.j5)
inherit(P.np,P.jp)
inherit(P.jq,P.j6)
inherit(P.o9,P.jq)
inherit(P.oL,P.dx)
inherit(P.jr,P.j7)
inherit(P.pH,P.jr)
t=P.kh
inherit(P.pX,t)
inherit(P.i0,t)
inherit(P.js,P.j8)
inherit(P.q7,P.js)
t=P.bF
inherit(P.eZ,t)
inherit(P.lc,t)
inherit(P.lu,t)
t=P.eZ
inherit(P.eX,t)
inherit(P.k0,t)
inherit(P.jt,P.j9)
inherit(P.kd,P.jt)
t=B.hq
inherit(S.kX,t)
inherit(M.l1,t)
inherit(A.lo,t)
inherit(M.lC,t)
inherit(V.lM,t)
inherit(U.mh,t)
inherit(N.nl,t)
inherit(F.nW,t)
inherit(G.oz,t)
inherit(Q.oR,t)
inherit(N.pb,t)
inherit(D.pU,t)
inherit(V.pV,t)
inherit(F.qA,t)
t=N.a8
inherit(T.lI,t)
inherit(R.oG,t)
t=T.lI
inherit(K.bU,t)
inherit(S.bI,t)
inherit(T.c1,t)
inherit(M.bC,t)
inherit(A.ol,A.jZ)
inherit(L.aG,A.ol)
t=O.c8
inherit(O.dr,t)
inherit(O.iG,t)
inherit(O.eF,t)
t=O.dr
inherit(U.l5,t)
inherit(Y.oJ,t)
inherit(V.mx,t)
inherit(Q.mS,t)
inherit(Q.ot,t)
inherit(M.ph,t)
inherit(B.qF,t)
t=U.l5
inherit(U.nF,t)
inherit(U.of,t)
inherit(U.pE,O.iG)
t=U.pE
inherit(U.pF,t)
inherit(U.pG,t)
t=T.hR
inherit(O.l7,t)
inherit(Y.mD,t)
inherit(Y.mE,t)
inherit(B.mG,t)
inherit(X.mO,t)
inherit(Q.mP,t)
inherit(S.nn,t)
inherit(Z.nE,t)
inherit(S.nG,t)
inherit(U.nH,t)
inherit(E.nV,t)
inherit(V.ok,t)
inherit(N.oE,t)
inherit(N.oQ,t)
inherit(E.oW,t)
inherit(Y.oX,t)
inherit(Y.oZ,t)
inherit(L.p_,t)
inherit(S.p1,t)
inherit(Y.pa,t)
inherit(R.pO,t)
inherit(U.q0,t)
inherit(E.qr,t)
inherit(M.qv,t)
t=O.eF
inherit(Y.pW,t)
inherit(Y.lh,t)
inherit(Y.oa,t)
inherit(U.qw,t)
t=L.fQ
inherit(T.ld,t)
inherit(T.lf,t)
inherit(U.lN,t)
inherit(Z.lO,t)
inherit(T.mF,t)
inherit(V.mH,t)
inherit(X.mJ,t)
inherit(Z.nk,t)
inherit(Q.no,t)
inherit(K.nq,t)
inherit(G.nr,t)
inherit(V.nU,t)
inherit(E.oH,t)
inherit(V.oT,t)
inherit(K.oY,t)
inherit(N.pd,t)
inherit(L.pS,t)
inherit(N.q1,t)
inherit(Q.qq,t)
t=S.bI
inherit(S.iq,t)
inherit(S.mK,t)
inherit(E.iV,E.oe)
t=E.O
inherit(E.fR,t)
inherit(E.l0,t)
inherit(Q.ow,Q.mS)
inherit(S.v3,S.k_)
inherit(U.W,U.b)
t=R.oG
inherit(R.a1,t)
inherit(R.R,t)
inherit(R.a7,t)
inherit(R.bB,R.a7)
t=Y.dS
inherit(Y.ae,t)
inherit(Y.c_,t)
inherit(Y.U,t)
inherit(Y.is,t)
inherit(Y.bD,t)
inherit(Y.cZ,t)
inherit(Y.lm,t)
inherit(Y.k1,t)
inherit(Y.iT,t)
inherit(Y.k3,t)
t=Y.c_
inherit(Y.d3,t)
inherit(Y.by,t)
inherit(U.aj,A.a2)
t=G.a_
inherit(G.aJ,t)
inherit(G.bK,t)
inherit(G.d,t)
inherit(G.ah,G.bK)
t=D.cF
inherit(D.kq,t)
inherit(D.oN,t)
t=Q.cQ
inherit(Q.i4,t)
inherit(Q.i3,t)
inherit(Q.dW,Q.i4)
inherit(B.kp,Q.dW)
t=S.fp
inherit(S.vD,t)
inherit(S.li,t)
inherit(S.ns,t)
inherit(S.vg,t)
inherit(S.uw,t)
t=S.li
inherit(S.vt,t)
inherit(S.vp,t)
t=S.ns
inherit(S.ua,t)
inherit(S.u1,t)
t=S.lD
inherit(S.vc,t)
inherit(S.lE,t)
inherit(S.on,S.lE)
inherit(S.vH,S.on)
t=S.lg
inherit(S.vu,t)
inherit(S.vI,t)
t=S.mC
inherit(S.vM,t)
inherit(S.vv,t)
inherit(S.uh,t)
inherit(S.vJ,t)
t=S.q_
inherit(S.vO,t)
inherit(S.u7,t)
inherit(S.vW,t)
t=S.hH
inherit(S.vh,t)
inherit(S.vj,t)
inherit(S.vE,t)
inherit(Q.eM,Q.i3)
inherit(Q.km,Q.eM)
mixin(H.i1,H.qc)
mixin(H.hL,P.b6)
mixin(H.hN,H.iR)
mixin(H.hM,P.b6)
mixin(H.hO,H.iR)
mixin(P.fq,P.b6)
mixin(P.i2,P.t6)
mixin(W.h5,P.b6)
mixin(W.h8,W.bv)
mixin(W.iY,W.iu)
mixin(W.jY,W.iu)
mixin(W.iZ,P.b6)
mixin(W.ji,W.bv)
mixin(W.j_,P.b6)
mixin(W.jj,W.bv)
mixin(W.j0,P.b6)
mixin(W.jk,W.bv)
mixin(W.ja,P.b6)
mixin(W.ju,W.bv)
mixin(W.jb,P.b6)
mixin(W.jv,W.bv)
mixin(W.jc,P.b6)
mixin(W.jw,W.bv)
mixin(W.h6,P.b6)
mixin(W.h9,W.bv)
mixin(W.jd,P.b6)
mixin(W.jx,W.bv)
mixin(W.je,P.b6)
mixin(W.jy,W.bv)
mixin(W.h7,P.b6)
mixin(W.ha,W.bv)
mixin(W.jf,P.b6)
mixin(W.jz,W.bv)
mixin(W.jg,P.b6)
mixin(W.jA,W.bv)
mixin(W.jh,P.b6)
mixin(W.jB,W.bv)
mixin(W.j1,P.b6)
mixin(W.jl,W.bv)
mixin(W.j2,P.b6)
mixin(W.jm,W.bv)
mixin(W.j3,P.b6)
mixin(W.jn,W.bv)
mixin(W.j4,P.b6)
mixin(W.jo,W.bv)
mixin(P.j5,P.b6)
mixin(P.jp,W.bv)
mixin(P.j6,P.b6)
mixin(P.jq,W.bv)
mixin(P.j7,P.b6)
mixin(P.jr,W.bv)
mixin(P.j8,P.b6)
mixin(P.js,W.bv)
mixin(P.j9,P.b6)
mixin(P.jt,W.bv)
mixin(S.k_,P.nJ)
mixin(A.jZ,P.ep)
mixin(Q.i4,P.b6)
mixin(Q.i3,P.ep)})();(function constants(){C.w=W.f0.prototype
C.y=W.ix.prototype
C.S=W.e6.prototype
C.T=J.i.prototype
C.b=J.eq.prototype
C.f=J.jJ.prototype
C.a=J.jK.prototype
C.d=J.fl.prototype
C.c=J.er.prototype
C.a_=J.es.prototype
C.a2=W.jL.prototype
C.t=H.fn.prototype
C.L=J.ov.prototype
C.M=W.kg.prototype
C.v=J.eI.prototype
C.O=new P.l9(!1)
C.N=new P.l8(C.O)
C.i=new W.ir()
C.P=new P.oh()
C.Q=new P.qY()
C.R=new P.rs()
C.e=new P.rI()
C.x=new W.t5()
C.o=new P.dt(0)
C.U=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.z=function(hooks) { return hooks; }
C.V=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.W=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.X=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.A=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.Y=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.Z=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.p=new P.ng(null,null)
C.a0=new P.ni(null)
C.a1=new P.nj(null,null)
C.B=H.a(makeConstList([127,2047,65535,1114111]),[P.E])
C.C=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.j=makeConstList([0,0,32776,33792,1,10240,0,0])
C.a3=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.x])
C.k=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.l=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.a4=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.D=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.a5=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.a6=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.E=makeConstList([])
C.a8=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.F=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.G=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.H=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.I=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.J=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.K=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.q=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.x])
C.r=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.x])
C.h=new F.hE(0,"LogLevel.ERROR")
C.m=new F.hE(1,"LogLevel.WARN")
C.a9=new F.hE(3,"LogLevel.VERBOSE")
C.a7=H.a(makeConstList([]),[P.x])
C.aa=new H.lr(0,{},C.a7,[P.x,P.x])
C.ab=H.bX("bi")
C.ac=H.bX("J6")
C.u=H.bX("J7")
C.ad=H.bX("J8")
C.ae=H.bX("J9")
C.af=H.bX("Jb")
C.ag=H.bX("Jc")
C.ah=H.bX("Jd")
C.ai=H.bX("nc")
C.aj=H.bX("d8")
C.ak=H.bX("x")
C.al=H.bX("Jg")
C.am=H.bX("Jh")
C.an=H.bX("Ji")
C.ao=H.bX("dc")
C.ap=H.bX("cR")
C.aq=H.bX("V")
C.ar=H.bX("E")
C.as=H.bX("dq")
C.n=new P.qk(!1)})();(function staticFields(){$.xU="$cachedFunction"
$.xV="$cachedInvocation"
$.dK=0
$.fV=null
$.wv=null
$.w9=null
$.yV=null
$.z7=null
$.tA=null
$.tJ=null
$.wa=null
$.fI=null
$.ih=null
$.ii=null
$.w5=!1
$.ap=C.e
$.wO=0
$.e2=null
$.ub=null
$.wM=null
$.wL=null
$.wI=null
$.wH=null
$.wG=null
$.wJ=null
$.wF=null
$.A4=null
$.A6=null
$.zQ=null
$.zR=null
$.zP=null
$.zT=null
$.A_=null
$.zZ=null
$.A7=null
$.A1=null
$.zV=null
$.zY=null
$.zS=null
$.zX=null
$.A3=null
$.zW=null
$.A5=null
$.A2=null
$.zU=null
$.A0=null
$.aO="accent"
$.aQ="aspect1"
$.aP="aspect2"
$.aZ="shoe1"
$.aY="shoe2"
$.aS="cloak1"
$.aT="cloak2"
$.aR="cloak3"
$.aX="shirt1"
$.aW="shirt2"
$.aV="pants1"
$.aU="pants2"
$.tB=null
$.ak=1300
$.l=3
$.m=2
$.L=1
$.D=0.1
$.AM=1
$.AL=-1
$.ur=null
$.e3=null
$.wP=null
$.el=null
$.fb=null
$.iL=null
$.uk=null
$.mj=null
$.ut=null
$.iM=null
$.iJ=null
$.wR=null
$.iQ=null
$.hd=null
$.dO=null
$.wQ=null
$.mi=null
$.mp=null
$.f9=null
$.AJ=null
$.AG=null
$.AI=null
$.AK=null
$.hj=null
$.f6=null
$.cx=null
$.d5=null
$.f8=null
$.mo=null
$.c7=null
$.c6=null
$.um=null
$.hh=null
$.ek=null
$.AH=null
$.hg=null
$.cD=null
$.e4=null
$.iP=null
$.d4=null
$.fa=null
$.bY=null
$.mm=null
$.un=null
$.b_=null
$.cC=null
$.cl=null
$.cd=null
$.ml=null
$.bZ=null
$.dw=null
$.dv=null
$.du=null
$.dM=null
$.dN=null
$.dL=null
$.d6=null
$.hi=null
$.mk=null
$.iK=null
$.cV=null
$.cw=null
$.bf=null
$.f7=null
$.em=null
$.mn=null
$.hf=null
$.he=null
$.up=null
$.cB=null
$.us=null
$.ul=null
$.wT=null
$.ej=null
$.cA=null
$.dj=null
$.di=null
$.fc=null
$.uo=null
$.uq=null
$.wS=null
$.iN=null
$.iO=null
$.en=null
$.wU=!1
$.uv=null
$.AN=null
$.wW=null
$.wY=null
$.AW=null
$.wX=null
$.AU=null
$.AV=null
$.uu=null
$.AR=null
$.AP=null
$.AQ=null
$.AS=null
$.AT=null
$.B5=null
$.AZ=null
$.B_=null
$.B0=null
$.B1=null
$.B2=null
$.B3=null
$.B4=null
$.B7=null
$.B8=null
$.B9=null
$.Ba=null
$.Bb=null
$.Bc=null
$.B6=null
$.Gp="JACK"
$.Gt="PM"
$.Gq="JS"
$.Go="HP"
$.Gy="YD"
$.Gv="SI"
$.Gw="SU"
$.Gr="ME"
$.Gu="RB"
$.Gm="GN"
$.xO="MP"
$.Gk="AR"
$.Gs="PE"
$.Gl="DP"
$.Gx="WV"
$.Gn="HB"
$.o="PLAYER1TAG"
$.eA="PLAYER2TAG"
$.B="DENIZENTAG"
$.t="CONSORTTAG"
$.K="CONSORTSOUNDTAG"
$.aI="MCGUFFINTAG"
$.ad="TAGPHYSICALMCGUFFIN"
$.ch="TAGWEAPON"
$.H5=null
$.Hi=null
$.H_=null
$.H2=null
$.H8=null
$.Hd=null
$.Hb=null
$.Hl=null
$.Hk=null
$.Hc=null
$.Hn=null
$.H7=null
$.Hm=null
$.Hg=null
$.He=null
$.Hh=null
$.H1=null
$.H0=null
$.Ha=null
$.H9=null
$.H6=null
$.Hj=null
$.H3=null
$.H4=null
$.Hf=null
$.z_=!1
$.Ho=!1
$.y2=null
$.Hv=13
$.ao=3
$.bO=2
$.aC=1
$.n7=0
$.J=1
$.a5=3
$.H=4
$.uZ=6
$.v_=7
$.ab=8
$.w=9
$.q=10
$.jF=null
$.fk=null
$.uM=null
$.uV=null
$.uS=null
$.x4=null
$.uH=null
$.uR=null
$.hs=null
$.xf=null
$.xA=null
$.x9=null
$.xg=null
$.uI=null
$.uQ=null
$.xC=null
$.xE=null
$.uE=null
$.jE=null
$.jC=null
$.av=null
$.xu=null
$.uD=null
$.xp=null
$.fj=null
$.x8=null
$.xF=null
$.xB=null
$.xz=null
$.uO=null
$.n0=null
$.eo=null
$.xD=null
$.mZ=null
$.uJ=null
$.e7=null
$.xx=null
$.dk=null
$.hr=null
$.uY=null
$.xy=null
$.uX=null
$.uT=null
$.uU=null
$.n3=null
$.jD=null
$.BB=null
$.xi=null
$.xo=null
$.xw=null
$.xv=null
$.F=null
$.xd=null
$.n_=null
$.bQ=null
$.bc=null
$.bR=null
$.X=null
$.aA=null
$.ca=null
$.M=null
$.Q=null
$.ax=null
$.b9=null
$.bV=null
$.bj=null
$.bp=null
$.cf=null
$.b5=null
$.bA=null
$.bS=null
$.a0=null
$.FY=null
$.aw=null
$.ba=null
$.aM=null
$.ac=null
$.c9=null
$.aN=null
$.at=null
$.bW=null
$.b4=null
$.am=null
$.bm=null
$.c0=null
$.aD=null
$.bq=null
$.bn=null
$.a9=null
$.bN=null
$.aa=null
$.bh=null
$.bw=null
$.aL=null
$.bg=null
$.ay=null
$.b7=null
$.aF=null
$.Y=null
$.au=null
$.aB=null
$.b8=null
$.as=null
$.aq=null
$.a4=null
$.S=null
$.P=null
$.al=null
$.aH=null
$.bd=null
$.aK=null
$.CU=null
$.FA=null
$.G8=null
$.Cp=null
$.Fx=null
$.CV=null
$.x3=null
$.FM=null
$.DU=null
$.CQ=null
$.Bx=null
$.Eu=null
$.jG=null
$.xb=null
$.EU=null
$.Cm=null
$.DD=null
$.Ck=null
$.uF=null
$.C5=null
$.D6=null
$.Cu=null
$.DN=null
$.FU=null
$.CW=null
$.uG=null
$.DO=null
$.Cs=null
$.Cb=null
$.xt=null
$.Bq=null
$.uC=null
$.Dw=null
$.uN=null
$.E8=null
$.E2=null
$.Bu=null
$.Ce=null
$.F3=null
$.Bw=null
$.Fw=null
$.DC=null
$.CB=null
$.EO=null
$.Fq=null
$.uL=null
$.DY=null
$.EL=null
$.Ct=null
$.Bj=null
$.FX=null
$.DG=null
$.Ca=null
$.FL=null
$.Eb=null
$.Ch=null
$.Fv=null
$.CL=null
$.Fb=null
$.Fc=null
$.Bs=null
$.E4=null
$.Cv=null
$.CF=null
$.Gc=null
$.ht=null
$.F1=null
$.Ft=null
$.n2=null
$.C_=null
$.El=null
$.Ep=null
$.Bp=null
$.CK=null
$.Fu=null
$.Ea=null
$.FO=null
$.EQ=null
$.Eq=null
$.xn=null
$.Ff=null
$.G2=null
$.Fz=null
$.Dj=null
$.EC=null
$.Dk=null
$.F4=null
$.G0=null
$.DM=null
$.CH=null
$.D3=null
$.BR=null
$.EM=null
$.D1=null
$.D8=null
$.Cx=null
$.Fe=null
$.fi=null
$.Ef=null
$.xl=null
$.Dl=null
$.xm=null
$.G5=null
$.BW=null
$.F_=null
$.F0=null
$.EZ=null
$.EY=null
$.Fm=null
$.D9=null
$.E5=null
$.Fp=null
$.DX=null
$.Eg=null
$.Cq=null
$.G_=null
$.E3=null
$.CN=null
$.CO=null
$.Eo=null
$.Gb=null
$.DA=null
$.FZ=null
$.xr=null
$.Fa=null
$.DK=null
$.n5=null
$.Du=null
$.EE=null
$.BV=null
$.CR=null
$.F6=null
$.E6=null
$.FT=null
$.xq=null
$.Ee=null
$.C1=null
$.Cn=null
$.EA=null
$.FG=null
$.F5=null
$.mY=null
$.uW=null
$.Fh=null
$.G1=null
$.Di=null
$.BF=null
$.BO=null
$.FE=null
$.Ei=null
$.DV=null
$.Ej=null
$.FB=null
$.Dv=null
$.Bt=null
$.D7=null
$.DT=null
$.Fj=null
$.D0=null
$.BU=null
$.EW=null
$.EX=null
$.FR=null
$.F8=null
$.uP=null
$.xc=null
$.Ci=null
$.xe=null
$.Dp=null
$.n1=null
$.EG=null
$.E1=null
$.ES=null
$.uK=null
$.n4=null
$.xk=null
$.CD=null
$.D5=null
$.xs=null
$.xh=null
$.Cd=null
$.FI=null
$.C6=null
$.Es=null
$.Dm=null
$.Fo=null
$.DW=null
$.BC=null
$.Dn=null
$.CA=null
$.Ew=null
$.DF=null
$.E0=null
$.DL=null
$.DP=null
$.EV=null
$.ER=null
$.Bm=null
$.FF=null
$.EJ=null
$.Cr=null
$.Cw=null
$.D4=null
$.FC=null
$.CY=null
$.DH=null
$.BJ=null
$.CS=null
$.Cz=null
$.Ek=null
$.CI=null
$.F2=null
$.DJ=null
$.x5=null
$.EF=null
$.Do=null
$.CZ=null
$.Bk=null
$.Br=null
$.Eh=null
$.Er=null
$.DE=null
$.Dg=null
$.FW=null
$.BM=null
$.D_=null
$.DI=null
$.Co=null
$.Fl=null
$.Cc=null
$.F7=null
$.BK=null
$.FH=null
$.DR=null
$.BE=null
$.EP=null
$.EB=null
$.Cj=null
$.Da=null
$.C0=null
$.FD=null
$.Ds=null
$.FS=null
$.C2=null
$.Db=null
$.C3=null
$.Cl=null
$.EI=null
$.Cf=null
$.Dt=null
$.E7=null
$.BX=null
$.Fn=null
$.G7=null
$.Fd=null
$.DZ=null
$.Fk=null
$.E_=null
$.Bz=null
$.Bl=null
$.DS=null
$.BH=null
$.C4=null
$.BA=null
$.BD=null
$.Ed=null
$.Ex=null
$.FK=null
$.Dq=null
$.G6=null
$.EN=null
$.EK=null
$.Dx=null
$.Dr=null
$.C8=null
$.De=null
$.DQ=null
$.Em=null
$.Fg=null
$.Bo=null
$.G3=null
$.CG=null
$.Fr=null
$.Cy=null
$.By=null
$.BY=null
$.BQ=null
$.Ga=null
$.BZ=null
$.CJ=null
$.C7=null
$.FQ=null
$.Fi=null
$.FJ=null
$.Bn=null
$.ET=null
$.Dy=null
$.DB=null
$.FV=null
$.Fs=null
$.xj=null
$.CP=null
$.Ez=null
$.G4=null
$.CT=null
$.Dz=null
$.xa=null
$.Dh=null
$.Df=null
$.F9=null
$.Ey=null
$.Dc=null
$.BP=null
$.Fy=null
$.En=null
$.FN=null
$.G9=null
$.x7=null
$.x6=null
$.BL=null
$.CM=null
$.EH=null
$.Cg=null
$.ED=null
$.CC=null
$.Bv=null
$.BN=null
$.Ec=null
$.CE=null
$.Ev=null
$.BT=null
$.CX=null
$.FP=null
$.BG=null
$.D2=null
$.Et=null
$.BS=null
$.Dd=null
$.E9=null
$.BI=null
$.C9=null
$.yr=4
$.fe="OWNER"
$.xL=!1
$.vf=null
$.z9=""
$.pj=null
$.Hs=null
$.hX=null
$.eD=null
$.Hr=null
$.ec=null
$.eE=null
$.cG=null
$.fx=null
$.hV=null
$.hW=null
$.dB=null
$.cb=null
$.y4=!1})();(function lazyInitializers(){lazy($,"wD","$get$wD",function(){return H.z2("_$dart_dartClosure")})
lazy($,"v9","$get$v9",function(){return H.z2("_$dart_js")})
lazy($,"x1","$get$x1",function(){return H.Bh()})
lazy($,"x2","$get$x2",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.wO
$.wO=t+1
t="expando$key$"+t}return new P.lZ(null,t,[P.E])})
lazy($,"y7","$get$y7",function(){return H.dU(H.qa({
toString:function(){return"$receiver$"}}))})
lazy($,"y8","$get$y8",function(){return H.dU(H.qa({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"y9","$get$y9",function(){return H.dU(H.qa(null))})
lazy($,"ya","$get$ya",function(){return H.dU(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ye","$get$ye",function(){return H.dU(H.qa(void 0))})
lazy($,"yf","$get$yf",function(){return H.dU(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"yc","$get$yc",function(){return H.dU(H.yd(null))})
lazy($,"yb","$get$yb",function(){return H.dU(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"yh","$get$yh",function(){return H.dU(H.yd(void 0))})
lazy($,"yg","$get$yg",function(){return H.dU(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"w0","$get$w0",function(){return P.HB()})
lazy($,"hl","$get$hl",function(){return P.HI(null,P.d8)})
lazy($,"ij","$get$ij",function(){return[]})
lazy($,"yt","$get$yt",function(){return H.Gz([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"yT","$get$yT",function(){return P.I9()})
lazy($,"yw","$get$yw",function(){return P.jN(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"w3","$get$w3",function(){return P.jM()})
lazy($,"wC","$get$wC",function(){return P.dQ("^\\S+$",!0,!1)})
lazy($,"l_","$get$l_",function(){return P.cy(P.E,L.fQ)})
lazy($,"wx","$get$wx",function(){return P.dQ("[\\/]",!0,!1)})
lazy($,"bP","$get$bP",function(){return H.a([],[S.bI])})
lazy($,"mz","$get$mz",function(){return P.cy(P.x,Z.iH)})
lazy($,"mV","$get$mV",function(){return P.cy(P.E,B.hq)})
lazy($,"xG","$get$xG",function(){return H.a([],[A.a2])})
lazy($,"xP","$get$xP",function(){return H.a([],[P.x])})
lazy($,"oV","$get$oV",function(){return P.cy(P.E,T.hR)})
lazy($,"an","$get$an",function(){return H.a([],[U.aj])})
lazy($,"y3","$get$y3",function(){return P.xJ([0,new K.cE("Pixels -> Bytes",T.Ir(),T.Iq()),1,new K.cE("Pixels -> Packed bits",T.Ip(),T.Io()),2,new K.cE("RLE 1 byte",V.uf(1),V.ue(1)),3,new K.cE("RLE 2 bytes",V.uf(2),V.ue(2)),4,new K.cE("RLE 3 bytes",V.uf(3),V.ue(3)),5,new K.cE("RLE packed 1 byte",V.ud(1),V.uc(1)),6,new K.cE("RLE packed 2 bytes",V.ud(2),V.uc(2)),7,new K.cE("RLE packed 3 bytes",V.ud(3),V.uc(3)),8,new K.cE("RLE dynamic",V.IZ(),V.IY()),9,new K.cE("Exponential-Golomb pixels",F.IF(),F.IE()),10,new K.cE("Exponential-Golomb run RLE",F.ID(),F.IC()),11,new K.cE("Exponential-Golomb run/data RLE",F.IB(),F.IA())],P.E,K.cE)})
lazy($,"c","$get$c",function(){return P.a3(null,null,null,G.a_)})
lazy($,"yp","$get$yp",function(){return P.dQ("[\n\r]+",!0,!1)})
lazy($,"yq","$get$yq",function(){return P.dQ("( *)(.*)",!0,!1)})
lazy($,"yo","$get$yo",function(){return P.dQ("^s*//",!0,!1)})
lazy($,"yn","$get$yn",function(){return P.dQ("//",!0,!1)})
lazy($,"cI","$get$cI",function(){return new F.hF(!1,!1,"WordListFileFormat")})
lazy($,"ys","$get$ys",function(){return new T.qB(null)})
lazy($,"ws","$get$ws",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cW","$get$cW",function(){return P.cy(P.x,Y.dR)})
lazy($,"xM","$get$xM",function(){return P.dQ("[\\/]",!0,!1)})
lazy($,"ve","$get$ve",function(){return P.cy(P.x,W.fv)})
lazy($,"vq","$get$vq",function(){return A.fZ(255,0,255,255)})
lazy($,"or","$get$or",function(){return new F.hF(!1,!1,"Path Utils")})
lazy($,"op","$get$op",function(){return P.cy(P.eJ,P.E)})
lazy($,"cO","$get$cO",function(){return H.a([],[D.cF])})
lazy($,"i_","$get$i_",function(){return P.dQ("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fy","$get$fy",function(){return P.dQ("\\\\(?!\\\\)",!0,!1)})
lazy($,"wE","$get$wE",function(){var t={color:16711935}
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
mangledGlobalNames:{E:"int",V:"double",dq:"num",x:"String",cR:"bool",d8:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cR,args:[[P.p,E.iV]]},{func:1,v:true},{func:1,ret:P.dc,args:[P.bi,P.E,P.E,O.cX]},{func:1,ret:P.bi,args:[P.E,P.bi,P.bi,O.cX]},{func:1,v:true,args:[P.z]},{func:1,ret:P.x,args:[P.E]},{func:1,args:[,]},{func:1,ret:W.af},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.af,args:[P.E]},{func:1,ret:W.cc,args:[P.E]},{func:1,ret:W.co,args:[P.E]},{func:1,v:true,args:[P.z],opt:[P.dT]},{func:1,ret:P.cR,args:[W.cc,P.x,P.x,W.i9]},{func:1,ret:P.x,args:[P.x]},{func:1,ret:W.ce,args:[P.E]},{func:1,ret:P.cR,args:[P.z]},{func:1,ret:P.cm},{func:1,ret:W.cg,args:[P.E]},{func:1,ret:W.cp,args:[P.E]},{func:1,ret:W.cq,args:[P.E]},{func:1,ret:W.fw,args:[P.E]},{func:1,ret:W.cr,args:[P.E]},{func:1,ret:W.fz,args:[P.E]},{func:1,ret:W.fB,args:[P.E]},{func:1,ret:P.bL,args:[P.E]},{func:1,ret:W.bM,args:[P.E]},{func:1,ret:P.x,args:[P.dz]},{func:1,ret:W.fC,args:[P.E]},{func:1,ret:W.ci,args:[P.E]},{func:1,ret:W.cj,args:[P.E]},{func:1,ret:P.b0,args:[P.E]},{func:1,ret:P.E,args:[P.bG,P.bG]},{func:1,v:true,args:[,P.dT]},{func:1,v:true,args:[P.x]},{func:1,ret:W.f5,args:[P.E]},{func:1,ret:W.cn,args:[P.E]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.i,AnimationEffectTiming:J.i,AnimationTimeline:J.i,AppBannerPromptResult:J.i,BarProp:J.i,Body:J.i,CanvasGradient:J.i,CanvasPattern:J.i,CHROMIUMValuebuffer:J.i,CircularGeofencingRegion:J.i,Client:J.i,Clients:J.i,CompositorProxy:J.i,ConsoleBase:J.i,Coordinates:J.i,CredentialsContainer:J.i,Crypto:J.i,CryptoKey:J.i,CSS:J.i,DeprecatedStorageInfo:J.i,DeprecatedStorageQuota:J.i,DeviceRotationRate:J.i,DirectoryReader:J.i,DOMImplementation:J.i,Iterator:J.i,DOMMatrix:J.i,DOMMatrixReadOnly:J.i,DOMParser:J.i,EffectModel:J.i,Stream:J.i,FormData:J.i,GamepadButton:J.i,Geofencing:J.i,GeofencingRegion:J.i,Geolocation:J.i,Geoposition:J.i,Headers:J.i,HMDVRDevice:J.i,IdleDeadline:J.i,ImageBitmap:J.i,ImageBitmapRenderingContext:J.i,InjectedScriptHost:J.i,InputDeviceCapabilities:J.i,IntersectionObserver:J.i,IntersectionObserverEntry:J.i,KeyframeEffect:J.i,MediaDeviceInfo:J.i,MediaDevices:J.i,MediaError:J.i,MediaKeyStatusMap:J.i,MediaKeySystemAccess:J.i,MediaKeys:J.i,MediaMetadata:J.i,MediaSession:J.i,MemoryInfo:J.i,MessageChannel:J.i,Metadata:J.i,MIDIInputMap:J.i,MIDIOutputMap:J.i,MutationObserver:J.i,WebKitMutationObserver:J.i,MutationRecord:J.i,NavigatorStorageUtils:J.i,NodeFilter:J.i,NonDocumentTypeChildNode:J.i,NonElementParentNode:J.i,OffscreenCanvas:J.i,PerformanceNavigation:J.i,PerformanceObserver:J.i,PerformanceObserverEntryList:J.i,PerformanceTiming:J.i,Permissions:J.i,PositionError:J.i,PositionSensorVRDevice:J.i,Presentation:J.i,PushManager:J.i,PushMessageData:J.i,PushSubscription:J.i,ReadableByteStream:J.i,ReadableByteStreamReader:J.i,ReadableStreamReader:J.i,RTCCertificate:J.i,RTCIceCandidate:J.i,mozRTCIceCandidate:J.i,RTCStatsReport:J.i,RTCStatsResponse:J.i,Screen:J.i,ScrollState:J.i,Selection:J.i,SharedArrayBuffer:J.i,SourceInfo:J.i,StorageInfo:J.i,StorageManager:J.i,StorageQuota:J.i,StyleMedia:J.i,StylePropertyMap:J.i,SyncManager:J.i,TextMetrics:J.i,UnderlyingSourceBase:J.i,URLSearchParams:J.i,VRDevice:J.i,VREyeParameters:J.i,VRFieldOfView:J.i,VRPositionState:J.i,ValidityState:J.i,VideoPlaybackQuality:J.i,VideoTrack:J.i,WindowClient:J.i,WorkerConsole:J.i,XPathEvaluator:J.i,XPathExpression:J.i,XPathNSResolver:J.i,XPathResult:J.i,XMLSerializer:J.i,XSLTProcessor:J.i,Bluetooth:J.i,BluetoothAdvertisingData:J.i,BluetoothCharacteristicProperties:J.i,BluetoothRemoteGATTServer:J.i,BluetoothRemoteGATTService:J.i,BluetoothUUID:J.i,Cache:J.i,DOMFileSystemSync:J.i,DirectoryEntrySync:J.i,DirectoryReaderSync:J.i,EntrySync:J.i,FileEntrySync:J.i,FileReaderSync:J.i,FileWriterSync:J.i,HTMLAllCollection:J.i,NFC:J.i,PagePopupController:J.i,Request:J.i,Response:J.i,SubtleCrypto:J.i,USBAlternateInterface:J.i,USBConfiguration:J.i,USBDevice:J.i,USBEndpoint:J.i,USBInTransferResult:J.i,USBInterface:J.i,USBIsochronousInTransferPacket:J.i,USBIsochronousInTransferResult:J.i,USBIsochronousOutTransferPacket:J.i,USBIsochronousOutTransferResult:J.i,USBOutTransferResult:J.i,WebKitCSSMatrix:J.i,Worklet:J.i,WorkletGlobalScope:J.i,IDBCursor:J.i,IDBCursorWithValue:J.i,IDBFactory:J.i,IDBKeyRange:J.i,SVGAngle:J.i,SVGAnimatedAngle:J.i,SVGAnimatedBoolean:J.i,SVGAnimatedEnumeration:J.i,SVGAnimatedInteger:J.i,SVGAnimatedLength:J.i,SVGAnimatedLengthList:J.i,SVGAnimatedNumber:J.i,SVGAnimatedNumberList:J.i,SVGAnimatedPreserveAspectRatio:J.i,SVGAnimatedRect:J.i,SVGAnimatedString:J.i,SVGAnimatedTransformList:J.i,SVGMatrix:J.i,SVGPreserveAspectRatio:J.i,SVGUnitTypes:J.i,AudioListener:J.i,AudioParam:J.i,PeriodicWave:J.i,ANGLEInstancedArrays:J.i,ANGLE_instanced_arrays:J.i,WebGLBuffer:J.i,CHROMIUMSubscribeUniform:J.i,WebGLCompressedTextureASTC:J.i,WebGLCompressedTextureATC:J.i,WEBGL_compressed_texture_atc:J.i,WebGLCompressedTextureETC1:J.i,WEBGL_compressed_texture_etc1:J.i,WebGLCompressedTexturePVRTC:J.i,WEBGL_compressed_texture_pvrtc:J.i,WebGLCompressedTextureS3TC:J.i,WEBGL_compressed_texture_s3tc:J.i,WebGLDebugRendererInfo:J.i,WEBGL_debug_renderer_info:J.i,WebGLDebugShaders:J.i,WEBGL_debug_shaders:J.i,WebGLDepthTexture:J.i,WEBGL_depth_texture:J.i,WebGLDrawBuffers:J.i,WEBGL_draw_buffers:J.i,EXTsRGB:J.i,EXT_sRGB:J.i,EXTBlendMinMax:J.i,EXT_blend_minmax:J.i,EXTColorBufferFloat:J.i,EXTDisjointTimerQuery:J.i,EXTFragDepth:J.i,EXT_frag_depth:J.i,EXTShaderTextureLOD:J.i,EXT_shader_texture_lod:J.i,EXTTextureFilterAnisotropic:J.i,EXT_texture_filter_anisotropic:J.i,WebGLFramebuffer:J.i,WebGLLoseContext:J.i,WebGLExtensionLoseContext:J.i,WEBGL_lose_context:J.i,OESElementIndexUint:J.i,OES_element_index_uint:J.i,OESStandardDerivatives:J.i,OES_standard_derivatives:J.i,OESTextureFloat:J.i,OES_texture_float:J.i,OESTextureFloatLinear:J.i,OES_texture_float_linear:J.i,OESTextureHalfFloat:J.i,OES_texture_half_float:J.i,OESTextureHalfFloatLinear:J.i,OES_texture_half_float_linear:J.i,OESVertexArrayObject:J.i,OES_vertex_array_object:J.i,WebGLProgram:J.i,WebGLQuery:J.i,WebGLRenderbuffer:J.i,WebGLSampler:J.i,WebGLShader:J.i,WebGLShaderPrecisionFormat:J.i,WebGLSync:J.i,WebGLTexture:J.i,WebGLTimerQueryEXT:J.i,WebGLTransformFeedback:J.i,WebGLUniformLocation:J.i,WebGLVertexArrayObject:J.i,WebGLVertexArrayObjectOES:J.i,Database:J.i,SQLError:J.i,SQLResultSet:J.i,SQLTransaction:J.i,ArrayBuffer:H.fm,ArrayBufferView:H.ew,DataView:H.nY,Float32Array:H.nZ,Float64Array:H.o_,Int16Array:H.o0,Int32Array:H.o1,Int8Array:H.o2,Uint16Array:H.o3,Uint32Array:H.o4,Uint8ClampedArray:H.jT,CanvasPixelArray:H.jT,Uint8Array:H.fn,HTMLBRElement:W.b3,HTMLContentElement:W.b3,HTMLDListElement:W.b3,HTMLDataListElement:W.b3,HTMLDetailsElement:W.b3,HTMLDialogElement:W.b3,HTMLHRElement:W.b3,HTMLHeadElement:W.b3,HTMLHeadingElement:W.b3,HTMLHtmlElement:W.b3,HTMLLabelElement:W.b3,HTMLLegendElement:W.b3,HTMLModElement:W.b3,HTMLOptGroupElement:W.b3,HTMLParagraphElement:W.b3,HTMLPictureElement:W.b3,HTMLPreElement:W.b3,HTMLQuoteElement:W.b3,HTMLShadowElement:W.b3,HTMLTableCaptionElement:W.b3,HTMLTableCellElement:W.b3,HTMLTableDataCellElement:W.b3,HTMLTableHeaderCellElement:W.b3,HTMLTableColElement:W.b3,HTMLTitleElement:W.b3,HTMLTrackElement:W.b3,HTMLUListElement:W.b3,HTMLUnknownElement:W.b3,HTMLDirectoryElement:W.b3,HTMLFontElement:W.b3,HTMLFrameElement:W.b3,HTMLMarqueeElement:W.b3,HTMLElement:W.b3,HTMLAnchorElement:W.eU,HTMLAreaElement:W.kZ,HTMLAudioElement:W.eY,AudioTrack:W.cK,AudioTrackList:W.l6,HTMLBaseElement:W.la,Blob:W.f_,HTMLBodyElement:W.f0,HTMLButtonElement:W.fY,CacheStorage:W.io,HTMLCanvasElement:W.lj,CanvasRenderingContext2D:W.lk,CDATASection:W.ef,CharacterData:W.ef,Comment:W.ef,ProcessingInstruction:W.ef,Text:W.ef,CompositorWorker:W.lp,Credential:W.h_,FederatedCredential:W.h_,PasswordCredential:W.h_,CSSFontFaceRule:W.lx,CSSImportRule:W.ly,CSSKeyframeRule:W.h0,MozCSSKeyframeRule:W.h0,WebKitCSSKeyframeRule:W.h0,CSSKeyframesRule:W.h1,MozCSSKeyframesRule:W.h1,WebKitCSSKeyframesRule:W.h1,CSSPageRule:W.lz,CSSCharsetRule:W.bM,CSSGroupingRule:W.bM,CSSMediaRule:W.bM,CSSNamespaceRule:W.bM,CSSSupportsRule:W.bM,CSSRule:W.bM,CSSStyleDeclaration:W.f4,MSStyleCSSProperties:W.f4,CSS2Properties:W.f4,CSSStyleRule:W.lA,CSSViewportRule:W.lB,DataTransfer:W.lG,DataTransferItem:W.f5,DataTransferItemList:W.iv,DeviceAcceleration:W.lJ,HTMLDivElement:W.ix,Document:W.eh,HTMLDocument:W.eh,XMLDocument:W.eh,DocumentFragment:W.iy,ShadowRoot:W.iy,DOMError:W.iz,FileError:W.iz,DOMException:W.lK,DOMPoint:W.lL,DOMPointReadOnly:W.iA,DOMRectReadOnly:W.iB,DOMStringList:W.iC,DOMStringMap:W.iD,DOMTokenList:W.iE,Element:W.cc,HTMLEmbedElement:W.lR,DirectoryEntry:W.h4,Entry:W.h4,FileEntry:W.h4,ErrorEvent:W.lX,AnimationEvent:W.Z,AnimationPlayerEvent:W.Z,ApplicationCacheErrorEvent:W.Z,AutocompleteErrorEvent:W.Z,BeforeInstallPromptEvent:W.Z,BeforeUnloadEvent:W.Z,BlobEvent:W.Z,ClipboardEvent:W.Z,CloseEvent:W.Z,CustomEvent:W.Z,DeviceLightEvent:W.Z,DeviceMotionEvent:W.Z,DeviceOrientationEvent:W.Z,ExtendableEvent:W.Z,ExtendableMessageEvent:W.Z,FetchEvent:W.Z,FontFaceSetLoadEvent:W.Z,GamepadEvent:W.Z,GeofencingEvent:W.Z,HashChangeEvent:W.Z,InstallEvent:W.Z,MediaEncryptedEvent:W.Z,MediaKeyMessageEvent:W.Z,MediaQueryListEvent:W.Z,MediaStreamEvent:W.Z,MediaStreamTrackEvent:W.Z,MessageEvent:W.Z,MIDIConnectionEvent:W.Z,MIDIMessageEvent:W.Z,NotificationEvent:W.Z,PageTransitionEvent:W.Z,PopStateEvent:W.Z,PresentationConnectionAvailableEvent:W.Z,PresentationConnectionCloseEvent:W.Z,ProgressEvent:W.Z,PromiseRejectionEvent:W.Z,PushEvent:W.Z,RelatedEvent:W.Z,RTCDataChannelEvent:W.Z,RTCDTMFToneChangeEvent:W.Z,RTCIceCandidateEvent:W.Z,RTCPeerConnectionIceEvent:W.Z,SecurityPolicyViolationEvent:W.Z,ServicePortConnectEvent:W.Z,ServiceWorkerMessageEvent:W.Z,SpeechRecognitionEvent:W.Z,StorageEvent:W.Z,SyncEvent:W.Z,TrackEvent:W.Z,TransitionEvent:W.Z,WebKitTransitionEvent:W.Z,ResourceProgressEvent:W.Z,USBConnectionEvent:W.Z,IDBVersionChangeEvent:W.Z,AudioProcessingEvent:W.Z,OfflineAudioCompletionEvent:W.Z,WebGLContextEvent:W.Z,Event:W.Z,InputEvent:W.Z,Animation:W.ag,ApplicationCache:W.ag,DOMApplicationCache:W.ag,OfflineResourceList:W.ag,BatteryManager:W.ag,CanvasCaptureMediaStreamTrack:W.ag,CrossOriginServiceWorkerClient:W.ag,EventSource:W.ag,MediaKeySession:W.ag,MediaQueryList:W.ag,MediaRecorder:W.ag,MediaSource:W.ag,MediaStream:W.ag,MediaStreamTrack:W.ag,MessagePort:W.ag,MIDIAccess:W.ag,NetworkInformation:W.ag,Notification:W.ag,Performance:W.ag,PermissionStatus:W.ag,PresentationAvailability:W.ag,PresentationReceiver:W.ag,PresentationRequest:W.ag,RTCDTMFSender:W.ag,RTCPeerConnection:W.ag,webkitRTCPeerConnection:W.ag,mozRTCPeerConnection:W.ag,ScreenOrientation:W.ag,ServicePortCollection:W.ag,ServiceWorkerContainer:W.ag,ServiceWorkerRegistration:W.ag,SpeechRecognition:W.ag,SpeechSynthesis:W.ag,SpeechSynthesisUtterance:W.ag,WorkerPerformance:W.ag,BluetoothDevice:W.ag,BluetoothRemoteGATTCharacteristic:W.ag,USB:W.ag,EventTarget:W.ag,HTMLFieldSetElement:W.mq,File:W.ce,FileList:W.fd,FileReader:W.mr,DOMFileSystem:W.ms,FileWriter:W.mt,FontFace:W.mv,FontFaceSet:W.mw,HTMLFormElement:W.iU,Gamepad:W.cn,History:W.mI,HTMLOptionsCollection:W.ff,HTMLCollection:W.ff,HTMLFormControlsCollection:W.iW,XMLHttpRequest:W.e6,XMLHttpRequestUpload:W.hm,XMLHttpRequestEventTarget:W.hm,HTMLIFrameElement:W.mQ,ImageData:W.hn,HTMLImageElement:W.fh,HTMLInputElement:W.ho,HTMLKeygenElement:W.nm,HTMLLIElement:W.jL,CalcLength:W.hz,LengthValue:W.hz,SimpleLength:W.hz,HTMLLinkElement:W.hA,Location:W.nD,HTMLMapElement:W.nI,HTMLMediaElement:W.jP,MediaList:W.jQ,HTMLMenuElement:W.nP,HTMLMenuItemElement:W.nQ,HTMLMetaElement:W.nR,HTMLMeterElement:W.nS,MIDIOutput:W.nT,MIDIInput:W.hI,MIDIPort:W.hI,MimeType:W.co,MimeTypeArray:W.jR,MouseEvent:W.e8,DragEvent:W.e8,PointerEvent:W.e8,WheelEvent:W.e8,Navigator:W.o5,NavigatorUserMediaError:W.o6,Node:W.af,NodeIterator:W.jU,NodeList:W.jV,RadioNodeList:W.jV,HTMLOListElement:W.ob,HTMLObjectElement:W.oc,HTMLOptionElement:W.og,HTMLOutputElement:W.oi,HTMLParamElement:W.om,Path2D:W.oo,PerformanceCompositeTiming:W.ea,PerformanceEntry:W.ea,PerformanceMark:W.ea,PerformanceMeasure:W.ea,PerformanceRenderTiming:W.ea,PerformanceResourceTiming:W.ea,Perspective:W.ou,Plugin:W.cg,PluginArray:W.k4,PositionValue:W.oA,PresentationConnection:W.oB,HTMLProgressElement:W.oF,Range:W.oI,Rotation:W.oS,RTCDataChannel:W.k7,DataChannel:W.k7,RTCSessionDescription:W.k8,mozRTCSessionDescription:W.k8,HTMLScriptElement:W.fv,HTMLSelectElement:W.k9,ServicePort:W.p2,SharedWorker:W.p5,SharedWorkerGlobalScope:W.p6,HTMLSlotElement:W.p9,SourceBuffer:W.cp,SourceBufferList:W.kb,HTMLSourceElement:W.pc,HTMLSpanElement:W.hU,SpeechGrammar:W.cq,SpeechGrammarList:W.kc,SpeechRecognitionAlternative:W.fw,SpeechRecognitionError:W.pe,SpeechRecognitionResult:W.ci,SpeechSynthesisEvent:W.pf,SpeechSynthesisVoice:W.pg,Storage:W.pl,HTMLStyleElement:W.pJ,CSSStyleSheet:W.cj,StyleSheet:W.cj,KeywordValue:W.eG,NumberValue:W.eG,TransformValue:W.eG,StyleValue:W.eG,HTMLTableElement:W.kg,HTMLTableRowElement:W.pQ,HTMLTableSectionElement:W.pR,HTMLTemplateElement:W.hY,HTMLTextAreaElement:W.hZ,TextTrack:W.cP,TextTrackCue:W.cH,VTTCue:W.cH,TextTrackCueList:W.pY,TextTrackList:W.pZ,TimeRanges:W.q2,Touch:W.cr,TouchList:W.ki,TrackDefault:W.fz,TrackDefaultList:W.kj,Matrix:W.fA,Skew:W.fA,TransformComponent:W.fA,Translation:W.q8,TreeWalker:W.kk,CompositionEvent:W.dC,FocusEvent:W.dC,KeyboardEvent:W.dC,TextEvent:W.dC,TouchEvent:W.dC,SVGZoomEvent:W.dC,UIEvent:W.dC,URL:W.qi,HTMLVideoElement:W.qm,VideoTrackList:W.qn,VTTRegion:W.fB,VTTRegionList:W.kl,WebSocket:W.qs,Window:W.ko,DOMWindow:W.ko,Worker:W.qz,CompositorWorkerGlobalScope:W.eL,DedicatedWorkerGlobalScope:W.eL,ServiceWorkerGlobalScope:W.eL,WorkerGlobalScope:W.eL,Attr:W.fC,ClientRect:W.qR,ClientRectList:W.i6,DOMRectList:W.i6,CSSRuleList:W.kv,DocumentType:W.r_,DOMRect:W.r0,GamepadList:W.kz,HTMLFrameSetElement:W.rm,NamedNodeMap:W.ic,MozNamedAttrMap:W.ic,ServiceWorker:W.rQ,SpeechRecognitionResultList:W.kE,StyleSheetList:W.kG,WorkerLocation:W.td,WorkerNavigator:W.te,IDBDatabase:P.lH,IDBIndex:P.mT,IDBObjectStore:P.od,IDBOpenDBRequest:P.hQ,IDBVersionChangeRequest:P.hQ,IDBRequest:P.hQ,IDBTransaction:P.q6,SVGAElement:P.kW,SVGAnimateElement:P.ee,SVGAnimateMotionElement:P.ee,SVGAnimateTransformElement:P.ee,SVGAnimationElement:P.ee,SVGSetElement:P.ee,SVGFEBlendElement:P.m_,SVGFEColorMatrixElement:P.m0,SVGFEComponentTransferElement:P.m1,SVGFECompositeElement:P.m2,SVGFEConvolveMatrixElement:P.m3,SVGFEDiffuseLightingElement:P.m4,SVGFEDisplacementMapElement:P.m5,SVGFEFloodElement:P.m6,SVGFEGaussianBlurElement:P.m7,SVGFEImageElement:P.m8,SVGFEMergeElement:P.m9,SVGFEMorphologyElement:P.ma,SVGFEOffsetElement:P.mb,SVGFEPointLightElement:P.mc,SVGFESpecularLightingElement:P.md,SVGFESpotLightElement:P.me,SVGFETileElement:P.mf,SVGFETurbulenceElement:P.mg,SVGFilterElement:P.mu,SVGForeignObjectElement:P.my,SVGCircleElement:P.dx,SVGEllipseElement:P.dx,SVGLineElement:P.dx,SVGPathElement:P.dx,SVGPolygonElement:P.dx,SVGPolylineElement:P.dx,SVGGeometryElement:P.dx,SVGClipPathElement:P.e5,SVGDefsElement:P.e5,SVGGElement:P.e5,SVGSwitchElement:P.e5,SVGGraphicsElement:P.e5,SVGImageElement:P.mR,SVGLength:P.d7,SVGLengthList:P.np,SVGMarkerElement:P.nN,SVGMaskElement:P.nO,SVGNumber:P.d9,SVGNumberList:P.o9,SVGPatternElement:P.os,SVGPoint:P.ox,SVGPointList:P.oy,SVGRect:P.oK,SVGRectElement:P.oL,SVGScriptElement:P.hS,SVGStringList:P.pH,SVGStyleElement:P.pK,SVGDescElement:P.ck,SVGDiscardElement:P.ck,SVGFEDistantLightElement:P.ck,SVGFEFuncAElement:P.ck,SVGFEFuncBElement:P.ck,SVGFEFuncGElement:P.ck,SVGFEFuncRElement:P.ck,SVGFEMergeNodeElement:P.ck,SVGMetadataElement:P.ck,SVGStopElement:P.ck,SVGTitleElement:P.ck,SVGComponentTransferFunctionElement:P.ck,SVGElement:P.ck,SVGSVGElement:P.pN,SVGSymbolElement:P.pP,SVGTextContentElement:P.kh,SVGTextPathElement:P.pX,SVGTSpanElement:P.i0,SVGTextElement:P.i0,SVGTextPositioningElement:P.i0,SVGTransform:P.db,SVGTransformList:P.q7,SVGUseElement:P.qj,SVGViewElement:P.qo,SVGViewSpec:P.qp,SVGLinearGradientElement:P.i8,SVGRadialGradientElement:P.i8,SVGGradientElement:P.i8,SVGCursorElement:P.rM,SVGFEDropShadowElement:P.rN,SVGMPathElement:P.rO,AudioBuffer:P.fS,AudioBufferSourceNode:P.eX,AudioContext:P.fT,webkitAudioContext:P.fT,OfflineAudioContext:P.fT,AnalyserNode:P.bF,RealtimeAnalyserNode:P.bF,AudioDestinationNode:P.bF,ChannelMergerNode:P.bF,AudioChannelMerger:P.bF,ChannelSplitterNode:P.bF,AudioChannelSplitter:P.bF,DelayNode:P.bF,DynamicsCompressorNode:P.bF,GainNode:P.bF,AudioGainNode:P.bF,IIRFilterNode:P.bF,MediaStreamAudioDestinationNode:P.bF,PannerNode:P.bF,AudioPannerNode:P.bF,webkitAudioPannerNode:P.bF,ScriptProcessorNode:P.bF,JavaScriptAudioNode:P.bF,StereoPannerNode:P.bF,WaveShaperNode:P.bF,AudioNode:P.bF,MediaElementAudioSourceNode:P.eZ,MediaStreamAudioSourceNode:P.eZ,AudioSourceNode:P.eZ,BiquadFilterNode:P.lc,ConvolverNode:P.lu,OscillatorNode:P.k0,Oscillator:P.k0,WebGLActiveInfo:P.kY,WebGLRenderingContext:P.oO,WebGL2RenderingContext:P.oP,WebGL2RenderingContextBase:P.tc,SQLResultSetRowList:P.kd})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CacheStorage:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLMediaElement:false,MediaList:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,HTMLProgressElement:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,RTCSessionDescription:true,mozRTCSessionDescription:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,HTMLStyleElement:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,AudioSourceNode:false,BiquadFilterNode:true,ConvolverNode:true,OscillatorNode:true,Oscillator:true,WebGLActiveInfo:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jS.$nativeSuperclassTag="ArrayBufferView"
H.hL.$nativeSuperclassTag="ArrayBufferView"
H.hN.$nativeSuperclassTag="ArrayBufferView"
H.hJ.$nativeSuperclassTag="ArrayBufferView"
H.hM.$nativeSuperclassTag="ArrayBufferView"
H.hO.$nativeSuperclassTag="ArrayBufferView"
H.hK.$nativeSuperclassTag="ArrayBufferView"
W.h5.$nativeSuperclassTag="EventTarget"
W.h8.$nativeSuperclassTag="EventTarget"
W.h6.$nativeSuperclassTag="EventTarget"
W.h9.$nativeSuperclassTag="EventTarget"
W.h7.$nativeSuperclassTag="EventTarget"
W.ha.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.za(E.wt(),b)},[])
else (function(b){H.za(E.wt(),b)})([])})})()
//# sourceMappingURL=BBBController.dart.js.map
