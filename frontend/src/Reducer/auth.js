const auth = (
  state = {
    login: !!localStorage.getItem("token"),
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { login: true };
    case "LOGOUT":
      return { login: false };
    default:
      return state;
  }
};

export default auth;
