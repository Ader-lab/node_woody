const express = require('express');
const router = express.Router();
const db = require(__dirname +'/../db_connect');
// const upload = require(__dirname+'/../upload');


router.get('/', async (req, res) => {
    res.render('login', {test: "login", active: 'login'});
});
router.post('/', (req, res)=>{
    const sql = `select * from \`member\` WHERE mAccount = ${req.body.mAccount} && mPass = ${req.body.mPass}`;
    db.queryAsync(sql)
        .then(results=>{
            console.log(results);
            res.json(results);
        })
        .catch(ex=>{
            console.log('ex:', ex);
        })
});

module.exports = router;