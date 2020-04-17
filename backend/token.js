const jwt = require("jwt-simple");

//Token Funtion
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
};

module.exports = tokenFunc;
