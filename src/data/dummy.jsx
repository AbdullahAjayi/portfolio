import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi"

import image1 from "../asset/images/image1.png"
import image2 from "../asset/images/image2.png"
import image3 from "../asset/images/image3.png"
import image4 from "../asset/images/image4.png"
import image5 from "../asset/images/image5.png"
import image6 from "../asset/images/image6.png"
import ai4lassa from "../asset/images/ai4lassa.png"
import mssnFutminna from "../asset/images/mssnFutminna.png"
import aquaGuard from "../asset/images/aquaGuard.png"
import brainwave from "../asset/images/brainwave.png"
import acadomart from "../asset/images/acadomart.png"

import svg1 from "../asset/svg/svg1.svg"
import svg2 from "../asset/svg/svg2.svg"
import svg3 from "../asset/svg/svg3.svg"

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
]

// Social links

const socials = [
  { icon: <FiGithub />, link: "https://github.com/AbdullahAjayi" },
  { icon: <FiTwitter />, link: "https://twitter.com/abdullahajayi" },
  { icon: <FiInstagram />, link: "https://instagram.com/abdullahajayi" },
  {
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/abdullah-ajayi-%E1%B4%B0%E1%B4%B1%E2%B1%BD-018a36239/",
  },
]

// About Section

const about = {
  aboutMe: (
    <>
      Hey, I’m Abdullah. A Web Developer with a quiet obsession for building things that
      actually matter. I’m drawn to projects where clarity, craft, and impact meet —
      whether that means refining a brand’s message, designing an experience that builds
      trust, or creating tools that make complex work feel effortless.{" "}
      <span className="block mt-2">
        {" "}
        My work isn’t just about writing code. It’s about understanding the heart of an
        idea, shaping it into something tangible, and making sure it resonates with the
        people it’s meant to serve.{" "}
      </span>
      <span className="font-medium block mt-3">
        Because when something is built with purpose, it works better, lasts longer, and
        makes a real difference. ⚡⚡
      </span>
    </>
  ),
  engineering: (
    <>
      I build fast, reliable, and scalable websites — using modern JavaScript tools to
      make sure they work beautifully today and grow with you tomorrow. Whether working
      solo or as part of a team, I focus on creating a solid foundation so your site not
      only looks great, but performs flawlessly.
    </>
  ),
  design: (
    <>
      I don’t just make things “pretty” — I design for clarity, trust, and action. From
      typography to layout, every detail is tuned to guide visitors toward understanding
      your message and taking the next step. The goal isn’t decoration — it’s creating a
      seamless experience that works.
    </>
  ),
}

// Works section

