let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
let token = require("./token");

let app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/generatetoken", (req, res) => {
  res.send(token.createToken("test123"));
});

app.get("/test2", token.setID, (req, res) => {
  console.log(req.tokenID);
  res.send("ok");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server on port:", PORT);
});
