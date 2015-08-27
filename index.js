'use strict';

var fs                = require('fs');
var R                 = require('ramda');
var getIncludesRegexp = /^(include.+)/mg;
var path              = require('path');

var getAllMatches = function(reg, string) {
  var match, matches = [];
  while ((match = reg.exec(string)) != null) {
    matches.push(match[0]);
  }
  return matches;
};

var getIncludes = R.curry(function(folder, d){
  return {file: fs.readFileSync( path.join( folder ,d.replace('include ','')) ).toString(), name:d};
});

var updateStringInFile = function(file,string, newstring){
  return file.replace(string,newstring);
};

var processFile = function(text, folder){ 
  var doc = text.toString();
  var matches = getAllMatches(getIncludesRegexp, doc);
  var files = R.map(getIncludes(folder))(matches);
  
  files.forEach(function(file){
    doc = updateStringInFile(doc, file.name, file.file);
  });
  return doc;
};

module.exports = processFile;