import React, { useState, useEffect } from "react";
import "../App.css";
import { Button, Card, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Axios from "axios";

const Course = (props) => {
  const [offer, setOffer] = useState([]);

  const fetchCourse = async () => {
    const offer = await Axios.get("http://localhost:5000/teacher/offer", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setOffer(offer.data);
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <>
      <div className="h-100 bg2 center">
        <div className="row">
          <Button
            variant="warning"
            className="font"
            style={{ marginTop: 20 }}
            onClick={() => props.history.push("/tutor/home")}
          >
            คอร์สเรียนทั้งหมด
          </Button>
          <Button
            variant="danger"
            className="font"
            style={{ marginTop: 20, marginLeft: 20 }}
            onClick={() => props.history.push("/tutor/course")}
          >
            คอร์สที่เลือก
          </Button>
        </div>
        <h1 className="font2">คอร์สเรียนของฉัน</h1>
        <div className="status_box">
          {offer.map((item, index) => {
            return (
              <Card bg="dark" style={{ width: "18rem", marginTop: 10 }}>
                <Card.Header className="font">
                  PIN : {item.courseId}
                </Card.Header>
                <Card.Body>
                  <Card.Text className="font">ชื่อวิชา : {item.name}</Card.Text>
                  <Card.Text className="font">
                    รายละเอียดวิชา : {item.description}
                  </Card.Text>
                  <Card.Text className="font">ราคา : {item.price}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ teacher }) => ({ ...teacher });
export default connect(mapStateToProps)(Course);
