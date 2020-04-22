import React, { useState, useEffect } from "react";
import "../App.css";
import { Button, Card, Form, Col } from "react-bootstrap";
import Axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
      <div className="bg2 center">
        <h1 className="font2">คอร์สเรียนของฉัน</h1>

        {courses.map((item, index) => {
          return (
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
                  ราคา : {item.price} บาท
                </Card.Text>
              </Card>
            </div>
          );
        })}

        {/* </div> */}
      </div>
    </>
  );
};

const mapStateToProps = ({ student }) => ({ ...student });

export default connect(mapStateToProps)(Status);
