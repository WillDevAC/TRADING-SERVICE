import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export const FlexGroup = styled.div`
  display: flex;
`;

export const FlexGroupQr = styled(FlexGroup)`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 100px;
    max-height: 100px;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;

  li {
    font-size: 0.8rem;
    color: gray;
    text-align: justify;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    font-size: 1.2rem;
    color: gray;
    font-weight: lighter;
    color: black;
  }

  p {
    font-style: italic;
    font-size: 0.8rem;
    color: gray;
    font-weight: lighter;
  }
`;

export const MainTitle = styled(Title)`
  font-size: 1.7rem;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;
