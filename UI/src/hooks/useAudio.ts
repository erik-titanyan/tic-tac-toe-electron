import { useRef, useState, useEffect } from "react";

export const useAudio = (track: string | any): [boolean, () => void] => {
  const audio = useRef(new Audio(track));
  audio.current.volume = 0.4;
  audio.current.loop = true;
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [playing]);

  return [playing, toggle];
};
