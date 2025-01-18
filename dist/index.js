"use strict";var f=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var m=f(function(D,c){
var r=require('@stdlib/number-float64-base-to-float32/dist'),x=require('@stdlib/math-base-special-absf/dist');function _(a,e,n,u,R){var i,v,t,o,s,q;if(a<=0)return 0;if(v=R,u===0)return r(a*r(e+n[v]));for(i=0,s=0,q=0;q<a;q++)t=r(e+n[v]),o=r(i+t),x(i)>=x(t)?s=r(s+r(r(i-o)+t)):s=r(s+r(r(t-o)+i)),i=o,v+=u;return r(i+s)}c.exports=_
});var y=f(function(G,b){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=m();function O(a,e,n,u){return F(a,e,n,u,E(a,u))}b.exports=O
});var l=f(function(H,k){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=y(),g=m();T(d,"ndarray",g);k.exports=d
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=l(),p,j=z(w(__dirname,"./native.js"));A(j)?p=B:p=j;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
