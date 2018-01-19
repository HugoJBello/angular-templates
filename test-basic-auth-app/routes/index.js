var express = require('express');
var router = express.Router();
var basicAuth = require('basic-auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var auth = function (req, res, next) {
  var user = basicAuth(req);
  if (!user || !user.name || !user.pass) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
    return;
  }
  if (user.name === 'userTest' && user.pass === 'password') {
    next();
  } else {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
    return;
  }
}
 
router.get("/auth", auth, function (req, res) {
    res.send("This page is authenticated!")
});

router.post("/auth-post", auth, function (req, res) {
  console.log(req.body);
  res.send("This page is authenticated!")
});

module.exports = router;
