let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
const convertObjectToArray = require("./convertObjectToArray");
const { check, validationResult } = require("express-validator");
let axios = require("axios");
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

router.get(
  "/student/course",
  token.setID,
  token.checkStudent,
  async (req, res) => {
    const course = await axios.get(
      "https://mini-project-f433b.firebaseio.com/courses.json"
    );
    courseByStudent = convertObjectToArray(course.data).filter(
      (course) => course && course.studentId == req.tokenID
    );
    res.send(courseByStudent);
  }
);

module.exports = router;
