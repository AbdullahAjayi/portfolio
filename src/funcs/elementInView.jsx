// @desc: Checks to see if element is in view
const elementInView = (el, dimension = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  const elementHeight = el.getBoundingClientRect().height;
  return (
    // Returns true or false
    Math.round(elementTop) <=
      Math.round(
        window.innerHeight - (elementHeight - dimension * elementHeight)
      ) ||
    Math.round(elementTop) <=
      Math.round(
        document.documentElement.clientHeight -
          (elementHeight - dimension * elementHeight)
      )
  );
};

export default elementInView;
