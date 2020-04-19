import React from "react";
import "../App.css";
import { Button, Card, Form, Col } from "react-bootstrap";
import LoginButton from "./LoginFacebookButton";

const Login = (props) => {
  return (
    <>
      <div className="bg center_page">
        <Card bg="dark" style={{ width: "30rem", height: "30rem" }}>
          <Card.Header className="font" style={{ fontSize: 25 }}>
            Login
          </Card.Header>
          <Card.Body className="login">
            <Form style={{ width: "60%" }}>
              <Form.Row>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label className="font2">E-mail</Form.Label>
                  <Col>
                    <Form.Control
                      placeholder="E-mail"
                      className="font"
                      style={{ marginTop: 5, marginBottom: 5 }}
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label className="font2">Password</Form.Label>
                  <Col>
                    <Form.Control
                      placeholder="Password"
                      type="password"
                      className="font"
                      style={{ marginTop: 5, marginBottom: 5 }}
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Form.Row>
            </Form>

            <Button variant="success" style={{ marginBottom: 10 }}>
              Login
            </Button>
            <text className="font" style={{ marginBottom: 10 }}>
              สมัครสมาชิกใหม่
            </text>
            <LoginButton />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Login;
