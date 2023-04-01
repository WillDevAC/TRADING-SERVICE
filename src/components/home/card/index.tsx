import React from "react";

import {
  Card,
  CardSection,
  CardTitle,
  CardValueTop,
  CardValueBottom,
} from "./styles";

interface PropsCard {
  title_top?: string;
  title_bottom?: string;
  value_top?: string;
  value_bottom?: string;
}

const card: React.FC<PropsCard> = ({
  title_top,
  title_bottom,
  value_top,
  value_bottom,
}) => {
  return (
    <Card>
      <CardSection isColumn="false">
        <CardTitle>{title_top}</CardTitle>
        <CardValueTop>{value_top}</CardValueTop>
      </CardSection>

      <CardSection isColumn="false">
        <CardTitle>{title_bottom}</CardTitle>
        <CardValueBottom>{value_bottom}</CardValueBottom>
      </CardSection>
    </Card>
  );
};

export default card;
