import styled from "styled-components";

export const StyledText = styled.p<{
  $delay: number;
  $width?: number;
  $isCenter?: boolean;
}>`
    outline-color: #d1fb84;
    color: #d1fb84;
    text-shadow: 0 0 9px #d1fb84;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    text-wrap: nowrap;
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing .8s steps(40, end);
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.$delay}s;
    width: 0px;
    margin: ${(props) => (props.$isCenter ? "0 auto" : "")}
    max-width: ${(props) => `${props.$width ? `${props.$width}px` : "100%"}`};
  
    text-align: start;
  
    @keyframes typing${(props) => `${props.$width ?? ""}`} {
      from {
        border-right: unset;
        width: 0%;
      }
      1% {
        border-right: 0.75em solid #d1fb84; /* The typwriter cursor */
      }
      100% {
        border-right: unset;
      }
      to {
        width: ${(props) => `${props.$width ? `${props.$width}px` : "100%"}`};
      }
    }
  
    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: #d1fb84;
      }
    }
  `;
