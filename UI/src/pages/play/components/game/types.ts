export type Board = Array<string | null>;

export interface IShapeSize {
  shape: number;
  fontSize: number;
}

export interface Move {
  index: number;
  score: number;
}
