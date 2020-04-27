import React, { useEffect } from "react";
import "../App.css";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector, connect } from "react-redux";
import Axios from "axios";
import Footer from "./Footer";
import Alert from "sweetalert2";

const TutorAllCourse = (props) => {
  const courseRedux = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const fetchCourse = async () => {
    const course = await Axios.get("http://localhost:5000/waitingcourse", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({ type: "SET_COURSES", payload: course.data });
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <>
      <div className="bg center">
        <h1 className="font2">คอร์สเรียนทั้งหมด</h1>
        <div className="status_box">
          {courseRedux.courses.map((item, index) => {
            return (
              <Card
                className={
                  item.status === "success" ? "card-success" : "card-waiting"
                }
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
                  style={{ width: "100% ", backgroundColor: "#d35656" }}
                  onClick={async () => {
                    await Axios.put(
                      "http://localhost:5000/course/offer",
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
                    ).then(() => {
                      Alert.fire({
                        icon: "success",
                        title: "เลือกคอร์สสำเร็จ",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      props.history.push("/tutor/course");
                    });
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
