import React from "react";

import {
  Container,
  NotifTitle,
  NotifValue,
  NotifContainer,
  NotifColumn,
  NotifRow,
  NotifValueDiv,
} from "./styles";

interface Props {
  Image: string;
  Title: string;
  Date: string;
  Time: string;
  Value: string;
  amount: string
}

const notification: React.FC<Props> = ({ Image, Title, Date, Time, Value, amount }) => {
  return (
    <Container>
      <NotifContainer>
        <NotifColumn>
          <img src={Image} alt="" />
        </NotifColumn>
        <NotifColumn>
          <NotifTitle>{Title}</NotifTitle>
          <NotifRow>
            <p>{Date}</p>
            <p>{Time}</p>
          </NotifRow>
        </NotifColumn>
      </NotifContainer>
      <NotifValue>
        <NotifValueDiv>
          <h1>{Value}</h1>
          <h1 style={{color: '#707070', fontSize: 10}}>{amount}</h1>
        </NotifValueDiv>
      </NotifValue>
    </Container>
  );
};

export default notification;
