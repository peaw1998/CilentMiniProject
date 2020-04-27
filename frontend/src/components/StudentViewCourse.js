import React, { useEffect } from "react";
import Axios from "axios";
import { Button, Card, Form, Col } from "react-bootstrap";
import Footer from "./Footer";
import Alert from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

const StudentViewCourse = (props) => {
  const courseRedux = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const getCourse = async () => {
    const course = await Axios.get(
      `http://localhost:5000/course/${props.match.params.id}`
    );
    dispatch({
      type: "UPDATE_COURSE",
      payload: { field: "name", value: course.data.name },
    });
    dispatch({
      type: "UPDATE_COURSE",
      payload: { field: "description", value: course.data.description },
    });
    dispatch({
      type: "UPDATE_COURSE",
      payload: { field: "price", value: course.data.price },
    });
  };

  const deleteCourse = async () => {
    const res = await Axios.delete(
      `http://localhost:5000/course/${props.match.params.id}`
    ).then(() => {
      Alert.fire({
        icon: "success",
        title: "ลบสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      });
      props.history.push("/status");
    });
  };

  const editCourse = async () => {
    if (
      courseRedux.course.name &&
      courseRedux.course.description &&
      courseRedux.course.price
    ) {
      const res = await Axios.put(
        `http://localhost:5000/course/${props.match.params.id}`,
        {
          name: courseRedux.course.name,
          description: courseRedux.course.description,
          price: courseRedux.course.price,
        }
      ).then(() => {
        Alert.fire({
          icon: "success",
          title: "แก้ไขสำเร็จ",
          showConfirmButton: false,
          timer: 1500,
        });
        props.history.push("/status");
      });
    } else {
      Alert.fire({
        icon: "error",
        title: "กรอกข้อมูลให้ครบถ้วน",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const clearRedux = () => {
    dispatch({
      type: "UPDATE_COURSE",
      payload: { field: "name", value: "" },
    });
    dispatch({
      type: "UPDATE_COURSE",
      payload: { field: "description", value: "" },
    });
    dispatch({
      type: "UPDATE_COURSE",
      payload: { field: "price", value: "" },
    });
  };

  useEffect(() => {
    getCourse();
    return clearRedux;
  }, []);

  return (
    <>
      <div className="center bg">
        <h1 className="font2">คอร์สเรียน {courseRedux.course.name}</h1>
        <Form style={{ width: "40%" }}>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="font2">ชื่อวิชา</Form.Label>
              <Col>
                <Form.Control
                  className="font"
                  style={{ marginTop: 5, marginBottom: 5 }}
                  value={courseRedux.course.name}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_COURSE",
                      payload: { field: "name", value: e.target.value },
                    })
                  }
                />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="font2">รายละเอียดวิชา</Form.Label>
              <Col>
                <Form.Control
                  className="font"
                  as="textarea"
                  value={courseRedux.course.description}
                  rows="8"
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_COURSE",
                      payload: { field: "description", value: e.target.value },
                    })
                  }
                />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="font2">ราคา</Form.Label>
              <Col>
                <Form.Control
                  className="font"
                  value={courseRedux.course.price}
                  style={{ marginTop: 5, marginBottom: 5 }}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_COURSE",
                      payload: { field: "price", value: e.target.value },
                    })
                  }
                />
              </Col>
            </Form.Group>
          </Form.Row>
        </Form>
        <div>
          <Button
            variant="warning"
            className="font"
            style={{ marginTop: 20, marginLeft: 20 }}
            onClick={() => {
              editCourse();
            }}
          >
            แก้ไข
          </Button>
          <Button
            variant="danger"
            className="font"
            style={{ marginTop: 20, marginLeft: 20 }}
            onClick={() => {
              deleteCourse();
            }}
          >
            ลบ
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentViewCourse;
