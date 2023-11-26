import { lazy } from "react";

import { RoutePaths } from "./enums";
import { IRoute } from "./types";

export const routes: IRoute[] = [
  {
    path: RoutePaths.Home,
    element: lazy(() => import("pages/homepage")),
  },
  {
    path: RoutePaths.Play,
    element: lazy(() => import("pages/play")),
  },
  {
    path: RoutePaths.Not_Found,
    element: lazy(() => import("pages/404")),
  },
];
