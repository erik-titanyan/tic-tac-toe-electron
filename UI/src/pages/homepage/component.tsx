import { StyledText } from "config";

import { StyledHomepageWrapper } from "./styles";
import "./styles.css";

const Homepage: React.FC = () => {
  return (
    <StyledHomepageWrapper>
      <div className="homepage-text-wrapper">
        <div>
          <StyledText $delay={0} $width={200}>
            Hi %username%
          </StyledText>
          <StyledText $delay={0.5}>
            Welcome to this retro tic tac toe game in Electron.
          </StyledText>
          <StyledText $delay={1}>In this game you can choose your</StyledText>
          <StyledText $delay={1.2}>Enemy, Weapon and Battlefield</StyledText>
        </div>
        <div>
          <StyledText $delay={1.5}>Possible commands are</StyledText>
          <StyledText $delay={2} $width={90}>
            {">"} Home
          </StyledText>
          <StyledText $delay={2.2} $width={90}>
            {">"} Play
          </StyledText>
        </div>
      </div>
    </StyledHomepageWrapper>
  );
};

export default Homepage;
