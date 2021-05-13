# next-blob2url
> Get blob url from blob.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-blob2url
```

## usage
```js
import '@jswork/next-blob2url';

nx.blob2url(blob);
// http://localhost:5000/500e570a-ad09-4921-a4a3-6c72cc84626e
```

```html
<div class="img-container">
  <img id="img" src="" alt="">
</div>

<script>
  fetch('./ava.jpg').then(res => res.blob()).then(res => {
    const url = nx.blob2url(res);
    document.getElementById('img').src = nx.blob2url(res)
    console.log(res, url);
  })
</script>
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-blob2url/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-blob2url
[version-url]: https://npmjs.org/package/@jswork/next-blob2url

[license-image]: https://img.shields.io/npm/l/@jswork/next-blob2url
[license-url]: https://github.com/afeiship/next-blob2url/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-blob2url
[size-url]: https://github.com/afeiship/next-blob2url/blob/master/dist/next-blob2url.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-blob2url
[download-url]: https://www.npmjs.com/package/@jswork/next-blob2url
