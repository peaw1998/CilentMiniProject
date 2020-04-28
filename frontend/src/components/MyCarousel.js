import React from "react";
import "../App.css";
import { Carousel } from "react-bootstrap";

const Mycarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../images/3.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="font3">Intermediary</h1>
          <h3 className="font3">ตัวกลาง</h3>
          <p className="font3">ระหว่าง Tutor และ Student</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../images/1.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="font3">Study</h1>
          <h3 className="font3">เรียน</h3>
          <p className="font3">เพื่อให้ได้ความรู้ตรงเป้าหมาย</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../images/2.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="font3">Congenial</h1>
          <h3 className="font3">ลงตัว</h3>
          <p className="font3">
            เพื่อให้ได้นักเรียนที่ต้องการความรู้ตรงกับความสามารถของ Tutor
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Mycarousel;
