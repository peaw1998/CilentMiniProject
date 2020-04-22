import React, { useState } from "react";
import "../App.css";
import { Button, Card, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";

const AddCourse = (props) => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const Post = async () => {
    const res = await axios.post(
      "http://localhost:5000/course",
      {
        name: name,
        description: detail,
        price: price,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    props.history.push("/");
  };

  return (
    <>
      <div className="bg center ">
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
                  placeholder="รายละเอียดต่าง ๆ เช่น พื้นฐานก่อนหน้า วัตถุประสงค์ในการเรียน อายุผู้เรียน เวลาที่ต้องการเรียน(กำหนดเป็นวันและเวลา/อาทิตย์) เป็นต้น"
                  className="font"
                  as="textarea"
                  rows="8"
                  onChange={(e) => setDetail(e.target.value)}
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
                  onChange={(e) => setPrice(e.target.value)}
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
    </>
  );
};

const mapStateToProps = ({ student }) => ({ ...student });

export default connect(mapStateToProps)(AddCourse);
