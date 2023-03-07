import image1 from "../asset/images/image1.png";
import image2 from "../asset/images/image2.png";
import image3 from "../asset/images/image3.png";
import image4 from "../asset/images/image4.png";

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

// About Section

const about = {
  aboutMe: `Hello, my name is Abdullah. I'm passionate about problem-solving and
      turning abstract ideas into reality. Whether it's tackling technical
      challenges or finding creative solutions to design problems, I thrive on
      overcoming obstacles and delivering results. I have a keen eye for detail
      and a collaborative spirit, always eager to take on new challenges and
      explore innovative ways to bring ideas to life.`,
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
  design: `I may not fit the stereotype of a designer who spends hours
  adjusting pixels on an Illustrator artboard, but I design. You'll
  often find me immersed in stylesheets, fine-tuning font sizes and
  perfecting layouts. My focus is on crafting seamless user
  experiences that are both intuitive and visually striking.`,
};

// Works section

const works = [
  {
    image: image1,
    title: "The css box model",
    caption:
      "A website I created to help newbies understand confusing concept surroudning the css box model such as flex-box, margin, padding and other box elements.",
    alt: "The css box model",
    tags: ["Css", "Sass", "JavaScript", "DOM"],
    githubLink: "https://github.com/AbdullahAjayi",
    liveSite: "https://the-css-box-model.vercel.app",
  },
  {
    image: image2,
    title: "GPT3-ai web",
    caption: "An awesome website I worked on to improve my UI UX skills.",
    alt: "GPT3-ai web",
    tags: ["Css", "BEM", "UI UX", "React"],
    githubLink: "https://github.com/AbdullahAjayi",
    liveSite: "https://gpt3aiweb.vercel.app",
  },
  {
    image: image3,
    title: "Minimal Tube",
    caption:
      "A website built to test my Reactjs skills, by building a YouTube clone where you can browse categories of videos, search, watch and lots more.",
    alt: "Minimal Tube",
    tags: ["ReactJS", "Material UI", "JavaScript"],
    githubLink: "https://github.com/AbdullahAjayi",
    liveSite: "https://minimal-tube.vercel.app",
  },
  {
    image: image4,
    title: "Random Advice Generator",
    caption:
      "A challenge I took from the front-end mentor website to improve my CSS, JavaScript, API and design skills.",
    alt: "Random Advice generator",
    tags: ["Css", "Sass", "JavaScript", "API"],
    githubLink: "https://github.com/AbdullahAjayi",
    liveSite: "https://random-advice-generator.vercel.app",
  },
  {
    image: "",
    title: "Lorem Ipsum",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, at! Similique animi exercitationem voluptate sit!",
    alt: "",
    tags: ["Css", "Sass", "JavaScript"],
    githubLink: "https://github.com/AbdullahAjayi",
    liveSite: "",
  },
  {
    image: "",
    title: "Lorem Ipsum",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, at! Similique animi exercitationem voluptate sit!",
    alt: "",
    tags: ["Css", "Sass", "JavaScript"],
    githubLink: "https://github.com/AbdullahAjayi",
    liveSite: "",
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
  "Javascript",
  "CSS3",
  "HTML5",
  "React",
  "NodeJS",
  "MongoDB",
  "Express",
  "Tailwind",
  "Material UI",
];

const experience = [
  {
    company: "palladium innovations",
    role: "trainer",
    desc: "Worked as a trainer for 2 weeks at Palladium Innovations. A digital marketing agency based in lagos, Nigeria.",
    link: "https://www.facebook.com/palladiuminnovations/",
  },
  {
    company: "xaliyo",
    role: "lead developer",
    desc: "A new startup based in lagos, Nigeria",
  },
];

export { navItems, about, works, services, technologies, experience };
