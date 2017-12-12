var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/animal', function(req, res, next) {
    res.download('public/dog');
});

router.get('/animal/dog',function (req,res,next) {
    res.download('animals','dog');
})

module.exports = router;
