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
    case "UPDATE_COURSE":
      console.log(action);
      return {
        ...state,
        course: {
          ...state.course,
          [action.payload.field]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default course;
