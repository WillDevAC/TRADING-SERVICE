import React from "react";

import Header from "../../home/header";

import { Container } from "./styles";

export default function Layout({ children, type }) {
  return (
    <>
      <Header type={type} />
      <Container>{children}</Container>
    </>
  );
}
