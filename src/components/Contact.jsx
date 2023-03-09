import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

import { globalStyles } from "../styles/globalStyles";

const socials = [
  { icon: <FiGithub />, link: "https://github.com/AbdullahAjayi" },
  { icon: <FiTwitter />, link: "https://twitter.com/abdullahajayi" },
  { icon: <FiInstagram />, link: "https://instagram.com/abdullahajayi" },
  {
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/abdullah-ajayi-018a36239/",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className={`${globalStyles.section} flex flex-col md:items-center`}
    >
      <h1 className={`animate-on-scroll ${globalStyles.heading}`}>
        Get In Touch.
      </h1>
      <p
        className={`animate-on-scroll ${globalStyles.sectionParagraph} md:text-center`}
      >
        I am looking forward to working with a team of creative designers and
        developers working towards bringing an idea to life. If you think we
        might be a good fit for each other, or just want to say hello, go Ahead!
        Send me a mail{" "}
        <a
          href="mailto:hafizajayi2308@gmail.com"
          className={globalStyles.secondaryBtn}
        >
          @hafizajayi2308@gmail.com
        </a>
        .
      </p>
      <div className="md:hidden mt-5">
        <p className="text-lg italic">Or connect with me on Social media</p>
        <ul className="flex md:hidden gap-6 text-xl mt-5">
          {socials.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <div className="cursor-pointer hover:text-blue-700">
                  {item.icon}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
