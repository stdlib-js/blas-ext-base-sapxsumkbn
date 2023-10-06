"use strict";var c=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var b=c(function(D,p){
var t=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/math-base-special-abs/dist');function E(a,i,q,f){var u,r,o,v,e,s;if(a<=0)return 0;if(a===1||f===0)return t(i+q[0]);for(f<0?r=(1-a)*f:r=0,u=0,e=0,s=0;s<a;s++)o=t(i+q[r]),v=t(u+o),l(u)>=l(o)?e=t(e+t(t(u-v)+o)):e=t(e+t(t(o-v)+u)),u=v,r+=f;return t(u+e)}p.exports=E
});var j=c(function(G,y){
var n=require('@stdlib/number-float64-base-to-float32/dist'),k=require('@stdlib/math-base-special-abs/dist');function O(a,i,q,f,u){var r,o,v,e,s,m;if(a<=0)return 0;if(a===1||f===0)return n(i+q[u]);for(o=u,r=0,s=0,m=0;m<a;m++)v=n(i+q[o]),e=n(r+v),k(r)>=k(v)?s=n(s+n(n(r-e)+v)):s=n(s+n(n(v-e)+r)),r=e,o+=f;return n(r+s)}y.exports=O
});var T=c(function(H,R){
var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=b(),g=j();d(F,"ndarray",g);R.exports=F
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=T(),x,_=z(w(__dirname,"./native.js"));A(_)?x=B:x=_;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
