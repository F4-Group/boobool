# boobool [![NPM Version][npm-image]][npm-url] 

> Convert a boolean from a string, keeping undefined and null values, to be able to use defaultsTo

* Parses "true" as `true`
* Parses "false" as `false`
* Case-insensitive
* Ignores leading and trailing whitespace
* Parses `undefined` and `null` as `undefined`
* Returns `undefined` when a boolean could not be found
* Configurable `defaultTo` value (replaces `undefined`) 

## Installation

```shell
npm install boobool
```


## Usage

`parseBoolean(string[, defaultValue])`

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
boobool('', {defaultTo: true});  //-> true
```


[npm-image]: https://img.shields.io/npm/v/boobool.svg
[npm-url]: https://npmjs.com/package/boobool
