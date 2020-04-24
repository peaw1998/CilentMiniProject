import React, { useState, useEffect } from "react";
import "../App.css";
import { Button, Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import Axios from "axios";
import Footer from "./Footer";

const TutorAllCourse = (props) => {
  const [courses, setCourses] = useState([]);

  const fetchCourse = async () => {
    const course = await Axios.get("http://localhost:5000/waitingcourse", {
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
      <div className="bg center">
        <h1 className="font2">คอร์สเรียนทั้งหมด</h1>
        <div className="status_box">
          {courses.map((item, index) => {
            return (
              <Card
                bg={item.status === "success" ? "danger" : "success"}
                style={{ width: "60%", marginTop: 10 }}
              >
                <Card.Header
                  className="font"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  สถานะ : {item.status}
                </Card.Header>

                <Card.Title className="font" style={{ margin: 5 }}>
                  ชื่อวิชา : {item.name}
                </Card.Title>
                <Card.Text className="font" style={{ margin: 5 }}>
                  รายละเอียด : {item.description}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  ราคา : {item.price}
                </Card.Text>
                <Button
                  variant="dark"
                  style={{ width: "100% " }}
                  onClick={async () => {
                    await Axios.post(
                      "http://localhost:5000/offer",
                      {
                        courseId: item.id,
                      },
                      {
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${localStorage.getItem(
                            "token"
                          )}`,
                        },
                      }
                    );
                    props.history.push("/tutor/course");
                  }}
                >
                  เลือก
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ teacher }) => ({ ...teacher });
export default connect(mapStateToProps)(TutorAllCourse);
