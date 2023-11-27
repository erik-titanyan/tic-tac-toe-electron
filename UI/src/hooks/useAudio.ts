import {
  useRef,
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";

export const useAudio = (
  track: string
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const audio = useRef(new Audio(track));
  audio.current.volume = 0.4;
  audio.current.loop = true;
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => setPlaying((prev) => !prev), []);

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [playing]);

  return [playing, toggle, setPlaying];
};
