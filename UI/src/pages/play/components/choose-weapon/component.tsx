import { Button } from "components";
import { StyledText } from "config";

import { Player } from "pages/play/enums";
import { StyledStepsWrapper } from "pages/play/styles";
import { IChooseCommonProps } from "pages/play/types";

const ChooseWeapon: React.FC<IChooseCommonProps<Player>> = ({ onChoose }) => {
  return (
    <>
      <StyledText $delay={0}>Choose your weapon</StyledText>
      <StyledStepsWrapper>
        <Button width="25%" label="X" onClick={() => onChoose(Player.X)} />
        <p>VS</p>
        <Button width="25%" label="O" onClick={() => onChoose(Player.O)} />
      </StyledStepsWrapper>
    </>
  );
};

export default ChooseWeapon;
