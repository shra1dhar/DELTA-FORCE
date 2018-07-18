const express =  require('express');
const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
});

    //connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Mysql connected...");
});

const app = express();

    // create db
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(results);
        res.send('Database Created..');
    });
});

app.listen(3000, ()=> {
    console.log("App started at port 3000");
});
