import styled from "styled-components";

export const StyledCaret = styled.span<{ $delay: number }>`
  animation: blink-text 1s steps(2, start) infinite;
  width: 0.75em;
  display: inline-block;
  background-color: #000;
  opacity: 0;
  height: 20px;
  animation-delay: ${(props) => props.$delay}s;

  @media (max-width: 700px) {
    height: 17px;
  }

  @media (max-width: 630px) {
    height: 15px;
  }

  @media (max-width: 550px) {
    height: 13px;
  }

  @keyframes blink-text {
    100% {
      opacity: 1;
      background-color: #d1fb84;
    }
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
`;
