import { Button } from "components";
import { StyledText } from "config";

import { Size } from "pages/play/enums";
import { StyledStepsWrapper } from "pages/play/styles";
import { IChooseCommonProps } from "pages/play/types";

const ChooseBattlefield: React.FC<IChooseCommonProps<Size>> = ({
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
        <p>x</p>
        <Button width="25%" label="4x4" onClick={() => onChoose(Size.Wide)} />
      </StyledStepsWrapper>
      <StyledStepsWrapper>
        <Button width="25%" label="5x5" onClick={() => onChoose(Size.Wider)} />
        <p>x</p>
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
        <p>x</p>
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
