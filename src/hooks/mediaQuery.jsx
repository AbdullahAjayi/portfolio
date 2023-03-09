import { useEffect, useState } from "react";

const useMedia = () => {
  const [matchesWidth, setMatchesWidth] = useState(window.innerWidth);
  const [matchesHeight, setMatchesHeigth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("load", (e) => setMatchesWidth(window.innerWidth));
    window.removeEventListener("load", (e) =>
      setMatchesWidth(window.innerWidth)
    );
    window.addEventListener("load", (e) =>
      setMatchesHeigth(window.innerHeight)
    );
    window.removeEventListener("load", (e) =>
      setMatchesHeigth(window.innerHeight)
    );
    window.addEventListener("resize", (e) =>
      setMatchesWidth(window.innerWidth)
    );
    window.removeEventListener("resize", (e) =>
      setMatchesWidth(window.innerWidth)
    );
    window.addEventListener("resize", (e) =>
      setMatchesHeigth(window.innerHeight)
    );
    window.removeEventListener("resize", (e) =>
      setMatchesHeigth(window.innerHeight)
    );
  }, []);

  return [matchesWidth, setMatchesWidth, matchesHeight, setMatchesHeigth];
};

export default useMedia;
