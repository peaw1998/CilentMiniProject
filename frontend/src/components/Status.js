import React, { useState, useEffect } from "react";
import "../App.css";
import { Button, Card, Form, Col, Row, Container } from "react-bootstrap";
import Axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Footer from "./Footer";
import convert from "./convertToArray";

const Status = (props) => {
  const [courses, setCourses] = useState([]);

  const fetchCourse = async () => {
    const course = await Axios.get("http://localhost:5000/student/course", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setCourses(course.data);
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <>
      {/* <div className="container-fluid"> */}
      <div className="bg center">
        <h1 className="font2">สถานะคอร์สเรียน</h1>
        <div className="status_box2">
          <Card bg="danger" style={{ width: "18rem", marginTop: 10 }}>
            <Card.Header className="font">Status : Waiting</Card.Header>
            <Card.Body>
              <Card.Title className="font">ชื่อวิชา</Card.Title>
              <Card.Text className="font">รายละเอียดต่าง ๆ</Card.Text>
            </Card.Body>
            <Card.Text className="font" style={{ marginBottom: 20 }}>
              ราคา
            </Card.Text>
          </Card>
          <div className="font2">
            สถานะ Waiting หมายถึง อยู่ระหว่างรอ Tutor เลือกคอร์สเรียน
          </div>
        </div>
        <div className="status_box2">
          <Card bg="success" style={{ width: "18rem", marginTop: 10 }}>
            <Card.Header className="font">Status : Waiting</Card.Header>
            <Card.Body>
              <Card.Title className="font">ชื่อวิชา</Card.Title>
              <Card.Text className="font">รายละเอียดต่าง ๆ</Card.Text>
            </Card.Body>
            <Card.Text className="font" style={{ marginBottom: 20 }}>
              ราคา
            </Card.Text>
          </Card>
          <div className="font2">
            สถานะ Success หมายถึง Tutor เลือกคอร์สเรียนแล้ว
            โปรดรอการติดต่อกลับจาก Tutor{" "}
          </div>
        </div>

        <h1 className="font2">คอร์สเรียนของฉัน</h1>
        <Container>
          {convert(courses).map((item, index) => {
            return (
              <Row style={{ display: "flex", justifyContent: "start" }}>
                {item.map((item2) => {
                  return (
                    <Col sm={6} lg={3}>
                      <div className="status_box2">
                        <Card
                          bg={item2.status === "success" ? "success" : "danger"}
                          style={{ width: "14rem", marginTop: 10 }}
                        >
                          <Card.Header className="font">
                            Status : {item2.status}
                          </Card.Header>
                          <Card.Body>
                            <Card.Title className="font">
                              {item2.name}
                            </Card.Title>
                            <Card.Text className="font text-truncate">
                              Description : {item2.description}
                            </Card.Text>
                          </Card.Body>
                          <Card.Text
                            className="font"
                            style={{ marginBottom: 20 }}
                          >
                            ราคา : {item2.price}
                          </Card.Text>
                        </Card>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </Container>
        {/* return (

          <div className="status_box">
           <Card 
              bg={item.status === "success" ? "danger" : "success"}
              style={{ width: "18rem", marginTop: 10 }}
            >
              <Card.Header className="font">
                Status : {item.status}
              </Card.Header>
              <Card.Body>
                <Card.Title className="font">{item.name}</Card.Title>
                <Card.Text className="font">{item.description}</Card.Text>
              </Card.Body>
              <Card.Text className="font" style={{ marginBottom: 20 }}>
                ราคา : {item.price}
              </Card.Text>
            </Card>
          </div>
          );
        */}
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ student }) => ({ ...student });

export default connect(mapStateToProps)(Status);
