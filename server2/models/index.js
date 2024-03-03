const mysql = require("mysql2")

const config = {
    host: 'localhost',
    user: 'root',
    database: 'pfe',
    password : "root"
  }

const db = mysql
.createConnection(config)

db.connect((err)=>{
    if(err) console.log(err)
    else console.log("db connected");
})


module.exports = db