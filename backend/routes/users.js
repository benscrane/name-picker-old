var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  const user = {
    id: 1,
    name: 'Test user',
    email: 'test@test.com',
  };
  res.send(user);
});

module.exports = router;
