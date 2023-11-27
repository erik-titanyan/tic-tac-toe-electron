import styled from "styled-components";

import PCimg from "./assets/pc-pixel.png";
import BGimg from "./assets/retro-pixel.jpg";
import NoiseImg from "./assets/noise.png";

export const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BGimg});
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 920px), (max-height: 714px) {
    all: unset;
  }
`;

export const StyledWrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  background-image: url(${PCimg});
  width: 967px;
  height: 750px;
  padding: 122px 110px;
  @media (max-width: 920px), (max-height: 714px) {
    all: unset;
  }
`;

export const StyledContentWrapper = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #374529 0, #0f140a 100%);
  border: 16px solid #0f0f0f;
  -webkit-box-shadow: 0 1px 60px 10px #282e28,
    inset 0 0 20px 20px rgba(0, 0, 0, 0.97);
  box-shadow: 0 1px 60px 10px #282e28, inset 0 0 20px 20px rgba(0, 0, 0, 0.97);
  height: 100%;
  border-radius: 38px;
  position: relative;
  overflow: hidden;
  @media (max-width: 920px), (max-height: 714px) {
    height: 100vh;
    border-radius: 0;
    border: unset;
    padding: 16px;
    box-sizing: border-box;
  }
`;

export const StyledPCEffects = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(${NoiseImg});
  background-blend-mode: overlay;
  opacity: 0.2;
`;

export const StyledPCLine = styled.div`
  position: absolute;
  width: 100%;
  height: 20%;
  top: -20%;
  background: linear-gradient(rgba(81, 97, 51, 0), rgba(81, 97, 51, 0.09));
  -webkit-animation: scan 6s ease-in-out 6s infinite forwards;
  animation: scan 6s ease-in-out 6s infinite forwards;
  @keyframes scan {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
    }
    100% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
    }
  }
`;

export const StyledRouterWrapper = styled.div`
  z-index: 1200;
  position: relative;
  height: 100%;
  padding: 20px 25px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: #d1fb84;
    border: 0 none #fff;
    border-radius: 4px;
  }
`;
