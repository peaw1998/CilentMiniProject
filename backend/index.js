let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let router = express.Router();
let token = require("./token");
let axios = require("axios");

let app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(require("./course"));
app.use(require("./student"));
app.use(require("./teacher"));
app.use(require("./admin"));
app.use(require("./offer"));
app.use(require("./user"));
const convertObjectToArray = require("./convertObjectToArray");
let { checkStudent } = require("./middleware");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server on port:", PORT);
});
