import { socials } from "../data/dummy";

const Socials = () => {
  return (
    <div className="socials text-[#090e50] hidden md:flex gap-5">
      <ul className="social-links flex fixed left-6 bottom-0 flex-col text-xl items-center">
        {socials.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <div className="cursor-pointer hover:text-blue-700 transition-transform duration-200 hover:-translate-y-1 p-3">
                {item.icon}
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="social-links flex items-center fixed right-6 vertical-lr bottom-0">
        <a
          href="mailto:hafizajayi2308@gmail.com"
          className="hover:-translate-y-1 transition-transform duration-200 hover:text-blue-700"
        >
          hafizajayi2308@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Socials;
