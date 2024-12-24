import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const AppNavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">
          Task List
        </Nav.Link>
        <Nav.Link as={NavLink} to="/add-task">
          Add Task
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
