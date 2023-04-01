import React from "react";

import { Container, SectionImage, SectionDescription } from "./styles";

interface OptionsProps {
  title: string;
  icon: string;
  description: string;
}

const options: React.FC<OptionsProps> = ({ title, icon, description }) => {
  return (
    <Container>
      <SectionImage>
        <img src={icon} alt={title} />
      </SectionImage>

      <SectionDescription>
        <p>{title}</p>
        <div>{description}</div>
      </SectionDescription>
    </Container>
  );
};

export default options;
