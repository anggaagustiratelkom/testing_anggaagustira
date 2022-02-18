var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
});
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
});
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
  
});

module.exports = router;
