'use strict';

var test          = require('ava');
var stringinclude = require('../');
var fs            = require('fs');

test('test generation of weeks',function (t) { 
  var cont = fs.readFileSync('./test/test.html');
  var teststring = 'contents of partial-1\n'+
                    'contents of partial-2\n'+
                    'contents of original file';

  var temp = stringinclude(cont,'./test'); 
  t.assert(teststring.trim()===temp.trim());
  t.end();
});
