import React, { useEffect } from "react";
import "../App.css";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector, connect } from "react-redux";
import Axios from "axios";
import Footer from "./Footer";

const Course = (props) => {
  const courseRedux = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const fetchCourse = async () => {
    const course = await Axios.get(
      "https://miniproject-client.herokuapp.com/teacher/offer",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch({ type: "SET_COURSES", payload: course.data });
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <>
      <div className=" bg center">
        <h1 className="font2">คอร์สเรียนของฉัน</h1>
        <div className="status_box">
          {courseRedux.courses.map((item, index) => {
            return (
              <Card
                className="card-tutor"
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
                  PIN : {item.id}
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
