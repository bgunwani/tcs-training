const express = require('express');
const router = express();

// Request Url: http://localhost:3000/
router.get('/', (req, res) => {
    res.render('index', { message: 'Node - Express - Mongo - EJS - Project' })
});

module.exports = router;