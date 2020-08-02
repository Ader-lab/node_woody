var express = require("express");
var mysql = require('mysql');
var app = express();
const db = require(__dirname + '/db_connect');
// const upload = require(__dirname+'/upload');

app.set('view engine', 'ejs');
app.use(express.json());


// woody
app.use('/', require(__dirname +'/routes/product'));
app.use('/', require(__dirname +'/routes/test'));



// ---------------------------------------------------------
// 男



// ---------------------------------------------------------
// 女


// ---------------------------------------------------------
// 女


// ---------------------------------------------------------


app.listen(3001,() => {
    console.log('run');
});

