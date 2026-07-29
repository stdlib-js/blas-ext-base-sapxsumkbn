"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=i(function(w,v){
var t=require('@stdlib/number-float64-base-to-float32/dist'),d=require('@stdlib/blas-ext-base-ssumkbn/dist').ndarray;function y(e,r,a,s,c){return e<=0?0:t(t(e*r)+d(e,a,s,c))}v.exports=y
});var o=i(function(z,q){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=u();function j(e,r,a,s){return k(e,r,a,s,b(e,s))}q.exports=j
});var x=i(function(A,m){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),R=u();l(p,"ndarray",R);m.exports=p
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),g=x(),n,f=E(_(__dirname,"./native.js"));O(f)?n=g:n=f;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
