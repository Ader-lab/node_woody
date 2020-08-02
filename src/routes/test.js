const express = require('express');
const router = express.Router();
const db = require(__dirname +'/../db_connect');
// const upload = require(__dirname+'/../upload');


router.get('/test', async (req, res) => {
    res.render('test', {test: 222});
});
router.post('/test', (req, res)=>{
    console.log(req.body);

    const sql = "INSERT INTO `member`(`mName`, `mPhone`, `mEmail`,`mAccount`, `mPass`) VALUES (?,?,?,?,?)";
    
    db.queryAsync(sql, [
        req.body.mName,
        09,
        'woody',
        'abc',
        'cba'
    ])
        .then(results=>{
            res.json(results);
        })
        .catch(ex=>{
            console.log('ex:', ex);
        })
});

module.exports = router;