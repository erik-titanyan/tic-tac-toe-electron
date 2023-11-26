import { Size } from "pages/play/enums";
import { IShapeSize } from "./types";

export const sizeToShapeSize: Record<Size, IShapeSize> = {
  [Size.Standart]: { shape: 85, fontSize: 60 },
  [Size.Wide]: { shape: 70, fontSize: 45 },
  [Size.Wider]: { shape: 55, fontSize: 35 },
  [Size.Extra_Wide]: { shape: 45, fontSize: 30 },
  [Size.Extra_Wide_7]: { shape: 38, fontSize: 25 },
  [Size.Extra_Wide_8]: { shape: 33, fontSize: 22 },
};
