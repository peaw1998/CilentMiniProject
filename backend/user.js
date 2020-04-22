let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
let axios = require("axios");
let token = require("./token");

router.post("/user", async (req, res) => {
  let response = await axios.post(
    "https://mini-project-f433b.firebaseio.com/users.json",
    {
      email: req.body.email,
    }
  );

  let resStudent = await axios.post(
    "https://mini-project-f433b.firebaseio.com/students.json",
    {
      userId: response.data.name,
    }
  );

  let resTeacher = await axios.post(
    "https://mini-project-f433b.firebaseio.com/teachers.json",
    {
      userId: response.data.name,
    }
  );

  if (req.body.role === "student") {
    return res.send(token.createTokenStudent(resStudent.data.name));
  } else if (req.body.role === "teacher") {
    return res.send(token.createTokenTeacher(resTeacher.data.name));
  }
});

module.exports = router;
