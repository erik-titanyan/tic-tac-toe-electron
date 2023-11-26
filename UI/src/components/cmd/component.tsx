import { useRef, useState, memo, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "config";

import { StyledCaret, StyledInput } from "./styles";
import { commandsToRouteMap } from "./constants";

const Cmd: React.FC = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const ref = useRef<null | HTMLInputElement>(null);

  const focusInput = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", focusInput);
    return () => {
      window.removeEventListener("keydown", focusInput);
    };
  }, [focusInput]);

  return (
    <div style={{ display: "flex" }} onClick={focusInput}>
      <StyledInput
        autoFocus
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const trimmedValue = value.trim().toLowerCase();
            const path = commandsToRouteMap[trimmedValue];
            if (path) {
              navigate(path as string);
            } else {
              navigate(RoutePaths.Not_Found);
            }
            setValue("");
          }
        }}
      />
      <p style={{ display: "flex", marginRight: "5px" }}>{">"} cmd:</p>
      <p
        style={{
          display: "flex",
          color: "#d1fb84",
          textShadow: "0 0 9px #d1fb84",
        }}
      >
        {value} <StyledCaret $delay={0} />
      </p>
    </div>
  );
};

export default memo(Cmd);
