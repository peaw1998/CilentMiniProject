let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
const convertObjectToArray = require("./convertObjectToArray");
const { check, validationResult } = require("express-validator");
let axios = require("axios");
let { createTokenAdmin } = require("./token");
let token = require("./token");
let { setID, checkAdmin } = require("./middleware");

router.get("/createTokenAdmin", async (req, res) => {
  let response = await axios.post(
    "https://mini-project-f433b.firebaseio.com/admin.json",
    {
      data: "test",
    }
  );
  if (response.data) {
    res.send(createTokenAdmin(response.data.name));
  }
  return res.sendStatus(400);
});

router.post("/admin/login", async (req, res) => {
  const response = await axios.get(
    `https://mini-project-f433b.firebaseio.com/admin.json?orderBy="email"&equalTo="${req.body.email}"`
  );
  if (req.body.password === convertObjectToArray(response.data)[0].password) {
    res.send(token.createTokenAdmin(convertObjectToArray(response.data)[0].id));
  }
  res.sendStatus(400);
});

router.get("/admin/profile", setID, checkAdmin, async (req, res) => {
  const response = await axios.get(
    `https://mini-project-f433b.firebaseio.com/admin/${req.tokenID}.json`
  );
  return res.send(response.data.email);
});
module.exports = router;
