import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: white;
  border-radius: 6px;
  background-color: red;
  border: 1px solid #61dafb;

  &:hover {
    box-shadow: 1px 1px 2px 2px #166b83;
  }
`;

export const Icon = styled(Logo)`
  fill: white;
  width: 32px;
  height: 32px;
`;
