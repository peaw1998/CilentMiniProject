import React, { useEffect, useState } from "react";
import { Navbar, Form, Nav, FormControl, Button } from "react-bootstrap";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const MyNav = (props) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://miniproject-client.herokuapp.com/admin/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setEmail(res.data.email);
      })
      .catch((error) => {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
      });
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand
        className="font2"
        onClick={(event) => {
          event.preventDefault();
          console.log(props);
        }}
      >
        Qpid Course
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto font2">
          <Nav.Link
            onClick={(event) => {
              event.preventDefault();
              props.history.push("/admin");
            }}
          >
            {" "}
            Home
          </Nav.Link>
          <Nav.Link className="font2" href="/admin/success">
            Success
          </Nav.Link>
          <Nav.Link className="font2" href="/admin/waiting">
            Waiting
          </Nav.Link>
        </Nav>
        <text className="font2" style={{ marginRight: 10 }}>
          ADMIN
        </text>
        <Button
          variant="outline-danger"
          onClick={() => {
            localStorage.removeItem("token");
            dispatch({ type: "LOGOUT" });
          }}
        >
          Logout
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MyNav);
