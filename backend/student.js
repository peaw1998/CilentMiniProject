let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
const convertObjectToArray = require("./convertObjectToArray");
const { check, validationResult } = require("express-validator");
let axios = require("axios");
let { setID, checkStudent } = require("./middleware");
let token = require("./token");

router.get("/createTokenStudent", async (req, res) => {
  let response = await axios.post(
    "https://mini-project-f433b.firebaseio.com/students.json",
    {
      data: "test",
    }
  );
  if (response.data) {
    res.send(token.createTokenStudent(response.data.name));
  }
  return res.sendStatus(400);
});

router.get("/student/course", setID, checkStudent, async (req, res) => {
  const course = await axios.get(
    "https://mini-project-f433b.firebaseio.com/courses.json"
  );
  courseByStudent = convertObjectToArray(course.data).filter((course) => {
    if (course && course.studentId === req.tokenID) {
      return true;
    } else {
      return false;
    }
  });
  res.send(courseByStudent);
});
router.post("/student/register", async (req, res) => {
  let response = await axios.post(
    "https://mini-project-f433b.firebaseio.com/students.json",
    req.body
  );
  if (response.data) {
    return res.send(token.createTokenStudent(response.data.name));
  }
  return res.sendStatus(400);
});

router.post("/student/login", async (req, res) => {
  const res1 = await axios.get(
    `https://mini-project-f433b.firebaseio.com/students.json?orderBy="email"&equalTo="${req.body.email}"`
  );
  if (convertObjectToArray(res1.data).length === 0) {
    res.status(401).send("not found");
  } else {
    res.send(token.createTokenStudent(convertObjectToArray(res1.data)[0].id));
  }
});

module.exports = router;
