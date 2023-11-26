import { RoutePaths } from "config";

export const commandsToRouteMap: Record<string, RoutePaths | -1> = {
  play: RoutePaths.Play,
  home: RoutePaths.Home,
  back: -1,
};
