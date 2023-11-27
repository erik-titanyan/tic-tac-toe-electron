import { Enemy, Player, Size } from "pages/play/enums";

export type Board = Array<string | null>;

export interface IShapeSize {
  shape: number;
  fontSize: number;
}

export interface Move {
  index: number;
  score: number;
}

export interface IGameProps {
  boardSize: Size;
  firstPlayer: Player;
  secondPlayer: Player;
  choosenOponent: Enemy;
}
