const express = require('express');
const router = express.Router();
const db = require(__dirname +'/../db_connect');




const getDataByPage = (req)=>{
    return new Promise((resolve, reject)=>{ 
        const t_sql = 'select * from com_product';
        db.queryAsync(t_sql)
            .then(results=>{
                // return db.queryAsync(sql);
                resolve(results);
            })
            .catch(ex=>{
                reject(ex);
            });
    }) 
};


router.get('/product', async (req, res) => {
    const output = await getDataByPage(req);
    res.json(output);
});
router.get('/product/list', async (req, res) => {
    const products = await getDataByPage(req);
    res.render('product', {products});
});




module.exports = router;