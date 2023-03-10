import elementInView from "./elementInView";
const handleScrollAnimation = () => {
  const scrollAnimElements = document.querySelectorAll(".animate-on-scroll");
  const animateOnScroll = () => {
    scrollAnimElements.forEach((element) => {
      if (element.classList.contains("box")) {
        if (elementInView(element, 2 / 3)) {
          element.classList.add("fade-in-bottom");
        } else {
          element.classList.remove("fade-in-bottom");
        }
      } else if (elementInView(element, 1 / 4)) {
        element.classList.add("fade-in-bottom");
      } else {
        element.classList.remove("fade-in-bottom");
      }
    });
  };
  animateOnScroll();
};

export default handleScrollAnimation;
