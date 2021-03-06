const express = require('express');
const router = express.Router();
const db = require(__dirname +'/../db_connect');




const getDataByPage = (req)=>{
    return new Promise((resolve, reject)=>{ 
        const t_sql = 'select * from com_product';
        db.queryAsync(t_sql)
            .then(results=>{
                // console.log(results);
                resolve(results);
            })
            .catch(ex=>{
                reject(ex);
            });
    }) 
};

router.get('/', async (req, res) => {
    const output = await getDataByPage(req);
    res.json(output);
});
router.get('/list', async (req, res) => {
    const products = await getDataByPage(req);
    res.render('product', { products, active: 'product' });
});




module.exports = router;