# boobool [![NPM Version][npm-image]][npm-url]  [![Build Status][travis-image]][travis-url] 

> Convert a boolean from a string, keeping undefined and null values

* Parses "true" as `true`
* Parses "false" as `false`
* Case-insensitive
* Ignores leading and trailing whitespace
* Parses `undefined` and `null` as `undefined`
* Returns `undefined` when a boolean could not be found
* Configurable `defaultValue` (replaces `undefined`) 

## Installation

```shell
npm install boobool
```


## Usage

`boobool(string[, {defaultValue}])`

```js
const boobool = require('boobool');

boobool('true');  //-> true
boobool(' TRUE ');  //-> true
boobool('false');  //-> false

boobool('yes');  //-> undefined
boobool('1');  //-> undefined
boobool('');  //-> undefined
boobool(null);  //-> undefined
boobool(undefined);  //-> undefined
```

Optionally, you can override the default value:
```js
boobool('', {defaultValue: true});  //-> true
```


[npm-image]: https://img.shields.io/npm/v/boobool.svg
[npm-url]: https://npmjs.com/package/boobool
[travis-image]: https://img.shields.io/travis/F4-Group/boobool.svg
[travis-url]: https://travis-ci.org/F4-Group/boobool
