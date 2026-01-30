<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sapxsumkbn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Add a scalar constant to each single-precision floating-point strided array element and compute the sum using an improved Kahan–Babuška algorithm.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import sapxsumkbn from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-sapxsumkbn@v0.3.0-esm/index.mjs';
```

#### sapxsumkbn( N, alpha, x, strideX )

Adds a scalar constant to each single-precision floating-point strided array element and computes the sum using an improved Kahan–Babuška algorithm.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var v = sapxsumkbn( x.length, 5.0, x, 1 );
// returns 16.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to access every other element in the strided array:

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = sapxsumkbn( 4, 5.0, x, 2 );
// returns 25.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = sapxsumkbn( 4, 5.0, x1, 2 );
// returns 25.0
```

#### sapxsumkbn.ndarray( N, alpha, x, strideX, offsetX )

Adds a scalar constant to each single-precision floating-point strided array element and computes the sum using an improved Kahan–Babuška algorithm and alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var v = sapxsumkbn.ndarray( x.length, 5.0, x, 1, 0 );
// returns 16.0
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access every other element starting from the second element:

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = sapxsumkbn.ndarray( 4, 5.0, x, 2, 1 );
// returns 25.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import sapxsumkbn from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-sapxsumkbn@v0.3.0-esm/index.mjs';

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
console.log( x );

var v = sapxsumkbn( x.length, 5.0, x, 1 );
console.log( v );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<section class="references">

## References

-   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106][@neumaier:1974a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-ext/base/dapxsumkbn`][@stdlib/blas/ext/base/dapxsumkbn]</span><span class="delimiter">: </span><span class="description">add a constant to each double-precision floating-point strided array element and compute the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/gapxsumkbn`][@stdlib/blas/ext/base/gapxsumkbn]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/sapxsum`][@stdlib/blas/ext/base/sapxsum]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/ssumkbn`][@stdlib/blas/ext/base/ssumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-sapxsumkbn.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-sapxsumkbn

[test-image]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-sapxsumkbn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-sapxsumkbn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-sapxsumkbn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-sapxsumkbn/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-sapxsumkbn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-sapxsumkbn/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@neumaier:1974a]: https://doi.org/10.1002/zamm.19740540106

<!-- <related-links> -->

[@stdlib/blas/ext/base/dapxsumkbn]: https://github.com/stdlib-js/blas-ext-base-dapxsumkbn/tree/esm

[@stdlib/blas/ext/base/gapxsumkbn]: https://github.com/stdlib-js/blas-ext-base-gapxsumkbn/tree/esm

[@stdlib/blas/ext/base/sapxsum]: https://github.com/stdlib-js/blas-ext-base-sapxsum/tree/esm

[@stdlib/blas/ext/base/ssumkbn]: https://github.com/stdlib-js/blas-ext-base-ssumkbn/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
