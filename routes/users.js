var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response) {
  response.send('users page');
});

module.exports = router;
