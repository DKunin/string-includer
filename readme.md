# String includer 

> Parse html/js/css files - and parse include strings - to compile to a new file


## Install

```
  npm install string-includer -S

```

## Usage

```js

  var stringinclude = require('string-includer');
  var cont = fs.readFileSync('./test/test.html');
  var newstring = stringinclude(cont,'./test')


```

## License

MIT © [Dmitri Kunin](http://dkun.in)

