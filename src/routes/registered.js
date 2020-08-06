const express = require('express');
const router = express.Router();
const db = require(__dirname +'/../db_connect');
// const upload = require(__dirname+'/../upload');


router.get('/', async (req, res) => {
    res.render('registered', {test: '註冊', active: 'registered'});
});
router.post('/', (req, res)=>{
    const sql = "INSERT INTO `member`(`mName`, `mPhone`, `mEmail`,`mAccount`, `mPass`) VALUES (?,?,?,?,?)";
    db.queryAsync(sql, [
        "王小明",
        '0988888888',
        'Ader@gmail.com',
        req.body.mAccount,
        req.body.mPass,
    ])
        .then(results=>{
            // res.json(results);
        })
        .catch(ex=>{
            console.log('ex:', ex);
        })
});

module.exports = router;