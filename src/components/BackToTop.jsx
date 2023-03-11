import { FiArrowUp } from "react-icons/fi";
const BackToTop = () => {
  return (
    <div
      id="take-me-up"
      className={`fixed bottom-3 right-[5px] md:right-[50px] w-10 h-10 bg-blue-100 rounded-full ${
        document.documentElement.scrollTop > 200 ? "flex" : "hidden"
      } justify-center items-center cursor-pointer z-[10000]`}
    >
      <FiArrowUp
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
      />
    </div>
  );
};

export default BackToTop;
