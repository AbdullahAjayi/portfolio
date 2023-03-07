import logo from "../asset/svg/intro_logo.svg";
const Logo = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <object data={logo} type="image/svg+xml"></object>
    </div>
  );
};

export default Logo;
