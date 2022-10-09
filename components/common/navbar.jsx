import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Link from "next/link";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>E-Commerce</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
