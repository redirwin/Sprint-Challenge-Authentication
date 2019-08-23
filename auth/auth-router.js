const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");

router.post("/register", (req, res) => {
  // implement registration

  if (req.body.username && req.body.password) {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12); // hash the password
    user.password = hash; // reset password as hashed password

    Users.addUser(user)
      .then(newUser => {
        res.status(201).json(newUser);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  } else {
    res.status(400).json({ message: "Please enter a username and password." });
  }
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
