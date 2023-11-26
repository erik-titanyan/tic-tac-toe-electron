import { Button } from "components";
import { StyledText } from "config";

import { Player } from "pages/play/enums";
import { StyledStepsWrapper } from "pages/play/styles";

const ChooseWeapon: React.FC<{ onChoose: (value: Player) => void }> = ({
  onChoose,
}) => {
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
