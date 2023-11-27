import { useState, memo } from "react";

import { useAudio } from "hooks";

import { StyledBtnsWrapper, StyledSoundBtnWrapper } from "./styles";
import { BtnOff, BtnOn, SoundOff, SoundOn, SoundText } from "./assets";

const track = require("./assets/music.mp3");

const PCBtnsSection: React.FC = () => {
  const [isBtnOn, setIsBtnOn] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [, toggle] = useAudio(track);

  return (
    <>
      <StyledBtnsWrapper onClick={() => setIsBtnOn((prev) => !prev)}>
        {isBtnOn ? <BtnOn /> : <BtnOff />}
      </StyledBtnsWrapper>
      <StyledSoundBtnWrapper
        onClick={() => {
          setIsSoundOn((prev) => !prev);
          toggle();
        }}
      >
        <SoundText /> {isSoundOn ? <SoundOn /> : <SoundOff />}
      </StyledSoundBtnWrapper>
    </>
  );
};

export default memo(PCBtnsSection);
