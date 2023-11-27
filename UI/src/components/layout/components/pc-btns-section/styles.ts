import styled from "styled-components";

export const StyledBtnsWrapper = styled.div`
  position: absolute;
  bottom: 34px;
  svg {
    cursor: pointer;
  }
  @media (max-width: 920px), (max-height: 714px) {
    display: none;
  }
`;

export const StyledSoundBtnWrapper = styled(StyledBtnsWrapper)`
  right: 100px;
`;
