const data = require("../data.json")
const connection = require("./index")

const insertAll = async ()=> {
    for(element of data ){
    let sql = "insert into posts set ?";
    connection.query(sql, element, (err, result) => {
      if (err) console.log(err);
      else console.log("seeded");;
    })
}
}

let array = [
  {
  posts_id  : 1,
  users_id   : 1,
  reactType_idreactType  : 2 
},
{
  posts_id  : 10,
  users_id   : 2,
  reactType_idreactType  : 1
},
]
const insertReact = async ()=> {
  
    for(element of array ){
    let sql = "insert into reacts set ?";
    connection.query(sql, element, (err, result) => {
      if (err) console.log(err);
      else console.log(" reacts seeded");;
    })
}
}



insertAll();
insertReact()