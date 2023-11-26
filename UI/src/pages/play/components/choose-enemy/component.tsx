import { Button } from "components";
import { StyledText } from "config";

import { Enemy } from "pages/play/enums";
import { StyledStepsWrapper } from "pages/play/styles";

const ChooseEnemy: React.FC<{ onChoose: (value: Enemy) => void }> = ({
  onChoose,
}) => {
  return (
    <>
      <StyledText $delay={0}>Choose your enemy</StyledText>
      <StyledStepsWrapper>
        <Button
          width="25%"
          label="Human"
          onClick={() => onChoose(Enemy.Human)}
        />
        <p>VS</p>
        <Button
          width="25%"
          label="Computron"
          onClick={() => onChoose(Enemy.Computer)}
        />
      </StyledStepsWrapper>
    </>
  );
};

export default ChooseEnemy;
