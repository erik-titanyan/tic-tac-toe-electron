import { IChildrenNode } from "../../config";

export interface IConditionalWrapperProps extends IChildrenNode {
  condition: boolean;
  wrapper: (children: IChildrenNode["children"]) => JSX.Element;
}
