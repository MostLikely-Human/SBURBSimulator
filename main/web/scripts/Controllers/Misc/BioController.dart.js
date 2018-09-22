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
a[c]=function(){a[c]=function(){H.Hi(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.uO"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.uO"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.uO(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={tM:function tM(a){this.a=a},
rg:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wG:function(a,b,c,d){var t=new H.oF(a,b,c,[d])
t.eU(a,b,c,d)
return t},
df:function(a,b,c,d){if(!!J.ar(a).$isr)return new H.fW(a,b,[c,d])
return new H.hr(a,b,[c,d])},
jl:function(){return new P.dP("No element")},
wf:function(){return new P.dP("Too few elements")},
jG:function(a,b,c,d){if(c-b<=32)H.FO(a,b,c,d)
else H.FN(a,b,c,d)},
FO:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bc(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.ct(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
FN:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.ap(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.ap(a3+a4,2)
p=q-t
o=q+t
n=J.bc(a2)
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
b=J.ar(c)
if(b.S(c,0))continue
if(b.a2(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dx(c)
if(b.aG(c,0)){--f
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
en:function en(){},
oF:function oF(a,b,c,$ti){var _=this
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
p6:function p6(){},
hO:function hO(){},
k9:function(a,b){var t=a.bt(b)
if(!u.globalState.d.cy)u.globalState.f.bB()
return t},
xL:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ar(s).$isp)throw H.k(P.dA("Arguments to main must be a List: "+H.x(s)))
u.globalState=new H.qn(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vC()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.pU(P.tS(null,H.eH),0)
r=P.C
s.z=new H.w(0,null,null,null,null,null,0,[r,H.fu])
s.ch=new H.w(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qm()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.zD,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.G8)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a4(null,null,null,r)
p=new H.fk(0,null,!1)
o=new H.fu(s,new H.w(0,null,null,null,null,null,0,[r,H.fk]),q,u.createNewIsolate(),p,new H.dC(H.rv()),new H.dC(H.rv()),!1,!1,[],P.a4(null,null,null,null),null,null,!1,!0,P.a4(null,null,null,null))
q.h(0,0)
o.dc(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fA(a,{func:1,args:[,]}))o.bt(new H.rw(t,a))
else if(H.fA(a,{func:1,args:[,,]}))o.bt(new H.rx(t,a))
else o.bt(a)
u.globalState.f.bB()},
G8:function(a){var t=P.ho(["command","print","msg",a])
return new H.dw(!0,P.hY(null,P.C)).az(t)},
zF:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.zG()
return},
zG:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.k(new P.U("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.k(new P.U('Cannot extract URI from "'+t+'"'))},
zD:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eF(!0,[]).aZ(b.data)
s=J.bc(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eF(!0,[]).aZ(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eF(!0,[]).aZ(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.C
j=P.a4(null,null,null,k)
i=new H.fk(0,null,!1)
h=new H.fu(s,new H.w(0,null,null,null,null,null,0,[k,H.fk]),j,u.createNewIsolate(),i,new H.dC(H.rv()),new H.dC(H.rv()),!1,!1,[],P.a4(null,null,null,null),null,null,!1,!0,P.a4(null,null,null,null))
j.h(0,0)
h.dc(0,i)
u.globalState.f.a.aN(0,new H.eH(h,new H.me(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bB()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fE(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bB()
break
case"close":u.globalState.ch.af(0,$.$get$vD().n(0,a))
a.terminate()
u.globalState.f.bB()
break
case"log":H.zC(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.ho(["command","print","msg",t])
k=new H.dw(!0,P.hY(null,P.C)).az(k)
s.toString
self.postMessage(k)}else P.fB(s.n(t,"msg"))
break
case"error":throw H.k(s.n(t,"msg"))}},
zC:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.ho(["command","log","msg",a])
r=new H.dw(!0,P.hY(null,P.C)).az(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cl(q)
t=H.ck(q)
s=P.lh(t)
throw H.k(s)}},
zE:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wt=$.wt+("_"+s)
$.wu=$.wu+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fE(f,["spawned",new H.fv(s,r),q,t.r])
r=new H.mf(a,b,c,d,t)
if(e===!0){t.dT(q,q)
u.globalState.f.a.aN(0,new H.eH(t,r,"start isolate"))}else r.$0()},
FU:function(a,b){var t=new H.oY(!0,!1,null)
t.eV(a,b)
return t},
Gr:function(a){return new H.eF(!0,[]).aZ(new H.dw(!1,P.hY(null,P.C)).az(a))},
rw:function rw(a,b){this.a=a
this.b=b},
rx:function rx(a,b){this.a=a
this.b=b},
qn:function qn(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
qi:function qi(a,b){this.a=a
this.b=b},
pU:function pU(a,b){this.a=a
this.b=b},
pV:function pV(a){this.a=a},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
qm:function qm(){},
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
pH:function pH(){},
fv:function fv(b,a){this.b=b
this.a=a},
qp:function qp(a,b){this.a=a
this.b=b},
i0:function i0(b,c,a){this.b=b
this.c=c
this.a=a},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
oY:function oY(a,b,c){this.a=a
this.b=b
this.c=c},
oZ:function oZ(a,b){this.a=a
this.b=b},
p_:function p_(a,b){this.a=a
this.b=b},
dC:function dC(a){this.a=a},
dw:function dw(a,b){this.a=a
this.b=b},
eF:function eF(a,b){this.a=a
this.b=b},
yH:function(){throw H.k(new P.U("Cannot modify unmodifiable Map"))},
GZ:function(a){return u.types[a]},
xG:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ar(a).$isaE},
x:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cI(a)
if(typeof t!=="string")throw H.k(H.bv(a))
return t},
Fm:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.nO(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
ep:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ud:function(a,b){if(b==null)throw H.k(new P.bJ(a,null,null))
return b.$1(a)},
fi:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.ud(a,c)
if(3>=t.length)return H.v(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.ud(a,c)}if(b<2||b>36)throw H.k(P.bE(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a3(q,o)|32)>r)return H.ud(a,c)}return parseInt(a,b)},
wr:function(a,b){return b.$1(a)},
wv:function(a,b){var t,s
H.xy(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wr(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.rG(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wr(a,b)}return t},
nJ:function(a){var t,s,r,q,p,o,n,m
t=J.ar(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.ar(a).$iseA){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a3(q,0)===36)q=C.c.ah(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rq(H.kd(a),0,null),u.mangledGlobalNames)},
nI:function(a){return"Instance of '"+H.nJ(a)+"'"},
F1:function(){if(!!self.location)return self.location.href
return},
wq:function(a){var t,s,r,q,p
t=J.bZ(a)
if(typeof t!=="number")return t.ex()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
F6:function(a){var t,s,r,q
t=H.a([],[P.C])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bT)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bv(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aY(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.k(H.bv(q))}return H.wq(t)},
wx:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bT)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bv(q))
if(q<0)throw H.k(H.bv(q))
if(q>65535)return H.F6(a)}return H.wq(a)},
F7:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.ex()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hC:function(a){var t
if(typeof a!=="number")return H.a7(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aY(t,10))>>>0,56320|t&1023)}}throw H.k(P.bE(a,0,1114111,null,null))},
cT:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ws:function(a){return a.b?H.cT(a).getUTCFullYear()+0:H.cT(a).getFullYear()+0},
nH:function(a){return a.b?H.cT(a).getUTCMonth()+1:H.cT(a).getMonth()+1},
nG:function(a){return a.b?H.cT(a).getUTCDate()+0:H.cT(a).getDate()+0},
F2:function(a){return a.b?H.cT(a).getUTCHours()+0:H.cT(a).getHours()+0},
F4:function(a){return a.b?H.cT(a).getUTCMinutes()+0:H.cT(a).getMinutes()+0},
F5:function(a){return a.b?H.cT(a).getUTCSeconds()+0:H.cT(a).getSeconds()+0},
F3:function(a){return a.b?H.cT(a).getUTCMilliseconds()+0:H.cT(a).getMilliseconds()+0},
ue:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bv(a))
return a[b]},
ww:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bv(a))
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
GQ:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cX(!0,a,"start",null)
if(a<0||a>c)return new P.et(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cX(!0,b,"end",null)
if(b<a||b>c)return new P.et(a,c,!0,b,"end","Invalid value")}return new P.cX(!0,b,"end",null)},
bv:function(a){return new P.cX(!0,a,null,null)},
kb:function(a){if(typeof a!=="number")throw H.k(H.bv(a))
return a},
uN:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(H.bv(a))
return a},
xy:function(a){if(typeof a!=="string")throw H.k(H.bv(a))
return a},
k:function(a){var t
if(a==null)a=new P.fg()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xM})
t.name=""}else t.toString=H.xM
return t},
xM:function(){return J.cI(this.dartException)},
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
return new H.p3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
p4:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
wR:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
tO:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.my(a,s,t?null:b.receiver)},
cl:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ry(a)
if(a==null)return
if(a instanceof H.h3)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aY(r,16)&8191)===10)switch(q){case 438:return t.$1(H.tO(H.x(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return t.$1(new H.jw(p,null))}}if(a instanceof TypeError){o=$.$get$wL()
n=$.$get$wM()
m=$.$get$wN()
l=$.$get$wO()
k=$.$get$wS()
j=$.$get$wT()
i=$.$get$wQ()
$.$get$wP()
h=$.$get$wV()
g=$.$get$wU()
f=o.aJ(s)
if(f!=null)return t.$1(H.tO(s,f))
else{f=n.aJ(s)
if(f!=null){f.method="call"
return t.$1(H.tO(s,f))}else{f=m.aJ(s)
if(f==null){f=l.aJ(s)
if(f==null){f=k.aJ(s)
if(f==null){f=j.aJ(s)
if(f==null){f=i.aJ(s)
if(f==null){f=l.aJ(s)
if(f==null){f=h.aJ(s)
if(f==null){f=g.aJ(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jw(s,f==null?null:f.method))}}return t.$1(new H.p5(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jK()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cX(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jK()
return a},
ck:function(a){var t
if(a instanceof H.h3)return a.b
if(a==null)return new H.k5(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.k5(a,null)},
H8:function(a){if(a==null||typeof a!='object')return J.dz(a)
else return H.ep(a)},
xC:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
H3:function(a,b,c,d,e,f,g){switch(c){case 0:return H.k9(b,new H.rl(a))
case 1:return H.k9(b,new H.rm(a,d))
case 2:return H.k9(b,new H.rn(a,d,e))
case 3:return H.k9(b,new H.ro(a,d,e,f))
case 4:return H.k9(b,new H.rp(a,d,e,f,g))}throw H.k(P.lh("Unsupported number of arguments for wrapped closure"))},
dj:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.H3)
a.$identity=t
return t},
yD:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ar(c).$isp){t.$reflectionInfo=c
r=H.Fm(t).r}else r=c
q=d?Object.create(new H.of().constructor.prototype):Object.create(new H.fL(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dD
$.dD=J.e6(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.vb(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.GZ,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.v8:H.rK
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.k("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.vb(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
yA:function(a,b,c,d){var t=H.rK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
vb:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.yC(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.yA(s,!q,t,b)
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
yB:function(a,b,c,d){var t,s
t=H.rK
s=H.v8
switch(b?-1:a){case 0:throw H.k(new H.nT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
yC:function(a,b){var t,s,r,q,p,o,n,m
t=H.yz()
s=$.v7
if(s==null){s=H.kC("receiver")
$.v7=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.yB(q,!o,r,b)
if(q===1){s="return function(){return this."+H.x(t)+"."+H.x(r)+"(this."+H.x(s)+");"
o=$.dD
$.dD=J.e6(o,1)
return new Function(s+H.x(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.x(t)+"."+H.x(r)+"(this."+H.x(s)+", "+m+");"
o=$.dD
$.dD=J.e6(o,1)
return new Function(s+H.x(o)+"}")()},
uO:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ar(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.yD(a,b,t,!!d,e,f)},
rK:function(a){return a.a},
v8:function(a){return a.c},
yz:function(){var t=$.fM
if(t==null){t=H.kC("self")
$.fM=t}return t},
kC:function(a){var t,s,r,q,p
t=new H.fL("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Hb:function(a,b){var t=J.bc(b)
throw H.k(H.va(H.nJ(a),t.K(b,3,t.gm(b))))},
eK:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.ar(a)[b]
else t=!0
if(t)return a
H.Hb(a,b)},
xB:function(a){var t=J.ar(a)
return"$S" in t?t.$S():null},
fA:function(a,b){var t
if(a==null)return!1
t=H.xB(a)
return t==null?!1:H.uR(t,b)},
va:function(a,b){return new H.kH("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Hi:function(a){throw H.k(new P.l0(a))},
rv:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xD:function(a){return u.getIsolateTag(a)},
bY:function(a){return new H.dR(a,null)},
a:function(a,b){a.$ti=b
return a},
kd:function(a){if(a==null)return
return a.$ti},
xF:function(a,b){return H.uU(a["$as"+H.x(b)],H.kd(a))},
as:function(a,b,c){var t=H.xF(a,b)
return t==null?null:t[c]},
P:function(a,b){var t=H.kd(a)
return t==null?null:t[b]},
dy:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rq(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.x(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dy(t,b)
return H.Gv(a,b)}return"unknown-reified-type"},
Gv:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dy(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dy(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dy(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.GY(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dy(l[j],b)+(" "+H.x(j))}q+="}"}return"("+q+") => "+t},
rq:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.c9("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.O=p+", "
o=a[s]
if(o!=null)q=!1
p=t.O+=H.dy(o,c)}return q?"":"<"+t.C(0)+">"},
ke:function(a){var t,s
if(a instanceof H.eS){t=H.xB(a)
if(t!=null)return H.dy(t,null)}s=J.ar(a).constructor.builtin$cls
if(a==null)return s
return s+H.rq(a.$ti,0,null)},
uU:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dU:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kd(a)
s=J.ar(a)
if(s[b]==null)return!1
return H.xw(H.uU(s[d],t),c)},
Hh:function(a,b,c,d){if(a==null)return a
if(H.dU(a,b,c,d))return a
throw H.k(H.va(H.nJ(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rq(c,0,null),u.mangledGlobalNames)))},
xw:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cW(a[s],b[s]))return!1
return!0},
eJ:function(a,b,c){return a.apply(b,H.xF(b,c))},
GL:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ab"||b.builtin$cls==="d3"
if(b==null)return!0
t=H.kd(a)
a=J.ar(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.uR(r.apply(a,null),b)}return H.cW(s,b)},
cW:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d3")return!0
if('func' in b)return H.uR(a,b)
if('func' in a)return b.builtin$cls==="Ho"||b.builtin$cls==="ab"
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
return H.xw(H.uU(o,t),r)},
xv:function(a,b,c){var t,s,r,q,p
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
GC:function(a,b){var t,s,r,q,p,o
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
uR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(n===m){if(!H.xv(r,q,!1))return!1
if(!H.xv(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cW(i,h)||H.cW(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cW(i,h)||H.cW(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cW(i,h)||H.cW(h,i)))return!1}}return H.GC(a.named,b.named)},
Hz:function(a){var t=$.uP
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Hy:function(a){return H.ep(a)},
Hx:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
H4:function(a){var t,s,r,q,p,o
t=$.uP.$1(a)
s=$.rb[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rk[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xu.$2(a,t)
if(t!=null){s=$.rb[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rk[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.uS(r)
$.rb[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rk[t]=r
return r}if(p==="-"){o=H.uS(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xH(a,r)
if(p==="*")throw H.k(new P.ez(t))
if(u.leafTags[t]===true){o=H.uS(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xH(a,r)},
xH:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rr(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
uS:function(a){return J.rr(a,!1,null,!!a.$isaE)},
H6:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rr(t,!1,null,!!t.$isaE)
else return J.rr(t,c,null,null)},
H1:function(){if(!0===$.uQ)return
$.uQ=!0
H.H2()},
H2:function(){var t,s,r,q,p,o,n,m
$.rb=Object.create(null)
$.rk=Object.create(null)
H.H0()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xI.$1(p)
if(o!=null){n=H.H6(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
H0:function(){var t,s,r,q,p,o,n
t=C.N()
t=H.fz(C.O,H.fz(C.P,H.fz(C.u,H.fz(C.u,H.fz(C.R,H.fz(C.Q,H.fz(C.S(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.uP=new H.rh(p)
$.xu=new H.ri(o)
$.xI=new H.rj(n)},
fz:function(a,b){return a(b)||b},
tJ:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.k(new P.bJ("Illegal RegExp pattern ("+String(q)+")",a,null))},
Hf:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
uT:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hk){q=b.gdC()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.aZ(H.bv(b))
throw H.k("String.replaceAll(Pattern) UNIMPLEMENTED")}},
GA:function(a){return a},
Hg:function(a,b,c,d){var t,s,r,q,p,o
t=J.ar(b)
if(!t.$isu9)throw H.k(P.dB(b,"pattern","is not a Pattern"))
for(t=t.aQ(b,a),t=new H.jU(t.a,t.b,t.c,null),s=0,r="";t.G();){q=t.d
p=q.b
o=p.index
r=r+H.x(H.xl().$1(C.c.K(a,s,o)))+H.x(c.$1(q))
s=o+p[0].length}t=r+H.x(H.xl().$1(C.c.ah(a,s)))
return t.charCodeAt(0)==0?t:t},
kN:function kN(){},
kO:function kO(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nO:function nO(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
p3:function p3(a,b,c,d,e,f){var _=this
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
p5:function p5(a){this.a=a},
h3:function h3(a,b){this.a=a
this.b=b},
ry:function ry(a){this.a=a},
k5:function k5(a,b){this.a=a
this.b=b},
rl:function rl(a){this.a=a},
rm:function rm(a,b){this.a=a
this.b=b},
rn:function rn(a,b,c){this.a=a
this.b=b
this.c=c},
ro:function ro(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rp:function rp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eS:function eS(){},
oJ:function oJ(){},
of:function of(){},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kH:function kH(a){this.a=a},
nT:function nT(a){this.a=a},
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
mI:function mI(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mJ:function mJ(a,$ti){this.a=a
this.$ti=$ti},
mK:function mK(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rh:function rh(a){this.a=a},
ri:function ri(a){this.a=a},
rj:function rj(a){this.a=a},
hk:function hk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k3:function k3(a,b){this.a=a
this.b=b},
pC:function pC(a,b,c){this.a=a
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
qF:function qF(a,b,c){this.a=a
this.b=b
this.c=c},
qG:function qG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cy:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.dA("Invalid length "+H.x(a)))
return a},
xh:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dA("Invalid view offsetInBytes "+H.x(b)))},
xk:function(a){return a},
F_:function(a){return new Int8Array(H.xk(a))},
cM:function(a,b,c){H.xh(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
Gq:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aG()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.k(H.GQ(a,b,c))
return b},
fe:function fe(){},
eo:function eo(){},
n8:function n8(){},
jt:function jt(){},
hv:function hv(){},
hx:function hx(){},
hz:function hz(){},
hw:function hw(){},
hy:function hy(){},
hA:function hA(){},
n9:function n9(){},
na:function na(){},
nb:function nb(){},
nc:function nc(){},
nd:function nd(){},
ne:function ne(){},
nf:function nf(){},
ju:function ju(){},
ff:function ff(){},
GY:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
Ha:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ar:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jo.prototype
return J.jn.prototype}if(typeof a=="string")return J.el.prototype
if(a==null)return J.mu.prototype
if(typeof a=="boolean")return J.mt.prototype
if(a.constructor==Array)return J.ek.prototype
if(typeof a!="object"){if(typeof a=="function")return J.em.prototype
return a}if(a instanceof P.ab)return a
return J.re(a)},
rr:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
re:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.uQ==null){H.H1()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.k(new P.ez("Return interceptor for "+H.x(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$tN()]
if(p!=null)return p
p=H.H4(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$tN(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
wg:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
EG:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a3(a,b)
if(s!==32&&s!==13&&!J.wg(s))break;++b}return b},
tI:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.Z(a,t)
if(s!==32&&s!==13&&!J.wg(s))break}return b},
bc:function(a){if(typeof a=="string")return J.el.prototype
if(a==null)return a
if(a.constructor==Array)return J.ek.prototype
if(typeof a!="object"){if(typeof a=="function")return J.em.prototype
return a}if(a instanceof P.ab)return a
return J.re(a)},
dk:function(a){if(a==null)return a
if(a.constructor==Array)return J.ek.prototype
if(typeof a!="object"){if(typeof a=="function")return J.em.prototype
return a}if(a instanceof P.ab)return a
return J.re(a)},
dx:function(a){if(typeof a=="number")return J.fb.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eA.prototype
return a},
kc:function(a){if(typeof a=="number")return J.fb.prototype
if(typeof a=="string")return J.el.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eA.prototype
return a},
da:function(a){if(typeof a=="string")return J.el.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eA.prototype
return a},
aR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.em.prototype
return a}if(a instanceof P.ab)return a
return J.re(a)},
e6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kc(a).W(a,b)},
b_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ar(a).S(a,b)},
uV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dx(a).av(a,b)},
ct:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dx(a).aG(a,b)},
e7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dx(a).a2(a,b)},
rz:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kc(a).au(a,b)},
fC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xG(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bc(a).n(a,b)},
kf:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xG(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dk(a).i(a,b,c)},
xN:function(a,b){return J.dk(a).h(a,b)},
xO:function(a,b,c,d){return J.aR(a).fP(a,b,c,d)},
xP:function(a,b){return J.da(a).aQ(a,b)},
dV:function(a,b){return J.aR(a).fR(a,b)},
uW:function(a){return J.aR(a).fT(a)},
rA:function(a,b,c){return J.dx(a).aa(a,b,c)},
xQ:function(a,b){return J.kc(a).aB(a,b)},
xR:function(a,b){return J.aR(a).aC(a,b)},
xS:function(a,b){return J.bc(a).ab(a,b)},
kg:function(a,b,c){return J.bc(a).dX(a,b,c)},
xT:function(a,b){return J.aR(a).h1(a,b)},
uX:function(a,b){return J.dk(a).U(a,b)},
xU:function(a,b,c,d){return J.dk(a).bY(a,b,c,d)},
kh:function(a){return J.dx(a).al(a)},
uY:function(a,b){return J.dk(a).a8(a,b)},
rB:function(a){return J.aR(a).gdV(a)},
xV:function(a){return J.aR(a).gbs(a)},
fD:function(a){return J.aR(a).gas(a)},
xW:function(a){return J.aR(a).gcJ(a)},
dz:function(a){return J.ar(a).ga4(a)},
rC:function(a){return J.bc(a).gY(a)},
uZ:function(a){return J.aR(a).gX(a)},
cP:function(a){return J.dk(a).gT(a)},
xX:function(a){return J.aR(a).gaD(a)},
bZ:function(a){return J.bc(a).gm(a)},
xY:function(a){return J.aR(a).gH(a)},
xZ:function(a){return J.aR(a).gee(a)},
y_:function(a){return J.aR(a).ghT(a)},
y0:function(a){return J.aR(a).ghU(a)},
v_:function(a){return J.ar(a).ga9(a)},
rD:function(a){return J.aR(a).gaM(a)},
y1:function(a){return J.aR(a).gb7(a)},
y2:function(a){return J.aR(a).bk(a)},
y3:function(a,b){return J.aR(a).at(a,b)},
y4:function(a,b){return J.aR(a).bF(a,b)},
y5:function(a,b){return J.bc(a).bf(a,b)},
v0:function(a,b,c,d,e){return J.aR(a).e9(a,b,c,d,e)},
v1:function(a,b){return J.dk(a).ay(a,b)},
y6:function(a,b,c){return J.da(a).ed(a,b,c)},
v2:function(a,b){return J.aR(a).hD(a,b)},
y7:function(a,b,c,d){return J.aR(a).hQ(a,b,c,d)},
ki:function(a,b,c){return J.da(a).cV(a,b,c)},
rE:function(a,b,c){return J.da(a).hS(a,b,c)},
fE:function(a,b){return J.aR(a).b9(a,b)},
v3:function(a,b){return J.aR(a).sbs(a,b)},
y8:function(a,b){return J.dk(a).d3(a,b)},
dW:function(a,b){return J.da(a).eJ(a,b)},
y9:function(a,b){return J.da(a).ah(a,b)},
rF:function(a){return J.dx(a).l(a)},
ya:function(a){return J.dk(a).aq(a)},
yb:function(a,b){return J.dx(a).bC(a,b)},
cI:function(a){return J.ar(a).C(a)},
yc:function(a){return J.da(a).hY(a)},
rG:function(a){return J.da(a).bj(a)},
yd:function(a){return J.da(a).er(a)},
f:function f(){},
mt:function mt(){},
mu:function mu(){},
hl:function hl(){},
nB:function nB(){},
eA:function eA(){},
em:function em(){},
ek:function ek($ti){this.$ti=$ti},
tL:function tL($ti){this.$ti=$ti},
i5:function i5(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fb:function fb(){},
jo:function jo(){},
jn:function jn(){},
el:function el(){}},P={
G_:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.GD()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dj(new P.pE(t),1)).observe(s,{childList:true})
return new P.pD(t,s,r)}else if(self.setImmediate!=null)return P.GE()
return P.GF()},
G0:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dj(new P.pF(a),0))},
G1:function(a){++u.globalState.f.b
self.setImmediate(H.dj(new P.pG(a),0))},
G2:function(a){P.uy(C.o,a)},
bt:function(a,b){P.xf(null,a)
return b.ghg()},
cs:function(a,b){P.xf(a,b)},
bs:function(a,b){J.xR(b,a)},
br:function(a,b){b.cF(H.cl(a),H.ck(a))},
xf:function(a,b){var t,s,r,q
t=new P.qU(b)
s=new P.qV(b)
r=J.ar(a)
if(!!r.$isbj)a.cv(t,s)
else if(!!r.$iscD)a.c3(t,s)
else{q=new P.bj(0,$.am,null,[null])
q.a=4
q.c=a
q.cv(t,null)}},
bu:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.am.toString
return new P.r4(t)},
xm:function(a,b){if(H.fA(a,{func:1,args:[P.d3,P.d3]})){b.toString
return a}else{b.toString
return a}},
zk:function(a,b){var t=new P.bj(0,$.am,null,[b])
P.wK(C.o,new P.r6(a,t))
return t},
tb:function(a,b,c){var t
if(a==null)a=new P.fg()
t=$.am
if(t!==C.e)t.toString
t=new P.bj(0,t,null,[c])
t.de(a,b)
return t},
zl:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bj(0,$.am,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.lV(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bT)(a),++l){q=a[l]
p=t.b
q.c3(new P.lU(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bj(0,$.am,null,[null])
m.dd(C.W)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.cl(j)
n=H.ck(j)
if(t.b===0||!1)return P.tb(o,n,null)
else{t.c=o
t.d=n}}return s},
bp:function(a){return new P.k7(new P.bj(0,$.am,null,[a]),[a])},
xj:function(a,b,c){$.am.toString
a.ao(b,c)},
G5:function(a,b){var t=new P.bj(0,$.am,null,[b])
t.a=4
t.c=a
return t},
x7:function(a,b){var t,s,r
b.a=1
try{a.c3(new P.q3(b),new P.q4(b))}catch(r){t=H.cl(r)
s=H.ck(r)
P.xJ(new P.q5(b,t,s))}},
q2:function(a,b){var t,s,r
for(;a.gfu();)a=a.c
t=a.gcn()
s=b.c
if(t){b.c=null
r=b.bO(s)
b.a=a.a
b.c=a.c
P.ft(b,r)}else{b.a=2
b.c=a
a.dG(s)}},
ft:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fD(p)
n=p.gaL()
s.toString
P.ka(null,null,s,o,n)}return}for(;b.gcq()!=null;b=m){m=b.a
b.a=null
P.ft(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.ge3()||b.ge2()){k=b.gfN()
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
n=p.gaL()
s.toString
P.ka(null,null,s,o,n)
return}j=$.am
if(j==null?k!=null:j!==k)$.am=k
else j=null
if(b.ge2())new P.qa(t,r,q,b).$0()
else if(s){if(b.ge3())new P.q9(r,b,l).$0()}else if(b.ghn())new P.q8(t,r,b).$0()
if(j!=null)$.am=j
s=r.b
if(!!J.ar(s).$iscD){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bO(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.q2(s,i)
return}}i=b.b
b=i.bN()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
Gx:function(){var t,s
for(;t=$.fx,t!=null;){$.i2=null
s=t.b
$.fx=s
if(s==null)$.i1=null
t.a.$0()}},
Gz:function(){$.uL=!0
try{P.Gx()}finally{$.i2=null
$.uL=!1
if($.fx!=null)$.$get$uH().$1(P.xx())}},
xt:function(a){var t=new P.jV(a,null)
if($.fx==null){$.i1=t
$.fx=t
if(!$.uL)$.$get$uH().$1(P.xx())}else{$.i1.b=t
$.i1=t}},
Gy:function(a){var t,s,r
t=$.fx
if(t==null){P.xt(a)
$.i2=$.i1
return}s=new P.jV(a,null)
r=$.i2
if(r==null){s.b=t
$.i2=s
$.fx=s}else{s.b=r.b
r.b=s
$.i2=s
if(s.b==null)$.i1=s}},
xJ:function(a){var t=$.am
if(C.e===t){P.fy(null,null,C.e,a)
return}t.toString
P.fy(null,null,t,t.cD(a,!0))},
Ht:function(a,b){return new P.qE(null,a,!1,[b])},
xq:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.cl(o)
s=H.ck(o)
$.am.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fD(r)
q=n
p=r.gaL()
c.$2(q,p)}}},
Gp:function(a,b,c,d){var t=a.bV(0)
if(!!J.ar(t).$iscD&&t!==$.$get$hc())t.c6(new P.qX(b,c,d))
else b.ao(c,d)},
xg:function(a,b){return new P.qW(a,b)},
uK:function(a,b,c){var t=a.bV(0)
if(!!J.ar(t).$iscD&&t!==$.$get$hc())t.c6(new P.qY(b,c))
else b.aI(c)},
G4:function(a,b,c,d,e,f,g){var t,s
t=$.am
s=e?1:0
s=new P.hW(a,null,null,null,null,t,s,null,null,[f,g])
s.eY(b,c,d,e,g)
s.f0(a,b,c,d,e,f,g)
return s},
Go:function(a,b,c){$.am.toString
a.bH(b,c)},
wK:function(a,b){var t=$.am
if(t===C.e){t.toString
return P.uy(a,b)}return P.uy(a,t.cD(b,!0))},
uy:function(a,b){var t=C.a.ap(a.a,1000)
return H.FU(t<0?0:t,b)},
ka:function(a,b,c,d,e){var t={}
t.a=d
P.Gy(new P.r3(t,e))},
xn:function(a,b,c,d){var t,s
s=$.am
if(s===c)return d.$0()
$.am=c
t=s
try{s=d.$0()
return s}finally{$.am=t}},
xp:function(a,b,c,d,e){var t,s
s=$.am
if(s===c)return d.$1(e)
$.am=c
t=s
try{s=d.$1(e)
return s}finally{$.am=t}},
xo:function(a,b,c,d,e,f){var t,s
s=$.am
if(s===c)return d.$2(e,f)
$.am=c
t=s
try{s=d.$2(e,f)
return s}finally{$.am=t}},
fy:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cD(d,!(!t||!1))
P.xt(d)},
pE:function pE(a){this.a=a},
pD:function pD(a,b,c){this.a=a
this.b=b
this.c=c},
pF:function pF(a){this.a=a},
pG:function pG(a){this.a=a},
qU:function qU(a){this.a=a},
qV:function qV(a){this.a=a},
r4:function r4(a){this.a=a},
cD:function cD(){},
r6:function r6(a,b){this.a=a
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
eT:function eT(){},
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
q_:function q_(a,b){this.a=a
this.b=b},
q7:function q7(a,b){this.a=a
this.b=b},
q3:function q3(a){this.a=a},
q4:function q4(a){this.a=a},
q5:function q5(a,b,c){this.a=a
this.b=b
this.c=c},
q1:function q1(a,b){this.a=a
this.b=b},
q6:function q6(a,b){this.a=a
this.b=b},
q0:function q0(a,b,c){this.a=a
this.b=b
this.c=c},
qa:function qa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qb:function qb(a){this.a=a},
q9:function q9(a,b,c){this.a=a
this.b=b
this.c=c},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b){this.a=a
this.b=b},
dh:function dh(){},
ol:function ol(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oj:function oj(a,b){this.a=a
this.b=b},
ok:function ok(a,b){this.a=a
this.b=b},
om:function om(a){this.a=a},
or:function or(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
op:function op(a,b){this.a=a
this.b=b},
oq:function oq(){},
os:function os(a){this.a=a},
ov:function ov(a){this.a=a},
ow:function ow(a,b){this.a=a
this.b=b},
ot:function ot(a,b){this.a=a
this.b=b},
ou:function ou(a){this.a=a},
ox:function ox(a,b){this.a=a
this.b=b},
oy:function oy(a,b){this.a=a
this.b=b},
on:function on(a,b,c){this.a=a
this.b=b
this.c=c},
oo:function oo(a){this.a=a},
oi:function oi(){},
di:function di(){},
pJ:function pJ(a,b,c){this.a=a
this.b=b
this.c=c},
pI:function pI(a){this.a=a},
jY:function jY(){},
pO:function pO(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pQ:function pQ(b,c,a){this.b=b
this.c=c
this.a=a},
pP:function pP(){},
qq:function qq(){},
qr:function qr(a,b){this.a=a
this.b=b},
qD:function qD(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qE:function qE(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qX:function qX(a,b,c){this.a=a
this.b=b
this.c=c},
qW:function qW(a,b){this.a=a
this.b=b},
qY:function qY(a,b){this.a=a
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
qo:function qo(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eN:function eN(a,b){this.a=a
this.b=b},
qT:function qT(){},
r3:function r3(a,b){this.a=a
this.b=b},
qu:function qu(){},
qv:function qv(a,b){this.a=a
this.b=b},
qw:function qw(a,b){this.a=a
this.b=b},
qx:function qx(a,b){this.a=a
this.b=b},
G6:function(a,b){var t=a[b]
return t===a?null:t},
uJ:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
uI:function(){var t=Object.create(null)
P.uJ(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wh:function(a,b,c){return H.xC(a,new H.w(0,null,null,null,null,null,0,[b,c]))},
bX:function(a,b){return new H.w(0,null,null,null,null,null,0,[a,b])},
mL:function(){return new H.w(0,null,null,null,null,null,0,[null,null])},
ho:function(a){return H.xC(a,new H.w(0,null,null,null,null,null,0,[null,null]))},
hY:function(a,b){return new P.k2(0,null,null,null,null,null,0,[a,b])},
G7:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
E:function(a,b,c,d,e){return new P.qd(0,null,null,null,null,[d,e])},
tF:function(a,b,c){var t,s
if(P.uM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i3()
s.push(a)
try{P.Gw(a,t)}finally{if(0>=s.length)return H.v(s,-1)
s.pop()}s=P.wF(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jk:function(a,b,c){var t,s,r
if(P.uM(a))return b+"..."+c
t=new P.c9(b)
s=$.$get$i3()
s.push(a)
try{r=t
r.O=P.wF(r.gO(),a,", ")}finally{if(0>=s.length)return H.v(s,-1)
s.pop()}s=t
s.O=s.gO()+c
s=t.gO()
return s.charCodeAt(0)==0?s:s},
uM:function(a){var t,s
for(t=0;s=$.$get$i3(),t<s.length;++t)if(a===s[t])return!0
return!1},
Gw:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cP(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.G())return
q=H.x(t.gN())
b.push(q)
s+=q.length+2;++r}if(!t.G()){if(r<=5)return
if(0>=b.length)return H.v(b,-1)
p=b.pop()
if(0>=b.length)return H.v(b,-1)
o=b.pop()}else{n=t.gN();++r
if(!t.G()){if(r<=4){b.push(H.x(n))
return}p=H.x(n)
if(0>=b.length)return H.v(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gN();++r
for(;t.G();n=m,m=l){l=t.gN();++r
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
a4:function(a,b,c,d){return new P.k1(0,null,null,null,null,null,0,[d])},
tR:function(a,b){var t,s
t=P.a4(null,null,null,b)
for(s=J.cP(a);s.G();)t.h(0,s.gN())
return t},
wm:function(a){var t,s,r
t={}
if(P.uM(a))return"{...}"
s=new P.c9("")
try{$.$get$i3().push(a)
r=s
r.O=r.gO()+"{"
t.a=!0
a.a8(0,new P.n_(t,s))
t=s
t.O=t.gO()+"}"}finally{t=$.$get$i3()
if(0>=t.length)return H.v(t,-1)
t.pop()}t=s.gO()
return t.charCodeAt(0)==0?t:t},
tS:function(a,b){var t=new P.mM(null,0,0,0,[b])
t.eT(a,b)
return t},
qd:function qd(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qg:function qg(a){this.a=a},
qe:function qe(a,$ti){this.a=a
this.$ti=$ti},
qf:function qf(a,b,c,d,$ti){var _=this
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
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qh:function qh(){},
fa:function fa(){},
hj:function hj(){},
jp:function jp(){},
hB:function hB(){},
aM:function aM(){},
qL:function qL(){},
mZ:function mZ(){},
hP:function hP(a,$ti){this.a=a
this.$ti=$ti},
n_:function n_(a,b){this.a=a
this.b=b},
mM:function mM(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ql:function ql(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
o3:function o3(){},
o2:function o2(){},
v5:function(a,b,c,d,e,f){if(C.d.bG(f,4)!==0)throw H.k(new P.bJ("Invalid base64 padding, padded length must be multiple of four, is "+H.x(f),a,c))
if(d+e!==f)throw H.k(new P.bJ("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.k(new P.bJ("Invalid base64 padding, more than two '=' characters",a,b))},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
fP:function fP(){},
fR:function fR(){},
lb:function lb(){},
pf:function pf(a){this.a=a},
pg:function pg(a){this.a=a},
qN:function qN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qP:function qP(a){this.a=a},
qO:function qO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FS:function(a,b,c){var t,s,r,q
if(b<0)throw H.k(P.bE(b,0,J.bZ(a),null,null))
t=c==null
if(!t&&c<b)throw H.k(P.bE(c,b,J.bZ(a),null,null))
s=J.cP(a)
for(r=0;r<b;++r)if(!s.G())throw H.k(P.bE(b,0,r,null,null))
q=[]
if(t)for(;s.G();)q.push(s.gN())
else for(r=b;r<c;++r){if(!s.G())throw H.k(P.bE(c,b,r,null,null))
q.push(s.gN())}return H.wx(q)},
wF:function(a,b,c){var t=J.cP(b)
if(!t.G())return a
if(c.length===0){do a+=H.x(t.gN())
while(t.G())}else{a+=H.x(t.gN())
for(;t.G();)a=a+c+H.x(t.gN())}return a},
yG:function(a,b){return J.xQ(a,b)},
yJ:function(a,b){var t=new P.dF(a,b)
t.d9(a,b)
return t},
yK:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.x(t)
if(t>=10)return s+"00"+H.x(t)
return s+"000"+H.x(t)},
yL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ic:function(a){if(a>=10)return""+a
return"0"+a},
vm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cI(a)
if(typeof a==="string")return JSON.stringify(a)
return P.z2(a)},
z2:function(a){var t=J.ar(a)
if(!!t.$iseS)return t.C(a)
return H.nI(a)},
dA:function(a){return new P.cX(!1,null,null,a)},
dB:function(a,b,c){return new P.cX(!0,a,b,c)},
ye:function(a){return new P.cX(!1,null,a,"Must not be null")},
wB:function(a){return new P.et(null,null,!1,null,null,a)},
jD:function(a,b,c){return new P.et(null,null,!0,a,b,"Value not in range")},
bE:function(a,b,c,d,e){return new P.et(b,c,!0,a,d,"Invalid value")},
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
lh:function(a){return new P.pZ(a)},
d1:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cP(a);s.G();)t.push(s.gN())
if(b)return t
t.fixed$length=Array
return t},
EH:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.d1(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fB:function(a){H.Ha(H.x(a))},
d5:function(a,b,c){return new H.hk(a,H.tJ(a,!1,!0,!1),null,null)},
oD:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dg(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a2()
s=c<t}else s=!0
return H.wx(s?C.b.c9(a,b,c):a)}if(!!J.ar(a).$isff)return H.F7(a,b,P.dg(b,c,a.length,null,null,null))
return P.FS(a,b,c)},
wX:function(){var t=H.F1()
if(t!=null)return P.wY(t,0,null)
throw H.k(new P.U("'Uri.base' is not supported"))},
wY:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a3(a,b+4)^58)*3|C.c.a3(a,b)^100|C.c.a3(a,b+1)^97|C.c.a3(a,b+2)^116|C.c.a3(a,b+3)^97)>>>0
if(s===0)return P.wW(b>0||c<c?C.c.K(a,b,c):a,5,null).geu()
else if(s===32)return P.wW(C.c.K(a,t,c),0,null).geu()}r=H.a(new Array(8),[P.C])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xr(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.av()
if(p>=b)if(P.xr(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.W()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a2()
if(typeof l!=="number")return H.a7(l)
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
j=!1}else{if(!(l<c&&l===m+2&&C.c.aH(a,"..",m)))h=l>m+2&&C.c.aH(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aH(a,"file",b)){if(o<=b){if(!C.c.aH(a,"/",m)){g="file:///"
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
m=7}else if(m===l)if(b===0&&!0){a=C.c.aF(a,m,l,"/");++l;++k;++c}else{a=C.c.K(a,b,m)+"/"+C.c.K(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aH(a,"http",b)){if(q&&n+3===m&&C.c.aH(a,"80",n+1))if(b===0&&!0){a=C.c.aF(a,n,m,"")
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
else if(p===t&&C.c.aH(a,"https",b)){if(q&&n+4===m&&C.c.aH(a,"443",n+1))if(b===0&&!0){a=C.c.aF(a,n,m,"")
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
k-=b}return new P.qC(a,p,o,n,m,l,k,i,null)}return P.Ga(a,b,c,p,o,n,m,l,k,i)},
x_:function(a,b){return C.b.hd(a.split("&"),P.mL(),new P.pb(b))},
FV:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.p8(a)
s=H.cy(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.Z(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fi(C.c.K(a,p,q),null,null)
if(J.ct(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.v(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fi(C.c.K(a,p,c),null,null)
if(J.ct(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.v(r,o)
r[o]=m
return r},
wZ:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.p9(a)
s=new P.pa(a,t)
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
k=J.b_(C.b.gbc(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.FV(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.aw()
h=j[1]
if(typeof h!=="number")return H.a7(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.aw()
i=j[3]
if(typeof i!=="number")return H.a7(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.ar(e).S(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.v(g,f)
g[f]=0
i=f+1
if(i>=16)return H.v(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.d2()
i=C.d.aY(e,8)
if(f<0||f>=16)return H.v(g,f)
g[f]=i
i=f+1
if(i>=16)return H.v(g,i)
g[i]=e&255
f+=2}}return g},
Ga:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Gi(a,b,d)
else{if(d===b)P.i_(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.Gj(a,t,e-1):""
r=P.Ge(a,e,f,!1)
if(typeof f!=="number")return f.W()
q=f+1
if(typeof g!=="number")return H.a7(g)
p=q<g?P.Gg(H.fi(C.c.K(a,q,g),null,new P.r5(a,f)),j):null}else{s=""
r=null
p=null}o=P.Gf(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a2()
n=h<i?P.Gh(a,h+1,i,null):null
return new P.k8(j,s,r,p,o,n,i<c?P.Gd(a,i+1,c):null,null,null,null,null,null)},
x9:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i_:function(a,b,c){throw H.k(new P.bJ(c,a,b))},
Gg:function(a,b){if(a!=null&&J.b_(a,P.x9(b)))return
return a},
Ge:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.an()
t=c-1
if(C.c.Z(a,t)!==93)P.i_(a,b,"Missing end `]` to match `[` in host")
P.wZ(a,b+1,t)
return C.c.K(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a7(c)
s=b
for(;s<c;++s)if(C.c.Z(a,s)===58){P.wZ(a,b,c)
return"["+a+"]"}return P.Gl(a,b,c)},
Gl:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a7(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.Z(a,t)
if(p===37){o=P.xe(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.c9("")
m=C.c.K(a,s,t)
l=r.O+=!q?m.toLowerCase():m
if(n){o=C.c.K(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.O=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.v(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.c9("")
if(s<t){r.O+=C.c.K(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.v(C.k,n)
n=(C.k[n]&1<<(p&15))!==0}else n=!1
if(n)P.i_(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.Z(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.c9("")
m=C.c.K(a,s,t)
r.O+=!q?m.toLowerCase():m
r.O+=P.xa(p)
t+=k
s=t}}}}if(r==null)return C.c.K(a,b,c)
if(s<c){m=C.c.K(a,s,c)
r.O+=!q?m.toLowerCase():m}n=r.O
return n.charCodeAt(0)==0?n:n},
Gi:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xc(C.c.a3(a,b)))P.i_(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a3(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.v(C.m,q)
q=(C.m[q]&1<<(r&15))!==0}else q=!1
if(!q)P.i_(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.K(a,b,c)
return P.Gb(s?a.toLowerCase():a)},
Gb:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Gj:function(a,b,c){var t=P.fw(a,b,c,C.Y,!1)
return t==null?C.c.K(a,b,c):t},
Gf:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fw(a,b,c,C.D,!1)
if(r==null)r=C.c.K(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ag(r,"/"))r="/"+r
return P.Gk(r,e,f)},
Gk:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ag(a,"/"))return P.Gm(a,!t||c)
return P.Gn(a)},
Gh:function(a,b,c,d){var t=P.fw(a,b,c,C.l,!1)
return t==null?C.c.K(a,b,c):t},
Gd:function(a,b,c){var t=P.fw(a,b,c,C.l,!1)
return t==null?C.c.K(a,b,c):t},
xe:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.Z(a,b+1)
r=C.c.Z(a,t)
q=H.rg(s)
p=H.rg(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aY(o,4)
if(t>=8)return H.v(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hC(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.K(a,b,b+3).toUpperCase()
return},
xa:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a3("0123456789ABCDEF",a>>>4)
t[2]=C.c.a3("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fJ(a,6*r)&63|s
if(p>=q)return H.v(t,p)
t[p]=37
n=p+1
m=C.c.a3("0123456789ABCDEF",o>>>4)
if(n>=q)return H.v(t,n)
t[n]=m
m=p+2
n=C.c.a3("0123456789ABCDEF",o&15)
if(m>=q)return H.v(t,m)
t[m]=n
p+=3}}return P.oD(t,0,null)},
fw:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.da(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a2()
if(typeof c!=="number")return H.a7(c)
if(!(r<c))break
c$0:{o=s.Z(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.v(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xe(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.v(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.i_(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.Z(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.xa(o)}}if(p==null)p=new P.c9("")
p.O+=C.c.K(a,q,r)
p.O+=H.x(m)
if(typeof l!=="number")return H.a7(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a2()
if(q<c)p.O+=s.K(a,q,c)
t=p.O
return t.charCodeAt(0)==0?t:t},
xd:function(a){if(C.c.ag(a,"."))return!0
return C.c.bf(a,"/.")!==-1},
Gn:function(a){var t,s,r,q,p,o,n
if(!P.xd(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bT)(s),++p){o=s[p]
if(J.b_(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.v(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bg(t,"/")},
Gm:function(a,b){var t,s,r,q,p,o
if(!P.xd(a))return!b?P.xb(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bT)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.b_(C.b.gbc(t),"..")){if(0>=t.length)return H.v(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.v(t,0)
s=J.rC(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.b_(C.b.gbc(t),".."))t.push("")
if(!b){if(0>=t.length)return H.v(t,0)
s=P.xb(t[0])
if(0>=t.length)return H.v(t,0)
t[0]=s}return C.b.bg(t,"/")},
xb:function(a){var t,s,r,q
t=J.bc(a)
s=t.gm(a)
if(typeof s!=="number")return s.av()
if(s>=2&&P.xc(t.Z(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a7(s)
if(!(r<s))break
q=t.Z(a,r)
if(q===58)return C.c.K(a,0,r)+"%3A"+C.c.ah(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.v(C.m,s)
s=(C.m[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Gc:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.Z(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.k(P.dA("Invalid URL encoding"))}}return t},
qM:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a7(c)
t=J.da(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.Z(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.K(a,b,c)
else o=new H.kK(t.K(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.Z(a,s)
if(q>127)throw H.k(P.dA("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.k(P.dA("Truncated URI"))
o.push(P.Gc(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pg(!1).h_(o)},
xc:function(a){var t=a|32
return 97<=t&&t<=122},
wW:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bc(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a7(o)
if(!(r<o))break
c$0:{p=s.Z(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.k(new P.bJ("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.k(new P.bJ("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a7(o)
if(!(r<o))break
p=s.Z(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbc(t)
if(p!==44||r!==m+7||!s.aH(a,"base64",m+1))throw H.k(new P.bJ("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hA(0,a,o,s.gm(a))
else{l=P.fw(a,o,s.gm(a),C.l,!0)
if(l!=null)a=s.aF(a,o,s.gm(a),l)}return new P.p7(a,t,c)},
Gt:function(){var t,s,r,q,p
t=P.EH(22,new P.r0(),!0,P.d8)
s=new P.r_(t)
r=new P.r1()
q=new P.r2()
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
xr:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xs()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.v(t,d)
r=t[d]
q=C.c.a3(a,s)^96
p=J.fC(r,q>95?31:q)
if(typeof p!=="number")return p.aK()
d=p&31
o=C.d.aY(p,5)
if(o>=8)return H.v(e,o)
e[o]=s}return d},
d9:function d9(){},
bF:function bF(){},
dF:function dF(a,b){this.a=a
this.b=b},
V:function V(){},
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
et:function et(e,f,a,b,c,d){var _=this
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
U:function U(a){this.a=a},
ez:function ez(a){this.a=a},
dP:function dP(a){this.a=a},
bM:function bM(a){this.a=a},
no:function no(){},
jK:function jK(){},
l0:function l0(a){this.a=a},
pZ:function pZ(a){this.a=a},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
li:function li(a,bK,$ti){this.a=a
this.bK=bK
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
eu:function eu(){},
dO:function dO(){},
B:function B(){},
c9:function c9(O){this.O=O},
eB:function eB(){},
pb:function pb(a){this.a=a},
p8:function p8(a){this.a=a},
p9:function p9(a){this.a=a},
pa:function pa(a,b){this.a=a
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
r5:function r5(a,b){this.a=a
this.b=b},
p7:function p7(a,b,c){this.a=a
this.b=b
this.c=c},
r0:function r0(){},
r_:function r_(a){this.a=a},
r1:function r1(){},
r2:function r2(){},
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
pN:function pN(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
t=P.mL()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bT)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
GM:function(a,b){var t
if(a==null)return
t={}
J.uY(a,new P.r8(t))
return t},
GN:function(a){var t,s
t=new P.bj(0,$.am,null,[null])
s=new P.dT(t,[null])
a.then(H.dj(new P.r9(s),1))["catch"](H.dj(new P.ra(s),1))
return t},
rR:function(){var t=$.vj
if(t==null){t=J.kg(window.navigator.userAgent,"Opera",0)
$.vj=t}return t},
vl:function(){var t=$.vk
if(t==null){t=P.rR()!==!0&&J.kg(window.navigator.userAgent,"WebKit",0)
$.vk=t}return t},
yM:function(){var t,s
t=$.vg
if(t!=null)return t
s=$.vh
if(s==null){s=J.kg(window.navigator.userAgent,"Firefox",0)
$.vh=s}if(s)t="-moz-"
else{s=$.vi
if(s==null){s=P.rR()!==!0&&J.kg(window.navigator.userAgent,"Trident/",0)
$.vi=s}if(s)t="-ms-"
else t=P.rR()===!0?"-o-":"-webkit-"}$.vg=t
return t},
qH:function qH(){},
qJ:function qJ(a,b){this.a=a
this.b=b},
pA:function pA(){},
pB:function pB(a,b){this.a=a
this.b=b},
r8:function r8(a){this.a=a},
qI:function qI(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
r9:function r9(a){this.a=a},
ra:function ra(a){this.a=a},
kR:function kR(){},
kS:function kS(a){this.a=a},
xi:function(a){var t,s,r
t=new P.bj(0,$.am,null,[null])
s=new P.k7(t,[null])
a.toString
r=W.R
W.e5(a,"success",new P.qZ(a,s),!1,r)
W.e5(a,"error",s.gdW(),!1,r)
return t},
l2:function l2(){},
qZ:function qZ(a,b){this.a=a
this.b=b},
ma:function ma(){},
nl:function nl(){},
hF:function hF(){},
p1:function p1(){},
G9:function(a){var t=new P.qs(0,0)
t.f1(a)
return t},
qj:function qj(){},
qs:function qs(a,b){this.a=a
this.b=b},
qt:function qt(){},
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
cn:function cn(){},
m8:function m8(){},
d0:function d0(){},
mE:function mE(){},
iK:function iK(){},
j3:function j3(){},
n0:function n0(){},
n1:function n1(){},
d4:function d4(){},
ni:function ni(){},
iL:function iL(){},
j4:function j4(){},
ny:function ny(){},
nD:function nD(){},
nZ:function nZ(){},
oC:function oC(){},
iM:function iM(){},
j5:function j5(){},
kq:function kq(a){this.a=a},
ca:function ca(){},
oG:function oG(){},
oI:function oI(){},
ey:function ey(){},
oR:function oR(){},
d7:function d7(){},
p2:function p2(){},
iN:function iN(){},
j6:function j6(){},
pe:function pe(){},
pi:function pi(){},
pj:function pj(){},
hX:function hX(){},
qy:function qy(){},
qz:function qz(){},
qA:function qA(){},
bh:function bh(){},
d8:function d8(){},
fJ:function fJ(){},
eO:function eO(){},
fK:function fK(){},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
bC:function bC(){},
dX:function dX(){},
kP:function kP(){},
kl:function kl(){},
nQ:function nQ(){},
qQ:function qQ(){},
jJ:function jJ(){},
iO:function iO(){},
j7:function j7(){}},W={
yx:function(a){if(a!=null)return new Audio(a)
return new Audio()},
yy:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
yI:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
G3:function(a){var t=new W.pL(a,null)
t.eZ(a)
return t},
vz:function(a,b,c){return W.vA(a,null,null,b,null,null,null,c).b4(new W.m3())},
vA:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e_
s=new P.bj(0,$.am,null,[t])
r=new P.dT(s,[t])
q=new XMLHttpRequest()
C.L.hC(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.Hs
W.e5(q,"load",new W.m4(r,q),!1,t)
W.e5(q,"error",r.gdW(),!1,t)
q.send()
return s},
vB:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
x8:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
e5:function(a,b,c,d,e){var t=W.GB(new W.pY(c))
t=new W.pX(0,a,b,t,!1,[e])
t.f_(a,b,c,!1,e)
return t},
Gs:function(a){var t
if(!!J.ar(a).$isea)return a
t=new P.jT([],[],!1)
t.c=!0
return t.b6(a)},
GB:function(a){var t=$.am
if(t===C.e)return a
return t.fV(a,!0)},
at:function at(){},
eM:function eM(){},
km:function km(){},
eP:function eP(){},
cJ:function cJ(){},
ku:function ku(){},
fY:function fY(){},
h0:function h0(){},
ky:function ky(){},
eQ:function eQ(){},
kB:function kB(){},
eR:function eR(){},
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
eU:function eU(){},
iC:function iC(){},
pL:function pL(a,b){this.a=a
this.b=b},
jx:function jx(){},
pM:function pM(){},
ia:function ia(){},
kW:function kW(){},
kX:function kX(){},
l1:function l1(){},
eV:function eV(){},
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
R:function R(){},
aF:function aF(){},
lJ:function lJ(){},
cd:function cd(){},
f2:function f2(){},
iE:function iE(){},
iY:function iY(){},
lK:function lK(){},
lL:function lL(){},
lM:function lM(){},
lP:function lP(){},
lQ:function lQ(){},
lS:function lS(){},
iy:function iy(){},
cm:function cm(){},
m0:function m0(){},
f4:function f4(){},
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
f6:function f6(){},
mc:function mc(){},
mB:function mB(){},
hm:function hm(){},
hn:function hn(){},
mT:function mT(){},
mY:function mY(){},
ht:function ht(){},
jr:function jr(){},
n2:function n2(){},
n3:function n3(){},
hu:function hu(){},
co:function co(){},
js:function js(){},
iP:function iP(){},
j8:function j8(){},
ng:function ng(){},
nh:function nh(){},
az:function az(){},
jv:function jv(){},
iQ:function iQ(){},
j9:function j9(){},
nk:function nk(){},
np:function np(){},
nt:function nt(){},
nv:function nv(){},
e1:function e1(){},
nA:function nA(){},
cf:function cf(){},
jC:function jC(){},
iR:function iR(){},
ja:function ja(){},
nF:function nF(){},
jE:function jE(){},
fl:function fl(){},
jF:function jF(){},
o1:function o1(){},
o4:function o4(){},
o5:function o5(){},
o6:function o6(){},
cp:function cp(){},
jH:function jH(){},
fZ:function fZ(){},
h1:function h1(){},
o9:function o9(){},
hH:function hH(){},
cq:function cq(){},
jI:function jI(){},
iS:function iS(){},
jb:function jb(){},
fm:function fm(){},
ob:function ob(){},
ch:function ch(){},
oc:function oc(){},
od:function od(){},
oh:function oh(){},
oE:function oE(){},
cj:function cj(){},
e3:function e3(){},
oL:function oL(){},
hM:function hM(){},
cO:function cO(){},
cG:function cG(){},
oS:function oS(){},
iT:function iT(){},
jc:function jc(){},
oT:function oT(){},
h_:function h_(){},
h2:function h2(){},
oX:function oX(){},
cr:function cr(){},
jM:function jM(){},
iU:function iU(){},
jd:function jd(){},
fq:function fq(){},
jN:function jN(){},
p0:function p0(){},
e4:function e4(){},
pc:function pc(){},
pd:function pd(){},
ph:function ph(){},
fr:function fr(){},
jO:function jO(){},
pm:function pm(){},
jR:function jR(){},
pt:function pt(){},
eD:function eD(){},
fs:function fs(){},
pK:function pK(){},
hU:function hU(){},
iV:function iV(){},
je:function je(){},
jX:function jX(){},
iW:function iW(){},
jf:function jf(){},
pR:function pR(){},
pS:function pS(){},
k0:function k0(){},
iG:function iG(){},
j_:function j_(){},
qc:function qc(){},
hZ:function hZ(){},
iH:function iH(){},
j0:function j0(){},
qB:function qB(){},
k4:function k4(){},
iI:function iI(){},
j1:function j1(){},
k6:function k6(){},
iJ:function iJ(){},
j2:function j2(){},
qR:function qR(){},
qS:function qS(){},
pT:function pT(a){this.a=a},
pW:function pW(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eG:function eG(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
pX:function pX(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
pY:function pY(a){this.a=a},
bx:function bx(){},
lO:function lO(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qK:function qK(){}},T={
tf:function(a,b,c,d){var t
H.Hh(a,"$isp",[P.C],"$asp")
t=new T.hf(a,null,d,b,null)
t.eS(a,b,c,d)
return t},
wp:function(a,b){return new T.nq(0,a,new Uint8Array(H.cy(b==null?32768:b)))},
FY:function(a){var t=new T.pw(-1,0,0,0,0,null,null,"",[])
t.eW(a)
return t},
FZ:function(a,b){var t=new T.px(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eX(a,b)
return t},
f5:function(a){var t=new T.m5(null,0,2147483647)
t.eR(a)
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
nq:function nq(a,b,c){this.a=a
this.b=b
this.c=c},
pw:function pw(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
px:function px(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
py:function py(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
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
pv:function pv(a){this.a=a},
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
kA:function kA(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
kD:function kD(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
l3:function l3(){},
lZ:function lZ(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
Fo:function(a,b,c,d,e){var t,s
t=[P.B]
s=H.a([],t)
t=new T.hG("Glitch",0.01,0.01,0.01,s,0.5,a,new H.w(0,null,null,null,null,null,0,[X.F,P.V]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.I(null,null,A.a1),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.M]),H.a([],[A.fN]),1)
t.a5(a,b,c,d,e)
return t},
hG:function hG(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
c2:function c2(a,b){this.a=a
this.b=b},
yQ:function(a,b,c,d){var t,s,r,q
t=new B.dn(new P.c9(""),0,0)
t.ai(a,8)
c.toString
s=H.cM(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ai(s[q],8)
return t.b5(b)},
yP:function(a,b,c,d){var t,s,r,q,p
t=H.cy(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dV(a,b)
for(q=0;q<c;++q){p=r.a6(8)
if(q>=t)return H.v(s,q)
s[q]=p}return s},
yO:function(a,b,c,d){var t,s,r,q,p
t=new B.dn(new P.c9(""),0,0)
t.ai(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.kb(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cM(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ai(q[p],r)
return t.b5(b)},
yN:function(a,b,c,d){var t,s,r,q,p,o
t=H.cy(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dV(a,b)
for(o=0;o<c;++o){r=p.a6(q)
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
_.b=b},mC:function mC(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mW:function mW(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},o0:function o0(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},fh:function fh(){},uz:function uz(){},uA:function uA(){},uB:function uB(){},rX:function rX(){},t_:function t_(){},rN:function rN(){},ui:function ui(){},uD:function uD(){},uE:function uE(){},kG:function kG(){},ua:function ua(){},u4:function u4(){},mH:function mH(){},rS:function rS(){},rI:function rI(){},kZ:function kZ(){},tQ:function tQ(){},l_:function l_(){},nu:function nu(){},up:function up(){},um:function um(){},uq:function uq(){},rH:function rH(){},lW:function lW(){},kE:function kE(){},rM:function rM(){},rL:function rL(){},ub:function ub(){},ur:function ur(){},uc:function uc(){},rZ:function rZ(){},rY:function rY(){},uo:function uo(){},un:function un(){},oU:function oU(){},uu:function uu(){},rP:function rP(){},rQ:function rQ(){},uC:function uC(){},hs:function hs(){},tW:function tW(){},tX:function tX(){},tY:function tY(){},tZ:function tZ(){},uj:function uj(){},uk:function uk(){},ul:function ul(){},tV:function tV(){},u1:function u1(){},u2:function u2(){},tc:function tc(){},td:function td(){},te:function te(){},u3:function u3(){},u_:function u_(){},rJ:function rJ(){},uw:function uw(){},ux:function ux(){},uv:function uv(){}},K={bU:function bU(a,b){this.a=a
this.b=b},mF:function mF(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nW:function nW(y1,y2,p,q,t,u,v,w,A,B,D,I,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
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
_.x1=x1
_.x2=x2},cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c}},L={
yf:function(a,b,c,d,e){var t,s,r
t=P.B
s=A.dE
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
t=new L.fH(0.01,0.01,0.01,0.5,a,new H.w(0,null,null,null,null,null,0,[X.F,P.V]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.M]),H.a([],[A.fN]),Q.I(null,null,A.a1))
t.ak(a,b,c,d,e)
return t},
e:function(a){if(C.c.ag(a,"#"))return A.vc(C.c.ah(a,1))
else return A.vc(a)},
fH:function fH(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
nY:function nY(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},M={kp:function kp(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
this.b=b},oe:function oe(a){this.a=a},pp:function pp(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},U={kt:function kt(){},mV:function mV(a){this.a=a},nn:function nn(a){this.a=a},oz:function oz(){},oA:function oA(a){this.a=a},oB:function oB(a){this.a=a},l6:function l6(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,ac,e_,e0,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.ac=ac
_.e_=e_
_.e0=e0
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},lz:function lz(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},mX:function mX(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
this.a=a},ag:function ag(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},oV:function oV(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
FW:function(a){if(J.da(a).ag(a," "))return C.c.ah(a,1)
return a},
pq:function pq(a){this.a=a},
pr:function pr(a,b){this.a=a
this.b=b},
ps:function ps(a,b){this.a=a
this.b=b}},O={kv:function kv(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},c6:function c6(){},dm:function dm(){},kz:function kz(a){this.a=a},ex:function ex(){},ik:function ik(){},
H9:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.u8()
a=J.rE(a,P.d5("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.rt(t))
s=document
J.v0(s.querySelector("#navbar"),"beforeend",a,C.t,null)
if(J.b_(O.xE("seerOfVoid",null),"true"))P.zk(new O.ru(),P.d3)
r=new P.dF(Date.now(),!1)
if(H.nH(r)===4&&H.nG(r)===1)J.rB(s.querySelector("body")).h(0,"voidbody")
q=H.nH(r)
p=H.nG(r)
o=C.a.C(H.ws(r))
n=C.a.C(q)
m=C.a.C(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.hE(null,null)
k.c8(H.fi(l,null,null))
k.hz()
if($.FM||k.a.c0()>0.99)H.eK(s.querySelector("#today"),"$iseM").href=C.c.au("../",t)+"dead_index.html?seed="+l
else H.eK(s.querySelector("#today"),"$iseM").href=C.c.au("../",t)+"index2.html?seed="+l},
xE:function(a,b){var t,s,r,q
t=P.wX().gcT().n(0,a)
if(t!=null)t=P.qM(t,0,J.bZ(t),C.n,!1)
if(t!=null)return t
s=$.xK
if(s.length!==0){r=J.y9(window.location.href,J.y5(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.wY(H.uT(s,q,"")+"?"+$.xK,0,null).gcT().n(0,a)}return},
Hj:function(){var t,s,r,q
t=document
J.rB(t.querySelector("body")).h(0,"voidbody")
s=new W.jZ(t.querySelectorAll(".void"),[null])
for(t=new H.dL(s,s.gm(s),0,null,[null]);t.G();){r=t.d
q=J.xV(J.rD(r))
if(q==="none"||q.length===0)O.He(r)
else O.H_(r)}},
He:function(a){var t,s
if(a==null)return
t=J.aR(a)
s=t.gaM(a)
J.v3(s,!!t.$ishH?"inline":"block")},
H_:function(a){if(a==null)return
J.v3(J.rD(a),"none")},
eL:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fB("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.dW(s,",")
if(!J.xS(r,a))window.localStorage.setItem(t,H.x(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.cl(q)
P.fB("Saving isn't possible....you don't have local storage")}},
rt:function rt(a){this.a=a},
ru:function ru(){},
rs:function rs(){},
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
_.z=z}},Y={oQ:function oQ(a){this.a=a},nN:function nN(a){this.a=a},kF:function kF(a){this.a=a},lX:function lX(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},lY:function lY(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nj:function nj(b,a){this.b=b
this.a=a},dN:function dN(a,b){this.a=a
this.b=b},ad:function ad(a,b){this.a=a
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
_.b=b},T:function T(c,d,e,a,b){var _=this
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
_.b=b},nX:function nX(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},o7:function o7(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},dM:function dM(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
n7:function(){var t=0,s=P.bp(),r,q
var $async$n7=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:P.fB("loading big bads")
r=$
q=J
t=2
return P.cs(A.e0("BigBadLists/bigBads.txt",!1,!1,null),$async$n7)
case 2:r.wo=q.dW(b,"\n")
return P.bs(null,s)}})
return P.bt($async$n7,s)},
GK:function(a){var t,s,r,q,p,o
t=J.dW(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bT)(t),++q){p=t[q]
o=J.bc(p)
r+=" "+(J.yc(o.n(p,0))+o.ah(p,1))}return r}},V={
H5:function(){A.rf()
W.vz(C.c.au("../",N.u8())+"navbar.txt",null,null).b4(O.H7())
V.GR()},
GR:function(){var t,s,r,q,p,o,n,m,l
t=O.xE("staff",null)
s=new P.dF(Date.now(),!1)
if(H.nH(s)===4&&H.nG(s)===1){r="#"+H.x(t)+"Avatar"
q=document.querySelector(r)
r=J.aR(q)
p=r.gaj(q)
p.toString
r.saj(q,H.uT(p,".png","_sauce.png"))}r=J.ar(t)
if(r.S(t,"authorBot"))O.eL("N4Igzg9grgTgxgUxALhAJQQQwCYEsB2A5gAQCCAQgORjHm4QgA0I+mAtkquQnBB8ZmIBhAJ4AjCDEJMQAFwQAPWShDEIAd3wIYCVhxjEdmADa4AXghqyAFghHE4mfMTE8+CYggBuulwlnyBrgAZsQ2dsQAVlBgssTWOALEwQjqDuLaWrK4cMQADpgwsmAAdMQyYphwANaEMND42ABy7JwgAOL+AJL4ACq25BAKAPJiYNo+MCV5RDKyMLiEhNpCCfiIKgAMJQCsMmCIWmC9EACq+MYQNSoA2sAAOuDQ8AiPyI8ln4+Mj3qvKI9TuNiAB1LDGGxhCC0Nz8QRoCASWTfR7yJRvR5qTTaXStIJWXA6bBqUIQC72VwEEgAWWGAGVegAZACaxDAUDy2noBlk0J0hCgxkK8SgbCcpWI-QiYE5jQExmMJLCtkJxC8mFixHU4MhvKiMTiwSFcWgcVcvDhhkREFkZSlOmIuBoggAnAAWEqbADMAHYAKQONaIZWYOI2J2O51isxUkookCVGp1BrNVoYjrdPoDIajcYwSbTIjx+aLZYwVZORDp7Y+gBs8YOuksJ3Olxq6ZuAF14zp2RCwHTZKGwB2HvdfmnxwCpwA1LrU8coqfq4xQV5T95TgCMm0XIAAvoxiGOJxw95vHoyugAxACidNIpyEt73P2XJjX573O73h+Pe7+L8p1IdoXynN9HhXT8Nz3ABaLcdl-I8TxYScMSnIRhmpalbzQZ9Xz3KD13Qx54N3Kd927JhUQWJZtEHYdGUsPMOyon45FossGOKdojECUcALQ6dHgAESwromlIJp8PAwiP2I4SQB9JD-ynQCYIwrCcLwsCl0g+SgMeZSKLYmjS3oodilvABHKATFYx5KJkXtBWKbiwFuB5ULPAEQDnBdqJAIj0y3RzkNPf53hAMTqQkqT8MC4LfIADkczs5k4izGOY7RbnS5gSzomB3N4rBAjyjLzOKyywBsuzjAq-cgA")
if(r.S(t,"karmicRetribution"))O.eL("N4Igzg9grgTgxgUxALhAaQEoAIBGBLCLABwEMBzJAGhADsSBbJVAWQUawGUAXKAEwRpcQ1LggAeQ1BADuNBDAEN5WPGCxcSAGwDWeGmXWEAZjDwDeaiDXUALBCsHy5XAHRYAKjYhh7m7-LUfNkMsACsoMC5cewUiBBIuPQNGRjUuGwSsOGhNXiwMgDd7HAQBYm9RPJwATywSLABWAAYAWmr4mBaIXKxoLi6jFq5oOBssegh6Nxk5BTpGGCxIkhguQPkCpKwoIixxLhgSFpMEMDGU06wTSdt7fiJ0yyMsDAReXjxXYRAcEjhtMgwaA0XgAOSUKBAAHUrGRNAgYTBtC4iPpvgc8GQKDAAMIZGiISFNFwAdga3zAiDkYHcEAAqjQ-P9IQBtYAAHXA0HgCE5yE5mFwBGI5F5wk58zF-JArHYrx8K1G8k5lE5ogkfM5M3kigWSw0q0CcRBW0S7AYJDAYC29RsUAo+QgMH4vWeCj+iSsKnoorUJBBWHZQZACk0CRIOHhQc54zYpzcADEnXsijBataeAkCNZ0ghaoV7P66kQiEDS3gEvYyHgjJQlnAFAI4CRdsnskRqqRli4gzRe548-kSEUaAByKIeqBaTS1Lidt51K5QTSaJYCUQE+x6LDSUraMA98U-P4AoFQEHgxia6Gw+GI5GosgqtWmLHyPH+xDX4lk5-gKmnLSDJMto14sgAun+ChgMuazcAkYBgRywaStGKBoRwACCGA4phHDuAAku4dIACIAKJoaqwYFFoUC8sG-LBgAjGhAC+kFHhib4wPBawADKnD4MBgRxqogFx2K8WAADi7qiMJ6EgBBf4SfIUlkQAjlOmhIWhqEMRh2G4fhRGkRRwZUZyNGaHRaGMZyLHBuxnKsXWHJcrAX6KYK+CEKQFB-qhimyqc9CfDYKn7Ne2pzEoiwlNWNBqAoYViDaAYpZa8mmnYsapLc+bDvYXgrPwvBuCFyUIEYOqbr0uaLBcajbvUPiaIMCg1XMiRaL0sAQDgTreG4A7pgaUTDFgfg+IYUCjDu4UpvI1TpFsfTWi6uYOPJzh1Gkdi1IciAhNopS7DsC3pLcU2VpEhhEHgcAHn+vz-ICwJgko14wvod5Og++gqa+2Ifpu36kg0f6UgIgH0oyED-CJUGnLBYBSbpKFfQZwZYTheGEcR5GUWh1m2djDlsaJL6YpJGj8YJyqKcpnHA2pdMyXJjPSszYmqTx7OadpGMSljmo40Z+OmUTFkk7R9Fi5yABMlMuW5nKQJ5UoCtgvkigFR5BdKIV+M6kUaopHCwO6miqPQdQBjQeA2HgNtgHbDZndthAxbqyijmoTUOHsWm9YwlqwAgI0HVgNCEH4+jKJ1tXHXAVvrktghgHWOBQFEeiRPEeSQOwkSHAndSaDtlY7k6PQQM8Ealx6C5GJiEd+gG9zQdaVhuJh4xZco9d5ZcGRqLH0h2AoeyaDNk1kBA0yyLVcVDusZRbQcuc2FHOoqJYjK1FY9hb-YCBV6uFx1v6eS5rUzbWHIqZ7JSLZbq4L0nu956fVeik-XCBAfFvAHkfEDGm758ReWlD+SGR5obUiAvDRGTMqYhhRpXNG7Nha0FFuhcWeMTKE3Ms+aics7JoUci5NBfMpICStFzTkPNqbcSkrJeI8kkYswgfzBCgstA4P0grEAuNjIEzMsTMhNl5b4M5AAZhViAdi3xoKoykqydyhtOSiMlsQv8pMtYgBYko8C6JWa8PpgwmAGiRZ-2lDoohEijwGOvMY5RIhzFsM5tY1AEEzE8PUiHTQrJTGsSAA")
if(r.S(t,"authorBotJunior"))O.eL("N4Igzg9grgTgxgUxALhAJQQQwCYAICCAQgFIDkYuARgJYQB0IANCAHaYC2SqAmgmA8wAuCAB6CUIXBADuLBDARtOMXGEGYFFbAgQAHADYBPXJkGqInXADNqCurgA6IXvye5BACwTGwmQ41xvPlwFK30EOEFqFgBzdy9cbEwWOGi4sI4+ARBKTDgAaxiYaBZsADlMiQAVAAkASQBlRoAxOrKAUTpdWKYQQRhqGJj5AGEPZMQJAAY6AFYATl6wRDkwKogAVRZ9CAKJAG1gJ0hYRCdkJzorp0YnJQRzpxqYdleruhunYTFHyRk5BT3FTUCjSUxwDxpEy4ODQAwIXDsTD5BHQMxWYrsXDRMDUbTmSyUKBgLz8XBVLzGdhQQTCFQOBkgDwvN7XRkmCieby4KC6JLCeIIWyqSG6XRQop4+yfHJ5QrFKClCqcX4UkF1MAAGQgADcEHUAOJQPj8boxGX9QbDGBjCYPFBOGazGXLRR8dZbHYFX77AC6Ms0UH0gjADXUIZ9R0Z9wZj0ZhE1+AaAAUau0ALIAeQAGtxY0x8zrMPpjfmLoyAIz5gC+ASjd0yZfzaEz6ZGrfT7TQecZt0ZRZLD0Z5acVcZ1f9Bb6AyG8jDpi1JvkPsnt2nVrn4bABoUpmXDpAfotM+t85D7QAjlBiyunLXcEdwNB4PaLiB3jKYwe6iw6XworEACEwEWqIgi-FIsjyIomTAqC4KQrE0JWIq8jFrgujFIgYC4hALC4NI1CeCYYoaIoZgxOECDSoyP5-moaTAYB+YBFyxhwDA-jYjELAQAMSFcoktiCMYOwQPkFAYhYgqIs+AKuFOuQFEUJTlI2B4NBYCB4QgzRQAU0QACLUAg2BdLEx4bja4wpK+jpzC6Kzups2y7Pkt5ToGwahlukb5jGw75gmSaphmOY9p8-bFqWgWVjWdb+Y2sVOEmDQ1JmmpdhFBZRYOTZxeOq5fCem4LpqS4wB5a6WrOMBntuu50lVxVWfVl7XvoHkTr0XkhvVByPl+b7BSmaZZrmMoDqWB5ViA96Depb5oIaNRVO0mYbA0uDNBs3aTdFdkgLN3VCCVdVbuVOHyAcvq9DVp5bjuWB0jdd1nW1V7Fq91ZAA")
if(r.S(t,"jadedResearcher"))O.eL("N4Igzg9grgTgxgUxALhAJQQQwCYAIBSaA5GLgEICSA8iADQgB2mAtkqgIpQJgAuAlhAa4MmADZ8eATzogeCAB48UIXBADuDBDARNWMXAAtMpAEYIA5lCE8IuAI5deAodrETJAOly4AggDM5fUxcUUFzXAAraBhNSVpcHgMESVxWBB5cNQkDBKTcTAAHAsxtBgyfKESIfQg-XIQ+fR1+bWEscSkvCh4STIaYbC8AFSSUgGsEBALccz5zc1FuBmr+BnDMDPVNUpYtfJNoDLVMSVJE5Nw4TCErULgx1OqEDxePIgBxADkqAGUKH6IAH5gbgAOpGOQANz2iQ2uD4YFeMhMmHu5hg0AY2E+u2UABEAKI-AAKVCGHgKaxkPBgc3MWgAwkYGIhlAAGDwAVhkYEQmjAQwgAFUGHcxsoANrAAA64GiiFlyFlr1ltFlugQitlIuwWl41zwIg6klVsrkii1Ki2Wh0u30RlIkFE0LwwT8CDUuGJQoAWj6ADJE-JY3AMgASPn9gc+7yDsIy518lQM1UMxhCmD4eEOuD8qfOzGGo1wYEmzBLtgKED4ZUWYERuBGNYemAOlUyEMuEF1l2uuGwEC8-ogEAeVl1MSwiXq+SKJWaufzeTg3YQXbKGNE4jWuRr5lI460mg2Ble3jDUFPuAAsiczPVtL1gsUeIEhEltIDTSAUWiMeOcVYS1CRJMkKTWb8aTpRlmQVFBZQ5ABmAB2b9eR0bhBRFMVLQlABdb9tDAKBRB4MAfh4DYwFwmVpXVXY6K1OiQC+X5-kYugOMhMQuA4pVmIARg4gBfAjONkWl5i0CiqP9bhSxgXCxLVCToJgGSyPeVxAhojiNT4jjWL+H4OLVZjuNEXjmP42UhOY0TIMk+l1MosiCQcMQlNlYT4hlOVYDgpUQBVcT9PgkAmWuek2jcKRIIUHhLVUDQbQ1fRiOwXVRRSQ8YH1LFSAQaEYEkRI9yLfpcFcY14VIYIwD4ZgSI2Zx4kENcwAMCQpHiSB4QyK4hHvGs-BrCQEFEFI4GZelXRDZhuz4UaEDwEwUkTNQuuYUhahCcaYDESbgxSYxOogRZMmyCtWASRq10EepGjTAqvFBCbRC8ZLtltPQ00dCAbv4G6HvOJ7mWwBtfBDCQElgBgdvbDjTpTRYSo42q9sCQ6TpLVz4WsLrHS6191q6tYKpSEwoHWEM-CgetgzwVhMoug003uGcGvLKx+FEeoUiMaFUkweQVtUdtuNpaBHVcs5O0gcdcDGGtsGCcwR0GRtCcurd+wQUaGHGo7BbXZYSy0AR6aqqYtDgemGsEBtv1-MZ0UxbEGPCkDSXJSlzEctTIpZTVwqQ1DxPQ-ksNFCB7i88SiJIsiNOo8KpT0hjrI4ihrx8d4KE+HwhmoT5TK4njNSzwS2RE3yM6AqvZR+dghQoPE8UDH4CU+Luy-MiuDOr2vcFo+iG6Y2U8Soa8C58T4GQJPvZQsqyJ5AASa-suvmP0xuQGJOefHDRfmLM5eB73jfh9HxhM7Xn5PgJHwAGkfAPhkKCGABNJeQBXyu15Xy3iPeuAD4LMR+D4NADIfA-GLkMIUhJf7-0HrZTe3lt5jzATZEARIhgEgJNeZBF816IWvqA1BIAyBoB8AXT+iCT6mn7pZbBHEgEYJATvO+4DZT4CoGQAAYv6F+RJiEsMoZychXDx48IitPa8BJoGMM4sw1esj2EgB8pwrBlD-QUAEUSHwQoF5iLUTgjRWib67zXnnZRZ8-4kNkQAWgEpI4BVjuE4LDFQNAvdT7l3EXvAAHFInRe985oCGGGUxrCh7uIoXvGBAiBGz2LlQUu-jVGxLQaE2+MicGwJ+N4wMaAf6ZPPoEwB6DNHKTNE5aSss5L1i0PHFSUEpIuSolpKcLS04ePyYZb4xkYmUIAEwiVqapDpKd3JQE8mnMSljZQK3gCHIKIUVJhSCj4OAiACgZCNO4eKFpwpfVSnaa2bgABe3Bchwmqu4DGm04QwwRBTPWcAsxrhsLjKY+QGo9jzEER4rAygJFsIsBMeQKhVHSgULAYwvAcUIMgXAQorxhmSF0fsggiAZDGMsT0m0dC4EkNAIgrRXDYD3LuBst5JDDR6KQbAsAaWJh8AUWkfMBEjlEKQTl1xEU3jvGuCQvQWW0h3ImAALAAegEohXAYZDqqDqAI3YuAqZ8FEHgKABRsUDgYHi-IcAeBzK3FNecdyMhNWmq9TszANiBFIAiUl5LKVYGpTuCQ9q+DTVSFgeGbqoCXKZpTAQ8RNp+pyKwa4pAyVQApWuAoogTg0vEO6EsjVI1dX9bGoNCak24AUCm6obK8idRhvGXAFB4hsz6o6hgKQIDnDyvEE2uACjtgbVAf1u1oilmdLcmsNgiyCuDUOCwPrcBf2gIzTtCAIAprXOICYwbhZrphiqtQKwcjTvBOkD8-UwBEHyP2KAzATDFvkPC2koLKJ8xXMHfZe013+iWggH42bVBBCEDgalpq+BC3THTDm6IoBXoOgiGl5gNWrrXKCOkqMv3llTJAVgZUdwRHphkPqfhU2bHbAIueU9rz-NwD8MgQo0BkBQ71SYNL4VLouvBjscIKA4oxth3grwPA9v9WrDWu5yY1sMEutcHHBpK0mNMAc5aETxA4x2ht1wUgprjb1WwjbSZ7lIBx44YKfkDjHQwB4Cb23tV4JNeIQKSx6qrDAVY4RAYGH-OYHIZVETo28NaHYv0ERGoyNVI6xFWjPIyKp1V1qA3XB4PEKmEWMiLGMFCi4HbEw3KEKx1EezKLByiw8qQMxqw7lswWXAhKPDO1RK7f8WJAJrMnkSH24F-biXac5IOgUEJcjQnyTCwoY5xwWYRbgSdyKy10tI7J+8i4UG7iY8pDjKnqOqQ5dr9TOlkSaQpVpdS1Ip26RsXpQV07TcoUZdiS2UF73GfZSZHWGlUVmfM07-SZuFOKYospTCKlmI4mtxZeEZCJ1IhNqiko-JbNlJdky4kUHhSEjU6km2U47a0JKYH9BHtbbAEdwImOUcHdli90QhPhJAA")
if(r.S(t,"someBody"))O.eL("N4Igzg9grgTgxgUxALhAGQQQxgOwASYBG0ALnoTBAA5IA0IOmAtkqgMoQvEAmAngQEscAcjIALTFSq8Q9EggAeJFCAgB3HAhgJGLGHgBmQ7mDwkxCJmAQAbA3iEE8YiGCoCSmG7TxhPMIQBzAjJIFjxuKG4EB3xMZ0wyAxtEmyEggDo8NijonBteHwkySOjfD1M-GEwBQLEyKCoCHG48OBsIOABrU3NLWLMLQ0xELIAJdTwYKIQM2RBCEa7AyigWgDlmVhAJtw8vQgRuDKocQPmSAMDArQBhCRxEFQAGDIBWebBETTAAFQgAKr5TpdFQAbQAuvNtGAoDYSGA2J4EeDgAAdBhbDHIDEAJQAkgBxMa-ACiAHkAWw8AAxAG4gCaGNoGIAbl4oAhsRiAOwYgC+PnRmJY3JA5IAsut8WhyQBBX5jfHrQnMtkcrkoDEAZgFQoxuk1OJAbFJypp+NJaAAItlbnK0HLCaS1SB2TZOWKALQANgFULkVxuMCRiTAGDA1hg4IDIEutWDoYRhO0iS0MYuQa0SbApIAjlAvBn+UA")
if(r.S(t,"dilletantMathematician"))O.eL("N4Igzg9grgTgxgUxALhAGQQQxgOwJY4DmABJgEbQAuxAIgLIgA0IOmAtkqgMpsQDWCWgkoI4lCDGIAhTJREwAnsTQQA7kxAiAHpRQg1OBDASsOMAORhiYADYIEAB2J4rBeTCgORAE2JklmMQAFniEQQC0DniUcEEIvrF4MA4AdMTSCABmEoIGRibsRsRwmDjE3i4lML4hYAD0cZJwEDhgcHjQYIZgrtSJyVaYhJgEadJQ1HnGpkWYNsaY3kqxpYTxxJRxfrLyeAhWmy7EClgwYwCSB42CgWCixtRgvALlwqLiklMFZuUQ+zjmah8HBqUgUCYAfgAhBoyJg4HxCDBoDhvAA5Qp6Wz2Lx4Dj0FIOIgaSgwUJrGAAYSCpUQegADCkAEwaNomfYAFQgAFUcDYIAi9ABtAC6GmMYCgNkoYC4lFkYGFYuYpPJRjlCowPSMwuAAB0WIUDcgDVIAEoAQXOaPOHO5NAAogbGAaAG5zKAIY0GgAsBoAvsrNGTCBSNTKAOILeRKkkhsPymUOgCOUDmsf9QA")
if(r.S(t,"tableGuardian"))O.eL("N4Igzg9grgTgxgUxALhAdQJYDsAEAVAcQHIwcARBAQwBMcBlBMMDCLEAGhC0oFslU6aAHI4AggCUAwjgCMHEABcEADwUoQZSlgDmAOn04AkqQUALSgvq8oCADY4AYqwWVsCdjgAOGWxEsQAMxwzBHoXGDBTDE8cSUoYBBcAawQYD2wA3mhSB2xKewAhCCYAfhwATWgcACNE3RwIAHcsVIRuPhgcaghGGosFW1DGjDMcKJ4G3BCuhDgkhqDpuITk1PTcCBhqkYaAN1Tg01DPWy1EnAAtNoUYKB4AWhkcSlIdjFJqiB5a2mqAT0OoWqsCw2G0OEaCTmC0BYXikWisReKQU9SaLQS7QOngSnnivQCm2euBUcBGYL6CgGCH09WBlh2ChBpGg-haELs9hOlEQtE8UCwcFMwQgsLASSgtns7xwbWg2mFClF1RgFOmuW4hWKpG6zV08mqPKS2hg0Cw1CEvH4IACGAVChkuk8OnkNzt2lSknMgutAAZdABWeRgRAtMB4CAAVSwvjm6gA2sAADrgaDwBAp5Ap+45lPsFNYzMpwQiCTSABMeZTSlURY0bT0BmMhwsVh4NnsTiwLjcHmmRRaRxo60yPGyjjyWtKFSqtVRDWaqUxVs63V6hqpgwhI2F4xmCBitRaFkVRxwYFgmUQMIAaqlfJjHh5hmZsLC4JR9i3LKZsr1pnQ0D2JIMB-GALj2IEsIAArMKwGBwDgAAymy0JaABe8RJPiWD1ChEBJKQtgYCkbYds81SQFsCC0EcnSQJKz5REKODaJ+oR7pQrG+MMOg1LYNiyn8NILhibQrl4uL4qQhKdFosrKGSCgUhu1K0jUUAMpYTIwFgLKad+ODCZYlBsW+jKUCkLIxgCrBDJyXinLyXgCixSpihKUoijUqp8eqk44EUTBdOiuhViAhpzCaZoWlada2va5ZOjo4VutoHowF6WiIHW-oACzhSGbSMBG0axkkdaJkm1WprAOU1VmNU5vc1VVjVhYNa1IAlmIUg4AAzF1+Y1TWChdY1KYUDoUCmOpzZmK2dDWHYjjOK4LQeGAswrDggw0AcUHTLBLCgoh4iMLAHo+iOWRQDkAVBWAZSVFANR1KJrRYquPQfP0W4vruGATNgzDUKE0xwM4pr2KaXwwtMtqajgBB+C4pgxghwoALKzOYHhwLAmIDACb6bNs-hBAAovEZh4RABFESRoRLe2dgkA01Q9i0tDTAxtgsosZ5+HR54YMoyOo5Q6PESxH6eFzpBaLQrC2ACLQ0dZoRjgkb2yRxoQfrgPLKbsFjg2eKNUlLGNCuzNyCZ4TSpGii7Lh0kkHtJOCycSClKSpf00gY9I4IyzINAZYNgN4ShvRSCAAI5QNEng0duoyO40BzxNr6TaZZvQq7Z7JZ153LOfygqKqKvOefY7kqmqZ4avkgXaiFepDV1kXGqaAqxXw41dQlpgKP1yXaF3I2qulnrevVRY1f6g01cNKZFWGpUxhAcxDzVVWtV1DHpofe+nyAzWn6vV8FnFV8oDf3XCL10gFffa+H4oKhjffE2f1N2gbBzRMOYSwLNyJdhcKCdwXhTBgQQq3BA3wIDUCBtceGZ4KDgVNMJGA7NAKMVDlgUc44W5TiejOV6c4XZiS+iFdcgd06AwmBYCAMQlgvGpDCMgd0FAeFVMwPirJvamgmNMaK-dJiXGuLcB4MgmKtEODKfI9hahsVwshemhFdpMzImzUgZluY4Eht2aGexs7nkaDnGE3AsAQHuNQXhXgaYIUGGAJimMcA8ALjgKA7Czz7FAqxPu5oxihHAkrayNDPoSRxJ7BIMkiTyVJOSPiqlBjqRDngAAEoYOg+BDBY0ph4LipcuROTTpXNyNczziklPYYYXkhAAHk8BvVlHYqACpvKNz8s3B67ddQaPRDE926tqAmBqdgeY5gYBgzkqEm4AJTLrVpI-D+3cjQSPNJaQev9H4jwUHlCe6zH5pQyllH0j8-5dX9JWd+j8N4lSjNvXe+z74HxvvfY+C8vmfxuX87MuZAWfw2YCrgd8QWdShTVHqZYcB5WQDgcQlMyDNJhdfDFX9axYoBX8kAhgFB2zQdEt2BxzCJMkcIxooDARqwQGndyiMVEAn5CZEkiyamhDIW3YKUE6BA1IJgMwwihB3FqDAeo4CVqQPWqEGUF4cTvDTv8D6ZK8GkCsTACYSCVQ8hgTSzxCQeDYAmWMIGMIaWijPAkFlocwDqS4gEAU9xfC7DBM+ZVcAYBGgpAEVUbRqBSuWjDJBurUikCiKQJBfgTruJwAkAAVrMZSfSDZQwgPXTBjAbgQFwfgoCYwXjmM6CEHgJTQkymZVKAE-qGU9NCEkHwgxaAA2EdMIG2sIIjABCaLQShfgAlqBSPEMAKawiwbm-NpACG2HqIS4IBdSB2K8Zsc28k7IcjLhUlyVdGVcvPHXby3RzwQDClisF+Ke7bIHhmXFGKUyHOOc6SeF6H2KBnhc+ed6YUPyxTId9l6vngFDM8sqO8Kr3qxfGAAuoB99CTJQKDAHQFwyH314uA58h9v6Oo4d-Zh-D99xDNKxpIUjRTxDlCI7+oDNHP6mwEj++jwHCMsZTG-djj8AC+cG31YvOakVDFgwBIUYFtGAGH32wfgwJz9Qm0NgAILapQkmoO-uw1xz+eGtP-N08R0j5GsaUeo-p0FZmGP5BsBZs+FmQABhszVXjsnf2CZgMJ5DlMk75Ck9Bvjv7nMPPvoh2wyGPNgGuY-TT4KdMgr-b+kjZGKOUyoy5qFIBGPWfU+lgDWLAvn0vR+90CmRNiaYKkSLHz-Pmfvm58LymqCqcq+fGTQXz51cU15qAPn3kteTFi2L4K2Pn0S0ZkzaW4uZeY3F4bn8V4Beq11fLHAuohbC4ps+IBou3z2efPFIBRvJdS21yzTHmuf1y+fZba8iuz3c4psrEnNutbatWeT92RMNbNmpxeKYXsrensVj7nnvO2Ge-18+g3fuf0O8ZlLpmCuPym+drq9yrv+ZAM5lbIA1soY2w-LbEOIW7fiwdwzR2EcA5TMj6FKZLuY7g9jjrpXxMVYJzJpn736sqbZ1mLbjP8y3YyuFrrPn2dE7w6T2H43MXU6sz+0n9Ose8fkLj8LCZkzE4zAT6X8PwrI4JwBhnroucPdZzABMMGTdA+5411Ilvrd3ZF6DjXO3td8916l7HBu+e+hTCr7jQA")
r="#"+H.x(t)
p=document
o=p.querySelector(r)
if(o!=null)J.rB(o).af(0,"void")
n=H.eK(p.querySelector("#layWaste"),"$iseR")
n.toString
W.e5(n,"click",new V.rc(),!1,W.u0)
r=P.B
m=B.eC
l=new B.oN(P.a4(null,null,null,r),P.bX(r,m),P.bX(r,m),!1,null)
m=new A.hE(null,null)
m.c8(null)
l.e=m
l.bh("headcanon")
p=J.xZ(p.querySelector("#askAB"))
W.e5(p.a,p.b,new V.rd(l),!1,H.P(p,0))},
rc:function rc(){},
rd:function rd(a){this.a=a},
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
n4:function n4(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
nr:function nr(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
oM:function oM(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
z1:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dn(new P.c9(""),0,0)
t.ai(a,8)
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
if(!l)break;++n}t.ai(n-1,p)
t.ai(a,8)}return t.b5(b)},
z0:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cy(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dV(a,b)
for(q=e*8,p=0;p<c;){o=r.a6(q)+1
n=r.a6(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.v(s,l)
s[l]=n}p+=o}return s},
rW:function(a){return new V.lf(a)},
rV:function(a){return new V.le(a)},
yY:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dn(new P.c9(""),0,0)
t.ai(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.kb(s.gm(s)))/0.6931471805599453)+1
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
if(!k)break;++m}t.ai(m-1,o)
t.ai(a,r)}return t.b5(b)},
yX:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cy(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dV(a,b)
for(r=e*8,o=0;o<c;){n=p.a6(r)+1
m=p.a6(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.v(s,k)
s[k]=m}o+=n}return s},
rU:function(a){return new V.ld(a)},
rT:function(a){return new V.lc(a)},
z_:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dn(new P.c9(""),0,0)
t.ai(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.kb(s.gm(s)))/0.6931471805599453)+1
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
if(!l)break;++n}k=C.f.al(Math.log(n)/0.6931471805599453)+1
t.ai(k-1,5)
t.ai(n-1,k)
t.ai(a,r)}return t.b5(b)},
yZ:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cy(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dV(a,b)
for(o=0;o<c;){n=p.a6(p.a6(5)+1)+1
m=p.a6(q)
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
i:function(a,b,c,d,e){var t=new A.a1(c,e,null,a,!1,P.a4(null,null,null,G.a0),0,3)
t.L(a,b,c,!1,e)
return t},
a1:function a1(a,b,c,d,e,f,r,x){var _=this
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
t.eQ(a,b,c,d)
return t},
rO:function(a,b,c,d){var t=A.fQ(0,0,0,255)
t.b=C.a.aa(C.d.al(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.aa(C.d.al(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.aa(C.d.al(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.aa(C.d.al(d*255),0,255)
return t},
yE:function(a,b){if(b){if(typeof a!=="number")return a.aK()
return A.fQ((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aK()
return A.fQ((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
vc:function(a){return A.yE(H.fi(a,16,new A.r7()),a.length>=8)},
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
r7:function r7(){},
wl:function(){if($.wj)return
$.wj=!0
Z.zb()},
e0:function(a,b,c,d){var t=0,s=P.bp(),r,q,p,o,n
var $async$e0=P.bu(function(e,f){if(e===1)return P.br(f,s)
while(true)switch(t){case 0:A.wl()
t=$.$get$cR().V(0,a)?3:5
break
case 3:q=$.$get$cR().n(0,a)
p=J.ar(q)
if(!!p.$isdM){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cA(q)
t=1
break}}else throw H.k("Requested resource ("+a+") is an unexpected type: "+H.x(J.v_(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.tU==null?8:9
break
case 8:t=10
return P.cs(A.mS(),$async$e0)
case 10:case 9:n=$.tU.ew(a)
t=n!=null?11:12
break
case 11:t=13
return P.cs(A.mN(n),$async$e0)
case 13:if(!$.$get$cR().V(0,a))$.$get$cR().i(0,a,new Y.dM(a,null,H.a([],[[P.eT,,]]),[null]))
r=$.$get$cR().n(0,a).b
t=1
break
case 12:case 7:r=A.EJ(a,!1,d)
t=1
break
case 4:case 1:return P.bs(r,s)}})
return P.bt($async$e0,s)},
mS:function(){var t=0,s=P.bp(),r
var $async$mS=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cs(A.e0("manifest/manifest.txt",!1,!0,$.vw),$async$mS)
case 2:r.tU=b
return P.bs(null,s)}})
return P.bt($async$mS,s)},
EI:function(a){if(!$.$get$cR().V(0,a))$.$get$cR().i(0,a,new Y.dM(a,null,H.a([],[[P.eT,,]]),[null]))
return $.$get$cR().n(0,a)},
EJ:function(a,b,c){var t
if($.$get$cR().V(0,a))throw H.k("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vv(C.b.gbc(a.split("."))).a
t=A.EI(a)
c.b3(A.wi(a,!1)).b4(new A.mQ(t))
return t.cA(0)},
mN:function(a){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mN=P.bu(function(b,a0){if(b===1)return P.br(a0,s)
while(true)switch(t){case 0:t=3
return P.cs(A.e0(a+".bundle",!1,!0,null),$async$mN)
case 3:q=a0
p=C.c.K(a,0,C.c.ea(a,$.$get$wk()))
o=P.d3
n=new P.dT(new P.bj(0,$.am,null,[o]),[o])
m=H.a([],[P.cD])
for(o=J.xW(q),l=o.length,k=[[P.eT,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bT)(o),++i){h=o[i]
g=J.aR(h)
f=Z.vv(C.b.gbc(J.dW(g.gH(h),"."))).a
e=p+"/"+H.x(g.gH(h))
if($.$get$cR().V(0,e)){m.push(A.e0(e,!1,!1,null))
continue}d=H.eK(g.gbe(h),"$isd8")
if(!$.$get$cR().V(0,e))$.$get$cR().i(0,e,new Y.dM(e,null,H.a([],k),j))
c=$.$get$cR().n(0,e)
m.push(c.cA(0))
f.bb(d.buffer).b4(new A.mO(f,c))}P.zl(m,null,!1).b4(new A.mP(n))
r=n.a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$mN,s)},
hp:function(a,b){var t=0,s=P.bp(),r,q,p,o,n
var $async$hp=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:if($.$get$tT().V(0,a)){r=$.$get$tT().n(0,a)
t=1
break}q=W.fl
p=new P.bj(0,$.am,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.e5(n,"load",new A.mR(new P.dT(p,[q]),n),!1,W.R)
n.src=A.wi(a,!1)
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$hp,s)},
wi:function(a,b){if(C.c.ag(a,"/")){a=C.c.ah(a,1)
b=!0}else b=!1
if(b)return H.x(window.location.protocol)+"//"+H.x(window.location.host)+"/"+a
return C.c.au("../",N.u8())+a},
mQ:function mQ(a){this.a=a},
mO:function mO(a,b){this.a=a
this.b=b},
mP:function mP(a){this.a=a},
mR:function mR(a,b){this.a=a
this.b=b},
ns:function ns(){},
jy:function jy(){},
hE:function hE(a,b){this.a=a
this.b=b},
rf:function(){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$rf=P.bu(function(a0,a1){if(a0===1)return P.br(a1,s)
while(true)switch(t){case 0:if($.xA){t=1
break}$.xA=!0
D.FR()
q=P.B
p=[q]
o=H.a(["metal"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,0.3)
$.$get$b().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.aa
H.a([],p)
o=new G.bH(n,o,0.6)
$.$get$b().h(0,o)
$.vM=o
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
$.aY=o
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
$.K=o
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
$.aU=o
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
$.bi=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.G
H.a([],p)
o=new G.bH(n,o,3.1)
$.$get$b().h(0,o)
$.bn=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$b().h(0,o)
$.ce=o
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
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.mq
H.a([],p)
o=new G.bH(n,o,40.37)
$.$get$b().h(0,o)
$.Ep=o
o=$.H
H.a([],p)
o=new G.aI(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$b().h(0,o)
$.au=o
o=$.tE
H.a([],p)
o=new G.aI(o,["glowing","bright","illuminated"],0.1)
$.$get$b().h(0,o)
$.aP=o
o=$.tE
H.a([],p)
o=new G.aI(o,["obscuring","dark","shadowy"],0.1)
$.$get$b().h(0,o)
$.aj=o
o=$.H
H.a([],p)
o=new G.aI(o,["calming","pale","placating","shooshing"],0.1)
$.$get$b().h(0,o)
$.bk=o
o=$.G
H.a([],p)
o=new G.aI(o,["nuclear","radioactive","irradiated"],1)
$.$get$b().h(0,o)
$.c1=o
o=$.H
H.a([],p)
o=new G.aI(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$b().h(0,o)
$.aX=o
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
o=$.G
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
$.bf=o
o=$.H
H.a([],p)
o=new G.aI(o,["expensive","valuable","bling","money"],0.1)
$.$get$b().h(0,o)
$.bg=o
o=$.H
H.a([],p)
o=new G.aI(o,["edible","tasty","delicious","savory"],0.1)
$.$get$b().h(0,o)
$.an=o
o=$.H
H.a([],p)
o=new G.aI(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$b().h(0,o)
$.ai=o
o=$.H
H.a([],p)
o=new G.aI(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$b().h(0,o)
$.al=o
o=$.H
H.a([],p)
o=new G.aI(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$b().h(0,o)
$.Y=o
o=$.G
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
$.aT=o
o=$.H
H.a([],p)
o=new G.aI(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$b().h(0,o)
$.bq=o
o=$.H
H.a([],p)
o=new G.aI(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$b().h(0,o)
$.a2=o
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
$.aW=o
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
$.aO=o
o=$.H
H.a([],p)
o=new G.aI(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$b().h(0,o)
$.be=o
o=H.a(["perfectly generic"],p)
n=$.H
H.a([],p)
o=new G.af(n,o,0.1)
$.$get$b().h(0,o)
$.vQ=o
o=H.a(["a sword"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.f9=o
o=H.a(["a hammer"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tp=o
o=H.a(["a rifle"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tz=o
o=H.a(["a pistol"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tw=o
o=H.a(["a blade"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vG=o
o=H.a(["a dagger"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tk=o
o=H.a(["a santa"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.hi=o
o=H.a(["a fist"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vO=o
o=H.a(["claws"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.mi=o
o=H.a(["a grenade"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.mj=o
o=H.a(["a freaking safe"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w3=o
o=H.a(["a ball"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ei=o
o=H.a(["a trident"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wb=o
o=H.a(["a card"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.mh=o
o=H.a(["a frying pan"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tm=o
o=H.a(["a pillow"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ej=o
o=H.a(["a machinegun"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ts=o
o=H.a(["a shuriken"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w7=o
o=H.a(["a sling"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w9=o
o=H.a(["a yoyo"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wd=o
o=H.a(["a cane"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vI=o
o=H.a(["a shield"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.f8=o
o=H.a(["a lance"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vY=o
o=H.a(["a ax"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tg=o
o=H.a(["a sign"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w2=o
o=H.a(["a book"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.aw=o
o=H.a(["a broom"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.jg=o
o=H.a(["a club"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ji=o
o=H.a(["a bow"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.th=o
o=H.a(["a whip"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wc=o
o=H.a(["a staff"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wa=o
o=H.a(["a needle"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tu=o
o=H.a(["dice"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tl=o
o=H.a(["a fork"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vP=o
o=H.a(["a pigeon???"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,1.3)
$.$get$b().h(0,o)
$.tv=o
o=H.a(["a chainsaw"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vJ=o
o=H.a(["a sickle"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w8=o
o=H.a(["a shotgun"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w5=o
o=H.a(["a stick"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.dt=o
o=H.a(["a chain"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.hh=o
o=H.a(["a wrench"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tC=o
o=H.a(["a shovel"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w6=o
o=H.a(["a rolling pin"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tB=o
o=H.a(["a puppet"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tx=o
o=H.a(["a razor"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ty=o
o=H.a(["a pen"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ml=o
o=H.a(["a bust"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.jh=o
o=H.a(["a bowling ball"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.A0=o
o=H.a(["a golf club"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vS=o
o=H.a(["a knife"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vX=o
o=H.a(["scissors"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w4=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.G
m=G.a0
l=[m]
k=H.a([$.D,$.au,$.aL],l)
H.a([],p)
o=new G.d("Forged",k,n,o,0)
$.$get$b().h(0,o)
$.Bk=o
o=H.a([],p)
n=$.u
k=H.a([$.ae,$.au],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.AQ=o
o=H.a(["fossilized"],p)
n=$.G
k=H.a([$.aY,$.av],l)
H.a([],p)
o=new G.d("Fossilized",k,n,o,0)
$.$get$b().h(0,o)
$.Bl=o
o=H.a(["adamantium"],p)
n=$.G
k=H.a([$.aY,$.D],l)
H.a([],p)
o=new G.d("Adamantium",k,n,o,0)
$.$get$b().h(0,o)
$.vE=o
o=H.a([],p)
n=$.u
k=H.a([$.aW,$.aG],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.DZ=o
o=H.a(["tatami"],p)
n=$.u
k=H.a([$.O,$.W],l)
H.a([],p)
o=new G.d("Tatami",k,n,o,0)
$.$get$b().h(0,o)
$.Ed=o
o=H.a(["mesh","chain link"],p)
n=$.u
k=H.a([$.O,$.D],l)
H.a([],p)
o=new G.d("Mesh",k,n,o,0)
$.$get$b().h(0,o)
$.Cl=o
o=H.a(["foil"],p)
n=$.u
k=H.a([$.K,$.D],l)
H.a([],p)
o=new G.d("Foil",k,n,o,0)
$.$get$b().h(0,o)
$.Bg=o
o=H.a(["beanbag"],p)
n=$.u
k=H.a([$.O,$.av],l)
H.a([],p)
o=new G.d("Beanbag",k,n,o,0)
$.$get$b().h(0,o)
$.zV=o
o=H.a(["pleather","faux fur"],p)
n=$.u
k=H.a([$.ce,$.aA],l)
H.a([],p)
o=new G.d("Faux Fur",k,n,o,0)
$.$get$b().h(0,o)
$.CW=o
o=H.a(["plywood"],p)
n=$.u
k=H.a([$.W,$.K],l)
H.a([],p)
o=new G.d("Plywood",k,n,o,0)
$.$get$b().h(0,o)
$.mn=o
o=H.a(["colossus"],p)
n=$.u
k=H.a([$.D,$.bi],l)
H.a([],p)
o=new G.d("Colossus",k,n,o,0)
$.$get$b().h(0,o)
$.vK=o
o=H.a(["rotting","zombie"],p)
n=$.G
k=H.a([$.bQ,$.bi],l)
H.a([],p)
o=new G.d("Rotting",k,n,o,0)
$.$get$b().h(0,o)
$.Dl=o
o=H.a(["draugr","white walker"],p)
n=$.G
k=H.a([$.bQ,$.bi,$.bm],l)
H.a([],p)
o=new G.d("Draugr",k,n,o,0)
$.$get$b().h(0,o)
$.AN=o
o=H.a(["Ultraviolet"],p)
n=$.tD
k=H.a([$.aP,$.aj],l)
H.a([],p)
o=new G.d("Ultraviolet",k,n,o,0)
$.$get$b().h(0,o)
$.C4=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aP,$.aj,$.au],l)
H.a([],p)
o=new G.d("Ultraviolence",k,n,o,0)
$.$get$b().h(0,o)
$.Eo=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.bW],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.AL=o
o=H.a(["candy"],p)
n=$.u
k=H.a([$.an,$.aU],l)
H.a([],p)
o=new G.d("Candy",k,n,o,0)
$.$get$b().h(0,o)
$.ti=o
o=H.a(["cotton candy"],p)
n=$.u
k=H.a([$.an,$.O],l)
H.a([],p)
o=new G.d("Cotton Candy",k,n,o,0)
$.$get$b().h(0,o)
$.Aw=o
o=H.a(["gummy"],p)
n=$.u
k=H.a([$.an,$.c8],l)
H.a([],p)
o=new G.d("Gum",k,n,o,0)
$.$get$b().h(0,o)
$.Bx=o
o=H.a(["marrow"],p)
n=$.u
k=H.a([$.an,$.aY],l)
H.a([],p)
o=new G.d("Marrow",k,n,o,0)
$.$get$b().h(0,o)
$.Ce=o
o=H.a(["toothy"],p)
n=$.a3
k=H.a([$.aY,$.bO],l)
H.a([],p)
o=new G.d("Toothy",k,n,o,0)
$.$get$b().h(0,o)
$.El=o
o=H.a(["Frost"],p)
n=$.u
k=H.a([$.av,$.aU,$.bi],l)
H.a([],p)
o=new G.d("Frost",k,n,o,0)
$.$get$b().h(0,o)
$.Bm=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.an,$.bK],l)
H.a([],p)
o=new G.d("Arsenic",k,n,o,0)
$.$get$b().h(0,o)
$.AV=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.u
k=H.a([$.av,$.aU],l)
H.a([],p)
o=new G.d("Crystal",k,n,o,0)
$.$get$b().h(0,o)
$.tj=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.H
k=H.a([$.ax,$.aB,$.aT,$.Y,$.ai,$.bW,$.a2],l)
H.a([],p)
o=new G.d("Mary Sue",k,n,o,0)
$.$get$b().h(0,o)
$.Cf=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.H
k=H.a([$.aX,$.aj,$.au,$.a_,$.aD,$.Y,$.ai,$.al],l)
H.a([],p)
o=new G.d("Edge Lord",k,n,o,0)
$.$get$b().h(0,o)
$.AT=o
o=H.a(["deadpool"],p)
n=$.a3
k=H.a([$.bQ,$.aJ,$.al,$.aT],l)
H.a([],p)
o=new G.d("Deadpool",k,n,o,0)
$.$get$b().h(0,o)
$.AC=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.H
k=H.a([$.aX,$.al],l)
H.a([],p)
o=new G.d("Spoopy",k,n,o,0)
$.$get$b().h(0,o)
$.E1=o
o=H.a(["wolverine"],p)
n=$.a3
k=H.a([$.aY,$.au,$.aL],l)
H.a([],p)
o=new G.d("Wolverine",k,n,o,0)
$.$get$b().h(0,o)
$.EA=o
o=H.a(["rabbit's foot"],p)
n=$.a3
k=H.a([$.bW,$.ce],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,n,o,0)
$.$get$b().h(0,o)
$.w1=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.G
k=H.a([$.aL,$.W],l)
H.a([],p)
o=new G.d("Tipped",k,n,o,0)
$.$get$b().h(0,o)
$.zO=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a3
k=H.a([$.aL,$.aK,$.W],l)
H.a([],p)
o=new G.d("Arrow",k,n,o,0)
$.$get$b().h(0,o)
$.vF=o
o=H.a(["training sword","bokken"],p)
n=$.a3
k=H.a([$.W,$.au],l)
H.a([],p)
o=new G.d("Bokken",k,n,o,0)
$.$get$b().h(0,o)
$.BY=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.aO,$.al],l)
H.a([],p)
o=new G.d("Irony Type1",k,n,o,0)
$.$get$b().h(0,o)
$.tq=o
o=H.a(["netted","webbed"],p)
n=$.a3
k=H.a([$.bf,$.O],l)
H.a([],p)
o=new G.d("Netted",k,n,o,0)
$.$get$b().h(0,o)
$.CA=o
o=H.a(["barbed wire"],p)
n=$.a3
k=H.a([$.aL,$.bf,$.D,$.O],l)
H.a([],p)
o=new G.d("Barbed Wire",k,n,o,0)
$.$get$b().h(0,o)
$.zS=o
o=H.a(["morning star"],p)
n=$.a3
k=H.a([$.aL,$.ae],l)
H.a([],p)
o=new G.d("Morning Star",k,n,o,0)
$.$get$b().h(0,o)
$.Cu=o
o=H.a(["decadent"],p)
n=$.H
k=H.a([$.aW,$.bg],l)
H.a([],p)
o=new G.d("Decadent",k,n,o,0)
$.$get$b().h(0,o)
$.AF=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bP,$.al],l)
H.a([],p)
o=new G.d("SBAHJ",k,n,o,0)
$.$get$b().h(0,o)
$.Dv=o
o=H.a(["bayonet"],p)
n=$.a3
k=H.a([$.aL,$.aK],l)
H.a([],p)
o=new G.d("Bayonet",k,n,o,0)
$.$get$b().h(0,o)
$.zU=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.u
k=H.a([$.bm,$.al,$.au],l)
H.a([],p)
o=new G.d("Snoop",k,n,o,0)
$.$get$b().h(0,o)
$.DY=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aP,$.ao,$.au],l)
H.a([],p)
o=new G.d("Light Saber",k,n,o,0)
$.$get$b().h(0,o)
$.C3=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.H
k=H.a([$.a2,$.aO],l)
H.a([],p)
o=new G.d("Fakey Fake",k,n,o,0)
$.$get$b().h(0,o)
$.B1=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.H
k=H.a([$.a2,$.be],l)
H.a([],p)
o=new G.d("Real As Shit",k,n,o,0)
$.$get$b().h(0,o)
$.Df=o
o=H.a(["skeletal"],p)
n=$.a3
k=H.a([$.aX,$.aD,$.aY],l)
H.a([],p)
o=new G.d("Skeletal",k,n,o,0)
$.$get$b().h(0,o)
$.DS=o
o=H.a(["green sun"],p)
n=$.tE
k=H.a([$.ao,$.c1,$.aP],l)
H.a([],p)
o=new G.d("Green Sun",k,n,o,0)
$.$get$b().h(0,o)
$.to=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tD
k=H.a([$.aj,$.ai],l)
H.a([],p)
o=new G.d("Midnight",k,n,o,0)
$.$get$b().h(0,o)
$.Cp=o
o=H.a(["radiant","dazzling"],p)
n=$.H
k=H.a([$.a2,$.aP],l)
H.a([],p)
o=new G.d("Radiant",k,n,o,0)
$.$get$b().h(0,o)
$.Dc=o
o=H.a(["edgy"],p)
n=$.H
k=H.a([$.au,$.aj,$.al],l)
H.a([],p)
o=new G.d("Edgy",k,n,o,0)
$.$get$b().h(0,o)
$.AU=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c1,$.bo],l)
H.a([],p)
o=new G.d("Warhead",k,n,o,0)
$.$get$b().h(0,o)
$.zH=o
o=H.a(["living"],p)
n=$.G
k=H.a([$.aY,$.bi,$.ap],l)
H.a([],p)
o=new G.d("Living",k,n,o,0)
$.$get$b().h(0,o)
$.C7=o
o=H.a(["dead","corpse","deceased"],p)
n=$.G
k=H.a([$.aY,$.bi],l)
H.a([],p)
o=new G.d("Dead",k,n,o,0)
$.$get$b().h(0,o)
$.AB=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a6,$.bf,$.aK],l)
H.a([],p)
o=new G.d("Taser",k,n,o,0)
$.$get$b().h(0,o)
$.Ec=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.aj,$.a9],l)
H.a([],p)
o=new G.d("Nocturn",k,n,o,0)
$.$get$b().h(0,o)
$.CD=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aD,$.a9],l)
H.a([],p)
o=new G.d("Dirge",k,n,o,0)
$.$get$b().h(0,o)
$.AI=o
o=H.a(["Snobbish","Noble"],p)
n=$.H
k=H.a([$.ai,$.bg],l)
H.a([],p)
o=new G.d("Snobbish",k,n,o,0)
$.$get$b().h(0,o)
$.DX=o
o=H.a(["flat"],p)
n=$.H
k=H.a([$.ae,$.a9],l)
H.a([],p)
o=new G.d("Flat(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.Bb=o
o=H.a(["sharp"],p)
n=$.H
k=H.a([$.au,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.DE=o
o=H.a(["sharp"],p)
n=$.H
k=H.a([$.ai,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,n,o,0)
$.$get$b().h(0,o)
$.DD=o
o=H.a(["Bach's"],p)
n=$.aa
k=H.a([$.Y,$.a9],l)
H.a([],p)
o=new G.d("Bach's",k,n,o,0)
$.$get$b().h(0,o)
$.zQ=o
o=H.a(["Mozart's"],p)
n=$.aa
k=H.a([$.a2,$.a9],l)
H.a([],p)
o=new G.d("Mozart's",k,n,o,0)
$.$get$b().h(0,o)
$.Cw=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.aa
k=H.a([$.Y,$.c1],l)
H.a([],p)
o=new G.d("Einstein's",k,n,o,0)
$.$get$b().h(0,o)
$.AW=o
o=H.a(["Feynman's"],p)
n=$.aa
k=H.a([$.Y,$.aT],l)
H.a([],p)
o=new G.d("Feynman's",k,n,o,0)
$.$get$b().h(0,o)
$.B5=o
o=H.a(["Ziptie"],p)
n=$.aa
k=H.a([$.aA,$.bf],l)
H.a([],p)
o=new G.d("Ziptie",k,n,o,0)
$.$get$b().h(0,o)
$.EE=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.D,$.Y],l)
H.a([],p)
o=new G.d("Mobile",k,n,o,0)
$.$get$b().h(0,o)
$.jj=o
o=H.a(["Sassacre"],p)
n=$.aa
k=H.a([$.c7,$.aT],l)
H.a([],p)
o=new G.d("Sassacre",k,n,o,0)
$.$get$b().h(0,o)
$.Dt=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ae,$.c7],l)
H.a([],p)
o=new G.d("Sledge",k,n,o,0)
$.$get$b().h(0,o)
$.DV=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.bf,$.K],l)
H.a([],p)
o=new G.d("Legal",k,n,o,0)
$.$get$b().h(0,o)
$.mk=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aT,$.aV],l)
H.a([],p)
o=new G.d("Clown",k,n,o,0)
$.$get$b().h(0,o)
$.Aq=o
o=H.a(["passionate"],p)
n=$.H
k=H.a([$.ao,$.aB],l)
H.a([],p)
o=new G.d("Passionate",k,n,o,0)
$.$get$b().h(0,o)
$.CN=o
o=H.a(["pinata"],p)
n=$.a3
k=H.a([$.K,$.an],l)
H.a([],p)
o=new G.d("Pinata",k,n,o,0)
$.$get$b().h(0,o)
$.CR=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ae,$.c7,$.D],l)
H.a([],p)
o=new G.d("Anvil",k,n,o,0)
$.$get$b().h(0,o)
$.zN=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aP,$.bo],l)
H.a([],p)
o=new G.d("Flashbang",k,n,o,0)
$.$get$b().h(0,o)
$.Ba=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.aj,$.bo],l)
H.a([],p)
o=new G.d("Smokebomb",k,n,o,0)
$.$get$b().h(0,o)
$.DW=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.aj,$.au],l)
H.a([],p)
o=new G.d("Ninja",k,n,o,0)
$.$get$b().h(0,o)
$.CC=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a6,$.a9],l)
H.a([],p)
o=new G.d("Techno",k,n,o,0)
$.$get$b().h(0,o)
$.Ef=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.av,$.a9],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,n,o,0)
$.$get$b().h(0,o)
$.Dh=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a3
k=H.a([$.ap,$.bi,$.aK],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,n,o,0)
$.$get$b().h(0,o)
$.CS=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aT,$.a9,$.aV,$.aX],l)
H.a([],p)
o=new G.d("Juggalo",k,n,o,0)
$.$get$b().h(0,o)
$.vW=o
o=H.a(["shocksauce"],p)
n=$.H
k=H.a([$.al,$.a6],l)
H.a([],p)
o=new G.d("Shock Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.DH=o
o=H.a(["weaksauce"],p)
n=$.H
k=H.a([$.ae,$.al,$.bP],l)
H.a([],p)
o=new G.d("Weak Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.Eu=o
o=H.a(["spicy","picante"],p)
n=$.H
k=H.a([$.ao,$.an],l)
H.a([],p)
o=new G.d("Spicy",k,n,o,0)
$.$get$b().h(0,o)
$.E0=o
o=H.a(["ice cream","popsicle"],p)
n=$.u
k=H.a([$.bm,$.an],l)
H.a([],p)
o=new G.d("Popsicle",k,n,o,0)
$.$get$b().h(0,o)
$.BL=o
o=H.a(["popsickle"],p)
n=$.u
k=H.a([$.bm,$.an,$.au],l)
H.a([],p)
o=new G.d("Popsickle",k,n,o,0)
$.$get$b().h(0,o)
$.D3=o
o=H.a(["icepick"],p)
n=$.u
k=H.a([$.bm,$.aL],l)
H.a([],p)
o=new G.d("Icepick",k,n,o,0)
$.$get$b().h(0,o)
$.BM=o
o=H.a(["schezwan"],p)
n=$.H
k=H.a([$.al,$.an],l)
H.a([],p)
o=new G.d("Schezwan",k,n,o,0)
$.$get$b().h(0,o)
$.Dw=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.aj,$.a9,$.al,$.a6],l)
H.a([],p)
o=new G.d("Vaporwave",k,n,o,0)
$.$get$b().h(0,o)
$.Es=o
o=H.a(["mallet"],p)
n=$.a3
k=H.a([$.W,$.ae],l)
H.a([],p)
o=new G.d("Mallet",k,n,o,0)
$.$get$b().h(0,o)
$.Cd=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aA,$.al],l)
H.a([],p)
o=new G.d("Fidget",k,n,o,0)
$.$get$b().h(0,o)
$.B7=o
o=H.a(["gold foil"],p)
n=$.u
k=H.a([$.D,$.K,$.bg],l)
H.a([],p)
o=new G.d("Gold Foil",k,n,o,0)
$.$get$b().h(0,o)
$.Bu=o
o=H.a(["caviar"],p)
n=$.u
k=H.a([$.an,$.bg],l)
H.a([],p)
o=new G.d("Caviar",k,n,o,0)
$.$get$b().h(0,o)
$.Ag=o
o=H.a(["RADioactive"],p)
n=$.H
k=H.a([$.c1,$.al],l)
H.a([],p)
o=new G.d("RADioactive",k,n,o,0)
$.$get$b().h(0,o)
$.Dd=o
o=H.a(["glam"],p)
n=$.H
k=H.a([$.av,$.a9,$.ax],l)
H.a([],p)
o=new G.d("Glam",k,n,o,0)
$.$get$b().h(0,o)
$.Bs=o
o=H.a(["hair metal"],p)
n=$.H
k=H.a([$.D,$.a9,$.ax],l)
H.a([],p)
o=new G.d("Hair Metal",k,n,o,0)
$.$get$b().h(0,o)
$.Bz=o
o=H.a(["elven","fae","sylvan"],p)
n=$.H
k=H.a([$.a2,$.ax],l)
H.a([],p)
o=new G.d("Elven",k,n,o,0)
$.$get$b().h(0,o)
$.AY=o
o=H.a(["shiny"],p)
n=$.H
k=H.a([$.D,$.ax],l)
H.a([],p)
o=new G.d("Shiny",k,n,o,0)
$.$get$b().h(0,o)
$.DG=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.H
k=H.a([$.bg,$.ax,$.ai],l)
H.a([],p)
o=new G.d("Bespoke",k,n,o,0)
$.$get$b().h(0,o)
$.f7=o
o=H.a(["operatic"],p)
n=$.H
k=H.a([$.bg,$.a9,$.ai],l)
H.a([],p)
o=new G.d("Operatic",k,n,o,0)
$.$get$b().h(0,o)
$.CH=o
o=H.a(["ice","diamond"],p)
n=$.u
k=H.a([$.bg,$.bm],l)
H.a([],p)
o=new G.d("Diamond",k,n,o,0)
$.$get$b().h(0,o)
$.vV=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.H
k=H.a([$.ao,$.bm],l)
H.a([],p)
o=new G.d("Icy Hot",k,n,o,0)
$.$get$b().h(0,o)
$.BN=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.H
k=H.a([$.al,$.bm],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,n,o,0)
$.$get$b().h(0,o)
$.BK=o
o=H.a(["winter's","season's"],p)
n=$.aa
k=H.a([$.bk,$.bm],l)
H.a([],p)
o=new G.d("Winter's",k,n,o,0)
$.$get$b().h(0,o)
$.Ex=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.aa
k=H.a([$.a2,$.bm],l)
H.a([],p)
o=new G.d("Christmas",k,n,o,0)
$.$get$b().h(0,o)
$.Am=o
o=H.a(["Santa Saws"],p)
n=$.aa
k=H.a([$.a2,$.bm,$.au],l)
H.a([],p)
o=new G.d("Santa Saws",k,n,o,0)
$.$get$b().h(0,o)
$.Dr=o
o=H.a(["Santa Sleighs"],p)
n=$.aa
k=H.a([$.hi,$.au],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,n,o,0)
$.$get$b().h(0,o)
$.Ds=o
o=H.a(["Santa Claws"],p)
n=$.aa
k=H.a([$.hi,$.mi],l)
H.a([],p)
o=new G.d("Santa Claws",k,n,o,0)
$.$get$b().h(0,o)
$.Dq=o
o=H.a(["Sandy Claws"],p)
n=$.aa
k=H.a([$.hi,$.mi,$.av],l)
H.a([],p)
o=new G.d("Sandy Claws",k,n,o,0)
$.$get$b().h(0,o)
$.Dp=o
o=H.a(["Silent Night"],p)
n=$.aa
k=H.a([$.hi,$.aj],l)
H.a([],p)
o=new G.d("Silent Night",k,n,o,0)
$.$get$b().h(0,o)
$.DO=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.aa
k=H.a([$.aX,$.bV],l)
H.a([],p)
o=new G.d("Ghost's",k,n,o,0)
$.$get$b().h(0,o)
$.BA=o
o=H.a(["ghoul","mutant"],p)
n=$.u
k=H.a([$.bi,$.c1,$.bQ],l)
H.a([],p)
o=new G.d("Mutant",k,n,o,0)
$.$get$b().h(0,o)
$.Cx=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.al,$.D],l)
H.a([],p)
o=new G.d("Skateboard",k,n,o,0)
$.$get$b().h(0,o)
$.DR=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c1,$.a6,$.an],l)
H.a([],p)
o=new G.d("Microwave",k,n,o,0)
$.$get$b().h(0,o)
$.Co=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c1,$.a6,$.an,$.aK],l)
H.a([],p)
o=new G.d("Orbital",k,n,o,0)
$.$get$b().h(0,o)
$.CI=o
o=H.a([],p)
n=$.q
k=H.a([$.ae,$.Y],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.AR=o
o=H.a(["uranium"],p)
n=$.u
k=H.a([$.c1,$.av],l)
H.a([],p)
o=new G.d("Uranium",k,n,o,0)
$.$get$b().h(0,o)
$.Er=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.K,$.c8],l)
H.a([],p)
o=new G.d("Mousepad",k,n,o,0)
$.$get$b().h(0,o)
$.Cv=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.au,$.av],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,n,o,0)
$.$get$b().h(0,o)
$.Bd=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.aL,$.av],l)
H.a([],p)
o=new G.d("Pointed Flint",k,n,o,0)
$.$get$b().h(0,o)
$.Be=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aA,$.aL],l)
H.a([],p)
o=new G.d("Picnic",k,n,o,0)
$.$get$b().h(0,o)
$.CQ=o
o=H.a(["xtreme xplosion"],p)
n=$.H
k=H.a([$.al,$.bo],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,n,o,0)
$.$get$b().h(0,o)
$.ED=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aA,$.aW],l)
H.a([],p)
o=new G.d("Lawn",k,n,o,0)
$.$get$b().h(0,o)
$.C1=o
o=H.a(["upholstered"],p)
n=$.u
k=H.a([$.O,$.aW],l)
H.a([],p)
o=new G.d("Upholstered",k,n,o,0)
$.$get$b().h(0,o)
$.Eq=o
o=H.a(["leather"],p)
n=$.u
k=H.a([$.bi,$.aW],l)
H.a([],p)
o=new G.d("Leather",k,n,o,0)
$.$get$b().h(0,o)
$.w_=o
o=H.a(["shag"],p)
n=$.u
k=H.a([$.ce,$.aW],l)
H.a([],p)
o=new G.d("Shag",k,n,o,0)
$.$get$b().h(0,o)
$.DC=o
o=H.a(["loyal"],p)
n=$.H
k=H.a([$.ae,$.aB],l)
H.a([],p)
o=new G.d("Loyal",k,n,o,0)
$.$get$b().h(0,o)
$.Cb=o
o=H.a(["porcelain"],p)
n=$.u
k=H.a([$.ax,$.bO],l)
H.a([],p)
o=new G.d("Porcelain",k,n,o,0)
$.$get$b().h(0,o)
$.mo=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a3
k=H.a([$.bg,$.bO],l)
H.a([],p)
o=new G.d("Pork Hollow",k,n,o,0)
$.$get$b().h(0,o)
$.D5=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.al,$.au],l)
H.a([],p)
o=new G.d("Katana",k,n,o,0)
$.$get$b().h(0,o)
$.BW=o
o=H.a(["chocolate"],p)
n=$.u
k=H.a([$.aB,$.an],l)
H.a([],p)
o=new G.d("Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.Al=o
o=H.a(["wrapped chocolate"],p)
n=$.u
k=H.a([$.aB,$.an,$.K,$.D],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.Bh=o
o=H.a(["scratch-n-sniff"],p)
n=$.u
k=H.a([$.al,$.K],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,n,o,0)
$.$get$b().h(0,o)
$.Dy=o
o=H.a(["mythril","orichalcum"],p)
n=$.u
k=H.a([$.a2,$.D],l)
H.a([],p)
o=new G.d("Mythril",k,n,o,0)
$.$get$b().h(0,o)
$.Cy=o
o=H.a(["titanium","steel"],p)
n=$.u
k=H.a([$.ae,$.D],l)
H.a([],p)
o=new G.d("Titanium",k,n,o,0)
$.$get$b().h(0,o)
$.Ek=o
o=H.a(["lead"],p)
n=$.u
k=H.a([$.c7,$.D],l)
H.a([],p)
o=new G.d("Lead",k,n,o,0)
$.$get$b().h(0,o)
$.vZ=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aO,$.aT],l)
H.a([],p)
o=new G.d("Satire",k,n,o,0)
$.$get$b().h(0,o)
$.CG=o
o=H.a(["comedy gold"],p)
n=$.H
k=H.a([$.bg,$.aT],l)
H.a([],p)
o=new G.d("Comedy Gold",k,n,o,0)
$.$get$b().h(0,o)
$.As=o
o=H.a(["dry","sensible chuckle"],p)
n=$.H
k=H.a([$.ai,$.aT],l)
H.a([],p)
o=new G.d("Dry",k,n,o,0)
$.$get$b().h(0,o)
$.AO=o
o=H.a(["polite"],p)
n=$.H
k=H.a([$.aW,$.aO],l)
H.a([],p)
o=new G.d("Polite",k,n,o,0)
$.$get$b().h(0,o)
$.D1=o
o=H.a(["stradivarius"],p)
n=$.aa
k=H.a([$.ai,$.bg,$.W,$.a9],l)
H.a([],p)
o=new G.d("Stradivarius",k,n,o,0)
$.$get$b().h(0,o)
$.E7=o
o=H.a(["scientistic"],p)
n=$.H
k=H.a([$.Y,$.aO],l)
H.a([],p)
o=new G.d("Scientistic",k,n,o,0)
$.$get$b().h(0,o)
$.Dx=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a6,$.ap],l)
H.a([],p)
o=new G.d("AI",k,n,o,0)
$.$get$b().h(0,o)
$.mg=o
o=H.a(["robotic"],p)
n=$.G
k=H.a([$.D,$.a6,$.ap],l)
H.a([],p)
o=new G.d("Robotic",k,n,o,0)
$.$get$b().h(0,o)
$.tA=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.W,$.bo],l)
H.a([],p)
o=new G.d("Shrapnel",k,n,o,0)
$.$get$b().h(0,o)
$.DJ=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.ap,$.a6,$.a9],l)
H.a([],p)
o=new G.d("Vocaloid",k,n,o,0)
$.$get$b().h(0,o)
$.Et=o
o=H.a(["*Hyun-ae"],p)
n=$.aa
k=H.a([$.ap,$.a6,$.aB],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,n,o,0)
$.$get$b().h(0,o)
$.BJ=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.W,$.aK],l)
H.a([],p)
o=new G.d("Buckshot",k,n,o,0)
$.$get$b().h(0,o)
$.A4=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.c7,$.aK],l)
H.a([],p)
o=new G.d("Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.Ad=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.ai,$.K],l)
H.a([],p)
o=new G.d("Stationary",k,n,o,0)
$.$get$b().h(0,o)
$.E5=o
o=H.a([],p)
n=$.q
k=H.a([$.aw,$.K],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.CK=o
o=H.a([],p)
n=$.q
k=H.a([$.D,$.aK],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.Cm=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.au,$.K],l)
H.a([],p)
o=new G.d("Papercut",k,n,o,0)
$.$get$b().h(0,o)
$.CL=o
o=H.a(["squeaky"],p)
n=$.G
k=H.a([$.ae,$.c8],l)
H.a([],p)
o=new G.d("Squeaky",k,n,o,0)
$.$get$b().h(0,o)
$.E2=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aO,$.a9],l)
H.a([],p)
o=new G.d("Kazoo",k,n,o,0)
$.$get$b().h(0,o)
$.BX=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aJ,$.K],l)
H.a([],p)
o=new G.d("Bandaid",k,n,o,0)
$.$get$b().h(0,o)
$.zR=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aJ,$.an],l)
H.a([],p)
o=new G.d("Gushers",k,n,o,0)
$.$get$b().h(0,o)
$.By=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aJ,$.aK],l)
H.a([],p)
o=new G.d("Medic",k,n,o,0)
$.$get$b().h(0,o)
$.Ck=o
o=H.a(["sick nasty","ill"],p)
n=$.G
k=H.a([$.al,$.bK],l)
H.a([],p)
o=new G.d("Sick Nasty",k,n,o,0)
$.$get$b().h(0,o)
$.DL=o
o=H.a(["gilded","gold leaf"],p)
n=$.u
k=H.a([$.D,$.W],l)
H.a([],p)
o=new G.d("Gilded",k,n,o,0)
$.$get$b().h(0,o)
$.Br=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aA,$.a6],l)
H.a([],p)
o=new G.d("Charging",k,n,o,0)
$.$get$b().h(0,o)
$.Ak=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.c8,$.au],l)
H.a([],p)
o=new G.d("Rubber Safety",k,n,o,0)
$.$get$b().h(0,o)
$.Dn=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aA,$.au],l)
H.a([],p)
o=new G.d("Plastic Safety",k,n,o,0)
$.$get$b().h(0,o)
$.Do=o
o=H.a(["thunderous","thor's"],p)
n=$.H
k=H.a([$.aV,$.a6],l)
H.a([],p)
o=new G.d("Thunderous",k,n,o,0)
$.$get$b().h(0,o)
$.Ei=o
o=H.a(["screeching","dial up"],p)
n=$.H
k=H.a([$.aV,$.a6,$.Y],l)
H.a([],p)
o=new G.d("Screeching",k,n,o,0)
$.$get$b().h(0,o)
$.DA=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aU,$.D],l)
H.a([],p)
o=new G.d("Mirrored",k,n,o,0)
$.$get$b().h(0,o)
$.tt=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aU,$.av,$.a2],l)
H.a([],p)
o=new G.d("Far Seeing",k,n,o,0)
$.$get$b().h(0,o)
$.vL=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.c8,$.aK],l)
H.a([],p)
o=new G.d("Nonlethal",k,n,o,0)
$.$get$b().h(0,o)
$.AJ=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.ax,$.ai],l)
H.a([],p)
o=new G.d("Fashionable",k,n,o,0)
$.$get$b().h(0,o)
$.vN=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.aT,$.al],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,n,o,0)
$.$get$b().h(0,o)
$.BR=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.bP,$.aT],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,n,o,0)
$.$get$b().h(0,o)
$.tr=o
o=H.a(["post-ironic"],p)
n=$.H
k=H.a([$.aO,$.al,$.ai],l)
H.a([],p)
o=new G.d("Post Ironic",k,n,o,0)
$.$get$b().h(0,o)
$.D7=o
o=H.a(["monstrous"],p)
n=$.H
k=H.a([$.bQ,$.aV,$.aX],l)
H.a([],p)
o=new G.d("Monstrous",k,n,o,0)
$.$get$b().h(0,o)
$.Ct=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aK,$.al,$.ai],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$b().h(0,o)
$.Dj=o
o=H.a(["golden"],p)
n=$.u
k=H.a([$.D,$.bg],l)
H.a([],p)
o=new G.d("Golden",k,n,o,0)
$.$get$b().h(0,o)
$.tn=o
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
$.vU=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.O,$.ce],l)
H.a([],p)
o=new G.d("Felt",k,n,o,0)
$.$get$b().h(0,o)
$.B3=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.av,$.ai],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.w0=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.av,$.c7],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.Bw=o
o=H.a(["glitched"],p)
n=$.G
k=H.a([$.bn,$.a6],l)
H.a([],p)
o=new G.d("Glitched",k,n,o,0)
$.$get$b().h(0,o)
$.vR=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aJ,$.a6],l)
H.a([],p)
o=new G.d("Debugging",k,n,o,0)
$.$get$b().h(0,o)
$.AE=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.D,$.aV,$.a9],l)
H.a([],p)
o=new G.d("Metalic",k,n,o,0)
$.$get$b().h(0,o)
$.Cn=o
o=H.a(["Simulacrum"],p)
n=$.H
k=H.a([$.ap,$.aO],l)
H.a([],p)
o=new G.d("Simulacrum",k,n,o,0)
$.$get$b().h(0,o)
$.DQ=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.an,$.aO],l)
H.a([],p)
o=new G.d("Imitation",k,n,o,0)
$.$get$b().h(0,o)
$.BO=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aJ,$.aO],l)
H.a([],p)
o=new G.d("Placebo",k,n,o,0)
$.$get$b().h(0,o)
$.CU=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bg,$.aO],l)
H.a([],p)
o=new G.d("Counterfeit",k,n,o,0)
$.$get$b().h(0,o)
$.Ax=o
o=H.a(["Surreal"],p)
n=$.H
k=H.a([$.al,$.aG,$.aT],l)
H.a([],p)
o=new G.d("Surreal1",k,n,o,0)
$.$get$b().h(0,o)
$.E9=o
o=H.a(["Brainy"],p)
n=$.H
k=H.a([$.Y,$.bi],l)
H.a([],p)
o=new G.d("Brainy",k,n,o,0)
$.$get$b().h(0,o)
$.A1=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.ao,$.bo],l)
H.a([],p)
o=new G.d("Incendiary",k,n,o,0)
$.$get$b().h(0,o)
$.BP=o
o=H.a(["C-4"],p)
n=$.u
k=H.a([$.bo,$.aA],l)
H.a([],p)
o=new G.d("C-4",k,n,o,0)
$.$get$b().h(0,o)
$.A8=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a2,$.aP,$.bn],l)
H.a([],p)
o=new G.d("Fae",k,n,o,0)
$.$get$b().h(0,o)
$.B0=o
o=H.a(["Plutonium"],p)
n=$.u
k=H.a([$.D,$.c1],l)
H.a([],p)
o=new G.d("Plutonium",k,n,o,0)
$.$get$b().h(0,o)
$.CY=o
o=H.a(["Lithium"],p)
n=$.u
k=H.a([$.D,$.a6],l)
H.a([],p)
o=new G.d("Lithium",k,n,o,0)
$.$get$b().h(0,o)
$.C6=o
o=H.a(["Molten"],p)
n=$.u
k=H.a([$.D,$.ao],l)
H.a([],p)
o=new G.d("Molten",k,n,o,0)
$.$get$b().h(0,o)
$.Cs=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.u
k=H.a([$.av,$.ao],l)
H.a([],p)
o=new G.d("Magma",k,n,o,0)
$.$get$b().h(0,o)
$.Cc=o
o=H.a(["Rusty"],p)
n=$.G
k=H.a([$.D,$.bP],l)
H.a([],p)
o=new G.d("Rusty",k,n,o,0)
$.$get$b().h(0,o)
$.Dm=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.au,$.al,$.ai],l)
H.a([],p)
o=new G.d("Fonzie",k,n,o,0)
$.$get$b().h(0,o)
$.Bi=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aB,$.aT],l)
H.a([],p)
o=new G.d("Romcom",k,n,o,0)
$.$get$b().h(0,o)
$.Di=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.ax,$.aP],l)
H.a([],p)
o=new G.d("Alluring",k,n,o,0)
$.$get$b().h(0,o)
$.zK=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.ax,$.aj],l)
H.a([],p)
o=new G.d("Masquerade",k,n,o,0)
$.$get$b().h(0,o)
$.Cg=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.av,$.bi],l)
H.a([],p)
o=new G.d("Stoneskin",k,n,o,0)
$.$get$b().h(0,o)
$.E6=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a2,$.Y],l)
H.a([],p)
o=new G.d("Psionic",k,n,o,0)
$.$get$b().h(0,o)
$.Da=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a2,$.av],l)
H.a([],p)
o=new G.d("Dwarven",k,n,o,0)
$.$get$b().h(0,o)
$.AS=o
o=H.a(["Elemental","Animated"],p)
n=$.u
k=H.a([$.a2,$.ap],l)
H.a([],p)
o=new G.d("Elemental",k,n,o,0)
$.$get$b().h(0,o)
$.AX=o
o=H.a(["Gourmet"],p)
n=$.H
k=H.a([$.an,$.ai],l)
H.a([],p)
o=new G.d("Gourmet",k,n,o,0)
$.$get$b().h(0,o)
$.Bv=o
o=H.a(["Stained Glass"],p)
n=$.u
k=H.a([$.aU,$.ax,$.bg],l)
H.a([],p)
o=new G.d("Stained Glass",k,n,o,0)
$.$get$b().h(0,o)
$.E3=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aJ,$.O],l)
H.a([],p)
o=new G.d("Gauze",k,n,o,0)
$.$get$b().h(0,o)
$.Bo=o
o=H.a(["Locked"],p)
n=$.G
k=H.a([$.bf,$.bq],l)
H.a([],p)
o=new G.d("Locked",k,n,o,0)
$.$get$b().h(0,o)
$.C8=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.av,$.K],l)
H.a([],p)
o=new G.d("Etched",k,n,o,0)
$.$get$b().h(0,o)
$.B_=o
o=H.a(["Papyrus"],p)
n=$.u
k=H.a([$.K,$.aQ],l)
H.a([],p)
o=new G.d("Papyrus",k,n,o,0)
$.$get$b().h(0,o)
$.CM=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.K,$.aA],l)
H.a([],p)
o=new G.d("Film",k,n,o,0)
$.$get$b().h(0,o)
$.B8=o
o=H.a(["Saucey"],p)
n=$.u
k=H.a([$.bn,$.bq,$.bQ],l)
H.a([],p)
o=new G.d("Saucey",k,n,o,0)
$.$get$b().h(0,o)
$.Du=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.K,$.bW],l)
H.a([],p)
o=new G.d("Lottery",k,n,o,0)
$.$get$b().h(0,o)
$.Ca=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.aj,$.O],l)
H.a([],p)
o=new G.d("Blindfolded",k,n,o,0)
$.$get$b().h(0,o)
$.vH=o
o=H.a(["Possessed"],p)
n=$.G
k=H.a([$.bV,$.bi],l)
H.a([],p)
o=new G.d("Possessed",k,n,o,0)
$.$get$b().h(0,o)
$.D6=o
o=H.a(["Infernal"],p)
n=$.H
k=H.a([$.bV,$.ao],l)
H.a([],p)
o=new G.d("Infernal",k,n,o,0)
$.$get$b().h(0,o)
$.BQ=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.W,$.be,$.tx,$.ap],l)
H.a([],p)
o=new G.d("Geppetto",k,n,o,0)
$.$get$b().h(0,o)
$.Bp=o
o=H.a(["Abominable"],p)
n=$.H
k=H.a([$.bi,$.bn],l)
H.a([],p)
o=new G.d("Abominable",k,n,o,0)
$.$get$b().h(0,o)
$.zI=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aB,$.aD],l)
H.a([],p)
o=new G.d("Ashen",k,n,o,0)
$.$get$b().h(0,o)
$.zP=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aB,$.bk],l)
H.a([],p)
o=new G.d("Pale",k,n,o,0)
$.$get$b().h(0,o)
$.CJ=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aB,$.bq],l)
H.a([],p)
o=new G.d("Pitch",k,n,o,0)
$.$get$b().h(0,o)
$.CT=o
o=H.a(["Lit"],p)
n=$.H
k=H.a([$.al,$.ao],l)
H.a([],p)
o=new G.d("Lit",k,n,o,0)
$.$get$b().h(0,o)
$.C5=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a2,$.bk],l)
H.a([],p)
o=new G.d("Hypnotizing",k,n,o,0)
$.$get$b().h(0,o)
$.BH=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bk,$.bf],l)
H.a([],p)
o=new G.d("Tranquilizing",k,n,o,0)
$.$get$b().h(0,o)
$.En=o
o=H.a([],p)
n=$.q
k=H.a([$.bk,$.bq],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.Ab=o
o=H.a(["Ghost Rider's"],p)
n=$.aa
k=H.a([$.hh,$.ao,$.bV],l)
H.a([],p)
o=new G.d("Ghost Rider",k,n,o,0)
$.$get$b().h(0,o)
$.Bq=o
o=H.a(["Logical"],p)
n=$.H
k=H.a([$.Y,$.bm],l)
H.a([],p)
o=new G.d("Logical",k,n,o,0)
$.$get$b().h(0,o)
$.C9=o
o=H.a(["Duelist's"],p)
n=$.aa
k=H.a([$.aK,$.ai],l)
H.a([],p)
o=new G.d("Duelist's",k,n,o,0)
$.$get$b().h(0,o)
$.AP=o
o=H.a(["Silenced"],p)
n=$.G
k=H.a([$.aK,$.aj],l)
H.a([],p)
o=new G.d("Silenced",k,n,o,0)
$.$get$b().h(0,o)
$.DN=o
o=H.a(["Deudly"],p)
n=$.G
k=H.a([$.aK,$.bP],l)
H.a([],p)
o=new G.d("Deudly",k,n,o,0)
$.$get$b().h(0,o)
$.AD=o
o=H.a(["Screaming"],p)
n=$.G
k=H.a([$.aV,$.aX],l)
H.a([],p)
o=new G.d("Screaming",k,n,o,0)
$.$get$b().h(0,o)
$.Dz=o
o=H.a(["Cacophonous"],p)
n=$.H
k=H.a([$.bQ,$.a9],l)
H.a([],p)
o=new G.d("Cacophonous",k,n,o,0)
$.$get$b().h(0,o)
$.A9=o
o=H.a(["Sublime"],p)
n=$.H
k=H.a([$.bQ,$.ax],l)
H.a([],p)
o=new G.d("Sublime",k,n,o,0)
$.$get$b().h(0,o)
$.E8=o
o=H.a(["Masterwork"],p)
n=$.u
k=H.a([$.be,$.bg],l)
H.a([],p)
o=new G.d("Masterwork",k,n,o,0)
$.$get$b().h(0,o)
$.Ci=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.ap,$.aX,$.bn,$.a2],l)
H.a([],p)
o=new G.d("BroodFester",k,n,o,0)
$.$get$b().h(0,o)
$.A3=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bn,$.aj],l)
H.a([],p)
o=new G.d("[REDACTED]",k,n,o,0)
$.$get$b().h(0,o)
$.Dg=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.an,$.bo],l)
H.a([],p)
o=new G.d("Pop Rocks",k,n,o,0)
$.$get$b().h(0,o)
$.D2=o
o=H.a(["Disguised"],p)
n=$.G
k=H.a([$.aj,$.aO],l)
H.a([],p)
o=new G.d("Disguised",k,n,o,0)
$.$get$b().h(0,o)
$.AK=o
o=H.a(["Haunted"],p)
n=$.G
k=H.a([$.aG,$.bV],l)
H.a([],p)
o=new G.d("Haunted",k,n,o,0)
$.$get$b().h(0,o)
$.BB=o
o=H.a(["Cognitohazardous"],p)
n=$.G
k=H.a([$.bn,$.Y],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,n,o,0)
$.$get$b().h(0,o)
$.Ar=o
o=H.a(["Staticy"],p)
n=$.G
k=H.a([$.aG,$.a6],l)
H.a([],p)
o=new G.d("Staticy",k,n,o,0)
$.$get$b().h(0,o)
$.E4=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aU,$.c1],l)
H.a([],p)
o=new G.d("Jadite",k,n,o,0)
$.$get$b().h(0,o)
$.BU=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aT,$.aG],l)
H.a([],p)
o=new G.d("Tickling",k,n,o,0)
$.$get$b().h(0,o)
$.Ej=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.D,$.bO],l)
H.a([],p)
o=new G.d("Composite",k,n,o,0)
$.$get$b().h(0,o)
$.At=o
o=H.a(["High-Powered"],p)
n=$.G
k=H.a([$.bo,$.aK],l)
H.a([],p)
o=new G.d("High-Powered",k,n,o,0)
$.$get$b().h(0,o)
$.BC=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bo,$.ae],l)
H.a([],p)
o=new G.d("Concussive",k,n,o,0)
$.$get$b().h(0,o)
$.Au=o
o=H.a(["Down"],p)
n=$.u
k=H.a([$.aW,$.bz],l)
H.a([],p)
o=new G.d("Down",k,n,o,0)
$.$get$b().h(0,o)
$.AM=o
o=H.a(["Prickly"],p)
n=$.u
k=H.a([$.aG,$.aL],l)
H.a([],p)
o=new G.d("Prickly",k,n,o,0)
$.$get$b().h(0,o)
$.D9=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aG,$.aj,$.a6],l)
H.a([],p)
o=new G.d("Deep-Web",k,n,o,0)
$.$get$b().h(0,o)
$.AG=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.u
k=H.a([$.aL,$.au],l)
H.a([],p)
o=new G.d("Jagged",k,n,o,0)
$.$get$b().h(0,o)
$.BV=o
o=H.a(["Nanofiber"],p)
n=$.u
k=H.a([$.O,$.Y],l)
H.a([],p)
o=new G.d("Nanofiber",k,n,o,0)
$.$get$b().h(0,o)
$.Cz=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.D,$.aV],l)
H.a([],p)
o=new G.d("Clanging",k,n,o,0)
$.$get$b().h(0,o)
$.An=o
o=H.a(["Silver"],p)
n=$.u
k=H.a([$.D,$.ai],l)
H.a([],p)
o=new G.d("Silver",k,n,o,0)
$.$get$b().h(0,o)
$.DP=o
o=H.a(["Withered"],p)
n=$.G
k=H.a([$.aD,$.aQ],l)
H.a([],p)
o=new G.d("Withered",k,n,o,0)
$.$get$b().h(0,o)
$.Ez=o
o=H.a(["Shattered"],p)
n=$.G
k=H.a([$.aU,$.bP],l)
H.a([],p)
o=new G.d("Shattered",k,n,o,0)
$.$get$b().h(0,o)
$.DF=o
o=H.a(["Miner's"],p)
n=$.aa
k=H.a([$.av,$.D],l)
H.a([],p)
o=new G.d("Miner's",k,n,o,0)
$.$get$b().h(0,o)
$.Cq=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a9,$.ap],l)
H.a([],p)
o=new G.d("Singing",k,n,o,0)
$.$get$b().h(0,o)
$.DM=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bi,$.a6],l)
H.a([],p)
o=new G.d("Mitochondrial",k,n,o,0)
$.$get$b().h(0,o)
$.Cr=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.aj,$.a6],l)
H.a([],p)
o=new G.d("Blackout",k,n,o,0)
$.$get$b().h(0,o)
$.zX=o
o=H.a(["Asbestos"],p)
n=$.u
k=H.a([$.av,$.bK],l)
H.a([],p)
o=new G.d("Asbestos",k,n,o,0)
$.$get$b().h(0,o)
$.zJ=o
o=H.a(["Mercurial"],p)
n=$.u
k=H.a([$.bK,$.D],l)
H.a([],p)
o=new G.d("Mercurial",k,n,o,0)
$.$get$b().h(0,o)
$.Cj=o
o=H.a(["Bulletproof"],p)
n=$.u
k=H.a([$.O,$.ae],l)
H.a([],p)
o=new G.d("Bulletproof",k,n,o,0)
$.$get$b().h(0,o)
$.A6=o
o=H.a(["Cotton"],p)
n=$.u
k=H.a([$.aQ,$.O],l)
H.a([],p)
o=new G.d("Cotton",k,n,o,0)
$.$get$b().h(0,o)
$.Av=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bq,$.aP],l)
H.a([],p)
o=new G.d("Blinding",k,n,o,0)
$.$get$b().h(0,o)
$.zY=o
o=H.a(["Brilliant"],p)
n=$.H
k=H.a([$.aP,$.Y],l)
H.a([],p)
o=new G.d("Brilliant",k,n,o,0)
$.$get$b().h(0,o)
$.A2=o
o=H.a(["Offensive"],p)
n=$.H
k=H.a([$.bq,$.Y],l)
H.a([],p)
o=new G.d("Offensive",k,n,o,0)
$.$get$b().h(0,o)
$.CF=o
o=H.a(["Poached"],p)
n=$.G
k=H.a([$.bi,$.bg],l)
H.a([],p)
o=new G.d("Poached",k,n,o,0)
$.$get$b().h(0,o)
$.CZ=o
o=H.a(["Tapestry"],p)
n=$.u
k=H.a([$.O,$.ax],l)
H.a([],p)
o=new G.d("Tapestry",k,n,o,0)
$.$get$b().h(0,o)
$.Eb=o
o=H.a(["Itchy"],p)
n=$.H
k=H.a([$.O,$.aG],l)
H.a([],p)
o=new G.d("Itchy",k,n,o,0)
$.$get$b().h(0,o)
$.BS=o
o=H.a(["Wishbone"],p)
n=$.u
k=H.a([$.bW,$.aY],l)
H.a([],p)
o=new G.d("Wishbone",k,n,o,0)
$.$get$b().h(0,o)
$.Ey=o
o=H.a(["Rattling"],p)
n=$.G
k=H.a([$.aV,$.aY],l)
H.a([],p)
o=new G.d("Rattling",k,n,o,0)
$.$get$b().h(0,o)
$.De=o
o=H.a(["Cranial"],p)
n=$.u
k=H.a([$.Y,$.aY],l)
H.a([],p)
o=new G.d("Cranial",k,n,o,0)
$.$get$b().h(0,o)
$.Az=o
o=H.a(["Humerus"],p)
n=$.u
k=H.a([$.aT,$.aY],l)
H.a([],p)
o=new G.d("Humerus",k,n,o,0)
$.$get$b().h(0,o)
$.BF=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aJ,$.aW],l)
H.a([],p)
o=new G.d("Massage",k,n,o,0)
$.$get$b().h(0,o)
$.Ch=o
o=H.a(["Pestersome","Irksome"],p)
n=$.H
k=H.a([$.aV,$.bq],l)
H.a([],p)
o=new G.d("Pestersome",k,n,o,0)
$.$get$b().h(0,o)
$.CO=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aV,$.bo],l)
H.a([],p)
o=new G.d("Shockwave",k,n,o,0)
$.$get$b().h(0,o)
$.DI=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bK,$.aJ],l)
H.a([],p)
o=new G.d("Antivenom",k,n,o,0)
$.$get$b().h(0,o)
$.zM=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.u
k=H.a([$.ao,$.a2],l)
H.a([],p)
o=new G.d("Will O Wisp",k,n,o,0)
$.$get$b().h(0,o)
$.Ev=o
o=H.a(["Fiberglass"],p)
n=$.u
k=H.a([$.O,$.aU],l)
H.a([],p)
o=new G.d("Fiberglass",k,n,o,0)
$.$get$b().h(0,o)
$.B6=o
o=H.a(["Skull"],p)
n=$.u
k=H.a([$.aY,$.aX],l)
H.a([],p)
o=new G.d("Skull",k,n,o,0)
$.$get$b().h(0,o)
$.DT=o
o=H.a(["Enchanted"],p)
n=$.G
k=H.a([$.a2,$.bW],l)
H.a([],p)
o=new G.d("Enchanted",k,n,o,0)
$.$get$b().h(0,o)
$.AZ=o
o=H.a(["Berserker's"],p)
n=$.aa
k=H.a([$.a2,$.bq],l)
H.a([],p)
o=new G.d("Berserker's",k,n,o,0)
$.$get$b().h(0,o)
$.zW=o
o=H.a(["Clerical"],p)
n=$.aa
k=H.a([$.a2,$.aJ],l)
H.a([],p)
o=new G.d("Clerical",k,n,o,0)
$.$get$b().h(0,o)
$.Ao=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aJ,$.ao],l)
H.a([],p)
o=new G.d("Cauterizing",k,n,o,0)
$.$get$b().h(0,o)
$.Af=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c1,$.aP],l)
H.a([],p)
o=new G.d("X-Ray",k,n,o,0)
$.$get$b().h(0,o)
$.EC=o
o=H.a(["Clever"],p)
n=$.H
k=H.a([$.Y,$.bW],l)
H.a([],p)
o=new G.d("Clever",k,n,o,0)
$.$get$b().h(0,o)
$.Ap=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.aW,$.ao],l)
H.a([],p)
o=new G.d("Fireplace",k,n,o,0)
$.$get$b().h(0,o)
$.B9=o
o=H.a(["Crackling"],p)
n=$.G
k=H.a([$.aV,$.ao],l)
H.a([],p)
o=new G.d("Crackling",k,n,o,0)
$.$get$b().h(0,o)
$.Ay=o
o=H.a(["Thumping"],p)
n=$.G
k=H.a([$.aV,$.c7],l)
H.a([],p)
o=new G.d("Thumping",k,n,o,0)
$.$get$b().h(0,o)
$.Eh=o
o=H.a(["Shrieking","Banshee"],p)
n=$.G
k=H.a([$.bV,$.aV],l)
H.a([],p)
o=new G.d("Banshee",k,n,o,0)
$.$get$b().h(0,o)
$.DK=o
o=H.a(["Surreal"],p)
n=$.H
k=H.a([$.aT,$.bn],l)
H.a([],p)
o=new G.d("Surreal2",k,n,o,0)
$.$get$b().h(0,o)
$.Ea=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aJ,$.aQ],l)
H.a([],p)
o=new G.d("Aloe",k,n,o,0)
$.$get$b().h(0,o)
$.zL=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aB,$.aQ],l)
H.a([],p)
o=new G.d("Rose",k,n,o,0)
$.$get$b().h(0,o)
$.Dk=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aT,$.ae],l)
H.a([],p)
o=new G.d("Knock Knock",k,n,o,0)
$.$get$b().h(0,o)
$.C_=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a2,$.bK],l)
H.a([],p)
o=new G.d("Lifesteal",k,n,o,0)
$.$get$b().h(0,o)
$.C2=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.ax,$.aD],l)
H.a([],p)
o=new G.d("Tragic",k,n,o,0)
$.$get$b().h(0,o)
$.Em=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.au,$.aT],l)
H.a([],p)
o=new G.d("Slapstick",k,n,o,0)
$.$get$b().h(0,o)
$.DU=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bQ,$.aT],l)
H.a([],p)
o=new G.d("Gross Out",k,n,o,0)
$.$get$b().h(0,o)
$.vT=o
o=H.a(["Flowery"],p)
n=$.u
k=H.a([$.ax,$.aQ],l)
H.a([],p)
o=new G.d("Flowery",k,n,o,0)
$.$get$b().h(0,o)
$.Bf=o
o=H.a(["Poison Ivy"],p)
n=$.u
k=H.a([$.bK,$.aQ],l)
H.a([],p)
o=new G.d("Poison Ivy",k,n,o,0)
$.$get$b().h(0,o)
$.D0=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.G
k=H.a([$.a2,$.bz],l)
H.a([],p)
o=new G.d("Winged",k,n,o,0)
$.$get$b().h(0,o)
$.Ew=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aQ,$.an,$.aD],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,n,o,0)
$.$get$b().h(0,o)
$.Bj=o
o=H.a(["Lawful"],p)
n=$.H
k=H.a([$.bf,$.ap],l)
H.a([],p)
o=new G.d("Lawful",k,n,o,0)
$.$get$b().h(0,o)
$.C0=o
o=H.a(["Chaotic"],p)
n=$.H
k=H.a([$.bq,$.ap],l)
H.a([],p)
o=new G.d("Chaotic",k,n,o,0)
$.$get$b().h(0,o)
$.Aj=o
o=H.a(["Hypothermic"],p)
n=$.G
k=H.a([$.aD,$.bm],l)
H.a([],p)
o=new G.d("Hypothermic",k,n,o,0)
$.$get$b().h(0,o)
$.BI=o
o=H.a(["Hyperthermic"],p)
n=$.G
k=H.a([$.aD,$.ao],l)
H.a([],p)
o=new G.d("Hyperthermic",k,n,o,0)
$.$get$b().h(0,o)
$.BG=o
o=H.a(["Shackled"],p)
n=$.G
k=H.a([$.bf,$.c7],l)
H.a([],p)
o=new G.d("Shackled",k,n,o,0)
$.$get$b().h(0,o)
$.DB=o
o=H.a(["Poetic"],p)
n=$.H
k=H.a([$.Y,$.aB],l)
H.a([],p)
o=new G.d("Poetic",k,n,o,0)
$.$get$b().h(0,o)
$.D_=o
o=H.a(["Holographic"],p)
n=$.u
k=H.a([$.aP,$.Y,$.aU,$.a6],l)
H.a([],p)
o=new G.d("Holographic",k,n,o,0)
$.$get$b().h(0,o)
$.BD=o
o=H.a(["Casket","Coffin"],p)
n=$.u
k=H.a([$.W,$.aD],l)
H.a([],p)
o=new G.d("Casket",k,n,o,0)
$.$get$b().h(0,o)
$.Ae=o
o=H.a(["Spectral"],p)
n=$.u
k=H.a([$.bV,$.a2],l)
H.a([],p)
o=new G.d("Spectral",k,n,o,0)
$.$get$b().h(0,o)
$.E_=o
o=H.a(["Phoenix"],p)
n=$.u
k=H.a([$.ao,$.bz],l)
H.a([],p)
o=new G.d("Phoenix",k,n,o,0)
$.$get$b().h(0,o)
$.CP=o
o=H.a(["Tattered"],p)
n=$.G
k=H.a([$.O,$.aD],l)
H.a([],p)
o=new G.d("Tattered",k,n,o,0)
$.$get$b().h(0,o)
$.Ee=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a9,$.W],l)
H.a([],p)
o=new G.d("Woodwind",k,n,o,0)
$.$get$b().h(0,o)
$.EB=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aG,$.aY],l)
H.a([],p)
o=new G.d("Bone Hurting",k,n,o,0)
$.$get$b().h(0,o)
$.A_=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aJ,$.aY],l)
H.a([],p)
o=new G.d("Bone Healing:",k,n,o,0)
$.$get$b().h(0,o)
$.zZ=o
o=H.a(["Calcium"],p)
n=$.u
k=H.a([$.aY,$.aJ,$.an],l)
H.a([],p)
o=new G.d("Calcium",k,n,o,0)
$.$get$b().h(0,o)
$.Aa=o
o=H.a(["Fleece"],p)
n=$.u
k=H.a([$.O,$.ao],l)
H.a([],p)
o=new G.d("Fleece",k,n,o,0)
$.$get$b().h(0,o)
$.Bc=o
o=H.a(["Potted"],p)
n=$.u
k=H.a([$.bO,$.aQ],l)
H.a([],p)
o=new G.d("Potted",k,n,o,0)
$.$get$b().h(0,o)
$.D8=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.u
k=H.a([$.D,$.an],l)
H.a([],p)
o=new G.d("Canned",k,n,o,0)
$.$get$b().h(0,o)
$.Ac=o
o=H.a(["Diseased"],p)
n=$.G
k=H.a([$.aD,$.bi],l)
H.a([],p)
o=new G.d("Diseased",k,n,o,0)
$.$get$b().h(0,o)
$.AH=o
o=H.a(["Porcupine"],p)
n=$.u
k=H.a([$.aL,$.ce],l)
H.a([],p)
o=new G.d("Porcupine",k,n,o,0)
$.$get$b().h(0,o)
$.D4=o
o=H.a(["Fanged"],p)
n=$.G
k=H.a([$.aY,$.aL],l)
H.a([],p)
o=new G.d("Fanged",k,n,o,0)
$.$get$b().h(0,o)
$.B2=o
o=H.a(["Basalt"],p)
n=$.u
k=H.a([$.av,$.aj],l)
H.a([],p)
o=new G.d("Basalt",k,n,o,0)
$.$get$b().h(0,o)
$.zT=o
o=H.a(["Obsidian"],p)
n=$.u
k=H.a([$.aU,$.aj],l)
H.a([],p)
o=new G.d("Obsidian",k,n,o,0)
$.$get$b().h(0,o)
$.CE=o
o=H.a(["Fenestrated"],p)
n=$.u
k=H.a([$.aU,$.W],l)
H.a([],p)
o=new G.d("Fenestrated",k,n,o,0)
$.$get$b().h(0,o)
$.B4=o
o=H.a(["Plexiglass"],p)
n=$.u
k=H.a([$.aU,$.aA],l)
H.a([],p)
o=new G.d("Plexiglass",k,n,o,0)
$.$get$b().h(0,o)
$.CX=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bO,$.K],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,n,o,0)
$.$get$b().h(0,o)
$.Ai=o
o=H.a(["Fungal"],p)
n=$.u
k=H.a([$.aQ,$.bQ],l)
H.a([],p)
o=new G.d("Fungal",k,n,o,0)
$.$get$b().h(0,o)
$.Bn=o
o=H.a(["Thorny"],p)
n=$.G
k=H.a([$.aQ,$.aL],l)
H.a([],p)
o=new G.d("Thorny",k,n,o,0)
$.$get$b().h(0,o)
$.Eg=o
o=H.a(["Bulbed"],p)
n=$.G
k=H.a([$.aQ,$.ae],l)
H.a([],p)
o=new G.d("Bulbed",k,n,o,0)
$.$get$b().h(0,o)
$.A5=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aU,$.aK],l)
H.a([],p)
o=new G.d("Glass Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.Bt=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aQ,$.c8],l)
H.a([],p)
o=new G.d("Caoutchouc",k,n,o,0)
$.$get$b().h(0,o)
$.CV=o
o=H.a(["Cellulose"],p)
n=$.u
k=H.a([$.aQ,$.aA],l)
H.a([],p)
o=new G.d("Cellulose",k,n,o,0)
$.$get$b().h(0,o)
$.Ah=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a9,$.aX],l)
H.a([],p)
o=new G.d("Horrorcore",k,n,o,0)
$.$get$b().h(0,o)
$.BE=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bn,$.a9],l)
H.a([],p)
o=new G.d("Nightcore",k,n,o,0)
$.$get$b().h(0,o)
$.CB=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bn,$.a6,$.a9],l)
H.a([],p)
o=new G.d("Crazy Bus",k,n,o,0)
$.$get$b().h(0,o)
$.AA=o
o=H.a(["Burdock"],p)
n=$.u
k=H.a([$.aQ,$.ce],l)
H.a([],p)
o=new G.d("Burdock",k,n,o,0)
$.$get$b().h(0,o)
$.A7=o
o=H.a(["Necrotic"],p)
n=$.G
k=H.a([$.aY,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.u
k=H.a([$.aY,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.G
k=H.a([$.aY,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.aY,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.u
k=H.a([$.aY,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.aY,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.H
k=H.a([$.W,$.aV],l)
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
n=$.G
k=H.a([$.W,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.u
k=H.a([$.W,$.bg],l)
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
n=$.aa
k=H.a([$.W,$.aX],l)
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
k=H.a([$.W,$.bi],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.W,$.av],l)
H.a([],p)
$.$get$b().h(0,new G.d("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.u
k=H.a([$.aA,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.K,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.u
k=H.a([$.K,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.K,$.aD],l)
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
k=H.a([$.av,$.aW],l)
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
n=$.G
k=H.a([$.av,$.ce],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.G
k=H.a([$.Y,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.G
k=H.a([$.O,$.bi],l)
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
k=H.a([$.O,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.H
k=H.a([$.O,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.G
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
k=H.a([$.O,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.u
k=H.a([$.O,$.bg],l)
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
k=H.a([$.O,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.u
k=H.a([$.O,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.u
k=H.a([$.O,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.aa
k=H.a([$.Y,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.u
k=H.a([$.a2,$.W],l)
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
k=H.a([$.Y,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.H
k=H.a([$.be,$.aO,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.u
k=H.a([$.bn,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bn,$.K],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.aa
k=H.a([$.bn,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.aa
k=H.a([$.a_,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.aa
k=H.a([$.Y,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.u
k=H.a([$.a_,$.aA,$.bk,$.ae],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a_,$.dt,$.W,$.K],l)
H.a([],p)
$.$get$b().h(0,new G.d("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.aa
k=H.a([$.aj,$.a2,$.be,$.aG,$.aX],l)
H.a([],p)
o=new G.d("Queenly",k,n,o,0)
$.$get$b().h(0,o)
$.Db=o
o=H.a(["Kingly"],p)
n=$.aa
k=H.a([$.aX,$.ae,$.c7,$.a2,$.be],l)
H.a([],p)
o=new G.d("Kingly",k,n,o,0)
$.$get$b().h(0,o)
$.BZ=o
o=H.a(["Jack"],p)
n=$.aa
k=H.a([$.aL,$.au,$.D,$.aj],l)
H.a([],p)
o=new G.d("Jack",k,n,o,0)
$.$get$b().h(0,o)
$.BT=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a_,$.aO,$.W,$.N,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a_,$.aw,$.K,$.D,$.Y,$.N],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a_,$.aw,$.K,$.Y,$.N,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a_,$.aD,$.K,$.Y,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.aa
k=H.a([$.a_,$.aP,$.D,$.aL,$.au,$.f9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.aa
k=H.a([$.a_,$.K,$.bq,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.aa
k=H.a([$.a_,$.a2,$.O,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.aa
k=H.a([$.a_,$.aG,$.aY,$.D,$.f8,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.aa
k=H.a([$.a_,$.av,$.ai,$.jh,$.ae],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.G
k=H.a([$.a_,$.O,$.bg,$.ax,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a_,$.D,$.bg,$.ax,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a_,$.aA,$.a6,$.aj,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a_,$.O,$.Y,$.a2,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a_,$.O,$.Y,$.ax,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.G
k=$.a_
j=$.K
i=$.Y
i=H.a([k,j,i,$.aw,i,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.u
i=H.a([$.a_,$.ax,$.bO,$.ae,$.ei,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.aa
i=H.a([$.a_,$.aw,$.K,$.bq,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.aa
i=H.a([$.a2,$.K],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.K,$.Y,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a_,$.D,$.aj,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.G
i=H.a([$.a_,$.D,$.aU,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a_,$.aO,$.W,$.al,$.bk,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a_,$.ao,$.D,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a_,$.a6,$.K,$.aw,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a_,$.W,$.ap,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.aa
i=H.a([$.a_,$.be,$.bz,$.aP,$.a9,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.u
i=H.a([$.a_,$.aJ,$.aU,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.u
i=H.a([$.a_,$.aP,$.bW,$.av,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.aa
i=H.a([$.a_,$.aG,$.av,$.ai,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.aa
i=H.a([$.a_,$.an,$.bq,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.aa
i=H.a([$.a_,$.D,$.a9,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.H
i=H.a([$.a_,$.aU,$.c1,$.aP,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.u
i=H.a([$.D,$.bn],l)
H.a([],p)
$.$get$b().h(0,new G.d("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.aa
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
n=$.G
i=H.a([$.D,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.G
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
i=H.a([$.bO,$.ae],l)
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
i=H.a([$.bO,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.G
i=H.a([$.bO,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.u
i=H.a([$.bO,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.G
i=H.a([$.bO,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.H
i=H.a([$.bP,$.K],l)
H.a([],p)
$.$get$b().h(0,new G.d("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.G
i=H.a([$.bP,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.H
i=H.a([$.bP,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.G
i=H.a([$.bP,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.u
i=H.a([$.bP,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.G
i=H.a([$.bP,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.aa
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
i=H.a([$.bP,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.aa
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
n=$.G
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
i=H.a([$.K,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.K,$.aB],l)
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
i=H.a([$.av,$.aV],l)
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
i=H.a([$.bV,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.u
i=H.a([$.bV,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.H
i=H.a([$.bV,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.u
i=H.a([$.bi,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.u
i=H.a([$.bi,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.u
i=H.a([$.bi,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.G
i=H.a([$.bi,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bn,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.u
i=H.a([$.bn,$.aO],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.G
i=H.a([$.bn,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bn,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.G
i=H.a([$.ce,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.u
i=H.a([$.ce,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.aa
i=H.a([$.ce,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.u
i=H.a([$.ce,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.u
i=H.a([$.aQ,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.G
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
i=H.a([$.aQ,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.u
i=H.a([$.aQ,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.u
i=H.a([$.aQ,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.G
i=H.a([$.aQ,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.G
i=H.a([$.bz,$.aV],l)
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
n=$.tD
i=H.a([$.bz,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.G
i=H.a([$.bz,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.H
i=H.a([$.bQ,$.aX],l)
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
i=H.a([$.aX,$.aL],l)
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
i=H.a([$.an,$.ae],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.c7,$.a9],l)
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
i=H.a([$.aK,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.aa
i=H.a([$.aK,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.aa
i=H.a([$.aK,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.G
i=H.a([$.aK,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.G
i=H.a([$.aK,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.aa
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
n=$.G
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
i=H.a([$.a9,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.u
i=H.a([$.bW,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.u
i=H.a([$.bW,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.aa
i=H.a([$.bW,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.aa
i=H.a([$.aP,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.G
i=H.a([$.aP,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.H
i=H.a([$.aP,$.aT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.G
i=H.a([$.aP,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.aa
i=H.a([$.aj,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.aj,$.a2,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.G
i=H.a([$.aj,$.aT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.H
i=H.a([$.aj,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.aj,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.aa
i=H.a([$.aj,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.aa
i=H.a([$.bk,$.a9],l)
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
n=$.G
i=H.a([$.bK,$.c1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.G
i=H.a([$.aD,$.c1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aD,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.G
i=H.a([$.a6,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aD,$.bg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.G
i=H.a([$.aD,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.H
i=H.a([$.aD,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bo,$.aO],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bo,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bo,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aD,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bo,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a6,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bo,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bo,$.a9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.G
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
i=H.a([$.a2,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.G
i=H.a([$.a6,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bq,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bK,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bK,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bK,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.G
i=H.a([$.bK,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.G
i=H.a([$.bK,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bK,$.aT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.G
i=H.a([$.a9,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a9,$.al],l)
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
i=H.a([$.a9,$.bf],l)
H.a([],p)
$.$get$b().h(0,new G.d("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a9,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a9,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a9,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a9,$.aJ],l)
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
n=$.aa
i=H.a([$.Y,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.bf,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.bf,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.bf,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.G
i=H.a([$.bf,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.H
i=H.a([$.ax,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.G
i=H.a([$.aW,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.aW,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.H
i=H.a([$.an,$.aW],l)
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
i=H.a([$.ap,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Y,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.ap,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.aa
i=H.a([$.aB,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Y,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.G
i=H.a([$.aB,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.G
i=H.a([$.aB,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.G
i=H.a([$.aB,$.aV,$.aw,$.ji],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.G
i=H.a([$.an,$.aT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.G
i=H.a([$.an,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.G
i=H.a([$.an,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.G
i=H.a([$.a2,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.G
i=H.a([$.an,$.aT,$.a6,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.u
i=H.a([$.D,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.aY,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.G
i=H.a([$.bP,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.W,$.Y],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.aA,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.G
i=H.a([$.c8,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.u
i=H.a([$.K,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.G
i=H.a([$.K,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.aa
i=H.a([$.aU,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.G
i=H.a([$.bi,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.G
i=H.a([$.ao,$.bn],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.u
i=H.a([$.aB,$.ce],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.aa
i=H.a([$.aQ,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.G
i=H.a([$.aJ,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.H
i=H.a([$.be,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.aa
i=H.a([$.bW,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.G
i=H.a([$.aj,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.G
i=H.a([$.ao,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.G
i=H.a([$.ao,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.G
i=H.a([$.ao,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.G
i=H.a([$.aD,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.G
i=H.a([$.bg,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.G
i=H.a([$.bg,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.G
i=H.a([$.bg,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.G
i=H.a([$.aG,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.G
i=H.a([$.aV,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.G
i=H.a([$.aB,$.aO],l)
H.a([],p)
$.$get$b().h(0,new G.d("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.G
i=H.a([$.a2,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.G
i=H.a([$.N,$.S,$.be],l)
H.a([],p)
$.$get$b().h(0,new G.d("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.G
i=H.a([$.N,$.S,$.be,$.aO,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.G
i=H.a([$.N,$.S,$.be,$.ce],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.G
i=H.a([$.av,$.bP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.G
i=H.a([$.bz,$.bP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.G
i=H.a([$.aQ,$.aX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.G
i=H.a([$.a2,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.G
i=H.a([$.aX,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.G
l=H.a([$.bO,$.bP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chipped",l,n,o,0))
if($.wC==null){o=$.mi
n=$.aL
l=$.au
k=$.aY
j=new U.ag(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a4(null,null,null,m),0,3)
j.L("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.wC=j}o=$.$get$ak();(o&&C.b).sm(o,0)
o=$.$get$ak()
n=$.O
l=$.vT
k=new U.ag(n,null,null,null,"Speedo",!1,P.a4(null,null,null,m),0,3)
k.L("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$ak()
o=$.f9
n=$.au
l=$.D
j=$.aL
i=new U.ag(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a4(null,null,null,m),0,3)
i.L("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$ak()
k=$.tp
o=$.ae
j=$.D
l=new U.ag(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a4(null,null,null,m),0,3)
l.L("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$ak()
i=$.tz
k=$.aK
j=$.D
o=new U.ag(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a4(null,null,null,m),0,3)
o.L("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$ak()
l=$.tw
i=$.aK
j=$.D
k=new U.ag(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a4(null,null,null,m),0,3)
k.L("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$ak()
o=$.w5
l=$.aK
j=$.D
i=new U.ag(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a4(null,null,null,m),0,3)
i.L("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$ak()
k=$.vG
o=$.aL
j=$.au
l=$.D
n=new U.ag(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a4(null,null,null,m),0,3)
n.L("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$ak()
i=$.tk
k=$.aL
l=$.au
j=$.D
o=new U.ag(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a4(null,null,null,m),0,3)
o.L("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$ak()
n=$.hi
i=$.ae
j=$.bO
l=new U.ag(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a4(null,null,null,m),0,3)
l.L("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$ak()
o=$.w8
n=$.au
j=$.D
i=new U.ag(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a4(null,null,null,m),0,3)
i.L("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$ak()
l=$.vJ
o=$.au
j=$.D
n=new U.ag(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a4(null,null,null,m),0,3)
n.L("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$ak()
i=$.vP
l=$.aL
j=$.D
o=new U.ag(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a4(null,null,null,m),0,3)
o.L("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$ak()
n=$.tv
i=$.bz
j=$.bn
l=new U.ag(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a4(null,null,null,m),0,3)
l.L("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$ak()
o=$.ei
n=$.c7
j=$.av
i=$.ae
k=new U.ag(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a4(null,null,null,m),0,3)
k.L("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$ak()
l=$.tl
o=$.aA
i=$.bW
j=new U.ag(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a4(null,null,null,m),0,3)
j.L("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$ak()
k=$.tu
l=$.D
i=$.aL
o=new U.ag(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a4(null,null,null,m),0,3)
o.L("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$ak()
j=$.wa
k=$.W
i=$.ae
l=new U.ag(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a4(null,null,null,m),0,3)
l.L("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$ak()
o=$.wc
j=$.bf
i=$.O
k=new U.ag(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a4(null,null,null,m),0,3)
k.L("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$ak()
l=$.th
o=$.aK
i=$.av
j=$.O
n=$.aL
h=new U.ag(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a4(null,null,null,m),0,3)
h.L("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$ak()
k=$.ji
l=$.W
n=$.ae
j=new U.ag(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a4(null,null,null,m),0,3)
j.L("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$ak()
h=$.jg
k=$.W
n=new U.ag(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a4(null,null,null,m),0,3)
n.L("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$ak()
j=$.aw
h=$.K
k=$.ae
l=new U.ag(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a4(null,null,null,m),0,3)
l.L("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$ak()
n=$.w2
j=$.D
k=$.ae
h=new U.ag(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a4(null,null,null,m),0,3)
h.L("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$ak()
l=$.tg
n=$.au
k=$.D
j=$.ae
i=new U.ag(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a4(null,null,null,m),0,3)
i.L("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.vY
l=$.W
j=$.aL
k=new U.ag(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a4(null,null,null,m),0,3)
k.L("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.f8
h=$.D
j=$.ae
l=new U.ag(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a4(null,null,null,m),0,3)
l.L("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.vI
i=$.W
j=$.ae
h=new U.ag(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a4(null,null,null,m),0,3)
h.L("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.wd
k=$.aA
j=$.ae
i=new U.ag(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a4(null,null,null,m),0,3)
i.L("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.w9
l=$.W
j=$.aK
k=new U.ag(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a4(null,null,null,m),0,3)
k.L("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.w7
h=$.D
j=$.au
l=new U.ag(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a4(null,null,null,m),0,3)
l.L("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.ts
i=$.D
j=$.aK
h=new U.ag(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a4(null,null,null,m),0,3)
h.L("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.mj
k=$.D
j=$.bo
i=new U.ag(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a4(null,null,null,m),0,3)
i.L("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.ei
l=$.c8
j=$.ae
k=new U.ag(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a4(null,null,null,m),0,3)
k.L("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.wb
h=$.D
j=$.aL
l=new U.ag(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a4(null,null,null,m),0,3)
l.L("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.mh
i=$.K
j=$.au
h=new U.ag(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a4(null,null,null,m),0,3)
h.L("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.tm
k=$.D
j=$.ae
i=new U.ag(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a4(null,null,null,m),0,3)
i.L("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.ej
l=$.aW
j=$.O
k=new U.ag(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a4(null,null,null,m),0,3)
k.L("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.hh
h=$.D
j=$.bf
l=new U.ag(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a4(null,null,null,m),0,3)
l.L("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.tC
i=$.D
j=$.ae
h=new U.ag(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a4(null,null,null,m),0,3)
h.L("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.w6
k=$.D
j=$.ae
i=new U.ag(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a4(null,null,null,m),0,3)
i.L("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.tB
l=$.W
j=$.ae
k=new U.ag(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a4(null,null,null,m),0,3)
k.L("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.tx
h=$.W
j=$.aD
l=new U.ag(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a4(null,null,null,m),0,3)
l.L("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.ty
i=$.D
j=$.au
h=new U.ag(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a4(null,null,null,m),0,3)
h.L("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.ml
k=$.D
j=$.Y
i=new U.ag(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a4(null,null,null,m),0,3)
i.L("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.jh
l=$.av
j=$.c7
k=new U.ag(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a4(null,null,null,m),0,3)
k.L("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.vS
h=$.W
j=$.ae
l=new U.ag(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a4(null,null,null,m),0,3)
l.L("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.vX
i=$.D
j=$.au
h=new U.ag(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a4(null,null,null,m),0,3)
h.L("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.w4
k=$.D
j=$.au
i=new U.ag(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a4(null,null,null,m),0,3)
i.L("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.w3
l=$.D
j=$.c7
k=new U.ag(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a4(null,null,null,m),0,3)
k.L("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.dt
h=$.W
j=$.ae
m=new U.ag(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a4(null,null,null,m),0,3)
m.L("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bG("Duttle","Dut",null,null)
$.$get$bN().push(m)
$.vp=m
m=new S.bG("Salamander","GLUB",null,null)
$.$get$bN().push(m)
$.t6=m
m=new S.bG("Crocodile","NAK",null,null)
$.$get$bN().push(m)
$.dY=m
m=new S.bG("Iguana","thip",null,null)
$.$get$bN().push(m)
$.ef=m
m=new S.bG("Turtle","click",null,null)
$.$get$bN().push(m)
$.f0=m
m=new S.bG("Skeleton","rattle",null,null)
$.$get$bN().push(m)
$.dK=m
m=new S.bG("Robot","BEEP",null,null)
$.$get$bN().push(m)
$.eZ=m
m=new S.bG("Chameleon","BLEP",null,null)
$.$get$bN().push(m)
$.ip=m
m=new S.bG("Axolotl","BARP",null,null)
$.$get$bN().push(m)
$.t0=m
m=new S.bG("Lizard","bleb",null,null)
$.$get$bN().push(m)
$.lC=m
m=new S.bG("Snake","hiss",null,null)
$.$get$bN().push(m)
$.t8=m
m=new S.bG("Alligator","nak",null,null)
$.$get$bN().push(m)
$.io=m
m=new S.bG("Mole","snuff",null,null)
$.$get$bN().push(m)
$.vq=m
m=new S.bG("Bird","tweet",null,null)
$.$get$bN().push(m)
$.lB=m
m=new S.bG("Wolf","howl",null,null)
$.$get$bN().push(m)
$.lI=m
m=new S.bG("Newt","skitter",null,null)
$.$get$bN().push(m)
$.vr=m
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
$.z6=m
m=new S.i7("Dersite","mutter",null,null)
$.$get$bN().push(m)
$.z3=m
m=new S.m2("Horror Terror","a;lkjdf",null,null)
$.$get$bN().push(m)
$.z5=m
$.z7=H.a([$.t8,$.io,$.vr,$.t6,$.ef,$.dY,$.f0,$.ip,$.t0,$.lC],[S.bG])
$.ha=new T.c2(0,"spices")
m=$.z9
$.eW=new T.c2(m,"fresh baked bread")
$.cw=new T.c2(m,"sweetness")
$.c5=new T.c2(m,"nature")
$.lH=new T.c2(0,"salt")
k=$.z8
$.cZ=new T.c2(k,"rot")
$.z4=new T.c2(k,"feet")
$.eY=new T.c2(0,"oil")
$.t2=new T.c2(0,"chlorine")
$.h8=new T.c2(0,"nothing in particular")
$.ee=new T.c2(0,"gunpowder")
$.h7=new T.c2(0,"must")
$.cC=new T.c2(m,"zoo animals")
$.dZ=new T.c2(k,"sweat")
$.iu=new T.c2(0,"ozone")
$.c4=new T.c2(0,"deceit")
$.dd=new T.c2(k,"blood")
$.f_=new T.c2(k,"smoke")
$.c_=new K.bU(k,"creepy")
$.aN=new K.bU(m,"calm")
$.cc=new K.bU(k,"frantic")
$.lE=new K.bU(0,"like nothing")
$.cb=new K.bU(m,"energizing")
$.cB=new K.bU(0,"studious")
$.dr=new K.bU(0,"dangerous")
$.dH=new K.bU(0,"glamorous")
$.h9=new K.bU(0,"romantic")
$.dq=new K.bU(m,"creative")
$.lD=new K.bU(0,"lucky")
$.ds=new K.bU(0,"happy")
$.dI=new K.bU(0,"heroic")
$.d_=new K.bU(k,"stupid")
$.lD=new K.bU(0,"lucky")
$.vo=new K.bU(0,"claustrophobic")
$.lF=new K.bU(0,"overheated")
$.ed=new K.bU(k,"confusing")
$.cu=new K.bU(0,"contemplatative")
$.cQ=new M.bB(0,"clanking")
$.cv=new M.bB(0,"laughing")
$.bd=new M.bB(m,"rustling")
$.eh=new M.bB(k,"screaming")
$.is=new M.bB(k,"foot steps")
$.eX=new M.bB(k,"beeping")
$.vt=new M.bB(k,"whispering")
$.ec=new M.bB(0,"clacking")
$.cz=new M.bB(0,"applause")
$.eg=new M.bB(0,"jazz")
$.t4=new M.bB(0,"disco")
$.h6=new M.bB(0,"drums")
$.ir=new M.bB(0,"echoing")
$.lG=new M.bB(k,"roaring")
$.it=new M.bB(k,"gunfire")
$.cA=new M.bB(0,"music")
$.t7=new M.bB(0,"singing")
$.t1=new M.bB(0,"chanting")
$.f1=new M.bB(0,"whistling")
$.de=new M.bB(m,"nature")
$.t3=new M.bB(0,"croaking")
$.dJ=new M.bB(0,"silence")
$.t5=new M.bB(0,"pulsing")
$.vs=new M.bB(0,"ticking")
m=H.a([],p)
o=[X.F,P.V]
n=A.a1
l=E.M
k=[l]
j=[A.fN]
m=new S.mC(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.w(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Knight",3,!0,!1,!1)
$.Fu=m
m=P.l(H.a([new E.M($.ci,0.4,!1)],k),l)
i=H.a([],p)
m=new S.o0(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.w(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Seer",6,!0,!1,!1)
$.FG=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kv("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.w(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Bard",9,!0,!1,!1)
$.Fp=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m_("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.w(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Heir",8,!0,!1,!1)
$.Fs=m
m=H.a([],p)
m=new U.mX(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.w(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Maid",0,!0,!1,!1)
$.Fx=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.nR(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.w(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Rogue",4,!0,!1,!1)
$.FC=m
m=H.a([],p)
m=new V.nr(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.w(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Page",1,!0,!1,!1)
$.FA=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.oV(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.w(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Thief",7,!0,!1,!1)
$.FJ=m
m=P.l(H.a([new E.M($.ci,0.1,!1)],k),l)
i=H.a([],p)
m=new R.oH(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.w(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Sylph",5,!0,!1,!1)
$.FI=m
m=H.a([],p)
m=new N.nK("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.w(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Prince",10,!0,!1,!1)
$.FB=m
m=P.l(H.a([new E.M($.ci,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pp("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.w(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Witch",11,!0,!1,!1)
$.FL=m
m=P.l(H.a([new E.M($.ci,0.4,!1)],k),l)
i=H.a([],p)
m=new S.mW("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.w(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Mage",2,!0,!1,!1)
$.Fw=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.M($.ci,3,!1),new E.M($.us,-2,!1)],k),l)
e=H.a([],p)
m=new E.pl("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.w(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Waste",12,!1,!1,!1)
$.FK=m
m=H.a([],p)
m=new Y.nX("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.w(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Scout",13,!1,!1,!1)
$.FE=m
m=P.l(H.a([new E.M($.ci,0.5,!1)],k),l)
i=H.a([],p)
m=new L.nY("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.w(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Scribe",15,!1,!1,!1)
$.FF=m
m=P.l(H.a([new E.M($.ci,0.5,!1)],k),l)
i=H.a([],p)
m=new E.nV(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.w(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Sage",14,!1,!1,!1)
$.FD=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.lY("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.w(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Guide",16,!1,!1,!1)
$.Fr=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.M($.ci,3,!1)],k),l)
g=H.a([],p)
m=new Y.lX(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.w(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Grace",17,!1,!1,!1)
$.Fq=m
m=P.l(H.a([new E.M($.ci,0.1,!1)],k),l)
i=H.a([],p)
m=new E.n5("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.w(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Muse",18,!1,!1,!1)
$.Fy=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.I(null,null,n)
h=P.l(H.a([new E.M($.ci,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.mU("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.w(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Lord",19,!1,!1,!1)
$.Fv=m
m=P.l(H.a([new E.M($.ci,-0.1,!1),new E.M($.du,1,!1)],k),l)
i=H.a([],p)
m=new Y.o7("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.w(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Smith",20,!1,!1,!1)
$.FH=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.l(H.a([new E.M($.ci,4,!1),new E.M($.us,-3,!1)],k),l)
e=H.a([],p)
m=new X.m6("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.w(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a5("Human",21,!1,!1,!0)
$.Ft=m
$.Fz=T.Fo("Null",255,!1,!0,!1)
m=A.dE
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
b=P.l(H.a([new E.M($.du,2,!0),new E.M($.ev,1,!0),new E.M($.hK,-2,!0)],k),l)
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
a=new N.oa(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ak(0,"Space",!0,!1,!1)
$.yu=a
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
g=P.l(H.a([new E.M($.hJ,2,!0),new E.M($.hK,1,!0),new E.M($.fn,-2,!0)],k),l)
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
h=new N.oW(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ak(1,"Time",!0,!1,!1)
$.yv=h
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
b=P.l(H.a([new E.M($.hK,2,!0),new E.M($.d6,1,!0),new E.M($.ev,-1,!0),new E.M($.ew,-1,!0),new E.M($.ci,0.05,!1)],k),l)
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
a=new T.kD(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ak(2,"Breath",!0,!1,!1)
$.yh=a
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
g=P.l(H.a([new E.M($.du,2,!0),new E.M($.fn,1,!0),new E.M($.hJ,-1,!0),new E.M($.ev,-1,!0),new E.M($.ci,0.01,!1)],k),l)
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
h=new U.l6(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ak(3,"Doom",!0,!1,!1)
$.yi=h
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
b=P.l(H.a([new E.M($.ew,2,!0),new E.M($.d6,1,!0),new E.M($.du,-2,!0)],k),l)
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
a=new T.kA(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ak(4,"Blood",!0,!1,!1)
$.yg=a
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
g=P.l(H.a([new E.M($.ew,1,!0),new E.ko(null,1,!0)],k),l)
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
h=new T.lZ(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ak(5,"Heart",!0,!1,!1)
$.yk=h
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
b=P.l(H.a([new E.M($.fn,2,!0),new E.M($.hJ,1,!0),new E.M($.du,-2,!0)],k),l)
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
a=new V.n4(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ak(6,"Mind",!0,!1,!1)
$.yq=a
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
g=P.l(H.a([new E.M($.hI,2,!0),new E.M($.fn,1,!0),new E.M($.d6,-1,!0),new E.M($.ev,-1,!0),new E.M($.ci,0.2,!1)],k),l)
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
h=new G.mG(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ak(7,"Light",!0,!1,!1)
$.yp=h
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
b=P.l(H.a([new E.fI(D.ut(),null,3,!0),new E.fI(D.ut(),null,-1,!0),new E.M($.hJ,-1,!0),new E.M($.ci,0.2,!1)],k),l)
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
a=new Q.pk(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ak(8,"Void",!0,!1,!1)
$.yw=a
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
g=P.l(H.a([new E.M($.hL,2,!0),new E.M($.hK,1,!0),new E.M($.d6,-1,!0),new E.M($.ew,-1,!0),new E.M($.ci,0.01,!1)],k),l)
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
h=new E.nM(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ak(9,"Rage",!0,!1,!1)
$.ys=h
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
b=P.l(H.a([new E.M($.d6,2,!0),new E.M($.hI,1,!0),new E.fI(D.ut(),null,-2,!0)],k),l)
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
a=new X.m1(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ak(10,"Hope",!0,!1,!1)
$.yl=a
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
g=P.l(H.a([new E.M($.ev,2,!0),new E.M($.hL,1,!0),new E.M($.du,-2,!0)],k),l)
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
h=new K.mF(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ak(11,"Life",!0,!1,!1)
$.yo=h
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
b=P.l(H.a([new E.M($.du,3,!0),new E.M($.d6,-2,!0)],k),l)
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
a=new Z.l7(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ak(12,"Dream",!1,!1,!1)
$.yj=a
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
g=P.l(H.a([new E.M($.du,3,!0),new E.M($.d6,-2,!0)],k),l)
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
h=new Q.mD(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ak(13,"Law",!1,!1,!0)
$.yn=h
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
c=P.l(H.a([new E.M($.ci,13,!0)],k),l)
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
b=new Z.mz(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
b.ak(14,"Juice",!1,!1,!0)
$.ym=b
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
g=P.l(H.a([new E.M($.hL,13,!0)],k),l)
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
j=new K.nW(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
j.ak(15,"Sauce",!1,!0,!1)
$.yt=j
$.yr=L.yf(255,"Null",!1,!0,!1)
j=P.l(H.a([new E.M($.d6,1,!0),new E.M($.hI,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
g=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
f=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
e=H.a(["nobody"],p)
d=P.l(H.a([],k),l)
c=H.a(["Nobody"],p)
b=H.a(["Nobody"],p)
q=new F.n6(j,q,m,g,f,!1,e,d,c,b,1,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"loud","musical","Music")
q.E()
q.F()
B.cL(q)
$.zt=q
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
q.E()
q.F()
B.cL(q)
$.zm=q
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
q.E()
q.F()
B.cL(q)
$.zn=q
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
q.E()
q.F()
B.cL(q)
$.zo=q
q=P.l(H.a([new E.M($.d6,-1,!0),new E.M($.ev,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kY(q,m,j,i,h,!1,g,f,e,d,2,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"pretentious","cultured","Culture")
q.E()
q.F()
B.cL(q)
$.zp=q
q=P.l(H.a([new E.M($.d6,1,!0),new E.M($.ew,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.l5(q,m,j,i,h,!1,g,f,e,d,8,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"boring","domestic","Domestic")
q.E()
q.F()
B.cL(q)
$.zq=q
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
q.E()
q.F()
B.cL(q)
$.zr=q
q=P.l(H.a([new E.M($.hL,1,!0),new E.M($.ev,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mA(q,m,j,i,h,!1,g,f,e,d,6,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"harsh","fair-minded","Justice")
q.E()
q.F()
B.cL(q)
$.zs=q
q=P.l(H.a([new E.M($.hK,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nE(q,m,j,i,h,!1,g,f,e,d,9,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"frivolous","geeky","PopCulture")
q.E()
q.F()
B.cL(q)
$.zv=q
q=P.l(H.a([new E.M($.ew,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.nS(q,m,j,i,h,!1,g,f,e,d,12,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"obsessive","romantic","Romantic")
q.E()
q.F()
B.cL(q)
$.zw=q
q=P.l(H.a([new E.M($.d6,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.o8(q,m,j,i,h,!1,g,f,e,d,11,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"shallow","extroverted","Social")
q.E()
q.F()
B.cL(q)
$.zx=q
q=P.l(H.a([new E.M($.ew,-1,!0),new E.M($.d6,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.oM(q,m,j,i,h,!1,g,f,e,d,5,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"terrible","honest","Terrible")
q.E()
q.F()
B.cL(q)
$.zz=q
q=P.l(H.a([new E.M($.fn,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pu(q,m,j,i,h,!1,g,f,e,d,3,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"wordy","lettered","Writing")
q.E()
q.F()
B.cL(q)
$.zA=q
q=P.l(H.a([new E.M($.du,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.oK(q,m,j,i,h,!1,g,f,e,d,10,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"awkward","techy","Technology")
q.E()
q.F()
B.cL(q)
$.zy=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hg(!0,q,l,k,p,-13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"","","Null")
q.E()
q.F()
B.cL(q)
$.zu=q
A.wl()
t=3
return P.cs(Y.n7(),$async$rf)
case 3:case 1:return P.bs(r,s)}})
return P.bt($async$rf,s)}},Z={l7:function l7(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
zb:function(){var t,s
if(!$.vu)$.vu=!0
else return
t=[P.B]
s=new Y.oQ(H.a([],t))
$.ta=s
Z.cK(s,"txt",null)
Z.cK($.ta,"vert","x-shader/x-vertex")
Z.cK($.ta,"frag","x-shader/x-fragment")
$.za=new Y.nN(H.a([],t))
$.vw=new Y.kF(H.a([],t))
s=new B.pz(H.a([],t))
$.vy=s
Z.cK(s,"zip",null)
Z.cK($.vy,"bundle",null)
s=new U.pq(H.a([],t))
$.zj=s
Z.cK(s,"words",null)
s=new Q.nC(H.a([],t))
$.vx=s
Z.cK(s,"png",null)
Z.cK($.vx,"jpg","image/jpeg")
$.zh=new Q.nz(H.a([],t))
s=new M.oe(H.a([],t))
$.zi=s
Z.cK(s,"psprite",null)
s=new V.lR(H.a([],t))
$.t9=s
Z.cK(s,"ttf",null)
Z.cK($.t9,"otf",null)
Z.cK($.t9,"woff",null)
s=new Y.nj(null,H.a([],t))
$.ze=s
Z.cK(s,"obj",null)
s=new U.mV(H.a([],t))
$.zc=s
Z.cK(s,"mp3",null)
$.zd=new U.oA(H.a([],t))
s=new U.nn(H.a([],t))
$.zf=s
Z.cK(s,"ogg",null)
$.zg=new U.oB(H.a([],t))},
cK:function(a,b,c){$.$get$lT().i(0,b,new Z.il(a,c,[null,null]))
a.a.push(b)},
vv:function(a){var t
if($.$get$lT().V(0,a)){t=$.$get$lT().n(0,a)
if(t.a instanceof O.c6)return t
throw H.k("File format for extension ."+H.x(a)+" does not match expected types.")}throw H.k("No file format found for extension ."+H.x(a))},
il:function il(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mz:function mz(y1,y2,p,q,t,u,v,w,A,B,D,I,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
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
_.x1=x1
_.x2=x2},
mU:function mU(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.I=I
_.M=M
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
tK:function tK(){},
tG:function tG(){},
tH:function tH(){}},X={im:function im(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},i6:function i6(){},m1:function m1(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},m6:function m6(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
this.c=c}},N={a8:function a8(){},mA:function mA(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nK:function nK(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nR:function nR(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},o8:function o8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oa:function oa(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},oW:function oW(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
F0:function(a){var t,s,r,q,p,o,n,m,l
t=J.cI(a)
s=new W.jZ(document.querySelectorAll("link"),[null])
for(r=new H.dL(s,s.gm(s),0,null,[null]);r.G();){q=r.d
p=J.ar(q)
if(!!p.$ishn&&q.rel==="stylesheet"){o=$.$get$nx()
H.x(p.gae(q))
o.toString
o=t.length
n=Math.min(o,J.bZ(p.gae(q)))
for(m=0;m<n;++m){if(m>=o)return H.v(t,m)
if(t[m]!==J.fC(p.gae(q),m)){l=C.c.ah(t,m)
$.$get$nx().toString
return l.split("/").length-1}continue}}}$.$get$nx().b2(C.i,"Didn't find a css link to derive relative path")
return 0},
u8:function(){var t=P.wX()
if(!$.$get$nw().V(0,t))$.$get$nw().i(0,t,N.F0(t))
return $.$get$nw().n(0,t)}},E={iz:function iz(){},nm:function nm(){},M:function M(a,b,c){this.a=a
this.b=b
this.c=c},fI:function fI(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},ko:function ko(a,b,c){this.a=a
this.b=b
this.c=c},n5:function n5(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nM:function nM(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nV:function nV(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},pl:function pl(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},B={m_:function m_(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
cL:function(a){var t=a.f
if($.$get$md().V(0,t))throw H.k("Duplicate aspect id for "+a.C(0)+": "+t+" is already registered for "+J.cI($.$get$md().n(0,t))+".")
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
pz:function pz(a){this.a=a},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a,b){this.a=a
this.b=b},
Gu:function(a){return a.aV(0)},
FX:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=P.B
s=P.bX(t,P.V)
r=B.cV
q=new B.eC(s,P.bX(t,t),J.xY(a),!1,null,null)
q.ca(null,null,r)
for(p=J.xX(a.gcL()),p=p.gT(p);p.G();){o=p.gN()
s.i(0,o,J.fC(a.gcL(),o))}for(s=a.gh3(),s=s.gaD(s),s=s.gT(s),p=q.d,n=a.d;s.G();){o=s.gN()
p.i(0,o,n.n(0,o))}for(s=a.b,p=s.length,r=[r],m=0;m<s.length;s.length===p||(0,H.bT)(s),++m){l=s[m]
n=J.aR(l)
k=n.gX(l)
j=J.y2(k)
k=k.gbQ()
i=new B.cV(k)
if(k==null){k=P.bX(t,t)
i.a=k}k.i(0,"MAIN",j)
n=n.gb7(l)
C.b.h(q.b,new Q.h(i,n,r))}return q},
oN:function oN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oP:function oP(a){this.a=a},
oO:function oO(a,b){this.a=a
this.b=b},
cV:function cV(a){this.a=a},
eC:function eC(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hT:function hT(a,b){this.a=a
this.b=b}},Q={m9:function m9(){},nC:function nC(a){this.a=a},nz:function nz(a){this.a=a},mD:function mD(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.ac=ac
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nS:function nS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pk:function pk(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},jA:function jA(){},
I:function(a,b,c){var t=new Q.dS(null,null,[c])
t.ca(a,b,c)
return t},
uF:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.I(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dU(a,"$isn",[e],"$asn"))if(H.dU(a,"$iscx",[e],"$ascx"))for(s=J.cP(a.gbi()),r=0;s.G();){q=s.gN()
p=t.b
o=p.length
if(r>=o)return H.v(p,r)
p[r]=q;++r}else for(s=a.gT(a),p=[H.P(t,0)],r=0;s.G();){n=s.gN()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.v(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gT(a),p=[e],o=[H.P(t,0)];s.G();){l=s.gN()
if(H.GL(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.v(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dU(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.v(m,0)
m[0]=l}else throw H.k("Invalid entry type "+H.x(J.v_(l))+" for WeightedList<"+H.x(H.bY(H.dy(e)))+">. Should be "+H.x(H.bY(H.dy(e)))+" or WeightPair<"+H.x(H.bY(H.dy(e)))+">.")}return t},
uG:function(a,b,c,d){return new Q.jP(J.v1(a.gbi(),new Q.po(c,d,b)),null,[c,d])},
cx:function cx(){},
dS:function dS(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hR:function hR(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eE:function eE(){},
hQ:function hQ(){},
pn:function pn(a,$ti){this.a=a
this.$ti=$ti},
jP:function jP(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
po:function po(a,b,c){this.a=a
this.b=b
this.c=c},
o_:function(){var t=0,s=P.bp(),r
var $async$o_=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=3
return P.cs(A.hp("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$o_)
case 3:r=A.hp("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$o_,s)}},G={mG:function mG(y1,y2,p,q,t,u,v,w,A,B,D,I,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.I=I
_.M=M
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nE:function nE(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yF:function(a){var t,s,r,q,p,o,n,m,l
t=G.a0
s=P.tR(a,t)
r=P.a4(null,null,null,t)
q=H.a([],[G.d])
for(t=G.EF(),p=J.cP(t.a),t=new H.jQ(p,t.b,[H.P(t,0)]);t.G();){o=p.gN()
if(o.eq(s))q.push(o)}C.b.eI(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bT)(q),++n){o=q[n]
if(o.eq(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bT)(p),++l)s.af(0,p[l])}}if(s.a!==0)r.bo(0,s)
return r},
EF:function(){var t=$.$get$b()
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
mp:function mp(){}},F={n6:function n6(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pu:function pu(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
EK:function(a){if(a===C.h){window
return C.j.gas(C.j)}if(a===C.i){window
return C.j.ghZ()}if(a===C.Z){window
return C.j.gho()}return P.GP()},
hq:function hq(a,b){this.a=a
this.b=b},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
tP:function tP(){},
yW:function(a,b,c,d){var t,s,r,q
t=new B.dn(new P.c9(""),0,0)
t.ai(a,8)
c.toString
s=H.cM(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bS(s[q])
return t.b5(b)},
yV:function(a,b,c,d){var t,s,r,q,p
t=H.cy(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dV(a,b)
for(q=0;q<c;++q){p=r.c1()
if(q>=t)return H.v(s,q)
s[q]=p}return s},
yU:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dn(new P.c9(""),0,0)
t.ai(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.kb(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cM(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.v(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.v(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bS(o-1)
t.ai(a,r)}return t.b5(b)},
yT:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cy(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dV(a,b)
for(o=0;o<c;){n=p.c1()+1
m=p.a6(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.v(s,r)
s[r]=m}o+=n}return s},
yS:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dn(new P.c9(""),0,0)
t.ai(a,8)
c.toString
s=H.cM(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.v(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.v(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bS(p-1)
t.bS(a)}return t.b5(b)},
yR:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cy(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dV(a,b)
for(q=0;q<c;){p=r.c1()+1
o=r.c1()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.v(s,m)
s[m]=o}q+=p}return s}},R={
Fk:function(a){var t,s
if(a.gm(a).aG(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.gi5(s).gii().e8("checking for two players, ps is "+H.x(a)+", ret is "+t)
return t},
F8:function(a){a.gad(a).gbT()
return!1},
Fj:function(a){a.gad(a).gbT()
return!1},
Fi:function(a){a.gad(a).gbT()
return!1},
Fh:function(a){return a.gad(a).gbp().gih()},
Ff:function(a){return a.gad(a).gbp().gie()},
Fe:function(a){return a.gad(a).gbp().gic()},
Fb:function(a){return a.gad(a).gbp().gia()},
Fd:function(a){return a.gad(a).gbp().gib()},
Fg:function(a){return a.gad(a).gbp().gig()},
Fc:function(a){var t=a.gad(a)
t.gbT()
t.gbT()
return!1},
F9:function(a){return!0},
Fa:function(a){a.gad(a).gi7()
return!1},
nL:function nL(){},
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
oH:function oH(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
hb:function hb(){},
u7:function u7(){},
u6:function u6(){}},D={oK:function oK(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
FR:function(){if($.wE)return
$.wE=!0
var t=new D.cF("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
t.y=0
$.us=t
t=new D.cF("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.FQ=t
t=new D.jS(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
t.y=2.5
t.Q=1
$.hL=t
t=new D.jS(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
t.y=2.5
$.ev=t
t=new D.cF("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.FP=t
t=new D.cF("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.hK=t
t=new D.nP("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.ew=t
t=new D.cF("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.d6=t
t=new D.cF("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.fn=t
t=new D.cF("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.hI=t
t=new D.cF("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.hJ=t
t=new D.cF("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.du=t
t=new D.cF("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.ci=t},
ut:function(){var t=$.$get$cN()
return new H.hS(t,new D.og(),[H.P(t,0)])},
og:function og(){},
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
nP:function nP(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
H.tM.prototype={}
J.f.prototype={
S:function(a,b){return a===b},
ga4:function(a){return H.ep(a)},
C:function(a){return H.nI(a)},
ga9:function(a){return new H.dR(H.ke(a),null)},
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
C:function(a){return String(a)},
ga4:function(a){return a?519018:218159},
ga9:function(a){return C.ae},
$isd9:1}
J.mu.prototype={
S:function(a,b){return null==b},
C:function(a){return"null"},
ga4:function(a){return 0},
ga9:function(a){return C.a8},
$isd3:1}
J.hl.prototype={
ga4:function(a){return 0},
ga9:function(a){return C.a7},
C:function(a){return String(a)},
$ismv:1,
h:function(a,b){return a.add(b)},
af:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gc_:function(a){return a.left},
gc4:function(a){return a.top},
gb8:function(a){return a.width},
gb0:function(a){return a.height},
hD:function(a,b){return a.parse(b)},
eG:function(a,b){return a.setLogging(b)},
eH:function(a,b){return a.setMaterials(b)}}
J.nB.prototype={}
J.eA.prototype={}
J.em.prototype={
C:function(a){var t=a[$.$get$ve()]
return t==null?this.eM(a):J.cI(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ek.prototype={
bW:function(a,b){if(!!a.immutable$list)throw H.k(new P.U(b))},
cE:function(a,b){if(!!a.fixed$length)throw H.k(new P.U(b))},
h:function(a,b){this.cE(a,"add")
a.push(b)},
a8:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.k(new P.bM(a))}},
ay:function(a,b){return new H.fd(a,b,[H.P(a,0),null])},
bg:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.x(a[r])
if(r>=t)return H.v(s,r)
s[r]=q}return s.join(b)},
d3:function(a,b){return H.wG(a,b,null,H.P(a,0))},
hd:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.k(new P.bM(a))}return s},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
c9:function(a,b,c){if(b<0||b>a.length)throw H.k(P.bE(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.k(H.bv(c))
if(c<b||c>a.length)throw H.k(P.bE(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.P(a,0)])
return H.a(a.slice(b,c),[H.P(a,0)])},
gad:function(a){if(a.length>0)return a[0]
throw H.k(H.jl())},
gbc:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.k(H.jl())},
a7:function(a,b,c,d,e){var t,s,r
this.bW(a,"setRange")
P.dg(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aZ(P.bE(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.k(H.wf())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.v(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.v(d,r)
a[b+s]=d[r]}},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
bY:function(a,b,c,d){var t
this.bW(a,"fill range")
P.dg(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aF:function(a,b,c,d){var t,s,r,q,p,o
this.cE(a,"replaceRange")
P.dg(b,c,a.length,null,null,null)
d=C.c.aq(d)
if(typeof c!=="number")return c.an()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.aA(a,b,r,d)
if(p!==0){this.a7(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a7(a,r,o,a,c)
this.aA(a,b,r,d)}},
hb:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.k(new P.bM(a))}return!0},
d4:function(a,b){var t
this.bW(a,"sort")
t=b==null?P.GO():b
H.jG(a,0,a.length-1,t)},
eI:function(a){return this.d4(a,null)},
b1:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.b_(a[t],b))return t
return-1},
bf:function(a,b){return this.b1(a,b,0)},
ab:function(a,b){var t
for(t=0;t<a.length;++t)if(J.b_(a[t],b))return!0
return!1},
gY:function(a){return a.length===0},
C:function(a){return P.jk(a,"[","]")},
a1:function(a,b){var t=H.a(a.slice(0),[H.P(a,0)])
return t},
aq:function(a){return this.a1(a,!0)},
gT:function(a){return new J.i5(a,a.length,0,null,[H.P(a,0)])},
ga4:function(a){return H.ep(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cE(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dB(b,"newLength",null))
if(b<0)throw H.k(P.bE(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c3(a,b))
if(b>=a.length||b<0)throw H.k(H.c3(a,b))
return a[b]},
i:function(a,b,c){this.bW(a,"indexed set")
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
J.tL.prototype={}
J.i5.prototype={
gN:function(){return this.d},
G:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.k(H.bT(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fb.prototype={
aB:function(a,b){var t
if(typeof b!=="number")throw H.k(H.bv(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcM(b)
if(this.gcM(a)===t)return 0
if(this.gcM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcM:function(a){return a===0?1/a<0:a<0},
al:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.k(new P.U(""+a+".floor()"))},
bA:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(new P.U(""+a+".round()"))},
aa:function(a,b,c){if(C.a.aB(b,c)>0)throw H.k(H.bv(b))
if(this.aB(a,b)<0)return b
if(this.aB(a,c)>0)return c
return a},
l:function(a){return a},
bC:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.k(P.bE(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.Z(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aZ(new P.U("Unexpected toString result: "+t))
r=J.bc(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.au("0",q)},
C:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga4:function(a){return a&0x1FFFFFFF},
d0:function(a){return-a},
W:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a+b},
au:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a*b},
bG:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
d8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dP(a,b)},
ap:function(a,b){return(a|0)===a?a/b|0:this.dP(a,b)},
dP:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.k(new P.U("Result of truncating division is "+H.x(t)+": "+H.x(a)+" ~/ "+H.x(b)))},
aw:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
if(b<0)throw H.k(H.bv(b))
return b>31?0:a<<b>>>0},
ar:function(a,b){return b>31?0:a<<b>>>0},
aY:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fJ:function(a,b){if(b<0)throw H.k(H.bv(b))
return b>31?0:a>>>b},
dO:function(a,b){return b>31?0:a>>>b},
a2:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a<b},
aG:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a>b},
av:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a>=b},
ga9:function(a){return C.ah},
$isdl:1}
J.jo.prototype={
ga9:function(a){return C.ag},
$isV:1,
$isdl:1,
$isC:1}
J.jn.prototype={
ga9:function(a){return C.af},
$isV:1,
$isdl:1}
J.el.prototype={
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c3(a,b))
if(b<0)throw H.k(H.c3(a,b))
if(b>=a.length)H.aZ(H.c3(a,b))
return a.charCodeAt(b)},
a3:function(a,b){if(b>=a.length)throw H.k(H.c3(a,b))
return a.charCodeAt(b)},
cB:function(a,b,c){if(c>b.length)throw H.k(P.bE(c,0,b.length,null,null))
return new H.qF(b,a,c)},
aQ:function(a,b){return this.cB(a,b,0)},
ed:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.k(P.bE(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.Z(b,c+s)!==this.a3(a,s))return
return new H.jL(c,b,a)},
W:function(a,b){if(typeof b!=="string")throw H.k(P.dB(b,null,null))
return a+b},
ha:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ah(a,s-t)},
cV:function(a,b,c){return H.uT(a,b,c)},
hS:function(a,b,c){return H.Hg(a,b,c,null)},
eJ:function(a,b){if(b==null)H.aZ(H.bv(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hk&&b.gdB().exec("").length-2===0)return a.split(b.gfw())
else return this.fd(a,b)},
aF:function(a,b,c,d){var t,s
H.uN(b)
c=P.dg(b,c,a.length,null,null,null)
H.uN(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fd:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.B])
for(s=J.xP(b,a),s=s.gT(s),r=0,q=1;s.G();){p=s.gN()
o=p.gd5(p)
n=p.gdZ(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.K(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ah(a,r))
return t},
aH:function(a,b,c){var t
H.uN(c)
if(typeof c!=="number")return c.a2()
if(c<0||c>a.length)throw H.k(P.bE(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.y6(b,a,c)!=null},
ag:function(a,b){return this.aH(a,b,0)},
K:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.aZ(H.bv(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aZ(H.bv(c))
if(typeof b!=="number")return b.a2()
if(b<0)throw H.k(P.jD(b,null,null))
if(typeof c!=="number")return H.a7(c)
if(b>c)throw H.k(P.jD(b,null,null))
if(c>a.length)throw H.k(P.jD(c,null,null))
return a.substring(b,c)},
ah:function(a,b){return this.K(a,b,null)},
hY:function(a){return a.toUpperCase()},
bj:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a3(t,0)===133){r=J.EG(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.Z(t,q)===133?J.tI(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
er:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.Z(t,r)===133)s=J.tI(t,r)}else{s=J.tI(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
au:function(a,b){var t,s
if(typeof b!=="number")return H.a7(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b1:function(a,b,c){var t
if(c<0||c>a.length)throw H.k(P.bE(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bf:function(a,b){return this.b1(a,b,0)},
hu:function(a,b,c){var t
if(b==null)H.aZ(H.bv(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.aZ(P.bE(t,0,c,null,null))
if(b.ck(a,t)!=null)return t}return-1},
ea:function(a,b){return this.hu(a,b,null)},
dX:function(a,b,c){if(c>a.length)throw H.k(P.bE(c,0,a.length,null,null))
return H.Hf(a,b,c)},
ab:function(a,b){return this.dX(a,b,0)},
gY:function(a){return a.length===0},
aB:function(a,b){var t
if(typeof b!=="string")throw H.k(H.bv(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
C:function(a){return a},
ga4:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
ga9:function(a){return C.a9},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c3(a,b))
if(b>=a.length||b<0)throw H.k(H.c3(a,b))
return a[b]},
$isay:1,
$asay:function(){},
$isB:1,
$isu9:1}
H.kK.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.Z(this.a,b)},
$ashO:function(){return[P.C]},
$asjp:function(){return[P.C]},
$ashB:function(){return[P.C]},
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]}}
H.r.prototype={$asr:null}
H.en.prototype={
gT:function(a){return new H.dL(this,this.gm(this),0,null,[H.as(this,"en",0)])},
a8:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.U(0,s))
if(t!==this.gm(this))throw H.k(new P.bM(this))}},
gY:function(a){return this.gm(this)===0},
gad:function(a){if(this.gm(this)===0)throw H.k(H.jl())
return this.U(0,0)},
ab:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.b_(this.U(0,s),b))return!0
if(t!==this.gm(this))throw H.k(new P.bM(this))}return!1},
ay:function(a,b){return new H.fd(this,b,[H.as(this,"en",0),null])},
a1:function(a,b){var t,s,r
t=H.a([],[H.as(this,"en",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.U(0,s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
aq:function(a){return this.a1(a,!0)}}
H.oF.prototype={
gfe:function(){var t=J.bZ(this.a)
return t},
gfK:function(){var t,s
t=J.bZ(this.a)
s=this.b
if(J.ct(s,t))return t
return s},
gm:function(a){var t,s
t=J.bZ(this.a)
s=this.b
if(J.uV(s,t))return 0
if(typeof s!=="number")return H.a7(s)
return t-s},
U:function(a,b){var t=J.e6(this.gfK(),b)
if(J.e7(b,0)||J.uV(t,this.gfe()))throw H.k(P.by(b,this,"index",null,null))
return J.uX(this.a,t)},
a1:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bc(s)
q=r.gm(s)
if(typeof t!=="number")return H.a7(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.U(s,t+m)
if(m>=n.length)return H.v(n,m)
n[m]=o
if(r.gm(s)<q)throw H.k(new P.bM(this))}return n},
aq:function(a){return this.a1(a,!0)},
eU:function(a,b,c,d){var t=this.b
if(J.e7(t,0))H.aZ(P.bE(t,0,null,"start",null))}}
H.dL.prototype={
gN:function(){return this.d},
G:function(){var t,s,r,q
t=this.a
s=J.bc(t)
r=s.gm(t)
if(this.b!==r)throw H.k(new P.bM(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.U(t,q);++this.c
return!0}}
H.hr.prototype={
gT:function(a){return new H.jq(null,J.cP(this.a),this.b,this.$ti)},
gm:function(a){return J.bZ(this.a)},
gY:function(a){return J.rC(this.a)},
$asn:function(a,b){return[b]}}
H.fW.prototype={$isr:1,
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jq.prototype={
G:function(){var t=this.b
if(t.G()){this.a=this.c.$1(t.gN())
return!0}this.a=null
return!1},
gN:function(){return this.a},
$asjm:function(a,b){return[b]}}
H.fd.prototype={
gm:function(a){return J.bZ(this.a)},
U:function(a,b){return this.b.$1(J.uX(this.a,b))},
$asen:function(a,b){return[b]},
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.hS.prototype={
gT:function(a){return new H.jQ(J.cP(this.a),this.b,this.$ti)},
ay:function(a,b){return new H.hr(this,b,[H.P(this,0),null])}}
H.jQ.prototype={
G:function(){var t,s
for(t=this.a,s=this.b;t.G();)if(s.$1(t.gN())===!0)return!0
return!1},
gN:function(){return this.a.gN()}}
H.iw.prototype={
sm:function(a,b){throw H.k(new P.U("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.k(new P.U("Cannot add to a fixed-length list"))},
aF:function(a,b,c,d){throw H.k(new P.U("Cannot remove from a fixed-length list"))}}
H.p6.prototype={
i:function(a,b,c){throw H.k(new P.U("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.k(new P.U("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.k(new P.U("Cannot add to an unmodifiable list"))},
a7:function(a,b,c,d,e){throw H.k(new P.U("Cannot modify an unmodifiable list"))},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aF:function(a,b,c,d){throw H.k(new P.U("Cannot remove from an unmodifiable list"))},
bY:function(a,b,c,d){throw H.k(new P.U("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
H.hO.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
H.rw.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rx.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qn.prototype={}
H.fu.prototype={
dT:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cw()},
hR:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.af(0,a)
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
if(q===s.c)s.dt();++s.d}this.y=!1}this.cw()},
fO:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ar(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.v(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hP:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ar(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aZ(new P.U("removeRange"))
P.dg(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eF:function(a,b){if(!this.r.S(0,a))return
this.db=b},
hj:function(a,b,c){var t=J.ar(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.fE(a,c)
return}t=this.cx
if(t==null){t=P.tS(null,null)
this.cx=t}t.aN(0,new H.qi(a,c))},
hi:function(a,b){var t
if(!this.r.S(0,a))return
t=J.ar(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.bZ()
return}t=this.cx
if(t==null){t=P.tS(null,null)
this.cx=t}t.aN(0,this.ght())},
hk:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fB(a)
if(b!=null)P.fB(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cI(a)
s[1]=b==null?null:J.cI(b)
for(r=new P.dv(t,t.r,null,null,[null]),r.c=t.e;r.G();)J.fE(r.d,s)},
bt:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cl(o)
p=H.ck(o)
this.hk(q,p)
if(this.db===!0){this.bZ()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghs()
if(this.cx!=null)for(;n=this.cx,!n.gY(n);)this.cx.el().$0()}return s},
cN:function(a){return this.b.n(0,a)},
dc:function(a,b){var t=this.b
if(t.V(0,a))throw H.k(P.lh("Registry: ports must be registered only once."))
t.i(0,a,b)},
cw:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bZ()},
bZ:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.ba(0)
for(t=this.b,s=t.gc5(t),s=s.gT(s);s.G();)s.gN().f6()
t.ba(0)
this.c.ba(0)
u.globalState.z.af(0,this.a)
this.dx.ba(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.v(t,p)
J.fE(q,t[p])}this.ch=null}},
ghs:function(){return this.d},
gfZ:function(){return this.e}}
H.qi.prototype={
$0:function(){J.fE(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.pU.prototype={
h4:function(){var t=this.a
if(t.b===t.c)return
return t.el()},
ep:function(){var t,s,r
t=this.h4()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.V(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gY(s)}else s=!1
else s=!1
else s=!1
if(s)H.aZ(P.lh("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gY(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ho(["command","close"])
r=new H.dw(!0,new P.k2(0,null,null,null,null,null,0,[null,P.C])).az(r)
s.toString
self.postMessage(r)}return!1}t.hK()
return!0},
dJ:function(){if(self.window!=null)new H.pV(this).$0()
else for(;this.ep(););},
bB:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dJ()
else try{this.dJ()}catch(r){t=H.cl(r)
s=H.ck(r)
q=u.globalState.Q
p=P.ho(["command","error","msg",H.x(t)+"\n"+H.x(s)])
p=new H.dw(!0,P.hY(null,P.C)).az(p)
q.toString
self.postMessage(p)}}}
H.pV.prototype={
$0:function(){if(!this.a.ep())return
P.wK(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.eH.prototype={
hK:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bt(this.b)}}
H.qm.prototype={}
H.me.prototype={
$0:function(){H.zE(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mf.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fA(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fA(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cw()},
$S:function(){return{func:1,v:true}}}
H.pH.prototype={}
H.fv.prototype={
b9:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdA())return
r=H.Gr(b)
if(t.gfZ()===s){s=J.bc(r)
switch(s.n(r,0)){case"pause":t.dT(s.n(r,1),s.n(r,2))
break
case"resume":t.hR(s.n(r,1))
break
case"add-ondone":t.fO(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hP(s.n(r,1))
break
case"set-errors-fatal":t.eF(s.n(r,1),s.n(r,2))
break
case"ping":t.hj(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hi(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.af(0,s)
break}return}u.globalState.f.a.aN(0,new H.eH(t,new H.qp(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.fv&&J.b_(this.b,b.b)},
ga4:function(a){return this.b.gcm()}}
H.qp.prototype={
$0:function(){var t=this.a.b
if(!t.gdA())t.f2(0,this.b)},
$S:function(){return{func:1}}}
H.i0.prototype={
b9:function(a,b){var t,s,r
t=P.ho(["command","message","port",this,"msg",b])
s=new H.dw(!0,P.hY(null,P.C)).az(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.i0&&J.b_(this.b,b.b)&&J.b_(this.a,b.a)&&J.b_(this.c,b.c)},
ga4:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aw()
s=this.a
if(typeof s!=="number")return s.aw()
r=this.c
if(typeof r!=="number")return H.a7(r)
return(t<<16^s<<8^r)>>>0}}
H.fk.prototype={
f6:function(){this.c=!0
this.b=null},
f2:function(a,b){if(this.c)return
this.b.$1(b)},
$isFl:1,
gcm:function(){return this.a},
gdA:function(){return this.c}}
H.oY.prototype={
eV:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aN(0,new H.eH(s,new H.oZ(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dj(new H.p_(this,b),0),a)}else throw H.k(new P.U("Timer greater than 0."))}}
H.oZ.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.p_.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dC.prototype={
ga4:function(a){var t=this.a
if(typeof t!=="number")return t.d2()
t=C.d.aY(t,0)^C.d.ap(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dC){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcm:function(){return this.a}}
H.dw.prototype={
az:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.ar(a)
if(!!t.$isfe)return["buffer",a]
if(!!t.$iseo)return["typed",a]
if(!!t.$isay)return this.eB(a)
if(!!t.$iszB){r=this.gey()
q=t.gaD(a)
q=H.df(q,r,H.as(q,"n",0),null)
q=P.d1(q,!0,H.as(q,"n",0))
t=t.gc5(a)
t=H.df(t,r,H.as(t,"n",0),null)
return["map",q,P.d1(t,!0,H.as(t,"n",0))]}if(!!t.$ismv)return this.eC(a)
if(!!t.$isf)this.es(a)
if(!!t.$isFl)this.bE(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfv)return this.eD(a)
if(!!t.$isi0)return this.eE(a)
if(!!t.$iseS){p=a.$static_name
if(p==null)this.bE(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdC)return["capability",a.a]
if(!(a instanceof P.ab))this.es(a)
return["dart",u.classIdExtractor(a),this.eA(u.classFieldsExtractor(a))]},
bE:function(a,b){throw H.k(new P.U((b==null?"Can't transmit:":b)+" "+H.x(a)))},
es:function(a){return this.bE(a,null)},
eB:function(a){var t=this.ez(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bE(a,"Can't serialize indexable: ")},
ez:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.az(a[s])
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
eA:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.az(a[t]))
return a},
eC:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bE(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.az(a[t[r]])
if(r>=s.length)return H.v(s,r)
s[r]=q}return["js-object",t,s]},
eE:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eD:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcm()]
return["raw sendport",a]}}
H.eF.prototype={
aZ:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.k(P.dA("Bad serialized message: "+H.x(a)))
switch(C.b.gad(a)){case"ref":if(1>=a.length)return H.v(a,1)
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
s=H.a(this.br(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return H.a(this.br(r),[null])
case"mutable":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return this.br(r)
case"const":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.br(r),[null])
s.fixed$length=Array
return s
case"map":return this.h8(a)
case"sendport":return this.h9(a)
case"raw sendport":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.h7(a)
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
this.br(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.k("couldn't deserialize: "+H.x(a))}},
br:function(a){var t,s,r
t=J.bc(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
if(!(s<r))break
t.i(a,s,this.aZ(t.n(a,s)));++s}return a},
h8:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
q=P.mL()
this.b.push(q)
s=J.ya(J.v1(s,this.gh6()))
for(t=J.bc(s),p=J.bc(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aZ(p.n(r,o)))
return q},
h9:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
if(3>=t)return H.v(a,3)
q=a[3]
if(J.b_(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cN(q)
if(o==null)return
n=new H.fv(o,r)}else n=new H.i0(s,q,r)
this.b.push(n)
return n},
h7:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bc(s)
p=J.bc(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a7(n)
if(!(o<n))break
q[t.n(s,o)]=this.aZ(p.n(r,o));++o}return q}}
H.kN.prototype={
gY:function(a){return this.gm(this)===0},
C:function(a){return P.wm(this)},
i:function(a,b,c){return H.yH()},
$isbl:1,
$asbl:null}
H.kO.prototype={
gm:function(a){return this.a},
V:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.V(0,b))return
return this.dr(b)},
dr:function(a){return this.b[a]},
a8:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dr(q))}}}
H.nO.prototype={}
H.p3.prototype={
aJ:function(a){var t,s,r
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
C:function(a){var t=this.b
if(t==null)return"NullError: "+H.x(this.a)
return"NullError: method not found: '"+H.x(t)+"' on null"}}
H.my.prototype={
C:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.x(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.x(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.x(this.a)+")"}}
H.p5.prototype={
C:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h3.prototype={
gaL:function(){return this.b}}
H.ry.prototype={
$1:function(a){if(!!J.ar(a).$iseb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.k5.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rl.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rm.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rn.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.ro.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.rp.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eS.prototype={
C:function(a){return"Closure '"+H.nJ(this).trim()+"'"},
gi3:function(){return this},
$D:null}
H.oJ.prototype={}
H.of.prototype={
C:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fL.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fL))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga4:function(a){var t,s
t=this.c
if(t==null)s=H.ep(this.a)
else s=typeof t!=="object"?J.dz(t):H.ep(t)
t=H.ep(this.b)
if(typeof s!=="number")return s.i6()
return(s^t)>>>0},
C:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.x(this.d)+"' of "+H.nI(t)}}
H.kH.prototype={
C:function(a){return this.a}}
H.nT.prototype={
C:function(a){return"RuntimeError: "+H.x(this.a)}}
H.dR.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga4:function(a){return J.dz(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.dR&&J.b_(this.a,b.a)}}
H.w.prototype={
gm:function(a){return this.a},
gY:function(a){return this.a===0},
gaD:function(a){return new H.mJ(this,[H.P(this,0)])},
gc5:function(a){return H.df(this.gaD(this),new H.mx(this),H.P(this,0),H.P(this,1))},
V:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dk(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dk(s,b)}else return this.hp(b)},
hp:function(a){var t=this.d
if(t==null)return!1
return this.bw(this.bJ(t,this.bv(a)),a)>=0},
bo:function(a,b){b.a8(0,new H.mw(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bn(t,b)
return s==null?null:s.gb_()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bn(r,b)
return s==null?null:s.gb_()}else return this.hq(b)},
hq:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bJ(t,this.bv(a))
r=this.bw(s,a)
if(r<0)return
return s[r].gb_()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.co()
this.b=t}this.da(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.co()
this.c=s}this.da(s,b,c)}else{r=this.d
if(r==null){r=this.co()
this.d=r}q=this.bv(b)
p=this.bJ(r,q)
if(p==null)this.cu(r,q,[this.cp(b,c)])
else{o=this.bw(p,b)
if(o>=0)p[o].sb_(c)
else p.push(this.cp(b,c))}}},
af:function(a,b){if(typeof b==="string")return this.dI(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dI(this.c,b)
else return this.hr(b)},
hr:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bJ(t,this.bv(a))
r=this.bw(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dR(q)
return q.gb_()},
ba:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a8:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.k(new P.bM(this))
t=t.c}},
da:function(a,b,c){var t=this.bn(a,b)
if(t==null)this.cu(a,b,this.cp(b,c))
else t.sb_(c)},
dI:function(a,b){var t
if(a==null)return
t=this.bn(a,b)
if(t==null)return
this.dR(t)
this.dn(a,b)
return t.gb_()},
cp:function(a,b){var t,s
t=new H.mI(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dR:function(a){var t,s
t=a.gfD()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bv:function(a){return J.dz(a)&0x3ffffff},
bw:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].ge7(),b))return s
return-1},
C:function(a){return P.wm(this)},
bn:function(a,b){return a[b]},
bJ:function(a,b){return a[b]},
cu:function(a,b,c){a[b]=c},
dn:function(a,b){delete a[b]},
dk:function(a,b){return this.bn(a,b)!=null},
co:function(){var t=Object.create(null)
this.cu(t,"<non-identifier-key>",t)
this.dn(t,"<non-identifier-key>")
return t},
$iszB:1,
$isbl:1,
$asbl:null}
H.mx.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mw.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eJ(function(a,b){return{func:1,args:[a,b]}},this.a,"w")}}
H.mI.prototype={
ge7:function(){return this.a},
gb_:function(){return this.b},
gfD:function(){return this.d},
sb_:function(a){return this.b=a}}
H.mJ.prototype={
gm:function(a){return this.a.a},
gY:function(a){return this.a.a===0},
gT:function(a){var t,s
t=this.a
s=new H.mK(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
ab:function(a,b){return this.a.V(0,b)},
a8:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.k(new P.bM(t))
s=s.c}}}
H.mK.prototype={
gN:function(){return this.d},
G:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rh.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.ri.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.B]}}}
H.rj.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.B]}}}
H.hk.prototype={
C:function(a){return"RegExp/"+this.a+"/"},
gdC:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.tJ(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdB:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.tJ(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cB:function(a,b,c){var t
H.xy(b)
t=J.bZ(b)
if(typeof t!=="number")return H.a7(t)
t=c>t
if(t)throw H.k(P.bE(c,0,J.bZ(b),null,null))
return new H.pC(this,b,c)},
aQ:function(a,b){return this.cB(a,b,0)},
ff:function(a,b){var t,s
t=this.gdC()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.k3(this,s)},
ck:function(a,b){var t,s
t=this.gdB()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.v(s,-1)
if(s.pop()!=null)return
return new H.k3(this,s)},
ed:function(a,b,c){if(c<0||c>b.length)throw H.k(P.bE(c,0,b.length,null,null))
return this.ck(b,c)},
$isFn:1,
$isu9:1,
gfw:function(){return this.b}}
H.k3.prototype={
gd5:function(a){return this.b.index},
gdZ:function(a){var t=this.b
return t.index+t[0].length},
aV:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.v(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
$isd2:1}
H.pC.prototype={
gT:function(a){return new H.jU(this.a,this.b,this.c,null)},
$ashj:function(){return[P.d2]},
$asn:function(){return[P.d2]}}
H.jU.prototype={
gN:function(){return this.d},
G:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
t=J.bZ(t)
if(typeof t!=="number")return H.a7(t)
if(s<=t){r=this.a.ff(this.b,this.c)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jL.prototype={
gdZ:function(a){return this.a+this.c.length},
n:function(a,b){return this.aV(b)},
aV:function(a){if(a!==0)throw H.k(P.jD(a,null,null))
return this.c},
$isd2:1,
gd5:function(a){return this.a}}
H.qF.prototype={
gT:function(a){return new H.qG(this.a,this.b,this.c,null)},
$asn:function(){return[P.d2]}}
H.qG.prototype={
G:function(){var t,s,r,q,p,o,n
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
gN:function(){return this.d}}
H.fe.prototype={
ga9:function(a){return C.a0},
fU:function(a,b,c){return H.cM(a,b,c)},
fT:function(a){return this.fU(a,0,null)},
fS:function(a,b,c){var t
H.xh(a,b,c)
t=new DataView(a,b)
return t},
fR:function(a,b){return this.fS(a,b,null)},
$isfe:1,
$isbh:1,
geb:function(a){return a.byteLength}}
H.eo.prototype={
ft:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dB(b,d,"Invalid list position"))
else throw H.k(P.bE(b,0,c,d,null))},
df:function(a,b,c,d){if(b>>>0!==b||b>c)this.ft(a,b,c,d)},
$iseo:1,
gbU:function(a){return a.buffer},
geb:function(a){return a.byteLength}}
H.n8.prototype={
ga9:function(a){return C.a1}}
H.jt.prototype={
gm:function(a){return a.length},
dN:function(a,b,c,d,e){var t,s,r
t=a.length
this.df(a,b,t,"start")
this.df(a,c,t,"end")
if(typeof b!=="number")return b.aG()
if(typeof c!=="number")return H.a7(c)
if(b>c)throw H.k(P.bE(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a2()
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
a7:function(a,b,c,d,e){if(!!J.ar(d).$ishv){this.dN(a,b,c,d,e)
return}this.d7(a,b,c,d,e)},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)}}
H.hx.prototype={
$asaE:function(){},
$asay:function(){},
$asp:function(){return[P.V]},
$asr:function(){return[P.V]},
$asn:function(){return[P.V]},
$isp:1,
$isr:1,
$isn:1}
H.hz.prototype={
$asaE:function(){},
$asay:function(){},
$asp:function(){return[P.V]},
$asr:function(){return[P.V]},
$asn:function(){return[P.V]}}
H.hw.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.ar(d).$ishw){this.dN(a,b,c,d,e)
return}this.d7(a,b,c,d,e)},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
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
H.n9.prototype={
ga9:function(a){return C.a2},
$isp:1,
$asp:function(){return[P.V]},
$isr:1,
$asr:function(){return[P.V]},
$isn:1,
$asn:function(){return[P.V]}}
H.na.prototype={
ga9:function(a){return C.a3},
$isp:1,
$asp:function(){return[P.V]},
$isr:1,
$asr:function(){return[P.V]},
$isn:1,
$asn:function(){return[P.V]}}
H.nb.prototype={
ga9:function(a){return C.a4},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nc.prototype={
ga9:function(a){return C.a5},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nd.prototype={
ga9:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.ne.prototype={
ga9:function(a){return C.aa},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nf.prototype={
ga9:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.ju.prototype={
ga9:function(a){return C.ac},
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
ga9:function(a){return C.ad},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
c9:function(a,b,c){return new Uint8Array(a.subarray(b,H.Gq(b,c,a.length)))},
$isff:1,
$isd8:1,
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.pE.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pD.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.pF.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.pG.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qU.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qV.prototype={
$2:function(a,b){this.a.$2(1,new H.h3(a,b))},
$S:function(){return{func:1,args:[,P.dO]}}}
P.r4.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.C,,]}}}
P.cD.prototype={}
P.r6.prototype={
$0:function(){var t,s,r
try{this.b.aI(this.a.$0())}catch(r){t=H.cl(r)
s=H.ck(r)
P.xj(this.b,t,s)}},
$S:function(){return{func:1}}}
P.lV.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.ao(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.lU.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.v(r,t)
r[t]=a
if(s===0)this.d.dj(r)}else if(t.b===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eT.prototype={}
P.jW.prototype={
cF:function(a,b){if(a==null)a=new P.fg()
if(this.a.a!==0)throw H.k(new P.dP("Future already completed"))
$.am.toString
this.ao(a,b)},
bq:function(a){return this.cF(a,null)},
$iseT:1,
ghg:function(){return this.a}}
P.dT.prototype={
aC:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.dP("Future already completed"))
t.dd(b)},
fX:function(a){return this.aC(a,null)},
ao:function(a,b){this.a.de(a,b)}}
P.k7.prototype={
aC:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.dP("Future already completed"))
t.aI(b)},
ao:function(a,b){this.a.ao(a,b)}}
P.k_.prototype={
gfN:function(){return this.b.b},
ge3:function(){return(this.c&1)!==0},
ghn:function(){return(this.c&2)!==0},
ge2:function(){return this.c===8},
hl:function(a){return this.b.b.cW(this.d,a)},
hw:function(a){if(this.c!==6)return!0
return this.b.b.cW(this.d,J.fD(a))},
hh:function(a){var t,s,r
t=this.e
s=J.aR(a)
r=this.b.b
if(H.fA(t,{func:1,args:[,,]}))return r.hV(t,s.gas(a),a.gaL())
else return r.cW(t,s.gas(a))},
hm:function(){return this.b.b.en(this.d)},
gcq:function(){return this.a}}
P.bj.prototype={
gfu:function(){return this.a===2},
gcn:function(){return this.a>=4},
c3:function(a,b){var t=$.am
if(t!==C.e){t.toString
if(b!=null)b=P.xm(b,t)}return this.cv(a,b)},
b4:function(a){return this.c3(a,null)},
cv:function(a,b){var t,s
t=new P.bj(0,$.am,null,[null])
s=b==null?1:3
this.cb(new P.k_(null,t,s,a,b,[H.P(this,0),null]))
return t},
c6:function(a){var t,s
t=$.am
s=new P.bj(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.P(this,0)
this.cb(new P.k_(null,s,8,a,null,[t,t]))
return s},
cb:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcn()){s.cb(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fy(null,null,t,new P.q_(this,a))}},
dG:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcq()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcn()){p.dG(a)
return}this.a=p.a
this.c=p.c}t.a=this.bO(a)
s=this.b
s.toString
P.fy(null,null,s,new P.q7(t,this))}},
bN:function(){var t=this.c
this.c=null
return this.bO(t)},
bO:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcq()
t.a=s}return s},
aI:function(a){var t,s
t=this.$ti
if(H.dU(a,"$iscD",t,"$ascD"))if(H.dU(a,"$isbj",t,null))P.q2(a,this)
else P.x7(a,this)
else{s=this.bN()
this.a=4
this.c=a
P.ft(this,s)}},
dj:function(a){var t=this.bN()
this.a=4
this.c=a
P.ft(this,t)},
ao:function(a,b){var t=this.bN()
this.a=8
this.c=new P.eN(a,b)
P.ft(this,t)},
f8:function(a){return this.ao(a,null)},
dd:function(a){var t
if(H.dU(a,"$iscD",this.$ti,"$ascD")){this.f5(a)
return}this.a=1
t=this.b
t.toString
P.fy(null,null,t,new P.q1(this,a))},
f5:function(a){var t
if(H.dU(a,"$isbj",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fy(null,null,t,new P.q6(this,a))}else P.q2(a,this)
return}P.x7(a,this)},
de:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fy(null,null,t,new P.q0(this,a,b))},
$iscD:1,
gbP:function(){return this.a},
gfG:function(){return this.c}}
P.q_.prototype={
$0:function(){P.ft(this.a,this.b)},
$S:function(){return{func:1}}}
P.q7.prototype={
$0:function(){P.ft(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.q3.prototype={
$1:function(a){var t=this.a
t.a=0
t.aI(a)},
$S:function(){return{func:1,args:[,]}}}
P.q4.prototype={
$2:function(a,b){this.a.ao(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.q5.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.q1.prototype={
$0:function(){this.a.dj(this.b)},
$S:function(){return{func:1}}}
P.q6.prototype={
$0:function(){P.q2(this.b,this.a)},
$S:function(){return{func:1}}}
P.q0.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.qa.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hm()}catch(q){s=H.cl(q)
r=H.ck(q)
if(this.c){p=J.fD(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eN(s,r)
o.a=!0
return}if(!!J.ar(t).$iscD){if(t instanceof P.bj&&t.gbP()>=4){if(t.gbP()===8){p=this.b
p.b=t.gfG()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b4(new P.qb(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qb.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.q9.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hl(this.c)}catch(r){t=H.cl(r)
s=H.ck(r)
q=this.a
q.b=new P.eN(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.q8.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hw(t)===!0&&q.e!=null){p=this.b
p.b=q.hh(t)
p.a=!1}}catch(o){s=H.cl(o)
r=H.ck(o)
q=this.a
p=J.fD(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eN(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.jV.prototype={}
P.dh.prototype={
ay:function(a,b){return new P.qo(b,this,[H.as(this,"dh",0),null])},
ab:function(a,b){var t,s
t={}
s=new P.bj(0,$.am,null,[P.d9])
t.a=null
t.a=this.aR(new P.ol(t,this,b,s),!0,new P.om(s),s.gbd())
return s},
a8:function(a,b){var t,s
t={}
s=new P.bj(0,$.am,null,[null])
t.a=null
t.a=this.aR(new P.or(t,this,b,s),!0,new P.os(s),s.gbd())
return s},
gm:function(a){var t,s
t={}
s=new P.bj(0,$.am,null,[P.C])
t.a=0
this.aR(new P.ov(t),!0,new P.ow(t,s),s.gbd())
return s},
gY:function(a){var t,s
t={}
s=new P.bj(0,$.am,null,[P.d9])
t.a=null
t.a=this.aR(new P.ot(t,s),!0,new P.ou(s),s.gbd())
return s},
aq:function(a){var t,s,r
t=H.as(this,"dh",0)
s=H.a([],[t])
r=new P.bj(0,$.am,null,[[P.p,t]])
this.aR(new P.ox(this,s),!0,new P.oy(s,r),r.gbd())
return r},
gad:function(a){var t,s
t={}
s=new P.bj(0,$.am,null,[H.as(this,"dh",0)])
t.a=null
t.a=this.aR(new P.on(t,this,s),!0,new P.oo(s),s.gbd())
return s}}
P.ol.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xq(new P.oj(this.c,a),new P.ok(t,s),P.xg(t.a,s))},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.b,"dh")}}
P.oj.prototype={
$0:function(){return J.b_(this.b,this.a)},
$S:function(){return{func:1}}}
P.ok.prototype={
$1:function(a){if(a===!0)P.uK(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.d9]}}}
P.om.prototype={
$0:function(){this.a.aI(!1)},
$S:function(){return{func:1}}}
P.or.prototype={
$1:function(a){P.xq(new P.op(this.c,a),new P.oq(),P.xg(this.a.a,this.d))},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.b,"dh")}}
P.op.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oq.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.os.prototype={
$0:function(){this.a.aI(null)},
$S:function(){return{func:1}}}
P.ov.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.ow.prototype={
$0:function(){this.b.aI(this.a.a)},
$S:function(){return{func:1}}}
P.ot.prototype={
$1:function(a){P.uK(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.ou.prototype={
$0:function(){this.a.aI(!0)},
$S:function(){return{func:1}}}
P.ox.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.a,"dh")}}
P.oy.prototype={
$0:function(){this.b.aI(this.a)},
$S:function(){return{func:1}}}
P.on.prototype={
$1:function(a){P.uK(this.a.a,this.c,a)},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.b,"dh")}}
P.oo.prototype={
$0:function(){var t,s,r,q
try{r=H.jl()
throw H.k(r)}catch(q){t=H.cl(q)
s=H.ck(q)
P.xj(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oi.prototype={}
P.di.prototype={
cP:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dU()
if((t&4)===0&&(this.e&32)===0)this.du(this.gdE())},
eh:function(a){return this.cP(a,null)},
em:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gY(t)}else t=!1
if(t)this.r.c7(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.du(this.gdF())}}}},
bV:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cd()
t=this.f
return t==null?$.$get$hc():t},
cd:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dU()
if((this.e&32)===0)this.r=null
this.f=this.dD()},
bI:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dK(b)
else this.cc(new P.pO(b,null,[H.as(this,"di",0)]))},
bH:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dM(a,b)
else this.cc(new P.pQ(a,b,null))},
f4:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dL()
else this.cc(C.J)},
bL:function(){},
bM:function(){},
dD:function(){return},
cc:function(a){var t,s
t=this.r
if(t==null){t=new P.qD(null,null,0,[H.as(this,"di",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c7(this)}},
dK:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cX(this.a,a)
this.e=(this.e&4294967263)>>>0
this.ce((t&4)!==0)},
dM:function(a,b){var t,s
t=this.e
s=new P.pJ(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cd()
t=this.f
if(!!J.ar(t).$iscD&&t!==$.$get$hc())t.c6(s)
else s.$0()}else{s.$0()
this.ce((t&4)!==0)}},
dL:function(){var t,s
t=new P.pI(this)
this.cd()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ar(s).$iscD&&s!==$.$get$hc())s.c6(t)
else t.$0()},
du:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.ce((t&4)!==0)},
ce:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gY(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gY(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bL()
else this.bM()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c7(this)},
eY:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xm(b,t)
this.c=c},
gbP:function(){return this.e}}
P.pJ.prototype={
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
if(r)q.hW(o,p,this.c)
else q.cX(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.pI.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eo(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.jY.prototype={
gbx:function(a){return this.a},
sbx:function(a,b){return this.a=b}}
P.pO.prototype={
cQ:function(a){a.dK(this.b)}}
P.pQ.prototype={
cQ:function(a){a.dM(this.b,this.c)},
$asjY:function(){},
gas:function(a){return this.b},
gaL:function(){return this.c}}
P.pP.prototype={
cQ:function(a){a.dL()},
gbx:function(a){return},
sbx:function(a,b){throw H.k(new P.dP("No events after a done."))}}
P.qq.prototype={
c7:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xJ(new P.qr(this,a))
this.a=1},
dU:function(){if(this.a===1)this.a=3},
gbP:function(){return this.a}}
P.qr.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbx(r)
t.b=q
if(q==null)t.c=null
r.cQ(this.b)},
$S:function(){return{func:1}}}
P.qD.prototype={
gY:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbx(0,b)
this.c=b}}}
P.qE.prototype={}
P.qX.prototype={
$0:function(){return this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.qW.prototype={
$2:function(a,b){P.Gp(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dO]}}}
P.qY.prototype={
$0:function(){return this.a.aI(this.b)},
$S:function(){return{func:1}}}
P.hV.prototype={
aR:function(a,b,c,d){return this.fb(a,d,c,!0===b)},
ec:function(a,b,c){return this.aR(a,null,b,c)},
fb:function(a,b,c,d){return P.G4(this,a,b,c,d,H.as(this,"hV",0),H.as(this,"hV",1))},
dv:function(a,b){b.bI(0,a)},
fq:function(a,b,c){c.bH(a,b)},
$asdh:function(a,b){return[b]}}
P.hW.prototype={
bI:function(a,b){if((this.e&2)!==0)return
this.eO(0,b)},
bH:function(a,b){if((this.e&2)!==0)return
this.eP(a,b)},
bL:function(){var t=this.y
if(t==null)return
t.eh(0)},
bM:function(){var t=this.y
if(t==null)return
t.em(0)},
dD:function(){var t=this.y
if(t!=null){this.y=null
return t.bV(0)}return},
fl:function(a){this.x.dv(a,this)},
fp:function(a,b){this.x.fq(a,b,this)},
fn:function(){this.f4()},
f0:function(a,b,c,d,e,f,g){this.y=this.x.a.ec(this.gfk(),this.gfm(),this.gfo())},
$asdi:function(a,b){return[b]}}
P.qo.prototype={
dv:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cl(q)
r=H.ck(q)
P.Go(b,s,r)
return}b.bI(0,t)}}
P.eN.prototype={
C:function(a){return H.x(this.a)},
$iseb:1,
gas:function(a){return this.a},
gaL:function(){return this.b}}
P.qT.prototype={}
P.r3.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fg()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.k(t)
r=H.k(t)
r.stack=J.cI(s)
throw r},
$S:function(){return{func:1}}}
P.qu.prototype={
eo:function(a){var t,s,r,q
try{if(C.e===$.am){r=a.$0()
return r}r=P.xn(null,null,this,a)
return r}catch(q){t=H.cl(q)
s=H.ck(q)
r=P.ka(null,null,this,t,s)
return r}},
cX:function(a,b){var t,s,r,q
try{if(C.e===$.am){r=a.$1(b)
return r}r=P.xp(null,null,this,a,b)
return r}catch(q){t=H.cl(q)
s=H.ck(q)
r=P.ka(null,null,this,t,s)
return r}},
hW:function(a,b,c){var t,s,r,q
try{if(C.e===$.am){r=a.$2(b,c)
return r}r=P.xo(null,null,this,a,b,c)
return r}catch(q){t=H.cl(q)
s=H.ck(q)
r=P.ka(null,null,this,t,s)
return r}},
cD:function(a,b){if(b)return new P.qv(this,a)
else return new P.qw(this,a)},
fV:function(a,b){return new P.qx(this,a)},
n:function(a,b){return},
en:function(a){if($.am===C.e)return a.$0()
return P.xn(null,null,this,a)},
cW:function(a,b){if($.am===C.e)return a.$1(b)
return P.xp(null,null,this,a,b)},
hV:function(a,b,c){if($.am===C.e)return a.$2(b,c)
return P.xo(null,null,this,a,b,c)}}
P.qv.prototype={
$0:function(){return this.a.eo(this.b)},
$S:function(){return{func:1}}}
P.qw.prototype={
$0:function(){return this.a.en(this.b)},
$S:function(){return{func:1}}}
P.qx.prototype={
$1:function(a){return this.a.cX(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qd.prototype={
gm:function(a){return this.a},
gY:function(a){return this.a===0},
gc5:function(a){var t=H.P(this,0)
return H.df(new P.qe(this,[t]),new P.qg(this),t,H.P(this,1))},
V:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fa(b)},
fa:function(a){var t=this.d
if(t==null)return!1
return this.aP(t[this.aO(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fi(0,b)},
fi:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(b)]
r=this.aP(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.uI()
this.b=t}this.dh(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.uI()
this.c=s}this.dh(s,b,c)}else this.fH(b,c)},
fH:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.uI()
this.d=t}s=this.aO(a)
r=t[s]
if(r==null){P.uJ(t,s,[a,b]);++this.a
this.e=null}else{q=this.aP(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
af:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.ct(0,b)},
ct:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(b)]
r=this.aP(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a8:function(a,b){var t,s,r,q
t=this.cg()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.k(new P.bM(this))}},
cg:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dh:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uJ(a,b,c)},
bl:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.G6(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aO:function(a){return J.dz(a)&0x3ffffff},
aP:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.b_(a[s],b))return s
return-1},
$isbl:1,
$asbl:null}
P.qg.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qe.prototype={
gm:function(a){return this.a.a},
gY:function(a){return this.a.a===0},
gT:function(a){var t=this.a
return new P.qf(t,t.cg(),0,null,this.$ti)},
ab:function(a,b){return this.a.V(0,b)},
a8:function(a,b){var t,s,r,q
t=this.a
s=t.cg()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.k(new P.bM(t))}}}
P.qf.prototype={
gN:function(){return this.d},
G:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.k(new P.bM(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.k2.prototype={
bv:function(a){return H.H8(a)&0x3ffffff},
bw:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ge7()
if(r==null?b==null:r===b)return s}return-1}}
P.k1.prototype={
gT:function(a){var t=new P.dv(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gY:function(a){return this.a===0},
ab:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.f9(b)},
f9:function(a){var t=this.d
if(t==null)return!1
return this.aP(t[this.aO(a)],a)>=0},
cN:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ab(0,a)?a:null
else return this.fv(a)},
fv:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(a)]
r=this.aP(s,a)
if(r<0)return
return J.fC(s,r).gdq()},
a8:function(a,b){var t,s
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
t=s}return this.dg(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dg(r,b)}else return this.aN(0,b)},
aN:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.G7()
this.d=t}s=this.aO(b)
r=t[s]
if(r==null)t[s]=[this.cf(b)]
else{if(this.aP(r,b)>=0)return!1
r.push(this.cf(b))}return!0},
af:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.ct(0,b)},
ct:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aO(b)]
r=this.aP(s,b)
if(r<0)return!1
this.di(s.splice(r,1)[0])
return!0},
ba:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dg:function(a,b){if(a[b]!=null)return!1
a[b]=this.cf(b)
return!0},
bl:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.di(t)
delete a[b]
return!0},
cf:function(a){var t,s
t=new P.qk(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
di:function(a){var t,s
t=a.gf7()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aO:function(a){return J.dz(a)&0x3ffffff},
aP:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].gdq(),b))return s
return-1},
$iseu:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.qk.prototype={
gdq:function(){return this.a},
gf7:function(){return this.c}}
P.dv.prototype={
gN:function(){return this.d},
G:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qh.prototype={}
P.fa.prototype={
ay:function(a,b){return H.df(this,b,H.as(this,"fa",0),null)},
ab:function(a,b){var t
for(t=this.gT(this);t.G();)if(J.b_(t.gN(),b))return!0
return!1},
a8:function(a,b){var t
for(t=this.gT(this);t.G();)b.$1(t.gN())},
a1:function(a,b){return P.d1(this,!0,H.as(this,"fa",0))},
aq:function(a){return this.a1(a,!0)},
gm:function(a){var t,s
t=this.gT(this)
for(s=0;t.G();)++s
return s},
gY:function(a){return!this.gT(this).G()},
C:function(a){return P.tF(this,"(",")")},
$isn:1,
$asn:null}
P.hj.prototype={}
P.jp.prototype={}
P.hB.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
P.aM.prototype={
gT:function(a){return new H.dL(a,this.gm(a),0,null,[H.as(a,"aM",0)])},
U:function(a,b){return this.n(a,b)},
a8:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.k(new P.bM(a))}},
gY:function(a){return this.gm(a)===0},
ab:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.b_(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.k(new P.bM(a))}return!1},
ay:function(a,b){return new H.fd(a,b,[H.as(a,"aM",0),null])},
d3:function(a,b){return H.wG(a,b,null,H.as(a,"aM",0))},
a1:function(a,b){var t,s,r
t=H.a([],[H.as(a,"aM",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
aq:function(a){return this.a1(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bY:function(a,b,c,d){var t
P.dg(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a7:function(a,b,c,d,e){var t,s,r,q,p,o
P.dg(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.an()
if(typeof b!=="number")return H.a7(b)
t=c-b
if(t===0)return
if(J.e7(e,0))H.aZ(P.bE(e,0,null,"skipCount",null))
if(H.dU(d,"$isp",[H.as(a,"aM",0)],"$asp")){s=e
r=d}else{r=J.y8(d,e).a1(0,!1)
s=0}q=J.kc(s)
p=J.bc(r)
if(J.ct(q.W(s,t),p.gm(r)))throw H.k(H.wf())
if(q.a2(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.W(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.W(s,o)))},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aF:function(a,b,c,d){var t,s,r,q,p
P.dg(b,c,this.gm(a),null,null,null)
d=C.c.aq(d)
if(typeof c!=="number")return c.an()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.aA(a,b,r,d)
if(q!==0){this.a7(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a7(a,r,p,a,c)
this.aA(a,b,r,d)}},
b1:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.b_(this.n(a,t),b))return t
return-1},
bf:function(a,b){return this.b1(a,b,0)},
C:function(a){return P.jk(a,"[","]")},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.qL.prototype={
i:function(a,b,c){throw H.k(new P.U("Cannot modify unmodifiable map"))},
$isbl:1,
$asbl:null}
P.mZ.prototype={
n:function(a,b){return J.fC(this.a,b)},
i:function(a,b,c){J.kf(this.a,b,c)},
a8:function(a,b){J.uY(this.a,b)},
gY:function(a){return J.rC(this.a)},
gm:function(a){return J.bZ(this.a)},
C:function(a){return J.cI(this.a)},
$isbl:1,
$asbl:null}
P.hP.prototype={$asbl:null,$isbl:1}
P.n_.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.O+=", "
t.a=!1
t=this.b
s=t.O+=H.x(a)
t.O=s+": "
t.O+=H.x(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mM.prototype={
gT:function(a){return new P.ql(this,this.c,this.d,this.b,null,this.$ti)},
a8:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.v(r,s)
b.$1(r[s])
if(t!==this.d)H.aZ(new P.bM(this))}},
gY:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
U:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a7(b)
if(0>b||b>=t)H.aZ(P.by(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.v(s,q)
return s[q]},
a1:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fM(t)
return t},
aq:function(a){return this.a1(a,!0)},
h:function(a,b){this.aN(0,b)},
ba:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.v(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
C:function(a){return P.jk(this,"{","}")},
el:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.k(H.jl());++this.d
s=this.a
r=s.length
if(t>=r)return H.v(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aN:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.v(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dt();++this.d},
dt:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a7(s,0,q,t,r)
C.b.a7(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fM:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a7(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a7(a,0,p,r,t)
C.b.a7(a,p,p+this.c,this.a,0)
return this.c+p}},
eT:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asr:null,
$asn:null}
P.ql.prototype={
gN:function(){return this.e},
G:function(){var t,s,r
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
P.o3.prototype={
gY:function(a){return this.a===0},
bo:function(a,b){var t
for(t=J.cP(b);t.G();)this.h(0,t.gN())},
a1:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dv(this,this.r,null,null,[null]),s.c=this.e,r=0;s.G();r=p){q=s.d
p=r+1
if(r>=t.length)return H.v(t,r)
t[r]=q}return t},
aq:function(a){return this.a1(a,!0)},
ay:function(a,b){return new H.fW(this,b,[H.P(this,0),null])},
C:function(a){return P.jk(this,"{","}")},
a8:function(a,b){var t
for(t=new P.dv(this,this.r,null,null,[null]),t.c=this.e;t.G();)b.$1(t.d)},
bg:function(a,b){var t,s
t=new P.dv(this,this.r,null,null,[null])
t.c=this.e
if(!t.G())return""
if(b===""){s=""
do s+=H.x(t.d)
while(t.G())}else{s=H.x(t.d)
for(;t.G();)s=s+b+H.x(t.d)}return s.charCodeAt(0)==0?s:s},
$iseu:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.o2.prototype={}
P.kw.prototype={
hA:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bc(b)
a1=P.dg(a0,a1,t.gm(b),null,null,null)
s=$.$get$x6()
if(typeof a1!=="number")return H.a7(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.Z(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rg(C.c.a3(b,l))
h=H.rg(C.c.a3(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.v(s,g)
f=s[g]
if(f>=0){g=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.O.length
if(e==null)e=0
if(typeof e!=="number")return e.W()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.c9("")
p.O+=C.c.K(b,q,r)
p.O+=H.hC(k)
q=l
continue}}throw H.k(new P.bJ("Invalid base64 data",b,r))}if(p!=null){t=p.O+=t.K(b,q,a1)
e=t.length
if(o>=0)P.v5(b,n,a1,o,m,e)
else{d=C.a.bG(e-1,4)+1
if(d===1)throw H.k(new P.bJ("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.O=t;++d}}t=p.O
return C.c.aF(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.v5(b,n,a1,o,m,c)
else{d=C.d.bG(c,4)
if(d===1)throw H.k(new P.bJ("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aF(b,a1,a1,d===2?"==":"=")}return b},
$asfP:function(){return[[P.p,P.C],P.B]}}
P.kx.prototype={
$asfR:function(){return[[P.p,P.C],P.B]}}
P.fP.prototype={}
P.fR.prototype={}
P.lb.prototype={
$asfP:function(){return[P.B,[P.p,P.C]]}}
P.pf.prototype={
gH:function(a){return"utf-8"}}
P.pg.prototype={
cG:function(a,b,c){var t,s,r,q
t=J.bZ(a)
P.dg(b,c,t,null,null,null)
s=new P.c9("")
r=new P.qN(!1,s,!0,0,0,0)
r.cG(a,b,t)
r.hc(0,a,t)
q=s.O
return q.charCodeAt(0)==0?q:q},
h_:function(a){return this.cG(a,0,null)},
$asfR:function(){return[[P.p,P.C],P.B]}}
P.qN.prototype={
hc:function(a,b,c){if(this.e>0)throw H.k(new P.bJ("Unfinished UTF-8 octet sequence",b,c))},
cG:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.qP(c)
p=new P.qO(this,a,b,c)
$loop$0:for(o=J.bc(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aK()
if((l&192)!==128){k=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bC(l,16),a,m)
throw H.k(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.v(C.w,k)
if(t<=C.w[k]){k=new P.bJ("Overlong encoding of 0x"+C.a.bC(t,16),a,m-r-1)
throw H.k(k)}if(t>1114111){k=new P.bJ("Character outside valid Unicode range: 0x"+C.a.bC(t,16),a,m-r-1)
throw H.k(k)}if(!this.c||t!==65279)n.O+=H.hC(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.ct(j,0)){this.c=!1
if(typeof j!=="number")return H.a7(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dx(l)
if(g.a2(l,0)){g=new P.bJ("Negative UTF-8 code unit: -0x"+J.yb(g.d0(l),16),a,h-1)
throw H.k(g)}else{if(typeof l!=="number")return l.aK()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bC(l,16),a,h-1)
throw H.k(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.qP.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bc(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aK()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.C,args:[,P.C]}}}
P.qO.prototype={
$2:function(a,b){this.a.b.O+=P.oD(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.C,P.C]}}}
P.d9.prototype={}
P.bF.prototype={}
P.dF.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dF))return!1
return this.a===b.a&&this.b===b.b},
aB:function(a,b){return C.a.aB(this.a,b.gfL())},
ga4:function(a){var t=this.a
return(t^C.a.aY(t,30))&1073741823},
C:function(a){var t,s,r,q,p,o,n
t=P.yK(H.ws(this))
s=P.ic(H.nH(this))
r=P.ic(H.nG(this))
q=P.ic(H.F2(this))
p=P.ic(H.F4(this))
o=P.ic(H.F5(this))
n=P.yL(H.F3(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.yJ(C.a.W(this.a,b.gi9()),this.b)},
ghx:function(){return this.a},
d9:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.k(P.dA(this.ghx()))},
$isbF:1,
$asbF:function(){return[P.dF]},
gfL:function(){return this.a}}
P.V.prototype={$isbF:1,
$asbF:function(){return[P.dl]}}
P.dG.prototype={
W:function(a,b){return new P.dG(this.a+b.gbm())},
au:function(a,b){if(typeof b!=="number")return H.a7(b)
return new P.dG(C.d.bA(this.a*b))},
a2:function(a,b){return C.a.a2(this.a,b.gbm())},
aG:function(a,b){return C.a.aG(this.a,b.gbm())},
av:function(a,b){return C.a.av(this.a,b.gbm())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dG))return!1
return this.a===b.a},
ga4:function(a){return this.a&0x1FFFFFFF},
aB:function(a,b){return C.a.aB(this.a,b.gbm())},
C:function(a){var t,s,r,q,p
t=new P.l9()
s=this.a
if(s<0)return"-"+new P.dG(0-s).C(0)
r=t.$1(C.a.ap(s,6e7)%60)
q=t.$1(C.a.ap(s,1e6)%60)
p=new P.l8().$1(s%1e6)
return""+C.a.ap(s,36e8)+":"+H.x(r)+":"+H.x(q)+"."+H.x(p)},
d0:function(a){return new P.dG(0-this.a)},
$isbF:1,
$asbF:function(){return[P.dG]},
gbm:function(){return this.a}}
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
gaL:function(){return H.ck(this.$thrownJsError)}}
P.fg.prototype={
C:function(a){return"Throw of null."}}
P.cX.prototype={
gcj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gci:function(){return""},
C:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.x(t)
q=this.gcj()+s+r
if(!this.a)return q
p=this.gci()
o=P.vm(this.b)
return q+p+": "+H.x(o)},
gH:function(a){return this.c}}
P.et.prototype={
gcj:function(){return"RangeError"},
gci:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.x(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.x(t)
else{if(typeof r!=="number")return r.aG()
if(r>t)s=": Not in range "+H.x(t)+".."+H.x(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.x(t)}}return s}}
P.mb.prototype={
gcj:function(){return"RangeError"},
gci:function(){if(J.e7(this.b,0))return": index must not be negative"
var t=this.f
if(J.b_(t,0))return": no indices are valid"
return": index should be less than "+H.x(t)},
gm:function(a){return this.f}}
P.U.prototype={
C:function(a){return"Unsupported operation: "+this.a}}
P.ez.prototype={
C:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.x(t):"UnimplementedError"}}
P.dP.prototype={
C:function(a){return"Bad state: "+this.a}}
P.bM.prototype={
C:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.x(P.vm(t))+"."}}
P.no.prototype={
C:function(a){return"Out of Memory"},
gaL:function(){return},
$iseb:1}
P.jK.prototype={
C:function(a){return"Stack Overflow"},
gaL:function(){return},
$iseb:1}
P.l0.prototype={
C:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.x(t)+"' during its initialization"}}
P.pZ.prototype={
C:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.x(t)}}
P.bJ.prototype={
C:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.x(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a2()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.K(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a7(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a3(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.x(r-o+1)+")\n"):s+(" (at character "+H.x(r+1)+")\n")
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
g=""}f=C.c.K(q,i,j)
return s+h+f+g+"\n"+C.c.au(" ",r-i+h.length)+"^\n"}}
P.li.prototype={
C:function(a){return"Expando:"+H.x(this.a)},
n:function(a,b){var t,s
t=this.bK
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aZ(P.dB(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ue(b,"expando$values")
return s==null?null:H.ue(s,t)},
i:function(a,b,c){var t,s
t=this.bK
if(typeof t!=="string")t.set(b,c)
else{s=H.ue(b,"expando$values")
if(s==null){s=new P.ab()
H.ww(b,"expando$values",s)}H.ww(s,t,c)}},
gH:function(a){return this.a}}
P.C.prototype={$isbF:1,
$asbF:function(){return[P.dl]}}
P.n.prototype={
ay:function(a,b){return H.df(this,b,H.as(this,"n",0),null)},
ab:function(a,b){var t
for(t=this.gT(this);t.G();)if(J.b_(t.gN(),b))return!0
return!1},
a8:function(a,b){var t
for(t=this.gT(this);t.G();)b.$1(t.gN())},
a1:function(a,b){return P.d1(this,!0,H.as(this,"n",0))},
aq:function(a){return this.a1(a,!0)},
gm:function(a){var t,s
t=this.gT(this)
for(s=0;t.G();)++s
return s},
gY:function(a){return!this.gT(this).G()},
U:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.ye("index"))
if(b<0)H.aZ(P.bE(b,0,null,"index",null))
for(t=this.gT(this),s=0;t.G();){r=t.gN()
if(b===s)return r;++s}throw H.k(P.by(b,this,"index",null,s))},
C:function(a){return P.tF(this,"(",")")},
$asn:null}
P.jm.prototype={}
P.p.prototype={$asp:null,$isr:1,$asr:null,$isn:1,$asn:null}
P.bl.prototype={$asbl:null}
P.d3.prototype={
ga4:function(a){return P.ab.prototype.ga4.call(this,this)},
C:function(a){return"null"}}
P.dl.prototype={$isbF:1,
$asbF:function(){return[P.dl]}}
P.ab.prototype={constructor:P.ab,$isab:1,
S:function(a,b){return this===b},
ga4:function(a){return H.ep(this)},
C:function(a){return H.nI(this)},
ga9:function(a){return new H.dR(H.ke(this),null)},
toString:function(){return this.C(this)}}
P.d2.prototype={}
P.eu.prototype={}
P.dO.prototype={}
P.B.prototype={$isbF:1,
$asbF:function(){return[P.B]},
$isu9:1}
P.c9.prototype={
gm:function(a){return this.O.length},
gY:function(a){return this.O.length===0},
C:function(a){var t=this.O
return t.charCodeAt(0)==0?t:t},
gO:function(){return this.O}}
P.eB.prototype={}
P.pb.prototype={
$2:function(a,b){var t,s,r,q
t=J.bc(b)
s=t.bf(b,"=")
if(s===-1){if(!t.S(b,""))J.kf(a,P.qM(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.K(b,0,s)
q=C.c.ah(b,s+1)
t=this.a
J.kf(a,P.qM(r,0,r.length,t,!0),P.qM(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.p8.prototype={
$2:function(a,b){throw H.k(new P.bJ("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.B,P.C]}}}
P.p9.prototype={
$2:function(a,b){throw H.k(new P.bJ("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.B],opt:[,]}}}
P.pa.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fi(C.c.K(this.a,a,b),16,null)
s=J.dx(t)
if(s.a2(t,0)||s.aG(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.C,args:[P.C,P.C]}}}
P.k8.prototype={
gev:function(){return this.b},
gcK:function(a){var t=this.c
if(t==null)return""
if(C.c.ag(t,"["))return C.c.K(t,1,t.length-1)
return t},
gcR:function(a){var t=this.d
if(t==null)return P.x9(this.a)
return t},
gcS:function(a){var t=this.f
return t==null?"":t},
ge1:function(){var t=this.r
return t==null?"":t},
gcT:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.B
s=new P.hP(P.x_(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
ge4:function(){return this.c!=null},
ge6:function(){return this.f!=null},
ge5:function(){return this.r!=null},
C:function(a){var t=this.y
if(t==null){t=this.dz()
this.y=t}return t},
dz:function(){var t,s,r,q
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
S:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.ar(b)
if(!!t.$iseB){if(this.a===b.gd1())if(this.c!=null===b.ge4()){s=this.b
r=b.gev()
if(s==null?r==null:s===r){s=this.gcK(this)
r=t.gcK(b)
if(s==null?r==null:s===r)if(J.b_(this.gcR(this),t.gcR(b)))if(J.b_(this.e,t.geg(b))){s=this.f
r=s==null
if(!r===b.ge6()){if(r)s=""
if(s===t.gcS(b)){t=this.r
s=t==null
if(!s===b.ge5()){if(s)t=""
t=t===b.ge1()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga4:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dz()
this.y=t}t=C.c.ga4(t)
this.z=t}return t},
$iseB:1,
gd1:function(){return this.a},
geg:function(a){return this.e}}
P.r5.prototype={
$1:function(a){throw H.k(new P.bJ("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.p7.prototype={
geu:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.v(t,0)
s=this.a
t=t[0]+1
r=J.bc(s)
q=r.b1(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fw(s,o,p,C.l,!1)
if(n==null)n=r.K(s,o,p)
p=q}else n=null
m=P.fw(s,t,p,C.D,!1)
t=new P.pN(this,"data",null,null,null,m==null?r.K(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
C:function(a){var t,s
t=this.b
if(0>=t.length)return H.v(t,0)
s=this.a
return t[0]===-1?"data:"+H.x(s):s}}
P.r0.prototype={
$1:function(a){return new Uint8Array(H.cy(96))},
$S:function(){return{func:1,args:[,]}}}
P.r_.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.v(t,a)
t=t[a]
J.xU(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.d8,args:[,,]}}}
P.r1.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dk(a),r=0;r<t;++r)s.i(a,C.c.a3(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.B,P.C]}}}
P.r2.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a3(b,0),s=C.c.a3(b,1),r=J.dk(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.B,P.C]}}}
P.qC.prototype={
ge4:function(){return this.c>0},
ge6:function(){var t=this.f
if(typeof t!=="number")return t.a2()
return t<this.r},
ge5:function(){return this.r<this.a.length},
gd1:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ag(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ag(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ag(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ag(this.a,"package")){this.x="package"
t="package"}else{t=C.c.K(this.a,0,t)
this.x=t}return t},
gev:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.K(this.a,s,t-1):""},
gcK:function(a){var t=this.c
return t>0?C.c.K(this.a,t,this.d):""},
gcR:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.W()
s=this.e
if(typeof s!=="number")return H.a7(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.W()
return H.fi(C.c.K(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ag(this.a,"http"))return 80
if(t===5&&C.c.ag(this.a,"https"))return 443
return 0},
geg:function(a){return C.c.K(this.a,this.e,this.f)},
gcS:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a2()
return t<s?C.c.K(this.a,t+1,s):""},
ge1:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ah(s,t+1):""},
gcT:function(){var t=this.f
if(typeof t!=="number")return t.a2()
if(t>=this.r)return C.a_
t=P.B
return new P.hP(P.x_(this.gcS(this),C.n),[t,t])},
ga4:function(a){var t=this.y
if(t==null){t=C.c.ga4(this.a)
this.y=t}return t},
S:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.ar(b)
if(!!t.$iseB)return this.a===t.C(b)
return!1},
C:function(a){return this.a},
$iseB:1}
P.pN.prototype={}
W.at.prototype={}
W.eM.prototype={
C:function(a){return String(a)},
$iseM:1,
$isf:1,
gae:function(a){return a.href}}
W.km.prototype={
C:function(a){return String(a)},
$isf:1,
gae:function(a){return a.href}}
W.eP.prototype={$iseP:1,$isdp:1,$isaz:1,$isab:1}
W.cJ.prototype={$isab:1}
W.ku.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cJ]},
$isr:1,
$asr:function(){return[W.cJ]},
$isn:1,
$asn:function(){return[W.cJ]},
$isaE:1,
$asaE:function(){return[W.cJ]},
$isay:1,
$asay:function(){return[W.cJ]}}
W.fY.prototype={
$asp:function(){return[W.cJ]},
$asr:function(){return[W.cJ]},
$asn:function(){return[W.cJ]},
$isp:1,
$isr:1,
$isn:1}
W.h0.prototype={
$asp:function(){return[W.cJ]},
$asr:function(){return[W.cJ]},
$asn:function(){return[W.cJ]},
$isp:1,
$isr:1,
$isn:1}
W.ky.prototype={
gae:function(a){return a.href}}
W.eQ.prototype={$iseQ:1}
W.kB.prototype={$isf:1}
W.eR.prototype={$iseR:1,
gH:function(a){return a.name}}
W.e9.prototype={$isf:1,
gm:function(a){return a.length}}
W.kI.prototype={
at:function(a,b){return a.get(b)}}
W.kM.prototype={$isf:1}
W.i8.prototype={
cI:function(a,b){return typeof console!="undefined"?console.error(b):null},
aV:function(a){return typeof console!="undefined"?console.group(a):null},
e8:function(a){return typeof console!="undefined"?console.info(a):null},
i_:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fS.prototype={
gH:function(a){return a.name}}
W.kQ.prototype={
at:function(a,b){if(b!=null)return a.get(P.GM(b,null))
return a.get()},
bk:function(a){return this.at(a,null)}}
W.kT.prototype={
gaM:function(a){return a.style}}
W.kU.prototype={
gae:function(a){return a.href}}
W.fT.prototype={
gaM:function(a){return a.style}}
W.fU.prototype={
gH:function(a){return a.name}}
W.kV.prototype={
gaM:function(a){return a.style}}
W.bI.prototype={$isbI:1,$isab:1}
W.eU.prototype={
bF:function(a,b){var t=this.fj(a,b)
return t!=null?t:""},
fj:function(a,b){if(W.yI(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.yM()+b)},
J:function(a,b){return a.item(b)},
gbe:function(a){return a.content},
gbs:function(a){return a.display},
sbs:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iC.prototype={}
W.pL.prototype={
bF:function(a,b){var t=this.b
return J.y4(t.gad(t),b)},
fI:function(a,b){var t
for(t=this.a,t=new H.dL(t,t.gm(t),0,null,[H.P(t,0)]);t.G();)t.d.style[a]=b},
sbs:function(a,b){this.fI("display",b)},
eZ:function(a){var t=P.d1(this.a,!0,null)
this.b=new H.fd(t,new W.pM(),[H.P(t,0),null])}}
W.jx.prototype={}
W.pM.prototype={
$1:function(a){return J.rD(a)},
$S:function(){return{func:1,args:[,]}}}
W.ia.prototype={
gbe:function(a){return this.bF(a,"content")},
gbs:function(a){return this.bF(a,"display")}}
W.kW.prototype={
gaM:function(a){return a.style}}
W.kX.prototype={
gaM:function(a){return a.style}}
W.l1.prototype={
gcJ:function(a){return a.files}}
W.eV.prototype={$iseV:1,$isab:1}
W.ib.prototype={
bR:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
J:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.fV.prototype={$isfV:1}
W.ea.prototype={$isea:1}
W.id.prototype={$isf:1}
W.ie.prototype={
gH:function(a){return a.name}}
W.l4.prototype={
gH:function(a){var t=a.name
if(P.vl()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vl()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
C:function(a){return String(a)}}
W.ig.prototype={
C:function(a){return"Rectangle ("+H.x(a.left)+", "+H.x(a.top)+") "+H.x(this.gb8(a))+" x "+H.x(this.gb0(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.ar(b)
if(!t.$isbS)return!1
return a.left===t.gc_(b)&&a.top===t.gc4(b)&&this.gb8(a)===t.gb8(b)&&this.gb0(a)===t.gb0(b)},
ga4:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb8(a)
q=this.gb0(a)
return W.x8(W.eI(W.eI(W.eI(W.eI(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gb0:function(a){return a.height},
gc_:function(a){return a.left},
gc4:function(a){return a.top},
gb8:function(a){return a.width},
$isbS:1,
$asbS:function(){}}
W.ih.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
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
J:function(a,b){return a.item(b)}}
W.ij.prototype={
h:function(a,b){return a.add(b)},
ab:function(a,b){return a.contains(b)},
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.jZ.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot modify list"))},
sm:function(a,b){throw H.k(new P.U("Cannot modify list"))},
gaM:function(a){return W.G3(this)},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.dp.prototype={
gdV:function(a){return new W.pT(a)},
C:function(a){return a.localName},
e9:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
gee:function(a){return new W.eG(a,"click",!1,[W.u0])},
$isdp:1,
$isaz:1,
$isab:1,
$isf:1,
gaM:function(a){return a.style}}
W.la.prototype={
gH:function(a){return a.name},
gaj:function(a){return a.src},
saj:function(a,b){return a.src=b}}
W.fX.prototype={
gH:function(a){return a.name}}
W.lg.prototype={
gas:function(a){return a.error}}
W.R.prototype={$isR:1,$isab:1}
W.aF.prototype={
fP:function(a,b,c,d){if(c!=null)this.f3(a,b,c,!1)},
hQ:function(a,b,c,d){if(c!=null)this.fF(a,b,c,!1)},
f3:function(a,b,c,d){return a.addEventListener(b,H.dj(c,1),!1)},
fF:function(a,b,c,d){return a.removeEventListener(b,H.dj(c,1),!1)}}
W.lJ.prototype={
gH:function(a){return a.name}}
W.cd.prototype={$iscd:1,$isab:1,
gH:function(a){return a.name}}
W.f2.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isf2:1,
$isaE:1,
$asaE:function(){return[W.cd]},
$isay:1,
$asay:function(){return[W.cd]},
$isp:1,
$asp:function(){return[W.cd]},
$isr:1,
$asr:function(){return[W.cd]},
$isn:1,
$asn:function(){return[W.cd]}}
W.iE.prototype={
$asp:function(){return[W.cd]},
$asr:function(){return[W.cd]},
$asn:function(){return[W.cd]},
$isp:1,
$isr:1,
$isn:1}
W.iY.prototype={
$asp:function(){return[W.cd]},
$asr:function(){return[W.cd]},
$asn:function(){return[W.cd]},
$isp:1,
$isr:1,
$isn:1}
W.lK.prototype={
gas:function(a){return a.error}}
W.lL.prototype={
gH:function(a){return a.name}}
W.lM.prototype={
gas:function(a){return a.error},
gm:function(a){return a.length}}
W.lP.prototype={
gaM:function(a){return a.style},
gb7:function(a){return a.weight}}
W.lQ.prototype={
h:function(a,b){return a.add(b)},
i8:function(a,b,c){return a.forEach(H.dj(b,3),c)},
a8:function(a,b){b=H.dj(b,3)
return a.forEach(b)}}
W.lS.prototype={
at:function(a,b){return a.get(b)}}
W.iy.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gH:function(a){return a.name}}
W.cm.prototype={$iscm:1,$isab:1}
W.m0.prototype={
gm:function(a){return a.length}}
W.f4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
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
J:function(a,b){return a.item(b)}}
W.e_.prototype={
ij:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hC:function(a,b,c,d){return a.open(b,c,d)},
ghT:function(a){return W.Gs(a.response)},
b9:function(a,b){return a.send(b)},
$ise_:1,
$isab:1,
ghU:function(a){return a.responseText}}
W.m3.prototype={
$1:function(a){return J.y0(a)},
$S:function(){return{func:1,args:[W.e_]}}}
W.m4.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.av()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aC(0,t)
else p.bq(a)},
$S:function(){return{func:1,args:[,]}}}
W.hd.prototype={}
W.m7.prototype={
gH:function(a){return a.name},
gaj:function(a){return a.src},
saj:function(a,b){return a.src=b}}
W.he.prototype={$ishe:1}
W.f6.prototype={$isf6:1,$isdp:1,$isaz:1,$isab:1,
aC:function(a,b){return a.complete.$1(b)},
gaj:function(a){return a.src},
saj:function(a,b){return a.src=b}}
W.mc.prototype={$isf:1,
gcJ:function(a){return a.files},
gH:function(a){return a.name},
gaj:function(a){return a.src},
saj:function(a,b){return a.src=b}}
W.mB.prototype={
gH:function(a){return a.name}}
W.hm.prototype={
h:function(a,b){return a.add(b)}}
W.hn.prototype={$ishn:1,
gae:function(a){return a.href}}
W.mT.prototype={
C:function(a){return String(a)},
gae:function(a){return a.href}}
W.mY.prototype={
gH:function(a){return a.name}}
W.ht.prototype={
gas:function(a){return a.error},
gaj:function(a){return a.src},
saj:function(a,b){return a.src=b}}
W.jr.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.n2.prototype={
gbe:function(a){return a.content},
gH:function(a){return a.name}}
W.n3.prototype={
i4:function(a,b,c){return a.send(b,c)},
b9:function(a,b){return a.send(b)}}
W.hu.prototype={
gH:function(a){return a.name}}
W.co.prototype={$isco:1,$isab:1}
W.js.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.co]},
$isay:1,
$asay:function(){return[W.co]},
$isp:1,
$asp:function(){return[W.co]},
$isr:1,
$asr:function(){return[W.co]},
$isn:1,
$asn:function(){return[W.co]}}
W.iP.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.j8.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.ng.prototype={$isf:1}
W.nh.prototype={
gH:function(a){return a.name}}
W.az.prototype={
C:function(a){var t=a.nodeValue
return t==null?this.eL(a):t},
ab:function(a,b){return a.contains(b)},
$isaz:1,
$isab:1}
W.jv.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
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
W.nk.prototype={
gH:function(a){return a.name}}
W.np.prototype={
gH:function(a){return a.name}}
W.nt.prototype={
gH:function(a){return a.name}}
W.nv.prototype={$isf:1}
W.e1.prototype={
gH:function(a){return a.name}}
W.nA.prototype={
gm:function(a){return a.length}}
W.cf.prototype={
J:function(a,b){return a.item(b)},
$iscf:1,
$isab:1,
gm:function(a){return a.length},
gH:function(a){return a.name}}
W.jC.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cf]},
$isr:1,
$asr:function(){return[W.cf]},
$isn:1,
$asn:function(){return[W.cf]},
$isaE:1,
$asaE:function(){return[W.cf]},
$isay:1,
$asay:function(){return[W.cf]}}
W.iR.prototype={
$asp:function(){return[W.cf]},
$asr:function(){return[W.cf]},
$asn:function(){return[W.cf]},
$isp:1,
$isr:1,
$isn:1}
W.ja.prototype={
$asp:function(){return[W.cf]},
$asr:function(){return[W.cf]},
$asn:function(){return[W.cf]},
$isp:1,
$isr:1,
$isn:1}
W.nF.prototype={
b9:function(a,b){return a.send(b)}}
W.jE.prototype={
b9:function(a,b){return a.send(b)}}
W.fl.prototype={$isfl:1,$isdp:1,$isaz:1,$isab:1,
gaj:function(a){return a.src},
saj:function(a,b){return a.src=b}}
W.jF.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gH:function(a){return a.name}}
W.o1.prototype={
gH:function(a){return a.name}}
W.o4.prototype={$isf:1}
W.o5.prototype={
gH:function(a){return a.name}}
W.o6.prototype={
gH:function(a){return a.name}}
W.cp.prototype={$iscp:1,$isab:1}
W.jH.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
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
W.fZ.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.h1.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.o9.prototype={
gaj:function(a){return a.src},
saj:function(a,b){return a.src=b}}
W.hH.prototype={$ishH:1}
W.cq.prototype={$iscq:1,$isab:1,
gb7:function(a){return a.weight}}
W.jI.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cq]},
$isr:1,
$asr:function(){return[W.cq]},
$isn:1,
$asn:function(){return[W.cq]},
$isaE:1,
$asaE:function(){return[W.cq]},
$isay:1,
$asay:function(){return[W.cq]}}
W.iS.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.jb.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.fm.prototype={$isfm:1,$isab:1}
W.ob.prototype={
gas:function(a){return a.error}}
W.ch.prototype={
J:function(a,b){return a.item(b)},
$isch:1,
$isab:1,
gm:function(a){return a.length}}
W.oc.prototype={
gH:function(a){return a.name}}
W.od.prototype={
gH:function(a){return a.name}}
W.oh.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a8:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gY:function(a){return a.key(0)==null},
$isbl:1,
$asbl:function(){return[P.B,P.B]}}
W.oE.prototype={
at:function(a,b){return a.get(b)}}
W.cj.prototype={$iscj:1,$isab:1,
gae:function(a){return a.href}}
W.e3.prototype={}
W.oL.prototype={
gbe:function(a){return a.content}}
W.hM.prototype={$ishM:1,
gH:function(a){return a.name}}
W.cO.prototype={$isab:1}
W.cG.prototype={$isab:1}
W.oS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isaE:1,
$asaE:function(){return[W.cG]},
$isay:1,
$asay:function(){return[W.cG]},
$isp:1,
$asp:function(){return[W.cG]},
$isr:1,
$asr:function(){return[W.cG]},
$isn:1,
$asn:function(){return[W.cG]}}
W.iT.prototype={
$asp:function(){return[W.cG]},
$asr:function(){return[W.cG]},
$asn:function(){return[W.cG]},
$isp:1,
$isr:1,
$isn:1}
W.jc.prototype={
$asp:function(){return[W.cG]},
$asr:function(){return[W.cG]},
$asn:function(){return[W.cG]},
$isp:1,
$isr:1,
$isn:1}
W.oT.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
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
W.oX.prototype={
gm:function(a){return a.length}}
W.cr.prototype={$iscr:1,$isab:1}
W.jM.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
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
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.p0.prototype={
gaj:function(a){return a.src},
saj:function(a,b){return a.src=b}}
W.e4.prototype={}
W.pc.prototype={
C:function(a){return String(a)},
$isf:1,
gae:function(a){return a.href}}
W.pd.prototype={
at:function(a,b){return a.get(b)}}
W.ph.prototype={
gm:function(a){return a.length}}
W.fr.prototype={$isfr:1,$isab:1}
W.jO.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pm.prototype={
b9:function(a,b){return a.send(b)}}
W.jR.prototype={$isf:1,
gH:function(a){return a.name}}
W.pt.prototype={$isf:1}
W.eD.prototype={$isf:1}
W.fs.prototype={$isfs:1,$isaz:1,$isab:1,
gH:function(a){return a.name}}
W.pK.prototype={
C:function(a){return"Rectangle ("+H.x(a.left)+", "+H.x(a.top)+") "+H.x(a.width)+" x "+H.x(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.ar(b)
if(!t.$isbS)return!1
s=a.left
r=t.gc_(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc4(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb8(b)
if(s==null?r==null:s===r){s=a.height
t=t.gb0(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga4:function(a){var t,s,r,q
t=J.dz(a.left)
s=J.dz(a.top)
r=J.dz(a.width)
q=J.dz(a.height)
return W.x8(W.eI(W.eI(W.eI(W.eI(0,t),s),r),q))},
$isbS:1,
$asbS:function(){},
gb0:function(a){return a.height},
gc_:function(a){return a.left},
gc4:function(a){return a.top},
gb8:function(a){return a.width}}
W.hU.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
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
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
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
W.pR.prototype={$isf:1}
W.pS.prototype={
gb0:function(a){return a.height},
gb8:function(a){return a.width}}
W.k0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cm]},
$isay:1,
$asay:function(){return[W.cm]},
$isp:1,
$asp:function(){return[W.cm]},
$isr:1,
$asr:function(){return[W.cm]},
$isn:1,
$asn:function(){return[W.cm]}}
W.iG.prototype={
$asp:function(){return[W.cm]},
$asr:function(){return[W.cm]},
$asn:function(){return[W.cm]},
$isp:1,
$isr:1,
$isn:1}
W.j_.prototype={
$asp:function(){return[W.cm]},
$asr:function(){return[W.cm]},
$asn:function(){return[W.cm]},
$isp:1,
$isr:1,
$isn:1}
W.qc.prototype={$isf:1}
W.hZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
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
W.qB.prototype={$isf:1}
W.k4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ch]},
$isr:1,
$asr:function(){return[W.ch]},
$isn:1,
$asn:function(){return[W.ch]},
$isaE:1,
$asaE:function(){return[W.ch]},
$isay:1,
$asay:function(){return[W.ch]}}
W.iI.prototype={
$asp:function(){return[W.ch]},
$asr:function(){return[W.ch]},
$asn:function(){return[W.ch]},
$isp:1,
$isr:1,
$isn:1}
W.j1.prototype={
$asp:function(){return[W.ch]},
$asr:function(){return[W.ch]},
$asn:function(){return[W.ch]},
$isp:1,
$isr:1,
$isn:1}
W.k6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cj]},
$isay:1,
$asay:function(){return[W.cj]},
$isp:1,
$asp:function(){return[W.cj]},
$isr:1,
$asr:function(){return[W.cj]},
$isn:1,
$asn:function(){return[W.cj]}}
W.iJ.prototype={
$asp:function(){return[W.cj]},
$asr:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$isr:1,
$isn:1}
W.j2.prototype={
$asp:function(){return[W.cj]},
$asr:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$isr:1,
$isn:1}
W.qR.prototype={$isf:1}
W.qS.prototype={$isf:1}
W.pT.prototype={
aE:function(){var t,s,r,q,p
t=P.a4(null,null,null,P.B)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bT)(s),++q){p=J.rG(s[q])
if(p.length!==0)t.h(0,p)}return t},
cZ:function(a){this.a.className=a.bg(0," ")},
gm:function(a){return this.a.classList.length},
gY:function(a){return this.a.classList.length===0},
ab:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
af:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.remove(b)
return s}}
W.pW.prototype={
aR:function(a,b,c,d){return W.e5(this.a,this.b,a,!1,H.P(this,0))},
ec:function(a,b,c){return this.aR(a,null,b,c)}}
W.eG.prototype={}
W.pX.prototype={
bV:function(a){if(this.b==null)return
this.dS()
this.b=null
this.d=null
return},
cP:function(a,b){if(this.b==null)return;++this.a
this.dS()},
eh:function(a){return this.cP(a,null)},
em:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dQ()},
dQ:function(){var t=this.d
if(t!=null&&this.a<=0)J.xO(this.b,this.c,t,!1)},
dS:function(){var t=this.d
if(t!=null)J.y7(this.b,this.c,t,!1)},
f_:function(a,b,c,d,e){this.dQ()}}
W.pY.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bx.prototype={
gT:function(a){return new W.lO(a,this.gm(a),-1,null,[H.as(a,"bx",0)])},
h:function(a,b){throw H.k(new P.U("Cannot add to immutable List."))},
a7:function(a,b,c,d,e){throw H.k(new P.U("Cannot setRange on immutable List."))},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aF:function(a,b,c,d){throw H.k(new P.U("Cannot modify an immutable List."))},
bY:function(a,b,c,d){throw H.k(new P.U("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.lO.prototype={
G:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.fC(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gN:function(){return this.d}}
W.qK.prototype={}
P.qH.prototype={
bu:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b6:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.ar(a)
if(!!s.$isdF)return new Date(a.a)
if(!!s.$isFn)throw H.k(new P.ez("structured clone of RegExp"))
if(!!s.$iscd)return a
if(!!s.$iseQ)return a
if(!!s.$isf2)return a
if(!!s.$ishe)return a
if(!!s.$isfe||!!s.$iseo)return a
if(!!s.$isbl){r=this.bu(a)
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
s.a8(a,new P.qJ(t,this))
return t.a}if(!!s.$isp){r=this.bu(a)
t=this.b
if(r>=t.length)return H.v(t,r)
o=t[r]
if(o!=null)return o
return this.h0(a,r)}throw H.k(new P.ez("structured clone of other type"))},
h0:function(a,b){var t,s,r,q,p
t=J.bc(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.v(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b6(t.n(a,p))
if(p>=r.length)return H.v(r,p)
r[p]=q}return r}}
P.qJ.prototype={
$2:function(a,b){this.a.a[a]=this.b.b6(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pA.prototype={
bu:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b6:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dF(s,!0)
r.d9(s,!0)
return r}if(a instanceof RegExp)throw H.k(new P.ez("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.GN(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bu(a)
r=this.b
o=r.length
if(p>=o)return H.v(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mL()
t.a=n
if(p>=o)return H.v(r,p)
r[p]=n
this.he(a,new P.pB(t,this))
return t.a}if(a instanceof Array){p=this.bu(a)
r=this.b
if(p>=r.length)return H.v(r,p)
n=r[p]
if(n!=null)return n
o=J.bc(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.v(r,p)
r[p]=n
if(typeof m!=="number")return H.a7(m)
r=J.dk(n)
l=0
for(;l<m;++l)r.i(n,l,this.b6(o.n(a,l)))
return n}return a}}
P.pB.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b6(b)
J.kf(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.r8.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.B,,]}}}
P.qI.prototype={}
P.jT.prototype={
he:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bT)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.r9.prototype={
$1:function(a){return this.a.aC(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.ra.prototype={
$1:function(a){return this.a.bq(a)},
$S:function(){return{func:1,args:[,]}}}
P.kR.prototype={
cz:function(a){if($.$get$vd().b.test(a))return a
throw H.k(P.dB(a,"value","Not a valid class token"))},
C:function(a){return this.aE().bg(0," ")},
gT:function(a){var t,s
t=this.aE()
s=new P.dv(t,t.r,null,null,[null])
s.c=t.e
return s},
a8:function(a,b){this.aE().a8(0,b)},
ay:function(a,b){var t=this.aE()
return new H.fW(t,b,[H.P(t,0),null])},
gY:function(a){return this.aE().a===0},
gm:function(a){return this.aE().a},
ab:function(a,b){if(typeof b!=="string")return!1
this.cz(b)
return this.aE().ab(0,b)},
cN:function(a){return this.ab(0,a)?a:null},
h:function(a,b){this.cz(b)
return this.hy(0,new P.kS(b))},
af:function(a,b){var t,s
this.cz(b)
t=this.aE()
s=t.af(0,b)
this.cZ(t)
return s},
a1:function(a,b){return this.aE().a1(0,!0)},
aq:function(a){return this.a1(a,!0)},
hy:function(a,b){var t,s
t=this.aE()
s=b.$1(t)
this.cZ(t)
return s},
$iseu:1,
$aseu:function(){return[P.B]},
$isr:1,
$asr:function(){return[P.B]},
$isn:1,
$asn:function(){return[P.B]}}
P.kS.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.l2.prototype={
gH:function(a){return a.name}}
P.qZ.prototype={
$1:function(a){this.b.aC(0,new P.jT([],[],!1).b6(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.ma.prototype={
at:function(a,b){var t,s,r,q,p
try{t=a.get(b)
q=P.xi(t)
return q}catch(p){s=H.cl(p)
r=H.ck(p)
q=P.tb(s,r,null)
return q}},
gH:function(a){return a.name}}
P.nl.prototype={
bR:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fs(a,b,c)
q=P.xi(t)
return q}catch(p){s=H.cl(p)
r=H.ck(p)
q=P.tb(s,r,null)
return q}},
h:function(a,b){return this.bR(a,b,null)},
fs:function(a,b,c){return a.add(new P.qI([],[]).b6(b))},
gH:function(a){return a.name}}
P.hF.prototype={
gas:function(a){return a.error}}
P.p1.prototype={
gas:function(a){return a.error}}
P.qj.prototype={
by:function(a){if(a<=0||a>4294967296)throw H.k(P.wB("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
c0:function(){return Math.random()}}
P.qs.prototype={
aX:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.ap(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
by:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.k(P.wB("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aX()
return(this.a&t)>>>0}do{this.aX()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
c0:function(){this.aX()
var t=this.a
this.aX()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
f1:function(a){var t,s,r,q,p,o,n,m
t=J.e7(a,0)?-1:0
do{if(typeof a!=="number")return a.aK()
s=(a&4294967295)>>>0
a=C.d.ap(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.ap(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.ap(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.ap(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.ap(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.ap(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.ap(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aX()
this.aX()
this.aX()
this.aX()}}
P.qt.prototype={}
P.bS.prototype={$asbS:null}
P.kj.prototype={$isf:1,
gae:function(a){return a.href}}
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
gae:function(a){return a.href}}
P.lt.prototype={$isf:1}
P.lu.prototype={$isf:1}
P.lv.prototype={$isf:1}
P.lw.prototype={$isf:1}
P.lx.prototype={$isf:1}
P.ly.prototype={$isf:1}
P.lN.prototype={$isf:1,
gae:function(a){return a.href}}
P.cn.prototype={$isf:1}
P.m8.prototype={$isf:1,
gae:function(a){return a.href}}
P.d0.prototype={$isab:1}
P.mE.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
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
P.n0.prototype={$isf:1}
P.n1.prototype={$isf:1}
P.d4.prototype={$isab:1}
P.ni.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
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
P.ny.prototype={$isf:1,
gae:function(a){return a.href}}
P.nD.prototype={
gm:function(a){return a.length}}
P.nZ.prototype={$isf:1,
gae:function(a){return a.href}}
P.oC.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
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
aE:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a4(null,null,null,P.B)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bT)(r),++p){o=J.rG(r[p])
if(o.length!==0)s.h(0,o)}return s},
cZ:function(a){this.a.setAttribute("class",a.bg(0," "))}}
P.ca.prototype={
gdV:function(a){return new P.kq(a)},
e9:function(a,b,c,d,e){throw H.k(new P.U("Cannot invoke insertAdjacentHtml on SVG."))},
gee:function(a){return new W.eG(a,"click",!1,[W.u0])},
$isf:1}
P.oG.prototype={$isf:1}
P.oI.prototype={$isf:1}
P.ey.prototype={}
P.oR.prototype={$isf:1,
gae:function(a){return a.href}}
P.d7.prototype={$isab:1}
P.p2.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
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
P.pe.prototype={$isf:1,
gae:function(a){return a.href}}
P.pi.prototype={$isf:1}
P.pj.prototype={$isf:1}
P.hX.prototype={$isf:1,
gae:function(a){return a.href}}
P.qy.prototype={$isf:1}
P.qz.prototype={$isf:1}
P.qA.prototype={$isf:1}
P.bh.prototype={}
P.d8.prototype={$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.fJ.prototype={$isfJ:1,$isab:1,
gm:function(a){return a.length}}
P.eO.prototype={$iseO:1,$isab:1,
gbU:function(a){return a.buffer}}
P.fK.prototype={
fc:function(a,b,c,d){return a.decodeAudioData(b,H.dj(c,1),H.dj(d,1))},
h1:function(a,b){var t,s,r
t=P.fJ
s=new P.bj(0,$.am,null,[t])
r=new P.dT(s,[t])
this.fc(a,b,new P.kr(r),new P.ks(r))
return s}}
P.kr.prototype={
$1:function(a){this.a.aC(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.ks.prototype={
$1:function(a){var t=this.a
if(a==null)t.bq("")
else t.bq(a)},
$S:function(){return{func:1,args:[,]}}}
P.bC.prototype={}
P.dX.prototype={}
P.kP.prototype={
gbU:function(a){return a.buffer}}
P.kl.prototype={
gH:function(a){return a.name}}
P.nQ.prototype={$isf:1}
P.qQ.prototype={$isf:1}
P.jJ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return P.xz(a.item(b))},
i:function(a,b,c){throw H.k(new P.U("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.U("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
J:function(a,b){return P.xz(a.item(b))},
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
gY:function(a){return this.a.length===0},
gT:function(a){var t=this.a
return new J.i5(t,t.length,0,null,[H.P(t,0)])},
$ashj:function(){return[T.fG]},
$asn:function(){return[T.fG]},
gcJ:function(a){return this.a}}
T.fG.prototype={
gbe:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.f5(C.x)
r=T.f5(C.y)
q=T.wp(0,this.b)
new T.iB(s,q,0,0,0,t,r).dw()
r=q.c.buffer
q=q.a
r.toString
q=H.cM(r,0,q)
this.cy=q
t=q}else{t=s.bD()
this.cy=t}this.ch=0}}return t},
C:function(a){return this.a},
gH:function(a){return this.a}}
T.db.prototype={
C:function(a){return"ArchiveException: "+this.a}}
T.hf.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.an()
if(typeof r!=="number")return H.a7(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
if(typeof b!=="number")return H.a7(b)
s+=b
if(s<0||s>=t.length)return H.v(t,s)
return t[s]},
aW:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a7(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.an()
if(typeof s!=="number")return H.a7(s)
b=t-(a-s)}return T.tf(this.a,this.d,b,a)},
b1:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.W()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a7(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.v(q,s)
q[s]}return-1},
bf:function(a,b){return this.b1(a,b,0)},
cU:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.an()
if(typeof s!=="number")return H.a7(s)
r=this.aW(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.an()
if(typeof p!=="number")return H.a7(p)
if(typeof s!=="number")return s.W()
this.b=s+(t-(q-p))
return r},
c2:function(a){return P.oD(this.cU(a).bD(),0,null)},
a_:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
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
a0:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
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
aT:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
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
if(this.d===1)return(C.a.ar(p,56)|C.a.ar(o,48)|C.a.ar(n,40)|C.a.ar(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ar(i,56)|C.a.ar(j,48)|C.a.ar(k,40)|C.a.ar(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bD:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.an()
if(typeof r!=="number")return H.a7(r)
q=t-(s-r)
t=this.a
r=J.ar(t)
if(!!r.$isd8){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cM(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xk(r.c9(t,s,p>o?o:p)))},
eS:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbU:function(a){return this.a},
ghB:function(a){return this.b}}
T.nq.prototype={
i0:function(a,b){var t,s,r,q
if(b==null)b=J.bZ(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cl(s-q)
C.p.aA(r,t,s,a)
this.a+=b},
cY:function(a){return this.i0(a,null)},
i2:function(a){var t,s,r,q
t=J.bc(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
this.cl(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
C.p.a7(q,s,s+r,t.gbU(a),t.ghB(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.an()
if(typeof q!=="number")return H.a7(q)
this.a=t+(r-(s-q))},
aW:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cM(t,a,b-a)},
d6:function(a){return this.aW(a,null)},
cl:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.aZ(P.dA("Invalid length "+H.x(s)))
r=new Uint8Array(s)
q=this.c
C.p.aA(r,0,q.length,q)
this.c=r},
fg:function(){return this.cl(null)},
gm:function(a){return this.a}}
T.pw.prototype={
fE:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aW(this.a-20,20)
if(s.a0()!==117853008){a.b=t
return}s.a0()
r=s.aT()
s.a0()
a.b=r
if(a.a0()!==101075792){a.b=t
return}a.aT()
a.a_()
a.a_()
q=a.a0()
p=a.a0()
o=a.aT()
n=a.aT()
m=a.aT()
l=a.aT()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fh:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.an()
if(typeof r!=="number")return H.a7(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a0()===101010256){a.b=t
return q}}throw H.k(new T.db("Could not find End of Central Directory Record"))},
eW:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fh(a)
this.a=t
a.b=t
a.a0()
this.b=a.a_()
this.c=a.a_()
this.d=a.a_()
this.e=a.a_()
this.f=a.a0()
this.r=a.a0()
s=a.a_()
if(s>0)this.x=a.c2(s)
this.fE(a)
r=a.aW(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.W()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.av()
if(!(p<t+o))break
if(r.a0()!==33639248)break
p=new T.py(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a_()
p.b=r.a_()
p.c=r.a_()
p.d=r.a_()
p.e=r.a_()
p.f=r.a_()
p.r=r.a0()
p.x=r.a0()
p.y=r.a0()
n=r.a_()
m=r.a_()
l=r.a_()
p.z=r.a_()
p.Q=r.a_()
p.ch=r.a0()
o=r.a0()
p.cx=o
if(n>0)p.cy=r.c2(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.an()
j=r.aW(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.an()
if(typeof g!=="number")return H.a7(g)
if(typeof k!=="number")return k.W()
r.b=k+(i-(h-g))
p.db=j.bD()
f=j.a_()
e=j.a_()
if(f===1){if(e>=8)p.y=j.aT()
if(e>=16)p.x=j.aT()
if(e>=24){o=j.aT()
p.cx=o}if(e>=28)p.z=j.a0()}}if(l>0)p.dx=r.c2(l)
a.b=o
p.dy=T.FZ(a,p)
q.push(p)}}}
T.px.prototype={
gbe:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.f5(C.x)
q=T.f5(C.y)
t=T.wp(0,t)
new T.iB(s,t,0,0,0,r,q).dw()
q=t.c.buffer
t=t.a
q.toString
t=H.cM(q,0,t)
this.cy=t
this.d=0}else{t=s.bD()
this.cy=t}}return t},
C:function(a){return this.z},
eX:function(a,b){var t,s,r,q
t=a.a0()
this.a=t
if(t!==67324752)throw H.k(new T.db("Invalid Zip Signature"))
this.b=a.a_()
this.c=a.a_()
this.d=a.a_()
this.e=a.a_()
this.f=a.a_()
this.r=a.a0()
this.x=a.a0()
this.y=a.a0()
s=a.a_()
r=a.a_()
this.z=a.c2(s)
this.Q=a.cU(r).bD()
this.cx=a.cU(this.ch.x)
if((this.c&8)!==0){q=a.a0()
if(q===134695760)this.r=a.a0()
else this.r=q
this.x=a.a0()
this.y=a.a0()}}}
T.py.prototype={
C:function(a){return this.cy}}
T.pv.prototype={
h2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.FY(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.C],p=0;p<t.length;t.length===r||(0,H.bT)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.d2()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fG(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dU(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.tf(k,0,null,0)}else if(k instanceof T.hf){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hf(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.ha(m,"/")
j.y=n.r
s.push(j)}return new T.fF(s,null)}}
T.m5.prototype={
eR:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ar(1,this.b)
r=H.cy(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.v(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.v(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iB.prototype={
dw:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.W()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.av()
if(!(r<s+q))break
if(!this.fB())break}},
fB:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.W()
if(typeof s!=="number")return s.av()
if(s>=r+q)return!1
p=this.ax(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.ax(16)
s=this.ax(16)
if(n!==0&&n!==(s^65535)>>>0)H.aZ(new T.db("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.an()
r=q-r
if(n>s-r)H.aZ(new T.db("Input buffer is broken"))
m=t.aW(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.an()
if(typeof l!=="number")return H.a7(l)
if(typeof s!=="number")return s.W()
t.b=s+(r-(q-l))
this.b.i2(m)
break
case 1:this.dm(this.f,this.r)
break
case 2:this.fC()
break
default:throw H.k(new T.db("unknown BTYPE: "+o))}return(p&1)===0},
ax:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.W()
if(typeof r!=="number")return r.av()
if(r>=q+p)throw H.k(new T.db("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.v(q,r)
o=q[r]
this.c=(this.c|C.a.aw(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ar(1,a)
this.c=C.a.dO(t,a)
this.d=s-a
return(t&r-1)>>>0},
cs:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.W()
if(typeof p!=="number")return p.av()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.v(o,p)
m=o[p]
this.c=(this.c|C.a.aw(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ar(1,s)-1)>>>0
if(p>=t.length)return H.v(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dO(r,k)
this.d=q-k
return l&65535},
fC:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.ax(5)+257
s=this.ax(5)+1
r=this.ax(4)+4
q=H.cy(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.v(C.E,o)
n=C.E[o]
m=this.ax(3)
if(n>=q)return H.v(p,n)
p[n]=m}l=T.f5(p)
k=new Uint8Array(H.cy(t))
j=new Uint8Array(H.cy(s))
i=this.dl(t,l,k)
h=this.dl(s,l,j)
this.dm(T.f5(i),T.f5(h))},
dm:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cs(a)
if(s>285)throw H.k(new T.db("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fg()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.v(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.v(C.C,p)
o=C.C[p]+this.ax(C.V[p])
n=this.cs(b)
if(n<=29){if(n>=30)return H.v(C.z,n)
m=C.z[n]+this.ax(C.U[n])
for(r=-m;o>m;){t.cY(t.d6(r))
o-=m}if(o===m)t.cY(t.d6(r))
else t.cY(t.aW(r,o-m))}else throw H.k(new T.db("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.an();--r
t.b=r
if(r<0)t.b=0}},
dl:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cs(b)
switch(q){case 16:p=3+this.ax(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=s}break
case 17:p=3+this.ax(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=0}s=0
break
case 18:p=11+this.ax(7)
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
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Math Book",H.a([$.K,$.Y,$.aw],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.K,$.Y],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.D,$.Y,$.aU],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.K,$.Y],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.K,$.Y],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c1,$.av],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.Y],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.h7,$.m)
q.i(0,$.bd,$.m)
q.i(0,$.f0,$.j)
q.i(0,$.aN,$.L)
q.i(0,$.cB,$.j)
p=$.o
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.t
o=o+n+" to stop "
m=$.J
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.ET
n=[U.c]
q.i(0,new R.Z("Recover the Books",!1,[new U.c(o),new U.c(l),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.o
q.i(0,new R.Z("Shelve the Books",!1,[new U.c("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.t+" to stop "+$.J+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.wA(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.o
p="The "+m+" finds a massive library, filled with books. The "
l=$.t
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.z
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.Z("Research the Denizen",!1,[new U.c(p),new U.c(l),new U.c(k)],H.a([],n),R.fj(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eX,$.L)
s.i(0,$.cB,$.m)
p=$.o
o="The "+p+"  is approached by a "
l=$.t
s.i(0,new R.Z("Do the Math",!1,[new U.c(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+l+"  finds a "+l+" child "+$.J+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.t
s.i(0,new R.Z("Use the Calculator",!1,[new U.c(l),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.J+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.eq(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.o
s.i(0,new R.Z("Solve the Equation",!1,[new U.c("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.t+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fj(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.eX,$.L)
t.i(0,$.cB,$.m)
t.i(0,$.c_,$.L)
t.i(0,$.t2,$.L)
r=$.o
q="The "+r+"  is approached by a "
p=$.t
q=q+p+" who offers them a grant to study "
o=$.ac
t.i(0,new R.Z("Test the Hypothesis",!1,[new U.c(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.J+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fj(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
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
p=$.EZ
t.i(0,new R.Z("Make the Cure",!1,[new U.c(r),new U.c(l),new U.c(q)],H.a([],n),R.e2(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.o
t.i(0,new R.Z("Be the Scientist",!1,[new U.c("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.J+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.t+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aC)}}
K.bU.prototype={}
L.fH.prototype={
E:function(){var t,s
t=Q.I(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.j)
q.i(0,$.bd,$.L)
q.i(0,$.dK,$.j)
q.i(0,$.c_,$.m)
q.i(0,$.dY,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.z
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.Q("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.X(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eZ,$.j)
s.i(0,$.ef,$.L)
s.i(0,$.eY,$.m)
s.i(0,$.cQ,$.j)
s.i(0,$.cc,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.z
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! "
s.i(0,new R.Q("Produce the Goods",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(n),new U.X(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.bd,$.L)
t.i(0,$.c5,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.J
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.z
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.cg+". The "+r+" has won! "
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.uf(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
r="The "+l+" learns that all of the local "
m=$.t
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.z
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.cg+". The "+l+" has won! "
t.i(0,new R.Q("Relax the Consorts",!1,[new U.c(r),new U.c(p),new U.c(m),new U.X(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(s,t,null),$.aq)},
C:function(a){return this.Q},
ak:function(a,b,c,d,e){var t=this.Q
this.r=new X.im("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.i6]),H.a([],[M.h4]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.E()
this.F()
t=this.e
if($.$get$kn().V(0,t))H.aZ("Duplicate aspect id for "+this.C(0)+": "+t+" is already registered for "+J.cI($.$get$kn().n(0,t))+".")
$.$get$kn().i(0,t,this)},
gH:function(a){return this.Q}}
L.aS.prototype={}
M.kp.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Barbells",H.a([$.ae,$.c7,$.D],s),null,!1,"Strength Building Metal")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.ei,$.c8],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.ji,$.W],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.ei,$.c8],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aV,$.a6],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.ji,$.W,$.dt],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.D,$.bg],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.vO,$.c8],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.c8,$.aW],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dZ,$.L)
q.i(0,$.cb,$.m)
q.i(0,$.cQ,$.L)
p=$.o
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.t
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.J+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.Z("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.o
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.t
q.i(0,new R.Z("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.J+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e2(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.o
n="The "+m+"  wanders into a bunch of "
p=$.t
q.i(0,new R.Z("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hD(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dZ,$.m)
t.i(0,$.f1,$.m)
t.i(0,$.cb,$.m)
s=$.o
r="The "+s+" finds a team of underdog "
p=$.t
t.i(0,new R.Z("Save the Sports",!1,[new U.c(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.wA(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.t
s="A group of "+p+"s approach the "
r=$.o
s=s+r+". Apparently their sports team lost their coach to the "+$.z+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.J
t.i(0,new R.Z("Coach the Sports",!1,[new U.c(s),new U.c(o),new U.c(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e2(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
k=$.t
p="A group of "+k+"s approach the "
r=$.o
t.i(0,new R.Z("Win at Sports",!1,[new U.c(p+r+". Apparently their sports team lost a member to the "+$.z+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.ac+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,t,null),$.aC)}}
U.kt.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q,p,o
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$v4()
p=q.createBufferSource()
o=p
t=3
return P.cs(J.xT(q,b),$async$R)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[P.eO]},
$asc6:function(){return[P.eO,P.bh]}}
U.mV.prototype={
aS:function(a){return"audio/mpeg"}}
U.nn.prototype={
aS:function(a){return"audio/ogg"}}
U.oz.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=W.yx(b)
p=new W.eG(q,"canplaythrough",!1,[W.R])
t=3
return P.cs(p.gad(p),$async$R)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asik:function(){return[W.eP]},
$asc6:function(){return[W.eP,P.B]}}
U.oA.prototype={}
U.oB.prototype={}
O.kv.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Cod Piece",H.a([$.O,$.a_,$.aO,$.N,$.W],s),"God damn it, MI. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.ti,$.N,$.bK],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aD,$.W,$.bk,$.N,$.a9],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.O,$.aD,$.N,$.bf],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cz,$.j)
t.i(0,$.ha,$.j)
t.i(0,$.cw,$.j)
t.i(0,$.ds,$.j)
t.i(0,$.cA,$.j)
t.i(0,$.eW,$.j)
r="After all the bullshit the "+$.z+" has put the native "
q=$.t
r=r+q+"s through, the "
p=$.o
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aH+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.J
m=[U.c]
t.i(0,new R.a5("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.t
n="A group of jubilant "+p+"s are following the "
q=$.o
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.J
t.i(0,new R.a5("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.z+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
q=$.o
t.i(0,new R.a5("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.z+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.y(),!1,!1,new Y.kJ("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.o
q=q+r+" organizes a huge festival for all the "
p=$.t
t.i(0,new R.bA("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.oQ.prototype={
R:function(a,b){var t=0,s=P.bp(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asex:function(){return[P.B]},
$asc6:function(){return[P.B,P.B]}}
Y.nN.prototype={
aS:function(a){return"application/octet-stream"},
R:function(a,b){var t=0,s=P.bp(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[P.bh]},
$asc6:function(){return[P.bh,P.bh]}}
V.rc.prototype={
$1:function(a){var t,s,r,q
t=document
s=H.eK(t.querySelector("#myHeadCanon"),"$ishM")
r=H.eK(t.querySelector("#canon"),"$isfV")
q=t.createElement("div")
q.textContent=s.value
r.appendChild(q)},
$S:function(){return{func:1,args:[,]}}}
V.rd.prototype={
$1:function(a){var t,s
t=document
s=t.querySelector("#canon")
t=t.createElement("div")
t.textContent="AB: "+this.a.hE("JRheadcanon")
s.appendChild(t)
t=s.style
t.color="#ff0000"
t=s.style
t.backgroundColor="#888888"},
$S:function(){return{func:1,args:[W.R]}}}
T.kA.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Mystical Vial of Blood",H.a([$.aU,$.bk,$.S,$.aJ],s),null,!1,"Vial of Not-ABs Oil")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.an,$.bk,$.S,$.aT],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.O,$.bk,$.S,$.aJ,$.hh],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.bf,$.S,$.aJ,$.hh,$.aG],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.W,$.tq,$.bk,$.aJ,$.S,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dd,$.j)
q.i(0,$.t5,$.j)
q.i(0,$.c_,$.m)
p=$.o
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.t
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ac+" and some boondollars in compensation."
n=this.x2
k=[U.c]
q.i(0,new R.Z("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.e2(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.t
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.J+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.z
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.o
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cg+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.Q("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.X(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cQ,$.j)
s.i(0,$.cA,$.L)
s.i(0,$.aN,$.L)
s.i(0,$.iv,$.j)
s.i(0,$.cw,$.L)
p=$.o
o="The "+p+"  and the "
m=$.es
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.z
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.Q("Learn the Power of Teamwork",!1,[new U.c(o),new U.c(l),new U.X(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.er(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
h=$.o
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.t
i=i+m+"s explains that before  "
p=$.z
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.cg+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.EQ
s.i(0,new R.Q("Chain the Towers",!1,[new U.c(i),new U.c(m),new U.c(j),new U.X(l,h,o)],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
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
p="The "+j+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.Q("Protect the Beams",!1,[new U.c(l),new U.c(o),new U.c(m),new U.X(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.t
h=h+i+" on "+$.aH+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.f3+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a5("One Degree of Separation",!1,[new U.c(h),new U.c(m),new U.c(i)],H.a([],k),R.fj(),!1,!1,new Y.c0("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.o
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.t+" on "
m=$.aH
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.f3+" is now more popular with your friends than you are."
s.i(0,new R.a5("Steal The Friends",!1,[new U.c(i),new U.c(h),new U.c(m)],H.a([],k),R.ug(),!1,!1,new Y.c0("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.o
m="The "+p+"  and the "
h=$.es
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.z
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.Q("Pale Shipping Dungeon",!1,[new U.c(m),new U.X(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.q)+".",o)],H.a([],k),R.er(),!1,!1,new Y.jz(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ah)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.bd,$.L)
t.i(0,$.c5,$.m)
r="In the wake of the defeat of the "+$.z+" it becomes really how isolated the individual "
q=$.t
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.o
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.f3+" to kick your ass, but luckily they have several."
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
p="The "+l+" lies slain by the "+o+"'s "+$.cg+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.J+"ing. "
t.i(0,new R.Q("Stop the Feud",!1,[new U.c(q),new U.c(r),new U.c(m),new U.X(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.aq)}}
T.kD.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Pan's Pipe",H.a([$.a9,$.W,$.bk,$.S],s),null,!1,"Smonkin Weeds Pipe")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.aY,$.S],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a6,$.D,$.bk,$.S],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.ao,$.D,$.aV,$.S,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.c5,$.m)
q.i(0,$.f1,$.j)
q.i(0,$.aN,$.m)
p=$.o
o="The "+p+" tries posting a letter through the "
n=$.ac
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.z
o=o+m+" has screwed with the mail system, crippling the "
l=$.t
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.EU
i=[U.c]
q.i(0,new R.Q("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.X(j,p,l)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.bd,$.j)
s.i(0,$.f1,$.m)
s.i(0,$.aN,$.m)
s.i(0,$.cb,$.m)
s.i(0,$.c5,$.m)
p=$.o
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ac
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.t
k=l+k+" fields. The "+k+"s "+$.J+"ing is so joyful it's literally deafening. "
l=$.z
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.Q("Thinking With Wind Power",!1,[new U.c(o),new U.c(n),new U.c(k),new U.X(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cc,$.j)
t.i(0,$.lG,$.j)
t.i(0,$.f1,$.L)
t.i(0,$.c5,$.L)
r=$.o
q="The "+r+" is chilling in a "+$.t+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.z
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ac
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aH+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.cg+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.Q("The Winds of Change",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aq)}}
M.fO.prototype={
ew:function(a){var t=this.a
if(!t.V(0,a))return
return t.n(0,a)}}
Y.kF.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=J.dW(b,"\n")
p=P.B
o=P.bX(p,p)
n=P.bX(p,[P.eu,P.B])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.da(k).bj(k).length===0)m=null
else if(m==null)m=C.c.bj(k)
else{j=C.c.bj(k)
i=C.c.K(m,0,C.c.ea(m,$.$get$v9())+1)+j
o.i(0,i,m)
if(!n.V(0,m))n.i(0,m,P.a4(null,null,null,p))
J.xN(n.n(0,m),i)}}r=new M.fO(o,n)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asex:function(){return[M.fO]},
$asc6:function(){return[M.fO,P.B]}}
A.kL.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.K,$.ae,$.aT,$.c7],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.K,$.aT],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.aU,$.aT],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aV,$.a6,$.aT],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.an,$.aT],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.O,$.aT],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.D,$.aT],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.m)
q.i(0,$.cv,$.j)
q.i(0,$.cb,$.m)
p=$.o
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.t
o=o+n+"s are too scared to even "+$.J+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.z+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.Z("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dZ,$.L)
s.i(0,$.cb,$.j)
s.i(0,$.cv,$.j)
s.i(0,$.cz,$.j)
o=$.o
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aH
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.t
k=k+j+"s let out a braying "+$.J+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.EX
s.i(0,new R.Z("Win the Laughs",!1,[new U.c(n),new U.c(k),new U.c(o)],H.a([],l),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cC,$.L)
t.i(0,$.c4,$.m)
t.i(0,$.cv,$.j)
t.i(0,$.cb,$.m)
t.i(0,$.ip,$.m)
r=$.o
q="The "+r+"  is approached by a Crafty "
o=$.t
q=q+o+" who offers them a magical "
n=$.ac
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.J
t.i(0,new R.Z("Trick the Villain",!1,[new U.c(q),new U.c(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.c("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aC)}}
S.bG.prototype={
C:function(a){return H.x(new H.dR(H.ke(this),null))+": "+this.c},
gH:function(a){return this.c}}
S.i7.prototype={}
S.m2.prototype={}
M.kY.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Can of Spray Paint",H.a([$.ax,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.K,$.ai,$.aT,$.aw],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.ty,$.D,$.au],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.K,$.ai,$.aw],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.ax,$.al,$.K],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ai,$.K],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ai,$.aA,$.al],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.ax,$.ai],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.ao,$.ai,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.O,$.ai],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.K,$.ai,$.aw],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dJ,$.m)
q.i(0,$.cB,$.j)
q.i(0,$.aN,$.m)
p=$.o
o="The "+p+" visits a beautiful "
n=$.ac
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.t
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.z+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.J+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.Z("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dZ,$.L)
s.i(0,$.cb,$.m)
s.i(0,$.cv,$.L)
s.i(0,$.bd,$.m)
s.i(0,$.cz,$.j)
o=$.o
n="The "+o+" finds a troupe of dejected looking "
l=$.t
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aH
l=l+n+" "
k=$.ac
s.i(0,new R.Z("Perform the Play",!1,[new U.c(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.c("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.J+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ha,$.L)
t.i(0,$.cw,$.L)
t.i(0,$.eW,$.L)
t.i(0,$.c4,$.L)
t.i(0,$.bd,$.m)
t.i(0,$.aN,$.m)
r=$.o
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.J
q=q+o+"ingworth, "
n=$.t
q=q+n+" heiress to the "+$.ac+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.EN
t.i(0,new R.Z("Attend the Dinner Party",!1,[new U.c(q),new U.c(l),new U.c(n)],H.a([],p),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aC)}}
T.l3.prototype={}
V.l5.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Trendy Fabric",H.a([$.ax,$.O],s),null,!1,"Weird Tasting Candy Paper")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.ax,$.tn,$.hh],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.D,$.tu,$.aL],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jg
r=A.i("Broom",H.a([r,$.W,$.ae,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.W,$.tB,$.ae],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.O,$.aW,$.bk,$.ax,$.ej],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.ax,$.O],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aG,$.c7,$.D,$.bm],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.ax,$.K],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bm],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.D,$.ao,$.ae,$.c7,$.tm],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bK],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bK],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.ax,$.bO,$.aQ],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.an,$.bi,$.aY],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.an,$.bi],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.ax,$.an,$.aJ],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.m)
q.i(0,$.cA,$.m)
q.i(0,$.cw,$.L)
p=$.o
o="The "+p+" is visited by a Beautiful "
n=$.t
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ac
l=[U.c]
q.i(0,new R.Z("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.J+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.y(),!1,!1,new Y.i9("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cw,$.j)
s.i(0,$.cb,$.m)
s.i(0,$.eW,$.j)
s.i(0,$.ds,$.m)
s.i(0,$.bd,$.j)
p=$.o
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ac
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.t
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.J+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.EV
s.i(0,new R.Z("Bake the Cake",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ec,$.j)
t.i(0,$.bd,$.m)
t.i(0,$.dq,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.iv,$.j)
r=$.o
q="The "+r+" finds a loom, and a Wizened "
p=$.t
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ac
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.J+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.Z("Weave the Cloth",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.aC)}}
U.l6.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aw,$.a6,$.K,$.aD,$.S,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aA,$.bk,$.S,$.aD],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.aY,$.bk,$.S,$.aD],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.aU,$.S,$.bK],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.aU,$.S,$.bm,$.aD,$.bf,$.bQ,$.aX],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aG,$.aX,$.aD,$.K,$.S],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dK,$.j)
q.i(0,$.cZ,$.m)
q.i(0,$.f1,$.L)
q.i(0,$.bd,$.L)
q.i(0,$.c_,$.m)
p=$.o
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.t
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ac
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.z
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.Q("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dK,$.j)
s.i(0,$.cZ,$.m)
s.i(0,$.eh,$.ah)
s.i(0,$.ee,$.m)
s.i(0,$.t2,$.m)
s.i(0,$.dd,$.m)
s.i(0,$.cZ,$.m)
s.i(0,$.bd,$.L)
s.i(0,$.c_,$.m)
s.i(0,$.dr,$.m)
p=$.o
o="The "+p+" has found a group of Violent "
m=$.t
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aH
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.J+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.z
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.cg+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.Q("Become the Warlord",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.eq(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.o
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ac
p=p+l+"s alike. "
l=$.t+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.z
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.cg+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.Q("Make This Stupid Planet Habitable",!1,[new U.c(p),new U.c(l),new U.c(g),new U.X(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.c_,$.j)
t.i(0,$.vt,$.ah)
t.i(0,$.h7,$.L)
r=$.o
q="The "+r+" finds a small dungeon bearing the image of "
p=$.z
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.t+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.c(q),new U.c(o),new U.c(m),new U.X(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.eq(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
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
l=$.z
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.cg+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.EM
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.c(p),new U.c(m),new U.c(r),new U.X(o,k,q)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.aq)}}
Z.l7.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Dream Diary",H.a([$.K,$.aw,$.S],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bk,$.ae,$.S,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bk,$.S],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ec,$.m)
q.i(0,$.dq,$.j)
q.i(0,$.aN,$.m)
q.i(0,$.iv,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ac
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wn
k=[U.c]
q.i(0,new R.Q("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.m)
s.i(0,$.dq,$.j)
s.i(0,$.d_,$.m)
s.i(0,$.cu,$.m)
s.i(0,$.ed,$.m)
s.i(0,$.cv,$.j)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.Q("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dJ,$.j)
t.i(0,$.ir,$.m)
t.i(0,$.aN,$.m)
t.i(0,$.cu,$.j)
t.i(0,$.ed,$.j)
t.i(0,$.dq,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.Q("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aH+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.J+"ing in reverse. Another is in a "+$.ac+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.F(s,t,null),$.aq)}}
X.im.prototype={}
X.i6.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.h4]]}}}
M.h4.prototype={}
U.lz.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Fluthulu Poster",H.a([$.O,$.aW,$.aX,$.bn],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.O,$.aW,$.aX],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aG,$.aA,$.aY,$.f8,$.aO],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aA,$.vV,$.f9,$.aO],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aA,$.bQ,$.bi,$.aX],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aw,$.K,$.aB,$.aX],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.K,$.a2,$.ae],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.K,$.a2,$.ae],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.K,$.a2,$.bQ,$.aX,$.bn],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aG,$.av,$.a2,$.ae,$.aO],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aG,$.tj,$.a2,$.ae,$.aO],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.h5,$.ah)
q.i(0,$.cA,$.m)
q.i(0,$.c5,$.m)
q.i(0,$.cC,$.L)
p=$.o
o="The "+p+" learns of a Beautiful "
n=$.t
o=o+n+" who has been kidnapped by the vial "
m=$.z
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ac
j=[U.c]
q.i(0,new R.Z("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.j)
s.i(0,$.dd,$.j)
s.i(0,$.is,$.m)
s.i(0,$.c_,$.j)
s.i(0,$.eh,$.j)
s.i(0,$.h9,$.m)
o=$.o
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.t
s.i(0,new R.Z("Do not Drink...Wine.",!1,[new U.c(n+m+" leave, and no one can remember the last time he received guests."),new U.c("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c4,$.j)
t.i(0,$.iu,$.m)
t.i(0,$.c_,$.j)
t.i(0,$.dH,$.m)
t.i(0,$.eX,$.m)
t.i(0,$.t5,$.m)
r=$.o
q="The "+r+" finds a group of three "
o=$.t
q=q+o+"s "
n=$.J
t.i(0,new R.Z("Expose the Conspiracy",!1,[new U.c(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aC)}}
N.a8.prototype={
C:function(a){return H.x(new H.dR(H.ke(this),null))+": "+H.x(this.b)}}
O.c6.prototype={
b3:function(a){var t=0,s=P.bp(),r,q=this,p
var $async$b3=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cs(q.aU(a),$async$b3)
case 3:r=p.R(0,c)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b3,s)}}
O.dm.prototype={
bb:function(a){var t=0,s=P.bp(),r
var $async$bb=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bb,s)},
cH:function(a){var t=0,s=P.bp(),r,q=this
var $async$cH=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.yy([J.uW(a)],q.aS(0),null))
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$cH,s)},
aU:function(a){var t=0,s=P.bp(),r,q=this,p,o
var $async$aU=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=P.bh
o=new P.bj(0,$.am,null,[p])
W.vA(a,null,q.aS(0),null,null,"arraybuffer",null,null).b4(new O.kz(new P.dT(o,[p])))
r=o
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aU,s)},
$asc6:function(a){return[a,P.bh]}}
O.kz.prototype={
$1:function(a){this.a.aC(0,H.eK(J.y_(a),"$isbh"))},
$S:function(){return{func:1,args:[W.e_]}}}
O.ex.prototype={
bb:function(a){var t=0,s=P.bp(),r,q,p,o,n
var $async$bb=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:a.toString
q=H.cM(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hC(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bb,s)},
aU:function(a){var t=0,s=P.bp(),r
var $async$aU=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=W.vz(a,null,null)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aU,s)},
$asc6:function(a){return[a,P.B]}}
O.ik.prototype={
aU:function(a){var t=0,s=P.bp(),r
var $async$aU=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aU,s)},
bb:function(a){return H.aZ("Element format doesn't read from buffers")},
$asc6:function(a){return[a,P.B]}}
V.lR.prototype={
aS:function(a){return"font/opentype"},
R:function(a,b){var t=0,s=P.bp(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cs(A.hp("scripts/Rendering/text/opentype.min.js",!1),$async$R)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[R.hb]},
$asc6:function(){return[R.hb,P.bh]}}
Z.il.prototype={}
E.iz.prototype={}
E.nm.prototype={}
E.M.prototype={
C:function(a){var t="["+J.cI(this.a)+" x "+H.x(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fI.prototype={
C:function(a){var t="[(Random from "+P.tF(this.d,"(",")")+") x "+H.x(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.ko.prototype={
C:function(a){return"[Stats assigned from player Interests x"+H.x(this.b)+"]"}}
Y.lX.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aw,$.N,$.K,$.a_,$.jj],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aA,$.N,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.O,$.N,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.mo,$.N,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.lI,$.m)
t.i(0,$.c5,$.j)
t.i(0,$.dr,$.L)
t.i(0,$.de,$.j)
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
j=$.z
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.Q("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.X(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o=$.o
t.i(0,new R.a5("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.z+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.t+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.t
j="Now that the "+o+"s are free from the reign of "+$.z+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.o
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.J
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aH+" Quest Online: The "+$.ac+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a5("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.o
p=p+o+" shows the "
r=$.t
t.i(0,new R.bA("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.J+"s in time to stop them.    ")],H.a([],i),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.lY.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Sherpa Parka",H.a([$.bm,$.N,$.ce],s),"Clearly the best class uses this.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a_,$.bm,$.aw,$.K,$.N,$.Y],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.D,$.N,$.aV],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.D,$.N,$.a6,$.Y],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.lI,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.dr,$.m)
t.i(0,$.de,$.j)
r="Now that the "+$.z+" is out of the way, a group of "
q=$.t
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.o
o=[U.c]
t.i(0,new R.a5("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.J+", but they are happy.")],H.a([],o),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.o
t.i(0,new R.bA("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.t+" "+$.J+"s in time to stop them.    ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.lZ.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Doll",H.a([$.mo,$.ax,$.ap,$.S],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.W,$.ap,$.S,$.a_,$.aX],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.tt,$.S],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.K,$.S,$.aB],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.al,$.aU,$.S],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ee,$.L)
q.i(0,$.eg,$.j)
q.i(0,$.cb,$.m)
p=$.o
o="The "+p+", guided by a "+$.t+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.z
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.Q("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.X(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=$.o
p="The "+j+" finds a Violent "
l=$.t
p=p+l+". A Magical Talking "
k=$.ac
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.z
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.Q("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.X(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.ug(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cv,$.j)
s.i(0,$.is,$.j)
s.i(0,$.f1,$.m)
s.i(0,$.c_,$.j)
s.i(0,$.cw,$.m)
s.i(0,$.dr,$.L)
p=$.o
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ac
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.z
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is victorious. "
s.i(0,new R.Q("Confront yourself.",!1,[new U.c(o),new U.c(m),new U.c(n),new U.X(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j="Now that the "+$.z+" has been defeated, a Copy "
p=$.o
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.t
j=j+k+"s "
l=$.J
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.f3+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a5("Prove Your Identity",!1,[new U.c(j),new U.c(l),new U.c(k)],H.a([],i),R.e2(),!1,!1,new Y.c0("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.o
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.z
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.Q("Shatter The Mirrors",!1,[new U.c(k),new U.c(l),new U.c(j),new U.X(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.eq(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iq,$.j)
t.i(0,$.cw,$.j)
t.i(0,$.lH,$.j)
t.i(0,$.eW,$.m)
t.i(0,$.h9,$.j)
t.i(0,$.cA,$.m)
t.i(0,$.eg,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.t
t.i(0,new R.Q("Ship All the Ships",!1,[new U.c(q+p+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aH+" laws put in place by "+$.z+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.o
p="The "+r+" finds a weeping Broken Hearted "
q=$.t
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aH
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.J
t.i(0,new R.a5("Heal The Broken Heart",!1,[new U.c(p),new U.c(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.c("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hD(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
q=$.o
m="The "+q+"  and the "
r=$.es
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.z
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.Q("Flushed Shipping Dungeon",!1,[new U.c(m),new U.X(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.q)+".",n)],H.a([],i),R.er(),!1,!1,new Y.ix(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ah)
n=$.o
r="The "+n+"  and the "
q=$.es
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.z
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.Q("Pitched Shipping Dungeon",!1,[new U.c(r),new U.X(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.q)+".",m)],H.a([],i),R.er(),!1,!1,new Y.jB(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ah)
h.i(0,new X.F(s,t,null),$.aC)}}
B.m_.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Family Ashes",H.a([$.aG,$.ao,$.N,$.aD,$.bV],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a_,$.K,$.N,$.aD,$.mk],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aw,$.N,$.ai],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.vK,$.N,$.mg,$.mk],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.tg,$.N,$.au,$.mk],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cc,$.m)
r=$.z
q="With the death of the "+r+", it now falls to the "
p=$.o
o=[U.c]
t.i(0,new R.a5("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.t+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
r="The "+$.z+" has released the frogs into the "
p=$.o
t.i(0,new R.bA("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
X.m1.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Wand",H.a([$.W,$.S,$.a2,$.be],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.be,$.bz,$.S,$.aP,$.a9,$.a_,$.a2],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bP,$.tq,$.S,$.a2,$.aT,$.be],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.be,$.aP,$.S,$.ao],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aA,$.aP,$.S,$.be],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.t1,$.j)
q.i(0,$.cA,$.m)
q.i(0,$.aN,$.j)
q.i(0,$.cu,$.j)
p=$.o
o="The "+p+" is just minding their own business when they see a wizened "
n=$.t
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.J+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.z
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ac
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.EP
i=[U.c]
q.i(0,new R.Q("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(k,p,j)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
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
l=$.ac
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.z
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.Q("Believe the Lies",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.ds,$.L)
t.i(0,$.cB,$.j)
t.i(0,$.cu,$.j)
r=$.o
q="The "+r+" finds a grey town of despondant "
p=$.t
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.z
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ac
t.i(0,new R.Q("Be the Change You Believe In",!1,[new U.c(q),new U.c(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.X("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.o
o="The "+r+" discovers a group of "
p=$.t
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.z
t.i(0,new R.Q("The Ultimate Hope",!1,[new U.c(o),new U.c(l),new U.c(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.X("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hD(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.F(s,t,null),$.aq)}}
X.m6.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Footstick",H.a([$.dt,$.N,$.mn,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Cheating Guide",H.a([$.aw,$.N,$.jj,$.K],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of Shogun",H.a([$.O,$.N,$.ej,$.tr,$.aW],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Macrobots",H.a([$.tA,$.N,$.mg],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cC,$.j)
t.i(0,$.d_,$.j)
t.i(0,$.dq,$.j)
t.i(0,$.de,$.j)
t.i(0,$.ec,$.j)
t.i(0,$.ed,$.j)
t.i(0,$.h8,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.Z("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uh(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cg+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wy(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.o
t.i(0,new R.Z("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.o
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wz(),!1,!1,new Y.c0("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a5("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bA("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.aq)}}
Q.m9.prototype={
b3:function(a){var t=0,s=P.bp(),r,q,p
var $async$b3=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:q=W.vB(null,a,null)
p=new W.eG(q,"load",!1,[W.R])
t=3
return P.cs(p.gad(p),$async$b3)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b3,s)},
$asdm:function(){return[W.f6]},
$asc6:function(){return[W.f6,P.bh]}}
Q.nC.prototype={
aS:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bp(),r,q=this,p,o,n
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cs(q.cH(b),$async$R)
case 3:p=n.vB(null,d,null)
o=new W.eG(p,"load",!1,[W.R])
t=4
return P.cs(o.gad(o),$async$R)
case 4:r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)}}
Q.nz.prototype={
aS:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bp()
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:throw H.k("Read NYI")
return P.bs(null,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[Q.jA]},
$asc6:function(){return[Q.jA,P.bh]}}
B.hg.prototype={
E:function(){var t,s
t=Q.I(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.j)
q.i(0,$.bd,$.L)
q.i(0,$.dK,$.j)
q.i(0,$.c_,$.m)
q.i(0,$.dY,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.Z("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eZ,$.j)
s.i(0,$.ef,$.L)
s.i(0,$.eY,$.m)
s.i(0,$.cQ,$.j)
s.i(0,$.cc,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.Z("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.bd,$.L)
t.i(0,$.c5,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
t.i(0,new R.Z("Relax the Consorts",!1,[new U.c(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
r="The "+p+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.J
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uf(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
n.i(0,new X.F(s,t,null),$.aC)},
C:function(a){return this.ch},
gH:function(a){return this.ch}}
A.a1.prototype={
aB:function(a,b){var t=b.gbz()-this.gbz()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bA(t)},
gh5:function(){var t,s,r,q,p,o
t=H.a([],[P.B])
s=new A.hE(null,null)
s.c8(this.f.a)
if(this.r===0)return t
r=P.d1(G.yF(this.f),!0,G.a0)
C.b.d4(r,new A.ms())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bT)(r),++p){o=r[p]
if(!(o instanceof G.af||o.gdY().length===0))t.push(" "+Y.GK(s.ei(o.gdY())))}return t},
gbz:function(){var t,s,r
for(t=this.f,s=new P.dv(t,t.r,null,null,[null]),s.c=t.e,r=0;s.G();)r+=s.d.gbz()
return r},
gfW:function(){var t=this.f
return new H.hS(t,new A.mr(),[H.P(t,0)])},
ghf:function(){var t,s,r,q,p
for(t=this.gh5(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bT)(t),++q)r+=t[q]+" "
return r+this.d},
C:function(a){return this.ghf()},
L:function(a,b,c,d,e){var t,s,r
t=P.tR(b,null)
this.f=t
if(t.a===0)t.h(0,$.vQ)
s=P.tR(this.gfW(),null)
for(t=new P.dv(s,s.r,null,null,[null]),t.c=s.e;t.G();){r=t.d
this.f.bo(0,r.geK())
this.f.af(0,r)}$.$get$we().push(this)},
$isbF:1,
$asbF:function(){return[A.a1]}}
A.ms.prototype={
$2:function(a,b){return a.gef()-C.a.bA(b.gef())},
$S:function(){return{func:1,args:[G.a0,G.a0]}}}
A.mr.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a0]}}}
Z.mz.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Juice Box",H.a([$.K,$.S,$.be,$.aO],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shogun Body Pillow",H.a([$.ej,$.aW,$.S],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.ed,$.ah)
t.i(0,$.cA,$.m)
t.i(0,$.cb,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.cu,$.j)
r=$.o
q="The "+r+" sees a floating sentient "
p=$.ac
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.t+" notices it, and starts "+$.J+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.z
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.c]
t.i(0,new R.Q("Talk to your Juice entity",!1,[new U.c(q),new U.c(o),new U.c(n),new U.X(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
r="The "+p+" is greeted by a young adolescent "
m=$.t
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.z
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.J
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.Q("Be The Wingman",!1,[new U.c(r),new U.c(l),new U.c(n),new U.X(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=$.o
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.t
m=m+q+" informs them that "
p=$.z
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.Q("Pilot The Mech",!1,[new U.c(m),new U.c(o),new U.c(n),new U.X(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.F(s,t,null),$.aq)}}
N.mA.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Gavel",H.a([$.W,$.tp],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aA,$.bf],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.O,$.ax],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.K,$.aw],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bO,$.an,$.bm],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.K,$.aw,$.al],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aG,$.D,$.bf],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.h5,$.L)
q.i(0,$.c4,$.m)
q.i(0,$.cB,$.L)
p=$.o
o="The "+p+" finds an elaborate courtroom full of "+$.J+"ing "
n=$.t
m=[U.c]
q.i(0,new R.Z("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ac+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.j)
s.i(0,$.dr,$.m)
s.i(0,$.cQ,$.m)
p=$.o
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.t
l=o+l+" yells 'Stop that thief' in betwen "+$.J+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ac+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.EL
s.i(0,new R.Z("Enforce the Law",!1,[new U.c(l),new U.c(o),new U.c(p)],H.a([],m),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c4,$.j)
t.i(0,$.cc,$.m)
t.i(0,$.dd,$.L)
t.i(0,$.eh,$.m)
t.i(0,$.ee,$.m)
t.i(0,$.f_,$.m)
t.i(0,$.it,$.m)
r=$.o
q="The "+r+" finds a crowd of "
p=$.J
q=q+p+"ing "
o=$.t
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.EY
t.i(0,new R.Z("Start a Revolution",!1,[new U.c(q),new U.c(r),new U.c(p)],H.a([],m),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.aC)}}
S.mC.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Shining Armor",H.a([$.aG,$.mm,$.N,$.f8],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a_,$.mm,$.N,$.aL,$.au,$.f9],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.D,$.N,$.bi,$.ap],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aG,$.f8,$.N,$.mm],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.lF,$.j)
t.i(0,$.dI,$.j)
t.i(0,$.dZ,$.j)
t.i(0,$.f_,$.j)
t.i(0,$.h5,$.m)
r="The "+$.z+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.z
r="Now that the "+q+" is defeated, the "
o=$.t
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.o
t.i(0,new R.a5("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.aH
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.z
n=n+q+". A Learned "+$.t+" explains that it can only be defeated by the Legendary "
r=$.ac
n=n+r+" Blade. The "
m=$.o
t.i(0,new R.a5("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
r="The volcanos of the land are weirdly active after the defeat of the "+$.z+". One begins to erupt near a "
m=$.t
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.J+"s, but not really doing anything to evacuate or save anyone. The "
o=$.o
t.i(0,new R.a5("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.mD.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Dream Diary",H.a([$.K,$.aw,$.S],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bk,$.ae,$.S,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bk,$.S],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ec,$.m)
q.i(0,$.dq,$.j)
q.i(0,$.aN,$.m)
q.i(0,$.iv,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ac
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wn
k=[U.c]
q.i(0,new R.Q("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.m)
s.i(0,$.dq,$.j)
s.i(0,$.d_,$.m)
s.i(0,$.cu,$.m)
s.i(0,$.ed,$.m)
s.i(0,$.cv,$.j)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.Q("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dJ,$.j)
t.i(0,$.ir,$.m)
t.i(0,$.aN,$.m)
t.i(0,$.cu,$.j)
t.i(0,$.ed,$.j)
t.i(0,$.dq,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.Q("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aH+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.J+"ing in reverse. Another is in a "+$.ac+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.F(s,t,null),$.aq)}}
K.mF.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Creeping Vine",H.a([$.W,$.S,$.aQ,$.ap],s),null,!1,"Sentient Plant Tentacles")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.ti,$.S,$.aJ],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aG,$.av,$.S,$.ap],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bV,$.S,$.aJ],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.aU,$.S,$.aJ,$.a_,$.a2],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bi,$.S,$.ap],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.c5,$.j)
q.i(0,$.bd,$.j)
q.i(0,$.h6,$.L)
q.i(0,$.aN,$.m)
q.i(0,$.lI,$.m)
q.i(0,$.cC,$.L)
p=$.o
o="The "+p+" finds a village of compliant "
n=$.t
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.J+"ing in panic. Don't upset "
m=$.z
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.Q("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.X(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.j)
s.i(0,$.cw,$.j)
s.i(0,$.cC,$.L)
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
s.i(0,new R.Q("Distribute the Food",!1,[new U.c(m),new U.c(k),new U.c(l),new U.X(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cZ,$.j)
t.i(0,$.bd,$.L)
t.i(0,$.dK,$.j)
t.i(0,$.c_,$.m)
t.i(0,$.dY,$.m)
t.i(0,$.io,$.m)
r="Drawn by wailing and "+$.J+"ing, the "
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
t.i(0,new R.Q("Protect the Farms",!1,[new U.c(r),new U.c(m),new U.c(k),new U.X(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.aq)}}
G.mG.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("FAQ",H.a([$.a6,$.S,$.Y,$.bW],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aA,$.S,$.aP,$.a6,$.bW],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.S,$.aP,$.bW,$.a_,$.tj],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.vU,$.S,$.ae],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.w1,$.S],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.aQ,$.S,$.aP,$.bW],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.aU,$.S,$.ap],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lD,$.j)
q.i(0,$.ec,$.m)
q.i(0,$.dH,$.j)
q.i(0,$.eg,$.j)
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
q.i(0,new R.Q("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.X(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.o
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.J+"ing "+$.t+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.z
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.Q("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.X(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.m)
s.i(0,$.aN,$.m)
s.i(0,$.ds,$.j)
s.i(0,$.lC,$.j)
s.i(0,$.ef,$.j)
s.i(0,$.ip,$.j)
p=$.o
o="The "+p+" walks into a "
n=$.t
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ac
o=o+l+", but "
k=$.z
o=o+k+" has hoarded all of the planets "
j=$.aH
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.J+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.Q("The Candlestick Taker",!1,[new U.c(l),new U.c(o),new U.c(h),new U.X(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.ug(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.o
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.t
j=j+k+" explains that the "
h=$.z
s.i(0,new R.Q("Shine the Light",!1,[new U.c(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.c("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.J+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.c("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.X("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.h7,$.m)
q.i(0,$.bd,$.m)
q.i(0,$.f0,$.j)
q.i(0,$.aN,$.m)
q.i(0,$.cB,$.j)
p="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
p=p+o+" sets up a wiki and settles in to help the "
n=$.t
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.f3+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a5("Moderate the Wiki",!1,[new U.c(p),new U.c(n),new U.c(o)],H.a([],i),R.e2(),!1,!1,new Y.c0("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.t
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.f3+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a5("Create the Wiki",!1,[new U.c(l),new U.c(n),new U.c(o)],H.a([],i),R.eq(),!1,!1,new Y.c0("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.t
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.o
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.z
q.i(0,new R.Q("Shed the Light",!1,[new U.c(o),new U.c(p),new U.c(l),new U.X(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dH,$.j)
t.i(0,$.lD,$.j)
t.i(0,$.eg,$.m)
t.i(0,$.cA,$.m)
t.i(0,$.t4,$.m)
t.i(0,$.c_,$.L)
t.i(0,$.dZ,$.L)
t.i(0,$.cb,$.m)
t.i(0,$.cv,$.L)
t.i(0,$.bd,$.m)
t.i(0,$.cz,$.j)
s=$.o
r="The "+s+" is approached by a Fast Talking "
p=$.t
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ac
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.J+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.z
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.Q("Be the Star",!1,[new U.c(r),new U.c(n),new U.c(p),new U.X(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o="After the "+$.z+", the "
s=$.o
o=o+s+" is disappointed to learn that barely any of the "
l=$.t
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.f3+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a5("Be the Biggest Star in Paradox Space",!1,[new U.c(o),new U.c(l),new U.c(s)],H.a([],i),R.e2(),!1,!1,new Y.c0("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.F(q,t,null),$.aq)}}
Z.mU.prototype={
E:function(){var t,s,r,q
t=this.M
s=[G.a0]
r=A.i("Dream Bubbles Book",H.a([$.K,$.ai,$.aw,$.vM],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.P(t,0)]))
t=Q.I(null,null,A.a1)
r=A.i("Uno Reverse Card",H.a([$.mh,$.mn,$.ai],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.O,$.N,$.ai],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.jj,$.N,$.ai],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a_,$.K,$.N,$.bq,$.aw],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dd,$.L)
q.i(0,$.eh,$.L)
q.i(0,$.c_,$.L)
q.i(0,$.cQ,$.m)
p="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.o
p=p+o+" comands that the "
n=$.t
m=[U.c]
q.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.J+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
o="As soon as the "+$.z+" is defeated, the "
n=$.t
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.o
q.i(0,new R.a5("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.x
p.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.vp,$.j)
t.i(0,$.cu,$.j)
t.i(0,$.bd,$.j)
t.i(0,$.aN,$.m)
s="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.o
s=s+r+" comands that the "
o=$.t
t.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.c(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.J+"s. "),new U.c("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r="As soon as the "+$.z+" is defeated, the "
o=$.t
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.o
t.i(0,new R.a5("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",this.M,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,t,null),$.bL)}}
S.mW.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Alternate Costume",H.a([$.O,$.N,$.a2,$.a_,$.aj],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.O,$.N,$.a2],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.W,$.N,$.ae,$.a2,$.dt],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jg,$.W,$.N,$.ap,$.a2,$.dt],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.eX,$.j)
t.i(0,$.f_,$.m)
t.i(0,$.cc,$.j)
t.i(0,$.eY,$.m)
t.i(0,$.cZ,$.L)
r="The "+$.z+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
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
t.i(0,new R.a5("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.J+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.y(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.mX.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Maiden's Breath",H.a([$.aQ,$.N,$.ax],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.W,$.N,$.dt,$.bz],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.ax,$.aG,$.D,$.N,$.a_,$.f8,$.vE],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.K,$.N,$.a9,$.aw],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.de,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.ds,$.m)
t.i(0,$.cv,$.m)
r="The "+$.z+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.o
r=r+q+" asks local  "
p=$.t
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.c]
t.i(0,new R.bA("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.o
o="The "+q+" has adopted a local "
p=$.t
t.i(0,new R.a5("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.J+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.z+". ")],H.a([],n),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
V.n4.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Puzzle Box",H.a([$.W,$.S,$.a2],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a6,$.S,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.S],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.S,$.a6,$.Y],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aG,$.jh,$.av,$.ai,$.S,$.a_,$.a6],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cu,$.m)
q.i(0,$.ec,$.L)
q.i(0,$.cB,$.L)
p=$.o
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.t
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.z
k=[U.c]
q.i(0,new R.Q("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.X(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fj(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.o
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.t+" explains that at the end of the Labrinth is the "
l=$.z
q.i(0,new R.Q("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.X("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.h5,$.L)
s.i(0,$.c4,$.m)
s.i(0,$.cB,$.L)
s.i(0,$.cu,$.L)
p=$.z
o="The "+p+" has commited a staggering amount of crimes against the local "+$.t+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.o
s.i(0,new R.Q("Face the Music",!1,[new U.c(o+m+" knows that Justice is on their side."),new U.c("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.X("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.j)
t.i(0,$.bd,$.m)
t.i(0,$.f0,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.cB,$.j)
r=$.o
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.z
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ac+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.Q("Make the Connections",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.aq)}}
E.n5.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Feather Pen",H.a([$.D,$.N,$.ai,$.bz],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.w0,$.N,$.jh,$.ae,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.K,$.N,$.ai,$.aw],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.de,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.ds,$.m)
t.i(0,$.cv,$.m)
r="The "+$.z+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.c]
t.i(0,new R.bA("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.z+" the "
o=$.t
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.o
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ac
t.i(0,new R.a5("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
F.n6.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Piano",H.a([$.ae,$.W,$.a9,$.ai],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.D,$.a9],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aV,$.a6],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.W,$.a9],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.K,$.a9],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aA,$.a9,$.a6,$.aV,$.al],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aA,$.a9,$.a6,$.al],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.W,$.a9],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.ah)
q.i(0,$.t4,$.j)
q.i(0,$.eg,$.j)
q.i(0,$.ds,$.m)
q.i(0,$.aN,$.m)
q.i(0,$.lB,$.m)
p=$.o
o="The "+p+" meets a wise old "+$.t+" who tells that the "+$.z+" can only be awoken by the Legendary Hero playing the "
n=$.aH
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ac
k=[U.c]
q.i(0,new R.Z("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
n="The "+p+" finds an empty, trashed "
l=$.aH
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ac+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.J+"ing "+$.t+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.ER
q.i(0,new R.Z("Play the Crowd",!1,[new U.c(n),new U.c(m),new U.c(l)],H.a([],k),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.t7,$.ah)
s.i(0,$.dr,$.m)
s.i(0,$.cQ,$.m)
s.i(0,$.ds,$.j)
s.i(0,$.lB,$.ah)
o=$.o
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aH
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.z
s.i(0,new R.Z("Sing the Song",!1,[new U.c(n+l+". "),new U.c("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.ac+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.h6,$.ah)
t.i(0,$.cb,$.m)
t.i(0,$.dK,$.m)
r=$.o
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.t
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.J
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aH+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.Z("And It Don't Stop",!1,[new U.c(n),new U.c(q),new U.c(r)],H.a([],k),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aC)}}
Y.nj.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q=this,p,o
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cs(A.hp("scripts/Rendering/threed/three.min.js",!1),$async$R)
case 3:t=4
return P.cs(Q.o_(),$async$R)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.aR(p)
o.eH(p,P.wh(["",$.$get$vf()],P.B,S.hs))
o.eG(p,!1)
q.b=p}J.v2(p,b)
r=J.v2(q.b,b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asex:function(){return[S.fh]},
$asc6:function(){return[S.fh,P.B]}}
V.nr.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Shorts",H.a([$.O,$.N,$.f7,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aA,$.N,$.al],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.an,$.N,$.a2],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.lF,$.j)
t.i(0,$.cC,$.m)
t.i(0,$.ha,$.m)
t.i(0,$.lH,$.m)
t.i(0,$.de,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.dY,$.m)
t.i(0,$.ef,$.m)
t.i(0,$.t8,$.m)
t.i(0,$.io,$.m)
t.i(0,$.lC,$.m)
r="The "+$.z+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.c]
t.i(0,new R.bA("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.o
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.t+" named Professor "
p=$.J
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ac
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.z
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.Q("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.X(k,"The "+q+" whited out...",m)],H.a([],n),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m="Now that the "+$.z+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.o
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.t
t.i(0,new R.a5("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aH+" buffs. With a deafening "+$.J+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.y(),!1,!1,new Y.i9("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
G.nE.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Superhero Action Figure",H.a([$.aA,$.al,$.aO],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aA,$.al],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aA,$.bV],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aA,$.aT,$.bm,$.ce],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aA,$.al],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.K,$.al],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.aQ,$.al,$.O,$.ap],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.aQ,$.aK,$.al,$.O],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aO,$.D,$.al,$.f9,$.au,$.bP],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.K,$.al],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.K,$.al],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.m)
q.i(0,$.cz,$.m)
q.i(0,$.cb,$.j)
q.i(0,$.cC,$.ah)
q.i(0,$.d_,$.ah)
p=$.o
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.t
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aH+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.J+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.ES
l=[U.c]
q.i(0,new R.Z("Become the Star",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ee,$.m)
s.i(0,$.dr,$.m)
s.i(0,$.cz,$.m)
s.i(0,$.cb,$.m)
s.i(0,$.dI,$.j)
o=$.o
n="The "+o+" runs towards an explosion in a local "
m=$.t
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aH
s.i(0,new R.Z("Stop the Villain",!1,[new U.c(n),new U.c(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.c(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cz,$.m)
t.i(0,$.dH,$.j)
t.i(0,$.cw,$.j)
t.i(0,$.dI,$.m)
r=$.o
q="The "+r+" gets a job at the "+$.aH+" Cinema. A new movie, The Lonely "
o=$.ac
q=q+o+" is coming out soon, and "
n=$.t
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.J+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.Z("Premiere the Movie",!1,[new U.c(q),new U.c(m),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aC)}}
N.nK.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Feather'd Cap",H.a([$.O,$.N,$.f7],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a_,$.tn,$.N,$.f7],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bo,$.N],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cz,$.m)
t.i(0,$.cu,$.m)
t.i(0,$.dK,$.L)
r="With the closing of the curtain, the "+$.z+" has released the frogs, and yet they are nowhere to be found. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.z
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.o
r=r+o+" to get it back to normal. They organize a team of "
n=$.t
t.i(0,new R.a5("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ac+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.c.prototype={}
U.X.prototype={}
R.nL.prototype={
C:function(a){return H.x(new H.dR(H.ke(this),null))+": "+this.c},
gH:function(a){return this.c}}
R.Z.prototype={}
R.Q.prototype={}
R.a5.prototype={}
R.bA.prototype={}
E.nM.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Curtain",H.a([$.O,$.S,$.aO],s),null,!1,"Show Ender")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.f9,$.aL,$.S,$.au,$.aX,$.aO,$.bn,$.aD],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.D,$.aV,$.a6,$.S,$.aO],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aG,$.D,$.aV,$.bq,$.c8,$.S,$.aO],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.an,$.bq,$.ai,$.S,$.a_,$.aO],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.W,$.S,$.aX,$.ao,$.bo,$.aO],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lA,$.j)
q.i(0,$.dd,$.j)
q.i(0,$.dr,$.j)
q.i(0,$.cZ,$.m)
q.i(0,$.c_,$.m)
q.i(0,$.cc,$.m)
q.i(0,$.c4,$.L)
q.i(0,$.d_,$.m)
q.i(0,$.ee,$.j)
q.i(0,$.it,$.j)
q.i(0,$.f_,$.j)
q.i(0,$.lG,$.j)
q.i(0,$.h6,$.m)
q.i(0,$.eh,$.j)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ac
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.Q("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hD(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
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
q.i(0,new R.Q("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ds,$.j)
s.i(0,$.c_,$.m)
s.i(0,$.c4,$.j)
s.i(0,$.cA,$.j)
s.i(0,$.cv,$.j)
s.i(0,$.cz,$.m)
s.i(0,$.is,$.L)
s.i(0,$.dd,$.m)
s.i(0,$.cC,$.j)
s.i(0,$.cb,$.j)
s.i(0,$.d_,$.L)
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
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.lA,$.j)
t.i(0,$.d_,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.cC,$.m)
t.i(0,$.cv,$.j)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(s,t,null),$.aq)}}
Y.dN.prototype={}
Y.ad.prototype={}
Y.cY.prototype={}
Y.c0.prototype={
gH:function(a){return this.c}}
Y.T.prototype={}
Y.i9.prototype={}
Y.bD.prototype={}
Y.cU.prototype={}
Y.kJ.prototype={}
Y.bw.prototype={}
Y.jz.prototype={}
Y.ix.prototype={}
Y.jB.prototype={}
N.nR.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Domino Mask",H.a([$.O,$.N,$.f7],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.th,$.N,$.f7,$.vF],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a_,$.aA,$.a6,$.N,$.Y,$.aj],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.c4,$.j)
t.i(0,$.cc,$.m)
t.i(0,$.dI,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt Noble "
q=$.t
r=r+q+"s have hoarded them. The "
p=$.o
o=[U.c]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.o
q="The "+p+" learns of the extreme injustices of the "
r=$.t
q=q+r+"s who rose to power during the tyranny of "
n=$.z
t.i(0,new R.a5("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.nS.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Red Rose",H.a([$.aB,$.ax],s),null,!1,"Seductive Plant")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aB,$.K],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aB,$.an],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aB,$.ao],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aB,$.bo,$.D,$.aK],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aw,$.K,$.aB],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.j)
q.i(0,$.ha,$.m)
q.i(0,$.eW,$.m)
q.i(0,$.h9,$.j)
q.i(0,$.cA,$.m)
q.i(0,$.iq,$.L)
p=$.o
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.t
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ac+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.Z("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cA,$.m)
s.i(0,$.dH,$.j)
s.i(0,$.h9,$.j)
s.i(0,$.cw,$.m)
s.i(0,$.eg,$.L)
s.i(0,$.iq,$.L)
o=$.t
n="A Romantic "+o+" approaches the "
m=$.o
s.i(0,new R.Z("Plan the Date",!1,[new U.c(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.c("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iq,$.j)
t.i(0,$.cw,$.j)
t.i(0,$.eW,$.m)
t.i(0,$.lH,$.j)
t.i(0,$.h9,$.j)
t.i(0,$.cA,$.m)
t.i(0,$.eg,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.t
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.z+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.EO
t.i(0,new R.Z("Ship All the Ships",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.o
r="The "+n+"  and the "
o=$.es
t.i(0,new R.Z("Flushed Shipping Dungeon",!1,[new U.c(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.er(),!1,!1,new Y.ix(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ah)
o=$.o
n="The "+o+"  and the "
r=$.es
t.i(0,new R.Z("Pale Shipping Dungeon",!1,[new U.c(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.er(),!1,!1,new Y.jz(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r=$.o
o="The "+r+"  and the "
n=$.es
t.i(0,new R.Z("Pitched Shipping Dungeon",!1,[new U.c(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.er(),!1,!1,new Y.jB(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p.i(0,new X.F(s,t,null),$.aC)}}
T.hG.prototype={
E:function(){var t,s
t=Q.I(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.j)
q.i(0,$.bd,$.L)
q.i(0,$.dK,$.j)
q.i(0,$.c_,$.m)
q.i(0,$.dY,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.a5("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.x
n.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eZ,$.j)
s.i(0,$.ef,$.L)
s.i(0,$.eY,$.m)
s.i(0,$.cQ,$.j)
s.i(0,$.cc,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a5("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
l="The "+p+" learns that all of the local "
o=$.t
s.i(0,new R.a5("Do the Teamwork",!1,[new U.c(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+p+" grabs the "+$.es+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.J+"ing in amazement. The factory is saved! ")],H.a([],m),R.er(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.ah)
n.i(0,new X.F(q,s,null),$.bL)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.bd,$.L)
t.i(0,$.c5,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.J
t.i(0,new R.Z("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uf(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
p="The "+l+" learns that all of the local "
r=$.t
t.i(0,new R.a5("Relax the Consorts",!1,[new U.c(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.F(s,t,null),$.bL)},
C:function(a){return this.r},
a5:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.im("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.i6]),H.a([],[M.h4]))
this.E()
this.F()
t=this.Q
if($.$get$nU().V(0,t))H.aZ("Duplicate class id for "+this.C(0)+": "+t+" is already registered for "+J.cI($.$get$nU().n(0,t))+".")
$.$get$nU().i(0,t,this)},
gH:function(a){return this.r}}
E.nV.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Sage's Robe",H.a([$.O,$.N,$.aW,$.Y,$.a2,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.K,$.N,$.aw,$.Y],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.O,$.N,$.ej,$.Y],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.h7,$.m)
t.i(0,$.bd,$.m)
t.i(0,$.f0,$.j)
t.i(0,$.aN,$.L)
t.i(0,$.cB,$.j)
r="The "+$.z+" has blocked access to the books for the duration. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.z+" is defeated, it is time to begin recovery efforts. The "
r=$.t
q=q+r+"s ask the "
o=$.o
t.i(0,new R.a5("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.J+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
K.nW.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Uno Reverse Card",H.a([$.mh,$.S,$.aO],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.ej,$.aW,$.S],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lA,$.j)
q.i(0,$.dd,$.j)
q.i(0,$.dr,$.j)
q.i(0,$.cZ,$.m)
q.i(0,$.c_,$.m)
q.i(0,$.cc,$.m)
q.i(0,$.c4,$.L)
q.i(0,$.d_,$.m)
q.i(0,$.ee,$.j)
q.i(0,$.it,$.j)
q.i(0,$.f_,$.j)
q.i(0,$.lG,$.j)
q.i(0,$.h6,$.m)
q.i(0,$.eh,$.j)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ac
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.Q("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hD(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
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
q.i(0,new R.Q("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ds,$.j)
s.i(0,$.c_,$.m)
s.i(0,$.c4,$.j)
s.i(0,$.cA,$.j)
s.i(0,$.cv,$.j)
s.i(0,$.cz,$.m)
s.i(0,$.is,$.L)
s.i(0,$.dd,$.m)
s.i(0,$.cC,$.j)
s.i(0,$.cb,$.j)
s.i(0,$.d_,$.L)
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
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.lA,$.j)
t.i(0,$.d_,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.cC,$.m)
t.i(0,$.cv,$.j)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.F(s,t,null),$.aq)}}
Y.nX.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Walking Stick",H.a([$.W,$.N,$.dt],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.O,$.N,$.vN,$.Y,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.K,$.N,$.Y],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.N,$.Y,$.a2],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p
t=[P.B]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.de,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.bd,$.j)
t.i(0,$.cb,$.L)
t.i(0,$.aN,$.L)
r="Now that the "+$.z+" has been defeated, the planet has really opened up. The "
q=$.o
p=[U.c]
t.i(0,new R.a5("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.t+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.o
t.i(0,new R.bA("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.t+" "+$.J+"s in time to stop them.   ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
L.nY.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Scroll",H.a([$.K,$.N,$.Y],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.aU,$.N,$.aj,$.Y],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.K,$.N,$.aw,$.Y,$.aj,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.lB,$.j)
t.i(0,$.bd,$.j)
t.i(0,$.cB,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.cu,$.m)
r="The "+$.z+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.z+" has been taken care of, the "
r=$.o
q=q+r+" discovers a large library of "
o=$.t
t.i(0,new R.a5("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
S.o0.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Cueball",H.a([$.ei,$.mo,$.N,$.ae,$.ap,$.a_],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.ei,$.vL,$.N,$.aP],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.aU,$.N,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.vH,$.N,$.aW],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.vq,$.j)
t.i(0,$.ir,$.j)
t.i(0,$.vo,$.j)
t.i(0,$.cC,$.m)
r="Now that the "+$.z+" has been defeated, the land is really starting to open up. The "
q=$.o
r=r+q+" finds a tunnel filled with Blind "
p=$.t
o=[U.c]
t.i(0,new R.a5("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.o
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.o
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.t
t.i(0,new R.a5("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
r="A group of underlings are still making trouble, even after the defeat of the "+$.z+". The "
p=$.o
r=r+p+" begins planting rumors of a huge "
q=$.ac
t.i(0,new R.a5("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.c2.prototype={}
Y.o7.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Meddler's Guide",H.a([$.aw,$.N,$.K,$.bq,$.a_,$.aJ],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aU,$.N,$.aJ],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.i("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.N,$.aP,$.ax,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.bd,$.m)
t.i(0,$.de,$.j)
t.i(0,$.cC,$.m)
t.i(0,$.aN,$.m)
t.i(0,$.c5,$.j)
r="The defeat of the "+$.z+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.z+" has been taken care of, the "
r=$.o
q=q+r+" finds a long line of "
o=$.t
t.i(0,new R.a5("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.o8.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Fiduspawn Plush",H.a([$.ce,$.O,$.aW],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.ce,$.O,$.aW],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dice",H.a([$.tl,$.aA],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pigeon",H.a([$.bz,$.ap,$.bi,$.aY,$.bn,$.tv],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.O,$.aW,$.ce],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aw,$.K],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aw,$.K],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.aW,$.O],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aw,$.K,$.Y],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dJ,$.L)
q.i(0,$.aN,$.m)
q.i(0,$.cu,$.j)
q.i(0,$.cB,$.m)
p=$.o
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.t
m=[U.c]
q.i(0,new R.Z("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aH+" or "+$.ac+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.J+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dJ,$.L)
s.i(0,$.aN,$.j)
s.i(0,$.cu,$.j)
s.i(0,$.t1,$.j)
s.i(0,$.cA,$.j)
s.i(0,$.t7,$.j)
s.i(0,$.cB,$.m)
o=$.o
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.J
n=n+l+"ing "
k=$.t
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aH
s.i(0,new R.Z("Meditate On Frogism",!1,[new U.c(n),new U.c(j+i+"-ness. How could they miss this?"),new U.c(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aC)
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
t.i(0,new R.Z("Protect the FLARPers",!1,[new U.c(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.J+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.c("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.c("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,t,null),$.aC)}}
M.bB.prototype={}
N.oa.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Frog Statue",H.a([$.aG,$.av,$.S],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.O,$.S],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c1,$.Y,$.a6,$.S],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.aU,$.Y,$.S],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.K,$.S,$.to,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=$.o
s=[P.B]
r=H.a(["Wherever the "+t+" goes, they find a "+$.t+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.J+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.z+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
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
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cC,$.L)
t.i(0,$.t3,$.j)
s=[U.c]
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.o
t.i(0,new R.bA("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.J+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.y(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
this.f.i(0,new X.F(o,t,null),$.FT)}}
U.ag.prototype={
gH:function(a){return this.d+"kind"},
$isbF:1,
$asbF:function(){return[A.a1]}}
K.cE.prototype={
gH:function(a){return this.a}}
M.oe.prototype={
aS:function(a){return"application/octet-stream"},
R:function(a6,a7){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$R=P.bu(function(a8,a9){if(a8===1)return P.br(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dc(null,0)
q.a=J.dV(a7,0)
for(p=0,o="";p<6;++p)o+=H.hC(q.a6(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.k("Invalid header: "+n)
m=q.a6(8)
l=9+m*6
o=8*m
k=q.a6(o)
j=q.a6(o)
i=q.a6(o)
h=q.a6(o)
g=q.a6(o)
f=q.a6(o)
o=P.C
e=P.B
d=P.bX(o,e)
c=new O.cS(k,j,null,null,null,null,null,null,d,P.bX(e,o))
c.x=new Uint8Array(H.cy(k*j))
b=q.a6(8)
for(o=[o],p=0;p<b;++p){a=q.a6(8)
a0=q.a6(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.a6(8)
if(a2>=e){r=H.v(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.oD(a1,0,null))}a4=q.a6(8)
a5=$.$get$wD().n(0,a4)
if(a5==null)throw H.k("Sprite decoding error: Encoding id "+a4+" not supported.")
c.i1(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hO()
r=c
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[O.cS]},
$asc6:function(){return[O.cS,P.bh]}}
R.oH.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Meddler's Guide",H.a([$.aw,$.N,$.K,$.bq,$.a_,$.aJ],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aU,$.N,$.aJ],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.i("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.N,$.aP,$.ax,$.K],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cu,$.j)
t.i(0,$.aN,$.j)
t.i(0,$.de,$.m)
t.i(0,$.f0,$.m)
t.i(0,$.t0,$.m)
t.i(0,$.dY,$.m)
t.i(0,$.io,$.m)
t.i(0,$.t6,$.m)
r=$.o
q="The "+r+" decides to take a break after defeating "+$.z+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.t
o=[U.c]
t.i(0,new R.a5("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.J+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.uh(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
r=$.t
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.o
t.i(0,new R.a5("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.t
q="The "+r+"s are so stressed after all that shit with the "+$.z+". They are yelling and "+$.J+" at each other over the slightest of insults. The "
p=$.o
t.i(0,new R.a5("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.z+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.o
p=p+r+" purifies the pools "
q=$.t
t.i(0,new R.bA("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r="The defeat of the "+$.z+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.t
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.o
t.i(0,new R.a5("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aH+". Huh. Okay then.")],H.a([],o),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
D.oK.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Robot",H.a([$.a6,$.D,$.ap,$.Y],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a6,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a6,$.K],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a6,$.K,$.aD,$.aw],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aA,$.a6,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.vR,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.tC,$.D,$.ae],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a6,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.iu,$.m)
q.i(0,$.eX,$.j)
q.i(0,$.eZ,$.j)
q.i(0,$.cc,$.L)
p=$.o
o="The "+p+" learns from their "
n=$.t
o=o+n+"s about the great "
m=$.aH
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.z+" destroyed it. "
o="The "+p+" searches for the "
l=$.ac
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.EW
p=[U.c]
q.i(0,new R.Z("Fix the Machine",!1,[new U.c(n),new U.c(o),new U.c(m)],H.a([],p),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=$.o
m="The "+l+" is approached by a "
o=$.t
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.J
q.i(0,new R.Z("Decipher the Enigma",!1,[new U.c(o+m+"ing, how could they not? "),new U.c("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.z+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ac+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fj(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eZ,$.j)
s.i(0,$.ef,$.L)
s.i(0,$.eY,$.m)
s.i(0,$.cQ,$.j)
s.i(0,$.cc,$.L)
o=$.o
n="The "+o+" learns that all of the local "
l=$.t
s.i(0,new R.Z("Produce the Goods",!1,[new U.c(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.c("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.c("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
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
s.i(0,new R.Z("Stop the Dispute",!1,[new U.c(l),new U.c(k),new U.c(j)],H.a([],p),R.e2(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.L)
t.i(0,$.eX,$.j)
t.i(0,$.eZ,$.j)
t.i(0,$.cc,$.L)
r=$.o
q="The "+r+" learns from a mysterious "+$.t+" in a black trenchcoat about a great "
o=$.aH
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.z
t.i(0,new R.Z("Learn the Secret",!1,[new U.c(q+n+"? "),new U.c("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aC)}}
V.oM.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Lighter",H.a([$.D,$.ao],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.K,$.bm],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.K,$.bm,$.c1],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.D,$.aD,$.c1,$.be,$.bn],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.K,$.vW],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.D,$.bg,$.be],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.D,$.bg,$.be],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.O,$.f7,$.be],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bO,$.bg],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.D,$.tw,$.aK,$.be],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.D,$.tz,$.aK,$.be],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.D,$.ts,$.aK,$.be],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mj,$.au,$.D,$.bo,$.be],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.K,$.bq,$.aw],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.c8,$.D,$.aV,$.bq],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.W,$.ao],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.m)
q.i(0,$.dH,$.j)
q.i(0,$.dZ,$.j)
q.i(0,$.f_,$.j)
q.i(0,$.lF,$.j)
q.i(0,$.dI,$.m)
p=$.o
o=[U.c]
q.i(0,new R.Z("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.m)
s.i(0,$.dH,$.j)
s.i(0,$.cw,$.j)
s.i(0,$.dI,$.m)
n=$.o
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.t
s.i(0,new R.Z("All About the Boonies, Baby",!1,[new U.c(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ac+" underling. Tremble at the fearsome "+$.aH+" "+l+".   "),new U.c(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.j)
q.i(0,$.bd,$.L)
q.i(0,$.dK,$.j)
q.i(0,$.c_,$.m)
q.i(0,$.dY,$.L)
q.i(0,$.dd,$.L)
n=$.o
m="The "+n+" learns that all of the local "
l=$.t
q.i(0,new R.Z("Revive the Consorts",!1,[new U.c(m+l+"s are dead. This is....pretty cool, actually. "),new U.c("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c4,$.j)
t.i(0,$.dd,$.L)
t.i(0,$.ee,$.j)
t.i(0,$.it,$.j)
t.i(0,$.cc,$.m)
t.i(0,$.eh,$.m)
s=$.o
r="The "+s+" finds a crowd of "
n=$.J
r=r+n+"ing "
m=$.t
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aH+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.Z("Stop a Rebellion",!1,[new U.c(r),new U.c(l),new U.c(s)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.F(q,t,null),$.aC)}}
X.F.prototype={
C:function(a){return"Theme: "+H.x(this.a)}}
U.oV.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Lockpick",H.a([$.D,$.N,$.aj,$.aL,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.O,$.N,$.aj],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Dagger",H.a([$.D,$.N,$.aL,$.au,$.tk],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.c4,$.j)
t.i(0,$.dr,$.m)
t.i(0,$.cb,$.m)
t.i(0,$.cQ,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt "
q=$.t
r=r+q+" Cops have confiscated them. The "
p=$.o
o=[U.c]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.o
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.z+"'s layer and slated to be returned to the "
r=$.t
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.J+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a5("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.t
p="A weeping "+r+" approaches the "
n=$.o
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.z
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aH+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.J+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a5("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
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
t.i(0,new R.a5("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.oW.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Grandfather Clock",H.a([$.W,$.ai,$.bg,$.S],s),null,!1,"Ticking Tower of Time")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.w_,$.S,$.a9],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aG,$.bi,$.S,$.aY,$.aX,$.aD],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.S,$.a9,$.ai],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.D,$.S,$.a9,$.a_,$.al],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.D,$.S,$.a9],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.vs,$.ah)
q.i(0,$.cc,$.m)
q.i(0,$.cQ,$.m)
q.i(0,$.eY,$.j)
p=$.z
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.o
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.c]
q.i(0,new R.a5("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.eq(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.o
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.t+"s, they set out to fix the "
m=$.ac
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.z
q.i(0,new R.Q("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.X("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.F(s,q,null),$.aq)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.h6,$.j)
s.i(0,$.dZ,$.L)
s.i(0,$.cc,$.j)
p=$.o
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.t+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.z
s.i(0,new R.Q("Synchronize the Rhythm",!1,[new U.c(o),new U.c(n),new U.X(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(q,s,null),$.aq)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.cu,$.j)
t.i(0,$.de,$.j)
r=$.z
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ac
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.o
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.t+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.Q("Walk Another Path",!1,[new U.c(q),new U.c(n),new U.c(m),new U.X(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hD(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
k=$.z
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ac
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.o
t.i(0,new R.Q("Destroy Timelines",!1,[new U.c(p+r+" prepares for a bullshit item collection quest. "),new U.c("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.t+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.c("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.X("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.eq(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
r="With the defeat of the "+$.z+", "
k=$.o
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.t
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aH
t.i(0,new R.a5("Shatter the Timeline",!1,[new U.c(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.eq(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.t
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.o
t.i(0,new R.Q("Move Forwards, Never Stop",!1,[new U.c(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.J+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.X("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.z+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.F(s,t,null),$.aq)}}
G.a0.prototype={
C:function(a){var t=this.b
if(t.length!==0)return C.b.gad(t)
return"NULL TRAIT"},
gef:function(){return this.a},
gdY:function(){return this.b},
gbz:function(){return this.c}}
G.aI.prototype={}
G.af.prototype={}
G.bH.prototype={}
G.d.prototype={
ghJ:function(){return this.e.length},
gbz:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bT)(t),++q)r+=t[q].c
return r},
aB:function(a,b){return C.a.bA(b.ghJ()-this.e.length)},
eq:function(a){return C.b.hb(this.e,a.gfY(a))},
$isbF:1,
$asbF:function(){return[G.d]},
gH:function(a){return this.d},
geK:function(){return this.e}}
G.mp.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a0]}}}
Q.pk.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Cardboard Box",H.a([$.K,$.S,$.aj],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.D,$.S,$.aj],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bo,$.S,$.aj,$.mj],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.aY,$.S,$.aj,$.aX,$.bQ],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aA,$.S,$.aj,$.ai],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.S,$.a_,$.to,$.aj,$.aU],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a8,P.V]
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
m=this.x2
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
q.i(0,new R.Q("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.X(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i=this.f
i.i(0,new X.F(s,q,null),$.aq)
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
m=$.ac
s.i(0,new R.a5("Reveal the Tomes",!1,[new U.c(o+m+" will provide insight."),new U.c("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fj(),!1,!1,new Y.c0("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.o
s.i(0,new R.Q("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.c("The "+m+" [REDACTED]s and it actually works! Everyone "+$.J+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.X("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.z+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.t+"s.")],H.a([],l),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.F(q,s,null),$.aq)
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
t.i(0,new R.Q("Walk of Faith",!1,[new U.c(q),new U.c(p),new U.c(o),new U.c(n),new U.X(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.F(s,t,null),$.aq)}}
E.pl.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Yardstick",H.a([$.dt,$.N,$.mn,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aw,$.N,$.jj,$.K],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.O,$.N,$.ej,$.tr,$.aW],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.tA,$.N,$.mg],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.cC,$.j)
t.i(0,$.d_,$.j)
t.i(0,$.dq,$.j)
t.i(0,$.de,$.j)
t.i(0,$.ec,$.j)
t.i(0,$.ed,$.j)
t.i(0,$.h8,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.Z("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uh(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cg+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wy(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.o
t.i(0,new R.Z("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.o
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.T("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wz(),!1,!1,new Y.c0("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a5("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bA("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.aq)}}
M.pp.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Cauldron",H.a([$.vZ,$.N,$.a2],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jg,$.dt,$.N,$.W,$.a2],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.tt,$.N,$.a2,$.aj,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.a8,P.V])
t.i(0,$.c_,$.m)
t.i(0,$.ha,$.m)
t.i(0,$.cZ,$.m)
t.i(0,$.cQ,$.m)
t.i(0,$.cv,$.m)
t.i(0,$.t3,$.m)
r=$.z
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.t
q=q+p+" consorts. It's up to the "
o=$.o
n=[U.c]
t.i(0,new R.bA("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
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
q=this.go
t.i(0,new R.a5("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.A)
q="A Mysterious "+$.t+" approaches the "
p=$.o
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aH
q=q+r+" was discovered amongst the "+$.z+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a5("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.t
p="A young "+r+" approaches the "
m=$.o
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aH
t.i(0,new R.a5("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ac+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.J+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.y(),!1,!1,new Y.ad("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.pq.prototype={
R:function(a5,a6){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$R=P.bu(function(a7,a8){if(a7===1)return P.br(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.dW(a6,$.$get$x2())
if(0>=p.length){r=H.v(p,0)
t=1
break}if(J.yd(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.v(p,0)
t=1
break}throw H.k("Invalid WordList file header: '"+H.x(p[0])+"'")}o=P.B
n=H.a([],[o])
m=P.bX(o,B.eC)
q.a=null
l=P.bX(o,o)
for(k=P.V,j=B.cV,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cH()
""+i
H.x(g)
f.toString
f=J.dW(g,$.$get$x0())
if(0>=f.length){r=H.v(f,0)
t=1
break $async$outer}g=f[0]
f=J.bc(g)
if(f.gY(g)===!0){$.$get$cH().toString
continue}if(f.ag(g,$.$get$x1())){$.$get$cH().toString
continue}if(C.c.ag(g,"@")){e=C.c.ah(g,1)
$.$get$cH().toString
n.push(e)}else if(C.c.ag(g,"?")){f=C.c.ah(g,1)
f=$.$get$hN().aQ(0,f)
f=H.df(f,B.i4(),H.as(f,"n",0),null)
d=P.d1(f,!0,H.as(f,"n",0))
if(d.length<2)$.$get$cH().b2(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cH()
H.x(c)
H.x(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$x3()
a=f.ck(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.v(f,1)
t=1
break $async$outer}a0=J.bZ(f[1])
a1=C.c.ah(g,a0)
if(a1.length===0)continue
f=J.ar(a0)
if(f.S(a0,0)){a1=C.c.er(a1)
$.$get$cH().toString
f=P.bX(o,o)
a2=new B.eC(P.bX(o,k),f,a1,!1,null,null)
a2.ca(null,null,j)
q.a=a2
f.bo(0,l)
m.i(0,a1,q.a)}else if(f.S(a0,$.x4))if(C.c.ag(a1,"?")){a1=C.c.ah(a1,1)
f=$.$get$hN().aQ(0,a1)
f=H.df(f,B.i4(),H.as(f,"n",0),null)
d=P.d1(f,!0,H.as(f,"n",0))
f=$.$get$cH()
f.toString
if(d.length<2)f.b2(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.ki(d[0],$.$get$fo(),"")
if(1>=d.length){r=H.v(d,1)
t=1
break $async$outer}b=J.ki(d[1],$.$get$fo(),"")
f=$.$get$cH()
H.x(q.a.e)
f.toString
q.a.d.i(0,c,b)}}else if(C.c.ag(a1,"@")){e=C.c.ah(a1,1)
$.$get$cH().toString
f=$.$get$hN().aQ(0,a1)
f=H.df(f,B.i4(),H.as(f,"n",0),null)
d=P.d1(f,!0,H.as(f,"n",0))
a3=d.length>1?H.wv(d[1],new U.pr(q,d)):1
q.a.c.i(0,C.c.cV(e,$.$get$fo(),""),a3)}else{$.$get$cH().toString
f=$.$get$hN().aQ(0,g)
f=H.df(f,B.i4(),H.as(f,"n",0),null)
d=P.d1(f,!0,H.as(f,"n",0))
a3=d.length>1?H.wv(d[1],new U.ps(q,d)):1
if(0>=d.length){r=H.v(d,0)
t=1
break $async$outer}f=C.c.bj(J.ki(d[0],$.$get$fo(),""))
h=new B.cV(null)
a4=P.bX(o,o)
h.a=a4
a4.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.rF(a3)),[H.as(f,"cx",0)]))}else if(f.S(a0,$.x4*2)){$.$get$cH().toString
f=$.$get$hN().aQ(0,g)
f=H.df(f,B.i4(),H.as(f,"n",0),null)
d=P.d1(f,!0,H.as(f,"n",0))
f=d.length
if(f!==2)$.$get$cH().b2(C.h,"Invalid variant for "+H.x(h.bk(0))+" in "+H.x(q.a.e))
else{if(0>=f){r=H.v(d,0)
t=1
break $async$outer}f=C.c.bj(J.ki(d[0],$.$get$fo(),""))
if(1>=d.length){r=H.v(d,1)
t=1
break $async$outer}a4=C.c.cV(U.FW(d[1]),$.$get$fo(),"")
h.a.i(0,f,a4)}}}}}r=new B.hT(n,m)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asex:function(){return[B.hT]},
$asc6:function(){return[B.hT,P.B]}}
U.pr.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.v(s,1)
r="Invalid include weight '"+H.x(s[1])+"' for word '"
if(0>=s.length)return H.v(s,0)
t.b2(C.i,r+H.x(s[0])+"' in list '"+H.x(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
U.ps.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.v(s,1)
r="Invalid weight '"+H.x(s[1])+"' for word '"
if(0>=s.length)return H.v(s,0)
t.b2(C.i,r+H.x(s[0])+"' in list '"+H.x(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
F.pu.prototype={
E:function(){var t,s,r,q
t=Q.I(null,null,A.a1)
s=[G.a0]
r=A.i("Make a World Book",H.a([$.K,$.ai,$.aw],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.aW,$.O,$.ml],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aw,$.K,$.Y],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aw,$.K,$.Y],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aw,$.K],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.D,$.Y,$.ml,$.ai],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aw,$.K,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aw,$.K],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a8,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dJ,$.j)
q.i(0,$.cB,$.j)
q.i(0,$.bd,$.m)
q.i(0,$.aN,$.m)
q.i(0,$.h7,$.m)
p=$.o
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.t+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.Z("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dI,$.m)
s.i(0,$.cz,$.m)
s.i(0,$.cw,$.m)
s.i(0,$.bd,$.m)
p=$.t
o="An Excited "+p+" rushes up to the "
n=$.o
s.i(0,new R.Z("Read the Fan Fiction",!1,[new U.c(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.J+"ing so much? "),new U.c("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cz,$.m)
t.i(0,$.dH,$.j)
t.i(0,$.cw,$.j)
t.i(0,$.dI,$.m)
t.i(0,$.dq,$.j)
r=$.o
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.t
t.i(0,new R.Z("Be the DM",!1,[new U.c(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.F(s,t,null),$.aC)}}
B.pz.prototype={
aS:function(a){return"application/x-tar"},
R:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$x5()
p=J.uW(b)
q.toString
r=q.h2(T.tf(p,0,null,0),!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdm:function(){return[T.fF]},
$asc6:function(){return[T.fF,P.bh]}}
A.fN.prototype={}
B.dn.prototype={
cC:function(a){if(a)this.b=(this.b|C.a.ar(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.O+=H.hC(this.b)
this.b=0}},
ai:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ar(1,t)
if(typeof a!=="number")return a.aK()
this.cC((a&s)>>>0>0)}},
fQ:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.aw(1,t-s)
if(typeof a!=="number")return a.aK()
this.cC((a&r)>>>0>0)}},
bS:function(a){var t,s
a=J.e6(a,1)
t=C.d.d8(Math.log(H.kb(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cC(!1)
this.fQ(a,t+1)},
b5:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.O
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a7(r)
q+=r
p=r}else p=0
r=H.cy(q)
o=new Uint8Array(r)
if(t){n=H.cM(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.v(o,m)
o[m]=l}}t=s.O
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a3(k,m)
if(s<0||s>=r)return H.v(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.v(o,t)
o[t]=s}return o.buffer}}
B.dc.prototype={
cr:function(a){var t,s,r,q
t=C.f.al(a/8)
s=C.a.bG(a,8)
r=this.a.getUint8(t)
q=C.a.aw(1,s)
if(typeof r!=="number")return r.aK()
return(r&q)>>>0>0},
a6:function(a){var t,s,r
if(a>32)throw H.k(P.dB(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cr(this.b);++this.b
if(r)t=(t|C.a.ar(1,s))>>>0}return t},
hN:function(a){var t,s,r,q
if(a>32)throw H.k(P.dB(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cr(this.b);++this.b
if(q)s=(s|C.a.aw(1,t-r))>>>0}return s},
c1:function(){var t,s,r
for(t=0;!0;){s=this.cr(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hN(t+1)-1}}
A.dE.prototype={
C:function(a){return"rgb("+H.x(this.b)+", "+H.x(this.c)+", "+H.x(this.d)+", "+H.x(this.a)+")"},
hX:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aw()
s=this.c
if(typeof s!=="number")return s.aw()
r=this.d
if(typeof r!=="number")return r.aw()
q=this.a
if(typeof q!=="number")return H.a7(q)
return(t<<24|s<<16|r<<8|q)>>>0},
S:function(a,b){var t,s
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
ga4:function(a){return this.hX(!0)},
W:function(a,b){var t,s,r,q,p,o,n,m
t=J.ar(b)
if(!!t.$isdE){t=this.b
s=b.b
if(typeof t!=="number")return t.W()
if(typeof s!=="number")return H.a7(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.W()
if(typeof q!=="number")return H.a7(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.W()
if(typeof o!=="number")return H.a7(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.W()
if(typeof m!=="number")return H.a7(m)
return A.fQ(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.am()
s=this.c
if(typeof s!=="number")return s.am()
r=this.d
if(typeof r!=="number")return r.am()
q=this.a
if(typeof q!=="number")return q.am()
return A.rO(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.W()
s=this.c
if(typeof s!=="number")return s.W()
r=this.d
if(typeof r!=="number")return r.W()
return A.fQ(t+b,s+b,r+b,this.a)}throw H.k("Cannot add ["+H.x(t.ga9(b))+" "+H.x(b)+"] to a Colour. Only Colour, double and int are valid.")},
au:function(a,b){var t,s,r,q,p,o,n,m
t=J.ar(b)
if(!!t.$isdE){t=this.b
if(typeof t!=="number")return t.am()
s=b.b
if(typeof s!=="number")return s.am()
r=this.c
if(typeof r!=="number")return r.am()
q=b.c
if(typeof q!=="number")return q.am()
p=this.d
if(typeof p!=="number")return p.am()
o=b.d
if(typeof o!=="number")return o.am()
n=this.a
if(typeof n!=="number")return n.am()
m=b.a
if(typeof m!=="number")return m.am()
return A.rO(t/255*(s/255),r/255*(q/255),p/255*(o/255),n/255*(m/255))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.am()
s=this.c
if(typeof s!=="number")return s.am()
r=this.d
if(typeof r!=="number")return r.am()
q=this.a
if(typeof q!=="number")return q.am()
return A.rO(t/255*b,s/255*b,r/255*b,q/255)}throw H.k("Cannot multiply a Colour by ["+H.x(t.ga9(b))+" "+H.x(b)+"]. Only Colour, double and int are valid.")},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.k("Colour index out of range: "+H.x(b))},
i:function(a,b,c){var t,s
t=J.dx(b)
if(t.a2(b,0)||t.aG(b,3))throw H.k("Colour index out of range: "+H.x(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.a.aa(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.aa(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.a.aa(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.aa(c,0,255)
else if(t.S(b,0)){this.b=C.a.aa(J.kh(J.rz(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.aa(J.kh(J.rz(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kc(c)
if(t.S(b,2)){this.d=C.a.aa(J.kh(s.au(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.aa(J.kh(s.au(c,255)),0,255)}},
eQ:function(a,b,c,d){this.b=C.d.aa(C.d.aa(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.aa(C.d.aa(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.aa(C.d.aa(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.aa(J.rA(d,0,255),0,255)}}
A.r7.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.B]}}}
A.mQ.prototype={
$1:function(a){return this.a.ej(a)},
$S:function(){return{func:1,args:[,]}}}
A.mO.prototype={
$1:function(a){this.a.R(0,a).b4(this.b.ghI())},
$S:function(){return{func:1,args:[,]}}}
A.mP.prototype={
$1:function(a){this.a.fX(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.mR.prototype={
$1:function(a){return this.a.aC(0,this.b)},
$S:function(){return{func:1,args:[W.R]}}}
F.hq.prototype={
C:function(a){return this.b}}
F.fc.prototype={
b2:function(a,b){F.EK(a).$1("("+this.c+")["+H.x(C.b.gbc(a.b.split(".")))+"]: "+H.x(b))},
cI:function(a,b){this.b2(C.h,b)},
bX:function(a){},
gH:function(a){return this.c}}
F.tP.prototype={}
O.rt.prototype={
$1:function(a){return H.x(a.aV(1))+" = "+H.x(a.aV(2))+C.c.au("../",this.a)},
$S:function(){return{func:1,args:[P.d2]}}}
O.ru.prototype={
$0:function(){var t=document
J.v0(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.t,null)
t=H.eK(t.querySelector("#voidButton"),"$iseR")
t.toString
W.e5(t,"click",new O.rs(),!1,W.u0)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.eL("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rs.prototype={
$1:function(a){return O.Hj()},
$S:function(){return{func:1,args:[W.R]}}}
R.hb.prototype={}
R.u7.prototype={}
R.u6.prototype={}
A.ns.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.V(0,b)?t.n(0,b):$.$get$u5()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.V(0,b)?t.n(0,b):$.$get$u5()}throw H.k(P.dB(b,"'name' should be a String name or int id only",null))},
gT:function(a){var t=this.a
t=t.gc5(t)
return new H.jq(null,J.cP(t.a),t.b,[H.P(t,0),H.P(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.V(0,b))this.af(0,b)
s=this.fz()
if(typeof s!=="number")return s.av()
if(s>=256)throw H.k(P.dB(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
af:function(a,b){var t,s,r
t=this.a
if(!t.V(0,b))return
s=this.c
r=s.n(0,b)
t.af(0,b)
this.b.af(0,r)
s.af(0,b)
this.d.af(0,r)},
fz:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.V(0,s))return s;++s}}}
A.jy.prototype={
$asn:function(){return[A.dE]},
$isn:1}
Q.jA.prototype={}
A.hE.prototype={
by:function(a){if(a===0)return 0
return this.fA(a)},
hz:function(){return this.by(4294967295)},
fA:function(a){var t,s
t=this.a
if(a>4294967295){s=t.c0()
this.b=C.d.bA(s*4294967295)
return C.d.al(s*a)}else{s=t.by(a)
this.b=s
return s}},
c8:function(a){var t=a==null
this.a=t?C.K:P.G9(a)
if(!t)this.b=J.e6(a,1)},
hG:function(a,b){var t=J.bc(a)
if(t.gY(a))return
if(!!t.$iscx)return t.at(a,this.a.c0())
return t.U(a,this.by(t.gm(a)))},
ei:function(a){return this.hG(a,!0)}}
Y.dM.prototype={
cA:function(a){var t,s
if(this.b!=null)throw H.k("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bj(0,$.am,null,t)
this.c.push(new P.dT(s,t))
return s},
ej:function(a){var t,s,r
if(this.b!=null)throw H.k("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bT)(t),++r)t[r].aC(0,this.b)
C.b.sm(t,0)}}
V.lf.prototype={
$4:function(a,b,c,d){return V.z1(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bh,P.bh,O.cS]}}}
V.le.prototype={
$4:function(a,b,c,d){return V.z0(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.C,P.C,O.cS]}}}
V.ld.prototype={
$4:function(a,b,c,d){return V.yY(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bh,P.bh,O.cS]}}}
V.lc.prototype={
$4:function(a,b,c,d){return V.yX(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.C,P.C,O.cS]}}}
O.cS.prototype={
hO:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
i1:function(a,b,c,d){var t,s,r,q,p
t=J.aR(d)
s=0
while(!0){r=t.geb(d)
if(typeof r!=="number")return H.a7(r)
if(!(s<r))break
q=(C.a.d8(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.v(r,q)
r[q]=p;++s}}}
D.og.prototype={
$1:function(a){return a.ghH()},
$S:function(){return{func:1,args:[D.cF]}}}
D.cF.prototype={
C:function(a){return this.a},
gH:function(a){return this.a},
ghH:function(){return this.d}}
D.jS.prototype={}
D.nP.prototype={}
B.oN.prototype={
hF:function(a,b){var t
if(!this.d)this.hM()
t=this.ds(a)
if(t==null){$.$get$fp().bX("Root list '"+a+"' not found")
return"["+a+"]"}return this.dH(J.y3(t,b),P.bX(P.B,B.cV))},
hE:function(a){return this.hF(a,null)},
bh:function(a){var t=0,s=P.bp(),r,q=this,p,o,n,m
var $async$bh=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q.a
if(p.ab(0,a)){p=$.$get$fp()
H.x(a)
p.toString
t=1
break}p.h(0,a)
t=3
return P.cs(A.e0("wordlists/"+H.x(a)+".words",!1,!1,null),$async$bh)
case 3:o=c
q.b.bo(0,o.ghv())
p=o.a,n=p.length,m=0
case 4:if(!(m<p.length)){t=6
break}t=7
return P.cs(q.bh(p[m]),$async$bh)
case 7:case 5:p.length===n||(0,H.bT)(p),++m
t=4
break
case 6:q.d=!1
case 1:return P.bs(r,s)}})
return P.bt($async$bh,s)},
hM:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
$.$get$fp().bX("Processing word lists")
this.d=!0
t=this.c
t.ba(0)
for(s=this.b,r=s.gaD(s),r=r.gT(r);r.G();){q=r.gN()
p=B.FX(s.n(0,q))
t.i(0,q,p)
for(o=p.d,n=o.gaD(o),n=n.gT(n),m=[H.as(p,"aM",0)];n.G();){l=n.gN()
for(k=new H.dL(p,p.gm(p),0,null,m);k.G();){j=k.d
if(!j.gbQ().V(0,l)){i=o.n(0,l)
j.a.i(0,l,i)}}}}for(s=t.gaD(t),s=s.gT(s);s.G();){p=t.n(0,s.gN())
p.hL(t)
for(r=new H.dL(p,p.gm(p),0,null,[H.as(p,"aM",0)]),o=p.d;r.G();){h=r.d
for(n=o.gaD(o),n=n.gT(n);n.G();){l=n.gN()
if(!h.gbQ().V(0,l))h.a.i(0,l,o.n(0,l))}for(n=h.gbQ(),n=n.gaD(n),n=n.gT(n);n.G();){g=n.gN()
m=h.a
m.i(0,g,J.rE(m.n(0,g),$.$get$wI(),new B.oP(h)))}}}},
ds:function(a){var t,s
t=this.c
if(!t.V(0,a)){$.$get$fp().bX("List '"+H.x(a)+"' not found")
return}s=t.n(0,a)
return this.e.ei(s)},
dH:function(a,b){return J.rE(a,$.$get$wH(),new B.oO(this,b))}}
B.oP.prototype={
$1:function(a){var t,s
t=a.aV(1)
s=this.a
if(!s.a.V(0,t))return"["+H.x(t)+"]"
return s.a.n(0,t)},
$S:function(){return{func:1,args:[P.d2]}}}
B.oO.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=a.aV(1)
s=$.$get$wJ().aQ(0,t)
s=H.df(s,B.i4(),H.as(s,"n",0),null)
r=P.d1(s,!0,H.as(s,"n",0))
if(0>=r.length)return H.v(r,0)
q=J.dW(r[0],"@")
s=q.length
p=s>1?q[1]:null
o=this.a
if(0>=s)return H.v(q,0)
n=o.ds(q[0])
s=r.length
if(s>1){for(s=this.b,m=n,l=1;k=r.length,l<k;++l){q=J.dW(r[l],"@")
if(0>=q.length)return H.v(q,0)
if(J.b_(q[0],"var")){if(q.length<2)continue
j=q[1]
if(s.V(0,j))m=s.n(0,j)
else s.i(0,j,m)}}s=k}else m=n
if(m==null){if(0>=s)return H.v(r,0)
return"["+H.x(r[0])+"]"}s=J.aR(m)
i=s.at(m,p)
if(i==null){$.$get$fp().bX("Missing variant '"+H.x(p)+"' for word '"+H.x(m)+"', falling back to base")
i=s.bk(m)}return o.dH(i,this.b)},
$S:function(){return{func:1,args:[P.d2]}}}
B.cV.prototype={
at:function(a,b){if(b==null)b="MAIN"
if(this.a.V(0,b))return this.a.n(0,b)
return},
bk:function(a){return this.at(a,null)},
C:function(a){return"[Word: "+H.x(this.bk(0))+"]"},
gbQ:function(){return this.a}}
B.eC.prototype={
C:function(a){return"WordList '"+H.x(this.e)+"': "+this.eN(0)},
ek:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
if(this.f)return
this.f=!0
b=P.a4(null,null,null,B.eC)
b.h(0,this)
for(t=this.c,s=t.gaD(t),s=s.gT(s),r=this.e;s.G();){q=s.gN()
if(a.V(0,q)){p=a.n(0,q)
if(b.ab(0,p)){$.$get$fp().b2(C.i,"Include loop detected in list '"+H.x(r)+"', already visited '"+H.x(p.e)+"', ignoring")
continue}p.ek(a,b)}}for(s=t.gaD(t),s=s.gT(s),r=[H.as(this,"cx",0)];s.G();){q=s.gN()
if(!a.V(0,q))continue
for(o=a.n(0,q).b,n=o.length,m=0;m<o.length;o.length===n||(0,H.bT)(o),++m){l=o[m]
k=J.aR(l)
j=k.gX(l)
k=J.rz(k.gb7(l),t.n(0,q))
C.b.h(this.b,new Q.h(j,this.k(j,J.rF(k)),r))}}},
hL:function(a){return this.ek(a,null)},
$isp:1,
$asp:function(){return[B.cV]},
$asdS:function(){return[B.cV]},
$ashR:function(){return[B.cV]},
$ascx:function(){return[B.cV]},
$asn:function(){return[B.cV]},
$asr:function(){return[B.cV]},
gcL:function(){return this.c},
gh3:function(){return this.d},
gH:function(a){return this.e}}
B.hT.prototype={
C:function(a){return"[WordListFile: "+this.b.C(0)+" ]"},
gcL:function(){return this.a},
ghv:function(){return this.b}}
S.fh.prototype={}
S.uz.prototype={}
S.uA.prototype={}
S.uB.prototype={}
S.rX.prototype={}
S.t_.prototype={}
S.rN.prototype={}
S.ui.prototype={}
S.uD.prototype={}
S.uE.prototype={}
S.kG.prototype={}
S.ua.prototype={}
S.u4.prototype={}
S.mH.prototype={}
S.rS.prototype={}
S.rI.prototype={}
S.kZ.prototype={}
S.tQ.prototype={}
S.l_.prototype={}
S.nu.prototype={}
S.up.prototype={}
S.um.prototype={}
S.uq.prototype={}
S.rH.prototype={}
S.lW.prototype={}
S.kE.prototype={}
S.rM.prototype={}
S.rL.prototype={}
S.ub.prototype={}
S.ur.prototype={}
S.uc.prototype={}
S.rZ.prototype={}
S.rY.prototype={}
S.uo.prototype={}
S.un.prototype={}
S.oU.prototype={}
S.uu.prototype={}
S.rP.prototype={}
S.rQ.prototype={}
S.uC.prototype={}
S.hs.prototype={}
S.tW.prototype={}
S.tX.prototype={}
S.tY.prototype={}
S.tZ.prototype={}
S.uj.prototype={}
S.uk.prototype={}
S.ul.prototype={}
S.tV.prototype={}
S.u1.prototype={}
S.u2.prototype={}
S.tc.prototype={}
S.td.prototype={}
S.te.prototype={}
S.u3.prototype={}
S.u_.prototype={}
S.rJ.prototype={}
S.uw.prototype={}
S.ux.prototype={}
S.uv.prototype={}
Z.tK.prototype={}
Z.tG.prototype={}
Z.tH.prototype={}
Q.cx.prototype={
at:function(a,b){var t,s,r,q,p,o,n
t=this.d_()
s=J.rA(b,0,1)*t
for(r=J.cP(this.gbi()),q=0;r.G();){p=r.gN()
o=J.aR(p)
n=o.gb7(p)
if(typeof n!=="number")return H.a7(n)
q+=n
if(s<=q)return o.gX(p)}return},
d_:function(){var t,s,r
for(t=J.cP(this.gbi()),s=0;t.G();){r=J.y1(t.gN())
if(typeof r!=="number")return H.a7(r)
s+=r}return s},
k:function(a,b){return b},
C:function(a){return J.cI(this.gbi())},
ay:function(a,b){return Q.uG(this,b,H.as(this,"cx",0),null)},
a1:function(a,b){return Q.uF(this,!1,!0,null,H.as(this,"cx",0))},
aq:function(a){return this.a1(a,!0)},
$isn:1,
$asn:null}
Q.dS.prototype={
at:function(a,b){var t,s,r,q,p,o,n,m,l
t=this.d_()
s=J.rA(b,0,1)*t
for(r=this.b,q=r.length,p=0,o=0;o<r.length;r.length===q||(0,H.bT)(r),++o){n=r[o]
m=J.aR(n)
l=m.gb7(n)
if(typeof l!=="number")return H.a7(l)
p+=l
if(s<=p)return m.gX(n)}return},
gbi:function(){return this.b},
bR:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.rF(c)),[H.as(this,"cx",0)]))},
h:function(a,b){return this.bR(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return J.uZ(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.v(t,b)
t[b]=new Q.h(c,s,[H.as(this,"cx",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
C:function(a){return P.jk(this.b,"[","]")},
ay:function(a,b){return Q.uG(this,b,H.as(this,"dS",0),null)},
a1:function(a,b){return Q.uF(this,!1,!0,null,H.as(this,"dS",0))},
aq:function(a){return this.a1(a,!0)},
ca:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hR.prototype={$ascx:null,$asn:null,$asp:null,$asr:null,$isp:1,$isr:1,$isn:1}
Q.h.prototype={
C:function(a){return"("+H.x(this.a)+" @ "+H.x(this.b)+")"},
gX:function(a){return this.a},
gb7:function(a){return this.b}}
Q.eE.prototype={
gbi:function(){return this.b},
gT:function(a){var t=new Q.pn(null,[H.as(this,"eE",0)])
t.a=J.cP(this.b)
return t},
gm:function(a){return J.bZ(this.b)},
C:function(a){return J.cI(this.b)},
ay:function(a,b){return Q.uG(this,b,H.as(this,"eE",0),null)},
a1:function(a,b){return Q.uF(this,!1,!0,null,H.as(this,"eE",0))},
aq:function(a){return this.a1(a,!0)}}
Q.hQ.prototype={$ascx:null,$asn:null,$isn:1}
Q.pn.prototype={
gN:function(){return J.uZ(this.a.gN())},
G:function(){return this.a.G()}}
Q.jP.prototype={
$aseE:function(a,b){return[b]},
$ashQ:function(a,b){return[b]},
$ascx:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.po.prototype={
$1:function(a){var t=J.aR(a)
return new Q.h(this.c.$1(t.gX(a)),t.gb7(a),[this.b])},
$S:function(){return H.eJ(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jP")}}
J.f.prototype.eL=J.f.prototype.C
J.hl.prototype.eM=J.hl.prototype.C
P.di.prototype.eO=P.di.prototype.bI
P.di.prototype.eP=P.di.prototype.bH
P.aM.prototype.d7=P.aM.prototype.a7
Q.dS.prototype.eN=Q.dS.prototype.C;(function installTearOffs(){installTearOff(H.fu.prototype,"ght",0,0,0,null,["$0"],["bZ"],1)
installTearOff(H.dw.prototype,"gey",0,0,0,null,["$1"],["az"],11)
installTearOff(H.eF.prototype,"gh6",0,0,0,null,["$1"],["aZ"],11)
installTearOff(H,"xl",1,0,0,null,["$1"],["GA"],8)
installTearOff(P,"GD",1,0,0,null,["$1"],["G0"],6)
installTearOff(P,"GE",1,0,0,null,["$1"],["G1"],6)
installTearOff(P,"GF",1,0,0,null,["$1"],["G2"],6)
installTearOff(P,"xx",1,0,0,null,["$0"],["Gz"],1)
installTearOff(P.jW.prototype,"gdW",0,0,0,null,["$2","$1"],["cF","bq"],12)
installTearOff(P.bj.prototype,"gbd",0,0,0,null,["$2","$1"],["ao","f8"],12)
var t
installTearOff(t=P.di.prototype,"gdE",0,0,0,null,["$0"],["bL"],1)
installTearOff(t,"gdF",0,0,0,null,["$0"],["bM"],1)
installTearOff(t=P.hW.prototype,"gdE",0,0,0,null,["$0"],["bL"],1)
installTearOff(t,"gdF",0,0,0,null,["$0"],["bM"],1)
installTearOff(t,"gfk",0,0,0,null,["$1"],["fl"],function(){return H.eJ(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hW")})
installTearOff(t,"gfo",0,0,0,null,["$2"],["fp"],14)
installTearOff(t,"gfm",0,0,0,null,["$0"],["fn"],1)
installTearOff(P.k1.prototype,"gfY",0,1,0,null,["$1"],["ab"],29)
installTearOff(P,"GO",1,0,0,null,["$2"],["yG"],30)
installTearOff(P,"GP",1,0,0,null,["$1"],["fB"],4)
installTearOff(t=W.i8.prototype,"gas",0,1,0,null,["$1"],["cI"],4)
installTearOff(t,"gho",0,0,0,null,["$1"],["e8"],4)
installTearOff(t,"ghZ",0,0,0,null,["$1"],["i_"],4)
installTearOff(W.eU.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.ib.prototype,"gX",0,1,0,null,["$1"],["J"],32)
installTearOff(W.ih.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.ii.prototype,"gX",0,1,0,null,["$1"],["J"],8)
installTearOff(W.ij.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.f2.prototype,"gX",0,1,0,null,["$1"],["J"],13)
installTearOff(W.iy.prototype,"gX",0,1,0,null,["$1"],["J"],9)
installTearOff(W.f4.prototype,"gX",0,1,0,null,["$1"],["J"],7)
installTearOff(W.iA.prototype,"gX",0,1,0,null,["$1"],["J"],7)
installTearOff(W.jr.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.js.prototype,"gX",0,1,0,null,["$1"],["J"],10)
installTearOff(W.cf.prototype,"gX",0,1,0,null,["$1"],["J"],10)
installTearOff(W.jC.prototype,"gX",0,1,0,null,["$1"],["J"],15)
installTearOff(W.jF.prototype,"gX",0,1,0,null,["$1"],["J"],9)
installTearOff(W.jH.prototype,"gX",0,1,0,null,["$1"],["J"],16)
installTearOff(W.jI.prototype,"gX",0,1,0,null,["$1"],["J"],17)
installTearOff(W.ch.prototype,"gX",0,1,0,null,["$1"],["J"],18)
installTearOff(W.jM.prototype,"gX",0,1,0,null,["$1"],["J"],19)
installTearOff(W.jN.prototype,"gX",0,1,0,null,["$1"],["J"],20)
installTearOff(W.jO.prototype,"gX",0,1,0,null,["$1"],["J"],21)
installTearOff(W.hU.prototype,"gX",0,1,0,null,["$1"],["J"],22)
installTearOff(W.jX.prototype,"gX",0,1,0,null,["$1"],["J"],33)
installTearOff(W.k0.prototype,"gX",0,1,0,null,["$1"],["J"],24)
installTearOff(W.hZ.prototype,"gX",0,1,0,null,["$1"],["J"],25)
installTearOff(W.k4.prototype,"gX",0,1,0,null,["$1"],["J"],26)
installTearOff(W.k6.prototype,"gX",0,1,0,null,["$1"],["J"],27)
installTearOff(P.jJ.prototype,"gX",0,1,0,null,["$1"],["J"],28)
installTearOff(V,"v6",1,0,0,null,["$0"],["H5"],1)
installTearOff(R,"er",1,0,0,null,["$1"],["Fk"],0)
installTearOff(R,"wy",1,0,0,null,["$1"],["F8"],0)
installTearOff(R,"uh",1,0,0,null,["$1"],["Fj"],0)
installTearOff(R,"bR",1,0,0,null,["$1"],["Fi"],0)
installTearOff(R,"ug",1,0,0,null,["$1"],["Fh"],0)
installTearOff(R,"wA",1,0,0,null,["$1"],["Ff"],0)
installTearOff(R,"hD",1,0,0,null,["$1"],["Fe"],0)
installTearOff(R,"eq",1,0,0,null,["$1"],["Fb"],0)
installTearOff(R,"e2",1,0,0,null,["$1"],["Fd"],0)
installTearOff(R,"fj",1,0,0,null,["$1"],["Fg"],0)
installTearOff(R,"uf",1,0,0,null,["$1"],["Fc"],0)
installTearOff(R,"y",1,0,0,null,["$1"],["F9"],0)
installTearOff(R,"wz",1,0,0,null,["$1"],["Fa"],0)
installTearOff(F.fc.prototype,"gas",0,1,0,null,["$1"],["cI"],4)
installTearOff(O,"H7",1,0,0,null,["$1"],["H9"],31)
installTearOff(Y.dM.prototype,"ghI",0,0,0,null,["$1"],["ej"],function(){return H.eJ(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dM")})
installTearOff(V,"Hd",1,0,0,null,["$4"],["z_"],3)
installTearOff(V,"Hc",1,0,0,null,["$4"],["yZ"],2)
installTearOff(B,"i4",1,0,0,null,["$1"],["Gu"],23)
installTearOff(T,"GJ",1,0,0,null,["$4"],["yQ"],3)
installTearOff(T,"GI",1,0,0,null,["$4"],["yP"],2)
installTearOff(T,"GH",1,0,0,null,["$4"],["yO"],3)
installTearOff(T,"GG",1,0,0,null,["$4"],["yN"],2)
installTearOff(F,"GX",1,0,0,null,["$4"],["yW"],3)
installTearOff(F,"GW",1,0,0,null,["$4"],["yV"],2)
installTearOff(F,"GV",1,0,0,null,["$4"],["yU"],3)
installTearOff(F,"GU",1,0,0,null,["$4"],["yT"],2)
installTearOff(F,"GT",1,0,0,null,["$4"],["yS"],3)
installTearOff(F,"GS",1,0,0,null,["$4"],["yR"],2)})();(function inheritance(){inherit(P.ab,null)
var t=P.ab
inherit(H.tM,t)
inherit(J.f,t)
inherit(J.i5,t)
inherit(P.hB,t)
inherit(P.n,t)
inherit(H.dL,t)
inherit(P.jm,t)
inherit(H.iw,t)
inherit(H.p6,t)
inherit(H.eS,t)
inherit(H.qn,t)
inherit(H.fu,t)
inherit(H.pU,t)
inherit(H.eH,t)
inherit(H.qm,t)
inherit(H.pH,t)
inherit(H.fk,t)
inherit(H.oY,t)
inherit(H.dC,t)
inherit(H.dw,t)
inherit(H.eF,t)
inherit(H.kN,t)
inherit(H.nO,t)
inherit(H.p3,t)
inherit(P.eb,t)
inherit(H.h3,t)
inherit(H.k5,t)
inherit(H.dR,t)
inherit(H.w,t)
inherit(H.mI,t)
inherit(H.mK,t)
inherit(H.hk,t)
inherit(H.k3,t)
inherit(H.jU,t)
inherit(H.jL,t)
inherit(H.qG,t)
inherit(P.cD,t)
inherit(P.eT,t)
inherit(P.jW,t)
inherit(P.k_,t)
inherit(P.bj,t)
inherit(P.jV,t)
inherit(P.dh,t)
inherit(P.oi,t)
inherit(P.di,t)
inherit(P.jY,t)
inherit(P.pP,t)
inherit(P.qq,t)
inherit(P.qE,t)
inherit(P.eN,t)
inherit(P.qT,t)
inherit(P.qd,t)
inherit(P.qf,t)
inherit(P.o3,t)
inherit(P.qk,t)
inherit(P.dv,t)
inherit(P.fa,t)
inherit(P.aM,t)
inherit(P.qL,t)
inherit(P.mZ,t)
inherit(P.ql,t)
inherit(P.fP,t)
inherit(P.fR,t)
inherit(P.qN,t)
inherit(P.d9,t)
inherit(P.bF,t)
inherit(P.dF,t)
inherit(P.dl,t)
inherit(P.dG,t)
inherit(P.no,t)
inherit(P.jK,t)
inherit(P.pZ,t)
inherit(P.bJ,t)
inherit(P.li,t)
inherit(P.p,t)
inherit(P.bl,t)
inherit(P.d3,t)
inherit(P.d2,t)
inherit(P.dO,t)
inherit(P.B,t)
inherit(P.c9,t)
inherit(P.eB,t)
inherit(P.k8,t)
inherit(P.p7,t)
inherit(P.qC,t)
inherit(W.i8,t)
inherit(W.jx,t)
inherit(W.ia,t)
inherit(P.kR,t)
inherit(W.bx,t)
inherit(W.lO,t)
inherit(W.qK,t)
inherit(P.qH,t)
inherit(P.pA,t)
inherit(P.qj,t)
inherit(P.qs,t)
inherit(P.qt,t)
inherit(P.bh,t)
inherit(P.d8,t)
inherit(T.fG,t)
inherit(T.db,t)
inherit(T.hf,t)
inherit(T.nq,t)
inherit(T.pw,t)
inherit(T.px,t)
inherit(T.py,t)
inherit(T.pv,t)
inherit(T.m5,t)
inherit(T.iB,t)
inherit(B.hg,t)
inherit(N.a8,t)
inherit(L.fH,t)
inherit(A.jy,t)
inherit(O.c6,t)
inherit(T.hG,t)
inherit(M.fO,t)
inherit(X.im,t)
inherit(X.i6,t)
inherit(M.h4,t)
inherit(Z.il,t)
inherit(E.nm,t)
inherit(E.M,t)
inherit(A.a1,t)
inherit(U.c,t)
inherit(Y.dN,t)
inherit(K.cE,t)
inherit(X.F,t)
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
inherit(D.cF,t)
inherit(B.oN,t)
inherit(B.cV,t)
inherit(Q.cx,t)
inherit(B.hT,t)
inherit(Q.h,t)
t=J.f
inherit(J.mt,t)
inherit(J.mu,t)
inherit(J.hl,t)
inherit(J.ek,t)
inherit(J.fb,t)
inherit(J.el,t)
inherit(H.fe,t)
inherit(H.eo,t)
inherit(W.aF,t)
inherit(W.cJ,t)
inherit(W.eQ,t)
inherit(W.kI,t)
inherit(W.fS,t)
inherit(W.kQ,t)
inherit(W.bI,t)
inherit(W.iC,t)
inherit(W.l1,t)
inherit(W.eV,t)
inherit(W.ib,t)
inherit(W.ie,t)
inherit(W.l4,t)
inherit(W.ig,t)
inherit(W.iD,t)
inherit(W.ii,t)
inherit(W.ij,t)
inherit(W.fX,t)
inherit(W.R,t)
inherit(W.iE,t)
inherit(W.lL,t)
inherit(W.lP,t)
inherit(W.lS,t)
inherit(W.cm,t)
inherit(W.m0,t)
inherit(W.iF,t)
inherit(W.he,t)
inherit(W.e3,t)
inherit(W.mT,t)
inherit(W.jr,t)
inherit(W.co,t)
inherit(W.iP,t)
inherit(W.ng,t)
inherit(W.nh,t)
inherit(W.iQ,t)
inherit(W.nv,t)
inherit(W.e1,t)
inherit(W.e4,t)
inherit(W.cf,t)
inherit(W.iR,t)
inherit(W.o1,t)
inherit(W.cq,t)
inherit(W.iS,t)
inherit(W.fm,t)
inherit(W.ch,t)
inherit(W.od,t)
inherit(W.oh,t)
inherit(W.oE,t)
inherit(W.cj,t)
inherit(W.iT,t)
inherit(W.oX,t)
inherit(W.cr,t)
inherit(W.iU,t)
inherit(W.fq,t)
inherit(W.jN,t)
inherit(W.pc,t)
inherit(W.pd,t)
inherit(W.fr,t)
inherit(W.jO,t)
inherit(W.pK,t)
inherit(W.iV,t)
inherit(W.iW,t)
inherit(W.iG,t)
inherit(W.iH,t)
inherit(W.iI,t)
inherit(W.iJ,t)
inherit(W.qR,t)
inherit(W.qS,t)
inherit(P.ma,t)
inherit(P.nl,t)
inherit(P.d0,t)
inherit(P.iK,t)
inherit(P.d4,t)
inherit(P.iL,t)
inherit(P.nD,t)
inherit(P.iM,t)
inherit(P.d7,t)
inherit(P.iN,t)
inherit(P.pj,t)
inherit(P.fJ,t)
inherit(P.kl,t)
inherit(P.nQ,t)
inherit(P.qQ,t)
inherit(P.iO,t)
t=J.hl
inherit(J.nB,t)
inherit(J.eA,t)
inherit(J.em,t)
inherit(F.tP,t)
inherit(R.hb,t)
inherit(R.u7,t)
inherit(R.u6,t)
inherit(S.fh,t)
inherit(S.uz,t)
inherit(S.uA,t)
inherit(S.uB,t)
inherit(S.rX,t)
inherit(S.t_,t)
inherit(S.rN,t)
inherit(S.uD,t)
inherit(S.uE,t)
inherit(S.kZ,t)
inherit(S.up,t)
inherit(S.uq,t)
inherit(S.rH,t)
inherit(S.lW,t)
inherit(S.kE,t)
inherit(S.rM,t)
inherit(S.rL,t)
inherit(S.rZ,t)
inherit(S.oU,t)
inherit(S.rQ,t)
inherit(S.hs,t)
inherit(S.tX,t)
inherit(S.tZ,t)
inherit(S.uk,t)
inherit(S.ul,t)
inherit(S.u1,t)
inherit(S.u2,t)
inherit(S.td,t)
inherit(S.te,t)
inherit(S.u3,t)
inherit(S.u_,t)
inherit(S.rJ,t)
inherit(S.uw,t)
inherit(S.ux,t)
inherit(S.uv,t)
inherit(Z.tK,t)
inherit(Z.tG,t)
inherit(Z.tH,t)
inherit(J.tL,J.ek)
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
inherit(H.qF,t)
t=H.r
inherit(H.en,t)
inherit(H.mJ,t)
inherit(P.qe,t)
inherit(P.eu,t)
t=H.en
inherit(H.oF,t)
inherit(H.fd,t)
inherit(P.mM,t)
inherit(H.fW,H.hr)
t=P.jm
inherit(H.jq,t)
inherit(H.jQ,t)
inherit(Q.pn,t)
t=H.eS
inherit(H.rw,t)
inherit(H.rx,t)
inherit(H.qi,t)
inherit(H.pV,t)
inherit(H.me,t)
inherit(H.mf,t)
inherit(H.qp,t)
inherit(H.oZ,t)
inherit(H.p_,t)
inherit(H.ry,t)
inherit(H.rl,t)
inherit(H.rm,t)
inherit(H.rn,t)
inherit(H.ro,t)
inherit(H.rp,t)
inherit(H.oJ,t)
inherit(H.mx,t)
inherit(H.mw,t)
inherit(H.rh,t)
inherit(H.ri,t)
inherit(H.rj,t)
inherit(P.pE,t)
inherit(P.pD,t)
inherit(P.pF,t)
inherit(P.pG,t)
inherit(P.qU,t)
inherit(P.qV,t)
inherit(P.r4,t)
inherit(P.r6,t)
inherit(P.lV,t)
inherit(P.lU,t)
inherit(P.q_,t)
inherit(P.q7,t)
inherit(P.q3,t)
inherit(P.q4,t)
inherit(P.q5,t)
inherit(P.q1,t)
inherit(P.q6,t)
inherit(P.q0,t)
inherit(P.qa,t)
inherit(P.qb,t)
inherit(P.q9,t)
inherit(P.q8,t)
inherit(P.ol,t)
inherit(P.oj,t)
inherit(P.ok,t)
inherit(P.om,t)
inherit(P.or,t)
inherit(P.op,t)
inherit(P.oq,t)
inherit(P.os,t)
inherit(P.ov,t)
inherit(P.ow,t)
inherit(P.ot,t)
inherit(P.ou,t)
inherit(P.ox,t)
inherit(P.oy,t)
inherit(P.on,t)
inherit(P.oo,t)
inherit(P.pJ,t)
inherit(P.pI,t)
inherit(P.qr,t)
inherit(P.qX,t)
inherit(P.qW,t)
inherit(P.qY,t)
inherit(P.r3,t)
inherit(P.qv,t)
inherit(P.qw,t)
inherit(P.qx,t)
inherit(P.qg,t)
inherit(P.n_,t)
inherit(P.qP,t)
inherit(P.qO,t)
inherit(P.l8,t)
inherit(P.l9,t)
inherit(P.pb,t)
inherit(P.p8,t)
inherit(P.p9,t)
inherit(P.pa,t)
inherit(P.r5,t)
inherit(P.r0,t)
inherit(P.r_,t)
inherit(P.r1,t)
inherit(P.r2,t)
inherit(W.pM,t)
inherit(W.m3,t)
inherit(W.m4,t)
inherit(W.pY,t)
inherit(P.qJ,t)
inherit(P.pB,t)
inherit(P.r8,t)
inherit(P.r9,t)
inherit(P.ra,t)
inherit(P.kS,t)
inherit(P.qZ,t)
inherit(P.kr,t)
inherit(P.ks,t)
inherit(V.rc,t)
inherit(V.rd,t)
inherit(O.kz,t)
inherit(A.ms,t)
inherit(A.mr,t)
inherit(G.mp,t)
inherit(U.pr,t)
inherit(U.ps,t)
inherit(A.r7,t)
inherit(A.mQ,t)
inherit(A.mO,t)
inherit(A.mP,t)
inherit(A.mR,t)
inherit(O.rt,t)
inherit(O.ru,t)
inherit(O.rs,t)
inherit(V.lf,t)
inherit(V.le,t)
inherit(V.ld,t)
inherit(V.lc,t)
inherit(D.og,t)
inherit(B.oP,t)
inherit(B.oO,t)
inherit(Q.po,t)
t=H.pH
inherit(H.fv,t)
inherit(H.i0,t)
inherit(H.kO,H.kN)
t=P.eb
inherit(H.jw,t)
inherit(H.my,t)
inherit(H.p5,t)
inherit(H.kH,t)
inherit(H.nT,t)
inherit(P.fg,t)
inherit(P.cX,t)
inherit(P.U,t)
inherit(P.ez,t)
inherit(P.dP,t)
inherit(P.bM,t)
inherit(P.l0,t)
t=H.oJ
inherit(H.of,t)
inherit(H.fL,t)
t=P.hj
inherit(H.pC,t)
inherit(T.fF,t)
t=H.eo
inherit(H.n8,t)
inherit(H.jt,t)
t=H.jt
inherit(H.hx,t)
inherit(H.hy,t)
inherit(H.hz,H.hx)
inherit(H.hv,H.hz)
inherit(H.hA,H.hy)
inherit(H.hw,H.hA)
t=H.hv
inherit(H.n9,t)
inherit(H.na,t)
t=H.hw
inherit(H.nb,t)
inherit(H.nc,t)
inherit(H.nd,t)
inherit(H.ne,t)
inherit(H.nf,t)
inherit(H.ju,t)
inherit(H.ff,t)
t=P.jW
inherit(P.dT,t)
inherit(P.k7,t)
t=P.jY
inherit(P.pO,t)
inherit(P.pQ,t)
inherit(P.qD,P.qq)
t=P.dh
inherit(P.hV,t)
inherit(W.pW,t)
inherit(P.hW,P.di)
inherit(P.qo,P.hV)
inherit(P.qu,P.qT)
inherit(P.k2,H.w)
inherit(P.o2,P.o3)
inherit(P.qh,P.o2)
inherit(P.k1,P.qh)
inherit(P.hP,P.mZ)
t=P.fP
inherit(P.kw,t)
inherit(P.lb,t)
t=P.fR
inherit(P.kx,t)
inherit(P.pg,t)
inherit(P.pf,P.lb)
t=P.dl
inherit(P.V,t)
inherit(P.C,t)
t=P.cX
inherit(P.et,t)
inherit(P.mb,t)
inherit(P.pN,P.k8)
t=W.aF
inherit(W.az,t)
inherit(W.fY,t)
inherit(W.kM,t)
inherit(W.lK,t)
inherit(W.lM,t)
inherit(W.lQ,t)
inherit(W.hd,t)
inherit(W.hu,t)
inherit(W.nF,t)
inherit(W.jE,t)
inherit(W.o4,t)
inherit(W.eD,t)
inherit(W.cp,t)
inherit(W.fZ,t)
inherit(W.cO,t)
inherit(W.cG,t)
inherit(W.h_,t)
inherit(W.ph,t)
inherit(W.pm,t)
inherit(W.jR,t)
inherit(W.pt,t)
inherit(W.qB,t)
inherit(P.l2,t)
inherit(P.hF,t)
inherit(P.p1,t)
inherit(P.bC,t)
inherit(P.fK,t)
t=W.az
inherit(W.dp,t)
inherit(W.e9,t)
inherit(W.ea,t)
inherit(W.id,t)
inherit(W.fs,t)
inherit(W.pR,t)
t=W.dp
inherit(W.at,t)
inherit(P.ca,t)
t=W.at
inherit(W.eM,t)
inherit(W.km,t)
inherit(W.ht,t)
inherit(W.ky,t)
inherit(W.kB,t)
inherit(W.eR,t)
inherit(W.fV,t)
inherit(W.la,t)
inherit(W.lJ,t)
inherit(W.iy,t)
inherit(W.m7,t)
inherit(W.f6,t)
inherit(W.mc,t)
inherit(W.mB,t)
inherit(W.hn,t)
inherit(W.mY,t)
inherit(W.n2,t)
inherit(W.nk,t)
inherit(W.np,t)
inherit(W.nt,t)
inherit(W.fl,t)
inherit(W.jF,t)
inherit(W.o6,t)
inherit(W.o9,t)
inherit(W.hH,t)
inherit(W.oL,t)
inherit(W.hM,t)
inherit(W.p0,t)
inherit(W.qc,t)
inherit(W.eP,W.ht)
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
inherit(W.eU,W.iC)
inherit(W.pL,W.jx)
inherit(W.iX,W.iD)
inherit(W.ih,W.iX)
t=W.R
inherit(W.lg,t)
inherit(W.ob,t)
inherit(W.oc,t)
inherit(W.cd,W.eQ)
inherit(W.iY,W.iE)
inherit(W.f2,W.iY)
inherit(W.iZ,W.iF)
inherit(W.f4,W.iZ)
inherit(W.iA,W.f4)
inherit(W.e_,W.hd)
inherit(W.hm,W.e3)
inherit(W.n3,W.hu)
inherit(W.j8,W.iP)
inherit(W.js,W.j8)
inherit(W.j9,W.iQ)
inherit(W.jv,W.j9)
inherit(W.nA,W.e4)
inherit(W.ja,W.iR)
inherit(W.jC,W.ja)
inherit(W.o5,W.eD)
inherit(W.h1,W.fZ)
inherit(W.jH,W.h1)
inherit(W.jb,W.iS)
inherit(W.jI,W.jb)
inherit(W.jc,W.iT)
inherit(W.oS,W.jc)
inherit(W.h2,W.h_)
inherit(W.oT,W.h2)
inherit(W.jd,W.iU)
inherit(W.jM,W.jd)
inherit(W.je,W.iV)
inherit(W.hU,W.je)
inherit(W.jf,W.iW)
inherit(W.jX,W.jf)
inherit(W.pS,W.ig)
inherit(W.j_,W.iG)
inherit(W.k0,W.j_)
inherit(W.j0,W.iH)
inherit(W.hZ,W.j0)
inherit(W.j1,W.iI)
inherit(W.k4,W.j1)
inherit(W.j2,W.iJ)
inherit(W.k6,W.j2)
t=P.kR
inherit(W.pT,t)
inherit(P.kq,t)
inherit(W.eG,W.pW)
inherit(W.pX,P.oi)
inherit(P.qI,P.qH)
inherit(P.jT,P.pA)
inherit(P.bS,P.qt)
t=P.ca
inherit(P.cn,t)
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
inherit(P.n0,t)
inherit(P.n1,t)
inherit(P.ny,t)
inherit(P.nZ,t)
inherit(P.oI,t)
inherit(P.pi,t)
inherit(P.hX,t)
inherit(P.qy,t)
inherit(P.qz,t)
inherit(P.qA,t)
t=P.cn
inherit(P.kj,t)
inherit(P.m8,t)
inherit(P.oG,t)
inherit(P.ey,t)
inherit(P.pe,t)
inherit(P.j3,P.iK)
inherit(P.mE,P.j3)
inherit(P.j4,P.iL)
inherit(P.ni,P.j4)
inherit(P.j5,P.iM)
inherit(P.oC,P.j5)
inherit(P.oR,P.ey)
inherit(P.j6,P.iN)
inherit(P.p2,P.j6)
t=P.bC
inherit(P.dX,t)
inherit(P.kP,t)
inherit(P.eO,P.dX)
inherit(P.j7,P.iO)
inherit(P.jJ,P.j7)
t=B.hg
inherit(S.kk,t)
inherit(M.kp,t)
inherit(A.kL,t)
inherit(M.kY,t)
inherit(V.l5,t)
inherit(U.lz,t)
inherit(N.mA,t)
inherit(F.n6,t)
inherit(G.nE,t)
inherit(Q.nS,t)
inherit(N.o8,t)
inherit(D.oK,t)
inherit(V.oM,t)
inherit(F.pu,t)
t=N.a8
inherit(T.l3,t)
inherit(R.nL,t)
t=T.l3
inherit(K.bU,t)
inherit(S.bG,t)
inherit(T.c2,t)
inherit(M.bB,t)
inherit(A.ns,A.jy)
inherit(L.aS,A.ns)
t=O.c6
inherit(O.dm,t)
inherit(O.ik,t)
inherit(O.ex,t)
t=O.dm
inherit(U.kt,t)
inherit(Y.nN,t)
inherit(V.lR,t)
inherit(Q.m9,t)
inherit(Q.nz,t)
inherit(M.oe,t)
inherit(B.pz,t)
t=U.kt
inherit(U.mV,t)
inherit(U.nn,t)
inherit(U.oz,O.ik)
t=U.oz
inherit(U.oA,t)
inherit(U.oB,t)
t=T.hG
inherit(O.kv,t)
inherit(Y.lX,t)
inherit(Y.lY,t)
inherit(B.m_,t)
inherit(X.m6,t)
inherit(S.mC,t)
inherit(Z.mU,t)
inherit(S.mW,t)
inherit(U.mX,t)
inherit(E.n5,t)
inherit(V.nr,t)
inherit(N.nK,t)
inherit(N.nR,t)
inherit(E.nV,t)
inherit(Y.nX,t)
inherit(L.nY,t)
inherit(S.o0,t)
inherit(Y.o7,t)
inherit(R.oH,t)
inherit(U.oV,t)
inherit(E.pl,t)
inherit(M.pp,t)
t=O.ex
inherit(Y.oQ,t)
inherit(Y.kF,t)
inherit(Y.nj,t)
inherit(U.pq,t)
t=L.fH
inherit(T.kA,t)
inherit(T.kD,t)
inherit(U.l6,t)
inherit(Z.l7,t)
inherit(T.lZ,t)
inherit(X.m1,t)
inherit(Z.mz,t)
inherit(Q.mD,t)
inherit(K.mF,t)
inherit(G.mG,t)
inherit(V.n4,t)
inherit(E.nM,t)
inherit(K.nW,t)
inherit(N.oa,t)
inherit(N.oW,t)
inherit(Q.pk,t)
t=S.bG
inherit(S.i7,t)
inherit(S.m2,t)
inherit(E.iz,E.nm)
t=E.M
inherit(E.fI,t)
inherit(E.ko,t)
inherit(Q.nC,Q.m9)
inherit(U.X,U.c)
t=R.nL
inherit(R.Z,t)
inherit(R.Q,t)
inherit(R.a5,t)
inherit(R.bA,R.a5)
t=Y.dN
inherit(Y.ad,t)
inherit(Y.c0,t)
inherit(Y.T,t)
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
inherit(U.ag,A.a1)
t=G.a0
inherit(G.aI,t)
inherit(G.bH,t)
inherit(G.d,t)
inherit(G.af,G.bH)
t=D.cF
inherit(D.jS,t)
inherit(D.nP,t)
t=Q.cx
inherit(Q.hR,t)
inherit(Q.hQ,t)
inherit(Q.dS,Q.hR)
inherit(B.eC,Q.dS)
t=S.fh
inherit(S.ui,t)
inherit(S.kG,t)
inherit(S.mH,t)
inherit(S.tV,t)
inherit(S.tc,t)
t=S.kG
inherit(S.ua,t)
inherit(S.u4,t)
t=S.mH
inherit(S.rS,t)
inherit(S.rI,t)
t=S.kZ
inherit(S.tQ,t)
inherit(S.l_,t)
inherit(S.nu,S.l_)
inherit(S.um,S.nu)
t=S.kE
inherit(S.ub,t)
inherit(S.un,t)
t=S.lW
inherit(S.ur,t)
inherit(S.uc,t)
inherit(S.rY,t)
inherit(S.uo,t)
t=S.oU
inherit(S.uu,t)
inherit(S.rP,t)
inherit(S.uC,t)
t=S.hs
inherit(S.tW,t)
inherit(S.tY,t)
inherit(S.uj,t)
inherit(Q.eE,Q.hQ)
inherit(Q.jP,Q.eE)
mixin(H.hO,H.p6)
mixin(H.hx,P.aM)
mixin(H.hz,H.iw)
mixin(H.hy,P.aM)
mixin(H.hA,H.iw)
mixin(P.hB,P.aM)
mixin(P.hP,P.qL)
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
C.b=J.ek.prototype
C.f=J.jn.prototype
C.a=J.jo.prototype
C.d=J.fb.prototype
C.c=J.el.prototype
C.T=J.em.prototype
C.p=H.ff.prototype
C.F=J.nB.prototype
C.r=J.eA.prototype
C.H=new P.kx(!1)
C.G=new P.kw(C.H)
C.j=new W.i8()
C.I=new P.no()
C.J=new P.pP()
C.K=new P.qj()
C.e=new P.qu()
C.t=new W.qK()
C.o=new P.dG(0)
C.N=function() {
C.u=function(hooks) { return hooks; }
C.O=function(hooks) {
C.P=function(hooks) {
C.Q=function(hooks) {
C.v=function getTagFallback(o) {
C.R=function(hooks) {
C.S=function(getTagFallback) {
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
C.a0=H.bY("bh")
C.a1=H.bY("Hk")
C.q=H.bY("Hl")
C.a2=H.bY("Hm")
C.a3=H.bY("Hn")
C.a4=H.bY("Hp")
C.a5=H.bY("Hq")
C.a6=H.bY("Hr")
C.a7=H.bY("mv")
C.a8=H.bY("d3")
C.a9=H.bY("B")
C.aa=H.bY("Hu")
C.ab=H.bY("Hv")
C.ac=H.bY("Hw")
C.ad=H.bY("d8")
C.ae=H.bY("d9")
C.af=H.bY("V")
C.ag=H.bY("C")
C.ah=H.bY("dl")
C.n=new P.pf(!1)})();(function staticFields(){$.wt="$cachedFunction"
$.wu="$cachedInvocation"
$.dD=0
$.fM=null
$.v7=null
$.uP=null
$.xu=null
$.xI=null
$.rb=null
$.rk=null
$.uQ=null
$.fx=null
$.i1=null
$.i2=null
$.uL=!1
$.am=C.e
$.vn=0
$.vj=null
$.vi=null
$.vh=null
$.vk=null
$.vg=null
$.yu=null
$.yv=null
$.yh=null
$.yi=null
$.yg=null
$.yk=null
$.yq=null
$.yp=null
$.yw=null
$.ys=null
$.yl=null
$.yo=null
$.yj=null
$.yn=null
$.yt=null
$.ym=null
$.yr=null
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
$.ah=1300
$.j=3
$.m=2
$.L=1
$.A=0.1
$.z9=1
$.z8=-1
$.t6=null
$.dY=null
$.vp=null
$.ef=null
$.f0=null
$.ip=null
$.t0=null
$.lC=null
$.t8=null
$.iq=null
$.io=null
$.vr=null
$.iv=null
$.h5=null
$.dK=null
$.vq=null
$.lB=null
$.lI=null
$.eZ=null
$.z6=null
$.z3=null
$.z5=null
$.z7=null
$.ha=null
$.eW=null
$.cw=null
$.cZ=null
$.eY=null
$.lH=null
$.c5=null
$.c4=null
$.t2=null
$.h8=null
$.ee=null
$.z4=null
$.h7=null
$.cC=null
$.dZ=null
$.iu=null
$.dd=null
$.f_=null
$.c_=null
$.lF=null
$.vo=null
$.aN=null
$.cB=null
$.cu=null
$.cc=null
$.lE=null
$.cb=null
$.ds=null
$.dr=null
$.dq=null
$.dH=null
$.dI=null
$.ed=null
$.d_=null
$.h9=null
$.lD=null
$.lA=null
$.cQ=null
$.cv=null
$.bd=null
$.eX=null
$.eg=null
$.lG=null
$.ir=null
$.h6=null
$.t4=null
$.cA=null
$.t7=null
$.t1=null
$.vt=null
$.ec=null
$.cz=null
$.dJ=null
$.de=null
$.f1=null
$.t3=null
$.t5=null
$.vs=null
$.is=null
$.it=null
$.eh=null
$.vu=!1
$.ta=null
$.za=null
$.vw=null
$.vy=null
$.zj=null
$.vx=null
$.zh=null
$.zi=null
$.t9=null
$.ze=null
$.zc=null
$.zd=null
$.zf=null
$.zg=null
$.zt=null
$.zm=null
$.zn=null
$.zo=null
$.zp=null
$.zq=null
$.zr=null
$.zs=null
$.zv=null
$.zw=null
$.zx=null
$.zy=null
$.zz=null
$.zA=null
$.zu=null
$.EQ="JACK"
$.EU="PM"
$.ER="JS"
$.EP="HP"
$.EZ="YD"
$.EW="SI"
$.EX="SU"
$.ES="ME"
$.EV="RB"
$.EN="GN"
$.wn="MP"
$.EL="AR"
$.ET="PE"
$.EM="DP"
$.EY="WV"
$.EO="HB"
$.o="PLAYER1TAG"
$.es="PLAYER2TAG"
$.z="DENIZENTAG"
$.t="CONSORTTAG"
$.J="CONSORTSOUNDTAG"
$.aH="MCGUFFINTAG"
$.ac="TAGPHYSICALMCGUFFIN"
$.cg="TAGWEAPON"
$.Fu=null
$.FG=null
$.Fp=null
$.Fs=null
$.Fx=null
$.FC=null
$.FA=null
$.FJ=null
$.FI=null
$.FB=null
$.FL=null
$.Fw=null
$.FK=null
$.FE=null
$.FD=null
$.FF=null
$.Fr=null
$.Fq=null
$.Fz=null
$.Fy=null
$.Fv=null
$.FH=null
$.Ft=null
$.xA=!1
$.FM=!1
$.wC=null
$.FT=13
$.aq=3
$.bL=2
$.aC=1
$.mq=0
$.H=1
$.a3=3
$.G=4
$.tD=6
$.tE=7
$.aa=8
$.u=9
$.q=10
$.vQ=null
$.f9=null
$.tp=null
$.tz=null
$.tw=null
$.vG=null
$.tk=null
$.tv=null
$.hi=null
$.vO=null
$.w8=null
$.vJ=null
$.vP=null
$.tl=null
$.tu=null
$.wa=null
$.wc=null
$.th=null
$.ji=null
$.jg=null
$.aw=null
$.w2=null
$.tg=null
$.vY=null
$.f8=null
$.vI=null
$.wd=null
$.w9=null
$.w7=null
$.ts=null
$.mj=null
$.ei=null
$.wb=null
$.mh=null
$.tm=null
$.ej=null
$.w5=null
$.dt=null
$.hh=null
$.tC=null
$.w6=null
$.tB=null
$.tx=null
$.ty=null
$.ml=null
$.jh=null
$.A0=null
$.vS=null
$.vX=null
$.w4=null
$.w3=null
$.D=null
$.vM=null
$.mi=null
$.bO=null
$.aY=null
$.bP=null
$.W=null
$.aA=null
$.c8=null
$.K=null
$.O=null
$.av=null
$.aU=null
$.bV=null
$.bi=null
$.bn=null
$.ce=null
$.aQ=null
$.bz=null
$.bQ=null
$.a_=null
$.Ep=null
$.au=null
$.aX=null
$.aL=null
$.ae=null
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
$.a9=null
$.bg=null
$.bq=null
$.aJ=null
$.bf=null
$.ax=null
$.aW=null
$.aG=null
$.Y=null
$.ap=null
$.aB=null
$.aT=null
$.an=null
$.al=null
$.a2=null
$.S=null
$.N=null
$.ai=null
$.aO=null
$.be=null
$.aV=null
$.Bk=null
$.E1=null
$.EA=null
$.AQ=null
$.DZ=null
$.Bl=null
$.vE=null
$.Ed=null
$.Cl=null
$.Bg=null
$.zV=null
$.CW=null
$.mn=null
$.vK=null
$.Dl=null
$.AN=null
$.C4=null
$.AL=null
$.ti=null
$.Aw=null
$.Bx=null
$.AV=null
$.Ce=null
$.El=null
$.Bm=null
$.tj=null
$.Cf=null
$.AT=null
$.AC=null
$.w1=null
$.zO=null
$.vF=null
$.BY=null
$.tq=null
$.CA=null
$.Cu=null
$.zS=null
$.AF=null
$.Dv=null
$.zU=null
$.DY=null
$.C3=null
$.B1=null
$.Df=null
$.DS=null
$.to=null
$.Cp=null
$.Dc=null
$.AU=null
$.zH=null
$.Eo=null
$.C7=null
$.AB=null
$.Ec=null
$.CD=null
$.AI=null
$.DX=null
$.Bb=null
$.DD=null
$.DE=null
$.zQ=null
$.Cw=null
$.AW=null
$.B5=null
$.EE=null
$.jj=null
$.Dt=null
$.DV=null
$.mk=null
$.Aq=null
$.CN=null
$.CR=null
$.zN=null
$.Ba=null
$.DW=null
$.CC=null
$.Ef=null
$.Dh=null
$.CS=null
$.vW=null
$.DH=null
$.Eu=null
$.E0=null
$.BL=null
$.D3=null
$.BM=null
$.Dw=null
$.Es=null
$.Cd=null
$.B7=null
$.Bu=null
$.Ag=null
$.Dd=null
$.Bs=null
$.Bz=null
$.AY=null
$.DG=null
$.f7=null
$.CH=null
$.vV=null
$.BN=null
$.BK=null
$.Ex=null
$.Am=null
$.Dr=null
$.Ds=null
$.Dq=null
$.Dp=null
$.DO=null
$.BA=null
$.Cx=null
$.DR=null
$.Co=null
$.CI=null
$.AR=null
$.Er=null
$.Cv=null
$.Bd=null
$.Be=null
$.CQ=null
$.ED=null
$.C1=null
$.Eq=null
$.w_=null
$.DC=null
$.Cb=null
$.mo=null
$.BW=null
$.D5=null
$.Al=null
$.Bh=null
$.Dy=null
$.Cy=null
$.Ek=null
$.vZ=null
$.CG=null
$.As=null
$.AO=null
$.D1=null
$.E7=null
$.Dx=null
$.mg=null
$.tA=null
$.DJ=null
$.Et=null
$.BJ=null
$.A4=null
$.Ad=null
$.E5=null
$.CK=null
$.Cm=null
$.CL=null
$.E2=null
$.BX=null
$.zR=null
$.By=null
$.Ck=null
$.DL=null
$.Br=null
$.Ak=null
$.Dn=null
$.Do=null
$.Ei=null
$.DA=null
$.tt=null
$.vL=null
$.AJ=null
$.vN=null
$.BR=null
$.tr=null
$.D7=null
$.Ct=null
$.Dj=null
$.tn=null
$.mm=null
$.vU=null
$.B3=null
$.Bw=null
$.w0=null
$.vR=null
$.AE=null
$.E9=null
$.Ax=null
$.CU=null
$.BO=null
$.DQ=null
$.Cn=null
$.A1=null
$.BP=null
$.B0=null
$.CY=null
$.C6=null
$.Cs=null
$.Cc=null
$.Cg=null
$.Dm=null
$.Di=null
$.zK=null
$.E6=null
$.Da=null
$.AS=null
$.AX=null
$.Bv=null
$.E3=null
$.Bo=null
$.C8=null
$.A8=null
$.Bi=null
$.B_=null
$.CM=null
$.B8=null
$.Du=null
$.Ca=null
$.vH=null
$.D6=null
$.BQ=null
$.Bp=null
$.zI=null
$.zP=null
$.CJ=null
$.CT=null
$.C5=null
$.BH=null
$.En=null
$.Ab=null
$.Bq=null
$.C9=null
$.AP=null
$.DN=null
$.AD=null
$.Dz=null
$.A9=null
$.E8=null
$.Ci=null
$.A3=null
$.Dg=null
$.D2=null
$.AK=null
$.BB=null
$.Ar=null
$.E4=null
$.BU=null
$.Ej=null
$.At=null
$.BC=null
$.Au=null
$.AM=null
$.D9=null
$.AG=null
$.BV=null
$.Cz=null
$.An=null
$.DP=null
$.Ez=null
$.DF=null
$.Cq=null
$.DM=null
$.Cr=null
$.zX=null
$.zJ=null
$.Cj=null
$.A6=null
$.Av=null
$.zY=null
$.A2=null
$.CF=null
$.CZ=null
$.Eb=null
$.BS=null
$.Ey=null
$.De=null
$.Db=null
$.BZ=null
$.BT=null
$.Az=null
$.BF=null
$.Ch=null
$.CO=null
$.DI=null
$.zM=null
$.Ev=null
$.B6=null
$.DT=null
$.AZ=null
$.zW=null
$.Ao=null
$.Af=null
$.EC=null
$.Ap=null
$.B9=null
$.Ay=null
$.Eh=null
$.DK=null
$.Ea=null
$.zL=null
$.Dk=null
$.C_=null
$.C2=null
$.Em=null
$.DU=null
$.vT=null
$.Bf=null
$.D0=null
$.Ew=null
$.Bj=null
$.C0=null
$.Aj=null
$.BI=null
$.BG=null
$.DB=null
$.D_=null
$.BD=null
$.Ae=null
$.E_=null
$.CP=null
$.Ee=null
$.EB=null
$.A_=null
$.zZ=null
$.Aa=null
$.Bc=null
$.D8=null
$.AH=null
$.D4=null
$.B2=null
$.zT=null
$.Ac=null
$.CE=null
$.B4=null
$.CX=null
$.Ai=null
$.Bn=null
$.Eg=null
$.A5=null
$.Bt=null
$.CV=null
$.Ah=null
$.BE=null
$.CB=null
$.A7=null
$.AA=null
$.x4=4
$.f3="OWNER"
$.wj=!1
$.tU=null
$.xK=""
$.us=null
$.FQ=null
$.hL=null
$.ev=null
$.FP=null
$.hK=null
$.ew=null
$.d6=null
$.fn=null
$.hI=null
$.hJ=null
$.du=null
$.ci=null
$.wE=!1})();(function lazyInitializers(){lazy($,"ve","$get$ve",function(){return H.xD("_$dart_dartClosure")})
lazy($,"tN","$get$tN",function(){return H.xD("_$dart_js")})
lazy($,"vC","$get$vC",function(){return H.zF()})
lazy($,"vD","$get$vD",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vn
$.vn=t+1
t="expando$key$"+t}return new P.li(null,t,[P.C])})
lazy($,"wL","$get$wL",function(){return H.dQ(H.p4({
toString:function(){return"$receiver$"}}))})
lazy($,"wM","$get$wM",function(){return H.dQ(H.p4({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"wN","$get$wN",function(){return H.dQ(H.p4(null))})
lazy($,"wO","$get$wO",function(){return H.dQ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wS","$get$wS",function(){return H.dQ(H.p4(void 0))})
lazy($,"wT","$get$wT",function(){return H.dQ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wQ","$get$wQ",function(){return H.dQ(H.wR(null))})
lazy($,"wP","$get$wP",function(){return H.dQ(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"wV","$get$wV",function(){return H.dQ(H.wR(void 0))})
lazy($,"wU","$get$wU",function(){return H.dQ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uH","$get$uH",function(){return P.G_()})
lazy($,"hc","$get$hc",function(){return P.G5(null,P.d3)})
lazy($,"i3","$get$i3",function(){return[]})
lazy($,"x6","$get$x6",function(){return H.F_([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xs","$get$xs",function(){return P.Gt()})
lazy($,"vd","$get$vd",function(){return P.d5("^\\S+$",!0,!1)})
lazy($,"kn","$get$kn",function(){return P.bX(P.C,L.fH)})
lazy($,"v9","$get$v9",function(){return P.d5("[\\/]",!0,!1)})
lazy($,"bN","$get$bN",function(){return H.a([],[S.bG])})
lazy($,"lT","$get$lT",function(){return P.bX(P.B,Z.il)})
lazy($,"md","$get$md",function(){return P.bX(P.C,B.hg)})
lazy($,"we","$get$we",function(){return H.a([],[A.a1])})
lazy($,"wo","$get$wo",function(){return H.a([],[P.B])})
lazy($,"nU","$get$nU",function(){return P.bX(P.C,T.hG)})
lazy($,"ak","$get$ak",function(){return H.a([],[U.ag])})
lazy($,"wD","$get$wD",function(){return P.wh([0,new K.cE("Pixels -> Bytes",T.GJ(),T.GI()),1,new K.cE("Pixels -> Packed bits",T.GH(),T.GG()),2,new K.cE("RLE 1 byte",V.rW(1),V.rV(1)),3,new K.cE("RLE 2 bytes",V.rW(2),V.rV(2)),4,new K.cE("RLE 3 bytes",V.rW(3),V.rV(3)),5,new K.cE("RLE packed 1 byte",V.rU(1),V.rT(1)),6,new K.cE("RLE packed 2 bytes",V.rU(2),V.rT(2)),7,new K.cE("RLE packed 3 bytes",V.rU(3),V.rT(3)),8,new K.cE("RLE dynamic",V.Hd(),V.Hc()),9,new K.cE("Exponential-Golomb pixels",F.GX(),F.GW()),10,new K.cE("Exponential-Golomb run RLE",F.GV(),F.GU()),11,new K.cE("Exponential-Golomb run/data RLE",F.GT(),F.GS())],P.C,K.cE)})
lazy($,"b","$get$b",function(){return P.a4(null,null,null,G.a0)})
lazy($,"x2","$get$x2",function(){return P.d5("[\n\r]+",!0,!1)})
lazy($,"x3","$get$x3",function(){return P.d5("( *)(.*)",!0,!1)})
lazy($,"x1","$get$x1",function(){return P.d5("^s*//",!0,!1)})
lazy($,"x0","$get$x0",function(){return P.d5("//",!0,!1)})
lazy($,"cH","$get$cH",function(){return new F.fc(!1,!1,"WordListFileFormat")})
lazy($,"x5","$get$x5",function(){return new T.pv(null)})
lazy($,"v4","$get$v4",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cR","$get$cR",function(){return P.bX(P.B,Y.dM)})
lazy($,"wk","$get$wk",function(){return P.d5("[\\/]",!0,!1)})
lazy($,"tT","$get$tT",function(){return P.bX(P.B,W.fl)})
lazy($,"u5","$get$u5",function(){return A.fQ(255,0,255,255)})
lazy($,"nx","$get$nx",function(){return new F.fc(!1,!1,"Path Utils")})
lazy($,"nw","$get$nw",function(){return P.bX(P.eB,P.C)})
lazy($,"cN","$get$cN",function(){return H.a([],[D.cF])})
lazy($,"wJ","$get$wJ",function(){return P.d5("([^\\\\|]|\\\\|)+",!0,!1)})
lazy($,"hN","$get$hN",function(){return P.d5("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fp","$get$fp",function(){return new F.fc(!1,!1,"TextEngine")})
lazy($,"wH","$get$wH",function(){return P.d5("#(.*?)#",!0,!1)})
lazy($,"wI","$get$wI",function(){return P.d5("\\?(.*?)\\?",!0,!1)})
lazy($,"fo","$get$fo",function(){return P.d5("\\\\(?!\\\\)",!0,!1)})
lazy($,"vf","$get$vf",function(){var t={color:16711935}
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
mangledGlobalNames:{C:"int",V:"double",dl:"num",B:"String",d9:"bool",d3:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.d9,args:[[P.p,E.iz]]},{func:1,v:true},{func:1,ret:P.d8,args:[P.bh,P.C,P.C,O.cS]},{func:1,ret:P.bh,args:[P.C,P.bh,P.bh,O.cS]},{func:1,v:true,args:[P.ab]},{func:1,ret:P.B,args:[P.C]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.az,args:[P.C]},{func:1,ret:P.B,args:[P.B]},{func:1,ret:W.dp,args:[P.C]},{func:1,ret:W.co,args:[P.C]},{func:1,args:[,]},{func:1,v:true,args:[P.ab],opt:[P.dO]},{func:1,ret:W.cd,args:[P.C]},{func:1,v:true,args:[,P.dO]},{func:1,ret:W.cf,args:[P.C]},{func:1,ret:W.cp,args:[P.C]},{func:1,ret:W.cq,args:[P.C]},{func:1,ret:W.fm,args:[P.C]},{func:1,ret:W.cr,args:[P.C]},{func:1,ret:W.fq,args:[P.C]},{func:1,ret:W.fr,args:[P.C]},{func:1,ret:P.bS,args:[P.C]},{func:1,ret:P.B,args:[P.d2]},{func:1,ret:W.cm,args:[P.C]},{func:1,ret:W.fs,args:[P.C]},{func:1,ret:W.ch,args:[P.C]},{func:1,ret:W.cj,args:[P.C]},{func:1,ret:P.bl,args:[P.C]},{func:1,ret:P.d9,args:[P.ab]},{func:1,ret:P.C,args:[P.bF,P.bF]},{func:1,v:true,args:[P.B]},{func:1,ret:W.eV,args:[P.C]},{func:1,ret:W.bI,args:[P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CacheStorage:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CanvasRenderingContext2D:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceAcceleration:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,DOMPoint:J.f,DOMPointReadOnly:J.f,EffectModel:J.f,Stream:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NodeIterator:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,Range:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCSessionDescription:J.f,mozRTCSessionDescription:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,SyncManager:J.f,TextMetrics:J.f,TreeWalker:J.f,UnderlyingSourceBase:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPoint:J.f,SVGPreserveAspectRatio:J.f,SVGRect:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLRenderingContext:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fe,ArrayBufferView:H.eo,DataView:H.n8,Float32Array:H.n9,Float64Array:H.na,Int16Array:H.nb,Int32Array:H.nc,Int8Array:H.nd,Uint16Array:H.ne,Uint32Array:H.nf,Uint8ClampedArray:H.ju,CanvasPixelArray:H.ju,Uint8Array:H.ff,HTMLBRElement:W.at,HTMLCanvasElement:W.at,HTMLContentElement:W.at,HTMLDListElement:W.at,HTMLDataListElement:W.at,HTMLDetailsElement:W.at,HTMLDialogElement:W.at,HTMLHRElement:W.at,HTMLHeadElement:W.at,HTMLHeadingElement:W.at,HTMLHtmlElement:W.at,HTMLLIElement:W.at,HTMLLabelElement:W.at,HTMLLegendElement:W.at,HTMLMenuElement:W.at,HTMLMenuItemElement:W.at,HTMLMeterElement:W.at,HTMLModElement:W.at,HTMLOListElement:W.at,HTMLOptGroupElement:W.at,HTMLOptionElement:W.at,HTMLParagraphElement:W.at,HTMLPictureElement:W.at,HTMLPreElement:W.at,HTMLProgressElement:W.at,HTMLQuoteElement:W.at,HTMLShadowElement:W.at,HTMLStyleElement:W.at,HTMLTableCaptionElement:W.at,HTMLTableCellElement:W.at,HTMLTableDataCellElement:W.at,HTMLTableHeaderCellElement:W.at,HTMLTableColElement:W.at,HTMLTableElement:W.at,HTMLTableRowElement:W.at,HTMLTableSectionElement:W.at,HTMLTitleElement:W.at,HTMLUListElement:W.at,HTMLUnknownElement:W.at,HTMLDirectoryElement:W.at,HTMLFontElement:W.at,HTMLFrameElement:W.at,HTMLMarqueeElement:W.at,HTMLElement:W.at,HTMLAnchorElement:W.eM,HTMLAreaElement:W.km,HTMLAudioElement:W.eP,AudioTrack:W.cJ,AudioTrackList:W.ku,HTMLBaseElement:W.ky,Blob:W.eQ,HTMLBodyElement:W.kB,HTMLButtonElement:W.eR,CDATASection:W.e9,CharacterData:W.e9,Comment:W.e9,ProcessingInstruction:W.e9,Text:W.e9,Clients:W.kI,CompositorWorker:W.kM,Credential:W.fS,FederatedCredential:W.fS,PasswordCredential:W.fS,CredentialsContainer:W.kQ,CSSFontFaceRule:W.kT,CSSImportRule:W.kU,CSSKeyframeRule:W.fT,MozCSSKeyframeRule:W.fT,WebKitCSSKeyframeRule:W.fT,CSSKeyframesRule:W.fU,MozCSSKeyframesRule:W.fU,WebKitCSSKeyframesRule:W.fU,CSSPageRule:W.kV,CSSCharsetRule:W.bI,CSSGroupingRule:W.bI,CSSMediaRule:W.bI,CSSNamespaceRule:W.bI,CSSSupportsRule:W.bI,CSSRule:W.bI,CSSStyleDeclaration:W.eU,MSStyleCSSProperties:W.eU,CSS2Properties:W.eU,CSSStyleRule:W.kW,CSSViewportRule:W.kX,DataTransfer:W.l1,DataTransferItem:W.eV,DataTransferItemList:W.ib,HTMLDivElement:W.fV,Document:W.ea,HTMLDocument:W.ea,XMLDocument:W.ea,DocumentFragment:W.id,ShadowRoot:W.id,DOMError:W.ie,FileError:W.ie,DOMException:W.l4,DOMRectReadOnly:W.ig,DOMStringList:W.ih,DOMStringMap:W.ii,DOMTokenList:W.ij,Element:W.dp,HTMLEmbedElement:W.la,DirectoryEntry:W.fX,Entry:W.fX,FileEntry:W.fX,ErrorEvent:W.lg,AnimationEvent:W.R,AnimationPlayerEvent:W.R,ApplicationCacheErrorEvent:W.R,AutocompleteErrorEvent:W.R,BeforeInstallPromptEvent:W.R,BeforeUnloadEvent:W.R,BlobEvent:W.R,ClipboardEvent:W.R,CloseEvent:W.R,CompositionEvent:W.R,CustomEvent:W.R,DeviceLightEvent:W.R,DeviceMotionEvent:W.R,DeviceOrientationEvent:W.R,ExtendableEvent:W.R,ExtendableMessageEvent:W.R,FetchEvent:W.R,FocusEvent:W.R,FontFaceSetLoadEvent:W.R,GamepadEvent:W.R,GeofencingEvent:W.R,HashChangeEvent:W.R,InstallEvent:W.R,KeyboardEvent:W.R,MediaEncryptedEvent:W.R,MediaKeyMessageEvent:W.R,MediaQueryListEvent:W.R,MediaStreamEvent:W.R,MediaStreamTrackEvent:W.R,MessageEvent:W.R,MIDIConnectionEvent:W.R,MIDIMessageEvent:W.R,MouseEvent:W.R,DragEvent:W.R,NotificationEvent:W.R,PageTransitionEvent:W.R,PointerEvent:W.R,PopStateEvent:W.R,PresentationConnectionAvailableEvent:W.R,PresentationConnectionCloseEvent:W.R,ProgressEvent:W.R,PromiseRejectionEvent:W.R,PushEvent:W.R,RelatedEvent:W.R,RTCDataChannelEvent:W.R,RTCDTMFToneChangeEvent:W.R,RTCIceCandidateEvent:W.R,RTCPeerConnectionIceEvent:W.R,SecurityPolicyViolationEvent:W.R,ServicePortConnectEvent:W.R,ServiceWorkerMessageEvent:W.R,SpeechRecognitionEvent:W.R,StorageEvent:W.R,SyncEvent:W.R,TextEvent:W.R,TouchEvent:W.R,TrackEvent:W.R,TransitionEvent:W.R,WebKitTransitionEvent:W.R,UIEvent:W.R,WheelEvent:W.R,ResourceProgressEvent:W.R,USBConnectionEvent:W.R,IDBVersionChangeEvent:W.R,SVGZoomEvent:W.R,AudioProcessingEvent:W.R,OfflineAudioCompletionEvent:W.R,WebGLContextEvent:W.R,Event:W.R,InputEvent:W.R,Animation:W.aF,ApplicationCache:W.aF,DOMApplicationCache:W.aF,OfflineResourceList:W.aF,BatteryManager:W.aF,CanvasCaptureMediaStreamTrack:W.aF,CrossOriginServiceWorkerClient:W.aF,EventSource:W.aF,MediaKeySession:W.aF,MediaQueryList:W.aF,MediaRecorder:W.aF,MediaSource:W.aF,MediaStream:W.aF,MediaStreamTrack:W.aF,MessagePort:W.aF,MIDIAccess:W.aF,NetworkInformation:W.aF,Notification:W.aF,Performance:W.aF,PermissionStatus:W.aF,PresentationAvailability:W.aF,PresentationReceiver:W.aF,PresentationRequest:W.aF,RTCDTMFSender:W.aF,RTCPeerConnection:W.aF,webkitRTCPeerConnection:W.aF,mozRTCPeerConnection:W.aF,ScreenOrientation:W.aF,ServicePortCollection:W.aF,ServiceWorkerContainer:W.aF,ServiceWorkerRegistration:W.aF,SpeechRecognition:W.aF,SpeechSynthesis:W.aF,SpeechSynthesisUtterance:W.aF,WorkerPerformance:W.aF,BluetoothDevice:W.aF,BluetoothRemoteGATTCharacteristic:W.aF,USB:W.aF,EventTarget:W.aF,HTMLFieldSetElement:W.lJ,File:W.cd,FileList:W.f2,FileReader:W.lK,DOMFileSystem:W.lL,FileWriter:W.lM,FontFace:W.lP,FontFaceSet:W.lQ,FormData:W.lS,HTMLFormElement:W.iy,Gamepad:W.cm,History:W.m0,HTMLOptionsCollection:W.f4,HTMLCollection:W.f4,HTMLFormControlsCollection:W.iA,XMLHttpRequest:W.e_,XMLHttpRequestUpload:W.hd,XMLHttpRequestEventTarget:W.hd,HTMLIFrameElement:W.m7,ImageData:W.he,HTMLImageElement:W.f6,HTMLInputElement:W.mc,HTMLKeygenElement:W.mB,CalcLength:W.hm,LengthValue:W.hm,SimpleLength:W.hm,HTMLLinkElement:W.hn,Location:W.mT,HTMLMapElement:W.mY,HTMLVideoElement:W.ht,HTMLMediaElement:W.ht,MediaList:W.jr,HTMLMetaElement:W.n2,MIDIOutput:W.n3,MIDIInput:W.hu,MIDIPort:W.hu,MimeType:W.co,MimeTypeArray:W.js,Navigator:W.ng,NavigatorUserMediaError:W.nh,Node:W.az,NodeList:W.jv,RadioNodeList:W.jv,HTMLObjectElement:W.nk,HTMLOutputElement:W.np,HTMLParamElement:W.nt,Path2D:W.nv,PerformanceCompositeTiming:W.e1,PerformanceEntry:W.e1,PerformanceMark:W.e1,PerformanceMeasure:W.e1,PerformanceRenderTiming:W.e1,PerformanceResourceTiming:W.e1,Perspective:W.nA,Plugin:W.cf,PluginArray:W.jC,PresentationConnection:W.nF,RTCDataChannel:W.jE,DataChannel:W.jE,HTMLScriptElement:W.fl,HTMLSelectElement:W.jF,ServicePort:W.o1,SharedWorker:W.o4,SharedWorkerGlobalScope:W.o5,HTMLSlotElement:W.o6,SourceBuffer:W.cp,SourceBufferList:W.jH,HTMLSourceElement:W.o9,HTMLSpanElement:W.hH,SpeechGrammar:W.cq,SpeechGrammarList:W.jI,SpeechRecognitionAlternative:W.fm,SpeechRecognitionError:W.ob,SpeechRecognitionResult:W.ch,SpeechSynthesisEvent:W.oc,SpeechSynthesisVoice:W.od,Storage:W.oh,StylePropertyMap:W.oE,CSSStyleSheet:W.cj,StyleSheet:W.cj,KeywordValue:W.e3,NumberValue:W.e3,PositionValue:W.e3,TransformValue:W.e3,StyleValue:W.e3,HTMLTemplateElement:W.oL,HTMLTextAreaElement:W.hM,TextTrack:W.cO,TextTrackCue:W.cG,VTTCue:W.cG,TextTrackCueList:W.oS,TextTrackList:W.oT,TimeRanges:W.oX,Touch:W.cr,TouchList:W.jM,TrackDefault:W.fq,TrackDefaultList:W.jN,HTMLTrackElement:W.p0,Matrix:W.e4,Rotation:W.e4,Skew:W.e4,Translation:W.e4,TransformComponent:W.e4,URL:W.pc,URLSearchParams:W.pd,VideoTrackList:W.ph,VTTRegion:W.fr,VTTRegionList:W.jO,WebSocket:W.pm,Window:W.jR,DOMWindow:W.jR,Worker:W.pt,CompositorWorkerGlobalScope:W.eD,DedicatedWorkerGlobalScope:W.eD,ServiceWorkerGlobalScope:W.eD,WorkerGlobalScope:W.eD,Attr:W.fs,ClientRect:W.pK,ClientRectList:W.hU,DOMRectList:W.hU,CSSRuleList:W.jX,DocumentType:W.pR,DOMRect:W.pS,GamepadList:W.k0,HTMLFrameSetElement:W.qc,NamedNodeMap:W.hZ,MozNamedAttrMap:W.hZ,ServiceWorker:W.qB,SpeechRecognitionResultList:W.k4,StyleSheetList:W.k6,WorkerLocation:W.qR,WorkerNavigator:W.qS,IDBDatabase:P.l2,IDBIndex:P.ma,IDBObjectStore:P.nl,IDBOpenDBRequest:P.hF,IDBVersionChangeRequest:P.hF,IDBRequest:P.hF,IDBTransaction:P.p1,SVGAElement:P.kj,SVGAnimateElement:P.e8,SVGAnimateMotionElement:P.e8,SVGAnimateTransformElement:P.e8,SVGAnimationElement:P.e8,SVGSetElement:P.e8,SVGFEBlendElement:P.lj,SVGFEColorMatrixElement:P.lk,SVGFEComponentTransferElement:P.ll,SVGFECompositeElement:P.lm,SVGFEConvolveMatrixElement:P.ln,SVGFEDiffuseLightingElement:P.lo,SVGFEDisplacementMapElement:P.lp,SVGFEFloodElement:P.lq,SVGFEGaussianBlurElement:P.lr,SVGFEImageElement:P.ls,SVGFEMergeElement:P.lt,SVGFEMorphologyElement:P.lu,SVGFEOffsetElement:P.lv,SVGFESpecularLightingElement:P.lw,SVGFETileElement:P.lx,SVGFETurbulenceElement:P.ly,SVGFilterElement:P.lN,SVGCircleElement:P.cn,SVGClipPathElement:P.cn,SVGDefsElement:P.cn,SVGEllipseElement:P.cn,SVGForeignObjectElement:P.cn,SVGGElement:P.cn,SVGGeometryElement:P.cn,SVGLineElement:P.cn,SVGPathElement:P.cn,SVGPolygonElement:P.cn,SVGPolylineElement:P.cn,SVGRectElement:P.cn,SVGSwitchElement:P.cn,SVGGraphicsElement:P.cn,SVGImageElement:P.m8,SVGLength:P.d0,SVGLengthList:P.mE,SVGMarkerElement:P.n0,SVGMaskElement:P.n1,SVGNumber:P.d4,SVGNumberList:P.ni,SVGPatternElement:P.ny,SVGPointList:P.nD,SVGScriptElement:P.nZ,SVGStringList:P.oC,SVGDescElement:P.ca,SVGDiscardElement:P.ca,SVGFEDistantLightElement:P.ca,SVGFEFuncAElement:P.ca,SVGFEFuncBElement:P.ca,SVGFEFuncGElement:P.ca,SVGFEFuncRElement:P.ca,SVGFEMergeNodeElement:P.ca,SVGFEPointLightElement:P.ca,SVGFESpotLightElement:P.ca,SVGMetadataElement:P.ca,SVGStopElement:P.ca,SVGStyleElement:P.ca,SVGTitleElement:P.ca,SVGComponentTransferFunctionElement:P.ca,SVGElement:P.ca,SVGSVGElement:P.oG,SVGSymbolElement:P.oI,SVGTSpanElement:P.ey,SVGTextElement:P.ey,SVGTextPositioningElement:P.ey,SVGTextContentElement:P.ey,SVGTextPathElement:P.oR,SVGTransform:P.d7,SVGTransformList:P.p2,SVGUseElement:P.pe,SVGViewElement:P.pi,SVGViewSpec:P.pj,SVGLinearGradientElement:P.hX,SVGRadialGradientElement:P.hX,SVGGradientElement:P.hX,SVGCursorElement:P.qy,SVGFEDropShadowElement:P.qz,SVGMPathElement:P.qA,AudioBuffer:P.fJ,AudioBufferSourceNode:P.eO,AudioContext:P.fK,webkitAudioContext:P.fK,OfflineAudioContext:P.fK,AnalyserNode:P.bC,RealtimeAnalyserNode:P.bC,AudioDestinationNode:P.bC,BiquadFilterNode:P.bC,ChannelMergerNode:P.bC,AudioChannelMerger:P.bC,ChannelSplitterNode:P.bC,AudioChannelSplitter:P.bC,DelayNode:P.bC,DynamicsCompressorNode:P.bC,GainNode:P.bC,AudioGainNode:P.bC,IIRFilterNode:P.bC,MediaStreamAudioDestinationNode:P.bC,PannerNode:P.bC,AudioPannerNode:P.bC,webkitAudioPannerNode:P.bC,ScriptProcessorNode:P.bC,JavaScriptAudioNode:P.bC,StereoPannerNode:P.bC,WaveShaperNode:P.bC,AudioNode:P.bC,MediaElementAudioSourceNode:P.dX,MediaStreamAudioSourceNode:P.dX,OscillatorNode:P.dX,Oscillator:P.dX,AudioSourceNode:P.dX,ConvolverNode:P.kP,WebGLActiveInfo:P.kl,WebGL2RenderingContext:P.nQ,WebGL2RenderingContextBase:P.qQ,SQLResultSetRowList:P.jJ})
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xL(V.v6(),b)},[])
else (function(b){H.xL(V.v6(),b)})([])})})()
//# sourceMappingURL=BioController.dart.js.map