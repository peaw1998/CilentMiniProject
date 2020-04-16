let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
const convertObjectToArray = require("./convertObjectToArray");
const { check, validationResult } = require("express-validator");
let axios = require("axios");
let { createTokenAdmin } = require("./token");

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

module.exports = router;
