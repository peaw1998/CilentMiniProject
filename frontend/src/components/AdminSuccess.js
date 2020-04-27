import React, { useEffect } from "react";
import "../App.css";
import { Button, Card, Form, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Footer from "./Footer";

const AdminSuccess = (props) => {
  const courseRedux = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const getSuccess = async () => {
    let res = await axios.get("http://localhost:5000/successcourse");
    dispatch({ type: "SET_COURSES", payload: res.data });
  };

  useEffect(() => {
    getSuccess();
  }, []);

  return (
    <>
      <div className="bg center">
        <h1 className="font2">คอร์สเรียนที่สำเร็จแล้ว</h1>
        <div className="status_box">
          {courseRedux.courses.map((item, index) => {
            return (
              <Card
                className="card-success"
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
                <Card.Text className="font" style={{ margin: 5 }}>
                  รหัสวิชา : {item.id}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  ชื่อวิชา : {item.name}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  รายละเอียด : {item.description}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  ราคา : {item.price}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  รหัสผู้สร้างคอร์ส : {item.studentId}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  รหัสผู้สอน : {item.teacherId}
                </Card.Text>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AdminSuccess;
