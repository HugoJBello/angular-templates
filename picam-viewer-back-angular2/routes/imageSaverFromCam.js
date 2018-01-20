var express = require('express');
var router = express.Router();
var fs = require('fs');
var con = require('../mysql_connection/connection');
var config = require('../config/config');

var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
  var user = basicAuth(req);
  if (!user || !user.name || !user.pass) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
    return;
  }
  if (user.name === config.basicAuthUser && user.pass === config.basicAuthPassword) {
    next();
  } else {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
    return;
  }
}
 

router.post("/save_new_shot", auth, function (req, res) {
  console.log(req.body);
  var destinyPath = config.destinyPath + req.body.filename;
  var sql = 'insert into image (date_taken,path,filename) values (sysdate(),"' + destinyPath + '","' + req.body.filename + '");'
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
  });
  decode_base64_save(req.body.base64Image,destinyPath);
  res.send("received correctly");
});

// function to encode file data to base64 encoded string
function decode_base64_save(textBase64) {
  try {
    // read binary data
    //var bitmap = fs.readFileSync(file); 
    // convert binary data to base64 encoded string
    //return new Buffer(bitmap).toString('base64');
  } catch (err) {
    console.log(err);
  }
}

module.exports = router;
