import React from "react";
import "../App.css";
import { Button, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";
import Footer from "./Footer";
import Alert from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

const AddCourse = (props) => {
  const courseRedux = useSelector((state) => state.course);
  const dispatch = useDispatch();
  console.log(courseRedux.course);

  const Post = async () => {
    const res1 = await axios
      .post(
        "https://miniproject-client.herokuapp.com/course",
        {
          name: courseRedux.course.name,
          description: courseRedux.course.description,
          price: courseRedux.course.price,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        Alert.fire({
          icon: "success",
          title: "สร้างคอร์สเรียนเรียบร้อย",
          showConfirmButton: false,
          timer: 1500,
        });
        props.history.push("/status");
      })
      .catch(function (error) {
        Alert.fire({
          icon: "error",
          title: "กรุณากรอกข้อมูลให้ครบถ้วน",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <>
      <div className="center bg">
        <h1 className="font2">เพิ่มคอร์สเรียนของฉัน</h1>
        <Form style={{ width: "40%" }}>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="font2">ชื่อวิชา</Form.Label>
              <Col>
                <Form.Control
                  placeholder="วิชาที่อยากเรียน เช่น เปียโน คณิตศาสตร์(ม.2) ภาษาไทย(Onet) เป็นต้น "
                  className="font"
                  style={{ marginTop: 5, marginBottom: 5 }}
                  onChange={(e) => {
                    dispatch({
                      type: "UPDATE_COURSE",
                      payload: { field: "name", value: e.target.value },
                    });
                  }}
                />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="font2">รายละเอียดวิชา</Form.Label>
              <Col>
                <Form.Control
                  placeholder="รายละเอียดต่าง ๆ เช่น พื้นฐานก่อนหน้า วัตถุประสงค์ในการเรียน รายละเอียดของผู้เรียน ได้แก่ ชื่อ เบอร์โทรศัพท์ อายุ เวลาที่ต้องการเรียน(กำหนดเป็นวันและเวลา/อาทิตย์) เป็นต้น"
                  className="font"
                  as="textarea"
                  rows="8"
                  onChange={(e) => {
                    dispatch({
                      type: "UPDATE_COURSE",
                      payload: { field: "description", value: e.target.value },
                    });
                  }}
                />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="font2">ราคา</Form.Label>
              <Col>
                <Form.Control
                  placeholder="ราคา กำหนดเป็นช่วง เช่น 300-500/ชั่วโมง"
                  className="font"
                  style={{ marginTop: 5, marginBottom: 5 }}
                  onChange={(e) => {
                    dispatch({
                      type: "UPDATE_COURSE",
                      payload: { field: "price", value: e.target.value },
                    });
                  }}
                />
              </Col>
            </Form.Group>
          </Form.Row>
        </Form>
        <Button
          variant="danger"
          className="font"
          style={{ marginTop: 20, marginLeft: 20 }}
          onClick={Post}
        >
          ยืนยัน
        </Button>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ student }) => ({ ...student });

export default connect(mapStateToProps)(AddCourse);
