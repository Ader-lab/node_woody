const express = require('express');
const router = express.Router();
const db = require(__dirname +'/../db_connect');




router.get('/list', async (req, res) => {
    const t_sql = 'select * from member';
    db.queryAsync(t_sql)
        .then(results=>{
            res.render('member', { results, active: 'member' });
        })
        .catch(ex=>{
            console.log(ex);
        });
});

router.get('/edit/:mID?', (req, res) => {
    const t_sql = 'select * from member where mID =' + req.params.mID;
    db.queryAsync(t_sql)
        .then(results=>{
            res.json(results)
        })
        .catch(ex=>{
            console.log(ex);
        });
});




module.exports = router;