const works = [
  {
    title: "AI4Lassa",
    image: ai4lassa,
    caption:
      "A public health platform that keeps communities informed about Lassa fever outbreaks, enables reporting of suspected cases, and provides resources to help prevent the spread. Designed with accessibility and clarity in mind, this project strengthened my skills in building impactful, real-world applications.",
    alt: "AI4Lassa platform homepage",
    tags: ["Next.js", "Tailwind CSS", "GSAP"],
    liveSite: "https://ai4lassa.vercel.app/",
  },
  {
    title: "MSSN FUTMinna Website",
    image: mssnFutminna,
    caption:
      "A complete website redesign for the Muslim Students’ Society of Nigeria (MSSN) FUTMinna chapter, aimed at improving information accessibility, event updates, and community engagement. Built with a mobile-first approach and enhanced with GSAP animations for smooth, engaging interactions.",
    alt: "MSSN FUTMinna website homepage",
    tags: ["Next.js", "Tailwind CSS", "GSAP"],
    liveSite: "https://mssn-futminna.vercel.app/",
  },
  {
    title: "Brainwave",
    image: brainwave,
    caption:
      "A modern UI project featuring clean layouts, generous whitespace, and engaging animations. Incorporates interactive elements, scroll-lock sections for focus, and a polished, responsive design.",
    alt: "Brainwave UI project",
    tags: ["React", "Tailwind", "GSAP"],
    githubLink: "https://github.com/AbdullahAjayi/brainwave",
    liveSite: "https://brainwave-three-azure.vercel.app/",
  },
  {
    title: "GPT3-AI Web",
    image: image2,
    caption:
      "A modern, AI-themed website built to sharpen my UI/UX skills. Focused on creating visually appealing interfaces and applying best practices in user experience design while using industry-standard tools.",
    alt: "GPT3-AI Web homepage",
    tags: ["CSS", "BEM", "UI/UX", "React", "Figma"],
    githubLink: "https://github.com/AbdullahAjayi/Gpt3aiweb",
    liveSite: "http://gpt3aiweb.vercel.app/",
  },
  {
    title: "AquaGuard",
    image: aquaGuard,
    caption:
      "A web interface for a smart pond monitoring and control system. Allows users to track and adjust key parameters such as turbidity, pH levels, temperature, and more — all from an intuitive, user-friendly dashboard.",
    alt: "AquaGuard smart pond monitoring interface",
    tags: ["React", "Tailwind CSS", "Chart.js", "API"],
    githubLink: "https://github.com/AbdullahAjayi/aquaguard",
    liveSite: "https://aquaguard.vercel.app/",
  },
  {
    title: "Minimal Tube",
    image: image3,
    caption:
      "A lightweight YouTube clone that allows users to browse categories, search, and watch videos with a clean, distraction-free interface. Built to deepen my proficiency in ReactJS and API integration.",
    alt: "Minimal Tube video browsing interface",
    tags: ["React", "Material UI", "JavaScript", "API"],
    githubLink: "https://github.com/AbdullahAjayi/youtube-clone",
    liveSite: "https://minimal-tube.vercel.app",
  },
  {
    title: "The CSS Box Model",
    image: image1,
    caption:
      "An interactive learning tool that helps beginners understand the CSS box model, including flexbox, margin, padding, and other key layout concepts. This project refined my front-end fundamentals while improving my ability to explain technical concepts visually.",
    alt: "The CSS Box Model learning interface",
    tags: ["CSS", "SASS", "JavaScript", "DOM"],
    githubLink: "https://github.com/AbdullahAjayi",
    liveSite: "https://the-css-box-model.vercel.app",
  },
  {
    title: "Random Advice Generator",
    image: image4,
    caption:
      "A simple yet engaging tool that fetches and displays random pieces of advice from an API. Developed to strengthen my skills in API integration, asynchronous JavaScript, and minimalist UI design.",
    alt: "Random Advice Generator app",
    tags: ["CSS", "JavaScript", "API"],
    githubLink: "https://github.com/AbdullahAjayi/Random-advice-genrator",
    liveSite: "https://random-advice-genrator.vercel.app",
  },
  {
    title: "Portfolio Website (v1)",
    image: image5,
    caption:
      "The first version of my personal portfolio site, featuring custom animations and interactive design elements. A valuable exercise in mastering Tailwind CSS, React, and SVG animations.",
    alt: "Portfolio website v1 homepage",
    tags: ["JavaScript", "Tailwind CSS", "React", "SVG"],
    // githubLink: "Private repository"
  },
  {
    title: "React Dashboard Application",
    image: image6,
    caption:
      "A fully responsive admin dashboard with charts, tables, and dynamic widgets. Built to explore industry-standard React patterns and component libraries through hands-on practice.",
    alt: "React dashboard interface",
    tags: ["Tailwind CSS", "React", "Syncfusion"],
    githubLink: "https://github.com/AbdullahAjayi/Admin-Dashboard",
    liveSite: "https://admin-dashboard-abdullahajayi.vercel.app/",
  },
]

// Services

const services = [
  {
    title: "Web Development",
    text: "I build high-quality, scalable websites and web applications tailored to your needs using HTML, CSS, JavaScript, and modern frameworks like React and Express. My approach centers on writing clean, maintainable code that scales with your needs and ensures a smooth experience for your users.",
    svg: svg1,
  },
  {
    title: "Responsive UI Design",
    text: "Designing interfaces that seamlessly adapt across devices is essential today. I craft intuitive, accessible user experiences with flexible grids and media queries, ensuring your website looks great and works flawlessly — whether on desktop, tablet, or mobile.",
    svg: svg2,
  },
  {
    title: "SEO",
    text: "I integrate technical SEO best practices into every project, optimizing meta tags, structured data, and semantic HTML. This ensures your site is not only user-friendly but also easily discoverable by search engines, helping you reach and engage your target audience effectively.",
    svg: svg3,
  },
]

const technologies = [
  "React",
  "Next.Js",
  "Tailwind",
  "MongoDB",
  "NodeJS",
  "CSS3",
  "Javascript",
  "HTML5",
  "Express",
  "GSAP",
]

const experience = [
  {
    company: "palladium innovations",
    role: "web development trainer",
    desc: "For a period of two weeks, I worked as a trainer at Palladium Innovations, a digital marketing agency based in Lagos, Nigeria, where I taught people the fundamentals of website development.",
    link: "https://www.facebook.com/palladiuminnovations/",
  },
  {
    company: "Inexus 3.0 (Organized by MSSN Futminna)",
    role: "Web Development Track Facilitator",
    desc: "Led the Web Development track for Inexus 3.0, a 4-Week program organized by MSSN Futminna, providing hands-on training and mentorship to aspiring developers to equip them with industry-relevant skills.",
    link: "https://www.linkedin.com/posts/abdullah-ajayi_getting-people-into-the-world-of-web-dev-activity-7349399176243200000-f5G3",
  },
]

export { navItems, socials, about, works, services, technologies, experience }
