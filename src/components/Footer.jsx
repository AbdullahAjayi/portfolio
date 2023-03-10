import { socials } from "../data/dummy";
import { globalStyles } from "../styles/globalStyles";

const Footer = () => {
  return (
    <div className={`${globalStyles.section} pb-5`}>
      <div className="border-t border-[#090e50] pt-5 sm:text-center">
        <ul className="flex justify-center md:hidden gap-10 pb-4 text-xl mt-5">
          {socials.map((item, index) => (
            <li key={index} className="">
              <a href={item.link} target="_blank" rel="noreferrer">
                <div className="cursor-pointer hover:text-blue-700">
                  {item.icon}
                </div>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/AbdullahAjayi"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-700 underline hover:no-underline"
        >
          Designed & built by Abdullah Ajayi
        </a>
      </div>
    </div>
  );
};

export default Footer;
