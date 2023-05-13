
 const dotenv = require('dotenv');
 const path = require('path');
 const config = require('../config');

 dotenv.config({
   path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
 });
const mysql = require("mysql");
const mysqlConn = mysql.createConnection({
    host: process.env.hostDb,
    password:process.env.passdb,
    user:process.env.userdb,
    database:process.env.db
});
console.log(process.env.hostDb);
console.log(process.env.passdb);
console.log(process.env.userdb);
console.log(process.env.db);

mysqlConn.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log("conexión exitosa");
    }
})

module.exports= mysqlConn;