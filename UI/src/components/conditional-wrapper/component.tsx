import React from "react";
import { IConditionalWrapperProps } from "./types";

const ConditionalWrapper: React.FC<IConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => {
  return <>{condition ? wrapper(children) : children}</>;
};

export default ConditionalWrapper;
