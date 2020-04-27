import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button, Card, Form, Col } from "react-bootstrap";
import Footer from "./Footer";
import Alert from "sweetalert2";

const StudentViewCourse = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const getCourse = async () => {
    const course = await Axios.get(
      `http://localhost:5000/course/${props.match.params.id}`
    );
    setName(course.data.name);
    setDescription(course.data.description);
    setPrice(course.data.price);
    console.log(course.data);
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
    if (name && description && price) {
      const res = await Axios.put(
        `http://localhost:5000/course/${props.match.params.id}`,
        {
          name: name,
          description: description,
          price: price,
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

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <>
      <div className="center bg">
        <h1 className="font2">คอร์สเรียน {name}</h1>
        <Form style={{ width: "40%" }}>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="font2">ชื่อวิชา</Form.Label>
              <Col>
                <Form.Control
                  className="font"
                  style={{ marginTop: 5, marginBottom: 5 }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={description}
                  rows="8"
                  onChange={(e) => setDescription(e.target.value)}
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
                  value={price}
                  style={{ marginTop: 5, marginBottom: 5 }}
                  onChange={(e) => setPrice(e.target.value)}
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
