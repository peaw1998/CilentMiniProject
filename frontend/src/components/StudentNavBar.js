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
        Q-pid Course
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            onClick={(event) => {
              event.preventDefault();
              props.history.push("/");
            }}
          >
            {" "}
            Home
          </Nav.Link>
          <Nav.Link href="/add">Add Course</Nav.Link>
          <Nav.Link href="/status">Status</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MyNav);
