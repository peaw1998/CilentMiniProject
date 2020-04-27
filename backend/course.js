let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
const convertObjectToArray = require("./convertObjectToArray");
const { check, validationResult } = require("express-validator");
let axios = require("axios");
let token = require("./token");
let { setID, checkStudent, checkTeacher } = require("./middleware");
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

router.put("/course/offer", setID, checkTeacher, async (req, res) => {
  const course = await axios.get(
    `https://mini-project-f433b.firebaseio.com/courses/${req.body.courseId}.json`
  );

  if (course.data.status === "waiting") {
    const res1 = await axios.patch(
      `https://mini-project-f433b.firebaseio.com/courses/${req.body.courseId}.json`,
      {
        status: "success",
        teacherId: req.tokenID,
      }
    );
    if (res1.status === 200) return res.sendStatus(200);
    else return res.status(400).send("update not success");
  }
  return res.status(400).send("not waiting");
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

router
  .route("/course/:id")
  .get(async (req, res) => {
    const course = await axios.get(
      `https://mini-project-f433b.firebaseio.com/courses/${req.params.id}.json`
    );
    return res.send(course.data);
  })

  .delete(async (req, res) => {
    const course = await axios.delete(
      `https://mini-project-f433b.firebaseio.com/courses/${req.params.id}.json`
    );
    if (course.status === 200) return res.send("delete success");
    else return res.status(400).send("delete failed");
  })

  .put(async (req, res) => {
    const res1 = await axios.patch(
      `https://mini-project-f433b.firebaseio.com/courses/${req.params.id}.json`,
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      }
    );
    if (res1.status === 200) return res.send("edit success");
    else return res.status(400).send("edit failed");
  });
module.exports = router;
