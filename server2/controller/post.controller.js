const connection = require("../models/index");





const getAllPosts = (req, res) => {
  let sql = "select * from posts p inner join users u on u.id = p.userId inner join reacts r on r.posts_id = p.id  inner join  users ur on r.users_id = ur.id inner join reacttype rt on rt.idreactType = r.reactType_idreactType ";
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
