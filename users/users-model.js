const db = require("../database/dbConfig.js");

module.exports = {
  addUser,
  findUser
};

async function addUser(user) {
  const id = db("users").insert(user);
  return findUser(id);
}

function findUser(id) {
  return db("users")
    .select("id", "username")
    .orderBy("id");
}
