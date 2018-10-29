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
a[c]=function(){a[c]=function(){H.Hv(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.uT"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.uT"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.uT(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={tS:function tS(a){this.a=a},
ro:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wK:function(a,b,c,d){var t=new H.oT(a,b,c,[d])
t.eM(a,b,c,d)
return t},
dt:function(a,b,c,d){if(!!J.aR(a).$isv)return new H.fX(a,b,[c,d])
return new H.hw(a,b,[c,d])},
jo:function(){return new P.dO("No element")},
wj:function(){return new P.dO("Too few elements")},
jM:function(a,b,c,d){if(c-b<=32)H.FX(a,b,c,d)
else H.FW(a,b,c,d)},
FX:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bg(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cu(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
FW:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.am(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.am(a3+a4,2)
p=q-t
o=q+t
n=J.bg(a2)
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
if(J.bc(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.aR(c)
if(b.S(c,0))continue
if(b.a4(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dz(c)
if(b.aB(c,0)){--f
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
if(J.ea(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cu(a5.$2(d,j),0))for(;!0;)if(J.cu(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ea(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.jM(a2,a3,g-2,a5)
H.jM(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.bc(a5.$2(n.n(a2,g),l),0);)++g
for(;J.bc(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.bc(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.bc(a5.$2(d,j),0))for(;!0;)if(J.bc(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ea(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jM(a2,g,f,a5)}else H.jM(a2,g,f,a5)},
kS:function kS(a){this.a=a},
v:function v(){},
eq:function eq(){},
oT:function oT(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
er:function er(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hw:function hw(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fX:function fX(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jt:function jt(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fg:function fg(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
e8:function e8(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eH:function eH(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iy:function iy(){},
pj:function pj(){},
hM:function hM(){},
kf:function(a,b){var t=a.bp(b)
if(!u.globalState.d.cy)u.globalState.f.bz()
return t},
xK:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aR(s).$isq)throw H.l(P.dC("Arguments to main must be a List: "+H.B(s)))
u.globalState=new H.qz(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vI()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.q5(P.tY(null,H.eM),0)
r=P.F
s.z=new H.r(0,null,null,null,null,null,0,[r,H.fx])
s.ch=new H.r(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qy()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.zP,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.Gg)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a6(null,null,null,r)
p=new H.fn(0,null,!1)
o=new H.fx(s,new H.r(0,null,null,null,null,null,0,[r,H.fn]),q,u.createNewIsolate(),p,new H.dD(H.rF()),new H.dD(H.rF()),!1,!1,[],P.a6(null,null,null,null),null,null,!1,!0,P.a6(null,null,null,null))
q.h(0,0)
o.d6(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fD(a,{func:1,args:[,]}))o.bp(new H.rG(t,a))
else if(H.fD(a,{func:1,args:[,,]}))o.bp(new H.rH(t,a))
else o.bp(a)
u.globalState.f.bz()},
Gg:function(a){var t=P.hs(["command","print","msg",a])
return new H.dy(!0,P.hW(null,P.F)).aw(t)},
zR:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.zS()
return},
zS:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.l(new P.Z("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.l(new P.Z('Cannot extract URI from "'+t+'"'))},
zP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eK(!0,[]).aV(b.data)
s=J.bg(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eK(!0,[]).aV(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eK(!0,[]).aV(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.F
j=P.a6(null,null,null,k)
i=new H.fn(0,null,!1)
h=new H.fx(s,new H.r(0,null,null,null,null,null,0,[k,H.fn]),j,u.createNewIsolate(),i,new H.dD(H.rF()),new H.dD(H.rF()),!1,!1,[],P.a6(null,null,null,null),null,null,!1,!0,P.a6(null,null,null,null))
j.h(0,0)
h.d6(0,i)
u.globalState.f.a.aJ(0,new H.eM(h,new H.ml(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bz()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fG(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bz()
break
case"close":u.globalState.ch.an(0,$.$get$vJ().n(0,a))
a.terminate()
u.globalState.f.bz()
break
case"log":H.zO(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hs(["command","print","msg",t])
k=new H.dy(!0,P.hW(null,P.F)).aw(k)
s.toString
self.postMessage(k)}else P.fE(s.n(t,"msg"))
break
case"error":throw H.l(s.n(t,"msg"))}},
zO:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hs(["command","log","msg",a])
r=new H.dy(!0,P.hW(null,P.F)).aw(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.ct(q)
t=H.cs(q)
s=P.ln(t)
throw H.l(s)}},
zQ:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wx=$.wx+("_"+s)
$.wy=$.wy+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fG(f,["spawned",new H.fy(s,r),q,t.r])
r=new H.mm(a,b,c,d,t)
if(e===!0){t.dN(q,q)
u.globalState.f.a.aJ(0,new H.eM(t,r,"start isolate"))}else r.$0()},
G2:function(a,b){var t=new H.pa(!0,!1,null)
t.eN(a,b)
return t},
Gz:function(a){return new H.eK(!0,[]).aV(new H.dy(!1,P.hW(null,P.F)).aw(a))},
rG:function rG(a,b){this.a=a
this.b=b},
rH:function rH(a,b){this.a=a
this.b=b},
qz:function qz(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
fx:function fx(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
qu:function qu(a,b){this.a=a
this.b=b},
q5:function q5(a,b){this.a=a
this.b=b},
q6:function q6(a){this.a=a},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
qy:function qy(){},
ml:function ml(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mm:function mm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pT:function pT(){},
fy:function fy(b,a){this.b=b
this.a=a},
qB:function qB(a,b){this.a=a
this.b=b},
hZ:function hZ(b,c,a){this.b=b
this.c=c
this.a=a},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
pa:function pa(a,b,c){this.a=a
this.b=b
this.c=c},
pb:function pb(a,b){this.a=a
this.b=b},
pc:function pc(a,b){this.a=a
this.b=b},
dD:function dD(a){this.a=a},
dy:function dy(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
yS:function(){throw H.l(new P.Z("Cannot modify unmodifiable Map"))},
Hb:function(a){return u.types[a]},
xF:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aR(a).$isaU},
B:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cJ(a)
if(typeof t!=="string")throw H.l(H.bv(a))
return t},
Fs:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.nZ(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eu:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
uh:function(a,b){if(b==null)throw H.l(new P.bK(a,null,null))
return b.$1(a)},
fl:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.uh(a,c)
if(3>=t.length)return H.x(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.uh(a,c)}if(b<2||b>36)throw H.l(P.bF(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a5(q,o)|32)>r)return H.uh(a,c)}return parseInt(a,b)},
wv:function(a,b){return b.$1(a)},
wz:function(a,b){var t,s
H.GU(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wv(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.rM(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wv(a,b)}return t},
nT:function(a){var t,s,r,q,p,o,n,m
t=J.aR(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.aR(a).$iseF){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a5(q,0)===36)q=C.c.ag(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.ry(H.kj(a),0,null),u.mangledGlobalNames)},
jG:function(a){return"Instance of '"+H.nT(a)+"'"},
F7:function(){if(!!self.location)return self.location.href
return},
wu:function(a){var t,s,r,q,p
t=J.ck(a)
if(typeof t!=="number")return t.eo()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Fc:function(a){var t,s,r,q
t=H.a([],[P.F])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.cj)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bv(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aT(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.l(H.bv(q))}return H.wu(t)},
wB:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.cj)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bv(q))
if(q<0)throw H.l(H.bv(q))
if(q>65535)return H.Fc(a)}return H.wu(a)},
Fd:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eo()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hH:function(a){var t
if(typeof a!=="number")return H.av(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aT(t,10))>>>0,56320|t&1023)}}throw H.l(P.bF(a,0,1114111,null,null))},
cW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ww:function(a){return a.b?H.cW(a).getUTCFullYear()+0:H.cW(a).getFullYear()+0},
uj:function(a){return a.b?H.cW(a).getUTCMonth()+1:H.cW(a).getMonth()+1},
ui:function(a){return a.b?H.cW(a).getUTCDate()+0:H.cW(a).getDate()+0},
F8:function(a){return a.b?H.cW(a).getUTCHours()+0:H.cW(a).getHours()+0},
Fa:function(a){return a.b?H.cW(a).getUTCMinutes()+0:H.cW(a).getMinutes()+0},
Fb:function(a){return a.b?H.cW(a).getUTCSeconds()+0:H.cW(a).getSeconds()+0},
F9:function(a){return a.b?H.cW(a).getUTCMilliseconds()+0:H.cW(a).getMilliseconds()+0},
uk:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bv(a))
return a[b]},
wA:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bv(a))
a[b]=c},
av:function(a){throw H.l(H.bv(a))},
x:function(a,b){if(a==null)J.ck(a)
throw H.l(H.c4(a,b))},
c4:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.d_(!0,b,"index",null)
t=J.ck(a)
if(!(b<0)){if(typeof t!=="number")return H.av(t)
s=b>=t}else s=!0
if(s)return P.by(b,a,"index",null,t)
return P.jI(b,"index",null)},
GZ:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.d_(!0,a,"start",null)
if(a<0||a>c)return new P.ey(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.d_(!0,b,"end",null)
if(b<a||b>c)return new P.ey(a,c,!0,b,"end","Invalid value")}return new P.d_(!0,b,"end",null)},
bv:function(a){return new P.d_(!0,a,null,null)},
kh:function(a){if(typeof a!=="number")throw H.l(H.bv(a))
return a},
uS:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(H.bv(a))
return a},
GU:function(a){if(typeof a!=="string")throw H.l(H.bv(a))
return a},
l:function(a){var t
if(a==null)a=new P.fj()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xM})
t.name=""}else t.toString=H.xM
return t},
xM:function(){return J.cJ(this.dartException)},
ba:function(a){throw H.l(a)},
cj:function(a){throw H.l(new P.bN(a))},
dR:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pg(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
ph:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
wT:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
tU:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mI(a,s,t?null:b.receiver)},
ct:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rI(a)
if(a==null)return
if(a instanceof H.h5)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aT(r,16)&8191)===10)switch(q){case 438:return t.$1(H.tU(H.B(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.B(s)+" (Error "+q+")"
return t.$1(new H.jz(p,null))}}if(a instanceof TypeError){o=$.$get$wN()
n=$.$get$wO()
m=$.$get$wP()
l=$.$get$wQ()
k=$.$get$wU()
j=$.$get$wV()
i=$.$get$wS()
$.$get$wR()
h=$.$get$wX()
g=$.$get$wW()
f=o.aE(s)
if(f!=null)return t.$1(H.tU(s,f))
else{f=n.aE(s)
if(f!=null){f.method="call"
return t.$1(H.tU(s,f))}else{f=m.aE(s)
if(f==null){f=l.aE(s)
if(f==null){f=k.aE(s)
if(f==null){f=j.aE(s)
if(f==null){f=i.aE(s)
if(f==null){f=l.aE(s)
if(f==null){f=h.aE(s)
if(f==null){f=g.aE(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jz(s,f==null?null:f.method))}}return t.$1(new H.pi(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jQ()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.d_(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jQ()
return a},
cs:function(a){var t
if(a instanceof H.h5)return a.b
if(a==null)return new H.kb(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kb(a,null)},
Hk:function(a){if(a==null||typeof a!='object')return J.dB(a)
else return H.eu(a)},
xC:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
Hg:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kf(b,new H.rt(a))
case 1:return H.kf(b,new H.ru(a,d))
case 2:return H.kf(b,new H.rv(a,d,e))
case 3:return H.kf(b,new H.rw(a,d,e,f))
case 4:return H.kf(b,new H.rx(a,d,e,f,g))}throw H.l(P.ln("Unsupported number of arguments for wrapped closure"))},
dj:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.Hg)
a.$identity=t
return t},
yO:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aR(c).$isq){t.$reflectionInfo=c
r=H.Fs(t).r}else r=c
q=d?Object.create(new H.ot().constructor.prototype):Object.create(new H.fM(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dE
$.dE=J.e9(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.vg(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Hb,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.vd:H.rQ
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.l("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.vg(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
yL:function(a,b,c,d){var t=H.rQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
vg:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.yN(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.yL(s,!q,t,b)
if(s===0){q=$.dE
$.dE=J.e9(q,1)
o="self"+H.B(q)
q="return function(){var "+o+" = this."
p=$.fN
if(p==null){p=H.kK("self")
$.fN=p}return new Function(q+H.B(p)+";return "+o+"."+H.B(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dE
$.dE=J.e9(q,1)
n+=H.B(q)
q="return function("+n+"){return this."
p=$.fN
if(p==null){p=H.kK("self")
$.fN=p}return new Function(q+H.B(p)+"."+H.B(t)+"("+n+");}")()},
yM:function(a,b,c,d){var t,s
t=H.rQ
s=H.vd
switch(b?-1:a){case 0:throw H.l(new H.o4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
yN:function(a,b){var t,s,r,q,p,o,n,m
t=H.yK()
s=$.vc
if(s==null){s=H.kK("receiver")
$.vc=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.yM(q,!o,r,b)
if(q===1){s="return function(){return this."+H.B(t)+"."+H.B(r)+"(this."+H.B(s)+");"
o=$.dE
$.dE=J.e9(o,1)
return new Function(s+H.B(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.B(t)+"."+H.B(r)+"(this."+H.B(s)+", "+m+");"
o=$.dE
$.dE=J.e9(o,1)
return new Function(s+H.B(o)+"}")()},
uT:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aR(c).$isq){c.fixed$length=Array
t=c}else t=c
return H.yO(a,b,t,!!d,e,f)},
rQ:function(a){return a.a},
vd:function(a){return a.c},
yK:function(){var t=$.fN
if(t==null){t=H.kK("self")
$.fN=t}return t},
kK:function(a){var t,s,r,q,p
t=new H.fM("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Hn:function(a,b){var t=J.bg(b)
throw H.l(H.vf(H.nT(a),t.M(b,3,t.gm(b))))},
i2:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aR(a)[b]
else t=!0
if(t)return a
H.Hn(a,b)},
xB:function(a){var t=J.aR(a)
return"$S" in t?t.$S():null},
fD:function(a,b){var t
if(a==null)return!1
t=H.xB(a)
return t==null?!1:H.uW(t,b)},
vf:function(a,b){return new H.kP("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Hv:function(a){throw H.l(new P.l7(a))},
rF:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xD:function(a){return u.getIsolateTag(a)},
c_:function(a){return new H.dS(a,null)},
a:function(a,b){a.$ti=b
return a},
kj:function(a){if(a==null)return
return a.$ti},
xE:function(a,b){return H.uY(a["$as"+H.B(b)],H.kj(a))},
aL:function(a,b,c){var t=H.xE(a,b)
return t==null?null:t[c]},
O:function(a,b){var t=H.kj(a)
return t==null?null:t[b]},
dA:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ry(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.B(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dA(t,b)
return H.GE(a,b)}return"unknown-reified-type"},
GE:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dA(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dA(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dA(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.H9(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dA(l[j],b)+(" "+H.B(j))}q+="}"}return"("+q+") => "+t},
ry:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.ca("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.O=p+", "
o=a[s]
if(o!=null)q=!1
p=t.O+=H.dA(o,c)}return q?"":"<"+t.D(0)+">"},
kk:function(a){var t,s
if(a instanceof H.eW){t=H.xB(a)
if(t!=null)return H.dA(t,null)}s=J.aR(a).constructor.builtin$cls
if(a==null)return s
return s+H.ry(a.$ti,0,null)},
uY:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dV:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kj(a)
s=J.aR(a)
if(s[b]==null)return!1
return H.xx(H.uY(s[d],t),c)},
Hu:function(a,b,c,d){if(a==null)return a
if(H.dV(a,b,c,d))return a
throw H.l(H.vf(H.nT(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.ry(c,0,null),u.mangledGlobalNames)))},
xx:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cZ(a[s],b[s]))return!1
return!0},
eO:function(a,b,c){return a.apply(b,H.xE(b,c))},
GV:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ao"||b.builtin$cls==="cP"
if(b==null)return!0
t=H.kj(a)
a=J.aR(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.uW(r.apply(a,null),b)}return H.cZ(s,b)},
cZ:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="cP")return!0
if('func' in b)return H.uW(a,b)
if('func' in a)return b.builtin$cls==="HB"||b.builtin$cls==="ao"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dA(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xx(H.uY(o,t),r)},
xw:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.cZ(t,p)||H.cZ(p,t)))return!1}return!0},
GL:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.cZ(p,o)||H.cZ(o,p)))return!1}return!0},
uW:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.cZ(t,s)||H.cZ(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xw(r,q,!1))return!1
if(!H.xw(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cZ(i,h)||H.cZ(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cZ(i,h)||H.cZ(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cZ(i,h)||H.cZ(h,i)))return!1}}return H.GL(a.named,b.named)},
HN:function(a){var t=$.uU
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
HM:function(a){return H.eu(a)},
HL:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Hh:function(a){var t,s,r,q,p,o
t=$.uU.$1(a)
s=$.rm[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rs[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xv.$2(a,t)
if(t!=null){s=$.rm[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rs[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.uX(r)
$.rm[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rs[t]=r
return r}if(p==="-"){o=H.uX(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xG(a,r)
if(p==="*")throw H.l(new P.eE(t))
if(u.leafTags[t]===true){o=H.uX(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xG(a,r)},
xG:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rB(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
uX:function(a){return J.rB(a,!1,null,!!a.$isaU)},
Hi:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rB(t,!1,null,!!t.$isaU)
else return J.rB(t,c,null,null)},
He:function(){if(!0===$.uV)return
$.uV=!0
H.Hf()},
Hf:function(){var t,s,r,q,p,o,n,m
$.rm=Object.create(null)
$.rs=Object.create(null)
H.Hd()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xH.$1(p)
if(o!=null){n=H.Hi(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
Hd:function(){var t,s,r,q,p,o,n
t=C.N()
t=H.fC(C.O,H.fC(C.P,H.fC(C.u,H.fC(C.u,H.fC(C.R,H.fC(C.Q,H.fC(C.S(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.uU=new H.rp(p)
$.xv=new H.rq(o)
$.xH=new H.rr(n)},
fC:function(a,b){return a(b)||b},
tP:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.l(new P.bK("Illegal RegExp pattern ("+String(q)+")",a,null))},
Hs:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
xL:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.ho){q=b.gdu()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.ba(H.bv(b))
throw H.l("String.replaceAll(Pattern) UNIMPLEMENTED")}},
GJ:function(a){return a},
Ht:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aU(0,a),t=new H.k_(t.a,t.b,t.c,null),s=0,r="";t.J();){q=t.d
p=q.b
o=p.index
r=r+H.B(H.xm().$1(C.c.M(a,s,o)))+H.B(c.$1(q))
s=o+p[0].length}t=r+H.B(H.xm().$1(C.c.ag(a,s)))
return t.charCodeAt(0)==0?t:t},
kV:function kV(){},
kW:function kW(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nZ:function nZ(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pg:function pg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jz:function jz(a,b){this.a=a
this.b=b},
mI:function mI(a,b,c){this.a=a
this.b=b
this.c=c},
pi:function pi(a){this.a=a},
h5:function h5(a,b){this.a=a
this.b=b},
rI:function rI(a){this.a=a},
kb:function kb(a,b){this.a=a
this.b=b},
rt:function rt(a){this.a=a},
ru:function ru(a,b){this.a=a
this.b=b},
rv:function rv(a,b,c){this.a=a
this.b=b
this.c=c},
rw:function rw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rx:function rx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eW:function eW(){},
oY:function oY(){},
ot:function ot(){},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kP:function kP(a){this.a=a},
o4:function o4(a){this.a=a},
dS:function dS(a,b){this.a=a
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
mH:function mH(a){this.a=a},
mG:function mG(a){this.a=a},
mS:function mS(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mT:function mT(a,$ti){this.a=a
this.$ti=$ti},
mU:function mU(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rp:function rp(a){this.a=a},
rq:function rq(a){this.a=a},
rr:function rr(a){this.a=a},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k9:function k9(a,b){this.a=a
this.b=b},
pO:function pO(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
qR:function qR(a,b,c){this.a=a
this.b=b
this.c=c},
qS:function qS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cy:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(P.dC("Invalid length "+H.B(a)))
return a},
xj:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dC("Invalid view offsetInBytes "+H.B(b)))},
xl:function(a){return a},
F5:function(a){return new Int8Array(H.xl(a))},
cO:function(a,b,c){H.xj(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
Gy:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aB()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.l(H.GZ(a,b,c))
return b},
fh:function fh(){},
et:function et(){},
nk:function nk(){},
jw:function jw(){},
hA:function hA(){},
hC:function hC(){},
hE:function hE(){},
hB:function hB(){},
hD:function hD(){},
hF:function hF(){},
nl:function nl(){},
nm:function nm(){},
nn:function nn(){},
no:function no(){},
np:function np(){},
nq:function nq(){},
nr:function nr(){},
jx:function jx(){},
fi:function fi(){},
H9:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
Hm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aR:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jr.prototype
return J.jq.prototype}if(typeof a=="string")return J.eo.prototype
if(a==null)return J.mE.prototype
if(typeof a=="boolean")return J.mD.prototype
if(a.constructor==Array)return J.en.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ao)return a
return J.rn(a)},
rB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rn:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.uV==null){H.He()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.l(new P.eE("Return interceptor for "+H.B(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$tT()]
if(p!=null)return p
p=H.Hh(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$tT(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
wk:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
EM:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a5(a,b)
if(s!==32&&s!==13&&!J.wk(s))break;++b}return b},
tO:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.Z(a,t)
if(s!==32&&s!==13&&!J.wk(s))break}return b},
bg:function(a){if(typeof a=="string")return J.eo.prototype
if(a==null)return a
if(a.constructor==Array)return J.en.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ao)return a
return J.rn(a)},
dk:function(a){if(a==null)return a
if(a.constructor==Array)return J.en.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ao)return a
return J.rn(a)},
dz:function(a){if(typeof a=="number")return J.ff.prototype
if(a==null)return a
if(!(a instanceof P.ao))return J.eF.prototype
return a},
ki:function(a){if(typeof a=="number")return J.ff.prototype
if(typeof a=="string")return J.eo.prototype
if(a==null)return a
if(!(a instanceof P.ao))return J.eF.prototype
return a},
da:function(a){if(typeof a=="string")return J.eo.prototype
if(a==null)return a
if(!(a instanceof P.ao))return J.eF.prototype
return a},
bp:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ao)return a
return J.rn(a)},
e9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ki(a).U(a,b)},
bc:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aR(a).S(a,b)},
uZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dz(a).as(a,b)},
cu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dz(a).aB(a,b)},
ea:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dz(a).a4(a,b)},
v_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ki(a).ar(a,b)},
i3:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xF(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bg(a).n(a,b)},
kn:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xF(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dk(a).i(a,b,c)},
xN:function(a,b){return J.dk(a).h(a,b)},
xO:function(a,b,c,d){return J.bp(a).fH(a,b,c,d)},
xP:function(a,b){return J.da(a).aU(a,b)},
dW:function(a,b){return J.bp(a).fJ(a,b)},
v0:function(a){return J.bp(a).fL(a)},
xQ:function(a,b,c){return J.dz(a).ac(a,b,c)},
xR:function(a,b){return J.ki(a).ay(a,b)},
xS:function(a,b){return J.bp(a).az(a,b)},
xT:function(a,b){return J.bg(a).ai(a,b)},
ko:function(a,b,c){return J.bg(a).dR(a,b,c)},
xU:function(a,b){return J.bp(a).fU(a,b)},
v1:function(a,b){return J.dk(a).T(a,b)},
xV:function(a,b,c,d){return J.dk(a).bV(a,b,c,d)},
kp:function(a){return J.dz(a).aj(a)},
xW:function(a,b){return J.dk(a).aa(a,b)},
v2:function(a){return J.bp(a).gdP(a)},
xX:function(a){return J.bp(a).gbo(a)},
fF:function(a){return J.bp(a).gaq(a)},
xY:function(a){return J.bp(a).gcC(a)},
dB:function(a){return J.aR(a).ga6(a)},
rJ:function(a){return J.bg(a).gX(a)},
v3:function(a){return J.bp(a).gY(a)},
cI:function(a){return J.dk(a).gV(a)},
ck:function(a){return J.bg(a).gm(a)},
rK:function(a){return J.bp(a).gK(a)},
xZ:function(a){return J.bp(a).ghG(a)},
y_:function(a){return J.bp(a).ghH(a)},
v4:function(a){return J.aR(a).gab(a)},
rL:function(a){return J.bp(a).gaI(a)},
y0:function(a,b){return J.bp(a).bD(a,b)},
y1:function(a,b){return J.bg(a).be(a,b)},
v5:function(a,b,c,d,e){return J.bp(a).br(a,b,c,d,e)},
v6:function(a,b){return J.dk(a).av(a,b)},
y2:function(a,b,c){return J.da(a).e6(a,b,c)},
v7:function(a,b){return J.bp(a).ht(a,b)},
y3:function(a,b,c,d){return J.bp(a).hD(a,b,c,d)},
kq:function(a,b,c){return J.da(a).cO(a,b,c)},
y4:function(a,b,c){return J.da(a).hF(a,b,c)},
fG:function(a,b){return J.bp(a).b5(a,b)},
v8:function(a,b){return J.bp(a).sbo(a,b)},
y5:function(a,b){return J.dk(a).cY(a,b)},
eP:function(a,b){return J.da(a).eB(a,b)},
y6:function(a,b){return J.da(a).ag(a,b)},
v9:function(a){return J.dz(a).l(a)},
y7:function(a){return J.dk(a).ao(a)},
y8:function(a,b){return J.dz(a).bA(a,b)},
cJ:function(a){return J.aR(a).D(a)},
y9:function(a){return J.da(a).hL(a)},
rM:function(a){return J.da(a).bh(a)},
ya:function(a){return J.da(a).eh(a)},
j:function j(){},
mD:function mD(){},
mE:function mE(){},
hp:function hp(){},
nN:function nN(){},
eF:function eF(){},
ep:function ep(){},
en:function en($ti){this.$ti=$ti},
tR:function tR($ti){this.$ti=$ti},
i4:function i4(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ff:function ff(){},
jr:function jr(){},
jq:function jq(){},
eo:function eo(){}},P={
G7:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.GM()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dj(new P.pQ(t),1)).observe(s,{childList:true})
return new P.pP(t,s,r)}else if(self.setImmediate!=null)return P.GN()
return P.GO()},
G8:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dj(new P.pR(a),0))},
G9:function(a){++u.globalState.f.b
self.setImmediate(H.dj(new P.pS(a),0))},
Ga:function(a){P.uD(C.p,a)},
bt:function(a,b){P.xh(null,a)
return b.gh7()},
cx:function(a,b){P.xh(a,b)},
bs:function(a,b){J.xS(b,a)},
br:function(a,b){b.cw(H.ct(a),H.cs(a))},
xh:function(a,b){var t,s,r,q
t=new P.r5(b)
s=new P.r6(b)
r=J.aR(a)
if(!!r.$isbj)a.cp(t,s)
else if(!!r.$iscl)a.c0(t,s)
else{q=new P.bj(0,$.aD,null,[null])
q.a=4
q.c=a
q.cp(t,null)}},
bu:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.aD.toString
return new P.rg(t)},
xn:function(a,b){if(H.fD(a,{func:1,args:[P.cP,P.cP]})){b.toString
return a}else{b.toString
return a}},
zv:function(a,b){var t=new P.bj(0,$.aD,null,[b])
P.wM(C.p,new P.rh(a,t))
return t},
vE:function(a,b,c){var t
if(a==null)a=new P.fj()
t=$.aD
if(t!==C.e)t.toString
t=new P.bj(0,t,null,[c])
t.d8(a,b)
return t},
zw:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bj(0,$.aD,null,[P.q])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.lZ(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.cj)(a),++l){q=a[l]
p=t.b
q.c0(new P.lY(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bj(0,$.aD,null,[null])
m.d7(C.W)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.ct(j)
n=H.cs(j)
if(t.b===0||!1)return P.vE(o,n,null)
else{t.c=o
t.d=n}}return s},
bq:function(a){return new P.kd(new P.bj(0,$.aD,null,[a]),[a])},
xk:function(a,b,c){$.aD.toString
a.al(b,c)},
Gd:function(a,b){var t=new P.bj(0,$.aD,null,[b])
t.a=4
t.c=a
return t},
x9:function(a,b){var t,s,r
b.a=1
try{a.c0(new P.qf(b),new P.qg(b))}catch(r){t=H.ct(r)
s=H.cs(r)
P.xI(new P.qh(b,t,s))}},
qe:function(a,b){var t,s,r
for(;a.gfl();)a=a.c
t=a.gcg()
s=b.c
if(t){b.c=null
r=b.bM(s)
b.a=a.a
b.c=a.c
P.fw(b,r)}else{b.a=2
b.c=a
a.dA(s)}},
fw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fF(p)
n=p.gaH()
s.toString
P.kg(null,null,s,o,n)}return}for(;b.gck()!=null;b=m){m=b.a
b.a=null
P.fw(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gdY()||b.gdX()){k=b.gfF()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fF(p)
n=p.gaH()
s.toString
P.kg(null,null,s,o,n)
return}j=$.aD
if(j==null?k!=null:j!==k)$.aD=k
else j=null
if(b.gdX())new P.qm(t,r,q,b).$0()
else if(s){if(b.gdY())new P.ql(r,b,l).$0()}else if(b.ghe())new P.qk(t,r,b).$0()
if(j!=null)$.aD=j
s=r.b
if(!!J.aR(s).$iscl){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bM(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qe(s,i)
return}}i=b.b
b=i.bL()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
GG:function(){var t,s
for(;t=$.fA,t!=null;){$.i0=null
s=t.b
$.fA=s
if(s==null)$.i_=null
t.a.$0()}},
GI:function(){$.uQ=!0
try{P.GG()}finally{$.i0=null
$.uQ=!1
if($.fA!=null)$.$get$uM().$1(P.xy())}},
xu:function(a){var t=new P.k0(a,null)
if($.fA==null){$.i_=t
$.fA=t
if(!$.uQ)$.$get$uM().$1(P.xy())}else{$.i_.b=t
$.i_=t}},
GH:function(a){var t,s,r
t=$.fA
if(t==null){P.xu(a)
$.i0=$.i_
return}s=new P.k0(a,null)
r=$.i0
if(r==null){s.b=t
$.i0=s
$.fA=s}else{s.b=r.b
r.b=s
$.i0=s
if(s.b==null)$.i_=s}},
xI:function(a){var t=$.aD
if(C.e===t){P.fB(null,null,C.e,a)
return}t.toString
P.fB(null,null,t,t.cu(a,!0))},
HH:function(a,b){return new P.qQ(null,a,!1,[b])},
xr:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.ct(o)
s=H.cs(o)
$.aD.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fF(r)
q=n
p=r.gaH()
c.$2(q,p)}}},
Gx:function(a,b,c,d){var t=a.bT(0)
if(!!J.aR(t).$iscl&&t!==$.$get$hf())t.c2(new P.r8(b,c,d))
else b.al(c,d)},
xi:function(a,b){return new P.r7(a,b)},
uP:function(a,b,c){var t=a.bT(0)
if(!!J.aR(t).$iscl&&t!==$.$get$hf())t.c2(new P.r9(b,c))
else b.aD(c)},
Gc:function(a,b,c,d,e,f,g){var t,s
t=$.aD
s=e?1:0
s=new P.hU(a,null,null,null,null,t,s,null,null,[f,g])
s.eQ(b,c,d,e,g)
s.eT(a,b,c,d,e,f,g)
return s},
Gw:function(a,b,c){$.aD.toString
a.bF(b,c)},
wM:function(a,b){var t=$.aD
if(t===C.e){t.toString
return P.uD(a,b)}return P.uD(a,t.cu(b,!0))},
uD:function(a,b){var t=C.a.am(a.a,1000)
return H.G2(t<0?0:t,b)},
kg:function(a,b,c,d,e){var t={}
t.a=d
P.GH(new P.rf(t,e))},
xo:function(a,b,c,d){var t,s
s=$.aD
if(s===c)return d.$0()
$.aD=c
t=s
try{s=d.$0()
return s}finally{$.aD=t}},
xq:function(a,b,c,d,e){var t,s
s=$.aD
if(s===c)return d.$1(e)
$.aD=c
t=s
try{s=d.$1(e)
return s}finally{$.aD=t}},
xp:function(a,b,c,d,e,f){var t,s
s=$.aD
if(s===c)return d.$2(e,f)
$.aD=c
t=s
try{s=d.$2(e,f)
return s}finally{$.aD=t}},
fB:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cu(d,!(!t||!1))
P.xu(d)},
pQ:function pQ(a){this.a=a},
pP:function pP(a,b,c){this.a=a
this.b=b
this.c=c},
pR:function pR(a){this.a=a},
pS:function pS(a){this.a=a},
r5:function r5(a){this.a=a},
r6:function r6(a){this.a=a},
rg:function rg(a){this.a=a},
cl:function cl(){},
rh:function rh(a,b){this.a=a
this.b=b},
lZ:function lZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lY:function lY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eX:function eX(){},
k1:function k1(){},
dU:function dU(a,$ti){this.a=a
this.$ti=$ti},
kd:function kd(a,$ti){this.a=a
this.$ti=$ti},
k5:function k5(a,b,c,d,e,$ti){var _=this
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
qb:function qb(a,b){this.a=a
this.b=b},
qj:function qj(a,b){this.a=a
this.b=b},
qf:function qf(a){this.a=a},
qg:function qg(a){this.a=a},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
qd:function qd(a,b){this.a=a
this.b=b},
qi:function qi(a,b){this.a=a
this.b=b},
qc:function qc(a,b,c){this.a=a
this.b=b
this.c=c},
qm:function qm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qn:function qn(a){this.a=a},
ql:function ql(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b){this.a=a
this.b=b},
dh:function dh(){},
oA:function oA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oy:function oy(a,b){this.a=a
this.b=b},
oz:function oz(a,b){this.a=a
this.b=b},
oB:function oB(a){this.a=a},
oG:function oG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oE:function oE(a,b){this.a=a
this.b=b},
oF:function oF(){},
oH:function oH(a){this.a=a},
oK:function oK(a){this.a=a},
oL:function oL(a,b){this.a=a
this.b=b},
oI:function oI(a,b){this.a=a
this.b=b},
oJ:function oJ(a){this.a=a},
oM:function oM(a,b){this.a=a
this.b=b},
oN:function oN(a,b){this.a=a
this.b=b},
oC:function oC(a,b,c){this.a=a
this.b=b
this.c=c},
oD:function oD(a){this.a=a},
ox:function ox(){},
di:function di(){},
pV:function pV(a,b,c){this.a=a
this.b=b
this.c=c},
pU:function pU(a){this.a=a},
k3:function k3(){},
q_:function q_(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
q1:function q1(b,c,a){this.b=b
this.c=c
this.a=a},
q0:function q0(){},
qC:function qC(){},
qD:function qD(a,b){this.a=a
this.b=b},
qP:function qP(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qQ:function qQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
r8:function r8(a,b,c){this.a=a
this.b=b
this.c=c},
r7:function r7(a,b){this.a=a
this.b=b},
r9:function r9(a,b){this.a=a
this.b=b},
hT:function hT(){},
hU:function hU(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
qA:function qA(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eS:function eS(a,b){this.a=a
this.b=b},
r4:function r4(){},
rf:function rf(a,b){this.a=a
this.b=b},
qG:function qG(){},
qH:function qH(a,b){this.a=a
this.b=b},
qI:function qI(a,b){this.a=a
this.b=b},
qJ:function qJ(a,b){this.a=a
this.b=b},
Ge:function(a,b){var t=a[b]
return t===a?null:t},
uO:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
uN:function(){var t=Object.create(null)
P.uO(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wl:function(a,b,c){return H.xC(a,new H.r(0,null,null,null,null,null,0,[b,c]))},
cD:function(a,b){return new H.r(0,null,null,null,null,null,0,[a,b])},
mV:function(){return new H.r(0,null,null,null,null,null,0,[null,null])},
hs:function(a){return H.xC(a,new H.r(0,null,null,null,null,null,0,[null,null]))},
hW:function(a,b){return new P.k8(0,null,null,null,null,null,0,[a,b])},
Gf:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
o:function(a,b,c,d,e){return new P.qp(0,null,null,null,null,[d,e])},
tL:function(a,b,c){var t,s
if(P.uR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i1()
s.push(a)
try{P.GF(a,t)}finally{if(0>=s.length)return H.x(s,-1)
s.pop()}s=P.wJ(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jn:function(a,b,c){var t,s,r
if(P.uR(a))return b+"..."+c
t=new P.ca(b)
s=$.$get$i1()
s.push(a)
try{r=t
r.O=P.wJ(r.gO(),a,", ")}finally{if(0>=s.length)return H.x(s,-1)
s.pop()}s=t
s.O=s.gO()+c
s=t.gO()
return s.charCodeAt(0)==0?s:s},
uR:function(a){var t,s
for(t=0;s=$.$get$i1(),t<s.length;++t)if(a===s[t])return!0
return!1},
GF:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cI(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.J())return
q=H.B(t.gP())
b.push(q)
s+=q.length+2;++r}if(!t.J()){if(r<=5)return
if(0>=b.length)return H.x(b,-1)
p=b.pop()
if(0>=b.length)return H.x(b,-1)
o=b.pop()}else{n=t.gP();++r
if(!t.J()){if(r<=4){b.push(H.B(n))
return}p=H.B(n)
if(0>=b.length)return H.x(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gP();++r
for(;t.J();n=m,m=l){l=t.gP();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.x(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.B(n)
p=H.B(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.x(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a6:function(a,b,c,d){return new P.k7(0,null,null,null,null,null,0,[d])},
tX:function(a,b){var t,s
t=P.a6(null,null,null,b)
for(s=J.cI(a);s.J();)t.h(0,s.gP())
return t},
wq:function(a){var t,s,r
t={}
if(P.uR(a))return"{...}"
s=new P.ca("")
try{$.$get$i1().push(a)
r=s
r.O=r.gO()+"{"
t.a=!0
a.aa(0,new P.n9(t,s))
t=s
t.O=t.gO()+"}"}finally{t=$.$get$i1()
if(0>=t.length)return H.x(t,-1)
t.pop()}t=s.gO()
return t.charCodeAt(0)==0?t:t},
tY:function(a,b){var t=new P.mW(null,0,0,0,[b])
t.eL(a,b)
return t},
qp:function qp(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qs:function qs(a){this.a=a},
qq:function qq(a,$ti){this.a=a
this.$ti=$ti},
qr:function qr(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
k8:function k8(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
k7:function k7(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qw:function qw(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qt:function qt(){},
fe:function fe(){},
hn:function hn(){},
js:function js(){},
hG:function hG(){},
b6:function b6(){},
qX:function qX(){},
n8:function n8(){},
hN:function hN(a,$ti){this.a=a
this.$ti=$ti},
n9:function n9(a,b){this.a=a
this.b=b},
mW:function mW(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qx:function qx(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
og:function og(){},
of:function of(){},
vb:function(a,b,c,d,e,f){if(C.d.bE(f,4)!==0)throw H.l(new P.bK("Invalid base64 padding, padded length must be multiple of four, is "+H.B(f),a,c))
if(d+e!==f)throw H.l(new P.bK("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.l(new P.bK("Invalid base64 padding, more than two '=' characters",a,b))},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
fR:function fR(){},
fT:function fT(){},
li:function li(){},
pr:function pr(a){this.a=a},
ps:function ps(a){this.a=a},
qZ:function qZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r0:function r0(a){this.a=a},
r_:function r_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G0:function(a,b,c){var t,s,r,q
if(b<0)throw H.l(P.bF(b,0,J.ck(a),null,null))
t=c==null
if(!t&&c<b)throw H.l(P.bF(c,b,J.ck(a),null,null))
s=J.cI(a)
for(r=0;r<b;++r)if(!s.J())throw H.l(P.bF(b,0,r,null,null))
q=[]
if(t)for(;s.J();)q.push(s.gP())
else for(r=b;r<c;++r){if(!s.J())throw H.l(P.bF(c,b,r,null,null))
q.push(s.gP())}return H.wB(q)},
wJ:function(a,b,c){var t=J.cI(b)
if(!t.J())return a
if(c.length===0){do a+=H.B(t.gP())
while(t.J())}else{a+=H.B(t.gP())
for(;t.J();)a=a+c+H.B(t.gP())}return a},
yR:function(a,b){return J.xR(a,b)},
yU:function(a,b){var t=new P.e_(a,b)
t.d3(a,b)
return t},
yV:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.B(t)
if(t>=10)return s+"00"+H.B(t)
return s+"000"+H.B(t)},
yW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
id:function(a){if(a>=10)return""+a
return"0"+a},
vs:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.zd(a)},
zd:function(a){var t=J.aR(a)
if(!!t.$iseW)return t.D(a)
return H.jG(a)},
dC:function(a){return new P.d_(!1,null,null,a)},
dX:function(a,b,c){return new P.d_(!0,a,b,c)},
yb:function(a){return new P.d_(!1,null,a,"Must not be null")},
wF:function(a){return new P.ey(null,null,!1,null,null,a)},
jI:function(a,b,c){return new P.ey(null,null,!0,a,b,"Value not in range")},
bF:function(a,b,c,d,e){return new P.ey(b,c,!0,a,d,"Invalid value")},
dg:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.av(a)
if(!(0>a)){if(typeof c!=="number")return H.av(c)
t=a>c}else t=!0
if(t)throw H.l(P.bF(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.av(b)
if(!(a>b)){if(typeof c!=="number")return H.av(c)
t=b>c}else t=!0
if(t)throw H.l(P.bF(b,a,c,"end",f))
return b}return c},
by:function(a,b,c,d,e){var t=e!=null?e:J.ck(b)
return new P.mi(b,t,!0,a,c,"Index out of range")},
ln:function(a){return new P.qa(a)},
df:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cI(a);s.J();)t.push(s.gP())
if(b)return t
t.fixed$length=Array
return t},
EN:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
f:function(a,b){var t=P.df(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fE:function(a){H.Hm(H.B(a))},
dK:function(a,b,c){return new H.ho(a,H.tP(a,!1,!0,!1),null,null)},
oS:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dg(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a4()
s=c<t}else s=!0
return H.wB(s?C.b.c4(a,b,c):a)}if(!!J.aR(a).$isfi)return H.Fd(a,b,P.dg(b,c,a.length,null,null,null))
return P.G0(a,b,c)},
wZ:function(){var t=H.F7()
if(t!=null)return P.x_(t,0,null)
throw H.l(new P.Z("'Uri.base' is not supported"))},
x_:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a5(a,b+4)^58)*3|C.c.a5(a,b)^100|C.c.a5(a,b+1)^97|C.c.a5(a,b+2)^116|C.c.a5(a,b+3)^97)>>>0
if(s===0)return P.wY(b>0||c<c?C.c.M(a,b,c):a,5,null).gej()
else if(s===32)return P.wY(C.c.M(a,t,c),0,null).gej()}r=H.a(new Array(8),[P.F])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xs(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.as()
if(p>=b)if(P.xs(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.U()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a4()
if(typeof l!=="number")return H.av(l)
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
j=!1}else{if(!(l<c&&l===m+2&&C.c.aC(a,"..",m)))h=l>m+2&&C.c.aC(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aC(a,"file",b)){if(o<=b){if(!C.c.aC(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.M(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aA(a,m,l,"/");++l;++k;++c}else{a=C.c.M(a,b,m)+"/"+C.c.M(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aC(a,"http",b)){if(q&&n+3===m&&C.c.aC(a,"80",n+1))if(b===0&&!0){a=C.c.aA(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.M(a,b,n)+C.c.M(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aC(a,"https",b)){if(q&&n+4===m&&C.c.aC(a,"443",n+1))if(b===0&&!0){a=C.c.aA(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.M(a,b,n)+C.c.M(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.c.M(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.qO(a,p,o,n,m,l,k,i,null)}return P.Gi(a,b,c,p,o,n,m,l,k,i)},
x1:function(a,b){return C.b.h4(a.split("&"),P.mV(),new P.po(b))},
G3:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pl(a)
s=H.cy(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.Z(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fl(C.c.M(a,p,q),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.x(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fl(C.c.M(a,p,c),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.x(r,o)
r[o]=m
return r},
x0:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pm(a)
s=new P.pn(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.Z(a,q)
if(m===58){if(q===b){++q
if(C.c.Z(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.bc(C.b.gb7(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.G3(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.at()
h=j[1]
if(typeof h!=="number")return H.av(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.at()
i=j[3]
if(typeof i!=="number")return H.av(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aR(e).S(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.x(g,f)
g[f]=0
i=f+1
if(i>=16)return H.x(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.cX()
i=C.d.aT(e,8)
if(f<0||f>=16)return H.x(g,f)
g[f]=i
i=f+1
if(i>=16)return H.x(g,i)
g[i]=e&255
f+=2}}return g},
Gi:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Gq(a,b,d)
else{if(d===b)P.hY(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.Gr(a,t,e-1):""
r=P.Gm(a,e,f,!1)
if(typeof f!=="number")return f.U()
q=f+1
if(typeof g!=="number")return H.av(g)
p=q<g?P.Go(H.fl(C.c.M(a,q,g),null,new P.ri(a,f)),j):null}else{s=""
r=null
p=null}o=P.Gn(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a4()
n=h<i?P.Gp(a,h+1,i,null):null
return new P.ke(j,s,r,p,o,n,i<c?P.Gl(a,i+1,c):null,null,null,null,null,null)},
xb:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hY:function(a,b,c){throw H.l(new P.bK(c,a,b))},
Go:function(a,b){if(a!=null&&J.bc(a,P.xb(b)))return
return a},
Gm:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.ak()
t=c-1
if(C.c.Z(a,t)!==93)P.hY(a,b,"Missing end `]` to match `[` in host")
P.x0(a,b+1,t)
return C.c.M(a,b,c).toLowerCase()}if(typeof c!=="number")return H.av(c)
s=b
for(;s<c;++s)if(C.c.Z(a,s)===58){P.x0(a,b,c)
return"["+a+"]"}return P.Gt(a,b,c)},
Gt:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.av(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.Z(a,t)
if(p===37){o=P.xg(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.ca("")
m=C.c.M(a,s,t)
l=r.O+=!q?m.toLowerCase():m
if(n){o=C.c.M(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.O=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.x(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.ca("")
if(s<t){r.O+=C.c.M(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.x(C.k,n)
n=(C.k[n]&1<<(p&15))!==0}else n=!1
if(n)P.hY(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.Z(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.ca("")
m=C.c.M(a,s,t)
r.O+=!q?m.toLowerCase():m
r.O+=P.xc(p)
t+=k
s=t}}}}if(r==null)return C.c.M(a,b,c)
if(s<c){m=C.c.M(a,s,c)
r.O+=!q?m.toLowerCase():m}n=r.O
return n.charCodeAt(0)==0?n:n},
Gq:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xe(C.c.a5(a,b)))P.hY(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a5(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.x(C.m,q)
q=(C.m[q]&1<<(r&15))!==0}else q=!1
if(!q)P.hY(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.M(a,b,c)
return P.Gj(s?a.toLowerCase():a)},
Gj:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Gr:function(a,b,c){var t=P.fz(a,b,c,C.Y,!1)
return t==null?C.c.M(a,b,c):t},
Gn:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fz(a,b,c,C.D,!1)
if(r==null)r=C.c.M(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.af(r,"/"))r="/"+r
return P.Gs(r,e,f)},
Gs:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.af(a,"/"))return P.Gu(a,!t||c)
return P.Gv(a)},
Gp:function(a,b,c,d){var t=P.fz(a,b,c,C.l,!1)
return t==null?C.c.M(a,b,c):t},
Gl:function(a,b,c){var t=P.fz(a,b,c,C.l,!1)
return t==null?C.c.M(a,b,c):t},
xg:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.Z(a,b+1)
r=C.c.Z(a,t)
q=H.ro(s)
p=H.ro(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aT(o,4)
if(t>=8)return H.x(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hH(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.M(a,b,b+3).toUpperCase()
return},
xc:function(a){var t,s,r,q,p,o,n,m
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
for(p=0;--r,r>=0;s=128){o=C.a.fB(a,6*r)&63|s
if(p>=q)return H.x(t,p)
t[p]=37
n=p+1
m=C.c.a5("0123456789ABCDEF",o>>>4)
if(n>=q)return H.x(t,n)
t[n]=m
m=p+2
n=C.c.a5("0123456789ABCDEF",o&15)
if(m>=q)return H.x(t,m)
t[m]=n
p+=3}}return P.oS(t,0,null)},
fz:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.da(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a4()
if(typeof c!=="number")return H.av(c)
if(!(r<c))break
c$0:{o=s.Z(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.x(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xg(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.x(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.hY(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.Z(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.xc(o)}}if(p==null)p=new P.ca("")
p.O+=C.c.M(a,q,r)
p.O+=H.B(m)
if(typeof l!=="number")return H.av(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a4()
if(q<c)p.O+=s.M(a,q,c)
t=p.O
return t.charCodeAt(0)==0?t:t},
xf:function(a){if(C.c.af(a,"."))return!0
return C.c.be(a,"/.")!==-1},
Gv:function(a){var t,s,r,q,p,o,n
if(!P.xf(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.cj)(s),++p){o=s[p]
if(J.bc(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.x(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bf(t,"/")},
Gu:function(a,b){var t,s,r,q,p,o
if(!P.xf(a))return!b?P.xd(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.cj)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.bc(C.b.gb7(t),"..")){if(0>=t.length)return H.x(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.x(t,0)
s=J.rJ(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.bc(C.b.gb7(t),".."))t.push("")
if(!b){if(0>=t.length)return H.x(t,0)
s=P.xd(t[0])
if(0>=t.length)return H.x(t,0)
t[0]=s}return C.b.bf(t,"/")},
xd:function(a){var t,s,r,q
t=J.bg(a)
s=t.gm(a)
if(typeof s!=="number")return s.as()
if(s>=2&&P.xe(t.Z(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.av(s)
if(!(r<s))break
q=t.Z(a,r)
if(q===58)return C.c.M(a,0,r)+"%3A"+C.c.ag(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.x(C.m,s)
s=(C.m[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Gk:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.Z(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.l(P.dC("Invalid URL encoding"))}}return t},
qY:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.av(c)
t=J.da(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.Z(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.o!==d)p=!1
else p=!0
if(p)return t.M(a,b,c)
else o=new H.kS(t.M(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.Z(a,s)
if(q>127)throw H.l(P.dC("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.l(P.dC("Truncated URI"))
o.push(P.Gk(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.ps(!1).fS(o)},
xe:function(a){var t=a|32
return 97<=t&&t<=122},
wY:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bg(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.av(o)
if(!(r<o))break
c$0:{p=s.Z(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.l(new P.bK("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.l(new P.bK("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.av(o)
if(!(r<o))break
p=s.Z(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gb7(t)
if(p!==44||r!==m+7||!s.aC(a,"base64",m+1))throw H.l(new P.bK("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hq(0,a,o,s.gm(a))
else{l=P.fz(a,o,s.gm(a),C.l,!0)
if(l!=null)a=s.aA(a,o,s.gm(a),l)}return new P.pk(a,t,c)},
GC:function(){var t,s,r,q,p
t=P.EN(22,new P.rc(),!0,P.d8)
s=new P.rb(t)
r=new P.rd()
q=new P.re()
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
xs:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xt()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.x(t,d)
r=t[d]
q=C.c.a5(a,s)^96
p=J.i3(r,q>95?31:q)
if(typeof p!=="number")return p.aG()
d=p&31
o=C.d.aT(p,5)
if(o>=8)return H.x(e,o)
e[o]=s}return d},
d9:function d9(){},
bG:function bG(){},
e_:function e_(a,b){this.a=a
this.b=b},
T:function T(){},
dF:function dF(a){this.a=a},
lf:function lf(){},
lg:function lg(){},
ee:function ee(){},
fj:function fj(){},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ey:function ey(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mi:function mi(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a){this.a=a},
eE:function eE(a){this.a=a},
dO:function dO(a){this.a=a},
bN:function bN(a){this.a=a},
nA:function nA(){},
jQ:function jQ(){},
l7:function l7(a){this.a=a},
qa:function qa(a){this.a=a},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
lo:function lo(a,bI,$ti){this.a=a
this.bI=bI
this.$ti=$ti},
F:function F(){},
p:function p(){},
jp:function jp(){},
q:function q(){},
bo:function bo(){},
cP:function cP(){},
dl:function dl(){},
ao:function ao(){},
du:function du(){},
ez:function ez(){},
dN:function dN(){},
C:function C(){},
ca:function ca(O){this.O=O},
eG:function eG(){},
po:function po(a){this.a=a},
pl:function pl(a){this.a=a},
pm:function pm(a){this.a=a},
pn:function pn(a,b){this.a=a
this.b=b},
ke:function ke(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
ri:function ri(a,b){this.a=a
this.b=b},
pk:function pk(a,b,c){this.a=a
this.b=b
this.c=c},
rc:function rc(){},
rb:function rb(a){this.a=a},
rd:function rd(){},
re:function re(){},
qO:function qO(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pZ:function pZ(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
xz:function(a){var t,s,r,q,p
if(a==null)return
t=P.mV()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.cj)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
GW:function(a){var t,s
t=new P.bj(0,$.aD,null,[null])
s=new P.dU(t,[null])
a.then(H.dj(new P.rk(s),1))["catch"](H.dj(new P.rl(s),1))
return t},
rW:function(){var t=$.vp
if(t==null){t=J.ko(window.navigator.userAgent,"Opera",0)
$.vp=t}return t},
vr:function(){var t=$.vq
if(t==null){t=P.rW()!==!0&&J.ko(window.navigator.userAgent,"WebKit",0)
$.vq=t}return t},
yX:function(){var t,s
t=$.vm
if(t!=null)return t
s=$.vn
if(s==null){s=J.ko(window.navigator.userAgent,"Firefox",0)
$.vn=s}if(s)t="-moz-"
else{s=$.vo
if(s==null){s=P.rW()!==!0&&J.ko(window.navigator.userAgent,"Trident/",0)
$.vo=s}if(s)t="-ms-"
else t=P.rW()===!0?"-o-":"-webkit-"}$.vm=t
return t},
qT:function qT(){},
qV:function qV(a,b){this.a=a
this.b=b},
pM:function pM(){},
pN:function pN(a,b){this.a=a
this.b=b},
qU:function qU(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
rk:function rk(a){this.a=a},
rl:function rl(a){this.a=a},
kY:function kY(){},
kZ:function kZ(a){this.a=a},
GA:function(a){var t,s,r
t=new P.bj(0,$.aD,null,[null])
s=new P.kd(t,[null])
a.toString
r=W.U
W.eL(a,"success",new P.ra(a,s),!1,r)
W.eL(a,"error",s.gdQ(),!1,r)
return t},
l9:function l9(){},
ra:function ra(a,b){this.a=a
this.b=b},
mh:function mh(){},
nx:function nx(){},
hJ:function hJ(){},
pe:function pe(){},
Gh:function(a){var t=new P.qE(0,0)
t.eU(a)
return t},
qv:function qv(){},
qE:function qE(a,b){this.a=a
this.b=b},
qF:function qF(){},
bU:function bU(){},
kr:function kr(){},
eb:function eb(){},
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
lz:function lz(){},
lA:function lA(){},
lB:function lB(){},
lC:function lC(){},
lD:function lD(){},
lE:function lE(){},
lS:function lS(){},
cn:function cn(){},
mf:function mf(){},
d4:function d4(){},
mO:function mO(){},
iM:function iM(){},
j5:function j5(){},
na:function na(){},
nb:function nb(){},
d5:function d5(){},
nu:function nu(){},
iN:function iN(){},
j6:function j6(){},
nK:function nK(){},
nP:function nP(){},
ob:function ob(){},
oR:function oR(){},
iO:function iO(){},
j7:function j7(){},
kx:function kx(a){this.a=a},
cb:function cb(){},
oU:function oU(){},
oW:function oW(){},
eD:function eD(){},
p3:function p3(){},
d7:function d7(){},
pf:function pf(){},
iP:function iP(){},
j8:function j8(){},
pq:function pq(){},
pu:function pu(){},
pv:function pv(){},
hV:function hV(){},
qK:function qK(){},
qL:function qL(){},
qM:function qM(){},
bh:function bh(){},
d8:function d8(){},
fK:function fK(){},
eT:function eT(){},
fL:function fL(){},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
bC:function bC(){},
dY:function dY(){},
kX:function kX(){},
kt:function kt(){},
o0:function o0(){},
r1:function r1(){},
jP:function jP(){},
iQ:function iQ(){},
j9:function j9(){}},W={
yI:function(a){if(a!=null)return new Audio(a)
return new Audio()},
yJ:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
yT:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Gb:function(a){var t=new W.pX(a,null)
t.eR(a)
return t},
vF:function(a,b,c){return W.vG(a,null,null,b,null,null,null,c).b0(new W.m9())},
vG:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e2
s=new P.bj(0,$.aD,null,[t])
r=new P.dU(s,[t])
q=new XMLHttpRequest()
C.L.hs(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.HG
W.eL(q,"load",new W.ma(r,q),!1,t)
W.eL(q,"error",r.gdQ(),!1,t)
q.send()
return s},
vH:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
xa:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eL:function(a,b,c,d,e){var t=W.GK(new W.q9(c))
t=new W.q8(0,a,b,t,!1,[e])
t.eS(a,b,c,!1,e)
return t},
GB:function(a){var t
if(!!J.aR(a).$ised)return a
t=new P.jZ([],[],!1)
t.c=!0
return t.b2(a)},
GK:function(a){var t=$.aD
if(t===C.e)return a
return t.fN(a,!0)},
aC:function aC(){},
eQ:function eQ(){},
ku:function ku(){},
eU:function eU(){},
cK:function cK(){},
kB:function kB(){},
h_:function h_(){},
h2:function h2(){},
kF:function kF(){},
eV:function eV(){},
kJ:function kJ(){},
fQ:function fQ(){},
ec:function ec(){},
kU:function kU(){},
i9:function i9(){},
fU:function fU(){},
l_:function l_(){},
l0:function l0(){},
fV:function fV(){},
fW:function fW(){},
l1:function l1(){},
bJ:function bJ(){},
eY:function eY(){},
iE:function iE(){},
pX:function pX(a,b){this.a=a
this.b=b},
jA:function jA(){},
pY:function pY(){},
ib:function ib(){},
l2:function l2(){},
l3:function l3(){},
l8:function l8(){},
eZ:function eZ(){},
ic:function ic(){},
ed:function ed(){},
ie:function ie(){},
ig:function ig(){},
lb:function lb(){},
ih:function ih(){},
ii:function ii(){},
iF:function iF(){},
iZ:function iZ(){},
ij:function ij(){},
ik:function ik(){},
k4:function k4(a,$ti){this.a=a
this.$ti=$ti},
dp:function dp(){},
lh:function lh(){},
fY:function fY(){},
fZ:function fZ(){},
U:function U(){},
aV:function aV(){},
lO:function lO(){},
cd:function cd(){},
f5:function f5(){},
iG:function iG(){},
j_:function j_(){},
lP:function lP(){},
lQ:function lQ(){},
lR:function lR(){},
lU:function lU(){},
lV:function lV(){},
iA:function iA(){},
cm:function cm(){},
m6:function m6(){},
f7:function f7(){},
iH:function iH(){},
j0:function j0(){},
iC:function iC(){},
e2:function e2(){},
m9:function m9(){},
ma:function ma(a,b){this.a=a
this.b=b},
hg:function hg(){},
me:function me(){},
hh:function hh(){},
f9:function f9(){},
mj:function mj(){},
mL:function mL(){},
hq:function hq(){},
hr:function hr(){},
n2:function n2(){},
n7:function n7(){},
hy:function hy(){},
ju:function ju(){},
nd:function nd(){},
ne:function ne(){},
hz:function hz(){},
co:function co(){},
jv:function jv(){},
iR:function iR(){},
ja:function ja(){},
ns:function ns(){},
nt:function nt(){},
aQ:function aQ(){},
jy:function jy(){},
iS:function iS(){},
jb:function jb(){},
nw:function nw(){},
nB:function nB(){},
nF:function nF(){},
nH:function nH(){},
e4:function e4(){},
nM:function nM(){},
cf:function cf(){},
jF:function jF(){},
iT:function iT(){},
jc:function jc(){},
nS:function nS(){},
jJ:function jJ(){},
fp:function fp(){},
jL:function jL(){},
oe:function oe(){},
oh:function oh(){},
oi:function oi(){},
oj:function oj(){},
cp:function cp(){},
jN:function jN(){},
h0:function h0(){},
h3:function h3(){},
hK:function hK(){},
cq:function cq(){},
jO:function jO(){},
iU:function iU(){},
jd:function jd(){},
fq:function fq(){},
op:function op(){},
ch:function ch(){},
oq:function oq(){},
or:function or(){},
ow:function ow(){},
ci:function ci(){},
e6:function e6(){},
p_:function p_(){},
p1:function p1(){},
cR:function cR(){},
cG:function cG(){},
p4:function p4(){},
iV:function iV(){},
je:function je(){},
p5:function p5(){},
h1:function h1(){},
h4:function h4(){},
p9:function p9(){},
cr:function cr(){},
jS:function jS(){},
iW:function iW(){},
jf:function jf(){},
ft:function ft(){},
jT:function jT(){},
e7:function e7(){},
pp:function pp(){},
pt:function pt(){},
fu:function fu(){},
jU:function jU(){},
py:function py(){},
jW:function jW(){},
pF:function pF(){},
eI:function eI(){},
fv:function fv(){},
pW:function pW(){},
hR:function hR(){},
iX:function iX(){},
jg:function jg(){},
k2:function k2(){},
iY:function iY(){},
jh:function jh(){},
q2:function q2(){},
q3:function q3(){},
k6:function k6(){},
iI:function iI(){},
j1:function j1(){},
qo:function qo(){},
hX:function hX(){},
iJ:function iJ(){},
j2:function j2(){},
qN:function qN(){},
ka:function ka(){},
iK:function iK(){},
j3:function j3(){},
kc:function kc(){},
iL:function iL(){},
j4:function j4(){},
r2:function r2(){},
r3:function r3(){},
q4:function q4(a){this.a=a},
q7:function q7(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
hS:function hS(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
q8:function q8(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
q9:function q9(a){this.a=a},
bx:function bx(){},
lT:function lT(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qW:function qW(){}},T={
tj:function(a,b,c,d){var t
H.Hu(a,"$isq",[P.F],"$asq")
t=new T.hi(a,null,d,b,null)
t.eK(a,b,c,d)
return t},
wt:function(a,b){return new T.nC(0,a,new Uint8Array(H.cy(b==null?32768:b)))},
G5:function(a){var t=new T.pI(-1,0,0,0,0,null,null,"",[])
t.eO(a)
return t},
G6:function(a,b){var t=new T.pJ(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eP(a,b)
return t},
f8:function(a){var t=new T.mb(null,0,2147483647)
t.eJ(a)
return t},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
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
hi:function hi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nC:function nC(a,b,c){this.a=a
this.b=b
this.c=c},
pI:function pI(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pJ:function pJ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
pK:function pK(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
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
pH:function pH(a){this.a=a},
mb:function mb(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kI:function kI(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
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
_.x2=x2},
kL:function kL(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
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
_.x2=x2},
la:function la(){},
m3:function m3(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
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
_.x2=x2},
FU:function(){var t=$.$get$jK()
t=t.gb9(t)
return new H.e8(t,new T.o5(),[H.aL(t,"p",0)])},
Fu:function(a,b,c,d,e){var t,s
t=[P.C]
s=H.a([],t)
t=new T.fo("Glitch",0.01,0.01,0.01,s,0.5,a,new H.r(0,null,null,null,null,null,0,[X.G,P.T]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.E(null,null,A.X),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.I]),H.a([],[A.fO]),1)
t.a1(a,b,c,d,e)
return t},
o5:function o5(){},
fo:function fo(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
c3:function c3(a,b){this.a=a
this.b=b},
z0:function(a,b,c,d){var t,s,r,q
t=new B.dn(new P.ca(""),0,0)
t.ah(a,8)
c.toString
s=H.cO(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ah(s[q],8)
return t.b1(b)},
z_:function(a,b,c,d){var t,s,r,q,p
t=H.cy(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dW(a,b)
for(q=0;q<c;++q){p=r.a8(8)
if(q>=t)return H.x(s,q)
s[q]=p}return s},
yZ:function(a,b,c,d){var t,s,r,q,p
t=new B.dn(new P.ca(""),0,0)
t.ah(a,8)
s=d.gcH()
r=C.f.aj(Math.log(H.kh(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cO(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ah(q[p],r)
return t.b1(b)},
yY:function(a,b,c,d){var t,s,r,q,p,o
t=H.cy(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dW(a,b)
for(o=0;o<c;++o){r=p.a8(q)
if(o>=t)return H.x(s,o)
s[o]=r}return s}},S={ks:function ks(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},kQ:function kQ(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},bH:function bH(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},i8:function i8(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},m8:function m8(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mM:function mM(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},n5:function n5(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},od:function od(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},fk:function fk(){},uE:function uE(){},uF:function uF(){},uG:function uG(){},t1:function t1(){},t4:function t4(){},rT:function rT(){},uo:function uo(){},uI:function uI(){},uJ:function uJ(){},kO:function kO(){},ue:function ue(){},u9:function u9(){},mR:function mR(){},rX:function rX(){},rO:function rO(){},l5:function l5(){},tW:function tW(){},l6:function l6(){},nG:function nG(){},uv:function uv(){},us:function us(){},uw:function uw(){},rN:function rN(){},m0:function m0(){},kM:function kM(){},rS:function rS(){},rR:function rR(){},uf:function uf(){},ux:function ux(){},ug:function ug(){},t3:function t3(){},t2:function t2(){},uu:function uu(){},ut:function ut(){},p6:function p6(){},uz:function uz(){},rU:function rU(){},rV:function rV(){},uH:function uH(){},hx:function hx(){},u1:function u1(){},u2:function u2(){},u3:function u3(){},u4:function u4(){},up:function up(){},uq:function uq(){},ur:function ur(){},u0:function u0(){},u6:function u6(){},u7:function u7(){},tg:function tg(){},th:function th(){},ti:function ti(){},u8:function u8(){},u5:function u5(){},rP:function rP(){},uB:function uB(){},uC:function uC(){},uA:function uA(){}},K={bV:function bV(a,b){this.a=a
this.b=b},mP:function mP(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},o8:function o8(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c}},L={
yH:function(){var t=$.$get$i5()
t=t.gb9(t)
return new H.e8(t,new L.kv(),[H.aL(t,"p",0)])},
yc:function(a,b,c,d,e){var t,s,r
t=P.C
s=A.dZ
r=P.F
r=new L.a9(P.o(null,null,null,t,s),P.o(null,null,null,r,s),P.o(null,null,null,t,r),P.o(null,null,null,r,t))
r.j(0,$.aa,L.d("#FF9B00"),!0)
r.j(0,$.ac,L.d("#FF9B00"),!0)
r.j(0,$.ab,L.d("#FF8700"),!0)
r.j(0,$.al,L.d("#7F7F7F"),!0)
r.j(0,$.ak,L.d("#727272"),!0)
r.j(0,$.ae,L.d("#A3A3A3"),!0)
r.j(0,$.af,L.d("#999999"),!0)
r.j(0,$.ad,L.d("#898989"),!0)
r.j(0,$.aj,L.d("#EFEFEF"),!0)
r.j(0,$.ai,L.d("#DBDBDB"),!0)
r.j(0,$.ah,L.d("#C6C6C6"),!0)
r.j(0,$.ag,L.d("#ADADAD"),!0)
s=[t]
t=new L.eR(0.01,0.01,0.01,0.5,a,new H.r(0,null,null,null,null,null,0,[X.G,P.T]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.I]),H.a([],[A.fO]),Q.E(null,null,A.X))
t.W(a,b,c,d,e)
return t},
d:function(a){if(C.c.af(a,"#"))return A.vi(C.c.ag(a,1))
else return A.vi(a)},
kv:function kv(){},
eR:function eR(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kG:function kG(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
oa:function oa(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
oX:function oX(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2}},M={kw:function kw(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fP:function fP(a,b){this.a=a
this.b=b},l4:function l4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},h6:function h6(){},bB:function bB(a,b){this.a=a
this.b=b},os:function os(a){this.a=a},pB:function pB(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},U={kA:function kA(){},n4:function n4(a){this.a=a},nz:function nz(a){this.a=a},oO:function oO(){},oP:function oP(a){this.a=a},oQ:function oQ(a){this.a=a},ld:function ld(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,dU,dV,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.a7=a7
_.dU=dU
_.dV=dV
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},lF:function lF(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},n6:function n6(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
this.a=a},au:function au(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},p7:function p7(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
G4:function(a){if(J.da(a).af(a," "))return C.c.ag(a,1)
return a},
pC:function pC(a){this.a=a},
pD:function pD(a,b){this.a=a
this.b=b},
pE:function pE(a,b){this.a=a
this.b=b}},O={kC:function kC(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},c8:function c8(){},dm:function dm(){},kH:function kH(a){this.a=a},eC:function eC(){},il:function il(){},
rz:function(){var t=0,s=P.bq(),r
var $async$rz=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:$.H2=!0
A.kl()
W.vF(C.c.ar("../",N.ud())+"navbar.txt",null,null).b0(O.Hj())
W.eL(window,"error",new O.rA(),!1,W.U)
t=2
return P.cx(A.kl(),$async$rz)
case 2:r=document.querySelector("#story")
O.H1(r)
O.H_(r)
O.H0(r)
return P.bs(null,s)}})
return P.bt($async$rz,s)},
H1:function(a){var t,s,r,q,p,o,n,m,l
for(t=B.zM(),s=J.cI(t.a),t=new H.eH(s,t.b,[H.O(t,0)]),r=J.bp(a);t.J();){q=s.gP()
p=J.rK(q)
for(o=q.gb_(),o=o.gbg(o),o=o.gV(o),n="";o.J();){m=o.gP()
n+="Weight: "+H.B(q.gb_().n(0,m))+", Contents: "+m.aQ()}l="<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.B(p)+"</div> <div class = 'themes'>"+n+"</div> </div>"
r.br(a,"beforeend",l,C.h,null)}},
H_:function(a){var t,s,r,q,p,o,n,m,l
for(t=L.yH(),s=J.cI(t.a),t=new H.eH(s,t.b,[H.O(t,0)]),r=J.bp(a);t.J();){q=s.gP()
p=J.rK(q)
for(o=q.gb_(),o=o.gbg(o),o=o.gV(o),n="";o.J();){m=o.gP()
n+="Weight: "+H.B(q.gb_().n(0,m))+", Contents: "+m.aQ()}l="<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.B(p)+"</div> <div class = 'themes'>"+n+"</div> </div>"
r.br(a,"beforeend",l,C.h,null)}},
H0:function(a){var t,s,r,q,p,o,n,m,l
for(t=T.FU(),s=J.cI(t.a),t=new H.eH(s,t.b,[H.O(t,0)]),r=J.bp(a);t.J();){q=s.gP()
p=J.rK(q)
for(o=q.gb_(),o=o.gbg(o),o=o.gV(o),n="";o.J();){m=o.gP()
n+="Weight: "+H.B(q.gb_().n(0,m))+", Contents: "+m.aQ()}l="<div class = 'themeCategory'> <div class = 'themeHeader'>"+H.B(p)+"</div> <div class = 'themes'>"+n+"</div> </div>"
r.br(a,"beforeend",l,C.h,null)}},
rA:function rA(){},
Hl:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.ud()
a=J.y4(a,P.dK("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.rD(t))
s=document
J.v5(s.querySelector("#navbar"),"beforeend",a,C.h,null)
if(J.bc(O.Ha("seerOfVoid",null),"true"))P.zv(new O.rE(),P.cP)
r=new P.e_(Date.now(),!1)
if(H.uj(r)===4&&H.ui(r)===1)J.v2(s.querySelector("body")).h(0,"voidbody")
q=H.uj(r)
p=H.ui(r)
o=C.a.D(H.ww(r))
n=C.a.D(q)
m=C.a.D(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.jH(null,null)
k.cW(H.fl(l,null,null))
k.hp()
if($.FV||k.a.cG()>0.99)H.i2(s.querySelector("#today"),"$iseQ").href=C.c.ar("../",t)+"dead_index.html?seed="+l
else H.i2(s.querySelector("#today"),"$iseQ").href=C.c.ar("../",t)+"index2.html?seed="+l},
Ha:function(a,b){var t,s,r,q
t=P.wZ().gcM().n(0,a)
if(t!=null)t=P.qY(t,0,J.ck(t),C.o,!1)
if(t!=null)return t
s=$.xJ
if(s.length!==0){r=J.y6(window.location.href,J.y1(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.x_(H.xL(s,q,"")+"?"+$.xJ,0,null).gcM().n(0,a)}return},
Hw:function(){var t,s,r,q
t=document
J.v2(t.querySelector("body")).h(0,"voidbody")
s=new W.k4(t.querySelectorAll(".void"),[null])
for(t=new H.er(s,s.gm(s),0,null,[null]);t.J();){r=t.d
q=J.xX(J.rL(r))
if(q==="none"||q.length===0)O.Hq(r)
else O.Hc(r)}},
Hq:function(a){var t,s
if(a==null)return
t=J.bp(a)
s=t.gaI(a)
J.v8(s,!!t.$ishK?"inline":"block")},
Hc:function(a){if(a==null)return
J.v8(J.rL(a),"none")},
Hr:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fE("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.eP(s,",")
if(!J.xT(r,a))window.localStorage.setItem(t,H.B(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.ct(q)
P.fE("Saving isn't possible....you don't have local storage")}},
rD:function rD(a){this.a=a},
rE:function rE(){},
rC:function rC(){},
cV:function cV(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={p2:function p2(a){this.a=a},nX:function nX(a){this.a=a},kN:function kN(a){this.a=a},m1:function m1(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},m2:function m2(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nv:function nv(b,a){this.b=b
this.a=a},dM:function dM(a,b){this.a=a
this.b=b},aq:function aq(a,b){this.a=a
this.b=b},d0:function d0(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},c1:function c1(c,d,e,f,a,b){var _=this
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
_.b=b},ia:function ia(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bD:function bD(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cX:function cX(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kR:function kR(c,a,b){this.c=c
this.a=a
this.b=b},bw:function bw(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jC:function jC(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iz:function iz(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jE:function jE(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},o7:function o7(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},o9:function o9(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ok:function ok(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},dL:function dL(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nj:function(){var t=0,s=P.bq(),r,q
var $async$nj=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:P.fE("loading big bads")
r=$
q=J
t=2
return P.cx(A.es("BigBadLists/bigBads.txt",!1,!1,null),$async$nj)
case 2:r.ws=q.eP(b,"\n")
return P.bs(null,s)}})
return P.bt($async$nj,s)},
GT:function(a){var t,s,r,q,p,o
t=J.eP(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.cj)(t),++q){p=t[q]
o=J.bg(p)
r+=" "+(J.y9(o.n(p,0))+o.ag(p,1))}return r}},A={kT:function kT(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
i:function(a,b,c,d,e){var t=new A.X(c,e,null,a,!1,P.a6(null,null,null,G.V),0,3)
t.N(a,b,c,!1,e)
return t},
X:function X(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mC:function mC(){},
mB:function mB(){},
ng:function ng(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},
oo:function oo(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},
nR:function nR(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},
om:function om(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},
pd:function pd(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
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
_.x2=x2},
nY:function nY(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},
m_:function m_(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},
fO:function fO(){},
fS:function(a,b,c,d){var t=new A.dZ(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eI(a,b,c,d)
return t},
vh:function(a,b,c,d){var t=A.fS(0,0,0,255)
t.b=C.a.ac(C.d.aj(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ac(C.d.aj(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ac(C.d.aj(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ac(C.d.aj(d*255),0,255)
return t},
yP:function(a,b){if(b){if(typeof a!=="number")return a.aG()
return A.fS((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aG()
return A.fS((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
vi:function(a){return A.yP(H.fl(a,16,new A.rj()),a.length>=8)},
dZ:function dZ(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
rj:function rj(){},
wp:function(){if($.wn)return
$.wn=!0
Z.zm()},
es:function(a,b,c,d){var t=0,s=P.bq(),r,q,p,o,n
var $async$es=P.bu(function(e,f){if(e===1)return P.br(f,s)
while(true)switch(t){case 0:A.wp()
t=$.$get$cU().a_(0,a)?3:5
break
case 3:q=$.$get$cU().n(0,a)
p=J.aR(q)
if(!!p.$isdL){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cr(q)
t=1
break}}else throw H.l("Requested resource ("+a+") is an unexpected type: "+H.B(J.v4(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.u_==null?8:9
break
case 8:t=10
return P.cx(A.n1(),$async$es)
case 10:case 9:n=$.u_.en(a)
t=n!=null?11:12
break
case 11:t=13
return P.cx(A.mX(n),$async$es)
case 13:if(!$.$get$cU().a_(0,a))$.$get$cU().i(0,a,new Y.dL(a,null,H.a([],[[P.eX,,]]),[null]))
r=$.$get$cU().n(0,a).b
t=1
break
case 12:case 7:r=A.EP(a,!1,d)
t=1
break
case 4:case 1:return P.bs(r,s)}})
return P.bt($async$es,s)},
n1:function(){var t=0,s=P.bq(),r
var $async$n1=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cx(A.es("manifest/manifest.txt",!1,!0,$.vB),$async$n1)
case 2:r.u_=b
return P.bs(null,s)}})
return P.bt($async$n1,s)},
EO:function(a){if(!$.$get$cU().a_(0,a))$.$get$cU().i(0,a,new Y.dL(a,null,H.a([],[[P.eX,,]]),[null]))
return $.$get$cU().n(0,a)},
EP:function(a,b,c){var t
if($.$get$cU().a_(0,a))throw H.l("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vA(C.b.gb7(a.split("."))).a
t=A.EO(a)
c.aZ(A.wm(a,!1)).b0(new A.n_(t))
return t.cr(0)},
mX:function(a){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mX=P.bu(function(b,a0){if(b===1)return P.br(a0,s)
while(true)switch(t){case 0:t=3
return P.cx(A.es(a+".bundle",!1,!0,null),$async$mX)
case 3:q=a0
p=C.c.M(a,0,C.c.e3(a,$.$get$wo()))
o=P.cP
n=new P.dU(new P.bj(0,$.aD,null,[o]),[o])
m=H.a([],[P.cl])
for(o=J.xY(q),l=o.length,k=[[P.eX,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.cj)(o),++i){h=o[i]
g=J.bp(h)
f=Z.vA(C.b.gb7(J.eP(g.gK(h),"."))).a
e=p+"/"+H.B(g.gK(h))
if($.$get$cU().a_(0,e)){m.push(A.es(e,!1,!1,null))
continue}d=H.i2(g.gbd(h),"$isd8")
if(!$.$get$cU().a_(0,e))$.$get$cU().i(0,e,new Y.dL(e,null,H.a([],k),j))
c=$.$get$cU().n(0,e)
m.push(c.cr(0))
f.b6(d.buffer).b0(new A.mY(f,c))}P.zw(m,null,!1).b0(new A.mZ(n))
r=n.a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$mX,s)},
ht:function(a,b){var t=0,s=P.bq(),r,q,p,o,n
var $async$ht=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:if($.$get$tZ().a_(0,a)){r=$.$get$tZ().n(0,a)
t=1
break}q=W.fp
p=new P.bj(0,$.aD,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.eL(n,"load",new A.n0(new P.dU(p,[q]),n),!1,W.U)
n.src=A.wm(a,!1)
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$ht,s)},
wm:function(a,b){if(C.c.af(a,"/")){a=C.c.ag(a,1)
b=!0}else b=!1
if(b)return H.B(window.location.protocol)+"//"+H.B(window.location.host)+"/"+a
return C.c.ar("../",N.ud())+a},
n_:function n_(a){this.a=a},
mY:function mY(a,b){this.a=a
this.b=b},
mZ:function mZ(a){this.a=a},
n0:function n0(a,b){this.a=a
this.b=b},
nE:function nE(){},
jB:function jB(){},
jH:function jH(a,b){this.a=a
this.b=b},
kl:function(){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$kl=P.bu(function(a0,a1){if(a0===1)return P.br(a1,s)
while(true)switch(t){case 0:if($.xA){t=1
break}$.xA=!0
D.G_()
q=P.C
p=[q]
o=H.a(["metal"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$c().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.an
H.a([],p)
o=new G.bI(n,o,0.6)
$.$get$c().h(0,o)
$.vS=o
o=H.a(["ceramic"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.bQ=o
o=H.a(["bone"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,0.2)
$.$get$c().h(0,o)
$.b9=o
o=H.a(["wood"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.Y=o
o=H.a(["plastic"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.aN=o
o=H.a(["rubber"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.c2=o
o=H.a(["paper"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.N=o
o=H.a(["cloth","fabric"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.Q=o
o=H.a(["glass"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.b3=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.bW=o
o=H.a(["flesh","meat","muscle"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.be=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.J
H.a([],p)
o=new G.bI(n,o,3.1)
$.$get$c().h(0,o)
$.bl=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.ce=o
o=H.a(["plant","leaf","vine"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.b5=o
o=H.a(["feathery"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.bz=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.K
H.a([],p)
o=new G.bI(n,o,0.1)
$.$get$c().h(0,o)
$.bS=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.K
H.a([],p)
o=new G.bI(n,o,-13)
$.$get$c().h(0,o)
$.bR=o
o=H.a(["stone","rock","concrete"],p)
n=$.w
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$c().h(0,o)
$.aG=o
o=H.a(["legendary"],p)
n=$.mA
H.a([],p)
o=new G.bI(n,o,13)
$.$get$c().h(0,o)
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.mA
H.a([],p)
o=new G.bI(n,o,40.37)
$.$get$c().h(0,o)
$.Ev=o
o=$.K
H.a([],p)
o=new G.aY(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.aH=o
o=$.tK
H.a([],p)
o=new G.aY(o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.b_=o
o=$.tK
H.a([],p)
o=new G.aY(o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.az=o
o=$.K
H.a([],p)
o=new G.aY(o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bk=o
o=$.J
H.a([],p)
o=new G.aY(o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.bX=o
o=$.K
H.a([],p)
o=new G.aY(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.b4=o
o=$.K
H.a([],p)
o=new G.aY(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bE=o
o=$.K
H.a([],p)
o=new G.aY(o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aM=o
o=$.J
H.a([],p)
o=new G.aY(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aZ=o
o=$.t
H.a([],p)
o=new G.aY(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bn=o
o=$.t
H.a([],p)
o=new G.aY(o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a2=o
o=$.t
H.a([],p)
o=new G.aY(o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.bf=o
o=$.K
H.a([],p)
o=new G.aY(o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bb=o
o=$.K
H.a([],p)
o=new G.aY(o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.aE=o
o=$.K
H.a([],p)
o=new G.aY(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.ar=o
o=$.K
H.a([],p)
o=new G.aY(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.ay=o
o=$.K
H.a([],p)
o=new G.aY(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.a0=o
o=$.J
H.a([],p)
o=new G.aY(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.aA=o
o=$.K
H.a([],p)
o=new G.aY(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aO=o
o=$.K
H.a([],p)
o=new G.aY(o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.b8=o
o=$.K
H.a([],p)
o=new G.aY(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bm=o
o=$.K
H.a([],p)
o=new G.aY(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a3=o
o=$.mA
H.a([],p)
o=new G.aY(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.H=o
o=$.mA
H.a([],p)
o=new G.aY(o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.P=o
o=$.K
H.a([],p)
o=new G.aY(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.aJ=o
o=$.t
H.a([],p)
o=new G.aY(o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.b0=o
o=$.K
H.a([],p)
o=new G.aY(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aK=o
o=$.K
H.a([],p)
o=new G.aY(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b7=o
o=$.K
H.a([],p)
o=new G.aY(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bL=o
o=$.K
H.a([],p)
o=new G.aY(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bi=o
o=$.K
H.a([],p)
o=new G.aY(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.c9=o
o=$.K
H.a([],p)
o=new G.aY(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.aF=o
o=$.K
H.a([],p)
o=new G.aY(o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.am=o
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
$.aw=o
o=$.K
H.a([],p)
o=new G.aY(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.aW=o
o=H.a(["perfectly generic"],p)
n=$.K
H.a([],p)
o=new G.as(n,o,0.1)
$.$get$c().h(0,o)
$.fc=o
o=H.a(["a sword"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.em=o
o=H.a(["a hammer"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tu=o
o=H.a(["a rifle"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tF=o
o=H.a(["a pistol"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tB=o
o=H.a(["a blade"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.vL=o
o=H.a(["a dagger"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tq=o
o=H.a(["a santa"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.hl=o
o=H.a(["a fist"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.vU=o
o=H.a(["claws"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.mq=o
o=H.a(["a grenade"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.mt=o
o=H.a(["a freaking safe"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.w6=o
o=H.a(["a ball"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.el=o
o=H.a(["a trident"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.wf=o
o=H.a(["a card"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.mp=o
o=H.a(["a frying pan"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.ts=o
o=H.a(["a pillow"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.e3=o
o=H.a(["a machinegun"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.ty=o
o=H.a(["a shuriken"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.wa=o
o=H.a(["a sling"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.wd=o
o=H.a(["a yoyo"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.wh=o
o=H.a(["a cane"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.vN=o
o=H.a(["a shield"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.fd=o
o=H.a(["a lance"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.w2=o
o=H.a(["a ax"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tl=o
o=H.a(["a sign"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.w5=o
o=H.a(["a book"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.aI=o
o=H.a(["a broom"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.jj=o
o=H.a(["a club"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.jk=o
o=H.a(["a bow"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tn=o
o=H.a(["a whip"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.wg=o
o=H.a(["a staff"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.we=o
o=H.a(["a needle"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tz=o
o=H.a(["dice"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tr=o
o=H.a(["a fork"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.vV=o
o=H.a(["a pigeon???"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,1.3)
$.$get$c().h(0,o)
$.tA=o
o=H.a(["a chainsaw"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.vO=o
o=H.a(["a sickle"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.wb=o
o=H.a(["a shotgun"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.w8=o
o=H.a(["a stick"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.de=o
o=H.a(["a chain"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.hk=o
o=H.a(["a wrench"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tI=o
o=H.a(["a shovel"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.w9=o
o=H.a(["a rolling pin"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tH=o
o=H.a(["a puppet"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tC=o
o=H.a(["a razor"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.tE=o
o=H.a(["a pen"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.mx=o
o=H.a(["a bust"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.hj=o
o=H.a(["a bowling ball"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.Aa=o
o=H.a(["a golf club"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.vX=o
o=H.a(["a knife"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.w1=o
o=H.a(["scissors"],p)
n=$.a5
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$c().h(0,o)
$.w7=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.J
m=G.V
l=[m]
k=H.a([$.D,$.aH,$.aZ],l)
H.a([],p)
o=new G.e("Forged",k,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a([],p)
n=$.w
k=H.a([$.am,$.aH],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.AZ=o
o=H.a(["fossilized"],p)
n=$.J
k=H.a([$.b9,$.aG],l)
H.a([],p)
o=new G.e("Fossilized",k,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["adamantium"],p)
n=$.J
k=H.a([$.b9,$.D],l)
H.a([],p)
o=new G.e("Adamantium",k,n,o,0)
$.$get$c().h(0,o)
$.vK=o
o=H.a([],p)
n=$.w
k=H.a([$.b7,$.aK],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["tatami"],p)
n=$.w
k=H.a([$.Q,$.Y],l)
H.a([],p)
o=new G.e("Tatami",k,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["mesh","chain link"],p)
n=$.w
k=H.a([$.Q,$.D],l)
H.a([],p)
o=new G.e("Mesh",k,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["foil"],p)
n=$.w
k=H.a([$.N,$.D],l)
H.a([],p)
o=new G.e("Foil",k,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["beanbag"],p)
n=$.w
k=H.a([$.Q,$.aG],l)
H.a([],p)
o=new G.e("Beanbag",k,n,o,0)
$.$get$c().h(0,o)
$.A6=o
o=H.a(["pleather","faux fur"],p)
n=$.w
k=H.a([$.ce,$.aN],l)
H.a([],p)
o=new G.e("Faux Fur",k,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["plywood"],p)
n=$.w
k=H.a([$.Y,$.N],l)
H.a([],p)
o=new G.e("Plywood",k,n,o,0)
$.$get$c().h(0,o)
$.jl=o
o=H.a(["colossus"],p)
n=$.w
k=H.a([$.D,$.be],l)
H.a([],p)
o=new G.e("Colossus",k,n,o,0)
$.$get$c().h(0,o)
$.vP=o
o=H.a(["rotting","zombie"],p)
n=$.J
k=H.a([$.bS,$.be],l)
H.a([],p)
o=new G.e("Rotting",k,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["draugr","white walker"],p)
n=$.J
k=H.a([$.bS,$.be,$.bi],l)
H.a([],p)
o=new G.e("Draugr",k,n,o,0)
$.$get$c().h(0,o)
$.AW=o
o=H.a(["Ultraviolet"],p)
n=$.tJ
k=H.a([$.b_,$.az],l)
H.a([],p)
o=new G.e("Ultraviolet",k,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["Ultraviolence"],p)
n=$.t
k=H.a([$.b_,$.az,$.aH],l)
H.a([],p)
o=new G.e("Ultraviolence",k,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a([],p)
n=$.t
k=H.a([$.aM,$.bE],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.AU=o
o=H.a(["candy"],p)
n=$.w
k=H.a([$.aE,$.b3],l)
H.a([],p)
o=new G.e("Candy",k,n,o,0)
$.$get$c().h(0,o)
$.to=o
o=H.a(["cotton candy"],p)
n=$.w
k=H.a([$.aE,$.Q],l)
H.a([],p)
o=new G.e("Cotton Candy",k,n,o,0)
$.$get$c().h(0,o)
$.AF=o
o=H.a(["gummy"],p)
n=$.w
k=H.a([$.aE,$.c2],l)
H.a([],p)
o=new G.e("Gum",k,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["marrow"],p)
n=$.w
k=H.a([$.aE,$.b9],l)
H.a([],p)
o=new G.e("Marrow",k,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["toothy"],p)
n=$.a5
k=H.a([$.b9,$.bQ],l)
H.a([],p)
o=new G.e("Toothy",k,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["Frost"],p)
n=$.w
k=H.a([$.aG,$.b3,$.be],l)
H.a([],p)
o=new G.e("Frost",k,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["arsenic","antifreeze"],p)
n=$.t
k=H.a([$.aE,$.bL],l)
H.a([],p)
o=new G.e("Arsenic",k,n,o,0)
$.$get$c().h(0,o)
$.B2=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.w
k=H.a([$.aG,$.b3],l)
H.a([],p)
o=new G.e("Crystal",k,n,o,0)
$.$get$c().h(0,o)
$.mr=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.K
k=H.a([$.aJ,$.aO,$.b8,$.a0,$.ar,$.bE,$.a3],l)
H.a([],p)
o=new G.e("Mary Sue",k,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.K
k=H.a([$.b4,$.az,$.aH,$.a_,$.aM,$.a0,$.ar,$.ay],l)
H.a([],p)
o=new G.e("Edge Lord",k,n,o,0)
$.$get$c().h(0,o)
$.B0=o
o=H.a(["deadpool"],p)
n=$.a5
k=H.a([$.bS,$.b0,$.ay,$.b8],l)
H.a([],p)
o=new G.e("Deadpool",k,n,o,0)
$.$get$c().h(0,o)
$.AL=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.K
k=H.a([$.b4,$.ay],l)
H.a([],p)
o=new G.e("Spoopy",k,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["wolverine"],p)
n=$.a5
k=H.a([$.b9,$.aH,$.aZ],l)
H.a([],p)
o=new G.e("Wolverine",k,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["rabbit's foot"],p)
n=$.a5
k=H.a([$.bE,$.ce],l)
H.a([],p)
o=new G.e("Rabbit's Foot",k,n,o,0)
$.$get$c().h(0,o)
$.tD=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.J
k=H.a([$.aZ,$.Y],l)
H.a([],p)
o=new G.e("Tipped",k,n,o,0)
$.$get$c().h(0,o)
$.A_=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a5
k=H.a([$.aZ,$.b1,$.Y],l)
H.a([],p)
o=new G.e("Arrow",k,n,o,0)
$.$get$c().h(0,o)
$.tk=o
o=H.a(["training sword","bokken"],p)
n=$.a5
k=H.a([$.Y,$.aH],l)
H.a([],p)
o=new G.e("Bokken",k,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.aw,$.ay],l)
H.a([],p)
o=new G.e("Irony Type1",k,n,o,0)
$.$get$c().h(0,o)
$.tw=o
o=H.a(["netted","webbed"],p)
n=$.a5
k=H.a([$.bf,$.Q],l)
H.a([],p)
o=new G.e("Netted",k,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["barbed wire"],p)
n=$.a5
k=H.a([$.aZ,$.bf,$.D,$.Q],l)
H.a([],p)
o=new G.e("Barbed Wire",k,n,o,0)
$.$get$c().h(0,o)
$.A3=o
o=H.a(["morning star"],p)
n=$.a5
k=H.a([$.aZ,$.am],l)
H.a([],p)
o=new G.e("Morning Star",k,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["decadent"],p)
n=$.K
k=H.a([$.b7,$.bb],l)
H.a([],p)
o=new G.e("Decadent",k,n,o,0)
$.$get$c().h(0,o)
$.AO=o
o=H.a(["SBAHJ"],p)
n=$.t
k=H.a([$.bR,$.ay],l)
H.a([],p)
o=new G.e("SBAHJ",k,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["bayonet"],p)
n=$.a5
k=H.a([$.aZ,$.b1],l)
H.a([],p)
o=new G.e("Bayonet",k,n,o,0)
$.$get$c().h(0,o)
$.A5=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.w
k=H.a([$.bi,$.ay,$.aH],l)
H.a([],p)
o=new G.e("Snoop",k,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["light saber"],p)
n=$.t
k=H.a([$.b_,$.aF,$.aH],l)
H.a([],p)
o=new G.e("Light Saber",k,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.K
k=H.a([$.a3,$.aw],l)
H.a([],p)
o=new G.e("Fakey Fake",k,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.K
k=H.a([$.a3,$.aW],l)
H.a([],p)
o=new G.e("Real As Shit",k,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["skeletal"],p)
n=$.a5
k=H.a([$.b4,$.aM,$.b9],l)
H.a([],p)
o=new G.e("Skeletal",k,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["green sun"],p)
n=$.tK
k=H.a([$.aF,$.bX,$.b_],l)
H.a([],p)
o=new G.e("Green Sun",k,n,o,0)
$.$get$c().h(0,o)
$.ms=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tJ
k=H.a([$.az,$.ar],l)
H.a([],p)
o=new G.e("Midnight",k,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["radiant","dazzling"],p)
n=$.K
k=H.a([$.a3,$.b_],l)
H.a([],p)
o=new G.e("Radiant",k,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["edgy"],p)
n=$.K
k=H.a([$.aH,$.az,$.ay],l)
H.a([],p)
o=new G.e("Edgy",k,n,o,0)
$.$get$c().h(0,o)
$.B1=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.t
k=H.a([$.bX,$.bn],l)
H.a([],p)
o=new G.e("Warhead",k,n,o,0)
$.$get$c().h(0,o)
$.zT=o
o=H.a(["living"],p)
n=$.J
k=H.a([$.b9,$.be,$.aA],l)
H.a([],p)
o=new G.e("Living",k,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["dead","corpse","deceased"],p)
n=$.J
k=H.a([$.b9,$.be],l)
H.a([],p)
o=new G.e("Dead",k,n,o,0)
$.$get$c().h(0,o)
$.AK=o
o=H.a(["taser"],p)
n=$.t
k=H.a([$.a2,$.bf,$.b1],l)
H.a([],p)
o=new G.e("Taser",k,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["nocturn"],p)
n=$.t
k=H.a([$.az,$.a7],l)
H.a([],p)
o=new G.e("Nocturn",k,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["dirge"],p)
n=$.t
k=H.a([$.aM,$.a7],l)
H.a([],p)
o=new G.e("Dirge",k,n,o,0)
$.$get$c().h(0,o)
$.AR=o
o=H.a(["Snobbish","Noble"],p)
n=$.K
k=H.a([$.ar,$.bb],l)
H.a([],p)
o=new G.e("Snobbish",k,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["flat"],p)
n=$.K
k=H.a([$.am,$.a7],l)
H.a([],p)
o=new G.e("Flat(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.aH,$.a7],l)
H.a([],p)
o=new G.e("Sharp(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.ar,$.a7],l)
H.a([],p)
o=new G.e("Sharp(Clothes)",k,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["Bach's"],p)
n=$.an
k=H.a([$.a0,$.a7],l)
H.a([],p)
o=new G.e("Bach's",k,n,o,0)
$.$get$c().h(0,o)
$.A1=o
o=H.a(["Mozart's"],p)
n=$.an
k=H.a([$.a3,$.a7],l)
H.a([],p)
o=new G.e("Mozart's",k,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.an
k=H.a([$.a0,$.bX],l)
H.a([],p)
o=new G.e("Einstein's",k,n,o,0)
$.$get$c().h(0,o)
$.B3=o
o=H.a(["Feynman's"],p)
n=$.an
k=H.a([$.a0,$.b8],l)
H.a([],p)
o=new G.e("Feynman's",k,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["Ziptie"],p)
n=$.an
k=H.a([$.aN,$.bf],l)
H.a([],p)
o=new G.e("Ziptie",k,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.t
k=H.a([$.D,$.a0],l)
H.a([],p)
o=new G.e("Mobile",k,n,o,0)
$.$get$c().h(0,o)
$.hm=o
o=H.a(["Sassacre"],p)
n=$.an
k=H.a([$.c9,$.b8],l)
H.a([],p)
o=new G.e("Sassacre",k,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["Sledge"],p)
n=$.t
k=H.a([$.am,$.c9],l)
H.a([],p)
o=new G.e("Sledge",k,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["Legal"],p)
n=$.t
k=H.a([$.bf,$.N],l)
H.a([],p)
o=new G.e("Legal",k,n,o,0)
$.$get$c().h(0,o)
$.mv=o
o=H.a(["Clown"],p)
n=$.t
k=H.a([$.b8,$.aT],l)
H.a([],p)
o=new G.e("Clown",k,n,o,0)
$.$get$c().h(0,o)
$.Az=o
o=H.a(["passionate"],p)
n=$.K
k=H.a([$.aF,$.aO],l)
H.a([],p)
o=new G.e("Passionate",k,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["pinata"],p)
n=$.a5
k=H.a([$.N,$.aE],l)
H.a([],p)
o=new G.e("Pinata",k,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["anvil"],p)
n=$.t
k=H.a([$.am,$.c9,$.D],l)
H.a([],p)
o=new G.e("Anvil",k,n,o,0)
$.$get$c().h(0,o)
$.zZ=o
o=H.a(["flashbang"],p)
n=$.t
k=H.a([$.b_,$.bn],l)
H.a([],p)
o=new G.e("Flashbang",k,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["smokebomb"],p)
n=$.t
k=H.a([$.az,$.bn],l)
H.a([],p)
o=new G.e("Smokebomb",k,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["ninja"],p)
n=$.t
k=H.a([$.az,$.aH],l)
H.a([],p)
o=new G.e("Ninja",k,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["techno"],p)
n=$.t
k=H.a([$.a2,$.a7],l)
H.a([],p)
o=new G.e("Techno",k,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["rock and roll"],p)
n=$.t
k=H.a([$.aG,$.a7],l)
H.a([],p)
o=new G.e("Rock And/Or Roll",k,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a5
k=H.a([$.aA,$.be,$.b1],l)
H.a([],p)
o=new G.e("Pistol Shrimp",k,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["juggalo"],p)
n=$.t
k=H.a([$.b8,$.a7,$.aT,$.b4],l)
H.a([],p)
o=new G.e("Juggalo",k,n,o,0)
$.$get$c().h(0,o)
$.w0=o
o=H.a(["shocksauce"],p)
n=$.K
k=H.a([$.ay,$.a2],l)
H.a([],p)
o=new G.e("Shock Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["weaksauce"],p)
n=$.K
k=H.a([$.am,$.ay,$.bR],l)
H.a([],p)
o=new G.e("Weak Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["spicy","picante"],p)
n=$.K
k=H.a([$.aF,$.aE],l)
H.a([],p)
o=new G.e("Spicy",k,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["ice cream","popsicle"],p)
n=$.w
k=H.a([$.bi,$.aE],l)
H.a([],p)
o=new G.e("Popsicle",k,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["popsickle"],p)
n=$.w
k=H.a([$.bi,$.aE,$.aH],l)
H.a([],p)
o=new G.e("Popsickle",k,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["icepick"],p)
n=$.w
k=H.a([$.bi,$.aZ],l)
H.a([],p)
o=new G.e("Icepick",k,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["schezwan"],p)
n=$.K
k=H.a([$.ay,$.aE],l)
H.a([],p)
o=new G.e("Schezwan",k,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["vaporwave"],p)
n=$.t
k=H.a([$.az,$.a7,$.ay,$.a2],l)
H.a([],p)
o=new G.e("Vaporwave",k,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a(["mallet"],p)
n=$.a5
k=H.a([$.Y,$.am],l)
H.a([],p)
o=new G.e("Mallet",k,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["fidget"],p)
n=$.t
k=H.a([$.aN,$.ay],l)
H.a([],p)
o=new G.e("Fidget",k,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["gold foil"],p)
n=$.w
k=H.a([$.D,$.N,$.bb],l)
H.a([],p)
o=new G.e("Gold Foil",k,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["caviar"],p)
n=$.w
k=H.a([$.aE,$.bb],l)
H.a([],p)
o=new G.e("Caviar",k,n,o,0)
$.$get$c().h(0,o)
$.Aq=o
o=H.a(["RADioactive"],p)
n=$.K
k=H.a([$.bX,$.ay],l)
H.a([],p)
o=new G.e("RADioactive",k,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["glam"],p)
n=$.K
k=H.a([$.aG,$.a7,$.aJ],l)
H.a([],p)
o=new G.e("Glam",k,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["hair metal"],p)
n=$.K
k=H.a([$.D,$.a7,$.aJ],l)
H.a([],p)
o=new G.e("Hair Metal",k,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["elven","fae","sylvan"],p)
n=$.K
k=H.a([$.a3,$.aJ],l)
H.a([],p)
o=new G.e("Elven",k,n,o,0)
$.$get$c().h(0,o)
$.B5=o
o=H.a(["shiny"],p)
n=$.K
k=H.a([$.D,$.aJ],l)
H.a([],p)
o=new G.e("Shiny",k,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.K
k=H.a([$.bb,$.aJ,$.ar],l)
H.a([],p)
o=new G.e("Bespoke",k,n,o,0)
$.$get$c().h(0,o)
$.fb=o
o=H.a(["operatic"],p)
n=$.K
k=H.a([$.bb,$.a7,$.ar],l)
H.a([],p)
o=new G.e("Operatic",k,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["ice","diamond"],p)
n=$.w
k=H.a([$.bb,$.bi],l)
H.a([],p)
o=new G.e("Diamond",k,n,o,0)
$.$get$c().h(0,o)
$.vZ=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.K
k=H.a([$.aF,$.bi],l)
H.a([],p)
o=new G.e("Icy Hot",k,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.K
k=H.a([$.ay,$.bi],l)
H.a([],p)
o=new G.e("Cold As Fuck",k,n,o,0)
$.$get$c().h(0,o)
$.w_=o
o=H.a(["winter's","season's"],p)
n=$.an
k=H.a([$.bk,$.bi],l)
H.a([],p)
o=new G.e("Winter's",k,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.an
k=H.a([$.a3,$.bi],l)
H.a([],p)
o=new G.e("Christmas",k,n,o,0)
$.$get$c().h(0,o)
$.Av=o
o=H.a(["Santa Saws"],p)
n=$.an
k=H.a([$.a3,$.bi,$.aH],l)
H.a([],p)
o=new G.e("Santa Saws",k,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["Santa Sleighs"],p)
n=$.an
k=H.a([$.hl,$.aH],l)
H.a([],p)
o=new G.e("Santa Sleighs",k,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["Santa Claws"],p)
n=$.an
k=H.a([$.hl,$.mq],l)
H.a([],p)
o=new G.e("Santa Claws",k,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["Sandy Claws"],p)
n=$.an
k=H.a([$.hl,$.mq,$.aG],l)
H.a([],p)
o=new G.e("Sandy Claws",k,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["Silent Night"],p)
n=$.an
k=H.a([$.hl,$.az],l)
H.a([],p)
o=new G.e("Silent Night",k,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.an
k=H.a([$.b4,$.bW],l)
H.a([],p)
o=new G.e("Ghost's",k,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["ghoul","mutant"],p)
n=$.w
k=H.a([$.be,$.bX,$.bS],l)
H.a([],p)
o=new G.e("Mutant",k,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["skate","skateboard"],p)
n=$.t
k=H.a([$.ay,$.D],l)
H.a([],p)
o=new G.e("Skateboard",k,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["microwave"],p)
n=$.t
k=H.a([$.bX,$.a2,$.aE],l)
H.a([],p)
o=new G.e("Microwave",k,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["orbital"],p)
n=$.t
k=H.a([$.bX,$.a2,$.aE,$.b1],l)
H.a([],p)
o=new G.e("Orbital",k,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a([],p)
n=$.t
k=H.a([$.am,$.a0],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.vR=o
o=H.a(["uranium"],p)
n=$.w
k=H.a([$.bX,$.aG],l)
H.a([],p)
o=new G.e("Uranium",k,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["mousepad","jar opener"],p)
n=$.t
k=H.a([$.N,$.c2],l)
H.a([],p)
o=new G.e("Mousepad",k,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.aH,$.aG],l)
H.a([],p)
o=new G.e("Sharpened Flint",k,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.aZ,$.aG],l)
H.a([],p)
o=new G.e("Pointed Flint",k,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["picnic"],p)
n=$.t
k=H.a([$.aN,$.aZ],l)
H.a([],p)
o=new G.e("Picnic",k,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["xtreme xplosion"],p)
n=$.K
k=H.a([$.ay,$.bn],l)
H.a([],p)
o=new G.e("Xtreme Xplosion",k,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["lawn"],p)
n=$.t
k=H.a([$.aN,$.b7],l)
H.a([],p)
o=new G.e("Lawn",k,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["upholstered"],p)
n=$.w
k=H.a([$.Q,$.b7],l)
H.a([],p)
o=new G.e("Upholstered",k,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["leather"],p)
n=$.w
k=H.a([$.be,$.b7],l)
H.a([],p)
o=new G.e("Leather",k,n,o,0)
$.$get$c().h(0,o)
$.tx=o
o=H.a(["shag"],p)
n=$.w
k=H.a([$.ce,$.b7],l)
H.a([],p)
o=new G.e("Shag",k,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["loyal"],p)
n=$.K
k=H.a([$.am,$.aO],l)
H.a([],p)
o=new G.e("Loyal",k,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["porcelain"],p)
n=$.w
k=H.a([$.aJ,$.bQ],l)
H.a([],p)
o=new G.e("Porcelain",k,n,o,0)
$.$get$c().h(0,o)
$.jm=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a5
k=H.a([$.bb,$.bQ],l)
H.a([],p)
o=new G.e("Pork Hollow",k,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["n1nj4","katana"],p)
n=$.t
k=H.a([$.ay,$.aH],l)
H.a([],p)
o=new G.e("Katana",k,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["chocolate"],p)
n=$.w
k=H.a([$.aO,$.aE],l)
H.a([],p)
o=new G.e("Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.Au=o
o=H.a(["wrapped chocolate"],p)
n=$.w
k=H.a([$.aO,$.aE,$.N,$.D],l)
H.a([],p)
o=new G.e("Wrapped Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["scratch-n-sniff"],p)
n=$.w
k=H.a([$.ay,$.N],l)
H.a([],p)
o=new G.e("Scratch-n-sniff",k,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["mythril","orichalcum"],p)
n=$.w
k=H.a([$.a3,$.D],l)
H.a([],p)
o=new G.e("Mythril",k,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["titanium","steel"],p)
n=$.w
k=H.a([$.am,$.D],l)
H.a([],p)
o=new G.e("Titanium",k,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["lead"],p)
n=$.w
k=H.a([$.c9,$.D],l)
H.a([],p)
o=new G.e("Lead",k,n,o,0)
$.$get$c().h(0,o)
$.w3=o
o=H.a(["satire","parody","onion"],p)
n=$.t
k=H.a([$.aw,$.b8],l)
H.a([],p)
o=new G.e("Satire",k,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["comedy gold"],p)
n=$.K
k=H.a([$.bb,$.b8],l)
H.a([],p)
o=new G.e("Comedy Gold",k,n,o,0)
$.$get$c().h(0,o)
$.AB=o
o=H.a(["dry","sensible chuckle"],p)
n=$.K
k=H.a([$.ar,$.b8],l)
H.a([],p)
o=new G.e("Dry",k,n,o,0)
$.$get$c().h(0,o)
$.AX=o
o=H.a(["polite"],p)
n=$.K
k=H.a([$.b7,$.aw],l)
H.a([],p)
o=new G.e("Polite",k,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["stradivarius"],p)
n=$.an
k=H.a([$.ar,$.bb,$.Y,$.a7],l)
H.a([],p)
o=new G.e("Stradivarius",k,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["scientistic"],p)
n=$.K
k=H.a([$.a0,$.aw],l)
H.a([],p)
o=new G.e("Scientistic",k,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["AI"],p)
n=$.t
k=H.a([$.a2,$.aA],l)
H.a([],p)
o=new G.e("AI",k,n,o,0)
$.$get$c().h(0,o)
$.mn=o
o=H.a(["robotic"],p)
n=$.J
k=H.a([$.D,$.a2,$.aA],l)
H.a([],p)
o=new G.e("Robotic",k,n,o,0)
$.$get$c().h(0,o)
$.tG=o
o=H.a(["shrapnel"],p)
n=$.t
k=H.a([$.Y,$.bn],l)
H.a([],p)
o=new G.e("Shrapnel",k,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["vocaloid"],p)
n=$.t
k=H.a([$.aA,$.a2,$.a7],l)
H.a([],p)
o=new G.e("Vocaloid",k,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["*Hyun-ae"],p)
n=$.an
k=H.a([$.aA,$.a2,$.aO],l)
H.a([],p)
o=new G.e("*Hyun-ae",k,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["buckshot"],p)
n=$.t
k=H.a([$.Y,$.b1],l)
H.a([],p)
o=new G.e("Buckshot",k,n,o,0)
$.$get$c().h(0,o)
$.Ae=o
o=H.a(["cannon"],p)
n=$.t
k=H.a([$.c9,$.b1],l)
H.a([],p)
o=new G.e("Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.An=o
o=H.a(["stationary"],p)
n=$.t
k=H.a([$.ar,$.N],l)
H.a([],p)
o=new G.e("Stationary",k,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a([],p)
n=$.t
k=H.a([$.aI,$.N],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a([],p)
n=$.t
k=H.a([$.D,$.b1],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["papercut"],p)
n=$.t
k=H.a([$.aH,$.N],l)
H.a([],p)
o=new G.e("Papercut",k,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["squeaky"],p)
n=$.J
k=H.a([$.am,$.c2],l)
H.a([],p)
o=new G.e("Squeaky",k,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["kazoo"],p)
n=$.t
k=H.a([$.aw,$.a7],l)
H.a([],p)
o=new G.e("Kazoo",k,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["bandaid"],p)
n=$.t
k=H.a([$.b0,$.N],l)
H.a([],p)
o=new G.e("Bandaid",k,n,o,0)
$.$get$c().h(0,o)
$.A2=o
o=H.a(["gushers"],p)
n=$.t
k=H.a([$.b0,$.aE],l)
H.a([],p)
o=new G.e("Gushers",k,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["medic"],p)
n=$.t
k=H.a([$.b0,$.b1],l)
H.a([],p)
o=new G.e("Medic",k,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["sick nasty","ill"],p)
n=$.J
k=H.a([$.ay,$.bL],l)
H.a([],p)
o=new G.e("Sick Nasty",k,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["gilded","gold leaf"],p)
n=$.w
k=H.a([$.D,$.Y],l)
H.a([],p)
o=new G.e("Gilded",k,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["charging","power cord"],p)
n=$.t
k=H.a([$.aN,$.a2],l)
H.a([],p)
o=new G.e("Charging",k,n,o,0)
$.$get$c().h(0,o)
$.At=o
o=H.a(["safety"],p)
n=$.t
k=H.a([$.c2,$.aH],l)
H.a([],p)
o=new G.e("Rubber Safety",k,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["safety"],p)
n=$.t
k=H.a([$.aN,$.aH],l)
H.a([],p)
o=new G.e("Plastic Safety",k,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["thunderous","thor's"],p)
n=$.K
k=H.a([$.aT,$.a2],l)
H.a([],p)
o=new G.e("Thunderous",k,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["screeching","dial up"],p)
n=$.K
k=H.a([$.aT,$.a2,$.a0],l)
H.a([],p)
o=new G.e("Screeching",k,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["mirrored","reflective"],p)
n=$.t
k=H.a([$.b3,$.D],l)
H.a([],p)
o=new G.e("Mirrored",k,n,o,0)
$.$get$c().h(0,o)
$.mw=o
o=H.a(["far seeing","sighted"],p)
n=$.t
k=H.a([$.b3,$.aG,$.a3],l)
H.a([],p)
o=new G.e("Far Seeing",k,n,o,0)
$.$get$c().h(0,o)
$.vQ=o
o=H.a(["disabling","non lethal"],p)
n=$.t
k=H.a([$.c2,$.b1],l)
H.a([],p)
o=new G.e("Nonlethal",k,n,o,0)
$.$get$c().h(0,o)
$.AS=o
o=H.a(["fashionable"],p)
n=$.t
k=H.a([$.aJ,$.ar],l)
H.a([],p)
o=new G.e("Fashionable",k,n,o,0)
$.$get$c().h(0,o)
$.vT=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.b8,$.ay],l)
H.a([],p)
o=new G.e("Ironic Type 2",k,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.bR,$.b8],l)
H.a([],p)
o=new G.e("Ironic Type 3",k,n,o,0)
$.$get$c().h(0,o)
$.mu=o
o=H.a(["post-ironic"],p)
n=$.K
k=H.a([$.aw,$.ay,$.ar],l)
H.a([],p)
o=new G.e("Post Ironic",k,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["monstrous"],p)
n=$.K
k=H.a([$.bS,$.aT,$.b4],l)
H.a([],p)
o=new G.e("Monstrous",k,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.t
k=H.a([$.b1,$.ay,$.ar],l)
H.a([],p)
o=new G.e("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["golden"],p)
n=$.w
k=H.a([$.D,$.bb],l)
H.a([],p)
o=new G.e("Golden",k,n,o,0)
$.$get$c().h(0,o)
$.tt=o
o=H.a(["platinum"],p)
n=$.w
k=H.a([$.b_,$.D],l)
H.a([],p)
o=new G.e("Platinum",k,n,o,0)
$.$get$c().h(0,o)
$.my=o
o=H.a(["horseshoe"],p)
n=$.t
k=H.a([$.bE,$.D],l)
H.a([],p)
o=new G.e("Horseshoe",k,n,o,0)
$.$get$c().h(0,o)
$.tv=o
o=H.a(["felt"],p)
n=$.t
k=H.a([$.Q,$.ce],l)
H.a([],p)
o=new G.e("Felt",k,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.aG,$.ar],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.w4=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.aG,$.c9],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["glitched"],p)
n=$.J
k=H.a([$.bl,$.a2],l)
H.a([],p)
o=new G.e("Glitched",k,n,o,0)
$.$get$c().h(0,o)
$.vW=o
o=H.a(["debugging"],p)
n=$.t
k=H.a([$.b0,$.a2],l)
H.a([],p)
o=new G.e("Debugging",k,n,o,0)
$.$get$c().h(0,o)
$.AN=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.t
k=H.a([$.D,$.aT,$.a7],l)
H.a([],p)
o=new G.e("Metalic",k,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["Simulacrum"],p)
n=$.K
k=H.a([$.aA,$.aw],l)
H.a([],p)
o=new G.e("Simulacrum",k,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["Imitation"],p)
n=$.t
k=H.a([$.aE,$.aw],l)
H.a([],p)
o=new G.e("Imitation",k,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["Placebo"],p)
n=$.t
k=H.a([$.b0,$.aw],l)
H.a([],p)
o=new G.e("Placebo",k,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["counterfeit"],p)
n=$.t
k=H.a([$.bb,$.aw],l)
H.a([],p)
o=new G.e("Counterfeit",k,n,o,0)
$.$get$c().h(0,o)
$.AG=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.ay,$.aK,$.b8],l)
H.a([],p)
o=new G.e("Surreal1",k,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["Brainy"],p)
n=$.K
k=H.a([$.a0,$.be],l)
H.a([],p)
o=new G.e("Brainy",k,n,o,0)
$.$get$c().h(0,o)
$.Ab=o
o=H.a(["Incendiary"],p)
n=$.t
k=H.a([$.aF,$.bn],l)
H.a([],p)
o=new G.e("Incendiary",k,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["C-4"],p)
n=$.w
k=H.a([$.bn,$.aN],l)
H.a([],p)
o=new G.e("C-4",k,n,o,0)
$.$get$c().h(0,o)
$.Ai=o
o=H.a(["fae"],p)
n=$.t
k=H.a([$.a3,$.b_,$.bl],l)
H.a([],p)
o=new G.e("Fae",k,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["Plutonium"],p)
n=$.w
k=H.a([$.D,$.bX],l)
H.a([],p)
o=new G.e("Plutonium",k,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["Lithium"],p)
n=$.w
k=H.a([$.D,$.a2],l)
H.a([],p)
o=new G.e("Lithium",k,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["Molten"],p)
n=$.w
k=H.a([$.D,$.aF],l)
H.a([],p)
o=new G.e("Molten",k,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.w
k=H.a([$.aG,$.aF],l)
H.a([],p)
o=new G.e("Magma",k,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["Rusty"],p)
n=$.J
k=H.a([$.D,$.bR],l)
H.a([],p)
o=new G.e("Rusty",k,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["Fonzie"],p)
n=$.t
k=H.a([$.aH,$.ay,$.ar],l)
H.a([],p)
o=new G.e("Fonzie",k,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["Romcom"],p)
n=$.t
k=H.a([$.aO,$.b8],l)
H.a([],p)
o=new G.e("Romcom",k,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["Alluring"],p)
n=$.t
k=H.a([$.aJ,$.b_],l)
H.a([],p)
o=new G.e("Alluring",k,n,o,0)
$.$get$c().h(0,o)
$.zW=o
o=H.a(["Masquerade"],p)
n=$.t
k=H.a([$.aJ,$.az],l)
H.a([],p)
o=new G.e("Masquerade",k,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.t
k=H.a([$.aG,$.be],l)
H.a([],p)
o=new G.e("Stoneskin",k,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["Psionic"],p)
n=$.t
k=H.a([$.a3,$.a0],l)
H.a([],p)
o=new G.e("Psionic",k,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["Dwarven"],p)
n=$.t
k=H.a([$.a3,$.aG],l)
H.a([],p)
o=new G.e("Dwarven",k,n,o,0)
$.$get$c().h(0,o)
$.B_=o
o=H.a(["Elemental","Animated"],p)
n=$.w
k=H.a([$.a3,$.aA],l)
H.a([],p)
o=new G.e("Elemental",k,n,o,0)
$.$get$c().h(0,o)
$.B4=o
o=H.a(["Gourmet"],p)
n=$.K
k=H.a([$.aE,$.ar],l)
H.a([],p)
o=new G.e("Gourmet",k,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["Stained Glass"],p)
n=$.w
k=H.a([$.b3,$.aJ,$.bb],l)
H.a([],p)
o=new G.e("Stained Glass",k,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["Gauze"],p)
n=$.t
k=H.a([$.b0,$.Q],l)
H.a([],p)
o=new G.e("Gauze",k,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["Locked"],p)
n=$.J
k=H.a([$.bf,$.bm],l)
H.a([],p)
o=new G.e("Locked",k,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["Etched"],p)
n=$.t
k=H.a([$.aG,$.N],l)
H.a([],p)
o=new G.e("Etched",k,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["Papyrus"],p)
n=$.w
k=H.a([$.N,$.b5],l)
H.a([],p)
o=new G.e("Papyrus",k,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["film"],p)
n=$.t
k=H.a([$.N,$.aN],l)
H.a([],p)
o=new G.e("Film",k,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["Saucey"],p)
n=$.w
k=H.a([$.bl,$.bm,$.bS],l)
H.a([],p)
o=new G.e("Saucey",k,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Lottery"],p)
n=$.t
k=H.a([$.N,$.bE],l)
H.a([],p)
o=new G.e("Lottery",k,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["Blindfolded"],p)
n=$.t
k=H.a([$.az,$.Q],l)
H.a([],p)
o=new G.e("Blindfolded",k,n,o,0)
$.$get$c().h(0,o)
$.vM=o
o=H.a(["Possessed"],p)
n=$.J
k=H.a([$.bW,$.be],l)
H.a([],p)
o=new G.e("Possessed",k,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["Infernal"],p)
n=$.K
k=H.a([$.bW,$.aF],l)
H.a([],p)
o=new G.e("Infernal",k,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.t
k=H.a([$.Y,$.aW,$.tC,$.aA],l)
H.a([],p)
o=new G.e("Geppetto",k,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["Abominable"],p)
n=$.K
k=H.a([$.be,$.bl],l)
H.a([],p)
o=new G.e("Abominable",k,n,o,0)
$.$get$c().h(0,o)
$.zU=o
o=H.a(["Ashen"],p)
n=$.t
k=H.a([$.aO,$.aM],l)
H.a([],p)
o=new G.e("Ashen",k,n,o,0)
$.$get$c().h(0,o)
$.A0=o
o=H.a(["Pale"],p)
n=$.t
k=H.a([$.aO,$.bk],l)
H.a([],p)
o=new G.e("Pale",k,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["Pitch"],p)
n=$.t
k=H.a([$.aO,$.bm],l)
H.a([],p)
o=new G.e("Pitch",k,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["Lit"],p)
n=$.K
k=H.a([$.ay,$.aF],l)
H.a([],p)
o=new G.e("Lit",k,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["Hypnotizing"],p)
n=$.t
k=H.a([$.a3,$.bk],l)
H.a([],p)
o=new G.e("Hypnotizing",k,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["Tranquilizing"],p)
n=$.t
k=H.a([$.bk,$.bf],l)
H.a([],p)
o=new G.e("Tranquilizing",k,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a([],p)
n=$.t
k=H.a([$.bk,$.bm],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Al=o
o=H.a(["Ghost Rider's"],p)
n=$.an
k=H.a([$.hk,$.aF,$.bW],l)
H.a([],p)
o=new G.e("Ghost Rider",k,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["Logical"],p)
n=$.K
k=H.a([$.a0,$.bi],l)
H.a([],p)
o=new G.e("Logical",k,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["Duelist's"],p)
n=$.an
k=H.a([$.b1,$.ar],l)
H.a([],p)
o=new G.e("Duelist's",k,n,o,0)
$.$get$c().h(0,o)
$.AY=o
o=H.a(["Silenced"],p)
n=$.J
k=H.a([$.b1,$.az],l)
H.a([],p)
o=new G.e("Silenced",k,n,o,0)
$.$get$c().h(0,o)
$.wc=o
o=H.a(["Deudly"],p)
n=$.J
k=H.a([$.b1,$.bR],l)
H.a([],p)
o=new G.e("Deudly",k,n,o,0)
$.$get$c().h(0,o)
$.AM=o
o=H.a(["Screaming"],p)
n=$.J
k=H.a([$.aT,$.b4],l)
H.a([],p)
o=new G.e("Screaming",k,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["Cacophonous"],p)
n=$.K
k=H.a([$.bS,$.a7],l)
H.a([],p)
o=new G.e("Cacophonous",k,n,o,0)
$.$get$c().h(0,o)
$.Aj=o
o=H.a(["Sublime"],p)
n=$.K
k=H.a([$.bS,$.aJ],l)
H.a([],p)
o=new G.e("Sublime",k,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["Masterwork"],p)
n=$.w
k=H.a([$.aW,$.bb],l)
H.a([],p)
o=new G.e("Masterwork",k,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["BroodFester"],p)
n=$.t
k=H.a([$.aA,$.b4,$.bl,$.a3],l)
H.a([],p)
o=new G.e("BroodFester",k,n,o,0)
$.$get$c().h(0,o)
$.Ad=o
o=H.a(["[REDACTED]"],p)
n=$.t
k=H.a([$.bl,$.az],l)
H.a([],p)
o=new G.e("[REDACTED]",k,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["Pop Rocks"],p)
n=$.t
k=H.a([$.aE,$.bn],l)
H.a([],p)
o=new G.e("Pop Rocks",k,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["Disguised"],p)
n=$.J
k=H.a([$.az,$.aw],l)
H.a([],p)
o=new G.e("Disguised",k,n,o,0)
$.$get$c().h(0,o)
$.AT=o
o=H.a(["Haunted"],p)
n=$.J
k=H.a([$.aK,$.bW],l)
H.a([],p)
o=new G.e("Haunted",k,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["Cognitohazardous"],p)
n=$.J
k=H.a([$.bl,$.a0],l)
H.a([],p)
o=new G.e("Cognitohazardous",k,n,o,0)
$.$get$c().h(0,o)
$.AA=o
o=H.a(["Staticy"],p)
n=$.J
k=H.a([$.aK,$.a2],l)
H.a([],p)
o=new G.e("Staticy",k,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["Jadite"],p)
n=$.t
k=H.a([$.b3,$.bX],l)
H.a([],p)
o=new G.e("Jadite",k,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["Tickling"],p)
n=$.t
k=H.a([$.b8,$.aK],l)
H.a([],p)
o=new G.e("Tickling",k,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["Composite"],p)
n=$.t
k=H.a([$.D,$.bQ],l)
H.a([],p)
o=new G.e("Composite",k,n,o,0)
$.$get$c().h(0,o)
$.AC=o
o=H.a(["High-Powered"],p)
n=$.J
k=H.a([$.bn,$.b1],l)
H.a([],p)
o=new G.e("High-Powered",k,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["Concussive"],p)
n=$.t
k=H.a([$.bn,$.am],l)
H.a([],p)
o=new G.e("Concussive",k,n,o,0)
$.$get$c().h(0,o)
$.AD=o
o=H.a(["Down"],p)
n=$.w
k=H.a([$.b7,$.bz],l)
H.a([],p)
o=new G.e("Down",k,n,o,0)
$.$get$c().h(0,o)
$.AV=o
o=H.a(["Prickly"],p)
n=$.w
k=H.a([$.aK,$.aZ],l)
H.a([],p)
o=new G.e("Prickly",k,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.t
k=H.a([$.aK,$.az,$.a2],l)
H.a([],p)
o=new G.e("Deep-Web",k,n,o,0)
$.$get$c().h(0,o)
$.AP=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.w
k=H.a([$.aZ,$.aH],l)
H.a([],p)
o=new G.e("Jagged",k,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["Nanofiber"],p)
n=$.w
k=H.a([$.Q,$.a0],l)
H.a([],p)
o=new G.e("Nanofiber",k,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["Clanging"],p)
n=$.t
k=H.a([$.D,$.aT],l)
H.a([],p)
o=new G.e("Clanging",k,n,o,0)
$.$get$c().h(0,o)
$.Aw=o
o=H.a(["Silver"],p)
n=$.w
k=H.a([$.D,$.ar],l)
H.a([],p)
o=new G.e("Silver",k,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["Withered"],p)
n=$.J
k=H.a([$.aM,$.b5],l)
H.a([],p)
o=new G.e("Withered",k,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["Shattered"],p)
n=$.J
k=H.a([$.b3,$.bR],l)
H.a([],p)
o=new G.e("Shattered",k,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["Miner's"],p)
n=$.an
k=H.a([$.aG,$.D],l)
H.a([],p)
o=new G.e("Miner's",k,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["Singing"],p)
n=$.t
k=H.a([$.a7,$.aA],l)
H.a([],p)
o=new G.e("Singing",k,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["Mitochondrial"],p)
n=$.t
k=H.a([$.be,$.a2],l)
H.a([],p)
o=new G.e("Mitochondrial",k,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["Blackout","EMP"],p)
n=$.t
k=H.a([$.az,$.a2],l)
H.a([],p)
o=new G.e("Blackout",k,n,o,0)
$.$get$c().h(0,o)
$.A8=o
o=H.a(["Asbestos"],p)
n=$.w
k=H.a([$.aG,$.bL],l)
H.a([],p)
o=new G.e("Asbestos",k,n,o,0)
$.$get$c().h(0,o)
$.zV=o
o=H.a(["Mercurial"],p)
n=$.w
k=H.a([$.bL,$.D],l)
H.a([],p)
o=new G.e("Mercurial",k,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Bulletproof"],p)
n=$.w
k=H.a([$.Q,$.am],l)
H.a([],p)
o=new G.e("Bulletproof",k,n,o,0)
$.$get$c().h(0,o)
$.Ag=o
o=H.a(["Cotton"],p)
n=$.w
k=H.a([$.b5,$.Q],l)
H.a([],p)
o=new G.e("Cotton",k,n,o,0)
$.$get$c().h(0,o)
$.AE=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.t
k=H.a([$.bm,$.b_],l)
H.a([],p)
o=new G.e("Blinding",k,n,o,0)
$.$get$c().h(0,o)
$.A9=o
o=H.a(["Brilliant"],p)
n=$.K
k=H.a([$.b_,$.a0],l)
H.a([],p)
o=new G.e("Brilliant",k,n,o,0)
$.$get$c().h(0,o)
$.Ac=o
o=H.a(["Offensive"],p)
n=$.K
k=H.a([$.bm,$.a0],l)
H.a([],p)
o=new G.e("Offensive",k,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["Poached"],p)
n=$.J
k=H.a([$.be,$.bb],l)
H.a([],p)
o=new G.e("Poached",k,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["Tapestry"],p)
n=$.w
k=H.a([$.Q,$.aJ],l)
H.a([],p)
o=new G.e("Tapestry",k,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["Itchy"],p)
n=$.K
k=H.a([$.Q,$.aK],l)
H.a([],p)
o=new G.e("Itchy",k,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["Wishbone"],p)
n=$.w
k=H.a([$.bE,$.b9],l)
H.a([],p)
o=new G.e("Wishbone",k,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["Rattling"],p)
n=$.J
k=H.a([$.aT,$.b9],l)
H.a([],p)
o=new G.e("Rattling",k,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["Cranial"],p)
n=$.w
k=H.a([$.a0,$.b9],l)
H.a([],p)
o=new G.e("Cranial",k,n,o,0)
$.$get$c().h(0,o)
$.AI=o
o=H.a(["Humerus"],p)
n=$.w
k=H.a([$.b8,$.b9],l)
H.a([],p)
o=new G.e("Humerus",k,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Massage"],p)
n=$.t
k=H.a([$.b0,$.b7],l)
H.a([],p)
o=new G.e("Massage",k,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["Pestersome","Irksome"],p)
n=$.K
k=H.a([$.aT,$.bm],l)
H.a([],p)
o=new G.e("Pestersome",k,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["Shockwave"],p)
n=$.t
k=H.a([$.aT,$.bn],l)
H.a([],p)
o=new G.e("Shockwave",k,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["Antivenom"],p)
n=$.t
k=H.a([$.bL,$.b0],l)
H.a([],p)
o=new G.e("Antivenom",k,n,o,0)
$.$get$c().h(0,o)
$.zY=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.w
k=H.a([$.aF,$.a3],l)
H.a([],p)
o=new G.e("Will O Wisp",k,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["Fiberglass"],p)
n=$.w
k=H.a([$.Q,$.b3],l)
H.a([],p)
o=new G.e("Fiberglass",k,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["Skull"],p)
n=$.w
k=H.a([$.b9,$.b4],l)
H.a([],p)
o=new G.e("Skull",k,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["Enchanted"],p)
n=$.J
k=H.a([$.a3,$.bE],l)
H.a([],p)
o=new G.e("Enchanted",k,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a(["Berserker's"],p)
n=$.an
k=H.a([$.a3,$.bm],l)
H.a([],p)
o=new G.e("Berserker's",k,n,o,0)
$.$get$c().h(0,o)
$.A7=o
o=H.a(["Clerical"],p)
n=$.an
k=H.a([$.a3,$.b0],l)
H.a([],p)
o=new G.e("Clerical",k,n,o,0)
$.$get$c().h(0,o)
$.Ax=o
o=H.a(["Cauterizing"],p)
n=$.t
k=H.a([$.b0,$.aF],l)
H.a([],p)
o=new G.e("Cauterizing",k,n,o,0)
$.$get$c().h(0,o)
$.Ap=o
o=H.a(["X-Ray"],p)
n=$.t
k=H.a([$.bX,$.b_],l)
H.a([],p)
o=new G.e("X-Ray",k,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["Clever"],p)
n=$.K
k=H.a([$.a0,$.bE],l)
H.a([],p)
o=new G.e("Clever",k,n,o,0)
$.$get$c().h(0,o)
$.Ay=o
o=H.a(["Fireplace"],p)
n=$.t
k=H.a([$.b7,$.aF],l)
H.a([],p)
o=new G.e("Fireplace",k,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["Crackling"],p)
n=$.J
k=H.a([$.aT,$.aF],l)
H.a([],p)
o=new G.e("Crackling",k,n,o,0)
$.$get$c().h(0,o)
$.AH=o
o=H.a(["Thumping"],p)
n=$.J
k=H.a([$.aT,$.c9],l)
H.a([],p)
o=new G.e("Thumping",k,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["Shrieking","Banshee"],p)
n=$.J
k=H.a([$.bW,$.aT],l)
H.a([],p)
o=new G.e("Banshee",k,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.b8,$.bl],l)
H.a([],p)
o=new G.e("Surreal2",k,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["Aloe","Willowbark"],p)
n=$.t
k=H.a([$.b0,$.b5],l)
H.a([],p)
o=new G.e("Aloe",k,n,o,0)
$.$get$c().h(0,o)
$.zX=o
o=H.a(["Rose"],p)
n=$.t
k=H.a([$.aO,$.b5],l)
H.a([],p)
o=new G.e("Rose",k,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["Knock Knock"],p)
n=$.t
k=H.a([$.b8,$.am],l)
H.a([],p)
o=new G.e("Knock Knock",k,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["Lifesteal"],p)
n=$.t
k=H.a([$.a3,$.bL],l)
H.a([],p)
o=new G.e("Lifesteal",k,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Tragic"],p)
n=$.t
k=H.a([$.aJ,$.aM],l)
H.a([],p)
o=new G.e("Tragic",k,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["Slapstick"],p)
n=$.t
k=H.a([$.aH,$.b8],l)
H.a([],p)
o=new G.e("Slapstick",k,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["Gross Out"],p)
n=$.t
k=H.a([$.bS,$.b8],l)
H.a([],p)
o=new G.e("Gross Out",k,n,o,0)
$.$get$c().h(0,o)
$.vY=o
o=H.a(["Flowery"],p)
n=$.w
k=H.a([$.aJ,$.b5],l)
H.a([],p)
o=new G.e("Flowery",k,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["Poison Ivy"],p)
n=$.w
k=H.a([$.bL,$.b5],l)
H.a([],p)
o=new G.e("Poison Ivy",k,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.J
k=H.a([$.a3,$.bz],l)
H.a([],p)
o=new G.e("Winged",k,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["Forbidden Fruit"],p)
n=$.t
k=H.a([$.b5,$.aE,$.aM],l)
H.a([],p)
o=new G.e("Forbidden Fruit",k,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["Lawful"],p)
n=$.K
k=H.a([$.bf,$.aA],l)
H.a([],p)
o=new G.e("Lawful",k,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["Chaotic"],p)
n=$.K
k=H.a([$.bm,$.aA],l)
H.a([],p)
o=new G.e("Chaotic",k,n,o,0)
$.$get$c().h(0,o)
$.tp=o
o=H.a(["Hypothermic"],p)
n=$.J
k=H.a([$.aM,$.bi],l)
H.a([],p)
o=new G.e("Hypothermic",k,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["Hyperthermic"],p)
n=$.J
k=H.a([$.aM,$.aF],l)
H.a([],p)
o=new G.e("Hyperthermic",k,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["Shackled"],p)
n=$.J
k=H.a([$.bf,$.c9],l)
H.a([],p)
o=new G.e("Shackled",k,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["Poetic"],p)
n=$.K
k=H.a([$.a0,$.aO],l)
H.a([],p)
o=new G.e("Poetic",k,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["Holographic"],p)
n=$.w
k=H.a([$.b_,$.a0,$.b3,$.a2],l)
H.a([],p)
o=new G.e("Holographic",k,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["Casket","Coffin"],p)
n=$.w
k=H.a([$.Y,$.aM],l)
H.a([],p)
o=new G.e("Casket",k,n,o,0)
$.$get$c().h(0,o)
$.Ao=o
o=H.a(["Spectral"],p)
n=$.w
k=H.a([$.bW,$.a3],l)
H.a([],p)
o=new G.e("Spectral",k,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["Phoenix"],p)
n=$.w
k=H.a([$.aF,$.bz],l)
H.a([],p)
o=new G.e("Phoenix",k,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["Tattered"],p)
n=$.J
k=H.a([$.Q,$.aM],l)
H.a([],p)
o=new G.e("Tattered",k,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["Woodwind","Reed"],p)
n=$.t
k=H.a([$.a7,$.Y],l)
H.a([],p)
o=new G.e("Woodwind",k,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["Bone Hurting"],p)
n=$.t
k=H.a([$.aK,$.b9],l)
H.a([],p)
o=new G.e("Bone Hurting",k,n,o,0)
$.$get$c().h(0,o)
$.mo=o
o=H.a(["Bone Healing:"],p)
n=$.t
k=H.a([$.b0,$.b9],l)
H.a([],p)
o=new G.e("Bone Healing:",k,n,o,0)
$.$get$c().h(0,o)
$.tm=o
o=H.a(["Calcium"],p)
n=$.w
k=H.a([$.b9,$.b0,$.aE],l)
H.a([],p)
o=new G.e("Calcium",k,n,o,0)
$.$get$c().h(0,o)
$.Ak=o
o=H.a(["Fleece"],p)
n=$.w
k=H.a([$.Q,$.aF],l)
H.a([],p)
o=new G.e("Fleece",k,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["Potted"],p)
n=$.w
k=H.a([$.bQ,$.b5],l)
H.a([],p)
o=new G.e("Potted",k,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.w
k=H.a([$.D,$.aE],l)
H.a([],p)
o=new G.e("Canned",k,n,o,0)
$.$get$c().h(0,o)
$.Am=o
o=H.a(["Diseased"],p)
n=$.J
k=H.a([$.aM,$.be],l)
H.a([],p)
o=new G.e("Diseased",k,n,o,0)
$.$get$c().h(0,o)
$.AQ=o
o=H.a(["Porcupine"],p)
n=$.w
k=H.a([$.aZ,$.ce],l)
H.a([],p)
o=new G.e("Porcupine",k,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["Fanged"],p)
n=$.J
k=H.a([$.b9,$.aZ],l)
H.a([],p)
o=new G.e("Fanged",k,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["Basalt"],p)
n=$.w
k=H.a([$.aG,$.az],l)
H.a([],p)
o=new G.e("Basalt",k,n,o,0)
$.$get$c().h(0,o)
$.A4=o
o=H.a(["Obsidian"],p)
n=$.w
k=H.a([$.b3,$.az],l)
H.a([],p)
o=new G.e("Obsidian",k,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["Fenestrated"],p)
n=$.w
k=H.a([$.b3,$.Y],l)
H.a([],p)
o=new G.e("Fenestrated",k,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["Plexiglass"],p)
n=$.w
k=H.a([$.b3,$.aN],l)
H.a([],p)
o=new G.e("Plexiglass",k,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["Ceramic Wrap"],p)
n=$.t
k=H.a([$.bQ,$.N],l)
H.a([],p)
o=new G.e("Ceramic Wrap",k,n,o,0)
$.$get$c().h(0,o)
$.As=o
o=H.a(["Fungal"],p)
n=$.w
k=H.a([$.b5,$.bS],l)
H.a([],p)
o=new G.e("Fungal",k,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["Thorny"],p)
n=$.J
k=H.a([$.b5,$.aZ],l)
H.a([],p)
o=new G.e("Thorny",k,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["Bulbed"],p)
n=$.J
k=H.a([$.b5,$.am],l)
H.a([],p)
o=new G.e("Bulbed",k,n,o,0)
$.$get$c().h(0,o)
$.Af=o
o=H.a(["Glass Cannon"],p)
n=$.t
k=H.a([$.b3,$.b1],l)
H.a([],p)
o=new G.e("Glass Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["Caoutchouc"],p)
n=$.t
k=H.a([$.b5,$.c2],l)
H.a([],p)
o=new G.e("Caoutchouc",k,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["Cellulose"],p)
n=$.w
k=H.a([$.b5,$.aN],l)
H.a([],p)
o=new G.e("Cellulose",k,n,o,0)
$.$get$c().h(0,o)
$.Ar=o
o=H.a(["Horrorcore"],p)
n=$.t
k=H.a([$.a7,$.b4],l)
H.a([],p)
o=new G.e("Horrorcore",k,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["Nightcore"],p)
n=$.t
k=H.a([$.bl,$.a7],l)
H.a([],p)
o=new G.e("Nightcore",k,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["Crazy Bus"],p)
n=$.t
k=H.a([$.bl,$.a2,$.a7],l)
H.a([],p)
o=new G.e("Crazy Bus",k,n,o,0)
$.$get$c().h(0,o)
$.AJ=o
o=H.a(["Burdock"],p)
n=$.w
k=H.a([$.b5,$.ce],l)
H.a([],p)
o=new G.e("Burdock",k,n,o,0)
$.$get$c().h(0,o)
$.Ah=o
o=H.a(["Necrotic"],p)
n=$.J
k=H.a([$.b9,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.w
k=H.a([$.b9,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.J
k=H.a([$.b9,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.t
k=H.a([$.b9,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.w
k=H.a([$.b9,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.t
k=H.a([$.b9,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.K
k=H.a([$.Y,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.w
k=H.a([$.Y,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.w
k=H.a([$.Y,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.J
k=H.a([$.Y,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.w
k=H.a([$.Y,$.bb],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.w
k=H.a([$.Y,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.t
k=H.a([$.Y,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.w
k=H.a([$.Y,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.t
k=H.a([$.Y,$.bE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.t
k=H.a([$.Y,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.an
k=H.a([$.Y,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.w
k=H.a([$.Y,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.w
k=H.a([$.Y,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.w
k=H.a([$.Y,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.t
k=H.a([$.Y,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.e("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.w
k=H.a([$.aN,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.t
k=H.a([$.N,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.w
k=H.a([$.N,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.t
k=H.a([$.N,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.t
k=H.a([$.Q,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.w
k=H.a([$.aG,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.t
k=H.a([$.aG,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.w
k=H.a([$.aG,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.w
k=H.a([$.aG,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.w
k=H.a([$.aG,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.w
k=H.a([$.aG,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.w
k=H.a([$.aG,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.w
k=H.a([$.aG,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.J
k=H.a([$.aG,$.ce],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.J
k=H.a([$.a0,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.J
k=H.a([$.Q,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.t
k=H.a([$.Q,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.K
k=H.a([$.Q,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.t
k=H.a([$.Q,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.t
k=H.a([$.Q,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.K
k=H.a([$.Q,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.J
k=H.a([$.Q,$.c9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.K
k=H.a([$.Q,$.bE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.K
k=H.a([$.Q,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.w
k=H.a([$.Q,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.e("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.w
k=H.a([$.Q,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.e("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.t
k=H.a([$.Q,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.w
k=H.a([$.Q,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.w
k=H.a([$.Q,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.w
k=H.a([$.Q,$.bb],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.w
k=H.a([$.Q,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.Q,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.w
k=H.a([$.Q,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.Q,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.w
k=H.a([$.Q,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.w
k=H.a([$.Q,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.an
k=H.a([$.a0,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.w
k=H.a([$.a3,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.w
k=H.a([$.b5,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.w
k=H.a([$.aN,$.Y],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.w
k=H.a([$.P,$.H],l)
H.a([],p)
$.$get$c().h(0,new G.e("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.K
k=H.a([$.a0,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.K
k=H.a([$.aW,$.aw,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.w
k=H.a([$.bl,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.t
k=H.a([$.bl,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.an
k=H.a([$.bl,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.an
k=H.a([$.a_,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.an
k=H.a([$.a0,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.e("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.w
k=H.a([$.a_,$.aN,$.bk,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.t
k=H.a([$.a_,$.de,$.Y,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.an
k=H.a([$.az,$.a3,$.aW,$.aK,$.b4],l)
H.a([],p)
o=new G.e("Queenly",k,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["Kingly"],p)
n=$.an
k=H.a([$.b4,$.am,$.c9,$.a3,$.aW],l)
H.a([],p)
o=new G.e("Kingly",k,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Jack"],p)
n=$.an
k=H.a([$.aZ,$.aH,$.D,$.az],l)
H.a([],p)
o=new G.e("Jack",k,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["Codpiece","Codtier"],p)
n=$.t
k=H.a([$.a_,$.aw,$.Y,$.P,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.t
k=H.a([$.a_,$.aI,$.N,$.D,$.a0,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.t
k=H.a([$.a_,$.aI,$.N,$.a0,$.P,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.t
k=H.a([$.a_,$.aM,$.N,$.a0,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.an
k=H.a([$.a_,$.b_,$.D,$.aZ,$.aH,$.em],l)
H.a([],p)
$.$get$c().h(0,new G.e("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.an
k=H.a([$.a_,$.N,$.bm,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.an
k=H.a([$.a_,$.a3,$.Q,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.an
k=H.a([$.a_,$.aK,$.b9,$.D,$.fd,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.an
k=H.a([$.a_,$.aG,$.ar,$.hj,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.J
k=H.a([$.a_,$.Q,$.bb,$.aJ,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.t
k=H.a([$.a_,$.D,$.bb,$.aJ,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.t
k=H.a([$.a_,$.aN,$.a2,$.az,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.t
k=H.a([$.a_,$.Q,$.a0,$.a3,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.t
k=H.a([$.a_,$.Q,$.a0,$.aJ,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.J
k=$.a_
j=$.N
i=$.a0
i=H.a([k,j,i,$.aI,i,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.w
i=H.a([$.a_,$.aJ,$.bQ,$.am,$.el,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.an
i=H.a([$.a_,$.aI,$.N,$.bm,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.an
i=H.a([$.a3,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.t
i=H.a([$.N,$.a0,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.t
i=H.a([$.a_,$.D,$.az,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.J
i=H.a([$.a_,$.D,$.b3,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.t
i=H.a([$.a_,$.aw,$.Y,$.ay,$.bk,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.t
i=H.a([$.a_,$.aF,$.D,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.t
i=H.a([$.a_,$.a2,$.N,$.aI,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.t
i=H.a([$.a_,$.Y,$.aA,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.an
i=H.a([$.a_,$.aW,$.bz,$.b_,$.a7,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.w
i=H.a([$.a_,$.b0,$.b3,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.w
i=H.a([$.a_,$.b_,$.bE,$.aG,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.an
i=H.a([$.a_,$.aK,$.aG,$.ar,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.an
i=H.a([$.a_,$.aE,$.bm,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.an
i=H.a([$.a_,$.D,$.a7,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.K
i=H.a([$.a_,$.b3,$.bX,$.b_,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.w
i=H.a([$.D,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.an
i=H.a([$.D,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.w
i=H.a([$.D,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.w
i=H.a([$.D,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.J
i=H.a([$.D,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.J
i=H.a([$.D,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.w
i=H.a([$.D,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.w
i=H.a([$.bQ,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.e("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.w
i=H.a([$.bQ,$.c2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.K
i=H.a([$.bQ,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.w
i=H.a([$.bQ,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.w
i=H.a([$.bQ,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.w
i=H.a([$.bQ,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.w
i=H.a([$.bQ,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.J
i=H.a([$.bQ,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.w
i=H.a([$.bQ,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.J
i=H.a([$.bQ,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.K
i=H.a([$.bR,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.J
i=H.a([$.bR,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.K
i=H.a([$.bR,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.J
i=H.a([$.bR,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.w
i=H.a([$.bR,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.J
i=H.a([$.bR,$.bb],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.an
i=H.a([$.bR,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.w
i=H.a([$.bR,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.w
i=H.a([$.bR,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.w
i=H.a([$.bR,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.an
i=H.a([$.Y,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.w
i=H.a([$.Y,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.e("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.w
i=H.a([$.Y,$.c2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.w
i=H.a([$.aN,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.t
i=H.a([$.c2,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.J
i=H.a([$.c2,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.t
i=H.a([$.c2,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.t
i=H.a([$.N,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.t
i=H.a([$.N,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.w
i=H.a([$.aG,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.w
i=H.a([$.aG,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.K
i=H.a([$.aG,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.K
i=H.a([$.bW,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.w
i=H.a([$.bW,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.K
i=H.a([$.bW,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.w
i=H.a([$.bW,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.w
i=H.a([$.bW,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.w
i=H.a([$.bW,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.K
i=H.a([$.bW,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.w
i=H.a([$.be,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.w
i=H.a([$.be,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.w
i=H.a([$.be,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.J
i=H.a([$.be,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.t
i=H.a([$.bl,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.w
i=H.a([$.bl,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.J
i=H.a([$.bl,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.t
i=H.a([$.bl,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.J
i=H.a([$.ce,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.w
i=H.a([$.ce,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.an
i=H.a([$.ce,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.w
i=H.a([$.ce,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.w
i=H.a([$.b5,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.J
i=H.a([$.b5,$.bE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.w
i=H.a([$.b5,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.w
i=H.a([$.b5,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.w
i=H.a([$.b5,$.bb],l)
H.a([],p)
$.$get$c().h(0,new G.e("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.w
i=H.a([$.b5,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.w
i=H.a([$.b5,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.J
i=H.a([$.b5,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.J
i=H.a([$.bz,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.w
i=H.a([$.bz,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.w
i=H.a([$.bz,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.w
i=H.a([$.bz,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.w
i=H.a([$.bz,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.w
i=H.a([$.bz,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.w
i=H.a([$.bz,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.tJ
i=H.a([$.bz,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.J
i=H.a([$.bz,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.K
i=H.a([$.bS,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.t
i=H.a([$.aH,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.t
i=H.a([$.aH,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.K
i=H.a([$.b4,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.t
i=H.a([$.b0,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.K
i=H.a([$.aE,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.w
i=H.a([$.aE,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.K
i=H.a([$.aE,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.t
i=H.a([$.c9,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.t
i=H.a([$.c9,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.t
i=H.a([$.b1,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.t
i=H.a([$.b1,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.an
i=H.a([$.b1,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.an
i=H.a([$.b1,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.J
i=H.a([$.b1,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.J
i=H.a([$.b1,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.an
i=H.a([$.b1,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.t
i=H.a([$.b1,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.t
i=H.a([$.b1,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.t
i=H.a([$.b1,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.J
i=H.a([$.b1,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.w
i=H.a([$.b_,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.w
i=H.a([$.a7,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.w
i=H.a([$.bE,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.w
i=H.a([$.bE,$.bb],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.an
i=H.a([$.bE,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.an
i=H.a([$.b_,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.J
i=H.a([$.b_,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.K
i=H.a([$.b_,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.J
i=H.a([$.b_,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.an
i=H.a([$.az,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.t
i=H.a([$.az,$.a3,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.J
i=H.a([$.az,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.K
i=H.a([$.az,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.t
i=H.a([$.az,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.an
i=H.a([$.az,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.an
i=H.a([$.bk,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.t
i=H.a([$.bk,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.t
i=H.a([$.bk,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.t
i=H.a([$.b0,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.J
i=H.a([$.bL,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.J
i=H.a([$.aM,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.t
i=H.a([$.aM,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.J
i=H.a([$.a2,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.t
i=H.a([$.aM,$.bb],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.J
i=H.a([$.aM,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.K
i=H.a([$.aM,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.t
i=H.a([$.bn,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.t
i=H.a([$.bn,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.t
i=H.a([$.bn,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.t
i=H.a([$.aM,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.t
i=H.a([$.bn,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.t
i=H.a([$.a2,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.t
i=H.a([$.bn,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.t
i=H.a([$.bn,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.J
i=H.a([$.bn,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.t
i=H.a([$.bn,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.t
i=H.a([$.bi,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.t
i=H.a([$.a3,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.J
i=H.a([$.a2,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.t
i=H.a([$.bm,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.t
i=H.a([$.bL,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.t
i=H.a([$.bL,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.t
i=H.a([$.bL,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.J
i=H.a([$.bL,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.J
i=H.a([$.bL,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.t
i=H.a([$.bL,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.J
i=H.a([$.a7,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.t
i=H.a([$.a7,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.t
i=H.a([$.a7,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.t
i=H.a([$.a7,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.an
i=H.a([$.a7,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.t
i=H.a([$.a7,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.t
i=H.a([$.a7,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.t
i=H.a([$.a7,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.t
i=H.a([$.a7,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.t
i=H.a([$.bm,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.t
i=H.a([$.bm,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.an
i=H.a([$.a0,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.t
i=H.a([$.bf,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.t
i=H.a([$.bf,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.t
i=H.a([$.bf,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.J
i=H.a([$.bf,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.K
i=H.a([$.aJ,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.J
i=H.a([$.b7,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.t
i=H.a([$.b7,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.K
i=H.a([$.aE,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.K
i=H.a([$.aO,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.K
i=H.a([$.aO,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.J
i=H.a([$.aA,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.J
i=H.a([$.a0,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.t
i=H.a([$.a0,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.t
i=H.a([$.aA,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.an
i=H.a([$.aO,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.J
i=H.a([$.a0,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.J
i=H.a([$.aO,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.J
i=H.a([$.aO,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.J
i=H.a([$.aO,$.aT,$.aI,$.jk],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.J
i=H.a([$.aE,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.J
i=H.a([$.aE,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.J
i=H.a([$.aE,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.J
i=H.a([$.a3,$.ar],l)
H.a([],p)
$.$get$c().h(0,new G.e("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.J
i=H.a([$.aE,$.b8,$.a2,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.w
i=H.a([$.D,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.t
i=H.a([$.b9,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.J
i=H.a([$.bR,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.t
i=H.a([$.Y,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.t
i=H.a([$.aN,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.J
i=H.a([$.c2,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.w
i=H.a([$.N,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.J
i=H.a([$.N,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.an
i=H.a([$.b3,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.J
i=H.a([$.be,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.J
i=H.a([$.aF,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.w
i=H.a([$.aO,$.ce],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.an
i=H.a([$.b5,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.J
i=H.a([$.b0,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.K
i=H.a([$.aW,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.an
i=H.a([$.bE,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.J
i=H.a([$.az,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.J
i=H.a([$.aF,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.J
i=H.a([$.aF,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.J
i=H.a([$.aF,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.J
i=H.a([$.aM,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.J
i=H.a([$.bb,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.J
i=H.a([$.bb,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.J
i=H.a([$.bb,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.J
i=H.a([$.aK,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.J
i=H.a([$.aT,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.J
i=H.a([$.aO,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.J
i=H.a([$.a3,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.J
i=H.a([$.P,$.H,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.J
i=H.a([$.P,$.H,$.aW,$.aw,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.J
i=H.a([$.P,$.H,$.aW,$.ce],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.J
i=H.a([$.aG,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.J
i=H.a([$.bz,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.J
i=H.a([$.b5,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.J
i=H.a([$.a3,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.J
i=H.a([$.b4,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.J
l=H.a([$.bQ,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chipped",l,n,o,0))
if($.wG==null){o=$.mq
n=$.aZ
l=$.aH
k=$.b9
j=new U.au(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a6(null,null,null,m),0,3)
j.N("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.wG=j}o=$.$get$aB();(o&&C.b).sm(o,0)
o=$.$get$aB()
n=$.Q
l=$.vY
k=new U.au(n,null,null,null,"Speedo",!1,P.a6(null,null,null,m),0,3)
k.N("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$aB()
o=$.em
n=$.aH
l=$.D
j=$.aZ
i=new U.au(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a6(null,null,null,m),0,3)
i.N("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aB()
k=$.tu
o=$.am
j=$.D
l=new U.au(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a6(null,null,null,m),0,3)
l.N("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$aB()
i=$.tF
k=$.b1
j=$.D
o=new U.au(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a6(null,null,null,m),0,3)
o.N("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$aB()
l=$.tB
i=$.b1
j=$.D
k=new U.au(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a6(null,null,null,m),0,3)
k.N("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$aB()
o=$.w8
l=$.b1
j=$.D
i=new U.au(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a6(null,null,null,m),0,3)
i.N("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aB()
k=$.vL
o=$.aZ
j=$.aH
l=$.D
n=new U.au(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a6(null,null,null,m),0,3)
n.N("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$aB()
i=$.tq
k=$.aZ
l=$.aH
j=$.D
o=new U.au(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a6(null,null,null,m),0,3)
o.N("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aB()
n=$.hl
i=$.am
j=$.bQ
l=new U.au(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a6(null,null,null,m),0,3)
l.N("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aB()
o=$.wb
n=$.aH
j=$.D
i=new U.au(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a6(null,null,null,m),0,3)
i.N("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$aB()
l=$.vO
o=$.aH
j=$.D
n=new U.au(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a6(null,null,null,m),0,3)
n.N("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$aB()
i=$.vV
l=$.aZ
j=$.D
o=new U.au(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a6(null,null,null,m),0,3)
o.N("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aB()
n=$.tA
i=$.bz
j=$.bl
l=new U.au(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a6(null,null,null,m),0,3)
l.N("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aB()
o=$.el
n=$.c9
j=$.aG
i=$.am
k=new U.au(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a6(null,null,null,m),0,3)
k.N("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aB()
l=$.tr
o=$.aN
i=$.bE
j=new U.au(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a6(null,null,null,m),0,3)
j.N("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$aB()
k=$.tz
l=$.D
i=$.aZ
o=new U.au(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a6(null,null,null,m),0,3)
o.N("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$aB()
j=$.we
k=$.Y
i=$.am
l=new U.au(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a6(null,null,null,m),0,3)
l.N("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$aB()
o=$.wg
j=$.bf
i=$.Q
k=new U.au(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a6(null,null,null,m),0,3)
k.N("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aB()
l=$.tn
o=$.b1
i=$.aG
j=$.Q
n=$.aZ
h=new U.au(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a6(null,null,null,m),0,3)
h.N("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$aB()
k=$.jk
l=$.Y
n=$.am
j=new U.au(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a6(null,null,null,m),0,3)
j.N("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$aB()
h=$.jj
k=$.Y
n=new U.au(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a6(null,null,null,m),0,3)
n.N("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$aB()
j=$.aI
h=$.N
k=$.am
l=new U.au(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a6(null,null,null,m),0,3)
l.N("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$aB()
n=$.w5
j=$.D
k=$.am
h=new U.au(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a6(null,null,null,m),0,3)
h.N("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$aB()
l=$.tl
n=$.aH
k=$.D
j=$.am
i=new U.au(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a6(null,null,null,m),0,3)
i.N("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.w2
l=$.Y
j=$.aZ
k=new U.au(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a6(null,null,null,m),0,3)
k.N("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.fd
h=$.D
j=$.am
l=new U.au(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a6(null,null,null,m),0,3)
l.N("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.vN
i=$.Y
j=$.am
h=new U.au(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a6(null,null,null,m),0,3)
h.N("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wh
k=$.aN
j=$.am
i=new U.au(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a6(null,null,null,m),0,3)
i.N("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wd
l=$.Y
j=$.b1
k=new U.au(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a6(null,null,null,m),0,3)
k.N("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.wa
h=$.D
j=$.aH
l=new U.au(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a6(null,null,null,m),0,3)
l.N("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.ty
i=$.D
j=$.b1
h=new U.au(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a6(null,null,null,m),0,3)
h.N("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.mt
k=$.D
j=$.bn
i=new U.au(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a6(null,null,null,m),0,3)
i.N("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.el
l=$.c2
j=$.am
k=new U.au(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a6(null,null,null,m),0,3)
k.N("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.wf
h=$.D
j=$.aZ
l=new U.au(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a6(null,null,null,m),0,3)
l.N("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.mp
i=$.N
j=$.aH
h=new U.au(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a6(null,null,null,m),0,3)
h.N("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.ts
k=$.D
j=$.am
i=new U.au(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a6(null,null,null,m),0,3)
i.N("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.e3
l=$.b7
j=$.Q
k=new U.au(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a6(null,null,null,m),0,3)
k.N("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.hk
h=$.D
j=$.bf
l=new U.au(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a6(null,null,null,m),0,3)
l.N("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.tI
i=$.D
j=$.am
h=new U.au(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a6(null,null,null,m),0,3)
h.N("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.w9
k=$.D
j=$.am
i=new U.au(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a6(null,null,null,m),0,3)
i.N("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.tH
l=$.Y
j=$.am
k=new U.au(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a6(null,null,null,m),0,3)
k.N("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.tC
h=$.Y
j=$.aM
l=new U.au(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a6(null,null,null,m),0,3)
l.N("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.tE
i=$.D
j=$.aH
h=new U.au(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a6(null,null,null,m),0,3)
h.N("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.mx
k=$.D
j=$.a0
i=new U.au(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a6(null,null,null,m),0,3)
i.N("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.hj
l=$.aG
j=$.c9
k=new U.au(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a6(null,null,null,m),0,3)
k.N("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.vX
h=$.Y
j=$.am
l=new U.au(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a6(null,null,null,m),0,3)
l.N("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.w1
i=$.D
j=$.aH
h=new U.au(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a6(null,null,null,m),0,3)
h.N("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.w7
k=$.D
j=$.aH
i=new U.au(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a6(null,null,null,m),0,3)
i.N("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.w6
l=$.D
j=$.c9
k=new U.au(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a6(null,null,null,m),0,3)
k.N("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.de
h=$.Y
j=$.am
m=new U.au(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a6(null,null,null,m),0,3)
m.N("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bH("Duttle","Dut",null,null)
$.$get$bO().push(m)
$.vu=m
m=new S.bH("Salamander","GLUB",null,null)
$.$get$bO().push(m)
$.tb=m
m=new S.bH("Crocodile","NAK",null,null)
$.$get$bO().push(m)
$.e0=m
m=new S.bH("Iguana","thip",null,null)
$.$get$bO().push(m)
$.eh=m
m=new S.bH("Turtle","click",null,null)
$.$get$bO().push(m)
$.f3=m
m=new S.bH("Skeleton","rattle",null,null)
$.$get$bO().push(m)
$.dJ=m
m=new S.bH("Robot","BEEP",null,null)
$.$get$bO().push(m)
$.f1=m
m=new S.bH("Chameleon","BLEP",null,null)
$.$get$bO().push(m)
$.ir=m
m=new S.bH("Axolotl","BARP",null,null)
$.$get$bO().push(m)
$.t5=m
m=new S.bH("Lizard","bleb",null,null)
$.$get$bO().push(m)
$.lI=m
m=new S.bH("Snake","hiss",null,null)
$.$get$bO().push(m)
$.td=m
m=new S.bH("Alligator","nak",null,null)
$.$get$bO().push(m)
$.ip=m
m=new S.bH("Mole","snuff",null,null)
$.$get$bO().push(m)
$.vv=m
m=new S.bH("Bird","tweet",null,null)
$.$get$bO().push(m)
$.lG=m
m=new S.bH("Wolf","howl",null,null)
$.$get$bO().push(m)
$.lN=m
m=new S.bH("Newt","skitter",null,null)
$.$get$bO().push(m)
$.vw=m
m=new S.bH("Spider","skitter",null,null)
$.$get$bO().push(m)
$.ix=m
m=new S.bH("Cupid","flappa",null,null)
$.$get$bO().push(m)
$.is=m
m=new S.bH("Dragon","roar",null,null)
$.$get$bO().push(m)
$.h7=m
m=new S.i8("Prospitian","murmur",null,null)
$.$get$bO().push(m)
$.zh=m
m=new S.i8("Dersite","mutter",null,null)
$.$get$bO().push(m)
$.ze=m
m=new S.m8("Horror Terror","a;lkjdf",null,null)
$.$get$bO().push(m)
$.zg=m
$.zi=H.a([$.td,$.ip,$.vw,$.tb,$.eh,$.e0,$.f3,$.ir,$.t5,$.lI],[S.bH])
$.hd=new T.c3(0,"spices")
m=$.zk
$.f_=new T.c3(m,"fresh baked bread")
$.cw=new T.c3(m,"sweetness")
$.c7=new T.c3(m,"nature")
$.lM=new T.c3(0,"salt")
k=$.zj
$.d1=new T.c3(k,"rot")
$.zf=new T.c3(k,"feet")
$.ej=new T.c3(0,"oil")
$.t7=new T.c3(0,"chlorine")
$.hb=new T.c3(0,"nothing in particular")
$.eg=new T.c3(0,"gunpowder")
$.ha=new T.c3(0,"must")
$.cC=new T.c3(m,"zoo animals")
$.e1=new T.c3(k,"sweat")
$.iw=new T.c3(0,"ozone")
$.c6=new T.c3(0,"deceit")
$.cL=new T.c3(k,"blood")
$.f2=new T.c3(k,"smoke")
$.c0=new K.bV(k,"creepy")
$.b2=new K.bV(m,"calm")
$.cc=new K.bV(k,"frantic")
$.lJ=new K.bV(0,"like nothing")
$.bP=new K.bV(m,"energizing")
$.cB=new K.bV(0,"studious")
$.dr=new K.bV(0,"dangerous")
$.dH=new K.bV(0,"glamorous")
$.hc=new K.bV(0,"romantic")
$.dq=new K.bV(m,"creative")
$.iv=new K.bV(0,"lucky")
$.ds=new K.bV(0,"happy")
$.dI=new K.bV(0,"heroic")
$.d3=new K.bV(k,"stupid")
$.iv=new K.bV(0,"lucky")
$.lH=new K.bV(0,"claustrophobic")
$.lK=new K.bV(0,"overheated")
$.dG=new K.bV(k,"confusing")
$.c5=new K.bV(0,"contemplatative")
$.cT=new M.bB(0,"clanking")
$.cv=new M.bB(0,"laughing")
$.bd=new M.bB(m,"rustling")
$.ek=new M.bB(k,"screaming")
$.it=new M.bB(k,"foot steps")
$.f0=new M.bB(k,"beeping")
$.vy=new M.bB(k,"whispering")
$.ef=new M.bB(0,"clacking")
$.cz=new M.bB(0,"applause")
$.ei=new M.bB(0,"jazz")
$.t9=new M.bB(0,"disco")
$.h8=new M.bB(0,"drums")
$.h9=new M.bB(0,"echoing")
$.lL=new M.bB(k,"roaring")
$.iu=new M.bB(k,"gunfire")
$.cA=new M.bB(0,"music")
$.tc=new M.bB(0,"singing")
$.t6=new M.bB(0,"chanting")
$.f4=new M.bB(0,"whistling")
$.dd=new M.bB(m,"nature")
$.t8=new M.bB(0,"croaking")
$.d2=new M.bB(0,"silence")
$.ta=new M.bB(0,"pulsing")
$.vx=new M.bB(0,"ticking")
m=H.a([],p)
o=[X.G,P.T]
n=A.X
l=E.I
k=[l]
j=[A.fO]
m=new S.mM(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.r(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Knight",3,!0,!1,!1)
$.FB=m
m=P.f(H.a([new E.I($.bZ,0.4,!1)],k),l)
i=H.a([],p)
m=new S.od(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.r(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Seer",6,!0,!1,!1)
$.FO=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kC("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.r(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Bard",9,!0,!1,!1)
$.Fv=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m4("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.r(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Heir",8,!0,!1,!1)
$.Fy=m
m=H.a([],p)
m=new U.n6(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.r(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Maid",0,!0,!1,!1)
$.FE=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.o1(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.r(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Rogue",4,!0,!1,!1)
$.FJ=m
m=H.a([],p)
m=new V.nD(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.r(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Page",1,!0,!1,!1)
$.FH=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.p7(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.r(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Thief",7,!0,!1,!1)
$.FR=m
m=P.f(H.a([new E.I($.bZ,0.1,!1)],k),l)
i=H.a([],p)
m=new R.oV(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.r(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Sylph",5,!0,!1,!1)
$.FQ=m
m=H.a([],p)
m=new N.nU("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.r(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Prince",10,!0,!1,!1)
$.FI=m
m=P.f(H.a([new E.I($.bZ,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pB("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.r(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Witch",11,!0,!1,!1)
$.FT=m
m=P.f(H.a([new E.I($.bZ,0.4,!1)],k),l)
i=H.a([],p)
m=new S.n5("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.r(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Mage",2,!0,!1,!1)
$.FD=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.f(H.a([new E.I($.bZ,3,!1),new E.I($.ou,-2,!1)],k),l)
e=H.a([],p)
m=new E.px("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.r(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Waste",12,!1,!1,!1)
$.FS=m
m=H.a([],p)
m=new Y.o9("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.r(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Scout",13,!1,!1,!1)
$.FM=m
m=P.f(H.a([new E.I($.bZ,0.5,!1)],k),l)
i=H.a([],p)
m=new L.oa("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.r(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Scribe",15,!1,!1,!1)
$.FN=m
m=P.f(H.a([new E.I($.bZ,0.5,!1)],k),l)
i=H.a([],p)
m=new E.o6(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.r(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Sage",14,!1,!1,!1)
$.FK=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.m2("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.r(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Guide",16,!1,!1,!1)
$.Fx=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.f(H.a([new E.I($.bZ,3,!1)],k),l)
g=H.a([],p)
m=new Y.m1(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.r(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Grace",17,!1,!1,!1)
$.Fw=m
m=P.f(H.a([new E.I($.bZ,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nh("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.r(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Muse",18,!1,!1,!1)
$.FF=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.E(null,null,n)
h=P.f(H.a([new E.I($.bZ,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.n3("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.r(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Lord",19,!1,!1,!1)
$.FC=m
m=P.f(H.a([new E.I($.bZ,-0.1,!1),new E.I($.d6,1,!1)],k),l)
i=H.a([],p)
m=new Y.ok("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.r(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Smith",20,!1,!1,!1)
$.FP=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.f(H.a([new E.I($.bZ,4,!1),new E.I($.ou,-3,!1)],k),l)
e=H.a([],p)
m=new X.mc("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.r(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Human",21,!1,!1,!0)
$.Fz=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.f(H.a([new E.I($.bZ,41.3,!1),new E.I($.ou,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.md(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.r(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Hussie",22,!1,!0,!0)
$.FA=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.o7(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.r(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.E(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Sans",23,!1,!0,!0)
$.FL=m
$.FG=T.Fu("Null",255,!1,!0,!1)
m=A.dZ
i=P.F
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#00ff00"),!0)
h.j(0,$.ac,L.d("#EFEFEF"),!0)
h.j(0,$.ab,L.d("#DEDEDE"),!0)
h.j(0,$.al,L.d("#FF2106"),!0)
h.j(0,$.ak,L.d("#B01200"),!0)
h.j(0,$.ae,L.d("#2F2F30"),!0)
h.j(0,$.af,L.d("#1D1D1D"),!0)
h.j(0,$.ad,L.d("#080808"),!0)
h.j(0,$.aj,L.d("#030303"),!0)
h.j(0,$.ai,L.d("#242424"),!0)
h.j(0,$.ah,L.d("#333333"),!0)
h.j(0,$.ag,L.d("#141414"),!0)
g=P.f(H.a(["Frogs"],p),q)
f=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.f(H.a([new E.I($.d6,2,!0),new E.I($.dQ,1,!0),new E.I($.cY,-2,!0)],k),l)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new N.on(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(0,"Space",!0,!1,!1)
$.yB=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#ff0000"),!0)
a.j(0,$.ac,L.d("#FF2106"),!0)
a.j(0,$.ab,L.d("#AD1604"),!0)
a.j(0,$.al,L.d("#030303"),!0)
a.j(0,$.ak,L.d("#242424"),!0)
a.j(0,$.ae,L.d("#510606"),!0)
a.j(0,$.af,L.d("#3C0404"),!0)
a.j(0,$.ad,L.d("#1F0000"),!0)
a.j(0,$.aj,L.d("#B70D0E"),!0)
a.j(0,$.ai,L.d("#970203"),!0)
a.j(0,$.ah,L.d("#8E1516"),!0)
a.j(0,$.ag,L.d("#640707"),!0)
b=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.f(H.a([new E.I($.eA,2,!0),new E.I($.cY,1,!0),new E.I($.dP,-2,!0)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new N.p8(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(1,"Time",!0,!1,!1)
$.yE=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#3399ff"),!0)
h.j(0,$.ac,L.d("#10E0FF"),!0)
h.j(0,$.ab,L.d("#00A4BB"),!0)
h.j(0,$.al,L.d("#FEFD49"),!0)
h.j(0,$.ak,L.d("#D6D601"),!0)
h.j(0,$.ae,L.d("#0052F3"),!0)
h.j(0,$.af,L.d("#0046D1"),!0)
h.j(0,$.ad,L.d("#003396"),!0)
h.j(0,$.aj,L.d("#0087EB"),!0)
h.j(0,$.ai,L.d("#0070ED"),!0)
h.j(0,$.ah,L.d("#006BE1"),!0)
h.j(0,$.ag,L.d("#0054B0"),!0)
g=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.f(H.a([new E.I($.cY,2,!0),new E.I($.bY,1,!0),new E.I($.dQ,-1,!0),new E.I($.dv,-1,!0),new E.I($.bZ,0.05,!1)],k),l)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new T.kL(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(2,"Breath",!0,!1,!1)
$.yf=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#003300"),!0)
a.j(0,$.ac,L.d("#0F0F0F"),!0)
a.j(0,$.ab,L.d("#010101"),!0)
a.j(0,$.al,L.d("#E8C15E"),!0)
a.j(0,$.ak,L.d("#C7A140"),!0)
a.j(0,$.ae,L.d("#1E211E"),!0)
a.j(0,$.af,L.d("#141614"),!0)
a.j(0,$.ad,L.d("#0B0D0B"),!0)
a.j(0,$.aj,L.d("#204020"),!0)
a.j(0,$.ai,L.d("#11200F"),!0)
a.j(0,$.ah,L.d("#192C16"),!0)
a.j(0,$.ag,L.d("#121F10"),!0)
b=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.f(H.a([new E.I($.d6,2,!0),new E.I($.dP,1,!0),new E.I($.eA,-1,!0),new E.I($.dQ,-1,!0),new E.I($.bZ,0.01,!1)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new U.ld(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(3,"Doom",!0,!1,!1)
$.yh=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#993300"),!0)
h.j(0,$.ac,L.d("#BA1016"),!0)
h.j(0,$.ab,L.d("#820B0F"),!0)
h.j(0,$.al,L.d("#381B76"),!0)
h.j(0,$.ak,L.d("#1E0C47"),!0)
h.j(0,$.ae,L.d("#290704"),!0)
h.j(0,$.af,L.d("#230200"),!0)
h.j(0,$.ad,L.d("#110000"),!0)
h.j(0,$.aj,L.d("#3D190A"),!0)
h.j(0,$.ai,L.d("#2C1207"),!0)
h.j(0,$.ah,L.d("#5C2913"),!0)
h.j(0,$.ag,L.d("#4C1F0D"),!0)
g=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.f(H.a([new E.I($.dv,2,!0),new E.I($.bY,1,!0),new E.I($.d6,-2,!0)],k),l)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new T.kI(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(4,"Blood",!0,!1,!1)
$.ye=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#ff3399"),!0)
a.j(0,$.ac,L.d("#BD1864"),!0)
a.j(0,$.ab,L.d("#780F3F"),!0)
a.j(0,$.al,L.d("#1D572E"),!0)
a.j(0,$.ak,L.d("#11371D"),!0)
a.j(0,$.ae,L.d("#4C1026"),!0)
a.j(0,$.af,L.d("#3C0D1F"),!0)
a.j(0,$.ad,L.d("#260914"),!0)
a.j(0,$.aj,L.d("#6B0829"),!0)
a.j(0,$.ai,L.d("#4A0818"),!0)
a.j(0,$.ah,L.d("#55142A"),!0)
a.j(0,$.ag,L.d("#3D0E1E"),!0)
b=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.f(H.a([new E.I($.dv,1,!0),new E.i6(null,1,!0)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new T.m3(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(5,"Heart",!0,!1,!1)
$.yk=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#3da35a"),!0)
h.j(0,$.ac,L.d("#06FFC9"),!0)
h.j(0,$.ab,L.d("#04A885"),!0)
h.j(0,$.al,L.d("#6E0E2E"),!0)
h.j(0,$.ak,L.d("#4A0818"),!0)
h.j(0,$.ae,L.d("#1D572E"),!0)
h.j(0,$.af,L.d("#164524"),!0)
h.j(0,$.ad,L.d("#11371D"),!0)
h.j(0,$.aj,L.d("#3DA35A"),!0)
h.j(0,$.ai,L.d("#2E7A43"),!0)
h.j(0,$.ah,L.d("#3B7E4F"),!0)
h.j(0,$.ag,L.d("#265133"),!0)
g=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.f(H.a([new E.I($.dP,2,!0),new E.I($.eA,1,!0),new E.I($.d6,-2,!0)],k),l)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new V.nf(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(6,"Mind",!0,!1,!1)
$.ys=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#ff9933"),!0)
a.j(0,$.ac,L.d("#FEFD49"),!0)
a.j(0,$.ab,L.d("#FEC910"),!0)
a.j(0,$.al,L.d("#10E0FF"),!0)
a.j(0,$.ak,L.d("#00A4BB"),!0)
a.j(0,$.ae,L.d("#FA4900"),!0)
a.j(0,$.af,L.d("#E94200"),!0)
a.j(0,$.ad,L.d("#C33700"),!0)
a.j(0,$.aj,L.d("#FF8800"),!0)
a.j(0,$.ai,L.d("#D66E04"),!0)
a.j(0,$.ah,L.d("#E76700"),!0)
a.j(0,$.ag,L.d("#CA5B00"),!0)
b=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.f(H.a([new E.I($.fr,2,!0),new E.I($.dP,1,!0),new E.I($.bY,-1,!0),new E.I($.dQ,-1,!0),new E.I($.bZ,0.2,!1)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new G.mQ(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(7,"Light",!0,!1,!1)
$.yq=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#000066"),!0)
h.j(0,$.ac,L.d("#0B1030"),!0)
h.j(0,$.ab,L.d("#04091A"),!0)
h.j(0,$.al,L.d("#CCC4B5"),!0)
h.j(0,$.ak,L.d("#A89F8D"),!0)
h.j(0,$.ae,L.d("#00164F"),!0)
h.j(0,$.af,L.d("#00103C"),!0)
h.j(0,$.ad,L.d("#00071A"),!0)
h.j(0,$.aj,L.d("#033476"),!0)
h.j(0,$.ai,L.d("#02285B"),!0)
h.j(0,$.ah,L.d("#004CB2"),!0)
h.j(0,$.ag,L.d("#003E91"),!0)
g=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.f(H.a([new E.fJ(D.uy(),null,3,!0),new E.fJ(D.uy(),null,-1,!0),new E.I($.eA,-1,!0),new E.I($.bZ,0.2,!1)],k),l)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new Q.pw(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(8,"Void",!0,!1,!1)
$.yG=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#9900cc"),!0)
a.j(0,$.ac,L.d("#974AA7"),!0)
a.j(0,$.ab,L.d("#6B347D"),!0)
a.j(0,$.al,L.d("#3D190A"),!0)
a.j(0,$.ak,L.d("#2C1207"),!0)
a.j(0,$.ae,L.d("#7C3FBA"),!0)
a.j(0,$.af,L.d("#6D34A6"),!0)
a.j(0,$.ad,L.d("#592D86"),!0)
a.j(0,$.aj,L.d("#381B76"),!0)
a.j(0,$.ai,L.d("#1E0C47"),!0)
a.j(0,$.ah,L.d("#281D36"),!0)
a.j(0,$.ag,L.d("#1D1526"),!0)
b=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.I($.eB,2,!0),new E.I($.cY,1,!0),new E.I($.bY,-1,!0),new E.I($.dv,-1,!0),new E.I($.bZ,0.01,!1)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new E.nW(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(9,"Rage",!0,!1,!1)
$.yw=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#ffcc66"),!0)
h.j(0,$.ac,L.d("#FDF9EC"),!0)
h.j(0,$.ab,L.d("#D6C794"),!0)
h.j(0,$.al,L.d("#164524"),!0)
h.j(0,$.ak,L.d("#06280C"),!0)
h.j(0,$.ae,L.d("#FFC331"),!0)
h.j(0,$.af,L.d("#F7BB2C"),!0)
h.j(0,$.ad,L.d("#DBA523"),!0)
h.j(0,$.aj,L.d("#FFE094"),!0)
h.j(0,$.ai,L.d("#E8C15E"),!0)
h.j(0,$.ah,L.d("#F6C54A"),!0)
h.j(0,$.ag,L.d("#EDAF0C"),!0)
g=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.f(H.a([new E.I($.bY,2,!0),new E.I($.fr,1,!0),new E.fJ(D.uy(),null,-2,!0)],k),l)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new X.m7(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(10,"Hope",!0,!1,!1)
$.ym=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#494132"),!0)
a.j(0,$.ac,L.d("#76C34E"),!0)
a.j(0,$.ab,L.d("#4F8234"),!0)
a.j(0,$.al,L.d("#00164F"),!0)
a.j(0,$.ak,L.d("#00071A"),!0)
a.j(0,$.ae,L.d("#605542"),!0)
a.j(0,$.af,L.d("#494132"),!0)
a.j(0,$.ad,L.d("#2D271E"),!0)
a.j(0,$.aj,L.d("#CCC4B5"),!0)
a.j(0,$.ai,L.d("#A89F8D"),!0)
a.j(0,$.ah,L.d("#A29989"),!0)
a.j(0,$.ag,L.d("#918673"),!0)
b=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.f(H.a([new E.I($.dQ,2,!0),new E.I($.eB,1,!0),new E.I($.d6,-2,!0)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new K.mP(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(11,"Life",!0,!1,!1)
$.yp=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#9630BF"),!0)
h.j(0,$.ac,L.d("#cc87e8"),!0)
h.j(0,$.ab,L.d("#9545b7"),!0)
h.j(0,$.al,L.d("#ae769b"),!0)
h.j(0,$.ak,L.d("#8f577c"),!0)
h.j(0,$.ae,L.d("#9630bf"),!0)
h.j(0,$.af,L.d("#693773"),!0)
h.j(0,$.ad,L.d("#4c2154"),!0)
h.j(0,$.aj,L.d("#fcf9bd"),!0)
h.j(0,$.ai,L.d("#e0d29e"),!0)
h.j(0,$.ah,L.d("#bdb968"),!0)
h.j(0,$.ag,L.d("#ab9b55"),!0)
g=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.f(H.a([new E.I($.d6,3,!0),new E.I($.bY,-2,!0)],k),l)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new Z.le(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(12,"Dream",!1,!1,!1)
$.yi=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#9630BF"),!0)
a.j(0,$.ac,L.d("#cc87e8"),!0)
a.j(0,$.ab,L.d("#9545b7"),!0)
a.j(0,$.al,L.d("#ae769b"),!0)
a.j(0,$.ak,L.d("#8f577c"),!0)
a.j(0,$.ae,L.d("#9630bf"),!0)
a.j(0,$.af,L.d("#693773"),!0)
a.j(0,$.ad,L.d("#4c2154"),!0)
a.j(0,$.aj,L.d("#fcf9bd"),!0)
a.j(0,$.ai,L.d("#e0d29e"),!0)
a.j(0,$.ah,L.d("#bdb968"),!0)
a.j(0,$.ag,L.d("#ab9b55"),!0)
b=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.f(H.a([new E.I($.d6,3,!0),new E.I($.bY,-2,!0)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new Q.mN(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(13,"Law",!1,!0,!0)
$.yo=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#ffff00"),!0)
h.j(0,$.ac,L.d("#ffff00"),!0)
h.j(0,$.ab,L.d("#ffff00"),!0)
h.j(0,$.al,L.d("#508b2d"),!0)
h.j(0,$.ak,L.d("#316c0d"),!0)
h.j(0,$.ae,L.d("#dddd00"),!0)
h.j(0,$.af,L.d("#afaf00"),!0)
h.j(0,$.ad,L.d("#8f8f00"),!0)
h.j(0,$.aj,L.d("#ff0000"),!0)
h.j(0,$.ai,L.d("#a8000a"),!0)
h.j(0,$.ah,L.d("#b8151f"),!0)
h.j(0,$.ag,L.d("#8c1d1d"),!0)
g=P.f(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
f=P.f(H.a(["Juice","Joke","Jespacito"],p),q)
e=P.f(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
d=P.f(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
c=P.f(H.a([new E.I($.bZ,13,!0)],k),l)
b=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
b.j(0,$.aa,L.d("#FF9B00"),!0)
b.j(0,$.ac,L.d("#FF9B00"),!0)
b.j(0,$.ab,L.d("#FF8700"),!0)
b.j(0,$.al,L.d("#7F7F7F"),!0)
b.j(0,$.ak,L.d("#727272"),!0)
b.j(0,$.ae,L.d("#A3A3A3"),!0)
b.j(0,$.af,L.d("#999999"),!0)
b.j(0,$.ad,L.d("#898989"),!0)
b.j(0,$.aj,L.d("#EFEFEF"),!0)
b.j(0,$.ai,L.d("#DBDBDB"),!0)
b.j(0,$.ah,L.d("#C6C6C6"),!0)
b.j(0,$.ag,L.d("#ADADAD"),!0)
b=new Z.mJ(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
b.W(14,"Juice",!1,!1,!0)
$.yn=b
b=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
b.j(0,$.aa,L.d("#00ff00"),!0)
b.j(0,$.ac,L.d("#00ff00"),!0)
b.j(0,$.ab,L.d("#00ff00"),!0)
b.j(0,$.al,L.d("#00ff00"),!0)
b.j(0,$.ak,L.d("#00cf00"),!0)
b.j(0,$.ae,L.d("#171717"),!0)
b.j(0,$.af,L.d("#080808"),!0)
b.j(0,$.ad,L.d("#080808"),!0)
b.j(0,$.aj,L.d("#616161"),!0)
b.j(0,$.ai,L.d("#3b3b3b"),!0)
b.j(0,$.ah,L.d("#4a4a4a"),!0)
b.j(0,$.ag,L.d("#292929"),!0)
c=P.f(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
d=P.f(H.a(["Shogun"],p),q)
e=P.f(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.I($.eB,13,!0)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new K.o8(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(15,"Sauce",!1,!0,!1)
$.yz=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#933100"),!0)
h.j(0,$.ac,L.d("#933100"),!0)
h.j(0,$.ab,L.d("#682200"),!0)
h.j(0,$.al,L.d("#4c3a27"),!0)
h.j(0,$.ak,L.d("#302418"),!0)
h.j(0,$.ae,L.d("#a0562b"),!0)
h.j(0,$.af,L.d("#723e20"),!0)
h.j(0,$.ad,L.d("#442513"),!0)
h.j(0,$.aj,L.d("#963c07"),!0)
h.j(0,$.ai,L.d("#682a06"),!0)
h.j(0,$.ah,L.d("#6d4d3a"),!0)
h.j(0,$.ag,L.d("#422e23"),!0)
g=P.f(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),q)
f=P.f(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),q)
e=P.f(H.a(["Electricity","Tazerface","Rebelions","Metaphors","Ravagers"],p),q)
d=P.f(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
c=P.f(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
b=P.f(H.a([new E.I($.cY,10,!0),new E.I($.bY,-2,!0)],k),l)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new L.oX(2,0.7,0.7,h,g,f,e,d,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",c,["Lightning","Ice","Taserface"],["Taser"],b,0.01,0.01,0.01,0.5,16,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(16,"Taze",!1,!1,!0)
$.yD=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#990000"),!0)
a.j(0,$.ac,L.d("#ff0200"),!0)
a.j(0,$.ab,L.d("#dd0000"),!0)
a.j(0,$.al,L.d("#25334f"),!0)
a.j(0,$.ak,L.d("#07090f"),!0)
a.j(0,$.ae,L.d("#c64f4f"),!0)
a.j(0,$.af,L.d("#a33f3f"),!0)
a.j(0,$.ad,L.d("#843333"),!0)
a.j(0,$.aj,L.d("#b5c1d2"),!0)
a.j(0,$.ai,L.d("#939dac"),!0)
a.j(0,$.ah,L.d("#3c3e42"),!0)
a.j(0,$.ag,L.d("#202123"),!0)
b=P.f(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
c=P.f(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
d=P.f(H.a(["Yondu","Empathy","Arrows","Emotions","Ravagers"],p),q)
e=P.f(H.a(["Empathetic","Arrowed","Emotional","Literal","Ravaging"],p),q)
f=P.f(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
g=P.f(H.a([new E.I($.cY,2,!0),new E.I($.bY,5,!0)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new V.o3(0.9,1.1,2,a,b,c,d,e,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",f,["Arrow","Yondu","Empathy"],["Arrow","Bow"],g,0.01,0.01,0.01,0.5,17,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(17,"Rule",!1,!1,!0)
$.yy=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#853dcc"),!0)
h.j(0,$.ac,L.d("#f76261"),!0)
h.j(0,$.ab,L.d("#913a39"),!0)
h.j(0,$.al,L.d("#ab4443"),!0)
h.j(0,$.ak,L.d("#78302f"),!0)
h.j(0,$.ae,L.d("#a54cff"),!0)
h.j(0,$.af,L.d("#8c41d9"),!0)
h.j(0,$.ad,L.d("#7335b3"),!0)
h.j(0,$.aj,L.d("#853dcc"),!0)
h.j(0,$.ai,L.d("#642e99"),!0)
h.j(0,$.ah,L.d("#4c2375"),!0)
h.j(0,$.ag,L.d("#2b1442"),!0)
g=P.f(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),q)
f=P.f(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
e=P.f(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),q)
d=P.f(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),q)
c=P.f(H.a([new E.I($.cY,15,!0),new E.I($.bY,-4,!0)],k),l)
b=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
b.j(0,$.aa,L.d("#FF9B00"),!0)
b.j(0,$.ac,L.d("#FF9B00"),!0)
b.j(0,$.ab,L.d("#FF8700"),!0)
b.j(0,$.al,L.d("#7F7F7F"),!0)
b.j(0,$.ak,L.d("#727272"),!0)
b.j(0,$.ae,L.d("#A3A3A3"),!0)
b.j(0,$.af,L.d("#999999"),!0)
b.j(0,$.ad,L.d("#898989"),!0)
b.j(0,$.aj,L.d("#EFEFEF"),!0)
b.j(0,$.ai,L.d("#DBDBDB"),!0)
b.j(0,$.ah,L.d("#C6C6C6"),!0)
b.j(0,$.ag,L.d("#ADADAD"),!0)
b=new V.m5(3.1,2,0.7,h,g,f,e,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",d,["Hippo","Ranting"],["Vent"],c,0.01,0.01,0.01,0.5,18,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Hippo",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
b.W(18,"Hippo",!1,!1,!0)
$.yl=b
b=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
b.j(0,$.aa,L.d("#959595"),!0)
b.j(0,$.ac,L.d("#bfbfbf"),!0)
b.j(0,$.ab,L.d("#959595"),!0)
b.j(0,$.al,L.d("#805233"),!0)
b.j(0,$.ak,L.d("#663c1f"),!0)
b.j(0,$.ae,L.d("#805233"),!0)
b.j(0,$.af,L.d("#737373"),!0)
b.j(0,$.ad,L.d("#664d3c"),!0)
b.j(0,$.aj,L.d("#663c1f"),!0)
b.j(0,$.ai,L.d("#4d2d17"),!0)
b.j(0,$.ah,L.d("#68594e"),!0)
b.j(0,$.ag,L.d("#4f443b"),!0)
c=P.f(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),q)
d=P.f(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),q)
e=P.f(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),q)
f=P.f(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),q)
g=P.f(H.a([new E.I($.cY,5,!0),new E.I($.bY,5,!0)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new L.kG(0.7,2,3.1,b,c,d,e,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",f,["Bear","Thought"],["Doorway"],g,0.01,0.01,0.01,0.5,19,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Bear",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(19,"Bear",!1,!1,!0)
$.yd=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#ebd837"),!0)
h.j(0,$.ac,L.d("#ebd837"),!0)
h.j(0,$.ab,L.d("#857a1f"),!0)
h.j(0,$.al,L.d("#857a1f"),!0)
h.j(0,$.ak,L.d("#524b13"),!0)
h.j(0,$.ae,L.d("#d0c217"),!0)
h.j(0,$.af,L.d("#9e9311"),!0)
h.j(0,$.ad,L.d("#6b640c"),!0)
h.j(0,$.aj,L.d("#c3c3c3"),!0)
h.j(0,$.ai,L.d("#8f8f8f"),!0)
h.j(0,$.ah,L.d("#a88e00"),!0)
h.j(0,$.ag,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
f=P.f(H.a(["STONE","Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
e=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
d=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt","Stone"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.I($.dP,2,!0),new E.I($.eA,1,!0),new E.I($.d6,-2,!0)],k),l)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new A.ng(0.3,0.3,1,h,g,f,e,d,["stone","mind","decisions","consequences","free will","path","neurons","causality"],["stone","mind","coin","plan","mask","map","brain","circuit"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,b,0.01,0.01,0.01,0.5,20,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Mindstone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(20,"Mindstone",!1,!0,!0)
$.yt=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#74a4ff"),!0)
a.j(0,$.ac,L.d("#74a4ff"),!0)
a.j(0,$.ab,L.d("#466299"),!0)
a.j(0,$.al,L.d("#466299"),!0)
a.j(0,$.ak,L.d("#2f4166"),!0)
a.j(0,$.ae,L.d("#d0c217"),!0)
a.j(0,$.af,L.d("#9e9311"),!0)
a.j(0,$.ad,L.d("#6b640c"),!0)
a.j(0,$.aj,L.d("#c3c3c3"),!0)
a.j(0,$.ai,L.d("#8f8f8f"),!0)
a.j(0,$.ah,L.d("#a88e00"),!0)
a.j(0,$.ag,L.d("#756300"),!0)
b=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
c=P.f(H.a(["Frogs","Stone"],p),q)
d=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush","Stone"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.I($.d6,2,!0),new E.I($.dQ,1,!0),new E.I($.cY,-2,!0)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new A.oo(0.5,1,0.5,a,b,c,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",e,f,["stone","space","commitment","creation","room","stars","galaxy","black hole","super nova"],["stone","space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],g,0.01,0.01,0.01,0.5,21,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Spacestone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(21,"Spacestone",!1,!0,!0)
$.yC=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#9846cc"),!0)
h.j(0,$.ac,L.d("#9846cc"),!0)
h.j(0,$.ab,L.d("#4c2366"),!0)
h.j(0,$.al,L.d("#4c2366"),!0)
h.j(0,$.ak,L.d("#261233"),!0)
h.j(0,$.ae,L.d("#d0c217"),!0)
h.j(0,$.af,L.d("#9e9311"),!0)
h.j(0,$.ad,L.d("#6b640c"),!0)
h.j(0,$.aj,L.d("#c3c3c3"),!0)
h.j(0,$.ai,L.d("#8f8f8f"),!0)
h.j(0,$.ah,L.d("#a88e00"),!0)
h.j(0,$.ag,L.d("#756300"),!0)
g=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial","Stone"],p),q)
f=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible","Stone"],p),q)
c=P.f(H.a([new E.I($.eB,2,!0),new E.I($.cY,1,!0),new E.I($.bY,-1,!0),new E.I($.dv,-1,!0),new E.I($.bZ,0.01,!1)],k),l)
b=P.f(H.a(["Paradox Space"],p),q)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new A.nR(1,1,0.01,h,g,f,e,d,["stone","rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["stone","rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,b,0.01,0.01,0.01,0.5,22,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Powerstone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(22,"Powerstone",!1,!0,!0)
$.yv=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#ffcb6f"),!0)
a.j(0,$.ac,L.d("#ffcb6f"),!0)
a.j(0,$.ab,L.d("#997a42"),!0)
a.j(0,$.al,L.d("#997a42"),!0)
a.j(0,$.ak,L.d("#66512c"),!0)
a.j(0,$.ae,L.d("#d0c217"),!0)
a.j(0,$.af,L.d("#9e9311"),!0)
a.j(0,$.ad,L.d("#6b640c"),!0)
a.j(0,$.aj,L.d("#c3c3c3"),!0)
a.j(0,$.ai,L.d("#8f8f8f"),!0)
a.j(0,$.ah,L.d("#a88e00"),!0)
a.j(0,$.ag,L.d("#756300"),!0)
b=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters","Stone"],p),q)
c=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Stone","Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.I($.dv,1,!0),new E.i6(null,1,!0)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new A.om(0.3,0.6,0.01,a,b,c,d,e,["stone","heart","identity","emotion","core","beat","shadow"],["stone","heart","doll","locket","mirror","mask","shades","sculpture"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",f,g,0.01,0.01,0.01,0.5,23,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Soulstone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(23,"Soulstone",!1,!0,!0)
$.yA=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#7ac476"),!0)
h.j(0,$.ac,L.d("#7ac476"),!0)
h.j(0,$.ab,L.d("#3a5e39"),!0)
h.j(0,$.al,L.d("#3a5e39"),!0)
h.j(0,$.ak,L.d("#1b2b1a"),!0)
h.j(0,$.ae,L.d("#d0c217"),!0)
h.j(0,$.af,L.d("#9e9311"),!0)
h.j(0,$.ad,L.d("#6b640c"),!0)
h.j(0,$.aj,L.d("#c3c3c3"),!0)
h.j(0,$.ai,L.d("#8f8f8f"),!0)
h.j(0,$.ah,L.d("#a88e00"),!0)
h.j(0,$.ag,L.d("#756300"),!0)
g=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums","Stone"],p),q)
f=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Stone","Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.I($.eA,2,!0),new E.I($.cY,1,!0),new E.I($.dP,-2,!0)],k),l)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new A.pd(0.51,1,0.01,0.7,h,g,f,e,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,["stone","time","speed","inevitability","paradoxes","rhythm"],["stone","time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],b,0.01,0.01,0.01,0.5,24,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Timestone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(24,"Timestone",!1,!0,!0)
$.yF=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#ed1c24"),!0)
a.j(0,$.ac,L.d("#ed1c24"),!0)
a.j(0,$.ab,L.d("#820a0f"),!0)
a.j(0,$.al,L.d("#820a0f"),!0)
a.j(0,$.ak,L.d("#4f0609"),!0)
a.j(0,$.ae,L.d("#d0c217"),!0)
a.j(0,$.af,L.d("#9e9311"),!0)
a.j(0,$.ad,L.d("#6b640c"),!0)
a.j(0,$.aj,L.d("#c3c3c3"),!0)
a.j(0,$.ai,L.d("#8f8f8f"),!0)
a.j(0,$.ah,L.d("#a88e00"),!0)
a.j(0,$.ag,L.d("#756300"),!0)
b=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance","Stone"],p),q)
c=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze","Stone"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.I($.fr,2,!0),new E.I($.dP,1,!0),new E.I($.bY,-1,!0),new E.I($.dQ,-1,!0),new E.I($.bZ,0.2,!1)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new A.nY(1.01,0.5,0.01,a,b,c,d,e,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["stone","light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],f,g,0.01,0.01,0.01,0.5,25,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Realitystone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(25,"Realitystone",!1,!0,!0)
$.yx=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#e19aca"),!0)
h.j(0,$.ac,L.d("#e19aca"),!0)
h.j(0,$.ab,L.d("#7a546e"),!0)
h.j(0,$.al,L.d("#7a546e"),!0)
h.j(0,$.ak,L.d("#473140"),!0)
h.j(0,$.ae,L.d("#d0c217"),!0)
h.j(0,$.af,L.d("#9e9311"),!0)
h.j(0,$.ad,L.d("#6b640c"),!0)
h.j(0,$.aj,L.d("#c3c3c3"),!0)
h.j(0,$.ai,L.d("#8f8f8f"),!0)
h.j(0,$.ah,L.d("#a88e00"),!0)
h.j(0,$.ag,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Gauntlet","Infinite","Mind","Space","Power","Soul","Time","Reality"],p),q)
f=P.f(H.a(["THANOS CAR","GAUNTLET HOLDER","STONE COLLECTOR"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Stone","Infinite","Gauntlet","Thanos","Mind","Space","Power","Soul","Time","Reality"],p),q)
c=P.f(H.a([new E.I($.bY,-1,!0),new E.I($.eB,2,!0)],k),l)
b=P.f(H.a(["Paradox Space"],p),q)
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#FF9B00"),!0)
a.j(0,$.ac,L.d("#FF9B00"),!0)
a.j(0,$.ab,L.d("#FF8700"),!0)
a.j(0,$.al,L.d("#7F7F7F"),!0)
a.j(0,$.ak,L.d("#727272"),!0)
a.j(0,$.ae,L.d("#A3A3A3"),!0)
a.j(0,$.af,L.d("#999999"),!0)
a.j(0,$.ad,L.d("#898989"),!0)
a.j(0,$.aj,L.d("#EFEFEF"),!0)
a.j(0,$.ai,L.d("#DBDBDB"),!0)
a.j(0,$.ah,L.d("#C6C6C6"),!0)
a.j(0,$.ag,L.d("#ADADAD"),!0)
a=new A.m_(2,1.5,1,h,g,f,e,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","infinite","thanos","gauntlet"],["stone","infinite","thanos","gauntlet"],c,b,0.01,0.01,0.01,0.5,26,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Gauntlet",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
a.W(26,"Gauntlet",!1,!0,!0)
$.yj=a
a=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
a.j(0,$.aa,L.d("#c55555"),!0)
a.j(0,$.ac,L.d("#c55555"),!0)
a.j(0,$.ab,L.d("#090404"),!0)
a.j(0,$.al,L.d("#ba872e"),!0)
a.j(0,$.ak,L.d("#8e694e"),!0)
a.j(0,$.ae,L.d("#b59e5d"),!0)
a.j(0,$.af,L.d("#837243"),!0)
a.j(0,$.ad,L.d("#4f4528"),!0)
a.j(0,$.aj,L.d("#9fbfbf"),!0)
a.j(0,$.ai,L.d("#95b5b5"),!0)
a.j(0,$.ah,L.d("#956f6f"),!0)
a.j(0,$.ag,L.d("#714b4b"),!0)
b=P.f(H.a(["MEME STEALER","THANOS CAR","AGGRESIVE MEMER"],p),q)
c=P.f(H.a(["Meme","Memetastic","Mesmerizing","Mop","Memelord","Mashedpotato"],p),q)
d=P.f(H.a(["Meme","Funny","Stealing","Despacito","Meme Stealing","Cursed"],p),q)
e=P.f(H.a(["Shogun","Memelord","Air Horn","420","Thanos Car","Luis Fonsi","Bowsette"],p),q)
f=P.f(H.a([new E.I($.bY,-1,!0)],k),l)
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#FF9B00"),!0)
h.j(0,$.ac,L.d("#FF9B00"),!0)
h.j(0,$.ab,L.d("#FF8700"),!0)
h.j(0,$.al,L.d("#7F7F7F"),!0)
h.j(0,$.ak,L.d("#727272"),!0)
h.j(0,$.ae,L.d("#A3A3A3"),!0)
h.j(0,$.af,L.d("#999999"),!0)
h.j(0,$.ad,L.d("#898989"),!0)
h.j(0,$.aj,L.d("#EFEFEF"),!0)
h.j(0,$.ai,L.d("#DBDBDB"),!0)
h.j(0,$.ah,L.d("#C6C6C6"),!0)
h.j(0,$.ag,L.d("#ADADAD"),!0)
h=new D.nc(2,0.5,1,a,b,c,d,"cURSED","Some cursed meme music starts to play.",e,["memes"],["memes"],f,0.01,0.01,0.01,0.5,27,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Meme",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
h.W(27,"Meme",!1,!1,!0)
$.yr=h
h=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
h.j(0,$.aa,L.d("#010067"),!0)
h.j(0,$.ac,L.d("#010067"),!0)
h.j(0,$.ab,L.d("#000033"),!0)
h.j(0,$.al,L.d("#000033"),!0)
h.j(0,$.ak,L.d("#00000d"),!0)
h.j(0,$.ae,L.d("#0052F3"),!0)
h.j(0,$.af,L.d("#0046D1"),!0)
h.j(0,$.ad,L.d("#003396"),!0)
h.j(0,$.aj,L.d("#0b0a33"),!0)
h.j(0,$.ai,L.d("#0a0a1a"),!0)
h.j(0,$.ah,L.d("#0b0b1b"),!0)
h.j(0,$.ag,L.d("#030308"),!0)
f=P.f(H.a(["Chill","Fear","Subordinance","Cold","Solids"],p),q)
e=P.f(H.a(["SOLIDIFIER","FEAR MAKER","ABSOLUTE DESTROYER"],p),q)
d=P.f(H.a(["Child","Chimpanzee","Choler","Cauliflower","Changer","Cake","Cone"],p),q)
c=P.f(H.a(["Chill","Rock","Cold","Fearing","Solidifying"],p),q)
b=P.f(["Thanos","Phobos","Deimos","Boreas"],q)
a=P.f(H.a([new E.I($.cY,2,!0),new E.I($.bY,-1,!0),new E.I($.dv,-1,!0)],k),l)
m=new L.a9(P.o(null,null,null,q,m),P.o(null,null,null,i,m),P.o(null,null,null,q,i),P.o(null,null,null,i,q))
m.j(0,$.aa,L.d("#FF9B00"),!0)
m.j(0,$.ac,L.d("#FF9B00"),!0)
m.j(0,$.ab,L.d("#FF8700"),!0)
m.j(0,$.al,L.d("#7F7F7F"),!0)
m.j(0,$.ak,L.d("#727272"),!0)
m.j(0,$.ae,L.d("#A3A3A3"),!0)
m.j(0,$.af,L.d("#999999"),!0)
m.j(0,$.ad,L.d("#898989"),!0)
m.j(0,$.aj,L.d("#EFEFEF"),!0)
m.j(0,$.ai,L.d("#DBDBDB"),!0)
m.j(0,$.ah,L.d("#C6C6C6"),!0)
m.j(0,$.ag,L.d("#ADADAD"),!0)
j=new S.kQ(0.5,0.7,1,h,f,e,d,c,"Fear "," A shiver of fear is sent to the ENEMY, but the OWNER is strengthened.",["chill","cold","fear","subordination"],["chill","stone","solids"],b,a,0.01,0.01,0.01,0.5,28,new H.r(0,null,null,null,null,null,0,o),null,"","",!1,"Chill",null,!1,!1,!0,!1,!1,!0,1,m,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.E(null,null,n))
j.W(28,"Chill",!1,!1,!0)
$.yg=j
$.yu=L.yc(255,"Null",!1,!0,!1)
j=P.f(H.a([new E.I($.bY,1,!0),new E.I($.fr,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
a=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
b=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
c=H.a(["nobody"],p)
d=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
f=H.a(["Nobody"],p)
q=new F.ni(j,q,m,a,b,!1,c,d,e,f,1,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"loud","musical","Music")
q.G()
q.H()
B.cN(q)
$.zE=q
q=P.f(H.a([new E.I($.dP,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.ks(q,m,j,i,h,!1,g,f,e,d,13,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"nerdy","smart","Academic")
q.G()
q.H()
B.cN(q)
$.zx=q
q=P.f(H.a([new E.I($.eB,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kw(q,m,j,i,h,!1,g,f,e,d,4,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"dumb","athletic","Athletic")
q.G()
q.H()
B.cN(q)
$.zy=q
q=P.f(H.a([new E.I($.eA,-1,!0),new E.I($.fr,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kT(q,m,j,i,h,!1,g,f,e,d,0,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"dorky","funny","Comedy")
q.G()
q.H()
B.cN(q)
$.zz=q
q=P.f(H.a([new E.I($.bY,-1,!0),new E.I($.dQ,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l4(q,m,j,i,h,!1,g,f,e,d,2,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"pretentious","cultured","Culture")
q.G()
q.H()
B.cN(q)
$.zA=q
q=P.f(H.a([new E.I($.bY,1,!0),new E.I($.dv,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lc(q,m,j,i,h,!1,g,f,e,d,8,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"boring","domestic","Domestic")
q.G()
q.H()
B.cN(q)
$.zB=q
q=P.f(H.a([new E.I($.fr,1,!0),new E.I($.d6,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lF(q,m,j,i,h,!1,g,f,e,d,7,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"whimpy","imaginative","Fantasy")
q.G()
q.H()
B.cN(q)
$.zC=q
q=P.f(H.a([new E.I($.eB,1,!0),new E.I($.dQ,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mK(q,m,j,i,h,!1,g,f,e,d,6,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"harsh","fair-minded","Justice")
q.G()
q.H()
B.cN(q)
$.zD=q
q=P.f(H.a([new E.I($.cY,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nQ(q,m,j,i,h,!1,g,f,e,d,9,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"frivolous","geeky","PopCulture")
q.G()
q.H()
B.cN(q)
$.zG=q
q=P.f(H.a([new E.I($.dv,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.o2(q,m,j,i,h,!1,g,f,e,d,12,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"obsessive","romantic","Romantic")
q.G()
q.H()
B.cN(q)
$.zH=q
q=P.f(H.a([new E.I($.bY,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.ol(q,m,j,i,h,!1,g,f,e,d,11,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"shallow","extroverted","Social")
q.G()
q.H()
B.cN(q)
$.zI=q
q=P.f(H.a([new E.I($.dv,-1,!0),new E.I($.bY,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.p0(q,m,j,i,h,!1,g,f,e,d,5,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"terrible","honest","Terrible")
q.G()
q.H()
B.cN(q)
$.zK=q
q=P.f(H.a([new E.I($.dP,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pG(q,m,j,i,h,!1,g,f,e,d,3,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"wordy","lettered","Writing")
q.G()
q.H()
B.cN(q)
$.zL=q
q=P.f(H.a([new E.I($.d6,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.oZ(q,m,j,i,h,!1,g,f,e,d,10,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"awkward","techy","Technology")
q.G()
q.H()
B.cN(q)
$.zJ=q
q=H.a(["nobody"],p)
l=P.f(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.fa(!0,q,l,k,p,-13,new H.r(0,null,null,null,null,null,0,o),["NONE"],Q.E(null,null,n),"","","Null")
q.G()
q.H()
B.cN(q)
$.zF=q
A.wp()
t=3
return P.cx(Y.nj(),$async$kl)
case 3:case 1:return P.bs(r,s)}})
return P.bt($async$kl,s)}},V={lc:function lc(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lW:function lW(a){this.a=a},m5:function m5(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},nf:function nf(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},nD:function nD(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},o3:function o3(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},p0:function p0(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
zc:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dn(new P.ca(""),0,0)
t.ah(a,8)
s=Math.pow(256,e)
c.toString
r=H.cO(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.x(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.x(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ah(n-1,p)
t.ah(a,8)}return t.b1(b)},
zb:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cy(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dW(a,b)
for(q=e*8,p=0;p<c;){o=r.a8(q)+1
n=r.a8(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.x(s,l)
s[l]=n}p+=o}return s},
t0:function(a){return new V.lm(a)},
t_:function(a){return new V.ll(a)},
z8:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dn(new P.ca(""),0,0)
t.ah(a,8)
s=d.gcH()
r=C.f.aj(Math.log(H.kh(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cO(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.x(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.x(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ah(m-1,o)
t.ah(a,r)}return t.b1(b)},
z7:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cy(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dW(a,b)
for(r=e*8,o=0;o<c;){n=p.a8(r)+1
m=p.a8(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.x(s,k)
s[k]=m}o+=n}return s},
rZ:function(a){return new V.lk(a)},
rY:function(a){return new V.lj(a)},
za:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dn(new P.ca(""),0,0)
t.ah(a,8)
s=d.gcH()
r=C.f.aj(Math.log(H.kh(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cO(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.x(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.x(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.aj(Math.log(n)/0.6931471805599453)+1
t.ah(k-1,5)
t.ah(n-1,k)
t.ah(a,r)}return t.b1(b)},
z9:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cy(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dW(a,b)
for(o=0;o<c;){n=p.a8(p.a8(5)+1)+1
m=p.a8(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.x(s,r)
s[r]=m}o+=n}return s},
lm:function lm(a){this.a=a},
ll:function ll(a){this.a=a},
lk:function lk(a){this.a=a},
lj:function lj(a){this.a=a}},Z={le:function le(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
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
_.x2=x2},
zm:function(){var t,s
if(!$.vz)$.vz=!0
else return
t=[P.C]
s=new Y.p2(H.a([],t))
$.tf=s
Z.cM(s,"txt",null)
Z.cM($.tf,"vert","x-shader/x-vertex")
Z.cM($.tf,"frag","x-shader/x-fragment")
$.zl=new Y.nX(H.a([],t))
$.vB=new Y.kN(H.a([],t))
s=new B.pL(H.a([],t))
$.vD=s
Z.cM(s,"zip",null)
Z.cM($.vD,"bundle",null)
s=new U.pC(H.a([],t))
$.zu=s
Z.cM(s,"words",null)
s=new Q.nO(H.a([],t))
$.vC=s
Z.cM(s,"png",null)
Z.cM($.vC,"jpg","image/jpeg")
$.zs=new Q.nL(H.a([],t))
s=new M.os(H.a([],t))
$.zt=s
Z.cM(s,"psprite",null)
s=new V.lW(H.a([],t))
$.te=s
Z.cM(s,"ttf",null)
Z.cM($.te,"otf",null)
Z.cM($.te,"woff",null)
s=new Y.nv(null,H.a([],t))
$.zp=s
Z.cM(s,"obj",null)
s=new U.n4(H.a([],t))
$.zn=s
Z.cM(s,"mp3",null)
$.zo=new U.oP(H.a([],t))
s=new U.nz(H.a([],t))
$.zq=s
Z.cM(s,"ogg",null)
$.zr=new U.oQ(H.a([],t))},
cM:function(a,b,c){$.$get$lX().i(0,b,new Z.im(a,c,[null,null]))
a.a.push(b)},
vA:function(a){var t
if($.$get$lX().a_(0,a)){t=$.$get$lX().n(0,a)
if(t.a instanceof O.c8)return t
throw H.l("File format for extension ."+H.B(a)+" does not match expected types.")}throw H.l("No file format found for extension ."+H.B(a))},
im:function im(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mJ:function mJ(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
n3:function n3(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},
tQ:function tQ(){},
tM:function tM(){},
tN:function tN(){}},X={io:function io(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},i7:function i7(){},m7:function m7(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},mc:function mc(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
this.c=c}},N={a4:function a4(){},mK:function mK(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nU:function nU(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},o1:function o1(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ol:function ol(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},on:function on(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},p8:function p8(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
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
_.x2=x2},
F6:function(a){var t,s,r,q,p,o,n,m,l
t=J.cJ(a)
s=new W.k4(document.querySelectorAll("link"),[null])
for(r=new H.er(s,s.gm(s),0,null,[null]);r.J();){q=r.d
p=J.aR(q)
if(!!p.$ishr&&q.rel==="stylesheet"){o=$.$get$nJ()
H.B(p.gae(q))
o.toString
o=t.length
n=Math.min(o,J.ck(p.gae(q)))
for(m=0;m<n;++m){if(m>=o)return H.x(t,m)
if(t[m]!==J.i3(p.gae(q),m)){l=C.c.ag(t,m)
$.$get$nJ().toString
return l.split("/").length-1}continue}}}$.$get$nJ().b8(C.n,"Didn't find a css link to derive relative path")
return 0},
ud:function(){var t=P.wZ()
if(!$.$get$nI().a_(0,t))$.$get$nI().i(0,t,N.F6(t))
return $.$get$nI().n(0,t)}},E={iB:function iB(){},ny:function ny(){},I:function I(a,b,c){this.a=a
this.b=b
this.c=c},fJ:function fJ(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},nh:function nh(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nW:function nW(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},o6:function o6(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},px:function px(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},B={m4:function m4(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
cN:function(a){var t=a.f
if($.$get$ji().a_(0,t))throw H.l("Duplicate aspect id for "+a.D(0)+": "+t+" is already registered for "+J.cJ($.$get$ji().n(0,t))+".")
$.$get$ji().i(0,t,a)},
zM:function(){var t=$.$get$ji()
t=t.gb9(t)
return new H.e8(t,new B.mk(),[H.aL(t,"p",0)])},
mk:function mk(){},
fa:function fa(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
pL:function pL(a){this.a=a},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a,b){this.a=a
this.b=b},
GD:function(a){return a.ba(0)},
dw:function dw(a){this.a=a},
jX:function jX(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hQ:function hQ(a,b){this.a=a
this.b=b}},Q={md:function md(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mg:function mg(){},nO:function nO(a){this.a=a},nL:function nL(a){this.a=a},mN:function mN(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
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
_.x2=x2},o2:function o2(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pw:function pw(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},jD:function jD(){},
E:function(a,b,c){var t=new Q.dT(null,null,[c])
t.d4(a,b,c)
return t},
uK:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.E(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dV(a,"$isp",[e],"$asp"))if(H.dV(a,"$iscS",[e],"$ascS"))for(s=J.cI(a.gbY()),r=0;s.J();){q=s.gP()
p=t.b
o=p.length
if(r>=o)return H.x(p,r)
p[r]=q;++r}else for(s=a.gV(a),p=[H.O(t,0)],r=0;s.J();){n=s.gP()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.x(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gV(a),p=[e],o=[H.O(t,0)];s.J();){l=s.gP()
if(H.GV(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.x(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dV(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.x(m,0)
m[0]=l}else throw H.l("Invalid entry type "+H.B(J.v4(l))+" for WeightedList<"+H.B(H.c_(H.dA(e)))+">. Should be "+H.B(H.c_(H.dA(e)))+" or WeightPair<"+H.B(H.c_(H.dA(e)))+">.")}return t},
uL:function(a,b,c,d){return new Q.jV(J.v6(a.gbY(),new Q.pA(c,d,b)),null,[c,d])},
cS:function cS(){},
dT:function dT(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hP:function hP(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eJ:function eJ(){},
hO:function hO(){},
pz:function pz(a,$ti){this.a=a
this.$ti=$ti},
jV:function jV(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pA:function pA(a,b,c){this.a=a
this.b=b
this.c=c},
oc:function(){var t=0,s=P.bq(),r
var $async$oc=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=3
return P.cx(A.ht("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$oc)
case 3:r=A.ht("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$oc,s)}},G={mQ:function mQ(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},nQ:function nQ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yQ:function(a){var t,s,r,q,p,o,n,m,l
t=G.V
s=P.tX(a,t)
r=P.a6(null,null,null,t)
q=H.a([],[G.e])
for(t=G.EL(),p=J.cI(t.a),t=new H.eH(p,t.b,[H.O(t,0)]);t.J();){o=p.gP()
if(o.eg(s))q.push(o)}C.b.eA(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.cj)(q),++n){o=q[n]
if(o.eg(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.cj)(p),++l)s.an(0,p[l])}}if(s.a!==0)r.bP(0,s)
return r},
EL:function(){var t=$.$get$c()
t.toString
return new H.e8(t,new G.mz(),[H.O(t,0)])},
V:function V(){},
aY:function aY(a,b,c){this.a=a
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
mz:function mz(){}},D={nc:function nc(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},oZ:function oZ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
G_:function(){if($.wI)return
$.wI=!0
var t=new D.cF("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=0
$.ou=t
t=new D.cF("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.FZ=t
t=new D.jY(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=2.5
t.Q=1
$.eB=t
t=new D.jY(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=2.5
$.dQ=t
t=new D.cF("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.FY=t
t=new D.cF("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.cY=t
t=new D.o_("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.dv=t
t=new D.cF("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.bY=t
t=new D.cF("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.dP=t
t=new D.cF("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.fr=t
t=new D.cF("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.eA=t
t=new D.cF("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.d6=t
t=new D.cF("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.bZ=t},
uy:function(){var t=$.$get$cQ()
return new H.e8(t,new D.ov(),[H.O(t,0)])},
ov:function ov(){},
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
jY:function jY(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
o_:function o_(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}},F={ni:function ni(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pG:function pG(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
EQ:function(a){if(a===C.i){window
return C.j.gaq(C.j)}if(a===C.n){window
return C.j.ghM()}if(a===C.Z){window
return C.j.ghf()}return P.GY()},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
tV:function tV(){},
z6:function(a,b,c,d){var t,s,r,q
t=new B.dn(new P.ca(""),0,0)
t.ah(a,8)
c.toString
s=H.cO(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bQ(s[q])
return t.b1(b)},
z5:function(a,b,c,d){var t,s,r,q,p
t=H.cy(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dW(a,b)
for(q=0;q<c;++q){p=r.bZ()
if(q>=t)return H.x(s,q)
s[q]=p}return s},
z4:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dn(new P.ca(""),0,0)
t.ah(a,8)
s=d.gcH()
r=C.f.aj(Math.log(H.kh(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cO(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.x(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.x(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bQ(o-1)
t.ah(a,r)}return t.b1(b)},
z3:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cy(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dW(a,b)
for(o=0;o<c;){n=p.bZ()+1
m=p.a8(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.x(s,r)
s[r]=m}o+=n}return s},
z2:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dn(new P.ca(""),0,0)
t.ah(a,8)
c.toString
s=H.cO(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.x(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.x(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bQ(p-1)
t.bQ(a)}return t.b1(b)},
z1:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cy(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dW(a,b)
for(q=0;q<c;){p=r.bZ()+1
o=r.bZ()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.x(s,m)
s[m]=o}q+=p}return s}},R={
Fq:function(a){var t,s
if(a.gm(a).aB(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.ghT(s).gi3().e2("checking for two players, ps is "+H.B(a)+", ret is "+t)
return t},
Fe:function(a){a.gad(a).gbR()
return!1},
Fp:function(a){a.gad(a).gbR()
return!1},
Fo:function(a){a.gad(a).gbR()
return!1},
Fn:function(a){return a.gad(a).gbl().gi2()},
Fl:function(a){return a.gad(a).gbl().gi0()},
Fk:function(a){return a.gad(a).gbl().gi_()},
Fh:function(a){return a.gad(a).gbl().ghY()},
Fj:function(a){return a.gad(a).gbl().ghZ()},
Fm:function(a){return a.gad(a).gbl().gi1()},
Fi:function(a){var t=a.gad(a)
t.gbR()
t.gbR()
return!1},
Ff:function(a){return!0},
Fg:function(a){a.gad(a).ghV()
return!1},
nV:function nV(){},
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
oV:function oV(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
he:function he(){},
uc:function uc(){},
ub:function ub(){}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,V,Z,X,N,E,B,Q,G,D,F,R]
setFunctionNamesIfNecessary(v)
var $={}
H.tS.prototype={}
J.j.prototype={
S:function(a,b){return a===b},
ga6:function(a){return H.eu(a)},
D:function(a){return H.jG(a)},
gab:function(a){return new H.dS(H.kk(a),null)},
$ishe:1,
$isao:1,
$isfk:1,
$isao:1,
$ismF:1,
$isj:1,
$ismF:1,
$isj:1,
$ishx:1,
$isao:1}
J.mD.prototype={
D:function(a){return String(a)},
ga6:function(a){return a?519018:218159},
gab:function(a){return C.ae},
$isd9:1}
J.mE.prototype={
S:function(a,b){return null==b},
D:function(a){return"null"},
ga6:function(a){return 0},
gab:function(a){return C.a8},
$iscP:1}
J.hp.prototype={
ga6:function(a){return 0},
gab:function(a){return C.a7},
D:function(a){return String(a)},
$ismF:1,
h:function(a,b){return a.add(b)},
an:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbX:function(a){return a.left},
gc1:function(a){return a.top},
gb3:function(a){return a.width},
gaX:function(a){return a.height},
ht:function(a,b){return a.parse(b)},
ey:function(a,b){return a.setLogging(b)},
ez:function(a,b){return a.setMaterials(b)}}
J.nN.prototype={}
J.eF.prototype={}
J.ep.prototype={
D:function(a){var t=a[$.$get$vk()]
return t==null?this.eE(a):J.cJ(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.en.prototype={
bU:function(a,b){if(!!a.immutable$list)throw H.l(new P.Z(b))},
cv:function(a,b){if(!!a.fixed$length)throw H.l(new P.Z(b))},
h:function(a,b){this.cv(a,"add")
a.push(b)},
aa:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.l(new P.bN(a))}},
av:function(a,b){return new H.fg(a,b,[H.O(a,0),null])},
bf:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.B(a[r])
if(r>=t)return H.x(s,r)
s[r]=q}return s.join(b)},
cY:function(a,b){return H.wK(a,b,null,H.O(a,0))},
h4:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.l(new P.bN(a))}return s},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
c4:function(a,b,c){if(b<0||b>a.length)throw H.l(P.bF(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.l(H.bv(c))
if(c<b||c>a.length)throw H.l(P.bF(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.O(a,0)])
return H.a(a.slice(b,c),[H.O(a,0)])},
gad:function(a){if(a.length>0)return a[0]
throw H.l(H.jo())},
gb7:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.l(H.jo())},
a9:function(a,b,c,d,e){var t,s,r
this.bU(a,"setRange")
P.dg(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.ba(P.bF(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.l(H.wj())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.x(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.x(d,r)
a[b+s]=d[r]}},
ax:function(a,b,c,d){return this.a9(a,b,c,d,0)},
bV:function(a,b,c,d){var t
this.bU(a,"fill range")
P.dg(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aA:function(a,b,c,d){var t,s,r,q,p,o
this.cv(a,"replaceRange")
P.dg(b,c,a.length,null,null,null)
d=C.c.ao(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.ax(a,b,r,d)
if(p!==0){this.a9(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a9(a,r,o,a,c)
this.ax(a,b,r,d)}},
h2:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.l(new P.bN(a))}return!0},
cZ:function(a,b){var t
this.bU(a,"sort")
t=b==null?P.GX():b
H.jM(a,0,a.length-1,t)},
eA:function(a){return this.cZ(a,null)},
aY:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.bc(a[t],b))return t
return-1},
be:function(a,b){return this.aY(a,b,0)},
ai:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bc(a[t],b))return!0
return!1},
gX:function(a){return a.length===0},
D:function(a){return P.jn(a,"[","]")},
a3:function(a,b){var t=H.a(a.slice(0),[H.O(a,0)])
return t},
ao:function(a){return this.a3(a,!0)},
gV:function(a){return new J.i4(a,a.length,0,null,[H.O(a,0)])},
ga6:function(a){return H.eu(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cv(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dX(b,"newLength",null))
if(b<0)throw H.l(P.bF(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c4(a,b))
if(b>=a.length||b<0)throw H.l(H.c4(a,b))
return a[b]},
i:function(a,b,c){this.bU(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c4(a,b))
if(b>=a.length||b<0)throw H.l(H.c4(a,b))
a[b]=c},
$isaP:1,
$asaP:function(){},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
J.tR.prototype={}
J.i4.prototype={
gP:function(){return this.d},
J:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.l(H.cj(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.ff.prototype={
ay:function(a,b){var t
if(typeof b!=="number")throw H.l(H.bv(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcE(b)
if(this.gcE(a)===t)return 0
if(this.gcE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcE:function(a){return a===0?1/a<0:a<0},
aj:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.l(new P.Z(""+a+".floor()"))},
by:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.l(new P.Z(""+a+".round()"))},
ac:function(a,b,c){if(C.a.ay(b,c)>0)throw H.l(H.bv(b))
if(this.ay(a,b)<0)return b
if(this.ay(a,c)>0)return c
return a},
l:function(a){return a},
bA:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.l(P.bF(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.Z(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.ba(new P.Z("Unexpected toString result: "+t))
r=J.bg(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.ar("0",q)},
D:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga6:function(a){return a&0x1FFFFFFF},
cU:function(a){return-a},
U:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a+b},
ar:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a*b},
bE:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
d2:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dI(a,b)},
am:function(a,b){return(a|0)===a?a/b|0:this.dI(a,b)},
dI:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.l(new P.Z("Result of truncating division is "+H.B(t)+": "+H.B(a)+" ~/ "+H.B(b)))},
at:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
if(b<0)throw H.l(H.bv(b))
return b>31?0:a<<b>>>0},
ap:function(a,b){return b>31?0:a<<b>>>0},
aT:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fB:function(a,b){if(b<0)throw H.l(H.bv(b))
return b>31?0:a>>>b},
dH:function(a,b){return b>31?0:a>>>b},
a4:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a<b},
aB:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a>b},
as:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a>=b},
gab:function(a){return C.ah},
$isdl:1}
J.jr.prototype={
gab:function(a){return C.ag},
$isT:1,
$isdl:1,
$isF:1}
J.jq.prototype={
gab:function(a){return C.af},
$isT:1,
$isdl:1}
J.eo.prototype={
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c4(a,b))
if(b<0)throw H.l(H.c4(a,b))
if(b>=a.length)H.ba(H.c4(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(b>=a.length)throw H.l(H.c4(a,b))
return a.charCodeAt(b)},
cs:function(a,b,c){if(c>b.length)throw H.l(P.bF(c,0,b.length,null,null))
return new H.qR(b,a,c)},
aU:function(a,b){return this.cs(a,b,0)},
e6:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.l(P.bF(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.Z(b,c+s)!==this.a5(a,s))return
return new H.jR(c,b,a)},
U:function(a,b){if(typeof b!=="string")throw H.l(P.dX(b,null,null))
return a+b},
h1:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ag(a,s-t)},
cO:function(a,b,c){return H.xL(a,b,c)},
hF:function(a,b,c){return H.Ht(a,b,c,null)},
eB:function(a,b){if(b==null)H.ba(H.bv(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.ho&&b.gdt().exec("").length-2===0)return a.split(b.gfn())
else return this.f5(a,b)},
aA:function(a,b,c,d){var t,s
H.uS(b)
c=P.dg(b,c,a.length,null,null,null)
H.uS(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
f5:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.C])
for(s=J.xP(b,a),s=s.gV(s),r=0,q=1;s.J();){p=s.gP()
o=p.gd_(p)
n=p.gdT(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.M(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ag(a,r))
return t},
aC:function(a,b,c){var t
H.uS(c)
if(typeof c!=="number")return c.a4()
if(c<0||c>a.length)throw H.l(P.bF(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.y2(b,a,c)!=null},
af:function(a,b){return this.aC(a,b,0)},
M:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.ba(H.bv(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.ba(H.bv(c))
if(typeof b!=="number")return b.a4()
if(b<0)throw H.l(P.jI(b,null,null))
if(typeof c!=="number")return H.av(c)
if(b>c)throw H.l(P.jI(b,null,null))
if(c>a.length)throw H.l(P.jI(c,null,null))
return a.substring(b,c)},
ag:function(a,b){return this.M(a,b,null)},
hL:function(a){return a.toUpperCase()},
bh:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a5(t,0)===133){r=J.EM(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.Z(t,q)===133?J.tO(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eh:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.Z(t,r)===133)s=J.tO(t,r)}else{s=J.tO(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
ar:function(a,b){var t,s
if(typeof b!=="number")return H.av(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.l(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
aY:function(a,b,c){var t
if(c<0||c>a.length)throw H.l(P.bF(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
be:function(a,b){return this.aY(a,b,0)},
hl:function(a,b,c){var t
if(b==null)H.ba(H.bv(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.ba(P.bF(t,0,c,null,null))
if(b.cd(a,t)!=null)return t}return-1},
e3:function(a,b){return this.hl(a,b,null)},
dR:function(a,b,c){if(c>a.length)throw H.l(P.bF(c,0,a.length,null,null))
return H.Hs(a,b,c)},
ai:function(a,b){return this.dR(a,b,0)},
gX:function(a){return a.length===0},
ay:function(a,b){var t
if(typeof b!=="string")throw H.l(H.bv(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
D:function(a){return a},
ga6:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gab:function(a){return C.a9},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c4(a,b))
if(b>=a.length||b<0)throw H.l(H.c4(a,b))
return a[b]},
$isaP:1,
$asaP:function(){},
$isC:1}
H.kS.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.Z(this.a,b)},
$ashM:function(){return[P.F]},
$asjs:function(){return[P.F]},
$ashG:function(){return[P.F]},
$asq:function(){return[P.F]},
$asv:function(){return[P.F]},
$asp:function(){return[P.F]}}
H.v.prototype={$asv:null}
H.eq.prototype={
gV:function(a){return new H.er(this,this.gm(this),0,null,[H.aL(this,"eq",0)])},
aa:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.T(0,s))
if(t!==this.gm(this))throw H.l(new P.bN(this))}},
gX:function(a){return this.gm(this)===0},
gad:function(a){if(this.gm(this)===0)throw H.l(H.jo())
return this.T(0,0)},
ai:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.bc(this.T(0,s),b))return!0
if(t!==this.gm(this))throw H.l(new P.bN(this))}return!1},
av:function(a,b){return new H.fg(this,b,[H.aL(this,"eq",0),null])},
a3:function(a,b){var t,s,r
t=H.a([],[H.aL(this,"eq",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.T(0,s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
ao:function(a){return this.a3(a,!0)}}
H.oT.prototype={
gf6:function(){var t=J.ck(this.a)
return t},
gfC:function(){var t,s
t=J.ck(this.a)
s=this.b
if(J.cu(s,t))return t
return s},
gm:function(a){var t,s
t=J.ck(this.a)
s=this.b
if(J.uZ(s,t))return 0
if(typeof s!=="number")return H.av(s)
return t-s},
T:function(a,b){var t=J.e9(this.gfC(),b)
if(J.ea(b,0)||J.uZ(t,this.gf6()))throw H.l(P.by(b,this,"index",null,null))
return J.v1(this.a,t)},
a3:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bg(s)
q=r.gm(s)
if(typeof t!=="number")return H.av(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.T(s,t+m)
if(m>=n.length)return H.x(n,m)
n[m]=o
if(r.gm(s)<q)throw H.l(new P.bN(this))}return n},
ao:function(a){return this.a3(a,!0)},
eM:function(a,b,c,d){var t=this.b
if(J.ea(t,0))H.ba(P.bF(t,0,null,"start",null))}}
H.er.prototype={
gP:function(){return this.d},
J:function(){var t,s,r,q
t=this.a
s=J.bg(t)
r=s.gm(t)
if(this.b!==r)throw H.l(new P.bN(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.T(t,q);++this.c
return!0}}
H.hw.prototype={
gV:function(a){return new H.jt(null,J.cI(this.a),this.b,this.$ti)},
gm:function(a){return J.ck(this.a)},
gX:function(a){return J.rJ(this.a)},
$asp:function(a,b){return[b]}}
H.fX.prototype={$isv:1,
$asv:function(a,b){return[b]},
$asp:function(a,b){return[b]}}
H.jt.prototype={
J:function(){var t=this.b
if(t.J()){this.a=this.c.$1(t.gP())
return!0}this.a=null
return!1},
gP:function(){return this.a},
$asjp:function(a,b){return[b]}}
H.fg.prototype={
gm:function(a){return J.ck(this.a)},
T:function(a,b){return this.b.$1(J.v1(this.a,b))},
$aseq:function(a,b){return[b]},
$asv:function(a,b){return[b]},
$asp:function(a,b){return[b]}}
H.e8.prototype={
gV:function(a){return new H.eH(J.cI(this.a),this.b,this.$ti)},
av:function(a,b){return new H.hw(this,b,[H.O(this,0),null])}}
H.eH.prototype={
J:function(){var t,s
for(t=this.a,s=this.b;t.J();)if(s.$1(t.gP())===!0)return!0
return!1},
gP:function(){return this.a.gP()}}
H.iy.prototype={
sm:function(a,b){throw H.l(new P.Z("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.l(new P.Z("Cannot add to a fixed-length list"))},
aA:function(a,b,c,d){throw H.l(new P.Z("Cannot remove from a fixed-length list"))}}
H.pj.prototype={
i:function(a,b,c){throw H.l(new P.Z("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.l(new P.Z("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.l(new P.Z("Cannot add to an unmodifiable list"))},
a9:function(a,b,c,d,e){throw H.l(new P.Z("Cannot modify an unmodifiable list"))},
ax:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aA:function(a,b,c,d){throw H.l(new P.Z("Cannot remove from an unmodifiable list"))},
bV:function(a,b,c,d){throw H.l(new P.Z("Cannot modify an unmodifiable list"))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
H.hM.prototype={$asq:null,$asv:null,$asp:null,$isq:1,$isv:1,$isp:1}
H.rG.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rH.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qz.prototype={}
H.fx.prototype={
dN:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cq()},
hE:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.an(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.x(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.x(p,q)
p[q]=r
if(q===s.c)s.dl();++s.d}this.y=!1}this.cq()},
fG:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aR(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.x(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hC:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aR(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.ba(new P.Z("removeRange"))
P.dg(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
ex:function(a,b){if(!this.r.S(0,a))return
this.db=b},
ha:function(a,b,c){var t=J.aR(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.fG(a,c)
return}t=this.cx
if(t==null){t=P.tY(null,null)
this.cx=t}t.aJ(0,new H.qu(a,c))},
h9:function(a,b){var t
if(!this.r.S(0,a))return
t=J.aR(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.bW()
return}t=this.cx
if(t==null){t=P.tY(null,null)
this.cx=t}t.aJ(0,this.ghk())},
hb:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fE(a)
if(b!=null)P.fE(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cJ(a)
s[1]=b==null?null:J.cJ(b)
for(r=new P.dx(t,t.r,null,null,[null]),r.c=t.e;r.J();)J.fG(r.d,s)},
bp:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.ct(o)
p=H.cs(o)
this.hb(q,p)
if(this.db===!0){this.bW()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghj()
if(this.cx!=null)for(;n=this.cx,!n.gX(n);)this.cx.eb().$0()}return s},
cF:function(a){return this.b.n(0,a)},
d6:function(a,b){var t=this.b
if(t.a_(0,a))throw H.l(P.ln("Registry: ports must be registered only once."))
t.i(0,a,b)},
cq:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bW()},
bW:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bc(0)
for(t=this.b,s=t.gb9(t),s=s.gV(s);s.J();)s.gP().eZ()
t.bc(0)
this.c.bc(0)
u.globalState.z.an(0,this.a)
this.dx.bc(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.x(t,p)
J.fG(q,t[p])}this.ch=null}},
ghj:function(){return this.d},
gfR:function(){return this.e}}
H.qu.prototype={
$0:function(){J.fG(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.q5.prototype={
fW:function(){var t=this.a
if(t.b===t.c)return
return t.eb()},
ef:function(){var t,s,r
t=this.fW()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.a_(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gX(s)}else s=!1
else s=!1
else s=!1
if(s)H.ba(P.ln("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gX(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hs(["command","close"])
r=new H.dy(!0,new P.k8(0,null,null,null,null,null,0,[null,P.F])).aw(r)
s.toString
self.postMessage(r)}return!1}t.hz()
return!0},
dC:function(){if(self.window!=null)new H.q6(this).$0()
else for(;this.ef(););},
bz:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dC()
else try{this.dC()}catch(r){t=H.ct(r)
s=H.cs(r)
q=u.globalState.Q
p=P.hs(["command","error","msg",H.B(t)+"\n"+H.B(s)])
p=new H.dy(!0,P.hW(null,P.F)).aw(p)
q.toString
self.postMessage(p)}}}
H.q6.prototype={
$0:function(){if(!this.a.ef())return
P.wM(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.eM.prototype={
hz:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bp(this.b)}}
H.qy.prototype={}
H.ml.prototype={
$0:function(){H.zQ(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mm.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fD(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fD(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cq()},
$S:function(){return{func:1,v:true}}}
H.pT.prototype={}
H.fy.prototype={
b5:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gds())return
r=H.Gz(b)
if(t.gfR()===s){s=J.bg(r)
switch(s.n(r,0)){case"pause":t.dN(s.n(r,1),s.n(r,2))
break
case"resume":t.hE(s.n(r,1))
break
case"add-ondone":t.fG(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hC(s.n(r,1))
break
case"set-errors-fatal":t.ex(s.n(r,1),s.n(r,2))
break
case"ping":t.ha(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.h9(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.an(0,s)
break}return}u.globalState.f.a.aJ(0,new H.eM(t,new H.qB(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.fy&&J.bc(this.b,b.b)},
ga6:function(a){return this.b.gcf()}}
H.qB.prototype={
$0:function(){var t=this.a.b
if(!t.gds())t.eV(0,this.b)},
$S:function(){return{func:1}}}
H.hZ.prototype={
b5:function(a,b){var t,s,r
t=P.hs(["command","message","port",this,"msg",b])
s=new H.dy(!0,P.hW(null,P.F)).aw(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.hZ&&J.bc(this.b,b.b)&&J.bc(this.a,b.a)&&J.bc(this.c,b.c)},
ga6:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.at()
s=this.a
if(typeof s!=="number")return s.at()
r=this.c
if(typeof r!=="number")return H.av(r)
return(t<<16^s<<8^r)>>>0}}
H.fn.prototype={
eZ:function(){this.c=!0
this.b=null},
eV:function(a,b){if(this.c)return
this.b.$1(b)},
$isFr:1,
gcf:function(){return this.a},
gds:function(){return this.c}}
H.pa.prototype={
eN:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aJ(0,new H.eM(s,new H.pb(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dj(new H.pc(this,b),0),a)}else throw H.l(new P.Z("Timer greater than 0."))}}
H.pb.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pc.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dD.prototype={
ga6:function(a){var t=this.a
if(typeof t!=="number")return t.cX()
t=C.d.aT(t,0)^C.d.am(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dD){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcf:function(){return this.a}}
H.dy.prototype={
aw:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.aR(a)
if(!!t.$isfh)return["buffer",a]
if(!!t.$iset)return["typed",a]
if(!!t.$isaP)return this.es(a)
if(!!t.$iszN){r=this.gep()
q=t.gbg(a)
q=H.dt(q,r,H.aL(q,"p",0),null)
q=P.df(q,!0,H.aL(q,"p",0))
t=t.gb9(a)
t=H.dt(t,r,H.aL(t,"p",0),null)
return["map",q,P.df(t,!0,H.aL(t,"p",0))]}if(!!t.$ismF)return this.eu(a)
if(!!t.$isj)this.ei(a)
if(!!t.$isFr)this.bC(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfy)return this.ev(a)
if(!!t.$ishZ)return this.ew(a)
if(!!t.$iseW){p=a.$static_name
if(p==null)this.bC(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdD)return["capability",a.a]
if(!(a instanceof P.ao))this.ei(a)
return["dart",u.classIdExtractor(a),this.er(u.classFieldsExtractor(a))]},
bC:function(a,b){throw H.l(new P.Z((b==null?"Can't transmit:":b)+" "+H.B(a)))},
ei:function(a){return this.bC(a,null)},
es:function(a){var t=this.eq(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bC(a,"Can't serialize indexable: ")},
eq:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.aw(a[s])
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
er:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aw(a[t]))
return a},
eu:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bC(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.aw(a[t[r]])
if(r>=s.length)return H.x(s,r)
s[r]=q}return["js-object",t,s]},
ew:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
ev:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcf()]
return["raw sendport",a]}}
H.eK.prototype={
aV:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.l(P.dC("Bad serialized message: "+H.B(a)))
switch(C.b.gad(a)){case"ref":if(1>=a.length)return H.x(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.x(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bn(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bn(r),[null])
case"mutable":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return this.bn(r)
case"const":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bn(r),[null])
s.fixed$length=Array
return s
case"map":return this.h_(a)
case"sendport":return this.h0(a)
case"raw sendport":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.fZ(a)
case"function":if(1>=a.length)return H.x(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.x(a,1)
return new H.dD(a[1])
case"dart":s=a.length
if(1>=s)return H.x(a,1)
q=a[1]
if(2>=s)return H.x(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bn(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.l("couldn't deserialize: "+H.B(a))}},
bn:function(a){var t,s,r
t=J.bg(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.av(r)
if(!(s<r))break
t.i(a,s,this.aV(t.n(a,s)));++s}return a},
h_:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.x(a,1)
s=a[1]
if(2>=t)return H.x(a,2)
r=a[2]
q=P.mV()
this.b.push(q)
s=J.y7(J.v6(s,this.gfY()))
for(t=J.bg(s),p=J.bg(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aV(p.n(r,o)))
return q},
h0:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.x(a,1)
s=a[1]
if(2>=t)return H.x(a,2)
r=a[2]
if(3>=t)return H.x(a,3)
q=a[3]
if(J.bc(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cF(q)
if(o==null)return
n=new H.fy(o,r)}else n=new H.hZ(s,q,r)
this.b.push(n)
return n},
fZ:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.x(a,1)
s=a[1]
if(2>=t)return H.x(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bg(s)
p=J.bg(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.av(n)
if(!(o<n))break
q[t.n(s,o)]=this.aV(p.n(r,o));++o}return q}}
H.kV.prototype={
gX:function(a){return this.gm(this)===0},
D:function(a){return P.wq(this)},
i:function(a,b,c){return H.yS()},
$isbo:1,
$asbo:null}
H.kW.prototype={
gm:function(a){return this.a},
a_:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.a_(0,b))return
return this.dk(b)},
dk:function(a){return this.b[a]},
aa:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dk(q))}}}
H.nZ.prototype={}
H.pg.prototype={
aE:function(a){var t,s,r
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
H.jz.prototype={
D:function(a){var t=this.b
if(t==null)return"NullError: "+H.B(this.a)
return"NullError: method not found: '"+H.B(t)+"' on null"}}
H.mI.prototype={
D:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.B(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.B(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.B(this.a)+")"}}
H.pi.prototype={
D:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h5.prototype={
gaH:function(){return this.b}}
H.rI.prototype={
$1:function(a){if(!!J.aR(a).$isee)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kb.prototype={
D:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rt.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.ru.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rv.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rw.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.rx.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eW.prototype={
D:function(a){return"Closure '"+H.nT(this).trim()+"'"},
ghR:function(){return this},
$D:null}
H.oY.prototype={}
H.ot.prototype={
D:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fM.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fM))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga6:function(a){var t,s
t=this.c
if(t==null)s=H.eu(this.a)
else s=typeof t!=="object"?J.dB(t):H.eu(t)
t=H.eu(this.b)
if(typeof s!=="number")return s.hU()
return(s^t)>>>0},
D:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.B(this.d)+"' of "+H.jG(t)}}
H.kP.prototype={
D:function(a){return this.a}}
H.o4.prototype={
D:function(a){return"RuntimeError: "+H.B(this.a)}}
H.dS.prototype={
D:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga6:function(a){return J.dB(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.dS&&J.bc(this.a,b.a)}}
H.r.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gbg:function(a){return new H.mT(this,[H.O(this,0)])},
gb9:function(a){return H.dt(this.gbg(this),new H.mH(this),H.O(this,0),H.O(this,1))},
a_:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.df(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.df(s,b)}else return this.hg(b)},
hg:function(a){var t=this.d
if(t==null)return!1
return this.bt(this.bH(t,this.bs(a)),a)>=0},
bP:function(a,b){b.aa(0,new H.mG(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bk(t,b)
return s==null?null:s.gaW()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bk(r,b)
return s==null?null:s.gaW()}else return this.hh(b)},
hh:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bH(t,this.bs(a))
r=this.bt(s,a)
if(r<0)return
return s[r].gaW()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.ci()
this.b=t}this.d5(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.ci()
this.c=s}this.d5(s,b,c)}else{r=this.d
if(r==null){r=this.ci()
this.d=r}q=this.bs(b)
p=this.bH(r,q)
if(p==null)this.co(r,q,[this.cj(b,c)])
else{o=this.bt(p,b)
if(o>=0)p[o].saW(c)
else p.push(this.cj(b,c))}}},
an:function(a,b){if(typeof b==="string")return this.dB(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dB(this.c,b)
else return this.hi(b)},
hi:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bH(t,this.bs(a))
r=this.bt(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dK(q)
return q.gaW()},
bc:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aa:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.l(new P.bN(this))
t=t.c}},
d5:function(a,b,c){var t=this.bk(a,b)
if(t==null)this.co(a,b,this.cj(b,c))
else t.saW(c)},
dB:function(a,b){var t
if(a==null)return
t=this.bk(a,b)
if(t==null)return
this.dK(t)
this.di(a,b)
return t.gaW()},
cj:function(a,b){var t,s
t=new H.mS(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dK:function(a){var t,s
t=a.gft()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bs:function(a){return J.dB(a)&0x3ffffff},
bt:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bc(a[s].ge1(),b))return s
return-1},
D:function(a){return P.wq(this)},
bk:function(a,b){return a[b]},
bH:function(a,b){return a[b]},
co:function(a,b,c){a[b]=c},
di:function(a,b){delete a[b]},
df:function(a,b){return this.bk(a,b)!=null},
ci:function(){var t=Object.create(null)
this.co(t,"<non-identifier-key>",t)
this.di(t,"<non-identifier-key>")
return t},
$iszN:1,
$isbo:1,
$asbo:null}
H.mH.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mG.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eO(function(a,b){return{func:1,args:[a,b]}},this.a,"r")}}
H.mS.prototype={
ge1:function(){return this.a},
gaW:function(){return this.b},
gft:function(){return this.d},
saW:function(a){return this.b=a}}
H.mT.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gV:function(a){var t,s
t=this.a
s=new H.mU(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
ai:function(a,b){return this.a.a_(0,b)},
aa:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.l(new P.bN(t))
s=s.c}}}
H.mU.prototype={
gP:function(){return this.d},
J:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bN(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rp.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rq.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.C]}}}
H.rr.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.C]}}}
H.ho.prototype={
D:function(a){return"RegExp/"+this.a+"/"},
gdu:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.tP(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdt:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.tP(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cs:function(a,b,c){if(c>b.length)throw H.l(P.bF(c,0,b.length,null,null))
return new H.pO(this,b,c)},
aU:function(a,b){return this.cs(a,b,0)},
f7:function(a,b){var t,s
t=this.gdu()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.k9(this,s)},
cd:function(a,b){var t,s
t=this.gdt()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.x(s,-1)
if(s.pop()!=null)return
return new H.k9(this,s)},
e6:function(a,b,c){if(c<0||c>b.length)throw H.l(P.bF(c,0,b.length,null,null))
return this.cd(b,c)},
$isFt:1,
gfn:function(){return this.b}}
H.k9.prototype={
gd_:function(a){return this.b.index},
gdT:function(a){var t=this.b
return t.index+t[0].length},
ba:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.x(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
$isdu:1}
H.pO.prototype={
gV:function(a){return new H.k_(this.a,this.b,this.c,null)},
$ashn:function(){return[P.du]},
$asp:function(){return[P.du]}}
H.k_.prototype={
gP:function(){return this.d},
J:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.f7(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jR.prototype={
gdT:function(a){return this.a+this.c.length},
n:function(a,b){return this.ba(b)},
ba:function(a){if(a!==0)throw H.l(P.jI(a,null,null))
return this.c},
$isdu:1,
gd_:function(a){return this.a}}
H.qR.prototype={
gV:function(a){return new H.qS(this.a,this.b,this.c,null)},
$asp:function(){return[P.du]}}
H.qS.prototype={
J:function(){var t,s,r,q,p,o,n
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
this.d=new H.jR(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gP:function(){return this.d}}
H.fh.prototype={
gab:function(a){return C.a0},
fM:function(a,b,c){return H.cO(a,b,c)},
fL:function(a){return this.fM(a,0,null)},
fK:function(a,b,c){var t
H.xj(a,b,c)
t=new DataView(a,b)
return t},
fJ:function(a,b){return this.fK(a,b,null)},
$isfh:1,
$isbh:1,
ge4:function(a){return a.byteLength}}
H.et.prototype={
fk:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dX(b,d,"Invalid list position"))
else throw H.l(P.bF(b,0,c,d,null))},
d9:function(a,b,c,d){if(b>>>0!==b||b>c)this.fk(a,b,c,d)},
$iset:1,
gbS:function(a){return a.buffer},
ge4:function(a){return a.byteLength}}
H.nk.prototype={
gab:function(a){return C.a1}}
H.jw.prototype={
gm:function(a){return a.length},
dG:function(a,b,c,d,e){var t,s,r
t=a.length
this.d9(a,b,t,"start")
this.d9(a,c,t,"end")
if(typeof b!=="number")return b.aB()
if(typeof c!=="number")return H.av(c)
if(b>c)throw H.l(P.bF(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a4()
if(e<0)throw H.l(P.dC(e))
r=d.length
if(r-e<s)throw H.l(new P.dO("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaU:1,
$asaU:function(){},
$isaP:1,
$asaP:function(){}}
H.hA.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
a[b]=c},
a9:function(a,b,c,d,e){if(!!J.aR(d).$ishA){this.dG(a,b,c,d,e)
return}this.d1(a,b,c,d,e)},
ax:function(a,b,c,d){return this.a9(a,b,c,d,0)}}
H.hC.prototype={
$asaU:function(){},
$asaP:function(){},
$asq:function(){return[P.T]},
$asv:function(){return[P.T]},
$asp:function(){return[P.T]},
$isq:1,
$isv:1,
$isp:1}
H.hE.prototype={
$asaU:function(){},
$asaP:function(){},
$asq:function(){return[P.T]},
$asv:function(){return[P.T]},
$asp:function(){return[P.T]}}
H.hB.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
a[b]=c},
a9:function(a,b,c,d,e){if(!!J.aR(d).$ishB){this.dG(a,b,c,d,e)
return}this.d1(a,b,c,d,e)},
ax:function(a,b,c,d){return this.a9(a,b,c,d,0)},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.hD.prototype={
$asaU:function(){},
$asaP:function(){},
$asq:function(){return[P.F]},
$asv:function(){return[P.F]},
$asp:function(){return[P.F]},
$isq:1,
$isv:1,
$isp:1}
H.hF.prototype={
$asaU:function(){},
$asaP:function(){},
$asq:function(){return[P.F]},
$asv:function(){return[P.F]},
$asp:function(){return[P.F]}}
H.nl.prototype={
gab:function(a){return C.a2},
$isq:1,
$asq:function(){return[P.T]},
$isv:1,
$asv:function(){return[P.T]},
$isp:1,
$asp:function(){return[P.T]}}
H.nm.prototype={
gab:function(a){return C.a3},
$isq:1,
$asq:function(){return[P.T]},
$isv:1,
$asv:function(){return[P.T]},
$isp:1,
$asp:function(){return[P.T]}}
H.nn.prototype={
gab:function(a){return C.a4},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.no.prototype={
gab:function(a){return C.a5},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.np.prototype={
gab:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.nq.prototype={
gab:function(a){return C.aa},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.nr.prototype={
gab:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.jx.prototype={
gab:function(a){return C.ac},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.fi.prototype={
gab:function(a){return C.ad},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
c4:function(a,b,c){return new Uint8Array(a.subarray(b,H.Gy(b,c,a.length)))},
$isfi:1,
$isd8:1,
$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
P.pQ.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pP.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.pR.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.pS.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.r5.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.r6.prototype={
$2:function(a,b){this.a.$2(1,new H.h5(a,b))},
$S:function(){return{func:1,args:[,P.dN]}}}
P.rg.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.F,,]}}}
P.cl.prototype={}
P.rh.prototype={
$0:function(){var t,s,r
try{this.b.aD(this.a.$0())}catch(r){t=H.ct(r)
s=H.cs(r)
P.xk(this.b,t,s)}},
$S:function(){return{func:1}}}
P.lZ.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.al(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.al(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.lY.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.x(r,t)
r[t]=a
if(s===0)this.d.de(r)}else if(t.b===0&&!this.b)this.d.al(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eX.prototype={}
P.k1.prototype={
cw:function(a,b){if(a==null)a=new P.fj()
if(this.a.a!==0)throw H.l(new P.dO("Future already completed"))
$.aD.toString
this.al(a,b)},
bm:function(a){return this.cw(a,null)},
$iseX:1,
gh7:function(){return this.a}}
P.dU.prototype={
az:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dO("Future already completed"))
t.d7(b)},
fP:function(a){return this.az(a,null)},
al:function(a,b){this.a.d8(a,b)}}
P.kd.prototype={
az:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dO("Future already completed"))
t.aD(b)},
al:function(a,b){this.a.al(a,b)}}
P.k5.prototype={
gfF:function(){return this.b.b},
gdY:function(){return(this.c&1)!==0},
ghe:function(){return(this.c&2)!==0},
gdX:function(){return this.c===8},
hc:function(a){return this.b.b.cP(this.d,a)},
hm:function(a){if(this.c!==6)return!0
return this.b.b.cP(this.d,J.fF(a))},
h8:function(a){var t,s,r
t=this.e
s=J.bp(a)
r=this.b.b
if(H.fD(t,{func:1,args:[,,]}))return r.hI(t,s.gaq(a),a.gaH())
else return r.cP(t,s.gaq(a))},
hd:function(){return this.b.b.ed(this.d)},
gck:function(){return this.a}}
P.bj.prototype={
gfl:function(){return this.a===2},
gcg:function(){return this.a>=4},
c0:function(a,b){var t=$.aD
if(t!==C.e){t.toString
if(b!=null)b=P.xn(b,t)}return this.cp(a,b)},
b0:function(a){return this.c0(a,null)},
cp:function(a,b){var t,s
t=new P.bj(0,$.aD,null,[null])
s=b==null?1:3
this.c5(new P.k5(null,t,s,a,b,[H.O(this,0),null]))
return t},
c2:function(a){var t,s
t=$.aD
s=new P.bj(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.O(this,0)
this.c5(new P.k5(null,s,8,a,null,[t,t]))
return s},
c5:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcg()){s.c5(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fB(null,null,t,new P.qb(this,a))}},
dA:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gck()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcg()){p.dA(a)
return}this.a=p.a
this.c=p.c}t.a=this.bM(a)
s=this.b
s.toString
P.fB(null,null,s,new P.qj(t,this))}},
bL:function(){var t=this.c
this.c=null
return this.bM(t)},
bM:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gck()
t.a=s}return s},
aD:function(a){var t,s
t=this.$ti
if(H.dV(a,"$iscl",t,"$ascl"))if(H.dV(a,"$isbj",t,null))P.qe(a,this)
else P.x9(a,this)
else{s=this.bL()
this.a=4
this.c=a
P.fw(this,s)}},
de:function(a){var t=this.bL()
this.a=4
this.c=a
P.fw(this,t)},
al:function(a,b){var t=this.bL()
this.a=8
this.c=new P.eS(a,b)
P.fw(this,t)},
f0:function(a){return this.al(a,null)},
d7:function(a){var t
if(H.dV(a,"$iscl",this.$ti,"$ascl")){this.eY(a)
return}this.a=1
t=this.b
t.toString
P.fB(null,null,t,new P.qd(this,a))},
eY:function(a){var t
if(H.dV(a,"$isbj",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fB(null,null,t,new P.qi(this,a))}else P.qe(a,this)
return}P.x9(a,this)},
d8:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fB(null,null,t,new P.qc(this,a,b))},
$iscl:1,
gbN:function(){return this.a},
gfw:function(){return this.c}}
P.qb.prototype={
$0:function(){P.fw(this.a,this.b)},
$S:function(){return{func:1}}}
P.qj.prototype={
$0:function(){P.fw(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qf.prototype={
$1:function(a){var t=this.a
t.a=0
t.aD(a)},
$S:function(){return{func:1,args:[,]}}}
P.qg.prototype={
$2:function(a,b){this.a.al(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qh.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.qd.prototype={
$0:function(){this.a.de(this.b)},
$S:function(){return{func:1}}}
P.qi.prototype={
$0:function(){P.qe(this.b,this.a)},
$S:function(){return{func:1}}}
P.qc.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.qm.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hd()}catch(q){s=H.ct(q)
r=H.cs(q)
if(this.c){p=J.fF(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eS(s,r)
o.a=!0
return}if(!!J.aR(t).$iscl){if(t instanceof P.bj&&t.gbN()>=4){if(t.gbN()===8){p=this.b
p.b=t.gfw()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b0(new P.qn(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qn.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.ql.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hc(this.c)}catch(r){t=H.ct(r)
s=H.cs(r)
q=this.a
q.b=new P.eS(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qk.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hm(t)===!0&&q.e!=null){p=this.b
p.b=q.h8(t)
p.a=!1}}catch(o){s=H.ct(o)
r=H.cs(o)
q=this.a
p=J.fF(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eS(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.k0.prototype={}
P.dh.prototype={
av:function(a,b){return new P.qA(b,this,[H.aL(this,"dh",0),null])},
ai:function(a,b){var t,s
t={}
s=new P.bj(0,$.aD,null,[P.d9])
t.a=null
t.a=this.aM(new P.oA(t,this,b,s),!0,new P.oB(s),s.gbb())
return s},
aa:function(a,b){var t,s
t={}
s=new P.bj(0,$.aD,null,[null])
t.a=null
t.a=this.aM(new P.oG(t,this,b,s),!0,new P.oH(s),s.gbb())
return s},
gm:function(a){var t,s
t={}
s=new P.bj(0,$.aD,null,[P.F])
t.a=0
this.aM(new P.oK(t),!0,new P.oL(t,s),s.gbb())
return s},
gX:function(a){var t,s
t={}
s=new P.bj(0,$.aD,null,[P.d9])
t.a=null
t.a=this.aM(new P.oI(t,s),!0,new P.oJ(s),s.gbb())
return s},
ao:function(a){var t,s,r
t=H.aL(this,"dh",0)
s=H.a([],[t])
r=new P.bj(0,$.aD,null,[[P.q,t]])
this.aM(new P.oM(this,s),!0,new P.oN(s,r),r.gbb())
return r},
gad:function(a){var t,s
t={}
s=new P.bj(0,$.aD,null,[H.aL(this,"dh",0)])
t.a=null
t.a=this.aM(new P.oC(t,this,s),!0,new P.oD(s),s.gbb())
return s}}
P.oA.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xr(new P.oy(this.c,a),new P.oz(t,s),P.xi(t.a,s))},
$S:function(){return H.eO(function(a){return{func:1,args:[a]}},this.b,"dh")}}
P.oy.prototype={
$0:function(){return J.bc(this.b,this.a)},
$S:function(){return{func:1}}}
P.oz.prototype={
$1:function(a){if(a===!0)P.uP(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.d9]}}}
P.oB.prototype={
$0:function(){this.a.aD(!1)},
$S:function(){return{func:1}}}
P.oG.prototype={
$1:function(a){P.xr(new P.oE(this.c,a),new P.oF(),P.xi(this.a.a,this.d))},
$S:function(){return H.eO(function(a){return{func:1,args:[a]}},this.b,"dh")}}
P.oE.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oF.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oH.prototype={
$0:function(){this.a.aD(null)},
$S:function(){return{func:1}}}
P.oK.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oL.prototype={
$0:function(){this.b.aD(this.a.a)},
$S:function(){return{func:1}}}
P.oI.prototype={
$1:function(a){P.uP(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oJ.prototype={
$0:function(){this.a.aD(!0)},
$S:function(){return{func:1}}}
P.oM.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eO(function(a){return{func:1,args:[a]}},this.a,"dh")}}
P.oN.prototype={
$0:function(){this.b.aD(this.a)},
$S:function(){return{func:1}}}
P.oC.prototype={
$1:function(a){P.uP(this.a.a,this.c,a)},
$S:function(){return H.eO(function(a){return{func:1,args:[a]}},this.b,"dh")}}
P.oD.prototype={
$0:function(){var t,s,r,q
try{r=H.jo()
throw H.l(r)}catch(q){t=H.ct(q)
s=H.cs(q)
P.xk(this.a,t,s)}},
$S:function(){return{func:1}}}
P.ox.prototype={}
P.di.prototype={
cI:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dO()
if((t&4)===0&&(this.e&32)===0)this.dm(this.gdw())},
e9:function(a){return this.cI(a,null)},
ec:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gX(t)}else t=!1
if(t)this.r.c3(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dm(this.gdz())}}}},
bT:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.c7()
t=this.f
return t==null?$.$get$hf():t},
c7:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dO()
if((this.e&32)===0)this.r=null
this.f=this.dv()},
bG:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dD(b)
else this.c6(new P.q_(b,null,[H.aL(this,"di",0)]))},
bF:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dF(a,b)
else this.c6(new P.q1(a,b,null))},
eX:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dE()
else this.c6(C.J)},
bJ:function(){},
bK:function(){},
dv:function(){return},
c6:function(a){var t,s
t=this.r
if(t==null){t=new P.qP(null,null,0,[H.aL(this,"di",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c3(this)}},
dD:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cQ(this.a,a)
this.e=(this.e&4294967263)>>>0
this.c8((t&4)!==0)},
dF:function(a,b){var t,s
t=this.e
s=new P.pV(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.c7()
t=this.f
if(!!J.aR(t).$iscl&&t!==$.$get$hf())t.c2(s)
else s.$0()}else{s.$0()
this.c8((t&4)!==0)}},
dE:function(){var t,s
t=new P.pU(this)
this.c7()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aR(s).$iscl&&s!==$.$get$hf())s.c2(t)
else t.$0()},
dm:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.c8((t&4)!==0)},
c8:function(a){var t,s
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
if(s)this.bJ()
else this.bK()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c3(this)},
eQ:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xn(b,t)
this.c=c},
gbN:function(){return this.e}}
P.pV.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fD(s,{func:1,args:[P.ao,P.dN]})
q=t.d
p=this.b
o=t.b
if(r)q.hJ(o,p,this.c)
else q.cQ(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.pU.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.ee(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.k3.prototype={
gbv:function(a){return this.a},
sbv:function(a,b){return this.a=b}}
P.q_.prototype={
cJ:function(a){a.dD(this.b)}}
P.q1.prototype={
cJ:function(a){a.dF(this.b,this.c)},
$ask3:function(){},
gaq:function(a){return this.b},
gaH:function(){return this.c}}
P.q0.prototype={
cJ:function(a){a.dE()},
gbv:function(a){return},
sbv:function(a,b){throw H.l(new P.dO("No events after a done."))}}
P.qC.prototype={
c3:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xI(new P.qD(this,a))
this.a=1},
dO:function(){if(this.a===1)this.a=3},
gbN:function(){return this.a}}
P.qD.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbv(r)
t.b=q
if(q==null)t.c=null
r.cJ(this.b)},
$S:function(){return{func:1}}}
P.qP.prototype={
gX:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbv(0,b)
this.c=b}}}
P.qQ.prototype={}
P.r8.prototype={
$0:function(){return this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.r7.prototype={
$2:function(a,b){P.Gx(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dN]}}}
P.r9.prototype={
$0:function(){return this.a.aD(this.b)},
$S:function(){return{func:1}}}
P.hT.prototype={
aM:function(a,b,c,d){return this.f3(a,d,c,!0===b)},
e5:function(a,b,c){return this.aM(a,null,b,c)},
f3:function(a,b,c,d){return P.Gc(this,a,b,c,d,H.aL(this,"hT",0),H.aL(this,"hT",1))},
dn:function(a,b){b.bG(0,a)},
fi:function(a,b,c){c.bF(a,b)},
$asdh:function(a,b){return[b]}}
P.hU.prototype={
bG:function(a,b){if((this.e&2)!==0)return
this.eG(0,b)},
bF:function(a,b){if((this.e&2)!==0)return
this.eH(a,b)},
bJ:function(){var t=this.y
if(t==null)return
t.e9(0)},
bK:function(){var t=this.y
if(t==null)return
t.ec(0)},
dv:function(){var t=this.y
if(t!=null){this.y=null
return t.bT(0)}return},
fd:function(a){this.x.dn(a,this)},
fh:function(a,b){this.x.fi(a,b,this)},
ff:function(){this.eX()},
eT:function(a,b,c,d,e,f,g){this.y=this.x.a.e5(this.gfc(),this.gfe(),this.gfg())},
$asdi:function(a,b){return[b]}}
P.qA.prototype={
dn:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.ct(q)
r=H.cs(q)
P.Gw(b,s,r)
return}b.bG(0,t)}}
P.eS.prototype={
D:function(a){return H.B(this.a)},
$isee:1,
gaq:function(a){return this.a},
gaH:function(){return this.b}}
P.r4.prototype={}
P.rf.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fj()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.l(t)
r=H.l(t)
r.stack=J.cJ(s)
throw r},
$S:function(){return{func:1}}}
P.qG.prototype={
ee:function(a){var t,s,r,q
try{if(C.e===$.aD){r=a.$0()
return r}r=P.xo(null,null,this,a)
return r}catch(q){t=H.ct(q)
s=H.cs(q)
r=P.kg(null,null,this,t,s)
return r}},
cQ:function(a,b){var t,s,r,q
try{if(C.e===$.aD){r=a.$1(b)
return r}r=P.xq(null,null,this,a,b)
return r}catch(q){t=H.ct(q)
s=H.cs(q)
r=P.kg(null,null,this,t,s)
return r}},
hJ:function(a,b,c){var t,s,r,q
try{if(C.e===$.aD){r=a.$2(b,c)
return r}r=P.xp(null,null,this,a,b,c)
return r}catch(q){t=H.ct(q)
s=H.cs(q)
r=P.kg(null,null,this,t,s)
return r}},
cu:function(a,b){if(b)return new P.qH(this,a)
else return new P.qI(this,a)},
fN:function(a,b){return new P.qJ(this,a)},
n:function(a,b){return},
ed:function(a){if($.aD===C.e)return a.$0()
return P.xo(null,null,this,a)},
cP:function(a,b){if($.aD===C.e)return a.$1(b)
return P.xq(null,null,this,a,b)},
hI:function(a,b,c){if($.aD===C.e)return a.$2(b,c)
return P.xp(null,null,this,a,b,c)}}
P.qH.prototype={
$0:function(){return this.a.ee(this.b)},
$S:function(){return{func:1}}}
P.qI.prototype={
$0:function(){return this.a.ed(this.b)},
$S:function(){return{func:1}}}
P.qJ.prototype={
$1:function(a){return this.a.cQ(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qp.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gb9:function(a){var t=H.O(this,0)
return H.dt(new P.qq(this,[t]),new P.qs(this),t,H.O(this,1))},
a_:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.f2(b)},
f2:function(a){var t=this.d
if(t==null)return!1
return this.aL(t[this.aK(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fa(0,b)},
fa:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aK(b)]
r=this.aL(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.uN()
this.b=t}this.dc(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.uN()
this.c=s}this.dc(s,b,c)}else this.fz(b,c)},
fz:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.uN()
this.d=t}s=this.aK(a)
r=t[s]
if(r==null){P.uO(t,s,[a,b]);++this.a
this.e=null}else{q=this.aL(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cn(0,b)},
cn:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aK(b)]
r=this.aL(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
aa:function(a,b){var t,s,r,q
t=this.ca()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.l(new P.bN(this))}},
ca:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dc:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uO(a,b,c)},
bi:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Ge(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aK:function(a){return J.dB(a)&0x3ffffff},
aL:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.bc(a[s],b))return s
return-1},
$isbo:1,
$asbo:null}
P.qs.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qq.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gV:function(a){var t=this.a
return new P.qr(t,t.ca(),0,null,this.$ti)},
ai:function(a,b){return this.a.a_(0,b)},
aa:function(a,b){var t,s,r,q
t=this.a
s=t.ca()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.l(new P.bN(t))}}}
P.qr.prototype={
gP:function(){return this.d},
J:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.l(new P.bN(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.k8.prototype={
bs:function(a){return H.Hk(a)&0x3ffffff},
bt:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ge1()
if(r==null?b==null:r===b)return s}return-1}}
P.k7.prototype={
gV:function(a){var t=new P.dx(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gX:function(a){return this.a===0},
ai:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.f1(b)},
f1:function(a){var t=this.d
if(t==null)return!1
return this.aL(t[this.aK(a)],a)>=0},
cF:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ai(0,a)?a:null
else return this.fm(a)},
fm:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aK(a)]
r=this.aL(s,a)
if(r<0)return
return J.i3(s,r).gdj()},
aa:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.l(new P.bN(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.da(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.da(r,b)}else return this.aJ(0,b)},
aJ:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.Gf()
this.d=t}s=this.aK(b)
r=t[s]
if(r==null)t[s]=[this.c9(b)]
else{if(this.aL(r,b)>=0)return!1
r.push(this.c9(b))}return!0},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cn(0,b)},
cn:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aK(b)]
r=this.aL(s,b)
if(r<0)return!1
this.dd(s.splice(r,1)[0])
return!0},
bc:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
da:function(a,b){if(a[b]!=null)return!1
a[b]=this.c9(b)
return!0},
bi:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dd(t)
delete a[b]
return!0},
c9:function(a){var t,s
t=new P.qw(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dd:function(a){var t,s
t=a.gf_()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aK:function(a){return J.dB(a)&0x3ffffff},
aL:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bc(a[s].gdj(),b))return s
return-1},
$isez:1,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
P.qw.prototype={
gdj:function(){return this.a},
gf_:function(){return this.c}}
P.dx.prototype={
gP:function(){return this.d},
J:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bN(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qt.prototype={}
P.fe.prototype={
av:function(a,b){return H.dt(this,b,H.aL(this,"fe",0),null)},
ai:function(a,b){var t
for(t=this.gV(this);t.J();)if(J.bc(t.gP(),b))return!0
return!1},
aa:function(a,b){var t
for(t=this.gV(this);t.J();)b.$1(t.gP())},
a3:function(a,b){return P.df(this,!0,H.aL(this,"fe",0))},
ao:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gV(this)
for(s=0;t.J();)++s
return s},
gX:function(a){return!this.gV(this).J()},
D:function(a){return P.tL(this,"(",")")},
$isp:1,
$asp:null}
P.hn.prototype={}
P.js.prototype={}
P.hG.prototype={$asq:null,$asv:null,$asp:null,$isq:1,$isv:1,$isp:1}
P.b6.prototype={
gV:function(a){return new H.er(a,this.gm(a),0,null,[H.aL(a,"b6",0)])},
T:function(a,b){return this.n(a,b)},
aa:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.l(new P.bN(a))}},
gX:function(a){return this.gm(a)===0},
ai:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.bc(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.l(new P.bN(a))}return!1},
av:function(a,b){return new H.fg(a,b,[H.aL(a,"b6",0),null])},
cY:function(a,b){return H.wK(a,b,null,H.aL(a,"b6",0))},
a3:function(a,b){var t,s,r
t=H.a([],[H.aL(a,"b6",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
ao:function(a){return this.a3(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bV:function(a,b,c,d){var t
P.dg(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a9:function(a,b,c,d,e){var t,s,r,q,p,o
P.dg(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.ak()
if(typeof b!=="number")return H.av(b)
t=c-b
if(t===0)return
if(J.ea(e,0))H.ba(P.bF(e,0,null,"skipCount",null))
if(H.dV(d,"$isq",[H.aL(a,"b6",0)],"$asq")){s=e
r=d}else{r=J.y5(d,e).a3(0,!1)
s=0}q=J.ki(s)
p=J.bg(r)
if(J.cu(q.U(s,t),p.gm(r)))throw H.l(H.wj())
if(q.a4(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.U(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.U(s,o)))},
ax:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aA:function(a,b,c,d){var t,s,r,q,p
P.dg(b,c,this.gm(a),null,null,null)
d=C.c.ao(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.ax(a,b,r,d)
if(q!==0){this.a9(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a9(a,r,p,a,c)
this.ax(a,b,r,d)}},
aY:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.bc(this.n(a,t),b))return t
return-1},
be:function(a,b){return this.aY(a,b,0)},
D:function(a){return P.jn(a,"[","]")},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
P.qX.prototype={
i:function(a,b,c){throw H.l(new P.Z("Cannot modify unmodifiable map"))},
$isbo:1,
$asbo:null}
P.n8.prototype={
n:function(a,b){return J.i3(this.a,b)},
i:function(a,b,c){J.kn(this.a,b,c)},
aa:function(a,b){J.xW(this.a,b)},
gX:function(a){return J.rJ(this.a)},
gm:function(a){return J.ck(this.a)},
D:function(a){return J.cJ(this.a)},
$isbo:1,
$asbo:null}
P.hN.prototype={$asbo:null,$isbo:1}
P.n9.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.O+=", "
t.a=!1
t=this.b
s=t.O+=H.B(a)
t.O=s+": "
t.O+=H.B(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mW.prototype={
gV:function(a){return new P.qx(this,this.c,this.d,this.b,null,this.$ti)},
aa:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.x(r,s)
b.$1(r[s])
if(t!==this.d)H.ba(new P.bN(this))}},
gX:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
T:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.av(b)
if(0>b||b>=t)H.ba(P.by(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.x(s,q)
return s[q]},
a3:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fE(t)
return t},
ao:function(a){return this.a3(a,!0)},
h:function(a,b){this.aJ(0,b)},
bc:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.x(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
D:function(a){return P.jn(this,"{","}")},
eb:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.l(H.jo());++this.d
s=this.a
r=s.length
if(t>=r)return H.x(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aJ:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.x(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dl();++this.d},
dl:function(){var t,s,r,q
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
fE:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a9(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a9(a,0,p,r,t)
C.b.a9(a,p,p+this.c,this.a,0)
return this.c+p}},
eL:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asv:null,
$asp:null}
P.qx.prototype={
gP:function(){return this.e},
J:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.ba(new P.bN(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.x(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.og.prototype={
gX:function(a){return this.a===0},
bP:function(a,b){var t
for(t=J.cI(b);t.J();)this.h(0,t.gP())},
a3:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dx(this,this.r,null,null,[null]),s.c=this.e,r=0;s.J();r=p){q=s.d
p=r+1
if(r>=t.length)return H.x(t,r)
t[r]=q}return t},
ao:function(a){return this.a3(a,!0)},
av:function(a,b){return new H.fX(this,b,[H.O(this,0),null])},
D:function(a){return P.jn(this,"{","}")},
aa:function(a,b){var t
for(t=new P.dx(this,this.r,null,null,[null]),t.c=this.e;t.J();)b.$1(t.d)},
bf:function(a,b){var t,s
t=new P.dx(this,this.r,null,null,[null])
t.c=this.e
if(!t.J())return""
if(b===""){s=""
do s+=H.B(t.d)
while(t.J())}else{s=H.B(t.d)
for(;t.J();)s=s+b+H.B(t.d)}return s.charCodeAt(0)==0?s:s},
$isez:1,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
P.of.prototype={}
P.kD.prototype={
hq:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bg(b)
a1=P.dg(a0,a1,t.gm(b),null,null,null)
s=$.$get$x8()
if(typeof a1!=="number")return H.av(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.Z(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.ro(C.c.a5(b,l))
h=H.ro(C.c.a5(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.x(s,g)
f=s[g]
if(f>=0){g=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.O.length
if(e==null)e=0
if(typeof e!=="number")return e.U()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.ca("")
p.O+=C.c.M(b,q,r)
p.O+=H.hH(k)
q=l
continue}}throw H.l(new P.bK("Invalid base64 data",b,r))}if(p!=null){t=p.O+=t.M(b,q,a1)
e=t.length
if(o>=0)P.vb(b,n,a1,o,m,e)
else{d=C.a.bE(e-1,4)+1
if(d===1)throw H.l(new P.bK("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.O=t;++d}}t=p.O
return C.c.aA(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.vb(b,n,a1,o,m,c)
else{d=C.d.bE(c,4)
if(d===1)throw H.l(new P.bK("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aA(b,a1,a1,d===2?"==":"=")}return b},
$asfR:function(){return[[P.q,P.F],P.C]}}
P.kE.prototype={
$asfT:function(){return[[P.q,P.F],P.C]}}
P.fR.prototype={}
P.fT.prototype={}
P.li.prototype={
$asfR:function(){return[P.C,[P.q,P.F]]}}
P.pr.prototype={
gK:function(a){return"utf-8"}}
P.ps.prototype={
cz:function(a,b,c){var t,s,r,q
t=J.ck(a)
P.dg(b,c,t,null,null,null)
s=new P.ca("")
r=new P.qZ(!1,s,!0,0,0,0)
r.cz(a,b,t)
r.h3(0,a,t)
q=s.O
return q.charCodeAt(0)==0?q:q},
fS:function(a){return this.cz(a,0,null)},
$asfT:function(){return[[P.q,P.F],P.C]}}
P.qZ.prototype={
h3:function(a,b,c){if(this.e>0)throw H.l(new P.bK("Unfinished UTF-8 octet sequence",b,c))},
cz:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.r0(c)
p=new P.r_(this,a,b,c)
$loop$0:for(o=J.bg(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aG()
if((l&192)!==128){k=new P.bK("Bad UTF-8 encoding 0x"+C.d.bA(l,16),a,m)
throw H.l(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.x(C.w,k)
if(t<=C.w[k]){k=new P.bK("Overlong encoding of 0x"+C.a.bA(t,16),a,m-r-1)
throw H.l(k)}if(t>1114111){k=new P.bK("Character outside valid Unicode range: 0x"+C.a.bA(t,16),a,m-r-1)
throw H.l(k)}if(!this.c||t!==65279)n.O+=H.hH(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cu(j,0)){this.c=!1
if(typeof j!=="number")return H.av(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dz(l)
if(g.a4(l,0)){g=new P.bK("Negative UTF-8 code unit: -0x"+J.y8(g.cU(l),16),a,h-1)
throw H.l(g)}else{if(typeof l!=="number")return l.aG()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bK("Bad UTF-8 encoding 0x"+C.d.bA(l,16),a,h-1)
throw H.l(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.r0.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bg(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aG()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.F,args:[,P.F]}}}
P.r_.prototype={
$2:function(a,b){this.a.b.O+=P.oS(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.F,P.F]}}}
P.d9.prototype={}
P.bG.prototype={}
P.e_.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.e_))return!1
return this.a===b.a&&this.b===b.b},
ay:function(a,b){return C.a.ay(this.a,b.gfD())},
ga6:function(a){var t=this.a
return(t^C.a.aT(t,30))&1073741823},
D:function(a){var t,s,r,q,p,o,n
t=P.yV(H.ww(this))
s=P.id(H.uj(this))
r=P.id(H.ui(this))
q=P.id(H.F8(this))
p=P.id(H.Fa(this))
o=P.id(H.Fb(this))
n=P.yW(H.F9(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.yU(C.a.U(this.a,b.ghX()),this.b)},
ghn:function(){return this.a},
d3:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.l(P.dC(this.ghn()))},
$isbG:1,
$asbG:function(){return[P.e_]},
gfD:function(){return this.a}}
P.T.prototype={$isbG:1,
$asbG:function(){return[P.dl]}}
P.dF.prototype={
U:function(a,b){return new P.dF(this.a+b.gbj())},
ar:function(a,b){return new P.dF(C.a.by(this.a*b))},
a4:function(a,b){return C.a.a4(this.a,b.gbj())},
aB:function(a,b){return C.a.aB(this.a,b.gbj())},
as:function(a,b){return C.a.as(this.a,b.gbj())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dF))return!1
return this.a===b.a},
ga6:function(a){return this.a&0x1FFFFFFF},
ay:function(a,b){return C.a.ay(this.a,b.gbj())},
D:function(a){var t,s,r,q,p
t=new P.lg()
s=this.a
if(s<0)return"-"+new P.dF(0-s).D(0)
r=t.$1(C.a.am(s,6e7)%60)
q=t.$1(C.a.am(s,1e6)%60)
p=new P.lf().$1(s%1e6)
return""+C.a.am(s,36e8)+":"+H.B(r)+":"+H.B(q)+"."+H.B(p)},
cU:function(a){return new P.dF(0-this.a)},
$isbG:1,
$asbG:function(){return[P.dF]},
gbj:function(){return this.a}}
P.lf.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.C,args:[P.F]}}}
P.lg.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.C,args:[P.F]}}}
P.ee.prototype={
gaH:function(){return H.cs(this.$thrownJsError)}}
P.fj.prototype={
D:function(a){return"Throw of null."}}
P.d_.prototype={
gcc:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcb:function(){return""},
D:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.B(t)
q=this.gcc()+s+r
if(!this.a)return q
p=this.gcb()
o=P.vs(this.b)
return q+p+": "+H.B(o)},
gK:function(a){return this.c}}
P.ey.prototype={
gcc:function(){return"RangeError"},
gcb:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.B(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.B(t)
else{if(typeof r!=="number")return r.aB()
if(r>t)s=": Not in range "+H.B(t)+".."+H.B(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.B(t)}}return s}}
P.mi.prototype={
gcc:function(){return"RangeError"},
gcb:function(){if(J.ea(this.b,0))return": index must not be negative"
var t=this.f
if(J.bc(t,0))return": no indices are valid"
return": index should be less than "+H.B(t)},
gm:function(a){return this.f}}
P.Z.prototype={
D:function(a){return"Unsupported operation: "+this.a}}
P.eE.prototype={
D:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.B(t):"UnimplementedError"}}
P.dO.prototype={
D:function(a){return"Bad state: "+this.a}}
P.bN.prototype={
D:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.B(P.vs(t))+"."}}
P.nA.prototype={
D:function(a){return"Out of Memory"},
gaH:function(){return},
$isee:1}
P.jQ.prototype={
D:function(a){return"Stack Overflow"},
gaH:function(){return},
$isee:1}
P.l7.prototype={
D:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.B(t)+"' during its initialization"}}
P.qa.prototype={
D:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.B(t)}}
P.bK.prototype={
D:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.B(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a4()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.M(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.av(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a5(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.B(r-o+1)+")\n"):s+(" (at character "+H.B(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.Z(q,m)
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
g=""}f=C.c.M(q,i,j)
return s+h+f+g+"\n"+C.c.ar(" ",r-i+h.length)+"^\n"}}
P.lo.prototype={
D:function(a){return"Expando:"+H.B(this.a)},
n:function(a,b){var t,s
t=this.bI
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.ba(P.dX(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.uk(b,"expando$values")
return s==null?null:H.uk(s,t)},
i:function(a,b,c){var t,s
t=this.bI
if(typeof t!=="string")t.set(b,c)
else{s=H.uk(b,"expando$values")
if(s==null){s=new P.ao()
H.wA(b,"expando$values",s)}H.wA(s,t,c)}},
gK:function(a){return this.a}}
P.F.prototype={$isbG:1,
$asbG:function(){return[P.dl]}}
P.p.prototype={
av:function(a,b){return H.dt(this,b,H.aL(this,"p",0),null)},
ai:function(a,b){var t
for(t=this.gV(this);t.J();)if(J.bc(t.gP(),b))return!0
return!1},
aa:function(a,b){var t
for(t=this.gV(this);t.J();)b.$1(t.gP())},
a3:function(a,b){return P.df(this,!0,H.aL(this,"p",0))},
ao:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gV(this)
for(s=0;t.J();)++s
return s},
gX:function(a){return!this.gV(this).J()},
T:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.yb("index"))
if(b<0)H.ba(P.bF(b,0,null,"index",null))
for(t=this.gV(this),s=0;t.J();){r=t.gP()
if(b===s)return r;++s}throw H.l(P.by(b,this,"index",null,s))},
D:function(a){return P.tL(this,"(",")")},
$asp:null}
P.jp.prototype={}
P.q.prototype={$asq:null,$isv:1,$asv:null,$isp:1,$asp:null}
P.bo.prototype={$asbo:null}
P.cP.prototype={
ga6:function(a){return P.ao.prototype.ga6.call(this,this)},
D:function(a){return"null"}}
P.dl.prototype={$isbG:1,
$asbG:function(){return[P.dl]}}
P.ao.prototype={constructor:P.ao,$isao:1,
S:function(a,b){return this===b},
ga6:function(a){return H.eu(this)},
D:function(a){return H.jG(this)},
gab:function(a){return new H.dS(H.kk(this),null)},
toString:function(){return this.D(this)}}
P.du.prototype={}
P.ez.prototype={}
P.dN.prototype={}
P.C.prototype={$isbG:1,
$asbG:function(){return[P.C]}}
P.ca.prototype={
gm:function(a){return this.O.length},
gX:function(a){return this.O.length===0},
D:function(a){var t=this.O
return t.charCodeAt(0)==0?t:t},
gO:function(){return this.O}}
P.eG.prototype={}
P.po.prototype={
$2:function(a,b){var t,s,r,q
t=J.bg(b)
s=t.be(b,"=")
if(s===-1){if(!t.S(b,""))J.kn(a,P.qY(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.M(b,0,s)
q=C.c.ag(b,s+1)
t=this.a
J.kn(a,P.qY(r,0,r.length,t,!0),P.qY(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pl.prototype={
$2:function(a,b){throw H.l(new P.bK("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.C,P.F]}}}
P.pm.prototype={
$2:function(a,b){throw H.l(new P.bK("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.C],opt:[,]}}}
P.pn.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fl(C.c.M(this.a,a,b),16,null)
s=J.dz(t)
if(s.a4(t,0)||s.aB(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.F,args:[P.F,P.F]}}}
P.ke.prototype={
gek:function(){return this.b},
gcD:function(a){var t=this.c
if(t==null)return""
if(C.c.af(t,"["))return C.c.M(t,1,t.length-1)
return t},
gcK:function(a){var t=this.d
if(t==null)return P.xb(this.a)
return t},
gcL:function(a){var t=this.f
return t==null?"":t},
gdW:function(){var t=this.r
return t==null?"":t},
gcM:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.C
s=new P.hN(P.x1(t==null?"":t,C.o),[s,s])
this.Q=s
t=s}return t},
gdZ:function(){return this.c!=null},
ge0:function(){return this.f!=null},
ge_:function(){return this.r!=null},
D:function(a){var t=this.y
if(t==null){t=this.dr()
this.y=t}return t},
dr:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.B(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.B(s)}else t=s
t+=H.B(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
S:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aR(b)
if(!!t.$iseG){if(this.a===b.gcV())if(this.c!=null===b.gdZ()){s=this.b
r=b.gek()
if(s==null?r==null:s===r){s=this.gcD(this)
r=t.gcD(b)
if(s==null?r==null:s===r)if(J.bc(this.gcK(this),t.gcK(b)))if(J.bc(this.e,t.ge8(b))){s=this.f
r=s==null
if(!r===b.ge0()){if(r)s=""
if(s===t.gcL(b)){t=this.r
s=t==null
if(!s===b.ge_()){if(s)t=""
t=t===b.gdW()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga6:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dr()
this.y=t}t=C.c.ga6(t)
this.z=t}return t},
$iseG:1,
gcV:function(){return this.a},
ge8:function(a){return this.e}}
P.ri.prototype={
$1:function(a){throw H.l(new P.bK("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pk.prototype={
gej:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.x(t,0)
s=this.a
t=t[0]+1
r=J.bg(s)
q=r.aY(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fz(s,o,p,C.l,!1)
if(n==null)n=r.M(s,o,p)
p=q}else n=null
m=P.fz(s,t,p,C.D,!1)
t=new P.pZ(this,"data",null,null,null,m==null?r.M(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
D:function(a){var t,s
t=this.b
if(0>=t.length)return H.x(t,0)
s=this.a
return t[0]===-1?"data:"+H.B(s):s}}
P.rc.prototype={
$1:function(a){return new Uint8Array(H.cy(96))},
$S:function(){return{func:1,args:[,]}}}
P.rb.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.x(t,a)
t=t[a]
J.xV(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.d8,args:[,,]}}}
P.rd.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dk(a),r=0;r<t;++r)s.i(a,C.c.a5(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.C,P.F]}}}
P.re.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a5(b,0),s=C.c.a5(b,1),r=J.dk(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.C,P.F]}}}
P.qO.prototype={
gdZ:function(){return this.c>0},
ge0:function(){var t=this.f
if(typeof t!=="number")return t.a4()
return t<this.r},
ge_:function(){return this.r<this.a.length},
gcV:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.af(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.af(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.af(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.af(this.a,"package")){this.x="package"
t="package"}else{t=C.c.M(this.a,0,t)
this.x=t}return t},
gek:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.M(this.a,s,t-1):""},
gcD:function(a){var t=this.c
return t>0?C.c.M(this.a,t,this.d):""},
gcK:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.U()
s=this.e
if(typeof s!=="number")return H.av(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.U()
return H.fl(C.c.M(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.af(this.a,"http"))return 80
if(t===5&&C.c.af(this.a,"https"))return 443
return 0},
ge8:function(a){return C.c.M(this.a,this.e,this.f)},
gcL:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a4()
return t<s?C.c.M(this.a,t+1,s):""},
gdW:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ag(s,t+1):""},
gcM:function(){var t=this.f
if(typeof t!=="number")return t.a4()
if(t>=this.r)return C.a_
t=P.C
return new P.hN(P.x1(this.gcL(this),C.o),[t,t])},
ga6:function(a){var t=this.y
if(t==null){t=C.c.ga6(this.a)
this.y=t}return t},
S:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aR(b)
if(!!t.$iseG)return this.a===t.D(b)
return!1},
D:function(a){return this.a},
$iseG:1}
P.pZ.prototype={}
W.aC.prototype={}
W.eQ.prototype={
D:function(a){return String(a)},
$iseQ:1,
$isj:1,
gae:function(a){return a.href}}
W.ku.prototype={
D:function(a){return String(a)},
$isj:1,
gae:function(a){return a.href}}
W.eU.prototype={$iseU:1,$isdp:1,$isaQ:1,$isao:1}
W.cK.prototype={$isao:1}
W.kB.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.cK]},
$isv:1,
$asv:function(){return[W.cK]},
$isp:1,
$asp:function(){return[W.cK]},
$isaU:1,
$asaU:function(){return[W.cK]},
$isaP:1,
$asaP:function(){return[W.cK]}}
W.h_.prototype={
$asq:function(){return[W.cK]},
$asv:function(){return[W.cK]},
$asp:function(){return[W.cK]},
$isq:1,
$isv:1,
$isp:1}
W.h2.prototype={
$asq:function(){return[W.cK]},
$asv:function(){return[W.cK]},
$asp:function(){return[W.cK]},
$isq:1,
$isv:1,
$isp:1}
W.kF.prototype={
gae:function(a){return a.href}}
W.eV.prototype={$iseV:1}
W.kJ.prototype={$isj:1}
W.fQ.prototype={$isfQ:1,
gK:function(a){return a.name}}
W.ec.prototype={$isj:1,
gm:function(a){return a.length}}
W.kU.prototype={$isj:1}
W.i9.prototype={
cB:function(a,b){return typeof console!="undefined"?console.error(b):null},
ba:function(a){return typeof console!="undefined"?console.group(a):null},
e2:function(a){return typeof console!="undefined"?console.info(a):null},
hN:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fU.prototype={
gK:function(a){return a.name}}
W.l_.prototype={
gaI:function(a){return a.style}}
W.l0.prototype={
gae:function(a){return a.href}}
W.fV.prototype={
gaI:function(a){return a.style}}
W.fW.prototype={
gK:function(a){return a.name}}
W.l1.prototype={
gaI:function(a){return a.style}}
W.bJ.prototype={$isbJ:1,$isao:1}
W.eY.prototype={
bD:function(a,b){var t=this.fb(a,b)
return t!=null?t:""},
fb:function(a,b){if(W.yT(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.yX()+b)},
L:function(a,b){return a.item(b)},
gbd:function(a){return a.content},
gbo:function(a){return a.display},
sbo:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iE.prototype={}
W.pX.prototype={
bD:function(a,b){var t=this.b
return J.y0(t.gad(t),b)},
fA:function(a,b){var t
for(t=this.a,t=new H.er(t,t.gm(t),0,null,[H.O(t,0)]);t.J();)t.d.style[a]=b},
sbo:function(a,b){this.fA("display",b)},
eR:function(a){var t=P.df(this.a,!0,null)
this.b=new H.fg(t,new W.pY(),[H.O(t,0),null])}}
W.jA.prototype={}
W.pY.prototype={
$1:function(a){return J.rL(a)},
$S:function(){return{func:1,args:[,]}}}
W.ib.prototype={
gbd:function(a){return this.bD(a,"content")},
gbo:function(a){return this.bD(a,"display")}}
W.l2.prototype={
gaI:function(a){return a.style}}
W.l3.prototype={
gaI:function(a){return a.style}}
W.l8.prototype={
gcC:function(a){return a.files}}
W.eZ.prototype={$iseZ:1,$isao:1}
W.ic.prototype={
bO:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
L:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.ed.prototype={$ised:1}
W.ie.prototype={$isj:1}
W.ig.prototype={
gK:function(a){return a.name}}
W.lb.prototype={
gK:function(a){var t=a.name
if(P.vr()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vr()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
D:function(a){return String(a)}}
W.ih.prototype={
D:function(a){return"Rectangle ("+H.B(a.left)+", "+H.B(a.top)+") "+H.B(this.gb3(a))+" x "+H.B(this.gaX(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.aR(b)
if(!t.$isbU)return!1
return a.left===t.gbX(b)&&a.top===t.gc1(b)&&this.gb3(a)===t.gb3(b)&&this.gaX(a)===t.gaX(b)},
ga6:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb3(a)
q=this.gaX(a)
return W.xa(W.eN(W.eN(W.eN(W.eN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaX:function(a){return a.height},
gbX:function(a){return a.left},
gc1:function(a){return a.top},
gb3:function(a){return a.width},
$isbU:1,
$asbU:function(){}}
W.ii.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$isp:1,
$asp:function(){return[P.C]},
$isaU:1,
$asaU:function(){return[P.C]},
$isaP:1,
$asaP:function(){return[P.C]}}
W.iF.prototype={
$asq:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isq:1,
$isv:1,
$isp:1}
W.iZ.prototype={
$asq:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isq:1,
$isv:1,
$isp:1}
W.ij.prototype={
L:function(a,b){return a.item(b)}}
W.ik.prototype={
h:function(a,b){return a.add(b)},
ai:function(a,b){return a.contains(b)},
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.k4.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot modify list"))},
sm:function(a,b){throw H.l(new P.Z("Cannot modify list"))},
gaI:function(a){return W.Gb(this)},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
W.dp.prototype={
gdP:function(a){return new W.q4(a)},
D:function(a){return a.localName},
br:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$isdp:1,
$isaQ:1,
$isao:1,
$isj:1,
gaI:function(a){return a.style}}
W.lh.prototype={
gK:function(a){return a.name}}
W.fY.prototype={
gK:function(a){return a.name}}
W.fZ.prototype={$isfZ:1,
gaq:function(a){return a.error}}
W.U.prototype={$isU:1,$isao:1}
W.aV.prototype={
fH:function(a,b,c,d){if(c!=null)this.eW(a,b,c,!1)},
hD:function(a,b,c,d){if(c!=null)this.fv(a,b,c,!1)},
eW:function(a,b,c,d){return a.addEventListener(b,H.dj(c,1),!1)},
fv:function(a,b,c,d){return a.removeEventListener(b,H.dj(c,1),!1)}}
W.lO.prototype={
gK:function(a){return a.name}}
W.cd.prototype={$iscd:1,$isao:1,
gK:function(a){return a.name}}
W.f5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isf5:1,
$isaU:1,
$asaU:function(){return[W.cd]},
$isaP:1,
$asaP:function(){return[W.cd]},
$isq:1,
$asq:function(){return[W.cd]},
$isv:1,
$asv:function(){return[W.cd]},
$isp:1,
$asp:function(){return[W.cd]}}
W.iG.prototype={
$asq:function(){return[W.cd]},
$asv:function(){return[W.cd]},
$asp:function(){return[W.cd]},
$isq:1,
$isv:1,
$isp:1}
W.j_.prototype={
$asq:function(){return[W.cd]},
$asv:function(){return[W.cd]},
$asp:function(){return[W.cd]},
$isq:1,
$isv:1,
$isp:1}
W.lP.prototype={
gaq:function(a){return a.error}}
W.lQ.prototype={
gK:function(a){return a.name}}
W.lR.prototype={
gaq:function(a){return a.error},
gm:function(a){return a.length}}
W.lU.prototype={
gaI:function(a){return a.style},
gcR:function(a){return a.weight}}
W.lV.prototype={
h:function(a,b){return a.add(b)},
hW:function(a,b,c){return a.forEach(H.dj(b,3),c)},
aa:function(a,b){b=H.dj(b,3)
return a.forEach(b)}}
W.iA.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.cm.prototype={$iscm:1,$isao:1}
W.m6.prototype={
gm:function(a){return a.length}}
W.f7.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.aQ]},
$isv:1,
$asv:function(){return[W.aQ]},
$isp:1,
$asp:function(){return[W.aQ]},
$isaU:1,
$asaU:function(){return[W.aQ]},
$isaP:1,
$asaP:function(){return[W.aQ]}}
W.iH.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$asp:function(){return[W.aQ]},
$isq:1,
$isv:1,
$isp:1}
W.j0.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$asp:function(){return[W.aQ]},
$isq:1,
$isv:1,
$isp:1}
W.iC.prototype={
L:function(a,b){return a.item(b)}}
W.e2.prototype={
i4:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hs:function(a,b,c,d){return a.open(b,c,d)},
ghG:function(a){return W.GB(a.response)},
b5:function(a,b){return a.send(b)},
$ise2:1,
$isao:1,
ghH:function(a){return a.responseText}}
W.m9.prototype={
$1:function(a){return J.y_(a)},
$S:function(){return{func:1,args:[W.e2]}}}
W.ma.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.as()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.az(0,t)
else p.bm(a)},
$S:function(){return{func:1,args:[,]}}}
W.hg.prototype={}
W.me.prototype={
gK:function(a){return a.name}}
W.hh.prototype={$ishh:1}
W.f9.prototype={$isf9:1,$isdp:1,$isaQ:1,$isao:1,
az:function(a,b){return a.complete.$1(b)}}
W.mj.prototype={$isj:1,
gcC:function(a){return a.files},
gK:function(a){return a.name}}
W.mL.prototype={
gK:function(a){return a.name}}
W.hq.prototype={
h:function(a,b){return a.add(b)}}
W.hr.prototype={$ishr:1,
gae:function(a){return a.href}}
W.n2.prototype={
D:function(a){return String(a)},
gae:function(a){return a.href}}
W.n7.prototype={
gK:function(a){return a.name}}
W.hy.prototype={
gaq:function(a){return a.error}}
W.ju.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nd.prototype={
gbd:function(a){return a.content},
gK:function(a){return a.name}}
W.ne.prototype={
hS:function(a,b,c){return a.send(b,c)},
b5:function(a,b){return a.send(b)}}
W.hz.prototype={
gK:function(a){return a.name}}
W.co.prototype={$isco:1,$isao:1}
W.jv.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[W.co]},
$isaP:1,
$asaP:function(){return[W.co]},
$isq:1,
$asq:function(){return[W.co]},
$isv:1,
$asv:function(){return[W.co]},
$isp:1,
$asp:function(){return[W.co]}}
W.iR.prototype={
$asq:function(){return[W.co]},
$asv:function(){return[W.co]},
$asp:function(){return[W.co]},
$isq:1,
$isv:1,
$isp:1}
W.ja.prototype={
$asq:function(){return[W.co]},
$asv:function(){return[W.co]},
$asp:function(){return[W.co]},
$isq:1,
$isv:1,
$isp:1}
W.ns.prototype={$isj:1}
W.nt.prototype={
gK:function(a){return a.name}}
W.aQ.prototype={
D:function(a){var t=a.nodeValue
return t==null?this.eD(a):t},
ai:function(a,b){return a.contains(b)},
$isaQ:1,
$isao:1}
W.jy.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.aQ]},
$isv:1,
$asv:function(){return[W.aQ]},
$isp:1,
$asp:function(){return[W.aQ]},
$isaU:1,
$asaU:function(){return[W.aQ]},
$isaP:1,
$asaP:function(){return[W.aQ]}}
W.iS.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$asp:function(){return[W.aQ]},
$isq:1,
$isv:1,
$isp:1}
W.jb.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$asp:function(){return[W.aQ]},
$isq:1,
$isv:1,
$isp:1}
W.nw.prototype={
gK:function(a){return a.name}}
W.nB.prototype={
gK:function(a){return a.name}}
W.nF.prototype={
gK:function(a){return a.name}}
W.nH.prototype={$isj:1}
W.e4.prototype={
gK:function(a){return a.name}}
W.nM.prototype={
gm:function(a){return a.length}}
W.cf.prototype={
L:function(a,b){return a.item(b)},
$iscf:1,
$isao:1,
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.jF.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cf]},
$isv:1,
$asv:function(){return[W.cf]},
$isp:1,
$asp:function(){return[W.cf]},
$isaU:1,
$asaU:function(){return[W.cf]},
$isaP:1,
$asaP:function(){return[W.cf]}}
W.iT.prototype={
$asq:function(){return[W.cf]},
$asv:function(){return[W.cf]},
$asp:function(){return[W.cf]},
$isq:1,
$isv:1,
$isp:1}
W.jc.prototype={
$asq:function(){return[W.cf]},
$asv:function(){return[W.cf]},
$asp:function(){return[W.cf]},
$isq:1,
$isv:1,
$isp:1}
W.nS.prototype={
b5:function(a,b){return a.send(b)}}
W.jJ.prototype={
b5:function(a,b){return a.send(b)}}
W.fp.prototype={$isfp:1,$isdp:1,$isaQ:1,$isao:1}
W.jL.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.oe.prototype={
gK:function(a){return a.name}}
W.oh.prototype={$isj:1}
W.oi.prototype={
gK:function(a){return a.name}}
W.oj.prototype={
gK:function(a){return a.name}}
W.cp.prototype={$iscp:1,$isao:1}
W.jN.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cp]},
$isv:1,
$asv:function(){return[W.cp]},
$isp:1,
$asp:function(){return[W.cp]},
$isaU:1,
$asaU:function(){return[W.cp]},
$isaP:1,
$asaP:function(){return[W.cp]}}
W.h0.prototype={
$asq:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$asp:function(){return[W.cp]},
$isq:1,
$isv:1,
$isp:1}
W.h3.prototype={
$asq:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$asp:function(){return[W.cp]},
$isq:1,
$isv:1,
$isp:1}
W.hK.prototype={$ishK:1}
W.cq.prototype={$iscq:1,$isao:1,
gcR:function(a){return a.weight}}
W.jO.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cq]},
$isv:1,
$asv:function(){return[W.cq]},
$isp:1,
$asp:function(){return[W.cq]},
$isaU:1,
$asaU:function(){return[W.cq]},
$isaP:1,
$asaP:function(){return[W.cq]}}
W.iU.prototype={
$asq:function(){return[W.cq]},
$asv:function(){return[W.cq]},
$asp:function(){return[W.cq]},
$isq:1,
$isv:1,
$isp:1}
W.jd.prototype={
$asq:function(){return[W.cq]},
$asv:function(){return[W.cq]},
$asp:function(){return[W.cq]},
$isq:1,
$isv:1,
$isp:1}
W.fq.prototype={$isfq:1,$isao:1}
W.op.prototype={
gaq:function(a){return a.error}}
W.ch.prototype={
L:function(a,b){return a.item(b)},
$isch:1,
$isao:1,
gm:function(a){return a.length}}
W.oq.prototype={
gK:function(a){return a.name}}
W.or.prototype={
gK:function(a){return a.name}}
W.ow.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
aa:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gX:function(a){return a.key(0)==null},
$isbo:1,
$asbo:function(){return[P.C,P.C]}}
W.ci.prototype={$isci:1,$isao:1,
gae:function(a){return a.href}}
W.e6.prototype={}
W.p_.prototype={
gbd:function(a){return a.content}}
W.p1.prototype={
gK:function(a){return a.name}}
W.cR.prototype={$isao:1}
W.cG.prototype={$isao:1}
W.p4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isaU:1,
$asaU:function(){return[W.cG]},
$isaP:1,
$asaP:function(){return[W.cG]},
$isq:1,
$asq:function(){return[W.cG]},
$isv:1,
$asv:function(){return[W.cG]},
$isp:1,
$asp:function(){return[W.cG]}}
W.iV.prototype={
$asq:function(){return[W.cG]},
$asv:function(){return[W.cG]},
$asp:function(){return[W.cG]},
$isq:1,
$isv:1,
$isp:1}
W.je.prototype={
$asq:function(){return[W.cG]},
$asv:function(){return[W.cG]},
$asp:function(){return[W.cG]},
$isq:1,
$isv:1,
$isp:1}
W.p5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isaU:1,
$asaU:function(){return[W.cR]},
$isaP:1,
$asaP:function(){return[W.cR]},
$isq:1,
$asq:function(){return[W.cR]},
$isv:1,
$asv:function(){return[W.cR]},
$isp:1,
$asp:function(){return[W.cR]}}
W.h1.prototype={
$asq:function(){return[W.cR]},
$asv:function(){return[W.cR]},
$asp:function(){return[W.cR]},
$isq:1,
$isv:1,
$isp:1}
W.h4.prototype={
$asq:function(){return[W.cR]},
$asv:function(){return[W.cR]},
$asp:function(){return[W.cR]},
$isq:1,
$isv:1,
$isp:1}
W.p9.prototype={
gm:function(a){return a.length}}
W.cr.prototype={$iscr:1,$isao:1}
W.jS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cr]},
$isv:1,
$asv:function(){return[W.cr]},
$isp:1,
$asp:function(){return[W.cr]},
$isaU:1,
$asaU:function(){return[W.cr]},
$isaP:1,
$asaP:function(){return[W.cr]}}
W.iW.prototype={
$asq:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$asp:function(){return[W.cr]},
$isq:1,
$isv:1,
$isp:1}
W.jf.prototype={
$asq:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$asp:function(){return[W.cr]},
$isq:1,
$isv:1,
$isp:1}
W.ft.prototype={$isft:1,$isao:1}
W.jT.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.e7.prototype={}
W.pp.prototype={
D:function(a){return String(a)},
$isj:1,
gae:function(a){return a.href}}
W.pt.prototype={
gm:function(a){return a.length}}
W.fu.prototype={$isfu:1,$isao:1}
W.jU.prototype={
L:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.py.prototype={
b5:function(a,b){return a.send(b)}}
W.jW.prototype={$isj:1,
gK:function(a){return a.name}}
W.pF.prototype={$isj:1}
W.eI.prototype={$isj:1}
W.fv.prototype={$isfv:1,$isaQ:1,$isao:1,
gK:function(a){return a.name}}
W.pW.prototype={
D:function(a){return"Rectangle ("+H.B(a.left)+", "+H.B(a.top)+") "+H.B(a.width)+" x "+H.B(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.aR(b)
if(!t.$isbU)return!1
s=a.left
r=t.gbX(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc1(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb3(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaX(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga6:function(a){var t,s,r,q
t=J.dB(a.left)
s=J.dB(a.top)
r=J.dB(a.width)
q=J.dB(a.height)
return W.xa(W.eN(W.eN(W.eN(W.eN(0,t),s),r),q))},
$isbU:1,
$asbU:function(){},
gaX:function(a){return a.height},
gbX:function(a){return a.left},
gc1:function(a){return a.top},
gb3:function(a){return a.width}}
W.hR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[P.bU]},
$isaP:1,
$asaP:function(){return[P.bU]},
$isq:1,
$asq:function(){return[P.bU]},
$isv:1,
$asv:function(){return[P.bU]},
$isp:1,
$asp:function(){return[P.bU]}}
W.iX.prototype={
$asq:function(){return[P.bU]},
$asv:function(){return[P.bU]},
$asp:function(){return[P.bU]},
$isq:1,
$isv:1,
$isp:1}
W.jg.prototype={
$asq:function(){return[P.bU]},
$asv:function(){return[P.bU]},
$asp:function(){return[P.bU]},
$isq:1,
$isv:1,
$isp:1}
W.k2.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.bJ]},
$isv:1,
$asv:function(){return[W.bJ]},
$isp:1,
$asp:function(){return[W.bJ]},
$isaU:1,
$asaU:function(){return[W.bJ]},
$isaP:1,
$asaP:function(){return[W.bJ]}}
W.iY.prototype={
$asq:function(){return[W.bJ]},
$asv:function(){return[W.bJ]},
$asp:function(){return[W.bJ]},
$isq:1,
$isv:1,
$isp:1}
W.jh.prototype={
$asq:function(){return[W.bJ]},
$asv:function(){return[W.bJ]},
$asp:function(){return[W.bJ]},
$isq:1,
$isv:1,
$isp:1}
W.q2.prototype={$isj:1}
W.q3.prototype={
gaX:function(a){return a.height},
gb3:function(a){return a.width}}
W.k6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[W.cm]},
$isaP:1,
$asaP:function(){return[W.cm]},
$isq:1,
$asq:function(){return[W.cm]},
$isv:1,
$asv:function(){return[W.cm]},
$isp:1,
$asp:function(){return[W.cm]}}
W.iI.prototype={
$asq:function(){return[W.cm]},
$asv:function(){return[W.cm]},
$asp:function(){return[W.cm]},
$isq:1,
$isv:1,
$isp:1}
W.j1.prototype={
$asq:function(){return[W.cm]},
$asv:function(){return[W.cm]},
$asp:function(){return[W.cm]},
$isq:1,
$isv:1,
$isp:1}
W.qo.prototype={$isj:1}
W.hX.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.aQ]},
$isv:1,
$asv:function(){return[W.aQ]},
$isp:1,
$asp:function(){return[W.aQ]},
$isaU:1,
$asaU:function(){return[W.aQ]},
$isaP:1,
$asaP:function(){return[W.aQ]}}
W.iJ.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$asp:function(){return[W.aQ]},
$isq:1,
$isv:1,
$isp:1}
W.j2.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$asp:function(){return[W.aQ]},
$isq:1,
$isv:1,
$isp:1}
W.qN.prototype={$isj:1}
W.ka.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.ch]},
$isv:1,
$asv:function(){return[W.ch]},
$isp:1,
$asp:function(){return[W.ch]},
$isaU:1,
$asaU:function(){return[W.ch]},
$isaP:1,
$asaP:function(){return[W.ch]}}
W.iK.prototype={
$asq:function(){return[W.ch]},
$asv:function(){return[W.ch]},
$asp:function(){return[W.ch]},
$isq:1,
$isv:1,
$isp:1}
W.j3.prototype={
$asq:function(){return[W.ch]},
$asv:function(){return[W.ch]},
$asp:function(){return[W.ch]},
$isq:1,
$isv:1,
$isp:1}
W.kc.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
L:function(a,b){return a.item(b)},
$isaU:1,
$asaU:function(){return[W.ci]},
$isaP:1,
$asaP:function(){return[W.ci]},
$isq:1,
$asq:function(){return[W.ci]},
$isv:1,
$asv:function(){return[W.ci]},
$isp:1,
$asp:function(){return[W.ci]}}
W.iL.prototype={
$asq:function(){return[W.ci]},
$asv:function(){return[W.ci]},
$asp:function(){return[W.ci]},
$isq:1,
$isv:1,
$isp:1}
W.j4.prototype={
$asq:function(){return[W.ci]},
$asv:function(){return[W.ci]},
$asp:function(){return[W.ci]},
$isq:1,
$isv:1,
$isp:1}
W.r2.prototype={$isj:1}
W.r3.prototype={$isj:1}
W.q4.prototype={
aF:function(){var t,s,r,q,p
t=P.a6(null,null,null,P.C)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.cj)(s),++q){p=J.rM(s[q])
if(p.length!==0)t.h(0,p)}return t},
el:function(a){this.a.className=a.bf(0," ")},
gm:function(a){return this.a.classList.length},
gX:function(a){return this.a.classList.length===0},
ai:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s}}
W.q7.prototype={
aM:function(a,b,c,d){return W.eL(this.a,this.b,a,!1,H.O(this,0))},
e5:function(a,b,c){return this.aM(a,null,b,c)}}
W.hS.prototype={}
W.q8.prototype={
bT:function(a){if(this.b==null)return
this.dL()
this.b=null
this.d=null
return},
cI:function(a,b){if(this.b==null)return;++this.a
this.dL()},
e9:function(a){return this.cI(a,null)},
ec:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dJ()},
dJ:function(){var t=this.d
if(t!=null&&this.a<=0)J.xO(this.b,this.c,t,!1)},
dL:function(){var t=this.d
if(t!=null)J.y3(this.b,this.c,t,!1)},
eS:function(a,b,c,d,e){this.dJ()}}
W.q9.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bx.prototype={
gV:function(a){return new W.lT(a,this.gm(a),-1,null,[H.aL(a,"bx",0)])},
h:function(a,b){throw H.l(new P.Z("Cannot add to immutable List."))},
a9:function(a,b,c,d,e){throw H.l(new P.Z("Cannot setRange on immutable List."))},
ax:function(a,b,c,d){return this.a9(a,b,c,d,0)},
aA:function(a,b,c,d){throw H.l(new P.Z("Cannot modify an immutable List."))},
bV:function(a,b,c,d){throw H.l(new P.Z("Cannot modify an immutable List."))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
W.lT.prototype={
J:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.i3(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gP:function(){return this.d}}
W.qW.prototype={}
P.qT.prototype={
bq:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b2:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.aR(a)
if(!!s.$ise_)return new Date(a.a)
if(!!s.$isFt)throw H.l(new P.eE("structured clone of RegExp"))
if(!!s.$iscd)return a
if(!!s.$iseV)return a
if(!!s.$isf5)return a
if(!!s.$ishh)return a
if(!!s.$isfh||!!s.$iset)return a
if(!!s.$isbo){r=this.bq(a)
q=this.b
p=q.length
if(r>=p)return H.x(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.x(q,r)
q[r]=o
s.aa(a,new P.qV(t,this))
return t.a}if(!!s.$isq){r=this.bq(a)
t=this.b
if(r>=t.length)return H.x(t,r)
o=t[r]
if(o!=null)return o
return this.fT(a,r)}throw H.l(new P.eE("structured clone of other type"))},
fT:function(a,b){var t,s,r,q,p
t=J.bg(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.x(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b2(t.n(a,p))
if(p>=r.length)return H.x(r,p)
r[p]=q}return r}}
P.qV.prototype={
$2:function(a,b){this.a.a[a]=this.b.b2(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pM.prototype={
bq:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b2:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.e_(s,!0)
r.d3(s,!0)
return r}if(a instanceof RegExp)throw H.l(new P.eE("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.GW(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bq(a)
r=this.b
o=r.length
if(p>=o)return H.x(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mV()
t.a=n
if(p>=o)return H.x(r,p)
r[p]=n
this.h5(a,new P.pN(t,this))
return t.a}if(a instanceof Array){p=this.bq(a)
r=this.b
if(p>=r.length)return H.x(r,p)
n=r[p]
if(n!=null)return n
o=J.bg(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.x(r,p)
r[p]=n
if(typeof m!=="number")return H.av(m)
r=J.dk(n)
l=0
for(;l<m;++l)r.i(n,l,this.b2(o.n(a,l)))
return n}return a}}
P.pN.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b2(b)
J.kn(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.qU.prototype={}
P.jZ.prototype={
h5:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.cj)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rk.prototype={
$1:function(a){return this.a.az(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rl.prototype={
$1:function(a){return this.a.bm(a)},
$S:function(){return{func:1,args:[,]}}}
P.kY.prototype={
dM:function(a){if($.$get$vj().b.test(a))return a
throw H.l(P.dX(a,"value","Not a valid class token"))},
D:function(a){return this.aF().bf(0," ")},
gV:function(a){var t,s
t=this.aF()
s=new P.dx(t,t.r,null,null,[null])
s.c=t.e
return s},
aa:function(a,b){this.aF().aa(0,b)},
av:function(a,b){var t=this.aF()
return new H.fX(t,b,[H.O(t,0),null])},
gX:function(a){return this.aF().a===0},
gm:function(a){return this.aF().a},
ai:function(a,b){if(typeof b!=="string")return!1
this.dM(b)
return this.aF().ai(0,b)},
cF:function(a){return this.ai(0,a)?a:null},
h:function(a,b){this.dM(b)
return this.ho(0,new P.kZ(b))},
a3:function(a,b){return this.aF().a3(0,!0)},
ao:function(a){return this.a3(a,!0)},
ho:function(a,b){var t,s
t=this.aF()
s=b.$1(t)
this.el(t)
return s},
$isez:1,
$asez:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$isp:1,
$asp:function(){return[P.C]}}
P.kZ.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.l9.prototype={
gK:function(a){return a.name}}
P.ra.prototype={
$1:function(a){this.b.az(0,new P.jZ([],[],!1).b2(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mh.prototype={
gK:function(a){return a.name}}
P.nx.prototype={
bO:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fj(a,b,c)
q=P.GA(t)
return q}catch(p){s=H.ct(p)
r=H.cs(p)
q=P.vE(s,r,null)
return q}},
h:function(a,b){return this.bO(a,b,null)},
fj:function(a,b,c){return a.add(new P.qU([],[]).b2(b))},
gK:function(a){return a.name}}
P.hJ.prototype={
gaq:function(a){return a.error}}
P.pe.prototype={
gaq:function(a){return a.error}}
P.qv.prototype={
bw:function(a){if(a<=0||a>4294967296)throw H.l(P.wF("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cG:function(){return Math.random()}}
P.qE.prototype={
aS:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.am(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bw:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.l(P.wF("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aS()
return(this.a&t)>>>0}do{this.aS()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cG:function(){this.aS()
var t=this.a
this.aS()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
eU:function(a){var t,s,r,q,p,o,n,m
t=J.ea(a,0)?-1:0
do{if(typeof a!=="number")return a.aG()
s=(a&4294967295)>>>0
a=C.d.am(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.am(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.am(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.am(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.am(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.am(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.am(q-n,4294967296)&4294967295)>>>0
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
P.qF.prototype={}
P.bU.prototype={$asbU:null}
P.kr.prototype={$isj:1,
gae:function(a){return a.href}}
P.eb.prototype={$isj:1}
P.lp.prototype={$isj:1}
P.lq.prototype={$isj:1}
P.lr.prototype={$isj:1}
P.ls.prototype={$isj:1}
P.lt.prototype={$isj:1}
P.lu.prototype={$isj:1}
P.lv.prototype={$isj:1}
P.lw.prototype={$isj:1}
P.lx.prototype={$isj:1}
P.ly.prototype={$isj:1,
gae:function(a){return a.href}}
P.lz.prototype={$isj:1}
P.lA.prototype={$isj:1}
P.lB.prototype={$isj:1}
P.lC.prototype={$isj:1}
P.lD.prototype={$isj:1}
P.lE.prototype={$isj:1}
P.lS.prototype={$isj:1,
gae:function(a){return a.href}}
P.cn.prototype={$isj:1}
P.mf.prototype={$isj:1,
gae:function(a){return a.href}}
P.d4.prototype={$isao:1}
P.mO.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.d4]},
$isv:1,
$asv:function(){return[P.d4]},
$isp:1,
$asp:function(){return[P.d4]}}
P.iM.prototype={
$asq:function(){return[P.d4]},
$asv:function(){return[P.d4]},
$asp:function(){return[P.d4]},
$isq:1,
$isv:1,
$isp:1}
P.j5.prototype={
$asq:function(){return[P.d4]},
$asv:function(){return[P.d4]},
$asp:function(){return[P.d4]},
$isq:1,
$isv:1,
$isp:1}
P.na.prototype={$isj:1}
P.nb.prototype={$isj:1}
P.d5.prototype={$isao:1}
P.nu.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.d5]},
$isv:1,
$asv:function(){return[P.d5]},
$isp:1,
$asp:function(){return[P.d5]}}
P.iN.prototype={
$asq:function(){return[P.d5]},
$asv:function(){return[P.d5]},
$asp:function(){return[P.d5]},
$isq:1,
$isv:1,
$isp:1}
P.j6.prototype={
$asq:function(){return[P.d5]},
$asv:function(){return[P.d5]},
$asp:function(){return[P.d5]},
$isq:1,
$isv:1,
$isp:1}
P.nK.prototype={$isj:1,
gae:function(a){return a.href}}
P.nP.prototype={
gm:function(a){return a.length}}
P.ob.prototype={$isj:1,
gae:function(a){return a.href}}
P.oR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$isp:1,
$asp:function(){return[P.C]}}
P.iO.prototype={
$asq:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isq:1,
$isv:1,
$isp:1}
P.j7.prototype={
$asq:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isq:1,
$isv:1,
$isp:1}
P.kx.prototype={
aF:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a6(null,null,null,P.C)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.cj)(r),++p){o=J.rM(r[p])
if(o.length!==0)s.h(0,o)}return s},
el:function(a){this.a.setAttribute("class",a.bf(0," "))}}
P.cb.prototype={
gdP:function(a){return new P.kx(a)},
br:function(a,b,c,d,e){throw H.l(new P.Z("Cannot invoke insertAdjacentHtml on SVG."))},
$isj:1}
P.oU.prototype={$isj:1}
P.oW.prototype={$isj:1}
P.eD.prototype={}
P.p3.prototype={$isj:1,
gae:function(a){return a.href}}
P.d7.prototype={$isao:1}
P.pf.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.d7]},
$isv:1,
$asv:function(){return[P.d7]},
$isp:1,
$asp:function(){return[P.d7]}}
P.iP.prototype={
$asq:function(){return[P.d7]},
$asv:function(){return[P.d7]},
$asp:function(){return[P.d7]},
$isq:1,
$isv:1,
$isp:1}
P.j8.prototype={
$asq:function(){return[P.d7]},
$asv:function(){return[P.d7]},
$asp:function(){return[P.d7]},
$isq:1,
$isv:1,
$isp:1}
P.pq.prototype={$isj:1,
gae:function(a){return a.href}}
P.pu.prototype={$isj:1}
P.pv.prototype={$isj:1}
P.hV.prototype={$isj:1,
gae:function(a){return a.href}}
P.qK.prototype={$isj:1}
P.qL.prototype={$isj:1}
P.qM.prototype={$isj:1}
P.bh.prototype={}
P.d8.prototype={$isq:1,
$asq:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
P.fK.prototype={$isfK:1,$isao:1,
gm:function(a){return a.length}}
P.eT.prototype={$iseT:1,$isao:1,
gbS:function(a){return a.buffer}}
P.fL.prototype={
f4:function(a,b,c,d){return a.decodeAudioData(b,H.dj(c,1),H.dj(d,1))},
fU:function(a,b){var t,s,r
t=P.fK
s=new P.bj(0,$.aD,null,[t])
r=new P.dU(s,[t])
this.f4(a,b,new P.ky(r),new P.kz(r))
return s}}
P.ky.prototype={
$1:function(a){this.a.az(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kz.prototype={
$1:function(a){var t=this.a
if(a==null)t.bm("")
else t.bm(a)},
$S:function(){return{func:1,args:[,]}}}
P.bC.prototype={}
P.dY.prototype={}
P.kX.prototype={
gbS:function(a){return a.buffer}}
P.kt.prototype={
gK:function(a){return a.name}}
P.o0.prototype={$isj:1}
P.r1.prototype={$isj:1}
P.jP.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return P.xz(a.item(b))},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
L:function(a,b){return P.xz(a.item(b))},
$isq:1,
$asq:function(){return[P.bo]},
$isv:1,
$asv:function(){return[P.bo]},
$isp:1,
$asp:function(){return[P.bo]}}
P.iQ.prototype={
$asq:function(){return[P.bo]},
$asv:function(){return[P.bo]},
$asp:function(){return[P.bo]},
$isq:1,
$isv:1,
$isp:1}
P.j9.prototype={
$asq:function(){return[P.bo]},
$asv:function(){return[P.bo]},
$asp:function(){return[P.bo]},
$isq:1,
$isv:1,
$isp:1}
T.fH.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
gX:function(a){return this.a.length===0},
gV:function(a){var t=this.a
return new J.i4(t,t.length,0,null,[H.O(t,0)])},
$ashn:function(){return[T.fI]},
$asp:function(){return[T.fI]},
gcC:function(a){return this.a}}
T.fI.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.f8(C.x)
r=T.f8(C.y)
q=T.wt(0,this.b)
new T.iD(s,q,0,0,0,t,r).dq()
r=q.c.buffer
q=q.a
r.toString
q=H.cO(r,0,q)
this.cy=q
t=q}else{t=s.bB()
this.cy=t}this.ch=0}}return t},
D:function(a){return this.a},
gK:function(a){return this.a}}
T.db.prototype={
D:function(a){return"ArchiveException: "+this.a}}
T.hi.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.av(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
if(typeof b!=="number")return H.av(b)
s+=b
if(s<0||s>=t.length)return H.x(t,s)
return t[s]},
aR:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.av(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.ak()
if(typeof s!=="number")return H.av(s)
b=t-(a-s)}return T.tj(this.a,this.d,b,a)},
aY:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.U()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.av(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.x(q,s)
q[s]}return-1},
be:function(a,b){return this.aY(a,b,0)},
cN:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.ak()
if(typeof s!=="number")return H.av(s)
r=this.aR(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.ak()
if(typeof p!=="number")return H.av(p)
if(typeof s!=="number")return s.U()
this.b=s+(t-(q-p))
return r},
c_:function(a){return P.oS(this.cN(a).bB(),0,null)},
a0:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.x(t,s)
p=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.x(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a2:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.x(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.x(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.x(t,s)
n=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.x(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aO:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.x(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.x(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.x(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.x(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.x(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.x(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.x(t,s)
j=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.x(t,r)
i=t[r]&255
if(this.d===1)return(C.a.ap(p,56)|C.a.ap(o,48)|C.a.ap(n,40)|C.a.ap(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ap(i,56)|C.a.ap(j,48)|C.a.ap(k,40)|C.a.ap(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bB:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.av(r)
q=t-(s-r)
t=this.a
r=J.aR(t)
if(!!r.$isd8){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cO(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xl(r.c4(t,s,p>o?o:p)))},
eK:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbS:function(a){return this.a},
ghr:function(a){return this.b}}
T.nC.prototype={
hO:function(a,b){var t,s,r,q
if(b==null)b=J.ck(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.ce(s-q)
C.q.ax(r,t,s,a)
this.a+=b},
cS:function(a){return this.hO(a,null)},
hQ:function(a){var t,s,r,q
t=J.bg(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.av(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.av(r)
this.ce(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.av(r)
C.q.a9(q,s,s+r,t.gbS(a),t.ghr(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.ak()
if(typeof q!=="number")return H.av(q)
this.a=t+(r-(s-q))},
aR:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cO(t,a,b-a)},
d0:function(a){return this.aR(a,null)},
ce:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.ba(P.dC("Invalid length "+H.B(s)))
r=new Uint8Array(s)
q=this.c
C.q.ax(r,0,q.length,q)
this.c=r},
f8:function(){return this.ce(null)},
gm:function(a){return this.a}}
T.pI.prototype={
fu:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aR(this.a-20,20)
if(s.a2()!==117853008){a.b=t
return}s.a2()
r=s.aO()
s.a2()
a.b=r
if(a.a2()!==101075792){a.b=t
return}a.aO()
a.a0()
a.a0()
q=a.a2()
p=a.a2()
o=a.aO()
n=a.aO()
m=a.aO()
l=a.aO()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
f9:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.ak()
if(typeof r!=="number")return H.av(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a2()===101010256){a.b=t
return q}}throw H.l(new T.db("Could not find End of Central Directory Record"))},
eO:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.f9(a)
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
if(s>0)this.x=a.c_(s)
this.fu(a)
r=a.aR(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.U()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.as()
if(!(p<t+o))break
if(r.a2()!==33639248)break
p=new T.pK(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
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
if(n>0)p.cy=r.c_(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.ak()
j=r.aR(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.ak()
if(typeof g!=="number")return H.av(g)
if(typeof k!=="number")return k.U()
r.b=k+(i-(h-g))
p.db=j.bB()
f=j.a0()
e=j.a0()
if(f===1){if(e>=8)p.y=j.aO()
if(e>=16)p.x=j.aO()
if(e>=24){o=j.aO()
p.cx=o}if(e>=28)p.z=j.a2()}}if(l>0)p.dx=r.c_(l)
a.b=o
p.dy=T.G6(a,p)
q.push(p)}}}
T.pJ.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.f8(C.x)
q=T.f8(C.y)
t=T.wt(0,t)
new T.iD(s,t,0,0,0,r,q).dq()
q=t.c.buffer
t=t.a
q.toString
t=H.cO(q,0,t)
this.cy=t
this.d=0}else{t=s.bB()
this.cy=t}}return t},
D:function(a){return this.z},
eP:function(a,b){var t,s,r,q
t=a.a2()
this.a=t
if(t!==67324752)throw H.l(new T.db("Invalid Zip Signature"))
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
this.z=a.c_(s)
this.Q=a.cN(r).bB()
this.cx=a.cN(this.ch.x)
if((this.c&8)!==0){q=a.a2()
if(q===134695760)this.r=a.a2()
else this.r=q
this.x=a.a2()
this.y=a.a2()}}}
T.pK.prototype={
D:function(a){return this.cy}}
T.pH.prototype={
fV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.G5(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.F],p=0;p<t.length;t.length===r||(0,H.cj)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.cX()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fI(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dV(k,"$isq",q,"$asq")){j.cy=k
j.cx=T.tj(k,0,null,0)}else if(k instanceof T.hi){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hi(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.h1(m,"/")
j.y=n.r
s.push(j)}return new T.fH(s,null)}}
T.mb.prototype={
eJ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ap(1,this.b)
r=H.cy(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.x(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.x(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iD.prototype={
dq:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.U()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.as()
if(!(r<s+q))break
if(!this.fq())break}},
fq:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.U()
if(typeof s!=="number")return s.as()
if(s>=r+q)return!1
p=this.au(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.au(16)
s=this.au(16)
if(n!==0&&n!==(s^65535)>>>0)H.ba(new T.db("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.ak()
r=q-r
if(n>s-r)H.ba(new T.db("Input buffer is broken"))
m=t.aR(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.ak()
if(typeof l!=="number")return H.av(l)
if(typeof s!=="number")return s.U()
t.b=s+(r-(q-l))
this.b.hQ(m)
break
case 1:this.dh(this.f,this.r)
break
case 2:this.fs()
break
default:throw H.l(new T.db("unknown BTYPE: "+o))}return(p&1)===0},
au:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.U()
if(typeof r!=="number")return r.as()
if(r>=q+p)throw H.l(new T.db("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.x(q,r)
o=q[r]
this.c=(this.c|C.a.at(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ap(1,a)
this.c=C.a.dH(t,a)
this.d=s-a
return(t&r-1)>>>0},
cm:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.U()
if(typeof p!=="number")return p.as()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.x(o,p)
m=o[p]
this.c=(this.c|C.a.at(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ap(1,s)-1)>>>0
if(p>=t.length)return H.x(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dH(r,k)
this.d=q-k
return l&65535},
fs:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.au(5)+257
s=this.au(5)+1
r=this.au(4)+4
q=H.cy(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.x(C.E,o)
n=C.E[o]
m=this.au(3)
if(n>=q)return H.x(p,n)
p[n]=m}l=T.f8(p)
k=new Uint8Array(H.cy(t))
j=new Uint8Array(H.cy(s))
i=this.dg(t,l,k)
h=this.dg(s,l,j)
this.dh(T.f8(i),T.f8(h))},
dh:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cm(a)
if(s>285)throw H.l(new T.db("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.f8()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.x(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.x(C.C,p)
o=C.C[p]+this.au(C.V[p])
n=this.cm(b)
if(n<=29){if(n>=30)return H.x(C.z,n)
m=C.z[n]+this.au(C.U[n])
for(r=-m;o>m;){t.cS(t.d0(r))
o-=m}if(o===m)t.cS(t.d0(r))
else t.cS(t.aR(r,o-m))}else throw H.l(new T.db("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.ak();--r
t.b=r
if(r<0)t.b=0}},
dg:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cm(b)
switch(q){case 16:p=3+this.au(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=s}break
case 17:p=3+this.au(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=0}s=0
break
case 18:p=11+this.au(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.l(new T.db("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.ks.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Math Book",H.a([$.N,$.a0,$.aI],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.N,$.a0],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.D,$.a0,$.b3],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.N,$.a0],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.N,$.a0],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.bX,$.aG],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.a0],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.m)
q.i(0,$.bd,$.m)
q.i(0,$.f3,$.k)
q.i(0,$.b2,$.L)
q.i(0,$.cB,$.k)
p=$.n
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.u
o=o+n+" to stop "
m=$.M
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.EZ
n=[U.b]
q.i(0,new R.a1("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
q.i(0,new R.a1("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.u+" to stop "+$.M+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.wE(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
p="The "+m+" finds a massive library, filled with books. The "
l=$.u
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.z
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a1("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.fm(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.f0,$.L)
s.i(0,$.cB,$.m)
p=$.n
o="The "+p+"  is approached by a "
l=$.u
s.i(0,new R.a1("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.M+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.u
s.i(0,new R.a1("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.M+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.ev(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
s.i(0,new R.a1("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.u+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fm(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.f0,$.L)
t.i(0,$.cB,$.m)
t.i(0,$.c0,$.L)
t.i(0,$.t7,$.L)
r=$.n
q="The "+r+"  is approached by a "
p=$.u
q=q+p+" who offers them a grant to study "
o=$.ap
t.i(0,new R.a1("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.M+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fm(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.u
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.M
r=r+p+".  It is up to the "
q=$.n
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ap
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.F4
t.i(0,new R.a1("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.e5(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
t.i(0,new R.a1("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.M+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.u+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aS)}}
K.bV.prototype={
aQ:function(){return"<div class = 'feature'>Feels "+H.B(this.b)+", Quality: "+H.B(this.a)+"</div>"}}
L.kv.prototype={
$1:function(a){return!a.gbu()},
$S:function(){return{func:1,args:[L.eR]}}}
L.eR.prototype={
G:function(){var t,s
t=Q.E(null,null,A.X)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.k)
q.i(0,$.bd,$.L)
q.i(0,$.dJ,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e0,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.z
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.R("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.G(s,q,null),$.at)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.f1,$.k)
s.i(0,$.eh,$.L)
s.i(0,$.ej,$.m)
s.i(0,$.cT,$.k)
s.i(0,$.cc,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.z
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! "
s.i(0,new R.R("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.W(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(q,s,null),$.at)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bd,$.L)
t.i(0,$.c7,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.M
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.z
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.cg+". The "+r+" has won! "
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.ul(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
l=$.n
r="The "+l+" learns that all of the local "
m=$.u
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.z
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.cg+". The "+l+" has won! "
t.i(0,new R.R("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.W(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(s,t,null),$.at)},
D:function(a){return this.Q},
W:function(a,b,c,d,e){var t=this.Q
this.r=new X.io("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.i7]),H.a([],[M.h6]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.G()
this.H()
t=this.e
if($.$get$i5().a_(0,t))H.ba("Duplicate aspect id for "+this.D(0)+": "+t+" is already registered for "+J.cJ($.$get$i5().n(0,t))+".")
$.$get$i5().i(0,t,this)},
gb_:function(){return this.f},
gK:function(a){return this.Q},
gbu:function(){return this.cy}}
L.a9.prototype={}
M.kw.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Barbells",H.a([$.am,$.c9,$.D],s),null,!1,"Strength Building Metal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.el,$.c2],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jk,$.Y],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.el,$.c2],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aT,$.a2],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jk,$.Y,$.de],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.D,$.bb],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.vU,$.c2],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.c2,$.b7],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.e1,$.L)
q.i(0,$.bP,$.m)
q.i(0,$.cT,$.L)
p=$.n
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.u
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.M+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.a1("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.u
q.i(0,new R.a1("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.M+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e5(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
n="The "+m+"  wanders into a bunch of "
p=$.u
q.i(0,new R.a1("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hI(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.e1,$.m)
t.i(0,$.f4,$.m)
t.i(0,$.bP,$.m)
s=$.n
r="The "+s+" finds a team of underdog "
p=$.u
t.i(0,new R.a1("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.wE(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
s="A group of "+p+"s approach the "
r=$.n
s=s+r+". Apparently their sports team lost their coach to the "+$.z+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.M
t.i(0,new R.a1("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e5(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.u
p="A group of "+k+"s approach the "
r=$.n
t.i(0,new R.a1("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.z+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ap+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,t,null),$.aS)}}
U.kA.prototype={
R:function(a,b){var t=0,s=P.bq(),r,q,p,o
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$va()
p=q.createBufferSource()
o=p
t=3
return P.cx(J.xU(q,b),$async$R)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[P.eT]},
$asc8:function(){return[P.eT,P.bh]}}
U.n4.prototype={
aN:function(a){return"audio/mpeg"}}
U.nz.prototype={
aN:function(a){return"audio/ogg"}}
U.oO.prototype={
R:function(a,b){var t=0,s=P.bq(),r,q,p
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=W.yI(b)
p=new W.hS(q,"canplaythrough",!1,[W.U])
t=3
return P.cx(p.gad(p),$async$R)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asil:function(){return[W.eU]},
$asc8:function(){return[W.eU,P.C]}}
U.oP.prototype={}
U.oQ.prototype={}
O.kC.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Cod Piece",H.a([$.Q,$.a_,$.aw,$.P,$.Y],s),"God damn it, MI. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.to,$.P,$.bL],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aM,$.Y,$.bk,$.P,$.a7],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.Q,$.aM,$.P,$.bf],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.cz,$.k)
t.i(0,$.hd,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.ds,$.k)
t.i(0,$.cA,$.k)
t.i(0,$.f_,$.k)
r="After all the bullshit the "+$.z+" has put the native "
q=$.u
r=r+q+"s through, the "
p=$.n
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aX+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.M
m=[U.b]
t.i(0,new R.a8("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.y(),!1,!1,new Y.dM("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.u
n="A group of jubilant "+p+"s are following the "
q=$.n
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.M
t.i(0,new R.a8("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.z+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
t.i(0,new R.a8("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.z+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.y(),!1,!1,new Y.kR("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.n
q=q+r+" organizes a huge festival for all the "
p=$.u
t.i(0,new R.bA("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.p2.prototype={
R:function(a,b){var t=0,s=P.bq(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$aseC:function(){return[P.C]},
$asc8:function(){return[P.C,P.C]}}
Y.nX.prototype={
aN:function(a){return"application/octet-stream"},
R:function(a,b){var t=0,s=P.bq(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[P.bh]},
$asc8:function(){return[P.bh,P.bh]}}
L.kG.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Bear",H.a([$.aT,$.aW,$.H],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Thought",H.a([$.mo,$.wc,$.fc],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Doorway",H.a([$.fc,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.c5,$.k)
t.i(0,$.d2,$.m)
t.i(0,$.bP,$.m)
t.i(0,$.ej,$.A)
r=$.n
q="The "+r+" hears a "+$.u+" "+$.M+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.z
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.i(0,new R.R("Revenge on the Denizen",!1,[new U.b(q),new U.b(p),new U.b(n),new U.W(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.at)}}
T.kI.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Mystical Vial of Blood",H.a([$.b3,$.bk,$.H,$.b0],s),null,!1,"Vial of Not-ABs Oil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.aE,$.bk,$.H,$.b8],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.Q,$.bk,$.H,$.b0,$.hk],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.bf,$.H,$.b0,$.hk,$.aK],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.Y,$.tw,$.bk,$.b0,$.H,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cL,$.k)
q.i(0,$.ta,$.k)
q.i(0,$.c0,$.m)
p=$.n
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.u
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ap+" and some boondollars in compensation."
n=this.x2
k=[U.b]
q.i(0,new R.a1("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.e5(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.u
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.M+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.z
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.n
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cg+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.R("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.W(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cT,$.k)
s.i(0,$.cA,$.L)
s.i(0,$.b2,$.L)
s.i(0,$.ix,$.k)
s.i(0,$.cw,$.L)
p=$.n
o="The "+p+"  and the "
m=$.ex
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.z
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.R("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.W(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.ew(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
h=$.n
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.u
i=i+m+"s explains that before  "
p=$.z
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.cg+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.EW
s.i(0,new R.R("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.W(l,h,o)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
o="The "+p+" learns of the "
h=$.aX
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.u
o=o+l+" explains that the "
j=$.z
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.R("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.W(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.u
h=h+i+" on "+$.aX+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.f6+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a8("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.fm(),!1,!1,new Y.c1("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.u+" on "
m=$.aX
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.f6+" is now more popular with your friends than you are."
s.i(0,new R.a8("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.um(),!1,!1,new Y.c1("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
m="The "+p+"  and the "
h=$.ex
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.z
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.R("Pale Shipping Dungeon",!1,[new U.b(m),new U.W(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.B(C.r)+".",o)],H.a([],k),R.ew(),!1,!1,new Y.jC(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ax)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bd,$.L)
t.i(0,$.c7,$.m)
r="In the wake of the defeat of the "+$.z+" it becomes really how isolated the individual "
q=$.u
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.n
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.f6+" to kick your ass, but luckily they have several."
t.i(0,new R.a8("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.e5(),!1,!1,new Y.c1("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.n
q="The "+o+" learns that two prominent "
p=$.u
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.z
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.cg+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.M+"ing. "
t.i(0,new R.R("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.W(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.at)}}
T.kL.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Pan's Pipe",H.a([$.a7,$.Y,$.bk,$.H],s),null,!1,"Smonkin Weeds Pipe")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.b9,$.H],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a2,$.D,$.bk,$.H],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.aF,$.D,$.aT,$.H,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.c7,$.m)
q.i(0,$.f4,$.k)
q.i(0,$.b2,$.m)
p=$.n
o="The "+p+" tries posting a letter through the "
n=$.ap
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.z
o=o+m+" has screwed with the mail system, crippling the "
l=$.u
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.F_
i=[U.b]
q.i(0,new R.R("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.W(j,p,l)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.G(s,q,null),$.at)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.bd,$.k)
s.i(0,$.f4,$.m)
s.i(0,$.b2,$.m)
s.i(0,$.bP,$.m)
s.i(0,$.c7,$.m)
p=$.n
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ap
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.u
k=l+k+" fields. The "+k+"s "+$.M+"ing is so joyful it's literally deafening. "
l=$.z
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.R("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.W(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.at)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.cc,$.k)
t.i(0,$.lL,$.k)
t.i(0,$.f4,$.L)
t.i(0,$.c7,$.L)
r=$.n
q="The "+r+" is chilling in a "+$.u+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.z
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ap
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aX+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.cg+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.R("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.at)}}
M.fP.prototype={
en:function(a){var t=this.a
if(!t.a_(0,a))return
return t.n(0,a)}}
Y.kN.prototype={
R:function(a,b){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=J.eP(b,"\n")
p=P.C
o=P.cD(p,p)
n=P.cD(p,[P.ez,P.C])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.da(k).bh(k).length===0)m=null
else if(m==null)m=C.c.bh(k)
else{j=C.c.bh(k)
i=C.c.M(m,0,C.c.e3(m,$.$get$ve())+1)+j
o.i(0,i,m)
if(!n.a_(0,m))n.i(0,m,P.a6(null,null,null,p))
J.xN(n.n(0,m),i)}}r=new M.fP(o,n)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$aseC:function(){return[M.fP]},
$asc8:function(){return[M.fP,P.C]}}
S.kQ.prototype={
G:function(){var t,s
t=Q.E(null,null,A.X)
s=A.i("A Rock",H.a([$.aW,$.aG,$.bi,$.H],[G.V]),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Chill","Stone","Cold","Fear"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.lH,$.m)
t.i(0,$.cL,$.k)
r=$.n
q="The "+r+" decides enough is enough, and that they need to fight the "
p=$.z
q=q+p+". They decide to amass an army of consorts to fight it..."
o="The "+r+" figures out that the "
n=$.u
o=o+n+"s are very disinclined to fight, so the "+r+" has to use a bit more force..."
m="The "+r+" has created an army of fearful consorts, it may fall apart during the Denizen fight though..."
l="Now that the "+r+" has amassed an army of "+n+"s, they think it's time to fight the "+p+"..."
n="The "+p+" lies slain, but the "+n+"s still lie under the power of the "+r+"."
t.i(0,new R.R("Make An Army",!1,[new U.b(q),new U.b(o),new U.b(m),new U.W(l,"The "+r+" lies dead, in a surprising twist, the "+p+" takes care of the living members of the consort army.",n)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.at)}}
A.kT.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.N,$.am,$.b8,$.c9],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.N,$.b8],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.b3,$.b8],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aT,$.a2,$.b8],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.aE,$.b8],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.Q,$.b8],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.D,$.b8],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.m)
q.i(0,$.cv,$.k)
q.i(0,$.bP,$.m)
p=$.n
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.u
o=o+n+"s are too scared to even "+$.M+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.z+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.a1("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.e1,$.L)
s.i(0,$.bP,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.cz,$.k)
o=$.n
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aX
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.u
k=k+j+"s let out a braying "+$.M+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.F2
s.i(0,new R.a1("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.y(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.cC,$.L)
t.i(0,$.c6,$.m)
t.i(0,$.cv,$.k)
t.i(0,$.bP,$.m)
t.i(0,$.ir,$.m)
r=$.n
q="The "+r+"  is approached by a Crafty "
o=$.u
q=q+o+" who offers them a magical "
n=$.ap
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.M
t.i(0,new R.a1("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aS)}}
S.bH.prototype={
aQ:function(){return"<div class = 'feature'>"+this.c+", Says: "+this.d+"</div>"},
D:function(a){return H.B(new H.dS(H.kk(this),null))+": "+this.c},
gK:function(a){return this.c}}
S.i8.prototype={}
S.m8.prototype={}
M.l4.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Can of Spray Paint",H.a([$.aJ,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.N,$.ar,$.b8,$.aI],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.tE,$.D,$.aH],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.N,$.ar,$.aI],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.aJ,$.ay,$.N],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ar,$.N],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ar,$.aN,$.ay],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.aJ,$.ar],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.aF,$.ar,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.Q,$.ar],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.N,$.ar,$.aI],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.m)
q.i(0,$.cB,$.k)
q.i(0,$.b2,$.m)
p=$.n
o="The "+p+" visits a beautiful "
n=$.ap
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.u
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.z+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.M+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.a1("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.e1,$.L)
s.i(0,$.bP,$.m)
s.i(0,$.cv,$.L)
s.i(0,$.bd,$.m)
s.i(0,$.cz,$.k)
o=$.n
n="The "+o+" finds a troupe of dejected looking "
l=$.u
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aX
l=l+n+" "
k=$.ap
s.i(0,new R.a1("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.M+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.hd,$.L)
t.i(0,$.cw,$.L)
t.i(0,$.f_,$.L)
t.i(0,$.c6,$.L)
t.i(0,$.bd,$.m)
t.i(0,$.b2,$.m)
r=$.n
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.M
q=q+o+"ingworth, "
n=$.u
q=q+n+" heiress to the "+$.ap+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.ET
t.i(0,new R.a1("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.y(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aS)}}
T.la.prototype={}
V.lc.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Trendy Fabric",H.a([$.aJ,$.Q],s),null,!1,"Weird Tasting Candy Paper")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.aJ,$.tt,$.hk],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.D,$.tz,$.aZ],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jj
r=A.i("Broom",H.a([r,$.Y,$.am,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.Y,$.tH,$.am],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.Q,$.b7,$.bk,$.aJ,$.e3],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.aJ,$.Q],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aK,$.c9,$.D,$.bi],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.aJ,$.N],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bi],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.D,$.aF,$.am,$.c9,$.ts],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bL],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bL],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.aJ,$.bQ,$.b5],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.aE,$.be,$.b9],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.aE,$.be],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.aJ,$.aE,$.b0],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.m)
q.i(0,$.cA,$.m)
q.i(0,$.cw,$.L)
p=$.n
o="The "+p+" is visited by a Beautiful "
n=$.u
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ap
l=[U.b]
q.i(0,new R.a1("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.M+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.y(),!1,!1,new Y.ia("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cw,$.k)
s.i(0,$.bP,$.m)
s.i(0,$.f_,$.k)
s.i(0,$.ds,$.m)
s.i(0,$.bd,$.k)
p=$.n
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ap
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.u
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.M+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.F0
s.i(0,new R.a1("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.ef,$.k)
t.i(0,$.bd,$.m)
t.i(0,$.dq,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.ix,$.k)
r=$.n
q="The "+r+" finds a loom, and a Wizened "
p=$.u
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ap
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.M+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a1("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.aS)}}
U.ld.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aI,$.a2,$.N,$.aM,$.H,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aN,$.bk,$.H,$.aM],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.b9,$.bk,$.H,$.aM],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.b3,$.H,$.bL],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.b3,$.H,$.bi,$.aM,$.bf,$.bS,$.b4],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aK,$.b4,$.aM,$.N,$.H],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.dJ,$.k)
q.i(0,$.d1,$.m)
q.i(0,$.f4,$.L)
q.i(0,$.bd,$.L)
q.i(0,$.c0,$.m)
p=$.n
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.u
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ap
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.z
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.R("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.dJ,$.k)
s.i(0,$.d1,$.m)
s.i(0,$.ek,$.ax)
s.i(0,$.eg,$.m)
s.i(0,$.t7,$.m)
s.i(0,$.cL,$.m)
s.i(0,$.d1,$.m)
s.i(0,$.bd,$.L)
s.i(0,$.c0,$.m)
s.i(0,$.dr,$.m)
p=$.n
o="The "+p+" has found a group of Violent "
m=$.u
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aX
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.M+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.z
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.cg+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.R("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.ev(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ap
p=p+l+"s alike. "
l=$.u+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.z
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.cg+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.R("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.W(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.c0,$.k)
t.i(0,$.vy,$.ax)
t.i(0,$.ha,$.L)
r=$.n
q="The "+r+" finds a small dungeon bearing the image of "
p=$.z
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.u+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.W(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.ev(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
k=$.n
p="The "+k+" learns from one of their "
r=$.u
p=p+r+"s that there is an ancient prophecy of a "
l=$.aX
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ap
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.z
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.cg+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.ES
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.W(o,k,q)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.at)}}
Z.le.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Dream Diary",H.a([$.N,$.aI,$.H],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aN,$.bk,$.am,$.H,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aN,$.bk,$.H],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.ef,$.m)
q.i(0,$.dq,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.ix,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ap
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.M+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wr
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.G(s,q,null),$.at)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.m)
s.i(0,$.dq,$.k)
s.i(0,$.d3,$.m)
s.i(0,$.c5,$.m)
s.i(0,$.dG,$.m)
s.i(0,$.cv,$.k)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.M
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(q,s,null),$.at)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.d2,$.k)
t.i(0,$.h9,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.c5,$.k)
t.i(0,$.dG,$.k)
t.i(0,$.dq,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aX+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.M+"ing in reverse. Another is in a "+$.ap+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(s,t,null),$.at)}}
X.io.prototype={}
X.i7.prototype={
$S:function(){return{func:1,v:true,args:[[P.q,M.h6]]}}}
M.h6.prototype={}
U.lF.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Fluthulu Poster",H.a([$.Q,$.b7,$.b4,$.bl],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.Q,$.b7,$.b4],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aK,$.aN,$.b9,$.fd,$.aw],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aN,$.vZ,$.em,$.aw],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aN,$.bS,$.be,$.b4],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aI,$.N,$.aO,$.b4],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.N,$.a3,$.am],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.N,$.a3,$.am],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.N,$.a3,$.bS,$.b4,$.bl],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aK,$.aG,$.a3,$.am,$.aw],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aK,$.mr,$.a3,$.am,$.aw],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.h7,$.ax)
q.i(0,$.cA,$.m)
q.i(0,$.c7,$.m)
q.i(0,$.cC,$.L)
p=$.n
o="The "+p+" learns of a Beautiful "
n=$.u
o=o+n+" who has been kidnapped by the vial "
m=$.z
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ap
j=[U.b]
q.i(0,new R.a1("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.k)
s.i(0,$.cL,$.k)
s.i(0,$.it,$.m)
s.i(0,$.c0,$.k)
s.i(0,$.ek,$.k)
s.i(0,$.hc,$.m)
o=$.n
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.u
s.i(0,new R.a1("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.k)
t.i(0,$.iw,$.m)
t.i(0,$.c0,$.k)
t.i(0,$.dH,$.m)
t.i(0,$.f0,$.m)
t.i(0,$.ta,$.m)
r=$.n
q="The "+r+" finds a group of three "
o=$.u
q=q+o+"s "
n=$.M
t.i(0,new R.a1("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aS)}}
N.a4.prototype={
aQ:function(){return H.B(this.b)+", Quality: "+H.B(this.a)},
D:function(a){return H.B(new H.dS(H.kk(this),null))+": "+H.B(this.b)}}
O.c8.prototype={
aZ:function(a){var t=0,s=P.bq(),r,q=this,p
var $async$aZ=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cx(q.aP(a),$async$aZ)
case 3:r=p.R(0,c)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aZ,s)}}
O.dm.prototype={
b6:function(a){var t=0,s=P.bq(),r
var $async$b6=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b6,s)},
cA:function(a){var t=0,s=P.bq(),r,q=this
var $async$cA=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.yJ([J.v0(a)],q.aN(0),null))
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$cA,s)},
aP:function(a){var t=0,s=P.bq(),r,q=this,p,o
var $async$aP=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=P.bh
o=new P.bj(0,$.aD,null,[p])
W.vG(a,null,q.aN(0),null,null,"arraybuffer",null,null).b0(new O.kH(new P.dU(o,[p])))
r=o
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aP,s)},
$asc8:function(a){return[a,P.bh]}}
O.kH.prototype={
$1:function(a){this.a.az(0,H.i2(J.xZ(a),"$isbh"))},
$S:function(){return{func:1,args:[W.e2]}}}
O.eC.prototype={
b6:function(a){var t=0,s=P.bq(),r,q,p,o,n
var $async$b6=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:a.toString
q=H.cO(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hH(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b6,s)},
aP:function(a){var t=0,s=P.bq(),r
var $async$aP=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=W.vF(a,null,null)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aP,s)},
$asc8:function(a){return[a,P.C]}}
O.il.prototype={
aP:function(a){var t=0,s=P.bq(),r
var $async$aP=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aP,s)},
b6:function(a){return H.ba("Element format doesn't read from buffers")},
$asc8:function(a){return[a,P.C]}}
V.lW.prototype={
aN:function(a){return"font/opentype"},
R:function(a,b){var t=0,s=P.bq(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cx(A.ht("scripts/Rendering/text/opentype.min.js",!1),$async$R)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[R.he]},
$asc8:function(){return[R.he,P.bh]}}
Z.im.prototype={}
E.iB.prototype={}
E.ny.prototype={}
E.I.prototype={
D:function(a){var t="["+J.cJ(this.a)+" x "+H.B(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fJ.prototype={
D:function(a){var t="[(Random from "+P.tL(this.d,"(",")")+") x "+H.B(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.i6.prototype={
D:function(a){return"[Stats assigned from player Interests x"+H.B(this.b)+"]"}}
Y.m1.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aI,$.P,$.N,$.a_,$.hm],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aN,$.P,$.aM],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.Q,$.P,$.aM],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.jm,$.P,$.aM],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.lN,$.m)
t.i(0,$.c7,$.k)
t.i(0,$.dr,$.L)
t.i(0,$.dd,$.k)
r=$.u
q="An excited "+r+" runs up to the "
p=$.n
q=q+p+" and starts to "
o=$.M
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aX
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ap
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.z
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.R("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.W(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o=$.n
t.i(0,new R.a8("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.z+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.u+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.y(),!1,!1,new Y.dM("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.u
j="Now that the "+o+"s are free from the reign of "+$.z+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.n
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.M
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aX+" Quest Online: The "+$.ap+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a8("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.n
p=p+o+" shows the "
r=$.u
t.i(0,new R.bA("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.M+"s in time to stop them.    ")],H.a([],i),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.m2.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Sherpa Parka",H.a([$.bi,$.P,$.ce],s),"Clearly the best class uses this.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a_,$.bi,$.aI,$.N,$.P,$.a0],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.D,$.P,$.aT],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.D,$.P,$.a2,$.a0],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.lN,$.k)
t.i(0,$.c7,$.k)
t.i(0,$.dr,$.m)
t.i(0,$.dd,$.k)
r="Now that the "+$.z+" is out of the way, a group of "
q=$.u
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.n
o=[U.b]
t.i(0,new R.a8("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.M+", but they are happy.")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.n
t.i(0,new R.bA("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.u+" "+$.M+"s in time to stop them.    ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
T.m3.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Doll",H.a([$.jm,$.aJ,$.aA,$.H],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.Y,$.aA,$.H,$.a_,$.b4],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.mw,$.H],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.N,$.H,$.aO],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.ay,$.b3,$.H],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.eg,$.L)
q.i(0,$.ei,$.k)
q.i(0,$.bP,$.m)
p=$.n
o="The "+p+", guided by a "+$.u+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.z
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.R("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.W(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=$.n
p="The "+j+" finds a Violent "
l=$.u
p=p+l+". A Magical Talking "
k=$.ap
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.z
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.R("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.W(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.um(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.G(s,q,null),$.at)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cv,$.k)
s.i(0,$.it,$.k)
s.i(0,$.f4,$.m)
s.i(0,$.c0,$.k)
s.i(0,$.cw,$.m)
s.i(0,$.dr,$.L)
p=$.n
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ap
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.z
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is victorious. "
s.i(0,new R.R("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j="Now that the "+$.z+" has been defeated, a Copy "
p=$.n
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.u
j=j+k+"s "
l=$.M
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.f6+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a8("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.e5(),!1,!1,new Y.c1("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.z
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.R("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.W(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.ev(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.G(q,s,null),$.at)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.is,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.lM,$.k)
t.i(0,$.f_,$.m)
t.i(0,$.hc,$.k)
t.i(0,$.cA,$.m)
t.i(0,$.ei,$.L)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.u
t.i(0,new R.R("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.M+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aX+" laws put in place by "+$.z+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.n
p="The "+r+" finds a weeping Broken Hearted "
q=$.u
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aX
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.M
t.i(0,new R.a8("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hI(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.n
m="The "+q+"  and the "
r=$.ex
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.z
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.R("Flushed Shipping Dungeon",!1,[new U.b(m),new U.W(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.B(C.r)+".",n)],H.a([],i),R.ew(),!1,!1,new Y.iz(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ax)
n=$.n
r="The "+n+"  and the "
q=$.ex
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.z
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.R("Pitched Shipping Dungeon",!1,[new U.b(r),new U.W(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.B(C.r)+".",m)],H.a([],i),R.ew(),!1,!1,new Y.jE(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ax)
h.i(0,new X.G(s,t,null),$.aS)}}
B.m4.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Family Ashes",H.a([$.aK,$.aF,$.P,$.aM,$.bW],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a_,$.N,$.P,$.aM,$.mv],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aI,$.P,$.ar],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.vP,$.P,$.mn,$.mv],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.tl,$.P,$.aH,$.mv],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.cc,$.m)
r=$.z
q="With the death of the "+r+", it now falls to the "
p=$.n
o=[U.b]
t.i(0,new R.a8("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.u+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
r="The "+$.z+" has released the frogs into the "
p=$.n
t.i(0,new R.bA("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
V.m5.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Hippo",H.a([$.aT,$.aW,$.H],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ranting",H.a([$.mo,$.aT,$.fc],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Vent",H.a([$.D,$.tp],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.dG,$.L)
t.i(0,$.d2,$.m)
t.i(0,$.lH,$.m)
t.i(0,$.h9,$.m)
r=$.n
q="The "+r+" hears the screaming voice of the "
p=$.z
q=q+p+", and when they walk into a consort village, a "
o=$.u
q=q+o+" "
n=$.M
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.R("Stop the Screamening",!1,[new U.b(q),new U.b(n),new U.b(o),new U.W(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.at)}}
X.m7.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Wand",H.a([$.Y,$.H,$.a3,$.aW],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.aW,$.bz,$.H,$.b_,$.a7,$.a_,$.a3],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bR,$.tw,$.H,$.a3,$.b8,$.aW],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.aW,$.b_,$.H,$.aF],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aN,$.b_,$.H,$.aW],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.t6,$.k)
q.i(0,$.cA,$.m)
q.i(0,$.b2,$.k)
q.i(0,$.c5,$.k)
p=$.n
o="The "+p+" is just minding their own business when they see a wizened "
n=$.u
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.M+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.z
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ap
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.EV
i=[U.b]
q.i(0,new R.R("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(k,p,j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.k)
s.i(0,$.ir,$.m)
s.i(0,$.d3,$.k)
p=$.n
o="The "+p+"  is approached by a Crafty "
m=$.u
o=o+m+" who offers them a magical "
l=$.ap
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.z
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.R("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.ds,$.L)
t.i(0,$.cB,$.k)
t.i(0,$.c5,$.k)
r=$.n
q="The "+r+" finds a grey town of despondant "
p=$.u
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.z
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ap
t.i(0,new R.R("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.W("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.n
o="The "+r+" discovers a group of "
p=$.u
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.z
t.i(0,new R.R("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.W("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hI(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.G(s,t,null),$.at)}}
X.mc.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Footstick",H.a([$.de,$.P,$.jl,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Cheating Guide",H.a([$.aI,$.P,$.hm,$.N],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of Shogun",H.a([$.Q,$.P,$.e3,$.mu,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Macrobots",H.a([$.tG,$.P,$.mn],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.cC,$.k)
t.i(0,$.d3,$.k)
t.i(0,$.dq,$.k)
t.i(0,$.dd,$.k)
t.i(0,$.ef,$.k)
t.i(0,$.dG,$.k)
t.i(0,$.hb,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.un(),!1,!1,new Y.dM("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cg+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.M
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wC(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dM("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m="A wizened "+$.u+" tells the "
r=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wD(),!1,!1,new Y.c1("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a8("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bA("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.at)}}
Q.md.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Yardstick",H.a([$.de,$.P,$.jl,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURB Hacking Guide",H.a([$.aI,$.P,$.hm,$.N],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Body Pillow of Hussie",H.a([$.Q,$.P,$.e3,$.mu,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.mg.prototype={
aZ:function(a){var t=0,s=P.bq(),r,q,p
var $async$aZ=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:q=W.vH(null,a,null)
p=new W.hS(q,"load",!1,[W.U])
t=3
return P.cx(p.gad(p),$async$aZ)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aZ,s)},
$asdm:function(){return[W.f9]},
$asc8:function(){return[W.f9,P.bh]}}
Q.nO.prototype={
aN:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bq(),r,q=this,p,o,n
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cx(q.cA(b),$async$R)
case 3:p=n.vH(null,d,null)
o=new W.hS(p,"load",!1,[W.U])
t=4
return P.cx(o.gad(o),$async$R)
case 4:r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)}}
Q.nL.prototype={
aN:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bq()
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:throw H.l("Read NYI")
return P.bs(null,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[Q.jD]},
$asc8:function(){return[Q.jD,P.bh]}}
B.mk.prototype={
$1:function(a){return!a.gbu()},
$S:function(){return{func:1,args:[B.fa]}}}
B.fa.prototype={
G:function(){var t,s
t=Q.E(null,null,A.X)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.k)
q.i(0,$.bd,$.L)
q.i(0,$.dJ,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e0,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.f1,$.k)
s.i(0,$.eh,$.L)
s.i(0,$.ej,$.m)
s.i(0,$.cT,$.k)
s.i(0,$.cc,$.L)
p=$.n
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bd,$.L)
t.i(0,$.c7,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
t.i(0,new R.a1("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
r="The "+p+" learns that all of the local "
q=$.u
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.M
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ul(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
n.i(0,new X.G(s,t,null),$.aS)},
D:function(a){return this.ch},
gbu:function(){return this.a},
gb_:function(){return this.r},
gK:function(a){return this.ch}}
A.X.prototype={
ay:function(a,b){var t=b.gbx()-this.gbx()
if(t>0)t=1
else if(t<0)t=-1
return C.d.by(t)},
gfX:function(){var t,s,r,q,p,o
t=H.a([],[P.C])
s=new A.jH(null,null)
s.cW(this.f.a)
if(this.r===0)return t
r=P.df(G.yQ(this.f),!0,G.V)
C.b.cZ(r,new A.mC())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.cj)(r),++p){o=r[p]
if(!(o instanceof G.as||o.gdS().length===0))t.push(" "+Y.GT(s.hu(o.gdS())))}return t},
gbx:function(){var t,s,r
for(t=this.f,s=new P.dx(t,t.r,null,null,[null]),s.c=t.e,r=0;s.J();)r+=s.d.gbx()
return r},
gfO:function(){var t=this.f
return new H.e8(t,new A.mB(),[H.O(t,0)])},
gh6:function(){var t,s,r,q,p
for(t=this.gfX(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.cj)(t),++q)r+=t[q]+" "
return r+this.d},
D:function(a){return this.gh6()},
N:function(a,b,c,d,e){var t,s,r
t=P.tX(b,null)
this.f=t
if(t.a===0)t.h(0,$.fc)
s=P.tX(this.gfO(),null)
for(t=new P.dx(s,s.r,null,null,[null]),t.c=s.e;t.J();){r=t.d
this.f.bP(0,r.geC())
this.f.an(0,r)}$.$get$wi().push(this)},
$isbG:1,
$asbG:function(){return[A.X]}}
A.mC.prototype={
$2:function(a,b){return a.ge7()-C.a.by(b.ge7())},
$S:function(){return{func:1,args:[G.V,G.V]}}}
A.mB.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.V]}}}
Z.mJ.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Juice Box",H.a([$.N,$.H,$.aW,$.aw],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shogun Body Pillow",H.a([$.e3,$.b7,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.dG,$.ax)
t.i(0,$.cA,$.m)
t.i(0,$.bP,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.c5,$.k)
r=$.n
q="The "+r+" sees a floating sentient "
p=$.ap
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.u+" notices it, and starts "+$.M+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.z
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.b]
t.i(0,new R.R("Talk to your Juice entity",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
r="The "+p+" is greeted by a young adolescent "
m=$.u
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.z
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.M
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.R("Be The Wingman",!1,[new U.b(r),new U.b(l),new U.b(n),new U.W(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=$.n
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.u
m=m+q+" informs them that "
p=$.z
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.R("Pilot The Mech",!1,[new U.b(m),new U.b(o),new U.b(n),new U.W(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.at)}}
N.mK.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Gavel",H.a([$.Y,$.tu],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aN,$.bf],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.Q,$.aJ],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.N,$.aI],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bQ,$.aE,$.bi],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.N,$.aI,$.ay],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aK,$.D,$.bf],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.h7,$.L)
q.i(0,$.c6,$.m)
q.i(0,$.cB,$.L)
p=$.n
o="The "+p+" finds an elaborate courtroom full of "+$.M+"ing "
n=$.u
m=[U.b]
q.i(0,new R.a1("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ap+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.k)
s.i(0,$.dr,$.m)
s.i(0,$.cT,$.m)
p=$.n
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.u
l=o+l+" yells 'Stop that thief' in betwen "+$.M+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ap+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.ER
s.i(0,new R.a1("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.y(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.k)
t.i(0,$.cc,$.m)
t.i(0,$.cL,$.L)
t.i(0,$.ek,$.m)
t.i(0,$.eg,$.m)
t.i(0,$.f2,$.m)
t.i(0,$.iu,$.m)
r=$.n
q="The "+r+" finds a crowd of "
p=$.M
q=q+p+"ing "
o=$.u
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.F3
t.i(0,new R.a1("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.y(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.aS)}}
S.mM.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Shining Armor",H.a([$.aK,$.my,$.P,$.fd],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a_,$.my,$.P,$.aZ,$.aH,$.em],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.D,$.P,$.be,$.aA],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aK,$.fd,$.P,$.my],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.lK,$.k)
t.i(0,$.dI,$.k)
t.i(0,$.e1,$.k)
t.i(0,$.f2,$.k)
t.i(0,$.h7,$.m)
r="The "+$.z+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.z
r="Now that the "+q+" is defeated, the "
o=$.u
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.n
t.i(0,new R.a8("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.aX
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.z
n=n+q+". A Learned "+$.u+" explains that it can only be defeated by the Legendary "
r=$.ap
n=n+r+" Blade. The "
m=$.n
t.i(0,new R.a8("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
r="The volcanos of the land are weirdly active after the defeat of the "+$.z+". One begins to erupt near a "
m=$.u
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.M+"s, but not really doing anything to evacuate or save anyone. The "
o=$.n
t.i(0,new R.a8("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Q.mN.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Dream Diary",H.a([$.N,$.aI,$.H],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aN,$.bk,$.am,$.H,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aN,$.bk,$.H],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.ef,$.m)
q.i(0,$.dq,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.ix,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ap
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.M+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wr
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.G(s,q,null),$.at)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.m)
s.i(0,$.dq,$.k)
s.i(0,$.d3,$.m)
s.i(0,$.c5,$.m)
s.i(0,$.dG,$.m)
s.i(0,$.cv,$.k)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.M
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(q,s,null),$.at)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.d2,$.k)
t.i(0,$.h9,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.c5,$.k)
t.i(0,$.dG,$.k)
t.i(0,$.dq,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aX+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.M+"ing in reverse. Another is in a "+$.ap+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(s,t,null),$.at)}}
K.mP.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Creeping Vine",H.a([$.Y,$.H,$.b5,$.aA],s),null,!1,"Sentient Plant Tentacles")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.to,$.H,$.b0],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aK,$.aG,$.H,$.aA],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bW,$.H,$.b0],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.b3,$.H,$.b0,$.a_,$.a3],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.be,$.H,$.aA],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.c7,$.k)
q.i(0,$.bd,$.k)
q.i(0,$.h8,$.L)
q.i(0,$.b2,$.m)
q.i(0,$.lN,$.m)
q.i(0,$.cC,$.L)
p=$.n
o="The "+p+" finds a village of compliant "
n=$.u
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.M+"ing in panic. Don't upset "
m=$.z
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.R("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.W(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.cC,$.L)
s.i(0,$.b2,$.m)
o=$.n
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.u
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.z
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.R("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.W(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.d1,$.k)
t.i(0,$.bd,$.L)
t.i(0,$.dJ,$.k)
t.i(0,$.c0,$.m)
t.i(0,$.e0,$.m)
t.i(0,$.ip,$.m)
r="Drawn by wailing and "+$.M+"ing, the "
q=$.n
r=r+q+" enters a rotting "
o=$.u
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.z
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.R("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.W(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.at)}}
G.mQ.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("FAQ",H.a([$.a2,$.H,$.a0,$.bE],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aN,$.H,$.b_,$.a2,$.bE],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.H,$.b_,$.bE,$.a_,$.mr],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.tv,$.H,$.am],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.tD,$.H],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b5,$.H,$.b_,$.bE],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.b3,$.H,$.aA],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.iv,$.k)
q.i(0,$.ef,$.m)
q.i(0,$.dH,$.k)
q.i(0,$.ei,$.k)
p=$.n
o="The "+p+" is searching for the lair of "
n=$.z
o=o+n+" when some local "
m=$.u
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.R("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.W(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.M+"ing "+$.u+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.z
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.R("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.W(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.G(s,q,null),$.at)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.m)
s.i(0,$.b2,$.m)
s.i(0,$.ds,$.k)
s.i(0,$.lI,$.k)
s.i(0,$.eh,$.k)
s.i(0,$.ir,$.k)
p=$.n
o="The "+p+" walks into a "
n=$.u
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ap
o=o+l+", but "
k=$.z
o=o+k+" has hoarded all of the planets "
j=$.aX
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.M+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.R("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.W(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.um(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.u
j=j+k+" explains that the "
h=$.z
s.i(0,new R.R("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.M+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.W("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.at)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.m)
q.i(0,$.bd,$.m)
q.i(0,$.f3,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.cB,$.k)
p="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
p=p+o+" sets up a wiki and settles in to help the "
n=$.u
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.f6+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a8("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.e5(),!1,!1,new Y.c1("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.u
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.f6+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a8("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.ev(),!1,!1,new Y.c1("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.n
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.z
q.i(0,new R.R("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,q,null),$.at)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.dH,$.k)
t.i(0,$.iv,$.k)
t.i(0,$.ei,$.m)
t.i(0,$.cA,$.m)
t.i(0,$.t9,$.m)
t.i(0,$.c0,$.L)
t.i(0,$.e1,$.L)
t.i(0,$.bP,$.m)
t.i(0,$.cv,$.L)
t.i(0,$.bd,$.m)
t.i(0,$.cz,$.k)
s=$.n
r="The "+s+" is approached by a Fast Talking "
p=$.u
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ap
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.M+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.z
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.R("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.W(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o="After the "+$.z+", the "
s=$.n
o=o+s+" is disappointed to learn that barely any of the "
l=$.u
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.f6+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a8("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.e5(),!1,!1,new Y.c1("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,t,null),$.at)}}
Z.n3.prototype={
G:function(){var t,s,r,q
t=this.F
s=[G.V]
r=A.i("Dream Bubbles Book",H.a([$.N,$.ar,$.aI,$.vS],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.O(t,0)]))
t=Q.E(null,null,A.X)
r=A.i("Uno Reverse Card",H.a([$.mp,$.jl,$.ar],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.Q,$.P,$.ar],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.hm,$.P,$.ar],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a_,$.N,$.P,$.bm,$.aI],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cL,$.L)
q.i(0,$.ek,$.L)
q.i(0,$.c0,$.L)
q.i(0,$.cT,$.m)
p="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.n
p=p+o+" comands that the "
n=$.u
m=[U.b]
q.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.M+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
o="As soon as the "+$.z+" is defeated, the "
n=$.u
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.n
q.i(0,new R.a8("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.x
p.i(0,new X.G(s,q,null),$.bM)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.vu,$.k)
t.i(0,$.c5,$.k)
t.i(0,$.bd,$.k)
t.i(0,$.b2,$.m)
s="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.n
s=s+r+" comands that the "
o=$.u
t.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.M+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
r="As soon as the "+$.z+" is defeated, the "
o=$.u
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.n
t.i(0,new R.a8("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",this.F,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,t,null),$.bM)}}
S.n5.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Alternate Costume",H.a([$.Q,$.P,$.a3,$.a_,$.az],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.Q,$.P,$.a3],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.Y,$.P,$.am,$.a3,$.de],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jj,$.Y,$.P,$.aA,$.a3,$.de],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.f0,$.k)
t.i(0,$.f2,$.m)
t.i(0,$.cc,$.k)
t.i(0,$.ej,$.m)
t.i(0,$.d1,$.L)
r="The "+$.z+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.n
t.i(0,new R.a8("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
r="The "+q+" is feeling quite pleased with their victory over the "+$.z+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aX
t.i(0,new R.a8("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="Now that the "+$.z+" has been defeated, the "
o=$.u
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.n
q=q+r+"'s help in planning the brand new city of "
n=$.aX
t.i(0,new R.a8("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.M+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.n6.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Maiden's Breath",H.a([$.b5,$.P,$.aJ],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.Y,$.P,$.de,$.bz],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.aJ,$.aK,$.D,$.P,$.a_,$.fd,$.vK],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.N,$.P,$.a7,$.aI],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.dd,$.k)
t.i(0,$.c7,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.ds,$.m)
t.i(0,$.cv,$.m)
r="The "+$.z+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.n
r=r+q+" asks local  "
p=$.u
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bA("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.n
o="The "+q+" has adopted a local "
p=$.u
t.i(0,new R.a8("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.M+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.z+". ")],H.a([],n),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
D.nc.prototype={
G:function(){var t,s
t=Q.E(null,null,A.X)
s=A.i("memes",H.a([$.aW,$.tm,$.vR,$.tp],[G.V]),"No. Just no.",!1,";)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Memes"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.iv,$.k)
r=$.n
q="The "+r+" decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."
p="The "+r+" finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant "+$.u+"-looking dragon. They notice that it's chained up, so The "+r+" decides to free it, and it brings them to the top of the tallest tower in the castle. "
o="The dragon leads The "+r+" to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The "+r+" unveils it, they see a sleeping consort, The "+r+" yeets it out the window, and rides the Dragon towards the "
n=$.z
o=o+n+". "
m="The "+r+" rides up to the "+n+"'s lair, and they challenge it to a battle. "
l="The "+r+" wins, with the added help of the Dragon, there was no chance they would lose. "
t.i(0,new R.R("Become Shrek",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(m,"Even with the added help of the Dragon, The "+r+" wasn't enough to defeat the "+n,l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.at)}}
V.nf.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Puzzle Box",H.a([$.Y,$.H,$.a3],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a2,$.H,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.H],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.H,$.a2,$.a0],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aK,$.hj,$.aG,$.ar,$.H,$.a_,$.a2],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.c5,$.m)
q.i(0,$.ef,$.L)
q.i(0,$.cB,$.L)
p=$.n
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.u
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.z
k=[U.b]
q.i(0,new R.R("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fm(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.u+" explains that at the end of the Labrinth is the "
l=$.z
q.i(0,new R.R("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.W("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.h7,$.L)
s.i(0,$.c6,$.m)
s.i(0,$.cB,$.L)
s.i(0,$.c5,$.L)
p=$.z
o="The "+p+" has commited a staggering amount of crimes against the local "+$.u+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.n
s.i(0,new R.R("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.W("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.iw,$.k)
t.i(0,$.bd,$.m)
t.i(0,$.f3,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.cB,$.k)
r=$.n
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.z
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ap+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.R("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.at)}}
E.nh.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Feather Pen",H.a([$.D,$.P,$.ar,$.bz],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.w4,$.P,$.hj,$.am,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.N,$.P,$.ar,$.aI],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.dd,$.k)
t.i(0,$.c7,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.ds,$.m)
t.i(0,$.cv,$.m)
r="The "+$.z+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.n
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bA("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.z+" the "
o=$.u
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.n
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ap
t.i(0,new R.a8("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
F.ni.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Piano",H.a([$.am,$.Y,$.a7,$.ar],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.D,$.a7],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aT,$.a2],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.Y,$.a7],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.N,$.a7],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aN,$.a7,$.a2,$.aT,$.ay],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aN,$.a7,$.a2,$.ay],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.Y,$.a7],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.ax)
q.i(0,$.t9,$.k)
q.i(0,$.ei,$.k)
q.i(0,$.ds,$.m)
q.i(0,$.b2,$.m)
q.i(0,$.lG,$.m)
p=$.n
o="The "+p+" meets a wise old "+$.u+" who tells that the "+$.z+" can only be awoken by the Legendary Hero playing the "
n=$.aX
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ap
k=[U.b]
q.i(0,new R.a1("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
n="The "+p+" finds an empty, trashed "
l=$.aX
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ap+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.M+"ing "+$.u+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.EX
q.i(0,new R.a1("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.y(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.tc,$.ax)
s.i(0,$.dr,$.m)
s.i(0,$.cT,$.m)
s.i(0,$.ds,$.k)
s.i(0,$.lG,$.ax)
o=$.n
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aX
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.z
s.i(0,new R.a1("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ap+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.h8,$.ax)
t.i(0,$.bP,$.m)
t.i(0,$.dJ,$.m)
r=$.n
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.u
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.M
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aX+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.a1("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aS)}}
Y.nv.prototype={
R:function(a,b){var t=0,s=P.bq(),r,q=this,p,o
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cx(A.ht("scripts/Rendering/threed/three.min.js",!1),$async$R)
case 3:t=4
return P.cx(Q.oc(),$async$R)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.bp(p)
o.ez(p,P.wl(["",$.$get$vl()],P.C,S.hx))
o.ey(p,!1)
q.b=p}J.v7(p,b)
r=J.v7(q.b,b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$aseC:function(){return[S.fk]},
$asc8:function(){return[S.fk,P.C]}}
V.nD.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Shorts",H.a([$.Q,$.P,$.fb,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aN,$.P,$.ay],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.aE,$.P,$.a3],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.lK,$.k)
t.i(0,$.cC,$.m)
t.i(0,$.hd,$.m)
t.i(0,$.lM,$.m)
t.i(0,$.dd,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.e0,$.m)
t.i(0,$.eh,$.m)
t.i(0,$.td,$.m)
t.i(0,$.ip,$.m)
t.i(0,$.lI,$.m)
r="The "+$.z+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.n
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bA("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.n
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.u+" named Professor "
p=$.M
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ap
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.z
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.R("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k,"The "+q+" whited out...",m)],H.a([],n),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m="Now that the "+$.z+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.n
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.u
t.i(0,new R.a8("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aX+" buffs. With a deafening "+$.M+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.y(),!1,!1,new Y.ia("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
G.nQ.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Superhero Action Figure",H.a([$.aN,$.ay,$.aw],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aN,$.ay],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aN,$.bW],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aN,$.b8,$.bi,$.ce],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aN,$.ay],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.N,$.ay],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.b5,$.ay,$.Q,$.aA],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.b5,$.b1,$.ay,$.Q],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aw,$.D,$.ay,$.em,$.aH,$.bR],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.N,$.ay],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.N,$.ay],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.m)
q.i(0,$.cz,$.m)
q.i(0,$.bP,$.k)
q.i(0,$.cC,$.ax)
q.i(0,$.d3,$.ax)
p=$.n
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.u
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aX+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.M+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.EY
l=[U.b]
q.i(0,new R.a1("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.eg,$.m)
s.i(0,$.dr,$.m)
s.i(0,$.cz,$.m)
s.i(0,$.bP,$.m)
s.i(0,$.dI,$.k)
o=$.n
n="The "+o+" runs towards an explosion in a local "
m=$.u
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aX
s.i(0,new R.a1("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.cz,$.m)
t.i(0,$.dH,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.dI,$.m)
r=$.n
q="The "+r+" gets a job at the "+$.aX+" Cinema. A new movie, The Lonely "
o=$.ap
q=q+o+" is coming out soon, and "
n=$.u
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.M+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a1("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aS)}}
N.nU.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Feather'd Cap",H.a([$.Q,$.P,$.fb],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a_,$.tt,$.P,$.fb],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bn,$.P],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.cz,$.m)
t.i(0,$.c5,$.m)
t.i(0,$.dJ,$.L)
r="With the closing of the curtain, the "+$.z+" has released the frogs, and yet they are nowhere to be found. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.z
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.n
r=r+o+" to get it back to normal. They organize a team of "
n=$.u
t.i(0,new R.a8("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ap+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.b.prototype={}
U.W.prototype={}
R.nV.prototype={
aQ:function(){return"<div class = 'feature'>QuestChain: "+this.c+", Reward: "+H.jG(this.z)+"</div>"},
D:function(a){return H.B(new H.dS(H.kk(this),null))+": "+this.c},
gK:function(a){return this.c}}
R.a1.prototype={}
R.R.prototype={}
R.a8.prototype={}
R.bA.prototype={}
E.nW.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Curtain",H.a([$.Q,$.H,$.aw],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.em,$.aZ,$.H,$.aH,$.b4,$.aw,$.bl,$.aM],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.D,$.aT,$.a2,$.H,$.aw],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aK,$.D,$.aT,$.bm,$.c2,$.H,$.aw],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.aE,$.bm,$.ar,$.H,$.a_,$.aw],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.Y,$.H,$.b4,$.aF,$.bn,$.aw],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.iq,$.k)
q.i(0,$.cL,$.k)
q.i(0,$.dr,$.k)
q.i(0,$.d1,$.m)
q.i(0,$.c0,$.m)
q.i(0,$.cc,$.m)
q.i(0,$.c6,$.L)
q.i(0,$.d3,$.m)
q.i(0,$.eg,$.k)
q.i(0,$.iu,$.k)
q.i(0,$.f2,$.k)
q.i(0,$.lL,$.k)
q.i(0,$.h8,$.m)
q.i(0,$.ek,$.k)
p=$.n
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.ap
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hI(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.n
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.G(s,q,null),$.at)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.ds,$.k)
s.i(0,$.c0,$.m)
s.i(0,$.c6,$.k)
s.i(0,$.cA,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.cz,$.m)
s.i(0,$.it,$.L)
s.i(0,$.cL,$.m)
s.i(0,$.cC,$.k)
s.i(0,$.bP,$.k)
s.i(0,$.d3,$.L)
p=$.M
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aX
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(q,s,null),$.at)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.iq,$.k)
t.i(0,$.d3,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.cC,$.m)
t.i(0,$.cv,$.k)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(s,t,null),$.at)}}
Y.dM.prototype={}
Y.aq.prototype={}
Y.d0.prototype={}
Y.c1.prototype={
gK:function(a){return this.c}}
Y.S.prototype={}
Y.ia.prototype={}
Y.bD.prototype={}
Y.cX.prototype={}
Y.kR.prototype={}
Y.bw.prototype={}
Y.jC.prototype={}
Y.iz.prototype={}
Y.jE.prototype={}
N.o1.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Domino Mask",H.a([$.Q,$.P,$.fb],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.tn,$.P,$.fb,$.tk],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a_,$.aN,$.a2,$.P,$.a0,$.az],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.c6,$.k)
t.i(0,$.cc,$.m)
t.i(0,$.dI,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt Noble "
q=$.u
r=r+q+"s have hoarded them. The "
p=$.n
o=[U.b]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
q="The "+p+" learns of the extreme injustices of the "
r=$.u
q=q+r+"s who rose to power during the tyranny of "
n=$.z
t.i(0,new R.a8("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Q.o2.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Red Rose",H.a([$.aO,$.aJ],s),null,!1,"Seductive Plant")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aO,$.N],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aO,$.aE],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aO,$.aF],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aO,$.bn,$.D,$.b1],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aI,$.N,$.aO],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.k)
q.i(0,$.hd,$.m)
q.i(0,$.f_,$.m)
q.i(0,$.hc,$.k)
q.i(0,$.cA,$.m)
q.i(0,$.is,$.L)
p=$.n
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.u
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ap+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.a1("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cA,$.m)
s.i(0,$.dH,$.k)
s.i(0,$.hc,$.k)
s.i(0,$.cw,$.m)
s.i(0,$.ei,$.L)
s.i(0,$.is,$.L)
o=$.u
n="A Romantic "+o+" approaches the "
m=$.n
s.i(0,new R.a1("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.is,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.f_,$.m)
t.i(0,$.lM,$.k)
t.i(0,$.hc,$.k)
t.i(0,$.cA,$.m)
t.i(0,$.ei,$.L)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.u
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.M+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.z+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.EU
t.i(0,new R.a1("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.n
r="The "+n+"  and the "
o=$.ex
t.i(0,new R.a1("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.ew(),!1,!1,new Y.iz(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ax)
o=$.n
n="The "+o+"  and the "
r=$.ex
t.i(0,new R.a1("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.ew(),!1,!1,new Y.jC(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ax)
r=$.n
o="The "+r+"  and the "
n=$.ex
t.i(0,new R.a1("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.ew(),!1,!1,new Y.jE(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p.i(0,new X.G(s,t,null),$.aS)}}
V.o3.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Arrow",H.a([$.aZ,$.Y,$.tk],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bow",H.a([$.Y,$.am,$.fc],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yondu",H.a([$.aw,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Empathy",H.a([$.H,$.tm,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.b2,$.m)
t.i(0,$.d2,$.L)
t.i(0,$.bP,$.m)
t.i(0,$.c5,$.L)
r=$.n
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.z
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.R("Be the Yondu",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.at)}}
T.o5.prototype={
$1:function(a){return!a.gbu()},
$S:function(){return{func:1,args:[T.fo]}}}
T.fo.prototype={
G:function(){var t,s
t=Q.E(null,null,A.X)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.k)
q.i(0,$.bd,$.L)
q.i(0,$.dJ,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e0,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a8("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.x
n.i(0,new X.G(s,q,null),$.bM)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.f1,$.k)
s.i(0,$.eh,$.L)
s.i(0,$.ej,$.m)
s.i(0,$.cT,$.k)
s.i(0,$.cc,$.L)
p=$.n
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a8("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
l="The "+p+" learns that all of the local "
o=$.u
s.i(0,new R.a8("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.ex+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.M+"ing in amazement. The factory is saved! ")],H.a([],m),R.ew(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.ax)
n.i(0,new X.G(q,s,null),$.bM)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.bd,$.L)
t.i(0,$.c7,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.M
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ul(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.L)
l=$.n
p="The "+l+" learns that all of the local "
r=$.u
t.i(0,new R.a8("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.bM)},
D:function(a){return this.r},
a1:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.io("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.i7]),H.a([],[M.h6]))
this.G()
this.H()
t=this.Q
if($.$get$jK().a_(0,t))H.ba("Duplicate class id for "+this.D(0)+": "+t+" is already registered for "+J.cJ($.$get$jK().n(0,t))+".")
$.$get$jK().i(0,t,this)},
gK:function(a){return this.r},
gb_:function(){return this.x},
gbu:function(){return this.cx}}
E.o6.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Sage's Robe",H.a([$.Q,$.P,$.b7,$.a0,$.a3,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.N,$.P,$.aI,$.a0],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.Q,$.P,$.e3,$.a0],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.ha,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.f3,$.k)
t.i(0,$.b2,$.L)
t.i(0,$.cB,$.k)
r="The "+$.z+" has blocked access to the books for the duration. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q="Now that the "+$.z+" is defeated, it is time to begin recovery efforts. The "
r=$.u
q=q+r+"s ask the "
o=$.n
t.i(0,new R.a8("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.M+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.o7.prototype={}
K.o8.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Uno Reverse Card",H.a([$.mp,$.H,$.aw],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.e3,$.b7,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.iq,$.k)
q.i(0,$.cL,$.k)
q.i(0,$.dr,$.k)
q.i(0,$.d1,$.m)
q.i(0,$.c0,$.m)
q.i(0,$.cc,$.m)
q.i(0,$.c6,$.L)
q.i(0,$.d3,$.m)
q.i(0,$.eg,$.k)
q.i(0,$.iu,$.k)
q.i(0,$.f2,$.k)
q.i(0,$.lL,$.k)
q.i(0,$.h8,$.m)
q.i(0,$.ek,$.k)
p=$.n
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.ap
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hI(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.n
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.G(s,q,null),$.at)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.ds,$.k)
s.i(0,$.c0,$.m)
s.i(0,$.c6,$.k)
s.i(0,$.cA,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.cz,$.m)
s.i(0,$.it,$.L)
s.i(0,$.cL,$.m)
s.i(0,$.cC,$.k)
s.i(0,$.bP,$.k)
s.i(0,$.d3,$.L)
p=$.M
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aX
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(q,s,null),$.at)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.iq,$.k)
t.i(0,$.d3,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.cC,$.m)
t.i(0,$.cv,$.k)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(s,t,null),$.at)}}
Y.o9.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Walking Stick",H.a([$.Y,$.P,$.de],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.Q,$.P,$.vT,$.a0,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.N,$.P,$.a0],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.P,$.a0,$.a3],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p
t=[P.C]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.dd,$.k)
t.i(0,$.c7,$.k)
t.i(0,$.bd,$.k)
t.i(0,$.bP,$.L)
t.i(0,$.b2,$.L)
r="Now that the "+$.z+" has been defeated, the planet has really opened up. The "
q=$.n
p=[U.b]
t.i(0,new R.a8("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.u+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.n
t.i(0,new R.bA("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.u+" "+$.M+"s in time to stop them.   ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
L.oa.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Scroll",H.a([$.N,$.P,$.a0],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.b3,$.P,$.az,$.a0],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.N,$.P,$.aI,$.a0,$.az,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.lG,$.k)
t.i(0,$.bd,$.k)
t.i(0,$.cB,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.c5,$.m)
r="The "+$.z+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q="Now that the "+$.z+" has been taken care of, the "
r=$.n
q=q+r+" discovers a large library of "
o=$.u
t.i(0,new R.a8("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
S.od.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Cueball",H.a([$.el,$.jm,$.P,$.am,$.aA,$.a_],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.el,$.vQ,$.P,$.b_],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.b3,$.P,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.vM,$.P,$.b7],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.vv,$.k)
t.i(0,$.h9,$.k)
t.i(0,$.lH,$.k)
t.i(0,$.cC,$.m)
r="Now that the "+$.z+" has been defeated, the land is really starting to open up. The "
q=$.n
r=r+q+" finds a tunnel filled with Blind "
p=$.u
o=[U.b]
t.i(0,new R.a8("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.n
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.u
t.i(0,new R.a8("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
r="A group of underlings are still making trouble, even after the defeat of the "+$.z+". The "
p=$.n
r=r+p+" begins planting rumors of a huge "
q=$.ap
t.i(0,new R.a8("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
T.c3.prototype={
aQ:function(){return"<div class = 'feature'>Smell "+H.B(this.b)+", Quality: "+H.B(this.a)+"</div>"}}
Y.ok.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Meddler's Guide",H.a([$.aI,$.P,$.N,$.bm,$.a_,$.b0],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b3,$.P,$.b0],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.P,$.b_,$.aJ,$.N],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.bd,$.m)
t.i(0,$.dd,$.k)
t.i(0,$.cC,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.c7,$.k)
r="The defeat of the "+$.z+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q="Now that the "+$.z+" has been taken care of, the "
r=$.n
q=q+r+" finds a long line of "
o=$.u
t.i(0,new R.a8("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
N.ol.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Fiduspawn Plush",H.a([$.ce,$.Q,$.b7],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ce,$.Q,$.b7],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dice",H.a([$.tr,$.aN],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pigeon",H.a([$.bz,$.aA,$.be,$.b9,$.bl,$.tA],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.Q,$.b7,$.ce],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aI,$.N],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aI,$.N],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.b7,$.Q],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aI,$.N,$.a0],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.L)
q.i(0,$.b2,$.m)
q.i(0,$.c5,$.k)
q.i(0,$.cB,$.m)
p=$.n
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aX+" or "+$.ap+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.M+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.d2,$.L)
s.i(0,$.b2,$.k)
s.i(0,$.c5,$.k)
s.i(0,$.t6,$.k)
s.i(0,$.cA,$.k)
s.i(0,$.tc,$.k)
s.i(0,$.cB,$.m)
o=$.n
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.M
n=n+l+"ing "
k=$.u
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aX
s.i(0,new R.a1("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.cT,$.L)
t.i(0,$.dH,$.k)
t.i(0,$.c7,$.k)
t.i(0,$.dI,$.k)
t.i(0,$.h7,$.k)
r=$.n
q="The "+r+" wanders into an entire crowd of "
o=$.u
t.i(0,new R.a1("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.M+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aS)}}
M.bB.prototype={
aQ:function(){return"<div class = 'feature'>Sounds Like "+H.B(this.b)+", Quality: "+H.B(this.a)+"</div>"}}
N.on.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Frog Statue",H.a([$.aK,$.aG,$.H],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.H],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.bX,$.a0,$.a2,$.H],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.b3,$.a0,$.H],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.N,$.H,$.ms,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=$.n
s=[P.C]
r=H.a(["Wherever the "+t+" goes, they find a "+$.u+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.M+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.z+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.n
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.u+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.u+" tells the "
p=$.n
t=t+p+" that they must negotiate with "
o=$.z
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.n
p="The "+o+" meets with "
t=$.z
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.cC,$.L)
t.i(0,$.t8,$.k)
s=[U.b]
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
t.i(0,new R.bA("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.y(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(o,t,null),$.G1)}}
U.au.prototype={
gK:function(a){return this.d+"kind"},
$isbG:1,
$asbG:function(){return[A.X]}}
K.cE.prototype={
gK:function(a){return this.a}}
M.os.prototype={
aN:function(a){return"application/octet-stream"},
R:function(a6,a7){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$R=P.bu(function(a8,a9){if(a8===1)return P.br(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dc(null,0)
q.a=J.dW(a7,0)
for(p=0,o="";p<6;++p)o+=H.hH(q.a8(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.l("Invalid header: "+n)
m=q.a8(8)
l=9+m*6
o=8*m
k=q.a8(o)
j=q.a8(o)
i=q.a8(o)
h=q.a8(o)
g=q.a8(o)
f=q.a8(o)
o=P.F
e=P.C
d=P.cD(o,e)
c=new O.cV(k,j,null,null,null,null,null,null,d,P.cD(e,o))
c.x=new Uint8Array(H.cy(k*j))
b=q.a8(8)
for(o=[o],p=0;p<b;++p){a=q.a8(8)
a0=q.a8(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.a8(8)
if(a2>=e){r=H.x(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.oS(a1,0,null))}a4=q.a8(8)
a5=$.$get$wH().n(0,a4)
if(a5==null)throw H.l("Sprite decoding error: Encoding id "+a4+" not supported.")
c.hP(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hB()
r=c
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[O.cV]},
$asc8:function(){return[O.cV,P.bh]}}
A.ng.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Puzzle Box",H.a([$.Y,$.H,$.a3],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a2,$.H,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.H],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.H,$.a2,$.a0],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Janus Bust",H.a([$.aK,$.hj,$.aG,$.ar,$.H,$.a_,$.a2],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.oo.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Frog Statue",H.a([$.aK,$.aG,$.H],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.H],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.bX,$.a0,$.a2,$.H],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.b3,$.a0,$.H],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Green Sun Poster",H.a([$.N,$.H,$.ms,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.nR.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Curtain",H.a([$.Q,$.H,$.aw],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.em,$.aZ,$.H,$.aH,$.b4,$.aw,$.bl,$.aM],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.D,$.aT,$.a2,$.H,$.aw],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aK,$.D,$.aT,$.bm,$.c2,$.H,$.aw],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.aE,$.bm,$.ar,$.H,$.a_,$.aw],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nightmare Fuel",H.a([$.Y,$.H,$.b4,$.aF,$.bn,$.aw],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.om.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Doll",H.a([$.jm,$.aJ,$.aA,$.H],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.Y,$.aA,$.H,$.a_,$.b4],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.mw,$.H],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.N,$.H,$.aO],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shades",H.a([$.ay,$.b3,$.H],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.pd.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Grandfather Clock",H.a([$.Y,$.ar,$.bb,$.H],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.tx,$.H,$.a7],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aK,$.be,$.H,$.b9,$.b4,$.aM],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.H,$.a7,$.ar],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.D,$.H,$.a7,$.a_,$.ay],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Metronome",H.a([$.D,$.H,$.a7],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.nY.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("FAQ",H.a([$.a2,$.H,$.a0,$.bE],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aN,$.H,$.b_,$.a2,$.bE],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.H,$.b_,$.bE,$.a_,$.mr],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.tv,$.H,$.am],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.tD,$.H],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b5,$.H,$.b_,$.bE],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("8-Ball",H.a([$.b3,$.H,$.aA],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.m_.prototype={
G:function(){var t,s
t=Q.E(null,null,A.X)
s=A.i("Infinity Gauntlet",H.a([$.H,$.D,$.mo],[G.V]),"...",!1,"THANOS CAR THANOS CAR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Stone","Thanos","Mind","Space","Power","Soul","Time","Reality"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.c5,$.m)
t.i(0,$.bP,$.L)
t.i(0,$.cL,$.L)
r=$.n
q="The "+r+" is wandering their land, when an imp goes up to them. Expecting a fight, the "+r+' raises their weapon. Surprisingly, the imp starts talking, and its eyes go black, it says "You must collect the Stones, then you can prove your worth to usssss..." the imp\'s eyes go back to normal, and then it dies. The '+r+" notices it droped a small glowing crystal... MINDSTONE COLLECTED, 1/6."
p="The "+r+' is going through a dungeon. Once they arrive in the final room, a miniboss appears. It bellows "I am the keeper of the Space Stone, fight me if you dare!" It then dissapears in a cloud of smoke. The '+r+" tries to look at some of the many mirrors in the room, to try to find the monster, but to no avail. The boss then flings itself at them from a random angle, and then the "+r+" was able to kill it, and it dropped a small blue gemstone... SPACESTONE COLLECTED, 2/6. Some time later, The "+r+' is going through another dungeon, when it encounters another miniboss, similar to the previous one, it bellows "FIGHT ME, TO COLLECT THE POWER STONE!!" It takes many hours, but the '+r+" comes out on top... POWERSTONE COLLECTED, 3/6."
o="The "+r+" is used to these shenanings by now, when they see a giant crystalline mini boss, they knock it down and take the stone... SOULSTONE COLLECTED, 4/6. When the "+r+" saw another miniboss, but encased in impenetrable gems, they threw it into an over and waited to get the stone... TIMESTONE COLLECTED, 5/6. When the "+r+" encounters yet another one, they try to attack it. But it dissapears, and a similar looking boss drops on their back, it goes on like that for awhile, but the "+r+" eventually defeats it... REALITYSTONE COLLECTED, 6/6, OBJECTIVE COMPLETE."
n="The "+r+" learns it's time to visit their denizen, but when they get there they only see "+$.z+" being [REDACTED]."
m="Paradox Space has declared the "+r+" is worthy, and lets them live."
t.i(0,new R.R("Collect The Stones",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"Paradox Space decrees that the "+r+" is not worthy.",m)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(s,t,null),$.at)}}
R.oV.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Meddler's Guide",H.a([$.aI,$.P,$.N,$.bm,$.a_,$.b0],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b3,$.P,$.b0],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.P,$.b_,$.aJ,$.N],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.c5,$.k)
t.i(0,$.b2,$.k)
t.i(0,$.dd,$.m)
t.i(0,$.f3,$.m)
t.i(0,$.t5,$.m)
t.i(0,$.e0,$.m)
t.i(0,$.ip,$.m)
t.i(0,$.tb,$.m)
r=$.n
q="The "+r+" decides to take a break after defeating "+$.z+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.u
o=[U.b]
t.i(0,new R.a8("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.M+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.un(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.u
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.n
t.i(0,new R.a8("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.u
q="The "+r+"s are so stressed after all that shit with the "+$.z+". They are yelling and "+$.M+" at each other over the slightest of insults. The "
p=$.n
t.i(0,new R.a8("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.z+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.n
p=p+r+" purifies the pools "
q=$.u
t.i(0,new R.bA("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
r="The defeat of the "+$.z+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.u
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.n
t.i(0,new R.a8("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aX+". Huh. Okay then.")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
L.oX.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Lightning",H.a([$.aT,$.aW,$.H],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice",H.a([$.bi,$.w_,$.fc],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Taserface",H.a([$.aw,$.aT],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Taser",H.a([$.aT,$.H,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.dG,$.L)
t.i(0,$.bP,$.k)
t.i(0,$.iq,$.m)
t.i(0,$.cL,$.m)
r=$.n
q="The "+r+" is walking around on their land, when a "
p=$.u
q=q+p+" walks up to them, and tells them about "
o=$.z
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.M+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.R("Rebel Against Your Land",!1,[new U.b(q),new U.b(p),new U.b(n),new U.W(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.at)}}
D.oZ.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Robot",H.a([$.a2,$.D,$.aA,$.a0],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a2,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a2,$.N],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a2,$.N,$.aM,$.aI],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aN,$.a2,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.vW,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.tI,$.D,$.am],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a2,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.iw,$.m)
q.i(0,$.f0,$.k)
q.i(0,$.f1,$.k)
q.i(0,$.cc,$.L)
p=$.n
o="The "+p+" learns from their "
n=$.u
o=o+n+"s about the great "
m=$.aX
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.z+" destroyed it. "
o="The "+p+" searches for the "
l=$.ap
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.F1
p=[U.b]
q.i(0,new R.a1("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.y(),!1,!1,new Y.cX("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=$.n
m="The "+l+" is approached by a "
o=$.u
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.M
q.i(0,new R.a1("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.z+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ap+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fm(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.f1,$.k)
s.i(0,$.eh,$.L)
s.i(0,$.ej,$.m)
s.i(0,$.cT,$.k)
s.i(0,$.cc,$.L)
o=$.n
n="The "+o+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.n
l="The "+o+" finds two groups of "
n=$.u
l=l+n+"s screaming and "
k=$.M
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ap
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.a1("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.e5(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.at)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.iw,$.L)
t.i(0,$.f0,$.k)
t.i(0,$.f1,$.k)
t.i(0,$.cc,$.L)
r=$.n
q="The "+r+" learns from a mysterious "+$.u+" in a black trenchcoat about a great "
o=$.aX
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.z
t.i(0,new R.a1("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aS)}}
V.p0.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Lighter",H.a([$.D,$.aF],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.N,$.bi],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.N,$.bi,$.bX],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.D,$.aM,$.bX,$.aW,$.bl],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.N,$.w0],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.D,$.bb,$.aW],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.D,$.bb,$.aW],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.Q,$.fb,$.aW],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bQ,$.bb],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.D,$.tB,$.b1,$.aW],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.D,$.tF,$.b1,$.aW],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.D,$.ty,$.b1,$.aW],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mt,$.aH,$.D,$.bn,$.aW],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.N,$.bm,$.aI],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.c2,$.D,$.aT,$.bm],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.Y,$.aF],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.m)
q.i(0,$.dH,$.k)
q.i(0,$.e1,$.k)
q.i(0,$.f2,$.k)
q.i(0,$.lK,$.k)
q.i(0,$.dI,$.m)
p=$.n
o=[U.b]
q.i(0,new R.a1("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.m)
s.i(0,$.dH,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.dI,$.m)
n=$.n
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.u
s.i(0,new R.a1("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ap+" underling. Tremble at the fearsome "+$.aX+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.k)
q.i(0,$.bd,$.L)
q.i(0,$.dJ,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e0,$.L)
q.i(0,$.cL,$.L)
n=$.n
m="The "+n+" learns that all of the local "
l=$.u
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.k)
t.i(0,$.cL,$.L)
t.i(0,$.eg,$.k)
t.i(0,$.iu,$.k)
t.i(0,$.cc,$.m)
t.i(0,$.ek,$.m)
s=$.n
r="The "+s+" finds a crowd of "
n=$.M
r=r+n+"ing "
m=$.u
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aX+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.a1("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,t,null),$.aS)}}
X.G.prototype={
aQ:function(){for(var t=this.b,t=t.gbg(t),t=t.gV(t);t.J();)t.gP()
return"<div class = 'theme'><b>"+H.B(this.a)+"</div></b><div class = 'features'></div></theme>"},
D:function(a){return"Theme: "+H.B(this.a)}}
O.rA.prototype={
$1:function(a){H.i2(a,"$isfZ")
return},
$S:function(){return{func:1,args:[W.U]}}}
U.p7.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Lockpick",H.a([$.D,$.P,$.az,$.aZ,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.Q,$.P,$.az],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Dagger",H.a([$.D,$.P,$.aZ,$.aH,$.tq],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.c6,$.k)
t.i(0,$.dr,$.m)
t.i(0,$.bP,$.m)
t.i(0,$.cT,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt "
q=$.u
r=r+q+" Cops have confiscated them. The "
p=$.n
o=[U.b]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.z+"'s layer and slated to be returned to the "
r=$.u
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.M+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a8("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.u
p="A weeping "+r+" approaches the "
n=$.n
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.z
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aX+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.M+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a8("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
n="Now that the "+r+" has been defeated, the "
p=$.u
n=n+p+"s have recovered their precious "
q=$.ap
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.n
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.M
l=n+l+"worth, the disaffected Heir to the "+$.aX+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a8("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
N.p8.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Grandfather Clock",H.a([$.Y,$.ar,$.bb,$.H],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.tx,$.H,$.a7],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aK,$.be,$.H,$.b9,$.b4,$.aM],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.H,$.a7,$.ar],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.D,$.H,$.a7,$.a_,$.ay],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.D,$.H,$.a7],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.vx,$.ax)
q.i(0,$.cc,$.m)
q.i(0,$.cT,$.m)
q.i(0,$.ej,$.k)
p=$.z
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.n
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.b]
q.i(0,new R.a8("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.ev(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.u+"s, they set out to fix the "
m=$.ap
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.z
q.i(0,new R.R("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.W("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.G(s,q,null),$.at)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.h8,$.k)
s.i(0,$.e1,$.L)
s.i(0,$.cc,$.k)
p=$.n
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.u+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.z
s.i(0,new R.R("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.W(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(q,s,null),$.at)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.c5,$.k)
t.i(0,$.dd,$.k)
r=$.z
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ap
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.n
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.u+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.R("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.W(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hI(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.z
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ap
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.n
t.i(0,new R.R("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.u+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.W("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.ev(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.z+", "
k=$.n
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.u
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aX
t.i(0,new R.a8("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.ev(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.n
t.i(0,new R.R("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.M+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.W("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.z+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(s,t,null),$.at)}}
G.V.prototype={
D:function(a){var t=this.b
if(t.length!==0)return C.b.gad(t)
return"NULL TRAIT"},
ge7:function(){return this.a},
gdS:function(){return this.b},
gbx:function(){return this.c}}
G.aY.prototype={}
G.as.prototype={}
G.bI.prototype={}
G.e.prototype={
ghy:function(){return this.e.length},
gbx:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.cj)(t),++q)r+=t[q].c
return r},
ay:function(a,b){return C.a.by(b.ghy()-this.e.length)},
eg:function(a){return C.b.h2(this.e,a.gfQ(a))},
$isbG:1,
$asbG:function(){return[G.e]},
gK:function(a){return this.d},
geC:function(){return this.e}}
G.mz.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.V]}}}
Q.pw.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Cardboard Box",H.a([$.N,$.H,$.az],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.D,$.H,$.az],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bn,$.H,$.az,$.mt],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.b9,$.H,$.az,$.b4,$.bS],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aN,$.H,$.az,$.ar],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.H,$.a_,$.ms,$.az,$.b3],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.k)
q.i(0,$.lJ,$.k)
q.i(0,$.hb,$.k)
q.i(0,$.h9,$.k)
p=$.z
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.n
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.u
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.b]
q.i(0,new R.a8("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.z
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.R("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.W(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i=this.f
i.i(0,new X.G(s,q,null),$.at)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.d2,$.m)
s.i(0,$.lJ,$.m)
s.i(0,$.hb,$.m)
s.i(0,$.c6,$.k)
p=$.n
o="Even with the victory of the "+p+" over the villainous "
n=$.z
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.u+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ap
s.i(0,new R.a8("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fm(),!1,!1,new Y.c1("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
s.i(0,new R.R("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.M+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.W("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.z+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.u+"s.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.G(q,s,null),$.at)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.d2,$.k)
t.i(0,$.lJ,$.k)
t.i(0,$.hb,$.k)
r=$.n
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.z+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.R("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.W(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.G(s,t,null),$.at)}}
E.px.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Yardstick",H.a([$.de,$.P,$.jl,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aI,$.P,$.hm,$.N],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.Q,$.P,$.e3,$.mu,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.tG,$.P,$.mn],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.cC,$.k)
t.i(0,$.d3,$.k)
t.i(0,$.dq,$.k)
t.i(0,$.dd,$.k)
t.i(0,$.ef,$.k)
t.i(0,$.dG,$.k)
t.i(0,$.hb,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.un(),!1,!1,new Y.dM("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cg+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.M
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wC(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dM("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m="A wizened "+$.u+" tells the "
r=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wD(),!1,!1,new Y.c1("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a8("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bA("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.at)}}
M.pB.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Cauldron",H.a([$.w3,$.P,$.a3],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jj,$.de,$.P,$.Y,$.a3],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.mw,$.P,$.a3,$.az,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,[N.a4,P.T])
t.i(0,$.c0,$.m)
t.i(0,$.hd,$.m)
t.i(0,$.d1,$.m)
t.i(0,$.cT,$.m)
t.i(0,$.cv,$.m)
t.i(0,$.t8,$.m)
r=$.z
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.u
q=q+p+" consorts. It's up to the "
o=$.n
n=[U.b]
t.i(0,new R.bA("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
o="Even with the defeat of the "+$.z+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.u
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aX
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.n
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a8("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.A)
q="A Mysterious "+$.u+" approaches the "
p=$.n
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aX
q=q+r+" was discovered amongst the "+$.z+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a8("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.u
p="A young "+r+" approaches the "
m=$.n
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aX
t.i(0,new R.a8("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ap+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.M+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.pC.prototype={
R:function(a5,a6){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$R=P.bu(function(a7,a8){if(a7===1)return P.br(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.eP(a6,$.$get$x4())
if(0>=p.length){r=H.x(p,0)
t=1
break}if(J.ya(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.x(p,0)
t=1
break}throw H.l("Invalid WordList file header: '"+H.B(p[0])+"'")}o=P.C
n=H.a([],[o])
m=P.cD(o,B.jX)
q.a=null
l=P.cD(o,o)
for(k=P.T,j=B.dw,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cH()
""+i
H.B(g)
f.toString
f=J.eP(g,$.$get$x2())
if(0>=f.length){r=H.x(f,0)
t=1
break $async$outer}g=f[0]
f=J.bg(g)
if(f.gX(g)===!0){$.$get$cH().toString
continue}if(f.af(g,$.$get$x3())){$.$get$cH().toString
continue}if(C.c.af(g,"@")){e=C.c.ag(g,1)
$.$get$cH().toString
n.push(e)}else if(C.c.af(g,"?")){f=C.c.ag(g,1)
f=$.$get$hL().aU(0,f)
f=H.dt(f,B.km(),H.aL(f,"p",0),null)
d=P.df(f,!0,H.aL(f,"p",0))
if(d.length<2)$.$get$cH().b8(C.i,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cH()
H.B(c)
H.B(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$x5()
a=f.cd(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.x(f,1)
t=1
break $async$outer}a0=J.ck(f[1])
a1=C.c.ag(g,a0)
if(a1.length===0)continue
f=J.aR(a0)
if(f.S(a0,0)){a1=C.c.eh(a1)
$.$get$cH().toString
f=P.cD(o,o)
a2=new B.jX(P.cD(o,k),f,a1,!1,null,null)
a2.d4(null,null,j)
q.a=a2
f.bP(0,l)
m.i(0,a1,q.a)}else if(f.S(a0,$.x6))if(C.c.af(a1,"?")){a1=C.c.ag(a1,1)
f=$.$get$hL().aU(0,a1)
f=H.dt(f,B.km(),H.aL(f,"p",0),null)
d=P.df(f,!0,H.aL(f,"p",0))
f=$.$get$cH()
f.toString
if(d.length<2)f.b8(C.i,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kq(d[0],$.$get$fs(),"")
if(1>=d.length){r=H.x(d,1)
t=1
break $async$outer}b=J.kq(d[1],$.$get$fs(),"")
f=$.$get$cH()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.af(a1,"@")){e=C.c.ag(a1,1)
$.$get$cH().toString
f=$.$get$hL().aU(0,a1)
f=H.dt(f,B.km(),H.aL(f,"p",0),null)
d=P.df(f,!0,H.aL(f,"p",0))
a4=d.length>1?H.wz(d[1],new U.pD(q,d)):1
q.a.c.i(0,C.c.cO(e,$.$get$fs(),""),a4)}else{$.$get$cH().toString
f=$.$get$hL().aU(0,g)
f=H.dt(f,B.km(),H.aL(f,"p",0),null)
d=P.df(f,!0,H.aL(f,"p",0))
a4=d.length>1?H.wz(d[1],new U.pE(q,d)):1
if(0>=d.length){r=H.x(d,0)
t=1
break $async$outer}f=C.c.bh(J.kq(d[0],$.$get$fs(),""))
h=new B.dw(null)
a3=P.cD(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.v9(a4)),[H.aL(f,"cS",0)]))}else if(f.S(a0,$.x6*2)){$.$get$cH().toString
f=$.$get$hL().aU(0,g)
f=H.dt(f,B.km(),H.aL(f,"p",0),null)
d=P.df(f,!0,H.aL(f,"p",0))
f=d.length
if(f!==2)$.$get$cH().b8(C.i,"Invalid variant for "+H.B(h.cT(0))+" in "+q.a.e)
else{if(0>=f){r=H.x(d,0)
t=1
break $async$outer}f=C.c.bh(J.kq(d[0],$.$get$fs(),""))
if(1>=d.length){r=H.x(d,1)
t=1
break $async$outer}a3=C.c.cO(U.G4(d[1]),$.$get$fs(),"")
h.a.i(0,f,a3)}}}}}r=new B.hQ(n,m)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$aseC:function(){return[B.hQ]},
$asc8:function(){return[B.hQ,P.C]}}
U.pD.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.x(s,1)
r="Invalid include weight '"+H.B(s[1])+"' for word '"
if(0>=s.length)return H.x(s,0)
t.b8(C.n,r+H.B(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
U.pE.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.x(s,1)
r="Invalid weight '"+H.B(s[1])+"' for word '"
if(0>=s.length)return H.x(s,0)
t.b8(C.n,r+H.B(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
F.pG.prototype={
G:function(){var t,s,r,q
t=Q.E(null,null,A.X)
s=[G.V]
r=A.i("Make a World Book",H.a([$.N,$.ar,$.aI],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.b7,$.Q,$.mx],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aI,$.N,$.a0],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aI,$.N,$.a0],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aI,$.N],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.D,$.a0,$.mx,$.ar],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aI,$.N,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aI,$.N],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a4,P.T]
q=new H.r(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.k)
q.i(0,$.cB,$.k)
q.i(0,$.bd,$.m)
q.i(0,$.b2,$.m)
q.i(0,$.ha,$.m)
p=$.n
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.u+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.a1("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.G(s,q,null),$.aS)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.r(0,null,null,null,null,null,0,r)
s.i(0,$.dI,$.m)
s.i(0,$.cz,$.m)
s.i(0,$.cw,$.m)
s.i(0,$.bd,$.m)
p=$.u
o="An Excited "+p+" rushes up to the "
n=$.n
s.i(0,new R.a1("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.M+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.aS)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.r(0,null,null,null,null,null,0,r)
t.i(0,$.cz,$.m)
t.i(0,$.dH,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.dI,$.m)
t.i(0,$.dq,$.k)
r=$.n
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.u
t.i(0,new R.a1("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aS)}}
B.pL.prototype={
aN:function(a){return"application/x-tar"},
R:function(a,b){var t=0,s=P.bq(),r,q,p
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$x7()
p=J.v0(b)
q.toString
r=q.fV(T.tj(p,0,null,0),!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[T.fH]},
$asc8:function(){return[T.fH,P.bh]}}
A.fO.prototype={}
B.dn.prototype={
ct:function(a){if(a)this.b=(this.b|C.a.ap(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.O+=H.hH(this.b)
this.b=0}},
ah:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ap(1,t)
if(typeof a!=="number")return a.aG()
this.ct((a&s)>>>0>0)}},
fI:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.at(1,t-s)
if(typeof a!=="number")return a.aG()
this.ct((a&r)>>>0>0)}},
bQ:function(a){var t,s
a=J.e9(a,1)
t=C.d.d2(Math.log(H.kh(a)),0.6931471805599453)
for(s=0;s<t;++s)this.ct(!1)
this.fI(a,t+1)},
b1:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.O
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.av(r)
q+=r
p=r}else p=0
r=H.cy(q)
o=new Uint8Array(r)
if(t){n=H.cO(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.x(o,m)
o[m]=l}}t=s.O
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a5(k,m)
if(s<0||s>=r)return H.x(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.x(o,t)
o[t]=s}return o.buffer}}
B.dc.prototype={
cl:function(a){var t,s,r,q
t=C.f.aj(a/8)
s=C.a.bE(a,8)
r=this.a.getUint8(t)
q=C.a.at(1,s)
if(typeof r!=="number")return r.aG()
return(r&q)>>>0>0},
a8:function(a){var t,s,r
if(a>32)throw H.l(P.dX(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cl(this.b);++this.b
if(r)t=(t|C.a.ap(1,s))>>>0}return t},
hA:function(a){var t,s,r,q
if(a>32)throw H.l(P.dX(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cl(this.b);++this.b
if(q)s=(s|C.a.at(1,t-r))>>>0}return s},
bZ:function(){var t,s,r
for(t=0;!0;){s=this.cl(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hA(t+1)-1}}
A.dZ.prototype={
D:function(a){return"rgb("+H.B(this.b)+", "+H.B(this.c)+", "+H.B(this.d)+", "+H.B(this.a)+")"},
hK:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.at()
s=this.c
if(typeof s!=="number")return s.at()
r=this.d
if(typeof r!=="number")return r.at()
q=this.a
if(typeof q!=="number")return H.av(q)
return(t<<24|s<<16|r<<8|q)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dZ){t=this.b
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
ga6:function(a){return this.hK(!0)},
U:function(a,b){var t,s,r,q,p,o,n,m
t=J.aR(b)
if(!!t.$isdZ){t=this.b
s=b.b
if(typeof t!=="number")return t.U()
if(typeof s!=="number")return H.av(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.U()
if(typeof q!=="number")return H.av(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.U()
if(typeof o!=="number")return H.av(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.U()
if(typeof m!=="number")return H.av(m)
return A.fS(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.b4()
s=this.c
if(typeof s!=="number")return s.b4()
r=this.d
if(typeof r!=="number")return r.b4()
q=this.a
if(typeof q!=="number")return q.b4()
return A.vh(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.U()
s=this.c
if(typeof s!=="number")return s.U()
r=this.d
if(typeof r!=="number")return r.U()
return A.fS(t+b,s+b,r+b,this.a)}throw H.l("Cannot add ["+H.B(t.gab(b))+" "+H.B(b)+"] to a Colour. Only Colour, double and int are valid.")},
ar:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.b4()
s=this.c
if(typeof s!=="number")return s.b4()
r=this.d
if(typeof r!=="number")return r.b4()
q=this.a
if(typeof q!=="number")return q.b4()
return A.vh(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.l("Colour index out of range: "+H.B(b))},
i:function(a,b,c){var t,s
t=J.dz(b)
if(t.a4(b,0)||t.aB(b,3))throw H.l("Colour index out of range: "+H.B(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.a.ac(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ac(c,0,255)
else if(t.S(b,0)){this.b=C.a.ac(J.kp(J.v_(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ac(J.kp(J.v_(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.ki(c)
if(t.S(b,2)){this.d=C.a.ac(J.kp(s.ar(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ac(J.kp(s.ar(c,255)),0,255)}},
eI:function(a,b,c,d){this.b=C.d.ac(C.d.ac(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ac(C.d.ac(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ac(C.d.ac(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ac(J.xQ(d,0,255),0,255)}}
A.rj.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.C]}}}
A.n_.prototype={
$1:function(a){return this.a.ea(a)},
$S:function(){return{func:1,args:[,]}}}
A.mY.prototype={
$1:function(a){this.a.R(0,a).b0(this.b.ghx())},
$S:function(){return{func:1,args:[,]}}}
A.mZ.prototype={
$1:function(a){this.a.fP(0)},
$S:function(){return{func:1,args:[P.q]}}}
A.n0.prototype={
$1:function(a){return this.a.az(0,this.b)},
$S:function(){return{func:1,args:[W.U]}}}
F.hu.prototype={
D:function(a){return this.b}}
F.hv.prototype={
b8:function(a,b){F.EQ(a).$1("("+this.c+")["+H.B(C.b.gb7(a.b.split(".")))+"]: "+H.B(b))},
cB:function(a,b){this.b8(C.i,b)},
gK:function(a){return this.c}}
F.tV.prototype={}
O.rD.prototype={
$1:function(a){return H.B(a.ba(1))+" = "+H.B(a.ba(2))+C.c.ar("../",this.a)},
$S:function(){return{func:1,args:[P.du]}}}
O.rE.prototype={
$0:function(){var t=document
J.v5(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.h,null)
t=H.i2(t.querySelector("#voidButton"),"$isfQ")
t.toString
W.eL(t,"click",new O.rC(),!1,W.HF)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.Hr("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rC.prototype={
$1:function(a){return O.Hw()},
$S:function(){return{func:1,args:[W.U]}}}
R.he.prototype={}
R.uc.prototype={}
R.ub.prototype={}
A.nE.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.a_(0,b)?t.n(0,b):$.$get$ua()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.a_(0,b)?t.n(0,b):$.$get$ua()}throw H.l(P.dX(b,"'name' should be a String name or int id only",null))},
gV:function(a){var t=this.a
t=t.gb9(t)
return new H.jt(null,J.cI(t.a),t.b,[H.O(t,0),H.O(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.a_(0,b))this.an(0,b)
s=this.fo()
if(typeof s!=="number")return s.as()
if(s>=256)throw H.l(P.dX(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
an:function(a,b){var t,s,r
t=this.a
if(!t.a_(0,b))return
s=this.c
r=s.n(0,b)
t.an(0,b)
this.b.an(0,r)
s.an(0,b)
this.d.an(0,r)},
fo:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.a_(0,s))return s;++s}}}
A.jB.prototype={
$asp:function(){return[A.dZ]},
$isp:1}
Q.jD.prototype={}
A.jH.prototype={
bw:function(a){if(a===0)return 0
return this.fp(a)},
hp:function(){return this.bw(4294967295)},
fp:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cG()
this.b=C.d.by(s*4294967295)
return C.d.aj(s*a)}else{s=t.bw(a)
this.b=s
return s}},
cW:function(a){var t=a==null
this.a=t?C.K:P.Gh(a)
if(!t)this.b=J.e9(a,1)},
hv:function(a,b){var t=a.length
if(t===0)return
t=this.bw(t)
if(t<0||t>=a.length)return H.x(a,t)
return a[t]},
hu:function(a){return this.hv(a,!0)}}
Y.dL.prototype={
cr:function(a){var t,s
if(this.b!=null)throw H.l("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bj(0,$.aD,null,t)
this.c.push(new P.dU(s,t))
return s},
ea:function(a){var t,s,r
if(this.b!=null)throw H.l("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.cj)(t),++r)t[r].az(0,this.b)
C.b.sm(t,0)}}
V.lm.prototype={
$4:function(a,b,c,d){return V.zc(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.F,P.bh,P.bh,O.cV]}}}
V.ll.prototype={
$4:function(a,b,c,d){return V.zb(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.F,P.F,O.cV]}}}
V.lk.prototype={
$4:function(a,b,c,d){return V.z8(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.F,P.bh,P.bh,O.cV]}}}
V.lj.prototype={
$4:function(a,b,c,d){return V.z7(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.F,P.F,O.cV]}}}
O.cV.prototype={
hB:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.a
s=this.b
for(r=this.x,q=r.length,p=s,o=t,n=-1,m=-1,l=null,k=0;k<t;++k)for(j=0;j<s;++j){l=j*t+k
if(l>=q)return H.x(r,l)
if(r[l]!==0){if(k<o)o=k
else if(k>n)n=k
if(j<p)p=j
else if(j>m)m=j}}i=Math.max(0,n-o+1)
h=Math.max(0,m-p+1)
this.c=o
this.d=p
this.e=i
this.f=h},
hP:function(a,b,c,d){var t,s,r,q,p
t=J.bp(d)
s=0
while(!0){r=t.ge4(d)
if(typeof r!=="number")return H.av(r)
if(!(s<r))break
q=(C.a.d2(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.x(r,q)
r[q]=p;++s}}}
D.ov.prototype={
$1:function(a){return a.ghw()},
$S:function(){return{func:1,args:[D.cF]}}}
D.cF.prototype={
D:function(a){return this.a},
gK:function(a){return this.a},
ghw:function(){return this.d}}
D.jY.prototype={}
D.o_.prototype={}
B.dw.prototype={
em:function(a,b){if(this.a.a_(0,"MAIN"))return this.a.n(0,"MAIN")
return},
cT:function(a){return this.em(a,null)},
D:function(a){return"[Word: "+H.B(this.cT(0))+"]"}}
B.jX.prototype={
D:function(a){return"WordList '"+this.e+"': "+this.eF(0)},
$isq:1,
$asq:function(){return[B.dw]},
$asdT:function(){return[B.dw]},
$ashP:function(){return[B.dw]},
$ascS:function(){return[B.dw]},
$asp:function(){return[B.dw]},
$asv:function(){return[B.dw]},
gK:function(a){return this.e}}
B.hQ.prototype={
D:function(a){return"[WordListFile: "+this.b.D(0)+" ]"}}
S.fk.prototype={}
S.uE.prototype={}
S.uF.prototype={}
S.uG.prototype={}
S.t1.prototype={}
S.t4.prototype={}
S.rT.prototype={}
S.uo.prototype={}
S.uI.prototype={}
S.uJ.prototype={}
S.kO.prototype={}
S.ue.prototype={}
S.u9.prototype={}
S.mR.prototype={}
S.rX.prototype={}
S.rO.prototype={}
S.l5.prototype={}
S.tW.prototype={}
S.l6.prototype={}
S.nG.prototype={}
S.uv.prototype={}
S.us.prototype={}
S.uw.prototype={}
S.rN.prototype={}
S.m0.prototype={}
S.kM.prototype={}
S.rS.prototype={}
S.rR.prototype={}
S.uf.prototype={}
S.ux.prototype={}
S.ug.prototype={}
S.t3.prototype={}
S.t2.prototype={}
S.uu.prototype={}
S.ut.prototype={}
S.p6.prototype={}
S.uz.prototype={}
S.rU.prototype={}
S.rV.prototype={}
S.uH.prototype={}
S.hx.prototype={}
S.u1.prototype={}
S.u2.prototype={}
S.u3.prototype={}
S.u4.prototype={}
S.up.prototype={}
S.uq.prototype={}
S.ur.prototype={}
S.u0.prototype={}
S.u6.prototype={}
S.u7.prototype={}
S.tg.prototype={}
S.th.prototype={}
S.ti.prototype={}
S.u8.prototype={}
S.u5.prototype={}
S.rP.prototype={}
S.uB.prototype={}
S.uC.prototype={}
S.uA.prototype={}
Z.tQ.prototype={}
Z.tM.prototype={}
Z.tN.prototype={}
Q.cS.prototype={
k:function(a,b){return b},
D:function(a){return J.cJ(this.gbY())},
av:function(a,b){return Q.uL(this,b,H.aL(this,"cS",0),null)},
a3:function(a,b){return Q.uK(this,!1,!0,null,H.aL(this,"cS",0))},
ao:function(a){return this.a3(a,!0)},
$isp:1,
$asp:null}
Q.dT.prototype={
gbY:function(){return this.b},
bO:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.v9(c)),[H.aL(this,"cS",0)]))},
h:function(a,b){return this.bO(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return J.v3(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.x(t,b)
t[b]=new Q.h(c,s,[H.aL(this,"cS",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
D:function(a){return P.jn(this.b,"[","]")},
av:function(a,b){return Q.uL(this,b,H.aL(this,"dT",0),null)},
a3:function(a,b){return Q.uK(this,!1,!0,null,H.aL(this,"dT",0))},
ao:function(a){return this.a3(a,!0)},
d4:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hP.prototype={$ascS:null,$asp:null,$asq:null,$asv:null,$isq:1,$isv:1,$isp:1}
Q.h.prototype={
D:function(a){return"("+H.B(this.a)+" @ "+H.B(this.b)+")"},
gY:function(a){return this.a},
gcR:function(a){return this.b}}
Q.eJ.prototype={
gbY:function(){return this.b},
gV:function(a){var t=new Q.pz(null,[H.aL(this,"eJ",0)])
t.a=J.cI(this.b)
return t},
gm:function(a){return J.ck(this.b)},
D:function(a){return J.cJ(this.b)},
av:function(a,b){return Q.uL(this,b,H.aL(this,"eJ",0),null)},
a3:function(a,b){return Q.uK(this,!1,!0,null,H.aL(this,"eJ",0))},
ao:function(a){return this.a3(a,!0)}}
Q.hO.prototype={$ascS:null,$asp:null,$isp:1}
Q.pz.prototype={
gP:function(){return J.v3(this.a.gP())},
J:function(){return this.a.J()}}
Q.jV.prototype={
$aseJ:function(a,b){return[b]},
$ashO:function(a,b){return[b]},
$ascS:function(a,b){return[b]},
$asp:function(a,b){return[b]}}
Q.pA.prototype={
$1:function(a){var t=J.bp(a)
return new Q.h(this.c.$1(t.gY(a)),t.gcR(a),[this.b])},
$S:function(){return H.eO(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jV")}}
J.j.prototype.eD=J.j.prototype.D
J.hp.prototype.eE=J.hp.prototype.D
P.di.prototype.eG=P.di.prototype.bG
P.di.prototype.eH=P.di.prototype.bF
P.b6.prototype.d1=P.b6.prototype.a9
Q.dT.prototype.eF=Q.dT.prototype.D;(function installTearOffs(){installTearOff(H.fx.prototype,"ghk",0,0,0,null,["$0"],["bW"],1)
installTearOff(H.dy.prototype,"gep",0,0,0,null,["$1"],["aw"],7)
installTearOff(H.eK.prototype,"gfY",0,0,0,null,["$1"],["aV"],7)
installTearOff(H,"xm",1,0,0,null,["$1"],["GJ"],8)
installTearOff(P,"GM",1,0,0,null,["$1"],["G8"],6)
installTearOff(P,"GN",1,0,0,null,["$1"],["G9"],6)
installTearOff(P,"GO",1,0,0,null,["$1"],["Ga"],6)
installTearOff(P,"xy",1,0,0,null,["$0"],["GI"],1)
installTearOff(P.k1.prototype,"gdQ",0,0,0,null,["$2","$1"],["cw","bm"],11)
installTearOff(P.bj.prototype,"gbb",0,0,0,null,["$2","$1"],["al","f0"],11)
var t
installTearOff(t=P.di.prototype,"gdw",0,0,0,null,["$0"],["bJ"],1)
installTearOff(t,"gdz",0,0,0,null,["$0"],["bK"],1)
installTearOff(t=P.hU.prototype,"gdw",0,0,0,null,["$0"],["bJ"],1)
installTearOff(t,"gdz",0,0,0,null,["$0"],["bK"],1)
installTearOff(t,"gfc",0,0,0,null,["$1"],["fd"],function(){return H.eO(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hU")})
installTearOff(t,"gfg",0,0,0,null,["$2"],["fh"],32)
installTearOff(t,"gfe",0,0,0,null,["$0"],["ff"],1)
installTearOff(P.k7.prototype,"gfQ",0,1,0,null,["$1"],["ai"],33)
installTearOff(P,"GX",1,0,0,null,["$2"],["yR"],28)
installTearOff(P,"GY",1,0,0,null,["$1"],["fE"],4)
installTearOff(t=W.i9.prototype,"gaq",0,1,0,null,["$1"],["cB"],4)
installTearOff(t,"ghf",0,0,0,null,["$1"],["e2"],4)
installTearOff(t,"ghM",0,0,0,null,["$1"],["hN"],4)
installTearOff(W.eY.prototype,"gY",0,1,0,null,["$1"],["L"],5)
installTearOff(W.ic.prototype,"gY",0,1,0,null,["$1"],["L"],13)
installTearOff(W.ii.prototype,"gY",0,1,0,null,["$1"],["L"],5)
installTearOff(W.ij.prototype,"gY",0,1,0,null,["$1"],["L"],8)
installTearOff(W.ik.prototype,"gY",0,1,0,null,["$1"],["L"],5)
installTearOff(W.f5.prototype,"gY",0,1,0,null,["$1"],["L"],14)
installTearOff(W.iA.prototype,"gY",0,1,0,null,["$1"],["L"],9)
installTearOff(W.f7.prototype,"gY",0,1,0,null,["$1"],["L"],10)
installTearOff(W.iC.prototype,"gY",0,1,0,null,["$1"],["L"],10)
installTearOff(W.ju.prototype,"gY",0,1,0,null,["$1"],["L"],5)
installTearOff(W.jv.prototype,"gY",0,1,0,null,["$1"],["L"],12)
installTearOff(W.cf.prototype,"gY",0,1,0,null,["$1"],["L"],12)
installTearOff(W.jF.prototype,"gY",0,1,0,null,["$1"],["L"],15)
installTearOff(W.jL.prototype,"gY",0,1,0,null,["$1"],["L"],9)
installTearOff(W.jN.prototype,"gY",0,1,0,null,["$1"],["L"],16)
installTearOff(W.jO.prototype,"gY",0,1,0,null,["$1"],["L"],17)
installTearOff(W.ch.prototype,"gY",0,1,0,null,["$1"],["L"],18)
installTearOff(W.jS.prototype,"gY",0,1,0,null,["$1"],["L"],34)
installTearOff(W.jT.prototype,"gY",0,1,0,null,["$1"],["L"],19)
installTearOff(W.jU.prototype,"gY",0,1,0,null,["$1"],["L"],20)
installTearOff(W.hR.prototype,"gY",0,1,0,null,["$1"],["L"],21)
installTearOff(W.k2.prototype,"gY",0,1,0,null,["$1"],["L"],22)
installTearOff(W.k6.prototype,"gY",0,1,0,null,["$1"],["L"],29)
installTearOff(W.hX.prototype,"gY",0,1,0,null,["$1"],["L"],24)
installTearOff(W.ka.prototype,"gY",0,1,0,null,["$1"],["L"],25)
installTearOff(W.kc.prototype,"gY",0,1,0,null,["$1"],["L"],26)
installTearOff(P.jP.prototype,"gY",0,1,0,null,["$1"],["L"],27)
installTearOff(R,"ew",1,0,0,null,["$1"],["Fq"],0)
installTearOff(R,"wC",1,0,0,null,["$1"],["Fe"],0)
installTearOff(R,"un",1,0,0,null,["$1"],["Fp"],0)
installTearOff(R,"bT",1,0,0,null,["$1"],["Fo"],0)
installTearOff(R,"um",1,0,0,null,["$1"],["Fn"],0)
installTearOff(R,"wE",1,0,0,null,["$1"],["Fl"],0)
installTearOff(R,"hI",1,0,0,null,["$1"],["Fk"],0)
installTearOff(R,"ev",1,0,0,null,["$1"],["Fh"],0)
installTearOff(R,"e5",1,0,0,null,["$1"],["Fj"],0)
installTearOff(R,"fm",1,0,0,null,["$1"],["Fm"],0)
installTearOff(R,"ul",1,0,0,null,["$1"],["Fi"],0)
installTearOff(R,"y",1,0,0,null,["$1"],["Ff"],0)
installTearOff(R,"wD",1,0,0,null,["$1"],["Fg"],0)
installTearOff(O,"wL",1,0,0,null,["$0"],["rz"],30)
installTearOff(F.hv.prototype,"gaq",0,1,0,null,["$1"],["cB"],4)
installTearOff(O,"Hj",1,0,0,null,["$1"],["Hl"],31)
installTearOff(Y.dL.prototype,"ghx",0,0,0,null,["$1"],["ea"],function(){return H.eO(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dL")})
installTearOff(V,"Hp",1,0,0,null,["$4"],["za"],3)
installTearOff(V,"Ho",1,0,0,null,["$4"],["z9"],2)
installTearOff(B,"km",1,0,0,null,["$1"],["GD"],23)
installTearOff(T,"GS",1,0,0,null,["$4"],["z0"],3)
installTearOff(T,"GR",1,0,0,null,["$4"],["z_"],2)
installTearOff(T,"GQ",1,0,0,null,["$4"],["yZ"],3)
installTearOff(T,"GP",1,0,0,null,["$4"],["yY"],2)
installTearOff(F,"H8",1,0,0,null,["$4"],["z6"],3)
installTearOff(F,"H7",1,0,0,null,["$4"],["z5"],2)
installTearOff(F,"H6",1,0,0,null,["$4"],["z4"],3)
installTearOff(F,"H5",1,0,0,null,["$4"],["z3"],2)
installTearOff(F,"H4",1,0,0,null,["$4"],["z2"],3)
installTearOff(F,"H3",1,0,0,null,["$4"],["z1"],2)})();(function inheritance(){inherit(P.ao,null)
var t=P.ao
inherit(H.tS,t)
inherit(J.j,t)
inherit(J.i4,t)
inherit(P.hG,t)
inherit(P.p,t)
inherit(H.er,t)
inherit(P.jp,t)
inherit(H.iy,t)
inherit(H.pj,t)
inherit(H.eW,t)
inherit(H.qz,t)
inherit(H.fx,t)
inherit(H.q5,t)
inherit(H.eM,t)
inherit(H.qy,t)
inherit(H.pT,t)
inherit(H.fn,t)
inherit(H.pa,t)
inherit(H.dD,t)
inherit(H.dy,t)
inherit(H.eK,t)
inherit(H.kV,t)
inherit(H.nZ,t)
inherit(H.pg,t)
inherit(P.ee,t)
inherit(H.h5,t)
inherit(H.kb,t)
inherit(H.dS,t)
inherit(H.r,t)
inherit(H.mS,t)
inherit(H.mU,t)
inherit(H.ho,t)
inherit(H.k9,t)
inherit(H.k_,t)
inherit(H.jR,t)
inherit(H.qS,t)
inherit(P.cl,t)
inherit(P.eX,t)
inherit(P.k1,t)
inherit(P.k5,t)
inherit(P.bj,t)
inherit(P.k0,t)
inherit(P.dh,t)
inherit(P.ox,t)
inherit(P.di,t)
inherit(P.k3,t)
inherit(P.q0,t)
inherit(P.qC,t)
inherit(P.qQ,t)
inherit(P.eS,t)
inherit(P.r4,t)
inherit(P.qp,t)
inherit(P.qr,t)
inherit(P.og,t)
inherit(P.qw,t)
inherit(P.dx,t)
inherit(P.fe,t)
inherit(P.b6,t)
inherit(P.qX,t)
inherit(P.n8,t)
inherit(P.qx,t)
inherit(P.fR,t)
inherit(P.fT,t)
inherit(P.qZ,t)
inherit(P.d9,t)
inherit(P.bG,t)
inherit(P.e_,t)
inherit(P.dl,t)
inherit(P.dF,t)
inherit(P.nA,t)
inherit(P.jQ,t)
inherit(P.qa,t)
inherit(P.bK,t)
inherit(P.lo,t)
inherit(P.q,t)
inherit(P.bo,t)
inherit(P.cP,t)
inherit(P.du,t)
inherit(P.dN,t)
inherit(P.C,t)
inherit(P.ca,t)
inherit(P.eG,t)
inherit(P.ke,t)
inherit(P.pk,t)
inherit(P.qO,t)
inherit(W.i9,t)
inherit(W.jA,t)
inherit(W.ib,t)
inherit(P.kY,t)
inherit(W.bx,t)
inherit(W.lT,t)
inherit(W.qW,t)
inherit(P.qT,t)
inherit(P.pM,t)
inherit(P.qv,t)
inherit(P.qE,t)
inherit(P.qF,t)
inherit(P.bh,t)
inherit(P.d8,t)
inherit(T.fI,t)
inherit(T.db,t)
inherit(T.hi,t)
inherit(T.nC,t)
inherit(T.pI,t)
inherit(T.pJ,t)
inherit(T.pK,t)
inherit(T.pH,t)
inherit(T.mb,t)
inherit(T.iD,t)
inherit(B.fa,t)
inherit(N.a4,t)
inherit(L.eR,t)
inherit(A.jB,t)
inherit(O.c8,t)
inherit(T.fo,t)
inherit(M.fP,t)
inherit(X.io,t)
inherit(X.i7,t)
inherit(M.h6,t)
inherit(Z.im,t)
inherit(E.ny,t)
inherit(E.I,t)
inherit(A.X,t)
inherit(U.b,t)
inherit(Y.dM,t)
inherit(K.cE,t)
inherit(X.G,t)
inherit(G.V,t)
inherit(A.fO,t)
inherit(B.dn,t)
inherit(B.dc,t)
inherit(A.dZ,t)
inherit(F.hu,t)
inherit(F.hv,t)
inherit(Q.jD,t)
inherit(A.jH,t)
inherit(Y.dL,t)
inherit(O.cV,t)
inherit(D.cF,t)
inherit(B.dw,t)
inherit(Q.cS,t)
inherit(B.hQ,t)
inherit(Q.h,t)
t=J.j
inherit(J.mD,t)
inherit(J.mE,t)
inherit(J.hp,t)
inherit(J.en,t)
inherit(J.ff,t)
inherit(J.eo,t)
inherit(H.fh,t)
inherit(H.et,t)
inherit(W.aV,t)
inherit(W.cK,t)
inherit(W.eV,t)
inherit(W.fU,t)
inherit(W.bJ,t)
inherit(W.iE,t)
inherit(W.l8,t)
inherit(W.eZ,t)
inherit(W.ic,t)
inherit(W.ig,t)
inherit(W.lb,t)
inherit(W.ih,t)
inherit(W.iF,t)
inherit(W.ij,t)
inherit(W.ik,t)
inherit(W.fY,t)
inherit(W.U,t)
inherit(W.iG,t)
inherit(W.lQ,t)
inherit(W.lU,t)
inherit(W.cm,t)
inherit(W.m6,t)
inherit(W.iH,t)
inherit(W.hh,t)
inherit(W.e6,t)
inherit(W.n2,t)
inherit(W.ju,t)
inherit(W.co,t)
inherit(W.iR,t)
inherit(W.ns,t)
inherit(W.nt,t)
inherit(W.iS,t)
inherit(W.nH,t)
inherit(W.e4,t)
inherit(W.e7,t)
inherit(W.cf,t)
inherit(W.iT,t)
inherit(W.oe,t)
inherit(W.cq,t)
inherit(W.iU,t)
inherit(W.fq,t)
inherit(W.ch,t)
inherit(W.or,t)
inherit(W.ow,t)
inherit(W.ci,t)
inherit(W.iV,t)
inherit(W.p9,t)
inherit(W.cr,t)
inherit(W.iW,t)
inherit(W.ft,t)
inherit(W.jT,t)
inherit(W.pp,t)
inherit(W.fu,t)
inherit(W.jU,t)
inherit(W.pW,t)
inherit(W.iX,t)
inherit(W.iY,t)
inherit(W.iI,t)
inherit(W.iJ,t)
inherit(W.iK,t)
inherit(W.iL,t)
inherit(W.r2,t)
inherit(W.r3,t)
inherit(P.mh,t)
inherit(P.nx,t)
inherit(P.d4,t)
inherit(P.iM,t)
inherit(P.d5,t)
inherit(P.iN,t)
inherit(P.nP,t)
inherit(P.iO,t)
inherit(P.d7,t)
inherit(P.iP,t)
inherit(P.pv,t)
inherit(P.fK,t)
inherit(P.kt,t)
inherit(P.o0,t)
inherit(P.r1,t)
inherit(P.iQ,t)
t=J.hp
inherit(J.nN,t)
inherit(J.eF,t)
inherit(J.ep,t)
inherit(F.tV,t)
inherit(R.he,t)
inherit(R.uc,t)
inherit(R.ub,t)
inherit(S.fk,t)
inherit(S.uE,t)
inherit(S.uF,t)
inherit(S.uG,t)
inherit(S.t1,t)
inherit(S.t4,t)
inherit(S.rT,t)
inherit(S.uI,t)
inherit(S.uJ,t)
inherit(S.l5,t)
inherit(S.uv,t)
inherit(S.uw,t)
inherit(S.rN,t)
inherit(S.m0,t)
inherit(S.kM,t)
inherit(S.rS,t)
inherit(S.rR,t)
inherit(S.t3,t)
inherit(S.p6,t)
inherit(S.rV,t)
inherit(S.hx,t)
inherit(S.u2,t)
inherit(S.u4,t)
inherit(S.uq,t)
inherit(S.ur,t)
inherit(S.u6,t)
inherit(S.u7,t)
inherit(S.th,t)
inherit(S.ti,t)
inherit(S.u8,t)
inherit(S.u5,t)
inherit(S.rP,t)
inherit(S.uB,t)
inherit(S.uC,t)
inherit(S.uA,t)
inherit(Z.tQ,t)
inherit(Z.tM,t)
inherit(Z.tN,t)
inherit(J.tR,J.en)
t=J.ff
inherit(J.jr,t)
inherit(J.jq,t)
inherit(P.js,P.hG)
t=P.js
inherit(H.hM,t)
inherit(W.k4,t)
inherit(H.kS,H.hM)
t=P.p
inherit(H.v,t)
inherit(H.hw,t)
inherit(H.e8,t)
inherit(P.hn,t)
inherit(H.qR,t)
t=H.v
inherit(H.eq,t)
inherit(H.mT,t)
inherit(P.qq,t)
inherit(P.ez,t)
t=H.eq
inherit(H.oT,t)
inherit(H.fg,t)
inherit(P.mW,t)
inherit(H.fX,H.hw)
t=P.jp
inherit(H.jt,t)
inherit(H.eH,t)
inherit(Q.pz,t)
t=H.eW
inherit(H.rG,t)
inherit(H.rH,t)
inherit(H.qu,t)
inherit(H.q6,t)
inherit(H.ml,t)
inherit(H.mm,t)
inherit(H.qB,t)
inherit(H.pb,t)
inherit(H.pc,t)
inherit(H.rI,t)
inherit(H.rt,t)
inherit(H.ru,t)
inherit(H.rv,t)
inherit(H.rw,t)
inherit(H.rx,t)
inherit(H.oY,t)
inherit(H.mH,t)
inherit(H.mG,t)
inherit(H.rp,t)
inherit(H.rq,t)
inherit(H.rr,t)
inherit(P.pQ,t)
inherit(P.pP,t)
inherit(P.pR,t)
inherit(P.pS,t)
inherit(P.r5,t)
inherit(P.r6,t)
inherit(P.rg,t)
inherit(P.rh,t)
inherit(P.lZ,t)
inherit(P.lY,t)
inherit(P.qb,t)
inherit(P.qj,t)
inherit(P.qf,t)
inherit(P.qg,t)
inherit(P.qh,t)
inherit(P.qd,t)
inherit(P.qi,t)
inherit(P.qc,t)
inherit(P.qm,t)
inherit(P.qn,t)
inherit(P.ql,t)
inherit(P.qk,t)
inherit(P.oA,t)
inherit(P.oy,t)
inherit(P.oz,t)
inherit(P.oB,t)
inherit(P.oG,t)
inherit(P.oE,t)
inherit(P.oF,t)
inherit(P.oH,t)
inherit(P.oK,t)
inherit(P.oL,t)
inherit(P.oI,t)
inherit(P.oJ,t)
inherit(P.oM,t)
inherit(P.oN,t)
inherit(P.oC,t)
inherit(P.oD,t)
inherit(P.pV,t)
inherit(P.pU,t)
inherit(P.qD,t)
inherit(P.r8,t)
inherit(P.r7,t)
inherit(P.r9,t)
inherit(P.rf,t)
inherit(P.qH,t)
inherit(P.qI,t)
inherit(P.qJ,t)
inherit(P.qs,t)
inherit(P.n9,t)
inherit(P.r0,t)
inherit(P.r_,t)
inherit(P.lf,t)
inherit(P.lg,t)
inherit(P.po,t)
inherit(P.pl,t)
inherit(P.pm,t)
inherit(P.pn,t)
inherit(P.ri,t)
inherit(P.rc,t)
inherit(P.rb,t)
inherit(P.rd,t)
inherit(P.re,t)
inherit(W.pY,t)
inherit(W.m9,t)
inherit(W.ma,t)
inherit(W.q9,t)
inherit(P.qV,t)
inherit(P.pN,t)
inherit(P.rk,t)
inherit(P.rl,t)
inherit(P.kZ,t)
inherit(P.ra,t)
inherit(P.ky,t)
inherit(P.kz,t)
inherit(L.kv,t)
inherit(O.kH,t)
inherit(B.mk,t)
inherit(A.mC,t)
inherit(A.mB,t)
inherit(T.o5,t)
inherit(O.rA,t)
inherit(G.mz,t)
inherit(U.pD,t)
inherit(U.pE,t)
inherit(A.rj,t)
inherit(A.n_,t)
inherit(A.mY,t)
inherit(A.mZ,t)
inherit(A.n0,t)
inherit(O.rD,t)
inherit(O.rE,t)
inherit(O.rC,t)
inherit(V.lm,t)
inherit(V.ll,t)
inherit(V.lk,t)
inherit(V.lj,t)
inherit(D.ov,t)
inherit(Q.pA,t)
t=H.pT
inherit(H.fy,t)
inherit(H.hZ,t)
inherit(H.kW,H.kV)
t=P.ee
inherit(H.jz,t)
inherit(H.mI,t)
inherit(H.pi,t)
inherit(H.kP,t)
inherit(H.o4,t)
inherit(P.fj,t)
inherit(P.d_,t)
inherit(P.Z,t)
inherit(P.eE,t)
inherit(P.dO,t)
inherit(P.bN,t)
inherit(P.l7,t)
t=H.oY
inherit(H.ot,t)
inherit(H.fM,t)
t=P.hn
inherit(H.pO,t)
inherit(T.fH,t)
t=H.et
inherit(H.nk,t)
inherit(H.jw,t)
t=H.jw
inherit(H.hC,t)
inherit(H.hD,t)
inherit(H.hE,H.hC)
inherit(H.hA,H.hE)
inherit(H.hF,H.hD)
inherit(H.hB,H.hF)
t=H.hA
inherit(H.nl,t)
inherit(H.nm,t)
t=H.hB
inherit(H.nn,t)
inherit(H.no,t)
inherit(H.np,t)
inherit(H.nq,t)
inherit(H.nr,t)
inherit(H.jx,t)
inherit(H.fi,t)
t=P.k1
inherit(P.dU,t)
inherit(P.kd,t)
t=P.k3
inherit(P.q_,t)
inherit(P.q1,t)
inherit(P.qP,P.qC)
t=P.dh
inherit(P.hT,t)
inherit(W.q7,t)
inherit(P.hU,P.di)
inherit(P.qA,P.hT)
inherit(P.qG,P.r4)
inherit(P.k8,H.r)
inherit(P.of,P.og)
inherit(P.qt,P.of)
inherit(P.k7,P.qt)
inherit(P.hN,P.n8)
t=P.fR
inherit(P.kD,t)
inherit(P.li,t)
t=P.fT
inherit(P.kE,t)
inherit(P.ps,t)
inherit(P.pr,P.li)
t=P.dl
inherit(P.T,t)
inherit(P.F,t)
t=P.d_
inherit(P.ey,t)
inherit(P.mi,t)
inherit(P.pZ,P.ke)
t=W.aV
inherit(W.aQ,t)
inherit(W.h_,t)
inherit(W.kU,t)
inherit(W.lP,t)
inherit(W.lR,t)
inherit(W.lV,t)
inherit(W.hg,t)
inherit(W.hz,t)
inherit(W.nS,t)
inherit(W.jJ,t)
inherit(W.oh,t)
inherit(W.eI,t)
inherit(W.cp,t)
inherit(W.h0,t)
inherit(W.cR,t)
inherit(W.cG,t)
inherit(W.h1,t)
inherit(W.pt,t)
inherit(W.py,t)
inherit(W.jW,t)
inherit(W.pF,t)
inherit(W.qN,t)
inherit(P.l9,t)
inherit(P.hJ,t)
inherit(P.pe,t)
inherit(P.bC,t)
inherit(P.fL,t)
t=W.aQ
inherit(W.dp,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.ie,t)
inherit(W.fv,t)
inherit(W.q2,t)
t=W.dp
inherit(W.aC,t)
inherit(P.cb,t)
t=W.aC
inherit(W.eQ,t)
inherit(W.ku,t)
inherit(W.hy,t)
inherit(W.kF,t)
inherit(W.kJ,t)
inherit(W.fQ,t)
inherit(W.lh,t)
inherit(W.lO,t)
inherit(W.iA,t)
inherit(W.me,t)
inherit(W.f9,t)
inherit(W.mj,t)
inherit(W.mL,t)
inherit(W.hr,t)
inherit(W.n7,t)
inherit(W.nd,t)
inherit(W.nw,t)
inherit(W.nB,t)
inherit(W.nF,t)
inherit(W.fp,t)
inherit(W.jL,t)
inherit(W.oj,t)
inherit(W.hK,t)
inherit(W.p_,t)
inherit(W.p1,t)
inherit(W.qo,t)
inherit(W.eU,W.hy)
inherit(W.h2,W.h_)
inherit(W.kB,W.h2)
t=W.bJ
inherit(W.l_,t)
inherit(W.l0,t)
inherit(W.fV,t)
inherit(W.fW,t)
inherit(W.l1,t)
inherit(W.l2,t)
inherit(W.l3,t)
inherit(W.eY,W.iE)
inherit(W.pX,W.jA)
inherit(W.iZ,W.iF)
inherit(W.ii,W.iZ)
t=W.U
inherit(W.fZ,t)
inherit(W.op,t)
inherit(W.oq,t)
inherit(W.cd,W.eV)
inherit(W.j_,W.iG)
inherit(W.f5,W.j_)
inherit(W.j0,W.iH)
inherit(W.f7,W.j0)
inherit(W.iC,W.f7)
inherit(W.e2,W.hg)
inherit(W.hq,W.e6)
inherit(W.ne,W.hz)
inherit(W.ja,W.iR)
inherit(W.jv,W.ja)
inherit(W.jb,W.iS)
inherit(W.jy,W.jb)
inherit(W.nM,W.e7)
inherit(W.jc,W.iT)
inherit(W.jF,W.jc)
inherit(W.oi,W.eI)
inherit(W.h3,W.h0)
inherit(W.jN,W.h3)
inherit(W.jd,W.iU)
inherit(W.jO,W.jd)
inherit(W.je,W.iV)
inherit(W.p4,W.je)
inherit(W.h4,W.h1)
inherit(W.p5,W.h4)
inherit(W.jf,W.iW)
inherit(W.jS,W.jf)
inherit(W.jg,W.iX)
inherit(W.hR,W.jg)
inherit(W.jh,W.iY)
inherit(W.k2,W.jh)
inherit(W.q3,W.ih)
inherit(W.j1,W.iI)
inherit(W.k6,W.j1)
inherit(W.j2,W.iJ)
inherit(W.hX,W.j2)
inherit(W.j3,W.iK)
inherit(W.ka,W.j3)
inherit(W.j4,W.iL)
inherit(W.kc,W.j4)
t=P.kY
inherit(W.q4,t)
inherit(P.kx,t)
inherit(W.hS,W.q7)
inherit(W.q8,P.ox)
inherit(P.qU,P.qT)
inherit(P.jZ,P.pM)
inherit(P.bU,P.qF)
t=P.cb
inherit(P.cn,t)
inherit(P.eb,t)
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
inherit(P.lz,t)
inherit(P.lA,t)
inherit(P.lB,t)
inherit(P.lC,t)
inherit(P.lD,t)
inherit(P.lE,t)
inherit(P.lS,t)
inherit(P.na,t)
inherit(P.nb,t)
inherit(P.nK,t)
inherit(P.ob,t)
inherit(P.oW,t)
inherit(P.pu,t)
inherit(P.hV,t)
inherit(P.qK,t)
inherit(P.qL,t)
inherit(P.qM,t)
t=P.cn
inherit(P.kr,t)
inherit(P.mf,t)
inherit(P.oU,t)
inherit(P.eD,t)
inherit(P.pq,t)
inherit(P.j5,P.iM)
inherit(P.mO,P.j5)
inherit(P.j6,P.iN)
inherit(P.nu,P.j6)
inherit(P.j7,P.iO)
inherit(P.oR,P.j7)
inherit(P.p3,P.eD)
inherit(P.j8,P.iP)
inherit(P.pf,P.j8)
t=P.bC
inherit(P.dY,t)
inherit(P.kX,t)
inherit(P.eT,P.dY)
inherit(P.j9,P.iQ)
inherit(P.jP,P.j9)
t=B.fa
inherit(S.ks,t)
inherit(M.kw,t)
inherit(A.kT,t)
inherit(M.l4,t)
inherit(V.lc,t)
inherit(U.lF,t)
inherit(N.mK,t)
inherit(F.ni,t)
inherit(G.nQ,t)
inherit(Q.o2,t)
inherit(N.ol,t)
inherit(D.oZ,t)
inherit(V.p0,t)
inherit(F.pG,t)
t=N.a4
inherit(T.la,t)
inherit(R.nV,t)
t=T.la
inherit(K.bV,t)
inherit(S.bH,t)
inherit(T.c3,t)
inherit(M.bB,t)
inherit(A.nE,A.jB)
inherit(L.a9,A.nE)
t=O.c8
inherit(O.dm,t)
inherit(O.il,t)
inherit(O.eC,t)
t=O.dm
inherit(U.kA,t)
inherit(Y.nX,t)
inherit(V.lW,t)
inherit(Q.mg,t)
inherit(Q.nL,t)
inherit(M.os,t)
inherit(B.pL,t)
t=U.kA
inherit(U.n4,t)
inherit(U.nz,t)
inherit(U.oO,O.il)
t=U.oO
inherit(U.oP,t)
inherit(U.oQ,t)
t=T.fo
inherit(O.kC,t)
inherit(Y.m1,t)
inherit(Y.m2,t)
inherit(B.m4,t)
inherit(X.mc,t)
inherit(Q.md,t)
inherit(S.mM,t)
inherit(Z.n3,t)
inherit(S.n5,t)
inherit(U.n6,t)
inherit(E.nh,t)
inherit(V.nD,t)
inherit(N.nU,t)
inherit(N.o1,t)
inherit(E.o6,t)
inherit(Y.o7,t)
inherit(Y.o9,t)
inherit(L.oa,t)
inherit(S.od,t)
inherit(Y.ok,t)
inherit(R.oV,t)
inherit(U.p7,t)
inherit(E.px,t)
inherit(M.pB,t)
t=O.eC
inherit(Y.p2,t)
inherit(Y.kN,t)
inherit(Y.nv,t)
inherit(U.pC,t)
t=L.eR
inherit(L.kG,t)
inherit(T.kI,t)
inherit(T.kL,t)
inherit(S.kQ,t)
inherit(U.ld,t)
inherit(Z.le,t)
inherit(T.m3,t)
inherit(V.m5,t)
inherit(X.m7,t)
inherit(Z.mJ,t)
inherit(Q.mN,t)
inherit(K.mP,t)
inherit(G.mQ,t)
inherit(D.nc,t)
inherit(V.nf,t)
inherit(E.nW,t)
inherit(V.o3,t)
inherit(K.o8,t)
inherit(N.on,t)
inherit(A.ng,t)
inherit(A.oo,t)
inherit(A.nR,t)
inherit(A.om,t)
inherit(A.pd,t)
inherit(A.nY,t)
inherit(A.m_,t)
inherit(L.oX,t)
inherit(N.p8,t)
inherit(Q.pw,t)
t=S.bH
inherit(S.i8,t)
inherit(S.m8,t)
inherit(E.iB,E.ny)
t=E.I
inherit(E.fJ,t)
inherit(E.i6,t)
inherit(Q.nO,Q.mg)
inherit(U.W,U.b)
t=R.nV
inherit(R.a1,t)
inherit(R.R,t)
inherit(R.a8,t)
inherit(R.bA,R.a8)
t=Y.dM
inherit(Y.aq,t)
inherit(Y.c1,t)
inherit(Y.S,t)
inherit(Y.ia,t)
inherit(Y.bD,t)
inherit(Y.cX,t)
inherit(Y.kR,t)
inherit(Y.jC,t)
inherit(Y.iz,t)
inherit(Y.jE,t)
t=Y.c1
inherit(Y.d0,t)
inherit(Y.bw,t)
inherit(U.au,A.X)
t=G.V
inherit(G.aY,t)
inherit(G.bI,t)
inherit(G.e,t)
inherit(G.as,G.bI)
t=D.cF
inherit(D.jY,t)
inherit(D.o_,t)
t=Q.cS
inherit(Q.hP,t)
inherit(Q.hO,t)
inherit(Q.dT,Q.hP)
inherit(B.jX,Q.dT)
t=S.fk
inherit(S.uo,t)
inherit(S.kO,t)
inherit(S.mR,t)
inherit(S.u0,t)
inherit(S.tg,t)
t=S.kO
inherit(S.ue,t)
inherit(S.u9,t)
t=S.mR
inherit(S.rX,t)
inherit(S.rO,t)
t=S.l5
inherit(S.tW,t)
inherit(S.l6,t)
inherit(S.nG,S.l6)
inherit(S.us,S.nG)
t=S.kM
inherit(S.uf,t)
inherit(S.ut,t)
t=S.m0
inherit(S.ux,t)
inherit(S.ug,t)
inherit(S.t2,t)
inherit(S.uu,t)
t=S.p6
inherit(S.uz,t)
inherit(S.rU,t)
inherit(S.uH,t)
t=S.hx
inherit(S.u1,t)
inherit(S.u3,t)
inherit(S.up,t)
inherit(Q.eJ,Q.hO)
inherit(Q.jV,Q.eJ)
mixin(H.hM,H.pj)
mixin(H.hC,P.b6)
mixin(H.hE,H.iy)
mixin(H.hD,P.b6)
mixin(H.hF,H.iy)
mixin(P.hG,P.b6)
mixin(P.hN,P.qX)
mixin(W.h_,P.b6)
mixin(W.h2,W.bx)
mixin(W.iE,W.ib)
mixin(W.jA,W.ib)
mixin(W.iF,P.b6)
mixin(W.iZ,W.bx)
mixin(W.iG,P.b6)
mixin(W.j_,W.bx)
mixin(W.iH,P.b6)
mixin(W.j0,W.bx)
mixin(W.iR,P.b6)
mixin(W.ja,W.bx)
mixin(W.iS,P.b6)
mixin(W.jb,W.bx)
mixin(W.iT,P.b6)
mixin(W.jc,W.bx)
mixin(W.h0,P.b6)
mixin(W.h3,W.bx)
mixin(W.iU,P.b6)
mixin(W.jd,W.bx)
mixin(W.iV,P.b6)
mixin(W.je,W.bx)
mixin(W.h1,P.b6)
mixin(W.h4,W.bx)
mixin(W.iW,P.b6)
mixin(W.jf,W.bx)
mixin(W.iX,P.b6)
mixin(W.jg,W.bx)
mixin(W.iY,P.b6)
mixin(W.jh,W.bx)
mixin(W.iI,P.b6)
mixin(W.j1,W.bx)
mixin(W.iJ,P.b6)
mixin(W.j2,W.bx)
mixin(W.iK,P.b6)
mixin(W.j3,W.bx)
mixin(W.iL,P.b6)
mixin(W.j4,W.bx)
mixin(P.iM,P.b6)
mixin(P.j5,W.bx)
mixin(P.iN,P.b6)
mixin(P.j6,W.bx)
mixin(P.iO,P.b6)
mixin(P.j7,W.bx)
mixin(P.iP,P.b6)
mixin(P.j8,W.bx)
mixin(P.iQ,P.b6)
mixin(P.j9,W.bx)
mixin(A.jB,P.fe)
mixin(Q.hP,P.b6)
mixin(Q.hO,P.fe)})();(function constants(){C.L=W.e2.prototype
C.M=J.j.prototype
C.b=J.en.prototype
C.f=J.jq.prototype
C.a=J.jr.prototype
C.d=J.ff.prototype
C.c=J.eo.prototype
C.T=J.ep.prototype
C.q=H.fi.prototype
C.F=J.nN.prototype
C.t=J.eF.prototype
C.H=new P.kE(!1)
C.G=new P.kD(C.H)
C.j=new W.i9()
C.I=new P.nA()
C.J=new P.q0()
C.K=new P.qv()
C.e=new P.qG()
C.h=new W.qW()
C.p=new P.dF(0)
C.N=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.u=function(hooks) { return hooks; }
C.O=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.P=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.Q=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.v=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.R=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.S=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.w=H.a(makeConstList([127,2047,65535,1114111]),[P.F])
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
C.i=new F.hu(0,"LogLevel.ERROR")
C.n=new F.hu(1,"LogLevel.WARN")
C.Z=new F.hu(3,"LogLevel.VERBOSE")
C.X=H.a(makeConstList([]),[P.C])
C.a_=new H.kW(0,{},C.X,[P.C,P.C])
C.a0=H.c_("bh")
C.a1=H.c_("Hx")
C.r=H.c_("Hy")
C.a2=H.c_("Hz")
C.a3=H.c_("HA")
C.a4=H.c_("HC")
C.a5=H.c_("HD")
C.a6=H.c_("HE")
C.a7=H.c_("mF")
C.a8=H.c_("cP")
C.a9=H.c_("C")
C.aa=H.c_("HI")
C.ab=H.c_("HJ")
C.ac=H.c_("HK")
C.ad=H.c_("d8")
C.ae=H.c_("d9")
C.af=H.c_("T")
C.ag=H.c_("F")
C.ah=H.c_("dl")
C.o=new P.pr(!1)})();(function staticFields(){$.wx="$cachedFunction"
$.wy="$cachedInvocation"
$.dE=0
$.fN=null
$.vc=null
$.uU=null
$.xv=null
$.xH=null
$.rm=null
$.rs=null
$.uV=null
$.fA=null
$.i_=null
$.i0=null
$.uQ=!1
$.aD=C.e
$.vt=0
$.vp=null
$.vo=null
$.vn=null
$.vq=null
$.vm=null
$.yB=null
$.yE=null
$.yf=null
$.yh=null
$.ye=null
$.yk=null
$.ys=null
$.yq=null
$.yG=null
$.yw=null
$.ym=null
$.yp=null
$.yi=null
$.yo=null
$.yz=null
$.yn=null
$.yD=null
$.yy=null
$.yl=null
$.yd=null
$.yt=null
$.yC=null
$.yv=null
$.yA=null
$.yF=null
$.yx=null
$.yj=null
$.yr=null
$.yg=null
$.yu=null
$.aa="accent"
$.ac="aspect1"
$.ab="aspect2"
$.al="shoe1"
$.ak="shoe2"
$.ae="cloak1"
$.af="cloak2"
$.ad="cloak3"
$.aj="shirt1"
$.ai="shirt2"
$.ah="pants1"
$.ag="pants2"
$.ax=1300
$.k=3
$.m=2
$.L=1
$.A=0.1
$.zk=1
$.zj=-1
$.tb=null
$.e0=null
$.vu=null
$.eh=null
$.f3=null
$.ir=null
$.t5=null
$.lI=null
$.td=null
$.is=null
$.ip=null
$.vw=null
$.ix=null
$.h7=null
$.dJ=null
$.vv=null
$.lG=null
$.lN=null
$.f1=null
$.zh=null
$.ze=null
$.zg=null
$.zi=null
$.hd=null
$.f_=null
$.cw=null
$.d1=null
$.ej=null
$.lM=null
$.c7=null
$.c6=null
$.t7=null
$.hb=null
$.eg=null
$.zf=null
$.ha=null
$.cC=null
$.e1=null
$.iw=null
$.cL=null
$.f2=null
$.c0=null
$.lK=null
$.lH=null
$.b2=null
$.cB=null
$.c5=null
$.cc=null
$.lJ=null
$.bP=null
$.ds=null
$.dr=null
$.dq=null
$.dH=null
$.dI=null
$.dG=null
$.d3=null
$.hc=null
$.iv=null
$.iq=null
$.cT=null
$.cv=null
$.bd=null
$.f0=null
$.ei=null
$.lL=null
$.h9=null
$.h8=null
$.t9=null
$.cA=null
$.tc=null
$.t6=null
$.vy=null
$.ef=null
$.cz=null
$.d2=null
$.dd=null
$.f4=null
$.t8=null
$.ta=null
$.vx=null
$.it=null
$.iu=null
$.ek=null
$.vz=!1
$.tf=null
$.zl=null
$.vB=null
$.vD=null
$.zu=null
$.vC=null
$.zs=null
$.zt=null
$.te=null
$.zp=null
$.zn=null
$.zo=null
$.zq=null
$.zr=null
$.zE=null
$.zx=null
$.zy=null
$.zz=null
$.zA=null
$.zB=null
$.zC=null
$.zD=null
$.zG=null
$.zH=null
$.zI=null
$.zJ=null
$.zK=null
$.zL=null
$.zF=null
$.EW="JACK"
$.F_="PM"
$.EX="JS"
$.EV="HP"
$.F4="YD"
$.F1="SI"
$.F2="SU"
$.EY="ME"
$.F0="RB"
$.ET="GN"
$.wr="MP"
$.ER="AR"
$.EZ="PE"
$.ES="DP"
$.F3="WV"
$.EU="HB"
$.n="PLAYER1TAG"
$.ex="PLAYER2TAG"
$.z="DENIZENTAG"
$.u="CONSORTTAG"
$.M="CONSORTSOUNDTAG"
$.aX="MCGUFFINTAG"
$.ap="TAGPHYSICALMCGUFFIN"
$.cg="TAGWEAPON"
$.FB=null
$.FO=null
$.Fv=null
$.Fy=null
$.FE=null
$.FJ=null
$.FH=null
$.FR=null
$.FQ=null
$.FI=null
$.FT=null
$.FD=null
$.FS=null
$.FM=null
$.FK=null
$.FN=null
$.Fx=null
$.Fw=null
$.FG=null
$.FF=null
$.FC=null
$.FP=null
$.Fz=null
$.FA=null
$.FL=null
$.xA=!1
$.H2=!1
$.FV=!1
$.wG=null
$.G1=13
$.at=3
$.bM=2
$.aS=1
$.mA=0
$.K=1
$.a5=3
$.J=4
$.tJ=6
$.tK=7
$.an=8
$.w=9
$.t=10
$.fc=null
$.em=null
$.tu=null
$.tF=null
$.tB=null
$.vL=null
$.tq=null
$.tA=null
$.hl=null
$.vU=null
$.wb=null
$.vO=null
$.vV=null
$.tr=null
$.tz=null
$.we=null
$.wg=null
$.tn=null
$.jk=null
$.jj=null
$.aI=null
$.w5=null
$.tl=null
$.w2=null
$.fd=null
$.vN=null
$.wh=null
$.wd=null
$.wa=null
$.ty=null
$.mt=null
$.el=null
$.wf=null
$.mp=null
$.ts=null
$.e3=null
$.w8=null
$.de=null
$.hk=null
$.tI=null
$.w9=null
$.tH=null
$.tC=null
$.tE=null
$.mx=null
$.hj=null
$.Aa=null
$.vX=null
$.w1=null
$.w7=null
$.w6=null
$.D=null
$.vS=null
$.mq=null
$.bQ=null
$.b9=null
$.bR=null
$.Y=null
$.aN=null
$.c2=null
$.N=null
$.Q=null
$.aG=null
$.b3=null
$.bW=null
$.be=null
$.bl=null
$.ce=null
$.b5=null
$.bz=null
$.bS=null
$.a_=null
$.Ev=null
$.aH=null
$.b4=null
$.aZ=null
$.am=null
$.c9=null
$.b1=null
$.aF=null
$.bE=null
$.b_=null
$.az=null
$.bk=null
$.bX=null
$.aM=null
$.bn=null
$.bi=null
$.a2=null
$.bL=null
$.a7=null
$.bb=null
$.bm=null
$.b0=null
$.bf=null
$.aJ=null
$.b7=null
$.aK=null
$.a0=null
$.aA=null
$.aO=null
$.b8=null
$.aE=null
$.ay=null
$.a3=null
$.H=null
$.P=null
$.ar=null
$.aw=null
$.aW=null
$.aT=null
$.Bs=null
$.E7=null
$.EG=null
$.AZ=null
$.E4=null
$.Bt=null
$.vK=null
$.Ej=null
$.Cs=null
$.Bo=null
$.A6=null
$.D2=null
$.jl=null
$.vP=null
$.Ds=null
$.AW=null
$.Cb=null
$.AU=null
$.to=null
$.AF=null
$.BF=null
$.B2=null
$.Cl=null
$.Er=null
$.Bu=null
$.mr=null
$.Cm=null
$.B0=null
$.AL=null
$.tD=null
$.A_=null
$.tk=null
$.C4=null
$.tw=null
$.CH=null
$.CB=null
$.A3=null
$.AO=null
$.DC=null
$.A5=null
$.E3=null
$.Ca=null
$.B9=null
$.Dm=null
$.DY=null
$.ms=null
$.Cw=null
$.Dj=null
$.B1=null
$.zT=null
$.Eu=null
$.Ce=null
$.AK=null
$.Ei=null
$.CK=null
$.AR=null
$.E2=null
$.Bj=null
$.DK=null
$.DL=null
$.A1=null
$.CD=null
$.B3=null
$.Bd=null
$.EK=null
$.hm=null
$.DA=null
$.E0=null
$.mv=null
$.Az=null
$.CU=null
$.CY=null
$.zZ=null
$.Bi=null
$.E1=null
$.CJ=null
$.El=null
$.Do=null
$.CZ=null
$.w0=null
$.DO=null
$.EA=null
$.E6=null
$.BS=null
$.Da=null
$.BT=null
$.DD=null
$.Ey=null
$.Ck=null
$.Bf=null
$.BC=null
$.Aq=null
$.Dk=null
$.BA=null
$.BH=null
$.B5=null
$.DN=null
$.fb=null
$.CO=null
$.vZ=null
$.BU=null
$.w_=null
$.ED=null
$.Av=null
$.Dy=null
$.Dz=null
$.Dx=null
$.Dw=null
$.DU=null
$.BI=null
$.CE=null
$.DX=null
$.Cv=null
$.CP=null
$.vR=null
$.Ex=null
$.CC=null
$.Bl=null
$.Bm=null
$.CX=null
$.EJ=null
$.C8=null
$.Ew=null
$.tx=null
$.DJ=null
$.Ci=null
$.jm=null
$.C2=null
$.Dc=null
$.Au=null
$.Bp=null
$.DF=null
$.CF=null
$.Eq=null
$.w3=null
$.CN=null
$.AB=null
$.AX=null
$.D8=null
$.Ed=null
$.DE=null
$.mn=null
$.tG=null
$.DQ=null
$.Ez=null
$.BR=null
$.Ae=null
$.An=null
$.Eb=null
$.CR=null
$.Ct=null
$.CS=null
$.E8=null
$.C3=null
$.A2=null
$.BG=null
$.Cr=null
$.DS=null
$.Bz=null
$.At=null
$.Du=null
$.Dv=null
$.Eo=null
$.DH=null
$.mw=null
$.vQ=null
$.AS=null
$.vT=null
$.BY=null
$.mu=null
$.De=null
$.CA=null
$.Dq=null
$.tt=null
$.my=null
$.tv=null
$.Bb=null
$.BE=null
$.w4=null
$.vW=null
$.AN=null
$.Ef=null
$.AG=null
$.D0=null
$.BV=null
$.DW=null
$.Cu=null
$.Ab=null
$.BW=null
$.B8=null
$.D4=null
$.Cd=null
$.Cz=null
$.Cj=null
$.Cn=null
$.Dt=null
$.Dp=null
$.zW=null
$.Ec=null
$.Dh=null
$.B_=null
$.B4=null
$.BD=null
$.E9=null
$.Bw=null
$.Cf=null
$.Ai=null
$.Bq=null
$.B7=null
$.CT=null
$.Bg=null
$.DB=null
$.Ch=null
$.vM=null
$.Dd=null
$.BX=null
$.Bx=null
$.zU=null
$.A0=null
$.CQ=null
$.D_=null
$.Cc=null
$.BP=null
$.Et=null
$.Al=null
$.By=null
$.Cg=null
$.AY=null
$.wc=null
$.AM=null
$.DG=null
$.Aj=null
$.Ee=null
$.Cp=null
$.Ad=null
$.Dn=null
$.D9=null
$.AT=null
$.BJ=null
$.AA=null
$.Ea=null
$.C0=null
$.Ep=null
$.AC=null
$.BK=null
$.AD=null
$.AV=null
$.Dg=null
$.AP=null
$.C1=null
$.CG=null
$.Aw=null
$.DV=null
$.EF=null
$.DM=null
$.Cx=null
$.DT=null
$.Cy=null
$.A8=null
$.zV=null
$.Cq=null
$.Ag=null
$.AE=null
$.A9=null
$.Ac=null
$.CM=null
$.D5=null
$.Eh=null
$.BZ=null
$.EE=null
$.Dl=null
$.Di=null
$.C5=null
$.C_=null
$.AI=null
$.BN=null
$.Co=null
$.CV=null
$.DP=null
$.zY=null
$.EB=null
$.Be=null
$.DZ=null
$.B6=null
$.A7=null
$.Ax=null
$.Ap=null
$.EI=null
$.Ay=null
$.Bh=null
$.AH=null
$.En=null
$.DR=null
$.Eg=null
$.zX=null
$.Dr=null
$.C6=null
$.C9=null
$.Es=null
$.E_=null
$.vY=null
$.Bn=null
$.D7=null
$.EC=null
$.Br=null
$.C7=null
$.tp=null
$.BQ=null
$.BO=null
$.DI=null
$.D6=null
$.BL=null
$.Ao=null
$.E5=null
$.CW=null
$.Ek=null
$.EH=null
$.mo=null
$.tm=null
$.Ak=null
$.Bk=null
$.Df=null
$.AQ=null
$.Db=null
$.Ba=null
$.A4=null
$.Am=null
$.CL=null
$.Bc=null
$.D3=null
$.As=null
$.Bv=null
$.Em=null
$.Af=null
$.BB=null
$.D1=null
$.Ar=null
$.BM=null
$.CI=null
$.Ah=null
$.AJ=null
$.x6=4
$.f6="OWNER"
$.wn=!1
$.u_=null
$.xJ=""
$.ou=null
$.FZ=null
$.eB=null
$.dQ=null
$.FY=null
$.cY=null
$.dv=null
$.bY=null
$.dP=null
$.fr=null
$.eA=null
$.d6=null
$.bZ=null
$.wI=!1})();(function lazyInitializers(){lazy($,"vk","$get$vk",function(){return H.xD("_$dart_dartClosure")})
lazy($,"tT","$get$tT",function(){return H.xD("_$dart_js")})
lazy($,"vI","$get$vI",function(){return H.zR()})
lazy($,"vJ","$get$vJ",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vt
$.vt=t+1
t="expando$key$"+t}return new P.lo(null,t,[P.F])})
lazy($,"wN","$get$wN",function(){return H.dR(H.ph({
toString:function(){return"$receiver$"}}))})
lazy($,"wO","$get$wO",function(){return H.dR(H.ph({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"wP","$get$wP",function(){return H.dR(H.ph(null))})
lazy($,"wQ","$get$wQ",function(){return H.dR(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wU","$get$wU",function(){return H.dR(H.ph(void 0))})
lazy($,"wV","$get$wV",function(){return H.dR(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wS","$get$wS",function(){return H.dR(H.wT(null))})
lazy($,"wR","$get$wR",function(){return H.dR(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"wX","$get$wX",function(){return H.dR(H.wT(void 0))})
lazy($,"wW","$get$wW",function(){return H.dR(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uM","$get$uM",function(){return P.G7()})
lazy($,"hf","$get$hf",function(){return P.Gd(null,P.cP)})
lazy($,"i1","$get$i1",function(){return[]})
lazy($,"x8","$get$x8",function(){return H.F5([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xt","$get$xt",function(){return P.GC()})
lazy($,"vj","$get$vj",function(){return P.dK("^\\S+$",!0,!1)})
lazy($,"i5","$get$i5",function(){return P.cD(P.F,L.eR)})
lazy($,"ve","$get$ve",function(){return P.dK("[\\/]",!0,!1)})
lazy($,"bO","$get$bO",function(){return H.a([],[S.bH])})
lazy($,"lX","$get$lX",function(){return P.cD(P.C,Z.im)})
lazy($,"ji","$get$ji",function(){return P.cD(P.F,B.fa)})
lazy($,"wi","$get$wi",function(){return H.a([],[A.X])})
lazy($,"ws","$get$ws",function(){return H.a([],[P.C])})
lazy($,"jK","$get$jK",function(){return P.cD(P.F,T.fo)})
lazy($,"aB","$get$aB",function(){return H.a([],[U.au])})
lazy($,"wH","$get$wH",function(){return P.wl([0,new K.cE("Pixels -> Bytes",T.GS(),T.GR()),1,new K.cE("Pixels -> Packed bits",T.GQ(),T.GP()),2,new K.cE("RLE 1 byte",V.t0(1),V.t_(1)),3,new K.cE("RLE 2 bytes",V.t0(2),V.t_(2)),4,new K.cE("RLE 3 bytes",V.t0(3),V.t_(3)),5,new K.cE("RLE packed 1 byte",V.rZ(1),V.rY(1)),6,new K.cE("RLE packed 2 bytes",V.rZ(2),V.rY(2)),7,new K.cE("RLE packed 3 bytes",V.rZ(3),V.rY(3)),8,new K.cE("RLE dynamic",V.Hp(),V.Ho()),9,new K.cE("Exponential-Golomb pixels",F.H8(),F.H7()),10,new K.cE("Exponential-Golomb run RLE",F.H6(),F.H5()),11,new K.cE("Exponential-Golomb run/data RLE",F.H4(),F.H3())],P.F,K.cE)})
lazy($,"c","$get$c",function(){return P.a6(null,null,null,G.V)})
lazy($,"x4","$get$x4",function(){return P.dK("[\n\r]+",!0,!1)})
lazy($,"x5","$get$x5",function(){return P.dK("( *)(.*)",!0,!1)})
lazy($,"x3","$get$x3",function(){return P.dK("^s*//",!0,!1)})
lazy($,"x2","$get$x2",function(){return P.dK("//",!0,!1)})
lazy($,"cH","$get$cH",function(){return new F.hv(!1,!1,"WordListFileFormat")})
lazy($,"x7","$get$x7",function(){return new T.pH(null)})
lazy($,"va","$get$va",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cU","$get$cU",function(){return P.cD(P.C,Y.dL)})
lazy($,"wo","$get$wo",function(){return P.dK("[\\/]",!0,!1)})
lazy($,"tZ","$get$tZ",function(){return P.cD(P.C,W.fp)})
lazy($,"ua","$get$ua",function(){return A.fS(255,0,255,255)})
lazy($,"nJ","$get$nJ",function(){return new F.hv(!1,!1,"Path Utils")})
lazy($,"nI","$get$nI",function(){return P.cD(P.eG,P.F)})
lazy($,"cQ","$get$cQ",function(){return H.a([],[D.cF])})
lazy($,"hL","$get$hL",function(){return P.dK("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fs","$get$fs",function(){return P.dK("\\\\(?!\\\\)",!0,!1)})
lazy($,"vl","$get$vl",function(){var t={color:16711935}
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
mangledGlobalNames:{F:"int",T:"double",dl:"num",C:"String",d9:"bool",cP:"Null",q:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.d9,args:[[P.q,E.iB]]},{func:1,v:true},{func:1,ret:P.d8,args:[P.bh,P.F,P.F,O.cV]},{func:1,ret:P.bh,args:[P.F,P.bh,P.bh,O.cV]},{func:1,v:true,args:[P.ao]},{func:1,ret:P.C,args:[P.F]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:P.C,args:[P.C]},{func:1,ret:W.dp,args:[P.F]},{func:1,ret:W.aQ,args:[P.F]},{func:1,v:true,args:[P.ao],opt:[P.dN]},{func:1,ret:W.co,args:[P.F]},{func:1,ret:W.eZ,args:[P.F]},{func:1,ret:W.cd,args:[P.F]},{func:1,ret:W.cf,args:[P.F]},{func:1,ret:W.cp,args:[P.F]},{func:1,ret:W.cq,args:[P.F]},{func:1,ret:W.fq,args:[P.F]},{func:1,ret:W.ft,args:[P.F]},{func:1,ret:W.fu,args:[P.F]},{func:1,ret:P.bU,args:[P.F]},{func:1,ret:W.bJ,args:[P.F]},{func:1,ret:P.C,args:[P.du]},{func:1,ret:W.fv,args:[P.F]},{func:1,ret:W.ch,args:[P.F]},{func:1,ret:W.ci,args:[P.F]},{func:1,ret:P.bo,args:[P.F]},{func:1,ret:P.F,args:[P.bG,P.bG]},{func:1,ret:W.cm,args:[P.F]},{func:1,ret:[P.cl,P.cP]},{func:1,v:true,args:[P.C]},{func:1,v:true,args:[,P.dN]},{func:1,ret:P.d9,args:[P.ao]},{func:1,ret:W.cr,args:[P.F]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.j,AnimationEffectTiming:J.j,AnimationTimeline:J.j,AppBannerPromptResult:J.j,BarProp:J.j,Body:J.j,CacheStorage:J.j,CanvasGradient:J.j,CanvasPattern:J.j,CanvasRenderingContext2D:J.j,CHROMIUMValuebuffer:J.j,CircularGeofencingRegion:J.j,Client:J.j,Clients:J.j,CompositorProxy:J.j,ConsoleBase:J.j,Coordinates:J.j,CredentialsContainer:J.j,Crypto:J.j,CryptoKey:J.j,CSS:J.j,DeprecatedStorageInfo:J.j,DeprecatedStorageQuota:J.j,DeviceAcceleration:J.j,DeviceRotationRate:J.j,DirectoryReader:J.j,DOMImplementation:J.j,Iterator:J.j,DOMMatrix:J.j,DOMMatrixReadOnly:J.j,DOMParser:J.j,DOMPoint:J.j,DOMPointReadOnly:J.j,EffectModel:J.j,Stream:J.j,FormData:J.j,GamepadButton:J.j,Geofencing:J.j,GeofencingRegion:J.j,Geolocation:J.j,Geoposition:J.j,Headers:J.j,HMDVRDevice:J.j,IdleDeadline:J.j,ImageBitmap:J.j,ImageBitmapRenderingContext:J.j,InjectedScriptHost:J.j,InputDeviceCapabilities:J.j,IntersectionObserver:J.j,IntersectionObserverEntry:J.j,KeyframeEffect:J.j,MediaDeviceInfo:J.j,MediaDevices:J.j,MediaError:J.j,MediaKeyStatusMap:J.j,MediaKeySystemAccess:J.j,MediaKeys:J.j,MediaMetadata:J.j,MediaSession:J.j,MemoryInfo:J.j,MessageChannel:J.j,Metadata:J.j,MIDIInputMap:J.j,MIDIOutputMap:J.j,MutationObserver:J.j,WebKitMutationObserver:J.j,MutationRecord:J.j,NavigatorStorageUtils:J.j,NodeFilter:J.j,NodeIterator:J.j,NonDocumentTypeChildNode:J.j,NonElementParentNode:J.j,OffscreenCanvas:J.j,PerformanceNavigation:J.j,PerformanceObserver:J.j,PerformanceObserverEntryList:J.j,PerformanceTiming:J.j,Permissions:J.j,PositionError:J.j,PositionSensorVRDevice:J.j,Presentation:J.j,PushManager:J.j,PushMessageData:J.j,PushSubscription:J.j,Range:J.j,ReadableByteStream:J.j,ReadableByteStreamReader:J.j,ReadableStreamReader:J.j,RTCCertificate:J.j,RTCIceCandidate:J.j,mozRTCIceCandidate:J.j,RTCSessionDescription:J.j,mozRTCSessionDescription:J.j,RTCStatsReport:J.j,RTCStatsResponse:J.j,Screen:J.j,ScrollState:J.j,Selection:J.j,SharedArrayBuffer:J.j,SourceInfo:J.j,StorageInfo:J.j,StorageManager:J.j,StorageQuota:J.j,StyleMedia:J.j,StylePropertyMap:J.j,SyncManager:J.j,TextMetrics:J.j,TreeWalker:J.j,UnderlyingSourceBase:J.j,URLSearchParams:J.j,VRDevice:J.j,VREyeParameters:J.j,VRFieldOfView:J.j,VRPositionState:J.j,ValidityState:J.j,VideoPlaybackQuality:J.j,VideoTrack:J.j,WindowClient:J.j,WorkerConsole:J.j,XPathEvaluator:J.j,XPathExpression:J.j,XPathNSResolver:J.j,XPathResult:J.j,XMLSerializer:J.j,XSLTProcessor:J.j,Bluetooth:J.j,BluetoothAdvertisingData:J.j,BluetoothCharacteristicProperties:J.j,BluetoothRemoteGATTServer:J.j,BluetoothRemoteGATTService:J.j,BluetoothUUID:J.j,Cache:J.j,DOMFileSystemSync:J.j,DirectoryEntrySync:J.j,DirectoryReaderSync:J.j,EntrySync:J.j,FileEntrySync:J.j,FileReaderSync:J.j,FileWriterSync:J.j,HTMLAllCollection:J.j,NFC:J.j,PagePopupController:J.j,Request:J.j,Response:J.j,SubtleCrypto:J.j,USBAlternateInterface:J.j,USBConfiguration:J.j,USBDevice:J.j,USBEndpoint:J.j,USBInTransferResult:J.j,USBInterface:J.j,USBIsochronousInTransferPacket:J.j,USBIsochronousInTransferResult:J.j,USBIsochronousOutTransferPacket:J.j,USBIsochronousOutTransferResult:J.j,USBOutTransferResult:J.j,WebKitCSSMatrix:J.j,Worklet:J.j,WorkletGlobalScope:J.j,IDBCursor:J.j,IDBCursorWithValue:J.j,IDBFactory:J.j,IDBKeyRange:J.j,SVGAngle:J.j,SVGAnimatedAngle:J.j,SVGAnimatedBoolean:J.j,SVGAnimatedEnumeration:J.j,SVGAnimatedInteger:J.j,SVGAnimatedLength:J.j,SVGAnimatedLengthList:J.j,SVGAnimatedNumber:J.j,SVGAnimatedNumberList:J.j,SVGAnimatedPreserveAspectRatio:J.j,SVGAnimatedRect:J.j,SVGAnimatedString:J.j,SVGAnimatedTransformList:J.j,SVGMatrix:J.j,SVGPoint:J.j,SVGPreserveAspectRatio:J.j,SVGRect:J.j,SVGUnitTypes:J.j,AudioListener:J.j,AudioParam:J.j,PeriodicWave:J.j,ANGLEInstancedArrays:J.j,ANGLE_instanced_arrays:J.j,WebGLBuffer:J.j,CHROMIUMSubscribeUniform:J.j,WebGLCompressedTextureASTC:J.j,WebGLCompressedTextureATC:J.j,WEBGL_compressed_texture_atc:J.j,WebGLCompressedTextureETC1:J.j,WEBGL_compressed_texture_etc1:J.j,WebGLCompressedTexturePVRTC:J.j,WEBGL_compressed_texture_pvrtc:J.j,WebGLCompressedTextureS3TC:J.j,WEBGL_compressed_texture_s3tc:J.j,WebGLDebugRendererInfo:J.j,WEBGL_debug_renderer_info:J.j,WebGLDebugShaders:J.j,WEBGL_debug_shaders:J.j,WebGLDepthTexture:J.j,WEBGL_depth_texture:J.j,WebGLDrawBuffers:J.j,WEBGL_draw_buffers:J.j,EXTsRGB:J.j,EXT_sRGB:J.j,EXTBlendMinMax:J.j,EXT_blend_minmax:J.j,EXTColorBufferFloat:J.j,EXTDisjointTimerQuery:J.j,EXTFragDepth:J.j,EXT_frag_depth:J.j,EXTShaderTextureLOD:J.j,EXT_shader_texture_lod:J.j,EXTTextureFilterAnisotropic:J.j,EXT_texture_filter_anisotropic:J.j,WebGLFramebuffer:J.j,WebGLLoseContext:J.j,WebGLExtensionLoseContext:J.j,WEBGL_lose_context:J.j,OESElementIndexUint:J.j,OES_element_index_uint:J.j,OESStandardDerivatives:J.j,OES_standard_derivatives:J.j,OESTextureFloat:J.j,OES_texture_float:J.j,OESTextureFloatLinear:J.j,OES_texture_float_linear:J.j,OESTextureHalfFloat:J.j,OES_texture_half_float:J.j,OESTextureHalfFloatLinear:J.j,OES_texture_half_float_linear:J.j,OESVertexArrayObject:J.j,OES_vertex_array_object:J.j,WebGLProgram:J.j,WebGLQuery:J.j,WebGLRenderbuffer:J.j,WebGLRenderingContext:J.j,WebGLSampler:J.j,WebGLShader:J.j,WebGLShaderPrecisionFormat:J.j,WebGLSync:J.j,WebGLTexture:J.j,WebGLTimerQueryEXT:J.j,WebGLTransformFeedback:J.j,WebGLUniformLocation:J.j,WebGLVertexArrayObject:J.j,WebGLVertexArrayObjectOES:J.j,Database:J.j,SQLError:J.j,SQLResultSet:J.j,SQLTransaction:J.j,ArrayBuffer:H.fh,ArrayBufferView:H.et,DataView:H.nk,Float32Array:H.nl,Float64Array:H.nm,Int16Array:H.nn,Int32Array:H.no,Int8Array:H.np,Uint16Array:H.nq,Uint32Array:H.nr,Uint8ClampedArray:H.jx,CanvasPixelArray:H.jx,Uint8Array:H.fi,HTMLBRElement:W.aC,HTMLCanvasElement:W.aC,HTMLContentElement:W.aC,HTMLDListElement:W.aC,HTMLDataListElement:W.aC,HTMLDetailsElement:W.aC,HTMLDialogElement:W.aC,HTMLDivElement:W.aC,HTMLHRElement:W.aC,HTMLHeadElement:W.aC,HTMLHeadingElement:W.aC,HTMLHtmlElement:W.aC,HTMLLIElement:W.aC,HTMLLabelElement:W.aC,HTMLLegendElement:W.aC,HTMLMenuElement:W.aC,HTMLMenuItemElement:W.aC,HTMLMeterElement:W.aC,HTMLModElement:W.aC,HTMLOListElement:W.aC,HTMLOptGroupElement:W.aC,HTMLOptionElement:W.aC,HTMLParagraphElement:W.aC,HTMLPictureElement:W.aC,HTMLPreElement:W.aC,HTMLProgressElement:W.aC,HTMLQuoteElement:W.aC,HTMLShadowElement:W.aC,HTMLSourceElement:W.aC,HTMLStyleElement:W.aC,HTMLTableCaptionElement:W.aC,HTMLTableCellElement:W.aC,HTMLTableDataCellElement:W.aC,HTMLTableHeaderCellElement:W.aC,HTMLTableColElement:W.aC,HTMLTableElement:W.aC,HTMLTableRowElement:W.aC,HTMLTableSectionElement:W.aC,HTMLTitleElement:W.aC,HTMLTrackElement:W.aC,HTMLUListElement:W.aC,HTMLUnknownElement:W.aC,HTMLDirectoryElement:W.aC,HTMLFontElement:W.aC,HTMLFrameElement:W.aC,HTMLMarqueeElement:W.aC,HTMLElement:W.aC,HTMLAnchorElement:W.eQ,HTMLAreaElement:W.ku,HTMLAudioElement:W.eU,AudioTrack:W.cK,AudioTrackList:W.kB,HTMLBaseElement:W.kF,Blob:W.eV,HTMLBodyElement:W.kJ,HTMLButtonElement:W.fQ,CDATASection:W.ec,CharacterData:W.ec,Comment:W.ec,ProcessingInstruction:W.ec,Text:W.ec,CompositorWorker:W.kU,Credential:W.fU,FederatedCredential:W.fU,PasswordCredential:W.fU,CSSFontFaceRule:W.l_,CSSImportRule:W.l0,CSSKeyframeRule:W.fV,MozCSSKeyframeRule:W.fV,WebKitCSSKeyframeRule:W.fV,CSSKeyframesRule:W.fW,MozCSSKeyframesRule:W.fW,WebKitCSSKeyframesRule:W.fW,CSSPageRule:W.l1,CSSCharsetRule:W.bJ,CSSGroupingRule:W.bJ,CSSMediaRule:W.bJ,CSSNamespaceRule:W.bJ,CSSSupportsRule:W.bJ,CSSRule:W.bJ,CSSStyleDeclaration:W.eY,MSStyleCSSProperties:W.eY,CSS2Properties:W.eY,CSSStyleRule:W.l2,CSSViewportRule:W.l3,DataTransfer:W.l8,DataTransferItem:W.eZ,DataTransferItemList:W.ic,Document:W.ed,HTMLDocument:W.ed,XMLDocument:W.ed,DocumentFragment:W.ie,ShadowRoot:W.ie,DOMError:W.ig,FileError:W.ig,DOMException:W.lb,DOMRectReadOnly:W.ih,DOMStringList:W.ii,DOMStringMap:W.ij,DOMTokenList:W.ik,Element:W.dp,HTMLEmbedElement:W.lh,DirectoryEntry:W.fY,Entry:W.fY,FileEntry:W.fY,ErrorEvent:W.fZ,AnimationEvent:W.U,AnimationPlayerEvent:W.U,ApplicationCacheErrorEvent:W.U,AutocompleteErrorEvent:W.U,BeforeInstallPromptEvent:W.U,BeforeUnloadEvent:W.U,BlobEvent:W.U,ClipboardEvent:W.U,CloseEvent:W.U,CompositionEvent:W.U,CustomEvent:W.U,DeviceLightEvent:W.U,DeviceMotionEvent:W.U,DeviceOrientationEvent:W.U,ExtendableEvent:W.U,ExtendableMessageEvent:W.U,FetchEvent:W.U,FocusEvent:W.U,FontFaceSetLoadEvent:W.U,GamepadEvent:W.U,GeofencingEvent:W.U,HashChangeEvent:W.U,InstallEvent:W.U,KeyboardEvent:W.U,MediaEncryptedEvent:W.U,MediaKeyMessageEvent:W.U,MediaQueryListEvent:W.U,MediaStreamEvent:W.U,MediaStreamTrackEvent:W.U,MessageEvent:W.U,MIDIConnectionEvent:W.U,MIDIMessageEvent:W.U,MouseEvent:W.U,DragEvent:W.U,NotificationEvent:W.U,PageTransitionEvent:W.U,PointerEvent:W.U,PopStateEvent:W.U,PresentationConnectionAvailableEvent:W.U,PresentationConnectionCloseEvent:W.U,ProgressEvent:W.U,PromiseRejectionEvent:W.U,PushEvent:W.U,RelatedEvent:W.U,RTCDataChannelEvent:W.U,RTCDTMFToneChangeEvent:W.U,RTCIceCandidateEvent:W.U,RTCPeerConnectionIceEvent:W.U,SecurityPolicyViolationEvent:W.U,ServicePortConnectEvent:W.U,ServiceWorkerMessageEvent:W.U,SpeechRecognitionEvent:W.U,StorageEvent:W.U,SyncEvent:W.U,TextEvent:W.U,TouchEvent:W.U,TrackEvent:W.U,TransitionEvent:W.U,WebKitTransitionEvent:W.U,UIEvent:W.U,WheelEvent:W.U,ResourceProgressEvent:W.U,USBConnectionEvent:W.U,IDBVersionChangeEvent:W.U,SVGZoomEvent:W.U,AudioProcessingEvent:W.U,OfflineAudioCompletionEvent:W.U,WebGLContextEvent:W.U,Event:W.U,InputEvent:W.U,Animation:W.aV,ApplicationCache:W.aV,DOMApplicationCache:W.aV,OfflineResourceList:W.aV,BatteryManager:W.aV,CanvasCaptureMediaStreamTrack:W.aV,CrossOriginServiceWorkerClient:W.aV,EventSource:W.aV,MediaKeySession:W.aV,MediaQueryList:W.aV,MediaRecorder:W.aV,MediaSource:W.aV,MediaStream:W.aV,MediaStreamTrack:W.aV,MessagePort:W.aV,MIDIAccess:W.aV,NetworkInformation:W.aV,Notification:W.aV,Performance:W.aV,PermissionStatus:W.aV,PresentationAvailability:W.aV,PresentationReceiver:W.aV,PresentationRequest:W.aV,RTCDTMFSender:W.aV,RTCPeerConnection:W.aV,webkitRTCPeerConnection:W.aV,mozRTCPeerConnection:W.aV,ScreenOrientation:W.aV,ServicePortCollection:W.aV,ServiceWorkerContainer:W.aV,ServiceWorkerRegistration:W.aV,SpeechRecognition:W.aV,SpeechSynthesis:W.aV,SpeechSynthesisUtterance:W.aV,WorkerPerformance:W.aV,BluetoothDevice:W.aV,BluetoothRemoteGATTCharacteristic:W.aV,USB:W.aV,EventTarget:W.aV,HTMLFieldSetElement:W.lO,File:W.cd,FileList:W.f5,FileReader:W.lP,DOMFileSystem:W.lQ,FileWriter:W.lR,FontFace:W.lU,FontFaceSet:W.lV,HTMLFormElement:W.iA,Gamepad:W.cm,History:W.m6,HTMLOptionsCollection:W.f7,HTMLCollection:W.f7,HTMLFormControlsCollection:W.iC,XMLHttpRequest:W.e2,XMLHttpRequestUpload:W.hg,XMLHttpRequestEventTarget:W.hg,HTMLIFrameElement:W.me,ImageData:W.hh,HTMLImageElement:W.f9,HTMLInputElement:W.mj,HTMLKeygenElement:W.mL,CalcLength:W.hq,LengthValue:W.hq,SimpleLength:W.hq,HTMLLinkElement:W.hr,Location:W.n2,HTMLMapElement:W.n7,HTMLVideoElement:W.hy,HTMLMediaElement:W.hy,MediaList:W.ju,HTMLMetaElement:W.nd,MIDIOutput:W.ne,MIDIInput:W.hz,MIDIPort:W.hz,MimeType:W.co,MimeTypeArray:W.jv,Navigator:W.ns,NavigatorUserMediaError:W.nt,Node:W.aQ,NodeList:W.jy,RadioNodeList:W.jy,HTMLObjectElement:W.nw,HTMLOutputElement:W.nB,HTMLParamElement:W.nF,Path2D:W.nH,PerformanceCompositeTiming:W.e4,PerformanceEntry:W.e4,PerformanceMark:W.e4,PerformanceMeasure:W.e4,PerformanceRenderTiming:W.e4,PerformanceResourceTiming:W.e4,Perspective:W.nM,Plugin:W.cf,PluginArray:W.jF,PresentationConnection:W.nS,RTCDataChannel:W.jJ,DataChannel:W.jJ,HTMLScriptElement:W.fp,HTMLSelectElement:W.jL,ServicePort:W.oe,SharedWorker:W.oh,SharedWorkerGlobalScope:W.oi,HTMLSlotElement:W.oj,SourceBuffer:W.cp,SourceBufferList:W.jN,HTMLSpanElement:W.hK,SpeechGrammar:W.cq,SpeechGrammarList:W.jO,SpeechRecognitionAlternative:W.fq,SpeechRecognitionError:W.op,SpeechRecognitionResult:W.ch,SpeechSynthesisEvent:W.oq,SpeechSynthesisVoice:W.or,Storage:W.ow,CSSStyleSheet:W.ci,StyleSheet:W.ci,KeywordValue:W.e6,NumberValue:W.e6,PositionValue:W.e6,TransformValue:W.e6,StyleValue:W.e6,HTMLTemplateElement:W.p_,HTMLTextAreaElement:W.p1,TextTrack:W.cR,TextTrackCue:W.cG,VTTCue:W.cG,TextTrackCueList:W.p4,TextTrackList:W.p5,TimeRanges:W.p9,Touch:W.cr,TouchList:W.jS,TrackDefault:W.ft,TrackDefaultList:W.jT,Matrix:W.e7,Rotation:W.e7,Skew:W.e7,Translation:W.e7,TransformComponent:W.e7,URL:W.pp,VideoTrackList:W.pt,VTTRegion:W.fu,VTTRegionList:W.jU,WebSocket:W.py,Window:W.jW,DOMWindow:W.jW,Worker:W.pF,CompositorWorkerGlobalScope:W.eI,DedicatedWorkerGlobalScope:W.eI,ServiceWorkerGlobalScope:W.eI,WorkerGlobalScope:W.eI,Attr:W.fv,ClientRect:W.pW,ClientRectList:W.hR,DOMRectList:W.hR,CSSRuleList:W.k2,DocumentType:W.q2,DOMRect:W.q3,GamepadList:W.k6,HTMLFrameSetElement:W.qo,NamedNodeMap:W.hX,MozNamedAttrMap:W.hX,ServiceWorker:W.qN,SpeechRecognitionResultList:W.ka,StyleSheetList:W.kc,WorkerLocation:W.r2,WorkerNavigator:W.r3,IDBDatabase:P.l9,IDBIndex:P.mh,IDBObjectStore:P.nx,IDBOpenDBRequest:P.hJ,IDBVersionChangeRequest:P.hJ,IDBRequest:P.hJ,IDBTransaction:P.pe,SVGAElement:P.kr,SVGAnimateElement:P.eb,SVGAnimateMotionElement:P.eb,SVGAnimateTransformElement:P.eb,SVGAnimationElement:P.eb,SVGSetElement:P.eb,SVGFEBlendElement:P.lp,SVGFEColorMatrixElement:P.lq,SVGFEComponentTransferElement:P.lr,SVGFECompositeElement:P.ls,SVGFEConvolveMatrixElement:P.lt,SVGFEDiffuseLightingElement:P.lu,SVGFEDisplacementMapElement:P.lv,SVGFEFloodElement:P.lw,SVGFEGaussianBlurElement:P.lx,SVGFEImageElement:P.ly,SVGFEMergeElement:P.lz,SVGFEMorphologyElement:P.lA,SVGFEOffsetElement:P.lB,SVGFESpecularLightingElement:P.lC,SVGFETileElement:P.lD,SVGFETurbulenceElement:P.lE,SVGFilterElement:P.lS,SVGCircleElement:P.cn,SVGClipPathElement:P.cn,SVGDefsElement:P.cn,SVGEllipseElement:P.cn,SVGForeignObjectElement:P.cn,SVGGElement:P.cn,SVGGeometryElement:P.cn,SVGLineElement:P.cn,SVGPathElement:P.cn,SVGPolygonElement:P.cn,SVGPolylineElement:P.cn,SVGRectElement:P.cn,SVGSwitchElement:P.cn,SVGGraphicsElement:P.cn,SVGImageElement:P.mf,SVGLength:P.d4,SVGLengthList:P.mO,SVGMarkerElement:P.na,SVGMaskElement:P.nb,SVGNumber:P.d5,SVGNumberList:P.nu,SVGPatternElement:P.nK,SVGPointList:P.nP,SVGScriptElement:P.ob,SVGStringList:P.oR,SVGDescElement:P.cb,SVGDiscardElement:P.cb,SVGFEDistantLightElement:P.cb,SVGFEFuncAElement:P.cb,SVGFEFuncBElement:P.cb,SVGFEFuncGElement:P.cb,SVGFEFuncRElement:P.cb,SVGFEMergeNodeElement:P.cb,SVGFEPointLightElement:P.cb,SVGFESpotLightElement:P.cb,SVGMetadataElement:P.cb,SVGStopElement:P.cb,SVGStyleElement:P.cb,SVGTitleElement:P.cb,SVGComponentTransferFunctionElement:P.cb,SVGElement:P.cb,SVGSVGElement:P.oU,SVGSymbolElement:P.oW,SVGTSpanElement:P.eD,SVGTextElement:P.eD,SVGTextPositioningElement:P.eD,SVGTextContentElement:P.eD,SVGTextPathElement:P.p3,SVGTransform:P.d7,SVGTransformList:P.pf,SVGUseElement:P.pq,SVGViewElement:P.pu,SVGViewSpec:P.pv,SVGLinearGradientElement:P.hV,SVGRadialGradientElement:P.hV,SVGGradientElement:P.hV,SVGCursorElement:P.qK,SVGFEDropShadowElement:P.qL,SVGMPathElement:P.qM,AudioBuffer:P.fK,AudioBufferSourceNode:P.eT,AudioContext:P.fL,webkitAudioContext:P.fL,OfflineAudioContext:P.fL,AnalyserNode:P.bC,RealtimeAnalyserNode:P.bC,AudioDestinationNode:P.bC,BiquadFilterNode:P.bC,ChannelMergerNode:P.bC,AudioChannelMerger:P.bC,ChannelSplitterNode:P.bC,AudioChannelSplitter:P.bC,DelayNode:P.bC,DynamicsCompressorNode:P.bC,GainNode:P.bC,AudioGainNode:P.bC,IIRFilterNode:P.bC,MediaStreamAudioDestinationNode:P.bC,PannerNode:P.bC,AudioPannerNode:P.bC,webkitAudioPannerNode:P.bC,ScriptProcessorNode:P.bC,JavaScriptAudioNode:P.bC,StereoPannerNode:P.bC,WaveShaperNode:P.bC,AudioNode:P.bC,MediaElementAudioSourceNode:P.dY,MediaStreamAudioSourceNode:P.dY,OscillatorNode:P.dY,Oscillator:P.dY,AudioSourceNode:P.dY,ConvolverNode:P.kX,WebGLActiveInfo:P.kt,WebGL2RenderingContext:P.o0,WebGL2RenderingContextBase:P.r1,SQLResultSetRowList:P.jP})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jw.$nativeSuperclassTag="ArrayBufferView"
H.hC.$nativeSuperclassTag="ArrayBufferView"
H.hE.$nativeSuperclassTag="ArrayBufferView"
H.hA.$nativeSuperclassTag="ArrayBufferView"
H.hD.$nativeSuperclassTag="ArrayBufferView"
H.hF.$nativeSuperclassTag="ArrayBufferView"
H.hB.$nativeSuperclassTag="ArrayBufferView"
W.h_.$nativeSuperclassTag="EventTarget"
W.h2.$nativeSuperclassTag="EventTarget"
W.h0.$nativeSuperclassTag="EventTarget"
W.h3.$nativeSuperclassTag="EventTarget"
W.h1.$nativeSuperclassTag="EventTarget"
W.h4.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xK(O.wL(),b)},[])
else (function(b){H.xK(O.wL(),b)})([])})})()
//# sourceMappingURL=ThemeController.dart.js.map
