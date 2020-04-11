const jwt = require("jwt-simple");

//middleware check token
const tokenFunc = {
  createToken: (data) => {
    const payload = {
      id: data,
    };
    return jwt.encode(payload, "SECRET");
  },

  getToken: (req) => {
    if (req.headers.authorization) {
      if (req.headers.authorization.startsWith("Bearer ")) {
        let token = req.headers.authorization.split(" ")[1];
        return jwt.decode(token, "SECRET").id;
      }
    }
  },

  setID: (req, res, next) => {
    let tokenID = null;
    try {
      tokenID = tokenFunc.getToken(req);
    } catch (error) {}

    if (!tokenID) {
      res.sendStatus(401);
      return;
    }
    req.tokenID = tokenID;
    next();
  },
};

module.exports = tokenFunc;
