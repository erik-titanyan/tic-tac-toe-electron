import { RoutePaths } from "./enums";

export interface IRoute {
  path: RoutePaths;
  element: React.LazyExoticComponent<any>;
  protected?: boolean;
  props?: any;
}
