import React from "react";

import { Container, Section, Title, Form, SectionMobile } from "./styles";

const initial: React.FC = ({ children }) => {
  return (
    <Container>
      <SectionMobile>
        <img src="/images/logo.png" alt="Logo" />
      </SectionMobile>

      <Section>{children}</Section>
    </Container>
  );
};

export default initial;
