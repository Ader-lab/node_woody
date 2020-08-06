const express = require('express');
const session = require('express-session');
const router = express.Router();
const db = require(__dirname +'/../db_connect');



router.get('/', (req, res)=>{
    res.render('test');
});


module.exports = router;
