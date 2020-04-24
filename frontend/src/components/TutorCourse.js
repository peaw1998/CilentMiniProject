import React, { useState, useEffect } from "react";
import "../App.css";
import { Button, Card, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Axios from "axios";
import Footer from "./Footer";

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
      <div className="bg center">
        <h1 className="font2">คอร์สเรียนของฉัน</h1>
        <div className="status_box">
          {offer.map((item, index) => {
            return (
              <Card bg="dark" style={{ width: "60%", marginTop: 10 }}>
                <Card.Header
                  className="font"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
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
      <Footer />
    </>
  );
};

const mapStateToProps = ({ teacher }) => ({ ...teacher });
export default connect(mapStateToProps)(Course);
