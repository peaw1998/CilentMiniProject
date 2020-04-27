const course = (
  state = {
    courses: [],
    course: {
      description: "",
      name: "",
      price: "",
      status: "",
      studentId: "",
      teacherId: "",
    },
  },
  action
) => {
  switch (action.type) {
    case "SET_COURSES":
      return { ...state, courses: [...action.payload] };
    default:
      return state;
  }
};

export default course;
