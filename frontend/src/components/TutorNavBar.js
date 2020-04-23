import React from "react";
import { Navbar, Form, Nav, FormControl, Button } from "react-bootstrap";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

const MyNav = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand
        onClick={(event) => {
          event.preventDefault();
          console.log(props);
        }}
      >
        Qpid Course
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            onClick={(event) => {
              event.preventDefault();
              props.history.push("/tutor/home");
            }}
          >
            {" "}
            Home
          </Nav.Link>
          <Nav.Link href="/tutor/home">All Course</Nav.Link>
          <Nav.Link href="/tutor/course">My Course</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MyNav);
