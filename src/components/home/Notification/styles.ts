import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
`;

export const NotifTitle = styled.h1`
  color: #060e1b;
  font-size: 1.2rem;

  @media screen and (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

export const NotifValueDiv = styled.div`
  display: block;
`;

export const NotifValue = styled.div`
  display: flex;

  h1 {
    font-size: 1.2rem;

    @media screen and (max-width: 460px) {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 460px) {
    align-items: center;
  }
`;

export const NotifContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const NotifColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const NotifRow = styled(NotifColumn)`
  flex-direction: row;
  justify-content: flex-start;
  color: #707070;

  p {
    @media screen and (max-width: 460px) {
      font-size: 0.8rem;
    }
  }
`;
