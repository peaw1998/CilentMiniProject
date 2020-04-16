const jwt = require("jwt-simple");

//middleware check token
const tokenFunc = {
  createTokenTeacher: (data) => {
    const payload = {
      id: data,
      role: "teacher",
    };
    return jwt.encode(payload, "SECRET");
  },
  createTokenStudent: (data) => {
    const payload = {
      id: data,
      role: "student",
    };
    return jwt.encode(payload, "SECRET");
  },
  createTokenAdmin: (data) => {
    const payload = {
      id: data,
      role: "admin",
    };
    return jwt.encode(payload, "SECRET");
  },

  getToken: (req) => {
    if (req.headers.authorization) {
      if (req.headers.authorization.startsWith("Bearer ")) {
        let token = req.headers.authorization.split(" ")[1];
        return jwt.decode(token, "SECRET");
      }
    }
  },

  setID: (req, res, next) => {
    let tokenID = null;
    try {
      tokenID = tokenFunc.getToken(req).id;
    } catch (error) {}

    if (!tokenID) {
      res.sendStatus(401);
      return;
    }
    req.tokenID = tokenID;
    next();
  },

  checkStudent: (req, res, next) => {
    let tokenStudent = null;
    try {
      tokenStudent = tokenFunc.getToken(req).role;
      console.log(tokenStudent);
    } catch (error) {}
    if (tokenStudent !== "student") {
      res.sendStatus(401);
      return;
    }
    next();
  },

  checkTeacher: (req, res, next) => {
    let tokenTeacher = null;
    try {
      tokenTeacher = tokenFunc.getToken(req).role;
      console.log(tokenTeacher);
    } catch (error) {}
    if (tokenTeacher !== "teacher") {
      res.sendStatus(401);
      return;
    }
    next();
  },

  checkAdmin: (req, res, next) => {
    let tokenAdmin = null;
    try {
      tokenAdmin = tokenFunc.getToken(req).role;
      console.log(tokenAdmin);
    } catch (error) {}
    if (tokenAdmin !== "admin") {
      res.sendStatus(401);
      return;
    }
    next();
  },
};

module.exports = tokenFunc;
