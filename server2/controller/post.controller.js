const connection = require("../models/index");

const getAllPosts = (req, res) => {
  let sql =
    `select p.*,u.*,rt.*,ur.* from posts p left join users u on u.id = p.userId
    left join reacts r on r.posts_id = p.id  
    left join  users ur on r.users_id = ur.id 
    left join reacttype rt 
    on rt.id = r.reactType_id
    `;
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    else res.status(200).send(result);
  });
};

const addPost = (req, res) => {
  let sql = "insert into posts set ?";
  connection.query(sql, req.body, (err, result) => {
    if (err) console.log(err);
    else res.status(201).send(result);
  });
};

module.exports = { getAllPosts, addPost };
