let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
const convertObjectToArray = require("./convertObjectToArray");
const { check, validationResult } = require("express-validator");
let axios = require("axios");
let token = require("./token");
let { setID, checkStudent } = require("./middleware");
let validator = require("./validator");

router
  .route("/course")
  .get(async (req, res) => {
    const course = await axios.get(
      "https://mini-project-f433b.firebaseio.com/courses.json"
    );
    res.send(convertObjectToArray(course.data));
  })

  .post(
    [
      check("name").not().isEmpty(),
      check("description").not().isEmpty(),
      check("price").not().isEmpty(),
    ],
    validator,
    setID,
    checkStudent,
    async (req, res) => {
      const response = await axios.post(
        "https://mini-project-f433b.firebaseio.com/courses.json",
        {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          studentId: req.tokenID,
          status: "waiting",
        }
      );
      if (response.data) {
        return res.sendStatus(200);
      }
      return res.sendStatus(400);
    }
  );

router.route("/course/:id").get(async (req, res) => {
  const course = await axios.get(
    `https://mini-project-f433b.firebaseio.com/courses/${req.params.id}.json`
  );
  res.send(course.data);
});

router.route("/waitingcourse").get(async (req, res) => {
  const course = await axios.get(
    "https://mini-project-f433b.firebaseio.com/courses.json"
  );
  res.send(
    convertObjectToArray(course.data).filter((course) => {
      if (course.status === "waiting") {
        return true;
      } else {
        return false;
      }
    })
  );
});

router.route("/successcourse").get(async (req, res) => {
  const course = await axios.get(
    "https://mini-project-f433b.firebaseio.com/courses.json"
  );
  res.send(
    convertObjectToArray(course.data).filter((course) => {
      if (course.status === "success") {
        return true;
      } else {
        return false;
      }
    })
  );
});

module.exports = router;
