var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    return res.redirect('users/login')
})

module.exports = router;