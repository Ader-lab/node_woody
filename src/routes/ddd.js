const express = require('express');
const session = require('express-session');
const router = express.Router();
const db = require(__dirname +'/../db_connect');


router.get('/', (req, res)=>{
    res.render('ddd');
});

router.post('/', (req, res)=>{
    console.log(req.body.input);
    const sql = "INSERT INTO `html`(`html`) VALUES (?)";
    db.queryAsync(sql, [req.body.input])
    .then(results=>{
        // res.locals.input = req.body.input
        // console.log(res.locals.input);
            // res.json(output);
        })
        .catch(ex=>{
            console.log('ex:', ex);
        })
});

        


module.exports = router;
