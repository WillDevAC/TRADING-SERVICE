import styled from "styled-components";

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0 15px 0;
  gap: 10px;

  @media screen and (max-width: 370px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const BtnGray = styled.a`
  background-color: #ebf2f8;
  border-radius: 10px;
  color: #373e56;
  text-decoration: none;
  border-radius: 10px;
  padding: 8px 20px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const GraySelect = styled.select`
  background-color: #ebf2f8;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("icons/expand.svg");
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: 95.5% 50%;
  color: #373e56;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 8px 45px 8px 18px;

  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option`
  display: block;
`;

export const BtnBlue = styled(BtnGray)`
  background-color: ${(props) => props.theme.colors.primary};
  align-self: center;
  color: #ffffff;
  padding: 8px 18px;
`;
