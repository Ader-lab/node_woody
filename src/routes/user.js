const express = require('express');
const router = express.Router();
const db = require(__dirname +'/../db_connect');




// router.get('/list', async (req, res) => {
//     const t_sql = 'select * from member';
//     db.queryAsync(t_sql)
//         .then(results=>{
//             res.render('member', { results, active: 'member' });
//         })
//         .catch(ex=>{
//             console.log(ex);
//         });
// });

router.get('/', (req, res) => {
    const t_sql = 'select * from member where mID =' + req.session.login.mID;
    db.queryAsync(t_sql)
        .then(results=>{
            res.render('user',{ results, active: 'user' })
        })
        .catch(ex=>{
            console.log(ex);
        });
});

router.post('/', (req, res) => {
    const t_sql = 'UPDATE `member` SET `mName`=?,`mPhone`=?,`mEmail`=? WHERE mID =' + req.session.login.mID
    db.queryAsync(t_sql,[
        req.body.mName,
        req.body.mPhone,
        req.body.mEmail,
    ])
        .then(results=>{
            res.json(results);
        })
        .catch(ex=>{
            console.log(ex);
        });

});




module.exports = router;