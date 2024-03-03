const data = require("../data.json");
const db = require("./index");

const insertAll = async () => {
  for (element of data) {
    let sql = "insert into posts set ?";
    db.query(sql, element, (err, result) => {
      if (err) console.log(err);
      else console.log("seeded");
    });
  }
};
let users = [
  { firstName: "khalil", lastName: "kraiem" },
  { firstName: "ghofrane", lastName: "cherni" },
  { firstName: "rania", lastName: "elouni" }
];
const insertUser = () => {
  for (element of users) {
    let sql = "insert into users set ?";
    db.query(sql, element, (err, result) => {
      if (err) console.log(err);
      else console.log("user created");
    });
  }
};

let reactType = [{ label: "dislike" }, { label: "like" }];
const insertReactType = () => {
  for (element of reactType) {
    let sql = "insert into reactType set ?";
    db.query(sql, element, (err, result) => {
      if (err) console.log(err);
      else console.log("reactType created");
    });
  }
};

let react = [
  {
    posts_id: 1,
    users_id: 1,
    reactType_id: 2
  },
  {
    posts_id: 10,
    users_id: 2,
    reactType_id: 1
  },
  {
    posts_id: 6,
    users_id: 2,
    reactType_id: 1
  }
];
const insertReact = async () => {
  for (element of react) {
    let sql = "insert into reacts set ?";
    db.query(sql, element, (err, result) => {
      if (err) console.log(err);
      else console.log(" reacts seeded");
    });
  }
};

// invocation

insertUser();
insertReactType();
insertAll();
insertReact()
