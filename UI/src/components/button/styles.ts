import styled from "styled-components";

export const StyledButton = styled.button<{ $width?: string }>`
  display: block;
  position: relative;
  margin: 12px 0;
  border: 1px solid #d1fb84;
  padding: 8px;
  color: #d1fb84;
  background: unset;
  cursor: pointer;
  &:hover {
    color: #000;
    background: #d1fb84;
  }
  width: ${(props) => (props.$width ? "100%" : "unset")};
  max-width: ${(props) => (props.$width ? props.$width : "unset")};
`;
