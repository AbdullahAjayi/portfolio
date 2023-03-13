import bgSvg from "../asset/svg/Jet1.svg";
function BgSvg() {
  return (
    <object
      className="fixed top-1/2 left-1/2 opacity-[.12] z-[-10000] -translate-x-1/2 -translate-y-1/2"
      data={bgSvg}
      type="image/svg+xml"
    ></object>
  );
}

export default BgSvg;
