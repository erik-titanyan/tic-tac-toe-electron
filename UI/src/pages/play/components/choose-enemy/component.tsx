import { Button } from "components";
import { StyledText } from "config";

import { Enemy } from "pages/play/enums";
import { StyledStepsWrapper } from "pages/play/styles";
import { IChooseCommonProps } from "pages/play/types";

const ChooseEnemy: React.FC<IChooseCommonProps<Enemy>> = ({ onChoose }) => {
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
