const db = require("../database/dbConfig.js");

module.exports = {
  addUser,
  findUser
  //   findBy
};

async function addUser(user) {
  const [id] = await db("users").insert(user);
  return findUser(id);
}

function findUser(id) {
  return db("users")
    .where({ id })
    .select("id", "username")
    .orderBy("id")
    .first();
}
