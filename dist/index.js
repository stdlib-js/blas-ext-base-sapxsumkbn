"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=i(function(w,v){
var t=require('@stdlib/number-float64-base-to-float32/dist'),d=require('@stdlib/blas-ext-base-ssumkbn/dist').ndarray;function y(r,e,s,a,c){return r<=0?0:t(t(r*e)+d(r,s,a,c))}v.exports=y
});var o=i(function(z,q){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=u();function j(r,e,s,a){return k(r,e,s,a,b(r,a))}q.exports=j
});var x=i(function(A,m){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),R=u();l(p,"ndarray",R);m.exports=p
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),g=x(),n,f=E(_(__dirname,"./native.js"));O(f)?n=g:n=f;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
