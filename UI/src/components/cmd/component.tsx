import { useRef, useState, memo, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "config";

import { StyledCaret, StyledInput } from "./styles";
import { commandsToRouteMap } from "./constants";
import "./styles.css";

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

  const onCmdEnterKeyPress: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
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
      },
      [navigate, value]
    );

  return (
    <div className="cmd-wrapper" onClick={focusInput}>
      <StyledInput
        autoFocus
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onCmdEnterKeyPress}
      />
      <p className="cmd-text">{">"} cmd:</p>
      <p className="cmd-pseudo-input">
        {value} <StyledCaret $delay={0} />
      </p>
    </div>
  );
};

export default memo(Cmd);
