import { useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
const BackToTop = () => {
  useEffect(() => {
    const scooty = document.getElementById("take-me-up");
    const scrollFunction = () => {
      if (
        (document.body.scrollTop || document.documentElement.scrollTop) > 20
      ) {
        scooty.style.display = "block";
      } else {
        scooty.style.display = "none";
      }
    };
    // scrollFunction();
    // console.log(scooty);
  }, []);
  return (
    <div
      id="take-me-up "
      className="fixed bottom-3 right-[1px] w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center cursor-pointer z-[10000]"
    >
      <FiArrowUp
        onClick={() => {
          window.moveTo(0, 0);
        }}
      />
    </div>
  );
};

export default BackToTop;
