import useMedia from "../hooks/mediaQuery";
import { FiGithub, FiLink } from "react-icons/fi";

import { works } from "../data/dummy";
import { globalStyles } from "../styles/globalStyles";

const styles = {
  projectTags: "bg-blue-100 rounded-lg p-1 px-2 w-fit cursor-pointer",
  projectLinks: "cursor-pointer hover:bg-blue-100 p-3 rounded-lg",
  workList: "mt-4 grid gap-3 gap-y-10",
  listItem: "flex flex-col border border-[#090e50] rounded-md p-2",
  image: "h-40 border border-[#090e50] overflow-hidden rounded-md",
};

const Works = () => {
  const [matches] = useMedia();

  return (
    <section id="work" className={`${globalStyles.section}`}>
      <h2 className={`${globalStyles.heading}`}>My Works.</h2>
      <p className={`${globalStyles.sectionParagraph}`}>
        While I have been engaged in a number of diverse and challenging
        projects, many of them are currently not ready for public viewing due to
        various reasons. However, here are some projects I built in the past
        year that I'm excited to share:
      </p>
      <ul
        className={`${styles.workList} ${
          matches < 550
            ? "grid-cols-1"
            : matches < 1000
            ? "grid-cols-2"
            : "grid-cols-3"
        }`}
      >
        {works.map((item, index) => (
          <li className={styles.listItem} key={index}>
            <div
              className={`${
                styles.image
              } cursor-pointer mb-2 flex-none w-full ${
                matches > 550 && matches < 1300 ? "flex items-center" : ""
              }`}
              style={{ backgroundColor: "lightblue" }}
            >
              <a href={item.liveSite} target="_blank" rel="noreferrer">
                <img
                  src={item?.image}
                  alt={item.alt}
                  className="hover:scale-110 duration-700"
                />
              </a>
            </div>
            <h3 className={globalStyles.subheading}>{item.title}</h3>
            <p className="mt-3 flex-1">{item.caption}</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {item.tags.map((tag, index) => (
                <li key={index} className={styles.projectTags}>
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-3">
              {item.githubLink ? (
                <a href={item.githubLink} className={styles.projectLinks}>
                  <i>{<FiGithub />}</i>
                </a>
              ) : (
                ""
              )}
              {item.liveSite ? (
                <a href={item.liveSite} className={styles.projectLinks}>
                  <i>{<FiLink />}</i>
                </a>
              ) : (
                ""
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Works;
