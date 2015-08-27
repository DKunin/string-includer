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
  
  // test.html = 
  //  include partial-1.html
  //  include partial-2.html
  //  contents of original file
  
  var newstring = stringinclude(cont,'./test');
  
  // newstring = 
  //  contents of partial-1
  //  contents of partial-2
  //  contents of original file


```

## License

MIT © [Dmitri Kunin](http://dkun.in)

