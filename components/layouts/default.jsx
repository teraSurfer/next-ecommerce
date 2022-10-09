import AppNavbar from "components/common/navbar";
import React from "react";
import { Container } from "react-bootstrap";

const DefaultLayout = ({ children }) => {
  return (
    <div className="app">
      <AppNavbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
