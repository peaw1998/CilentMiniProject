let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
const convertObjectToArray = require("./convertObjectToArray");
const { check, validationResult } = require("express-validator");
let axios = require("axios");
let token = require("./token");
let { setID, checkTeacher } = require("./middleware");

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

router.get("/teacher/offer", setID, checkTeacher, async (req, res) => {
  const response = await axios.get(
    `https://mini-project-f433b.firebaseio.com/courses.json?orderBy="teacherId"&equalTo="${req.tokenID}"`
  );
  return res.send(convertObjectToArray(response.data));
});

router.get("/teacher/profile", setID, checkTeacher, async (req, res) => {
  const response = await axios.get(
    `https://mini-project-f433b.firebaseio.com/teachers/${req.tokenID}.json`
  );

  const res1 = await axios.get(
    `https://mini-project-f433b.firebaseio.com/users/${response.data.userId}.json`
  );
  return res.send(res1.data);
});

router.post("/teacher/login", async (req, res) => {
  try {
    const response = await axios.get(
      `https://mini-project-f433b.firebaseio.com/users.json?orderBy="email"&equalTo="${req.body.email}"`
    );

    console.log(convertObjectToArray(response.data));
    const res1 = await axios.get(
      `https://mini-project-f433b.firebaseio.com/teachers.json?orderBy="userId"&equalTo="${
        convertObjectToArray(response.data)[0].id
      }"`
    );
    console.log(convertObjectToArray(res1.data));
    return res.send(
      token.createTokenTeacher(convertObjectToArray(res1.data)[0].id)
    );
  } catch (err) {
    return res.sendStatus(401);
  }
});

module.exports = router;
