const express = require('express');
const router = express.Router();
const db = require(__dirname +'/../db_connect');




router.get('/:id?', (req, res) => {
    const t_sql = 'select * from com_product where cpID = ' + req.params.id;
    db.queryAsync(t_sql)
        .then(results=>{
            // console.log(results);
            // res.render('productDetail', { active: 'productDetail' });
            res.json(results);
        })
        .catch(ex=>{
            console.log(ex);
        });
});





module.exports = router;