var express = require('express');
var Kaiseki = require('kaiseki');
var router = express.Router();

// instantiate Parse API
var PARSE_APP_ID = 'vryPRTUnrFkobtWYal5StGhiUMEJ7SJF2zmcSHmU';
var PARSE_REST_API_KEY = 'P6XqvOa8Ht3XdN7pVPsbCwOVLomNnCBxUWnG3e0x';
var kaiseki = new Kaiseki(PARSE_APP_ID, PARSE_REST_API_KEY);

/* GET users listing. */
router.route('/users')
  .get(function(request, response) {
    kaiseki.getUsers(function(err, res, body, success) {
      response.send({users:body});
    });
  });

/*router.get('/', function(request, response) {
  kaiseki.getUsers(function(err, res, body, success) {
    response.send({users:body});
  });
});*/

module.exports = router;