import styled from "styled-components";

import { IShapeSize } from "./types";
import { StyledButton } from "components/button/styles";

export const StyledTD = styled.td<{ $size: IShapeSize; $disabled: boolean }>`
  border: 2px solid #d1fb84;
  height: ${(props) => props.$size.shape}px;
  width: ${(props) => props.$size.shape}px;
  text-align: center;
  vertical-align: middle;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: ${(props) => props.$size.fontSize}px;
  cursor: pointer;
  color: #d1fb84;
  text-shadow: 0 0 9px #d1fb84;
  pointer-events: ${(props) => (props.$disabled ? "none" : "all")};
`;

export const ReplyButton = styled(StyledButton)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 100%;
  max-width: 200px;
`;
