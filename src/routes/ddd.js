const express = require('express');
const router = express.Router();
const db = require(__dirname +'/../db_connect');
// const upload = require(__dirname+'/../upload');


router.get('/', async (req, res) => {
    res.render('ddd');
});

router.post('/', (req, res)=>{
    let output = {
        success: true,
        body: req.body
    };
    const sql = 'INSERT INTO `html`(`html`) VALUES (?)';
    db.queryAsync(sql, [ req.body.htmlInput ])
        .then(results=>{
            req.session.htmlInput = req.body.htmlInput;
            // 一定要有回傳值，不然fetch不到東西
            res.json(output);
        })
        .catch(ex=>{
            console.log('ex:', ex);
        })
        
});

router.get('/logout', (req, res) => {
    delete req.session.login;
    res.redirect('/product/list');
})

module.exports = router;