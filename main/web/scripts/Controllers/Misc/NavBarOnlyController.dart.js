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
a[c]=function(){a[c]=function(){H.HT(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.v4"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.v4"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.v4(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={u3:function u3(a){this.a=a},
rC:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wX:function(a,b,c,d){var t=new H.p5(a,b,c,[d])
t.eY(a,b,c,d)
return t},
du:function(a,b,c,d){if(!!J.aQ(a).$isv)return new H.fU(a,b,[c,d])
return new H.ht(a,b,[c,d])},
jk:function(){return new P.dP("No element")},
ww:function(){return new P.dP("Too few elements")},
jF:function(a,b,c,d){if(c-b<=32)H.Gn(a,b,c,d)
else H.Gm(a,b,c,d)},
Gn:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bg(a);t<=c;++t){r=s.B(a,t)
q=t
while(!0){if(!(q>b&&J.cu(d.$2(s.B(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.B(a,p))
q=p}s.i(a,q,r)}},
Gm:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.aA(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.aA(a3+a4,2)
p=q-t
o=q+t
n=J.bg(a2)
m=n.B(a2,s)
l=n.B(a2,p)
k=n.B(a2,q)
j=n.B(a2,o)
i=n.B(a2,r)
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
n.i(a2,p,n.B(a2,a3))
n.i(a2,o,n.B(a2,a4))
g=a3+1
f=a4-1
if(J.bc(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.B(a2,e)
c=a5.$2(d,l)
b=J.aQ(c)
if(b.a_(c,0))continue
if(b.aj(c,0)){if(e!==g){n.i(a2,e,n.B(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.B(a2,f),l)
b=J.dB(c)
if(b.aP(c,0)){--f
continue}else{a=f-1
if(b.aj(c,0)){n.i(a2,e,n.B(a2,g))
a0=g+1
n.i(a2,g,n.B(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.B(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.B(a2,e)
if(J.e9(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.B(a2,g))
n.i(a2,g,d)}++g}else if(J.cu(a5.$2(d,j),0))for(;!0;)if(J.cu(a5.$2(n.B(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.e9(a5.$2(n.B(a2,f),l),0)){n.i(a2,e,n.B(a2,g))
a0=g+1
n.i(a2,g,n.B(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.B(a2,f))
n.i(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.i(a2,a3,n.B(a2,b))
n.i(a2,b,l)
b=f+1
n.i(a2,a4,n.B(a2,b))
n.i(a2,b,j)
H.jF(a2,a3,g-2,a5)
H.jF(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.bc(a5.$2(n.B(a2,g),l),0);)++g
for(;J.bc(a5.$2(n.B(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.B(a2,e)
if(J.bc(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.B(a2,g))
n.i(a2,g,d)}++g}else if(J.bc(a5.$2(d,j),0))for(;!0;)if(J.bc(a5.$2(n.B(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.e9(a5.$2(n.B(a2,f),l),0)){n.i(a2,e,n.B(a2,g))
a0=g+1
n.i(a2,g,n.B(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.B(a2,f))
n.i(a2,f,d)}f=a
break}}H.jF(a2,g,f,a5)}else H.jF(a2,g,f,a5)},
kM:function kM(a){this.a=a},
v:function v(){},
eq:function eq(){},
p5:function p5(a,b,c,$ti){var _=this
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
ht:function ht(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fU:function fU(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jp:function jp(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fd:function fd(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hP:function hP(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jP:function jP(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iv:function iv(){},
pw:function pw(){},
hL:function hL(){},
k9:function(a,b){var t=a.bB(b)
if(!u.globalState.d.cy)u.globalState.f.bJ()
return t},
xX:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aQ(s).$isr)throw H.m(P.dE("Arguments to main must be a List: "+H.D(s)))
u.globalState=new H.qM(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vV()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qi(P.u9(null,H.eK),0)
r=P.G
s.z=new H.q(0,null,null,null,null,null,0,[r,H.ft])
s.ch=new H.q(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qL()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.Ac,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.GH)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.aj(null,null,null,r)
p=new H.fk(0,null,!1)
o=new H.ft(s,new H.q(0,null,null,null,null,null,0,[r,H.fk]),q,u.createNewIsolate(),p,new H.dF(H.rR()),new H.dF(H.rR()),!1,!1,[],P.aj(null,null,null,null),null,null,!1,!0,P.aj(null,null,null,null))
q.h(0,0)
o.dj(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fz(a,{func:1,args:[,]}))o.bB(new H.rS(t,a))
else if(H.fz(a,{func:1,args:[,,]}))o.bB(new H.rT(t,a))
else o.bB(a)
u.globalState.f.bJ()},
GH:function(a){var t=P.hp(["command","print","msg",a])
return new H.dA(!0,P.hW(null,P.G)).aK(t)},
Ae:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.Af()
return},
Af:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.m(new P.aa("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.m(new P.aa('Cannot extract URI from "'+t+'"'))},
Ac:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eJ(!0,[]).b8(b.data)
s=J.bg(t)
switch(s.B(t,"command")){case"start":u.globalState.b=s.B(t,"id")
r=s.B(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.B(t,"args")
o=new H.eJ(!0,[]).b8(s.B(t,"msg"))
n=s.B(t,"isSpawnUri")
m=s.B(t,"startPaused")
l=new H.eJ(!0,[]).b8(s.B(t,"replyTo"))
s=u.globalState.a++
k=P.G
j=P.aj(null,null,null,k)
i=new H.fk(0,null,!1)
h=new H.ft(s,new H.q(0,null,null,null,null,null,0,[k,H.fk]),j,u.createNewIsolate(),i,new H.dF(H.rR()),new H.dF(H.rR()),!1,!1,[],P.aj(null,null,null,null),null,null,!1,!0,P.aj(null,null,null,null))
j.h(0,0)
h.dj(0,i)
u.globalState.f.a.aY(0,new H.eK(h,new H.mk(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bJ()
break
case"spawn-worker":break
case"message":if(s.B(t,"port")!=null)J.fC(s.B(t,"port"),s.B(t,"msg"))
u.globalState.f.bJ()
break
case"close":u.globalState.ch.aB(0,$.$get$vW().B(0,a))
a.terminate()
u.globalState.f.bJ()
break
case"log":H.Ab(s.B(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hp(["command","print","msg",t])
k=new H.dA(!0,P.hW(null,P.G)).aK(k)
s.toString
self.postMessage(k)}else P.fA(s.B(t,"msg"))
break
case"error":throw H.m(s.B(t,"msg"))}},
Ab:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hp(["command","log","msg",a])
r=new H.dA(!0,P.hW(null,P.G)).aK(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.ct(q)
t=H.cs(q)
s=P.li(t)
throw H.m(s)}},
Ad:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wK=$.wK+("_"+s)
$.wL=$.wL+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fC(f,["spawned",new H.fu(s,r),q,t.r])
r=new H.ml(a,b,c,d,t)
if(e===!0){t.dZ(q,q)
u.globalState.f.a.aY(0,new H.eK(t,r,"start isolate"))}else r.$0()},
Gt:function(a,b){var t=new H.pn(!0,!1,null)
t.eZ(a,b)
return t},
H_:function(a){return new H.eJ(!0,[]).b8(new H.dA(!1,P.hW(null,P.G)).aK(a))},
rS:function rS(a,b){this.a=a
this.b=b},
rT:function rT(a,b){this.a=a
this.b=b},
qM:function qM(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
ft:function ft(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
qH:function qH(a,b){this.a=a
this.b=b},
qi:function qi(a,b){this.a=a
this.b=b},
qj:function qj(a){this.a=a},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(){},
mk:function mk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ml:function ml(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q5:function q5(){},
fu:function fu(b,a){this.b=b
this.a=a},
qO:function qO(a,b){this.a=a
this.b=b},
hZ:function hZ(b,c,a){this.b=b
this.c=c
this.a=a},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
pn:function pn(a,b,c){this.a=a
this.b=b
this.c=c},
po:function po(a,b){this.a=a
this.b=b},
pp:function pp(a,b){this.a=a
this.b=b},
dF:function dF(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b){this.a=a
this.b=b},
zg:function(){throw H.m(new P.aa("Cannot modify unmodifiable Map"))},
Hy:function(a){return u.types[a]},
xS:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aQ(a).$isaT},
D:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cJ(a)
if(typeof t!=="string")throw H.m(H.bp(a))
return t},
FU:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.o5(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eu:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ut:function(a,b){if(b==null)throw H.m(new P.bL(a,null,null))
return b.$1(a)},
fi:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.ut(a,c)
if(3>=t.length)return H.x(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.ut(a,c)}if(b<2||b>36)throw H.m(P.bE(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.ak(q,o)|32)>r)return H.ut(a,c)}return parseInt(a,b)},
wI:function(a,b){return b.$1(a)},
wM:function(a,b){var t,s
H.Hk(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wI(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.rX(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wI(a,b)}return t},
nW:function(a){var t,s,r,q,p,o,n,m
t=J.aQ(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.aQ(a).$iseF){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.ak(q,0)===36)q=C.c.au(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rM(H.kd(a),0,null),u.mangledGlobalNames)},
nV:function(a){return"Instance of '"+H.nW(a)+"'"},
Fw:function(){if(!!self.location)return self.location.href
return},
wH:function(a){var t,s,r,q,p
t=J.cj(a)
if(typeof t!=="number")return t.eB()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
FB:function(a){var t,s,r,q
t=H.a([],[P.G])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.ci)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.m(H.bp(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.b6(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.m(H.bp(q))}return H.wH(t)},
wO:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.ci)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.m(H.bp(q))
if(q<0)throw H.m(H.bp(q))
if(q>65535)return H.FB(a)}return H.wH(a)},
FC:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eB()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hE:function(a){var t
if(typeof a!=="number")return H.au(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.b6(t,10))>>>0,56320|t&1023)}}throw H.m(P.bE(a,0,1114111,null,null))},
cV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
wJ:function(a){return a.b?H.cV(a).getUTCFullYear()+0:H.cV(a).getFullYear()+0},
uv:function(a){return a.b?H.cV(a).getUTCMonth()+1:H.cV(a).getMonth()+1},
uu:function(a){return a.b?H.cV(a).getUTCDate()+0:H.cV(a).getDate()+0},
Fx:function(a){return a.b?H.cV(a).getUTCHours()+0:H.cV(a).getHours()+0},
Fz:function(a){return a.b?H.cV(a).getUTCMinutes()+0:H.cV(a).getMinutes()+0},
FA:function(a){return a.b?H.cV(a).getUTCSeconds()+0:H.cV(a).getSeconds()+0},
Fy:function(a){return a.b?H.cV(a).getUTCMilliseconds()+0:H.cV(a).getMilliseconds()+0},
uw:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.m(H.bp(a))
return a[b]},
wN:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.m(H.bp(a))
a[b]=c},
au:function(a){throw H.m(H.bp(a))},
x:function(a,b){if(a==null)J.cj(a)
throw H.m(H.c4(a,b))},
c4:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cZ(!0,b,"index",null)
t=J.cj(a)
if(!(b<0)){if(typeof t!=="number")return H.au(t)
s=b>=t}else s=!0
if(s)return P.bt(b,a,"index",null,t)
return P.jC(b,"index",null)},
Hp:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cZ(!0,a,"start",null)
if(a<0||a>c)return new P.ey(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cZ(!0,b,"end",null)
if(b<a||b>c)return new P.ey(a,c,!0,b,"end","Invalid value")}return new P.cZ(!0,b,"end",null)},
bp:function(a){return new P.cZ(!0,a,null,null)},
kb:function(a){if(typeof a!=="number")throw H.m(H.bp(a))
return a},
v3:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.m(H.bp(a))
return a},
Hk:function(a){if(typeof a!=="string")throw H.m(H.bp(a))
return a},
m:function(a){var t
if(a==null)a=new P.fg()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xZ})
t.name=""}else t.toString=H.xZ
return t},
xZ:function(){return J.cJ(this.dartException)},
ba:function(a){throw H.m(a)},
ci:function(a){throw H.m(new P.bO(a))},
dR:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pt(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
x4:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
u5:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mH(a,s,t?null:b.receiver)},
ct:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rU(a)
if(a==null)return
if(a instanceof H.h1)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.b6(r,16)&8191)===10)switch(q){case 438:return t.$1(H.u5(H.D(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.D(s)+" (Error "+q+")"
return t.$1(new H.jv(p,null))}}if(a instanceof TypeError){o=$.$get$wZ()
n=$.$get$x_()
m=$.$get$x0()
l=$.$get$x1()
k=$.$get$x5()
j=$.$get$x6()
i=$.$get$x3()
$.$get$x2()
h=$.$get$x8()
g=$.$get$x7()
f=o.aT(s)
if(f!=null)return t.$1(H.u5(s,f))
else{f=n.aT(s)
if(f!=null){f.method="call"
return t.$1(H.u5(s,f))}else{f=m.aT(s)
if(f==null){f=l.aT(s)
if(f==null){f=k.aT(s)
if(f==null){f=j.aT(s)
if(f==null){f=i.aT(s)
if(f==null){f=l.aT(s)
if(f==null){f=h.aT(s)
if(f==null){f=g.aT(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jv(s,f==null?null:f.method))}}return t.$1(new H.pv(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jJ()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cZ(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jJ()
return a},
cs:function(a){var t
if(a instanceof H.h1)return a.b
if(a==null)return new H.k5(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.k5(a,null)},
HI:function(a){if(a==null||typeof a!='object')return J.dD(a)
else return H.eu(a)},
xO:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
HD:function(a,b,c,d,e,f,g){switch(c){case 0:return H.k9(b,new H.rH(a))
case 1:return H.k9(b,new H.rI(a,d))
case 2:return H.k9(b,new H.rJ(a,d,e))
case 3:return H.k9(b,new H.rK(a,d,e,f))
case 4:return H.k9(b,new H.rL(a,d,e,f,g))}throw H.m(P.li("Unsupported number of arguments for wrapped closure"))},
dk:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.HD)
a.$identity=t
return t},
zc:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aQ(c).$isr){t.$reflectionInfo=c
r=H.FU(t).r}else r=c
q=d?Object.create(new H.oG().constructor.prototype):Object.create(new H.fJ(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dG
$.dG=J.e8(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.vt(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Hy,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.vq:H.t1
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.m("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.vt(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
z9:function(a,b,c,d){var t=H.t1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
vt:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.zb(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.z9(s,!q,t,b)
if(s===0){q=$.dG
$.dG=J.e8(q,1)
o="self"+H.D(q)
q="return function(){var "+o+" = this."
p=$.fK
if(p==null){p=H.kE("self")
$.fK=p}return new Function(q+H.D(p)+";return "+o+"."+H.D(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dG
$.dG=J.e8(q,1)
n+=H.D(q)
q="return function("+n+"){return this."
p=$.fK
if(p==null){p=H.kE("self")
$.fK=p}return new Function(q+H.D(p)+"."+H.D(t)+"("+n+");}")()},
za:function(a,b,c,d){var t,s
t=H.t1
s=H.vq
switch(b?-1:a){case 0:throw H.m(new H.od("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
zb:function(a,b){var t,s,r,q,p,o,n,m
t=H.z8()
s=$.vp
if(s==null){s=H.kE("receiver")
$.vp=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.za(q,!o,r,b)
if(q===1){s="return function(){return this."+H.D(t)+"."+H.D(r)+"(this."+H.D(s)+");"
o=$.dG
$.dG=J.e8(o,1)
return new Function(s+H.D(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.D(t)+"."+H.D(r)+"(this."+H.D(s)+", "+m+");"
o=$.dG
$.dG=J.e8(o,1)
return new Function(s+H.D(o)+"}")()},
v4:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aQ(c).$isr){c.fixed$length=Array
t=c}else t=c
return H.zc(a,b,t,!!d,e,f)},
t1:function(a){return a.a},
vq:function(a){return a.c},
z8:function(){var t=$.fK
if(t==null){t=H.kE("self")
$.fK=t}return t},
kE:function(a){var t,s,r,q,p
t=new H.fJ("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
HL:function(a,b){var t=J.bg(b)
throw H.m(H.vs(H.nW(a),t.O(b,3,t.gv(b))))},
kf:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aQ(a)[b]
else t=!0
if(t)return a
H.HL(a,b)},
xN:function(a){var t=J.aQ(a)
return"$S" in t?t.$S():null},
fz:function(a,b){var t
if(a==null)return!1
t=H.xN(a)
return t==null?!1:H.v7(t,b)},
vs:function(a,b){return new H.kJ("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
HT:function(a){throw H.m(new P.l1(a))},
rR:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xP:function(a){return u.getIsolateTag(a)},
c_:function(a){return new H.dS(a,null)},
a:function(a,b){a.$ti=b
return a},
kd:function(a){if(a==null)return
return a.$ti},
xQ:function(a,b){return H.v9(a["$as"+H.D(b)],H.kd(a))},
aU:function(a,b,c){var t=H.xQ(a,b)
return t==null?null:t[c]},
O:function(a,b){var t=H.kd(a)
return t==null?null:t[b]},
dC:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rM(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.D(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dC(t,b)
return H.H4(a,b)}return"unknown-reified-type"},
H4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dC(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dC(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dC(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.Hw(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dC(l[j],b)+(" "+H.D(j))}q+="}"}return"("+q+") => "+t},
rM:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.c9("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.R=p+", "
o=a[s]
if(o!=null)q=!1
p=t.R+=H.dC(o,c)}return q?"":"<"+t.H(0)+">"},
ke:function(a){var t,s
if(a instanceof H.eT){t=H.xN(a)
if(t!=null)return H.dC(t,null)}s=J.aQ(a).constructor.builtin$cls
if(a==null)return s
return s+H.rM(a.$ti,0,null)},
v9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dV:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kd(a)
s=J.aQ(a)
if(s[b]==null)return!1
return H.xJ(H.v9(s[d],t),c)},
HS:function(a,b,c,d){if(a==null)return a
if(H.dV(a,b,c,d))return a
throw H.m(H.vs(H.nW(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rM(c,0,null),u.mangledGlobalNames)))},
xJ:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cY(a[s],b[s]))return!1
return!0},
eM:function(a,b,c){return a.apply(b,H.xQ(b,c))},
Hl:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ao"||b.builtin$cls==="d2"
if(b==null)return!0
t=H.kd(a)
a=J.aQ(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.v7(r.apply(a,null),b)}return H.cY(s,b)},
cY:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d2")return!0
if('func' in b)return H.v7(a,b)
if('func' in a)return b.builtin$cls==="HZ"||b.builtin$cls==="ao"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dC(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xJ(H.v9(o,t),r)},
xI:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.cY(t,p)||H.cY(p,t)))return!1}return!0},
Hb:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.cY(p,o)||H.cY(o,p)))return!1}return!0},
v7:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.cY(t,s)||H.cY(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xI(r,q,!1))return!1
if(!H.xI(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cY(i,h)||H.cY(h,i)))return!1}}return H.Hb(a.named,b.named)},
Ia:function(a){var t=$.v5
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
I9:function(a){return H.eu(a)},
I8:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
HE:function(a){var t,s,r,q,p,o
t=$.v5.$1(a)
s=$.rz[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rG[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xH.$2(a,t)
if(t!=null){s=$.rz[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rG[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.v8(r)
$.rz[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rG[t]=r
return r}if(p==="-"){o=H.v8(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xT(a,r)
if(p==="*")throw H.m(new P.eE(t))
if(u.leafTags[t]===true){o=H.v8(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xT(a,r)},
xT:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rN(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
v8:function(a){return J.rN(a,!1,null,!!a.$isaT)},
HG:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rN(t,!1,null,!!t.$isaT)
else return J.rN(t,c,null,null)},
HB:function(){if(!0===$.v6)return
$.v6=!0
H.HC()},
HC:function(){var t,s,r,q,p,o,n,m
$.rz=Object.create(null)
$.rG=Object.create(null)
H.HA()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xU.$1(p)
if(o!=null){n=H.HG(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
HA:function(){var t,s,r,q,p,o,n
t=C.N()
t=H.fy(C.O,H.fy(C.P,H.fy(C.u,H.fy(C.u,H.fy(C.R,H.fy(C.Q,H.fy(C.S(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.v5=new H.rD(p)
$.xH=new H.rE(o)
$.xU=new H.rF(n)},
fy:function(a,b){return a(b)||b},
u0:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.m(new P.bL("Illegal RegExp pattern ("+String(q)+")",a,null))},
HQ:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
xY:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hl){q=b.gdI()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.ba(H.bp(b))
throw H.m("String.replaceAll(Pattern) UNIMPLEMENTED")}},
H9:function(a){return a},
HR:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.b7(0,a),t=new H.jU(t.a,t.b,t.c,null),s=0,r="";t.L();){q=t.d
p=q.b
o=p.index
r=r+H.D(H.xy().$1(C.c.O(a,s,o)))+H.D(c.$1(q))
s=o+p[0].length}t=r+H.D(H.xy().$1(C.c.au(a,s)))
return t.charCodeAt(0)==0?t:t},
kP:function kP(){},
kQ:function kQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
o5:function o5(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pt:function pt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jv:function jv(a,b){this.a=a
this.b=b},
mH:function mH(a,b,c){this.a=a
this.b=b
this.c=c},
pv:function pv(a){this.a=a},
h1:function h1(a,b){this.a=a
this.b=b},
rU:function rU(a){this.a=a},
k5:function k5(a,b){this.a=a
this.b=b},
rH:function rH(a){this.a=a},
rI:function rI(a,b){this.a=a
this.b=b},
rJ:function rJ(a,b,c){this.a=a
this.b=b
this.c=c},
rK:function rK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rL:function rL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eT:function eT(){},
pa:function pa(){},
oG:function oG(){},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kJ:function kJ(a){this.a=a},
od:function od(a){this.a=a},
dS:function dS(a,b){this.a=a
this.b=b},
q:function q(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mG:function mG(a){this.a=a},
mF:function mF(a){this.a=a},
mR:function mR(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mS:function mS(a,$ti){this.a=a
this.$ti=$ti},
mT:function mT(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rD:function rD(a){this.a=a},
rE:function rE(a){this.a=a},
rF:function rF(a){this.a=a},
hl:function hl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k3:function k3(a,b){this.a=a
this.b=b},
q0:function q0(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
r3:function r3(a,b,c){this.a=a
this.b=b
this.c=c},
r4:function r4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cw:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.m(P.dE("Invalid length "+H.D(a)))
return a},
xv:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.dE("Invalid view offsetInBytes "+H.D(b)))},
xx:function(a){return a},
Fu:function(a){return new Int8Array(H.xx(a))},
cO:function(a,b,c){H.xv(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
GZ:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aP()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.m(H.Hp(a,b,c))
return b},
fe:function fe(){},
et:function et(){},
nm:function nm(){},
js:function js(){},
hx:function hx(){},
hz:function hz(){},
hB:function hB(){},
hy:function hy(){},
hA:function hA(){},
hC:function hC(){},
nn:function nn(){},
no:function no(){},
np:function np(){},
nq:function nq(){},
nr:function nr(){},
ns:function ns(){},
nt:function nt(){},
jt:function jt(){},
ff:function ff(){},
Hw:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
HK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aQ:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jn.prototype
return J.jm.prototype}if(typeof a=="string")return J.eo.prototype
if(a==null)return J.mD.prototype
if(typeof a=="boolean")return J.mC.prototype
if(a.constructor==Array)return J.en.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ao)return a
return J.rA(a)},
rN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rA:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.v6==null){H.HB()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.m(new P.eE("Return interceptor for "+H.D(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$u4()]
if(p!=null)return p
p=H.HE(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$u4(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
wx:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
F9:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.ak(a,b)
if(s!==32&&s!==13&&!J.wx(s))break;++b}return b},
u_:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.ad(a,t)
if(s!==32&&s!==13&&!J.wx(s))break}return b},
bg:function(a){if(typeof a=="string")return J.eo.prototype
if(a==null)return a
if(a.constructor==Array)return J.en.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ao)return a
return J.rA(a)},
dl:function(a){if(a==null)return a
if(a.constructor==Array)return J.en.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ao)return a
return J.rA(a)},
dB:function(a){if(typeof a=="number")return J.fc.prototype
if(a==null)return a
if(!(a instanceof P.ao))return J.eF.prototype
return a},
kc:function(a){if(typeof a=="number")return J.fc.prototype
if(typeof a=="string")return J.eo.prototype
if(a==null)return a
if(!(a instanceof P.ao))return J.eF.prototype
return a},
d7:function(a){if(typeof a=="string")return J.eo.prototype
if(a==null)return a
if(!(a instanceof P.ao))return J.eF.prototype
return a},
bJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ep.prototype
return a}if(a instanceof P.ao)return a
return J.rA(a)},
e8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kc(a).a3(a,b)},
bc:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aQ(a).a_(a,b)},
va:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dB(a).aG(a,b)},
cu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dB(a).aP(a,b)},
e9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dB(a).aj(a,b)},
vb:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kc(a).aF(a,b)},
i2:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xS(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bg(a).B(a,b)},
kh:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xS(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dl(a).i(a,b,c)},
y_:function(a,b){return J.dl(a).h(a,b)},
y0:function(a,b,c,d){return J.bJ(a).fT(a,b,c,d)},
y1:function(a,b){return J.d7(a).b7(a,b)},
dW:function(a,b){return J.bJ(a).fV(a,b)},
vc:function(a){return J.bJ(a).fX(a)},
y2:function(a,b,c){return J.dB(a).aq(a,b,c)},
y3:function(a,b){return J.kc(a).aM(a,b)},
y4:function(a,b){return J.bJ(a).aN(a,b)},
y5:function(a,b){return J.bg(a).aw(a,b)},
ki:function(a,b,c){return J.bg(a).e2(a,b,c)},
y6:function(a,b){return J.bJ(a).h5(a,b)},
vd:function(a,b){return J.dl(a).a0(a,b)},
y7:function(a,b,c,d){return J.dl(a).c5(a,b,c,d)},
kj:function(a){return J.dB(a).ax(a)},
y8:function(a,b){return J.dl(a).ao(a,b)},
ve:function(a){return J.bJ(a).ge0(a)},
y9:function(a){return J.bJ(a).gbA(a)},
fB:function(a){return J.bJ(a).gaE(a)},
ya:function(a){return J.bJ(a).gcQ(a)},
dD:function(a){return J.aQ(a).gal(a)},
rV:function(a){return J.bg(a).gaa(a)},
vf:function(a){return J.bJ(a).gab(a)},
d8:function(a){return J.dl(a).gac(a)},
cj:function(a){return J.bg(a).gv(a)},
yb:function(a){return J.bJ(a).ghS(a)},
yc:function(a){return J.bJ(a).ghT(a)},
vg:function(a){return J.aQ(a).gap(a)},
rW:function(a){return J.bJ(a).gaX(a)},
yd:function(a,b){return J.bJ(a).bN(a,b)},
ye:function(a,b){return J.bg(a).bq(a,b)},
vh:function(a,b,c,d,e){return J.bJ(a).ed(a,b,c,d,e)},
vi:function(a,b){return J.dl(a).aJ(a,b)},
yf:function(a,b,c){return J.d7(a).ei(a,b,c)},
vj:function(a,b){return J.bJ(a).hF(a,b)},
yg:function(a,b,c,d){return J.bJ(a).hP(a,b,c,d)},
kk:function(a,b,c){return J.d7(a).d0(a,b,c)},
yh:function(a,b,c){return J.d7(a).hR(a,b,c)},
fC:function(a,b){return J.bJ(a).bi(a,b)},
vk:function(a,b){return J.bJ(a).sbA(a,b)},
yi:function(a,b){return J.dl(a).d9(a,b)},
eN:function(a,b){return J.d7(a).eN(a,b)},
yj:function(a,b){return J.d7(a).au(a,b)},
vl:function(a){return J.dB(a).l(a)},
yk:function(a){return J.dl(a).aC(a)},
yl:function(a,b){return J.dB(a).bK(a,b)},
cJ:function(a){return J.aQ(a).H(a)},
ym:function(a){return J.d7(a).hX(a)},
rX:function(a){return J.d7(a).bs(a)},
yn:function(a){return J.d7(a).eu(a)},
k:function k(){},
mC:function mC(){},
mD:function mD(){},
hm:function hm(){},
nP:function nP(){},
eF:function eF(){},
ep:function ep(){},
en:function en($ti){this.$ti=$ti},
u2:function u2($ti){this.$ti=$ti},
i3:function i3(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fc:function fc(){},
jn:function jn(){},
jm:function jm(){},
eo:function eo(){}},P={
Gy:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.Hc()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dk(new P.q2(t),1)).observe(s,{childList:true})
return new P.q1(t,s,r)}else if(self.setImmediate!=null)return P.Hd()
return P.He()},
Gz:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dk(new P.q3(a),0))},
GA:function(a){++u.globalState.f.b
self.setImmediate(H.dk(new P.q4(a),0))},
GB:function(a){P.uP(C.o,a)},
bz:function(a,b){P.xt(null,a)
return b.ghj()},
cI:function(a,b){P.xt(a,b)},
by:function(a,b){J.y4(b,a)},
bx:function(a,b){b.cM(H.ct(a),H.cs(a))},
xt:function(a,b){var t,s,r,q
t=new P.ri(b)
s=new P.rj(b)
r=J.aQ(a)
if(!!r.$isbj)a.cF(t,s)
else if(!!r.$iscC)a.cc(t,s)
else{q=new P.bj(0,$.aE,null,[null])
q.a=4
q.c=a
q.cF(t,null)}},
bA:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.aE.toString
return new P.rt(t)},
xz:function(a,b){if(H.fz(a,{func:1,args:[P.d2,P.d2]})){b.toString
return a}else{b.toString
return a}},
zU:function(a,b){var t=new P.bj(0,$.aE,null,[b])
P.wY(C.o,new P.ru(a,t))
return t},
vR:function(a,b,c){var t
if(a==null)a=new P.fg()
t=$.aE
if(t!==C.e)t.toString
t=new P.bj(0,t,null,[c])
t.dl(a,b)
return t},
zV:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bj(0,$.aE,null,[P.r])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.lX(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.ci)(a),++l){q=a[l]
p=t.b
q.cc(new P.lW(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bj(0,$.aE,null,[null])
m.dk(C.W)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.ct(j)
n=H.cs(j)
if(t.b===0||!1)return P.vR(o,n,null)
else{t.c=o
t.d=n}}return s},
bq:function(a){return new P.k7(new P.bj(0,$.aE,null,[a]),[a])},
xw:function(a,b,c){$.aE.toString
a.az(b,c)},
GE:function(a,b){var t=new P.bj(0,$.aE,null,[b])
t.a=4
t.c=a
return t},
xl:function(a,b){var t,s,r
b.a=1
try{a.cc(new P.qs(b),new P.qt(b))}catch(r){t=H.ct(r)
s=H.cs(r)
P.xV(new P.qu(b,t,s))}},
qr:function(a,b){var t,s,r
for(;a.gfA();)a=a.c
t=a.gcv()
s=b.c
if(t){b.c=null
r=b.bW(s)
b.a=a.a
b.c=a.c
P.fs(b,r)}else{b.a=2
b.c=a
a.dM(s)}},
fs:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fB(p)
n=p.gaW()
s.toString
P.ka(null,null,s,o,n)}return}for(;b.gcA()!=null;b=m){m=b.a
b.a=null
P.fs(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.ge7()||b.ge6()){k=b.gfR()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fB(p)
n=p.gaW()
s.toString
P.ka(null,null,s,o,n)
return}j=$.aE
if(j==null?k!=null:j!==k)$.aE=k
else j=null
if(b.ge6())new P.qz(t,r,q,b).$0()
else if(s){if(b.ge7())new P.qy(r,b,l).$0()}else if(b.ghq())new P.qx(t,r,b).$0()
if(j!=null)$.aE=j
s=r.b
if(!!J.aQ(s).$iscC){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bW(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qr(s,i)
return}}i=b.b
b=i.bV()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
H6:function(){var t,s
for(;t=$.fw,t!=null;){$.i0=null
s=t.b
$.fw=s
if(s==null)$.i_=null
t.a.$0()}},
H8:function(){$.v1=!0
try{P.H6()}finally{$.i0=null
$.v1=!1
if($.fw!=null)$.$get$uY().$1(P.xK())}},
xG:function(a){var t=new P.jV(a,null)
if($.fw==null){$.i_=t
$.fw=t
if(!$.v1)$.$get$uY().$1(P.xK())}else{$.i_.b=t
$.i_=t}},
H7:function(a){var t,s,r
t=$.fw
if(t==null){P.xG(a)
$.i0=$.i_
return}s=new P.jV(a,null)
r=$.i0
if(r==null){s.b=t
$.i0=s
$.fw=s}else{s.b=r.b
r.b=s
$.i0=s
if(s.b==null)$.i_=s}},
xV:function(a){var t=$.aE
if(C.e===t){P.fx(null,null,C.e,a)
return}t.toString
P.fx(null,null,t,t.cK(a,!0))},
I4:function(a,b){return new P.r2(null,a,!1,[b])},
xD:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.ct(o)
s=H.cs(o)
$.aE.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fB(r)
q=n
p=r.gaW()
c.$2(q,p)}}},
GY:function(a,b,c,d){var t=a.c1(0)
if(!!J.aQ(t).$iscC&&t!==$.$get$hb())t.cf(new P.rl(b,c,d))
else b.az(c,d)},
xu:function(a,b){return new P.rk(a,b)},
v0:function(a,b,c){var t=a.c1(0)
if(!!J.aQ(t).$iscC&&t!==$.$get$hb())t.cf(new P.rm(b,c))
else b.aR(c)},
GD:function(a,b,c,d,e,f,g){var t,s
t=$.aE
s=e?1:0
s=new P.hU(a,null,null,null,null,t,s,null,null,[f,g])
s.f1(b,c,d,e,g)
s.f4(a,b,c,d,e,f,g)
return s},
GX:function(a,b,c){$.aE.toString
a.bP(b,c)},
wY:function(a,b){var t=$.aE
if(t===C.e){t.toString
return P.uP(a,b)}return P.uP(a,t.cK(b,!0))},
uP:function(a,b){var t=C.a.aA(a.a,1000)
return H.Gt(t<0?0:t,b)},
ka:function(a,b,c,d,e){var t={}
t.a=d
P.H7(new P.rs(t,e))},
xA:function(a,b,c,d){var t,s
s=$.aE
if(s===c)return d.$0()
$.aE=c
t=s
try{s=d.$0()
return s}finally{$.aE=t}},
xC:function(a,b,c,d,e){var t,s
s=$.aE
if(s===c)return d.$1(e)
$.aE=c
t=s
try{s=d.$1(e)
return s}finally{$.aE=t}},
xB:function(a,b,c,d,e,f){var t,s
s=$.aE
if(s===c)return d.$2(e,f)
$.aE=c
t=s
try{s=d.$2(e,f)
return s}finally{$.aE=t}},
fx:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cK(d,!(!t||!1))
P.xG(d)},
q2:function q2(a){this.a=a},
q1:function q1(a,b,c){this.a=a
this.b=b
this.c=c},
q3:function q3(a){this.a=a},
q4:function q4(a){this.a=a},
ri:function ri(a){this.a=a},
rj:function rj(a){this.a=a},
rt:function rt(a){this.a=a},
cC:function cC(){},
ru:function ru(a,b){this.a=a
this.b=b},
lX:function lX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lW:function lW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eU:function eU(){},
jW:function jW(){},
dU:function dU(a,$ti){this.a=a
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
qo:function qo(a,b){this.a=a
this.b=b},
qw:function qw(a,b){this.a=a
this.b=b},
qs:function qs(a){this.a=a},
qt:function qt(a){this.a=a},
qu:function qu(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function qq(a,b){this.a=a
this.b=b},
qv:function qv(a,b){this.a=a
this.b=b},
qp:function qp(a,b,c){this.a=a
this.b=b
this.c=c},
qz:function qz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qA:function qA(a){this.a=a},
qy:function qy(a,b,c){this.a=a
this.b=b
this.c=c},
qx:function qx(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b){this.a=a
this.b=b},
di:function di(){},
oN:function oN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oL:function oL(a,b){this.a=a
this.b=b},
oM:function oM(a,b){this.a=a
this.b=b},
oO:function oO(a){this.a=a},
oT:function oT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oR:function oR(a,b){this.a=a
this.b=b},
oS:function oS(){},
oU:function oU(a){this.a=a},
oX:function oX(a){this.a=a},
oY:function oY(a,b){this.a=a
this.b=b},
oV:function oV(a,b){this.a=a
this.b=b},
oW:function oW(a){this.a=a},
oZ:function oZ(a,b){this.a=a
this.b=b},
p_:function p_(a,b){this.a=a
this.b=b},
oP:function oP(a,b,c){this.a=a
this.b=b
this.c=c},
oQ:function oQ(a){this.a=a},
oK:function oK(){},
dj:function dj(){},
q7:function q7(a,b,c){this.a=a
this.b=b
this.c=c},
q6:function q6(a){this.a=a},
jY:function jY(){},
qc:function qc(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qe:function qe(b,c,a){this.b=b
this.c=c
this.a=a},
qd:function qd(){},
qP:function qP(){},
qQ:function qQ(a,b){this.a=a
this.b=b},
r1:function r1(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
r2:function r2(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
rl:function rl(a,b,c){this.a=a
this.b=b
this.c=c},
rk:function rk(a,b){this.a=a
this.b=b},
rm:function rm(a,b){this.a=a
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
qN:function qN(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eP:function eP(a,b){this.a=a
this.b=b},
rh:function rh(){},
rs:function rs(a,b){this.a=a
this.b=b},
qT:function qT(){},
qU:function qU(a,b){this.a=a
this.b=b},
qV:function qV(a,b){this.a=a
this.b=b},
qW:function qW(a,b){this.a=a
this.b=b},
GF:function(a,b){var t=a[b]
return t===a?null:t},
v_:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
uZ:function(){var t=Object.create(null)
P.v_(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wy:function(a,b,c){return H.xO(a,new H.q(0,null,null,null,null,null,0,[b,c]))},
cD:function(a,b){return new H.q(0,null,null,null,null,null,0,[a,b])},
mU:function(){return new H.q(0,null,null,null,null,null,0,[null,null])},
hp:function(a){return H.xO(a,new H.q(0,null,null,null,null,null,0,[null,null]))},
hW:function(a,b){return new P.k2(0,null,null,null,null,null,0,[a,b])},
GG:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
i:function(a,b,c,d,e){return new P.qC(0,null,null,null,null,[d,e])},
tX:function(a,b,c){var t,s
if(P.v2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i1()
s.push(a)
try{P.H5(a,t)}finally{if(0>=s.length)return H.x(s,-1)
s.pop()}s=P.wW(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jj:function(a,b,c){var t,s,r
if(P.v2(a))return b+"..."+c
t=new P.c9(b)
s=$.$get$i1()
s.push(a)
try{r=t
r.R=P.wW(r.gR(),a,", ")}finally{if(0>=s.length)return H.x(s,-1)
s.pop()}s=t
s.R=s.gR()+c
s=t.gR()
return s.charCodeAt(0)==0?s:s},
v2:function(a){var t,s
for(t=0;s=$.$get$i1(),t<s.length;++t)if(a===s[t])return!0
return!1},
H5:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.d8(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.L())return
q=H.D(t.gY())
b.push(q)
s+=q.length+2;++r}if(!t.L()){if(r<=5)return
if(0>=b.length)return H.x(b,-1)
p=b.pop()
if(0>=b.length)return H.x(b,-1)
o=b.pop()}else{n=t.gY();++r
if(!t.L()){if(r<=4){b.push(H.D(n))
return}p=H.D(n)
if(0>=b.length)return H.x(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gY();++r
for(;t.L();n=m,m=l){l=t.gY();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.x(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.D(n)
p=H.D(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.x(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
aj:function(a,b,c,d){return new P.k1(0,null,null,null,null,null,0,[d])},
u8:function(a,b){var t,s
t=P.aj(null,null,null,b)
for(s=J.d8(a);s.L();)t.h(0,s.gY())
return t},
wD:function(a){var t,s,r
t={}
if(P.v2(a))return"{...}"
s=new P.c9("")
try{$.$get$i1().push(a)
r=s
r.R=r.gR()+"{"
t.a=!0
a.ao(0,new P.n8(t,s))
t=s
t.R=t.gR()+"}"}finally{t=$.$get$i1()
if(0>=t.length)return H.x(t,-1)
t.pop()}t=s.gR()
return t.charCodeAt(0)==0?t:t},
u9:function(a,b){var t=new P.mV(null,0,0,0,[b])
t.eX(a,b)
return t},
qC:function qC(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qF:function qF(a){this.a=a},
qD:function qD(a,$ti){this.a=a
this.$ti=$ti},
qE:function qE(a,b,c,d,$ti){var _=this
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
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
dz:function dz(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qG:function qG(){},
fb:function fb(){},
hk:function hk(){},
jo:function jo(){},
hD:function hD(){},
b6:function b6(){},
r9:function r9(){},
n7:function n7(){},
hM:function hM(a,$ti){this.a=a
this.$ti=$ti},
n8:function n8(a,b){this.a=a
this.b=b},
mV:function mV(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qK:function qK(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oq:function oq(){},
op:function op(){},
vo:function(a,b,c,d,e,f){if(C.d.bO(f,4)!==0)throw H.m(new P.bL("Invalid base64 padding, padded length must be multiple of four, is "+H.D(f),a,c))
if(d+e!==f)throw H.m(new P.bL("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.m(new P.bL("Invalid base64 padding, more than two '=' characters",a,b))},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
fO:function fO(){},
fQ:function fQ(){},
lc:function lc(){},
pE:function pE(a){this.a=a},
pF:function pF(a){this.a=a},
rb:function rb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rd:function rd(a){this.a=a},
rc:function rc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Gr:function(a,b,c){var t,s,r,q
if(b<0)throw H.m(P.bE(b,0,J.cj(a),null,null))
t=c==null
if(!t&&c<b)throw H.m(P.bE(c,b,J.cj(a),null,null))
s=J.d8(a)
for(r=0;r<b;++r)if(!s.L())throw H.m(P.bE(b,0,r,null,null))
q=[]
if(t)for(;s.L();)q.push(s.gY())
else for(r=b;r<c;++r){if(!s.L())throw H.m(P.bE(c,b,r,null,null))
q.push(s.gY())}return H.wO(q)},
wW:function(a,b,c){var t=J.d8(b)
if(!t.L())return a
if(c.length===0){do a+=H.D(t.gY())
while(t.L())}else{a+=H.D(t.gY())
for(;t.L();)a=a+c+H.D(t.gY())}return a},
zf:function(a,b){return J.y3(a,b)},
zi:function(a,b){var t=new P.e_(a,b)
t.dg(a,b)
return t},
zj:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.D(t)
if(t>=10)return s+"00"+H.D(t)
return s+"000"+H.D(t)},
zk:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ib:function(a){if(a>=10)return""+a
return"0"+a},
vF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.zC(a)},
zC:function(a){var t=J.aQ(a)
if(!!t.$iseT)return t.H(a)
return H.nV(a)},
dE:function(a){return new P.cZ(!1,null,null,a)},
dX:function(a,b,c){return new P.cZ(!0,a,b,c)},
yo:function(a){return new P.cZ(!1,null,a,"Must not be null")},
wS:function(a){return new P.ey(null,null,!1,null,null,a)},
jC:function(a,b,c){return new P.ey(null,null,!0,a,b,"Value not in range")},
bE:function(a,b,c,d,e){return new P.ey(b,c,!0,a,d,"Invalid value")},
dg:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.au(a)
if(!(0>a)){if(typeof c!=="number")return H.au(c)
t=a>c}else t=!0
if(t)throw H.m(P.bE(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.au(b)
if(!(a>b)){if(typeof c!=="number")return H.au(c)
t=b>c}else t=!0
if(t)throw H.m(P.bE(b,a,c,"end",f))
return b}return c},
bt:function(a,b,c,d,e){var t=e!=null?e:J.cj(b)
return new P.mh(b,t,!0,a,c,"Index out of range")},
li:function(a){return new P.qn(a)},
df:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.d8(a);s.L();)t.push(s.gY())
if(b)return t
t.fixed$length=Array
return t},
Fa:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sv(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
f:function(a,b){var t=P.df(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fA:function(a){H.HK(H.D(a))},
dL:function(a,b,c){return new H.hl(a,H.u0(a,!1,!0,!1),null,null)},
p4:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dg(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.aj()
s=c<t}else s=!0
return H.wO(s?C.b.cj(a,b,c):a)}if(!!J.aQ(a).$isff)return H.FC(a,b,P.dg(b,c,a.length,null,null,null))
return P.Gr(a,b,c)},
xa:function(){var t=H.Fw()
if(t!=null)return P.xb(t,0,null)
throw H.m(new P.aa("'Uri.base' is not supported"))},
xb:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.ak(a,b+4)^58)*3|C.c.ak(a,b)^100|C.c.ak(a,b+1)^97|C.c.ak(a,b+2)^116|C.c.ak(a,b+3)^97)>>>0
if(s===0)return P.x9(b>0||c<c?C.c.O(a,b,c):a,5,null).gew()
else if(s===32)return P.x9(C.c.O(a,t,c),0,null).gew()}r=H.a(new Array(8),[P.G])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xE(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.aG()
if(p>=b)if(P.xE(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.a3()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.aj()
if(typeof l!=="number")return H.au(l)
if(k<l)l=k
if(typeof m!=="number")return m.aj()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.aj()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.aj()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aQ(a,"..",m)))h=l>m+2&&C.c.aQ(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aQ(a,"file",b)){if(o<=b){if(!C.c.aQ(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.O(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aO(a,m,l,"/");++l;++k;++c}else{a=C.c.O(a,b,m)+"/"+C.c.O(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aQ(a,"http",b)){if(q&&n+3===m&&C.c.aQ(a,"80",n+1))if(b===0&&!0){a=C.c.aO(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.O(a,b,n)+C.c.O(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aQ(a,"https",b)){if(q&&n+4===m&&C.c.aQ(a,"443",n+1))if(b===0&&!0){a=C.c.aO(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.O(a,b,n)+C.c.O(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.c.O(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.r0(a,p,o,n,m,l,k,i,null)}return P.GJ(a,b,c,p,o,n,m,l,k,i)},
xd:function(a,b){return C.b.hg(a.split("&"),P.mU(),new P.pB(b))},
Gu:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.py(a)
s=H.cw(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.ad(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fi(C.c.O(a,p,q),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.x(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fi(C.c.O(a,p,c),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.x(r,o)
r[o]=m
return r},
xc:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pz(a)
s=new P.pA(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.ad(a,q)
if(m===58){if(q===b){++q
if(C.c.ad(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.bc(C.b.gbk(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Gu(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.aH()
h=j[1]
if(typeof h!=="number")return H.au(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.aH()
i=j[3]
if(typeof i!=="number")return H.au(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aQ(e).a_(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.x(g,f)
g[f]=0
i=f+1
if(i>=16)return H.x(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.d8()
i=C.d.b6(e,8)
if(f<0||f>=16)return H.x(g,f)
g[f]=i
i=f+1
if(i>=16)return H.x(g,i)
g[i]=e&255
f+=2}}return g},
GJ:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.GR(a,b,d)
else{if(d===b)P.hY(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.GS(a,t,e-1):""
r=P.GN(a,e,f,!1)
if(typeof f!=="number")return f.a3()
q=f+1
if(typeof g!=="number")return H.au(g)
p=q<g?P.GP(H.fi(C.c.O(a,q,g),null,new P.rv(a,f)),j):null}else{s=""
r=null
p=null}o=P.GO(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.aj()
n=h<i?P.GQ(a,h+1,i,null):null
return new P.k8(j,s,r,p,o,n,i<c?P.GM(a,i+1,c):null,null,null,null,null,null)},
xn:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hY:function(a,b,c){throw H.m(new P.bL(c,a,b))},
GP:function(a,b){if(a!=null&&J.bc(a,P.xn(b)))return
return a},
GN:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.ad(a,b)===91){if(typeof c!=="number")return c.ay()
t=c-1
if(C.c.ad(a,t)!==93)P.hY(a,b,"Missing end `]` to match `[` in host")
P.xc(a,b+1,t)
return C.c.O(a,b,c).toLowerCase()}if(typeof c!=="number")return H.au(c)
s=b
for(;s<c;++s)if(C.c.ad(a,s)===58){P.xc(a,b,c)
return"["+a+"]"}return P.GU(a,b,c)},
GU:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.au(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.ad(a,t)
if(p===37){o=P.xs(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.c9("")
m=C.c.O(a,s,t)
l=r.R+=!q?m.toLowerCase():m
if(n){o=C.c.O(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.R=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.x(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.c9("")
if(s<t){r.R+=C.c.O(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.x(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.hY(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.ad(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.c9("")
m=C.c.O(a,s,t)
r.R+=!q?m.toLowerCase():m
r.R+=P.xo(p)
t+=k
s=t}}}}if(r==null)return C.c.O(a,b,c)
if(s<c){m=C.c.O(a,s,c)
r.R+=!q?m.toLowerCase():m}n=r.R
return n.charCodeAt(0)==0?n:n},
GR:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xq(C.c.ak(a,b)))P.hY(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.ak(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.x(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.hY(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.O(a,b,c)
return P.GK(s?a.toLowerCase():a)},
GK:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
GS:function(a,b,c){var t=P.fv(a,b,c,C.Y,!1)
return t==null?C.c.O(a,b,c):t},
GO:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fv(a,b,c,C.D,!1)
if(r==null)r=C.c.O(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.at(r,"/"))r="/"+r
return P.GT(r,e,f)},
GT:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.at(a,"/"))return P.GV(a,!t||c)
return P.GW(a)},
GQ:function(a,b,c,d){var t=P.fv(a,b,c,C.k,!1)
return t==null?C.c.O(a,b,c):t},
GM:function(a,b,c){var t=P.fv(a,b,c,C.k,!1)
return t==null?C.c.O(a,b,c):t},
xs:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.ad(a,b+1)
r=C.c.ad(a,t)
q=H.rC(s)
p=H.rC(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.b6(o,4)
if(t>=8)return H.x(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hE(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.O(a,b,b+3).toUpperCase()
return},
xo:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.ak("0123456789ABCDEF",a>>>4)
t[2]=C.c.ak("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fN(a,6*r)&63|s
if(p>=q)return H.x(t,p)
t[p]=37
n=p+1
m=C.c.ak("0123456789ABCDEF",o>>>4)
if(n>=q)return H.x(t,n)
t[n]=m
m=p+2
n=C.c.ak("0123456789ABCDEF",o&15)
if(m>=q)return H.x(t,m)
t[m]=n
p+=3}}return P.p4(t,0,null)},
fv:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.d7(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.aj()
if(typeof c!=="number")return H.au(c)
if(!(r<c))break
c$0:{o=s.ad(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.x(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xs(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.x(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.hY(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.ad(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.xo(o)}}if(p==null)p=new P.c9("")
p.R+=C.c.O(a,q,r)
p.R+=H.D(m)
if(typeof l!=="number")return H.au(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.aj()
if(q<c)p.R+=s.O(a,q,c)
t=p.R
return t.charCodeAt(0)==0?t:t},
xr:function(a){if(C.c.at(a,"."))return!0
return C.c.bq(a,"/.")!==-1},
GW:function(a){var t,s,r,q,p,o,n
if(!P.xr(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.ci)(s),++p){o=s[p]
if(J.bc(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.x(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.br(t,"/")},
GV:function(a,b){var t,s,r,q,p,o
if(!P.xr(a))return!b?P.xp(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.ci)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.bc(C.b.gbk(t),"..")){if(0>=t.length)return H.x(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.x(t,0)
s=J.rV(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.bc(C.b.gbk(t),".."))t.push("")
if(!b){if(0>=t.length)return H.x(t,0)
s=P.xp(t[0])
if(0>=t.length)return H.x(t,0)
t[0]=s}return C.b.br(t,"/")},
xp:function(a){var t,s,r,q
t=J.bg(a)
s=t.gv(a)
if(typeof s!=="number")return s.aG()
if(s>=2&&P.xq(t.ad(a,0))){r=1
while(!0){s=t.gv(a)
if(typeof s!=="number")return H.au(s)
if(!(r<s))break
q=t.ad(a,r)
if(q===58)return C.c.O(a,0,r)+"%3A"+C.c.au(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.x(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
GL:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.ad(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.m(P.dE("Invalid URL encoding"))}}return t},
ra:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.au(c)
t=J.d7(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.ad(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.O(a,b,c)
else o=new H.kM(t.O(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.ad(a,s)
if(q>127)throw H.m(P.dE("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.m(P.dE("Truncated URI"))
o.push(P.GL(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pF(!1).h3(o)},
xq:function(a){var t=a|32
return 97<=t&&t<=122},
x9:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bg(a)
r=b
q=-1
p=null
while(!0){o=s.gv(a)
if(typeof o!=="number")return H.au(o)
if(!(r<o))break
c$0:{p=s.ad(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.m(new P.bL("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.m(new P.bL("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gv(a)
if(typeof o!=="number")return H.au(o)
if(!(r<o))break
p=s.ad(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbk(t)
if(p!==44||r!==m+7||!s.aQ(a,"base64",m+1))throw H.m(new P.bL("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hC(0,a,o,s.gv(a))
else{l=P.fv(a,o,s.gv(a),C.k,!0)
if(l!=null)a=s.aO(a,o,s.gv(a),l)}return new P.px(a,t,c)},
H2:function(){var t,s,r,q,p
t=P.Fa(22,new P.rp(),!0,P.d5)
s=new P.ro(t)
r=new P.rq()
q=new P.rr()
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
xE:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xF()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.x(t,d)
r=t[d]
q=C.c.ak(a,s)^96
p=J.i2(r,q>95?31:q)
if(typeof p!=="number")return p.aV()
d=p&31
o=C.d.b6(p,5)
if(o>=8)return H.x(e,o)
e[o]=s}return d},
d6:function d6(){},
bF:function bF(){},
e_:function e_(a,b){this.a=a
this.b=b},
a4:function a4(){},
dH:function dH(a){this.a=a},
l9:function l9(){},
la:function la(){},
ed:function ed(){},
fg:function fg(){},
cZ:function cZ(a,b,c,d){var _=this
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
mh:function mh(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a){this.a=a},
eE:function eE(a){this.a=a},
dP:function dP(a){this.a=a},
bO:function bO(a){this.a=a},
nC:function nC(){},
jJ:function jJ(){},
l1:function l1(a){this.a=a},
qn:function qn(a){this.a=a},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
lj:function lj(a,bS,$ti){this.a=a
this.bS=bS
this.$ti=$ti},
G:function G(){},
p:function p(){},
jl:function jl(){},
r:function r(){},
bn:function bn(){},
d2:function d2(){},
dn:function dn(){},
ao:function ao(){},
dv:function dv(){},
ez:function ez(){},
dO:function dO(){},
C:function C(){},
c9:function c9(R){this.R=R},
eG:function eG(){},
pB:function pB(a){this.a=a},
py:function py(a){this.a=a},
pz:function pz(a){this.a=a},
pA:function pA(a,b){this.a=a
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
rv:function rv(a,b){this.a=a
this.b=b},
px:function px(a,b,c){this.a=a
this.b=b
this.c=c},
rp:function rp(){},
ro:function ro(a){this.a=a},
rq:function rq(){},
rr:function rr(){},
r0:function r0(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qb:function qb(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
xL:function(a){var t,s,r,q,p
if(a==null)return
t=P.mU()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.ci)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
Hm:function(a){var t,s
t=new P.bj(0,$.aE,null,[null])
s=new P.dU(t,[null])
a.then(H.dk(new P.rx(s),1))["catch"](H.dk(new P.ry(s),1))
return t},
t7:function(){var t=$.vC
if(t==null){t=J.ki(window.navigator.userAgent,"Opera",0)
$.vC=t}return t},
vE:function(){var t=$.vD
if(t==null){t=P.t7()!==!0&&J.ki(window.navigator.userAgent,"WebKit",0)
$.vD=t}return t},
zl:function(){var t,s
t=$.vz
if(t!=null)return t
s=$.vA
if(s==null){s=J.ki(window.navigator.userAgent,"Firefox",0)
$.vA=s}if(s)t="-moz-"
else{s=$.vB
if(s==null){s=P.t7()!==!0&&J.ki(window.navigator.userAgent,"Trident/",0)
$.vB=s}if(s)t="-ms-"
else t=P.t7()===!0?"-o-":"-webkit-"}$.vz=t
return t},
r5:function r5(){},
r7:function r7(a,b){this.a=a
this.b=b},
pZ:function pZ(){},
q_:function q_(a,b){this.a=a
this.b=b},
r6:function r6(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
rx:function rx(a){this.a=a},
ry:function ry(a){this.a=a},
kS:function kS(){},
kT:function kT(a){this.a=a},
H0:function(a){var t,s,r
t=new P.bj(0,$.aE,null,[null])
s=new P.k7(t,[null])
a.toString
r=W.a6
W.fr(a,"success",new P.rn(a,s),!1,r)
W.fr(a,"error",s.ge1(),!1,r)
return t},
l3:function l3(){},
rn:function rn(a,b){this.a=a
this.b=b},
mg:function mg(){},
nz:function nz(){},
hH:function hH(){},
pr:function pr(){},
GI:function(a){var t=new P.qR(0,0)
t.f5(a)
return t},
qI:function qI(){},
qR:function qR(a,b){this.a=a
this.b=b},
qS:function qS(){},
bV:function bV(){},
kl:function kl(){},
ea:function ea(){},
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
lz:function lz(){},
lP:function lP(){},
cm:function cm(){},
me:function me(){},
d1:function d1(){},
mN:function mN(){},
iJ:function iJ(){},
j2:function j2(){},
n9:function n9(){},
na:function na(){},
d3:function d3(){},
nw:function nw(){},
iK:function iK(){},
j3:function j3(){},
nM:function nM(){},
nR:function nR(){},
ol:function ol(){},
p3:function p3(){},
iL:function iL(){},
j4:function j4(){},
kr:function kr(a){this.a=a},
ca:function ca(){},
p6:function p6(){},
p8:function p8(){},
eD:function eD(){},
pg:function pg(){},
d4:function d4(){},
ps:function ps(){},
iM:function iM(){},
j5:function j5(){},
pD:function pD(){},
pH:function pH(){},
pI:function pI(){},
hV:function hV(){},
qX:function qX(){},
qY:function qY(){},
qZ:function qZ(){},
bh:function bh(){},
d5:function d5(){},
fH:function fH(){},
eQ:function eQ(){},
fI:function fI(){},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
bB:function bB(){},
dY:function dY(){},
kR:function kR(){},
kn:function kn(){},
o7:function o7(){},
re:function re(){},
jI:function jI(){},
iN:function iN(){},
j6:function j6(){}},W={
z6:function(a){if(a!=null)return new Audio(a)
return new Audio()},
z7:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
zh:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
GC:function(a){var t=new W.q9(a,null)
t.f2(a)
return t},
vS:function(a,b,c){return W.vT(a,null,null,b,null,null,null,c).bd(new W.m8())},
vT:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e2
s=new P.bj(0,$.aE,null,[t])
r=new P.dU(s,[t])
q=new XMLHttpRequest()
C.L.hE(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.I3
W.fr(q,"load",new W.m9(r,q),!1,t)
W.fr(q,"error",r.ge1(),!1,t)
q.send()
return s},
vU:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
xm:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fr:function(a,b,c,d,e){var t=W.Ha(new W.qm(c))
t=new W.ql(0,a,b,t,!1,[e])
t.f3(a,b,c,!1,e)
return t},
H1:function(a){var t
if(!!J.aQ(a).$isec)return a
t=new P.jT([],[],!1)
t.c=!0
return t.bf(a)},
Ha:function(a){var t=$.aE
if(t===C.e)return a
return t.fZ(a,!0)},
aC:function aC(){},
eO:function eO(){},
ko:function ko(){},
eR:function eR(){},
cK:function cK(){},
kv:function kv(){},
fW:function fW(){},
fZ:function fZ(){},
kz:function kz(){},
eS:function eS(){},
kD:function kD(){},
fN:function fN(){},
eb:function eb(){},
kO:function kO(){},
i7:function i7(){},
fR:function fR(){},
kU:function kU(){},
kV:function kV(){},
fS:function fS(){},
fT:function fT(){},
kW:function kW(){},
bK:function bK(){},
eV:function eV(){},
iB:function iB(){},
q9:function q9(a,b){this.a=a
this.b=b},
jw:function jw(){},
qa:function qa(){},
i9:function i9(){},
kX:function kX(){},
kY:function kY(){},
l2:function l2(){},
eW:function eW(){},
ia:function ia(){},
ec:function ec(){},
ic:function ic(){},
id:function id(){},
l5:function l5(){},
ie:function ie(){},
ig:function ig(){},
iC:function iC(){},
iW:function iW(){},
ih:function ih(){},
ii:function ii(){},
jZ:function jZ(a,$ti){this.a=a
this.$ti=$ti},
dr:function dr(){},
lb:function lb(){},
fV:function fV(){},
lh:function lh(){},
a6:function a6(){},
aV:function aV(){},
lL:function lL(){},
cc:function cc(){},
f3:function f3(){},
iD:function iD(){},
iX:function iX(){},
lM:function lM(){},
lN:function lN(){},
lO:function lO(){},
lS:function lS(){},
lT:function lT(){},
ix:function ix(){},
cl:function cl(){},
m5:function m5(){},
f5:function f5(){},
iE:function iE(){},
iY:function iY(){},
iz:function iz(){},
e2:function e2(){},
m8:function m8(){},
m9:function m9(a,b){this.a=a
this.b=b},
hc:function hc(){},
md:function md(){},
hd:function hd(){},
f7:function f7(){},
mi:function mi(){},
mK:function mK(){},
hn:function hn(){},
ho:function ho(){},
n1:function n1(){},
n6:function n6(){},
hv:function hv(){},
jq:function jq(){},
nc:function nc(){},
nd:function nd(){},
hw:function hw(){},
cn:function cn(){},
jr:function jr(){},
iO:function iO(){},
j7:function j7(){},
nu:function nu(){},
nv:function nv(){},
aO:function aO(){},
ju:function ju(){},
iP:function iP(){},
j8:function j8(){},
ny:function ny(){},
nD:function nD(){},
nH:function nH(){},
nJ:function nJ(){},
e4:function e4(){},
nO:function nO(){},
ce:function ce(){},
jB:function jB(){},
iQ:function iQ(){},
j9:function j9(){},
nU:function nU(){},
jD:function jD(){},
fl:function fl(){},
jE:function jE(){},
oo:function oo(){},
or:function or(){},
os:function os(){},
ou:function ou(){},
co:function co(){},
jG:function jG(){},
fX:function fX(){},
h_:function h_(){},
hJ:function hJ(){},
cp:function cp(){},
jH:function jH(){},
iR:function iR(){},
ja:function ja(){},
fm:function fm(){},
oB:function oB(){},
cg:function cg(){},
oC:function oC(){},
oD:function oD(){},
oJ:function oJ(){},
ch:function ch(){},
e6:function e6(){},
pc:function pc(){},
pe:function pe(){},
cQ:function cQ(){},
cG:function cG(){},
ph:function ph(){},
iS:function iS(){},
jb:function jb(){},
pi:function pi(){},
fY:function fY(){},
h0:function h0(){},
pm:function pm(){},
cr:function cr(){},
jL:function jL(){},
iT:function iT(){},
jc:function jc(){},
fo:function fo(){},
jM:function jM(){},
e7:function e7(){},
pC:function pC(){},
pG:function pG(){},
fp:function fp(){},
jN:function jN(){},
pL:function pL(){},
jQ:function jQ(){},
pS:function pS(){},
eH:function eH(){},
fq:function fq(){},
q8:function q8(){},
hR:function hR(){},
iU:function iU(){},
jd:function jd(){},
jX:function jX(){},
iV:function iV(){},
je:function je(){},
qf:function qf(){},
qg:function qg(){},
k0:function k0(){},
iF:function iF(){},
iZ:function iZ(){},
qB:function qB(){},
hX:function hX(){},
iG:function iG(){},
j_:function j_(){},
r_:function r_(){},
k4:function k4(){},
iH:function iH(){},
j0:function j0(){},
k6:function k6(){},
iI:function iI(){},
j1:function j1(){},
rf:function rf(){},
rg:function rg(){},
qh:function qh(a){this.a=a},
qk:function qk(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
hS:function hS(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ql:function ql(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qm:function qm(a){this.a=a},
bs:function bs(){},
lQ:function lQ(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
r8:function r8(){}},T={
tv:function(a,b,c,d){var t
H.HS(a,"$isr",[P.G],"$asr")
t=new T.he(a,null,d,b,null)
t.eW(a,b,c,d)
return t},
wG:function(a,b){return new T.nE(0,a,new Uint8Array(H.cw(b==null?32768:b)))},
Gw:function(a){var t=new T.pV(-1,0,0,0,0,null,null,"",[])
t.f_(a)
return t},
Gx:function(a,b){var t=new T.pW(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.f0(a,b)
return t},
f6:function(a){var t=new T.ma(null,0,2147483647)
t.eV(a)
return t},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
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
d9:function d9(a){this.a=a},
he:function he(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nE:function nE(a,b,c){this.a=a
this.b=b
this.c=c},
pV:function pV(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pW:function pW(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
pX:function pX(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
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
pU:function pU(a){this.a=a},
ma:function ma(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kC:function kC(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.a9=a9
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
_.y2=y2},
kF:function kF(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.a9=a9
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
_.y2=y2},
l4:function l4(){},
m2:function m2(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.a9=a9
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
_.y2=y2},
FW:function(a,b,c,d,e){var t,s
t=[P.C]
s=H.a([],t)
t=new T.hI("Glitch",0.01,0.01,0.01,s,0.5,a,new H.q(0,null,null,null,null,null,0,[X.H,P.a4]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.A(null,null,A.a8),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.F]),H.a([],[A.fL]),1)
t.ag(a,b,c,d,e)
return t},
hI:function hI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
zp:function(a,b,c,d){var t,s,r,q
t=new B.dq(new P.c9(""),0,0)
t.av(a,8)
c.toString
s=H.cO(c,0,null)
for(r=s.length,q=0;q<r;++q)t.av(s[q],8)
return t.be(b)},
zo:function(a,b,c,d){var t,s,r,q,p
t=H.cw(c)
s=new Uint8Array(t)
r=new B.da(null,0)
r.a=J.dW(a,b)
for(q=0;q<c;++q){p=r.am(8)
if(q>=t)return H.x(s,q)
s[q]=p}return s},
zn:function(a,b,c,d){var t,s,r,q,p
t=new B.dq(new P.c9(""),0,0)
t.av(a,8)
s=d.gcU()
r=C.f.ax(Math.log(H.kb(s.gv(s)))/0.6931471805599453)+1
c.toString
q=H.cO(c,0,null)
for(s=q.length,p=0;p<s;++p)t.av(q[p],r)
return t.be(b)},
zm:function(a,b,c,d){var t,s,r,q,p,o
t=H.cw(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ax(Math.log(r.gv(r))/0.6931471805599453)+1
p=new B.da(null,0)
p.a=J.dW(a,b)
for(o=0;o<c;++o){r=p.am(q)
if(o>=t)return H.x(s,o)
s[o]=r}return s}},S={km:function km(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},kK:function kK(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},bG:function bG(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},i6:function i6(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},m7:function m7(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mL:function mL(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},n4:function n4(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},nh:function nh(m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.y2=y2},on:function on(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},fh:function fh(){},uQ:function uQ(){},uR:function uR(){},uS:function uS(){},td:function td(){},tg:function tg(){},t4:function t4(){},uA:function uA(){},uU:function uU(){},uV:function uV(){},kI:function kI(){},uq:function uq(){},ul:function ul(){},mQ:function mQ(){},t8:function t8(){},rZ:function rZ(){},l_:function l_(){},u7:function u7(){},l0:function l0(){},nI:function nI(){},uH:function uH(){},uE:function uE(){},uI:function uI(){},rY:function rY(){},lZ:function lZ(){},kG:function kG(){},t3:function t3(){},t2:function t2(){},ur:function ur(){},uJ:function uJ(){},us:function us(){},tf:function tf(){},te:function te(){},uG:function uG(){},uF:function uF(){},pj:function pj(){},uL:function uL(){},t5:function t5(){},t6:function t6(){},uT:function uT(){},hu:function hu(){},ud:function ud(){},ue:function ue(){},uf:function uf(){},ug:function ug(){},uB:function uB(){},uC:function uC(){},uD:function uD(){},uc:function uc(){},ui:function ui(){},uj:function uj(){},ts:function ts(){},tt:function tt(){},tu:function tu(){},uk:function uk(){},uh:function uh(){},t0:function t0(){},uN:function uN(){},uO:function uO(){},uM:function uM(){},
HF:function(){A.rB()
W.vS(C.c.aF("../",N.up())+"navbar.txt",null,null).bd(O.HH())}},K={bX:function bX(a,b){this.a=a
this.b=b},mO:function mO(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},oi:function oi(m,n,p,w,q,t,u,A,C,D,E,F,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
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
_.y2=y2},cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c}},L={
yp:function(a,b,c,d,e,f,g){var t,s,r
t=P.C
s=A.dZ
r=P.G
r=new L.P(P.i(null,null,null,t,s),P.i(null,null,null,r,s),P.i(null,null,null,t,r),P.i(null,null,null,r,t))
r.j(0,$.S,L.b("#FF9B00"),!0)
r.j(0,$.U,L.b("#FF9B00"),!0)
r.j(0,$.T,L.b("#FF8700"),!0)
r.j(0,$.a2,L.b("#7F7F7F"),!0)
r.j(0,$.a1,L.b("#727272"),!0)
r.j(0,$.W,L.b("#A3A3A3"),!0)
r.j(0,$.X,L.b("#999999"),!0)
r.j(0,$.V,L.b("#898989"),!0)
r.j(0,$.a0,L.b("#EFEFEF"),!0)
r.j(0,$.a_,L.b("#DBDBDB"),!0)
r.j(0,$.Z,L.b("#C6C6C6"),!0)
r.j(0,$.Y,L.b("#ADADAD"),!0)
s=[t]
t=new L.fF(0.01,0.01,0.01,0.5,a,new H.q(0,null,null,null,null,null,0,[X.H,P.a4]),null,"","",!1,b,null,c,d,e,g,f,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.F]),H.a([],[A.fL]),Q.A(null,null,A.a8))
t.S(a,b,c,d,e,f,g)
return t},
b:function(a){if(C.c.at(a,"#"))return A.vv(C.c.au(a,1))
else return A.vv(a)},
fF:function fF(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
_.y2=y2},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kA:function kA(m,n,p,w,q,t,u,A,C,D,E,F,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
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
_.y2=y2},
lB:function lB(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
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
_.y2=y2},
m1:function m1(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
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
_.y2=y2},
ne:function ne(m,n,p,w,q,t,u,A,C,D,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
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
_.x2=x2
_.y1=y1
_.y2=y2},
o_:function o_(m,n,p,w,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},
o1:function o1(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
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
_.y2=y2},
o2:function o2(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
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
_.y2=y2},
o3:function o3(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
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
_.y2=y2},
ok:function ok(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
ot:function ot(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
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
_.y2=y2},
p9:function p9(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2}},M={kq:function kq(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fM:function fM(a,b){this.a=a
this.b=b},kZ:function kZ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},h3:function h3(){},bw:function bw(a,b){this.a=a
this.b=b},oE:function oE(a){this.a=a},pO:function pO(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2}},U={ku:function ku(){},n3:function n3(a){this.a=a},nB:function nB(a){this.a=a},p0:function p0(){},p1:function p1(a){this.a=a},p2:function p2(a){this.a=a},l7:function l7(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a9,c3,c4,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.a9=a9
_.c3=c3
_.c4=c4
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
_.y2=y2},lA:function lA(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},n5:function n5(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r2=r2},c:function c(a){this.a=a},ab:function ab(b,c,a){this.b=b
this.c=c
this.a=a},at:function at(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},oF:function oF(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
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
_.y2=y2},pk:function pk(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
Gv:function(a){if(J.d7(a).at(a," "))return C.c.au(a,1)
return a},
pP:function pP(a){this.a=a},
pQ:function pQ(a,b){this.a=a
this.b=b},
pR:function pR(a,b){this.a=a
this.b=b}},O={kw:function kw(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},c7:function c7(){},dp:function dp(){},kB:function kB(a){this.a=a},eC:function eC(){},ij:function ij(){},lR:function lR(m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.y2=y2},ow:function ow(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
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
_.y2=y2},
HJ:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.up()
a=J.yh(a,P.dL("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.rP(t))
s=document
J.vh(s.querySelector("#navbar"),"beforeend",a,C.t,null)
if(J.bc(O.Hx("seerOfVoid",null),"true"))P.zU(new O.rQ(),P.d2)
r=new P.e_(Date.now(),!1)
if(H.uv(r)===4&&H.uu(r)===1)J.ve(s.querySelector("body")).h(0,"voidbody")
q=H.uv(r)
p=H.uu(r)
o=C.a.H(H.wJ(r))
n=C.a.H(q)
m=C.a.H(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.hG(null,null)
k.ci(H.fi(l,null,null))
k.hB()
if($.Gl||k.a.c8()>0.99)H.kf(s.querySelector("#today"),"$iseO").href=C.c.aF("../",t)+"dead_index.html?seed="+l
else H.kf(s.querySelector("#today"),"$iseO").href=C.c.aF("../",t)+"index2.html?seed="+l},
Hx:function(a,b){var t,s,r,q
t=P.xa().gcZ().B(0,a)
if(t!=null)t=P.ra(t,0,J.cj(t),C.n,!1)
if(t!=null)return t
s=$.xW
if(s.length!==0){r=J.yj(window.location.href,J.ye(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.xb(H.xY(s,q,"")+"?"+$.xW,0,null).gcZ().B(0,a)}return},
HU:function(){var t,s,r,q
t=document
J.ve(t.querySelector("body")).h(0,"voidbody")
s=new W.jZ(t.querySelectorAll(".void"),[null])
for(t=new H.er(s,s.gv(s),0,null,[null]);t.L();){r=t.d
q=J.y9(J.rW(r))
if(q==="none"||q.length===0)O.HO(r)
else O.Hz(r)}},
HO:function(a){var t,s
if(a==null)return
t=J.bJ(a)
s=t.gaX(a)
J.vk(s,!!t.$ishJ?"inline":"block")},
Hz:function(a){if(a==null)return
J.vk(J.rW(a),"none")},
HP:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fA("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.eN(s,",")
if(!J.y5(r,a))window.localStorage.setItem(t,H.D(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.ct(q)
P.fA("Saving isn't possible....you don't have local storage")}},
rP:function rP(a){this.a=a},
rQ:function rQ(){},
rO:function rO(){},
cU:function cU(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={pf:function pf(a){this.a=a},o0:function o0(a){this.a=a},kH:function kH(a){this.a=a},m_:function m_(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r2=r2},m0:function m0(rx,ry,x1,x2,y1,y2,m,n,p,w,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r2=r2},nx:function nx(b,a){this.b=b
this.a=a},dN:function dN(a,b){this.a=a
this.b=b},ap:function ap(a,b){this.a=a
this.b=b},d_:function d_(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},nl:function nl(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},c1:function c1(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},a5:function a5(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},i8:function i8(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bC:function bC(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cW:function cW(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kL:function kL(c,a,b){this.c=c
this.a=a
this.b=b},br:function br(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jy:function jy(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iw:function iw(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jA:function jA(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},og:function og(m,n,p,w,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},oh:function oh(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oj:function oj(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},ov:function ov(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r2=r2},dM:function dM(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nk:function(){var t=0,s=P.bq(),r,q
var $async$nk=P.bA(function(a,b){if(a===1)return P.bx(b,s)
while(true)switch(t){case 0:P.fA("loading big bads")
r=$
q=J
t=2
return P.cI(A.es("BigBadLists/bigBads.txt",!1,!1,null),$async$nk)
case 2:r.wE=q.eN(b,"\n")
return P.by(null,s)}})
return P.bz($async$nk,s)},
Hj:function(a){var t,s,r,q,p,o
t=J.eN(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.ci)(t),++q){p=t[q]
o=J.bg(p)
r+=" "+(J.ym(o.B(p,0))+o.au(p,1))}return r},
dm:function(){var t,s,r
for(t="#",s=0;s<6;++s){r=C.d.ax($.$get$xR().a.c8()*16)
if(r<0||r>=16)return H.x("0123456789ABCDEF",r)
t+="0123456789ABCDEF"[r]}return t}},A={kN:function kN(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
j:function(a,b,c,d,e){var t=new A.a8(c,e,null,a,!1,P.aj(null,null,null,G.a7),0,3)
t.P(a,b,c,!1,e)
return t},
a8:function a8(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mB:function mB(){},
mA:function mA(){},
ng:function ng(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
oA:function oA(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
nT:function nT(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
oy:function oy(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
pq:function pq(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.a9=a9
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
_.y2=y2},
o4:function o4(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
lY:function lY(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
fL:function fL(){},
fP:function(a,b,c,d){var t=new A.dZ(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eU(a,b,c,d)
return t},
vu:function(a,b,c,d){var t=A.fP(0,0,0,255)
t.b=C.a.aq(C.d.ax(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.aq(C.d.ax(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.aq(C.d.ax(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.aq(C.d.ax(d*255),0,255)
return t},
zd:function(a,b){if(b){if(typeof a!=="number")return a.aV()
return A.fP((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aV()
return A.fP((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
vv:function(a){return A.zd(H.fi(a,16,new A.rw()),a.length>=8)},
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
rw:function rw(){},
wC:function(){if($.wA)return
$.wA=!0
Z.zL()},
es:function(a,b,c,d){var t=0,s=P.bq(),r,q,p,o,n
var $async$es=P.bA(function(e,f){if(e===1)return P.bx(f,s)
while(true)switch(t){case 0:A.wC()
t=$.$get$cT().ae(0,a)?3:5
break
case 3:q=$.$get$cT().B(0,a)
p=J.aQ(q)
if(!!p.$isdM){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cH(q)
t=1
break}}else throw H.m("Requested resource ("+a+") is an unexpected type: "+H.D(J.vg(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.ub==null?8:9
break
case 8:t=10
return P.cI(A.n0(),$async$es)
case 10:case 9:n=$.ub.eA(a)
t=n!=null?11:12
break
case 11:t=13
return P.cI(A.mW(n),$async$es)
case 13:if(!$.$get$cT().ae(0,a))$.$get$cT().i(0,a,new Y.dM(a,null,H.a([],[[P.eU,,]]),[null]))
r=$.$get$cT().B(0,a).b
t=1
break
case 12:case 7:r=A.Fc(a,!1,d)
t=1
break
case 4:case 1:return P.by(r,s)}})
return P.bz($async$es,s)},
n0:function(){var t=0,s=P.bq(),r
var $async$n0=P.bA(function(a,b){if(a===1)return P.bx(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cI(A.es("manifest/manifest.txt",!1,!0,$.vO),$async$n0)
case 2:r.ub=b
return P.by(null,s)}})
return P.bz($async$n0,s)},
Fb:function(a){if(!$.$get$cT().ae(0,a))$.$get$cT().i(0,a,new Y.dM(a,null,H.a([],[[P.eU,,]]),[null]))
return $.$get$cT().B(0,a)},
Fc:function(a,b,c){var t
if($.$get$cT().ae(0,a))throw H.m("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vN(C.b.gbk(a.split("."))).a
t=A.Fb(a)
c.bc(A.wz(a,!1)).bd(new A.mZ(t))
return t.cH(0)},
mW:function(a){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mW=P.bA(function(b,a0){if(b===1)return P.bx(a0,s)
while(true)switch(t){case 0:t=3
return P.cI(A.es(a+".bundle",!1,!0,null),$async$mW)
case 3:q=a0
p=C.c.O(a,0,C.c.ef(a,$.$get$wB()))
o=P.d2
n=new P.dU(new P.bj(0,$.aE,null,[o]),[o])
m=H.a([],[P.cC])
for(o=J.ya(q),l=o.length,k=[[P.eU,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.ci)(o),++i){h=o[i]
g=J.bJ(h)
f=Z.vN(C.b.gbk(J.eN(g.gN(h),"."))).a
e=p+"/"+H.D(g.gN(h))
if($.$get$cT().ae(0,e)){m.push(A.es(e,!1,!1,null))
continue}d=H.kf(g.gbp(h),"$isd5")
if(!$.$get$cT().ae(0,e))$.$get$cT().i(0,e,new Y.dM(e,null,H.a([],k),j))
c=$.$get$cT().B(0,e)
m.push(c.cH(0))
f.bj(d.buffer).bd(new A.mX(f,c))}P.zV(m,null,!1).bd(new A.mY(n))
r=n.a
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$mW,s)},
hq:function(a,b){var t=0,s=P.bq(),r,q,p,o,n
var $async$hq=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:if($.$get$ua().ae(0,a)){r=$.$get$ua().B(0,a)
t=1
break}q=W.fl
p=new P.bj(0,$.aE,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.fr(n,"load",new A.n_(new P.dU(p,[q]),n),!1,W.a6)
n.src=A.wz(a,!1)
r=p
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$hq,s)},
wz:function(a,b){if(C.c.at(a,"/")){a=C.c.au(a,1)
b=!0}else b=!1
if(b)return H.D(window.location.protocol)+"//"+H.D(window.location.host)+"/"+a
return C.c.aF("../",N.up())+a},
mZ:function mZ(a){this.a=a},
mX:function mX(a,b){this.a=a
this.b=b},
mY:function mY(a){this.a=a},
n_:function n_(a,b){this.a=a
this.b=b},
nG:function nG(){},
jx:function jx(){},
FS:function(a){var t=new A.hG(null,null)
t.ci(a)
return t},
hG:function hG(a,b){this.a=a
this.b=b},
rB:function(){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$rB=P.bA(function(a3,a4){if(a3===1)return P.bx(a4,s)
while(true)switch(t){case 0:if($.xM){t=1
break}$.xM=!0
D.Gq()
q=P.C
p=[q]
o=H.a(["metal"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,0.3)
$.$get$d().h(0,o)
$.E=o
o=H.a(["dutton"],p)
n=$.am
H.a([],p)
o=new G.bH(n,o,0.6)
$.$get$d().h(0,o)
$.w4=o
o=H.a(["ceramic"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$d().h(0,o)
$.bR=o
o=H.a(["bone"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,0.2)
$.$get$d().h(0,o)
$.b9=o
o=H.a(["wood"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$d().h(0,o)
$.a9=o
o=H.a(["plastic"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$d().h(0,o)
$.aS=o
o=H.a(["rubber"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$d().h(0,o)
$.c2=o
o=H.a(["paper"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$d().h(0,o)
$.M=o
o=H.a(["cloth","fabric"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$d().h(0,o)
$.R=o
o=H.a(["glass"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$d().h(0,o)
$.b_=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$d().h(0,o)
$.bY=o
o=H.a(["flesh","meat","muscle"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$d().h(0,o)
$.be=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.J
H.a([],p)
o=new G.bH(n,o,3.1)
$.$get$d().h(0,o)
$.bk=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$d().h(0,o)
$.cd=o
o=H.a(["plant","leaf","vine"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$d().h(0,o)
$.b5=o
o=H.a(["feathery"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$d().h(0,o)
$.bu=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.K
H.a([],p)
o=new G.bH(n,o,0.1)
$.$get$d().h(0,o)
$.bT=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.K
H.a([],p)
o=new G.bH(n,o,-13)
$.$get$d().h(0,o)
$.bS=o
o=H.a(["stone","rock","concrete"],p)
n=$.w
H.a([],p)
o=new G.bH(n,o,0.3)
$.$get$d().h(0,o)
$.aD=o
o=H.a(["legendary"],p)
n=$.mz
H.a([],p)
o=new G.bH(n,o,13)
$.$get$d().h(0,o)
$.ac=o
o=H.a(["Unbeatable"],p)
n=$.mz
H.a([],p)
o=new G.bH(n,o,40.37)
$.$get$d().h(0,o)
$.ET=o
o=$.K
H.a([],p)
o=new G.aX(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$d().h(0,o)
$.aH=o
o=$.tW
H.a([],p)
o=new G.aX(o,["glowing","bright","illuminated"],0.1)
$.$get$d().h(0,o)
$.b0=o
o=$.tW
H.a([],p)
o=new G.aX(o,["obscuring","dark","shadowy"],0.1)
$.$get$d().h(0,o)
$.az=o
o=$.K
H.a([],p)
o=new G.aX(o,["calming","pale","placating","shooshing"],0.1)
$.$get$d().h(0,o)
$.bo=o
o=$.J
H.a([],p)
o=new G.aX(o,["nuclear","radioactive","irradiated"],1)
$.$get$d().h(0,o)
$.bZ=o
o=$.K
H.a([],p)
o=new G.aX(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$d().h(0,o)
$.b3=o
o=$.K
H.a([],p)
o=new G.aX(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$d().h(0,o)
$.bD=o
o=$.K
H.a([],p)
o=new G.aX(o,["doomed","cursed","unlucky"],-0.3)
$.$get$d().h(0,o)
$.aL=o
o=$.J
H.a([],p)
o=new G.aX(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$d().h(0,o)
$.aY=o
o=$.t
H.a([],p)
o=new G.aX(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$d().h(0,o)
$.bm=o
o=$.t
H.a([],p)
o=new G.aX(o,["electrical","zap","lightning","shock"],0.6)
$.$get$d().h(0,o)
$.ag=o
o=$.t
H.a([],p)
o=new G.aX(o,["restraining","imprisoning","restricting"],0.3)
$.$get$d().h(0,o)
$.bf=o
o=$.K
H.a([],p)
o=new G.aX(o,["expensive","valuable","bling","money"],0.1)
$.$get$d().h(0,o)
$.bb=o
o=$.K
H.a([],p)
o=new G.aX(o,["edible","tasty","delicious","savory"],0.1)
$.$get$d().h(0,o)
$.aF=o
o=$.K
H.a([],p)
o=new G.aX(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$d().h(0,o)
$.aq=o
o=$.K
H.a([],p)
o=new G.aX(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$d().h(0,o)
$.ax=o
o=$.K
H.a([],p)
o=new G.aX(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$d().h(0,o)
$.ad=o
o=$.J
H.a([],p)
o=new G.aX(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$d().h(0,o)
$.aA=o
o=$.K
H.a([],p)
o=new G.aX(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$d().h(0,o)
$.aM=o
o=$.K
H.a([],p)
o=new G.aX(o,["funny","hilarious","comedy"],0.1)
$.$get$d().h(0,o)
$.b8=o
o=$.K
H.a([],p)
o=new G.aX(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$d().h(0,o)
$.bl=o
o=$.K
H.a([],p)
o=new G.aX(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$d().h(0,o)
$.af=o
o=$.mz
H.a([],p)
o=new G.aX(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$d().h(0,o)
$.I=o
o=$.mz
H.a([],p)
o=new G.aX(o,["class-related","appropriate","themed"],1.3)
$.$get$d().h(0,o)
$.Q=o
o=$.K
H.a([],p)
o=new G.aX(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$d().h(0,o)
$.aI=o
o=$.t
H.a([],p)
o=new G.aX(o,["healing","regenerating","recovery","life"],0.3)
$.$get$d().h(0,o)
$.b1=o
o=$.K
H.a([],p)
o=new G.aX(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$d().h(0,o)
$.aJ=o
o=$.K
H.a([],p)
o=new G.aX(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$d().h(0,o)
$.b7=o
o=$.K
H.a([],p)
o=new G.aX(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$d().h(0,o)
$.bM=o
o=$.K
H.a([],p)
o=new G.aX(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$d().h(0,o)
$.bi=o
o=$.K
H.a([],p)
o=new G.aX(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$d().h(0,o)
$.c8=o
o=$.K
H.a([],p)
o=new G.aX(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$d().h(0,o)
$.aG=o
o=$.K
H.a([],p)
o=new G.aX(o,["blunt","bludgeoning","dull"],0.3)
$.$get$d().h(0,o)
$.an=o
o=$.t
H.a([],p)
o=new G.aX(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$d().h(0,o)
$.b2=o
o=$.K
H.a([],p)
o=new G.aX(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$d().h(0,o)
$.ak=o
o=$.K
H.a([],p)
o=new G.aX(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$d().h(0,o)
$.aR=o
o=$.K
H.a([],p)
o=new G.aX(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$d().h(0,o)
$.av=o
o=$.K
H.a([],p)
o=new G.aX(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$d().h(0,o)
$.aW=o
o=H.a(["perfectly generic"],p)
n=$.K
H.a([],p)
o=new G.ar(n,o,0.1)
$.$get$d().h(0,o)
$.f9=o
o=H.a(["a sword"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.em=o
o=H.a(["a hammer"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tG=o
o=H.a(["a rifle"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tR=o
o=H.a(["a pistol"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tN=o
o=H.a(["a blade"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.vY=o
o=H.a(["a dagger"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tC=o
o=H.a(["a santa"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.hi=o
o=H.a(["a fist"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.w6=o
o=H.a(["claws"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.mp=o
o=H.a(["a grenade"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.ms=o
o=H.a(["a freaking safe"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wj=o
o=H.a(["a ball"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.el=o
o=H.a(["a trident"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.ws=o
o=H.a(["a card"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.mo=o
o=H.a(["a frying pan"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tE=o
o=H.a(["a pillow"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.e3=o
o=H.a(["a machinegun"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tK=o
o=H.a(["a shuriken"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wn=o
o=H.a(["a sling"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wq=o
o=H.a(["a yoyo"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wu=o
o=H.a(["a cane"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.w_=o
o=H.a(["a shield"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.fa=o
o=H.a(["a lance"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wf=o
o=H.a(["a ax"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tx=o
o=H.a(["a sign"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wi=o
o=H.a(["a book"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.aK=o
o=H.a(["a broom"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.jf=o
o=H.a(["a club"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.jg=o
o=H.a(["a bow"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tz=o
o=H.a(["a whip"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wt=o
o=H.a(["a staff"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wr=o
o=H.a(["a needle"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tL=o
o=H.a(["dice"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tD=o
o=H.a(["a fork"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.w7=o
o=H.a(["a pigeon???"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,1.3)
$.$get$d().h(0,o)
$.tM=o
o=H.a(["a chainsaw"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.w0=o
o=H.a(["a sickle"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wo=o
o=H.a(["a shotgun"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wl=o
o=H.a(["a stick"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.de=o
o=H.a(["a chain"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.hh=o
o=H.a(["a wrench"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tU=o
o=H.a(["a shovel"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wm=o
o=H.a(["a rolling pin"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tT=o
o=H.a(["a puppet"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tO=o
o=H.a(["a razor"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.tQ=o
o=H.a(["a pen"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.mw=o
o=H.a(["a bust"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.hg=o
o=H.a(["a bowling ball"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.Ay=o
o=H.a(["a golf club"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.w9=o
o=H.a(["a knife"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.we=o
o=H.a(["scissors"],p)
n=$.ai
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$d().h(0,o)
$.wk=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.J
m=G.a7
l=[m]
k=H.a([$.E,$.aH,$.aY],l)
H.a([],p)
o=new G.e("Forged",k,n,o,0)
$.$get$d().h(0,o)
$.BQ=o
o=H.a([],p)
n=$.w
k=H.a([$.an,$.aH],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.Bm=o
o=H.a(["fossilized"],p)
n=$.J
k=H.a([$.b9,$.aD],l)
H.a([],p)
o=new G.e("Fossilized",k,n,o,0)
$.$get$d().h(0,o)
$.BR=o
o=H.a(["adamantium"],p)
n=$.J
k=H.a([$.b9,$.E],l)
H.a([],p)
o=new G.e("Adamantium",k,n,o,0)
$.$get$d().h(0,o)
$.vX=o
o=H.a([],p)
n=$.w
k=H.a([$.b7,$.aJ],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.Es=o
o=H.a(["tatami"],p)
n=$.w
k=H.a([$.R,$.a9],l)
H.a([],p)
o=new G.e("Tatami",k,n,o,0)
$.$get$d().h(0,o)
$.EH=o
o=H.a(["mesh","chain link"],p)
n=$.w
k=H.a([$.R,$.E],l)
H.a([],p)
o=new G.e("Mesh",k,n,o,0)
$.$get$d().h(0,o)
$.CQ=o
o=H.a(["foil"],p)
n=$.w
k=H.a([$.M,$.E],l)
H.a([],p)
o=new G.e("Foil",k,n,o,0)
$.$get$d().h(0,o)
$.BM=o
o=H.a(["beanbag"],p)
n=$.w
k=H.a([$.R,$.aD],l)
H.a([],p)
o=new G.e("Beanbag",k,n,o,0)
$.$get$d().h(0,o)
$.Au=o
o=H.a(["pleather","faux fur"],p)
n=$.w
k=H.a([$.cd,$.aS],l)
H.a([],p)
o=new G.e("Faux Fur",k,n,o,0)
$.$get$d().h(0,o)
$.Dq=o
o=H.a(["plywood"],p)
n=$.w
k=H.a([$.a9,$.M],l)
H.a([],p)
o=new G.e("Plywood",k,n,o,0)
$.$get$d().h(0,o)
$.jh=o
o=H.a(["colossus"],p)
n=$.w
k=H.a([$.E,$.be],l)
H.a([],p)
o=new G.e("Colossus",k,n,o,0)
$.$get$d().h(0,o)
$.w1=o
o=H.a(["rotting","zombie"],p)
n=$.J
k=H.a([$.bT,$.be],l)
H.a([],p)
o=new G.e("Rotting",k,n,o,0)
$.$get$d().h(0,o)
$.DQ=o
o=H.a(["draugr","white walker"],p)
n=$.J
k=H.a([$.bT,$.be,$.bi],l)
H.a([],p)
o=new G.e("Draugr",k,n,o,0)
$.$get$d().h(0,o)
$.Bj=o
o=H.a(["Ultraviolet"],p)
n=$.tV
k=H.a([$.b0,$.az],l)
H.a([],p)
o=new G.e("Ultraviolet",k,n,o,0)
$.$get$d().h(0,o)
$.Cz=o
o=H.a(["Ultraviolence"],p)
n=$.t
k=H.a([$.b0,$.az,$.aH],l)
H.a([],p)
o=new G.e("Ultraviolence",k,n,o,0)
$.$get$d().h(0,o)
$.ES=o
o=H.a([],p)
n=$.t
k=H.a([$.aL,$.bD],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.Bh=o
o=H.a(["candy"],p)
n=$.w
k=H.a([$.aF,$.b_],l)
H.a([],p)
o=new G.e("Candy",k,n,o,0)
$.$get$d().h(0,o)
$.tA=o
o=H.a(["cotton candy"],p)
n=$.w
k=H.a([$.aF,$.R],l)
H.a([],p)
o=new G.e("Cotton Candy",k,n,o,0)
$.$get$d().h(0,o)
$.B2=o
o=H.a(["gummy"],p)
n=$.w
k=H.a([$.aF,$.c2],l)
H.a([],p)
o=new G.e("Gum",k,n,o,0)
$.$get$d().h(0,o)
$.C2=o
o=H.a(["marrow"],p)
n=$.w
k=H.a([$.aF,$.b9],l)
H.a([],p)
o=new G.e("Marrow",k,n,o,0)
$.$get$d().h(0,o)
$.CJ=o
o=H.a(["toothy"],p)
n=$.ai
k=H.a([$.b9,$.bR],l)
H.a([],p)
o=new G.e("Toothy",k,n,o,0)
$.$get$d().h(0,o)
$.EP=o
o=H.a(["Frost"],p)
n=$.w
k=H.a([$.aD,$.b_,$.be],l)
H.a([],p)
o=new G.e("Frost",k,n,o,0)
$.$get$d().h(0,o)
$.BS=o
o=H.a(["arsenic","antifreeze"],p)
n=$.t
k=H.a([$.aF,$.bM],l)
H.a([],p)
o=new G.e("Arsenic",k,n,o,0)
$.$get$d().h(0,o)
$.Bq=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.w
k=H.a([$.aD,$.b_],l)
H.a([],p)
o=new G.e("Crystal",k,n,o,0)
$.$get$d().h(0,o)
$.mq=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.K
k=H.a([$.aI,$.aM,$.b8,$.ad,$.aq,$.bD,$.af],l)
H.a([],p)
o=new G.e("Mary Sue",k,n,o,0)
$.$get$d().h(0,o)
$.CK=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.K
k=H.a([$.b3,$.az,$.aH,$.ac,$.aL,$.ad,$.aq,$.ax],l)
H.a([],p)
o=new G.e("Edge Lord",k,n,o,0)
$.$get$d().h(0,o)
$.Bo=o
o=H.a(["deadpool"],p)
n=$.ai
k=H.a([$.bT,$.b1,$.ax,$.b8],l)
H.a([],p)
o=new G.e("Deadpool",k,n,o,0)
$.$get$d().h(0,o)
$.B8=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.K
k=H.a([$.b3,$.ax],l)
H.a([],p)
o=new G.e("Spoopy",k,n,o,0)
$.$get$d().h(0,o)
$.Ev=o
o=H.a(["wolverine"],p)
n=$.ai
k=H.a([$.b9,$.aH,$.aY],l)
H.a([],p)
o=new G.e("Wolverine",k,n,o,0)
$.$get$d().h(0,o)
$.F3=o
o=H.a(["rabbit's foot"],p)
n=$.ai
k=H.a([$.bD,$.cd],l)
H.a([],p)
o=new G.e("Rabbit's Foot",k,n,o,0)
$.$get$d().h(0,o)
$.tP=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.J
k=H.a([$.aY,$.a9],l)
H.a([],p)
o=new G.e("Tipped",k,n,o,0)
$.$get$d().h(0,o)
$.An=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.ai
k=H.a([$.aY,$.b2,$.a9],l)
H.a([],p)
o=new G.e("Arrow",k,n,o,0)
$.$get$d().h(0,o)
$.tw=o
o=H.a(["training sword","bokken"],p)
n=$.ai
k=H.a([$.a9,$.aH],l)
H.a([],p)
o=new G.e("Bokken",k,n,o,0)
$.$get$d().h(0,o)
$.Cs=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.av,$.ax],l)
H.a([],p)
o=new G.e("Irony Type1",k,n,o,0)
$.$get$d().h(0,o)
$.tI=o
o=H.a(["netted","webbed"],p)
n=$.ai
k=H.a([$.bf,$.R],l)
H.a([],p)
o=new G.e("Netted",k,n,o,0)
$.$get$d().h(0,o)
$.D4=o
o=H.a(["barbed wire"],p)
n=$.ai
k=H.a([$.aY,$.bf,$.E,$.R],l)
H.a([],p)
o=new G.e("Barbed Wire",k,n,o,0)
$.$get$d().h(0,o)
$.Ar=o
o=H.a(["morning star"],p)
n=$.ai
k=H.a([$.aY,$.an],l)
H.a([],p)
o=new G.e("Morning Star",k,n,o,0)
$.$get$d().h(0,o)
$.CZ=o
o=H.a(["decadent"],p)
n=$.K
k=H.a([$.b7,$.bb],l)
H.a([],p)
o=new G.e("Decadent",k,n,o,0)
$.$get$d().h(0,o)
$.Bb=o
o=H.a(["SBAHJ"],p)
n=$.t
k=H.a([$.bS,$.ax],l)
H.a([],p)
o=new G.e("SBAHJ",k,n,o,0)
$.$get$d().h(0,o)
$.E_=o
o=H.a(["bayonet"],p)
n=$.ai
k=H.a([$.aY,$.b2],l)
H.a([],p)
o=new G.e("Bayonet",k,n,o,0)
$.$get$d().h(0,o)
$.At=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.w
k=H.a([$.bi,$.ax,$.aH],l)
H.a([],p)
o=new G.e("Snoop",k,n,o,0)
$.$get$d().h(0,o)
$.Er=o
o=H.a(["light saber"],p)
n=$.t
k=H.a([$.b0,$.aG,$.aH],l)
H.a([],p)
o=new G.e("Light Saber",k,n,o,0)
$.$get$d().h(0,o)
$.Cy=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.K
k=H.a([$.af,$.av],l)
H.a([],p)
o=new G.e("Fakey Fake",k,n,o,0)
$.$get$d().h(0,o)
$.Bx=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.K
k=H.a([$.af,$.aW],l)
H.a([],p)
o=new G.e("Real As Shit",k,n,o,0)
$.$get$d().h(0,o)
$.DK=o
o=H.a(["skeletal"],p)
n=$.ai
k=H.a([$.b3,$.aL,$.b9],l)
H.a([],p)
o=new G.e("Skeletal",k,n,o,0)
$.$get$d().h(0,o)
$.El=o
o=H.a(["green sun"],p)
n=$.tW
k=H.a([$.aG,$.bZ,$.b0],l)
H.a([],p)
o=new G.e("Green Sun",k,n,o,0)
$.$get$d().h(0,o)
$.mr=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tV
k=H.a([$.az,$.aq],l)
H.a([],p)
o=new G.e("Midnight",k,n,o,0)
$.$get$d().h(0,o)
$.CU=o
o=H.a(["radiant","dazzling"],p)
n=$.K
k=H.a([$.af,$.b0],l)
H.a([],p)
o=new G.e("Radiant",k,n,o,0)
$.$get$d().h(0,o)
$.DH=o
o=H.a(["edgy"],p)
n=$.K
k=H.a([$.aH,$.az,$.ax],l)
H.a([],p)
o=new G.e("Edgy",k,n,o,0)
$.$get$d().h(0,o)
$.Bp=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.t
k=H.a([$.bZ,$.bm],l)
H.a([],p)
o=new G.e("Warhead",k,n,o,0)
$.$get$d().h(0,o)
$.Ag=o
o=H.a(["living"],p)
n=$.J
k=H.a([$.b9,$.be,$.aA],l)
H.a([],p)
o=new G.e("Living",k,n,o,0)
$.$get$d().h(0,o)
$.CC=o
o=H.a(["dead","corpse","deceased"],p)
n=$.J
k=H.a([$.b9,$.be],l)
H.a([],p)
o=new G.e("Dead",k,n,o,0)
$.$get$d().h(0,o)
$.B7=o
o=H.a(["taser"],p)
n=$.t
k=H.a([$.ag,$.bf,$.b2],l)
H.a([],p)
o=new G.e("Taser",k,n,o,0)
$.$get$d().h(0,o)
$.EG=o
o=H.a(["nocturn"],p)
n=$.t
k=H.a([$.az,$.ak],l)
H.a([],p)
o=new G.e("Nocturn",k,n,o,0)
$.$get$d().h(0,o)
$.D7=o
o=H.a(["dirge"],p)
n=$.t
k=H.a([$.aL,$.ak],l)
H.a([],p)
o=new G.e("Dirge",k,n,o,0)
$.$get$d().h(0,o)
$.Be=o
o=H.a(["Snobbish","Noble"],p)
n=$.K
k=H.a([$.aq,$.bb],l)
H.a([],p)
o=new G.e("Snobbish",k,n,o,0)
$.$get$d().h(0,o)
$.Eq=o
o=H.a(["flat"],p)
n=$.K
k=H.a([$.an,$.ak],l)
H.a([],p)
o=new G.e("Flat(Music)",k,n,o,0)
$.$get$d().h(0,o)
$.BH=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.aH,$.ak],l)
H.a([],p)
o=new G.e("Sharp(Music)",k,n,o,0)
$.$get$d().h(0,o)
$.E8=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.aq,$.ak],l)
H.a([],p)
o=new G.e("Sharp(Clothes)",k,n,o,0)
$.$get$d().h(0,o)
$.E7=o
o=H.a(["Bach's"],p)
n=$.am
k=H.a([$.ad,$.ak],l)
H.a([],p)
o=new G.e("Bach's",k,n,o,0)
$.$get$d().h(0,o)
$.Ap=o
o=H.a(["Mozart's"],p)
n=$.am
k=H.a([$.af,$.ak],l)
H.a([],p)
o=new G.e("Mozart's",k,n,o,0)
$.$get$d().h(0,o)
$.D0=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.am
k=H.a([$.ad,$.bZ],l)
H.a([],p)
o=new G.e("Einstein's",k,n,o,0)
$.$get$d().h(0,o)
$.Br=o
o=H.a(["Feynman's"],p)
n=$.am
k=H.a([$.ad,$.b8],l)
H.a([],p)
o=new G.e("Feynman's",k,n,o,0)
$.$get$d().h(0,o)
$.BB=o
o=H.a(["Ziptie"],p)
n=$.am
k=H.a([$.aS,$.bf],l)
H.a([],p)
o=new G.e("Ziptie",k,n,o,0)
$.$get$d().h(0,o)
$.F7=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.t
k=H.a([$.E,$.ad],l)
H.a([],p)
o=new G.e("Mobile",k,n,o,0)
$.$get$d().h(0,o)
$.hj=o
o=H.a(["Sassacre"],p)
n=$.am
k=H.a([$.c8,$.b8],l)
H.a([],p)
o=new G.e("Sassacre",k,n,o,0)
$.$get$d().h(0,o)
$.DY=o
o=H.a(["Sledge"],p)
n=$.t
k=H.a([$.an,$.c8],l)
H.a([],p)
o=new G.e("Sledge",k,n,o,0)
$.$get$d().h(0,o)
$.Eo=o
o=H.a(["Legal"],p)
n=$.t
k=H.a([$.bf,$.M],l)
H.a([],p)
o=new G.e("Legal",k,n,o,0)
$.$get$d().h(0,o)
$.mu=o
o=H.a(["Clown"],p)
n=$.t
k=H.a([$.b8,$.aR],l)
H.a([],p)
o=new G.e("Clown",k,n,o,0)
$.$get$d().h(0,o)
$.AX=o
o=H.a(["passionate"],p)
n=$.K
k=H.a([$.aG,$.aM],l)
H.a([],p)
o=new G.e("Passionate",k,n,o,0)
$.$get$d().h(0,o)
$.Dh=o
o=H.a(["pinata"],p)
n=$.ai
k=H.a([$.M,$.aF],l)
H.a([],p)
o=new G.e("Pinata",k,n,o,0)
$.$get$d().h(0,o)
$.Dl=o
o=H.a(["anvil"],p)
n=$.t
k=H.a([$.an,$.c8,$.E],l)
H.a([],p)
o=new G.e("Anvil",k,n,o,0)
$.$get$d().h(0,o)
$.Am=o
o=H.a(["flashbang"],p)
n=$.t
k=H.a([$.b0,$.bm],l)
H.a([],p)
o=new G.e("Flashbang",k,n,o,0)
$.$get$d().h(0,o)
$.BG=o
o=H.a(["smokebomb"],p)
n=$.t
k=H.a([$.az,$.bm],l)
H.a([],p)
o=new G.e("Smokebomb",k,n,o,0)
$.$get$d().h(0,o)
$.Ep=o
o=H.a(["ninja"],p)
n=$.t
k=H.a([$.az,$.aH],l)
H.a([],p)
o=new G.e("Ninja",k,n,o,0)
$.$get$d().h(0,o)
$.D6=o
o=H.a(["techno"],p)
n=$.t
k=H.a([$.ag,$.ak],l)
H.a([],p)
o=new G.e("Techno",k,n,o,0)
$.$get$d().h(0,o)
$.EJ=o
o=H.a(["rock and roll"],p)
n=$.t
k=H.a([$.aD,$.ak],l)
H.a([],p)
o=new G.e("Rock And/Or Roll",k,n,o,0)
$.$get$d().h(0,o)
$.DM=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.ai
k=H.a([$.aA,$.be,$.b2],l)
H.a([],p)
o=new G.e("Pistol Shrimp",k,n,o,0)
$.$get$d().h(0,o)
$.Dm=o
o=H.a(["juggalo"],p)
n=$.t
k=H.a([$.b8,$.ak,$.aR,$.b3],l)
H.a([],p)
o=new G.e("Juggalo",k,n,o,0)
$.$get$d().h(0,o)
$.wd=o
o=H.a(["shocksauce"],p)
n=$.K
k=H.a([$.ax,$.ag],l)
H.a([],p)
o=new G.e("Shock Sauce",k,n,o,0)
$.$get$d().h(0,o)
$.Eb=o
o=H.a(["weaksauce"],p)
n=$.K
k=H.a([$.an,$.ax,$.bS],l)
H.a([],p)
o=new G.e("Weak Sauce",k,n,o,0)
$.$get$d().h(0,o)
$.EY=o
o=H.a(["spicy","picante"],p)
n=$.K
k=H.a([$.aG,$.aF],l)
H.a([],p)
o=new G.e("Spicy",k,n,o,0)
$.$get$d().h(0,o)
$.Eu=o
o=H.a(["ice cream","popsicle"],p)
n=$.w
k=H.a([$.bi,$.aF],l)
H.a([],p)
o=new G.e("Popsicle",k,n,o,0)
$.$get$d().h(0,o)
$.Cf=o
o=H.a(["popsickle"],p)
n=$.w
k=H.a([$.bi,$.aF,$.aH],l)
H.a([],p)
o=new G.e("Popsickle",k,n,o,0)
$.$get$d().h(0,o)
$.Dy=o
o=H.a(["icepick"],p)
n=$.w
k=H.a([$.bi,$.aY],l)
H.a([],p)
o=new G.e("Icepick",k,n,o,0)
$.$get$d().h(0,o)
$.Cg=o
o=H.a(["schezwan"],p)
n=$.K
k=H.a([$.ax,$.aF],l)
H.a([],p)
o=new G.e("Schezwan",k,n,o,0)
$.$get$d().h(0,o)
$.E0=o
o=H.a(["vaporwave"],p)
n=$.t
k=H.a([$.az,$.ak,$.ax,$.ag],l)
H.a([],p)
o=new G.e("Vaporwave",k,n,o,0)
$.$get$d().h(0,o)
$.EW=o
o=H.a(["mallet"],p)
n=$.ai
k=H.a([$.a9,$.an],l)
H.a([],p)
o=new G.e("Mallet",k,n,o,0)
$.$get$d().h(0,o)
$.CI=o
o=H.a(["fidget"],p)
n=$.t
k=H.a([$.aS,$.ax],l)
H.a([],p)
o=new G.e("Fidget",k,n,o,0)
$.$get$d().h(0,o)
$.BD=o
o=H.a(["gold foil"],p)
n=$.w
k=H.a([$.E,$.M,$.bb],l)
H.a([],p)
o=new G.e("Gold Foil",k,n,o,0)
$.$get$d().h(0,o)
$.C_=o
o=H.a(["caviar"],p)
n=$.w
k=H.a([$.aF,$.bb],l)
H.a([],p)
o=new G.e("Caviar",k,n,o,0)
$.$get$d().h(0,o)
$.AO=o
o=H.a(["RADioactive"],p)
n=$.K
k=H.a([$.bZ,$.ax],l)
H.a([],p)
o=new G.e("RADioactive",k,n,o,0)
$.$get$d().h(0,o)
$.DI=o
o=H.a(["glam"],p)
n=$.K
k=H.a([$.aD,$.ak,$.aI],l)
H.a([],p)
o=new G.e("Glam",k,n,o,0)
$.$get$d().h(0,o)
$.BY=o
o=H.a(["hair metal"],p)
n=$.K
k=H.a([$.E,$.ak,$.aI],l)
H.a([],p)
o=new G.e("Hair Metal",k,n,o,0)
$.$get$d().h(0,o)
$.C4=o
o=H.a(["elven","fae","sylvan"],p)
n=$.K
k=H.a([$.af,$.aI],l)
H.a([],p)
o=new G.e("Elven",k,n,o,0)
$.$get$d().h(0,o)
$.Bt=o
o=H.a(["shiny"],p)
n=$.K
k=H.a([$.E,$.aI],l)
H.a([],p)
o=new G.e("Shiny",k,n,o,0)
$.$get$d().h(0,o)
$.Ea=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.K
k=H.a([$.bb,$.aI,$.aq],l)
H.a([],p)
o=new G.e("Bespoke",k,n,o,0)
$.$get$d().h(0,o)
$.f8=o
o=H.a(["operatic"],p)
n=$.K
k=H.a([$.bb,$.ak,$.aq],l)
H.a([],p)
o=new G.e("Operatic",k,n,o,0)
$.$get$d().h(0,o)
$.Db=o
o=H.a(["ice","diamond"],p)
n=$.w
k=H.a([$.bb,$.bi],l)
H.a([],p)
o=new G.e("Diamond",k,n,o,0)
$.$get$d().h(0,o)
$.wb=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.K
k=H.a([$.aG,$.bi],l)
H.a([],p)
o=new G.e("Icy Hot",k,n,o,0)
$.$get$d().h(0,o)
$.Ch=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.K
k=H.a([$.ax,$.bi],l)
H.a([],p)
o=new G.e("Cold As Fuck",k,n,o,0)
$.$get$d().h(0,o)
$.wc=o
o=H.a(["winter's","season's"],p)
n=$.am
k=H.a([$.bo,$.bi],l)
H.a([],p)
o=new G.e("Winter's",k,n,o,0)
$.$get$d().h(0,o)
$.F0=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.am
k=H.a([$.af,$.bi],l)
H.a([],p)
o=new G.e("Christmas",k,n,o,0)
$.$get$d().h(0,o)
$.AT=o
o=H.a(["Santa Saws"],p)
n=$.am
k=H.a([$.af,$.bi,$.aH],l)
H.a([],p)
o=new G.e("Santa Saws",k,n,o,0)
$.$get$d().h(0,o)
$.DW=o
o=H.a(["Santa Sleighs"],p)
n=$.am
k=H.a([$.hi,$.aH],l)
H.a([],p)
o=new G.e("Santa Sleighs",k,n,o,0)
$.$get$d().h(0,o)
$.DX=o
o=H.a(["Santa Claws"],p)
n=$.am
k=H.a([$.hi,$.mp],l)
H.a([],p)
o=new G.e("Santa Claws",k,n,o,0)
$.$get$d().h(0,o)
$.DV=o
o=H.a(["Sandy Claws"],p)
n=$.am
k=H.a([$.hi,$.mp,$.aD],l)
H.a([],p)
o=new G.e("Sandy Claws",k,n,o,0)
$.$get$d().h(0,o)
$.DU=o
o=H.a(["Silent Night"],p)
n=$.am
k=H.a([$.hi,$.az],l)
H.a([],p)
o=new G.e("Silent Night",k,n,o,0)
$.$get$d().h(0,o)
$.Eh=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.am
k=H.a([$.b3,$.bY],l)
H.a([],p)
o=new G.e("Ghost's",k,n,o,0)
$.$get$d().h(0,o)
$.C5=o
o=H.a(["ghoul","mutant"],p)
n=$.w
k=H.a([$.be,$.bZ,$.bT],l)
H.a([],p)
o=new G.e("Mutant",k,n,o,0)
$.$get$d().h(0,o)
$.D1=o
o=H.a(["skate","skateboard"],p)
n=$.t
k=H.a([$.ax,$.E],l)
H.a([],p)
o=new G.e("Skateboard",k,n,o,0)
$.$get$d().h(0,o)
$.Ek=o
o=H.a(["microwave"],p)
n=$.t
k=H.a([$.bZ,$.ag,$.aF],l)
H.a([],p)
o=new G.e("Microwave",k,n,o,0)
$.$get$d().h(0,o)
$.CT=o
o=H.a(["orbital"],p)
n=$.t
k=H.a([$.bZ,$.ag,$.aF,$.b2],l)
H.a([],p)
o=new G.e("Orbital",k,n,o,0)
$.$get$d().h(0,o)
$.Dc=o
o=H.a([],p)
n=$.t
k=H.a([$.an,$.ad],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.w3=o
o=H.a(["uranium"],p)
n=$.w
k=H.a([$.bZ,$.aD],l)
H.a([],p)
o=new G.e("Uranium",k,n,o,0)
$.$get$d().h(0,o)
$.EV=o
o=H.a(["mousepad","jar opener"],p)
n=$.t
k=H.a([$.M,$.c2],l)
H.a([],p)
o=new G.e("Mousepad",k,n,o,0)
$.$get$d().h(0,o)
$.D_=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.aH,$.aD],l)
H.a([],p)
o=new G.e("Sharpened Flint",k,n,o,0)
$.$get$d().h(0,o)
$.BJ=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.aY,$.aD],l)
H.a([],p)
o=new G.e("Pointed Flint",k,n,o,0)
$.$get$d().h(0,o)
$.BK=o
o=H.a(["picnic"],p)
n=$.t
k=H.a([$.aS,$.aY],l)
H.a([],p)
o=new G.e("Picnic",k,n,o,0)
$.$get$d().h(0,o)
$.Dk=o
o=H.a(["xtreme xplosion"],p)
n=$.K
k=H.a([$.ax,$.bm],l)
H.a([],p)
o=new G.e("Xtreme Xplosion",k,n,o,0)
$.$get$d().h(0,o)
$.F6=o
o=H.a(["lawn"],p)
n=$.t
k=H.a([$.aS,$.b7],l)
H.a([],p)
o=new G.e("Lawn",k,n,o,0)
$.$get$d().h(0,o)
$.Cw=o
o=H.a(["upholstered"],p)
n=$.w
k=H.a([$.R,$.b7],l)
H.a([],p)
o=new G.e("Upholstered",k,n,o,0)
$.$get$d().h(0,o)
$.EU=o
o=H.a(["leather"],p)
n=$.w
k=H.a([$.be,$.b7],l)
H.a([],p)
o=new G.e("Leather",k,n,o,0)
$.$get$d().h(0,o)
$.tJ=o
o=H.a(["shag"],p)
n=$.w
k=H.a([$.cd,$.b7],l)
H.a([],p)
o=new G.e("Shag",k,n,o,0)
$.$get$d().h(0,o)
$.E6=o
o=H.a(["loyal"],p)
n=$.K
k=H.a([$.an,$.aM],l)
H.a([],p)
o=new G.e("Loyal",k,n,o,0)
$.$get$d().h(0,o)
$.CG=o
o=H.a(["porcelain"],p)
n=$.w
k=H.a([$.aI,$.bR],l)
H.a([],p)
o=new G.e("Porcelain",k,n,o,0)
$.$get$d().h(0,o)
$.ji=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.ai
k=H.a([$.bb,$.bR],l)
H.a([],p)
o=new G.e("Pork Hollow",k,n,o,0)
$.$get$d().h(0,o)
$.DA=o
o=H.a(["n1nj4","katana"],p)
n=$.t
k=H.a([$.ax,$.aH],l)
H.a([],p)
o=new G.e("Katana",k,n,o,0)
$.$get$d().h(0,o)
$.Cq=o
o=H.a(["chocolate"],p)
n=$.w
k=H.a([$.aM,$.aF],l)
H.a([],p)
o=new G.e("Chocolate",k,n,o,0)
$.$get$d().h(0,o)
$.AS=o
o=H.a(["wrapped chocolate"],p)
n=$.w
k=H.a([$.aM,$.aF,$.M,$.E],l)
H.a([],p)
o=new G.e("Wrapped Chocolate",k,n,o,0)
$.$get$d().h(0,o)
$.BN=o
o=H.a(["scratch-n-sniff"],p)
n=$.w
k=H.a([$.ax,$.M],l)
H.a([],p)
o=new G.e("Scratch-n-sniff",k,n,o,0)
$.$get$d().h(0,o)
$.E2=o
o=H.a(["mythril","orichalcum"],p)
n=$.w
k=H.a([$.af,$.E],l)
H.a([],p)
o=new G.e("Mythril",k,n,o,0)
$.$get$d().h(0,o)
$.D2=o
o=H.a(["titanium","steel"],p)
n=$.w
k=H.a([$.an,$.E],l)
H.a([],p)
o=new G.e("Titanium",k,n,o,0)
$.$get$d().h(0,o)
$.EO=o
o=H.a(["lead"],p)
n=$.w
k=H.a([$.c8,$.E],l)
H.a([],p)
o=new G.e("Lead",k,n,o,0)
$.$get$d().h(0,o)
$.wg=o
o=H.a(["satire","parody","onion"],p)
n=$.t
k=H.a([$.av,$.b8],l)
H.a([],p)
o=new G.e("Satire",k,n,o,0)
$.$get$d().h(0,o)
$.Da=o
o=H.a(["comedy gold"],p)
n=$.K
k=H.a([$.bb,$.b8],l)
H.a([],p)
o=new G.e("Comedy Gold",k,n,o,0)
$.$get$d().h(0,o)
$.AZ=o
o=H.a(["dry","sensible chuckle"],p)
n=$.K
k=H.a([$.aq,$.b8],l)
H.a([],p)
o=new G.e("Dry",k,n,o,0)
$.$get$d().h(0,o)
$.Bk=o
o=H.a(["polite"],p)
n=$.K
k=H.a([$.b7,$.av],l)
H.a([],p)
o=new G.e("Polite",k,n,o,0)
$.$get$d().h(0,o)
$.Dw=o
o=H.a(["stradivarius"],p)
n=$.am
k=H.a([$.aq,$.bb,$.a9,$.ak],l)
H.a([],p)
o=new G.e("Stradivarius",k,n,o,0)
$.$get$d().h(0,o)
$.EB=o
o=H.a(["scientistic"],p)
n=$.K
k=H.a([$.ad,$.av],l)
H.a([],p)
o=new G.e("Scientistic",k,n,o,0)
$.$get$d().h(0,o)
$.E1=o
o=H.a(["AI"],p)
n=$.t
k=H.a([$.ag,$.aA],l)
H.a([],p)
o=new G.e("AI",k,n,o,0)
$.$get$d().h(0,o)
$.mm=o
o=H.a(["robotic"],p)
n=$.J
k=H.a([$.E,$.ag,$.aA],l)
H.a([],p)
o=new G.e("Robotic",k,n,o,0)
$.$get$d().h(0,o)
$.tS=o
o=H.a(["shrapnel"],p)
n=$.t
k=H.a([$.a9,$.bm],l)
H.a([],p)
o=new G.e("Shrapnel",k,n,o,0)
$.$get$d().h(0,o)
$.Ed=o
o=H.a(["vocaloid"],p)
n=$.t
k=H.a([$.aA,$.ag,$.ak],l)
H.a([],p)
o=new G.e("Vocaloid",k,n,o,0)
$.$get$d().h(0,o)
$.EX=o
o=H.a(["*Hyun-ae"],p)
n=$.am
k=H.a([$.aA,$.ag,$.aM],l)
H.a([],p)
o=new G.e("*Hyun-ae",k,n,o,0)
$.$get$d().h(0,o)
$.Ce=o
o=H.a(["buckshot"],p)
n=$.t
k=H.a([$.a9,$.b2],l)
H.a([],p)
o=new G.e("Buckshot",k,n,o,0)
$.$get$d().h(0,o)
$.AC=o
o=H.a(["cannon"],p)
n=$.t
k=H.a([$.c8,$.b2],l)
H.a([],p)
o=new G.e("Cannon",k,n,o,0)
$.$get$d().h(0,o)
$.AL=o
o=H.a(["stationary"],p)
n=$.t
k=H.a([$.aq,$.M],l)
H.a([],p)
o=new G.e("Stationary",k,n,o,0)
$.$get$d().h(0,o)
$.Ez=o
o=H.a([],p)
n=$.t
k=H.a([$.aK,$.M],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.De=o
o=H.a([],p)
n=$.t
k=H.a([$.E,$.b2],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.CR=o
o=H.a(["papercut"],p)
n=$.t
k=H.a([$.aH,$.M],l)
H.a([],p)
o=new G.e("Papercut",k,n,o,0)
$.$get$d().h(0,o)
$.Df=o
o=H.a(["squeaky"],p)
n=$.J
k=H.a([$.an,$.c2],l)
H.a([],p)
o=new G.e("Squeaky",k,n,o,0)
$.$get$d().h(0,o)
$.Ew=o
o=H.a(["kazoo"],p)
n=$.t
k=H.a([$.av,$.ak],l)
H.a([],p)
o=new G.e("Kazoo",k,n,o,0)
$.$get$d().h(0,o)
$.Cr=o
o=H.a(["bandaid"],p)
n=$.t
k=H.a([$.b1,$.M],l)
H.a([],p)
o=new G.e("Bandaid",k,n,o,0)
$.$get$d().h(0,o)
$.Aq=o
o=H.a(["gushers"],p)
n=$.t
k=H.a([$.b1,$.aF],l)
H.a([],p)
o=new G.e("Gushers",k,n,o,0)
$.$get$d().h(0,o)
$.C3=o
o=H.a(["medic"],p)
n=$.t
k=H.a([$.b1,$.b2],l)
H.a([],p)
o=new G.e("Medic",k,n,o,0)
$.$get$d().h(0,o)
$.CP=o
o=H.a(["sick nasty","ill"],p)
n=$.J
k=H.a([$.ax,$.bM],l)
H.a([],p)
o=new G.e("Sick Nasty",k,n,o,0)
$.$get$d().h(0,o)
$.Ef=o
o=H.a(["gilded","gold leaf"],p)
n=$.w
k=H.a([$.E,$.a9],l)
H.a([],p)
o=new G.e("Gilded",k,n,o,0)
$.$get$d().h(0,o)
$.BX=o
o=H.a(["charging","power cord"],p)
n=$.t
k=H.a([$.aS,$.ag],l)
H.a([],p)
o=new G.e("Charging",k,n,o,0)
$.$get$d().h(0,o)
$.AR=o
o=H.a(["safety"],p)
n=$.t
k=H.a([$.c2,$.aH],l)
H.a([],p)
o=new G.e("Rubber Safety",k,n,o,0)
$.$get$d().h(0,o)
$.DS=o
o=H.a(["safety"],p)
n=$.t
k=H.a([$.aS,$.aH],l)
H.a([],p)
o=new G.e("Plastic Safety",k,n,o,0)
$.$get$d().h(0,o)
$.DT=o
o=H.a(["thunderous","thor's"],p)
n=$.K
k=H.a([$.aR,$.ag],l)
H.a([],p)
o=new G.e("Thunderous",k,n,o,0)
$.$get$d().h(0,o)
$.EM=o
o=H.a(["screeching","dial up"],p)
n=$.K
k=H.a([$.aR,$.ag,$.ad],l)
H.a([],p)
o=new G.e("Screeching",k,n,o,0)
$.$get$d().h(0,o)
$.E4=o
o=H.a(["mirrored","reflective"],p)
n=$.t
k=H.a([$.b_,$.E],l)
H.a([],p)
o=new G.e("Mirrored",k,n,o,0)
$.$get$d().h(0,o)
$.mv=o
o=H.a(["far seeing","sighted"],p)
n=$.t
k=H.a([$.b_,$.aD,$.af],l)
H.a([],p)
o=new G.e("Far Seeing",k,n,o,0)
$.$get$d().h(0,o)
$.w2=o
o=H.a(["disabling","non lethal"],p)
n=$.t
k=H.a([$.c2,$.b2],l)
H.a([],p)
o=new G.e("Nonlethal",k,n,o,0)
$.$get$d().h(0,o)
$.Bf=o
o=H.a(["fashionable"],p)
n=$.t
k=H.a([$.aI,$.aq],l)
H.a([],p)
o=new G.e("Fashionable",k,n,o,0)
$.$get$d().h(0,o)
$.w5=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.b8,$.ax],l)
H.a([],p)
o=new G.e("Ironic Type 2",k,n,o,0)
$.$get$d().h(0,o)
$.Cl=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.bS,$.b8],l)
H.a([],p)
o=new G.e("Ironic Type 3",k,n,o,0)
$.$get$d().h(0,o)
$.mt=o
o=H.a(["post-ironic"],p)
n=$.K
k=H.a([$.av,$.ax,$.aq],l)
H.a([],p)
o=new G.e("Post Ironic",k,n,o,0)
$.$get$d().h(0,o)
$.DC=o
o=H.a(["monstrous"],p)
n=$.K
k=H.a([$.bT,$.aR,$.b3],l)
H.a([],p)
o=new G.e("Monstrous",k,n,o,0)
$.$get$d().h(0,o)
$.CY=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.t
k=H.a([$.b2,$.ax,$.aq],l)
H.a([],p)
o=new G.e("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$d().h(0,o)
$.DO=o
o=H.a(["golden"],p)
n=$.w
k=H.a([$.E,$.bb],l)
H.a([],p)
o=new G.e("Golden",k,n,o,0)
$.$get$d().h(0,o)
$.tF=o
o=H.a(["platinum"],p)
n=$.w
k=H.a([$.b0,$.E],l)
H.a([],p)
o=new G.e("Platinum",k,n,o,0)
$.$get$d().h(0,o)
$.mx=o
o=H.a(["horseshoe"],p)
n=$.t
k=H.a([$.bD,$.E],l)
H.a([],p)
o=new G.e("Horseshoe",k,n,o,0)
$.$get$d().h(0,o)
$.tH=o
o=H.a(["felt"],p)
n=$.t
k=H.a([$.R,$.cd],l)
H.a([],p)
o=new G.e("Felt",k,n,o,0)
$.$get$d().h(0,o)
$.Bz=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.aD,$.aq],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$d().h(0,o)
$.wh=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.aD,$.c8],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$d().h(0,o)
$.C1=o
o=H.a(["glitched"],p)
n=$.J
k=H.a([$.bk,$.ag],l)
H.a([],p)
o=new G.e("Glitched",k,n,o,0)
$.$get$d().h(0,o)
$.w8=o
o=H.a(["debugging"],p)
n=$.t
k=H.a([$.b1,$.ag],l)
H.a([],p)
o=new G.e("Debugging",k,n,o,0)
$.$get$d().h(0,o)
$.Ba=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.t
k=H.a([$.E,$.aR,$.ak],l)
H.a([],p)
o=new G.e("Metalic",k,n,o,0)
$.$get$d().h(0,o)
$.CS=o
o=H.a(["Simulacrum"],p)
n=$.K
k=H.a([$.aA,$.av],l)
H.a([],p)
o=new G.e("Simulacrum",k,n,o,0)
$.$get$d().h(0,o)
$.Ej=o
o=H.a(["Imitation"],p)
n=$.t
k=H.a([$.aF,$.av],l)
H.a([],p)
o=new G.e("Imitation",k,n,o,0)
$.$get$d().h(0,o)
$.Ci=o
o=H.a(["Placebo"],p)
n=$.t
k=H.a([$.b1,$.av],l)
H.a([],p)
o=new G.e("Placebo",k,n,o,0)
$.$get$d().h(0,o)
$.Do=o
o=H.a(["counterfeit"],p)
n=$.t
k=H.a([$.bb,$.av],l)
H.a([],p)
o=new G.e("Counterfeit",k,n,o,0)
$.$get$d().h(0,o)
$.B3=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.ax,$.aJ,$.b8],l)
H.a([],p)
o=new G.e("Surreal1",k,n,o,0)
$.$get$d().h(0,o)
$.ED=o
o=H.a(["Brainy"],p)
n=$.K
k=H.a([$.ad,$.be],l)
H.a([],p)
o=new G.e("Brainy",k,n,o,0)
$.$get$d().h(0,o)
$.Az=o
o=H.a(["Incendiary"],p)
n=$.t
k=H.a([$.aG,$.bm],l)
H.a([],p)
o=new G.e("Incendiary",k,n,o,0)
$.$get$d().h(0,o)
$.Cj=o
o=H.a(["C-4"],p)
n=$.w
k=H.a([$.bm,$.aS],l)
H.a([],p)
o=new G.e("C-4",k,n,o,0)
$.$get$d().h(0,o)
$.AG=o
o=H.a(["fae"],p)
n=$.t
k=H.a([$.af,$.b0,$.bk],l)
H.a([],p)
o=new G.e("Fae",k,n,o,0)
$.$get$d().h(0,o)
$.Bw=o
o=H.a(["Plutonium"],p)
n=$.w
k=H.a([$.E,$.bZ],l)
H.a([],p)
o=new G.e("Plutonium",k,n,o,0)
$.$get$d().h(0,o)
$.Ds=o
o=H.a(["Lithium"],p)
n=$.w
k=H.a([$.E,$.ag],l)
H.a([],p)
o=new G.e("Lithium",k,n,o,0)
$.$get$d().h(0,o)
$.CB=o
o=H.a(["Molten"],p)
n=$.w
k=H.a([$.E,$.aG],l)
H.a([],p)
o=new G.e("Molten",k,n,o,0)
$.$get$d().h(0,o)
$.CX=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.w
k=H.a([$.aD,$.aG],l)
H.a([],p)
o=new G.e("Magma",k,n,o,0)
$.$get$d().h(0,o)
$.CH=o
o=H.a(["Rusty"],p)
n=$.J
k=H.a([$.E,$.bS],l)
H.a([],p)
o=new G.e("Rusty",k,n,o,0)
$.$get$d().h(0,o)
$.DR=o
o=H.a(["Fonzie"],p)
n=$.t
k=H.a([$.aH,$.ax,$.aq],l)
H.a([],p)
o=new G.e("Fonzie",k,n,o,0)
$.$get$d().h(0,o)
$.BO=o
o=H.a(["Romcom"],p)
n=$.t
k=H.a([$.aM,$.b8],l)
H.a([],p)
o=new G.e("Romcom",k,n,o,0)
$.$get$d().h(0,o)
$.DN=o
o=H.a(["Alluring"],p)
n=$.t
k=H.a([$.aI,$.b0],l)
H.a([],p)
o=new G.e("Alluring",k,n,o,0)
$.$get$d().h(0,o)
$.Aj=o
o=H.a(["Masquerade"],p)
n=$.t
k=H.a([$.aI,$.az],l)
H.a([],p)
o=new G.e("Masquerade",k,n,o,0)
$.$get$d().h(0,o)
$.CL=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.t
k=H.a([$.aD,$.be],l)
H.a([],p)
o=new G.e("Stoneskin",k,n,o,0)
$.$get$d().h(0,o)
$.EA=o
o=H.a(["Psionic"],p)
n=$.t
k=H.a([$.af,$.ad],l)
H.a([],p)
o=new G.e("Psionic",k,n,o,0)
$.$get$d().h(0,o)
$.DF=o
o=H.a(["Dwarven"],p)
n=$.t
k=H.a([$.af,$.aD],l)
H.a([],p)
o=new G.e("Dwarven",k,n,o,0)
$.$get$d().h(0,o)
$.Bn=o
o=H.a(["Elemental","Animated"],p)
n=$.w
k=H.a([$.af,$.aA],l)
H.a([],p)
o=new G.e("Elemental",k,n,o,0)
$.$get$d().h(0,o)
$.Bs=o
o=H.a(["Gourmet"],p)
n=$.K
k=H.a([$.aF,$.aq],l)
H.a([],p)
o=new G.e("Gourmet",k,n,o,0)
$.$get$d().h(0,o)
$.C0=o
o=H.a(["Stained Glass"],p)
n=$.w
k=H.a([$.b_,$.aI,$.bb],l)
H.a([],p)
o=new G.e("Stained Glass",k,n,o,0)
$.$get$d().h(0,o)
$.Ex=o
o=H.a(["Gauze"],p)
n=$.t
k=H.a([$.b1,$.R],l)
H.a([],p)
o=new G.e("Gauze",k,n,o,0)
$.$get$d().h(0,o)
$.BU=o
o=H.a(["Locked"],p)
n=$.J
k=H.a([$.bf,$.bl],l)
H.a([],p)
o=new G.e("Locked",k,n,o,0)
$.$get$d().h(0,o)
$.CD=o
o=H.a(["Etched"],p)
n=$.t
k=H.a([$.aD,$.M],l)
H.a([],p)
o=new G.e("Etched",k,n,o,0)
$.$get$d().h(0,o)
$.Bv=o
o=H.a(["Papyrus"],p)
n=$.w
k=H.a([$.M,$.b5],l)
H.a([],p)
o=new G.e("Papyrus",k,n,o,0)
$.$get$d().h(0,o)
$.Dg=o
o=H.a(["film"],p)
n=$.t
k=H.a([$.M,$.aS],l)
H.a([],p)
o=new G.e("Film",k,n,o,0)
$.$get$d().h(0,o)
$.BE=o
o=H.a(["Saucey"],p)
n=$.w
k=H.a([$.bk,$.bl,$.bT],l)
H.a([],p)
o=new G.e("Saucey",k,n,o,0)
$.$get$d().h(0,o)
$.DZ=o
o=H.a(["Lottery"],p)
n=$.t
k=H.a([$.M,$.bD],l)
H.a([],p)
o=new G.e("Lottery",k,n,o,0)
$.$get$d().h(0,o)
$.CF=o
o=H.a(["Blindfolded"],p)
n=$.t
k=H.a([$.az,$.R],l)
H.a([],p)
o=new G.e("Blindfolded",k,n,o,0)
$.$get$d().h(0,o)
$.vZ=o
o=H.a(["Possessed"],p)
n=$.J
k=H.a([$.bY,$.be],l)
H.a([],p)
o=new G.e("Possessed",k,n,o,0)
$.$get$d().h(0,o)
$.DB=o
o=H.a(["Infernal"],p)
n=$.K
k=H.a([$.bY,$.aG],l)
H.a([],p)
o=new G.e("Infernal",k,n,o,0)
$.$get$d().h(0,o)
$.Ck=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.t
k=H.a([$.a9,$.aW,$.tO,$.aA],l)
H.a([],p)
o=new G.e("Geppetto",k,n,o,0)
$.$get$d().h(0,o)
$.BV=o
o=H.a(["Abominable"],p)
n=$.K
k=H.a([$.be,$.bk],l)
H.a([],p)
o=new G.e("Abominable",k,n,o,0)
$.$get$d().h(0,o)
$.Ah=o
o=H.a(["Ashen"],p)
n=$.t
k=H.a([$.aM,$.aL],l)
H.a([],p)
o=new G.e("Ashen",k,n,o,0)
$.$get$d().h(0,o)
$.Ao=o
o=H.a(["Pale"],p)
n=$.t
k=H.a([$.aM,$.bo],l)
H.a([],p)
o=new G.e("Pale",k,n,o,0)
$.$get$d().h(0,o)
$.Dd=o
o=H.a(["Pitch"],p)
n=$.t
k=H.a([$.aM,$.bl],l)
H.a([],p)
o=new G.e("Pitch",k,n,o,0)
$.$get$d().h(0,o)
$.Dn=o
o=H.a(["Lit"],p)
n=$.K
k=H.a([$.ax,$.aG],l)
H.a([],p)
o=new G.e("Lit",k,n,o,0)
$.$get$d().h(0,o)
$.CA=o
o=H.a(["Hypnotizing"],p)
n=$.t
k=H.a([$.af,$.bo],l)
H.a([],p)
o=new G.e("Hypnotizing",k,n,o,0)
$.$get$d().h(0,o)
$.Cc=o
o=H.a(["Tranquilizing"],p)
n=$.t
k=H.a([$.bo,$.bf],l)
H.a([],p)
o=new G.e("Tranquilizing",k,n,o,0)
$.$get$d().h(0,o)
$.ER=o
o=H.a([],p)
n=$.t
k=H.a([$.bo,$.bl],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.AJ=o
o=H.a(["Ghost Rider's"],p)
n=$.am
k=H.a([$.hh,$.aG,$.bY],l)
H.a([],p)
o=new G.e("Ghost Rider",k,n,o,0)
$.$get$d().h(0,o)
$.BW=o
o=H.a(["Logical"],p)
n=$.K
k=H.a([$.ad,$.bi],l)
H.a([],p)
o=new G.e("Logical",k,n,o,0)
$.$get$d().h(0,o)
$.CE=o
o=H.a(["Duelist's"],p)
n=$.am
k=H.a([$.b2,$.aq],l)
H.a([],p)
o=new G.e("Duelist's",k,n,o,0)
$.$get$d().h(0,o)
$.Bl=o
o=H.a(["Silenced"],p)
n=$.J
k=H.a([$.b2,$.az],l)
H.a([],p)
o=new G.e("Silenced",k,n,o,0)
$.$get$d().h(0,o)
$.wp=o
o=H.a(["Deudly"],p)
n=$.J
k=H.a([$.b2,$.bS],l)
H.a([],p)
o=new G.e("Deudly",k,n,o,0)
$.$get$d().h(0,o)
$.B9=o
o=H.a(["Screaming"],p)
n=$.J
k=H.a([$.aR,$.b3],l)
H.a([],p)
o=new G.e("Screaming",k,n,o,0)
$.$get$d().h(0,o)
$.E3=o
o=H.a(["Cacophonous"],p)
n=$.K
k=H.a([$.bT,$.ak],l)
H.a([],p)
o=new G.e("Cacophonous",k,n,o,0)
$.$get$d().h(0,o)
$.AH=o
o=H.a(["Sublime"],p)
n=$.K
k=H.a([$.bT,$.aI],l)
H.a([],p)
o=new G.e("Sublime",k,n,o,0)
$.$get$d().h(0,o)
$.EC=o
o=H.a(["Masterwork"],p)
n=$.w
k=H.a([$.aW,$.bb],l)
H.a([],p)
o=new G.e("Masterwork",k,n,o,0)
$.$get$d().h(0,o)
$.CN=o
o=H.a(["BroodFester"],p)
n=$.t
k=H.a([$.aA,$.b3,$.bk,$.af],l)
H.a([],p)
o=new G.e("BroodFester",k,n,o,0)
$.$get$d().h(0,o)
$.AB=o
o=H.a(["[REDACTED]"],p)
n=$.t
k=H.a([$.bk,$.az],l)
H.a([],p)
o=new G.e("[REDACTED]",k,n,o,0)
$.$get$d().h(0,o)
$.DL=o
o=H.a(["Pop Rocks"],p)
n=$.t
k=H.a([$.aF,$.bm],l)
H.a([],p)
o=new G.e("Pop Rocks",k,n,o,0)
$.$get$d().h(0,o)
$.Dx=o
o=H.a(["Disguised"],p)
n=$.J
k=H.a([$.az,$.av],l)
H.a([],p)
o=new G.e("Disguised",k,n,o,0)
$.$get$d().h(0,o)
$.Bg=o
o=H.a(["Haunted"],p)
n=$.J
k=H.a([$.aJ,$.bY],l)
H.a([],p)
o=new G.e("Haunted",k,n,o,0)
$.$get$d().h(0,o)
$.C6=o
o=H.a(["Cognitohazardous"],p)
n=$.J
k=H.a([$.bk,$.ad],l)
H.a([],p)
o=new G.e("Cognitohazardous",k,n,o,0)
$.$get$d().h(0,o)
$.AY=o
o=H.a(["Staticy"],p)
n=$.J
k=H.a([$.aJ,$.ag],l)
H.a([],p)
o=new G.e("Staticy",k,n,o,0)
$.$get$d().h(0,o)
$.Ey=o
o=H.a(["Jadite"],p)
n=$.t
k=H.a([$.b_,$.bZ],l)
H.a([],p)
o=new G.e("Jadite",k,n,o,0)
$.$get$d().h(0,o)
$.Co=o
o=H.a(["Tickling"],p)
n=$.t
k=H.a([$.b8,$.aJ],l)
H.a([],p)
o=new G.e("Tickling",k,n,o,0)
$.$get$d().h(0,o)
$.EN=o
o=H.a(["Composite"],p)
n=$.t
k=H.a([$.E,$.bR],l)
H.a([],p)
o=new G.e("Composite",k,n,o,0)
$.$get$d().h(0,o)
$.B_=o
o=H.a(["High-Powered"],p)
n=$.J
k=H.a([$.bm,$.b2],l)
H.a([],p)
o=new G.e("High-Powered",k,n,o,0)
$.$get$d().h(0,o)
$.C7=o
o=H.a(["Concussive"],p)
n=$.t
k=H.a([$.bm,$.an],l)
H.a([],p)
o=new G.e("Concussive",k,n,o,0)
$.$get$d().h(0,o)
$.B0=o
o=H.a(["Down"],p)
n=$.w
k=H.a([$.b7,$.bu],l)
H.a([],p)
o=new G.e("Down",k,n,o,0)
$.$get$d().h(0,o)
$.Bi=o
o=H.a(["Prickly"],p)
n=$.w
k=H.a([$.aJ,$.aY],l)
H.a([],p)
o=new G.e("Prickly",k,n,o,0)
$.$get$d().h(0,o)
$.DE=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.t
k=H.a([$.aJ,$.az,$.ag],l)
H.a([],p)
o=new G.e("Deep-Web",k,n,o,0)
$.$get$d().h(0,o)
$.Bc=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.w
k=H.a([$.aY,$.aH],l)
H.a([],p)
o=new G.e("Jagged",k,n,o,0)
$.$get$d().h(0,o)
$.Cp=o
o=H.a(["Nanofiber"],p)
n=$.w
k=H.a([$.R,$.ad],l)
H.a([],p)
o=new G.e("Nanofiber",k,n,o,0)
$.$get$d().h(0,o)
$.D3=o
o=H.a(["Clanging"],p)
n=$.t
k=H.a([$.E,$.aR],l)
H.a([],p)
o=new G.e("Clanging",k,n,o,0)
$.$get$d().h(0,o)
$.AU=o
o=H.a(["Silver"],p)
n=$.w
k=H.a([$.E,$.aq],l)
H.a([],p)
o=new G.e("Silver",k,n,o,0)
$.$get$d().h(0,o)
$.Ei=o
o=H.a(["Withered"],p)
n=$.J
k=H.a([$.aL,$.b5],l)
H.a([],p)
o=new G.e("Withered",k,n,o,0)
$.$get$d().h(0,o)
$.F2=o
o=H.a(["Shattered"],p)
n=$.J
k=H.a([$.b_,$.bS],l)
H.a([],p)
o=new G.e("Shattered",k,n,o,0)
$.$get$d().h(0,o)
$.E9=o
o=H.a(["Miner's"],p)
n=$.am
k=H.a([$.aD,$.E],l)
H.a([],p)
o=new G.e("Miner's",k,n,o,0)
$.$get$d().h(0,o)
$.CV=o
o=H.a(["Singing"],p)
n=$.t
k=H.a([$.ak,$.aA],l)
H.a([],p)
o=new G.e("Singing",k,n,o,0)
$.$get$d().h(0,o)
$.Eg=o
o=H.a(["Mitochondrial"],p)
n=$.t
k=H.a([$.be,$.ag],l)
H.a([],p)
o=new G.e("Mitochondrial",k,n,o,0)
$.$get$d().h(0,o)
$.CW=o
o=H.a(["Blackout","EMP"],p)
n=$.t
k=H.a([$.az,$.ag],l)
H.a([],p)
o=new G.e("Blackout",k,n,o,0)
$.$get$d().h(0,o)
$.Aw=o
o=H.a(["Asbestos"],p)
n=$.w
k=H.a([$.aD,$.bM],l)
H.a([],p)
o=new G.e("Asbestos",k,n,o,0)
$.$get$d().h(0,o)
$.Ai=o
o=H.a(["Mercurial"],p)
n=$.w
k=H.a([$.bM,$.E],l)
H.a([],p)
o=new G.e("Mercurial",k,n,o,0)
$.$get$d().h(0,o)
$.CO=o
o=H.a(["Bulletproof"],p)
n=$.w
k=H.a([$.R,$.an],l)
H.a([],p)
o=new G.e("Bulletproof",k,n,o,0)
$.$get$d().h(0,o)
$.AE=o
o=H.a(["Cotton"],p)
n=$.w
k=H.a([$.b5,$.R],l)
H.a([],p)
o=new G.e("Cotton",k,n,o,0)
$.$get$d().h(0,o)
$.B1=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.t
k=H.a([$.bl,$.b0],l)
H.a([],p)
o=new G.e("Blinding",k,n,o,0)
$.$get$d().h(0,o)
$.Ax=o
o=H.a(["Brilliant"],p)
n=$.K
k=H.a([$.b0,$.ad],l)
H.a([],p)
o=new G.e("Brilliant",k,n,o,0)
$.$get$d().h(0,o)
$.AA=o
o=H.a(["Offensive"],p)
n=$.K
k=H.a([$.bl,$.ad],l)
H.a([],p)
o=new G.e("Offensive",k,n,o,0)
$.$get$d().h(0,o)
$.D9=o
o=H.a(["Poached"],p)
n=$.J
k=H.a([$.be,$.bb],l)
H.a([],p)
o=new G.e("Poached",k,n,o,0)
$.$get$d().h(0,o)
$.Dt=o
o=H.a(["Tapestry"],p)
n=$.w
k=H.a([$.R,$.aI],l)
H.a([],p)
o=new G.e("Tapestry",k,n,o,0)
$.$get$d().h(0,o)
$.EF=o
o=H.a(["Itchy"],p)
n=$.K
k=H.a([$.R,$.aJ],l)
H.a([],p)
o=new G.e("Itchy",k,n,o,0)
$.$get$d().h(0,o)
$.Cm=o
o=H.a(["Wishbone"],p)
n=$.w
k=H.a([$.bD,$.b9],l)
H.a([],p)
o=new G.e("Wishbone",k,n,o,0)
$.$get$d().h(0,o)
$.F1=o
o=H.a(["Rattling"],p)
n=$.J
k=H.a([$.aR,$.b9],l)
H.a([],p)
o=new G.e("Rattling",k,n,o,0)
$.$get$d().h(0,o)
$.DJ=o
o=H.a(["Cranial"],p)
n=$.w
k=H.a([$.ad,$.b9],l)
H.a([],p)
o=new G.e("Cranial",k,n,o,0)
$.$get$d().h(0,o)
$.B5=o
o=H.a(["Humerus"],p)
n=$.w
k=H.a([$.b8,$.b9],l)
H.a([],p)
o=new G.e("Humerus",k,n,o,0)
$.$get$d().h(0,o)
$.Ca=o
o=H.a(["Massage"],p)
n=$.t
k=H.a([$.b1,$.b7],l)
H.a([],p)
o=new G.e("Massage",k,n,o,0)
$.$get$d().h(0,o)
$.CM=o
o=H.a(["Pestersome","Irksome"],p)
n=$.K
k=H.a([$.aR,$.bl],l)
H.a([],p)
o=new G.e("Pestersome",k,n,o,0)
$.$get$d().h(0,o)
$.Di=o
o=H.a(["Shockwave"],p)
n=$.t
k=H.a([$.aR,$.bm],l)
H.a([],p)
o=new G.e("Shockwave",k,n,o,0)
$.$get$d().h(0,o)
$.Ec=o
o=H.a(["Antivenom"],p)
n=$.t
k=H.a([$.bM,$.b1],l)
H.a([],p)
o=new G.e("Antivenom",k,n,o,0)
$.$get$d().h(0,o)
$.Al=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.w
k=H.a([$.aG,$.af],l)
H.a([],p)
o=new G.e("Will O Wisp",k,n,o,0)
$.$get$d().h(0,o)
$.EZ=o
o=H.a(["Fiberglass"],p)
n=$.w
k=H.a([$.R,$.b_],l)
H.a([],p)
o=new G.e("Fiberglass",k,n,o,0)
$.$get$d().h(0,o)
$.BC=o
o=H.a(["Skull"],p)
n=$.w
k=H.a([$.b9,$.b3],l)
H.a([],p)
o=new G.e("Skull",k,n,o,0)
$.$get$d().h(0,o)
$.Em=o
o=H.a(["Enchanted"],p)
n=$.J
k=H.a([$.af,$.bD],l)
H.a([],p)
o=new G.e("Enchanted",k,n,o,0)
$.$get$d().h(0,o)
$.Bu=o
o=H.a(["Berserker's"],p)
n=$.am
k=H.a([$.af,$.bl],l)
H.a([],p)
o=new G.e("Berserker's",k,n,o,0)
$.$get$d().h(0,o)
$.Av=o
o=H.a(["Clerical"],p)
n=$.am
k=H.a([$.af,$.b1],l)
H.a([],p)
o=new G.e("Clerical",k,n,o,0)
$.$get$d().h(0,o)
$.AV=o
o=H.a(["Cauterizing"],p)
n=$.t
k=H.a([$.b1,$.aG],l)
H.a([],p)
o=new G.e("Cauterizing",k,n,o,0)
$.$get$d().h(0,o)
$.AN=o
o=H.a(["X-Ray"],p)
n=$.t
k=H.a([$.bZ,$.b0],l)
H.a([],p)
o=new G.e("X-Ray",k,n,o,0)
$.$get$d().h(0,o)
$.F5=o
o=H.a(["Clever"],p)
n=$.K
k=H.a([$.ad,$.bD],l)
H.a([],p)
o=new G.e("Clever",k,n,o,0)
$.$get$d().h(0,o)
$.AW=o
o=H.a(["Fireplace"],p)
n=$.t
k=H.a([$.b7,$.aG],l)
H.a([],p)
o=new G.e("Fireplace",k,n,o,0)
$.$get$d().h(0,o)
$.BF=o
o=H.a(["Crackling"],p)
n=$.J
k=H.a([$.aR,$.aG],l)
H.a([],p)
o=new G.e("Crackling",k,n,o,0)
$.$get$d().h(0,o)
$.B4=o
o=H.a(["Thumping"],p)
n=$.J
k=H.a([$.aR,$.c8],l)
H.a([],p)
o=new G.e("Thumping",k,n,o,0)
$.$get$d().h(0,o)
$.EL=o
o=H.a(["Shrieking","Banshee"],p)
n=$.J
k=H.a([$.bY,$.aR],l)
H.a([],p)
o=new G.e("Banshee",k,n,o,0)
$.$get$d().h(0,o)
$.Ee=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.b8,$.bk],l)
H.a([],p)
o=new G.e("Surreal2",k,n,o,0)
$.$get$d().h(0,o)
$.EE=o
o=H.a(["Aloe","Willowbark"],p)
n=$.t
k=H.a([$.b1,$.b5],l)
H.a([],p)
o=new G.e("Aloe",k,n,o,0)
$.$get$d().h(0,o)
$.Ak=o
o=H.a(["Rose"],p)
n=$.t
k=H.a([$.aM,$.b5],l)
H.a([],p)
o=new G.e("Rose",k,n,o,0)
$.$get$d().h(0,o)
$.DP=o
o=H.a(["Knock Knock"],p)
n=$.t
k=H.a([$.b8,$.an],l)
H.a([],p)
o=new G.e("Knock Knock",k,n,o,0)
$.$get$d().h(0,o)
$.Cu=o
o=H.a(["Lifesteal"],p)
n=$.t
k=H.a([$.af,$.bM],l)
H.a([],p)
o=new G.e("Lifesteal",k,n,o,0)
$.$get$d().h(0,o)
$.Cx=o
o=H.a(["Tragic"],p)
n=$.t
k=H.a([$.aI,$.aL],l)
H.a([],p)
o=new G.e("Tragic",k,n,o,0)
$.$get$d().h(0,o)
$.EQ=o
o=H.a(["Slapstick"],p)
n=$.t
k=H.a([$.aH,$.b8],l)
H.a([],p)
o=new G.e("Slapstick",k,n,o,0)
$.$get$d().h(0,o)
$.En=o
o=H.a(["Gross Out"],p)
n=$.t
k=H.a([$.bT,$.b8],l)
H.a([],p)
o=new G.e("Gross Out",k,n,o,0)
$.$get$d().h(0,o)
$.wa=o
o=H.a(["Flowery"],p)
n=$.w
k=H.a([$.aI,$.b5],l)
H.a([],p)
o=new G.e("Flowery",k,n,o,0)
$.$get$d().h(0,o)
$.BL=o
o=H.a(["Poison Ivy"],p)
n=$.w
k=H.a([$.bM,$.b5],l)
H.a([],p)
o=new G.e("Poison Ivy",k,n,o,0)
$.$get$d().h(0,o)
$.Dv=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.J
k=H.a([$.af,$.bu],l)
H.a([],p)
o=new G.e("Winged",k,n,o,0)
$.$get$d().h(0,o)
$.F_=o
o=H.a(["Forbidden Fruit"],p)
n=$.t
k=H.a([$.b5,$.aF,$.aL],l)
H.a([],p)
o=new G.e("Forbidden Fruit",k,n,o,0)
$.$get$d().h(0,o)
$.BP=o
o=H.a(["Lawful"],p)
n=$.K
k=H.a([$.bf,$.aA],l)
H.a([],p)
o=new G.e("Lawful",k,n,o,0)
$.$get$d().h(0,o)
$.Cv=o
o=H.a(["Chaotic"],p)
n=$.K
k=H.a([$.bl,$.aA],l)
H.a([],p)
o=new G.e("Chaotic",k,n,o,0)
$.$get$d().h(0,o)
$.tB=o
o=H.a(["Hypothermic"],p)
n=$.J
k=H.a([$.aL,$.bi],l)
H.a([],p)
o=new G.e("Hypothermic",k,n,o,0)
$.$get$d().h(0,o)
$.Cd=o
o=H.a(["Hyperthermic"],p)
n=$.J
k=H.a([$.aL,$.aG],l)
H.a([],p)
o=new G.e("Hyperthermic",k,n,o,0)
$.$get$d().h(0,o)
$.Cb=o
o=H.a(["Shackled"],p)
n=$.J
k=H.a([$.bf,$.c8],l)
H.a([],p)
o=new G.e("Shackled",k,n,o,0)
$.$get$d().h(0,o)
$.E5=o
o=H.a(["Poetic"],p)
n=$.K
k=H.a([$.ad,$.aM],l)
H.a([],p)
o=new G.e("Poetic",k,n,o,0)
$.$get$d().h(0,o)
$.Du=o
o=H.a(["Holographic"],p)
n=$.w
k=H.a([$.b0,$.ad,$.b_,$.ag],l)
H.a([],p)
o=new G.e("Holographic",k,n,o,0)
$.$get$d().h(0,o)
$.C8=o
o=H.a(["Casket","Coffin"],p)
n=$.w
k=H.a([$.a9,$.aL],l)
H.a([],p)
o=new G.e("Casket",k,n,o,0)
$.$get$d().h(0,o)
$.AM=o
o=H.a(["Spectral"],p)
n=$.w
k=H.a([$.bY,$.af],l)
H.a([],p)
o=new G.e("Spectral",k,n,o,0)
$.$get$d().h(0,o)
$.Et=o
o=H.a(["Phoenix"],p)
n=$.w
k=H.a([$.aG,$.bu],l)
H.a([],p)
o=new G.e("Phoenix",k,n,o,0)
$.$get$d().h(0,o)
$.Dj=o
o=H.a(["Tattered"],p)
n=$.J
k=H.a([$.R,$.aL],l)
H.a([],p)
o=new G.e("Tattered",k,n,o,0)
$.$get$d().h(0,o)
$.EI=o
o=H.a(["Woodwind","Reed"],p)
n=$.t
k=H.a([$.ak,$.a9],l)
H.a([],p)
o=new G.e("Woodwind",k,n,o,0)
$.$get$d().h(0,o)
$.F4=o
o=H.a(["Bone Hurting"],p)
n=$.t
k=H.a([$.aJ,$.b9],l)
H.a([],p)
o=new G.e("Bone Hurting",k,n,o,0)
$.$get$d().h(0,o)
$.mn=o
o=H.a(["Bone Healing:"],p)
n=$.t
k=H.a([$.b1,$.b9],l)
H.a([],p)
o=new G.e("Bone Healing:",k,n,o,0)
$.$get$d().h(0,o)
$.ty=o
o=H.a(["Calcium"],p)
n=$.w
k=H.a([$.b9,$.b1,$.aF],l)
H.a([],p)
o=new G.e("Calcium",k,n,o,0)
$.$get$d().h(0,o)
$.AI=o
o=H.a(["Fleece"],p)
n=$.w
k=H.a([$.R,$.aG],l)
H.a([],p)
o=new G.e("Fleece",k,n,o,0)
$.$get$d().h(0,o)
$.BI=o
o=H.a(["Potted"],p)
n=$.w
k=H.a([$.bR,$.b5],l)
H.a([],p)
o=new G.e("Potted",k,n,o,0)
$.$get$d().h(0,o)
$.DD=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.w
k=H.a([$.E,$.aF],l)
H.a([],p)
o=new G.e("Canned",k,n,o,0)
$.$get$d().h(0,o)
$.AK=o
o=H.a(["Diseased"],p)
n=$.J
k=H.a([$.aL,$.be],l)
H.a([],p)
o=new G.e("Diseased",k,n,o,0)
$.$get$d().h(0,o)
$.Bd=o
o=H.a(["Porcupine"],p)
n=$.w
k=H.a([$.aY,$.cd],l)
H.a([],p)
o=new G.e("Porcupine",k,n,o,0)
$.$get$d().h(0,o)
$.Dz=o
o=H.a(["Fanged"],p)
n=$.J
k=H.a([$.b9,$.aY],l)
H.a([],p)
o=new G.e("Fanged",k,n,o,0)
$.$get$d().h(0,o)
$.By=o
o=H.a(["Basalt"],p)
n=$.w
k=H.a([$.aD,$.az],l)
H.a([],p)
o=new G.e("Basalt",k,n,o,0)
$.$get$d().h(0,o)
$.As=o
o=H.a(["Obsidian"],p)
n=$.w
k=H.a([$.b_,$.az],l)
H.a([],p)
o=new G.e("Obsidian",k,n,o,0)
$.$get$d().h(0,o)
$.D8=o
o=H.a(["Fenestrated"],p)
n=$.w
k=H.a([$.b_,$.a9],l)
H.a([],p)
o=new G.e("Fenestrated",k,n,o,0)
$.$get$d().h(0,o)
$.BA=o
o=H.a(["Plexiglass"],p)
n=$.w
k=H.a([$.b_,$.aS],l)
H.a([],p)
o=new G.e("Plexiglass",k,n,o,0)
$.$get$d().h(0,o)
$.Dr=o
o=H.a(["Ceramic Wrap"],p)
n=$.t
k=H.a([$.bR,$.M],l)
H.a([],p)
o=new G.e("Ceramic Wrap",k,n,o,0)
$.$get$d().h(0,o)
$.AQ=o
o=H.a(["Fungal"],p)
n=$.w
k=H.a([$.b5,$.bT],l)
H.a([],p)
o=new G.e("Fungal",k,n,o,0)
$.$get$d().h(0,o)
$.BT=o
o=H.a(["Thorny"],p)
n=$.J
k=H.a([$.b5,$.aY],l)
H.a([],p)
o=new G.e("Thorny",k,n,o,0)
$.$get$d().h(0,o)
$.EK=o
o=H.a(["Bulbed"],p)
n=$.J
k=H.a([$.b5,$.an],l)
H.a([],p)
o=new G.e("Bulbed",k,n,o,0)
$.$get$d().h(0,o)
$.AD=o
o=H.a(["Glass Cannon"],p)
n=$.t
k=H.a([$.b_,$.b2],l)
H.a([],p)
o=new G.e("Glass Cannon",k,n,o,0)
$.$get$d().h(0,o)
$.BZ=o
o=H.a(["Caoutchouc"],p)
n=$.t
k=H.a([$.b5,$.c2],l)
H.a([],p)
o=new G.e("Caoutchouc",k,n,o,0)
$.$get$d().h(0,o)
$.Dp=o
o=H.a(["Cellulose"],p)
n=$.w
k=H.a([$.b5,$.aS],l)
H.a([],p)
o=new G.e("Cellulose",k,n,o,0)
$.$get$d().h(0,o)
$.AP=o
o=H.a(["Horrorcore"],p)
n=$.t
k=H.a([$.ak,$.b3],l)
H.a([],p)
o=new G.e("Horrorcore",k,n,o,0)
$.$get$d().h(0,o)
$.C9=o
o=H.a(["Nightcore"],p)
n=$.t
k=H.a([$.bk,$.ak],l)
H.a([],p)
o=new G.e("Nightcore",k,n,o,0)
$.$get$d().h(0,o)
$.D5=o
o=H.a(["Crazy Bus"],p)
n=$.t
k=H.a([$.bk,$.ag,$.ak],l)
H.a([],p)
o=new G.e("Crazy Bus",k,n,o,0)
$.$get$d().h(0,o)
$.B6=o
o=H.a(["Burdock"],p)
n=$.w
k=H.a([$.b5,$.cd],l)
H.a([],p)
o=new G.e("Burdock",k,n,o,0)
$.$get$d().h(0,o)
$.AF=o
o=H.a(["Necrotic"],p)
n=$.J
k=H.a([$.b9,$.bY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.w
k=H.a([$.b9,$.b5],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.J
k=H.a([$.b9,$.aL],l)
H.a([],p)
$.$get$d().h(0,new G.e("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.t
k=H.a([$.b9,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.w
k=H.a([$.b9,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.t
k=H.a([$.b9,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.K
k=H.a([$.a9,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.w
k=H.a([$.a9,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.w
k=H.a([$.a9,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.J
k=H.a([$.a9,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.w
k=H.a([$.a9,$.bb],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.w
k=H.a([$.a9,$.bo],l)
H.a([],p)
$.$get$d().h(0,new G.e("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.t
k=H.a([$.a9,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.w
k=H.a([$.a9,$.b0],l)
H.a([],p)
$.$get$d().h(0,new G.e("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.t
k=H.a([$.a9,$.bD],l)
H.a([],p)
$.$get$d().h(0,new G.e("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.t
k=H.a([$.a9,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.am
k=H.a([$.a9,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.w
k=H.a([$.a9,$.b5],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.w
k=H.a([$.a9,$.bk],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.w
k=H.a([$.a9,$.be],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.t
k=H.a([$.a9,$.aD],l)
H.a([],p)
$.$get$d().h(0,new G.e("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.w
k=H.a([$.aS,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.t
k=H.a([$.M,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.w
k=H.a([$.M,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.t
k=H.a([$.M,$.aL],l)
H.a([],p)
$.$get$d().h(0,new G.e("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.t
k=H.a([$.R,$.bY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.w
k=H.a([$.aD,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.t
k=H.a([$.aD,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.w
k=H.a([$.aD,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.w
k=H.a([$.aD,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.w
k=H.a([$.aD,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.w
k=H.a([$.aD,$.bi],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.w
k=H.a([$.aD,$.bm],l)
H.a([],p)
$.$get$d().h(0,new G.e("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.w
k=H.a([$.aD,$.b5],l)
H.a([],p)
$.$get$d().h(0,new G.e("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.J
k=H.a([$.aD,$.cd],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.J
k=H.a([$.ad,$.b_],l)
H.a([],p)
$.$get$d().h(0,new G.e("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.J
k=H.a([$.R,$.be],l)
H.a([],p)
$.$get$d().h(0,new G.e("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.t
k=H.a([$.R,$.bu],l)
H.a([],p)
$.$get$d().h(0,new G.e("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.K
k=H.a([$.R,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.t
k=H.a([$.R,$.aH],l)
H.a([],p)
$.$get$d().h(0,new G.e("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.t
k=H.a([$.R,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.K
k=H.a([$.R,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.J
k=H.a([$.R,$.c8],l)
H.a([],p)
$.$get$d().h(0,new G.e("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.K
k=H.a([$.R,$.bD],l)
H.a([],p)
$.$get$d().h(0,new G.e("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.K
k=H.a([$.R,$.b0],l)
H.a([],p)
$.$get$d().h(0,new G.e("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.w
k=H.a([$.R,$.bo],l)
H.a([],p)
$.$get$d().h(0,new G.e("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.w
k=H.a([$.R,$.bi],l)
H.a([],p)
$.$get$d().h(0,new G.e("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.t
k=H.a([$.R,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.w
k=H.a([$.R,$.bM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.w
k=H.a([$.R,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.w
k=H.a([$.R,$.bb],l)
H.a([],p)
$.$get$d().h(0,new G.e("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.w
k=H.a([$.R,$.bl],l)
H.a([],p)
$.$get$d().h(0,new G.e("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.R,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.w
k=H.a([$.R,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.R,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.w
k=H.a([$.R,$.aq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.w
k=H.a([$.R,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.am
k=H.a([$.ad,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.w
k=H.a([$.af,$.a9],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.w
k=H.a([$.b5,$.b2],l)
H.a([],p)
$.$get$d().h(0,new G.e("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.w
k=H.a([$.aS,$.a9],l)
H.a([],p)
$.$get$d().h(0,new G.e("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.w
k=H.a([$.Q,$.I],l)
H.a([],p)
$.$get$d().h(0,new G.e("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.K
k=H.a([$.ad,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.K
k=H.a([$.aW,$.av,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.w
k=H.a([$.bk,$.bu],l)
H.a([],p)
$.$get$d().h(0,new G.e("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.t
k=H.a([$.bk,$.M],l)
H.a([],p)
$.$get$d().h(0,new G.e("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.am
k=H.a([$.bk,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.am
k=H.a([$.ac,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.am
k=H.a([$.ad,$.aq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.w
k=H.a([$.ac,$.aS,$.bo,$.an],l)
H.a([],p)
$.$get$d().h(0,new G.e("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.t
k=H.a([$.ac,$.de,$.a9,$.M],l)
H.a([],p)
$.$get$d().h(0,new G.e("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.am
k=H.a([$.az,$.af,$.aW,$.aJ,$.b3],l)
H.a([],p)
o=new G.e("Queenly",k,n,o,0)
$.$get$d().h(0,o)
$.DG=o
o=H.a(["Kingly"],p)
n=$.am
k=H.a([$.b3,$.an,$.c8,$.af,$.aW],l)
H.a([],p)
o=new G.e("Kingly",k,n,o,0)
$.$get$d().h(0,o)
$.Ct=o
o=H.a(["Jack"],p)
n=$.am
k=H.a([$.aY,$.aH,$.E,$.az],l)
H.a([],p)
o=new G.e("Jack",k,n,o,0)
$.$get$d().h(0,o)
$.Cn=o
o=H.a(["Codpiece","Codtier"],p)
n=$.t
k=H.a([$.ac,$.av,$.a9,$.Q,$.R],l)
H.a([],p)
$.$get$d().h(0,new G.e("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.t
k=H.a([$.ac,$.aK,$.M,$.E,$.ad,$.Q],l)
H.a([],p)
$.$get$d().h(0,new G.e("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.t
k=H.a([$.ac,$.aK,$.M,$.ad,$.Q,$.bi],l)
H.a([],p)
$.$get$d().h(0,new G.e("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.t
k=H.a([$.ac,$.aL,$.M,$.ad,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.am
k=H.a([$.ac,$.b0,$.E,$.aY,$.aH,$.em],l)
H.a([],p)
$.$get$d().h(0,new G.e("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.am
k=H.a([$.ac,$.M,$.bl,$.aK],l)
H.a([],p)
$.$get$d().h(0,new G.e("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.am
k=H.a([$.ac,$.af,$.R,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.am
k=H.a([$.ac,$.aJ,$.b9,$.E,$.fa,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.am
k=H.a([$.ac,$.aD,$.aq,$.hg,$.an],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.J
k=H.a([$.ac,$.R,$.bb,$.aI,$.aq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.t
k=H.a([$.ac,$.E,$.bb,$.aI,$.aq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.t
k=H.a([$.ac,$.aS,$.ag,$.az,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.t
k=H.a([$.ac,$.R,$.ad,$.af,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.t
k=H.a([$.ac,$.R,$.ad,$.aI,$.aq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.J
k=$.ac
j=$.M
i=$.ad
i=H.a([k,j,i,$.aK,i,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.w
i=H.a([$.ac,$.aI,$.bR,$.an,$.el,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.am
i=H.a([$.ac,$.aK,$.M,$.bl,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.am
i=H.a([$.af,$.M],l)
H.a([],p)
$.$get$d().h(0,new G.e("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.t
i=H.a([$.M,$.ad,$.aK],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.t
i=H.a([$.ac,$.E,$.az,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.J
i=H.a([$.ac,$.E,$.b_,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.t
i=H.a([$.ac,$.av,$.a9,$.ax,$.bo,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.t
i=H.a([$.ac,$.aG,$.E,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.t
i=H.a([$.ac,$.ag,$.M,$.aK,$.aL],l)
H.a([],p)
$.$get$d().h(0,new G.e("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.t
i=H.a([$.ac,$.a9,$.aA,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.am
i=H.a([$.ac,$.aW,$.bu,$.b0,$.ak,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.w
i=H.a([$.ac,$.b1,$.b_,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.w
i=H.a([$.ac,$.b0,$.bD,$.aD,$.b_],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.am
i=H.a([$.ac,$.aJ,$.aD,$.aq,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.am
i=H.a([$.ac,$.aF,$.bl,$.aq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.am
i=H.a([$.ac,$.E,$.ak,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.K
i=H.a([$.ac,$.b_,$.bZ,$.b0,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.w
i=H.a([$.E,$.bk],l)
H.a([],p)
$.$get$d().h(0,new G.e("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.am
i=H.a([$.E,$.bu],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.w
i=H.a([$.E,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.w
i=H.a([$.E,$.bi],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.J
i=H.a([$.E,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.J
i=H.a([$.E,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.w
i=H.a([$.E,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.w
i=H.a([$.bR,$.aD],l)
H.a([],p)
$.$get$d().h(0,new G.e("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.w
i=H.a([$.bR,$.c2],l)
H.a([],p)
$.$get$d().h(0,new G.e("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.K
i=H.a([$.bR,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.w
i=H.a([$.bR,$.an],l)
H.a([],p)
$.$get$d().h(0,new G.e("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.w
i=H.a([$.bR,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.w
i=H.a([$.bR,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.w
i=H.a([$.bR,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.J
i=H.a([$.bR,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.w
i=H.a([$.bR,$.aq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.J
i=H.a([$.bR,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.K
i=H.a([$.bS,$.M],l)
H.a([],p)
$.$get$d().h(0,new G.e("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.J
i=H.a([$.bS,$.R],l)
H.a([],p)
$.$get$d().h(0,new G.e("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.K
i=H.a([$.bS,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.J
i=H.a([$.bS,$.b0],l)
H.a([],p)
$.$get$d().h(0,new G.e("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.w
i=H.a([$.bS,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.J
i=H.a([$.bS,$.bb],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.am
i=H.a([$.bS,$.bl],l)
H.a([],p)
$.$get$d().h(0,new G.e("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.w
i=H.a([$.bS,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.w
i=H.a([$.bS,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.w
i=H.a([$.bS,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.am
i=H.a([$.a9,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.w
i=H.a([$.a9,$.bY],l)
H.a([],p)
$.$get$d().h(0,new G.e("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.w
i=H.a([$.a9,$.c2],l)
H.a([],p)
$.$get$d().h(0,new G.e("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.w
i=H.a([$.aS,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.t
i=H.a([$.c2,$.bo],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.J
i=H.a([$.c2,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.t
i=H.a([$.c2,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.t
i=H.a([$.M,$.R],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.t
i=H.a([$.M,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.w
i=H.a([$.aD,$.bk],l)
H.a([],p)
$.$get$d().h(0,new G.e("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.w
i=H.a([$.aD,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.K
i=H.a([$.aD,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.K
i=H.a([$.bY,$.bk],l)
H.a([],p)
$.$get$d().h(0,new G.e("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.w
i=H.a([$.bY,$.bu],l)
H.a([],p)
$.$get$d().h(0,new G.e("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.K
i=H.a([$.bY,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.w
i=H.a([$.bY,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.w
i=H.a([$.bY,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.w
i=H.a([$.bY,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.K
i=H.a([$.bY,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.w
i=H.a([$.be,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.w
i=H.a([$.be,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.w
i=H.a([$.be,$.b0],l)
H.a([],p)
$.$get$d().h(0,new G.e("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.J
i=H.a([$.be,$.bu],l)
H.a([],p)
$.$get$d().h(0,new G.e("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.t
i=H.a([$.bk,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.w
i=H.a([$.bk,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.J
i=H.a([$.bk,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.t
i=H.a([$.bk,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.J
i=H.a([$.cd,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.w
i=H.a([$.cd,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.am
i=H.a([$.cd,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.w
i=H.a([$.cd,$.bu],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.w
i=H.a([$.b5,$.bu],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.J
i=H.a([$.b5,$.bD],l)
H.a([],p)
$.$get$d().h(0,new G.e("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.w
i=H.a([$.b5,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.w
i=H.a([$.b5,$.bm],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.w
i=H.a([$.b5,$.bb],l)
H.a([],p)
$.$get$d().h(0,new G.e("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.w
i=H.a([$.b5,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.w
i=H.a([$.b5,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.J
i=H.a([$.b5,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.J
i=H.a([$.bu,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.w
i=H.a([$.bu,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.w
i=H.a([$.bu,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.w
i=H.a([$.bu,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.w
i=H.a([$.bu,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.w
i=H.a([$.bu,$.bM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.w
i=H.a([$.bu,$.aL],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.tV
i=H.a([$.bu,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.J
i=H.a([$.bu,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.K
i=H.a([$.bT,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.t
i=H.a([$.aH,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.t
i=H.a([$.aH,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.K
i=H.a([$.b3,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.t
i=H.a([$.b1,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.K
i=H.a([$.aF,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.w
i=H.a([$.aF,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.K
i=H.a([$.aF,$.an],l)
H.a([],p)
$.$get$d().h(0,new G.e("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.t
i=H.a([$.c8,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.t
i=H.a([$.c8,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.t
i=H.a([$.b2,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.t
i=H.a([$.b2,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.am
i=H.a([$.b2,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.am
i=H.a([$.b2,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.J
i=H.a([$.b2,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.J
i=H.a([$.b2,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.am
i=H.a([$.b2,$.bl],l)
H.a([],p)
$.$get$d().h(0,new G.e("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.t
i=H.a([$.b2,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.t
i=H.a([$.b2,$.bZ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.t
i=H.a([$.b2,$.b0],l)
H.a([],p)
$.$get$d().h(0,new G.e("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.J
i=H.a([$.b2,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.w
i=H.a([$.b0,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.w
i=H.a([$.ak,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.w
i=H.a([$.bD,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.w
i=H.a([$.bD,$.bb],l)
H.a([],p)
$.$get$d().h(0,new G.e("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.am
i=H.a([$.bD,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.am
i=H.a([$.b0,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.J
i=H.a([$.b0,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.K
i=H.a([$.b0,$.b8],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.J
i=H.a([$.b0,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.am
i=H.a([$.az,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.t
i=H.a([$.az,$.af,$.R],l)
H.a([],p)
$.$get$d().h(0,new G.e("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.J
i=H.a([$.az,$.b8],l)
H.a([],p)
$.$get$d().h(0,new G.e("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.K
i=H.a([$.az,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.t
i=H.a([$.az,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.am
i=H.a([$.az,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.am
i=H.a([$.bo,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.t
i=H.a([$.bo,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.t
i=H.a([$.bo,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.t
i=H.a([$.b1,$.bZ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.J
i=H.a([$.bM,$.bZ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.J
i=H.a([$.aL,$.bZ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.t
i=H.a([$.aL,$.bm],l)
H.a([],p)
$.$get$d().h(0,new G.e("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.J
i=H.a([$.ag,$.aL],l)
H.a([],p)
$.$get$d().h(0,new G.e("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.t
i=H.a([$.aL,$.bb],l)
H.a([],p)
$.$get$d().h(0,new G.e("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.J
i=H.a([$.aL,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.K
i=H.a([$.aL,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.t
i=H.a([$.bm,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.t
i=H.a([$.bm,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.t
i=H.a([$.bm,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.t
i=H.a([$.aL,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.t
i=H.a([$.bm,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.t
i=H.a([$.ag,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.t
i=H.a([$.bm,$.bl],l)
H.a([],p)
$.$get$d().h(0,new G.e("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.t
i=H.a([$.bm,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.J
i=H.a([$.bm,$.bM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.t
i=H.a([$.bm,$.bi],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.t
i=H.a([$.bi,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.t
i=H.a([$.af,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.J
i=H.a([$.ag,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.t
i=H.a([$.bl,$.bM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.t
i=H.a([$.bM,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.t
i=H.a([$.bM,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.t
i=H.a([$.bM,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.J
i=H.a([$.bM,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.J
i=H.a([$.bM,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.t
i=H.a([$.bM,$.b8],l)
H.a([],p)
$.$get$d().h(0,new G.e("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.J
i=H.a([$.ak,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.t
i=H.a([$.ak,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.t
i=H.a([$.ak,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.t
i=H.a([$.ak,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.am
i=H.a([$.ak,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.t
i=H.a([$.ak,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.t
i=H.a([$.ak,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.t
i=H.a([$.ak,$.bl],l)
H.a([],p)
$.$get$d().h(0,new G.e("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.t
i=H.a([$.ak,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.t
i=H.a([$.bl,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.t
i=H.a([$.bl,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.am
i=H.a([$.ad,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.t
i=H.a([$.bf,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.t
i=H.a([$.bf,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.t
i=H.a([$.bf,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.J
i=H.a([$.bf,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.K
i=H.a([$.aI,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.J
i=H.a([$.b7,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.t
i=H.a([$.b7,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.K
i=H.a([$.aF,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.K
i=H.a([$.aM,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.K
i=H.a([$.aM,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.J
i=H.a([$.aA,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.J
i=H.a([$.ad,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.t
i=H.a([$.ad,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.t
i=H.a([$.aA,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.am
i=H.a([$.aM,$.aq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.J
i=H.a([$.ad,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.J
i=H.a([$.aM,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.J
i=H.a([$.aM,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.J
i=H.a([$.aM,$.aR,$.aK,$.jg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.J
i=H.a([$.aF,$.b8],l)
H.a([],p)
$.$get$d().h(0,new G.e("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.J
i=H.a([$.aF,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.J
i=H.a([$.aF,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.J
i=H.a([$.af,$.aq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.J
i=H.a([$.aF,$.b8,$.ag,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.w
i=H.a([$.E,$.bY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.t
i=H.a([$.b9,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.J
i=H.a([$.bS,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.t
i=H.a([$.a9,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.t
i=H.a([$.aS,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.J
i=H.a([$.c2,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.w
i=H.a([$.M,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.J
i=H.a([$.M,$.b_],l)
H.a([],p)
$.$get$d().h(0,new G.e("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.am
i=H.a([$.b_,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.J
i=H.a([$.be,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.J
i=H.a([$.aG,$.bk],l)
H.a([],p)
$.$get$d().h(0,new G.e("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.w
i=H.a([$.aM,$.cd],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.am
i=H.a([$.b5,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.J
i=H.a([$.b1,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.K
i=H.a([$.aW,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.am
i=H.a([$.bD,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.J
i=H.a([$.az,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.J
i=H.a([$.aG,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.J
i=H.a([$.aG,$.bM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.J
i=H.a([$.aG,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.J
i=H.a([$.aL,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.J
i=H.a([$.bb,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.J
i=H.a([$.bb,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.J
i=H.a([$.bb,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.J
i=H.a([$.aJ,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.J
i=H.a([$.aR,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.J
i=H.a([$.aM,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.J
i=H.a([$.af,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.J
i=H.a([$.Q,$.I,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.J
i=H.a([$.Q,$.I,$.aW,$.av,$.R],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.J
i=H.a([$.Q,$.I,$.aW,$.cd],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.J
i=H.a([$.aD,$.bS],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.J
i=H.a([$.bu,$.bS],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.J
i=H.a([$.b5,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.J
i=H.a([$.af,$.b5],l)
H.a([],p)
$.$get$d().h(0,new G.e("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.J
i=H.a([$.b3,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.J
l=H.a([$.bR,$.bS],l)
H.a([],p)
$.$get$d().h(0,new G.e("Chipped",l,n,o,0))
if($.wT==null){o=$.mp
n=$.aY
l=$.aH
k=$.b9
j=new U.at(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.aj(null,null,null,m),0,3)
j.P("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.wT=j}o=$.$get$aB();(o&&C.b).sv(o,0)
o=$.$get$aB()
n=$.R
l=$.wa
k=new U.at(n,null,null,null,"Speedo",!1,P.aj(null,null,null,m),0,3)
k.P("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$aB()
o=$.em
n=$.aH
l=$.E
j=$.aY
i=new U.at(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.aj(null,null,null,m),0,3)
i.P("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aB()
k=$.tG
o=$.an
j=$.E
l=new U.at(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.aj(null,null,null,m),0,3)
l.P("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$aB()
i=$.tR
k=$.b2
j=$.E
o=new U.at(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.aj(null,null,null,m),0,3)
o.P("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$aB()
l=$.tN
i=$.b2
j=$.E
k=new U.at(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.aj(null,null,null,m),0,3)
k.P("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$aB()
o=$.wl
l=$.b2
j=$.E
i=new U.at(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.aj(null,null,null,m),0,3)
i.P("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aB()
k=$.vY
o=$.aY
j=$.aH
l=$.E
n=new U.at(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.aj(null,null,null,m),0,3)
n.P("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$aB()
i=$.tC
k=$.aY
l=$.aH
j=$.E
o=new U.at(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.aj(null,null,null,m),0,3)
o.P("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aB()
n=$.hi
i=$.an
j=$.bR
l=new U.at(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.aj(null,null,null,m),0,3)
l.P("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aB()
o=$.wo
n=$.aH
j=$.E
i=new U.at(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.aj(null,null,null,m),0,3)
i.P("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$aB()
l=$.w0
o=$.aH
j=$.E
n=new U.at(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.aj(null,null,null,m),0,3)
n.P("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$aB()
i=$.w7
l=$.aY
j=$.E
o=new U.at(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.aj(null,null,null,m),0,3)
o.P("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aB()
n=$.tM
i=$.bu
j=$.bk
l=new U.at(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.aj(null,null,null,m),0,3)
l.P("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aB()
o=$.el
n=$.c8
j=$.aD
i=$.an
k=new U.at(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.aj(null,null,null,m),0,3)
k.P("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aB()
l=$.tD
o=$.aS
i=$.bD
j=new U.at(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.aj(null,null,null,m),0,3)
j.P("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$aB()
k=$.tL
l=$.E
i=$.aY
o=new U.at(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.aj(null,null,null,m),0,3)
o.P("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$aB()
j=$.wr
k=$.a9
i=$.an
l=new U.at(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.aj(null,null,null,m),0,3)
l.P("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$aB()
o=$.wt
j=$.bf
i=$.R
k=new U.at(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.aj(null,null,null,m),0,3)
k.P("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aB()
l=$.tz
o=$.b2
i=$.aD
j=$.R
n=$.aY
h=new U.at(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.aj(null,null,null,m),0,3)
h.P("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$aB()
k=$.jg
l=$.a9
n=$.an
j=new U.at(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.aj(null,null,null,m),0,3)
j.P("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$aB()
h=$.jf
k=$.a9
n=new U.at(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.aj(null,null,null,m),0,3)
n.P("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$aB()
j=$.aK
h=$.M
k=$.an
l=new U.at(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.aj(null,null,null,m),0,3)
l.P("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$aB()
n=$.wi
j=$.E
k=$.an
h=new U.at(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.aj(null,null,null,m),0,3)
h.P("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$aB()
l=$.tx
n=$.aH
k=$.E
j=$.an
i=new U.at(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.aj(null,null,null,m),0,3)
i.P("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wf
l=$.a9
j=$.aY
k=new U.at(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.aj(null,null,null,m),0,3)
k.P("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.fa
h=$.E
j=$.an
l=new U.at(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.aj(null,null,null,m),0,3)
l.P("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.w_
i=$.a9
j=$.an
h=new U.at(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.aj(null,null,null,m),0,3)
h.P("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wu
k=$.aS
j=$.an
i=new U.at(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.aj(null,null,null,m),0,3)
i.P("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wq
l=$.a9
j=$.b2
k=new U.at(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.aj(null,null,null,m),0,3)
k.P("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.wn
h=$.E
j=$.aH
l=new U.at(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.aj(null,null,null,m),0,3)
l.P("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.tK
i=$.E
j=$.b2
h=new U.at(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.aj(null,null,null,m),0,3)
h.P("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.ms
k=$.E
j=$.bm
i=new U.at(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.aj(null,null,null,m),0,3)
i.P("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.el
l=$.c2
j=$.an
k=new U.at(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.aj(null,null,null,m),0,3)
k.P("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.ws
h=$.E
j=$.aY
l=new U.at(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.aj(null,null,null,m),0,3)
l.P("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.mo
i=$.M
j=$.aH
h=new U.at(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.aj(null,null,null,m),0,3)
h.P("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.tE
k=$.E
j=$.an
i=new U.at(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.aj(null,null,null,m),0,3)
i.P("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.e3
l=$.b7
j=$.R
k=new U.at(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.aj(null,null,null,m),0,3)
k.P("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.hh
h=$.E
j=$.bf
l=new U.at(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.aj(null,null,null,m),0,3)
l.P("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.tU
i=$.E
j=$.an
h=new U.at(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.aj(null,null,null,m),0,3)
h.P("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wm
k=$.E
j=$.an
i=new U.at(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.aj(null,null,null,m),0,3)
i.P("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.tT
l=$.a9
j=$.an
k=new U.at(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.aj(null,null,null,m),0,3)
k.P("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.tO
h=$.a9
j=$.aL
l=new U.at(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.aj(null,null,null,m),0,3)
l.P("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.tQ
i=$.E
j=$.aH
h=new U.at(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.aj(null,null,null,m),0,3)
h.P("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.mw
k=$.E
j=$.ad
i=new U.at(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.aj(null,null,null,m),0,3)
i.P("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.hg
l=$.aD
j=$.c8
k=new U.at(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.aj(null,null,null,m),0,3)
k.P("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.w9
h=$.a9
j=$.an
l=new U.at(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.aj(null,null,null,m),0,3)
l.P("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.we
i=$.E
j=$.aH
h=new U.at(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.aj(null,null,null,m),0,3)
h.P("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wk
k=$.E
j=$.aH
i=new U.at(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.aj(null,null,null,m),0,3)
i.P("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wj
l=$.E
j=$.c8
k=new U.at(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.aj(null,null,null,m),0,3)
k.P("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.de
h=$.a9
j=$.an
m=new U.at(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.aj(null,null,null,m),0,3)
m.P("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bG("Duttle","Dut",null,null)
$.$get$bP().push(m)
$.vH=m
m=new S.bG("Salamander","GLUB",null,null)
$.$get$bP().push(m)
$.tn=m
m=new S.bG("Crocodile","NAK",null,null)
$.$get$bP().push(m)
$.e0=m
m=new S.bG("Iguana","thip",null,null)
$.$get$bP().push(m)
$.eh=m
m=new S.bG("Turtle","click",null,null)
$.$get$bP().push(m)
$.f1=m
m=new S.bG("Skeleton","rattle",null,null)
$.$get$bP().push(m)
$.dK=m
m=new S.bG("Robot","BEEP",null,null)
$.$get$bP().push(m)
$.f_=m
m=new S.bG("Chameleon","BLEP",null,null)
$.$get$bP().push(m)
$.io=m
m=new S.bG("Axolotl","BARP",null,null)
$.$get$bP().push(m)
$.th=m
m=new S.bG("Lizard","bleb",null,null)
$.$get$bP().push(m)
$.lE=m
m=new S.bG("Snake","hiss",null,null)
$.$get$bP().push(m)
$.tp=m
m=new S.bG("Alligator","nak",null,null)
$.$get$bP().push(m)
$.il=m
m=new S.bG("Mole","snuff",null,null)
$.$get$bP().push(m)
$.vI=m
m=new S.bG("Bird","tweet",null,null)
$.$get$bP().push(m)
$.lC=m
m=new S.bG("Wolf","howl",null,null)
$.$get$bP().push(m)
$.lK=m
m=new S.bG("Newt","skitter",null,null)
$.$get$bP().push(m)
$.vJ=m
m=new S.bG("Spider","skitter",null,null)
$.$get$bP().push(m)
$.lJ=m
m=new S.bG("Cupid","flappa",null,null)
$.$get$bP().push(m)
$.ip=m
m=new S.bG("Dragon","roar",null,null)
$.$get$bP().push(m)
$.h4=m
m=new S.i6("Prospitian","murmur",null,null)
$.$get$bP().push(m)
$.zG=m
m=new S.i6("Dersite","mutter",null,null)
$.$get$bP().push(m)
$.zD=m
m=new S.m7("Horror Terror","a;lkjdf",null,null)
$.$get$bP().push(m)
$.zF=m
$.zH=H.a([$.tp,$.il,$.vJ,$.tn,$.eh,$.e0,$.f1,$.io,$.th,$.lE],[S.bG])
$.h9=new T.c3(0,"spices")
m=$.zJ
$.eX=new T.c3(m,"fresh baked bread")
$.cv=new T.c3(m,"sweetness")
$.c6=new T.c3(m,"nature")
$.lI=new T.c3(0,"salt")
k=$.zI
$.d0=new T.c3(k,"rot")
$.zE=new T.c3(k,"feet")
$.ej=new T.c3(0,"oil")
$.tj=new T.c3(0,"chlorine")
$.h7=new T.c3(0,"nothing in particular")
$.eg=new T.c3(0,"gunpowder")
$.h6=new T.c3(0,"must")
$.cB=new T.c3(m,"zoo animals")
$.e1=new T.c3(k,"sweat")
$.iu=new T.c3(0,"ozone")
$.c5=new T.c3(0,"deceit")
$.cL=new T.c3(k,"blood")
$.f0=new T.c3(k,"smoke")
$.c0=new K.bX(k,"creepy")
$.b4=new K.bX(m,"calm")
$.ck=new K.bX(k,"frantic")
$.lF=new K.bX(0,"like nothing")
$.bQ=new K.bX(m,"energizing")
$.cA=new K.bX(0,"studious")
$.ds=new K.bX(0,"dangerous")
$.dI=new K.bX(0,"glamorous")
$.h8=new K.bX(0,"romantic")
$.ef=new K.bX(m,"creative")
$.it=new K.bX(0,"lucky")
$.dt=new K.bX(0,"happy")
$.dJ=new K.bX(0,"heroic")
$.dd=new K.bX(k,"stupid")
$.it=new K.bX(0,"lucky")
$.lD=new K.bX(0,"claustrophobic")
$.lG=new K.bX(0,"overheated")
$.ee=new K.bX(k,"confusing")
$.cb=new K.bX(0,"contemplatative")
$.cS=new M.bw(0,"clanking")
$.cy=new M.bw(0,"laughing")
$.bd=new M.bw(m,"rustling")
$.ek=new M.bw(k,"screaming")
$.ir=new M.bw(k,"foot steps")
$.eY=new M.bw(k,"beeping")
$.vL=new M.bw(k,"whispering")
$.eZ=new M.bw(0,"clacking")
$.cx=new M.bw(0,"applause")
$.ei=new M.bw(0,"jazz")
$.tl=new M.bw(0,"disco")
$.h5=new M.bw(0,"drums")
$.iq=new M.bw(0,"echoing")
$.lH=new M.bw(k,"roaring")
$.is=new M.bw(k,"gunfire")
$.cz=new M.bw(0,"music")
$.to=new M.bw(0,"singing")
$.ti=new M.bw(0,"chanting")
$.f2=new M.bw(0,"whistling")
$.db=new M.bw(m,"nature")
$.tk=new M.bw(0,"croaking")
$.dc=new M.bw(0,"silence")
$.tm=new M.bw(0,"pulsing")
$.vK=new M.bw(0,"ticking")
m=H.a([],p)
o=[X.H,P.a4]
n=A.a8
l=E.F
k=[l]
j=[A.fL]
m=new S.mL(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.q(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Knight",3,!0,!1,!1)
$.G2=m
m=P.f(H.a([new E.F($.bW,0.4,!1)],k),l)
i=H.a([],p)
m=new S.on(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.q(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Seer",6,!0,!1,!1)
$.Gf=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kw("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.q(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Bard",9,!0,!1,!1)
$.FX=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m3("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.q(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Heir",8,!0,!1,!1)
$.G_=m
m=H.a([],p)
m=new U.n5(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.q(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Maid",0,!0,!1,!1)
$.G5=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.o9(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.q(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Rogue",4,!0,!1,!1)
$.Ga=m
m=H.a([],p)
m=new V.nF(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.q(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Page",1,!0,!1,!1)
$.G8=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.pk(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.q(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Thief",7,!0,!1,!1)
$.Gi=m
m=P.f(H.a([new E.F($.bW,0.1,!1)],k),l)
i=H.a([],p)
m=new R.p7(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.q(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Sylph",5,!0,!1,!1)
$.Gh=m
m=H.a([],p)
m=new N.nX("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.q(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Prince",10,!0,!1,!1)
$.G9=m
m=P.f(H.a([new E.F($.bW,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pO("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.q(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Witch",11,!0,!1,!1)
$.Gk=m
m=P.f(H.a([new E.F($.bW,0.4,!1)],k),l)
i=H.a([],p)
m=new S.n4("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.q(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Mage",2,!0,!1,!1)
$.G4=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.f(H.a([new E.F($.bW,3,!1),new E.F($.oH,-2,!1)],k),l)
e=H.a([],p)
m=new E.pK("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.q(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Waste",12,!1,!1,!1)
$.Gj=m
m=H.a([],p)
m=new Y.oj("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.q(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Scout",13,!1,!1,!1)
$.Gd=m
m=P.f(H.a([new E.F($.bW,0.5,!1)],k),l)
i=H.a([],p)
m=new L.ok("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.q(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Scribe",15,!1,!1,!1)
$.Ge=m
m=P.f(H.a([new E.F($.bW,0.5,!1)],k),l)
i=H.a([],p)
m=new E.of(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.q(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Sage",14,!1,!1,!1)
$.Gb=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.m0("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.q(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Guide",16,!1,!1,!1)
$.FZ=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.f(H.a([new E.F($.bW,3,!1)],k),l)
g=H.a([],p)
m=new Y.m_(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.q(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Grace",17,!1,!1,!1)
$.FY=m
m=P.f(H.a([new E.F($.bW,0.1,!1)],k),l)
i=H.a([],p)
m=new E.ni("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.q(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Muse",18,!1,!1,!1)
$.G6=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.A(null,null,n)
h=P.f(H.a([new E.F($.bW,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.n2("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.q(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Lord",19,!1,!1,!1)
$.G3=m
m=P.f(H.a([new E.F($.bW,-0.1,!1),new E.F($.dh,1,!1)],k),l)
i=H.a([],p)
m=new Y.ov("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.q(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Smith",20,!1,!1,!1)
$.Gg=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.f(H.a([new E.F($.bW,4,!1),new E.F($.oH,-3,!1)],k),l)
e=H.a([],p)
m=new X.mb("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.q(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Human",21,!1,!1,!0)
$.G0=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.f(H.a([new E.F($.bW,41.3,!1),new E.F($.oH,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.mc(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.q(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Hussie",22,!1,!0,!0)
$.G1=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.oh(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.q(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ag("Sans",23,!1,!0,!0)
$.Gc=m
$.G7=T.FW("Null",255,!1,!0,!1)
m=A.dZ
i=P.G
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#00ff00"),!0)
h.j(0,$.U,L.b("#EFEFEF"),!0)
h.j(0,$.T,L.b("#DEDEDE"),!0)
h.j(0,$.a2,L.b("#FF2106"),!0)
h.j(0,$.a1,L.b("#B01200"),!0)
h.j(0,$.W,L.b("#2F2F30"),!0)
h.j(0,$.X,L.b("#1D1D1D"),!0)
h.j(0,$.V,L.b("#080808"),!0)
h.j(0,$.a0,L.b("#030303"),!0)
h.j(0,$.a_,L.b("#242424"),!0)
h.j(0,$.Z,L.b("#333333"),!0)
h.j(0,$.Y,L.b("#141414"),!0)
g=P.f(H.a(["Frogs"],p),q)
f=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.f(H.a([new E.F($.dh,2,!0),new E.F($.dQ,1,!0),new E.F($.cq,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new N.oz(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(0,"Space",!0,!1,!1,null,null)
$.z_=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ff0000"),!0)
a.j(0,$.U,L.b("#FF2106"),!0)
a.j(0,$.T,L.b("#AD1604"),!0)
a.j(0,$.a2,L.b("#030303"),!0)
a.j(0,$.a1,L.b("#242424"),!0)
a.j(0,$.W,L.b("#510606"),!0)
a.j(0,$.X,L.b("#3C0404"),!0)
a.j(0,$.V,L.b("#1F0000"),!0)
a.j(0,$.a0,L.b("#B70D0E"),!0)
a.j(0,$.a_,L.b("#970203"),!0)
a.j(0,$.Z,L.b("#8E1516"),!0)
a.j(0,$.Y,L.b("#640707"),!0)
b=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.f(H.a([new E.F($.eB,2,!0),new E.F($.cq,1,!0),new E.F($.dw,-2,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new N.pl(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(1,"Time",!0,!1,!1,null,null)
$.z3=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#3399ff"),!0)
h.j(0,$.U,L.b("#10E0FF"),!0)
h.j(0,$.T,L.b("#00A4BB"),!0)
h.j(0,$.a2,L.b("#FEFD49"),!0)
h.j(0,$.a1,L.b("#D6D601"),!0)
h.j(0,$.W,L.b("#0052F3"),!0)
h.j(0,$.X,L.b("#0046D1"),!0)
h.j(0,$.V,L.b("#003396"),!0)
h.j(0,$.a0,L.b("#0087EB"),!0)
h.j(0,$.a_,L.b("#0070ED"),!0)
h.j(0,$.Z,L.b("#006BE1"),!0)
h.j(0,$.Y,L.b("#0054B0"),!0)
g=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.f(H.a([new E.F($.cq,2,!0),new E.F($.bI,1,!0),new E.F($.dQ,-1,!0),new E.F($.cX,-1,!0),new E.F($.bW,0.05,!1)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new T.kF(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(2,"Breath",!0,!1,!1,null,null)
$.ys=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#003300"),!0)
a.j(0,$.U,L.b("#0F0F0F"),!0)
a.j(0,$.T,L.b("#010101"),!0)
a.j(0,$.a2,L.b("#E8C15E"),!0)
a.j(0,$.a1,L.b("#C7A140"),!0)
a.j(0,$.W,L.b("#1E211E"),!0)
a.j(0,$.X,L.b("#141614"),!0)
a.j(0,$.V,L.b("#0B0D0B"),!0)
a.j(0,$.a0,L.b("#204020"),!0)
a.j(0,$.a_,L.b("#11200F"),!0)
a.j(0,$.Z,L.b("#192C16"),!0)
a.j(0,$.Y,L.b("#121F10"),!0)
b=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.f(H.a([new E.F($.dh,2,!0),new E.F($.dw,1,!0),new E.F($.eB,-1,!0),new E.F($.dQ,-1,!0),new E.F($.bW,0.01,!1)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new U.l7(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(3,"Doom",!0,!1,!1,null,null)
$.t_=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#993300"),!0)
h.j(0,$.U,L.b("#BA1016"),!0)
h.j(0,$.T,L.b("#820B0F"),!0)
h.j(0,$.a2,L.b("#381B76"),!0)
h.j(0,$.a1,L.b("#1E0C47"),!0)
h.j(0,$.W,L.b("#290704"),!0)
h.j(0,$.X,L.b("#230200"),!0)
h.j(0,$.V,L.b("#110000"),!0)
h.j(0,$.a0,L.b("#3D190A"),!0)
h.j(0,$.a_,L.b("#2C1207"),!0)
h.j(0,$.Z,L.b("#5C2913"),!0)
h.j(0,$.Y,L.b("#4C1F0D"),!0)
g=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.f(H.a([new E.F($.cX,2,!0),new E.F($.bI,1,!0),new E.F($.dh,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new T.kC(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(4,"Blood",!0,!1,!1,null,null)
$.yr=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ff3399"),!0)
a.j(0,$.U,L.b("#BD1864"),!0)
a.j(0,$.T,L.b("#780F3F"),!0)
a.j(0,$.a2,L.b("#1D572E"),!0)
a.j(0,$.a1,L.b("#11371D"),!0)
a.j(0,$.W,L.b("#4C1026"),!0)
a.j(0,$.X,L.b("#3C0D1F"),!0)
a.j(0,$.V,L.b("#260914"),!0)
a.j(0,$.a0,L.b("#6B0829"),!0)
a.j(0,$.a_,L.b("#4A0818"),!0)
a.j(0,$.Z,L.b("#55142A"),!0)
a.j(0,$.Y,L.b("#3D0E1E"),!0)
b=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.f(H.a([new E.F($.cX,1,!0),new E.i4(null,1,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new T.m2(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(5,"Heart",!0,!1,!1,null,null)
$.yz=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#3da35a"),!0)
h.j(0,$.U,L.b("#06FFC9"),!0)
h.j(0,$.T,L.b("#04A885"),!0)
h.j(0,$.a2,L.b("#6E0E2E"),!0)
h.j(0,$.a1,L.b("#4A0818"),!0)
h.j(0,$.W,L.b("#1D572E"),!0)
h.j(0,$.X,L.b("#164524"),!0)
h.j(0,$.V,L.b("#11371D"),!0)
h.j(0,$.a0,L.b("#3DA35A"),!0)
h.j(0,$.a_,L.b("#2E7A43"),!0)
h.j(0,$.Z,L.b("#3B7E4F"),!0)
h.j(0,$.Y,L.b("#265133"),!0)
g=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.f(H.a([new E.F($.dw,2,!0),new E.F($.eB,1,!0),new E.F($.dh,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new V.nf(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(6,"Mind",!0,!1,!1,null,null)
$.yI=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ff9933"),!0)
a.j(0,$.U,L.b("#FEFD49"),!0)
a.j(0,$.T,L.b("#FEC910"),!0)
a.j(0,$.a2,L.b("#10E0FF"),!0)
a.j(0,$.a1,L.b("#00A4BB"),!0)
a.j(0,$.W,L.b("#FA4900"),!0)
a.j(0,$.X,L.b("#E94200"),!0)
a.j(0,$.V,L.b("#C33700"),!0)
a.j(0,$.a0,L.b("#FF8800"),!0)
a.j(0,$.a_,L.b("#D66E04"),!0)
a.j(0,$.Z,L.b("#E76700"),!0)
a.j(0,$.Y,L.b("#CA5B00"),!0)
b=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.f(H.a([new E.F($.eA,2,!0),new E.F($.dw,1,!0),new E.F($.bI,-1,!0),new E.F($.dQ,-1,!0),new E.F($.bW,0.2,!1)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new G.mP(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(7,"Light",!0,!1,!1,null,null)
$.yF=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#000066"),!0)
h.j(0,$.U,L.b("#0B1030"),!0)
h.j(0,$.T,L.b("#04091A"),!0)
h.j(0,$.a2,L.b("#CCC4B5"),!0)
h.j(0,$.a1,L.b("#A89F8D"),!0)
h.j(0,$.W,L.b("#00164F"),!0)
h.j(0,$.X,L.b("#00103C"),!0)
h.j(0,$.V,L.b("#00071A"),!0)
h.j(0,$.a0,L.b("#033476"),!0)
h.j(0,$.a_,L.b("#02285B"),!0)
h.j(0,$.Z,L.b("#004CB2"),!0)
h.j(0,$.Y,L.b("#003E91"),!0)
g=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.f(H.a([new E.fG(D.uK(),null,3,!0),new E.fG(D.uK(),null,-1,!0),new E.F($.eB,-1,!0),new E.F($.bW,0.2,!1)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new Q.pJ(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(8,"Void",!0,!1,!1,null,null)
$.z5=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#9900cc"),!0)
a.j(0,$.U,L.b("#974AA7"),!0)
a.j(0,$.T,L.b("#6B347D"),!0)
a.j(0,$.a2,L.b("#3D190A"),!0)
a.j(0,$.a1,L.b("#2C1207"),!0)
a.j(0,$.W,L.b("#7C3FBA"),!0)
a.j(0,$.X,L.b("#6D34A6"),!0)
a.j(0,$.V,L.b("#592D86"),!0)
a.j(0,$.a0,L.b("#381B76"),!0)
a.j(0,$.a_,L.b("#1E0C47"),!0)
a.j(0,$.Z,L.b("#281D36"),!0)
a.j(0,$.Y,L.b("#1D1526"),!0)
b=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.F($.dx,2,!0),new E.F($.cq,1,!0),new E.F($.bI,-1,!0),new E.F($.cX,-1,!0),new E.F($.bW,0.01,!1)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new E.nZ(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(9,"Rage",!0,!1,!1,null,null)
$.vm=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#ffcc66"),!0)
h.j(0,$.U,L.b("#FDF9EC"),!0)
h.j(0,$.T,L.b("#D6C794"),!0)
h.j(0,$.a2,L.b("#164524"),!0)
h.j(0,$.a1,L.b("#06280C"),!0)
h.j(0,$.W,L.b("#FFC331"),!0)
h.j(0,$.X,L.b("#F7BB2C"),!0)
h.j(0,$.V,L.b("#DBA523"),!0)
h.j(0,$.a0,L.b("#FFE094"),!0)
h.j(0,$.a_,L.b("#E8C15E"),!0)
h.j(0,$.Z,L.b("#F6C54A"),!0)
h.j(0,$.Y,L.b("#EDAF0C"),!0)
g=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.f(H.a([new E.F($.bI,2,!0),new E.F($.eA,1,!0),new E.fG(D.uK(),null,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new X.m6(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(10,"Hope",!0,!1,!1,null,null)
$.yB=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#494132"),!0)
a.j(0,$.U,L.b("#76C34E"),!0)
a.j(0,$.T,L.b("#4F8234"),!0)
a.j(0,$.a2,L.b("#00164F"),!0)
a.j(0,$.a1,L.b("#00071A"),!0)
a.j(0,$.W,L.b("#605542"),!0)
a.j(0,$.X,L.b("#494132"),!0)
a.j(0,$.V,L.b("#2D271E"),!0)
a.j(0,$.a0,L.b("#CCC4B5"),!0)
a.j(0,$.a_,L.b("#A89F8D"),!0)
a.j(0,$.Z,L.b("#A29989"),!0)
a.j(0,$.Y,L.b("#918673"),!0)
b=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.f(H.a([new E.F($.dQ,2,!0),new E.F($.dx,1,!0),new E.F($.dh,-2,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new K.mO(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(11,"Life",!0,!1,!1,null,null)
$.yE=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#9630BF"),!0)
h.j(0,$.U,L.b("#cc87e8"),!0)
h.j(0,$.T,L.b("#9545b7"),!0)
h.j(0,$.a2,L.b("#ae769b"),!0)
h.j(0,$.a1,L.b("#8f577c"),!0)
h.j(0,$.W,L.b("#9630bf"),!0)
h.j(0,$.X,L.b("#693773"),!0)
h.j(0,$.V,L.b("#4c2154"),!0)
h.j(0,$.a0,L.b("#fcf9bd"),!0)
h.j(0,$.a_,L.b("#e0d29e"),!0)
h.j(0,$.Z,L.b("#bdb968"),!0)
h.j(0,$.Y,L.b("#ab9b55"),!0)
g=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.f(H.a([new E.F($.dh,3,!0),new E.F($.bI,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new Z.l8(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(12,"Dream",!1,!1,!1,null,null)
$.yu=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ff0000"),!0)
a.j(0,$.U,L.b("#ffff00"),!0)
a.j(0,$.T,L.b("#ffff00"),!0)
a.j(0,$.a2,L.b("#508b2d"),!0)
a.j(0,$.a1,L.b("#316c0d"),!0)
a.j(0,$.W,L.b("#dddd00"),!0)
a.j(0,$.X,L.b("#afaf00"),!0)
a.j(0,$.V,L.b("#8f8f00"),!0)
a.j(0,$.a0,L.b("#ff0000"),!0)
a.j(0,$.a_,L.b("#a8000a"),!0)
a.j(0,$.Z,L.b("#b8151f"),!0)
a.j(0,$.Y,L.b("#8c1d1d"),!0)
b=P.f(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
c=P.f(H.a(["Juice","Joke","Jespacito"],p),q)
d=P.f(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
e=P.f(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
f=P.f(H.a([new E.F($.bW,13,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new Z.mI(13,13,13,a,b,c,d,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",e,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],f,0.01,0.01,0.01,0.5,14,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(14,"Juice",!1,!1,!0,null,null)
$.yC=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#00ff00"),!0)
h.j(0,$.U,L.b("#00ff00"),!0)
h.j(0,$.T,L.b("#00ff00"),!0)
h.j(0,$.a2,L.b("#00ff00"),!0)
h.j(0,$.a1,L.b("#00cf00"),!0)
h.j(0,$.W,L.b("#171717"),!0)
h.j(0,$.X,L.b("#080808"),!0)
h.j(0,$.V,L.b("#080808"),!0)
h.j(0,$.a0,L.b("#616161"),!0)
h.j(0,$.a_,L.b("#3b3b3b"),!0)
h.j(0,$.Z,L.b("#4a4a4a"),!0)
h.j(0,$.Y,L.b("#292929"),!0)
f=P.f(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
e=P.f(H.a(["Shogun"],p),q)
d=P.f(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
c=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
b=P.f(H.a([new E.F($.dx,13,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new K.oi(13,13,13,h,f,e,d," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",c,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],b,0.01,0.01,0.01,0.5,15,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(15,"Sauce",!1,!0,!1,null,null)
$.yW=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#933100"),!0)
g.j(0,$.U,L.b("#933100"),!0)
g.j(0,$.T,L.b("#682200"),!0)
g.j(0,$.a2,L.b("#4c3a27"),!0)
g.j(0,$.a1,L.b("#302418"),!0)
g.j(0,$.W,L.b("#a0562b"),!0)
g.j(0,$.X,L.b("#723e20"),!0)
g.j(0,$.V,L.b("#442513"),!0)
g.j(0,$.a0,L.b("#963c07"),!0)
g.j(0,$.a_,L.b("#682a06"),!0)
g.j(0,$.Z,L.b("#6d4d3a"),!0)
g.j(0,$.Y,L.b("#422e23"),!0)
b=P.f(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),q)
c=P.f(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),q)
d=P.f(H.a(["Electricity","Tazerface","Rebelions","Metaphors","Ravagers"],p),q)
e=P.f(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
f=P.f(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
h=P.f(H.a([new E.F($.cq,10,!0),new E.F($.bI,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new L.p9(2,0.7,0.7,g,b,c,d,e,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",f,["Lightning","Ice","Taserface"],["Taser"],h,0.01,0.01,0.01,0.5,16,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(16,"Taze",!1,!1,!0,null,null)
$.z2=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#990000"),!0)
a.j(0,$.U,L.b("#ff0200"),!0)
a.j(0,$.T,L.b("#dd0000"),!0)
a.j(0,$.a2,L.b("#25334f"),!0)
a.j(0,$.a1,L.b("#07090f"),!0)
a.j(0,$.W,L.b("#c64f4f"),!0)
a.j(0,$.X,L.b("#a33f3f"),!0)
a.j(0,$.V,L.b("#843333"),!0)
a.j(0,$.a0,L.b("#b5c1d2"),!0)
a.j(0,$.a_,L.b("#939dac"),!0)
a.j(0,$.Z,L.b("#3c3e42"),!0)
a.j(0,$.Y,L.b("#202123"),!0)
h=P.f(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
f=P.f(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
e=P.f(H.a(["Yondu","Empathy","Arrows","Emotions","Ravagers"],p),q)
d=P.f(H.a(["Empathetic","Arrowed","Emotional","Literal","Ravaging"],p),q)
c=P.f(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
b=P.f(H.a([new E.F($.cq,2,!0),new E.F($.bI,5,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new V.ob(0.9,1.1,2,a,h,f,e,d,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",c,["Arrow","Yondu","Empathy"],["Arrow","Bow"],b,0.01,0.01,0.01,0.5,17,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(17,"Rule",!1,!1,!0,null,null)
$.yT=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#853dcc"),!0)
g.j(0,$.U,L.b("#f76261"),!0)
g.j(0,$.T,L.b("#913a39"),!0)
g.j(0,$.a2,L.b("#ab4443"),!0)
g.j(0,$.a1,L.b("#78302f"),!0)
g.j(0,$.W,L.b("#a54cff"),!0)
g.j(0,$.X,L.b("#8c41d9"),!0)
g.j(0,$.V,L.b("#7335b3"),!0)
g.j(0,$.a0,L.b("#853dcc"),!0)
g.j(0,$.a_,L.b("#642e99"),!0)
g.j(0,$.Z,L.b("#4c2375"),!0)
g.j(0,$.Y,L.b("#2b1442"),!0)
b=P.f(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),q)
c=P.f(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
d=P.f(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),q)
e=P.f(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),q)
f=P.f(H.a([new E.F($.cq,15,!0),new E.F($.bI,-4,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new V.m4(3.1,2,0.7,g,b,c,d,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",e,["Hippo","Ranting"],["Vent"],f,0.01,0.01,0.01,0.5,18,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Hippo",null,!1,!1,!0,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(18,"Hippo",!1,!1,!0,null,null)
$.yA=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#959595"),!0)
h.j(0,$.U,L.b("#bfbfbf"),!0)
h.j(0,$.T,L.b("#959595"),!0)
h.j(0,$.a2,L.b("#805233"),!0)
h.j(0,$.a1,L.b("#663c1f"),!0)
h.j(0,$.W,L.b("#805233"),!0)
h.j(0,$.X,L.b("#737373"),!0)
h.j(0,$.V,L.b("#664d3c"),!0)
h.j(0,$.a0,L.b("#663c1f"),!0)
h.j(0,$.a_,L.b("#4d2d17"),!0)
h.j(0,$.Z,L.b("#68594e"),!0)
h.j(0,$.Y,L.b("#4f443b"),!0)
f=P.f(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),q)
e=P.f(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),q)
d=P.f(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),q)
c=P.f(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),q)
b=P.f(H.a([new E.F($.cq,5,!0),new E.F($.bI,5,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new L.kA(0.7,2,3.1,h,f,e,d,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",c,["Bear","Thought"],["Doorway"],b,0.01,0.01,0.01,0.5,19,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Bear",null,!1,!1,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(19,"Bear",!1,!1,!0,null,null)
$.yq=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#ebd837"),!0)
g.j(0,$.U,L.b("#ebd837"),!0)
g.j(0,$.T,L.b("#857a1f"),!0)
g.j(0,$.a2,L.b("#857a1f"),!0)
g.j(0,$.a1,L.b("#524b13"),!0)
g.j(0,$.W,L.b("#d0c217"),!0)
g.j(0,$.X,L.b("#9e9311"),!0)
g.j(0,$.V,L.b("#6b640c"),!0)
g.j(0,$.a0,L.b("#c3c3c3"),!0)
g.j(0,$.a_,L.b("#8f8f8f"),!0)
g.j(0,$.Z,L.b("#a88e00"),!0)
g.j(0,$.Y,L.b("#756300"),!0)
b=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
c=P.f(H.a(["STONE","Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
d=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt","Stone"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
h=P.f(H.a([new E.F($.dw,2,!0),new E.F($.eB,1,!0),new E.F($.dh,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new A.ng(0.3,0.3,1,g,b,c,d,e,["stone","mind","decisions","consequences","free will","path","neurons","causality"],["stone","mind","coin","plan","mask","map","brain","circuit"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",f,h,0.01,0.01,0.01,0.5,20,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Mindstone",null,!1,!0,!0,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(20,"Mindstone",!1,!0,!0,null,null)
$.yJ=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#74a4ff"),!0)
a.j(0,$.U,L.b("#74a4ff"),!0)
a.j(0,$.T,L.b("#466299"),!0)
a.j(0,$.a2,L.b("#466299"),!0)
a.j(0,$.a1,L.b("#2f4166"),!0)
a.j(0,$.W,L.b("#d0c217"),!0)
a.j(0,$.X,L.b("#9e9311"),!0)
a.j(0,$.V,L.b("#6b640c"),!0)
a.j(0,$.a0,L.b("#c3c3c3"),!0)
a.j(0,$.a_,L.b("#8f8f8f"),!0)
a.j(0,$.Z,L.b("#a88e00"),!0)
a.j(0,$.Y,L.b("#756300"),!0)
h=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
f=P.f(H.a(["Frogs","Stone"],p),q)
e=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
d=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush","Stone"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.F($.dh,2,!0),new E.F($.dQ,1,!0),new E.F($.cq,-2,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new A.oA(0.5,1,0.5,a,h,f,e,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",d,c,["stone","space","commitment","creation","room","stars","galaxy","black hole","super nova"],["stone","space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,21,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Spacestone",null,!1,!0,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(21,"Spacestone",!1,!0,!0,null,null)
$.z0=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#9846cc"),!0)
g.j(0,$.U,L.b("#9846cc"),!0)
g.j(0,$.T,L.b("#4c2366"),!0)
g.j(0,$.a2,L.b("#4c2366"),!0)
g.j(0,$.a1,L.b("#261233"),!0)
g.j(0,$.W,L.b("#d0c217"),!0)
g.j(0,$.X,L.b("#9e9311"),!0)
g.j(0,$.V,L.b("#6b640c"),!0)
g.j(0,$.a0,L.b("#c3c3c3"),!0)
g.j(0,$.a_,L.b("#8f8f8f"),!0)
g.j(0,$.Z,L.b("#a88e00"),!0)
g.j(0,$.Y,L.b("#756300"),!0)
b=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial","Stone"],p),q)
c=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible","Stone"],p),q)
f=P.f(H.a([new E.F($.dx,2,!0),new E.F($.cq,1,!0),new E.F($.bI,-1,!0),new E.F($.cX,-1,!0),new E.F($.bW,0.01,!1)],k),l)
h=P.f(H.a(["Paradox Space"],p),q)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new A.nT(1,1,0.01,g,b,c,d,e,["stone","rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["stone","rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",f,h,0.01,0.01,0.01,0.5,22,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Powerstone",null,!1,!0,!0,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(22,"Powerstone",!1,!0,!0,null,null)
$.yM=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ffcb6f"),!0)
a.j(0,$.U,L.b("#ffcb6f"),!0)
a.j(0,$.T,L.b("#997a42"),!0)
a.j(0,$.a2,L.b("#997a42"),!0)
a.j(0,$.a1,L.b("#66512c"),!0)
a.j(0,$.W,L.b("#d0c217"),!0)
a.j(0,$.X,L.b("#9e9311"),!0)
a.j(0,$.V,L.b("#6b640c"),!0)
a.j(0,$.a0,L.b("#c3c3c3"),!0)
a.j(0,$.a_,L.b("#8f8f8f"),!0)
a.j(0,$.Z,L.b("#a88e00"),!0)
a.j(0,$.Y,L.b("#756300"),!0)
h=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters","Stone"],p),q)
f=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Stone","Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.F($.cX,1,!0),new E.i4(null,1,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new A.oy(0.3,0.6,0.01,a,h,f,e,d,["stone","heart","identity","emotion","core","beat","shadow"],["stone","heart","doll","locket","mirror","mask","shades","sculpture"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,b,0.01,0.01,0.01,0.5,23,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Soulstone",null,!1,!0,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(23,"Soulstone",!1,!0,!0,null,null)
$.yZ=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#7ac476"),!0)
g.j(0,$.U,L.b("#7ac476"),!0)
g.j(0,$.T,L.b("#3a5e39"),!0)
g.j(0,$.a2,L.b("#3a5e39"),!0)
g.j(0,$.a1,L.b("#1b2b1a"),!0)
g.j(0,$.W,L.b("#d0c217"),!0)
g.j(0,$.X,L.b("#9e9311"),!0)
g.j(0,$.V,L.b("#6b640c"),!0)
g.j(0,$.a0,L.b("#c3c3c3"),!0)
g.j(0,$.a_,L.b("#8f8f8f"),!0)
g.j(0,$.Z,L.b("#a88e00"),!0)
g.j(0,$.Y,L.b("#756300"),!0)
b=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums","Stone"],p),q)
c=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Stone","Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
h=P.f(H.a([new E.F($.eB,2,!0),new E.F($.cq,1,!0),new E.F($.dw,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new A.pq(0.51,1,0.01,0.7,g,b,c,d,e,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",f,["stone","time","speed","inevitability","paradoxes","rhythm"],["stone","time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],h,0.01,0.01,0.01,0.5,24,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Timestone",null,!1,!0,!0,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(24,"Timestone",!1,!0,!0,null,null)
$.z4=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ed1c24"),!0)
a.j(0,$.U,L.b("#ed1c24"),!0)
a.j(0,$.T,L.b("#820a0f"),!0)
a.j(0,$.a2,L.b("#820a0f"),!0)
a.j(0,$.a1,L.b("#4f0609"),!0)
a.j(0,$.W,L.b("#d0c217"),!0)
a.j(0,$.X,L.b("#9e9311"),!0)
a.j(0,$.V,L.b("#6b640c"),!0)
a.j(0,$.a0,L.b("#c3c3c3"),!0)
a.j(0,$.a_,L.b("#8f8f8f"),!0)
a.j(0,$.Z,L.b("#a88e00"),!0)
a.j(0,$.Y,L.b("#756300"),!0)
h=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance","Stone"],p),q)
f=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze","Stone"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.F($.eA,2,!0),new E.F($.dw,1,!0),new E.F($.bI,-1,!0),new E.F($.dQ,-1,!0),new E.F($.bW,0.2,!1)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new A.o4(1.01,0.5,0.01,a,h,f,e,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["stone","light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],c,b,0.01,0.01,0.01,0.5,25,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Realitystone",null,!1,!0,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(25,"Realitystone",!1,!0,!0,null,null)
$.yO=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#e19aca"),!0)
g.j(0,$.U,L.b("#e19aca"),!0)
g.j(0,$.T,L.b("#7a546e"),!0)
g.j(0,$.a2,L.b("#7a546e"),!0)
g.j(0,$.a1,L.b("#473140"),!0)
g.j(0,$.W,L.b("#d0c217"),!0)
g.j(0,$.X,L.b("#9e9311"),!0)
g.j(0,$.V,L.b("#6b640c"),!0)
g.j(0,$.a0,L.b("#c3c3c3"),!0)
g.j(0,$.a_,L.b("#8f8f8f"),!0)
g.j(0,$.Z,L.b("#a88e00"),!0)
g.j(0,$.Y,L.b("#756300"),!0)
b=P.f(H.a(["Stone","Gauntlet","Infinite","Mind","Space","Power","Soul","Time","Reality"],p),q)
c=P.f(H.a(["THANOS CAR","GAUNTLET HOLDER","STONE COLLECTOR"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Stone","Infinite","Gauntlet","Thanos","Mind","Space","Power","Soul","Time","Reality"],p),q)
f=P.f(H.a([new E.F($.bI,-1,!0),new E.F($.dx,2,!0)],k),l)
h=P.f(H.a(["Paradox Space"],p),q)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new A.lY(2,1.5,1,g,b,c,d,e,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","infinite","thanos","gauntlet"],["stone","infinite","thanos","gauntlet"],f,h,0.01,0.01,0.01,0.5,26,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Gauntlet",null,!1,!0,!0,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(26,"Gauntlet",!1,!0,!0,null,null)
$.yx=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#c55555"),!0)
a.j(0,$.U,L.b("#c55555"),!0)
a.j(0,$.T,L.b("#090404"),!0)
a.j(0,$.a2,L.b("#ba872e"),!0)
a.j(0,$.a1,L.b("#8e694e"),!0)
a.j(0,$.W,L.b("#b59e5d"),!0)
a.j(0,$.X,L.b("#837243"),!0)
a.j(0,$.V,L.b("#4f4528"),!0)
a.j(0,$.a0,L.b("#9fbfbf"),!0)
a.j(0,$.a_,L.b("#95b5b5"),!0)
a.j(0,$.Z,L.b("#956f6f"),!0)
a.j(0,$.Y,L.b("#714b4b"),!0)
h=P.f(H.a(["MEME STEALER","THANOS CAR","AGGRESIVE MEMER"],p),q)
f=P.f(H.a(["Meme","Memetastic","Mesmerizing","Mop","Memelord","Mashedpotato"],p),q)
e=P.f(H.a(["Meme","Funny","Stealing","Despacito","Meme Stealing","Cursed"],p),q)
d=P.f(H.a(["Shogun","Memelord","Air Horn","420","Thanos Car","Luis Fonsi","Bowsette"],p),q)
c=P.f(H.a([new E.F($.bI,-1,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new D.nb(2,0.5,1,a,h,f,e,"cURSED","Some cursed meme music starts to play.",d,["memes"],["memes"],c,0.01,0.01,0.01,0.5,27,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Meme",null,!1,!1,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(27,"Meme",!1,!1,!0,null,null)
$.yG=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#010067"),!0)
g.j(0,$.U,L.b("#010067"),!0)
g.j(0,$.T,L.b("#000033"),!0)
g.j(0,$.a2,L.b("#000033"),!0)
g.j(0,$.a1,L.b("#00000d"),!0)
g.j(0,$.W,L.b("#0052F3"),!0)
g.j(0,$.X,L.b("#0046D1"),!0)
g.j(0,$.V,L.b("#003396"),!0)
g.j(0,$.a0,L.b("#0b0a33"),!0)
g.j(0,$.a_,L.b("#0a0a1a"),!0)
g.j(0,$.Z,L.b("#0b0b1b"),!0)
g.j(0,$.Y,L.b("#030308"),!0)
c=P.f(H.a(["Chill","Fear","Subordinance","Cold","Solids"],p),q)
d=P.f(H.a(["SOLIDIFIER","FEAR MAKER","ABSOLUTE DESTROYER"],p),q)
e=P.f(H.a(["Child","Chimpanzee","Choler","Cauliflower","Changer","Cake","Cone"],p),q)
f=P.f(H.a(["Chill","Rock","Cold","Fearing","Solidifying"],p),q)
h=P.f(["Thanos","Phobos","Deimos","Boreas"],q)
a=P.f(H.a([new E.F($.cq,2,!0),new E.F($.bI,-1,!0),new E.F($.cX,-1,!0)],k),l)
b=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
b.j(0,$.S,L.b("#FF9B00"),!0)
b.j(0,$.U,L.b("#FF9B00"),!0)
b.j(0,$.T,L.b("#FF8700"),!0)
b.j(0,$.a2,L.b("#7F7F7F"),!0)
b.j(0,$.a1,L.b("#727272"),!0)
b.j(0,$.W,L.b("#A3A3A3"),!0)
b.j(0,$.X,L.b("#999999"),!0)
b.j(0,$.V,L.b("#898989"),!0)
b.j(0,$.a0,L.b("#EFEFEF"),!0)
b.j(0,$.a_,L.b("#DBDBDB"),!0)
b.j(0,$.Z,L.b("#C6C6C6"),!0)
b.j(0,$.Y,L.b("#ADADAD"),!0)
b=new S.kK(0.5,0.7,1,g,c,d,e,f,"Fear "," A shiver of fear is sent to the ENEMY, but the OWNER is strengthened.",["chill","cold","fear","subordination"],["chill","stone","solids"],h,a,0.01,0.01,0.01,0.5,28,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Chill",null,!1,!1,!0,null,null,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
b.S(28,"Chill",!1,!1,!0,null,null)
$.yt=b
b=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
b.j(0,$.S,L.b("#007fbf"),!0)
b.j(0,$.U,L.b("#007fbf"),!0)
b.j(0,$.T,L.b("#4d6e80"),!0)
b.j(0,$.a2,L.b("#999999"),!0)
b.j(0,$.a1,L.b("#666666"),!0)
b.j(0,$.W,L.b("#8a9499"),!0)
b.j(0,$.X,L.b("#5c6366"),!0)
b.j(0,$.V,L.b("#2e3133"),!0)
b.j(0,$.a0,L.b("#86acbf"),!0)
b.j(0,$.a_,L.b("#627e8c"),!0)
b.j(0,$.Z,L.b("#8fa7b3"),!0)
b.j(0,$.Y,L.b("#667780"),!0)
a=P.f(H.a(["Rune","Infinity","Magic","Fairies","Prediction","Circles","Majykks","Systems"],p),q)
h=P.f(H.a(["FAIRY PERSON","INFIINITELY CONFUSED","PREDICTIVE LAD"],p),q)
f=P.f(H.a(["Rune","Ruiner","Red","Ready","Retconner","Respondent"],p),q)
e=P.f(H.a(["Infinite","Magical","Runely","Majykkal","Systematically","Predictful"],p),q)
d=P.f(["Rune","Hecate","Hekate","Heh","Huh","Athena","Oracle"],q)
c=P.f(H.a([new E.F($.cq,2,!0),new E.F($.bI,-0.5,!0),new E.F($.bW,2,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new R.oc(0.5,1,1,0.5,b,a,h,f,e,"Magicity","In a flood of magic, the OWNER is strengthened and healed, and the ENEMY is weakened.",["rune","majykk","fairies","infinity","prediction"],["rune","runestones","magic","fairies"],d,c,0.01,0.01,0.01,0.5,29,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Rune",null,!1,!1,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(29,"Rune",!1,!1,!0,null,null)
$.yU=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#ff7a00"),!0)
g.j(0,$.U,L.b("#ff7a00"),!0)
g.j(0,$.T,L.b("#cc6200"),!0)
g.j(0,$.a2,L.b("#cc6200"),!0)
g.j(0,$.a1,L.b("#994900"),!0)
g.j(0,$.W,L.b("#8a9499"),!0)
g.j(0,$.X,L.b("#5c6366"),!0)
g.j(0,$.V,L.b("#2e3133"),!0)
g.j(0,$.a0,L.b("#86acbf"),!0)
g.j(0,$.a_,L.b("#627e8c"),!0)
g.j(0,$.Z,L.b("#8fa7b3"),!0)
g.j(0,$.Y,L.b("#667780"),!0)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new L.m1(g,0.01,0.01,0.01,0.5,30,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Haze",null,!1,!1,!0,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(30,"Haze",!1,!1,!0,null,null)
$.yy=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#364447"),!0)
h.j(0,$.U,L.b("#28517b"),!0)
h.j(0,$.T,L.b("#143D67"),!0)
h.j(0,$.a2,L.b("#E7D7A0"),!0)
h.j(0,$.a1,L.b("#D6A482"),!0)
h.j(0,$.W,L.b("#A9D5DF"),!0)
h.j(0,$.X,L.b("#95c1cb"),!0)
h.j(0,$.V,L.b("#77a3ad"),!0)
h.j(0,$.a0,L.b("#162E33"),!0)
h.j(0,$.a_,L.b("#11292e"),!0)
h.j(0,$.Z,L.b("#021a1f"),!0)
h.j(0,$.Y,L.b("#021015"),!0)
g=P.f(H.a(["Waves","Ocean","Gyms","Pillars","Force","Rocks","Stability","Cliffs","Strength","Surf"],p),q)
f=P.f(H.a(["STANDALONE STRONGMAN","EMPOWERING EMPEROR","MINCEMIGHT"],p),q)
e=P.f(H.a(["Might","Minder","Mainsail","Mastiff","Morpher","Mortician"],p),q)
d=P.f(H.a(["Crash","MIGHT","Endure","Grip","Punch","Wave","Fist"],p),q)
c=P.f(H.a(["Might","Grendel","Heracles","Odysseus","Lancelot","Arthur","Beowulf","Achilles","Samson","Goliath"],p),q)
b=P.f(H.a(["surfing a tsunami wave that appeared just for the occasion","punching out a horde of underlings, one by one","following through with a plan after the circumstances have foiled it and succeeding anyway"],p),q)
a=P.f(H.a(["standing their ground in the face of a difficult foe","performing an unbelievably complex bike stunt","teaching consorts proper weightlifting technique","finally defeating the last of their planet's underlings"],p),q)
a0=P.f(H.a(["training for training's sake","renovating a consort village to protect it from natural disasters","defeating powerful underlings by refusing to give in to the pain"],p),q)
a1=P.f(H.a([new E.F($.dx,2,!0),new E.F($.dw,-1,!0),new E.F($.cq,-1,!0),new E.F($.bI,1,!0)],k),l)
a2=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a2.j(0,$.S,L.b("#FF9B00"),!0)
a2.j(0,$.U,L.b("#FF9B00"),!0)
a2.j(0,$.T,L.b("#FF8700"),!0)
a2.j(0,$.a2,L.b("#7F7F7F"),!0)
a2.j(0,$.a1,L.b("#727272"),!0)
a2.j(0,$.W,L.b("#A3A3A3"),!0)
a2.j(0,$.X,L.b("#999999"),!0)
a2.j(0,$.V,L.b("#898989"),!0)
a2.j(0,$.a0,L.b("#EFEFEF"),!0)
a2.j(0,$.a_,L.b("#DBDBDB"),!0)
a2.j(0,$.Z,L.b("#C6C6C6"),!0)
a2.j(0,$.Y,L.b("#ADADAD"),!0)
a2=new L.ne(h,g,f,e,d,"Mantra","A low note is hummed. It is the one Perseverance plays to keep itself going. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,b,a,a0,a1,0.01,0.01,0.01,0.5,31,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Might",null,!1,!1,!1,null,null,!1,!1,!0,1,a2,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a2.S(31,"Might",!1,!1,!1,null,null)
$.yH=a2
a2=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a2.j(0,$.S,L.b("#A4C1F4"),!0)
a2.j(0,$.U,L.b("#A4C1F4"),!0)
a2.j(0,$.T,L.b("#95AFDD"),!0)
a2.j(0,$.a2,L.b("#FFFFA5"),!0)
a2.j(0,$.a1,L.b("#BEBE9E"),!0)
a2.j(0,$.W,L.b("#A4C1F4"),!0)
a2.j(0,$.X,L.b("#95AFDD"),!0)
a2.j(0,$.V,L.b("#88A0CC"),!0)
a2.j(0,$.a0,L.b("#D9D2E9"),!0)
a2.j(0,$.a_,L.b("#BBB5CA"),!0)
a2.j(0,$.Z,L.b("#CCC5DB"),!0)
a2.j(0,$.Y,L.b("#A49FB1"),!0)
a1=P.f(H.a(["Mist","Steam","Substance","Vapor","Fog","Clouds","Rivers","Humidity"],p),q)
a0=P.f(H.a(["HAZE HASTENER","MISTER MASTER","MANY-BODY"],p),q)
a=P.f(H.a(["Moper","Martyr","Manager","Morning","Matter"],p),q)
b=P.f(H.a(["Everything","Encompass","Halation","Mist","Universal","Steamy","Most"],p),q)
c=P.f(H.a([new E.F($.cq,2,!0),new E.F($.dx,-1,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new S.nh(a2,a1,a0,a,b,"Ensemble","A harmonized chord sounds. It is the one Everybody knows. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,0.01,0.01,0.01,0.5,32,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Mist",null,!1,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(32,"Mist",!1,!1,!1,null,null)
$.yK=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
c=Y.dm()
h.j(0,$.S,L.b(c),!0)
c=Y.dm()
h.j(0,$.U,L.b(c),!0)
c=Y.dm()
h.j(0,$.T,L.b(c),!0)
c=Y.dm()
h.j(0,$.a2,L.b(c),!0)
c=Y.dm()
h.j(0,$.a1,L.b(c),!0)
c=Y.dm()
h.j(0,$.W,L.b(c),!0)
c=Y.dm()
h.j(0,$.X,L.b(c),!0)
c=Y.dm()
h.j(0,$.V,L.b(c),!0)
c=Y.dm()
h.j(0,$.a0,L.b(c),!0)
c=Y.dm()
h.j(0,$.a_,L.b(c),!0)
c=Y.dm()
h.j(0,$.Z,L.b(c),!0)
c=Y.dm()
h.j(0,$.Y,L.b(c),!0)
c=P.f(H.a(["Neon","Headaches","Puddles","Drip","Mess","Ice cream","Sweets","Boredom"],p),q)
b=P.f(H.a(["PUDDLE PUMMELLER","FLOOD FINISHER","RAINBRO"],p),q)
a=P.f(H.a(["Rainer","Retriever","Rower","Redux","Rapport"],p),q)
a0=P.f(H.a(["Chaos","disorder","puddle","Rain","error","color","Swirl","LOL"],p),q)
a1=P.f(H.a([new E.F($.cX,-2,!0),new E.F($.bI,-1,!0),new E.F($.eA,3,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new L.o_(h,c,b,a,a0,"BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",a1,0.01,0.01,0.01,0.5,33,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Rain",null,!1,!1,!1,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(33,"Rain",!1,!1,!1,null,null)
$.yN=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#b88654"),!0)
g.j(0,$.U,L.b("#783e05"),!0)
g.j(0,$.T,L.b("#4a0f00"),!0)
g.j(0,$.a2,L.b("#0b6c6e"),!0)
g.j(0,$.a1,L.b("#005d5e"),!0)
g.j(0,$.W,L.b("#f5b06c"),!0)
g.j(0,$.X,L.b("#e6a05e"),!0)
g.j(0,$.V,L.b("#b87232"),!0)
g.j(0,$.a0,L.b("#ffd966"),!0)
g.j(0,$.a_,L.b("#d1ab3b"),!0)
g.j(0,$.Z,L.b("#7d5e00"),!0)
g.j(0,$.Y,L.b("#6e4f00"),!0)
a1=P.f(H.a(["Lies","Beach","Shore","Secrets","Pirates","Suspicion","Corruption","[REDACTED]","Cake"],p),q)
a0=P.f(H.a(["MR SANDMAN","CASTLE COORDINATOR","POKER FACADE"],p),q)
a=P.f(H.a(["Strategist","Slider","Sculpter","Scamp","Sleazebag"],p),q)
b=P.f(H.a(["FALSE","Wrong","Sand","Distraction","Ruse","Crumble","abscond","beach","grain","[Data Expunged]"],p),q)
c=P.f(H.a([new E.F($.cX,3,!0),new E.F($.bI,-2,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new Y.og(g,a1,a0,a,b," BLUH BLUH, ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,0.01,0.01,0.01,0.5,34,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Sand",null,!1,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(34,"Sand",!1,!1,!1,null,null)
$.yV=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#ff9933"),!0)
h.j(0,$.U,L.b("#ffffff"),!0)
h.j(0,$.T,L.b("#999999"),!0)
h.j(0,$.a2,L.b("#ffff00"),!0)
h.j(0,$.a1,L.b("#8f8f00"),!0)
h.j(0,$.W,L.b("#d1e0e3"),!0)
h.j(0,$.X,L.b("#c5d1d4"),!0)
h.j(0,$.V,L.b("#b7c2c4"),!0)
h.j(0,$.a0,L.b("#00ffff"),!0)
h.j(0,$.a_,L.b("#009999"),!0)
h.j(0,$.Z,L.b("#b5b5b5"),!0)
h.j(0,$.Y,L.b("#858585"),!0)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new L.ot(h,0.01,0.01,0.01,0.5,35,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Sky",null,!1,!1,!1,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(35,"Sky",!1,!1,!1,null,null)
$.yX=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#10dede"),!0)
g.j(0,$.U,L.b("#00ffff"),!0)
g.j(0,$.T,L.b("#00d1d1"),!0)
g.j(0,$.a2,L.b("#ff0000"),!0)
g.j(0,$.a1,L.b("#d10000"),!0)
g.j(0,$.W,L.b("#4985e6"),!0)
g.j(0,$.X,L.b("#3a76d6"),!0)
g.j(0,$.V,L.b("#2d6ac4"),!0)
g.j(0,$.a0,L.b("#331c73"),!0)
g.j(0,$.a_,L.b("#050045"),!0)
g.j(0,$.Z,L.b("#8d7cc2"),!0)
g.j(0,$.Y,L.b("#7c6db3"),!0)
h=P.f(H.a(["Gel","Ice","Tape","Poetry","Caucophony"],p),q)
f=P.f(H.a(["LIL LYRICIST","ICE CREAMER","COOLER THAN BEING COOL"],p),q)
e=P.f(H.a(["Rhymer","Rapper","Rental","Redux","Rave","Reason"],p),q)
d=P.f(H.a(["Vaporwave","Chill","Ice","Rhyme","Slow"],p),q)
c=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
c.j(0,$.S,L.b("#FF9B00"),!0)
c.j(0,$.U,L.b("#FF9B00"),!0)
c.j(0,$.T,L.b("#FF8700"),!0)
c.j(0,$.a2,L.b("#7F7F7F"),!0)
c.j(0,$.a1,L.b("#727272"),!0)
c.j(0,$.W,L.b("#A3A3A3"),!0)
c.j(0,$.X,L.b("#999999"),!0)
c.j(0,$.V,L.b("#898989"),!0)
c.j(0,$.a0,L.b("#EFEFEF"),!0)
c.j(0,$.a_,L.b("#DBDBDB"),!0)
c.j(0,$.Z,L.b("#C6C6C6"),!0)
c.j(0,$.Y,L.b("#ADADAD"),!0)
c=new Z.o8(g,h,f,e,d,"Rap","BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",0.01,0.01,0.01,0.5,36,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Rhyme",null,!1,!1,!1,null,null,!1,!1,!0,1,c,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
c.S(36,"Rhyme",!1,!1,!1,null,null)
$.yS=c
c=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
c.j(0,$.S,L.b("#c42eff"),!0)
c.j(0,$.U,L.b("a703ff"),!0)
c.j(0,$.T,L.b("#9800f0"),!0)
c.j(0,$.a2,L.b("#fcf9bd"),!0)
c.j(0,$.a1,L.b("#e0d29e"),!0)
c.j(0,$.W,L.b("#9900ff"),!0)
c.j(0,$.X,L.b("#8800f0"),!0)
c.j(0,$.V,L.b("#7800e0"),!0)
c.j(0,$.a0,L.b("#b3a7d4"),!0)
c.j(0,$.a_,L.b("#a599c4"),!0)
c.j(0,$.Z,L.b("#a64e78"),!0)
c.j(0,$.Y,L.b("#963f66"),!0)
d=P.f(H.a(["Akashic Record"],p),q)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new Q.mM(c,d,0.01,0.01,0.01,0.5,37,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(37,"Law",!1,!1,!1,null,null)
$.yD=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#f0b000"),!0)
h.j(0,$.U,L.b("#ffd966"),!0)
h.j(0,$.T,L.b("#f0ca59"),!0)
h.j(0,$.a2,L.b("#ffff00"),!0)
h.j(0,$.a1,L.b("#8f8f00"),!0)
h.j(0,$.W,L.b("#92c27c"),!0)
h.j(0,$.X,L.b("#83b36d"),!0)
h.j(0,$.V,L.b("#74a35f"),!0)
h.j(0,$.a0,L.b("#39751d"),!0)
h.j(0,$.a_,L.b("#2a630e"),!0)
h.j(0,$.Z,L.b("#bd8e00"),!0)
h.j(0,$.Y,L.b("#ad7c00"),!0)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new L.lB(h,0.01,0.01,0.01,0.5,38,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Fate",null,!1,!1,!1,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(38,"Fate",!1,!1,!1,null,null)
$.yv=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#b2e3eb"),!0)
g.j(0,$.U,L.b("#fefefe"),!0)
g.j(0,$.T,L.b("#dfdfdf"),!0)
g.j(0,$.a2,L.b("#00ffff"),!0)
g.j(0,$.a1,L.b("#009090"),!0)
g.j(0,$.W,L.b("#999999"),!0)
g.j(0,$.X,L.b("#8a8a8a"),!0)
g.j(0,$.V,L.b("#7a7a7a"),!0)
g.j(0,$.a0,L.b("#d0e2f2"),!0)
g.j(0,$.a_,L.b("#c3d4e3"),!0)
g.j(0,$.Z,L.b("#b2e3eb"),!0)
g.j(0,$.Y,L.b("#a4d4db"),!0)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new O.ow(2,g,0.01,0.01,0.01,0.5,39,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Snow",null,!1,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(39,"Snow",!1,!1,!1,null,null)
$.yY=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#ee0000"),!0)
h.j(0,$.U,L.b("#ff0000"),!0)
h.j(0,$.T,L.b("#d10000"),!0)
h.j(0,$.a2,L.b("#00ffff"),!0)
h.j(0,$.a1,L.b("#00d1d1"),!0)
h.j(0,$.W,L.b("#e68f39"),!0)
h.j(0,$.X,L.b("#d67e2b"),!0)
h.j(0,$.V,L.b("#c46b1d"),!0)
h.j(0,$.a0,L.b("#e65c00"),!0)
h.j(0,$.a_,L.b("#b82e00"),!0)
h.j(0,$.Z,L.b("#ffd966"),!0)
h.j(0,$.Y,L.b("#d1ab3b"),!0)
g=P.f(H.a(["Fire","Track","Mercury","Heat","Burns","Mixtapes","Spaghetti"],p),q)
f=P.f(H.a(["BURN WARDEN","FIRESTARTER","RAP GOD"],p),q)
e=P.f(H.a(["Flamer","Florist","Friar","Foodie"],p),q)
d=P.f(H.a(["Nightcore","Flow","Sick","Fire","Fast","Sonic","burning","speed"],p),q)
c=P.f(H.a([new E.F($.cq,2,!0),new E.F($.dx,1,!0),new E.F($.cX,-2,!0)],k),l)
b=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
b.j(0,$.S,L.b("#FF9B00"),!0)
b.j(0,$.U,L.b("#FF9B00"),!0)
b.j(0,$.T,L.b("#FF8700"),!0)
b.j(0,$.a2,L.b("#7F7F7F"),!0)
b.j(0,$.a1,L.b("#727272"),!0)
b.j(0,$.W,L.b("#A3A3A3"),!0)
b.j(0,$.X,L.b("#999999"),!0)
b.j(0,$.V,L.b("#898989"),!0)
b.j(0,$.a0,L.b("#EFEFEF"),!0)
b.j(0,$.a_,L.b("#DBDBDB"),!0)
b.j(0,$.Z,L.b("#C6C6C6"),!0)
b.j(0,$.Y,L.b("#ADADAD"),!0)
b=new O.lR(h,g,f,e,d,"Mixtape "," An ill beat is laid down. It's the one that is dropped when the Pimp is in the crib. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,0.01,0.01,0.01,0.5,40,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Flow",null,!1,!1,!1,null,null,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
b.S(40,"Flow",!1,!1,!1,null,null)
$.yw=b
b=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
b.j(0,$.S,L.b("#ffff33"),!0)
b.j(0,$.U,L.b("#ffff00"),!0)
b.j(0,$.T,L.b("#d1d100"),!0)
b.j(0,$.a2,L.b("#00ffff"),!0)
b.j(0,$.a1,L.b("#009999"),!0)
b.j(0,$.W,L.b("#0c5494"),!0)
b.j(0,$.X,L.b("#004785"),!0)
b.j(0,$.V,L.b("#003b75"),!0)
b.j(0,$.a0,L.b("#20124d"),!0)
b.j(0,$.a_,L.b("#11033d"),!0)
b.j(0,$.Z,L.b("#0c323b"),!0)
b.j(0,$.Y,L.b("#00232b"),!0)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new U.oF(b,0.01,0.01,0.01,0.5,41,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Stars",null,!1,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(41,"Stars",!1,!1,!1,null,null)
$.z1=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#959595"),!0)
h.j(0,$.U,L.b("#bfbfbf"),!0)
h.j(0,$.T,L.b("#959595"),!0)
h.j(0,$.a2,L.b("#805233"),!0)
h.j(0,$.a1,L.b("#663c1f"),!0)
h.j(0,$.W,L.b("#805233"),!0)
h.j(0,$.X,L.b("#737373"),!0)
h.j(0,$.V,L.b("#664d3c"),!0)
h.j(0,$.a0,L.b("#663c1f"),!0)
h.j(0,$.a_,L.b("#4d2d17"),!0)
h.j(0,$.Z,L.b("#68594e"),!0)
h.j(0,$.Y,L.b("#4f443b"),!0)
b=P.f(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),q)
g=$.vm
f=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
f.j(0,$.S,L.b("#FF9B00"),!0)
f.j(0,$.U,L.b("#FF9B00"),!0)
f.j(0,$.T,L.b("#FF8700"),!0)
f.j(0,$.a2,L.b("#7F7F7F"),!0)
f.j(0,$.a1,L.b("#727272"),!0)
f.j(0,$.W,L.b("#A3A3A3"),!0)
f.j(0,$.X,L.b("#999999"),!0)
f.j(0,$.V,L.b("#898989"),!0)
f.j(0,$.a0,L.b("#EFEFEF"),!0)
f.j(0,$.a_,L.b("#DBDBDB"),!0)
f.j(0,$.Z,L.b("#C6C6C6"),!0)
f.j(0,$.Y,L.b("#ADADAD"),!0)
f=new L.o1(h,b,0.01,0.01,0.01,0.5,42,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Re_Bear",null,!1,!0,!0,g,null,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
f.S(42,"Re_Bear",!1,!0,!0,null,g)
$.yP=f
f=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
f.j(0,$.S,L.b("#853dcc"),!0)
f.j(0,$.U,L.b("#f76261"),!0)
f.j(0,$.T,L.b("#913a39"),!0)
f.j(0,$.a2,L.b("#ab4443"),!0)
f.j(0,$.a1,L.b("#78302f"),!0)
f.j(0,$.W,L.b("#a54cff"),!0)
f.j(0,$.X,L.b("#8c41d9"),!0)
f.j(0,$.V,L.b("#7335b3"),!0)
f.j(0,$.a0,L.b("#853dcc"),!0)
f.j(0,$.a_,L.b("#642e99"),!0)
f.j(0,$.Z,L.b("#4c2375"),!0)
f.j(0,$.Y,L.b("#2b1442"),!0)
g=P.f(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
b=$.t_
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new L.o2(f,g,0.01,0.01,0.01,0.5,43,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Re_Hippo",null,!1,!0,!0,b,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(43,"Re_Hippo",!1,!0,!0,null,b)
$.yQ=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#3c733c"),!0)
h.j(0,$.U,L.b("#3c733c"),!0)
h.j(0,$.T,L.b("#214021"),!0)
h.j(0,$.a2,L.b("#214021"),!0)
h.j(0,$.a1,L.b("#070d07"),!0)
h.j(0,$.W,L.b("#2f402f"),!0)
h.j(0,$.X,L.b("#1c261c"),!0)
h.j(0,$.V,L.b("#090d09"),!0)
h.j(0,$.a0,L.b("#2e582e"),!0)
h.j(0,$.a_,L.b("#142614"),!0)
h.j(0,$.Z,L.b("#1b331b"),!0)
h.j(0,$.Y,L.b("#070d07"),!0)
b=P.f(H.a(["Lock","Lockpicker","Loser","Loss","Leeway"],p),q)
g=$.t_
m=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
m.j(0,$.S,L.b("#FF9B00"),!0)
m.j(0,$.U,L.b("#FF9B00"),!0)
m.j(0,$.T,L.b("#FF8700"),!0)
m.j(0,$.a2,L.b("#7F7F7F"),!0)
m.j(0,$.a1,L.b("#727272"),!0)
m.j(0,$.W,L.b("#A3A3A3"),!0)
m.j(0,$.X,L.b("#999999"),!0)
m.j(0,$.V,L.b("#898989"),!0)
m.j(0,$.a0,L.b("#EFEFEF"),!0)
m.j(0,$.a_,L.b("#DBDBDB"),!0)
m.j(0,$.Z,L.b("#C6C6C6"),!0)
m.j(0,$.Y,L.b("#ADADAD"),!0)
j=new L.o3(h,b,0.01,0.01,0.01,0.5,44,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Re_Lock",null,!1,!0,!0,g,null,!1,!1,!0,1,m,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
j.S(44,"Re_Lock",!1,!0,!0,null,g)
$.yR=j
$.yL=L.yp(255,"Null",!1,!0,!1,null,null)
j=P.f(H.a([new E.F($.bI,1,!0),new E.F($.eA,1,!0)],k),l)
g=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
q=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
m=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
b=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
h=H.a(["nobody"],p)
i=P.f(H.a([],k),l)
f=H.a(["Nobody"],p)
e=H.a(["Nobody"],p)
q=new F.nj(j,g,q,m,b,!1,h,i,f,e,1,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"loud","musical","Music")
q.J()
q.K()
B.cN(q)
$.A2=q
q=P.f(H.a([new E.F($.dw,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.km(q,m,j,i,h,!1,g,f,e,d,13,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"nerdy","smart","Academic")
q.J()
q.K()
B.cN(q)
$.zW=q
q=P.f(H.a([new E.F($.dx,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kq(q,m,j,i,h,!1,g,f,e,d,4,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"dumb","athletic","Athletic")
q.J()
q.K()
B.cN(q)
$.zX=q
q=P.f(H.a([new E.F($.eB,-1,!0),new E.F($.eA,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kN(q,m,j,i,h,!1,g,f,e,d,0,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"dorky","funny","Comedy")
q.J()
q.K()
B.cN(q)
$.zY=q
q=P.f(H.a([new E.F($.bI,-1,!0),new E.F($.dQ,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kZ(q,m,j,i,h,!1,g,f,e,d,2,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"pretentious","cultured","Culture")
q.J()
q.K()
B.cN(q)
$.zZ=q
q=P.f(H.a([new E.F($.bI,1,!0),new E.F($.cX,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.l6(q,m,j,i,h,!1,g,f,e,d,8,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"boring","domestic","Domestic")
q.J()
q.K()
B.cN(q)
$.A_=q
q=P.f(H.a([new E.F($.eA,1,!0),new E.F($.dh,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lA(q,m,j,i,h,!1,g,f,e,d,7,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"whimpy","imaginative","Fantasy")
q.J()
q.K()
B.cN(q)
$.A0=q
q=P.f(H.a([new E.F($.dx,1,!0),new E.F($.dQ,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mJ(q,m,j,i,h,!1,g,f,e,d,6,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"harsh","fair-minded","Justice")
q.J()
q.K()
B.cN(q)
$.A1=q
q=P.f(H.a([new E.F($.cq,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nS(q,m,j,i,h,!1,g,f,e,d,9,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"frivolous","geeky","PopCulture")
q.J()
q.K()
B.cN(q)
$.A4=q
q=P.f(H.a([new E.F($.cX,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.oa(q,m,j,i,h,!1,g,f,e,d,12,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"obsessive","romantic","Romantic")
q.J()
q.K()
B.cN(q)
$.A5=q
q=P.f(H.a([new E.F($.bI,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.ox(q,m,j,i,h,!1,g,f,e,d,11,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"shallow","extroverted","Social")
q.J()
q.K()
B.cN(q)
$.A6=q
q=P.f(H.a([new E.F($.cX,-1,!0),new E.F($.bI,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.pd(q,m,j,i,h,!1,g,f,e,d,5,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"terrible","honest","Terrible")
q.J()
q.K()
B.cN(q)
$.A8=q
q=P.f(H.a([new E.F($.dw,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pT(q,m,j,i,h,!1,g,f,e,d,3,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"wordy","lettered","Writing")
q.J()
q.K()
B.cN(q)
$.A9=q
q=P.f(H.a([new E.F($.dh,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.pb(q,m,j,i,h,!1,g,f,e,d,10,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"awkward","techy","Technology")
q.J()
q.K()
B.cN(q)
$.A7=q
q=H.a(["nobody"],p)
l=P.f(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hf(!0,q,l,k,p,-13,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"","","Null")
q.J()
q.K()
B.cN(q)
$.A3=q
A.wC()
t=3
return P.cI(Y.nk(),$async$rB)
case 3:case 1:return P.by(r,s)}})
return P.bz($async$rB,s)}},V={l6:function l6(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lU:function lU(a){this.a=a},m4:function m4(m,n,p,w,q,t,u,A,C,D,E,F,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
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
_.y2=y2},nf:function nf(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},nF:function nF(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},ob:function ob(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},pd:function pd(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
zB:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dq(new P.c9(""),0,0)
t.av(a,8)
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
if(!l)break;++n}t.av(n-1,p)
t.av(a,8)}return t.be(b)},
zA:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cw(c)
s=new Uint8Array(t)
r=new B.da(null,0)
r.a=J.dW(a,b)
for(q=e*8,p=0;p<c;){o=r.am(q)+1
n=r.am(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.x(s,l)
s[l]=n}p+=o}return s},
tc:function(a){return new V.lg(a)},
tb:function(a){return new V.lf(a)},
zx:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dq(new P.c9(""),0,0)
t.av(a,8)
s=d.gcU()
r=C.f.ax(Math.log(H.kb(s.gv(s)))/0.6931471805599453)+1
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
if(!k)break;++m}t.av(m-1,o)
t.av(a,r)}return t.be(b)},
zw:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cw(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ax(Math.log(r.gv(r))/0.6931471805599453)+1
p=new B.da(null,0)
p.a=J.dW(a,b)
for(r=e*8,o=0;o<c;){n=p.am(r)+1
m=p.am(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.x(s,k)
s[k]=m}o+=n}return s},
ta:function(a){return new V.le(a)},
t9:function(a){return new V.ld(a)},
zz:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dq(new P.c9(""),0,0)
t.av(a,8)
s=d.gcU()
r=C.f.ax(Math.log(H.kb(s.gv(s)))/0.6931471805599453)+1
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
if(!l)break;++n}k=C.f.ax(Math.log(n)/0.6931471805599453)+1
t.av(k-1,5)
t.av(n-1,k)
t.av(a,r)}return t.be(b)},
zy:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cw(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ax(Math.log(r.gv(r))/0.6931471805599453)+1
p=new B.da(null,0)
p.a=J.dW(a,b)
for(o=0;o<c;){n=p.am(p.am(5)+1)+1
m=p.am(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.x(s,r)
s[r]=m}o+=n}return s},
lg:function lg(a){this.a=a},
lf:function lf(a){this.a=a},
le:function le(a){this.a=a},
ld:function ld(a){this.a=a}},Z={l8:function l8(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.a9=a9
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
_.y2=y2},
zL:function(){var t,s
if(!$.vM)$.vM=!0
else return
t=[P.C]
s=new Y.pf(H.a([],t))
$.tr=s
Z.cM(s,"txt",null)
Z.cM($.tr,"vert","x-shader/x-vertex")
Z.cM($.tr,"frag","x-shader/x-fragment")
$.zK=new Y.o0(H.a([],t))
$.vO=new Y.kH(H.a([],t))
s=new B.pY(H.a([],t))
$.vQ=s
Z.cM(s,"zip",null)
Z.cM($.vQ,"bundle",null)
s=new U.pP(H.a([],t))
$.zT=s
Z.cM(s,"words",null)
s=new Q.nQ(H.a([],t))
$.vP=s
Z.cM(s,"png",null)
Z.cM($.vP,"jpg","image/jpeg")
$.zR=new Q.nN(H.a([],t))
s=new M.oE(H.a([],t))
$.zS=s
Z.cM(s,"psprite",null)
s=new V.lU(H.a([],t))
$.tq=s
Z.cM(s,"ttf",null)
Z.cM($.tq,"otf",null)
Z.cM($.tq,"woff",null)
s=new Y.nx(null,H.a([],t))
$.zO=s
Z.cM(s,"obj",null)
s=new U.n3(H.a([],t))
$.zM=s
Z.cM(s,"mp3",null)
$.zN=new U.p1(H.a([],t))
s=new U.nB(H.a([],t))
$.zP=s
Z.cM(s,"ogg",null)
$.zQ=new U.p2(H.a([],t))},
cM:function(a,b,c){$.$get$lV().i(0,b,new Z.ik(a,c,[null,null]))
a.a.push(b)},
vN:function(a){var t
if($.$get$lV().ae(0,a)){t=$.$get$lV().B(0,a)
if(t.a instanceof O.c7)return t
throw H.m("File format for extension ."+H.D(a)+" does not match expected types.")}throw H.m("No file format found for extension ."+H.D(a))},
ik:function ik(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mI:function mI(m,n,p,w,q,t,u,A,C,D,E,F,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
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
_.y2=y2},
n2:function n2(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,D,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
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
_.r2=r2},
o8:function o8(m,n,p,w,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},
u1:function u1(){},
tY:function tY(){},
tZ:function tZ(){}},X={h2:function h2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},i5:function i5(){},m6:function m6(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},mb:function mb(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},H:function H(a,b,c){this.a=a
this.b=b
this.c=c}},N={ah:function ah(){},mJ:function mJ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nX:function nX(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},o9:function o9(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},ox:function ox(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oz:function oz(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},pl:function pl(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.a9=a9
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
_.y2=y2},
Fv:function(a){var t,s,r,q,p,o,n,m,l
t=J.cJ(a)
s=new W.jZ(document.querySelectorAll("link"),[null])
for(r=new H.er(s,s.gv(s),0,null,[null]);r.L();){q=r.d
p=J.aQ(q)
if(!!p.$isho&&q.rel==="stylesheet"){o=$.$get$nL()
H.D(p.gas(q))
o.toString
o=t.length
n=Math.min(o,J.cj(p.gas(q)))
for(m=0;m<n;++m){if(m>=o)return H.x(t,m)
if(t[m]!==J.i2(p.gas(q),m)){l=C.c.au(t,m)
$.$get$nL().toString
return l.split("/").length-1}continue}}}$.$get$nL().bl(C.m,"Didn't find a css link to derive relative path")
return 0},
up:function(){var t=P.xa()
if(!$.$get$nK().ae(0,t))$.$get$nK().i(0,t,N.Fv(t))
return $.$get$nK().B(0,t)}},E={iy:function iy(){},nA:function nA(){},F:function F(a,b,c){this.a=a
this.b=b
this.c=c},fG:function fG(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},ni:function ni(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},nZ:function nZ(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},of:function of(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},pK:function pK(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2}},B={m3:function m3(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
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
cN:function(a){var t=a.f
if($.$get$mj().ae(0,t))throw H.m("Duplicate aspect id for "+a.H(0)+": "+t+" is already registered for "+J.cJ($.$get$mj().B(0,t))+".")
$.$get$mj().i(0,t,a)},
hf:function hf(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
pY:function pY(a){this.a=a},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b){this.a=a
this.b=b},
H3:function(a){return a.bm(0)},
dy:function dy(a){this.a=a},
jR:function jR(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hQ:function hQ(a,b){this.a=a
this.b=b}},Q={mc:function mc(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},mf:function mf(){},nQ:function nQ(a){this.a=a},nN:function nN(a){this.a=a},mM:function mM(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
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
_.y2=y2},oa:function oa(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pJ:function pJ(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},jz:function jz(){},
A:function(a,b,c){var t=new Q.dT(null,null,[c])
t.dh(a,b,c)
return t},
uW:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.A(d,null,e)
s=a.gv(a)
C.b.sv(t.b,s)
if(H.dV(a,"$isp",[e],"$asp"))if(H.dV(a,"$iscR",[e],"$ascR"))for(s=J.d8(a.gc9()),r=0;s.L();){q=s.gY()
p=t.b
o=p.length
if(r>=o)return H.x(p,r)
p[r]=q;++r}else for(s=a.gac(a),p=[H.O(t,0)],r=0;s.L();){n=s.gY()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.x(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gac(a),p=[e],o=[H.O(t,0)];s.L();){l=s.gY()
if(H.Hl(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.x(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dV(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.x(m,0)
m[0]=l}else throw H.m("Invalid entry type "+H.D(J.vg(l))+" for WeightedList<"+H.D(H.c_(H.dC(e)))+">. Should be "+H.D(H.c_(H.dC(e)))+" or WeightPair<"+H.D(H.c_(H.dC(e)))+">.")}return t},
uX:function(a,b,c,d){return new Q.jO(J.vi(a.gc9(),new Q.pN(c,d,b)),null,[c,d])},
cR:function cR(){},
dT:function dT(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hO:function hO(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eI:function eI(){},
hN:function hN(){},
pM:function pM(a,$ti){this.a=a
this.$ti=$ti},
jO:function jO(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
om:function(){var t=0,s=P.bq(),r
var $async$om=P.bA(function(a,b){if(a===1)return P.bx(b,s)
while(true)switch(t){case 0:t=3
return P.cI(A.hq("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$om)
case 3:r=A.hq("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$om,s)}},G={mP:function mP(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},nS:function nS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
ze:function(a){var t,s,r,q,p,o,n,m,l
t=G.a7
s=P.u8(a,t)
r=P.aj(null,null,null,t)
q=H.a([],[G.e])
for(t=G.F8(),p=J.d8(t.a),t=new H.jP(p,t.b,[H.O(t,0)]);t.L();){o=p.gY()
if(o.es(s))q.push(o)}C.b.eM(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.ci)(q),++n){o=q[n]
if(o.es(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.ci)(p),++l)s.aB(0,p[l])}}if(s.a!==0)r.bZ(0,s)
return r},
F8:function(){var t=$.$get$d()
t.toString
return new H.hP(t,new G.my(),[H.O(t,0)])},
a7:function a7(){},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
my:function my(){}},D={nb:function nb(m,n,p,w,q,t,u,A,C,D,E,F,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
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
_.y2=y2},pb:function pb(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Gq:function(){if($.wV)return
$.wV=!0
var t=new D.cF("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
t.y=0
$.oH=t
t=new D.cF("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.Gp=t
t=new D.jS(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
t.y=2.5
t.Q=1
$.dx=t
t=new D.jS(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
t.y=2.5
$.dQ=t
t=new D.cF("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.Go=t
t=new D.cF("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.cq=t
t=new D.o6("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.cX=t
t=new D.cF("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.bI=t
t=new D.cF("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.dw=t
t=new D.cF("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.eA=t
t=new D.cF("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.eB=t
t=new D.cF("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.dh=t
t=new D.cF("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cP().push(t)
$.bW=t},
uK:function(){var t=$.$get$cP()
return new H.hP(t,new D.oI(),[H.O(t,0)])},
oI:function oI(){},
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
o6:function o6(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}},F={nj:function nj(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pT:function pT(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Fd:function(a){if(a===C.h){window
return C.i.gaE(C.i)}if(a===C.m){window
return C.i.ghY()}if(a===C.Z){window
return C.i.ghr()}return P.Ho()},
hr:function hr(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
u6:function u6(){},
zv:function(a,b,c,d){var t,s,r,q
t=new B.dq(new P.c9(""),0,0)
t.av(a,8)
c.toString
s=H.cO(c,0,null)
for(r=s.length,q=0;q<r;++q)t.c_(s[q])
return t.be(b)},
zu:function(a,b,c,d){var t,s,r,q,p
t=H.cw(c)
s=new Uint8Array(t)
r=new B.da(null,0)
r.a=J.dW(a,b)
for(q=0;q<c;++q){p=r.ca()
if(q>=t)return H.x(s,q)
s[q]=p}return s},
zt:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dq(new P.c9(""),0,0)
t.av(a,8)
s=d.gcU()
r=C.f.ax(Math.log(H.kb(s.gv(s)))/0.6931471805599453)+1
c.toString
q=H.cO(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.x(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.x(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.c_(o-1)
t.av(a,r)}return t.be(b)},
zs:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cw(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ax(Math.log(r.gv(r))/0.6931471805599453)+1
p=new B.da(null,0)
p.a=J.dW(a,b)
for(o=0;o<c;){n=p.ca()+1
m=p.am(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.x(s,r)
s[r]=m}o+=n}return s},
zr:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dq(new P.c9(""),0,0)
t.av(a,8)
c.toString
s=H.cO(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.x(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.x(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.c_(p-1)
t.c_(a)}return t.be(b)},
zq:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cw(c)
s=new Uint8Array(t)
r=new B.da(null,0)
r.a=J.dW(a,b)
for(q=0;q<c;){p=r.ca()+1
o=r.ca()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.x(s,m)
s[m]=o}q+=p}return s}},R={
FR:function(a){var t,s
if(a.gv(a).aP(0,1)){a.B(0,1)
a.B(0,1)
t=!0}else t=!1
s=a.B(0,0)
s.gi4(s).gih().ec("checking for two players, ps is "+H.D(a)+", ret is "+t)
return t},
FO:function(a){a.gar(a).gbw()
return!1},
FE:function(a){a.gar(a).gbw()
return!1},
FQ:function(a){a.gar(a).gbw()
return!1},
FP:function(a){a.gar(a).gbw()
return!1},
FN:function(a){return a.gar(a).gbx().gig()},
FL:function(a){return a.gar(a).gbx().gic()},
FK:function(a){return a.gar(a).gbx().gib()},
FH:function(a){return a.gar(a).gbx().gi9()},
FJ:function(a){return a.gar(a).gbx().gia()},
FM:function(a){return a.gar(a).gbx().gie()},
FI:function(a){var t=a.gar(a)
t.gbw()
t.gbw()
return!1},
FF:function(a){return!0},
FG:function(a){a.gar(a).gi6()
return!1},
nY:function nY(){},
ae:function ae(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
a3:function a3(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
al:function al(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
bv:function bv(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
oc:function oc(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.a9=a9
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
_.y2=y2},
p7:function p7(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
ha:function ha(){},
uo:function uo(){},
un:function un(){}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,V,Z,X,N,E,B,Q,G,D,F,R]
setFunctionNamesIfNecessary(v)
var $={}
H.u3.prototype={}
J.k.prototype={
a_:function(a,b){return a===b},
gal:function(a){return H.eu(a)},
H:function(a){return H.nV(a)},
gap:function(a){return new H.dS(H.ke(a),null)},
$isha:1,
$isao:1,
$isfh:1,
$isao:1,
$ismE:1,
$isk:1,
$ismE:1,
$isk:1,
$ishu:1,
$isao:1}
J.mC.prototype={
H:function(a){return String(a)},
gal:function(a){return a?519018:218159},
gap:function(a){return C.ae},
$isd6:1}
J.mD.prototype={
a_:function(a,b){return null==b},
H:function(a){return"null"},
gal:function(a){return 0},
gap:function(a){return C.a8},
$isd2:1}
J.hm.prototype={
gal:function(a){return 0},
gap:function(a){return C.a7},
H:function(a){return String(a)},
$ismE:1,
h:function(a,b){return a.add(b)},
aB:function(a,b){return a.remove(b)},
gv:function(a){return a.length},
gc7:function(a){return a.left},
gcd:function(a){return a.top},
gbg:function(a){return a.width},
gba:function(a){return a.height},
hF:function(a,b){return a.parse(b)},
eK:function(a,b){return a.setLogging(b)},
eL:function(a,b){return a.setMaterials(b)}}
J.nP.prototype={}
J.eF.prototype={}
J.ep.prototype={
H:function(a){var t=a[$.$get$vx()]
return t==null?this.eQ(a):J.cJ(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.en.prototype={
c2:function(a,b){if(!!a.immutable$list)throw H.m(new P.aa(b))},
cL:function(a,b){if(!!a.fixed$length)throw H.m(new P.aa(b))},
h:function(a,b){this.cL(a,"add")
a.push(b)},
ao:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.m(new P.bO(a))}},
aJ:function(a,b){return new H.fd(a,b,[H.O(a,0),null])},
br:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.D(a[r])
if(r>=t)return H.x(s,r)
s[r]=q}return s.join(b)},
d9:function(a,b){return H.wX(a,b,null,H.O(a,0))},
hg:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.m(new P.bO(a))}return s},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
cj:function(a,b,c){if(b<0||b>a.length)throw H.m(P.bE(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.m(H.bp(c))
if(c<b||c>a.length)throw H.m(P.bE(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.O(a,0)])
return H.a(a.slice(b,c),[H.O(a,0)])},
gar:function(a){if(a.length>0)return a[0]
throw H.m(H.jk())},
gbk:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.m(H.jk())},
an:function(a,b,c,d,e){var t,s,r
this.c2(a,"setRange")
P.dg(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.ba(P.bE(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.m(H.ww())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.x(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.x(d,r)
a[b+s]=d[r]}},
aL:function(a,b,c,d){return this.an(a,b,c,d,0)},
c5:function(a,b,c,d){var t
this.c2(a,"fill range")
P.dg(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aO:function(a,b,c,d){var t,s,r,q,p,o
this.cL(a,"replaceRange")
P.dg(b,c,a.length,null,null,null)
d=C.c.aC(d)
if(typeof c!=="number")return c.ay()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.aL(a,b,r,d)
if(p!==0){this.an(a,r,o,a,c)
this.sv(a,o)}}else{o=q+(s-t)
this.sv(a,o)
this.an(a,r,o,a,c)
this.aL(a,b,r,d)}},
he:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.m(new P.bO(a))}return!0},
da:function(a,b){var t
this.c2(a,"sort")
t=b==null?P.Hn():b
H.jF(a,0,a.length-1,t)},
eM:function(a){return this.da(a,null)},
bb:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.bc(a[t],b))return t
return-1},
bq:function(a,b){return this.bb(a,b,0)},
aw:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bc(a[t],b))return!0
return!1},
gaa:function(a){return a.length===0},
H:function(a){return P.jj(a,"[","]")},
ai:function(a,b){var t=H.a(a.slice(0),[H.O(a,0)])
return t},
aC:function(a){return this.ai(a,!0)},
gac:function(a){return new J.i3(a,a.length,0,null,[H.O(a,0)])},
gal:function(a){return H.eu(a)},
gv:function(a){return a.length},
sv:function(a,b){this.cL(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.dX(b,"newLength",null))
if(b<0)throw H.m(P.bE(b,0,null,"newLength",null))
a.length=b},
B:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c4(a,b))
if(b>=a.length||b<0)throw H.m(H.c4(a,b))
return a[b]},
i:function(a,b,c){this.c2(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c4(a,b))
if(b>=a.length||b<0)throw H.m(H.c4(a,b))
a[b]=c},
$isaN:1,
$asaN:function(){},
$isr:1,
$asr:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
J.u2.prototype={}
J.i3.prototype={
gY:function(){return this.d},
L:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.m(H.ci(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fc.prototype={
aM:function(a,b){var t
if(typeof b!=="number")throw H.m(H.bp(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcS(b)
if(this.gcS(a)===t)return 0
if(this.gcS(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcS:function(a){return a===0?1/a<0:a<0},
ax:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.m(new P.aa(""+a+".floor()"))},
bI:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.m(new P.aa(""+a+".round()"))},
aq:function(a,b,c){if(C.a.aM(b,c)>0)throw H.m(H.bp(b))
if(this.aM(a,b)<0)return b
if(this.aM(a,c)>0)return c
return a},
l:function(a){return a},
bK:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.m(P.bE(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.ad(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.ba(new P.aa("Unexpected toString result: "+t))
r=J.bg(s)
t=r.B(s,1)
q=+r.B(s,3)
if(r.B(s,2)!=null){t+=r.B(s,2)
q-=r.B(s,2).length}return t+C.c.aF("0",q)},
H:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gal:function(a){return a&0x1FFFFFFF},
d6:function(a){return-a},
a3:function(a,b){if(typeof b!=="number")throw H.m(H.bp(b))
return a+b},
aF:function(a,b){if(typeof b!=="number")throw H.m(H.bp(b))
return a*b},
bO:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
df:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dU(a,b)},
aA:function(a,b){return(a|0)===a?a/b|0:this.dU(a,b)},
dU:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.m(new P.aa("Result of truncating division is "+H.D(t)+": "+H.D(a)+" ~/ "+H.D(b)))},
aH:function(a,b){if(typeof b!=="number")throw H.m(H.bp(b))
if(b<0)throw H.m(H.bp(b))
return b>31?0:a<<b>>>0},
aD:function(a,b){return b>31?0:a<<b>>>0},
b6:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fN:function(a,b){if(b<0)throw H.m(H.bp(b))
return b>31?0:a>>>b},
dT:function(a,b){return b>31?0:a>>>b},
aj:function(a,b){if(typeof b!=="number")throw H.m(H.bp(b))
return a<b},
aP:function(a,b){if(typeof b!=="number")throw H.m(H.bp(b))
return a>b},
aG:function(a,b){if(typeof b!=="number")throw H.m(H.bp(b))
return a>=b},
gap:function(a){return C.ah},
$isdn:1}
J.jn.prototype={
gap:function(a){return C.ag},
$isa4:1,
$isdn:1,
$isG:1}
J.jm.prototype={
gap:function(a){return C.af},
$isa4:1,
$isdn:1}
J.eo.prototype={
ad:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c4(a,b))
if(b<0)throw H.m(H.c4(a,b))
if(b>=a.length)H.ba(H.c4(a,b))
return a.charCodeAt(b)},
ak:function(a,b){if(b>=a.length)throw H.m(H.c4(a,b))
return a.charCodeAt(b)},
cI:function(a,b,c){if(c>b.length)throw H.m(P.bE(c,0,b.length,null,null))
return new H.r3(b,a,c)},
b7:function(a,b){return this.cI(a,b,0)},
ei:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.m(P.bE(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.ad(b,c+s)!==this.ak(a,s))return
return new H.jK(c,b,a)},
a3:function(a,b){if(typeof b!=="string")throw H.m(P.dX(b,null,null))
return a+b},
hd:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.au(a,s-t)},
d0:function(a,b,c){return H.xY(a,b,c)},
hR:function(a,b,c){return H.HR(a,b,c,null)},
eN:function(a,b){if(b==null)H.ba(H.bp(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hl&&b.gdH().exec("").length-2===0)return a.split(b.gfC())
else return this.fh(a,b)},
aO:function(a,b,c,d){var t,s
H.v3(b)
c=P.dg(b,c,a.length,null,null,null)
H.v3(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fh:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.C])
for(s=J.y1(b,a),s=s.gac(s),r=0,q=1;s.L();){p=s.gY()
o=p.gdc(p)
n=p.ge4(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.O(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.au(a,r))
return t},
aQ:function(a,b,c){var t
H.v3(c)
if(typeof c!=="number")return c.aj()
if(c<0||c>a.length)throw H.m(P.bE(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.yf(b,a,c)!=null},
at:function(a,b){return this.aQ(a,b,0)},
O:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.ba(H.bp(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.ba(H.bp(c))
if(typeof b!=="number")return b.aj()
if(b<0)throw H.m(P.jC(b,null,null))
if(typeof c!=="number")return H.au(c)
if(b>c)throw H.m(P.jC(b,null,null))
if(c>a.length)throw H.m(P.jC(c,null,null))
return a.substring(b,c)},
au:function(a,b){return this.O(a,b,null)},
hX:function(a){return a.toUpperCase()},
bs:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.ak(t,0)===133){r=J.F9(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.ad(t,q)===133?J.u_(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eu:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.ad(t,r)===133)s=J.u_(t,r)}else{s=J.u_(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
aF:function(a,b){var t,s
if(typeof b!=="number")return H.au(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.m(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
bb:function(a,b,c){var t
if(c<0||c>a.length)throw H.m(P.bE(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bq:function(a,b){return this.bb(a,b,0)},
hx:function(a,b,c){var t
if(b==null)H.ba(H.bp(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.ba(P.bE(t,0,c,null,null))
if(b.cs(a,t)!=null)return t}return-1},
ef:function(a,b){return this.hx(a,b,null)},
e2:function(a,b,c){if(c>a.length)throw H.m(P.bE(c,0,a.length,null,null))
return H.HQ(a,b,c)},
aw:function(a,b){return this.e2(a,b,0)},
gaa:function(a){return a.length===0},
aM:function(a,b){var t
if(typeof b!=="string")throw H.m(H.bp(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
H:function(a){return a},
gal:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gap:function(a){return C.a9},
gv:function(a){return a.length},
B:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c4(a,b))
if(b>=a.length||b<0)throw H.m(H.c4(a,b))
return a[b]},
$isaN:1,
$asaN:function(){},
$isC:1}
H.kM.prototype={
gv:function(a){return this.a.length},
B:function(a,b){return C.c.ad(this.a,b)},
$ashL:function(){return[P.G]},
$asjo:function(){return[P.G]},
$ashD:function(){return[P.G]},
$asr:function(){return[P.G]},
$asv:function(){return[P.G]},
$asp:function(){return[P.G]}}
H.v.prototype={$asv:null}
H.eq.prototype={
gac:function(a){return new H.er(this,this.gv(this),0,null,[H.aU(this,"eq",0)])},
ao:function(a,b){var t,s
t=this.gv(this)
for(s=0;s<t;++s){b.$1(this.a0(0,s))
if(t!==this.gv(this))throw H.m(new P.bO(this))}},
gaa:function(a){return this.gv(this)===0},
gar:function(a){if(this.gv(this)===0)throw H.m(H.jk())
return this.a0(0,0)},
aw:function(a,b){var t,s
t=this.gv(this)
for(s=0;s<t;++s){if(J.bc(this.a0(0,s),b))return!0
if(t!==this.gv(this))throw H.m(new P.bO(this))}return!1},
aJ:function(a,b){return new H.fd(this,b,[H.aU(this,"eq",0),null])},
ai:function(a,b){var t,s,r
t=H.a([],[H.aU(this,"eq",0)])
C.b.sv(t,this.gv(this))
for(s=0;s<this.gv(this);++s){r=this.a0(0,s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
aC:function(a){return this.ai(a,!0)}}
H.p5.prototype={
gfi:function(){var t=J.cj(this.a)
return t},
gfO:function(){var t,s
t=J.cj(this.a)
s=this.b
if(J.cu(s,t))return t
return s},
gv:function(a){var t,s
t=J.cj(this.a)
s=this.b
if(J.va(s,t))return 0
if(typeof s!=="number")return H.au(s)
return t-s},
a0:function(a,b){var t=J.e8(this.gfO(),b)
if(J.e9(b,0)||J.va(t,this.gfi()))throw H.m(P.bt(b,this,"index",null,null))
return J.vd(this.a,t)},
ai:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bg(s)
q=r.gv(s)
if(typeof t!=="number")return H.au(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sv(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.a0(s,t+m)
if(m>=n.length)return H.x(n,m)
n[m]=o
if(r.gv(s)<q)throw H.m(new P.bO(this))}return n},
aC:function(a){return this.ai(a,!0)},
eY:function(a,b,c,d){var t=this.b
if(J.e9(t,0))H.ba(P.bE(t,0,null,"start",null))}}
H.er.prototype={
gY:function(){return this.d},
L:function(){var t,s,r,q
t=this.a
s=J.bg(t)
r=s.gv(t)
if(this.b!==r)throw H.m(new P.bO(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.a0(t,q);++this.c
return!0}}
H.ht.prototype={
gac:function(a){return new H.jp(null,J.d8(this.a),this.b,this.$ti)},
gv:function(a){return J.cj(this.a)},
gaa:function(a){return J.rV(this.a)},
$asp:function(a,b){return[b]}}
H.fU.prototype={$isv:1,
$asv:function(a,b){return[b]},
$asp:function(a,b){return[b]}}
H.jp.prototype={
L:function(){var t=this.b
if(t.L()){this.a=this.c.$1(t.gY())
return!0}this.a=null
return!1},
gY:function(){return this.a},
$asjl:function(a,b){return[b]}}
H.fd.prototype={
gv:function(a){return J.cj(this.a)},
a0:function(a,b){return this.b.$1(J.vd(this.a,b))},
$aseq:function(a,b){return[b]},
$asv:function(a,b){return[b]},
$asp:function(a,b){return[b]}}
H.hP.prototype={
gac:function(a){return new H.jP(J.d8(this.a),this.b,this.$ti)},
aJ:function(a,b){return new H.ht(this,b,[H.O(this,0),null])}}
H.jP.prototype={
L:function(){var t,s
for(t=this.a,s=this.b;t.L();)if(s.$1(t.gY())===!0)return!0
return!1},
gY:function(){return this.a.gY()}}
H.iv.prototype={
sv:function(a,b){throw H.m(new P.aa("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.m(new P.aa("Cannot add to a fixed-length list"))},
aO:function(a,b,c,d){throw H.m(new P.aa("Cannot remove from a fixed-length list"))}}
H.pw.prototype={
i:function(a,b,c){throw H.m(new P.aa("Cannot modify an unmodifiable list"))},
sv:function(a,b){throw H.m(new P.aa("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.m(new P.aa("Cannot add to an unmodifiable list"))},
an:function(a,b,c,d,e){throw H.m(new P.aa("Cannot modify an unmodifiable list"))},
aL:function(a,b,c,d){return this.an(a,b,c,d,0)},
aO:function(a,b,c,d){throw H.m(new P.aa("Cannot remove from an unmodifiable list"))},
c5:function(a,b,c,d){throw H.m(new P.aa("Cannot modify an unmodifiable list"))},
$isr:1,
$asr:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
H.hL.prototype={$asr:null,$asv:null,$asp:null,$isr:1,$isv:1,$isp:1}
H.rS.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rT.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qM.prototype={}
H.ft.prototype={
dZ:function(a,b){if(!this.f.a_(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cG()},
hQ:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.aB(0,a)
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
if(q===s.c)s.dB();++s.d}this.y=!1}this.cG()},
fS:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aQ(a),s=0;r=this.ch,s<r.length;s+=2)if(t.a_(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.x(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hO:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aQ(a),s=0;r=this.ch,s<r.length;s+=2)if(t.a_(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.ba(new P.aa("removeRange"))
P.dg(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eJ:function(a,b){if(!this.r.a_(0,a))return
this.db=b},
hm:function(a,b,c){var t=J.aQ(b)
if(!t.a_(b,0))t=t.a_(b,1)&&!this.cy
else t=!0
if(t){J.fC(a,c)
return}t=this.cx
if(t==null){t=P.u9(null,null)
this.cx=t}t.aY(0,new H.qH(a,c))},
hl:function(a,b){var t
if(!this.r.a_(0,a))return
t=J.aQ(b)
if(!t.a_(b,0))t=t.a_(b,1)&&!this.cy
else t=!0
if(t){this.c6()
return}t=this.cx
if(t==null){t=P.u9(null,null)
this.cx=t}t.aY(0,this.ghw())},
hn:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fA(a)
if(b!=null)P.fA(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cJ(a)
s[1]=b==null?null:J.cJ(b)
for(r=new P.dz(t,t.r,null,null,[null]),r.c=t.e;r.L();)J.fC(r.d,s)},
bB:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.ct(o)
p=H.cs(o)
this.hn(q,p)
if(this.db===!0){this.c6()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghv()
if(this.cx!=null)for(;n=this.cx,!n.gaa(n);)this.cx.en().$0()}return s},
cT:function(a){return this.b.B(0,a)},
dj:function(a,b){var t=this.b
if(t.ae(0,a))throw H.m(P.li("Registry: ports must be registered only once."))
t.i(0,a,b)},
cG:function(){var t=this.b
if(t.gv(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.c6()},
c6:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bo(0)
for(t=this.b,s=t.gce(t),s=s.gac(s);s.L();)s.gY().fa()
t.bo(0)
this.c.bo(0)
u.globalState.z.aB(0,this.a)
this.dx.bo(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.x(t,p)
J.fC(q,t[p])}this.ch=null}},
ghv:function(){return this.d},
gh2:function(){return this.e}}
H.qH.prototype={
$0:function(){J.fC(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qi.prototype={
h7:function(){var t=this.a
if(t.b===t.c)return
return t.en()},
er:function(){var t,s,r
t=this.h7()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.ae(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gaa(s)}else s=!1
else s=!1
else s=!1
if(s)H.ba(P.li("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gaa(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hp(["command","close"])
r=new H.dA(!0,new P.k2(0,null,null,null,null,null,0,[null,P.G])).aK(r)
s.toString
self.postMessage(r)}return!1}t.hL()
return!0},
dO:function(){if(self.window!=null)new H.qj(this).$0()
else for(;this.er(););},
bJ:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dO()
else try{this.dO()}catch(r){t=H.ct(r)
s=H.cs(r)
q=u.globalState.Q
p=P.hp(["command","error","msg",H.D(t)+"\n"+H.D(s)])
p=new H.dA(!0,P.hW(null,P.G)).aK(p)
q.toString
self.postMessage(p)}}}
H.qj.prototype={
$0:function(){if(!this.a.er())return
P.wY(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.eK.prototype={
hL:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bB(this.b)}}
H.qL.prototype={}
H.mk.prototype={
$0:function(){H.Ad(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ml.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fz(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fz(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cG()},
$S:function(){return{func:1,v:true}}}
H.q5.prototype={}
H.fu.prototype={
bi:function(a,b){var t,s,r
t=u.globalState.z.B(0,this.a)
if(t==null)return
s=this.b
if(s.gdG())return
r=H.H_(b)
if(t.gh2()===s){s=J.bg(r)
switch(s.B(r,0)){case"pause":t.dZ(s.B(r,1),s.B(r,2))
break
case"resume":t.hQ(s.B(r,1))
break
case"add-ondone":t.fS(s.B(r,1),s.B(r,2))
break
case"remove-ondone":t.hO(s.B(r,1))
break
case"set-errors-fatal":t.eJ(s.B(r,1),s.B(r,2))
break
case"ping":t.hm(s.B(r,1),s.B(r,2),s.B(r,3))
break
case"kill":t.hl(s.B(r,1),s.B(r,2))
break
case"getErrors":s=s.B(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.B(r,1)
t.dx.aB(0,s)
break}return}u.globalState.f.a.aY(0,new H.eK(t,new H.qO(this,r),"receive"))},
a_:function(a,b){if(b==null)return!1
return b instanceof H.fu&&J.bc(this.b,b.b)},
gal:function(a){return this.b.gcu()}}
H.qO.prototype={
$0:function(){var t=this.a.b
if(!t.gdG())t.f6(0,this.b)},
$S:function(){return{func:1}}}
H.hZ.prototype={
bi:function(a,b){var t,s,r
t=P.hp(["command","message","port",this,"msg",b])
s=new H.dA(!0,P.hW(null,P.G)).aK(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.B(0,this.b)
if(r!=null)r.postMessage(s)}},
a_:function(a,b){if(b==null)return!1
return b instanceof H.hZ&&J.bc(this.b,b.b)&&J.bc(this.a,b.a)&&J.bc(this.c,b.c)},
gal:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aH()
s=this.a
if(typeof s!=="number")return s.aH()
r=this.c
if(typeof r!=="number")return H.au(r)
return(t<<16^s<<8^r)>>>0}}
H.fk.prototype={
fa:function(){this.c=!0
this.b=null},
f6:function(a,b){if(this.c)return
this.b.$1(b)},
$isFT:1,
gcu:function(){return this.a},
gdG:function(){return this.c}}
H.pn.prototype={
eZ:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aY(0,new H.eK(s,new H.po(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dk(new H.pp(this,b),0),a)}else throw H.m(new P.aa("Timer greater than 0."))}}
H.po.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pp.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dF.prototype={
gal:function(a){var t=this.a
if(typeof t!=="number")return t.d8()
t=C.d.b6(t,0)^C.d.aA(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
a_:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dF){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcu:function(){return this.a}}
H.dA.prototype={
aK:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.B(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gv(t))
t=J.aQ(a)
if(!!t.$isfe)return["buffer",a]
if(!!t.$iset)return["typed",a]
if(!!t.$isaN)return this.eF(a)
if(!!t.$isAa){r=this.geC()
q=t.gee(a)
q=H.du(q,r,H.aU(q,"p",0),null)
q=P.df(q,!0,H.aU(q,"p",0))
t=t.gce(a)
t=H.du(t,r,H.aU(t,"p",0),null)
return["map",q,P.df(t,!0,H.aU(t,"p",0))]}if(!!t.$ismE)return this.eG(a)
if(!!t.$isk)this.ev(a)
if(!!t.$isFT)this.bM(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfu)return this.eH(a)
if(!!t.$ishZ)return this.eI(a)
if(!!t.$iseT){p=a.$static_name
if(p==null)this.bM(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdF)return["capability",a.a]
if(!(a instanceof P.ao))this.ev(a)
return["dart",u.classIdExtractor(a),this.eE(u.classFieldsExtractor(a))]},
bM:function(a,b){throw H.m(new P.aa((b==null?"Can't transmit:":b)+" "+H.D(a)))},
ev:function(a){return this.bM(a,null)},
eF:function(a){var t=this.eD(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bM(a,"Can't serialize indexable: ")},
eD:function(a){var t,s,r
t=[]
C.b.sv(t,a.length)
for(s=0;s<a.length;++s){r=this.aK(a[s])
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
eE:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aK(a[t]))
return a},
eG:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bM(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sv(s,t.length)
for(r=0;r<t.length;++r){q=this.aK(a[t[r]])
if(r>=s.length)return H.x(s,r)
s[r]=q}return["js-object",t,s]},
eI:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eH:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcu()]
return["raw sendport",a]}}
H.eJ.prototype={
b8:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.m(P.dE("Bad serialized message: "+H.D(a)))
switch(C.b.gar(a)){case"ref":if(1>=a.length)return H.x(a,1)
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
s=H.a(this.bz(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bz(r),[null])
case"mutable":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return this.bz(r)
case"const":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bz(r),[null])
s.fixed$length=Array
return s
case"map":return this.hb(a)
case"sendport":return this.hc(a)
case"raw sendport":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.ha(a)
case"function":if(1>=a.length)return H.x(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.x(a,1)
return new H.dF(a[1])
case"dart":s=a.length
if(1>=s)return H.x(a,1)
q=a[1]
if(2>=s)return H.x(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bz(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.m("couldn't deserialize: "+H.D(a))}},
bz:function(a){var t,s,r
t=J.bg(a)
s=0
while(!0){r=t.gv(a)
if(typeof r!=="number")return H.au(r)
if(!(s<r))break
t.i(a,s,this.b8(t.B(a,s)));++s}return a},
hb:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.x(a,1)
s=a[1]
if(2>=t)return H.x(a,2)
r=a[2]
q=P.mU()
this.b.push(q)
s=J.yk(J.vi(s,this.gh9()))
for(t=J.bg(s),p=J.bg(r),o=0;o<t.gv(s);++o)q.i(0,t.B(s,o),this.b8(p.B(r,o)))
return q},
hc:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.x(a,1)
s=a[1]
if(2>=t)return H.x(a,2)
r=a[2]
if(3>=t)return H.x(a,3)
q=a[3]
if(J.bc(s,u.globalState.b)){p=u.globalState.z.B(0,r)
if(p==null)return
o=p.cT(q)
if(o==null)return
n=new H.fu(o,r)}else n=new H.hZ(s,q,r)
this.b.push(n)
return n},
ha:function(a){var t,s,r,q,p,o,n
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
while(!0){n=t.gv(s)
if(typeof n!=="number")return H.au(n)
if(!(o<n))break
q[t.B(s,o)]=this.b8(p.B(r,o));++o}return q}}
H.kP.prototype={
gaa:function(a){return this.gv(this)===0},
H:function(a){return P.wD(this)},
i:function(a,b,c){return H.zg()},
$isbn:1,
$asbn:null}
H.kQ.prototype={
gv:function(a){return this.a},
ae:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
B:function(a,b){if(!this.ae(0,b))return
return this.dA(b)},
dA:function(a){return this.b[a]},
ao:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dA(q))}}}
H.o5.prototype={}
H.pt.prototype={
aT:function(a){var t,s,r
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
H.jv.prototype={
H:function(a){var t=this.b
if(t==null)return"NullError: "+H.D(this.a)
return"NullError: method not found: '"+H.D(t)+"' on null"}}
H.mH.prototype={
H:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.D(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.D(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.D(this.a)+")"}}
H.pv.prototype={
H:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h1.prototype={
gaW:function(){return this.b}}
H.rU.prototype={
$1:function(a){if(!!J.aQ(a).$ised)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.k5.prototype={
H:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rH.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rI.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rJ.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rK.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.rL.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eT.prototype={
H:function(a){return"Closure '"+H.nW(this).trim()+"'"},
gi2:function(){return this},
$D:null}
H.pa.prototype={}
H.oG.prototype={
H:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fJ.prototype={
a_:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fJ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gal:function(a){var t,s
t=this.c
if(t==null)s=H.eu(this.a)
else s=typeof t!=="object"?J.dD(t):H.eu(t)
t=H.eu(this.b)
if(typeof s!=="number")return s.i5()
return(s^t)>>>0},
H:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.D(this.d)+"' of "+H.nV(t)}}
H.kJ.prototype={
H:function(a){return this.a}}
H.od.prototype={
H:function(a){return"RuntimeError: "+H.D(this.a)}}
H.dS.prototype={
H:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gal:function(a){return J.dD(this.a)},
a_:function(a,b){if(b==null)return!1
return b instanceof H.dS&&J.bc(this.a,b.a)}}
H.q.prototype={
gv:function(a){return this.a},
gaa:function(a){return this.a===0},
gee:function(a){return new H.mS(this,[H.O(this,0)])},
gce:function(a){return H.du(this.gee(this),new H.mG(this),H.O(this,0),H.O(this,1))},
ae:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dt(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dt(s,b)}else return this.hs(b)},
hs:function(a){var t=this.d
if(t==null)return!1
return this.bE(this.bR(t,this.bD(a)),a)>=0},
bZ:function(a,b){b.ao(0,new H.mF(this))},
B:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bv(t,b)
return s==null?null:s.gb9()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bv(r,b)
return s==null?null:s.gb9()}else return this.ht(b)},
ht:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bR(t,this.bD(a))
r=this.bE(s,a)
if(r<0)return
return s[r].gb9()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.cw()
this.b=t}this.di(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cw()
this.c=s}this.di(s,b,c)}else{r=this.d
if(r==null){r=this.cw()
this.d=r}q=this.bD(b)
p=this.bR(r,q)
if(p==null)this.cE(r,q,[this.cz(b,c)])
else{o=this.bE(p,b)
if(o>=0)p[o].sb9(c)
else p.push(this.cz(b,c))}}},
aB:function(a,b){if(typeof b==="string")return this.dN(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dN(this.c,b)
else return this.hu(b)},
hu:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bR(t,this.bD(a))
r=this.bE(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dW(q)
return q.gb9()},
bo:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ao:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.m(new P.bO(this))
t=t.c}},
di:function(a,b,c){var t=this.bv(a,b)
if(t==null)this.cE(a,b,this.cz(b,c))
else t.sb9(c)},
dN:function(a,b){var t
if(a==null)return
t=this.bv(a,b)
if(t==null)return
this.dW(t)
this.dw(a,b)
return t.gb9()},
cz:function(a,b){var t,s
t=new H.mR(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dW:function(a){var t,s
t=a.gfH()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bD:function(a){return J.dD(a)&0x3ffffff},
bE:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bc(a[s].geb(),b))return s
return-1},
H:function(a){return P.wD(this)},
bv:function(a,b){return a[b]},
bR:function(a,b){return a[b]},
cE:function(a,b,c){a[b]=c},
dw:function(a,b){delete a[b]},
dt:function(a,b){return this.bv(a,b)!=null},
cw:function(){var t=Object.create(null)
this.cE(t,"<non-identifier-key>",t)
this.dw(t,"<non-identifier-key>")
return t},
$isAa:1,
$isbn:1,
$asbn:null}
H.mG.prototype={
$1:function(a){return this.a.B(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mF.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eM(function(a,b){return{func:1,args:[a,b]}},this.a,"q")}}
H.mR.prototype={
geb:function(){return this.a},
gb9:function(){return this.b},
gfH:function(){return this.d},
sb9:function(a){return this.b=a}}
H.mS.prototype={
gv:function(a){return this.a.a},
gaa:function(a){return this.a.a===0},
gac:function(a){var t,s
t=this.a
s=new H.mT(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
aw:function(a,b){return this.a.ae(0,b)},
ao:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.m(new P.bO(t))
s=s.c}}}
H.mT.prototype={
gY:function(){return this.d},
L:function(){var t=this.a
if(this.b!==t.r)throw H.m(new P.bO(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rD.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rE.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.C]}}}
H.rF.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.C]}}}
H.hl.prototype={
H:function(a){return"RegExp/"+this.a+"/"},
gdI:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.u0(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdH:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.u0(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cI:function(a,b,c){if(c>b.length)throw H.m(P.bE(c,0,b.length,null,null))
return new H.q0(this,b,c)},
b7:function(a,b){return this.cI(a,b,0)},
fj:function(a,b){var t,s
t=this.gdI()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.k3(this,s)},
cs:function(a,b){var t,s
t=this.gdH()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.x(s,-1)
if(s.pop()!=null)return
return new H.k3(this,s)},
ei:function(a,b,c){if(c<0||c>b.length)throw H.m(P.bE(c,0,b.length,null,null))
return this.cs(b,c)},
$isFV:1,
gfC:function(){return this.b}}
H.k3.prototype={
gdc:function(a){return this.b.index},
ge4:function(a){var t=this.b
return t.index+t[0].length},
bm:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.x(t,a)
return t[a]},
B:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
$isdv:1}
H.q0.prototype={
gac:function(a){return new H.jU(this.a,this.b,this.c,null)},
$ashk:function(){return[P.dv]},
$asp:function(){return[P.dv]}}
H.jU.prototype={
gY:function(){return this.d},
L:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.fj(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jK.prototype={
ge4:function(a){return this.a+this.c.length},
B:function(a,b){return this.bm(b)},
bm:function(a){if(a!==0)throw H.m(P.jC(a,null,null))
return this.c},
$isdv:1,
gdc:function(a){return this.a}}
H.r3.prototype={
gac:function(a){return new H.r4(this.a,this.b,this.c,null)},
$asp:function(){return[P.dv]}}
H.r4.prototype={
L:function(){var t,s,r,q,p,o,n
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
this.d=new H.jK(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gY:function(){return this.d}}
H.fe.prototype={
gap:function(a){return C.a0},
fY:function(a,b,c){return H.cO(a,b,c)},
fX:function(a){return this.fY(a,0,null)},
fW:function(a,b,c){var t
H.xv(a,b,c)
t=new DataView(a,b)
return t},
fV:function(a,b){return this.fW(a,b,null)},
$isfe:1,
$isbh:1,
geg:function(a){return a.byteLength}}
H.et.prototype={
fz:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.dX(b,d,"Invalid list position"))
else throw H.m(P.bE(b,0,c,d,null))},
dm:function(a,b,c,d){if(b>>>0!==b||b>c)this.fz(a,b,c,d)},
$iset:1,
gc0:function(a){return a.buffer},
geg:function(a){return a.byteLength}}
H.nm.prototype={
gap:function(a){return C.a1}}
H.js.prototype={
gv:function(a){return a.length},
dS:function(a,b,c,d,e){var t,s,r
t=a.length
this.dm(a,b,t,"start")
this.dm(a,c,t,"end")
if(typeof b!=="number")return b.aP()
if(typeof c!=="number")return H.au(c)
if(b>c)throw H.m(P.bE(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.aj()
if(e<0)throw H.m(P.dE(e))
r=d.length
if(r-e<s)throw H.m(new P.dP("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaT:1,
$asaT:function(){},
$isaN:1,
$asaN:function(){}}
H.hx.prototype={
B:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
a[b]=c},
an:function(a,b,c,d,e){if(!!J.aQ(d).$ishx){this.dS(a,b,c,d,e)
return}this.de(a,b,c,d,e)},
aL:function(a,b,c,d){return this.an(a,b,c,d,0)}}
H.hz.prototype={
$asaT:function(){},
$asaN:function(){},
$asr:function(){return[P.a4]},
$asv:function(){return[P.a4]},
$asp:function(){return[P.a4]},
$isr:1,
$isv:1,
$isp:1}
H.hB.prototype={
$asaT:function(){},
$asaN:function(){},
$asr:function(){return[P.a4]},
$asv:function(){return[P.a4]},
$asp:function(){return[P.a4]}}
H.hy.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
a[b]=c},
an:function(a,b,c,d,e){if(!!J.aQ(d).$ishy){this.dS(a,b,c,d,e)
return}this.de(a,b,c,d,e)},
aL:function(a,b,c,d){return this.an(a,b,c,d,0)},
$isr:1,
$asr:function(){return[P.G]},
$isv:1,
$asv:function(){return[P.G]},
$isp:1,
$asp:function(){return[P.G]}}
H.hA.prototype={
$asaT:function(){},
$asaN:function(){},
$asr:function(){return[P.G]},
$asv:function(){return[P.G]},
$asp:function(){return[P.G]},
$isr:1,
$isv:1,
$isp:1}
H.hC.prototype={
$asaT:function(){},
$asaN:function(){},
$asr:function(){return[P.G]},
$asv:function(){return[P.G]},
$asp:function(){return[P.G]}}
H.nn.prototype={
gap:function(a){return C.a2},
$isr:1,
$asr:function(){return[P.a4]},
$isv:1,
$asv:function(){return[P.a4]},
$isp:1,
$asp:function(){return[P.a4]}}
H.no.prototype={
gap:function(a){return C.a3},
$isr:1,
$asr:function(){return[P.a4]},
$isv:1,
$asv:function(){return[P.a4]},
$isp:1,
$asp:function(){return[P.a4]}}
H.np.prototype={
gap:function(a){return C.a4},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.G]},
$isv:1,
$asv:function(){return[P.G]},
$isp:1,
$asp:function(){return[P.G]}}
H.nq.prototype={
gap:function(a){return C.a5},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.G]},
$isv:1,
$asv:function(){return[P.G]},
$isp:1,
$asp:function(){return[P.G]}}
H.nr.prototype={
gap:function(a){return C.a6},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.G]},
$isv:1,
$asv:function(){return[P.G]},
$isp:1,
$asp:function(){return[P.G]}}
H.ns.prototype={
gap:function(a){return C.aa},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.G]},
$isv:1,
$asv:function(){return[P.G]},
$isp:1,
$asp:function(){return[P.G]}}
H.nt.prototype={
gap:function(a){return C.ab},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.G]},
$isv:1,
$asv:function(){return[P.G]},
$isp:1,
$asp:function(){return[P.G]}}
H.jt.prototype={
gap:function(a){return C.ac},
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.G]},
$isv:1,
$asv:function(){return[P.G]},
$isp:1,
$asp:function(){return[P.G]}}
H.ff.prototype={
gap:function(a){return C.ad},
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c4(a,b))
return a[b]},
cj:function(a,b,c){return new Uint8Array(a.subarray(b,H.GZ(b,c,a.length)))},
$isff:1,
$isd5:1,
$isr:1,
$asr:function(){return[P.G]},
$isv:1,
$asv:function(){return[P.G]},
$isp:1,
$asp:function(){return[P.G]}}
P.q2.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.q1.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.q3.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.q4.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.ri.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rj.prototype={
$2:function(a,b){this.a.$2(1,new H.h1(a,b))},
$S:function(){return{func:1,args:[,P.dO]}}}
P.rt.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.G,,]}}}
P.cC.prototype={}
P.ru.prototype={
$0:function(){var t,s,r
try{this.b.aR(this.a.$0())}catch(r){t=H.ct(r)
s=H.cs(r)
P.xw(this.b,t,s)}},
$S:function(){return{func:1}}}
P.lX.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.az(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.az(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.lW.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.x(r,t)
r[t]=a
if(s===0)this.d.ds(r)}else if(t.b===0&&!this.b)this.d.az(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eU.prototype={}
P.jW.prototype={
cM:function(a,b){if(a==null)a=new P.fg()
if(this.a.a!==0)throw H.m(new P.dP("Future already completed"))
$.aE.toString
this.az(a,b)},
by:function(a){return this.cM(a,null)},
$iseU:1,
ghj:function(){return this.a}}
P.dU.prototype={
aN:function(a,b){var t=this.a
if(t.a!==0)throw H.m(new P.dP("Future already completed"))
t.dk(b)},
h0:function(a){return this.aN(a,null)},
az:function(a,b){this.a.dl(a,b)}}
P.k7.prototype={
aN:function(a,b){var t=this.a
if(t.a!==0)throw H.m(new P.dP("Future already completed"))
t.aR(b)},
az:function(a,b){this.a.az(a,b)}}
P.k_.prototype={
gfR:function(){return this.b.b},
ge7:function(){return(this.c&1)!==0},
ghq:function(){return(this.c&2)!==0},
ge6:function(){return this.c===8},
ho:function(a){return this.b.b.d1(this.d,a)},
hy:function(a){if(this.c!==6)return!0
return this.b.b.d1(this.d,J.fB(a))},
hk:function(a){var t,s,r
t=this.e
s=J.bJ(a)
r=this.b.b
if(H.fz(t,{func:1,args:[,,]}))return r.hU(t,s.gaE(a),a.gaW())
else return r.d1(t,s.gaE(a))},
hp:function(){return this.b.b.ep(this.d)},
gcA:function(){return this.a}}
P.bj.prototype={
gfA:function(){return this.a===2},
gcv:function(){return this.a>=4},
cc:function(a,b){var t=$.aE
if(t!==C.e){t.toString
if(b!=null)b=P.xz(b,t)}return this.cF(a,b)},
bd:function(a){return this.cc(a,null)},
cF:function(a,b){var t,s
t=new P.bj(0,$.aE,null,[null])
s=b==null?1:3
this.ck(new P.k_(null,t,s,a,b,[H.O(this,0),null]))
return t},
cf:function(a){var t,s
t=$.aE
s=new P.bj(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.O(this,0)
this.ck(new P.k_(null,s,8,a,null,[t,t]))
return s},
ck:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcv()){s.ck(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fx(null,null,t,new P.qo(this,a))}},
dM:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcA()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcv()){p.dM(a)
return}this.a=p.a
this.c=p.c}t.a=this.bW(a)
s=this.b
s.toString
P.fx(null,null,s,new P.qw(t,this))}},
bV:function(){var t=this.c
this.c=null
return this.bW(t)},
bW:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcA()
t.a=s}return s},
aR:function(a){var t,s
t=this.$ti
if(H.dV(a,"$iscC",t,"$ascC"))if(H.dV(a,"$isbj",t,null))P.qr(a,this)
else P.xl(a,this)
else{s=this.bV()
this.a=4
this.c=a
P.fs(this,s)}},
ds:function(a){var t=this.bV()
this.a=4
this.c=a
P.fs(this,t)},
az:function(a,b){var t=this.bV()
this.a=8
this.c=new P.eP(a,b)
P.fs(this,t)},
fc:function(a){return this.az(a,null)},
dk:function(a){var t
if(H.dV(a,"$iscC",this.$ti,"$ascC")){this.f9(a)
return}this.a=1
t=this.b
t.toString
P.fx(null,null,t,new P.qq(this,a))},
f9:function(a){var t
if(H.dV(a,"$isbj",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fx(null,null,t,new P.qv(this,a))}else P.qr(a,this)
return}P.xl(a,this)},
dl:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fx(null,null,t,new P.qp(this,a,b))},
$iscC:1,
gbX:function(){return this.a},
gfK:function(){return this.c}}
P.qo.prototype={
$0:function(){P.fs(this.a,this.b)},
$S:function(){return{func:1}}}
P.qw.prototype={
$0:function(){P.fs(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qs.prototype={
$1:function(a){var t=this.a
t.a=0
t.aR(a)},
$S:function(){return{func:1,args:[,]}}}
P.qt.prototype={
$2:function(a,b){this.a.az(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qu.prototype={
$0:function(){this.a.az(this.b,this.c)},
$S:function(){return{func:1}}}
P.qq.prototype={
$0:function(){this.a.ds(this.b)},
$S:function(){return{func:1}}}
P.qv.prototype={
$0:function(){P.qr(this.b,this.a)},
$S:function(){return{func:1}}}
P.qp.prototype={
$0:function(){this.a.az(this.b,this.c)},
$S:function(){return{func:1}}}
P.qz.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hp()}catch(q){s=H.ct(q)
r=H.cs(q)
if(this.c){p=J.fB(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eP(s,r)
o.a=!0
return}if(!!J.aQ(t).$iscC){if(t instanceof P.bj&&t.gbX()>=4){if(t.gbX()===8){p=this.b
p.b=t.gfK()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.bd(new P.qA(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qA.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qy.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.ho(this.c)}catch(r){t=H.ct(r)
s=H.cs(r)
q=this.a
q.b=new P.eP(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qx.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hy(t)===!0&&q.e!=null){p=this.b
p.b=q.hk(t)
p.a=!1}}catch(o){s=H.ct(o)
r=H.cs(o)
q=this.a
p=J.fB(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eP(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.jV.prototype={}
P.di.prototype={
aJ:function(a,b){return new P.qN(b,this,[H.aU(this,"di",0),null])},
aw:function(a,b){var t,s
t={}
s=new P.bj(0,$.aE,null,[P.d6])
t.a=null
t.a=this.b0(new P.oN(t,this,b,s),!0,new P.oO(s),s.gbn())
return s},
ao:function(a,b){var t,s
t={}
s=new P.bj(0,$.aE,null,[null])
t.a=null
t.a=this.b0(new P.oT(t,this,b,s),!0,new P.oU(s),s.gbn())
return s},
gv:function(a){var t,s
t={}
s=new P.bj(0,$.aE,null,[P.G])
t.a=0
this.b0(new P.oX(t),!0,new P.oY(t,s),s.gbn())
return s},
gaa:function(a){var t,s
t={}
s=new P.bj(0,$.aE,null,[P.d6])
t.a=null
t.a=this.b0(new P.oV(t,s),!0,new P.oW(s),s.gbn())
return s},
aC:function(a){var t,s,r
t=H.aU(this,"di",0)
s=H.a([],[t])
r=new P.bj(0,$.aE,null,[[P.r,t]])
this.b0(new P.oZ(this,s),!0,new P.p_(s,r),r.gbn())
return r},
gar:function(a){var t,s
t={}
s=new P.bj(0,$.aE,null,[H.aU(this,"di",0)])
t.a=null
t.a=this.b0(new P.oP(t,this,s),!0,new P.oQ(s),s.gbn())
return s}}
P.oN.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xD(new P.oL(this.c,a),new P.oM(t,s),P.xu(t.a,s))},
$S:function(){return H.eM(function(a){return{func:1,args:[a]}},this.b,"di")}}
P.oL.prototype={
$0:function(){return J.bc(this.b,this.a)},
$S:function(){return{func:1}}}
P.oM.prototype={
$1:function(a){if(a===!0)P.v0(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.d6]}}}
P.oO.prototype={
$0:function(){this.a.aR(!1)},
$S:function(){return{func:1}}}
P.oT.prototype={
$1:function(a){P.xD(new P.oR(this.c,a),new P.oS(),P.xu(this.a.a,this.d))},
$S:function(){return H.eM(function(a){return{func:1,args:[a]}},this.b,"di")}}
P.oR.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oS.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oU.prototype={
$0:function(){this.a.aR(null)},
$S:function(){return{func:1}}}
P.oX.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oY.prototype={
$0:function(){this.b.aR(this.a.a)},
$S:function(){return{func:1}}}
P.oV.prototype={
$1:function(a){P.v0(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oW.prototype={
$0:function(){this.a.aR(!0)},
$S:function(){return{func:1}}}
P.oZ.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eM(function(a){return{func:1,args:[a]}},this.a,"di")}}
P.p_.prototype={
$0:function(){this.b.aR(this.a)},
$S:function(){return{func:1}}}
P.oP.prototype={
$1:function(a){P.v0(this.a.a,this.c,a)},
$S:function(){return H.eM(function(a){return{func:1,args:[a]}},this.b,"di")}}
P.oQ.prototype={
$0:function(){var t,s,r,q
try{r=H.jk()
throw H.m(r)}catch(q){t=H.ct(q)
s=H.cs(q)
P.xw(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oK.prototype={}
P.dj.prototype={
cV:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.e_()
if((t&4)===0&&(this.e&32)===0)this.dC(this.gdK())},
el:function(a){return this.cV(a,null)},
eo:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gaa(t)}else t=!1
if(t)this.r.cg(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dC(this.gdL())}}}},
c1:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cm()
t=this.f
return t==null?$.$get$hb():t},
cm:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.e_()
if((this.e&32)===0)this.r=null
this.f=this.dJ()},
bQ:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dP(b)
else this.cl(new P.qc(b,null,[H.aU(this,"dj",0)]))},
bP:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dR(a,b)
else this.cl(new P.qe(a,b,null))},
f8:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dQ()
else this.cl(C.J)},
bT:function(){},
bU:function(){},
dJ:function(){return},
cl:function(a){var t,s
t=this.r
if(t==null){t=new P.r1(null,null,0,[H.aU(this,"dj",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.cg(this)}},
dP:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.d2(this.a,a)
this.e=(this.e&4294967263)>>>0
this.cn((t&4)!==0)},
dR:function(a,b){var t,s
t=this.e
s=new P.q7(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cm()
t=this.f
if(!!J.aQ(t).$iscC&&t!==$.$get$hb())t.cf(s)
else s.$0()}else{s.$0()
this.cn((t&4)!==0)}},
dQ:function(){var t,s
t=new P.q6(this)
this.cm()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aQ(s).$iscC&&s!==$.$get$hb())s.cf(t)
else t.$0()},
dC:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.cn((t&4)!==0)},
cn:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gaa(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gaa(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bT()
else this.bU()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.cg(this)},
f1:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xz(b,t)
this.c=c},
gbX:function(){return this.e}}
P.q7.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fz(s,{func:1,args:[P.ao,P.dO]})
q=t.d
p=this.b
o=t.b
if(r)q.hV(o,p,this.c)
else q.d2(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.q6.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eq(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.jY.prototype={
gbF:function(a){return this.a},
sbF:function(a,b){return this.a=b}}
P.qc.prototype={
cW:function(a){a.dP(this.b)}}
P.qe.prototype={
cW:function(a){a.dR(this.b,this.c)},
$asjY:function(){},
gaE:function(a){return this.b},
gaW:function(){return this.c}}
P.qd.prototype={
cW:function(a){a.dQ()},
gbF:function(a){return},
sbF:function(a,b){throw H.m(new P.dP("No events after a done."))}}
P.qP.prototype={
cg:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xV(new P.qQ(this,a))
this.a=1},
e_:function(){if(this.a===1)this.a=3},
gbX:function(){return this.a}}
P.qQ.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbF(r)
t.b=q
if(q==null)t.c=null
r.cW(this.b)},
$S:function(){return{func:1}}}
P.r1.prototype={
gaa:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbF(0,b)
this.c=b}}}
P.r2.prototype={}
P.rl.prototype={
$0:function(){return this.a.az(this.b,this.c)},
$S:function(){return{func:1}}}
P.rk.prototype={
$2:function(a,b){P.GY(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dO]}}}
P.rm.prototype={
$0:function(){return this.a.aR(this.b)},
$S:function(){return{func:1}}}
P.hT.prototype={
b0:function(a,b,c,d){return this.ff(a,d,c,!0===b)},
eh:function(a,b,c){return this.b0(a,null,b,c)},
ff:function(a,b,c,d){return P.GD(this,a,b,c,d,H.aU(this,"hT",0),H.aU(this,"hT",1))},
dD:function(a,b){b.bQ(0,a)},
fv:function(a,b,c){c.bP(a,b)},
$asdi:function(a,b){return[b]}}
P.hU.prototype={
bQ:function(a,b){if((this.e&2)!==0)return
this.eS(0,b)},
bP:function(a,b){if((this.e&2)!==0)return
this.eT(a,b)},
bT:function(){var t=this.y
if(t==null)return
t.el(0)},
bU:function(){var t=this.y
if(t==null)return
t.eo(0)},
dJ:function(){var t=this.y
if(t!=null){this.y=null
return t.c1(0)}return},
fp:function(a){this.x.dD(a,this)},
fu:function(a,b){this.x.fv(a,b,this)},
fs:function(){this.f8()},
f4:function(a,b,c,d,e,f,g){this.y=this.x.a.eh(this.gfo(),this.gfq(),this.gft())},
$asdj:function(a,b){return[b]}}
P.qN.prototype={
dD:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.ct(q)
r=H.cs(q)
P.GX(b,s,r)
return}b.bQ(0,t)}}
P.eP.prototype={
H:function(a){return H.D(this.a)},
$ised:1,
gaE:function(a){return this.a},
gaW:function(){return this.b}}
P.rh.prototype={}
P.rs.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fg()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.m(t)
r=H.m(t)
r.stack=J.cJ(s)
throw r},
$S:function(){return{func:1}}}
P.qT.prototype={
eq:function(a){var t,s,r,q
try{if(C.e===$.aE){r=a.$0()
return r}r=P.xA(null,null,this,a)
return r}catch(q){t=H.ct(q)
s=H.cs(q)
r=P.ka(null,null,this,t,s)
return r}},
d2:function(a,b){var t,s,r,q
try{if(C.e===$.aE){r=a.$1(b)
return r}r=P.xC(null,null,this,a,b)
return r}catch(q){t=H.ct(q)
s=H.cs(q)
r=P.ka(null,null,this,t,s)
return r}},
hV:function(a,b,c){var t,s,r,q
try{if(C.e===$.aE){r=a.$2(b,c)
return r}r=P.xB(null,null,this,a,b,c)
return r}catch(q){t=H.ct(q)
s=H.cs(q)
r=P.ka(null,null,this,t,s)
return r}},
cK:function(a,b){if(b)return new P.qU(this,a)
else return new P.qV(this,a)},
fZ:function(a,b){return new P.qW(this,a)},
B:function(a,b){return},
ep:function(a){if($.aE===C.e)return a.$0()
return P.xA(null,null,this,a)},
d1:function(a,b){if($.aE===C.e)return a.$1(b)
return P.xC(null,null,this,a,b)},
hU:function(a,b,c){if($.aE===C.e)return a.$2(b,c)
return P.xB(null,null,this,a,b,c)}}
P.qU.prototype={
$0:function(){return this.a.eq(this.b)},
$S:function(){return{func:1}}}
P.qV.prototype={
$0:function(){return this.a.ep(this.b)},
$S:function(){return{func:1}}}
P.qW.prototype={
$1:function(a){return this.a.d2(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qC.prototype={
gv:function(a){return this.a},
gaa:function(a){return this.a===0},
gce:function(a){var t=H.O(this,0)
return H.du(new P.qD(this,[t]),new P.qF(this),t,H.O(this,1))},
ae:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fe(b)},
fe:function(a){var t=this.d
if(t==null)return!1
return this.b_(t[this.aZ(a)],a)>=0},
B:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fm(0,b)},
fm:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aZ(b)]
r=this.b_(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.uZ()
this.b=t}this.dq(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.uZ()
this.c=s}this.dq(s,b,c)}else this.fL(b,c)},
fL:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.uZ()
this.d=t}s=this.aZ(a)
r=t[s]
if(r==null){P.v_(t,s,[a,b]);++this.a
this.e=null}else{q=this.b_(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
aB:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bt(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bt(this.c,b)
else return this.cD(0,b)},
cD:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aZ(b)]
r=this.b_(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
ao:function(a,b){var t,s,r,q
t=this.cp()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.B(0,q))
if(t!==this.e)throw H.m(new P.bO(this))}},
cp:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dq:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.v_(a,b,c)},
bt:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.GF(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aZ:function(a){return J.dD(a)&0x3ffffff},
b_:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.bc(a[s],b))return s
return-1},
$isbn:1,
$asbn:null}
P.qF.prototype={
$1:function(a){return this.a.B(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qD.prototype={
gv:function(a){return this.a.a},
gaa:function(a){return this.a.a===0},
gac:function(a){var t=this.a
return new P.qE(t,t.cp(),0,null,this.$ti)},
aw:function(a,b){return this.a.ae(0,b)},
ao:function(a,b){var t,s,r,q
t=this.a
s=t.cp()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.m(new P.bO(t))}}}
P.qE.prototype={
gY:function(){return this.d},
L:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.m(new P.bO(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.k2.prototype={
bD:function(a){return H.HI(a)&0x3ffffff},
bE:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].geb()
if(r==null?b==null:r===b)return s}return-1}}
P.k1.prototype={
gac:function(a){var t=new P.dz(this,this.r,null,null,[null])
t.c=this.e
return t},
gv:function(a){return this.a},
gaa:function(a){return this.a===0},
aw:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.fd(b)},
fd:function(a){var t=this.d
if(t==null)return!1
return this.b_(t[this.aZ(a)],a)>=0},
cT:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.aw(0,a)?a:null
else return this.fB(a)},
fB:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aZ(a)]
r=this.b_(s,a)
if(r<0)return
return J.i2(s,r).gdz()},
ao:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.m(new P.bO(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dn(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dn(r,b)}else return this.aY(0,b)},
aY:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.GG()
this.d=t}s=this.aZ(b)
r=t[s]
if(r==null)t[s]=[this.co(b)]
else{if(this.b_(r,b)>=0)return!1
r.push(this.co(b))}return!0},
aB:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bt(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bt(this.c,b)
else return this.cD(0,b)},
cD:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aZ(b)]
r=this.b_(s,b)
if(r<0)return!1
this.dr(s.splice(r,1)[0])
return!0},
bo:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dn:function(a,b){if(a[b]!=null)return!1
a[b]=this.co(b)
return!0},
bt:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dr(t)
delete a[b]
return!0},
co:function(a){var t,s
t=new P.qJ(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dr:function(a){var t,s
t=a.gfb()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aZ:function(a){return J.dD(a)&0x3ffffff},
b_:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bc(a[s].gdz(),b))return s
return-1},
$isez:1,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
P.qJ.prototype={
gdz:function(){return this.a},
gfb:function(){return this.c}}
P.dz.prototype={
gY:function(){return this.d},
L:function(){var t=this.a
if(this.b!==t.r)throw H.m(new P.bO(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qG.prototype={}
P.fb.prototype={
aJ:function(a,b){return H.du(this,b,H.aU(this,"fb",0),null)},
aw:function(a,b){var t
for(t=this.gac(this);t.L();)if(J.bc(t.gY(),b))return!0
return!1},
ao:function(a,b){var t
for(t=this.gac(this);t.L();)b.$1(t.gY())},
ai:function(a,b){return P.df(this,!0,H.aU(this,"fb",0))},
aC:function(a){return this.ai(a,!0)},
gv:function(a){var t,s
t=this.gac(this)
for(s=0;t.L();)++s
return s},
gaa:function(a){return!this.gac(this).L()},
H:function(a){return P.tX(this,"(",")")},
$isp:1,
$asp:null}
P.hk.prototype={}
P.jo.prototype={}
P.hD.prototype={$asr:null,$asv:null,$asp:null,$isr:1,$isv:1,$isp:1}
P.b6.prototype={
gac:function(a){return new H.er(a,this.gv(a),0,null,[H.aU(a,"b6",0)])},
a0:function(a,b){return this.B(a,b)},
ao:function(a,b){var t,s
t=this.gv(a)
for(s=0;s<t;++s){b.$1(this.B(a,s))
if(t!==this.gv(a))throw H.m(new P.bO(a))}},
gaa:function(a){return this.gv(a)===0},
aw:function(a,b){var t,s
t=this.gv(a)
for(s=0;s<this.gv(a);++s){if(J.bc(this.B(a,s),b))return!0
if(t!==this.gv(a))throw H.m(new P.bO(a))}return!1},
aJ:function(a,b){return new H.fd(a,b,[H.aU(a,"b6",0),null])},
d9:function(a,b){return H.wX(a,b,null,H.aU(a,"b6",0))},
ai:function(a,b){var t,s,r
t=H.a([],[H.aU(a,"b6",0)])
C.b.sv(t,this.gv(a))
for(s=0;s<this.gv(a);++s){r=this.B(a,s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
aC:function(a){return this.ai(a,!0)},
h:function(a,b){var t=this.gv(a)
this.sv(a,t+1)
this.i(a,t,b)},
c5:function(a,b,c,d){var t
P.dg(b,c,this.gv(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
an:function(a,b,c,d,e){var t,s,r,q,p,o
P.dg(b,c,this.gv(a),null,null,null)
if(typeof c!=="number")return c.ay()
if(typeof b!=="number")return H.au(b)
t=c-b
if(t===0)return
if(J.e9(e,0))H.ba(P.bE(e,0,null,"skipCount",null))
if(H.dV(d,"$isr",[H.aU(a,"b6",0)],"$asr")){s=e
r=d}else{r=J.yi(d,e).ai(0,!1)
s=0}q=J.kc(s)
p=J.bg(r)
if(J.cu(q.a3(s,t),p.gv(r)))throw H.m(H.ww())
if(q.aj(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.B(r,q.a3(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.B(r,q.a3(s,o)))},
aL:function(a,b,c,d){return this.an(a,b,c,d,0)},
aO:function(a,b,c,d){var t,s,r,q,p
P.dg(b,c,this.gv(a),null,null,null)
d=C.c.aC(d)
if(typeof c!=="number")return c.ay()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gv(a)-q
this.aL(a,b,r,d)
if(q!==0){this.an(a,r,p,a,c)
this.sv(a,p)}}else{p=this.gv(a)+(s-t)
this.sv(a,p)
this.an(a,r,p,a,c)
this.aL(a,b,r,d)}},
bb:function(a,b,c){var t
if(c>=this.gv(a))return-1
if(c<0)c=0
for(t=c;t<this.gv(a);++t)if(J.bc(this.B(a,t),b))return t
return-1},
bq:function(a,b){return this.bb(a,b,0)},
H:function(a){return P.jj(a,"[","]")},
$isr:1,
$asr:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
P.r9.prototype={
i:function(a,b,c){throw H.m(new P.aa("Cannot modify unmodifiable map"))},
$isbn:1,
$asbn:null}
P.n7.prototype={
B:function(a,b){return J.i2(this.a,b)},
i:function(a,b,c){J.kh(this.a,b,c)},
ao:function(a,b){J.y8(this.a,b)},
gaa:function(a){return J.rV(this.a)},
gv:function(a){return J.cj(this.a)},
H:function(a){return J.cJ(this.a)},
$isbn:1,
$asbn:null}
P.hM.prototype={$asbn:null,$isbn:1}
P.n8.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.R+=", "
t.a=!1
t=this.b
s=t.R+=H.D(a)
t.R=s+": "
t.R+=H.D(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mV.prototype={
gac:function(a){return new P.qK(this,this.c,this.d,this.b,null,this.$ti)},
ao:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.x(r,s)
b.$1(r[s])
if(t!==this.d)H.ba(new P.bO(this))}},
gaa:function(a){return this.b===this.c},
gv:function(a){return(this.c-this.b&this.a.length-1)>>>0},
a0:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.au(b)
if(0>b||b>=t)H.ba(P.bt(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.x(s,q)
return s[q]},
ai:function(a,b){var t=H.a([],this.$ti)
C.b.sv(t,this.gv(this))
this.fQ(t)
return t},
aC:function(a){return this.ai(a,!0)},
h:function(a,b){this.aY(0,b)},
bo:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.x(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
H:function(a){return P.jj(this,"{","}")},
en:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.m(H.jk());++this.d
s=this.a
r=s.length
if(t>=r)return H.x(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aY:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.x(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dB();++this.d},
dB:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.an(s,0,q,t,r)
C.b.an(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fQ:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.an(a,0,q,r,t)
return q}else{p=r.length-t
C.b.an(a,0,p,r,t)
C.b.an(a,p,p+this.c,this.a,0)
return this.c+p}},
eX:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asv:null,
$asp:null}
P.qK.prototype={
gY:function(){return this.e},
L:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.ba(new P.bO(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.x(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oq.prototype={
gaa:function(a){return this.a===0},
bZ:function(a,b){var t
for(t=J.d8(b);t.L();)this.h(0,t.gY())},
ai:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sv(t,this.a)
for(s=new P.dz(this,this.r,null,null,[null]),s.c=this.e,r=0;s.L();r=p){q=s.d
p=r+1
if(r>=t.length)return H.x(t,r)
t[r]=q}return t},
aC:function(a){return this.ai(a,!0)},
aJ:function(a,b){return new H.fU(this,b,[H.O(this,0),null])},
H:function(a){return P.jj(this,"{","}")},
ao:function(a,b){var t
for(t=new P.dz(this,this.r,null,null,[null]),t.c=this.e;t.L();)b.$1(t.d)},
br:function(a,b){var t,s
t=new P.dz(this,this.r,null,null,[null])
t.c=this.e
if(!t.L())return""
if(b===""){s=""
do s+=H.D(t.d)
while(t.L())}else{s=H.D(t.d)
for(;t.L();)s=s+b+H.D(t.d)}return s.charCodeAt(0)==0?s:s},
$isez:1,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
P.op.prototype={}
P.kx.prototype={
hC:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bg(b)
a1=P.dg(a0,a1,t.gv(b),null,null,null)
s=$.$get$xk()
if(typeof a1!=="number")return H.au(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.ad(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rC(C.c.ak(b,l))
h=H.rC(C.c.ak(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.x(s,g)
f=s[g]
if(f>=0){g=C.c.ad("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.R.length
if(e==null)e=0
if(typeof e!=="number")return e.a3()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.c9("")
p.R+=C.c.O(b,q,r)
p.R+=H.hE(k)
q=l
continue}}throw H.m(new P.bL("Invalid base64 data",b,r))}if(p!=null){t=p.R+=t.O(b,q,a1)
e=t.length
if(o>=0)P.vo(b,n,a1,o,m,e)
else{d=C.a.bO(e-1,4)+1
if(d===1)throw H.m(new P.bL("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.R=t;++d}}t=p.R
return C.c.aO(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.vo(b,n,a1,o,m,c)
else{d=C.d.bO(c,4)
if(d===1)throw H.m(new P.bL("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aO(b,a1,a1,d===2?"==":"=")}return b},
$asfO:function(){return[[P.r,P.G],P.C]}}
P.ky.prototype={
$asfQ:function(){return[[P.r,P.G],P.C]}}
P.fO.prototype={}
P.fQ.prototype={}
P.lc.prototype={
$asfO:function(){return[P.C,[P.r,P.G]]}}
P.pE.prototype={
gN:function(a){return"utf-8"}}
P.pF.prototype={
cN:function(a,b,c){var t,s,r,q
t=J.cj(a)
P.dg(b,c,t,null,null,null)
s=new P.c9("")
r=new P.rb(!1,s,!0,0,0,0)
r.cN(a,b,t)
r.hf(0,a,t)
q=s.R
return q.charCodeAt(0)==0?q:q},
h3:function(a){return this.cN(a,0,null)},
$asfQ:function(){return[[P.r,P.G],P.C]}}
P.rb.prototype={
hf:function(a,b,c){if(this.e>0)throw H.m(new P.bL("Unfinished UTF-8 octet sequence",b,c))},
cN:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.rd(c)
p=new P.rc(this,a,b,c)
$loop$0:for(o=J.bg(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.B(a,m)
if(typeof l!=="number")return l.aV()
if((l&192)!==128){k=new P.bL("Bad UTF-8 encoding 0x"+C.d.bK(l,16),a,m)
throw H.m(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.x(C.w,k)
if(t<=C.w[k]){k=new P.bL("Overlong encoding of 0x"+C.a.bK(t,16),a,m-r-1)
throw H.m(k)}if(t>1114111){k=new P.bL("Character outside valid Unicode range: 0x"+C.a.bK(t,16),a,m-r-1)
throw H.m(k)}if(!this.c||t!==65279)n.R+=H.hE(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cu(j,0)){this.c=!1
if(typeof j!=="number")return H.au(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.B(a,i)
g=J.dB(l)
if(g.aj(l,0)){g=new P.bL("Negative UTF-8 code unit: -0x"+J.yl(g.d6(l),16),a,h-1)
throw H.m(g)}else{if(typeof l!=="number")return l.aV()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bL("Bad UTF-8 encoding 0x"+C.d.bK(l,16),a,h-1)
throw H.m(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.rd.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bg(a),r=b;r<t;++r){q=s.B(a,r)
if(typeof q!=="number")return q.aV()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.G,args:[,P.G]}}}
P.rc.prototype={
$2:function(a,b){this.a.b.R+=P.p4(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.G,P.G]}}}
P.d6.prototype={}
P.bF.prototype={}
P.e_.prototype={
a_:function(a,b){if(b==null)return!1
if(!(b instanceof P.e_))return!1
return this.a===b.a&&this.b===b.b},
aM:function(a,b){return C.a.aM(this.a,b.gfP())},
gal:function(a){var t=this.a
return(t^C.a.b6(t,30))&1073741823},
H:function(a){var t,s,r,q,p,o,n
t=P.zj(H.wJ(this))
s=P.ib(H.uv(this))
r=P.ib(H.uu(this))
q=P.ib(H.Fx(this))
p=P.ib(H.Fz(this))
o=P.ib(H.FA(this))
n=P.zk(H.Fy(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.zi(C.a.a3(this.a,b.gi8()),this.b)},
ghz:function(){return this.a},
dg:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.m(P.dE(this.ghz()))},
$isbF:1,
$asbF:function(){return[P.e_]},
gfP:function(){return this.a}}
P.a4.prototype={$isbF:1,
$asbF:function(){return[P.dn]}}
P.dH.prototype={
a3:function(a,b){return new P.dH(this.a+b.gbu())},
aF:function(a,b){return new P.dH(C.a.bI(this.a*b))},
aj:function(a,b){return C.a.aj(this.a,b.gbu())},
aP:function(a,b){return C.a.aP(this.a,b.gbu())},
aG:function(a,b){return C.a.aG(this.a,b.gbu())},
a_:function(a,b){if(b==null)return!1
if(!(b instanceof P.dH))return!1
return this.a===b.a},
gal:function(a){return this.a&0x1FFFFFFF},
aM:function(a,b){return C.a.aM(this.a,b.gbu())},
H:function(a){var t,s,r,q,p
t=new P.la()
s=this.a
if(s<0)return"-"+new P.dH(0-s).H(0)
r=t.$1(C.a.aA(s,6e7)%60)
q=t.$1(C.a.aA(s,1e6)%60)
p=new P.l9().$1(s%1e6)
return""+C.a.aA(s,36e8)+":"+H.D(r)+":"+H.D(q)+"."+H.D(p)},
d6:function(a){return new P.dH(0-this.a)},
$isbF:1,
$asbF:function(){return[P.dH]},
gbu:function(){return this.a}}
P.l9.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.C,args:[P.G]}}}
P.la.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.C,args:[P.G]}}}
P.ed.prototype={
gaW:function(){return H.cs(this.$thrownJsError)}}
P.fg.prototype={
H:function(a){return"Throw of null."}}
P.cZ.prototype={
gcr:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcq:function(){return""},
H:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.D(t)
q=this.gcr()+s+r
if(!this.a)return q
p=this.gcq()
o=P.vF(this.b)
return q+p+": "+H.D(o)},
gN:function(a){return this.c}}
P.ey.prototype={
gcr:function(){return"RangeError"},
gcq:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.D(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.D(t)
else{if(typeof r!=="number")return r.aP()
if(r>t)s=": Not in range "+H.D(t)+".."+H.D(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.D(t)}}return s}}
P.mh.prototype={
gcr:function(){return"RangeError"},
gcq:function(){if(J.e9(this.b,0))return": index must not be negative"
var t=this.f
if(J.bc(t,0))return": no indices are valid"
return": index should be less than "+H.D(t)},
gv:function(a){return this.f}}
P.aa.prototype={
H:function(a){return"Unsupported operation: "+this.a}}
P.eE.prototype={
H:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.D(t):"UnimplementedError"}}
P.dP.prototype={
H:function(a){return"Bad state: "+this.a}}
P.bO.prototype={
H:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.D(P.vF(t))+"."}}
P.nC.prototype={
H:function(a){return"Out of Memory"},
gaW:function(){return},
$ised:1}
P.jJ.prototype={
H:function(a){return"Stack Overflow"},
gaW:function(){return},
$ised:1}
P.l1.prototype={
H:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.D(t)+"' during its initialization"}}
P.qn.prototype={
H:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.D(t)}}
P.bL.prototype={
H:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.D(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.aj()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.O(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.au(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.ak(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.D(r-o+1)+")\n"):s+(" (at character "+H.D(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.ad(q,m)
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
g=""}f=C.c.O(q,i,j)
return s+h+f+g+"\n"+C.c.aF(" ",r-i+h.length)+"^\n"}}
P.lj.prototype={
H:function(a){return"Expando:"+H.D(this.a)},
B:function(a,b){var t,s
t=this.bS
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.ba(P.dX(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.uw(b,"expando$values")
return s==null?null:H.uw(s,t)},
i:function(a,b,c){var t,s
t=this.bS
if(typeof t!=="string")t.set(b,c)
else{s=H.uw(b,"expando$values")
if(s==null){s=new P.ao()
H.wN(b,"expando$values",s)}H.wN(s,t,c)}},
gN:function(a){return this.a}}
P.G.prototype={$isbF:1,
$asbF:function(){return[P.dn]}}
P.p.prototype={
aJ:function(a,b){return H.du(this,b,H.aU(this,"p",0),null)},
aw:function(a,b){var t
for(t=this.gac(this);t.L();)if(J.bc(t.gY(),b))return!0
return!1},
ao:function(a,b){var t
for(t=this.gac(this);t.L();)b.$1(t.gY())},
ai:function(a,b){return P.df(this,!0,H.aU(this,"p",0))},
aC:function(a){return this.ai(a,!0)},
gv:function(a){var t,s
t=this.gac(this)
for(s=0;t.L();)++s
return s},
gaa:function(a){return!this.gac(this).L()},
a0:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.yo("index"))
if(b<0)H.ba(P.bE(b,0,null,"index",null))
for(t=this.gac(this),s=0;t.L();){r=t.gY()
if(b===s)return r;++s}throw H.m(P.bt(b,this,"index",null,s))},
H:function(a){return P.tX(this,"(",")")},
$asp:null}
P.jl.prototype={}
P.r.prototype={$asr:null,$isv:1,$asv:null,$isp:1,$asp:null}
P.bn.prototype={$asbn:null}
P.d2.prototype={
gal:function(a){return P.ao.prototype.gal.call(this,this)},
H:function(a){return"null"}}
P.dn.prototype={$isbF:1,
$asbF:function(){return[P.dn]}}
P.ao.prototype={constructor:P.ao,$isao:1,
a_:function(a,b){return this===b},
gal:function(a){return H.eu(this)},
H:function(a){return H.nV(this)},
gap:function(a){return new H.dS(H.ke(this),null)},
toString:function(){return this.H(this)}}
P.dv.prototype={}
P.ez.prototype={}
P.dO.prototype={}
P.C.prototype={$isbF:1,
$asbF:function(){return[P.C]}}
P.c9.prototype={
gv:function(a){return this.R.length},
gaa:function(a){return this.R.length===0},
H:function(a){var t=this.R
return t.charCodeAt(0)==0?t:t},
gR:function(){return this.R}}
P.eG.prototype={}
P.pB.prototype={
$2:function(a,b){var t,s,r,q
t=J.bg(b)
s=t.bq(b,"=")
if(s===-1){if(!t.a_(b,""))J.kh(a,P.ra(b,0,t.gv(b),this.a,!0),"")}else if(s!==0){r=t.O(b,0,s)
q=C.c.au(b,s+1)
t=this.a
J.kh(a,P.ra(r,0,r.length,t,!0),P.ra(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.py.prototype={
$2:function(a,b){throw H.m(new P.bL("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.C,P.G]}}}
P.pz.prototype={
$2:function(a,b){throw H.m(new P.bL("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.C],opt:[,]}}}
P.pA.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fi(C.c.O(this.a,a,b),16,null)
s=J.dB(t)
if(s.aj(t,0)||s.aP(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.G,args:[P.G,P.G]}}}
P.k8.prototype={
gex:function(){return this.b},
gcR:function(a){var t=this.c
if(t==null)return""
if(C.c.at(t,"["))return C.c.O(t,1,t.length-1)
return t},
gcX:function(a){var t=this.d
if(t==null)return P.xn(this.a)
return t},
gcY:function(a){var t=this.f
return t==null?"":t},
ge5:function(){var t=this.r
return t==null?"":t},
gcZ:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.C
s=new P.hM(P.xd(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
ge8:function(){return this.c!=null},
gea:function(){return this.f!=null},
ge9:function(){return this.r!=null},
H:function(a){var t=this.y
if(t==null){t=this.dF()
this.y=t}return t},
dF:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.D(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.D(s)}else t=s
t+=H.D(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
a_:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aQ(b)
if(!!t.$iseG){if(this.a===b.gd7())if(this.c!=null===b.ge8()){s=this.b
r=b.gex()
if(s==null?r==null:s===r){s=this.gcR(this)
r=t.gcR(b)
if(s==null?r==null:s===r)if(J.bc(this.gcX(this),t.gcX(b)))if(J.bc(this.e,t.gek(b))){s=this.f
r=s==null
if(!r===b.gea()){if(r)s=""
if(s===t.gcY(b)){t=this.r
s=t==null
if(!s===b.ge9()){if(s)t=""
t=t===b.ge5()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
gal:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dF()
this.y=t}t=C.c.gal(t)
this.z=t}return t},
$iseG:1,
gd7:function(){return this.a},
gek:function(a){return this.e}}
P.rv.prototype={
$1:function(a){throw H.m(new P.bL("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.px.prototype={
gew:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.x(t,0)
s=this.a
t=t[0]+1
r=J.bg(s)
q=r.bb(s,"?",t)
p=r.gv(s)
if(q>=0){o=q+1
n=P.fv(s,o,p,C.k,!1)
if(n==null)n=r.O(s,o,p)
p=q}else n=null
m=P.fv(s,t,p,C.D,!1)
t=new P.qb(this,"data",null,null,null,m==null?r.O(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
H:function(a){var t,s
t=this.b
if(0>=t.length)return H.x(t,0)
s=this.a
return t[0]===-1?"data:"+H.D(s):s}}
P.rp.prototype={
$1:function(a){return new Uint8Array(H.cw(96))},
$S:function(){return{func:1,args:[,]}}}
P.ro.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.x(t,a)
t=t[a]
J.y7(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.d5,args:[,,]}}}
P.rq.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dl(a),r=0;r<t;++r)s.i(a,C.c.ak(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.d5,P.C,P.G]}}}
P.rr.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.ak(b,0),s=C.c.ak(b,1),r=J.dl(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.d5,P.C,P.G]}}}
P.r0.prototype={
ge8:function(){return this.c>0},
gea:function(){var t=this.f
if(typeof t!=="number")return t.aj()
return t<this.r},
ge9:function(){return this.r<this.a.length},
gd7:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.at(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.at(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.at(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.at(this.a,"package")){this.x="package"
t="package"}else{t=C.c.O(this.a,0,t)
this.x=t}return t},
gex:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.O(this.a,s,t-1):""},
gcR:function(a){var t=this.c
return t>0?C.c.O(this.a,t,this.d):""},
gcX:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.a3()
s=this.e
if(typeof s!=="number")return H.au(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.a3()
return H.fi(C.c.O(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.at(this.a,"http"))return 80
if(t===5&&C.c.at(this.a,"https"))return 443
return 0},
gek:function(a){return C.c.O(this.a,this.e,this.f)},
gcY:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.aj()
return t<s?C.c.O(this.a,t+1,s):""},
ge5:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.au(s,t+1):""},
gcZ:function(){var t=this.f
if(typeof t!=="number")return t.aj()
if(t>=this.r)return C.a_
t=P.C
return new P.hM(P.xd(this.gcY(this),C.n),[t,t])},
gal:function(a){var t=this.y
if(t==null){t=C.c.gal(this.a)
this.y=t}return t},
a_:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aQ(b)
if(!!t.$iseG)return this.a===t.H(b)
return!1},
H:function(a){return this.a},
$iseG:1}
P.qb.prototype={}
W.aC.prototype={}
W.eO.prototype={
H:function(a){return String(a)},
$iseO:1,
$isk:1,
gas:function(a){return a.href}}
W.ko.prototype={
H:function(a){return String(a)},
$isk:1,
gas:function(a){return a.href}}
W.eR.prototype={$iseR:1,$isdr:1,$isaO:1,$isao:1}
W.cK.prototype={$isao:1}
W.kv.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.cK]},
$isv:1,
$asv:function(){return[W.cK]},
$isp:1,
$asp:function(){return[W.cK]},
$isaT:1,
$asaT:function(){return[W.cK]},
$isaN:1,
$asaN:function(){return[W.cK]}}
W.fW.prototype={
$asr:function(){return[W.cK]},
$asv:function(){return[W.cK]},
$asp:function(){return[W.cK]},
$isr:1,
$isv:1,
$isp:1}
W.fZ.prototype={
$asr:function(){return[W.cK]},
$asv:function(){return[W.cK]},
$asp:function(){return[W.cK]},
$isr:1,
$isv:1,
$isp:1}
W.kz.prototype={
gas:function(a){return a.href}}
W.eS.prototype={$iseS:1}
W.kD.prototype={$isk:1}
W.fN.prototype={$isfN:1,
gN:function(a){return a.name}}
W.eb.prototype={$isk:1,
gv:function(a){return a.length}}
W.kO.prototype={$isk:1}
W.i7.prototype={
cP:function(a,b){return typeof console!="undefined"?console.error(b):null},
bm:function(a){return typeof console!="undefined"?console.group(a):null},
ec:function(a){return typeof console!="undefined"?console.info(a):null},
hZ:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fR.prototype={
gN:function(a){return a.name}}
W.kU.prototype={
gaX:function(a){return a.style}}
W.kV.prototype={
gas:function(a){return a.href}}
W.fS.prototype={
gaX:function(a){return a.style}}
W.fT.prototype={
gN:function(a){return a.name}}
W.kW.prototype={
gaX:function(a){return a.style}}
W.bK.prototype={$isbK:1,$isao:1}
W.eV.prototype={
bN:function(a,b){var t=this.fn(a,b)
return t!=null?t:""},
fn:function(a,b){if(W.zh(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.zl()+b)},
M:function(a,b){return a.item(b)},
gbp:function(a){return a.content},
gbA:function(a){return a.display},
sbA:function(a,b){a.display=b},
gv:function(a){return a.length}}
W.iB.prototype={}
W.q9.prototype={
bN:function(a,b){var t=this.b
return J.yd(t.gar(t),b)},
fM:function(a,b){var t
for(t=this.a,t=new H.er(t,t.gv(t),0,null,[H.O(t,0)]);t.L();)t.d.style[a]=b},
sbA:function(a,b){this.fM("display",b)},
f2:function(a){var t=P.df(this.a,!0,null)
this.b=new H.fd(t,new W.qa(),[H.O(t,0),null])}}
W.jw.prototype={}
W.qa.prototype={
$1:function(a){return J.rW(a)},
$S:function(){return{func:1,args:[,]}}}
W.i9.prototype={
gbp:function(a){return this.bN(a,"content")},
gbA:function(a){return this.bN(a,"display")}}
W.kX.prototype={
gaX:function(a){return a.style}}
W.kY.prototype={
gaX:function(a){return a.style}}
W.l2.prototype={
gcQ:function(a){return a.files}}
W.eW.prototype={$iseW:1,$isao:1}
W.ia.prototype={
bY:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
M:function(a,b){return a.item(b)},
B:function(a,b){return a[b]},
gv:function(a){return a.length}}
W.ec.prototype={$isec:1}
W.ic.prototype={$isk:1}
W.id.prototype={
gN:function(a){return a.name}}
W.l5.prototype={
gN:function(a){var t=a.name
if(P.vE()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vE()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
H:function(a){return String(a)}}
W.ie.prototype={
H:function(a){return"Rectangle ("+H.D(a.left)+", "+H.D(a.top)+") "+H.D(this.gbg(a))+" x "+H.D(this.gba(a))},
a_:function(a,b){var t
if(b==null)return!1
t=J.aQ(b)
if(!t.$isbV)return!1
return a.left===t.gc7(b)&&a.top===t.gcd(b)&&this.gbg(a)===t.gbg(b)&&this.gba(a)===t.gba(b)},
gal:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gbg(a)
q=this.gba(a)
return W.xm(W.eL(W.eL(W.eL(W.eL(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gba:function(a){return a.height},
gc7:function(a){return a.left},
gcd:function(a){return a.top},
gbg:function(a){return a.width},
$isbV:1,
$asbV:function(){}}
W.ig.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$isp:1,
$asp:function(){return[P.C]},
$isaT:1,
$asaT:function(){return[P.C]},
$isaN:1,
$asaN:function(){return[P.C]}}
W.iC.prototype={
$asr:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isr:1,
$isv:1,
$isp:1}
W.iW.prototype={
$asr:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isr:1,
$isv:1,
$isp:1}
W.ih.prototype={
M:function(a,b){return a.item(b)}}
W.ii.prototype={
h:function(a,b){return a.add(b)},
aw:function(a,b){return a.contains(b)},
M:function(a,b){return a.item(b)},
gv:function(a){return a.length}}
W.jZ.prototype={
gv:function(a){return this.a.length},
B:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot modify list"))},
sv:function(a,b){throw H.m(new P.aa("Cannot modify list"))},
gaX:function(a){return W.GC(this)},
$isr:1,
$asr:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
W.dr.prototype={
ge0:function(a){return new W.qh(a)},
H:function(a){return a.localName},
ed:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$isdr:1,
$isaO:1,
$isao:1,
$isk:1,
gaX:function(a){return a.style}}
W.lb.prototype={
gN:function(a){return a.name}}
W.fV.prototype={
gN:function(a){return a.name}}
W.lh.prototype={
gaE:function(a){return a.error}}
W.a6.prototype={$isa6:1,$isao:1}
W.aV.prototype={
fT:function(a,b,c,d){if(c!=null)this.f7(a,b,c,!1)},
hP:function(a,b,c,d){if(c!=null)this.fJ(a,b,c,!1)},
f7:function(a,b,c,d){return a.addEventListener(b,H.dk(c,1),!1)},
fJ:function(a,b,c,d){return a.removeEventListener(b,H.dk(c,1),!1)}}
W.lL.prototype={
gN:function(a){return a.name}}
W.cc.prototype={$iscc:1,$isao:1,
gN:function(a){return a.name}}
W.f3.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isf3:1,
$isaT:1,
$asaT:function(){return[W.cc]},
$isaN:1,
$asaN:function(){return[W.cc]},
$isr:1,
$asr:function(){return[W.cc]},
$isv:1,
$asv:function(){return[W.cc]},
$isp:1,
$asp:function(){return[W.cc]}}
W.iD.prototype={
$asr:function(){return[W.cc]},
$asv:function(){return[W.cc]},
$asp:function(){return[W.cc]},
$isr:1,
$isv:1,
$isp:1}
W.iX.prototype={
$asr:function(){return[W.cc]},
$asv:function(){return[W.cc]},
$asp:function(){return[W.cc]},
$isr:1,
$isv:1,
$isp:1}
W.lM.prototype={
gaE:function(a){return a.error}}
W.lN.prototype={
gN:function(a){return a.name}}
W.lO.prototype={
gaE:function(a){return a.error},
gv:function(a){return a.length}}
W.lS.prototype={
gaX:function(a){return a.style},
gd3:function(a){return a.weight}}
W.lT.prototype={
h:function(a,b){return a.add(b)},
i7:function(a,b,c){return a.forEach(H.dk(b,3),c)},
ao:function(a,b){b=H.dk(b,3)
return a.forEach(b)}}
W.ix.prototype={
M:function(a,b){return a.item(b)},
gv:function(a){return a.length},
gN:function(a){return a.name}}
W.cl.prototype={$iscl:1,$isao:1}
W.m5.prototype={
gv:function(a){return a.length}}
W.f5.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.aO]},
$isv:1,
$asv:function(){return[W.aO]},
$isp:1,
$asp:function(){return[W.aO]},
$isaT:1,
$asaT:function(){return[W.aO]},
$isaN:1,
$asaN:function(){return[W.aO]}}
W.iE.prototype={
$asr:function(){return[W.aO]},
$asv:function(){return[W.aO]},
$asp:function(){return[W.aO]},
$isr:1,
$isv:1,
$isp:1}
W.iY.prototype={
$asr:function(){return[W.aO]},
$asv:function(){return[W.aO]},
$asp:function(){return[W.aO]},
$isr:1,
$isv:1,
$isp:1}
W.iz.prototype={
M:function(a,b){return a.item(b)}}
W.e2.prototype={
ii:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hE:function(a,b,c,d){return a.open(b,c,d)},
ghS:function(a){return W.H1(a.response)},
bi:function(a,b){return a.send(b)},
$ise2:1,
$isao:1,
ghT:function(a){return a.responseText}}
W.m8.prototype={
$1:function(a){return J.yc(a)},
$S:function(){return{func:1,args:[W.e2]}}}
W.m9.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.aG()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aN(0,t)
else p.by(a)},
$S:function(){return{func:1,args:[,]}}}
W.hc.prototype={}
W.md.prototype={
gN:function(a){return a.name}}
W.hd.prototype={$ishd:1}
W.f7.prototype={$isf7:1,$isdr:1,$isaO:1,$isao:1,
aN:function(a,b){return a.complete.$1(b)}}
W.mi.prototype={$isk:1,
gcQ:function(a){return a.files},
gN:function(a){return a.name}}
W.mK.prototype={
gN:function(a){return a.name}}
W.hn.prototype={
h:function(a,b){return a.add(b)}}
W.ho.prototype={$isho:1,
gas:function(a){return a.href}}
W.n1.prototype={
H:function(a){return String(a)},
gas:function(a){return a.href}}
W.n6.prototype={
gN:function(a){return a.name}}
W.hv.prototype={
gaE:function(a){return a.error}}
W.jq.prototype={
M:function(a,b){return a.item(b)},
gv:function(a){return a.length}}
W.nc.prototype={
gbp:function(a){return a.content},
gN:function(a){return a.name}}
W.nd.prototype={
i3:function(a,b,c){return a.send(b,c)},
bi:function(a,b){return a.send(b)}}
W.hw.prototype={
gN:function(a){return a.name}}
W.cn.prototype={$iscn:1,$isao:1}
W.jr.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[W.cn]},
$isaN:1,
$asaN:function(){return[W.cn]},
$isr:1,
$asr:function(){return[W.cn]},
$isv:1,
$asv:function(){return[W.cn]},
$isp:1,
$asp:function(){return[W.cn]}}
W.iO.prototype={
$asr:function(){return[W.cn]},
$asv:function(){return[W.cn]},
$asp:function(){return[W.cn]},
$isr:1,
$isv:1,
$isp:1}
W.j7.prototype={
$asr:function(){return[W.cn]},
$asv:function(){return[W.cn]},
$asp:function(){return[W.cn]},
$isr:1,
$isv:1,
$isp:1}
W.nu.prototype={$isk:1}
W.nv.prototype={
gN:function(a){return a.name}}
W.aO.prototype={
H:function(a){var t=a.nodeValue
return t==null?this.eP(a):t},
aw:function(a,b){return a.contains(b)},
$isaO:1,
$isao:1}
W.ju.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.aO]},
$isv:1,
$asv:function(){return[W.aO]},
$isp:1,
$asp:function(){return[W.aO]},
$isaT:1,
$asaT:function(){return[W.aO]},
$isaN:1,
$asaN:function(){return[W.aO]}}
W.iP.prototype={
$asr:function(){return[W.aO]},
$asv:function(){return[W.aO]},
$asp:function(){return[W.aO]},
$isr:1,
$isv:1,
$isp:1}
W.j8.prototype={
$asr:function(){return[W.aO]},
$asv:function(){return[W.aO]},
$asp:function(){return[W.aO]},
$isr:1,
$isv:1,
$isp:1}
W.ny.prototype={
gN:function(a){return a.name}}
W.nD.prototype={
gN:function(a){return a.name}}
W.nH.prototype={
gN:function(a){return a.name}}
W.nJ.prototype={$isk:1}
W.e4.prototype={
gN:function(a){return a.name}}
W.nO.prototype={
gv:function(a){return a.length}}
W.ce.prototype={
M:function(a,b){return a.item(b)},
$isce:1,
$isao:1,
gv:function(a){return a.length},
gN:function(a){return a.name}}
W.jB.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.ce]},
$isv:1,
$asv:function(){return[W.ce]},
$isp:1,
$asp:function(){return[W.ce]},
$isaT:1,
$asaT:function(){return[W.ce]},
$isaN:1,
$asaN:function(){return[W.ce]}}
W.iQ.prototype={
$asr:function(){return[W.ce]},
$asv:function(){return[W.ce]},
$asp:function(){return[W.ce]},
$isr:1,
$isv:1,
$isp:1}
W.j9.prototype={
$asr:function(){return[W.ce]},
$asv:function(){return[W.ce]},
$asp:function(){return[W.ce]},
$isr:1,
$isv:1,
$isp:1}
W.nU.prototype={
bi:function(a,b){return a.send(b)}}
W.jD.prototype={
bi:function(a,b){return a.send(b)}}
W.fl.prototype={$isfl:1,$isdr:1,$isaO:1,$isao:1}
W.jE.prototype={
M:function(a,b){return a.item(b)},
gv:function(a){return a.length},
gN:function(a){return a.name}}
W.oo.prototype={
gN:function(a){return a.name}}
W.or.prototype={$isk:1}
W.os.prototype={
gN:function(a){return a.name}}
W.ou.prototype={
gN:function(a){return a.name}}
W.co.prototype={$isco:1,$isao:1}
W.jG.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.co]},
$isv:1,
$asv:function(){return[W.co]},
$isp:1,
$asp:function(){return[W.co]},
$isaT:1,
$asaT:function(){return[W.co]},
$isaN:1,
$asaN:function(){return[W.co]}}
W.fX.prototype={
$asr:function(){return[W.co]},
$asv:function(){return[W.co]},
$asp:function(){return[W.co]},
$isr:1,
$isv:1,
$isp:1}
W.h_.prototype={
$asr:function(){return[W.co]},
$asv:function(){return[W.co]},
$asp:function(){return[W.co]},
$isr:1,
$isv:1,
$isp:1}
W.hJ.prototype={$ishJ:1}
W.cp.prototype={$iscp:1,$isao:1,
gd3:function(a){return a.weight}}
W.jH.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.cp]},
$isv:1,
$asv:function(){return[W.cp]},
$isp:1,
$asp:function(){return[W.cp]},
$isaT:1,
$asaT:function(){return[W.cp]},
$isaN:1,
$asaN:function(){return[W.cp]}}
W.iR.prototype={
$asr:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$asp:function(){return[W.cp]},
$isr:1,
$isv:1,
$isp:1}
W.ja.prototype={
$asr:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$asp:function(){return[W.cp]},
$isr:1,
$isv:1,
$isp:1}
W.fm.prototype={$isfm:1,$isao:1}
W.oB.prototype={
gaE:function(a){return a.error}}
W.cg.prototype={
M:function(a,b){return a.item(b)},
$iscg:1,
$isao:1,
gv:function(a){return a.length}}
W.oC.prototype={
gN:function(a){return a.name}}
W.oD.prototype={
gN:function(a){return a.name}}
W.oJ.prototype={
B:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
ao:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gv:function(a){return a.length},
gaa:function(a){return a.key(0)==null},
$isbn:1,
$asbn:function(){return[P.C,P.C]}}
W.ch.prototype={$isch:1,$isao:1,
gas:function(a){return a.href}}
W.e6.prototype={}
W.pc.prototype={
gbp:function(a){return a.content}}
W.pe.prototype={
gN:function(a){return a.name}}
W.cQ.prototype={$isao:1}
W.cG.prototype={$isao:1}
W.ph.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isaT:1,
$asaT:function(){return[W.cG]},
$isaN:1,
$asaN:function(){return[W.cG]},
$isr:1,
$asr:function(){return[W.cG]},
$isv:1,
$asv:function(){return[W.cG]},
$isp:1,
$asp:function(){return[W.cG]}}
W.iS.prototype={
$asr:function(){return[W.cG]},
$asv:function(){return[W.cG]},
$asp:function(){return[W.cG]},
$isr:1,
$isv:1,
$isp:1}
W.jb.prototype={
$asr:function(){return[W.cG]},
$asv:function(){return[W.cG]},
$asp:function(){return[W.cG]},
$isr:1,
$isv:1,
$isp:1}
W.pi.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isaT:1,
$asaT:function(){return[W.cQ]},
$isaN:1,
$asaN:function(){return[W.cQ]},
$isr:1,
$asr:function(){return[W.cQ]},
$isv:1,
$asv:function(){return[W.cQ]},
$isp:1,
$asp:function(){return[W.cQ]}}
W.fY.prototype={
$asr:function(){return[W.cQ]},
$asv:function(){return[W.cQ]},
$asp:function(){return[W.cQ]},
$isr:1,
$isv:1,
$isp:1}
W.h0.prototype={
$asr:function(){return[W.cQ]},
$asv:function(){return[W.cQ]},
$asp:function(){return[W.cQ]},
$isr:1,
$isv:1,
$isp:1}
W.pm.prototype={
gv:function(a){return a.length}}
W.cr.prototype={$iscr:1,$isao:1}
W.jL.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.cr]},
$isv:1,
$asv:function(){return[W.cr]},
$isp:1,
$asp:function(){return[W.cr]},
$isaT:1,
$asaT:function(){return[W.cr]},
$isaN:1,
$asaN:function(){return[W.cr]}}
W.iT.prototype={
$asr:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$asp:function(){return[W.cr]},
$isr:1,
$isv:1,
$isp:1}
W.jc.prototype={
$asr:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$asp:function(){return[W.cr]},
$isr:1,
$isv:1,
$isp:1}
W.fo.prototype={$isfo:1,$isao:1}
W.jM.prototype={
M:function(a,b){return a.item(b)},
gv:function(a){return a.length}}
W.e7.prototype={}
W.pC.prototype={
H:function(a){return String(a)},
$isk:1,
gas:function(a){return a.href}}
W.pG.prototype={
gv:function(a){return a.length}}
W.fp.prototype={$isfp:1,$isao:1}
W.jN.prototype={
M:function(a,b){return a.item(b)},
gv:function(a){return a.length}}
W.pL.prototype={
bi:function(a,b){return a.send(b)}}
W.jQ.prototype={$isk:1,
gN:function(a){return a.name}}
W.pS.prototype={$isk:1}
W.eH.prototype={$isk:1}
W.fq.prototype={$isfq:1,$isaO:1,$isao:1,
gN:function(a){return a.name}}
W.q8.prototype={
H:function(a){return"Rectangle ("+H.D(a.left)+", "+H.D(a.top)+") "+H.D(a.width)+" x "+H.D(a.height)},
a_:function(a,b){var t,s,r
if(b==null)return!1
t=J.aQ(b)
if(!t.$isbV)return!1
s=a.left
r=t.gc7(b)
if(s==null?r==null:s===r){s=a.top
r=t.gcd(b)
if(s==null?r==null:s===r){s=a.width
r=t.gbg(b)
if(s==null?r==null:s===r){s=a.height
t=t.gba(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gal:function(a){var t,s,r,q
t=J.dD(a.left)
s=J.dD(a.top)
r=J.dD(a.width)
q=J.dD(a.height)
return W.xm(W.eL(W.eL(W.eL(W.eL(0,t),s),r),q))},
$isbV:1,
$asbV:function(){},
gba:function(a){return a.height},
gc7:function(a){return a.left},
gcd:function(a){return a.top},
gbg:function(a){return a.width}}
W.hR.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[P.bV]},
$isaN:1,
$asaN:function(){return[P.bV]},
$isr:1,
$asr:function(){return[P.bV]},
$isv:1,
$asv:function(){return[P.bV]},
$isp:1,
$asp:function(){return[P.bV]}}
W.iU.prototype={
$asr:function(){return[P.bV]},
$asv:function(){return[P.bV]},
$asp:function(){return[P.bV]},
$isr:1,
$isv:1,
$isp:1}
W.jd.prototype={
$asr:function(){return[P.bV]},
$asv:function(){return[P.bV]},
$asp:function(){return[P.bV]},
$isr:1,
$isv:1,
$isp:1}
W.jX.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.bK]},
$isv:1,
$asv:function(){return[W.bK]},
$isp:1,
$asp:function(){return[W.bK]},
$isaT:1,
$asaT:function(){return[W.bK]},
$isaN:1,
$asaN:function(){return[W.bK]}}
W.iV.prototype={
$asr:function(){return[W.bK]},
$asv:function(){return[W.bK]},
$asp:function(){return[W.bK]},
$isr:1,
$isv:1,
$isp:1}
W.je.prototype={
$asr:function(){return[W.bK]},
$asv:function(){return[W.bK]},
$asp:function(){return[W.bK]},
$isr:1,
$isv:1,
$isp:1}
W.qf.prototype={$isk:1}
W.qg.prototype={
gba:function(a){return a.height},
gbg:function(a){return a.width}}
W.k0.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[W.cl]},
$isaN:1,
$asaN:function(){return[W.cl]},
$isr:1,
$asr:function(){return[W.cl]},
$isv:1,
$asv:function(){return[W.cl]},
$isp:1,
$asp:function(){return[W.cl]}}
W.iF.prototype={
$asr:function(){return[W.cl]},
$asv:function(){return[W.cl]},
$asp:function(){return[W.cl]},
$isr:1,
$isv:1,
$isp:1}
W.iZ.prototype={
$asr:function(){return[W.cl]},
$asv:function(){return[W.cl]},
$asp:function(){return[W.cl]},
$isr:1,
$isv:1,
$isp:1}
W.qB.prototype={$isk:1}
W.hX.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.aO]},
$isv:1,
$asv:function(){return[W.aO]},
$isp:1,
$asp:function(){return[W.aO]},
$isaT:1,
$asaT:function(){return[W.aO]},
$isaN:1,
$asaN:function(){return[W.aO]}}
W.iG.prototype={
$asr:function(){return[W.aO]},
$asv:function(){return[W.aO]},
$asp:function(){return[W.aO]},
$isr:1,
$isv:1,
$isp:1}
W.j_.prototype={
$asr:function(){return[W.aO]},
$asv:function(){return[W.aO]},
$asp:function(){return[W.aO]},
$isr:1,
$isv:1,
$isp:1}
W.r_.prototype={$isk:1}
W.k4.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.cg]},
$isv:1,
$asv:function(){return[W.cg]},
$isp:1,
$asp:function(){return[W.cg]},
$isaT:1,
$asaT:function(){return[W.cg]},
$isaN:1,
$asaN:function(){return[W.cg]}}
W.iH.prototype={
$asr:function(){return[W.cg]},
$asv:function(){return[W.cg]},
$asp:function(){return[W.cg]},
$isr:1,
$isv:1,
$isp:1}
W.j0.prototype={
$asr:function(){return[W.cg]},
$asv:function(){return[W.cg]},
$asp:function(){return[W.cg]},
$isr:1,
$isv:1,
$isp:1}
W.k6.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[W.ch]},
$isaN:1,
$asaN:function(){return[W.ch]},
$isr:1,
$asr:function(){return[W.ch]},
$isv:1,
$asv:function(){return[W.ch]},
$isp:1,
$asp:function(){return[W.ch]}}
W.iI.prototype={
$asr:function(){return[W.ch]},
$asv:function(){return[W.ch]},
$asp:function(){return[W.ch]},
$isr:1,
$isv:1,
$isp:1}
W.j1.prototype={
$asr:function(){return[W.ch]},
$asv:function(){return[W.ch]},
$asp:function(){return[W.ch]},
$isr:1,
$isv:1,
$isp:1}
W.rf.prototype={$isk:1}
W.rg.prototype={$isk:1}
W.qh.prototype={
aU:function(){var t,s,r,q,p
t=P.aj(null,null,null,P.C)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.ci)(s),++q){p=J.rX(s[q])
if(p.length!==0)t.h(0,p)}return t},
ey:function(a){this.a.className=a.br(0," ")},
gv:function(a){return this.a.classList.length},
gaa:function(a){return this.a.classList.length===0},
aw:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s}}
W.qk.prototype={
b0:function(a,b,c,d){return W.fr(this.a,this.b,a,!1,H.O(this,0))},
eh:function(a,b,c){return this.b0(a,null,b,c)}}
W.hS.prototype={}
W.ql.prototype={
c1:function(a){if(this.b==null)return
this.dX()
this.b=null
this.d=null
return},
cV:function(a,b){if(this.b==null)return;++this.a
this.dX()},
el:function(a){return this.cV(a,null)},
eo:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dV()},
dV:function(){var t=this.d
if(t!=null&&this.a<=0)J.y0(this.b,this.c,t,!1)},
dX:function(){var t=this.d
if(t!=null)J.yg(this.b,this.c,t,!1)},
f3:function(a,b,c,d,e){this.dV()}}
W.qm.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bs.prototype={
gac:function(a){return new W.lQ(a,this.gv(a),-1,null,[H.aU(a,"bs",0)])},
h:function(a,b){throw H.m(new P.aa("Cannot add to immutable List."))},
an:function(a,b,c,d,e){throw H.m(new P.aa("Cannot setRange on immutable List."))},
aL:function(a,b,c,d){return this.an(a,b,c,d,0)},
aO:function(a,b,c,d){throw H.m(new P.aa("Cannot modify an immutable List."))},
c5:function(a,b,c,d){throw H.m(new P.aa("Cannot modify an immutable List."))},
$isr:1,
$asr:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
W.lQ.prototype={
L:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.i2(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gY:function(){return this.d}}
W.r8.prototype={}
P.r5.prototype={
bC:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
bf:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.aQ(a)
if(!!s.$ise_)return new Date(a.a)
if(!!s.$isFV)throw H.m(new P.eE("structured clone of RegExp"))
if(!!s.$iscc)return a
if(!!s.$iseS)return a
if(!!s.$isf3)return a
if(!!s.$ishd)return a
if(!!s.$isfe||!!s.$iset)return a
if(!!s.$isbn){r=this.bC(a)
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
s.ao(a,new P.r7(t,this))
return t.a}if(!!s.$isr){r=this.bC(a)
t=this.b
if(r>=t.length)return H.x(t,r)
o=t[r]
if(o!=null)return o
return this.h4(a,r)}throw H.m(new P.eE("structured clone of other type"))},
h4:function(a,b){var t,s,r,q,p
t=J.bg(a)
s=t.gv(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.x(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.bf(t.B(a,p))
if(p>=r.length)return H.x(r,p)
r[p]=q}return r}}
P.r7.prototype={
$2:function(a,b){this.a.a[a]=this.b.bf(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pZ.prototype={
bC:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
bf:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.e_(s,!0)
r.dg(s,!0)
return r}if(a instanceof RegExp)throw H.m(new P.eE("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.Hm(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bC(a)
r=this.b
o=r.length
if(p>=o)return H.x(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mU()
t.a=n
if(p>=o)return H.x(r,p)
r[p]=n
this.hh(a,new P.q_(t,this))
return t.a}if(a instanceof Array){p=this.bC(a)
r=this.b
if(p>=r.length)return H.x(r,p)
n=r[p]
if(n!=null)return n
o=J.bg(a)
m=o.gv(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.x(r,p)
r[p]=n
if(typeof m!=="number")return H.au(m)
r=J.dl(n)
l=0
for(;l<m;++l)r.i(n,l,this.bf(o.B(a,l)))
return n}return a}}
P.q_.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bf(b)
J.kh(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.r6.prototype={}
P.jT.prototype={
hh:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.ci)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rx.prototype={
$1:function(a){return this.a.aN(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.ry.prototype={
$1:function(a){return this.a.by(a)},
$S:function(){return{func:1,args:[,]}}}
P.kS.prototype={
dY:function(a){if($.$get$vw().b.test(a))return a
throw H.m(P.dX(a,"value","Not a valid class token"))},
H:function(a){return this.aU().br(0," ")},
gac:function(a){var t,s
t=this.aU()
s=new P.dz(t,t.r,null,null,[null])
s.c=t.e
return s},
ao:function(a,b){this.aU().ao(0,b)},
aJ:function(a,b){var t=this.aU()
return new H.fU(t,b,[H.O(t,0),null])},
gaa:function(a){return this.aU().a===0},
gv:function(a){return this.aU().a},
aw:function(a,b){if(typeof b!=="string")return!1
this.dY(b)
return this.aU().aw(0,b)},
cT:function(a){return this.aw(0,a)?a:null},
h:function(a,b){this.dY(b)
return this.hA(0,new P.kT(b))},
ai:function(a,b){return this.aU().ai(0,!0)},
aC:function(a){return this.ai(a,!0)},
hA:function(a,b){var t,s
t=this.aU()
s=b.$1(t)
this.ey(t)
return s},
$isez:1,
$asez:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$isp:1,
$asp:function(){return[P.C]}}
P.kT.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.l3.prototype={
gN:function(a){return a.name}}
P.rn.prototype={
$1:function(a){this.b.aN(0,new P.jT([],[],!1).bf(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mg.prototype={
gN:function(a){return a.name}}
P.nz.prototype={
bY:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fw(a,b,c)
q=P.H0(t)
return q}catch(p){s=H.ct(p)
r=H.cs(p)
q=P.vR(s,r,null)
return q}},
h:function(a,b){return this.bY(a,b,null)},
fw:function(a,b,c){return a.add(new P.r6([],[]).bf(b))},
gN:function(a){return a.name}}
P.hH.prototype={
gaE:function(a){return a.error}}
P.pr.prototype={
gaE:function(a){return a.error}}
P.qI.prototype={
bG:function(a){if(a<=0||a>4294967296)throw H.m(P.wS("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
c8:function(){return Math.random()}}
P.qR.prototype={
b5:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.aA(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bG:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.m(P.wS("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.b5()
return(this.a&t)>>>0}do{this.b5()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
c8:function(){this.b5()
var t=this.a
this.b5()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
f5:function(a){var t,s,r,q,p,o,n,m
t=J.e9(a,0)?-1:0
do{if(typeof a!=="number")return a.aV()
s=(a&4294967295)>>>0
a=C.d.aA(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.aA(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.aA(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.aA(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.aA(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.aA(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.aA(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.b5()
this.b5()
this.b5()
this.b5()}}
P.qS.prototype={}
P.bV.prototype={$asbV:null}
P.kl.prototype={$isk:1,
gas:function(a){return a.href}}
P.ea.prototype={$isk:1}
P.lk.prototype={$isk:1}
P.ll.prototype={$isk:1}
P.lm.prototype={$isk:1}
P.ln.prototype={$isk:1}
P.lo.prototype={$isk:1}
P.lp.prototype={$isk:1}
P.lq.prototype={$isk:1}
P.lr.prototype={$isk:1}
P.ls.prototype={$isk:1}
P.lt.prototype={$isk:1,
gas:function(a){return a.href}}
P.lu.prototype={$isk:1}
P.lv.prototype={$isk:1}
P.lw.prototype={$isk:1}
P.lx.prototype={$isk:1}
P.ly.prototype={$isk:1}
P.lz.prototype={$isk:1}
P.lP.prototype={$isk:1,
gas:function(a){return a.href}}
P.cm.prototype={$isk:1}
P.me.prototype={$isk:1,
gas:function(a){return a.href}}
P.d1.prototype={$isao:1}
P.mN.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){return this.B(a,b)},
$isr:1,
$asr:function(){return[P.d1]},
$isv:1,
$asv:function(){return[P.d1]},
$isp:1,
$asp:function(){return[P.d1]}}
P.iJ.prototype={
$asr:function(){return[P.d1]},
$asv:function(){return[P.d1]},
$asp:function(){return[P.d1]},
$isr:1,
$isv:1,
$isp:1}
P.j2.prototype={
$asr:function(){return[P.d1]},
$asv:function(){return[P.d1]},
$asp:function(){return[P.d1]},
$isr:1,
$isv:1,
$isp:1}
P.n9.prototype={$isk:1}
P.na.prototype={$isk:1}
P.d3.prototype={$isao:1}
P.nw.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){return this.B(a,b)},
$isr:1,
$asr:function(){return[P.d3]},
$isv:1,
$asv:function(){return[P.d3]},
$isp:1,
$asp:function(){return[P.d3]}}
P.iK.prototype={
$asr:function(){return[P.d3]},
$asv:function(){return[P.d3]},
$asp:function(){return[P.d3]},
$isr:1,
$isv:1,
$isp:1}
P.j3.prototype={
$asr:function(){return[P.d3]},
$asv:function(){return[P.d3]},
$asp:function(){return[P.d3]},
$isr:1,
$isv:1,
$isp:1}
P.nM.prototype={$isk:1,
gas:function(a){return a.href}}
P.nR.prototype={
gv:function(a){return a.length}}
P.ol.prototype={$isk:1,
gas:function(a){return a.href}}
P.p3.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){return this.B(a,b)},
$isr:1,
$asr:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$isp:1,
$asp:function(){return[P.C]}}
P.iL.prototype={
$asr:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isr:1,
$isv:1,
$isp:1}
P.j4.prototype={
$asr:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isr:1,
$isv:1,
$isp:1}
P.kr.prototype={
aU:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.aj(null,null,null,P.C)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.ci)(r),++p){o=J.rX(r[p])
if(o.length!==0)s.h(0,o)}return s},
ey:function(a){this.a.setAttribute("class",a.br(0," "))}}
P.ca.prototype={
ge0:function(a){return new P.kr(a)},
ed:function(a,b,c,d,e){throw H.m(new P.aa("Cannot invoke insertAdjacentHtml on SVG."))},
$isk:1}
P.p6.prototype={$isk:1}
P.p8.prototype={$isk:1}
P.eD.prototype={}
P.pg.prototype={$isk:1,
gas:function(a){return a.href}}
P.d4.prototype={$isao:1}
P.ps.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){return this.B(a,b)},
$isr:1,
$asr:function(){return[P.d4]},
$isv:1,
$asv:function(){return[P.d4]},
$isp:1,
$asp:function(){return[P.d4]}}
P.iM.prototype={
$asr:function(){return[P.d4]},
$asv:function(){return[P.d4]},
$asp:function(){return[P.d4]},
$isr:1,
$isv:1,
$isp:1}
P.j5.prototype={
$asr:function(){return[P.d4]},
$asv:function(){return[P.d4]},
$asp:function(){return[P.d4]},
$isr:1,
$isv:1,
$isp:1}
P.pD.prototype={$isk:1,
gas:function(a){return a.href}}
P.pH.prototype={$isk:1}
P.pI.prototype={$isk:1}
P.hV.prototype={$isk:1,
gas:function(a){return a.href}}
P.qX.prototype={$isk:1}
P.qY.prototype={$isk:1}
P.qZ.prototype={$isk:1}
P.bh.prototype={}
P.d5.prototype={$isr:1,
$asr:function(){return[P.G]},
$isv:1,
$asv:function(){return[P.G]},
$isp:1,
$asp:function(){return[P.G]}}
P.fH.prototype={$isfH:1,$isao:1,
gv:function(a){return a.length}}
P.eQ.prototype={$iseQ:1,$isao:1,
gc0:function(a){return a.buffer}}
P.fI.prototype={
fg:function(a,b,c,d){return a.decodeAudioData(b,H.dk(c,1),H.dk(d,1))},
h5:function(a,b){var t,s,r
t=P.fH
s=new P.bj(0,$.aE,null,[t])
r=new P.dU(s,[t])
this.fg(a,b,new P.ks(r),new P.kt(r))
return s}}
P.ks.prototype={
$1:function(a){this.a.aN(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kt.prototype={
$1:function(a){var t=this.a
if(a==null)t.by("")
else t.by(a)},
$S:function(){return{func:1,args:[,]}}}
P.bB.prototype={}
P.dY.prototype={}
P.kR.prototype={
gc0:function(a){return a.buffer}}
P.kn.prototype={
gN:function(a){return a.name}}
P.o7.prototype={$isk:1}
P.re.prototype={$isk:1}
P.jI.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.bt(b,a,null,null,null))
return P.xL(a.item(b))},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){return this.B(a,b)},
M:function(a,b){return P.xL(a.item(b))},
$isr:1,
$asr:function(){return[P.bn]},
$isv:1,
$asv:function(){return[P.bn]},
$isp:1,
$asp:function(){return[P.bn]}}
P.iN.prototype={
$asr:function(){return[P.bn]},
$asv:function(){return[P.bn]},
$asp:function(){return[P.bn]},
$isr:1,
$isv:1,
$isp:1}
P.j6.prototype={
$asr:function(){return[P.bn]},
$asv:function(){return[P.bn]},
$asp:function(){return[P.bn]},
$isr:1,
$isv:1,
$isp:1}
T.fD.prototype={
gv:function(a){return this.a.length},
B:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
gaa:function(a){return this.a.length===0},
gac:function(a){var t=this.a
return new J.i3(t,t.length,0,null,[H.O(t,0)])},
$ashk:function(){return[T.fE]},
$asp:function(){return[T.fE]},
gcQ:function(a){return this.a}}
T.fE.prototype={
gbp:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.f6(C.x)
r=T.f6(C.y)
q=T.wG(0,this.b)
new T.iA(s,q,0,0,0,t,r).dE()
r=q.c.buffer
q=q.a
r.toString
q=H.cO(r,0,q)
this.cy=q
t=q}else{t=s.bL()
this.cy=t}this.ch=0}}return t},
H:function(a){return this.a},
gN:function(a){return this.a}}
T.d9.prototype={
H:function(a){return"ArchiveException: "+this.a}}
T.he.prototype={
gv:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ay()
if(typeof r!=="number")return H.au(r)
return t-(s-r)},
B:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.a3()
if(typeof b!=="number")return H.au(b)
s+=b
if(s<0||s>=t.length)return H.x(t,s)
return t[s]},
b4:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.au(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.ay()
if(typeof s!=="number")return H.au(s)
b=t-(a-s)}return T.tv(this.a,this.d,b,a)},
bb:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.a3()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.au(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.x(q,s)
q[s]}return-1},
bq:function(a,b){return this.bb(a,b,0)},
d_:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.ay()
if(typeof s!=="number")return H.au(s)
r=this.b4(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.ay()
if(typeof p!=="number")return H.au(p)
if(typeof s!=="number")return s.a3()
this.b=s+(t-(q-p))
return r},
cb:function(a){return P.p4(this.d_(a).bL(),0,null)},
af:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.a3()
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
ah:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.a3()
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
b2:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.a3()
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
if(this.d===1)return(C.a.aD(p,56)|C.a.aD(o,48)|C.a.aD(n,40)|C.a.aD(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.aD(i,56)|C.a.aD(j,48)|C.a.aD(k,40)|C.a.aD(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bL:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ay()
if(typeof r!=="number")return H.au(r)
q=t-(s-r)
t=this.a
r=J.aQ(t)
if(!!r.$isd5){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cO(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xx(r.cj(t,s,p>o?o:p)))},
eW:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gc0:function(a){return this.a},
ghD:function(a){return this.b}}
T.nE.prototype={
i_:function(a,b){var t,s,r,q
if(b==null)b=J.cj(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.ct(s-q)
C.p.aL(r,t,s,a)
this.a+=b},
d4:function(a){return this.i_(a,null)},
i1:function(a){var t,s,r,q
t=J.bg(a)
while(!0){s=this.a
r=t.gv(a)
if(typeof r!=="number")return H.au(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gv(a)
if(typeof r!=="number")return H.au(r)
this.ct(s+r-this.c.length)}s=this.a
r=t.gv(a)
if(typeof r!=="number")return H.au(r)
C.p.an(q,s,s+r,t.gc0(a),t.ghD(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.ay()
if(typeof q!=="number")return H.au(q)
this.a=t+(r-(s-q))},
b4:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cO(t,a,b-a)},
dd:function(a){return this.b4(a,null)},
ct:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.ba(P.dE("Invalid length "+H.D(s)))
r=new Uint8Array(s)
q=this.c
C.p.aL(r,0,q.length,q)
this.c=r},
fk:function(){return this.ct(null)},
gv:function(a){return this.a}}
T.pV.prototype={
fI:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.b4(this.a-20,20)
if(s.ah()!==117853008){a.b=t
return}s.ah()
r=s.b2()
s.ah()
a.b=r
if(a.ah()!==101075792){a.b=t
return}a.b2()
a.af()
a.af()
q=a.ah()
p=a.ah()
o=a.b2()
n=a.b2()
m=a.b2()
l=a.b2()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fl:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.ay()
if(typeof r!=="number")return H.au(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.ah()===101010256){a.b=t
return q}}throw H.m(new T.d9("Could not find End of Central Directory Record"))},
f_:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fl(a)
this.a=t
a.b=t
a.ah()
this.b=a.af()
this.c=a.af()
this.d=a.af()
this.e=a.af()
this.f=a.ah()
this.r=a.ah()
s=a.af()
if(s>0)this.x=a.cb(s)
this.fI(a)
r=a.b4(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.a3()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.aG()
if(!(p<t+o))break
if(r.ah()!==33639248)break
p=new T.pX(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.af()
p.b=r.af()
p.c=r.af()
p.d=r.af()
p.e=r.af()
p.f=r.af()
p.r=r.ah()
p.x=r.ah()
p.y=r.ah()
n=r.af()
m=r.af()
l=r.af()
p.z=r.af()
p.Q=r.af()
p.ch=r.ah()
o=r.ah()
p.cx=o
if(n>0)p.cy=r.cb(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.ay()
j=r.b4(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.ay()
if(typeof g!=="number")return H.au(g)
if(typeof k!=="number")return k.a3()
r.b=k+(i-(h-g))
p.db=j.bL()
f=j.af()
e=j.af()
if(f===1){if(e>=8)p.y=j.b2()
if(e>=16)p.x=j.b2()
if(e>=24){o=j.b2()
p.cx=o}if(e>=28)p.z=j.ah()}}if(l>0)p.dx=r.cb(l)
a.b=o
p.dy=T.Gx(a,p)
q.push(p)}}}
T.pW.prototype={
gbp:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.f6(C.x)
q=T.f6(C.y)
t=T.wG(0,t)
new T.iA(s,t,0,0,0,r,q).dE()
q=t.c.buffer
t=t.a
q.toString
t=H.cO(q,0,t)
this.cy=t
this.d=0}else{t=s.bL()
this.cy=t}}return t},
H:function(a){return this.z},
f0:function(a,b){var t,s,r,q
t=a.ah()
this.a=t
if(t!==67324752)throw H.m(new T.d9("Invalid Zip Signature"))
this.b=a.af()
this.c=a.af()
this.d=a.af()
this.e=a.af()
this.f=a.af()
this.r=a.ah()
this.x=a.ah()
this.y=a.ah()
s=a.af()
r=a.af()
this.z=a.cb(s)
this.Q=a.d_(r).bL()
this.cx=a.d_(this.ch.x)
if((this.c&8)!==0){q=a.ah()
if(q===134695760)this.r=a.ah()
else this.r=q
this.x=a.ah()
this.y=a.ah()}}}
T.pX.prototype={
H:function(a){return this.cy}}
T.pU.prototype={
h6:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.Gw(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.G],p=0;p<t.length;t.length===r||(0,H.ci)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.d8()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fE(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dV(k,"$isr",q,"$asr")){j.cy=k
j.cx=T.tv(k,0,null,0)}else if(k instanceof T.he){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.he(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.hd(m,"/")
j.y=n.r
s.push(j)}return new T.fD(s,null)}}
T.ma.prototype={
eV:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.aD(1,this.b)
r=H.cw(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.x(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.x(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iA.prototype={
dE:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.a3()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.aG()
if(!(r<s+q))break
if(!this.fF())break}},
fF:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.a3()
if(typeof s!=="number")return s.aG()
if(s>=r+q)return!1
p=this.aI(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.aI(16)
s=this.aI(16)
if(n!==0&&n!==(s^65535)>>>0)H.ba(new T.d9("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.ay()
r=q-r
if(n>s-r)H.ba(new T.d9("Input buffer is broken"))
m=t.b4(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.ay()
if(typeof l!=="number")return H.au(l)
if(typeof s!=="number")return s.a3()
t.b=s+(r-(q-l))
this.b.i1(m)
break
case 1:this.dv(this.f,this.r)
break
case 2:this.fG()
break
default:throw H.m(new T.d9("unknown BTYPE: "+o))}return(p&1)===0},
aI:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.a3()
if(typeof r!=="number")return r.aG()
if(r>=q+p)throw H.m(new T.d9("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.x(q,r)
o=q[r]
this.c=(this.c|C.a.aH(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.aD(1,a)
this.c=C.a.dT(t,a)
this.d=s-a
return(t&r-1)>>>0},
cC:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.a3()
if(typeof p!=="number")return p.aG()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.x(o,p)
m=o[p]
this.c=(this.c|C.a.aH(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.aD(1,s)-1)>>>0
if(p>=t.length)return H.x(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dT(r,k)
this.d=q-k
return l&65535},
fG:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.aI(5)+257
s=this.aI(5)+1
r=this.aI(4)+4
q=H.cw(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.x(C.E,o)
n=C.E[o]
m=this.aI(3)
if(n>=q)return H.x(p,n)
p[n]=m}l=T.f6(p)
k=new Uint8Array(H.cw(t))
j=new Uint8Array(H.cw(s))
i=this.du(t,l,k)
h=this.du(s,l,j)
this.dv(T.f6(i),T.f6(h))},
dv:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cC(a)
if(s>285)throw H.m(new T.d9("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fk()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.x(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.x(C.C,p)
o=C.C[p]+this.aI(C.V[p])
n=this.cC(b)
if(n<=29){if(n>=30)return H.x(C.z,n)
m=C.z[n]+this.aI(C.U[n])
for(r=-m;o>m;){t.d4(t.dd(r))
o-=m}if(o===m)t.d4(t.dd(r))
else t.d4(t.b4(r,o-m))}else throw H.m(new T.d9("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.ay();--r
t.b=r
if(r<0)t.b=0}},
du:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cC(b)
switch(q){case 16:p=3+this.aI(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=s}break
case 17:p=3+this.aI(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=0}s=0
break
case 18:p=11+this.aI(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.m(new T.d9("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.km.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Math Book",H.a([$.M,$.ad,$.aK],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Giant Map",H.a([$.M,$.ad],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Microscope",H.a([$.E,$.ad,$.b_],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Star Chart",H.a([$.M,$.ad],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("History Book",H.a([$.M,$.ad],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Radioactive Rock",H.a([$.bZ,$.aD],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Compass",H.a([$.E,$.ad],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.h6,$.n)
q.i(0,$.bd,$.n)
q.i(0,$.f1,$.l)
q.i(0,$.b4,$.L)
q.i(0,$.cA,$.l)
p=$.o
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.u
o=o+n+" to stop "
m=$.N
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.Fn
n=[U.c]
q.i(0,new R.ae("Recover the Books",!1,[new U.c(o),new U.c(l),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
q.i(0,new R.ae("Shelve the Books",!1,[new U.c("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.u+" to stop "+$.N+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.wR(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
p="The "+m+" finds a massive library, filled with books. The "
l=$.u
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.z
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.ae("Research the Denizen",!1,[new U.c(p),new U.c(l),new U.c(k)],H.a([],n),R.fj(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eY,$.L)
s.i(0,$.cA,$.n)
p=$.o
o="The "+p+"  is approached by a "
l=$.u
s.i(0,new R.ae("Do the Math",!1,[new U.c(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+l+"  finds a "+l+" child "+$.N+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.u
s.i(0,new R.ae("Use the Calculator",!1,[new U.c(l),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.N+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.ev(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
s.i(0,new R.ae("Solve the Equation",!1,[new U.c("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.u+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fj(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
m.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.eY,$.L)
t.i(0,$.cA,$.n)
t.i(0,$.c0,$.L)
t.i(0,$.tj,$.L)
r=$.o
q="The "+r+"  is approached by a "
p=$.u
q=q+p+" who offers them a grant to study "
o=$.as
t.i(0,new R.ae("Test the Hypothesis",!1,[new U.c(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.N+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fj(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
o=$.u
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.N
r=r+p+".  It is up to the "
q=$.o
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.as
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.Ft
t.i(0,new R.ae("Make the Cure",!1,[new U.c(r),new U.c(l),new U.c(q)],H.a([],n),R.e5(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
t.i(0,new R.ae("Be the Scientist",!1,[new U.c("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.N+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.u+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,t,null),$.aP)}}
K.bX.prototype={}
L.fF.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("Perfectly Generic Object",H.a([],[G.a7]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.l)
q.i(0,$.bd,$.L)
q.i(0,$.dK,$.l)
q.i(0,$.c0,$.n)
q.i(0,$.e0,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.N+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.z
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cf+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.a3("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.ab(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.f_,$.l)
s.i(0,$.eh,$.L)
s.i(0,$.ej,$.n)
s.i(0,$.cS,$.l)
s.i(0,$.ck,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.N+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.z
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.cf+". The "+p+" has won! "
s.i(0,new R.a3("Produce the Goods",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(n),new U.ab(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.bd,$.L)
t.i(0,$.c6,$.n)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.N
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.z
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.cf+". The "+r+" has won! "
t.i(0,new R.ae("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o),new U.c(n),new U.ab(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.ux(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
r="The "+l+" learns that all of the local "
m=$.u
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.z
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.cf+". The "+l+" has won! "
t.i(0,new R.a3("Relax the Consorts",!1,[new U.c(r),new U.c(p),new U.c(m),new U.ab(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.H(s,t,null),$.ay)},
H:function(a){return this.Q},
S:function(a,b,c,d,e,f,g){var t,s,r,q
t=this.Q
this.ch=t
s=this.dx
r=[X.i5]
q=[M.h3]
if(s==null){this.r=new X.h2("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+H.D(t)+".xml",!1,H.a([],r),H.a([],q))
this.J()
this.K()
this.x=H.D(t)+".png"
this.y=H.D(t)+"Big.png"}else{this.J()
this.K()
s.sa6(this.ga6())
s.sa5(this.ga5())
s.sa4(this.ga4())
s.saS(this.gaS())
s.sa2(this.ga2())
s.sW(this.gW())
s.sU(this.gU())
s.sZ(this.gZ())
s.sV(this.gV())
s.sa8(this.ga8())
s.sa7(this.ga7())
s.sa1(this.ga1())
s.sX(this.gX())
this.r=new X.h2("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+s.H(0)+".xml",!1,H.a([],r),H.a([],q))
this.x="Reskins/"+H.D(t)+".png"
this.y="Reskins/"+H.D(t)+"Big.png"}t=this.e
if($.$get$kp().ae(0,t))H.ba("Duplicate aspect id for "+this.H(0)+": "+t+" is already registered for "+J.cJ($.$get$kp().B(0,t))+".")
$.$get$kp().i(0,t,this)},
ga6:function(){return this.a},
ga5:function(){return this.b},
ga4:function(){return this.c},
gaS:function(){return this.d},
gN:function(a){return this.Q},
gW:function(){return this.k1},
ga1:function(){return this.k2},
gU:function(){return this.k3},
ga2:function(){return this.k4},
ga8:function(){return this.r1},
ga7:function(){return this.r2},
gZ:function(){return this.rx},
gV:function(){return this.ry},
gX:function(){return this.x2},
saS:function(a){return this.d=a}}
L.P.prototype={}
M.kq.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Barbells",H.a([$.an,$.c8,$.E],s),null,!1,"Strength Building Metal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Basketball",H.a([$.el,$.c2],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Baseball Bat",H.a([$.jg,$.a9],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rubber Ball",H.a([$.el,$.c2],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.aR,$.ag],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Hockey Stick",H.a([$.jg,$.a9,$.de],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Trophy",H.a([$.E,$.bb],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Boxing Glove",H.a([$.w6,$.c2],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Yoga Mat",H.a([$.c2,$.b7],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.e1,$.L)
q.i(0,$.bQ,$.n)
q.i(0,$.cS,$.L)
p=$.o
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.u
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.N+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.ae("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.u
q.i(0,new R.ae("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.N+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e5(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
n="The "+m+"  wanders into a bunch of "
p=$.u
q.i(0,new R.ae("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hF(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.e1,$.n)
t.i(0,$.f2,$.n)
t.i(0,$.bQ,$.n)
s=$.o
r="The "+s+" finds a team of underdog "
p=$.u
t.i(0,new R.ae("Save the Sports",!1,[new U.c(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.wR(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.u
s="A group of "+p+"s approach the "
r=$.o
s=s+r+". Apparently their sports team lost their coach to the "+$.z+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.N
t.i(0,new R.ae("Coach the Sports",!1,[new U.c(s),new U.c(o),new U.c(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e5(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
k=$.u
p="A group of "+k+"s approach the "
r=$.o
t.i(0,new R.ae("Win at Sports",!1,[new U.c(p+r+". Apparently their sports team lost a member to the "+$.z+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.as+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,t,null),$.aP)}}
U.ku.prototype={
T:function(a,b){var t=0,s=P.bq(),r,q,p,o
var $async$T=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:q=$.$get$vn()
p=q.createBufferSource()
o=p
t=3
return P.cI(J.y6(q,b),$async$T)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$T,s)},
$asdp:function(){return[P.eQ]},
$asc7:function(){return[P.eQ,P.bh]}}
U.n3.prototype={
b1:function(a){return"audio/mpeg"}}
U.nB.prototype={
b1:function(a){return"audio/ogg"}}
U.p0.prototype={
T:function(a,b){var t=0,s=P.bq(),r,q,p
var $async$T=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:q=W.z6(b)
p=new W.hS(q,"canplaythrough",!1,[W.a6])
t=3
return P.cI(p.gar(p),$async$T)
case 3:r=q
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$T,s)},
$asij:function(){return[W.eR]},
$asc7:function(){return[W.eR,P.C]}}
U.p1.prototype={}
U.p2.prototype={}
O.kw.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Cod Piece",H.a([$.R,$.ac,$.av,$.Q,$.a9],s),"God damn it, MI. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Poisoned Candy",H.a([$.tA,$.Q,$.bM],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Lyre",H.a([$.aL,$.a9,$.bo,$.Q,$.ak],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Snare Trap",H.a([$.R,$.aL,$.Q,$.bf],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cx,$.l)
t.i(0,$.h9,$.l)
t.i(0,$.cv,$.l)
t.i(0,$.dt,$.l)
t.i(0,$.cz,$.l)
t.i(0,$.eX,$.l)
r="After all the bullshit the "+$.z+" has put the native "
q=$.u
r=r+q+"s through, the "
p=$.o
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aZ+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.N
m=[U.c]
t.i(0,new R.al("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.u
n="A group of jubilant "+p+"s are following the "
q=$.o
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.N
t.i(0,new R.al("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.z+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.al("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.z+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.y(),!1,!1,new Y.kL("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.o
q=q+r+" organizes a huge festival for all the "
p=$.u
t.i(0,new R.bv("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.bN)}}
Y.pf.prototype={
T:function(a,b){var t=0,s=P.bq(),r
var $async$T=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$T,s)},
$aseC:function(){return[P.C]},
$asc7:function(){return[P.C,P.C]}}
Y.o0.prototype={
b1:function(a){return"application/octet-stream"},
T:function(a,b){var t=0,s=P.bq(),r
var $async$T=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$T,s)},
$asdp:function(){return[P.bh]},
$asc7:function(){return[P.bh,P.bh]}}
L.kA.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Bear",H.a([$.aR,$.aW,$.I],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Thought",H.a([$.mn,$.wp,$.f9],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Doorway",H.a([$.f9,$.I],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cb,$.l)
t.i(0,$.dc,$.n)
t.i(0,$.bQ,$.n)
t.i(0,$.ej,$.B)
r=$.o
q="The "+r+" hears a "+$.u+" "+$.N+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.z
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.i(0,new R.a3("Revenge on the Denizen",!1,[new U.c(q),new U.c(p),new U.c(n),new U.ab(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
gU:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
ga1:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G}}
T.kC.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Mystical Vial of Blood",H.a([$.b_,$.bo,$.I,$.b1],s),null,!1,"Vial of Not-ABs Oil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bananaphone",H.a([$.aF,$.bo,$.I,$.b8],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Friendship Bracelet",H.a([$.R,$.bo,$.I,$.b1,$.hh],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bonding Manacles",H.a([$.E,$.bf,$.I,$.b1,$.hh,$.aJ],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Friendship Stairs",H.a([$.a9,$.tI,$.bo,$.b1,$.I,$.ac],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cL,$.l)
q.i(0,$.tm,$.l)
q.i(0,$.c0,$.n)
p=$.o
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.u
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.as+" and some boondollars in compensation."
n=this.y2
k=[U.c]
q.i(0,new R.ae("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.e5(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.u
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.N+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.z
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.o
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cf+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.a3("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.ab(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cS,$.l)
s.i(0,$.cz,$.L)
s.i(0,$.b4,$.L)
s.i(0,$.lJ,$.l)
s.i(0,$.cv,$.L)
p=$.o
o="The "+p+"  and the "
m=$.ex
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.z
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.a3("Learn the Power of Teamwork",!1,[new U.c(o),new U.c(l),new U.ab(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.ew(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
h=$.o
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.u
i=i+m+"s explains that before  "
p=$.z
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.cf+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.Fj
s.i(0,new R.a3("Chain the Towers",!1,[new U.c(i),new U.c(m),new U.c(j),new U.ab(l,h,o)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
o="The "+p+" learns of the "
h=$.aZ
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.u
o=o+l+" explains that the "
j=$.z
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.cf+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.a3("Protect the Beams",!1,[new U.c(l),new U.c(o),new U.c(m),new U.ab(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.u
h=h+i+" on "+$.aZ+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.f4+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.al("One Degree of Separation",!1,[new U.c(h),new U.c(m),new U.c(i)],H.a([],k),R.fj(),!1,!1,new Y.c1("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.u+" on "
m=$.aZ
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.f4+" is now more popular with your friends than you are."
s.i(0,new R.al("Steal The Friends",!1,[new U.c(i),new U.c(h),new U.c(m)],H.a([],k),R.uy(),!1,!1,new Y.c1("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
m="The "+p+"  and the "
h=$.ex
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.z
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.a3("Pale Shipping Dungeon",!1,[new U.c(m),new U.ab(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.D(C.q)+".",o)],H.a([],k),R.ew(),!1,!1,new Y.jy(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aw)
n.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.bd,$.L)
t.i(0,$.c6,$.n)
r="In the wake of the defeat of the "+$.z+" it becomes really how isolated the individual "
q=$.u
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.o
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.f4+" to kick your ass, but luckily they have several."
t.i(0,new R.al("Connect The Villages",!1,[new U.c(r),new U.c(p),new U.c(q)],H.a([],k),R.e5(),!1,!1,new Y.c1("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
o=$.o
q="The "+o+" learns that two prominent "
p=$.u
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.z
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.cf+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.N+"ing. "
t.i(0,new R.a3("Stop the Feud",!1,[new U.c(q),new U.c(r),new U.c(m),new U.ab(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaS:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
ga1:function(){return this.I},
gX:function(){return this.a9}}
T.kF.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Pan's Pipe",H.a([$.ak,$.a9,$.bo,$.I],s),null,!1,"Smonkin Weeds Pipe")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skeleton Key",H.a([$.b9,$.I],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Inspector's Fan",H.a([$.ag,$.E,$.bo,$.I],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Jet Pack",H.a([$.aG,$.E,$.aR,$.I,$.ac],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.c6,$.n)
q.i(0,$.f2,$.l)
q.i(0,$.b4,$.n)
p=$.o
o="The "+p+" tries posting a letter through the "
n=$.as
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.z
o=o+m+" has screwed with the mail system, crippling the "
l=$.u
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cf+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.Fo
i=[U.c]
q.i(0,new R.a3("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.ab(j,p,l)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.bd,$.l)
s.i(0,$.f2,$.n)
s.i(0,$.b4,$.n)
s.i(0,$.bQ,$.n)
s.i(0,$.c6,$.n)
p=$.o
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.as
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.u
k=l+k+" fields. The "+k+"s "+$.N+"ing is so joyful it's literally deafening. "
l=$.z
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.cf+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.a3("Thinking With Wind Power",!1,[new U.c(o),new U.c(n),new U.c(k),new U.ab(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ck,$.l)
t.i(0,$.lH,$.l)
t.i(0,$.f2,$.L)
t.i(0,$.c6,$.L)
r=$.o
q="The "+r+" is chilling in a "+$.u+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.z
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.as
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aZ+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.cf+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.a3("The Winds of Change",!1,[new U.c(q),new U.c(o),new U.c(n),new U.ab(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaS:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
ga1:function(){return this.I},
gX:function(){return this.a9}}
M.fM.prototype={
eA:function(a){var t=this.a
if(!t.ae(0,a))return
return t.B(0,a)}}
Y.kH.prototype={
T:function(a,b){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i
var $async$T=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:q=J.eN(b,"\n")
p=P.C
o=P.cD(p,p)
n=P.cD(p,[P.ez,P.C])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.d7(k).bs(k).length===0)m=null
else if(m==null)m=C.c.bs(k)
else{j=C.c.bs(k)
i=C.c.O(m,0,C.c.ef(m,$.$get$vr())+1)+j
o.i(0,i,m)
if(!n.ae(0,m))n.i(0,m,P.aj(null,null,null,p))
J.y_(n.B(0,m),i)}}r=new M.fM(o,n)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$T,s)},
$aseC:function(){return[M.fM]},
$asc7:function(){return[M.fM,P.C]}}
S.kK.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("A Rock",H.a([$.aW,$.aD,$.bi,$.I],[G.a7]),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Chill","Stone","Cold","Fear"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lD,$.n)
t.i(0,$.cL,$.l)
r=$.o
q="The "+r+" decides enough is enough, and that they need to fight the "
p=$.z
q=q+p+". They decide to amass an army of consorts to fight it..."
o="The "+r+" figures out that the "
n=$.u
o=o+n+"s are very disinclined to fight, so the "+r+" has to use a bit more force..."
m="The "+r+" has created an army of fearful consorts, it may fall apart during the Denizen fight though..."
l="Now that the "+r+" has amassed an army of "+n+"s, they think it's time to fight the "+p+"..."
n="The "+p+" lies slain, but the "+n+"s still lie under the power of the "+r+"."
t.i(0,new R.a3("Make An Army",!1,[new U.c(q),new U.c(o),new U.c(m),new U.ab(l,"The "+r+" lies dead, in a surprising twist, the "+p+" takes care of the living members of the consort army.",n)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
A.kN.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Colonel Sassacre's Daunting Text ",H.a([$.M,$.an,$.b8,$.c8],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wise Guy Book",H.a([$.M,$.b8],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Beagle Puss",H.a([$.b_,$.b8],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Novelty Microphone",H.a([$.aR,$.ag,$.b8],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Banana",H.a([$.aF,$.b8],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fake Flower",H.a([$.R,$.b8],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Trick Handcuffs",H.a([$.E,$.b8],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.n)
q.i(0,$.cy,$.l)
q.i(0,$.bQ,$.n)
p=$.o
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.u
o=o+n+"s are too scared to even "+$.N+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.z+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.ae("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.e1,$.L)
s.i(0,$.bQ,$.l)
s.i(0,$.cy,$.l)
s.i(0,$.cx,$.l)
o=$.o
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aZ
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.u
k=k+j+"s let out a braying "+$.N+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.Fr
s.i(0,new R.ae("Win the Laughs",!1,[new U.c(n),new U.c(k),new U.c(o)],H.a([],l),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cB,$.L)
t.i(0,$.c5,$.n)
t.i(0,$.cy,$.l)
t.i(0,$.bQ,$.n)
t.i(0,$.io,$.n)
r=$.o
q="The "+r+"  is approached by a Crafty "
o=$.u
q=q+o+" who offers them a magical "
n=$.as
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.N
t.i(0,new R.ae("Trick the Villain",!1,[new U.c(q),new U.c(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.c("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,t,null),$.aP)}}
S.bG.prototype={
H:function(a){return H.D(new H.dS(H.ke(this),null))+": "+this.c},
gN:function(a){return this.c}}
S.i6.prototype={}
S.m7.prototype={}
M.kZ.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Can of Spray Paint",H.a([$.aI,$.E],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sensible Chuckles Magazine",H.a([$.M,$.aq,$.b8,$.aK],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Gentleman's Razor",H.a([$.tQ,$.E,$.aH],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("How To Draw Manga",H.a([$.M,$.aq,$.aK],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Painting of a Horse Boxing a Football Player",H.a([$.aI,$.ax,$.M],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Collection of Classical Works",H.a([$.aq,$.M],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Documentary on Horses",H.a([$.aq,$.aS,$.ax],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Paint Set",H.a([$.aI,$.aq],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shaving Cream",H.a([$.aG,$.aq,$.E],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Classy Suit",H.a([$.R,$.aq],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("The Fatherly Gent's Shaving Almanac ",H.a([$.M,$.aq,$.aK],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dc,$.n)
q.i(0,$.cA,$.l)
q.i(0,$.b4,$.n)
p=$.o
o="The "+p+" visits a beautiful "
n=$.as
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.u
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.z+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.N+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.ae("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.e1,$.L)
s.i(0,$.bQ,$.n)
s.i(0,$.cy,$.L)
s.i(0,$.bd,$.n)
s.i(0,$.cx,$.l)
o=$.o
n="The "+o+" finds a troupe of dejected looking "
l=$.u
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aZ
l=l+n+" "
k=$.as
s.i(0,new R.ae("Perform the Play",!1,[new U.c(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.c("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.N+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.h9,$.L)
t.i(0,$.cv,$.L)
t.i(0,$.eX,$.L)
t.i(0,$.c5,$.L)
t.i(0,$.bd,$.n)
t.i(0,$.b4,$.n)
r=$.o
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.N
q=q+o+"ingworth, "
n=$.u
q=q+n+" heiress to the "+$.as+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.Fg
t.i(0,new R.ae("Attend the Dinner Party",!1,[new U.c(q),new U.c(l),new U.c(n)],H.a([],p),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,t,null),$.aP)}}
T.l4.prototype={}
V.l6.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Trendy Fabric",H.a([$.aI,$.R],s),null,!1,"Weird Tasting Candy Paper")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Necklace",H.a([$.aI,$.tF,$.hh],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sewing Needle",H.a([$.E,$.tL,$.aY],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jf
r=A.j("Broom",H.a([r,$.a9,$.an,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rolling Pin",H.a([$.a9,$.tT,$.an],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Velvet Pillow",H.a([$.R,$.b7,$.bo,$.aI,$.e3],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Yarn Ball",H.a([$.aI,$.R],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Refrigerator",H.a([$.aJ,$.c8,$.E,$.bi],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Photo Album",H.a([$.aI,$.M],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Cubes",H.a([$.bi],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cast Iron Skillet",H.a([$.E,$.aG,$.an,$.c8,$.tE],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Failed Dish",H.a([$.bM],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dr Pepper BBQ Sauce",H.a([$.bM],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Potted Plant",H.a([$.aI,$.bR,$.b5],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Chicken Leg",H.a([$.aF,$.be,$.b9],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Juicy Steak",H.a([$.aF,$.be],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Wedding Cake",H.a([$.aI,$.aF,$.b1],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.n)
q.i(0,$.cz,$.n)
q.i(0,$.cv,$.L)
p=$.o
o="The "+p+" is visited by a Beautiful "
n=$.u
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.as
l=[U.c]
q.i(0,new R.ae("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.N+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.y(),!1,!1,new Y.i8("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cv,$.l)
s.i(0,$.bQ,$.n)
s.i(0,$.eX,$.l)
s.i(0,$.dt,$.n)
s.i(0,$.bd,$.l)
p=$.o
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.as
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.u
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.N+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.Fp
s.i(0,new R.ae("Bake the Cake",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.eZ,$.l)
t.i(0,$.bd,$.n)
t.i(0,$.ef,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.lJ,$.l)
r=$.o
q="The "+r+" finds a loom, and a Wizened "
p=$.u
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.as
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.N+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.ae("Weave the Cloth",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.aP)}}
U.l7.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aK,$.ag,$.M,$.aL,$.I,$.ac],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Egg Timer",H.a([$.aS,$.bo,$.I,$.aL],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skull Timer",H.a([$.b9,$.bo,$.I,$.aL],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Poison Flask",H.a([$.b_,$.I,$.bM],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Gorgon Head",H.a([$.b_,$.I,$.bi,$.aL,$.bf,$.bT,$.b3],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Obituary",H.a([$.aJ,$.b3,$.aL,$.M,$.I],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dK,$.l)
q.i(0,$.d0,$.n)
q.i(0,$.f2,$.L)
q.i(0,$.bd,$.L)
q.i(0,$.c0,$.n)
p=$.o
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.u
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.as
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.z
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cf+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.a3("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dK,$.l)
s.i(0,$.d0,$.n)
s.i(0,$.ek,$.aw)
s.i(0,$.eg,$.n)
s.i(0,$.tj,$.n)
s.i(0,$.cL,$.n)
s.i(0,$.d0,$.n)
s.i(0,$.bd,$.L)
s.i(0,$.c0,$.n)
s.i(0,$.ds,$.n)
p=$.o
o="The "+p+" has found a group of Violent "
m=$.u
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aZ
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.N+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.z
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.cf+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.a3("Become the Warlord",!1,[new U.c(o),new U.c(k),new U.c(j),new U.ab(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.ev(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.as
p=p+l+"s alike. "
l=$.u+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.z
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.cf+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.a3("Make This Stupid Planet Habitable",!1,[new U.c(p),new U.c(l),new U.c(g),new U.ab(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.c0,$.l)
t.i(0,$.vL,$.aw)
t.i(0,$.h6,$.L)
r=$.o
q="The "+r+" finds a small dungeon bearing the image of "
p=$.z
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.u+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.a3("Learn the Prophecy",!1,[new U.c(q),new U.c(o),new U.c(m),new U.ab(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.ev(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
k=$.o
p="The "+k+" learns from one of their "
r=$.u
p=p+r+"s that there is an ancient prophecy of a "
l=$.aZ
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.as
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.z
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.cf+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.Ff
t.i(0,new R.a3("Learn the Prophecy",!1,[new U.c(p),new U.c(m),new U.c(r),new U.ab(o,k,q)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaS:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
ga1:function(){return this.c3},
gX:function(){return this.c4},
sa6:function(a){return this.m=a},
sa5:function(a){return this.n=a},
sa4:function(a){return this.p=a},
saS:function(a){return this.w=a},
sa2:function(a){return this.t=a},
sW:function(a){return this.u=a},
sU:function(a){return this.C=a},
sZ:function(a){return this.D=a},
sV:function(a){return this.E=a},
sa8:function(a){return this.F=a},
sa7:function(a){return this.G=a},
sa1:function(a){return this.c3=a},
sX:function(a){return this.c4=a}}
Z.l8.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Dream Diary",H.a([$.M,$.aK,$.I],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Interlocking Brick",H.a([$.aS,$.bo,$.an,$.I,$.ac],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Art Supplies",H.a([$.aS,$.bo,$.I],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.eZ,$.n)
q.i(0,$.ef,$.l)
q.i(0,$.b4,$.n)
q.i(0,$.lJ,$.n)
p=$.u
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.as
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.N+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.Fm
k=[U.c]
q.i(0,new R.a3("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.ab(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.ck,$.n)
s.i(0,$.ef,$.l)
s.i(0,$.dd,$.n)
s.i(0,$.cb,$.n)
s.i(0,$.ee,$.n)
s.i(0,$.cy,$.l)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.N
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.a3("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.ab("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dc,$.l)
t.i(0,$.iq,$.n)
t.i(0,$.b4,$.n)
t.i(0,$.cb,$.l)
t.i(0,$.ee,$.l)
t.i(0,$.ef,$.n)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.a3("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aZ+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.N+"ing in reverse. Another is in a "+$.as+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.ab("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
ga7:function(){return this.D},
gZ:function(){return this.E},
gV:function(){return this.F},
ga1:function(){return this.I},
gX:function(){return this.a9}}
X.h2.prototype={}
X.i5.prototype={
$S:function(){return{func:1,v:true,args:[[P.r,M.h3]]}}}
M.h3.prototype={}
U.lA.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Fluthulu Poster",H.a([$.R,$.b7,$.b3,$.bk],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Scalemate",H.a([$.R,$.b7,$.b3],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Bone Shield",H.a([$.aJ,$.aS,$.b9,$.fa,$.av],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Ice Sword",H.a([$.aS,$.wb,$.em,$.av],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Zombie Mask",H.a([$.aS,$.bT,$.be,$.b3],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Vampire Romance Novel",H.a([$.aK,$.M,$.aM,$.b3],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizardy Herbert",H.a([$.M,$.af,$.an],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Complacency of the Learned",H.a([$.M,$.af,$.an],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Grimoire for Summoning the Zoologically Dubious ",H.a([$.M,$.af,$.bT,$.b3,$.bk],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizard Statue",H.a([$.aJ,$.aD,$.af,$.an,$.av],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Mermaid Fountain",H.a([$.aJ,$.mq,$.af,$.an,$.av],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.h4,$.aw)
q.i(0,$.cz,$.n)
q.i(0,$.c6,$.n)
q.i(0,$.cB,$.L)
p=$.o
o="The "+p+" learns of a Beautiful "
n=$.u
o=o+n+" who has been kidnapped by the vial "
m=$.z
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.as
j=[U.c]
q.i(0,new R.ae("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.l)
s.i(0,$.cL,$.l)
s.i(0,$.ir,$.n)
s.i(0,$.c0,$.l)
s.i(0,$.ek,$.l)
s.i(0,$.h8,$.n)
o=$.o
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.u
s.i(0,new R.ae("Do not Drink...Wine.",!1,[new U.c(n+m+" leave, and no one can remember the last time he received guests."),new U.c("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.l)
t.i(0,$.iu,$.n)
t.i(0,$.c0,$.l)
t.i(0,$.dI,$.n)
t.i(0,$.eY,$.n)
t.i(0,$.tm,$.n)
r=$.o
q="The "+r+" finds a group of three "
o=$.u
q=q+o+"s "
n=$.N
t.i(0,new R.ae("Expose the Conspiracy",!1,[new U.c(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,t,null),$.aP)}}
L.lB.prototype={}
N.ah.prototype={
H:function(a){return H.D(new H.dS(H.ke(this),null))+": "+H.D(this.b)}}
O.c7.prototype={
bc:function(a){var t=0,s=P.bq(),r,q=this,p
var $async$bc=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cI(q.b3(a),$async$bc)
case 3:r=p.T(0,c)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$bc,s)}}
O.dp.prototype={
bj:function(a){var t=0,s=P.bq(),r
var $async$bj=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$bj,s)},
cO:function(a){var t=0,s=P.bq(),r,q=this
var $async$cO=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.z7([J.vc(a)],q.b1(0),null))
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$cO,s)},
b3:function(a){var t=0,s=P.bq(),r,q=this,p,o
var $async$b3=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:p=P.bh
o=new P.bj(0,$.aE,null,[p])
W.vT(a,null,q.b1(0),null,null,"arraybuffer",null,null).bd(new O.kB(new P.dU(o,[p])))
r=o
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$b3,s)},
$asc7:function(a){return[a,P.bh]}}
O.kB.prototype={
$1:function(a){this.a.aN(0,H.kf(J.yb(a),"$isbh"))},
$S:function(){return{func:1,args:[W.e2]}}}
O.eC.prototype={
bj:function(a){var t=0,s=P.bq(),r,q,p,o,n
var $async$bj=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:a.toString
q=H.cO(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hE(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$bj,s)},
b3:function(a){var t=0,s=P.bq(),r
var $async$b3=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:r=W.vS(a,null,null)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$b3,s)},
$asc7:function(a){return[a,P.C]}}
O.ij.prototype={
b3:function(a){var t=0,s=P.bq(),r
var $async$b3=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$b3,s)},
bj:function(a){return H.ba("Element format doesn't read from buffers")},
$asc7:function(a){return[a,P.C]}}
O.lR.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gZ:function(){return this.t},
gV:function(){return this.u},
gX:function(){return this.A}}
V.lU.prototype={
b1:function(a){return"font/opentype"},
T:function(a,b){var t=0,s=P.bq(),r
var $async$T=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:t=3
return P.cI(A.hq("scripts/Rendering/text/opentype.min.js",!1),$async$T)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$T,s)},
$asdp:function(){return[R.ha]},
$asc7:function(){return[R.ha,P.bh]}}
Z.ik.prototype={}
E.iy.prototype={}
E.nA.prototype={}
E.F.prototype={
H:function(a){var t="["+J.cJ(this.a)+" x "+H.D(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fG.prototype={
H:function(a){var t="[(Random from "+P.tX(this.d,"(",")")+") x "+H.D(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.i4.prototype={
H:function(a){return"[Stats assigned from player Interests x"+H.D(this.b)+"]"}}
Y.m_.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("How to Teach Your Friends to Hack SBURB",H.a([$.aK,$.Q,$.M,$.ac,$.hj],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Unstable Domino",H.a([$.aS,$.Q,$.aL],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Exposed Thread",H.a([$.R,$.Q,$.aL],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Teetering Plate",H.a([$.ji,$.Q,$.aL],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lK,$.n)
t.i(0,$.c6,$.l)
t.i(0,$.ds,$.L)
t.i(0,$.db,$.l)
r=$.u
q="An excited "+r+" runs up to the "
p=$.o
q=q+p+" and starts to "
o=$.N
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aZ
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.as
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.z
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.a3("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.ab(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
t.i(0,new R.al("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.z+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.u+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.u
j="Now that the "+o+"s are free from the reign of "+$.z+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.o
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.N
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aZ+" Quest Online: The "+$.as+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.al("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.o
p=p+o+" shows the "
r=$.u
t.i(0,new R.bv("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.N+"s in time to stop them.    ")],H.a([],i),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.bN)}}
Y.m0.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Sherpa Parka",H.a([$.bi,$.Q,$.cd],s),"Clearly the best class uses this.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Guide Book",H.a([$.ac,$.bi,$.aK,$.M,$.Q,$.ad],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Whistle",H.a([$.E,$.Q,$.aR],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Announcement System",H.a([$.E,$.Q,$.ag,$.ad],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lK,$.l)
t.i(0,$.c6,$.l)
t.i(0,$.ds,$.n)
t.i(0,$.db,$.l)
r="Now that the "+$.z+" is out of the way, a group of "
q=$.u
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.o
o=[U.c]
t.i(0,new R.al("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.N+", but they are happy.")],H.a([],o),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.o
t.i(0,new R.bv("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.u+" "+$.N+"s in time to stop them.    ")],H.a([],o),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.bN)}}
L.m1.prototype={}
T.m2.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Doll",H.a([$.ji,$.aI,$.aA,$.I],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Puppet",H.a([$.a9,$.aA,$.I,$.ac,$.b3],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mirror",H.a([$.mv,$.I],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.M,$.I,$.aM],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Shades",H.a([$.ax,$.b_,$.I],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.eg,$.L)
q.i(0,$.ei,$.l)
q.i(0,$.bQ,$.n)
p=$.o
o="The "+p+", guided by a "+$.u+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.z
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cf+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.a3("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.ab(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.o
p="The "+j+" finds a Violent "
l=$.u
p=p+l+". A Magical Talking "
k=$.as
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.z
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.a3("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.ab(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.uy(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
h=this.f
h.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cy,$.l)
s.i(0,$.ir,$.l)
s.i(0,$.f2,$.n)
s.i(0,$.c0,$.l)
s.i(0,$.cv,$.n)
s.i(0,$.ds,$.L)
p=$.o
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.as
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.z
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.cf+". The "+p+" is victorious. "
s.i(0,new R.a3("Confront yourself.",!1,[new U.c(o),new U.c(m),new U.c(n),new U.ab(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j="Now that the "+$.z+" has been defeated, a Copy "
p=$.o
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.u
j=j+k+"s "
l=$.N
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.f4+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.al("Prove Your Identity",!1,[new U.c(j),new U.c(l),new U.c(k)],H.a([],i),R.e5(),!1,!1,new Y.c1("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.z
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.a3("Shatter The Mirrors",!1,[new U.c(k),new U.c(l),new U.c(j),new U.ab(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.ev(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
h.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ip,$.l)
t.i(0,$.cv,$.l)
t.i(0,$.lI,$.l)
t.i(0,$.eX,$.n)
t.i(0,$.h8,$.l)
t.i(0,$.cz,$.n)
t.i(0,$.ei,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.u
t.i(0,new R.a3("Ship All the Ships",!1,[new U.c(q+p+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.N+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aZ+" laws put in place by "+$.z+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
p="The "+r+" finds a weeping Broken Hearted "
q=$.u
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aZ
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.N
t.i(0,new R.al("Heal The Broken Heart",!1,[new U.c(p),new U.c(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.c("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hF(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
q=$.o
m="The "+q+"  and the "
r=$.ex
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.z
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.a3("Flushed Shipping Dungeon",!1,[new U.c(m),new U.ab(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.D(C.q)+".",n)],H.a([],i),R.ew(),!1,!1,new Y.iw(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aw)
n=$.o
r="The "+n+"  and the "
q=$.ex
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.z
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.a3("Pitched Shipping Dungeon",!1,[new U.c(r),new U.ab(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.D(C.q)+".",m)],H.a([],i),R.ew(),!1,!1,new Y.jA(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aw)
h.i(0,new X.H(s,t,null),$.aP)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
ga1:function(){return this.I},
gX:function(){return this.a9}}
B.m3.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Family Ashes",H.a([$.aJ,$.aG,$.Q,$.aL,$.bY],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Last Will and Testament",H.a([$.ac,$.M,$.Q,$.aL,$.mu],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Grooming Guide",H.a([$.aK,$.Q,$.aq],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Powered Attorney",H.a([$.w1,$.Q,$.mm,$.mu],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Executer's Ax",H.a([$.tx,$.Q,$.aH,$.mu],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.ck,$.n)
r=$.z
q="With the death of the "+r+", it now falls to the "
p=$.o
o=[U.c]
t.i(0,new R.al("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.u+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
r="The "+$.z+" has released the frogs into the "
p=$.o
t.i(0,new R.bv("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.N+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.bN)}}
V.m4.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Hippo",H.a([$.aR,$.aW,$.I],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ranting",H.a([$.mn,$.aR,$.f9],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Vent",H.a([$.E,$.tB],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.ee,$.L)
t.i(0,$.dc,$.n)
t.i(0,$.lD,$.n)
t.i(0,$.iq,$.n)
r=$.o
q="The "+r+" hears the screaming voice of the "
p=$.z
q=q+p+", and when they walk into a consort village, a "
o=$.u
q=q+o+" "
n=$.N
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.a3("Stop the Screamening",!1,[new U.c(q),new U.c(n),new U.c(o),new U.ab(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
gU:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
ga1:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G}}
X.m6.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Wand",H.a([$.a9,$.I,$.af,$.aW],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Angel Feather",H.a([$.aW,$.bu,$.I,$.b0,$.ak,$.ac,$.af],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Never Ending Story DVD",H.a([$.bS,$.tI,$.I,$.af,$.b8,$.aW],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Candle",H.a([$.aW,$.b0,$.I,$.aG],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Figurine",H.a([$.aS,$.b0,$.I,$.aW],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.ti,$.l)
q.i(0,$.cz,$.n)
q.i(0,$.b4,$.l)
q.i(0,$.cb,$.l)
p=$.o
o="The "+p+" is just minding their own business when they see a wizened "
n=$.u
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.N+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.z
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.as
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.Fi
i=[U.c]
q.i(0,new R.a3("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(k,p,j)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.l)
s.i(0,$.io,$.n)
s.i(0,$.dd,$.l)
p=$.o
o="The "+p+"  is approached by a Crafty "
m=$.u
o=o+m+" who offers them a magical "
l=$.as
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.z
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.a3("Believe the Lies",!1,[new U.c(o),new U.c(k),new U.c(j),new U.ab(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.dt,$.L)
t.i(0,$.cA,$.l)
t.i(0,$.cb,$.l)
r=$.o
q="The "+r+" finds a grey town of despondant "
p=$.u
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.z
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.as
t.i(0,new R.a3("Be the Change You Believe In",!1,[new U.c(q),new U.c(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.ab("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
o="The "+r+" discovers a group of "
p=$.u
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.z
t.i(0,new R.a3("The Ultimate Hope",!1,[new U.c(o),new U.c(l),new U.c(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.ab("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hF(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
X.mb.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Footstick",H.a([$.de,$.Q,$.jh,$.ac],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURBSim Cheating Guide",H.a([$.aK,$.Q,$.hj,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Body Pillow of Shogun",H.a([$.R,$.Q,$.e3,$.mt,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Macrobots",H.a([$.tS,$.Q,$.mm],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cB,$.l)
t.i(0,$.dd,$.l)
t.i(0,$.ef,$.l)
t.i(0,$.db,$.l)
t.i(0,$.eZ,$.l)
t.i(0,$.ee,$.l)
t.i(0,$.h7,$.n)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.c]
t.i(0,new R.ae("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uz(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cf+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.N
t.i(0,new R.a3("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.ab(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wP(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.ae("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.a3("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
t.i(0,new R.a3("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m="A wizened "+$.u+" tells the "
r=$.o
t.i(0,new R.al("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.al("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wQ(),!1,!1,new Y.c1("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.al("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bv("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.ay)}}
Q.mc.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Yardstick",H.a([$.de,$.Q,$.jh,$.ac],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURB Hacking Guide",H.a([$.aK,$.Q,$.hj,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Body Pillow of Hussie",H.a([$.R,$.Q,$.e3,$.mt,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.mf.prototype={
bc:function(a){var t=0,s=P.bq(),r,q,p
var $async$bc=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:q=W.vU(null,a,null)
p=new W.hS(q,"load",!1,[W.a6])
t=3
return P.cI(p.gar(p),$async$bc)
case 3:r=q
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$bc,s)},
$asdp:function(){return[W.f7]},
$asc7:function(){return[W.f7,P.bh]}}
Q.nQ.prototype={
b1:function(a){return"image/png"},
T:function(a,b){var t=0,s=P.bq(),r,q=this,p,o,n
var $async$T=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cI(q.cO(b),$async$T)
case 3:p=n.vU(null,d,null)
o=new W.hS(p,"load",!1,[W.a6])
t=4
return P.cI(o.gar(o),$async$T)
case 4:r=p
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$T,s)}}
Q.nN.prototype={
b1:function(a){return"image/png"},
T:function(a,b){var t=0,s=P.bq()
var $async$T=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:throw H.m("Read NYI")
return P.by(null,s)}})
return P.bz($async$T,s)},
$asdp:function(){return[Q.jz]},
$asc7:function(){return[Q.jz,P.bh]}}
B.hf.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("Perfectly Generic Object",H.a([],[G.a7]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.l)
q.i(0,$.bd,$.L)
q.i(0,$.dK,$.l)
q.i(0,$.c0,$.n)
q.i(0,$.e0,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
m=[U.c]
q.i(0,new R.ae("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.N+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.f_,$.l)
s.i(0,$.eh,$.L)
s.i(0,$.ej,$.n)
s.i(0,$.cS,$.l)
s.i(0,$.ck,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.ae("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.N+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.bd,$.L)
t.i(0,$.c6,$.n)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
t.i(0,new R.ae("Relax the Consorts",!1,[new U.c(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
r="The "+p+" learns that all of the local "
q=$.u
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.N
t.i(0,new R.ae("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ux(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
n.i(0,new X.H(s,t,null),$.aP)},
H:function(a){return this.ch},
gN:function(a){return this.ch}}
A.a8.prototype={
aM:function(a,b){var t=b.gbH()-this.gbH()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bI(t)},
gh8:function(){var t,s,r,q,p,o
t=H.a([],[P.C])
s=new A.hG(null,null)
s.ci(this.f.a)
if(this.r===0)return t
r=P.df(G.ze(this.f),!0,G.a7)
C.b.da(r,new A.mB())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.ci)(r),++p){o=r[p]
if(!(o instanceof G.ar||o.ge3().length===0))t.push(" "+Y.Hj(s.hG(o.ge3())))}return t},
gbH:function(){var t,s,r
for(t=this.f,s=new P.dz(t,t.r,null,null,[null]),s.c=t.e,r=0;s.L();)r+=s.d.gbH()
return r},
gh_:function(){var t=this.f
return new H.hP(t,new A.mA(),[H.O(t,0)])},
ghi:function(){var t,s,r,q,p
for(t=this.gh8(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.ci)(t),++q)r+=t[q]+" "
return r+this.d},
H:function(a){return this.ghi()},
P:function(a,b,c,d,e){var t,s,r
t=P.u8(b,null)
this.f=t
if(t.a===0)t.h(0,$.f9)
s=P.u8(this.gh_(),null)
for(t=new P.dz(s,s.r,null,null,[null]),t.c=s.e;t.L();){r=t.d
this.f.bZ(0,r.geO())
this.f.aB(0,r)}$.$get$wv().push(this)},
$isbF:1,
$asbF:function(){return[A.a8]}}
A.mB.prototype={
$2:function(a,b){return a.gej()-C.a.bI(b.gej())},
$S:function(){return{func:1,args:[G.a7,G.a7]}}}
A.mA.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.a7]}}}
Z.mI.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Juice Box",H.a([$.M,$.I,$.aW,$.av],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Shogun Body Pillow",H.a([$.e3,$.b7,$.I],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.ee,$.aw)
t.i(0,$.cz,$.n)
t.i(0,$.bQ,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.cb,$.l)
r=$.o
q="The "+r+" sees a floating sentient "
p=$.as
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.u+" notices it, and starts "+$.N+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.z
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.c]
t.i(0,new R.a3("Talk to your Juice entity",!1,[new U.c(q),new U.c(o),new U.c(n),new U.ab(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
r="The "+p+" is greeted by a young adolescent "
m=$.u
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.z
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.N
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.a3("Be The Wingman",!1,[new U.c(r),new U.c(l),new U.c(n),new U.ab(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.o
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.u
m=m+q+" informs them that "
p=$.z
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.a3("Pilot The Mech",!1,[new U.c(m),new U.c(o),new U.c(n),new U.ab(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
gU:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
ga1:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G}}
N.mJ.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Gavel",H.a([$.a9,$.tG],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Caution Tape",H.a([$.aS,$.bf],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Deerstalker Hat",H.a([$.R,$.aI],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mystery Novel",H.a([$.M,$.aK],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dish Served Cold",H.a([$.bR,$.aF,$.bi],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Pony Pals: Detective Pony ",H.a([$.M,$.aK,$.ax],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Handcuffs",H.a([$.aJ,$.E,$.bf],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.h4,$.L)
q.i(0,$.c5,$.n)
q.i(0,$.cA,$.L)
p=$.o
o="The "+p+" finds an elaborate courtroom full of "+$.N+"ing "
n=$.u
m=[U.c]
q.i(0,new R.ae("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.as+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.l)
s.i(0,$.ds,$.n)
s.i(0,$.cS,$.n)
p=$.o
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.u
l=o+l+" yells 'Stop that thief' in betwen "+$.N+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.as+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.Fe
s.i(0,new R.ae("Enforce the Law",!1,[new U.c(l),new U.c(o),new U.c(p)],H.a([],m),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.l)
t.i(0,$.ck,$.n)
t.i(0,$.cL,$.L)
t.i(0,$.ek,$.n)
t.i(0,$.eg,$.n)
t.i(0,$.f0,$.n)
t.i(0,$.is,$.n)
r=$.o
q="The "+r+" finds a crowd of "
p=$.N
q=q+p+"ing "
o=$.u
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.Fs
t.i(0,new R.ae("Start a Revolution",!1,[new U.c(q),new U.c(r),new U.c(p)],H.a([],m),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.aP)}}
S.mL.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Shining Armor",H.a([$.aJ,$.mx,$.Q,$.fa],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Excalibur",H.a([$.ac,$.mx,$.Q,$.aY,$.aH,$.em],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Noble Steed",H.a([$.E,$.Q,$.be,$.aA],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Hero's Shield",H.a([$.aJ,$.fa,$.Q,$.mx],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lG,$.l)
t.i(0,$.dJ,$.l)
t.i(0,$.e1,$.l)
t.i(0,$.f0,$.l)
t.i(0,$.h4,$.n)
r="The "+$.z+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.o
p=[U.c]
t.i(0,new R.bv("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.N+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.z
r="Now that the "+q+" is defeated, the "
o=$.u
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.o
t.i(0,new R.al("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.aZ
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.z
n=n+q+". A Learned "+$.u+" explains that it can only be defeated by the Legendary "
r=$.as
n=n+r+" Blade. The "
m=$.o
t.i(0,new R.al("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
r="The volcanos of the land are weirdly active after the defeat of the "+$.z+". One begins to erupt near a "
m=$.u
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.N+"s, but not really doing anything to evacuate or save anyone. The "
o=$.o
t.i(0,new R.al("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
Q.mM.prototype={
gU:function(){return this.n}}
K.mO.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Creeping Vine",H.a([$.a9,$.I,$.b5,$.aA],s),null,!1,"Sentient Plant Tentacles")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Lollipop",H.a([$.tA,$.I,$.b1],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Golem",H.a([$.aJ,$.aD,$.I,$.aA],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ectoplasm",H.a([$.bY,$.I,$.b1],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Aqua Vitae",H.a([$.b_,$.I,$.b1,$.ac,$.af],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Homunculus",H.a([$.be,$.I,$.aA],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.c6,$.l)
q.i(0,$.bd,$.l)
q.i(0,$.h5,$.L)
q.i(0,$.b4,$.n)
q.i(0,$.lK,$.n)
q.i(0,$.cB,$.L)
p=$.o
o="The "+p+" finds a village of compliant "
n=$.u
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.N+"ing in panic. Don't upset "
m=$.z
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.a3("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.ab(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.l)
s.i(0,$.cv,$.l)
s.i(0,$.cB,$.L)
s.i(0,$.b4,$.n)
o=$.o
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.u
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.z
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.a3("Distribute the Food",!1,[new U.c(m),new U.c(k),new U.c(l),new U.ab(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.d0,$.l)
t.i(0,$.bd,$.L)
t.i(0,$.dK,$.l)
t.i(0,$.c0,$.n)
t.i(0,$.e0,$.n)
t.i(0,$.il,$.n)
r="Drawn by wailing and "+$.N+"ing, the "
q=$.o
r=r+q+" enters a rotting "
o=$.u
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.z
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.a3("Protect the Farms",!1,[new U.c(r),new U.c(m),new U.c(k),new U.ab(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
G.mP.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("FAQ",H.a([$.ag,$.I,$.ad,$.bD],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flashlight",H.a([$.aS,$.I,$.b0,$.ag,$.bD],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Octet",H.a([$.I,$.b0,$.bD,$.ac,$.mq],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Horseshoe",H.a([$.tH,$.I,$.an],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rabbits Foot",H.a([$.tP,$.I],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("4 Leaf Clover",H.a([$.b5,$.I,$.b0,$.bD],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("8-Ball",H.a([$.b_,$.I,$.aA],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.it,$.l)
q.i(0,$.eZ,$.n)
q.i(0,$.dI,$.l)
q.i(0,$.ei,$.l)
p=$.o
o="The "+p+" is searching for the lair of "
n=$.z
o=o+n+" when some local "
m=$.u
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.c]
q.i(0,new R.a3("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.ab(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.N+"ing "+$.u+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.z
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.a3("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.ab(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.n)
s.i(0,$.b4,$.n)
s.i(0,$.dt,$.l)
s.i(0,$.lE,$.l)
s.i(0,$.eh,$.l)
s.i(0,$.io,$.l)
p=$.o
o="The "+p+" walks into a "
n=$.u
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.as
o=o+l+", but "
k=$.z
o=o+k+" has hoarded all of the planets "
j=$.aZ
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.N+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.a3("The Candlestick Taker",!1,[new U.c(l),new U.c(o),new U.c(h),new U.ab(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.uy(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.u
j=j+k+" explains that the "
h=$.z
s.i(0,new R.a3("Shine the Light",!1,[new U.c(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.c("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.N+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.c("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.ab("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.h6,$.n)
q.i(0,$.bd,$.n)
q.i(0,$.f1,$.l)
q.i(0,$.b4,$.n)
q.i(0,$.cA,$.l)
p="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
p=p+o+" sets up a wiki and settles in to help the "
n=$.u
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.f4+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.al("Moderate the Wiki",!1,[new U.c(p),new U.c(n),new U.c(o)],H.a([],i),R.e5(),!1,!1,new Y.c1("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
l="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.u
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.f4+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.al("Create the Wiki",!1,[new U.c(l),new U.c(n),new U.c(o)],H.a([],i),R.ev(),!1,!1,new Y.c1("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.u
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.o
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.z
q.i(0,new R.a3("Shed the Light",!1,[new U.c(o),new U.c(p),new U.c(l),new U.ab(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dI,$.l)
t.i(0,$.it,$.l)
t.i(0,$.ei,$.n)
t.i(0,$.cz,$.n)
t.i(0,$.tl,$.n)
t.i(0,$.c0,$.L)
t.i(0,$.e1,$.L)
t.i(0,$.bQ,$.n)
t.i(0,$.cy,$.L)
t.i(0,$.bd,$.n)
t.i(0,$.cx,$.l)
s=$.o
r="The "+s+" is approached by a Fast Talking "
p=$.u
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.as
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.N+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.z
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.a3("Be the Star",!1,[new U.c(r),new U.c(n),new U.c(p),new U.ab(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o="After the "+$.z+", the "
s=$.o
o=o+s+" is disappointed to learn that barely any of the "
l=$.u
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.f4+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.al("Be the Biggest Star in Paradox Space",!1,[new U.c(o),new U.c(l),new U.c(s)],H.a([],i),R.e5(),!1,!1,new Y.c1("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
m.i(0,new X.H(q,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
Z.n2.prototype={
J:function(){var t,s,r,q
t=this.E
s=[G.a7]
r=A.j("Dream Bubbles Book",H.a([$.M,$.aq,$.aK,$.w4],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.O(t,0)]))
t=Q.A(null,null,A.a8)
r=A.j("Uno Reverse Card",H.a([$.mo,$.jh,$.aq],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Lord's Cape",H.a([$.R,$.Q,$.aq],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Drawing Tablet",H.a([$.hj,$.Q,$.aq],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("How to Make Friends And Influence People",H.a([$.ac,$.M,$.Q,$.bl,$.aK],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cL,$.L)
q.i(0,$.ek,$.L)
q.i(0,$.c0,$.L)
q.i(0,$.cS,$.n)
p="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.o
p=p+o+" comands that the "
n=$.u
m=[U.c]
q.i(0,new R.bv("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.N+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
o="As soon as the "+$.z+" is defeated, the "
n=$.u
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.o
q.i(0,new R.al("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.x
p.i(0,new X.H(s,q,null),$.bN)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.vH,$.l)
t.i(0,$.cb,$.l)
t.i(0,$.bd,$.l)
t.i(0,$.b4,$.n)
s="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.o
s=s+r+" comands that the "
o=$.u
t.i(0,new R.bv("Command Minions to Breed Frogs",!1,[new U.c(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.N+"s. "),new U.c("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
r="As soon as the "+$.z+" is defeated, the "
o=$.u
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.o
t.i(0,new R.al("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",this.E,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,t,null),$.bN)}}
S.n4.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Alternate Costume",H.a([$.R,$.Q,$.af,$.ac,$.az],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Cape",H.a([$.R,$.Q,$.af],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Staff",H.a([$.a9,$.Q,$.an,$.af,$.de],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Walking Broom",H.a([$.jf,$.a9,$.Q,$.aA,$.af,$.de],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.eY,$.l)
t.i(0,$.f0,$.n)
t.i(0,$.ck,$.l)
t.i(0,$.ej,$.n)
t.i(0,$.d0,$.L)
r="The "+$.z+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.o
p=[U.c]
t.i(0,new R.bv("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.o
t.i(0,new R.al("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
r="The "+q+" is feeling quite pleased with their victory over the "+$.z+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aZ
t.i(0,new R.al("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="Now that the "+$.z+" has been defeated, the "
o=$.u
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.o
q=q+r+"'s help in planning the brand new city of "
n=$.aZ
t.i(0,new R.al("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.N+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
U.n5.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Maiden's Breath",H.a([$.b5,$.Q,$.aI],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Feather Duster",H.a([$.a9,$.Q,$.de,$.bu],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Valkyrie Shield",H.a([$.aI,$.aJ,$.E,$.Q,$.ac,$.fa,$.vX],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Maiden's Songbook",H.a([$.M,$.Q,$.ak,$.aK],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.db,$.l)
t.i(0,$.c6,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.bd,$.n)
t.i(0,$.dt,$.n)
t.i(0,$.cy,$.n)
r="The "+$.z+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.o
r=r+q+" asks local  "
p=$.u
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.N
n=[U.c]
t.i(0,new R.bv("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.o
o="The "+q+" has adopted a local "
p=$.u
t.i(0,new R.al("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.N+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.z+". ")],H.a([],n),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
D.nb.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("memes",H.a([$.aW,$.ty,$.w3,$.tB],[G.a7]),"No. Just no.",!1,";)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Memes"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.it,$.l)
r=$.o
q="The "+r+" decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."
p="The "+r+" finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant "+$.u+"-looking dragon. They notice that it's chained up, so The "+r+" decides to free it, and it brings them to the top of the tallest tower in the castle. "
o="The dragon leads The "+r+" to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The "+r+" unveils it, they see a sleeping consort, The "+r+" yeets it out the window, and rides the Dragon towards the "
n=$.z
o=o+n+". "
m="The "+r+" rides up to the "+n+"'s lair, and they challenge it to a battle. "
l="The "+r+" wins, with the added help of the Dragon, there was no chance they would lose. "
t.i(0,new R.a3("Become Shrek",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(m,"Even with the added help of the Dragon, The "+r+" wasn't enough to defeat the "+n,l)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
gU:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
ga1:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G}}
L.ne.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gZ:function(){return this.t},
gV:function(){return this.u},
ga1:function(){return this.A},
gX:function(){return this.F}}
V.nf.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Puzzle Box",H.a([$.a9,$.I,$.af],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Tesla Coil",H.a([$.ag,$.I,$.E],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Coin",H.a([$.E,$.I],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Electronic Door",H.a([$.E,$.I,$.ag,$.ad],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Janus Bust",H.a([$.aJ,$.hg,$.aD,$.aq,$.I,$.ac,$.ag],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cb,$.n)
q.i(0,$.eZ,$.L)
q.i(0,$.cA,$.L)
p=$.o
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.u
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.z
k=[U.c]
q.i(0,new R.a3("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fj(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.u+" explains that at the end of the Labrinth is the "
l=$.z
q.i(0,new R.a3("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.ab("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.h4,$.L)
s.i(0,$.c5,$.n)
s.i(0,$.cA,$.L)
s.i(0,$.cb,$.L)
p=$.z
o="The "+p+" has commited a staggering amount of crimes against the local "+$.u+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.o
s.i(0,new R.a3("Face the Music",!1,[new U.c(o+m+" knows that Justice is on their side."),new U.c("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.ab("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.l)
t.i(0,$.bd,$.n)
t.i(0,$.f1,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.cA,$.l)
r=$.o
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.z
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.as+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.a3("Make the Connections",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
S.nh.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gZ:function(){return this.t},
gV:function(){return this.u},
gX:function(){return this.A}}
E.ni.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Feather Pen",H.a([$.E,$.Q,$.aq,$.bu],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Half Finished Bust of Snoop Dog",H.a([$.wh,$.Q,$.hg,$.an,$.ac],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Book of Poetry",H.a([$.M,$.Q,$.aq,$.aK],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.db,$.l)
t.i(0,$.c6,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.bd,$.n)
t.i(0,$.dt,$.n)
t.i(0,$.cy,$.n)
r="The "+$.z+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.o
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.N
n=[U.c]
t.i(0,new R.bv("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
q="You'd think after the dramatic defeat of the "+$.z+" the "
o=$.u
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.o
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.as
t.i(0,new R.al("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
F.nj.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Piano",H.a([$.an,$.a9,$.ak,$.aq],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flute",H.a([$.E,$.ak],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Microphone",H.a([$.aR,$.ag],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Violin",H.a([$.a9,$.ak],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sheet Music",H.a([$.M,$.ak],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Electric Guitar",H.a([$.aS,$.ak,$.ag,$.aR,$.ax],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.aS,$.ak,$.ag,$.ax],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Guitar",H.a([$.a9,$.ak],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.aw)
q.i(0,$.tl,$.l)
q.i(0,$.ei,$.l)
q.i(0,$.dt,$.n)
q.i(0,$.b4,$.n)
q.i(0,$.lC,$.n)
p=$.o
o="The "+p+" meets a wise old "+$.u+" who tells that the "+$.z+" can only be awoken by the Legendary Hero playing the "
n=$.aZ
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.as
k=[U.c]
q.i(0,new R.ae("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
n="The "+p+" finds an empty, trashed "
l=$.aZ
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.as+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.N+"ing "+$.u+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.Fk
q.i(0,new R.ae("Play the Crowd",!1,[new U.c(n),new U.c(m),new U.c(l)],H.a([],k),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.to,$.aw)
s.i(0,$.ds,$.n)
s.i(0,$.cS,$.n)
s.i(0,$.dt,$.l)
s.i(0,$.lC,$.aw)
o=$.o
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aZ
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.z
s.i(0,new R.ae("Sing the Song",!1,[new U.c(n+l+". "),new U.c("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.as+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.h5,$.aw)
t.i(0,$.bQ,$.n)
t.i(0,$.dK,$.n)
r=$.o
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.u
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.N
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aZ+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.ae("And It Don't Stop",!1,[new U.c(n),new U.c(q),new U.c(r)],H.a([],k),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,t,null),$.aP)}}
Y.nx.prototype={
T:function(a,b){var t=0,s=P.bq(),r,q=this,p,o
var $async$T=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:t=3
return P.cI(A.hq("scripts/Rendering/threed/three.min.js",!1),$async$T)
case 3:t=4
return P.cI(Q.om(),$async$T)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.bJ(p)
o.eL(p,P.wy(["",$.$get$vy()],P.C,S.hu))
o.eK(p,!1)
q.b=p}J.vj(p,b)
r=J.vj(q.b,b)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$T,s)},
$aseC:function(){return[S.fh]},
$asc7:function(){return[S.fh,P.C]}}
V.nF.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Shorts",H.a([$.R,$.Q,$.f8,$.ac],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sidekick Figurine",H.a([$.aS,$.Q,$.ax],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Steroids",H.a([$.aF,$.Q,$.af],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lG,$.l)
t.i(0,$.cB,$.n)
t.i(0,$.h9,$.n)
t.i(0,$.lI,$.n)
t.i(0,$.db,$.n)
t.i(0,$.bd,$.n)
t.i(0,$.e0,$.n)
t.i(0,$.eh,$.n)
t.i(0,$.tp,$.n)
t.i(0,$.il,$.n)
t.i(0,$.lE,$.n)
r="The "+$.z+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.o
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.N
n=[U.c]
t.i(0,new R.bv("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.o
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.u+" named Professor "
p=$.N
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.as
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.z
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.a3("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.ab(k,"The "+q+" whited out...",m)],H.a([],n),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m="Now that the "+$.z+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.o
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.u
t.i(0,new R.al("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aZ+" buffs. With a deafening "+$.N+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.y(),!1,!1,new Y.i8("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
G.nS.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Superhero Action Figure",H.a([$.aS,$.ax,$.av],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Action DVD",H.a([$.aS,$.ax],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ghost Busters DVD",H.a([$.aS,$.bY],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Snow Dogs DVD",H.a([$.aS,$.b8,$.bi,$.cd],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skateboarding Video Game",H.a([$.aS,$.ax],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Movie Poster",H.a([$.M,$.ax],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Audrey II Plush",H.a([$.b5,$.ax,$.R,$.aA],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Peashooter Toy",H.a([$.b5,$.b2,$.ax,$.R],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shitty Sword",H.a([$.av,$.E,$.ax,$.em,$.aH,$.bS],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("GameBro Magazine",H.a([$.M,$.ax],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("GameGrl Magazine",H.a([$.M,$.ax],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.n)
q.i(0,$.cx,$.n)
q.i(0,$.bQ,$.l)
q.i(0,$.cB,$.aw)
q.i(0,$.dd,$.aw)
p=$.o
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.u
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aZ+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.N+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.Fl
l=[U.c]
q.i(0,new R.ae("Become the Star",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eg,$.n)
s.i(0,$.ds,$.n)
s.i(0,$.cx,$.n)
s.i(0,$.bQ,$.n)
s.i(0,$.dJ,$.l)
o=$.o
n="The "+o+" runs towards an explosion in a local "
m=$.u
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aZ
s.i(0,new R.ae("Stop the Villain",!1,[new U.c(n),new U.c(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.c(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cx,$.n)
t.i(0,$.dI,$.l)
t.i(0,$.cv,$.l)
t.i(0,$.dJ,$.n)
r=$.o
q="The "+r+" gets a job at the "+$.aZ+" Cinema. A new movie, The Lonely "
o=$.as
q=q+o+" is coming out soon, and "
n=$.u
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.N+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.ae("Premiere the Movie",!1,[new U.c(q),new U.c(m),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,t,null),$.aP)}}
N.nX.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Feather'd Cap",H.a([$.R,$.Q,$.f8],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Crown",H.a([$.ac,$.tF,$.Q,$.f8],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Gunpowder",H.a([$.bm,$.Q],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cx,$.n)
t.i(0,$.cb,$.n)
t.i(0,$.dK,$.L)
r="With the closing of the curtain, the "+$.z+" has released the frogs, and yet they are nowhere to be found. The "
q=$.o
p=[U.c]
t.i(0,new R.bv("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.z
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.o
r=r+o+" to get it back to normal. They organize a team of "
n=$.u
t.i(0,new R.al("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.as+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
U.c.prototype={}
U.ab.prototype={}
R.nY.prototype={
H:function(a){return H.D(new H.dS(H.ke(this),null))+": "+this.c},
gN:function(a){return this.c}}
R.ae.prototype={}
R.a3.prototype={}
R.al.prototype={}
R.bv.prototype={}
E.nZ.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Curtain",H.a([$.R,$.I,$.av],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Sword",H.a([$.E,$.em,$.aY,$.I,$.aH,$.b3,$.av,$.bk,$.aL],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.E,$.aR,$.ag,$.I,$.av],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.aJ,$.E,$.aR,$.bl,$.c2,$.I,$.av],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bacchus Wine",H.a([$.aF,$.bl,$.aq,$.I,$.ac,$.av],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Nightmare Fuel",H.a([$.a9,$.I,$.b3,$.aG,$.bm,$.av],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.im,$.l)
q.i(0,$.cL,$.l)
q.i(0,$.ds,$.l)
q.i(0,$.d0,$.n)
q.i(0,$.c0,$.n)
q.i(0,$.ck,$.n)
q.i(0,$.c5,$.L)
q.i(0,$.dd,$.n)
q.i(0,$.eg,$.l)
q.i(0,$.is,$.l)
q.i(0,$.f0,$.l)
q.i(0,$.lH,$.l)
q.i(0,$.h5,$.n)
q.i(0,$.ek,$.l)
p=$.o
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.as
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.a3("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.ab(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hF(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.a3("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.ab(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dt,$.l)
s.i(0,$.c0,$.n)
s.i(0,$.c5,$.l)
s.i(0,$.cz,$.l)
s.i(0,$.cy,$.l)
s.i(0,$.cx,$.n)
s.i(0,$.ir,$.L)
s.i(0,$.cL,$.n)
s.i(0,$.cB,$.l)
s.i(0,$.bQ,$.l)
s.i(0,$.dd,$.L)
p=$.N
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aZ
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.a3("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.ab(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.im,$.l)
t.i(0,$.dd,$.l)
t.i(0,$.c5,$.l)
t.i(0,$.cB,$.n)
t.i(0,$.cy,$.l)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.a3("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I},
sa6:function(a){return this.m=a},
sa5:function(a){return this.n=a},
sa4:function(a){return this.p=a},
sa2:function(a){return this.q=a},
sW:function(a){return this.t=a},
sU:function(a){return this.A=a},
sZ:function(a){return this.C=a},
sV:function(a){return this.D=a},
sa1:function(a){return this.E=a},
sa8:function(a){return this.F=a},
sa7:function(a){return this.G=a},
sX:function(a){return this.I=a}}
L.o_.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gV:function(){return this.t},
gX:function(){return this.u}}
L.o1.prototype={}
L.o2.prototype={}
L.o3.prototype={}
Y.dN.prototype={}
Y.ap.prototype={}
Y.d_.prototype={}
Y.nl.prototype={}
Y.c1.prototype={
gN:function(a){return this.c}}
Y.a5.prototype={}
Y.i8.prototype={}
Y.bC.prototype={}
Y.cW.prototype={}
Y.kL.prototype={}
Y.br.prototype={}
Y.jy.prototype={}
Y.iw.prototype={}
Y.jA.prototype={}
Z.o8.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gZ:function(){return this.t},
gV:function(){return this.u}}
N.o9.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Domino Mask",H.a([$.R,$.Q,$.f8],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Archery Set",H.a([$.tz,$.Q,$.f8,$.tw],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Gristtorrent Server",H.a([$.ac,$.aS,$.ag,$.Q,$.ad,$.az],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.c5,$.l)
t.i(0,$.ck,$.n)
t.i(0,$.dJ,$.n)
r="The "+$.z+" cannot release the frogs since the corrupt Noble "
q=$.u
r=r+q+"s have hoarded them. The "
p=$.o
o=[U.c]
t.i(0,new R.bv("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
q="The "+p+" learns of the extreme injustices of the "
r=$.u
q=q+r+"s who rose to power during the tyranny of "
n=$.z
t.i(0,new R.al("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
Q.oa.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Red Rose",H.a([$.aM,$.aI],s),null,!1,"Seductive Plant")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.aM,$.M],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Chocolate Bar",H.a([$.aM,$.aF],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Candelabra",H.a([$.aM,$.aG],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Head Cannon",H.a([$.aM,$.bm,$.E,$.b2],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Her Pitch Passions Novel",H.a([$.aK,$.M,$.aM],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.l)
q.i(0,$.h9,$.n)
q.i(0,$.eX,$.n)
q.i(0,$.h8,$.l)
q.i(0,$.cz,$.n)
q.i(0,$.ip,$.L)
p=$.o
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.u
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.as+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.ae("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.n)
s.i(0,$.dI,$.l)
s.i(0,$.h8,$.l)
s.i(0,$.cv,$.n)
s.i(0,$.ei,$.L)
s.i(0,$.ip,$.L)
o=$.u
n="A Romantic "+o+" approaches the "
m=$.o
s.i(0,new R.ae("Plan the Date",!1,[new U.c(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.c("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.ip,$.l)
t.i(0,$.cv,$.l)
t.i(0,$.eX,$.n)
t.i(0,$.lI,$.l)
t.i(0,$.h8,$.l)
t.i(0,$.cz,$.n)
t.i(0,$.ei,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.u
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.N+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.z+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.Fh
t.i(0,new R.ae("Ship All the Ships",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.o
r="The "+n+"  and the "
o=$.ex
t.i(0,new R.ae("Flushed Shipping Dungeon",!1,[new U.c(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.ew(),!1,!1,new Y.iw(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aw)
o=$.o
n="The "+o+"  and the "
r=$.ex
t.i(0,new R.ae("Pale Shipping Dungeon",!1,[new U.c(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.ew(),!1,!1,new Y.jy(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aw)
r=$.o
o="The "+r+"  and the "
n=$.ex
t.i(0,new R.ae("Pitched Shipping Dungeon",!1,[new U.c(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.ew(),!1,!1,new Y.jA(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p.i(0,new X.H(s,t,null),$.aP)}}
V.ob.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Arrow",H.a([$.aY,$.a9,$.tw],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bow",H.a([$.a9,$.an,$.f9],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Yondu",H.a([$.av,$.I],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Empathy",H.a([$.I,$.ty,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.b4,$.n)
t.i(0,$.dc,$.L)
t.i(0,$.bQ,$.n)
t.i(0,$.cb,$.L)
r=$.o
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.z
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.a3("Be the Yondu",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.c]),R.FD(),!1,!1,new Y.nl("Rule","Yondu","Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.aP)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
ga2:function(){return this.u},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
R.oc.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Runestone",H.a([$.aD,$.af,$.I],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Bottle",H.a([$.b_,$.af],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p
t=[P.C]
s=H.a(["Rune","Magic","Fairy","Infinite","Predictions"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cb,$.n)
t.i(0,$.b4,$.n)
r=$.o
q="The "+r+" is walking around in a village of "+$.u+"s, when a Consort walks up to them. It says that The "+r+" has to learn magic, so they can fight the "
p=$.z
t.i(0,new R.a3("Learn Magic",!1,[new U.c(q+p+". The "+r+" promises to do their best."),new U.c("The "+r+" is practicing the arcana, they're starting to get pretty good."),new U.c("The "+r+" is able to fight numerous imps with their magic now, they are ready to fight the "+p+"..."),new U.ab("","","")],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaS:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
ga1:function(){return this.I},
gX:function(){return this.a9}}
T.hI.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("Perfectly Generic Object",H.a([],[G.a7]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.l)
q.i(0,$.bd,$.L)
q.i(0,$.dK,$.l)
q.i(0,$.c0,$.n)
q.i(0,$.e0,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
m=[U.c]
q.i(0,new R.al("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.N+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.x
n.i(0,new X.H(s,q,null),$.bN)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.f_,$.l)
s.i(0,$.eh,$.L)
s.i(0,$.ej,$.n)
s.i(0,$.cS,$.l)
s.i(0,$.ck,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.al("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.N+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" learns that all of the local "
o=$.u
s.i(0,new R.al("Do the Teamwork",!1,[new U.c(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+p+" grabs the "+$.ex+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.N+"ing in amazement. The factory is saved! ")],H.a([],m),R.ew(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.aw)
n.i(0,new X.H(q,s,null),$.bN)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.bd,$.L)
t.i(0,$.c6,$.n)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.N
t.i(0,new R.ae("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ux(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
p="The "+l+" learns that all of the local "
r=$.u
t.i(0,new R.al("Relax the Consorts",!1,[new U.c(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.bN)},
H:function(a){return this.r},
ag:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.h2("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.i5]),H.a([],[M.h3]))
this.J()
this.K()
t=this.Q
if($.$get$oe().ae(0,t))H.ba("Duplicate class id for "+this.H(0)+": "+t+" is already registered for "+J.cJ($.$get$oe().B(0,t))+".")
$.$get$oe().i(0,t,this)},
gN:function(a){return this.r}}
E.of.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Sage's Robe",H.a([$.R,$.Q,$.b7,$.ad,$.af,$.ac],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Peer Reviewed Journal",H.a([$.M,$.Q,$.aK,$.ad],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Guru Pillow",H.a([$.R,$.Q,$.e3,$.ad],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.h6,$.n)
t.i(0,$.bd,$.n)
t.i(0,$.f1,$.l)
t.i(0,$.b4,$.L)
t.i(0,$.cA,$.l)
r="The "+$.z+" has blocked access to the books for the duration. The "
q=$.o
p=[U.c]
t.i(0,new R.bv("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q="Now that the "+$.z+" is defeated, it is time to begin recovery efforts. The "
r=$.u
q=q+r+"s ask the "
o=$.o
t.i(0,new R.al("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.N+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
Y.og.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gV:function(){return this.t},
gX:function(){return this.u}}
Y.oh.prototype={}
K.oi.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Uno Reverse Card",H.a([$.mo,$.I,$.av],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("JR Body Pillow",H.a([$.e3,$.b7,$.I],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.im,$.l)
q.i(0,$.cL,$.l)
q.i(0,$.ds,$.l)
q.i(0,$.d0,$.n)
q.i(0,$.c0,$.n)
q.i(0,$.ck,$.n)
q.i(0,$.c5,$.L)
q.i(0,$.dd,$.n)
q.i(0,$.eg,$.l)
q.i(0,$.is,$.l)
q.i(0,$.f0,$.l)
q.i(0,$.lH,$.l)
q.i(0,$.h5,$.n)
q.i(0,$.ek,$.l)
p=$.o
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.as
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.a3("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.ab(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hF(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.a3("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.ab(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dt,$.l)
s.i(0,$.c0,$.n)
s.i(0,$.c5,$.l)
s.i(0,$.cz,$.l)
s.i(0,$.cy,$.l)
s.i(0,$.cx,$.n)
s.i(0,$.ir,$.L)
s.i(0,$.cL,$.n)
s.i(0,$.cB,$.l)
s.i(0,$.bQ,$.l)
s.i(0,$.dd,$.L)
p=$.N
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aZ
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.a3("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.ab(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.im,$.l)
t.i(0,$.dd,$.l)
t.i(0,$.c5,$.l)
t.i(0,$.cB,$.n)
t.i(0,$.cy,$.l)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.a3("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
gU:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
ga1:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G}}
Y.oj.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Walking Stick",H.a([$.a9,$.Q,$.de],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Adorable Girlscout Beret",H.a([$.R,$.Q,$.w5,$.ad,$.ac],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Map",H.a([$.M,$.Q,$.ad],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Compass",H.a([$.E,$.Q,$.ad,$.af],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p
t=[P.C]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.db,$.l)
t.i(0,$.c6,$.l)
t.i(0,$.bd,$.l)
t.i(0,$.bQ,$.L)
t.i(0,$.b4,$.L)
r="Now that the "+$.z+" has been defeated, the planet has really opened up. The "
q=$.o
p=[U.c]
t.i(0,new R.al("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.u+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.o
t.i(0,new R.bv("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.u+" "+$.N+"s in time to stop them.   ")],H.a([],p),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.bN)}}
L.ok.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Scroll",H.a([$.M,$.Q,$.ad],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ink Pot",H.a([$.b_,$.Q,$.az,$.ad],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Blank Book",H.a([$.M,$.Q,$.aK,$.ad,$.az,$.ac],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lC,$.l)
t.i(0,$.bd,$.l)
t.i(0,$.cA,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.cb,$.n)
r="The "+$.z+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.o
p=[U.c]
t.i(0,new R.bv("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q="Now that the "+$.z+" has been taken care of, the "
r=$.o
q=q+r+" discovers a large library of "
o=$.u
t.i(0,new R.al("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
S.on.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Cueball",H.a([$.el,$.ji,$.Q,$.an,$.aA,$.ac],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Crystal Ball",H.a([$.el,$.w2,$.Q,$.b0],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Binoculars",H.a([$.b_,$.Q,$.E],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Blindfold",H.a([$.vZ,$.Q,$.b7],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.vI,$.l)
t.i(0,$.iq,$.l)
t.i(0,$.lD,$.l)
t.i(0,$.cB,$.n)
r="Now that the "+$.z+" has been defeated, the land is really starting to open up. The "
q=$.o
r=r+q+" finds a tunnel filled with Blind "
p=$.u
o=[U.c]
t.i(0,new R.al("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.o
t.i(0,new R.bv("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.u
t.i(0,new R.al("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
r="A group of underlings are still making trouble, even after the defeat of the "+$.z+". The "
p=$.o
r=r+p+" begins planting rumors of a huge "
q=$.as
t.i(0,new R.al("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
L.ot.prototype={}
T.c3.prototype={}
Y.ov.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Meddler's Guide",H.a([$.aK,$.Q,$.M,$.bl,$.ac,$.b1],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.b_,$.Q,$.b1],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.Q
r=A.j("Cloud in a Bottle",H.a([r,r,$.bo],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.af,$.Q,$.b0,$.aI,$.M],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.bd,$.n)
t.i(0,$.db,$.l)
t.i(0,$.cB,$.n)
t.i(0,$.b4,$.n)
t.i(0,$.c6,$.l)
r="The defeat of the "+$.z+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.o
p=[U.c]
t.i(0,new R.bv("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q="Now that the "+$.z+" has been taken care of, the "
r=$.o
q=q+r+" finds a long line of "
o=$.u
t.i(0,new R.al("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
O.ow.prototype={}
N.ox.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Fiduspawn Plush",H.a([$.cd,$.R,$.b7],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Teddy Bear",H.a([$.cd,$.R,$.b7],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dice",H.a([$.tD,$.aS],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Pigeon",H.a([$.bu,$.aA,$.be,$.b9,$.bk,$.tM],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cat Ears",H.a([$.R,$.b7,$.cd],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Religious Text",H.a([$.aK,$.M],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Psychology Book",H.a([$.aK,$.M],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Therapy Couch",H.a([$.b7,$.R],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("FLARP Manual",H.a([$.aK,$.M,$.ad],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dc,$.L)
q.i(0,$.b4,$.n)
q.i(0,$.cb,$.l)
q.i(0,$.cA,$.n)
p=$.o
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.u
m=[U.c]
q.i(0,new R.ae("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aZ+" or "+$.as+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.N+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dc,$.L)
s.i(0,$.b4,$.l)
s.i(0,$.cb,$.l)
s.i(0,$.ti,$.l)
s.i(0,$.cz,$.l)
s.i(0,$.to,$.l)
s.i(0,$.cA,$.n)
o=$.o
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.N
n=n+l+"ing "
k=$.u
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aZ
s.i(0,new R.ae("Meditate On Frogism",!1,[new U.c(n),new U.c(j+i+"-ness. How could they miss this?"),new U.c(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cS,$.L)
t.i(0,$.dI,$.l)
t.i(0,$.c6,$.l)
t.i(0,$.dJ,$.l)
t.i(0,$.h4,$.l)
r=$.o
q="The "+r+" wanders into an entire crowd of "
o=$.u
t.i(0,new R.ae("Protect the FLARPers",!1,[new U.c(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.N+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.c("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.c("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,t,null),$.aP)}}
M.bw.prototype={}
N.oz.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Frog Statue",H.a([$.aJ,$.aD,$.I],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Frog Costume",H.a([$.R,$.I],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Reactor",H.a([$.bZ,$.ad,$.ag,$.I],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Telescope",H.a([$.E,$.b_,$.ad,$.I],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Green Sun Poster",H.a([$.M,$.I,$.mr,$.ac],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m
t=$.o
s=[P.C]
r=H.a(["Wherever the "+t+" goes, they find a "+$.u+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.N+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.z+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.o
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.u+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.u+" tells the "
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
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cB,$.L)
t.i(0,$.tk,$.l)
s=[U.c]
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
t.i(0,new R.bv("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.N+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.y(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
this.f.i(0,new X.H(o,t,null),$.Gs)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
U.at.prototype={
gN:function(a){return this.d+"kind"},
$isbF:1,
$asbF:function(){return[A.a8]}}
K.cE.prototype={
gN:function(a){return this.a}}
M.oE.prototype={
b1:function(a){return"application/octet-stream"},
T:function(a6,a7){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$T=P.bA(function(a8,a9){if(a8===1)return P.bx(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.da(null,0)
q.a=J.dW(a7,0)
for(p=0,o="";p<6;++p)o+=H.hE(q.am(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.m("Invalid header: "+n)
m=q.am(8)
l=9+m*6
o=8*m
k=q.am(o)
j=q.am(o)
i=q.am(o)
h=q.am(o)
g=q.am(o)
f=q.am(o)
o=P.G
e=P.C
d=P.cD(o,e)
c=new O.cU(k,j,null,null,null,null,null,null,d,P.cD(e,o))
c.x=new Uint8Array(H.cw(k*j))
b=q.am(8)
for(o=[o],p=0;p<b;++p){a=q.am(8)
a0=q.am(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.am(8)
if(a2>=e){r=H.x(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.p4(a1,0,null))}a4=q.am(8)
a5=$.$get$wU().B(0,a4)
if(a5==null)throw H.m("Sprite decoding error: Encoding id "+a4+" not supported.")
c.i0(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hN()
r=c
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$T,s)},
$asdp:function(){return[O.cU]},
$asc7:function(){return[O.cU,P.bh]}}
U.oF.prototype={}
A.ng.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Puzzle Box",H.a([$.a9,$.I,$.af],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Tesla Coil",H.a([$.ag,$.I,$.E],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Coin",H.a([$.E,$.I],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Electronic Door",H.a([$.E,$.I,$.ag,$.ad],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Janus Bust",H.a([$.aJ,$.hg,$.aD,$.aq,$.I,$.ac,$.ag],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.A},
ga8:function(){return this.C},
ga7:function(){return this.D},
gZ:function(){return this.E},
gV:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
A.oA.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Frog Statue",H.a([$.aJ,$.aD,$.I],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Frog Costume",H.a([$.R,$.I],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Reactor",H.a([$.bZ,$.ad,$.ag,$.I],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Telescope",H.a([$.E,$.b_,$.ad,$.I],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Green Sun Poster",H.a([$.M,$.I,$.mr,$.ac],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.t},
gW:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
gU:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
A.nT.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Curtain",H.a([$.R,$.I,$.av],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Sword",H.a([$.E,$.em,$.aY,$.I,$.aH,$.b3,$.av,$.bk,$.aL],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.E,$.aR,$.ag,$.I,$.av],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.aJ,$.E,$.aR,$.bl,$.c2,$.I,$.av],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bacchus Wine",H.a([$.aF,$.bl,$.aq,$.I,$.ac,$.av],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nightmare Fuel",H.a([$.a9,$.I,$.b3,$.aG,$.bm,$.av],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
ga8:function(){return this.C},
ga7:function(){return this.D},
gZ:function(){return this.E},
gV:function(){return this.F},
gX:function(){return this.G},
ga1:function(){return this.I}}
A.oy.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Doll",H.a([$.ji,$.aI,$.aA,$.I],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Puppet",H.a([$.a9,$.aA,$.I,$.ac,$.b3],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mirror",H.a([$.mv,$.I],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.M,$.I,$.aM],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shades",H.a([$.ax,$.b_,$.I],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
ga8:function(){return this.C},
ga7:function(){return this.D},
gZ:function(){return this.E},
gV:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
A.pq.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Grandfather Clock",H.a([$.a9,$.aq,$.bb,$.I],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Drum",H.a([$.tJ,$.I,$.ak],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dead Doppelganger",H.a([$.aJ,$.be,$.I,$.b9,$.b3,$.aL],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Music Box",H.a([$.E,$.I,$.ak,$.aq],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.E,$.I,$.ak,$.ac,$.ax],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Metronome",H.a([$.E,$.I,$.ak],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaS:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga1:function(){return this.F},
ga8:function(){return this.G},
ga7:function(){return this.I},
gX:function(){return this.a9}}
A.o4.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("FAQ",H.a([$.ag,$.I,$.ad,$.bD],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flashlight",H.a([$.aS,$.I,$.b0,$.ag,$.bD],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Octet",H.a([$.I,$.b0,$.bD,$.ac,$.mq],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Horseshoe",H.a([$.tH,$.I,$.an],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rabbits Foot",H.a([$.tP,$.I],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("4 Leaf Clover",H.a([$.b5,$.I,$.b0,$.bD],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("8-Ball",H.a([$.b_,$.I,$.aA],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
A.lY.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("Infinity Gauntlet",H.a([$.I,$.E,$.mn],[G.a7]),"...",!1,"THANOS CAR THANOS CAR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Stone","Thanos","Mind","Space","Power","Soul","Time","Reality"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cb,$.n)
t.i(0,$.bQ,$.L)
t.i(0,$.cL,$.L)
r=$.o
q="The "+r+" is wandering their land, when an imp goes up to them. Expecting a fight, the "+r+' raises their weapon. Surprisingly, the imp starts talking, and its eyes go black, it says "You must collect the Stones, then you can prove your worth to usssss..." the imp\'s eyes go back to normal, and then it dies. The '+r+" notices it droped a small glowing crystal... MINDSTONE COLLECTED, 1/6."
p="The "+r+' is going through a dungeon. Once they arrive in the final room, a miniboss appears. It bellows "I am the keeper of the Space Stone, fight me if you dare!" It then dissapears in a cloud of smoke. The '+r+" tries to look at some of the many mirrors in the room, to try to find the monster, but to no avail. The boss then flings itself at them from a random angle, and then the "+r+" was able to kill it, and it dropped a small blue gemstone... SPACESTONE COLLECTED, 2/6. Some time later, The "+r+' is going through another dungeon, when it encounters another miniboss, similar to the previous one, it bellows "FIGHT ME, TO COLLECT THE POWER STONE!!" It takes many hours, but the '+r+" comes out on top... POWERSTONE COLLECTED, 3/6."
o="The "+r+" is used to these shenanings by now, when they see a giant crystalline mini boss, they knock it down and take the stone... SOULSTONE COLLECTED, 4/6. When the "+r+" saw another miniboss, but encased in impenetrable gems, they threw it into an over and waited to get the stone... TIMESTONE COLLECTED, 5/6. When the "+r+" encounters yet another one, they try to attack it. But it dissapears, and a similar looking boss drops on their back, it goes on like that for awhile, but the "+r+" eventually defeats it... REALITYSTONE COLLECTED, 6/6, OBJECTIVE COMPLETE."
n="The "+r+" learns it's time to visit their denizen, but when they get there they only see "+$.z+" being [REDACTED]."
m="Paradox Space has declared the "+r+" is worthy, and lets them live."
t.i(0,new R.a3("Collect The Stones",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(n,"Paradox Space decrees that the "+r+" is not worthy.",m)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G},
ga1:function(){return this.I}}
R.p7.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Meddler's Guide",H.a([$.aK,$.Q,$.M,$.bl,$.ac,$.b1],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.b_,$.Q,$.b1],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.Q
r=A.j("Cloud in a Bottle",H.a([r,r,$.bo],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.af,$.Q,$.b0,$.aI,$.M],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cb,$.l)
t.i(0,$.b4,$.l)
t.i(0,$.db,$.n)
t.i(0,$.f1,$.n)
t.i(0,$.th,$.n)
t.i(0,$.e0,$.n)
t.i(0,$.il,$.n)
t.i(0,$.tn,$.n)
r=$.o
q="The "+r+" decides to take a break after defeating "+$.z+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.u
o=[U.c]
t.i(0,new R.al("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.N+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.uz(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
r=$.u
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.o
t.i(0,new R.al("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
q="The "+r+"s are so stressed after all that shit with the "+$.z+". They are yelling and "+$.N+" at each other over the slightest of insults. The "
p=$.o
t.i(0,new R.al("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.z+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.o
p=p+r+" purifies the pools "
q=$.u
t.i(0,new R.bv("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
r="The defeat of the "+$.z+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.u
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.o
t.i(0,new R.al("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aZ+". Huh. Okay then.")],H.a([],o),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
L.p9.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Lightning",H.a([$.aR,$.aW,$.I],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice",H.a([$.bi,$.wc,$.f9],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Taserface",H.a([$.av,$.aR],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Taser",H.a([$.aR,$.I,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.ee,$.L)
t.i(0,$.bQ,$.l)
t.i(0,$.im,$.n)
t.i(0,$.cL,$.n)
r=$.o
q="The "+r+" is walking around on their land, when a "
p=$.u
q=q+p+" walks up to them, and tells them about "
o=$.z
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.N+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.a3("Rebel Against Your Land",!1,[new U.c(q),new U.c(p),new U.c(n),new U.ab(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
ga2:function(){return this.u},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
D.pb.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Robot",H.a([$.ag,$.E,$.aA,$.ad],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Circuit Board",H.a([$.ag,$.E],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Datastructures for Assholes",H.a([$.ag,$.M],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ag,$.M,$.aL,$.aK],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("3-D Printer",H.a([$.aS,$.ag,$.E],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Virus on a USB Stick",H.a([$.w8,$.E],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wrench",H.a([$.tU,$.E,$.an],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Computer",H.a([$.ag,$.E],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.iu,$.n)
q.i(0,$.eY,$.l)
q.i(0,$.f_,$.l)
q.i(0,$.ck,$.L)
p=$.o
o="The "+p+" learns from their "
n=$.u
o=o+n+"s about the great "
m=$.aZ
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.z+" destroyed it. "
o="The "+p+" searches for the "
l=$.as
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.Fq
p=[U.c]
q.i(0,new R.ae("Fix the Machine",!1,[new U.c(n),new U.c(o),new U.c(m)],H.a([],p),R.y(),!1,!1,new Y.cW("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=$.o
m="The "+l+" is approached by a "
o=$.u
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.N
q.i(0,new R.ae("Decipher the Enigma",!1,[new U.c(o+m+"ing, how could they not? "),new U.c("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.z+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.as+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fj(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.f_,$.l)
s.i(0,$.eh,$.L)
s.i(0,$.ej,$.n)
s.i(0,$.cS,$.l)
s.i(0,$.ck,$.L)
o=$.o
n="The "+o+" learns that all of the local "
l=$.u
s.i(0,new R.ae("Produce the Goods",!1,[new U.c(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.c("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.N+"ing and chaos everywhere. "),new U.c("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
l="The "+o+" finds two groups of "
n=$.u
l=l+n+"s screaming and "
k=$.N
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.as
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.ae("Stop the Dispute",!1,[new U.c(l),new U.c(k),new U.c(j)],H.a([],p),R.e5(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.L)
t.i(0,$.eY,$.l)
t.i(0,$.f_,$.l)
t.i(0,$.ck,$.L)
r=$.o
q="The "+r+" learns from a mysterious "+$.u+" in a black trenchcoat about a great "
o=$.aZ
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.z
t.i(0,new R.ae("Learn the Secret",!1,[new U.c(q+n+"? "),new U.c("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,t,null),$.aP)}}
V.pd.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Lighter",H.a([$.E,$.aG],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Siberia Poster",H.a([$.M,$.bi],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Winter Poster",H.a([$.M,$.bi,$.bZ],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Doomsday Device",H.a([$.E,$.aL,$.bZ,$.aW,$.bk],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Juggalo Poster",H.a([$.M,$.wd],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Watch",H.a([$.E,$.bb,$.aW],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Magnificent Crown",H.a([$.E,$.bb,$.aW],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bitching Clothes",H.a([$.R,$.f8,$.aW],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ceramic Pork Hollow",H.a([$.bR,$.bb],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shit Ton of Guns",H.a([$.E,$.tN,$.b2,$.aW],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sniper Rifle",H.a([$.E,$.tR,$.b2,$.aW],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("AK-47",H.a([$.E,$.tK,$.b2,$.aW],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("IED",H.a([$.ms,$.aH,$.E,$.bm,$.aW],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Idiots Guide To Being An Asshole",H.a([$.M,$.bl,$.aK],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.c2,$.E,$.aR,$.bl],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Matches",H.a([$.a9,$.aG],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.n)
q.i(0,$.dI,$.l)
q.i(0,$.e1,$.l)
q.i(0,$.f0,$.l)
q.i(0,$.lG,$.l)
q.i(0,$.dJ,$.n)
p=$.o
o=[U.c]
q.i(0,new R.ae("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cx,$.n)
s.i(0,$.dI,$.l)
s.i(0,$.cv,$.l)
s.i(0,$.dJ,$.n)
n=$.o
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.u
s.i(0,new R.ae("All About the Boonies, Baby",!1,[new U.c(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.as+" underling. Tremble at the fearsome "+$.aZ+" "+l+".   "),new U.c(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.l)
q.i(0,$.bd,$.L)
q.i(0,$.dK,$.l)
q.i(0,$.c0,$.n)
q.i(0,$.e0,$.L)
q.i(0,$.cL,$.L)
n=$.o
m="The "+n+" learns that all of the local "
l=$.u
q.i(0,new R.ae("Revive the Consorts",!1,[new U.c(m+l+"s are dead. This is....pretty cool, actually. "),new U.c("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.N+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.l)
t.i(0,$.cL,$.L)
t.i(0,$.eg,$.l)
t.i(0,$.is,$.l)
t.i(0,$.ck,$.n)
t.i(0,$.ek,$.n)
s=$.o
r="The "+s+" finds a crowd of "
n=$.N
r=r+n+"ing "
m=$.u
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aZ+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.ae("Stop a Rebellion",!1,[new U.c(r),new U.c(l),new U.c(s)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,t,null),$.aP)}}
X.H.prototype={
H:function(a){return"Theme: "+H.D(this.a)}}
U.pk.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Lockpick",H.a([$.E,$.Q,$.az,$.aY,$.ac],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sneaking Suit",H.a([$.R,$.Q,$.az],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Dagger",H.a([$.E,$.Q,$.aY,$.aH,$.tC],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.c5,$.l)
t.i(0,$.ds,$.n)
t.i(0,$.bQ,$.n)
t.i(0,$.cS,$.n)
r="The "+$.z+" cannot release the frogs since the corrupt "
q=$.u
r=r+q+" Cops have confiscated them. The "
p=$.o
o=[U.c]
t.i(0,new R.bv("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.z+"'s layer and slated to be returned to the "
r=$.u
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.N+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.al("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
p="A weeping "+r+" approaches the "
n=$.o
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.z
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aZ+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.N+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.al("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.z
n="Now that the "+r+" has been defeated, the "
p=$.u
n=n+p+"s have recovered their precious "
q=$.as
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.o
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.N
l=n+l+"worth, the disaffected Heir to the "+$.aZ+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.al("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
N.pl.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Grandfather Clock",H.a([$.a9,$.aq,$.bb,$.I],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Drum",H.a([$.tJ,$.I,$.ak],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dead Doppelganger",H.a([$.aJ,$.be,$.I,$.b9,$.b3,$.aL],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Music Box",H.a([$.E,$.I,$.ak,$.aq],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.E,$.I,$.ak,$.ac,$.ax],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Metronome",H.a([$.E,$.I,$.ak],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.vK,$.aw)
q.i(0,$.ck,$.n)
q.i(0,$.cS,$.n)
q.i(0,$.ej,$.l)
p=$.z
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.o
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.y2
l=[U.c]
q.i(0,new R.al("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.ev(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.u+"s, they set out to fix the "
m=$.as
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.z
q.i(0,new R.a3("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.ab("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.h5,$.l)
s.i(0,$.e1,$.L)
s.i(0,$.ck,$.l)
p=$.o
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.u+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.z
s.i(0,new R.a3("Synchronize the Rhythm",!1,[new U.c(o),new U.c(n),new U.ab(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.cb,$.l)
t.i(0,$.db,$.l)
r=$.z
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.as
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.o
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.u+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.a3("Walk Another Path",!1,[new U.c(q),new U.c(n),new U.c(m),new U.ab(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hF(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
k=$.z
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.as
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.o
t.i(0,new R.a3("Destroy Timelines",!1,[new U.c(p+r+" prepares for a bullshit item collection quest. "),new U.c("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.u+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.c("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.ab("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.ev(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
r="With the defeat of the "+$.z+", "
k=$.o
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.u
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aZ
t.i(0,new R.al("Shatter the Timeline",!1,[new U.c(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.ev(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.u
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.o
t.i(0,new R.a3("Move Forwards, Never Stop",!1,[new U.c(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.N+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.ab("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.z+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaS:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga1:function(){return this.F},
ga8:function(){return this.G},
ga7:function(){return this.I},
gX:function(){return this.a9}}
G.a7.prototype={
H:function(a){var t=this.b
if(t.length!==0)return C.b.gar(t)
return"NULL TRAIT"},
gej:function(){return this.a},
ge3:function(){return this.b},
gbH:function(){return this.c}}
G.aX.prototype={}
G.ar.prototype={}
G.bH.prototype={}
G.e.prototype={
ghK:function(){return this.e.length},
gbH:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.ci)(t),++q)r+=t[q].c
return r},
aM:function(a,b){return C.a.bI(b.ghK()-this.e.length)},
es:function(a){return C.b.he(this.e,a.gh1(a))},
$isbF:1,
$asbF:function(){return[G.e]},
gN:function(a){return this.d},
geO:function(){return this.e}}
G.my.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.a7]}}}
Q.pJ.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Cardboard Box",H.a([$.M,$.I,$.az],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Hole Punch",H.a([$.E,$.I,$.az],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Smoke Bombs",H.a([$.bm,$.I,$.az,$.ms],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Tribal Mask",H.a([$.b9,$.I,$.az,$.b3,$.bT],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Opera Mask",H.a([$.aS,$.I,$.az,$.aq],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Black Hole in a Bottle.",H.a([$.I,$.ac,$.mr,$.az,$.b_],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dc,$.l)
q.i(0,$.lF,$.l)
q.i(0,$.h7,$.l)
q.i(0,$.iq,$.l)
p=$.z
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.o
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.u
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.y2
l=[U.c]
q.i(0,new R.al("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.z
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.a3("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.ab(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i=this.f
i.i(0,new X.H(s,q,null),$.ay)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dc,$.n)
s.i(0,$.lF,$.n)
s.i(0,$.h7,$.n)
s.i(0,$.c5,$.l)
p=$.o
o="Even with the victory of the "+p+" over the villainous "
n=$.z
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.u+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.as
s.i(0,new R.al("Reveal the Tomes",!1,[new U.c(o+m+" will provide insight."),new U.c("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fj(),!1,!1,new Y.c1("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
s.i(0,new R.a3("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.c("The "+m+" [REDACTED]s and it actually works! Everyone "+$.N+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.ab("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.z+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.u+"s.")],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dc,$.l)
t.i(0,$.lF,$.l)
t.i(0,$.h7,$.l)
r=$.o
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.z+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.a3("Walk of Faith",!1,[new U.c(q),new U.c(p),new U.c(o),new U.c(n),new U.ab(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
E.pK.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Yardstick",H.a([$.de,$.Q,$.jh,$.ac],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURBSim Hacking Guide",H.a([$.aK,$.Q,$.hj,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Body Pillow of JR",H.a([$.R,$.Q,$.e3,$.mt,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Nanobots",H.a([$.tS,$.Q,$.mm],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cB,$.l)
t.i(0,$.dd,$.l)
t.i(0,$.ef,$.l)
t.i(0,$.db,$.l)
t.i(0,$.eZ,$.l)
t.i(0,$.ee,$.l)
t.i(0,$.h7,$.n)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.c]
t.i(0,new R.ae("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uz(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cf+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.N
t.i(0,new R.a3("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.ab(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wP(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.ae("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.a3("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
t.i(0,new R.a3("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m="A wizened "+$.u+" tells the "
r=$.o
t.i(0,new R.al("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.al("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wQ(),!1,!1,new Y.c1("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.al("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bv("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.ay)}}
M.pO.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Cauldron",H.a([$.wg,$.Q,$.af],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flying Broom",H.a([$.jf,$.de,$.Q,$.a9,$.af],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Warped Mirror",H.a([$.mv,$.Q,$.af,$.az,$.ac],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.c0,$.n)
t.i(0,$.h9,$.n)
t.i(0,$.d0,$.n)
t.i(0,$.cS,$.n)
t.i(0,$.cy,$.n)
t.i(0,$.tk,$.n)
r=$.z
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.u
q=q+p+" consorts. It's up to the "
o=$.o
n=[U.c]
t.i(0,new R.bv("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bU(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
o="Even with the defeat of the "+$.z+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.u
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aZ
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.o
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.al("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.B)
q="A Mysterious "+$.u+" approaches the "
p=$.o
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aZ
q=q+r+" was discovered amongst the "+$.z+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.al("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
p="A young "+r+" approaches the "
m=$.o
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aZ
t.i(0,new R.al("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.as+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.N+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.y(),!1,!1,new Y.ap("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
U.pP.prototype={
T:function(a5,a6){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$T=P.bA(function(a7,a8){if(a7===1)return P.bx(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.eN(a6,$.$get$xg())
if(0>=p.length){r=H.x(p,0)
t=1
break}if(J.yn(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.x(p,0)
t=1
break}throw H.m("Invalid WordList file header: '"+H.D(p[0])+"'")}o=P.C
n=H.a([],[o])
m=P.cD(o,B.jR)
q.a=null
l=P.cD(o,o)
for(k=P.a4,j=B.dy,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cH()
""+i
H.D(g)
f.toString
f=J.eN(g,$.$get$xe())
if(0>=f.length){r=H.x(f,0)
t=1
break $async$outer}g=f[0]
f=J.bg(g)
if(f.gaa(g)===!0){$.$get$cH().toString
continue}if(f.at(g,$.$get$xf())){$.$get$cH().toString
continue}if(C.c.at(g,"@")){e=C.c.au(g,1)
$.$get$cH().toString
n.push(e)}else if(C.c.at(g,"?")){f=C.c.au(g,1)
f=$.$get$hK().b7(0,f)
f=H.du(f,B.kg(),H.aU(f,"p",0),null)
d=P.df(f,!0,H.aU(f,"p",0))
if(d.length<2)$.$get$cH().bl(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cH()
H.D(c)
H.D(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$xh()
a=f.cs(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.x(f,1)
t=1
break $async$outer}a0=J.cj(f[1])
a1=C.c.au(g,a0)
if(a1.length===0)continue
f=J.aQ(a0)
if(f.a_(a0,0)){a1=C.c.eu(a1)
$.$get$cH().toString
f=P.cD(o,o)
a2=new B.jR(P.cD(o,k),f,a1,!1,null,null)
a2.dh(null,null,j)
q.a=a2
f.bZ(0,l)
m.i(0,a1,q.a)}else if(f.a_(a0,$.xi))if(C.c.at(a1,"?")){a1=C.c.au(a1,1)
f=$.$get$hK().b7(0,a1)
f=H.du(f,B.kg(),H.aU(f,"p",0),null)
d=P.df(f,!0,H.aU(f,"p",0))
f=$.$get$cH()
f.toString
if(d.length<2)f.bl(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kk(d[0],$.$get$fn(),"")
if(1>=d.length){r=H.x(d,1)
t=1
break $async$outer}b=J.kk(d[1],$.$get$fn(),"")
f=$.$get$cH()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.at(a1,"@")){e=C.c.au(a1,1)
$.$get$cH().toString
f=$.$get$hK().b7(0,a1)
f=H.du(f,B.kg(),H.aU(f,"p",0),null)
d=P.df(f,!0,H.aU(f,"p",0))
a4=d.length>1?H.wM(d[1],new U.pQ(q,d)):1
q.a.c.i(0,C.c.d0(e,$.$get$fn(),""),a4)}else{$.$get$cH().toString
f=$.$get$hK().b7(0,g)
f=H.du(f,B.kg(),H.aU(f,"p",0),null)
d=P.df(f,!0,H.aU(f,"p",0))
a4=d.length>1?H.wM(d[1],new U.pR(q,d)):1
if(0>=d.length){r=H.x(d,0)
t=1
break $async$outer}f=C.c.bs(J.kk(d[0],$.$get$fn(),""))
h=new B.dy(null)
a3=P.cD(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.vl(a4)),[H.aU(f,"cR",0)]))}else if(f.a_(a0,$.xi*2)){$.$get$cH().toString
f=$.$get$hK().b7(0,g)
f=H.du(f,B.kg(),H.aU(f,"p",0),null)
d=P.df(f,!0,H.aU(f,"p",0))
f=d.length
if(f!==2)$.$get$cH().bl(C.h,"Invalid variant for "+H.D(h.d5(0))+" in "+q.a.e)
else{if(0>=f){r=H.x(d,0)
t=1
break $async$outer}f=C.c.bs(J.kk(d[0],$.$get$fn(),""))
if(1>=d.length){r=H.x(d,1)
t=1
break $async$outer}a3=C.c.d0(U.Gv(d[1]),$.$get$fn(),"")
h.a.i(0,f,a3)}}}}}r=new B.hQ(n,m)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$T,s)},
$aseC:function(){return[B.hQ]},
$asc7:function(){return[B.hQ,P.C]}}
U.pQ.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.x(s,1)
r="Invalid include weight '"+H.D(s[1])+"' for word '"
if(0>=s.length)return H.x(s,0)
t.bl(C.m,r+H.D(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
U.pR.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.x(s,1)
r="Invalid weight '"+H.D(s[1])+"' for word '"
if(0>=s.length)return H.x(s,0)
t.bl(C.m,r+H.D(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
F.pT.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Make a World Book",H.a([$.M,$.aq,$.aK],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Quill Pen",H.a([$.b7,$.R,$.mw],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Book On Writing",H.a([$.aK,$.M,$.ad],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("FLARP Manual",H.a([$.aK,$.M,$.ad],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Script",H.a([$.aK,$.M],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Pen",H.a([$.E,$.ad,$.mw,$.aq],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Spiral Bound Notebook",H.a([$.aK,$.M,$.E],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Half Written Novel",H.a([$.aK,$.M],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dc,$.l)
q.i(0,$.cA,$.l)
q.i(0,$.bd,$.n)
q.i(0,$.b4,$.n)
q.i(0,$.h6,$.n)
p=$.o
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.u+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.ae("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.H(s,q,null),$.aP)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dJ,$.n)
s.i(0,$.cx,$.n)
s.i(0,$.cv,$.n)
s.i(0,$.bd,$.n)
p=$.u
o="An Excited "+p+" rushes up to the "
n=$.o
s.i(0,new R.ae("Read the Fan Fiction",!1,[new U.c(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.N+"ing so much? "),new U.c("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,s,null),$.aP)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cx,$.n)
t.i(0,$.dI,$.l)
t.i(0,$.cv,$.l)
t.i(0,$.dJ,$.n)
t.i(0,$.ef,$.l)
r=$.o
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.u
t.i(0,new R.ae("Be the DM",!1,[new U.c(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.y(),!1,!1,new Y.d_("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,t,null),$.aP)}}
B.pY.prototype={
b1:function(a){return"application/x-tar"},
T:function(a,b){var t=0,s=P.bq(),r,q,p
var $async$T=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:q=$.$get$xj()
p=J.vc(b)
q.toString
r=q.h6(T.tv(p,0,null,0),!1)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$T,s)},
$asdp:function(){return[T.fD]},
$asc7:function(){return[T.fD,P.bh]}}
A.fL.prototype={}
B.dq.prototype={
cJ:function(a){if(a)this.b=(this.b|C.a.aD(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.R+=H.hE(this.b)
this.b=0}},
av:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.aD(1,t)
if(typeof a!=="number")return a.aV()
this.cJ((a&s)>>>0>0)}},
fU:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.aH(1,t-s)
if(typeof a!=="number")return a.aV()
this.cJ((a&r)>>>0>0)}},
c_:function(a){var t,s
a=J.e8(a,1)
t=C.d.df(Math.log(H.kb(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cJ(!1)
this.fU(a,t+1)},
be:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.R
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.au(r)
q+=r
p=r}else p=0
r=H.cw(q)
o=new Uint8Array(r)
if(t){n=H.cO(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.x(o,m)
o[m]=l}}t=s.R
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.ak(k,m)
if(s<0||s>=r)return H.x(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.x(o,t)
o[t]=s}return o.buffer}}
B.da.prototype={
cB:function(a){var t,s,r,q
t=C.f.ax(a/8)
s=C.a.bO(a,8)
r=this.a.getUint8(t)
q=C.a.aH(1,s)
if(typeof r!=="number")return r.aV()
return(r&q)>>>0>0},
am:function(a){var t,s,r
if(a>32)throw H.m(P.dX(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cB(this.b);++this.b
if(r)t=(t|C.a.aD(1,s))>>>0}return t},
hM:function(a){var t,s,r,q
if(a>32)throw H.m(P.dX(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cB(this.b);++this.b
if(q)s=(s|C.a.aH(1,t-r))>>>0}return s},
ca:function(){var t,s,r
for(t=0;!0;){s=this.cB(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hM(t+1)-1}}
A.dZ.prototype={
H:function(a){return"rgb("+H.D(this.b)+", "+H.D(this.c)+", "+H.D(this.d)+", "+H.D(this.a)+")"},
hW:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aH()
s=this.c
if(typeof s!=="number")return s.aH()
r=this.d
if(typeof r!=="number")return r.aH()
q=this.a
if(typeof q!=="number")return H.au(q)
return(t<<24|s<<16|r<<8|q)>>>0},
a_:function(a,b){var t,s
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
gal:function(a){return this.hW(!0)},
a3:function(a,b){var t,s,r,q,p,o,n,m
t=J.aQ(b)
if(!!t.$isdZ){t=this.b
s=b.b
if(typeof t!=="number")return t.a3()
if(typeof s!=="number")return H.au(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.a3()
if(typeof q!=="number")return H.au(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.a3()
if(typeof o!=="number")return H.au(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.a3()
if(typeof m!=="number")return H.au(m)
return A.fP(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.bh()
s=this.c
if(typeof s!=="number")return s.bh()
r=this.d
if(typeof r!=="number")return r.bh()
q=this.a
if(typeof q!=="number")return q.bh()
return A.vu(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.a3()
s=this.c
if(typeof s!=="number")return s.a3()
r=this.d
if(typeof r!=="number")return r.a3()
return A.fP(t+b,s+b,r+b,this.a)}throw H.m("Cannot add ["+H.D(t.gap(b))+" "+H.D(b)+"] to a Colour. Only Colour, double and int are valid.")},
aF:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.bh()
s=this.c
if(typeof s!=="number")return s.bh()
r=this.d
if(typeof r!=="number")return r.bh()
q=this.a
if(typeof q!=="number")return q.bh()
return A.vu(t/255*b,s/255*b,r/255*b,q/255)},
B:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.m("Colour index out of range: "+H.D(b))},
i:function(a,b,c){var t,s
t=J.dB(b)
if(t.aj(b,0)||t.aP(b,3))throw H.m("Colour index out of range: "+H.D(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.a_(b,0)){this.b=C.a.aq(c,0,255)
this.e=!0
this.y=!0}else if(t.a_(b,1)){this.c=C.a.aq(c,0,255)
this.e=!0
this.y=!0}else if(t.a_(b,2)){this.d=C.a.aq(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.aq(c,0,255)
else if(t.a_(b,0)){this.b=C.a.aq(J.kj(J.vb(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.a_(b,1)){this.c=C.a.aq(J.kj(J.vb(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kc(c)
if(t.a_(b,2)){this.d=C.a.aq(J.kj(s.aF(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.aq(J.kj(s.aF(c,255)),0,255)}},
eU:function(a,b,c,d){this.b=C.d.aq(C.d.aq(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.aq(C.d.aq(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.aq(C.d.aq(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.aq(J.y2(d,0,255),0,255)}}
A.rw.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.C]}}}
A.mZ.prototype={
$1:function(a){return this.a.em(a)},
$S:function(){return{func:1,args:[,]}}}
A.mX.prototype={
$1:function(a){this.a.T(0,a).bd(this.b.ghJ())},
$S:function(){return{func:1,args:[,]}}}
A.mY.prototype={
$1:function(a){this.a.h0(0)},
$S:function(){return{func:1,args:[P.r]}}}
A.n_.prototype={
$1:function(a){return this.a.aN(0,this.b)},
$S:function(){return{func:1,args:[W.a6]}}}
F.hr.prototype={
H:function(a){return this.b}}
F.hs.prototype={
bl:function(a,b){F.Fd(a).$1("("+this.c+")["+H.D(C.b.gbk(a.b.split(".")))+"]: "+H.D(b))},
cP:function(a,b){this.bl(C.h,b)},
gN:function(a){return this.c}}
F.u6.prototype={}
O.rP.prototype={
$1:function(a){return H.D(a.bm(1))+" = "+H.D(a.bm(2))+C.c.aF("../",this.a)},
$S:function(){return{func:1,args:[P.dv]}}}
O.rQ.prototype={
$0:function(){var t=document
J.vh(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.t,null)
t=H.kf(t.querySelector("#voidButton"),"$isfN")
t.toString
W.fr(t,"click",new O.rO(),!1,W.I2)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.HP("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rO.prototype={
$1:function(a){return O.HU()},
$S:function(){return{func:1,args:[W.a6]}}}
R.ha.prototype={}
R.uo.prototype={}
R.un.prototype={}
A.nG.prototype={
B:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.ae(0,b)?t.B(0,b):$.$get$um()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.ae(0,b)?t.B(0,b):$.$get$um()}throw H.m(P.dX(b,"'name' should be a String name or int id only",null))},
gac:function(a){var t=this.a
t=t.gce(t)
return new H.jp(null,J.d8(t.a),t.b,[H.O(t,0),H.O(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.ae(0,b))this.aB(0,b)
s=this.fD()
if(typeof s!=="number")return s.aG()
if(s>=256)throw H.m(P.dX(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
aB:function(a,b){var t,s,r
t=this.a
if(!t.ae(0,b))return
s=this.c
r=s.B(0,b)
t.aB(0,b)
this.b.aB(0,r)
s.aB(0,b)
this.d.aB(0,r)},
fD:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.ae(0,s))return s;++s}}}
A.jx.prototype={
$asp:function(){return[A.dZ]},
$isp:1}
Q.jz.prototype={}
A.hG.prototype={
bG:function(a){if(a===0)return 0
return this.fE(a)},
hB:function(){return this.bG(4294967295)},
fE:function(a){var t,s
t=this.a
if(a>4294967295){s=t.c8()
this.b=C.d.bI(s*4294967295)
return C.d.ax(s*a)}else{s=t.bG(a)
this.b=s
return s}},
ci:function(a){var t=a==null
this.a=t?C.K:P.GI(a)
if(!t)this.b=J.e8(a,1)},
hH:function(a,b){var t=a.length
if(t===0)return
t=this.bG(t)
if(t<0||t>=a.length)return H.x(a,t)
return a[t]},
hG:function(a){return this.hH(a,!0)}}
Y.dM.prototype={
cH:function(a){var t,s
if(this.b!=null)throw H.m("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bj(0,$.aE,null,t)
this.c.push(new P.dU(s,t))
return s},
em:function(a){var t,s,r
if(this.b!=null)throw H.m("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.ci)(t),++r)t[r].aN(0,this.b)
C.b.sv(t,0)}}
V.lg.prototype={
$4:function(a,b,c,d){return V.zB(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.G,P.bh,P.bh,O.cU]}}}
V.lf.prototype={
$4:function(a,b,c,d){return V.zA(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.G,P.G,O.cU]}}}
V.le.prototype={
$4:function(a,b,c,d){return V.zx(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.G,P.bh,P.bh,O.cU]}}}
V.ld.prototype={
$4:function(a,b,c,d){return V.zw(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.G,P.G,O.cU]}}}
O.cU.prototype={
hN:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
i0:function(a,b,c,d){var t,s,r,q,p
t=J.bJ(d)
s=0
while(!0){r=t.geg(d)
if(typeof r!=="number")return H.au(r)
if(!(s<r))break
q=(C.a.df(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.B(d,s)
if(q>=r.length)return H.x(r,q)
r[q]=p;++s}}}
D.oI.prototype={
$1:function(a){return a.ghI()},
$S:function(){return{func:1,args:[D.cF]}}}
D.cF.prototype={
H:function(a){return this.a},
gN:function(a){return this.a},
ghI:function(){return this.d}}
D.jS.prototype={}
D.o6.prototype={}
B.dy.prototype={
ez:function(a,b){if(this.a.ae(0,"MAIN"))return this.a.B(0,"MAIN")
return},
d5:function(a){return this.ez(a,null)},
H:function(a){return"[Word: "+H.D(this.d5(0))+"]"}}
B.jR.prototype={
H:function(a){return"WordList '"+this.e+"': "+this.eR(0)},
$isr:1,
$asr:function(){return[B.dy]},
$asdT:function(){return[B.dy]},
$ashO:function(){return[B.dy]},
$ascR:function(){return[B.dy]},
$asp:function(){return[B.dy]},
$asv:function(){return[B.dy]},
gN:function(a){return this.e}}
B.hQ.prototype={
H:function(a){return"[WordListFile: "+this.b.H(0)+" ]"}}
S.fh.prototype={}
S.uQ.prototype={}
S.uR.prototype={}
S.uS.prototype={}
S.td.prototype={}
S.tg.prototype={}
S.t4.prototype={}
S.uA.prototype={}
S.uU.prototype={}
S.uV.prototype={}
S.kI.prototype={}
S.uq.prototype={}
S.ul.prototype={}
S.mQ.prototype={}
S.t8.prototype={}
S.rZ.prototype={}
S.l_.prototype={}
S.u7.prototype={}
S.l0.prototype={}
S.nI.prototype={}
S.uH.prototype={}
S.uE.prototype={}
S.uI.prototype={}
S.rY.prototype={}
S.lZ.prototype={}
S.kG.prototype={}
S.t3.prototype={}
S.t2.prototype={}
S.ur.prototype={}
S.uJ.prototype={}
S.us.prototype={}
S.tf.prototype={}
S.te.prototype={}
S.uG.prototype={}
S.uF.prototype={}
S.pj.prototype={}
S.uL.prototype={}
S.t5.prototype={}
S.t6.prototype={}
S.uT.prototype={}
S.hu.prototype={}
S.ud.prototype={}
S.ue.prototype={}
S.uf.prototype={}
S.ug.prototype={}
S.uB.prototype={}
S.uC.prototype={}
S.uD.prototype={}
S.uc.prototype={}
S.ui.prototype={}
S.uj.prototype={}
S.ts.prototype={}
S.tt.prototype={}
S.tu.prototype={}
S.uk.prototype={}
S.uh.prototype={}
S.t0.prototype={}
S.uN.prototype={}
S.uO.prototype={}
S.uM.prototype={}
Z.u1.prototype={}
Z.tY.prototype={}
Z.tZ.prototype={}
Q.cR.prototype={
k:function(a,b){return b},
H:function(a){return J.cJ(this.gc9())},
aJ:function(a,b){return Q.uX(this,b,H.aU(this,"cR",0),null)},
ai:function(a,b){return Q.uW(this,!1,!0,null,H.aU(this,"cR",0))},
aC:function(a){return this.ai(a,!0)},
$isp:1,
$asp:null}
Q.dT.prototype={
gc9:function(){return this.b},
bY:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.vl(c)),[H.aU(this,"cR",0)]))},
h:function(a,b){return this.bY(a,b,1)},
B:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return J.vf(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.x(t,b)
t[b]=new Q.h(c,s,[H.aU(this,"cR",0)])},
gv:function(a){return this.b.length},
sv:function(a,b){C.b.sv(this.b,b)
return b},
H:function(a){return P.jj(this.b,"[","]")},
aJ:function(a,b){return Q.uX(this,b,H.aU(this,"dT",0),null)},
ai:function(a,b){return Q.uW(this,!1,!0,null,H.aU(this,"dT",0))},
aC:function(a){return this.ai(a,!0)},
dh:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hO.prototype={$ascR:null,$asp:null,$asr:null,$asv:null,$isr:1,$isv:1,$isp:1}
Q.h.prototype={
H:function(a){return"("+H.D(this.a)+" @ "+H.D(this.b)+")"},
gab:function(a){return this.a},
gd3:function(a){return this.b}}
Q.eI.prototype={
gc9:function(){return this.b},
gac:function(a){var t=new Q.pM(null,[H.aU(this,"eI",0)])
t.a=J.d8(this.b)
return t},
gv:function(a){return J.cj(this.b)},
H:function(a){return J.cJ(this.b)},
aJ:function(a,b){return Q.uX(this,b,H.aU(this,"eI",0),null)},
ai:function(a,b){return Q.uW(this,!1,!0,null,H.aU(this,"eI",0))},
aC:function(a){return this.ai(a,!0)}}
Q.hN.prototype={$ascR:null,$asp:null,$isp:1}
Q.pM.prototype={
gY:function(){return J.vf(this.a.gY())},
L:function(){return this.a.L()}}
Q.jO.prototype={
$aseI:function(a,b){return[b]},
$ashN:function(a,b){return[b]},
$ascR:function(a,b){return[b]},
$asp:function(a,b){return[b]}}
Q.pN.prototype={
$1:function(a){var t=J.bJ(a)
return new Q.h(this.c.$1(t.gab(a)),t.gd3(a),[this.b])},
$S:function(){return H.eM(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jO")}}
J.k.prototype.eP=J.k.prototype.H
J.hm.prototype.eQ=J.hm.prototype.H
P.dj.prototype.eS=P.dj.prototype.bQ
P.dj.prototype.eT=P.dj.prototype.bP
P.b6.prototype.de=P.b6.prototype.an
Q.dT.prototype.eR=Q.dT.prototype.H;(function installTearOffs(){installTearOff(H.ft.prototype,"ghw",0,0,0,null,["$0"],["c6"],1)
installTearOff(H.dA.prototype,"geC",0,0,0,null,["$1"],["aK"],11)
installTearOff(H.eJ.prototype,"gh9",0,0,0,null,["$1"],["b8"],11)
installTearOff(H,"xy",1,0,0,null,["$1"],["H9"],8)
installTearOff(P,"Hc",1,0,0,null,["$1"],["Gz"],6)
installTearOff(P,"Hd",1,0,0,null,["$1"],["GA"],6)
installTearOff(P,"He",1,0,0,null,["$1"],["GB"],6)
installTearOff(P,"xK",1,0,0,null,["$0"],["H8"],1)
installTearOff(P.jW.prototype,"ge1",0,0,0,null,["$2","$1"],["cM","by"],12)
installTearOff(P.bj.prototype,"gbn",0,0,0,null,["$2","$1"],["az","fc"],12)
var t
installTearOff(t=P.dj.prototype,"gdK",0,0,0,null,["$0"],["bT"],1)
installTearOff(t,"gdL",0,0,0,null,["$0"],["bU"],1)
installTearOff(t=P.hU.prototype,"gdK",0,0,0,null,["$0"],["bT"],1)
installTearOff(t,"gdL",0,0,0,null,["$0"],["bU"],1)
installTearOff(t,"gfo",0,0,0,null,["$1"],["fp"],function(){return H.eM(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hU")})
installTearOff(t,"gft",0,0,0,null,["$2"],["fu"],14)
installTearOff(t,"gfq",0,0,0,null,["$0"],["fs"],1)
installTearOff(P.k1.prototype,"gh1",0,1,0,null,["$1"],["aw"],29)
installTearOff(P,"Hn",1,0,0,null,["$2"],["zf"],30)
installTearOff(P,"Ho",1,0,0,null,["$1"],["fA"],4)
installTearOff(t=W.i7.prototype,"gaE",0,1,0,null,["$1"],["cP"],4)
installTearOff(t,"ghr",0,0,0,null,["$1"],["ec"],4)
installTearOff(t,"ghY",0,0,0,null,["$1"],["hZ"],4)
installTearOff(W.eV.prototype,"gab",0,1,0,null,["$1"],["M"],5)
installTearOff(W.ia.prototype,"gab",0,1,0,null,["$1"],["M"],32)
installTearOff(W.ig.prototype,"gab",0,1,0,null,["$1"],["M"],5)
installTearOff(W.ih.prototype,"gab",0,1,0,null,["$1"],["M"],8)
installTearOff(W.ii.prototype,"gab",0,1,0,null,["$1"],["M"],5)
installTearOff(W.f3.prototype,"gab",0,1,0,null,["$1"],["M"],13)
installTearOff(W.ix.prototype,"gab",0,1,0,null,["$1"],["M"],9)
installTearOff(W.f5.prototype,"gab",0,1,0,null,["$1"],["M"],7)
installTearOff(W.iz.prototype,"gab",0,1,0,null,["$1"],["M"],7)
installTearOff(W.jq.prototype,"gab",0,1,0,null,["$1"],["M"],5)
installTearOff(W.jr.prototype,"gab",0,1,0,null,["$1"],["M"],10)
installTearOff(W.ce.prototype,"gab",0,1,0,null,["$1"],["M"],10)
installTearOff(W.jB.prototype,"gab",0,1,0,null,["$1"],["M"],15)
installTearOff(W.jE.prototype,"gab",0,1,0,null,["$1"],["M"],9)
installTearOff(W.jG.prototype,"gab",0,1,0,null,["$1"],["M"],16)
installTearOff(W.jH.prototype,"gab",0,1,0,null,["$1"],["M"],17)
installTearOff(W.cg.prototype,"gab",0,1,0,null,["$1"],["M"],18)
installTearOff(W.jL.prototype,"gab",0,1,0,null,["$1"],["M"],19)
installTearOff(W.jM.prototype,"gab",0,1,0,null,["$1"],["M"],20)
installTearOff(W.jN.prototype,"gab",0,1,0,null,["$1"],["M"],21)
installTearOff(W.hR.prototype,"gab",0,1,0,null,["$1"],["M"],22)
installTearOff(W.jX.prototype,"gab",0,1,0,null,["$1"],["M"],33)
installTearOff(W.k0.prototype,"gab",0,1,0,null,["$1"],["M"],24)
installTearOff(W.hX.prototype,"gab",0,1,0,null,["$1"],["M"],25)
installTearOff(W.k4.prototype,"gab",0,1,0,null,["$1"],["M"],26)
installTearOff(W.k6.prototype,"gab",0,1,0,null,["$1"],["M"],27)
installTearOff(P.jI.prototype,"gab",0,1,0,null,["$1"],["M"],28)
installTearOff(R,"ew",1,0,0,null,["$1"],["FR"],0)
installTearOff(R,"FD",1,0,0,null,["$1"],["FO"],0)
installTearOff(R,"wP",1,0,0,null,["$1"],["FE"],0)
installTearOff(R,"uz",1,0,0,null,["$1"],["FQ"],0)
installTearOff(R,"bU",1,0,0,null,["$1"],["FP"],0)
installTearOff(R,"uy",1,0,0,null,["$1"],["FN"],0)
installTearOff(R,"wR",1,0,0,null,["$1"],["FL"],0)
installTearOff(R,"hF",1,0,0,null,["$1"],["FK"],0)
installTearOff(R,"ev",1,0,0,null,["$1"],["FH"],0)
installTearOff(R,"e5",1,0,0,null,["$1"],["FJ"],0)
installTearOff(R,"fj",1,0,0,null,["$1"],["FM"],0)
installTearOff(R,"ux",1,0,0,null,["$1"],["FI"],0)
installTearOff(R,"y",1,0,0,null,["$1"],["FF"],0)
installTearOff(R,"wQ",1,0,0,null,["$1"],["FG"],0)
installTearOff(F.hs.prototype,"gaE",0,1,0,null,["$1"],["cP"],4)
installTearOff(O,"HH",1,0,0,null,["$1"],["HJ"],31)
installTearOff(Y.dM.prototype,"ghJ",0,0,0,null,["$1"],["em"],function(){return H.eM(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dM")})
installTearOff(V,"HN",1,0,0,null,["$4"],["zz"],3)
installTearOff(V,"HM",1,0,0,null,["$4"],["zy"],2)
installTearOff(B,"kg",1,0,0,null,["$1"],["H3"],23)
installTearOff(S,"wF",1,0,0,null,["$0"],["HF"],1)
installTearOff(T,"Hi",1,0,0,null,["$4"],["zp"],3)
installTearOff(T,"Hh",1,0,0,null,["$4"],["zo"],2)
installTearOff(T,"Hg",1,0,0,null,["$4"],["zn"],3)
installTearOff(T,"Hf",1,0,0,null,["$4"],["zm"],2)
installTearOff(F,"Hv",1,0,0,null,["$4"],["zv"],3)
installTearOff(F,"Hu",1,0,0,null,["$4"],["zu"],2)
installTearOff(F,"Ht",1,0,0,null,["$4"],["zt"],3)
installTearOff(F,"Hs",1,0,0,null,["$4"],["zs"],2)
installTearOff(F,"Hr",1,0,0,null,["$4"],["zr"],3)
installTearOff(F,"Hq",1,0,0,null,["$4"],["zq"],2)})();(function inheritance(){inherit(P.ao,null)
var t=P.ao
inherit(H.u3,t)
inherit(J.k,t)
inherit(J.i3,t)
inherit(P.hD,t)
inherit(P.p,t)
inherit(H.er,t)
inherit(P.jl,t)
inherit(H.iv,t)
inherit(H.pw,t)
inherit(H.eT,t)
inherit(H.qM,t)
inherit(H.ft,t)
inherit(H.qi,t)
inherit(H.eK,t)
inherit(H.qL,t)
inherit(H.q5,t)
inherit(H.fk,t)
inherit(H.pn,t)
inherit(H.dF,t)
inherit(H.dA,t)
inherit(H.eJ,t)
inherit(H.kP,t)
inherit(H.o5,t)
inherit(H.pt,t)
inherit(P.ed,t)
inherit(H.h1,t)
inherit(H.k5,t)
inherit(H.dS,t)
inherit(H.q,t)
inherit(H.mR,t)
inherit(H.mT,t)
inherit(H.hl,t)
inherit(H.k3,t)
inherit(H.jU,t)
inherit(H.jK,t)
inherit(H.r4,t)
inherit(P.cC,t)
inherit(P.eU,t)
inherit(P.jW,t)
inherit(P.k_,t)
inherit(P.bj,t)
inherit(P.jV,t)
inherit(P.di,t)
inherit(P.oK,t)
inherit(P.dj,t)
inherit(P.jY,t)
inherit(P.qd,t)
inherit(P.qP,t)
inherit(P.r2,t)
inherit(P.eP,t)
inherit(P.rh,t)
inherit(P.qC,t)
inherit(P.qE,t)
inherit(P.oq,t)
inherit(P.qJ,t)
inherit(P.dz,t)
inherit(P.fb,t)
inherit(P.b6,t)
inherit(P.r9,t)
inherit(P.n7,t)
inherit(P.qK,t)
inherit(P.fO,t)
inherit(P.fQ,t)
inherit(P.rb,t)
inherit(P.d6,t)
inherit(P.bF,t)
inherit(P.e_,t)
inherit(P.dn,t)
inherit(P.dH,t)
inherit(P.nC,t)
inherit(P.jJ,t)
inherit(P.qn,t)
inherit(P.bL,t)
inherit(P.lj,t)
inherit(P.r,t)
inherit(P.bn,t)
inherit(P.d2,t)
inherit(P.dv,t)
inherit(P.dO,t)
inherit(P.C,t)
inherit(P.c9,t)
inherit(P.eG,t)
inherit(P.k8,t)
inherit(P.px,t)
inherit(P.r0,t)
inherit(W.i7,t)
inherit(W.jw,t)
inherit(W.i9,t)
inherit(P.kS,t)
inherit(W.bs,t)
inherit(W.lQ,t)
inherit(W.r8,t)
inherit(P.r5,t)
inherit(P.pZ,t)
inherit(P.qI,t)
inherit(P.qR,t)
inherit(P.qS,t)
inherit(P.bh,t)
inherit(P.d5,t)
inherit(T.fE,t)
inherit(T.d9,t)
inherit(T.he,t)
inherit(T.nE,t)
inherit(T.pV,t)
inherit(T.pW,t)
inherit(T.pX,t)
inherit(T.pU,t)
inherit(T.ma,t)
inherit(T.iA,t)
inherit(B.hf,t)
inherit(N.ah,t)
inherit(L.fF,t)
inherit(A.jx,t)
inherit(O.c7,t)
inherit(T.hI,t)
inherit(M.fM,t)
inherit(X.h2,t)
inherit(X.i5,t)
inherit(M.h3,t)
inherit(Z.ik,t)
inherit(E.nA,t)
inherit(E.F,t)
inherit(A.a8,t)
inherit(U.c,t)
inherit(Y.dN,t)
inherit(K.cE,t)
inherit(X.H,t)
inherit(G.a7,t)
inherit(A.fL,t)
inherit(B.dq,t)
inherit(B.da,t)
inherit(A.dZ,t)
inherit(F.hr,t)
inherit(F.hs,t)
inherit(Q.jz,t)
inherit(A.hG,t)
inherit(Y.dM,t)
inherit(O.cU,t)
inherit(D.cF,t)
inherit(B.dy,t)
inherit(Q.cR,t)
inherit(B.hQ,t)
inherit(Q.h,t)
t=J.k
inherit(J.mC,t)
inherit(J.mD,t)
inherit(J.hm,t)
inherit(J.en,t)
inherit(J.fc,t)
inherit(J.eo,t)
inherit(H.fe,t)
inherit(H.et,t)
inherit(W.aV,t)
inherit(W.cK,t)
inherit(W.eS,t)
inherit(W.fR,t)
inherit(W.bK,t)
inherit(W.iB,t)
inherit(W.l2,t)
inherit(W.eW,t)
inherit(W.ia,t)
inherit(W.id,t)
inherit(W.l5,t)
inherit(W.ie,t)
inherit(W.iC,t)
inherit(W.ih,t)
inherit(W.ii,t)
inherit(W.fV,t)
inherit(W.a6,t)
inherit(W.iD,t)
inherit(W.lN,t)
inherit(W.lS,t)
inherit(W.cl,t)
inherit(W.m5,t)
inherit(W.iE,t)
inherit(W.hd,t)
inherit(W.e6,t)
inherit(W.n1,t)
inherit(W.jq,t)
inherit(W.cn,t)
inherit(W.iO,t)
inherit(W.nu,t)
inherit(W.nv,t)
inherit(W.iP,t)
inherit(W.nJ,t)
inherit(W.e4,t)
inherit(W.e7,t)
inherit(W.ce,t)
inherit(W.iQ,t)
inherit(W.oo,t)
inherit(W.cp,t)
inherit(W.iR,t)
inherit(W.fm,t)
inherit(W.cg,t)
inherit(W.oD,t)
inherit(W.oJ,t)
inherit(W.ch,t)
inherit(W.iS,t)
inherit(W.pm,t)
inherit(W.cr,t)
inherit(W.iT,t)
inherit(W.fo,t)
inherit(W.jM,t)
inherit(W.pC,t)
inherit(W.fp,t)
inherit(W.jN,t)
inherit(W.q8,t)
inherit(W.iU,t)
inherit(W.iV,t)
inherit(W.iF,t)
inherit(W.iG,t)
inherit(W.iH,t)
inherit(W.iI,t)
inherit(W.rf,t)
inherit(W.rg,t)
inherit(P.mg,t)
inherit(P.nz,t)
inherit(P.d1,t)
inherit(P.iJ,t)
inherit(P.d3,t)
inherit(P.iK,t)
inherit(P.nR,t)
inherit(P.iL,t)
inherit(P.d4,t)
inherit(P.iM,t)
inherit(P.pI,t)
inherit(P.fH,t)
inherit(P.kn,t)
inherit(P.o7,t)
inherit(P.re,t)
inherit(P.iN,t)
t=J.hm
inherit(J.nP,t)
inherit(J.eF,t)
inherit(J.ep,t)
inherit(F.u6,t)
inherit(R.ha,t)
inherit(R.uo,t)
inherit(R.un,t)
inherit(S.fh,t)
inherit(S.uQ,t)
inherit(S.uR,t)
inherit(S.uS,t)
inherit(S.td,t)
inherit(S.tg,t)
inherit(S.t4,t)
inherit(S.uU,t)
inherit(S.uV,t)
inherit(S.l_,t)
inherit(S.uH,t)
inherit(S.uI,t)
inherit(S.rY,t)
inherit(S.lZ,t)
inherit(S.kG,t)
inherit(S.t3,t)
inherit(S.t2,t)
inherit(S.tf,t)
inherit(S.pj,t)
inherit(S.t6,t)
inherit(S.hu,t)
inherit(S.ue,t)
inherit(S.ug,t)
inherit(S.uC,t)
inherit(S.uD,t)
inherit(S.ui,t)
inherit(S.uj,t)
inherit(S.tt,t)
inherit(S.tu,t)
inherit(S.uk,t)
inherit(S.uh,t)
inherit(S.t0,t)
inherit(S.uN,t)
inherit(S.uO,t)
inherit(S.uM,t)
inherit(Z.u1,t)
inherit(Z.tY,t)
inherit(Z.tZ,t)
inherit(J.u2,J.en)
t=J.fc
inherit(J.jn,t)
inherit(J.jm,t)
inherit(P.jo,P.hD)
t=P.jo
inherit(H.hL,t)
inherit(W.jZ,t)
inherit(H.kM,H.hL)
t=P.p
inherit(H.v,t)
inherit(H.ht,t)
inherit(H.hP,t)
inherit(P.hk,t)
inherit(H.r3,t)
t=H.v
inherit(H.eq,t)
inherit(H.mS,t)
inherit(P.qD,t)
inherit(P.ez,t)
t=H.eq
inherit(H.p5,t)
inherit(H.fd,t)
inherit(P.mV,t)
inherit(H.fU,H.ht)
t=P.jl
inherit(H.jp,t)
inherit(H.jP,t)
inherit(Q.pM,t)
t=H.eT
inherit(H.rS,t)
inherit(H.rT,t)
inherit(H.qH,t)
inherit(H.qj,t)
inherit(H.mk,t)
inherit(H.ml,t)
inherit(H.qO,t)
inherit(H.po,t)
inherit(H.pp,t)
inherit(H.rU,t)
inherit(H.rH,t)
inherit(H.rI,t)
inherit(H.rJ,t)
inherit(H.rK,t)
inherit(H.rL,t)
inherit(H.pa,t)
inherit(H.mG,t)
inherit(H.mF,t)
inherit(H.rD,t)
inherit(H.rE,t)
inherit(H.rF,t)
inherit(P.q2,t)
inherit(P.q1,t)
inherit(P.q3,t)
inherit(P.q4,t)
inherit(P.ri,t)
inherit(P.rj,t)
inherit(P.rt,t)
inherit(P.ru,t)
inherit(P.lX,t)
inherit(P.lW,t)
inherit(P.qo,t)
inherit(P.qw,t)
inherit(P.qs,t)
inherit(P.qt,t)
inherit(P.qu,t)
inherit(P.qq,t)
inherit(P.qv,t)
inherit(P.qp,t)
inherit(P.qz,t)
inherit(P.qA,t)
inherit(P.qy,t)
inherit(P.qx,t)
inherit(P.oN,t)
inherit(P.oL,t)
inherit(P.oM,t)
inherit(P.oO,t)
inherit(P.oT,t)
inherit(P.oR,t)
inherit(P.oS,t)
inherit(P.oU,t)
inherit(P.oX,t)
inherit(P.oY,t)
inherit(P.oV,t)
inherit(P.oW,t)
inherit(P.oZ,t)
inherit(P.p_,t)
inherit(P.oP,t)
inherit(P.oQ,t)
inherit(P.q7,t)
inherit(P.q6,t)
inherit(P.qQ,t)
inherit(P.rl,t)
inherit(P.rk,t)
inherit(P.rm,t)
inherit(P.rs,t)
inherit(P.qU,t)
inherit(P.qV,t)
inherit(P.qW,t)
inherit(P.qF,t)
inherit(P.n8,t)
inherit(P.rd,t)
inherit(P.rc,t)
inherit(P.l9,t)
inherit(P.la,t)
inherit(P.pB,t)
inherit(P.py,t)
inherit(P.pz,t)
inherit(P.pA,t)
inherit(P.rv,t)
inherit(P.rp,t)
inherit(P.ro,t)
inherit(P.rq,t)
inherit(P.rr,t)
inherit(W.qa,t)
inherit(W.m8,t)
inherit(W.m9,t)
inherit(W.qm,t)
inherit(P.r7,t)
inherit(P.q_,t)
inherit(P.rx,t)
inherit(P.ry,t)
inherit(P.kT,t)
inherit(P.rn,t)
inherit(P.ks,t)
inherit(P.kt,t)
inherit(O.kB,t)
inherit(A.mB,t)
inherit(A.mA,t)
inherit(G.my,t)
inherit(U.pQ,t)
inherit(U.pR,t)
inherit(A.rw,t)
inherit(A.mZ,t)
inherit(A.mX,t)
inherit(A.mY,t)
inherit(A.n_,t)
inherit(O.rP,t)
inherit(O.rQ,t)
inherit(O.rO,t)
inherit(V.lg,t)
inherit(V.lf,t)
inherit(V.le,t)
inherit(V.ld,t)
inherit(D.oI,t)
inherit(Q.pN,t)
t=H.q5
inherit(H.fu,t)
inherit(H.hZ,t)
inherit(H.kQ,H.kP)
t=P.ed
inherit(H.jv,t)
inherit(H.mH,t)
inherit(H.pv,t)
inherit(H.kJ,t)
inherit(H.od,t)
inherit(P.fg,t)
inherit(P.cZ,t)
inherit(P.aa,t)
inherit(P.eE,t)
inherit(P.dP,t)
inherit(P.bO,t)
inherit(P.l1,t)
t=H.pa
inherit(H.oG,t)
inherit(H.fJ,t)
t=P.hk
inherit(H.q0,t)
inherit(T.fD,t)
t=H.et
inherit(H.nm,t)
inherit(H.js,t)
t=H.js
inherit(H.hz,t)
inherit(H.hA,t)
inherit(H.hB,H.hz)
inherit(H.hx,H.hB)
inherit(H.hC,H.hA)
inherit(H.hy,H.hC)
t=H.hx
inherit(H.nn,t)
inherit(H.no,t)
t=H.hy
inherit(H.np,t)
inherit(H.nq,t)
inherit(H.nr,t)
inherit(H.ns,t)
inherit(H.nt,t)
inherit(H.jt,t)
inherit(H.ff,t)
t=P.jW
inherit(P.dU,t)
inherit(P.k7,t)
t=P.jY
inherit(P.qc,t)
inherit(P.qe,t)
inherit(P.r1,P.qP)
t=P.di
inherit(P.hT,t)
inherit(W.qk,t)
inherit(P.hU,P.dj)
inherit(P.qN,P.hT)
inherit(P.qT,P.rh)
inherit(P.k2,H.q)
inherit(P.op,P.oq)
inherit(P.qG,P.op)
inherit(P.k1,P.qG)
inherit(P.hM,P.n7)
t=P.fO
inherit(P.kx,t)
inherit(P.lc,t)
t=P.fQ
inherit(P.ky,t)
inherit(P.pF,t)
inherit(P.pE,P.lc)
t=P.dn
inherit(P.a4,t)
inherit(P.G,t)
t=P.cZ
inherit(P.ey,t)
inherit(P.mh,t)
inherit(P.qb,P.k8)
t=W.aV
inherit(W.aO,t)
inherit(W.fW,t)
inherit(W.kO,t)
inherit(W.lM,t)
inherit(W.lO,t)
inherit(W.lT,t)
inherit(W.hc,t)
inherit(W.hw,t)
inherit(W.nU,t)
inherit(W.jD,t)
inherit(W.or,t)
inherit(W.eH,t)
inherit(W.co,t)
inherit(W.fX,t)
inherit(W.cQ,t)
inherit(W.cG,t)
inherit(W.fY,t)
inherit(W.pG,t)
inherit(W.pL,t)
inherit(W.jQ,t)
inherit(W.pS,t)
inherit(W.r_,t)
inherit(P.l3,t)
inherit(P.hH,t)
inherit(P.pr,t)
inherit(P.bB,t)
inherit(P.fI,t)
t=W.aO
inherit(W.dr,t)
inherit(W.eb,t)
inherit(W.ec,t)
inherit(W.ic,t)
inherit(W.fq,t)
inherit(W.qf,t)
t=W.dr
inherit(W.aC,t)
inherit(P.ca,t)
t=W.aC
inherit(W.eO,t)
inherit(W.ko,t)
inherit(W.hv,t)
inherit(W.kz,t)
inherit(W.kD,t)
inherit(W.fN,t)
inherit(W.lb,t)
inherit(W.lL,t)
inherit(W.ix,t)
inherit(W.md,t)
inherit(W.f7,t)
inherit(W.mi,t)
inherit(W.mK,t)
inherit(W.ho,t)
inherit(W.n6,t)
inherit(W.nc,t)
inherit(W.ny,t)
inherit(W.nD,t)
inherit(W.nH,t)
inherit(W.fl,t)
inherit(W.jE,t)
inherit(W.ou,t)
inherit(W.hJ,t)
inherit(W.pc,t)
inherit(W.pe,t)
inherit(W.qB,t)
inherit(W.eR,W.hv)
inherit(W.fZ,W.fW)
inherit(W.kv,W.fZ)
t=W.bK
inherit(W.kU,t)
inherit(W.kV,t)
inherit(W.fS,t)
inherit(W.fT,t)
inherit(W.kW,t)
inherit(W.kX,t)
inherit(W.kY,t)
inherit(W.eV,W.iB)
inherit(W.q9,W.jw)
inherit(W.iW,W.iC)
inherit(W.ig,W.iW)
t=W.a6
inherit(W.lh,t)
inherit(W.oB,t)
inherit(W.oC,t)
inherit(W.cc,W.eS)
inherit(W.iX,W.iD)
inherit(W.f3,W.iX)
inherit(W.iY,W.iE)
inherit(W.f5,W.iY)
inherit(W.iz,W.f5)
inherit(W.e2,W.hc)
inherit(W.hn,W.e6)
inherit(W.nd,W.hw)
inherit(W.j7,W.iO)
inherit(W.jr,W.j7)
inherit(W.j8,W.iP)
inherit(W.ju,W.j8)
inherit(W.nO,W.e7)
inherit(W.j9,W.iQ)
inherit(W.jB,W.j9)
inherit(W.os,W.eH)
inherit(W.h_,W.fX)
inherit(W.jG,W.h_)
inherit(W.ja,W.iR)
inherit(W.jH,W.ja)
inherit(W.jb,W.iS)
inherit(W.ph,W.jb)
inherit(W.h0,W.fY)
inherit(W.pi,W.h0)
inherit(W.jc,W.iT)
inherit(W.jL,W.jc)
inherit(W.jd,W.iU)
inherit(W.hR,W.jd)
inherit(W.je,W.iV)
inherit(W.jX,W.je)
inherit(W.qg,W.ie)
inherit(W.iZ,W.iF)
inherit(W.k0,W.iZ)
inherit(W.j_,W.iG)
inherit(W.hX,W.j_)
inherit(W.j0,W.iH)
inherit(W.k4,W.j0)
inherit(W.j1,W.iI)
inherit(W.k6,W.j1)
t=P.kS
inherit(W.qh,t)
inherit(P.kr,t)
inherit(W.hS,W.qk)
inherit(W.ql,P.oK)
inherit(P.r6,P.r5)
inherit(P.jT,P.pZ)
inherit(P.bV,P.qS)
t=P.ca
inherit(P.cm,t)
inherit(P.ea,t)
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
inherit(P.lz,t)
inherit(P.lP,t)
inherit(P.n9,t)
inherit(P.na,t)
inherit(P.nM,t)
inherit(P.ol,t)
inherit(P.p8,t)
inherit(P.pH,t)
inherit(P.hV,t)
inherit(P.qX,t)
inherit(P.qY,t)
inherit(P.qZ,t)
t=P.cm
inherit(P.kl,t)
inherit(P.me,t)
inherit(P.p6,t)
inherit(P.eD,t)
inherit(P.pD,t)
inherit(P.j2,P.iJ)
inherit(P.mN,P.j2)
inherit(P.j3,P.iK)
inherit(P.nw,P.j3)
inherit(P.j4,P.iL)
inherit(P.p3,P.j4)
inherit(P.pg,P.eD)
inherit(P.j5,P.iM)
inherit(P.ps,P.j5)
t=P.bB
inherit(P.dY,t)
inherit(P.kR,t)
inherit(P.eQ,P.dY)
inherit(P.j6,P.iN)
inherit(P.jI,P.j6)
t=B.hf
inherit(S.km,t)
inherit(M.kq,t)
inherit(A.kN,t)
inherit(M.kZ,t)
inherit(V.l6,t)
inherit(U.lA,t)
inherit(N.mJ,t)
inherit(F.nj,t)
inherit(G.nS,t)
inherit(Q.oa,t)
inherit(N.ox,t)
inherit(D.pb,t)
inherit(V.pd,t)
inherit(F.pT,t)
t=N.ah
inherit(T.l4,t)
inherit(R.nY,t)
t=T.l4
inherit(K.bX,t)
inherit(S.bG,t)
inherit(T.c3,t)
inherit(M.bw,t)
inherit(A.nG,A.jx)
inherit(L.P,A.nG)
t=O.c7
inherit(O.dp,t)
inherit(O.ij,t)
inherit(O.eC,t)
t=O.dp
inherit(U.ku,t)
inherit(Y.o0,t)
inherit(V.lU,t)
inherit(Q.mf,t)
inherit(Q.nN,t)
inherit(M.oE,t)
inherit(B.pY,t)
t=U.ku
inherit(U.n3,t)
inherit(U.nB,t)
inherit(U.p0,O.ij)
t=U.p0
inherit(U.p1,t)
inherit(U.p2,t)
t=T.hI
inherit(O.kw,t)
inherit(Y.m_,t)
inherit(Y.m0,t)
inherit(B.m3,t)
inherit(X.mb,t)
inherit(Q.mc,t)
inherit(S.mL,t)
inherit(Z.n2,t)
inherit(S.n4,t)
inherit(U.n5,t)
inherit(E.ni,t)
inherit(V.nF,t)
inherit(N.nX,t)
inherit(N.o9,t)
inherit(E.of,t)
inherit(Y.oh,t)
inherit(Y.oj,t)
inherit(L.ok,t)
inherit(S.on,t)
inherit(Y.ov,t)
inherit(R.p7,t)
inherit(U.pk,t)
inherit(E.pK,t)
inherit(M.pO,t)
t=O.eC
inherit(Y.pf,t)
inherit(Y.kH,t)
inherit(Y.nx,t)
inherit(U.pP,t)
t=L.fF
inherit(L.kA,t)
inherit(T.kC,t)
inherit(T.kF,t)
inherit(S.kK,t)
inherit(U.l7,t)
inherit(Z.l8,t)
inherit(L.lB,t)
inherit(O.lR,t)
inherit(L.m1,t)
inherit(T.m2,t)
inherit(V.m4,t)
inherit(X.m6,t)
inherit(Z.mI,t)
inherit(Q.mM,t)
inherit(K.mO,t)
inherit(G.mP,t)
inherit(D.nb,t)
inherit(L.ne,t)
inherit(V.nf,t)
inherit(S.nh,t)
inherit(E.nZ,t)
inherit(L.o_,t)
inherit(L.o1,t)
inherit(L.o2,t)
inherit(L.o3,t)
inherit(Z.o8,t)
inherit(V.ob,t)
inherit(R.oc,t)
inherit(Y.og,t)
inherit(K.oi,t)
inherit(L.ot,t)
inherit(O.ow,t)
inherit(N.oz,t)
inherit(U.oF,t)
inherit(A.ng,t)
inherit(A.oA,t)
inherit(A.nT,t)
inherit(A.oy,t)
inherit(A.pq,t)
inherit(A.o4,t)
inherit(A.lY,t)
inherit(L.p9,t)
inherit(N.pl,t)
inherit(Q.pJ,t)
t=S.bG
inherit(S.i6,t)
inherit(S.m7,t)
inherit(E.iy,E.nA)
t=E.F
inherit(E.fG,t)
inherit(E.i4,t)
inherit(Q.nQ,Q.mf)
inherit(U.ab,U.c)
t=R.nY
inherit(R.ae,t)
inherit(R.a3,t)
inherit(R.al,t)
inherit(R.bv,R.al)
t=Y.dN
inherit(Y.ap,t)
inherit(Y.c1,t)
inherit(Y.nl,t)
inherit(Y.a5,t)
inherit(Y.i8,t)
inherit(Y.bC,t)
inherit(Y.cW,t)
inherit(Y.kL,t)
inherit(Y.jy,t)
inherit(Y.iw,t)
inherit(Y.jA,t)
t=Y.c1
inherit(Y.d_,t)
inherit(Y.br,t)
inherit(U.at,A.a8)
t=G.a7
inherit(G.aX,t)
inherit(G.bH,t)
inherit(G.e,t)
inherit(G.ar,G.bH)
t=D.cF
inherit(D.jS,t)
inherit(D.o6,t)
t=Q.cR
inherit(Q.hO,t)
inherit(Q.hN,t)
inherit(Q.dT,Q.hO)
inherit(B.jR,Q.dT)
t=S.fh
inherit(S.uA,t)
inherit(S.kI,t)
inherit(S.mQ,t)
inherit(S.uc,t)
inherit(S.ts,t)
t=S.kI
inherit(S.uq,t)
inherit(S.ul,t)
t=S.mQ
inherit(S.t8,t)
inherit(S.rZ,t)
t=S.l_
inherit(S.u7,t)
inherit(S.l0,t)
inherit(S.nI,S.l0)
inherit(S.uE,S.nI)
t=S.kG
inherit(S.ur,t)
inherit(S.uF,t)
t=S.lZ
inherit(S.uJ,t)
inherit(S.us,t)
inherit(S.te,t)
inherit(S.uG,t)
t=S.pj
inherit(S.uL,t)
inherit(S.t5,t)
inherit(S.uT,t)
t=S.hu
inherit(S.ud,t)
inherit(S.uf,t)
inherit(S.uB,t)
inherit(Q.eI,Q.hN)
inherit(Q.jO,Q.eI)
mixin(H.hL,H.pw)
mixin(H.hz,P.b6)
mixin(H.hB,H.iv)
mixin(H.hA,P.b6)
mixin(H.hC,H.iv)
mixin(P.hD,P.b6)
mixin(P.hM,P.r9)
mixin(W.fW,P.b6)
mixin(W.fZ,W.bs)
mixin(W.iB,W.i9)
mixin(W.jw,W.i9)
mixin(W.iC,P.b6)
mixin(W.iW,W.bs)
mixin(W.iD,P.b6)
mixin(W.iX,W.bs)
mixin(W.iE,P.b6)
mixin(W.iY,W.bs)
mixin(W.iO,P.b6)
mixin(W.j7,W.bs)
mixin(W.iP,P.b6)
mixin(W.j8,W.bs)
mixin(W.iQ,P.b6)
mixin(W.j9,W.bs)
mixin(W.fX,P.b6)
mixin(W.h_,W.bs)
mixin(W.iR,P.b6)
mixin(W.ja,W.bs)
mixin(W.iS,P.b6)
mixin(W.jb,W.bs)
mixin(W.fY,P.b6)
mixin(W.h0,W.bs)
mixin(W.iT,P.b6)
mixin(W.jc,W.bs)
mixin(W.iU,P.b6)
mixin(W.jd,W.bs)
mixin(W.iV,P.b6)
mixin(W.je,W.bs)
mixin(W.iF,P.b6)
mixin(W.iZ,W.bs)
mixin(W.iG,P.b6)
mixin(W.j_,W.bs)
mixin(W.iH,P.b6)
mixin(W.j0,W.bs)
mixin(W.iI,P.b6)
mixin(W.j1,W.bs)
mixin(P.iJ,P.b6)
mixin(P.j2,W.bs)
mixin(P.iK,P.b6)
mixin(P.j3,W.bs)
mixin(P.iL,P.b6)
mixin(P.j4,W.bs)
mixin(P.iM,P.b6)
mixin(P.j5,W.bs)
mixin(P.iN,P.b6)
mixin(P.j6,W.bs)
mixin(A.jx,P.fb)
mixin(Q.hO,P.b6)
mixin(Q.hN,P.fb)})();(function constants(){C.L=W.e2.prototype
C.M=J.k.prototype
C.b=J.en.prototype
C.f=J.jm.prototype
C.a=J.jn.prototype
C.d=J.fc.prototype
C.c=J.eo.prototype
C.T=J.ep.prototype
C.p=H.ff.prototype
C.F=J.nP.prototype
C.r=J.eF.prototype
C.H=new P.ky(!1)
C.G=new P.kx(C.H)
C.i=new W.i7()
C.I=new P.nC()
C.J=new P.qd()
C.K=new P.qI()
C.e=new P.qT()
C.t=new W.r8()
C.o=new P.dH(0)
C.N=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.u=function(hooks) { return hooks; }
C.O=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.P=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.Q=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.v=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.R=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.S=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.w=H.a(makeConstList([127,2047,65535,1114111]),[P.G])
C.x=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.j=makeConstList([0,0,32776,33792,1,10240,0,0])
C.k=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.l=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
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
C.h=new F.hr(0,"LogLevel.ERROR")
C.m=new F.hr(1,"LogLevel.WARN")
C.Z=new F.hr(3,"LogLevel.VERBOSE")
C.X=H.a(makeConstList([]),[P.C])
C.a_=new H.kQ(0,{},C.X,[P.C,P.C])
C.a0=H.c_("bh")
C.a1=H.c_("HV")
C.q=H.c_("HW")
C.a2=H.c_("HX")
C.a3=H.c_("HY")
C.a4=H.c_("I_")
C.a5=H.c_("I0")
C.a6=H.c_("I1")
C.a7=H.c_("mE")
C.a8=H.c_("d2")
C.a9=H.c_("C")
C.aa=H.c_("I5")
C.ab=H.c_("I6")
C.ac=H.c_("I7")
C.ad=H.c_("d5")
C.ae=H.c_("d6")
C.af=H.c_("a4")
C.ag=H.c_("G")
C.ah=H.c_("dn")
C.n=new P.pE(!1)})();(function staticFields(){$.wK="$cachedFunction"
$.wL="$cachedInvocation"
$.dG=0
$.fK=null
$.vp=null
$.v5=null
$.xH=null
$.xU=null
$.rz=null
$.rG=null
$.v6=null
$.fw=null
$.i_=null
$.i0=null
$.v1=!1
$.aE=C.e
$.vG=0
$.vC=null
$.vB=null
$.vA=null
$.vD=null
$.vz=null
$.z_=null
$.z3=null
$.ys=null
$.t_=null
$.yr=null
$.yz=null
$.yI=null
$.yF=null
$.z5=null
$.vm=null
$.yB=null
$.yE=null
$.yu=null
$.yW=null
$.yC=null
$.z2=null
$.yT=null
$.yA=null
$.yq=null
$.yJ=null
$.z0=null
$.yM=null
$.yZ=null
$.z4=null
$.yO=null
$.yx=null
$.yG=null
$.yt=null
$.yU=null
$.yy=null
$.yH=null
$.yK=null
$.yN=null
$.yV=null
$.yX=null
$.yS=null
$.yD=null
$.yv=null
$.yY=null
$.yw=null
$.z1=null
$.yP=null
$.yQ=null
$.yR=null
$.yL=null
$.S="accent"
$.U="aspect1"
$.T="aspect2"
$.a2="shoe1"
$.a1="shoe2"
$.W="cloak1"
$.X="cloak2"
$.V="cloak3"
$.a0="shirt1"
$.a_="shirt2"
$.Z="pants1"
$.Y="pants2"
$.aw=1300
$.l=3
$.n=2
$.L=1
$.B=0.1
$.zJ=1
$.zI=-1
$.tn=null
$.e0=null
$.vH=null
$.eh=null
$.f1=null
$.io=null
$.th=null
$.lE=null
$.tp=null
$.ip=null
$.il=null
$.vJ=null
$.lJ=null
$.h4=null
$.dK=null
$.vI=null
$.lC=null
$.lK=null
$.f_=null
$.zG=null
$.zD=null
$.zF=null
$.zH=null
$.h9=null
$.eX=null
$.cv=null
$.d0=null
$.ej=null
$.lI=null
$.c6=null
$.c5=null
$.tj=null
$.h7=null
$.eg=null
$.zE=null
$.h6=null
$.cB=null
$.e1=null
$.iu=null
$.cL=null
$.f0=null
$.c0=null
$.lG=null
$.lD=null
$.b4=null
$.cA=null
$.cb=null
$.ck=null
$.lF=null
$.bQ=null
$.dt=null
$.ds=null
$.ef=null
$.dI=null
$.dJ=null
$.ee=null
$.dd=null
$.h8=null
$.it=null
$.im=null
$.cS=null
$.cy=null
$.bd=null
$.eY=null
$.ei=null
$.lH=null
$.iq=null
$.h5=null
$.tl=null
$.cz=null
$.to=null
$.ti=null
$.vL=null
$.eZ=null
$.cx=null
$.dc=null
$.db=null
$.f2=null
$.tk=null
$.tm=null
$.vK=null
$.ir=null
$.is=null
$.ek=null
$.vM=!1
$.tr=null
$.zK=null
$.vO=null
$.vQ=null
$.zT=null
$.vP=null
$.zR=null
$.zS=null
$.tq=null
$.zO=null
$.zM=null
$.zN=null
$.zP=null
$.zQ=null
$.A2=null
$.zW=null
$.zX=null
$.zY=null
$.zZ=null
$.A_=null
$.A0=null
$.A1=null
$.A4=null
$.A5=null
$.A6=null
$.A7=null
$.A8=null
$.A9=null
$.A3=null
$.Fj="JACK"
$.Fo="PM"
$.Fk="JS"
$.Fi="HP"
$.Ft="YD"
$.Fq="SI"
$.Fr="SU"
$.Fl="ME"
$.Fp="RB"
$.Fg="GN"
$.Fm="MP"
$.Fe="AR"
$.Fn="PE"
$.Ff="DP"
$.Fs="WV"
$.Fh="HB"
$.o="PLAYER1TAG"
$.ex="PLAYER2TAG"
$.z="DENIZENTAG"
$.u="CONSORTTAG"
$.N="CONSORTSOUNDTAG"
$.aZ="MCGUFFINTAG"
$.as="TAGPHYSICALMCGUFFIN"
$.cf="TAGWEAPON"
$.G2=null
$.Gf=null
$.FX=null
$.G_=null
$.G5=null
$.Ga=null
$.G8=null
$.Gi=null
$.Gh=null
$.G9=null
$.Gk=null
$.G4=null
$.Gj=null
$.Gd=null
$.Gb=null
$.Ge=null
$.FZ=null
$.FY=null
$.G7=null
$.G6=null
$.G3=null
$.Gg=null
$.G0=null
$.G1=null
$.Gc=null
$.xM=!1
$.Gl=!1
$.wT=null
$.Gs=13
$.ay=3
$.bN=2
$.aP=1
$.mz=0
$.K=1
$.ai=3
$.J=4
$.tV=6
$.tW=7
$.am=8
$.w=9
$.t=10
$.f9=null
$.em=null
$.tG=null
$.tR=null
$.tN=null
$.vY=null
$.tC=null
$.tM=null
$.hi=null
$.w6=null
$.wo=null
$.w0=null
$.w7=null
$.tD=null
$.tL=null
$.wr=null
$.wt=null
$.tz=null
$.jg=null
$.jf=null
$.aK=null
$.wi=null
$.tx=null
$.wf=null
$.fa=null
$.w_=null
$.wu=null
$.wq=null
$.wn=null
$.tK=null
$.ms=null
$.el=null
$.ws=null
$.mo=null
$.tE=null
$.e3=null
$.wl=null
$.de=null
$.hh=null
$.tU=null
$.wm=null
$.tT=null
$.tO=null
$.tQ=null
$.mw=null
$.hg=null
$.Ay=null
$.w9=null
$.we=null
$.wk=null
$.wj=null
$.E=null
$.w4=null
$.mp=null
$.bR=null
$.b9=null
$.bS=null
$.a9=null
$.aS=null
$.c2=null
$.M=null
$.R=null
$.aD=null
$.b_=null
$.bY=null
$.be=null
$.bk=null
$.cd=null
$.b5=null
$.bu=null
$.bT=null
$.ac=null
$.ET=null
$.aH=null
$.b3=null
$.aY=null
$.an=null
$.c8=null
$.b2=null
$.aG=null
$.bD=null
$.b0=null
$.az=null
$.bo=null
$.bZ=null
$.aL=null
$.bm=null
$.bi=null
$.ag=null
$.bM=null
$.ak=null
$.bb=null
$.bl=null
$.b1=null
$.bf=null
$.aI=null
$.b7=null
$.aJ=null
$.ad=null
$.aA=null
$.aM=null
$.b8=null
$.aF=null
$.ax=null
$.af=null
$.I=null
$.Q=null
$.aq=null
$.av=null
$.aW=null
$.aR=null
$.BQ=null
$.Ev=null
$.F3=null
$.Bm=null
$.Es=null
$.BR=null
$.vX=null
$.EH=null
$.CQ=null
$.BM=null
$.Au=null
$.Dq=null
$.jh=null
$.w1=null
$.DQ=null
$.Bj=null
$.Cz=null
$.Bh=null
$.tA=null
$.B2=null
$.C2=null
$.Bq=null
$.CJ=null
$.EP=null
$.BS=null
$.mq=null
$.CK=null
$.Bo=null
$.B8=null
$.tP=null
$.An=null
$.tw=null
$.Cs=null
$.tI=null
$.D4=null
$.CZ=null
$.Ar=null
$.Bb=null
$.E_=null
$.At=null
$.Er=null
$.Cy=null
$.Bx=null
$.DK=null
$.El=null
$.mr=null
$.CU=null
$.DH=null
$.Bp=null
$.Ag=null
$.ES=null
$.CC=null
$.B7=null
$.EG=null
$.D7=null
$.Be=null
$.Eq=null
$.BH=null
$.E7=null
$.E8=null
$.Ap=null
$.D0=null
$.Br=null
$.BB=null
$.F7=null
$.hj=null
$.DY=null
$.Eo=null
$.mu=null
$.AX=null
$.Dh=null
$.Dl=null
$.Am=null
$.BG=null
$.Ep=null
$.D6=null
$.EJ=null
$.DM=null
$.Dm=null
$.wd=null
$.Eb=null
$.EY=null
$.Eu=null
$.Cf=null
$.Dy=null
$.Cg=null
$.E0=null
$.EW=null
$.CI=null
$.BD=null
$.C_=null
$.AO=null
$.DI=null
$.BY=null
$.C4=null
$.Bt=null
$.Ea=null
$.f8=null
$.Db=null
$.wb=null
$.Ch=null
$.wc=null
$.F0=null
$.AT=null
$.DW=null
$.DX=null
$.DV=null
$.DU=null
$.Eh=null
$.C5=null
$.D1=null
$.Ek=null
$.CT=null
$.Dc=null
$.w3=null
$.EV=null
$.D_=null
$.BJ=null
$.BK=null
$.Dk=null
$.F6=null
$.Cw=null
$.EU=null
$.tJ=null
$.E6=null
$.CG=null
$.ji=null
$.Cq=null
$.DA=null
$.AS=null
$.BN=null
$.E2=null
$.D2=null
$.EO=null
$.wg=null
$.Da=null
$.AZ=null
$.Bk=null
$.Dw=null
$.EB=null
$.E1=null
$.mm=null
$.tS=null
$.Ed=null
$.EX=null
$.Ce=null
$.AC=null
$.AL=null
$.Ez=null
$.De=null
$.CR=null
$.Df=null
$.Ew=null
$.Cr=null
$.Aq=null
$.C3=null
$.CP=null
$.Ef=null
$.BX=null
$.AR=null
$.DS=null
$.DT=null
$.EM=null
$.E4=null
$.mv=null
$.w2=null
$.Bf=null
$.w5=null
$.Cl=null
$.mt=null
$.DC=null
$.CY=null
$.DO=null
$.tF=null
$.mx=null
$.tH=null
$.Bz=null
$.C1=null
$.wh=null
$.w8=null
$.Ba=null
$.ED=null
$.B3=null
$.Do=null
$.Ci=null
$.Ej=null
$.CS=null
$.Az=null
$.Cj=null
$.Bw=null
$.Ds=null
$.CB=null
$.CX=null
$.CH=null
$.CL=null
$.DR=null
$.DN=null
$.Aj=null
$.EA=null
$.DF=null
$.Bn=null
$.Bs=null
$.C0=null
$.Ex=null
$.BU=null
$.CD=null
$.AG=null
$.BO=null
$.Bv=null
$.Dg=null
$.BE=null
$.DZ=null
$.CF=null
$.vZ=null
$.DB=null
$.Ck=null
$.BV=null
$.Ah=null
$.Ao=null
$.Dd=null
$.Dn=null
$.CA=null
$.Cc=null
$.ER=null
$.AJ=null
$.BW=null
$.CE=null
$.Bl=null
$.wp=null
$.B9=null
$.E3=null
$.AH=null
$.EC=null
$.CN=null
$.AB=null
$.DL=null
$.Dx=null
$.Bg=null
$.C6=null
$.AY=null
$.Ey=null
$.Co=null
$.EN=null
$.B_=null
$.C7=null
$.B0=null
$.Bi=null
$.DE=null
$.Bc=null
$.Cp=null
$.D3=null
$.AU=null
$.Ei=null
$.F2=null
$.E9=null
$.CV=null
$.Eg=null
$.CW=null
$.Aw=null
$.Ai=null
$.CO=null
$.AE=null
$.B1=null
$.Ax=null
$.AA=null
$.D9=null
$.Dt=null
$.EF=null
$.Cm=null
$.F1=null
$.DJ=null
$.DG=null
$.Ct=null
$.Cn=null
$.B5=null
$.Ca=null
$.CM=null
$.Di=null
$.Ec=null
$.Al=null
$.EZ=null
$.BC=null
$.Em=null
$.Bu=null
$.Av=null
$.AV=null
$.AN=null
$.F5=null
$.AW=null
$.BF=null
$.B4=null
$.EL=null
$.Ee=null
$.EE=null
$.Ak=null
$.DP=null
$.Cu=null
$.Cx=null
$.EQ=null
$.En=null
$.wa=null
$.BL=null
$.Dv=null
$.F_=null
$.BP=null
$.Cv=null
$.tB=null
$.Cd=null
$.Cb=null
$.E5=null
$.Du=null
$.C8=null
$.AM=null
$.Et=null
$.Dj=null
$.EI=null
$.F4=null
$.mn=null
$.ty=null
$.AI=null
$.BI=null
$.DD=null
$.Bd=null
$.Dz=null
$.By=null
$.As=null
$.AK=null
$.D8=null
$.BA=null
$.Dr=null
$.AQ=null
$.BT=null
$.EK=null
$.AD=null
$.BZ=null
$.Dp=null
$.AP=null
$.C9=null
$.D5=null
$.AF=null
$.B6=null
$.xi=4
$.f4="OWNER"
$.wA=!1
$.ub=null
$.xW=""
$.oH=null
$.Gp=null
$.dx=null
$.dQ=null
$.Go=null
$.cq=null
$.cX=null
$.bI=null
$.dw=null
$.eA=null
$.eB=null
$.dh=null
$.bW=null
$.wV=!1})();(function lazyInitializers(){lazy($,"vx","$get$vx",function(){return H.xP("_$dart_dartClosure")})
lazy($,"u4","$get$u4",function(){return H.xP("_$dart_js")})
lazy($,"vV","$get$vV",function(){return H.Ae()})
lazy($,"vW","$get$vW",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vG
$.vG=t+1
t="expando$key$"+t}return new P.lj(null,t,[P.G])})
lazy($,"wZ","$get$wZ",function(){return H.dR(H.pu({
toString:function(){return"$receiver$"}}))})
lazy($,"x_","$get$x_",function(){return H.dR(H.pu({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"x0","$get$x0",function(){return H.dR(H.pu(null))})
lazy($,"x1","$get$x1",function(){return H.dR(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"x5","$get$x5",function(){return H.dR(H.pu(void 0))})
lazy($,"x6","$get$x6",function(){return H.dR(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"x3","$get$x3",function(){return H.dR(H.x4(null))})
lazy($,"x2","$get$x2",function(){return H.dR(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"x8","$get$x8",function(){return H.dR(H.x4(void 0))})
lazy($,"x7","$get$x7",function(){return H.dR(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uY","$get$uY",function(){return P.Gy()})
lazy($,"hb","$get$hb",function(){return P.GE(null,P.d2)})
lazy($,"i1","$get$i1",function(){return[]})
lazy($,"xk","$get$xk",function(){return H.Fu([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xF","$get$xF",function(){return P.H2()})
lazy($,"vw","$get$vw",function(){return P.dL("^\\S+$",!0,!1)})
lazy($,"kp","$get$kp",function(){return P.cD(P.G,L.fF)})
lazy($,"vr","$get$vr",function(){return P.dL("[\\/]",!0,!1)})
lazy($,"bP","$get$bP",function(){return H.a([],[S.bG])})
lazy($,"lV","$get$lV",function(){return P.cD(P.C,Z.ik)})
lazy($,"mj","$get$mj",function(){return P.cD(P.G,B.hf)})
lazy($,"wv","$get$wv",function(){return H.a([],[A.a8])})
lazy($,"wE","$get$wE",function(){return H.a([],[P.C])})
lazy($,"oe","$get$oe",function(){return P.cD(P.G,T.hI)})
lazy($,"xR","$get$xR",function(){return A.FS(null)})
lazy($,"aB","$get$aB",function(){return H.a([],[U.at])})
lazy($,"wU","$get$wU",function(){return P.wy([0,new K.cE("Pixels -> Bytes",T.Hi(),T.Hh()),1,new K.cE("Pixels -> Packed bits",T.Hg(),T.Hf()),2,new K.cE("RLE 1 byte",V.tc(1),V.tb(1)),3,new K.cE("RLE 2 bytes",V.tc(2),V.tb(2)),4,new K.cE("RLE 3 bytes",V.tc(3),V.tb(3)),5,new K.cE("RLE packed 1 byte",V.ta(1),V.t9(1)),6,new K.cE("RLE packed 2 bytes",V.ta(2),V.t9(2)),7,new K.cE("RLE packed 3 bytes",V.ta(3),V.t9(3)),8,new K.cE("RLE dynamic",V.HN(),V.HM()),9,new K.cE("Exponential-Golomb pixels",F.Hv(),F.Hu()),10,new K.cE("Exponential-Golomb run RLE",F.Ht(),F.Hs()),11,new K.cE("Exponential-Golomb run/data RLE",F.Hr(),F.Hq())],P.G,K.cE)})
lazy($,"d","$get$d",function(){return P.aj(null,null,null,G.a7)})
lazy($,"xg","$get$xg",function(){return P.dL("[\n\r]+",!0,!1)})
lazy($,"xh","$get$xh",function(){return P.dL("( *)(.*)",!0,!1)})
lazy($,"xf","$get$xf",function(){return P.dL("^s*//",!0,!1)})
lazy($,"xe","$get$xe",function(){return P.dL("//",!0,!1)})
lazy($,"cH","$get$cH",function(){return new F.hs(!1,!1,"WordListFileFormat")})
lazy($,"xj","$get$xj",function(){return new T.pU(null)})
lazy($,"vn","$get$vn",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cT","$get$cT",function(){return P.cD(P.C,Y.dM)})
lazy($,"wB","$get$wB",function(){return P.dL("[\\/]",!0,!1)})
lazy($,"ua","$get$ua",function(){return P.cD(P.C,W.fl)})
lazy($,"um","$get$um",function(){return A.fP(255,0,255,255)})
lazy($,"nL","$get$nL",function(){return new F.hs(!1,!1,"Path Utils")})
lazy($,"nK","$get$nK",function(){return P.cD(P.eG,P.G)})
lazy($,"cP","$get$cP",function(){return H.a([],[D.cF])})
lazy($,"hK","$get$hK",function(){return P.dL("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fn","$get$fn",function(){return P.dL("\\\\(?!\\\\)",!0,!1)})
lazy($,"vy","$get$vy",function(){var t={color:16711935}
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
mangledGlobalNames:{G:"int",a4:"double",dn:"num",C:"String",d6:"bool",d2:"Null",r:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.d6,args:[[P.r,E.iy]]},{func:1,v:true},{func:1,ret:P.d5,args:[P.bh,P.G,P.G,O.cU]},{func:1,ret:P.bh,args:[P.G,P.bh,P.bh,O.cU]},{func:1,v:true,args:[P.ao]},{func:1,ret:P.C,args:[P.G]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.aO,args:[P.G]},{func:1,ret:P.C,args:[P.C]},{func:1,ret:W.dr,args:[P.G]},{func:1,ret:W.cn,args:[P.G]},{func:1,args:[,]},{func:1,v:true,args:[P.ao],opt:[P.dO]},{func:1,ret:W.cc,args:[P.G]},{func:1,v:true,args:[,P.dO]},{func:1,ret:W.ce,args:[P.G]},{func:1,ret:W.co,args:[P.G]},{func:1,ret:W.cp,args:[P.G]},{func:1,ret:W.fm,args:[P.G]},{func:1,ret:W.cr,args:[P.G]},{func:1,ret:W.fo,args:[P.G]},{func:1,ret:W.fp,args:[P.G]},{func:1,ret:P.bV,args:[P.G]},{func:1,ret:P.C,args:[P.dv]},{func:1,ret:W.cl,args:[P.G]},{func:1,ret:W.fq,args:[P.G]},{func:1,ret:W.cg,args:[P.G]},{func:1,ret:W.ch,args:[P.G]},{func:1,ret:P.bn,args:[P.G]},{func:1,ret:P.d6,args:[P.ao]},{func:1,ret:P.G,args:[P.bF,P.bF]},{func:1,v:true,args:[P.C]},{func:1,ret:W.eW,args:[P.G]},{func:1,ret:W.bK,args:[P.G]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.k,AnimationEffectTiming:J.k,AnimationTimeline:J.k,AppBannerPromptResult:J.k,BarProp:J.k,Body:J.k,CacheStorage:J.k,CanvasGradient:J.k,CanvasPattern:J.k,CanvasRenderingContext2D:J.k,CHROMIUMValuebuffer:J.k,CircularGeofencingRegion:J.k,Client:J.k,Clients:J.k,CompositorProxy:J.k,ConsoleBase:J.k,Coordinates:J.k,CredentialsContainer:J.k,Crypto:J.k,CryptoKey:J.k,CSS:J.k,DeprecatedStorageInfo:J.k,DeprecatedStorageQuota:J.k,DeviceAcceleration:J.k,DeviceRotationRate:J.k,DirectoryReader:J.k,DOMImplementation:J.k,Iterator:J.k,DOMMatrix:J.k,DOMMatrixReadOnly:J.k,DOMParser:J.k,DOMPoint:J.k,DOMPointReadOnly:J.k,EffectModel:J.k,Stream:J.k,FormData:J.k,GamepadButton:J.k,Geofencing:J.k,GeofencingRegion:J.k,Geolocation:J.k,Geoposition:J.k,Headers:J.k,HMDVRDevice:J.k,IdleDeadline:J.k,ImageBitmap:J.k,ImageBitmapRenderingContext:J.k,InjectedScriptHost:J.k,InputDeviceCapabilities:J.k,IntersectionObserver:J.k,IntersectionObserverEntry:J.k,KeyframeEffect:J.k,MediaDeviceInfo:J.k,MediaDevices:J.k,MediaError:J.k,MediaKeyStatusMap:J.k,MediaKeySystemAccess:J.k,MediaKeys:J.k,MediaMetadata:J.k,MediaSession:J.k,MemoryInfo:J.k,MessageChannel:J.k,Metadata:J.k,MIDIInputMap:J.k,MIDIOutputMap:J.k,MutationObserver:J.k,WebKitMutationObserver:J.k,MutationRecord:J.k,NavigatorStorageUtils:J.k,NodeFilter:J.k,NodeIterator:J.k,NonDocumentTypeChildNode:J.k,NonElementParentNode:J.k,OffscreenCanvas:J.k,PerformanceNavigation:J.k,PerformanceObserver:J.k,PerformanceObserverEntryList:J.k,PerformanceTiming:J.k,Permissions:J.k,PositionError:J.k,PositionSensorVRDevice:J.k,Presentation:J.k,PushManager:J.k,PushMessageData:J.k,PushSubscription:J.k,Range:J.k,ReadableByteStream:J.k,ReadableByteStreamReader:J.k,ReadableStreamReader:J.k,RTCCertificate:J.k,RTCIceCandidate:J.k,mozRTCIceCandidate:J.k,RTCSessionDescription:J.k,mozRTCSessionDescription:J.k,RTCStatsReport:J.k,RTCStatsResponse:J.k,Screen:J.k,ScrollState:J.k,Selection:J.k,SharedArrayBuffer:J.k,SourceInfo:J.k,StorageInfo:J.k,StorageManager:J.k,StorageQuota:J.k,StyleMedia:J.k,StylePropertyMap:J.k,SyncManager:J.k,TextMetrics:J.k,TreeWalker:J.k,UnderlyingSourceBase:J.k,URLSearchParams:J.k,VRDevice:J.k,VREyeParameters:J.k,VRFieldOfView:J.k,VRPositionState:J.k,ValidityState:J.k,VideoPlaybackQuality:J.k,VideoTrack:J.k,WindowClient:J.k,WorkerConsole:J.k,XPathEvaluator:J.k,XPathExpression:J.k,XPathNSResolver:J.k,XPathResult:J.k,XMLSerializer:J.k,XSLTProcessor:J.k,Bluetooth:J.k,BluetoothAdvertisingData:J.k,BluetoothCharacteristicProperties:J.k,BluetoothRemoteGATTServer:J.k,BluetoothRemoteGATTService:J.k,BluetoothUUID:J.k,Cache:J.k,DOMFileSystemSync:J.k,DirectoryEntrySync:J.k,DirectoryReaderSync:J.k,EntrySync:J.k,FileEntrySync:J.k,FileReaderSync:J.k,FileWriterSync:J.k,HTMLAllCollection:J.k,NFC:J.k,PagePopupController:J.k,Request:J.k,Response:J.k,SubtleCrypto:J.k,USBAlternateInterface:J.k,USBConfiguration:J.k,USBDevice:J.k,USBEndpoint:J.k,USBInTransferResult:J.k,USBInterface:J.k,USBIsochronousInTransferPacket:J.k,USBIsochronousInTransferResult:J.k,USBIsochronousOutTransferPacket:J.k,USBIsochronousOutTransferResult:J.k,USBOutTransferResult:J.k,WebKitCSSMatrix:J.k,Worklet:J.k,WorkletGlobalScope:J.k,IDBCursor:J.k,IDBCursorWithValue:J.k,IDBFactory:J.k,IDBKeyRange:J.k,SVGAngle:J.k,SVGAnimatedAngle:J.k,SVGAnimatedBoolean:J.k,SVGAnimatedEnumeration:J.k,SVGAnimatedInteger:J.k,SVGAnimatedLength:J.k,SVGAnimatedLengthList:J.k,SVGAnimatedNumber:J.k,SVGAnimatedNumberList:J.k,SVGAnimatedPreserveAspectRatio:J.k,SVGAnimatedRect:J.k,SVGAnimatedString:J.k,SVGAnimatedTransformList:J.k,SVGMatrix:J.k,SVGPoint:J.k,SVGPreserveAspectRatio:J.k,SVGRect:J.k,SVGUnitTypes:J.k,AudioListener:J.k,AudioParam:J.k,PeriodicWave:J.k,ANGLEInstancedArrays:J.k,ANGLE_instanced_arrays:J.k,WebGLBuffer:J.k,CHROMIUMSubscribeUniform:J.k,WebGLCompressedTextureASTC:J.k,WebGLCompressedTextureATC:J.k,WEBGL_compressed_texture_atc:J.k,WebGLCompressedTextureETC1:J.k,WEBGL_compressed_texture_etc1:J.k,WebGLCompressedTexturePVRTC:J.k,WEBGL_compressed_texture_pvrtc:J.k,WebGLCompressedTextureS3TC:J.k,WEBGL_compressed_texture_s3tc:J.k,WebGLDebugRendererInfo:J.k,WEBGL_debug_renderer_info:J.k,WebGLDebugShaders:J.k,WEBGL_debug_shaders:J.k,WebGLDepthTexture:J.k,WEBGL_depth_texture:J.k,WebGLDrawBuffers:J.k,WEBGL_draw_buffers:J.k,EXTsRGB:J.k,EXT_sRGB:J.k,EXTBlendMinMax:J.k,EXT_blend_minmax:J.k,EXTColorBufferFloat:J.k,EXTDisjointTimerQuery:J.k,EXTFragDepth:J.k,EXT_frag_depth:J.k,EXTShaderTextureLOD:J.k,EXT_shader_texture_lod:J.k,EXTTextureFilterAnisotropic:J.k,EXT_texture_filter_anisotropic:J.k,WebGLFramebuffer:J.k,WebGLLoseContext:J.k,WebGLExtensionLoseContext:J.k,WEBGL_lose_context:J.k,OESElementIndexUint:J.k,OES_element_index_uint:J.k,OESStandardDerivatives:J.k,OES_standard_derivatives:J.k,OESTextureFloat:J.k,OES_texture_float:J.k,OESTextureFloatLinear:J.k,OES_texture_float_linear:J.k,OESTextureHalfFloat:J.k,OES_texture_half_float:J.k,OESTextureHalfFloatLinear:J.k,OES_texture_half_float_linear:J.k,OESVertexArrayObject:J.k,OES_vertex_array_object:J.k,WebGLProgram:J.k,WebGLQuery:J.k,WebGLRenderbuffer:J.k,WebGLRenderingContext:J.k,WebGLSampler:J.k,WebGLShader:J.k,WebGLShaderPrecisionFormat:J.k,WebGLSync:J.k,WebGLTexture:J.k,WebGLTimerQueryEXT:J.k,WebGLTransformFeedback:J.k,WebGLUniformLocation:J.k,WebGLVertexArrayObject:J.k,WebGLVertexArrayObjectOES:J.k,Database:J.k,SQLError:J.k,SQLResultSet:J.k,SQLTransaction:J.k,ArrayBuffer:H.fe,ArrayBufferView:H.et,DataView:H.nm,Float32Array:H.nn,Float64Array:H.no,Int16Array:H.np,Int32Array:H.nq,Int8Array:H.nr,Uint16Array:H.ns,Uint32Array:H.nt,Uint8ClampedArray:H.jt,CanvasPixelArray:H.jt,Uint8Array:H.ff,HTMLBRElement:W.aC,HTMLCanvasElement:W.aC,HTMLContentElement:W.aC,HTMLDListElement:W.aC,HTMLDataListElement:W.aC,HTMLDetailsElement:W.aC,HTMLDialogElement:W.aC,HTMLDivElement:W.aC,HTMLHRElement:W.aC,HTMLHeadElement:W.aC,HTMLHeadingElement:W.aC,HTMLHtmlElement:W.aC,HTMLLIElement:W.aC,HTMLLabelElement:W.aC,HTMLLegendElement:W.aC,HTMLMenuElement:W.aC,HTMLMenuItemElement:W.aC,HTMLMeterElement:W.aC,HTMLModElement:W.aC,HTMLOListElement:W.aC,HTMLOptGroupElement:W.aC,HTMLOptionElement:W.aC,HTMLParagraphElement:W.aC,HTMLPictureElement:W.aC,HTMLPreElement:W.aC,HTMLProgressElement:W.aC,HTMLQuoteElement:W.aC,HTMLShadowElement:W.aC,HTMLSourceElement:W.aC,HTMLStyleElement:W.aC,HTMLTableCaptionElement:W.aC,HTMLTableCellElement:W.aC,HTMLTableDataCellElement:W.aC,HTMLTableHeaderCellElement:W.aC,HTMLTableColElement:W.aC,HTMLTableElement:W.aC,HTMLTableRowElement:W.aC,HTMLTableSectionElement:W.aC,HTMLTitleElement:W.aC,HTMLTrackElement:W.aC,HTMLUListElement:W.aC,HTMLUnknownElement:W.aC,HTMLDirectoryElement:W.aC,HTMLFontElement:W.aC,HTMLFrameElement:W.aC,HTMLMarqueeElement:W.aC,HTMLElement:W.aC,HTMLAnchorElement:W.eO,HTMLAreaElement:W.ko,HTMLAudioElement:W.eR,AudioTrack:W.cK,AudioTrackList:W.kv,HTMLBaseElement:W.kz,Blob:W.eS,HTMLBodyElement:W.kD,HTMLButtonElement:W.fN,CDATASection:W.eb,CharacterData:W.eb,Comment:W.eb,ProcessingInstruction:W.eb,Text:W.eb,CompositorWorker:W.kO,Credential:W.fR,FederatedCredential:W.fR,PasswordCredential:W.fR,CSSFontFaceRule:W.kU,CSSImportRule:W.kV,CSSKeyframeRule:W.fS,MozCSSKeyframeRule:W.fS,WebKitCSSKeyframeRule:W.fS,CSSKeyframesRule:W.fT,MozCSSKeyframesRule:W.fT,WebKitCSSKeyframesRule:W.fT,CSSPageRule:W.kW,CSSCharsetRule:W.bK,CSSGroupingRule:W.bK,CSSMediaRule:W.bK,CSSNamespaceRule:W.bK,CSSSupportsRule:W.bK,CSSRule:W.bK,CSSStyleDeclaration:W.eV,MSStyleCSSProperties:W.eV,CSS2Properties:W.eV,CSSStyleRule:W.kX,CSSViewportRule:W.kY,DataTransfer:W.l2,DataTransferItem:W.eW,DataTransferItemList:W.ia,Document:W.ec,HTMLDocument:W.ec,XMLDocument:W.ec,DocumentFragment:W.ic,ShadowRoot:W.ic,DOMError:W.id,FileError:W.id,DOMException:W.l5,DOMRectReadOnly:W.ie,DOMStringList:W.ig,DOMStringMap:W.ih,DOMTokenList:W.ii,Element:W.dr,HTMLEmbedElement:W.lb,DirectoryEntry:W.fV,Entry:W.fV,FileEntry:W.fV,ErrorEvent:W.lh,AnimationEvent:W.a6,AnimationPlayerEvent:W.a6,ApplicationCacheErrorEvent:W.a6,AutocompleteErrorEvent:W.a6,BeforeInstallPromptEvent:W.a6,BeforeUnloadEvent:W.a6,BlobEvent:W.a6,ClipboardEvent:W.a6,CloseEvent:W.a6,CompositionEvent:W.a6,CustomEvent:W.a6,DeviceLightEvent:W.a6,DeviceMotionEvent:W.a6,DeviceOrientationEvent:W.a6,ExtendableEvent:W.a6,ExtendableMessageEvent:W.a6,FetchEvent:W.a6,FocusEvent:W.a6,FontFaceSetLoadEvent:W.a6,GamepadEvent:W.a6,GeofencingEvent:W.a6,HashChangeEvent:W.a6,InstallEvent:W.a6,KeyboardEvent:W.a6,MediaEncryptedEvent:W.a6,MediaKeyMessageEvent:W.a6,MediaQueryListEvent:W.a6,MediaStreamEvent:W.a6,MediaStreamTrackEvent:W.a6,MessageEvent:W.a6,MIDIConnectionEvent:W.a6,MIDIMessageEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,NotificationEvent:W.a6,PageTransitionEvent:W.a6,PointerEvent:W.a6,PopStateEvent:W.a6,PresentationConnectionAvailableEvent:W.a6,PresentationConnectionCloseEvent:W.a6,ProgressEvent:W.a6,PromiseRejectionEvent:W.a6,PushEvent:W.a6,RelatedEvent:W.a6,RTCDataChannelEvent:W.a6,RTCDTMFToneChangeEvent:W.a6,RTCIceCandidateEvent:W.a6,RTCPeerConnectionIceEvent:W.a6,SecurityPolicyViolationEvent:W.a6,ServicePortConnectEvent:W.a6,ServiceWorkerMessageEvent:W.a6,SpeechRecognitionEvent:W.a6,StorageEvent:W.a6,SyncEvent:W.a6,TextEvent:W.a6,TouchEvent:W.a6,TrackEvent:W.a6,TransitionEvent:W.a6,WebKitTransitionEvent:W.a6,UIEvent:W.a6,WheelEvent:W.a6,ResourceProgressEvent:W.a6,USBConnectionEvent:W.a6,IDBVersionChangeEvent:W.a6,SVGZoomEvent:W.a6,AudioProcessingEvent:W.a6,OfflineAudioCompletionEvent:W.a6,WebGLContextEvent:W.a6,Event:W.a6,InputEvent:W.a6,Animation:W.aV,ApplicationCache:W.aV,DOMApplicationCache:W.aV,OfflineResourceList:W.aV,BatteryManager:W.aV,CanvasCaptureMediaStreamTrack:W.aV,CrossOriginServiceWorkerClient:W.aV,EventSource:W.aV,MediaKeySession:W.aV,MediaQueryList:W.aV,MediaRecorder:W.aV,MediaSource:W.aV,MediaStream:W.aV,MediaStreamTrack:W.aV,MessagePort:W.aV,MIDIAccess:W.aV,NetworkInformation:W.aV,Notification:W.aV,Performance:W.aV,PermissionStatus:W.aV,PresentationAvailability:W.aV,PresentationReceiver:W.aV,PresentationRequest:W.aV,RTCDTMFSender:W.aV,RTCPeerConnection:W.aV,webkitRTCPeerConnection:W.aV,mozRTCPeerConnection:W.aV,ScreenOrientation:W.aV,ServicePortCollection:W.aV,ServiceWorkerContainer:W.aV,ServiceWorkerRegistration:W.aV,SpeechRecognition:W.aV,SpeechSynthesis:W.aV,SpeechSynthesisUtterance:W.aV,WorkerPerformance:W.aV,BluetoothDevice:W.aV,BluetoothRemoteGATTCharacteristic:W.aV,USB:W.aV,EventTarget:W.aV,HTMLFieldSetElement:W.lL,File:W.cc,FileList:W.f3,FileReader:W.lM,DOMFileSystem:W.lN,FileWriter:W.lO,FontFace:W.lS,FontFaceSet:W.lT,HTMLFormElement:W.ix,Gamepad:W.cl,History:W.m5,HTMLOptionsCollection:W.f5,HTMLCollection:W.f5,HTMLFormControlsCollection:W.iz,XMLHttpRequest:W.e2,XMLHttpRequestUpload:W.hc,XMLHttpRequestEventTarget:W.hc,HTMLIFrameElement:W.md,ImageData:W.hd,HTMLImageElement:W.f7,HTMLInputElement:W.mi,HTMLKeygenElement:W.mK,CalcLength:W.hn,LengthValue:W.hn,SimpleLength:W.hn,HTMLLinkElement:W.ho,Location:W.n1,HTMLMapElement:W.n6,HTMLVideoElement:W.hv,HTMLMediaElement:W.hv,MediaList:W.jq,HTMLMetaElement:W.nc,MIDIOutput:W.nd,MIDIInput:W.hw,MIDIPort:W.hw,MimeType:W.cn,MimeTypeArray:W.jr,Navigator:W.nu,NavigatorUserMediaError:W.nv,Node:W.aO,NodeList:W.ju,RadioNodeList:W.ju,HTMLObjectElement:W.ny,HTMLOutputElement:W.nD,HTMLParamElement:W.nH,Path2D:W.nJ,PerformanceCompositeTiming:W.e4,PerformanceEntry:W.e4,PerformanceMark:W.e4,PerformanceMeasure:W.e4,PerformanceRenderTiming:W.e4,PerformanceResourceTiming:W.e4,Perspective:W.nO,Plugin:W.ce,PluginArray:W.jB,PresentationConnection:W.nU,RTCDataChannel:W.jD,DataChannel:W.jD,HTMLScriptElement:W.fl,HTMLSelectElement:W.jE,ServicePort:W.oo,SharedWorker:W.or,SharedWorkerGlobalScope:W.os,HTMLSlotElement:W.ou,SourceBuffer:W.co,SourceBufferList:W.jG,HTMLSpanElement:W.hJ,SpeechGrammar:W.cp,SpeechGrammarList:W.jH,SpeechRecognitionAlternative:W.fm,SpeechRecognitionError:W.oB,SpeechRecognitionResult:W.cg,SpeechSynthesisEvent:W.oC,SpeechSynthesisVoice:W.oD,Storage:W.oJ,CSSStyleSheet:W.ch,StyleSheet:W.ch,KeywordValue:W.e6,NumberValue:W.e6,PositionValue:W.e6,TransformValue:W.e6,StyleValue:W.e6,HTMLTemplateElement:W.pc,HTMLTextAreaElement:W.pe,TextTrack:W.cQ,TextTrackCue:W.cG,VTTCue:W.cG,TextTrackCueList:W.ph,TextTrackList:W.pi,TimeRanges:W.pm,Touch:W.cr,TouchList:W.jL,TrackDefault:W.fo,TrackDefaultList:W.jM,Matrix:W.e7,Rotation:W.e7,Skew:W.e7,Translation:W.e7,TransformComponent:W.e7,URL:W.pC,VideoTrackList:W.pG,VTTRegion:W.fp,VTTRegionList:W.jN,WebSocket:W.pL,Window:W.jQ,DOMWindow:W.jQ,Worker:W.pS,CompositorWorkerGlobalScope:W.eH,DedicatedWorkerGlobalScope:W.eH,ServiceWorkerGlobalScope:W.eH,WorkerGlobalScope:W.eH,Attr:W.fq,ClientRect:W.q8,ClientRectList:W.hR,DOMRectList:W.hR,CSSRuleList:W.jX,DocumentType:W.qf,DOMRect:W.qg,GamepadList:W.k0,HTMLFrameSetElement:W.qB,NamedNodeMap:W.hX,MozNamedAttrMap:W.hX,ServiceWorker:W.r_,SpeechRecognitionResultList:W.k4,StyleSheetList:W.k6,WorkerLocation:W.rf,WorkerNavigator:W.rg,IDBDatabase:P.l3,IDBIndex:P.mg,IDBObjectStore:P.nz,IDBOpenDBRequest:P.hH,IDBVersionChangeRequest:P.hH,IDBRequest:P.hH,IDBTransaction:P.pr,SVGAElement:P.kl,SVGAnimateElement:P.ea,SVGAnimateMotionElement:P.ea,SVGAnimateTransformElement:P.ea,SVGAnimationElement:P.ea,SVGSetElement:P.ea,SVGFEBlendElement:P.lk,SVGFEColorMatrixElement:P.ll,SVGFEComponentTransferElement:P.lm,SVGFECompositeElement:P.ln,SVGFEConvolveMatrixElement:P.lo,SVGFEDiffuseLightingElement:P.lp,SVGFEDisplacementMapElement:P.lq,SVGFEFloodElement:P.lr,SVGFEGaussianBlurElement:P.ls,SVGFEImageElement:P.lt,SVGFEMergeElement:P.lu,SVGFEMorphologyElement:P.lv,SVGFEOffsetElement:P.lw,SVGFESpecularLightingElement:P.lx,SVGFETileElement:P.ly,SVGFETurbulenceElement:P.lz,SVGFilterElement:P.lP,SVGCircleElement:P.cm,SVGClipPathElement:P.cm,SVGDefsElement:P.cm,SVGEllipseElement:P.cm,SVGForeignObjectElement:P.cm,SVGGElement:P.cm,SVGGeometryElement:P.cm,SVGLineElement:P.cm,SVGPathElement:P.cm,SVGPolygonElement:P.cm,SVGPolylineElement:P.cm,SVGRectElement:P.cm,SVGSwitchElement:P.cm,SVGGraphicsElement:P.cm,SVGImageElement:P.me,SVGLength:P.d1,SVGLengthList:P.mN,SVGMarkerElement:P.n9,SVGMaskElement:P.na,SVGNumber:P.d3,SVGNumberList:P.nw,SVGPatternElement:P.nM,SVGPointList:P.nR,SVGScriptElement:P.ol,SVGStringList:P.p3,SVGDescElement:P.ca,SVGDiscardElement:P.ca,SVGFEDistantLightElement:P.ca,SVGFEFuncAElement:P.ca,SVGFEFuncBElement:P.ca,SVGFEFuncGElement:P.ca,SVGFEFuncRElement:P.ca,SVGFEMergeNodeElement:P.ca,SVGFEPointLightElement:P.ca,SVGFESpotLightElement:P.ca,SVGMetadataElement:P.ca,SVGStopElement:P.ca,SVGStyleElement:P.ca,SVGTitleElement:P.ca,SVGComponentTransferFunctionElement:P.ca,SVGElement:P.ca,SVGSVGElement:P.p6,SVGSymbolElement:P.p8,SVGTSpanElement:P.eD,SVGTextElement:P.eD,SVGTextPositioningElement:P.eD,SVGTextContentElement:P.eD,SVGTextPathElement:P.pg,SVGTransform:P.d4,SVGTransformList:P.ps,SVGUseElement:P.pD,SVGViewElement:P.pH,SVGViewSpec:P.pI,SVGLinearGradientElement:P.hV,SVGRadialGradientElement:P.hV,SVGGradientElement:P.hV,SVGCursorElement:P.qX,SVGFEDropShadowElement:P.qY,SVGMPathElement:P.qZ,AudioBuffer:P.fH,AudioBufferSourceNode:P.eQ,AudioContext:P.fI,webkitAudioContext:P.fI,OfflineAudioContext:P.fI,AnalyserNode:P.bB,RealtimeAnalyserNode:P.bB,AudioDestinationNode:P.bB,BiquadFilterNode:P.bB,ChannelMergerNode:P.bB,AudioChannelMerger:P.bB,ChannelSplitterNode:P.bB,AudioChannelSplitter:P.bB,DelayNode:P.bB,DynamicsCompressorNode:P.bB,GainNode:P.bB,AudioGainNode:P.bB,IIRFilterNode:P.bB,MediaStreamAudioDestinationNode:P.bB,PannerNode:P.bB,AudioPannerNode:P.bB,webkitAudioPannerNode:P.bB,ScriptProcessorNode:P.bB,JavaScriptAudioNode:P.bB,StereoPannerNode:P.bB,WaveShaperNode:P.bB,AudioNode:P.bB,MediaElementAudioSourceNode:P.dY,MediaStreamAudioSourceNode:P.dY,OscillatorNode:P.dY,Oscillator:P.dY,AudioSourceNode:P.dY,ConvolverNode:P.kR,WebGLActiveInfo:P.kn,WebGL2RenderingContext:P.o7,WebGL2RenderingContextBase:P.re,SQLResultSetRowList:P.jI})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.js.$nativeSuperclassTag="ArrayBufferView"
H.hz.$nativeSuperclassTag="ArrayBufferView"
H.hB.$nativeSuperclassTag="ArrayBufferView"
H.hx.$nativeSuperclassTag="ArrayBufferView"
H.hA.$nativeSuperclassTag="ArrayBufferView"
H.hC.$nativeSuperclassTag="ArrayBufferView"
H.hy.$nativeSuperclassTag="ArrayBufferView"
W.fW.$nativeSuperclassTag="EventTarget"
W.fZ.$nativeSuperclassTag="EventTarget"
W.fX.$nativeSuperclassTag="EventTarget"
W.h_.$nativeSuperclassTag="EventTarget"
W.fY.$nativeSuperclassTag="EventTarget"
W.h0.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xX(S.wF(),b)},[])
else (function(b){H.xX(S.wF(),b)})([])})})()
//# sourceMappingURL=NavBarOnlyController.dart.js.map
