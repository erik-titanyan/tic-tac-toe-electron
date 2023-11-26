import { Button } from "components";
import { StyledText } from "config";

import { Size } from "pages/play/enums";
import { StyledStepsWrapper } from "pages/play/styles";

const ChooseBattlefield: React.FC<{ onChoose: (value: Size) => void }> = ({
  onChoose,
}) => {
  return (
    <>
      <StyledText $delay={0}>Choose field of battle</StyledText>
      <StyledStepsWrapper>
        <Button
          width="25%"
          label="3x3"
          onClick={() => onChoose(Size.Standart)}
        />
        <p>VS</p>
        <Button width="25%" label="4x4" onClick={() => onChoose(Size.Wide)} />
      </StyledStepsWrapper>
      <StyledStepsWrapper>
        <Button width="25%" label="5x5" onClick={() => onChoose(Size.Wider)} />
        <p>VS</p>
        <Button
          width="25%"
          label="6x6"
          onClick={() => onChoose(Size.Extra_Wide)}
        />
      </StyledStepsWrapper>
      <StyledStepsWrapper>
        <Button
          width="25%"
          label="7x7"
          onClick={() => onChoose(Size.Extra_Wide_7)}
        />
        <p>VS</p>
        <Button
          width="25%"
          label="8x8"
          onClick={() => onChoose(Size.Extra_Wide_8)}
        />
      </StyledStepsWrapper>
    </>
  );
};

export default ChooseBattlefield;
