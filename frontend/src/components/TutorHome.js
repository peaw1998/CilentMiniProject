import React, { useState, useEffect } from "react";
import "../App.css";
import { Button, Card, Carousel } from "react-bootstrap";
import LoginButton from "./LoginFacebookButton";
import Footer from "./Footer";
import axios from "../../../backend/node_modules/axios";

const TutorHome = (props) => {
  return (
    <>
      {/* <div className="bg center_page"> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/400"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/400"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <Button
              variant="warning"
              className="font"
              style={{ marginTop: 5, marginBottom: 5 }}
            >
              เพิ่มคอร์ส
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Footer />
      {/* <div>
          <Card bg="dark" style={{ width: "50rem", height: "20rem" }}>
            <Card.Header className="font">วิธีการเพิ่มคอร์สเรียน</Card.Header>
            <Card.Body className="student_home">
              <text className="font">
                1. กด เพิ่มคอร์ส เพื่อทำการเพิ่มคอร์สเรียนที่เราอยากเรียน
              </text>
              <Button
                variant="warning"
                className="font"
                style={{ marginTop: 5, marginBottom: 5 }}
              >
                เพิ่มคอร์ส
              </Button>
              <text className="font">
                2. เพิ่มข้อมูลลงแบบฟอร์มให้ครบถ้วน จากนั้นกด ยืนยัน
                จากนั้นรอติวเตอร์สนใจคอร์สเรียนของคุณ
              </text>
              <Button
                variant="success"
                className="font"
                style={{ marginTop: 5, marginBottom: 5 }}
              >
                ยืนยัน
              </Button>
              <text className="font">
                3. ตรวจสอบสถานะคอร์สเรียนของคุณได้จากปุ่ม สถานะ
              </text>
              <Button
                variant="danger"
                className="font"
                style={{ marginTop: 5, marginBottom: 5 }}
              >
                สถานะ
              </Button>
            </Card.Body>
          </Card>
          <Button
            variant="warning"
            className="font"
            style={{ marginTop: 20 }}
            onClick={() => props.history.push("/add")}
          >
            เพิ่มคอร์ส
          </Button>
          <Button
            variant="danger"
            className="font"
            style={{ marginTop: 20, marginLeft: 20 }}
            onClick={() => props.history.push("/status")}
          >
            สถานะ
          </Button>
        </div> */}
      {/* </div> */}
    </>
  );
};
export default TutorHome;
