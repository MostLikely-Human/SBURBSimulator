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
a[c]=function(){a[c]=function(){H.Hl(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.uM"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.uM"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.uM(this,a,b,true,[],d).prototype
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
rg:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wH:function(a,b,c,d){var t=new H.oK(a,b,c,[d])
t.eJ(a,b,c,d)
return t},
ds:function(a,b,c,d){if(!!J.aL(a).$isv)return new H.fR(a,b,[c,d])
return new H.hp(a,b,[c,d])},
ji:function(){return new P.dN("No element")},
wf:function(){return new P.dN("Too few elements")},
jE:function(a,b,c,d){if(c-b<=32)H.FP(a,b,c,d)
else H.FO(a,b,c,d)},
FP:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bf(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cu(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
FO:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.am(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.am(a3+a4,2)
p=q-t
o=q+t
n=J.bf(a2)
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
if(J.bb(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.aL(c)
if(b.S(c,0))continue
if(b.a4(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dy(c)
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
if(J.e7(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cu(a5.$2(d,j),0))for(;!0;)if(J.cu(a5.$2(n.n(a2,f),j),0)){--f
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
H.jE(a2,a3,g-2,a5)
H.jE(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.bb(a5.$2(n.n(a2,g),l),0);)++g
for(;J.bb(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.bb(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.bb(a5.$2(d,j),0))for(;!0;)if(J.bb(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.e7(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jE(a2,g,f,a5)}else H.jE(a2,g,f,a5)},
kL:function kL(a){this.a=a},
v:function v(){},
em:function em(){},
oK:function oK(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
en:function en(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hp:function hp(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fR:function fR(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jn:function jn(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fa:function fa(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hN:function hN(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jO:function jO(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
it:function it(){},
pa:function pa(){},
hJ:function hJ(){},
k8:function(a,b){var t=a.bm(b)
if(!u.globalState.d.cy)u.globalState.f.bt()
return t},
xG:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aL(s).$isq)throw H.l(P.dB("Arguments to main must be a List: "+H.C(s)))
u.globalState=new H.qq(0,0,1,null,null,null,null,null,null,null,null,null,a)
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
s.f=new H.pX(P.tR(null,H.eH),0)
r=P.D
s.z=new H.t(0,null,null,null,null,null,0,[r,H.fq])
s.ch=new H.t(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qp()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.zI,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.G8)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a5(null,null,null,r)
p=new H.fh(0,null,!1)
o=new H.fq(s,new H.t(0,null,null,null,null,null,0,[r,H.fh]),q,u.createNewIsolate(),p,new H.dC(H.rw()),new H.dC(H.rw()),!1,!1,[],P.a5(null,null,null,null),null,null,!1,!0,P.a5(null,null,null,null))
q.h(0,0)
o.d1(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fw(a,{func:1,args:[,]}))o.bm(new H.rx(t,a))
else if(H.fw(a,{func:1,args:[,,]}))o.bm(new H.ry(t,a))
else o.bm(a)
u.globalState.f.bt()},
G8:function(a){var t=P.hl(["command","print","msg",a])
return new H.dx(!0,P.hU(null,P.D)).aw(t)},
zK:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.zL()
return},
zL:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.l(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.l(new P.V('Cannot extract URI from "'+t+'"'))},
zI:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eF(!0,[]).aU(b.data)
s=J.bf(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eF(!0,[]).aU(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eF(!0,[]).aU(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.D
j=P.a5(null,null,null,k)
i=new H.fh(0,null,!1)
h=new H.fq(s,new H.t(0,null,null,null,null,null,0,[k,H.fh]),j,u.createNewIsolate(),i,new H.dC(H.rw()),new H.dC(H.rw()),!1,!1,[],P.a5(null,null,null,null),null,null,!1,!0,P.a5(null,null,null,null))
j.h(0,0)
h.d1(0,i)
u.globalState.f.a.aJ(0,new H.eH(h,new H.me(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bt()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fz(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bt()
break
case"close":u.globalState.ch.an(0,$.$get$vC().n(0,a))
a.terminate()
u.globalState.f.bt()
break
case"log":H.zH(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hl(["command","print","msg",t])
k=new H.dx(!0,P.hU(null,P.D)).aw(k)
s.toString
self.postMessage(k)}else P.fx(s.n(t,"msg"))
break
case"error":throw H.l(s.n(t,"msg"))}},
zH:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hl(["command","log","msg",a])
r=new H.dx(!0,P.hU(null,P.D)).aw(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.ct(q)
t=H.cs(q)
s=P.lh(t)
throw H.l(s)}},
zJ:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wu=$.wu+("_"+s)
$.wv=$.wv+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fz(f,["spawned",new H.fr(s,r),q,t.r])
r=new H.mf(a,b,c,d,t)
if(e===!0){t.dI(q,q)
u.globalState.f.a.aJ(0,new H.eH(t,r,"start isolate"))}else r.$0()},
FV:function(a,b){var t=new H.p1(!0,!1,null)
t.eK(a,b)
return t},
Gr:function(a){return new H.eF(!0,[]).aU(new H.dx(!1,P.hU(null,P.D)).aw(a))},
rx:function rx(a,b){this.a=a
this.b=b},
ry:function ry(a,b){this.a=a
this.b=b},
qq:function qq(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
fq:function fq(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
ql:function ql(a,b){this.a=a
this.b=b},
pX:function pX(a,b){this.a=a
this.b=b},
pY:function pY(a){this.a=a},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
qp:function qp(){},
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
pK:function pK(){},
fr:function fr(b,a){this.b=b
this.a=a},
qs:function qs(a,b){this.a=a
this.b=b},
hX:function hX(b,c,a){this.b=b
this.c=c
this.a=a},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
p1:function p1(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function p2(a,b){this.a=a
this.b=b},
p3:function p3(a,b){this.a=a
this.b=b},
dC:function dC(a){this.a=a},
dx:function dx(a,b){this.a=a
this.b=b},
eF:function eF(a,b){this.a=a
this.b=b},
yM:function(){throw H.l(new P.V("Cannot modify unmodifiable Map"))},
H_:function(a){return u.types[a]},
xB:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aL(a).$isaQ},
C:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cJ(a)
if(typeof t!=="string")throw H.l(H.bp(a))
return t},
Fl:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.nQ(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eq:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ua:function(a,b){if(b==null)throw H.l(new P.bK(a,null,null))
return b.$1(a)},
ff:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.ua(a,c)
if(3>=t.length)return H.x(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.ua(a,c)}if(b<2||b>36)throw H.l(P.bD(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a5(q,o)|32)>r)return H.ua(a,c)}return parseInt(a,b)},
ws:function(a,b){return b.$1(a)},
ww:function(a,b){var t,s
H.GM(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.ws(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.rD(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.ws(a,b)}return t},
nK:function(a){var t,s,r,q,p,o,n,m
t=J.aL(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.aL(a).$iseB){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a5(q,0)===36)q=C.c.ag(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rq(H.kc(a),0,null),u.mangledGlobalNames)},
nJ:function(a){return"Instance of '"+H.nK(a)+"'"},
F0:function(){if(!!self.location)return self.location.href
return},
wr:function(a){var t,s,r,q,p
t=J.ck(a)
if(typeof t!=="number")return t.el()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
F5:function(a){var t,s,r,q
t=H.a([],[P.D])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.cj)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bp(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aS(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.l(H.bp(q))}return H.wr(t)},
wy:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.cj)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bp(q))
if(q<0)throw H.l(H.bp(q))
if(q>65535)return H.F5(a)}return H.wr(a)},
F6:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.el()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hA:function(a){var t
if(typeof a!=="number")return H.as(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aS(t,10))>>>0,56320|t&1023)}}throw H.l(P.bD(a,0,1114111,null,null))},
cU:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
wt:function(a){return a.b?H.cU(a).getUTCFullYear()+0:H.cU(a).getFullYear()+0},
uc:function(a){return a.b?H.cU(a).getUTCMonth()+1:H.cU(a).getMonth()+1},
ub:function(a){return a.b?H.cU(a).getUTCDate()+0:H.cU(a).getDate()+0},
F1:function(a){return a.b?H.cU(a).getUTCHours()+0:H.cU(a).getHours()+0},
F3:function(a){return a.b?H.cU(a).getUTCMinutes()+0:H.cU(a).getMinutes()+0},
F4:function(a){return a.b?H.cU(a).getUTCSeconds()+0:H.cU(a).getSeconds()+0},
F2:function(a){return a.b?H.cU(a).getUTCMilliseconds()+0:H.cU(a).getMilliseconds()+0},
ud:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bp(a))
return a[b]},
wx:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bp(a))
a[b]=c},
as:function(a){throw H.l(H.bp(a))},
x:function(a,b){if(a==null)J.ck(a)
throw H.l(H.c2(a,b))},
c2:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cX(!0,b,"index",null)
t=J.ck(a)
if(!(b<0)){if(typeof t!=="number")return H.as(t)
s=b>=t}else s=!0
if(s)return P.bt(b,a,"index",null,t)
return P.jB(b,"index",null)},
GR:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cX(!0,a,"start",null)
if(a<0||a>c)return new P.eu(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cX(!0,b,"end",null)
if(b<a||b>c)return new P.eu(a,c,!0,b,"end","Invalid value")}return new P.cX(!0,b,"end",null)},
bp:function(a){return new P.cX(!0,a,null,null)},
ka:function(a){if(typeof a!=="number")throw H.l(H.bp(a))
return a},
uL:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(H.bp(a))
return a},
GM:function(a){if(typeof a!=="string")throw H.l(H.bp(a))
return a},
l:function(a){var t
if(a==null)a=new P.fd()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xI})
t.name=""}else t.toString=H.xI
return t},
xI:function(){return J.cJ(this.dartException)},
ba:function(a){throw H.l(a)},
cj:function(a){throw H.l(new P.bN(a))},
dP:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.p7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
p8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
wP:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
tN:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.my(a,s,t?null:b.receiver)},
ct:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rz(a)
if(a==null)return
if(a instanceof H.fZ)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aS(r,16)&8191)===10)switch(q){case 438:return t.$1(H.tN(H.C(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.C(s)+" (Error "+q+")"
return t.$1(new H.jt(p,null))}}if(a instanceof TypeError){o=$.$get$wJ()
n=$.$get$wK()
m=$.$get$wL()
l=$.$get$wM()
k=$.$get$wQ()
j=$.$get$wR()
i=$.$get$wO()
$.$get$wN()
h=$.$get$wT()
g=$.$get$wS()
f=o.aE(s)
if(f!=null)return t.$1(H.tN(s,f))
else{f=n.aE(s)
if(f!=null){f.method="call"
return t.$1(H.tN(s,f))}else{f=m.aE(s)
if(f==null){f=l.aE(s)
if(f==null){f=k.aE(s)
if(f==null){f=j.aE(s)
if(f==null){f=i.aE(s)
if(f==null){f=l.aE(s)
if(f==null){f=h.aE(s)
if(f==null){f=g.aE(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jt(s,f==null?null:f.method))}}return t.$1(new H.p9(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jI()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cX(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jI()
return a},
cs:function(a){var t
if(a instanceof H.fZ)return a.b
if(a==null)return new H.k4(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.k4(a,null)},
H9:function(a){if(a==null||typeof a!='object')return J.dA(a)
else return H.eq(a)},
xy:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
H4:function(a,b,c,d,e,f,g){switch(c){case 0:return H.k8(b,new H.rl(a))
case 1:return H.k8(b,new H.rm(a,d))
case 2:return H.k8(b,new H.rn(a,d,e))
case 3:return H.k8(b,new H.ro(a,d,e,f))
case 4:return H.k8(b,new H.rp(a,d,e,f,g))}throw H.l(P.lh("Unsupported number of arguments for wrapped closure"))},
di:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.H4)
a.$identity=t
return t},
yI:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aL(c).$isq){t.$reflectionInfo=c
r=H.Fl(t).r}else r=c
q=d?Object.create(new H.ok().constructor.prototype):Object.create(new H.fG(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dD
$.dD=J.e6(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.v9(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.H_,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.v6:H.rH
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.l("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.v9(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
yF:function(a,b,c,d){var t=H.rH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
v9:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.yH(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.yF(s,!q,t,b)
if(s===0){q=$.dD
$.dD=J.e6(q,1)
o="self"+H.C(q)
q="return function(){var "+o+" = this."
p=$.fH
if(p==null){p=H.kE("self")
$.fH=p}return new Function(q+H.C(p)+";return "+o+"."+H.C(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dD
$.dD=J.e6(q,1)
n+=H.C(q)
q="return function("+n+"){return this."
p=$.fH
if(p==null){p=H.kE("self")
$.fH=p}return new Function(q+H.C(p)+"."+H.C(t)+"("+n+");}")()},
yG:function(a,b,c,d){var t,s
t=H.rH
s=H.v6
switch(b?-1:a){case 0:throw H.l(new H.nW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
yH:function(a,b){var t,s,r,q,p,o,n,m
t=H.yE()
s=$.v5
if(s==null){s=H.kE("receiver")
$.v5=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.yG(q,!o,r,b)
if(q===1){s="return function(){return this."+H.C(t)+"."+H.C(r)+"(this."+H.C(s)+");"
o=$.dD
$.dD=J.e6(o,1)
return new Function(s+H.C(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.C(t)+"."+H.C(r)+"(this."+H.C(s)+", "+m+");"
o=$.dD
$.dD=J.e6(o,1)
return new Function(s+H.C(o)+"}")()},
uM:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aL(c).$isq){c.fixed$length=Array
t=c}else t=c
return H.yI(a,b,t,!!d,e,f)},
rH:function(a){return a.a},
v6:function(a){return a.c},
yE:function(){var t=$.fH
if(t==null){t=H.kE("self")
$.fH=t}return t},
kE:function(a){var t,s,r,q,p
t=new H.fG("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Hc:function(a,b){var t=J.bf(b)
throw H.l(H.v8(H.nK(a),t.L(b,3,t.gm(b))))},
ke:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aL(a)[b]
else t=!0
if(t)return a
H.Hc(a,b)},
xx:function(a){var t=J.aL(a)
return"$S" in t?t.$S():null},
fw:function(a,b){var t
if(a==null)return!1
t=H.xx(a)
return t==null?!1:H.uP(t,b)},
v8:function(a,b){return new H.kJ("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Hl:function(a){throw H.l(new P.l0(a))},
rw:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xz:function(a){return u.getIsolateTag(a)},
bY:function(a){return new H.dQ(a,null)},
a:function(a,b){a.$ti=b
return a},
kc:function(a){if(a==null)return
return a.$ti},
xA:function(a,b){return H.uR(a["$as"+H.C(b)],H.kc(a))},
aR:function(a,b,c){var t=H.xA(a,b)
return t==null?null:t[c]},
O:function(a,b){var t=H.kc(a)
return t==null?null:t[b]},
dz:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rq(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.C(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dz(t,b)
return H.Gw(a,b)}return"unknown-reified-type"},
Gw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dz(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dz(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dz(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.GY(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dz(l[j],b)+(" "+H.C(j))}q+="}"}return"("+q+") => "+t},
rq:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.c9("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.N=p+", "
o=a[s]
if(o!=null)q=!1
p=t.N+=H.dz(o,c)}return q?"":"<"+t.C(0)+">"},
kd:function(a){var t,s
if(a instanceof H.eQ){t=H.xx(a)
if(t!=null)return H.dz(t,null)}s=J.aL(a).constructor.builtin$cls
if(a==null)return s
return s+H.rq(a.$ti,0,null)},
uR:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dT:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kc(a)
s=J.aL(a)
if(s[b]==null)return!1
return H.xt(H.uR(s[d],t),c)},
Hk:function(a,b,c,d){if(a==null)return a
if(H.dT(a,b,c,d))return a
throw H.l(H.v8(H.nK(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rq(c,0,null),u.mangledGlobalNames)))},
xt:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cW(a[s],b[s]))return!1
return!0},
eJ:function(a,b,c){return a.apply(b,H.xA(b,c))},
GN:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ac"||b.builtin$cls==="d3"
if(b==null)return!0
t=H.kc(a)
a=J.aL(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.uP(r.apply(a,null),b)}return H.cW(s,b)},
cW:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d3")return!0
if('func' in b)return H.uP(a,b)
if('func' in a)return b.builtin$cls==="Hr"||b.builtin$cls==="ac"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dz(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xt(H.uR(o,t),r)},
xs:function(a,b,c){var t,s,r,q,p
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
GD:function(a,b){var t,s,r,q,p,o
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
uP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(n===m){if(!H.xs(r,q,!1))return!1
if(!H.xs(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cW(i,h)||H.cW(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cW(i,h)||H.cW(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cW(i,h)||H.cW(h,i)))return!1}}return H.GD(a.named,b.named)},
HD:function(a){var t=$.uN
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
HC:function(a){return H.eq(a)},
HB:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
H5:function(a){var t,s,r,q,p,o
t=$.uN.$1(a)
s=$.rd[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rk[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xr.$2(a,t)
if(t!=null){s=$.rd[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rk[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.uQ(r)
$.rd[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rk[t]=r
return r}if(p==="-"){o=H.uQ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xC(a,r)
if(p==="*")throw H.l(new P.eA(t))
if(u.leafTags[t]===true){o=H.uQ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xC(a,r)},
xC:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rs(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
uQ:function(a){return J.rs(a,!1,null,!!a.$isaQ)},
H7:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rs(t,!1,null,!!t.$isaQ)
else return J.rs(t,c,null,null)},
H2:function(){if(!0===$.uO)return
$.uO=!0
H.H3()},
H3:function(){var t,s,r,q,p,o,n,m
$.rd=Object.create(null)
$.rk=Object.create(null)
H.H1()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xD.$1(p)
if(o!=null){n=H.H7(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
H1:function(){var t,s,r,q,p,o,n
t=C.N()
t=H.fv(C.O,H.fv(C.P,H.fv(C.u,H.fv(C.u,H.fv(C.R,H.fv(C.Q,H.fv(C.S(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.uN=new H.rh(p)
$.xr=new H.ri(o)
$.xD=new H.rj(n)},
fv:function(a,b){return a(b)||b},
tI:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.l(new P.bK("Illegal RegExp pattern ("+String(q)+")",a,null))},
Hi:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
xH:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hh){q=b.gdn()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.ba(H.bp(b))
throw H.l("String.replaceAll(Pattern) UNIMPLEMENTED")}},
GB:function(a){return a},
Hj:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aT(0,a),t=new H.jT(t.a,t.b,t.c,null),s=0,r="";t.I();){q=t.d
p=q.b
o=p.index
r=r+H.C(H.xi().$1(C.c.L(a,s,o)))+H.C(c.$1(q))
s=o+p[0].length}t=r+H.C(H.xi().$1(C.c.ag(a,s)))
return t.charCodeAt(0)==0?t:t},
kO:function kO(){},
kP:function kP(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nQ:function nQ(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
p7:function p7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jt:function jt(a,b){this.a=a
this.b=b},
my:function my(a,b,c){this.a=a
this.b=b
this.c=c},
p9:function p9(a){this.a=a},
fZ:function fZ(a,b){this.a=a
this.b=b},
rz:function rz(a){this.a=a},
k4:function k4(a,b){this.a=a
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
eQ:function eQ(){},
oP:function oP(){},
ok:function ok(){},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kJ:function kJ(a){this.a=a},
nW:function nW(a){this.a=a},
dQ:function dQ(a,b){this.a=a
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
hh:function hh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k2:function k2(a,b){this.a=a
this.b=b},
pF:function pF(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
qI:function qI(a,b,c){this.a=a
this.b=b
this.c=c},
qJ:function qJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cx:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(P.dB("Invalid length "+H.C(a)))
return a},
xf:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dB("Invalid view offsetInBytes "+H.C(b)))},
xh:function(a){return a},
EZ:function(a){return new Int8Array(H.xh(a))},
cN:function(a,b,c){H.xf(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
Gq:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aB()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.l(H.GR(a,b,c))
return b},
fb:function fb(){},
ep:function ep(){},
na:function na(){},
jq:function jq(){},
ht:function ht(){},
hv:function hv(){},
hx:function hx(){},
hu:function hu(){},
hw:function hw(){},
hy:function hy(){},
nb:function nb(){},
nc:function nc(){},
nd:function nd(){},
ne:function ne(){},
nf:function nf(){},
ng:function ng(){},
nh:function nh(){},
jr:function jr(){},
fc:function fc(){},
GY:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
Hb:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aL:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jl.prototype
return J.jk.prototype}if(typeof a=="string")return J.ek.prototype
if(a==null)return J.mu.prototype
if(typeof a=="boolean")return J.mt.prototype
if(a.constructor==Array)return J.ej.prototype
if(typeof a!="object"){if(typeof a=="function")return J.el.prototype
return a}if(a instanceof P.ac)return a
return J.re(a)},
rs:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
re:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.uO==null){H.H2()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.l(new P.eA("Return interceptor for "+H.C(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$tM()]
if(p!=null)return p
p=H.H5(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$tM(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
wg:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
EF:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a5(a,b)
if(s!==32&&s!==13&&!J.wg(s))break;++b}return b},
tH:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.Z(a,t)
if(s!==32&&s!==13&&!J.wg(s))break}return b},
bf:function(a){if(typeof a=="string")return J.ek.prototype
if(a==null)return a
if(a.constructor==Array)return J.ej.prototype
if(typeof a!="object"){if(typeof a=="function")return J.el.prototype
return a}if(a instanceof P.ac)return a
return J.re(a)},
dj:function(a){if(a==null)return a
if(a.constructor==Array)return J.ej.prototype
if(typeof a!="object"){if(typeof a=="function")return J.el.prototype
return a}if(a instanceof P.ac)return a
return J.re(a)},
dy:function(a){if(typeof a=="number")return J.f9.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eB.prototype
return a},
kb:function(a){if(typeof a=="number")return J.f9.prototype
if(typeof a=="string")return J.ek.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eB.prototype
return a},
d8:function(a){if(typeof a=="string")return J.ek.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eB.prototype
return a},
bI:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.el.prototype
return a}if(a instanceof P.ac)return a
return J.re(a)},
e6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kb(a).U(a,b)},
bb:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aL(a).S(a,b)},
uS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dy(a).as(a,b)},
cu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dy(a).aB(a,b)},
e7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dy(a).a4(a,b)},
uT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kb(a).ar(a,b)},
i0:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xB(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bf(a).n(a,b)},
kg:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xB(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dj(a).i(a,b,c)},
xJ:function(a,b){return J.dj(a).h(a,b)},
xK:function(a,b,c,d){return J.bI(a).fE(a,b,c,d)},
xL:function(a,b){return J.d8(a).aT(a,b)},
dU:function(a,b){return J.bI(a).fG(a,b)},
uU:function(a){return J.bI(a).fI(a)},
xM:function(a,b,c){return J.dy(a).ab(a,b,c)},
xN:function(a,b){return J.kb(a).ay(a,b)},
xO:function(a,b){return J.bI(a).az(a,b)},
xP:function(a,b){return J.bf(a).ai(a,b)},
kh:function(a,b,c){return J.bf(a).dM(a,b,c)},
xQ:function(a,b){return J.bI(a).fR(a,b)},
uV:function(a,b){return J.dj(a).T(a,b)},
xR:function(a,b,c,d){return J.dj(a).bP(a,b,c,d)},
ki:function(a){return J.dy(a).aj(a)},
xS:function(a,b){return J.dj(a).a9(a,b)},
uW:function(a){return J.bI(a).gdK(a)},
xT:function(a){return J.bI(a).gbl(a)},
fy:function(a){return J.bI(a).gaq(a)},
xU:function(a){return J.bI(a).gcv(a)},
dA:function(a){return J.aL(a).ga6(a)},
rA:function(a){return J.bf(a).gV(a)},
uX:function(a){return J.bI(a).gX(a)},
d9:function(a){return J.dj(a).gY(a)},
ck:function(a){return J.bf(a).gm(a)},
xV:function(a){return J.bI(a).ghD(a)},
xW:function(a){return J.bI(a).ghE(a)},
uY:function(a){return J.aL(a).gaa(a)},
rB:function(a){return J.bI(a).gaI(a)},
xX:function(a,b){return J.bI(a).bx(a,b)},
xY:function(a,b){return J.bf(a).bc(a,b)},
rC:function(a,b,c,d,e){return J.bI(a).dZ(a,b,c,d,e)},
uZ:function(a,b){return J.dj(a).av(a,b)},
xZ:function(a,b,c){return J.d8(a).e3(a,b,c)},
v_:function(a,b){return J.bI(a).hq(a,b)},
y_:function(a,b,c,d){return J.bI(a).hA(a,b,c,d)},
kj:function(a,b,c){return J.d8(a).cJ(a,b,c)},
y0:function(a,b,c){return J.d8(a).hC(a,b,c)},
fz:function(a,b){return J.bI(a).b3(a,b)},
v0:function(a,b){return J.bI(a).sbl(a,b)},
y1:function(a,b){return J.dj(a).cT(a,b)},
eK:function(a,b){return J.d8(a).ey(a,b)},
y2:function(a,b){return J.d8(a).ag(a,b)},
v1:function(a){return J.dy(a).l(a)},
y3:function(a){return J.dj(a).ao(a)},
y4:function(a,b){return J.dy(a).bu(a,b)},
cJ:function(a){return J.aL(a).C(a)},
y5:function(a){return J.d8(a).hI(a)},
rD:function(a){return J.d8(a).be(a)},
y6:function(a){return J.d8(a).ee(a)},
i:function i(){},
mt:function mt(){},
mu:function mu(){},
hi:function hi(){},
nD:function nD(){},
eB:function eB(){},
el:function el(){},
ej:function ej($ti){this.$ti=$ti},
tK:function tK($ti){this.$ti=$ti},
i1:function i1(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
f9:function f9(){},
jl:function jl(){},
jk:function jk(){},
ek:function ek(){}},P={
G_:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.GE()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.di(new P.pH(t),1)).observe(s,{childList:true})
return new P.pG(t,s,r)}else if(self.setImmediate!=null)return P.GF()
return P.GG()},
G0:function(a){++u.globalState.f.b
self.scheduleImmediate(H.di(new P.pI(a),0))},
G1:function(a){++u.globalState.f.b
self.setImmediate(H.di(new P.pJ(a),0))},
G2:function(a){P.uw(C.p,a)},
bz:function(a,b){P.xd(null,a)
return b.gh4()},
cI:function(a,b){P.xd(a,b)},
by:function(a,b){J.xO(b,a)},
bx:function(a,b){b.cr(H.ct(a),H.cs(a))},
xd:function(a,b){var t,s,r,q
t=new P.qX(b)
s=new P.qY(b)
r=J.aL(a)
if(!!r.$isbi)a.ck(t,s)
else if(!!r.$iscC)a.bV(t,s)
else{q=new P.bi(0,$.aB,null,[null])
q.a=4
q.c=a
q.ck(t,null)}},
bA:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.aB.toString
return new P.r7(t)},
xj:function(a,b){if(H.fw(a,{func:1,args:[P.d3,P.d3]})){b.toString
return a}else{b.toString
return a}},
zp:function(a,b){var t=new P.bi(0,$.aB,null,[b])
P.wI(C.p,new P.r8(a,t))
return t},
vx:function(a,b,c){var t
if(a==null)a=new P.fd()
t=$.aB
if(t!==C.e)t.toString
t=new P.bi(0,t,null,[c])
t.d3(a,b)
return t},
zq:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bi(0,$.aB,null,[P.q])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.lS(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.cj)(a),++l){q=a[l]
p=t.b
q.bV(new P.lR(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bi(0,$.aB,null,[null])
m.d2(C.W)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.ct(j)
n=H.cs(j)
if(t.b===0||!1)return P.vx(o,n,null)
else{t.c=o
t.d=n}}return s},
bq:function(a){return new P.k6(new P.bi(0,$.aB,null,[a]),[a])},
xg:function(a,b,c){$.aB.toString
a.al(b,c)},
G5:function(a,b){var t=new P.bi(0,$.aB,null,[b])
t.a=4
t.c=a
return t},
x5:function(a,b){var t,s,r
b.a=1
try{a.bV(new P.q6(b),new P.q7(b))}catch(r){t=H.ct(r)
s=H.cs(r)
P.xE(new P.q8(b,t,s))}},
q5:function(a,b){var t,s,r
for(;a.gfi();)a=a.c
t=a.gcb()
s=b.c
if(t){b.c=null
r=b.bG(s)
b.a=a.a
b.c=a.c
P.fp(b,r)}else{b.a=2
b.c=a
a.dt(s)}},
fp:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fy(p)
n=p.gaH()
s.toString
P.k9(null,null,s,o,n)}return}for(;b.gce()!=null;b=m){m=b.a
b.a=null
P.fp(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gdT()||b.gdS()){k=b.gfC()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fy(p)
n=p.gaH()
s.toString
P.k9(null,null,s,o,n)
return}j=$.aB
if(j==null?k!=null:j!==k)$.aB=k
else j=null
if(b.gdS())new P.qd(t,r,q,b).$0()
else if(s){if(b.gdT())new P.qc(r,b,l).$0()}else if(b.ghb())new P.qb(t,r,b).$0()
if(j!=null)$.aB=j
s=r.b
if(!!J.aL(s).$iscC){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bG(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.q5(s,i)
return}}i=b.b
b=i.bF()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
Gy:function(){var t,s
for(;t=$.ft,t!=null;){$.hZ=null
s=t.b
$.ft=s
if(s==null)$.hY=null
t.a.$0()}},
GA:function(){$.uJ=!0
try{P.Gy()}finally{$.hZ=null
$.uJ=!1
if($.ft!=null)$.$get$uF().$1(P.xu())}},
xq:function(a){var t=new P.jU(a,null)
if($.ft==null){$.hY=t
$.ft=t
if(!$.uJ)$.$get$uF().$1(P.xu())}else{$.hY.b=t
$.hY=t}},
Gz:function(a){var t,s,r
t=$.ft
if(t==null){P.xq(a)
$.hZ=$.hY
return}s=new P.jU(a,null)
r=$.hZ
if(r==null){s.b=t
$.hZ=s
$.ft=s}else{s.b=r.b
r.b=s
$.hZ=s
if(s.b==null)$.hY=s}},
xE:function(a){var t=$.aB
if(C.e===t){P.fu(null,null,C.e,a)
return}t.toString
P.fu(null,null,t,t.cp(a,!0))},
Hx:function(a,b){return new P.qH(null,a,!1,[b])},
xn:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.ct(o)
s=H.cs(o)
$.aB.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fy(r)
q=n
p=r.gaH()
c.$2(q,p)}}},
Gp:function(a,b,c,d){var t=a.bN(0)
if(!!J.aL(t).$iscC&&t!==$.$get$h8())t.bY(new P.r_(b,c,d))
else b.al(c,d)},
xe:function(a,b){return new P.qZ(a,b)},
uI:function(a,b,c){var t=a.bN(0)
if(!!J.aL(t).$iscC&&t!==$.$get$h8())t.bY(new P.r0(b,c))
else b.aD(c)},
G4:function(a,b,c,d,e,f,g){var t,s
t=$.aB
s=e?1:0
s=new P.hS(a,null,null,null,null,t,s,null,null,[f,g])
s.eN(b,c,d,e,g)
s.eQ(a,b,c,d,e,f,g)
return s},
Go:function(a,b,c){$.aB.toString
a.bz(b,c)},
wI:function(a,b){var t=$.aB
if(t===C.e){t.toString
return P.uw(a,b)}return P.uw(a,t.cp(b,!0))},
uw:function(a,b){var t=C.a.am(a.a,1000)
return H.FV(t<0?0:t,b)},
k9:function(a,b,c,d,e){var t={}
t.a=d
P.Gz(new P.r6(t,e))},
xk:function(a,b,c,d){var t,s
s=$.aB
if(s===c)return d.$0()
$.aB=c
t=s
try{s=d.$0()
return s}finally{$.aB=t}},
xm:function(a,b,c,d,e){var t,s
s=$.aB
if(s===c)return d.$1(e)
$.aB=c
t=s
try{s=d.$1(e)
return s}finally{$.aB=t}},
xl:function(a,b,c,d,e,f){var t,s
s=$.aB
if(s===c)return d.$2(e,f)
$.aB=c
t=s
try{s=d.$2(e,f)
return s}finally{$.aB=t}},
fu:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cp(d,!(!t||!1))
P.xq(d)},
pH:function pH(a){this.a=a},
pG:function pG(a,b,c){this.a=a
this.b=b
this.c=c},
pI:function pI(a){this.a=a},
pJ:function pJ(a){this.a=a},
qX:function qX(a){this.a=a},
qY:function qY(a){this.a=a},
r7:function r7(a){this.a=a},
cC:function cC(){},
r8:function r8(a,b){this.a=a
this.b=b},
lS:function lS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lR:function lR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eR:function eR(){},
jV:function jV(){},
dS:function dS(a,$ti){this.a=a
this.$ti=$ti},
k6:function k6(a,$ti){this.a=a
this.$ti=$ti},
jZ:function jZ(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bi:function bi(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
q2:function q2(a,b){this.a=a
this.b=b},
qa:function qa(a,b){this.a=a
this.b=b},
q6:function q6(a){this.a=a},
q7:function q7(a){this.a=a},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
q4:function q4(a,b){this.a=a
this.b=b},
q9:function q9(a,b){this.a=a
this.b=b},
q3:function q3(a,b,c){this.a=a
this.b=b
this.c=c},
qd:function qd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qe:function qe(a){this.a=a},
qc:function qc(a,b,c){this.a=a
this.b=b
this.c=c},
qb:function qb(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b){this.a=a
this.b=b},
dg:function dg(){},
or:function or(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
op:function op(a,b){this.a=a
this.b=b},
oq:function oq(a,b){this.a=a
this.b=b},
os:function os(a){this.a=a},
ox:function ox(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ov:function ov(a,b){this.a=a
this.b=b},
ow:function ow(){},
oy:function oy(a){this.a=a},
oB:function oB(a){this.a=a},
oC:function oC(a,b){this.a=a
this.b=b},
oz:function oz(a,b){this.a=a
this.b=b},
oA:function oA(a){this.a=a},
oD:function oD(a,b){this.a=a
this.b=b},
oE:function oE(a,b){this.a=a
this.b=b},
ot:function ot(a,b,c){this.a=a
this.b=b
this.c=c},
ou:function ou(a){this.a=a},
oo:function oo(){},
dh:function dh(){},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
pL:function pL(a){this.a=a},
jX:function jX(){},
pR:function pR(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pT:function pT(b,c,a){this.b=b
this.c=c
this.a=a},
pS:function pS(){},
qt:function qt(){},
qu:function qu(a,b){this.a=a
this.b=b},
qG:function qG(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qH:function qH(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
r_:function r_(a,b,c){this.a=a
this.b=b
this.c=c},
qZ:function qZ(a,b){this.a=a
this.b=b},
r0:function r0(a,b){this.a=a
this.b=b},
hR:function hR(){},
hS:function hS(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
qr:function qr(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eM:function eM(a,b){this.a=a
this.b=b},
qW:function qW(){},
r6:function r6(a,b){this.a=a
this.b=b},
qx:function qx(){},
qy:function qy(a,b){this.a=a
this.b=b},
qz:function qz(a,b){this.a=a
this.b=b},
qA:function qA(a,b){this.a=a
this.b=b},
G6:function(a,b){var t=a[b]
return t===a?null:t},
uH:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
uG:function(){var t=Object.create(null)
P.uH(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wh:function(a,b,c){return H.xy(a,new H.t(0,null,null,null,null,null,0,[b,c]))},
cD:function(a,b){return new H.t(0,null,null,null,null,null,0,[a,b])},
mL:function(){return new H.t(0,null,null,null,null,null,0,[null,null])},
hl:function(a){return H.xy(a,new H.t(0,null,null,null,null,null,0,[null,null]))},
hU:function(a,b){return new P.k1(0,null,null,null,null,null,0,[a,b])},
G7:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
p:function(a,b,c,d,e){return new P.qg(0,null,null,null,null,[d,e])},
tE:function(a,b,c){var t,s
if(P.uK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i_()
s.push(a)
try{P.Gx(a,t)}finally{if(0>=s.length)return H.x(s,-1)
s.pop()}s=P.wG(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jh:function(a,b,c){var t,s,r
if(P.uK(a))return b+"..."+c
t=new P.c9(b)
s=$.$get$i_()
s.push(a)
try{r=t
r.N=P.wG(r.gN(),a,", ")}finally{if(0>=s.length)return H.x(s,-1)
s.pop()}s=t
s.N=s.gN()+c
s=t.gN()
return s.charCodeAt(0)==0?s:s},
uK:function(a){var t,s
for(t=0;s=$.$get$i_(),t<s.length;++t)if(a===s[t])return!0
return!1},
Gx:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.d9(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.I())return
q=H.C(t.gR())
b.push(q)
s+=q.length+2;++r}if(!t.I()){if(r<=5)return
if(0>=b.length)return H.x(b,-1)
p=b.pop()
if(0>=b.length)return H.x(b,-1)
o=b.pop()}else{n=t.gR();++r
if(!t.I()){if(r<=4){b.push(H.C(n))
return}p=H.C(n)
if(0>=b.length)return H.x(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gR();++r
for(;t.I();n=m,m=l){l=t.gR();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.x(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.C(n)
p=H.C(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.x(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a5:function(a,b,c,d){return new P.k0(0,null,null,null,null,null,0,[d])},
tQ:function(a,b){var t,s
t=P.a5(null,null,null,b)
for(s=J.d9(a);s.I();)t.h(0,s.gR())
return t},
wm:function(a){var t,s,r
t={}
if(P.uK(a))return"{...}"
s=new P.c9("")
try{$.$get$i_().push(a)
r=s
r.N=r.gN()+"{"
t.a=!0
a.a9(0,new P.n_(t,s))
t=s
t.N=t.gN()+"}"}finally{t=$.$get$i_()
if(0>=t.length)return H.x(t,-1)
t.pop()}t=s.gN()
return t.charCodeAt(0)==0?t:t},
tR:function(a,b){var t=new P.mM(null,0,0,0,[b])
t.eI(a,b)
return t},
qg:function qg(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qj:function qj(a){this.a=a},
qh:function qh(a,$ti){this.a=a
this.$ti=$ti},
qi:function qi(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
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
k0:function k0(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qn:function qn(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qk:function qk(){},
f8:function f8(){},
hg:function hg(){},
jm:function jm(){},
hz:function hz(){},
b3:function b3(){},
qO:function qO(){},
mZ:function mZ(){},
hK:function hK(a,$ti){this.a=a
this.$ti=$ti},
n_:function n_(a,b){this.a=a
this.b=b},
mM:function mM(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qo:function qo(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
o7:function o7(){},
o6:function o6(){},
v4:function(a,b,c,d,e,f){if(C.d.by(f,4)!==0)throw H.l(new P.bK("Invalid base64 padding, padded length must be multiple of four, is "+H.C(f),a,c))
if(d+e!==f)throw H.l(new P.bK("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.l(new P.bK("Invalid base64 padding, more than two '=' characters",a,b))},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
fL:function fL(){},
fN:function fN(){},
lb:function lb(){},
pi:function pi(a){this.a=a},
pj:function pj(a){this.a=a},
qQ:function qQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qS:function qS(a){this.a=a},
qR:function qR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FT:function(a,b,c){var t,s,r,q
if(b<0)throw H.l(P.bD(b,0,J.ck(a),null,null))
t=c==null
if(!t&&c<b)throw H.l(P.bD(c,b,J.ck(a),null,null))
s=J.d9(a)
for(r=0;r<b;++r)if(!s.I())throw H.l(P.bD(b,0,r,null,null))
q=[]
if(t)for(;s.I();)q.push(s.gR())
else for(r=b;r<c;++r){if(!s.I())throw H.l(P.bD(c,b,r,null,null))
q.push(s.gR())}return H.wy(q)},
wG:function(a,b,c){var t=J.d9(b)
if(!t.I())return a
if(c.length===0){do a+=H.C(t.gR())
while(t.I())}else{a+=H.C(t.gR())
for(;t.I();)a=a+c+H.C(t.gR())}return a},
yL:function(a,b){return J.xN(a,b)},
yO:function(a,b){var t=new P.dY(a,b)
t.cZ(a,b)
return t},
yP:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.C(t)
if(t>=10)return s+"00"+H.C(t)
return s+"000"+H.C(t)},
yQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
i8:function(a){if(a>=10)return""+a
return"0"+a},
vl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.z7(a)},
z7:function(a){var t=J.aL(a)
if(!!t.$iseQ)return t.C(a)
return H.nJ(a)},
dB:function(a){return new P.cX(!1,null,null,a)},
dV:function(a,b,c){return new P.cX(!0,a,b,c)},
y7:function(a){return new P.cX(!1,null,a,"Must not be null")},
wC:function(a){return new P.eu(null,null,!1,null,null,a)},
jB:function(a,b,c){return new P.eu(null,null,!0,a,b,"Value not in range")},
bD:function(a,b,c,d,e){return new P.eu(b,c,!0,a,d,"Invalid value")},
df:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.as(a)
if(!(0>a)){if(typeof c!=="number")return H.as(c)
t=a>c}else t=!0
if(t)throw H.l(P.bD(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.as(b)
if(!(a>b)){if(typeof c!=="number")return H.as(c)
t=b>c}else t=!0
if(t)throw H.l(P.bD(b,a,c,"end",f))
return b}return c},
bt:function(a,b,c,d,e){var t=e!=null?e:J.ck(b)
return new P.mb(b,t,!0,a,c,"Index out of range")},
lh:function(a){return new P.q1(a)},
de:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.d9(a);s.I();)t.push(s.gR())
if(b)return t
t.fixed$length=Array
return t},
EG:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
f:function(a,b){var t=P.de(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fx:function(a){H.Hb(H.C(a))},
dJ:function(a,b,c){return new H.hh(a,H.tI(a,!1,!0,!1),null,null)},
oJ:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.df(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a4()
s=c<t}else s=!0
return H.wy(s?C.b.c_(a,b,c):a)}if(!!J.aL(a).$isfc)return H.F6(a,b,P.df(b,c,a.length,null,null,null))
return P.FT(a,b,c)},
wV:function(){var t=H.F0()
if(t!=null)return P.wW(t,0,null)
throw H.l(new P.V("'Uri.base' is not supported"))},
wW:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a5(a,b+4)^58)*3|C.c.a5(a,b)^100|C.c.a5(a,b+1)^97|C.c.a5(a,b+2)^116|C.c.a5(a,b+3)^97)>>>0
if(s===0)return P.wU(b>0||c<c?C.c.L(a,b,c):a,5,null).geg()
else if(s===32)return P.wU(C.c.L(a,t,c),0,null).geg()}r=H.a(new Array(8),[P.D])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xo(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.as()
if(p>=b)if(P.xo(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.U()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a4()
if(typeof l!=="number")return H.as(l)
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
s=2}a=g+C.c.L(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aA(a,m,l,"/");++l;++k;++c}else{a=C.c.L(a,b,m)+"/"+C.c.L(a,l,c)
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
else if(p===t&&C.c.aC(a,"https",b)){if(q&&n+4===m&&C.c.aC(a,"443",n+1))if(b===0&&!0){a=C.c.aA(a,n,m,"")
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
k-=b}return new P.qF(a,p,o,n,m,l,k,i,null)}return P.Ga(a,b,c,p,o,n,m,l,k,i)},
wY:function(a,b){return C.b.h1(a.split("&"),P.mL(),new P.pf(b))},
FW:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pc(a)
s=H.cx(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.Z(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.ff(C.c.L(a,p,q),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.x(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.ff(C.c.L(a,p,c),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.x(r,o)
r[o]=m
return r},
wX:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pd(a)
s=new P.pe(a,t)
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
k=J.bb(C.b.gb5(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.FW(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.at()
h=j[1]
if(typeof h!=="number")return H.as(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.at()
i=j[3]
if(typeof i!=="number")return H.as(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aL(e).S(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.x(g,f)
g[f]=0
i=f+1
if(i>=16)return H.x(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.cS()
i=C.d.aS(e,8)
if(f<0||f>=16)return H.x(g,f)
g[f]=i
i=f+1
if(i>=16)return H.x(g,i)
g[i]=e&255
f+=2}}return g},
Ga:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Gi(a,b,d)
else{if(d===b)P.hW(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.Gj(a,t,e-1):""
r=P.Ge(a,e,f,!1)
if(typeof f!=="number")return f.U()
q=f+1
if(typeof g!=="number")return H.as(g)
p=q<g?P.Gg(H.ff(C.c.L(a,q,g),null,new P.r9(a,f)),j):null}else{s=""
r=null
p=null}o=P.Gf(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a4()
n=h<i?P.Gh(a,h+1,i,null):null
return new P.k7(j,s,r,p,o,n,i<c?P.Gd(a,i+1,c):null,null,null,null,null,null)},
x7:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hW:function(a,b,c){throw H.l(new P.bK(c,a,b))},
Gg:function(a,b){if(a!=null&&J.bb(a,P.x7(b)))return
return a},
Ge:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.ak()
t=c-1
if(C.c.Z(a,t)!==93)P.hW(a,b,"Missing end `]` to match `[` in host")
P.wX(a,b+1,t)
return C.c.L(a,b,c).toLowerCase()}if(typeof c!=="number")return H.as(c)
s=b
for(;s<c;++s)if(C.c.Z(a,s)===58){P.wX(a,b,c)
return"["+a+"]"}return P.Gl(a,b,c)},
Gl:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.as(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.Z(a,t)
if(p===37){o=P.xc(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.c9("")
m=C.c.L(a,s,t)
l=r.N+=!q?m.toLowerCase():m
if(n){o=C.c.L(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.N=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.x(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.c9("")
if(s<t){r.N+=C.c.L(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.x(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.hW(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.Z(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.c9("")
m=C.c.L(a,s,t)
r.N+=!q?m.toLowerCase():m
r.N+=P.x8(p)
t+=k
s=t}}}}if(r==null)return C.c.L(a,b,c)
if(s<c){m=C.c.L(a,s,c)
r.N+=!q?m.toLowerCase():m}n=r.N
return n.charCodeAt(0)==0?n:n},
Gi:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xa(C.c.a5(a,b)))P.hW(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a5(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.x(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.hW(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.L(a,b,c)
return P.Gb(s?a.toLowerCase():a)},
Gb:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Gj:function(a,b,c){var t=P.fs(a,b,c,C.Y,!1)
return t==null?C.c.L(a,b,c):t},
Gf:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fs(a,b,c,C.D,!1)
if(r==null)r=C.c.L(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.af(r,"/"))r="/"+r
return P.Gk(r,e,f)},
Gk:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.af(a,"/"))return P.Gm(a,!t||c)
return P.Gn(a)},
Gh:function(a,b,c,d){var t=P.fs(a,b,c,C.k,!1)
return t==null?C.c.L(a,b,c):t},
Gd:function(a,b,c){var t=P.fs(a,b,c,C.k,!1)
return t==null?C.c.L(a,b,c):t},
xc:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.Z(a,b+1)
r=C.c.Z(a,t)
q=H.rg(s)
p=H.rg(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aS(o,4)
if(t>=8)return H.x(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hA(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.L(a,b,b+3).toUpperCase()
return},
x8:function(a){var t,s,r,q,p,o,n,m
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
for(p=0;--r,r>=0;s=128){o=C.a.fw(a,6*r)&63|s
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
p+=3}}return P.oJ(t,0,null)},
fs:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.d8(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a4()
if(typeof c!=="number")return H.as(c)
if(!(r<c))break
c$0:{o=s.Z(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.x(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xc(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.x(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.hW(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.Z(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.x8(o)}}if(p==null)p=new P.c9("")
p.N+=C.c.L(a,q,r)
p.N+=H.C(m)
if(typeof l!=="number")return H.as(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a4()
if(q<c)p.N+=s.L(a,q,c)
t=p.N
return t.charCodeAt(0)==0?t:t},
xb:function(a){if(C.c.af(a,"."))return!0
return C.c.bc(a,"/.")!==-1},
Gn:function(a){var t,s,r,q,p,o,n
if(!P.xb(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.cj)(s),++p){o=s[p]
if(J.bb(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.x(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bd(t,"/")},
Gm:function(a,b){var t,s,r,q,p,o
if(!P.xb(a))return!b?P.x9(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.cj)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.bb(C.b.gb5(t),"..")){if(0>=t.length)return H.x(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.x(t,0)
s=J.rA(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.bb(C.b.gb5(t),".."))t.push("")
if(!b){if(0>=t.length)return H.x(t,0)
s=P.x9(t[0])
if(0>=t.length)return H.x(t,0)
t[0]=s}return C.b.bd(t,"/")},
x9:function(a){var t,s,r,q
t=J.bf(a)
s=t.gm(a)
if(typeof s!=="number")return s.as()
if(s>=2&&P.xa(t.Z(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.as(s)
if(!(r<s))break
q=t.Z(a,r)
if(q===58)return C.c.L(a,0,r)+"%3A"+C.c.ag(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.x(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Gc:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.Z(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.l(P.dB("Invalid URL encoding"))}}return t},
qP:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.as(c)
t=J.d8(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.Z(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.L(a,b,c)
else o=new H.kL(t.L(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.Z(a,s)
if(q>127)throw H.l(P.dB("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.l(P.dB("Truncated URI"))
o.push(P.Gc(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pj(!1).fP(o)},
xa:function(a){var t=a|32
return 97<=t&&t<=122},
wU:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bf(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.as(o)
if(!(r<o))break
c$0:{p=s.Z(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.l(new P.bK("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.l(new P.bK("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.as(o)
if(!(r<o))break
p=s.Z(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gb5(t)
if(p!==44||r!==m+7||!s.aC(a,"base64",m+1))throw H.l(new P.bK("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hn(0,a,o,s.gm(a))
else{l=P.fs(a,o,s.gm(a),C.k,!0)
if(l!=null)a=s.aA(a,o,s.gm(a),l)}return new P.pb(a,t,c)},
Gu:function(){var t,s,r,q,p
t=P.EG(22,new P.r3(),!0,P.d6)
s=new P.r2(t)
r=new P.r4()
q=new P.r5()
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
xo:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xp()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.x(t,d)
r=t[d]
q=C.c.a5(a,s)^96
p=J.i0(r,q>95?31:q)
if(typeof p!=="number")return p.aG()
d=p&31
o=C.d.aS(p,5)
if(o>=8)return H.x(e,o)
e[o]=s}return d},
d7:function d7(){},
bE:function bE(){},
dY:function dY(a,b){this.a=a
this.b=b},
U:function U(){},
dE:function dE(a){this.a=a},
l8:function l8(){},
l9:function l9(){},
eb:function eb(){},
fd:function fd(){},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eu:function eu(e,f,a,b,c,d){var _=this
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
V:function V(a){this.a=a},
eA:function eA(a){this.a=a},
dN:function dN(a){this.a=a},
bN:function bN(a){this.a=a},
nq:function nq(){},
jI:function jI(){},
l0:function l0(a){this.a=a},
q1:function q1(a){this.a=a},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
li:function li(a,bC,$ti){this.a=a
this.bC=bC
this.$ti=$ti},
D:function D(){},
o:function o(){},
jj:function jj(){},
q:function q(){},
bl:function bl(){},
d3:function d3(){},
dk:function dk(){},
ac:function ac(){},
dt:function dt(){},
ev:function ev(){},
dM:function dM(){},
B:function B(){},
c9:function c9(N){this.N=N},
eC:function eC(){},
pf:function pf(a){this.a=a},
pc:function pc(a){this.a=a},
pd:function pd(a){this.a=a},
pe:function pe(a,b){this.a=a
this.b=b},
k7:function k7(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
r9:function r9(a,b){this.a=a
this.b=b},
pb:function pb(a,b,c){this.a=a
this.b=b
this.c=c},
r3:function r3(){},
r2:function r2(a){this.a=a},
r4:function r4(){},
r5:function r5(){},
qF:function qF(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pQ:function pQ(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
xv:function(a){var t,s,r,q,p
if(a==null)return
t=P.mL()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.cj)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
GO:function(a){var t,s
t=new P.bi(0,$.aB,null,[null])
s=new P.dS(t,[null])
a.then(H.di(new P.rb(s),1))["catch"](H.di(new P.rc(s),1))
return t},
rN:function(){var t=$.vi
if(t==null){t=J.kh(window.navigator.userAgent,"Opera",0)
$.vi=t}return t},
vk:function(){var t=$.vj
if(t==null){t=P.rN()!==!0&&J.kh(window.navigator.userAgent,"WebKit",0)
$.vj=t}return t},
yR:function(){var t,s
t=$.vf
if(t!=null)return t
s=$.vg
if(s==null){s=J.kh(window.navigator.userAgent,"Firefox",0)
$.vg=s}if(s)t="-moz-"
else{s=$.vh
if(s==null){s=P.rN()!==!0&&J.kh(window.navigator.userAgent,"Trident/",0)
$.vh=s}if(s)t="-ms-"
else t=P.rN()===!0?"-o-":"-webkit-"}$.vf=t
return t},
qK:function qK(){},
qM:function qM(a,b){this.a=a
this.b=b},
pD:function pD(){},
pE:function pE(a,b){this.a=a
this.b=b},
qL:function qL(a,b){this.a=a
this.b=b},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
rb:function rb(a){this.a=a},
rc:function rc(a){this.a=a},
kR:function kR(){},
kS:function kS(a){this.a=a},
Gs:function(a){var t,s,r
t=new P.bi(0,$.aB,null,[null])
s=new P.k6(t,[null])
a.toString
r=W.T
W.eG(a,"success",new P.r1(a,s),!1,r)
W.eG(a,"error",s.gdL(),!1,r)
return t},
l2:function l2(){},
r1:function r1(a,b){this.a=a
this.b=b},
ma:function ma(){},
nn:function nn(){},
hC:function hC(){},
p5:function p5(){},
G9:function(a){var t=new P.qv(0,0)
t.eR(a)
return t},
qm:function qm(){},
qv:function qv(a,b){this.a=a
this.b=b},
qw:function qw(){},
bT:function bT(){},
kk:function kk(){},
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
lL:function lL(){},
cm:function cm(){},
m8:function m8(){},
d2:function d2(){},
mE:function mE(){},
iH:function iH(){},
j0:function j0(){},
n0:function n0(){},
n1:function n1(){},
d4:function d4(){},
nk:function nk(){},
iI:function iI(){},
j1:function j1(){},
nA:function nA(){},
nF:function nF(){},
o2:function o2(){},
oI:function oI(){},
iJ:function iJ(){},
j2:function j2(){},
kr:function kr(a){this.a=a},
ca:function ca(){},
oL:function oL(){},
oN:function oN(){},
ez:function ez(){},
oV:function oV(){},
d5:function d5(){},
p6:function p6(){},
iK:function iK(){},
j3:function j3(){},
ph:function ph(){},
pl:function pl(){},
pm:function pm(){},
hT:function hT(){},
qB:function qB(){},
qC:function qC(){},
qD:function qD(){},
bg:function bg(){},
d6:function d6(){},
fE:function fE(){},
eN:function eN(){},
fF:function fF(){},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
bB:function bB(){},
dW:function dW(){},
kQ:function kQ(){},
km:function km(){},
nS:function nS(){},
qT:function qT(){},
jH:function jH(){},
iL:function iL(){},
j4:function j4(){}},W={
yC:function(a){if(a!=null)return new Audio(a)
return new Audio()},
yD:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
yN:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
G3:function(a){var t=new W.pO(a,null)
t.eO(a)
return t},
vy:function(a,b,c){return W.vz(a,null,null,b,null,null,null,c).aZ(new W.m2())},
vz:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e0
s=new P.bi(0,$.aB,null,[t])
r=new P.dS(s,[t])
q=new XMLHttpRequest()
C.L.hp(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.Hw
W.eG(q,"load",new W.m3(r,q),!1,t)
W.eG(q,"error",r.gdL(),!1,t)
q.send()
return s},
vA:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
x6:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eG:function(a,b,c,d,e){var t=W.GC(new W.q0(c))
t=new W.q_(0,a,b,t,!1,[e])
t.eP(a,b,c,!1,e)
return t},
Gt:function(a){var t
if(!!J.aL(a).$isea)return a
t=new P.jS([],[],!1)
t.c=!0
return t.b0(a)},
GC:function(a){var t=$.aB
if(t===C.e)return a
return t.fK(a,!0)},
az:function az(){},
eL:function eL(){},
kn:function kn(){},
eO:function eO(){},
cK:function cK(){},
kv:function kv(){},
fT:function fT(){},
fW:function fW(){},
kz:function kz(){},
eP:function eP(){},
kD:function kD(){},
fK:function fK(){},
e9:function e9(){},
kN:function kN(){},
i4:function i4(){},
fO:function fO(){},
kT:function kT(){},
kU:function kU(){},
fP:function fP(){},
fQ:function fQ(){},
kV:function kV(){},
bJ:function bJ(){},
eS:function eS(){},
iz:function iz(){},
pO:function pO(a,b){this.a=a
this.b=b},
ju:function ju(){},
pP:function pP(){},
i6:function i6(){},
kW:function kW(){},
kX:function kX(){},
l1:function l1(){},
eT:function eT(){},
i7:function i7(){},
ea:function ea(){},
i9:function i9(){},
ia:function ia(){},
l4:function l4(){},
ib:function ib(){},
ic:function ic(){},
iA:function iA(){},
iU:function iU(){},
id:function id(){},
ie:function ie(){},
jY:function jY(a,$ti){this.a=a
this.$ti=$ti},
dn:function dn(){},
la:function la(){},
fS:function fS(){},
lg:function lg(){},
T:function T(){},
aS:function aS(){},
lH:function lH(){},
cd:function cd(){},
f_:function f_(){},
iB:function iB(){},
iV:function iV(){},
lI:function lI(){},
lJ:function lJ(){},
lK:function lK(){},
lN:function lN(){},
lO:function lO(){},
iv:function iv(){},
cl:function cl(){},
m_:function m_(){},
f1:function f1(){},
iC:function iC(){},
iW:function iW(){},
ix:function ix(){},
e0:function e0(){},
m2:function m2(){},
m3:function m3(a,b){this.a=a
this.b=b},
h9:function h9(){},
m7:function m7(){},
ha:function ha(){},
f3:function f3(){},
mc:function mc(){},
mB:function mB(){},
hj:function hj(){},
hk:function hk(){},
mT:function mT(){},
mY:function mY(){},
hr:function hr(){},
jo:function jo(){},
n3:function n3(){},
n4:function n4(){},
hs:function hs(){},
cn:function cn(){},
jp:function jp(){},
iM:function iM(){},
j5:function j5(){},
ni:function ni(){},
nj:function nj(){},
aK:function aK(){},
js:function js(){},
iN:function iN(){},
j6:function j6(){},
nm:function nm(){},
nr:function nr(){},
nv:function nv(){},
nx:function nx(){},
e2:function e2(){},
nC:function nC(){},
cf:function cf(){},
jz:function jz(){},
iO:function iO(){},
j7:function j7(){},
nI:function nI(){},
jC:function jC(){},
fi:function fi(){},
jD:function jD(){},
o5:function o5(){},
o8:function o8(){},
o9:function o9(){},
oa:function oa(){},
co:function co(){},
jF:function jF(){},
fU:function fU(){},
fX:function fX(){},
hE:function hE(){},
cp:function cp(){},
jG:function jG(){},
iP:function iP(){},
j8:function j8(){},
fj:function fj(){},
og:function og(){},
ch:function ch(){},
oh:function oh(){},
oi:function oi(){},
on:function on(){},
ci:function ci(){},
e4:function e4(){},
oR:function oR(){},
oT:function oT(){},
cP:function cP(){},
cG:function cG(){},
oW:function oW(){},
iQ:function iQ(){},
j9:function j9(){},
oX:function oX(){},
fV:function fV(){},
fY:function fY(){},
p0:function p0(){},
cr:function cr(){},
jK:function jK(){},
iR:function iR(){},
ja:function ja(){},
fm:function fm(){},
jL:function jL(){},
e5:function e5(){},
pg:function pg(){},
pk:function pk(){},
fn:function fn(){},
jM:function jM(){},
pp:function pp(){},
jP:function jP(){},
pw:function pw(){},
eD:function eD(){},
fo:function fo(){},
pN:function pN(){},
hP:function hP(){},
iS:function iS(){},
jb:function jb(){},
jW:function jW(){},
iT:function iT(){},
jc:function jc(){},
pU:function pU(){},
pV:function pV(){},
k_:function k_(){},
iD:function iD(){},
iX:function iX(){},
qf:function qf(){},
hV:function hV(){},
iE:function iE(){},
iY:function iY(){},
qE:function qE(){},
k3:function k3(){},
iF:function iF(){},
iZ:function iZ(){},
k5:function k5(){},
iG:function iG(){},
j_:function j_(){},
qU:function qU(){},
qV:function qV(){},
pW:function pW(a){this.a=a},
pZ:function pZ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
hQ:function hQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
q_:function q_(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
q0:function q0(a){this.a=a},
bs:function bs(){},
lM:function lM(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qN:function qN(){}},T={
tb:function(a,b,c,d){var t
H.Hk(a,"$isq",[P.D],"$asq")
t=new T.hb(a,null,d,b,null)
t.eH(a,b,c,d)
return t},
wq:function(a,b){return new T.ns(0,a,new Uint8Array(H.cx(b==null?32768:b)))},
FY:function(a){var t=new T.pz(-1,0,0,0,0,null,null,"",[])
t.eL(a)
return t},
FZ:function(a,b){var t=new T.pA(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eM(a,b)
return t},
f2:function(a){var t=new T.m4(null,0,2147483647)
t.eG(a)
return t},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
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
da:function da(a){this.a=a},
hb:function hb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ns:function ns(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pA:function pA(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
pB:function pB(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
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
py:function py(a){this.a=a},
m4:function m4(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kC:function kC(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
kF:function kF(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
lX:function lX(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
Fn:function(a,b,c,d,e){var t,s
t=[P.B]
s=H.a([],t)
t=new T.hD("Glitch",0.01,0.01,0.01,s,0.5,a,new H.t(0,null,null,null,null,null,0,[X.G,P.U]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.F(null,null,A.a_),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.M]),H.a([],[A.fI]),1)
t.a1(a,b,c,d,e)
return t},
hD:function hD(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
yV:function(a,b,c,d){var t,s,r,q
t=new B.dm(new P.c9(""),0,0)
t.ah(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ah(s[q],8)
return t.b_(b)},
yU:function(a,b,c,d){var t,s,r,q,p
t=H.cx(c)
s=new Uint8Array(t)
r=new B.db(null,0)
r.a=J.dU(a,b)
for(q=0;q<c;++q){p=r.a7(8)
if(q>=t)return H.x(s,q)
s[q]=p}return s},
yT:function(a,b,c,d){var t,s,r,q,p
t=new B.dm(new P.c9(""),0,0)
t.ah(a,8)
s=d.gcC()
r=C.f.aj(Math.log(H.ka(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cN(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ah(q[p],r)
return t.b_(b)},
yS:function(a,b,c,d){var t,s,r,q,p,o
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.db(null,0)
p.a=J.dU(a,b)
for(o=0;o<c;++o){r=p.a7(q)
if(o>=t)return H.x(s,o)
s[o]=r}return s}},S={kl:function kl(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},bF:function bF(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},i3:function i3(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},m1:function m1(c,d,a,b){var _=this
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
_.r2=r2},o4:function o4(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},of:function of(y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},fe:function fe(){},ux:function ux(){},uy:function uy(){},uz:function uz(){},rT:function rT(){},rW:function rW(){},rK:function rK(){},uh:function uh(){},uB:function uB(){},uC:function uC(){},kI:function kI(){},u7:function u7(){},u2:function u2(){},mH:function mH(){},rO:function rO(){},rF:function rF(){},kZ:function kZ(){},tP:function tP(){},l_:function l_(){},nw:function nw(){},uo:function uo(){},ul:function ul(){},up:function up(){},rE:function rE(){},lU:function lU(){},kG:function kG(){},rJ:function rJ(){},rI:function rI(){},u8:function u8(){},uq:function uq(){},u9:function u9(){},rV:function rV(){},rU:function rU(){},un:function un(){},um:function um(){},oY:function oY(){},us:function us(){},rL:function rL(){},rM:function rM(){},uA:function uA(){},hq:function hq(){},tV:function tV(){},tW:function tW(){},tX:function tX(){},tY:function tY(){},ui:function ui(){},uj:function uj(){},uk:function uk(){},tU:function tU(){},u_:function u_(){},u0:function u0(){},t8:function t8(){},t9:function t9(){},ta:function ta(){},u1:function u1(){},tZ:function tZ(){},rG:function rG(){},uu:function uu(){},uv:function uv(){},ut:function ut(){}},K={bU:function bU(a,b){this.a=a
this.b=b},mF:function mF(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},o_:function o_(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
this.c=c},bH:function bH(a,b){this.a=a
this.b=b}},A={
H6:function(){A.rf()
W.vy(C.c.ar("../",N.u6())+"navbar.txt",null,null).aZ(O.H8())
A.Hd()
W.eG(window,"scroll",new A.rr(),!1,W.T)},
Hd:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
$.wp=!1
t=new K.bH("7/24/17","Hey, I keep forgetting to update this thing! Most of what I've been working on lately has gone towards adding fan classes. Head over to <a href='character_creator.html'>the character creator</a> if you want to check them out.")
s=$.wp
if(s)t.b="Who is Shogun??? <div class ='strikethroughStuff'>Hey, I keep forgetting to update this thing! Most of what I've been working on lately has gone towards adding fan classes. Head over to <a href='character_creator.html'>the character creator</a> if you want to check them out.</a>"
r=new K.bH("6/28/17","A big shoutout and thanks to everyone who contributed art for the <a href='land_of_rods_and_screens.html'>Land of Rods and Screens</a> There's a lot of very weird, fun, and downright silly stuff in there. It's crazy-awesome that our little project here has such an amazing community already!<br><Br>Speaking of which, I have a favor to ask. I need photo reference for what people in High School are wearing. (That's students age 14-18 for the non-Americans.) I'd love to see all walks of life, dressed up, dressed down, you name it. Turns out it's surprisingly hard to find examples of actual people rather than fashion models and TV stars. Faces aren't necessary, just clothes. You can send photos to karmicRetribution001@gmail.com or thru private message on our Discord. Please don't leave me to source all my clothing from Seventeen and Teen Wolf!")
if(s)r.b="Who is Shogun??? <div class ='strikethroughStuff'>A big shoutout and thanks to everyone who contributed art for the <a href='land_of_rods_and_screens.html'>Land of Rods and Screens</a> There's a lot of very weird, fun, and downright silly stuff in there. It's crazy-awesome that our little project here has such an amazing community already!<br><Br>Speaking of which, I have a favor to ask. I need photo reference for what people in High School are wearing. (That's students age 14-18 for the non-Americans.) I'd love to see all walks of life, dressed up, dressed down, you name it. Turns out it's surprisingly hard to find examples of actual people rather than fashion models and TV stars. Faces aren't necessary, just clothes. You can send photos to karmicRetribution001@gmail.com or thru private message on our Discord. Please don't leave me to source all my clothing from Seventeen and Teen Wolf!</a>"
q=new K.bH("6/13/17","In honor of the best troll's birthday, I drew a little chibi of him. If you want to get your hands on the full-size inks, I've posted them as a backers-only post over on our new <a href = 'https://www.patreon.com/FarragoFiction'>Patreon</a>.  You will always be able to see my work here on Farrago Fiction/SBURBSim, but bonus content may get posted there first, or in a higher quality, as a thank-you for those who choose to be our patrons.<br><br><img src = 'images/misc/Karkat_Color.png'>")
if(s)q.b="Who is Shogun??? <div class ='strikethroughStuff'>In honor of the best troll's birthday, I drew a little chibi of him. If you want to get your hands on the full-size inks, I've posted them as a backers-only post over on our new <a href = 'https://www.patreon.com/FarragoFiction'>Patreon</a>.  You will always be able to see my work here on Farrago Fiction/SBURBSim, but bonus content may get posted there first, or in a higher quality, as a thank-you for those who choose to be our patrons.<br><br><img src = 'images/misc/Karkat_Color.png'></a>"
p=new K.bH("6/08/17","If the AuthorBot gets her own class, then ABjr, should as well, right?  But I'd consider ABjr a Scout rather than a Guide, since she just goes out to find shit then wanders off without explaining anything. And occasionally lurks ominously in the bushes giggling at other people's misfortune. Or something like that. <br><Br><img src='images/authorbot_jr_scout.png'>")
if(s)p.b="Who is Shogun??? <div class ='strikethroughStuff'>If the AuthorBot gets her own class, then ABjr, should as well, right?  But I'd consider ABjr a Scout rather than a Guide, since she just goes out to find shit then wanders off without explaining anything. And occasionally lurks ominously in the bushes giggling at other people's misfortune. Or something like that. <br><Br><img src='images/authorbot_jr_scout.png'></a>"
o=new K.bH("6/02/17","Sometimes I just make stuff because jR wants it. The AuthorBot has earned a more independent identity, so now we have an official SBURBSim god-tier outfit for the Guide class. Go check out her page if you want to see it. <br><Br>There's also a couple of new secret images, if you can find them!")
if(s)o.b="Who is Shogun??? <div class ='strikethroughStuff'>Sometimes I just make stuff because jR wants it. The AuthorBot has earned a more independent identity, so now we have an official SBURBSim god-tier outfit for the Guide class. Go check out her page if you want to see it. <br><Br>There's also a couple of new secret images, if you can find them!</a>"
n=new K.bH("5/20/17","I look at a LOT of sessions. Not as many as JR or AB, but still. And a good amount of the time, I'm actually skimming for specific scenes, or just tying to gauge the overall tone of a session. I thought it would be nice to have some graphical indicators of what each scene is about, and break up the text a bit more. So I made a bazillion tiny icons for different types of scenes. Some of them are only ever going to show up in the rarest of sessions, some are omnipresent.<br><Br>A couple are even animated. :wonk:")
if(s)n.b="Who is Shogun??? <div class ='strikethroughStuff'>I look at a LOT of sessions. Not as many as JR or AB, but still. And a good amount of the time, I'm actually skimming for specific scenes, or just tying to gauge the overall tone of a session. I thought it would be nice to have some graphical indicators of what each scene is about, and break up the text a bit more. So I made a bazillion tiny icons for different types of scenes. Some of them are only ever going to show up in the rarest of sessions, some are omnipresent.<br><Br>A couple are even animated. :wonk:</a>"
m=new K.bH("5/12/17","Booyah - Check this shit out! jR has helped me implement a major visual overhaul for the site. Nifty backgrounds for most pages should be in place. Readability should be improved, and an overall more polished look might even convince people we know what we're doing!")
if(s)m.b="Who is Shogun??? <div class ='strikethroughStuff'>Booyah - Check this shit out! jR has helped me implement a major visual overhaul for the site. Nifty backgrounds for most pages should be in place. Readability should be improved, and an overall more polished look might even convince people we know what we're doing!</a>"
l=new K.bH("5/5/17","It just so happens that I have a fresh masterpiece for you, hot off the canvas and on to your computer where it will sizzle your eyeballs. Screwing with ghosts now comes with sweet special effects! Also, I am told that the main branch will soon have its header in place.<br><Br>PS: Dreambubbles and the afterlife are now a little less 'pediatrician's waiting room' and a little more 'unfathomable space outside of time.''")
if(s)l.b="Who is Shogun??? <div class ='strikethroughStuff'>It just so happens that I have a fresh masterpiece for you, hot off the canvas and on to your computer where it will sizzle your eyeballs. Screwing with ghosts now comes with sweet special effects! Also, I am told that the main branch will soon have its header in place.<br><Br>PS: Dreambubbles and the afterlife are now a little less 'pediatrician's waiting room' and a little more 'unfathomable space outside of time.''</a>"
k=new K.bH("4/21/17","Hey, look at that, an official site header! So fancy! That shit is a fucking symphony on my retinas.")
if(s)k.b="Who is Shogun??? <div class ='strikethroughStuff'>Hey, look at that, an official site header! So fancy! That shit is a fucking symphony on my retinas.</a>"
j=new K.bH("4/17/17","We are up to 60(!!) hairstyles, including all of the canon characters, even if I had to redraw hair for the ones that sucked. That's going to be all the hair for now - I'm going to move on to other items!")
if(s)j.b="Who is Shogun??? <div class ='strikethroughStuff'>We are up to 60(!!) hairstyles, including all of the canon characters, even if I had to redraw hair for the ones that sucked. That's going to be all the hair for now - I'm going to move on to other items!</a>"
i=new K.bH("4/14/17","<a href ='index2.html?lollipop=true'>TRICKSTER MODE ENGAGE!!!11!</a>")
if(s)i.b="Who is Shogun??? <div class ='strikethroughStuff'><a href ='index2.html?lollipop=true'>TRICKSTER MODE ENGAGE!!!11!</a></a>"
h=new K.bH("4/13/17","Happy 413! I tried to finish out the hair for all the dancestors, but.... Kurloz. Seriously. His hair is too big to fit on the canvas. For NO REASON. He's not the Grand Highblood yet! I threw it out and made new hair that better reflects his talksprite. Anyway, I should be able to finish the rest soon. Did you know there are more than 50 hairstyles in the system already? Sheesh.")
if(s)h.b="Who is Shogun??? <div class ='strikethroughStuff'>Happy 413! I tried to finish out the hair for all the dancestors, but.... Kurloz. Seriously. His hair is too big to fit on the canvas. For NO REASON. He's not the Grand Highblood yet! I threw it out and made new hair that better reflects his talksprite. Anyway, I should be able to finish the rest soon. Did you know there are more than 50 hairstyles in the system already? Sheesh.</a>"
g=new K.bH("4/5/17"," Ugh tvros your hair is so ugly<Br>ur head's not even round<Br>look at this bullshit:  <Br> <img src = 'images/tavroshead.png'>")
if(s)g.b="Who is Shogun??? <div class ='strikethroughStuff'> Ugh tvros your hair is so ugly<Br>ur head's not even round<Br>look at this bullshit:  <Br> <img src = 'images/tavroshead.png'></a>"
f=new K.bH("4/4/17"," Muahahaha! Finally I have finished updating all of the existing sprites for hair and I can start adding new ones.")
if(s)f.b="Who is Shogun??? <div class ='strikethroughStuff'> Muahahaha! Finally I have finished updating all of the existing sprites for hair and I can start adding new ones.</a>"
e=new K.bH("3/31/17","Spent today chasing down visual bugs and eating them like a hungry baby dragon. Also banging my face against a scaling issue on the babies that was probably my fault in the first place. I standardized the size of all the rest of the images, but not the babies. Because I'm an idiot.<Br><Br>PS: Hyperrealistic grimdark flames are the best idea I've ever had.")
if(s)e.b="Who is Shogun??? <div class ='strikethroughStuff'>Spent today chasing down visual bugs and eating them like a hungry baby dragon. Also banging my face against a scaling issue on the babies that was probably my fault in the first place. I standardized the size of all the rest of the images, but not the babies. Because I'm an idiot.<Br><Br>PS: Hyperrealistic grimdark flames are the best idea I've ever had.</a>"
d=new K.bH("3/28/17","Here's some proper Dream jammies for all you ungrateful bastards on Reddit.")
if(s)d.b="Who is Shogun??? <div class ='strikethroughStuff'>Here's some proper Dream jammies for all you ungrateful bastards on Reddit.</a>"
c=new K.bH("3/28/17","Finished fixing up another handful of the worst hairstyles! jR figured out how to get the corrections working in the main branch as well, so you should all be able to see them.")
if(s)c.b="Who is Shogun??? <div class ='strikethroughStuff'>Finished fixing up another handful of the worst hairstyles! jR figured out how to get the corrections working in the main branch as well, so you should all be able to see them.</a>"
b=new K.bH("3/27/17","Death by stabs now includes a knife in the corpse, courtesy of the <a href='http://www.mspaintadventures.com/?s=6&p=002228'>Midnight Crew</a>.")
if(s)b.b="Who is Shogun??? <div class ='strikethroughStuff'>Death by stabs now includes a knife in the corpse, courtesy of the <a href='http://www.mspaintadventures.com/?s=6&p=002228'>Midnight Crew</a>.</a>"
a=new K.bH("3/23/17",'There are currently 35 hairstyles. For stupid reasons related to my perfectionism, fixing up the hair sprites takes longer than any other sprite part, even the clothes. The few that are finished to my satisfaction are loaded into the <a href="http://purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html">Experimental</a> branch. Making the images for this page has nothing to do with the delay on those, shut up."')
if(s)a.b='Who is Shogun??? <div class =\'strikethroughStuff\'>There are currently 35 hairstyles. For stupid reasons related to my perfectionism, fixing up the hair sprites takes longer than any other sprite part, even the clothes. The few that are finished to my satisfaction are loaded into the <a href="http://purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html">Experimental</a> branch. Making the images for this page has nothing to do with the delay on those, shut up."</a>'
a0=new K.bH("3/23/17","Why did I spend several hours drawing blank-faced babies in MS Paint?<p><img src='images/Bodies/baby.png'><p>BECAUSE BABY LEGS DON'T WORK THAT WAY, HUSSIE.<p>ahem.<p>Anyway, I want to show off my baby sprites at full size, so you can marvel at their little toes and stupid fingers.<p><img src='images/Bodies/baby1.png'><br><img src='images/Bodies/baby2.png'><br><img src='images/Bodies/baby3.png'>")
if(s)a0.b="Who is Shogun??? <div class ='strikethroughStuff'>Why did I spend several hours drawing blank-faced babies in MS Paint?<p><img src='images/Bodies/baby.png'><p>BECAUSE BABY LEGS DON'T WORK THAT WAY, HUSSIE.<p>ahem.<p>Anyway, I want to show off my baby sprites at full size, so you can marvel at their little toes and stupid fingers.<p><img src='images/Bodies/baby1.png'><br><img src='images/Bodies/baby2.png'><br><img src='images/Bodies/baby3.png'></a>"
a1=new K.bH("3/23/17","Cool, I get my own page!")
if(s)a1.b="Who is Shogun??? <div class ='strikethroughStuff'>Cool, I get my own page!</a>"
a2=[new K.bH("8/5/17","Our newest staff member gets an avatar as well. Arise, Witch of Void!<Br><Br><img src = 'images/paradoxLands.png'>"),t,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1]
for(a3=0;a3<22;++a3){a4=a2[a3]
t=a4.a
a5="<div id = '"+t+"human'><hr> "+("<b>"+t+":</b> ")
t=a4.b
if(t==null)return t.U()
a5+=t+"</div>"
J.rC(document.querySelector("#artist_newsposts"),"beforeend",a5,C.o,null)}},
rr:function rr(){},
kM:function kM(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
j:function(a,b,c,d,e){var t=new A.a_(c,e,null,a,!1,P.a5(null,null,null,G.Y),0,3)
t.M(a,b,c,!1,e)
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
ms:function ms(){},
mr:function mr(){},
fI:function fI(){},
fM:function(a,b,c,d){var t=new A.dX(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eF(a,b,c,d)
return t},
va:function(a,b,c,d){var t=A.fM(0,0,0,255)
t.b=C.a.ab(C.d.aj(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ab(C.d.aj(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ab(C.d.aj(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ab(C.d.aj(d*255),0,255)
return t},
yJ:function(a,b){if(b){if(typeof a!=="number")return a.aG()
return A.fM((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aG()
return A.fM((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
vb:function(a){return A.yJ(H.ff(a,16,new A.ra()),a.length>=8)},
dX:function dX(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
ra:function ra(){},
wl:function(){if($.wj)return
$.wj=!0
Z.zg()},
eo:function(a,b,c,d){var t=0,s=P.bq(),r,q,p,o,n
var $async$eo=P.bA(function(e,f){if(e===1)return P.bx(f,s)
while(true)switch(t){case 0:A.wl()
t=$.$get$cS().a_(0,a)?3:5
break
case 3:q=$.$get$cS().n(0,a)
p=J.aL(q)
if(!!p.$isdK){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cm(q)
t=1
break}}else throw H.l("Requested resource ("+a+") is an unexpected type: "+H.C(J.uY(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.tT==null?8:9
break
case 8:t=10
return P.cI(A.mS(),$async$eo)
case 10:case 9:n=$.tT.ek(a)
t=n!=null?11:12
break
case 11:t=13
return P.cI(A.mN(n),$async$eo)
case 13:if(!$.$get$cS().a_(0,a))$.$get$cS().i(0,a,new Y.dK(a,null,H.a([],[[P.eR,,]]),[null]))
r=$.$get$cS().n(0,a).b
t=1
break
case 12:case 7:r=A.EI(a,!1,d)
t=1
break
case 4:case 1:return P.by(r,s)}})
return P.bz($async$eo,s)},
mS:function(){var t=0,s=P.bq(),r
var $async$mS=P.bA(function(a,b){if(a===1)return P.bx(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cI(A.eo("manifest/manifest.txt",!1,!0,$.vu),$async$mS)
case 2:r.tT=b
return P.by(null,s)}})
return P.bz($async$mS,s)},
EH:function(a){if(!$.$get$cS().a_(0,a))$.$get$cS().i(0,a,new Y.dK(a,null,H.a([],[[P.eR,,]]),[null]))
return $.$get$cS().n(0,a)},
EI:function(a,b,c){var t
if($.$get$cS().a_(0,a))throw H.l("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vt(C.b.gb5(a.split("."))).a
t=A.EH(a)
c.aY(A.wi(a,!1)).aZ(new A.mQ(t))
return t.cm(0)},
mN:function(a){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mN=P.bA(function(b,a0){if(b===1)return P.bx(a0,s)
while(true)switch(t){case 0:t=3
return P.cI(A.eo(a+".bundle",!1,!0,null),$async$mN)
case 3:q=a0
p=C.c.L(a,0,C.c.e0(a,$.$get$wk()))
o=P.d3
n=new P.dS(new P.bi(0,$.aB,null,[o]),[o])
m=H.a([],[P.cC])
for(o=J.xU(q),l=o.length,k=[[P.eR,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.cj)(o),++i){h=o[i]
g=J.bI(h)
f=Z.vt(C.b.gb5(J.eK(g.gK(h),"."))).a
e=p+"/"+H.C(g.gK(h))
if($.$get$cS().a_(0,e)){m.push(A.eo(e,!1,!1,null))
continue}d=H.ke(g.gbb(h),"$isd6")
if(!$.$get$cS().a_(0,e))$.$get$cS().i(0,e,new Y.dK(e,null,H.a([],k),j))
c=$.$get$cS().n(0,e)
m.push(c.cm(0))
f.b4(d.buffer).aZ(new A.mO(f,c))}P.zq(m,null,!1).aZ(new A.mP(n))
r=n.a
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$mN,s)},
hm:function(a,b){var t=0,s=P.bq(),r,q,p,o,n
var $async$hm=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:if($.$get$tS().a_(0,a)){r=$.$get$tS().n(0,a)
t=1
break}q=W.fi
p=new P.bi(0,$.aB,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.eG(n,"load",new A.mR(new P.dS(p,[q]),n),!1,W.T)
n.src=A.wi(a,!1)
r=p
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$hm,s)},
wi:function(a,b){if(C.c.af(a,"/")){a=C.c.ag(a,1)
b=!0}else b=!1
if(b)return H.C(window.location.protocol)+"//"+H.C(window.location.host)+"/"+a
return C.c.ar("../",N.u6())+a},
mQ:function mQ(a){this.a=a},
mO:function mO(a,b){this.a=a
this.b=b},
mP:function mP(a){this.a=a},
mR:function mR(a,b){this.a=a
this.b=b},
nu:function nu(){},
jv:function jv(){},
jA:function jA(a,b){this.a=a
this.b=b},
rf:function(){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$rf=P.bA(function(a0,a1){if(a0===1)return P.bx(a1,s)
while(true)switch(t){case 0:if($.xw){t=1
break}$.xw=!0
D.FS()
q=P.B
p=[q]
o=H.a(["metal"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,0.3)
$.$get$c().h(0,o)
$.E=o
o=H.a(["dutton"],p)
n=$.aa
H.a([],p)
o=new G.bG(n,o,0.6)
$.$get$c().h(0,o)
$.vL=o
o=H.a(["ceramic"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.3)
$.$get$c().h(0,o)
$.bP=o
o=H.a(["bone"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,0.2)
$.$get$c().h(0,o)
$.b9=o
o=H.a(["wood"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.3)
$.$get$c().h(0,o)
$.X=o
o=H.a(["plastic"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.3)
$.$get$c().h(0,o)
$.aM=o
o=H.a(["rubber"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.3)
$.$get$c().h(0,o)
$.c7=o
o=H.a(["paper"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.3)
$.$get$c().h(0,o)
$.L=o
o=H.a(["cloth","fabric"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.3)
$.$get$c().h(0,o)
$.P=o
o=H.a(["glass"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.3)
$.$get$c().h(0,o)
$.b6=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.3)
$.$get$c().h(0,o)
$.bW=o
o=H.a(["flesh","meat","muscle"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.1)
$.$get$c().h(0,o)
$.bh=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.H
H.a([],p)
o=new G.bG(n,o,3.1)
$.$get$c().h(0,o)
$.bm=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.1)
$.$get$c().h(0,o)
$.ce=o
o=H.a(["plant","leaf","vine"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.1)
$.$get$c().h(0,o)
$.b2=o
o=H.a(["feathery"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,-0.1)
$.$get$c().h(0,o)
$.bu=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bG(n,o,0.1)
$.$get$c().h(0,o)
$.bR=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.I
H.a([],p)
o=new G.bG(n,o,-13)
$.$get$c().h(0,o)
$.bQ=o
o=H.a(["stone","rock","concrete"],p)
n=$.w
H.a([],p)
o=new G.bG(n,o,0.3)
$.$get$c().h(0,o)
$.aH=o
o=H.a(["legendary"],p)
n=$.mq
H.a([],p)
o=new G.bG(n,o,13)
$.$get$c().h(0,o)
$.a0=o
o=H.a(["Unbeatable"],p)
n=$.mq
H.a([],p)
o=new G.bG(n,o,40.37)
$.$get$c().h(0,o)
$.Eo=o
o=$.I
H.a([],p)
o=new G.aX(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.aG=o
o=$.tD
H.a([],p)
o=new G.aX(o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.b1=o
o=$.tD
H.a([],p)
o=new G.aX(o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.ax=o
o=$.I
H.a([],p)
o=new G.aX(o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bj=o
o=$.H
H.a([],p)
o=new G.aX(o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c0=o
o=$.I
H.a([],p)
o=new G.aX(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.b8=o
o=$.I
H.a([],p)
o=new G.aX(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bX=o
o=$.I
H.a([],p)
o=new G.aX(o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aP=o
o=$.H
H.a([],p)
o=new G.aX(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aZ=o
o=$.r
H.a([],p)
o=new G.aX(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bn=o
o=$.r
H.a([],p)
o=new G.aX(o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a7=o
o=$.r
H.a([],p)
o=new G.aX(o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.bd=o
o=$.I
H.a([],p)
o=new G.aX(o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.be=o
o=$.I
H.a([],p)
o=new G.aX(o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.aC=o
o=$.I
H.a([],p)
o=new G.aX(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.aw=o
o=$.I
H.a([],p)
o=new G.aX(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.aA=o
o=$.I
H.a([],p)
o=new G.aX(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Z=o
o=$.H
H.a([],p)
o=new G.aX(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.aE=o
o=$.I
H.a([],p)
o=new G.aX(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aN=o
o=$.I
H.a([],p)
o=new G.aX(o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.b5=o
o=$.I
H.a([],p)
o=new G.aX(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bo=o
o=$.I
H.a([],p)
o=new G.aX(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a2=o
o=$.mq
H.a([],p)
o=new G.aX(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.R=o
o=$.mq
H.a([],p)
o=new G.aX(o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.N=o
o=$.I
H.a([],p)
o=new G.aX(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.aI=o
o=$.r
H.a([],p)
o=new G.aX(o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.aY=o
o=$.I
H.a([],p)
o=new G.aX(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aT=o
o=$.I
H.a([],p)
o=new G.aX(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b4=o
o=$.I
H.a([],p)
o=new G.aX(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bL=o
o=$.I
H.a([],p)
o=new G.aX(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bk=o
o=$.I
H.a([],p)
o=new G.aX(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.c6=o
o=$.I
H.a([],p)
o=new G.aX(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.aD=o
o=$.I
H.a([],p)
o=new G.aX(o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.ab=o
o=$.r
H.a([],p)
o=new G.aX(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.b_=o
o=$.I
H.a([],p)
o=new G.aX(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.a9=o
o=$.I
H.a([],p)
o=new G.aX(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aV=o
o=$.I
H.a([],p)
o=new G.aX(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aU=o
o=$.I
H.a([],p)
o=new G.aX(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.b7=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.ar(n,o,0.1)
$.$get$c().h(0,o)
$.f5=o
o=H.a(["a sword"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.f7=o
o=H.a(["a hammer"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tp=o
o=H.a(["a rifle"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.ty=o
o=H.a(["a pistol"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tv=o
o=H.a(["a blade"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.vE=o
o=H.a(["a dagger"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tk=o
o=H.a(["a santa"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.he=o
o=H.a(["a fist"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.vN=o
o=H.a(["claws"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.mi=o
o=H.a(["a grenade"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.mj=o
o=H.a(["a freaking safe"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.w2=o
o=H.a(["a ball"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.ei=o
o=H.a(["a trident"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.wb=o
o=H.a(["a card"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.mh=o
o=H.a(["a frying pan"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tm=o
o=H.a(["a pillow"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.e1=o
o=H.a(["a machinegun"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tr=o
o=H.a(["a shuriken"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.w6=o
o=H.a(["a sling"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.w9=o
o=H.a(["a yoyo"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.wd=o
o=H.a(["a cane"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.vG=o
o=H.a(["a shield"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.f6=o
o=H.a(["a lance"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.vX=o
o=H.a(["a ax"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.td=o
o=H.a(["a sign"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.w1=o
o=H.a(["a book"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.aF=o
o=H.a(["a broom"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.jd=o
o=H.a(["a club"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.jf=o
o=H.a(["a bow"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tg=o
o=H.a(["a whip"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.wc=o
o=H.a(["a staff"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.wa=o
o=H.a(["a needle"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tt=o
o=H.a(["dice"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tl=o
o=H.a(["a fork"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.vO=o
o=H.a(["a pigeon???"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,1.3)
$.$get$c().h(0,o)
$.tu=o
o=H.a(["a chainsaw"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.vH=o
o=H.a(["a sickle"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.w7=o
o=H.a(["a shotgun"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.w4=o
o=H.a(["a stick"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.dd=o
o=H.a(["a chain"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.hd=o
o=H.a(["a wrench"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tB=o
o=H.a(["a shovel"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.w5=o
o=H.a(["a rolling pin"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tA=o
o=H.a(["a puppet"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tw=o
o=H.a(["a razor"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.tx=o
o=H.a(["a pen"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.mm=o
o=H.a(["a bust"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.je=o
o=H.a(["a bowling ball"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.A3=o
o=H.a(["a golf club"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.vQ=o
o=H.a(["a knife"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.vW=o
o=H.a(["scissors"],p)
n=$.a3
H.a([],p)
o=new G.ar(n,o,0.4)
$.$get$c().h(0,o)
$.w3=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.H
m=G.Y
l=[m]
k=H.a([$.E,$.aG,$.aZ],l)
H.a([],p)
o=new G.e("Forged",k,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a([],p)
n=$.w
k=H.a([$.ab,$.aG],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.AS=o
o=H.a(["fossilized"],p)
n=$.H
k=H.a([$.b9,$.aH],l)
H.a([],p)
o=new G.e("Fossilized",k,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["adamantium"],p)
n=$.H
k=H.a([$.b9,$.E],l)
H.a([],p)
o=new G.e("Adamantium",k,n,o,0)
$.$get$c().h(0,o)
$.vD=o
o=H.a([],p)
n=$.w
k=H.a([$.b4,$.aT],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["tatami"],p)
n=$.w
k=H.a([$.P,$.X],l)
H.a([],p)
o=new G.e("Tatami",k,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["mesh","chain link"],p)
n=$.w
k=H.a([$.P,$.E],l)
H.a([],p)
o=new G.e("Mesh",k,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["foil"],p)
n=$.w
k=H.a([$.L,$.E],l)
H.a([],p)
o=new G.e("Foil",k,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["beanbag"],p)
n=$.w
k=H.a([$.P,$.aH],l)
H.a([],p)
o=new G.e("Beanbag",k,n,o,0)
$.$get$c().h(0,o)
$.A_=o
o=H.a(["pleather","faux fur"],p)
n=$.w
k=H.a([$.ce,$.aM],l)
H.a([],p)
o=new G.e("Faux Fur",k,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["plywood"],p)
n=$.w
k=H.a([$.X,$.L],l)
H.a([],p)
o=new G.e("Plywood",k,n,o,0)
$.$get$c().h(0,o)
$.jg=o
o=H.a(["colossus"],p)
n=$.w
k=H.a([$.E,$.bh],l)
H.a([],p)
o=new G.e("Colossus",k,n,o,0)
$.$get$c().h(0,o)
$.vI=o
o=H.a(["rotting","zombie"],p)
n=$.H
k=H.a([$.bR,$.bh],l)
H.a([],p)
o=new G.e("Rotting",k,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["draugr","white walker"],p)
n=$.H
k=H.a([$.bR,$.bh,$.bk],l)
H.a([],p)
o=new G.e("Draugr",k,n,o,0)
$.$get$c().h(0,o)
$.AP=o
o=H.a(["Ultraviolet"],p)
n=$.tC
k=H.a([$.b1,$.ax],l)
H.a([],p)
o=new G.e("Ultraviolet",k,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["Ultraviolence"],p)
n=$.r
k=H.a([$.b1,$.ax,$.aG],l)
H.a([],p)
o=new G.e("Ultraviolence",k,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a([],p)
n=$.r
k=H.a([$.aP,$.bX],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.AN=o
o=H.a(["candy"],p)
n=$.w
k=H.a([$.aC,$.b6],l)
H.a([],p)
o=new G.e("Candy",k,n,o,0)
$.$get$c().h(0,o)
$.th=o
o=H.a(["cotton candy"],p)
n=$.w
k=H.a([$.aC,$.P],l)
H.a([],p)
o=new G.e("Cotton Candy",k,n,o,0)
$.$get$c().h(0,o)
$.Ay=o
o=H.a(["gummy"],p)
n=$.w
k=H.a([$.aC,$.c7],l)
H.a([],p)
o=new G.e("Gum",k,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["marrow"],p)
n=$.w
k=H.a([$.aC,$.b9],l)
H.a([],p)
o=new G.e("Marrow",k,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["toothy"],p)
n=$.a3
k=H.a([$.b9,$.bP],l)
H.a([],p)
o=new G.e("Toothy",k,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["Frost"],p)
n=$.w
k=H.a([$.aH,$.b6,$.bh],l)
H.a([],p)
o=new G.e("Frost",k,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["arsenic","antifreeze"],p)
n=$.r
k=H.a([$.aC,$.bL],l)
H.a([],p)
o=new G.e("Arsenic",k,n,o,0)
$.$get$c().h(0,o)
$.AW=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.w
k=H.a([$.aH,$.b6],l)
H.a([],p)
o=new G.e("Crystal",k,n,o,0)
$.$get$c().h(0,o)
$.tj=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.aI,$.aN,$.b5,$.Z,$.aw,$.bX,$.a2],l)
H.a([],p)
o=new G.e("Mary Sue",k,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.b8,$.ax,$.aG,$.a0,$.aP,$.Z,$.aw,$.aA],l)
H.a([],p)
o=new G.e("Edge Lord",k,n,o,0)
$.$get$c().h(0,o)
$.AU=o
o=H.a(["deadpool"],p)
n=$.a3
k=H.a([$.bR,$.aY,$.aA,$.b5],l)
H.a([],p)
o=new G.e("Deadpool",k,n,o,0)
$.$get$c().h(0,o)
$.AE=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.b8,$.aA],l)
H.a([],p)
o=new G.e("Spoopy",k,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["wolverine"],p)
n=$.a3
k=H.a([$.b9,$.aG,$.aZ],l)
H.a([],p)
o=new G.e("Wolverine",k,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["rabbit's foot"],p)
n=$.a3
k=H.a([$.bX,$.ce],l)
H.a([],p)
o=new G.e("Rabbit's Foot",k,n,o,0)
$.$get$c().h(0,o)
$.w0=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.H
k=H.a([$.aZ,$.X],l)
H.a([],p)
o=new G.e("Tipped",k,n,o,0)
$.$get$c().h(0,o)
$.zT=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a3
k=H.a([$.aZ,$.b_,$.X],l)
H.a([],p)
o=new G.e("Arrow",k,n,o,0)
$.$get$c().h(0,o)
$.tc=o
o=H.a(["training sword","bokken"],p)
n=$.a3
k=H.a([$.X,$.aG],l)
H.a([],p)
o=new G.e("Bokken",k,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aU,$.aA],l)
H.a([],p)
o=new G.e("Irony Type1",k,n,o,0)
$.$get$c().h(0,o)
$.tq=o
o=H.a(["netted","webbed"],p)
n=$.a3
k=H.a([$.bd,$.P],l)
H.a([],p)
o=new G.e("Netted",k,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["barbed wire"],p)
n=$.a3
k=H.a([$.aZ,$.bd,$.E,$.P],l)
H.a([],p)
o=new G.e("Barbed Wire",k,n,o,0)
$.$get$c().h(0,o)
$.zX=o
o=H.a(["morning star"],p)
n=$.a3
k=H.a([$.aZ,$.ab],l)
H.a([],p)
o=new G.e("Morning Star",k,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.b4,$.be],l)
H.a([],p)
o=new G.e("Decadent",k,n,o,0)
$.$get$c().h(0,o)
$.AH=o
o=H.a(["SBAHJ"],p)
n=$.r
k=H.a([$.bQ,$.aA],l)
H.a([],p)
o=new G.e("SBAHJ",k,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["bayonet"],p)
n=$.a3
k=H.a([$.aZ,$.b_],l)
H.a([],p)
o=new G.e("Bayonet",k,n,o,0)
$.$get$c().h(0,o)
$.zZ=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.w
k=H.a([$.bk,$.aA,$.aG],l)
H.a([],p)
o=new G.e("Snoop",k,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["light saber"],p)
n=$.r
k=H.a([$.b1,$.aD,$.aG],l)
H.a([],p)
o=new G.e("Light Saber",k,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a2,$.aU],l)
H.a([],p)
o=new G.e("Fakey Fake",k,n,o,0)
$.$get$c().h(0,o)
$.B2=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a2,$.b7],l)
H.a([],p)
o=new G.e("Real As Shit",k,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["skeletal"],p)
n=$.a3
k=H.a([$.b8,$.aP,$.b9],l)
H.a([],p)
o=new G.e("Skeletal",k,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["green sun"],p)
n=$.tD
k=H.a([$.aD,$.c0,$.b1],l)
H.a([],p)
o=new G.e("Green Sun",k,n,o,0)
$.$get$c().h(0,o)
$.to=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tC
k=H.a([$.ax,$.aw],l)
H.a([],p)
o=new G.e("Midnight",k,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a2,$.b1],l)
H.a([],p)
o=new G.e("Radiant",k,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.aG,$.ax,$.aA],l)
H.a([],p)
o=new G.e("Edgy",k,n,o,0)
$.$get$c().h(0,o)
$.AV=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.r
k=H.a([$.c0,$.bn],l)
H.a([],p)
o=new G.e("Warhead",k,n,o,0)
$.$get$c().h(0,o)
$.zM=o
o=H.a(["living"],p)
n=$.H
k=H.a([$.b9,$.bh,$.aE],l)
H.a([],p)
o=new G.e("Living",k,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["dead","corpse","deceased"],p)
n=$.H
k=H.a([$.b9,$.bh],l)
H.a([],p)
o=new G.e("Dead",k,n,o,0)
$.$get$c().h(0,o)
$.AD=o
o=H.a(["taser"],p)
n=$.r
k=H.a([$.a7,$.bd,$.b_],l)
H.a([],p)
o=new G.e("Taser",k,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["nocturn"],p)
n=$.r
k=H.a([$.ax,$.a9],l)
H.a([],p)
o=new G.e("Nocturn",k,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["dirge"],p)
n=$.r
k=H.a([$.aP,$.a9],l)
H.a([],p)
o=new G.e("Dirge",k,n,o,0)
$.$get$c().h(0,o)
$.AK=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.aw,$.be],l)
H.a([],p)
o=new G.e("Snobbish",k,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.ab,$.a9],l)
H.a([],p)
o=new G.e("Flat(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.aG,$.a9],l)
H.a([],p)
o=new G.e("Sharp(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.aw,$.a9],l)
H.a([],p)
o=new G.e("Sharp(Clothes)",k,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["Bach's"],p)
n=$.aa
k=H.a([$.Z,$.a9],l)
H.a([],p)
o=new G.e("Bach's",k,n,o,0)
$.$get$c().h(0,o)
$.zV=o
o=H.a(["Mozart's"],p)
n=$.aa
k=H.a([$.a2,$.a9],l)
H.a([],p)
o=new G.e("Mozart's",k,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.aa
k=H.a([$.Z,$.c0],l)
H.a([],p)
o=new G.e("Einstein's",k,n,o,0)
$.$get$c().h(0,o)
$.AX=o
o=H.a(["Feynman's"],p)
n=$.aa
k=H.a([$.Z,$.b5],l)
H.a([],p)
o=new G.e("Feynman's",k,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a(["Ziptie"],p)
n=$.aa
k=H.a([$.aM,$.bd],l)
H.a([],p)
o=new G.e("Ziptie",k,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.r
k=H.a([$.E,$.Z],l)
H.a([],p)
o=new G.e("Mobile",k,n,o,0)
$.$get$c().h(0,o)
$.hf=o
o=H.a(["Sassacre"],p)
n=$.aa
k=H.a([$.c6,$.b5],l)
H.a([],p)
o=new G.e("Sassacre",k,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["Sledge"],p)
n=$.r
k=H.a([$.ab,$.c6],l)
H.a([],p)
o=new G.e("Sledge",k,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["Legal"],p)
n=$.r
k=H.a([$.bd,$.L],l)
H.a([],p)
o=new G.e("Legal",k,n,o,0)
$.$get$c().h(0,o)
$.ml=o
o=H.a(["Clown"],p)
n=$.r
k=H.a([$.b5,$.aV],l)
H.a([],p)
o=new G.e("Clown",k,n,o,0)
$.$get$c().h(0,o)
$.As=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.aD,$.aN],l)
H.a([],p)
o=new G.e("Passionate",k,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["pinata"],p)
n=$.a3
k=H.a([$.L,$.aC],l)
H.a([],p)
o=new G.e("Pinata",k,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["anvil"],p)
n=$.r
k=H.a([$.ab,$.c6,$.E],l)
H.a([],p)
o=new G.e("Anvil",k,n,o,0)
$.$get$c().h(0,o)
$.zS=o
o=H.a(["flashbang"],p)
n=$.r
k=H.a([$.b1,$.bn],l)
H.a([],p)
o=new G.e("Flashbang",k,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["smokebomb"],p)
n=$.r
k=H.a([$.ax,$.bn],l)
H.a([],p)
o=new G.e("Smokebomb",k,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["ninja"],p)
n=$.r
k=H.a([$.ax,$.aG],l)
H.a([],p)
o=new G.e("Ninja",k,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["techno"],p)
n=$.r
k=H.a([$.a7,$.a9],l)
H.a([],p)
o=new G.e("Techno",k,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["rock and roll"],p)
n=$.r
k=H.a([$.aH,$.a9],l)
H.a([],p)
o=new G.e("Rock And/Or Roll",k,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a3
k=H.a([$.aE,$.bh,$.b_],l)
H.a([],p)
o=new G.e("Pistol Shrimp",k,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["juggalo"],p)
n=$.r
k=H.a([$.b5,$.a9,$.aV,$.b8],l)
H.a([],p)
o=new G.e("Juggalo",k,n,o,0)
$.$get$c().h(0,o)
$.vV=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.aA,$.a7],l)
H.a([],p)
o=new G.e("Shock Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.ab,$.aA,$.bQ],l)
H.a([],p)
o=new G.e("Weak Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.aD,$.aC],l)
H.a([],p)
o=new G.e("Spicy",k,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["ice cream","popsicle"],p)
n=$.w
k=H.a([$.bk,$.aC],l)
H.a([],p)
o=new G.e("Popsicle",k,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["popsickle"],p)
n=$.w
k=H.a([$.bk,$.aC,$.aG],l)
H.a([],p)
o=new G.e("Popsickle",k,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["icepick"],p)
n=$.w
k=H.a([$.bk,$.aZ],l)
H.a([],p)
o=new G.e("Icepick",k,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.aA,$.aC],l)
H.a([],p)
o=new G.e("Schezwan",k,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["vaporwave"],p)
n=$.r
k=H.a([$.ax,$.a9,$.aA,$.a7],l)
H.a([],p)
o=new G.e("Vaporwave",k,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["mallet"],p)
n=$.a3
k=H.a([$.X,$.ab],l)
H.a([],p)
o=new G.e("Mallet",k,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["fidget"],p)
n=$.r
k=H.a([$.aM,$.aA],l)
H.a([],p)
o=new G.e("Fidget",k,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["gold foil"],p)
n=$.w
k=H.a([$.E,$.L,$.be],l)
H.a([],p)
o=new G.e("Gold Foil",k,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["caviar"],p)
n=$.w
k=H.a([$.aC,$.be],l)
H.a([],p)
o=new G.e("Caviar",k,n,o,0)
$.$get$c().h(0,o)
$.Aj=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.c0,$.aA],l)
H.a([],p)
o=new G.e("RADioactive",k,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.aH,$.a9,$.aI],l)
H.a([],p)
o=new G.e("Glam",k,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.E,$.a9,$.aI],l)
H.a([],p)
o=new G.e("Hair Metal",k,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a2,$.aI],l)
H.a([],p)
o=new G.e("Elven",k,n,o,0)
$.$get$c().h(0,o)
$.AZ=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.E,$.aI],l)
H.a([],p)
o=new G.e("Shiny",k,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.be,$.aI,$.aw],l)
H.a([],p)
o=new G.e("Bespoke",k,n,o,0)
$.$get$c().h(0,o)
$.f4=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.be,$.a9,$.aw],l)
H.a([],p)
o=new G.e("Operatic",k,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["ice","diamond"],p)
n=$.w
k=H.a([$.be,$.bk],l)
H.a([],p)
o=new G.e("Diamond",k,n,o,0)
$.$get$c().h(0,o)
$.vT=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.aD,$.bk],l)
H.a([],p)
o=new G.e("Icy Hot",k,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.aA,$.bk],l)
H.a([],p)
o=new G.e("Cold As Fuck",k,n,o,0)
$.$get$c().h(0,o)
$.vU=o
o=H.a(["winter's","season's"],p)
n=$.aa
k=H.a([$.bj,$.bk],l)
H.a([],p)
o=new G.e("Winter's",k,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.aa
k=H.a([$.a2,$.bk],l)
H.a([],p)
o=new G.e("Christmas",k,n,o,0)
$.$get$c().h(0,o)
$.Ao=o
o=H.a(["Santa Saws"],p)
n=$.aa
k=H.a([$.a2,$.bk,$.aG],l)
H.a([],p)
o=new G.e("Santa Saws",k,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["Santa Sleighs"],p)
n=$.aa
k=H.a([$.he,$.aG],l)
H.a([],p)
o=new G.e("Santa Sleighs",k,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["Santa Claws"],p)
n=$.aa
k=H.a([$.he,$.mi],l)
H.a([],p)
o=new G.e("Santa Claws",k,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Sandy Claws"],p)
n=$.aa
k=H.a([$.he,$.mi,$.aH],l)
H.a([],p)
o=new G.e("Sandy Claws",k,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["Silent Night"],p)
n=$.aa
k=H.a([$.he,$.ax],l)
H.a([],p)
o=new G.e("Silent Night",k,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.aa
k=H.a([$.b8,$.bW],l)
H.a([],p)
o=new G.e("Ghost's",k,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["ghoul","mutant"],p)
n=$.w
k=H.a([$.bh,$.c0,$.bR],l)
H.a([],p)
o=new G.e("Mutant",k,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["skate","skateboard"],p)
n=$.r
k=H.a([$.aA,$.E],l)
H.a([],p)
o=new G.e("Skateboard",k,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["microwave"],p)
n=$.r
k=H.a([$.c0,$.a7,$.aC],l)
H.a([],p)
o=new G.e("Microwave",k,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["orbital"],p)
n=$.r
k=H.a([$.c0,$.a7,$.aC,$.b_],l)
H.a([],p)
o=new G.e("Orbital",k,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a([],p)
n=$.r
k=H.a([$.ab,$.Z],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.vK=o
o=H.a(["uranium"],p)
n=$.w
k=H.a([$.c0,$.aH],l)
H.a([],p)
o=new G.e("Uranium",k,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["mousepad","jar opener"],p)
n=$.r
k=H.a([$.L,$.c7],l)
H.a([],p)
o=new G.e("Mousepad",k,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.aG,$.aH],l)
H.a([],p)
o=new G.e("Sharpened Flint",k,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["flint"],p)
n=$.w
k=H.a([$.aZ,$.aH],l)
H.a([],p)
o=new G.e("Pointed Flint",k,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["picnic"],p)
n=$.r
k=H.a([$.aM,$.aZ],l)
H.a([],p)
o=new G.e("Picnic",k,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.aA,$.bn],l)
H.a([],p)
o=new G.e("Xtreme Xplosion",k,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["lawn"],p)
n=$.r
k=H.a([$.aM,$.b4],l)
H.a([],p)
o=new G.e("Lawn",k,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["upholstered"],p)
n=$.w
k=H.a([$.P,$.b4],l)
H.a([],p)
o=new G.e("Upholstered",k,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["leather"],p)
n=$.w
k=H.a([$.bh,$.b4],l)
H.a([],p)
o=new G.e("Leather",k,n,o,0)
$.$get$c().h(0,o)
$.vZ=o
o=H.a(["shag"],p)
n=$.w
k=H.a([$.ce,$.b4],l)
H.a([],p)
o=new G.e("Shag",k,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.ab,$.aN],l)
H.a([],p)
o=new G.e("Loyal",k,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["porcelain"],p)
n=$.w
k=H.a([$.aI,$.bP],l)
H.a([],p)
o=new G.e("Porcelain",k,n,o,0)
$.$get$c().h(0,o)
$.mo=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a3
k=H.a([$.be,$.bP],l)
H.a([],p)
o=new G.e("Pork Hollow",k,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["n1nj4","katana"],p)
n=$.r
k=H.a([$.aA,$.aG],l)
H.a([],p)
o=new G.e("Katana",k,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["chocolate"],p)
n=$.w
k=H.a([$.aN,$.aC],l)
H.a([],p)
o=new G.e("Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.An=o
o=H.a(["wrapped chocolate"],p)
n=$.w
k=H.a([$.aN,$.aC,$.L,$.E],l)
H.a([],p)
o=new G.e("Wrapped Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["scratch-n-sniff"],p)
n=$.w
k=H.a([$.aA,$.L],l)
H.a([],p)
o=new G.e("Scratch-n-sniff",k,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["mythril","orichalcum"],p)
n=$.w
k=H.a([$.a2,$.E],l)
H.a([],p)
o=new G.e("Mythril",k,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["titanium","steel"],p)
n=$.w
k=H.a([$.ab,$.E],l)
H.a([],p)
o=new G.e("Titanium",k,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["lead"],p)
n=$.w
k=H.a([$.c6,$.E],l)
H.a([],p)
o=new G.e("Lead",k,n,o,0)
$.$get$c().h(0,o)
$.vY=o
o=H.a(["satire","parody","onion"],p)
n=$.r
k=H.a([$.aU,$.b5],l)
H.a([],p)
o=new G.e("Satire",k,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.be,$.b5],l)
H.a([],p)
o=new G.e("Comedy Gold",k,n,o,0)
$.$get$c().h(0,o)
$.Au=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.aw,$.b5],l)
H.a([],p)
o=new G.e("Dry",k,n,o,0)
$.$get$c().h(0,o)
$.AQ=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.b4,$.aU],l)
H.a([],p)
o=new G.e("Polite",k,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["stradivarius"],p)
n=$.aa
k=H.a([$.aw,$.be,$.X,$.a9],l)
H.a([],p)
o=new G.e("Stradivarius",k,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Z,$.aU],l)
H.a([],p)
o=new G.e("Scientistic",k,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["AI"],p)
n=$.r
k=H.a([$.a7,$.aE],l)
H.a([],p)
o=new G.e("AI",k,n,o,0)
$.$get$c().h(0,o)
$.mg=o
o=H.a(["robotic"],p)
n=$.H
k=H.a([$.E,$.a7,$.aE],l)
H.a([],p)
o=new G.e("Robotic",k,n,o,0)
$.$get$c().h(0,o)
$.tz=o
o=H.a(["shrapnel"],p)
n=$.r
k=H.a([$.X,$.bn],l)
H.a([],p)
o=new G.e("Shrapnel",k,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["vocaloid"],p)
n=$.r
k=H.a([$.aE,$.a7,$.a9],l)
H.a([],p)
o=new G.e("Vocaloid",k,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["*Hyun-ae"],p)
n=$.aa
k=H.a([$.aE,$.a7,$.aN],l)
H.a([],p)
o=new G.e("*Hyun-ae",k,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["buckshot"],p)
n=$.r
k=H.a([$.X,$.b_],l)
H.a([],p)
o=new G.e("Buckshot",k,n,o,0)
$.$get$c().h(0,o)
$.A7=o
o=H.a(["cannon"],p)
n=$.r
k=H.a([$.c6,$.b_],l)
H.a([],p)
o=new G.e("Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.Ag=o
o=H.a(["stationary"],p)
n=$.r
k=H.a([$.aw,$.L],l)
H.a([],p)
o=new G.e("Stationary",k,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a([],p)
n=$.r
k=H.a([$.aF,$.L],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a([],p)
n=$.r
k=H.a([$.E,$.b_],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["papercut"],p)
n=$.r
k=H.a([$.aG,$.L],l)
H.a([],p)
o=new G.e("Papercut",k,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["squeaky"],p)
n=$.H
k=H.a([$.ab,$.c7],l)
H.a([],p)
o=new G.e("Squeaky",k,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["kazoo"],p)
n=$.r
k=H.a([$.aU,$.a9],l)
H.a([],p)
o=new G.e("Kazoo",k,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["bandaid"],p)
n=$.r
k=H.a([$.aY,$.L],l)
H.a([],p)
o=new G.e("Bandaid",k,n,o,0)
$.$get$c().h(0,o)
$.zW=o
o=H.a(["gushers"],p)
n=$.r
k=H.a([$.aY,$.aC],l)
H.a([],p)
o=new G.e("Gushers",k,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["medic"],p)
n=$.r
k=H.a([$.aY,$.b_],l)
H.a([],p)
o=new G.e("Medic",k,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["sick nasty","ill"],p)
n=$.H
k=H.a([$.aA,$.bL],l)
H.a([],p)
o=new G.e("Sick Nasty",k,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["gilded","gold leaf"],p)
n=$.w
k=H.a([$.E,$.X],l)
H.a([],p)
o=new G.e("Gilded",k,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["charging","power cord"],p)
n=$.r
k=H.a([$.aM,$.a7],l)
H.a([],p)
o=new G.e("Charging",k,n,o,0)
$.$get$c().h(0,o)
$.Am=o
o=H.a(["safety"],p)
n=$.r
k=H.a([$.c7,$.aG],l)
H.a([],p)
o=new G.e("Rubber Safety",k,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["safety"],p)
n=$.r
k=H.a([$.aM,$.aG],l)
H.a([],p)
o=new G.e("Plastic Safety",k,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aV,$.a7],l)
H.a([],p)
o=new G.e("Thunderous",k,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aV,$.a7,$.Z],l)
H.a([],p)
o=new G.e("Screeching",k,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["mirrored","reflective"],p)
n=$.r
k=H.a([$.b6,$.E],l)
H.a([],p)
o=new G.e("Mirrored",k,n,o,0)
$.$get$c().h(0,o)
$.ts=o
o=H.a(["far seeing","sighted"],p)
n=$.r
k=H.a([$.b6,$.aH,$.a2],l)
H.a([],p)
o=new G.e("Far Seeing",k,n,o,0)
$.$get$c().h(0,o)
$.vJ=o
o=H.a(["disabling","non lethal"],p)
n=$.r
k=H.a([$.c7,$.b_],l)
H.a([],p)
o=new G.e("Nonlethal",k,n,o,0)
$.$get$c().h(0,o)
$.AL=o
o=H.a(["fashionable"],p)
n=$.r
k=H.a([$.aI,$.aw],l)
H.a([],p)
o=new G.e("Fashionable",k,n,o,0)
$.$get$c().h(0,o)
$.vM=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.b5,$.aA],l)
H.a([],p)
o=new G.e("Ironic Type 2",k,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bQ,$.b5],l)
H.a([],p)
o=new G.e("Ironic Type 3",k,n,o,0)
$.$get$c().h(0,o)
$.mk=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aU,$.aA,$.aw],l)
H.a([],p)
o=new G.e("Post Ironic",k,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.bR,$.aV,$.b8],l)
H.a([],p)
o=new G.e("Monstrous",k,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.r
k=H.a([$.b_,$.aA,$.aw],l)
H.a([],p)
o=new G.e("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["golden"],p)
n=$.w
k=H.a([$.E,$.be],l)
H.a([],p)
o=new G.e("Golden",k,n,o,0)
$.$get$c().h(0,o)
$.tn=o
o=H.a(["platinum"],p)
n=$.w
k=H.a([$.b1,$.E],l)
H.a([],p)
o=new G.e("Platinum",k,n,o,0)
$.$get$c().h(0,o)
$.mn=o
o=H.a(["horseshoe"],p)
n=$.r
k=H.a([$.bX,$.E],l)
H.a([],p)
o=new G.e("Horseshoe",k,n,o,0)
$.$get$c().h(0,o)
$.vS=o
o=H.a(["felt"],p)
n=$.r
k=H.a([$.P,$.ce],l)
H.a([],p)
o=new G.e("Felt",k,n,o,0)
$.$get$c().h(0,o)
$.B4=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.aH,$.aw],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.w_=o
o=H.a(["marble"],p)
n=$.w
k=H.a([$.aH,$.c6],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["glitched"],p)
n=$.H
k=H.a([$.bm,$.a7],l)
H.a([],p)
o=new G.e("Glitched",k,n,o,0)
$.$get$c().h(0,o)
$.vP=o
o=H.a(["debugging"],p)
n=$.r
k=H.a([$.aY,$.a7],l)
H.a([],p)
o=new G.e("Debugging",k,n,o,0)
$.$get$c().h(0,o)
$.AG=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.r
k=H.a([$.E,$.aV,$.a9],l)
H.a([],p)
o=new G.e("Metalic",k,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.aE,$.aU],l)
H.a([],p)
o=new G.e("Simulacrum",k,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["Imitation"],p)
n=$.r
k=H.a([$.aC,$.aU],l)
H.a([],p)
o=new G.e("Imitation",k,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["Placebo"],p)
n=$.r
k=H.a([$.aY,$.aU],l)
H.a([],p)
o=new G.e("Placebo",k,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["counterfeit"],p)
n=$.r
k=H.a([$.be,$.aU],l)
H.a([],p)
o=new G.e("Counterfeit",k,n,o,0)
$.$get$c().h(0,o)
$.Az=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.aA,$.aT,$.b5],l)
H.a([],p)
o=new G.e("Surreal1",k,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Z,$.bh],l)
H.a([],p)
o=new G.e("Brainy",k,n,o,0)
$.$get$c().h(0,o)
$.A4=o
o=H.a(["Incendiary"],p)
n=$.r
k=H.a([$.aD,$.bn],l)
H.a([],p)
o=new G.e("Incendiary",k,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["C-4"],p)
n=$.w
k=H.a([$.bn,$.aM],l)
H.a([],p)
o=new G.e("C-4",k,n,o,0)
$.$get$c().h(0,o)
$.Ab=o
o=H.a(["fae"],p)
n=$.r
k=H.a([$.a2,$.b1,$.bm],l)
H.a([],p)
o=new G.e("Fae",k,n,o,0)
$.$get$c().h(0,o)
$.B1=o
o=H.a(["Plutonium"],p)
n=$.w
k=H.a([$.E,$.c0],l)
H.a([],p)
o=new G.e("Plutonium",k,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["Lithium"],p)
n=$.w
k=H.a([$.E,$.a7],l)
H.a([],p)
o=new G.e("Lithium",k,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["Molten"],p)
n=$.w
k=H.a([$.E,$.aD],l)
H.a([],p)
o=new G.e("Molten",k,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.w
k=H.a([$.aH,$.aD],l)
H.a([],p)
o=new G.e("Magma",k,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["Rusty"],p)
n=$.H
k=H.a([$.E,$.bQ],l)
H.a([],p)
o=new G.e("Rusty",k,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["Fonzie"],p)
n=$.r
k=H.a([$.aG,$.aA,$.aw],l)
H.a([],p)
o=new G.e("Fonzie",k,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["Romcom"],p)
n=$.r
k=H.a([$.aN,$.b5],l)
H.a([],p)
o=new G.e("Romcom",k,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["Alluring"],p)
n=$.r
k=H.a([$.aI,$.b1],l)
H.a([],p)
o=new G.e("Alluring",k,n,o,0)
$.$get$c().h(0,o)
$.zP=o
o=H.a(["Masquerade"],p)
n=$.r
k=H.a([$.aI,$.ax],l)
H.a([],p)
o=new G.e("Masquerade",k,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.r
k=H.a([$.aH,$.bh],l)
H.a([],p)
o=new G.e("Stoneskin",k,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["Psionic"],p)
n=$.r
k=H.a([$.a2,$.Z],l)
H.a([],p)
o=new G.e("Psionic",k,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["Dwarven"],p)
n=$.r
k=H.a([$.a2,$.aH],l)
H.a([],p)
o=new G.e("Dwarven",k,n,o,0)
$.$get$c().h(0,o)
$.AT=o
o=H.a(["Elemental","Animated"],p)
n=$.w
k=H.a([$.a2,$.aE],l)
H.a([],p)
o=new G.e("Elemental",k,n,o,0)
$.$get$c().h(0,o)
$.AY=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.aC,$.aw],l)
H.a([],p)
o=new G.e("Gourmet",k,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["Stained Glass"],p)
n=$.w
k=H.a([$.b6,$.aI,$.be],l)
H.a([],p)
o=new G.e("Stained Glass",k,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["Gauze"],p)
n=$.r
k=H.a([$.aY,$.P],l)
H.a([],p)
o=new G.e("Gauze",k,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["Locked"],p)
n=$.H
k=H.a([$.bd,$.bo],l)
H.a([],p)
o=new G.e("Locked",k,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["Etched"],p)
n=$.r
k=H.a([$.aH,$.L],l)
H.a([],p)
o=new G.e("Etched",k,n,o,0)
$.$get$c().h(0,o)
$.B0=o
o=H.a(["Papyrus"],p)
n=$.w
k=H.a([$.L,$.b2],l)
H.a([],p)
o=new G.e("Papyrus",k,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["film"],p)
n=$.r
k=H.a([$.L,$.aM],l)
H.a([],p)
o=new G.e("Film",k,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["Saucey"],p)
n=$.w
k=H.a([$.bm,$.bo,$.bR],l)
H.a([],p)
o=new G.e("Saucey",k,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["Lottery"],p)
n=$.r
k=H.a([$.L,$.bX],l)
H.a([],p)
o=new G.e("Lottery",k,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["Blindfolded"],p)
n=$.r
k=H.a([$.ax,$.P],l)
H.a([],p)
o=new G.e("Blindfolded",k,n,o,0)
$.$get$c().h(0,o)
$.vF=o
o=H.a(["Possessed"],p)
n=$.H
k=H.a([$.bW,$.bh],l)
H.a([],p)
o=new G.e("Possessed",k,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bW,$.aD],l)
H.a([],p)
o=new G.e("Infernal",k,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.r
k=H.a([$.X,$.b7,$.tw,$.aE],l)
H.a([],p)
o=new G.e("Geppetto",k,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bh,$.bm],l)
H.a([],p)
o=new G.e("Abominable",k,n,o,0)
$.$get$c().h(0,o)
$.zN=o
o=H.a(["Ashen"],p)
n=$.r
k=H.a([$.aN,$.aP],l)
H.a([],p)
o=new G.e("Ashen",k,n,o,0)
$.$get$c().h(0,o)
$.zU=o
o=H.a(["Pale"],p)
n=$.r
k=H.a([$.aN,$.bj],l)
H.a([],p)
o=new G.e("Pale",k,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["Pitch"],p)
n=$.r
k=H.a([$.aN,$.bo],l)
H.a([],p)
o=new G.e("Pitch",k,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.aA,$.aD],l)
H.a([],p)
o=new G.e("Lit",k,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Hypnotizing"],p)
n=$.r
k=H.a([$.a2,$.bj],l)
H.a([],p)
o=new G.e("Hypnotizing",k,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["Tranquilizing"],p)
n=$.r
k=H.a([$.bj,$.bd],l)
H.a([],p)
o=new G.e("Tranquilizing",k,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a([],p)
n=$.r
k=H.a([$.bj,$.bo],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Ae=o
o=H.a(["Ghost Rider's"],p)
n=$.aa
k=H.a([$.hd,$.aD,$.bW],l)
H.a([],p)
o=new G.e("Ghost Rider",k,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Z,$.bk],l)
H.a([],p)
o=new G.e("Logical",k,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Duelist's"],p)
n=$.aa
k=H.a([$.b_,$.aw],l)
H.a([],p)
o=new G.e("Duelist's",k,n,o,0)
$.$get$c().h(0,o)
$.AR=o
o=H.a(["Silenced"],p)
n=$.H
k=H.a([$.b_,$.ax],l)
H.a([],p)
o=new G.e("Silenced",k,n,o,0)
$.$get$c().h(0,o)
$.w8=o
o=H.a(["Deudly"],p)
n=$.H
k=H.a([$.b_,$.bQ],l)
H.a([],p)
o=new G.e("Deudly",k,n,o,0)
$.$get$c().h(0,o)
$.AF=o
o=H.a(["Screaming"],p)
n=$.H
k=H.a([$.aV,$.b8],l)
H.a([],p)
o=new G.e("Screaming",k,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.bR,$.a9],l)
H.a([],p)
o=new G.e("Cacophonous",k,n,o,0)
$.$get$c().h(0,o)
$.Ac=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.bR,$.aI],l)
H.a([],p)
o=new G.e("Sublime",k,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["Masterwork"],p)
n=$.w
k=H.a([$.b7,$.be],l)
H.a([],p)
o=new G.e("Masterwork",k,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["BroodFester"],p)
n=$.r
k=H.a([$.aE,$.b8,$.bm,$.a2],l)
H.a([],p)
o=new G.e("BroodFester",k,n,o,0)
$.$get$c().h(0,o)
$.A6=o
o=H.a(["[REDACTED]"],p)
n=$.r
k=H.a([$.bm,$.ax],l)
H.a([],p)
o=new G.e("[REDACTED]",k,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["Pop Rocks"],p)
n=$.r
k=H.a([$.aC,$.bn],l)
H.a([],p)
o=new G.e("Pop Rocks",k,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["Disguised"],p)
n=$.H
k=H.a([$.ax,$.aU],l)
H.a([],p)
o=new G.e("Disguised",k,n,o,0)
$.$get$c().h(0,o)
$.AM=o
o=H.a(["Haunted"],p)
n=$.H
k=H.a([$.aT,$.bW],l)
H.a([],p)
o=new G.e("Haunted",k,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Cognitohazardous"],p)
n=$.H
k=H.a([$.bm,$.Z],l)
H.a([],p)
o=new G.e("Cognitohazardous",k,n,o,0)
$.$get$c().h(0,o)
$.At=o
o=H.a(["Staticy"],p)
n=$.H
k=H.a([$.aT,$.a7],l)
H.a([],p)
o=new G.e("Staticy",k,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["Jadite"],p)
n=$.r
k=H.a([$.b6,$.c0],l)
H.a([],p)
o=new G.e("Jadite",k,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["Tickling"],p)
n=$.r
k=H.a([$.b5,$.aT],l)
H.a([],p)
o=new G.e("Tickling",k,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["Composite"],p)
n=$.r
k=H.a([$.E,$.bP],l)
H.a([],p)
o=new G.e("Composite",k,n,o,0)
$.$get$c().h(0,o)
$.Av=o
o=H.a(["High-Powered"],p)
n=$.H
k=H.a([$.bn,$.b_],l)
H.a([],p)
o=new G.e("High-Powered",k,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["Concussive"],p)
n=$.r
k=H.a([$.bn,$.ab],l)
H.a([],p)
o=new G.e("Concussive",k,n,o,0)
$.$get$c().h(0,o)
$.Aw=o
o=H.a(["Down"],p)
n=$.w
k=H.a([$.b4,$.bu],l)
H.a([],p)
o=new G.e("Down",k,n,o,0)
$.$get$c().h(0,o)
$.AO=o
o=H.a(["Prickly"],p)
n=$.w
k=H.a([$.aT,$.aZ],l)
H.a([],p)
o=new G.e("Prickly",k,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.r
k=H.a([$.aT,$.ax,$.a7],l)
H.a([],p)
o=new G.e("Deep-Web",k,n,o,0)
$.$get$c().h(0,o)
$.AI=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.w
k=H.a([$.aZ,$.aG],l)
H.a([],p)
o=new G.e("Jagged",k,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["Nanofiber"],p)
n=$.w
k=H.a([$.P,$.Z],l)
H.a([],p)
o=new G.e("Nanofiber",k,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["Clanging"],p)
n=$.r
k=H.a([$.E,$.aV],l)
H.a([],p)
o=new G.e("Clanging",k,n,o,0)
$.$get$c().h(0,o)
$.Ap=o
o=H.a(["Silver"],p)
n=$.w
k=H.a([$.E,$.aw],l)
H.a([],p)
o=new G.e("Silver",k,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["Withered"],p)
n=$.H
k=H.a([$.aP,$.b2],l)
H.a([],p)
o=new G.e("Withered",k,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a(["Shattered"],p)
n=$.H
k=H.a([$.b6,$.bQ],l)
H.a([],p)
o=new G.e("Shattered",k,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["Miner's"],p)
n=$.aa
k=H.a([$.aH,$.E],l)
H.a([],p)
o=new G.e("Miner's",k,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Singing"],p)
n=$.r
k=H.a([$.a9,$.aE],l)
H.a([],p)
o=new G.e("Singing",k,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["Mitochondrial"],p)
n=$.r
k=H.a([$.bh,$.a7],l)
H.a([],p)
o=new G.e("Mitochondrial",k,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["Blackout","EMP"],p)
n=$.r
k=H.a([$.ax,$.a7],l)
H.a([],p)
o=new G.e("Blackout",k,n,o,0)
$.$get$c().h(0,o)
$.A1=o
o=H.a(["Asbestos"],p)
n=$.w
k=H.a([$.aH,$.bL],l)
H.a([],p)
o=new G.e("Asbestos",k,n,o,0)
$.$get$c().h(0,o)
$.zO=o
o=H.a(["Mercurial"],p)
n=$.w
k=H.a([$.bL,$.E],l)
H.a([],p)
o=new G.e("Mercurial",k,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["Bulletproof"],p)
n=$.w
k=H.a([$.P,$.ab],l)
H.a([],p)
o=new G.e("Bulletproof",k,n,o,0)
$.$get$c().h(0,o)
$.A9=o
o=H.a(["Cotton"],p)
n=$.w
k=H.a([$.b2,$.P],l)
H.a([],p)
o=new G.e("Cotton",k,n,o,0)
$.$get$c().h(0,o)
$.Ax=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.r
k=H.a([$.bo,$.b1],l)
H.a([],p)
o=new G.e("Blinding",k,n,o,0)
$.$get$c().h(0,o)
$.A2=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.b1,$.Z],l)
H.a([],p)
o=new G.e("Brilliant",k,n,o,0)
$.$get$c().h(0,o)
$.A5=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.bo,$.Z],l)
H.a([],p)
o=new G.e("Offensive",k,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["Poached"],p)
n=$.H
k=H.a([$.bh,$.be],l)
H.a([],p)
o=new G.e("Poached",k,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["Tapestry"],p)
n=$.w
k=H.a([$.P,$.aI],l)
H.a([],p)
o=new G.e("Tapestry",k,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.P,$.aT],l)
H.a([],p)
o=new G.e("Itchy",k,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Wishbone"],p)
n=$.w
k=H.a([$.bX,$.b9],l)
H.a([],p)
o=new G.e("Wishbone",k,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["Rattling"],p)
n=$.H
k=H.a([$.aV,$.b9],l)
H.a([],p)
o=new G.e("Rattling",k,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["Cranial"],p)
n=$.w
k=H.a([$.Z,$.b9],l)
H.a([],p)
o=new G.e("Cranial",k,n,o,0)
$.$get$c().h(0,o)
$.AB=o
o=H.a(["Humerus"],p)
n=$.w
k=H.a([$.b5,$.b9],l)
H.a([],p)
o=new G.e("Humerus",k,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["Massage"],p)
n=$.r
k=H.a([$.aY,$.b4],l)
H.a([],p)
o=new G.e("Massage",k,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aV,$.bo],l)
H.a([],p)
o=new G.e("Pestersome",k,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["Shockwave"],p)
n=$.r
k=H.a([$.aV,$.bn],l)
H.a([],p)
o=new G.e("Shockwave",k,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["Antivenom"],p)
n=$.r
k=H.a([$.bL,$.aY],l)
H.a([],p)
o=new G.e("Antivenom",k,n,o,0)
$.$get$c().h(0,o)
$.zR=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.w
k=H.a([$.aD,$.a2],l)
H.a([],p)
o=new G.e("Will O Wisp",k,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["Fiberglass"],p)
n=$.w
k=H.a([$.P,$.b6],l)
H.a([],p)
o=new G.e("Fiberglass",k,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["Skull"],p)
n=$.w
k=H.a([$.b9,$.b8],l)
H.a([],p)
o=new G.e("Skull",k,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["Enchanted"],p)
n=$.H
k=H.a([$.a2,$.bX],l)
H.a([],p)
o=new G.e("Enchanted",k,n,o,0)
$.$get$c().h(0,o)
$.B_=o
o=H.a(["Berserker's"],p)
n=$.aa
k=H.a([$.a2,$.bo],l)
H.a([],p)
o=new G.e("Berserker's",k,n,o,0)
$.$get$c().h(0,o)
$.A0=o
o=H.a(["Clerical"],p)
n=$.aa
k=H.a([$.a2,$.aY],l)
H.a([],p)
o=new G.e("Clerical",k,n,o,0)
$.$get$c().h(0,o)
$.Aq=o
o=H.a(["Cauterizing"],p)
n=$.r
k=H.a([$.aY,$.aD],l)
H.a([],p)
o=new G.e("Cauterizing",k,n,o,0)
$.$get$c().h(0,o)
$.Ai=o
o=H.a(["X-Ray"],p)
n=$.r
k=H.a([$.c0,$.b1],l)
H.a([],p)
o=new G.e("X-Ray",k,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Z,$.bX],l)
H.a([],p)
o=new G.e("Clever",k,n,o,0)
$.$get$c().h(0,o)
$.Ar=o
o=H.a(["Fireplace"],p)
n=$.r
k=H.a([$.b4,$.aD],l)
H.a([],p)
o=new G.e("Fireplace",k,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["Crackling"],p)
n=$.H
k=H.a([$.aV,$.aD],l)
H.a([],p)
o=new G.e("Crackling",k,n,o,0)
$.$get$c().h(0,o)
$.AA=o
o=H.a(["Thumping"],p)
n=$.H
k=H.a([$.aV,$.c6],l)
H.a([],p)
o=new G.e("Thumping",k,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["Shrieking","Banshee"],p)
n=$.H
k=H.a([$.bW,$.aV],l)
H.a([],p)
o=new G.e("Banshee",k,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.b5,$.bm],l)
H.a([],p)
o=new G.e("Surreal2",k,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["Aloe","Willowbark"],p)
n=$.r
k=H.a([$.aY,$.b2],l)
H.a([],p)
o=new G.e("Aloe",k,n,o,0)
$.$get$c().h(0,o)
$.zQ=o
o=H.a(["Rose"],p)
n=$.r
k=H.a([$.aN,$.b2],l)
H.a([],p)
o=new G.e("Rose",k,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["Knock Knock"],p)
n=$.r
k=H.a([$.b5,$.ab],l)
H.a([],p)
o=new G.e("Knock Knock",k,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["Lifesteal"],p)
n=$.r
k=H.a([$.a2,$.bL],l)
H.a([],p)
o=new G.e("Lifesteal",k,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["Tragic"],p)
n=$.r
k=H.a([$.aI,$.aP],l)
H.a([],p)
o=new G.e("Tragic",k,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["Slapstick"],p)
n=$.r
k=H.a([$.aG,$.b5],l)
H.a([],p)
o=new G.e("Slapstick",k,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["Gross Out"],p)
n=$.r
k=H.a([$.bR,$.b5],l)
H.a([],p)
o=new G.e("Gross Out",k,n,o,0)
$.$get$c().h(0,o)
$.vR=o
o=H.a(["Flowery"],p)
n=$.w
k=H.a([$.aI,$.b2],l)
H.a([],p)
o=new G.e("Flowery",k,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["Poison Ivy"],p)
n=$.w
k=H.a([$.bL,$.b2],l)
H.a([],p)
o=new G.e("Poison Ivy",k,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.H
k=H.a([$.a2,$.bu],l)
H.a([],p)
o=new G.e("Winged",k,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["Forbidden Fruit"],p)
n=$.r
k=H.a([$.b2,$.aC,$.aP],l)
H.a([],p)
o=new G.e("Forbidden Fruit",k,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.bd,$.aE],l)
H.a([],p)
o=new G.e("Lawful",k,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.bo,$.aE],l)
H.a([],p)
o=new G.e("Chaotic",k,n,o,0)
$.$get$c().h(0,o)
$.ti=o
o=H.a(["Hypothermic"],p)
n=$.H
k=H.a([$.aP,$.bk],l)
H.a([],p)
o=new G.e("Hypothermic",k,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["Hyperthermic"],p)
n=$.H
k=H.a([$.aP,$.aD],l)
H.a([],p)
o=new G.e("Hyperthermic",k,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["Shackled"],p)
n=$.H
k=H.a([$.bd,$.c6],l)
H.a([],p)
o=new G.e("Shackled",k,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Z,$.aN],l)
H.a([],p)
o=new G.e("Poetic",k,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["Holographic"],p)
n=$.w
k=H.a([$.b1,$.Z,$.b6,$.a7],l)
H.a([],p)
o=new G.e("Holographic",k,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["Casket","Coffin"],p)
n=$.w
k=H.a([$.X,$.aP],l)
H.a([],p)
o=new G.e("Casket",k,n,o,0)
$.$get$c().h(0,o)
$.Ah=o
o=H.a(["Spectral"],p)
n=$.w
k=H.a([$.bW,$.a2],l)
H.a([],p)
o=new G.e("Spectral",k,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["Phoenix"],p)
n=$.w
k=H.a([$.aD,$.bu],l)
H.a([],p)
o=new G.e("Phoenix",k,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["Tattered"],p)
n=$.H
k=H.a([$.P,$.aP],l)
H.a([],p)
o=new G.e("Tattered",k,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["Woodwind","Reed"],p)
n=$.r
k=H.a([$.a9,$.X],l)
H.a([],p)
o=new G.e("Woodwind",k,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["Bone Hurting"],p)
n=$.r
k=H.a([$.aT,$.b9],l)
H.a([],p)
o=new G.e("Bone Hurting",k,n,o,0)
$.$get$c().h(0,o)
$.tf=o
o=H.a(["Bone Healing:"],p)
n=$.r
k=H.a([$.aY,$.b9],l)
H.a([],p)
o=new G.e("Bone Healing:",k,n,o,0)
$.$get$c().h(0,o)
$.te=o
o=H.a(["Calcium"],p)
n=$.w
k=H.a([$.b9,$.aY,$.aC],l)
H.a([],p)
o=new G.e("Calcium",k,n,o,0)
$.$get$c().h(0,o)
$.Ad=o
o=H.a(["Fleece"],p)
n=$.w
k=H.a([$.P,$.aD],l)
H.a([],p)
o=new G.e("Fleece",k,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["Potted"],p)
n=$.w
k=H.a([$.bP,$.b2],l)
H.a([],p)
o=new G.e("Potted",k,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.w
k=H.a([$.E,$.aC],l)
H.a([],p)
o=new G.e("Canned",k,n,o,0)
$.$get$c().h(0,o)
$.Af=o
o=H.a(["Diseased"],p)
n=$.H
k=H.a([$.aP,$.bh],l)
H.a([],p)
o=new G.e("Diseased",k,n,o,0)
$.$get$c().h(0,o)
$.AJ=o
o=H.a(["Porcupine"],p)
n=$.w
k=H.a([$.aZ,$.ce],l)
H.a([],p)
o=new G.e("Porcupine",k,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["Fanged"],p)
n=$.H
k=H.a([$.b9,$.aZ],l)
H.a([],p)
o=new G.e("Fanged",k,n,o,0)
$.$get$c().h(0,o)
$.B3=o
o=H.a(["Basalt"],p)
n=$.w
k=H.a([$.aH,$.ax],l)
H.a([],p)
o=new G.e("Basalt",k,n,o,0)
$.$get$c().h(0,o)
$.zY=o
o=H.a(["Obsidian"],p)
n=$.w
k=H.a([$.b6,$.ax],l)
H.a([],p)
o=new G.e("Obsidian",k,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["Fenestrated"],p)
n=$.w
k=H.a([$.b6,$.X],l)
H.a([],p)
o=new G.e("Fenestrated",k,n,o,0)
$.$get$c().h(0,o)
$.B5=o
o=H.a(["Plexiglass"],p)
n=$.w
k=H.a([$.b6,$.aM],l)
H.a([],p)
o=new G.e("Plexiglass",k,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["Ceramic Wrap"],p)
n=$.r
k=H.a([$.bP,$.L],l)
H.a([],p)
o=new G.e("Ceramic Wrap",k,n,o,0)
$.$get$c().h(0,o)
$.Al=o
o=H.a(["Fungal"],p)
n=$.w
k=H.a([$.b2,$.bR],l)
H.a([],p)
o=new G.e("Fungal",k,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Thorny"],p)
n=$.H
k=H.a([$.b2,$.aZ],l)
H.a([],p)
o=new G.e("Thorny",k,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["Bulbed"],p)
n=$.H
k=H.a([$.b2,$.ab],l)
H.a([],p)
o=new G.e("Bulbed",k,n,o,0)
$.$get$c().h(0,o)
$.A8=o
o=H.a(["Glass Cannon"],p)
n=$.r
k=H.a([$.b6,$.b_],l)
H.a([],p)
o=new G.e("Glass Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Caoutchouc"],p)
n=$.r
k=H.a([$.b2,$.c7],l)
H.a([],p)
o=new G.e("Caoutchouc",k,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["Cellulose"],p)
n=$.w
k=H.a([$.b2,$.aM],l)
H.a([],p)
o=new G.e("Cellulose",k,n,o,0)
$.$get$c().h(0,o)
$.Ak=o
o=H.a(["Horrorcore"],p)
n=$.r
k=H.a([$.a9,$.b8],l)
H.a([],p)
o=new G.e("Horrorcore",k,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Nightcore"],p)
n=$.r
k=H.a([$.bm,$.a9],l)
H.a([],p)
o=new G.e("Nightcore",k,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["Crazy Bus"],p)
n=$.r
k=H.a([$.bm,$.a7,$.a9],l)
H.a([],p)
o=new G.e("Crazy Bus",k,n,o,0)
$.$get$c().h(0,o)
$.AC=o
o=H.a(["Burdock"],p)
n=$.w
k=H.a([$.b2,$.ce],l)
H.a([],p)
o=new G.e("Burdock",k,n,o,0)
$.$get$c().h(0,o)
$.Aa=o
o=H.a(["Necrotic"],p)
n=$.H
k=H.a([$.b9,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.w
k=H.a([$.b9,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.H
k=H.a([$.b9,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.r
k=H.a([$.b9,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.e("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.w
k=H.a([$.b9,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.r
k=H.a([$.b9,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.X,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.w
k=H.a([$.X,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.e("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.w
k=H.a([$.X,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.H
k=H.a([$.X,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.w
k=H.a([$.X,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.w
k=H.a([$.X,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.r
k=H.a([$.X,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.w
k=H.a([$.X,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.e("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.r
k=H.a([$.X,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.r
k=H.a([$.X,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.aa
k=H.a([$.X,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.w
k=H.a([$.X,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.w
k=H.a([$.X,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.w
k=H.a([$.X,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.r
k=H.a([$.X,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.w
k=H.a([$.aM,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.r
k=H.a([$.L,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.w
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
k=H.a([$.P,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.w
k=H.a([$.aH,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.r
k=H.a([$.aH,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.w
k=H.a([$.aH,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.w
k=H.a([$.aH,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.w
k=H.a([$.aH,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.w
k=H.a([$.aH,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.w
k=H.a([$.aH,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.w
k=H.a([$.aH,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.H
k=H.a([$.aH,$.ce],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.H
k=H.a([$.Z,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.H
k=H.a([$.P,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.r
k=H.a([$.P,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.P,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.r
k=H.a([$.P,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.e("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.r
k=H.a([$.P,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.I
k=H.a([$.P,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.H
k=H.a([$.P,$.c6],l)
H.a([],p)
$.$get$c().h(0,new G.e("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.P,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.P,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.e("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.w
k=H.a([$.P,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.e("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.w
k=H.a([$.P,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.e("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.r
k=H.a([$.P,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.w
k=H.a([$.P,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.w
k=H.a([$.P,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.w
k=H.a([$.P,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.w
k=H.a([$.P,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.e("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.P,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.w
k=H.a([$.P,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.w
k=H.a([$.P,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.w
k=H.a([$.P,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.w
k=H.a([$.P,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.aa
k=H.a([$.Z,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.w
k=H.a([$.a2,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.w
k=H.a([$.b2,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.w
k=H.a([$.aM,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.w
k=H.a([$.N,$.R],l)
H.a([],p)
$.$get$c().h(0,new G.e("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Z,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.b7,$.aU,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.w
k=H.a([$.bm,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.r
k=H.a([$.bm,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.aa
k=H.a([$.bm,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.aa
k=H.a([$.a0,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.aa
k=H.a([$.Z,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.w
k=H.a([$.a0,$.aM,$.bj,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.r
k=H.a([$.a0,$.dd,$.X,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.aa
k=H.a([$.ax,$.a2,$.b7,$.aT,$.b8],l)
H.a([],p)
o=new G.e("Queenly",k,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["Kingly"],p)
n=$.aa
k=H.a([$.b8,$.ab,$.c6,$.a2,$.b7],l)
H.a([],p)
o=new G.e("Kingly",k,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["Jack"],p)
n=$.aa
k=H.a([$.aZ,$.aG,$.E,$.ax],l)
H.a([],p)
o=new G.e("Jack",k,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["Codpiece","Codtier"],p)
n=$.r
k=H.a([$.a0,$.aU,$.X,$.N,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.r
k=H.a([$.a0,$.aF,$.L,$.E,$.Z,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.r
k=H.a([$.a0,$.aF,$.L,$.Z,$.N,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.r
k=H.a([$.a0,$.aP,$.L,$.Z,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.aa
k=H.a([$.a0,$.b1,$.E,$.aZ,$.aG,$.f7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.aa
k=H.a([$.a0,$.L,$.bo,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.aa
k=H.a([$.a0,$.a2,$.P,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.aa
k=H.a([$.a0,$.aT,$.b9,$.E,$.f6,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.aa
k=H.a([$.a0,$.aH,$.aw,$.je,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.H
k=H.a([$.a0,$.P,$.be,$.aI,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.r
k=H.a([$.a0,$.E,$.be,$.aI,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.r
k=H.a([$.a0,$.aM,$.a7,$.ax,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.r
k=H.a([$.a0,$.P,$.Z,$.a2,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.r
k=H.a([$.a0,$.P,$.Z,$.aI,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.H
k=$.a0
j=$.L
i=$.Z
i=H.a([k,j,i,$.aF,i,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.w
i=H.a([$.a0,$.aI,$.bP,$.ab,$.ei,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.aa
i=H.a([$.a0,$.aF,$.L,$.bo,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.aa
i=H.a([$.a2,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.r
i=H.a([$.L,$.Z,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.r
i=H.a([$.a0,$.E,$.ax,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.H
i=H.a([$.a0,$.E,$.b6,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.r
i=H.a([$.a0,$.aU,$.X,$.aA,$.bj,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.r
i=H.a([$.a0,$.aD,$.E,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.r
i=H.a([$.a0,$.a7,$.L,$.aF,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.r
i=H.a([$.a0,$.X,$.aE,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.aa
i=H.a([$.a0,$.b7,$.bu,$.b1,$.a9,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.w
i=H.a([$.a0,$.aY,$.b6,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.w
i=H.a([$.a0,$.b1,$.bX,$.aH,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.aa
i=H.a([$.a0,$.aT,$.aH,$.aw,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.aa
i=H.a([$.a0,$.aC,$.bo,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.aa
i=H.a([$.a0,$.E,$.a9,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.a0,$.b6,$.c0,$.b1,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.w
i=H.a([$.E,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.aa
i=H.a([$.E,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.w
i=H.a([$.E,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.w
i=H.a([$.E,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.H
i=H.a([$.E,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.H
i=H.a([$.E,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.w
i=H.a([$.E,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.w
i=H.a([$.bP,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.w
i=H.a([$.bP,$.c7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.I
i=H.a([$.bP,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.w
i=H.a([$.bP,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.w
i=H.a([$.bP,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.w
i=H.a([$.bP,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.w
i=H.a([$.bP,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.H
i=H.a([$.bP,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.w
i=H.a([$.bP,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.H
i=H.a([$.bP,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.I
i=H.a([$.bQ,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.e("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.H
i=H.a([$.bQ,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.I
i=H.a([$.bQ,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.H
i=H.a([$.bQ,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.e("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.w
i=H.a([$.bQ,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.H
i=H.a([$.bQ,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.aa
i=H.a([$.bQ,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.e("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.w
i=H.a([$.bQ,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.w
i=H.a([$.bQ,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.w
i=H.a([$.bQ,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.aa
i=H.a([$.X,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.w
i=H.a([$.X,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.e("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.w
i=H.a([$.X,$.c7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.w
i=H.a([$.aM,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.r
i=H.a([$.c7,$.bj],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.H
i=H.a([$.c7,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.r
i=H.a([$.c7,$.aD],l)
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
n=$.w
i=H.a([$.aH,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.w
i=H.a([$.aH,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.aH,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bW,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.w
i=H.a([$.bW,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.I
i=H.a([$.bW,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.w
i=H.a([$.bW,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.w
i=H.a([$.bW,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.w
i=H.a([$.bW,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bW,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.w
i=H.a([$.bh,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.w
i=H.a([$.bh,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.w
i=H.a([$.bh,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.H
i=H.a([$.bh,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.r
i=H.a([$.bm,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.w
i=H.a([$.bm,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.H
i=H.a([$.bm,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.r
i=H.a([$.bm,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.H
i=H.a([$.ce,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.w
i=H.a([$.ce,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.e("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.aa
i=H.a([$.ce,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.w
i=H.a([$.ce,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.w
i=H.a([$.b2,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.H
i=H.a([$.b2,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.w
i=H.a([$.b2,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.w
i=H.a([$.b2,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.w
i=H.a([$.b2,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.w
i=H.a([$.b2,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.w
i=H.a([$.b2,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.H
i=H.a([$.b2,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.H
i=H.a([$.bu,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.w
i=H.a([$.bu,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.e("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.w
i=H.a([$.bu,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.w
i=H.a([$.bu,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.w
i=H.a([$.bu,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.w
i=H.a([$.bu,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.w
i=H.a([$.bu,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.tC
i=H.a([$.bu,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.H
i=H.a([$.bu,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.bR,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.r
i=H.a([$.aG,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.r
i=H.a([$.aG,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.I
i=H.a([$.b8,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.r
i=H.a([$.aY,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.aC,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.w
i=H.a([$.aC,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.aC,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.r
i=H.a([$.c6,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.r
i=H.a([$.c6,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.r
i=H.a([$.b_,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.r
i=H.a([$.b_,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.aa
i=H.a([$.b_,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.aa
i=H.a([$.b_,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.H
i=H.a([$.b_,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.H
i=H.a([$.b_,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.aa
i=H.a([$.b_,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.r
i=H.a([$.b_,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.r
i=H.a([$.b_,$.c0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.r
i=H.a([$.b_,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.H
i=H.a([$.b_,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.w
i=H.a([$.b1,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.w
i=H.a([$.a9,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.w
i=H.a([$.bX,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.w
i=H.a([$.bX,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.aa
i=H.a([$.bX,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.aa
i=H.a([$.b1,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.H
i=H.a([$.b1,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.I
i=H.a([$.b1,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.H
i=H.a([$.b1,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.aa
i=H.a([$.ax,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.r
i=H.a([$.ax,$.a2,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.H
i=H.a([$.ax,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.ax,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.r
i=H.a([$.ax,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.aa
i=H.a([$.ax,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.aa
i=H.a([$.bj,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.r
i=H.a([$.bj,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.r
i=H.a([$.bj,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.r
i=H.a([$.aY,$.c0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.H
i=H.a([$.bL,$.c0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.H
i=H.a([$.aP,$.c0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.r
i=H.a([$.aP,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.e("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.H
i=H.a([$.a7,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.r
i=H.a([$.aP,$.be],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.H
i=H.a([$.aP,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aP,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.r
i=H.a([$.bn,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.r
i=H.a([$.bn,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.r
i=H.a([$.bn,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.r
i=H.a([$.aP,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.r
i=H.a([$.bn,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.r
i=H.a([$.a7,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.r
i=H.a([$.bn,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.r
i=H.a([$.bn,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.H
i=H.a([$.bn,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.r
i=H.a([$.bn,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.r
i=H.a([$.bk,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.r
i=H.a([$.a2,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.H
i=H.a([$.a7,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.r
i=H.a([$.bo,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.r
i=H.a([$.bL,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.r
i=H.a([$.bL,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.r
i=H.a([$.bL,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.H
i=H.a([$.bL,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.H
i=H.a([$.bL,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.r
i=H.a([$.bL,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.H
i=H.a([$.a9,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.r
i=H.a([$.a9,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.r
i=H.a([$.a9,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.r
i=H.a([$.a9,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.aa
i=H.a([$.a9,$.bd],l)
H.a([],p)
$.$get$c().h(0,new G.e("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.r
i=H.a([$.a9,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.r
i=H.a([$.a9,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.r
i=H.a([$.a9,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.r
i=H.a([$.a9,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.r
i=H.a([$.bo,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.r
i=H.a([$.bo,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.aa
i=H.a([$.Z,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.r
i=H.a([$.bd,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.r
i=H.a([$.bd,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.r
i=H.a([$.bd,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.H
i=H.a([$.bd,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.aI,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.H
i=H.a([$.b4,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.r
i=H.a([$.b4,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.aC,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.I
i=H.a([$.aN,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.I
i=H.a([$.aN,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.H
i=H.a([$.aE,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.H
i=H.a([$.Z,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.r
i=H.a([$.Z,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.r
i=H.a([$.aE,$.aC],l)
H.a([],p)
$.$get$c().h(0,new G.e("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.aa
i=H.a([$.aN,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.H
i=H.a([$.Z,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.H
i=H.a([$.aN,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.H
i=H.a([$.aN,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.H
i=H.a([$.aN,$.aV,$.aF,$.jf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.H
i=H.a([$.aC,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.H
i=H.a([$.aC,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.H
i=H.a([$.aC,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.H
i=H.a([$.a2,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.H
i=H.a([$.aC,$.b5,$.a7,$.aV],l)
H.a([],p)
$.$get$c().h(0,new G.e("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.w
i=H.a([$.E,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.r
i=H.a([$.b9,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.H
i=H.a([$.bQ,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.r
i=H.a([$.X,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.r
i=H.a([$.aM,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.H
i=H.a([$.c7,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.w
i=H.a([$.L,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.H
i=H.a([$.L,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.e("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.aa
i=H.a([$.b6,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.H
i=H.a([$.bh,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.H
i=H.a([$.aD,$.bm],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.w
i=H.a([$.aN,$.ce],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.aa
i=H.a([$.b2,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.H
i=H.a([$.aY,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.b7,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.aa
i=H.a([$.bX,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.H
i=H.a([$.ax,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.H
i=H.a([$.aD,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.H
i=H.a([$.aD,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.H
i=H.a([$.aD,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.H
i=H.a([$.aP,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.H
i=H.a([$.be,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.H
i=H.a([$.be,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.H
i=H.a([$.be,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.H
i=H.a([$.aT,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.H
i=H.a([$.aV,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.H
i=H.a([$.aN,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.H
i=H.a([$.a2,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.H
i=H.a([$.N,$.R,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.H
i=H.a([$.N,$.R,$.b7,$.aU,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.H
i=H.a([$.N,$.R,$.b7,$.ce],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.H
i=H.a([$.aH,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.H
i=H.a([$.bu,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.H
i=H.a([$.b2,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.H
i=H.a([$.a2,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.H
i=H.a([$.b8,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.H
l=H.a([$.bP,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chipped",l,n,o,0))
if($.wD==null){o=$.mi
n=$.aZ
l=$.aG
k=$.b9
j=new U.at(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a5(null,null,null,m),0,3)
j.M("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.wD=j}o=$.$get$ay();(o&&C.b).sm(o,0)
o=$.$get$ay()
n=$.P
l=$.vR
k=new U.at(n,null,null,null,"Speedo",!1,P.a5(null,null,null,m),0,3)
k.M("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$ay()
o=$.f7
n=$.aG
l=$.E
j=$.aZ
i=new U.at(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a5(null,null,null,m),0,3)
i.M("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$ay()
k=$.tp
o=$.ab
j=$.E
l=new U.at(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a5(null,null,null,m),0,3)
l.M("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$ay()
i=$.ty
k=$.b_
j=$.E
o=new U.at(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a5(null,null,null,m),0,3)
o.M("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$ay()
l=$.tv
i=$.b_
j=$.E
k=new U.at(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a5(null,null,null,m),0,3)
k.M("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$ay()
o=$.w4
l=$.b_
j=$.E
i=new U.at(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a5(null,null,null,m),0,3)
i.M("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$ay()
k=$.vE
o=$.aZ
j=$.aG
l=$.E
n=new U.at(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a5(null,null,null,m),0,3)
n.M("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$ay()
i=$.tk
k=$.aZ
l=$.aG
j=$.E
o=new U.at(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a5(null,null,null,m),0,3)
o.M("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$ay()
n=$.he
i=$.ab
j=$.bP
l=new U.at(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a5(null,null,null,m),0,3)
l.M("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$ay()
o=$.w7
n=$.aG
j=$.E
i=new U.at(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a5(null,null,null,m),0,3)
i.M("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$ay()
l=$.vH
o=$.aG
j=$.E
n=new U.at(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a5(null,null,null,m),0,3)
n.M("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$ay()
i=$.vO
l=$.aZ
j=$.E
o=new U.at(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a5(null,null,null,m),0,3)
o.M("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$ay()
n=$.tu
i=$.bu
j=$.bm
l=new U.at(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a5(null,null,null,m),0,3)
l.M("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$ay()
o=$.ei
n=$.c6
j=$.aH
i=$.ab
k=new U.at(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a5(null,null,null,m),0,3)
k.M("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$ay()
l=$.tl
o=$.aM
i=$.bX
j=new U.at(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a5(null,null,null,m),0,3)
j.M("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$ay()
k=$.tt
l=$.E
i=$.aZ
o=new U.at(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a5(null,null,null,m),0,3)
o.M("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$ay()
j=$.wa
k=$.X
i=$.ab
l=new U.at(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a5(null,null,null,m),0,3)
l.M("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$ay()
o=$.wc
j=$.bd
i=$.P
k=new U.at(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a5(null,null,null,m),0,3)
k.M("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$ay()
l=$.tg
o=$.b_
i=$.aH
j=$.P
n=$.aZ
h=new U.at(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a5(null,null,null,m),0,3)
h.M("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$ay()
k=$.jf
l=$.X
n=$.ab
j=new U.at(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a5(null,null,null,m),0,3)
j.M("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$ay()
h=$.jd
k=$.X
n=new U.at(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a5(null,null,null,m),0,3)
n.M("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$ay()
j=$.aF
h=$.L
k=$.ab
l=new U.at(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a5(null,null,null,m),0,3)
l.M("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$ay()
n=$.w1
j=$.E
k=$.ab
h=new U.at(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a5(null,null,null,m),0,3)
h.M("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$ay()
l=$.td
n=$.aG
k=$.E
j=$.ab
i=new U.at(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a5(null,null,null,m),0,3)
i.M("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ay()
h=$.vX
l=$.X
j=$.aZ
k=new U.at(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a5(null,null,null,m),0,3)
k.M("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ay()
i=$.f6
h=$.E
j=$.ab
l=new U.at(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a5(null,null,null,m),0,3)
l.M("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ay()
k=$.vG
i=$.X
j=$.ab
h=new U.at(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a5(null,null,null,m),0,3)
h.M("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ay()
l=$.wd
k=$.aM
j=$.ab
i=new U.at(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a5(null,null,null,m),0,3)
i.M("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ay()
h=$.w9
l=$.X
j=$.b_
k=new U.at(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a5(null,null,null,m),0,3)
k.M("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ay()
i=$.w6
h=$.E
j=$.aG
l=new U.at(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a5(null,null,null,m),0,3)
l.M("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ay()
k=$.tr
i=$.E
j=$.b_
h=new U.at(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a5(null,null,null,m),0,3)
h.M("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$ay()
l=$.mj
k=$.E
j=$.bn
i=new U.at(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a5(null,null,null,m),0,3)
i.M("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ay()
h=$.ei
l=$.c7
j=$.ab
k=new U.at(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a5(null,null,null,m),0,3)
k.M("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ay()
i=$.wb
h=$.E
j=$.aZ
l=new U.at(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a5(null,null,null,m),0,3)
l.M("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ay()
k=$.mh
i=$.L
j=$.aG
h=new U.at(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a5(null,null,null,m),0,3)
h.M("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ay()
l=$.tm
k=$.E
j=$.ab
i=new U.at(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a5(null,null,null,m),0,3)
i.M("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ay()
h=$.e1
l=$.b4
j=$.P
k=new U.at(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a5(null,null,null,m),0,3)
k.M("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ay()
i=$.hd
h=$.E
j=$.bd
l=new U.at(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a5(null,null,null,m),0,3)
l.M("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ay()
k=$.tB
i=$.E
j=$.ab
h=new U.at(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a5(null,null,null,m),0,3)
h.M("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ay()
l=$.w5
k=$.E
j=$.ab
i=new U.at(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a5(null,null,null,m),0,3)
i.M("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ay()
h=$.tA
l=$.X
j=$.ab
k=new U.at(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a5(null,null,null,m),0,3)
k.M("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ay()
i=$.tw
h=$.X
j=$.aP
l=new U.at(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a5(null,null,null,m),0,3)
l.M("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ay()
k=$.tx
i=$.E
j=$.aG
h=new U.at(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a5(null,null,null,m),0,3)
h.M("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ay()
l=$.mm
k=$.E
j=$.Z
i=new U.at(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a5(null,null,null,m),0,3)
i.M("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ay()
h=$.je
l=$.aH
j=$.c6
k=new U.at(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a5(null,null,null,m),0,3)
k.M("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ay()
i=$.vQ
h=$.X
j=$.ab
l=new U.at(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a5(null,null,null,m),0,3)
l.M("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ay()
k=$.vW
i=$.E
j=$.aG
h=new U.at(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a5(null,null,null,m),0,3)
h.M("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ay()
l=$.w3
k=$.E
j=$.aG
i=new U.at(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a5(null,null,null,m),0,3)
i.M("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ay()
h=$.w2
l=$.E
j=$.c6
k=new U.at(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a5(null,null,null,m),0,3)
k.M("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ay()
i=$.dd
h=$.X
j=$.ab
m=new U.at(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a5(null,null,null,m),0,3)
m.M("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bF("Duttle","Dut",null,null)
$.$get$bO().push(m)
$.vn=m
m=new S.bF("Salamander","GLUB",null,null)
$.$get$bO().push(m)
$.t3=m
m=new S.bF("Crocodile","NAK",null,null)
$.$get$bO().push(m)
$.dZ=m
m=new S.bF("Iguana","thip",null,null)
$.$get$bO().push(m)
$.ee=m
m=new S.bF("Turtle","click",null,null)
$.$get$bO().push(m)
$.eY=m
m=new S.bF("Skeleton","rattle",null,null)
$.$get$bO().push(m)
$.dI=m
m=new S.bF("Robot","BEEP",null,null)
$.$get$bO().push(m)
$.eW=m
m=new S.bF("Chameleon","BLEP",null,null)
$.$get$bO().push(m)
$.il=m
m=new S.bF("Axolotl","BARP",null,null)
$.$get$bO().push(m)
$.rX=m
m=new S.bF("Lizard","bleb",null,null)
$.$get$bO().push(m)
$.lB=m
m=new S.bF("Snake","hiss",null,null)
$.$get$bO().push(m)
$.t5=m
m=new S.bF("Alligator","nak",null,null)
$.$get$bO().push(m)
$.ij=m
m=new S.bF("Mole","snuff",null,null)
$.$get$bO().push(m)
$.vo=m
m=new S.bF("Bird","tweet",null,null)
$.$get$bO().push(m)
$.lA=m
m=new S.bF("Wolf","howl",null,null)
$.$get$bO().push(m)
$.lG=m
m=new S.bF("Newt","skitter",null,null)
$.$get$bO().push(m)
$.vp=m
m=new S.bF("Spider","skitter",null,null)
$.$get$bO().push(m)
$.is=m
m=new S.bF("Cupid","flappa",null,null)
$.$get$bO().push(m)
$.im=m
m=new S.bF("Dragon","roar",null,null)
$.$get$bO().push(m)
$.h0=m
m=new S.i3("Prospitian","murmur",null,null)
$.$get$bO().push(m)
$.zb=m
m=new S.i3("Dersite","mutter",null,null)
$.$get$bO().push(m)
$.z8=m
m=new S.m1("Horror Terror","a;lkjdf",null,null)
$.$get$bO().push(m)
$.za=m
$.zc=H.a([$.t5,$.ij,$.vp,$.t3,$.ee,$.dZ,$.eY,$.il,$.rX,$.lB],[S.bF])
$.h6=new T.c1(0,"spices")
m=$.ze
$.eU=new T.c1(m,"fresh baked bread")
$.cw=new T.c1(m,"sweetness")
$.c4=new T.c1(m,"nature")
$.lF=new T.c1(0,"salt")
k=$.zd
$.d_=new T.c1(k,"rot")
$.z9=new T.c1(k,"feet")
$.eg=new T.c1(0,"oil")
$.rZ=new T.c1(0,"chlorine")
$.h4=new T.c1(0,"nothing in particular")
$.ed=new T.c1(0,"gunpowder")
$.h3=new T.c1(0,"must")
$.cB=new T.c1(m,"zoo animals")
$.e_=new T.c1(k,"sweat")
$.ir=new T.c1(0,"ozone")
$.c3=new T.c1(0,"deceit")
$.cZ=new T.c1(k,"blood")
$.eX=new T.c1(k,"smoke")
$.bZ=new K.bU(k,"creepy")
$.b0=new K.bU(m,"calm")
$.cc=new K.bU(k,"frantic")
$.lC=new K.bU(0,"like nothing")
$.bV=new K.bU(m,"energizing")
$.cA=new K.bU(0,"studious")
$.dq=new K.bU(0,"dangerous")
$.dG=new K.bU(0,"glamorous")
$.h5=new K.bU(0,"romantic")
$.dp=new K.bU(m,"creative")
$.iq=new K.bU(0,"lucky")
$.dr=new K.bU(0,"happy")
$.dH=new K.bU(0,"heroic")
$.d1=new K.bU(k,"stupid")
$.iq=new K.bU(0,"lucky")
$.t_=new K.bU(0,"claustrophobic")
$.lD=new K.bU(0,"overheated")
$.dF=new K.bU(k,"confusing")
$.cb=new K.bU(0,"contemplatative")
$.cR=new M.bw(0,"clanking")
$.cv=new M.bw(0,"laughing")
$.bc=new M.bw(m,"rustling")
$.eh=new M.bw(k,"screaming")
$.io=new M.bw(k,"foot steps")
$.eV=new M.bw(k,"beeping")
$.vr=new M.bw(k,"whispering")
$.ec=new M.bw(0,"clacking")
$.cy=new M.bw(0,"applause")
$.ef=new M.bw(0,"jazz")
$.t1=new M.bw(0,"disco")
$.h1=new M.bw(0,"drums")
$.h2=new M.bw(0,"echoing")
$.lE=new M.bw(k,"roaring")
$.ip=new M.bw(k,"gunfire")
$.cz=new M.bw(0,"music")
$.t4=new M.bw(0,"singing")
$.rY=new M.bw(0,"chanting")
$.eZ=new M.bw(0,"whistling")
$.dc=new M.bw(m,"nature")
$.t0=new M.bw(0,"croaking")
$.d0=new M.bw(0,"silence")
$.t2=new M.bw(0,"pulsing")
$.vq=new M.bw(0,"ticking")
m=H.a([],p)
o=[X.G,P.U]
n=A.a_
l=E.M
k=[l]
j=[A.fI]
m=new S.mC(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.t(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Knight",3,!0,!1,!1)
$.Fu=m
m=P.f(H.a([new E.M($.c8,0.4,!1)],k),l)
i=H.a([],p)
m=new S.o4(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.t(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Seer",6,!0,!1,!1)
$.FH=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kw("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.t(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Bard",9,!0,!1,!1)
$.Fo=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.lY("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.t(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Heir",8,!0,!1,!1)
$.Fr=m
m=H.a([],p)
m=new U.mX(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.t(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Maid",0,!0,!1,!1)
$.Fx=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.nT(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.t(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Rogue",4,!0,!1,!1)
$.FC=m
m=H.a([],p)
m=new V.nt(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.t(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Page",1,!0,!1,!1)
$.FA=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.oZ(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.t(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Thief",7,!0,!1,!1)
$.FK=m
m=P.f(H.a([new E.M($.c8,0.1,!1)],k),l)
i=H.a([],p)
m=new R.oM(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.t(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Sylph",5,!0,!1,!1)
$.FJ=m
m=H.a([],p)
m=new N.nL("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.t(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Prince",10,!0,!1,!1)
$.FB=m
m=P.f(H.a([new E.M($.c8,0.1,!1)],k),l)
i=H.a([],p)
m=new M.ps("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.t(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Witch",11,!0,!1,!1)
$.FM=m
m=P.f(H.a([new E.M($.c8,0.4,!1)],k),l)
i=H.a([],p)
m=new S.mW("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.t(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Mage",2,!0,!1,!1)
$.Fw=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.f(H.a([new E.M($.c8,3,!1),new E.M($.ol,-2,!1)],k),l)
e=H.a([],p)
m=new E.po("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.t(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Waste",12,!1,!1,!1)
$.FL=m
m=H.a([],p)
m=new Y.o0("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.t(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Scout",13,!1,!1,!1)
$.FF=m
m=P.f(H.a([new E.M($.c8,0.5,!1)],k),l)
i=H.a([],p)
m=new L.o1("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.t(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Scribe",15,!1,!1,!1)
$.FG=m
m=P.f(H.a([new E.M($.c8,0.5,!1)],k),l)
i=H.a([],p)
m=new E.nY(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.t(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Sage",14,!1,!1,!1)
$.FD=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.lW("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.t(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Guide",16,!1,!1,!1)
$.Fq=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.f(H.a([new E.M($.c8,3,!1)],k),l)
g=H.a([],p)
m=new Y.lV(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.t(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Grace",17,!1,!1,!1)
$.Fp=m
m=P.f(H.a([new E.M($.c8,0.1,!1)],k),l)
i=H.a([],p)
m=new E.n7("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.t(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Muse",18,!1,!1,!1)
$.Fy=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.F(null,null,n)
h=P.f(H.a([new E.M($.c8,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.mU("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.t(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Lord",19,!1,!1,!1)
$.Fv=m
m=P.f(H.a([new E.M($.c8,-0.1,!1),new E.M($.du,1,!1)],k),l)
i=H.a([],p)
m=new Y.ob("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.t(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Smith",20,!1,!1,!1)
$.FI=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.f(H.a([new E.M($.c8,4,!1),new E.M($.ol,-3,!1)],k),l)
e=H.a([],p)
m=new X.m5("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.t(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Human",21,!1,!1,!0)
$.Fs=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.f(H.a([new E.M($.c8,41.3,!1),new E.M($.ol,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.m6(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.t(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Hussie",22,!1,!0,!0)
$.Ft=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.nZ(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.t(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a1("Sans",23,!1,!0,!0)
$.FE=m
$.Fz=T.Fn("Null",255,!1,!0,!1)
m=A.dX
i=P.D
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#00ff00"),!0)
h.j(0,$.ah,L.d("#EFEFEF"),!0)
h.j(0,$.ag,L.d("#DEDEDE"),!0)
h.j(0,$.aq,L.d("#FF2106"),!0)
h.j(0,$.ap,L.d("#B01200"),!0)
h.j(0,$.aj,L.d("#2F2F30"),!0)
h.j(0,$.ak,L.d("#1D1D1D"),!0)
h.j(0,$.ai,L.d("#080808"),!0)
h.j(0,$.ao,L.d("#030303"),!0)
h.j(0,$.an,L.d("#242424"),!0)
h.j(0,$.am,L.d("#333333"),!0)
h.j(0,$.al,L.d("#141414"),!0)
g=P.f(H.a(["Frogs"],p),q)
f=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.f(H.a([new E.M($.du,2,!0),new E.M($.ew,1,!0),new E.M($.dO,-2,!0)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF9B00"),!0)
a.j(0,$.ag,L.d("#FF8700"),!0)
a.j(0,$.aq,L.d("#7F7F7F"),!0)
a.j(0,$.ap,L.d("#727272"),!0)
a.j(0,$.aj,L.d("#A3A3A3"),!0)
a.j(0,$.ak,L.d("#999999"),!0)
a.j(0,$.ai,L.d("#898989"),!0)
a.j(0,$.ao,L.d("#EFEFEF"),!0)
a.j(0,$.an,L.d("#DBDBDB"),!0)
a.j(0,$.am,L.d("#C6C6C6"),!0)
a.j(0,$.al,L.d("#ADADAD"),!0)
a=new N.oe(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.W(0,"Space",!0,!1,!1)
$.yw=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#ff0000"),!0)
a.j(0,$.ah,L.d("#FF2106"),!0)
a.j(0,$.ag,L.d("#AD1604"),!0)
a.j(0,$.aq,L.d("#030303"),!0)
a.j(0,$.ap,L.d("#242424"),!0)
a.j(0,$.aj,L.d("#510606"),!0)
a.j(0,$.ak,L.d("#3C0404"),!0)
a.j(0,$.ai,L.d("#1F0000"),!0)
a.j(0,$.ao,L.d("#B70D0E"),!0)
a.j(0,$.an,L.d("#970203"),!0)
a.j(0,$.am,L.d("#8E1516"),!0)
a.j(0,$.al,L.d("#640707"),!0)
b=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.f(H.a([new E.M($.hG,2,!0),new E.M($.dO,1,!0),new E.M($.fk,-2,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new N.p_(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(1,"Time",!0,!1,!1)
$.yz=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#3399ff"),!0)
h.j(0,$.ah,L.d("#10E0FF"),!0)
h.j(0,$.ag,L.d("#00A4BB"),!0)
h.j(0,$.aq,L.d("#FEFD49"),!0)
h.j(0,$.ap,L.d("#D6D601"),!0)
h.j(0,$.aj,L.d("#0052F3"),!0)
h.j(0,$.ak,L.d("#0046D1"),!0)
h.j(0,$.ai,L.d("#003396"),!0)
h.j(0,$.ao,L.d("#0087EB"),!0)
h.j(0,$.an,L.d("#0070ED"),!0)
h.j(0,$.am,L.d("#006BE1"),!0)
h.j(0,$.al,L.d("#0054B0"),!0)
g=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.f(H.a([new E.M($.dO,2,!0),new E.M($.cq,1,!0),new E.M($.ew,-1,!0),new E.M($.ex,-1,!0),new E.M($.c8,0.05,!1)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF9B00"),!0)
a.j(0,$.ag,L.d("#FF8700"),!0)
a.j(0,$.aq,L.d("#7F7F7F"),!0)
a.j(0,$.ap,L.d("#727272"),!0)
a.j(0,$.aj,L.d("#A3A3A3"),!0)
a.j(0,$.ak,L.d("#999999"),!0)
a.j(0,$.ai,L.d("#898989"),!0)
a.j(0,$.ao,L.d("#EFEFEF"),!0)
a.j(0,$.an,L.d("#DBDBDB"),!0)
a.j(0,$.am,L.d("#C6C6C6"),!0)
a.j(0,$.al,L.d("#ADADAD"),!0)
a=new T.kF(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.W(2,"Breath",!0,!1,!1)
$.yb=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#003300"),!0)
a.j(0,$.ah,L.d("#0F0F0F"),!0)
a.j(0,$.ag,L.d("#010101"),!0)
a.j(0,$.aq,L.d("#E8C15E"),!0)
a.j(0,$.ap,L.d("#C7A140"),!0)
a.j(0,$.aj,L.d("#1E211E"),!0)
a.j(0,$.ak,L.d("#141614"),!0)
a.j(0,$.ai,L.d("#0B0D0B"),!0)
a.j(0,$.ao,L.d("#204020"),!0)
a.j(0,$.an,L.d("#11200F"),!0)
a.j(0,$.am,L.d("#192C16"),!0)
a.j(0,$.al,L.d("#121F10"),!0)
b=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.f(H.a([new E.M($.du,2,!0),new E.M($.fk,1,!0),new E.M($.hG,-1,!0),new E.M($.ew,-1,!0),new E.M($.c8,0.01,!1)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new U.l6(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(3,"Doom",!0,!1,!1)
$.yc=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#993300"),!0)
h.j(0,$.ah,L.d("#BA1016"),!0)
h.j(0,$.ag,L.d("#820B0F"),!0)
h.j(0,$.aq,L.d("#381B76"),!0)
h.j(0,$.ap,L.d("#1E0C47"),!0)
h.j(0,$.aj,L.d("#290704"),!0)
h.j(0,$.ak,L.d("#230200"),!0)
h.j(0,$.ai,L.d("#110000"),!0)
h.j(0,$.ao,L.d("#3D190A"),!0)
h.j(0,$.an,L.d("#2C1207"),!0)
h.j(0,$.am,L.d("#5C2913"),!0)
h.j(0,$.al,L.d("#4C1F0D"),!0)
g=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.f(H.a([new E.M($.ex,2,!0),new E.M($.cq,1,!0),new E.M($.du,-2,!0)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF9B00"),!0)
a.j(0,$.ag,L.d("#FF8700"),!0)
a.j(0,$.aq,L.d("#7F7F7F"),!0)
a.j(0,$.ap,L.d("#727272"),!0)
a.j(0,$.aj,L.d("#A3A3A3"),!0)
a.j(0,$.ak,L.d("#999999"),!0)
a.j(0,$.ai,L.d("#898989"),!0)
a.j(0,$.ao,L.d("#EFEFEF"),!0)
a.j(0,$.an,L.d("#DBDBDB"),!0)
a.j(0,$.am,L.d("#C6C6C6"),!0)
a.j(0,$.al,L.d("#ADADAD"),!0)
a=new T.kC(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.W(4,"Blood",!0,!1,!1)
$.ya=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#ff3399"),!0)
a.j(0,$.ah,L.d("#BD1864"),!0)
a.j(0,$.ag,L.d("#780F3F"),!0)
a.j(0,$.aq,L.d("#1D572E"),!0)
a.j(0,$.ap,L.d("#11371D"),!0)
a.j(0,$.aj,L.d("#4C1026"),!0)
a.j(0,$.ak,L.d("#3C0D1F"),!0)
a.j(0,$.ai,L.d("#260914"),!0)
a.j(0,$.ao,L.d("#6B0829"),!0)
a.j(0,$.an,L.d("#4A0818"),!0)
a.j(0,$.am,L.d("#55142A"),!0)
a.j(0,$.al,L.d("#3D0E1E"),!0)
b=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.f(H.a([new E.M($.ex,1,!0),new E.kp(null,1,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new T.lX(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(5,"Heart",!0,!1,!1)
$.yf=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#3da35a"),!0)
h.j(0,$.ah,L.d("#06FFC9"),!0)
h.j(0,$.ag,L.d("#04A885"),!0)
h.j(0,$.aq,L.d("#6E0E2E"),!0)
h.j(0,$.ap,L.d("#4A0818"),!0)
h.j(0,$.aj,L.d("#1D572E"),!0)
h.j(0,$.ak,L.d("#164524"),!0)
h.j(0,$.ai,L.d("#11371D"),!0)
h.j(0,$.ao,L.d("#3DA35A"),!0)
h.j(0,$.an,L.d("#2E7A43"),!0)
h.j(0,$.am,L.d("#3B7E4F"),!0)
h.j(0,$.al,L.d("#265133"),!0)
g=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.f(H.a([new E.M($.fk,2,!0),new E.M($.hG,1,!0),new E.M($.du,-2,!0)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF9B00"),!0)
a.j(0,$.ag,L.d("#FF8700"),!0)
a.j(0,$.aq,L.d("#7F7F7F"),!0)
a.j(0,$.ap,L.d("#727272"),!0)
a.j(0,$.aj,L.d("#A3A3A3"),!0)
a.j(0,$.ak,L.d("#999999"),!0)
a.j(0,$.ai,L.d("#898989"),!0)
a.j(0,$.ao,L.d("#EFEFEF"),!0)
a.j(0,$.an,L.d("#DBDBDB"),!0)
a.j(0,$.am,L.d("#C6C6C6"),!0)
a.j(0,$.al,L.d("#ADADAD"),!0)
a=new V.n5(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.W(6,"Mind",!0,!1,!1)
$.yn=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#ff9933"),!0)
a.j(0,$.ah,L.d("#FEFD49"),!0)
a.j(0,$.ag,L.d("#FEC910"),!0)
a.j(0,$.aq,L.d("#10E0FF"),!0)
a.j(0,$.ap,L.d("#00A4BB"),!0)
a.j(0,$.aj,L.d("#FA4900"),!0)
a.j(0,$.ak,L.d("#E94200"),!0)
a.j(0,$.ai,L.d("#C33700"),!0)
a.j(0,$.ao,L.d("#FF8800"),!0)
a.j(0,$.an,L.d("#D66E04"),!0)
a.j(0,$.am,L.d("#E76700"),!0)
a.j(0,$.al,L.d("#CA5B00"),!0)
b=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.f(H.a([new E.M($.hF,2,!0),new E.M($.fk,1,!0),new E.M($.cq,-1,!0),new E.M($.ew,-1,!0),new E.M($.c8,0.2,!1)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new G.mG(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(7,"Light",!0,!1,!1)
$.yl=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#000066"),!0)
h.j(0,$.ah,L.d("#0B1030"),!0)
h.j(0,$.ag,L.d("#04091A"),!0)
h.j(0,$.aq,L.d("#CCC4B5"),!0)
h.j(0,$.ap,L.d("#A89F8D"),!0)
h.j(0,$.aj,L.d("#00164F"),!0)
h.j(0,$.ak,L.d("#00103C"),!0)
h.j(0,$.ai,L.d("#00071A"),!0)
h.j(0,$.ao,L.d("#033476"),!0)
h.j(0,$.an,L.d("#02285B"),!0)
h.j(0,$.am,L.d("#004CB2"),!0)
h.j(0,$.al,L.d("#003E91"),!0)
g=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.f(H.a([new E.fD(D.ur(),null,3,!0),new E.fD(D.ur(),null,-1,!0),new E.M($.hG,-1,!0),new E.M($.c8,0.2,!1)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF9B00"),!0)
a.j(0,$.ag,L.d("#FF8700"),!0)
a.j(0,$.aq,L.d("#7F7F7F"),!0)
a.j(0,$.ap,L.d("#727272"),!0)
a.j(0,$.aj,L.d("#A3A3A3"),!0)
a.j(0,$.ak,L.d("#999999"),!0)
a.j(0,$.ai,L.d("#898989"),!0)
a.j(0,$.ao,L.d("#EFEFEF"),!0)
a.j(0,$.an,L.d("#DBDBDB"),!0)
a.j(0,$.am,L.d("#C6C6C6"),!0)
a.j(0,$.al,L.d("#ADADAD"),!0)
a=new Q.pn(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.W(8,"Void",!0,!1,!1)
$.yB=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#9900cc"),!0)
a.j(0,$.ah,L.d("#974AA7"),!0)
a.j(0,$.ag,L.d("#6B347D"),!0)
a.j(0,$.aq,L.d("#3D190A"),!0)
a.j(0,$.ap,L.d("#2C1207"),!0)
a.j(0,$.aj,L.d("#7C3FBA"),!0)
a.j(0,$.ak,L.d("#6D34A6"),!0)
a.j(0,$.ai,L.d("#592D86"),!0)
a.j(0,$.ao,L.d("#381B76"),!0)
a.j(0,$.an,L.d("#1E0C47"),!0)
a.j(0,$.am,L.d("#281D36"),!0)
a.j(0,$.al,L.d("#1D1526"),!0)
b=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.M($.hH,2,!0),new E.M($.dO,1,!0),new E.M($.cq,-1,!0),new E.M($.ex,-1,!0),new E.M($.c8,0.01,!1)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new E.nN(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(9,"Rage",!0,!1,!1)
$.yr=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#ffcc66"),!0)
h.j(0,$.ah,L.d("#FDF9EC"),!0)
h.j(0,$.ag,L.d("#D6C794"),!0)
h.j(0,$.aq,L.d("#164524"),!0)
h.j(0,$.ap,L.d("#06280C"),!0)
h.j(0,$.aj,L.d("#FFC331"),!0)
h.j(0,$.ak,L.d("#F7BB2C"),!0)
h.j(0,$.ai,L.d("#DBA523"),!0)
h.j(0,$.ao,L.d("#FFE094"),!0)
h.j(0,$.an,L.d("#E8C15E"),!0)
h.j(0,$.am,L.d("#F6C54A"),!0)
h.j(0,$.al,L.d("#EDAF0C"),!0)
g=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.f(H.a([new E.M($.cq,2,!0),new E.M($.hF,1,!0),new E.fD(D.ur(),null,-2,!0)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF9B00"),!0)
a.j(0,$.ag,L.d("#FF8700"),!0)
a.j(0,$.aq,L.d("#7F7F7F"),!0)
a.j(0,$.ap,L.d("#727272"),!0)
a.j(0,$.aj,L.d("#A3A3A3"),!0)
a.j(0,$.ak,L.d("#999999"),!0)
a.j(0,$.ai,L.d("#898989"),!0)
a.j(0,$.ao,L.d("#EFEFEF"),!0)
a.j(0,$.an,L.d("#DBDBDB"),!0)
a.j(0,$.am,L.d("#C6C6C6"),!0)
a.j(0,$.al,L.d("#ADADAD"),!0)
a=new X.m0(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.W(10,"Hope",!0,!1,!1)
$.yh=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#494132"),!0)
a.j(0,$.ah,L.d("#76C34E"),!0)
a.j(0,$.ag,L.d("#4F8234"),!0)
a.j(0,$.aq,L.d("#00164F"),!0)
a.j(0,$.ap,L.d("#00071A"),!0)
a.j(0,$.aj,L.d("#605542"),!0)
a.j(0,$.ak,L.d("#494132"),!0)
a.j(0,$.ai,L.d("#2D271E"),!0)
a.j(0,$.ao,L.d("#CCC4B5"),!0)
a.j(0,$.an,L.d("#A89F8D"),!0)
a.j(0,$.am,L.d("#A29989"),!0)
a.j(0,$.al,L.d("#918673"),!0)
b=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.f(H.a([new E.M($.ew,2,!0),new E.M($.hH,1,!0),new E.M($.du,-2,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new K.mF(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(11,"Life",!0,!1,!1)
$.yk=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#9630BF"),!0)
h.j(0,$.ah,L.d("#cc87e8"),!0)
h.j(0,$.ag,L.d("#9545b7"),!0)
h.j(0,$.aq,L.d("#ae769b"),!0)
h.j(0,$.ap,L.d("#8f577c"),!0)
h.j(0,$.aj,L.d("#9630bf"),!0)
h.j(0,$.ak,L.d("#693773"),!0)
h.j(0,$.ai,L.d("#4c2154"),!0)
h.j(0,$.ao,L.d("#fcf9bd"),!0)
h.j(0,$.an,L.d("#e0d29e"),!0)
h.j(0,$.am,L.d("#bdb968"),!0)
h.j(0,$.al,L.d("#ab9b55"),!0)
g=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.f(H.a([new E.M($.du,3,!0),new E.M($.cq,-2,!0)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF9B00"),!0)
a.j(0,$.ag,L.d("#FF8700"),!0)
a.j(0,$.aq,L.d("#7F7F7F"),!0)
a.j(0,$.ap,L.d("#727272"),!0)
a.j(0,$.aj,L.d("#A3A3A3"),!0)
a.j(0,$.ak,L.d("#999999"),!0)
a.j(0,$.ai,L.d("#898989"),!0)
a.j(0,$.ao,L.d("#EFEFEF"),!0)
a.j(0,$.an,L.d("#DBDBDB"),!0)
a.j(0,$.am,L.d("#C6C6C6"),!0)
a.j(0,$.al,L.d("#ADADAD"),!0)
a=new Z.l7(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.W(12,"Dream",!1,!1,!1)
$.yd=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.af,L.d("#9630BF"),!0)
a.j(0,$.ah,L.d("#cc87e8"),!0)
a.j(0,$.ag,L.d("#9545b7"),!0)
a.j(0,$.aq,L.d("#ae769b"),!0)
a.j(0,$.ap,L.d("#8f577c"),!0)
a.j(0,$.aj,L.d("#9630bf"),!0)
a.j(0,$.ak,L.d("#693773"),!0)
a.j(0,$.ai,L.d("#4c2154"),!0)
a.j(0,$.ao,L.d("#fcf9bd"),!0)
a.j(0,$.an,L.d("#e0d29e"),!0)
a.j(0,$.am,L.d("#bdb968"),!0)
a.j(0,$.al,L.d("#ab9b55"),!0)
b=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.f(H.a([new E.M($.du,3,!0),new E.M($.cq,-2,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new Q.mD(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(13,"Law",!1,!1,!0)
$.yj=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#ffff00"),!0)
h.j(0,$.ah,L.d("#ffff00"),!0)
h.j(0,$.ag,L.d("#ffff00"),!0)
h.j(0,$.aq,L.d("#508b2d"),!0)
h.j(0,$.ap,L.d("#316c0d"),!0)
h.j(0,$.aj,L.d("#dddd00"),!0)
h.j(0,$.ak,L.d("#afaf00"),!0)
h.j(0,$.ai,L.d("#8f8f00"),!0)
h.j(0,$.ao,L.d("#ff0000"),!0)
h.j(0,$.an,L.d("#a8000a"),!0)
h.j(0,$.am,L.d("#b8151f"),!0)
h.j(0,$.al,L.d("#8c1d1d"),!0)
g=P.f(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
f=P.f(H.a(["Juice","Joke","Jespacito"],p),q)
e=P.f(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
d=P.f(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
c=P.f(H.a([new E.M($.c8,13,!0)],k),l)
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.af,L.d("#FF9B00"),!0)
b.j(0,$.ah,L.d("#FF9B00"),!0)
b.j(0,$.ag,L.d("#FF8700"),!0)
b.j(0,$.aq,L.d("#7F7F7F"),!0)
b.j(0,$.ap,L.d("#727272"),!0)
b.j(0,$.aj,L.d("#A3A3A3"),!0)
b.j(0,$.ak,L.d("#999999"),!0)
b.j(0,$.ai,L.d("#898989"),!0)
b.j(0,$.ao,L.d("#EFEFEF"),!0)
b.j(0,$.an,L.d("#DBDBDB"),!0)
b.j(0,$.am,L.d("#C6C6C6"),!0)
b.j(0,$.al,L.d("#ADADAD"),!0)
b=new Z.mz(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
b.W(14,"Juice",!1,!1,!0)
$.yi=b
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.af,L.d("#00ff00"),!0)
b.j(0,$.ah,L.d("#00ff00"),!0)
b.j(0,$.ag,L.d("#00ff00"),!0)
b.j(0,$.aq,L.d("#00ff00"),!0)
b.j(0,$.ap,L.d("#00cf00"),!0)
b.j(0,$.aj,L.d("#171717"),!0)
b.j(0,$.ak,L.d("#080808"),!0)
b.j(0,$.ai,L.d("#080808"),!0)
b.j(0,$.ao,L.d("#616161"),!0)
b.j(0,$.an,L.d("#3b3b3b"),!0)
b.j(0,$.am,L.d("#4a4a4a"),!0)
b.j(0,$.al,L.d("#292929"),!0)
c=P.f(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
d=P.f(H.a(["Shogun"],p),q)
e=P.f(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.M($.hH,13,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new K.o_(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(15,"Sauce",!1,!0,!1)
$.yu=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#933100"),!0)
h.j(0,$.ah,L.d("#933100"),!0)
h.j(0,$.ag,L.d("#682200"),!0)
h.j(0,$.aq,L.d("#4c3a27"),!0)
h.j(0,$.ap,L.d("#302418"),!0)
h.j(0,$.aj,L.d("#a0562b"),!0)
h.j(0,$.ak,L.d("#723e20"),!0)
h.j(0,$.ai,L.d("#442513"),!0)
h.j(0,$.ao,L.d("#963c07"),!0)
h.j(0,$.an,L.d("#682a06"),!0)
h.j(0,$.am,L.d("#6d4d3a"),!0)
h.j(0,$.al,L.d("#422e23"),!0)
g=P.f(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),q)
f=P.f(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),q)
e=P.f(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
d=P.f(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
c=P.f(H.a([new E.M($.dO,10,!0),new E.M($.cq,-2,!0)],k),l)
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.af,L.d("#FF9B00"),!0)
b.j(0,$.ah,L.d("#FF9B00"),!0)
b.j(0,$.ag,L.d("#FF8700"),!0)
b.j(0,$.aq,L.d("#7F7F7F"),!0)
b.j(0,$.ap,L.d("#727272"),!0)
b.j(0,$.aj,L.d("#A3A3A3"),!0)
b.j(0,$.ak,L.d("#999999"),!0)
b.j(0,$.ai,L.d("#898989"),!0)
b.j(0,$.ao,L.d("#EFEFEF"),!0)
b.j(0,$.an,L.d("#DBDBDB"),!0)
b.j(0,$.am,L.d("#C6C6C6"),!0)
b.j(0,$.al,L.d("#ADADAD"),!0)
b=new L.oO(2,0.7,0.7,h,g,f,e,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",d,["Lightning","Ice","Taserface"],["Taser"],c,0.01,0.01,0.01,0.5,16,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
b.W(16,"Taze",!1,!1,!0)
$.yy=b
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.af,L.d("#990000"),!0)
b.j(0,$.ah,L.d("#ff0200"),!0)
b.j(0,$.ag,L.d("#dd0000"),!0)
b.j(0,$.aq,L.d("#25334f"),!0)
b.j(0,$.ap,L.d("#07090f"),!0)
b.j(0,$.aj,L.d("#c64f4f"),!0)
b.j(0,$.ak,L.d("#a33f3f"),!0)
b.j(0,$.ai,L.d("#843333"),!0)
b.j(0,$.ao,L.d("#b5c1d2"),!0)
b.j(0,$.an,L.d("#939dac"),!0)
b.j(0,$.am,L.d("#3c3e42"),!0)
b.j(0,$.al,L.d("#202123"),!0)
c=P.f(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
d=P.f(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
e=P.f(H.a(["Empathetic","Arrowed","Emotioanal","Literal","Ravaging"],p),q)
f=P.f(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
g=P.f(H.a([new E.M($.dO,2,!0),new E.M($.cq,5,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new V.nV(0.9,1.1,2,b,c,d,e,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",f,["Arrow","Yondu","Empathy"],["Arrow","Bow"],g,0.01,0.01,0.01,0.5,17,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(17,"Rule",!1,!1,!0)
$.yt=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#853dcc"),!0)
h.j(0,$.ah,L.d("#f76261"),!0)
h.j(0,$.ag,L.d("#913a39"),!0)
h.j(0,$.aq,L.d("#ab4443"),!0)
h.j(0,$.ap,L.d("#78302f"),!0)
h.j(0,$.aj,L.d("#a54cff"),!0)
h.j(0,$.ak,L.d("#8c41d9"),!0)
h.j(0,$.ai,L.d("#7335b3"),!0)
h.j(0,$.ao,L.d("#853dcc"),!0)
h.j(0,$.an,L.d("#642e99"),!0)
h.j(0,$.am,L.d("#4c2375"),!0)
h.j(0,$.al,L.d("#2b1442"),!0)
g=P.f(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),q)
f=P.f(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
e=P.f(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),q)
d=P.f(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),q)
c=P.f(H.a([new E.M($.dO,15,!0),new E.M($.cq,-4,!0)],k),l)
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.af,L.d("#FF9B00"),!0)
b.j(0,$.ah,L.d("#FF9B00"),!0)
b.j(0,$.ag,L.d("#FF8700"),!0)
b.j(0,$.aq,L.d("#7F7F7F"),!0)
b.j(0,$.ap,L.d("#727272"),!0)
b.j(0,$.aj,L.d("#A3A3A3"),!0)
b.j(0,$.ak,L.d("#999999"),!0)
b.j(0,$.ai,L.d("#898989"),!0)
b.j(0,$.ao,L.d("#EFEFEF"),!0)
b.j(0,$.an,L.d("#DBDBDB"),!0)
b.j(0,$.am,L.d("#C6C6C6"),!0)
b.j(0,$.al,L.d("#ADADAD"),!0)
b=new V.lZ(3.1,2,0.7,h,g,f,e,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",d,["Hippo","Ranting"],["Vent"],c,0.01,0.01,0.01,0.5,18,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Hippo",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
b.W(18,"Hippo",!1,!1,!0)
$.yg=b
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.af,L.d("#959595"),!0)
b.j(0,$.ah,L.d("#bfbfbf"),!0)
b.j(0,$.ag,L.d("#959595"),!0)
b.j(0,$.aq,L.d("#805233"),!0)
b.j(0,$.ap,L.d("#663c1f"),!0)
b.j(0,$.aj,L.d("#805233"),!0)
b.j(0,$.ak,L.d("#737373"),!0)
b.j(0,$.ai,L.d("#664d3c"),!0)
b.j(0,$.ao,L.d("#663c1f"),!0)
b.j(0,$.an,L.d("#4d2d17"),!0)
b.j(0,$.am,L.d("#68594e"),!0)
b.j(0,$.al,L.d("#4f443b"),!0)
c=P.f(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),q)
d=P.f(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),q)
e=P.f(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),q)
f=P.f(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),q)
g=P.f(H.a([new E.M($.dO,5,!0),new E.M($.cq,5,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new L.kA(0.7,2,3.1,b,c,d,e,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",f,["Bear","Thought"],["Doorway"],g,0.01,0.01,0.01,0.5,19,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Bear",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(19,"Bear",!1,!1,!0)
$.y9=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#ebd837"),!0)
h.j(0,$.ah,L.d("#ebd837"),!0)
h.j(0,$.ag,L.d("#857a1f"),!0)
h.j(0,$.aq,L.d("#857a1f"),!0)
h.j(0,$.ap,L.d("#524b13"),!0)
h.j(0,$.aj,L.d("#d0c217"),!0)
h.j(0,$.ak,L.d("#9e9311"),!0)
h.j(0,$.ai,L.d("#6b640c"),!0)
h.j(0,$.ao,L.d("#c3c3c3"),!0)
h.j(0,$.an,L.d("#8f8f8f"),!0)
h.j(0,$.am,L.d("#a88e00"),!0)
h.j(0,$.al,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
f=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
f.j(0,$.af,L.d("#FF9B00"),!0)
f.j(0,$.ah,L.d("#FF9B00"),!0)
f.j(0,$.ag,L.d("#FF8700"),!0)
f.j(0,$.aq,L.d("#7F7F7F"),!0)
f.j(0,$.ap,L.d("#727272"),!0)
f.j(0,$.aj,L.d("#A3A3A3"),!0)
f.j(0,$.ak,L.d("#999999"),!0)
f.j(0,$.ai,L.d("#898989"),!0)
f.j(0,$.ao,L.d("#EFEFEF"),!0)
f.j(0,$.an,L.d("#DBDBDB"),!0)
f.j(0,$.am,L.d("#C6C6C6"),!0)
f.j(0,$.al,L.d("#ADADAD"),!0)
f=new U.n6(h,g,0.01,0.01,0.01,0.5,20,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Mindstone",null,!1,!0,!0,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
f.W(20,"Mindstone",!1,!0,!0)
$.yo=f
f=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
f.j(0,$.af,L.d("#74a4ff"),!0)
f.j(0,$.ah,L.d("#74a4ff"),!0)
f.j(0,$.ag,L.d("#466299"),!0)
f.j(0,$.aq,L.d("#466299"),!0)
f.j(0,$.ap,L.d("#2f4166"),!0)
f.j(0,$.aj,L.d("#d0c217"),!0)
f.j(0,$.ak,L.d("#9e9311"),!0)
f.j(0,$.ai,L.d("#6b640c"),!0)
f.j(0,$.ao,L.d("#c3c3c3"),!0)
f.j(0,$.an,L.d("#8f8f8f"),!0)
f.j(0,$.am,L.d("#a88e00"),!0)
f.j(0,$.al,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new S.of(f,g,0.01,0.01,0.01,0.5,21,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Spacestone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(21,"Spacestone",!1,!0,!0)
$.yx=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#9846cc"),!0)
h.j(0,$.ah,L.d("#9846cc"),!0)
h.j(0,$.ag,L.d("#4c2366"),!0)
h.j(0,$.aq,L.d("#4c2366"),!0)
h.j(0,$.ap,L.d("#261233"),!0)
h.j(0,$.aj,L.d("#d0c217"),!0)
h.j(0,$.ak,L.d("#9e9311"),!0)
h.j(0,$.ai,L.d("#6b640c"),!0)
h.j(0,$.ao,L.d("#c3c3c3"),!0)
h.j(0,$.an,L.d("#8f8f8f"),!0)
h.j(0,$.am,L.d("#a88e00"),!0)
h.j(0,$.al,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
f=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
f.j(0,$.af,L.d("#FF9B00"),!0)
f.j(0,$.ah,L.d("#FF9B00"),!0)
f.j(0,$.ag,L.d("#FF8700"),!0)
f.j(0,$.aq,L.d("#7F7F7F"),!0)
f.j(0,$.ap,L.d("#727272"),!0)
f.j(0,$.aj,L.d("#A3A3A3"),!0)
f.j(0,$.ak,L.d("#999999"),!0)
f.j(0,$.ai,L.d("#898989"),!0)
f.j(0,$.ao,L.d("#EFEFEF"),!0)
f.j(0,$.an,L.d("#DBDBDB"),!0)
f.j(0,$.am,L.d("#C6C6C6"),!0)
f.j(0,$.al,L.d("#ADADAD"),!0)
f=new Z.nH(h,g,0.01,0.01,0.01,0.5,22,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Powerstone",null,!1,!0,!0,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
f.W(22,"Powerstone",!1,!0,!0)
$.yq=f
f=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
f.j(0,$.af,L.d("#ffcb6f"),!0)
f.j(0,$.ah,L.d("#ffcb6f"),!0)
f.j(0,$.ag,L.d("#997a42"),!0)
f.j(0,$.aq,L.d("#997a42"),!0)
f.j(0,$.ap,L.d("#66512c"),!0)
f.j(0,$.aj,L.d("#d0c217"),!0)
f.j(0,$.ak,L.d("#9e9311"),!0)
f.j(0,$.ai,L.d("#6b640c"),!0)
f.j(0,$.ao,L.d("#c3c3c3"),!0)
f.j(0,$.an,L.d("#8f8f8f"),!0)
f.j(0,$.am,L.d("#a88e00"),!0)
f.j(0,$.al,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new F.od(f,g,0.01,0.01,0.01,0.5,23,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Soulstone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(23,"Soulstone",!1,!0,!0)
$.yv=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#7ac476"),!0)
h.j(0,$.ah,L.d("#7ac476"),!0)
h.j(0,$.ag,L.d("#3a5e39"),!0)
h.j(0,$.aq,L.d("#3a5e39"),!0)
h.j(0,$.ap,L.d("#1b2b1a"),!0)
h.j(0,$.aj,L.d("#d0c217"),!0)
h.j(0,$.ak,L.d("#9e9311"),!0)
h.j(0,$.ai,L.d("#6b640c"),!0)
h.j(0,$.ao,L.d("#c3c3c3"),!0)
h.j(0,$.an,L.d("#8f8f8f"),!0)
h.j(0,$.am,L.d("#a88e00"),!0)
h.j(0,$.al,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
f=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
f.j(0,$.af,L.d("#FF9B00"),!0)
f.j(0,$.ah,L.d("#FF9B00"),!0)
f.j(0,$.ag,L.d("#FF8700"),!0)
f.j(0,$.aq,L.d("#7F7F7F"),!0)
f.j(0,$.ap,L.d("#727272"),!0)
f.j(0,$.aj,L.d("#A3A3A3"),!0)
f.j(0,$.ak,L.d("#999999"),!0)
f.j(0,$.ai,L.d("#898989"),!0)
f.j(0,$.ao,L.d("#EFEFEF"),!0)
f.j(0,$.an,L.d("#DBDBDB"),!0)
f.j(0,$.am,L.d("#C6C6C6"),!0)
f.j(0,$.al,L.d("#ADADAD"),!0)
f=new Y.p4(h,g,0.01,0.01,0.01,0.5,24,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Timestone",null,!1,!0,!0,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
f.W(24,"Timestone",!1,!0,!0)
$.yA=f
f=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
f.j(0,$.af,L.d("#ed1c24"),!0)
f.j(0,$.ah,L.d("#ed1c24"),!0)
f.j(0,$.ag,L.d("#820a0f"),!0)
f.j(0,$.aq,L.d("#820a0f"),!0)
f.j(0,$.ap,L.d("#4f0609"),!0)
f.j(0,$.aj,L.d("#d0c217"),!0)
f.j(0,$.ak,L.d("#9e9311"),!0)
f.j(0,$.ai,L.d("#6b640c"),!0)
f.j(0,$.ao,L.d("#c3c3c3"),!0)
f.j(0,$.an,L.d("#8f8f8f"),!0)
f.j(0,$.am,L.d("#a88e00"),!0)
f.j(0,$.al,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF9B00"),!0)
h.j(0,$.ag,L.d("#FF8700"),!0)
h.j(0,$.aq,L.d("#7F7F7F"),!0)
h.j(0,$.ap,L.d("#727272"),!0)
h.j(0,$.aj,L.d("#A3A3A3"),!0)
h.j(0,$.ak,L.d("#999999"),!0)
h.j(0,$.ai,L.d("#898989"),!0)
h.j(0,$.ao,L.d("#EFEFEF"),!0)
h.j(0,$.an,L.d("#DBDBDB"),!0)
h.j(0,$.am,L.d("#C6C6C6"),!0)
h.j(0,$.al,L.d("#ADADAD"),!0)
h=new F.nP(f,g,0.01,0.01,0.01,0.5,25,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Realitystone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.W(25,"Realitystone",!1,!0,!0)
$.ys=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.af,L.d("#e19aca"),!0)
h.j(0,$.ah,L.d("#e19aca"),!0)
h.j(0,$.ag,L.d("#7a546e"),!0)
h.j(0,$.aq,L.d("#7a546e"),!0)
h.j(0,$.ap,L.d("#473140"),!0)
h.j(0,$.aj,L.d("#d0c217"),!0)
h.j(0,$.ak,L.d("#9e9311"),!0)
h.j(0,$.ai,L.d("#6b640c"),!0)
h.j(0,$.ao,L.d("#c3c3c3"),!0)
h.j(0,$.an,L.d("#8f8f8f"),!0)
h.j(0,$.am,L.d("#a88e00"),!0)
h.j(0,$.al,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
f=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
f.j(0,$.af,L.d("#FF9B00"),!0)
f.j(0,$.ah,L.d("#FF9B00"),!0)
f.j(0,$.ag,L.d("#FF8700"),!0)
f.j(0,$.aq,L.d("#7F7F7F"),!0)
f.j(0,$.ap,L.d("#727272"),!0)
f.j(0,$.aj,L.d("#A3A3A3"),!0)
f.j(0,$.ak,L.d("#999999"),!0)
f.j(0,$.ai,L.d("#898989"),!0)
f.j(0,$.ao,L.d("#EFEFEF"),!0)
f.j(0,$.an,L.d("#DBDBDB"),!0)
f.j(0,$.am,L.d("#C6C6C6"),!0)
f.j(0,$.al,L.d("#ADADAD"),!0)
f=new N.lT(h,g,0.01,0.01,0.01,0.5,26,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Gauntlet",null,!1,!0,!0,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
f.W(26,"Gauntlet",!1,!0,!0)
$.ye=f
f=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
f.j(0,$.af,L.d("#c55555"),!0)
f.j(0,$.ah,L.d("#c55555"),!0)
f.j(0,$.ag,L.d("#090404"),!0)
f.j(0,$.aq,L.d("#ba872e"),!0)
f.j(0,$.ap,L.d("#8e694e"),!0)
f.j(0,$.aj,L.d("#b59e5d"),!0)
f.j(0,$.ak,L.d("#837243"),!0)
f.j(0,$.ai,L.d("#4f4528"),!0)
f.j(0,$.ao,L.d("#9fbfbf"),!0)
f.j(0,$.an,L.d("#95b5b5"),!0)
f.j(0,$.am,L.d("#956f6f"),!0)
f.j(0,$.al,L.d("#714b4b"),!0)
g=P.f(H.a(["MEME STEALER","THANOS CAR","AGGRESIVE MEMER"],p),q)
h=P.f(H.a(["Meme","Memetastic","Mesmerizing","Mop","Memelord","Mashedpotato"],p),q)
e=P.f(H.a(["Meme","Funny","Stealing","Despacito","Meme Stealing","Cursed"],p),q)
d=P.f(H.a(["Shogun","Memelord","Air Horn","420","Thanos Car","Luis Fonsi","Bowsette"],p),q)
c=P.f(H.a([new E.M($.cq,-1,!0)],k),l)
m=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
m.j(0,$.af,L.d("#FF9B00"),!0)
m.j(0,$.ah,L.d("#FF9B00"),!0)
m.j(0,$.ag,L.d("#FF8700"),!0)
m.j(0,$.aq,L.d("#7F7F7F"),!0)
m.j(0,$.ap,L.d("#727272"),!0)
m.j(0,$.aj,L.d("#A3A3A3"),!0)
m.j(0,$.ak,L.d("#999999"),!0)
m.j(0,$.ai,L.d("#898989"),!0)
m.j(0,$.ao,L.d("#EFEFEF"),!0)
m.j(0,$.an,L.d("#DBDBDB"),!0)
m.j(0,$.am,L.d("#C6C6C6"),!0)
m.j(0,$.al,L.d("#ADADAD"),!0)
j=new D.n2(2,0.5,1,f,g,h,e,"cURSED","Some cursed meme music starts to play.",d,["memes"],["memes"],c,0.01,0.01,0.01,0.5,27,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Meme",null,!1,!1,!0,!1,!1,!0,1,m,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
j.W(27,"Meme",!1,!1,!0)
$.ym=j
$.yp=L.y8(255,"Null",!1,!0,!1)
j=P.f(H.a([new E.M($.cq,1,!0),new E.M($.hF,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
c=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
d=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
e=H.a(["nobody"],p)
h=P.f(H.a([],k),l)
g=H.a(["Nobody"],p)
f=H.a(["Nobody"],p)
q=new F.n8(j,q,m,c,d,!1,e,h,g,f,1,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"loud","musical","Music")
q.E()
q.F()
B.cM(q)
$.zy=q
q=P.f(H.a([new E.M($.fk,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kl(q,m,j,i,h,!1,g,f,e,d,13,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"nerdy","smart","Academic")
q.E()
q.F()
B.cM(q)
$.zr=q
q=P.f(H.a([new E.M($.hH,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kq(q,m,j,i,h,!1,g,f,e,d,4,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"dumb","athletic","Athletic")
q.E()
q.F()
B.cM(q)
$.zs=q
q=P.f(H.a([new E.M($.hG,-1,!0),new E.M($.hF,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kM(q,m,j,i,h,!1,g,f,e,d,0,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"dorky","funny","Comedy")
q.E()
q.F()
B.cM(q)
$.zt=q
q=P.f(H.a([new E.M($.cq,-1,!0),new E.M($.ew,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kY(q,m,j,i,h,!1,g,f,e,d,2,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"pretentious","cultured","Culture")
q.E()
q.F()
B.cM(q)
$.zu=q
q=P.f(H.a([new E.M($.cq,1,!0),new E.M($.ex,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.l5(q,m,j,i,h,!1,g,f,e,d,8,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"boring","domestic","Domestic")
q.E()
q.F()
B.cM(q)
$.zv=q
q=P.f(H.a([new E.M($.hF,1,!0),new E.M($.du,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lz(q,m,j,i,h,!1,g,f,e,d,7,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"whimpy","imaginative","Fantasy")
q.E()
q.F()
B.cM(q)
$.zw=q
q=P.f(H.a([new E.M($.hH,1,!0),new E.M($.ew,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mA(q,m,j,i,h,!1,g,f,e,d,6,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"harsh","fair-minded","Justice")
q.E()
q.F()
B.cM(q)
$.zx=q
q=P.f(H.a([new E.M($.dO,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nG(q,m,j,i,h,!1,g,f,e,d,9,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"frivolous","geeky","PopCulture")
q.E()
q.F()
B.cM(q)
$.zA=q
q=P.f(H.a([new E.M($.ex,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.nU(q,m,j,i,h,!1,g,f,e,d,12,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"obsessive","romantic","Romantic")
q.E()
q.F()
B.cM(q)
$.zB=q
q=P.f(H.a([new E.M($.cq,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.oc(q,m,j,i,h,!1,g,f,e,d,11,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"shallow","extroverted","Social")
q.E()
q.F()
B.cM(q)
$.zC=q
q=P.f(H.a([new E.M($.ex,-1,!0),new E.M($.cq,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.oS(q,m,j,i,h,!1,g,f,e,d,5,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"terrible","honest","Terrible")
q.E()
q.F()
B.cM(q)
$.zE=q
q=P.f(H.a([new E.M($.fk,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.px(q,m,j,i,h,!1,g,f,e,d,3,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"wordy","lettered","Writing")
q.E()
q.F()
B.cM(q)
$.zF=q
q=P.f(H.a([new E.M($.du,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.oQ(q,m,j,i,h,!1,g,f,e,d,10,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"awkward","techy","Technology")
q.E()
q.F()
B.cM(q)
$.zD=q
q=H.a(["nobody"],p)
l=P.f(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hc(!0,q,l,k,p,-13,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"","","Null")
q.E()
q.F()
B.cM(q)
$.zz=q
A.wl()
t=3
return P.cI(Y.n9(),$async$rf)
case 3:case 1:return P.by(r,s)}})
return P.bz($async$rf,s)}},L={
y8:function(a,b,c,d,e){var t,s,r
t=P.B
s=A.dX
r=P.D
r=new L.a8(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
r.j(0,$.af,L.d("#FF9B00"),!0)
r.j(0,$.ah,L.d("#FF9B00"),!0)
r.j(0,$.ag,L.d("#FF8700"),!0)
r.j(0,$.aq,L.d("#7F7F7F"),!0)
r.j(0,$.ap,L.d("#727272"),!0)
r.j(0,$.aj,L.d("#A3A3A3"),!0)
r.j(0,$.ak,L.d("#999999"),!0)
r.j(0,$.ai,L.d("#898989"),!0)
r.j(0,$.ao,L.d("#EFEFEF"),!0)
r.j(0,$.an,L.d("#DBDBDB"),!0)
r.j(0,$.am,L.d("#C6C6C6"),!0)
r.j(0,$.al,L.d("#ADADAD"),!0)
s=[t]
t=new L.fC(0.01,0.01,0.01,0.5,a,new H.t(0,null,null,null,null,null,0,[X.G,P.U]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.M]),H.a([],[A.fI]),Q.F(null,null,A.a_))
t.W(a,b,c,d,e)
return t},
d:function(a){if(C.c.af(a,"#"))return A.vb(C.c.ag(a,1))
else return A.vb(a)},
fC:function fC(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
kA:function kA(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
o1:function o1(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
oO:function oO(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2}},M={kq:function kq(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fJ:function fJ(a,b){this.a=a
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
_.ch=ch},h_:function h_(){},bw:function bw(a,b){this.a=a
this.b=b},oj:function oj(a){this.a=a},ps:function ps(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},U={ku:function ku(){},mV:function mV(a){this.a=a},np:function np(a){this.a=a},oF:function oF(){},oG:function oG(a){this.a=a},oH:function oH(a){this.a=a},l6:function l6(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ac,dP,dQ,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.ac=ac
_.dP=dP
_.dQ=dQ
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
_.r2=r2},n6:function n6(y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
this.a=a},at:function at(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},oZ:function oZ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
FX:function(a){if(J.d8(a).af(a," "))return C.c.ag(a,1)
return a},
pt:function pt(a){this.a=a},
pu:function pu(a,b){this.a=a
this.b=b},
pv:function pv(a,b){this.a=a
this.b=b}},O={kw:function kw(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},c5:function c5(){},dl:function dl(){},kB:function kB(a){this.a=a},ey:function ey(){},ig:function ig(){},
Ha:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.u6()
a=J.y0(a,P.dJ("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.ru(t))
s=document
J.rC(s.querySelector("#navbar"),"beforeend",a,C.o,null)
if(J.bb(O.GZ("seerOfVoid",null),"true"))P.zp(new O.rv(),P.d3)
r=new P.dY(Date.now(),!1)
if(H.uc(r)===4&&H.ub(r)===1)J.uW(s.querySelector("body")).h(0,"voidbody")
q=H.uc(r)
p=H.ub(r)
o=C.a.C(H.wt(r))
n=C.a.C(q)
m=C.a.C(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.jA(null,null)
k.cR(H.ff(l,null,null))
k.hm()
if($.FN||k.a.cB()>0.99)H.ke(s.querySelector("#today"),"$iseL").href=C.c.ar("../",t)+"dead_index.html?seed="+l
else H.ke(s.querySelector("#today"),"$iseL").href=C.c.ar("../",t)+"index2.html?seed="+l},
GZ:function(a,b){var t,s,r,q
t=P.wV().gcH().n(0,a)
if(t!=null)t=P.qP(t,0,J.ck(t),C.n,!1)
if(t!=null)return t
s=$.xF
if(s.length!==0){r=J.y2(window.location.href,J.xY(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.wW(H.xH(s,q,"")+"?"+$.xF,0,null).gcH().n(0,a)}return},
Hm:function(){var t,s,r,q
t=document
J.uW(t.querySelector("body")).h(0,"voidbody")
s=new W.jY(t.querySelectorAll(".void"),[null])
for(t=new H.en(s,s.gm(s),0,null,[null]);t.I();){r=t.d
q=J.xT(J.rB(r))
if(q==="none"||q.length===0)O.Hg(r)
else O.H0(r)}},
Hg:function(a){var t,s
if(a==null)return
t=J.bI(a)
s=t.gaI(a)
J.v0(s,!!t.$ishE?"inline":"block")},
H0:function(a){if(a==null)return
J.v0(J.rB(a),"none")},
Hh:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fx("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.eK(s,",")
if(!J.xP(r,a))window.localStorage.setItem(t,H.C(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.ct(q)
P.fx("Saving isn't possible....you don't have local storage")}},
ru:function ru(a){this.a=a},
rv:function rv(){},
rt:function rt(){},
cT:function cT(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={oU:function oU(a){this.a=a},nO:function nO(a){this.a=a},kH:function kH(a){this.a=a},lV:function lV(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},lW:function lW(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nl:function nl(b,a){this.b=b
this.a=a},dL:function dL(a,b){this.a=a
this.b=b},ae:function ae(a,b){this.a=a
this.b=b},cY:function cY(r,c,d,e,f,a,b){var _=this
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
_.b=b},S:function S(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},i5:function i5(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bC:function bC(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cV:function cV(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kK:function kK(c,a,b){this.c=c
this.a=a
this.b=b},br:function br(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jw:function jw(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iu:function iu(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jy:function jy(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},nZ:function nZ(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ob:function ob(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},p4:function p4(y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},dK:function dK(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
n9:function(){var t=0,s=P.bq(),r,q
var $async$n9=P.bA(function(a,b){if(a===1)return P.bx(b,s)
while(true)switch(t){case 0:P.fx("loading big bads")
r=$
q=J
t=2
return P.cI(A.eo("BigBadLists/bigBads.txt",!1,!1,null),$async$n9)
case 2:r.wo=q.eK(b,"\n")
return P.by(null,s)}})
return P.bz($async$n9,s)},
GL:function(a){var t,s,r,q,p,o
t=J.eK(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.cj)(t),++q){p=t[q]
o=J.bf(p)
r+=" "+(J.y5(o.n(p,0))+o.ag(p,1))}return r}},V={l5:function l5(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lP:function lP(a){this.a=a},lZ:function lZ(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},n5:function n5(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},nt:function nt(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nV:function nV(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},oS:function oS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
z6:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dm(new P.c9(""),0,0)
t.ah(a,8)
s=Math.pow(256,e)
c.toString
r=H.cN(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.x(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.x(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ah(n-1,p)
t.ah(a,8)}return t.b_(b)},
z5:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cx(c)
s=new Uint8Array(t)
r=new B.db(null,0)
r.a=J.dU(a,b)
for(q=e*8,p=0;p<c;){o=r.a7(q)+1
n=r.a7(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.x(s,l)
s[l]=n}p+=o}return s},
rS:function(a){return new V.lf(a)},
rR:function(a){return new V.le(a)},
z2:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dm(new P.c9(""),0,0)
t.ah(a,8)
s=d.gcC()
r=C.f.aj(Math.log(H.ka(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cN(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.x(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.x(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ah(m-1,o)
t.ah(a,r)}return t.b_(b)},
z1:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.db(null,0)
p.a=J.dU(a,b)
for(r=e*8,o=0;o<c;){n=p.a7(r)+1
m=p.a7(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.x(s,k)
s[k]=m}o+=n}return s},
rQ:function(a){return new V.ld(a)},
rP:function(a){return new V.lc(a)},
z4:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dm(new P.c9(""),0,0)
t.ah(a,8)
s=d.gcC()
r=C.f.aj(Math.log(H.ka(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cN(c,0,null)
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
t.ah(a,r)}return t.b_(b)},
z3:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.db(null,0)
p.a=J.dU(a,b)
for(o=0;o<c;){n=p.a7(p.a7(5)+1)+1
m=p.a7(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.x(s,r)
s[r]=m}o+=n}return s},
lf:function lf(a){this.a=a},
le:function le(a){this.a=a},
ld:function ld(a){this.a=a},
lc:function lc(a){this.a=a}},Z={l7:function l7(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
zg:function(){var t,s
if(!$.vs)$.vs=!0
else return
t=[P.B]
s=new Y.oU(H.a([],t))
$.t7=s
Z.cL(s,"txt",null)
Z.cL($.t7,"vert","x-shader/x-vertex")
Z.cL($.t7,"frag","x-shader/x-fragment")
$.zf=new Y.nO(H.a([],t))
$.vu=new Y.kH(H.a([],t))
s=new B.pC(H.a([],t))
$.vw=s
Z.cL(s,"zip",null)
Z.cL($.vw,"bundle",null)
s=new U.pt(H.a([],t))
$.zo=s
Z.cL(s,"words",null)
s=new Q.nE(H.a([],t))
$.vv=s
Z.cL(s,"png",null)
Z.cL($.vv,"jpg","image/jpeg")
$.zm=new Q.nB(H.a([],t))
s=new M.oj(H.a([],t))
$.zn=s
Z.cL(s,"psprite",null)
s=new V.lP(H.a([],t))
$.t6=s
Z.cL(s,"ttf",null)
Z.cL($.t6,"otf",null)
Z.cL($.t6,"woff",null)
s=new Y.nl(null,H.a([],t))
$.zj=s
Z.cL(s,"obj",null)
s=new U.mV(H.a([],t))
$.zh=s
Z.cL(s,"mp3",null)
$.zi=new U.oG(H.a([],t))
s=new U.np(H.a([],t))
$.zk=s
Z.cL(s,"ogg",null)
$.zl=new U.oH(H.a([],t))},
cL:function(a,b,c){$.$get$lQ().i(0,b,new Z.ih(a,c,[null,null]))
a.a.push(b)},
vt:function(a){var t
if($.$get$lQ().a_(0,a)){t=$.$get$lQ().n(0,a)
if(t.a instanceof O.c5)return t
throw H.l("File format for extension ."+H.C(a)+" does not match expected types.")}throw H.l("No file format found for extension ."+H.C(a))},
ih:function ih(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mz:function mz(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
mU:function mU(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
nH:function nH(y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
tJ:function tJ(){},
tF:function tF(){},
tG:function tG(){}},X={ii:function ii(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},i2:function i2(){},m0:function m0(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},m5:function m5(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
this.c=c}},N={a4:function a4(){},lT:function lT(y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},mA:function mA(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nL:function nL(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nT:function nT(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oc:function oc(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oe:function oe(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},p_:function p_(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
F_:function(a){var t,s,r,q,p,o,n,m,l
t=J.cJ(a)
s=new W.jY(document.querySelectorAll("link"),[null])
for(r=new H.en(s,s.gm(s),0,null,[null]);r.I();){q=r.d
p=J.aL(q)
if(!!p.$ishk&&q.rel==="stylesheet"){o=$.$get$nz()
H.C(p.gae(q))
o.toString
o=t.length
n=Math.min(o,J.ck(p.gae(q)))
for(m=0;m<n;++m){if(m>=o)return H.x(t,m)
if(t[m]!==J.i0(p.gae(q),m)){l=C.c.ag(t,m)
$.$get$nz().toString
return l.split("/").length-1}continue}}}$.$get$nz().b6(C.m,"Didn't find a css link to derive relative path")
return 0},
u6:function(){var t=P.wV()
if(!$.$get$ny().a_(0,t))$.$get$ny().i(0,t,N.F_(t))
return $.$get$ny().n(0,t)}},E={iw:function iw(){},no:function no(){},M:function M(a,b,c){this.a=a
this.b=b
this.c=c},fD:function fD(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kp:function kp(a,b,c){this.a=a
this.b=b
this.c=c},n7:function n7(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nN:function nN(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},nY:function nY(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},po:function po(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},B={lY:function lY(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
cM:function(a){var t=a.f
if($.$get$md().a_(0,t))throw H.l("Duplicate aspect id for "+a.C(0)+": "+t+" is already registered for "+J.cJ($.$get$md().n(0,t))+".")
$.$get$md().i(0,t,a)},
hc:function hc(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
pC:function pC(a){this.a=a},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(a,b){this.a=a
this.b=b},
Gv:function(a){return a.b8(0)},
dv:function dv(a){this.a=a},
jQ:function jQ(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hO:function hO(a,b){this.a=a
this.b=b}},Q={m6:function m6(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},m9:function m9(){},nE:function nE(a){this.a=a},nB:function nB(a){this.a=a},mD:function mD(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,ac,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},nU:function nU(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pn:function pn(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},jx:function jx(){},
F:function(a,b,c){var t=new Q.dR(null,null,[c])
t.d_(a,b,c)
return t},
uD:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.F(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dT(a,"$iso",[e],"$aso"))if(H.dT(a,"$iscQ",[e],"$ascQ"))for(s=J.d9(a.gbS()),r=0;s.I();){q=s.gR()
p=t.b
o=p.length
if(r>=o)return H.x(p,r)
p[r]=q;++r}else for(s=a.gY(a),p=[H.O(t,0)],r=0;s.I();){n=s.gR()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.x(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gY(a),p=[e],o=[H.O(t,0)];s.I();){l=s.gR()
if(H.GN(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.x(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dT(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.x(m,0)
m[0]=l}else throw H.l("Invalid entry type "+H.C(J.uY(l))+" for WeightedList<"+H.C(H.bY(H.dz(e)))+">. Should be "+H.C(H.bY(H.dz(e)))+" or WeightPair<"+H.C(H.bY(H.dz(e)))+">.")}return t},
uE:function(a,b,c,d){return new Q.jN(J.uZ(a.gbS(),new Q.pr(c,d,b)),null,[c,d])},
cQ:function cQ(){},
dR:function dR(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hM:function hM(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eE:function eE(){},
hL:function hL(){},
pq:function pq(a,$ti){this.a=a
this.$ti=$ti},
jN:function jN(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pr:function pr(a,b,c){this.a=a
this.b=b
this.c=c},
o3:function(){var t=0,s=P.bq(),r
var $async$o3=P.bA(function(a,b){if(a===1)return P.bx(b,s)
while(true)switch(t){case 0:t=3
return P.cI(A.hm("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$o3)
case 3:r=A.hm("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$o3,s)}},G={mG:function mG(y1,y2,p,q,t,u,v,w,A,B,D,G,H,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},nG:function nG(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yK:function(a){var t,s,r,q,p,o,n,m,l
t=G.Y
s=P.tQ(a,t)
r=P.a5(null,null,null,t)
q=H.a([],[G.e])
for(t=G.EE(),p=J.d9(t.a),t=new H.jO(p,t.b,[H.O(t,0)]);t.I();){o=p.gR()
if(o.ed(s))q.push(o)}C.b.ex(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.cj)(q),++n){o=q[n]
if(o.ed(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.cj)(p),++l)s.an(0,p[l])}}if(s.a!==0)r.bJ(0,s)
return r},
EE:function(){var t=$.$get$c()
t.toString
return new H.hN(t,new G.mp(),[H.O(t,0)])},
Y:function Y(){},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
mp:function mp(){}},D={n2:function n2(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},oQ:function oQ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
FS:function(){if($.wF)return
$.wF=!0
var t=new D.cF("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=0
$.ol=t
t=new D.cF("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.FR=t
t=new D.jR(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=2.5
t.Q=1
$.hH=t
t=new D.jR(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=2.5
$.ew=t
t=new D.cF("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.FQ=t
t=new D.cF("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.dO=t
t=new D.nR("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.ex=t
t=new D.cF("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.cq=t
t=new D.cF("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.fk=t
t=new D.cF("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.hF=t
t=new D.cF("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.hG=t
t=new D.cF("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.du=t
t=new D.cF("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.c8=t},
ur:function(){var t=$.$get$cO()
return new H.hN(t,new D.om(),[H.O(t,0)])},
om:function om(){},
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
jR:function jR(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
nR:function nR(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}},F={n8:function n8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nP:function nP(y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},od:function od(y1,y2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},px:function px(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
EJ:function(a){if(a===C.h){window
return C.i.gaq(C.i)}if(a===C.m){window
return C.i.ghJ()}if(a===C.Z){window
return C.i.ghc()}return P.GQ()},
hn:function hn(a,b){this.a=a
this.b=b},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
tO:function tO(){},
z0:function(a,b,c,d){var t,s,r,q
t=new B.dm(new P.c9(""),0,0)
t.ah(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bK(s[q])
return t.b_(b)},
z_:function(a,b,c,d){var t,s,r,q,p
t=H.cx(c)
s=new Uint8Array(t)
r=new B.db(null,0)
r.a=J.dU(a,b)
for(q=0;q<c;++q){p=r.bT()
if(q>=t)return H.x(s,q)
s[q]=p}return s},
yZ:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dm(new P.c9(""),0,0)
t.ah(a,8)
s=d.gcC()
r=C.f.aj(Math.log(H.ka(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cN(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.x(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.x(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bK(o-1)
t.ah(a,r)}return t.b_(b)},
yY:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.db(null,0)
p.a=J.dU(a,b)
for(o=0;o<c;){n=p.bT()+1
m=p.a7(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.x(s,r)
s[r]=m}o+=n}return s},
yX:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dm(new P.c9(""),0,0)
t.ah(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.x(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.x(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bK(p-1)
t.bK(a)}return t.b_(b)},
yW:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cx(c)
s=new Uint8Array(t)
r=new B.db(null,0)
r.a=J.dU(a,b)
for(q=0;q<c;){p=r.bT()+1
o=r.bT()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.x(s,m)
s[m]=o}q+=p}return s}},R={
Fj:function(a){var t,s
if(a.gm(a).aB(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.ghQ(s).gi0().dY("checking for two players, ps is "+H.C(a)+", ret is "+t)
return t},
F7:function(a){a.gad(a).gbL()
return!1},
Fi:function(a){a.gad(a).gbL()
return!1},
Fh:function(a){a.gad(a).gbL()
return!1},
Fg:function(a){return a.gad(a).gbi().gi_()},
Fe:function(a){return a.gad(a).gbi().ghY()},
Fd:function(a){return a.gad(a).gbi().ghX()},
Fa:function(a){return a.gad(a).gbi().ghV()},
Fc:function(a){return a.gad(a).gbi().ghW()},
Ff:function(a){return a.gad(a).gbi().ghZ()},
Fb:function(a){var t=a.gad(a)
t.gbL()
t.gbL()
return!1},
F8:function(a){return!0},
F9:function(a){a.gad(a).ghS()
return!1},
nM:function nM(){},
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
oM:function oM(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
h7:function h7(){},
u5:function u5(){},
u4:function u4(){}}
var v=[C,H,J,P,W,T,S,K,A,L,M,U,O,Y,V,Z,X,N,E,B,Q,G,D,F,R]
setFunctionNamesIfNecessary(v)
var $={}
H.tL.prototype={}
J.i.prototype={
S:function(a,b){return a===b},
ga6:function(a){return H.eq(a)},
C:function(a){return H.nJ(a)},
gaa:function(a){return new H.dQ(H.kd(a),null)},
$ish7:1,
$isac:1,
$isfe:1,
$isac:1,
$ismv:1,
$isi:1,
$ismv:1,
$isi:1,
$ishq:1,
$isac:1}
J.mt.prototype={
C:function(a){return String(a)},
ga6:function(a){return a?519018:218159},
gaa:function(a){return C.ae},
$isd7:1}
J.mu.prototype={
S:function(a,b){return null==b},
C:function(a){return"null"},
ga6:function(a){return 0},
gaa:function(a){return C.a8},
$isd3:1}
J.hi.prototype={
ga6:function(a){return 0},
gaa:function(a){return C.a7},
C:function(a){return String(a)},
$ismv:1,
h:function(a,b){return a.add(b)},
an:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbR:function(a){return a.left},
gbW:function(a){return a.top},
gb1:function(a){return a.width},
gaW:function(a){return a.height},
hq:function(a,b){return a.parse(b)},
ev:function(a,b){return a.setLogging(b)},
ew:function(a,b){return a.setMaterials(b)}}
J.nD.prototype={}
J.eB.prototype={}
J.el.prototype={
C:function(a){var t=a[$.$get$vd()]
return t==null?this.eB(a):J.cJ(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ej.prototype={
bO:function(a,b){if(!!a.immutable$list)throw H.l(new P.V(b))},
cq:function(a,b){if(!!a.fixed$length)throw H.l(new P.V(b))},
h:function(a,b){this.cq(a,"add")
a.push(b)},
a9:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.l(new P.bN(a))}},
av:function(a,b){return new H.fa(a,b,[H.O(a,0),null])},
bd:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.C(a[r])
if(r>=t)return H.x(s,r)
s[r]=q}return s.join(b)},
cT:function(a,b){return H.wH(a,b,null,H.O(a,0))},
h1:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.l(new P.bN(a))}return s},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
c_:function(a,b,c){if(b<0||b>a.length)throw H.l(P.bD(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.l(H.bp(c))
if(c<b||c>a.length)throw H.l(P.bD(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.O(a,0)])
return H.a(a.slice(b,c),[H.O(a,0)])},
gad:function(a){if(a.length>0)return a[0]
throw H.l(H.ji())},
gb5:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.l(H.ji())},
a8:function(a,b,c,d,e){var t,s,r
this.bO(a,"setRange")
P.df(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.ba(P.bD(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.l(H.wf())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.x(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.x(d,r)
a[b+s]=d[r]}},
ax:function(a,b,c,d){return this.a8(a,b,c,d,0)},
bP:function(a,b,c,d){var t
this.bO(a,"fill range")
P.df(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aA:function(a,b,c,d){var t,s,r,q,p,o
this.cq(a,"replaceRange")
P.df(b,c,a.length,null,null,null)
d=C.c.ao(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.ax(a,b,r,d)
if(p!==0){this.a8(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a8(a,r,o,a,c)
this.ax(a,b,r,d)}},
h_:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.l(new P.bN(a))}return!0},
cU:function(a,b){var t
this.bO(a,"sort")
t=b==null?P.GP():b
H.jE(a,0,a.length-1,t)},
ex:function(a){return this.cU(a,null)},
aX:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.bb(a[t],b))return t
return-1},
bc:function(a,b){return this.aX(a,b,0)},
ai:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bb(a[t],b))return!0
return!1},
gV:function(a){return a.length===0},
C:function(a){return P.jh(a,"[","]")},
a3:function(a,b){var t=H.a(a.slice(0),[H.O(a,0)])
return t},
ao:function(a){return this.a3(a,!0)},
gY:function(a){return new J.i1(a,a.length,0,null,[H.O(a,0)])},
ga6:function(a){return H.eq(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cq(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dV(b,"newLength",null))
if(b<0)throw H.l(P.bD(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c2(a,b))
if(b>=a.length||b<0)throw H.l(H.c2(a,b))
return a[b]},
i:function(a,b,c){this.bO(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c2(a,b))
if(b>=a.length||b<0)throw H.l(H.c2(a,b))
a[b]=c},
$isaJ:1,
$asaJ:function(){},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
J.tK.prototype={}
J.i1.prototype={
gR:function(){return this.d},
I:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.l(H.cj(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.f9.prototype={
ay:function(a,b){var t
if(typeof b!=="number")throw H.l(H.bp(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcz(b)
if(this.gcz(a)===t)return 0
if(this.gcz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcz:function(a){return a===0?1/a<0:a<0},
aj:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.l(new P.V(""+a+".floor()"))},
b7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.l(new P.V(""+a+".round()"))},
ab:function(a,b,c){if(C.a.ay(b,c)>0)throw H.l(H.bp(b))
if(this.ay(a,b)<0)return b
if(this.ay(a,c)>0)return c
return a},
l:function(a){return a},
bu:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.l(P.bD(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.Z(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.ba(new P.V("Unexpected toString result: "+t))
r=J.bf(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.ar("0",q)},
C:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga6:function(a){return a&0x1FFFFFFF},
cP:function(a){return-a},
U:function(a,b){if(typeof b!=="number")throw H.l(H.bp(b))
return a+b},
ar:function(a,b){if(typeof b!=="number")throw H.l(H.bp(b))
return a*b},
by:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
cY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dD(a,b)},
am:function(a,b){return(a|0)===a?a/b|0:this.dD(a,b)},
dD:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.l(new P.V("Result of truncating division is "+H.C(t)+": "+H.C(a)+" ~/ "+H.C(b)))},
at:function(a,b){if(typeof b!=="number")throw H.l(H.bp(b))
if(b<0)throw H.l(H.bp(b))
return b>31?0:a<<b>>>0},
ap:function(a,b){return b>31?0:a<<b>>>0},
aS:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fw:function(a,b){if(b<0)throw H.l(H.bp(b))
return b>31?0:a>>>b},
dC:function(a,b){return b>31?0:a>>>b},
a4:function(a,b){if(typeof b!=="number")throw H.l(H.bp(b))
return a<b},
aB:function(a,b){if(typeof b!=="number")throw H.l(H.bp(b))
return a>b},
as:function(a,b){if(typeof b!=="number")throw H.l(H.bp(b))
return a>=b},
gaa:function(a){return C.ah},
$isdk:1}
J.jl.prototype={
gaa:function(a){return C.ag},
$isU:1,
$isdk:1,
$isD:1}
J.jk.prototype={
gaa:function(a){return C.af},
$isU:1,
$isdk:1}
J.ek.prototype={
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c2(a,b))
if(b<0)throw H.l(H.c2(a,b))
if(b>=a.length)H.ba(H.c2(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(b>=a.length)throw H.l(H.c2(a,b))
return a.charCodeAt(b)},
cn:function(a,b,c){if(c>b.length)throw H.l(P.bD(c,0,b.length,null,null))
return new H.qI(b,a,c)},
aT:function(a,b){return this.cn(a,b,0)},
e3:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.l(P.bD(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.Z(b,c+s)!==this.a5(a,s))return
return new H.jJ(c,b,a)},
U:function(a,b){if(typeof b!=="string")throw H.l(P.dV(b,null,null))
return a+b},
fZ:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ag(a,s-t)},
cJ:function(a,b,c){return H.xH(a,b,c)},
hC:function(a,b,c){return H.Hj(a,b,c,null)},
ey:function(a,b){if(b==null)H.ba(H.bp(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hh&&b.gdm().exec("").length-2===0)return a.split(b.gfk())
else return this.f2(a,b)},
aA:function(a,b,c,d){var t,s
H.uL(b)
c=P.df(b,c,a.length,null,null,null)
H.uL(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
f2:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.B])
for(s=J.xL(b,a),s=s.gY(s),r=0,q=1;s.I();){p=s.gR()
o=p.gcV(p)
n=p.gdO(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.L(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ag(a,r))
return t},
aC:function(a,b,c){var t
H.uL(c)
if(typeof c!=="number")return c.a4()
if(c<0||c>a.length)throw H.l(P.bD(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.xZ(b,a,c)!=null},
af:function(a,b){return this.aC(a,b,0)},
L:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.ba(H.bp(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.ba(H.bp(c))
if(typeof b!=="number")return b.a4()
if(b<0)throw H.l(P.jB(b,null,null))
if(typeof c!=="number")return H.as(c)
if(b>c)throw H.l(P.jB(b,null,null))
if(c>a.length)throw H.l(P.jB(c,null,null))
return a.substring(b,c)},
ag:function(a,b){return this.L(a,b,null)},
hI:function(a){return a.toUpperCase()},
be:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a5(t,0)===133){r=J.EF(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.Z(t,q)===133?J.tH(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
ee:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.Z(t,r)===133)s=J.tH(t,r)}else{s=J.tH(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
ar:function(a,b){var t,s
if(typeof b!=="number")return H.as(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.l(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
aX:function(a,b,c){var t
if(c<0||c>a.length)throw H.l(P.bD(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bc:function(a,b){return this.aX(a,b,0)},
hi:function(a,b,c){var t
if(b==null)H.ba(H.bp(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.ba(P.bD(t,0,c,null,null))
if(b.c8(a,t)!=null)return t}return-1},
e0:function(a,b){return this.hi(a,b,null)},
dM:function(a,b,c){if(c>a.length)throw H.l(P.bD(c,0,a.length,null,null))
return H.Hi(a,b,c)},
ai:function(a,b){return this.dM(a,b,0)},
gV:function(a){return a.length===0},
ay:function(a,b){var t
if(typeof b!=="string")throw H.l(H.bp(b))
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
gaa:function(a){return C.a9},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c2(a,b))
if(b>=a.length||b<0)throw H.l(H.c2(a,b))
return a[b]},
$isaJ:1,
$asaJ:function(){},
$isB:1}
H.kL.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.Z(this.a,b)},
$ashJ:function(){return[P.D]},
$asjm:function(){return[P.D]},
$ashz:function(){return[P.D]},
$asq:function(){return[P.D]},
$asv:function(){return[P.D]},
$aso:function(){return[P.D]}}
H.v.prototype={$asv:null}
H.em.prototype={
gY:function(a){return new H.en(this,this.gm(this),0,null,[H.aR(this,"em",0)])},
a9:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.T(0,s))
if(t!==this.gm(this))throw H.l(new P.bN(this))}},
gV:function(a){return this.gm(this)===0},
gad:function(a){if(this.gm(this)===0)throw H.l(H.ji())
return this.T(0,0)},
ai:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.bb(this.T(0,s),b))return!0
if(t!==this.gm(this))throw H.l(new P.bN(this))}return!1},
av:function(a,b){return new H.fa(this,b,[H.aR(this,"em",0),null])},
a3:function(a,b){var t,s,r
t=H.a([],[H.aR(this,"em",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.T(0,s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
ao:function(a){return this.a3(a,!0)}}
H.oK.prototype={
gf3:function(){var t=J.ck(this.a)
return t},
gfz:function(){var t,s
t=J.ck(this.a)
s=this.b
if(J.cu(s,t))return t
return s},
gm:function(a){var t,s
t=J.ck(this.a)
s=this.b
if(J.uS(s,t))return 0
if(typeof s!=="number")return H.as(s)
return t-s},
T:function(a,b){var t=J.e6(this.gfz(),b)
if(J.e7(b,0)||J.uS(t,this.gf3()))throw H.l(P.bt(b,this,"index",null,null))
return J.uV(this.a,t)},
a3:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bf(s)
q=r.gm(s)
if(typeof t!=="number")return H.as(t)
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
eJ:function(a,b,c,d){var t=this.b
if(J.e7(t,0))H.ba(P.bD(t,0,null,"start",null))}}
H.en.prototype={
gR:function(){return this.d},
I:function(){var t,s,r,q
t=this.a
s=J.bf(t)
r=s.gm(t)
if(this.b!==r)throw H.l(new P.bN(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.T(t,q);++this.c
return!0}}
H.hp.prototype={
gY:function(a){return new H.jn(null,J.d9(this.a),this.b,this.$ti)},
gm:function(a){return J.ck(this.a)},
gV:function(a){return J.rA(this.a)},
$aso:function(a,b){return[b]}}
H.fR.prototype={$isv:1,
$asv:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.jn.prototype={
I:function(){var t=this.b
if(t.I()){this.a=this.c.$1(t.gR())
return!0}this.a=null
return!1},
gR:function(){return this.a},
$asjj:function(a,b){return[b]}}
H.fa.prototype={
gm:function(a){return J.ck(this.a)},
T:function(a,b){return this.b.$1(J.uV(this.a,b))},
$asem:function(a,b){return[b]},
$asv:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.hN.prototype={
gY:function(a){return new H.jO(J.d9(this.a),this.b,this.$ti)},
av:function(a,b){return new H.hp(this,b,[H.O(this,0),null])}}
H.jO.prototype={
I:function(){var t,s
for(t=this.a,s=this.b;t.I();)if(s.$1(t.gR())===!0)return!0
return!1},
gR:function(){return this.a.gR()}}
H.it.prototype={
sm:function(a,b){throw H.l(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.l(new P.V("Cannot add to a fixed-length list"))},
aA:function(a,b,c,d){throw H.l(new P.V("Cannot remove from a fixed-length list"))}}
H.pa.prototype={
i:function(a,b,c){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.l(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.l(new P.V("Cannot add to an unmodifiable list"))},
a8:function(a,b,c,d,e){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
ax:function(a,b,c,d){return this.a8(a,b,c,d,0)},
aA:function(a,b,c,d){throw H.l(new P.V("Cannot remove from an unmodifiable list"))},
bP:function(a,b,c,d){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
H.hJ.prototype={$asq:null,$asv:null,$aso:null,$isq:1,$isv:1,$iso:1}
H.rx.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.ry.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qq.prototype={}
H.fq.prototype={
dI:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cl()},
hB:function(a){var t,s,r,q,p,o
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
if(q===s.c)s.dg();++s.d}this.y=!1}this.cl()},
fD:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aL(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.x(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hz:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aL(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.ba(new P.V("removeRange"))
P.df(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eu:function(a,b){if(!this.r.S(0,a))return
this.db=b},
h7:function(a,b,c){var t=J.aL(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.fz(a,c)
return}t=this.cx
if(t==null){t=P.tR(null,null)
this.cx=t}t.aJ(0,new H.ql(a,c))},
h6:function(a,b){var t
if(!this.r.S(0,a))return
t=J.aL(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.bQ()
return}t=this.cx
if(t==null){t=P.tR(null,null)
this.cx=t}t.aJ(0,this.ghh())},
h8:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fx(a)
if(b!=null)P.fx(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cJ(a)
s[1]=b==null?null:J.cJ(b)
for(r=new P.dw(t,t.r,null,null,[null]),r.c=t.e;r.I();)J.fz(r.d,s)},
bm:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.ct(o)
p=H.cs(o)
this.h8(q,p)
if(this.db===!0){this.bQ()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghg()
if(this.cx!=null)for(;n=this.cx,!n.gV(n);)this.cx.e8().$0()}return s},
cA:function(a){return this.b.n(0,a)},
d1:function(a,b){var t=this.b
if(t.a_(0,a))throw H.l(P.lh("Registry: ports must be registered only once."))
t.i(0,a,b)},
cl:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bQ()},
bQ:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.ba(0)
for(t=this.b,s=t.gbX(t),s=s.gY(s);s.I();)s.gR().eW()
t.ba(0)
this.c.ba(0)
u.globalState.z.an(0,this.a)
this.dx.ba(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.x(t,p)
J.fz(q,t[p])}this.ch=null}},
ghg:function(){return this.d},
gfO:function(){return this.e}}
H.ql.prototype={
$0:function(){J.fz(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.pX.prototype={
fT:function(){var t=this.a
if(t.b===t.c)return
return t.e8()},
ec:function(){var t,s,r
t=this.fT()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.a_(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gV(s)}else s=!1
else s=!1
else s=!1
if(s)H.ba(P.lh("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gV(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hl(["command","close"])
r=new H.dx(!0,new P.k1(0,null,null,null,null,null,0,[null,P.D])).aw(r)
s.toString
self.postMessage(r)}return!1}t.hw()
return!0},
dv:function(){if(self.window!=null)new H.pY(this).$0()
else for(;this.ec(););},
bt:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dv()
else try{this.dv()}catch(r){t=H.ct(r)
s=H.cs(r)
q=u.globalState.Q
p=P.hl(["command","error","msg",H.C(t)+"\n"+H.C(s)])
p=new H.dx(!0,P.hU(null,P.D)).aw(p)
q.toString
self.postMessage(p)}}}
H.pY.prototype={
$0:function(){if(!this.a.ec())return
P.wI(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.eH.prototype={
hw:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bm(this.b)}}
H.qp.prototype={}
H.me.prototype={
$0:function(){H.zJ(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mf.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fw(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fw(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cl()},
$S:function(){return{func:1,v:true}}}
H.pK.prototype={}
H.fr.prototype={
b3:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdl())return
r=H.Gr(b)
if(t.gfO()===s){s=J.bf(r)
switch(s.n(r,0)){case"pause":t.dI(s.n(r,1),s.n(r,2))
break
case"resume":t.hB(s.n(r,1))
break
case"add-ondone":t.fD(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hz(s.n(r,1))
break
case"set-errors-fatal":t.eu(s.n(r,1),s.n(r,2))
break
case"ping":t.h7(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.h6(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.an(0,s)
break}return}u.globalState.f.a.aJ(0,new H.eH(t,new H.qs(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.fr&&J.bb(this.b,b.b)},
ga6:function(a){return this.b.gca()}}
H.qs.prototype={
$0:function(){var t=this.a.b
if(!t.gdl())t.eS(0,this.b)},
$S:function(){return{func:1}}}
H.hX.prototype={
b3:function(a,b){var t,s,r
t=P.hl(["command","message","port",this,"msg",b])
s=new H.dx(!0,P.hU(null,P.D)).aw(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.hX&&J.bb(this.b,b.b)&&J.bb(this.a,b.a)&&J.bb(this.c,b.c)},
ga6:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.at()
s=this.a
if(typeof s!=="number")return s.at()
r=this.c
if(typeof r!=="number")return H.as(r)
return(t<<16^s<<8^r)>>>0}}
H.fh.prototype={
eW:function(){this.c=!0
this.b=null},
eS:function(a,b){if(this.c)return
this.b.$1(b)},
$isFk:1,
gca:function(){return this.a},
gdl:function(){return this.c}}
H.p1.prototype={
eK:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aJ(0,new H.eH(s,new H.p2(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.di(new H.p3(this,b),0),a)}else throw H.l(new P.V("Timer greater than 0."))}}
H.p2.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.p3.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dC.prototype={
ga6:function(a){var t=this.a
if(typeof t!=="number")return t.cS()
t=C.d.aS(t,0)^C.d.am(t,4294967296)
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
gca:function(){return this.a}}
H.dx.prototype={
aw:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.aL(a)
if(!!t.$isfb)return["buffer",a]
if(!!t.$isep)return["typed",a]
if(!!t.$isaJ)return this.ep(a)
if(!!t.$iszG){r=this.gem()
q=t.ge_(a)
q=H.ds(q,r,H.aR(q,"o",0),null)
q=P.de(q,!0,H.aR(q,"o",0))
t=t.gbX(a)
t=H.ds(t,r,H.aR(t,"o",0),null)
return["map",q,P.de(t,!0,H.aR(t,"o",0))]}if(!!t.$ismv)return this.eq(a)
if(!!t.$isi)this.ef(a)
if(!!t.$isFk)this.bw(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfr)return this.er(a)
if(!!t.$ishX)return this.es(a)
if(!!t.$iseQ){p=a.$static_name
if(p==null)this.bw(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdC)return["capability",a.a]
if(!(a instanceof P.ac))this.ef(a)
return["dart",u.classIdExtractor(a),this.eo(u.classFieldsExtractor(a))]},
bw:function(a,b){throw H.l(new P.V((b==null?"Can't transmit:":b)+" "+H.C(a)))},
ef:function(a){return this.bw(a,null)},
ep:function(a){var t=this.en(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bw(a,"Can't serialize indexable: ")},
en:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.aw(a[s])
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
eo:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aw(a[t]))
return a},
eq:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bw(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.aw(a[t[r]])
if(r>=s.length)return H.x(s,r)
s[r]=q}return["js-object",t,s]},
es:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
er:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gca()]
return["raw sendport",a]}}
H.eF.prototype={
aU:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.l(P.dB("Bad serialized message: "+H.C(a)))
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
s=H.a(this.bk(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bk(r),[null])
case"mutable":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return this.bk(r)
case"const":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bk(r),[null])
s.fixed$length=Array
return s
case"map":return this.fX(a)
case"sendport":return this.fY(a)
case"raw sendport":if(1>=a.length)return H.x(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.fW(a)
case"function":if(1>=a.length)return H.x(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.x(a,1)
return new H.dC(a[1])
case"dart":s=a.length
if(1>=s)return H.x(a,1)
q=a[1]
if(2>=s)return H.x(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bk(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.l("couldn't deserialize: "+H.C(a))}},
bk:function(a){var t,s,r
t=J.bf(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.as(r)
if(!(s<r))break
t.i(a,s,this.aU(t.n(a,s)));++s}return a},
fX:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.x(a,1)
s=a[1]
if(2>=t)return H.x(a,2)
r=a[2]
q=P.mL()
this.b.push(q)
s=J.y3(J.uZ(s,this.gfV()))
for(t=J.bf(s),p=J.bf(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aU(p.n(r,o)))
return q},
fY:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.x(a,1)
s=a[1]
if(2>=t)return H.x(a,2)
r=a[2]
if(3>=t)return H.x(a,3)
q=a[3]
if(J.bb(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cA(q)
if(o==null)return
n=new H.fr(o,r)}else n=new H.hX(s,q,r)
this.b.push(n)
return n},
fW:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.x(a,1)
s=a[1]
if(2>=t)return H.x(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bf(s)
p=J.bf(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.as(n)
if(!(o<n))break
q[t.n(s,o)]=this.aU(p.n(r,o));++o}return q}}
H.kO.prototype={
gV:function(a){return this.gm(this)===0},
C:function(a){return P.wm(this)},
i:function(a,b,c){return H.yM()},
$isbl:1,
$asbl:null}
H.kP.prototype={
gm:function(a){return this.a},
a_:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.a_(0,b))return
return this.df(b)},
df:function(a){return this.b[a]},
a9:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.df(q))}}}
H.nQ.prototype={}
H.p7.prototype={
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
H.jt.prototype={
C:function(a){var t=this.b
if(t==null)return"NullError: "+H.C(this.a)
return"NullError: method not found: '"+H.C(t)+"' on null"}}
H.my.prototype={
C:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.C(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.C(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.C(this.a)+")"}}
H.p9.prototype={
C:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.fZ.prototype={
gaH:function(){return this.b}}
H.rz.prototype={
$1:function(a){if(!!J.aL(a).$iseb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.k4.prototype={
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
H.eQ.prototype={
C:function(a){return"Closure '"+H.nK(this).trim()+"'"},
ghO:function(){return this},
$D:null}
H.oP.prototype={}
H.ok.prototype={
C:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fG.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fG))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga6:function(a){var t,s
t=this.c
if(t==null)s=H.eq(this.a)
else s=typeof t!=="object"?J.dA(t):H.eq(t)
t=H.eq(this.b)
if(typeof s!=="number")return s.hR()
return(s^t)>>>0},
C:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.C(this.d)+"' of "+H.nJ(t)}}
H.kJ.prototype={
C:function(a){return this.a}}
H.nW.prototype={
C:function(a){return"RuntimeError: "+H.C(this.a)}}
H.dQ.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga6:function(a){return J.dA(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.dQ&&J.bb(this.a,b.a)}}
H.t.prototype={
gm:function(a){return this.a},
gV:function(a){return this.a===0},
ge_:function(a){return new H.mJ(this,[H.O(this,0)])},
gbX:function(a){return H.ds(this.ge_(this),new H.mx(this),H.O(this,0),H.O(this,1))},
a_:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.d9(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.d9(s,b)}else return this.hd(b)},
hd:function(a){var t=this.d
if(t==null)return!1
return this.bp(this.bB(t,this.bo(a)),a)>=0},
bJ:function(a,b){b.a9(0,new H.mw(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bh(t,b)
return s==null?null:s.gaV()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bh(r,b)
return s==null?null:s.gaV()}else return this.he(b)},
he:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bB(t,this.bo(a))
r=this.bp(s,a)
if(r<0)return
return s[r].gaV()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.cc()
this.b=t}this.d0(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cc()
this.c=s}this.d0(s,b,c)}else{r=this.d
if(r==null){r=this.cc()
this.d=r}q=this.bo(b)
p=this.bB(r,q)
if(p==null)this.cj(r,q,[this.cd(b,c)])
else{o=this.bp(p,b)
if(o>=0)p[o].saV(c)
else p.push(this.cd(b,c))}}},
an:function(a,b){if(typeof b==="string")return this.du(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.du(this.c,b)
else return this.hf(b)},
hf:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bB(t,this.bo(a))
r=this.bp(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dF(q)
return q.gaV()},
ba:function(a){if(this.a>0){this.f=null
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
if(s!==this.r)throw H.l(new P.bN(this))
t=t.c}},
d0:function(a,b,c){var t=this.bh(a,b)
if(t==null)this.cj(a,b,this.cd(b,c))
else t.saV(c)},
du:function(a,b){var t
if(a==null)return
t=this.bh(a,b)
if(t==null)return
this.dF(t)
this.dd(a,b)
return t.gaV()},
cd:function(a,b){var t,s
t=new H.mI(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dF:function(a){var t,s
t=a.gfp()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bo:function(a){return J.dA(a)&0x3ffffff},
bp:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bb(a[s].gdX(),b))return s
return-1},
C:function(a){return P.wm(this)},
bh:function(a,b){return a[b]},
bB:function(a,b){return a[b]},
cj:function(a,b,c){a[b]=c},
dd:function(a,b){delete a[b]},
d9:function(a,b){return this.bh(a,b)!=null},
cc:function(){var t=Object.create(null)
this.cj(t,"<non-identifier-key>",t)
this.dd(t,"<non-identifier-key>")
return t},
$iszG:1,
$isbl:1,
$asbl:null}
H.mx.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mw.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eJ(function(a,b){return{func:1,args:[a,b]}},this.a,"t")}}
H.mI.prototype={
gdX:function(){return this.a},
gaV:function(){return this.b},
gfp:function(){return this.d},
saV:function(a){return this.b=a}}
H.mJ.prototype={
gm:function(a){return this.a.a},
gV:function(a){return this.a.a===0},
gY:function(a){var t,s
t=this.a
s=new H.mK(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
ai:function(a,b){return this.a.a_(0,b)},
a9:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.l(new P.bN(t))
s=s.c}}}
H.mK.prototype={
gR:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bN(t))
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
H.hh.prototype={
C:function(a){return"RegExp/"+this.a+"/"},
gdn:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.tI(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdm:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.tI(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cn:function(a,b,c){if(c>b.length)throw H.l(P.bD(c,0,b.length,null,null))
return new H.pF(this,b,c)},
aT:function(a,b){return this.cn(a,b,0)},
f4:function(a,b){var t,s
t=this.gdn()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.k2(this,s)},
c8:function(a,b){var t,s
t=this.gdm()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.x(s,-1)
if(s.pop()!=null)return
return new H.k2(this,s)},
e3:function(a,b,c){if(c<0||c>b.length)throw H.l(P.bD(c,0,b.length,null,null))
return this.c8(b,c)},
$isFm:1,
gfk:function(){return this.b}}
H.k2.prototype={
gcV:function(a){return this.b.index},
gdO:function(a){var t=this.b
return t.index+t[0].length},
b8:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.x(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
$isdt:1}
H.pF.prototype={
gY:function(a){return new H.jT(this.a,this.b,this.c,null)},
$ashg:function(){return[P.dt]},
$aso:function(){return[P.dt]}}
H.jT.prototype={
gR:function(){return this.d},
I:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.f4(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jJ.prototype={
gdO:function(a){return this.a+this.c.length},
n:function(a,b){return this.b8(b)},
b8:function(a){if(a!==0)throw H.l(P.jB(a,null,null))
return this.c},
$isdt:1,
gcV:function(a){return this.a}}
H.qI.prototype={
gY:function(a){return new H.qJ(this.a,this.b,this.c,null)},
$aso:function(){return[P.dt]}}
H.qJ.prototype={
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
this.d=new H.jJ(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gR:function(){return this.d}}
H.fb.prototype={
gaa:function(a){return C.a0},
fJ:function(a,b,c){return H.cN(a,b,c)},
fI:function(a){return this.fJ(a,0,null)},
fH:function(a,b,c){var t
H.xf(a,b,c)
t=new DataView(a,b)
return t},
fG:function(a,b){return this.fH(a,b,null)},
$isfb:1,
$isbg:1,
ge1:function(a){return a.byteLength}}
H.ep.prototype={
fh:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dV(b,d,"Invalid list position"))
else throw H.l(P.bD(b,0,c,d,null))},
d4:function(a,b,c,d){if(b>>>0!==b||b>c)this.fh(a,b,c,d)},
$isep:1,
gbM:function(a){return a.buffer},
ge1:function(a){return a.byteLength}}
H.na.prototype={
gaa:function(a){return C.a1}}
H.jq.prototype={
gm:function(a){return a.length},
dB:function(a,b,c,d,e){var t,s,r
t=a.length
this.d4(a,b,t,"start")
this.d4(a,c,t,"end")
if(typeof b!=="number")return b.aB()
if(typeof c!=="number")return H.as(c)
if(b>c)throw H.l(P.bD(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a4()
if(e<0)throw H.l(P.dB(e))
r=d.length
if(r-e<s)throw H.l(new P.dN("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaQ:1,
$asaQ:function(){},
$isaJ:1,
$asaJ:function(){}}
H.ht.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
a[b]=c},
a8:function(a,b,c,d,e){if(!!J.aL(d).$isht){this.dB(a,b,c,d,e)
return}this.cX(a,b,c,d,e)},
ax:function(a,b,c,d){return this.a8(a,b,c,d,0)}}
H.hv.prototype={
$asaQ:function(){},
$asaJ:function(){},
$asq:function(){return[P.U]},
$asv:function(){return[P.U]},
$aso:function(){return[P.U]},
$isq:1,
$isv:1,
$iso:1}
H.hx.prototype={
$asaQ:function(){},
$asaJ:function(){},
$asq:function(){return[P.U]},
$asv:function(){return[P.U]},
$aso:function(){return[P.U]}}
H.hu.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
a[b]=c},
a8:function(a,b,c,d,e){if(!!J.aL(d).$ishu){this.dB(a,b,c,d,e)
return}this.cX(a,b,c,d,e)},
ax:function(a,b,c,d){return this.a8(a,b,c,d,0)},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.hw.prototype={
$asaQ:function(){},
$asaJ:function(){},
$asq:function(){return[P.D]},
$asv:function(){return[P.D]},
$aso:function(){return[P.D]},
$isq:1,
$isv:1,
$iso:1}
H.hy.prototype={
$asaQ:function(){},
$asaJ:function(){},
$asq:function(){return[P.D]},
$asv:function(){return[P.D]},
$aso:function(){return[P.D]}}
H.nb.prototype={
gaa:function(a){return C.a2},
$isq:1,
$asq:function(){return[P.U]},
$isv:1,
$asv:function(){return[P.U]},
$iso:1,
$aso:function(){return[P.U]}}
H.nc.prototype={
gaa:function(a){return C.a3},
$isq:1,
$asq:function(){return[P.U]},
$isv:1,
$asv:function(){return[P.U]},
$iso:1,
$aso:function(){return[P.U]}}
H.nd.prototype={
gaa:function(a){return C.a4},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.ne.prototype={
gaa:function(a){return C.a5},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.nf.prototype={
gaa:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.ng.prototype={
gaa:function(a){return C.aa},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.nh.prototype={
gaa:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.jr.prototype={
gaa:function(a){return C.ac},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.fc.prototype={
gaa:function(a){return C.ad},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.ba(H.c2(a,b))
return a[b]},
c_:function(a,b,c){return new Uint8Array(a.subarray(b,H.Gq(b,c,a.length)))},
$isfc:1,
$isd6:1,
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
P.pH.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pG.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.pI.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.pJ.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qX.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qY.prototype={
$2:function(a,b){this.a.$2(1,new H.fZ(a,b))},
$S:function(){return{func:1,args:[,P.dM]}}}
P.r7.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.D,,]}}}
P.cC.prototype={}
P.r8.prototype={
$0:function(){var t,s,r
try{this.b.aD(this.a.$0())}catch(r){t=H.ct(r)
s=H.cs(r)
P.xg(this.b,t,s)}},
$S:function(){return{func:1}}}
P.lS.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.al(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.al(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.lR.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.x(r,t)
r[t]=a
if(s===0)this.d.d8(r)}else if(t.b===0&&!this.b)this.d.al(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eR.prototype={}
P.jV.prototype={
cr:function(a,b){if(a==null)a=new P.fd()
if(this.a.a!==0)throw H.l(new P.dN("Future already completed"))
$.aB.toString
this.al(a,b)},
bj:function(a){return this.cr(a,null)},
$iseR:1,
gh4:function(){return this.a}}
P.dS.prototype={
az:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dN("Future already completed"))
t.d2(b)},
fM:function(a){return this.az(a,null)},
al:function(a,b){this.a.d3(a,b)}}
P.k6.prototype={
az:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dN("Future already completed"))
t.aD(b)},
al:function(a,b){this.a.al(a,b)}}
P.jZ.prototype={
gfC:function(){return this.b.b},
gdT:function(){return(this.c&1)!==0},
ghb:function(){return(this.c&2)!==0},
gdS:function(){return this.c===8},
h9:function(a){return this.b.b.cK(this.d,a)},
hj:function(a){if(this.c!==6)return!0
return this.b.b.cK(this.d,J.fy(a))},
h5:function(a){var t,s,r
t=this.e
s=J.bI(a)
r=this.b.b
if(H.fw(t,{func:1,args:[,,]}))return r.hF(t,s.gaq(a),a.gaH())
else return r.cK(t,s.gaq(a))},
ha:function(){return this.b.b.ea(this.d)},
gce:function(){return this.a}}
P.bi.prototype={
gfi:function(){return this.a===2},
gcb:function(){return this.a>=4},
bV:function(a,b){var t=$.aB
if(t!==C.e){t.toString
if(b!=null)b=P.xj(b,t)}return this.ck(a,b)},
aZ:function(a){return this.bV(a,null)},
ck:function(a,b){var t,s
t=new P.bi(0,$.aB,null,[null])
s=b==null?1:3
this.c0(new P.jZ(null,t,s,a,b,[H.O(this,0),null]))
return t},
bY:function(a){var t,s
t=$.aB
s=new P.bi(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.O(this,0)
this.c0(new P.jZ(null,s,8,a,null,[t,t]))
return s},
c0:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcb()){s.c0(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fu(null,null,t,new P.q2(this,a))}},
dt:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gce()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcb()){p.dt(a)
return}this.a=p.a
this.c=p.c}t.a=this.bG(a)
s=this.b
s.toString
P.fu(null,null,s,new P.qa(t,this))}},
bF:function(){var t=this.c
this.c=null
return this.bG(t)},
bG:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gce()
t.a=s}return s},
aD:function(a){var t,s
t=this.$ti
if(H.dT(a,"$iscC",t,"$ascC"))if(H.dT(a,"$isbi",t,null))P.q5(a,this)
else P.x5(a,this)
else{s=this.bF()
this.a=4
this.c=a
P.fp(this,s)}},
d8:function(a){var t=this.bF()
this.a=4
this.c=a
P.fp(this,t)},
al:function(a,b){var t=this.bF()
this.a=8
this.c=new P.eM(a,b)
P.fp(this,t)},
eY:function(a){return this.al(a,null)},
d2:function(a){var t
if(H.dT(a,"$iscC",this.$ti,"$ascC")){this.eV(a)
return}this.a=1
t=this.b
t.toString
P.fu(null,null,t,new P.q4(this,a))},
eV:function(a){var t
if(H.dT(a,"$isbi",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fu(null,null,t,new P.q9(this,a))}else P.q5(a,this)
return}P.x5(a,this)},
d3:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fu(null,null,t,new P.q3(this,a,b))},
$iscC:1,
gbH:function(){return this.a},
gft:function(){return this.c}}
P.q2.prototype={
$0:function(){P.fp(this.a,this.b)},
$S:function(){return{func:1}}}
P.qa.prototype={
$0:function(){P.fp(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.q6.prototype={
$1:function(a){var t=this.a
t.a=0
t.aD(a)},
$S:function(){return{func:1,args:[,]}}}
P.q7.prototype={
$2:function(a,b){this.a.al(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.q8.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.q4.prototype={
$0:function(){this.a.d8(this.b)},
$S:function(){return{func:1}}}
P.q9.prototype={
$0:function(){P.q5(this.b,this.a)},
$S:function(){return{func:1}}}
P.q3.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.qd.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.ha()}catch(q){s=H.ct(q)
r=H.cs(q)
if(this.c){p=J.fy(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eM(s,r)
o.a=!0
return}if(!!J.aL(t).$iscC){if(t instanceof P.bi&&t.gbH()>=4){if(t.gbH()===8){p=this.b
p.b=t.gft()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.aZ(new P.qe(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qe.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qc.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.h9(this.c)}catch(r){t=H.ct(r)
s=H.cs(r)
q=this.a
q.b=new P.eM(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qb.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hj(t)===!0&&q.e!=null){p=this.b
p.b=q.h5(t)
p.a=!1}}catch(o){s=H.ct(o)
r=H.cs(o)
q=this.a
p=J.fy(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eM(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.jU.prototype={}
P.dg.prototype={
av:function(a,b){return new P.qr(b,this,[H.aR(this,"dg",0),null])},
ai:function(a,b){var t,s
t={}
s=new P.bi(0,$.aB,null,[P.d7])
t.a=null
t.a=this.aM(new P.or(t,this,b,s),!0,new P.os(s),s.gb9())
return s},
a9:function(a,b){var t,s
t={}
s=new P.bi(0,$.aB,null,[null])
t.a=null
t.a=this.aM(new P.ox(t,this,b,s),!0,new P.oy(s),s.gb9())
return s},
gm:function(a){var t,s
t={}
s=new P.bi(0,$.aB,null,[P.D])
t.a=0
this.aM(new P.oB(t),!0,new P.oC(t,s),s.gb9())
return s},
gV:function(a){var t,s
t={}
s=new P.bi(0,$.aB,null,[P.d7])
t.a=null
t.a=this.aM(new P.oz(t,s),!0,new P.oA(s),s.gb9())
return s},
ao:function(a){var t,s,r
t=H.aR(this,"dg",0)
s=H.a([],[t])
r=new P.bi(0,$.aB,null,[[P.q,t]])
this.aM(new P.oD(this,s),!0,new P.oE(s,r),r.gb9())
return r},
gad:function(a){var t,s
t={}
s=new P.bi(0,$.aB,null,[H.aR(this,"dg",0)])
t.a=null
t.a=this.aM(new P.ot(t,this,s),!0,new P.ou(s),s.gb9())
return s}}
P.or.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xn(new P.op(this.c,a),new P.oq(t,s),P.xe(t.a,s))},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.b,"dg")}}
P.op.prototype={
$0:function(){return J.bb(this.b,this.a)},
$S:function(){return{func:1}}}
P.oq.prototype={
$1:function(a){if(a===!0)P.uI(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.d7]}}}
P.os.prototype={
$0:function(){this.a.aD(!1)},
$S:function(){return{func:1}}}
P.ox.prototype={
$1:function(a){P.xn(new P.ov(this.c,a),new P.ow(),P.xe(this.a.a,this.d))},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.b,"dg")}}
P.ov.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.ow.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oy.prototype={
$0:function(){this.a.aD(null)},
$S:function(){return{func:1}}}
P.oB.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oC.prototype={
$0:function(){this.b.aD(this.a.a)},
$S:function(){return{func:1}}}
P.oz.prototype={
$1:function(a){P.uI(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oA.prototype={
$0:function(){this.a.aD(!0)},
$S:function(){return{func:1}}}
P.oD.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.a,"dg")}}
P.oE.prototype={
$0:function(){this.b.aD(this.a)},
$S:function(){return{func:1}}}
P.ot.prototype={
$1:function(a){P.uI(this.a.a,this.c,a)},
$S:function(){return H.eJ(function(a){return{func:1,args:[a]}},this.b,"dg")}}
P.ou.prototype={
$0:function(){var t,s,r,q
try{r=H.ji()
throw H.l(r)}catch(q){t=H.ct(q)
s=H.cs(q)
P.xg(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oo.prototype={}
P.dh.prototype={
cD:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dJ()
if((t&4)===0&&(this.e&32)===0)this.dh(this.gdr())},
e6:function(a){return this.cD(a,null)},
e9:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gV(t)}else t=!1
if(t)this.r.bZ(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dh(this.gds())}}}},
bN:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.c2()
t=this.f
return t==null?$.$get$h8():t},
c2:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dJ()
if((this.e&32)===0)this.r=null
this.f=this.dq()},
bA:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dw(b)
else this.c1(new P.pR(b,null,[H.aR(this,"dh",0)]))},
bz:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dA(a,b)
else this.c1(new P.pT(a,b,null))},
eU:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dz()
else this.c1(C.J)},
bD:function(){},
bE:function(){},
dq:function(){return},
c1:function(a){var t,s
t=this.r
if(t==null){t=new P.qG(null,null,0,[H.aR(this,"dh",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.bZ(this)}},
dw:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cL(this.a,a)
this.e=(this.e&4294967263)>>>0
this.c3((t&4)!==0)},
dA:function(a,b){var t,s
t=this.e
s=new P.pM(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.c2()
t=this.f
if(!!J.aL(t).$iscC&&t!==$.$get$h8())t.bY(s)
else s.$0()}else{s.$0()
this.c3((t&4)!==0)}},
dz:function(){var t,s
t=new P.pL(this)
this.c2()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aL(s).$iscC&&s!==$.$get$h8())s.bY(t)
else t.$0()},
dh:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.c3((t&4)!==0)},
c3:function(a){var t,s
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
if(s)this.bD()
else this.bE()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.bZ(this)},
eN:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xj(b,t)
this.c=c},
gbH:function(){return this.e}}
P.pM.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fw(s,{func:1,args:[P.ac,P.dM]})
q=t.d
p=this.b
o=t.b
if(r)q.hG(o,p,this.c)
else q.cL(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.pL.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eb(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.jX.prototype={
gbq:function(a){return this.a},
sbq:function(a,b){return this.a=b}}
P.pR.prototype={
cE:function(a){a.dw(this.b)}}
P.pT.prototype={
cE:function(a){a.dA(this.b,this.c)},
$asjX:function(){},
gaq:function(a){return this.b},
gaH:function(){return this.c}}
P.pS.prototype={
cE:function(a){a.dz()},
gbq:function(a){return},
sbq:function(a,b){throw H.l(new P.dN("No events after a done."))}}
P.qt.prototype={
bZ:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xE(new P.qu(this,a))
this.a=1},
dJ:function(){if(this.a===1)this.a=3},
gbH:function(){return this.a}}
P.qu.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbq(r)
t.b=q
if(q==null)t.c=null
r.cE(this.b)},
$S:function(){return{func:1}}}
P.qG.prototype={
gV:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbq(0,b)
this.c=b}}}
P.qH.prototype={}
P.r_.prototype={
$0:function(){return this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.qZ.prototype={
$2:function(a,b){P.Gp(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dM]}}}
P.r0.prototype={
$0:function(){return this.a.aD(this.b)},
$S:function(){return{func:1}}}
P.hR.prototype={
aM:function(a,b,c,d){return this.f0(a,d,c,!0===b)},
e2:function(a,b,c){return this.aM(a,null,b,c)},
f0:function(a,b,c,d){return P.G4(this,a,b,c,d,H.aR(this,"hR",0),H.aR(this,"hR",1))},
di:function(a,b){b.bA(0,a)},
ff:function(a,b,c){c.bz(a,b)},
$asdg:function(a,b){return[b]}}
P.hS.prototype={
bA:function(a,b){if((this.e&2)!==0)return
this.eD(0,b)},
bz:function(a,b){if((this.e&2)!==0)return
this.eE(a,b)},
bD:function(){var t=this.y
if(t==null)return
t.e6(0)},
bE:function(){var t=this.y
if(t==null)return
t.e9(0)},
dq:function(){var t=this.y
if(t!=null){this.y=null
return t.bN(0)}return},
fa:function(a){this.x.di(a,this)},
fe:function(a,b){this.x.ff(a,b,this)},
fc:function(){this.eU()},
eQ:function(a,b,c,d,e,f,g){this.y=this.x.a.e2(this.gf9(),this.gfb(),this.gfd())},
$asdh:function(a,b){return[b]}}
P.qr.prototype={
di:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.ct(q)
r=H.cs(q)
P.Go(b,s,r)
return}b.bA(0,t)}}
P.eM.prototype={
C:function(a){return H.C(this.a)},
$iseb:1,
gaq:function(a){return this.a},
gaH:function(){return this.b}}
P.qW.prototype={}
P.r6.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fd()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.l(t)
r=H.l(t)
r.stack=J.cJ(s)
throw r},
$S:function(){return{func:1}}}
P.qx.prototype={
eb:function(a){var t,s,r,q
try{if(C.e===$.aB){r=a.$0()
return r}r=P.xk(null,null,this,a)
return r}catch(q){t=H.ct(q)
s=H.cs(q)
r=P.k9(null,null,this,t,s)
return r}},
cL:function(a,b){var t,s,r,q
try{if(C.e===$.aB){r=a.$1(b)
return r}r=P.xm(null,null,this,a,b)
return r}catch(q){t=H.ct(q)
s=H.cs(q)
r=P.k9(null,null,this,t,s)
return r}},
hG:function(a,b,c){var t,s,r,q
try{if(C.e===$.aB){r=a.$2(b,c)
return r}r=P.xl(null,null,this,a,b,c)
return r}catch(q){t=H.ct(q)
s=H.cs(q)
r=P.k9(null,null,this,t,s)
return r}},
cp:function(a,b){if(b)return new P.qy(this,a)
else return new P.qz(this,a)},
fK:function(a,b){return new P.qA(this,a)},
n:function(a,b){return},
ea:function(a){if($.aB===C.e)return a.$0()
return P.xk(null,null,this,a)},
cK:function(a,b){if($.aB===C.e)return a.$1(b)
return P.xm(null,null,this,a,b)},
hF:function(a,b,c){if($.aB===C.e)return a.$2(b,c)
return P.xl(null,null,this,a,b,c)}}
P.qy.prototype={
$0:function(){return this.a.eb(this.b)},
$S:function(){return{func:1}}}
P.qz.prototype={
$0:function(){return this.a.ea(this.b)},
$S:function(){return{func:1}}}
P.qA.prototype={
$1:function(a){return this.a.cL(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qg.prototype={
gm:function(a){return this.a},
gV:function(a){return this.a===0},
gbX:function(a){var t=H.O(this,0)
return H.ds(new P.qh(this,[t]),new P.qj(this),t,H.O(this,1))},
a_:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.f_(b)},
f_:function(a){var t=this.d
if(t==null)return!1
return this.aL(t[this.aK(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.f7(0,b)},
f7:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aK(b)]
r=this.aL(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.uG()
this.b=t}this.d6(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.uG()
this.c=s}this.d6(s,b,c)}else this.fu(b,c)},
fu:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.uG()
this.d=t}s=this.aK(a)
r=t[s]
if(r==null){P.uH(t,s,[a,b]);++this.a
this.e=null}else{q=this.aL(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bf(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bf(this.c,b)
else return this.ci(0,b)},
ci:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aK(b)]
r=this.aL(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a9:function(a,b){var t,s,r,q
t=this.c5()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.l(new P.bN(this))}},
c5:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
d6:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uH(a,b,c)},
bf:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.G6(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aK:function(a){return J.dA(a)&0x3ffffff},
aL:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.bb(a[s],b))return s
return-1},
$isbl:1,
$asbl:null}
P.qj.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qh.prototype={
gm:function(a){return this.a.a},
gV:function(a){return this.a.a===0},
gY:function(a){var t=this.a
return new P.qi(t,t.c5(),0,null,this.$ti)},
ai:function(a,b){return this.a.a_(0,b)},
a9:function(a,b){var t,s,r,q
t=this.a
s=t.c5()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.l(new P.bN(t))}}}
P.qi.prototype={
gR:function(){return this.d},
I:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.l(new P.bN(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.k1.prototype={
bo:function(a){return H.H9(a)&0x3ffffff},
bp:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gdX()
if(r==null?b==null:r===b)return s}return-1}}
P.k0.prototype={
gY:function(a){var t=new P.dw(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gV:function(a){return this.a===0},
ai:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.eZ(b)},
eZ:function(a){var t=this.d
if(t==null)return!1
return this.aL(t[this.aK(a)],a)>=0},
cA:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ai(0,a)?a:null
else return this.fj(a)},
fj:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aK(a)]
r=this.aL(s,a)
if(r<0)return
return J.i0(s,r).gde()},
a9:function(a,b){var t,s
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
t=s}return this.d5(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.d5(r,b)}else return this.aJ(0,b)},
aJ:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.G7()
this.d=t}s=this.aK(b)
r=t[s]
if(r==null)t[s]=[this.c4(b)]
else{if(this.aL(r,b)>=0)return!1
r.push(this.c4(b))}return!0},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bf(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bf(this.c,b)
else return this.ci(0,b)},
ci:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aK(b)]
r=this.aL(s,b)
if(r<0)return!1
this.d7(s.splice(r,1)[0])
return!0},
ba:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
d5:function(a,b){if(a[b]!=null)return!1
a[b]=this.c4(b)
return!0},
bf:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.d7(t)
delete a[b]
return!0},
c4:function(a){var t,s
t=new P.qn(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
d7:function(a){var t,s
t=a.geX()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aK:function(a){return J.dA(a)&0x3ffffff},
aL:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bb(a[s].gde(),b))return s
return-1},
$isev:1,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
P.qn.prototype={
gde:function(){return this.a},
geX:function(){return this.c}}
P.dw.prototype={
gR:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bN(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qk.prototype={}
P.f8.prototype={
av:function(a,b){return H.ds(this,b,H.aR(this,"f8",0),null)},
ai:function(a,b){var t
for(t=this.gY(this);t.I();)if(J.bb(t.gR(),b))return!0
return!1},
a9:function(a,b){var t
for(t=this.gY(this);t.I();)b.$1(t.gR())},
a3:function(a,b){return P.de(this,!0,H.aR(this,"f8",0))},
ao:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gY(this)
for(s=0;t.I();)++s
return s},
gV:function(a){return!this.gY(this).I()},
C:function(a){return P.tE(this,"(",")")},
$iso:1,
$aso:null}
P.hg.prototype={}
P.jm.prototype={}
P.hz.prototype={$asq:null,$asv:null,$aso:null,$isq:1,$isv:1,$iso:1}
P.b3.prototype={
gY:function(a){return new H.en(a,this.gm(a),0,null,[H.aR(a,"b3",0)])},
T:function(a,b){return this.n(a,b)},
a9:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.l(new P.bN(a))}},
gV:function(a){return this.gm(a)===0},
ai:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.bb(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.l(new P.bN(a))}return!1},
av:function(a,b){return new H.fa(a,b,[H.aR(a,"b3",0),null])},
cT:function(a,b){return H.wH(a,b,null,H.aR(a,"b3",0))},
a3:function(a,b){var t,s,r
t=H.a([],[H.aR(a,"b3",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.x(t,s)
t[s]=r}return t},
ao:function(a){return this.a3(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bP:function(a,b,c,d){var t
P.df(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a8:function(a,b,c,d,e){var t,s,r,q,p,o
P.df(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.ak()
if(typeof b!=="number")return H.as(b)
t=c-b
if(t===0)return
if(J.e7(e,0))H.ba(P.bD(e,0,null,"skipCount",null))
if(H.dT(d,"$isq",[H.aR(a,"b3",0)],"$asq")){s=e
r=d}else{r=J.y1(d,e).a3(0,!1)
s=0}q=J.kb(s)
p=J.bf(r)
if(J.cu(q.U(s,t),p.gm(r)))throw H.l(H.wf())
if(q.a4(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.U(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.U(s,o)))},
ax:function(a,b,c,d){return this.a8(a,b,c,d,0)},
aA:function(a,b,c,d){var t,s,r,q,p
P.df(b,c,this.gm(a),null,null,null)
d=C.c.ao(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.ax(a,b,r,d)
if(q!==0){this.a8(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a8(a,r,p,a,c)
this.ax(a,b,r,d)}},
aX:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.bb(this.n(a,t),b))return t
return-1},
bc:function(a,b){return this.aX(a,b,0)},
C:function(a){return P.jh(a,"[","]")},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
P.qO.prototype={
i:function(a,b,c){throw H.l(new P.V("Cannot modify unmodifiable map"))},
$isbl:1,
$asbl:null}
P.mZ.prototype={
n:function(a,b){return J.i0(this.a,b)},
i:function(a,b,c){J.kg(this.a,b,c)},
a9:function(a,b){J.xS(this.a,b)},
gV:function(a){return J.rA(this.a)},
gm:function(a){return J.ck(this.a)},
C:function(a){return J.cJ(this.a)},
$isbl:1,
$asbl:null}
P.hK.prototype={$asbl:null,$isbl:1}
P.n_.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.N+=", "
t.a=!1
t=this.b
s=t.N+=H.C(a)
t.N=s+": "
t.N+=H.C(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mM.prototype={
gY:function(a){return new P.qo(this,this.c,this.d,this.b,null,this.$ti)},
a9:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.x(r,s)
b.$1(r[s])
if(t!==this.d)H.ba(new P.bN(this))}},
gV:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
T:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.as(b)
if(0>b||b>=t)H.ba(P.bt(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.x(s,q)
return s[q]},
a3:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fB(t)
return t},
ao:function(a){return this.a3(a,!0)},
h:function(a,b){this.aJ(0,b)},
ba:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.x(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
C:function(a){return P.jh(this,"{","}")},
e8:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.l(H.ji());++this.d
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
if(this.b===r)this.dg();++this.d},
dg:function(){var t,s,r,q
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
fB:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a8(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a8(a,0,p,r,t)
C.b.a8(a,p,p+this.c,this.a,0)
return this.c+p}},
eI:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asv:null,
$aso:null}
P.qo.prototype={
gR:function(){return this.e},
I:function(){var t,s,r
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
P.o7.prototype={
gV:function(a){return this.a===0},
bJ:function(a,b){var t
for(t=J.d9(b);t.I();)this.h(0,t.gR())},
a3:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dw(this,this.r,null,null,[null]),s.c=this.e,r=0;s.I();r=p){q=s.d
p=r+1
if(r>=t.length)return H.x(t,r)
t[r]=q}return t},
ao:function(a){return this.a3(a,!0)},
av:function(a,b){return new H.fR(this,b,[H.O(this,0),null])},
C:function(a){return P.jh(this,"{","}")},
a9:function(a,b){var t
for(t=new P.dw(this,this.r,null,null,[null]),t.c=this.e;t.I();)b.$1(t.d)},
bd:function(a,b){var t,s
t=new P.dw(this,this.r,null,null,[null])
t.c=this.e
if(!t.I())return""
if(b===""){s=""
do s+=H.C(t.d)
while(t.I())}else{s=H.C(t.d)
for(;t.I();)s=s+b+H.C(t.d)}return s.charCodeAt(0)==0?s:s},
$isev:1,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
P.o6.prototype={}
P.kx.prototype={
hn:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bf(b)
a1=P.df(a0,a1,t.gm(b),null,null,null)
s=$.$get$x4()
if(typeof a1!=="number")return H.as(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.Z(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rg(C.c.a5(b,l))
h=H.rg(C.c.a5(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.x(s,g)
f=s[g]
if(f>=0){g=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.N.length
if(e==null)e=0
if(typeof e!=="number")return e.U()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.c9("")
p.N+=C.c.L(b,q,r)
p.N+=H.hA(k)
q=l
continue}}throw H.l(new P.bK("Invalid base64 data",b,r))}if(p!=null){t=p.N+=t.L(b,q,a1)
e=t.length
if(o>=0)P.v4(b,n,a1,o,m,e)
else{d=C.a.by(e-1,4)+1
if(d===1)throw H.l(new P.bK("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.N=t;++d}}t=p.N
return C.c.aA(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.v4(b,n,a1,o,m,c)
else{d=C.d.by(c,4)
if(d===1)throw H.l(new P.bK("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aA(b,a1,a1,d===2?"==":"=")}return b},
$asfL:function(){return[[P.q,P.D],P.B]}}
P.ky.prototype={
$asfN:function(){return[[P.q,P.D],P.B]}}
P.fL.prototype={}
P.fN.prototype={}
P.lb.prototype={
$asfL:function(){return[P.B,[P.q,P.D]]}}
P.pi.prototype={
gK:function(a){return"utf-8"}}
P.pj.prototype={
cs:function(a,b,c){var t,s,r,q
t=J.ck(a)
P.df(b,c,t,null,null,null)
s=new P.c9("")
r=new P.qQ(!1,s,!0,0,0,0)
r.cs(a,b,t)
r.h0(0,a,t)
q=s.N
return q.charCodeAt(0)==0?q:q},
fP:function(a){return this.cs(a,0,null)},
$asfN:function(){return[[P.q,P.D],P.B]}}
P.qQ.prototype={
h0:function(a,b,c){if(this.e>0)throw H.l(new P.bK("Unfinished UTF-8 octet sequence",b,c))},
cs:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.qS(c)
p=new P.qR(this,a,b,c)
$loop$0:for(o=J.bf(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aG()
if((l&192)!==128){k=new P.bK("Bad UTF-8 encoding 0x"+C.d.bu(l,16),a,m)
throw H.l(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.x(C.w,k)
if(t<=C.w[k]){k=new P.bK("Overlong encoding of 0x"+C.a.bu(t,16),a,m-r-1)
throw H.l(k)}if(t>1114111){k=new P.bK("Character outside valid Unicode range: 0x"+C.a.bu(t,16),a,m-r-1)
throw H.l(k)}if(!this.c||t!==65279)n.N+=H.hA(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cu(j,0)){this.c=!1
if(typeof j!=="number")return H.as(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dy(l)
if(g.a4(l,0)){g=new P.bK("Negative UTF-8 code unit: -0x"+J.y4(g.cP(l),16),a,h-1)
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
continue $loop$0}g=new P.bK("Bad UTF-8 encoding 0x"+C.d.bu(l,16),a,h-1)
throw H.l(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.qS.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bf(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aG()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.D,args:[,P.D]}}}
P.qR.prototype={
$2:function(a,b){this.a.b.N+=P.oJ(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.D,P.D]}}}
P.d7.prototype={}
P.bE.prototype={}
P.dY.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dY))return!1
return this.a===b.a&&this.b===b.b},
ay:function(a,b){return C.a.ay(this.a,b.gfA())},
ga6:function(a){var t=this.a
return(t^C.a.aS(t,30))&1073741823},
C:function(a){var t,s,r,q,p,o,n
t=P.yP(H.wt(this))
s=P.i8(H.uc(this))
r=P.i8(H.ub(this))
q=P.i8(H.F1(this))
p=P.i8(H.F3(this))
o=P.i8(H.F4(this))
n=P.yQ(H.F2(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.yO(C.a.U(this.a,b.ghU()),this.b)},
ghk:function(){return this.a},
cZ:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.l(P.dB(this.ghk()))},
$isbE:1,
$asbE:function(){return[P.dY]},
gfA:function(){return this.a}}
P.U.prototype={$isbE:1,
$asbE:function(){return[P.dk]}}
P.dE.prototype={
U:function(a,b){return new P.dE(this.a+b.gbg())},
ar:function(a,b){return new P.dE(C.a.b7(this.a*b))},
a4:function(a,b){return C.a.a4(this.a,b.gbg())},
aB:function(a,b){return C.a.aB(this.a,b.gbg())},
as:function(a,b){return C.a.as(this.a,b.gbg())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dE))return!1
return this.a===b.a},
ga6:function(a){return this.a&0x1FFFFFFF},
ay:function(a,b){return C.a.ay(this.a,b.gbg())},
C:function(a){var t,s,r,q,p
t=new P.l9()
s=this.a
if(s<0)return"-"+new P.dE(0-s).C(0)
r=t.$1(C.a.am(s,6e7)%60)
q=t.$1(C.a.am(s,1e6)%60)
p=new P.l8().$1(s%1e6)
return""+C.a.am(s,36e8)+":"+H.C(r)+":"+H.C(q)+"."+H.C(p)},
cP:function(a){return new P.dE(0-this.a)},
$isbE:1,
$asbE:function(){return[P.dE]},
gbg:function(){return this.a}}
P.l8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.B,args:[P.D]}}}
P.l9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.B,args:[P.D]}}}
P.eb.prototype={
gaH:function(){return H.cs(this.$thrownJsError)}}
P.fd.prototype={
C:function(a){return"Throw of null."}}
P.cX.prototype={
gc7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc6:function(){return""},
C:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.C(t)
q=this.gc7()+s+r
if(!this.a)return q
p=this.gc6()
o=P.vl(this.b)
return q+p+": "+H.C(o)},
gK:function(a){return this.c}}
P.eu.prototype={
gc7:function(){return"RangeError"},
gc6:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.C(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.C(t)
else{if(typeof r!=="number")return r.aB()
if(r>t)s=": Not in range "+H.C(t)+".."+H.C(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.C(t)}}return s}}
P.mb.prototype={
gc7:function(){return"RangeError"},
gc6:function(){if(J.e7(this.b,0))return": index must not be negative"
var t=this.f
if(J.bb(t,0))return": no indices are valid"
return": index should be less than "+H.C(t)},
gm:function(a){return this.f}}
P.V.prototype={
C:function(a){return"Unsupported operation: "+this.a}}
P.eA.prototype={
C:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.C(t):"UnimplementedError"}}
P.dN.prototype={
C:function(a){return"Bad state: "+this.a}}
P.bN.prototype={
C:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.C(P.vl(t))+"."}}
P.nq.prototype={
C:function(a){return"Out of Memory"},
gaH:function(){return},
$iseb:1}
P.jI.prototype={
C:function(a){return"Stack Overflow"},
gaH:function(){return},
$iseb:1}
P.l0.prototype={
C:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.C(t)+"' during its initialization"}}
P.q1.prototype={
C:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.C(t)}}
P.bK.prototype={
C:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.C(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a4()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.L(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.as(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a5(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.C(r-o+1)+")\n"):s+(" (at character "+H.C(r+1)+")\n")
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
g=""}f=C.c.L(q,i,j)
return s+h+f+g+"\n"+C.c.ar(" ",r-i+h.length)+"^\n"}}
P.li.prototype={
C:function(a){return"Expando:"+H.C(this.a)},
n:function(a,b){var t,s
t=this.bC
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.ba(P.dV(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ud(b,"expando$values")
return s==null?null:H.ud(s,t)},
i:function(a,b,c){var t,s
t=this.bC
if(typeof t!=="string")t.set(b,c)
else{s=H.ud(b,"expando$values")
if(s==null){s=new P.ac()
H.wx(b,"expando$values",s)}H.wx(s,t,c)}},
gK:function(a){return this.a}}
P.D.prototype={$isbE:1,
$asbE:function(){return[P.dk]}}
P.o.prototype={
av:function(a,b){return H.ds(this,b,H.aR(this,"o",0),null)},
ai:function(a,b){var t
for(t=this.gY(this);t.I();)if(J.bb(t.gR(),b))return!0
return!1},
a9:function(a,b){var t
for(t=this.gY(this);t.I();)b.$1(t.gR())},
a3:function(a,b){return P.de(this,!0,H.aR(this,"o",0))},
ao:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gY(this)
for(s=0;t.I();)++s
return s},
gV:function(a){return!this.gY(this).I()},
T:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.y7("index"))
if(b<0)H.ba(P.bD(b,0,null,"index",null))
for(t=this.gY(this),s=0;t.I();){r=t.gR()
if(b===s)return r;++s}throw H.l(P.bt(b,this,"index",null,s))},
C:function(a){return P.tE(this,"(",")")},
$aso:null}
P.jj.prototype={}
P.q.prototype={$asq:null,$isv:1,$asv:null,$iso:1,$aso:null}
P.bl.prototype={$asbl:null}
P.d3.prototype={
ga6:function(a){return P.ac.prototype.ga6.call(this,this)},
C:function(a){return"null"}}
P.dk.prototype={$isbE:1,
$asbE:function(){return[P.dk]}}
P.ac.prototype={constructor:P.ac,$isac:1,
S:function(a,b){return this===b},
ga6:function(a){return H.eq(this)},
C:function(a){return H.nJ(this)},
gaa:function(a){return new H.dQ(H.kd(this),null)},
toString:function(){return this.C(this)}}
P.dt.prototype={}
P.ev.prototype={}
P.dM.prototype={}
P.B.prototype={$isbE:1,
$asbE:function(){return[P.B]}}
P.c9.prototype={
gm:function(a){return this.N.length},
gV:function(a){return this.N.length===0},
C:function(a){var t=this.N
return t.charCodeAt(0)==0?t:t},
gN:function(){return this.N}}
P.eC.prototype={}
P.pf.prototype={
$2:function(a,b){var t,s,r,q
t=J.bf(b)
s=t.bc(b,"=")
if(s===-1){if(!t.S(b,""))J.kg(a,P.qP(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.L(b,0,s)
q=C.c.ag(b,s+1)
t=this.a
J.kg(a,P.qP(r,0,r.length,t,!0),P.qP(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pc.prototype={
$2:function(a,b){throw H.l(new P.bK("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.B,P.D]}}}
P.pd.prototype={
$2:function(a,b){throw H.l(new P.bK("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.B],opt:[,]}}}
P.pe.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.ff(C.c.L(this.a,a,b),16,null)
s=J.dy(t)
if(s.a4(t,0)||s.aB(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.D,args:[P.D,P.D]}}}
P.k7.prototype={
geh:function(){return this.b},
gcw:function(a){var t=this.c
if(t==null)return""
if(C.c.af(t,"["))return C.c.L(t,1,t.length-1)
return t},
gcF:function(a){var t=this.d
if(t==null)return P.x7(this.a)
return t},
gcG:function(a){var t=this.f
return t==null?"":t},
gdR:function(){var t=this.r
return t==null?"":t},
gcH:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.B
s=new P.hK(P.wY(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
gdU:function(){return this.c!=null},
gdW:function(){return this.f!=null},
gdV:function(){return this.r!=null},
C:function(a){var t=this.y
if(t==null){t=this.dk()
this.y=t}return t},
dk:function(){var t,s,r,q
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
S:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aL(b)
if(!!t.$iseC){if(this.a===b.gcQ())if(this.c!=null===b.gdU()){s=this.b
r=b.geh()
if(s==null?r==null:s===r){s=this.gcw(this)
r=t.gcw(b)
if(s==null?r==null:s===r)if(J.bb(this.gcF(this),t.gcF(b)))if(J.bb(this.e,t.ge5(b))){s=this.f
r=s==null
if(!r===b.gdW()){if(r)s=""
if(s===t.gcG(b)){t=this.r
s=t==null
if(!s===b.gdV()){if(s)t=""
t=t===b.gdR()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga6:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dk()
this.y=t}t=C.c.ga6(t)
this.z=t}return t},
$iseC:1,
gcQ:function(){return this.a},
ge5:function(a){return this.e}}
P.r9.prototype={
$1:function(a){throw H.l(new P.bK("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pb.prototype={
geg:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.x(t,0)
s=this.a
t=t[0]+1
r=J.bf(s)
q=r.aX(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fs(s,o,p,C.k,!1)
if(n==null)n=r.L(s,o,p)
p=q}else n=null
m=P.fs(s,t,p,C.D,!1)
t=new P.pQ(this,"data",null,null,null,m==null?r.L(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
C:function(a){var t,s
t=this.b
if(0>=t.length)return H.x(t,0)
s=this.a
return t[0]===-1?"data:"+H.C(s):s}}
P.r3.prototype={
$1:function(a){return new Uint8Array(H.cx(96))},
$S:function(){return{func:1,args:[,]}}}
P.r2.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.x(t,a)
t=t[a]
J.xR(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.d6,args:[,,]}}}
P.r4.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dj(a),r=0;r<t;++r)s.i(a,C.c.a5(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.d6,P.B,P.D]}}}
P.r5.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a5(b,0),s=C.c.a5(b,1),r=J.dj(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.d6,P.B,P.D]}}}
P.qF.prototype={
gdU:function(){return this.c>0},
gdW:function(){var t=this.f
if(typeof t!=="number")return t.a4()
return t<this.r},
gdV:function(){return this.r<this.a.length},
gcQ:function(){var t,s
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
geh:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.L(this.a,s,t-1):""},
gcw:function(a){var t=this.c
return t>0?C.c.L(this.a,t,this.d):""},
gcF:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.U()
s=this.e
if(typeof s!=="number")return H.as(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.U()
return H.ff(C.c.L(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.af(this.a,"http"))return 80
if(t===5&&C.c.af(this.a,"https"))return 443
return 0},
ge5:function(a){return C.c.L(this.a,this.e,this.f)},
gcG:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a4()
return t<s?C.c.L(this.a,t+1,s):""},
gdR:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ag(s,t+1):""},
gcH:function(){var t=this.f
if(typeof t!=="number")return t.a4()
if(t>=this.r)return C.a_
t=P.B
return new P.hK(P.wY(this.gcG(this),C.n),[t,t])},
ga6:function(a){var t=this.y
if(t==null){t=C.c.ga6(this.a)
this.y=t}return t},
S:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aL(b)
if(!!t.$iseC)return this.a===t.C(b)
return!1},
C:function(a){return this.a},
$iseC:1}
P.pQ.prototype={}
W.az.prototype={}
W.eL.prototype={
C:function(a){return String(a)},
$iseL:1,
$isi:1,
gae:function(a){return a.href}}
W.kn.prototype={
C:function(a){return String(a)},
$isi:1,
gae:function(a){return a.href}}
W.eO.prototype={$iseO:1,$isdn:1,$isaK:1,$isac:1}
W.cK.prototype={$isac:1}
W.kv.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.cK]},
$isv:1,
$asv:function(){return[W.cK]},
$iso:1,
$aso:function(){return[W.cK]},
$isaQ:1,
$asaQ:function(){return[W.cK]},
$isaJ:1,
$asaJ:function(){return[W.cK]}}
W.fT.prototype={
$asq:function(){return[W.cK]},
$asv:function(){return[W.cK]},
$aso:function(){return[W.cK]},
$isq:1,
$isv:1,
$iso:1}
W.fW.prototype={
$asq:function(){return[W.cK]},
$asv:function(){return[W.cK]},
$aso:function(){return[W.cK]},
$isq:1,
$isv:1,
$iso:1}
W.kz.prototype={
gae:function(a){return a.href}}
W.eP.prototype={$iseP:1}
W.kD.prototype={$isi:1}
W.fK.prototype={$isfK:1,
gK:function(a){return a.name}}
W.e9.prototype={$isi:1,
gm:function(a){return a.length}}
W.kN.prototype={$isi:1}
W.i4.prototype={
cu:function(a,b){return typeof console!="undefined"?console.error(b):null},
b8:function(a){return typeof console!="undefined"?console.group(a):null},
dY:function(a){return typeof console!="undefined"?console.info(a):null},
hK:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fO.prototype={
gK:function(a){return a.name}}
W.kT.prototype={
gaI:function(a){return a.style}}
W.kU.prototype={
gae:function(a){return a.href}}
W.fP.prototype={
gaI:function(a){return a.style}}
W.fQ.prototype={
gK:function(a){return a.name}}
W.kV.prototype={
gaI:function(a){return a.style}}
W.bJ.prototype={$isbJ:1,$isac:1}
W.eS.prototype={
bx:function(a,b){var t=this.f8(a,b)
return t!=null?t:""},
f8:function(a,b){if(W.yN(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.yR()+b)},
J:function(a,b){return a.item(b)},
gbb:function(a){return a.content},
gbl:function(a){return a.display},
sbl:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iz.prototype={}
W.pO.prototype={
bx:function(a,b){var t=this.b
return J.xX(t.gad(t),b)},
fv:function(a,b){var t
for(t=this.a,t=new H.en(t,t.gm(t),0,null,[H.O(t,0)]);t.I();)t.d.style[a]=b},
sbl:function(a,b){this.fv("display",b)},
eO:function(a){var t=P.de(this.a,!0,null)
this.b=new H.fa(t,new W.pP(),[H.O(t,0),null])}}
W.ju.prototype={}
W.pP.prototype={
$1:function(a){return J.rB(a)},
$S:function(){return{func:1,args:[,]}}}
W.i6.prototype={
gbb:function(a){return this.bx(a,"content")},
gbl:function(a){return this.bx(a,"display")}}
W.kW.prototype={
gaI:function(a){return a.style}}
W.kX.prototype={
gaI:function(a){return a.style}}
W.l1.prototype={
gcv:function(a){return a.files}}
W.eT.prototype={$iseT:1,$isac:1}
W.i7.prototype={
bI:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
J:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.ea.prototype={$isea:1}
W.i9.prototype={$isi:1}
W.ia.prototype={
gK:function(a){return a.name}}
W.l4.prototype={
gK:function(a){var t=a.name
if(P.vk()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vk()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
C:function(a){return String(a)}}
W.ib.prototype={
C:function(a){return"Rectangle ("+H.C(a.left)+", "+H.C(a.top)+") "+H.C(this.gb1(a))+" x "+H.C(this.gaW(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.aL(b)
if(!t.$isbT)return!1
return a.left===t.gbR(b)&&a.top===t.gbW(b)&&this.gb1(a)===t.gb1(b)&&this.gaW(a)===t.gaW(b)},
ga6:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb1(a)
q=this.gaW(a)
return W.x6(W.eI(W.eI(W.eI(W.eI(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaW:function(a){return a.height},
gbR:function(a){return a.left},
gbW:function(a){return a.top},
gb1:function(a){return a.width},
$isbT:1,
$asbT:function(){}}
W.ic.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[P.B]},
$isv:1,
$asv:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]},
$isaQ:1,
$asaQ:function(){return[P.B]},
$isaJ:1,
$asaJ:function(){return[P.B]}}
W.iA.prototype={
$asq:function(){return[P.B]},
$asv:function(){return[P.B]},
$aso:function(){return[P.B]},
$isq:1,
$isv:1,
$iso:1}
W.iU.prototype={
$asq:function(){return[P.B]},
$asv:function(){return[P.B]},
$aso:function(){return[P.B]},
$isq:1,
$isv:1,
$iso:1}
W.id.prototype={
J:function(a,b){return a.item(b)}}
W.ie.prototype={
h:function(a,b){return a.add(b)},
ai:function(a,b){return a.contains(b)},
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.jY.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.l(new P.V("Cannot modify list"))},
gaI:function(a){return W.G3(this)},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
W.dn.prototype={
gdK:function(a){return new W.pW(a)},
C:function(a){return a.localName},
dZ:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$isdn:1,
$isaK:1,
$isac:1,
$isi:1,
gaI:function(a){return a.style}}
W.la.prototype={
gK:function(a){return a.name}}
W.fS.prototype={
gK:function(a){return a.name}}
W.lg.prototype={
gaq:function(a){return a.error}}
W.T.prototype={$isT:1,$isac:1}
W.aS.prototype={
fE:function(a,b,c,d){if(c!=null)this.eT(a,b,c,!1)},
hA:function(a,b,c,d){if(c!=null)this.fs(a,b,c,!1)},
eT:function(a,b,c,d){return a.addEventListener(b,H.di(c,1),!1)},
fs:function(a,b,c,d){return a.removeEventListener(b,H.di(c,1),!1)}}
W.lH.prototype={
gK:function(a){return a.name}}
W.cd.prototype={$iscd:1,$isac:1,
gK:function(a){return a.name}}
W.f_.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isf_:1,
$isaQ:1,
$asaQ:function(){return[W.cd]},
$isaJ:1,
$asaJ:function(){return[W.cd]},
$isq:1,
$asq:function(){return[W.cd]},
$isv:1,
$asv:function(){return[W.cd]},
$iso:1,
$aso:function(){return[W.cd]}}
W.iB.prototype={
$asq:function(){return[W.cd]},
$asv:function(){return[W.cd]},
$aso:function(){return[W.cd]},
$isq:1,
$isv:1,
$iso:1}
W.iV.prototype={
$asq:function(){return[W.cd]},
$asv:function(){return[W.cd]},
$aso:function(){return[W.cd]},
$isq:1,
$isv:1,
$iso:1}
W.lI.prototype={
gaq:function(a){return a.error}}
W.lJ.prototype={
gK:function(a){return a.name}}
W.lK.prototype={
gaq:function(a){return a.error},
gm:function(a){return a.length}}
W.lN.prototype={
gaI:function(a){return a.style},
gcM:function(a){return a.weight}}
W.lO.prototype={
h:function(a,b){return a.add(b)},
hT:function(a,b,c){return a.forEach(H.di(b,3),c)},
a9:function(a,b){b=H.di(b,3)
return a.forEach(b)}}
W.iv.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.cl.prototype={$iscl:1,$isac:1}
W.m_.prototype={
gm:function(a){return a.length}}
W.f1.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.aK]},
$isv:1,
$asv:function(){return[W.aK]},
$iso:1,
$aso:function(){return[W.aK]},
$isaQ:1,
$asaQ:function(){return[W.aK]},
$isaJ:1,
$asaJ:function(){return[W.aK]}}
W.iC.prototype={
$asq:function(){return[W.aK]},
$asv:function(){return[W.aK]},
$aso:function(){return[W.aK]},
$isq:1,
$isv:1,
$iso:1}
W.iW.prototype={
$asq:function(){return[W.aK]},
$asv:function(){return[W.aK]},
$aso:function(){return[W.aK]},
$isq:1,
$isv:1,
$iso:1}
W.ix.prototype={
J:function(a,b){return a.item(b)}}
W.e0.prototype={
i1:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hp:function(a,b,c,d){return a.open(b,c,d)},
ghD:function(a){return W.Gt(a.response)},
b3:function(a,b){return a.send(b)},
$ise0:1,
$isac:1,
ghE:function(a){return a.responseText}}
W.m2.prototype={
$1:function(a){return J.xW(a)},
$S:function(){return{func:1,args:[W.e0]}}}
W.m3.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.as()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.az(0,t)
else p.bj(a)},
$S:function(){return{func:1,args:[,]}}}
W.h9.prototype={}
W.m7.prototype={
gK:function(a){return a.name}}
W.ha.prototype={$isha:1}
W.f3.prototype={$isf3:1,$isdn:1,$isaK:1,$isac:1,
az:function(a,b){return a.complete.$1(b)}}
W.mc.prototype={$isi:1,
gcv:function(a){return a.files},
gK:function(a){return a.name}}
W.mB.prototype={
gK:function(a){return a.name}}
W.hj.prototype={
h:function(a,b){return a.add(b)}}
W.hk.prototype={$ishk:1,
gae:function(a){return a.href}}
W.mT.prototype={
C:function(a){return String(a)},
gae:function(a){return a.href}}
W.mY.prototype={
gK:function(a){return a.name}}
W.hr.prototype={
gaq:function(a){return a.error}}
W.jo.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.n3.prototype={
gbb:function(a){return a.content},
gK:function(a){return a.name}}
W.n4.prototype={
hP:function(a,b,c){return a.send(b,c)},
b3:function(a,b){return a.send(b)}}
W.hs.prototype={
gK:function(a){return a.name}}
W.cn.prototype={$iscn:1,$isac:1}
W.jp.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaQ:1,
$asaQ:function(){return[W.cn]},
$isaJ:1,
$asaJ:function(){return[W.cn]},
$isq:1,
$asq:function(){return[W.cn]},
$isv:1,
$asv:function(){return[W.cn]},
$iso:1,
$aso:function(){return[W.cn]}}
W.iM.prototype={
$asq:function(){return[W.cn]},
$asv:function(){return[W.cn]},
$aso:function(){return[W.cn]},
$isq:1,
$isv:1,
$iso:1}
W.j5.prototype={
$asq:function(){return[W.cn]},
$asv:function(){return[W.cn]},
$aso:function(){return[W.cn]},
$isq:1,
$isv:1,
$iso:1}
W.ni.prototype={$isi:1}
W.nj.prototype={
gK:function(a){return a.name}}
W.aK.prototype={
C:function(a){var t=a.nodeValue
return t==null?this.eA(a):t},
ai:function(a,b){return a.contains(b)},
$isaK:1,
$isac:1}
W.js.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.aK]},
$isv:1,
$asv:function(){return[W.aK]},
$iso:1,
$aso:function(){return[W.aK]},
$isaQ:1,
$asaQ:function(){return[W.aK]},
$isaJ:1,
$asaJ:function(){return[W.aK]}}
W.iN.prototype={
$asq:function(){return[W.aK]},
$asv:function(){return[W.aK]},
$aso:function(){return[W.aK]},
$isq:1,
$isv:1,
$iso:1}
W.j6.prototype={
$asq:function(){return[W.aK]},
$asv:function(){return[W.aK]},
$aso:function(){return[W.aK]},
$isq:1,
$isv:1,
$iso:1}
W.nm.prototype={
gK:function(a){return a.name}}
W.nr.prototype={
gK:function(a){return a.name}}
W.nv.prototype={
gK:function(a){return a.name}}
W.nx.prototype={$isi:1}
W.e2.prototype={
gK:function(a){return a.name}}
W.nC.prototype={
gm:function(a){return a.length}}
W.cf.prototype={
J:function(a,b){return a.item(b)},
$iscf:1,
$isac:1,
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.jz.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cf]},
$isv:1,
$asv:function(){return[W.cf]},
$iso:1,
$aso:function(){return[W.cf]},
$isaQ:1,
$asaQ:function(){return[W.cf]},
$isaJ:1,
$asaJ:function(){return[W.cf]}}
W.iO.prototype={
$asq:function(){return[W.cf]},
$asv:function(){return[W.cf]},
$aso:function(){return[W.cf]},
$isq:1,
$isv:1,
$iso:1}
W.j7.prototype={
$asq:function(){return[W.cf]},
$asv:function(){return[W.cf]},
$aso:function(){return[W.cf]},
$isq:1,
$isv:1,
$iso:1}
W.nI.prototype={
b3:function(a,b){return a.send(b)}}
W.jC.prototype={
b3:function(a,b){return a.send(b)}}
W.fi.prototype={$isfi:1,$isdn:1,$isaK:1,$isac:1}
W.jD.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.o5.prototype={
gK:function(a){return a.name}}
W.o8.prototype={$isi:1}
W.o9.prototype={
gK:function(a){return a.name}}
W.oa.prototype={
gK:function(a){return a.name}}
W.co.prototype={$isco:1,$isac:1}
W.jF.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.co]},
$isv:1,
$asv:function(){return[W.co]},
$iso:1,
$aso:function(){return[W.co]},
$isaQ:1,
$asaQ:function(){return[W.co]},
$isaJ:1,
$asaJ:function(){return[W.co]}}
W.fU.prototype={
$asq:function(){return[W.co]},
$asv:function(){return[W.co]},
$aso:function(){return[W.co]},
$isq:1,
$isv:1,
$iso:1}
W.fX.prototype={
$asq:function(){return[W.co]},
$asv:function(){return[W.co]},
$aso:function(){return[W.co]},
$isq:1,
$isv:1,
$iso:1}
W.hE.prototype={$ishE:1}
W.cp.prototype={$iscp:1,$isac:1,
gcM:function(a){return a.weight}}
W.jG.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cp]},
$isv:1,
$asv:function(){return[W.cp]},
$iso:1,
$aso:function(){return[W.cp]},
$isaQ:1,
$asaQ:function(){return[W.cp]},
$isaJ:1,
$asaJ:function(){return[W.cp]}}
W.iP.prototype={
$asq:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$aso:function(){return[W.cp]},
$isq:1,
$isv:1,
$iso:1}
W.j8.prototype={
$asq:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$aso:function(){return[W.cp]},
$isq:1,
$isv:1,
$iso:1}
W.fj.prototype={$isfj:1,$isac:1}
W.og.prototype={
gaq:function(a){return a.error}}
W.ch.prototype={
J:function(a,b){return a.item(b)},
$isch:1,
$isac:1,
gm:function(a){return a.length}}
W.oh.prototype={
gK:function(a){return a.name}}
W.oi.prototype={
gK:function(a){return a.name}}
W.on.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a9:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gV:function(a){return a.key(0)==null},
$isbl:1,
$asbl:function(){return[P.B,P.B]}}
W.ci.prototype={$isci:1,$isac:1,
gae:function(a){return a.href}}
W.e4.prototype={}
W.oR.prototype={
gbb:function(a){return a.content}}
W.oT.prototype={
gK:function(a){return a.name}}
W.cP.prototype={$isac:1}
W.cG.prototype={$isac:1}
W.oW.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isaQ:1,
$asaQ:function(){return[W.cG]},
$isaJ:1,
$asaJ:function(){return[W.cG]},
$isq:1,
$asq:function(){return[W.cG]},
$isv:1,
$asv:function(){return[W.cG]},
$iso:1,
$aso:function(){return[W.cG]}}
W.iQ.prototype={
$asq:function(){return[W.cG]},
$asv:function(){return[W.cG]},
$aso:function(){return[W.cG]},
$isq:1,
$isv:1,
$iso:1}
W.j9.prototype={
$asq:function(){return[W.cG]},
$asv:function(){return[W.cG]},
$aso:function(){return[W.cG]},
$isq:1,
$isv:1,
$iso:1}
W.oX.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
$isaQ:1,
$asaQ:function(){return[W.cP]},
$isaJ:1,
$asaJ:function(){return[W.cP]},
$isq:1,
$asq:function(){return[W.cP]},
$isv:1,
$asv:function(){return[W.cP]},
$iso:1,
$aso:function(){return[W.cP]}}
W.fV.prototype={
$asq:function(){return[W.cP]},
$asv:function(){return[W.cP]},
$aso:function(){return[W.cP]},
$isq:1,
$isv:1,
$iso:1}
W.fY.prototype={
$asq:function(){return[W.cP]},
$asv:function(){return[W.cP]},
$aso:function(){return[W.cP]},
$isq:1,
$isv:1,
$iso:1}
W.p0.prototype={
gm:function(a){return a.length}}
W.cr.prototype={$iscr:1,$isac:1}
W.jK.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cr]},
$isv:1,
$asv:function(){return[W.cr]},
$iso:1,
$aso:function(){return[W.cr]},
$isaQ:1,
$asaQ:function(){return[W.cr]},
$isaJ:1,
$asaJ:function(){return[W.cr]}}
W.iR.prototype={
$asq:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isq:1,
$isv:1,
$iso:1}
W.ja.prototype={
$asq:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isq:1,
$isv:1,
$iso:1}
W.fm.prototype={$isfm:1,$isac:1}
W.jL.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.e5.prototype={}
W.pg.prototype={
C:function(a){return String(a)},
$isi:1,
gae:function(a){return a.href}}
W.pk.prototype={
gm:function(a){return a.length}}
W.fn.prototype={$isfn:1,$isac:1}
W.jM.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pp.prototype={
b3:function(a,b){return a.send(b)}}
W.jP.prototype={$isi:1,
gK:function(a){return a.name}}
W.pw.prototype={$isi:1}
W.eD.prototype={$isi:1}
W.fo.prototype={$isfo:1,$isaK:1,$isac:1,
gK:function(a){return a.name}}
W.pN.prototype={
C:function(a){return"Rectangle ("+H.C(a.left)+", "+H.C(a.top)+") "+H.C(a.width)+" x "+H.C(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.aL(b)
if(!t.$isbT)return!1
s=a.left
r=t.gbR(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbW(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb1(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaW(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga6:function(a){var t,s,r,q
t=J.dA(a.left)
s=J.dA(a.top)
r=J.dA(a.width)
q=J.dA(a.height)
return W.x6(W.eI(W.eI(W.eI(W.eI(0,t),s),r),q))},
$isbT:1,
$asbT:function(){},
gaW:function(a){return a.height},
gbR:function(a){return a.left},
gbW:function(a){return a.top},
gb1:function(a){return a.width}}
W.hP.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaQ:1,
$asaQ:function(){return[P.bT]},
$isaJ:1,
$asaJ:function(){return[P.bT]},
$isq:1,
$asq:function(){return[P.bT]},
$isv:1,
$asv:function(){return[P.bT]},
$iso:1,
$aso:function(){return[P.bT]}}
W.iS.prototype={
$asq:function(){return[P.bT]},
$asv:function(){return[P.bT]},
$aso:function(){return[P.bT]},
$isq:1,
$isv:1,
$iso:1}
W.jb.prototype={
$asq:function(){return[P.bT]},
$asv:function(){return[P.bT]},
$aso:function(){return[P.bT]},
$isq:1,
$isv:1,
$iso:1}
W.jW.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.bJ]},
$isv:1,
$asv:function(){return[W.bJ]},
$iso:1,
$aso:function(){return[W.bJ]},
$isaQ:1,
$asaQ:function(){return[W.bJ]},
$isaJ:1,
$asaJ:function(){return[W.bJ]}}
W.iT.prototype={
$asq:function(){return[W.bJ]},
$asv:function(){return[W.bJ]},
$aso:function(){return[W.bJ]},
$isq:1,
$isv:1,
$iso:1}
W.jc.prototype={
$asq:function(){return[W.bJ]},
$asv:function(){return[W.bJ]},
$aso:function(){return[W.bJ]},
$isq:1,
$isv:1,
$iso:1}
W.pU.prototype={$isi:1}
W.pV.prototype={
gaW:function(a){return a.height},
gb1:function(a){return a.width}}
W.k_.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaQ:1,
$asaQ:function(){return[W.cl]},
$isaJ:1,
$asaJ:function(){return[W.cl]},
$isq:1,
$asq:function(){return[W.cl]},
$isv:1,
$asv:function(){return[W.cl]},
$iso:1,
$aso:function(){return[W.cl]}}
W.iD.prototype={
$asq:function(){return[W.cl]},
$asv:function(){return[W.cl]},
$aso:function(){return[W.cl]},
$isq:1,
$isv:1,
$iso:1}
W.iX.prototype={
$asq:function(){return[W.cl]},
$asv:function(){return[W.cl]},
$aso:function(){return[W.cl]},
$isq:1,
$isv:1,
$iso:1}
W.qf.prototype={$isi:1}
W.hV.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.aK]},
$isv:1,
$asv:function(){return[W.aK]},
$iso:1,
$aso:function(){return[W.aK]},
$isaQ:1,
$asaQ:function(){return[W.aK]},
$isaJ:1,
$asaJ:function(){return[W.aK]}}
W.iE.prototype={
$asq:function(){return[W.aK]},
$asv:function(){return[W.aK]},
$aso:function(){return[W.aK]},
$isq:1,
$isv:1,
$iso:1}
W.iY.prototype={
$asq:function(){return[W.aK]},
$asv:function(){return[W.aK]},
$aso:function(){return[W.aK]},
$isq:1,
$isv:1,
$iso:1}
W.qE.prototype={$isi:1}
W.k3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.ch]},
$isv:1,
$asv:function(){return[W.ch]},
$iso:1,
$aso:function(){return[W.ch]},
$isaQ:1,
$asaQ:function(){return[W.ch]},
$isaJ:1,
$asaJ:function(){return[W.ch]}}
W.iF.prototype={
$asq:function(){return[W.ch]},
$asv:function(){return[W.ch]},
$aso:function(){return[W.ch]},
$isq:1,
$isv:1,
$iso:1}
W.iZ.prototype={
$asq:function(){return[W.ch]},
$asv:function(){return[W.ch]},
$aso:function(){return[W.ch]},
$isq:1,
$isv:1,
$iso:1}
W.k5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.x(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaQ:1,
$asaQ:function(){return[W.ci]},
$isaJ:1,
$asaJ:function(){return[W.ci]},
$isq:1,
$asq:function(){return[W.ci]},
$isv:1,
$asv:function(){return[W.ci]},
$iso:1,
$aso:function(){return[W.ci]}}
W.iG.prototype={
$asq:function(){return[W.ci]},
$asv:function(){return[W.ci]},
$aso:function(){return[W.ci]},
$isq:1,
$isv:1,
$iso:1}
W.j_.prototype={
$asq:function(){return[W.ci]},
$asv:function(){return[W.ci]},
$aso:function(){return[W.ci]},
$isq:1,
$isv:1,
$iso:1}
W.qU.prototype={$isi:1}
W.qV.prototype={$isi:1}
W.pW.prototype={
aF:function(){var t,s,r,q,p
t=P.a5(null,null,null,P.B)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.cj)(s),++q){p=J.rD(s[q])
if(p.length!==0)t.h(0,p)}return t},
ei:function(a){this.a.className=a.bd(0," ")},
gm:function(a){return this.a.classList.length},
gV:function(a){return this.a.classList.length===0},
ai:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s}}
W.pZ.prototype={
aM:function(a,b,c,d){return W.eG(this.a,this.b,a,!1,H.O(this,0))},
e2:function(a,b,c){return this.aM(a,null,b,c)}}
W.hQ.prototype={}
W.q_.prototype={
bN:function(a){if(this.b==null)return
this.dG()
this.b=null
this.d=null
return},
cD:function(a,b){if(this.b==null)return;++this.a
this.dG()},
e6:function(a){return this.cD(a,null)},
e9:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dE()},
dE:function(){var t=this.d
if(t!=null&&this.a<=0)J.xK(this.b,this.c,t,!1)},
dG:function(){var t=this.d
if(t!=null)J.y_(this.b,this.c,t,!1)},
eP:function(a,b,c,d,e){this.dE()}}
W.q0.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bs.prototype={
gY:function(a){return new W.lM(a,this.gm(a),-1,null,[H.aR(a,"bs",0)])},
h:function(a,b){throw H.l(new P.V("Cannot add to immutable List."))},
a8:function(a,b,c,d,e){throw H.l(new P.V("Cannot setRange on immutable List."))},
ax:function(a,b,c,d){return this.a8(a,b,c,d,0)},
aA:function(a,b,c,d){throw H.l(new P.V("Cannot modify an immutable List."))},
bP:function(a,b,c,d){throw H.l(new P.V("Cannot modify an immutable List."))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
W.lM.prototype={
I:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.i0(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gR:function(){return this.d}}
W.qN.prototype={}
P.qK.prototype={
bn:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b0:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.aL(a)
if(!!s.$isdY)return new Date(a.a)
if(!!s.$isFm)throw H.l(new P.eA("structured clone of RegExp"))
if(!!s.$iscd)return a
if(!!s.$iseP)return a
if(!!s.$isf_)return a
if(!!s.$isha)return a
if(!!s.$isfb||!!s.$isep)return a
if(!!s.$isbl){r=this.bn(a)
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
s.a9(a,new P.qM(t,this))
return t.a}if(!!s.$isq){r=this.bn(a)
t=this.b
if(r>=t.length)return H.x(t,r)
o=t[r]
if(o!=null)return o
return this.fQ(a,r)}throw H.l(new P.eA("structured clone of other type"))},
fQ:function(a,b){var t,s,r,q,p
t=J.bf(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.x(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b0(t.n(a,p))
if(p>=r.length)return H.x(r,p)
r[p]=q}return r}}
P.qM.prototype={
$2:function(a,b){this.a.a[a]=this.b.b0(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pD.prototype={
bn:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b0:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dY(s,!0)
r.cZ(s,!0)
return r}if(a instanceof RegExp)throw H.l(new P.eA("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.GO(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bn(a)
r=this.b
o=r.length
if(p>=o)return H.x(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mL()
t.a=n
if(p>=o)return H.x(r,p)
r[p]=n
this.h2(a,new P.pE(t,this))
return t.a}if(a instanceof Array){p=this.bn(a)
r=this.b
if(p>=r.length)return H.x(r,p)
n=r[p]
if(n!=null)return n
o=J.bf(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.x(r,p)
r[p]=n
if(typeof m!=="number")return H.as(m)
r=J.dj(n)
l=0
for(;l<m;++l)r.i(n,l,this.b0(o.n(a,l)))
return n}return a}}
P.pE.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b0(b)
J.kg(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.qL.prototype={}
P.jS.prototype={
h2:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.cj)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rb.prototype={
$1:function(a){return this.a.az(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rc.prototype={
$1:function(a){return this.a.bj(a)},
$S:function(){return{func:1,args:[,]}}}
P.kR.prototype={
dH:function(a){if($.$get$vc().b.test(a))return a
throw H.l(P.dV(a,"value","Not a valid class token"))},
C:function(a){return this.aF().bd(0," ")},
gY:function(a){var t,s
t=this.aF()
s=new P.dw(t,t.r,null,null,[null])
s.c=t.e
return s},
a9:function(a,b){this.aF().a9(0,b)},
av:function(a,b){var t=this.aF()
return new H.fR(t,b,[H.O(t,0),null])},
gV:function(a){return this.aF().a===0},
gm:function(a){return this.aF().a},
ai:function(a,b){if(typeof b!=="string")return!1
this.dH(b)
return this.aF().ai(0,b)},
cA:function(a){return this.ai(0,a)?a:null},
h:function(a,b){this.dH(b)
return this.hl(0,new P.kS(b))},
a3:function(a,b){return this.aF().a3(0,!0)},
ao:function(a){return this.a3(a,!0)},
hl:function(a,b){var t,s
t=this.aF()
s=b.$1(t)
this.ei(t)
return s},
$isev:1,
$asev:function(){return[P.B]},
$isv:1,
$asv:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]}}
P.kS.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.l2.prototype={
gK:function(a){return a.name}}
P.r1.prototype={
$1:function(a){this.b.az(0,new P.jS([],[],!1).b0(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.ma.prototype={
gK:function(a){return a.name}}
P.nn.prototype={
bI:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fg(a,b,c)
q=P.Gs(t)
return q}catch(p){s=H.ct(p)
r=H.cs(p)
q=P.vx(s,r,null)
return q}},
h:function(a,b){return this.bI(a,b,null)},
fg:function(a,b,c){return a.add(new P.qL([],[]).b0(b))},
gK:function(a){return a.name}}
P.hC.prototype={
gaq:function(a){return a.error}}
P.p5.prototype={
gaq:function(a){return a.error}}
P.qm.prototype={
br:function(a){if(a<=0||a>4294967296)throw H.l(P.wC("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cB:function(){return Math.random()}}
P.qv.prototype={
aR:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.am(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
br:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.l(P.wC("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aR()
return(this.a&t)>>>0}do{this.aR()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cB:function(){this.aR()
var t=this.a
this.aR()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
eR:function(a){var t,s,r,q,p,o,n,m
t=J.e7(a,0)?-1:0
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
this.aR()
this.aR()
this.aR()
this.aR()}}
P.qw.prototype={}
P.bT.prototype={$asbT:null}
P.kk.prototype={$isi:1,
gae:function(a){return a.href}}
P.e8.prototype={$isi:1}
P.lj.prototype={$isi:1}
P.lk.prototype={$isi:1}
P.ll.prototype={$isi:1}
P.lm.prototype={$isi:1}
P.ln.prototype={$isi:1}
P.lo.prototype={$isi:1}
P.lp.prototype={$isi:1}
P.lq.prototype={$isi:1}
P.lr.prototype={$isi:1}
P.ls.prototype={$isi:1,
gae:function(a){return a.href}}
P.lt.prototype={$isi:1}
P.lu.prototype={$isi:1}
P.lv.prototype={$isi:1}
P.lw.prototype={$isi:1}
P.lx.prototype={$isi:1}
P.ly.prototype={$isi:1}
P.lL.prototype={$isi:1,
gae:function(a){return a.href}}
P.cm.prototype={$isi:1}
P.m8.prototype={$isi:1,
gae:function(a){return a.href}}
P.d2.prototype={$isac:1}
P.mE.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.d2]},
$isv:1,
$asv:function(){return[P.d2]},
$iso:1,
$aso:function(){return[P.d2]}}
P.iH.prototype={
$asq:function(){return[P.d2]},
$asv:function(){return[P.d2]},
$aso:function(){return[P.d2]},
$isq:1,
$isv:1,
$iso:1}
P.j0.prototype={
$asq:function(){return[P.d2]},
$asv:function(){return[P.d2]},
$aso:function(){return[P.d2]},
$isq:1,
$isv:1,
$iso:1}
P.n0.prototype={$isi:1}
P.n1.prototype={$isi:1}
P.d4.prototype={$isac:1}
P.nk.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.d4]},
$isv:1,
$asv:function(){return[P.d4]},
$iso:1,
$aso:function(){return[P.d4]}}
P.iI.prototype={
$asq:function(){return[P.d4]},
$asv:function(){return[P.d4]},
$aso:function(){return[P.d4]},
$isq:1,
$isv:1,
$iso:1}
P.j1.prototype={
$asq:function(){return[P.d4]},
$asv:function(){return[P.d4]},
$aso:function(){return[P.d4]},
$isq:1,
$isv:1,
$iso:1}
P.nA.prototype={$isi:1,
gae:function(a){return a.href}}
P.nF.prototype={
gm:function(a){return a.length}}
P.o2.prototype={$isi:1,
gae:function(a){return a.href}}
P.oI.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.B]},
$isv:1,
$asv:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]}}
P.iJ.prototype={
$asq:function(){return[P.B]},
$asv:function(){return[P.B]},
$aso:function(){return[P.B]},
$isq:1,
$isv:1,
$iso:1}
P.j2.prototype={
$asq:function(){return[P.B]},
$asv:function(){return[P.B]},
$aso:function(){return[P.B]},
$isq:1,
$isv:1,
$iso:1}
P.kr.prototype={
aF:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a5(null,null,null,P.B)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.cj)(r),++p){o=J.rD(r[p])
if(o.length!==0)s.h(0,o)}return s},
ei:function(a){this.a.setAttribute("class",a.bd(0," "))}}
P.ca.prototype={
gdK:function(a){return new P.kr(a)},
dZ:function(a,b,c,d,e){throw H.l(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
$isi:1}
P.oL.prototype={$isi:1}
P.oN.prototype={$isi:1}
P.ez.prototype={}
P.oV.prototype={$isi:1,
gae:function(a){return a.href}}
P.d5.prototype={$isac:1}
P.p6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.d5]},
$isv:1,
$asv:function(){return[P.d5]},
$iso:1,
$aso:function(){return[P.d5]}}
P.iK.prototype={
$asq:function(){return[P.d5]},
$asv:function(){return[P.d5]},
$aso:function(){return[P.d5]},
$isq:1,
$isv:1,
$iso:1}
P.j3.prototype={
$asq:function(){return[P.d5]},
$asv:function(){return[P.d5]},
$aso:function(){return[P.d5]},
$isq:1,
$isv:1,
$iso:1}
P.ph.prototype={$isi:1,
gae:function(a){return a.href}}
P.pl.prototype={$isi:1}
P.pm.prototype={$isi:1}
P.hT.prototype={$isi:1,
gae:function(a){return a.href}}
P.qB.prototype={$isi:1}
P.qC.prototype={$isi:1}
P.qD.prototype={$isi:1}
P.bg.prototype={}
P.d6.prototype={$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
P.fE.prototype={$isfE:1,$isac:1,
gm:function(a){return a.length}}
P.eN.prototype={$iseN:1,$isac:1,
gbM:function(a){return a.buffer}}
P.fF.prototype={
f1:function(a,b,c,d){return a.decodeAudioData(b,H.di(c,1),H.di(d,1))},
fR:function(a,b){var t,s,r
t=P.fE
s=new P.bi(0,$.aB,null,[t])
r=new P.dS(s,[t])
this.f1(a,b,new P.ks(r),new P.kt(r))
return s}}
P.ks.prototype={
$1:function(a){this.a.az(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kt.prototype={
$1:function(a){var t=this.a
if(a==null)t.bj("")
else t.bj(a)},
$S:function(){return{func:1,args:[,]}}}
P.bB.prototype={}
P.dW.prototype={}
P.kQ.prototype={
gbM:function(a){return a.buffer}}
P.km.prototype={
gK:function(a){return a.name}}
P.nS.prototype={$isi:1}
P.qT.prototype={$isi:1}
P.jH.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.bt(b,a,null,null,null))
return P.xv(a.item(b))},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
J:function(a,b){return P.xv(a.item(b))},
$isq:1,
$asq:function(){return[P.bl]},
$isv:1,
$asv:function(){return[P.bl]},
$iso:1,
$aso:function(){return[P.bl]}}
P.iL.prototype={
$asq:function(){return[P.bl]},
$asv:function(){return[P.bl]},
$aso:function(){return[P.bl]},
$isq:1,
$isv:1,
$iso:1}
P.j4.prototype={
$asq:function(){return[P.bl]},
$asv:function(){return[P.bl]},
$aso:function(){return[P.bl]},
$isq:1,
$isv:1,
$iso:1}
T.fA.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return t[b]},
gV:function(a){return this.a.length===0},
gY:function(a){var t=this.a
return new J.i1(t,t.length,0,null,[H.O(t,0)])},
$ashg:function(){return[T.fB]},
$aso:function(){return[T.fB]},
gcv:function(a){return this.a}}
T.fB.prototype={
gbb:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.f2(C.x)
r=T.f2(C.y)
q=T.wq(0,this.b)
new T.iy(s,q,0,0,0,t,r).dj()
r=q.c.buffer
q=q.a
r.toString
q=H.cN(r,0,q)
this.cy=q
t=q}else{t=s.bv()
this.cy=t}this.ch=0}}return t},
C:function(a){return this.a},
gK:function(a){return this.a}}
T.da.prototype={
C:function(a){return"ArchiveException: "+this.a}}
T.hb.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.as(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
if(typeof b!=="number")return H.as(b)
s+=b
if(s<0||s>=t.length)return H.x(t,s)
return t[s]},
aQ:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.as(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.ak()
if(typeof s!=="number")return H.as(s)
b=t-(a-s)}return T.tb(this.a,this.d,b,a)},
aX:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.U()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.as(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.x(q,s)
q[s]}return-1},
bc:function(a,b){return this.aX(a,b,0)},
cI:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.ak()
if(typeof s!=="number")return H.as(s)
r=this.aQ(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.ak()
if(typeof p!=="number")return H.as(p)
if(typeof s!=="number")return s.U()
this.b=s+(t-(q-p))
return r},
bU:function(a){return P.oJ(this.cI(a).bv(),0,null)},
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
bv:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.as(r)
q=t-(s-r)
t=this.a
r=J.aL(t)
if(!!r.$isd6){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cN(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xh(r.c_(t,s,p>o?o:p)))},
eH:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbM:function(a){return this.a},
gho:function(a){return this.b}}
T.ns.prototype={
hL:function(a,b){var t,s,r,q
if(b==null)b=J.ck(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.c9(s-q)
C.q.ax(r,t,s,a)
this.a+=b},
cN:function(a){return this.hL(a,null)},
hN:function(a){var t,s,r,q
t=J.bf(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.as(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.as(r)
this.c9(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.as(r)
C.q.a8(q,s,s+r,t.gbM(a),t.gho(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.ak()
if(typeof q!=="number")return H.as(q)
this.a=t+(r-(s-q))},
aQ:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cN(t,a,b-a)},
cW:function(a){return this.aQ(a,null)},
c9:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.ba(P.dB("Invalid length "+H.C(s)))
r=new Uint8Array(s)
q=this.c
C.q.ax(r,0,q.length,q)
this.c=r},
f5:function(){return this.c9(null)},
gm:function(a){return this.a}}
T.pz.prototype={
fq:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aQ(this.a-20,20)
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
f6:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.ak()
if(typeof r!=="number")return H.as(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a2()===101010256){a.b=t
return q}}throw H.l(new T.da("Could not find End of Central Directory Record"))},
eL:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.f6(a)
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
if(s>0)this.x=a.bU(s)
this.fq(a)
r=a.aQ(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.U()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.as()
if(!(p<t+o))break
if(r.a2()!==33639248)break
p=new T.pB(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
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
if(n>0)p.cy=r.bU(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.ak()
j=r.aQ(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.ak()
if(typeof g!=="number")return H.as(g)
if(typeof k!=="number")return k.U()
r.b=k+(i-(h-g))
p.db=j.bv()
f=j.a0()
e=j.a0()
if(f===1){if(e>=8)p.y=j.aO()
if(e>=16)p.x=j.aO()
if(e>=24){o=j.aO()
p.cx=o}if(e>=28)p.z=j.a2()}}if(l>0)p.dx=r.bU(l)
a.b=o
p.dy=T.FZ(a,p)
q.push(p)}}}
T.pA.prototype={
gbb:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.f2(C.x)
q=T.f2(C.y)
t=T.wq(0,t)
new T.iy(s,t,0,0,0,r,q).dj()
q=t.c.buffer
t=t.a
q.toString
t=H.cN(q,0,t)
this.cy=t
this.d=0}else{t=s.bv()
this.cy=t}}return t},
C:function(a){return this.z},
eM:function(a,b){var t,s,r,q
t=a.a2()
this.a=t
if(t!==67324752)throw H.l(new T.da("Invalid Zip Signature"))
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
this.z=a.bU(s)
this.Q=a.cI(r).bv()
this.cx=a.cI(this.ch.x)
if((this.c&8)!==0){q=a.a2()
if(q===134695760)this.r=a.a2()
else this.r=q
this.x=a.a2()
this.y=a.a2()}}}
T.pB.prototype={
C:function(a){return this.cy}}
T.py.prototype={
fS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.FY(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.D],p=0;p<t.length;t.length===r||(0,H.cj)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.cS()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fB(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dT(k,"$isq",q,"$asq")){j.cy=k
j.cx=T.tb(k,0,null,0)}else if(k instanceof T.hb){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hb(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.fZ(m,"/")
j.y=n.r
s.push(j)}return new T.fA(s,null)}}
T.m4.prototype={
eG:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ap(1,this.b)
r=H.cx(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.x(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.x(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iy.prototype={
dj:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.U()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.as()
if(!(r<s+q))break
if(!this.fn())break}},
fn:function(){var t,s,r,q,p,o,n,m,l
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
if(n!==0&&n!==(s^65535)>>>0)H.ba(new T.da("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.ak()
r=q-r
if(n>s-r)H.ba(new T.da("Input buffer is broken"))
m=t.aQ(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.ak()
if(typeof l!=="number")return H.as(l)
if(typeof s!=="number")return s.U()
t.b=s+(r-(q-l))
this.b.hN(m)
break
case 1:this.dc(this.f,this.r)
break
case 2:this.fo()
break
default:throw H.l(new T.da("unknown BTYPE: "+o))}return(p&1)===0},
au:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.U()
if(typeof r!=="number")return r.as()
if(r>=q+p)throw H.l(new T.da("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.x(q,r)
o=q[r]
this.c=(this.c|C.a.at(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ap(1,a)
this.c=C.a.dC(t,a)
this.d=s-a
return(t&r-1)>>>0},
cg:function(a){var t,s,r,q,p,o,n,m,l,k
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
this.c=C.a.dC(r,k)
this.d=q-k
return l&65535},
fo:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.au(5)+257
s=this.au(5)+1
r=this.au(4)+4
q=H.cx(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.x(C.E,o)
n=C.E[o]
m=this.au(3)
if(n>=q)return H.x(p,n)
p[n]=m}l=T.f2(p)
k=new Uint8Array(H.cx(t))
j=new Uint8Array(H.cx(s))
i=this.da(t,l,k)
h=this.da(s,l,j)
this.dc(T.f2(i),T.f2(h))},
dc:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cg(a)
if(s>285)throw H.l(new T.da("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.f5()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.x(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.x(C.C,p)
o=C.C[p]+this.au(C.V[p])
n=this.cg(b)
if(n<=29){if(n>=30)return H.x(C.z,n)
m=C.z[n]+this.au(C.U[n])
for(r=-m;o>m;){t.cN(t.cW(r))
o-=m}if(o===m)t.cN(t.cW(r))
else t.cN(t.aQ(r,o-m))}else throw H.l(new T.da("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.ak();--r
t.b=r
if(r<0)t.b=0}},
da:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cg(b)
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
default:if(q>15)throw H.l(new T.da("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.x(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kl.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Math Book",H.a([$.L,$.Z,$.aF],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Giant Map",H.a([$.L,$.Z],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Microscope",H.a([$.E,$.Z,$.b6],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Star Chart",H.a([$.L,$.Z],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("History Book",H.a([$.L,$.Z],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Radioactive Rock",H.a([$.c0,$.aH],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Compass",H.a([$.E,$.Z],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.h3,$.m)
q.i(0,$.bc,$.m)
q.i(0,$.eY,$.k)
q.i(0,$.b0,$.K)
q.i(0,$.cA,$.k)
p=$.n
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.u
o=o+n+" to stop "
m=$.J
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.ES
n=[U.b]
q.i(0,new R.a1("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
q.i(0,new R.a1("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.u+" to stop "+$.J+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.wB(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
p="The "+m+" finds a massive library, filled with books. The "
l=$.u
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.z
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a1("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.fg(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.eV,$.K)
s.i(0,$.cA,$.m)
p=$.n
o="The "+p+"  is approached by a "
l=$.u
s.i(0,new R.a1("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.J+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.u
s.i(0,new R.a1("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.J+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.er(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
s.i(0,new R.a1("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.u+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fg(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.eV,$.K)
t.i(0,$.cA,$.m)
t.i(0,$.bZ,$.K)
t.i(0,$.rZ,$.K)
r=$.n
q="The "+r+"  is approached by a "
p=$.u
q=q+p+" who offers them a grant to study "
o=$.ad
t.i(0,new R.a1("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.J+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fg(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.u
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.J
r=r+p+".  It is up to the "
q=$.n
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ad
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.EY
t.i(0,new R.a1("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.e3(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
t.i(0,new R.a1("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.J+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.u+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aO)}}
K.bU.prototype={}
A.rr.prototype={
$1:function(a){var t,s,r,q,p
t=window
s="scrollY" in t?C.d.b7(t.scrollY):C.d.b7(t.document.documentElement.scrollTop)
r=window.screen.height
if(typeof r!=="number")return H.as(r)
q=1500-r
if(q>s){t=document.querySelector("body").style
p="center -"+C.a.C(s)+"px"
t.backgroundPosition=p}else{t=document.querySelector("body").style
p="center -"+C.a.C(q)+"px"
t.backgroundPosition=p}},
$S:function(){return{func:1,args:[W.T]}}}
L.fC.prototype={
E:function(){var t,s
t=Q.F(null,null,A.a_)
s=A.j("Perfectly Generic Object",H.a([],[G.Y]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.k)
q.i(0,$.bc,$.K)
q.i(0,$.dI,$.k)
q.i(0,$.bZ,$.m)
q.i(0,$.dZ,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.z
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.Q("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.G(s,q,null),$.au)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.eW,$.k)
s.i(0,$.ee,$.K)
s.i(0,$.eg,$.m)
s.i(0,$.cR,$.k)
s.i(0,$.cc,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.z
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! "
s.i(0,new R.Q("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.W(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(q,s,null),$.au)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.bc,$.K)
t.i(0,$.c4,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.J
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.z
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.cg+". The "+r+" has won! "
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.ue(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
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
t.i(0,new R.Q("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.W(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(s,t,null),$.au)},
C:function(a){return this.Q},
W:function(a,b,c,d,e){var t=this.Q
this.r=new X.ii("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.i2]),H.a([],[M.h_]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.E()
this.F()
t=this.e
if($.$get$ko().a_(0,t))H.ba("Duplicate aspect id for "+this.C(0)+": "+t+" is already registered for "+J.cJ($.$get$ko().n(0,t))+".")
$.$get$ko().i(0,t,this)},
gK:function(a){return this.Q}}
L.a8.prototype={}
M.kq.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Barbells",H.a([$.ab,$.c6,$.E],s),null,!1,"Strength Building Metal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Basketball",H.a([$.ei,$.c7],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Baseball Bat",H.a([$.jf,$.X],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rubber Ball",H.a([$.ei,$.c7],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.aV,$.a7],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Hockey Stick",H.a([$.jf,$.X,$.dd],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Trophy",H.a([$.E,$.be],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Boxing Glove",H.a([$.vN,$.c7],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Yoga Mat",H.a([$.c7,$.b4],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.e_,$.K)
q.i(0,$.bV,$.m)
q.i(0,$.cR,$.K)
p=$.n
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.u
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.J+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.a1("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.u
q.i(0,new R.a1("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.J+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e3(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
n="The "+m+"  wanders into a bunch of "
p=$.u
q.i(0,new R.a1("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hB(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.e_,$.m)
t.i(0,$.eZ,$.m)
t.i(0,$.bV,$.m)
s=$.n
r="The "+s+" finds a team of underdog "
p=$.u
t.i(0,new R.a1("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.wB(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
s="A group of "+p+"s approach the "
r=$.n
s=s+r+". Apparently their sports team lost their coach to the "+$.z+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.J
t.i(0,new R.a1("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e3(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.u
p="A group of "+k+"s approach the "
r=$.n
t.i(0,new R.a1("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.z+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ad+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,t,null),$.aO)}}
U.ku.prototype={
P:function(a,b){var t=0,s=P.bq(),r,q,p,o
var $async$P=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:q=$.$get$v3()
p=q.createBufferSource()
o=p
t=3
return P.cI(J.xQ(q,b),$async$P)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$P,s)},
$asdl:function(){return[P.eN]},
$asc5:function(){return[P.eN,P.bg]}}
U.mV.prototype={
aN:function(a){return"audio/mpeg"}}
U.np.prototype={
aN:function(a){return"audio/ogg"}}
U.oF.prototype={
P:function(a,b){var t=0,s=P.bq(),r,q,p
var $async$P=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:q=W.yC(b)
p=new W.hQ(q,"canplaythrough",!1,[W.T])
t=3
return P.cI(p.gad(p),$async$P)
case 3:r=q
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$P,s)},
$asig:function(){return[W.eO]},
$asc5:function(){return[W.eO,P.B]}}
U.oG.prototype={}
U.oH.prototype={}
O.kw.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Cod Piece",H.a([$.P,$.a0,$.aU,$.N,$.X],s),"God damn it, MI. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Poisoned Candy",H.a([$.th,$.N,$.bL],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Lyre",H.a([$.aP,$.X,$.bj,$.N,$.a9],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Snare Trap",H.a([$.P,$.aP,$.N,$.bd],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.cy,$.k)
t.i(0,$.h6,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.dr,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.eU,$.k)
r="After all the bullshit the "+$.z+" has put the native "
q=$.u
r=r+q+"s through, the "
p=$.n
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aW+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.J
m=[U.b]
t.i(0,new R.a6("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.y(),!1,!1,new Y.dL("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.u
n="A group of jubilant "+p+"s are following the "
q=$.n
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.J
t.i(0,new R.a6("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.z+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
t.i(0,new R.a6("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.z+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.y(),!1,!1,new Y.kK("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.n
q=q+r+" organizes a huge festival for all the "
p=$.u
t.i(0,new R.bv("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.oU.prototype={
P:function(a,b){var t=0,s=P.bq(),r
var $async$P=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$P,s)},
$asey:function(){return[P.B]},
$asc5:function(){return[P.B,P.B]}}
Y.nO.prototype={
aN:function(a){return"application/octet-stream"},
P:function(a,b){var t=0,s=P.bq(),r
var $async$P=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$P,s)},
$asdl:function(){return[P.bg]},
$asc5:function(){return[P.bg,P.bg]}}
L.kA.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Bear",H.a([$.aV,$.b7,$.R],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Thought",H.a([$.tf,$.w8,$.f5],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Doorway",H.a([$.f5,$.R],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.cb,$.k)
t.i(0,$.d0,$.m)
t.i(0,$.bV,$.m)
t.i(0,$.eg,$.A)
r=$.n
q="The "+r+" hears a "+$.u+" "+$.J+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.z
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.i(0,new R.Q("Revenge on the Denizen",!1,[new U.b(q),new U.b(p),new U.b(n),new U.W(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.au)}}
T.kC.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Mystical Vial of Blood",H.a([$.b6,$.bj,$.R,$.aY],s),null,!1,"Vial of Not-ABs Oil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bananaphone",H.a([$.aC,$.bj,$.R,$.b5],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Friendship Bracelet",H.a([$.P,$.bj,$.R,$.aY,$.hd],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bonding Manacles",H.a([$.E,$.bd,$.R,$.aY,$.hd,$.aT],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Friendship Stairs",H.a([$.X,$.tq,$.bj,$.aY,$.R,$.a0],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.k)
q.i(0,$.t2,$.k)
q.i(0,$.bZ,$.m)
p=$.n
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.u
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ad+" and some boondollars in compensation."
n=this.x2
k=[U.b]
q.i(0,new R.a1("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.e3(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.u
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.J+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.z
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.n
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cg+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.Q("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.W(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.au)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cR,$.k)
s.i(0,$.cz,$.K)
s.i(0,$.b0,$.K)
s.i(0,$.is,$.k)
s.i(0,$.cw,$.K)
p=$.n
o="The "+p+"  and the "
m=$.et
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.z
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.Q("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.W(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.es(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.av)
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
p=$.EP
s.i(0,new R.Q("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.W(l,h,o)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
o="The "+p+" learns of the "
h=$.aW
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.u
o=o+l+" explains that the "
j=$.z
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.Q("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.W(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.u
h=h+i+" on "+$.aW+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.f0+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a6("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.fg(),!1,!1,new Y.c_("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.u+" on "
m=$.aW
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.f0+" is now more popular with your friends than you are."
s.i(0,new R.a6("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.uf(),!1,!1,new Y.c_("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
m="The "+p+"  and the "
h=$.et
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.z
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.Q("Pale Shipping Dungeon",!1,[new U.b(m),new U.W(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.C(C.r)+".",o)],H.a([],k),R.es(),!1,!1,new Y.jw(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.av)
n.i(0,new X.G(q,s,null),$.au)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.bc,$.K)
t.i(0,$.c4,$.m)
r="In the wake of the defeat of the "+$.z+" it becomes really how isolated the individual "
q=$.u
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.n
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.f0+" to kick your ass, but luckily they have several."
t.i(0,new R.a6("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.e3(),!1,!1,new Y.c_("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.n
q="The "+o+" learns that two prominent "
p=$.u
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.z
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.cg+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.J+"ing. "
t.i(0,new R.Q("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.W(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.au)}}
T.kF.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Pan's Pipe",H.a([$.a9,$.X,$.bj,$.R],s),null,!1,"Smonkin Weeds Pipe")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skeleton Key",H.a([$.b9,$.R],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Inspector's Fan",H.a([$.a7,$.E,$.bj,$.R],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Jet Pack",H.a([$.aD,$.E,$.aV,$.R,$.a0],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.c4,$.m)
q.i(0,$.eZ,$.k)
q.i(0,$.b0,$.m)
p=$.n
o="The "+p+" tries posting a letter through the "
n=$.ad
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
m=$.ET
i=[U.b]
q.i(0,new R.Q("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.W(j,p,l)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.G(s,q,null),$.au)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.bc,$.k)
s.i(0,$.eZ,$.m)
s.i(0,$.b0,$.m)
s.i(0,$.bV,$.m)
s.i(0,$.c4,$.m)
p=$.n
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ad
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.u
k=l+k+" fields. The "+k+"s "+$.J+"ing is so joyful it's literally deafening. "
l=$.z
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.Q("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.W(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.au)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cc,$.k)
t.i(0,$.lE,$.k)
t.i(0,$.eZ,$.K)
t.i(0,$.c4,$.K)
r=$.n
q="The "+r+" is chilling in a "+$.u+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.z
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ad
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aW+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.cg+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.Q("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.au)}}
M.fJ.prototype={
ek:function(a){var t=this.a
if(!t.a_(0,a))return
return t.n(0,a)}}
Y.kH.prototype={
P:function(a,b){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i
var $async$P=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:q=J.eK(b,"\n")
p=P.B
o=P.cD(p,p)
n=P.cD(p,[P.ev,P.B])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.d8(k).be(k).length===0)m=null
else if(m==null)m=C.c.be(k)
else{j=C.c.be(k)
i=C.c.L(m,0,C.c.e0(m,$.$get$v7())+1)+j
o.i(0,i,m)
if(!n.a_(0,m))n.i(0,m,P.a5(null,null,null,p))
J.xJ(n.n(0,m),i)}}r=new M.fJ(o,n)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$P,s)},
$asey:function(){return[M.fJ]},
$asc5:function(){return[M.fJ,P.B]}}
A.kM.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Colonel Sassacre's Daunting Text ",H.a([$.L,$.ab,$.b5,$.c6],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wise Guy Book",H.a([$.L,$.b5],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Beagle Puss",H.a([$.b6,$.b5],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Novelty Microphone",H.a([$.aV,$.a7,$.b5],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Banana",H.a([$.aC,$.b5],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fake Flower",H.a([$.P,$.b5],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Trick Handcuffs",H.a([$.E,$.b5],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.m)
q.i(0,$.cv,$.k)
q.i(0,$.bV,$.m)
p=$.n
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.u
o=o+n+"s are too scared to even "+$.J+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.z+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.a1("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.e_,$.K)
s.i(0,$.bV,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.cy,$.k)
o=$.n
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aW
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.u
k=k+j+"s let out a braying "+$.J+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.EW
s.i(0,new R.a1("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cB,$.K)
t.i(0,$.c3,$.m)
t.i(0,$.cv,$.k)
t.i(0,$.bV,$.m)
t.i(0,$.il,$.m)
r=$.n
q="The "+r+"  is approached by a Crafty "
o=$.u
q=q+o+" who offers them a magical "
n=$.ad
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.J
t.i(0,new R.a1("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aO)}}
S.bF.prototype={
C:function(a){return H.C(new H.dQ(H.kd(this),null))+": "+this.c},
gK:function(a){return this.c}}
S.i3.prototype={}
S.m1.prototype={}
M.kY.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Can of Spray Paint",H.a([$.aI,$.E],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sensible Chuckles Magazine",H.a([$.L,$.aw,$.b5,$.aF],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Gentleman's Razor",H.a([$.tx,$.E,$.aG],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("How To Draw Manga",H.a([$.L,$.aw,$.aF],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Painting of a Horse Boxing a Football Player",H.a([$.aI,$.aA,$.L],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Collection of Classical Works",H.a([$.aw,$.L],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Documentary on Horses",H.a([$.aw,$.aM,$.aA],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Paint Set",H.a([$.aI,$.aw],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shaving Cream",H.a([$.aD,$.aw,$.E],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Classy Suit",H.a([$.P,$.aw],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("The Fatherly Gent's Shaving Almanac ",H.a([$.L,$.aw,$.aF],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.m)
q.i(0,$.cA,$.k)
q.i(0,$.b0,$.m)
p=$.n
o="The "+p+" visits a beautiful "
n=$.ad
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.u
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.z+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.J+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.a1("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.e_,$.K)
s.i(0,$.bV,$.m)
s.i(0,$.cv,$.K)
s.i(0,$.bc,$.m)
s.i(0,$.cy,$.k)
o=$.n
n="The "+o+" finds a troupe of dejected looking "
l=$.u
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aW
l=l+n+" "
k=$.ad
s.i(0,new R.a1("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.J+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.h6,$.K)
t.i(0,$.cw,$.K)
t.i(0,$.eU,$.K)
t.i(0,$.c3,$.K)
t.i(0,$.bc,$.m)
t.i(0,$.b0,$.m)
r=$.n
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.J
q=q+o+"ingworth, "
n=$.u
q=q+n+" heiress to the "+$.ad+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.EM
t.i(0,new R.a1("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aO)}}
T.l3.prototype={}
V.l5.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Trendy Fabric",H.a([$.aI,$.P],s),null,!1,"Weird Tasting Candy Paper")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Necklace",H.a([$.aI,$.tn,$.hd],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sewing Needle",H.a([$.E,$.tt,$.aZ],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jd
r=A.j("Broom",H.a([r,$.X,$.ab,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rolling Pin",H.a([$.X,$.tA,$.ab],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Velvet Pillow",H.a([$.P,$.b4,$.bj,$.aI,$.e1],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Yarn Ball",H.a([$.aI,$.P],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Refrigerator",H.a([$.aT,$.c6,$.E,$.bk],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Photo Album",H.a([$.aI,$.L],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Cubes",H.a([$.bk],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cast Iron Skillet",H.a([$.E,$.aD,$.ab,$.c6,$.tm],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Failed Dish",H.a([$.bL],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dr Pepper BBQ Sauce",H.a([$.bL],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Potted Plant",H.a([$.aI,$.bP,$.b2],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Chicken Leg",H.a([$.aC,$.bh,$.b9],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Juicy Steak",H.a([$.aC,$.bh],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Wedding Cake",H.a([$.aI,$.aC,$.aY],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.m)
q.i(0,$.cz,$.m)
q.i(0,$.cw,$.K)
p=$.n
o="The "+p+" is visited by a Beautiful "
n=$.u
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ad
l=[U.b]
q.i(0,new R.a1("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.J+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.y(),!1,!1,new Y.i5("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cw,$.k)
s.i(0,$.bV,$.m)
s.i(0,$.eU,$.k)
s.i(0,$.dr,$.m)
s.i(0,$.bc,$.k)
p=$.n
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ad
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.u
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.J+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.EU
s.i(0,new R.a1("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.ec,$.k)
t.i(0,$.bc,$.m)
t.i(0,$.dp,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.is,$.k)
r=$.n
q="The "+r+" finds a loom, and a Wizened "
p=$.u
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ad
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.J+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a1("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.aO)}}
U.l6.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aF,$.a7,$.L,$.aP,$.R,$.a0],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Egg Timer",H.a([$.aM,$.bj,$.R,$.aP],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skull Timer",H.a([$.b9,$.bj,$.R,$.aP],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Poison Flask",H.a([$.b6,$.R,$.bL],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Gorgon Head",H.a([$.b6,$.R,$.bk,$.aP,$.bd,$.bR,$.b8],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Obituary",H.a([$.aT,$.b8,$.aP,$.L,$.R],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.dI,$.k)
q.i(0,$.d_,$.m)
q.i(0,$.eZ,$.K)
q.i(0,$.bc,$.K)
q.i(0,$.bZ,$.m)
p=$.n
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.u
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ad
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.z
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.Q("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.au)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dI,$.k)
s.i(0,$.d_,$.m)
s.i(0,$.eh,$.av)
s.i(0,$.ed,$.m)
s.i(0,$.rZ,$.m)
s.i(0,$.cZ,$.m)
s.i(0,$.d_,$.m)
s.i(0,$.bc,$.K)
s.i(0,$.bZ,$.m)
s.i(0,$.dq,$.m)
p=$.n
o="The "+p+" has found a group of Violent "
m=$.u
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aW
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.J+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.z
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.cg+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.Q("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.er(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ad
p=p+l+"s alike. "
l=$.u+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.z
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.cg+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.Q("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.W(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.au)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.bZ,$.k)
t.i(0,$.vr,$.av)
t.i(0,$.h3,$.K)
r=$.n
q="The "+r+" finds a small dungeon bearing the image of "
p=$.z
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.u+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.W(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.er(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
k=$.n
p="The "+k+" learns from one of their "
r=$.u
p=p+r+"s that there is an ancient prophecy of a "
l=$.aW
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ad
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.z
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.cg+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.EL
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.W(o,k,q)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.au)}}
Z.l7.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Dream Diary",H.a([$.L,$.aF,$.R],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Interlocking Brick",H.a([$.aM,$.bj,$.ab,$.R,$.a0],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Art Supplies",H.a([$.aM,$.bj,$.R],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ec,$.m)
q.i(0,$.dp,$.k)
q.i(0,$.b0,$.m)
q.i(0,$.is,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ad
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wn
k=[U.b]
q.i(0,new R.Q("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.G(s,q,null),$.au)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.m)
s.i(0,$.dp,$.k)
s.i(0,$.d1,$.m)
s.i(0,$.cb,$.m)
s.i(0,$.dF,$.m)
s.i(0,$.cv,$.k)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.Q("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(q,s,null),$.au)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d0,$.k)
t.i(0,$.h2,$.m)
t.i(0,$.b0,$.m)
t.i(0,$.cb,$.k)
t.i(0,$.dF,$.k)
t.i(0,$.dp,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.Q("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aW+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.J+"ing in reverse. Another is in a "+$.ad+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(s,t,null),$.au)}}
X.ii.prototype={}
X.i2.prototype={
$S:function(){return{func:1,v:true,args:[[P.q,M.h_]]}}}
M.h_.prototype={}
U.lz.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Fluthulu Poster",H.a([$.P,$.b4,$.b8,$.bm],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Scalemate",H.a([$.P,$.b4,$.b8],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Bone Shield",H.a([$.aT,$.aM,$.b9,$.f6,$.aU],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Ice Sword",H.a([$.aM,$.vT,$.f7,$.aU],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Zombie Mask",H.a([$.aM,$.bR,$.bh,$.b8],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Vampire Romance Novel",H.a([$.aF,$.L,$.aN,$.b8],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizardy Herbert",H.a([$.L,$.a2,$.ab],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Complacency of the Learned",H.a([$.L,$.a2,$.ab],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Grimoire for Summoning the Zoologically Dubious ",H.a([$.L,$.a2,$.bR,$.b8,$.bm],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizard Statue",H.a([$.aT,$.aH,$.a2,$.ab,$.aU],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Mermaid Fountain",H.a([$.aT,$.tj,$.a2,$.ab,$.aU],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.h0,$.av)
q.i(0,$.cz,$.m)
q.i(0,$.c4,$.m)
q.i(0,$.cB,$.K)
p=$.n
o="The "+p+" learns of a Beautiful "
n=$.u
o=o+n+" who has been kidnapped by the vial "
m=$.z
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ad
j=[U.b]
q.i(0,new R.a1("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.k)
s.i(0,$.cZ,$.k)
s.i(0,$.io,$.m)
s.i(0,$.bZ,$.k)
s.i(0,$.eh,$.k)
s.i(0,$.h5,$.m)
o=$.n
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.u
s.i(0,new R.a1("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.k)
t.i(0,$.ir,$.m)
t.i(0,$.bZ,$.k)
t.i(0,$.dG,$.m)
t.i(0,$.eV,$.m)
t.i(0,$.t2,$.m)
r=$.n
q="The "+r+" finds a group of three "
o=$.u
q=q+o+"s "
n=$.J
t.i(0,new R.a1("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aO)}}
N.a4.prototype={
C:function(a){return H.C(new H.dQ(H.kd(this),null))+": "+H.C(this.b)}}
O.c5.prototype={
aY:function(a){var t=0,s=P.bq(),r,q=this,p
var $async$aY=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cI(q.aP(a),$async$aY)
case 3:r=p.P(0,c)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$aY,s)}}
O.dl.prototype={
b4:function(a){var t=0,s=P.bq(),r
var $async$b4=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$b4,s)},
ct:function(a){var t=0,s=P.bq(),r,q=this
var $async$ct=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.yD([J.uU(a)],q.aN(0),null))
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$ct,s)},
aP:function(a){var t=0,s=P.bq(),r,q=this,p,o
var $async$aP=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:p=P.bg
o=new P.bi(0,$.aB,null,[p])
W.vz(a,null,q.aN(0),null,null,"arraybuffer",null,null).aZ(new O.kB(new P.dS(o,[p])))
r=o
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$aP,s)},
$asc5:function(a){return[a,P.bg]}}
O.kB.prototype={
$1:function(a){this.a.az(0,H.ke(J.xV(a),"$isbg"))},
$S:function(){return{func:1,args:[W.e0]}}}
O.ey.prototype={
b4:function(a){var t=0,s=P.bq(),r,q,p,o,n
var $async$b4=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:a.toString
q=H.cN(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hA(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$b4,s)},
aP:function(a){var t=0,s=P.bq(),r
var $async$aP=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:r=W.vy(a,null,null)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$aP,s)},
$asc5:function(a){return[a,P.B]}}
O.ig.prototype={
aP:function(a){var t=0,s=P.bq(),r
var $async$aP=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$aP,s)},
b4:function(a){return H.ba("Element format doesn't read from buffers")},
$asc5:function(a){return[a,P.B]}}
V.lP.prototype={
aN:function(a){return"font/opentype"},
P:function(a,b){var t=0,s=P.bq(),r
var $async$P=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:t=3
return P.cI(A.hm("scripts/Rendering/text/opentype.min.js",!1),$async$P)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$P,s)},
$asdl:function(){return[R.h7]},
$asc5:function(){return[R.h7,P.bg]}}
Z.ih.prototype={}
E.iw.prototype={}
E.no.prototype={}
E.M.prototype={
C:function(a){var t="["+J.cJ(this.a)+" x "+H.C(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fD.prototype={
C:function(a){var t="[(Random from "+P.tE(this.d,"(",")")+") x "+H.C(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kp.prototype={
C:function(a){return"[Stats assigned from player Interests x"+H.C(this.b)+"]"}}
N.lT.prototype={}
Y.lV.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("How to Teach Your Friends to Hack SBURB",H.a([$.aF,$.N,$.L,$.a0,$.hf],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Unstable Domino",H.a([$.aM,$.N,$.aP],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Exposed Thread",H.a([$.P,$.N,$.aP],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Teetering Plate",H.a([$.mo,$.N,$.aP],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.lG,$.m)
t.i(0,$.c4,$.k)
t.i(0,$.dq,$.K)
t.i(0,$.dc,$.k)
r=$.u
q="An excited "+r+" runs up to the "
p=$.n
q=q+p+" and starts to "
o=$.J
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aW
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ad
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.z
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.Q("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.W(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o=$.n
t.i(0,new R.a6("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.z+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.u+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.y(),!1,!1,new Y.dL("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.u
j="Now that the "+o+"s are free from the reign of "+$.z+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.n
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.J
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aW+" Quest Online: The "+$.ad+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a6("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.n
p=p+o+" shows the "
r=$.u
t.i(0,new R.bv("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.J+"s in time to stop them.    ")],H.a([],i),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.lW.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Sherpa Parka",H.a([$.bk,$.N,$.ce],s),"Clearly the best class uses this.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Guide Book",H.a([$.a0,$.bk,$.aF,$.L,$.N,$.Z],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Whistle",H.a([$.E,$.N,$.aV],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Announcement System",H.a([$.E,$.N,$.a7,$.Z],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.lG,$.k)
t.i(0,$.c4,$.k)
t.i(0,$.dq,$.m)
t.i(0,$.dc,$.k)
r="Now that the "+$.z+" is out of the way, a group of "
q=$.u
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.n
o=[U.b]
t.i(0,new R.a6("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.J+", but they are happy.")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.n
t.i(0,new R.bv("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.u+" "+$.J+"s in time to stop them.    ")],H.a([],o),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
this.x.i(0,new X.G(s,t,null),$.bM)}}
T.lX.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Doll",H.a([$.mo,$.aI,$.aE,$.R],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Puppet",H.a([$.X,$.aE,$.R,$.a0,$.b8],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mirror",H.a([$.ts,$.R],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.L,$.R,$.aN],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Shades",H.a([$.aA,$.b6,$.R],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ed,$.K)
q.i(0,$.ef,$.k)
q.i(0,$.bV,$.m)
p=$.n
o="The "+p+", guided by a "+$.u+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.z
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cg+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.Q("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.W(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=$.n
p="The "+j+" finds a Violent "
l=$.u
p=p+l+". A Magical Talking "
k=$.ad
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.z
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.Q("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.W(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.uf(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.G(s,q,null),$.au)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cv,$.k)
s.i(0,$.io,$.k)
s.i(0,$.eZ,$.m)
s.i(0,$.bZ,$.k)
s.i(0,$.cw,$.m)
s.i(0,$.dq,$.K)
p=$.n
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ad
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.z
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.cg+". The "+p+" is victorious. "
s.i(0,new R.Q("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j="Now that the "+$.z+" has been defeated, a Copy "
p=$.n
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.u
j=j+k+"s "
l=$.J
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.f0+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a6("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.e3(),!1,!1,new Y.c_("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.z
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.Q("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.W(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.er(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.G(q,s,null),$.au)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.im,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.lF,$.k)
t.i(0,$.eU,$.m)
t.i(0,$.h5,$.k)
t.i(0,$.cz,$.m)
t.i(0,$.ef,$.K)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.u
t.i(0,new R.Q("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aW+" laws put in place by "+$.z+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.n
p="The "+r+" finds a weeping Broken Hearted "
q=$.u
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aW
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.J
t.i(0,new R.a6("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hB(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.n
m="The "+q+"  and the "
r=$.et
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.z
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.Q("Flushed Shipping Dungeon",!1,[new U.b(m),new U.W(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.C(C.r)+".",n)],H.a([],i),R.es(),!1,!1,new Y.iu(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.av)
n=$.n
r="The "+n+"  and the "
q=$.et
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.z
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.Q("Pitched Shipping Dungeon",!1,[new U.b(r),new U.W(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.C(C.r)+".",m)],H.a([],i),R.es(),!1,!1,new Y.jy(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.av)
h.i(0,new X.G(s,t,null),$.aO)}}
B.lY.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Family Ashes",H.a([$.aT,$.aD,$.N,$.aP,$.bW],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Last Will and Testament",H.a([$.a0,$.L,$.N,$.aP,$.ml],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Grooming Guide",H.a([$.aF,$.N,$.aw],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Powered Attorney",H.a([$.vI,$.N,$.mg,$.ml],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Executer's Ax",H.a([$.td,$.N,$.aG,$.ml],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.cc,$.m)
r=$.z
q="With the death of the "+r+", it now falls to the "
p=$.n
o=[U.b]
t.i(0,new R.a6("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.u+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
r="The "+$.z+" has released the frogs into the "
p=$.n
t.i(0,new R.bv("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
this.x.i(0,new X.G(s,t,null),$.bM)}}
V.lZ.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Hippo",H.a([$.aV,$.b7,$.R],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ranting",H.a([$.tf,$.aV,$.f5],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Vent",H.a([$.E,$.ti],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.dF,$.K)
t.i(0,$.d0,$.m)
t.i(0,$.t_,$.m)
t.i(0,$.h2,$.m)
r=$.n
q="The "+r+" hears the screaming voice of the "
p=$.z
q=q+p+", and when they walk into a consort village, a "
o=$.u
q=q+o+" "
n=$.J
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.Q("Stop the Screamening",!1,[new U.b(q),new U.b(n),new U.b(o),new U.W(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.au)}}
X.m0.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Wand",H.a([$.X,$.R,$.a2,$.b7],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Angel Feather",H.a([$.b7,$.bu,$.R,$.b1,$.a9,$.a0,$.a2],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Never Ending Story DVD",H.a([$.bQ,$.tq,$.R,$.a2,$.b5,$.b7],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Candle",H.a([$.b7,$.b1,$.R,$.aD],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Figurine",H.a([$.aM,$.b1,$.R,$.b7],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.rY,$.k)
q.i(0,$.cz,$.m)
q.i(0,$.b0,$.k)
q.i(0,$.cb,$.k)
p=$.n
o="The "+p+" is just minding their own business when they see a wizened "
n=$.u
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.J+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.z
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ad
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.EO
i=[U.b]
q.i(0,new R.Q("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(k,p,j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.au)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.k)
s.i(0,$.il,$.m)
s.i(0,$.d1,$.k)
p=$.n
o="The "+p+"  is approached by a Crafty "
m=$.u
o=o+m+" who offers them a magical "
l=$.ad
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.z
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.Q("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.au)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.dr,$.K)
t.i(0,$.cA,$.k)
t.i(0,$.cb,$.k)
r=$.n
q="The "+r+" finds a grey town of despondant "
p=$.u
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.z
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ad
t.i(0,new R.Q("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.W("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.n
o="The "+r+" discovers a group of "
p=$.u
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.z
t.i(0,new R.Q("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.W("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hB(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.G(s,t,null),$.au)}}
X.m5.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Footstick",H.a([$.dd,$.N,$.jg,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURBSim Cheating Guide",H.a([$.aF,$.N,$.hf,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Body Pillow of Shogun",H.a([$.P,$.N,$.e1,$.mk,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Macrobots",H.a([$.tz,$.N,$.mg],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.cB,$.k)
t.i(0,$.d1,$.k)
t.i(0,$.dp,$.k)
t.i(0,$.dc,$.k)
t.i(0,$.ec,$.k)
t.i(0,$.dF,$.k)
t.i(0,$.h4,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.ug(),!1,!1,new Y.dL("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cg+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wz(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dL("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.av)
m=$.n
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.av)
m="A wizened "+$.u+" tells the "
r=$.n
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wA(),!1,!1,new Y.c_("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a6("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.K)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bv("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
this.x.i(0,new X.G(s,t,null),$.au)}}
Q.m6.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Yardstick",H.a([$.dd,$.N,$.jg,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURB Hacking Guide",H.a([$.aF,$.N,$.hf,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Body Pillow of Hussie",H.a([$.P,$.N,$.e1,$.mk,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.m9.prototype={
aY:function(a){var t=0,s=P.bq(),r,q,p
var $async$aY=P.bA(function(b,c){if(b===1)return P.bx(c,s)
while(true)switch(t){case 0:q=W.vA(null,a,null)
p=new W.hQ(q,"load",!1,[W.T])
t=3
return P.cI(p.gad(p),$async$aY)
case 3:r=q
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$aY,s)},
$asdl:function(){return[W.f3]},
$asc5:function(){return[W.f3,P.bg]}}
Q.nE.prototype={
aN:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bq(),r,q=this,p,o,n
var $async$P=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cI(q.ct(b),$async$P)
case 3:p=n.vA(null,d,null)
o=new W.hQ(p,"load",!1,[W.T])
t=4
return P.cI(o.gad(o),$async$P)
case 4:r=p
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$P,s)}}
Q.nB.prototype={
aN:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bq()
var $async$P=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:throw H.l("Read NYI")
return P.by(null,s)}})
return P.bz($async$P,s)},
$asdl:function(){return[Q.jx]},
$asc5:function(){return[Q.jx,P.bg]}}
B.hc.prototype={
E:function(){var t,s
t=Q.F(null,null,A.a_)
s=A.j("Perfectly Generic Object",H.a([],[G.Y]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.k)
q.i(0,$.bc,$.K)
q.i(0,$.dI,$.k)
q.i(0,$.bZ,$.m)
q.i(0,$.dZ,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.eW,$.k)
s.i(0,$.ee,$.K)
s.i(0,$.eg,$.m)
s.i(0,$.cR,$.k)
s.i(0,$.cc,$.K)
p=$.n
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.bc,$.K)
t.i(0,$.c4,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
t.i(0,new R.a1("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
r="The "+p+" learns that all of the local "
q=$.u
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.J
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ue(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
n.i(0,new X.G(s,t,null),$.aO)},
C:function(a){return this.ch},
gK:function(a){return this.ch}}
A.a_.prototype={
ay:function(a,b){var t=b.gbs()-this.gbs()
if(t>0)t=1
else if(t<0)t=-1
return C.d.b7(t)},
gfU:function(){var t,s,r,q,p,o
t=H.a([],[P.B])
s=new A.jA(null,null)
s.cR(this.f.a)
if(this.r===0)return t
r=P.de(G.yK(this.f),!0,G.Y)
C.b.cU(r,new A.ms())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.cj)(r),++p){o=r[p]
if(!(o instanceof G.ar||o.gdN().length===0))t.push(" "+Y.GL(s.hr(o.gdN())))}return t},
gbs:function(){var t,s,r
for(t=this.f,s=new P.dw(t,t.r,null,null,[null]),s.c=t.e,r=0;s.I();)r+=s.d.gbs()
return r},
gfL:function(){var t=this.f
return new H.hN(t,new A.mr(),[H.O(t,0)])},
gh3:function(){var t,s,r,q,p
for(t=this.gfU(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.cj)(t),++q)r+=t[q]+" "
return r+this.d},
C:function(a){return this.gh3()},
M:function(a,b,c,d,e){var t,s,r
t=P.tQ(b,null)
this.f=t
if(t.a===0)t.h(0,$.f5)
s=P.tQ(this.gfL(),null)
for(t=new P.dw(s,s.r,null,null,[null]),t.c=s.e;t.I();){r=t.d
this.f.bJ(0,r.gez())
this.f.an(0,r)}$.$get$we().push(this)},
$isbE:1,
$asbE:function(){return[A.a_]}}
A.ms.prototype={
$2:function(a,b){return a.ge4()-C.a.b7(b.ge4())},
$S:function(){return{func:1,args:[G.Y,G.Y]}}}
A.mr.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.Y]}}}
Z.mz.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Juice Box",H.a([$.L,$.R,$.b7,$.aU],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Shogun Body Pillow",H.a([$.e1,$.b4,$.R],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.dF,$.av)
t.i(0,$.cz,$.m)
t.i(0,$.bV,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cb,$.k)
r=$.n
q="The "+r+" sees a floating sentient "
p=$.ad
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.u+" notices it, and starts "+$.J+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.z
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.b]
t.i(0,new R.Q("Talk to your Juice entity",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
r="The "+p+" is greeted by a young adolescent "
m=$.u
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.z
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.J
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.Q("Be The Wingman",!1,[new U.b(r),new U.b(l),new U.b(n),new U.W(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
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
t.i(0,new R.Q("Pilot The Mech",!1,[new U.b(m),new U.b(o),new U.b(n),new U.W(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.au)}}
N.mA.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Gavel",H.a([$.X,$.tp],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Caution Tape",H.a([$.aM,$.bd],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Deerstalker Hat",H.a([$.P,$.aI],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mystery Novel",H.a([$.L,$.aF],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dish Served Cold",H.a([$.bP,$.aC,$.bk],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Pony Pals: Detective Pony ",H.a([$.L,$.aF,$.aA],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Handcuffs",H.a([$.aT,$.E,$.bd],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.h0,$.K)
q.i(0,$.c3,$.m)
q.i(0,$.cA,$.K)
p=$.n
o="The "+p+" finds an elaborate courtroom full of "+$.J+"ing "
n=$.u
m=[U.b]
q.i(0,new R.a1("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ad+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c3,$.k)
s.i(0,$.dq,$.m)
s.i(0,$.cR,$.m)
p=$.n
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.u
l=o+l+" yells 'Stop that thief' in betwen "+$.J+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ad+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.EK
s.i(0,new R.a1("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.k)
t.i(0,$.cc,$.m)
t.i(0,$.cZ,$.K)
t.i(0,$.eh,$.m)
t.i(0,$.ed,$.m)
t.i(0,$.eX,$.m)
t.i(0,$.ip,$.m)
r=$.n
q="The "+r+" finds a crowd of "
p=$.J
q=q+p+"ing "
o=$.u
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.EX
t.i(0,new R.a1("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.aO)}}
S.mC.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Shining Armor",H.a([$.aT,$.mn,$.N,$.f6],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Excalibur",H.a([$.a0,$.mn,$.N,$.aZ,$.aG,$.f7],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Noble Steed",H.a([$.E,$.N,$.bh,$.aE],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Hero's Shield",H.a([$.aT,$.f6,$.N,$.mn],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.lD,$.k)
t.i(0,$.dH,$.k)
t.i(0,$.e_,$.k)
t.i(0,$.eX,$.k)
t.i(0,$.h0,$.m)
r="The "+$.z+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.n
p=[U.b]
t.i(0,new R.bv("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
q=$.z
r="Now that the "+q+" is defeated, the "
o=$.u
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.n
t.i(0,new R.a6("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.aW
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.z
n=n+q+". A Learned "+$.u+" explains that it can only be defeated by the Legendary "
r=$.ad
n=n+r+" Blade. The "
m=$.n
t.i(0,new R.a6("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
r="The volcanos of the land are weirdly active after the defeat of the "+$.z+". One begins to erupt near a "
m=$.u
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.J+"s, but not really doing anything to evacuate or save anyone. The "
o=$.n
t.i(0,new R.a6("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Q.mD.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Dream Diary",H.a([$.L,$.aF,$.R],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Interlocking Brick",H.a([$.aM,$.bj,$.ab,$.R,$.a0],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Art Supplies",H.a([$.aM,$.bj,$.R],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ec,$.m)
q.i(0,$.dp,$.k)
q.i(0,$.b0,$.m)
q.i(0,$.is,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ad
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wn
k=[U.b]
q.i(0,new R.Q("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.G(s,q,null),$.au)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.m)
s.i(0,$.dp,$.k)
s.i(0,$.d1,$.m)
s.i(0,$.cb,$.m)
s.i(0,$.dF,$.m)
s.i(0,$.cv,$.k)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.Q("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(q,s,null),$.au)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d0,$.k)
t.i(0,$.h2,$.m)
t.i(0,$.b0,$.m)
t.i(0,$.cb,$.k)
t.i(0,$.dF,$.k)
t.i(0,$.dp,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.Q("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aW+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.J+"ing in reverse. Another is in a "+$.ad+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(s,t,null),$.au)}}
K.mF.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Creeping Vine",H.a([$.X,$.R,$.b2,$.aE],s),null,!1,"Sentient Plant Tentacles")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Lollipop",H.a([$.th,$.R,$.aY],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Golem",H.a([$.aT,$.aH,$.R,$.aE],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ectoplasm",H.a([$.bW,$.R,$.aY],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Aqua Vitae",H.a([$.b6,$.R,$.aY,$.a0,$.a2],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Homunculus",H.a([$.bh,$.R,$.aE],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.c4,$.k)
q.i(0,$.bc,$.k)
q.i(0,$.h1,$.K)
q.i(0,$.b0,$.m)
q.i(0,$.lG,$.m)
q.i(0,$.cB,$.K)
p=$.n
o="The "+p+" finds a village of compliant "
n=$.u
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.J+"ing in panic. Don't upset "
m=$.z
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.Q("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.W(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.au)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.cB,$.K)
s.i(0,$.b0,$.m)
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
s.i(0,new R.Q("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.W(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.au)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d_,$.k)
t.i(0,$.bc,$.K)
t.i(0,$.dI,$.k)
t.i(0,$.bZ,$.m)
t.i(0,$.dZ,$.m)
t.i(0,$.ij,$.m)
r="Drawn by wailing and "+$.J+"ing, the "
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
t.i(0,new R.Q("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.W(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.au)}}
G.mG.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("FAQ",H.a([$.a7,$.R,$.Z,$.bX],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flashlight",H.a([$.aM,$.R,$.b1,$.a7,$.bX],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Octet",H.a([$.R,$.b1,$.bX,$.a0,$.tj],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Horseshoe",H.a([$.vS,$.R,$.ab],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rabbits Foot",H.a([$.w0,$.R],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("4 Leaf Clover",H.a([$.b2,$.R,$.b1,$.bX],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("8-Ball",H.a([$.b6,$.R,$.aE],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.iq,$.k)
q.i(0,$.ec,$.m)
q.i(0,$.dG,$.k)
q.i(0,$.ef,$.k)
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
q.i(0,new R.Q("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.W(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.J+"ing "+$.u+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.z
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.Q("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.W(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.G(s,q,null),$.au)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.m)
s.i(0,$.b0,$.m)
s.i(0,$.dr,$.k)
s.i(0,$.lB,$.k)
s.i(0,$.ee,$.k)
s.i(0,$.il,$.k)
p=$.n
o="The "+p+" walks into a "
n=$.u
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ad
o=o+l+", but "
k=$.z
o=o+k+" has hoarded all of the planets "
j=$.aW
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.J+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.Q("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.W(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.uf(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.u
j=j+k+" explains that the "
h=$.z
s.i(0,new R.Q("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.J+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.W("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.au)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.h3,$.m)
q.i(0,$.bc,$.m)
q.i(0,$.eY,$.k)
q.i(0,$.b0,$.m)
q.i(0,$.cA,$.k)
p="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
p=p+o+" sets up a wiki and settles in to help the "
n=$.u
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.f0+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a6("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.e3(),!1,!1,new Y.c_("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.u
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.f0+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a6("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.er(),!1,!1,new Y.c_("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.n
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.z
q.i(0,new R.Q("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,q,null),$.au)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.dG,$.k)
t.i(0,$.iq,$.k)
t.i(0,$.ef,$.m)
t.i(0,$.cz,$.m)
t.i(0,$.t1,$.m)
t.i(0,$.bZ,$.K)
t.i(0,$.e_,$.K)
t.i(0,$.bV,$.m)
t.i(0,$.cv,$.K)
t.i(0,$.bc,$.m)
t.i(0,$.cy,$.k)
s=$.n
r="The "+s+" is approached by a Fast Talking "
p=$.u
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ad
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.J+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.z
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.Q("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.W(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o="After the "+$.z+", the "
s=$.n
o=o+s+" is disappointed to learn that barely any of the "
l=$.u
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.f0+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a6("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.e3(),!1,!1,new Y.c_("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,t,null),$.au)}}
Z.mU.prototype={
E:function(){var t,s,r,q
t=this.H
s=[G.Y]
r=A.j("Dream Bubbles Book",H.a([$.L,$.aw,$.aF,$.vL],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.O(t,0)]))
t=Q.F(null,null,A.a_)
r=A.j("Uno Reverse Card",H.a([$.mh,$.jg,$.aw],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Lord's Cape",H.a([$.P,$.N,$.aw],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Drawing Tablet",H.a([$.hf,$.N,$.aw],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("How to Make Friends And Influence People",H.a([$.a0,$.L,$.N,$.bo,$.aF],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.K)
q.i(0,$.eh,$.K)
q.i(0,$.bZ,$.K)
q.i(0,$.cR,$.m)
p="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.n
p=p+o+" comands that the "
n=$.u
m=[U.b]
q.i(0,new R.bv("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.J+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
o="As soon as the "+$.z+" is defeated, the "
n=$.u
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.n
q.i(0,new R.a6("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.x
p.i(0,new X.G(s,q,null),$.bM)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.vn,$.k)
t.i(0,$.cb,$.k)
t.i(0,$.bc,$.k)
t.i(0,$.b0,$.m)
s="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.n
s=s+r+" comands that the "
o=$.u
t.i(0,new R.bv("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.J+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
r="As soon as the "+$.z+" is defeated, the "
o=$.u
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.n
t.i(0,new R.a6("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",this.H,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,t,null),$.bM)}}
S.mW.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Alternate Costume",H.a([$.P,$.N,$.a2,$.a0,$.ax],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Cape",H.a([$.P,$.N,$.a2],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Staff",H.a([$.X,$.N,$.ab,$.a2,$.dd],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Walking Broom",H.a([$.jd,$.X,$.N,$.aE,$.a2,$.dd],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.eV,$.k)
t.i(0,$.eX,$.m)
t.i(0,$.cc,$.k)
t.i(0,$.eg,$.m)
t.i(0,$.d_,$.K)
r="The "+$.z+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.n
p=[U.b]
t.i(0,new R.bv("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
q=$.n
t.i(0,new R.a6("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
r="The "+q+" is feeling quite pleased with their victory over the "+$.z+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aW
t.i(0,new R.a6("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.y(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="Now that the "+$.z+" has been defeated, the "
o=$.u
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.n
q=q+r+"'s help in planning the brand new city of "
n=$.aW
t.i(0,new R.a6("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.J+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.y(),!1,!1,new Y.c_(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.mX.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Maiden's Breath",H.a([$.b2,$.N,$.aI],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Feather Duster",H.a([$.X,$.N,$.dd,$.bu],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Valkyrie Shield",H.a([$.aI,$.aT,$.E,$.N,$.a0,$.f6,$.vD],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Maiden's Songbook",H.a([$.L,$.N,$.a9,$.aF],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.dc,$.k)
t.i(0,$.c4,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.bc,$.m)
t.i(0,$.dr,$.m)
t.i(0,$.cv,$.m)
r="The "+$.z+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.n
r=r+q+" asks local  "
p=$.u
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bv("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
q=$.n
o="The "+q+" has adopted a local "
p=$.u
t.i(0,new R.a6("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.J+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.z+". ")],H.a([],n),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
D.n2.prototype={
E:function(){var t,s
t=Q.F(null,null,A.a_)
s=A.j("memes",H.a([$.b7,$.te,$.vK,$.ti],[G.Y]),"No. Just no.",!1,";)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Memes"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.iq,$.k)
r=$.n
q="The "+r+" decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."
p="The "+r+" finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant "+$.u+"-looking dragon. They notice that it's chained up, so The "+r+" decides to free it, and it brings them to the top of the tallest tower in the castle. "
o="The dragon leads The "+r+" to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The "+r+" unveils it, they see a sleeping consort, The "+r+" yeets it out the window, and rides the Dragon towards the "
n=$.z
o=o+n+". "
m="The "+r+" rides up to the "+n+"'s lair, and they challenge it to a battle. "
l="The "+r+" wins, with the added help of the Dragon, there was no chance they would lose. "
t.i(0,new R.Q("Become Shrek",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(m,"Even with the added help of the Dragon, The "+r+" wasn't enough to defeat the "+n,l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.au)}}
V.n5.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Puzzle Box",H.a([$.X,$.R,$.a2],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Tesla Coil",H.a([$.a7,$.R,$.E],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Coin",H.a([$.E,$.R],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Electronic Door",H.a([$.E,$.R,$.a7,$.Z],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Janus Bust",H.a([$.aT,$.je,$.aH,$.aw,$.R,$.a0,$.a7],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cb,$.m)
q.i(0,$.ec,$.K)
q.i(0,$.cA,$.K)
p=$.n
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.u
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.z
k=[U.b]
q.i(0,new R.Q("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fg(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.u+" explains that at the end of the Labrinth is the "
l=$.z
q.i(0,new R.Q("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.W("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.au)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.h0,$.K)
s.i(0,$.c3,$.m)
s.i(0,$.cA,$.K)
s.i(0,$.cb,$.K)
p=$.z
o="The "+p+" has commited a staggering amount of crimes against the local "+$.u+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.n
s.i(0,new R.Q("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.W("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.au)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.ir,$.k)
t.i(0,$.bc,$.m)
t.i(0,$.eY,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cA,$.k)
r=$.n
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.z
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ad+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.Q("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.au)}}
U.n6.prototype={}
E.n7.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Feather Pen",H.a([$.E,$.N,$.aw,$.bu],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Half Finished Bust of Snoop Dog",H.a([$.w_,$.N,$.je,$.ab,$.a0],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Book of Poetry",H.a([$.L,$.N,$.aw,$.aF],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.dc,$.k)
t.i(0,$.c4,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.bc,$.m)
t.i(0,$.dr,$.m)
t.i(0,$.cv,$.m)
r="The "+$.z+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.n
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bv("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.z+" the "
o=$.u
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.n
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ad
t.i(0,new R.a6("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
F.n8.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Piano",H.a([$.ab,$.X,$.a9,$.aw],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flute",H.a([$.E,$.a9],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Microphone",H.a([$.aV,$.a7],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Violin",H.a([$.X,$.a9],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sheet Music",H.a([$.L,$.a9],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Electric Guitar",H.a([$.aM,$.a9,$.a7,$.aV,$.aA],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.aM,$.a9,$.a7,$.aA],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Guitar",H.a([$.X,$.a9],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.av)
q.i(0,$.t1,$.k)
q.i(0,$.ef,$.k)
q.i(0,$.dr,$.m)
q.i(0,$.b0,$.m)
q.i(0,$.lA,$.m)
p=$.n
o="The "+p+" meets a wise old "+$.u+" who tells that the "+$.z+" can only be awoken by the Legendary Hero playing the "
n=$.aW
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ad
k=[U.b]
q.i(0,new R.a1("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
n="The "+p+" finds an empty, trashed "
l=$.aW
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ad+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.J+"ing "+$.u+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.EQ
q.i(0,new R.a1("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.t4,$.av)
s.i(0,$.dq,$.m)
s.i(0,$.cR,$.m)
s.i(0,$.dr,$.k)
s.i(0,$.lA,$.av)
o=$.n
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aW
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.z
s.i(0,new R.a1("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ad+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.h1,$.av)
t.i(0,$.bV,$.m)
t.i(0,$.dI,$.m)
r=$.n
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.u
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.J
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aW+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.a1("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aO)}}
Y.nl.prototype={
P:function(a,b){var t=0,s=P.bq(),r,q=this,p,o
var $async$P=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:t=3
return P.cI(A.hm("scripts/Rendering/threed/three.min.js",!1),$async$P)
case 3:t=4
return P.cI(Q.o3(),$async$P)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.bI(p)
o.ew(p,P.wh(["",$.$get$ve()],P.B,S.hq))
o.ev(p,!1)
q.b=p}J.v_(p,b)
r=J.v_(q.b,b)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$P,s)},
$asey:function(){return[S.fe]},
$asc5:function(){return[S.fe,P.B]}}
V.nt.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Shorts",H.a([$.P,$.N,$.f4,$.a0],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sidekick Figurine",H.a([$.aM,$.N,$.aA],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Steroids",H.a([$.aC,$.N,$.a2],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.lD,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.h6,$.m)
t.i(0,$.lF,$.m)
t.i(0,$.dc,$.m)
t.i(0,$.bc,$.m)
t.i(0,$.dZ,$.m)
t.i(0,$.ee,$.m)
t.i(0,$.t5,$.m)
t.i(0,$.ij,$.m)
t.i(0,$.lB,$.m)
r="The "+$.z+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.n
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bv("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
q=$.n
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.u+" named Professor "
p=$.J
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ad
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.z
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.Q("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k,"The "+q+" whited out...",m)],H.a([],n),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m="Now that the "+$.z+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.n
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.u
t.i(0,new R.a6("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aW+" buffs. With a deafening "+$.J+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.y(),!1,!1,new Y.i5("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
G.nG.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Superhero Action Figure",H.a([$.aM,$.aA,$.aU],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Action DVD",H.a([$.aM,$.aA],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ghost Busters DVD",H.a([$.aM,$.bW],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Snow Dogs DVD",H.a([$.aM,$.b5,$.bk,$.ce],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skateboarding Video Game",H.a([$.aM,$.aA],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Movie Poster",H.a([$.L,$.aA],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Audrey II Plush",H.a([$.b2,$.aA,$.P,$.aE],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Peashooter Toy",H.a([$.b2,$.b_,$.aA,$.P],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shitty Sword",H.a([$.aU,$.E,$.aA,$.f7,$.aG,$.bQ],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("GameBro Magazine",H.a([$.L,$.aA],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("GameGrl Magazine",H.a([$.L,$.aA],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.m)
q.i(0,$.cy,$.m)
q.i(0,$.bV,$.k)
q.i(0,$.cB,$.av)
q.i(0,$.d1,$.av)
p=$.n
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.u
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aW+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.J+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.ER
l=[U.b]
q.i(0,new R.a1("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.ed,$.m)
s.i(0,$.dq,$.m)
s.i(0,$.cy,$.m)
s.i(0,$.bV,$.m)
s.i(0,$.dH,$.k)
o=$.n
n="The "+o+" runs towards an explosion in a local "
m=$.u
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aW
s.i(0,new R.a1("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cy,$.m)
t.i(0,$.dG,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.dH,$.m)
r=$.n
q="The "+r+" gets a job at the "+$.aW+" Cinema. A new movie, The Lonely "
o=$.ad
q=q+o+" is coming out soon, and "
n=$.u
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.J+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a1("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aO)}}
Z.nH.prototype={}
N.nL.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Feather'd Cap",H.a([$.P,$.N,$.f4],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Crown",H.a([$.a0,$.tn,$.N,$.f4],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Gunpowder",H.a([$.bn,$.N],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.cy,$.m)
t.i(0,$.cb,$.m)
t.i(0,$.dI,$.K)
r="With the closing of the curtain, the "+$.z+" has released the frogs, and yet they are nowhere to be found. The "
q=$.n
p=[U.b]
t.i(0,new R.bv("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
q=$.z
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.n
r=r+o+" to get it back to normal. They organize a team of "
n=$.u
t.i(0,new R.a6("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ad+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.b.prototype={}
U.W.prototype={}
R.nM.prototype={
C:function(a){return H.C(new H.dQ(H.kd(this),null))+": "+this.c},
gK:function(a){return this.c}}
R.a1.prototype={}
R.Q.prototype={}
R.a6.prototype={}
R.bv.prototype={}
E.nN.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Curtain",H.a([$.P,$.R,$.aU],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Sword",H.a([$.E,$.f7,$.aZ,$.R,$.aG,$.b8,$.aU,$.bm,$.aP],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.E,$.aV,$.a7,$.R,$.aU],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.aT,$.E,$.aV,$.bo,$.c7,$.R,$.aU],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bacchus Wine",H.a([$.aC,$.bo,$.aw,$.R,$.a0,$.aU],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Nightmare Fuel",H.a([$.X,$.R,$.b8,$.aD,$.bn,$.aU],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ik,$.k)
q.i(0,$.cZ,$.k)
q.i(0,$.dq,$.k)
q.i(0,$.d_,$.m)
q.i(0,$.bZ,$.m)
q.i(0,$.cc,$.m)
q.i(0,$.c3,$.K)
q.i(0,$.d1,$.m)
q.i(0,$.ed,$.k)
q.i(0,$.ip,$.k)
q.i(0,$.eX,$.k)
q.i(0,$.lE,$.k)
q.i(0,$.h1,$.m)
q.i(0,$.eh,$.k)
p=$.n
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.ad
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.Q("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hB(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
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
q.i(0,new R.Q("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.G(s,q,null),$.au)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dr,$.k)
s.i(0,$.bZ,$.m)
s.i(0,$.c3,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.cy,$.m)
s.i(0,$.io,$.K)
s.i(0,$.cZ,$.m)
s.i(0,$.cB,$.k)
s.i(0,$.bV,$.k)
s.i(0,$.d1,$.K)
p=$.J
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aW
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(q,s,null),$.au)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.ik,$.k)
t.i(0,$.d1,$.k)
t.i(0,$.c3,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.cv,$.k)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(s,t,null),$.au)}}
F.nP.prototype={}
Y.dL.prototype={}
Y.ae.prototype={}
Y.cY.prototype={}
Y.c_.prototype={
gK:function(a){return this.c}}
Y.S.prototype={}
Y.i5.prototype={}
Y.bC.prototype={}
Y.cV.prototype={}
Y.kK.prototype={}
Y.br.prototype={}
Y.jw.prototype={}
Y.iu.prototype={}
Y.jy.prototype={}
N.nT.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Domino Mask",H.a([$.P,$.N,$.f4],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Archery Set",H.a([$.tg,$.N,$.f4,$.tc],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Gristtorrent Server",H.a([$.a0,$.aM,$.a7,$.N,$.Z,$.ax],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.c3,$.k)
t.i(0,$.cc,$.m)
t.i(0,$.dH,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt Noble "
q=$.u
r=r+q+"s have hoarded them. The "
p=$.n
o=[U.b]
t.i(0,new R.bv("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
p=$.n
q="The "+p+" learns of the extreme injustices of the "
r=$.u
q=q+r+"s who rose to power during the tyranny of "
n=$.z
t.i(0,new R.a6("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Q.nU.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Red Rose",H.a([$.aN,$.aI],s),null,!1,"Seductive Plant")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.aN,$.L],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Chocolate Bar",H.a([$.aN,$.aC],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Candelabra",H.a([$.aN,$.aD],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Head Cannon",H.a([$.aN,$.bn,$.E,$.b_],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Her Pitch Passions Novel",H.a([$.aF,$.L,$.aN],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.k)
q.i(0,$.h6,$.m)
q.i(0,$.eU,$.m)
q.i(0,$.h5,$.k)
q.i(0,$.cz,$.m)
q.i(0,$.im,$.K)
p=$.n
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.u
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ad+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.a1("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.m)
s.i(0,$.dG,$.k)
s.i(0,$.h5,$.k)
s.i(0,$.cw,$.m)
s.i(0,$.ef,$.K)
s.i(0,$.im,$.K)
o=$.u
n="A Romantic "+o+" approaches the "
m=$.n
s.i(0,new R.a1("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.im,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.eU,$.m)
t.i(0,$.lF,$.k)
t.i(0,$.h5,$.k)
t.i(0,$.cz,$.m)
t.i(0,$.ef,$.K)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.u
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.z+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.EN
t.i(0,new R.a1("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.n
r="The "+n+"  and the "
o=$.et
t.i(0,new R.a1("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.es(),!1,!1,new Y.iu(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.av)
o=$.n
n="The "+o+"  and the "
r=$.et
t.i(0,new R.a1("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.es(),!1,!1,new Y.jw(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.av)
r=$.n
o="The "+r+"  and the "
n=$.et
t.i(0,new R.a1("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.es(),!1,!1,new Y.jy(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.av)
p.i(0,new X.G(s,t,null),$.aO)}}
V.nV.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Arrow",H.a([$.aZ,$.X,$.tc],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bow",H.a([$.X,$.ab,$.f5],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Yondu",H.a([$.aU,$.R],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Empathy",H.a([$.R,$.te,$.aU],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.b0,$.m)
t.i(0,$.d0,$.K)
t.i(0,$.bV,$.m)
t.i(0,$.cb,$.K)
r=$.n
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.z
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.Q("Be the Yondu",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.au)}}
T.hD.prototype={
E:function(){var t,s
t=Q.F(null,null,A.a_)
s=A.j("Perfectly Generic Object",H.a([],[G.Y]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.k)
q.i(0,$.bc,$.K)
q.i(0,$.dI,$.k)
q.i(0,$.bZ,$.m)
q.i(0,$.dZ,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a6("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.x
n.i(0,new X.G(s,q,null),$.bM)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.eW,$.k)
s.i(0,$.ee,$.K)
s.i(0,$.eg,$.m)
s.i(0,$.cR,$.k)
s.i(0,$.cc,$.K)
p=$.n
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a6("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
l="The "+p+" learns that all of the local "
o=$.u
s.i(0,new R.a6("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.et+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.J+"ing in amazement. The factory is saved! ")],H.a([],m),R.es(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.av)
n.i(0,new X.G(q,s,null),$.bM)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.bc,$.K)
t.i(0,$.c4,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.J
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ue(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.K)
l=$.n
p="The "+l+" learns that all of the local "
r=$.u
t.i(0,new R.a6("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.bM)},
C:function(a){return this.r},
a1:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.ii("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.i2]),H.a([],[M.h_]))
this.E()
this.F()
t=this.Q
if($.$get$nX().a_(0,t))H.ba("Duplicate class id for "+this.C(0)+": "+t+" is already registered for "+J.cJ($.$get$nX().n(0,t))+".")
$.$get$nX().i(0,t,this)},
gK:function(a){return this.r}}
E.nY.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Sage's Robe",H.a([$.P,$.N,$.b4,$.Z,$.a2,$.a0],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Peer Reviewed Journal",H.a([$.L,$.N,$.aF,$.Z],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Guru Pillow",H.a([$.P,$.N,$.e1,$.Z],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.h3,$.m)
t.i(0,$.bc,$.m)
t.i(0,$.eY,$.k)
t.i(0,$.b0,$.K)
t.i(0,$.cA,$.k)
r="The "+$.z+" has blocked access to the books for the duration. The "
q=$.n
p=[U.b]
t.i(0,new R.bv("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
q="Now that the "+$.z+" is defeated, it is time to begin recovery efforts. The "
r=$.u
q=q+r+"s ask the "
o=$.n
t.i(0,new R.a6("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.J+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.nZ.prototype={}
K.o_.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Uno Reverse Card",H.a([$.mh,$.R,$.aU],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("JR Body Pillow",H.a([$.e1,$.b4,$.R],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ik,$.k)
q.i(0,$.cZ,$.k)
q.i(0,$.dq,$.k)
q.i(0,$.d_,$.m)
q.i(0,$.bZ,$.m)
q.i(0,$.cc,$.m)
q.i(0,$.c3,$.K)
q.i(0,$.d1,$.m)
q.i(0,$.ed,$.k)
q.i(0,$.ip,$.k)
q.i(0,$.eX,$.k)
q.i(0,$.lE,$.k)
q.i(0,$.h1,$.m)
q.i(0,$.eh,$.k)
p=$.n
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.ad
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.Q("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hB(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
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
q.i(0,new R.Q("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.G(s,q,null),$.au)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dr,$.k)
s.i(0,$.bZ,$.m)
s.i(0,$.c3,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.cy,$.m)
s.i(0,$.io,$.K)
s.i(0,$.cZ,$.m)
s.i(0,$.cB,$.k)
s.i(0,$.bV,$.k)
s.i(0,$.d1,$.K)
p=$.J
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aW
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(q,s,null),$.au)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.ik,$.k)
t.i(0,$.d1,$.k)
t.i(0,$.c3,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.cv,$.k)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(s,t,null),$.au)}}
Y.o0.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Walking Stick",H.a([$.X,$.N,$.dd],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Adorable Girlscout Beret",H.a([$.P,$.N,$.vM,$.Z,$.a0],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Map",H.a([$.L,$.N,$.Z],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Compass",H.a([$.E,$.N,$.Z,$.a2],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p
t=[P.B]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.dc,$.k)
t.i(0,$.c4,$.k)
t.i(0,$.bc,$.k)
t.i(0,$.bV,$.K)
t.i(0,$.b0,$.K)
r="Now that the "+$.z+" has been defeated, the planet has really opened up. The "
q=$.n
p=[U.b]
t.i(0,new R.a6("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.u+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.n
t.i(0,new R.bv("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.u+" "+$.J+"s in time to stop them.   ")],H.a([],p),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
this.x.i(0,new X.G(s,t,null),$.bM)}}
L.o1.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Scroll",H.a([$.L,$.N,$.Z],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ink Pot",H.a([$.b6,$.N,$.ax,$.Z],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Blank Book",H.a([$.L,$.N,$.aF,$.Z,$.ax,$.a0],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.lA,$.k)
t.i(0,$.bc,$.k)
t.i(0,$.cA,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cb,$.m)
r="The "+$.z+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.n
p=[U.b]
t.i(0,new R.bv("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
q="Now that the "+$.z+" has been taken care of, the "
r=$.n
q=q+r+" discovers a large library of "
o=$.u
t.i(0,new R.a6("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
S.o4.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Cueball",H.a([$.ei,$.mo,$.N,$.ab,$.aE,$.a0],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Crystal Ball",H.a([$.ei,$.vJ,$.N,$.b1],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Binoculars",H.a([$.b6,$.N,$.E],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Blindfold",H.a([$.vF,$.N,$.b4],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.vo,$.k)
t.i(0,$.h2,$.k)
t.i(0,$.t_,$.k)
t.i(0,$.cB,$.m)
r="Now that the "+$.z+" has been defeated, the land is really starting to open up. The "
q=$.n
r=r+q+" finds a tunnel filled with Blind "
p=$.u
o=[U.b]
t.i(0,new R.a6("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.n
t.i(0,new R.bv("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
p=$.n
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.u
t.i(0,new R.a6("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
r="A group of underlings are still making trouble, even after the defeat of the "+$.z+". The "
p=$.n
r=r+p+" begins planting rumors of a huge "
q=$.ad
t.i(0,new R.a6("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
T.c1.prototype={}
Y.ob.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Meddler's Guide",H.a([$.aF,$.N,$.L,$.bo,$.a0,$.aY],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.b6,$.N,$.aY],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.j("Cloud in a Bottle",H.a([r,r,$.bj],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.a2,$.N,$.b1,$.aI,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.bc,$.m)
t.i(0,$.dc,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.b0,$.m)
t.i(0,$.c4,$.k)
r="The defeat of the "+$.z+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.n
p=[U.b]
t.i(0,new R.bv("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
q="Now that the "+$.z+" has been taken care of, the "
r=$.n
q=q+r+" finds a long line of "
o=$.u
t.i(0,new R.a6("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
N.oc.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Fiduspawn Plush",H.a([$.ce,$.P,$.b4],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Teddy Bear",H.a([$.ce,$.P,$.b4],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dice",H.a([$.tl,$.aM],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Pigeon",H.a([$.bu,$.aE,$.bh,$.b9,$.bm,$.tu],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cat Ears",H.a([$.P,$.b4,$.ce],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Religious Text",H.a([$.aF,$.L],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Psychology Book",H.a([$.aF,$.L],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Therapy Couch",H.a([$.b4,$.P],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("FLARP Manual",H.a([$.aF,$.L,$.Z],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.K)
q.i(0,$.b0,$.m)
q.i(0,$.cb,$.k)
q.i(0,$.cA,$.m)
p=$.n
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aW+" or "+$.ad+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.J+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.d0,$.K)
s.i(0,$.b0,$.k)
s.i(0,$.cb,$.k)
s.i(0,$.rY,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.t4,$.k)
s.i(0,$.cA,$.m)
o=$.n
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.J
n=n+l+"ing "
k=$.u
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aW
s.i(0,new R.a1("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cR,$.K)
t.i(0,$.dG,$.k)
t.i(0,$.c4,$.k)
t.i(0,$.dH,$.k)
t.i(0,$.h0,$.k)
r=$.n
q="The "+r+" wanders into an entire crowd of "
o=$.u
t.i(0,new R.a1("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.J+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aO)}}
F.od.prototype={}
M.bw.prototype={}
N.oe.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Frog Statue",H.a([$.aT,$.aH,$.R],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Frog Costume",H.a([$.P,$.R],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Reactor",H.a([$.c0,$.Z,$.a7,$.R],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Telescope",H.a([$.E,$.b6,$.Z,$.R],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Green Sun Poster",H.a([$.L,$.R,$.to,$.a0],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=$.n
s=[P.B]
r=H.a(["Wherever the "+t+" goes, they find a "+$.u+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.J+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.z+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
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
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.cB,$.K)
t.i(0,$.t0,$.k)
s=[U.b]
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.av)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.av)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.av)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.av)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.av)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.av)
p=$.n
t.i(0,new R.bv("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.y(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(o,t,null),$.FU)}}
S.of.prototype={}
U.at.prototype={
gK:function(a){return this.d+"kind"},
$isbE:1,
$asbE:function(){return[A.a_]}}
K.cE.prototype={
gK:function(a){return this.a}}
M.oj.prototype={
aN:function(a){return"application/octet-stream"},
P:function(a6,a7){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$P=P.bA(function(a8,a9){if(a8===1)return P.bx(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.db(null,0)
q.a=J.dU(a7,0)
for(p=0,o="";p<6;++p)o+=H.hA(q.a7(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.l("Invalid header: "+n)
m=q.a7(8)
l=9+m*6
o=8*m
k=q.a7(o)
j=q.a7(o)
i=q.a7(o)
h=q.a7(o)
g=q.a7(o)
f=q.a7(o)
o=P.D
e=P.B
d=P.cD(o,e)
c=new O.cT(k,j,null,null,null,null,null,null,d,P.cD(e,o))
c.x=new Uint8Array(H.cx(k*j))
b=q.a7(8)
for(o=[o],p=0;p<b;++p){a=q.a7(8)
a0=q.a7(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.a7(8)
if(a2>=e){r=H.x(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.oJ(a1,0,null))}a4=q.a7(8)
a5=$.$get$wE().n(0,a4)
if(a5==null)throw H.l("Sprite decoding error: Encoding id "+a4+" not supported.")
c.hM(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hy()
r=c
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$P,s)},
$asdl:function(){return[O.cT]},
$asc5:function(){return[O.cT,P.bg]}}
K.bH.prototype={}
R.oM.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Meddler's Guide",H.a([$.aF,$.N,$.L,$.bo,$.a0,$.aY],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.b6,$.N,$.aY],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.j("Cloud in a Bottle",H.a([r,r,$.bj],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.a2,$.N,$.b1,$.aI,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.cb,$.k)
t.i(0,$.b0,$.k)
t.i(0,$.dc,$.m)
t.i(0,$.eY,$.m)
t.i(0,$.rX,$.m)
t.i(0,$.dZ,$.m)
t.i(0,$.ij,$.m)
t.i(0,$.t3,$.m)
r=$.n
q="The "+r+" decides to take a break after defeating "+$.z+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.u
o=[U.b]
t.i(0,new R.a6("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.J+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.ug(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.u
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.n
t.i(0,new R.a6("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.u
q="The "+r+"s are so stressed after all that shit with the "+$.z+". They are yelling and "+$.J+" at each other over the slightest of insults. The "
p=$.n
t.i(0,new R.a6("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.z+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.n
p=p+r+" purifies the pools "
q=$.u
t.i(0,new R.bv("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
r="The defeat of the "+$.z+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.u
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.n
t.i(0,new R.a6("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aW+". Huh. Okay then.")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
L.oO.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Lightning",H.a([$.aV,$.b7,$.R],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice",H.a([$.bk,$.vU,$.f5],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Taserface",H.a([$.aU,$.aV],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Taser",H.a([$.aV,$.R,$.aU],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.dF,$.K)
t.i(0,$.bV,$.k)
t.i(0,$.ik,$.m)
t.i(0,$.cZ,$.m)
r=$.n
q="The "+r+" is walking around on their land, when a "
p=$.u
q=q+p+" walks up to them, and tells them about "
o=$.z
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.J+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.Q("Rebel Against Your Land",!1,[new U.b(q),new U.b(p),new U.b(n),new U.W(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.au)}}
D.oQ.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Robot",H.a([$.a7,$.E,$.aE,$.Z],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Circuit Board",H.a([$.a7,$.E],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Datastructures for Assholes",H.a([$.a7,$.L],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a7,$.L,$.aP,$.aF],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("3-D Printer",H.a([$.aM,$.a7,$.E],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Virus on a USB Stick",H.a([$.vP,$.E],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wrench",H.a([$.tB,$.E,$.ab],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Computer",H.a([$.a7,$.E],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ir,$.m)
q.i(0,$.eV,$.k)
q.i(0,$.eW,$.k)
q.i(0,$.cc,$.K)
p=$.n
o="The "+p+" learns from their "
n=$.u
o=o+n+"s about the great "
m=$.aW
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.z+" destroyed it. "
o="The "+p+" searches for the "
l=$.ad
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.EV
p=[U.b]
q.i(0,new R.a1("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=$.n
m="The "+l+" is approached by a "
o=$.u
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.J
q.i(0,new R.a1("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.z+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ad+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fg(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.eW,$.k)
s.i(0,$.ee,$.K)
s.i(0,$.eg,$.m)
s.i(0,$.cR,$.k)
s.i(0,$.cc,$.K)
o=$.n
n="The "+o+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.n
l="The "+o+" finds two groups of "
n=$.u
l=l+n+"s screaming and "
k=$.J
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ad
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.a1("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.e3(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.au)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.ir,$.K)
t.i(0,$.eV,$.k)
t.i(0,$.eW,$.k)
t.i(0,$.cc,$.K)
r=$.n
q="The "+r+" learns from a mysterious "+$.u+" in a black trenchcoat about a great "
o=$.aW
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.z
t.i(0,new R.a1("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aO)}}
V.oS.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Lighter",H.a([$.E,$.aD],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Siberia Poster",H.a([$.L,$.bk],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Winter Poster",H.a([$.L,$.bk,$.c0],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Doomsday Device",H.a([$.E,$.aP,$.c0,$.b7,$.bm],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Juggalo Poster",H.a([$.L,$.vV],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Watch",H.a([$.E,$.be,$.b7],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Magnificent Crown",H.a([$.E,$.be,$.b7],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bitching Clothes",H.a([$.P,$.f4,$.b7],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ceramic Pork Hollow",H.a([$.bP,$.be],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shit Ton of Guns",H.a([$.E,$.tv,$.b_,$.b7],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sniper Rifle",H.a([$.E,$.ty,$.b_,$.b7],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("AK-47",H.a([$.E,$.tr,$.b_,$.b7],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("IED",H.a([$.mj,$.aG,$.E,$.bn,$.b7],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Idiots Guide To Being An Asshole",H.a([$.L,$.bo,$.aF],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.c7,$.E,$.aV,$.bo],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Matches",H.a([$.X,$.aD],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.m)
q.i(0,$.dG,$.k)
q.i(0,$.e_,$.k)
q.i(0,$.eX,$.k)
q.i(0,$.lD,$.k)
q.i(0,$.dH,$.m)
p=$.n
o=[U.b]
q.i(0,new R.a1("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cy,$.m)
s.i(0,$.dG,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.dH,$.m)
n=$.n
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.u
s.i(0,new R.a1("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ad+" underling. Tremble at the fearsome "+$.aW+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.k)
q.i(0,$.bc,$.K)
q.i(0,$.dI,$.k)
q.i(0,$.bZ,$.m)
q.i(0,$.dZ,$.K)
q.i(0,$.cZ,$.K)
n=$.n
m="The "+n+" learns that all of the local "
l=$.u
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c3,$.k)
t.i(0,$.cZ,$.K)
t.i(0,$.ed,$.k)
t.i(0,$.ip,$.k)
t.i(0,$.cc,$.m)
t.i(0,$.eh,$.m)
s=$.n
r="The "+s+" finds a crowd of "
n=$.J
r=r+n+"ing "
m=$.u
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aW+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.a1("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,t,null),$.aO)}}
X.G.prototype={
C:function(a){return"Theme: "+H.C(this.a)}}
U.oZ.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Lockpick",H.a([$.E,$.N,$.ax,$.aZ,$.a0],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sneaking Suit",H.a([$.P,$.N,$.ax],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Dagger",H.a([$.E,$.N,$.aZ,$.aG,$.tk],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.c3,$.k)
t.i(0,$.dq,$.m)
t.i(0,$.bV,$.m)
t.i(0,$.cR,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt "
q=$.u
r=r+q+" Cops have confiscated them. The "
p=$.n
o=[U.b]
t.i(0,new R.bv("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
p=$.n
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.z+"'s layer and slated to be returned to the "
r=$.u
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.J+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a6("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.u
p="A weeping "+r+" approaches the "
n=$.n
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.z
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aW+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.J+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a6("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
n="Now that the "+r+" has been defeated, the "
p=$.u
n=n+p+"s have recovered their precious "
q=$.ad
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.n
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.J
l=n+l+"worth, the disaffected Heir to the "+$.aW+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a6("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
N.p_.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Grandfather Clock",H.a([$.X,$.aw,$.be,$.R],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Drum",H.a([$.vZ,$.R,$.a9],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dead Doppelganger",H.a([$.aT,$.bh,$.R,$.b9,$.b8,$.aP],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Music Box",H.a([$.E,$.R,$.a9,$.aw],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.E,$.R,$.a9,$.a0,$.aA],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Metronome",H.a([$.E,$.R,$.a9],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.vq,$.av)
q.i(0,$.cc,$.m)
q.i(0,$.cR,$.m)
q.i(0,$.eg,$.k)
p=$.z
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.n
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.b]
q.i(0,new R.a6("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.er(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.u+"s, they set out to fix the "
m=$.ad
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.z
q.i(0,new R.Q("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.W("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.G(s,q,null),$.au)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.h1,$.k)
s.i(0,$.e_,$.K)
s.i(0,$.cc,$.k)
p=$.n
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.u+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.z
s.i(0,new R.Q("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.W(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(q,s,null),$.au)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c4,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cb,$.k)
t.i(0,$.dc,$.k)
r=$.z
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ad
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.n
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.u+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.Q("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.W(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hB(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.z
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ad
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.n
t.i(0,new R.Q("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.u+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.W("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.er(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.z+", "
k=$.n
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.u
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aW
t.i(0,new R.a6("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.er(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.n
t.i(0,new R.Q("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.J+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.W("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.z+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(s,t,null),$.au)}}
Y.p4.prototype={}
G.Y.prototype={
C:function(a){var t=this.b
if(t.length!==0)return C.b.gad(t)
return"NULL TRAIT"},
ge4:function(){return this.a},
gdN:function(){return this.b},
gbs:function(){return this.c}}
G.aX.prototype={}
G.ar.prototype={}
G.bG.prototype={}
G.e.prototype={
ghv:function(){return this.e.length},
gbs:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.cj)(t),++q)r+=t[q].c
return r},
ay:function(a,b){return C.a.b7(b.ghv()-this.e.length)},
ed:function(a){return C.b.h_(this.e,a.gfN(a))},
$isbE:1,
$asbE:function(){return[G.e]},
gK:function(a){return this.d},
gez:function(){return this.e}}
G.mp.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.Y]}}}
Q.pn.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Cardboard Box",H.a([$.L,$.R,$.ax],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Hole Punch",H.a([$.E,$.R,$.ax],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Smoke Bombs",H.a([$.bn,$.R,$.ax,$.mj],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Tribal Mask",H.a([$.b9,$.R,$.ax,$.b8,$.bR],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Opera Mask",H.a([$.aM,$.R,$.ax,$.aw],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Black Hole in a Bottle.",H.a([$.R,$.a0,$.to,$.ax,$.b6],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.lC,$.k)
q.i(0,$.h4,$.k)
q.i(0,$.h2,$.k)
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
q.i(0,new R.a6("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.z
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.Q("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.W(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i=this.f
i.i(0,new X.G(s,q,null),$.au)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.d0,$.m)
s.i(0,$.lC,$.m)
s.i(0,$.h4,$.m)
s.i(0,$.c3,$.k)
p=$.n
o="Even with the victory of the "+p+" over the villainous "
n=$.z
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.u+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ad
s.i(0,new R.a6("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fg(),!1,!1,new Y.c_("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
s.i(0,new R.Q("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.J+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.W("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.z+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.u+"s.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.G(q,s,null),$.au)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d0,$.k)
t.i(0,$.lC,$.k)
t.i(0,$.h4,$.k)
r=$.n
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.z+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.Q("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.W(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.G(s,t,null),$.au)}}
E.po.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Yardstick",H.a([$.dd,$.N,$.jg,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURBSim Hacking Guide",H.a([$.aF,$.N,$.hf,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Body Pillow of JR",H.a([$.P,$.N,$.e1,$.mk,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Nanobots",H.a([$.tz,$.N,$.mg],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.cB,$.k)
t.i(0,$.d1,$.k)
t.i(0,$.dp,$.k)
t.i(0,$.dc,$.k)
t.i(0,$.ec,$.k)
t.i(0,$.dF,$.k)
t.i(0,$.h4,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.ug(),!1,!1,new Y.dL("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cg+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wz(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dL("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.av)
m=$.n
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.av)
m="A wizened "+$.u+" tells the "
r=$.n
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wA(),!1,!1,new Y.c_("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a6("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.K)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bv("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
this.x.i(0,new X.G(s,t,null),$.au)}}
M.ps.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Cauldron",H.a([$.vY,$.N,$.a2],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flying Broom",H.a([$.jd,$.dd,$.N,$.X,$.a2],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Warped Mirror",H.a([$.ts,$.N,$.a2,$.ax,$.a0],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a4,P.U])
t.i(0,$.bZ,$.m)
t.i(0,$.h6,$.m)
t.i(0,$.d_,$.m)
t.i(0,$.cR,$.m)
t.i(0,$.cv,$.m)
t.i(0,$.t0,$.m)
r=$.z
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.u
q=q+p+" consorts. It's up to the "
o=$.n
n=[U.b]
t.i(0,new R.bv("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bS(),!1,!1,new Y.br("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.av)
o="Even with the defeat of the "+$.z+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.u
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aW
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.n
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a6("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.A)
q="A Mysterious "+$.u+" approaches the "
p=$.n
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aW
q=q+r+" was discovered amongst the "+$.z+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a6("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.u
p="A young "+r+" approaches the "
m=$.n
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aW
t.i(0,new R.a6("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ad+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.J+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.pt.prototype={
P:function(a5,a6){var t=0,s=P.bq(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$P=P.bA(function(a7,a8){if(a7===1)return P.bx(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.eK(a6,$.$get$x0())
if(0>=p.length){r=H.x(p,0)
t=1
break}if(J.y6(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.x(p,0)
t=1
break}throw H.l("Invalid WordList file header: '"+H.C(p[0])+"'")}o=P.B
n=H.a([],[o])
m=P.cD(o,B.jQ)
q.a=null
l=P.cD(o,o)
for(k=P.U,j=B.dv,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cH()
""+i
H.C(g)
f.toString
f=J.eK(g,$.$get$wZ())
if(0>=f.length){r=H.x(f,0)
t=1
break $async$outer}g=f[0]
f=J.bf(g)
if(f.gV(g)===!0){$.$get$cH().toString
continue}if(f.af(g,$.$get$x_())){$.$get$cH().toString
continue}if(C.c.af(g,"@")){e=C.c.ag(g,1)
$.$get$cH().toString
n.push(e)}else if(C.c.af(g,"?")){f=C.c.ag(g,1)
f=$.$get$hI().aT(0,f)
f=H.ds(f,B.kf(),H.aR(f,"o",0),null)
d=P.de(f,!0,H.aR(f,"o",0))
if(d.length<2)$.$get$cH().b6(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cH()
H.C(c)
H.C(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$x1()
a=f.c8(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.x(f,1)
t=1
break $async$outer}a0=J.ck(f[1])
a1=C.c.ag(g,a0)
if(a1.length===0)continue
f=J.aL(a0)
if(f.S(a0,0)){a1=C.c.ee(a1)
$.$get$cH().toString
f=P.cD(o,o)
a2=new B.jQ(P.cD(o,k),f,a1,!1,null,null)
a2.d_(null,null,j)
q.a=a2
f.bJ(0,l)
m.i(0,a1,q.a)}else if(f.S(a0,$.x2))if(C.c.af(a1,"?")){a1=C.c.ag(a1,1)
f=$.$get$hI().aT(0,a1)
f=H.ds(f,B.kf(),H.aR(f,"o",0),null)
d=P.de(f,!0,H.aR(f,"o",0))
f=$.$get$cH()
f.toString
if(d.length<2)f.b6(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kj(d[0],$.$get$fl(),"")
if(1>=d.length){r=H.x(d,1)
t=1
break $async$outer}b=J.kj(d[1],$.$get$fl(),"")
f=$.$get$cH()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.af(a1,"@")){e=C.c.ag(a1,1)
$.$get$cH().toString
f=$.$get$hI().aT(0,a1)
f=H.ds(f,B.kf(),H.aR(f,"o",0),null)
d=P.de(f,!0,H.aR(f,"o",0))
a4=d.length>1?H.ww(d[1],new U.pu(q,d)):1
q.a.c.i(0,C.c.cJ(e,$.$get$fl(),""),a4)}else{$.$get$cH().toString
f=$.$get$hI().aT(0,g)
f=H.ds(f,B.kf(),H.aR(f,"o",0),null)
d=P.de(f,!0,H.aR(f,"o",0))
a4=d.length>1?H.ww(d[1],new U.pv(q,d)):1
if(0>=d.length){r=H.x(d,0)
t=1
break $async$outer}f=C.c.be(J.kj(d[0],$.$get$fl(),""))
h=new B.dv(null)
a3=P.cD(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.v1(a4)),[H.aR(f,"cQ",0)]))}else if(f.S(a0,$.x2*2)){$.$get$cH().toString
f=$.$get$hI().aT(0,g)
f=H.ds(f,B.kf(),H.aR(f,"o",0),null)
d=P.de(f,!0,H.aR(f,"o",0))
f=d.length
if(f!==2)$.$get$cH().b6(C.h,"Invalid variant for "+H.C(h.cO(0))+" in "+q.a.e)
else{if(0>=f){r=H.x(d,0)
t=1
break $async$outer}f=C.c.be(J.kj(d[0],$.$get$fl(),""))
if(1>=d.length){r=H.x(d,1)
t=1
break $async$outer}a3=C.c.cJ(U.FX(d[1]),$.$get$fl(),"")
h.a.i(0,f,a3)}}}}}r=new B.hO(n,m)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$P,s)},
$asey:function(){return[B.hO]},
$asc5:function(){return[B.hO,P.B]}}
U.pu.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.x(s,1)
r="Invalid include weight '"+H.C(s[1])+"' for word '"
if(0>=s.length)return H.x(s,0)
t.b6(C.m,r+H.C(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
U.pv.prototype={
$1:function(a){var t,s,r
t=$.$get$cH()
s=this.b
if(1>=s.length)return H.x(s,1)
r="Invalid weight '"+H.C(s[1])+"' for word '"
if(0>=s.length)return H.x(s,0)
t.b6(C.m,r+H.C(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
F.px.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Make a World Book",H.a([$.L,$.aw,$.aF],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Quill Pen",H.a([$.b4,$.P,$.mm],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Book On Writing",H.a([$.aF,$.L,$.Z],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("FLARP Manual",H.a([$.aF,$.L,$.Z],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Script",H.a([$.aF,$.L],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Pen",H.a([$.E,$.Z,$.mm,$.aw],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Spiral Bound Notebook",H.a([$.aF,$.L,$.E],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Half Written Novel",H.a([$.aF,$.L],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a4,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.cA,$.k)
q.i(0,$.bc,$.m)
q.i(0,$.b0,$.m)
q.i(0,$.h3,$.m)
p=$.n
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.u+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.a1("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.bC("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dH,$.m)
s.i(0,$.cy,$.m)
s.i(0,$.cw,$.m)
s.i(0,$.bc,$.m)
p=$.u
o="An Excited "+p+" rushes up to the "
n=$.n
s.i(0,new R.a1("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.J+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cy,$.m)
t.i(0,$.dG,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.dH,$.m)
t.i(0,$.dp,$.k)
r=$.n
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.u
t.i(0,new R.a1("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aO)}}
B.pC.prototype={
aN:function(a){return"application/x-tar"},
P:function(a,b){var t=0,s=P.bq(),r,q,p
var $async$P=P.bA(function(c,d){if(c===1)return P.bx(d,s)
while(true)switch(t){case 0:q=$.$get$x3()
p=J.uU(b)
q.toString
r=q.fS(T.tb(p,0,null,0),!1)
t=1
break
case 1:return P.by(r,s)}})
return P.bz($async$P,s)},
$asdl:function(){return[T.fA]},
$asc5:function(){return[T.fA,P.bg]}}
A.fI.prototype={}
B.dm.prototype={
co:function(a){if(a)this.b=(this.b|C.a.ap(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.N+=H.hA(this.b)
this.b=0}},
ah:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ap(1,t)
if(typeof a!=="number")return a.aG()
this.co((a&s)>>>0>0)}},
fF:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.at(1,t-s)
if(typeof a!=="number")return a.aG()
this.co((a&r)>>>0>0)}},
bK:function(a){var t,s
a=J.e6(a,1)
t=C.d.cY(Math.log(H.ka(a)),0.6931471805599453)
for(s=0;s<t;++s)this.co(!1)
this.fF(a,t+1)},
b_:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.N
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.as(r)
q+=r
p=r}else p=0
r=H.cx(q)
o=new Uint8Array(r)
if(t){n=H.cN(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.x(o,m)
o[m]=l}}t=s.N
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a5(k,m)
if(s<0||s>=r)return H.x(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.x(o,t)
o[t]=s}return o.buffer}}
B.db.prototype={
cf:function(a){var t,s,r,q
t=C.f.aj(a/8)
s=C.a.by(a,8)
r=this.a.getUint8(t)
q=C.a.at(1,s)
if(typeof r!=="number")return r.aG()
return(r&q)>>>0>0},
a7:function(a){var t,s,r
if(a>32)throw H.l(P.dV(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cf(this.b);++this.b
if(r)t=(t|C.a.ap(1,s))>>>0}return t},
hx:function(a){var t,s,r,q
if(a>32)throw H.l(P.dV(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cf(this.b);++this.b
if(q)s=(s|C.a.at(1,t-r))>>>0}return s},
bT:function(){var t,s,r
for(t=0;!0;){s=this.cf(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hx(t+1)-1}}
A.dX.prototype={
C:function(a){return"rgb("+H.C(this.b)+", "+H.C(this.c)+", "+H.C(this.d)+", "+H.C(this.a)+")"},
hH:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.at()
s=this.c
if(typeof s!=="number")return s.at()
r=this.d
if(typeof r!=="number")return r.at()
q=this.a
if(typeof q!=="number")return H.as(q)
return(t<<24|s<<16|r<<8|q)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dX){t=this.b
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
ga6:function(a){return this.hH(!0)},
U:function(a,b){var t,s,r,q,p,o,n,m
t=J.aL(b)
if(!!t.$isdX){t=this.b
s=b.b
if(typeof t!=="number")return t.U()
if(typeof s!=="number")return H.as(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.U()
if(typeof q!=="number")return H.as(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.U()
if(typeof o!=="number")return H.as(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.U()
if(typeof m!=="number")return H.as(m)
return A.fM(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.b2()
s=this.c
if(typeof s!=="number")return s.b2()
r=this.d
if(typeof r!=="number")return r.b2()
q=this.a
if(typeof q!=="number")return q.b2()
return A.va(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.U()
s=this.c
if(typeof s!=="number")return s.U()
r=this.d
if(typeof r!=="number")return r.U()
return A.fM(t+b,s+b,r+b,this.a)}throw H.l("Cannot add ["+H.C(t.gaa(b))+" "+H.C(b)+"] to a Colour. Only Colour, double and int are valid.")},
ar:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.b2()
s=this.c
if(typeof s!=="number")return s.b2()
r=this.d
if(typeof r!=="number")return r.b2()
q=this.a
if(typeof q!=="number")return q.b2()
return A.va(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.l("Colour index out of range: "+H.C(b))},
i:function(a,b,c){var t,s
t=J.dy(b)
if(t.a4(b,0)||t.aB(b,3))throw H.l("Colour index out of range: "+H.C(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(c,0,255)
else if(t.S(b,0)){this.b=C.a.ab(J.ki(J.uT(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ab(J.ki(J.uT(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kb(c)
if(t.S(b,2)){this.d=C.a.ab(J.ki(s.ar(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(J.ki(s.ar(c,255)),0,255)}},
eF:function(a,b,c,d){this.b=C.d.ab(C.d.ab(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ab(C.d.ab(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ab(C.d.ab(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ab(J.xM(d,0,255),0,255)}}
A.ra.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.B]}}}
A.mQ.prototype={
$1:function(a){return this.a.e7(a)},
$S:function(){return{func:1,args:[,]}}}
A.mO.prototype={
$1:function(a){this.a.P(0,a).aZ(this.b.ghu())},
$S:function(){return{func:1,args:[,]}}}
A.mP.prototype={
$1:function(a){this.a.fM(0)},
$S:function(){return{func:1,args:[P.q]}}}
A.mR.prototype={
$1:function(a){return this.a.az(0,this.b)},
$S:function(){return{func:1,args:[W.T]}}}
F.hn.prototype={
C:function(a){return this.b}}
F.ho.prototype={
b6:function(a,b){F.EJ(a).$1("("+this.c+")["+H.C(C.b.gb5(a.b.split(".")))+"]: "+H.C(b))},
cu:function(a,b){this.b6(C.h,b)},
gK:function(a){return this.c}}
F.tO.prototype={}
O.ru.prototype={
$1:function(a){return H.C(a.b8(1))+" = "+H.C(a.b8(2))+C.c.ar("../",this.a)},
$S:function(){return{func:1,args:[P.dt]}}}
O.rv.prototype={
$0:function(){var t=document
J.rC(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.o,null)
t=H.ke(t.querySelector("#voidButton"),"$isfK")
t.toString
W.eG(t,"click",new O.rt(),!1,W.Hv)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.Hh("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rt.prototype={
$1:function(a){return O.Hm()},
$S:function(){return{func:1,args:[W.T]}}}
R.h7.prototype={}
R.u5.prototype={}
R.u4.prototype={}
A.nu.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.a_(0,b)?t.n(0,b):$.$get$u3()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.a_(0,b)?t.n(0,b):$.$get$u3()}throw H.l(P.dV(b,"'name' should be a String name or int id only",null))},
gY:function(a){var t=this.a
t=t.gbX(t)
return new H.jn(null,J.d9(t.a),t.b,[H.O(t,0),H.O(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.a_(0,b))this.an(0,b)
s=this.fl()
if(typeof s!=="number")return s.as()
if(s>=256)throw H.l(P.dV(s,"Palette colour ids must be in the range 0-255",null))
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
fl:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.a_(0,s))return s;++s}}}
A.jv.prototype={
$aso:function(){return[A.dX]},
$iso:1}
Q.jx.prototype={}
A.jA.prototype={
br:function(a){if(a===0)return 0
return this.fm(a)},
hm:function(){return this.br(4294967295)},
fm:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cB()
this.b=C.d.b7(s*4294967295)
return C.d.aj(s*a)}else{s=t.br(a)
this.b=s
return s}},
cR:function(a){var t=a==null
this.a=t?C.K:P.G9(a)
if(!t)this.b=J.e6(a,1)},
hs:function(a,b){var t=a.length
if(t===0)return
t=this.br(t)
if(t<0||t>=a.length)return H.x(a,t)
return a[t]},
hr:function(a){return this.hs(a,!0)}}
Y.dK.prototype={
cm:function(a){var t,s
if(this.b!=null)throw H.l("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bi(0,$.aB,null,t)
this.c.push(new P.dS(s,t))
return s},
e7:function(a){var t,s,r
if(this.b!=null)throw H.l("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.cj)(t),++r)t[r].az(0,this.b)
C.b.sm(t,0)}}
V.lf.prototype={
$4:function(a,b,c,d){return V.z6(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bg,P.bg,O.cT]}}}
V.le.prototype={
$4:function(a,b,c,d){return V.z5(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.D,P.D,O.cT]}}}
V.ld.prototype={
$4:function(a,b,c,d){return V.z2(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bg,P.bg,O.cT]}}}
V.lc.prototype={
$4:function(a,b,c,d){return V.z1(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.D,P.D,O.cT]}}}
O.cT.prototype={
hy:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
hM:function(a,b,c,d){var t,s,r,q,p
t=J.bI(d)
s=0
while(!0){r=t.ge1(d)
if(typeof r!=="number")return H.as(r)
if(!(s<r))break
q=(C.a.cY(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.x(r,q)
r[q]=p;++s}}}
D.om.prototype={
$1:function(a){return a.ght()},
$S:function(){return{func:1,args:[D.cF]}}}
D.cF.prototype={
C:function(a){return this.a},
gK:function(a){return this.a},
ght:function(){return this.d}}
D.jR.prototype={}
D.nR.prototype={}
B.dv.prototype={
ej:function(a,b){if(this.a.a_(0,"MAIN"))return this.a.n(0,"MAIN")
return},
cO:function(a){return this.ej(a,null)},
C:function(a){return"[Word: "+H.C(this.cO(0))+"]"}}
B.jQ.prototype={
C:function(a){return"WordList '"+this.e+"': "+this.eC(0)},
$isq:1,
$asq:function(){return[B.dv]},
$asdR:function(){return[B.dv]},
$ashM:function(){return[B.dv]},
$ascQ:function(){return[B.dv]},
$aso:function(){return[B.dv]},
$asv:function(){return[B.dv]},
gK:function(a){return this.e}}
B.hO.prototype={
C:function(a){return"[WordListFile: "+this.b.C(0)+" ]"}}
S.fe.prototype={}
S.ux.prototype={}
S.uy.prototype={}
S.uz.prototype={}
S.rT.prototype={}
S.rW.prototype={}
S.rK.prototype={}
S.uh.prototype={}
S.uB.prototype={}
S.uC.prototype={}
S.kI.prototype={}
S.u7.prototype={}
S.u2.prototype={}
S.mH.prototype={}
S.rO.prototype={}
S.rF.prototype={}
S.kZ.prototype={}
S.tP.prototype={}
S.l_.prototype={}
S.nw.prototype={}
S.uo.prototype={}
S.ul.prototype={}
S.up.prototype={}
S.rE.prototype={}
S.lU.prototype={}
S.kG.prototype={}
S.rJ.prototype={}
S.rI.prototype={}
S.u8.prototype={}
S.uq.prototype={}
S.u9.prototype={}
S.rV.prototype={}
S.rU.prototype={}
S.un.prototype={}
S.um.prototype={}
S.oY.prototype={}
S.us.prototype={}
S.rL.prototype={}
S.rM.prototype={}
S.uA.prototype={}
S.hq.prototype={}
S.tV.prototype={}
S.tW.prototype={}
S.tX.prototype={}
S.tY.prototype={}
S.ui.prototype={}
S.uj.prototype={}
S.uk.prototype={}
S.tU.prototype={}
S.u_.prototype={}
S.u0.prototype={}
S.t8.prototype={}
S.t9.prototype={}
S.ta.prototype={}
S.u1.prototype={}
S.tZ.prototype={}
S.rG.prototype={}
S.uu.prototype={}
S.uv.prototype={}
S.ut.prototype={}
Z.tJ.prototype={}
Z.tF.prototype={}
Z.tG.prototype={}
Q.cQ.prototype={
k:function(a,b){return b},
C:function(a){return J.cJ(this.gbS())},
av:function(a,b){return Q.uE(this,b,H.aR(this,"cQ",0),null)},
a3:function(a,b){return Q.uD(this,!1,!0,null,H.aR(this,"cQ",0))},
ao:function(a){return this.a3(a,!0)},
$iso:1,
$aso:null}
Q.dR.prototype={
gbS:function(){return this.b},
bI:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.v1(c)),[H.aR(this,"cQ",0)]))},
h:function(a,b){return this.bI(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.x(t,b)
return J.uX(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.x(t,b)
t[b]=new Q.h(c,s,[H.aR(this,"cQ",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
C:function(a){return P.jh(this.b,"[","]")},
av:function(a,b){return Q.uE(this,b,H.aR(this,"dR",0),null)},
a3:function(a,b){return Q.uD(this,!1,!0,null,H.aR(this,"dR",0))},
ao:function(a){return this.a3(a,!0)},
d_:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hM.prototype={$ascQ:null,$aso:null,$asq:null,$asv:null,$isq:1,$isv:1,$iso:1}
Q.h.prototype={
C:function(a){return"("+H.C(this.a)+" @ "+H.C(this.b)+")"},
gX:function(a){return this.a},
gcM:function(a){return this.b}}
Q.eE.prototype={
gbS:function(){return this.b},
gY:function(a){var t=new Q.pq(null,[H.aR(this,"eE",0)])
t.a=J.d9(this.b)
return t},
gm:function(a){return J.ck(this.b)},
C:function(a){return J.cJ(this.b)},
av:function(a,b){return Q.uE(this,b,H.aR(this,"eE",0),null)},
a3:function(a,b){return Q.uD(this,!1,!0,null,H.aR(this,"eE",0))},
ao:function(a){return this.a3(a,!0)}}
Q.hL.prototype={$ascQ:null,$aso:null,$iso:1}
Q.pq.prototype={
gR:function(){return J.uX(this.a.gR())},
I:function(){return this.a.I()}}
Q.jN.prototype={
$aseE:function(a,b){return[b]},
$ashL:function(a,b){return[b]},
$ascQ:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
Q.pr.prototype={
$1:function(a){var t=J.bI(a)
return new Q.h(this.c.$1(t.gX(a)),t.gcM(a),[this.b])},
$S:function(){return H.eJ(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jN")}}
J.i.prototype.eA=J.i.prototype.C
J.hi.prototype.eB=J.hi.prototype.C
P.dh.prototype.eD=P.dh.prototype.bA
P.dh.prototype.eE=P.dh.prototype.bz
P.b3.prototype.cX=P.b3.prototype.a8
Q.dR.prototype.eC=Q.dR.prototype.C;(function installTearOffs(){installTearOff(H.fq.prototype,"ghh",0,0,0,null,["$0"],["bQ"],1)
installTearOff(H.dx.prototype,"gem",0,0,0,null,["$1"],["aw"],11)
installTearOff(H.eF.prototype,"gfV",0,0,0,null,["$1"],["aU"],11)
installTearOff(H,"xi",1,0,0,null,["$1"],["GB"],8)
installTearOff(P,"GE",1,0,0,null,["$1"],["G0"],6)
installTearOff(P,"GF",1,0,0,null,["$1"],["G1"],6)
installTearOff(P,"GG",1,0,0,null,["$1"],["G2"],6)
installTearOff(P,"xu",1,0,0,null,["$0"],["GA"],1)
installTearOff(P.jV.prototype,"gdL",0,0,0,null,["$2","$1"],["cr","bj"],12)
installTearOff(P.bi.prototype,"gb9",0,0,0,null,["$2","$1"],["al","eY"],12)
var t
installTearOff(t=P.dh.prototype,"gdr",0,0,0,null,["$0"],["bD"],1)
installTearOff(t,"gds",0,0,0,null,["$0"],["bE"],1)
installTearOff(t=P.hS.prototype,"gdr",0,0,0,null,["$0"],["bD"],1)
installTearOff(t,"gds",0,0,0,null,["$0"],["bE"],1)
installTearOff(t,"gf9",0,0,0,null,["$1"],["fa"],function(){return H.eJ(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hS")})
installTearOff(t,"gfd",0,0,0,null,["$2"],["fe"],14)
installTearOff(t,"gfb",0,0,0,null,["$0"],["fc"],1)
installTearOff(P.k0.prototype,"gfN",0,1,0,null,["$1"],["ai"],29)
installTearOff(P,"GP",1,0,0,null,["$2"],["yL"],30)
installTearOff(P,"GQ",1,0,0,null,["$1"],["fx"],4)
installTearOff(t=W.i4.prototype,"gaq",0,1,0,null,["$1"],["cu"],4)
installTearOff(t,"ghc",0,0,0,null,["$1"],["dY"],4)
installTearOff(t,"ghJ",0,0,0,null,["$1"],["hK"],4)
installTearOff(W.eS.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.i7.prototype,"gX",0,1,0,null,["$1"],["J"],32)
installTearOff(W.ic.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.id.prototype,"gX",0,1,0,null,["$1"],["J"],8)
installTearOff(W.ie.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.f_.prototype,"gX",0,1,0,null,["$1"],["J"],13)
installTearOff(W.iv.prototype,"gX",0,1,0,null,["$1"],["J"],9)
installTearOff(W.f1.prototype,"gX",0,1,0,null,["$1"],["J"],7)
installTearOff(W.ix.prototype,"gX",0,1,0,null,["$1"],["J"],7)
installTearOff(W.jo.prototype,"gX",0,1,0,null,["$1"],["J"],5)
installTearOff(W.jp.prototype,"gX",0,1,0,null,["$1"],["J"],10)
installTearOff(W.cf.prototype,"gX",0,1,0,null,["$1"],["J"],10)
installTearOff(W.jz.prototype,"gX",0,1,0,null,["$1"],["J"],15)
installTearOff(W.jD.prototype,"gX",0,1,0,null,["$1"],["J"],9)
installTearOff(W.jF.prototype,"gX",0,1,0,null,["$1"],["J"],16)
installTearOff(W.jG.prototype,"gX",0,1,0,null,["$1"],["J"],17)
installTearOff(W.ch.prototype,"gX",0,1,0,null,["$1"],["J"],18)
installTearOff(W.jK.prototype,"gX",0,1,0,null,["$1"],["J"],19)
installTearOff(W.jL.prototype,"gX",0,1,0,null,["$1"],["J"],20)
installTearOff(W.jM.prototype,"gX",0,1,0,null,["$1"],["J"],21)
installTearOff(W.hP.prototype,"gX",0,1,0,null,["$1"],["J"],22)
installTearOff(W.jW.prototype,"gX",0,1,0,null,["$1"],["J"],33)
installTearOff(W.k_.prototype,"gX",0,1,0,null,["$1"],["J"],24)
installTearOff(W.hV.prototype,"gX",0,1,0,null,["$1"],["J"],25)
installTearOff(W.k3.prototype,"gX",0,1,0,null,["$1"],["J"],26)
installTearOff(W.k5.prototype,"gX",0,1,0,null,["$1"],["J"],27)
installTearOff(P.jH.prototype,"gX",0,1,0,null,["$1"],["J"],28)
installTearOff(A,"v2",1,0,0,null,["$0"],["H6"],1)
installTearOff(R,"es",1,0,0,null,["$1"],["Fj"],0)
installTearOff(R,"wz",1,0,0,null,["$1"],["F7"],0)
installTearOff(R,"ug",1,0,0,null,["$1"],["Fi"],0)
installTearOff(R,"bS",1,0,0,null,["$1"],["Fh"],0)
installTearOff(R,"uf",1,0,0,null,["$1"],["Fg"],0)
installTearOff(R,"wB",1,0,0,null,["$1"],["Fe"],0)
installTearOff(R,"hB",1,0,0,null,["$1"],["Fd"],0)
installTearOff(R,"er",1,0,0,null,["$1"],["Fa"],0)
installTearOff(R,"e3",1,0,0,null,["$1"],["Fc"],0)
installTearOff(R,"fg",1,0,0,null,["$1"],["Ff"],0)
installTearOff(R,"ue",1,0,0,null,["$1"],["Fb"],0)
installTearOff(R,"y",1,0,0,null,["$1"],["F8"],0)
installTearOff(R,"wA",1,0,0,null,["$1"],["F9"],0)
installTearOff(F.ho.prototype,"gaq",0,1,0,null,["$1"],["cu"],4)
installTearOff(O,"H8",1,0,0,null,["$1"],["Ha"],31)
installTearOff(Y.dK.prototype,"ghu",0,0,0,null,["$1"],["e7"],function(){return H.eJ(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dK")})
installTearOff(V,"Hf",1,0,0,null,["$4"],["z4"],3)
installTearOff(V,"He",1,0,0,null,["$4"],["z3"],2)
installTearOff(B,"kf",1,0,0,null,["$1"],["Gv"],23)
installTearOff(T,"GK",1,0,0,null,["$4"],["yV"],3)
installTearOff(T,"GJ",1,0,0,null,["$4"],["yU"],2)
installTearOff(T,"GI",1,0,0,null,["$4"],["yT"],3)
installTearOff(T,"GH",1,0,0,null,["$4"],["yS"],2)
installTearOff(F,"GX",1,0,0,null,["$4"],["z0"],3)
installTearOff(F,"GW",1,0,0,null,["$4"],["z_"],2)
installTearOff(F,"GV",1,0,0,null,["$4"],["yZ"],3)
installTearOff(F,"GU",1,0,0,null,["$4"],["yY"],2)
installTearOff(F,"GT",1,0,0,null,["$4"],["yX"],3)
installTearOff(F,"GS",1,0,0,null,["$4"],["yW"],2)})();(function inheritance(){inherit(P.ac,null)
var t=P.ac
inherit(H.tL,t)
inherit(J.i,t)
inherit(J.i1,t)
inherit(P.hz,t)
inherit(P.o,t)
inherit(H.en,t)
inherit(P.jj,t)
inherit(H.it,t)
inherit(H.pa,t)
inherit(H.eQ,t)
inherit(H.qq,t)
inherit(H.fq,t)
inherit(H.pX,t)
inherit(H.eH,t)
inherit(H.qp,t)
inherit(H.pK,t)
inherit(H.fh,t)
inherit(H.p1,t)
inherit(H.dC,t)
inherit(H.dx,t)
inherit(H.eF,t)
inherit(H.kO,t)
inherit(H.nQ,t)
inherit(H.p7,t)
inherit(P.eb,t)
inherit(H.fZ,t)
inherit(H.k4,t)
inherit(H.dQ,t)
inherit(H.t,t)
inherit(H.mI,t)
inherit(H.mK,t)
inherit(H.hh,t)
inherit(H.k2,t)
inherit(H.jT,t)
inherit(H.jJ,t)
inherit(H.qJ,t)
inherit(P.cC,t)
inherit(P.eR,t)
inherit(P.jV,t)
inherit(P.jZ,t)
inherit(P.bi,t)
inherit(P.jU,t)
inherit(P.dg,t)
inherit(P.oo,t)
inherit(P.dh,t)
inherit(P.jX,t)
inherit(P.pS,t)
inherit(P.qt,t)
inherit(P.qH,t)
inherit(P.eM,t)
inherit(P.qW,t)
inherit(P.qg,t)
inherit(P.qi,t)
inherit(P.o7,t)
inherit(P.qn,t)
inherit(P.dw,t)
inherit(P.f8,t)
inherit(P.b3,t)
inherit(P.qO,t)
inherit(P.mZ,t)
inherit(P.qo,t)
inherit(P.fL,t)
inherit(P.fN,t)
inherit(P.qQ,t)
inherit(P.d7,t)
inherit(P.bE,t)
inherit(P.dY,t)
inherit(P.dk,t)
inherit(P.dE,t)
inherit(P.nq,t)
inherit(P.jI,t)
inherit(P.q1,t)
inherit(P.bK,t)
inherit(P.li,t)
inherit(P.q,t)
inherit(P.bl,t)
inherit(P.d3,t)
inherit(P.dt,t)
inherit(P.dM,t)
inherit(P.B,t)
inherit(P.c9,t)
inherit(P.eC,t)
inherit(P.k7,t)
inherit(P.pb,t)
inherit(P.qF,t)
inherit(W.i4,t)
inherit(W.ju,t)
inherit(W.i6,t)
inherit(P.kR,t)
inherit(W.bs,t)
inherit(W.lM,t)
inherit(W.qN,t)
inherit(P.qK,t)
inherit(P.pD,t)
inherit(P.qm,t)
inherit(P.qv,t)
inherit(P.qw,t)
inherit(P.bg,t)
inherit(P.d6,t)
inherit(T.fB,t)
inherit(T.da,t)
inherit(T.hb,t)
inherit(T.ns,t)
inherit(T.pz,t)
inherit(T.pA,t)
inherit(T.pB,t)
inherit(T.py,t)
inherit(T.m4,t)
inherit(T.iy,t)
inherit(B.hc,t)
inherit(N.a4,t)
inherit(L.fC,t)
inherit(A.jv,t)
inherit(O.c5,t)
inherit(T.hD,t)
inherit(M.fJ,t)
inherit(X.ii,t)
inherit(X.i2,t)
inherit(M.h_,t)
inherit(Z.ih,t)
inherit(E.no,t)
inherit(E.M,t)
inherit(A.a_,t)
inherit(U.b,t)
inherit(Y.dL,t)
inherit(K.cE,t)
inherit(K.bH,t)
inherit(X.G,t)
inherit(G.Y,t)
inherit(A.fI,t)
inherit(B.dm,t)
inherit(B.db,t)
inherit(A.dX,t)
inherit(F.hn,t)
inherit(F.ho,t)
inherit(Q.jx,t)
inherit(A.jA,t)
inherit(Y.dK,t)
inherit(O.cT,t)
inherit(D.cF,t)
inherit(B.dv,t)
inherit(Q.cQ,t)
inherit(B.hO,t)
inherit(Q.h,t)
t=J.i
inherit(J.mt,t)
inherit(J.mu,t)
inherit(J.hi,t)
inherit(J.ej,t)
inherit(J.f9,t)
inherit(J.ek,t)
inherit(H.fb,t)
inherit(H.ep,t)
inherit(W.aS,t)
inherit(W.cK,t)
inherit(W.eP,t)
inherit(W.fO,t)
inherit(W.bJ,t)
inherit(W.iz,t)
inherit(W.l1,t)
inherit(W.eT,t)
inherit(W.i7,t)
inherit(W.ia,t)
inherit(W.l4,t)
inherit(W.ib,t)
inherit(W.iA,t)
inherit(W.id,t)
inherit(W.ie,t)
inherit(W.fS,t)
inherit(W.T,t)
inherit(W.iB,t)
inherit(W.lJ,t)
inherit(W.lN,t)
inherit(W.cl,t)
inherit(W.m_,t)
inherit(W.iC,t)
inherit(W.ha,t)
inherit(W.e4,t)
inherit(W.mT,t)
inherit(W.jo,t)
inherit(W.cn,t)
inherit(W.iM,t)
inherit(W.ni,t)
inherit(W.nj,t)
inherit(W.iN,t)
inherit(W.nx,t)
inherit(W.e2,t)
inherit(W.e5,t)
inherit(W.cf,t)
inherit(W.iO,t)
inherit(W.o5,t)
inherit(W.cp,t)
inherit(W.iP,t)
inherit(W.fj,t)
inherit(W.ch,t)
inherit(W.oi,t)
inherit(W.on,t)
inherit(W.ci,t)
inherit(W.iQ,t)
inherit(W.p0,t)
inherit(W.cr,t)
inherit(W.iR,t)
inherit(W.fm,t)
inherit(W.jL,t)
inherit(W.pg,t)
inherit(W.fn,t)
inherit(W.jM,t)
inherit(W.pN,t)
inherit(W.iS,t)
inherit(W.iT,t)
inherit(W.iD,t)
inherit(W.iE,t)
inherit(W.iF,t)
inherit(W.iG,t)
inherit(W.qU,t)
inherit(W.qV,t)
inherit(P.ma,t)
inherit(P.nn,t)
inherit(P.d2,t)
inherit(P.iH,t)
inherit(P.d4,t)
inherit(P.iI,t)
inherit(P.nF,t)
inherit(P.iJ,t)
inherit(P.d5,t)
inherit(P.iK,t)
inherit(P.pm,t)
inherit(P.fE,t)
inherit(P.km,t)
inherit(P.nS,t)
inherit(P.qT,t)
inherit(P.iL,t)
t=J.hi
inherit(J.nD,t)
inherit(J.eB,t)
inherit(J.el,t)
inherit(F.tO,t)
inherit(R.h7,t)
inherit(R.u5,t)
inherit(R.u4,t)
inherit(S.fe,t)
inherit(S.ux,t)
inherit(S.uy,t)
inherit(S.uz,t)
inherit(S.rT,t)
inherit(S.rW,t)
inherit(S.rK,t)
inherit(S.uB,t)
inherit(S.uC,t)
inherit(S.kZ,t)
inherit(S.uo,t)
inherit(S.up,t)
inherit(S.rE,t)
inherit(S.lU,t)
inherit(S.kG,t)
inherit(S.rJ,t)
inherit(S.rI,t)
inherit(S.rV,t)
inherit(S.oY,t)
inherit(S.rM,t)
inherit(S.hq,t)
inherit(S.tW,t)
inherit(S.tY,t)
inherit(S.uj,t)
inherit(S.uk,t)
inherit(S.u_,t)
inherit(S.u0,t)
inherit(S.t9,t)
inherit(S.ta,t)
inherit(S.u1,t)
inherit(S.tZ,t)
inherit(S.rG,t)
inherit(S.uu,t)
inherit(S.uv,t)
inherit(S.ut,t)
inherit(Z.tJ,t)
inherit(Z.tF,t)
inherit(Z.tG,t)
inherit(J.tK,J.ej)
t=J.f9
inherit(J.jl,t)
inherit(J.jk,t)
inherit(P.jm,P.hz)
t=P.jm
inherit(H.hJ,t)
inherit(W.jY,t)
inherit(H.kL,H.hJ)
t=P.o
inherit(H.v,t)
inherit(H.hp,t)
inherit(H.hN,t)
inherit(P.hg,t)
inherit(H.qI,t)
t=H.v
inherit(H.em,t)
inherit(H.mJ,t)
inherit(P.qh,t)
inherit(P.ev,t)
t=H.em
inherit(H.oK,t)
inherit(H.fa,t)
inherit(P.mM,t)
inherit(H.fR,H.hp)
t=P.jj
inherit(H.jn,t)
inherit(H.jO,t)
inherit(Q.pq,t)
t=H.eQ
inherit(H.rx,t)
inherit(H.ry,t)
inherit(H.ql,t)
inherit(H.pY,t)
inherit(H.me,t)
inherit(H.mf,t)
inherit(H.qs,t)
inherit(H.p2,t)
inherit(H.p3,t)
inherit(H.rz,t)
inherit(H.rl,t)
inherit(H.rm,t)
inherit(H.rn,t)
inherit(H.ro,t)
inherit(H.rp,t)
inherit(H.oP,t)
inherit(H.mx,t)
inherit(H.mw,t)
inherit(H.rh,t)
inherit(H.ri,t)
inherit(H.rj,t)
inherit(P.pH,t)
inherit(P.pG,t)
inherit(P.pI,t)
inherit(P.pJ,t)
inherit(P.qX,t)
inherit(P.qY,t)
inherit(P.r7,t)
inherit(P.r8,t)
inherit(P.lS,t)
inherit(P.lR,t)
inherit(P.q2,t)
inherit(P.qa,t)
inherit(P.q6,t)
inherit(P.q7,t)
inherit(P.q8,t)
inherit(P.q4,t)
inherit(P.q9,t)
inherit(P.q3,t)
inherit(P.qd,t)
inherit(P.qe,t)
inherit(P.qc,t)
inherit(P.qb,t)
inherit(P.or,t)
inherit(P.op,t)
inherit(P.oq,t)
inherit(P.os,t)
inherit(P.ox,t)
inherit(P.ov,t)
inherit(P.ow,t)
inherit(P.oy,t)
inherit(P.oB,t)
inherit(P.oC,t)
inherit(P.oz,t)
inherit(P.oA,t)
inherit(P.oD,t)
inherit(P.oE,t)
inherit(P.ot,t)
inherit(P.ou,t)
inherit(P.pM,t)
inherit(P.pL,t)
inherit(P.qu,t)
inherit(P.r_,t)
inherit(P.qZ,t)
inherit(P.r0,t)
inherit(P.r6,t)
inherit(P.qy,t)
inherit(P.qz,t)
inherit(P.qA,t)
inherit(P.qj,t)
inherit(P.n_,t)
inherit(P.qS,t)
inherit(P.qR,t)
inherit(P.l8,t)
inherit(P.l9,t)
inherit(P.pf,t)
inherit(P.pc,t)
inherit(P.pd,t)
inherit(P.pe,t)
inherit(P.r9,t)
inherit(P.r3,t)
inherit(P.r2,t)
inherit(P.r4,t)
inherit(P.r5,t)
inherit(W.pP,t)
inherit(W.m2,t)
inherit(W.m3,t)
inherit(W.q0,t)
inherit(P.qM,t)
inherit(P.pE,t)
inherit(P.rb,t)
inherit(P.rc,t)
inherit(P.kS,t)
inherit(P.r1,t)
inherit(P.ks,t)
inherit(P.kt,t)
inherit(A.rr,t)
inherit(O.kB,t)
inherit(A.ms,t)
inherit(A.mr,t)
inherit(G.mp,t)
inherit(U.pu,t)
inherit(U.pv,t)
inherit(A.ra,t)
inherit(A.mQ,t)
inherit(A.mO,t)
inherit(A.mP,t)
inherit(A.mR,t)
inherit(O.ru,t)
inherit(O.rv,t)
inherit(O.rt,t)
inherit(V.lf,t)
inherit(V.le,t)
inherit(V.ld,t)
inherit(V.lc,t)
inherit(D.om,t)
inherit(Q.pr,t)
t=H.pK
inherit(H.fr,t)
inherit(H.hX,t)
inherit(H.kP,H.kO)
t=P.eb
inherit(H.jt,t)
inherit(H.my,t)
inherit(H.p9,t)
inherit(H.kJ,t)
inherit(H.nW,t)
inherit(P.fd,t)
inherit(P.cX,t)
inherit(P.V,t)
inherit(P.eA,t)
inherit(P.dN,t)
inherit(P.bN,t)
inherit(P.l0,t)
t=H.oP
inherit(H.ok,t)
inherit(H.fG,t)
t=P.hg
inherit(H.pF,t)
inherit(T.fA,t)
t=H.ep
inherit(H.na,t)
inherit(H.jq,t)
t=H.jq
inherit(H.hv,t)
inherit(H.hw,t)
inherit(H.hx,H.hv)
inherit(H.ht,H.hx)
inherit(H.hy,H.hw)
inherit(H.hu,H.hy)
t=H.ht
inherit(H.nb,t)
inherit(H.nc,t)
t=H.hu
inherit(H.nd,t)
inherit(H.ne,t)
inherit(H.nf,t)
inherit(H.ng,t)
inherit(H.nh,t)
inherit(H.jr,t)
inherit(H.fc,t)
t=P.jV
inherit(P.dS,t)
inherit(P.k6,t)
t=P.jX
inherit(P.pR,t)
inherit(P.pT,t)
inherit(P.qG,P.qt)
t=P.dg
inherit(P.hR,t)
inherit(W.pZ,t)
inherit(P.hS,P.dh)
inherit(P.qr,P.hR)
inherit(P.qx,P.qW)
inherit(P.k1,H.t)
inherit(P.o6,P.o7)
inherit(P.qk,P.o6)
inherit(P.k0,P.qk)
inherit(P.hK,P.mZ)
t=P.fL
inherit(P.kx,t)
inherit(P.lb,t)
t=P.fN
inherit(P.ky,t)
inherit(P.pj,t)
inherit(P.pi,P.lb)
t=P.dk
inherit(P.U,t)
inherit(P.D,t)
t=P.cX
inherit(P.eu,t)
inherit(P.mb,t)
inherit(P.pQ,P.k7)
t=W.aS
inherit(W.aK,t)
inherit(W.fT,t)
inherit(W.kN,t)
inherit(W.lI,t)
inherit(W.lK,t)
inherit(W.lO,t)
inherit(W.h9,t)
inherit(W.hs,t)
inherit(W.nI,t)
inherit(W.jC,t)
inherit(W.o8,t)
inherit(W.eD,t)
inherit(W.co,t)
inherit(W.fU,t)
inherit(W.cP,t)
inherit(W.cG,t)
inherit(W.fV,t)
inherit(W.pk,t)
inherit(W.pp,t)
inherit(W.jP,t)
inherit(W.pw,t)
inherit(W.qE,t)
inherit(P.l2,t)
inherit(P.hC,t)
inherit(P.p5,t)
inherit(P.bB,t)
inherit(P.fF,t)
t=W.aK
inherit(W.dn,t)
inherit(W.e9,t)
inherit(W.ea,t)
inherit(W.i9,t)
inherit(W.fo,t)
inherit(W.pU,t)
t=W.dn
inherit(W.az,t)
inherit(P.ca,t)
t=W.az
inherit(W.eL,t)
inherit(W.kn,t)
inherit(W.hr,t)
inherit(W.kz,t)
inherit(W.kD,t)
inherit(W.fK,t)
inherit(W.la,t)
inherit(W.lH,t)
inherit(W.iv,t)
inherit(W.m7,t)
inherit(W.f3,t)
inherit(W.mc,t)
inherit(W.mB,t)
inherit(W.hk,t)
inherit(W.mY,t)
inherit(W.n3,t)
inherit(W.nm,t)
inherit(W.nr,t)
inherit(W.nv,t)
inherit(W.fi,t)
inherit(W.jD,t)
inherit(W.oa,t)
inherit(W.hE,t)
inherit(W.oR,t)
inherit(W.oT,t)
inherit(W.qf,t)
inherit(W.eO,W.hr)
inherit(W.fW,W.fT)
inherit(W.kv,W.fW)
t=W.bJ
inherit(W.kT,t)
inherit(W.kU,t)
inherit(W.fP,t)
inherit(W.fQ,t)
inherit(W.kV,t)
inherit(W.kW,t)
inherit(W.kX,t)
inherit(W.eS,W.iz)
inherit(W.pO,W.ju)
inherit(W.iU,W.iA)
inherit(W.ic,W.iU)
t=W.T
inherit(W.lg,t)
inherit(W.og,t)
inherit(W.oh,t)
inherit(W.cd,W.eP)
inherit(W.iV,W.iB)
inherit(W.f_,W.iV)
inherit(W.iW,W.iC)
inherit(W.f1,W.iW)
inherit(W.ix,W.f1)
inherit(W.e0,W.h9)
inherit(W.hj,W.e4)
inherit(W.n4,W.hs)
inherit(W.j5,W.iM)
inherit(W.jp,W.j5)
inherit(W.j6,W.iN)
inherit(W.js,W.j6)
inherit(W.nC,W.e5)
inherit(W.j7,W.iO)
inherit(W.jz,W.j7)
inherit(W.o9,W.eD)
inherit(W.fX,W.fU)
inherit(W.jF,W.fX)
inherit(W.j8,W.iP)
inherit(W.jG,W.j8)
inherit(W.j9,W.iQ)
inherit(W.oW,W.j9)
inherit(W.fY,W.fV)
inherit(W.oX,W.fY)
inherit(W.ja,W.iR)
inherit(W.jK,W.ja)
inherit(W.jb,W.iS)
inherit(W.hP,W.jb)
inherit(W.jc,W.iT)
inherit(W.jW,W.jc)
inherit(W.pV,W.ib)
inherit(W.iX,W.iD)
inherit(W.k_,W.iX)
inherit(W.iY,W.iE)
inherit(W.hV,W.iY)
inherit(W.iZ,W.iF)
inherit(W.k3,W.iZ)
inherit(W.j_,W.iG)
inherit(W.k5,W.j_)
t=P.kR
inherit(W.pW,t)
inherit(P.kr,t)
inherit(W.hQ,W.pZ)
inherit(W.q_,P.oo)
inherit(P.qL,P.qK)
inherit(P.jS,P.pD)
inherit(P.bT,P.qw)
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
inherit(P.lL,t)
inherit(P.n0,t)
inherit(P.n1,t)
inherit(P.nA,t)
inherit(P.o2,t)
inherit(P.oN,t)
inherit(P.pl,t)
inherit(P.hT,t)
inherit(P.qB,t)
inherit(P.qC,t)
inherit(P.qD,t)
t=P.cm
inherit(P.kk,t)
inherit(P.m8,t)
inherit(P.oL,t)
inherit(P.ez,t)
inherit(P.ph,t)
inherit(P.j0,P.iH)
inherit(P.mE,P.j0)
inherit(P.j1,P.iI)
inherit(P.nk,P.j1)
inherit(P.j2,P.iJ)
inherit(P.oI,P.j2)
inherit(P.oV,P.ez)
inherit(P.j3,P.iK)
inherit(P.p6,P.j3)
t=P.bB
inherit(P.dW,t)
inherit(P.kQ,t)
inherit(P.eN,P.dW)
inherit(P.j4,P.iL)
inherit(P.jH,P.j4)
t=B.hc
inherit(S.kl,t)
inherit(M.kq,t)
inherit(A.kM,t)
inherit(M.kY,t)
inherit(V.l5,t)
inherit(U.lz,t)
inherit(N.mA,t)
inherit(F.n8,t)
inherit(G.nG,t)
inherit(Q.nU,t)
inherit(N.oc,t)
inherit(D.oQ,t)
inherit(V.oS,t)
inherit(F.px,t)
t=N.a4
inherit(T.l3,t)
inherit(R.nM,t)
t=T.l3
inherit(K.bU,t)
inherit(S.bF,t)
inherit(T.c1,t)
inherit(M.bw,t)
inherit(A.nu,A.jv)
inherit(L.a8,A.nu)
t=O.c5
inherit(O.dl,t)
inherit(O.ig,t)
inherit(O.ey,t)
t=O.dl
inherit(U.ku,t)
inherit(Y.nO,t)
inherit(V.lP,t)
inherit(Q.m9,t)
inherit(Q.nB,t)
inherit(M.oj,t)
inherit(B.pC,t)
t=U.ku
inherit(U.mV,t)
inherit(U.np,t)
inherit(U.oF,O.ig)
t=U.oF
inherit(U.oG,t)
inherit(U.oH,t)
t=T.hD
inherit(O.kw,t)
inherit(Y.lV,t)
inherit(Y.lW,t)
inherit(B.lY,t)
inherit(X.m5,t)
inherit(Q.m6,t)
inherit(S.mC,t)
inherit(Z.mU,t)
inherit(S.mW,t)
inherit(U.mX,t)
inherit(E.n7,t)
inherit(V.nt,t)
inherit(N.nL,t)
inherit(N.nT,t)
inherit(E.nY,t)
inherit(Y.nZ,t)
inherit(Y.o0,t)
inherit(L.o1,t)
inherit(S.o4,t)
inherit(Y.ob,t)
inherit(R.oM,t)
inherit(U.oZ,t)
inherit(E.po,t)
inherit(M.ps,t)
t=O.ey
inherit(Y.oU,t)
inherit(Y.kH,t)
inherit(Y.nl,t)
inherit(U.pt,t)
t=L.fC
inherit(L.kA,t)
inherit(T.kC,t)
inherit(T.kF,t)
inherit(U.l6,t)
inherit(Z.l7,t)
inherit(N.lT,t)
inherit(T.lX,t)
inherit(V.lZ,t)
inherit(X.m0,t)
inherit(Z.mz,t)
inherit(Q.mD,t)
inherit(K.mF,t)
inherit(G.mG,t)
inherit(D.n2,t)
inherit(V.n5,t)
inherit(U.n6,t)
inherit(Z.nH,t)
inherit(E.nN,t)
inherit(F.nP,t)
inherit(V.nV,t)
inherit(K.o_,t)
inherit(F.od,t)
inherit(N.oe,t)
inherit(S.of,t)
inherit(L.oO,t)
inherit(N.p_,t)
inherit(Y.p4,t)
inherit(Q.pn,t)
t=S.bF
inherit(S.i3,t)
inherit(S.m1,t)
inherit(E.iw,E.no)
t=E.M
inherit(E.fD,t)
inherit(E.kp,t)
inherit(Q.nE,Q.m9)
inherit(U.W,U.b)
t=R.nM
inherit(R.a1,t)
inherit(R.Q,t)
inherit(R.a6,t)
inherit(R.bv,R.a6)
t=Y.dL
inherit(Y.ae,t)
inherit(Y.c_,t)
inherit(Y.S,t)
inherit(Y.i5,t)
inherit(Y.bC,t)
inherit(Y.cV,t)
inherit(Y.kK,t)
inherit(Y.jw,t)
inherit(Y.iu,t)
inherit(Y.jy,t)
t=Y.c_
inherit(Y.cY,t)
inherit(Y.br,t)
inherit(U.at,A.a_)
t=G.Y
inherit(G.aX,t)
inherit(G.bG,t)
inherit(G.e,t)
inherit(G.ar,G.bG)
t=D.cF
inherit(D.jR,t)
inherit(D.nR,t)
t=Q.cQ
inherit(Q.hM,t)
inherit(Q.hL,t)
inherit(Q.dR,Q.hM)
inherit(B.jQ,Q.dR)
t=S.fe
inherit(S.uh,t)
inherit(S.kI,t)
inherit(S.mH,t)
inherit(S.tU,t)
inherit(S.t8,t)
t=S.kI
inherit(S.u7,t)
inherit(S.u2,t)
t=S.mH
inherit(S.rO,t)
inherit(S.rF,t)
t=S.kZ
inherit(S.tP,t)
inherit(S.l_,t)
inherit(S.nw,S.l_)
inherit(S.ul,S.nw)
t=S.kG
inherit(S.u8,t)
inherit(S.um,t)
t=S.lU
inherit(S.uq,t)
inherit(S.u9,t)
inherit(S.rU,t)
inherit(S.un,t)
t=S.oY
inherit(S.us,t)
inherit(S.rL,t)
inherit(S.uA,t)
t=S.hq
inherit(S.tV,t)
inherit(S.tX,t)
inherit(S.ui,t)
inherit(Q.eE,Q.hL)
inherit(Q.jN,Q.eE)
mixin(H.hJ,H.pa)
mixin(H.hv,P.b3)
mixin(H.hx,H.it)
mixin(H.hw,P.b3)
mixin(H.hy,H.it)
mixin(P.hz,P.b3)
mixin(P.hK,P.qO)
mixin(W.fT,P.b3)
mixin(W.fW,W.bs)
mixin(W.iz,W.i6)
mixin(W.ju,W.i6)
mixin(W.iA,P.b3)
mixin(W.iU,W.bs)
mixin(W.iB,P.b3)
mixin(W.iV,W.bs)
mixin(W.iC,P.b3)
mixin(W.iW,W.bs)
mixin(W.iM,P.b3)
mixin(W.j5,W.bs)
mixin(W.iN,P.b3)
mixin(W.j6,W.bs)
mixin(W.iO,P.b3)
mixin(W.j7,W.bs)
mixin(W.fU,P.b3)
mixin(W.fX,W.bs)
mixin(W.iP,P.b3)
mixin(W.j8,W.bs)
mixin(W.iQ,P.b3)
mixin(W.j9,W.bs)
mixin(W.fV,P.b3)
mixin(W.fY,W.bs)
mixin(W.iR,P.b3)
mixin(W.ja,W.bs)
mixin(W.iS,P.b3)
mixin(W.jb,W.bs)
mixin(W.iT,P.b3)
mixin(W.jc,W.bs)
mixin(W.iD,P.b3)
mixin(W.iX,W.bs)
mixin(W.iE,P.b3)
mixin(W.iY,W.bs)
mixin(W.iF,P.b3)
mixin(W.iZ,W.bs)
mixin(W.iG,P.b3)
mixin(W.j_,W.bs)
mixin(P.iH,P.b3)
mixin(P.j0,W.bs)
mixin(P.iI,P.b3)
mixin(P.j1,W.bs)
mixin(P.iJ,P.b3)
mixin(P.j2,W.bs)
mixin(P.iK,P.b3)
mixin(P.j3,W.bs)
mixin(P.iL,P.b3)
mixin(P.j4,W.bs)
mixin(A.jv,P.f8)
mixin(Q.hM,P.b3)
mixin(Q.hL,P.f8)})();(function constants(){C.L=W.e0.prototype
C.M=J.i.prototype
C.b=J.ej.prototype
C.f=J.jk.prototype
C.a=J.jl.prototype
C.d=J.f9.prototype
C.c=J.ek.prototype
C.T=J.el.prototype
C.q=H.fc.prototype
C.F=J.nD.prototype
C.t=J.eB.prototype
C.H=new P.ky(!1)
C.G=new P.kx(C.H)
C.i=new W.i4()
C.I=new P.nq()
C.J=new P.pS()
C.K=new P.qm()
C.e=new P.qx()
C.o=new W.qN()
C.p=new P.dE(0)
C.N=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.u=function(hooks) { return hooks; }
C.O=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.P=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.Q=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.v=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.R=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.S=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.w=H.a(makeConstList([127,2047,65535,1114111]),[P.D])
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
C.h=new F.hn(0,"LogLevel.ERROR")
C.m=new F.hn(1,"LogLevel.WARN")
C.Z=new F.hn(3,"LogLevel.VERBOSE")
C.X=H.a(makeConstList([]),[P.B])
C.a_=new H.kP(0,{},C.X,[P.B,P.B])
C.a0=H.bY("bg")
C.a1=H.bY("Hn")
C.r=H.bY("Ho")
C.a2=H.bY("Hp")
C.a3=H.bY("Hq")
C.a4=H.bY("Hs")
C.a5=H.bY("Ht")
C.a6=H.bY("Hu")
C.a7=H.bY("mv")
C.a8=H.bY("d3")
C.a9=H.bY("B")
C.aa=H.bY("Hy")
C.ab=H.bY("Hz")
C.ac=H.bY("HA")
C.ad=H.bY("d6")
C.ae=H.bY("d7")
C.af=H.bY("U")
C.ag=H.bY("D")
C.ah=H.bY("dk")
C.n=new P.pi(!1)})();(function staticFields(){$.wu="$cachedFunction"
$.wv="$cachedInvocation"
$.dD=0
$.fH=null
$.v5=null
$.uN=null
$.xr=null
$.xD=null
$.rd=null
$.rk=null
$.uO=null
$.ft=null
$.hY=null
$.hZ=null
$.uJ=!1
$.aB=C.e
$.vm=0
$.vi=null
$.vh=null
$.vg=null
$.vj=null
$.vf=null
$.yw=null
$.yz=null
$.yb=null
$.yc=null
$.ya=null
$.yf=null
$.yn=null
$.yl=null
$.yB=null
$.yr=null
$.yh=null
$.yk=null
$.yd=null
$.yj=null
$.yu=null
$.yi=null
$.yy=null
$.yt=null
$.yg=null
$.y9=null
$.yo=null
$.yx=null
$.yq=null
$.yv=null
$.yA=null
$.ys=null
$.ye=null
$.ym=null
$.yp=null
$.af="accent"
$.ah="aspect1"
$.ag="aspect2"
$.aq="shoe1"
$.ap="shoe2"
$.aj="cloak1"
$.ak="cloak2"
$.ai="cloak3"
$.ao="shirt1"
$.an="shirt2"
$.am="pants1"
$.al="pants2"
$.av=1300
$.k=3
$.m=2
$.K=1
$.A=0.1
$.ze=1
$.zd=-1
$.t3=null
$.dZ=null
$.vn=null
$.ee=null
$.eY=null
$.il=null
$.rX=null
$.lB=null
$.t5=null
$.im=null
$.ij=null
$.vp=null
$.is=null
$.h0=null
$.dI=null
$.vo=null
$.lA=null
$.lG=null
$.eW=null
$.zb=null
$.z8=null
$.za=null
$.zc=null
$.h6=null
$.eU=null
$.cw=null
$.d_=null
$.eg=null
$.lF=null
$.c4=null
$.c3=null
$.rZ=null
$.h4=null
$.ed=null
$.z9=null
$.h3=null
$.cB=null
$.e_=null
$.ir=null
$.cZ=null
$.eX=null
$.bZ=null
$.lD=null
$.t_=null
$.b0=null
$.cA=null
$.cb=null
$.cc=null
$.lC=null
$.bV=null
$.dr=null
$.dq=null
$.dp=null
$.dG=null
$.dH=null
$.dF=null
$.d1=null
$.h5=null
$.iq=null
$.ik=null
$.cR=null
$.cv=null
$.bc=null
$.eV=null
$.ef=null
$.lE=null
$.h2=null
$.h1=null
$.t1=null
$.cz=null
$.t4=null
$.rY=null
$.vr=null
$.ec=null
$.cy=null
$.d0=null
$.dc=null
$.eZ=null
$.t0=null
$.t2=null
$.vq=null
$.io=null
$.ip=null
$.eh=null
$.vs=!1
$.t7=null
$.zf=null
$.vu=null
$.vw=null
$.zo=null
$.vv=null
$.zm=null
$.zn=null
$.t6=null
$.zj=null
$.zh=null
$.zi=null
$.zk=null
$.zl=null
$.zy=null
$.zr=null
$.zs=null
$.zt=null
$.zu=null
$.zv=null
$.zw=null
$.zx=null
$.zA=null
$.zB=null
$.zC=null
$.zD=null
$.zE=null
$.zF=null
$.zz=null
$.EP="JACK"
$.ET="PM"
$.EQ="JS"
$.EO="HP"
$.EY="YD"
$.EV="SI"
$.EW="SU"
$.ER="ME"
$.EU="RB"
$.EM="GN"
$.wn="MP"
$.EK="AR"
$.ES="PE"
$.EL="DP"
$.EX="WV"
$.EN="HB"
$.n="PLAYER1TAG"
$.et="PLAYER2TAG"
$.z="DENIZENTAG"
$.u="CONSORTTAG"
$.J="CONSORTSOUNDTAG"
$.aW="MCGUFFINTAG"
$.ad="TAGPHYSICALMCGUFFIN"
$.cg="TAGWEAPON"
$.Fu=null
$.FH=null
$.Fo=null
$.Fr=null
$.Fx=null
$.FC=null
$.FA=null
$.FK=null
$.FJ=null
$.FB=null
$.FM=null
$.Fw=null
$.FL=null
$.FF=null
$.FD=null
$.FG=null
$.Fq=null
$.Fp=null
$.Fz=null
$.Fy=null
$.Fv=null
$.FI=null
$.Fs=null
$.Ft=null
$.FE=null
$.xw=!1
$.FN=!1
$.wD=null
$.wp=!1
$.FU=13
$.au=3
$.bM=2
$.aO=1
$.mq=0
$.I=1
$.a3=3
$.H=4
$.tC=6
$.tD=7
$.aa=8
$.w=9
$.r=10
$.f5=null
$.f7=null
$.tp=null
$.ty=null
$.tv=null
$.vE=null
$.tk=null
$.tu=null
$.he=null
$.vN=null
$.w7=null
$.vH=null
$.vO=null
$.tl=null
$.tt=null
$.wa=null
$.wc=null
$.tg=null
$.jf=null
$.jd=null
$.aF=null
$.w1=null
$.td=null
$.vX=null
$.f6=null
$.vG=null
$.wd=null
$.w9=null
$.w6=null
$.tr=null
$.mj=null
$.ei=null
$.wb=null
$.mh=null
$.tm=null
$.e1=null
$.w4=null
$.dd=null
$.hd=null
$.tB=null
$.w5=null
$.tA=null
$.tw=null
$.tx=null
$.mm=null
$.je=null
$.A3=null
$.vQ=null
$.vW=null
$.w3=null
$.w2=null
$.E=null
$.vL=null
$.mi=null
$.bP=null
$.b9=null
$.bQ=null
$.X=null
$.aM=null
$.c7=null
$.L=null
$.P=null
$.aH=null
$.b6=null
$.bW=null
$.bh=null
$.bm=null
$.ce=null
$.b2=null
$.bu=null
$.bR=null
$.a0=null
$.Eo=null
$.aG=null
$.b8=null
$.aZ=null
$.ab=null
$.c6=null
$.b_=null
$.aD=null
$.bX=null
$.b1=null
$.ax=null
$.bj=null
$.c0=null
$.aP=null
$.bn=null
$.bk=null
$.a7=null
$.bL=null
$.a9=null
$.be=null
$.bo=null
$.aY=null
$.bd=null
$.aI=null
$.b4=null
$.aT=null
$.Z=null
$.aE=null
$.aN=null
$.b5=null
$.aC=null
$.aA=null
$.a2=null
$.R=null
$.N=null
$.aw=null
$.aU=null
$.b7=null
$.aV=null
$.Bl=null
$.E0=null
$.Ez=null
$.AS=null
$.DY=null
$.Bm=null
$.vD=null
$.Ec=null
$.Cl=null
$.Bh=null
$.A_=null
$.CW=null
$.jg=null
$.vI=null
$.Dl=null
$.AP=null
$.C4=null
$.AN=null
$.th=null
$.Ay=null
$.By=null
$.AW=null
$.Ce=null
$.Ek=null
$.Bn=null
$.tj=null
$.Cf=null
$.AU=null
$.AE=null
$.w0=null
$.zT=null
$.tc=null
$.BY=null
$.tq=null
$.CA=null
$.Cu=null
$.zX=null
$.AH=null
$.Dv=null
$.zZ=null
$.DX=null
$.C3=null
$.B2=null
$.Df=null
$.DR=null
$.to=null
$.Cp=null
$.Dc=null
$.AV=null
$.zM=null
$.En=null
$.C7=null
$.AD=null
$.Eb=null
$.CD=null
$.AK=null
$.DW=null
$.Bc=null
$.DD=null
$.DE=null
$.zV=null
$.Cw=null
$.AX=null
$.B6=null
$.ED=null
$.hf=null
$.Dt=null
$.DU=null
$.ml=null
$.As=null
$.CN=null
$.CR=null
$.zS=null
$.Bb=null
$.DV=null
$.CC=null
$.Ee=null
$.Dh=null
$.CS=null
$.vV=null
$.DH=null
$.Et=null
$.E_=null
$.BL=null
$.D3=null
$.BM=null
$.Dw=null
$.Er=null
$.Cd=null
$.B8=null
$.Bv=null
$.Aj=null
$.Dd=null
$.Bt=null
$.BA=null
$.AZ=null
$.DG=null
$.f4=null
$.CH=null
$.vT=null
$.BN=null
$.vU=null
$.Ew=null
$.Ao=null
$.Dr=null
$.Ds=null
$.Dq=null
$.Dp=null
$.DN=null
$.BB=null
$.Cx=null
$.DQ=null
$.Co=null
$.CI=null
$.vK=null
$.Eq=null
$.Cv=null
$.Be=null
$.Bf=null
$.CQ=null
$.EC=null
$.C1=null
$.Ep=null
$.vZ=null
$.DC=null
$.Cb=null
$.mo=null
$.BW=null
$.D5=null
$.An=null
$.Bi=null
$.Dy=null
$.Cy=null
$.Ej=null
$.vY=null
$.CG=null
$.Au=null
$.AQ=null
$.D1=null
$.E6=null
$.Dx=null
$.mg=null
$.tz=null
$.DJ=null
$.Es=null
$.BK=null
$.A7=null
$.Ag=null
$.E4=null
$.CK=null
$.Cm=null
$.CL=null
$.E1=null
$.BX=null
$.zW=null
$.Bz=null
$.Ck=null
$.DL=null
$.Bs=null
$.Am=null
$.Dn=null
$.Do=null
$.Eh=null
$.DA=null
$.ts=null
$.vJ=null
$.AL=null
$.vM=null
$.BR=null
$.mk=null
$.D7=null
$.Ct=null
$.Dj=null
$.tn=null
$.mn=null
$.vS=null
$.B4=null
$.Bx=null
$.w_=null
$.vP=null
$.AG=null
$.E8=null
$.Az=null
$.CU=null
$.BO=null
$.DP=null
$.Cn=null
$.A4=null
$.BP=null
$.B1=null
$.CY=null
$.C6=null
$.Cs=null
$.Cc=null
$.Cg=null
$.Dm=null
$.Di=null
$.zP=null
$.E5=null
$.Da=null
$.AT=null
$.AY=null
$.Bw=null
$.E2=null
$.Bp=null
$.C8=null
$.Ab=null
$.Bj=null
$.B0=null
$.CM=null
$.B9=null
$.Du=null
$.Ca=null
$.vF=null
$.D6=null
$.BQ=null
$.Bq=null
$.zN=null
$.zU=null
$.CJ=null
$.CT=null
$.C5=null
$.BI=null
$.Em=null
$.Ae=null
$.Br=null
$.C9=null
$.AR=null
$.w8=null
$.AF=null
$.Dz=null
$.Ac=null
$.E7=null
$.Ci=null
$.A6=null
$.Dg=null
$.D2=null
$.AM=null
$.BC=null
$.At=null
$.E3=null
$.BU=null
$.Ei=null
$.Av=null
$.BD=null
$.Aw=null
$.AO=null
$.D9=null
$.AI=null
$.BV=null
$.Cz=null
$.Ap=null
$.DO=null
$.Ey=null
$.DF=null
$.Cq=null
$.DM=null
$.Cr=null
$.A1=null
$.zO=null
$.Cj=null
$.A9=null
$.Ax=null
$.A2=null
$.A5=null
$.CF=null
$.CZ=null
$.Ea=null
$.BS=null
$.Ex=null
$.De=null
$.Db=null
$.BZ=null
$.BT=null
$.AB=null
$.BG=null
$.Ch=null
$.CO=null
$.DI=null
$.zR=null
$.Eu=null
$.B7=null
$.DS=null
$.B_=null
$.A0=null
$.Aq=null
$.Ai=null
$.EB=null
$.Ar=null
$.Ba=null
$.AA=null
$.Eg=null
$.DK=null
$.E9=null
$.zQ=null
$.Dk=null
$.C_=null
$.C2=null
$.El=null
$.DT=null
$.vR=null
$.Bg=null
$.D0=null
$.Ev=null
$.Bk=null
$.C0=null
$.ti=null
$.BJ=null
$.BH=null
$.DB=null
$.D_=null
$.BE=null
$.Ah=null
$.DZ=null
$.CP=null
$.Ed=null
$.EA=null
$.tf=null
$.te=null
$.Ad=null
$.Bd=null
$.D8=null
$.AJ=null
$.D4=null
$.B3=null
$.zY=null
$.Af=null
$.CE=null
$.B5=null
$.CX=null
$.Al=null
$.Bo=null
$.Ef=null
$.A8=null
$.Bu=null
$.CV=null
$.Ak=null
$.BF=null
$.CB=null
$.Aa=null
$.AC=null
$.x2=4
$.f0="OWNER"
$.wj=!1
$.tT=null
$.xF=""
$.ol=null
$.FR=null
$.hH=null
$.ew=null
$.FQ=null
$.dO=null
$.ex=null
$.cq=null
$.fk=null
$.hF=null
$.hG=null
$.du=null
$.c8=null
$.wF=!1})();(function lazyInitializers(){lazy($,"vd","$get$vd",function(){return H.xz("_$dart_dartClosure")})
lazy($,"tM","$get$tM",function(){return H.xz("_$dart_js")})
lazy($,"vB","$get$vB",function(){return H.zK()})
lazy($,"vC","$get$vC",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vm
$.vm=t+1
t="expando$key$"+t}return new P.li(null,t,[P.D])})
lazy($,"wJ","$get$wJ",function(){return H.dP(H.p8({
toString:function(){return"$receiver$"}}))})
lazy($,"wK","$get$wK",function(){return H.dP(H.p8({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"wL","$get$wL",function(){return H.dP(H.p8(null))})
lazy($,"wM","$get$wM",function(){return H.dP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wQ","$get$wQ",function(){return H.dP(H.p8(void 0))})
lazy($,"wR","$get$wR",function(){return H.dP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wO","$get$wO",function(){return H.dP(H.wP(null))})
lazy($,"wN","$get$wN",function(){return H.dP(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"wT","$get$wT",function(){return H.dP(H.wP(void 0))})
lazy($,"wS","$get$wS",function(){return H.dP(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uF","$get$uF",function(){return P.G_()})
lazy($,"h8","$get$h8",function(){return P.G5(null,P.d3)})
lazy($,"i_","$get$i_",function(){return[]})
lazy($,"x4","$get$x4",function(){return H.EZ([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xp","$get$xp",function(){return P.Gu()})
lazy($,"vc","$get$vc",function(){return P.dJ("^\\S+$",!0,!1)})
lazy($,"ko","$get$ko",function(){return P.cD(P.D,L.fC)})
lazy($,"v7","$get$v7",function(){return P.dJ("[\\/]",!0,!1)})
lazy($,"bO","$get$bO",function(){return H.a([],[S.bF])})
lazy($,"lQ","$get$lQ",function(){return P.cD(P.B,Z.ih)})
lazy($,"md","$get$md",function(){return P.cD(P.D,B.hc)})
lazy($,"we","$get$we",function(){return H.a([],[A.a_])})
lazy($,"wo","$get$wo",function(){return H.a([],[P.B])})
lazy($,"nX","$get$nX",function(){return P.cD(P.D,T.hD)})
lazy($,"ay","$get$ay",function(){return H.a([],[U.at])})
lazy($,"wE","$get$wE",function(){return P.wh([0,new K.cE("Pixels -> Bytes",T.GK(),T.GJ()),1,new K.cE("Pixels -> Packed bits",T.GI(),T.GH()),2,new K.cE("RLE 1 byte",V.rS(1),V.rR(1)),3,new K.cE("RLE 2 bytes",V.rS(2),V.rR(2)),4,new K.cE("RLE 3 bytes",V.rS(3),V.rR(3)),5,new K.cE("RLE packed 1 byte",V.rQ(1),V.rP(1)),6,new K.cE("RLE packed 2 bytes",V.rQ(2),V.rP(2)),7,new K.cE("RLE packed 3 bytes",V.rQ(3),V.rP(3)),8,new K.cE("RLE dynamic",V.Hf(),V.He()),9,new K.cE("Exponential-Golomb pixels",F.GX(),F.GW()),10,new K.cE("Exponential-Golomb run RLE",F.GV(),F.GU()),11,new K.cE("Exponential-Golomb run/data RLE",F.GT(),F.GS())],P.D,K.cE)})
lazy($,"c","$get$c",function(){return P.a5(null,null,null,G.Y)})
lazy($,"x0","$get$x0",function(){return P.dJ("[\n\r]+",!0,!1)})
lazy($,"x1","$get$x1",function(){return P.dJ("( *)(.*)",!0,!1)})
lazy($,"x_","$get$x_",function(){return P.dJ("^s*//",!0,!1)})
lazy($,"wZ","$get$wZ",function(){return P.dJ("//",!0,!1)})
lazy($,"cH","$get$cH",function(){return new F.ho(!1,!1,"WordListFileFormat")})
lazy($,"x3","$get$x3",function(){return new T.py(null)})
lazy($,"v3","$get$v3",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cS","$get$cS",function(){return P.cD(P.B,Y.dK)})
lazy($,"wk","$get$wk",function(){return P.dJ("[\\/]",!0,!1)})
lazy($,"tS","$get$tS",function(){return P.cD(P.B,W.fi)})
lazy($,"u3","$get$u3",function(){return A.fM(255,0,255,255)})
lazy($,"nz","$get$nz",function(){return new F.ho(!1,!1,"Path Utils")})
lazy($,"ny","$get$ny",function(){return P.cD(P.eC,P.D)})
lazy($,"cO","$get$cO",function(){return H.a([],[D.cF])})
lazy($,"hI","$get$hI",function(){return P.dJ("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fl","$get$fl",function(){return P.dJ("\\\\(?!\\\\)",!0,!1)})
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
mangledGlobalNames:{D:"int",U:"double",dk:"num",B:"String",d7:"bool",d3:"Null",q:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.d7,args:[[P.q,E.iw]]},{func:1,v:true},{func:1,ret:P.d6,args:[P.bg,P.D,P.D,O.cT]},{func:1,ret:P.bg,args:[P.D,P.bg,P.bg,O.cT]},{func:1,v:true,args:[P.ac]},{func:1,ret:P.B,args:[P.D]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.aK,args:[P.D]},{func:1,ret:P.B,args:[P.B]},{func:1,ret:W.dn,args:[P.D]},{func:1,ret:W.cn,args:[P.D]},{func:1,args:[,]},{func:1,v:true,args:[P.ac],opt:[P.dM]},{func:1,ret:W.cd,args:[P.D]},{func:1,v:true,args:[,P.dM]},{func:1,ret:W.cf,args:[P.D]},{func:1,ret:W.co,args:[P.D]},{func:1,ret:W.cp,args:[P.D]},{func:1,ret:W.fj,args:[P.D]},{func:1,ret:W.cr,args:[P.D]},{func:1,ret:W.fm,args:[P.D]},{func:1,ret:W.fn,args:[P.D]},{func:1,ret:P.bT,args:[P.D]},{func:1,ret:P.B,args:[P.dt]},{func:1,ret:W.cl,args:[P.D]},{func:1,ret:W.fo,args:[P.D]},{func:1,ret:W.ch,args:[P.D]},{func:1,ret:W.ci,args:[P.D]},{func:1,ret:P.bl,args:[P.D]},{func:1,ret:P.d7,args:[P.ac]},{func:1,ret:P.D,args:[P.bE,P.bE]},{func:1,v:true,args:[P.B]},{func:1,ret:W.eT,args:[P.D]},{func:1,ret:W.bJ,args:[P.D]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.i,AnimationEffectTiming:J.i,AnimationTimeline:J.i,AppBannerPromptResult:J.i,BarProp:J.i,Body:J.i,CacheStorage:J.i,CanvasGradient:J.i,CanvasPattern:J.i,CanvasRenderingContext2D:J.i,CHROMIUMValuebuffer:J.i,CircularGeofencingRegion:J.i,Client:J.i,Clients:J.i,CompositorProxy:J.i,ConsoleBase:J.i,Coordinates:J.i,CredentialsContainer:J.i,Crypto:J.i,CryptoKey:J.i,CSS:J.i,DeprecatedStorageInfo:J.i,DeprecatedStorageQuota:J.i,DeviceAcceleration:J.i,DeviceRotationRate:J.i,DirectoryReader:J.i,DOMImplementation:J.i,Iterator:J.i,DOMMatrix:J.i,DOMMatrixReadOnly:J.i,DOMParser:J.i,DOMPoint:J.i,DOMPointReadOnly:J.i,EffectModel:J.i,Stream:J.i,FormData:J.i,GamepadButton:J.i,Geofencing:J.i,GeofencingRegion:J.i,Geolocation:J.i,Geoposition:J.i,Headers:J.i,HMDVRDevice:J.i,IdleDeadline:J.i,ImageBitmap:J.i,ImageBitmapRenderingContext:J.i,InjectedScriptHost:J.i,InputDeviceCapabilities:J.i,IntersectionObserver:J.i,IntersectionObserverEntry:J.i,KeyframeEffect:J.i,MediaDeviceInfo:J.i,MediaDevices:J.i,MediaError:J.i,MediaKeyStatusMap:J.i,MediaKeySystemAccess:J.i,MediaKeys:J.i,MediaMetadata:J.i,MediaSession:J.i,MemoryInfo:J.i,MessageChannel:J.i,Metadata:J.i,MIDIInputMap:J.i,MIDIOutputMap:J.i,MutationObserver:J.i,WebKitMutationObserver:J.i,MutationRecord:J.i,NavigatorStorageUtils:J.i,NodeFilter:J.i,NodeIterator:J.i,NonDocumentTypeChildNode:J.i,NonElementParentNode:J.i,OffscreenCanvas:J.i,PerformanceNavigation:J.i,PerformanceObserver:J.i,PerformanceObserverEntryList:J.i,PerformanceTiming:J.i,Permissions:J.i,PositionError:J.i,PositionSensorVRDevice:J.i,Presentation:J.i,PushManager:J.i,PushMessageData:J.i,PushSubscription:J.i,Range:J.i,ReadableByteStream:J.i,ReadableByteStreamReader:J.i,ReadableStreamReader:J.i,RTCCertificate:J.i,RTCIceCandidate:J.i,mozRTCIceCandidate:J.i,RTCSessionDescription:J.i,mozRTCSessionDescription:J.i,RTCStatsReport:J.i,RTCStatsResponse:J.i,Screen:J.i,ScrollState:J.i,Selection:J.i,SharedArrayBuffer:J.i,SourceInfo:J.i,StorageInfo:J.i,StorageManager:J.i,StorageQuota:J.i,StyleMedia:J.i,StylePropertyMap:J.i,SyncManager:J.i,TextMetrics:J.i,TreeWalker:J.i,UnderlyingSourceBase:J.i,URLSearchParams:J.i,VRDevice:J.i,VREyeParameters:J.i,VRFieldOfView:J.i,VRPositionState:J.i,ValidityState:J.i,VideoPlaybackQuality:J.i,VideoTrack:J.i,WindowClient:J.i,WorkerConsole:J.i,XPathEvaluator:J.i,XPathExpression:J.i,XPathNSResolver:J.i,XPathResult:J.i,XMLSerializer:J.i,XSLTProcessor:J.i,Bluetooth:J.i,BluetoothAdvertisingData:J.i,BluetoothCharacteristicProperties:J.i,BluetoothRemoteGATTServer:J.i,BluetoothRemoteGATTService:J.i,BluetoothUUID:J.i,Cache:J.i,DOMFileSystemSync:J.i,DirectoryEntrySync:J.i,DirectoryReaderSync:J.i,EntrySync:J.i,FileEntrySync:J.i,FileReaderSync:J.i,FileWriterSync:J.i,HTMLAllCollection:J.i,NFC:J.i,PagePopupController:J.i,Request:J.i,Response:J.i,SubtleCrypto:J.i,USBAlternateInterface:J.i,USBConfiguration:J.i,USBDevice:J.i,USBEndpoint:J.i,USBInTransferResult:J.i,USBInterface:J.i,USBIsochronousInTransferPacket:J.i,USBIsochronousInTransferResult:J.i,USBIsochronousOutTransferPacket:J.i,USBIsochronousOutTransferResult:J.i,USBOutTransferResult:J.i,WebKitCSSMatrix:J.i,Worklet:J.i,WorkletGlobalScope:J.i,IDBCursor:J.i,IDBCursorWithValue:J.i,IDBFactory:J.i,IDBKeyRange:J.i,SVGAngle:J.i,SVGAnimatedAngle:J.i,SVGAnimatedBoolean:J.i,SVGAnimatedEnumeration:J.i,SVGAnimatedInteger:J.i,SVGAnimatedLength:J.i,SVGAnimatedLengthList:J.i,SVGAnimatedNumber:J.i,SVGAnimatedNumberList:J.i,SVGAnimatedPreserveAspectRatio:J.i,SVGAnimatedRect:J.i,SVGAnimatedString:J.i,SVGAnimatedTransformList:J.i,SVGMatrix:J.i,SVGPoint:J.i,SVGPreserveAspectRatio:J.i,SVGRect:J.i,SVGUnitTypes:J.i,AudioListener:J.i,AudioParam:J.i,PeriodicWave:J.i,ANGLEInstancedArrays:J.i,ANGLE_instanced_arrays:J.i,WebGLBuffer:J.i,CHROMIUMSubscribeUniform:J.i,WebGLCompressedTextureASTC:J.i,WebGLCompressedTextureATC:J.i,WEBGL_compressed_texture_atc:J.i,WebGLCompressedTextureETC1:J.i,WEBGL_compressed_texture_etc1:J.i,WebGLCompressedTexturePVRTC:J.i,WEBGL_compressed_texture_pvrtc:J.i,WebGLCompressedTextureS3TC:J.i,WEBGL_compressed_texture_s3tc:J.i,WebGLDebugRendererInfo:J.i,WEBGL_debug_renderer_info:J.i,WebGLDebugShaders:J.i,WEBGL_debug_shaders:J.i,WebGLDepthTexture:J.i,WEBGL_depth_texture:J.i,WebGLDrawBuffers:J.i,WEBGL_draw_buffers:J.i,EXTsRGB:J.i,EXT_sRGB:J.i,EXTBlendMinMax:J.i,EXT_blend_minmax:J.i,EXTColorBufferFloat:J.i,EXTDisjointTimerQuery:J.i,EXTFragDepth:J.i,EXT_frag_depth:J.i,EXTShaderTextureLOD:J.i,EXT_shader_texture_lod:J.i,EXTTextureFilterAnisotropic:J.i,EXT_texture_filter_anisotropic:J.i,WebGLFramebuffer:J.i,WebGLLoseContext:J.i,WebGLExtensionLoseContext:J.i,WEBGL_lose_context:J.i,OESElementIndexUint:J.i,OES_element_index_uint:J.i,OESStandardDerivatives:J.i,OES_standard_derivatives:J.i,OESTextureFloat:J.i,OES_texture_float:J.i,OESTextureFloatLinear:J.i,OES_texture_float_linear:J.i,OESTextureHalfFloat:J.i,OES_texture_half_float:J.i,OESTextureHalfFloatLinear:J.i,OES_texture_half_float_linear:J.i,OESVertexArrayObject:J.i,OES_vertex_array_object:J.i,WebGLProgram:J.i,WebGLQuery:J.i,WebGLRenderbuffer:J.i,WebGLRenderingContext:J.i,WebGLSampler:J.i,WebGLShader:J.i,WebGLShaderPrecisionFormat:J.i,WebGLSync:J.i,WebGLTexture:J.i,WebGLTimerQueryEXT:J.i,WebGLTransformFeedback:J.i,WebGLUniformLocation:J.i,WebGLVertexArrayObject:J.i,WebGLVertexArrayObjectOES:J.i,Database:J.i,SQLError:J.i,SQLResultSet:J.i,SQLTransaction:J.i,ArrayBuffer:H.fb,ArrayBufferView:H.ep,DataView:H.na,Float32Array:H.nb,Float64Array:H.nc,Int16Array:H.nd,Int32Array:H.ne,Int8Array:H.nf,Uint16Array:H.ng,Uint32Array:H.nh,Uint8ClampedArray:H.jr,CanvasPixelArray:H.jr,Uint8Array:H.fc,HTMLBRElement:W.az,HTMLCanvasElement:W.az,HTMLContentElement:W.az,HTMLDListElement:W.az,HTMLDataListElement:W.az,HTMLDetailsElement:W.az,HTMLDialogElement:W.az,HTMLDivElement:W.az,HTMLHRElement:W.az,HTMLHeadElement:W.az,HTMLHeadingElement:W.az,HTMLHtmlElement:W.az,HTMLLIElement:W.az,HTMLLabelElement:W.az,HTMLLegendElement:W.az,HTMLMenuElement:W.az,HTMLMenuItemElement:W.az,HTMLMeterElement:W.az,HTMLModElement:W.az,HTMLOListElement:W.az,HTMLOptGroupElement:W.az,HTMLOptionElement:W.az,HTMLParagraphElement:W.az,HTMLPictureElement:W.az,HTMLPreElement:W.az,HTMLProgressElement:W.az,HTMLQuoteElement:W.az,HTMLShadowElement:W.az,HTMLSourceElement:W.az,HTMLStyleElement:W.az,HTMLTableCaptionElement:W.az,HTMLTableCellElement:W.az,HTMLTableDataCellElement:W.az,HTMLTableHeaderCellElement:W.az,HTMLTableColElement:W.az,HTMLTableElement:W.az,HTMLTableRowElement:W.az,HTMLTableSectionElement:W.az,HTMLTitleElement:W.az,HTMLTrackElement:W.az,HTMLUListElement:W.az,HTMLUnknownElement:W.az,HTMLDirectoryElement:W.az,HTMLFontElement:W.az,HTMLFrameElement:W.az,HTMLMarqueeElement:W.az,HTMLElement:W.az,HTMLAnchorElement:W.eL,HTMLAreaElement:W.kn,HTMLAudioElement:W.eO,AudioTrack:W.cK,AudioTrackList:W.kv,HTMLBaseElement:W.kz,Blob:W.eP,HTMLBodyElement:W.kD,HTMLButtonElement:W.fK,CDATASection:W.e9,CharacterData:W.e9,Comment:W.e9,ProcessingInstruction:W.e9,Text:W.e9,CompositorWorker:W.kN,Credential:W.fO,FederatedCredential:W.fO,PasswordCredential:W.fO,CSSFontFaceRule:W.kT,CSSImportRule:W.kU,CSSKeyframeRule:W.fP,MozCSSKeyframeRule:W.fP,WebKitCSSKeyframeRule:W.fP,CSSKeyframesRule:W.fQ,MozCSSKeyframesRule:W.fQ,WebKitCSSKeyframesRule:W.fQ,CSSPageRule:W.kV,CSSCharsetRule:W.bJ,CSSGroupingRule:W.bJ,CSSMediaRule:W.bJ,CSSNamespaceRule:W.bJ,CSSSupportsRule:W.bJ,CSSRule:W.bJ,CSSStyleDeclaration:W.eS,MSStyleCSSProperties:W.eS,CSS2Properties:W.eS,CSSStyleRule:W.kW,CSSViewportRule:W.kX,DataTransfer:W.l1,DataTransferItem:W.eT,DataTransferItemList:W.i7,Document:W.ea,HTMLDocument:W.ea,XMLDocument:W.ea,DocumentFragment:W.i9,ShadowRoot:W.i9,DOMError:W.ia,FileError:W.ia,DOMException:W.l4,DOMRectReadOnly:W.ib,DOMStringList:W.ic,DOMStringMap:W.id,DOMTokenList:W.ie,Element:W.dn,HTMLEmbedElement:W.la,DirectoryEntry:W.fS,Entry:W.fS,FileEntry:W.fS,ErrorEvent:W.lg,AnimationEvent:W.T,AnimationPlayerEvent:W.T,ApplicationCacheErrorEvent:W.T,AutocompleteErrorEvent:W.T,BeforeInstallPromptEvent:W.T,BeforeUnloadEvent:W.T,BlobEvent:W.T,ClipboardEvent:W.T,CloseEvent:W.T,CompositionEvent:W.T,CustomEvent:W.T,DeviceLightEvent:W.T,DeviceMotionEvent:W.T,DeviceOrientationEvent:W.T,ExtendableEvent:W.T,ExtendableMessageEvent:W.T,FetchEvent:W.T,FocusEvent:W.T,FontFaceSetLoadEvent:W.T,GamepadEvent:W.T,GeofencingEvent:W.T,HashChangeEvent:W.T,InstallEvent:W.T,KeyboardEvent:W.T,MediaEncryptedEvent:W.T,MediaKeyMessageEvent:W.T,MediaQueryListEvent:W.T,MediaStreamEvent:W.T,MediaStreamTrackEvent:W.T,MessageEvent:W.T,MIDIConnectionEvent:W.T,MIDIMessageEvent:W.T,MouseEvent:W.T,DragEvent:W.T,NotificationEvent:W.T,PageTransitionEvent:W.T,PointerEvent:W.T,PopStateEvent:W.T,PresentationConnectionAvailableEvent:W.T,PresentationConnectionCloseEvent:W.T,ProgressEvent:W.T,PromiseRejectionEvent:W.T,PushEvent:W.T,RelatedEvent:W.T,RTCDataChannelEvent:W.T,RTCDTMFToneChangeEvent:W.T,RTCIceCandidateEvent:W.T,RTCPeerConnectionIceEvent:W.T,SecurityPolicyViolationEvent:W.T,ServicePortConnectEvent:W.T,ServiceWorkerMessageEvent:W.T,SpeechRecognitionEvent:W.T,StorageEvent:W.T,SyncEvent:W.T,TextEvent:W.T,TouchEvent:W.T,TrackEvent:W.T,TransitionEvent:W.T,WebKitTransitionEvent:W.T,UIEvent:W.T,WheelEvent:W.T,ResourceProgressEvent:W.T,USBConnectionEvent:W.T,IDBVersionChangeEvent:W.T,SVGZoomEvent:W.T,AudioProcessingEvent:W.T,OfflineAudioCompletionEvent:W.T,WebGLContextEvent:W.T,Event:W.T,InputEvent:W.T,Animation:W.aS,ApplicationCache:W.aS,DOMApplicationCache:W.aS,OfflineResourceList:W.aS,BatteryManager:W.aS,CanvasCaptureMediaStreamTrack:W.aS,CrossOriginServiceWorkerClient:W.aS,EventSource:W.aS,MediaKeySession:W.aS,MediaQueryList:W.aS,MediaRecorder:W.aS,MediaSource:W.aS,MediaStream:W.aS,MediaStreamTrack:W.aS,MessagePort:W.aS,MIDIAccess:W.aS,NetworkInformation:W.aS,Notification:W.aS,Performance:W.aS,PermissionStatus:W.aS,PresentationAvailability:W.aS,PresentationReceiver:W.aS,PresentationRequest:W.aS,RTCDTMFSender:W.aS,RTCPeerConnection:W.aS,webkitRTCPeerConnection:W.aS,mozRTCPeerConnection:W.aS,ScreenOrientation:W.aS,ServicePortCollection:W.aS,ServiceWorkerContainer:W.aS,ServiceWorkerRegistration:W.aS,SpeechRecognition:W.aS,SpeechSynthesis:W.aS,SpeechSynthesisUtterance:W.aS,WorkerPerformance:W.aS,BluetoothDevice:W.aS,BluetoothRemoteGATTCharacteristic:W.aS,USB:W.aS,EventTarget:W.aS,HTMLFieldSetElement:W.lH,File:W.cd,FileList:W.f_,FileReader:W.lI,DOMFileSystem:W.lJ,FileWriter:W.lK,FontFace:W.lN,FontFaceSet:W.lO,HTMLFormElement:W.iv,Gamepad:W.cl,History:W.m_,HTMLOptionsCollection:W.f1,HTMLCollection:W.f1,HTMLFormControlsCollection:W.ix,XMLHttpRequest:W.e0,XMLHttpRequestUpload:W.h9,XMLHttpRequestEventTarget:W.h9,HTMLIFrameElement:W.m7,ImageData:W.ha,HTMLImageElement:W.f3,HTMLInputElement:W.mc,HTMLKeygenElement:W.mB,CalcLength:W.hj,LengthValue:W.hj,SimpleLength:W.hj,HTMLLinkElement:W.hk,Location:W.mT,HTMLMapElement:W.mY,HTMLVideoElement:W.hr,HTMLMediaElement:W.hr,MediaList:W.jo,HTMLMetaElement:W.n3,MIDIOutput:W.n4,MIDIInput:W.hs,MIDIPort:W.hs,MimeType:W.cn,MimeTypeArray:W.jp,Navigator:W.ni,NavigatorUserMediaError:W.nj,Node:W.aK,NodeList:W.js,RadioNodeList:W.js,HTMLObjectElement:W.nm,HTMLOutputElement:W.nr,HTMLParamElement:W.nv,Path2D:W.nx,PerformanceCompositeTiming:W.e2,PerformanceEntry:W.e2,PerformanceMark:W.e2,PerformanceMeasure:W.e2,PerformanceRenderTiming:W.e2,PerformanceResourceTiming:W.e2,Perspective:W.nC,Plugin:W.cf,PluginArray:W.jz,PresentationConnection:W.nI,RTCDataChannel:W.jC,DataChannel:W.jC,HTMLScriptElement:W.fi,HTMLSelectElement:W.jD,ServicePort:W.o5,SharedWorker:W.o8,SharedWorkerGlobalScope:W.o9,HTMLSlotElement:W.oa,SourceBuffer:W.co,SourceBufferList:W.jF,HTMLSpanElement:W.hE,SpeechGrammar:W.cp,SpeechGrammarList:W.jG,SpeechRecognitionAlternative:W.fj,SpeechRecognitionError:W.og,SpeechRecognitionResult:W.ch,SpeechSynthesisEvent:W.oh,SpeechSynthesisVoice:W.oi,Storage:W.on,CSSStyleSheet:W.ci,StyleSheet:W.ci,KeywordValue:W.e4,NumberValue:W.e4,PositionValue:W.e4,TransformValue:W.e4,StyleValue:W.e4,HTMLTemplateElement:W.oR,HTMLTextAreaElement:W.oT,TextTrack:W.cP,TextTrackCue:W.cG,VTTCue:W.cG,TextTrackCueList:W.oW,TextTrackList:W.oX,TimeRanges:W.p0,Touch:W.cr,TouchList:W.jK,TrackDefault:W.fm,TrackDefaultList:W.jL,Matrix:W.e5,Rotation:W.e5,Skew:W.e5,Translation:W.e5,TransformComponent:W.e5,URL:W.pg,VideoTrackList:W.pk,VTTRegion:W.fn,VTTRegionList:W.jM,WebSocket:W.pp,Window:W.jP,DOMWindow:W.jP,Worker:W.pw,CompositorWorkerGlobalScope:W.eD,DedicatedWorkerGlobalScope:W.eD,ServiceWorkerGlobalScope:W.eD,WorkerGlobalScope:W.eD,Attr:W.fo,ClientRect:W.pN,ClientRectList:W.hP,DOMRectList:W.hP,CSSRuleList:W.jW,DocumentType:W.pU,DOMRect:W.pV,GamepadList:W.k_,HTMLFrameSetElement:W.qf,NamedNodeMap:W.hV,MozNamedAttrMap:W.hV,ServiceWorker:W.qE,SpeechRecognitionResultList:W.k3,StyleSheetList:W.k5,WorkerLocation:W.qU,WorkerNavigator:W.qV,IDBDatabase:P.l2,IDBIndex:P.ma,IDBObjectStore:P.nn,IDBOpenDBRequest:P.hC,IDBVersionChangeRequest:P.hC,IDBRequest:P.hC,IDBTransaction:P.p5,SVGAElement:P.kk,SVGAnimateElement:P.e8,SVGAnimateMotionElement:P.e8,SVGAnimateTransformElement:P.e8,SVGAnimationElement:P.e8,SVGSetElement:P.e8,SVGFEBlendElement:P.lj,SVGFEColorMatrixElement:P.lk,SVGFEComponentTransferElement:P.ll,SVGFECompositeElement:P.lm,SVGFEConvolveMatrixElement:P.ln,SVGFEDiffuseLightingElement:P.lo,SVGFEDisplacementMapElement:P.lp,SVGFEFloodElement:P.lq,SVGFEGaussianBlurElement:P.lr,SVGFEImageElement:P.ls,SVGFEMergeElement:P.lt,SVGFEMorphologyElement:P.lu,SVGFEOffsetElement:P.lv,SVGFESpecularLightingElement:P.lw,SVGFETileElement:P.lx,SVGFETurbulenceElement:P.ly,SVGFilterElement:P.lL,SVGCircleElement:P.cm,SVGClipPathElement:P.cm,SVGDefsElement:P.cm,SVGEllipseElement:P.cm,SVGForeignObjectElement:P.cm,SVGGElement:P.cm,SVGGeometryElement:P.cm,SVGLineElement:P.cm,SVGPathElement:P.cm,SVGPolygonElement:P.cm,SVGPolylineElement:P.cm,SVGRectElement:P.cm,SVGSwitchElement:P.cm,SVGGraphicsElement:P.cm,SVGImageElement:P.m8,SVGLength:P.d2,SVGLengthList:P.mE,SVGMarkerElement:P.n0,SVGMaskElement:P.n1,SVGNumber:P.d4,SVGNumberList:P.nk,SVGPatternElement:P.nA,SVGPointList:P.nF,SVGScriptElement:P.o2,SVGStringList:P.oI,SVGDescElement:P.ca,SVGDiscardElement:P.ca,SVGFEDistantLightElement:P.ca,SVGFEFuncAElement:P.ca,SVGFEFuncBElement:P.ca,SVGFEFuncGElement:P.ca,SVGFEFuncRElement:P.ca,SVGFEMergeNodeElement:P.ca,SVGFEPointLightElement:P.ca,SVGFESpotLightElement:P.ca,SVGMetadataElement:P.ca,SVGStopElement:P.ca,SVGStyleElement:P.ca,SVGTitleElement:P.ca,SVGComponentTransferFunctionElement:P.ca,SVGElement:P.ca,SVGSVGElement:P.oL,SVGSymbolElement:P.oN,SVGTSpanElement:P.ez,SVGTextElement:P.ez,SVGTextPositioningElement:P.ez,SVGTextContentElement:P.ez,SVGTextPathElement:P.oV,SVGTransform:P.d5,SVGTransformList:P.p6,SVGUseElement:P.ph,SVGViewElement:P.pl,SVGViewSpec:P.pm,SVGLinearGradientElement:P.hT,SVGRadialGradientElement:P.hT,SVGGradientElement:P.hT,SVGCursorElement:P.qB,SVGFEDropShadowElement:P.qC,SVGMPathElement:P.qD,AudioBuffer:P.fE,AudioBufferSourceNode:P.eN,AudioContext:P.fF,webkitAudioContext:P.fF,OfflineAudioContext:P.fF,AnalyserNode:P.bB,RealtimeAnalyserNode:P.bB,AudioDestinationNode:P.bB,BiquadFilterNode:P.bB,ChannelMergerNode:P.bB,AudioChannelMerger:P.bB,ChannelSplitterNode:P.bB,AudioChannelSplitter:P.bB,DelayNode:P.bB,DynamicsCompressorNode:P.bB,GainNode:P.bB,AudioGainNode:P.bB,IIRFilterNode:P.bB,MediaStreamAudioDestinationNode:P.bB,PannerNode:P.bB,AudioPannerNode:P.bB,webkitAudioPannerNode:P.bB,ScriptProcessorNode:P.bB,JavaScriptAudioNode:P.bB,StereoPannerNode:P.bB,WaveShaperNode:P.bB,AudioNode:P.bB,MediaElementAudioSourceNode:P.dW,MediaStreamAudioSourceNode:P.dW,OscillatorNode:P.dW,Oscillator:P.dW,AudioSourceNode:P.dW,ConvolverNode:P.kQ,WebGLActiveInfo:P.km,WebGL2RenderingContext:P.nS,WebGL2RenderingContextBase:P.qT,SQLResultSetRowList:P.jH})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jq.$nativeSuperclassTag="ArrayBufferView"
H.hv.$nativeSuperclassTag="ArrayBufferView"
H.hx.$nativeSuperclassTag="ArrayBufferView"
H.ht.$nativeSuperclassTag="ArrayBufferView"
H.hw.$nativeSuperclassTag="ArrayBufferView"
H.hy.$nativeSuperclassTag="ArrayBufferView"
H.hu.$nativeSuperclassTag="ArrayBufferView"
W.fT.$nativeSuperclassTag="EventTarget"
W.fW.$nativeSuperclassTag="EventTarget"
W.fU.$nativeSuperclassTag="EventTarget"
W.fX.$nativeSuperclassTag="EventTarget"
W.fV.$nativeSuperclassTag="EventTarget"
W.fY.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xG(A.v2(),b)},[])
else (function(b){H.xG(A.v2(),b)})([])})})()
//# sourceMappingURL=ArtistNewspostController.dart.js.map
