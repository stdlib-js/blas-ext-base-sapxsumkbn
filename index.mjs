// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function n(r,n,s,i){var a,d,o,f,m,l;if(r<=0)return 0;if(1===r||0===i)return e(n+s[0]);for(d=i<0?(1-r)*i:0,a=0,m=0,l=0;l<r;l++)o=e(n+s[d]),f=e(a+o),m=t(a)>=t(o)?e(m+e(e(a-f)+o)):e(m+e(e(o-f)+a)),a=f,d+=i;return e(a+m)}function s(r,n,s,i,a){var d,o,f,m,l,u;if(r<=0)return 0;if(1===r||0===i)return e(n+s[a]);for(o=a,d=0,l=0,u=0;u<r;u++)f=e(n+s[o]),m=e(d+f),l=t(d)>=t(f)?e(l+e(e(d-m)+f)):e(l+e(e(f-m)+d)),d=m,o+=i;return e(d+l)}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
