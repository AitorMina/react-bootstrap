import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

import React from "react";
import Menu from "./Menu";

export default function Layout() {
  return (
    <>
      <Menu />
      <Container fluid="md">
        {/**/}
        <Outlet />
      </Container>
    </>
  );
}
