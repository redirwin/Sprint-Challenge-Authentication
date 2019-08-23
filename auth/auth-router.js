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
        res
          .status(500)
          .json({
            message: "There was an error while trying to add that user."
          });
      });
  } else {
    res.status(400).json({ message: "Please enter a username and password." });
  }
});

router.post("/login", (req, res) => {
  // implement login
  if (req.body.username && req.body.password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = createToken(user);
          res.status(200).json({ message: `Welcome, ${user.username}` });
        } else {
          res.status(401).json({ message: "Those credentials aren't valid." });
        }
      });
  } else {
    res.status(400).json({ message: "Please enter a username and password." });
  }
});

module.exports = router;
