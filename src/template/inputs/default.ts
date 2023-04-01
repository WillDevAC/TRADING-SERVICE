import styled from "styled-components";

export const Input = styled.input`
  background-color: #f5f6fa;
  padding: 1.1rem;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 100%;
`;

export const InputFileDiv = styled.div`
  border: 1px dashed black;
  border-radius: 5px;
  background-color: #f5f6fa;
  padding: 1.2rem;
`;

export const InputFile = styled.a`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 1.2rem;
  border-radius: 5px;
  font-size: 0.9rem;
  color: gray;
  gap: 10px;
  background-color: #f5f6fa;

  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export const InputButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #0b3b69;
  padding: 0.4rem 1.2rem;
  background-color: #ebebed;
  border-top: 1px solid #f5f6fa;
  border-right: 1px solid #f5f6fa;
  border-bottom: 1px solid #f5f6fa;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  svg {
    width: 20px;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 560px) {
    padding: 0 0.5rem;
  }
`;

export const Label = styled.label`
  color: gray;
  font-size: 0.9rem;
`;

export const Strong = styled.span`
  font-weight: 500;
`;

export const Title = styled.h1`
  color: gray;
  font-size: 1.4rem;
`;

const select = styled.select`
  background-color: #f5f6fa;
  padding: 1.2rem;
  border: none;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("icons/expand.svg");
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: 98% 60%;
`;

export const InputDate = styled.input`
  background-color: #ebf2f8;
  border-radius: 10px;
  padding: 1px 20px;
  border: none;

  @media screen and (max-width: 420px) {
    padding: 0.5rem 1rem;
  }
`;

export const InputSelect = styled(select)``;
export const InputDefault = styled(Input)``;
