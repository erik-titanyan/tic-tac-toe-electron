import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "components";
import { RoutePaths } from "config";

import {
  ChooseBattlefield,
  ChooseWeapon,
  Game,
  ChooseEnemy,
} from "./components";
import { Enemy, Player, Size } from "./enums";
import "./styles.css";

const Play: React.FC = () => {
  const [choosenOponent, setChoosenOponent] = useState(Enemy.Human);
  const [firstPlayer, setFirstPlayer] = useState<Player>(Player.X);
  const [secondPlayer, setSecondPlayer] = useState<Player>(Player.O);
  const [boardSize, setBoardSize] = useState(Size.Standart);
  const [steps, setSteps] = useState(1);

  const navigate = useNavigate();

  return (
    <div className="play-steps-wrapper">
      <div>
        {steps === 1 && (
          <ChooseWeapon
            onChoose={(value: Player) => {
              setFirstPlayer(value);
              const opposite = value === Player.X ? Player.O : Player.X;
              setSecondPlayer(opposite);
              setSteps(2);
            }}
          />
        )}
        {steps === 2 && (
          <ChooseEnemy
            onChoose={(value: Enemy) => {
              setChoosenOponent(value);
              setSteps(3);
            }}
          />
        )}
        {steps === 3 && (
          <ChooseBattlefield
            onChoose={(value: Size) => {
              setBoardSize(value);
              setSteps(4);
            }}
          />
        )}
        {steps === 4 && (
          <Game
            boardSize={boardSize}
            firstPlayer={firstPlayer}
            secondPlayer={secondPlayer}
            choosenOponent={choosenOponent}
          />
        )}
      </div>
      <Button
        label="Back to menu"
        width="200px"
        onClick={() => navigate(RoutePaths.Home)}
      />
    </div>
  );
};

export default Play;
