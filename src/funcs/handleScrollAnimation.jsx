import elementInView from "./elementInView";
const handleScrollAnimation = () => {
  const scrollAnimElements = document.querySelectorAll(".animate-on-scroll");
  const animateOnScroll = () => {
    scrollAnimElements.forEach((element) => {
      if (element.classList.contains("box")) {
        if (elementInView(element, 1 / 2)) {
          element.classList.add("slide-top");
        } else {
          element.classList.remove("slide-top");
        }
      } else if (elementInView(element, 1 / 4)) {
        element.classList.add("slide-top");
      } else {
        element.classList.remove("slide-top");
      }
    });
  };
  animateOnScroll();
};

export default handleScrollAnimation;
