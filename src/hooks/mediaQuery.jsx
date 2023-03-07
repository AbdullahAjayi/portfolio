import { useEffect, useState } from "react";

const useMedia = () => {
  const [matches, setMatches] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("load", (e) => setMatches(window.innerWidth));
    window.addEventListener("resize", (e) => setMatches(window.innerWidth));
  }, []);

  return [matches];
};

export default useMedia;
