let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
const convertObjectToArray = require("./convertObjectToArray");
const { check, validationResult } = require("express-validator");
let axios = require("axios");
let token = require("./token");
let validator = require("./validator");

router
  .route("/offer")
  .post(
    token.setID,
    token.checkTeacher,
    [check("courseId").not().isEmpty()],
    validator,
    async (req, res) => {
      const response = await axios.get(
        `https://mini-project-f433b.firebaseio.com/courses/${req.body.courseId}.json`
      );
      if (response.data && response.data.status === "waiting") {
        const res1 = await axios.patch(
          `https://mini-project-f433b.firebaseio.com/courses/${req.body.courseId}.json`,
          {
            status: "success",
          }
        );
        if (res1.data) {
          const sent = await axios.post(
            "https://mini-project-f433b.firebaseio.com/offers.json",
            {
              teacherId: req.tokenID,
              courseId: req.body.courseId,
            }
          );

          if (sent.data) {
            return res.sendStatus(200);
          }
        }
        return res.sendStatus(400);
      }
      return res.status(400).send("course not waiting");
    }
  );

module.exports = router;
