const auth = (
  state = {
    login: !!localStorage.getItem("token"),
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { login: true };
    default:
      return state;
  }
};

export default auth;
