import { globalStyles } from "../styles/globalStyles";

const Footer = () => {
  return (
    <div className={`${globalStyles.section} pb-10`}>
      <div className="border-t border-[#090e50] pt-5 sm:text-center">
        <a
          href="https://github.com/AbdullahAjayi"
          target="_blank"
          rel="noreferrer"
          className="animate-on-scroll text-sm text-blue-700 underline hover:no-underline"
        >
          Designed & built by Abdullah Ajayi
        </a>
      </div>
    </div>
  );
};

export default Footer;
