import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

import image1 from "../asset/images/image1.png";
import image2 from "../asset/images/image2.png";
import image3 from "../asset/images/image3.png";
import image4 from "../asset/images/image4.png";
import image5 from "../asset/images/image5.png";
import image6 from "../asset/images/image6.png";

import svg1 from "../asset/svg/svg1.svg";
import svg2 from "../asset/svg/svg2.svg";
import svg3 from "../asset/svg/svg3.svg";

const navItems = [
  {
    title: "About",
    navigation: "#about",
  },
  {
    title: "Work",
    navigation: "#work",
  },
  {
    title: "What I do",
    navigation: "#services",
  },
  {
    title: "Contact",
    navigation: "#contact",
  },
];

// Social links

const socials = [
  { icon: <FiGithub />, link: "https://github.com/AbdullahAjayi" },
  { icon: <FiTwitter />, link: "https://twitter.com/abdullahajayi" },
  { icon: <FiInstagram />, link: "https://instagram.com/abdullahajayi" },
  {
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/abdullah-ajayi-018a36239/",
  },
];

// About Section

const about = {
  aboutMe: (
    <>
      Hello, my name is Abdullah. I'm passionate about problem-solving and
      turning abstract ideas into reality. Whether it's tackling technical
      challenges or finding creative solutions to design problems,{" "}
      <span className="font-medium">
        I thrive on overcoming obstacles and delivering results.
      </span>{" "}
      I have a keen eye for detail and a collaborative spirit, always eager to
      take on new challenges and explore innovative ways to bring ideas to life.
    </>
  ),
  engineering: (
    <>
      With{" "}
      <span className="font-medium">
        over a year of experience in the industry
      </span>
      , my expertise lies in creating robust JavaScript applications, leveraging
      the latest tools and technologies. Prioritizing performance and
      scalability, I can work independently or collaboratively to achieve
      desired results.
    </>
  ),
  design: `You may not find me spending hours adjusting pixels on an illustrator artboard, but I design. You'll
  often find me immersed in stylesheets, fine-tuning font sizes and
  perfecting layouts. My focus is on crafting seamless user
  experiences that are both intuitive and visually striking.`,
};

// Works section

const works = [
  {
    title: "The css box model",
    image: image1,
    caption:
      "A website aimed at assisting beginners in comprehending complicated ideas related to the CSS box model, including flex-box, margin, padding, and other box elements.",
    alt: "The css box model",
    tags: ["CSS", "SASS", "JavaScript", "DOM"],
    githubLink: "https://github.com/AbdullahAjayi",
    liveSite: "https://the-css-box-model.vercel.app",
  },
  {
    title: "GPT3-ai web",
    image: image2,
    caption:
      "A website I designed and developed to hone my skills in UI/UX. This project allowed me to gain experience in creating visually appealing interfaces, implementing best practices in user experience design, and utilizing industry-standard design tools.",
    alt: "GPT3-ai web",
    tags: ["CSS", "BEM", "UI UX", "React", "Figma"],
    githubLink: "https://github.com/AbdullahAjayi/Gpt3aiweb",
    liveSite: "http://gpt3aiweb.vercel.app/",
  },
  {
    image: image3,
    title: "Minimal Tube",
    caption:
      "A YouTube clone I developed using ReactJS, to improve my skills. The clone allows users to browse video categories, search for videos, and watch them on the site. Through this project, I was able to enhance my proficiency in ReactJS and expand my knowledge of web development.",
    alt: "Minimal Tube",
    tags: ["ReactJS", "Material UI", "JavaScript", "API"],
    githubLink: "https://github.com/AbdullahAjayi/youtube-clone",
    liveSite: "https://minimal-tube.vercel.app",
  },
  {
    title: "Random Advice Generator",
    image: image4,
    caption:
      "A challenge I tackled from Frontend Mentor to improve my skills in CSS, JavaScript, API integration, and design.",
    alt: "Random Advice generator",
    tags: ["CSS", "JavaScript", "API"],
    githubLink: "https://github.com/AbdullahAjayi/Random-advice-genrator",
    liveSite: "https://random-advice-genrator.vercel.app",
  },
  {
    title: "Portfolio Website (v1)",
    image: image5,
    caption:
      "This is the website you're currently exploring, and I learned a great deal about CSS and SVG animations while creating it.",
    alt: "",
    tags: ["JavaScript", "Tailwind", "CSS", "React", "SVG"],
  },
  {
    title: "React Dashboard Application",
    image: image6,
    caption:
      "I spent several days building this impressive app by following a tutorial on YouTube, which helped me to learn more about industry-standard React code practices.",
    alt: "",
    tags: ["Tailwind", "React", "Syncfusion"],
    githubLink: "https://github.com/AbdullahAjayi/Admin-Dashboard",
    liveSite: "https://admin-dashboard-abdullahajayi.vercel.app/",
  },
];

// Services

const services = [
  {
    title: "Web Development",
    text: "I specialize in building high-quality, responsive websites and web applications using HTML, CSS, JavaScript, and popular frameworks such as React and Express. My coding practices are focused on writing clean, efficient, and reusable code that is both easy to maintain and scalable for future growth.",
    svg: svg1,
  },
  {
    title: "Responsive UI Design",
    text: "Creating user interfaces that can adapt to various devices is crucial in modern web development. I use flexible grids, media queries, and other front-end techniques to design beautiful and functional web experiences that are accessible to everyone. My focus is on making intuitive interfaces that provide a great user experience on all platforms.",
    svg: svg2,
  },
  {
    title: "SEO",
    text: "As a web developer, I understand the importance of technical optimization for search engine optimization (SEO). By implementing best practices such as optimizing meta tags, structured data markup, and semantic HTML, I ensure that I develop websites that search engines can easily crawl and index. ",
    svg: svg3,
  },
];

const technologies = [
  "React",
  "Next Js",
  "Tailwind",
  "MongoDB",
  "NodeJS",
  "CSS3",
  "Javascript",
  "HTML5",
  "Express",
  "Material UI",
];

const experience = [
  {
    company: "palladium innovations",
    role: "web development trainer",
    desc: "For a period of two weeks, I worked as a trainer at Palladium Innovations, a digital marketing agency based in Lagos, Nigeria, where I taught people the fundamentals of website development.",
    link: "https://www.facebook.com/palladiuminnovations/",
  },
];

export { navItems, socials, about, works, services, technologies, experience };
