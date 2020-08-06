var express = require("express");
var mysql = require('mysql');
var app = express();
const db = require(__dirname + '/db_connect');
// const upload = require(__dirname+'/upload');
const session = require('express-session');
app.use(session({
    // 新用戶沒有使用到 session 物件時不會建立 session 和發送 cookie
    saveUninitialized: false,
    resave: false, // 沒變更內容是否強制回存
    secret: '加密用的字串',
    cookie: {
        maxAge: 1200000, // session存活時間，20分鐘，單位毫秒 // 不設定就是瀏覽器關掉才過期
    }
}));

app.set('view engine', 'ejs');
app.use(express.json());


// 男1
app.use('/product', require(__dirname +'/routes/product'));
app.use('/registered', require(__dirname +'/routes/registered'));
app.use('/login', require(__dirname +'/routes/login'));




// ---------------------------------------------------------
// 男2



// ---------------------------------------------------------
// 女1


// ---------------------------------------------------------
// 女2


// ---------------------------------------------------------

app.get('/try-session', (req, res)=>{
    req.session.my_var = req.session.my_var || 0; // 預設為 0 //my_var是自訂名稱
    req.session.my_var++;
    res.json({
        my_var: req.session.my_var,
        session: req.session
    });
})


app.listen(3001,() => {
    console.log('run');
});
