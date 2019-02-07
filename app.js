const app = require('express')();
const morgan = require('morgan');
const ejs = require('ejs');
const fs = require('fs');
const socket = require('socket.io');

/* テンプレートエンジンはEJSを使うよと宣言？ */
app.engine('ejs', ejs.renderFile);

/* Streamを使ってアクセスログをファイルに書き出す */
const accessLogStream = fs.createWriteStream(`${__dirname}/access.log`,{flags:'a'});
app.use(morgan('combined',{stream : accessLogStream}));

/* サーバー起動 */
app.listen('4000',()=>{
    console.log('Successfully start server!!');
});