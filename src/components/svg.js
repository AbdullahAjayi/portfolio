let paths = document.querySelectorAll(".path");

console.log(paths);
fillSvgPaths();
document.addEventListener("scroll", fillSvgPaths);

function fillSvgPaths() {
  let percentageScroll =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  for (let i = 0; i < paths.length; i++) {
    let path = paths[i];
    path.style.transition = "strokeDashOffset 1s";
    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    let drawLength = pathLength * percentageScroll;

    path.style.strokeDashoffset = pathLength - drawLength;
  }

  //   console.log(Math.round(percentageScroll * 100));
}
