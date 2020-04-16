let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
const convertObjectToArray = require("./convertObjectToArray");
const { check, validationResult } = require("express-validator");
let axios = require("axios");
let token = require("./token");

router.get("/createTokenTeacher", async (req, res) => {
  let response = await axios.post(
    "https://mini-project-f433b.firebaseio.com/teachers.json",
    {
      data: "test",
    }
  );
  if (response.data) {
    res.send(token.createTokenTeacher(response.data.name));
  }
  return res.sendStatus(400);
});

router.get(
  "/teacher/offer",
  token.setID,
  token.checkTeacher,
  async (req, res) => {
    const response = await axios.get(
      `https://mini-project-f433b.firebaseio.com/offers.json`
    );
    if (response.data) {
      const offerByTeacherId = convertObjectToArray(response.data).filter(
        (course) => {
          if (course && course.teacherId === req.tokenID) {
            return true;
          } else {
            return false;
          }
        }
      );
      return res.send(offerByTeacherId);
    }
    return res.sendStatus(400);
  }
);
module.exports = router;
