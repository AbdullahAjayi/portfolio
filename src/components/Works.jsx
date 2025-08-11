import { useState } from "react"
import useMedia from "../hooks/mediaQuery"
import { FiExternalLink, FiGithub } from "react-icons/fi"
import { works } from "../data/dummy"
import { globalStyles } from "../styles/globalStyles"

const styles = {
  projectTags: "bg-blue-100 rounded-lg p-1 px-2 w-fit cursor-pointer",
  projectLinks: "cursor-pointer hover:bg-blue-100 p-3 rounded-lg",
  workList: "mt-4 grid gap-3 gap-y-10",
  listItem: "box flex flex-col border border-[#090e50] rounded-md p-2",
  image: "h-40 border border-[#090e50] overflow-hidden rounded-md",
}

const Works = () => {
  const { matchesWidth } = useMedia()
  const [showAll, setShowAll] = useState(false)

  // Determine which projects to display
  const visibleWorks = showAll ? works : works.slice(0, 6)

  return (
    <section id="work" className={`${globalStyles.section}`}>
      <h2 className={`${globalStyles.heading}`}>My Work</h2>
      <p className={`${globalStyles.sectionParagraph}`}>
        I’ve worked on a variety of projects — from sleek portfolio sites to
        purpose-driven tools. Some are under wraps for now, but here are a few I can share
        that highlight my approach to clarity, usability, and impact.
      </p>

      <ul
        className={`${styles.workList} ${
          matchesWidth < 550
            ? "grid-cols-1"
            : matchesWidth < 1000
            ? "grid-cols-2"
            : "grid-cols-3"
        }`}
      >
        {visibleWorks.map((item, index) => (
          <li className={styles.listItem} key={index}>
            <div
              className={`${styles.image} cursor-pointer mb-2 flex-none w-full bg-blue ${
                matchesWidth > 550 && matchesWidth < 1300 ? "flex items-center" : ""
              }`}
              // style={{ backgroundColor: "lightblue" }}
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
              {item.githubLink && (
                <a href={item.githubLink} target="_blank" className={styles.projectLinks}>
                  <FiGithub />
                </a>
              )}
              {item.liveSite && (
                <a href={item.liveSite} target="_blank" className={styles.projectLinks}>
                  <FiExternalLink />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      {works.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className={`px-6 py-3 ${globalStyles.btn} transition`}
          >
            {showAll ? "View less" : "View more"}
          </button>
        </div>
      )}
    </section>
  )
}

export default Works
