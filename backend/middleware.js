let token = require("./token");

const Func = {
  setID: (req, res, next) => {
    let tokenID = null;
    try {
      tokenID = token.getToken(req).id;
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
      tokenStudent = token.getToken(req).role;
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

module.exports = Func;
