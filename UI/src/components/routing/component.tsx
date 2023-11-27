import React, { Suspense, memo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Cmd } from "components/cmd";
import { RoutePaths } from "config";

import { Layout } from "../layout";
import { IRoutingProps } from "./types";

const Routing: React.FC<IRoutingProps> = ({ routes }) => {
  const location = useLocation();
  const isPlayPage = location.pathname === RoutePaths.Play;
  return (
    <Layout>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          {routes.map((el) => {
            return (
              <Route
                key={el.path}
                path={el.path}
                element={
                  el.element ? (
                    <>
                      <el.element {...el.props} /> {!isPlayPage && <Cmd />}
                    </>
                  ) : null
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default memo(Routing);
