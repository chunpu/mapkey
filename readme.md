mapkey
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/mapkey.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mapkey
[downloads-image]: http://img.shields.io/npm/dm/mapkey.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/mapkey
[david-image]: http://img.shields.io/david/chunpu/mapkey.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/mapkey


map key deep

Installation
---

```sh
npm i mapkey
```

Usage
---

```js
var mapKey = require('mapkey')

mapKey({
	u: 'username',
	p: 'password'
}, {
	u: 'Bob',
	p: 'secret'
})

// => {username: 'Bob', password: 'secret'}
```

### map key deep

```js
var translateMap = {
	a: 'apple',
	g: 'google',
	e: 'error',
	t: 'timestamp',
	l: {
		name: 'list',
		child: {
			b: 'baidu',
			a: 'ali',
			d: {
				name: 'deep',
				child: {
					n: 'nested'
				}
			}
		},
		type: 'array'
	},
	o: {
		name: 'object',
		child: {
			m: 'xiaomi',
			t: 'qq'
		}
	},
	n: 'null',
	no: 'number'
}

var raw = {
	a: 'apple val',
	g: 'google val',
	e: 'fucked up',
	t: 1234567,
	l: [
		{
			b: 'baidu val',
			a: 'ali val',
			d: {
				n: 'nested'
			}
		}, {
			b: 'baidu2',
			a: 'ali2'
		}
	],
	o: {
		m: 'xiaomi val',
		t: 'qq val'
	},
	n: null,
	no: 1024,
	key_has_no_map: 'error'
}

var expected = {
	apple: 'apple val',
	google: 'google val',
	error: 'fucked up',
	timestamp: 1234567,
	list: [
		{
			baidu: 'baidu val',
			ali: 'ali val',
			deep: {
				nested: 'nested'
			}
		},
		{
			baidu: 'baidu2',
			ali: 'ali2'
		}
	],
	object: {
		xiaomi: 'xiaomi val',
		qq: 'qq val'
	},
	null: null,
	number: 1024
}

var ret = mapKey(translateMap, raw)

assert.deepEqual(ret, expected)
```

mapKey support curry

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/mapkey.svg?style=flat-square
[license-url]: #
