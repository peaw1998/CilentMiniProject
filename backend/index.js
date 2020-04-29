let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(require("./course"));
app.use(require("./student"));
app.use(require("./teacher"));
app.use(require("./admin"));
app.use(require("./user"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server on port:", PORT);
});
