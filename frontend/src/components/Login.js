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
  Row,
} from "react-bootstrap";
import LoginButton from "./LoginFacebookButton";
import LoginButtonTeacher from "./LoginFacebookButtonTeacher";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const [type, setType] = useState("initial");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
          <Button
            variant="outline-danger"
            className="font"
            style={{ margin: 10 }}
            onClick={() => {
              setType("admin");
            }}
          >
            Admin
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
    } else if (type === "admin") {
      return (
        <>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                  placeholder="E-mail"
                  className="font"
                  style={{ marginRight: 5 }}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Password"
                  type="password"
                  className="font"
                  style={{ marginRight: 5 }}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Col>
            </Form.Row>
          </Form>
          <Button
            variant="outline-success"
            className="font"
            style={{ marginLeft: 5 }}
            onClick={async () => {
              const res = await axios.post(
                "http://localhost:5000/admin/login",
                {
                  email: email,
                  password: password,
                }
              );
              if (res.data) {
                localStorage.setItem("token", res.data);
                dispatch({ type: "LOGIN_SUCCESS" });
                props.history.push("/admin");
              }
            }}
          >
            Login
          </Button>
          <Button
            variant="outline-warning"
            className="font"
            style={{ marginLeft: 5 }}
            onClick={() => {
              setType("initial");
            }}
          >
            Back
          </Button>
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
