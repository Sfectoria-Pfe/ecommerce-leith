const mysql = require("mysql2")

const config = {
    host: 'localhost',
    user: 'root',
    database: 'pfe',
    password : "root"
  }

const connection = mysql.createConnection(config)

connection.connect((err)=>{
    if(err) console.log(err)
    else console.log("db connected");
})


module.exports = connection