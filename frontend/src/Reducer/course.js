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
    default:
      return state;
  }
};

export default course;
