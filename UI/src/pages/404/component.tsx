import { StyledText } from "config";

const NotFound = () => {
  return (
    <>
      <StyledText $delay={0}>
        There is no such command, possible commands are:
      </StyledText>

      <StyledText $delay={0.5} $width={90}>
        {">"} Home
      </StyledText>
      <StyledText $delay={0.8} $width={90}>
        {">"} Play
      </StyledText>
    </>
  );
};

export default NotFound;
