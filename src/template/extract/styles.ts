import styled from "styled-components";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export const ExtractPagination = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ExtractPaginationButtonPrev = styled.div`
  display: flex;
  height: 38px;
  width: 38px;
  background-color: #ebf2f8;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #dfe5eb;
  }
`;

export const ExtractPaginationButtonNext = styled.div`
  display: flex;
  height: 38px;
  width: 38px;
  background-color: #ebf2f8;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #dfe5eb;
  }
`;

export const PrevIcon = styled(GrFormPrevious)`
  font-size: 20px;
  color: white;
`;

export const NextIcon = styled(GrFormNext)`
  font-size: 20px;
  color: white;
`;

export const ExtractPaginationNumber = styled.p`
  color: black;
`;
