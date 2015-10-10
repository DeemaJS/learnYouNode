var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, cb) {
  var extension = "." + ext;
  fs.readdir(dirname, function(err, files) {
    if (err) {
      cb(err, null);
    }
    else {
      result = [];
      files.forEach(function(entry) {
        if (path.extname(entry) === extension) {
          result.push(entry);
        }
      });
      cb(null, result);
    }
  });
  
};