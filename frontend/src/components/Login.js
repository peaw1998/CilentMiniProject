import React, { useEffect, useState } from "react";
import "../App.css";
import {
  Button,
  Card,
  Form,
  Col,
  Navbar,
  Nav,
  FormControl,
  Carousel,
} from "react-bootstrap";
import LoginButton from "./LoginFacebookButton";
import LoginButtonTeacher from "./LoginFacebookButtonTeacher";
import Footer from "./Footer";

const Login = (props) => {
  const [type, setType] = useState("initial");

  let nav = () => {
    if (type === "initial") {
      return (
        <>
          <Button
            variant="outline-danger"
            className="font"
            style={{ margin: 10 }}
            onClick={() => {
              setType("student");
            }}
          >
            Student
          </Button>
          <Button
            variant="outline-danger"
            className="font"
            onClick={() => {
              setType("teacher");
            }}
          >
            Tutor
          </Button>
        </>
      );
    } else if (type === "student") {
      return (
        <>
          <Button
            variant="outline-warning"
            className="font"
            style={{ marginRight: 10 }}
            onClick={() => {
              setType("initial");
            }}
          >
            Back
          </Button>
          <LoginButton />
        </>
      );
    } else if (type === "teacher") {
      return (
        <>
          <Button
            variant="outline-warning"
            className="font"
            style={{ marginRight: 10 }}
            onClick={() => {
              setType("initial");
            }}
          >
            Back
          </Button>
          <LoginButtonTeacher />
        </>
      );
    }
  };

  useEffect(() => {
    nav();
  }, [type]);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="font" href="/">
          Qpid Course
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          {nav()}
        </Navbar.Collapse>
      </Navbar>

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
    </>
  );
};
export default Login;
