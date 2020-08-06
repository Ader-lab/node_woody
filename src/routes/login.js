const express = require('express');
const router = express.Router();
const db = require(__dirname +'/../db_connect');
// const upload = require(__dirname+'/../upload');


router.get('/', async (req, res) => {
    res.render('login', {test: "login", active: 'login'});
});

router.post('/', (req, res)=>{
    let output = {
        success: false,
        error: '帳號或密碼錯誤!!!',
        body: req.body
    };
    // const sql = `select * from \`member\` WHERE mAccount = ${req.body.mAccount} && mPass = ${req.body.mPass}`;
    const sql = `select * from member`;
    db.queryAsync(sql)
        .then(results=>{
            results.map((item) => {
                if(req.body.mAccount === item.mAccount && req.body.mPass === item.mPass){
                    req.session.login = item;
                    output.success = true;
                    delete output.error;
                }
            })
            // .then 是做完一個換下一個.then所以res.json(output)不能放到外面。
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